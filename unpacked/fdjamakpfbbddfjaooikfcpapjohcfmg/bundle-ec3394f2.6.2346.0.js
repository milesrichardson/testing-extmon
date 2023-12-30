"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [3009],
  {
    120031: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const n = r(926634),
        a = r(201334),
        o = r(402548),
        s = r(339993),
        i = r(433733),
        c = r(479889),
        u = r(726847),
        d = r(968455);
      t.config = {
        commands: {
          getTeamInfo: { handler: a.getTeamInfo },
          getTeamOffers: { handler: o.getTeamOffers },
          getMidCycleTierUpgradePrice: { handler: s.getMidCycleTierUpgradePrice },
          getExpectedTaxInformation: { handler: i.getExpectedTaxInformation },
          changeTierMidCycle: { handler: c.changeTierMidCycle },
          computePlanPricing: { handler: u.computePlanPricing },
          addSeats: { handler: d.addSeats }
        },
        queries: { getIsRecoveryEnabled: { selector: n.isRecoveryEnabledSelector } },
        liveQueries: {}
      };
    },
    968455: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addSeats = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(411848),
        s = r(416593);
      t.addSeats = async function (e, t) {
        const { storeService: r } = e,
          i = (0, s.userLoginSelector)(r.getState());
        if (!i) throw new Error(n.AuthenticationCode[n.AuthenticationCode.USER_UNAUTHORIZED]);
        const c = await (0, o.addSeatsRequest)(r, i, t.seats);
        return (0, a.isApiError)(c)
          ? { success: !1, error: { code: n.AddSeatsErrorType.AddSeatsFailed, message: `Add Seats failed: ${c.message}` } }
          : { success: !0 };
      };
    },
    479889: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.changeTierMidCycle = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(338115),
        s = r(416593);
      t.changeTierMidCycle = async function (e, t) {
        const { storeService: r } = e,
          i = (0, s.userLoginSelector)(r.getState()),
          c = await (0, a.teamStatus)(r, i);
        if (!i || (0, a.isApiError)(c)) throw new Error(n.AuthenticationCode[n.AuthenticationCode.USER_UNAUTHORIZED]);
        const u = await (0, o.changeTierMidCycleRequest)(
          r,
          i,
          t.amountToPay,
          t.taxes,
          t.planId,
          t.couponCode,
          t.seatsToAdd,
          t.billingContactEmail
        );
        return (0, a.isApiError)(u)
          ? {
              success: !1,
              error: { code: n.ChangeTierMidCycleErrorType.ChangeTierMidCycleFailed, message: `Change Tier Mid Cycle failed: ${u.message}` }
            }
          : { success: !0 };
      };
    },
    726847: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.computePlanPricing = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(921712),
        s = r(416593);
      t.computePlanPricing = async function (e, t) {
        const { storeService: r } = e,
          i = (0, s.userLoginSelector)(r.getState());
        if (!i) throw new Error(n.AuthenticationCode[n.AuthenticationCode.USER_UNAUTHORIZED]);
        const c = await (0, o.computePlanPricingRequest)(r, i, t.seats);
        return (0, a.isApiError)(c)
          ? {
              success: !1,
              error: { code: n.ComputePlanPricingErrorType.ComputePlanPricingFailed, message: `Compute Plan Pricing failed: ${c.message}` }
            }
          : { success: !0, data: c };
      };
    },
    433733: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getExpectedTaxInformation = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(530782),
        s = r(416593);
      t.getExpectedTaxInformation = async function (e, t) {
        const { storeService: r } = e,
          i = (0, s.userLoginSelector)(r.getState());
        if (!i) throw new Error(n.AuthenticationCode[n.AuthenticationCode.USER_UNAUTHORIZED]);
        const c = await (0, o.getExpectedTaxInformationRequest)(r, i, t.priceInCents);
        return (0, a.isApiError)(c)
          ? {
              success: !1,
              error: {
                code: n.GetExpectedTaxInformationErrorType.GetExpectedTaxInformationFailed,
                message: `get Expected Price Information failed: ${c.message}`
              }
            }
          : { success: !0, data: c };
      };
    },
    339993: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getMidCycleTierUpgradePrice = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(178607),
        s = r(416593);
      t.getMidCycleTierUpgradePrice = async function (e, t) {
        const { storeService: r } = e,
          i = (0, s.userLoginSelector)(r.getState());
        if (!i) throw new Error(n.AuthenticationCode[n.AuthenticationCode.USER_UNAUTHORIZED]);
        const c = await (0, o.getMidCycleTierUpgradePriceRequest)(r, i, t.newPlan, t.numberOfSeats);
        return (0, a.isApiError)(c)
          ? {
              success: !1,
              error: {
                code: n.GetMidCycleTierUpgradePriceErrorType.GetMidCycleTierUpgradePriceFailed,
                message: `get Mid Cycle Tier Upgrade Price failed: ${c.message}`
              }
            }
          : { success: !0, data: c };
      };
    },
    402548: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTeamOffers = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(247115),
        s = r(416593);
      t.getTeamOffers = async function (e, t) {
        const { storeService: r } = e,
          i = (0, s.userLoginSelector)(r.getState());
        if (!i) throw new Error(n.AuthenticationCode[n.AuthenticationCode.USER_UNAUTHORIZED]);
        const c = await (0, o.getTeamOffersRequest)(r, i, t.couponCode);
        return (0, a.isApiError)(c)
          ? { success: !1, error: { code: n.GetTeamOffersErrorType.GetTeamOffersFailed, message: `get Team Offers failed: ${c.message}` } }
          : { success: !0, data: c };
      };
    },
    201334: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTeamInfo = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(416593);
      t.getTeamInfo = async function (e) {
        const { storeService: t } = e,
          r = (0, o.userLoginSelector)(t.getState()),
          n = await (0, a.teamStatus)(t, r);
        if ((0, a.isApiError)(n)) return s(n);
        const { billing: i, seats: c, info: u, planTier: d, capabilities: l } = n;
        return { success: !0, data: { billing: i, teamInfo: u, planTier: d, capabilities: l, seats: c } };
      };
      const s = (e) =>
          e.code === a.NotAdmin ? i(n.AuthenticationCode.UNAUTHORIZED, e.message) : i(n.AuthenticationCode.UNKNOWN_ERROR, e.message),
        i = (e, t) => ({ success: !1, reason: e, message: t });
    },
    589675: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setTeamSettings = t.makeSettingsController = void 0);
      const n = r(401067),
        a = r(134376),
        o = r(766833);
      t.makeSettingsController = (e, t) => ({ setTeamSettings: (r) => c(e, t, (0, a.getCurrentUserInfo)(e), r) });
      const s = (e) => e.replace(/([A-Z])/g, (e, t) => `_${t.toLowerCase()}`),
        i = (e, t) => (null !== t ? { type: `set_${s(e)}`, value: t } : { type: `unset_${s(e)}` });
      function c(e, t, { login: r, uki: a }, { teamId: s, settings: c }) {
        const u = (0, n.zipWith)(i, (0, n.keys)(c), (0, n.values)(c));
        return t.settings
          .setTeamSettings({ login: r, uki: a, teamId: s, operations: u })
          .then(
            () => (
              (0, o.updateCurrentSpaceWith)(e, (e) =>
                Object.assign({}, e, { details: Object.assign({}, e.details, { info: Object.assign({}, e.details.info, c) }) })
              ),
              {}
            )
          )
          .catch((e) => ({ error: e }));
      }
      t.setTeamSettings = c;
    },
    689763: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const n = r(120031);
      t.bootstrap = (e) => {
        e.register(n.config);
      };
    },
    114581: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var n = r(689763);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return n.bootstrap;
        }
      });
    },
    926634: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isPersonalSpaceEnabledSelector = t.isRecoveryEnabledSelector = void 0);
      const n = r(416593);
      (t.isRecoveryEnabledSelector = (e) => {
        const t = (0, n.activeSpacesSelector)(e)[0];
        return t?.info?.recoveryEnabled ?? !1;
      }),
        (t.isPersonalSpaceEnabledSelector = (e) => {
          const t = (0, n.activeSpacesSelector)(e)[0];
          return t?.info?.personalSpaceEnabled ?? !0;
        });
    },
    968541: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const n = r(692310),
        a = r(32159),
        o = r(231632),
        s = r(181529),
        i = r(276934),
        c = r(838396),
        u = r(306053),
        d = r(715028),
        l = r(69310),
        p = r(808995),
        m = r(976713),
        g = r(905829),
        S = r(676404),
        y = r(988063),
        v = r(494453),
        f = r(344974),
        A = r(227218),
        E = r(670363),
        I = r(50766),
        h = r(510002),
        _ = r(868538),
        T = r(933150),
        b = r(194228),
        C = r(260419),
        P = r(676154),
        D = r(970178),
        w = r(364690),
        O = r(507134),
        U = r(516382),
        M = r(604658),
        L = r(54419),
        N = r(311673),
        R = r(838045),
        G = r(562218);
      t.config = {
        commands: {
          completeTeamDomainRegistration: { handler: o.completeTeamDomainRegistration },
          deactivateTeamDomain: { handler: s.deactivateTeamDomain },
          getTeamDomains: { handler: c.getTeamDomains },
          getTeamDevice: { handler: u.getTeamDevice },
          listTeamDevices: { handler: d.listTeamDevices },
          deactivateTeamDevice: { handler: l.deactivateTeamDevice },
          registerTeamDomain: { handler: i.registerTeamDomain },
          registerTeamDevice: { handler: p.registerTeamDevice },
          registerTeamDeviceAccount: { handler: A.registerTeamDeviceAccount },
          getEncryptionServiceConfig: { handler: S.getEncryptionServiceConfig },
          generateAndSaveEncryptionServiceConfig: { handler: y.generateAndSaveEncryptionServiceConfig },
          clearSelfHostedESSettings: { handler: v.clearSelfHostedESSettings },
          getTeamDeviceEncryptedConfig: { handler: f.getTeamDeviceEncryptedConfig },
          updateTeamDeviceEncryptedConfig: { handler: E.updateTeamDeviceEncryptedConfig },
          updateTeamSettings: { handler: D.updateTeamSettings },
          parseMetadataFields: { handler: _.parseMetadataFieldsHandler },
          persistAdminProvisioningKey: { handler: T.persistAdminProvisioningKey },
          removeAdminProvisioningKey: { handler: C.removeAdminProvisioningKey },
          createSSOConnectorConfig: { handler: m.createSSOConnectorConfig },
          generateSSOConnectorKey: { handler: g.generateSSOConnectorKey },
          startAuditLogsQuery: { handler: I.startAuditLogsQuery },
          getAuditLogQueryResults: { handler: h.getAuditLogQueryResults },
          getRecoveryCodesAsTeamCaptain: { handler: P.getRecoveryCodesAsTeamCaptain },
          getInviteLink: { handler: w.getInviteLink },
          requestInviteLinkToken: { handler: G.requestInviteLinkToken },
          getInviteLinkForAdmin: { handler: O.getInviteLinkForAdmin },
          changeInviteLinkTeamKey: { handler: U.changeInviteLinkTeamKey },
          createInviteLink: { handler: M.createInviteLink },
          toggleInviteLink: { handler: L.toggleInviteLink },
          getLastADSyncDate: { handler: N.getLastADSyncDate },
          getSpecialUserGroupInviteValuesForMemberInTeam: { handler: R.getSpecialUserGroupInviteValuesForMemberInTeam },
          getSpecialUserGroupRevision: { handler: R.getSpecialUserGroupRevision }
        },
        queries: {
          getAdministrableUserGroup: { selector: n.administrableUserGroupSelector },
          getAdministrableUserGroups: { selector: n.administrableUserGroupsSelector },
          isGroupNameAvailable: { selector: n.isGroupNameAvailableSelector },
          getAdminProvisioningKey: { selector: b.adminProvisioningKeySelector }
        },
        liveQueries: {
          liveAdministrableUserGroup: { operator: a.administrableUserGroup$ },
          liveAdministrableUserGroups: { operator: a.administrableUserGroups$ },
          liveAdminProvisioningKey: { operator: a.adminProvisioningKey$ }
        }
      };
    },
    358415: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeDirectorySyncController = void 0);
      const n = r(107344),
        a = r(134376);
      t.makeDirectorySyncController = (e) => {
        const { storeService: t, localStorageService: r, wsService: o, sessionService: s, sharingService: i } = e;
        return {
          directorySyncForAllTeams: () => n.directorySyncForAllTeams(t, o, s),
          keyValidatedByTacAdmin: (e, c) =>
            (function (e, t, r, o, s, i, c) {
              const u = t.getTeamAdminData().teams[i],
                d = (0, a.getCurrentUserInfo)(t);
              return n
                .saveDirectorySyncKey(e, t, r, d, u, i, c)
                .then(() => n.directorySyncForTeam(t, o, s, i))
                .catch(() => {});
            })(i, t, r, o, s, e, c),
          keyRejectedByTacAdmin: (e, r) => n.keyRejectedByTacAdmin(t, o, e, r)
        };
      };
    },
    510002: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getAuditLogQueryResults = void 0);
      const n = r(453576),
        a = r(416593),
        o = r(46298);
      t.getAuditLogQueryResults = async function (e, t) {
        const { storeService: r } = e,
          s = (0, a.userLoginSelector)(r.getState()),
          i = await (0, o.getAuditLogsQueryResults)(r, s, t);
        return (0, o.isApiError)(i)
          ? {
              success: !1,
              error: {
                code: n.ApiAuditLogsErrorType.GetAuditLogQueryResultsFailed,
                message: `Get Audit Log Query Results failed: ${i.message}`
              }
            }
          : {
              success: !0,
              data: { auditLogs: i.results?.length ? i.results.map((e) => JSON.parse(e)) : [], nextToken: i.nextToken, state: i.state }
            };
      };
    },
    50766: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.startAuditLogsQuery = void 0);
      const n = r(453576),
        a = r(416593),
        o = r(46298);
      t.startAuditLogsQuery = async function (e, t) {
        const { storeService: r } = e,
          s = (0, a.userLoginSelector)(r.getState()),
          i = await (0, o.startAuditLogsQuery)(r, s, t);
        return (0, o.isApiError)(i)
          ? {
              success: !1,
              error: { code: n.ApiAuditLogsErrorType.StartAuditLogsQueryFailed, message: `Start Audit Logs Query failed: ${i.message}` }
            }
          : { success: !0, data: i };
      };
    },
    644293: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createTeamDeviceAccount = void 0);
      const n = r(46298),
        a = r(416593);
      t.createTeamDeviceAccount = async (e, t) => {
        const { storeService: r } = e,
          o = r.getState(),
          s = (0, a.userLoginSelector)(o);
        if (!s) throw new Error("\n            [createTeamDeviceAccount] - Session not opened!\n        ");
        const i = await (0, n.createTeamDeviceAccount)(r, s, t);
        return (0, n.isApiError)(i)
          ? { success: !1, error: { code: (0, n.getCode)(i.code, n.createTeamDeviceAccountErrors) } }
          : { success: !0, data: { login: i.login } };
      };
    },
    69310: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deactivateTeamDevice = void 0);
      const n = r(46298),
        a = r(416593);
      t.deactivateTeamDevice = async function (e, { teamDeviceAccessKey: t }) {
        const { storeService: r } = e,
          o = r.getState(),
          s = (0, a.userLoginSelector)(o);
        if (!s) throw new Error("\n            [registerTeamDeviceRequest] - Session not opened!\n        ");
        const i = await (0, n.deactivateTeamDevice)(r, s, { teamDeviceAccessKey: t });
        return (0, n.isApiError)(i)
          ? { success: !1, error: { code: (0, n.getCode)(i.code, n.deactivateTeamDeviceErrors) } }
          : { success: !0, data: {} };
      };
    },
    306053: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTeamDevice = void 0);
      const n = r(46298),
        a = r(416593);
      t.getTeamDevice = async function (e, t) {
        const { storeService: r } = e,
          { teamDeviceAccessKey: o } = t,
          s = r.getState(),
          i = (0, a.userLoginSelector)(s);
        if (!i) throw new Error("[getTeamDevice] - Session not opened!");
        const c = await (0, n.getTeamDevice)(r, i, { teamDeviceAccessKey: o });
        return (0, n.isApiError)(c)
          ? { success: !1, error: { code: (0, n.getCode)(c.code, n.getTeamDeviceErrors) } }
          : { success: !0, data: { teamDevice: c.teamDevice } };
      };
    },
    715028: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listTeamDevices = void 0);
      const n = r(46298),
        a = r(416593);
      t.listTeamDevices = async function (e) {
        const { storeService: t } = e,
          r = t.getState(),
          o = (0, a.userLoginSelector)(r);
        if (!o) throw new Error("[listTeamDevices] - Session not opened!");
        const s = await (0, n.listTeamDevices)(t, o);
        return (0, n.isApiError)(s)
          ? { success: !1, error: { code: (0, n.getCode)(s.code, n.listTeamDevicesErrors) } }
          : { success: !0, data: { teamDevices: s.teamDevices } };
      };
    },
    808995: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.registerTeamDevice = void 0);
      const n = r(46298),
        a = r(416593);
      t.registerTeamDevice = async function (e, t) {
        const { storeService: r } = e,
          { deviceName: o, platform: s } = t,
          i = r.getState(),
          c = (0, a.userLoginSelector)(i);
        if (!c) throw new Error("\n            [registerTeamDeviceRequest] - Session not opened!\n        ");
        const u = await (0, n.registerTeamDevice)(r, c, { platform: s, deviceName: o });
        return (0, n.isApiError)(u)
          ? { success: !1, error: { code: (0, n.getCode)(u.code, n.registerTeamDeviceErrors) } }
          : { success: !0, data: { teamUuid: u.teamUuid, deviceAccessKey: u.deviceAccessKey, deviceSecretKey: u.deviceSecretKey } };
      };
    },
    311673: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getLastADSyncDate = void 0);
      const n = r(46298),
        a = r(416593),
        o = r(843154);
      t.getLastADSyncDate = async function (e) {
        const { storeService: t } = e,
          r = (0, a.userLoginSelector)(t.getState()),
          s = { success: !1, error: { code: n.NotAdmin } };
        if (!r) return s;
        try {
          (0, o.requireAdmin)(t);
        } catch {
          return s;
        }
        const i = await (0, n.lastADSyncDate)(t, r);
        return (0, n.isApiError)(i)
          ? { success: !1, error: { code: (0, n.getCode)(i.code, n.lastADSyncDateErrors) } }
          : { success: !0, data: { ...i } };
      };
    },
    107344: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isDirectorySyncActivated =
          t.keyRejectedByTacAdmin =
          t.isSignatureValid =
          t.buildVerifiedSyncResponseData =
          t.keyToXMLB64 =
          t.chainOperations =
          t.batchOperations =
          t.directorySyncForTeam =
          t.directorySyncForAllTeams =
          t.saveDirectorySyncKey =
            void 0);
      const n = r(801370),
        a = r(219478),
        o = r(148005),
        s = r(803674),
        i = r(736513),
        c = r(795623),
        u = r(670252),
        d = r(144197),
        l = r(278320),
        p = r(319697),
        m = r(543927),
        g = r(656915),
        S = r(674042),
        y = r(493513);
      (t.saveDirectorySyncKey = async function (e, t, r, a, o, s, i) {
        return c().catch(function (t) {
          if ("Bad Request (ITEM_GROUP_UPDATE_CONFLICT)" === t.message)
            return (function () {
              const { login: t, uki: r } = a;
              return (0, m.loadSpecialItemGroup)(e.ws, t, r, o)
                .then(p)
                .then(c)
                .then(() => {});
            })();
          throw t;
        });
        function c() {
          return (async function () {
            const t = await (async function () {
              const { specialItemGroup: t } = o,
                { crypto: r } = e,
                n = await r.symmetricEncryption.generateNewAESKey(),
                s = await (0, d.getSpecialItemGroupKey)(r, a, o),
                c = { publicKey: i },
                u = y.encode(JSON.stringify(c)),
                p = await r.symmetricEncryption.encryptAES256(n, u),
                m = await r.symmetricEncryption.encryptAES256(s, y.encode(n)),
                g = (0, l.generateItemUuid)(),
                S = await e.item.makeItemUpload(g, m, p);
              return await e.item.makeAddItemsEvent(t.groupId, t.revision, [S]);
            })();
            return e.item.addItems(e.ws, a.login, a.uki, t);
          })().then(u);
        }
        async function u(n) {
          return (0, S.updateAdminDataAfterItemAddedOrUpdated)(t, r, e.ws, a, s, n).then(() => {});
        }
        function p(e) {
          const r = (0, n.specialItemGroupUpdated)(s, e);
          return t.dispatch(r), Promise.resolve();
        }
      }),
        (t.directorySyncForAllTeams = function (e, t, r) {
          const n = e.getTeamAdminData();
          return Object.keys(n.teams).map((n) => E(e, t, r, n));
        });
      class v extends Error {
        constructor(e = "") {
          super(e), (this.name = "NoRequestError");
        }
      }
      class f extends Error {
        constructor(e = "") {
          super(e), (this.name = "NewPublicKeyError");
        }
      }
      class A extends Error {
        constructor(e = "", t) {
          super(e), (this.name = "InvalidSignatureError"), (this.syncResponse = t);
        }
      }
      function E(e, t, r, n) {
        const i = (0, s.makeTeamAdminController)(e, t);
        return (function () {
          const t = e.getState().userSession.directorySync;
          return (0, o.isTeamDirectorySyncInProgress)(t, n);
        })()
          ? (c.default.log(`[Directory Sync] Skipping: sync already in progress for team ${n}`), Promise.resolve())
          : (e.dispatch((0, a.teamDirectorySyncInProgress)(n)),
            (async function () {
              const r = e.getUserLogin(),
                a = (0, g.ukiSelector)(e.getState()),
                o = { teamId: Number(n), login: r, uki: a };
              return await t.teamPlans.getDirectorySyncRequest(o);
            })()
              .then(async function (e) {
                if (!e.content) throw new v();
                return e;
              })
              .then(async function (t) {
                const { publicKey: r, id: a } = t.content,
                  o = e.getTeamAdminData().teams[n].directorySyncKey,
                  s = o && o.publicKey,
                  i = _(r);
                if (i !== s) {
                  const e = { teamId: n, publicKey: i, requestId: a };
                  (0, p.default)().checkDirectorySyncKeyRequest(e);
                  const r = `[Directory Sync] in sync request ${t.content.id} for team ${n}: new public key detected for syncRequest.`;
                  throw (c.default.log(r), new f());
                }
                return t;
              })
              .then(async function (e) {
                if (!(await b(e, n))) {
                  const t = `[Directory Sync] in sync request ${e.content.id} for team ${n}: invalid signature.`;
                  throw (c.default.log(t), new A(t, e));
                }
                return e;
              })
              .then(async function (t) {
                const a = e.getTeamAdminData().teams[n].userGroups || [],
                  o = t.content.userGroups || [],
                  s = (function (e, t) {
                    const r = t.map((e) => e.groupId);
                    return e.filter((e) => !!e.externalId).filter((e) => !r.includes(e.externalId));
                  })(a, o),
                  c = (function (e, t) {
                    const r = e.filter((e) => !!e.externalId).map((e) => e.externalId);
                    return t.filter((e) => !r.includes(e.groupId));
                  })(a, o),
                  d = (function (e, t) {
                    const r = e.filter((e) => !!e.externalId).map((e) => e.externalId);
                    return t.filter((e) => r.includes(e.groupId));
                  })(a, o),
                  l = s.map((e) =>
                    (function (e) {
                      const t = (function (e) {
                        const { groupId: t, revision: r } = e;
                        return { groupId: t, revision: r };
                      })(e);
                      return () => i.deleteUserGroupAction(t);
                    })(e)
                  ),
                  p = c.map((e) =>
                    (function (e) {
                      const t = (function (e) {
                        const t = e.groupName,
                          r = e.groupId;
                        return { teamId: Number(n), externalId: r, name: t };
                      })(e);
                      return () =>
                        i.createUserGroupAction(r, t).then((t) =>
                          (function (e, t) {
                            return e.userGroups.length > 0 ? S(e.userGroups[0], t) : Promise.resolve();
                          })(t, e)
                        );
                    })(e)
                  ),
                  m = d
                    .map((e) =>
                      (function (e, t) {
                        const r = t.find((t) => t.externalId === e.groupId);
                        if (!r) return [];
                        const n = [];
                        if (e.groupName !== r.name) {
                          const t = () =>
                            (function (e, t) {
                              const r = (function (e, t) {
                                return { groupId: e.groupId, name: t.groupName, revision: e.revision };
                              })(e, t);
                              return i.renameUserGroupAction(r);
                            })(r, e);
                          n.push(t);
                        }
                        if (
                          (function (e, t) {
                            const r = e.users.map((e) => e.alias);
                            return t.memberLogins.some((e) => !r.includes(e));
                          })(r, e)
                        ) {
                          const t = () => S(r, e);
                          n.push(t);
                        }
                        if (
                          (function (e, t) {
                            return e.users.map((e) => e.alias).some((e) => !t.memberLogins.includes(e));
                          })(r, e)
                        ) {
                          const t = () =>
                            (function (e, t) {
                              const r = e.users.map((e) => e.alias).filter((e) => !t.memberLogins.includes(e)),
                                n = { groupId: e.groupId, revision: e.revision, users: r };
                              return i.revokeUserGroupMembersAction(n);
                            })(r, e);
                          n.push(t);
                        }
                        return n;
                      })(e, a)
                    )
                    .reduce((e, t) => e.concat(t), []),
                  g = [...l, ...p],
                  y = m;
                return (
                  [...(await h(g)), ...(await I(y))]
                    .filter((e) => e.error)
                    .map((e) => e.error)
                    .forEach((e) => {
                      const r = `[Directory Sync] in sync request ${t.content.id} for team ${n}: an operation on groups failed: ${e}`,
                        a = new Error(r);
                      (0, u.sendExceptionLog)({ error: a });
                    }),
                  t
                );
              })
              .then(async function (e) {
                return d(), l(e).then(() => {});
              })
              .catch(async function (e) {
                switch ((d(), e.name)) {
                  case "NoRequestError":
                  case "NewPublicKeyError":
                    break;
                  case "InvalidSignatureError": {
                    const t = e,
                      { syncResponse: r } = t;
                    l(r, "invalid_signature").then(() => {});
                    break;
                  }
                  default: {
                    const t = new Error(`[Directory Sync] unexpected error for team ${n}: ${e}`);
                    (0, u.sendExceptionLog)({ error: t });
                  }
                }
              }));
        function d() {
          e.dispatch((0, a.teamDirectorySyncNotInProgress)(n));
        }
        function l(r, a) {
          const {
              content: { id: o }
            } = r,
            s = e.getUserLogin(),
            i = (0, g.ukiSelector)(e.getState()),
            c = { teamId: Number(n), login: s, uki: i, requestId: o },
            u = Object.assign({}, c, a ? { syncError: a } : {});
          return t.teamPlans.updateDirectorySyncRequestStatus(u);
        }
        function m(e) {
          return { alias: e, permission: "limited" };
        }
        function S(e, t) {
          const r = e.users.map((e) => e.alias),
            a = t.memberLogins.filter((e) => !r.includes(e)),
            o = { groupId: e.groupId, revision: e.revision, users: a.map(m), teamId: Number(n) };
          return i.inviteUserGroupMembersAction(o);
        }
      }
      function I(e) {
        const t = e.map((e) =>
          e()
            .then((e) => ({ success: !0, result: e }))
            .catch((e) => ({ success: !1, error: e }))
        );
        return Promise.all(t);
      }
      async function h(e, t = []) {
        const [r, ...n] = e;
        if (!r) return t;
        let a;
        try {
          a = { success: !0, result: await r() };
        } catch (e) {
          a = { success: !1, error: e };
        }
        return h(n, [...t, a]);
      }
      function _({ modulus: e, exponent: t }) {
        const r = `<RSAKeyValue><Modulus>${e}</Modulus><Exponent>${t}</Exponent></RSAKeyValue>`;
        return y.encode(r);
      }
      function T(e, t, r) {
        return (
          e +
          t
            .sort(function (e, t) {
              return e.groupId < t.groupId ? -1 : e.groupId > t.groupId ? 1 : 0;
            })
            .map(
              r
                ? function (e) {
                    const t = e.memberLogins.sort(n);
                    return e.groupId + e.groupName + t.join("");
                  }
                : function (e) {
                    const t = e.memberLogins.sort();
                    return e.groupId + e.groupName + t.join("");
                  }
            )
            .join("")
        );
        function n(e, t) {
          const r = a(e),
            n = a(t);
          return r < n
            ? -1
            : r > n
            ? 1
            : (function (e, t) {
                if (e.length < t.length) return -1;
                if (e.length > t.length) return 1;
                const r = e.split("-").length - 1,
                  n = t.split("-").length - 1;
                return r < n ? -1 : r > n ? 1 : 0;
              })(e, t);
        }
        function a(e) {
          let t = e.replace(/[-']/g, "");
          return (t = t.replace(/\./g, "$")), (t = t.replace(/@/g, "%")), (t = t.replace(/_/g, "'")), t;
        }
      }
      async function b(e, t) {
        const {
            content: { signature: r, userGroups: n, publicKey: a }
          } = e,
          o = async (e) => {
            const o = T(t, n, e),
              s = y.encode(o),
              c = (0, i.makeAsymmetricEncryption)();
            return await c.verifyJwk(a, r, s);
          };
        return (await o(!1)) || o(!0);
      }
      (t.directorySyncForTeam = E),
        (t.batchOperations = I),
        (t.chainOperations = h),
        (t.keyToXMLB64 = _),
        (t.buildVerifiedSyncResponseData = T),
        (t.isSignatureValid = b),
        (t.keyRejectedByTacAdmin = function (e, t, r, n) {
          const a = e.getUserLogin(),
            o = (0, g.ukiSelector)(e.getState()),
            s = { teamId: Number(r), login: a, uki: o, requestId: n, syncError: "key_rejected" };
          return t.teamPlans.updateDirectorySyncRequestStatus(s).then(() => {});
        }),
        (t.isDirectorySyncActivated = function (e) {
          const t = e.spaces.find((e) => e.details && e.details.info && "accepted" === e.details.status);
          if (!t) return !1;
          const r = t.details.info.activeDirectorySyncType;
          return ["full", "provision-only"].includes(r);
        });
    },
    231632: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeTeamDomainRegistration = void 0);
      const n = r(46298),
        a = r(416593);
      t.completeTeamDomainRegistration = async function (e) {
        const { storeService: t } = e,
          r = (0, a.userLoginSelector)(t.getState()),
          o = await (0, n.completeDomainRegistration)(t, r);
        return (0, n.isApiError)(o)
          ? { success: !1, error: { code: (0, n.getCode)(o.code, n.completeDomainRegistrationErrors) } }
          : {
              success: !0,
              domains: o.domain.map((e) => ({
                id: e.id,
                name: e.domain,
                status: e.status,
                previousStatus: e.previousStatus,
                dnsToken: e.dnsToken,
                lastVerificationAttemptDateUnix: e.lastVerificationAttemptDateUnix
              }))
            };
      };
    },
    181529: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deactivateTeamDomain = void 0);
      const n = r(46298),
        a = r(416593);
      t.deactivateTeamDomain = async function (e, t) {
        const { storeService: r } = e,
          o = (0, a.userLoginSelector)(r.getState()),
          s = await (0, n.deactivateDomain)(r, o, t);
        return (0, n.isApiError)(s) ? { success: !1, error: { code: (0, n.getCode)(s.code, n.deactivateDomainErrors) } } : { success: !0 };
      };
    },
    838396: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTeamDomains = void 0);
      const n = r(46298),
        a = r(416593);
      t.getTeamDomains = async function (e) {
        const { storeService: t } = e,
          r = (0, a.userLoginSelector)(t.getState()),
          o = await (0, n.listDomains)(t, r);
        return (0, n.isApiError)(o)
          ? { success: !1, error: { code: (0, n.getCode)(o.code, n.listDomainErrors) } }
          : {
              success: !0,
              domains: o.domains.map((e) => ({
                id: e.id,
                name: e.domain,
                status: e.status,
                previousStatus: e.previousStatus,
                dnsToken: e.dnsToken,
                lastVerificationAttemptDateUnix: e.lastVerificationAttemptDateUnix
              }))
            };
      };
    },
    276934: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.registerTeamDomain = void 0);
      const n = r(46298),
        a = r(416593);
      t.registerTeamDomain = async function (e, t) {
        const { storeService: r } = e,
          o = (0, a.userLoginSelector)(r.getState()),
          s = await (0, n.requestDomainRegistration)(r, o, t);
        return (0, n.isApiError)(s)
          ? { success: !1, error: { code: (0, n.getCode)(s.code, n.requestDomainRegistrationErrors) } }
          : { success: !0, data: { computedToken: s.computedToken, challengeDomain: s.challengeDomain } };
      };
    },
    112927: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.clearEncryptionServiceConfig = void 0);
      const n = r(894150);
      t.clearEncryptionServiceConfig = async (e) => (await (0, n.removeTeamAdminItem)(e, "encryptionServiceData"), !0);
    },
    933657: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createAzureEncryptionServiceConfig = t.createAwsLinuxEncryptionServiceConfig = void 0),
        (t.createAwsLinuxEncryptionServiceConfig = ({ configEncryptionKey: e, deviceSecretKey: t, deviceAccessKey: r, teamUuid: n }) =>
          `DASHLANE_SSO_TEAM_DEVICE_ACCESS_KEY=${r}\nDASHLANE_SSO_TEAM_DEVICE_SECRET_KEY=${t}\nDASHLANE_SSO_TEAM_UUID=${n}\nDASHLANE_CONFIG_ENCRYPTION_KEY=${e}\n`),
        (t.createAzureEncryptionServiceConfig = ({
          configEncryptionKey: e,
          deviceSecretKey: t,
          deviceAccessKey: r,
          teamUuid: n,
          encryptionServiceEndpoint: a
        }) => {
          const { host: o } = new URL(a);
          return `{\n      "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",\n      "contentVersion": "1.0.0.0",\n      "parameters": {\n        "siteName": {\n          "value": "${o
            .split(".")
            .slice(0, -2)
            .join(
              "."
            )}"\n        },\n        "servicePlanSku": {\n          "value": "B1"\n        },\n        "servicePlanCapacity": {\n          "value": 1\n        },\n        "location": {\n          "value": "[resourceGroup().location]"\n        },\n        "DASHLANE_CONFIG_ENCRYPTION_KEY": {\n          "value": "${e}"\n        },\n        "DASHLANE_SSO_TEAM_DEVICE_ACCESS_KEY": {\n          "value": "${r}"\n        },\n        "DASHLANE_SSO_TEAM_DEVICE_SECRET_KEY": {\n          "value": "${t}"\n        },\n        "DASHLANE_SSO_TEAM_UUID": {\n          "value": "${n}"\n        }\n      }\n    }\n    `;
        });
    },
    988063: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.generateAndSaveEncryptionServiceConfig = void 0);
      const n = r(316038),
        a = r(869530),
        o = r(46298),
        s = r(843154),
        i = r(933657),
        c = r(676404),
        u = r(5760),
        d = r(227218),
        l = r(235992),
        p = r(670363),
        m = r(400251),
        g = async (e, t, r, o = {}, s) => {
          const { deviceSecretKey: c, deviceAccessKey: g, teamUuid: S } = await (0, d.reregisterTeamDevice)(e, s),
            { devicePrivateKey: y, devicePublicKey: v } = await (0, d.generateDeviceKeyPair)(e),
            f = await (0, d.registerTeamDeviceAccount)(e, { deviceAccessKey: g, devicePublicKey: v, devicePrivateKey: y });
          if (!1 === f.success) return { success: !1, error: f.error };
          const { encryptionKeyUuid: A, key: E } = await (async () => {
              const e = await (0, a.generate64BytesKey)(),
                t = (0, n.bufferToBase64)(e);
              return { encryptionKeyUuid: (0, l.v4)().toLowerCase(), key: t };
            })(),
            I = {
              config: ("Microsoft Azure" === t ? i.createAzureEncryptionServiceConfig : i.createAwsLinuxEncryptionServiceConfig)({
                deviceSecretKey: c,
                deviceAccessKey: g,
                teamUuid: S,
                configEncryptionKey: `${A}|${E}`,
                encryptionServiceEndpoint: r
              }),
              configEncryptionKey: E,
              teamUuid: S,
              deviceAccessKey: g,
              deviceSecretKey: c,
              encryptionKeyUuid: A,
              deploymentLocation: t,
              devicePublicKey: v,
              devicePrivateKey: y,
              lastGeneratedTimeStamp: (0, m.getUnixTime)(Date.now())
            },
            h = await (0, p.updateTeamDeviceEncryptedConfig)(e, { teamDeviceUrl: r, ...o }, I);
          if (!1 === h.success) return { success: !1, error: h.error };
          const _ = await (0, u.persistEncryptionServiceConfig)(e, I);
          return !1 === _.success
            ? { success: !1, error: _.error }
            : { success: !0, data: { basicConfig: { ...I }, encryptionServiceReloadingStatus: h.data.encryptionServiceReloadingStatus } };
        },
        S = ["AWS", "Microsoft Azure"];
      t.generateAndSaveEncryptionServiceConfig = async function (
        e,
        { deploymentLocation: t, encryptionServiceEndpoint: r, updateTeamDeviceConfigParams: n = {} }
      ) {
        const { storeService: a } = e;
        if (((0, s.requireAdmin)(a), !S.includes(t))) return { success: !1, error: { code: o.InvalidRequestError } };
        const i = await (0, c.getEncryptionServiceConfig)(e);
        let u;
        return (u = i.success ? await g(e, t, r, n, i.data) : await g(e, t, r, n)), u;
      };
    },
    676404: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEncryptionServiceConfig = void 0);
      const n = r(46298),
        a = r(692310),
        o = r(843154);
      t.getEncryptionServiceConfig = ({ storeService: e }) => {
        (0, o.requireAdmin)(e);
        try {
          const t = (0, a.currentTeamIdSelector)(e.getState()),
            r = (0, a.adminDataForTeamSelector)(e.getState(), t);
          return r?.encryptionServiceData?.basicConfigs?.[0]
            ? Promise.resolve({ success: !0, data: r.encryptionServiceData.basicConfigs[0] })
            : Promise.resolve({ success: !1, error: { code: n.BasicConfigNotFound } });
        } catch {
          return Promise.resolve({ success: !1, error: { code: n.UnknownError } });
        }
      };
    },
    5760: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.persistEncryptionServiceConfig = t.saveOrUpdateEncryptionServiceConfig = void 0);
      const n = r(46298),
        a = r(134376),
        o = r(97124),
        s = r(353050),
        i = r(144197),
        c = r(692310),
        u = r(674042),
        d = r(514432),
        l = r(843154),
        p = /[\dA-F]{8}-[\dA-F]{4}-[\dA-F]{4}-[\dA-F]{4}-[\dA-F]{12}/i;
      (t.saveOrUpdateEncryptionServiceConfig = async (e, t) => {
        if (
          (({ teamUuid: e, encryptionKeyUuid: t, deviceAccessKey: r, deviceSecretKey: n }) => {
            const a = {
                teamUuid: Boolean(e && !e.match(p)),
                encryptionKeyUuid: Boolean(t && !t.match(p)),
                deviceAccessKey: Boolean(r && 16 !== r.length),
                deviceSecretKey: Boolean(n && 64 !== n.length)
              },
              o = Object.entries(a).reduce((e, [t, r]) => (r ? { [t]: !0, ...e } : e), {});
            return Object.keys(o).length > 0 ? o : null;
          })(t)
        )
          return null;
        const { storeService: r, wsService: n } = e,
          l = (0, o.makeSharingService)(r, n),
          m = (0, a.getCurrentUserInfo)(r),
          g = (0, c.currentTeamIdSelector)(r.getState()),
          S = (0, c.adminDataForTeamSelector)(r.getState(), g);
        if (!S) throw new Error("Cannot find adminData");
        const y = S?.encryptionServiceData?.basicConfigs?.[0];
        return y
          ? await (async (e, t, r, n, a, o) => {
              const { storeService: s, localStorageService: l } = e,
                { crypto: p, item: m, ws: g } = t,
                { specialItemGroup: S } = n;
              if (!S) throw new Error("Cannot find specialItemGroup in adminData");
              const {
                  specialItemGroup: { items: y },
                  encryptionServiceData: v
                } = n,
                { itemId: f } = v,
                A = s.getSharingData(),
                { timestamp: E } = (A.items ?? []).find(({ itemId: e }) => e === f);
              if (!E) throw new Error("trying to update config before it was created.");
              const I = { ...o, ...a },
                h = { basicConfigs: [I] },
                _ = await (0, i.getSpecialItemGroupKey)(p, r, n),
                { itemKey: T } = y.find(({ itemId: e }) => e === f),
                b = await p.symmetricEncryption.decryptAES256(_, T),
                C = await p.symmetricEncryption.encryptAES256(b, btoa(JSON.stringify(h))),
                P = await m.makeUpdateItemEvent(E, T, { itemId: f, itemContent: C }),
                D = await m.updateItem(g, r.login, r.uki, P);
              if (!D.items.length) throw new Error("unable to update encryption service special item");
              const w = (0, c.currentTeamIdSelector)(s.getState());
              return (
                await (0, u.updateAdminDataAfterItemAddedOrUpdated)(s, l, t.ws, r, `${w}`, { items: D.items, itemGroups: A.itemGroups }),
                await (0, d.updateSharingDataAfterItemAddedOrUpdated)(s, l, D.items[0]),
                I
              );
            })(e, l, m, S, t, y)
          : await (async (e, t, r) => {
              const n = { basicConfigs: [r] };
              return (await (0, s.createOrUpdateSpecialItem)(e, t, n)).basicConfigs[0];
            })(e, l, t);
      }),
        (t.persistEncryptionServiceConfig = async (e, r) => {
          (0, l.requireAdmin)(e.storeService);
          const a = await (0, t.saveOrUpdateEncryptionServiceConfig)(e, r);
          return a ? { success: !0, data: a } : { success: !1, error: { code: n.UnknownError } };
        });
    },
    227218: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.registerTeamDeviceAccount = t.reregisterTeamDevice = t.generateDeviceKeyPair = void 0);
      const n = r(453576),
        a = r(481926),
        o = r(46298),
        s = r(97124),
        i = r(882366),
        c = r(134376),
        u = r(144197),
        d = r(692310),
        l = r(808995),
        p = r(69310),
        m = r(644293),
        g = r(543927),
        S = r(592028);
      (t.generateDeviceKeyPair = async (e) => {
        const { storeService: t, wsService: r } = e,
          { crypto: n } = (0, s.makeSharingService)(t, r),
          a = await n.asymmetricEncryption.generateRsaKeyPair();
        return {
          devicePrivateKey: a.privateKey
            .replace(S.PRIVATE_KEY_HEADER, "")
            .replace(S.PRIVATE_KEY_FOOTER, "")
            .replace(/[\r\n ]/gm, ""),
          devicePublicKey: a.publicKey
            .replace(S.PUBLIC_KEY_HEADER, "")
            .replace(S.PUBLIC_KEY_FOOTER, "")
            .replace(/[\r\n ]/gm, "")
        };
      }),
        (t.reregisterTeamDevice = async (e, t, r = n.TeamDevicePlatform.ENCRYPTION_SERVICE) => {
          t?.deviceAccessKey && (await (0, p.deactivateTeamDevice)(e, { teamDeviceAccessKey: t.deviceAccessKey }));
          const a = await (0, l.registerTeamDevice)(e, { platform: r, deviceName: S.ENCRYPTION_SERVICE_HUMAN_DEVICE_NAME });
          if (a.success) return a.data;
          throw new Error(o.DeviceNotFound);
        }),
        (t.registerTeamDeviceAccount = async (e, r) => {
          let n, l;
          r.shouldGenerateDeviceKeyPair
            ? ({ devicePublicKey: n, devicePrivateKey: l } = await (0, t.generateDeviceKeyPair)(e))
            : ((n = r.devicePublicKey), (l = r.devicePrivateKey));
          const { storeService: p, wsService: y } = e,
            { crypto: v } = (0, s.makeSharingService)(p, y),
            f = (0, c.getCurrentUserInfo)(p),
            A = (0, d.currentTeamIdSelector)(p.getState()),
            E = (0, d.adminDataForTeamSelector)(p.getState(), A),
            { revision: I } = await (0, g.loadSpecialUserGroup)(y, f.login, f.uki, E),
            h = await (0, u.getSpecialUserGroupKey)(v, f, E),
            _ = `${S.PUBLIC_KEY_HEADER}\n${n}\n${S.PUBLIC_KEY_FOOTER}`,
            T = await v.asymmetricEncryption.encrypt(_, h),
            b = `special-admin-${A}-${Math.floor(4294967296 * Math.random()).toString(16)}@teamdevice.dashlane.com`,
            C = await (0, i.generateProposeSignature)(v, h, b),
            P = await (0, m.createTeamDeviceAccount)(e, {
              teamDeviceAccessKey: r.deviceAccessKey,
              publicKey: n,
              proposeSignature: C,
              userGroupRevision: I,
              groupKey: T,
              teamDeviceLogin: b
            });
          return !1 === P.success
            ? { success: !1, error: { code: (0, o.getCode)(P.error.code, a.createTeamDeviceAccountErrors) } }
            : { success: !0, data: { login: P.data.login, devicePrivateKey: l, devicePublicKey: n } };
        });
    },
    693921: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mapTeamDeviceEncryptedConfig = t.generateTeamDeviceEncryptedConfig = void 0);
      const r = {
        scimSignatureKey: { defaultValue: "", configMapping: "DASHLANE_SCIM_SIGNATURE_KEY" },
        scimAuthToken: { defaultValue: "", configMapping: "DASHLANE_SCIM_AUTHENTICATION_TOKEN" },
        scimEnabled: { defaultValue: !1, configMapping: "DASHLANE_SCIM_ENABLED" },
        teamDevicePublicKey: { defaultValue: "", configMapping: "DASHLANE_SCIM_TEAMDEVICE_PUBLIC_KEY" },
        teamDevicePrivateKey: { defaultValue: "", configMapping: "DASHLANE_SCIM_TEAMDEVICE_PRIVATE_KEY" },
        connectorEndpoint: { defaultValue: "", configMapping: "DASHLANE_SSO_CONNECTOR_ENDPOINT" },
        connectorKey: { defaultValue: "", configMapping: "DASHLANE_SSO_CONNECTOR_KEY" },
        samlIdpCertificate: { defaultValue: "", configMapping: "DASHLANE_SSO_SAML_IDP_CERTIFICATE" },
        samlIdpEntryPoint: { defaultValue: "", configMapping: "DASHLANE_SSO_SAML_IDP_ENTRYPOINT" }
      };
      (t.generateTeamDeviceEncryptedConfig = (e) =>
        Object.entries(r)
          .map(([t, r]) => {
            return `${r.configMapping}=${
              ((n = r.defaultValue), (a = e[t]), "boolean" == typeof a || "boolean" == typeof n ? (a ?? n ? "true" : "false") : `${a ?? n}`)
            }`;
            var n, a;
          })
          .join("\n")),
        (t.mapTeamDeviceEncryptedConfig = (e) => {
          const t = e.split("\n").reduce((e, t) => {
              const r = t.indexOf("="),
                [n, a] = [t.slice(0, r), t.slice(r + 1)];
              return { ...e, [n]: a };
            }, {}),
            n = Object.entries(r).reduce((e, [r, { configMapping: n, defaultValue: a }]) => {
              return {
                ...e,
                [r]:
                  ((o = a), (s = t[n]), s ? (s.length > 0 && "boolean" == typeof o ? "true" === s : "boolean" == typeof o ? o : s ?? o) : o)
              };
              var o, s;
            }, {});
          if (((e) => Object.keys(r).every((t) => t in e))(n)) return n;
          throw new Error("incomplete data when creating object from config string");
        });
    },
    344974: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getTeamDeviceEncryptedConfig = t.getParsedTeamDeviceEncryptedConfig = void 0);
      const n = r(453576),
        a = r(956668),
        o = r(46298),
        s = r(164910),
        i = r(416593),
        c = r(843154),
        u = r(676404),
        d = r(693921);
      (t.getParsedTeamDeviceEncryptedConfig = async (e, { configEncryptionKey: t, encryptedConfig: r }) => {
        if (!r || !t) throw new Error("missing config or encryption key");
        const { teamDeviceEncryptedConfigEncryptorService: n } = e,
          o = (0, s.getNoDerivationCryptoConfig)();
        n.setInstance({ raw: atob(t) }, "", o);
        const i = await n.getInstance().decrypt(r),
          c = (0, a.deflatedUtf8ToUtf16)(i, { skipInflate: !0 });
        return (0, d.mapTeamDeviceEncryptedConfig)(c);
      }),
        (t.getTeamDeviceEncryptedConfig = async function (e, { deviceAccessKey: r, draft: a }) {
          const { storeService: s } = e;
          (0, c.requireAdmin)(s);
          const d = (0, i.userLoginSelector)(s.getState());
          if (!d) throw new Error(n.AuthenticationCode[n.AuthenticationCode.USER_UNAUTHORIZED]);
          const l = await (0, u.getEncryptionServiceConfig)(e);
          if (!1 === l.success)
            return {
              success: !1,
              error: { code: l.error.code === o.BasicConfigNotFound ? o.TeamDeviceEncryptedConfigNotFound : o.UnknownError }
            };
          const {
              data: { deviceAccessKey: p, configEncryptionKey: m }
            } = l,
            g = { configurationVersion: 0, deviceAccessKey: r || p, draft: a };
          try {
            const n = await (0, o.getTeamDeviceEncryptedConfig)(s, d, g);
            if ((0, o.isApiError)(n)) return { success: !1, error: { code: (0, o.getCode)(n.code, o.getTeamDeviceEncryptedConfigErrors) } };
            const a = await (0, t.getParsedTeamDeviceEncryptedConfig)(e, {
              encryptedConfig: n.encryptedConfiguration,
              configEncryptionKey: m
            });
            return {
              success: !0,
              data: {
                config: n.encryptedConfiguration,
                configurationVersion: n.configurationVersion,
                deviceAccessKey: r,
                encryptionKeyUuid: n.encryptionKeyUuid,
                configProperties: a
              }
            };
          } catch (e) {
            return { success: !1, error: { code: o.TeamDeviceEncryptedConfigNotFound } };
          }
        });
    },
    670363: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateTeamDeviceEncryptedConfig = void 0);
      const n = r(46298),
        a = r(956668),
        o = r(164910),
        s = r(97124),
        i = r(134376),
        c = r(416593),
        u = r(589675),
        d = r(692310),
        l = r(676404),
        p = r(868538),
        m = r(905829),
        g = r(539482),
        S = r(770979),
        y = r(894150),
        v = r(843154),
        f = r(344974),
        A = r(693921),
        E = r(834054),
        I = r(201334);
      t.updateTeamDeviceEncryptedConfig = async (e, t = {}, r) => {
        const { storeService: h, teamDeviceEncryptedConfigEncryptorService: _, wsService: T } = e;
        (0, v.requireAdmin)(h);
        const b = (0, c.userLoginSelector)(h.getState());
        if (!b) throw new Error("missing login");
        const C = { ssoEnabled: !1, ssoIdpMetaData: "", ssoEndpoint: "" },
          P = await (0, I.getTeamInfo)(e);
        P.success &&
          ((C.ssoEnabled = P.data.teamInfo.ssoEnabled),
          (C.ssoIdpMetaData = P.data.teamInfo.ssoIdpMetadata),
          (C.ssoEndpoint = P.data.teamInfo.ssoServiceProviderUrl));
        const D = parseInt((0, d.currentTeamIdSelector)(h.getState()), 10);
        let w = null,
          O = null;
        if (
          (C.ssoIdpMetaData && ({ samlIdpCertificate: w, samlIdpEntryPoint: O } = await (0, p.parseMetadataFields)(C.ssoIdpMetaData)),
          "string" == typeof t.ssoIdpMetadata)
        ) {
          const { ssoIdpMetadata: r } = t;
          if (r)
            try {
              ({ samlIdpCertificate: w, samlIdpEntryPoint: O } = await (0, p.parseMetadataFields)(r));
            } catch (e) {
              return { success: !1, error: { code: n.UnknownError } };
            }
          if (
            (
              await (0, u.setTeamSettings)(h, T, (0, i.getCurrentUserInfo)(h), {
                teamId: D,
                settings: { ssoIdpMetadata: r || null, ssoIdpEntrypoint: O }
              })
            ).error
          )
            return { success: !1, error: { code: n.UnknownError } };
        }
        const U = await (0, l.getEncryptionServiceConfig)(e),
          M =
            r ||
            (U.success &&
            U.data.deviceAccessKey &&
            U.data.configEncryptionKey &&
            U.data.encryptionKeyUuid &&
            U.data.devicePrivateKey &&
            U.data.devicePublicKey
              ? U.data
              : null);
        if (!M) return { success: !1, error: { code: n.DeviceKeyNotFound } };
        const { deviceAccessKey: L, encryptionKeyUuid: N, configEncryptionKey: R, devicePrivateKey: G, devicePublicKey: k } = M,
          K = N.toLowerCase(),
          j = await (0, f.getTeamDeviceEncryptedConfig)(e, { draft: !1, deviceAccessKey: L });
        let F = {},
          V = 0;
        if (!1 === j.success && j.error.code !== n.TeamDeviceEncryptedConfigNotFound)
          return { success: !1, error: { code: n.UnknownError } };
        if (!0 === j.success) {
          const { data: t } = j;
          (F = await (0, f.getParsedTeamDeviceEncryptedConfig)(e, { encryptedConfig: t.config, configEncryptionKey: R })),
            (V = t.configurationVersion);
        }
        const H = (0, s.makeSharingService)(h, T),
          B = (0, d.currentTeamIdSelector)(h.getState()),
          $ = (0, d.adminDataForTeamSelector)(h.getState(), B);
        let x = $?.ssoConnectorKey?.ssoConnectorKey;
        if (!x || t.ssoConnectorKey)
          try {
            x && t.ssoConnectorKey && (await (0, y.removeTeamAdminItem)(e, "ssoConnectorKey"));
            const r = t.ssoConnectorKey ?? (await (0, m.generateSSOConnectorKey)());
            x = await (0, g.persistSSOConnectorKey)(e, H, r);
          } catch (e) {
            return { success: !1, error: { code: n.UnknownError } };
          }
        let W = $?.scimSignatureKey?.scimSignatureKey;
        if (!W) {
          const t = await (0, E.generateSCIMSignatureKey)();
          W = await (0, S.persistSCIMSignatureKey)(e, H, t);
        }
        const Y = {
            scimAuthToken: t?.scimAuthToken ?? F?.scimAuthToken ?? "",
            scimEnabled: t?.scimEnabled ?? F?.scimEnabled ?? !1,
            connectorEndpoint: t?.connectorEndpoint ?? F?.connectorEndpoint ?? C.ssoEndpoint ?? "",
            samlIdpEntryPoint: O ?? F?.samlIdpEntryPoint ?? "",
            samlIdpCertificate: w ?? F?.samlIdpCertificate ?? ""
          },
          q = Boolean(t.ssoEnabled || F.connectorKey || C.ssoEnabled),
          Q = { ...Y, teamDevicePrivateKey: G, teamDevicePublicKey: k, connectorKey: q ? x : "", scimSignatureKey: Y.scimEnabled ? W : "" },
          X = (0, A.generateTeamDeviceEncryptedConfig)(Q),
          z = (0, a.utf16ToDeflatedUtf8)(X, { skipUtf8Encoding: !0, skipDeflate: !0 }),
          Z = (0, o.getNoDerivationCryptoConfig)();
        _.setInstance({ raw: atob(R) }, "", Z);
        const J = _.getInstance(),
          ee = await J.encrypt(z),
          te = {
            configurationVersion: V,
            deviceAccessKey: L,
            ssoServiceEnabled: q,
            scimServiceEnabled: Q.scimEnabled,
            encryptionKeyUuid: K,
            draft: !1,
            encryptedConfiguration: ee,
            teamDeviceUrl: t.teamDeviceUrl
          },
          re = await (0, n.updateTeamDeviceEncryptedConfig)(h, b, te);
        return (0, n.isApiError)(re)
          ? { success: !1, error: { code: (0, n.getCode)(re.code, n.updateTeamDeviceEncryptedConfigErrors) } }
          : {
              success: !0,
              data: { configurationVersion: re.configurationVersion, encryptionServiceReloadingStatus: re.encryptionServiceReloadingStatus }
            };
      };
    },
    194228: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.adminProvisioningKeySelector = void 0);
      const n = r(692310);
      t.adminProvisioningKeySelector = (e) => {
        const t = (0, n.currentTeamIdSelector)(e),
          r = (0, n.adminDataForTeamSelector)(e, t);
        return { adminProvisioningKey: r.adminProvisioningKey?.adminProvisioningKey ?? null };
      };
    },
    933150: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.persistAdminProvisioningKey = void 0);
      const n = r(46298),
        a = r(97124),
        o = r(353050);
      t.persistAdminProvisioningKey = async (e, t) => {
        const { adminProvisioningKey: r } = t,
          s = (0, a.makeSharingService)(e.storeService, e.wsService);
        try {
          return (await (0, o.createOrUpdateSpecialItem)(e, s, { adminProvisioningKey: r }))
            ? { success: !0 }
            : { success: !1, error: "failed to persist adminProvisioningKey" };
        } catch (e) {
          return { success: !1, error: `${e?.message ?? n.UnknownError}` };
        }
      };
    },
    260419: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeAdminProvisioningKey = void 0);
      const n = r(894150);
      t.removeAdminProvisioningKey = async (e) => (await (0, n.removeTeamAdminItem)(e, "adminProvisioningKey"), { success: !0 });
    },
    494453: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.clearSelfHostedESSettings = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(134376),
        s = r(589675),
        i = r(843154),
        c = r(69310),
        u = r(692310),
        d = r(112927),
        l = r(676404);
      t.clearSelfHostedESSettings = async (e) => {
        const { storeService: t, wsService: r } = e;
        try {
          (0, i.requireAdmin)(t);
        } catch (e) {
          if (e.message === n.AuthenticationCode[n.AuthenticationCode.USER_UNAUTHORIZED])
            return { success: !1, error: { code: a.NotAdmin } };
        }
        const p = await (0, l.getEncryptionServiceConfig)(e),
          m = [];
        if (p.success) {
          if (
            (p.data.config && (await (0, d.clearEncryptionServiceConfig)(e)),
            p.data.deviceAccessKey && !(await (0, c.deactivateTeamDevice)(e, { teamDeviceAccessKey: p.data.deviceAccessKey })).success)
          )
            return { success: !1, error: { code: a.DeactivatedTeamDevice } };
        } else m.push(a.BasicConfigNotFound);
        const g = parseInt((0, u.currentTeamIdSelector)(t.getState()), 10);
        return (
          await (0, s.setTeamSettings)(t, r, (0, o.getCurrentUserInfo)(t), {
            teamId: g,
            settings: { ssoServiceProviderUrl: null, ssoIdpMetadata: null, ssoIdpEntrypoint: null }
          })
        ).error
          ? { success: !1, error: { code: a.UnknownError } }
          : { success: !0, ...(m ? { warnings: m } : {}) };
      };
    },
    592028: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PUBLIC_KEY_FOOTER =
          t.PUBLIC_KEY_HEADER =
          t.PRIVATE_KEY_FOOTER =
          t.PRIVATE_KEY_HEADER =
          t.ENCRYPTION_SERVICE_HUMAN_DEVICE_NAME =
            void 0),
        (t.ENCRYPTION_SERVICE_HUMAN_DEVICE_NAME = "Encryption Service"),
        (t.PRIVATE_KEY_HEADER = "-----BEGIN RSA PRIVATE KEY-----"),
        (t.PRIVATE_KEY_FOOTER = "-----END RSA PRIVATE KEY-----"),
        (t.PUBLIC_KEY_HEADER = "-----BEGIN RSA PUBLIC KEY-----"),
        (t.PUBLIC_KEY_FOOTER = "-----END RSA PUBLIC KEY-----");
    },
    843154: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requireAdmin = void 0);
      const n = r(453576),
        a = r(727885);
      t.requireAdmin = (e) => {
        if (!(0, a.hasTACAccessInCurrentSpace)(e)) throw new Error(n.AuthenticationCode[n.AuthenticationCode.USER_UNAUTHORIZED]);
      };
    },
    834054: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.generateSCIMSignatureKey = void 0);
      const n = r(316038),
        a = r(655623);
      t.generateSCIMSignatureKey = async () => {
        const e = await (0, a.getRandomValues)(32);
        return (0, n.bufferToBase64)(e);
      };
    },
    770979: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.persistSCIMSignatureKey = void 0);
      const n = r(353050);
      t.persistSCIMSignatureKey = async (e, t, r) =>
        (await (0, n.createOrUpdateSpecialItem)(e, t, { scimSignatureKey: r })).scimSignatureKey;
    },
    539482: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.persistSSOConnectorKey = void 0);
      const n = r(353050);
      t.persistSSOConnectorKey = async (e, t, r) => (await (0, n.createOrUpdateSpecialItem)(e, t, { ssoConnectorKey: r })).ssoConnectorKey;
    },
    516382: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.changeInviteLinkTeamKey = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(843154),
        s = r(416593);
      t.changeInviteLinkTeamKey = async function (e, t) {
        const { storeService: r } = e;
        try {
          const e = (0, s.userLoginSelector)(r.getState()),
            i = { success: !1, error: { code: n.InviteLinkResponseErrorCode.NotAdmin } };
          try {
            (0, o.requireAdmin)(r);
          } catch {
            return i;
          }
          if (!e) return i;
          const c = await (0, a.changeInviteLinkTeamKey)(r, e, t);
          return (0, a.isApiError)(c)
            ? { success: !1, error: { code: (0, a.getCode)(c.code, a.getInviteLinkErrors) } }
            : { success: !0, data: c };
        } catch (e) {
          return { success: !1, error: { code: n.InviteLinkResponseErrorCode.InviteLinkNotFound } };
        }
      };
    },
    604658: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createInviteLink = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(843154),
        s = r(416593);
      t.createInviteLink = async function (e, t) {
        const { storeService: r } = e;
        try {
          const e = (0, s.userLoginSelector)(r.getState()),
            i = { success: !1, error: { code: n.InviteLinkResponseErrorCode.NotAdmin } };
          try {
            (0, o.requireAdmin)(r);
          } catch {
            return i;
          }
          if (!e) return i;
          const c = await (0, a.createInviteLink)(r, e, t);
          return (0, a.isApiError)(c)
            ? { success: !1, error: { code: (0, a.getCode)(c.code, a.getInviteLinkErrors) } }
            : { success: !0, data: c };
        } catch (e) {
          return { success: !1, error: { code: n.InviteLinkResponseErrorCode.InviteLinkNotFound } };
        }
      };
    },
    507134: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getInviteLinkForAdmin = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(843154),
        s = r(416593);
      t.getInviteLinkForAdmin = async function (e, t) {
        const { storeService: r } = e;
        try {
          const e = (0, s.userLoginSelector)(r.getState()),
            i = { success: !1, error: { code: n.InviteLinkResponseErrorCode.NotAdmin } };
          try {
            (0, o.requireAdmin)(r);
          } catch {
            return i;
          }
          if (!e) return i;
          const c = await (0, a.getInviteLinkForAdmin)(r, e, t);
          return (0, a.isApiError)(c)
            ? { success: !1, error: { code: (0, a.getCode)(c.code, a.getInviteLinkErrors) } }
            : { success: !0, data: c };
        } catch (e) {
          return { success: !1, error: { code: n.InviteLinkResponseErrorCode.InviteLinkNotFound } };
        }
      };
    },
    364690: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getInviteLink = void 0);
      const n = r(453576),
        a = r(46298);
      t.getInviteLink = async function (e, t) {
        const { storeService: r } = e;
        try {
          const e = await (0, a.getInviteLink)(r, t);
          return (0, a.isApiError)(e)
            ? { success: !1, error: { code: (0, a.getCode)(e.code, a.getInviteLinkErrors) } }
            : { success: !0, data: e };
        } catch (e) {
          return { success: !1, error: { code: n.InviteLinkResponseErrorCode.InviteLinkNotFound } };
        }
      };
    },
    562218: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestInviteLinkToken = void 0);
      const n = r(453576),
        a = r(46298);
      t.requestInviteLinkToken = async function (e, t) {
        const { storeService: r } = e;
        try {
          const e = await (0, a.requestInviteLinkToken)(r, t);
          return (0, a.isApiError)(e)
            ? { success: !1, error: { code: (0, a.getCode)(e.code, a.getInviteLinkErrors) } }
            : { success: !0, data: e };
        } catch (e) {
          return { success: !1, error: { code: n.InviteLinkResponseErrorCode.UserInviteLinkNotFound } };
        }
      };
    },
    54419: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.toggleInviteLink = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(843154),
        s = r(416593);
      t.toggleInviteLink = async function (e, t) {
        const { storeService: r } = e;
        try {
          const e = (0, s.userLoginSelector)(r.getState()),
            i = { success: !1, error: { code: n.InviteLinkResponseErrorCode.NotAdmin } };
          try {
            (0, o.requireAdmin)(r);
          } catch {
            return i;
          }
          if (!e) return i;
          const c = await (0, a.toggleInviteLink)(r, e, t);
          return (0, a.isApiError)(c)
            ? { success: !1, error: { code: (0, a.getCode)(c.code, a.getInviteLinkErrors) } }
            : { success: !0, data: c };
        } catch (e) {
          return { success: !1, error: { code: n.InviteLinkResponseErrorCode.InviteLinkNotFound } };
        }
      };
    },
    123904: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createConfigString = void 0),
        (t.createConfigString = (e, t, r, n, a, o, s) =>
          `\nDASHLANE_SSO_CONNECTOR_ENDPOINT=${t}\nDASHLANE_SSO_SAML_IDP_CERTIFICATE=${o}\nDASHLANE_SSO_SAML_IDP_ENTRYPOINT=${s}\nDASHLANE_SSO_CONNECTOR_KEY=${e}\nDASHLANE_SSO_TEAM_DEVICE_ACCESS_KEY=${n}\nDASHLANE_SSO_TEAM_DEVICE_SECRET_KEY=${r}\nDASHLANE_SSO_TEAM_UUID=${a}\n`);
    },
    976713: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createSSOConnectorConfig = void 0);
      const n = r(453576),
        a = r(808995),
        o = r(123904),
        s = r(868538),
        i = r(589675),
        c = r(134376),
        u = r(692310);
      t.createSSOConnectorConfig = async function (e, t) {
        const { connectorUrl: r, connectorKey: d, idpMetadata: l } = t;
        if (!r || !l)
          throw new Error(
            `[createConfig] : Missing request information -\n                Received connectorUrl : ${!!r} or\n                Received idpMetadata: ${!!l}\n            `
          );
        const p = await (0, a.registerTeamDevice)(e, { platform: n.TeamDevicePlatform.SSO_CONNECTOR, deviceName: "SSO Connector" });
        if (!1 === p.success) return { success: !1, error: { code: p.error.code } };
        const m = p.data.deviceSecretKey,
          g = p.data.deviceAccessKey,
          S = p.data.teamUuid;
        try {
          const { samlIdpCertificate: t, samlIdpEntryPoint: n } = await (0, s.parseMetadataFields)(l),
            { storeService: a, wsService: p } = e,
            y = (0, u.currentTeamIdSelector)(a.getState()),
            v = parseInt(y, 10);
          if (isNaN(v)) throw new Error("[createSSOConnectorConfig] : Unable to retrieve teamId from [parseInt(currentTeamIdString, 10)]");
          return (
            await (0, i.setTeamSettings)(a, p, (0, c.getCurrentUserInfo)(a), { teamId: v, settings: { ssoIdpEntrypoint: n } }),
            { success: !0, config: (0, o.createConfigString)(d || "", r.toLowerCase(), m, g, S, t, n) }
          );
        } catch (e) {
          return { success: !1, error: { code: e.message } };
        }
      };
    },
    905829: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.generateSSOConnectorKey = void 0);
      const n = r(316038),
        a = r(869530),
        o = r(235992);
      t.generateSSOConnectorKey = async function () {
        const e = await (0, a.generate64BytesKey)(),
          t = (0, n.bufferToBase64)(e);
        return `${(0, o.v4)()}|${t}`;
      };
    },
    868538: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.parseMetadataFieldsHandler = t.parseMetadataFields = t.SamlTags = void 0);
      const n = r(453576),
        a = r(244015),
        o = r(761797);
      var s;
      !(function (e) {
        (e.IDP_SSO_DESCRIPTOR = "IDPSSODescriptor"),
          (e.KEY_DESCRIPTOR = "KeyDescriptor"),
          (e.SINGLE_SIGN_ON_SERVICE = "SingleSignOnService"),
          (e.CERTIFICATE = "X509Certificate");
      })((s = t.SamlTags || (t.SamlTags = {})));
      function i(e) {
        const t = (0, o.findAllKWXMLElementsOfType)(e, s.IDP_SSO_DESCRIPTOR, []);
        if (1 !== t.length) throw new Error(n.IDPMetadataParseErrors.INVALID_IDP_SSO_DESCRIPTOR);
        return t[0];
      }
      (t.parseMetadataFields = async (e) => {
        const t = e.trim().replace(/[\r\n\t]/gm, ""),
          r = await ((c = t),
          new Promise((e, t) => {
            (0, a.parseXml)((r, o) => {
              r
                ? t(new Error(n.IDPXmlParseErrors.XML_PARSE_FAILED))
                : (0, a.isKWXMLElement)(o)
                ? e(o)
                : t(new Error(n.IDPXmlParseErrors.XML_PARSE_FAILED));
            }, c);
          }));
        var c;
        return {
          samlIdpCertificate: (function (e) {
            const t = (0, o.findAllKWXMLElementsOfType)(i(e), s.KEY_DESCRIPTOR, []).filter(
              (e) => !e.__attributes__?.use || "signing" === e.__attributes__?.use
            );
            if (!t.length) throw new Error(n.IDPMetadataParseErrors.KEY_DESCRIPTOR_NOT_FOUND);
            const r = [];
            if ((t.forEach((e) => (0, o.findAllKWXMLElementsOfType)(e, s.CERTIFICATE, r)), !r.length))
              throw new Error(n.IDPMetadataParseErrors.MISSING_CERTIFICATE);
            if (r.length > 1) throw new Error(n.IDPMetadataParseErrors.MULTIPLE_CERTIFICATES);
            const a = r[0].__value__;
            if (!a?.length) throw new Error(n.IDPMetadataParseErrors.MISSING_CERTIFICATE);
            if (a.length < 64) throw new Error(n.IDPMetadataParseErrors.CERTIFICATE_TOO_SHORT);
            if (a.length > 4096) throw new Error(n.IDPMetadataParseErrors.CERTIFICATE_TOO_LONG);
            try {
              atob(a);
            } catch {
              throw new Error(n.IDPMetadataParseErrors.CERTIFICATE_DECODE_FAILED);
            }
            return a;
          })(r),
          samlIdpEntryPoint: (function (e) {
            const t = i(e)
              .__children__.filter((e) => {
                if ((0, a.isKWXMLElement)(e)) return (0, o.removeNamespace)(e.__type__) === s.SINGLE_SIGN_ON_SERVICE;
              })
              .find((e) => {
                if ((0, a.isKWXMLElement)(e)) {
                  const t = e.__attributes__.Binding;
                  if ("string" == typeof t) return t.includes("HTTP-POST");
                }
              });
            if (!t) throw new Error(n.IDPMetadataParseErrors.IDP_ENTRYPOINT_NOT_FOUND);
            if ((0, a.isKWXMLElement)(t)) {
              const e = t.__attributes__.Location;
              if ("string" == typeof e) return e;
              throw new Error(n.IDPMetadataParseErrors.INVALID_ENTRYPOINT);
            }
            throw new Error(n.IDPMetadataParseErrors.INVALID_ENTRYPOINT);
          })(r)
        };
      }),
        (t.parseMetadataFieldsHandler = async (e, { ssoIdpMetadata: r }) => {
          try {
            const { samlIdpCertificate: e, samlIdpEntryPoint: n } = await (0, t.parseMetadataFields)(r);
            return { success: !0, data: { samlIdpCertificate: e, samlIdpEntryPoint: n } };
          } catch (e) {
            const t = Object.values(n.IDPXmlParseErrors),
              r = Object.values(n.IDPMetadataParseErrors);
            return { success: !1, error: t.concat(r).includes(e.message) ? e.message : n.IDPXmlParseErrors.XML_PARSE_FAILED };
          }
        });
    },
    970178: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateTeamSettings = void 0);
      const n = r(134376),
        a = r(727885),
        o = r(589675);
      t.updateTeamSettings = async (e, t) => {
        const r = (0, a.getCurrentSpaceId)(e.storeService.getSpaceData()),
          s = await (0, o.setTeamSettings)(e.storeService, e.wsService, (0, n.getCurrentUserInfo)(e.storeService), {
            teamId: r,
            settings: t
          });
        return s.error ? { success: !1, error: s.error.message } : { success: !0 };
      };
    },
    838045: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSpecialUserGroupRevision =
          t.getSpecialUserGroupInviteValuesForMemberInTeam =
          t.removeTeamAdmin =
          t.addTeamAdmin =
          t.proposeMembers =
          t.getMembers =
            void 0),
        r(401067);
      const n = r(134376),
        a = r(736513),
        o = r(144197),
        s = r(543927),
        i = r(97124),
        c = r(295375),
        u = r(46298),
        d = (e) => {
          const t = e.nbrPasswords && "removed" !== e.status;
          return (
            (e.securityIndex = "removed" !== e.status && e.securityIndex),
            (e.nbrPasswords = t && e.nbrPasswords),
            "pending" === e.status && e.lastUpdateDateUnix && delete e.lastUpdateDateUnix,
            e
          );
        };
      (t.getMembers = async function (e, t, { teamId: r }) {
        const n = await (0, c.getTeamMembers)(e, t, { teamId: r, orderBy: "login", limit: 0 });
        return (0, u.isApiError)(n) ? { success: !1, error: new Error(n.message) } : { success: !0, members: n.members.map(d) };
      }),
        (t.proposeMembers = async function (
          e,
          { login: t, uki: r },
          { proposedMemberLogins: n, teamId: a, origin: o, notificationOptions: s = { skipAccountCreationRequiredAlerts: !1 } }
        ) {
          const { content: i } = await e.teamPlans.proposeMembers({
            login: t,
            uki: r,
            teamId: a,
            proposedMemberLogins: n,
            force: !0,
            origin: o,
            notificationOptions: s
          });
          return i;
        }),
        (t.addTeamAdmin = async function (e, { teamId: t, memberLogin: r }) {
          const { ws: i, store: c } = e,
            u = (0, n.getCurrentUserInfo)(c),
            d = c.getTeamAdminData(),
            l = (0, o.getAdminDataFromTeamAdminData)(d, String(t)),
            { revision: p } = await (0, s.loadSpecialUserGroup)(i, u.login, u.uki, l),
            { groupKey: m, proposeSignature: g } = await (0, o.makeInviteToSpecialUserGroup)(e, (0, a.makeCryptoService)(), u, d, {
              teamId: t,
              memberLogin: r
            });
          return (
            await e.ws.teamPlans.addTeamAdmin({
              login: u.login,
              uki: u.uki,
              teamId: t,
              memberLogin: r,
              memberAlias: r,
              groupKey: m,
              proposeSignature: g,
              userGroupRevision: p
            }),
            {}
          );
        }),
        (t.removeTeamAdmin = async function (e, { teamId: t, memberLogin: r }) {
          const { ws: a, store: i } = e,
            c = (0, n.getCurrentUserInfo)(i),
            u = i.getTeamAdminData(),
            d = (0, o.getAdminDataFromTeamAdminData)(u, String(t)),
            { revision: l } = await (0, s.loadSpecialUserGroup)(a, c.login, c.uki, d);
          return await a.teamPlans.removeTeamAdmin({ login: c.login, uki: c.uki, teamId: t, memberLogin: r, userGroupRevision: l }), {};
        }),
        (t.getSpecialUserGroupInviteValuesForMemberInTeam = async function (e, { teamId: t, memberLogin: r }) {
          const { wsService: s, storeService: c } = e,
            u = (0, i.makeSharingService)(c, s),
            d = (0, n.getCurrentUserInfo)(c),
            l = c.getTeamAdminData(),
            { groupKey: p, proposeSignature: m } = await (0, o.makeInviteToSpecialUserGroup)(u, (0, a.makeCryptoService)(), d, l, {
              teamId: t,
              memberLogin: r
            });
          return { groupKey: p, proposeSignature: m };
        }),
        (t.getSpecialUserGroupRevision = async function (e, { teamId: t }) {
          const { wsService: r, storeService: a } = e,
            i = (0, n.getCurrentUserInfo)(a),
            c = a.getTeamAdminData(),
            u = (0, o.getAdminDataFromTeamAdminData)(c, String(t)),
            { revision: d } = await (0, s.loadSpecialUserGroup)(r, i.login, i.uki, u);
          return { specialUserGroupRevision: d };
        });
    },
    319408: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getUserGroupKey = t.syncUserGroupManagementForAllTeams = void 0);
      const n = r(413610),
        a = r(543927),
        o = r(485784),
        s = r(481567),
        i = r(617137);
      (t.syncUserGroupManagementForAllTeams = function (e, t, r, c, u, d, l) {
        const p = (0, a.syncAdministrableTeamList)(u, l);
        return Promise.all(
          Object.keys(p.teams).map((u) => {
            const l = p.teams[u];
            return (function (e, t, r, c, u, d) {
              return Promise.resolve(u)
                .then((e) => (0, a.syncAdminData)(t, r, e, d))
                .then((t) => (0, n.setupUserGroupManagement)(e, r, c, t))
                .then((t) =>
                  t.status === o.SyncUserGroupManagementStatus.NEEDS_FRESH_SHARING_DATA
                    ? t
                    : (0, s.filterOutInvalidUserGroupUsers)(e.crypto, t.adminData)
                        .then((t) => (0, i.sendUserGroupInvitesToNewUsers)(e, r, t))
                        .then((e) => ({ status: o.SyncUserGroupManagementStatus.COMPLETE, adminData: e }))
                );
            })(e, t, r, c, l, d);
          })
        ).then((e) => {
          const t = {};
          return (
            e
              .map((e) => e.adminData)
              .forEach((e) => {
                t[e.teamId] = e;
              }),
            {
              status: e.some((e) => e.status === o.SyncUserGroupManagementStatus.NEEDS_FRESH_SHARING_DATA)
                ? o.SyncUserGroupManagementStatus.NEEDS_FRESH_SHARING_DATA
                : o.SyncUserGroupManagementStatus.COMPLETE,
              teamAdminData: { teams: t }
            }
          );
        });
      }),
        (t.getUserGroupKey = function (e, t) {
          if (!e) return null;
          const r = e.find((e) => e.groupId === t);
          return r ? r.groupKey : null;
        });
    },
    836467: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getUserGroupAdminItemsFromMigration = t.createItemsForUserGroups = void 0);
      const n = r(278320),
        a = r(493513);
      async function o(e, t, r) {
        const n = r.users.find((e) => e.userId === t.login);
        if (!n) throw new Error("Couldnt find self in user group");
        return await e.asymmetricEncryption.decrypt(t.privateKey, n.groupKey);
      }
      (t.createItemsForUserGroups = async function (e, t, r) {
        return await Promise.all(
          r.map((r) =>
            (async function (e, t, r) {
              const n = await e.symmetricEncryption.generateNewAESKey(),
                [o, s] = await Promise.all([
                  e.symmetricEncryption.encryptAES256(n, a.encode(JSON.stringify(r))),
                  e.symmetricEncryption.encryptAES256(t, a.encode(n))
                ]);
              return { itemId: r.itemId, itemKey: s, content: o };
            })(e, t, r)
          )
        );
      }),
        (t.getUserGroupAdminItemsFromMigration = async function (e, t, r) {
          return await Promise.all(
            (r.userGroups || []).map((r) =>
              (async function (e, t, r) {
                return { itemId: (0, n.generateItemUuid)(), groupId: r.groupId, groupKey: await o(e, t, r) };
              })(e, t, r)
            )
          );
        });
    },
    617137: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sendUserGroupInvitesToNewUsers = void 0);
      const n = r(670252),
        a = r(795623),
        o = r(319408);
      function s(e) {
        return e.users.filter((e) => "publicKey" === e.rsaStatus);
      }
      t.sendUserGroupInvitesToNewUsers = function (e, t, r) {
        return Promise.resolve()
          .then(() =>
            (function (e) {
              return e.userGroups ? e.userGroups.reduce((e, t) => e.concat(s(t)), []) : [];
            })(r)
          )
          .then((i) =>
            i.length
              ? (function (e, t, r) {
                  const { login: n, uki: a } = t,
                    o = JSON.stringify(r.map((e) => e.alias));
                  return e.userGroup.findUsersByAliases({ login: n, uki: a, aliases: o });
                })(e, t, i).then((i) => {
                  const c = r.userGroups.map((c) => {
                    const u = s(c);
                    if (!u.length) return Promise.resolve(c);
                    const d = (function (e, t) {
                        return t.map((t) => ({
                          Alias: t.alias,
                          Login: e[t.alias].login,
                          PublicKey: e[t.alias].publicKey,
                          Permission: t.permission
                        }));
                      })(i, u),
                      l = (0, o.getUserGroupKey)(r.userGroupAdminItems, c.groupId);
                    return e.userGroup
                      .makeUpdateMembersWithInviteEvent(c.groupId, l, c.revision, d)
                      .then((r) => e.userGroup.updateUserGroupMembers(t, r))
                      .then((e) => e[0])
                      .catch((e) => {
                        const t = `[sendUserGroupInvitesToNewUsers] - Cannot send update event for one user group - groupId: ${c.groupId} - error: ${e}`,
                          r = new Error(t);
                        return a.default.error(r), (0, n.sendExceptionLog)({ error: r }), c;
                      });
                  });
                  return Promise.all(c).then((e) => ({ ...r, userGroups: e }));
                })
              : r
          );
      };
    },
    413610: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createSpecialGroups = t.setupUserGroupManagement = void 0);
      const n = r(795623),
        a = r(263623),
        o = r(144197),
        s = r(836467),
        i = r(485784);
      function c(e, t, r, o) {
        return (
          n.Debugger.log("setting up group sharing for team: " + o.teamId),
          Promise.resolve(o)
            .then((n) =>
              n.specialUserGroup
                ? n
                : (0, a.createSpecialUserGroup)(e, t, r, Number(n.teamId)).then((e) => Object.assign({}, n, { specialUserGroup: e }))
            )
            .then((r) =>
              r.specialItemGroup
                ? r
                : (0, s.getUserGroupAdminItemsFromMigration)(e.crypto, t, o).then((n) =>
                    (0, a.createSpecialItemGroup)(e, t, r.specialUserGroup, n).then((e) =>
                      Object.assign({}, r, { specialItemGroup: e, userGroupAdminItems: n })
                    )
                  )
            )
        );
      }
      (t.setupUserGroupManagement = function (e, t, r, n) {
        const a = n.specialUserGroup,
          s = n.specialItemGroup;
        if (!a)
          return s
            ? Promise.reject(new Error("UserGroupManagementSetupService - no special user group, but a special item group is present"))
            : c(e, t, r, n).then((e) => ({ status: i.SyncUserGroupManagementStatus.COMPLETE, adminData: e }));
        const u = (0, o.getUserInUserGroup)(t.login, a);
        return u
          ? "pending" === u.status
            ? s
              ? Promise.reject(
                  new Error("UserGroupManagementSetupService - special user group is not accepted, but a special item group is present")
                )
              : Promise.resolve()
                  .then(() => e.userGroup.isCurrentUserProposeSignatureValid(t, a))
                  .then((e) => {
                    if (!e) throw new Error("UserGroupManagementSetupService - INVALID_PROPOSE_SIGNATURE");
                  })
                  .then(() => e.userGroup.makeAcceptUserGroupEvent(t, a))
                  .then((r) => e.userGroup.acceptUserGroup(t, r))
                  .then(({ userGroups: e }) => {
                    if (1 !== e.length)
                      throw new Error(`UserGroupManagementSetupService - Invalid response from UserGroupService.acceptUserGroup - ${e}`);
                    return e[0];
                  })
                  .then((e) => Object.assign({}, n, { specialUserGroup: e }))
                  .then((e) => ({ status: i.SyncUserGroupManagementStatus.NEEDS_FRESH_SHARING_DATA, adminData: e }))
            : "accepted" === u.status
            ? s
              ? Promise.resolve({ status: i.SyncUserGroupManagementStatus.COMPLETE, adminData: n })
              : c(e, t, r, n).then((e) => ({ status: i.SyncUserGroupManagementStatus.COMPLETE, adminData: e }))
            : Promise.reject(
                new Error("UserGroupManagementSetupService - current user status in special user group is neither accepted or pending")
              )
          : Promise.reject(new Error("UserGroupManagementSetupService - Current user us missing from special user group"));
      }),
        (t.createSpecialGroups = c);
    },
    543927: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loadSpecialUserGroup =
          t.loadSpecialItemGroup =
          t.syncAdminDataFromSharingData =
          t.createUserGroupAdminItemInState =
          t.deleteAdministrableUserGroups =
          t.updateAdministrableUserGroupList =
          t.updateTeamAdminData =
          t.filterTeamAdminData =
          t.syncAdminData =
          t.syncAdministrableTeamList =
          t.getUserGroupDescriptionsForTeam =
            void 0);
      const n = r(263623),
        a = r(801370),
        o = r(958639),
        s = r(144197),
        i = r(736513),
        c = r(727885);
      function u(e, t, r, n) {
        return e.teamPlans.findUserGroups({ login: t, uki: r, teamId: n }).then((e) => e.content.userGroups);
      }
      function d(e) {
        const t = {};
        return (
          Object.keys(e.teams).forEach((r) => {
            const n = e.teams[r];
            t[r] = n
              ? { teamId: r, userGroups: n.userGroups || [], notifications: n.notifications || { accountRecoveryRequests: [] } }
              : { teamId: r };
          }),
          { teams: t }
        );
      }
      (t.getUserGroupDescriptionsForTeam = u),
        (t.syncAdministrableTeamList = function (e, t) {
          const r = {},
            n = (0, c.getNodePremiumStatusSpaceData)(t),
            a = n.spaces.filter((e) => (0, c.hasSpecialUserGroupAccessInSpace)(e.teamId, n)).map((e) => e.teamId);
          return (
            Object.keys(e.teams)
              .filter((e) => Boolean(e))
              .filter((e) => a.includes(e))
              .forEach((t) => {
                r[t] = e.teams[t];
              }),
            a.forEach((e) => {
              r[e] || (r[e] = { teamId: e });
            }),
            { teams: r }
          );
        }),
        (t.syncAdminData = async function (e, t, r, a) {
          const o = await p(t, r, a);
          return o.specialUserGroup && !(0, s.hasUserAcceptedUserGroup)(t.login, o.specialUserGroup)
            ? o
            : (async function (e, t, r, a) {
                const o = {
                    items: [],
                    itemGroups: [],
                    userGroups: (await u(e, t, r, Number(a.teamId))).map((e) => ({ id: e.groupId, revision: e.revision }))
                  },
                  s = { items: [], itemGroups: [], userGroups: (a.userGroups || []).filter((e) => Boolean(e)) },
                  i = await (0, n.buildSharingData)(e, t, r, o, s);
                return { ...a, userGroups: i.userGroups };
              })(e, t.login, t.uki, o);
        }),
        (t.filterTeamAdminData = d),
        (t.updateTeamAdminData = function (e, t) {
          e.dispatch((0, a.teamAdminDataUpdated)(t)), (0, o.sendTeamAdminDataUpdate)(d(t));
        }),
        (t.updateAdministrableUserGroupList = function (e, t, r) {
          e.dispatch((0, a.userGroupsUpdated)(t, r)), (0, o.sendTeamAdminDataUpdate)(d(e.getTeamAdminData()));
        }),
        (t.deleteAdministrableUserGroups = function (e, t, r) {
          e.dispatch((0, a.userGroupsDeleted)(t, r)), (0, o.sendTeamAdminDataUpdate)(d(e.getTeamAdminData()));
        }),
        (t.createUserGroupAdminItemInState = function (e, t, r) {
          e.dispatch((0, a.userGroupAdminItemCreated)(t, r));
        });
      const l = (e) =>
        e.reduce(
          (e, t) => (
            (0, s.isUserGroupAdminItem)(t)
              ? e.userGroupAdminItems.push(t)
              : (0, s.isDirectorySyncKey)(t)
              ? (e.directorySyncKey = t)
              : (0, s.isEsBasicConfigsData)(t)
              ? (e.encryptionServiceData = t)
              : (0, s.isSSOConnectorKey)(t)
              ? (e.ssoConnectorKey = t)
              : (0, s.isSCIMSignatureKey)(t)
              ? (e.scimSignatureKey = t)
              : (0, s.isAdminProvisioningKey)(t) && (e.adminProvisioningKey = t),
            e
          ),
          {
            userGroupAdminItems: [],
            directorySyncKey: null,
            encryptionServiceData: null,
            ssoConnectorKey: null,
            scimSignatureKey: null,
            adminProvisioningKey: null
          }
        );
      async function p(e, t, r) {
        const n = (function (e, t) {
          const r = t.itemGroups.find((t) => "userGroupKeys" === t.type && t.teamId === Number(e.teamId)),
            n = t.userGroups.find((t) => "teamAdmins" === t.type && t.teamId === Number(e.teamId));
          return { ...e, specialItemGroup: r, specialUserGroup: n };
        })(t, r);
        return (async function (e, t, r) {
          const n = (0, i.makeCryptoService)(),
            a = (t.specialItemGroup && t.specialItemGroup.items) || [],
            o =
              (e) =>
              ({ itemId: t }) =>
                t === e,
            c = await Promise.all(
              r.items
                .filter((e) => a.find(o(e.itemId)))
                .map((r) => {
                  const i = a.find(o(r.itemId))?.itemKey;
                  if (!i) throw new Error("Unexpected error: missing itemKey");
                  return (0, s.decryptAdminItem)(n, e, t, r, i);
                })
            ),
            {
              userGroupAdminItems: u,
              directorySyncKey: d,
              encryptionServiceData: p,
              ssoConnectorKey: m,
              scimSignatureKey: g,
              adminProvisioningKey: S
            } = l(c);
          return {
            ...t,
            userGroupAdminItems: u,
            directorySyncKey: d,
            encryptionServiceData: p,
            ssoConnectorKey: m,
            scimSignatureKey: g,
            adminProvisioningKey: S
          };
        })(e, n, r);
      }
      (t.syncAdminDataFromSharingData = p),
        (t.loadSpecialItemGroup = async function (e, t, r, a) {
          if (!a.specialItemGroup || !a.specialItemGroup.groupId) throw new Error("specialItemGroup is missing from adminData");
          const { itemGroups: o } = await (0, n.getSharedData)(e, t, r, {
            itemIds: [],
            itemGroupIds: [a.specialItemGroup.groupId],
            userGroupIds: []
          });
          if (o && 1 === o.length) return o[0];
          throw new Error("could not fetch specialItemGroup");
        }),
        (t.loadSpecialUserGroup = async function (e, t, r, a) {
          const { userGroups: o } = await (0, n.getSharedData)(e, t, r, {
            itemIds: [],
            itemGroupIds: [],
            userGroupIds: a.specialUserGroup?.groupId ? [a.specialUserGroup.groupId] : []
          });
          if (o && 1 === o.length) return o[0];
          throw new Error("Could not fetch specialUserGroup");
        });
    },
    485784: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SyncUserGroupManagementStatus = void 0),
        (function (e) {
          (e[(e.NEEDS_FRESH_SHARING_DATA = 0)] = "NEEDS_FRESH_SHARING_DATA"), (e[(e.COMPLETE = 1)] = "COMPLETE");
        })(t.SyncUserGroupManagementStatus || (t.SyncUserGroupManagementStatus = {}));
    },
    481567: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.filterOutInvalidUserGroupUsers = void 0);
      const n = r(882366),
        a = r(319408);
      t.filterOutInvalidUserGroupUsers = function (e, t) {
        if (!t.userGroups) return Promise.resolve(t);
        const r = t.userGroups.map((r) => {
          const o = (0, a.getUserGroupKey)(t.userGroupAdminItems, r.groupId);
          return (function (e, t, r) {
            const a = r.map((r) => {
              if ("refused" === r.status || "revoked" === r.status) return Promise.resolve(!0);
              if (!r.proposeSignature) return Promise.resolve(!1);
              const a = r.proposeSignatureUsingAlias ? r.alias : r.userId;
              return (0, n.isProposeSignatureValid)(e, r.proposeSignature, a, t);
            });
            return Promise.all(a).then((e) => r.filter((t, r) => e[r]));
          })(e, o, r.users).then((e) => ({ ...r, users: e }));
        });
        return Promise.all(r).then((e) => ({ ...t, userGroups: e }));
      };
    },
    144197: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.findTeamForGroup =
          t.syncUserGroupManagement =
          t.isAdminProvisioningKey =
          t.isSCIMSignatureKey =
          t.isSSOConnectorKey =
          t.isEsBasicConfigsData =
          t.isDirectorySyncKey =
          t.isUserGroupAdminItem =
          t.decryptAdminItem =
          t.getUserGroup =
          t.getUserGroupAdminItem =
          t.getSpecialItemGroupKey =
          t.getSpecialItemGroupFromAdminData =
          t.getAdminDataFromTeamAdminData =
          t.makeInviteToSpecialUserGroup =
          t.getPublicKeyForUser =
          t.encryptGroupKeyForUser =
          t.getSpecialUserGroupPrivateKey =
          t.getSpecialUserGroupKey =
          t.hasUserAcceptedUserGroup =
          t.getUserInUserGroup =
          t.getSpecialUserGroup =
            void 0);
      const n = r(263623),
        a = r(134376),
        o = r(882366),
        s = r(970206),
        i = r(319408),
        c = r(543927),
        u = r(97124);
      function d(e) {
        return e.specialUserGroup;
      }
      function l(e, t, r) {
        const n = d(r);
        if (!n) throw new Error("specialUserGroup is not available in adminData");
        const a = n.users.find((e) => e.userId === t.login);
        if (!a) throw new Error("couldnt find self in specialUserGroup users");
        return (0, s.decryptGroupKey)(e, t, a.groupKey);
      }
      async function p(e, t, r) {
        const n = await l(e, t, r),
          a = d(r);
        return await e.symmetricEncryption.decryptAES256(n, a.privateKey);
      }
      function m(e, t, r) {
        return e.asymmetricEncryption.encrypt(t, r);
      }
      function g(e, t, r) {
        return e.userGroup
          .findExistingUsersByAliases({ login: t.login, uki: t.uki, aliases: (0, n.extractAliasesFromMembers)([{ Alias: r }]) })
          .then((e) => e[r].publicKey);
      }
      function S(e, t) {
        return e.teams[t];
      }
      function y(e) {
        return e.specialItemGroup;
      }
      async function v(e, t, r) {
        const n = y(r);
        if (!n) throw new Error("specialItemGroup is not available in adminData");
        const a = await p(e, t, r),
          o = d(r).groupId,
          s = n.groups.find((e) => e.groupId === o);
        if (!s) throw new Error("couldnt find specialUserGroup in specialItemGroup groups");
        return e.asymmetricEncryption.decrypt(a, s.groupKey);
      }
      (t.getSpecialUserGroup = d),
        (t.getUserInUserGroup = function (e, t) {
          return t.users.find((t) => t.userId === e);
        }),
        (t.hasUserAcceptedUserGroup = function (e, t) {
          return t.users.some((t) => t.userId === e && "accepted" === t.status);
        }),
        (t.getSpecialUserGroupKey = l),
        (t.getSpecialUserGroupPrivateKey = p),
        (t.encryptGroupKeyForUser = m),
        (t.getPublicKeyForUser = g),
        (t.makeInviteToSpecialUserGroup = function (e, t, r, n, { teamId: a, memberLogin: s, publicKey: i }) {
          const c = S(n, String(a)),
            u = i ? Promise.resolve(i) : g(e, r, s);
          return Promise.all([l(t, r, c), u])
            .then(([e, r]) => Promise.all([m(t, r, e), (0, o.generateProposeSignature)(t, e, s)]))
            .then(([e, t]) => ({ groupKey: e, proposeSignature: t, userGroupRevision: d(c).revision }));
        }),
        (t.getAdminDataFromTeamAdminData = S),
        (t.getSpecialItemGroupFromAdminData = y),
        (t.getSpecialItemGroupKey = v),
        (t.getUserGroupAdminItem = function (e, t, r) {
          return (S(e, t).userGroupAdminItems || []).find((e) => e.groupId === r);
        }),
        (t.getUserGroup = function (e, t) {
          return Object.keys(e.teams)
            .map((t) => e.teams[t] && e.teams[t].userGroups)
            .reduce((e, t) => t.concat(e), [])
            .find((e) => e.groupId === t);
        }),
        (t.decryptAdminItem = async function (e, t, r, n, a) {
          const o = await v(e, t, r),
            s = await e.symmetricEncryption.decryptAES256(o, a),
            i = await e.symmetricEncryption.decryptAES256(s, n.content);
          return { ...JSON.parse(i), itemId: n.itemId };
        }),
        (t.isUserGroupAdminItem = function (e) {
          return "groupId" in e;
        }),
        (t.isDirectorySyncKey = function (e) {
          return "publicKey" in e;
        }),
        (t.isEsBasicConfigsData = (e) => "basicConfigs" in e),
        (t.isSSOConnectorKey = (e) => "ssoConnectorKey" in e),
        (t.isSCIMSignatureKey = (e) => "scimSignatureKey" in e),
        (t.isAdminProvisioningKey = (e) => "adminProvisioningKey" in e),
        (t.syncUserGroupManagement = function (e, t, r) {
          const n = e.getSpaceData(),
            o = e.getTeamAdminData(),
            s = (0, a.getCurrentUserInfo)(e),
            d = (0, u.makeSharingService)(e, t);
          return s.privateKey
            ? (0, i.syncUserGroupManagementForAllTeams)(d, t, (0, a.getCurrentUserInfo)(e), n, o, r, e).then(
                (t) => ((0, c.updateTeamAdminData)(e, t.teamAdminData), t.status)
              )
            : Promise.reject(new Error("PRIVATE_KEY_MISSING"));
        }),
        (t.findTeamForGroup = function (e, t) {
          const r = Object.keys(e.teams).find((r) => e.teams[r].userGroups.some((e) => e.groupId === t));
          return r && e && e.teams && e.teams[r];
        });
    },
    32159: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.adminProvisioningKey$ = t.administrableUserGroup$ = t.administrableUserGroups$ = void 0);
      const n = r(518948),
        a = r(903343),
        o = r(692310),
        s = r(194228);
      (t.administrableUserGroups$ = function () {
        const e = o.administrableUserGroupsSelector;
        return (0, n.pipe)((0, a.map)(e), (0, a.distinctUntilChanged)());
      }),
        (t.administrableUserGroup$ = function (e) {
          const t = (0, o.getAdministrableUserGroupSelector)(e);
          return (0, n.pipe)((0, a.map)(t), (0, a.distinctUntilChanged)());
        }),
        (t.adminProvisioningKey$ = () => (0, n.pipe)((0, a.map)(s.adminProvisioningKeySelector), (0, a.distinctUntilChanged)()));
    },
    676154: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRecoveryCodesAsTeamCaptain = void 0);
      const n = r(453576),
        a = r(46298),
        o = r(474528),
        s = r(416593),
        i = (e) => {
          switch (e.code) {
            case o.GetRecoveryCodesAsTeamCaptainNotAdminErrorCode:
              return n.GetRecoveryCodesAsTeamCaptainErrorCode.NotAdmin;
            case o.GetRecoveryCodesAsTeamCaptainInternalErrorCode:
              return n.GetRecoveryCodesAsTeamCaptainErrorCode.InternalError;
            default:
              return n.GetRecoveryCodesAsTeamCaptainErrorCode.UnknownError;
          }
        };
      t.getRecoveryCodesAsTeamCaptain = async function (e, t) {
        const { storeService: r } = e,
          n = (0, s.userLoginSelector)(r.getState()),
          c = await (0, o.getRecoveryCodesAsTeamCaptain)(r, n, t);
        return (0, a.isApiError)(c) ? { success: !1, error: { code: i(c) } } : { success: !0, data: { recoveryCodes: c.recoveryCodes } };
      };
    },
    692310: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getAdministrableUserGroupSelector =
          t.isGroupNameAvailableSelector =
          t.administrableUserGroupSelector =
          t.administrableUserGroupsSelector =
          t.currentSpaceInfoSelector =
          t.currentTeamIdSelector =
          t.adminDataForTeamSelector =
            void 0);
      const n = r(432034);
      (t.adminDataForTeamSelector = (e, t) => {
        const r = ((e) => e.userSession.teamAdminData)(e);
        return r.teams ? r.teams[t] : void 0;
      }),
        (t.currentTeamIdSelector = (e) => {
          const t = e.userSession.spaceData.spaces.find((e) => "accepted" === e.details.status);
          if (t) return t.teamId;
        }),
        (t.currentSpaceInfoSelector = (e) => {
          const t = e.userSession.spaceData.spaces.find((e) => "accepted" === e.details.status);
          if (t) return t.info;
        }),
        (t.administrableUserGroupsSelector = (e) => {
          const r = (0, t.currentTeamIdSelector)(e);
          if (!r) return [];
          const n = (0, t.adminDataForTeamSelector)(e, r);
          return (n && n.userGroups) || [];
        }),
        (t.administrableUserGroupSelector = (e, r) => (0, t.administrableUserGroupsSelector)(e).find((e) => e.groupId === r)),
        (t.isGroupNameAvailableSelector = (e, r) => !(0, t.administrableUserGroupsSelector)(e).some((e) => e.name === r)),
        (t.getAdministrableUserGroupSelector = (e) =>
          (0, n.createSelector)(t.administrableUserGroupsSelector, (t) => t.find((t) => t.groupId === e)));
    },
    803674: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeTeamAdminController = void 0);
      const n = r(97124),
        a = r(134376),
        o = r(838045),
        s = r(543927),
        i = r(263623),
        c = r(144197),
        u = r(766833),
        d = r(801370);
      function l(e, t, r) {
        return o.proposeMembers(t, (0, a.getCurrentUserInfo)(e), r);
      }
      function p(e, t) {
        return (0, c.getUserGroup)(e.getTeamAdminData(), t);
      }
      t.makeTeamAdminController = (e, t) => ({
        getMembers: (t) =>
          (function (e, t) {
            return o.getMembers(e, (0, a.getCurrentUserInfo)(e).login, t);
          })(e, t),
        proposeMembers: (r) => l(e, t, r),
        addTeamAdmin: (r) =>
          (function (e, t, r) {
            if (!e.isAuthenticated()) return (0, i.emptySessionResponse)(r);
            const a = (0, n.makeSharingService)(e, t);
            return o.addTeamAdmin(a, r).catch((e) => ({ error: e }));
          })(e, t, r),
        removeTeamAdmin: (r) =>
          (function (e, t, r) {
            if (!e.isAuthenticated()) return (0, i.emptySessionResponse)(r);
            const a = (0, n.makeSharingService)(e, t);
            return o.removeTeamAdmin(a, r).catch((e) => ({ error: e }));
          })(e, t, r),
        createUserGroupAction: (r, o) =>
          (function (e, t, r, o) {
            if (!e.isAuthenticated()) return (0, i.emptySessionResponse)(o);
            const c = (0, n.makeSharingService)(e, r),
              u = (0, a.getCurrentUserInfo)(e),
              l = e.getTeamAdminData();
            return (0, i.createUserGroup)(c, u, l, o)
              .then((r) => {
                if (Array.isArray(r.itemGroups) && r.itemGroups.length > 0) {
                  const t = r.itemGroups[0],
                    n = String(t.teamId),
                    a = (0, d.specialItemGroupUpdated)(n, t);
                  e.dispatch(a);
                }
                const n = o.teamId,
                  a = (e.getTeamAdminData().teams[n] && e.getTeamAdminData().teams[n].userGroups) || [];
                return (
                  (0, s.updateAdministrableUserGroupList)(e, n.toString(), a.concat(r.userGroups)),
                  r.userGroupAdminItem &&
                    ((0, s.createUserGroupAdminItemInState)(e, n.toString(), r.userGroupAdminItem),
                    t
                      .getInstance()
                      .user.persistTeamAdminData()
                      .then(() => r)),
                  r
                );
              })
              .then((e) => ({ userGroups: e.userGroups, error: e.error }));
          })(e, r, t, o),
        deleteUserGroupAction: (r) =>
          (function (e, t, r) {
            if (!e.isAuthenticated()) return (0, i.emptySessionResponse)(r);
            const o = (0, n.makeSharingService)(e, t),
              c = (0, a.getCurrentUserInfo)(e),
              u = p(e, r.groupId);
            return (0, i.deleteUserGroup)(o, c, e.getTeamAdminData(), r).then(({ userGroups: t, itemGroups: r }) => {
              const n = r[0],
                a = String(n.teamId),
                o = (0, d.specialItemGroupUpdated)(a, n);
              return e.dispatch(o), (0, s.deleteAdministrableUserGroups)(e, String(u.teamId), t), { userGroups: t };
            });
          })(e, t, r),
        renameUserGroupAction: (r) =>
          (function (e, t, r) {
            if (!e.isAuthenticated()) return (0, i.emptySessionResponse)(r);
            const o = (0, n.makeSharingService)(e, t),
              c = (0, a.getCurrentUserInfo)(e);
            return (0, i.renameUserGroup)(o, c, r).then(({ userGroups: t }) => {
              if (t && 1 === t.length) {
                const n = String(t[0].teamId),
                  a = ((e.getTeamAdminData().teams[n] && e.getTeamAdminData().teams[n].userGroups) || []).map(
                    (e) => (e.groupId === r.groupId && t[0]) || e
                  );
                (0, s.updateAdministrableUserGroupList)(e, n, a);
              }
              return { userGroups: t };
            });
          })(e, t, r),
        inviteUserGroupMembersAction: (r) =>
          (function (e, t, r) {
            if (!e.isAuthenticated()) return (0, i.emptySessionResponse)(r);
            const o = (0, n.makeSharingService)(e, t),
              c = (0, a.getCurrentUserInfo)(e),
              u = e.getTeamAdminData(),
              d = p(e, r.groupId),
              m = {};
            r.users.forEach((e) => (m[e.alias] = e));
            const g = {
              proposedMemberLogins: Object.keys(m),
              teamId: r.teamId,
              origin: "teamInviteUserGroupUsers",
              notificationOptions: { skipAccountCreationRequiredAlerts: !0 }
            };
            return l(e, t, g)
              .then((t) => {
                const n = Object.keys(t.proposedMembers).map((e) => m[e]);
                t.accountCreationRequiredMembers.forEach((e) => n.push(m[e]));
                const a = {};
                if (
                  (Object.keys(t.refusedMembers).forEach((e) => {
                    const r = t.refusedMembers[e];
                    "already_member" !== r ? (a[e] = r) : n.push(m[e]);
                  }),
                  0 === n.length)
                )
                  return { userGroups: [d], refusedMembers: a };
                const l = { ...r, users: n };
                return (0, i.inviteUserGroupMembers)(o, c, u, l, d).then((t) => {
                  if (t.error) return t;
                  const n = String(t.userGroups[0].teamId),
                    o = ((e.getTeamAdminData().teams[n] && e.getTeamAdminData().teams[n].userGroups) || []).map(
                      (e) => (e.groupId === r.groupId && t.userGroups && t.userGroups[0]) || e
                    );
                  return (0, s.updateAdministrableUserGroupList)(e, String(d.teamId), o), { ...t, refusedMembers: a };
                });
              })
              .catch((e) => {
                if (400 === e?.additionalInfo?.code)
                  return Promise.resolve({
                    refusedMembers: {},
                    userGroups: [],
                    error: { message: e.additionalInfo?.webServiceSubMessage || "unknown error" }
                  });
                throw e;
              });
          })(e, t, r),
        revokeUserGroupMembersAction: (r) =>
          (function (e, t, r) {
            if (!e.isAuthenticated()) return (0, i.emptySessionResponse)(r);
            const o = (0, n.makeSharingService)(e, t),
              c = (0, a.getCurrentUserInfo)(e);
            return (0, i.revokeUserGroupMembers)(o, c, r).then((t) => {
              if (t && t.userGroups && 1 === t.userGroups.length) {
                const n = t.userGroups[0],
                  a = ((e.getTeamAdminData().teams[n.teamId] && e.getTeamAdminData().teams[n.teamId].userGroups) || []).map(
                    (e) => (e.groupId === r.groupId && t.userGroups && t.userGroups[0]) || e
                  );
                (0, s.updateAdministrableUserGroupList)(e, String(n.teamId), a);
              }
              return t;
            });
          })(e, t, r),
        updateUserGroupMembersAction: (r) =>
          (function (e, t, r) {
            if (!e.isAuthenticated()) return (0, i.emptySessionResponse)(r);
            const o = (0, n.makeSharingService)(e, t),
              s = (0, a.getCurrentUserInfo)(e);
            return (0, i.updateUserGroupMembers)(o, s, r);
          })(e, t, r),
        teamUpdateHandler: (t) =>
          (function (e, t) {
            return Promise.resolve().then(() => {
              if (!e.isAuthenticated()) return [new Error("no session set")];
              if (
                (["adminPromoted", "adminDemoted"].includes(t.action) &&
                  (() => {
                    const r = e.getSpaceData().spaces.map((e) => {
                      if (e.details.teamId !== t.teamId.toString()) return e;
                      const r = (function (e, t) {
                        const { teamAdmins: r } = e.details;
                        switch (t.action) {
                          case "adminPromoted":
                            return r.concat(t.users.map((e) => ({ login: e })));
                          case "adminDemoted":
                            return r.filter((e) => !t.users.includes(e.login));
                          default:
                            return r;
                        }
                      })(e, t);
                      return Object.assign({}, e, { details: Object.assign({}, e.details, { teamAdmins: r }) });
                    });
                    (0, u.updateSpaceData)(e, r);
                  })(),
                "memberRevoked" === t.action)
              ) {
                const r = e.getTeamAdminData().teams[t.teamId],
                  n = (r.userGroups || []).map((e) => Object.assign({}, e, { users: e.users.filter((e) => !t.users.includes(e.alias)) }));
                (0, s.updateAdministrableUserGroupList)(e, r.teamId, n);
              }
              return null;
            });
          })(e, t),
        confirmFreeTrial: (e) =>
          (function (e, t) {
            return e.teamPlans.confirmFreeTrial({ token: t });
          })(t, e),
        getPremiumStatus: (e) =>
          (function (e, t) {
            return e.premium.status(t);
          })(t, e),
        getTeamTokens: () =>
          (function (e, t) {
            const r = e.getUserLogin();
            return t.qa.tokens({ login: r });
          })(e, t),
        registerFreeTrial: (e) =>
          (function (e, t) {
            return e.teamPlans.registerFreeTrial(t);
          })(t, e),
        acceptTeamInvite: (e) =>
          (function (e, t) {
            const { token: r } = t;
            return e.teamPlans.acceptTeam({ token: r });
          })(t, e)
      });
    },
    364688: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const n = r(968541);
      t.bootstrap = (e) => {
        e.register(n.config);
      };
    },
    353050: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createOrUpdateSpecialItem = void 0);
      const n = r(278320),
        a = r(134376),
        o = r(843154),
        s = r(144197),
        i = r(692310),
        c = r(674042),
        u = r(514432);
      t.createOrUpdateSpecialItem = async (e, t, r) => {
        const { storeService: d, localStorageService: l } = e;
        (0, o.requireAdmin)(d);
        const p = (0, i.currentTeamIdSelector)(d.getState()),
          m = (0, i.adminDataForTeamSelector)(d.getState(), p),
          g = (0, a.getCurrentUserInfo)(d),
          { crypto: S, item: y, ws: v } = t,
          { specialItemGroup: f } = m;
        if (!f) throw new Error("Cannot find specialItemGroup in adminData");
        const A = await (0, s.getSpecialItemGroupKey)(S, g, m),
          E = (0, n.generateItemUuid)(),
          I = await S.symmetricEncryption.generateNewAESKey(),
          h = await S.symmetricEncryption.encryptAES256(A, btoa(I)),
          _ = await S.symmetricEncryption.encryptAES256(I, btoa(JSON.stringify(r))),
          T = await y.makeItemUpload(E, h, _),
          b = await y.makeAddItemsEvent(f.groupId, f.revision, [T]),
          C = await y.addItems(v, g.login, g.uki, b),
          P = C?.items?.find(({ itemId: e }) => e === E);
        if (!P) throw new Error("unable to persist item");
        return (
          await (0, c.updateAdminDataAfterItemAddedOrUpdated)(d, l, t.ws, g, p, C),
          await (0, u.updateSharingDataAfterItemAddedOrUpdated)(e.storeService, e.localStorageService, P, C.itemGroups[0]),
          r
        );
      };
    },
    544095: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = t.setupSubscriptions = void 0);
      var n = r(877208);
      Object.defineProperty(t, "setupSubscriptions", {
        enumerable: !0,
        get: function () {
          return n.setupSubscriptions;
        }
      });
      var a = r(364688);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    894150: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeTeamAdminItem = void 0);
      const n = r(97124),
        a = r(134376),
        o = r(731676),
        s = r(692310);
      t.removeTeamAdminItem = async ({ storeService: e, localStorageService: t, wsService: r }, i) => {
        const c = (0, n.makeSharingService)(e, r),
          u = (0, a.getCurrentUserInfo)(e),
          d = (0, s.currentTeamIdSelector)(e.getState()),
          l = (0, s.adminDataForTeamSelector)(e.getState(), d),
          { specialItemGroup: p } = l,
          { item: m, ws: g } = c;
        if (!p) throw new Error("Cannot find specialItemGroup in adminData");
        const { revision: S, groupId: y } = p,
          v = l[i];
        if (!v) return { success: !0 };
        const { itemId: f } = v,
          A = await m.makeRemoveItemsEvent(y, S, [f]),
          E = await m.removeItems(g, u.login, u.uki, A);
        return await (0, o.updateDataAfterSpecialItemRemoved)(e, t, c.ws, u, E, A), { success: !0 };
      };
    },
    877208: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const n = r(97124),
        a = r(107344),
        o = r(358415);
      t.setupSubscriptions = async function (e, t) {
        const { sessionService: r, storeService: s, localStorageService: i, wsService: c } = t,
          u = (0, n.makeSharingService)(s, c),
          d = (0, o.makeDirectorySyncController)({
            sessionService: r,
            sharingService: u,
            storeService: s,
            localStorageService: i,
            wsService: c
          });
        e.syncSuccess.on(() => {
          const e = s.getSpaceData();
          (0, a.isDirectorySyncActivated)(e) && d.directorySyncForAllTeams();
        });
      };
    },
    731676: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateDataAfterSpecialItemRemoved = void 0);
      const n = r(801370),
        a = r(334433),
        o = r(543927),
        s = r(692310);
      t.updateDataAfterSpecialItemRemoved = async (e, t, r, i, c, u) => {
        if (1 !== u.items.length) throw new Error("Currently only supporting single item removal.");
        const d = (0, s.currentTeamIdSelector)(e.getState()),
          l = e.getTeamAdminData().teams[d],
          p = t.getInstance(),
          m = await (async (e, t, r) => {
            const { items: n, ...a } = await e.getSharingData(),
              o = n.filter(({ itemId: e }) => e !== r.items[0]),
              s = a.itemGroups.filter(({ groupId: e }) => e !== r.groupId),
              i = t.itemGroups.find(({ groupId: e }) => e === r.groupId),
              c = s.concat(i);
            return { ...a, itemGroups: c, items: o };
          })(p, c, u),
          g = { teams: { [d]: await (0, o.syncAdminData)(r, i, l, m) } },
          S = (0, n.teamAdminDataUpdated)(g),
          y = e.dispatch(S),
          v = t.getInstance();
        await v.storeTeamAdminData(y.teamAdminData), e.dispatch((0, a.sharingDataUpdated)(m)), await p.storeSharingData(m);
      };
    },
    674042: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateAdminDataAfterItemAddedOrUpdated = void 0);
      const n = r(801370),
        a = r(543927),
        o = (e, t, r) => (t ? e.filter(({ [r]: e }) => e !== t[r]).concat([t]) : e);
      t.updateAdminDataAfterItemAddedOrUpdated = async (e, t, r, s, i, { itemGroups: c, items: u }) => {
        const d = e.getSharingData(),
          { items: l, itemGroups: p, userGroups: m, ...g } = d,
          S = e.getTeamAdminData().teams[i],
          [y] = c ?? [],
          [v] = u ?? [],
          { specialUserGroup: f } = S,
          A = { ...g, items: o(l, v, "itemId"), itemGroups: o(p, y, "groupId"), userGroups: o(m, f, "groupId") },
          E = await (0, a.syncAdminData)(r, s, S, A),
          I = { teams: { [i]: E } },
          h = (0, n.teamAdminDataUpdated)(I),
          _ = e.dispatch(h),
          T = t.getInstance();
        return await T.storeTeamAdminData(_.teamAdminData), E;
      };
    },
    514432: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateSharingDataAfterItemAddedOrUpdated = void 0);
      const n = r(334433);
      t.updateSharingDataAfterItemAddedOrUpdated = async (e, t, r, a) => {
        const o = t.getInstance(),
          { items: s, itemGroups: i, ...c } = await o.getSharingData(),
          u = s.filter(({ itemId: e }) => e !== r.itemId).concat([r]),
          d = { ...c, itemGroups: a ? i.filter(({ groupId: e }) => e !== a.groupId).concat([a]) : i, items: u };
        e.dispatch((0, n.sharingDataUpdated)(d)), await o.storeSharingData(d);
      };
    },
    577627: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeSessionService = void 0);
      const n = r(595551),
        a = r(897321),
        o = r(634186),
        s = r(127754),
        i = r(506623);
      t.makeSessionService = (e) => {
        let t = null,
          r = null,
          c = null;
        return {
          isSessionStarted: () => {
            const { storeService: t } = e,
              r = t.getState();
            return !!(0, s.sessionStartTimeSelector)(r);
          },
          setInstance: (s, i) => {
            (t = (0, n.makeUserSessionService)(e, s, i)),
              (r = (0, a.makeUserDeviceService)(e.storeService, e.wsService)),
              (c = (0, o.makeUserPaymentService)(e.storeService, e.wsService));
          },
          close: () =>
            (t ? t.closeSession() : Promise.resolve()).then(() => {
              (t = null), (r = null), (c = null);
            }),
          lock: () =>
            (t ? t.lockSession() : Promise.resolve()).then(() => {
              (t = null), (r = null), (c = null);
            }),
          tryRestoreInstance: () => {
            const { storeService: u } = e,
              d = u.getState();
            (0, s.sessionIdSelector)(d)
              ? ((t = (0, n.makeResumedUserSessionService)(e)),
                (r = (0, a.makeUserDeviceService)(e.storeService, e.wsService)),
                (c = (0, o.makeUserPaymentService)(e.storeService, e.wsService)))
              : (0, i.setupEncryptorServices)(e);
          },
          getInstance: () => {
            if (!t)
              throw new Error("makeSessionService: You must call setInstance(login: string, password: string) before getting the instance");
            return { user: t, device: r, payment: c };
          }
        };
      };
    },
    897321: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeUserDeviceService = void 0);
      const n = r(976089),
        a = r(958639),
        o = r(670252),
        s = r(290622);
      t.makeUserDeviceService = (e, t) => ({
        fetchDevicesList: () => i(e, t),
        fetchTemporaryToken: () => c(e, t),
        deactivateDevice: (r) => u(e, t, r),
        changeDeviceName: (r, n) => d(e, t, r, n)
      });
      const i = async (e, t) => {
          const r = e.getAccountInfo().login,
            a = (0, s.ukiSelector)(e.getState()),
            o = (0, s.deviceKeysSelector)(e.getState()),
            i = (await t.devices.list({ login: r, uki: a })).map((e) => ({ ...e, isCurrentDevice: o && e.deviceId === o.accessKey })),
            c = i.find((e) => e.isCurrentDevice);
          return c && e.getStore().dispatch((0, n.registerDeviceName)(c.deviceName)), i;
        },
        c = (e, t) => {
          const r = e.getAccountInfo().login,
            n = (0, s.ukiSelector)(e.getState());
          return t.authentication.getTemporaryToken({ login: r, uki: n });
        },
        u = (e, t, r) => {
          const n = e.getAccountInfo().login,
            c = (0, s.ukiSelector)(e.getState());
          return t.devices.deactivate({ login: n, uki: c, deviceId: r }).then((n) =>
            i(e, t).then((e) => {
              const t = {
                devicesList: e,
                deviceId: r,
                success: "success" === n.status,
                reason: "success" !== n.status ? `Deactivate Device Error - ${n.content}` : null
              };
              a.deactivateDeviceResult(t), t.success || (0, o.sendExceptionLog)({ message: t.reason });
            })
          );
        },
        d = (e, t, r, n) => {
          const c = e.getAccountInfo().login,
            u = (0, s.ukiSelector)(e.getState());
          return t.devices.changeName({ login: c, uki: u, deviceId: r, updatedDeviceName: n }).then((s) =>
            i(e, t).then((e) => {
              const t = {
                devicesList: e,
                deviceId: r,
                success: "success" === s.status,
                updatedName: n,
                reason: "success" !== s.status ? `Change Device Name Error - ${s.content}` : null
              };
              a.changeDeviceNameResult(t), t.success || (0, o.sendExceptionLog)({ message: t.reason });
            })
          );
        };
    },
    634186: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeUserPaymentService = void 0);
      const n = r(290622),
        a = r(936273),
        o = r(46298);
      t.makeUserPaymentService = (e, t) => ({
        fetchInvoices: () => s(e),
        updatePaymentCard: (r, n) => i(e, t, r, n),
        cancelPremiumSubscription: () => c(e, t)
      });
      const s = async (e) => {
          const t = e.getAccountInfo().login,
            r = await (0, a.listInvoices)(e, t);
          return (0, o.isApiError)(r) ? [] : r.invoices;
        },
        i = (e, t, r, a) => {
          const o = e.getAccountInfo().login,
            s = (0, n.ukiSelector)(e.getState());
          return t.premium
            .updateCardToken({ login: o, uki: s, tokenId: r, stripeAccount: a })
            .then((e) => ({ success: e.success && !e.error, reason: e.error ? e.error.message : null }));
        },
        c = (e, t) => {
          const r = e.getAccountInfo().login,
            a = (0, n.ukiSelector)(e.getState());
          return t.premium.setAutoRenewal({ login: r, uki: a, enabled: !1 }).then(() => {});
        };
    },
    595551: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateRsaKeys =
          t.treatKeysResult =
          t.isSyncInProgress =
          t.storeSync =
          t.hasTreatProblems =
          t.makeResumedUserSessionService =
          t.makeUserSessionService =
          t.ON_USER_SESSION_CLOSED =
            void 0);
      const n = r(660765),
        a = r(453576),
        o = r(956668),
        s = r(958639),
        i = r(448313),
        c = r(235924),
        u = r(795623),
        d = r(645291),
        l = r(827517),
        p = r(334433),
        m = r(737898),
        g = r(525963),
        S = r(582262),
        y = r(976089),
        v = r(378118),
        f = r(485784),
        A = r(736513),
        E = r(25576),
        I = r(670252),
        h = r(816356),
        _ = r(428445),
        T = r(801370),
        b = r(144197),
        C = r(433007),
        P = r(58217),
        D = r(259489),
        w = r(358582),
        O = r(441007),
        U = r(417936),
        M = r(60946),
        L = r(275226),
        N = r(656915),
        R = r(805689),
        G = r(706231),
        k = r(739408),
        K = r(843416),
        j = r(862627),
        F = r(416593),
        V = r(434287),
        H = r(808481),
        B = r(276901),
        $ = r(412362),
        x = r(986691),
        W = r(140051),
        Y = r(872881),
        q = r(495303),
        Q = r(436081),
        X = r(216661),
        z = r(514651),
        Z = r(46298),
        J = r(361740),
        ee = r(410824),
        te = r(835507),
        re = r(164910),
        ne = r(716478),
        ae = r(471291),
        oe = r(506623),
        se = r(684827),
        ie = r(998260),
        ce = r(357903),
        ue = r(392263),
        de = r(475199);
      t.ON_USER_SESSION_CLOSED = "OnUserSessionClosed";
      const le = (e, t, r = !1) => {
        e.localStorageService.setInstance(t), r && e.storeService.dispatch((0, i.openSession)(t));
        const n = (0, re.getNoDerivationCryptoConfig)();
        e.teamDeviceEncryptedConfigEncryptorService.setInstance(
          { raw: e.storeService.getUserSession().masterPassword },
          e.storeService.getUserSession().serverKey,
          n
        ),
          (0, oe.setupEncryptorServices)(e),
          e.localStorageService.setInstance(t);
        const a = e.cryptoService || (0, A.makeCryptoService)(),
          o = new B.LocalStorageEventStore(e.localStorageService);
        (0, $.setInstance)(o), (0, x.setInstance)(o), (0, Q.setInstance)(e.storeService, e.localStorageService, e.wsService);
        let s = null;
        const c = () => {
          clearInterval(s);
        };
        return (
          (() => {
            let t = e.storeService.getUserSession();
            e.storeService.getStore().subscribe(() => {
              const r = e.storeService.getUserSession();
              r !== t &&
                ((t.masterPassword === r.masterPassword && t.serverKey === r.serverKey) ||
                  "" === r.masterPassword ||
                  (u.Debugger.log("Master Password || Server Key updated"),
                  r.masterPassword || r.serverKey
                    ? e.masterPasswordEncryptorService.setInstance({ raw: r.masterPassword }, r.serverKey)
                    : e.masterPasswordEncryptorService.close(),
                  (t = r)));
            });
          })(),
          {
            loadSessionData: () => _e(e.localStorageService, e.storeService),
            loadNonResumableSessionData: () => Te(e.localStorageService, e.storeService),
            accountExistsLocally: () =>
              (async function (e) {
                const t = await (0, L.getLocalAccounts)(e.storeService, e.storageService),
                  r = e.storeService.getUserLogin(),
                  n = e.localStorageService.getInstance(),
                  a = t.some(({ login: e }) => r === e);
                if (a) {
                  const e = await n.doesPersonalDataExist();
                  return Boolean(r && a && e);
                }
                const o = await n.doesLocalDataExist();
                return Boolean(r && o);
              })(e),
            refreshSessionData: () =>
              (async function (e, t) {
                const { localStorageService: r, storeService: n, wsService: a } = e,
                  o = (0, ee.requestPairing)(n, t),
                  s = (0, H.refreshUserABTest)(n, r.getInstance(), t),
                  i = (0, N.ukiSelector)(n.getState()),
                  c = (0, te.refreshPremiumStatus)(n, a, t, i),
                  u = (0, de.refreshCredentialsDedupView)(n, t);
                await Promise.all([c, o, s, u]);
              })(e, t),
            getSyncArgs: () => Ee(e.storeService, e.masterPasswordEncryptorService, e.wsService),
            sync: (t) => Pe(e, a, c, t),
            attemptSync: (t) => Se(e, a, c, t),
            requestNewSync: (t) => Ae(e, a, c, t),
            startPeriodic2FAInfoRefresh: () =>
              (() => {
                if (null !== s) return;
                const { storeService: t, wsService: r } = e;
                s = setInterval(() => {
                  (0, ae.refreshTwoFactorAuthenticationInfoService)(t, r);
                }, ne.ENFORCE_2FA_POLICY_REFRESH_TIMER_INTERVAL);
              })(),
            stopPeriodic2FAInfoRefresh: () => c(),
            fetchContactInfo: () => Ne(e.storeService, e.wsService),
            fetchSubscriptionCode: () =>
              (function (e, t) {
                const r = e.getAccountInfo().login,
                  n = (0, N.ukiSelector)(e.getState()),
                  a = e.getSubscriptionCode();
                return a
                  ? Promise.resolve(a)
                  : t.premium.getSubscriptionCode({ login: r, uki: n }).then((t) => {
                      const r = t && t.content && t.content.subscriptionCode;
                      return e.dispatch((0, D.saveSubscriptionCode)(r)), r;
                    });
              })(e.storeService, e.wsService),
            persistLocalSettings: () => we(e.localStorageService, e.storeService),
            persistPersonalData: () => Oe(e.localStorageService, e.storeService),
            persistPersonalSettings: () => Ue(e.localStorageService, e.storeService),
            persistAllData: () => Le(e.localStorageService, e.storeService),
            persistTeamAdminData: () => Me(e.localStorageService, e.storeService),
            persistLocalKey: (t) => e.localStorageService.getInstance().storeLocalKey(t),
            closeSession: () => me(e, c),
            lockSession: () => ge(e),
            fetchAccountInfo: () =>
              (function (e, t) {
                const r = e.getUserSession(),
                  n = r.analyticsIds,
                  a = r.publicUserId;
                return n.userAnalyticsId && n.deviceAnalyticsId && a
                  ? Promise.resolve({ userAnalyticsId: n.userAnalyticsId, deviceAnalyticsId: n.deviceAnalyticsId, publicUserId: a })
                  : (0, z.accountInfo)(e, t).then((t) => {
                      if ((0, Z.isApiError)(t) || "success" !== t.code) throw new Error("Unable to fetch updated account info");
                      return (
                        e.dispatch((0, h.updateAnalyticsIds)(t.userAnalyticsId, t.deviceAnalyticsId)),
                        e.dispatch((0, h.updatePublicUserId)(t.publicUserId)),
                        { userAnalyticsId: t.userAnalyticsId, deviceAnalyticsId: t.deviceAnalyticsId, publicUserId: t.publicUserId }
                      );
                    });
              })(e.storeService, e.storeService.getUserLogin())
          }
        );
      };
      (t.makeUserSessionService = (e, t, r) => {
        if (!t) throw new Error(a.AuthenticationCode[a.AuthenticationCode.EMPTY_LOGIN]);
        const n = t.toLowerCase();
        if (!(0, _.isValidLogin)(n)) throw new Error(a.AuthenticationCode[a.AuthenticationCode.INVALID_LOGIN]);
        if (!r && "" === r) throw new Error(a.AuthenticationCode[a.AuthenticationCode.EMPTY_MASTER_PASSWORD]);
        return e.storeService.dispatch((0, h.updateMasterPassword)(r)), e.storeService.dispatch((0, h.updateServerKey)("")), le(e, n, !0);
      }),
        (t.makeResumedUserSessionService = (e) => {
          const t = ((0, F.userLoginSelector)(e.storeService.getState()) ?? "").toLowerCase();
          if (!(0, _.isValidLogin)(t)) throw new Error(s.SessionResumingCode[s.SessionResumingCode.INVALID_LOGIN_IN_STORE]);
          return le(e, t);
        });
      const pe = async (e, t) => {
          const { storageService: r, storeService: n, eventBusService: a } = e;
          n.isAuthenticated() && (t && (await (0, J.cleanRememberMeStorageData)(n, r)), a.sessionClosed({ login: null })),
            (0, q.clearInstance)(),
            (0, x.clearInstance)(),
            (0, $.clearInstance)(),
            (0, Q.clearInstance)();
          const { anonymousPartnerId: o, dashlaneServerDeltaTimestamp: s, appKeys: u, styxKeys: d } = n.getSdkAuthentication();
          n.dispatch((0, c.resetLoginStepInfo)()),
            n.dispatch((0, h.updateSessionDidOpen)(!1)),
            n.dispatch((0, i.closeSession)()),
            n.dispatch((0, C.loadSdkAuthentication)({ anonymousPartnerId: o, dashlaneServerDeltaTimestamp: s, appKeys: u, styxKeys: d }));
        },
        me = async (e, t) => {
          const { storeService: r } = e;
          r.isAuthenticated() && (await (0, ce.waitUntilSyncComplete)(e.storeService), t()), await pe(e, !0);
        },
        ge = async (e) => {
          const { storeService: t } = e;
          if (!t.isAuthenticated()) {
            const e = ue.CarbonError.fromAnyError(new Error("No user session to lock")).addContextInfo(
              "LOCK USER SESSION",
              "UserSessionService"
            );
            throw ((0, I.sendExceptionLog)({ error: e }), e);
          }
          await pe(e, !1);
        },
        Se = async (e, t, r, n) => {
          try {
            return await Pe(e, t, r, n);
          } catch (e) {
            const t = new Error(`Sync failed: ${e}`);
            (0, I.sendExceptionLog)({ error: t, code: a.ExceptionCriticality.WARNING });
          }
        };
      let ye = !1,
        ve = () => {},
        fe = Promise.resolve();
      const Ae = async (e, t, r, n) => {
          if (!ye) return (ye = !0), await fe, (ye = !1), Se(e, t, r, n);
        },
        Ee = (e, t, r, a, o) => {
          const s = e.getLocalSettings(),
            i = e.getAccountInfo().login,
            c = o === n.Trigger.InitialLogin ? 0 : s.lastSync,
            u = o === n.Trigger.InitialLogin ? m.SyncType.FIRST_SYNC : m.SyncType.LIGHT_SYNC;
          return {
            dataEncryptorService: t,
            storeService: e,
            login: i,
            uki: (0, N.ukiSelector)(e.getState()),
            lastSyncTimestamp: c,
            syncType: u,
            personalData: e.getPersonalData(),
            needsKeys: !e.getUserSession().keyPair,
            ws: r,
            announce: a || ((e) => {})
          };
        },
        Ie = (e, t, r) => {
          const n = Ee(e, t, r);
          return Object.assign(n, { lastSyncTimestamp: g.MAX_SYNC_TIMESTAMP });
        },
        he = (e) => (t) => (0, I.sendExceptionLog)({ message: `[Crypto] unable to ${e}. ErrorMessage: ${t}` }),
        _e = async (e, t) => {
          const r = e
              .getInstance()
              .getPersonalData()
              .then((e) => (u.Debugger.log("Personal data has been deciphered successfully"), e))
              .catch((e) => ({ error: !0, logError: () => he("loadPersonalData")(e) })),
            n = e
              .getInstance()
              .getLocalSettings()
              .then((e) => (u.Debugger.log("Local settings have been deciphered successfully"), e))
              .catch((e) => ({ error: !0, logError: () => he("loadLocalSettings")(e) })),
            o = e
              .getInstance()
              .getPersonalSettings()
              .then((e) => (u.Debugger.log("Personal settings have been deciphered successfully"), e))
              .catch((e) => ({ error: !0, logError: () => he("loadPersonalSettings")(e) })),
            c = e
              .getInstance()
              .doesNotificationStatusExist()
              .then((r) => {
                r &&
                  e
                    .getInstance()
                    .getNotificationStatus()
                    .then(
                      (e) => (
                        u.Debugger.log("Notifications status have been deciphered successfully"),
                        t.dispatch((0, V.loadNotificationsStatus)(e)),
                        e
                      )
                    )
                    .catch((e) => ({ error: !0, logError: () => he("loadNotificationsStatus")(e) }));
              }),
            m = e
              .getInstance()
              .getUserABTests()
              .then((e) => (u.Debugger.log("User AB tests have been deciphered successfully"), e))
              .catch((e) => ({ error: !0, logError: () => he("loadUserABTests")(e) })),
            g = e
              .getInstance()
              .getAnalyticsIds()
              .then((e) => ((0, u.logInfo)({ message: "User Analytics IDs have been deciphered successfully" }), e))
              .catch((e) => ({ error: !0, logError: () => he("loadAnalticsIds")(e) })),
            S = (0, G.loadUserAuthenticationData)(e, t),
            y = [r, n, o];
          if (await e.getInstance().hasAuthenticationData()) {
            const e = S.then((e) =>
              (0, k.isLoadAuthenticationSuccess)(e) || e.message === k.FailedToRehydrateAuthenticationData
                ? { error: !1 }
                : { error: !0, logError: () => he("loadAuthenticationData")(e.error) }
            );
            y.push(e);
          }
          const v = await Promise.all(y),
            f = v.every((e) => !!e && e.error),
            A = v.some((e) => !!e && e.error);
          if (f) throw new Error(a.AuthenticationCode[a.AuthenticationCode.WRONG_PASSWORD]);
          if (A)
            throw (
              (v.forEach((e) => !!e && e.logError instanceof Function && e.logError()),
              new Error(a.AuthenticationCode[a.AuthenticationCode.DATA_TAMPERED_ERROR]))
            );
          try {
            t.dispatch((0, d.loadStoredPersonalData)(await r));
            const e = await n;
            if (e) {
              const r = (0, i.localSettingsUpdated)(e);
              t.dispatch(r), s.sendWebOnboardingModeUpdate(e.webOnboardingMode);
            }
            t.dispatch((0, l.loadStoredPersonalSettings)(await o)),
              t.dispatch((0, K.loadedStoredUserABTests)(await m)),
              t.dispatch((0, h.loadAnalyticsIds)(await g)),
              await S.then((e) => {
                if (!(0, k.isLoadAuthenticationSuccess)(e)) throw e.error;
              });
          } catch (e) {
            const t = `An error occurred when trying to write personalData, localSettings or personalSettings in Redux store ${e} `;
            throw (u.Debugger.error(t), new Error(t));
          }
          const E = e
              .getInstance()
              .getSharingData()
              .then((e) => {
                u.Debugger.log(`sharingData loaded for ${t.getAccountInfo().login}`), t.dispatch((0, p.sharingDataUpdated)(e));
              })
              .catch(he("loadSharingDataPromise")),
            I = e
              .getInstance()
              .getSharingSync()
              .then((e) => {
                u.Debugger.log(`sharingSync loaded for ${t.getAccountInfo().login}`),
                  t.dispatch((0, se.setAllPendingAction)(e.pendingItemGroups, e.pendingUserGroups));
              })
              .catch(he("loadSharingSyncPromise")),
            _ = e
              .getInstance()
              .getTeamAdminData()
              .then((e) => {
                u.Debugger.log(`teamAdminData loaded for ${t.getAccountInfo().login}`), t.dispatch((0, T.teamAdminDataUpdated)(e));
              })
              .catch(he("loadTeamAdminDataPromise")),
            b = e
              .getInstance()
              .getIcons()
              .then((e) => {
                if (null !== e) {
                  const r = (0, X.IconsCacheLoaded)(e);
                  t.dispatch(r);
                }
              })
              .catch(he("loadIconsDataPromise")),
            C = e
              .getInstance()
              .doesUserActivityExist()
              .then(async (r) => {
                if (r) {
                  const { lastSentAt: r } = await e.getInstance().getUserActivity();
                  t.dispatch((0, W.userActivityLastSentAtUpdated)(r));
                }
              })
              .catch(he("loadUserActivity")),
            P = e
              .getInstance()
              .doesVaultReportExist()
              .then(async (r) => {
                if (r) {
                  const { lastSentAt: r } = await e.getInstance().getVaultReport();
                  t.dispatch((0, Y.vaultReportLastSentAtUpdated)(r));
                }
              })
              .catch(he("loadVaultReport"));
          return Promise.resolve().then(() => {
            Promise.all([E, I, _, c, b, C, P]);
          });
        },
        Te = async (e, t) => {
          const r = (e) => (t) => {
              const r = `[Session] unable to ${e}. ErrorMessage: ${t}`;
              return u.Debugger.error(r), (0, I.sendExceptionLog)({ message: r });
            },
            n = async (e, r) => {
              await r;
              const n = (0, F.userLoginSelector)(t.getState());
              u.Debugger.log(`${e} loaded for ${n}`);
            },
            a = e
              .getInstance()
              .getPersonalData()
              .then((e) => {
                t.dispatch((0, d.loadStoredPersonalData)(e));
              })
              .catch(r("loadPersonalData")),
            o = e
              .getInstance()
              .getSharingData()
              .then((e) => {
                t.dispatch((0, p.sharingDataUpdated)(e));
              })
              .catch(r("loadSharingDataPromise")),
            s = e
              .getInstance()
              .getSharingSync()
              .then((e) => {
                t.dispatch((0, se.setAllPendingAction)(e.pendingItemGroups, e.pendingUserGroups));
              })
              .catch(r("loadSharingSyncPromise")),
            i = e
              .getInstance()
              .getTeamAdminData()
              .then((e) => {
                t.dispatch((0, T.teamAdminDataUpdated)(e));
              })
              .catch(r("loadTeamAdminDataPromise")),
            c = e
              .getInstance()
              .getIcons()
              .then((e) => {
                if (null !== e) {
                  const r = (0, X.IconsCacheLoaded)(e);
                  t.dispatch(r);
                }
              })
              .catch(r("loadIconsDataPromise"));
          try {
            await Promise.all([
              n("personalData", a),
              n("sharingData", o),
              n("sharingData", s),
              n("teamAdminData", i),
              n("iconsCacheData", c)
            ]);
          } catch (e) {
            const t = "Failed to load non resumable user session data",
              r = new Error(t);
            (0, u.logError)({ message: t, tag: ["resume"], details: { error: JSON.stringify(e) } }), (0, I.sendExceptionLog)({ error: r });
          }
        };
      t.hasTreatProblems = (e, t, r) => {
        if (!e.summary) return { transactionsToDownload: [], transactionsToUpload: [] };
        const n = t.getPersonalData(),
          { missingLocally: a, missingRemotely: o } = (0, P.getMissingIdentifiers)(r, n, e.summary);
        return { transactionsToUpload: [...o], transactionsToDownload: [...a] };
      };
      const be = async (e) => {
        const t = (0, $.getInstance)(),
          r = (0, x.getInstance)();
        let n = null;
        try {
          const { storeService: u, applicationModulesAccess: l } = e,
            p = await (0, g.sync)(e),
            m = p.clearTransactions || [];
          if (0 !== m.length) {
            n = r.lockTopic("iconsUpdates");
            const d = m.filter((e) => "AUTHENTIFIANT" === e.type).map((e) => e.identifier),
              p = ((e) => e.filter((e) => "SECURITYBREACH" === e.type).map((e) => e.identifier))(m),
              g = 0 === (c = d).length ? null : { type: "credentialUpdates", credentialIds: c };
            null !== g && (await t.add("iconsUpdates", g));
            const S = 0 === (o = p).length ? null : { type: "breachUpdates", breachesIds: o };
            null !== S && (await t.add("iconsUpdates", S)),
              (await Promise.all(m.map(i.applyTransaction))).forEach((e) => {
                u.dispatch(e);
              }),
              s.reportDataUpdate(u);
            try {
              if (l && (d.length > 0 || p.length > 0)) {
                const { commands: e } = l.createClients().passwordHealth;
                e.recalculatePasswordHealth();
              }
            } catch (e) {
              const t = `Password Health update - sync: ${e}`,
                r = new Error(t);
              (0, I.sendExceptionLog)({ error: r, code: a.ExceptionCriticality.WARNING });
            }
          }
          return (
            p.uploadedTransactions.length > 0 &&
              u.dispatch((0, d.updateLastBackupTime)(p.uploadedTransactions, Math.floor(p.lastSyncTimestamp / 1e3))),
            e.lastSyncTimestamp < g.MAX_SYNC_TIMESTAMP && u.dispatch((0, y.registerLastSync)(p.lastSyncTimestamp)),
            p
          );
        } catch (e) {
          throw e;
        } finally {
          n && r.releaseTopic("iconsUpdates", n);
        }
        var o, c;
      };
      t.storeSync = async (e, r) => {
        const n = await (async (e) => {
          const { announce: t, personalData: r } = e;
          try {
            t(w.announcements.chronologicalSyncStarted(r));
            const n = await be(e);
            return t(w.announcements.chronologicalSyncFinished(n.summary, n.fullBackupFileSize)), n;
          } catch (e) {
            throw (t(w.announcements.chronologicalSyncFailed(e)), e);
          }
        })(r);
        return (async (e, r, n) => {
          const { announce: a } = r;
          a(w.announcements.treatProblemStarted());
          const { transactionsToDownload: o, transactionsToUpload: s } = (0, t.hasTreatProblems)(n, e, a),
            i = o.length,
            c = s.length;
          if ((a(w.announcements.treatProblemDiffComputed(i, c)), i <= 0 && c <= 0)) return a(w.announcements.treatProblemFinished()), n;
          try {
            c > 0 && e.dispatch((0, d.storeChangesToUpload)(s));
            const t = await be({ ...Ee(e, r.dataEncryptorService, r.ws, a), transactionIds: o }),
              i = { ...t, clearTransactions: [...t.clearTransactions, ...n.clearTransactions] };
            return a(w.announcements.treatProblemFinished()), i;
          } catch (e) {
            throw (a(w.announcements.treatProblemFailed(e)), e);
          }
        })(e, r, n);
      };
      const Ce = async (
        {
          storeService: e,
          dataEncryptorService: r,
          localStorageService: n,
          wsService: a,
          eventLoggerService: o,
          applicationModulesAccess: s
        },
        i,
        c,
        u
      ) => {
        if (!c.sharing2 || !(0, N.ukiSelector)(e.getState())) return c;
        const d = async (t) => {
          const r = await (async (
              { storeService: e, wsService: t, localStorageService: r, eventLoggerService: n, applicationModulesAccess: a },
              o,
              s,
              i
            ) => {
              try {
                o(w.announcements.sharingSyncStarted());
                const c = (e, t) => o(w.announcements.sharingSyncInvalidSyncData(e, t)),
                  u = await (0, v.syncSharing)(
                    { storeService: e, wsService: t, localStorageService: r, eventLoggerService: n, applicationModulesAccess: a },
                    s,
                    c,
                    i
                  );
                return o(w.announcements.sharingSyncFinished()), u;
              } catch (e) {
                throw (o(w.announcements.sharingSyncFailed(e)), e);
              }
            })({ storeService: e, wsService: a, localStorageService: n, eventLoggerService: o, applicationModulesAccess: s }, i, t, u),
            c = await (async (e, t, r, n) => {
              try {
                r(w.announcements.teamAdminDataSyncStarted());
                const a = await (0, b.syncUserGroupManagement)(e, t, n);
                return r(w.announcements.teamAdminDataSyncFinished()), a;
              } catch (e) {
                throw (r(w.announcements.teamAdminDataSyncFailed(e)), e);
              }
            })(e, a, i, r);
          return c;
        };
        if ((await d(c.sharing2)) === f.SyncUserGroupManagementStatus.NEEDS_FRESH_SHARING_DATA) {
          const n = Ie(e, r, a),
            { sharing2: o } = await (0, t.storeSync)(e, { ...n, applicationModulesAccess: s, announce: i });
          await d(o);
        }
        return c;
      };
      t.isSyncInProgress = (e) => {
        const t = e.getState(),
          r = (0, F.syncIsInProgressSelector)(t),
          { startTime: n } = (0, F.syncSelector)(t);
        return (
          !!r &&
          (Date.now() - (n || 0) < 6e5
            ? (u.Debugger.log("[Sync] Already in progress, skipping trigger…"), !0)
            : (e.dispatch((0, S.syncFailure)()), (0, I.sendExceptionLog)({ message: '[Sync] "inProgress" for more than 10 minutes' }), !1))
        );
      };
      const Pe = async (e, r, n, o) => {
        const {
            applicationModulesAccess: i,
            eventBusService: c,
            localStorageService: d,
            masterPasswordEncryptorService: l,
            remoteDataEncryptorService: p,
            storeService: m,
            wsService: g,
            eventLoggerService: y
          } = e,
          v = m.getState();
        if (!m.isAuthenticated()) throw new Error("Impossible to Sync - user not authenticated");
        if ((0, t.isSyncInProgress)(m)) return;
        fe = new Promise((e) => (ve = e));
        const f = (0, R.twoFactorAuthenticationInfoSelector)(v);
        if (f.status === a.TwoFactorAuthenticationInfoRequestStatus.READY) {
          const { shouldEnforceTwoFactorAuthentication: e } = f;
          if (e) return;
        }
        const A = new ie.SyncTaskTracker(i);
        await A.startTracking();
        const E = (0, F.isRemoteKeyActivatedSelector)(v) ? p : l,
          h = (0, M.setupProbe)((0, O.makeEventLoggerSyncMonitor)(y).monitor, (0, U.makeDiagnosticReportMonitor)()),
          _ = { ...Ee(m, E, g, h, o), applicationModulesAccess: i },
          { syncType: T } = _;
        try {
          h(w.announcements.syncStarted(o, T)), s.triggerSessionSyncStatus({ status: "syncing" }), m.dispatch((0, S.syncStarted)());
          const e = await (0, t.storeSync)(m, _);
          return (
            await (0, t.treatKeysResult)(E, m, r, g, h, e),
            await Ce(
              {
                storeService: m,
                dataEncryptorService: E,
                localStorageService: d,
                wsService: g,
                eventLoggerService: y,
                applicationModulesAccess: i
              },
              h,
              e,
              o
            ),
            await E.getInstance().prepareCrypto(),
            h(w.announcements.saveStarted()),
            await Le(d, m),
            h(w.announcements.saveFinished()),
            c.syncSuccess({}),
            m.dispatch((0, S.syncSuccess)(e.isUploadEnabled)),
            s.triggerSessionSyncStatus({ status: "success" }),
            h(w.announcements.syncFinished()),
            ve(),
            e.clearTransactions
          );
        } catch (t) {
          if (
            (m.dispatch((0, S.syncFailure)()),
            s.triggerSessionSyncStatus({ status: "error" }),
            h(w.announcements.syncFailed(t)),
            c.syncFailure({}),
            ve(),
            t.message === a.AuthenticationCode[a.AuthenticationCode.INVALID_UKI])
          ) {
            const t = "[Sync] Device UKI is invalid, closing the session",
              r = new Error(t);
            return (0, u.logError)({ message: t, details: { error: r } }), (0, I.sendExceptionLog)({ error: r }), void me(e, n);
          }
          throw t;
        } finally {
          A.terminateTracking();
        }
      };
      (t.treatKeysResult = async (e, r, n, a, s, i) => {
        try {
          const s = async (t) => {
            if ((u.Debugger.log("[Sync] Extract Keys from Sync…"), !t)) return null;
            u.Debugger.log("[Sync] Decipher  private key BEGIN");
            const r = await e.getInstance().decrypt(t),
              n = (0, o.deflatedUtf8ToUtf16)(r, { skipInflate: !0 });
            return u.Debugger.log("[Sync] Decipher  private key SUCCESS"), n;
          };
          if (i.keys && i.keys.privateKey)
            try {
              const e = await s(i.keys.privateKey);
              r.dispatch((0, h.updateKeyPair)({ privateKey: e, publicKey: i.keys.publicKey }));
            } catch (e) {}
          if (!r.getUserSession().keyPair) {
            const o = await (0, t.generateRsaKeys)(e, n),
              s = Ie(r, e, a);
            (s.needsKeys = !0),
              (s.syncType = m.SyncType.FULL_SYNC),
              (s.pushKeysToServer = { private: o.encryptedPrivateKey, public: o.keys.publicKey }),
              u.Debugger.log("SYNC RSA Keys - BEGIN"),
              await be(s),
              u.Debugger.log("SYNC RSA Keys - END"),
              r.dispatch((0, h.updateKeyPair)({ privateKey: o.keys.privateKey, publicKey: o.keys.publicKey }));
          }
        } catch (e) {
          throw (s(w.announcements.treatSharingKeysFailed(e)), e);
        }
      }),
        (t.generateRsaKeys = async (e, t, r = {}) => {
          try {
            const n = await t.asymmetricEncryption.generateRsaKeyPair();
            u.Debugger.log("Generating RSA Keys");
            const a = (0, o.utf16ToDeflatedUtf8)(n.privateKey, { skipDeflate: !0 }),
              s = await e.getInstance().encrypt(a, r);
            return (
              u.Debugger.log("Encrypt RSA Keys"), { keys: { publicKey: n.publicKey, privateKey: n.privateKey }, encryptedPrivateKey: s }
            );
          } catch (e) {
            throw (u.Debugger.log("Error while Generating RSA KEY: " + e), e);
          }
        });
      const De = (e) => e.persistData === E.PersistData.PERSIST_DATA_NO,
        we = (e, t) => {
          const r = t.getLocalSettings(),
            n = t.getAccountInfo();
          return De(n) || !n.isAuthenticated ? Promise.resolve() : e.getInstance().storeLocalSettings(r);
        },
        Oe = async (e, t) => {
          const r = t.getPersonalData(),
            n = t.getAccountInfo();
          return De(n) || !n.isAuthenticated ? Promise.resolve() : e.getInstance().storePersonalData(r);
        },
        Ue = async (e, t) => {
          const r = t.getPersonalSettings(),
            n = t.getAccountInfo();
          return De(n) || !n.isAuthenticated ? Promise.resolve() : e.getInstance().storePersonalSettings(r);
        },
        Me = (e, t) => {
          const r = t.getTeamAdminData(),
            n = t.getAccountInfo();
          return De(n) || !n.isAuthenticated
            ? Promise.resolve()
            : e
                .getInstance()
                .storeTeamAdminData(r)
                .then(() => {});
        },
        Le = async (e, t) => {
          const r = (0, j.userABTestsSelector)(t.getState()),
            n = t.getLocalSettings(),
            o = t.getPersonalSettings(),
            s = t.getSharingData(),
            i = (0, F.sharingSyncSelector)(t.getState()),
            c = t.getAccountInfo(),
            u = t.getNotificationStatus(),
            d = t.getTeamAdminData(),
            l = t.getState(),
            p = (0, N.sessionKeysSelector)(l),
            m = (0, F.analyticsIdsSelector)(l);
          if (De(c) || !c.isAuthenticated) return Promise.resolve();
          isNaN(n.lastSync) &&
            (0, I.sendExceptionLog)({
              message: "Persisting localSettings with a NaN lastSyncTimestamp",
              code: a.ExceptionCriticality.WARNING
            });
          const g = d?.teams ?? {},
            S = Object.keys(g).reduce((e, t) => {
              const r = d.teams[t],
                n = r.specialItemGroup ? (r.specialItemGroup.items || []).map((e) => e.itemId) : [];
              return e.concat(n);
            }, []),
            y = { ...s, items: s.items.map((e) => (!e.content || S.includes(e.itemId) ? e : { ...e, content: "" })) };
          await Promise.all([
            Oe(e, t),
            we(e, t),
            e.getInstance().storePersonalSettings(o),
            e.getInstance().storeSharingData(y),
            e.getInstance().storeSharingSync(i),
            e.getInstance().storeNotificationsStatus(u),
            p ? e.getInstance().storeAuthenticationKeys(p) : Promise.resolve(),
            e.getInstance().storeTeamAdminData(d),
            (0, G.persistUserAuthenticationData)(e, t),
            e.getInstance().storeUserABTests(r),
            e.getInstance().storeAnalyticsIds(m)
          ]);
        },
        Ne = (e, t) => {
          const r = e.getAccountInfo().login,
            n = (0, N.ukiSelector)(e.getState());
          return t.contactInfo.getContactInfo({ login: r, uki: n }).then((e) => {
            const { result: t, ...r } = e;
            return r;
          });
        };
    },
    506623: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupEncryptorServices = void 0);
      const n = r(416593),
        a = r(538981),
        o = (0, r(164910).getNoDerivationCryptoConfig)();
      t.setupEncryptorServices = function (e) {
        const { storeService: t } = e,
          r = t.getState(),
          s = (0, n.sessionEncryptorKeysSelector)(r);
        !(function (e, t, r) {
          const { masterPassword: n, serverKey: a } = t;
          if (!n) return;
          const [s, i, c] = r ? [n, "", o] : [n, a, void 0];
          e.masterPasswordEncryptorService.setInstance({ raw: s }, i, c);
        })(e, s, (0, a.isSSOUserSelector)(r)),
          (function (e, t) {
            const { masterPassword: r, remoteKey: n, serverKey: a } = t;
            if (!n && !r) return;
            const [s, i, c] = n ? [n, "", o] : [r, a, void 0];
            e.remoteDataEncryptorService.setInstance({ raw: s }, i, c);
          })(e, s),
          (function (e, t) {
            const { localKey: r, masterPassword: n, serverKey: a } = t;
            if (!r && !n) return;
            const [s, i, c] = r ? [r, "", o] : [n, a, void 0];
            e.localDataEncryptorService.setInstance({ raw: s }, i, c);
          })(e, s);
      };
    },
    283060: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const n = r(660765),
        a = r(718216),
        o = r(582262),
        s = r(595551);
      t.setupSubscriptions = function (e, t) {
        e.appInitialized.on(async (e) => {
          const { sessionService: r, storeService: i } = t;
          (0, s.isSyncInProgress)(i) &&
            (i.dispatch((0, o.syncFailure)()),
            e.initMode === a.InitMode.Resume && (await r.getInstance().user.attemptSync(n.Trigger.Wake)));
        });
      };
    },
    998260: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.SyncTaskTracker = void 0);
      const n = r(553788),
        a = r(419562),
        o = r(660765);
      t.SyncTaskTracker = class {
        constructor(e) {
          (this.taskTrackingId = null), (this.taskTrackingClient = null), (this.applicationModulesAccess = e);
        }
        async startTracking() {
          if ((0, n.isMv3Environment)()) {
            this.taskTrackingClient = this.applicationModulesAccess.createClients().taskTracking;
            const e = await this.taskTrackingClient.commands.startTaskTracking({
              businessDomain: o.BusinessDomain.Sync,
              feature: "sync",
              taskName: "sync"
            });
            (0, a.isSuccess)(e) && (this.taskTrackingId = (0, a.getSuccess)(e).id);
          }
        }
        terminateTracking() {
          const { taskTrackingId: e } = this;
          (0, n.isMv3Environment)() && e && this.taskTrackingClient.commands.terminateTaskTracking({ taskTrackingId: e });
        }
      };
    },
    357903: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.waitUntilSyncComplete = void 0);
      const n = r(595551);
      t.waitUntilSyncComplete = async (e) =>
        !1 === (0, n.isSyncInProgress)(e) ||
        new Promise((t) => {
          const r = Date.now(),
            a = setInterval(
              () => (!1 === (0, n.isSyncInProgress)(e) ? (clearInterval(a), t(!0)) : Date.now() - r > 6e4 ? t(!1) : void 0),
              1e3
            );
        });
    },
    301965: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.wipeOutLocalAccounts = t.deviceRemoteDeletion = void 0);
      const n = r(802246),
        a = r(963739),
        o = r(656915),
        s = r(290622),
        i = r(46298),
        c = r(670252);
      async function u(e, t, r) {
        const o = r.map((r) => (0, a.deleteAllLocalUserData)(e, t, r)).concat((0, n.deleteUsersPublicSettings)(r));
        await Promise.all(o);
      }
      (t.deviceRemoteDeletion = async function (e, t, r) {
        let n = [];
        try {
          const a = await (0, s.getLocalAccounts)(e, t);
          if (0 === a.length) return;
          const c = a.map(({ login: e }) => e);
          (n = await (async function (e, t) {
            const r = t.map((t) => ({ deviceAccessKey: (0, o.getDeviceAccessKeySelector)(e.getState(), t), login: t })),
              n = await (0, i.getUnauthorizedProfiles)(e, { profiles: r });
            return (0, i.isApiError)(n) ? [] : n.unauthorizedProfiles.map((e) => e.login);
          })(e, c)),
            await u(t, r, n);
        } catch (e) {
          const t = new Error(`[UserManagement]: deviceRemoteDeletion - ${e}`);
          (0, c.sendExceptionLog)({ error: t });
        }
      }),
        (t.wipeOutLocalAccounts = u);
    },
    441265: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInternalTestUser = void 0),
        (t.isInternalTestUser = function (e) {
          const t = e.trim();
          return (
            t.startsWith("{9a9b9c9d-") ||
            (t.startsWith("kw_test_") && (t.endsWith("@mailinator.com") || t.endsWith("@yopmail.com") || t.endsWith(".kwtest.io")))
          );
        });
    },
    772807: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const n = r(954642),
        a = r(306637),
        o = r(682258),
        s = r(112121);
      t.config = {
        commands: { dismissUserMessages: { handler: o.dismissUserMessagesHandler }, addUserMessage: { handler: s.addUserMessageHandler } },
        queries: {
          getVisibleUserMessages: { selector: n.getVisibleUserMessagesSelector },
          getUserMessages: { selector: n.getUserMessagesSelector }
        },
        liveQueries: {
          liveVisibleUserMessages: { operator: a.liveVisibleUserMessages$ },
          liveUserMessages: { operator: a.liveUserMessages$ }
        }
      };
    },
    765210: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.userMessagesDismissed = t.userMessageAdded = t.USER_MESSAGES_DISMISSED = t.USER_MESSAGE_ADDED = void 0),
        (t.USER_MESSAGE_ADDED = "USER_MESSAGE_ADDED"),
        (t.USER_MESSAGES_DISMISSED = "USER_MESSAGES_DISMISSED"),
        (t.userMessageAdded = (e) => ({ type: t.USER_MESSAGE_ADDED, userMessage: e })),
        (t.userMessagesDismissed = (e) => ({ type: t.USER_MESSAGES_DISMISSED, predicate: e }));
    },
    954642: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getVisibleUserMessagesSelector = t.getUserMessagesByTypeSelector = t.getUserMessagesSelector = void 0);
      const n = r(432034);
      (t.getUserMessagesSelector = (e) => e.userSession.localSettings.userMessages),
        (t.getUserMessagesByTypeSelector = (e, t) => e.userSession.localSettings.userMessages.filter((e) => e.type === t)),
        (t.getVisibleUserMessagesSelector = (0, n.createSelector)(t.getUserMessagesSelector, (e) => e.filter(({ dismissedAt: e }) => !e)));
    },
    486649: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const n = r(772807);
      t.bootstrap = (e) => {
        e.register(n.config);
      };
    },
    112121: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addUserMessageHandler = void 0);
      const n = r(765210);
      t.addUserMessageHandler = (e, t) => (
        e.storeService.dispatch((0, n.userMessageAdded)({ type: t.type })),
        e.sessionService.getInstance().user.persistLocalSettings(),
        Promise.resolve()
      );
    },
    682258: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.dismissUserMessagesHandler = void 0);
      const n = r(765210);
      t.dismissUserMessagesHandler = (e, t) => (
        e.storeService.dispatch((0, n.userMessagesDismissed)(t)),
        e.sessionService.getInstance().user.persistLocalSettings(),
        Promise.resolve()
      );
    },
    375004: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createTrialExpiredUserMessage = t.isTrialExpired = void 0);
      const n = r(453576);
      (t.isTrialExpired = function ({ premiumStatus: e, currentDate: t = Date.now() }) {
        switch (e?.statusCode) {
          case n.PremiumStatusCode.PREMIUM:
          case n.PremiumStatusCode.OLD_ACCOUNT:
          case n.PremiumStatusCode.NEW_USER:
          case n.PremiumStatusCode.GRACE_PERIOD:
            return !1;
          case n.PremiumStatusCode.PREMIUM_CANCELLED: {
            const r = 1e3 * (e.endDate ?? 0);
            return !!r && r - t < 0;
          }
          case n.PremiumStatusCode.NO_PREMIUM:
          default:
            return !0;
        }
      }),
        (t.createTrialExpiredUserMessage = function () {
          return { type: n.UserMessageTypes.TRIAL_EXPIRED };
        });
    },
    953156: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var n = r(486649);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return n.bootstrap;
        }
      });
    },
    306637: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.liveUserMessages$ = t.liveVisibleUserMessages$ = void 0);
      const n = r(518948),
        a = r(903343),
        o = r(954642);
      (t.liveVisibleUserMessages$ = () => (0, n.pipe)((0, a.map)(o.getVisibleUserMessagesSelector), (0, a.distinctUntilChanged)())),
        (t.liveUserMessages$ = () => (0, n.pipe)((0, a.map)(o.getUserMessagesSelector), (0, a.distinctUntilChanged)()));
    },
    321614: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createUserSettingsLogContent = void 0);
      const n = r(656915),
        a = r(416593);
      t.createUserSettingsLogContent = (e) => {
        const t = (0, n.webAuthnAuthenticationOptedInSelector)(e),
          r = (0, n.rememberMeFor14DaysOptedInSelector)(e);
        return {
          hasAuthenticationWithWebauthn: t,
          hasCredentialsProtectWithMasterPassword: (0, a.personalSettingsSelector)(e).SecuredDataShowPassword,
          hasAuthenticationWithRememberMe: r
        };
      };
    },
    886903: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sendUserSettingsLog = void 0);
      const n = r(660765),
        a = r(566102),
        o = r(321614);
      t.sendUserSettingsLog = async (e) => {
        const t = (0, o.createUserSettingsLogContent)(e.storeService.getState());
        await (0, a.logEvent)(e, {
          event: new n.UserUserSettingsEvent({
            hasAuthenticationWithWebauthn: t.hasAuthenticationWithWebauthn,
            hasCredentialsProtectWithMasterPassword: t.hasCredentialsProtectWithMasterPassword,
            hasAuthenticationWithRememberMe: t.hasAuthenticationWithRememberMe
          })
        });
      };
    },
    403149: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupUserSettingsLogSubscriptions = void 0);
      const n = r(886903);
      t.setupUserSettingsLogSubscriptions = async function (e, t) {
        e.sessionOpened.on(() => {
          (0, n.sendUserSettingsLog)(t);
        });
      };
    },
    335587: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.asyncMap = void 0),
        (t.asyncMap = (e, t) => Promise.all(e.map((e) => t(e))));
    },
    630144: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canonizeText = void 0),
        (t.canonizeText = function (e) {
          if (!e) return "";
          let t = e.trim();
          return (
            t.normalize && (t = t.normalize("NFD").replace(/[\u0300-\u036f]/g, "")),
            (t = t.toLowerCase().replace(/[\+_\\\/\?\.\-_{}\[\]\(\)\*&!@#\$~`%\^=\|:,;"'<>]/g, " ")),
            t.replace(/\s+/g, " ")
          );
        });
    },
    278320: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.generateItemUuid = void 0);
      const n = r(235992);
      t.generateItemUuid = function () {
        return `{${(0, n.v4)().toUpperCase()}}`;
      };
    },
    596997: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          return Math.ceil(2e9 * Math.random());
        });
    },
    500053: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUnixTimestamp = void 0),
        (t.getUnixTimestamp = function () {
          return Math.round(Date.now() / 1e3);
        });
    },
    428445: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.checkOrigin =
          t.removeNonDigitCharacters =
          t.looksLikeUuid =
          t.normalizeEmail =
          t.looksLikeEmail =
          t.isValidLogin =
          t.postDataToUrl =
          t.getClientAgentHeader =
            void 0);
      const n = r(366319),
        a = r(401067),
        o = r(314656),
        s = r(786056),
        i = (e) => n.stringify(a.map((e) => (Array.isArray(e) ? JSON.stringify(e) : e), e));
      function c(e) {
        return `version:${e.appVersion},platform:${e.platformName}}`;
      }
      (t.getClientAgentHeader = c),
        (t.postDataToUrl = async function (e, t, r) {
          const n = {
            headers: {
              "Client-Agent": c((0, s.getPlatformInfo)()),
              "Content-Type": "application/x-www-form-urlencoded",
              ...(r?.headers ?? {})
            },
            transformRequest: [i],
            responseType: r?.responseType ?? "json"
          };
          return (0, o.post)(e, t, n);
        }),
        (t.isValidLogin = (e) => d(e) || m(e));
      const u = /^[^\s@]+@([^\s@])+\.([^\s@])+$/i;
      function d(e) {
        return u.test(e);
      }
      t.looksLikeEmail = d;
      const l = /[<>]/g;
      t.normalizeEmail = function (e) {
        return e ? e.trim().toLowerCase().replace(l, "") : "";
      };
      const p = "^{?[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}}?$";
      function m(e) {
        return new RegExp(p).test(e);
      }
      (t.looksLikeUuid = m),
        (t.removeNonDigitCharacters = function (e) {
          return "string" == typeof e ? e.replace(/\D/g, "") : "";
        }),
        (t.checkOrigin = (e) => {
          const t = (r = e) ? r?.location?.origin : void 0;
          var r;
          return !t || !t.endsWith(("LmRhc2hsYW5lLmNvbQ==", atob("LmRhc2hsYW5lLmNvbQ==")));
        });
    },
    954218: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = Function.prototype.toString,
        n = r.call(Object),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.toString,
        i = "undefined" != typeof Symbol ? Symbol.toStringTag : void 0;
      t.default = function (e) {
        if (
          !((e) => "object" == typeof e && null !== e)(e) ||
          "[object Object]" !==
            (function (e) {
              if (null === e) return void 0 === e ? "[object Undefined]" : "[object Null]";
              if (!i || !(i in Object(e))) return s.call(e);
              const t = o.call(e, i),
                r = e[i];
              let n = !1;
              try {
                (e[i] = void 0), (n = !0);
              } catch (e) {}
              const a = s.call(e);
              return n && (t ? (e[i] = r) : delete e[i]), a;
            })(e)
        )
          return !1;
        const t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        const a = o.call(t, "constructor") && t.constructor;
        return "function" == typeof a && a instanceof a && r.call(a) === n;
      };
    },
    222376: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vpnApiConfig = void 0);
      const n = r(653041),
        a = r(697657),
        o = r(625838),
        s = r(283419),
        i = r(608522);
      t.vpnApiConfig = {
        commands: {
          activateVpnAccount: { handler: n.activateVpnAccountHandler },
          clearVpnAccountErrors: { handler: a.clearVpnAccountErrorsHandler },
          completeVpnAccountActivation: { handler: o.completeVpnAccountActivationHandler }
        },
        queries: {
          getVpnAccount: { selector: i.vpnAccountStatusSelector },
          getVpnCapabilitySetting: { selector: i.vpnCapabilitySettingSelector }
        },
        liveQueries: { liveVpnAccount: { operator: s.vpnAccountStatus$ } }
      };
    },
    194922: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.openDashlaneVpnAPI = void 0);
      const n = r(46298),
        a = r(529301);
      t.openDashlaneVpnAPI = (e) => ({
        generateCredential: async (t, r) => {
          const o = await (0, n.generateCredential)(e, t, { email: r });
          return (0, n.isApiError)(o)
            ? {
                success: !1,
                error:
                  o.code === n.GetVpnCredentialBusinessErrors.USER_ALREADY_HAS_AN_ACCOUNT_FOR_PROVIDER
                    ? a.VpnErrorType.AccountAlreadyExistError
                    : a.VpnErrorType.ServerError
              }
            : { success: !0, password: o.password };
        }
      });
    },
    529301: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VpnErrorType = void 0),
        (function (e) {
          (e.AccountAlreadyExistError = "AccountAlreadyExist"), (e.ServerError = "ServerError");
        })(t.VpnErrorType || (t.VpnErrorType = {}));
    },
    302749: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeVpnLogger = void 0);
      const n = r(660765),
        a = r(566102),
        o = r(529301),
        s = {
          [o.VpnErrorType.AccountAlreadyExistError]: n.ActivateVpnError.EmailAlreadyInUse,
          [o.VpnErrorType.ServerError]: n.ActivateVpnError.ServerError
        };
      t.makeVpnLogger = (e) => ({
        logComplete: async () => {
          await (0, a.logEvent)(e, { event: new n.UserActivateVpnEvent({ flowStep: n.FlowStep.Complete }) });
        },
        logError: async (t) => {
          await (0, a.logEvent)(e, { event: new n.UserActivateVpnEvent({ flowStep: n.FlowStep.Error, errorName: s[t] }) });
        },
        logStart: async () => {
          await (0, a.logEvent)(e, { event: new n.UserActivateVpnEvent({ flowStep: n.FlowStep.Start }) });
        }
      });
    },
    842238: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.vpnAccountNotFoundAction =
          t.vpnAccountActivationCompleteAction =
          t.vpnAccountGenerationErrorAction =
          t.vpnAccountGenerationDoneAction =
          t.vpnAccountActivatingAction =
          t.VPN_ACCOUNT_NOT_FOUND =
          t.VPN_ACCOUNT_GENERATION_ERROR =
          t.VPN_ACCOUNT_ACTIVATION_COMPLETE =
          t.VPN_ACCOUNT_GENERATION_DONE =
          t.VPN_ACCOUNT_ACTIVATING =
            void 0),
        (t.VPN_ACCOUNT_ACTIVATING = "VPN_ACCOUNT_ACTIVATING"),
        (t.VPN_ACCOUNT_GENERATION_DONE = "VPN_ACCOUNT_GENERATION_DONE"),
        (t.VPN_ACCOUNT_ACTIVATION_COMPLETE = "VPN_ACCOUNT_ACTIVATION_COMPLETE"),
        (t.VPN_ACCOUNT_GENERATION_ERROR = "VPN_ACCOUNT_GENERATION_ERROR"),
        (t.VPN_ACCOUNT_NOT_FOUND = "VPN_ACCOUNT_NOT_FOUND"),
        (t.vpnAccountActivatingAction = () => ({ type: t.VPN_ACCOUNT_ACTIVATING })),
        (t.vpnAccountGenerationDoneAction = () => ({ type: t.VPN_ACCOUNT_GENERATION_DONE })),
        (t.vpnAccountGenerationErrorAction = (e) => ({ type: t.VPN_ACCOUNT_GENERATION_ERROR, error: e })),
        (t.vpnAccountActivationCompleteAction = () => ({ type: t.VPN_ACCOUNT_ACTIVATION_COMPLETE })),
        (t.vpnAccountNotFoundAction = () => ({ type: t.VPN_ACCOUNT_NOT_FOUND }));
    },
    916667: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vpnApiBootstrap = void 0);
      const n = r(222376);
      t.vpnApiBootstrap = (e) => {
        e.register(n.vpnApiConfig);
      };
    },
    290731: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VPN_CREDENTIAL_NAME = t.VPN_CREDENTIAL_URL = t.VPN_DASHLANE_HOTSPOTSHIELD_SUBDOMAIN = t.VPN_HOTSPOTSHIELD_DOMAIN = void 0),
        (t.VPN_HOTSPOTSHIELD_DOMAIN = "hotspotshield.com"),
        (t.VPN_DASHLANE_HOTSPOTSHIELD_SUBDOMAIN = "dashlane"),
        (t.VPN_CREDENTIAL_URL = `https://${t.VPN_DASHLANE_HOTSPOTSHIELD_SUBDOMAIN}.${t.VPN_HOTSPOTSHIELD_DOMAIN}`),
        (t.VPN_CREDENTIAL_NAME = "VPN Hotspot Shield");
    },
    653041: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.activateVpnAccountHandler = void 0);
      const n = r(302749),
        a = r(194922),
        o = r(817842);
      t.activateVpnAccountHandler = async (e, t) => {
        const r = (0, o.CreateVpnService)({ generator: (0, a.openDashlaneVpnAPI)(e.storeService), logger: (0, n.makeVpnLogger)(e) }, e);
        await r.generateCredential(t.email);
      };
    },
    697657: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.clearVpnAccountErrorsHandler = void 0);
      const n = r(842238);
      t.clearVpnAccountErrorsHandler = (e) => (e.storeService.dispatch((0, n.vpnAccountNotFoundAction)()), Promise.resolve());
    },
    625838: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeVpnAccountActivationHandler = void 0);
      const n = r(842238);
      t.completeVpnAccountActivationHandler = (e) => (
        e.storeService.dispatch((0, n.vpnAccountActivationCompleteAction)()), Promise.resolve()
      );
    },
    507995: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vpnCredentialMatcher = void 0);
      const n = r(421178),
        a = r(290731);
      t.vpnCredentialMatcher = (e) => {
        const t = new n.ParsedURL(e.Url);
        return (
          e.Password &&
          e.Email &&
          t &&
          t.getRootDomain() === a.VPN_HOTSPOTSHIELD_DOMAIN &&
          t.getSubdomain() === a.VPN_DASHLANE_HOTSPOTSHIELD_SUBDOMAIN
        );
      };
    },
    283419: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vpnAccountStatus$ = void 0);
      const n = r(518948),
        a = r(903343),
        o = r(608522);
      t.vpnAccountStatus$ = function () {
        const e = o.vpnAccountStatusSelector;
        return (0, n.pipe)((0, a.map)(e), (0, a.distinctUntilChanged)());
      };
    },
    524827: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.VPNReducers = void 0);
      const n = r(453576),
        a = r(842238);
      t.VPNReducers = (e, t) => {
        switch (t.type) {
          case a.VPN_ACCOUNT_ACTIVATING:
            return { accountStatus: { status: n.VpnAccountStatusType.Activating } };
          case a.VPN_ACCOUNT_GENERATION_DONE:
            return { accountStatus: { status: n.VpnAccountStatusType.Ready } };
          case a.VPN_ACCOUNT_GENERATION_ERROR:
            return { accountStatus: { status: n.VpnAccountStatusType.Error, error: t.error } };
          case a.VPN_ACCOUNT_ACTIVATION_COMPLETE:
            return { accountStatus: { status: n.VpnAccountStatusType.Activated } };
          case a.VPN_ACCOUNT_NOT_FOUND:
            return { accountStatus: { status: n.VpnAccountStatusType.NotFound } };
          default:
            return e ?? { accountStatus: { status: n.VpnAccountStatusType.NotFound } };
        }
      };
    },
    608522: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.vpnCapabilitySettingSelector = t.getVpnCapabilitySetting = t.vpnAccountStatusSelector = t.vpnCredentialSelector = void 0);
      const n = r(453576),
        a = r(751319),
        o = r(432034),
        s = r(416593),
        i = r(507995),
        c = (e, t) => (t.CreationDatetime ?? 0) - (e.CreationDatetime ?? 0);
      var u;
      (t.vpnCredentialSelector = (e) =>
        (0, a.credentialsSelector)(e)
          .filter((e) => (0, i.vpnCredentialMatcher)(e))
          .sort(c)[0] ?? null),
        (t.vpnAccountStatusSelector = (0, o.createSelector)(
          (e) => {
            const { vpnData: t } = e.userSession;
            return t || { accountStatus: { status: n.VpnAccountStatusType.NotFound } };
          },
          t.vpnCredentialSelector,
          (e, t) => {
            switch (e.accountStatus.status) {
              case n.VpnAccountStatusType.Error:
                return { status: n.VpnAccountStatusType.Error, error: e.accountStatus.error };
              case n.VpnAccountStatusType.Activating:
                return { status: n.VpnAccountStatusType.Activating };
              case n.VpnAccountStatusType.Activated:
              case n.VpnAccountStatusType.NotFound:
                return t
                  ? { status: n.VpnAccountStatusType.Activated, email: t.Email, password: t.Password, credentialId: t.Id }
                  : { status: n.VpnAccountStatusType.NotFound };
              case n.VpnAccountStatusType.Ready:
                return t
                  ? { status: n.VpnAccountStatusType.Ready, email: t.Email, password: t.Password, credentialId: t.Id }
                  : { status: n.VpnAccountStatusType.NotFound };
            }
          }
        )),
        (function (e) {
          (e.IN_TEAM = "in_team"), (e.NOT_PREMIUM = "not_premium"), (e.NO_PAYMENT = "no_payment");
        })(u || (u = {}));
      const d = {
        in_team: n.VpnDisabledReason.InTeam,
        not_premium: n.VpnDisabledReason.NotPremium,
        no_payment: n.VpnDisabledReason.NoPayment
      };
      (t.getVpnCapabilitySetting = (e) => {
        const t = e?.capabilities?.secureWiFi;
        return t.enabled ? { hasVpnEnabled: !0 } : { hasVpnEnabled: !1, vpnDisabledReason: d[t.info.reason] || n.VpnDisabledReason.Other };
      }),
        (t.vpnCapabilitySettingSelector = (0, o.createSelector)(s.premiumStatusSelector, t.getVpnCapabilitySetting));
    },
    817842: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CreateVpnService = void 0);
      const n = r(188544),
        a = r(453576),
        o = r(709763),
        s = r(688779),
        i = r(392263),
        c = r(795623),
        u = r(670252),
        d = r(416593),
        l = r(842238),
        p = r(290731),
        m = r(529301),
        g = r(608522),
        S = ({ update: { title: e } }) => ({ Title: e }),
        y = ({ title: e }) => ({ Title: e });
      t.CreateVpnService = (e, t) => {
        const r = async (r) => {
          t.storeService.dispatch(
            (0, l.vpnAccountGenerationErrorAction)(
              r === m.VpnErrorType.AccountAlreadyExistError
                ? a.VpnAccountActivationErrorType.AccountAlreadyExistError
                : a.VpnAccountActivationErrorType.ServerError
            )
          ),
            await e.logger.logError(r ?? m.VpnErrorType.ServerError);
        };
        return {
          generateCredential: async (a) => {
            await e.logger.logStart(), t.storeService.dispatch((0, l.vpnAccountActivatingAction)());
            try {
              const i = (0, n.contactInfoSelector)(t.storeService.getState()),
                c = (0, d.userLoginSelector)(t.storeService.getState()),
                u = a ?? i.email ?? c,
                m = await e.generator.generateCredential(c, u);
              switch (m.success) {
                case !0:
                  await (async (e, r, n) => {
                    const a = (0, g.vpnCredentialSelector)(t.storeService.getState()),
                      i = { email: e, password: r, url: p.VPN_CREDENTIAL_URL, login: n, title: p.VPN_CREDENTIAL_NAME };
                    if (a) {
                      const e = { id: a.Id, update: { ...i } };
                      await (0, s.updateCredential)(
                        {
                          storeService: t.storeService,
                          sessionService: t.sessionService,
                          eventLoggerService: t.eventLoggerService,
                          applicationModulesAccess: t.applicationModulesAccess
                        },
                        e,
                        S
                      );
                    } else
                      await (0, o.createCredential)(
                        {
                          storeService: t.storeService,
                          sessionService: t.sessionService,
                          eventLoggerService: t.eventLoggerService,
                          applicationModulesAccess: t.applicationModulesAccess
                        },
                        i,
                        y
                      );
                  })(u, m.password, c),
                    t.storeService.dispatch((0, l.vpnAccountGenerationDoneAction)()),
                    await e.logger.logComplete();
                  break;
                case !1:
                  r(m.error);
              }
            } catch (e) {
              r();
              const t = "VPN",
                n = i.CarbonError.fromAnyError(e).addContextInfo(t, "saveCredential");
              (0, c.logError)({ tag: [t], message: `${n}`, details: { error: e } }), (0, u.sendExceptionLog)({ error: n });
            }
          }
        };
      };
    },
    771012: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.minAcceptablePasswordStrength = void 0),
        (t.minAcceptablePasswordStrength = 2);
    },
    846866: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.mockCarbon = void 0);
      const n = r(453576),
        a = r(518948),
        o = r(145619),
        s = r(846937),
        i = { userSession: { account: { login: "user" } } },
        c = () => {};
      t.mockCarbon = ({ mockApiEvents: e, stateFn: t = (e) => e, mockEvents: r }) => {
        const u = new s.CarbonLegacyInfrastructure();
        return (
          u.ready({
            apiEvents: Object.keys(n.CarbonApiConnector).reduce(
              (e, t) => {
                if (!(t in e)) {
                  const r = Object.assign(jest.fn(), { on: jest.fn() });
                  e[t] = r;
                }
                return e;
              },
              { ...e }
            ),
            leelooEventsCommands: Object.keys(n.CarbonLeelooConnector).reduce((e, t) => ((e[t] = jest.fn()), e), {}),
            leelooEvents: { ...o.LEGACY_LEELOO_EVENTS_TO_SUBSCRIBE.reduce((e, t) => ({ ...e, [t]: { on: jest.fn(() => c) } }), {}), ...r },
            state$: new a.BehaviorSubject(t(i))
          }),
          u
        );
      };
    },
    761657: function (e, t, r) {
      var n =
        (this && this.__decorate) ||
        function (e, t, r, n) {
          var a,
            o = arguments.length,
            s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
          else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
          return o > 3 && s && Object.defineProperty(t, r, s), s;
        };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonEventEmitter = void 0);
      const a = r(474887);
      let o = class extends a.ContextlessBaseEventEmitter {};
      (o = n([(0, a.Injectable)()], o)), (t.CarbonEventEmitter = o);
    },
    518955: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LEGACY_LEELOO_SLOTS_TO_IGNORE = void 0);
      const n = r(453576),
        a = r(419562),
        o = r(145619),
        s = r(846937);
      t.LEGACY_LEELOO_SLOTS_TO_IGNORE = (0, a.safeCast)(
        s.LEGACY_LEELOO_SLOTS_ALL.filter(
          (e) => !o.LEGACY_LEELOO_EVENTS_TO_SUBSCRIBE.includes(e) && !(0, a.safeCast)(n.LEGACY_CARBON_LEELOO_USED_COMMANDS).includes(e)
        )
      );
    },
    145619: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.relayLeelooLegacyEvents = t.LEGACY_LEELOO_EVENTS_TO_SUBSCRIBE = void 0),
        (t.LEGACY_LEELOO_EVENTS_TO_SUBSCRIBE = [
          "loginStatusChanged",
          "openSessionTokenSent",
          "openSessionAskMasterPassword",
          "openSessionDashlaneAuthenticator",
          "openSessionOTPSent",
          "openSessionOTPForNewDeviceRequired",
          "openSessionFailed",
          "openSessionSsoRedirectionToIdpRequired",
          "openSessionMasterPasswordLess"
        ]),
        (t.relayLeelooLegacyEvents = function (e, r) {
          const n = t.LEGACY_LEELOO_EVENTS_TO_SUBSCRIBE.map((t) =>
            e[t].on(async (e) => {
              await r.sendEvent("carbonLegacy", { eventData: e, eventName: t });
            })
          );
          return () => {
            n.forEach((e) => {
              e();
            });
          };
        });
    },
    846937: function (e, t, r) {
      var n =
        (this && this.__decorate) ||
        function (e, t, r, n) {
          var a,
            o = arguments.length,
            s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
          else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
          return o > 3 && s && Object.defineProperty(t, r, s), s;
        };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LEGACY_LEELOO_SLOTS_ALL = t.CarbonLegacyInfrastructure = void 0);
      const a = r(518948),
        o = r(453576),
        s = r(474887);
      let i = class {
        constructor() {
          (this.carbon$ = new a.ReplaySubject(1)), (this.carbonState$ = this.carbon$.pipe((0, a.switchMap)((e) => e.state$)));
        }
        ready(e) {
          this.carbon$.next(e);
        }
        getCarbon() {
          return (0, a.firstValueFrom)(this.carbon$);
        }
      };
      (i = n([(0, s.Injectable)()], i)),
        (t.CarbonLegacyInfrastructure = i),
        (t.LEGACY_LEELOO_SLOTS_ALL = Object.keys(o.CarbonLeelooConnector));
    },
    287026: function (e, t, r) {
      var n =
          (this && this.__decorate) ||
          function (e, t, r, n) {
            var a,
              o = arguments.length,
              s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
            else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
            return o > 3 && s && Object.defineProperty(t, r, s), s;
          },
        a =
          (this && this.__metadata) ||
          function (e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonLegacyBootstrap = void 0);
      const o = r(474887),
        s = r(890693),
        i = r(518948),
        c = r(761657),
        u = r(145619),
        d = r(846937),
        l = r(996160);
      let p = class {
        constructor(e, t, r, n) {
          (this.infra = t), (this.lifeCycle = r), (this.eventEmitter = n);
          const { setActiveUser: a } = e.getClient(s.requestContextApi).commands;
          this.setActiveUser = a;
        }
        onFrameworkInit() {
          this.lifeCycle.addExternalComponentReadyCondition(async () => await this.infra.getCarbon()),
            this.lifeCycle.addAppReadyHook(async () => {
              const e = this.infra.carbonState$
                  .pipe(
                    (0, i.map)((e) => ({ account: (0, l.getCarbonLegacyStateSelector)(e, "userSession.account") })),
                    (0, i.map)((e) => {
                      var t;
                      if (
                        (t = e) &&
                        "object" == typeof t &&
                        "account" in t &&
                        t.account &&
                        "object" == typeof t.account &&
                        "login" in t.account &&
                        t.account.login &&
                        "string" == typeof t.account.login &&
                        "isAuthenticated" in t.account &&
                        t.account.isAuthenticated
                      )
                        return e.account.login;
                    }),
                    (0, i.distinctUntilChanged)(),
                    (0, i.switchMap)(async (e) => {
                      await this.setActiveUser({ userName: e });
                    })
                  )
                  .subscribe(),
                t = await this.infra.getCarbon(),
                r = (0, u.relayLeelooLegacyEvents)(t.leelooEvents, this.eventEmitter);
              return () => {
                e.unsubscribe(), r();
              };
            });
        }
      };
      (p = n(
        [
          (0, o.FrameworkInit)(),
          a("design:paramtypes", [o.CqrsClient, d.CarbonLegacyInfrastructure, o.AppLifeCycle, c.CarbonEventEmitter])
        ],
        p
      )),
        (t.CarbonLegacyBootstrap = p);
    },
    649112: function (e, t, r) {
      var n =
        (this && this.__decorate) ||
        function (e, t, r, n) {
          var a,
            o = arguments.length,
            s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
          else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
          return o > 3 && s && Object.defineProperty(t, r, s), s;
        };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonLegacyModule = void 0);
      const a = r(453576),
        o = r(474887),
        s = r(592910),
        i = r(976559),
        c = r(761657),
        u = r(846937),
        d = r(287026),
        l = r(785642),
        p = r(650582),
        m = r(52948),
        g = r(617459),
        S = r(213950);
      let y = class {};
      (y = n(
        [
          (0, o.Module)({
            api: a.carbonLegacyApi,
            handlers: {
              commands: {
                carbon: s.CarbonCommandHandler,
                carbonLegacyLeeloo: i.CarbonLegacyLeelooCommandHandler,
                mitigationDeleteGrapheneUserData: m.DeleteGrapheneUserDataCommandHandler,
                ...(0, S.createHandlersConfigForConnectorCommands)(a.carbonCommandsSlots, S.CarbonApiCommandsHandler)
              },
              events: {},
              queries: {
                carbonState: l.CarbonGetStateQueryHandler,
                carbonStateList: p.CarbonStateListQueryHandler,
                ...(0, g.createHandlersConfigForCarbonApiQueries)(a.carbonQueriesSlots, a.carbonLiveQueriesSlots)
              }
            },
            configurations: { infrastructure: { token: u.CarbonLegacyInfrastructure } },
            onFrameworkInit: d.CarbonLegacyBootstrap,
            providers: [c.CarbonEventEmitter],
            requiredFeatureFlips: [
              "audit_logs_vault",
              "autofill_web_linkedWebsites",
              "autofill_web_linkedWebsites_dev",
              "breachesFetchWeb",
              "itadmin_SAEX_CryptoMigration_Phase1",
              "itadmin_SAEX_CryptoMigration_Phase2",
              "masterPasswordLeakCheckLog",
              "ptu_web_MPprotect_phase3",
              "SAEXAccountRecoveryv3",
              "sharing_web_invalidSignatureAutoRevoke_prod"
            ]
          })
        ],
        y
      )),
        (t.CarbonLegacyModule = y);
    },
    996160: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getCarbonLegacyStateSelector = void 0),
        (t.getCarbonLegacyStateSelector = (e, t) =>
          t
            ? t.split(".").reduce((e, t) => {
                return "object" == typeof (r = e) && r && t in r ? e[t] : e;
                var r;
              }, e)
            : e);
    },
    213950: function (e, t, r) {
      var n =
          (this && this.__decorate) ||
          function (e, t, r, n) {
            var a,
              o = arguments.length,
              s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
            else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
            return o > 3 && s && Object.defineProperty(t, r, s), s;
          },
        a =
          (this && this.__metadata) ||
          function (e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createHandlersConfigForConnectorCommands = t.CarbonApiCommandsHandler = void 0);
      const o = r(518948),
        s = r(453576),
        i = r(419562),
        c = r(474887),
        u = r(846937);
      let d = class {
        constructor(e) {
          this.infrastructure = e;
        }
        async execute(e, { name: t }) {
          const { apiEvents: r } = await (0, o.firstValueFrom)((0, o.from)(this.infrastructure.getCarbon())),
            { body: n } = e;
          return (0, o.firstValueFrom)((0, o.from)(r[t](n)).pipe((0, o.map)((e) => (0, i.success)(e))));
        }
      };
      (d = n([(0, c.Injectable)(), a("design:paramtypes", [u.CarbonLegacyInfrastructure])], d)),
        (t.CarbonApiCommandsHandler = d),
        Object.values(s.commandsFromCarbonAPI).forEach((e) => (0, c.CommandHandler)(e)(d)),
        (t.createHandlersConfigForConnectorCommands = function (e, t) {
          return Object.keys(e).reduce((e, r) => ({ ...e, [r]: t }), {});
        });
    },
    617459: function (e, t, r) {
      var n =
          (this && this.__decorate) ||
          function (e, t, r, n) {
            var a,
              o = arguments.length,
              s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
            else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
            return o > 3 && s && Object.defineProperty(t, r, s), s;
          },
        a =
          (this && this.__metadata) ||
          function (e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createHandlersConfigForCarbonApiQueries = t.CarbonApiQueriesHandler = void 0);
      const o = r(518948),
        s = r(71796),
        i = r(419562),
        c = r(474887),
        u = r(453576),
        d = r(846937);
      let l = class {
        constructor(e) {
          this.infrastructure = e;
        }
        execute(e, { name: t }) {
          const { carbonQueryName: r, carbonLiveQueryName: n } = this.getMaybeCarbonQueryNames(t);
          return (0, o.from)(this.infrastructure.getCarbon()).pipe(
            (0, o.concatMap)(({ apiEvents: t }) =>
              (0, o.concat)(
                (0, o.iif)(() => !!r && r in t, (0, o.from)(t[r](e.body)), o.EMPTY),
                (0, o.iif)(
                  () => !!n && n in t,
                  new o.Observable((r) => {
                    const a = t[n].on(void 0 === e.body ? s.DEFAULT_PARAM : e.body, (e) => r.next(e));
                    return () => {
                      a();
                    };
                  }),
                  o.EMPTY
                )
              )
            ),
            (0, o.map)((e) => (0, i.success)(e))
          );
        }
        getMaybeCarbonQueryNames(e) {
          let t, r;
          return (
            e.startsWith("live") ? ((r = e), (t = `get${e.substring("live".length)}`)) : (t = e),
            { carbonQueryName: t, carbonLiveQueryName: r }
          );
        }
      };
      (l = n([(0, c.Injectable)(), a("design:paramtypes", [d.CarbonLegacyInfrastructure])], l)),
        (t.CarbonApiQueriesHandler = l),
        Object.values(u.queriesFromCarbonAPI).forEach((e) => (0, c.QueryHandler)(e)(l)),
        (t.createHandlersConfigForCarbonApiQueries = function (e, t) {
          return [...Object.keys(e), ...Object.keys(t)].reduce((e, t) => ({ ...e, [t]: l }), {});
        });
    },
    592910: function (e, t, r) {
      var n =
          (this && this.__decorate) ||
          function (e, t, r, n) {
            var a,
              o = arguments.length,
              s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
            else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
            return o > 3 && s && Object.defineProperty(t, r, s), s;
          },
        a =
          (this && this.__metadata) ||
          function (e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonCommandHandler = void 0);
      const o = r(453576),
        s = r(474887),
        i = r(846937),
        c = r(761657),
        u = r(720211);
      let d = class {
        constructor(e, t, r) {
          (this.infra = e), (this.eventsEmitter = t), (this.context = r);
        }
        async execute({ body: { args: e, name: t, fireEvent: r } }) {
          const n = (await this.infra.getCarbon()).apiEvents[t],
            a = await n(...e),
            o = (0, u.carbonResultToModuleResult)(a);
          return r && (await this.eventsEmitter.sendEvent("carbonCommandResult", { result: a }, this.context)), o;
        }
      };
      (d = n(
        [
          (0, s.CommandHandler)(o.CarbonCommand),
          a("design:paramtypes", [i.CarbonLegacyInfrastructure, c.CarbonEventEmitter, s.RequestContext])
        ],
        d
      )),
        (t.CarbonCommandHandler = d);
    },
    976559: function (e, t, r) {
      var n =
          (this && this.__decorate) ||
          function (e, t, r, n) {
            var a,
              o = arguments.length,
              s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
            else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
            return o > 3 && s && Object.defineProperty(t, r, s), s;
          },
        a =
          (this && this.__metadata) ||
          function (e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonLegacyLeelooCommandHandler = void 0);
      const o = r(453576),
        s = r(474887),
        i = r(846937),
        c = r(761657),
        u = r(720211);
      let d = class {
        constructor(e, t) {
          (this.infra = e), (this.eventsEmitter = t);
        }
        async execute({ body: { arg: e, name: t, fireEvent: r } }) {
          const n = (await this.infra.getCarbon()).leelooEventsCommands[t],
            a = await n(...e),
            o = (0, u.carbonResultToModuleResult)(a);
          return r ? (await this.eventsEmitter.sendEvent("carbonCommandResult", { result: a }), o) : o;
        }
      };
      (d = n(
        [(0, s.CommandHandler)(o.CarbonLegacyLeelooCommand), a("design:paramtypes", [i.CarbonLegacyInfrastructure, c.CarbonEventEmitter])],
        d
      )),
        (t.CarbonLegacyLeelooCommandHandler = d);
    },
    785642: function (e, t, r) {
      var n =
          (this && this.__decorate) ||
          function (e, t, r, n) {
            var a,
              o = arguments.length,
              s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
            else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
            return o > 3 && s && Object.defineProperty(t, r, s), s;
          },
        a =
          (this && this.__metadata) ||
          function (e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonGetStateQueryHandler = void 0);
      const o = r(453576),
        s = r(474887),
        i = r(419562),
        c = r(518948),
        u = r(846937),
        d = r(996160);
      let l = class {
        constructor(e) {
          this.infrastructure = e;
        }
        execute({ body: { path: e } }) {
          const { carbonState$: t } = this.infrastructure;
          return t.pipe(
            (0, c.map)((t) => (0, d.getCarbonLegacyStateSelector)(t, e)),
            (0, c.distinctUntilChanged)(),
            (0, c.map)((e) => (0, i.success)(e))
          );
        }
      };
      (l = n([(0, s.QueryHandler)(o.CarbonStateQuery), a("design:paramtypes", [u.CarbonLegacyInfrastructure])], l)),
        (t.CarbonGetStateQueryHandler = l);
    },
    650582: function (e, t, r) {
      var n =
          (this && this.__decorate) ||
          function (e, t, r, n) {
            var a,
              o = arguments.length,
              s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
            else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
            return o > 3 && s && Object.defineProperty(t, r, s), s;
          },
        a =
          (this && this.__metadata) ||
          function (e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonStateListQueryHandler = void 0);
      const o = r(453576),
        s = r(474887),
        i = r(419562),
        c = r(518948),
        u = r(846937),
        d = r(996160);
      let l = class {
        constructor(e) {
          this.infrastructure = e;
        }
        execute({ body: { paths: e } }) {
          const { carbonState$: t } = this.infrastructure;
          return t.pipe((0, c.map)((t) => (0, i.success)(e.map((e) => (0, d.getCarbonLegacyStateSelector)(t, e)))));
        }
      };
      (l = n([(0, s.QueryHandler)(o.CarbonStateListQuery), a("design:paramtypes", [u.CarbonLegacyInfrastructure])], l)),
        (t.CarbonStateListQueryHandler = l);
    },
    52948: function (e, t, r) {
      var n =
          (this && this.__decorate) ||
          function (e, t, r, n) {
            var a,
              o = arguments.length,
              s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
            else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
            return o > 3 && s && Object.defineProperty(t, r, s), s;
          },
        a =
          (this && this.__metadata) ||
          function (e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DeleteGrapheneUserDataCommandHandler = void 0);
      const o = r(453576),
        s = r(474887),
        i = r(419562),
        c = r(761657);
      let u = class {
        constructor(e, t) {
          (this.infra = e), (this.emitter = t);
        }
        async execute({ body: { login: e } }) {
          await this.emitter.sendEvent("CarbonLegacyDeviceRemotelyDeleted", { user: e });
          const t = await this.infra.getAllKeys(),
            r = `.${e}`,
            n = t.filter((e) => e.endsWith(r)).map(async (e) => await this.infra.remove(e));
          return await Promise.allSettled(n), (0, i.success)(null);
        }
      };
      (u = n(
        [
          (0, s.CommandHandler)(o.MitigationDeleteGrapheneUserDataCommand),
          a("design:paramtypes", [s.KeyValueStorageInfrastructure, c.CarbonEventEmitter])
        ],
        u
      )),
        (t.DeleteGrapheneUserDataCommandHandler = u);
    },
    720211: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonResultToModuleResult = void 0);
      const n = r(419562);
      t.carbonResultToModuleResult = (e) =>
        ((e) => !(!e || "object" != typeof e) && "success" in e && !1 === e.success)(e)
          ? (0, n.failure)({ tag: "", error: e.error })
          : (0, n.success)({ id: "", carbonResult: e });
    },
    871439: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LEGACY_LEELOO_SLOTS_TO_IGNORE = t.Mocks = t.CarbonLegacyInfrastructure = t.CarbonLegacyModule = void 0);
      var n = r(649112);
      Object.defineProperty(t, "CarbonLegacyModule", {
        enumerable: !0,
        get: function () {
          return n.CarbonLegacyModule;
        }
      });
      var a = r(846937);
      Object.defineProperty(t, "CarbonLegacyInfrastructure", {
        enumerable: !0,
        get: function () {
          return a.CarbonLegacyInfrastructure;
        }
      }),
        (t.Mocks = r(846866));
      var o = r(518955);
      Object.defineProperty(t, "LEGACY_LEELOO_SLOTS_TO_IGNORE", {
        enumerable: !0,
        get: function () {
          return o.LEGACY_LEELOO_SLOTS_TO_IGNORE;
        }
      });
    },
    348749: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setConfig = t.config = t.DashlaneAPISchemesNames = void 0);
      const n = r(604407);
      var a;
      !(function (e) {
        (e.DASHLANE_API_HOST_WITH_SCHEME = "DASHLANE_API_HOST_WITH_SCHEME"),
          (e.DASHLANE_WS_HOST_WITH_SCHEME = "DASHLANE_WS_HOST_WITH_SCHEME");
      })((a = t.DashlaneAPISchemesNames || (t.DashlaneAPISchemesNames = {})));
      const o = {
        LOG_LEVEL: n.Silent,
        LOG_TAGS: [],
        DASHLANE_API_HOST_WITH_SCHEME: "https://api.dashlane.com",
        DASHLANE_WS_HOST_WITH_SCHEME: "https://ws1.dashlane.com",
        DASHLANE_STYX_HOST_WITH_SCHEME: "https://styx.data.dashlane.com",
        CODE_NAME: null,
        MANIFEST_VERSION: null
      };
      t.config = o;
      const s = (e) => (
        Object.values(a).forEach((t) => {
          t in e && !e[t] && (e[t] = o[t]);
        }),
        e
      );
      t.setConfig = (e) => {
        t.config = { ...t.config, ...s(e) };
      };
    },
    592912: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createAccount =
          t.getCreateAccountRequest =
          t.defaultCreateAccountRequestParams =
          t.AUTOMATION_MP_GRACE_PERIOD =
          t.DEFAULT_E2E_ACCOUNT_PASSWORD =
            void 0);
      const n = r(278320),
        a = r(178955),
        o = r(556292);
      function s(e, r, n) {
        return { login: e, anonymousUserId: n, password: r, ...t.defaultCreateAccountRequestParams };
      }
      (t.DEFAULT_E2E_ACCOUNT_PASSWORD = "Azerty12"),
        (t.AUTOMATION_MP_GRACE_PERIOD = 5e3),
        (t.defaultCreateAccountRequestParams = { format: "US", language: "en", subscribe: !1, deviceName: "INTEGRATION_TEST" }),
        (t.getCreateAccountRequest = s),
        (t.createAccount = async function (e, r, i) {
          const c = r ?? {},
            u = { ...s((0, a.getLogin)(), t.DEFAULT_E2E_ACCOUNT_PASSWORD, (0, n.generateItemUuid)()), ...c },
            d = {
              createAccountResult: await e.createAccountStep1(u),
              options: { flowIndicator: "webAccount" },
              isStandAlone: !0,
              ...(i ?? {})
            },
            l = await e.createAccountStep2(d);
          return await (0, o.sync)(e), l;
        });
    },
    178955: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getLogin = t.defaultTestAccountOptions = void 0);
      const n = r(235992),
        a = r(655995);
      (t.defaultTestAccountOptions = {
        abTests: {},
        automationAccount: !1,
        featureFlips: [],
        throttling: a.TestAccountThrottlingBehaviour.Unthrottled,
        type: a.TestAccountType.FreePremiumTrial
      }),
        (t.getLogin = function (e = t.defaultTestAccountOptions) {
          const {
              abTests: r = t.defaultTestAccountOptions.abTests,
              featureFlips: o = t.defaultTestAccountOptions.featureFlips,
              throttling: s = t.defaultTestAccountOptions.throttling,
              type: i = t.defaultTestAccountOptions.type,
              automationAccount: c = t.defaultTestAccountOptions.automationAccount
            } = e,
            u = (0, n.v4)(),
            d = u.substr(0, u.indexOf("-")),
            l = (function (e) {
              switch (e) {
                case a.TestAccountThrottlingBehaviour.Unthrottled:
                  return "ut_";
                case a.TestAccountThrottlingBehaviour.Normal:
                default:
                  return "";
              }
            })(s),
            p = (function (e) {
              switch (e) {
                case a.TestAccountType.Free:
                  return "freefree_";
                case a.TestAccountType.PremiumPaid:
                  return "premiumpaid_";
                case a.TestAccountType.Family:
                  return "family_";
                case a.TestAccountType.FreePremiumTrial:
                default:
                  return "";
              }
            })(i),
            m =
              !1 === (g = r)
                ? "noabtest_"
                : Object.keys(g).reduce((e, t) => {
                    const r = `${t}_${g[t]}_`;
                    return e.concat(r);
                  }, "");
          var g;
          const S = (function (e) {
            return e.reduce((e, t) => {
              const r = `${t}_`;
              return e.concat(r);
            }, "");
          })(o);
          return (
            "kw_test_" +
            (function (e) {
              return e ? "auto_" : "";
            })(c) +
            l +
            p +
            "carbon_e2e_" +
            m +
            S +
            d +
            "@mailinator.com"
          ).toLocaleLowerCase();
        });
    },
    655995: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TestAccountThrottlingBehaviour = t.TestAccountType = void 0),
        (function (e) {
          (e[(e.Free = 0)] = "Free"),
            (e[(e.FreePremiumTrial = 1)] = "FreePremiumTrial"),
            (e[(e.Legacy = 2)] = "Legacy"),
            (e[(e.PremiumPaid = 3)] = "PremiumPaid"),
            (e[(e.PremiumPlus = 4)] = "PremiumPlus"),
            (e[(e.Family = 5)] = "Family");
        })(t.TestAccountType || (t.TestAccountType = {})),
        (function (e) {
          (e[(e.Normal = 0)] = "Normal"), (e[(e.Unthrottled = 1)] = "Unthrottled");
        })(t.TestAccountThrottlingBehaviour || (t.TestAccountThrottlingBehaviour = {}));
    },
    370420: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var a = Object.getOwnPropertyDescriptor(t, r);
                (a && !("get" in a ? !t.__esModule : a.writable || a.configurable)) ||
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, a);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), a(r(592912), t), a(r(178955), t), a(r(655995), t);
    },
    576506: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e = 2e3) {
          return new Promise((t) => setTimeout(t, e));
        });
    },
    871602: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getServiceProviderToken = void 0);
      const n = r(643739),
        a = r(46298),
        o = r(297343),
        s = r(25576);
      t.getServiceProviderToken = async (e, t) => {
        const { storeService: r } = e;
        !(function (e, t) {
          e.dispatch(
            (0, n.deviceRegistered)(
              (0, n.makeDeviceRegistrationKeys)(t.deviceAccessKey, t.deviceSecretKey),
              s.PersistData.PERSIST_DATA_YES,
              t.login
            )
          );
        })(r, t);
        const { login: i, teamUuid: c } = t,
          u = `${c}%${t.userServiceProviderKey}`,
          d = await (0, o.getUserSSOInfo)(r, { login: i, teamUuid: c, userServiceProviderKey: u });
        if ((0, a.isApiError)(d)) throw new Error(`Error: ${d.code}`);
        return d;
      };
    },
    732006: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.forceBreachRefreshHandler = void 0);
      const n = r(495303);
      t.forceBreachRefreshHandler = async ({ applicationModulesAccess: e, storeService: t, wsService: r }) => {
        const a = (0, n.getInstance)(e, t, r);
        await a.refresh({ forceRefresh: !0 });
      };
    },
    79734: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createPublicBreachHelper =
          t.addPrivateBreachHelper =
          t.createOrUpdateDarkWebBreachHelper =
          t.saveBankAccount =
          t.updateCredential =
          t.removeCredential =
          t.getNotes =
          t.getCredentials =
          t.saveCredential =
            void 0);
      const n = r(235992),
        a = r(453576),
        o = r(46298),
        s = r(377074),
        i = r(631197),
        c = r(472579),
        u = r(576506),
        d = r(370420);
      async function l(e, t, r = {}) {
        const n = (function ({ title: e, email: t, password: r, url: n, ...o }) {
            return {
              kwType: "KWAuthentifiant",
              origin: a.SaveOrigin.MANUAL,
              content: {
                category: "",
                email: t,
                login: t,
                onlyForThisSubdomain: !1,
                password: r,
                protectWithMasterPassword: !1,
                secondaryLogin: "",
                url: n ?? "",
                title: e,
                autoLogin: !1,
                note: "",
                spaceId: "",
                linkedWebsites: { addedByDashlane: [], addedByUser: [] },
                ...o
              }
            };
          })({ title: "title", email: "email@domain.com", password: d.DEFAULT_E2E_ACCOUNT_PASSWORD, ...r }),
          o = t ?? n;
        await e.savePersonalDataItem(o), await (0, u.default)(100);
      }
      (t.saveCredential = l),
        (t.getCredentials = async function (e) {
          return (await e.getDataModel(null)).credentials;
        }),
        (t.getNotes = async function (e) {
          return (await e.getDataModel(null)).notes;
        }),
        (t.removeCredential = async function (e, t) {
          return await e.removePersonalDataItem({ id: t });
        }),
        (t.updateCredential = function (e, { Id: t, Title: r, Email: n, Url: a, Password: o }, s) {
          return l(e, void 0, { id: t, title: r, email: n, password: o, url: a, ...s });
        }),
        (t.saveBankAccount = async function (e, t, r = {}) {
          const n = {
              kwType: "KWBankStatement",
              origin: a.SaveOrigin.MANUAL,
              content: { name: "name", owner: "owner", IBAN: "", BIC: "", bank: "", ...r, ...t }
            },
            o = t ?? n;
          await e.savePersonalDataItem(o), await (0, u.default)(100);
        }),
        (t.createOrUpdateDarkWebBreachHelper = async ({ storeService: e }, t) => {
          t.databreach.uuid || (t.databreach.uuid = (0, n.v4)());
          const r = await (0, s.createOrUpdateDarkWebBreach)(e, t);
          if ((0, o.isApiError)(r)) throw new Error(`Error when creating / updating test data breach: ${r.message}`);
          return t.databreach.uuid;
        }),
        (t.addPrivateBreachHelper = async ({ storeService: e }, t) => await (0, i.addPrivateBreach)(e, t)),
        (t.createPublicBreachHelper = async ({ storeService: e }, t) => {
          const r = await (0, c.createPublicBreach)(e, t);
          if ((0, o.isApiError)(r)) throw new Error(`Error when creating test breach: ${r.code}, ${r.message}`);
          return r;
        });
    },
    556292: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sync = t.waitForSync = void 0);
      const n = r(576506),
        a = 3e4;
      function o(e, t = { timeout: a }) {
        let r, n;
        const o = setTimeout(() => {
            n(new Error("Sync timed out"));
          }, t.timeout),
          s = new Promise((e, t) => {
            (r = e), (n = t);
          }),
          i = e.sessionSyncStatus.on(({ status: e }) => {
            "syncing" !== e && (clearTimeout(o), i(), "success" === e ? r() : "error" === e && n(new Error("Sync failed")));
          });
        return s;
      }
      (t.waitForSync = o),
        (t.sync = async function (e) {
          await e.sessionForceSync({}), await o(e), await (0, n.default)();
        });
    },
    825601: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var a = Object.getOwnPropertyDescriptor(t, r);
                (a && !("get" in a ? !t.__esModule : a.writable || a.configurable)) ||
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, a);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DashlaneAPISchemesNames =
          t.HttpErrorCode =
          t.init =
          t.ApplicationBuildType =
          t.CarbonStorage =
          t.decipherDatabaseRules =
          t.interfaces =
            void 0),
        (t.interfaces = r(92231));
      var o = r(205851);
      Object.defineProperty(t, "decipherDatabaseRules", {
        enumerable: !0,
        get: function () {
          return o.decipherDatabaseRules;
        }
      }),
        a(r(804673), t);
      var s = r(118539);
      Object.defineProperty(t, "CarbonStorage", {
        enumerable: !0,
        get: function () {
          return s.CarbonLocalStorage;
        }
      });
      var i = r(859600);
      Object.defineProperty(t, "ApplicationBuildType", {
        enumerable: !0,
        get: function () {
          return i.ApplicationBuildType;
        }
      });
      var c = r(309265);
      Object.defineProperty(t, "init", {
        enumerable: !0,
        get: function () {
          return c.init;
        }
      });
      var u = r(314656);
      Object.defineProperty(t, "HttpErrorCode", {
        enumerable: !0,
        get: function () {
          return u.HttpErrorCode;
        }
      });
      var d = r(348749);
      Object.defineProperty(t, "DashlaneAPISchemesNames", {
        enumerable: !0,
        get: function () {
          return d.DashlaneAPISchemesNames;
        }
      }),
        a(r(871439), t);
    },
    309265: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.init = void 0);
      const n = r(348749),
        a = r(795623),
        o = r(17338),
        s = r(974318);
      t.init = async function (e) {
        e.config && (0, n.setConfig)(e.config);
        const t = await (0, s.initCarbon)(e),
          r = (0, o.getCoreServices)(t);
        return (0, a.logInfo)({ message: "init carbon done" }), r;
      };
    },
    895343: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DEFAULT_USER_CAPABILITIES =
          t.makePremiumStatusTrial =
          t.makePremiumStatusWithPreviousPlan =
          t.makePremiumStatusWithFamilyMembership =
          t.makePremiumStatusWithBillingInfo =
          t.makePremiumStatusWithSpaces =
          t.makePremiumStatusBillingInfo =
          t.makeSpace =
          t.makeSpaceData =
          t.makePremiumStatusSpace =
            void 0);
      const n = r(453576);
      function a(e) {
        return {
          associatedEmail: "kw_test_a13e5r4er357er@mailinator.com",
          billingAdmins: [{ login: "kw_test_a13e5r4er357er@mailinator.com" }],
          color: "#adadad",
          companyName: "KWTEAM",
          info: { setting1: !0 },
          invitationDate: 987654321,
          isBillingAdmin: !0,
          isSSOUser: !1,
          isTeamAdmin: !0,
          joinDate: 123456789,
          letter: "K",
          membersNumber: 150,
          planType: "awesomeType",
          revokeDate: 6872476587,
          status: n.SpaceStatus.Accepted,
          teamAdmins: [{ login: "kw_test_a13e5r4er357er@mailinator.com" }],
          teamId: "123456",
          teamName: "KWTEAM",
          tier: n.SpaceTier.Legacy,
          shouldDelete: !1,
          ...e
        };
      }
      function o(e) {
        return {
          teamId: "123456",
          details: {
            associatedEmail: "kw_test_a13e5r4er357er@mailinator.com",
            billingAdmins: [{ login: "kw_test_a13e5r4er357er@mailinator.com" }],
            color: "#adadad",
            companyName: "KWTEAM",
            info: { setting1: !0 },
            invitationDate: 987654321,
            isBillingAdmin: !0,
            isSSOUser: !1,
            isTeamAdmin: !0,
            joinDate: 123456789,
            letter: "K",
            membersNumber: 150,
            planType: "awesomeType",
            revokeDate: 6872476587,
            status: n.SpaceStatus.Accepted,
            teamAdmins: [{ login: "kw_test_a13e5r4er357er@mailinator.com" }],
            teamId: "123456",
            teamName: "KWTEAM",
            tier: n.SpaceTier.Legacy,
            shouldDelete: !1
          },
          ...e
        };
      }
      (t.makePremiumStatusSpace = a),
        (t.makeSpaceData = function (e) {
          return { spaces: e || [o()] };
        }),
        (t.makeSpace = o),
        (t.makePremiumStatusBillingInfo = function () {
          return { cardExpirationYear: 2157, cardExpirationMonth: 12, cardLast4Digits: 713, cardType: "VISA" };
        }),
        (t.makePremiumStatusWithSpaces = function (e) {
          return {
            statusCode: n.PremiumStatusCode.NEW_USER,
            billingInformation: void 0,
            planName: "stripe",
            planType: "stripe",
            endDate: 1478536851,
            autoRenewal: void 0,
            spaces: e || [a()],
            capabilities: void 0
          };
        }),
        (t.makePremiumStatusWithBillingInfo = function () {
          return {
            statusCode: n.PremiumStatusCode.NEW_USER,
            billingInformation: { cardExpirationYear: 2157, cardExpirationMonth: 12, cardLast4Digits: 713, cardType: "VISA" },
            planName: "stripe",
            planType: "stripe",
            endDate: 1478536851,
            autoRenewal: void 0,
            spaces: void 0,
            capabilities: void 0
          };
        }),
        (t.makePremiumStatusWithFamilyMembership = function () {
          return {
            statusCode: n.PremiumStatusCode.NEW_USER,
            billingInformation: void 0,
            planName: "stripe",
            planType: "stripe",
            endDate: 1478536851,
            autoRenewal: void 0,
            spaces: void 0,
            capabilities: void 0,
            familyMembership: { familyId: 1, isAdmin: !0, name: "Family" }
          };
        }),
        (t.makePremiumStatusWithPreviousPlan = function () {
          return {
            statusCode: n.PremiumStatusCode.NEW_USER,
            billingInformation: void 0,
            planName: "stripe",
            planType: "stripe",
            endDate: 1478536851,
            autoRenewal: void 0,
            spaces: void 0,
            capabilities: void 0,
            previousPlan: {
              planId: "stripeAnnualROWWebsite",
              endDate: 1478536851,
              startDate: 1478536851,
              statusCode: 2,
              planFeature: "premiumplus"
            }
          };
        }),
        (t.makePremiumStatusTrial = function () {
          return {
            statusCode: n.PremiumStatusCode.NEW_USER,
            billingInformation: void 0,
            planName: "stripe",
            planType: "stripe",
            endDate: 1478536851,
            autoRenewal: !1,
            spaces: void 0,
            capabilities: void 0
          };
        }),
        (t.DEFAULT_USER_CAPABILITIES = [
          { capability: "identityTheftProtection", enabled: !0, info: {} },
          { capability: "passwordsLimit", enabled: !0, info: { limit: 50 } },
          { capability: "secureFiles", enabled: !0, info: { quota: { max: 123, remaining: 1 }, maxFileSize: 52428800 } },
          { capability: "secureWiFi", enabled: !0, info: {} },
          { capability: "securityBreach", enabled: !0, info: {} },
          { capability: "sharingLimit", enabled: !1 },
          { capability: "creditMonitoring", enabled: !1 },
          { capability: "dataLeak", enabled: !1 },
          { capability: "devicesLimit", enabled: !1 },
          { capability: "identityRestoration", enabled: !1 },
          { capability: "multipleAccounts", enabled: !1 },
          { capability: "secureNotes", enabled: !1 },
          { capability: "sync", enabled: !1 },
          { capability: "yubikey", enabled: !1 }
        ]);
    }
  }
]);
