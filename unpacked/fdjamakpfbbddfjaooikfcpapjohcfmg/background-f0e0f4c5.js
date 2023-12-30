"use strict";
(self.webpackChunk_dashlane_amphora = self.webpackChunk_dashlane_amphora || []).push([
  [280],
  {
    55328: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.fetchABTestingVersionDetails = void 0);
      const a = r(95623),
        o = r(50884);
      t.fetchABTestingVersionDetails = (e, t) => {
        const r = e.storeService,
          n = { capacity: "", language: r.getPlatform().info.lang, platform: "real_website" };
        return (
          t?.abTestForcedVersion && (n.forceVersion3 = t.abTestForcedVersion),
          e.wsService.premium
            .getABTestingVersionDetails(n)
            .then((e) => {
              r.dispatch((0, o.saveABTestingInfo)(e));
            })
            .catch((e) => {
              a.default.error("Carbon init - Error while calling getABTestingVersionDetails: ", e);
            })
        );
      };
    },
    35673: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(92082),
        o = r(72525),
        n = r(62627);
      t.config = {
        commands: { participateToUserABTest: { handler: o.participateToUserABTest } },
        queries: { getUserABTestVariant: { selector: n.userABTestVariantSelector } },
        liveQueries: { liveUserABTestVariant: { operator: a.userABTestVariant$ } }
      };
    },
    50884: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.saveABTestingInfo = t.SAVE_ABTESTING_INFO = void 0),
        (t.SAVE_ABTESTING_INFO = "SAVE_ABTESTING_INFO");
      t.saveABTestingInfo = (e) => ({ type: t.SAVE_ABTESTING_INFO, data: Object.assign({}, e) });
    },
    34007: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyABTesting = void 0);
      const a = r(50884);
      function o() {
        return { details: [], version: "control2016_all", success: null };
      }
      (t.default = (e = { details: [], version: "control2016_all", success: null }, t) =>
        t.type === a.SAVE_ABTESTING_INFO ? Object.assign({}, e, { ...t.data }) : e),
        (t.getEmptyABTesting = o);
    },
    80755: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(35673);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    8481: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.refreshUserABTest = void 0);
      const a = r(32626),
        o = r(41075),
        n = r(70252),
        i = r(30913),
        s = r(46298),
        c = r(43416),
        l = r(9272),
        d = r(25899);
      t.refreshUserABTest = async function (e, t, r) {
        try {
          const a = (0, i.abTestsNamesSelector)(e.getState());
          if (0 === a.length) return;
          const n = await (0, o.getAndEvaluateForUser)(e, r, { abtests: a });
          if ((0, s.isApiError)(n)) throw new Error(`Failed to refresh user AB tests: ${n}`);
          const u = (0, l.mapGetUserABServerResponse)(a, n.abtests);
          e.dispatch((0, c.refreshedUserABTests)(u)), (0, d.persistUserTests)(t, e);
        } catch (e) {
          const t = new Error(`[ABTests] - refreshUserABTest: ${e}`);
          (0, n.sendExceptionLog)({ error: t, code: a.ExceptionCriticality.WARNING });
        }
      };
    },
    21587: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(80755);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    92082: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.userABTestVariant$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(62627);
      t.userABTestVariant$ = (e) =>
        (0, a.pipe)(
          (0, o.map)((t) => (0, n.userABTestVariantSelector)(t, e)),
          (0, o.distinctUntilChanged)()
        );
    },
    9272: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mapGetUserABServerResponse = t.NOT_PARTICIPATING = void 0),
        (t.NOT_PARTICIPATING = "not-participating"),
        (t.mapGetUserABServerResponse = function (e, r) {
          return e.reduce((e, a) => {
            const o = r.find((e) => a === e.name);
            return (e[a] = o ? { variant: o.variant, version: o.abtestVersion } : { variant: t.NOT_PARTICIPATING }), e;
          }, {});
        });
    },
    72525: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.participateToUserABTest = void 0);
      const a = r(62627),
        o = r(9272),
        n = r(25899);
      t.participateToUserABTest = async function (e, t) {
        const r = (0, a.userABTestSelector)(e.storeService.getState(), t);
        r && o.NOT_PARTICIPATING !== r.variant && (0, n.persistUserTests)(e.localStorageService.getInstance(), e.storeService);
      };
    },
    25899: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.persistUserTests = void 0);
      const a = r(25576),
        o = r(62627);
      t.persistUserTests = async function (e, t) {
        if (t.getAccountInfo().persistData === a.PersistData.PERSIST_DATA_NO) return Promise.resolve();
        e && (await e.storeUserABTests((0, o.userABTestsSelector)(t.getState())));
      };
    },
    52346: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const a = r(18216),
        o = r(55328),
        n = r(9486);
      t.setupSubscriptions = function (e, t) {
        e.appInitialized.on(async (e) => {
          if (e.initMode === a.InitMode.FirstInit) {
            await (0, o.fetchABTestingVersionDetails)(t, { abTestForcedVersion: e.abTestForcedVersion });
            const r = t.storeService.getABTesting();
            (0, n.triggerABTestingChanged)(r);
          }
        });
      };
    },
    39811: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(95667),
        o = r(88544),
        n = r(71594);
      t.config = {
        commands: { editContactInfo: { handler: a.editContactInfoHandler } },
        queries: { getContactInfo: { selector: o.contactInfoSelector } },
        liveQueries: { liveContactInfo: { operator: n.contactInfo$ } }
      };
    },
    1463: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(39811);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    66650: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.editContactInfoHandler = void 0);
      const a = r(32626),
        o = r(46298),
        n = r(16593),
        i = r(5464),
        s = {
          contact_email_required: a.EditContactInfoErrorCode.EMPTY_EMAIL,
          contact_phone_required: a.EditContactInfoErrorCode.UNKNOWN_ERROR,
          invalid_contact_email: a.EditContactInfoErrorCode.INVALID_EMAIL
        };
      t.editContactInfoHandler = async function (e, t) {
        const { storeService: r, wsService: c, sessionService: l } = e,
          d = r.getState(),
          u = (0, n.userLoginSelector)(d);
        if (!r.isAuthenticated()) return { success: !1, error: { code: a.EditContactInfoErrorCode.UNKNOWN_ERROR } };
        try {
          const e = await (0, o.updateContactInfo)(r, u, t);
          return (0, o.isApiError)(e)
            ? { success: !1, error: { code: s[e.code] ?? a.EditContactInfoErrorCode.UNKNOWN_ERROR } }
            : (await (0, i.getAndTriggerRefreshAccountInfo)(r, l, c), { success: !0 });
        } catch (e) {
          return { success: !1, error: { code: a.EditContactInfoErrorCode.UNKNOWN_ERROR } };
        }
      };
    },
    95667: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(66650), t);
    },
    64369: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(1463);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    71594: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.contactInfo$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(88544);
      t.contactInfo$ = () => (0, a.pipe)((0, o.map)(n.contactInfoSelector), (0, o.distinctUntilChanged)());
    },
    88544: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.contactInfoSelector = void 0);
      t.contactInfoSelector = (e) => e.userSession.accountContactInfo;
    },
    71703: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeAccountCreationController = t.encryptSettings = t.checkLogin = void 0);
      const a = r(32626),
        o = r(70252),
        n = r(32074),
        i = r(39362),
        s = r(36513),
        c = r(43461),
        l = r(95551),
        d = r(58639),
        u = r(7624),
        p = r(16356),
        S = r(61259),
        m = r(95623),
        g = r(65675),
        y = r(16038),
        h = r(46298);
      async function v(e, t) {
        m.default.log("AccountCreationController.checkLogin");
        const r = "SSO_BLOCKED",
          o = await (0, h.requestAccountCreation)(e, { login: t });
        if ((0, h.isApiError)(o)) {
          if (o.code === r) return { accountCreationCode: a.AccountCreationCode.USER_DOESNT_EXIST_SSO_NON_PROVISIONED };
          throw new Error(`[AccountCreationController] - checkLogin: ${o.message} (${o.code})`);
        }
        if (o.ssoServiceProviderUrl)
          return (
            e.dispatch((0, u.storeSSOSettings)({ serviceProviderUrl: o.ssoServiceProviderUrl, isNitroProvider: o.ssoIsNitroProvider })),
            o.ssoIsNitroProvider
              ? {
                  accountCreationCode: a.AccountCreationCode.USER_NITRO_SSO_PROVISIONED,
                  isUserProposed: o.isProposed,
                  isUserAccepted: o.isAccepted
                }
              : ((0, S.triggerServiceProviderUrlRedirect)(e.getState(), t),
                {
                  accountCreationCode: a.AccountCreationCode.USER_SSO_PROVISIONED,
                  isUserProposed: o.isProposed,
                  isUserAccepted: o.isAccepted
                })
          );
        switch (o.exists) {
          case h.AccountExistsStatus.AccountExists:
            return { accountCreationCode: a.AccountCreationCode.USER_EXISTS, isUserProposed: o.isProposed, isUserAccepted: o.isAccepted };
          case h.AccountExistsStatus.AccountDoesntExistInvalid:
            return {
              accountCreationCode: a.AccountCreationCode.USER_DOESNT_EXIST_INVALID_MX,
              isUserProposed: o.isProposed,
              isUserAccepted: o.isAccepted
            };
          case h.AccountExistsStatus.AccountDoesntExistUnlikely:
            return {
              accountCreationCode: a.AccountCreationCode.USER_DOESNT_EXIST_UNLIKELY_MX,
              isUserProposed: o.isProposed,
              isUserAccepted: o.isAccepted
            };
          case h.AccountExistsStatus.AccountDoesntExist:
          default:
            return {
              accountCreationCode: a.AccountCreationCode.USER_DOESNT_EXIST,
              isUserProposed: o.isProposed,
              isUserAccepted: o.isAccepted
            };
        }
      }
      function f(e, t, r) {
        return Promise.resolve()
          .then(() => {
            const a = e.getStore(),
              o = n.encryptSettings(e, t, r);
            a.dispatch((0, c.saveAccountSettings)(o));
            const i = (0, s.makeCryptoService)(),
              u = {
                cryptoConfig: (0, g.parsePayload)(o.personalSettings.CryptoUserPayload).cryptoConfig,
                forceSalt: (0, y.base64ToBuffer)(o.personalSettings.CryptoFixedSalt)
              },
              p = { promise: (0, l.generateRsaKeys)(t, i, u) };
            e.dispatch((0, c.saveAccountKeys)(p));
            const S = { encryptSettingsRequest: r, valid: !0 };
            return d.sendEncryptSettingsResult(S), S;
          })
          .catch((e) => {
            const t = new Error(`[AccountCreation] - encryptSettings: ${e}`);
            throw (m.default.error(t), (0, o.sendExceptionLog)({ error: t }), t);
          });
      }
      (t.checkLogin = v),
        (t.encryptSettings = f),
        (t.makeAccountCreationController = function (e) {
          return {
            checkLogin: (t) => v(e.storeService, t),
            createAccount: (t) => (
              e.storeService.dispatch((0, c.accountCreationStarted)({ isSSO: !1 })),
              e.sessionService.close().then(() => {
                e.masterPasswordEncryptorService.setInstance({ raw: t.password }, "");
                const { storeService: r, masterPasswordEncryptorService: a } = e;
                return f(r, a, t);
              })
            ),
            confirmAccountCreation: (t) =>
              (function (e, t) {
                return Promise.resolve()
                  .then(() => {
                    const r = e.storeService.getStore().getState().userSession.accountCreation.settings.personalSettings,
                      a = e.storeService.getAccountCreation(),
                      o = a.settings.promise;
                    if (null === o) throw new Error("createAccount should be call before confirmAccountCreation");
                    const n = a.accountKey.promise;
                    if (null === n) throw new Error("createAccount should be call before confirmAccountCreation");
                    return i
                      .createAccount(e, t, o, r, n)
                      .then(
                        (t) => (
                          d.sendConfirmCreateAccountResult(t), e.storeService.dispatch((0, p.updateIsFirstSessionAfterAccountCreation)()), t
                        )
                      );
                  })
                  .catch((e) => {
                    const t = new Error(`[AccountCreation] - confirmAccountCreation: ${e}`);
                    throw (m.default.error(t), (0, o.sendExceptionLog)({ error: t }), t);
                  });
              })(e, t)
          };
        });
    },
    85591: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(47542);
      t.config = { commands: {}, queries: {}, liveQueries: { liveAccountCreated: { subject: a.getAccountCreated$ } } };
    },
    81867: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(85591);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    7502: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(81867);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    47542: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.emitAccountCreated = t.getAccountCreated$ = void 0);
      const a = new (r(18948).Subject)();
      t.getAccountCreated$ = () => a;
      t.emitAccountCreated = () => a.next();
    },
    32074: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.encryptSettings = void 0);
      const a = r(63713),
        o = r(75270),
        n = r(56668),
        i = r(91301),
        s = r(16038),
        c = r(55623),
        l = r(12706),
        d = r(95648),
        u = r(78320),
        p = r(53);
      t.encryptSettings = function (e, t, r) {
        const S = (0, u.generateItemUuid)(),
          m = (0, p.getUnixTimestamp)(),
          g = (0, c.getRandomValues)(16),
          y = e.getState(),
          h = (0, l.isSSOAccountCreationSelector)(y) ? i.CRYPTO_NODERIVATION_HMAC64 : n.ARGON2_DEFAULT_PAYLOAD,
          v = {
            ...(0, d.makeBasePersonalSettings)(),
            AnonymousUserId: r.anonymousUserId,
            UsagelogToken: S,
            Format: r.format,
            Language: r.language,
            SecurityEmail: r.login,
            RealLogin: r.login,
            accountCreationDatetime: m,
            SyncBackup: !0,
            CryptoFixedSalt: (0, s.bufferToBase64)(g),
            CryptoUserPayload: h
          },
          f = (0, o.getTransactionXml)(v),
          w = {
            time: (0, p.getUnixTimestamp)(),
            backupDate: 0,
            type: "SETTINGS",
            action: "BACKUP_EDIT",
            identifier: "SETTINGS_userId",
            content: f
          },
          A = { forceSalt: g };
        return { personalSettings: v, promise: a.encryptSingleTransaction(t, w, A) };
      };
    },
    751: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createSSOAccount = t.prepareRemoteDataEncryptionServices = void 0);
      const a = r(35088),
        o = r(32626),
        n = r(71703),
        i = r(39362),
        s = r(56915),
        c = r(56668),
        l = r(16038),
        d = r(64910),
        u = r(33769),
        p = r(69530),
        S = r(46298),
        m = r(70252),
        g = r(61259),
        y = r(16356),
        h = r(43461);
      (t.prepareRemoteDataEncryptionServices = async (e, t) => {
        const r = (0, a.v4)(),
          { remoteDataEncryptorService: o, masterPasswordEncryptorService: n } = e,
          i = await (0, p.generate64BytesKey)(),
          s = (0, l.base64BufferToText)(i),
          S = await (0, p.generate64BytesKey)(),
          m = (0, l.bufferToBase64)(S),
          g = (0, l.base64ToBuffer)(t),
          h = (0, u.getEncryptionKeyBuffer)(g, S, { skipDerivation: !0 }),
          v = (0, l.arrayBufferToText)(h),
          f = (0, d.getNoDerivationCryptoConfig)();
        n.setInstance({ raw: v }, "", f);
        const w = (0, c.utf16ToDeflatedUtf8)(s, { skipUtf8Encoding: !0, skipDeflate: !0 }),
          A = await n.getInstance().encrypt(w);
        return (
          o.setInstance({ raw: s }, "", f),
          e.storeService.dispatch((0, y.updateRemoteKey)(s)),
          { remoteKey: { uuid: r, key: A, type: "sso" }, serverKeyBase64: m }
        );
      }),
        (t.createSSOAccount = async function (e, r) {
          const { sessionService: a, storeService: c, remoteDataEncryptorService: l } = e,
            { consents: d, deviceName: u, login: p, ssoServiceProviderKey: m, ssoToken: g, anonymousUserId: f } = r,
            { appVersion: w, country: A, lang: P, platformName: T } = (0, s.platformInfoSelector)(c.getState());
          await a.close(), c.dispatch((0, h.accountCreationStarted)({ isSSO: !0 }));
          const { remoteKey: b, serverKeyBase64: I } = await (0, t.prepareRemoteDataEncryptionServices)(e, m),
            C = {
              anonymousUserId: f,
              deviceName: u,
              format: A,
              language: P,
              login: p,
              password: m,
              subscribe: d.find(({ consentType: e }) => "emailsOffersAndTips" === e).status || !1
            };
          await (0, n.encryptSettings)(c, l, C);
          const E = c.getAccountCreation(),
            { content: _, time: D } = await E.settings.promise,
            O = await E.accountKey.promise,
            M = (0, S.makeSafeCountry)(c.getLocation().country || A);
          if ("server_carbon_unknown" === T) throw new Error("Unexpected uninitialized platform info");
          const N = {
              login: p,
              contactEmail: p,
              appVersion: w,
              sdkVersion: "1.0.0.0",
              platform: T,
              settings: { content: _, time: D },
              consents: d,
              deviceName: u,
              country: M,
              osCountry: M,
              language: (0, S.makeSafeLanguage)(P),
              osLanguage: (0, S.makeSafeLanguage)(P),
              remoteKeys: [b],
              ssoServerKey: I,
              ssoToken: g,
              sharingKeys: { publicKey: O.keys.publicKey, privateKey: O.encryptedPrivateKey },
              temporaryDevice: !0
            },
            F = await (0, S.createUserWithSSO)(c, N);
          if ((0, S.isApiError)(F)) return v(F);
          const U = {
            createAccountResult: { encryptSettingsRequest: C, valid: !0 },
            options: { flowIndicator: "memberAccount" },
            isStandAlone: !1,
            consents: d
          };
          return (
            await (0, i.firstSync)(e, U, F, { useRemoteKey: !0 }),
            e.storeService.dispatch((0, y.updateAnalyticsIds)(F.userAnalyticsId, F.deviceAnalyticsId)),
            { success: !0, code: o.LoginViaSsoCode.SUCCESS }
          );
        });
      const v = (e) => {
          const { code: t, message: r } = e;
          switch ((f(t), t)) {
            case S.DomainNotValidForTeam:
            case S.InvalidUser:
            case S.InvalidSsoToken:
            case S.NotProposedNeitherAccepted:
            case S.NoFreeSlot:
              return (0, g.makeReturnErrorObject)(o.LoginViaSsoCode.SSO_VERIFICATION_FAILED, r);
            default:
              return (0, g.makeReturnErrorObject)(o.LoginViaSsoCode.UNKNOWN_ERROR, r);
          }
        },
        f = (e) => {
          const t = new Error(`[createSSOAccount] - createUserWithSSO: ${e}`);
          (0, m.sendExceptionLog)({ error: t });
        };
    },
    39362: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.firstSync = t.createAccount = void 0);
      const a = r(32626),
        o = r(93039),
        n = r(25963),
        i = r(37898),
        s = r(25576),
        c = r(88610),
        l = r(16356),
        d = r(78320),
        u = r(1347),
        p = r(27517),
        S = r(19399),
        m = r(58582),
        g = r(60946),
        y = r(41007),
        h = r(17936),
        v = r(92221),
        f = r(46298),
        w = r(92215),
        A = r(47542),
        P = r(51064);
      async function T(e, t, r, l = { useRemoteKey: !1 }) {
        const p = t.createAccountResult,
          { login: f } = p.encryptSettingsRequest,
          A = (0, d.generateItemUuid)(),
          T = (0, u.getEmptyPersonalDataState)();
        T.emails.push({
          AnonId: (0, d.generateItemUuid)(),
          Email: f,
          EmailName: "Email 1",
          Id: A,
          kwType: "KWEmail",
          LastBackupTime: 0,
          LocaleFormat: a.Country.UNIVERSAL,
          SpaceId: "",
          Type: "PERSO"
        }),
          T.changesToUpload.push((0, P.createUploadChange)({ action: "EDIT", itemId: A, kwType: "KWEmail" }));
        const { monitor: b, getSyncEvent: I } = (0, y.makeEventLoggerSyncMonitor)(e.eventLoggerService, { sendLogOnSyncComplete: !1 }),
          C = (0, g.setupProbe)(b, (0, h.makeDiagnosticReportMonitor)(), (0, v.makeSyncLoggerMonitor)()),
          E = { accessKey: r.deviceAccessKey, secretKey: r.deviceSecretKey },
          _ = (0, w.convertDeviceKeysToUki)(E),
          D = l.useRemoteKey ? e.remoteDataEncryptorService : e.masterPasswordEncryptorService,
          O = Date.now(),
          M = i.SyncType.FULL_SYNC,
          N = {
            storeService: e.storeService,
            dataEncryptorService: D,
            login: f,
            uki: _,
            lastSyncTimestamp: O,
            personalData: T,
            syncType: M,
            needsKeys: !1,
            ws: e.wsService,
            announce: C
          };
        let F = null;
        try {
          C(m.announcements.syncStarted(o.Trigger.AccountCreation, M), m.announcements.chronologicalSyncStarted(T)),
            (F = await (0, n.sync)(N)),
            C(m.announcements.chronologicalSyncFinished(F.summary), m.announcements.syncFinished());
        } catch (e) {
          throw (C(m.announcements.chronologicalSyncFailed(e), m.announcements.syncFailed(e)), e);
        }
        if (t.isStandAlone) {
          const t = (0, c.makeLoginController)(e);
          await t.loadAccountCreationInfos(
            f,
            p.encryptSettingsRequest.password,
            (0, S.secureDeviceName)(p.encryptSettingsRequest.deviceName),
            E,
            F.lastSyncTimestamp,
            s.PersistData.PERSIST_DATA_YES
          ),
            await t.openSession(f, { password: p.encryptSettingsRequest.password });
        }
        const U = (async function (e, t) {
          return (
            await e.logSync(
              new o.UserSyncEvent({
                duration: t.duration,
                error: t.error,
                extent: t.extent,
                fullBackupSize: t.fullBackupSize,
                incomingDeleteCount: t.incomingDeleteCount,
                incomingUpdateCount: t.incomingUpdateCount,
                outgoingDeleteCount: t.outgoingDeleteCount,
                outgoingUpdateCount: t.outgoingUpdateCount,
                timestamp: t.timestamp,
                trigger: t.trigger,
                treatProblem: t.treatProblem
              })
            ),
            e.flushEventQueue()
          );
        })(e.eventLoggerService, I());
        t.isStandAlone || (await U);
      }
      (t.createAccount = async function (e, t, r, a, o) {
        const n = e.storeService.getPlatform().info;
        if (!t.createAccountResult.valid)
          throw new Error("Account creation: Will not perform API request for invalidated settings promise");
        const [i, s] = await Promise.all([r, o]),
          c = await (async function (e, t, r, a, o, n) {
            const { storeService: i } = e,
              { createAccountResult: s } = r,
              c = e.storeService.getABTesting().version;
            let d = r.consents;
            Array.isArray(d) || (d = [{ consentType: "emailsOffersAndTips", status: s.encryptSettingsRequest.subscribe }]);
            const u = s.encryptSettingsRequest.login;
            if ("server_carbon_unknown" === t.platformName) throw new Error("Unexpected uninitialized platform info");
            const m = {
                abTestingVersion: c,
                askM2dToken: !0,
                country: (0, f.makeSafeCountry)(e.storeService.getLocation().country || t.country),
                deviceName: (0, f.makeSafeDeviceName)((0, S.secureDeviceName)(s.encryptSettingsRequest.deviceName)),
                language: (0, f.makeSafeLanguage)(t.lang),
                login: u,
                osCountry: (0, f.makeSafeCountry)(t.country),
                osLanguage: (0, f.makeSafeLanguage)(t.lang),
                platform: t.platformName,
                settings: { content: o.content, time: o.time },
                appVersion: t.appVersion,
                contactEmail: u,
                consents: d,
                sharingKeys: { publicKey: n.keys.publicKey, privateKey: n.encryptedPrivateKey },
                temporaryDevice: !r.isStandAlone
              },
              g = await (0, f.createUser)(i, m);
            if ((0, f.isApiError)(g)) throw new Error(`[AccountCreation] - createAccountOnServer : ${g.message} (${g.code})`);
            return (
              e.storeService.dispatch((0, l.updateKeyPair)({ publicKey: n.keys.publicKey, privateKey: n.keys.privateKey })),
              e.storeService.dispatch((0, p.loadStoredPersonalSettings)(a)),
              e.storeService.dispatch((0, l.updateAnalyticsIds)(g.userAnalyticsId, g.deviceAnalyticsId)),
              g
            );
          })(e, n, t, a, i, s);
        await T(e, t, c);
        const d = (0, w.convertDeviceKeysToUki)({ accessKey: c.deviceAccessKey, secretKey: c.deviceSecretKey });
        return (
          t.isStandAlone && t.createAccountResult.valid && (0, A.emitAccountCreated)(),
          { m2dToken: c.token, abtestingversion: c.abTestingVersion, uki: d, origin: c.origin, openSession: t.isStandAlone }
        );
      }),
        (t.firstSync = T);
    },
    85902: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(22021),
        o = r(34913);
      t.config = {
        commands: {},
        queries: { getSubscriptionCode: { selector: a.subscriptionCodeSelector } },
        liveQueries: { liveSubscriptionCode: { operator: o.subscriptionCode$ } }
      };
    },
    68904: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(85902);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    93820: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(68904);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    34913: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.subscriptionCode$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(22021);
      t.subscriptionCode$ = () => (0, a.pipe)((0, o.map)(n.subscriptionCodeSelector), (0, o.distinctUntilChanged)());
    },
    22021: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.subscriptionCodeSelector = void 0);
      t.subscriptionCodeSelector = (e) => e.userSession.account.subscriptionCode;
    },
    65725: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.AntiPhishingConfig = void 0);
      const a = r(48331);
      t.AntiPhishingConfig = { commands: {}, queries: {}, liveQueries: { livePhishingURLList: { operator: a.antiPhishingURLList$ } } };
    },
    26404: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.updateAntiPhishingURLList = t.UPDATE_ANTI_PHISHING_URL_LIST = void 0),
        (t.UPDATE_ANTI_PHISHING_URL_LIST = "UPDATE_ANTI_PHISHING_URL_LIST");
      t.updateAntiPhishingURLList = (e) => ({ type: t.UPDATE_ANTI_PHISHING_URL_LIST, phishingURLList: e });
    },
    56666: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(65725);
      t.bootstrap = (e) => {
        e.register(a.AntiPhishingConfig);
      };
    },
    77820: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.REMOTE_PHISHING_FILE = void 0),
        (t.REMOTE_PHISHING_FILE = "phishing_urls_test.json");
    },
    25560: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(56666);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    48331: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.antiPhishingURLList$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(68769);
      t.antiPhishingURLList$ = () => (0, a.pipe)((0, o.map)(n.antiPhishingURLListSelector), (0, o.distinctUntilChanged)());
    },
    69018: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.AntiPhishingReducer = t.getEmptyAntiPhishingState = void 0);
      const a = r(26404);
      t.getEmptyAntiPhishingState = () => new Set([]);
      t.AntiPhishingReducer = (e = (0, t.getEmptyAntiPhishingState)(), r) =>
        r.type === a.UPDATE_ANTI_PHISHING_URL_LIST ? r.phishingURLList : e;
    },
    68769: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.antiPhishingURLListSelector = void 0);
      t.antiPhishingURLListSelector = (e) => e.device.antiPhishing;
    },
    46564: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const a = r(85318);
      t.setupSubscriptions = async function (e, t) {
        e.remoteFileChanged.on((e) => (0, a.triggerUpdatePhishingURLFile)(t, e));
      };
    },
    85318: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.triggerUpdatePhishingURLFile = void 0);
      const a = r(70252),
        o = r(96405),
        n = r(26404),
        i = r(77820);
      const s = async (e) => {
        const t = await (0, o.fileContentStrSelector)(e, i.REMOTE_PHISHING_FILE),
          r = t ? JSON.parse(t) : [];
        if (1 !== (n = r).fileFormat || !Array.isArray(n.domains)) {
          const e = new Error("[Anti-Phishing]: File format is invalid");
          return (0, a.sendExceptionLog)(e), null;
        }
        var n;
        return { domains: new Set(r.domains), fileFormat: r.fileFormat };
      };
      t.triggerUpdatePhishingURLFile = async function (e, t) {
        const { storeService: r } = e,
          a = r.getState();
        if (t === i.REMOTE_PHISHING_FILE) {
          const e = await s(a);
          e && r.dispatch((0, n.updateAntiPhishingURLList)(e.domains));
        }
      };
    },
    7036: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.connectLazySlot = void 0);
      const a = r(4939),
        o = ["API", "Live"];
      t.connectLazySlot = (e, t, r = !1) => {
        const n = new Map();
        return e.lazy(
          (i) => {
            r && (0, a.logInfo)({ message: `${e.slotName} subscribed on param ${i}`, tag: o });
            const s = t(i),
              c = ((e, t, r, n) =>
                e
                  ? (e) => ((0, a.logInfo)({ message: `Emitting on ${t.slotName} with param ${r}`, tag: o, details: { event: e } }), n(e))
                  : n)(r, e, i, (t) => e(i, t).catch(() => {})),
              l = s.subscribe(c);
            n.set(i, l);
          },
          (t) => {
            const i = n.get(t);
            i
              ? (r && (0, a.logInfo)({ message: `${e.slotName} unsubscribed on param ${t}`, tag: o }), i.unsubscribe(), n.delete(t))
              : r && (0, a.logWarn)({ message: `Cannot unsubscribe from ${e.slotName} on param ${t}: subscription not found.`, tag: o });
          }
        );
      };
    },
    2246: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSyncAppSetting =
          t.setDataDEBUGONLY =
          t.decipherApplicationSettings =
          t.loadAppSettings =
          t.getCommonAppSettings =
          t.getCommonAppSetting =
          t.storeCommonAppSetting =
          t.getUsersWithPublicSettings =
          t.deleteUsersPublicSettings =
          t.getUserPublicSetting =
          t.storeUserPublicSetting =
          t.initApplicationSettings =
            void 0);
      const a = r(95623),
        o = r(72365),
        n = r(56668),
        i = r(1860),
        s = r(80722),
        c = r(2356),
        l = r(30913),
        d = r(18216);
      let u = null,
        p = null,
        S = null;
      function m() {
        if (!S) throw new Error("ApplicationSettings not initialized");
        const e = (0, l.commonApplicationSettingsSelector)(S.getState());
        return e || {};
      }
      (t.initApplicationSettings = function (e, t, r, a) {
        return (
          (u = e),
          (p = (a && a.dataEncryptorService) || (0, i.makeKeyDataEncryptorService)()),
          (S = t),
          (0, o.setObfuscatingKey)(p),
          r === d.InitMode.FirstInit ? (a?.settings && t.dispatch((0, c.storeApplicationSettings)(a.settings)), h()) : Promise.resolve()
        );
      }),
        (t.storeUserPublicSetting = function (e, t, r) {
          if (!S) throw new Error("ApplicationSettings not initialized");
          return S.dispatch((0, c.storeUserPublicSetting)(e, { [t]: r })), y();
        }),
        (t.getUserPublicSetting = function (e, t) {
          if (!S) throw new Error("ApplicationSettings not initialized");
          const r = (0, l.userPublicSettingsSelector)(S.getState(), e);
          return r && r.hasOwnProperty(t) ? r[t] : null;
        }),
        (t.deleteUsersPublicSettings = async function (e) {
          if (!S) throw new Error("ApplicationSettings not initialized");
          return S.dispatch((0, c.deleteUserPublicSettings)(e)), y();
        }),
        (t.getUsersWithPublicSettings = function () {
          if (!S) throw new Error("ApplicationSettings not initialized");
          return Object.keys((0, l.publicUsersSettingsSelector)(S.getState()));
        }),
        (t.storeCommonAppSetting = function (e, t) {
          return (m()[e] = t), y();
        }),
        (t.getCommonAppSetting = function (e) {
          const t = m();
          return t.hasOwnProperty(e) ? (t[e], t[e]) : null;
        }),
        (t.getCommonAppSettings = m);
      const g = "ApplicationSettings.cdata";
      function y() {
        if (!S || !u || !p) throw new Error("ApplicationSettings not initialized");
        const e = u.getLocalStorage(),
          t = {
            publicUsersSettings: (0, l.publicUsersSettingsSelector)(S.getState()),
            commonApplicationSettings: (0, l.commonApplicationSettingsSelector)(S.getState()) || {}
          },
          r = JSON.stringify(t),
          a = (0, n.utf16ToDeflatedUtf8)(r);
        return p
          .getInstance()
          .encrypt(a)
          .then((t) => e.writeItem(g, t))
          .then(() => {});
      }
      function h() {
        if (!u || !p) throw new Error("ApplicationSettings not initialized");
        a.default.log("loadApplicationSettings");
        const e = u.getLocalStorage();
        return e
          .itemExists(g)
          .then(
            (t) => (
              a.default.log("loadApplicationSettings " + t),
              t
                ? e.readItem(g).then((e) => {
                    if ((a.default.log("appSettings read"), a.default.log(e), null == e))
                      throw new Error("storing empty or null value is not authorized");
                    if ("string" != typeof e) throw new Error("value of ApplicationSettings.cdata is expected to be a string");
                    return v(p, e)
                      .then((e) => JSON.parse(e))
                      .then((e) => {
                        f(e);
                      });
                  })
                : f({ publicUsersSettings: {}, commonApplicationSettings: {} })
            )
          )
          .catch((e) => {
            a.default.error(e, "loadAppSettings"), f({ publicUsersSettings: {}, commonApplicationSettings: {} });
          });
      }
      function v(e, t) {
        return e
          .getInstance()
          .decrypt(t)
          .then((e) => (0, n.deflatedUtf8ToUtf16)(e))
          .catch(() => {
            const e = (0, o.makeDataEncryptorService)((0, s.makeStoreService)());
            return (
              (0, o.setObfuscatingKey)(e),
              e
                .getInstance()
                .decrypt(t)
                .then((e) => (0, n.deflatedUtf8ToUtf16)(e))
            );
          });
      }
      function f(e) {
        if (!S) throw new Error("ApplicationSettings not initialized");
        a.default.log(`ApplicationSettings loaded for deviceId: ${e.commonApplicationSettings.deviceId}`),
          S.dispatch((0, c.storeApplicationSettings)(e));
      }
      (t.loadAppSettings = h),
        (t.decipherApplicationSettings = v),
        (t.setDataDEBUGONLY = function (e) {
          if (!S) throw new Error("ApplicationSettings not initialized");
          S.dispatch((0, c.storeApplicationSettings)(e));
        }),
        (t.getSyncAppSetting = function (e) {
          const t = (function () {
            if (!S) throw new Error("ApplicationSettings not initialized");
            return S.getState().device.application.settings.sync;
          })();
          return t.hasOwnProperty(e) ? t[e] : null;
        });
    },
    30096: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.appSessionIdInitialized = t.APP_SESSION_ID_INITIALIZED = void 0),
        (t.APP_SESSION_ID_INITIALIZED = "APP_SESSION_ID_INITIALIZED");
      t.appSessionIdInitialized = (e) => ({ type: t.APP_SESSION_ID_INITIALIZED, appSessionId: e });
    },
    10319: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.applicationReducer = t.getEmptyApplicationSessionState = void 0);
      const a = r(82422),
        o = r(59600),
        n = r(30096);
      t.getEmptyApplicationSessionState = () => ({ appSessionId: void 0 });
      t.applicationReducer = (0, a.combineReducers)({
        appSession: (e = (0, t.getEmptyApplicationSessionState)(), r) =>
          r.type === n.APP_SESSION_ID_INITIALIZED ? { ...e, appSessionId: r.appSessionId } : e,
        settings: o.default
      });
    },
    28486: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.appSessionIdSelector = void 0);
      t.appSessionIdSelector = (e) => e.device.application.appSession.appSessionId;
    },
    2356: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deleteUserPublicSettings =
          t.storeUserPublicSetting =
          t.storeApplicationSettings =
          t.DELETE_USER_PUBLIC_SETTINGS =
          t.STORE_USER_PUBLIC_SETTING =
          t.STORE_APPLICATION_SETTINGS =
            void 0),
        (t.STORE_APPLICATION_SETTINGS = "STORE_APPLICATION_SETTINGS"),
        (t.STORE_USER_PUBLIC_SETTING = "STORE_USER_PUBLIC_SETTING"),
        (t.DELETE_USER_PUBLIC_SETTINGS = "DELETE_USER_PUBLIC_SETTINGS");
      t.storeApplicationSettings = (e) => ({ type: t.STORE_APPLICATION_SETTINGS, settings: e });
      t.storeUserPublicSetting = (e, r) => ({ type: t.STORE_USER_PUBLIC_SETTING, login: e, userSettings: r });
      t.deleteUserPublicSettings = (e) => ({ type: t.DELETE_USER_PUBLIC_SETTINGS, logins: e });
    },
    59600: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyApplicationSettings = void 0);
      const a = r(2356);
      (t.getEmptyApplicationSettings = () => ({
        sync: { syncWithLocalClients: !1 },
        userABTestNames: [],
        migratedToSAEX: void 0,
        desktopLogin: void 0,
        publicUsersSettings: void 0,
        commonApplicationSettings: void 0
      })),
        (t.default = (e = (0, t.getEmptyApplicationSettings)(), r) => {
          switch (r.type) {
            case a.STORE_APPLICATION_SETTINGS:
              return { ...e, ...(r.settings || {}) };
            case a.STORE_USER_PUBLIC_SETTING: {
              const t = r.login,
                a = e.publicUsersSettings ?? {},
                o = { ...a, [t]: { ...(a[t] ?? {}), ...r.userSettings } };
              return { ...e, publicUsersSettings: o };
            }
            case a.DELETE_USER_PUBLIC_SETTINGS: {
              const t = r.logins,
                a = Object.keys(e.publicUsersSettings ?? {}),
                o = t.filter((e) => a.includes(e.trim()));
              return (
                0 === o.length ||
                  o.forEach((t) => {
                    const r = t.trim();
                    delete e.publicUsersSettings[r];
                  }),
                { ...e }
              );
            }
            default:
              return e;
          }
        });
    },
    30913: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.commonApplicationSettingsSelector =
          t.publicUsersSettingsSelector =
          t.userPublicSettingsSelector =
          t.migratedToSAEXSelector =
          t.abTestsNamesSelector =
            void 0);
      const r = {};
      t.abTestsNamesSelector = (e) => e.device.application.settings.userABTestNames;
      t.migratedToSAEXSelector = (e) => e.device.application.settings.migratedToSAEX;
      t.userPublicSettingsSelector = (e, t) => e.device.application.settings.publicUsersSettings?.[t];
      t.publicUsersSettingsSelector = (e) => e.device.application.settings.publicUsersSettings ?? r;
      t.commonApplicationSettingsSelector = (e) => e.device.application.settings.commonApplicationSettings;
    },
    87855: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ensureDeviceId = t.initAuthenticatedCarbonApplication = void 0);
      const a = r(35088),
        o = r(2246),
        n = r(95623),
        i = r(17338),
        s = r(33007),
        c = r(70252),
        l = r(57366),
        d = r(86056),
        u = r(75125),
        p = r(69530),
        S = r(16038),
        m = r(78671),
        g = r(17644),
        y = r(18216);
      async function h(e, t, r, { platformInfo: i, settings: s }) {
        n.default.log("initCarbonApplication"),
          (0, u.initializeAppSessionId)(e),
          (0, d.setPlatformInfo)(i),
          await (0, o.initApplicationSettings)(t, e, r, { settings: s }),
          await (function () {
            if (!(0, o.getCommonAppSetting)("anonymousComputerId")) return (0, o.storeCommonAppSetting)("anonymousComputerId", (0, a.v4)());
          })(),
          await (function () {
            if (!(0, o.getCommonAppSetting)("installationId")) return (0, o.storeCommonAppSetting)("installationId", (0, a.v4)());
            return Promise.resolve();
          })(),
          await (async function () {
            if (!(0, o.getCommonAppSetting)("eventLoggerQueueKey")) {
              const e = await (0, p.generate64BytesKey)(),
                t = (0, S.base64BufferToText)(e);
              return (0, o.storeCommonAppSetting)("eventLoggerQueueKey", t);
            }
          })();
      }
      t.default = h;
      (t.initAuthenticatedCarbonApplication = async (e, t, r) => {
        r === y.InitMode.FirstInit && (await v(e, t));
        const { storageService: a, storeService: o } = (0, i.getCoreServices)(t);
        return await h(o, a, r, e), await f(o, a), t;
      }),
        (t.ensureDeviceId = async function () {
          let e = (0, o.getCommonAppSetting)("deviceId");
          return (
            e ||
              (await (0, o.storeCommonAppSetting)("deviceId", (0, a.v4)().replace(/-/g, "")), (e = (0, o.getCommonAppSetting)("deviceId"))),
            e
          );
        });
      const v = async (e, t) => {
          try {
            const r = (0, i.getCoreServices)(t),
              { storeService: a } = r;
            e.anonymousPartnerId && a.dispatch((0, s.loadAnonymousPartnerId)(e.anonymousPartnerId)),
              await (0, l.initAuthentication)(r, e.keys);
          } catch (e) {
            const t = new Error(`[Application] - setSdkAuthentication: ${e}`);
            (0, c.sendExceptionLog)({ error: t });
          }
        },
        f = async (e, t) => {
          const r = await (0, m.getGlobalExtensionSettings)({ storeService: e, storageService: t });
          e.dispatch((0, g.setGlobalExtensionSettingsState)(r));
        };
    },
    86056: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setPlatformInfo = t.getPlatformInfo = void 0);
      const a = r(9149);
      let o = Object.assign({}, a.defaultPlatformInfo);
      (t.getPlatformInfo = function () {
        return o;
      }),
        (t.setPlatformInfo = function (e) {
          o = Object.assign({}, a.defaultPlatformInfo, e);
        });
    },
    75125: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getApplicationSessionId = t.initializeAppSessionId = void 0);
      const a = r(96997),
        o = r(28486),
        n = r(30096);
      function i(e) {
        return (0, o.appSessionIdSelector)(e.getState());
      }
      (t.initializeAppSessionId = function (e) {
        i(e) ||
          (function (e, t) {
            e.dispatch((0, n.appSessionIdInitialized)(t));
          })(e, (0, a.default)());
      }),
        (t.getApplicationSessionId = i);
    },
    2646: (e, t) => {
      let r;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPublicPath = t.setPublicPath = void 0);
      t.setPublicPath = (e) => {
        if ("string" != typeof e) throw new Error("[Assets] - setPublicPath: provided public path is not a string.");
        r = e;
      };
      t.getPublicPath = () => {
        if (!r) throw new Error("[Assets] - getPublicPath: trying to access public path before it was set.");
        return r;
      };
    },
    3158: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(91178),
        o = r(53325),
        n = r(81404),
        i = r(36592),
        s = r(54622),
        c = r(21107),
        l = r(56915),
        d = r(3914),
        u = r(55636);
      t.config = {
        commands: {
          registerDevice: { handler: u.registerDeviceHandler },
          requestExtraDeviceToken: { handler: c.requestExtraDeviceToken },
          requestEmailToken: { handler: c.requestEmailToken },
          requestPaymentUpdateAuthenticationToken: { handler: c.requestPaymentUpdateAuthenticationToken },
          setReactivationStatus: { handler: d.setReactivationStatusHandler },
          ...a.config.commands,
          ...o.config.commands,
          ...n.config.commands,
          ...i.config.commands
        },
        queries: {
          getHasOtp2Type: { selector: l.hasOtp2TypeSelector },
          getUserOtpType: { selector: l.otpTypeSelector },
          getLocalAccounts: { selector: l.localAccountsListSelector },
          getReactivationStatus: { selector: l.reactivationStatusSelector },
          getAvailableUserVerificationMethods: { selector: l.availableUserVerificationMethodsSelector },
          ...a.config.queries,
          ...o.config.queries,
          ...n.config.queries,
          ...i.config.queries
        },
        liveQueries: {
          liveReactivationStatus: { operator: s.reactivationStatus$ },
          ...a.config.liveQueries,
          ...o.config.liveQueries,
          ...n.config.liveQueries,
          ...i.config.liveQueries
        }
      };
    },
    93553: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isExtraDeviceToken = t.requestExtraDeviceToken = void 0);
      const a = r(46298);
      t.requestExtraDeviceToken = async (e, t) => {
        if (!e()) return { type: "userNotAuthenticated", message: "No authenticated user" };
        const r = await t();
        if ((0, a.isApiError)(r)) return r;
        const n = r.token;
        return o(n);
      };
      const o = (e) =>
        "string" != typeof e || 0 === e.length
          ? { type: "invalidExtraDeviceTokenSentByServer", message: "Invalid extra device token sent by server" }
          : { type: "extraDeviceToken", extraDeviceToken: e };
      t.isExtraDeviceToken = (e) => "extraDeviceToken" === e.type;
    },
    75226: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getLocalAccounts = void 0);
      const a = r(2246),
        o = r(56915),
        n = r(63739),
        i = r(61740);
      t.getLocalAccounts = async function (e, t) {
        const r = (0, a.getUsersWithPublicSettings)(),
          s = {},
          c = ["localSettings", "personalData", "personalSettings"];
        return Promise.all(
          r.map(async (r) => {
            const a = (0, o.getUserDeviceWasRegisteredWithDeviceKeysSelector)(e.getState(), r),
              i = [...c, ...(a ? ["authentication"] : [])],
              l = (await Promise.all(i.map((e) => (0, n.isDataStored)(t, r, e)))).every((e) => e);
            s[r] = l;
          })
        )
          .then(() => r.filter((e) => s[e]))
          .then((e) => {
            const t = e
              .map((e) => ({ login: e, lastLoginTime: (0, a.getUserPublicSetting)(e, "lastSuccessfulLoginTime") || 0 }))
              .sort((e, t) => {
                const r = e.lastLoginTime,
                  a = t.lastLoginTime;
                return r > a ? -1 : r < a ? 1 : 0;
              })[0];
            return e
              .map((e) => ({
                login: e,
                hasLoginOtp: (0, a.getUserPublicSetting)(e, "otp2") || !1,
                isLastSuccessfulLogin: t && t.login === e,
                rememberMeType: (0, i.getLocalAccountRememberMeType)(e) ?? void 0,
                shouldAskMasterPassword: (0, i.shouldAskMasterPassword)(e)
              }))
              .sort((e, t) => {
                const r = e.login.toLowerCase(),
                  a = t.login.toLowerCase();
                return r.localeCompare(a);
              });
          });
      };
    },
    37864: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTokenForKwUser = void 0);
      const a = r(46298);
      t.getTokenForKwUser = async (e, t) => {
        const { storeService: r } = e,
          o = await (0, a.getTokens)(r);
        if ((0, a.isApiError)(o)) throw new Error(`Error: ${o.code}`);
        const { tokens: n } = o,
          i = n.find((e) => e.login === t);
        if (!i) throw new Error("Email token not found for " + t);
        return i.token;
      };
    },
    21107: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.requestPaymentUpdateAuthenticationToken = t.requestEmailToken = t.requestExtraDeviceToken = void 0);
      var a = r(61336);
      Object.defineProperty(t, "requestExtraDeviceToken", {
        enumerable: !0,
        get: function () {
          return a.requestExtraDeviceToken;
        }
      });
      var o = r(95626);
      Object.defineProperty(t, "requestEmailToken", {
        enumerable: !0,
        get: function () {
          return o.requestEmailToken;
        }
      });
      var n = r(17717);
      Object.defineProperty(t, "requestPaymentUpdateAuthenticationToken", {
        enumerable: !0,
        get: function () {
          return n.requestPaymentUpdateAuthenticationToken;
        }
      });
    },
    57366: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.initAuthentication = void 0);
      const a = r(95623),
        o = r(33007),
        n = r(69763),
        i = r(46298),
        s = r(56915),
        c = r(28445);
      t.initAuthentication = async (e, t) => {
        l(e, t), d(e, t), await (0, n.loadLocalUsersAuthenticationDataFromStorage)(e), await u(e, (0, c.checkOrigin)(self));
      };
      const l = (e, t) => {
          const { storeService: r } = e;
          r.dispatch((0, o.saveAppKeys)({ accessKey: t.appAccess, secretKey: t.appSecret }));
        },
        d = (e, t) => {
          const { storeService: r } = e;
          r.dispatch((0, o.saveStyxKeys)({ accessKey: t.styxAccess, secretKey: t.styxSecret }));
        },
        u = async (e, t) => {
          const { storeService: r } = e;
          try {
            const e = (0, s.platformInfoSelector)(r.getState()),
              a = await (0, i.getRemoteTime)(
                r,
                ("server_tac" !== e.platformName && "server_leeloo" !== e.platformName) || !t
                  ? void 0
                  : { tz: new Date().getTimezoneOffset().toString() }
              );
            if ((0, i.isApiError)(a)) throw a;
            r.dispatch((0, o.saveDashlaneServerDeltaTimestamp)(a.timestamp));
          } catch (e) {
            (0, a.logDebug)({ tag: ["Auth"], message: "Error while calling getRemoteTime", details: { error: e } });
          }
        };
    },
    14498: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.loadRememberMeTypeToStore = void 0);
      const a = r(98226),
        o = r(61740),
        n = r(16593);
      t.loadRememberMeTypeToStore = function (e) {
        const { storeService: t } = e,
          r = (0, n.userLoginSelector)(t.getState()),
          i = (0, o.getLocalAccountRememberMeType)(r);
        i && t.dispatch((0, a.setRememberMeTypeAction)(i));
      };
    },
    55636: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.registerDeviceHandler = void 0);
      const a = r(70414);
      t.registerDeviceHandler = async function ({ storeService: e }, t) {
        return await (0, a.registerDevice)(e, t), Promise.resolve();
      };
    },
    61336: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestExtraDeviceToken = void 0);
      const a = r(46298),
        o = r(93553),
        n = r(16593);
      t.requestExtraDeviceToken = async (e) => {
        const { storeService: t } = e,
          r = t.isAuthenticated,
          i = (0, n.userLoginSelector)(t.getState());
        if (!i || !r) throw new Error("[Authentication] - requestExtraDeviceToken: User is not authenticated");
        const s = await (0, o.requestExtraDeviceToken)(r, () => (0, a.requestExtraDeviceRegistration)(t, i));
        if ((0, o.isExtraDeviceToken)(s)) return s.extraDeviceToken;
        throw new Error(s.message);
      };
    },
    17717: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestPaymentUpdateAuthenticationToken = void 0);
      const a = r(90622),
        o = r(46298),
        n = r(16593),
        i = r(27885),
        s = r(32924),
        c = r(1577);
      t.requestPaymentUpdateAuthenticationToken = async function (e) {
        try {
          const { storeService: t } = e,
            r = t.getState(),
            l = (0, n.userLoginSelector)(r);
          if (!(0, n.isAuthenticatedSelector)(r)) return { success: !1 };
          const d = await (0, s.getAuthenticationTokenForCardUpdate)(t, l, {});
          if ((0, o.isApiError)(d)) return { success: !1 };
          const u = (0, i.getCurrentTeamId)(r.userSession.spaceData),
            p = (0, i.isTeamAdminInCurrentSpace)(r.userSession.spaceData),
            S = (0, i.isBillingAdminInCurrentSpace)(r.userSession.spaceData),
            m = { login: l, uki: (0, a.ukiSelector)(r), teamId: u };
          let g,
            y = {};
          if (u && (p || S)) {
            const e = { name: "teamPlans", version: 1 };
            if (((g = await (0, c.NewCardToken)(m, e)), 200 !== g.code)) return { success: !1 };
            y = { customerId: g.content.customerId, tokenId: g.content.tokenId };
          }
          let h = {};
          const v = { name: "premium", version: 3 },
            f = await (0, c.NewCardToken)(m, v);
          return 200 !== f.code
            ? { success: !1 }
            : ((h = { customerId: f.content.customerId, tokenId: f.content.tokenId }),
              {
                success: !0,
                accessKey: d.accessKey,
                creationDateUnix: d.creationDateUnix,
                expirationDateUnix: d.expirationDateUnix,
                secretKey: d.secretKey,
                livemode: d.livemode,
                b2bPaymentTokens: y,
                b2cPaymentTokens: h
              });
        } catch (e) {
          return { success: !1 };
        }
      };
    },
    95626: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestEmailToken = void 0);
      const a = r(32626),
        o = r(16593);
      t.requestEmailToken = async function (e) {
        try {
          const { storeService: t, wsService: r } = e,
            a = t.getState(),
            n = (0, o.userLoginSelector)(a);
          if (!n) throw new Error("[emailToken] - askServerToSendToken: no current authenticated user");
          await r.authentication.askServerToSendToken({ login: n });
        } catch (e) {
          return { success: !1, error: { code: a.EmailTokenApiError, message: e.message } };
        }
        return { success: !0 };
      };
    },
    3914: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setReactivationStatusHandler = void 0);
      const a = r(9344);
      t.setReactivationStatusHandler = function ({ storeService: e }, { reactivationStatus: t }) {
        return e.dispatch((0, a.reactivationStatusUpdated)(t)), Promise.resolve();
      };
    },
    6231: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.persistUserAuthenticationData = t.loadUserAuthenticationData = void 0);
      const a = r(56915),
        o = r(98226),
        n = r(39408);
      t.loadUserAuthenticationData = async (e, t) => {
        let r;
        try {
          const t = e.getInstance();
          if (!(await t.hasAuthenticationData())) return Promise.resolve({ type: "success" });
          r = await t.getAuthenticationData();
        } catch (e) {
          return Promise.resolve({ type: "failed", message: n.FailedToReadParseOrValidateAuthenticationData, error: e });
        }
        try {
          t.dispatch((0, o.rehydrateUserAuthenticationData)(r));
        } catch (e) {
          return Promise.resolve({ type: "failed", message: n.FailedToRehydrateAuthenticationData, error: e });
        }
        return Promise.resolve({ type: "success" });
      };
      t.persistUserAuthenticationData = async (e, t) => {
        const r = (0, a.userAuthenticationDataSelector)(t.getState()),
          o = e.getInstance();
        await o.storeAuthenticationData(r);
      };
    },
    69763: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loadLocalUsersAuthenticationDataFromStorage = t.persistLocalUsersAuthenticationData = void 0);
      const a = r(72365),
        o = r(50058),
        n = r(70252),
        i = r(95623),
        s = r(92263),
        c = r(56915),
        l = r(16038),
        d = r(1860),
        u = r(56668),
        p = r(93513),
        S = "authentication.localusers";
      t.persistLocalUsersAuthenticationData = async (e, t) => {
        try {
          const r = e.getLocalStorage(),
            o = (0, d.makeKeyDataEncryptorService)();
          (0, a.setObfuscatingKey)(o);
          const n = (0, c.localUsersAuthenticationDataSelector)(t.getState()),
            i = JSON.stringify(n),
            s = (0, l.utf8ChunkEncode)(i),
            m = p.encode(s),
            g = (0, u.utf16ToDeflatedUtf8)(m, { skipUtf8Encoding: !0 }),
            y = await o.getInstance().encrypt(g);
          await r.writeItem(S, y);
        } catch (e) {
          const t = "Auth",
            r = s.CarbonError.fromAnyError(e).addContextInfo(t, "persistLocalUsersAuthenticationData");
          (0, i.logError)({ tag: [t], message: `${r}`, details: { error: e } }), (0, n.sendExceptionLog)({ error: r });
        }
      };
      t.loadLocalUsersAuthenticationDataFromStorage = async (e) => {
        try {
          const { storageService: t, storeService: r } = e,
            n = t.getLocalStorage(),
            i = (0, a.makeDataEncryptorService)(r);
          (0, a.setObfuscatingKey)(i);
          const s = await n.readItem(S);
          if (!s) return;
          if ("string" != typeof s) throw new Error("value of authentication.localusers is expected to be a string");
          const c = await i.getInstance().decrypt(s),
            d = (0, u.deflatedUtf8ToUtf16)(c, { skipUtf8Decoding: !0 }),
            m = p.decode(d);
          let g = m;
          try {
            g = (0, l.utf8ChunkDecode)(m);
          } catch (e) {}
          const y = JSON.parse(g);
          r.dispatch((0, o.loadLocalUsersAuthenticationData)(y));
        } catch (e) {
          const t = "Auth",
            r = s.CarbonError.fromAnyError(e).addContextInfo(t, "loadLocalUsersAuthenticationDataFromStorage");
          (0, i.logError)({ tag: [t], message: `${r}`, details: { error: e } }), (0, n.sendExceptionLog)({ error: r });
        }
      };
    },
    39408: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isLoadAuthenticationSuccess = t.FailedToRehydrateAuthenticationData = t.FailedToReadParseOrValidateAuthenticationData = void 0),
        (t.FailedToReadParseOrValidateAuthenticationData = "Failed to read, parse or validate persisted data"),
        (t.FailedToRehydrateAuthenticationData = "Failed to rehydrate");
      t.isLoadAuthenticationSuccess = (e) => "object" == typeof e && "success" === e.type;
    },
    43739: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deviceRegistered = t.makeDeviceRegistrationKeys = t.makeLegacyDeviceRegistrationKey = t.DEVICE_REGISTERED = void 0),
        (t.DEVICE_REGISTERED = "DEVICE_REGISTERED");
      t.makeLegacyDeviceRegistrationKey = (e) => ({ type: "uki", uki: e });
      t.makeDeviceRegistrationKeys = (e, t) => ({ type: "deviceKeys", deviceAccessKey: e, deviceSecretKey: t });
      t.deviceRegistered = (e, r, a) => ({ type: t.DEVICE_REGISTERED, registrationType: e, persistData: r, login: a });
    },
    98226: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setRememberMeTypeAction =
          t.rehydrateUserAuthenticationData =
          t.SET_REMEMBER_ME_TYPE =
          t.REHYDRATE_USER_AUTHENTICATION_DATA =
            void 0),
        (t.REHYDRATE_USER_AUTHENTICATION_DATA = "REHYDRATE_USER_AUTHENTICATION_DATA"),
        (t.SET_REMEMBER_ME_TYPE = "SET_REMEMBER_ME_TYPE");
      t.rehydrateUserAuthenticationData = (e) => ({ type: t.REHYDRATE_USER_AUTHENTICATION_DATA, data: e });
      t.setRememberMeTypeAction = (e) => ({ type: t.SET_REMEMBER_ME_TYPE, rememberMeType: e });
    },
    99932: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getEmptyCurrentUserAuthentication = t.currentUserAuthenticationReducer = void 0);
      const a = r(48313),
        o = r(98226),
        n = r(43739);
      t.currentUserAuthenticationReducer = (e = (0, t.getEmptyCurrentUserAuthentication)(), r) => {
        switch (r.type) {
          case a.CLOSE_SESSION:
            return (0, t.getEmptyCurrentUserAuthentication)();
          case n.DEVICE_REGISTERED:
            if ("deviceKeys" === r.registrationType.type) {
              const { deviceAccessKey: t, deviceSecretKey: a } = r.registrationType;
              return { ...e, deviceKeys: { accessKey: t, secretKey: a } };
            }
            return e;
          case o.REHYDRATE_USER_AUTHENTICATION_DATA:
            return { ...e, ...r.data };
          case o.SET_REMEMBER_ME_TYPE:
            return { ...e, rememberMeType: r.rememberMeType };
          default:
            return e;
        }
      };
      t.getEmptyCurrentUserAuthentication = () => ({ deviceKeys: null, rememberMeType: null });
    },
    52653: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.authenticationReducer =
          t.updateLocalUserInfo =
          t.makeDeviceRegistrationKeys =
          t.makeLegacyDeviceRegistrationKey =
          t.deviceRegistered =
            void 0);
      var a = r(43739);
      Object.defineProperty(t, "deviceRegistered", {
        enumerable: !0,
        get: function () {
          return a.deviceRegistered;
        }
      }),
        Object.defineProperty(t, "makeLegacyDeviceRegistrationKey", {
          enumerable: !0,
          get: function () {
            return a.makeLegacyDeviceRegistrationKey;
          }
        }),
        Object.defineProperty(t, "makeDeviceRegistrationKeys", {
          enumerable: !0,
          get: function () {
            return a.makeDeviceRegistrationKeys;
          }
        });
      var o = r(50058);
      Object.defineProperty(t, "updateLocalUserInfo", {
        enumerable: !0,
        get: function () {
          return o.updateLocalUserInfo;
        }
      });
      var n = r(57334);
      Object.defineProperty(t, "authenticationReducer", {
        enumerable: !0,
        get: function () {
          return n.authenticationReducer;
        }
      });
    },
    9344: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.reactivationStatusUpdated = t.localAccountsListUpdated = void 0);
      const a = r(52968);
      t.localAccountsListUpdated = (e) => ({ type: a.LOCAL_ACCOUNTS_LIST_UPDATED, localAccounts: e });
      t.reactivationStatusUpdated = (e) => ({ type: a.REACTIVATION_STATUS_UPDATED, reactivationStatus: e });
    },
    83803: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.localAccountsAuthenticationReducer = t.getEmptyLocalAccountsAuthenticationState = void 0);
      const a = r(52968);
      t.getEmptyLocalAccountsAuthenticationState = () => ({
        accountsList: [],
        accountsListInitialized: !1,
        reactivationStatus: a.ReactivationStatus.CLASSIC
      });
      t.localAccountsAuthenticationReducer = (e = (0, t.getEmptyLocalAccountsAuthenticationState)(), r) => {
        switch (r.type) {
          case a.LOCAL_ACCOUNTS_LIST_UPDATED:
            return { ...e, accountsList: r.localAccounts, accountsListInitialized: !0 };
          case a.REACTIVATION_STATUS_UPDATED:
            return { ...e, reactivationStatus: r.reactivationStatus };
          default:
            return e;
        }
      };
    },
    52968: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.REACTIVATION_STATUS_UPDATED = t.LOCAL_ACCOUNTS_LIST_UPDATED = t.ReactivationStatus = void 0),
        (function (e) {
          (e.DISABLED = "DISABLED"), (e.CLASSIC = "CLASSIC"), (e.WEBAUTHN = "WEBAUTHN");
        })(t.ReactivationStatus || (t.ReactivationStatus = {})),
        (t.LOCAL_ACCOUNTS_LIST_UPDATED = "LOCAL_ACCOUNTS_LIST_UPDATED"),
        (t.REACTIVATION_STATUS_UPDATED = "REACTIVATION_STATUS_UPDATED");
    },
    50058: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isLocalUserAuthenticationAction =
          t.updateLocalUserInfo =
          t.loadLocalUsersAuthenticationData =
          t.UPDATE_LOCAL_USER_INFO =
          t.LOAD_LOCAL_USERS_AUTH_DATA_FROM_STORAGE =
            void 0);
      const a = r(43739);
      (t.LOAD_LOCAL_USERS_AUTH_DATA_FROM_STORAGE = "LOAD_LOCAL_USERS_AUTH_DATA_FROM_STORAGE"),
        (t.UPDATE_LOCAL_USER_INFO = "UPDATE_LOCAL_USER_INFO");
      t.loadLocalUsersAuthenticationData = (e) => ({ type: t.LOAD_LOCAL_USERS_AUTH_DATA_FROM_STORAGE, data: e });
      t.updateLocalUserInfo = (e, r) => ({ type: t.UPDATE_LOCAL_USER_INFO, login: e, data: r });
      t.isLocalUserAuthenticationAction = (e) => e.type === a.DEVICE_REGISTERED;
    },
    76156: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getEmptyLocalUsersAuthentication = t.localUsersAuthenticationReducer = void 0);
      const a = r(16516),
        o = r(50058),
        n = r(43739),
        i = r(17825);
      t.localUsersAuthenticationReducer = (e = (0, t.getEmptyLocalUsersAuthentication)(), r) => {
        if ((0, o.isLocalUserAuthenticationAction)(r)) {
          const t = s(e[r.login], r);
          return t ? { ...e, [r.login]: t } : (0, a.omit)([r.login], e);
        }
        switch (r.type) {
          case o.LOAD_LOCAL_USERS_AUTH_DATA_FROM_STORAGE:
            return { ...e, ...r.data };
          case o.UPDATE_LOCAL_USER_INFO:
            const t = c();
            return { ...e, [r.login]: { ...t, ...e[r.login], ...r.data } };
          default:
            return e;
        }
      };
      t.getEmptyLocalUsersAuthentication = () => ({});
      const s = (e, t) => {
          const r = e || c();
          if (t.type !== n.DEVICE_REGISTERED) return e;
          {
            const { registrationType: e } = t;
            switch (e.type) {
              case "deviceKeys": {
                const { deviceAccessKey: t } = e;
                return { ...r, deviceAccessKey: t, deviceRegisteredWithLegacyKey: !1 };
              }
              case "uki":
                return { ...r, deviceRegisteredWithLegacyKey: !0 };
              default:
                (0, i.assertUnreachable)(e);
            }
          }
        },
        c = () => ({ deviceAccessKey: null, deviceRegisteredWithLegacyKey: !1, ssoActivatedUser: !1 });
    },
    57334: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.authenticationReducer = t.getEmptyAuthenticationState = void 0);
      const a = r(82422),
        o = r(99932),
        n = r(83803),
        i = r(76156),
        s = r(82677),
        c = r(96171),
        l = r(88272);
      (t.getEmptyAuthenticationState = () => ({
        currentUser: (0, o.getEmptyCurrentUserAuthentication)(),
        localAccounts: (0, n.getEmptyLocalAccountsAuthenticationState)(),
        localUsers: (0, i.getEmptyLocalUsersAuthentication)(),
        u2f: (0, s.getEmptyU2FAuthenticationState)(),
        webAuthnAuthentication: (0, l.getEmptyWebAuthnAuthentication)(),
        twoFactorAuthentication: (0, c.getEmptyTwoFactorAuthenticationState)()
      })),
        (t.authenticationReducer = (0, a.combineReducers)({
          currentUser: o.currentUserAuthenticationReducer,
          localAccounts: n.localAccountsAuthenticationReducer,
          localUsers: i.localUsersAuthenticationReducer,
          u2f: s.u2fAuthenticationReducer,
          webAuthnAuthentication: l.webAuthnAuthenticationReducer,
          twoFactorAuthentication: c.TwoFactorAuthenticationReducer
        }));
    },
    72355: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.u2fDevicesUpdated = t.U2F_DEVICES_UPDATED = void 0),
        (t.U2F_DEVICES_UPDATED = "U2F_DEVICES_UPDATED");
      t.u2fDevicesUpdated = (e) => ({ type: t.U2F_DEVICES_UPDATED, devices: e });
    },
    82677: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.u2fAuthenticationReducer = t.getEmptyU2FAuthenticationState = void 0);
      const a = r(72355);
      t.getEmptyU2FAuthenticationState = () => ({ u2fDevices: [] });
      t.u2fAuthenticationReducer = (e = (0, t.getEmptyU2FAuthenticationState)(), r) =>
        r.type === a.U2F_DEVICES_UPDATED ? { ...e, u2fDevices: r.devices } : e;
    },
    8246: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.webAuthnAvailableAuthenticatorsListUpdated =
          t.webAuthnAuthenticatorsListUpdated =
          t.webAuthnAuthenticatorRemoved =
          t.webAuthnAuthenticatorAdded =
          t.webAuthnUserIdUpdated =
          t.WEBAUTHN_AVAILABLE_AUTHENTICATORS_LIST_UPDATED =
          t.WEBAUTHN_AUTHENTICATORS_LIST_UPDATED =
          t.WEBAUTHN_AUTHENTICATOR_REMOVED =
          t.WEBAUTHN_AUTHENTICATOR_ADDED =
          t.WEBAUTHN_USERID_UPDATED =
            void 0),
        (t.WEBAUTHN_USERID_UPDATED = "WEBAUTHN_USERID_UPDATED"),
        (t.WEBAUTHN_AUTHENTICATOR_ADDED = "WEBAUTHN_AUTHENTICATOR_ADDED"),
        (t.WEBAUTHN_AUTHENTICATOR_REMOVED = "WEBAUTHN_AUTHENTICATOR_REMOVED"),
        (t.WEBAUTHN_AUTHENTICATORS_LIST_UPDATED = "WEBAUTHN_AUTHENTICATORS_LIST_UPDATED"),
        (t.WEBAUTHN_AVAILABLE_AUTHENTICATORS_LIST_UPDATED = "WEBAUTHN_AVAILABLE_AUTHENTICATORS_LIST_UPDATED");
      t.webAuthnUserIdUpdated = (e) => ({ type: t.WEBAUTHN_USERID_UPDATED, webAuthnUserId: e });
      t.webAuthnAuthenticatorAdded = (e) => ({ type: t.WEBAUTHN_AUTHENTICATOR_ADDED, authenticator: e });
      t.webAuthnAuthenticatorRemoved = (e) => ({ type: t.WEBAUTHN_AUTHENTICATOR_REMOVED, credentialId: e });
      t.webAuthnAuthenticatorsListUpdated = (e) => ({ type: t.WEBAUTHN_AUTHENTICATORS_LIST_UPDATED, authenticatorsList: e });
      t.webAuthnAvailableAuthenticatorsListUpdated = (e) => ({
        type: t.WEBAUTHN_AVAILABLE_AUTHENTICATORS_LIST_UPDATED,
        availableAuthenticatorsList: e
      });
    },
    88272: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.webAuthnAuthenticationReducer = t.getEmptyWebAuthnAuthentication = void 0);
      const a = r(8246);
      t.getEmptyWebAuthnAuthentication = () => ({ webAuthnUserId: null, authenticators: [] });
      t.webAuthnAuthenticationReducer = (e = (0, t.getEmptyWebAuthnAuthentication)(), r) => {
        switch (r.type) {
          case a.WEBAUTHN_USERID_UPDATED:
            return { ...e, webAuthnUserId: r.webAuthnUserId };
          case a.WEBAUTHN_AUTHENTICATOR_ADDED:
            return { ...e, authenticators: [...e.authenticators, r.authenticator] };
          case a.WEBAUTHN_AUTHENTICATOR_REMOVED: {
            const t = e.authenticators.filter((e) => e.credentialId !== r.credentialId);
            return { ...e, authenticators: t };
          }
          case a.WEBAUTHN_AUTHENTICATORS_LIST_UPDATED:
            return { ...e, authenticators: r.authenticatorsList };
          case a.WEBAUTHN_AVAILABLE_AUTHENTICATORS_LIST_UPDATED: {
            const t = r.availableAuthenticatorsList.map((e) => e.credentialId),
              a = e.authenticators.map((e) => (t.includes(e.credentialId) ? { ...e, canOpenSession: !0 } : { ...e, canOpenSession: !1 }));
            return { ...e, authenticators: a };
          }
          default:
            return e;
        }
      };
    },
    36592: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(43037),
        o = r(5689),
        n = r(24797),
        i = r(87463);
      t.config = {
        commands: { refreshTwoFactorAuthenticationInfo: { handler: n.refreshTwoFactorAuthenticationInfoHandler }, ...i.config.commands },
        queries: { getTwoFactorAuthenticationInfo: { selector: o.twoFactorAuthenticationInfoSelector }, ...i.config.queries },
        liveQueries: { liveTwoFactorAuthenticationInfo: { operator: a.twoFactorAuthenticationInfo$ }, ...i.config.liveQueries }
      };
    },
    81404: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(54120),
        o = r(18099),
        n = r(95475);
      t.config = {
        commands: {
          startTwoFactorAuthenticationDisableFlow: { handler: a.startTwoFactorAuthenticationDisableFlow },
          continueTwoFactorAuthenticationDisableFlow: { handler: a.continueTwoFactorAuthenticationDisableFlow },
          backTwoFactorAuthenticationDisableFlow: { handler: a.backTwoFactorAuthenticationDisableFlow },
          stopTwoFactorAuthenticationDisableFlow: { handler: a.stopTwoFactorAuthenticationDisableFlow }
        },
        queries: { getTwoFactorAuthenticationDisableStage: { selector: o.getTwoFactorAuthenticationDisableStageData } },
        liveQueries: { liveTwoFactorAuthenticationDisableStage: { operator: n.twoFactorAuthenticationDisableFlow$ } }
      };
    },
    44787: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stopTwoFactorAuthenticationStage = t.updateTwoFactorAuthenticationStage = void 0);
      const a = r(4478);
      t.updateTwoFactorAuthenticationStage = (e) => ({ type: a.UPDATE_TWO_FACTOR_AUTHENTICATION_DISABLE_STAGE, data: e });
      t.stopTwoFactorAuthenticationStage = () => ({ type: a.UPDATE_TWO_FACTOR_AUTHENTICATION_DISABLE_STAGE, data: { stage: void 0 } });
    },
    4478: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.STOP_TWO_FACTOR_AUTHENTICATION_DISABLE_FLOW = t.UPDATE_TWO_FACTOR_AUTHENTICATION_DISABLE_STAGE = void 0),
        (t.UPDATE_TWO_FACTOR_AUTHENTICATION_DISABLE_STAGE = "UPDATE_TWO_FACTOR_AUTHENTICATION_DISABLE_STAGE"),
        (t.STOP_TWO_FACTOR_AUTHENTICATION_DISABLE_FLOW = "STOP_TWO_FACTOR_AUTHENTICATION_DISABLE_FLOW");
    },
    51554: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.twoFactorAuthenticationDisableFlow = t.stopTwoFactorAuthenticationStage = t.updateTwoFactorAuthenticationStage = void 0);
      var a = r(44787);
      Object.defineProperty(t, "updateTwoFactorAuthenticationStage", {
        enumerable: !0,
        get: function () {
          return a.updateTwoFactorAuthenticationStage;
        }
      }),
        Object.defineProperty(t, "stopTwoFactorAuthenticationStage", {
          enumerable: !0,
          get: function () {
            return a.stopTwoFactorAuthenticationStage;
          }
        });
      var o = r(98259);
      Object.defineProperty(t, "twoFactorAuthenticationDisableFlow", {
        enumerable: !0,
        get: function () {
          return o.twoFactorAuthenticationDisableFlow;
        }
      });
    },
    98259: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.twoFactorAuthenticationDisableFlow = t.getEmptyTwoFactorAuthenticationDisable = void 0);
      const a = r(4478);
      t.getEmptyTwoFactorAuthenticationDisable = () => ({ stage: void 0 });
      t.twoFactorAuthenticationDisableFlow = (e = (0, t.getEmptyTwoFactorAuthenticationDisable)(), r) =>
        r.type === a.UPDATE_TWO_FACTOR_AUTHENTICATION_DISABLE_STAGE ? { ...e, ...r.data } : e;
    },
    18099: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getTwoFactorAuthenticationDisableFlowData = t.getTwoFactorAuthenticationDisableStageData = void 0);
      const a = r(46474);
      t.getTwoFactorAuthenticationDisableStageData = (e) => {
        const { stage: t } = e.userSession.twoFactorAuthenticationDisableFlow,
          r = a.TwoFactorAuthenticationDisableFlowConfig?.[t]?.viewMapper;
        return { stage: t, viewData: r ? r(e) : void 0 };
      };
      t.getTwoFactorAuthenticationDisableFlowData = (e) => {
        const { flowData: t } = e.userSession.twoFactorAuthenticationDisableFlow;
        return t;
      };
    },
    46474: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TwoFactorAuthenticationDisableFlowStages = t.TwoFactorAuthenticationDisableFlowConfig = void 0);
      const a = r(32626),
        o = r(73714),
        n = r(24216),
        i = r(18747),
        s = r(46796);
      (t.TwoFactorAuthenticationDisableFlowConfig = {
        start: { storeMapper: o.startTwoFactorAuthenticationDisableStoreMapper },
        stop: { currentHandler: s.endTwoFactorAuthenticationHandler, storeMapper: o.endTwoFactorAuthenticationDisableStoreMapper },
        end: { currentHandler: s.endTwoFactorAuthenticationHandler, storeMapper: o.endTwoFactorAuthenticationDisableStoreMapper },
        [a.TwoFactorAuthenticationDisableStages.AUTHENTICATION_CODE]: {
          currentHandler: n.disableTwoFactorAuthenticationCodeHandler,
          viewMapper: i.disableTwoFactorAuthenticationCodeViewMapper
        },
        [a.TwoFactorAuthenticationDisableStages.BACKUP_CODE]: {
          currentHandler: n.disableTwoFactorAuthenticationCodeHandler,
          viewMapper: i.disableTwoFactorAuthenticationBackupCodeViewMapper
        },
        [a.TwoFactorAuthenticationDisableStages.LOGOUT_REQUIRED]: { currentHandler: n.disableTwoFactorAuthenticationLogoutRequiredHandler }
      }),
        (t.TwoFactorAuthenticationDisableFlowStages = [
          { stage: a.TwoFactorAuthenticationDisableStages.CONFIRMATION },
          { stage: a.TwoFactorAuthenticationDisableStages.AUTHENTICATION_CODE },
          { stage: a.TwoFactorAuthenticationDisableStages.FINALIZING_CHANGES },
          { stage: a.TwoFactorAuthenticationDisableStages.SUCCESS }
        ]);
    },
    54120: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.backTwoFactorAuthenticationDisableFlow =
          t.continueTwoFactorAuthenticationDisableFlow =
          t.stopTwoFactorAuthenticationDisableFlow =
          t.startTwoFactorAuthenticationDisableFlow =
            void 0);
      const a = r(46474),
        o = r(51554),
        n = (e) => {
          const { stage: t } = e.getState().userSession.twoFactorAuthenticationDisableFlow;
          return { currentIndex: a.TwoFactorAuthenticationDisableFlowStages.findIndex((e) => e.stage === t), currentStage: t };
        };
      t.startTwoFactorAuthenticationDisableFlow = ({ storeService: e }) => {
        const { storeMapper: t } = a.TwoFactorAuthenticationDisableFlowConfig.start,
          r = t ? t(e) : void 0,
          n = (0, o.updateTwoFactorAuthenticationStage)({ ...r, stage: a.TwoFactorAuthenticationDisableFlowStages[0].stage });
        return e.dispatch(n), Promise.resolve({ success: !0 });
      };
      t.stopTwoFactorAuthenticationDisableFlow = (e) => {
        const { storeService: t } = e;
        t.dispatch((0, o.stopTwoFactorAuthenticationStage)());
        const { currentHandler: r, storeMapper: n } = a.TwoFactorAuthenticationDisableFlowConfig.stop,
          i = n ? n(t) : void 0;
        return r ? r(e, i) : Promise.resolve({ success: !0 });
      };
      const i = (e, t, r, a) => {
          const { storeService: o } = e;
          return t(e, r ? r(o) : void 0, a);
        },
        s = ({ storeService: e }, t) => {
          const { currentIndex: r } = n(e);
          if (r !== a.TwoFactorAuthenticationDisableFlowStages.length - 1) {
            const n = (0, o.updateTwoFactorAuthenticationStage)({ ...t, stage: a.TwoFactorAuthenticationDisableFlowStages[r + 1].stage });
            e.dispatch(n);
          }
          return Promise.resolve({ success: !0 });
        },
        c = ({ storeService: e }, t) => {
          const { currentIndex: r } = n(e);
          if (0 !== r) {
            const n = (0, o.updateTwoFactorAuthenticationStage)({ ...t, stage: a.TwoFactorAuthenticationDisableFlowStages[r - 1].stage });
            e.dispatch(n);
          }
          return Promise.resolve({ success: !0 });
        },
        l = (e) => {
          const { currentStage: t } = n(e);
          let r,
            o = s,
            i = c;
          if (a.TwoFactorAuthenticationDisableFlowConfig[t]) {
            const e = a.TwoFactorAuthenticationDisableFlowConfig[t];
            (i = e.backHandler || i), (o = e.currentHandler || o), (r = e.storeMapper);
          }
          return { currentHandler: o, backHandler: i, storeMapper: r };
        };
      t.continueTwoFactorAuthenticationDisableFlow = (e, t) => {
        const { storeService: r } = e,
          { currentHandler: a, storeMapper: o } = l(r);
        return i(e, a, o, t);
      };
      t.backTwoFactorAuthenticationDisableFlow = (e, t) => {
        const { storeService: r } = e,
          { backHandler: a, storeMapper: o } = l(r);
        return i(e, a, o, t);
      };
    },
    95475: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.twoFactorAuthenticationDisableFlow$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(18099);
      t.twoFactorAuthenticationDisableFlow$ = () =>
        (0, a.pipe)((0, o.map)(n.getTwoFactorAuthenticationDisableStageData), (0, o.distinctUntilChanged)());
    },
    24216: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.disableTwoFactorAuthenticationLogoutRequiredHandler = t.disableTwoFactorAuthenticationCodeHandler = void 0);
      const a = r(32626),
        o = r(51554),
        n = r(46796),
        i = r(5689),
        s = r(71291),
        c = r(18099),
        l = r(16593),
        d = r(1965),
        u = {
          [a.TwoFactorAuthenticationType.DEVICE_REGISTRATION]: { handler: n.disableTwoFactorAuthenticationTOTP1Handler, showLoading: !1 },
          [a.TwoFactorAuthenticationType.LOGIN]: { handler: n.disableTwoFactorAuthenticationTOTP2Handler, showLoading: !0 }
        };
      t.disableTwoFactorAuthenticationCodeHandler = async (e, t, r) => {
        const l = r.target;
        if (l) {
          const { storeService: r } = e,
            a = (0, o.updateTwoFactorAuthenticationStage)({ ...t, stage: l, stageData: void 0 });
          return r.dispatch(a), { success: !0 };
        }
        return await (async (e, t, r) => {
          const { storeService: l } = e,
            d = (e) => {
              const t = (0, o.updateTwoFactorAuthenticationStage)({ ...e });
              l.dispatch(t);
            };
          try {
            const p = (0, c.getTwoFactorAuthenticationDisableFlowData)(l.getState()),
              S = (0, i.twoFactorAuthenticationInfoSelector)(l.getState());
            if (S.status === a.TwoFactorAuthenticationInfoRequestStatus.READY) {
              const { type: i } = S,
                { authenticationCode: c } = r,
                m = await (0, s.performTotpVerificationService)(e, c);
              if (m.success) {
                const { authTicket: r } = m;
                if (u[i]) {
                  const { handler: s, showLoading: c } = u[i];
                  c && d({ ...t, stage: a.TwoFactorAuthenticationDisableStages.FINALIZING_CHANGES });
                  const S = await s(e, r);
                  if (S.success)
                    if (S.logoutRequired) {
                      const e = { ...p, logoutRequired: S.logoutRequired };
                      d({ ...t, stage: a.TwoFactorAuthenticationDisableStages.LOGOUT_REQUIRED, flowData: e });
                    } else
                      await (0, n.refreshTwoFactorAuthenticationInfoHandler)(e),
                        d({ ...t, stage: a.TwoFactorAuthenticationDisableStages.SUCCESS }),
                        l.dispatch((0, o.stopTwoFactorAuthenticationStage)());
                  else d({ ...t, stage: a.TwoFactorAuthenticationDisableStages.GENERIC_ERROR, stageData: { ...S } });
                } else
                  d({
                    ...t,
                    stage: a.TwoFactorAuthenticationDisableStages.GENERIC_ERROR,
                    stageData: { success: !1, error: { code: a.AuthenticationCode.UNEXPECTED_OTP_TYPE } }
                  });
              } else d({ ...t, stageData: m });
            } else
              d({
                ...t,
                stage: a.TwoFactorAuthenticationDisableStages.GENERIC_ERROR,
                stageData: { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_ERROR } }
              });
          } catch (e) {
            d({ ...t, stageData: { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_ERROR } } });
          }
          return { success: !0 };
        })(e, t, r);
      };
      t.disableTwoFactorAuthenticationLogoutRequiredHandler = async (e) => {
        const { storeService: t, storageService: r, sessionService: a, applicationModulesAccess: n } = e,
          i = (0, l.userLoginSelector)(t.getState());
        return (
          t.dispatch((0, o.stopTwoFactorAuthenticationStage)()),
          i && (await (0, d.wipeOutLocalAccounts)(r, n, [i])),
          await a.close(),
          { success: !0 }
        );
      };
    },
    73714: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.endTwoFactorAuthenticationDisableStoreMapper = t.startTwoFactorAuthenticationDisableStoreMapper = void 0);
      const a = r(56915);
      t.startTwoFactorAuthenticationDisableStoreMapper = (e) => {
        const t = e.getState();
        return { stage: void 0, stageData: void 0, flowData: { otpType: (0, a.otpTypeSelector)(t) } };
      };
      t.endTwoFactorAuthenticationDisableStoreMapper = () => ({ stage: void 0, stageData: void 0, flowData: void 0 });
    },
    18747: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.disableTwoFactorAuthenticationBackupCodeViewMapper = t.disableTwoFactorAuthenticationCodeViewMapper = void 0);
      const a = r(32626);
      t.disableTwoFactorAuthenticationCodeViewMapper = (e) => {
        const { stageData: t } = e.userSession.twoFactorAuthenticationDisableFlow;
        if (t && !t.success) {
          const { error: e } = t;
          return { success: !1, error: e };
        }
      };
      t.disableTwoFactorAuthenticationBackupCodeViewMapper = (e) => {
        const { stageData: t } = e.userSession.twoFactorAuthenticationDisableFlow;
        if (t && !t.success) {
          const { error: e } = t;
          return e.code === a.AuthenticationCode.OTP_NOT_VALID
            ? { success: !1, error: { code: a.AuthenticationCode.BACKUP_CODE_NOT_VALID } }
            : { success: !1, error: e };
        }
      };
    },
    53325: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(17303),
        o = r(69631),
        n = r(66574);
      t.config = {
        commands: {
          startTwoFactorAuthenticationEnableFlow: { handler: a.startTwoFactorAuthenticationEnableFlow },
          continueTwoFactorAuthenticationEnableFlow: { handler: a.continueTwoFactorAuthenticationEnableFlow },
          backTwoFactorAuthenticationEnableFlow: { handler: a.backTwoFactorAuthenticationEnableFlow },
          stopTwoFactorAuthenticationEnableFlow: { handler: a.stopTwoFactorAuthenticationEnableFlow }
        },
        queries: { getTwoFactorAuthenticationEnableStage: { selector: o.getTwoFactorAuthenticationEnableStageData } },
        liveQueries: { liveTwoFactorAuthenticationEnableStage: { operator: n.twoFactorAuthenticationEnableFlow$ } }
      };
    },
    44527: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.enableTwoFactorAuthenticationBackupCodesHandler = void 0);
      const a = r(32626),
        o = r(15441),
        n = r(69631);
      t.enableTwoFactorAuthenticationBackupCodesHandler = async (e, t) => {
        const { storeService: r } = e,
          i = (0, n.getTwoFactorAuthenticationEnableFlowData)(r.getState());
        return (
          (0, o.updateStore)(e, {
            ...t,
            stage: i.logoutRequired ? a.TwoFactorAuthenticationEnableStages.LOGOUT_REQUIRED : a.TwoFactorAuthenticationEnableStages.SUCCESS
          }),
          { success: !0 }
        );
      };
    },
    72387: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.enableTwoFactorAuthenticationBackupPhoneHandler = void 0);
      const a = r(32626),
        o = r(46298),
        n = r(15441),
        i = r(69631),
        s = r(71291);
      t.enableTwoFactorAuthenticationBackupPhoneHandler = async (e, t, r) => {
        const { storeService: c } = e;
        let l = (0, i.getTwoFactorAuthenticationEnableFlowData)(c.getState());
        const d = await (0, s.requestTOTPActivationService)(e, { ...r, country: (0, o.makeSafeCountry)(r.countryCode) });
        if (d.success) {
          const { seed: o, uri: i, recoveryKeys: s, serverKey: c } = d,
            { authenticationType: u } = l;
          u === a.TwoFactorAuthenticationType.LOGIN && (l[a.TwoFactorAuthenticationType.LOGIN].serverKey = c),
            (l = { ...l, seed: o, uri: i, recoveryKeys: s }),
            (0, n.updateStore)(e, {
              ...t,
              stageData: { ...d },
              flowData: { ...l, savedValues: { ...l?.savedValues, savedCountryCode: r.countryCode, savedPhoneNumber: r.phoneNumber } },
              stage: a.TwoFactorAuthenticationEnableStages.QR_CODE
            });
        } else (0, n.updateStore)(e, { ...t, stageData: { ...d } });
        return Promise.resolve({ success: !0 });
      };
    },
    14732: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.enableTwoFactorAuthenticationCodeHandler = void 0);
      const a = r(32626),
        o = r(15441),
        n = r(69631),
        i = r(86370),
        s = r(52284),
        c = r(46796),
        l = r(71291),
        d = {
          [a.TwoFactorAuthenticationType.DEVICE_REGISTRATION]: { handler: i.enableTwoFactorAuthenticationTOTP1Handler, showLoading: !1 },
          [a.TwoFactorAuthenticationType.LOGIN]: {
            handler: s.enableTwoFactorAuthenticationTOTP2Handler,
            showLoading: !0,
            errorStage: a.TwoFactorAuthenticationEnableStages.GENERIC_ERROR
          }
        };
      t.enableTwoFactorAuthenticationCodeHandler = async (e, t, { authenticationCode: r }) => {
        const { storeService: i } = e;
        try {
          const s = (0, n.getTwoFactorAuthenticationEnableFlowData)(i.getState()),
            { authenticationType: u } = s,
            p = await (0, l.performTotpVerificationService)(e, r, !0);
          if (!p.success) return (0, o.updateStore)(e, { ...t, stageData: p }), { success: !1 };
          if (d[u]) {
            const { authTicket: r } = p,
              n = s[u],
              { handler: i, showLoading: l, errorStage: S } = d[u];
            l && (0, o.updateStore)(e, { ...t, stage: a.TwoFactorAuthenticationEnableStages.FINALIZING_CHANGES });
            const m = await i(e, r, n);
            if (m.success) {
              m.logoutRequired || (await (0, c.refreshTwoFactorAuthenticationInfoHandler)(e));
              const r = { ...s, logoutRequired: m.logoutRequired };
              (0, o.updateStore)(e, { ...t, stage: a.TwoFactorAuthenticationEnableStages.BACKUP_CODES, flowData: r });
            } else
              (0, o.updateStore)(e, {
                ...t,
                stage: S ? a.TwoFactorAuthenticationEnableStages.GENERIC_ERROR : a.TwoFactorAuthenticationEnableStages.AUTHENTICATION_CODE,
                stageData: { ...m }
              });
          } else (0, o.updateStore)(e, { ...t, stage: a.TwoFactorAuthenticationEnableStages.GENERIC_ERROR, stageData: { success: !1 } });
          return { success: !0 };
        } catch (r) {
          return (
            (0, o.updateStore)(e, { ...t, stageData: { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_ERROR } } }),
            { success: !1 }
          );
        }
      };
    },
    68513: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.enableTwoFactorAuthenticationLogoutRequiredHandler = void 0);
      const a = r(16593),
        o = r(1965),
        n = r(19546);
      t.enableTwoFactorAuthenticationLogoutRequiredHandler = async (e) => {
        const { storeService: t, storageService: r, sessionService: i, applicationModulesAccess: s } = e,
          c = (0, a.userLoginSelector)(t.getState());
        return (
          t.dispatch((0, n.stopTwoFactorAuthenticationStage)()),
          c && (await (0, o.wipeOutLocalAccounts)(r, s, [c])),
          await i.close(),
          { success: !0 }
        );
      };
    },
    33778: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.enableTwoFactorAuthenticationTypeHandler = void 0);
      const a = r(32626),
        o = r(57903),
        n = r(19546),
        i = r(69631),
        s = r(15441),
        c = r(16194),
        l = r(16593),
        d = r(46298),
        u = r(61984),
        p = r(93039),
        S = r(32626);
      t.enableTwoFactorAuthenticationTypeHandler = async (e, t, { authenticationType: r }) => {
        const { storeService: m } = e,
          g = (0, i.getTwoFactorAuthenticationEnableFlowData)(m.getState());
        if (r === S.TwoFactorAuthenticationType.LOGIN)
          try {
            const i = (0, n.updateTwoFactorAuthenticationStage)({ ...t, stage: a.TwoFactorAuthenticationEnableStages.LOADING });
            m.dispatch(i);
            const { eventLoggerService: y } = e,
              h = m.getState(),
              v = (0, l.userLoginSelector)(h);
            if (!v)
              return (
                (0, s.updateStore)(e, { ...t, stage: a.TwoFactorAuthenticationEnableStages.GENERIC_ERROR }),
                Promise.resolve({ success: !1 })
              );
            if (!(await (0, o.waitUntilSyncComplete)(m)))
              return (
                (0, s.updateStore)(e, { ...t, stage: a.TwoFactorAuthenticationEnableStages.GENERIC_ERROR }),
                Promise.resolve({ success: !1 })
              );
            m.dispatch((0, c.changeMPStart)());
            const f = await (0, d.getDataForMasterPasswordChange)(m, v, {});
            if ((0, d.isApiError)(f))
              (0, u.logChangeMasterPasswordError)(y, p.ChangeMasterPasswordError.DownloadError),
                m.dispatch((0, c.changeMPDone)()),
                (0, s.updateStore)(e, { ...t, stage: a.TwoFactorAuthenticationEnableStages.GENERIC_ERROR });
            else {
              const {
                  data: { transactions: e, sharingKeys: o },
                  timestamp: i
                } = f,
                s = (0, n.updateTwoFactorAuthenticationStage)({
                  ...t,
                  flowData: {
                    ...g,
                    authenticationType: r,
                    [S.TwoFactorAuthenticationType.LOGIN]: { transactions: e, sharingKeys: o, timestamp: i, serverKey: "" },
                    savedValues: { ...g?.savedValues, savedAuthenticationType: r }
                  },
                  stage: a.TwoFactorAuthenticationEnableStages.BACKUP_PHONE
                });
              m.dispatch(s);
            }
          } catch (r) {
            m.dispatch((0, c.changeMPDone)()), (0, s.updateStore)(e, { ...t, stage: a.TwoFactorAuthenticationEnableStages.GENERIC_ERROR });
          }
        else {
          const e = (0, n.updateTwoFactorAuthenticationStage)({
            ...t,
            flowData: { ...g, authenticationType: r, savedValues: { ...g?.savedValues, savedAuthenticationType: r } },
            stage: a.TwoFactorAuthenticationEnableStages.BACKUP_PHONE
          });
          m.dispatch(e);
        }
        return Promise.resolve({ success: !0 });
      };
    },
    46667: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(14732), t), o(r(72387), t), o(r(33778), t), o(r(44527), t), o(r(68513), t);
    },
    48277: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stopTwoFactorAuthenticationStage =
          t.updateTwoFactorAuthenticationStage =
          t.UPDATE_TWO_FACTOR_AUTHENTICATION_ENABLE_STAGE =
            void 0),
        (t.UPDATE_TWO_FACTOR_AUTHENTICATION_ENABLE_STAGE = "UPDATE_TWO_FACTOR_AUTHENTICATION_ENABLE_STAGE");
      t.updateTwoFactorAuthenticationStage = (e) => ({ type: t.UPDATE_TWO_FACTOR_AUTHENTICATION_ENABLE_STAGE, data: e });
      t.stopTwoFactorAuthenticationStage = () => ({ type: t.UPDATE_TWO_FACTOR_AUTHENTICATION_ENABLE_STAGE, data: { stage: void 0 } });
    },
    19546: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.twoFactorAuthenticationEnableFlow = t.stopTwoFactorAuthenticationStage = t.updateTwoFactorAuthenticationStage = void 0);
      var a = r(48277);
      Object.defineProperty(t, "updateTwoFactorAuthenticationStage", {
        enumerable: !0,
        get: function () {
          return a.updateTwoFactorAuthenticationStage;
        }
      }),
        Object.defineProperty(t, "stopTwoFactorAuthenticationStage", {
          enumerable: !0,
          get: function () {
            return a.stopTwoFactorAuthenticationStage;
          }
        });
      var o = r(15896);
      Object.defineProperty(t, "twoFactorAuthenticationEnableFlow", {
        enumerable: !0,
        get: function () {
          return o.twoFactorAuthenticationEnableFlow;
        }
      });
    },
    15896: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.twoFactorAuthenticationEnableFlow = t.getEmptyTwoFactorAuthenticationEnable = void 0);
      const a = r(48277);
      t.getEmptyTwoFactorAuthenticationEnable = () => ({ stage: void 0 });
      t.twoFactorAuthenticationEnableFlow = (e = (0, t.getEmptyTwoFactorAuthenticationEnable)(), r) =>
        r.type === a.UPDATE_TWO_FACTOR_AUTHENTICATION_ENABLE_STAGE ? { ...e, ...r.data } : e;
    },
    69631: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getTwoFactorAuthenticationEnableFlowData = t.getTwoFactorAuthenticationEnableStageData = void 0);
      const a = r(13610);
      t.getTwoFactorAuthenticationEnableStageData = (e) => {
        const { stage: t } = e.userSession.twoFactorAuthenticationEnableFlow,
          r = a.TwoFactorAuthenticationEnableFlowConfig?.[t]?.viewMapper,
          o = e.userSession.twoFactorAuthenticationEnableFlow?.flowData?.savedValues;
        return { stage: t, viewData: r ? r(e) : void 0, savedValues: o };
      };
      t.getTwoFactorAuthenticationEnableFlowData = (e) => {
        const { flowData: t } = e.userSession.twoFactorAuthenticationEnableFlow;
        return t;
      };
    },
    13610: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TwoFactorAuthenticationEnableFlowStages = t.TwoFactorAuthenticationEnableFlowConfig = void 0);
      const a = r(32626),
        o = r(62669),
        n = r(58206),
        i = r(46667),
        s = r(46796);
      (t.TwoFactorAuthenticationEnableFlowConfig = {
        start: { storeMapper: o.startTwoFactorAuthenticationEnableStoreMapper },
        stop: { currentHandler: s.endTwoFactorAuthenticationHandler, storeMapper: o.endTwoFactorAuthenticationEnableStoreMapper },
        end: { currentHandler: s.endTwoFactorAuthenticationHandler, storeMapper: o.endTwoFactorAuthenticationEnableStoreMapper },
        [a.TwoFactorAuthenticationEnableStages.AUTHENTICATION_TYPE]: {
          currentHandler: i.enableTwoFactorAuthenticationTypeHandler,
          viewMapper: n.enableTwoFactorAuthenticationTypeViewMapper
        },
        [a.TwoFactorAuthenticationEnableStages.BACKUP_PHONE]: {
          currentHandler: i.enableTwoFactorAuthenticationBackupPhoneHandler,
          viewMapper: n.enableTwoFactorAuthenticationBackupPhoneViewMapper
        },
        [a.TwoFactorAuthenticationEnableStages.QR_CODE]: { viewMapper: n.enableTwoFactorAuthenticationQRCodeViewMapper },
        [a.TwoFactorAuthenticationEnableStages.AUTHENTICATION_CODE]: {
          currentHandler: i.enableTwoFactorAuthenticationCodeHandler,
          viewMapper: n.enableTwoFactorAuthenticationCodeViewMapper
        },
        [a.TwoFactorAuthenticationEnableStages.BACKUP_CODES]: {
          currentHandler: i.enableTwoFactorAuthenticationBackupCodesHandler,
          viewMapper: n.enableTwoFactorAuthenticationBackupCodesViewMapper
        },
        [a.TwoFactorAuthenticationEnableStages.LOGOUT_REQUIRED]: { currentHandler: i.enableTwoFactorAuthenticationLogoutRequiredHandler }
      }),
        (t.TwoFactorAuthenticationEnableFlowStages = [
          { stage: a.TwoFactorAuthenticationEnableStages.AUTHENTICATION_TYPE },
          { stage: a.TwoFactorAuthenticationEnableStages.BACKUP_PHONE },
          { stage: a.TwoFactorAuthenticationEnableStages.QR_CODE },
          { stage: a.TwoFactorAuthenticationEnableStages.AUTHENTICATION_CODE },
          { stage: a.TwoFactorAuthenticationEnableStages.FINALIZING_CHANGES },
          { stage: a.TwoFactorAuthenticationEnableStages.BACKUP_CODES },
          { stage: a.TwoFactorAuthenticationEnableStages.SUCCESS }
        ]);
    },
    17303: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.backTwoFactorAuthenticationEnableFlow =
          t.continueTwoFactorAuthenticationEnableFlow =
          t.stopTwoFactorAuthenticationEnableFlow =
          t.startTwoFactorAuthenticationEnableFlow =
            void 0);
      const a = r(13610),
        o = r(19546),
        n = (e) => e.userSession.twoFactorAuthenticationEnableFlow,
        i = (e) => {
          const { stage: t } = n(e.getState());
          return { currentIndex: a.TwoFactorAuthenticationEnableFlowStages.findIndex((e) => e.stage === t), currentStage: t };
        };
      t.startTwoFactorAuthenticationEnableFlow = ({ storeService: e }) => {
        const { storeMapper: t } = a.TwoFactorAuthenticationEnableFlowConfig.start,
          r = t ? t(e) : void 0,
          n = (0, o.updateTwoFactorAuthenticationStage)({ ...r, stage: a.TwoFactorAuthenticationEnableFlowStages[0].stage });
        return e.dispatch(n), Promise.resolve({ success: !0 });
      };
      t.stopTwoFactorAuthenticationEnableFlow = (e) => {
        const { storeService: t } = e;
        t.dispatch((0, o.stopTwoFactorAuthenticationStage)());
        const { currentHandler: r, storeMapper: n } = a.TwoFactorAuthenticationEnableFlowConfig.stop,
          i = n ? n(t) : void 0;
        return r ? r(e, i) : Promise.resolve({ success: !0 });
      };
      const s = (e, t, r, a) => {
          const { storeService: o } = e;
          return t(e, r ? r(o) : void 0, a);
        },
        c = ({ storeService: e }, t) => {
          const { currentIndex: r } = i(e);
          if (r !== a.TwoFactorAuthenticationEnableFlowStages.length - 1) {
            const n = (0, o.updateTwoFactorAuthenticationStage)({ ...t, stage: a.TwoFactorAuthenticationEnableFlowStages[r + 1].stage });
            e.dispatch(n);
          }
          return Promise.resolve({ success: !0 });
        },
        l = ({ storeService: e }, t) => {
          const { currentIndex: r } = i(e);
          if (0 !== r) {
            const n = (0, o.updateTwoFactorAuthenticationStage)({ ...t, stage: a.TwoFactorAuthenticationEnableFlowStages[r - 1].stage });
            e.dispatch(n);
          }
          return Promise.resolve({ success: !0 });
        },
        d = (e) => {
          const { currentStage: t } = i(e);
          let r,
            o = c,
            n = l;
          if (a.TwoFactorAuthenticationEnableFlowConfig[t]) {
            const e = a.TwoFactorAuthenticationEnableFlowConfig[t];
            (n = e.backHandler || n), (o = e.currentHandler || o), (r = e.storeMapper);
          }
          return { currentHandler: o, backHandler: n, storeMapper: r };
        };
      t.continueTwoFactorAuthenticationEnableFlow = (e, t) => {
        const { storeService: r } = e,
          { currentHandler: a, storeMapper: o } = d(r);
        return s(e, a, o, t);
      };
      t.backTwoFactorAuthenticationEnableFlow = (e, t) => {
        const { storeService: r } = e,
          { backHandler: a, storeMapper: i } = d(r);
        return (
          ((e) => {
            const t = n(e.getState()),
              r = (0, o.updateTwoFactorAuthenticationStage)({ ...t, stageData: void 0 });
            e.dispatch(r);
          })(r),
          s(e, a, i, t)
        );
      };
    },
    15441: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateStore = void 0);
      const a = r(19546);
      t.updateStore = ({ storeService: e }, t) => {
        const r = (0, a.updateTwoFactorAuthenticationStage)({ ...t });
        e.dispatch(r);
      };
    },
    66574: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.twoFactorAuthenticationEnableFlow$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(69631);
      t.twoFactorAuthenticationEnableFlow$ = () =>
        (0, a.pipe)((0, o.map)(n.getTwoFactorAuthenticationEnableStageData), (0, o.distinctUntilChanged)());
    },
    62669: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.endTwoFactorAuthenticationEnableStoreMapper = t.startTwoFactorAuthenticationEnableStoreMapper = void 0);
      t.startTwoFactorAuthenticationEnableStoreMapper = () => ({ stage: void 0, stageData: void 0, flowData: void 0 });
      t.endTwoFactorAuthenticationEnableStoreMapper = () => ({ stage: void 0, stageData: void 0, flowData: void 0 });
    },
    58206: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.enableTwoFactorAuthenticationBackupCodesViewMapper =
          t.enableTwoFactorAuthenticationCodeViewMapper =
          t.enableTwoFactorAuthenticationQRCodeViewMapper =
          t.enableTwoFactorAuthenticationBackupPhoneViewMapper =
          t.enableTwoFactorAuthenticationTypeViewMapper =
            void 0);
      const a = r(46298);
      t.enableTwoFactorAuthenticationTypeViewMapper = () => ({ currentStep: 1, totalSteps: 5 });
      t.enableTwoFactorAuthenticationBackupPhoneViewMapper = (e) => {
        const t = (0, a.makeSafeCountry)(e.device.platform.location.country),
          { stageData: r } = e.userSession.twoFactorAuthenticationEnableFlow;
        return { currentStep: 2, totalSteps: 5, countryCode: t, ...r };
      };
      t.enableTwoFactorAuthenticationQRCodeViewMapper = (e) => {
        const { uri: t, seed: r } = e.userSession.twoFactorAuthenticationEnableFlow.flowData;
        return { currentStep: 3, totalSteps: 5, uri: t, seed: r };
      };
      t.enableTwoFactorAuthenticationCodeViewMapper = (e) => {
        const { stageData: t } = e.userSession.twoFactorAuthenticationEnableFlow;
        if (t) {
          const { error: t } = e.userSession.twoFactorAuthenticationEnableFlow.stageData;
          return { currentStep: 4, totalSteps: 5, error: t };
        }
        return { currentStep: 4, totalSteps: 5 };
      };
      t.enableTwoFactorAuthenticationBackupCodesViewMapper = (e) => {
        const { recoveryKeys: t } = e.userSession.twoFactorAuthenticationEnableFlow.flowData;
        return { currentStep: 5, totalSteps: 5, recoveryKeys: t };
      };
    },
    6836: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TwoFactorAuthStatusError =
          t.TwoFactorAuthStatusRequested =
          t.TwoFactorAuthStatusUpdated =
          t.TWO_FACTOR_AUTHENTICATION_INFO_ERROR =
          t.TWO_FACTOR_AUTHENTICATION_INFO_REQUESTED =
          t.TWO_FACTOR_AUTHENTICATION_INFO_UPDATED =
            void 0),
        (t.TWO_FACTOR_AUTHENTICATION_INFO_UPDATED = "TWO_FACTOR_AUTHENTICATION_INFO_UPDATED"),
        (t.TWO_FACTOR_AUTHENTICATION_INFO_REQUESTED = "TWO_FACTOR_AUTHENTICATION_INFO_REQUESTED"),
        (t.TWO_FACTOR_AUTHENTICATION_INFO_ERROR = "TWO_FACTOR_AUTHENTICATION_INFO_ERROR");
      t.TwoFactorAuthStatusUpdated = (e) => ({ type: t.TWO_FACTOR_AUTHENTICATION_INFO_UPDATED, info: e });
      t.TwoFactorAuthStatusRequested = () => ({ type: t.TWO_FACTOR_AUTHENTICATION_INFO_REQUESTED });
      t.TwoFactorAuthStatusError = () => ({ type: t.TWO_FACTOR_AUTHENTICATION_INFO_ERROR });
    },
    96171: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TwoFactorAuthenticationReducer = t.getEmptyTwoFactorAuthenticationState = void 0);
      const a = r(32626),
        o = r(6836),
        n = r(16478);
      t.getEmptyTwoFactorAuthenticationState = () => ({ status: a.TwoFactorAuthenticationInfoRequestStatus.UNKNOWN });
      t.TwoFactorAuthenticationReducer = (e = (0, t.getEmptyTwoFactorAuthenticationState)(), r) => {
        const i = r?.info?.type;
        switch (r.type) {
          case o.TWO_FACTOR_AUTHENTICATION_INFO_REQUESTED:
            return { status: a.TwoFactorAuthenticationInfoRequestStatus.PENDING };
          case o.TWO_FACTOR_AUTHENTICATION_INFO_ERROR:
            return { status: a.TwoFactorAuthenticationInfoRequestStatus.ERROR };
          case o.TWO_FACTOR_AUTHENTICATION_INFO_UPDATED:
            return {
              ...r.info,
              isTwoFactorAuthenticationEnabled: n.TwoFactorAuthenticationEnabled.includes(i),
              status: a.TwoFactorAuthenticationInfoRequestStatus.READY
            };
          default:
            return e;
        }
      };
    },
    87463: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(40970),
        o = r(70245),
        n = r(60262),
        i = r(24217);
      t.config = {
        commands: {
          removeU2FAuthenticator: { handler: a.removeU2FAuthenticatorHandler },
          refreshU2FDevicesList: { handler: o.refreshU2FDevicesListHandler }
        },
        queries: { getU2FDevicesList: { selector: i.listU2FDevicesSelector } },
        liveQueries: { liveU2FDevicesList: { operator: n.listU2FDevices$ } }
      };
    },
    70245: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.refreshU2FDevicesListHandler = void 0);
      const a = r(32626),
        o = r(46298),
        n = r(16593),
        i = r(72355);
      t.refreshU2FDevicesListHandler = async (e) => {
        try {
          const { storeService: t } = e,
            r = t.isAuthenticated,
            s = (0, n.userLoginSelector)(t.getState());
          if (!s || !r) return { success: !1, error: { code: a.RefreshU2FErrorCode.UNKNOWN_ERROR } };
          const c = await (0, o.getU2FDevices)(t, s);
          return (0, o.isApiError)(c)
            ? { success: !1, error: { code: a.RefreshU2FErrorCode.UNKNOWN_ERROR } }
            : (t.dispatch((0, i.u2fDevicesUpdated)(c.u2fDevices)), { success: !0 });
        } catch (e) {
          return { success: !1, error: { code: a.RefreshU2FErrorCode.UNKNOWN_ERROR } };
        }
      };
    },
    40970: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeU2FAuthenticatorHandler = void 0);
      const a = r(32626),
        o = r(14656),
        n = r(92263),
        i = r(46298),
        s = r(70252),
        c = r(16593),
        l = r(28287),
        d = r(70245);
      t.removeU2FAuthenticatorHandler = async (e, t) => {
        try {
          const { storeService: r } = e,
            o = r.getState(),
            n = r.isAuthenticated,
            s = (0, c.userLoginSelector)(o);
          if (!s || !n) return { success: !1, error: { code: a.RemoveU2FAuthenticatorError.UNKNOWN_ERROR } };
          const { authenticationCode: u, keyHandle: p } = t,
            S = await (0, i.performTotpVerification)(r, { login: s, otp: u });
          if ((0, i.isApiError)(S)) return (0, l.handlePerformValidationError)(S, !0);
          const { authTicket: m } = S,
            g = await (0, i.removeU2FAuthenticator)(r, s, { authTicket: m, keyHandle: p });
          return (0, i.isApiError)(g)
            ? { success: !1, error: { code: a.RemoveU2FAuthenticatorError.UNKNOWN_ERROR } }
            : (await (0, d.refreshU2FDevicesListHandler)(e), { success: !0 });
        } catch (e) {
          const t = n.CarbonError.fromAnyError(e).addContextInfo("U2F", "removeU2FAuthenticatorHandler");
          return (
            (0, s.sendExceptionLog)({ error: t }),
            {
              success: !1,
              error: {
                code:
                  (0, n.isCarbonError)(e) && e.errorCode === o.HttpErrorCode.NETWORK_ERROR
                    ? a.AuthenticationCode.NETWORK_ERROR
                    : a.RemoveU2FAuthenticatorError.UNKNOWN_ERROR
              }
            }
          );
        }
      };
    },
    60262: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listU2FDevices$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(24217);
      t.listU2FDevices$ = () => (0, a.pipe)((0, o.map)(n.listU2FDevicesSelector), (0, o.distinctUntilChanged)());
    },
    24217: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listU2FDevicesSelector = void 0);
      t.listU2FDevicesSelector = (e) => e.authentication.u2f.u2fDevices;
    },
    16478: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ENFORCE_2FA_POLICY_REFRESH_TIMER_INTERVAL = t.TwoFactorAuthenticationEnabled = void 0);
      const a = r(32626);
      (t.TwoFactorAuthenticationEnabled = [
        a.TwoFactorAuthenticationType.DEVICE_REGISTRATION,
        a.TwoFactorAuthenticationType.LOGIN,
        a.TwoFactorAuthenticationType.SSO
      ]),
        (t.ENFORCE_2FA_POLICY_REFRESH_TIMER_INTERVAL = 9e5);
    },
    9819: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.disableTwoFactorAuthenticationTOTP1Handler = void 0);
      const a = r(32626),
        o = r(46298);
      t.disableTwoFactorAuthenticationTOTP1Handler = async (e, t) => {
        const { storeService: r } = e,
          { login: n } = r.getAccountInfo(),
          i = await (0, o.deactivateTotpVerification)(r, n, { authTicket: t });
        return (0, o.isApiError)(i) ? { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_ERROR } } : { success: !0 };
      };
    },
    99445: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.disableTwoFactorAuthenticationTOTP2Handler = void 0);
      const a = r(32626),
        o = r(61740),
        n = r(46298),
        i = r(33740),
        s = r(57903),
        c = r(16194),
        l = r(16593),
        d = r(16356),
        u = r(47820);
      t.disableTwoFactorAuthenticationTOTP2Handler = async (e, t) => {
        const { applicationModulesAccess: r, storeService: p, masterPasswordEncryptorService: S, sessionService: m, storageService: g } = e,
          y = p.getState(),
          h = (0, l.userLoginSelector)(y);
        try {
          if (!h) throw new Error("2FA Disable Flow - Login not available");
          if ((0, l.isRemoteKeyActivatedSelector)(y))
            throw (
              (console.error("Disable 2FA unavailable: RK account"), new Error("2FA Disable Flow - Unavailable due to RemoteKey Account"))
            );
          if (!(await (0, s.waitUntilSyncComplete)(p))) return { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_SYNC_ERROR } };
          p.dispatch((0, c.changeMPStart)());
          const v = r.createClients();
          await v.session.commands.prepareLocalDataFlush();
          const f = await (0, n.getDataForMasterPasswordChange)(p, h, {});
          if ((0, n.isApiError)(f)) throw new Error("2FA Disable Flow - Unable to getDataForMasterPasswordChange");
          const w = (0, l.serverKeySelector)(y);
          if (!(0, i.isOtpStatusValid)(f.otpStatus, w)) throw new Error("2FA Disable Flow - OTP status is invalid");
          const { timestamp: A } = f,
            { transactions: P, sharingKeys: T } = f.data,
            b = await (0, i.deCipherAllTransactions)(m, S, P, !1),
            I = p.getUserSession().masterPassword,
            C = e.localStorageService.getInstance(),
            E = await C.doesLocalKeyExist();
          let _ = null;
          E && (_ = await C.getLocalKey());
          const { publicKey: D } = T,
            O = await (0, i.decipherPrivateKey)(p, S, T);
          await (0, o.cleanRememberMeStorageData)(p, g);
          const M = "",
            N = (0, i.returnProperCryptoConfig)(p);
          S.setInstance({ raw: I }, M, N),
            p.dispatch((0, d.updateServerKey)(M)),
            await e.applicationModulesAccess
              .createClients()
              .session.commands.updateUserSessionKey({
                email: (0, l.userLoginSelector)(p.getState()),
                sessionKey: { type: "mp", masterPassword: (0, l.masterPasswordSelector)(p.getState()), secondaryKey: M }
              });
          const F = { type: "email_token" };
          p.dispatch((0, d.updateRemoteKey)(null));
          const U = await (0, i.cipherTransactionWithNewMP)(p, m, S, b, null, !1),
            L = await (0, i.cipherPrivateKey)(S, O),
            k = {
              timestamp: A,
              transactions: (0, i.formatTransaction)(U),
              updateVerification: F,
              sharingKeys: { publicKey: D, privateKey: L },
              authTicket: t
            },
            R = await (0, n.uploadDataForMasterPasswordChange)(p, h, k);
          if ((0, n.isApiError)(R))
            throw (
              ((0, i.revertOnError)(e, S, { currentPassword: I, serverKey: w }),
              new Error("2FA Disable Flow - Unable to uploadDataForMasterPasswordChange"))
            );
          _ && (await m.getInstance().user.persistLocalKey(_)),
            await v.session.commands.flushLocalData(),
            await (0, u.storeSessionCredentialForRecovery)(p, e.localStorageService);
        } catch (e) {
          return p.dispatch((0, c.changeMPDone)()), { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_ERROR } };
        }
        let v = !0;
        try {
          const e = await (0, n.confirmMasterPasswordChangeDone)(p, h, {});
          if ((0, n.isApiError)(e)) throw new Error("2FA Disable Flow - Failed to confirmMasterPasswordChangeDone");
          v = !1;
        } catch (e) {
          throw new Error("2FA Disable Flow - Failed to confirmMasterPasswordChangeDone");
        }
        return p.dispatch((0, c.changeMPDone)()), { success: !0, logoutRequired: v };
      };
    },
    86370: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.enableTwoFactorAuthenticationTOTP1Handler = void 0);
      const a = r(35823);
      t.enableTwoFactorAuthenticationTOTP1Handler = async (e, t) => await (0, a.completeTotpActivationHandler)(e, t);
    },
    52284: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.enableTwoFactorAuthenticationTOTP2Handler = void 0);
      const a = r(32626),
        o = r(61740),
        n = r(46298),
        i = r(33740),
        s = r(16593),
        c = r(47820),
        l = r(16194),
        d = r(16356);
      t.enableTwoFactorAuthenticationTOTP2Handler = async (e, t, r) => {
        const { timestamp: u, transactions: p, sharingKeys: S, serverKey: m } = r;
        if (!m) throw new Error("[2FA - Enable] - Empty server key");
        const { applicationModulesAccess: g, storeService: y, masterPasswordEncryptorService: h, sessionService: v, storageService: f } = e,
          w = y.getState();
        if ((0, s.isRemoteKeyActivatedSelector)(w))
          return console.error("Enable 2FA unavailable: RK account"), { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_ERROR } };
        const A = g.createClients();
        await A.session.commands.prepareLocalDataFlush();
        const P = (0, s.userLoginSelector)(w);
        if (!P) return { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_ERROR } };
        const T = e.localStorageService.getInstance();
        let b = null;
        (await T.doesLocalKeyExist()) && (b = await T.getLocalKey());
        try {
          const r = await (0, i.deCipherAllTransactions)(v, h, p, !1),
            { publicKey: a } = S,
            l = await (0, i.decipherPrivateKey)(y, h, S);
          await (0, o.cleanRememberMeStorageData)(y, f);
          const g = { type: "totp_login", serverKey: m },
            w = (0, i.returnProperCryptoConfig)(y),
            T = y.getUserSession().masterPassword;
          h.setInstance({ raw: T }, m, w);
          const I = await (0, i.cipherTransactionWithNewMP)(y, v, h, r, null, !1),
            C = await (0, i.cipherPrivateKey)(h, l),
            E = {
              timestamp: u,
              transactions: (0, i.formatTransaction)(I),
              updateVerification: g,
              sharingKeys: { publicKey: a, privateKey: C },
              authTicket: t
            },
            _ = await (0, n.uploadDataForMasterPasswordChange)(y, P, E);
          if ((0, n.isApiError)(_)) throw new Error("2FA Enable Flow - Unable to uploadDataForMasterPasswordChange");
          y.dispatch((0, d.updateServerKey)(m)),
            await e.applicationModulesAccess
              .createClients()
              .session.commands.updateUserSessionKey({
                email: (0, s.userLoginSelector)(y.getState()),
                sessionKey: { type: "mp", masterPassword: (0, s.masterPasswordSelector)(y.getState()), secondaryKey: m }
              }),
            b && (await v.getInstance().user.persistLocalKey(b)),
            await A.session.commands.flushLocalData(),
            await (0, c.storeSessionCredentialForRecovery)(y, e.localStorageService);
        } catch (t) {
          return (
            ((e) => {
              const { storeService: t, masterPasswordEncryptorService: r, remoteDataEncryptorService: a } = e,
                o = t.getState(),
                n = (0, s.isRemoteKeyActivatedSelector)(o) ? a : r,
                c = t.getUserSession().masterPassword;
              (0, i.revertOnError)(e, n, { currentPassword: c, serverKey: "" });
            })(e),
            y.dispatch((0, l.changeMPDone)()),
            { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_ERROR } }
          );
        }
        let I = !0;
        try {
          const e = await (0, n.confirmMasterPasswordChangeDone)(y, P, {});
          if ((0, n.isApiError)(e)) throw new Error("2FA Enable Flow - Failed to confirmMasterPasswordChangeDone");
          I = !1;
        } catch (e) {}
        return y.dispatch((0, l.changeMPDone)()), { success: !0, logoutRequired: I };
      };
    },
    35823: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeTotpActivationHandler = void 0);
      const a = r(32626),
        o = r(46298),
        n = r(16593),
        i = r(34569);
      t.completeTotpActivationHandler = async (e, t) => {
        const { storeService: r } = e,
          s = r.getState(),
          c = (0, n.userLoginSelector)(s);
        if (!c) return { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_ERROR } };
        const l = await (0, i.completeTotpActivation)(r, c, { authTicket: t });
        return (0, o.isApiError)(l) ? { success: !1, error: { code: l.code } } : { success: !0 };
      };
    },
    49109: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.endTwoFactorAuthenticationHandler = void 0);
      const a = r(93039),
        o = r(16194);
      t.endTwoFactorAuthenticationHandler = async ({ sessionService: e, storeService: t }) => (
        t.dispatch((0, o.changeMPDone)()), await e.getInstance().user.attemptSync(a.Trigger.SettingsChange), { success: !0 }
      );
    },
    46796: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.endTwoFactorAuthenticationHandler =
          t.disableTwoFactorAuthenticationTOTP1Handler =
          t.disableTwoFactorAuthenticationTOTP2Handler =
          t.refreshTwoFactorAuthenticationInfoHandler =
            void 0);
      var a = r(24797);
      Object.defineProperty(t, "refreshTwoFactorAuthenticationInfoHandler", {
        enumerable: !0,
        get: function () {
          return a.refreshTwoFactorAuthenticationInfoHandler;
        }
      });
      var o = r(99445);
      Object.defineProperty(t, "disableTwoFactorAuthenticationTOTP2Handler", {
        enumerable: !0,
        get: function () {
          return o.disableTwoFactorAuthenticationTOTP2Handler;
        }
      });
      var n = r(9819);
      Object.defineProperty(t, "disableTwoFactorAuthenticationTOTP1Handler", {
        enumerable: !0,
        get: function () {
          return n.disableTwoFactorAuthenticationTOTP1Handler;
        }
      });
      var i = r(49109);
      Object.defineProperty(t, "endTwoFactorAuthenticationHandler", {
        enumerable: !0,
        get: function () {
          return i.endTwoFactorAuthenticationHandler;
        }
      });
    },
    24797: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.refreshTwoFactorAuthenticationInfoHandler = void 0);
      const a = r(16593),
        o = r(6836),
        n = r(71291);
      t.refreshTwoFactorAuthenticationInfoHandler = async (e) => {
        const { storeService: t, wsService: r } = e;
        try {
          const e = t.isAuthenticated,
            i = (0, a.userLoginSelector)(t.getState());
          if ((t.dispatch((0, o.TwoFactorAuthStatusRequested)()), !i || !e))
            return t.dispatch((0, o.TwoFactorAuthStatusError)()), { success: !1 };
          return !1 === (await (0, n.refreshTwoFactorAuthenticationInfoService)(t, r)).success
            ? (t.dispatch((0, o.TwoFactorAuthStatusError)()), { success: !1 })
            : { success: !0 };
        } catch (e) {
          return t.dispatch((0, o.TwoFactorAuthStatusError)()), { success: !1 };
        }
      };
    },
    43037: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.twoFactorAuthenticationInfo$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(5689);
      t.twoFactorAuthenticationInfo$ = () => (0, a.pipe)((0, o.map)(n.twoFactorAuthenticationInfoSelector), (0, o.distinctUntilChanged)());
    },
    5689: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.twoFactorAuthenticationInfoSelector = void 0);
      t.twoFactorAuthenticationInfoSelector = (e) => e.authentication.twoFactorAuthentication;
    },
    71291: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.requestTOTPActivationService = t.refreshTwoFactorAuthenticationInfoService = t.performTotpVerificationService = void 0);
      var a = r(14762);
      Object.defineProperty(t, "performTotpVerificationService", {
        enumerable: !0,
        get: function () {
          return a.performTotpVerificationService;
        }
      });
      var o = r(71938);
      Object.defineProperty(t, "refreshTwoFactorAuthenticationInfoService", {
        enumerable: !0,
        get: function () {
          return o.refreshTwoFactorAuthenticationInfoService;
        }
      });
      var n = r(56733);
      Object.defineProperty(t, "requestTOTPActivationService", {
        enumerable: !0,
        get: function () {
          return n.requestTOTPActivationService;
        }
      });
    },
    14762: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.performTotpVerificationService = void 0);
      const a = r(32626),
        o = r(46298),
        n = r(92263),
        i = r(14656),
        s = r(28287),
        c = r(16593);
      t.performTotpVerificationService = async (e, t, r = !1) => {
        const { storeService: l } = e,
          d = l.getState(),
          u = (0, c.userLoginSelector)(d);
        if (!u) return { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_ERROR } };
        try {
          const e = await (0, o.performTotpVerification)(l, { login: u, otp: t, activationFlow: r });
          if ((0, o.isApiError)(e)) return (0, s.handlePerformValidationError)(e, !0);
          const { authTicket: a } = e;
          return { success: !0, authTicket: a };
        } catch (e) {
          return {
            success: !1,
            error: {
              code:
                (0, n.isCarbonError)(e) && e.errorCode === i.HttpErrorCode.NETWORK_ERROR
                  ? a.AuthenticationCode.NETWORK_ERROR
                  : a.AuthenticationCode.UNKNOWN_ERROR
            }
          };
        }
      };
    },
    71938: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.refreshTwoFactorAuthenticationInfoService = void 0);
      const a = r(46298),
        o = r(16593),
        n = r(16478),
        i = r(56915),
        s = r(6836),
        c = r(32626),
        l = {
          email_token: c.TwoFactorAuthenticationType.EMAIL_TOKEN,
          totp_login: c.TwoFactorAuthenticationType.LOGIN,
          totp_device_registration: c.TwoFactorAuthenticationType.DEVICE_REGISTRATION,
          sso: c.TwoFactorAuthenticationType.SSO
        };
      t.refreshTwoFactorAuthenticationInfoService = async (e, t) => {
        try {
          const r = (0, o.userLoginSelector)(e.getState()),
            d = await (0, a.getTwoFactorAuthenticationStatus)(e, r);
          if ((0, a.isApiError)(d)) return { success: !1 };
          const u = l[d.type],
            p = n.TwoFactorAuthenticationEnabled.includes(u);
          let S = !1;
          const m = await t.premium.status({
              login: (0, o.userLoginSelector)(e.getState()),
              uki: (0, i.ukiSelector)(e.getState()),
              spaces: !0
            }),
            { spaces: g } = m;
          g &&
            (S = g.some((e) => {
              const {
                info: { twoFAEnforced: t }
              } = e;
              return c.ENFORCE_TWO_FACTOR_AUTHENTICATION_ENABLED_VALUES.includes(t);
            }));
          const y = !p && S,
            h = {
              ...d,
              isTwoFactorAuthenticationEnabled: p,
              isTwoFactorAuthenticationEnforced: S,
              shouldEnforceTwoFactorAuthentication: y,
              type: u
            };
          return e.dispatch((0, s.TwoFactorAuthStatusUpdated)(h)), { success: !0, info: h };
        } catch (e) {
          return { success: !1 };
        }
      };
    },
    56733: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestTOTPActivationService = void 0);
      const a = r(32626),
        o = r(46298),
        n = r(92263),
        i = r(14656),
        s = r(16593);
      t.requestTOTPActivationService = async (e, { phoneNumber: t, country: r }) => {
        try {
          const { storeService: n } = e,
            i = n.getState(),
            c = (0, s.userLoginSelector)(i);
          if (!c) return { success: !1, error: { code: a.AuthenticationCode.UNKNOWN_ERROR } };
          const l = await (0, o.requestTOTPActivation)(n, c, { phoneNumber: t, country: r });
          return (0, o.isApiError)(l) ? { success: !1, error: { code: l.code } } : { success: !0, ...l };
        } catch (e) {
          return {
            success: !1,
            error: {
              code:
                (0, n.isCarbonError)(e) && e.errorCode === i.HttpErrorCode.NETWORK_ERROR
                  ? a.AuthenticationCode.NETWORK_ERROR
                  : a.AuthenticationCode.UNKNOWN_ERROR
            }
          };
        }
      };
    },
    91178: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(41762),
        o = r(52198),
        n = r(29010),
        i = r(3433),
        s = r(22770),
        c = r(49904),
        l = r(56915),
        d = r(52056),
        u = r(89805),
        p = r(92694),
        S = r(33088),
        m = r(22170),
        g = r(82862);
      t.config = {
        commands: {
          enableWebAuthnAuthentication: { handler: p.enableWebAuthnAuthentication },
          initEnableWebAuthnAuthentication: { handler: u.initEnableWebAuthnAuthentication },
          initRegisterWebAuthnAuthenticator: { handler: a.initRegisterWebAuthnAuthenticator },
          registerWebAuthnAuthenticator: { handler: o.registerWebAuthnAuthenticator },
          refreshWebAuthnAuthenticators: { handler: i.refreshWebAuthnAuthenticators },
          refreshAvailableWebAuthnAuthenticators: { handler: n.refreshAvailableWebAuthnAuthenticators },
          initOpenSessionWithWebAuthnAuthenticator: { handler: s.initOpenSessionWithWebAuthnAuthenticator },
          openSessionWithWebAuthnAuthenticator: { handler: c.openSessionWithWebAuthnAuthenticator },
          disableWebAuthnAuthentication: { handler: S.disableWebAuthnAuthentication },
          removeWebAuthnAuthenticator: { handler: g.removeWebAuthnAuthenticator },
          initUserVerificationWithWebAuthn: { handler: m.initUserVerificationWithWebAuthn }
        },
        queries: {
          getWebAuthnAuthenticators: { selector: l.authenticatorsSelector },
          getWebAuthnAuthenticationOptedIn: { selector: l.webAuthnAuthenticationOptedInSelector }
        },
        liveQueries: {
          liveWebAuthnAuthenticators: { operator: d.webAuthnAuthenticators$ },
          liveWebAuthnAuthenticationOptedIn: { operator: d.webAuthnAuthenticationOptedIn$ }
        }
      };
    },
    79842: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PUBKEY_ALGORITHM_RSA_PKCS1256 = t.PUBKEY_ALGORITHM_ECDSA256 = void 0),
        (t.PUBKEY_ALGORITHM_ECDSA256 = -7),
        (t.PUBKEY_ALGORITHM_RSA_PKCS1256 = -257);
    },
    26942: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.buildAssertionPublicKeyOptions = t.buildAttestationPublicKeyOptions = void 0);
      const a = r(79842);
      (t.buildAttestationPublicKeyOptions = function (e, t, r, o, n, i) {
        return {
          rp: { id: e, name: "Dashlane" },
          user: { id: t, name: r, displayName: r },
          challenge: o,
          timeout: n,
          pubKeyCredParams: [
            { alg: a.PUBKEY_ALGORITHM_ECDSA256, type: "public-key" },
            { alg: a.PUBKEY_ALGORITHM_RSA_PKCS1256, type: "public-key" }
          ],
          excludeCredentials: i,
          authenticatorSelection: { userVerification: "discouraged" }
        };
      }),
        (t.buildAssertionPublicKeyOptions = function (e, t, r, a) {
          return { rpId: e, challenge: t, timeout: r, allowCredentials: a, userVerification: "discouraged" };
        });
    },
    52056: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.webAuthnAuthenticationOptedIn$ = t.webAuthnAuthenticators$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(56915);
      t.webAuthnAuthenticators$ = () => (0, a.pipe)((0, o.map)(n.authenticatorsSelector), (0, o.distinctUntilChanged)());
      t.webAuthnAuthenticationOptedIn$ = () =>
        (0, a.pipe)((0, o.map)(n.webAuthnAuthenticationOptedInSelector), (0, o.distinctUntilChanged)());
    },
    33088: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.disableWebAuthnAuthentication = void 0);
      const a = r(32626),
        o = r(16593),
        n = r(86903);
      t.disableWebAuthnAuthentication = async function (e) {
        const { webAuthnAuthenticationService: t, storeService: r } = e,
          i = (0, o.userLoginSelector)(r.getState());
        if (!i) return { success: !1, error: { code: a.DisableWebAuthnAuthenticationError.MISSING_LOGIN } };
        try {
          return (await t.deactivate(i))
            ? ((0, n.sendUserSettingsLog)(e), { success: !0 })
            : { success: !1, error: { code: a.DisableWebAuthnAuthenticationError.WEBAUTHN_SERVICE_DEACTIVATE_FAILED } };
        } catch (e) {
          return { success: !1, error: { code: a.DisableWebAuthnAuthenticationError.WEBAUTHN_SERVICE_DEACTIVATE_FAILED } };
        }
      };
    },
    92694: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.enableWebAuthnAuthentication = void 0);
      const a = r(32626),
        o = r(56915),
        n = r(16593),
        i = r(86903),
        s = {
          UNKNOWN_ERROR: { success: !1, error: { code: a.EnableWebAuthnAuthenticationError.UNKNOWN_ERROR } },
          WEBAUTHN_SERVICE_INIT_FAILED: { success: !1, error: { code: a.EnableWebAuthnAuthenticationError.WEBAUTHN_SERVICE_INIT_FAILED } },
          USER_HAS_OTP: { success: !1, error: { code: a.EnableWebAuthnAuthenticationError.USER_HAS_OTP } }
        };
      t.enableWebAuthnAuthentication = async function (e, t) {
        const { webAuthnAuthenticationService: r, storeService: c } = e,
          { authenticationType: l, credential: d, isRoaming: u } = t,
          p = (0, n.userLoginSelector)(c.getState());
        if ((0, o.hasOtp2TypeSelector)(c.getState())) return s.USER_HAS_OTP;
        try {
          switch (l) {
            case a.WebAuthnCallTypes.CREATE: {
              const t = await (async function (e, t, r, a) {
                const o = t.response,
                  n = {
                    authenticationType: "webauthn.create",
                    name: e,
                    isRoaming: r,
                    credential: { id: t.id, type: t.type, rawId: t.rawId, response: o }
                  };
                return (await a.initialize(n)) ? { success: !0 } : s.WEBAUTHN_SERVICE_INIT_FAILED;
              })(p, d, u, r);
              return t.success && (0, i.sendUserSettingsLog)(e), t;
            }
            case a.WebAuthnCallTypes.GET: {
              const t = await (async function (e, t) {
                const r = e.response,
                  a = { authenticationType: "webauthn.get", credential: { id: e.id, type: e.type, rawId: e.rawId, response: r } };
                return (await t.initialize(a)) ? { success: !0 } : s.WEBAUTHN_SERVICE_INIT_FAILED;
              })(d, r);
              return t.success && (0, i.sendUserSettingsLog)(e), t;
            }
            default:
              return s.UNKNOWN_ERROR;
          }
        } catch (e) {
          return s.UNKNOWN_ERROR;
        }
      };
    },
    89805: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.initEnableWebAuthnAuthentication = void 0);
      const a = r(35088),
        o = r(32626),
        n = r(46298),
        i = r(16593),
        s = r(56915),
        c = r(8246),
        l = r(3433),
        d = r(26942);
      t.initEnableWebAuthnAuthentication = async function (e, t) {
        const { storeService: r } = e,
          { relyingPartyId: u } = t,
          p = r.getState(),
          S = (0, i.userLoginSelector)(r.getState());
        let m = (0, s.webAuthnUserIdSelector)(p);
        m || ((m = (0, a.v4)()), r.dispatch((0, c.webAuthnUserIdUpdated)(m)));
        let g = (0, s.authenticatorsAsCredentialSelector)(p);
        (g && 0 !== g.length) ||
          (await (0, l.refreshWebAuthnAuthenticators)(e), (g = (0, s.authenticatorsAsCredentialSelector)(r.getState())));
        const y = g?.length > 0 ? o.WebAuthnCallTypes.GET : o.WebAuthnCallTypes.CREATE;
        try {
          const e = await (0, n.requestWebauthnRegistration)(r, S);
          if ((0, n.isApiError)(e)) return { success: !1, error: { code: o.InitEnableWebAuthnAuthenticationError.UNKNOWN_ERROR } };
          const { challenge: t, expirationDateUnix: a } = e;
          let i;
          return (
            (i =
              y === o.WebAuthnCallTypes.CREATE
                ? (0, d.buildAttestationPublicKeyOptions)(u, m, S, t, a, g)
                : (0, d.buildAssertionPublicKeyOptions)(u, t, a, g)),
            { success: !0, response: { publicKeyOptions: i, webAuthnType: y } }
          );
        } catch (e) {
          return { success: !1, error: { code: o.InitEnableWebAuthnAuthenticationError.UNKNOWN_ERROR } };
        }
      };
    },
    22770: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.initOpenSessionWithWebAuthnAuthenticator = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(68299),
        i = r(38945),
        s = r(658);
      t.initOpenSessionWithWebAuthnAuthenticator = async function (e, t) {
        const { relyingPartyId: r, login: c } = t,
          { webAuthnAuthenticationService: l } = e;
        try {
          if (!(await l.shouldTrigger(c)))
            return { success: !1, error: { code: o.InitOpenSessionWithWebAuthnAuthenticatorError.CANNOT_TRIGGER_WEBAUTHN_AUTHENTICATION } };
          (0, s.sendAskBiometricAuthenticationEventLog)(e, a.VerificationMode.None);
          const t = await (0, n.startWebAuthnAuthentication)(e, c, r);
          if (!1 === t.success) {
            let e = o.InitOpenSessionWithWebAuthnAuthenticatorError.UNKNOWN_ERROR;
            if (t.error.code === i.StartWebAuthnAuthenticationError.CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS)
              e = o.InitOpenSessionWithWebAuthnAuthenticatorError.UNAVAILABLE_AUTHENTICATORS;
            return { success: !1, error: { code: e } };
          }
          return {
            success: !0,
            response: {
              publicKeyOptions: t.response.publicKeyOptions,
              authenticatorsInfo: t.response.authenticatorsInfo.map(({ credentialId: e, isRoaming: t }) => ({
                credentialId: e,
                isRoaming: t
              }))
            }
          };
        } catch (e) {
          return { success: !1, error: { code: o.InitOpenSessionWithWebAuthnAuthenticatorError.UNKNOWN_ERROR } };
        }
      };
    },
    41762: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.initRegisterWebAuthnAuthenticator = void 0);
      const a = r(35088),
        o = r(32626),
        n = r(46298),
        i = r(8246),
        s = r(16593),
        c = r(56915),
        l = r(26942),
        d = r(3433);
      t.initRegisterWebAuthnAuthenticator = async function (e, t) {
        const { storeService: r } = e,
          { relyingPartyId: u } = t,
          p = (0, s.userLoginSelector)(r.getState());
        let S = (0, c.webAuthnUserIdSelector)(r.getState());
        S || ((S = (0, a.v4)()), r.dispatch((0, i.webAuthnUserIdUpdated)(S)));
        let m = (0, c.authenticatorsAsCredentialSelector)(r.getState());
        (m && 0 !== m.length) ||
          (await (0, d.refreshWebAuthnAuthenticators)(e), (m = (0, c.authenticatorsAsCredentialSelector)(r.getState())));
        try {
          const e = await (0, n.requestWebauthnRegistration)(r, p);
          if ((0, n.isApiError)(e)) return { success: !1, error: { code: o.InitRegisterWebAuthnAuthenticatorError.UNKNOWN_ERROR } };
          const { challenge: t, expirationDateUnix: a } = e;
          return { success: !0, response: { publicKeyOptions: (0, l.buildAttestationPublicKeyOptions)(u, S, p, t, a, m) } };
        } catch (e) {
          return { success: !1, error: { code: o.InitRegisterWebAuthnAuthenticatorError.UNKNOWN_ERROR } };
        }
      };
    },
    22170: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.initUserVerificationWithWebAuthn = void 0);
      const a = r(32626),
        o = r(68299),
        n = r(38945),
        i = r(16593),
        s = {
          [n.StartWebAuthnAuthenticationError.CANNOT_FETCH_WEBAUTHN_CHALLENGE]:
            a.InitUserVerificationWithWebAuthnError.CANNOT_FETCH_WEBAUTHN_CHALLENGE,
          [n.StartWebAuthnAuthenticationError.CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS]:
            a.InitUserVerificationWithWebAuthnError.CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS
        };
      t.initUserVerificationWithWebAuthn = async function (e, t) {
        try {
          const { storeService: r } = e,
            n = r.getState();
          if (!(0, i.isAuthenticatedSelector)(n))
            return { success: !1, error: { code: a.InitUserVerificationWithWebAuthnError.LOGGED_OUT } };
          const c = (0, i.userLoginSelector)(n),
            l = await (0, o.startWebAuthnAuthentication)(e, c, t.relyingPartyId);
          if (!1 === l.success) {
            return { success: !1, error: { code: s[l.error.code] ?? a.InitUserVerificationWithWebAuthnError.UNKNOWN_ERROR } };
          }
          return { success: !0, response: { publicKeyOptions: l.response.publicKeyOptions } };
        } catch (e) {
          return { success: !1, error: { code: a.InitUserVerificationWithWebAuthnError.UNKNOWN_ERROR } };
        }
      };
    },
    49904: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.openSessionWithWebAuthnAuthenticator = void 0);
      const a = r(32626),
        o = r(88610),
        n = r(658);
      t.openSessionWithWebAuthnAuthenticator = async function (e, t) {
        const { credential: r, login: i, isRoamingAuthenticator: s } = t,
          { storeService: c, webAuthnAuthenticationService: l } = e;
        try {
          const t = { authenticationType: "webauthn.get", credential: { id: r.id, type: r.type, rawId: r.rawId, response: r.response } };
          await l.process(i, t);
          const d = c.getUserSession().masterPassword;
          if (!d)
            return (
              (0, n.sendBiometricLoginErrorLog)(e),
              { success: !1, error: { code: a.OpenSessionWithWebAuthnAuthenticatorError.MP_MISSING_IN_SESSION_ERROR } }
            );
          const u = (0, o.makeLoginController)(e);
          return (
            await u.openSessionWithMasterPassword(i, d, { triggeredByRememberMeType: "webauthn", isWebAuthnAuthenticatorRoaming: s }),
            { success: !0 }
          );
        } catch (t) {
          return (
            (0, n.sendBiometricLoginErrorLog)(e),
            { success: !1, error: { code: a.OpenSessionWithWebAuthnAuthenticatorError.UNKNOWN_ERROR } }
          );
        }
      };
    },
    29010: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.refreshAvailableWebAuthnAuthenticators = void 0);
      const a = r(32626),
        o = r(56915),
        n = r(46298),
        i = r(8246);
      t.refreshAvailableWebAuthnAuthenticators = async function (e, t) {
        const { storeService: r } = e,
          { login: s } = t;
        if (!(0, o.sessionKeysSelector)(r.getState()))
          return { success: !1, error: { code: a.RefreshAvailableWebAuthnAuthenticatorsError.MISSING_SESSION_KEYS_IN_STORE } };
        try {
          const e = await (0, n.getAvailableWebAuthnAuthenticators)(r, s);
          if ((0, n.isApiError)(e)) return { success: !1, error: { code: a.RefreshAvailableWebAuthnAuthenticatorsError.UNKNOWN_ERROR } };
          const t = e.authenticators.map((e) => ({ ...e, canOpenSession: !0 }));
          return r.dispatch((0, i.webAuthnAvailableAuthenticatorsListUpdated)(t)), { success: !0, response: { authenticators: t } };
        } catch (e) {
          return { success: !1, error: { code: a.RefreshAvailableWebAuthnAuthenticatorsError.UNKNOWN_ERROR } };
        }
      };
    },
    3433: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.refreshWebAuthnAuthenticators = void 0);
      const a = r(32626),
        o = r(46298),
        n = r(16593),
        i = r(8246);
      t.refreshWebAuthnAuthenticators = async function (e) {
        const { storeService: t } = e,
          r = (0, n.userLoginSelector)(t.getState());
        try {
          const e = await (0, o.getWebAuthnAuthenticators)(t, r);
          if ((0, o.isApiError)(e)) return { success: !1, error: { code: a.RefreshWebAuthnAuthenticatorsError.UNKNOWN_ERROR } };
          const n = e.authenticators.map((e) => ({ ...e, canOpenSession: !1 }));
          return t.dispatch((0, i.webAuthnAuthenticatorsListUpdated)(n)), { success: !0, response: { authenticators: n } };
        } catch (e) {
          return { success: !1, error: { code: a.RefreshWebAuthnAuthenticatorsError.UNKNOWN_ERROR } };
        }
      };
    },
    52198: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.registerWebAuthnAuthenticator = void 0);
      const a = r(32626),
        o = r(16593),
        n = r(46298),
        i = r(56915),
        s = r(8246);
      t.registerWebAuthnAuthenticator = async function (e, t) {
        const { credential: r, isRoaming: c } = t,
          { storeService: l, webAuthnAuthenticationService: d } = e,
          u = l.getState(),
          p = (0, o.userLoginSelector)(u);
        if ((0, i.hasOtp2TypeSelector)(u)) return { success: !1, error: { code: a.RegisterWebAuthnAuthenticatorError.USER_HAS_OTP } };
        try {
          const e = {
            authenticationType: "webauthn.create",
            name: p,
            isRoaming: c,
            credential: { id: r.id, type: r.type, rawId: r.rawId, response: r.response }
          };
          if ((0, i.authenticatorsSelector)(u).length) {
            const t = await (0, n.completeWebAuthnAuthenticatorRegistration)(l, p, { authenticator: e });
            if ((0, n.isApiError)(t)) return { success: !1, error: { code: a.RegisterWebAuthnAuthenticatorError.UNKNOWN_ERROR } };
          } else await d.initialize(e);
          return (
            l.dispatch(
              (0, s.webAuthnAuthenticatorAdded)({ name: e.name, isRoaming: e.isRoaming, credentialId: e.credential.id, canOpenSession: !0 })
            ),
            { success: !0 }
          );
        } catch (e) {
          return { success: !1, error: { code: a.RegisterWebAuthnAuthenticatorError.UNKNOWN_ERROR } };
        }
      };
    },
    82862: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeWebAuthnAuthenticator = void 0);
      const a = r(32626),
        o = r(16593),
        n = r(46298),
        i = r(56915),
        s = r(33088),
        c = r(8246);
      async function l(e, t, r) {
        const o = await (0, n.deactivateWebAuthnAuthenticator)(e, t, { credentialId: r });
        return (0, n.isApiError)(o)
          ? { success: !1, error: { code: a.RemoveWebAuthnAuthenticatorError.CANNOT_REMOVE_WEBAUTHN_AUTHENTICATOR } }
          : { success: !0 };
      }
      t.removeWebAuthnAuthenticator = async function (e, t) {
        const { credentialId: r } = t,
          { storeService: n } = e,
          d = n.getState(),
          u = (0, o.userLoginSelector)(d),
          p = (0, i.webAuthnAuthenticationOptedInSelector)(d),
          S = (0, i.authenticatorsSelector)(d);
        try {
          let t = null;
          return (
            p && 1 === S.length ? (await (0, s.disableWebAuthnAuthentication)(e), (t = await l(n, u, r))) : (t = await l(n, u, r)),
            t.success && n.dispatch((0, c.webAuthnAuthenticatorRemoved)(r)),
            t
          );
        } catch (e) {
          return { success: !1, error: { code: a.RemoveWebAuthnAuthenticatorError.UNKNOWN_ERROR } };
        }
      };
    },
    68299: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.startWebAuthnAuthentication = void 0);
      const a = r(26942),
        o = r(29010),
        n = r(38945),
        i = r(46298);
      t.startWebAuthnAuthentication = async function (e, t, r) {
        const { storeService: s } = e,
          c = await (0, o.refreshAvailableWebAuthnAuthenticators)(e, { login: t });
        if (!c.success) return { success: !1, error: { code: n.StartWebAuthnAuthenticationError.CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS } };
        const l = c.response.authenticators.map((e) => ({ id: e.credentialId, type: "public-key" })),
          d = await (0, i.requestWebauthnOpenSession)(s, t);
        if ((0, i.isApiError)(d))
          return { success: !1, error: { code: n.StartWebAuthnAuthenticationError.CANNOT_FETCH_WEBAUTHN_CHALLENGE } };
        const { challenge: u, expirationDateUnix: p } = d;
        return {
          success: !0,
          response: { publicKeyOptions: (0, a.buildAssertionPublicKeyOptions)(r, u, p, l), authenticatorsInfo: c.response.authenticators }
        };
      };
    },
    38945: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StartWebAuthnAuthenticationError = void 0),
        (function (e) {
          (e.CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS = "CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS"),
            (e.CANNOT_FETCH_WEBAUTHN_CHALLENGE = "CANNOT_FETCH_WEBAUTHN_CHALLENGE");
        })(t.StartWebAuthnAuthenticationError || (t.StartWebAuthnAuthenticationError = {}));
    },
    44740: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(3158);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    90622: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bootstrap =
          t.getLocalAccounts =
          t.appKeysSelector =
          t.sessionKeysSelector =
          t.ukiSelector =
          t.deviceKeysSelector =
          t.authenticationReducer =
            void 0);
      var a = r(57334);
      Object.defineProperty(t, "authenticationReducer", {
        enumerable: !0,
        get: function () {
          return a.authenticationReducer;
        }
      });
      var o = r(56915);
      Object.defineProperty(t, "deviceKeysSelector", {
        enumerable: !0,
        get: function () {
          return o.deviceKeysSelector;
        }
      }),
        Object.defineProperty(t, "ukiSelector", {
          enumerable: !0,
          get: function () {
            return o.ukiSelector;
          }
        }),
        Object.defineProperty(t, "sessionKeysSelector", {
          enumerable: !0,
          get: function () {
            return o.sessionKeysSelector;
          }
        }),
        Object.defineProperty(t, "appKeysSelector", {
          enumerable: !0,
          get: function () {
            return o.appKeysSelector;
          }
        });
      var n = r(75226);
      Object.defineProperty(t, "getLocalAccounts", {
        enumerable: !0,
        get: function () {
          return n.getLocalAccounts;
        }
      });
      var i = r(44740);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return i.bootstrap;
        }
      });
    },
    54622: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.reactivationStatus$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(56915);
      t.reactivationStatus$ = () => (0, a.pipe)((0, o.map)(n.reactivationStatusSelector), (0, o.distinctUntilChanged)());
    },
    56915: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.availableUserVerificationMethodsSelector =
          t.reactivationStatusSelector =
          t.rememberMeFor14DaysOptedInSelector =
          t.webAuthnAuthenticationOptedInSelector =
          t.rememberMeTypeSelector =
          t.authenticatorsAsCredentialSelector =
          t.availableAuthenticatorsSelector =
          t.authenticatorsSelector =
          t.webAuthnUserIdSelector =
          t.webAuthnAuthenticationSelector =
          t.platformInfoSelector =
          t.hasOtp2TypeSelector =
          t.otpTypeSelector =
          t.userAuthenticationDataSelector =
          t.localUsersAuthenticationDataSelector =
          t.localAccountsListSelector =
          t.getUserDeviceWasRegisteredWithDeviceKeysSelector =
          t.sessionKeysSelector =
          t.getDeviceAccessKeySelector =
          t.getDeviceIdSelector =
          t.deviceKeysSelector =
          t.ukiSelector =
          t.dashlaneServerDeltaTimestampSelector =
          t.appKeysSelector =
            void 0);
      const a = r(32626),
        o = r(92215),
        n = r(2246),
        i = r(86797),
        s = r(38981),
        c = r(25421);
      t.appKeysSelector = (e) => e.userSession.sdkAuthentication.appKeys;
      t.dashlaneServerDeltaTimestampSelector = (e) => e.userSession.sdkAuthentication.dashlaneServerDeltaTimestamp;
      t.ukiSelector = (e) => {
        const t = e.userSession.localSettings.uki;
        return (
          t ||
          (e.authentication.currentUser &&
            e.authentication.currentUser.deviceKeys &&
            (0, o.convertDeviceKeysToUki)(e.authentication.currentUser.deviceKeys)) ||
          null
        );
      };
      t.deviceKeysSelector = (e) => {
        if (e.authentication.currentUser && e.authentication.currentUser.deviceKeys) return e.authentication.currentUser.deviceKeys;
        const t = e.userSession.localSettings.uki;
        return (0, o.convertUkiToDeviceKeys)(t);
      };
      t.getDeviceIdSelector = (e, t) => {
        const r = e.authentication.localUsers[t];
        return r && r.deviceAccessKey ? r.deviceAccessKey : (0, n.getCommonAppSetting)("deviceId") || null;
      };
      t.getDeviceAccessKeySelector = (e, r) => (0, t.getDeviceIdSelector)(e, r);
      t.sessionKeysSelector = ({ userSession: { session: e } }) =>
        Boolean(e.sessionKeys && e.sessionKeys.accessKey && e.sessionKeys.secretKey) ? { ...e.sessionKeys } : null;
      t.getUserDeviceWasRegisteredWithDeviceKeysSelector = (e, t) => {
        const r = e.authentication.localUsers[t];
        return !!r && !r.deviceRegisteredWithLegacyKey;
      };
      t.localAccountsListSelector = (e) => e.authentication.localAccounts.accountsList;
      t.localUsersAuthenticationDataSelector = (e) => e.authentication.localUsers;
      t.userAuthenticationDataSelector = (e) => e.authentication.currentUser;
      t.otpTypeSelector = (e) => (e.userSession?.account ? e.userSession.account.otpType : null);
      t.hasOtp2TypeSelector = (e) => (0, t.otpTypeSelector)(e) === i.OtpType.OTP_LOGIN;
      t.platformInfoSelector = (e) => e.device.platform.info;
      t.webAuthnAuthenticationSelector = (e) => e.authentication.webAuthnAuthentication;
      t.webAuthnUserIdSelector = (e) => e.authentication.webAuthnAuthentication.webAuthnUserId;
      t.authenticatorsSelector = (e) => e.authentication.webAuthnAuthentication.authenticators;
      t.availableAuthenticatorsSelector = (e) => e.authentication.webAuthnAuthentication.authenticators.filter((e) => e.canOpenSession);
      t.authenticatorsAsCredentialSelector = (e) =>
        (0, t.authenticatorsSelector)(e).map((e) => ({ id: e.credentialId, type: "public-key" }));
      t.rememberMeTypeSelector = (e) => e.authentication.currentUser.rememberMeType;
      t.webAuthnAuthenticationOptedInSelector = (e) => "webauthn" === (0, t.rememberMeTypeSelector)(e);
      t.rememberMeFor14DaysOptedInSelector = (e) => "autologin" === (0, t.rememberMeTypeSelector)(e);
      t.reactivationStatusSelector = (e) => e.authentication.localAccounts.reactivationStatus;
      t.availableUserVerificationMethodsSelector = (e) => {
        const r = [],
          o = "masterPassword" !== (0, c.accountAuthenticationTypeSelector)(e);
        return (
          (0, t.webAuthnAuthenticationOptedInSelector)(e) && r.push(a.UserVerificationMethods.Webauthn),
          (0, s.isSSOUserSelector)(e) || o || r.push(a.UserVerificationMethods.MasterPassword),
          Promise.resolve(r)
        );
      };
    },
    33045: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const a = r(14498);
      t.setupSubscriptions = async function (e, t) {
        e.sessionOpened.on(() => {
          (0, a.loadRememberMeTypeToStore)(t);
        });
      };
    },
    76839: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(90351);
      t.config = {
        commands: {},
        queries: {
          getSingleAddressForAutofill: { selector: a.autofillViewedAddressSelector },
          getMultipleAddressesForAutofill: { selector: a.autofillViewedQueriedAddressesSelector },
          getSingleBankAccountForAutofill: { selector: a.autofillViewedBankAccountSelector },
          getMultipleBankAccountsForAutofill: { selector: a.autofillViewedQueriedBankAccountsSelector },
          getSingleCompanyForAutofill: { selector: a.autofillViewedCompanySelector },
          getMultipleCompaniesForAutofill: { selector: a.autofillViewedQueriedCompaniesSelector },
          getSingleCredentialForAutofill: { selector: a.autofillViewedCredentialSelector },
          getMultipleCredentialsForAutofill: { selector: a.autofillViewedQueriedCredentialsByDomainSelector },
          getSingleDriverLicenseForAutofill: { selector: a.autofillViewedDriverLicenseSelector },
          getMultipleDriverLicensesForAutofill: { selector: a.autofillViewedQueriedDriverLicensesSelector },
          getSingleEmailForAutofill: { selector: a.autofillViewedEmailSelector },
          getMultipleEmailsForAutofill: { selector: a.autofillViewedQueriedEmailsSelector },
          getSingleFiscalIdForAutofill: { selector: a.autofillViewedFiscalIdSelector },
          getMultipleFiscalIdsForAutofill: { selector: a.autofillViewedQueriedFiscalIdsSelector },
          getSingleGeneratedPasswordForAutofill: { selector: a.autofillViewedGeneratedPasswordSelector },
          getMultipleGeneratedPasswordsForAutofill: { selector: a.autofillViewedQueriedGeneratedPasswordsSelector },
          getSingleIdCardForAutofill: { selector: a.autofillViewedIdCardSelector },
          getMultipleIdCardsForAutofill: { selector: a.autofillViewedQueriedIdCardsSelector },
          getSingleIdentityForAutofill: { selector: a.autofillViewedIdentitySelector },
          getMultipleIdentitiesForAutofill: { selector: a.autofillViewedQueriedIdentitiesSelector },
          getSingleNoteForAutofill: { selector: a.autofillViewedNoteSelector },
          getMultipleNotesForAutofill: { selector: a.autofillViewedQueriedNotesSelector },
          getSinglePasskeyForAutofill: { selector: a.autofillViewedPasskeySelector },
          getSinglePassportForAutofill: { selector: a.autofillViewedPassportSelector },
          getMultiplePassportsForAutofill: { selector: a.autofillViewedQueriedPassportsSelector },
          getSinglePaymentCardForAutofill: { selector: a.autofillViewedPaymentCardSelector },
          getMultiplePaymentCardsForAutofill: { selector: a.autofillViewedQueriedPaymentCardsSelector },
          getSinglePersonalWebsiteForAutofill: { selector: a.autofillViewedPersonalWebsiteSelector },
          getMultiplePersonalWebsitesForAutofill: { selector: a.autofillViewedQueriedPersonalWebsitesSelector },
          getSinglePhoneForAutofill: { selector: a.autofillViewedPhoneSelector },
          getMultiplePhonesForAutofill: { selector: a.autofillViewedQueriedPhonesSelector },
          getSingleSocialSecurityIdForAutofill: { selector: a.autofillViewedSocialSecurityIdSelector },
          getMultipleSocialSecurityIdsForAutofill: { selector: a.autofillViewedQueriedSocialSecurityIdsSelector },
          getAutofillSettingOnUrlForAutofill: { selector: a.getAutofillSettingOnUrlForAutofillSelector }
        },
        liveQueries: {}
      };
    },
    72227: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(76839);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    27923: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainMatchTypeForHermes = t.getAgeFromIdentity = t.defaultToZero = t.defaultToUS = t.defaultToEmptyString = void 0);
      const a = r(16516),
        o = r(32626),
        n = r(93039),
        i = r(72099),
        s = r(88083);
      (t.defaultToEmptyString = (0, a.defaultTo)("")),
        (t.defaultToUS = (0, a.defaultTo)(o.Country.US)),
        (t.defaultToZero = (0, a.defaultTo)(0));
      t.getAgeFromIdentity = (e) => {
        const t = new Date(0).getUTCFullYear(),
          r = (0, i.epochToDate)((0, i.vaultDateToViewDate)(e.BirthDate)),
          a = new Date(Date.now() - r.getTime());
        return Math.abs(a.getUTCFullYear() - t);
      };
      t.getDomainMatchTypeForHermes = (e, t) => {
        switch ((0, s.getCredentialByDomainMatchType)(e, t)) {
          case s.DomainMatchType.DashlaneDefinedLinkedWebsite:
            return n.MatchType.AssociatedWebsite;
          case s.DomainMatchType.UserDefinedLinkedWebsite:
            return n.MatchType.UserAssociatedWebsite;
          case s.DomainMatchType.None:
          case s.DomainMatchType.MainWebsite:
          default:
            return n.MatchType.Regular;
        }
      };
    },
    74219: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(72227);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    90351: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getAutofillSettingOnUrlForAutofillSelector =
          t.autofillViewedQueriedSocialSecurityIdsSelector =
          t.autofillViewedSocialSecurityIdSelector =
          t.autofillViewedQueriedPersonalWebsitesSelector =
          t.autofillViewedPersonalWebsiteSelector =
          t.autofillViewedQueriedPhonesSelector =
          t.autofillViewedPhoneSelector =
          t.autofillViewedQueriedPaymentCardsSelector =
          t.autofillViewedPaymentCardSelector =
          t.autofillViewedQueriedPassportsSelector =
          t.autofillViewedPassportSelector =
          t.autofillViewedPasskeySelector =
          t.autofillViewedQueriedNotesSelector =
          t.autofillViewedNoteSelector =
          t.autofillViewedQueriedIdentitiesSelector =
          t.autofillViewedIdentitySelector =
          t.autofillViewedQueriedIdCardsSelector =
          t.autofillViewedIdCardSelector =
          t.autofillViewedQueriedGeneratedPasswordsSelector =
          t.autofillViewedGeneratedPasswordSelector =
          t.autofillViewedQueriedFiscalIdsSelector =
          t.autofillViewedFiscalIdSelector =
          t.autofillViewedQueriedEmailsSelector =
          t.autofillViewedEmailSelector =
          t.autofillViewedQueriedDriverLicensesSelector =
          t.autofillViewedDriverLicenseSelector =
          t.autofillViewedQueriedCredentialsByDomainSelector =
          t.autofillViewedCredentialSelector =
          t.autofillViewedQueriedCompaniesSelector =
          t.autofillViewedCompanySelector =
          t.autofillViewedQueriedBankAccountsSelector =
          t.autofillViewedBankAccountSelector =
          t.autofillViewedQueriedAddressesSelector =
          t.autofillViewedAddressSelector =
            void 0);
      const a = r(16516),
        o = r(32626),
        n = r(21178),
        i = r(99281),
        s = r(16018),
        c = r(80624),
        l = r(19736),
        d = r(19325),
        u = r(41841),
        p = r(9774),
        S = r(26147),
        m = r(41092),
        g = r(92598),
        y = r(23437),
        h = r(81438),
        v = r(28074),
        f = r(65401),
        w = r(58235),
        A = r(81473),
        P = r(82439),
        T = r(27147),
        b = r(16593),
        I = r(63566),
        C = r(91210),
        E = r(52102),
        _ = r(83687),
        D = r(55346),
        O = r(18665);
      (t.autofillViewedAddressSelector = (e, t) => {
        const r = (0, i.addressSelector)(e, t);
        return (0, D.addressAutofillView)(r);
      }),
        (t.autofillViewedQueriedAddressesSelector = (0, a.compose)((0, I.viewListResults)(D.addressListView), i.queryAddressesSelector));
      (t.autofillViewedBankAccountSelector = (e, t) => {
        const r = (0, s.bankAccountSelector)(e, t);
        return (0, D.bankAccountAutofillView)(r);
      }),
        (t.autofillViewedQueriedBankAccountsSelector = (0, a.compose)(
          (0, I.viewListResults)(D.bankAccountListView),
          s.queryBankAccountsSelector
        ));
      (t.autofillViewedCompanySelector = (e, t) => {
        const r = (0, c.companySelector)(e, t);
        return (0, D.companyAutofillView)(r);
      }),
        (t.autofillViewedQueriedCompaniesSelector = (0, a.compose)((0, I.viewListResults)(D.companyListView), c.queryCompaniesSelector));
      t.autofillViewedCredentialSelector = (e, { credentialId: t, rootDomain: r }) => {
        const a = (0, l.credentialSelector)(e, t),
          o = (0, C.limitedSharingItemsSelector)(e),
          n = (0, E.sharingDataSelector)(e),
          i = (0, b.userIdSelector)(e),
          s = (0, _.getSharingStatusDetail)(o, n, i)(t);
        return (0, D.credentialAutofillView)(r, a, s);
      };
      t.autofillViewedQueriedCredentialsByDomainSelector = (e, t) => {
        const r = (0, C.limitedSharingItemsSelector)(e),
          a = (0, E.sharingDataSelector)(e),
          o = (0, b.userIdSelector)(e),
          n = (0, _.getSharingStatusDetail)(r, a, o),
          { domain: i, ...s } = t,
          c = (i ? (0, d.getQueryByDomainSelector)(i) : u.querySelector)(e, s),
          l = { ...c, items: c.items.map((e) => ({ credential: e, domain: i, sharingStatus: n(e.Id) })) };
        return (0, I.viewListResults)(D.credentialListView)(l);
      };
      (t.autofillViewedDriverLicenseSelector = (e, t) => {
        const r = (0, p.driverLicenseWithIdentitySelector)(e, t);
        return (0, D.driverLicenseAutofillView)(r);
      }),
        (t.autofillViewedQueriedDriverLicensesSelector = (0, a.compose)(
          (0, I.viewListResults)(D.driverLicenseListView),
          p.queryDriverLicensesSelector
        ));
      (t.autofillViewedEmailSelector = (e, t) => {
        const r = (0, S.emailSelector)(e, t);
        return (0, D.emailAutofillView)(r);
      }),
        (t.autofillViewedQueriedEmailsSelector = (0, a.compose)((0, I.viewListResults)(D.emailListView), S.queryEmailsSelector));
      (t.autofillViewedFiscalIdSelector = (e, t) => {
        const r = (0, m.fiscalIdSelector)(e, t);
        return (0, D.fiscalIdAutofillView)(r);
      }),
        (t.autofillViewedQueriedFiscalIdsSelector = (0, a.compose)((0, I.viewListResults)(D.fiscalIdListView), m.queryFiscalIdsSelector));
      (t.autofillViewedGeneratedPasswordSelector = (e, t) => {
        const r = (0, g.generatedPasswordSelector)(e, t);
        return (0, D.generatedPasswordAutofillView)(r);
      }),
        (t.autofillViewedQueriedGeneratedPasswordsSelector = (0, a.compose)(
          (0, I.viewListResults)(D.generatedPasswordListView),
          g.queryGeneratedPasswordsSelector
        ));
      (t.autofillViewedIdCardSelector = (e, t) => {
        const r = (0, y.idCardWithIdentitySelector)(e, t);
        return (0, D.idCardAutofillView)(r);
      }),
        (t.autofillViewedQueriedIdCardsSelector = (0, a.compose)((0, I.viewListResults)(D.idCardListView), y.queryIdCardsSelector));
      (t.autofillViewedIdentitySelector = (e, t) => {
        const r = (0, v.identitySelector)(e, t);
        return (0, D.identityAutofillView)(r);
      }),
        (t.autofillViewedQueriedIdentitiesSelector = (0, a.compose)((0, I.viewListResults)(D.identityListView), v.queryIdentitiesSelector));
      (t.autofillViewedNoteSelector = (e, t) => {
        const r = (0, h.noteSelector)(e, t);
        return (0, D.noteAutofillView)(r);
      }),
        (t.autofillViewedQueriedNotesSelector = (0, a.compose)((0, I.viewListResults)(D.noteListView), h.queryNotesSelector));
      t.autofillViewedPasskeySelector = (e, t) => {
        const r = (0, O.passkeySelector)(e, t);
        return (0, D.passkeyAutofillView)(r);
      };
      (t.autofillViewedPassportSelector = (e, t) => {
        const r = (0, f.passportWithIdentitySelector)(e, t);
        return (0, D.passportAutofillView)(r);
      }),
        (t.autofillViewedQueriedPassportsSelector = (0, a.compose)(
          (0, I.viewListResults)(D.passportListView),
          f.queryPassportsWithIdentitySelector
        ));
      (t.autofillViewedPaymentCardSelector = (e, t) => {
        const r = (0, w.paymentCardSelector)(e, t);
        return (0, D.paymentCardAutofillView)(r);
      }),
        (t.autofillViewedQueriedPaymentCardsSelector = (0, a.compose)(
          (0, I.viewListResults)(D.paymentCardListView),
          w.queryPaymentCardsSelector
        ));
      (t.autofillViewedPhoneSelector = (e, t) => {
        const r = (0, P.phoneSelector)(e, t);
        return (0, D.phoneAutofillView)(r);
      }),
        (t.autofillViewedQueriedPhonesSelector = (0, a.compose)((0, I.viewListResults)(D.phoneListView), P.queryPhonesSelector));
      (t.autofillViewedPersonalWebsiteSelector = (e, t) => {
        const r = (0, A.personalWebsiteSelector)(e, t);
        return (0, D.personalWebsiteAutofillView)(r);
      }),
        (t.autofillViewedQueriedPersonalWebsitesSelector = (0, a.compose)(
          (0, I.viewListResults)(D.personalWebsiteListView),
          A.queryPersonalWebsitesSelector
        ));
      (t.autofillViewedSocialSecurityIdSelector = (e, t) => {
        const r = (0, T.socialSecurityIdWithIdentitySelector)(e, t);
        return (0, D.socialSecurityIdAutofillView)(r);
      }),
        (t.autofillViewedQueriedSocialSecurityIdsSelector = (0, a.compose)(
          (0, I.viewListResults)(D.socialSecurityIdListView),
          T.querySocialSecurityIdsSelector
        ));
      t.getAutofillSettingOnUrlForAutofillSelector = (e, t) => {
        const r = new n.ParsedURL(t).getRootDomain(),
          a = (0, b.personalSettingsSelector)(e),
          i = a.DisabledUrlsList.includes(t);
        return a.DisabledDomainsList.includes(r) || i
          ? o.AutofillOptions.ANALYSIS_ENABLED_ONLY_ON_LOGINS_AND_PASSWORDS
          : o.AutofillOptions.ANALYSIS_ENABLED_ON_ALL_FORMS;
      };
    },
    55346: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.passkeyAutofillView =
          t.socialSecurityIdListView =
          t.socialSecurityIdAutofillView =
          t.phoneListView =
          t.phoneAutofillView =
          t.personalWebsiteListView =
          t.personalWebsiteAutofillView =
          t.paymentCardListView =
          t.paymentCardAutofillView =
          t.passportListView =
          t.passportAutofillView =
          t.noteListView =
          t.noteAutofillView =
          t.idCardListView =
          t.idCardAutofillView =
          t.identityListView =
          t.identityAutofillView =
          t.generatedPasswordListView =
          t.generatedPasswordAutofillView =
          t.fiscalIdListView =
          t.fiscalIdAutofillView =
          t.emailListView =
          t.emailAutofillView =
          t.driverLicenseListView =
          t.driverLicenseAutofillView =
          t.credentialListView =
          t.credentialAutofillView =
          t.companyListView =
          t.companyAutofillView =
          t.bankAccountListView =
          t.bankAccountAutofillView =
          t.addressListView =
          t.addressAutofillView =
            void 0);
      const a = r(92202),
        o = r(16516),
        n = r(92882),
        i = r(42316),
        s = r(90073),
        c = r(72099),
        l = r(6205),
        d = r(38495),
        u = r(27923),
        p = (e) => ({ id: e.Id, lastUse: e.LastUse, localeFormat: e.LocaleFormat, spaceId: e.SpaceId });
      t.addressAutofillView = (e) => ({
        ...p(e),
        vaultType: a.VaultSourceType.Address,
        addressFull: (0, u.defaultToEmptyString)(e.AddressFull),
        addressName: (0, u.defaultToEmptyString)(e.AddressName),
        building: (0, u.defaultToEmptyString)(e.Building),
        city: (0, u.defaultToEmptyString)(e.City),
        country: (0, u.defaultToEmptyString)(e.Country),
        digitCode: (0, u.defaultToEmptyString)(e.DigitCode),
        door: (0, u.defaultToEmptyString)(e.Door),
        floor: (0, u.defaultToEmptyString)(e.Floor),
        stairs: (0, u.defaultToEmptyString)(e.Stairs),
        state: (0, d.findStateName)((0, u.defaultToEmptyString)(e.State)),
        stateCode: (0, d.findStateCode)((0, u.defaultToEmptyString)(e.LocaleFormat), (0, u.defaultToEmptyString)(e.State)),
        stateLevel2: (0, d.findStateLevel2Name)((0, u.defaultToEmptyString)(e.StateLevel2)),
        streetName: (0, u.defaultToEmptyString)(e.StreetName),
        streetNumber: (0, u.defaultToEmptyString)(e.StreetNumber),
        streetTitle: (0, u.defaultToEmptyString)(e.StreetTitle),
        zipCode: (0, u.defaultToEmptyString)(e.ZipCode)
      });
      t.addressListView = (e) => e.map(t.addressAutofillView);
      t.bankAccountAutofillView = (e) => {
        const t = (0, n.getBankInfoFromBankAccountData)(e);
        return {
          ...p(e),
          vaultType: a.VaultSourceType.BankAccount,
          name: (0, u.defaultToEmptyString)(e.BankAccountName),
          owner: (0, u.defaultToEmptyString)(e.BankAccountOwner),
          IBAN: (0, u.defaultToEmptyString)(e.BankAccountIBAN),
          BIC: (0, u.defaultToEmptyString)(e.BankAccountBIC),
          bank: t.bank,
          country: (0, u.defaultToUS)(e.LocaleFormat),
          bankCode: t.bankCode
        };
      };
      t.bankAccountListView = (e) => e.map(t.bankAccountAutofillView);
      t.companyAutofillView = (e) => ({
        ...p(e),
        vaultType: a.VaultSourceType.Company,
        name: (0, u.defaultToEmptyString)(e.Name),
        jobTitle: (0, u.defaultToEmptyString)(e.JobTitle)
      });
      t.companyListView = (e) => e.map(t.companyAutofillView);
      t.credentialAutofillView = (e, t, r) => ({
        ...p(t),
        vaultType: a.VaultSourceType.Credential,
        autoProtected: (0, o.defaultTo)(!1, t.AutoProtected),
        autoLogin: (0, o.defaultTo)(!1, t.AutoLogin),
        categoryName: t.CategoryName,
        email: (0, u.defaultToEmptyString)(t.Email),
        hasOtp: Boolean(t.OtpSecret) || Boolean(t.OtpUrl),
        matchType: (0, u.getDomainMatchTypeForHermes)(e, t),
        login: (0, u.defaultToEmptyString)(t.Login),
        otpSecret: (0, u.defaultToEmptyString)(t.OtpSecret),
        otpUrl: (0, u.defaultToEmptyString)(t.OtpUrl),
        password: (0, u.defaultToEmptyString)(t.Password),
        subdomainOnly: t.SubdomainOnly || !1,
        sharingStatus: r,
        title: (0, u.defaultToEmptyString)(t.Title || (0, s.getDomainForCredential)(t)),
        secondaryLogin: t.SecondaryLogin,
        url: (0, u.defaultToEmptyString)(t.Url),
        userAddedLinkedWebsites: (0, l.getUserAddedLinkedWebsiteDomains)(t)
      });
      t.credentialListView = (e) => e.map(({ domain: e, credential: r, sharingStatus: a }) => (0, t.credentialAutofillView)(e, r, a));
      t.driverLicenseAutofillView = (e) => {
        const t = (0, c.epochToDate)((0, c.vaultDateToViewDate)(e.ExpireDate)),
          r = (0, c.epochToDate)((0, c.vaultDateToViewDate)(e.DeliveryDate));
        return {
          ...p(e),
          vaultType: a.VaultSourceType.DriverLicense,
          country: (0, c.vaultCountryToViewCountry)(e.LocaleFormat),
          creationDate: (0, u.defaultToZero)(e.CreationDatetime),
          expirationDay: t.getDate(),
          expirationMonth: t.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET,
          expirationYear: t.getFullYear(),
          expirationDateFull: `${t.getFullYear()}-${t.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET}-${t.getDate()}`,
          idNumber: (0, u.defaultToEmptyString)(e.Number),
          issueDay: r.getDate(),
          issueMonth: r.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET,
          issueYear: r.getFullYear(),
          issueDateFull: `${r.getFullYear()}-${r.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET}-${r.getDate()}`,
          name: (0, c.identityToName)(e.identity) || e.Fullname || "",
          spaceId: e.SpaceId,
          state: e.State
        };
      };
      t.driverLicenseListView = (e) => e.map(t.driverLicenseAutofillView);
      t.emailAutofillView = (e) => ({
        ...p(e),
        vaultType: a.VaultSourceType.Email,
        email: (0, u.defaultToEmptyString)(e.Email),
        name: (0, u.defaultToEmptyString)(e.EmailName),
        type: e.Type || "NO_TYPE"
      });
      t.emailListView = (e) => e.map(t.emailAutofillView);
      t.fiscalIdAutofillView = (e) => ({
        ...p(e),
        vaultType: a.VaultSourceType.FiscalId,
        country: (0, c.vaultCountryToViewCountry)(e.LocaleFormat),
        idNumber: (0, u.defaultToEmptyString)(e.FiscalNumber),
        teledeclarantNumber: (0, u.defaultToEmptyString)(e.TeledeclarantNumber),
        creationDate: (0, u.defaultToZero)(e.CreationDatetime)
      });
      t.fiscalIdListView = (e) => e.map(t.fiscalIdAutofillView);
      t.generatedPasswordAutofillView = (e) => ({
        vaultType: a.VaultSourceType.GeneratedPassword,
        domain: (0, u.defaultToEmptyString)(e.Domain),
        generatedDate: e.GeneratedDate,
        password: e.Password,
        id: e.Id
      });
      t.generatedPasswordListView = (e) => e.map(t.generatedPasswordAutofillView);
      t.identityAutofillView = (e) => ({
        ...p(e),
        vaultType: a.VaultSourceType.Identity,
        age: (0, u.getAgeFromIdentity)(e),
        birthDate: (0, u.defaultToEmptyString)(e.BirthDate),
        birthPlace: (0, u.defaultToEmptyString)(e.BirthPlace),
        firstName: (0, u.defaultToEmptyString)(e.FirstName),
        lastName2: (0, u.defaultToEmptyString)(e.LastName2),
        lastName: (0, u.defaultToEmptyString)(e.LastName),
        middleName: (0, u.defaultToEmptyString)(e.MiddleName),
        middleNameInitial: (0, u.defaultToEmptyString)(e.MiddleName),
        pseudo: (0, u.defaultToEmptyString)(e.Pseudo),
        title: e.Title
      });
      t.identityListView = (e) => e.map(t.identityAutofillView);
      t.idCardAutofillView = (e) => {
        const t = (0, c.epochToDate)((0, c.vaultDateToViewDate)(e.ExpireDate)),
          r = (0, c.epochToDate)((0, c.vaultDateToViewDate)(e.DeliveryDate));
        return {
          ...p(e),
          vaultType: a.VaultSourceType.IdCard,
          country: (0, c.vaultCountryToViewCountry)(e.LocaleFormat),
          creationDate: (0, u.defaultToZero)(e.CreationDatetime),
          expirationDay: t.getDate(),
          expirationMonth: t.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET,
          expirationYear: t.getFullYear(),
          expirationDateFull: `${t.getFullYear()}-${t.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET}-${t.getDate()}`,
          idNumber: (0, u.defaultToEmptyString)(e.Number),
          issueDay: r.getDate(),
          issueMonth: r.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET,
          issueYear: r.getFullYear(),
          issueDateFull: `${r.getFullYear()}-${r.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET}-${r.getDate()}`,
          name: (0, c.identityToName)(e.identity) || e.Fullname || "",
          spaceId: e.SpaceId
        };
      };
      t.idCardListView = (e) => e.map(t.idCardAutofillView);
      t.noteAutofillView = (e) => ({ ...p(e), vaultType: a.VaultSourceType.Note });
      t.noteListView = (e) => e.map(t.noteAutofillView);
      t.passportAutofillView = (e) => {
        const t = (0, c.epochToDate)((0, c.vaultDateToViewDate)(e.ExpireDate)),
          r = (0, c.epochToDate)((0, c.vaultDateToViewDate)(e.DeliveryDate));
        return {
          ...p(e),
          vaultType: a.VaultSourceType.Passport,
          idNumber: (0, u.defaultToEmptyString)(e.Number),
          country: (0, c.vaultCountryToViewCountry)(e.LocaleFormat),
          expirationDay: t.getDate(),
          expirationMonth: t.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET,
          expirationYear: t.getFullYear(),
          expirationDateFull: `${t.getFullYear()}-${t.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET}-${t.getDate()}`,
          issueDay: r.getDate(),
          issueMonth: r.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET,
          issueYear: r.getFullYear(),
          issueDateFull: `${r.getFullYear()}-${r.getMonth() + c.ZERO_INDEX_BASED_MONTH_OFFSET}-${r.getDate()}`,
          name: (0, c.identityToName)(e.identity) || e.Fullname || "",
          deliveryPlace: (0, u.defaultToEmptyString)(e.DeliveryPlace),
          creationDate: (0, u.defaultToZero)(e.CreationDatetime)
        };
      };
      t.passportListView = (e) => e.map(t.passportAutofillView);
      t.paymentCardAutofillView = (e) => ({
        ...p(e),
        vaultType: a.VaultSourceType.PaymentCard,
        bank: (0, u.defaultToEmptyString)(e.Bank),
        cardNumber: (0, u.defaultToEmptyString)(e.CardNumber),
        cardNumberLastDigits: (0, i.getLastDigitsFromCardNumber)(e.CardNumber),
        color: e.Color || i.defaultColor,
        expireMonth: (0, u.defaultToEmptyString)(e.ExpireMonth),
        expireYear: (0, u.defaultToEmptyString)(e.ExpireYear),
        name: (0, u.defaultToEmptyString)(e.Name),
        ownerName: (0, u.defaultToEmptyString)(e.OwnerName),
        securityCode: (0, u.defaultToEmptyString)(e.SecurityCode),
        type: e.Type
      });
      t.paymentCardListView = (e) => e.map(t.paymentCardAutofillView);
      t.personalWebsiteAutofillView = (e) => ({
        ...p(e),
        vaultType: a.VaultSourceType.PersonalWebsite,
        name: (0, u.defaultToEmptyString)(e.Name),
        website: (0, u.defaultToEmptyString)(e.Website)
      });
      t.personalWebsiteListView = (e) => e.map(t.personalWebsiteAutofillView);
      t.phoneAutofillView = (e) => ({
        ...p(e),
        vaultType: a.VaultSourceType.Phone,
        name: (0, u.defaultToEmptyString)(e.PhoneName),
        numberInternational: (0, u.defaultToEmptyString)(e.NumberNational),
        number: (0, u.defaultToEmptyString)(e.Number),
        type: e.Type
      });
      t.phoneListView = (e) => e.map(t.phoneAutofillView);
      t.socialSecurityIdAutofillView = (e) => ({
        ...p(e),
        vaultType: a.VaultSourceType.SocialSecurityId,
        name: (0, c.identityToName)(e.identity) || e.SocialSecurityFullname || "",
        idNumber: (0, u.defaultToEmptyString)(e.SocialSecurityNumber),
        country: (0, c.vaultCountryToViewCountry)(e.LocaleFormat),
        creationDate: (0, u.defaultToZero)(e.CreationDatetime)
      });
      t.socialSecurityIdListView = (e) => e.map(t.socialSecurityIdAutofillView);
      t.passkeyAutofillView = (e) => ({
        ...p(e),
        credentialId: e.CredentialId,
        rpId: e.RpId,
        rpName: e.RpName,
        userDisplayName: e.UserDisplayName,
        userHandle: e.UserHandle,
        vaultType: a.VaultSourceType.Passkey,
        counter: e.Counter,
        keyAlgorithm: e.KeyAlgorithm
      });
    },
    7006: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(19083),
        o = r(50059);
      t.config = {
        commands: { changeMasterPassword: { handler: a.changeMasterPassword } },
        queries: {},
        liveQueries: { liveChangeMasterPasswordStatus: { subject: o.getChangeMasterPasswordStatus$ } }
      };
    },
    50059: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getChangeMasterPasswordStatus$ = t.emitChangeMasterPasswordStatus = void 0);
      const a = new (r(18948).Subject)();
      t.emitChangeMasterPasswordStatus = (e) => a.next(e);
      t.getChangeMasterPasswordStatus$ = () => a;
    },
    35186: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(7006);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    19083: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.changeMasterPassword = void 0);
      const a = r(32626),
        o = r(50059),
        n = r(33740),
        i = r(13141),
        s = r(37515),
        c = r(78238),
        l = r(41383),
        d = r(46298),
        u = r(88610),
        p = r(47820),
        S = r(16593),
        m = r(16194),
        g = r(61740),
        y = r(93039),
        h = r(61984),
        v = r(18948),
        f = r(61475),
        w = r(88205),
        A = r(92263),
        P = r(70252),
        T = r(61394),
        b = r(27517);
      t.changeMasterPassword = async (e, t) => {
        const {
            applicationModulesAccess: r,
            storeService: I,
            masterPasswordEncryptorService: C,
            remoteDataEncryptorService: E,
            sessionService: _,
            localStorageService: D,
            storageService: O,
            eventLoggerService: M
          } = e,
          {
            queries: { isMasterPasswordLeaked: N, isMasterPasswordWeak: F },
            commands: { temporaryResetMasterPasswordLeaked: U }
          } = r.createClients().masterPasswordSecurity,
          { flow: L } = t,
          k = await (0, n.preValidationForChangeMP)(e, t);
        if (!1 === k.success) return k;
        const R = I.getState(),
          B = await (0, w.makeFeatureFlipsSelectors)(r).featureFlipsSelector(),
          V = (0, S.isRemoteKeyActivatedSelector)(R) ? E : C;
        (0, o.emitChangeMasterPasswordStatus)({ type: a.ChangeMasterPasswordStepNeeded.DOWNLOAD, value: 10 });
        const j = (0, S.userLoginSelector)(R);
        if (!j) return (0, n.makeReturnErrorObject)(a.ChangeMasterPasswordCode.UNEXPECTED_STATE, L);
        let W;
        try {
          (W = r.createClients()), await W.session.commands.prepareLocalDataFlush(), I.dispatch((0, m.changeMPStart)());
        } catch (e) {
          const t = A.CarbonError.fromAnyError(e)
            .addContextInfo("CHANGE_MASTER_PASSWORD", "prepareLocalDataFlushError")
            .addAdditionalInfo({ comment: "Failed to prepare local data on graphene" });
          throw ((0, P.sendExceptionLog)({ error: t }), e);
        }
        const H = await (0, d.getDataForMasterPasswordChange)(I, j, {});
        if ((0, d.isApiError)(H))
          return (
            (0, h.logChangeMasterPasswordError)(M, y.ChangeMasterPasswordError.DownloadError),
            I.dispatch((0, m.changeMPDone)()),
            (0, n.makeUnexpectedErrorObject)(H.message, L)
          );
        const { serverKey: K } = I.getUserSession();
        if (!(0, n.isOtpStatusValid)(H.otpStatus, K))
          return (
            (0, h.logChangeMasterPasswordError)(M, y.ChangeMasterPasswordError.LoginError),
            I.dispatch((0, m.changeMPDone)()),
            (0, n.makeReturnErrorObject)(a.ChangeMasterPasswordCode.OTP_PROBLEM, L)
          );
        const { timestamp: x } = H,
          { transactions: G, sharingKeys: $ } = H.data;
        try {
          const d = await (0, n.deCipherAllTransactions)(_, V, G),
            S = D.getInstance(),
            w = await S.doesLocalKeyExist();
          let C = null;
          w && (C = await S.getLocalKey());
          const { publicKey: E } = $,
            k = await (0, n.decipherPrivateKey)(I, V, $);
          let R;
          switch ((await (0, g.cleanRememberMeStorageData)(I, O), t.flow)) {
            case a.ChangeMPFlowPath.MP_TO_SSO:
              R = await (0, s.handleMigrationMPtoSso)(e, t, d, k, E, x);
              break;
            case a.ChangeMPFlowPath.SSO_TO_MP:
              R = await (0, c.handleMigrationSSOtoMP)(e, t, d, k, E, x);
              break;
            case a.ChangeMPFlowPath.TO_EMAIL_TOKEN:
              R = await (0, i.handleMigrationToEmailToken)(e, t, d, k, E, x);
              break;
            case a.ChangeMPFlowPath.ADMIN_ASSISTED_RECOVERY:
            case a.ChangeMPFlowPath.ACCOUNT_RECOVERY_KEY:
            case a.ChangeMPFlowPath.USER_CHANGING_MP:
            default:
              R = await (0, l.handleUserChangingMP)(e, t, d, k, E, x);
          }
          if (!R.success)
            return (0, h.logChangeMasterPasswordError)(M, y.ChangeMasterPasswordError.UnknownError), I.dispatch((0, m.changeMPDone)()), R;
          await W.session.commands.flushLocalData();
          const H = Boolean(I.getPersonalSettings().AccountRecoveryKey);
          try {
            H &&
              (await (0, T.deactivateAccountRecoveryKey)(I, j, { reason: "VAULT_KEY_CHANGE" }),
              (0, h.logUserDeleteAccountRecoveryKey)(M),
              e.storeService.dispatch((0, b.editPersonalSettings)({ AccountRecoveryKey: void 0, AccountRecoveryKeyId: void 0 })));
          } catch (e) {
            const t = A.CarbonError.fromAnyError(e)
              .addContextInfo("CHANGE_MASTER_PASSWORD", "deactivateRecoveryKey")
              .addAdditionalInfo({ comment: "Failed to deactivate recovery key after successful mp change" });
            await (0, P.sendExceptionLog)({ error: t });
          }
          let K, q;
          C && (await _.getInstance().user.persistLocalKey(C)),
            await (0, p.storeSessionCredentialForRecovery)(I, D),
            (0, o.emitChangeMasterPasswordStatus)({ type: a.ChangeMasterPasswordStepNeeded.DONE, value: 100 }),
            await (0, n.resetMigrationState)(e, L),
            L === a.ChangeMPFlowPath.ADMIN_ASSISTED_RECOVERY || L === a.ChangeMPFlowPath.MP_TO_SSO || L === a.ChangeMPFlowPath.SSO_TO_MP
              ? await (0, u.sessionDidOpen)(e)
              : H && (await e.sessionService.getInstance().user.attemptSync(y.Trigger.ChangeMasterPassword));
          try {
            K = await (0, v.firstValueFrom)(N());
          } catch (e) {
            const t = A.CarbonError.fromAnyError(e)
              .addContextInfo("CHANGE_MASTER_PASSWORD", "isMasterPasswordLeakedError")
              .addAdditionalInfo({ comment: "Failed to retrieve value from isMasterPasswordLeaked" });
            throw ((0, P.sendExceptionLog)({ error: t }), e);
          }
          try {
            q = B.ims_web_weak_mp_prod ? await (0, v.firstValueFrom)(F()) : null;
          } catch (e) {
            const t = A.CarbonError.fromAnyError(e)
              .addContextInfo("CHANGE_MASTER_PASSWORD", "isMasterPasswordWeakError")
              .addAdditionalInfo({ comment: "Failed to retrieve value from isMasterPasswordWeak" });
            throw ((0, P.sendExceptionLog)({ error: t }), e);
          }
          const Q = !!(0, f.isSuccess)(K) && K.data,
            z = null === q ? void 0 : !!(0, f.isSuccess)(q) && q.data;
          if (((0, h.logChangeMasterPasswordComplete)(M, Q, z), I.dispatch((0, m.changeMPDone)()), U(void 0), B.ims_web_weak_mp_prod)) {
            const {
              commands: { temporarySendMasterPasswordChangedEvent: e }
            } = r.createClients().changeMasterPassword;
            e(void 0);
          }
          return { success: !0, response: { reason: a.ChangeMasterPasswordCode.SUCCESS } };
        } catch (r) {
          if (
            ((0, h.logChangeMasterPasswordError)(M, y.ChangeMasterPasswordError.UnknownError),
            t.flow !== a.ChangeMPFlowPath.MP_TO_SSO && t.flow !== a.ChangeMPFlowPath.SSO_TO_MP)
          ) {
            const r = (0, n.extractCurrentPassword)(R, t);
            (0, n.revertOnError)(e, V, { currentPassword: r, serverKey: K });
          } else (0, n.logoutUserOnError)(e);
          return (0, n.makeUnexpectedErrorObject)(r.message, L);
        }
      };
    },
    13141: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.handleMigrationToEmailToken = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(16593),
        i = r(50059),
        s = r(33740),
        c = r(46298),
        l = r(16356),
        d = r(61984);
      t.handleMigrationToEmailToken = async (e, t, r, u, p, S) => {
        const { storeService: m, sessionService: g, masterPasswordEncryptorService: y, eventLoggerService: h } = e,
          { newPassword: v, flow: f, currentPassword: w } = t,
          { serverKey: A } = m.getUserSession(),
          P = m.getState(),
          T = (0, n.userLoginSelector)(P);
        if (!T)
          return (
            (0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.LoginError),
            (0, s.makeReturnErrorObject)(o.ChangeMasterPasswordCode.UNEXPECTED_STATE, f)
          );
        const b = (0, s.returnProperCryptoConfig)(m);
        y.setInstance({ raw: v }, "", b), m.dispatch((0, l.updateMasterPassword)(v)), m.dispatch((0, l.updateServerKey)(""));
        m.dispatch((0, l.updateRemoteKey)(null));
        const { authTicket: I } = (0, n.authTicketInfoSelector)(P),
          C = await (0, s.cipherTransactionWithNewMP)(m, g, y, r, f),
          E = await (0, s.cipherPrivateKey)(y, u),
          _ = {
            timestamp: S,
            transactions: (0, s.formatTransaction)(C),
            updateVerification: { type: "email_token" },
            sharingKeys: { publicKey: p, privateKey: E },
            authTicket: I
          };
        (0, i.emitChangeMasterPasswordStatus)({ type: o.ChangeMasterPasswordStepNeeded.UPLOADING, value: 95 });
        const D = await (0, c.uploadDataForMasterPasswordChange)(m, T, _);
        if ((0, c.isApiError)(D))
          return (
            (0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.UploadError),
            (0, s.revertOnError)(e, y, { currentPassword: w, serverKey: A }),
            (0, s.makeUnexpectedErrorObject)(D.message, f)
          );
        const O = await (0, c.confirmMasterPasswordChangeDone)(m, T, {});
        return (0, c.isApiError)(O)
          ? ((0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.ConfirmationError),
            (0, s.revertOnError)(e, y, { currentPassword: w, serverKey: A }),
            (0, s.makeUnexpectedErrorObject)(O.message, f))
          : (await e.applicationModulesAccess
              .createClients()
              .session.commands.updateUserSessionKey({
                email: (0, n.userLoginSelector)(m.getState()),
                sessionKey: { type: "mp", masterPassword: v, secondaryKey: "" }
              }),
            { success: !0, response: { reason: o.ChangeMasterPasswordCode.SUCCESS } });
      };
    },
    37515: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.handleMigrationMPtoSso = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(751),
        i = r(16593),
        s = r(50059),
        c = r(33740),
        l = r(46298),
        d = r(61984);
      t.handleMigrationMPtoSso = async (e, t, r, u, p, S) => {
        const { storeService: m, sessionService: g, remoteDataEncryptorService: y, eventLoggerService: h } = e,
          { newPassword: v, flow: f } = t,
          w = m.getState(),
          A = (0, i.userLoginSelector)(w);
        if (!A)
          return (
            (0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.LoginError),
            (0, c.makeReturnErrorObject)(o.ChangeMasterPasswordCode.UNEXPECTED_STATE, f)
          );
        const { remoteKey: P, serverKeyBase64: T } = await (0, n.prepareRemoteDataEncryptionServices)(e, v),
          b = [P],
          I = { type: "sso", ssoServerKey: T },
          { authTicket: C } = (0, i.authTicketInfoSelector)(w),
          E = await (0, c.cipherTransactionWithNewMP)(m, g, y, r, f),
          _ = await (0, c.cipherPrivateKey)(y, u),
          D = {
            timestamp: S,
            transactions: (0, c.formatTransaction)(E),
            remoteKeys: b,
            updateVerification: I,
            sharingKeys: { publicKey: p, privateKey: _ },
            authTicket: C
          };
        (0, s.emitChangeMasterPasswordStatus)({ type: o.ChangeMasterPasswordStepNeeded.UPLOADING, value: 95 });
        const O = await (0, l.uploadDataForMasterPasswordChange)(m, A, D);
        if ((0, l.isApiError)(O))
          return (
            (0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.UploadError),
            (0, c.logoutUserOnError)(e),
            (0, c.makeUnexpectedErrorObject)(O.message, f)
          );
        const M = await (0, l.confirmMasterPasswordChangeDone)(m, A, {});
        return (0, l.isApiError)(M)
          ? ((0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.ConfirmationError),
            (0, c.logoutUserOnError)(e),
            (0, c.makeUnexpectedErrorObject)(M.message, f))
          : (await e.applicationModulesAccess
              .createClients()
              .session.commands.updateUserSessionKey({
                email: (0, i.userLoginSelector)(m.getState()),
                sessionKey: { type: "sso", ssoKey: "" }
              }),
            { success: !0, response: { reason: o.ChangeMasterPasswordCode.SUCCESS } });
      };
    },
    78238: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.handleMigrationSSOtoMP = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(16593),
        i = r(50059),
        s = r(33740),
        c = r(46298),
        l = r(16356),
        d = r(61984);
      t.handleMigrationSSOtoMP = async (e, t, r, u, p, S) => {
        const { storeService: m, sessionService: g, masterPasswordEncryptorService: y, eventLoggerService: h } = e,
          { newPassword: v, flow: f } = t,
          w = m.getState(),
          A = (0, n.userLoginSelector)(w);
        if (!A)
          return (
            (0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.LoginError),
            (0, s.makeReturnErrorObject)(o.ChangeMasterPasswordCode.UNEXPECTED_STATE, f)
          );
        const P = (0, s.returnProperCryptoConfig)(m);
        y.setInstance({ raw: v }, "", P), m.dispatch((0, l.updateMasterPassword)(v)), m.dispatch((0, l.updateServerKey)(""));
        m.dispatch((0, l.updateRemoteKey)(null));
        const { authTicket: T } = (0, n.authTicketInfoSelector)(w),
          b = await (0, s.cipherTransactionWithNewMP)(m, g, y, r, f),
          I = await (0, s.cipherPrivateKey)(y, u),
          C = {
            timestamp: S,
            transactions: (0, s.formatTransaction)(b),
            updateVerification: { type: "email_token" },
            sharingKeys: { publicKey: p, privateKey: I },
            authTicket: T
          };
        (0, i.emitChangeMasterPasswordStatus)({ type: o.ChangeMasterPasswordStepNeeded.UPLOADING, value: 95 });
        const E = await (0, c.uploadDataForMasterPasswordChange)(m, A, C);
        if ((0, c.isApiError)(E))
          return (
            (0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.UploadError),
            (0, s.logoutUserOnError)(e),
            (0, s.makeUnexpectedErrorObject)(E.message, f)
          );
        const _ = await (0, c.confirmMasterPasswordChangeDone)(m, A, {});
        return (0, c.isApiError)(_)
          ? ((0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.ConfirmationError),
            (0, s.logoutUserOnError)(e),
            (0, s.makeUnexpectedErrorObject)(_.message, f))
          : (await e.applicationModulesAccess
              .createClients()
              .session.commands.updateUserSessionKey({
                email: (0, n.userLoginSelector)(m.getState()),
                sessionKey: { type: "mp", masterPassword: v, secondaryKey: "" }
              }),
            { success: !0, response: { reason: o.ChangeMasterPasswordCode.SUCCESS } });
      };
    },
    41383: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.handleUserChangingMP = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(16593),
        i = r(50059),
        s = r(33740),
        c = r(46298),
        l = r(16356),
        d = r(61984);
      t.handleUserChangingMP = async (e, t, r, u, p, S) => {
        const { storeService: m, sessionService: g, masterPasswordEncryptorService: y, eventLoggerService: h } = e,
          v = m.getState(),
          { newPassword: f, flow: w } = t,
          A = (0, s.extractCurrentPassword)(v, t),
          { serverKey: P } = m.getUserSession(),
          T = (0, n.userLoginSelector)(v);
        if (!T)
          return (
            (0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.LoginError),
            (0, s.makeReturnErrorObject)(o.ChangeMasterPasswordCode.UNEXPECTED_STATE, w)
          );
        y.setInstance({ raw: f }, P), m.dispatch((0, l.updateMasterPassword)(f));
        const b = await (0, s.cipherTransactionWithNewMP)(m, g, y, r),
          I = await (0, s.cipherPrivateKey)(y, u),
          C = {
            timestamp: S,
            transactions: (0, s.formatTransaction)(b),
            sharingKeys: { publicKey: p, privateKey: I },
            uploadReason: w === o.ChangeMPFlowPath.ADMIN_ASSISTED_RECOVERY ? "complete_account_recovery" : void 0
          };
        (0, i.emitChangeMasterPasswordStatus)({ type: o.ChangeMasterPasswordStepNeeded.UPLOADING, value: 95 });
        const E = await (0, c.uploadDataForMasterPasswordChange)(m, T, C);
        if ((0, c.isApiError)(E))
          return (
            (0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.UploadError),
            (0, s.revertOnError)(e, y, { currentPassword: A, serverKey: P }),
            (0, s.makeUnexpectedErrorObject)(E.message, w)
          );
        const _ = await (0, c.confirmMasterPasswordChangeDone)(m, T, {});
        return (0, c.isApiError)(_)
          ? ((0, d.logChangeMasterPasswordError)(h, a.ChangeMasterPasswordError.ConfirmationError),
            (0, s.revertOnError)(e, y, { currentPassword: A, serverKey: P }),
            (0, s.makeUnexpectedErrorObject)(_.message, w))
          : (await e.applicationModulesAccess
              .createClients()
              .session.commands.updateUserSessionKey({
                email: (0, n.userLoginSelector)(m.getState()),
                sessionKey: { type: "mp", masterPassword: f, secondaryKey: P }
              }),
            { success: !0, response: { reason: o.ChangeMasterPasswordCode.SUCCESS } });
      };
    },
    15209: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(35186);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    61984: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.logUserDeleteAccountRecoveryKey =
          t.logChangeMasterPasswordError =
          t.logChangeMasterPasswordComplete =
          t.logChangeMasterPasswordCancel =
          t.logChangeMasterPasswordStart =
            void 0);
      const a = r(93039),
        o = (e, t, r, o, n) => {
          e.logEvent(new a.UserChangeMasterPasswordEvent({ flowStep: t, errorName: r || void 0, isLeaked: o, isWeak: n }));
        };
      t.logChangeMasterPasswordStart = (e) => o(e, a.FlowStep.Start);
      t.logChangeMasterPasswordCancel = (e) => o(e, a.FlowStep.Cancel);
      t.logChangeMasterPasswordComplete = (e, t, r) => o(e, a.FlowStep.Complete, void 0, t, r);
      t.logChangeMasterPasswordError = (e, t) => o(e, a.FlowStep.Error, t);
      t.logUserDeleteAccountRecoveryKey = (e) => {
        e.logEvent(new a.UserDeleteAccountRecoveryKeyEvent({ deleteKeyReason: a.DeleteKeyReason.VaultKeyChanged }));
      };
    },
    62844: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.changeMPinProgressSelector = void 0);
      t.changeMPinProgressSelector = (e) => e.userSession.changeMPData.changeMPinProgress;
    },
    23486: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.cipherPrivateKey = void 0);
      const a = r(56668);
      t.cipherPrivateKey = async (e, t) => {
        const r = (0, a.utf16ToDeflatedUtf8)(t, { skipDeflate: !0 });
        return await e.getInstance().encrypt(r);
      };
    },
    17696: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.cipherTransactionWithNewMP = void 0);
      const a = r(32626),
        o = r(33740),
        n = r(27627),
        i = r(16859),
        s = r(75270),
        c = r(91301),
        l = r(55623),
        d = r(27517);
      t.cipherTransactionWithNewMP = async (e, t, r, u, p, S = !0) => {
        const { announce: m } = t.getInstance().user.getSyncArgs(),
          g = await Promise.all(
            u.map(async (t) => {
              if (p && "SETTINGS" === t.type && t.content) {
                const r = { ...t, content: await (0, o.getBaseModelFromXml)(m, t.content) };
                switch (p) {
                  case a.ChangeMPFlowPath.MP_TO_SSO:
                    const n = { ...r.content, CryptoUserPayload: c.CRYPTO_NODERIVATION_HMAC64 };
                    return { ...r, content: (0, s.getTransactionXml)(n) };
                  case a.ChangeMPFlowPath.SSO_TO_MP:
                    const i = { forceSalt: (0, l.getRandomValues)(16), cryptoConfig: (0, o.returnProperCryptoConfig)(e) },
                      u = (0, o.returnProperSettingContent)(e, r, i);
                    return e.dispatch((0, d.editPersonalSettings)(u)), { ...t, content: (0, s.getTransactionXml)(u) };
                  case a.ChangeMPFlowPath.ADMIN_ASSISTED_RECOVERY:
                  case a.ChangeMPFlowPath.ACCOUNT_RECOVERY_KEY:
                  case a.ChangeMPFlowPath.USER_CHANGING_MP:
                  case a.ChangeMPFlowPath.TO_EMAIL_TOKEN:
                }
              }
              return t;
            })
          ),
          y = g.length,
          h = S ? (0, o.initializeProgress)(a.ChangeMasterPasswordStepNeeded.ENCRYPTING, 100, y) : null,
          v = async (e, t) => {
            h && h(), t(await (0, i.encryptSingleTransaction)(r, e));
          };
        return await new Promise((e) => {
          (0, n.asyncMapLimit)(g, v, e, 100);
        });
      };
    },
    68328: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deCipherAllTransactions = void 0);
      const a = r(32626),
        o = r(83638),
        n = r(33740),
        i = r(27627),
        s = r(16859),
        c = r(82761),
        l = r(70252),
        d = r(92263);
      t.deCipherAllTransactions = async (e, t, r, u = !0) => {
        const { announce: p } = e.getInstance().user.getSyncArgs(),
          S = t.getInstance(),
          m = r.length,
          g = u ? (0, n.initializeProgress)(a.ChangeMasterPasswordStepNeeded.DECRYPTING, 100, m) : null,
          y = async (e, t) => {
            if ((g && g(), e.content))
              try {
                const r = await (0, s.decryptTransactionContent)(S, p, e);
                t({ ...e, content: r });
              } catch (r) {
                if (e.type === o.TransactionType.SETTINGS) {
                  const t = d.CarbonError.fromAnyError(r)
                    .addContextInfo("CHANGE_MP", "decipherAllTransactions")
                    .addAdditionalInfo({ comment: r.message ?? `Transaction of type ${e.type} couldn't be decrypted` });
                  throw ((0, l.sendExceptionLog)({ error: t }), r);
                }
                t(null);
              }
            else t(e);
          },
          h = await new Promise((e) => {
            (0, i.asyncMapLimit)(r, y, e, 100);
          });
        return (0, c.sanitizeTransactions)(h);
      };
    },
    74931: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.decipherPrivateKey = void 0);
      const a = r(56668),
        o = r(16356);
      t.decipherPrivateKey = async (e, t, r) => {
        const n = await t.getInstance().decrypt(r.privateKey),
          i = (0, a.deflatedUtf8ToUtf16)(n, { skipInflate: !0 }),
          s = { privateKey: i, publicKey: r.publicKey };
        return e.dispatch((0, o.updateKeyPair)(s)), i;
      };
    },
    60950: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.formatTransaction = void 0);
      t.formatTransaction = (e) =>
        e.map(({ action: e, content: t, identifier: r, time: a, type: o }) => ({ action: e, content: t, identifier: r, time: a, type: o }));
    },
    10078: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getBaseModelFromXml = void 0);
      const a = r(80469),
        o = r(16859),
        n = r(51104);
      t.getBaseModelFromXml = async (e, t) => {
        const r = await (0, o.parseTransactionContentXml)(e, t);
        return n.fixPersonalSettingTypes.fromTransaction((0, a.fixKwType)(r));
      };
    },
    33740: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        o(r(23486), t),
        o(r(17696), t),
        o(r(74931), t),
        o(r(68328), t),
        o(r(60950), t),
        o(r(10078), t),
        o(r(39463), t),
        o(r(90673), t),
        o(r(17433), t),
        o(r(99849), t),
        o(r(14224), t),
        o(r(61484), t),
        o(r(16494), t),
        o(r(55612), t),
        o(r(78028), t),
        o(r(55429), t);
    },
    39463: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.initializeProgress = void 0);
      const a = r(32626),
        o = r(50059);
      t.initializeProgress = (e, t, r) => {
        const n = e === a.ChangeMasterPasswordStepNeeded.DECRYPTING ? 10 : 50;
        let i = 0;
        return () => {
          i++, (i % t != 0 && i !== r) || (0, o.emitChangeMasterPasswordStatus)({ type: e, value: n + Math.round((40 * i) / r) });
        };
      };
    },
    90673: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isOtpStatusValid = void 0);
      t.isOtpStatusValid = (e, t) => {
        switch (e) {
          case "login":
            return t && t.length > 0;
          case "disabled":
          case "newDevice":
          case "sso":
            return !t || 0 === t.length;
          default:
            return !1;
        }
      };
    },
    17433: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.logoutUserOnError = void 0);
      const a = r(16194),
        o = r(1965),
        n = r(16593);
      t.logoutUserOnError = async (e) => {
        const { storeService: t, storageService: r, sessionService: i, applicationModulesAccess: s } = e,
          c = (0, n.userLoginSelector)(t.getState());
        t.dispatch((0, a.changeMPDone)()), c && (0, o.wipeOutLocalAccounts)(r, s, [c]), i.close();
      };
    },
    99849: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeReturnErrorObject = void 0);
      const a = r(32626),
        o = r(50059),
        n = r(70252);
      t.makeReturnErrorObject = (e, t) => {
        (0, o.emitChangeMasterPasswordStatus)({ type: a.ChangeMasterPasswordStepNeeded.ERROR, value: 100 });
        const r = new Error(`[ChangeMP] ${t}: ${e}`);
        return (0, n.sendExceptionLog)({ error: r }), { success: !1, error: { code: e } };
      };
    },
    14224: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeUnexpectedErrorObject = void 0);
      const a = r(32626),
        o = r(70252);
      t.makeUnexpectedErrorObject = (e, t) => {
        const r = new Error(`[ChangeMP] - Unexpected - ${t}: ${e}`);
        return (
          (0, o.sendExceptionLog)({ error: r }), { success: !1, error: { code: a.ChangeMasterPasswordCode.UNKNOWN_ERROR, message: e } }
        );
      };
    },
    61484: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.preValidationForChangeMP = t.extractCurrentPassword = void 0);
      const a = r(32626),
        o = r(61380),
        n = r(57903),
        i = r(64948),
        s = r(16593),
        c = r(29303),
        l = r(88205),
        d = r(33740),
        u = r(28287),
        p = r(71012);
      t.extractCurrentPassword = (e, t) =>
        t.flow === a.ChangeMPFlowPath.ADMIN_ASSISTED_RECOVERY ? (0, c.recoveryDataSelector)(e).currentPassword : t.currentPassword;
      t.preValidationForChangeMP = async (e, t) => {
        const { applicationModulesAccess: r, masterPasswordEncryptorService: c, storeService: S } = e,
          { newPassword: m, flow: g } = t;
        if (!(await (0, n.waitUntilSyncComplete)(S))) return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.SYNC_PROGRESS, g);
        const y = S.getState(),
          h = await (0, l.makeFeatureFlipsSelectors)(r).featureFlipsSelector();
        if (!S.getAccountInfo().isAuthenticated) return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.INNACTIVE_SESSION, g);
        if (h[o.CHANGEMP_WEB_BLOCKED_FEATURE_FLIP]) return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.FEATURE_BLOCKED, g);
        const v = await (0, i.evaluatePasswordStrengthOutOfFive)(m);
        if (!m || !v || v < p.minAcceptablePasswordStrength)
          return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.MP_STRENGTH_ERROR, g);
        const f = (0, s.isRemoteKeyActivatedSelector)(y),
          w = 9e5,
          { authTicket: A, date: P } = (0, s.authTicketInfoSelector)(y);
        if (!(0, s.userLoginSelector)(y)) return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.UNEXPECTED_STATE, g);
        switch (t.flow) {
          case a.ChangeMPFlowPath.MP_TO_SSO:
            if (!A || !P || Date.now() - P > w) return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.INVALID_TOKEN, g);
            if (f) return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.UNEXPECTED_STATE, g);
            break;
          case a.ChangeMPFlowPath.SSO_TO_MP:
            if (!A || !P || Date.now() - P > w) return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.INVALID_TOKEN, g);
            if (!f) return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.UNEXPECTED_STATE, g);
            break;
          case a.ChangeMPFlowPath.ADMIN_ASSISTED_RECOVERY:
            break;
          case a.ChangeMPFlowPath.TO_EMAIL_TOKEN:
          case a.ChangeMPFlowPath.USER_CHANGING_MP:
          case a.ChangeMPFlowPath.ACCOUNT_RECOVERY_KEY:
            {
              const { currentPassword: e } = t;
              if (g !== a.ChangeMPFlowPath.ACCOUNT_RECOVERY_KEY && e === m)
                return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.MP_ERROR, g);
              if (!(await (0, u.validateMasterPassword)(S, c, e)))
                return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.WRONG_PASSWORD, g);
            }
            break;
          default:
            return (0, d.makeReturnErrorObject)(a.ChangeMasterPasswordCode.UNEXPECTED_STATE, g);
        }
        return { success: !0 };
      };
    },
    16494: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.resetMigrationState = void 0);
      const a = r(32626),
        o = r(95363),
        n = r(7624);
      t.resetMigrationState = async (e, t) => {
        if (
          t === a.ChangeMPFlowPath.USER_CHANGING_MP ||
          t === a.ChangeMPFlowPath.TO_EMAIL_TOKEN ||
          t === a.ChangeMPFlowPath.ACCOUNT_RECOVERY_KEY
        )
          return;
        const { storeService: r } = e;
        r.dispatch((0, o.resetRecoverySessionData)()),
          r.dispatch((0, n.resetSSOSettings)()),
          t === a.ChangeMPFlowPath.MP_TO_SSO && r.dispatch((0, n.storeSSOSettings)({ ssoUser: !0 }));
      };
    },
    55612: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.returnProperCryptoConfig = void 0);
      const a = r(56668),
        o = r(65675),
        n = r(92310);
      t.returnProperCryptoConfig = (e) => {
        let t = a.ARGON2_DEFAULT_PAYLOAD;
        const r = (0, n.currentSpaceInfoSelector)(e.getState());
        r?.cryptoForcedPayload && (t = r.cryptoForcedPayload);
        try {
          return (0, o.parsePayload)(t).cryptoConfig;
        } catch (e) {
          return (0, o.makeFlexibleMarkerCryptoConfig)("argon2d");
        }
      };
    },
    78028: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.returnProperSettingContent = void 0);
      const a = r(56668),
        o = r(16038),
        n = r(95648),
        i = r(92310);
      t.returnProperSettingContent = (e, t, r) => {
        let s = a.ARGON2_DEFAULT_PAYLOAD;
        const c = (0, i.currentSpaceInfoSelector)(e.getState());
        return (
          c?.cryptoForcedPayload && (s = c.cryptoForcedPayload),
          { ...(0, n.makeBasePersonalSettings)(), ...t.content, CryptoUserPayload: s, CryptoFixedSalt: (0, o.bufferToBase64)(r.forceSalt) }
        );
      };
    },
    55429: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.revertOnError = void 0);
      const a = r(16194),
        o = r(16356);
      t.revertOnError = async (e, t, r) => {
        const { currentPassword: n, serverKey: i } = r,
          { storeService: s } = e;
        t.setInstance({ raw: n }, i),
          s.dispatch((0, o.updateMasterPassword)(n)),
          s.dispatch((0, o.updateServerKey)(i)),
          s.dispatch((0, a.changeMPDone)());
      };
    },
    61380: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CHANGEMP_WEB_BLOCKED_FEATURE_FLIP = void 0),
        (t.CHANGEMP_WEB_BLOCKED_FEATURE_FLIP = "disableChangeMpOnWeb");
    },
    20849: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.subscribeToDebugEvents = void 0);
      const a = r(95623),
        o = (e) => (t, r) => {
          const { message: a, details: o = {} } = r;
          t[e]({ date: new Date().toJSON(), message: a, optionalParams: Object.keys(o).reduce((e, t) => [...e, o[t]], []) });
        },
        n = (e) => {
          switch (e) {
            case a.LogLevel.Error:
              return o("error");
            case a.LogLevel.Warn:
              return o("warning");
            case a.LogLevel.Info:
              return o("info");
            case a.LogLevel.Debug:
            case a.LogLevel.Verbose:
            default:
              return o("log");
          }
        };
      t.subscribeToDebugEvents = function (e) {
        (0, a.redirectConsoleLogs)((t) => {
          const { level: r = a.LogLevel.Debug } = t;
          n(r)(e, t);
        });
      };
    },
    44273: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.subscribeToDiagnosticEvents = void 0);
      let r = null;
      (t.subscribeToDiagnosticEvents = function (e) {
        (r = e), e.decipheringDiagnosticLogEvent.on((e) => e);
      }),
        (t.default = function () {
          return r;
        });
    },
    39947: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonE2EConnector = void 0);
      const a = r(71796);
      t.carbonE2EConnector = {
        registerFreeTrial: (0, a.slot)(),
        getTeamTokens: (0, a.slot)(),
        confirmFreeTrial: (0, a.slot)(),
        getPremiumStatus: (0, a.slot)(),
        proposeMembers: (0, a.slot)(),
        acceptTeamInvite: (0, a.slot)(),
        getTokenForTestUser: (0, a.slot)(),
        getServiceProviderToken: (0, a.slot)(),
        createOrUpdateDarkWebBreach: (0, a.slot)(),
        addPrivateBreach: (0, a.slot)(),
        createPublicBreach: (0, a.slot)(),
        forceBreachRefresh: (0, a.slot)(),
        getUserCryptoPayload: (0, a.slot)()
      };
    },
    58427: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.subscribeToE2EEvents = void 0);
      const a = r(3674),
        o = r(17338),
        n = r(37864),
        i = r(71602),
        s = r(32006),
        c = r(79734);
      t.subscribeToE2EEvents = function (e, t) {
        const r = (0, o.getCoreServices)(t),
          l = (0, a.makeTeamAdminController)(r.storeService, r.wsService);
        e.registerFreeTrial.on(l.registerFreeTrial),
          e.getTeamTokens.on(l.getTeamTokens),
          e.confirmFreeTrial.on(l.confirmFreeTrial),
          e.getPremiumStatus.on(l.getPremiumStatus),
          e.proposeMembers.on(l.proposeMembers),
          e.acceptTeamInvite.on(l.acceptTeamInvite),
          e.getTokenForTestUser.on((e) => (0, n.getTokenForKwUser)(r, e)),
          e.getServiceProviderToken.on((e) => (0, i.getServiceProviderToken)(r, e)),
          e.createOrUpdateDarkWebBreach.on((e) => (0, c.createOrUpdateDarkWebBreachHelper)(r, e)),
          e.addPrivateBreach.on((e) => (0, c.addPrivateBreachHelper)(r, e)),
          e.createPublicBreach.on((e) => (0, c.createPublicBreachHelper)(r, e)),
          e.forceBreachRefresh.on(() => {
            (0, s.forceBreachRefreshHandler)(r);
          }),
          e.getUserCryptoPayload.on(() => r.storeService.getPersonalSettings().CryptoUserPayload);
      };
    },
    30855: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.subscribeToE2EEvents = t.carbonE2EConnector = void 0);
      var a = r(39947);
      Object.defineProperty(t, "carbonE2EConnector", {
        enumerable: !0,
        get: function () {
          return a.carbonE2EConnector;
        }
      });
      var o = r(58427);
      Object.defineProperty(t, "subscribeToE2EEvents", {
        enumerable: !0,
        get: function () {
          return o.subscribeToE2EEvents;
        }
      });
    },
    19697: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setEventBus = void 0);
      let r = null;
      (t.setEventBus = (e) => {
        r = e;
      }),
        (t.default = function () {
          return r;
        });
    },
    39421: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setEventBus = void 0);
      let r = null;
      (t.setEventBus = (e) => {
        r = e;
      }),
        (t.default = function () {
          return r;
        });
    },
    44242: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.subscribeToMaverickEvents = void 0);
      const a = r(19065),
        o = r(17338),
        n = r(38865),
        i = r(39421);
      t.subscribeToMaverickEvents = function (e, t) {
        (0, i.setEventBus)(e);
        const r = (0, o.getCoreServices)(t),
          s = (0, a.makeDataManagementController)(r);
        e.savePersonalDataItem.on((e) => {
          s.savePersonalDataItem(e);
        }),
          e.filledDataItem.on((e) => s.updateMetadataItemFilledOnPage(e.id, e.url, e.dataType)),
          e.updateWebOnboardingMode.on((e) => (0, n.updateWebOnboardingMode)(r.storeService, r.sessionService, e));
      };
    },
    21726: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setEventBus = void 0);
      let r = null;
      (t.setEventBus = (e) => {
        r = e;
      }),
        (t.default = function () {
          return r;
        });
    },
    4798: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.subscribeToExtensionEvents = void 0);
      const a = r(2246),
        o = r(90622),
        n = r(70252),
        i = r(38865),
        s = r(25576),
        c = r(17338),
        l = r(5464),
        d = r(88610),
        u = r(21726);
      t.subscribeToExtensionEvents = function (e, t) {
        (0, u.setEventBus)(e);
        const r = (0, c.getCoreServices)(t),
          { storeService: p, storageService: S } = r,
          m = (0, d.makeLoginController)(r),
          g = (0, l.makeSessionController)(r);
        e.getAccountInfo.on(() => g.getAndTriggerRefreshAccountInfo()),
          e.getDevicesList.on(() => g.getDevicesList().then((e) => ({ devicesList: e }))),
          e.getLocalAccountsList.on(() => (0, o.getLocalAccounts)(p, S).then((e) => ({ localAccounts: e }))),
          e.getAnonymousLogsMetadata.on(() => ({ anonymouscomputerid: (0, a.getCommonAppSetting)("anonymousComputerId") })),
          e.askWebsiteInfo.on(({ fullUrl: e }) => g.askWebsiteInfo(e)),
          e.deactivateDevice.on((e) => {
            g.deactivateDevice(e.deviceId);
          }),
          e.changeDeviceName.on((e) => {
            g.changeDeviceName(e.deviceId, e.updatedName);
          }),
          e.checkIfMasterPasswordIsValid.on((e) => g.validateMasterPassword(e.masterPassword).then((e) => ({ isMasterPasswordValid: e }))),
          e.closeSession.on(() => g.closeSession()),
          e.lockSession.on(() => g.lockSession()),
          e.openSession.on(({ login: e, password: t }) => m.openSession(e, { password: t })),
          e.openSessionWithToken.on(({ login: e, password: t, token: r, persistData: a, deviceName: o }) => {
            m.openSessionWithToken(e, t, r, a ? s.PersistData.PERSIST_DATA_YES : s.PersistData.PERSIST_DATA_NO, o);
          }),
          e.openSessionWithDashlaneAuthenticator.on(({ login: e, password: t, persistData: r, deviceName: a }) => {
            m.openSessionWithDashlaneAuthenticator(e, t, r ? s.PersistData.PERSIST_DATA_YES : s.PersistData.PERSIST_DATA_NO, a);
          }),
          e.cancelDashlaneAuthenticatorRegistration.on(() => {
            m.cancelDashlaneAuthenticatorRegistration();
          }),
          e.openSessionResendToken.on((e) => {
            m.openSessionResendToken(e.login);
          }),
          e.openSessionWithOTP.on((e) => {
            m.openSessionWithOTP(e.login, e.password, e.otp);
          }),
          e.openSessionWithOTPForNewDevice.on(({ login: e, password: t, otp: r, persistData: a, deviceName: o }) => {
            m.openSessionWithOTPForNewDevice(e, t, r, a ? s.PersistData.PERSIST_DATA_YES : s.PersistData.PERSIST_DATA_NO, o);
          }),
          e.openSessionWithMasterPassword.on((e) => {
            m.openSessionWithMasterPassword(e.login, e.password, { rememberMasterPassword: e.rememberPassword, serverKey: e.serverKey });
          }),
          e.openExtraDeviceSession.on((e) => {
            m.openExtraDeviceSession(e.login, { password: e.password, serverKey: e.serverKey });
          }),
          e.openSessionWithExtraDeviceToken.on((e) =>
            m.openSessionWithExtraDeviceToken(
              e.login,
              e.extraDeviceToken,
              e.persistData ? s.PersistData.PERSIST_DATA_YES : s.PersistData.PERSIST_DATA_NO,
              { password: e.password, deviceName: e.deviceName }
            )
          ),
          e.sessionForceSync.on((e) => {
            g.sessionForceSync(e.trigger);
          }),
          e.updateWebOnboardingMode.on((e) => {
            i.updateWebOnboardingMode(r.storeService, r.sessionService, e);
          }),
          e.exceptionLog.on((e) => (0, n.sendTypedExceptionLog)("extensionException", e));
      };
    },
    75391: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.subscribeToLeelooEvents = void 0);
      const a = r(71703),
        o = r(70252),
        n = r(25576),
        i = r(90622),
        s = r(17338),
        c = r(5464),
        l = r(38865),
        d = r(88610),
        u = r(15444),
        p = r(3674),
        S = r(63623),
        m = r(58415),
        g = r(97124),
        y = r(33332),
        h = r(58639),
        v = r(89675),
        f = r(19065),
        w = r(19697);
      t.subscribeToLeelooEvents = function (e, t) {
        (0, w.setEventBus)(e);
        const r = (0, s.getCoreServices)(t),
          { applicationModulesAccess: A, storeService: P, localStorageService: T, wsService: b, sessionService: I, storageService: C } = r,
          E = (0, a.makeAccountCreationController)(r),
          _ = (0, c.makeSessionController)(r),
          D = (0, d.makeLoginController)(r),
          O = (0, f.makeDataManagementController)(r),
          M = (0, u.makeRecoveryController)(P, b),
          N = (0, v.makeSettingsController)(P, b),
          F = (0, p.makeTeamAdminController)(P, b),
          U = (0, g.makeSharingService)(P, b),
          L = (0, m.makeDirectorySyncController)({
            storeService: P,
            localStorageService: T,
            wsService: b,
            sessionService: I,
            sharingService: U
          }),
          k = (0, y.makeStaticDataController)();
        e.getUki.on(() => _.getUki()),
          e.savePaymentCard.on((e) => {
            O.savePaymentCardFromClient(e);
          }),
          e.savePersonalDataItem.on((e) => O.savePersonalDataItem(e)),
          e.removePersonalDataItem.on((e) => O.removePersonalDataItem(e.id)),
          e.getAccountInfo.on(() => _.getAndTriggerRefreshAccountInfo()),
          e.getDevicesList.on(() => _.getDevicesList().then((e) => ({ devicesList: e }))),
          e.getLocalAccountsList.on(() => (0, i.getLocalAccounts)(P, C).then((e) => ({ localAccounts: e }))),
          e.getTemporaryToken.on(() => _.getTemporaryToken().then((e) => ({ temporaryToken: e }))),
          e.deactivateDevice.on((e) => {
            _.deactivateDevice(e.deviceId);
          }),
          e.changeDeviceName.on((e) => {
            _.changeDeviceName(e.deviceId, e.updatedName);
          }),
          e.cancelPremiumSubscription.on(() => _.cancelPremiumSubscription()),
          e.getInvoices.on(() => _.getInvoices().then((e) => ({ invoices: e }))),
          e.closeSession.on(() => _.closeSession()),
          e.lockSession.on(() => _.lockSession()),
          e.resumeSession.on(() => _.resumeSession()),
          e.getPersonalSettings.on(() => _.getPersonalSettings().then((e) => e)),
          e.openSession.on(({ login: e, password: t }) => D.openSession(e, { password: t })),
          e.openSessionWithToken.on(({ login: e, password: t, token: r, persistData: a, deviceName: o }) => {
            D.openSessionWithToken(e, t, r, a ? n.PersistData.PERSIST_DATA_YES : n.PersistData.PERSIST_DATA_NO, o);
          }),
          e.openSessionWithDashlaneAuthenticator.on(({ login: e, password: t, persistData: r, deviceName: a }) => {
            D.openSessionWithDashlaneAuthenticator(e, t, r ? n.PersistData.PERSIST_DATA_YES : n.PersistData.PERSIST_DATA_NO, a);
          }),
          e.cancelDashlaneAuthenticatorRegistration.on(() => {
            D.cancelDashlaneAuthenticatorRegistration();
          }),
          e.openSessionResendToken.on((e) => {
            D.openSessionResendToken(e.login);
          }),
          e.openSessionWithOTP.on((e) => {
            D.openSessionWithOTP(e.login, e.password, e.otp, void 0, e.withBackupCode);
          }),
          e.openSessionWithOTPForNewDevice.on(({ login: e, password: t, otp: r, persistData: a, deviceName: o, withBackupCode: i }) => {
            D.openSessionWithOTPForNewDevice(e, t, r, a ? n.PersistData.PERSIST_DATA_YES : n.PersistData.PERSIST_DATA_NO, o, i);
          }),
          e.openSessionWithMasterPassword.on((e) =>
            D.openSessionWithMasterPassword(e.login, e.password, {
              rememberMasterPassword: e.rememberPassword,
              requiredPermissions: e.requiredPermissions,
              serverKey: e.serverKey
            })
          ),
          e.openExtraDeviceSession.on((e) => {
            D.openExtraDeviceSession(e.login, { password: e.password, serverKey: e.serverKey });
          }),
          e.openSessionWithExtraDeviceToken.on((e) =>
            D.openSessionWithExtraDeviceToken(
              e.login,
              e.extraDeviceToken,
              e.persistData ? n.PersistData.PERSIST_DATA_YES : n.PersistData.PERSIST_DATA_NO,
              { password: e.password, deviceName: e.deviceName }
            )
          ),
          e.sessionForceSync.on((e) => _.sessionForceSync(e.trigger)),
          e.exceptionLog.on((e) => (0, o.sendTypedExceptionLog)("leelooException", e)),
          e.teamUpdated.on((e) => F.teamUpdateHandler(e).then((e) => ({ errors: e }))),
          e.createUserGroup.on((e) => F.createUserGroupAction(I, e)),
          e.deleteUserGroup.on((e) => F.deleteUserGroupAction(e)),
          e.renameUserGroup.on((e) => F.renameUserGroupAction(e)),
          e.inviteUserGroupMembers.on((e) => F.inviteUserGroupMembersAction(e)),
          e.revokeUserGroupMembers.on((e) => F.revokeUserGroupMembersAction(e)),
          e.updateUserGroupMembers.on((e) => F.updateUserGroupMembersAction(e)),
          e.createAccountStep1.on((e) => E.createAccount(e)),
          e.createAccountStep2.on((e) => E.confirmAccountCreation(e)),
          e.checkLogin.on((e) => E.checkLogin(e)),
          e.getMasterPasswordResetDemandList.on((e) => M.getMasterPasswordResetDemandList(e)),
          e.acceptMasterPasswordResetDemand.on((e) => M.acceptMasterPasswordResetDemand(e)),
          e.checkIfMasterPasswordIsValid.on((e) => _.validateMasterPassword(e.masterPassword).then((e) => ({ isMasterPasswordValid: e }))),
          e.declineMasterPasswordResetDemand.on((e) => M.declineMasterPasswordResetDemand(e)),
          e.getMembers.on((e) => F.getMembers(e)),
          e.addTeamAdmin.on((e) => F.addTeamAdmin(e)),
          e.removeTeamAdmin.on((e) => F.removeTeamAdmin(e)),
          e.setTeamSettings.on((e) => N.setTeamSettings(e)),
          e.updateWebOnboardingMode.on((e) => l.updateWebOnboardingMode(P, I, e)),
          e.checkDirectorySyncKeyResponse.on((e) => {
            const { teamId: t, publicKey: r, requestId: a, response: o } = e;
            "validated" === o ? L.keyValidatedByTacAdmin(t, r) : "rejected" === o && L.keyRejectedByTacAdmin(t, a);
          }),
          e.queryStaticDataCollections.on((e) => k.query(e)),
          e.sendSharingResponse.on((e) => (0, S.handleSharingResponse)(A, P, I, e)),
          e.getDataModel.on(() => (0, h.getDataUpdates)(P).obfuscatedPersonalDataToSend),
          e.getSharingSync.on(() => P.getState().userSession.sharingSync),
          e.getSharingData.on(() => P.getSharingData()),
          e.revokeSharing.on(({ itemGroupId: e, recipient: t }) => (0, S.handleRevokeSharing)(A, P, I, b, e, t)),
          e.updateSharingPermission.on(({ itemGroupId: e, recipient: t, permission: r }) =>
            (0, S.handleUpdateSharingPermission)(P, I, b, e, t, r)
          ),
          e.setPendingElementsAsSeen.on((e) => (0, S.setPendingElementsAsSeen)(P, T, e)),
          e.isUserLastAdminOnItem.on((e) => (0, S.isUserLastAdminOnItem)(P, e)),
          e.doesUserReceiveItemViaGroup.on((e) => (0, S.doesUserReceiveItemViaGroup)(P, e));
      };
    },
    58513: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(75653),
        o = r(57193);
      t.config = {
        commands: { changeUserCrypto: { handler: o.changeUserCrypto } },
        queries: {
          getCanUserChangeCrypto: { selector: a.canUserSelectCryptoSelector },
          getUserDerivationMethod: { selector: a.userDerivationMethodSelector }
        },
        liveQueries: { liveUserDerivationMethod: { operator: a.userDerivationMethodSelector$ } }
      };
    },
    21344: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(58513);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    21583: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(21344);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    75653: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.userDerivationMethodSelector$ =
          t.userDerivationMethodSelector =
          t.canUserSelectCryptoSelector =
          t.teamCryptoForcedPayloadSelector =
          t.hasCryptoMigrationPhase2EnabledSelector =
          t.hasCryptoMigrationPhase1EnabledSelector =
            void 0);
      const a = r(18948),
        o = r(3343),
        n = r(32626),
        i = r(7944),
        s = r(88205),
        c = r(65675),
        l = r(16593);
      t.hasCryptoMigrationPhase1EnabledSelector = async (e) =>
        (await (0, s.makeFeatureFlipsSelectors)(e.applicationModulesAccess).featureFlipsSelector()).itadmin_SAEX_CryptoMigration_Phase1;
      t.hasCryptoMigrationPhase2EnabledSelector = async (e) =>
        (await (0, s.makeFeatureFlipsSelectors)(e.applicationModulesAccess).featureFlipsSelector()).itadmin_SAEX_CryptoMigration_Phase2;
      t.teamCryptoForcedPayloadSelector = (e) => {
        const t = (0, i.activeSpacesSelector)(e)[0];
        return t?.details.info.cryptoForcedPayload ?? "";
      };
      t.canUserSelectCryptoSelector = (e) => !(0, t.teamCryptoForcedPayloadSelector)(e);
      t.userDerivationMethodSelector = (e) => {
        switch ((0, l.userDefaultCryptoSelector)(e)) {
          case c.ARGON2_DEFAULT_PAYLOAD:
            return n.SupportedDerivationMethods.ARGON2D;
          case c.PBKDF2_DEFAULT_PAYLOAD:
            return n.SupportedDerivationMethods.PBKDF2;
          case c.KWC3_DEFAULT_PAYLOAD:
            return n.SupportedDerivationMethods.KWC3;
          default:
            return null;
        }
      };
      t.userDerivationMethodSelector$ = () => (0, a.pipe)((0, o.map)(t.userDerivationMethodSelector), (0, o.distinctUntilChanged)());
    },
    57193: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.changeUserCrypto = void 0);
      const a = r(93039),
        o = r(55696),
        n = r(48238);
      t.changeUserCrypto = async function (e, { newDerivationMethod: t }) {
        const { storeService: r } = e,
          i = r.getPersonalSettings().CryptoUserPayload,
          s = (0, n.getNewCryptoPayload)(t);
        if (!s) throw new Error(`[changeUserCrypto] - client sent wrong derivation value (${t})`);
        return await (0, o.migrateUserCrypto)(e, i, s, a.CryptoMigrationType.SettingsChange);
      };
    },
    77965: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.decryptAllTransactions = void 0);
      const a = r(16859),
        o = r(83638);
      t.decryptAllTransactions = async function (e, t, r) {
        const { announce: n } = r.getInstance().user.getSyncArgs(),
          i = e.map(async (e) => ({
            ...e,
            content: await (0, a.decryptTransactionContent)(t.getInstance(), n, e).catch((t) => {
              if (e.type !== o.TransactionType.SETTINGS) return "";
              throw t;
            })
          }));
        return (await Promise.all(i)).filter((e) => !!e.content);
      };
    },
    9027: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.decryptAllUserData = void 0);
      const a = r(33740),
        o = r(77965);
      t.decryptAllUserData = async function (e, t, r, { transactions: n, sharingKeys: i }) {
        try {
          const s = await (0, o.decryptAllTransactions)(n, r, e);
          return { clearTransactions: s, clearPrivateKey: await (0, a.decipherPrivateKey)(t, r, i) };
        } catch (e) {
          throw new Error(`decipherAllUserData failed with error: ${e}`);
        }
      };
    },
    73909: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDataToMigrate = void 0);
      const a = r(93039),
        o = r(46298),
        n = r(16593);
      t.getDataToMigrate = async function (e, t) {
        try {
          const t = e.getState(),
            r = (0, n.userLoginSelector)(t),
            a = await (0, o.getDataForMasterPasswordChange)(e, r, {});
          if ((0, o.isApiError)(a)) throw new Error(`getDataDoMigrate failed with error: ${a}`);
          return { transactions: a.data.transactions, sharingKeys: a.data.sharingKeys, timestamp: a.timestamp };
        } catch (e) {
          throw (t(a.CryptoMigrationStatus.ErrorDownload), new Error(`getDataDoMigrate failed with error: ${e}`));
        }
      };
    },
    48238: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getNewCryptoPayload = void 0);
      const a = r(32626),
        o = r(65675);
      t.getNewCryptoPayload = function (e) {
        switch (e) {
          case a.SupportedDerivationMethods.ARGON2D:
            return o.ARGON2_DEFAULT_PAYLOAD;
          case a.SupportedDerivationMethods.PBKDF2:
            return o.PBKDF2_DEFAULT_PAYLOAD;
          case a.SupportedDerivationMethods.KWC3:
            return o.KWC3_DEFAULT_PAYLOAD;
          default:
            return;
        }
      };
    },
    18767: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.reEncryptAllUserData = void 0);
      const a = r(93039),
        o = r(33740),
        n = r(16859);
      t.reEncryptAllUserData = async function (e, { clearTransactions: t, clearPrivateKey: r }, i) {
        try {
          const a = t.map((t) => (0, n.encryptSingleTransaction)(e, t)),
            i = await Promise.all(a);
          return { encryptedTransactions: i, encryptedPrivateKey: await (0, o.cipherPrivateKey)(e, r) };
        } catch (e) {
          throw (i(a.CryptoMigrationStatus.ErrorReencryption), new Error(`reEncryptAllUserData failed with error: ${e}`));
        }
      };
    },
    46076: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.resetMasterPasswordEncryptorService = void 0);
      const a = r(65675),
        o = r(16593);
      t.resetMasterPasswordEncryptorService = function (e, t) {
        const { storeService: r, masterPasswordEncryptorService: n } = e,
          i = r.getState(),
          s = (0, o.masterPasswordSelector)(i),
          c = (0, o.serverKeySelector)(i),
          l = t === a.KWC3_DEFAULT_PAYLOAD ? (0, a.getLegacyCryptoConfig)(t) : (0, a.parsePayload)(t).cryptoConfig;
        n.setInstance({ raw: s }, c, l);
      };
    },
    36116: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateAndPersistLocalData = void 0);
      const a = r(93039),
        o = r(16038),
        n = r(55623),
        i = r(27517);
      t.updateAndPersistLocalData = async function (e, t, r, s, c) {
        try {
          e.dispatch(
            (0, i.editPersonalSettings)({ CryptoUserPayload: s, CryptoFixedSalt: (0, o.bufferToBase64)((0, n.getRandomValues)(16)) })
          ),
            await t.getInstance().user.persistPersonalSettings();
          const a = await r.getInstance().getLocalKey();
          await t.getInstance().user.persistLocalKey(a);
        } catch (e) {
          throw (c(a.CryptoMigrationStatus.ErrorUpdateLocalData), new Error(`updateAndPersistLocalData failed with error: ${e}`));
        }
      };
    },
    34726: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.uploadDataOnServer = void 0);
      const a = r(93039),
        o = r(33740),
        n = r(46298),
        i = r(69214),
        s = r(16593);
      t.uploadDataOnServer = async function (e, t, r) {
        try {
          const r = e.getState(),
            a = (0, s.userLoginSelector)(r),
            c = { ...t, transactions: (0, o.formatTransaction)(t.transactions) },
            l = await (0, i.uploadDataForCryptoChange)(e, a, c);
          if ((0, n.isApiError)(l)) throw new Error(`uploadDataForCryptoChange failed with error: ${l}`);
        } catch (e) {
          throw (r(a.CryptoMigrationStatus.ErrorUpload), new Error(`uploadDataForCryptoChange failed with error: ${e}`));
        }
      };
    },
    55696: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.migrateUserCrypto = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(65675),
        i = r(70252),
        s = r(57903),
        c = r(9027),
        l = r(73909),
        d = r(18767),
        u = r(46076),
        p = r(36116),
        S = r(34726),
        m = {
          [n.KWC3_DEFAULT_PAYLOAD]: a.CryptoAlgorithm.Kwc3,
          [n.ARGON2_DEFAULT_PAYLOAD]: a.CryptoAlgorithm.Argon2d,
          [n.PBKDF2_DEFAULT_PAYLOAD]: a.CryptoAlgorithm.Pbkdf2
        };
      t.migrateUserCrypto = async function (e, t, r, n) {
        try {
          const {
            sessionService: i,
            storeService: g,
            masterPasswordEncryptorService: y,
            localStorageService: h,
            eventLoggerService: v
          } = e;
          if (!(await (0, s.waitUntilSyncComplete)(g)))
            return { success: !1, error: { code: o.CryptoMigrationApiErrorType.ChangeUserCryptoFailed } };
          const f = (e) => v.logEvent(new a.UserMigrateCryptoEvent({ newCrypto: m[r], previousCrypto: m[t], type: n, status: e })),
            { transactions: w, sharingKeys: A, timestamp: P } = await (0, l.getDataToMigrate)(g, f),
            { clearTransactions: T, clearPrivateKey: b } = await (0, c.decryptAllUserData)(i, g, y, { transactions: w, sharingKeys: A });
          (0, u.resetMasterPasswordEncryptorService)(e, r);
          const { encryptedTransactions: I, encryptedPrivateKey: C } = await (0, d.reEncryptAllUserData)(
            y,
            { clearTransactions: T, clearPrivateKey: b },
            f
          );
          return (
            await (0, S.uploadDataOnServer)(
              g,
              { timestamp: P, transactions: I, sharingKeys: { publicKey: A.publicKey, privateKey: C } },
              f
            ),
            await (0, p.updateAndPersistLocalData)(g, i, h, r, f),
            await i.getInstance().user.attemptSync(a.Trigger.SettingsChange),
            f(a.CryptoMigrationStatus.Success),
            { success: !0 }
          );
        } catch (r) {
          return (
            (0, u.resetMasterPasswordEncryptorService)(e, t),
            (0, i.sendExceptionLog)({
              funcName: "migrateUserCrypto",
              fileName: "/carbon/src/CryptoMigration/services/migrate-user-crypto.ts",
              message: `Migration from KWC3 to Argon2 failed with error: ${r}`
            }),
            { success: !1, error: { code: o.CryptoMigrationApiErrorType.ChangeUserCryptoFailed, message: r.message } }
          );
        }
      };
    },
    63549: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const a = r(55696),
        o = r(93039),
        n = r(75653),
        i = r(65675),
        s = r(16593);
      t.setupSubscriptions = function (e, t) {
        e.sessionOpened.on(() => {
          const { storeService: e } = t,
            r = e.getState(),
            c = (0, n.hasCryptoMigrationPhase1EnabledSelector)(t),
            l = (0, n.hasCryptoMigrationPhase2EnabledSelector)(t),
            d = (0, n.teamCryptoForcedPayloadSelector)(r),
            u = (0, s.userDefaultCryptoSelector)(r);
          !c || d || u !== i.KWC3_DEFAULT_PAYLOAD
            ? l && d && d !== u && (0, a.migrateUserCrypto)(t, u, d, o.CryptoMigrationType.TeamEnforced)
            : (0, a.migrateUserCrypto)(t, i.KWC3_DEFAULT_PAYLOAD, i.ARGON2_DEFAULT_PAYLOAD, o.CryptoMigrationType.MigrateLegacy);
        });
      };
    },
    44812: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(52921),
        o = r(31858);
      t.config = {
        commands: {
          getDarkWebInsightsReportResults: { handler: a.getDarkWebInsightsReportResults },
          getDarkWebInsightsSummary: { handler: o.getDarkWebInsightsSummary }
        },
        queries: {},
        liveQueries: {}
      };
    },
    1945: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(44812);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    76592: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(1945);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    52921: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDarkWebInsightsReportResults = void 0);
      const a = r(32626),
        o = r(16593),
        n = r(46298),
        i = r(82512);
      t.getDarkWebInsightsReportResults = async function (e, t) {
        const { storeService: r } = e,
          s = r.getState(),
          c = (0, o.userLoginSelector)(s),
          l = await (0, i.getDarkWebInsightReport)(r, c, t);
        return (0, n.isApiError)(l)
          ? {
              success: !1,
              error: {
                code: a.DarkWebInsightsApiErrorType.GetDarkWebInsightsFailed,
                message: `get Dark Web Insights Report failed: ${l.message}`
              }
            }
          : { success: !0, data: l };
      };
    },
    31858: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDarkWebInsightsSummary = void 0);
      const a = r(32626),
        o = r(16593),
        n = r(46298),
        i = r(19667);
      t.getDarkWebInsightsSummary = async function (e) {
        const { storeService: t } = e,
          r = t.getState(),
          s = (0, o.userLoginSelector)(r),
          c = await (0, i.getDarkWebInsightsSummaryRequest)(t, s);
        return (0, n.isApiError)(c)
          ? {
              success: !1,
              error: {
                code: a.DarkWebInsightsApiErrorType.GetDarkWebInsightsSummaryFailed,
                message: `get Dark Web Insights Summary failed: ${c.message}`
              }
            }
          : { success: !0, data: c };
      };
    },
    52578: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isCredentialSmartCategorized = t.isSpaceQuarantined = void 0);
      const a = r(21178),
        o = r(6205);
      (t.isSpaceQuarantined = function (e) {
        return (
          !!e &&
          !("accepted" === e.details.status.toLowerCase() || !e.details.info) &&
          Boolean(e.details.info.forcedDomainsEnabled) &&
          Boolean(e.details.info.removeForcedContentEnabled)
        );
      }),
        (t.isCredentialSmartCategorized = function (e, t) {
          if (!e) return !1;
          let r = "";
          if (e.Url) {
            const t = new a.ParsedURL(e.Url).getRootDomain();
            r = t ? t.toLowerCase() : "";
          }
          const n = e.Email ? e.Email.toLowerCase() : "",
            i = e.Login ? e.Login.toLowerCase() : "",
            s = e.SecondaryLogin ? e.SecondaryLogin.toLowerCase() : "",
            c = (0, o.getUserAddedLinkedWebsiteDomains)(e).map((e) => e.toLowerCase());
          return (
            t.filter((e) => {
              const t = e.toLowerCase();
              return r.includes(t) || n.includes(t) || i.includes(t) || s.includes(t) || c.some((e) => e.includes(t));
            }).length > 0
          );
        });
    },
    76235: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(5847),
        o = r(4914),
        n = r(43837),
        i = r(2946),
        s = r(13648),
        c = r(15141),
        l = r(2282),
        d = r(81911),
        u = r(8453),
        p = r(68728),
        S = r(17025),
        m = r(57718),
        g = r(36351),
        y = r(72580),
        h = r(64489),
        v = r(75912),
        f = r(95633),
        w = r(6210),
        A = r(14037),
        P = r(80818),
        T = r(3474),
        b = r(80529),
        I = r(60309),
        C = r(45665),
        E = r(74172),
        _ = r(2105),
        D = r(11230),
        O = r(16458);
      t.config = {
        commands: {
          ...g.config.commands,
          ...O.vaultConfig.commands,
          ...a.config.commands,
          ...o.config.commands,
          ...n.config.commands,
          ...y.config.commands,
          ...i.config.commands,
          ...s.config.commands,
          ...h.config.commands,
          ...v.config.commands,
          ...c.config.commands,
          ...T.config.commands,
          ...f.config.commands,
          ...l.config.commands,
          ...D.importApiConfig.commands,
          ...P.config.commands,
          ...d.config.commands,
          ...u.config.commands,
          ...p.config.commands,
          ...S.config.commands,
          ...w.config.commands,
          ...A.config.commands,
          ..._.config.commands,
          ...b.config.commands,
          ...E.config.commands,
          ...I.config.commands,
          ...m.config.commands
        },
        queries: {
          ...g.config.queries,
          ...O.vaultConfig.queries,
          ...a.config.queries,
          ...o.config.queries,
          ...y.config.queries,
          ...i.config.queries,
          ...s.config.queries,
          ...h.config.queries,
          ...v.config.queries,
          ...c.config.queries,
          ...T.config.queries,
          ...f.config.queries,
          ...l.config.queries,
          ...D.importApiConfig.queries,
          ...P.config.queries,
          ...d.config.queries,
          ...u.config.queries,
          ...p.config.queries,
          ...S.config.queries,
          ...w.config.queries,
          ...A.config.queries,
          ..._.config.queries,
          ...b.config.queries,
          ...I.config.queries,
          ...m.config.queries,
          ...C.config.queries
        },
        liveQueries: {
          ...g.config.liveQueries,
          ...a.config.liveQueries,
          ...o.config.liveQueries,
          ...y.config.liveQueries,
          ...i.config.liveQueries,
          ...s.config.liveQueries,
          ...h.config.liveQueries,
          ...c.config.liveQueries,
          ...T.config.liveQueries,
          ...f.config.liveQueries,
          ...l.config.liveQueries,
          ...D.importApiConfig.liveQueries,
          ...P.config.liveQueries,
          ...d.config.liveQueries,
          ...u.config.liveQueries,
          ...p.config.liveQueries,
          ...S.config.liveQueries,
          ...w.config.liveQueries,
          ...A.config.liveQueries,
          ..._.config.liveQueries,
          ...b.config.liveQueries,
          ...I.config.liveQueries,
          ...m.config.liveQueries
        }
      };
    },
    5847: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(16018),
        o = r(13370),
        n = r(8639);
      t.config = {
        commands: {
          addBankAccount: { handler: n.addBankAccountHandler },
          updateBankAccount: { handler: n.updateBankAccountHandler },
          deleteBankAccount: { handler: n.deleteBankAccountHandler }
        },
        queries: {
          getBankAccount: { selector: a.viewedBankAccountSelector },
          getBankAccounts: { selector: a.viewedQueriedBankAccountsSelector }
        },
        liveQueries: { liveBankAccount: { operator: o.getBankAccount$ }, liveBankAccounts: { operator: o.bankAccounts$ } }
      };
    },
    14369: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addBankAccountHandler = t.getNewBankAccount = void 0);
      const a = r(32626),
        o = r(93039),
        n = r(23136),
        i = r(92882),
        s = r(48313),
        c = r(53),
        l = r(78320),
        d = r(70252),
        u = r(13675),
        p = r(79980);
      (t.getNewBankAccount = (e) => {
        const t = (0, c.getUnixTimestamp)();
        return {
          kwType: "KWBankStatement",
          Id: (0, l.generateItemUuid)(),
          LastBackupTime: 0,
          LocaleFormat: (0, i.defaultToUS)(e.country),
          AnonId: (0, l.generateItemUuid)(),
          SpaceId: (0, i.defaultToEmptyString)(e.spaceId),
          CreationDatetime: t,
          UserModificationDatetime: t,
          BankAccountName: (0, i.defaultToEmptyString)(e.name),
          BankAccountOwner: (0, i.defaultToEmptyString)(e.owner),
          BankAccountIBAN: (0, i.defaultToEmptyString)(e.IBAN),
          BankAccountBIC: (0, i.defaultToEmptyString)(e.BIC),
          BankAccountBank: (0, i.defaultToEmptyString)(e.bank)
        };
      }),
        (t.addBankAccountHandler = async function (e, r) {
          if ("" === r.BIC && "" === r.IBAN) return { success: !1, error: { code: a.AddBankAccountResultErrorCode.EMPTY_BIC_AND_IBAN } };
          try {
            await (async function ({ storeService: e, sessionService: r, eventLoggerService: a }, o) {
              if (!e.isAuthenticated()) throw new Error("No session available to saveBankAccount");
              const i = (0, u.sanitizeInputPersonalData)(o),
                c = (0, t.getNewBankAccount)(i);
              if (!c.SpaceId) {
                const t = await (0, n.getDefaultSpaceId)(e);
                c.SpaceId = t;
              }
              (0, p.logAddVaultItem)(e, a, c),
                e.dispatch((0, s.savePersonalDataItem)(c, c.kwType)),
                r.getInstance().user.persistPersonalData();
            })(e, r);
            return (0, n.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, o.Trigger.Save), { success: !0 };
          } catch (e) {
            return (0, d.sendExceptionLog)({ error: e }), { success: !1 };
          }
        });
    },
    3242: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteBankAccountHandler = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(16018),
        i = r(23136),
        s = r(45291),
        c = r(70252),
        l = r(79980),
        d = ({ storeService: e, eventLoggerService: t }, r) => {
          const a = e.getState();
          try {
            if (!e.isAuthenticated()) return { success: !1, error: { code: o.DeleteBankAccountErrorCode.NOT_AUTHORIZED } };
            const i = (0, n.bankAccountSelector)(a, r);
            if (!i) return { success: !1, error: { code: o.DeleteBankAccountErrorCode.NOT_FOUND } };
            (0, l.logDeleteVaultItem)(e, t, i);
            const c = (0, s.removePersonalItem)(i.kwType, i.Id, null);
            return e.dispatch(c), { success: !0 };
          } catch (e) {
            const t = new Error(`[BankAccounts] - deleteBankAccount: ${e}`);
            return (0, c.sendExceptionLog)({ error: t }), { success: !1, error: { code: o.DeleteBankAccountErrorCode.INTERNAL_ERROR } };
          }
        };
      t.deleteBankAccountHandler = function (e, { id: t }) {
        const r = d(e, t);
        if (r.success) {
          (0, i.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save);
        }
        return Promise.resolve(r);
      };
    },
    8639: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(14369), t), o(r(31570), t), o(r(3242), t);
    },
    31570: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.updateBankAccountHandler = t.getUpdatedBankAccount = t.getBankAccountModifiedProperties = void 0);
      const a = r(32626),
        o = r(93039),
        n = r(16018),
        i = r(23136),
        s = r(48313),
        c = r(53),
        l = r(70252),
        d = r(85406),
        u = r(13675),
        p = r(79980),
        S = (e) => {
          if (void 0 === e) return !1;
          return void 0 === (0, d.getAllBanks)()[e];
        };
      function m(e, r) {
        const a = (0, n.bankAccountSelector)(e, r.id);
        if (!a) return;
        const o = (0, t.getBankAccountModifiedProperties)(r, a),
          i = (0, c.getUnixTimestamp)();
        return { ...a, ...o, UserModificationDatetime: i };
      }
      (t.getBankAccountModifiedProperties = (e, t) => ({
        BankAccountName: e.name ?? t.BankAccountName,
        BankAccountOwner: e.owner ?? t.BankAccountOwner,
        BankAccountIBAN: e.IBAN ?? t.BankAccountIBAN,
        BankAccountBIC: e.BIC ?? t.BankAccountBIC,
        BankAccountBank: e.bank ?? (S(e.country) ? "" : t.BankAccountBank),
        SpaceId: e.spaceId ?? t.SpaceId,
        LocaleFormat: e.country ?? t.LocaleFormat
      })),
        (t.getUpdatedBankAccount = m),
        (t.updateBankAccountHandler = function (e, t) {
          try {
            const r = (function ({ storeService: e, sessionService: t, eventLoggerService: r }, o) {
              if (!e.isAuthenticated()) throw new Error("No session available to updateBankAccount");
              const i = e.getState(),
                c = m(i, (0, u.sanitizeInputPersonalData)(o));
              if (!c) return { success: !1 };
              if ("" === c.BankAccountBIC && "" === c.BankAccountIBAN)
                return { success: !1, error: { code: a.UpdateBankAccountResultErrorCode.EMPTY_BIC_AND_IBAN } };
              const l = (0, n.bankAccountSelector)(i, o.id);
              return (
                (0, p.logEditVaultItem)(e, r, c, l),
                e.dispatch((0, s.savePersonalDataItem)(c, c.kwType)),
                t.getInstance().user.persistPersonalData(),
                { success: !0 }
              );
            })(e, t);
            if (!r.success) return Promise.resolve(r);
            return (
              (0, i.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, o.Trigger.Save),
              Promise.resolve({ success: !0 })
            );
          } catch (e) {
            return (0, l.sendExceptionLog)({ error: e }), Promise.resolve({ success: !1 });
          }
        });
    },
    92882: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getBankInfoFromBankAccountData = t.defaultToUS = t.defaultToEmptyString = void 0);
      const a = r(16516),
        o = r(32626),
        n = r(85406);
      (t.defaultToEmptyString = (0, a.defaultTo)("")), (t.defaultToUS = (0, a.defaultTo)(o.Country.US));
      t.getBankInfoFromBankAccountData = (e) => {
        const r = (0, t.defaultToUS)(e.LocaleFormat),
          { banks: a } = (0, n.getBanks)({ country: r }),
          o = ((e, r) => {
            if (r) {
              const [a, o] = (0, t.defaultToEmptyString)(e).split("-"),
                n = r.find(({ code: e }) => [a, o].includes(e))?.code;
              return n || "NO_TYPE";
            }
            return "";
          })(e.BankAccountBank, a),
          i = o?.length > 0 ? `${r}-${o}` : "",
          s = (0, t.defaultToEmptyString)(a?.find(({ code: e }) => e === o)?.localizedString);
        return { country: r, bankCode: o, bankLocalizedName: s, bank: i };
      };
    },
    48931: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeBankAccountSpecificProps = t.makeNewBankAccount = t.makeUpdatedBankAccount = void 0);
      const a = r(16516),
        o = r(53),
        n = r(78163);
      function i(e) {
        const t = (0, a.defaultTo)("");
        return {
          BankAccountName: t(e.name),
          BankAccountOwner: t(e.owner),
          BankAccountIBAN: t(e.IBAN),
          BankAccountBIC: t(e.BIC),
          BankAccountBank: t(e.bank)
        };
      }
      (t.makeUpdatedBankAccount = async function (e, t) {
        const r = (0, n.makeUpdatedPersonalDataItemBase)({ existingItem: t, updatedItem: e, itemUpdateDate: (0, o.getUnixTimestamp)() });
        return { ...t, ...r, ...i(e.content) };
      }),
        (t.makeNewBankAccount = async function (e) {
          return { ...(0, n.makeNewPersonalDataItemBase)(e), ...i(e.content) };
        }),
        (t.makeBankAccountSpecificProps = i);
    },
    13370: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getBankAccount$ = t.bankAccounts$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(16018);
      t.bankAccounts$ = (0, n.getLivePersonalInfo)(i.getLiveBankAccountsSelector);
      t.getBankAccount$ = (e) => {
        const t = (0, i.getViewedBankAccountSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    60931: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getBankAccountMappers = void 0);
      const a = r(83539);
      t.getBankAccountMappers = () => ({
        spaceId: (e) => e.SpaceId,
        accountName: (e) => e.BankAccountName,
        bankName: (e) => e.BankAccountBank,
        lastUse: a.lastUseMapper,
        id: (e) => e.Id
      });
    },
    53704: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bankAccountMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234);
      (t.searchGetters = [
        (0, o.stringProp)("BankAccountName"),
        (0, o.stringProp)("BankAccountOwner"),
        (0, o.stringProp)("BankAccountBank")
      ]),
        (t.bankAccountMatch = (0, a.match)(t.searchGetters));
    },
    16018: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedBankAccountSelector =
          t.viewedBankAccountSelector =
          t.getLiveBankAccountsSelector =
          t.viewedQueriedBankAccountsSelector =
          t.queryBankAccountsSelector =
          t.bankAccountMappersSelector =
          t.bankAccountSelector =
          t.bankAccountsSelector =
            void 0);
      const a = r(16516),
        o = r(53704),
        n = r(62826),
        i = r(24589),
        s = r(63566),
        c = r(97006),
        l = r(49551),
        d = r(32034),
        u = r(60931),
        p = r(57989),
        S = r(40602);
      t.bankAccountsSelector = (0, d.createSelector)(
        (e) => e.userSession.personalData.bankAccounts,
        p.quarantinedSpacesSelector,
        S.filterOutQuarantinedItems
      );
      t.bankAccountSelector = (e, r) => {
        const a = (0, t.bankAccountsSelector)(e);
        return (0, l.findDataModelObject)(r, a);
      };
      t.bankAccountMappersSelector = (e) => (0, u.getBankAccountMappers)();
      const m = () => o.bankAccountMatch;
      (t.queryBankAccountsSelector = (0, i.getQuerySelector)(t.bankAccountsSelector, m, t.bankAccountMappersSelector)),
        (t.viewedQueriedBankAccountsSelector = (0, a.compose)((0, s.viewListResults)(n.listView), t.queryBankAccountsSelector)),
        (t.getLiveBankAccountsSelector = (0, c.makeLiveSelectorGetter)(
          t.bankAccountsSelector,
          () => n.listView,
          m,
          t.bankAccountMappersSelector
        ));
      t.viewedBankAccountSelector = (e, r) => {
        const a = (0, t.bankAccountSelector)(e, r);
        return (0, n.detailView)(a);
      };
      t.getViewedBankAccountSelector = (e) => {
        const r = (0, d.createSelector)(t.bankAccountsSelector, (t) => (0, l.findDataModelObject)(e, t));
        return (0, d.createSelector)(r, n.detailView);
      };
    },
    62826: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.detailView = void 0);
      const a = r(82043),
        o = r(92882),
        n = (e) => {
          const t = (0, o.getBankInfoFromBankAccountData)(e);
          return {
            name: (0, o.defaultToEmptyString)(e.BankAccountName),
            owner: (0, o.defaultToEmptyString)(e.BankAccountOwner),
            IBAN: (0, o.defaultToEmptyString)(e.BankAccountIBAN),
            BIC: (0, o.defaultToEmptyString)(e.BankAccountBIC),
            bank: t.bank,
            country: t.country,
            bankCode: t.bankCode,
            bankLocalizedName: t.bankLocalizedName
          };
        };
      t.detailView = (e) => ({ ...(0, a.dataModelDetailView)(e), ...n(e) });
      t.itemView = (e) => ({ ...(0, a.dataModelItemView)(e), ...n(e) });
      t.listView = (e) => e.map(t.itemView);
    },
    4914: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(21342),
        o = r(52283),
        n = r(44444);
      t.config = {
        commands: { updateBreachStatus: { handler: n.updateBreachStatusHandler } },
        queries: {
          getBreach: { selector: a.viewedBreachSelector },
          getBreaches: { selector: a.viewedQueriedBreachesSelector },
          getBreachesPage: { selector: a.breachesPageSelector },
          getBreachesPaginationToken: { selector: a.breachesPaginationTokenSelector },
          getBreachesUpdateStatus: { selector: a.breachesUpdaterStatusSelector }
        },
        liveQueries: {
          liveBreach: { operator: o.getBreach$ },
          liveBreaches: { operator: o.breaches$ },
          liveBreachesBatch: { operator: o.breachesBatch$ },
          liveBreachesUpdaterStatus: { operator: o.breachesUpdaterStatus$ }
        }
      };
    },
    95303: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.clearInstance = t.getInstance = void 0);
      const a = r(32626),
        o = r(70252),
        n = r(90622),
        i = r(16593),
        s = r(88205),
        c = r(36017),
        l = r(75130),
        d = r(44331),
        u = r(38785),
        p = r(45291);
      class S {
        constructor(e, t, r, a, o) {
          (this.storeService = e),
            (this.applicationModulesAccess = t),
            (this.credentialVault = r),
            (this.breachVault = a),
            (this.gateway = o),
            (this.lastRefreshTimestamp = 0),
            (this.refreshInProgress = !1);
        }
        async refresh(e) {
          try {
            if (this.refreshInProgress) return { vaultSyncNeeded: !1 };
            (this.refreshInProgress = !0), this.storeService.dispatch((0, p.updateBreachesUpdaterStatus)(a.BreachesUpdaterStatus.SYNCING));
            const t = Boolean(e && e.forceRefresh);
            if (!(await this.isFeatureFlipped()) || !this.isSessionOpened() || !this.isRefreshNeeded(t))
              return (
                this.storeService.dispatch((0, p.updateBreachesUpdaterStatus)(a.BreachesUpdaterStatus.SKIPPED)),
                (this.refreshInProgress = !1),
                { vaultSyncNeeded: !1 }
              );
            const { breachVault: r, credentialVault: o } = this,
              n = await this.fetchLatestPublicBreaches(),
              i = await this.fetchLatestPrivateBreaches();
            this.resetTimer();
            const s = o.getAllCredentials(),
              l = r.getAllBreaches(),
              d = [...n.breaches, ...i.breaches],
              u = (0, c.getChangesFromIncomingBreaches)(s, l, d);
            await r.applyChangesFromSync(u, n.revision, i.refreshDate);
            const S = this.isVaultSyncNeeded(u);
            return (
              this.storeService.dispatch(
                (0, p.updateBreachesUpdaterStatus)(S ? a.BreachesUpdaterStatus.UPDATED : a.BreachesUpdaterStatus.UNCHANGED)
              ),
              { vaultSyncNeeded: S }
            );
          } catch (e) {
            this.storeService.dispatch((0, p.updateBreachesUpdaterStatus)(a.BreachesUpdaterStatus.ERROR));
            const t = new Error(`[Breaches] - refresh: ${e}`);
            return (0, o.sendExceptionLog)({ error: t, code: a.ExceptionCriticality.WARNING }), { vaultSyncNeeded: !1 };
          } finally {
            this.refreshInProgress = !1;
          }
        }
        async isFeatureFlipped() {
          const { applicationModulesAccess: e } = this,
            t = await (0, s.makeFeatureFlipsSelectors)(e).featureFlipsSelector();
          return Boolean(t) && t[S.BREACHES_REFRESH_FEATURE_FLIP];
        }
        isSessionOpened() {
          const { storeService: e } = this,
            t = e.getState(),
            r = (0, i.userLoginSelector)(t),
            a = (0, n.ukiSelector)(t);
          return Boolean(a && r);
        }
        isRefreshNeeded(e) {
          return e || Date.now() - this.lastRefreshTimestamp >= S.BREACHES_REFRESH_INTERVAL_MS;
        }
        resetTimer() {
          this.lastRefreshTimestamp = Date.now();
        }
        isVaultSyncNeeded(e) {
          return e.updates.length + e.deletions.length > 0;
        }
        async fetchLatestPublicBreaches() {
          const e = this.breachVault.getLatestPublicBreachesRevision();
          return this.gateway.getLatestPublicBreaches(e);
        }
        async fetchLatestPrivateBreaches() {
          const e = this.breachVault.getPrivateBreachesRefreshDate();
          let t,
            r = [];
          try {
            const a = await this.gateway.getLatestPrivateBreaches(e);
            a && ((r = a.breaches), (t = a.refreshDate));
          } catch (e) {
            const t = new Error(`[Breaches] - refresh: fetchPrivateBreaches error: ${e}`);
            (0, o.sendExceptionLog)({ error: t, code: a.ExceptionCriticality.WARNING });
          }
          return { breaches: r, refreshDate: t };
        }
      }
      (S.BREACHES_REFRESH_INTERVAL_MS = 864e5), (S.BREACHES_REFRESH_FEATURE_FLIP = "breachesFetchWeb");
      let m = null;
      t.getInstance = (e, t, r) => (
        null === m && (m = new S(t, e, new d.CredentialVault(t), new l.BreachVault(t), new u.BreachesWS(r, t))), m
      );
      t.clearInstance = () => {
        m = null;
      };
    },
    36017: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getChangesFromIncomingBreaches = void 0);
      const a = r(32626),
        o = r(90073),
        n = r(67083),
        i = r(86715),
        s = r(25656),
        c = r(83480),
        l = (e) => ({ updates: [e], deletions: [] }),
        d = (e, t) => ({ updates: [...e.updates, ...t.updates], deletions: [...e.deletions, ...t.deletions] }),
        u = (e) => Boolean(e.Password),
        p = (e) => Array.from(new Set(e)),
        S = (e, t) => {
          const { content: r } = e,
            { leakedPasswords: o } = e;
          let n = o;
          if ((0, c.hasBreachLeakedDataOfType)(r, a.BreachLeakedDataType.Password)) {
            const { eventDate: e } = r,
              a = t
                .filter(
                  (
                    (e) => (t) =>
                      1e3 * (t.ModificationDatetime || t.CreationDatetime || 0) < Date.parse(e)
                  )(e)
                )
                .filter(u)
                .map((e) => e.Password);
            n = [...o, ...a];
          }
          return p(n || []);
        },
        m = function (e, t, r) {
          const { content: a } = r,
            { id: o, lastModificationRevision: d } = a,
            u = (0, c.findByBreachId)(o, t);
          if (u) {
            if (d <= u.ContentRevision) return { updates: [], deletions: [] };
            if ((0, c.isBreachDeleted)(a)) return { updates: [], deletions: [u.Id] };
          }
          const m = ((e, t) => (t.content.domains ?? []).reduce((t, r) => [...t, ...(e.get(r) ?? [])], []))(e, r),
            g = S(r, m);
          return ((e, t, r) => {
            const a = !(0, i.isDataLeaksBreachContent)(e),
              o = r.length > 0,
              n = (0, c.hasBreachLeakedPrivateInfo)(e),
              s = t.length > 0;
            return a && !o && (!n || !s);
          })(a, m, g)
            ? { updates: [], deletions: [] }
            : l(
                u
                  ? ((e, t, r) => {
                      const a = p(e.LeakedPasswords || []),
                        o = p([...e.LeakedPasswords, ...r]),
                        i = a.length !== o.length ? n.BreachStatus.PENDING : e.Status;
                      return { ...e, Content: t, ContentRevision: t.lastModificationRevision, LeakedPasswords: o, Status: i };
                    })(u, a, g)
                  : (0, s.makeBreachFromContent)(a, g)
              );
        };
      t.getChangesFromIncomingBreaches = function (e, t, r) {
        const a = new Map();
        return (
          e.forEach((e) => {
            const t = (0, o.getDomainForCredential)(e) || "",
              r = a.get(t) ?? [];
            a.set(t, [...r, e]);
          }),
          r.reduce((e, r) => d(e, m(a, t, r)), { updates: [], deletions: [] })
        );
      };
    },
    25656: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeBreachFromContent = void 0);
      const a = r(32626),
        o = r(78320),
        n = r(67083);
      t.makeBreachFromContent = (e, t) => ({
        kwType: a.DataModelType.KWSecurityBreach,
        LastBackupTime: 0,
        Id: (0, o.generateItemUuid)(),
        AnonId: (0, o.generateItemUuid)(),
        BreachId: e.id,
        Content: e,
        ContentRevision: e.lastModificationRevision,
        Status: n.BreachStatus.PENDING,
        LeakedPasswords: t
      });
    },
    44444: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateBreachStatus = t.updateBreachStatusHandler = void 0);
      const a = r(93039),
        o = r(48313),
        n = r(23136),
        i = r(70252),
        s = r(95623),
        c = r(21342);
      function l(e, t) {
        if (!e.isAuthenticated()) throw new Error("No session available to update Breach");
        const r = e.getState(),
          a = (0, c.breachSelector)(r, t.id);
        if (!a) throw new Error("Breach does not exist, cant update");
        const n = { ...a, Status: t.status };
        e.dispatch((0, o.savePersonalDataItem)(n, n.kwType));
      }
      (t.updateBreachStatusHandler = async function (e, t) {
        const { storeService: r, sessionService: o } = e;
        try {
          l(r, t);
          return (0, n.getDebounceSync)(r, o)({ immediateCall: !0 }, a.Trigger.Save), { success: !0 };
        } catch (e) {
          return s.Debugger.error(e), (0, i.sendExceptionLog)({ error: e }), { success: !1 };
        }
      }),
        (t.updateBreachStatus = l);
    },
    38785: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.BreachesWS = void 0);
      const a = r(16516),
        o = r(14656),
        n = r(32626),
        i = r(35587),
        s = r(36513),
        c = r(56984),
        l = r(72365),
        d = r(16038),
        u = r(32607),
        p = r(70252),
        S = r(16593),
        m = r(90622),
        g = r(48162),
        y = r(86715),
        h = r(83480),
        v = r(48162),
        f = r(56668);
      t.BreachesWS = class {
        constructor(e, t) {
          (this.wsService = e), (this.storeService = t);
        }
        async getLatestPublicBreaches(e) {
          const t = this.storeService.getState(),
            r = (0, S.userLoginSelector)(t),
            a = (0, m.ukiSelector)(t);
          if (null === r || null === a) throw new Error("[Breaches] - getLatestPublicBreaches: no current authenticated user");
          const o = await this.wsService.breaches.get({ login: r, uki: a, revision: e });
          if (!(0, u.isWSResponseSuccess)(o)) {
            const e = `[Breaches] getLatestPublicBreaches: ${o.message}(statusCode: ${o.code})`;
            throw new Error(e);
          }
          const { content: n } = o,
            { latest: i, filesToDownload: s, revision: c } = n,
            l = [...i, ...(await this.downloadFileBreaches(s))].filter(y.isSupportedBreachContent);
          return { revision: c, breaches: (0, h.deduplicateBreachContents)(l).map((e) => (0, v.makeIncomingBreach)(e, [])) };
        }
        async getLatestPrivateBreaches(e) {
          const t = this.storeService.getState(),
            r = (0, S.premiumStatusSelector)(t);
          if (!(0, g.hasDarkWebMonitoringFeature)(r)) return null;
          const a = (0, S.userLoginSelector)(t),
            o = (0, m.ukiSelector)(t);
          if (null === a || null === o) throw new Error("[Breaches] - getLatestPrivateBreaches: no current authenticated user");
          const n = await this.wsService.dataleaks.leaks({ login: a, uki: o, wantsDetails: !0, includeDisabled: !1, lastUpdateDate: e });
          if (!(0, u.isWSResponseSuccess)(n)) {
            if ((0, v.isBreachesWSResponseNotModified)(n)) return { breaches: [], refreshDate: e };
            const t = n.error && n.error.code ? `, code: ${n.error.code}` : "",
              r = `[Breaches] - getLatestPrivateBreaches: ${n.message} (statusCode: ${n.code}${t})`;
            throw new Error(r);
          }
          const { content: i } = n,
            { details: s, leaks: c, lastUpdateDate: l } = i,
            d = await this.extractLeakedPasswords(s),
            p = c.filter(y.isSupportedBreachContent);
          return { breaches: (0, h.deduplicateBreachContents)(p).map((e) => (0, v.makeIncomingBreach)(e, d[e.id] || [])), refreshDate: l };
        }
        async downloadFileBreaches(e) {
          return (0, a.flatten)(await (0, i.asyncMap)(e, this.downloadFileBreach));
        }
        async downloadFileBreach(e) {
          try {
            const { data: t } = await (0, o.get)(e);
            return t.breaches;
          } catch (e) {
            const t = new Error(`[Breaches] - downloadFileBreach: ${e}`);
            return (0, p.sendExceptionLog)({ error: t, code: n.ExceptionCriticality.ERROR }), [];
          }
        }
        async extractLeakedPasswords(e) {
          try {
            if (!e || !e.cipheredKey || !e.cipheredInfo) return {};
            const t = this.storeService.getState(),
              r = (0, S.sharingKeysSelector)(t);
            if (!r || !r.publicKey || !r.privateKey) return {};
            const { privateKey: a } = r,
              o = (0, s.makeAsymmetricEncryption)({ hashAlgorithm: c.HashAlgorithm.SHA_1 }),
              n = await o.decrypt(a, e.cipheredKey),
              i = (0, l.makeDataEncryptorService)(this.storeService),
              u = (0, d.base64ToBuffer)(n),
              p = (0, d.arrayBufferToText)(u);
            i.setInstance({ raw: p }, "");
            const m = await i.getInstance().decrypt(e.cipheredInfo),
              g = (0, f.deflatedUtf8ToUtf16)(m, { skipInflate: !0 }),
              y = JSON.parse(g);
            return (0, v.getLeakedPasswordFromIncomingDataLeakDetails)(y);
          } catch (e) {
            const t = new Error(`[Breaches] - extractLeakedPasswords: ${e}`);
            return (0, p.sendExceptionLog)({ error: t }), {};
          }
        }
      };
    },
    12756: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isIncomingDataLeakPasswordInfo = t.isIncomingDataLeakBreachDetails = void 0);
      const a = r(16516);
      t.isIncomingDataLeakBreachDetails = (e) =>
        (0, a.is)(Object, e) && "string" == typeof e.breachId && "" !== e.breachId && Array.isArray(e.data);
      t.isIncomingDataLeakPasswordInfo = (e) =>
        (0, a.is)(Object, e) && "password" === e.type && "plaintext" === e.hashMethod && "string" == typeof e.value && "" !== e.value;
    },
    48162: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hasDarkWebMonitoringFeature =
          t.isBreachesWSResponseNotModified =
          t.getLeakedPasswordFromIncomingDataLeakDetails =
          t.makeIncomingBreach =
            void 0);
      const a = r(12756);
      t.makeIncomingBreach = (e, t) => ({ content: e, leakedPasswords: t });
      t.getLeakedPasswordFromIncomingDataLeakDetails = (e) => {
        if (!Array.isArray(e)) return {};
        const t = (e) => ((0, a.isIncomingDataLeakPasswordInfo)(e) ? e.value : null);
        return e.reduce((e, r) => {
          if (!(0, a.isIncomingDataLeakBreachDetails)(r)) return e;
          const { breachId: o, data: n } = r,
            i = n.map(t).filter(Boolean);
          return i.length ? { ...e, [o]: i } : e;
        }, {});
      };
      (t.isBreachesWSResponseNotModified = (e) => 304 === e.code),
        (t.hasDarkWebMonitoringFeature = function (e) {
          if (!e) return !1;
          const { capabilities: t } = e;
          return Boolean(t?.dataLeak?.enabled);
        });
    },
    75130: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.BreachVault = void 0);
      const a = r(45291),
        o = r(12362),
        n = r(86691),
        i = r(21342);
      t.BreachVault = class {
        constructor(e) {
          this.storeService = e;
        }
        async applyChangesFromSync(e, t, r) {
          const i = (0, a.breachesUpdated)(e, t, r);
          let s = null;
          const { updates: c, deletions: l } = e,
            d = c.length + l.length,
            u = (0, o.getInstance)(),
            p = (0, n.getInstance)();
          try {
            d &&
              ((s = p.lockTopic("iconsUpdates")), await u.add("iconsUpdates", { type: "breachUpdates", breachesIds: c.map((e) => e.Id) })),
              this.storeService.dispatch(i),
              d && p.releaseTopic("iconsUpdates", s);
          } catch (e) {
            throw (s && p.releaseTopic("iconsUpdates", s), e);
          }
        }
        getAllBreaches() {
          const e = this.storeService.getState();
          return (0, i.breachesSelector)(e);
        }
        getLatestPublicBreachesRevision() {
          const e = this.storeService.getState();
          return (0, i.publicBreachesRevisionSelector)(e);
        }
        getPrivateBreachesRefreshDate() {
          const e = this.storeService.getState();
          return (0, i.privateBreachesLastUpdateTimestamp)(e);
        }
      };
    },
    44331: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CredentialVault = void 0);
      const a = r(51319);
      t.CredentialVault = class {
        constructor(e) {
          this.storeService = e;
        }
        getAllCredentials() {
          const e = this.storeService.getState();
          return (0, a.credentialsSelector)(e);
        }
      };
    },
    9335: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.detailItemView = void 0);
      const a = r(16516),
        o = r(88749),
        n = r(86715),
        i = r(90451),
        s = (0, a.defaultTo)([]);
      function c({ name: e, domains: t }) {
        if (e) return e;
        if (t.length > 0) {
          const [e] = t;
          return e;
        }
        return "";
      }
      function l(e, t) {
        if (t && 0 !== t.length) return (0, i.getIcon)(e)(t[0]);
      }
      function d(e, t) {
        const r = t.Content,
          a = (0, n.isDataLeaksBreach)(t) ? t.Content.impactedEmails : [];
        return {
          domains: s(r.domains),
          breachType: (0, o.breachTypeMapper)(t),
          domainIcon: l(e, t.Content.domains),
          eventDate: r.eventDate,
          id: t.Id,
          impactedEmails: a,
          name: c(r),
          status: t.Status
        };
      }
      (t.detailItemView = function (e, t) {
        const r = t.Content,
          a = (0, n.isDataLeaksBreach)(t) ? t.Content.impactedEmails : [],
          i = new Set();
        return {
          anonId: t.AnonId,
          breachType: (0, o.breachTypeMapper)(t),
          domains: s(r.domains),
          domainIcon: l(e, t.Content.domains),
          eventDate: r.eventDate,
          id: t.Id,
          impactedEmails: a,
          kwType: t.kwType,
          leakedData: s(r.leakedData),
          leakedPasswords: s(t.LeakedPasswords),
          name: c(r),
          status: t.Status,
          compromisedCredentialIds: [...i]
        };
      }),
        (t.itemView = d),
        (t.listView = function (e, t) {
          return t.map((t) => d(e, t));
        });
    },
    83480: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hasBreachLeakedPrivateInfo =
          t.hasBreachLeakedDataOfType =
          t.isBreachDeleted =
          t.findByBreachId =
          t.deduplicateBreachContents =
            void 0);
      const a = r(16516),
        o = r(32626),
        n = r(67083),
        i = r(86715),
        s = (0, a.takeLast)(1);
      t.deduplicateBreachContents = (0, a.pipe)(
        (0, a.groupBy)((0, a.prop)("id")),
        (0, a.mapObjIndexed)((0, a.sortBy)((0, a.prop)("lastModificationRevision"))),
        (0, a.mapObjIndexed)((e) => s(e)),
        a.values,
        a.flatten
      );
      t.findByBreachId = (e, t) => t.find((t) => t.BreachId === e);
      t.isBreachDeleted = (e) => e.status === n.BreachEnvStatus.Deleted;
      t.hasBreachLeakedDataOfType = (e, t) => (e.leakedData || []).findIndex((e) => t === e) >= 0;
      t.hasBreachLeakedPrivateInfo = (e) =>
        (0, i.isDataLeaksBreachContent)(e) ||
        ((e, t) => (e.leakedData || []).findIndex((e) => t.some((t) => t === e)) >= 0)(e, [
          o.BreachLeakedDataType.Email,
          o.BreachLeakedDataType.Username,
          o.BreachLeakedDataType.CreditCard,
          o.BreachLeakedDataType.Phone,
          o.BreachLeakedDataType.Address,
          o.BreachLeakedDataType.SSN,
          o.BreachLeakedDataType.IP,
          o.BreachLeakedDataType.Location,
          o.BreachLeakedDataType.PersonalInfo,
          o.BreachLeakedDataType.SocialNetwork
        ]);
    },
    86715: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPublicBreach =
          t.isDataLeaksBreach =
          t.isDataLeaksBreachContent =
          t.isBreach =
          t.isSupportedBreach =
          t.isSupportedBreachContent =
            void 0);
      const a = r(16516),
        o = (e) => (0, a.is)(Object, e);
      function n(e) {
        return (
          (function (e) {
            return o(e) && "number" == typeof e.breachModelVersion;
          })(e) &&
          1 === e.breachModelVersion &&
          Array.isArray(e.domains) &&
          "string" == typeof e.eventDate &&
          "string" == typeof e.id
        );
      }
      function i(e) {
        return s(e) && n(e.Content);
      }
      function s(e) {
        return Boolean(e) && "KWSecurityBreach" === e.kwType;
      }
      function c(e) {
        return (
          (function (e) {
            return "impactedEmails" in e && Array.isArray(e.impactedEmails);
          })(e) && e.impactedEmails.length > 0
        );
      }
      (t.isSupportedBreachContent = n), (t.isSupportedBreach = i), (t.isBreach = s), (t.isDataLeaksBreachContent = c);
      t.isDataLeaksBreach = (e) => i(e) && c(e.Content);
      t.isPublicBreach = (e) => i(e) && !c(e.Content);
    },
    52283: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.breachesUpdaterStatus$ = t.getBreach$ = t.breaches$ = t.breachesBatch$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(35893),
        i = r(33627),
        s = r(55220),
        c = r(21342);
      (t.breachesBatch$ = (e) => {
        const t = (0, n.parseToken)(e),
          r = (0, c.getViewedBreachesBatchSelector)(t);
        return (0, a.pipe)((0, o.map)(r), (0, o.distinctUntilChanged)(i.sameBatch));
      }),
        (t.breaches$ = (0, s.getLivePersonalInfo)(c.getLiveBreachesSelector)),
        (t.getBreach$ = function (e) {
          const t = (0, c.getViewedBreachSelector)(e);
          return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
        });
      t.breachesUpdaterStatus$ = () => (0, a.pipe)((0, o.map)(c.breachesUpdaterStatusSelector), (0, o.distinctUntilChanged)());
    },
    88749: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getBreachMappers = t.breachTypeMapper = void 0);
      const a = r(86715);
      function o(e) {
        return (0, a.isDataLeaksBreach)(e) ? "private" : "public";
      }
      t.breachTypeMapper = o;
      t.getBreachMappers = () => ({
        breachType: (e) => o(e),
        eventDate: (e) =>
          (function ({ eventDate: e }) {
            return Date.parse(e);
          })(e.Content),
        id: (e) => e.Id,
        status: (e) => e.Status
      });
    },
    69623: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getBreachesBatch = t.viewBreachesBatch = t.getBreachesFirstToken = t.getBreacheSortToken = t.getBreachesFilterToken = void 0);
      const a = r(16516),
        o = r(20553),
        n = r(9335);
      t.getBreachesFilterToken = ({ filterCriteria: e }) => ({ filterCriteria: e || [] });
      t.getBreacheSortToken = ({ sortCriteria: e }) => ({ uniqField: "id", sortCriteria: e || [] });
      t.getBreachesFirstToken = (e, t, r, a) => (0, o.generateFirstToken)(e, t, r.initialBatchSize || 30, a);
      (t.viewBreachesBatch = (e, t) => (0, n.listView)(e, t)), (t.getBreachesBatch = (0, a.curry)((e, t, r) => (0, o.getBatch)(r, e, t)));
    },
    37600: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.breachMatch = t.searchGetters = void 0);
      const a = r(64455);
      (t.searchGetters = []), (t.breachMatch = (0, a.match)(t.searchGetters));
    },
    21342: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.breachesUpdaterStatusSelector =
          t.getViewedBreachSelector =
          t.getViewedBreachesBatchSelector =
          t.getLiveBreachesSelector =
          t.fieldMappersSelector =
          t.breachesQuerySelector =
          t.breachesPaginationTokenSelector =
          t.breachesPageSelector =
          t.viewedQueriedBreachesSelector =
          t.breachMappersSelector =
          t.viewedBreachSelector =
          t.breachSelector =
          t.privateBreachesLastUpdateTimestamp =
          t.publicBreachesRevisionSelector =
          t.publicBreachesSelector =
          t.privateBreachesSelector =
          t.breachesSelector =
            void 0);
      const a = r(18948),
        o = r(32034),
        n = r(86715),
        i = r(49551),
        s = r(63566),
        c = r(24589),
        l = r(35893),
        d = r(20553),
        u = r(97006),
        p = r(9335),
        S = r(88749),
        m = r(37600),
        g = r(69623),
        y = r(91892),
        h = (e) => e.userSession.personalData.securityBreaches,
        v = (0, o.createSelector)(h, (e) => e.filter(n.isSupportedBreach));
      (t.breachesSelector = (0, o.createSelector)(v, (e) => [
        ...e
          .reduce((e, t) => {
            const r = e.get(t.BreachId);
            return (!r || r.LastBackupTime < t.LastBackupTime) && e.set(t.BreachId, t), e;
          }, new Map())
          .values()
      ])),
        (t.privateBreachesSelector = (0, o.createSelector)(h, (e) => [...new Set(e.filter(n.isDataLeaksBreach))])),
        (t.publicBreachesSelector = (0, o.createSelector)(h, (e) => [...new Set(e.filter(n.isPublicBreach))]));
      t.publicBreachesRevisionSelector = (e) => e.userSession.personalData.securityBreachesMetadata.latestPublicBreachesRevision;
      function f(e, r) {
        const a = (0, t.breachesSelector)(e);
        return (0, i.findDataModelObject)(r, a);
      }
      (t.privateBreachesLastUpdateTimestamp = (e) => e.userSession.personalData.securityBreachesMetadata.latestDataLeaksBreachesUpdate),
        (t.breachSelector = f),
        (t.viewedBreachSelector = function (e, t) {
          const r = (0, y.iconsSelector)(e),
            a = f(e, t);
          return (0, p.detailItemView)(r, a);
        });
      t.breachMappersSelector = (e) => (0, S.getBreachMappers)();
      const w = () => m.breachMatch,
        A = (0, c.getQuerySelector)(t.breachesSelector, w, t.breachMappersSelector),
        P = (0, o.createSelector)(y.iconsSelector, (e) => (t) => (0, g.viewBreachesBatch)(e, t));
      (t.viewedQueriedBreachesSelector = (e, t) => {
        const r = A(e, t),
          a = P(e);
        return (0, s.viewListResults)(a)(r);
      }),
        (t.breachesPageSelector = function (e, r) {
          const a = (0, l.parseToken)(r),
            { sortToken: o, filterToken: n } = a,
            i = { sortToken: o, filterToken: n },
            s = (0, S.getBreachMappers)(),
            c = (0, t.breachesQuerySelector)(e, i),
            u = P(e),
            p = (0, d.generateNextToken)(s, a, c),
            m = (0, d.generatePrevToken)(s, a, c),
            g = (0, d.getBatch)(s, a, c),
            y = (0, l.stringifyToken)(p),
            h = (0, l.stringifyToken)(m);
          return { batch: u(g), nextToken: y, prevToken: h };
        });
      t.breachesPaginationTokenSelector = (e, r) => {
        const a = (0, g.getBreacheSortToken)(r),
          o = (0, g.getBreachesFilterToken)(r),
          n = (0, S.getBreachMappers)(),
          i = { sortToken: a, filterToken: o },
          s = (0, t.breachesQuerySelector)(e, i),
          c = (0, g.getBreachesFirstToken)(n, i, r, s);
        return (0, l.stringifyToken)(c);
      };
      const T = (0, l.createOptimizedSortTokenSelector)((e, { sortToken: t }) => t, a.identity),
        b = (0, l.createOptimizedFilterTokenSelector)((e, { filterToken: t }) => t, a.identity);
      (t.breachesQuerySelector = (0, o.createSelector)(S.getBreachMappers, w, T, b, t.breachesSelector, l.queryData)),
        (t.fieldMappersSelector = (0, o.createSelector)(t.breachesSelector, S.getBreachMappers)),
        (t.getLiveBreachesSelector = (0, u.makeLiveSelectorGetter)(t.breachesSelector, P, w, t.breachMappersSelector));
      (t.getViewedBreachesBatchSelector = (e) => {
        const { sortToken: r, filterToken: a } = e,
          n = { sortToken: r, filterToken: a },
          i = (0, g.getBreachesBatch)(e),
          s = (0, o.createSelector)((e) => (0, t.breachesQuerySelector)(e, n), t.fieldMappersSelector, i),
          c = (0, l.optimizeBatchSelector)(s);
        return (0, o.createSelector)(y.iconsSelector, c, g.viewBreachesBatch);
      }),
        (t.getViewedBreachSelector = function (e) {
          const r = (0, o.createSelector)(t.breachesSelector, (t) => (0, i.findDataModelObject)(e, t));
          return (0, o.createSelector)(y.iconsSelector, r, p.detailItemView);
        });
      t.breachesUpdaterStatusSelector = (e) => e.userSession.personalData.breachesUpdaterStatus;
    },
    79405: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const a = r(95303);
      t.setupSubscriptions = async function (e, t) {
        const { applicationModulesAccess: r, storeService: o, wsService: n } = t;
        e.syncSuccess.on(() => {
          (0, a.getInstance)(r, o, n).refresh({ forceRefresh: !1 });
        });
      };
    },
    67083: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BreachCriticality = t.BreachEnvStatus = t.BreachStatus = void 0),
        (function (e) {
          (e.PENDING = "PENDING"), (e.VIEWED = "VIEWED"), (e.ACKNOWLEDGED = "ACKNOWLEDGED");
        })(t.BreachStatus || (t.BreachStatus = {})),
        (function (e) {
          (e.Legacy = "legacy"), (e.Live = "live"), (e.Staging = "staging"), (e.Deleted = "deleted");
        })(t.BreachEnvStatus || (t.BreachEnvStatus = {})),
        (function (e) {
          (e[(e.Info = 1)] = "Info"), (e[(e.Warning = 2)] = "Warning"), (e[(e.Error = 3)] = "Error");
        })(t.BreachCriticality || (t.BreachCriticality = {}));
    },
    40220: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getCurrentData = t.getChangeSet = t.getChangedProperties = t.getChangedPropertiesForRemoval = void 0);
      const a = r(16516),
        o = r(78320),
        n = r(53),
        i = r(15171),
        s = {
          KWAuthentifiant: {
            Email: "",
            Login: "",
            Note: "",
            Password: "",
            SecondaryLogin: "",
            Title: "",
            Url: "",
            UserSelectedUrl: "",
            LinkedServices: { associated_domains: [] }
          },
          KWSecureNote: { Content: "", Title: "" },
          KWSecret: { Content: "", Title: "" }
        };
      function c(e) {
        const t = s[e.kwType];
        return Object.keys(t).filter((r) =>
          "LinkedServices" === r ? e[r]?.associated_domains && e[r].associated_domains.length > 0 : e[r] && e[r] !== t[r]
        );
      }
      function l(e, t) {
        const r = s[e.kwType];
        return Object.keys(r).filter((r) => {
          if ("LinkedServices" === r) {
            const a = (e[r]?.associated_domains ?? []).map((e) => e.domain),
              o = (t[r]?.associated_domains ?? []).map((e) => e.domain);
            return !(0, i.areStringListsEquivalent)(a, o);
          }
          return e[r] && "" !== e[r] && e[r] !== t[r];
        });
      }
      function d(e) {
        return Object.keys(s[e.kwType]).reduce(
          (t, r) => ((t[r] = "LinkedServices" === r ? (e[r]?.associated_domains ? e[r] : { associated_domains: [] }) : e[r] || ""), t),
          {}
        );
      }
      (t.getChangedPropertiesForRemoval = c),
        (t.getChangedProperties = l),
        (t.getChangeSet = function (e) {
          const { change: t, deviceName: r, oldItem: i, userLogin: s, platformInfo: u } = e;
          if ((0, a.isNil)(i)) return null;
          const p = "removal" === t.type ? c(i) : l(i, t.updatedItem);
          return 0 === p.length
            ? null
            : {
                kwType: "KWChangeSet",
                ChangedProperties: p,
                CurrentData: d(i),
                Id: (0, o.generateItemUuid)(),
                Platform: u.platformName,
                DeviceName: r || "",
                ModificationDate: (0, n.getUnixTimestamp)(),
                Removed: (0, a.defaultTo)(!1, "removal" === t.type),
                User: s
              };
        }),
        (t.getCurrentData = d);
    },
    85225: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeRemovalChange = t.makeUpdateChange = void 0);
      t.makeUpdateChange = (e) => ({ type: "update", updatedItem: e });
      t.makeRemovalChange = (e) => ({ type: "removal", itemId: e.Id, itemKwType: e.kwType });
    },
    73566: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUpdatedItemChangeHistory = t.isChangeHistoryCandidate = t.getEmptyChangeHistory = void 0);
      const a = r(16516),
        o = r(32626),
        n = r(78320),
        i = r(40220),
        s = r(84977),
        c = r(83638),
        l = r(49551);
      function d(e) {
        const [t, r, a] =
          "removal" === e.type ? [e.itemId, e.itemKwType, ""] : [e.updatedItem.Id, e.updatedItem.kwType, e.updatedItem.Title || ""];
        return {
          kwType: "KWDataChangeHistory",
          ChangeSets: [],
          Id: (0, n.generateItemUuid)(),
          ObjectId: t,
          ObjectTitle: a,
          ObjectType: (0, c.getTransactionTypeFromDataModelType)(r),
          LastBackupTime: 0
        };
      }
      t.getEmptyChangeHistory = d;
      const u = (e, t) => (0, a.equals)(t.CurrentData, e.CurrentData);
      (t.isChangeHistoryCandidate = function (e) {
        return (0, o.isCredential)(e) || (0, o.isNote)(e) || (0, o.isSecret)(e);
      }),
        (t.getUpdatedItemChangeHistory = function (e) {
          const { deviceName: t, personalData: r, change: o, userLogin: n, platformInfo: c } = e,
            [p, S, m] = "removal" === o.type ? [o.itemId, o.itemKwType, ""] : [o.updatedItem.Id, o.updatedItem.kwType, o.updatedItem.Title],
            g = s.default[S],
            y = (0, l.findDataModelObject)(p, r[g]),
            h = (0, i.getChangeSet)({ deviceName: t, change: o, oldItem: y, userLogin: n, platformInfo: c });
          if (!h) return null;
          const v = r.changeHistories.find((e) => e?.ObjectId?.toUpperCase() === (p || "").toUpperCase()),
            f = v || d(o),
            w = (0, a.last)(f.ChangeSets);
          return w && u(w, h) ? null : { ...f, ObjectTitle: m, ChangeSets: f.ChangeSets.concat(h) };
        });
    },
    35385: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialsHistoriesSelector = void 0);
      const a = r(32034),
        o = r(40602),
        n = r(83659),
        i = r(57989),
        s = r(83638),
        c = (e) => e.ObjectType === s.TransactionType.AUTHENTIFIANT,
        l = (0, a.createSelector)(
          (e) => e.userSession.personalData.changeHistories,
          (e) => e.filter(c)
        );
      t.credentialsHistoriesSelector = (0, a.createSelector)(
        l,
        i.quarantinedSpacesSelector,
        n.unsafeAllCredentialsSelector,
        o.filterOutQuarantinedItems
      );
    },
    43837: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(42682);
      t.config = {
        commands: {
          addCollection: { handler: a.addCollectionHandler },
          deleteCollection: { handler: a.deleteCollectionHandler },
          removeItemsFromCollections: { handler: a.removeItemsFromCollectionsHandler },
          updateCollection: { handler: a.updateCollectionHandler }
        },
        queries: {},
        liveQueries: {}
      };
    },
    55740: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addCollectionHandler = t.getNewCollection = void 0);
      const a = r(32626),
        o = r(93039),
        n = r(23136),
        i = r(48313),
        s = r(53),
        c = r(78320),
        l = r(70252),
        d = r(13675);
      function u(e) {
        const t = (0, s.getUnixTimestamp)();
        return {
          kwType: "KWCollection",
          Id: (0, c.generateItemUuid)(),
          LastBackupTime: 0,
          LastUse: t,
          LocaleFormat: a.Country.UNIVERSAL,
          AnonId: (0, c.generateItemUuid)(),
          SpaceId: e.spaceId,
          CreationDatetime: t,
          UserModificationDatetime: t,
          Name: e.name,
          VaultItems: e.vaultItems.map((e) => ({ Id: e.id, Type: e.type }))
        };
      }
      (t.getNewCollection = u),
        (t.addCollectionHandler = async function (e, t) {
          try {
            const r = await (async function ({ storeService: e, sessionService: t }, r) {
              if (!e.isAuthenticated()) throw new Error("No session available to addCollection");
              const a = u((0, d.sanitizeInputPersonalData)(r));
              if (!a.SpaceId) {
                const t = await (0, n.getDefaultSpaceId)(e);
                a.SpaceId = t;
              }
              return e.dispatch((0, i.savePersonalDataItem)(a, a.kwType)), t.getInstance().user.persistPersonalData(), a.Id;
            })(e, t);
            return (0, n.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, o.Trigger.Save), { success: !0, id: r };
          } catch (e) {
            return (0, l.sendExceptionLog)({ error: e }), { success: !1 };
          }
        });
    },
    9833: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteCollectionHandler = void 0);
      const a = r(32626),
        o = r(93039),
        n = r(23136),
        i = r(70252),
        s = r(45291);
      t.deleteCollectionHandler = async function (e, t) {
        try {
          await (async function ({ storeService: e, sessionService: t }, r) {
            if (!e.isAuthenticated()) throw new Error("No session available to deleteCollection");
            const o = (0, s.removePersonalItem)(a.DataModelType.KWCollection, r, null);
            e.dispatch(o), t.getInstance().user.persistPersonalData();
          })(e, t.id);
          return (0, n.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, o.Trigger.Save), { success: !0 };
        } catch (e) {
          return (0, i.sendExceptionLog)({ error: e }), { success: !1 };
        }
      };
    },
    42682: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(55740), t), o(r(9833), t), o(r(73240), t), o(r(6366), t);
    },
    73240: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeItemsFromCollectionsHandler = void 0);
      const a = r(53626),
        o = r(6366);
      t.removeItemsFromCollectionsHandler = async function (e, t) {
        const r = e.storeService.getState(),
          n = (0, a.collectionsSelector)(r),
          i = [];
        let s, c;
        if (
          (n.forEach((e) => {
            (s = e.VaultItems.length),
              (e.VaultItems = e.VaultItems.filter((e) => !t.ids.includes(e.Id))),
              (c = e.VaultItems.length),
              s !== c && i.push(e);
          }),
          !i.length)
        )
          return;
        const l = i.map((t) =>
          (0, o.updateCollectionHandler)(e, {
            id: t.Id,
            name: t.Name,
            spaceId: t.SpaceId,
            vaultItems: t.VaultItems.map((e) => ({ id: e.Id, type: e.Type }))
          })
        );
        return { success: !(await Promise.all(l)).some((e) => !e.success) };
      };
    },
    6366: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateCollectionHandler = void 0);
      const a = r(93039),
        o = r(23136),
        n = r(48313),
        i = r(53),
        s = r(70252),
        c = r(13675),
        l = r(53626),
        d = (e) => ({
          LastUse: (0, i.getUnixTimestamp)(),
          Name: e.name,
          SpaceId: e.spaceId,
          VaultItems: e.vaultItems.map((e) => ({ Id: e.id, Type: e.type }))
        });
      async function u(e, t, r) {
        if (!e.isAuthenticated()) throw new Error("No session available to updateCollection");
        const a = (function (e, t) {
          const r = (0, l.collectionSelector)(e, t.id);
          if (!r) throw new Error("[updateCollection]: unable to find collection to update.");
          return { ...r, ...d(t) };
        })(e.getState(), (0, c.sanitizeInputPersonalData)(r));
        return e.dispatch((0, n.savePersonalDataItem)(a, a.kwType)), t.getInstance().user.persistPersonalData();
      }
      t.updateCollectionHandler = async function (e, t) {
        try {
          await u(e.storeService, e.sessionService, t);
          return (0, o.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save), { success: !0 };
        } catch (e) {
          return (0, s.sendExceptionLog)({ error: e }), { success: !1 };
        }
      };
    },
    10770: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(42682), t), o(r(53626), t), o(r(182), t);
    },
    53626: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.collectionSelector = t.collectionsSelector = void 0);
      const a = r(49551);
      t.collectionsSelector = (e) => e.userSession.personalData.collections;
      t.collectionSelector = (e, r) => {
        const o = (0, t.collectionsSelector)(e);
        return (0, a.findDataModelObject)(r, o);
      };
    },
    182: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCollectionNamesContainingVaultItemId = void 0);
      t.getCollectionNamesContainingVaultItemId = (e, t, r = []) =>
        t
          .flatMap((t) => (t.VaultItems.some((t) => t.Id === e) ? t.Name : []))
          .concat(r.flatMap((t) => (t.vaultItems.some((t) => t.id === e) ? t.name : [])));
    },
    2946: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(8777),
        o = r(71806),
        n = r(7657),
        i = r(10043),
        s = r(35410),
        c = r(80920),
        l = r(79895),
        d = r(60581),
        u = r(66663),
        p = r(28831),
        S = r(73567),
        m = r(9763),
        g = r(52109),
        y = r(78222),
        h = r(70853),
        v = r(8766),
        f = r(15171);
      t.config = {
        commands: {
          addCredential: { handler: m.createCredential },
          deleteCredential: { handler: g.deleteCredentialHandler },
          deleteCredentialsInBulk: { handler: y.deleteCredentialsInBulkHandler },
          updateCredential: { handler: h.updateCredentialHandler },
          updateLinkedWebsites: { handler: f.updateLinkedWebsitesHandler }
        },
        queries: {
          canUserAddNewCredential: { selector: a.canUserAddNewCredentialSelector },
          getCredential: { selector: d.viewedCredentialSelector },
          getCredentialCategories: { selector: l.viewedCredentialCategoriesSelector },
          getCredentials: { selector: u.viewedQueriedCredentialsSelector },
          getCredentialsByDomain: { selector: p.viewedQueriedCredentialsByDomainSelector },
          getCredentialsCount: { selector: o.credentialsCountSelector },
          getCredentialLimitStatus: { selector: n.credentialLimitStatusSelector },
          getCredentialsPage: { selector: i.credentialsPageSelector },
          getCredentialsPaginationToken: { selector: s.credentialsPaginationTokenSelector },
          getDashlaneDefinedLinkedWebsites: { selector: v.getDashlaneDefinedLinkedWebsitesSelector },
          getShouldShowRequireMasterPassword: { selector: c.shouldShowRequireMasterPasswordSelector }
        },
        liveQueries: {
          liveCanUserAddNewCredential: { operator: S.canUserAddNewCredential$ },
          liveCredentialLimitStatus: { operator: S.credentialLimitStatus$ },
          liveCredential: { operator: S.getCredential$ },
          liveCredentials: { operator: S.credentials$ },
          liveCredentialsByDomain: { operator: S.credentialsByDomain$ },
          liveCredentialsBatch: { operator: S.credentialsBatch$ },
          liveCredentialsCount: { operator: S.credentialsCount$ }
        }
      };
    },
    39373: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleLimitedSharedCredentialsPassword =
          t.removeCredentialsWithQuarantinedSpaces =
          t.fixCredentialsWithMissingTitles =
          t.fixCredentialWithMissingTitle =
            void 0);
      const a = r(52578),
        o = r(89489),
        n = r(90073),
        i = r(37275);
      function s(e) {
        return e.Title ? e : Object.assign({}, e, { Title: (0, n.getDomainForCredential)(e) });
      }
      (t.fixCredentialWithMissingTitle = s),
        (t.fixCredentialsWithMissingTitles = function (e) {
          return e.map(s);
        }),
        (t.removeCredentialsWithQuarantinedSpaces = function (e, t) {
          if (!e.spaces || 0 === e.spaces.length) return t;
          const r = [];
          return (
            e.spaces.filter(a.isSpaceQuarantined).forEach((e) => {
              const o = e.details.info && e.details.info.teamDomains ? e.details.info.teamDomains : [];
              t.filter((e) => (0, a.isCredentialSmartCategorized)(e, o)).forEach((t) => {
                "" !== t.SpaceId && t.SpaceId === e.details.teamId && r.push(t);
              });
            }),
            t.filter((e) => !r.includes(e))
          );
        }),
        (t.handleLimitedSharedCredentialsPassword = function (e, t, r) {
          const a = (0, i.getSharingDataWithCollections)(t),
            n = (0, o.getLimitedSharedItemIds)(t, a.collections, a.itemGroups, r);
          return e.map((e) => (n[e.Id] ? Object.assign({}, e, { Password: "************", limitedPermissions: !0 }) : e));
        });
    },
    36439: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.countCredentials = void 0);
      const a = r(35893);
      t.countCredentials = (e, t, r, o) => (0, a.filterData)(e, t, r, o).length;
    },
    90073: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDomainForCredential = void 0);
      const a = r(21178);
      t.getDomainForCredential = (e) => new a.ParsedURL(e.Url).getRootDomain();
    },
    52109: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteCredentialHandler = void 0);
      const a = r(93039),
        o = r(76496),
        n = r(23136),
        i = r(95623),
        s = r(70252);
      t.deleteCredentialHandler = async (
        { sessionService: e, storeService: t, wsService: r, eventLoggerService: c },
        { credentialId: l }
      ) => {
        try {
          if (
            !(await (0, o.deletePersonalDataItem)({ storeService: t, wsService: r, eventLoggerService: c }, l, { manualHealthUpdate: !0 }))
              .success
          )
            return Promise.resolve({ success: !1 });
          return (0, n.getDebounceSync)(t, e)({ immediateCall: !0 }, a.Trigger.Save), Promise.resolve({ success: !0 });
        } catch (e) {
          const t = new Error(`[Credentials] - deleteCredentialHandler: ${e}`);
          return (0, s.sendExceptionLog)({ error: t }), (0, i.logError)(t), Promise.resolve({ success: !1 });
        }
      };
    },
    78222: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteCredentialsInBulkHandler = void 0);
      const a = r(35088),
        o = r(93039),
        n = r(78924),
        i = r(10770),
        s = r(76496),
        c = r(23136),
        l = r(95623),
        d = r(70252);
      t.deleteCredentialsInBulkHandler = async (e, { credentialList: t }) => {
        const { sessionService: r, storeService: n, wsService: p, eventLoggerService: S, applicationModulesAccess: m } = e;
        try {
          let l = [];
          const d = (0, a.v4)(),
            g = t.map((e) =>
              (0, s.deletePersonalDataItem)({ storeService: n, wsService: p, eventLoggerService: S, applicationModulesAccess: m }, e, {
                multiSelectId: d,
                manualHealthUpdate: !0
              }).then((t) => ({ ...t, itemId: e }))
            );
          await Promise.all(g).then((e) => (l = e.filter((e) => !e.success)));
          (0, c.getDebounceSync)(n, r)({ immediateCall: !0 }, o.Trigger.Save);
          const y = t.filter((e) => !l.some((t) => t.itemId === e));
          return (
            u(y, m),
            (0, i.removeItemsFromCollectionsHandler)(e, { ids: y }),
            l.length > 0 ? Promise.resolve({ success: !1, notRemoved: l.length }) : Promise.resolve({ success: !0 })
          );
        } catch (e) {
          const t = new Error(`[Credentials] - deleteCredentialsInBulkHandler: ${e}`);
          return (0, d.sendExceptionLog)({ error: t }), (0, l.logError)(t), Promise.resolve({ success: !1 });
        }
      };
      const u = async (e, t) => {
        const { commands: r } = t.createClients().vaultItemsCrud;
        return await r.emitTemporaryVaultItemEvent({ ids: [...e], eventType: n.EventType.Deleted }), !0;
      };
    },
    70853: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateCredentialHandler = void 0);
      const a = r(95623),
        o = r(70252),
        n = r(88779);
      t.updateCredentialHandler = async function (e, t) {
        const { storeService: r, sessionService: i, eventLoggerService: s, applicationModulesAccess: c } = e;
        try {
          return (
            await (0, n.updateCredential)({ storeService: r, sessionService: i, eventLoggerService: s, applicationModulesAccess: c }, t),
            { success: !0 }
          );
        } catch (e) {
          return (0, a.logError)(e), (0, o.sendExceptionLog)({ error: e }), { success: !1 };
        }
      };
    },
    23529: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCredentialsDisplayTitles = void 0);
      const a = r(90073);
      t.getCredentialsDisplayTitles = function (e) {
        const t = e.reduce((e, t) => {
          const { Id: r, Title: o } = t,
            n = o || (0, a.getDomainForCredential)(t);
          return e.concat([[r, n]]);
        }, []);
        return new Map(t);
      };
    },
    88542: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.viewCredential =
          t.afterCredentialSaved =
          t.notifySharersCredentialUpdated =
          t.makeCredentialSpecificProps =
          t.makeNewCredential =
          t.makeUpdatedCredential =
          t.beforeCredentialChange =
          t.sharedFields =
          t.SaveFrom =
            void 0);
      const a = r(16516),
        o = r(50415),
        n = r(32626),
        i = r(21178),
        s = r(47975),
        c = r(87496),
        l = r(61923),
        d = r(48313),
        u = r(53);
      t.SaveFrom = (0, o.Enum)("MANUAL", "SAVE_PASSWORD", "DATACAPTURE", "IMPORT");
      const p = r(70252),
        S = r(78163),
        m = r(43145),
        g = r(65968),
        y = r(83687),
        h = r(92307),
        v = r(90451),
        f = r(32626);
      t.sharedFields = [
        "Email",
        "Login",
        "Note",
        "OtpSecret",
        "OtpUrl",
        "Password",
        "SecondaryLogin",
        "Title",
        "Url",
        "UseFixedUrl",
        "UserSelectedUrl",
        "LinkedServices"
      ];
      const w = (e, t) => ({ ...e, content: { ...e.content, category: t } }),
        A = (0, a.defaultTo)("");
      function P(e, t) {
        const { url: r } = e.content,
          a = void 0 === r,
          o = t?.UserSelectedUrl ?? "",
          i = t?.UseFixedUrl ?? !1,
          s = t?.TrustedUrlGroup ?? [],
          l = e.origin === n.SaveOrigin.MANUAL,
          d = !a && t?.Url !== r,
          u = (0, c.cleanUrlForPersonalData)(a ? t?.Url : r, { keepQueryString: l }),
          p = l && d ? { UserSelectedUrl: u, UseFixedUrl: !0 } : { UserSelectedUrl: o, UseFixedUrl: i };
        return { Url: u, TrustedUrlGroup: (0, c.getUpdatedTrustedUrlList)(s, u), ...p };
      }
      async function T(e, t, r = (0, u.getUnixTimestamp)()) {
        const { content: o } = e,
          n = {
            associated_domains:
              o.linkedWebsites?.addedByUser?.map((e) => ({ source: f.LinkedWebsiteSource.Manual, domain: e })) ??
              t?.LinkedServices?.associated_domains ??
              []
          },
          i = (function (e, t) {
            return ({ itemField: r, existingItemField: o, defaultValue: n }) =>
              (0, a.isNil)(e[r]) ? (t && !(0, a.isNil)(t[o]) ? t[o] : n) : e[r];
          })(o, t),
          {
            email: c,
            login: d,
            secondaryLogin: p
          } = (0, l.normalizeUsernames)(
            i({ itemField: "email", existingItemField: "Email", defaultValue: "" }),
            i({ itemField: "login", existingItemField: "Login", defaultValue: "" }),
            i({ itemField: "secondaryLogin", existingItemField: "SecondaryLogin", defaultValue: "" })
          ),
          S = i({ itemField: "password", existingItemField: "Password", defaultValue: "" }),
          m = !t || t.Password !== S ? { ModificationDatetime: r } : {};
        return {
          AutoLogin: i({ itemField: "autoLogin", existingItemField: "AutoLogin", defaultValue: !0 }),
          AutoProtected: i({ itemField: "protectWithMasterPassword", existingItemField: "AutoProtected", defaultValue: !1 }),
          Category: i({ itemField: "category", existingItemField: "Category", defaultValue: "" }),
          Checked: i({ itemField: "checked", existingItemField: "Checked", defaultValue: !1 }),
          Email: c,
          Login: d,
          Note: i({ itemField: "note", existingItemField: "Note", defaultValue: "" }),
          Password: S,
          SecondaryLogin: p,
          Status: "ACCOUNT_NOT_VERIFIED",
          Strength: S ? await (0, s.evaluatePasswordStrength)(S) : 0,
          SubdomainOnly: Boolean(o.onlyForThisSubdomain),
          Title: i({ itemField: "title", existingItemField: "Title", defaultValue: "" }),
          ...P(e, t),
          OtpSecret: i({ itemField: "otpSecret", existingItemField: "OtpSecret", defaultValue: void 0 }),
          OtpUrl: i({ itemField: "otpUrl", existingItemField: "OtpUrl", defaultValue: void 0 }),
          LinkedServices: n,
          ...m
        };
      }
      (t.beforeCredentialChange = function (e, t) {
        const r = t.credentialCategories,
          a = e.content.category;
        if (!a) return e;
        if (r.find((e) => e.Id === a)) return e;
        const o = r.find((e) => e.CategoryName === a);
        return w(e, o ? o.Id : "");
      }),
        (t.makeUpdatedCredential = async function (e, t) {
          const r = (0, u.getUnixTimestamp)(),
            a = await T(e, t, r);
          return { ...t, ...(0, S.makeUpdatedPersonalDataItemBase)({ existingItem: t, updatedItem: e, itemUpdateDate: r }), ...a };
        }),
        (t.makeNewCredential = async function (e) {
          const t = (0, u.getUnixTimestamp)(),
            r = await T(e, null, t);
          return (function (e) {
            const { Title: t, Url: r } = e;
            return { ...e, Title: t || A(new i.ParsedURL(r).getRootDomain()) };
          })({ ...(0, S.makeNewPersonalDataItemBase)(e, t), ...r });
        }),
        (t.makeCredentialSpecificProps = T),
        (t.notifySharersCredentialUpdated = async function (e, r, o, n) {
          !(0, a.equals)((0, a.pick)(t.sharedFields, r), (0, a.pick)(t.sharedFields, o)) &&
            (await (0, S.notifySharersOnUpdate)(e, o, n).catch((e) => {
              const t = new Error(`[Sharing] - notifySharersCredentialUpdated: ${e}`);
              (0, p.sendExceptionLog)({ error: t });
            }));
        }),
        (t.afterCredentialSaved = function (e, t) {
          (0, m.associateGeneratedPasswordsToCredential)(e.getPersonalData().generatedPasswords, t).forEach((t) => {
            e.dispatch((0, d.saveGeneratedPassword)(t));
          });
        }),
        (t.viewCredential = function (e, t, r, a, o, n, i) {
          if (!e) return;
          const s = (0, y.getSharingStatusDetail)(a, t, r),
            c = (0, v.getIcon)(n),
            l = (0, h.getCategory)(o),
            d = (0, h.getSmartCategorizedSpace)(i);
          return (0, g.detailView)(s, l, c, d, e);
        });
    },
    73567: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.credentialLimitStatus$ =
          t.canUserAddNewCredential$ =
          t.credentialsByDomain$ =
          t.credentials$ =
          t.credentialsCount$ =
          t.getCredential$ =
          t.credentialsBatch$ =
            void 0);
      const a = r(18948),
        o = r(3343),
        n = r(8777),
        i = r(7657),
        s = r(71806),
        c = r(61645),
        l = r(86685),
        d = r(78767),
        u = r(65950),
        p = r(35893),
        S = r(33627),
        m = r(55220);
      t.credentialsBatch$ = (e) => {
        const t = (0, p.parseToken)(e),
          r = (0, d.getViewedCredentialsBatchSelector)(t);
        return (0, a.pipe)((0, o.map)(r), (0, o.distinctUntilChanged)(S.sameBatch));
      };
      t.getCredential$ = (e) => {
        const t = (0, l.getViewedCredentialSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
      (t.credentialsCount$ = (e) => {
        const t = (0, p.parseToken)(e);
        return (0, a.pipe)(
          (0, o.map)((e) => (0, s.credentialsCountSelector)(e, t)),
          (0, o.distinctUntilChanged)()
        );
      }),
        (t.credentials$ = (0, m.getLivePersonalInfo)(c.getLiveCredentialsSelector));
      t.credentialsByDomain$ = (e) => {
        const { domain: t, ...r } = (0, p.parseToken)(e),
          n = (0, u.getLiveCredentialsByDomainSelector)(t)(r);
        return (0, a.pipe)(
          (0, o.map)(n),
          (0, o.distinctUntilChanged)((e, t) => e.matchingCount === t.matchingCount && (0, S.sameBatch)(e.items, t.items))
        );
      };
      t.canUserAddNewCredential$ = () => (0, a.pipe)((0, o.map)(n.canUserAddNewCredentialSelector), (0, o.distinctUntilChanged)());
      t.credentialLimitStatus$ = () => (0, a.pipe)((0, o.map)(i.credentialLimitStatusSelector), (0, o.distinctUntilChanged)());
    },
    94687: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCredentialMappers = void 0);
      const a = r(16516),
        o = r(83539),
        n = r(71646),
        i = (0, a.curry)((e, t) => e.get(t.Id) || ""),
        s = (e) => !!e.Attachments && e.Attachments.length > 0,
        c = (0, a.curry)((e, t) => !!e[t.Id]),
        l = (0, a.curry)((e, t) => {
          const r = t.Category,
            a = (e || []).find((e) => e.Id === r);
          return a && a.CategoryName ? a.CategoryName : "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
        });
      t.getCredentialMappers = (e, t, r, a, d, u) => ({
        category: l(e),
        groupIds: (e) => (0, n.getItemUserGroupIds)(a, e.Id),
        sharingUserIds: (e) => (0, n.getItemUserIds)(a, e.Id),
        hasAttachments: s,
        id: (e) => e.Id,
        isLimited: c(t),
        lastUse: o.lastUseMapper,
        login: (e) => e.Login,
        numberUse: (e) => e.NumberUse,
        spaceId: (e) => e.SpaceId,
        title: i(r),
        email: (e) => e.Email,
        collectionIds: (e) =>
          ((e, t, r) =>
            t
              .flatMap((t) => (t.VaultItems.some((t) => t.Id === e) ? t.Id : []))
              .concat(r.flatMap((t) => (t.vaultItems.some((t) => t.id === e) ? t.id : []))))(e.Id, d, u)
      });
    },
    25501: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getCredentialsBatch =
          t.viewCredentialsBatch =
          t.getCredentialsFirstToken =
          t.getCredentialsSortToken =
          t.getCredentialsFilterToken =
            void 0);
      const a = r(16516),
        o = r(20553),
        n = r(29179),
        i = r(83687),
        s = r(92307),
        c = r(90451);
      t.getCredentialsFilterToken = ({ filterCriteria: e }) => ({ filterCriteria: e || [] });
      t.getCredentialsSortToken = ({ sortCriteria: e }) => ({ uniqField: "id", sortCriteria: e || [] });
      t.getCredentialsFirstToken = (e, t, r, a) => (0, o.generateFirstToken)(e, t, r.initialBatchSize || 30, a);
      (t.viewCredentialsBatch = (e, t, r, a, o) => {
        const l = (0, i.getSharingStatusItem)(t, r),
          d = (0, c.getIcon)(o),
          u = (0, s.getCategory)(a);
        return (0, n.listView)(l, u, d, e);
      }),
        (t.getCredentialsBatch = (0, a.curry)((e, t, r) => (0, o.getBatch)(r, e, t)));
    },
    31400: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCredentialMatch = void 0);
      const a = r(64455),
        o = r(82234),
        n = r(6205),
        i = r(10770);
      t.getCredentialMatch = (e, t) =>
        (0, a.match)(
          ((e, t) => [
            (0, o.stringProp)("Email"),
            (0, o.stringProp)("Login"),
            (0, o.stringProp)("Title"),
            (0, o.stringProp)("Note"),
            (0, o.stringProp)("SecondaryLogin"),
            null === e && null === t
              ? (0, o.stringProp)("CategoryName")
              : (r) => (0, i.getCollectionNamesContainingVaultItemId)(r.Id, e, t).join(" "),
            (e) => (0, n.getDashlaneDefinedLinkedWebsites)(e.Url).join(" "),
            (e) => (0, n.getUserAddedLinkedWebsitesRootDomains)(e).join(" ")
          ])(e, t)
        );
    },
    8777: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.canUserAddNewCredentialSelector = void 0);
      const a = r(32034),
        o = r(32626),
        n = r(7657);
      t.canUserAddNewCredentialSelector = (0, a.createSelector)(
        n.credentialLimitStatusSelector,
        (e) => e !== o.CredentialLimitStatus.AtOrAboveLimit
      );
    },
    74380: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.countAllCredentialsSelector = void 0);
      t.countAllCredentialsSelector = (e) => e.userSession.personalData.credentials.length;
    },
    79895: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.viewedCredentialCategoriesSelector = t.credentialCategoryNamesMapSelector = t.credentialCategoriesSelector = void 0);
      const a = r(32034),
        o = r(71120);
      (t.credentialCategoriesSelector = (e) => e.userSession.personalData.credentialCategories),
        (t.credentialCategoryNamesMapSelector = (0, a.createSelector)([t.credentialCategoriesSelector], (e) =>
          e.reduce((e, t) => ((e[t.Id] = t.CategoryName), e), {})
        )),
        (t.viewedCredentialCategoriesSelector = (0, a.createSelector)(t.credentialCategoriesSelector, (e) => ({
          items: (0, o.listView)(e),
          matchingCount: e.length
        })));
    },
    85505: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialMatchSelector = void 0);
      const a = r(53626),
        o = r(31400),
        n = r(31607);
      t.credentialMatchSelector = (e) => {
        const t = (0, n.sharedCollectionsWithItemsSelector)(e),
          r = (0, a.collectionsSelector)(e);
        return (0, o.getCredentialMatch)(r, t);
      };
    },
    19736: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialSelector = void 0);
      const a = r(51319),
        o = r(49551);
      t.credentialSelector = (e, t) => {
        const r = (0, a.credentialsSelector)(e);
        return (0, o.findDataModelObject)(t, r);
      };
    },
    88083: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getCredentialsByDomainSelector = t.getCredentialByDomainMatchType = t.DomainMatchType = void 0);
      const a = r(32034),
        o = r(21178),
        n = r(51319),
        i = r(6205);
      var s;
      !(function (e) {
        (e.MainWebsite = "MainWebsite"),
          (e.DashlaneDefinedLinkedWebsite = "DashlaneDefinedLinkedWebsite"),
          (e.UserDefinedLinkedWebsite = "UserDefinedLinkedWebsite"),
          (e.None = "None");
      })((s = t.DomainMatchType || (t.DomainMatchType = {})));
      t.getCredentialByDomainMatchType = (e, t) => {
        if (!e) return s.None;
        return e === new o.ParsedURL(t.Url).getRootDomain()
          ? s.MainWebsite
          : (0, i.getDashlaneDefinedLinkedWebsites)(t.Url).includes(e)
          ? s.DashlaneDefinedLinkedWebsite
          : (0, i.getUserAddedLinkedWebsitesRootDomains)(t).includes(e)
          ? s.UserDefinedLinkedWebsite
          : s.None;
      };
      t.getCredentialsByDomainSelector = (e) =>
        (0, a.createSelector)(n.credentialsSelector, (r) =>
          ((e, r) =>
            e.filter((e) => {
              const a = (0, t.getCredentialByDomainMatchType)(r, e);
              return [s.MainWebsite, s.DashlaneDefinedLinkedWebsite, s.UserDefinedLinkedWebsite].includes(a);
            }))(r, e)
        );
    },
    71806: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialsCountSelector = void 0);
      const a = r(32034),
        o = r(49960),
        n = r(51319),
        i = r(85505),
        s = r(36439),
        c = r(7439);
      t.credentialsCountSelector = (0, a.createSelector)(
        o.fieldMappersSelector,
        i.credentialMatchSelector,
        c.filterTokenSelector,
        n.credentialsSelector,
        s.countCredentials
      );
    },
    60463: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialDisplayTitlesSelector = void 0);
      const a = r(32034),
        o = r(51319),
        n = r(23529);
      t.credentialDisplayTitlesSelector = (0, a.createSelector)(o.credentialsSelector, n.getCredentialsDisplayTitles);
    },
    7657: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialLimitStatusSelector = void 0);
      const a = r(32034),
        o = r(32626),
        n = r(51319),
        i = r(16593);
      t.credentialLimitStatusSelector = (0, a.createSelector)(i.nodePremiumStatusSelector, n.credentialsSelector, (e, t) => {
        if (!e || !e.capabilities) return o.CredentialLimitStatus.AtOrAboveLimit;
        if (!e.capabilities?.passwordsLimit?.enabled) return o.CredentialLimitStatus.Unlimited;
        const r = t.length,
          a = e.capabilities?.passwordsLimit?.info?.limit;
        return r >= a
          ? o.CredentialLimitStatus.AtOrAboveLimit
          : r >= a - 5
          ? o.CredentialLimitStatus.NearLimit
          : o.CredentialLimitStatus.UnderLimit;
      });
    },
    10043: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialsPageSelector = void 0);
      const a = r(20553),
        o = r(35893),
        n = r(49960),
        i = r(9365),
        s = r(51443);
      t.credentialsPageSelector = (e, t) => {
        const r = (0, o.parseToken)(t),
          { sortToken: c, filterToken: l } = r,
          d = { sortToken: c, filterToken: l },
          u = (0, n.fieldMappersSelector)(e),
          p = (0, i.credentialsQuerySelector)(e, d),
          S = (0, s.listViewSelector)(e),
          m = (0, a.generateNextToken)(u, r, p),
          g = (0, a.generatePrevToken)(u, r, p),
          y = (0, a.getBatch)(u, r, p),
          h = (0, o.stringifyToken)(m),
          v = (0, o.stringifyToken)(g);
        return { batch: S(y), nextToken: h, prevToken: v };
      };
    },
    35410: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialsPaginationTokenSelector = void 0);
      const a = r(25501),
        o = r(49960),
        n = r(9365),
        i = r(35893);
      t.credentialsPaginationTokenSelector = (e, t) => {
        const r = (0, a.getCredentialsSortToken)(t),
          s = (0, a.getCredentialsFilterToken)(t),
          c = (0, o.fieldMappersSelector)(e),
          l = { sortToken: r, filterToken: s },
          d = (0, n.credentialsQuerySelector)(e, l),
          u = (0, a.getCredentialsFirstToken)(c, l, t, d);
        return (0, i.stringifyToken)(u);
      };
    },
    9365: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialsQuerySelector = void 0);
      const a = r(32034),
        o = r(49960),
        n = r(7439),
        i = r(92897),
        s = r(51319),
        c = r(85505),
        l = r(35893);
      t.credentialsQuerySelector = (0, a.createSelector)(
        o.fieldMappersSelector,
        c.credentialMatchSelector,
        i.sortTokenSelector,
        n.filterTokenSelector,
        s.credentialsSelector,
        l.queryData
      );
    },
    51319: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialsSelector = void 0);
      const a = r(32034),
        o = r(83659),
        n = r(92888),
        i = r(57989),
        s = r(40602),
        c = r(79895),
        l = (0, a.createSelector)(
          [
            (e) =>
              (0, n.hasCredentialsDedupViewSelector)(e) ? (0, n.dedupedCredentialsSelector)(e) : (0, o.unsafeAllCredentialsSelector)(e),
            c.credentialCategoryNamesMapSelector
          ],
          (e, t) => e.map((e) => ({ ...e, CategoryName: t[e.Category] }))
        );
      t.credentialsSelector = (0, a.createSelector)(l, i.quarantinedSpacesSelector, s.filterOutQuarantinedItems);
    },
    92888: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.hasCredentialsDedupViewSelector = t.dedupedCredentialsSelector = void 0);
      const a = r(32034),
        o = r(53682),
        n = r(66982),
        i = r(83659),
        s = {
          Alias: n.genericMerge,
          Attachments: n.concatMerge,
          AutoLogin: n.strictEqual,
          AutoProtected: n.boolEqual,
          Category: n.genericMerge,
          Checked: n.strictEqual,
          ConnectionOptions: n.genericMerge,
          CreationDatetime: n.minMerge,
          Email: n.strictEqual,
          LastUse: n.maxMerge,
          LinkedServices: n.strictEqual,
          Login: n.strictEqual,
          ModificationDatetime: n.maxMerge,
          Note: n.genericMerge,
          NumberUse: n.sumMerge,
          OtpSecret: n.strictEqual,
          OtpUrl: n.strictEqual,
          Password: n.strictEqual,
          Port: n.genericMerge,
          SID: n.genericMerge,
          SecondaryLogin: n.strictEqual,
          Server: n.genericMerge,
          SharedObject: n.strictEqual,
          SpaceId: n.strictEqual,
          Status: n.strictEqual,
          Strength: n.strictEqual,
          SubdomainOnly: n.boolEqual,
          Title: n.strictEqual,
          TrustedUrlGroup: n.concatMerge,
          Url: n.strictEqual,
          UseFixedUrl: n.strictEqual,
          UserModificationDatetime: n.maxMerge,
          UserSelectedUrl: n.strictEqual,
          kwType: n.strictEqual,
          limitedPermissions: n.strictEqual
        };
      t.dedupedCredentialsSelector = (0, a.createSelector)(
        i.unsafeAllCredentialsSelector,
        (0, o.dedupItems)(["Password", "Title", "Url"], s)
      );
      t.hasCredentialsDedupViewSelector = (e) => e.userSession.credentialsDedupViewState.credentialsDedupView;
    },
    49960: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.fieldMappersSelector = void 0);
      const a = r(32034),
        o = r(94687),
        n = r(79895),
        i = r(60463),
        s = r(91210),
        c = r(89698),
        l = r(10770),
        d = r(31607);
      t.fieldMappersSelector = (0, a.createSelector)(
        n.credentialCategoriesSelector,
        s.limitedSharingItemsSelector,
        i.credentialDisplayTitlesSelector,
        c.acceptedItemGroupsSelector,
        l.collectionsSelector,
        d.sharedCollectionsWithItemsSelector,
        o.getCredentialMappers
      );
    },
    7439: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.filterTokenSelector = void 0);
      const a = r(16516),
        o = r(35893);
      t.filterTokenSelector = (0, o.createOptimizedFilterTokenSelector)((e, { filterToken: t }) => t, a.identity);
    },
    8766: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDashlaneDefinedLinkedWebsitesSelector = void 0);
      const a = r(6205);
      t.getDashlaneDefinedLinkedWebsitesSelector = (e, t) => (0, a.getDashlaneDefinedLinkedWebsites)(t);
    },
    65950: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getLiveCredentialsByDomainSelector = void 0);
      const a = r(97006),
        o = r(51443),
        n = r(49960),
        i = r(85505),
        s = r(88083);
      t.getLiveCredentialsByDomainSelector = (e) =>
        (0, a.makeLiveSelectorGetter)(
          (0, s.getCredentialsByDomainSelector)(e),
          o.listViewSelector,
          i.credentialMatchSelector,
          n.fieldMappersSelector
        );
    },
    61645: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getLiveCredentialsSelector = void 0);
      const a = r(97006),
        o = r(51319),
        n = r(51443),
        i = r(49960),
        s = r(85505);
      t.getLiveCredentialsSelector = (0, a.makeLiveSelectorGetter)(
        o.credentialsSelector,
        n.listViewSelector,
        s.credentialMatchSelector,
        i.fieldMappersSelector
      );
    },
    80920: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.shouldShowRequireMasterPasswordSelector = void 0);
      const a = r(38981);
      t.shouldShowRequireMasterPasswordSelector = (e) => !(0, a.isSSOUserSelector)(e);
    },
    86685: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getViewedCredentialSelector = void 0);
      const a = r(32034),
        o = r(52102),
        n = r(91210),
        i = r(51319),
        s = r(79895),
        c = r(91892),
        l = r(16593),
        d = r(49551),
        u = r(7944),
        p = r(88542);
      t.getViewedCredentialSelector = (e) => {
        const t = (0, a.createSelector)(i.credentialsSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, a.createSelector)(
          t,
          o.sharingDataSelector,
          l.userIdSelector,
          n.limitedSharingItemsSelector,
          s.credentialCategoriesSelector,
          c.iconsSelector,
          u.spacesSelector,
          p.viewCredential
        );
      };
    },
    78767: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getViewedCredentialsBatchSelector = void 0);
      const a = r(32034),
        o = r(91210),
        n = r(80993),
        i = r(79895),
        s = r(9365),
        c = r(49960),
        l = r(91892),
        d = r(25501),
        u = r(35893);
      t.getViewedCredentialsBatchSelector = (e) => {
        const { sortToken: t, filterToken: r } = e,
          p = { sortToken: t, filterToken: r },
          S = (0, d.getCredentialsBatch)(e),
          m = (0, a.createSelector)((e) => (0, s.credentialsQuerySelector)(e, p), c.fieldMappersSelector, S),
          g = (0, u.optimizeBatchSelector)(m);
        return (0, a.createSelector)(
          g,
          n.sortedSharedItemIdsSelector,
          o.limitedSharingItemsSelector,
          i.credentialCategoriesSelector,
          l.iconsSelector,
          d.viewCredentialsBatch
        );
      };
    },
    51443: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listViewSelector = void 0);
      const a = r(32034),
        o = r(25501),
        n = r(80993),
        i = r(91210),
        s = r(79895),
        c = r(91892);
      t.listViewSelector = (0, a.createSelector)(
        n.sortedSharedItemIdsSelector,
        i.limitedSharingItemsSelector,
        s.credentialCategoriesSelector,
        c.iconsSelector,
        (e, t, r, a) => (n) => (0, o.viewCredentialsBatch)(n, e, t, r, a)
      );
    },
    19325: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getQueryByDomainSelector = void 0);
      const a = r(24589),
        o = r(49960),
        n = r(85505),
        i = r(88083);
      t.getQueryByDomainSelector = (e) =>
        (0, a.getQuerySelector)((0, i.getCredentialsByDomainSelector)(e), n.credentialMatchSelector, o.fieldMappersSelector);
    },
    41841: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.querySelector = void 0);
      const a = r(24589),
        o = r(51319),
        n = r(49960),
        i = r(85505);
      t.querySelector = (0, a.getQuerySelector)(o.credentialsSelector, i.credentialMatchSelector, n.fieldMappersSelector);
    },
    92897: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sortTokenSelector = void 0);
      const a = r(16516),
        o = r(35893);
      t.sortTokenSelector = (0, o.createOptimizedSortTokenSelector)((e, { sortToken: t }) => t, a.identity);
    },
    83659: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.unsafeAllCredentialsSelector = void 0);
      t.unsafeAllCredentialsSelector = (e) => e.userSession.personalData.credentials;
    },
    60581: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.viewedCredentialSelector = void 0);
      const a = r(88542),
        o = r(91210),
        n = r(52102),
        i = r(19736),
        s = r(79895),
        c = r(16593),
        l = r(91892),
        d = r(7944);
      t.viewedCredentialSelector = (e, t) => {
        const r = (0, i.credentialSelector)(e, t);
        if (!r) return;
        const u = (0, s.credentialCategoriesSelector)(e),
          p = (0, n.sharingDataSelector)(e),
          S = (0, c.userIdSelector)(e),
          m = (0, o.limitedSharingItemsSelector)(e),
          g = (0, l.iconsSelector)(e),
          y = (0, d.spacesSelector)(e);
        return (0, a.viewCredential)(r, p, S, m, u, g, y);
      };
    },
    28831: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.viewedQueriedCredentialsByDomainSelector = void 0);
      const a = r(19325),
        o = r(51443),
        n = r(63566);
      t.viewedQueriedCredentialsByDomainSelector = (e, t) => {
        const { domain: r, ...i } = t,
          s = (0, a.getQueryByDomainSelector)(r)(e, i),
          c = (0, o.listViewSelector)(e);
        return (0, n.viewListResults)(c)(s);
      };
    },
    66663: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.viewedQueriedCredentialsSelector = void 0);
      const a = r(63566),
        o = r(41841),
        n = r(51443);
      t.viewedQueriedCredentialsSelector = (e, t) => {
        const r = (0, o.querySelector)(e, t),
          i = (0, n.listViewSelector)(e);
        return (0, a.viewListResults)(i)(r);
      };
    },
    9763: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createCredential = t.createBaseCredentialModel = void 0);
      const a = r(16516),
        o = r(21178),
        n = r(32626),
        i = r(61923),
        s = r(13675),
        c = r(47975),
        l = r(78320),
        d = r(53),
        u = r(90771),
        p = r(23439),
        S = r(78163),
        m = r(23136);
      (t.createBaseCredentialModel = (e = n.Country.NO_TYPE) => {
        const t = (0, d.getUnixTimestamp)();
        return {
          kwType: "KWAuthentifiant",
          Id: (0, l.generateItemUuid)(),
          AnonId: (0, l.generateItemUuid)(),
          CreationDatetime: t,
          LastBackupTime: 0,
          LastUse: t,
          LocaleFormat: e
        };
      }),
        (t.createCredential = async function (
          { storeService: e, sessionService: r, eventLoggerService: l, applicationModulesAccess: d },
          g,
          y
        ) {
          if (!e.isAuthenticated()) throw new Error("No session available to updateCredential");
          const h = await (0, m.getDefaultSpaceId)(e),
            v = (0, p.getUrlFields)(g.url, !0),
            { email: f, login: w, secondaryLogin: A } = (0, i.normalizeUsernames)(g.email, g.login, g.secondaryLogin),
            P = e.getPersonalData(),
            T = e.getPlatformInfo(),
            b = (0, p.getCategoryIdByName)(P, g.category),
            I = (0, a.defaultTo)("", g.password),
            C = (0, a.defaultTo)(h, g.spaceId),
            E = I ? await (0, c.evaluatePasswordStrength)(I) : 0,
            _ = y || (() => ({})),
            D = new o.ParsedURL(g.url).getRootDomain(),
            O = (0, s.sanitizeInputPersonalData)({
              ...(0, t.createBaseCredentialModel)(n.Country[T.country]),
              AutoProtected: g.protectWithMasterPassword,
              Title: D,
              Email: f,
              Login: w,
              SubdomainOnly: g.onlyForThisSubdomain,
              SecondaryLogin: A,
              Password: I,
              Strength: E,
              Status: "ACCOUNT_NOT_VERIFIED",
              Category: b,
              SpaceId: C,
              AutoLogin: g.autoLogin ?? !0,
              ...v,
              ..._(g)
            });
          return (
            (0, u.saveCredentialAsPersonalDataItem)(
              { storeService: e, sessionService: r, eventLoggerService: l, applicationModulesAccess: d },
              O
            ),
            d &&
              (0, S.shouldSendCreateOrModifiedCredentialActivityLog)(e, d, O) &&
              (await (0, S.computeAndSendCreatedCredentialActivityLog)(d, { domainUrl: O.Url })),
            { credentialId: O.Id }
          );
        });
    },
    23439: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getUrlFields = t.getCategoryIdByName = void 0);
      const a = r(87496);
      t.getCategoryIdByName = (e, t) => {
        const r = e.credentialCategories;
        if (!t) return "";
        if (r.find((e) => e.Id === t)) return t;
        const a = r.find((e) => e.CategoryName === t);
        return a?.Id;
      };
      t.getUrlFields = (e, t, r) => {
        const o = r?.Url !== e,
          n = (0, a.cleanUrlForPersonalData)(e, { keepQueryString: t }),
          i =
            t && o
              ? { UserSelectedUrl: n, UseFixedUrl: !0 }
              : { UserSelectedUrl: r?.UserSelectedUrl ?? "", UseFixedUrl: r?.UseFixedUrl ?? !1 };
        return { Url: n, TrustedUrlGroup: (0, a.getUpdatedTrustedUrlList)(r?.TrustedUrlGroup ?? [], n), ...i };
      };
    },
    90771: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.saveCredentialAsPersonalDataItem = void 0);
      const a = r(78924),
        o = r(93039),
        n = r(48313),
        i = r(12362),
        s = r(86691),
        c = r(56915),
        l = r(73566),
        d = r(85225),
        u = r(23136),
        p = r(88542),
        S = r(79980);
      t.saveCredentialAsPersonalDataItem = async function (
        { storeService: e, sessionService: t, eventLoggerService: r, applicationModulesAccess: m },
        g,
        y
      ) {
        y && (0, p.notifySharersCredentialUpdated)(e, y, g, m);
        const h = e.getPersonalData(),
          v = (0, l.getUpdatedItemChangeHistory)({
            deviceName: e.getLocalSettings().deviceName,
            personalData: h,
            change: (0, d.makeUpdateChange)(g),
            userLogin: e.getUserLogin(),
            platformInfo: (0, c.platformInfoSelector)(e.getState())
          });
        let f = null;
        const w = (0, i.getInstance)(),
          A = (0, s.getInstance)();
        try {
          (f = A.lockTopic("iconsUpdates")),
            e.dispatch((0, n.savePersonalDataItem)(g, g.kwType, v)),
            await t.getInstance().user.persistPersonalData(),
            (0, p.afterCredentialSaved)(e, g);
          const i = { type: "credentialUpdates", credentialIds: [g.Id] };
          await w.add("iconsUpdates", i), y ? (0, S.logEditVaultItem)(e, r, g, y) : (0, S.logAddVaultItem)(e, r, g);
          const { commands: s } = m.createClients().vaultItemsCrud;
          await s.emitTemporaryVaultItemEvent({ ids: [g.Id], eventType: y ? a.EventType.Updated : a.EventType.Created });
          (0, u.getDebounceSync)(e, t)({ immediateCall: !0 }, o.Trigger.Save);
        } finally {
          f && A.releaseTopic("iconsUpdates", f);
        }
      };
    },
    88779: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateCredential = void 0);
      const a = r(19736),
        o = r(53),
        n = r(90771),
        i = r(23439),
        s = r(78163);
      t.updateCredential = async function (
        { storeService: e, sessionService: t, eventLoggerService: r, applicationModulesAccess: c },
        l,
        d
      ) {
        if (!e.isAuthenticated()) throw new Error("No session available to updateCredential");
        const u = e.getState(),
          p = (0, a.credentialSelector)(u, l.id);
        if (!p) throw new Error("Credential does not exist, cant update");
        const S = l.update.url ? (0, i.getUrlFields)(l.update.url, l.update.isUrlSelectedByUser, p) : {},
          m = d || (() => ({})),
          g = {
            ...p,
            ...S,
            Password: void 0 !== l.update.password ? l.update.password : p.Password,
            Email: l.update.email ?? p.Email,
            Login: l.update.login ?? p.Login,
            Checked: void 0 !== l.update.isExcludedFromHealth ? l.update.isExcludedFromHealth : p.Checked,
            LinkedServices: l.update.linkedServices ?? p.LinkedServices,
            ModificationDatetime: (0, o.getUnixTimestamp)(),
            ...m(l)
          };
        (0, n.saveCredentialAsPersonalDataItem)(
          { storeService: e, sessionService: t, eventLoggerService: r, applicationModulesAccess: c },
          g,
          p
        ),
          c &&
            (0, s.shouldSendCreateOrModifiedCredentialActivityLog)(e, c, g) &&
            (await (0, s.computeAndSendModifiedCredentialActivityLog)(c, { domainUrl: g.Url }));
      };
    },
    38786: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isAmazonWebsite = void 0);
      const a = r(21178);
      t.isAmazonWebsite = (e) => "amazon" === new a.ParsedURL(e).getRootDomainName();
    },
    87496: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUpdatedTrustedUrlList = t.cleanUrlForPersonalData = t.getBestUrl = t.getFirstTrustedUrl = t.getBaseTrustedUrls = void 0);
      const a = r(51121),
        o = r(16516),
        n = r(21178),
        i = r(38786),
        s = r(53),
        c = (e) => new n.ParsedURL(e).getUrlWithFallbackHttpsProtocol(),
        l = (0, o.compose)(
          (e) => {
            const { protocol: t, hostname: r, port: o } = (0, a.parse)(e);
            return t && /^https?:/.test(t) ? (0, a.format)({ protocol: t, hostname: r, port: o }) : null;
          },
          c,
          o.trim
        ),
        d = (e) => !(0, o.isNil)(e);
      t.getBaseTrustedUrls = (0, o.compose)(
        (e) => e.filter(d),
        (0, o.map)(l),
        (0, o.map)((0, o.defaultTo)("")),
        (0, o.map)((0, o.prop)("TrustedUrl")),
        (0, o.defaultTo)([])
      );
      t.getFirstTrustedUrl = (e) => (0, o.defaultTo)("")((0, o.head)((0, t.getBaseTrustedUrls)(e.TrustedUrlGroup)));
      function u(e, t) {
        if (!e) return "";
        if ((0, i.isAmazonWebsite)(e)) return e;
        let r = e;
        return (
          { keepQueryString: !1, ...t }.keepQueryString ||
            (r = (function (e) {
              const t = e.indexOf("?");
              return t > -1 ? e.slice(0, t) : e;
            })(r)),
          c(r)
        );
      }
      (t.getBestUrl = (e) => {
        const r = (a = e).UseFixedUrl && a.UserSelectedUrl ? a.UserSelectedUrl : null;
        var a;
        return r && r.length ? r : e.Url && e.Url.length ? e.Url : (0, t.getFirstTrustedUrl)(e);
      }),
        (t.cleanUrlForPersonalData = u),
        (t.getUpdatedTrustedUrlList = function (e, t) {
          const r = u(t),
            a = new n.ParsedURL(r).getRootDomain(),
            o = (e || []).filter((e) => new n.ParsedURL(e.TrustedUrl).getRootDomain() === a);
          if (o.some((e) => e.TrustedUrl === r)) return o;
          const i = o.length >= 20 ? o.length - 20 + 1 : 0;
          return o.slice(i).concat({ TrustedUrl: r, TrustedUrlExpire: (0, s.getUnixTimestamp)().toString() });
        });
    },
    61923: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.normalizeUsernames = void 0);
      const a = r(16516),
        o = r(28445);
      t.normalizeUsernames = function (e, t, r) {
        const n = (0, a.defaultTo)("");
        let i = e,
          s = t;
        return (
          (0, o.looksLikeEmail)(t)
            ? ((i = t), (0, o.looksLikeEmail)(e) ? ((i = e), (s = "")) : (s = e))
            : (0, o.looksLikeEmail)(e) ||
              ((0, a.isEmpty)(e) || (s = e), (0, o.looksLikeEmail)(t) ? (i = t) : ((0, a.isEmpty)(t) || (s = t), (i = ""))),
          { email: n(i), login: n(s), secondaryLogin: n(r) }
        );
      };
    },
    71120: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.detailView = void 0);
      const a = (0, r(16516).defaultTo)("");
      t.detailView = (e) => {
        if (e) return { id: e.Id, categoryName: a(e.CategoryName) };
      };
      t.listView = (e) => e.map(t.detailView);
    },
    65968: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.detailView = void 0);
      const a = r(16516),
        o = r(82043),
        n = r(71120),
        i = r(90073),
        s = r(6205),
        c = (0, a.defaultTo)(""),
        l = (0, a.defaultTo)(!1);
      t.detailView = (0, a.curry)((e, t, r, a, d) => {
        const u = t(d.Category),
          p = e(d.Id),
          S = r(d.Url),
          m = c(d.Password),
          g = a(d),
          y = { addedByDashlane: (0, s.getDashlaneDefinedLinkedWebsites)(d.Url), addedByUser: (0, s.getUserAddedLinkedWebsiteDomains)(d) };
        return {
          ...(0, o.dataModelDetailView)(d),
          autoLogin: d.AutoLogin || !1,
          autoProtected: l(d.AutoProtected),
          category: (0, n.detailView)(u),
          domainIcon: S,
          email: c(d.Email),
          forceCategorizedSpace: g,
          linkedWebsites: y,
          login: c(d.Login),
          note: c(d.Note),
          hasOtp: Boolean(d.OtpSecret) || Boolean(d.OtpUrl),
          otpSecret: c(d.OtpSecret),
          otpUrl: c(d.OtpUrl),
          password: m,
          secondaryLogin: d.SecondaryLogin,
          sharingStatus: p,
          strength: d.Strength || 0,
          subdomainOnly: d.SubdomainOnly || !1,
          title: c(d.Title || (0, i.getDomainForCredential)(d)),
          url: c(d.Url || d.UserSelectedUrl)
        };
      });
    },
    29179: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = void 0);
      const a = r(16516),
        o = r(82043),
        n = r(71120),
        i = r(90073),
        s = (0, a.defaultTo)("");
      t.itemView = (0, a.curry)((e, t, r, c) => {
        const l = t(c.Category);
        return {
          ...(0, o.dataModelItemView)(c),
          autoProtected: (0, a.defaultTo)(!1, c.AutoProtected),
          category: (0, n.detailView)(l),
          domainIcon: r(c.Url),
          email: s(c.Email),
          login: s(c.Login),
          password: s(c.Password),
          sharingSatus: e(c.Id),
          title: s(c.Title || (0, i.getDomainForCredential)(c)),
          url: s(c.Url || c.UserSelectedUrl)
        };
      });
      t.listView = (e, r, a, o) => {
        const n = (0, t.itemView)(e, r, a);
        return o.map(n);
      };
    },
    19065: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeDataManagementController = void 0);
      const a = r(93039),
        o = r(35834),
        n = r(50886),
        i = r(76496),
        s = r(23136),
        c = r(84511),
        l = r(10770),
        d = { immediateCall: !0 };
      t.makeDataManagementController = (e) => {
        const t = (0, s.getDebounceSync)(e.storeService, e.sessionService);
        return {
          savePaymentCardFromClient: (r) =>
            (function (e, t, r) {
              (0, o.savePaymentCard)(e, r), t(d, a.Trigger.Save);
            })({ storeService: e.storeService, sessionService: e.sessionService, eventLoggerService: e.eventLoggerService }, t, r),
          savePersonalDataItem: (r) =>
            (async function (e, t, r) {
              const { storeService: i, sessionService: s, eventLoggerService: l, applicationModulesAccess: u } = e;
              if ("KWPaymentMean_creditCard" === r.kwType)
                return (
                  (0, o.savePaymentCard)({ storeService: i, sessionService: s, eventLoggerService: l }, r.content),
                  t(d, a.Trigger.Save),
                  Promise.resolve({ success: !0, itemId: "" })
                );
              {
                const o = await (0, n.addPersonalDataItem)(
                    { storeService: i, sessionService: s, eventLoggerService: l, applicationModulesAccess: u },
                    r
                  ),
                  p = i.getState(),
                  S = (0, c.isSharedSelector)(p, r.content.id);
                return (
                  ("KWAuthentifiant" === r.kwType && r.shouldSkipSync) ||
                    (S ? await e.sessionService.getInstance().user.attemptSync(a.Trigger.SettingsChange) : t(d, a.Trigger.Save)),
                  o
                );
              }
            })(
              {
                storeService: e.storeService,
                sessionService: e.sessionService,
                eventLoggerService: e.eventLoggerService,
                applicationModulesAccess: e.applicationModulesAccess
              },
              t,
              r
            ),
          removePersonalDataItem: (r) =>
            (function (e, t, r, o) {
              return (0, i.deletePersonalDataItem)(e, o).then(
                (n) => (
                  n.success &&
                    (r(d, a.Trigger.Save),
                    (0, l.removeItemsFromCollectionsHandler)({ storeService: e.storeService, sessionService: t }, { ids: [o] })),
                  n
                )
              );
            })(
              {
                storeService: e.storeService,
                wsService: e.wsService,
                eventLoggerService: e.eventLoggerService,
                applicationModulesAccess: e.applicationModulesAccess
              },
              e.sessionService,
              t,
              r
            ),
          updateMetadataItemFilledOnPage: (r, o, i) =>
            (function (e, t, r, o, i) {
              (0, n.updatePersonalDataUsageMetadata)(e, r, o, i), t({}, a.Trigger.SaveMeta);
            })(e.storeService, t, r, o, i)
        };
      };
    },
    53682: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.dedupItems = t.merge = void 0);
      t.merge = (e, t, r) => {
        const a = {};
        return Object.keys(r).every((o) => {
          const n = r[o](e[o], t[o]);
          return n.success && (a[o] = n.result), n.success;
        })
          ? { success: !0, result: { ...e, ...t, ...a } }
          : { success: !1 };
      };
      t.dedupItems = (e, r) => (a) => {
        const o = [],
          n = {};
        for (const i of a) {
          const a = e.reduce((e, t) => `${e}${i[t]}`, "");
          if (a in n) {
            const e = n[a];
            let s = !1;
            for (const a of e) {
              const e = o[a],
                n = (0, t.merge)(i, e, r);
              if (n.success) {
                (o[a] = n.result), (s = !0);
                break;
              }
            }
            s || (o.push(i), e.push(o.length - 1));
          } else o.push(i), (n[a] = [o.length - 1]);
        }
        return o;
      };
    },
    66982: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.concatMerge = t.minMerge = t.maxMerge = t.sumMerge = t.genericMerge = t.boolEqual = t.strictEqual = void 0);
      t.strictEqual = (e, t) => (e === t ? { success: !0, result: e } : { success: !1 });
      t.boolEqual = (e, t) => (Boolean(e) === Boolean(t) ? { success: !0, result: e } : { success: !1 });
      t.genericMerge = (e, t) => (e === t ? { success: !0, result: e } : e && t ? { success: !1 } : { success: !0, result: e || t });
      const r = (e) => (t, r) => ({ success: !0, result: void 0 === t && void 0 === r ? void 0 : e(t ?? 0, r ?? 0) });
      (t.sumMerge = r((e, t) => e + t)), (t.maxMerge = r(Math.max)), (t.minMerge = r(Math.min));
      t.concatMerge = (e, t) => ({ success: !0, result: void 0 === e && void 0 === t ? void 0 : [...(e ?? []), ...(t ?? [])] });
    },
    45157: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRemoveChangeHistory = void 0);
      const a = r(73566),
        o = r(56915),
        n = r(16593),
        i = r(72678),
        s = r(85225);
      t.getRemoveChangeHistory = function (e, t) {
        const r = e.getState(),
          c = (0, i.personalDataSelector)(r),
          l = (0, o.platformInfoSelector)(r),
          d = (0, n.userLoginSelector)(r),
          { localSettings: u } = e.getState().userSession,
          p = u.deviceName,
          S = (0, s.makeRemovalChange)(t);
        return (0, a.getUpdatedItemChangeHistory)({ change: S, deviceName: p, personalData: c, userLogin: d, platformInfo: l });
      };
    },
    76496: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deletePersonalDataItem = t.findPersonalDataItemToDelete = void 0);
      const a = r(16516),
        o = r(32626),
        n = r(58107),
        i = r(71646),
        s = r(95623),
        c = r(45291),
        l = r(45157),
        d = r(49551),
        u = r(70252),
        p = r(36884),
        S = r(36513),
        m = r(63698),
        g = r(90622),
        y = r(16593),
        h = r(76089),
        v = r(79980),
        f = r(93039),
        w = r(92310),
        A = r(78163),
        P = r(78924),
        T = [
          "addresses",
          "bankAccounts",
          "companies",
          "credentialCategories",
          "credentials",
          "driverLicenses",
          "emails",
          "fiscalIds",
          "idCards",
          "identities",
          "noteCategories",
          "notes",
          "passkeys",
          "passports",
          "paymentCards",
          "paypalAccounts",
          "personalWebsites",
          "phones",
          "secrets",
          "secureFileInfo",
          "socialSecurityIds"
        ];
      function b(e, t) {
        let r,
          o = 0;
        const n = e.getPersonalData(),
          i = (0, a.pick)(T, n);
        for (const e of Object.keys(i))
          if (((r = (0, d.findDataModelObject)(t, i[e])), r)) {
            o = i[e].length;
            break;
          }
        return { itemToDelete: r, currentItemsCountForDataType: o };
      }
      (t.findPersonalDataItemToDelete = b),
        (t.deletePersonalDataItem = async function (
          { storeService: e, wsService: t, eventLoggerService: r, applicationModulesAccess: a },
          d,
          T
        ) {
          const {
            FORBIDDEN_GROUP_ITEM: I,
            FORBIDDEN_LAST_ADMIN: C,
            INTERNAL_ERROR: E,
            LEAVE_SHARING_FAILED: _,
            NOT_AUTHORIZED: D,
            NOT_FOUND: O
          } = o.RemovePersonalDataItemFailureReason;
          let M = null;
          try {
            if (!e.isAuthenticated()) {
              const e = "No session available to delete personal item";
              return s.Debugger.log(e), { success: !1, reason: D, message: e };
            }
            const { itemToDelete: u } = b(e, d);
            if (!u) {
              const e = `Unable to find personal item to delete: ${d}`;
              return s.Debugger.error(e), { success: !1, reason: O, message: e };
            }
            const E = (0, o.isCredential)(u);
            if (E || (0, o.isNote)(u) || (0, o.isSecret)(u)) {
              const r = await (0, S.makeCryptoService)(),
                a = e.getUserLogin(),
                o = (0, g.ukiSelector)(e.getState()),
                { makeRefuseItemGroupEvent: s } = (0, p.makeItemGroupService)(t, r),
                { Id: c } = u,
                { userGroups: d, itemGroups: y } = e.getSharingData(),
                h = (0, i.findItemItemGroup)(c, y),
                v = T && T.ignoreSharing;
              if (h && !v) {
                const e = (0, n.isUserLastAdmin)(h, a),
                  t = (0, n.doesUserReceiveItemGroupViaGroup)(h, d, a);
                if (!(!e && !t)) return { success: !1, reason: e ? C : I, message: "Unshare the item before deleting it" };
                try {
                  const { groupId: e, revision: t } = h,
                    { refuseItemGroup: r } = (0, m.makeItemGroupWS)(),
                    n = s(e, t, null);
                  await r(a, o, n);
                } catch (e) {
                  return { success: !1, reason: _, message: `${e}` };
                }
              }
              M = (0, l.getRemoveChangeHistory)(e, u);
            }
            (0, v.logDeleteVaultItem)(e, r, u, f.UpdateCredentialOrigin.Manual, T?.multiSelectId || null);
            const N = (0, c.removePersonalItem)(u.kwType, u.Id, M);
            if ((e.dispatch(N), E)) {
              const t = e.getState();
              if ((0, y.isOnboardingNotificationShowingSelector)(t)) {
                const t = (0, h.webOnboardingModeReset)();
                e.dispatch(t);
              }
            }
            if (a && E && (0, A.hasVaultAuditLogsFFActivated)(a)) {
              const t = (0, w.currentTeamIdSelector)(e.getState());
              u.SpaceId === t && (await (0, A.computeAndSendDeletedCredentialActivityLog)(a, { domainUrl: u.Url }));
            }
            if (a && !T?.manualHealthUpdate && E) {
              const { commands: e } = a.createClients().vaultItemsCrud;
              await e.emitTemporaryVaultItemEvent({ ids: [u.Id], eventType: P.EventType.Deleted });
            }
            return { success: !0 };
          } catch (e) {
            const t = `[DataManagement] - deletePersonalDataItem: ${e}`,
              r = new Error(t);
            return (0, u.sendExceptionLog)({ error: r }), { success: !1, reason: E, message: t };
          }
        });
    },
    57779: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.duplicateSharedElements = void 0);
      const a = r(32626),
        o = r(48313),
        n = r(78320),
        i = r(49551),
        s = r(12362),
        c = r(86691);
      t.duplicateSharedElements = async function (e, t) {
        let r = null;
        const l = (0, s.getInstance)(),
          d = (0, c.getInstance)(),
          { notes: u, credentials: p, changeHistories: S, secrets: m } = e.getPersonalData(),
          g = [...u, ...p, ...m],
          y = (0, i.findDataModelObject)(t, g);
        if (!y) return null;
        const h = (0, n.generateItemUuid)(),
          v = { ...y, Id: h },
          f = S.find((e) => e.ObjectId.toUpperCase() === t.toUpperCase());
        if ((0, a.isCredential)(y)) {
          r = d.lockTopic("iconsUpdates");
          const e = { credentialIds: [h], type: "credentialUpdates" };
          await l.add("iconsUpdates", e);
        }
        const w = (0, o.savePersonalDataItem)(v, v.kwType, f);
        return e.dispatch(w), r && d.releaseTopic("iconsUpdates", r), h;
      };
    },
    75912: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(57012),
        o = r(40086);
      t.config = {
        commands: { getPersonalDataExport: { handler: a.getPersonalDataExport } },
        queries: { getIsForcedDomainsEnabled: { selector: o.isForcedDomainsEnabledSelector } },
        liveQueries: {}
      };
    },
    40086: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isForcedDomainsEnabledSelector = void 0);
      const a = r(16593);
      t.isForcedDomainsEnabledSelector = (e) => {
        const t = (0, a.activeSpacesSelector)(e)[0];
        return t?.info?.forcedDomainsEnabled ?? !1;
      };
    },
    24108: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCredentialsExport = void 0);
      const a = r(32626),
        o = r(33553),
        n = r(28780),
        i = (e) =>
          e.reduce(
            (e, t) => (
              t.VaultItems.filter((e) => e.Type === a.DataModelType.KWAuthentifiant)
                .map((e) => e.Id)
                .forEach((r) => {
                  e[r] ? e[r].push(t.Name) : (e[r] = [t.Name]);
                }),
              e
            ),
            {}
          ),
        s = (e, t) => {
          const r = e[t];
          return r ? r.join(", ") : "";
        };
      t.getCredentialsExport = function (e) {
        const t = e.credentials,
          r = e.collections,
          a = i(r),
          c = [
            { headerKey: "username", dataKey: "Email" },
            { headerKey: "username2", dataKey: "Login" },
            { headerKey: "username3", dataKey: "SecondaryLogin" },
            { headerKey: "title", dataKey: "Title" },
            { headerKey: "password", dataKey: "Password" },
            { headerKey: "note", dataKey: "Note" },
            { headerKey: "url", dataKey: "Url" },
            { headerKey: "category", dataKey: "Category" },
            { headerKey: "otpSecret", dataKey: "OtpSecret" }
          ];
        return (0, n.formatDataToCSV)([
          (0, n.formatHeader)(c),
          ((l = t),
          l.map((e) => {
            const t = [e.Email, e.Login, e.SecondaryLogin].filter((e) => void 0 !== e && "" !== e),
              [r = "", n = "", i = ""] = t;
            return c
              .map((t) => {
                const c = e[t.dataKey] ?? "";
                if ("Category" === t.dataKey) return (0, o.handleSpecialCharacter)(s(a, e.Id));
                if ("Email" === t.dataKey) return (0, o.handleSpecialCharacter)(r);
                if ("Login" === t.dataKey) return (0, o.handleSpecialCharacter)(n);
                if ("SecondaryLogin" === t.dataKey) return (0, o.handleSpecialCharacter)(i);
                if ("Note" === t.dataKey && "" !== c) return (0, o.handleSpecialCharacter)(c);
                if ("Password" === t.dataKey) {
                  const e = `${c}`;
                  return (0, o.handleSpecialCharacter)(e);
                }
                {
                  const e = `${c}`;
                  return (0, o.handleSpecialCharacter)(e);
                }
              })
              .join(",");
          })).join("\r\n")
        ]);
        var l;
      };
    },
    88096: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCSVExport = void 0);
      const a = r(49267);
      a.configure({ useWebWorkers: !1 });
      const o = r(24108),
        n = r(31107),
        i = r(40549),
        s = r(8177),
        c = r(29375),
        l = [
          { filename: "credentials", generator: o.getCredentialsExport },
          { filename: "personalInfo", generator: c.getPersonalInfoExport },
          { filename: "securenotes", generator: n.getSecureNotesExport },
          { filename: "payments", generator: i.getPaymentsExport },
          { filename: "ids", generator: s.getIdsExport }
        ],
        d = (e) =>
          new Promise((t, r) => {
            const a = new FileReader();
            a.readAsDataURL(e),
              (a.onloadend = () => {
                const e = a.result;
                e ? t(e.toString()) : r(new Error("Error creating CSV export."));
              });
          });
      t.getCSVExport = async function (e) {
        const t = new a.ZipWriter(new a.BlobWriter("application/zip")),
          r = [];
        for (const { filename: o, generator: n } of l) {
          const i = n(e);
          r.push(t.add(`${o}.csv`, new a.BlobReader(new Blob([i], { type: "text/csv" }))));
        }
        await Promise.all(r);
        const o = await t.close();
        return await d(o);
      };
    },
    54130: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDashlaneSecureExport = void 0);
      const a = r(16516),
        o = r(56668),
        n = r(61797);
      t.getDashlaneSecureExport = async function (e, t) {
        const r = (0, a.join)(";", (0, a.pluck)("Id", t));
        t.forEach((e) => {
          delete e.Attachments;
        });
        const i = (0, n.getDashlaneXml)(t),
          s = (0, o.utf16ToDeflatedUtf8)(i),
          c = await e.encrypt(s);
        return (0, a.join)("\n", [
          "-------------------- Dashlane Secured Export ----------------------",
          "--------------------        Id BEGIN         ----------------------",
          r,
          "--------------------         Id END          ----------------------",
          "--------------------       Data BEGIN        ----------------------",
          c,
          "--------------------        Data END         ----------------------",
          "--------------------       Files BEGIN       ----------------------",
          "--------------------        Files END        ----------------------\n"
        ]);
      };
    },
    8177: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getIdsExport = void 0);
      const a = r(72099),
        o = r(33553),
        n = r(28780);
      t.getIdsExport = function (e) {
        const t = new Map();
        e.identities.forEach((e) => {
          t.set(e.Id, e);
        });
        const r = e.idCards,
          i = e.passports,
          s = e.driverLicenses,
          c = e.socialSecurityIds,
          l = e.fiscalIds,
          d = [
            { headerKey: "type", dataKey: "type" },
            { headerKey: "number", dataKey: "Number" },
            { headerKey: "name", dataKey: "Fullname" },
            { headerKey: "issue_date", dataKey: "DeliveryDate" },
            { headerKey: "expiration_date", dataKey: "ExpireDate" },
            { headerKey: "place_of_issue", dataKey: "DeliveryPlace" },
            { headerKey: "state", dataKey: "State" }
          ];
        return (0, n.formatDataToCSV)([
          (0, n.formatHeader)(d),
          ((e) =>
            ((e) =>
              e.map((e) => {
                const r = t.get(e.LinkedIdentity);
                return d
                  .map((t) => {
                    const n = `${e[t.dataKey] ?? ""}`;
                    if ("type" === t.dataKey) return "card";
                    if ("Fullname" === t.dataKey && r) {
                      const e = (0, a.identityToName)(r) ?? n;
                      return (0, o.handleSpecialCharacter)(e);
                    }
                    return (0, o.handleSpecialCharacter)(n);
                  })
                  .join(",");
              }))(e).join("\r\n"))(r),
          ((e) =>
            ((e) =>
              e.map((e) => {
                const r = t.get(e.LinkedIdentity);
                return d
                  .map((t) => {
                    const n = `${e[t.dataKey] ?? ""}`;
                    if ("type" === t.dataKey) return "passport";
                    if ("Fullname" === t.dataKey && r) {
                      const e = (0, a.identityToName)(r) ?? n;
                      return (0, o.handleSpecialCharacter)(e);
                    }
                    return (0, o.handleSpecialCharacter)(n);
                  })
                  .join(",");
              }))(e).join("\r\n"))(i),
          ((e) =>
            ((e) =>
              e.map((e) => {
                const r = t.get(e.LinkedIdentity);
                return d
                  .map((t) => {
                    const n = `${e[t.dataKey] ?? ""}`;
                    if ("type" === t.dataKey) return "license";
                    if ("Fullname" === t.dataKey && r) {
                      const e = (0, a.identityToName)(r) ?? n;
                      return (0, o.handleSpecialCharacter)(e);
                    }
                    return (0, o.handleSpecialCharacter)(n);
                  })
                  .join(",");
              }))(e).join("\r\n"))(s),
          ((e) =>
            ((e) =>
              e.map((e) => {
                const r = t.get(e.Id);
                return d
                  .map((t) => {
                    const n = `${e[t.dataKey] ?? ""}`;
                    if ("type" === t.dataKey) return "social_security";
                    if ("Number" === t.dataKey) {
                      const t = e.SocialSecurityNumber;
                      return (0, o.handleSpecialCharacter)(t);
                    }
                    if ("Fullname" === t.dataKey) {
                      const t = r ? (0, a.identityToName)(r) : e.SocialSecurityFullname;
                      return (0, o.handleSpecialCharacter)(t);
                    }
                    return (0, o.handleSpecialCharacter)(n);
                  })
                  .join(",");
              }))(e).join("\r\n"))(c),
          ((e) =>
            ((e) =>
              e.map((e) =>
                d
                  .map((t) => {
                    const r = `${e[t.dataKey] ?? ""}`;
                    if ("type" === t.dataKey) return (0, o.handleSpecialCharacter)("tax_number");
                    if ("Number" === t.dataKey) {
                      const t = e.FiscalNumber;
                      return (0, o.handleSpecialCharacter)(t);
                    }
                    {
                      const e = `${r}`;
                      return (0, o.handleSpecialCharacter)(e);
                    }
                  })
                  .join(",")
              ))(e).join("\r\n"))(l)
        ]);
      };
    },
    40549: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPaymentsExport = void 0);
      const a = r(33553),
        o = r(28780);
      t.getPaymentsExport = function (e) {
        const t = e.bankAccounts,
          r = e.paymentCards,
          n = [
            { headerKey: "type", dataKey: "Type" },
            { headerKey: "account_name", dataKey: "BankAccountName" },
            { headerKey: "account_holder", dataKey: "BankAccountOwner" },
            { headerKey: "cc_number", dataKey: "CardNumber" },
            { headerKey: "code", dataKey: "SecurityCode" },
            { headerKey: "expiration_month", dataKey: "ExpireMonth" },
            { headerKey: "expiration_year", dataKey: "ExpireYear" },
            { headerKey: "routing_number", dataKey: "BankAccountBIC" },
            { headerKey: "account_number", dataKey: "BankAccountIBAN" },
            { headerKey: "country", dataKey: "LocaleFormat" },
            { headerKey: "issuing_bank", dataKey: "BankAccountBank" },
            { headerKey: "note", dataKey: "CCNote" },
            { headerKey: "name", dataKey: "Name" }
          ];
        return (0, o.formatDataToCSV)([
          (0, o.formatHeader)(n),
          ((s = t),
          ((e) =>
            e.map((e) =>
              n
                .map((t) => {
                  const r = `${e[t.dataKey] ?? ""}`;
                  if ("Type" === t.dataKey) return (0, a.handleSpecialCharacter)("bank");
                  {
                    const e = `${r}`;
                    return (0, a.handleSpecialCharacter)(e);
                  }
                })
                .join(",")
            ))(s).join("\r\n")),
          ((i = r),
          ((e) =>
            e.map((e) =>
              n
                .map((t) => {
                  const r = `${e[t.dataKey] ?? ""}`;
                  if ("Type" === t.dataKey) return (0, a.handleSpecialCharacter)("payment_card");
                  if ("BankAccountName" === t.dataKey) {
                    const t = e.OwnerName;
                    return (0, a.handleSpecialCharacter)(t);
                  }
                  return (0, a.handleSpecialCharacter)(r);
                })
                .join(",")
            ))(i).join("\r\n"))
        ]);
        var i, s;
      };
    },
    57012: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getPersonalDataExport = t.getFilteredPersonalData = t.filterNonExportableData = void 0);
      const a = r(32626),
        o = r(54130),
        n = r(72365),
        i = r(65675),
        s = r(49901),
        c = r(91210),
        l = r(57989),
        d = r(40602),
        u = r(99281),
        p = r(16018),
        S = r(10770),
        m = r(80624),
        g = r(51319),
        y = r(23437),
        h = r(9774),
        v = r(26147),
        f = r(41092),
        w = r(28074),
        A = r(81904),
        P = r(75705),
        T = r(18665),
        b = r(65401),
        I = r(58235),
        C = r(81473),
        E = r(82439),
        _ = r(27147),
        D = r(40086),
        O = r(88096),
        M = "";
      t.filterNonExportableData = (e, t) => {
        const r = (0, D.isForcedDomainsEnabledSelector)(e),
          o = (0, c.limitedSharingItemsSelector)(e);
        return t.filter((e) => {
          let t = !1;
          const n = !!o[e.Id] || !!e.limitedPermissions;
          return r && (0, a.isDataModelObject)(e) && (t = e.SpaceId !== s.PERSONAL_SPACE_ID), !t && !n;
        });
      };
      const N = (e, r) => {
        const a = (0, l.quarantinedSpacesSelector)(e);
        return (0, t.filterNonExportableData)(e, (0, d.filterOutQuarantinedItems)(r(e), a));
      };
      (t.getFilteredPersonalData = (e) => ({
        addresses: N(e, u.addressesSelector),
        bankAccounts: N(e, p.bankAccountsSelector),
        collections: N(e, S.collectionsSelector),
        companies: N(e, m.companiesSelector),
        credentials: N(e, g.credentialsSelector),
        driverLicenses: N(e, h.driverLicensesSelector),
        emails: N(e, v.emailsSelector),
        fiscalIds: N(e, f.fiscalIdsSelector),
        idCards: N(e, y.idCardsSelector),
        identities: N(e, w.identitiesSelector),
        notes: N(e, P.notesSelector),
        passkeys: N(e, T.passkeysSelector),
        passports: N(e, b.passportsSelector),
        paymentCards: N(e, I.paymentCardsSelector),
        personalWebsites: N(e, C.personalWebsitesSelector),
        phones: N(e, E.phonesSelector),
        secrets: N(e, A.secretsSelector),
        socialSecurityIds: N(e, _.socialSecurityIdsSelector)
      })),
        (t.getPersonalDataExport = async function (e, r) {
          const { storeService: s } = e,
            c = s.getState(),
            { exportType: l, password: d } = r,
            u = (0, t.getFilteredPersonalData)(c);
          switch (l) {
            case "csv":
              return { success: !0, response: { filename: "dashlane-credential-export.zip", content: await (0, O.getCSVExport)(u) } };
            case "secure-dashlane": {
              if (!d) return { success: !1, error: { code: a.GetPersonalDataExportErrorMessage.UNDEFINED_PASSWORD_ERROR } };
              const e = (0, n.makeDataEncryptorService)(s),
                t = (0, i.makeFlexibleMarkerCryptoConfig)("argon2d");
              e.setInstance({ raw: d }, M, t);
              const r = Object.values(u)
                .flat()
                .map((e) => ({ ...e }));
              return {
                success: !0,
                response: { filename: "Dashlane Export.dash", content: await (0, o.getDashlaneSecureExport)(e.getInstance(), r) }
              };
            }
            default:
              return { success: !1, error: { code: a.GetPersonalDataExportErrorMessage.UNSUPPORTED_DATATYPE_ERROR } };
          }
        });
    },
    29375: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPersonalInfoExport = void 0);
      const a = r(22630),
        o = r(32626),
        n = r(33553),
        i = r(28780),
        s = (e) => {
          const { LocaleFormat: t, Number: r } = e;
          if (!!t && t !== o.Country.UNIVERSAL && t !== o.Country.NO_TYPE && (0, a.isSupportedCountry)(t)) {
            const t = o.Country[e.LocaleFormat];
            return `+${(0, a.getCountryCallingCode)(t)}${r}`;
          }
          return r;
        };
      t.getPersonalInfoExport = function (e) {
        const t = e.identities,
          r = e.emails,
          a = e.phones,
          o = e.addresses,
          c = e.companies,
          l = e.personalWebsites,
          d = [
            { headerKey: "type", dataKey: "type" },
            { headerKey: "title", dataKey: "Title" },
            { headerKey: "first_name", dataKey: "FirstName" },
            { headerKey: "middle_name", dataKey: "MiddleName" },
            { headerKey: "last_name", dataKey: "LastName" },
            { headerKey: "login", dataKey: "Pseudo" },
            { headerKey: "date_of_birth", dataKey: "BirthDate" },
            { headerKey: "place_of_birth", dataKey: "BirthPlace" },
            { headerKey: "email", dataKey: "Email" },
            { headerKey: "email_type", dataKey: "Type" },
            { headerKey: "item_name", dataKey: "Name" },
            { headerKey: "phone_number", dataKey: "Number" },
            { headerKey: "address", dataKey: "AddressFull" },
            { headerKey: "country", dataKey: "Country" },
            { headerKey: "state", dataKey: "State" },
            { headerKey: "city", dataKey: "City" },
            { headerKey: "zip", dataKey: "ZipCode" },
            { headerKey: "address_recipient", dataKey: "Receiver" },
            { headerKey: "address_building", dataKey: "Building" },
            { headerKey: "address_apartment", dataKey: "Door" },
            { headerKey: "address_floor", dataKey: "Floor" },
            { headerKey: "address_door_code", dataKey: "DigitCode" },
            { headerKey: "job_title", dataKey: "JobTitle" },
            { headerKey: "url", dataKey: "Website" }
          ];
        return (0, i.formatDataToCSV)([
          (0, i.formatHeader)(d),
          ((y = t),
          ((e) =>
            e.map((e) =>
              d
                .map((t) => {
                  const r = `${e[t.dataKey] ?? ""}`;
                  if ("type" === t.dataKey) return (0, n.handleSpecialCharacter)("name");
                  {
                    const e = `${r}`;
                    return (0, n.handleSpecialCharacter)(e);
                  }
                })
                .join(",")
            ))(y).join("\r\n")),
          ((g = r),
          ((e) =>
            e.map((e) =>
              d
                .map((t) => {
                  const r = `${e[t.dataKey] ?? ""}`;
                  if ("type" === t.dataKey) return (0, n.handleSpecialCharacter)("email");
                  if ("Type" === t.dataKey)
                    return "PERSO" === r ? (0, n.handleSpecialCharacter)("personal") : (0, n.handleSpecialCharacter)("business");
                  if ("Name" === t.dataKey) {
                    const t = e.EmailName ?? "";
                    return (0, n.handleSpecialCharacter)(t);
                  }
                  {
                    const e = `${r}`;
                    return (0, n.handleSpecialCharacter)(e);
                  }
                })
                .join(",")
            ))(g).join("\r\n")),
          ((m = a),
          ((e) =>
            e.map((e) =>
              d
                .map((t) => {
                  const r = `${e[t.dataKey] ?? ""}`;
                  if ("type" === t.dataKey) return (0, n.handleSpecialCharacter)("number");
                  if ("Type" === t.dataKey) return (0, n.handleSpecialCharacter)("");
                  if ("Name" === t.dataKey) {
                    const t = e.PhoneName ?? "";
                    return (0, n.handleSpecialCharacter)(t);
                  }
                  if ("Number" === t.dataKey) {
                    const t = s(e);
                    return (0, n.handleSpecialCharacter)(t);
                  }
                  {
                    const e = `${r}`;
                    return (0, n.handleSpecialCharacter)(e);
                  }
                })
                .join(",")
            ))(m).join("\r\n")),
          ((S = o),
          ((e) =>
            e.map((e) =>
              d
                .map((t) => {
                  const r = `${e[t.dataKey] ?? ""}`;
                  if ("type" === t.dataKey) return (0, n.handleSpecialCharacter)("address");
                  if ("Name" === t.dataKey) {
                    const t = e.AddressName ?? "";
                    return (0, n.handleSpecialCharacter)(t);
                  }
                  {
                    const e = `${r}`;
                    return (0, n.handleSpecialCharacter)(e);
                  }
                })
                .join(",")
            ))(S).join("\r\n")),
          ((p = c),
          ((e) =>
            e.map((e) =>
              d
                .map((t) => {
                  const r = `${e[t.dataKey] ?? ""}`;
                  if ("type" === t.dataKey) return (0, n.handleSpecialCharacter)("company");
                  {
                    const e = `${r}`;
                    return (0, n.handleSpecialCharacter)(e);
                  }
                })
                .join(",")
            ))(p).join("\r\n")),
          ((u = l),
          ((e) =>
            e.map((e) =>
              d
                .map((t) => {
                  const r = `${e[t.dataKey] ?? ""}`;
                  if ("type" === t.dataKey) return (0, n.handleSpecialCharacter)("website");
                  {
                    const e = `${r}`;
                    return (0, n.handleSpecialCharacter)(e);
                  }
                })
                .join(",")
            ))(u).join("\r\n"))
        ]);
        var u, p, S, m, g, y;
      };
    },
    31107: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getSecureNotesExport = void 0);
      const a = r(33553),
        o = r(28780);
      t.getSecureNotesExport = function (e) {
        const t = e.notes,
          r = [
            { headerKey: "title", dataKey: "Title" },
            { headerKey: "note", dataKey: "Content" }
          ];
        return (0, o.formatDataToCSV)([
          (0, o.formatHeader)(r),
          ((e) =>
            e
              .map((e) =>
                r
                  .map((t) => {
                    const r = e[t.dataKey] ?? "";
                    if ("Content" === t.dataKey && "" !== r) return (0, a.handleSpecialCharacter)(r);
                    {
                      const e = `${r}`;
                      return (0, a.handleSpecialCharacter)(e);
                    }
                  })
                  .join(",")
              )
              .join("\r\n"))(t)
        ]);
      };
    },
    33553: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleSpecialCharacter = void 0),
        (t.handleSpecialCharacter = function (e) {
          if (void 0 === e) return "";
          if (e.match(/[,"\n\r]/g)) {
            return ['"', ...e.split("").map((e) => ('"' === e ? '""' : e)), '"'].join("");
          }
          return e;
        });
    },
    28780: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.formatDataToCSV = t.formatHeader = void 0);
      (t.formatHeader = (e) => e.map((e) => e.headerKey).join(",")),
        (t.formatDataToCSV = function (e) {
          return e.filter((e) => e.length > 0).join("\r\n");
        });
    },
    3474: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(92598),
        o = r(47205),
        n = r(11507);
      t.config = {
        commands: { saveGeneratedPassword: { handler: o.saveGeneratedPasswordHandler } },
        queries: {
          getGeneratedPassword: { selector: a.viewedGeneratedPasswordSelector },
          getGeneratedPasswordsCount: { selector: a.countAllGeneratedPasswordsSelector },
          getGeneratedPasswords: { selector: a.viewedQueriedGeneratedPasswordsSelector },
          getGeneratedPasswordsPage: { selector: a.generatedPasswordsPageSelector },
          getGeneratedPasswordsPaginationToken: { selector: a.generatedPasswordsPaginationTokenSelector }
        },
        liveQueries: {
          liveGeneratedPasswordsCount: { operator: n.generatedPasswordCount$ },
          liveGeneratedPasswords: { operator: n.generatedPasswords$ }
        }
      };
    },
    43145: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.findAssociatedCredential = t.associateGeneratedPasswordsToCredential = void 0);
      const a = r(90073);
      (t.associateGeneratedPasswordsToCredential = function (e, t) {
        return e
          .filter((e) => !e.AuthId && e.Domain === (0, a.getDomainForCredential)(t) && e.Password === t.Password)
          .map((e) => ({ ...e, AuthId: t.Id }));
      }),
        (t.findAssociatedCredential = function (e, t) {
          if (e?.AuthId) return (t || []).find((t) => t.Id === e.AuthId);
        });
    },
    94170: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createGeneratedPassword = void 0);
      const a = r(32626),
        o = r(78320),
        n = r(53);
      t.createGeneratedPassword = ({
        Id: e = (0, o.generateItemUuid)(),
        LastBackupTime: t = 0,
        AuthId: r,
        Domain: i,
        GeneratedDate: s = (0, n.getUnixTimestamp)(),
        Password: c,
        SpaceId: l,
        Platform: d
      }) => ({
        kwType: a.DataModelType.KWGeneratedPassword,
        AuthId: r,
        Domain: i,
        GeneratedDate: s,
        Id: e,
        SpaceId: l,
        Password: c,
        LastBackupTime: t,
        Platform: d
      });
    },
    47205: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.saveGeneratedPasswordHandler = void 0);
      const a = r(44908);
      t.saveGeneratedPasswordHandler = async function (e, t) {
        const { storeService: r, sessionService: o } = e;
        return (0, a.saveGeneratedPassword)(r, o, t.password, t.url);
      };
    },
    44908: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateAndSavePassword =
          t.saveGeneratedPassword =
          t.generatePassword =
          t.fixIncoherentSettings =
          t.getDefaultPasswordGenerationSettings =
          t.passwordGeneratorDefaultSettings =
          t.associateGeneratedPasswordsToCredential =
            void 0);
      const a = r(28255),
        o = r(16516),
        n = r(85465),
        i = r(32626),
        s = r(95623),
        c = r(78320),
        l = r(53),
        d = r(48313),
        u = r(70252),
        p = r(94170),
        S = r(56915);
      var m = r(43145);
      function g(e) {
        const r = (0, o.reject)((e) => (0, o.isNil)(e) || (0, o.isEmpty)(e))({
          length: e.GeneratorDefaultSize,
          digits: e.GeneratorDefaultDigits,
          letters: e.GeneratorDefaultLetters,
          symbols: e.GeneratorDefaultSymbols,
          avoidAmbiguous: e.GeneratorDefaultAvoidAmbiguousChars
        });
        return y((0, o.merge)(t.passwordGeneratorDefaultSettings, r));
      }
      function y(e) {
        return (
          e.digits || e.letters || e.symbols || ((e.digits = !0), (e.letters = !0), (e.symbols = !0)),
          (void 0 === e.length || e.length < 1) && (e.length = t.passwordGeneratorDefaultSettings.length),
          e
        );
      }
      function h(e, t) {
        const r = (0, o.isNil)(t) ? g(e) : y(t);
        if (!r.digits && !r.letters && r.symbols) {
          const a = new Error("Should not generate password from symbols only"),
            o = {
              length: e.GeneratorDefaultSize,
              digits: e.GeneratorDefaultDigits,
              letters: e.GeneratorDefaultLetters,
              symbols: e.GeneratorDefaultSymbols,
              avoidAmbiguous: e.GeneratorDefaultAvoidAmbiguousChars
            },
            n = `customSettings = ${JSON.stringify(t)}\npersonalSettingsGeneratorDefaults = ${JSON.stringify(o)}`;
          s.default.error(a),
            (0, u.sendExceptionLog)({ error: a, code: i.ExceptionCriticality.WARNING, precisions: n }),
            (r.digits = !0),
            (r.letters = !0),
            (r.symbols = !0);
        }
        return (0, n.generate)(r);
      }
      function v(e, t, r, a) {
        const o = (0, p.createGeneratedPassword)({
          Domain: a ?? "",
          GeneratedDate: (0, l.getUnixTimestamp)(),
          Id: (0, c.generateItemUuid)(),
          Password: r,
          LastBackupTime: 0,
          Platform: (0, S.platformInfoSelector)(e.getState()).platformName
        });
        e.dispatch(d.saveGeneratedPassword(o)), t.getInstance().user.persistPersonalData();
      }
      Object.defineProperty(t, "associateGeneratedPasswordsToCredential", {
        enumerable: !0,
        get: function () {
          return m.associateGeneratedPasswordsToCredential;
        }
      }),
        (t.passwordGeneratorDefaultSettings = { length: 16, digits: !0, letters: !0, symbols: !0, avoidAmbiguous: !0 }),
        (t.getDefaultPasswordGenerationSettings = g),
        (t.fixIncoherentSettings = y),
        (t.generatePassword = h),
        (t.saveGeneratedPassword = v),
        (t.generateAndSavePassword = function (e, t, r) {
          if (!e.isAuthenticated()) return s.default.log("No session available to generateAndSavePassword"), null;
          const o = h(e.getPersonalSettings());
          return (
            a(() => {
              v(e, t, o, r);
            }),
            o
          );
        });
    },
    11507: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.generatedPasswords$ = t.generatedPasswordCount$ = void 0);
      const a = r(92598),
        o = r(55220),
        n = r(18948),
        i = r(3343);
      (t.generatedPasswordCount$ = () => (0, n.pipe)((0, i.map)(a.countAllGeneratedPasswordsSelector), (0, i.distinctUntilChanged)())),
        (t.generatedPasswords$ = (0, o.getLivePersonalInfo)(a.getLiveGeneratedPasswordsSelector));
    },
    91329: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getGeneratedPasswordMappers = void 0);
      t.getGeneratedPasswordMappers = () => ({ id: (e) => e.Id, domain: (e) => e.Domain, generatedDate: (e) => e.GeneratedDate });
    },
    45853: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.viewGeneratedPasswordsBatch =
          t.getGeneratedPasswordsFirstToken =
          t.getGeneratedPasswordsSortToken =
          t.getGeneratedPasswordsFilterToken =
            void 0);
      const a = r(20553),
        o = r(36407);
      t.getGeneratedPasswordsFilterToken = ({ filterCriteria: e }) => ({ filterCriteria: e || [] });
      t.getGeneratedPasswordsSortToken = ({ sortCriteria: e }) => ({ uniqField: "id", sortCriteria: e || [] });
      t.getGeneratedPasswordsFirstToken = (e, t, r, o) => (0, a.generateFirstToken)(e, t, r.initialBatchSize || 30, o);
      t.viewGeneratedPasswordsBatch = (e) => (0, o.listView)(e);
    },
    9546: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.generatedPasswordMatch = t.searchGetters = void 0);
      const a = r(82234),
        o = r(64455);
      (t.searchGetters = [(0, a.stringProp)("Domain")]), (t.generatedPasswordMatch = (0, o.match)(t.searchGetters));
    },
    92598: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generatedPasswordsQuerySelector =
          t.generatedPasswordsPaginationTokenSelector =
          t.generatedPasswordsPageSelector =
          t.getLiveGeneratedPasswordsSelector =
          t.viewedQueriedGeneratedPasswordsSelector =
          t.queryGeneratedPasswordsSelector =
          t.getGeneratedPasswordMappersSelector =
          t.generatedPasswordMappersSelector =
          t.viewedGeneratedPasswordSelector =
          t.generatedPasswordSelector =
          t.generatedPasswordsSelector =
          t.countAllGeneratedPasswordsSelector =
            void 0);
      const a = r(16516),
        o = r(63566),
        n = r(36407),
        i = r(24589),
        s = r(9546),
        c = r(91329),
        l = r(45853),
        d = r(32034),
        u = r(35893),
        p = r(18948),
        S = r(20553),
        m = r(57989),
        g = r(97006),
        y = r(40602),
        h = r(83659),
        v = r(49551);
      (t.countAllGeneratedPasswordsSelector = (e) => e.userSession.personalData.generatedPasswords.length),
        (t.generatedPasswordsSelector = (0, d.createSelector)(
          (e) => e.userSession.personalData.generatedPasswords,
          m.quarantinedSpacesSelector,
          h.unsafeAllCredentialsSelector,
          y.filterOutQuarantinedItems
        ));
      t.generatedPasswordSelector = (e, r) => {
        const a = (0, t.generatedPasswordsSelector)(e);
        return (0, v.findDataModelObject)(r, a);
      };
      t.viewedGeneratedPasswordSelector = (e, r) => {
        const a = (0, t.generatedPasswordSelector)(e, r);
        return (0, n.itemView)(a);
      };
      t.generatedPasswordMappersSelector = (e) => (0, c.getGeneratedPasswordMappers)();
      const f = () => s.generatedPasswordMatch,
        w = (0, c.getGeneratedPasswordMappers)();
      (t.getGeneratedPasswordMappersSelector = () => w),
        (t.queryGeneratedPasswordsSelector = (0, i.getQuerySelector)(t.generatedPasswordsSelector, f, t.generatedPasswordMappersSelector)),
        (t.viewedQueriedGeneratedPasswordsSelector = (0, a.compose)((0, o.viewListResults)(n.listView), t.queryGeneratedPasswordsSelector)),
        (t.getLiveGeneratedPasswordsSelector = (0, g.makeLiveSelectorGetter)(
          t.generatedPasswordsSelector,
          () => n.listView,
          f,
          t.getGeneratedPasswordMappersSelector
        ));
      t.generatedPasswordsPageSelector = (e, r) => {
        const a = (0, u.parseToken)(r),
          { sortToken: o, filterToken: n } = a,
          i = { sortToken: o, filterToken: n },
          s = (0, c.getGeneratedPasswordMappers)(),
          d = (0, t.generatedPasswordsQuerySelector)(e, i),
          p = (0, S.generateNextToken)(s, a, d),
          m = (0, S.generatePrevToken)(s, a, d),
          g = (0, S.getBatch)(s, a, d),
          y = (0, u.stringifyToken)(p),
          h = (0, u.stringifyToken)(m);
        return { batch: (0, l.viewGeneratedPasswordsBatch)(g), nextToken: y, prevToken: h };
      };
      t.generatedPasswordsPaginationTokenSelector = (e, r) => {
        const a = (0, l.getGeneratedPasswordsSortToken)(r),
          o = (0, l.getGeneratedPasswordsFilterToken)(r),
          n = (0, c.getGeneratedPasswordMappers)(),
          i = { sortToken: a, filterToken: o },
          s = (0, t.generatedPasswordsQuerySelector)(e, i),
          d = (0, l.getGeneratedPasswordsFirstToken)(n, i, r, s);
        return (0, u.stringifyToken)(d);
      };
      const A = (0, u.createOptimizedSortTokenSelector)((e, { sortToken: t }) => t, p.identity),
        P = (0, u.createOptimizedFilterTokenSelector)((e, { filterToken: t }) => t, p.identity);
      t.generatedPasswordsQuerySelector = (0, d.createSelector)(
        c.getGeneratedPasswordMappers,
        f,
        A,
        P,
        t.generatedPasswordsSelector,
        u.queryData
      );
    },
    36407: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = void 0);
      const a = (0, r(16516).defaultTo)("");
      t.itemView = (e) => ({ domain: a(e.Domain), generatedDate: e.GeneratedDate, password: e.Password, id: e.Id, platform: e.Platform });
      t.listView = (e) => e.map(t.itemView);
    },
    64185: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeEmptyIconUrls = t.computeIconUrls = void 0);
      t.computeIconUrls = (e, t) =>
        t.reduce((t, r) => {
          const a = e.find((e) => e && e.type === r);
          return (t[r] = a ? a.url : null), t;
        }, {});
      t.makeEmptyIconUrls = (e) => (0, t.computeIconUrls)([], e);
    },
    56814: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getFormattedDomainsFromUrls = t.decryptIconsDomains = void 0);
      const a = r(16516),
        o = r(21178),
        n = r(46445);
      t.decryptIconsDomains = (e, t) => {
        const r = Array.from(e.keys()),
          a = new Map(),
          o = t.reduce((e, t) => ((e[(0, n.computeHashMD5)(t)] = t), e), {});
        return (
          r.forEach((t) => {
            const r = o[t];
            a.set(r, e.get(t));
          }),
          a
        );
      };
      t.getFormattedDomainsFromUrls = (e) =>
        (0, a.uniq)(e.map((e) => new o.ParsedURL(e).getRootDomain())).filter((e) => "string" == typeof e && e.length);
    },
    44999: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.clearInstance = t.getInstance = t.setInstance = void 0);
      const a = r(35949),
        o = r(23381);
      let n = null;
      t.setInstance = (e, t, r) => ((n = n || new a.IconsUpdater(t, e, new o.IconsWS(r))), n);
      t.getInstance = () => n;
      t.clearInstance = () => {
        n && n.teardown(), (n = null);
      };
    },
    35949: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.IconsUpdater = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(35088),
        i = r(21342),
        s = r(19736),
        c = r(51319),
        l = r(95623),
        d = r(91892),
        u = r(16661),
        p = r(17825),
        S = r(19979),
        m = r(70252),
        g = r(541),
        y = r(58639),
        h = r(21726),
        v = r(41717);
      var f;
      !(function (e) {
        (e.BreachesOperation = "breachesOperation"),
          (e.CredentialsOperation = "credentialsOperation"),
          (e.RefreshOperation = "refreshOperation");
      })(f || (f = {}));
      t.IconsUpdater = class {
        constructor(e, t, r) {
          (this.localStorageService = e),
            (this.storeService = t),
            (this.gateway = r),
            (this._operation$ = new a.Subject()),
            (this.subs = new Set()),
            (this.handleRefreshIcons = async () => {
              const e = (0, n.v4)(),
                t = new Promise((t) => {
                  const r = this._operationResults$.subscribe((a) => {
                    a.id === e && (t(a.success), r.unsubscribe(), this.subs.delete(r));
                  });
                  this.subs.add(r);
                });
              return this.triggerRefreshOperation(e), await t;
            }),
            (this.handleCredentialUpdates = async (e) => {
              const t = (0, n.v4)(),
                r = new Promise((e) => {
                  const r = this._operationResults$.subscribe((a) => {
                    a.id === t && (e(a.success), r.unsubscribe(), this.subs.delete(r));
                  });
                  this.subs.add(r);
                });
              return this.triggerCredentialsOperation(t, e), await r;
            }),
            (this.handleBreachesUpdates = async (e) => {
              const t = (0, n.v4)(),
                r = new Promise((e) => {
                  const r = this._operationResults$.subscribe((a) => {
                    a.id === t && (e(a.success), r.unsubscribe(), this.subs.delete(r));
                  });
                  this.subs.add(r);
                });
              return this.triggerBreachesOperation(t, e), await r;
            }),
            (this.triggerCredentialsOperation = (e, t, r = v.defaultIconTypes) => {
              this._operation$.next({ credentialIds: t, id: e, type: f.CredentialsOperation, iconTypes: r });
            }),
            (this.triggerBreachesOperation = (e, t, r = v.defaultIconTypes) => {
              this._operation$.next({ breachesIds: t, id: e, type: f.BreachesOperation, iconTypes: r });
            }),
            (this.triggerRefreshOperation = (e, t = v.defaultIconTypes) => {
              this._operation$.next({ id: e, type: f.RefreshOperation, iconTypes: t });
            }),
            (this.handleOperation = async (e, t) => {
              const { type: r, id: a } = t,
                o = { id: a, type: r },
                n = this.localStorageService.getInstance(),
                i = this.storeService.getState();
              try {
                return await e(t), await n.storeIcons((0, d.iconsCacheSelector)(i)), { ...o, success: !0 };
              } catch (e) {
                const r = `[Icons Updater] - handle operation: operation ${t.type} failed with ${e}`;
                l.default.error(r);
                const a = new Error(r);
                return (0, m.sendExceptionLog)({ error: a }), console.error(a), { ...o, success: !1 };
              }
            }),
            (this.onOperation = async (e) => {
              switch (e.type) {
                case f.CredentialsOperation:
                  return this.handleOperation(
                    (
                      (e, t) =>
                      async ({ credentialIds: r, iconTypes: a }) => {
                        const o = e.getState(),
                          n = r.map((e) => (0, s.credentialSelector)(o, e)).filter((e) => !!e),
                          i = await (0, S.fetchIconsForCredentials)(o, t, n, a);
                        e.dispatch((0, u.iconsUpdated)(i)), (0, h.default)() && i.length > 0 && (0, y.reportDataUpdate)(e);
                      }
                    )(this.storeService, this.gateway),
                    e
                  );
                case f.BreachesOperation:
                  return this.handleOperation(
                    (
                      (e, t) =>
                      async ({ breachesIds: r, iconTypes: a }) => {
                        const o = e.getState(),
                          n = r.map((e) => (0, i.breachSelector)(o, e)).filter((e) => !!e),
                          s = await (0, S.fetchIconsForBreaches)(o, t, n, a);
                        e.dispatch((0, u.iconsUpdated)(s));
                      }
                    )(this.storeService, this.gateway),
                    e
                  );
                case f.RefreshOperation:
                  return this.handleOperation(
                    (
                      (e, t) =>
                      async ({ iconTypes: r }) => {
                        const a = e.getState(),
                          o = (0, d.iconsCacheSelector)(a);
                        if ((0, g.isIconsCacheValid)(o)) return;
                        const n = (0, c.credentialsSelector)(a),
                          s = (0, i.breachesSelector)(a),
                          l = await (0, S.fetchIconsForAllItems)(t, n, s, r);
                        e.dispatch((0, u.iconsRefreshed)(l)), (0, h.default)() && (0, y.reportDataUpdate)(e);
                      }
                    )(this.storeService, this.gateway),
                    e
                  );
                default:
                  return (0, p.assertUnreachable)(e);
              }
            }),
            (this.setupOperationsHandling = () => {
              const e = this._operation$.pipe((0, o.concatMap)(this.onOperation), (0, o.share)()),
                t = e.subscribe();
              this.subs.add(t), (this._operationResults$ = e);
            }),
            this.setupOperationsHandling();
        }
        teardown() {
          this.subs.forEach((e) => e.unsubscribe());
        }
      };
    },
    541: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isIconsCacheValid = void 0);
      const a = r(53),
        o = 86400 * (7 + Math.random());
      t.isIconsCacheValid = (e) => !(!e || !e.lastUpdateTimeSeconds) && (0, a.getUnixTimestamp)() - e.lastUpdateTimeSeconds < o;
    },
    41717: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultIconTypes = void 0),
        (t.defaultIconTypes = ["46x30@2x", "160x106@2x", "118x98@2x"]);
    },
    19979: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fetchIconsForAllItems =
          t.fetchIconsForCredentials =
          t.getCredentialsWithWebsiteIcon =
          t.fetchIconsForBreaches =
          t.getIconsUrlsForBreaches =
          t.getIconsUrlsForCredentials =
            void 0);
      const a = r(16516),
        o = r(21178),
        n = r(56814),
        i = r(91892),
        s = r(64185);
      t.getIconsUrlsForCredentials = (e) => e.map((e) => e.Url);
      t.getIconsUrlsForBreaches = (e) =>
        e.reduce((e, t) => {
          const r = t.Content.domains;
          return r && 0 !== r.length ? [...e, r[0]] : e;
        }, []);
      t.fetchIconsForBreaches = async (e, r, o, s) => {
        const c = (0, t.getIconsUrlsForBreaches)(o),
          l = (0, n.getFormattedDomainsFromUrls)(c),
          d = (0, n.decryptIconsDomains)((0, i.iconsSelector)(e), l),
          u = Array.from(d.keys()),
          p = (0, a.difference)(l, u);
        return r.getIcons(p, s);
      };
      t.getCredentialsWithWebsiteIcon = (e, t, r) => {
        const n = { backgroundColor: null, mainColor: null, urls: (0, s.makeEmptyIconUrls)(r) };
        return e.map((e) => {
          const r = t.get(new o.ParsedURL(e.Url).getRootDomain()),
            i = (0, a.defaultTo)(n, r);
          return { ...e, domainIcon: i };
        });
      };
      t.fetchIconsForCredentials = async (e, r, o, s) => {
        const c = (0, t.getIconsUrlsForCredentials)(o),
          l = (0, n.getFormattedDomainsFromUrls)(c),
          d = (0, n.decryptIconsDomains)((0, i.iconsSelector)(e), l),
          u = Array.from(d.keys()),
          p = (0, a.difference)(l, u);
        return r.getIcons(p, s);
      };
      t.fetchIconsForAllItems = async (e, r, a, o) => {
        const i = [...(0, t.getIconsUrlsForBreaches)(a), ...(0, t.getIconsUrlsForCredentials)(r)],
          s = (0, n.getFormattedDomainsFromUrls)(i);
        return e.getIcons(s, o);
      };
    },
    49352: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.iconsUpdatesHook = void 0);
      const a = r(17825),
        o = r(44999);
      t.iconsUpdatesHook = async (e) => {
        const t = (0, o.getInstance)();
        if (!t) return !1;
        switch (e.type) {
          case "breachUpdates":
            return t.handleBreachesUpdates(e.breachesIds);
          case "credentialUpdates":
            return t.handleCredentialUpdates(e.credentialIds);
          case "refresh":
            return t.handleRefreshIcons();
          default:
            return (0, a.assertUnreachable)(e);
        }
      };
    },
    44816: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatFetchedIcons = t.makeIconDataWithDomain = t.getDomainsIconsToBeFetched = t.getDomainIconsToBeFetched = void 0);
      const a = r(16516),
        o = r(64185),
        n = (0, a.defaultTo)(null);
      t.getDomainIconsToBeFetched = (e, t) => t.reduce((t, r) => [...t, { domain: e, type: r }], []);
      t.getDomainsIconsToBeFetched = (e, r) => e.reduce((e, a) => [...e, ...(0, t.getDomainIconsToBeFetched)(a, r)], []);
      t.makeIconDataWithDomain = (e, t) => {
        const r = (0, a.head)(e) || {};
        return {
          urls: (0, o.computeIconUrls)(e, t),
          backgroundColor: n(r.backgroundColor),
          mainColor: n(r.mainColor),
          domain: n(r.domain)
        };
      };
      t.formatFetchedIcons = (e, r, a) => {
        const o = r.length;
        return [...Array(a)].reduce((a, n, i) => {
          const s = i * o,
            c = s + o,
            l = e.slice(s, c);
          return [...a, (0, t.makeIconDataWithDomain)(l, r)];
        }, []);
      };
    },
    23381: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.IconsWS = void 0);
      const a = r(44816),
        o = r(32607);
      t.IconsWS = class {
        constructor(e) {
          this.wsService = e;
        }
        async getIcons(e, t) {
          if (!e || !e.length) return [];
          const r = (0, a.getDomainsIconsToBeFetched)(e, t),
            n = await this.wsService.iconCrawler.getIcons(r);
          if (!(0, o.isWSResponseSuccess)(n)) {
            const e = `[Icons] getIcons: ${n.message}(statusCode: ${n.code})`;
            throw new Error(e);
          }
          const { content: i } = n;
          return (0, a.formatFetchedIcons)(i, t, e.length);
        }
      };
    },
    90451: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getIcon = void 0);
      const a = r(21178),
        o = r(46445);
      t.getIcon = (e) => (t) => {
        const r = new a.ParsedURL(t).getRootDomain();
        if (!r) return;
        const n = (0, o.computeHashMD5)(r);
        return e.get(n);
      };
    },
    91892: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.iconsSelector = t.iconsCacheSelector = void 0);
      t.iconsCacheSelector = (e) => e.userSession.iconsCache;
      t.iconsSelector = (e) => (0, t.iconsCacheSelector)(e).domains;
    },
    8566: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const a = r(12362),
        o = r(86691),
        n = async () => {
          const e = (0, a.getInstance)(),
            t = (0, o.getInstance)(),
            r = t.lockTopic("iconsUpdates");
          await e.add("iconsUpdates", { type: "refresh" }), t.releaseTopic("iconsUpdates", r);
        };
      t.setupSubscriptions = async function (e, t) {
        e.syncSuccess.on(async () => {
          await n();
        }),
          e.syncFailure.on(async () => {
            await n();
          });
      };
    },
    13648: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(9774),
        o = r(53795),
        n = r(8302);
      t.config = {
        commands: {
          addDriverLicense: { handler: n.addDriverLicenseHandler },
          editDriverLicense: { handler: n.editDriverLicenseHandler },
          deleteDriverLicense: { handler: n.deleteDriverLicenseHandler }
        },
        queries: {
          getDriverLicense: { selector: a.viewedDriverLicenseSelector },
          getDriverLicenses: { selector: a.viewedQueriedDriverLicensesSelector }
        },
        liveQueries: { liveDriverLicense: { operator: o.getDriverLicense$ }, liveDriverLicenses: { operator: o.driverLicenses$ } }
      };
    },
    60445: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addDriverLicenseHandler = void 0);
      const a = r(32626),
        o = r(72099),
        n = r(58452),
        i = ({ expirationDate: e, idNumber: t, issueDate: r, name: n, state: i }) => ({
          DateOfBirth: "",
          DeliveryDate: (0, o.viewDateToVaultDate)(r),
          ExpireDate: (0, o.viewDateToVaultDate)(e),
          Fullname: n ?? "",
          LinkedIdentity: "",
          Number: t ?? "",
          kwType: a.DataModelType.KWDriverLicence,
          State: i ?? "",
          Sex: ""
        });
      t.addDriverLicenseHandler = (e, t) => (0, n.addIdHandler)(e, t, i);
    },
    38681: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteDriverLicenseHandler = void 0);
      const a = r(9979),
        o = r(9774);
      t.deleteDriverLicenseHandler = (e, t) => (0, a.deleteIdHandler)(e, t, o.driverLicenseSelector);
    },
    63589: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.editDriverLicenseHandler = t.handleDriverLicenseFields = void 0);
      const a = r(9774),
        o = r(72099),
        n = r(22388);
      t.handleDriverLicenseFields = (e, t) => ({
        DeliveryDate: void 0 === e.issueDate ? t.DeliveryDate : (0, o.viewDateToVaultDate)(e.issueDate),
        ExpireDate: void 0 === e.expirationDate ? t.ExpireDate : (0, o.viewDateToVaultDate)(e.expirationDate),
        Fullname: e.name ?? t.Fullname,
        Number: e.idNumber ?? t.Number,
        State: e.state ?? t.State,
        LinkedIdentity: void 0 === e.name ? t.LinkedIdentity : "",
        Attachments: void 0 === e.attachments ? t.Attachments : e.attachments
      });
      t.editDriverLicenseHandler = (e, r) => (0, n.updateIdHandler)(e, r, t.handleDriverLicenseFields, a.driverLicenseSelector);
    },
    8302: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(60445), t), o(r(63589), t), o(r(38681), t);
    },
    53795: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDriverLicense$ = t.driverLicenses$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(9774);
      t.driverLicenses$ = (0, n.getLivePersonalInfo)(i.getLiveDriverLicensesSelector);
      t.getDriverLicense$ = (e) => {
        const t = (0, i.getViewedDriverLicenseSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    91019: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDriverLicenseMappers = void 0);
      const a = r(83539),
        o = r(72099);
      t.getDriverLicenseMappers = () => ({
        spaceId: (e) => e.SpaceId,
        name: (e) => (0, o.identityToName)(e.identity) || e.Fullname,
        idNumber: (e) => e.Number,
        lastUse: a.lastUseMapper,
        id: (e) => e.Id,
        creationDate: (e) => e.CreationDatetime
      });
    },
    50317: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.driverLicenseMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234),
        n = r(72099);
      (t.searchGetters = [(0, o.stringProp)("Number"), (e) => (0, n.identityToName)(e.identity) || e.Fullname]),
        (t.driverLicenseMatch = (0, a.match)(t.searchGetters));
    },
    9774: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedDriverLicenseSelector =
          t.viewedDriverLicenseSelector =
          t.getLiveDriverLicensesSelector =
          t.viewedQueriedDriverLicensesSelector =
          t.queryDriverLicensesSelector =
          t.driverLicenseWithIdentitySelector =
          t.driverLicensesWithIdentitySelector =
          t.driverLicenseMappersSelector =
          t.driverLicenseSelector =
          t.driverLicensesSelector =
            void 0);
      const a = r(16516),
        o = r(32034),
        n = r(50317),
        i = r(53506),
        s = r(24589),
        c = r(63566),
        l = r(97006),
        d = r(49551),
        u = r(91019),
        p = r(28074),
        S = r(40602),
        m = r(57989);
      t.driverLicensesSelector = (0, o.createSelector)(
        (e) => e.userSession.personalData.driverLicenses,
        m.quarantinedSpacesSelector,
        S.filterOutQuarantinedItems
      );
      t.driverLicenseSelector = (e, r) => {
        const a = (0, t.driverLicensesSelector)(e);
        return (0, d.findDataModelObject)(r, a);
      };
      (t.driverLicenseMappersSelector = (e) => (0, u.getDriverLicenseMappers)()),
        (t.driverLicensesWithIdentitySelector = (0, o.createSelector)([t.driverLicensesSelector, p.identitiesByIdSelector], (e, t) =>
          e.map((e) => ({ ...e, identity: t[e.LinkedIdentity] }))
        )),
        (t.driverLicenseWithIdentitySelector = (0, o.createSelector)(
          [t.driverLicenseSelector, (e) => (0, p.identitiesByIdSelector)(e)],
          (e, t) => ({ ...e, identity: t[e.LinkedIdentity] })
        ));
      const g = () => n.driverLicenseMatch;
      (t.queryDriverLicensesSelector = (0, s.getQuerySelector)(t.driverLicensesWithIdentitySelector, g, t.driverLicenseMappersSelector)),
        (t.viewedQueriedDriverLicensesSelector = (0, a.compose)((0, c.viewListResults)(i.listView), t.queryDriverLicensesSelector)),
        (t.getLiveDriverLicensesSelector = (0, l.makeLiveSelectorGetter)(
          t.driverLicensesWithIdentitySelector,
          () => i.listView,
          g,
          t.driverLicenseMappersSelector
        ));
      t.viewedDriverLicenseSelector = (e, r) => {
        const a = (0, t.driverLicenseWithIdentitySelector)(e, r);
        return (0, i.maybeDetailView)(a);
      };
      t.getViewedDriverLicenseSelector = (e) => {
        const r = (0, o.createSelector)(t.driverLicensesSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, o.createSelector)(r, p.identitiesSelector, (e, t) =>
          (0, i.maybeDetailView)({ ...e, identity: (0, d.findDataModelObject)(e.LinkedIdentity, t) })
        );
      };
    },
    53506: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(82043),
        o = r(72099),
        n = ({ DeliveryDate: e, ExpireDate: t, Fullname: r, LocaleFormat: a, Number: n, State: i, CreationDatetime: s, identity: c }) => ({
          country: (0, o.vaultCountryToViewCountry)(a),
          expirationDate: (0, o.vaultDateToViewDate)(t),
          idNumber: n ?? "",
          issueDate: (0, o.vaultDateToViewDate)(e),
          name: (0, o.identityToName)(c) || r || "",
          state: i ?? "",
          creationDate: s ?? 0
        });
      (t.detailView = (e) => ({ ...(0, a.dataModelDetailView)(e), ...n(e) })),
        (t.maybeDetailView = (0, a.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({ ...(0, a.dataModelItemView)(e), ...n(e) });
      t.listView = (e) => e.map(t.itemView);
    },
    15141: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(41092),
        o = r(53076),
        n = r(32813);
      t.config = {
        commands: {
          addFiscalId: { handler: n.addFiscalIdHandler },
          editFiscalId: { handler: n.editFiscalIdHandler },
          deleteFiscalId: { handler: n.deleteFiscalIdHandler }
        },
        queries: { getFiscalId: { selector: a.viewedFiscalIdSelector }, getFiscalIds: { selector: a.viewedQueriedFiscalIdsSelector } },
        liveQueries: { liveFiscalId: { operator: o.getFiscalId$ }, liveFiscalIds: { operator: o.fiscalIds$ } }
      };
    },
    46033: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addFiscalIdHandler = void 0);
      const a = r(32626),
        o = r(58452),
        n = ({ idNumber: e, teledeclarantNumber: t }) => ({
          FiscalNumber: e ?? "",
          kwType: a.DataModelType.KWFiscalStatement,
          TeledeclarantNumber: t ?? ""
        });
      t.addFiscalIdHandler = (e, t) => (0, o.addIdHandler)(e, t, n);
    },
    98167: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteFiscalIdHandler = void 0);
      const a = r(9979),
        o = r(41092);
      t.deleteFiscalIdHandler = (e, t) => (0, a.deleteIdHandler)(e, t, o.fiscalIdSelector);
    },
    9175: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.editFiscalIdHandler = t.handleFiscalIdFields = void 0);
      const a = r(41092),
        o = r(22388);
      t.handleFiscalIdFields = (e, t) => ({
        FiscalNumber: e.idNumber ?? t.FiscalNumber,
        TeledeclarantNumber: e.teledeclarantNumber ?? t.TeledeclarantNumber,
        Attachments: void 0 === e.attachments ? t.Attachments : e.attachments
      });
      t.editFiscalIdHandler = (e, r) => (0, o.updateIdHandler)(e, r, t.handleFiscalIdFields, a.fiscalIdSelector);
    },
    32813: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(46033), t), o(r(9175), t), o(r(98167), t);
    },
    53076: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getFiscalId$ = t.fiscalIds$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(41092);
      t.fiscalIds$ = (0, n.getLivePersonalInfo)(i.getLiveFiscalIdsSelector);
      t.getFiscalId$ = (e) => {
        const t = (0, i.getViewedFiscalIdSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    42143: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getFiscalIdMappers = void 0);
      const a = r(83539);
      t.getFiscalIdMappers = () => ({
        spaceId: (e) => e.SpaceId,
        idNumber: (e) => e.FiscalNumber,
        teledeclarantNumber: (e) => e.TeledeclarantNumber,
        lastUse: a.lastUseMapper,
        id: (e) => e.Id,
        creationDate: (e) => e.CreationDatetime
      });
    },
    91341: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.fiscalIdMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234);
      (t.searchGetters = [(0, o.stringProp)("FiscalNumber"), (0, o.stringProp)("TeledeclarantNumber")]),
        (t.fiscalIdMatch = (0, a.match)(t.searchGetters));
    },
    41092: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedFiscalIdSelector =
          t.viewedFiscalIdSelector =
          t.getLiveFiscalIdsSelector =
          t.viewedQueriedFiscalIdsSelector =
          t.queryFiscalIdsSelector =
          t.fiscalIdMappersSelector =
          t.fiscalIdSelector =
          t.fiscalIdsSelector =
            void 0);
      const a = r(16516),
        o = r(32034),
        n = r(91341),
        i = r(22127),
        s = r(24589),
        c = r(63566),
        l = r(97006),
        d = r(49551),
        u = r(42143),
        p = r(40602),
        S = r(57989);
      t.fiscalIdsSelector = (0, o.createSelector)(
        (e) => e.userSession.personalData.fiscalIds,
        S.quarantinedSpacesSelector,
        p.filterOutQuarantinedItems
      );
      t.fiscalIdSelector = (e, r) => {
        const a = (0, t.fiscalIdsSelector)(e);
        return (0, d.findDataModelObject)(r, a);
      };
      t.fiscalIdMappersSelector = (e) => (0, u.getFiscalIdMappers)();
      const m = () => n.fiscalIdMatch;
      (t.queryFiscalIdsSelector = (0, s.getQuerySelector)(t.fiscalIdsSelector, m, t.fiscalIdMappersSelector)),
        (t.viewedQueriedFiscalIdsSelector = (0, a.compose)((0, c.viewListResults)(i.listView), t.queryFiscalIdsSelector)),
        (t.getLiveFiscalIdsSelector = (0, l.makeLiveSelectorGetter)(t.fiscalIdsSelector, () => i.listView, m, t.fiscalIdMappersSelector));
      t.viewedFiscalIdSelector = (e, r) => {
        const a = (0, t.fiscalIdSelector)(e, r);
        return (0, i.maybeDetailView)(a);
      };
      t.getViewedFiscalIdSelector = (e) => {
        const r = (0, o.createSelector)(t.fiscalIdsSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, o.createSelector)(r, i.maybeDetailView);
      };
    },
    22127: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(82043),
        o = r(72099),
        n = ({ FiscalNumber: e, TeledeclarantNumber: t, LocaleFormat: r, CreationDatetime: a }) => ({
          country: (0, o.vaultCountryToViewCountry)(r),
          idNumber: e ?? "",
          teledeclarantNumber: t ?? "",
          creationDate: a ?? 0
        });
      (t.detailView = (e) => ({ ...(0, a.dataModelDetailView)(e), ...n(e) })),
        (t.maybeDetailView = (0, a.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({ ...(0, a.dataModelItemView)(e), ...n(e) });
      t.listView = (e) => e.map(t.itemView);
    },
    2282: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(23437),
        o = r(77849),
        n = r(17607);
      t.config = {
        commands: {
          addIdCard: { handler: n.addIdCardHandler },
          editIdCard: { handler: n.editIdCardHandler },
          deleteIdCard: { handler: n.deleteIdCardHandler }
        },
        queries: { getIdCard: { selector: a.viewedIdCardSelector }, getIdCards: { selector: a.viewedQueriedIdCardsSelector } },
        liveQueries: { liveIdCard: { operator: o.getIdCard$ }, liveIdCards: { operator: o.idCards$ } }
      };
    },
    38052: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addIdCardHandler = void 0);
      const a = r(32626),
        o = r(72099),
        n = r(58452),
        i = ({ expirationDate: e, idNumber: t, issueDate: r, name: n }) => ({
          DateOfBirth: "",
          DeliveryDate: (0, o.viewDateToVaultDate)(r),
          ExpireDate: (0, o.viewDateToVaultDate)(e),
          Fullname: n ?? "",
          LinkedIdentity: "",
          Number: t ?? "",
          kwType: a.DataModelType.KWIDCard,
          Sex: ""
        });
      t.addIdCardHandler = (e, t) => (0, n.addIdHandler)(e, t, i);
    },
    19922: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteIdCardHandler = void 0);
      const a = r(9979),
        o = r(23437);
      t.deleteIdCardHandler = (e, t) => (0, a.deleteIdHandler)(e, t, o.idCardSelector);
    },
    84260: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.editIdCardHandler = t.handleIdCardFields = void 0);
      const a = r(23437),
        o = r(72099),
        n = r(22388);
      t.handleIdCardFields = (e, t) => ({
        DeliveryDate: void 0 === e.issueDate ? t.DeliveryDate : (0, o.viewDateToVaultDate)(e.issueDate),
        ExpireDate: void 0 === e.expirationDate ? t.ExpireDate : (0, o.viewDateToVaultDate)(e.expirationDate),
        Fullname: e.name ?? t.Fullname,
        Number: e.idNumber ?? t.Number,
        LinkedIdentity: void 0 === e.name ? t.LinkedIdentity : "",
        Attachments: void 0 === e.attachments ? t.Attachments : e.attachments
      });
      t.editIdCardHandler = (e, r) => (0, n.updateIdHandler)(e, r, t.handleIdCardFields, a.idCardSelector);
    },
    17607: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(38052), t), o(r(84260), t), o(r(19922), t);
    },
    77849: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getIdCard$ = t.idCards$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(23437);
      t.idCards$ = (0, n.getLivePersonalInfo)(i.getLiveIdCardsSelector);
      t.getIdCard$ = (e) => {
        const t = (0, i.getViewedIdCardSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    75455: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getIdCardMappers = void 0);
      const a = r(83539),
        o = r(72099);
      t.getIdCardMappers = () => ({
        spaceId: (e) => e.SpaceId,
        name: (e) => (0, o.identityToName)(e.identity) || e.Fullname,
        idNumber: (e) => e.Number,
        lastUse: a.lastUseMapper,
        id: (e) => e.Id,
        creationDate: (e) => e.CreationDatetime
      });
    },
    27062: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.idCardMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234),
        n = r(72099);
      (t.searchGetters = [(0, o.stringProp)("Number"), (e) => (0, n.identityToName)(e.identity) || e.Fullname]),
        (t.idCardMatch = (0, a.match)(t.searchGetters));
    },
    23437: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedIdCardSelector =
          t.viewedIdCardSelector =
          t.getLiveIdCardsSelector =
          t.viewedQueriedIdCardsSelector =
          t.queryIdCardsSelector =
          t.idCardMappersSelector =
          t.idCardWithIdentitySelector =
          t.idCardsWithIdentitySelector =
          t.idCardSelector =
          t.idCardsSelector =
            void 0);
      const a = r(16516),
        o = r(32034),
        n = r(27062),
        i = r(64439),
        s = r(24589),
        c = r(63566),
        l = r(97006),
        d = r(49551),
        u = r(75455),
        p = r(28074),
        S = r(40602),
        m = r(57989);
      t.idCardsSelector = (0, o.createSelector)(
        (e) => e.userSession.personalData.idCards,
        m.quarantinedSpacesSelector,
        S.filterOutQuarantinedItems
      );
      (t.idCardSelector = (e, r) => {
        const a = (0, t.idCardsSelector)(e);
        return (0, d.findDataModelObject)(r, a);
      }),
        (t.idCardsWithIdentitySelector = (0, o.createSelector)([t.idCardsSelector, p.identitiesByIdSelector], (e, t) =>
          e.map((e) => ({ ...e, identity: t[e.LinkedIdentity] }))
        )),
        (t.idCardWithIdentitySelector = (0, o.createSelector)([t.idCardSelector, (e) => (0, p.identitiesByIdSelector)(e)], (e, t) => ({
          ...e,
          identity: t[e.LinkedIdentity]
        })));
      t.idCardMappersSelector = (e) => (0, u.getIdCardMappers)();
      const g = () => n.idCardMatch;
      (t.queryIdCardsSelector = (0, s.getQuerySelector)(t.idCardsWithIdentitySelector, g, t.idCardMappersSelector)),
        (t.viewedQueriedIdCardsSelector = (0, a.compose)((0, c.viewListResults)(i.listView), t.queryIdCardsSelector)),
        (t.getLiveIdCardsSelector = (0, l.makeLiveSelectorGetter)(
          t.idCardsWithIdentitySelector,
          () => i.listView,
          g,
          t.idCardMappersSelector
        ));
      t.viewedIdCardSelector = (e, r) => {
        const a = (0, t.idCardWithIdentitySelector)(e, r);
        return (0, i.maybeDetailView)(a);
      };
      t.getViewedIdCardSelector = (e) => {
        const r = (0, o.createSelector)(t.idCardsSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, o.createSelector)(r, p.identitiesSelector, (e, t) =>
          (0, i.maybeDetailView)({ ...e, identity: (0, d.findDataModelObject)(e.LinkedIdentity, t) })
        );
      };
    },
    64439: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(82043),
        o = r(72099),
        n = ({ DeliveryDate: e, ExpireDate: t, Fullname: r, LocaleFormat: a, Number: n, CreationDatetime: i, identity: s }) => ({
          country: (0, o.vaultCountryToViewCountry)(a),
          expirationDate: (0, o.vaultDateToViewDate)(t),
          idNumber: n ?? "",
          issueDate: (0, o.vaultDateToViewDate)(e),
          name: (0, o.identityToName)(s) || r || "",
          creationDate: i ?? 0
        });
      (t.detailView = (e) => ({ ...(0, a.dataModelDetailView)(e), ...n(e) })),
        (t.maybeDetailView = (0, a.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({ ...(0, a.dataModelItemView)(e), ...n(e) });
      t.listView = (e) => e.map(t.itemView);
    },
    8453: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(65401),
        o = r(56174),
        n = r(62535);
      t.config = {
        commands: {
          addPassport: { handler: n.addPassportHandler },
          editPassport: { handler: n.editPassportHandler },
          deletePassport: { handler: n.deletePassportHandler }
        },
        queries: { getPassport: { selector: a.viewedPassportSelector }, getPassports: { selector: a.viewedQueriedPassportsSelector } },
        liveQueries: { livePassport: { operator: o.getPassport$ }, livePassports: { operator: o.passports$ } }
      };
    },
    57237: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addPassportHandler = void 0);
      const a = r(32626),
        o = r(72099),
        n = r(58452),
        i = ({ expirationDate: e, idNumber: t, issueDate: r, name: n, deliveryPlace: i }) => ({
          DateOfBirth: "",
          DeliveryDate: (0, o.viewDateToVaultDate)(r),
          ExpireDate: (0, o.viewDateToVaultDate)(e),
          Fullname: n ?? "",
          LinkedIdentity: "",
          Number: t ?? "",
          kwType: a.DataModelType.KWPassport,
          DeliveryPlace: i ?? "",
          Sex: ""
        });
      t.addPassportHandler = (e, t) => (0, n.addIdHandler)(e, t, i);
    },
    48518: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deletePassportHandler = void 0);
      const a = r(9979),
        o = r(65401);
      t.deletePassportHandler = (e, t) => (0, a.deleteIdHandler)(e, t, o.passportSelector);
    },
    29461: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.editPassportHandler = t.handlePassportFields = void 0);
      const a = r(65401),
        o = r(72099),
        n = r(22388);
      t.handlePassportFields = (e, t) => ({
        DeliveryDate: void 0 === e.issueDate ? t.DeliveryDate : (0, o.viewDateToVaultDate)(e.issueDate),
        ExpireDate: void 0 === e.expirationDate ? t.ExpireDate : (0, o.viewDateToVaultDate)(e.expirationDate),
        Fullname: e.name ?? t.Fullname,
        Number: e.idNumber ?? t.Number,
        DeliveryPlace: e.deliveryPlace ?? t.DeliveryPlace,
        LinkedIdentity: void 0 === e.name ? t.LinkedIdentity : "",
        Attachments: void 0 === e.attachments ? t.Attachments : e.attachments
      });
      t.editPassportHandler = (e, r) => (0, n.updateIdHandler)(e, r, t.handlePassportFields, a.passportSelector);
    },
    62535: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(57237), t), o(r(29461), t), o(r(48518), t);
    },
    56174: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPassport$ = t.passports$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(65401);
      t.passports$ = (0, n.getLivePersonalInfo)(i.getLivePassportsSelector);
      t.getPassport$ = (e) => {
        const t = (0, i.getViewedPassportSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    94023: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPassportMappers = void 0);
      const a = r(83539),
        o = r(72099);
      t.getPassportMappers = () => ({
        spaceId: (e) => e.SpaceId,
        name: (e) => (0, o.identityToName)(e.identity) || e.Fullname,
        idNumber: (e) => e.Number,
        lastUse: a.lastUseMapper,
        id: (e) => e.Id,
        creationDate: (e) => e.CreationDatetime
      });
    },
    39515: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.passportMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234),
        n = r(72099);
      (t.searchGetters = [(0, o.stringProp)("Number"), (e) => (0, n.identityToName)(e.identity) || e.Fullname]),
        (t.passportMatch = (0, a.match)(t.searchGetters));
    },
    65401: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedPassportSelector =
          t.viewedPassportSelector =
          t.getLivePassportsSelector =
          t.viewedQueriedPassportsSelector =
          t.queryPassportsWithIdentitySelector =
          t.passportMappersSelector =
          t.passportWithIdentitySelector =
          t.passportsWithIdentitySelector =
          t.passportSelector =
          t.passportsSelector =
            void 0);
      const a = r(16516),
        o = r(32034),
        n = r(39515),
        i = r(90810),
        s = r(24589),
        c = r(63566),
        l = r(97006),
        d = r(49551),
        u = r(94023),
        p = r(28074),
        S = r(40602),
        m = r(57989);
      t.passportsSelector = (0, o.createSelector)(
        (e) => e.userSession.personalData.passports,
        m.quarantinedSpacesSelector,
        S.filterOutQuarantinedItems
      );
      (t.passportSelector = (e, r) => {
        const a = (0, t.passportsSelector)(e);
        return (0, d.findDataModelObject)(r, a);
      }),
        (t.passportsWithIdentitySelector = (0, o.createSelector)([t.passportsSelector, p.identitiesByIdSelector], (e, t) =>
          e.map((e) => ({ ...e, identity: t[e.LinkedIdentity] }))
        )),
        (t.passportWithIdentitySelector = (0, o.createSelector)([t.passportSelector, (e) => (0, p.identitiesByIdSelector)(e)], (e, t) => ({
          ...e,
          identity: t[e.LinkedIdentity]
        })));
      t.passportMappersSelector = (e) => (0, u.getPassportMappers)();
      const g = () => n.passportMatch;
      (t.queryPassportsWithIdentitySelector = (0, s.getQuerySelector)(t.passportsWithIdentitySelector, g, t.passportMappersSelector)),
        (t.viewedQueriedPassportsSelector = (0, a.compose)((0, c.viewListResults)(i.listView), t.queryPassportsWithIdentitySelector)),
        (t.getLivePassportsSelector = (0, l.makeLiveSelectorGetter)(
          t.passportsWithIdentitySelector,
          () => i.listView,
          g,
          t.passportMappersSelector
        ));
      t.viewedPassportSelector = (e, r) => {
        const a = (0, t.passportWithIdentitySelector)(e, r);
        return (0, i.maybeDetailView)(a);
      };
      t.getViewedPassportSelector = (e) => {
        const r = (0, o.createSelector)(t.passportsSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, o.createSelector)(r, p.identitiesSelector, (e, t) =>
          (0, i.maybeDetailView)({ ...e, identity: (0, d.findDataModelObject)(e.LinkedIdentity, t) })
        );
      };
    },
    90810: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(82043),
        o = r(72099),
        n = ({
          DeliveryDate: e,
          ExpireDate: t,
          Fullname: r,
          LocaleFormat: a,
          Number: n,
          DeliveryPlace: i,
          CreationDatetime: s,
          identity: c
        }) => ({
          country: (0, o.vaultCountryToViewCountry)(a),
          expirationDate: (0, o.vaultDateToViewDate)(t),
          idNumber: n ?? "",
          issueDate: (0, o.vaultDateToViewDate)(e),
          name: (0, o.identityToName)(c) || r || "",
          deliveryPlace: i ?? "",
          creationDate: s ?? 0
        });
      (t.detailView = (e) => ({ ...(0, a.dataModelDetailView)(e), ...n(e) })),
        (t.maybeDetailView = (0, a.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({ ...(0, a.dataModelItemView)(e), ...n(e) });
      t.listView = (e) => e.map(t.itemView);
    },
    57718: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(27147),
        o = r(25346),
        n = r(27753);
      t.config = {
        commands: {
          addSocialSecurityId: { handler: n.addSocialSecurityIdHandler },
          editSocialSecurityId: { handler: n.editSocialSecurityIdHandler },
          deleteSocialSecurityId: { handler: n.deleteSocialSecurityIdHandler }
        },
        queries: {
          getSocialSecurityId: { selector: a.viewedSocialSecurityIdSelector },
          getSocialSecurityIds: { selector: a.viewedQueriedSocialSecurityIdsSelector }
        },
        liveQueries: {
          liveSocialSecurityId: { operator: o.getSocialSecurityId$ },
          liveSocialSecurityIds: { operator: o.socialSecurityIds$ }
        }
      };
    },
    6702: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addSocialSecurityIdHandler = void 0);
      const a = r(32626),
        o = r(58452),
        n = (e) => ({
          DateOfBirth: "",
          LinkedIdentity: "",
          SocialSecurityFullname: e.name ?? "",
          SocialSecurityNumber: e.idNumber ?? "",
          kwType: a.DataModelType.KWSocialSecurityStatement,
          Sex: ""
        });
      t.addSocialSecurityIdHandler = (e, t) => (0, o.addIdHandler)(e, t, n);
    },
    50725: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteSocialSecurityIdHandler = void 0);
      const a = r(9979),
        o = r(27147);
      t.deleteSocialSecurityIdHandler = (e, t) => (0, a.deleteIdHandler)(e, t, o.socialSecurityIdSelector);
    },
    96163: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.editSocialSecurityIdHandler = t.handleSocialSecurityIdFields = void 0);
      const a = r(27147),
        o = r(22388);
      t.handleSocialSecurityIdFields = (e, t) => ({
        SocialSecurityFullname: e.name ?? t.SocialSecurityFullname,
        SocialSecurityNumber: e.idNumber ?? t.SocialSecurityNumber,
        LinkedIdentity: void 0 === e.name ? t.LinkedIdentity : "",
        Attachments: void 0 === e.attachments ? t.Attachments : e.attachments
      });
      t.editSocialSecurityIdHandler = (e, r) => (0, o.updateIdHandler)(e, r, t.handleSocialSecurityIdFields, a.socialSecurityIdSelector);
    },
    27753: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(6702), t), o(r(96163), t), o(r(50725), t);
    },
    25346: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getSocialSecurityId$ = t.socialSecurityIds$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(27147);
      t.socialSecurityIds$ = (0, n.getLivePersonalInfo)(i.getLiveSocialSecurityIdsSelector);
      t.getSocialSecurityId$ = (e) => {
        const t = (0, i.getViewedSocialSecurityIdSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    50147: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getSocialSecurityIdMappers = void 0);
      const a = r(83539),
        o = r(72099);
      t.getSocialSecurityIdMappers = () => ({
        spaceId: (e) => e.SpaceId,
        name: (e) => (0, o.identityToName)(e.identity) || e.SocialSecurityFullname,
        idNumber: (e) => e.SocialSecurityNumber,
        lastUse: a.lastUseMapper,
        id: (e) => e.Id,
        creationDate: (e) => e.CreationDatetime
      });
    },
    29989: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.socialSecurityIdMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234),
        n = r(72099);
      (t.searchGetters = [(0, o.stringProp)("SocialSecurityNumber"), (e) => (0, n.identityToName)(e.identity) || e.SocialSecurityFullname]),
        (t.socialSecurityIdMatch = (0, a.match)(t.searchGetters));
    },
    27147: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedSocialSecurityIdSelector =
          t.viewedSocialSecurityIdSelector =
          t.getLiveSocialSecurityIdsSelector =
          t.viewedQueriedSocialSecurityIdsSelector =
          t.querySocialSecurityIdsSelector =
          t.socialSecurityIdMappersSelector =
          t.socialSecurityIdWithIdentitySelector =
          t.socialSecurityIdsWithIdentitySelector =
          t.socialSecurityIdSelector =
          t.socialSecurityIdsSelector =
            void 0);
      const a = r(16516),
        o = r(32034),
        n = r(29989),
        i = r(71864),
        s = r(24589),
        c = r(63566),
        l = r(97006),
        d = r(49551),
        u = r(50147),
        p = r(28074),
        S = r(57989),
        m = r(40602);
      t.socialSecurityIdsSelector = (0, o.createSelector)(
        (e) => e.userSession.personalData.socialSecurityIds,
        S.quarantinedSpacesSelector,
        m.filterOutQuarantinedItems
      );
      (t.socialSecurityIdSelector = (e, r) => {
        const a = (0, t.socialSecurityIdsSelector)(e);
        return (0, d.findDataModelObject)(r, a);
      }),
        (t.socialSecurityIdsWithIdentitySelector = (0, o.createSelector)([t.socialSecurityIdsSelector, p.identitiesByIdSelector], (e, t) =>
          e.map((e) => ({ ...e, identity: t[e.LinkedIdentity] }))
        )),
        (t.socialSecurityIdWithIdentitySelector = (0, o.createSelector)(
          [t.socialSecurityIdSelector, (e) => (0, p.identitiesByIdSelector)(e)],
          (e, t) => ({ ...e, identity: t[e.LinkedIdentity] })
        ));
      t.socialSecurityIdMappersSelector = (e) => (0, u.getSocialSecurityIdMappers)();
      const g = () => n.socialSecurityIdMatch;
      (t.querySocialSecurityIdsSelector = (0, s.getQuerySelector)(
        t.socialSecurityIdsWithIdentitySelector,
        g,
        t.socialSecurityIdMappersSelector
      )),
        (t.viewedQueriedSocialSecurityIdsSelector = (0, a.compose)((0, c.viewListResults)(i.listView), t.querySocialSecurityIdsSelector)),
        (t.getLiveSocialSecurityIdsSelector = (0, l.makeLiveSelectorGetter)(
          t.socialSecurityIdsWithIdentitySelector,
          () => i.listView,
          g,
          t.socialSecurityIdMappersSelector
        ));
      t.viewedSocialSecurityIdSelector = (e, r) => {
        const a = (0, t.socialSecurityIdWithIdentitySelector)(e, r);
        return (0, i.maybeDetailView)(a);
      };
      t.getViewedSocialSecurityIdSelector = (e) => {
        const r = (0, o.createSelector)(t.socialSecurityIdsSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, o.createSelector)(r, p.identitiesSelector, (e, t) =>
          (0, i.maybeDetailView)({ ...e, identity: (0, d.findDataModelObject)(e.LinkedIdentity, t) })
        );
      };
    },
    71864: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(82043),
        o = r(72099),
        n = (e) => ({
          name: (0, o.identityToName)(e.identity) || e.SocialSecurityFullname || "",
          idNumber: e.SocialSecurityNumber ?? "",
          country: (0, o.vaultCountryToViewCountry)(e.LocaleFormat),
          creationDate: e.CreationDatetime ?? 0
        });
      (t.detailView = (e) => ({ ...(0, a.dataModelDetailView)(e), ...n(e) })),
        (t.maybeDetailView = (0, a.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({ ...(0, a.dataModelItemView)(e), ...n(e) });
      t.listView = (e) => e.map(t.itemView);
    },
    58452: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addIdHandler = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(23136),
        i = r(48313),
        s = r(53),
        c = r(78320),
        l = r(95623),
        d = r(70252),
        u = r(13675),
        p = r(72099),
        S = r(79980);
      t.addIdHandler = async ({ sessionService: e, storeService: t, eventLoggerService: r }, m, g) => {
        if ("" === m.idNumber) return Promise.resolve({ success: !1, error: { code: o.AddIdResultErrorCode.MISSING_ID_NUMBER } });
        const y = ({ country: e, spaceId: t }) => {
          const r = (0, s.getUnixTimestamp)();
          return {
            AnonId: (0, c.generateItemUuid)(),
            CreationDatetime: r,
            Id: (0, c.generateItemUuid)(),
            LastBackupTime: 0,
            LocaleFormat: (0, p.viewCountryToVaultCountry)(e),
            SpaceId: t,
            UserModificationDatetime: r
          };
        };
        try {
          if (!t.isAuthenticated()) return Promise.resolve({ success: !1, error: { code: o.IdErrorCode.NOT_AUTHENTICATED } });
          const s = (0, u.sanitizeInputPersonalData)(m),
            c = { ...y((h = s)), ...g(h) };
          if (!c.SpaceId) {
            const e = await (0, n.getDefaultSpaceId)(t);
            c.SpaceId = e;
          }
          t.dispatch((0, i.savePersonalDataItem)(c, c.kwType)), e.getInstance().user.persistPersonalData();
          return (
            (0, n.getDebounceSync)(t, e)({ immediateCall: !0 }, a.Trigger.Save),
            (0, S.logAddVaultItem)(t, r, c),
            Promise.resolve({ success: !0, id: c.Id })
          );
        } catch (e) {
          const t = new Error(`[IDs] - addIdHandler: ${e}`);
          return (
            (0, d.sendExceptionLog)({ error: t }),
            (0, l.logError)(t),
            Promise.resolve({ success: !1, error: { code: o.IdErrorCode.INTERNAL_ERROR } })
          );
        }
        var h;
      };
    },
    9979: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteIdHandler = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(23136),
        i = r(45291),
        s = r(95623),
        c = r(70252),
        l = r(79980);
      t.deleteIdHandler = ({ sessionService: e, storeService: t, eventLoggerService: r }, { id: d }, u) => {
        const p = t.getState();
        try {
          if (!t.isAuthenticated()) return Promise.resolve({ success: !1, error: { code: o.IdErrorCode.NOT_AUTHENTICATED } });
          const s = u(p, d);
          if (!s) return Promise.resolve({ success: !1, error: { code: o.IdErrorCode.NOT_FOUND } });
          const c = (0, i.removePersonalItem)(s.kwType, s.Id, null);
          t.dispatch(c);
          return (
            (0, n.getDebounceSync)(t, e)({ immediateCall: !0 }, a.Trigger.Save),
            (0, l.logDeleteVaultItem)(t, r, s),
            Promise.resolve({ success: !0 })
          );
        } catch (e) {
          const t = new Error(`[IDs] - deleteIdHandler: ${e}`);
          return (
            (0, c.sendExceptionLog)({ error: t }),
            (0, s.logError)(t),
            Promise.resolve({ success: !1, error: { code: o.IdErrorCode.INTERNAL_ERROR } })
          );
        }
      };
    },
    22388: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateIdHandler = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(23136),
        i = r(48313),
        s = r(53),
        c = r(95623),
        l = r(70252),
        d = r(13675),
        u = r(72099),
        p = r(79980);
      t.updateIdHandler = ({ sessionService: e, storeService: t, eventLoggerService: r }, S, m, g) => {
        if ("" === S.idNumber) return Promise.resolve({ success: !1, error: { code: o.UpdateIdResultErrorCode.MISSING_ID_NUMBER } });
        const y = ({ country: e, spaceId: t }, r) => ({
            SpaceId: t ?? r.SpaceId,
            LocaleFormat: void 0 === e ? r.LocaleFormat : (0, u.viewCountryToVaultCountry)(e)
          }),
          h = (e, t) => ({ ...y(e, t), ...m(e, t) });
        try {
          if (!t.isAuthenticated()) return Promise.resolve({ success: !1, error: { code: o.IdErrorCode.NOT_AUTHENTICATED } });
          const c = t.getState(),
            l = (0, d.sanitizeInputPersonalData)(S),
            u = g(c, S.id);
          if (!u) return Promise.resolve({ success: !1, error: { code: o.IdErrorCode.NOT_FOUND } });
          const m = { ...u, ...h(l, u), UserModificationDatetime: (0, s.getUnixTimestamp)() },
            y = m.kwType;
          t.dispatch((0, i.savePersonalDataItem)(m, y)), e.getInstance().user.persistPersonalData();
          (0, n.getDebounceSync)(t, e)({ immediateCall: !0 }, a.Trigger.Save);
          const v = g(c, S.id);
          return (0, p.logEditVaultItem)(t, r, m, v), Promise.resolve({ success: !0 });
        } catch (e) {
          const t = new Error(`[IDs] - updateIdHandler: ${e}`);
          return (
            (0, l.sendExceptionLog)({ error: t }),
            (0, c.logError)(t),
            Promise.resolve({ success: !1, error: { code: o.IdErrorCode.INTERNAL_ERROR } })
          );
        }
      };
    },
    72099: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.identityToName =
          t.viewCountryToVaultCountry =
          t.vaultCountryToViewCountry =
          t.vaultDateToViewDate =
          t.viewDateToVaultDate =
          t.epochToDate =
          t.ZERO_INDEX_BASED_MONTH_OFFSET =
            void 0);
      const a = r(32626);
      t.ZERO_INDEX_BASED_MONTH_OFFSET = 1;
      t.epochToDate = (e) => new Date(1e3 * e);
      t.viewDateToVaultDate = (e) =>
        null === e
          ? ""
          : ((e) => {
              const r = (0, t.epochToDate)(e);
              return `${r.getUTCFullYear()}-${r.getUTCMonth() + 1}-${r.getUTCDate()}`;
            })(e);
      t.vaultDateToViewDate = (e) => {
        if (!e) return null;
        const t = ((e) => {
          if (!e) return 0;
          const [t, r, a] = e.split(/[-/]/).map((e) => Number.parseInt(e, 10)),
            o = new Date();
          o.setUTCHours(0, 0, 0, 0);
          const n = o.setUTCFullYear(t, r - 1, a);
          return Math.floor(n / 1e3);
        })(e);
        return Number.isNaN(t) ? null : t;
      };
      (t.vaultCountryToViewCountry = (e) => {
        const t = a.Country[e];
        return void 0 === t || t === a.Country.NO_TYPE ? a.Country.UNIVERSAL : t;
      }),
        (t.viewCountryToVaultCountry = t.vaultCountryToViewCountry);
      t.identityToName = (e) => (e ? [e.FirstName, e.MiddleName, e.LastName, e.LastName2].filter(Boolean).join(" ") : "");
    },
    11230: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.importApiConfig = void 0);
      const a = r(56242),
        o = r(29613),
        n = r(28927),
        i = r(76295),
        s = r(94746);
      t.importApiConfig = {
        commands: {
          importPersonalData: { handler: n.importPersonalDataHandler },
          previewPersonalData: { handler: i.previewPersonalDataHandler },
          dismissPersonalDataImportNotifications: { handler: s.dismissDataImportHandler }
        },
        queries: { getImportPersonalDataStatus: { selector: o.importPersonalDataStateSelector } },
        liveQueries: { liveImportPersonalDataStatus: { operator: a.importPersonalDataState$ } }
      };
    },
    94746: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.dismissDataImportHandler = t.dismissDataImport = void 0);
      const a = r(32626),
        o = r(43691);
      t.dismissDataImport = async (e) => {
        await e.waitReady(), e.onNewState({ status: a.ImportPersonalDataStateType.Idle });
      };
      t.dismissDataImportHandler = (e) => (0, t.dismissDataImport)((0, o.makeImportService)(e));
    },
    28927: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.importPersonalDataHandler = t.importPersonalData = void 0);
      const a = r(32626),
        o = r(95623),
        n = r(70252),
        i = r(43691);
      t.importPersonalData = async (e, t) => {
        try {
          e.onNewState({ status: a.ImportPersonalDataStateType.Processing, name: t.name });
          const r = t.content;
          return (
            (async () => {
              try {
                const o = await e.importPersonalDataItems(r);
                e.onNewState({
                  status: a.ImportPersonalDataStateType.Success,
                  name: t.name,
                  totalCount: o.totalCount,
                  successCount: o.successCount,
                  duplicateCount: o.duplicateCount
                });
              } catch (r) {
                const i = new Error(`[import] - importError: ${r}`);
                (0, n.sendExceptionLog)({ error: i }),
                  (0, o.logError)(i),
                  e.onNewState({ status: a.ImportPersonalDataStateType.Error, name: t.name });
              }
            })(),
            { success: !0 }
          );
        } catch (r) {
          const i = new Error(`[import] - formatError: ${r}`);
          return (
            (0, n.sendExceptionLog)({ error: i }),
            (0, o.logError)(i),
            e.onNewState({ status: a.ImportPersonalDataStateType.Error, name: t.name }),
            { success: !1, error: a.ImportPersonalDataErrorType.Unknown }
          );
        }
      };
      t.importPersonalDataHandler = (e, r) => (0, t.importPersonalData)((0, i.makeImportService)(e), r);
    },
    76295: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.previewPersonalDataHandler = t.previewPersonalData = void 0);
      const a = r(32626),
        o = r(43691);
      t.previewPersonalData = async (e, t) => {
        if (!e.canDoImport()) return { success: !1, error: a.PreviewPersonalDataErrorType.Unavailable };
        try {
          return await e.previewPersonalDataArchive(t);
        } catch (e) {
          return { success: !1, error: a.PreviewPersonalDataErrorType.InvalidFormat };
        }
      };
      t.previewPersonalDataHandler = (e, r) => {
        const a = (0, o.makeImportService)(e);
        return (0, t.previewPersonalData)(a, r);
      };
    },
    56242: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.importPersonalDataState$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(29613);
      t.importPersonalDataState$ = () => (0, a.pipe)((0, o.map)(n.importPersonalDataStateSelector, (0, o.distinctUntilChanged)()));
    },
    29613: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isImportPersonalDataAvailableSelector = t.importPersonalDataStateSelector = void 0);
      const a = r(32626),
        o = r(62844);
      t.importPersonalDataStateSelector = (e) => e.userSession.importPersonalData.state ?? { status: a.ImportPersonalDataStateType.Idle };
      t.isImportPersonalDataAvailableSelector = (e) =>
        !(0, o.changeMPinProgressSelector)(e) &&
        (0, t.importPersonalDataStateSelector)(e).status !== a.ImportPersonalDataStateType.Processing;
    },
    90537: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getUniqueVaultItemIdentifier = void 0);
      const a = r(16516),
        o = { Attachments: !1 },
        n = {
          ...o,
          Title: !0,
          Email: !0,
          Login: !0,
          SecondaryLogin: !0,
          Password: !0,
          Strength: !1,
          Note: !0,
          Checked: !1,
          Status: !1,
          SharedObject: !1,
          ModificationDatetime: !1,
          Category: !1,
          Url: !0,
          UserSelectedUrl: !1,
          UseFixedUrl: !1,
          TrustedUrlGroup: !1,
          NumberUse: !1,
          AutoLogin: !1,
          AutoProtected: !1,
          SubdomainOnly: !1,
          Type: !1,
          Server: !1,
          Port: !1,
          Alias: !1,
          SID: !1,
          ConnectionOptions: !1,
          domainIcon: !1,
          limitedPermissions: !1,
          OtpSecret: !0,
          OtpUrl: !0,
          LinkedServices: !1
        },
        i = { ...o, Title: !0, Content: !0 },
        s = { ...o, Title: !0, Category: !1, Type: !1, limitedPermissions: !1, Content: !0, Secured: !1, CreationDate: !1, UpdateDate: !1 },
        c = { ...o, LinkedIdentity: !1, Fullname: !0, Sex: !0, DateOfBirth: !0, Number: !0, ExpireDate: !0, DeliveryDate: !0 },
        l = { ...o, Email: !0, Type: !1, EmailName: !0 },
        d = { ...o, Type: !1, Number: !0, NumberNational: !0, NumberInternational: !0, PhoneName: !0, PersonalNote: !0 },
        u = { ...o, Title: !0, FirstName: !0, MiddleName: !0, LastName: !0, LastName2: !0, Pseudo: !1, BirthDate: !0, BirthPlace: !0 },
        p = {
          ...o,
          Counter: !1,
          CredentialId: !0,
          ItemName: !0,
          KeyAlgorithm: !0,
          Note: !0,
          PrivateKey: !0,
          RpId: !0,
          RpName: !0,
          UserDisplayName: !0,
          UserHandle: !0
        },
        S = {
          ...o,
          LinkedIdentity: !1,
          Fullname: !0,
          Sex: !0,
          DateOfBirth: !0,
          Number: !0,
          ExpireDate: !0,
          DeliveryDate: !0,
          DeliveryPlace: !0
        },
        m = { ...o, PersonalNote: !0, Name: !0, Website: !0 },
        g = { ...o, Number: !0, LinkedIdentity: !1, Fullname: !0, Sex: !0, DateOfBirth: !0, DeliveryDate: !0, ExpireDate: !0, State: !0 },
        y = { ...o, PersonalNote: !0, Name: !0, JobTitle: !0 },
        h = {
          ...o,
          PersonalNote: !0,
          State: !0,
          AddressName: !0,
          Receiver: !0,
          AddressFull: !0,
          City: !0,
          ZipCode: !0,
          Country: !0,
          StreetNumber: !0,
          StreetTitle: !0,
          StreetName: !0,
          StateNumber: !0,
          StateLevel2: !0,
          Building: !0,
          Stairs: !0,
          Floor: !0,
          Door: !0,
          DigitCode: !0,
          LinkedPhone: !1
        },
        v = {
          ...o,
          Name: !0,
          CardNumber: !0,
          CardNumberLastDigits: !0,
          OwnerName: !0,
          SecurityCode: !0,
          ExpireMonth: !0,
          ExpireYear: !0,
          StartMonth: !0,
          StartYear: !0,
          IssueNumber: !0,
          Color: !1,
          Bank: !0,
          CCNote: !0,
          Type: !1
        },
        f = { ...o, BankAccountName: !0, BankAccountOwner: !0, BankAccountIBAN: !0, BankAccountBIC: !0, BankAccountBank: !0 },
        w = (e) => Object.keys(e).filter((t) => !!e[t]),
        A = {
          KWAddress: w(h),
          KWAuthCategory: w({ Attachments: !1, CategoryName: !0 }),
          KWAuthentifiant: w(n),
          KWBankStatement: w(f),
          KWCollection: w({ Attachments: !1, Name: !0, VaultItems: !0 }),
          KWCompany: w(y),
          KWDataChangeHistory: [],
          KWDriverLicence: w(g),
          KWEmail: w(l),
          KWFiscalStatement: [],
          KWGeneratedPassword: [],
          KWIDCard: w(c),
          KWIdentity: w(u),
          KWMerchand: [],
          KWMiscData: [],
          KWPasskey: w(p),
          KWPassport: w(S),
          KWPaymentMean_creditCard: w(v),
          KWPaymentMean_paypal: [],
          KWPersonalWebsite: w(m),
          KWPhone: w(d),
          KWPurchaseAccount: [],
          KWPurchaseCategory: [],
          KWPurchasePaidBasket: [],
          KWPurchaseTrueArticle: [],
          KWSecureFileInfo: [],
          KWSecret: w(i),
          KWSecureNote: w(s),
          KWSecureNoteCategory: w({ Attachments: !1, CategoryName: !0 }),
          KWSecurityBreach: [],
          KWSettingsManagerApp: [],
          KWSocialSecurityStatement: [],
          KWWebSite: []
        };
      t.getUniqueVaultItemIdentifier = (e) =>
        ((e, t) => {
          const r = {};
          return (
            e.forEach((e) => {
              r[e] = t[e] ?? "";
            }),
            (0, a.isEmpty)(r) ? "" : JSON.stringify(r)
          );
        })(A[e.kwType], e);
    },
    47437: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getImportableItemsFromUserFile = t.getExistingVaultItemUniqueIdentifiers = void 0);
      const a = r(32626),
        o = r(26634),
        n = r(13675),
        i = r(49901),
        s = r(72883),
        c = r(90537),
        l = r(88655),
        d = [
          a.DataModelType.KWAddress,
          a.DataModelType.KWAuthentifiant,
          a.DataModelType.KWCompany,
          a.DataModelType.KWDriverLicence,
          a.DataModelType.KWEmail,
          a.DataModelType.KWIDCard,
          a.DataModelType.KWIdentity,
          a.DataModelType.KWPassport,
          a.DataModelType.KWPaymentMean_creditCard,
          a.DataModelType.KWPersonalWebsite,
          a.DataModelType.KWPhone,
          a.DataModelType.KWSecureNote,
          a.DataModelType.KWSocialSecurityStatement,
          a.DataModelType.KWWebSite
        ];
      t.getExistingVaultItemUniqueIdentifiers = (e) => {
        const t = new Set(),
          r = Object.entries(e)
            .filter(([e]) => (0, s.isDataKeyVaultItem)(e))
            .reduce((e, [t, r]) => ({ ...e, [t]: r }), {});
        for (const e of Object.values(r))
          e.forEach((e) => {
            if ((0, a.isDataModelObject)(e)) {
              const r = (0, c.getUniqueVaultItemIdentifier)(e);
              r && t.add(r);
            }
          });
        return t;
      };
      const u = (e, t, r) => {
          r.length && t ? (e.SpaceId = r[0].teamId) : e.SpaceId && (e.SpaceId = r[0]?.teamId ?? i.PERSONAL_SPACE_ID);
        },
        p = async (e, t) => (
          (0, a.isCredential)(e)
            ? (e = await (0, l.prepareCredentialForImport)(e, t))
            : (0, a.isNote)(e) && (e = (0, l.prepareSecureNoteForImport)(e)),
          e
        );
      t.getImportableItemsFromUserFile = async (e, t, r, i) => {
        const { storeService: s } = e,
          { spaces: S } = s.getSpaceData(),
          m = s.getState(),
          g = !(0, o.isPersonalSpaceEnabledSelector)(m),
          y = [];
        let h = 0,
          v = 0;
        for (const e of t) {
          d.includes(e.kwType) && h++;
          const t = await p((0, n.sanitizeInputPersonalData)((0, l.convertImportable)(e)), i);
          if ((u(t, g, S), (0, a.isCollection)(t))) {
            const e = y.find((e) => (0, a.isCollection)(e) && e.SpaceId === t.SpaceId && e.Name === t.Name);
            if (e) {
              e.VaultItems = [...e.VaultItems, ...t.VaultItems];
              continue;
            }
          }
          r.has((0, c.getUniqueVaultItemIdentifier)(t)) ? v++ : y.push(t);
        }
        return { itemsToImport: y, importableItemCount: h, duplicateItemCount: v };
      };
    },
    20485: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.importPersonalDataItems = void 0);
      const a = r(32626),
        o = r(93039),
        n = r(72678),
        i = r(92310),
        s = r(78163),
        c = r(23136),
        l = r(88655),
        d = r(47437);
      t.importPersonalDataItems = async (e, t) => {
        const { storeService: r, sessionService: u, localStorageService: p, applicationModulesAccess: S } = e,
          m = r.getState(),
          g = (0, c.getDebounceSync)(r, u);
        let y = 0,
          h = 0;
        const v = (0, d.getExistingVaultItemUniqueIdentifiers)(m.userSession.personalData),
          f = (0, l.makeCategoryIdMaps)(t, (0, n.personalDataSelector)(m)),
          { itemsToImport: w, importableItemCount: A, duplicateItemCount: P } = await (0, d.getImportableItemsFromUserFile)(e, t, v, f),
          T = (0, l.groupByType)(w);
        for (const [e, t] of T.entries())
          if (
            ((0, l.savePersonalDataItemsForImport)(
              { storeService: r, sessionService: u, localStorageService: p, applicationModulesAccess: S },
              e,
              t
            ),
            e !== a.DataModelType.KWCollection &&
              e !== a.DataModelType.KWSecureNoteCategory &&
              e !== a.DataModelType.KWAuthCategory &&
              (y += t.length),
            e === a.DataModelType.KWAuthentifiant && (0, s.hasVaultAuditLogsFFActivated)(S))
          ) {
            const e = (0, i.currentTeamIdSelector)(m);
            (h = t.filter((t) => t.SpaceId === e).length),
              h >= 1 && (await (0, s.computeAndSendCSVImportActivityLog)(S, { domainUrl: null, importCount: h }));
          }
        return g({ immediateCall: !0 }, o.Trigger.Save), { successCount: y, totalCount: A, duplicateCount: P };
      };
    },
    88655: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.savePersonalDataItemsForImport =
          t.groupByType =
          t.prepareSecureNoteForImport =
          t.makeCategoryIdMaps =
          t.prepareCredentialForImport =
          t.convertImportable =
            void 0);
      const a = r(32626),
        o = r(78924),
        n = r(48313),
        i = r(56915),
        s = r(73566),
        c = r(85225),
        l = r(53),
        d = r(23439),
        u = r(47975),
        p = r(78320),
        S = r(28207),
        m = r(70252);
      t.convertImportable = (e) => ({
        ...e,
        Id: e.Id ? e.Id : (0, p.generateItemUuid)(),
        AnonId: (0, p.generateItemUuid)(),
        SpaceId: e.SpaceId ?? "",
        LocaleFormat: e.LocaleFormat ?? a.Country.UNIVERSAL
      });
      t.prepareCredentialForImport = async (e, t) => ({
        ...e,
        Category: t.get(e.Category) ?? "",
        Strength: e.Password ? await (0, u.evaluatePasswordStrength)(e.Password) : 0
      });
      t.makeCategoryIdMaps = (e, t) => {
        const r = new Map();
        for (const o of e)
          if ((0, a.isCredentialCategory)(o)) {
            const e = (0, d.getCategoryIdByName)(t, o.CategoryName);
            e && r.set(o.Id, e);
          }
        return r;
      };
      t.prepareSecureNoteForImport = (e) => {
        const t = (0, l.getUnixTimestamp)();
        return {
          ...e,
          CreationDatetime: t,
          LocaleFormat: a.Country.US,
          UserModificationDatetime: t,
          LastBackupTime: 0,
          Title: e.Title ?? `Untitled - ${t.toLocaleString()}`,
          Content: e.Content ?? "",
          Category: e.Category ?? "noCategory",
          Secured: e.Secured ?? !1,
          Type: a.NoteTypes.includes(e.Type) ? e.Type : "GRAY",
          Attachments: e.Attachments ?? []
        };
      };
      t.groupByType = (e) => {
        const t = new Map();
        for (const r of e) {
          const e = t.get(r.kwType);
          e ? e.push(r) : t.set(r.kwType, [r]);
        }
        return t;
      };
      t.savePersonalDataItemsForImport = ({ storeService: e, sessionService: t, applicationModulesAccess: r }, l, d) => {
        if (!d.length) return;
        const u = e.getPersonalData(),
          p = d.reduce(
            (t, r) => {
              let o = null;
              return (
                (0, s.isChangeHistoryCandidate)(r) &&
                  (o = (0, s.getUpdatedItemChangeHistory)({
                    deviceName: e.getLocalSettings().deviceName ?? "",
                    personalData: u,
                    change: (0, c.makeUpdateChange)(r),
                    userLogin: e.getUserLogin(),
                    platformInfo: (0, i.platformInfoSelector)(e.getState())
                  })),
                {
                  changeHistories: [...t.changeHistories, ...(o ? [o] : [])],
                  credentialIds: [...t.credentialIds, ...((0, a.isCredential)(r) ? [r.Id] : [])]
                }
              );
            },
            { changeHistories: [], credentialIds: [] }
          );
        e.dispatch((0, n.savePersonalDataItems)(d, l, p.changeHistories)),
          t.getInstance().user.persistPersonalData(),
          (async (e, t) => {
            if (t.length)
              try {
                const { commands: r } = e.createClients().vaultItemsCrud;
                await r.emitTemporaryVaultItemEvent({ ids: [...t], eventType: o.EventType.Created }),
                  S.carbonEventHooks.iconsUpdates({ type: "credentialUpdates", credentialIds: t });
              } catch (e) {
                const t = new Error(`Failed to handle health & credential health updates with ${e}`);
                return void (0, m.sendExceptionLog)({ error: t });
              }
          })(r, p.credentialIds);
      };
    },
    43691: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeImportService = void 0);
      const a = r(32626),
        o = r(56915),
        n = r(17825),
        i = r(3343),
        s = r(56242),
        c = r(29613),
        l = r(61655),
        d = r(20485),
        u = r(99474),
        p = r(32814);
      t.makeImportService = (e) => {
        const { storeService: t } = e;
        return {
          previewPersonalDataArchive: (e) =>
            (async (e, t) => {
              const r = (0, o.platformInfoSelector)(e.getState());
              switch (t.format) {
                case a.ImportFormats.Csv: {
                  const e = (0, u.getImportablePersonalData)(t.content, a.Country[r.country]);
                  return 0 === e.items.length
                    ? { success: !1, error: a.PreviewPersonalDataErrorType.InvalidFormat }
                    : { success: !0, data: { items: e.items, headers: e.headers } };
                }
                case a.ImportFormats.Dash: {
                  const r = (0, p.parseDashData)(t.content.data);
                  return (await (0, p.checkPassword)(e, r, t.password))
                    ? {
                        success: !0,
                        data: {
                          items: (await (0, p.getSaveEventsFromDash)(e, r, t.password)).map((e) => ({ baseDataModel: e, rawData: {} })),
                          headers: []
                        }
                      }
                    : { success: !1, error: a.PreviewPersonalDataErrorType.BadPassword };
                }
              }
              (0, n.assertUnreachable)(t);
            })(t, e),
          canDoImport: () => (0, c.isImportPersonalDataAvailableSelector)(t.getState()),
          importPersonalDataItems: (t) => (0, d.importPersonalDataItems)(e, t),
          onNewState: (e) => t.dispatch((0, l.notifyNewImportPersonalDataStateAction)(e)),
          waitReady: async () => {
            await (0, s.importPersonalDataState$)()(t.getState$())
              .pipe((0, i.first)((e) => e.status !== a.ImportPersonalDataStateType.Processing))
              .toPromise();
          }
        };
      };
    },
    89586: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getFieldLevelProcessor = void 0);
      const a = r(32626),
        o = r(85803),
        n = (e, t) => ("title" === e ? null : t),
        i = (e, t) => {
          switch (e) {
            case "reprompt":
              if ("0" === t) return null;
              break;
            case "name":
              if ("--" === t) return null;
              break;
            case "type":
              return null;
          }
          return t;
        };
      t.getFieldLevelProcessor = (e) => {
        switch (e) {
          case a.ImportSource.Safari:
            return n;
          case a.ImportSource.Bitwarden:
            return i;
          case a.ImportSource.Lastpass:
            return o.fieldProcessorForLastPass;
          default:
            return null;
        }
      };
    },
    62754: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getItemTypeProcessor = void 0);
      const a = r(32626),
        o = r(85803);
      t.getItemTypeProcessor = (e) => (e === a.ImportSource.Lastpass ? o.itemTypeProcessorForLastPass : null);
    },
    92522: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.parseCustomKeeperCredentialData = t.getKeeperImportHeaders = void 0);
      t.getKeeperImportHeaders = (e) => {
        const t = ["Folder", "Title", "Login", "Password", "Website Address", "Notes", "Shared Folder"],
          r = Math.max(0, e - t.length);
        return r && t.push(...[...Array(r).keys()].map((e, t) => `Custom ${t + 1}`)), t;
      };
      t.parseCustomKeeperCredentialData = (e, t) => {
        Object.keys(e).forEach((r) => {
          const a = e[r];
          "TFC:Keeper" === a ? delete e[r] : "string" == typeof a && a.startsWith("otpauth://") && ((t.OtpUrl = a), delete e[r]);
        });
      };
    },
    85803: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fieldProcessorForLastPass =
          t.itemTypeProcessorForLastPass =
          t.processAndPushLastPassNote =
          t.parseLastPassSecureNote =
          t.LPNoteTypeField =
          t.LastPassNoteType =
          t.LAST_PASS_SECURE_NOTE_URL =
            void 0);
      const a = r(77672),
        o = r(32626),
        n = r(97437),
        i = r(38959);
      var s, c;
      (t.LAST_PASS_SECURE_NOTE_URL = "http://sn"),
        (function (e) {
          (e.BankAccountType = "Bank Account"), (e.PaymentCardType = "Credit Card");
        })(t.LastPassNoteType || (t.LastPassNoteType = {})),
        (t.LPNoteTypeField = { NoteType: "NoteType" }),
        (function (e) {
          (e.BankName = "Bank Name"),
            (e.AccountType = "Account Type"),
            (e.RoutingNumber = "Routing Number"),
            (e.AccountNumber = "Account Number"),
            (e.SWIFTCode = "SWIFT Code"),
            (e.IBANNumber = "IBAN Number"),
            (e.Pin = "Pin"),
            (e.BranchAddress = "Branch Address"),
            (e.BranchPhone = "BranchPhone"),
            (e.Notes = "Notes");
        })(s || (s = {})),
        (function (e) {
          (e.NameOnCard = "Name on Card"),
            (e.Type = "Type"),
            (e.Number = "Number"),
            (e.SecurityCode = "Security Code"),
            (e.StartDate = "Start Date"),
            (e.ExpirationDate = "Expiration Date"),
            (e.Notes = "Notes"),
            (e.Language = "Language");
        })(c || (c = {}));
      t.parseLastPassSecureNote = (e) => {
        const r = {};
        try {
          switch (
            (e.split("\n").forEach((e) => {
              const [t, a] = e.split(":");
              r[t] = a;
            }),
            r.NoteType)
          ) {
            case "Bank Account":
              return {
                type: "Bank Account",
                data: {
                  BankAccountName: r["Bank Name"],
                  BankAccountOwner: "",
                  BankAccountIBAN: r["IBAN Number"] ? r["IBAN Number"] : r["Account Number"],
                  BankAccountBIC: r["SWIFT Code"] ? r["SWIFT Code"] : r["Routing Number"],
                  BankAccountBank: "",
                  kwType: o.DataModelType.KWBankStatement
                }
              };
            case "Credit Card": {
              const e = r["Expiration Date"];
              let n, i;
              if (e) {
                const [t, r] = e.split(",");
                (n = `${(0, a.getMonth)(new Date(`${t} 1`)) + 1}`), (n = n.length <= 2 ? n : ""), (i = 4 !== r.length || isNaN(r) ? "" : r);
              }
              const s = {
                CardNumber: r.Number,
                OwnerName: r["Name on Card"],
                SecurityCode: r["Security Code"],
                ExpireMonth: n,
                ExpireYear: i,
                CCNote: r.Notes,
                kwType: o.DataModelType.KWPaymentMean_creditCard
              };
              delete r[t.LPNoteTypeField.NoteType],
                delete r["Expiration Date"],
                delete r.Language,
                (r["Payment Type"] = r.Type),
                delete r[t.LPNoteTypeField.NoteType];
              const c = Object.keys(s),
                l = Object.values(s);
              return (
                Object.keys(r).forEach((e) => {
                  (c.includes(e) || l.includes(r[e])) && delete r[e];
                }),
                { type: "Credit Card", data: { ...r, ...s } }
              );
            }
            default:
              return null;
          }
        } catch {
          return null;
        }
      };
      t.processAndPushLastPassNote = (e, r, a, o, s) => {
        if (e.url?.includes(t.LAST_PASS_SECURE_NOTE_URL)) {
          delete e.url;
          const c = (0, t.parseLastPassSecureNote)(e.extra),
            l =
              "Bank Account" === c?.type
                ? n.BANK_ACCOUNT_HEADERS
                : "Credit Card" === c?.type
                ? n.PAYMENT_CARD_HEADERS
                : n.SECURE_NOTES_HEADERS;
          switch (
            (Object.keys(c?.data ?? {}).forEach((e) => {
              const t = Object.keys(l).find((t) => l[t].has(e.toLocaleLowerCase()));
              !s.has(e) && e && s.set(e, { original: e, matched: t ?? "" });
            }),
            c?.type)
          ) {
            case "Bank Account": {
              const t = { baseDataModel: (0, i.buildBankAccountObj)(c.data, r, s), rawData: e };
              return void o.bankAccounts.push(t);
            }
            case "Credit Card": {
              const t = { baseDataModel: (0, i.buildPaymentCardObj)(c.data, r, s, a), rawData: e };
              return void o.paymentCards.push(t);
            }
            default: {
              const t = { baseDataModel: (0, i.buildNoteObj)(e, r, s), rawData: e };
              return void o.notes.push(t);
            }
          }
        }
      };
      t.itemTypeProcessorForLastPass = (e) => {
        if (e.url?.includes(t.LAST_PASS_SECURE_NOTE_URL)) {
          const r = e.extra.split("\n");
          let a = "";
          for (let e = 0; e < r.length; e++) {
            const [o, n] = r[e] ? r[e].split(":") : [];
            o === t.LPNoteTypeField.NoteType && (a = n);
          }
          switch (a) {
            case "Bank Account":
              return o.SupportedVaultTypes.BANK_ACCOUNT;
            case "Credit Card":
              return o.SupportedVaultTypes.PAYMENT_CARD;
            default:
              return o.SupportedVaultTypes.NOTE;
          }
        }
        return null;
      };
      t.fieldProcessorForLastPass = (e, t) => {
        switch (e) {
          case "fav":
            if (!t || t.includes("0")) return null;
            break;
          case "grouping":
            if (!t || t.includes("(none)")) return null;
        }
        return t;
      };
    },
    99474: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getImportablePersonalData = t.parseCSV = void 0);
      const a = r(32626),
        o = r(21178),
        n = r(92522),
        i = r(85803),
        s = r(38959),
        c = r(10770);
      function l(e, t, r, a) {
        const o = { baseDataModel: (0, s.buildNoteObj)(e, t, r), rawData: e };
        a.notes.push(o);
      }
      function d(e, t, r, a) {
        const o = { baseDataModel: (0, s.buildBankAccountObj)(t, e, a), rawData: t };
        r.bankAccounts.push(o);
      }
      function u(e, t, r, a, o) {
        const n = { baseDataModel: (0, s.buildPaymentCardObj)(t, e, o, r), rawData: t };
        a.paymentCards.push(n);
      }
      const p = "otpauth://totp/?secret=",
        S = /^otpauth:\/\/.*/;
      function m(e, t, r, n, i) {
        const l = { baseDataModel: (0, s.buildCredentialObj)(e, t, r, n), rawData: e };
        l.baseDataModel.Category &&
          (t === a.ImportSource["1Password"] && (l.baseDataModel.Category = l.baseDataModel.Category.replaceAll(";", ",")),
          l.baseDataModel.Category.split(",").forEach((t) => {
            const r = i.collections.find((e) => e.baseDataModel.Name === t);
            if (r) r.baseDataModel.VaultItems.push({ Id: l.baseDataModel.Id, Type: l.baseDataModel.kwType });
            else {
              const r = { Name: t, baseDataModel: (0, c.getNewCollection)({ name: t, vaultItems: [], spaceId: "" }), rawData: e };
              i.collections.push(r),
                (r.baseDataModel.VaultItems = [...r.baseDataModel.VaultItems, { Id: l.baseDataModel.Id, Type: l.baseDataModel.kwType }]);
            }
          })),
          l.baseDataModel.OtpUrl && !S.test(l.baseDataModel.OtpUrl) && (l.baseDataModel.OtpUrl = p + l.baseDataModel.OtpUrl);
        const d = new o.ParsedURL(l.baseDataModel.Url);
        l.baseDataModel.Url && d.isUrlValid() && (l.baseDataModel.Url = d.getPIIStrippedURL()), i.credentials.push(l);
      }
      const g = (e, t, r, o) => {
          const n = { credentials: [], notes: [], bankAccounts: [], paymentCards: [], collections: [] },
            c = new Map();
          for (let p = 0; p < e.length; p++) {
            const S = e[p].reduce((e, r, a) => ((e[t[a]] = r), e), {}),
              g = (0, s.determineBestItemType)(S, r),
              y = (0, s.getHeadersAndIndexMap)(t, g),
              h = new Map();
            if (
              (y.forEach((e) => {
                (!c.has(e.original) || (!c.get(e.original)?.matched && e.matched)) && c.set(e.original, e),
                  e.matched && h.set(e.original, e);
              }),
              [a.SupportedVaultTypes.BANK_ACCOUNT, a.SupportedVaultTypes.NOTE, a.SupportedVaultTypes.PAYMENT_CARD].includes(g) &&
                r === a.ImportSource.Lastpass)
            )
              (0, i.processAndPushLastPassNote)(S, r, o, n, h);
            else
              switch (g) {
                case a.SupportedVaultTypes.CREDENTIAL:
                  m(S, r, h, o, n);
                  break;
                case a.SupportedVaultTypes.PAYMENT_CARD:
                  u(r, S, o, n, h);
                  break;
                case a.SupportedVaultTypes.BANK_ACCOUNT:
                  d(r, S, n, h);
                  break;
                case a.SupportedVaultTypes.NOTE:
                default:
                  l(S, r, h, n);
              }
          }
          return { ...n, headers: [...c.values()] };
        },
        y = (e, t) => {
          const r = /(?=["'])(?:"[^"\\]*(?:\\[\s\S][^"\\]*)*"|'[^'\\]*(?:\\[\s\S][^'\\]*)*')|,,|,\n/gi;
          let a;
          for (; (a = r.exec(e.trim())); ) {
            const e = ",," === a[0] ? a.index : a.index - 1;
            a.input[e] && "," !== a.input[e] && t.push([]),
              ",\n" !== a[0] &&
                t[t.length - 1].push(a[0].replace(new RegExp(/^"|"$|"(?=,")|(?<=",)"/gi), "").replace(new RegExp(/^,,$/gi), ""));
          }
        },
        h = (e, t) => {
          const r = /(,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^,\r\n]*))/gi;
          let a;
          for (; (a = r.exec(e.trim())); )
            a[1].length && "," !== a[1] && t.push([]),
              t[t.length - 1].push(void 0 !== a[2] ? a[2].replace(new RegExp('^"|"$|"(?=,")|(?<=",)"', "gi"), '"') : a[3]);
        };
      function v(e, t, r) {
        const o = { credentials: [], notes: [], paymentCards: [], bankAccounts: [], headers: [], collections: [] };
        if (!e) return o;
        const { csvHead: i, csvRows: c } = (function (e, t) {
            const r = [[]];
            if ((e.startsWith('"') ? y(e, r) : h(e, r), t === a.ImportSource.Keeper)) {
              const e = r.reduce((e, t) => Math.max(e, t.length), 0);
              r.unshift((0, n.getKeeperImportHeaders)(e));
            }
            const [o, ...i] = r;
            return { csvHead: o, csvRows: i };
          })(e, t),
          l = i.map((e) => e.toLowerCase());
        return c.length && (0, s.areHeadersValid)(l) ? g(c, l, t, r) : o;
      }
      t.parseCSV = v;
      t.getImportablePersonalData = (e, t) => {
        const r = v(e.data, e.importSource, t),
          { headers: a, ...o } = r;
        return { headers: a, items: Object.values(o).flat() };
      };
    },
    32814: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSaveEventsFromDash = t.getXmlData = t.checkPassword = t.parseDashData = void 0);
      const a = r(32626),
        o = r(80469),
        n = r(53628),
        i = r(56668),
        s = r(72365),
        c = r(61797),
        l = r(95623),
        d = r(70252),
        u = r(78320),
        p = (e) => new RegExp(`-+\\s+${e} BEGIN\\s+-+\n(.+)\n-+\\s+${e} END`);
      t.parseDashData = (e) => {
        const [t, r] = ["Id", "Data"]
          .map(p)
          .map((t) => t.exec(e))
          .map((e) => e?.[1]);
        return { ids: t?.split(";") ?? [], encryptedData: r ?? "" };
      };
      t.checkPassword = async (e, t, r) => {
        const a = (0, s.makeDataEncryptorService)(e);
        a.setInstance({ raw: r }, "");
        try {
          return (0, i.deflatedUtf8ToUtf16)(await a.getInstance().decrypt(t.encryptedData)), !0;
        } catch (e) {
          const r = `[import] - checkPassword: ${e}, ${t.encryptedData}`,
            a = new Error(r);
          (0, d.sendExceptionLog)({ error: a }), (0, l.logError)(a);
        }
        return !1;
      };
      t.getXmlData = async (e, t, r) => {
        const a = (0, s.makeDataEncryptorService)(e);
        a.setInstance({ raw: r }, "");
        const o = await a.getInstance().decrypt(t.encryptedData),
          n = (0, i.deflatedUtf8ToUtf16)(o),
          l = await (0, c.parseDashlaneXml)(n);
        return Array.isArray(l) ? l : [l];
      };
      t.getSaveEventsFromDash = async (e, r, i) => {
        const s = {},
          c = (await (0, t.getXmlData)(e, r, i))
            .map((e) => (0, n.fixPersonalDataItemFromExternalSource)((0, o.fixKwType)(e)))
            .map((e) => {
              const t = (0, u.generateItemUuid)();
              return (s[e.Id] = t), { ...e, Id: t };
            });
        return (
          c.forEach((e) => {
            (0, a.isCollection)(e) &&
              e.VaultItems.forEach((e) => {
                e.Id = s[e.Id] ?? e.Id;
              });
          }),
          c
        );
      };
    },
    97437: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TYPE_MAPPINGS =
          t.TYPE_HEADERS =
          t.HEADER_MAPPINGS =
          t.BANK_ACCOUNT_HEADERS =
          t.PAYMENT_CARD_HEADERS =
          t.CREDENTIAL_HEADERS =
          t.SECURE_NOTES_HEADERS =
            void 0);
      const a = r(32626);
      (t.SECURE_NOTES_HEADERS = { Title: new Set(["title", "name"]), Content: new Set(["note", "notes", "comments", "extra", "content"]) }),
        (t.CREDENTIAL_HEADERS = {
          Title: new Set(["title", "name", "account", "site name"]),
          Login: new Set(["username", "login", "login_username", "login name", "user name"]),
          Url: new Set(["url", "website", "domain", "login_url", "login url", "login_uri", "web site", "website address"]),
          Email: new Set(["email"]),
          Password: new Set(["password", "login_password"]),
          OtpUrl: new Set(["first one-time password", "login_otp", "login_totp", "otp", "otpauth", "otpurl", "otpsecret", "totp"]),
          Note: new Set(["note", "notes", "comments", "extra"]),
          Category: new Set(["category", "grouping", "tags", "folders", "folder", "tag", "collection", "collections"])
        }),
        (t.PAYMENT_CARD_HEADERS = {
          CardNumber: new Set(["number", "cardnumber", "cc_number"]),
          CCNote: new Set(["notes", "ccnote", "note"]),
          OwnerName: new Set(["name on card", "ownername", "account_name"]),
          SecurityCode: new Set(["security code", "securitycode", "code"]),
          ExpireMonth: new Set(["exp_month", "expiremonth", "expiration_month"]),
          ExpireYear: new Set(["exp_year", "expireyear", "expiration_year"]),
          Name: new Set(["name"])
        }),
        (t.BANK_ACCOUNT_HEADERS = {
          BankAccountName: new Set(["bank name", "bankaccountname", "account_name"]),
          BankAccountIBAN: new Set(["iban number", "account number", "account_number", "bankaccountiban"]),
          BankAccountBIC: new Set(["swift code", "routing number", "routing_number", "bankaccountbic"]),
          BankAccountOwner: new Set(["account_holder"]),
          BankAccountBank: new Set(["issuing_bank"]),
          LocaleFormat: new Set(["country"])
        }),
        (t.HEADER_MAPPINGS = {
          [a.SupportedVaultTypes.CREDENTIAL]: t.CREDENTIAL_HEADERS,
          [a.SupportedVaultTypes.NOTE]: t.SECURE_NOTES_HEADERS,
          [a.SupportedVaultTypes.PAYMENT_CARD]: t.PAYMENT_CARD_HEADERS,
          [a.SupportedVaultTypes.BANK_ACCOUNT]: t.BANK_ACCOUNT_HEADERS,
          [a.SupportedVaultTypes.COLLECTION]: {}
        }),
        (t.TYPE_HEADERS = new Set(["type", "item type"])),
        (t.TYPE_MAPPINGS = {
          [a.SupportedVaultTypes.NOTE]: ["securenote", "note", "secure note"],
          [a.SupportedVaultTypes.CREDENTIAL]: ["password", "login", "credential"],
          [a.SupportedVaultTypes.BANK_ACCOUNT]: ["bankaccount", "bank"],
          [a.SupportedVaultTypes.PAYMENT_CARD]: ["paymentcard", "payment_card", "creditcard", "debitcard"],
          [a.SupportedVaultTypes.COLLECTION]: []
        });
    },
    38959: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.areHeadersValid =
          t.determineBestItemType =
          t.getHeadersAndIndexMap =
          t.buildCredentialObj =
          t.buildBankAccountObj =
          t.buildPaymentCardObj =
          t.buildNoteObj =
          t.reduceVaultObj =
          t.constructBankAccount =
          t.constructPaymentCard =
          t.constructSecureNote =
          t.constructCredentialContent =
          t.formatCredentialData =
          t.buildNoteContent =
            void 0);
      const a = r(32626),
        o = r(21178),
        n = r(9763),
        i = r(23439),
        s = r(35834),
        c = r(49293),
        l = r(8639),
        d = r(97437),
        u = r(62754),
        p = r(89586),
        S = r(92522),
        m = (e, t) => {
          for (const r in e) t.includes(r) || delete e[r];
        };
      t.buildNoteContent = (e, t, r, o, n) => {
        let i = "";
        if ((0, a.isCredential)(e)) i = e.Note ?? "";
        else if ((0, a.isNote)(e)) e.Note && ((e.Content = e.Note), delete e.Note), (i = e.Content);
        else {
          if (!(0, a.isPaymentCard)(e)) return;
          i = e.CCNote;
        }
        const s = !!i;
        let c = !1;
        const l = { ...e, ...r };
        for (const e in l)
          if (!o.includes(e) && !t.get(e)?.matched && l[e]) {
            if (n ? n(e.toLocaleLowerCase(), l[e]) : l[e]) {
              (i += `${s && !c ? "\n\n\n" : "\n"}${e}: ${l[e]}`), (c = !0);
            }
          }
        (i = i.trim()),
          (0, a.isCredential)(e) ? (e.Note = i) : (0, a.isNote)(e) ? (e.Content = i) : (0, a.isPaymentCard)(e) && (e.CCNote = i);
      };
      t.formatCredentialData = (e) => {
        let t = e.Url?.trim() ?? "";
        const r = e.Url?.split(",") ?? [""];
        if (r.length > 1 && new o.ParsedURL(r[0]).isUrlValid() && r.slice(1).some((e) => new o.ParsedURL(e).isUrlValid())) {
          const [r, ...n] = e.Url?.split(",") ?? [];
          (t = r.trim()),
            (e.LinkedServices = { associated_domains: [] }),
            n.forEach((t) => {
              const r = new o.ParsedURL(t.trim());
              r.isUrlValid() &&
                e.LinkedServices?.associated_domains.push({ domain: r.getPIIStrippedURL(), source: a.LinkedWebsiteSource.Manual });
            });
        }
        const n = new o.ParsedURL(t);
        e.Url = n.isUrlValid() ? t : "";
        const i = new o.ParsedURL(e.Title?.trim());
        (e.Title && !i.isUrlValid()) || (e.Title = n.getRootDomain() ?? "");
      };
      t.constructCredentialContent = (e, t, r) => ({
        Title: "",
        Email: "",
        Login: "",
        Password: "",
        Note: "",
        ...e,
        ...(0, n.createBaseCredentialModel)(t),
        ...(0, i.getUrlFields)(e.Url ?? "", !0),
        SpaceId: r ?? "",
        SubdomainOnly: !1,
        SecondaryLogin: "",
        Category: "",
        AutoLogin: !0,
        AutoProtected: !1,
        Strength: 0
      });
      t.constructSecureNote = (e, t) =>
        (0, c.noteFormatter)({
          content: e.Content || "",
          title: e.Title || "",
          category: "",
          secured: !1,
          type: a.NoteTypes[0],
          spaceId: t || ""
        });
      t.constructPaymentCard = (e, t) =>
        (0, s.getNewPaymentCard)({
          ownerName: e.OwnerName ?? "",
          cardName: e.Name ?? "",
          cardNumber: e.CardNumber ?? "",
          securityCode: e.SecurityCode ?? "",
          expireMonth: e.ExpireMonth ?? "",
          expireYear: e.ExpireYear ?? "",
          ...e,
          spaceId: t
        });
      t.constructBankAccount = (e, t, r) =>
        (0, l.getNewBankAccount)({
          name: e.BankAccountName ?? "",
          owner: e.BankAccountOwner ?? "",
          IBAN: e.BankAccountIBAN ?? "",
          BIC: e.BankAccountBIC ?? "",
          bank: e.BankAccountBank ?? "",
          country: t,
          ...e,
          spaceId: r ?? ""
        });
      t.reduceVaultObj = (e, t, r, a, o) =>
        Object.entries(e).reduce(
          (e, [t, o]) => {
            const n = a.get(t)?.matched;
            return a.has(t) && n && (e[n] = r ? r(t, "string" == typeof o ? o : "") : o), e;
          },
          t({}, o)
        );
      t.buildNoteObj = (e, r, a) => {
        const o = Object.keys({
            Title: "",
            Content: "",
            Category: "",
            Secured: "",
            Type: "",
            LocaleFormat: "",
            AnonId: "",
            SpaceId: "",
            kwType: "",
            Id: "",
            LastBackupTime: "",
            CreationDate: "",
            UpdateDate: "",
            limitedPermissions: "",
            CreationDatetime: "",
            UserModificationDatetime: "",
            LastUse: "",
            Attachments: ""
          }),
          n = (0, p.getFieldLevelProcessor)(r),
          i = (0, t.reduceVaultObj)(e, t.constructSecureNote, n, a);
        return (0, t.buildNoteContent)(i, a, e, o, n), m(i, o), i;
      };
      t.buildPaymentCardObj = (e, r, a, o) => {
        const n = Object.keys({
            Name: "",
            CardNumber: "",
            CardNumberLastDigits: "",
            OwnerName: "",
            SecurityCode: "",
            ExpireMonth: "",
            ExpireYear: "",
            StartMonth: "",
            StartYear: "",
            IssueNumber: "",
            Color: "",
            Bank: "",
            CCNote: "",
            Type: "",
            LocaleFormat: "",
            AnonId: "",
            SpaceId: "",
            kwType: "",
            Id: "",
            LastBackupTime: "",
            CreationDatetime: "",
            UserModificationDatetime: "",
            LastUse: "",
            Attachments: ""
          }),
          i = (0, p.getFieldLevelProcessor)(r),
          s = (0, t.reduceVaultObj)(e, t.constructPaymentCard, i, a, o);
        return (0, t.buildNoteContent)(s, a, e, n, i), m(s, n), s;
      };
      t.buildBankAccountObj = (e, r, a) => {
        const o = Object.keys({
            BankAccountName: "",
            BankAccountOwner: "",
            BankAccountIBAN: "",
            BankAccountBIC: "",
            BankAccountBank: "",
            LocaleFormat: "",
            AnonId: "",
            SpaceId: "",
            kwType: "",
            Id: "",
            LastBackupTime: "",
            CreationDatetime: "",
            UserModificationDatetime: "",
            LastUse: "",
            Attachments: ""
          }),
          n = (0, p.getFieldLevelProcessor)(r),
          i = (0, t.reduceVaultObj)(e, t.constructBankAccount, n, a);
        return m(i, o), i;
      };
      t.buildCredentialObj = (e, r, o, n) => {
        const i = Object.keys({
            Title: "",
            Email: "",
            Login: "",
            SecondaryLogin: "",
            Password: "",
            Strength: "",
            Category: "",
            Url: "",
            UseFixedUrl: "",
            TrustedUrlGroup: "",
            LocaleFormat: "",
            AnonId: "",
            SpaceId: "",
            kwType: "",
            Id: "",
            LastBackupTime: "",
            CreationDatetime: "",
            LastUse: "",
            Note: "",
            SubdomainOnly: "",
            AutoLogin: "",
            AutoProtected: "",
            OtpSecret: "",
            UserSelectedUrl: "",
            Checked: "",
            Status: "",
            SharedObject: "",
            ModificationDatetime: "",
            NumberUse: "",
            Type: "",
            Server: "",
            Port: "",
            Alias: "",
            SID: "",
            ConnectionOptions: "",
            domainIcon: "",
            limitedPermissions: "",
            LinkedServices: "",
            UserModificationDatetime: "",
            Attachments: "",
            OtpUrl: ""
          }),
          s = (0, p.getFieldLevelProcessor)(r),
          c = (0, t.reduceVaultObj)(e, t.constructCredentialContent, s, o, n);
        if (r === a.ImportSource.Keeper) (0, S.parseCustomKeeperCredentialData)(e, c);
        return (0, t.buildNoteContent)(c, o, e, i, s), m(c, i), (0, t.formatCredentialData)(c), c;
      };
      t.getHeadersAndIndexMap = (e, t) => {
        const r = ((e, t) => {
            const r = Object.keys(t),
              a = {};
            return (
              e.forEach((e, o) => {
                const n = r.find((r) => t[r].has(e));
                a[n ?? e] = { supported: !!n, index: o };
              }),
              a
            );
          })(e, d.HEADER_MAPPINGS[t]),
          a = Object.entries(r).reduce((e, [t, r]) => ({ ...e, [r.index]: r.supported ? t : "" }), {});
        return e.map((e, t) => ({ original: e, matched: a[t] ?? "" }));
      };
      t.determineBestItemType = (e, t) => {
        let r = null;
        const o = (0, u.getItemTypeProcessor)(t);
        if (o) {
          r = o(e);
        }
        if (!r) {
          for (const t in e)
            if (
              d.TYPE_HEADERS.has(t) &&
              ((r = Object.keys(d.TYPE_MAPPINGS).find((r) => d.TYPE_MAPPINGS[r]?.includes(e[t].toLocaleLowerCase()))), r)
            )
              break;
          if (!r) {
            const t = Object.keys(e).map((e) => e.toLocaleLowerCase()),
              a = {};
            Object.entries(d.HEADER_MAPPINGS).forEach(([r, o]) => {
              Object.values(o).forEach((o) => {
                a[r] = (a[r] || 0) + [...o].filter((r) => t.includes(r) && e[r]).length;
              });
            });
            r = Object.keys(a).reduce((e, t) => (a[e] > a[t] ? e : t));
          }
        }
        return r || a.SupportedVaultTypes.NOTE;
      };
      t.areHeadersValid = (e) => {
        if (!e.length) return !1;
        const t = Object.values(d.HEADER_MAPPINGS);
        return Object.values(t)
          .reduce((e, t) => [...e, ...Object.values(t).map((e) => Array.from(e))], [])
          .flat()
          .some((t) => e.includes(t));
      };
    },
    61655: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notifyNewImportPersonalDataStateAction = t.NOTIFY_NEW_PERSONAL_DATA_STATE = void 0),
        (t.NOTIFY_NEW_PERSONAL_DATA_STATE = "NOTIFY_NEW_PERSONAL_DATA_STATE");
      t.notifyNewImportPersonalDataStateAction = (e) => ({ type: t.NOTIFY_NEW_PERSONAL_DATA_STATE, newState: e });
    },
    36784: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ImportDataStateReducer = void 0);
      const a = r(32626),
        o = r(61655);
      t.ImportDataStateReducer = (e, t) =>
        t.type === o.NOTIFY_NEW_PERSONAL_DATA_STATE
          ? { state: t.newState }
          : e ?? { state: { status: a.ImportPersonalDataStateType.Idle } };
    },
    15171: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateLinkedWebsitesHandler = t.areStringListsEquivalent = void 0);
      const a = r(32626),
        o = r(95623),
        n = r(70252),
        i = r(19736),
        s = r(88779),
        c = r(6205),
        l = (e) => [...new Set(e)].filter(Boolean);
      t.areStringListsEquivalent = (e, t) => e.length === t.length && e.sort().join("") === t.sort().join("");
      const d = (e, t, r) => {
        var o;
        return [
          ...(e.LinkedServices?.associated_domains ?? []).filter((e) => r.includes(e.domain)),
          ...((o = t), r.filter((e) => !o.includes(e)).map((e) => ({ domain: e, source: a.LinkedWebsiteSource.Manual })))
        ];
      };
      t.updateLinkedWebsitesHandler = async function (e, r) {
        const { storeService: u, sessionService: p, eventLoggerService: S, applicationModulesAccess: m } = e,
          g = u.getState(),
          y = (0, i.credentialSelector)(g, r.credentialId),
          h = (0, c.getUserAddedLinkedWebsiteDomains)(y),
          v = l(r.updatedLinkedWebsitesDomainList);
        if ((0, t.areStringListsEquivalent)(h, v)) return { success: !0 };
        const f = 0 === v.length ? [] : d(y, h, v),
          w = { ...y.LinkedServices, associated_domains: f },
          A = { id: r.credentialId, update: { linkedServices: w } };
        try {
          return (
            await (0, s.updateCredential)({ storeService: u, sessionService: p, eventLoggerService: S, applicationModulesAccess: m }, A),
            { success: !0 }
          );
        } catch (e) {
          const t = new Error(`[LinkedWebsites] - updateLinkedWebsitesHandler: ${e}`);
          return (
            (0, o.logError)(t),
            (0, n.sendExceptionLog)({ error: t }),
            { success: !1, error: a.UpdateLinkedWebsitesError.CredentialUpdateError }
          );
        }
      };
    },
    6205: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUserAddedLinkedWebsitesRootDomains =
          t.getUserAddedLinkedWebsiteDomains =
          t.getDashlaneDefinedLinkedWebsites =
          t.populateDashlaneDefinedLinkedWebsitesIndex =
          t.reduceLinkedDomainsLists =
          t.fromObjectToArray =
            void 0);
      const a = r(68925),
        o = r(32089),
        n = r(3991),
        i = r(21178);
      function s(e) {
        const t = [];
        return (
          Object.keys(e).forEach((r) => {
            t.push([r].concat(e[r]));
          }),
          t
        );
      }
      t.fromObjectToArray = s;
      const c = (e, t) => {
        const r = [],
          a = [];
        e.forEach((e) => {
          return (o = t), e.some((e) => o.includes(e)) ? r.push(e) : a.push(e);
          var o;
        });
        const o = r.concat([t]).flat();
        return a.concat([o]);
      };
      function l(e) {
        const t = {};
        return (
          e.forEach((e) => {
            e.forEach((r) => {
              t[r] = e;
            });
          }),
          t
        );
      }
      (t.reduceLinkedDomainsLists = (e, t, r) => e.concat(t, r).reduce(c, [])), (t.populateDashlaneDefinedLinkedWebsitesIndex = l);
      const d = l((0, t.reduceLinkedDomainsLists)(a, s(n), s(o)).map((e) => [...new Set(e)]));
      t.getDashlaneDefinedLinkedWebsites = function (e) {
        const t = new i.ParsedURL(e).getRootDomain();
        return t ? d[t] || [t] : [];
      };
      t.getUserAddedLinkedWebsiteDomains = (e) => (e.LinkedServices?.associated_domains ?? []).map((e) => e.domain).filter(Boolean) ?? [];
      t.getUserAddedLinkedWebsitesRootDomains = (e) =>
        (0, t.getUserAddedLinkedWebsiteDomains)(e).map((e) => new i.ParsedURL(e).getRootDomain());
    },
    81911: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(18665),
        o = r(85569),
        n = r(37215);
      t.config = {
        commands: {
          addPasskey: { handler: n.addPasskeyHandler },
          updatePasskey: { handler: n.updatePasskeyHandler },
          deletePasskey: { handler: n.deletePasskeyHandler }
        },
        queries: {
          getPasskey: { selector: a.viewedPasskeySelector },
          getPasskeys: { selector: a.viewedQueriedPasskeysSelector },
          getPasskeysForDomain: { selector: a.viewedQueriedPasskeysForDomainSelector }
        },
        liveQueries: { livePasskey: { operator: o.getPasskey$ }, livePasskeys: { operator: o.passkeys$ } }
      };
    },
    70863: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addPasskeyHandler = t.getNewPasskey = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(23136),
        i = r(48313),
        s = r(53),
        c = r(78320),
        l = r(70252),
        d = r(13675);
      function u(e) {
        const t = (0, s.getUnixTimestamp)();
        return {
          kwType: "KWPasskey",
          Id: (0, c.generateItemUuid)(),
          LastBackupTime: 0,
          LastUse: t,
          LocaleFormat: o.Country.UNIVERSAL,
          AnonId: (0, c.generateItemUuid)(),
          SpaceId: e.spaceId,
          CreationDatetime: t,
          UserModificationDatetime: t,
          Counter: 0,
          CredentialId: e.credentialId,
          ItemName: e.itemName,
          KeyAlgorithm: e.keyAlgorithm,
          Note: e.note,
          PrivateKey: e.privateKey,
          RpId: e.rpId,
          RpName: e.rpName,
          UserDisplayName: e.userDisplayName,
          UserHandle: e.userHandle
        };
      }
      (t.getNewPasskey = u),
        (t.addPasskeyHandler = async function (e, t) {
          try {
            const r = await (async function ({ storeService: e, sessionService: t }, r) {
              if (!e.isAuthenticated()) throw new Error("No session available to savePasskey");
              const a = u((0, d.sanitizeInputPersonalData)(r));
              if (!a.SpaceId) {
                const t = await (0, n.getDefaultSpaceId)(e);
                a.SpaceId = t;
              }
              return e.dispatch((0, i.savePersonalDataItem)(a, a.kwType)), t.getInstance().user.persistPersonalData(), a.Id;
            })(e, t);
            return (0, n.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save), { success: !0, id: r };
          } catch (e) {
            return (0, l.sendExceptionLog)({ error: e }), { success: !1 };
          }
        });
    },
    20308: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deletePasskeyHandler = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(18665),
        i = r(23136),
        s = r(45291),
        c = r(70252),
        l = ({ storeService: e }, t) => {
          const r = e.getState();
          try {
            if (!e.isAuthenticated()) return { success: !1, error: { code: o.DeletePasskeyErrorCode.NOT_AUTHORIZED } };
            const a = (0, n.passkeySelector)(r, t);
            if (!a) return { success: !1, error: { code: o.DeletePasskeyErrorCode.NOT_FOUND } };
            const i = (0, s.removePersonalItem)(a.kwType, a.Id, null);
            return e.dispatch(i), { success: !0 };
          } catch (e) {
            const t = new Error(`[Passkeys] - deletePasskey: ${e}`);
            return (0, c.sendExceptionLog)({ error: t }), { success: !1, error: { code: o.DeletePasskeyErrorCode.INTERNAL_ERROR } };
          }
        };
      t.deletePasskeyHandler = function (e, { id: t }) {
        const r = l(e, t);
        if (r.success) {
          (0, i.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save);
        }
        return Promise.resolve(r);
      };
    },
    37215: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(70863), t), o(r(89979), t), o(r(20308), t);
    },
    89979: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.updatePasskeyHandler = t.getUpdatedPasskey = t.getPasskeyModifiedProperties = void 0);
      const a = r(93039),
        o = r(18665),
        n = r(23136),
        i = r(48313),
        s = r(53),
        c = r(70252),
        l = r(13675);
      function d(e, r) {
        const a = (0, o.passkeySelector)(e, r.id);
        if (!a) throw new Error("[updatePasskey]: unable to find passkey to update.");
        return { ...a, ...(0, t.getPasskeyModifiedProperties)(r, a) };
      }
      (t.getPasskeyModifiedProperties = (e, t) => {
        const r = (0, s.getUnixTimestamp)();
        return {
          Counter: e.counter ?? t.Counter,
          Note: e.note ?? t.Note,
          SpaceId: e.spaceId ?? t.SpaceId,
          ItemName: e.itemName ?? t.ItemName,
          LastUse: r
        };
      }),
        (t.getUpdatedPasskey = d),
        (t.updatePasskeyHandler = function (e, t) {
          try {
            const r = (function ({ storeService: e, sessionService: t }, r) {
              if (!e.isAuthenticated()) throw new Error("No session available to updatePasskey");
              const a = d(e.getState(), (0, l.sanitizeInputPersonalData)(r));
              return e.dispatch((0, i.savePersonalDataItem)(a, a.kwType)), t.getInstance().user.persistPersonalData(), { success: !0 };
            })(e, t);
            if (!r.success) return Promise.resolve(r);
            return (
              (0, n.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save),
              Promise.resolve({ success: !0 })
            );
          } catch (e) {
            return (0, c.sendExceptionLog)({ error: e }), Promise.resolve({ success: !1 });
          }
        });
    },
    85569: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPasskey$ = t.passkeys$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(18665);
      t.passkeys$ = (0, n.getLivePersonalInfo)(i.getLivePasskeysSelector);
      t.getPasskey$ = (e) => {
        const t = (0, i.getViewedPasskeySelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    62900: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPasskeyMappers = void 0);
      const a = r(83539);
      t.getPasskeyMappers = () => ({
        id: (e) => e.Id,
        itemName: (e) => e.ItemName,
        lastUse: a.lastUseMapper,
        rpId: (e) => e.RpId,
        spaceId: (e) => e.SpaceId,
        userDisplayName: (e) => e.UserDisplayName
      });
    },
    96664: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.passkeyMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234);
      (t.searchGetters = [(0, o.stringProp)("RpId"), (0, o.stringProp)("RpName"), (0, o.stringProp)("CredentialId")]),
        (t.passkeyMatch = (0, a.match)(t.searchGetters));
    },
    18665: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.viewedQueriedPasskeysForDomainSelector =
          t.queryPasskeysByDomainSelector =
          t.getPasskeysByFullDomainSelector =
          t.getViewedPasskeySelector =
          t.viewedPasskeySelector =
          t.getLivePasskeysSelector =
          t.viewedQueriedPasskeysSelector =
          t.queryPasskeysSelector =
          t.passkeyMappersSelector =
          t.passkeySelector =
          t.passkeysSelector =
            void 0);
      const a = r(16516),
        o = r(21178),
        n = r(96664),
        i = r(40200),
        s = r(24589),
        c = r(63566),
        l = r(97006),
        d = r(49551),
        u = r(32034),
        p = r(62900),
        S = (e) => e.userSession.personalData.passkeys;
      t.passkeysSelector = S;
      t.passkeySelector = (e, t) => {
        const r = S(e);
        return (0, d.findDataModelObject)(t, r);
      };
      t.passkeyMappersSelector = (e) => (0, p.getPasskeyMappers)();
      const m = () => n.passkeyMatch;
      (t.queryPasskeysSelector = (0, s.getQuerySelector)(t.passkeysSelector, m, t.passkeyMappersSelector)),
        (t.viewedQueriedPasskeysSelector = (0, a.compose)((0, c.viewListResults)(i.listView), t.queryPasskeysSelector)),
        (t.getLivePasskeysSelector = (0, l.makeLiveSelectorGetter)(t.passkeysSelector, () => i.listView, m, t.passkeyMappersSelector));
      t.viewedPasskeySelector = (e, r) => {
        const a = (0, t.passkeySelector)(e, r);
        return (0, i.detailView)(a);
      };
      t.getViewedPasskeySelector = (e) => {
        const r = (0, u.createSelector)(t.passkeysSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, u.createSelector)(r, i.detailView);
      };
      t.getPasskeysByFullDomainSelector = (e) =>
        (0, u.createSelector)(t.passkeysSelector, (t) =>
          ((e, t) =>
            e.filter((e) => {
              const r = new o.ParsedURL(e.RpId).getHostname(),
                a = new o.ParsedURL(t).getHostname();
              return a === r || a.endsWith(`.${r}`);
            }))(t, e)
        );
      t.queryPasskeysByDomainSelector = (e) =>
        (0, s.getQuerySelector)((0, t.getPasskeysByFullDomainSelector)(e), m, t.passkeyMappersSelector);
      t.viewedQueriedPasskeysForDomainSelector = (e, r) => {
        const a = (0, t.queryPasskeysByDomainSelector)(r.domain)(e, r);
        return (0, c.viewListResults)(i.listView)(a);
      };
    },
    40200: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.detailView = void 0);
      const a = r(82043),
        o = (e) => ({
          credentialId: e.CredentialId,
          counter: e.Counter,
          itemName: e.ItemName,
          keyAlgorithm: e.KeyAlgorithm,
          note: e.Note,
          privateKey: e.PrivateKey,
          rpId: e.RpId,
          rpName: e.RpName,
          userDisplayName: e.UserDisplayName,
          userHandle: e.UserHandle
        });
      t.detailView = (e) => ({ ...(0, a.dataModelDetailView)(e), ...o(e) });
      t.itemView = (e) => ({ ...(0, a.dataModelItemView)(e), ...o(e) });
      t.listView = (e) => e.map(t.itemView);
    },
    68728: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(83449),
        o = r(47205),
        n = r(58695);
      t.config = {
        commands: { saveGeneratedPassword: { handler: o.saveGeneratedPasswordHandler } },
        queries: {
          getPasswordHistory: { selector: a.viewedQueriedPasswordHistorySelector },
          getPasswordHistoryPage: { selector: a.passwordHistoryPageSelector },
          getPasswordHistoryPaginationToken: { selector: a.passwordHistoryPaginationTokenSelector },
          getHasPasswordHistory: { selector: a.hasPasswordHistorySelector }
        },
        liveQueries: {
          livePasswordHistory: { operator: n.passwordHistory$ },
          livePasswordHistoryBatch: { operator: n.passwordHistoryBatch$ }
        }
      };
    },
    58695: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.passwordHistoryBatch$ = t.passwordHistory$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(83449),
        i = r(55220),
        s = r(35893),
        c = r(33627);
      t.passwordHistory$ = (0, i.getLivePersonalInfo)(n.getLivePasswordHistorySelector);
      t.passwordHistoryBatch$ = (e) => {
        const t = (0, s.parseToken)(e),
          r = (0, n.getViewedPasswordHistoryBatchSelector)(t);
        return (0, a.pipe)((0, o.map)(r), (0, o.distinctUntilChanged)(c.sameBatch));
      };
    },
    87644: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPasswordHistoryMappers = void 0);
      t.getPasswordHistoryMappers = () => ({
        primaryInfo: (e) => e.primaryInfo,
        timestamp: (e) => e.timestamp,
        type: (e) => e.type,
        id: (e) => e.id,
        credentialId: (e) => ("credentialId" in e && e.credentialId) || ""
      });
    },
    25294: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getPasswordHistoryBatch =
          t.viewPasswordHistoryBatch =
          t.getPasswordHistoryFirstToken =
          t.getPasswordHistorySortToken =
          t.getPasswordHistoryFilterToken =
            void 0);
      const a = r(20553),
        o = r(2104),
        n = r(16516),
        i = r(83687),
        s = r(90451);
      t.getPasswordHistoryFilterToken = ({ filterCriteria: e }) => ({ filterCriteria: e || [] });
      t.getPasswordHistorySortToken = ({ sortCriteria: e }) => ({ uniqField: "id", sortCriteria: e || [] });
      t.getPasswordHistoryFirstToken = (e, t, r, o) => (0, a.generateFirstToken)(e, t, r.initialBatchSize || 30, o);
      (t.viewPasswordHistoryBatch = (e, t, r, a) => {
        const n = (0, i.getSharingStatusItem)(t, r),
          c = (0, s.getIcon)(a);
        return (0, o.listView)(n, c, e);
      }),
        (t.getPasswordHistoryBatch = (0, n.curry)((e, t, r) => (0, a.getBatch)(r, e, t)));
    },
    36859: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.passwordHistoryItemMatch = t.searchGettersForGeneratedPassword = t.searchGettersForCredential = void 0);
      const a = r(32626),
        o = r(82234),
        n = r(64455),
        i = r(6205);
      (t.searchGettersForCredential = [
        (0, o.stringProp)("primaryInfo"),
        (0, o.stringProp)("domain"),
        (0, o.stringProp)("email"),
        (0, o.stringProp)("login"),
        (0, o.stringProp)("secondaryLogin"),
        (e) => (0, i.getDashlaneDefinedLinkedWebsites)(e.domain).join(" ")
      ]),
        (t.searchGettersForGeneratedPassword = [(0, o.stringProp)("primaryInfo")]);
      t.passwordHistoryItemMatch = (e, r) =>
        r.type === a.PasswordHistoryItemType.Credential
          ? (0, n.match)(t.searchGettersForCredential)(e, r)
          : (0, n.match)(t.searchGettersForGeneratedPassword)(e, r);
    },
    83449: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedPasswordHistoryBatchSelector =
          t.passwordHistoryQuerySelector =
          t.passwordHistoryPaginationTokenSelector =
          t.passwordHistoryPageSelector =
          t.getLivePasswordHistorySelector =
          t.viewedQueriedPasswordHistorySelector =
          t.passwordHistoryListViewSelector =
          t.getPasswordHistoryMappersSelector =
          t.passwordHistoryMappersSelector =
          t.hasPasswordHistorySelector =
          t.passwordHistorySelector =
            void 0);
      const a = r(32626),
        o = r(21178),
        n = r(32034),
        i = r(18948),
        s = r(24589),
        c = r(92598),
        l = r(35385),
        d = r(51319),
        u = r(36859),
        p = r(63566),
        S = r(25294),
        m = r(87644),
        g = r(97006),
        y = r(35893),
        h = r(20553),
        v = r(80993),
        f = r(91210),
        w = r(91892),
        A = (e) => "ChangedProperties" in e && e.ChangedProperties.some((e) => "password" === e.toLowerCase()),
        P = (0, n.createSelector)(d.credentialsSelector, (e) => e.reduce((e, t) => e.set(t.Id, t), new Map()));
      t.passwordHistorySelector = (0, n.createSelector)(
        c.generatedPasswordsSelector,
        l.credentialsHistoriesSelector,
        P,
        f.limitedSharingItemsSelector,
        (e, t, r, n) => {
          const i = e
              .filter((e) => !e.AuthId)
              .map((e) => ({
                type: a.PasswordHistoryItemType.Generated,
                primaryInfo: e.Domain ?? "",
                secondaryInfo: "",
                domain: e.Domain,
                password: e.Password,
                timestamp: e.GeneratedDate,
                id: e.Id,
                isProtected: !1
              })),
            s = t.reduce((e, t) => {
              if (n[t.ObjectId] || !t.hasOwnProperty("ChangeSets")) return e;
              const i = r.get(t.ObjectId);
              if (!i) return e;
              const s = i?.Title,
                c = i?.Url,
                l = i?.Email,
                d = i?.Login,
                u = i?.AutoProtected || !1,
                p = t.ChangeSets.reduce((e, t) => {
                  if (!A(t) || (void 0 === (r = t.CurrentData).Email && void 0 === r.Login) || void 0 === r.Url || void 0 === r.Password)
                    return e;
                  var r;
                  const n = new o.ParsedURL(c).getRootDomain(),
                    p = {
                      type: a.PasswordHistoryItemType.Credential,
                      primaryInfo: (s || n) ?? "",
                      secondaryInfo: (l || d) ?? "",
                      domain: c || t.CurrentData.Url,
                      password: t.CurrentData.Password,
                      timestamp: t.ModificationDate,
                      id: t.Id,
                      credentialId: i?.Id,
                      isProtected: u,
                      spaceId: i.SpaceId,
                      email: i?.Email ?? "",
                      login: i?.Login ?? "",
                      secondaryLogin: i?.SecondaryLogin ?? ""
                    };
                  return e.concat(p);
                }, []);
              return e.concat(p);
            }, []);
          return i.concat(s);
        }
      );
      t.hasPasswordHistorySelector = (e, t) => {
        const r = (0, f.limitedSharingItemsSelector)(e);
        return (0, l.credentialsHistoriesSelector)(e).some((e) => {
          return e.ObjectId === t && !((a = e.ObjectId) in r && r[a]) && e.ChangeSets.filter(A).length > 0;
          var a;
        });
      };
      t.passwordHistoryMappersSelector = (e) => (0, m.getPasswordHistoryMappers)();
      const T = (0, m.getPasswordHistoryMappers)();
      t.getPasswordHistoryMappersSelector = () => T;
      const b = () => u.passwordHistoryItemMatch,
        I = (0, s.getQuerySelector)(t.passwordHistorySelector, b, t.passwordHistoryMappersSelector);
      t.passwordHistoryListViewSelector = (0, n.createSelector)(
        v.sortedSharedItemIdsSelector,
        f.limitedSharingItemsSelector,
        w.iconsSelector,
        t.passwordHistorySelector,
        (e, t, r) => (a) => (0, S.viewPasswordHistoryBatch)(a, e, t, r)
      );
      (t.viewedQueriedPasswordHistorySelector = (e, r) => {
        const a = I(e, r),
          o = (0, t.passwordHistoryListViewSelector)(e);
        return (0, p.viewListResults)(o)(a);
      }),
        (t.getLivePasswordHistorySelector = (0, g.makeLiveSelectorGetter)(
          t.passwordHistorySelector,
          t.passwordHistoryListViewSelector,
          b,
          t.getPasswordHistoryMappersSelector
        ));
      t.passwordHistoryPageSelector = (e, r) => {
        const a = (0, y.parseToken)(r),
          { sortToken: o, filterToken: n } = a,
          i = (0, m.getPasswordHistoryMappers)(),
          s = (0, t.passwordHistoryQuerySelector)(e, { sortToken: o, filterToken: n }),
          c = (0, t.passwordHistoryListViewSelector)(e),
          l = (0, h.generateNextToken)(i, a, s),
          d = (0, h.generatePrevToken)(i, a, s),
          u = (0, h.getBatch)(i, a, s),
          p = (0, y.stringifyToken)(l),
          S = (0, y.stringifyToken)(d);
        return { batch: c(u), nextToken: p, prevToken: S };
      };
      t.passwordHistoryPaginationTokenSelector = (e, r) => {
        const a = (0, S.getPasswordHistorySortToken)(r),
          o = (0, S.getPasswordHistoryFilterToken)(r),
          n = (0, m.getPasswordHistoryMappers)(),
          i = { sortToken: a, filterToken: o },
          s = (0, t.passwordHistoryQuerySelector)(e, i),
          c = (0, S.getPasswordHistoryFirstToken)(n, i, r, s);
        return (0, y.stringifyToken)(c);
      };
      const C = (0, n.createSelector)(t.passwordHistorySelector, m.getPasswordHistoryMappers),
        E = (0, y.createOptimizedSortTokenSelector)((e, { sortToken: t }) => t, i.identity),
        _ = (0, y.createOptimizedFilterTokenSelector)((e, { filterToken: t }) => t, i.identity);
      t.passwordHistoryQuerySelector = (0, n.createSelector)(m.getPasswordHistoryMappers, b, E, _, t.passwordHistorySelector, y.queryData);
      t.getViewedPasswordHistoryBatchSelector = (e) => {
        const { sortToken: r, filterToken: a } = e,
          o = (0, S.getPasswordHistoryBatch)(e),
          i = (0, n.createSelector)((e) => (0, t.passwordHistoryQuerySelector)(e, { filterToken: a, sortToken: r }), C, o),
          s = (0, y.optimizeBatchSelector)(i);
        return (0, n.createSelector)(
          s,
          v.sortedSharedItemIdsSelector,
          f.limitedSharingItemsSelector,
          w.iconsSelector,
          S.viewPasswordHistoryBatch
        );
      };
    },
    2104: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = void 0);
      const a = r(32626);
      t.listView = (e, t, r) =>
        r.map((r) =>
          r.type === a.PasswordHistoryItemType.Credential
            ? {
                type: a.PasswordHistoryItemType.Credential,
                id: r.id,
                primaryInfo: r.primaryInfo,
                secondaryInfo: r.secondaryInfo,
                password: r.password,
                timestamp: r.timestamp,
                credentialId: r.credentialId,
                icons: t(r.domain),
                sharingStatus: e(r.credentialId),
                isProtected: r.isProtected,
                spaceId: r.spaceId,
                domain: r.domain
              }
            : {
                type: a.PasswordHistoryItemType.Generated,
                id: r.id,
                primaryInfo: r.primaryInfo,
                password: r.password,
                timestamp: r.timestamp
              }
        );
    },
    17025: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(58235),
        o = r(7408),
        n = r(48121);
      t.config = {
        commands: {
          addPaymentCard: { handler: n.addPaymentCardHandler },
          deletePaymentCard: { handler: n.deletePaymentCardHandler },
          updatePaymentCard: { handler: n.updatePaymentCardHandler }
        },
        queries: {
          getPaymentCard: { selector: a.viewedPaymentCardSelector },
          getPaymentCards: { selector: a.viewedQueriedPaymentCardsSelector }
        },
        liveQueries: { livePaymentCard: { operator: o.getPaymentCard$ }, livePaymentCards: { operator: o.paymentCards$ } }
      };
    },
    19738: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addPaymentCardHandler = t.getNewPaymentCard = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(23136),
        i = r(42316),
        s = r(48313),
        c = r(53),
        l = r(78320),
        d = r(70252),
        u = r(13675),
        p = r(79980);
      function S(e) {
        e = (0, u.sanitizeInputPersonalData)(e);
        const t = (0, c.getUnixTimestamp)(),
          r = (0, i.defaultToEmptyString)(e.cardNumber).replace(/ /g, "");
        if (!r && !e.securityCode)
          throw new i.RequestError(
            "[addPaymentCard]: refusing to add a payment card without card number or security code.",
            o.PaymentCardSaveResultErrorCode.EMPTY_CARD_NUMBER_AND_SECURITY_CODE
          );
        return {
          kwType: "KWPaymentMean_creditCard",
          AnonId: (0, l.generateItemUuid)(),
          Bank: "US-NO_TYPE",
          CardNumber: r,
          CardNumberLastDigits: (0, i.getLastDigitsFromCardNumber)(r),
          CreationDatetime: t,
          Color: (0, i.defaultToFallbackColor)(e.color),
          ExpireMonth: (0, i.defaultToEmptyString)(e.expireMonth),
          ExpireYear: (0, i.defaultToEmptyString)(e.expireYear),
          Id: (0, l.generateItemUuid)(),
          IssueNumber: "",
          Name: (0, i.defaultToEmptyString)(e.name),
          OwnerName: (0, i.defaultToEmptyString)(e.ownerName),
          CCNote: (0, i.defaultToEmptyString)(e.personalNote),
          LocaleFormat: o.Country.US,
          SecurityCode: (0, i.defaultToEmptyString)(e.securityCode),
          SpaceId: (0, i.defaultToEmptyString)(e.spaceId),
          StartYear: "",
          StartMonth: "",
          Type: (0, i.getPaymentTypeFromCardNumber)(r),
          UserModificationDatetime: t,
          LastBackupTime: 0
        };
      }
      t.getNewPaymentCard = S;
      t.addPaymentCardHandler = async (e, t) => {
        try {
          await (async ({ storeService: e, sessionService: t, eventLoggerService: r }, a) => {
            if (!e.isAuthenticated()) throw new Error("No session available to addPaymentCard");
            const o = S(a);
            if (!o.SpaceId) {
              const t = await (0, n.getDefaultSpaceId)(e);
              o.SpaceId = t;
            }
            (0, p.logAddVaultItem)(e, r, o),
              e.dispatch((0, s.savePersonalDataItem)(o, o.kwType)),
              t.getInstance().user.persistPersonalData();
          })(e, t);
          return (
            (0, n.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save),
            Promise.resolve({ success: !0 })
          );
        } catch (e) {
          return (
            (0, d.sendExceptionLog)({ error: e }),
            e instanceof i.RequestError && void 0 !== e.code
              ? Promise.resolve({ success: !1, error: { code: e.code } })
              : Promise.resolve({ success: !1 })
          );
        }
      };
    },
    37028: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deletePaymentCardHandler = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(23136),
        i = r(58235),
        s = r(70252),
        c = r(45291),
        l = r(79980),
        d = ({ storeService: e, eventLoggerService: t }, r) => {
          const a = e.getState();
          try {
            if (!e.isAuthenticated()) return { success: !1, error: { code: o.DeletePaymentCardErrorCode.NOT_AUTHORIZED } };
            const n = (0, i.paymentCardSelector)(a, r);
            if (!n) return { success: !1, error: { code: o.DeletePaymentCardErrorCode.NOT_FOUND } };
            const s = (0, c.removePersonalItem)(n.kwType, n.Id, null);
            return e.dispatch(s), (0, l.logDeleteVaultItem)(e, t, n), { success: !0 };
          } catch (e) {
            const t = new Error(`[PaymentCards] - deletePaymentCard: ${e}`);
            return (0, s.sendExceptionLog)({ error: t }), { success: !1, error: { code: o.DeletePaymentCardErrorCode.INTERNAL_ERROR } };
          }
        };
      t.deletePaymentCardHandler = function (e, { id: t }) {
        const r = d(e, t);
        if (r.success) {
          (0, n.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save);
        }
        return Promise.resolve(r);
      };
    },
    48121: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(19738), t), o(r(37028), t), o(r(65468), t);
    },
    65468: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updatePaymentCardHandler = t.getUpdatedPaymentCard = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(58235),
        i = r(23136),
        s = r(42316),
        c = r(48313),
        l = r(53),
        d = r(70252),
        u = r(13675),
        p = r(79980);
      function S(e, t) {
        if (!e)
          throw new s.RequestError(
            "[updatePaymentCard]: unable to find payment card to update.",
            o.PaymentCardSaveResultErrorCode.NOT_FOUND
          );
        t = (0, u.sanitizeInputPersonalData)(t);
        const r = (0, s.defaultToEmptyString)(t.cardNumber ?? e.CardNumber).replace(/ /g, ""),
          a = (0, l.getUnixTimestamp)(),
          n = {
            CardNumber: r,
            CardNumberLastDigits: (0, s.getLastDigitsFromCardNumber)(r),
            Color: t.color ?? e.Color,
            ExpireMonth: t.expireMonth ?? e.ExpireMonth,
            ExpireYear: t.expireYear ?? e.ExpireYear,
            Name: t.name ?? e.Name,
            OwnerName: t.ownerName ?? e.OwnerName,
            SecurityCode: t.securityCode ?? e.SecurityCode,
            SpaceId: t.spaceId ?? e.SpaceId,
            Type: (0, s.getPaymentTypeFromCardNumber)(r),
            UserModificationDatetime: a,
            CCNote: t.personalNote ?? e.CCNote
          },
          i = { ...e, ...n };
        if (!r && !i.SecurityCode)
          throw new s.RequestError(
            "[updatePaymentCard]: refusing to add a payment card without card number or security code.",
            o.PaymentCardSaveResultErrorCode.EMPTY_CARD_NUMBER_AND_SECURITY_CODE
          );
        return i;
      }
      (t.getUpdatedPaymentCard = S),
        (t.updatePaymentCardHandler = function (e, t) {
          try {
            !(function ({ storeService: e, sessionService: t, eventLoggerService: r }, a) {
              if (!e.isAuthenticated()) throw new Error("No session available to updatePaymentCard");
              const o = (0, n.paymentCardSelector)(e.getState(), a.id),
                i = S(o, a);
              (0, p.logEditVaultItem)(e, r, i, o),
                e.dispatch((0, c.savePersonalDataItem)(i, i.kwType)),
                t.getInstance().user.persistPersonalData();
            })(e, t);
            return (
              (0, i.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save),
              Promise.resolve({ success: !0 })
            );
          } catch (e) {
            return (
              (0, d.sendExceptionLog)({ error: e }),
              e instanceof s.RequestError && void 0 !== e.code
                ? Promise.resolve({ success: !1, error: { code: e.code } })
                : Promise.resolve({ success: !1 })
            );
          }
        });
    },
    42316: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RequestError =
          t.getPaymentTypeFromCardNumber =
          t.getLastDigitsFromCardNumber =
          t.defaultColor =
          t.defaultToFallbackColor =
          t.defaultToEmptyString =
            void 0);
      const a = r(16516),
        o = r(32626);
      (t.defaultToEmptyString = (0, a.defaultTo)("")),
        (t.defaultToFallbackColor = (0, a.defaultTo)(o.PaymentCardColor.BLUE_1)),
        (t.defaultColor = "BLUE_1"),
        (t.getLastDigitsFromCardNumber = function (e) {
          const r = (0, t.defaultToEmptyString)(e).trim();
          return r.length >= 4 ? r.slice(-4) : "";
        }),
        (t.getPaymentTypeFromCardNumber = function (e) {
          if (!e) return o.PaymentCardType.PAYMENT_TYPE_VISA;
          const t = (e, t) => t.some((t) => e.startsWith(t));
          return e.startsWith("4")
            ? o.PaymentCardType.PAYMENT_TYPE_VISA
            : t(e, ["34", "37"])
            ? o.PaymentCardType.PAYMENT_TYPE_AMEX
            : t(e, ["50", "51", "52", "53", "54", "55"])
            ? o.PaymentCardType.PAYMENT_TYPE_MASTERCARD
            : t(e, ["6011", "65"])
            ? o.PaymentCardType.PAYMENT_TYPE_DISCOVER
            : t(e, ["300", "301", "302", "303", "304", "305", "36", "38"])
            ? o.PaymentCardType.PAYMENT_TYPE_DINERSCLUB
            : t(e, ["2123", "2131", "1800", "3"])
            ? o.PaymentCardType.PAYMENT_TYPE_JCB
            : o.PaymentCardType.PAYMENT_TYPE_MASTERCARD;
        });
      class n extends Error {
        constructor(e, t) {
          super(e), Object.setPrototypeOf(this, new.target.prototype), (this.name = "RequestError"), (this.code = t);
        }
      }
      t.RequestError = n;
    },
    35834: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getUpdatedPaymentCard = t.getNewPaymentCard = t.savePaymentCard = void 0);
      const a = r(16516),
        o = r(32626),
        n = r(95623),
        i = r(45291),
        s = r(78320),
        c = r(53),
        l = r(49551),
        d = r(42316),
        u = r(79980);
      function p(e) {
        n.default.log("[Data] Creating new Payment Card");
        const t = (0, c.getUnixTimestamp)(),
          r = (0, d.defaultToEmptyString)(e.cardNumber).replace(/ /g, "");
        return {
          kwType: "KWPaymentMean_creditCard",
          AnonId: (0, s.generateItemUuid)(),
          Bank: "US-NO_TYPE",
          CardNumber: r,
          CardNumberLastDigits: (0, d.getLastDigitsFromCardNumber)(r),
          CreationDatetime: t,
          Color: (0, a.defaultTo)(o.PaymentCardColor.BLUE_1, e.color),
          ExpireMonth: (0, d.defaultToEmptyString)(e.expireMonth),
          ExpireYear: (0, d.defaultToEmptyString)(e.expireYear),
          Id: (0, s.generateItemUuid)(),
          IssueNumber: "",
          Name: (0, a.defaultTo)("Card", e.cardName),
          OwnerName: (0, d.defaultToEmptyString)(e.ownerName),
          CCNote: (0, d.defaultToEmptyString)(e.personalNote),
          LocaleFormat: o.Country.US,
          SecurityCode: (0, d.defaultToEmptyString)(e.securityCode),
          SpaceId: e.spaceId || "",
          StartYear: "",
          StartMonth: "",
          Type: (0, d.getPaymentTypeFromCardNumber)(r),
          UserModificationDatetime: t,
          LastBackupTime: 0
        };
      }
      function S(e, t) {
        const r = (0, l.findDataModelObject)(t.id, e);
        if (!r) return void n.default.log("Client asks to update an unknown Payment Card");
        n.default.log(`[Data] Updating existing Payment Card ${t.id}`);
        const o = (0, c.getUnixTimestamp)(),
          i = (0, d.defaultToEmptyString)(t.cardNumber).replace(/ /g, ""),
          s = {
            CardNumber: i,
            CardNumberLastDigits: (0, d.getLastDigitsFromCardNumber)(i),
            Color: t.color ? t.color : r.Color,
            ExpireMonth: (0, d.defaultToEmptyString)(t.expireMonth),
            ExpireYear: (0, d.defaultToEmptyString)(t.expireYear),
            Name: (0, a.defaultTo)("Card", t.cardName),
            OwnerName: (0, d.defaultToEmptyString)(t.ownerName),
            SecurityCode: (0, d.defaultToEmptyString)(t.securityCode),
            SpaceId: (0, d.defaultToEmptyString)(t.spaceId),
            Type: (0, d.getPaymentTypeFromCardNumber)(t.cardNumber),
            UserModificationDatetime: o,
            CCNote: (0, d.defaultToEmptyString)(t.personalNote)
          };
        return { ...r, ...s };
      }
      (t.savePaymentCard = function ({ storeService: e, sessionService: t, eventLoggerService: r }, a) {
        if (!e.isAuthenticated()) return void n.default.log("No session available to savePaymentCard");
        const o = e.getPersonalData(),
          s = a.id ? S(o.paymentCards, a) : p(a);
        if (a.id) {
          const t = (0, l.findDataModelObject)(s.Id, o.paymentCards);
          (0, u.logEditVaultItem)(e, r, s, t);
        } else (0, u.logAddVaultItem)(e, r, s);
        e.dispatch((0, i.savePaymentCard)(s)), t.getInstance().user.persistPersonalData();
      }),
        (t.getNewPaymentCard = p),
        (t.getUpdatedPaymentCard = S);
    },
    7408: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPaymentCard$ = t.paymentCards$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(58235);
      t.paymentCards$ = (0, n.getLivePersonalInfo)(i.getLivePaymentCardsSelector);
      t.getPaymentCard$ = (e) => {
        const t = (0, i.getViewedPaymentCardSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    91663: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPaymentCardMappers = void 0);
      const a = r(83539);
      t.getPaymentCardMappers = () => ({ spaceId: (e) => e.SpaceId, name: (e) => e.Name, lastUse: a.lastUseMapper, id: (e) => e.Id });
    },
    38701: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.paymentCardMatch = t.searchGetters = void 0);
      const a = r(82234),
        o = r(64455);
      (t.searchGetters = [(0, a.stringProp)("Name"), (0, a.stringProp)("OwnerName")]), (t.paymentCardMatch = (0, o.match)(t.searchGetters));
    },
    58235: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedPaymentCardSelector =
          t.viewedPaymentCardSelector =
          t.getLivePaymentCardsSelector =
          t.viewedQueriedPaymentCardsSelector =
          t.queryPaymentCardsSelector =
          t.paymentCardMappersSelector =
          t.paymentCardSelector =
          t.paymentCardsSelector =
            void 0);
      const a = r(16516),
        o = r(38701),
        n = r(8818),
        i = r(24589),
        s = r(63566),
        c = r(97006),
        l = r(49551),
        d = r(32034),
        u = r(91663),
        p = r(40602),
        S = r(57989);
      t.paymentCardsSelector = (0, d.createSelector)(
        (e) => e.userSession.personalData.paymentCards,
        S.quarantinedSpacesSelector,
        p.filterOutQuarantinedItems
      );
      t.paymentCardSelector = (e, r) => {
        const a = (0, t.paymentCardsSelector)(e);
        return (0, l.findDataModelObject)(r, a);
      };
      t.paymentCardMappersSelector = (e) => (0, u.getPaymentCardMappers)();
      const m = () => o.paymentCardMatch;
      (t.queryPaymentCardsSelector = (0, i.getQuerySelector)(t.paymentCardsSelector, m, t.paymentCardMappersSelector)),
        (t.viewedQueriedPaymentCardsSelector = (0, a.compose)((0, s.viewListResults)(n.listView), t.queryPaymentCardsSelector)),
        (t.getLivePaymentCardsSelector = (0, c.makeLiveSelectorGetter)(
          t.paymentCardsSelector,
          () => n.listView,
          m,
          t.paymentCardMappersSelector
        ));
      t.viewedPaymentCardSelector = (e, r) => {
        const a = (0, t.paymentCardSelector)(e, r);
        return (0, n.maybeDetailView)(a);
      };
      t.getViewedPaymentCardSelector = (e) => {
        const r = (0, d.createSelector)(t.paymentCardsSelector, (t) => (0, l.findDataModelObject)(e, t));
        return (0, d.createSelector)(r, n.maybeDetailView);
      };
    },
    8818: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(16516),
        o = r(82043),
        n = r(42316),
        i = (0, a.defaultTo)("");
      (t.detailView = (e) => ({
        ...(0, o.dataModelDetailView)(e),
        bank: i(e.Bank),
        cardNumber: i(e.CardNumber),
        cardNumberLastDigits: (0, n.getLastDigitsFromCardNumber)(e.CardNumber),
        color: e.Color || n.defaultColor,
        expireMonth: i(e.ExpireMonth),
        expireYear: i(e.ExpireYear),
        issueNumber: i(e.IssueNumber),
        name: i(e.Name),
        ownerName: i(e.OwnerName),
        personalNote: i(e.CCNote),
        securityCode: i(e.SecurityCode),
        startMonth: i(e.StartMonth),
        startYear: i(e.StartYear),
        type: e.Type
      })),
        (t.maybeDetailView = (0, o.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({
        ...(0, o.dataModelItemView)(e),
        cardNumber: i(e.CardNumber),
        cardNumberLastDigits: (0, n.getLastDigitsFromCardNumber)(e.CardNumber),
        color: e.Color || n.defaultColor,
        expireMonth: i(e.ExpireMonth),
        expireYear: i(e.ExpireYear),
        name: i(e.Name),
        ownerName: i(e.OwnerName),
        personalNote: i(e.CCNote),
        type: e.Type
      });
      t.listView = (e) => e.map(t.itemView);
    },
    79980: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.logDeleteVaultItem = t.logAddVaultItem = t.logEditVaultItem = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(21178),
        i = r(49901),
        s = r(53966),
        c = r(10770),
        l = r(53626),
        d = (e, t, r, d, u, p, S) => {
          const m = e.getState(),
            g = (0, l.collectionsSelector)(m),
            y = d.SpaceId === i.PERSONAL_SPACE_ID ? a.Space.Personal : a.Space.Professional,
            h = void 0 !== p ? p.map((e) => (0, s.getHermesFieldFromProperty)(d, e)).filter((e) => e) : void 0,
            v = s.dataModelTypeToItemType[d.kwType],
            f = (0, c.getCollectionNamesContainingVaultItemId)(d.Id, g).length;
          if (
            (t.logEvent(
              new a.UserUpdateVaultItemEvent({
                action: r,
                itemId: d.Id,
                itemType: v,
                fieldsEdited: h,
                space: y,
                collectionCount: f,
                multiSelectId: S ?? void 0,
                updateCredentialOrigin: u
              })
            ),
            d.kwType === o.DataModelType.KWAuthentifiant)
          ) {
            const e = d,
              o = new n.ParsedURL(e.Url).getRootDomain(),
              i = "string" == typeof o ? o : "";
            (0, a.hashDomain)(i).then((e) => {
              t.logEvent(
                new a.AnonymousUpdateCredentialEvent({ action: r, domain: { id: e, type: a.DomainType.Web }, fieldList: h, space: y })
              );
            });
          }
        };
      t.logEditVaultItem = (e, t, r, o, n) => {
        const i = (0, s.getUpdatedProperties)(r, o);
        d(e, t, a.Action.Edit, r, n, i);
      };
      t.logAddVaultItem = (e, t, r, o) => d(e, t, a.Action.Add, r, o);
      t.logDeleteVaultItem = (e, t, r, o, n) => d(e, t, a.Action.Delete, r, o, void 0, n);
    },
    53966: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUpdatedProperties = t.getHermesFieldFromProperty = t.dataModelTypeToItemType = void 0);
      const a = r(93039),
        o = r(32626);
      t.dataModelTypeToItemType = {
        [o.DataModelType.KWAuthentifiant]: a.ItemType.Credential,
        [o.DataModelType.KWSecureNote]: a.ItemType.SecureNote,
        [o.DataModelType.KWIdentity]: a.ItemType.Identity,
        [o.DataModelType.KWEmail]: a.ItemType.Email,
        [o.DataModelType.KWPhone]: a.ItemType.Phone,
        [o.DataModelType.KWAddress]: a.ItemType.Address,
        [o.DataModelType.KWCompany]: a.ItemType.Company,
        [o.DataModelType.KWPersonalWebsite]: a.ItemType.Website,
        [o.DataModelType.KWPaymentMean_creditCard]: a.ItemType.CreditCard,
        [o.DataModelType.KWBankStatement]: a.ItemType.BankStatement,
        [o.DataModelType.KWIDCard]: a.ItemType.IdCard,
        [o.DataModelType.KWSocialSecurityStatement]: a.ItemType.SocialSecurity,
        [o.DataModelType.KWDriverLicence]: a.ItemType.DriverLicence,
        [o.DataModelType.KWPassport]: a.ItemType.Passport,
        [o.DataModelType.KWFiscalStatement]: a.ItemType.FiscalStatement
      };
      const n = {
          Title: a.Field.Title,
          FirstName: a.Field.FirstName,
          MiddleName: a.Field.MiddleName,
          LastName: a.Field.LastName,
          BirthDate: a.Field.BirthDate,
          BirthPlace: a.Field.BirthPlace,
          Pseudo: a.Field.Pseudo,
          SpaceId: a.Field.Space
        },
        i = { Email: a.Field.Email, Type: a.Field.Type, EmailName: a.Field.EmailName, SpaceId: a.Field.Space },
        s = { Number: a.Field.Number, PhoneName: a.Field.PhoneName, Type: a.Field.Type, SpaceId: a.Field.Space },
        c = {
          StreetNumber: a.Field.StreetNumber,
          StreetName: a.Field.StreetName,
          StreetTitle: a.Field.StreetTitle,
          City: a.Field.City,
          State: a.Field.State,
          StateLevel2: a.Field.StateLevel2,
          StateNumber: a.Field.StateNumber,
          ZipCode: a.Field.ZipCode,
          Country: a.Field.Country,
          AddressName: a.Field.AddressName,
          Receiver: a.Field.Receiver,
          Building: a.Field.Building,
          Floor: a.Field.Floor,
          Door: a.Field.Door,
          LinkedPhone: a.Field.LinkedPhone,
          PersonalNote: a.Field.Note,
          SpaceId: a.Field.Space
        },
        l = { Name: a.Field.Name, JobTitle: a.Field.JobTitle, SpaceId: a.Field.Space },
        d = { Website: a.Field.Website, Name: a.Field.Name, SpaceId: a.Field.Space },
        u = {
          Name: a.Field.Name,
          OwnerName: a.Field.OwnerName,
          CardNumber: a.Field.CardNumber,
          SecurityCode: a.Field.SecurityCode,
          ExpireMonth: a.Field.ExpireDate,
          ExpireYear: a.Field.ExpireDate,
          Color: a.Field.Color,
          SpaceId: a.Field.Space
        },
        p = {
          BankAccountName: a.Field.Name,
          BankAccountOwner: a.Field.Owner,
          BankAccountBIC: a.Field.Bic,
          BankAccountIBAN: a.Field.Iban,
          BankAccountBank: a.Field.Bank,
          SpaceId: a.Field.Space
        },
        S = {
          Fullname: a.Field.Fullname,
          Number: a.Field.Number,
          DeliveryDate: a.Field.DeliveryDate,
          ExpireDate: a.Field.ExpireDate,
          LinkedIdentity: a.Field.LinkedIdentity,
          Sex: a.Field.Sex,
          DateOfBirth: a.Field.DateOfBirth,
          SpaceId: a.Field.Space
        },
        m = {
          SocialSecurityFullname: a.Field.SocialSecurityFullname,
          SocialSecurityNumber: a.Field.SocialSecurityNumber,
          LinkedIdentity: a.Field.LinkedIdentity,
          Sex: a.Field.Sex,
          DateOfBirth: a.Field.DateOfBirth,
          SpaceId: a.Field.Space
        },
        g = {
          Fullname: a.Field.Fullname,
          Number: a.Field.Number,
          DeliveryDate: a.Field.DeliveryDate,
          ExpireDate: a.Field.ExpireDate,
          State: a.Field.State,
          LinkedIdentity: a.Field.LinkedIdentity,
          Sex: a.Field.Sex,
          DateOfBirth: a.Field.DateOfBirth,
          SpaceId: a.Field.Space
        },
        y = {
          Fullname: a.Field.Fullname,
          Number: a.Field.Number,
          DeliveryDate: a.Field.DeliveryDate,
          DeliveryPlace: a.Field.DeliveryPlace,
          ExpireDate: a.Field.ExpireDate,
          LinkedIdentity: a.Field.LinkedIdentity,
          Sex: a.Field.Sex,
          DateOfBirth: a.Field.DateOfBirth,
          SpaceId: a.Field.Space
        },
        h = { FiscalNumber: a.Field.FiscalNumber, TeledeclarantNumber: a.Field.TeledeclarantNumber, SpaceId: a.Field.Space };
      t.getHermesFieldFromProperty = (e, t) => {
        switch (e.kwType) {
          case o.DataModelType.KWAuthentifiant:
            return ((e, t) => {
              switch (t) {
                case "Email":
                  return a.Field.Email;
                case "Login":
                  return a.Field.Login;
                case "SecondaryLogin":
                  return a.Field.SecondaryLogin;
                case "Password":
                  return a.Field.Password;
                case "AutoLogin":
                  return e.AutoLogin ? a.Field.AutoLoginOn : a.Field.AutoLoginOff;
                case "AutoProtected":
                  return e.AutoProtected ? a.Field.MpProtectedOn : a.Field.MpProtectedOff;
                case "Url":
                  return a.Field.Website;
                case "Category":
                  return a.Field.Category;
                case "Note":
                  return a.Field.Note;
                case "SubdomainOnly":
                  return e.SubdomainOnly ? a.Field.SubdomainOnlyOn : a.Field.SubdomainOnlyOff;
                case "Title":
                  return a.Field.Title;
                case "SpaceId":
                  return a.Field.Space;
              }
            })(e, t);
          case o.DataModelType.KWSecureNote:
            return ((e, t) => {
              switch (t) {
                case "Title":
                  return a.Field.Title;
                case "Content":
                  return a.Field.Content;
                case "Category":
                  return a.Field.Category;
                case "SpaceId":
                  return a.Field.Space;
                case "Secured":
                  return e.Secured ? a.Field.MpProtectedOn : a.Field.MpProtectedOff;
              }
            })(e, t);
          case o.DataModelType.KWIdentity:
            return n[t];
          case o.DataModelType.KWEmail:
            return i[t];
          case o.DataModelType.KWPhone:
            return s[t];
          case o.DataModelType.KWAddress:
            return c[t];
          case o.DataModelType.KWCompany:
            return l[t];
          case o.DataModelType.KWPersonalWebsite:
            return d[t];
          case o.DataModelType.KWPaymentMean_creditCard:
            return u[t];
          case o.DataModelType.KWBankStatement:
            return p[t];
          case o.DataModelType.KWIDCard:
            return S[t];
          case o.DataModelType.KWSocialSecurityStatement:
            return m[t];
          case o.DataModelType.KWDriverLicence:
            return g[t];
          case o.DataModelType.KWPassport:
            return y[t];
          case o.DataModelType.KWFiscalStatement:
            return h[t];
        }
      };
      t.getUpdatedProperties = (e, t) =>
        Object.getOwnPropertyNames(e).filter((r) => {
          const a = void 0 !== e[r],
            o = e[r] !== t[r];
          return a && o;
        });
    },
    83539: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.lastUseMapper = void 0);
      t.lastUseMapper = (e) => e.LastUse || -1;
    },
    50886: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.updatePersonalDataUsageMetadata = t.addPersonalDataItem = t.makePersonalDataItem = void 0);
      const a = r(32626),
        o = r(78924),
        n = r(84977),
        i = r(87496),
        s = r(73566),
        c = r(85225),
        l = r(23136),
        d = r(70252),
        u = r(53),
        p = r(95623),
        S = r(48313),
        m = r(9951),
        g = r(49766),
        y = r(29565),
        h = r(91494),
        v = r(39732),
        f = r(49723),
        w = r(72079),
        A = r(88542),
        P = r(48931),
        T = r(12362),
        b = r(86691),
        I = r(13675),
        C = r(56915),
        E = r(79980),
        _ = r(49551),
        D = r(78163),
        O = r(96850),
        M = {
          [a.DataModelType.KWAddress]: { create: f.makeNewAddress, update: f.makeUpdatedAddress },
          [a.DataModelType.KWAuthentifiant]: {
            beforeChange: A.beforeCredentialChange,
            create: A.makeNewCredential,
            update: A.makeUpdatedCredential,
            notifySharersOnUpdate: A.notifySharersCredentialUpdated,
            afterSave: A.afterCredentialSaved
          },
          [a.DataModelType.KWBankStatement]: { create: P.makeNewBankAccount, update: P.makeUpdatedBankAccount },
          [a.DataModelType.KWCompany]: { create: m.makeNewCompany, update: m.makeUpdatedCompany },
          [a.DataModelType.KWEmail]: { create: g.makeNewEmail, update: g.makeUpdatedEmail },
          [a.DataModelType.KWIdentity]: { create: h.makeNewIdentity, update: h.makeUpdatedIdentity },
          [a.DataModelType.KWPersonalWebsite]: { create: y.makeNewPersonalWebsite, update: y.makeUpdatedPersonalWebsite },
          [a.DataModelType.KWPhone]: { create: v.makeNewPhone, update: v.makeUpdatedPhone },
          [a.DataModelType.KWSecureNote]: {
            create: w.makeNewNote,
            update: w.makeUpdatedNote,
            notifySharersOnUpdate: w.notifySharersNoteUpdated
          },
          [a.DataModelType.KWSecret]: {
            create: O.makeNewSecret,
            update: O.makeUpdatedSecret,
            notifySharersOnUpdate: O.notifySharersSecretUpdated
          }
        };
      async function N(e, t, r) {
        t.content ||
          (p.default.error(`[Data] PersonalInfoItem: ${t.kwType}, has no content`),
          d.sendExceptionLog({
            message: `[makePersonalDataItem] No content found for PersonalDataItem of kwType: ${t.kwType}`,
            code: a.ExceptionCriticality.WARNING
          }),
          (t = { ...t, content: {} }));
        let o = null;
        if (t.content.id) {
          const e = (0, l.getCurrentItems)(t.kwType, r);
          o = (0, _.findDataModelObject)(t.content.id, e);
        }
        const n = M[t.kwType];
        if (!n) return p.default.error(`[Data] Could not make PersonalDataItem of kwType: ${t.kwType}`), null;
        let i;
        return (
          (t = (function (e) {
            return { ...e, content: (0, I.sanitizeInputPersonalData)(e.content) };
          })(t)),
          n.beforeChange && (t = n.beforeChange(t, r)),
          o ? ((i = await n.update(t, o)), n.notifySharersOnUpdate && (await n.notifySharersOnUpdate(e, o, i))) : (i = await n.create(t)),
          i
        );
      }
      (t.makePersonalDataItem = N),
        (t.addPersonalDataItem = async function (
          { storeService: e, sessionService: t, eventLoggerService: r, applicationModulesAccess: i },
          d
        ) {
          if (!e.isAuthenticated()) return p.default.log("No session available to addPersonalDataItem"), { success: !1, itemId: "" };
          const u = e.getPersonalData(),
            m = await N(e, d, u);
          if (!m.SpaceId) {
            const t = await (0, l.getDefaultSpaceId)(e);
            m.SpaceId = t;
          }
          if (!m) return { success: !1, itemId: "" };
          const g = Boolean(d?.content.id);
          let y = null;
          const h = (0, T.getInstance)(),
            v = (0, b.getInstance)();
          if (g) {
            const t = n.default[m.kwType],
              a = (0, _.findDataModelObject)(m.Id, u[t]);
            (0, E.logEditVaultItem)(e, r, m, a);
          } else (0, E.logAddVaultItem)(e, r, m);
          const f = (0, C.platformInfoSelector)(e.getState()),
            w =
              (0, s.isChangeHistoryCandidate)(m) && g
                ? (0, s.getUpdatedItemChangeHistory)({
                    deviceName: e.getLocalSettings().deviceName,
                    personalData: u,
                    change: (0, c.makeUpdateChange)(m),
                    userLogin: e.getUserLogin(),
                    platformInfo: f
                  })
                : null;
          if ((e.dispatch((0, S.savePersonalDataItem)(m, m.kwType, w)), (0, a.isCredential)(m))) {
            y = v.lockTopic("iconsUpdates");
            const t = { credentialIds: [m.Id], type: "credentialUpdates" };
            await h.add("iconsUpdates", t),
              "************" === m?.Password && (0, p.logWarn)({ message: "Saving credentials using a placeholder", tag: "Credentials" });
            const { commands: r } = i.createClients().vaultItemsCrud;
            await r.emitTemporaryVaultItemEvent({ ids: [m.Id], eventType: g ? o.EventType.Updated : o.EventType.Created }),
              (0, D.shouldSendCreateOrModifiedCredentialActivityLog)(e, i, m, d.origin) &&
                (d.content.id?.length
                  ? await (0, D.computeAndSendModifiedCredentialActivityLog)(i, { domainUrl: d.content.url })
                  : await (0, D.computeAndSendCreatedCredentialActivityLog)(i, { domainUrl: d.content.url }));
          }
          return (
            M[d.kwType]?.afterSave && M[d.kwType].afterSave(e, m),
            y && v.releaseTopic("iconsUpdates", y),
            t.getInstance().user.persistPersonalData(),
            { success: !0, itemId: m.Id }
          );
        }),
        (t.updatePersonalDataUsageMetadata = function (e, t, r, o) {
          const s = n.default[o],
            c = (0, i.cleanUrlForPersonalData)(r),
            l = e.getPersonalData()[s],
            m = Array.isArray(l) ? (0, _.findDataModelObject)(t, l) : null;
          if (!m)
            return void d.sendExceptionLog({
              message: `[PersonalData] - updatePersonalDataUsageMetadata: No ${s} found for provided ID to update usage metadata`,
              code: a.ExceptionCriticality.WARNING
            });
          p.default.log(`[Data] Updating ${s} ${t} usage metadata`);
          const g = { ...m, LastUse: (0, u.getUnixTimestamp)() };
          if ((0, a.isCredential)(g)) {
            const { NumberUse: e, TrustedUrlGroup: t } = g;
            (g.NumberUse = ("number" == typeof e ? e : 0) + 1), (g.TrustedUrlGroup = (0, i.getUpdatedTrustedUrlList)(t, c));
          }
          e.dispatch((0, S.savePersonalDataItem)(g, o));
        });
    },
    13675: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sanitizeInputPersonalData = void 0);
      const a = r(16516),
        o = (e) => ("string" == typeof e ? e.replace(new RegExp("([^\t\n\r -퟿-�𐀀-􏿿])", "gu"), "") : e);
      t.sanitizeInputPersonalData = (e) => (0, a.mapObjIndexed)(o, e);
    },
    72678: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.personalDataSelector = t.personalDataItemsOfTypeSelector = void 0);
      const a = r(84977);
      t.personalDataItemsOfTypeSelector = (e, t) =>
        e.userSession && e.userSession.personalData && t.reduce((t, r) => t.concat(e.userSession.personalData[a.default[r]]), []);
      t.personalDataSelector = (e) => e.userSession && e.userSession.personalData;
    },
    49551: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.filterDataModelObjects = t.findDataModelObject = void 0);
      const a = r(16516),
        o = r(84977);
      t.findDataModelObject = (e, t) => {
        const r = (e || "").toUpperCase();
        return (t || []).find((e) => !!e?.Id && r === e.Id?.toUpperCase());
      };
      t.filterDataModelObjects = (e, t, r) => {
        const n = (0, a.unnest)((0, a.values)((0, a.omit)(r, (0, a.pick)(o.PERSONAL_DATA_COLLECTIONS_KEYS, e)))),
          i = (0, a.map)(a.toUpper, t),
          s = (0, a.propSatisfies)((e) => (0, a.contains)((e || "").toUpperCase(), i), "Id");
        return (0, a.filter)(s, n);
      };
    },
    36351: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(99281),
        o = r(11127);
      t.config = {
        commands: {},
        queries: { getAddress: { selector: a.viewedAddressSelector }, getAddresses: { selector: a.viewedQueriedAddressesSelector } },
        liveQueries: { liveAddress: { operator: o.getAddress$ }, liveAddresses: { operator: o.addresses$ } }
      };
    },
    49723: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeAddressSpecificProps = t.makeNewAddress = t.makeUpdatedAddress = void 0);
      const a = r(16516),
        o = r(32626),
        n = r(78163),
        i = r(10360),
        s = r(53),
        c = r(95623);
      function l(e, t) {
        const r = (0, a.defaultTo)(""),
          n = t.content,
          s = (0, i.getLocaleFormat)(e, t);
        return {
          AddressFull: r(n.addressFull),
          AddressName: n.addressName || r(n.addressFull),
          Building: r(n.building),
          City: r(n.city),
          Country: o.Country[s].toLocaleLowerCase(),
          DigitCode: r(n.digitCode),
          Door: r(n.door),
          Floor: r(n.floor),
          LinkedPhone: r(n.linkedPhone),
          PersonalNote: r(n.personalNote),
          Receiver: r(n.receiver),
          Stairs: r(n.stairs),
          State: (0, i.getValidState)(s, n.state),
          StateLevel2: r(n.stateLevel2),
          StateNumber: r(n.stateNumber),
          StreetName: r(n.streetName),
          StreetNumber: r(n.streetNumber),
          StreetTitle: r(n.streetTitle),
          ZipCode: r(n.zipCode)
        };
      }
      (t.makeUpdatedAddress = async function (e, t) {
        return (
          c.default.log(`[Data] Updating existing Address with id: ${t.Id}`),
          {
            ...t,
            ...(0, n.makeUpdatedPersonalDataItemBase)({ existingItem: t, updatedItem: e, itemUpdateDate: (0, s.getUnixTimestamp)() }),
            ...l(t, e)
          }
        );
      }),
        (t.makeNewAddress = async function (e) {
          return c.default.log("[Data] Adding new Address"), { ...(0, n.makeNewPersonalDataItemBase)(e), ...l(null, e) };
        }),
        (t.makeAddressSpecificProps = l);
    },
    11127: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getAddress$ = t.addresses$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(99281);
      t.addresses$ = (0, n.getLivePersonalInfo)(i.getLiveAddressesSelector);
      t.getAddress$ = (e) => {
        const t = (0, i.getViewedAddressSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    83295: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getAddressMappers = void 0);
      const a = r(83539);
      t.getAddressMappers = () => ({ spaceId: (e) => e.SpaceId, lastUse: a.lastUseMapper, id: (e) => e.Id });
    },
    3179: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addressMatch = t.searchGetters = void 0);
      const a = r(82234),
        o = r(64455);
      (t.searchGetters = [
        (0, a.stringProp)("AddressFull"),
        (0, a.stringProp)("AddressName"),
        (0, a.stringProp)("City"),
        (0, a.stringProp)("Receiver"),
        (0, a.stringProp)("StreetNumber"),
        (0, a.stringProp)("ZipCode")
      ]),
        (t.addressMatch = (0, o.match)(t.searchGetters));
    },
    99281: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedAddressSelector =
          t.viewedAddressSelector =
          t.getLiveAddressesSelector =
          t.viewedQueriedAddressesSelector =
          t.queryAddressesSelector =
          t.addressMappersSelector =
          t.addressSelector =
          t.addressesSelector =
            void 0);
      const a = r(16516),
        o = r(3179),
        n = r(83295),
        i = r(84523),
        s = r(63566),
        c = r(24589),
        l = r(97006),
        d = r(49551),
        u = r(32034),
        p = r(40602),
        S = r(57989);
      t.addressesSelector = (0, u.createSelector)(
        (e) => e.userSession.personalData.addresses,
        S.quarantinedSpacesSelector,
        p.filterOutQuarantinedItems
      );
      t.addressSelector = (e, r) => {
        const a = (0, t.addressesSelector)(e);
        return (0, d.findDataModelObject)(r, a);
      };
      t.addressMappersSelector = (e) => (0, n.getAddressMappers)();
      const m = () => o.addressMatch;
      (t.queryAddressesSelector = (0, c.getQuerySelector)(t.addressesSelector, m, t.addressMappersSelector)),
        (t.viewedQueriedAddressesSelector = (0, a.compose)((0, s.viewListResults)(i.listView), t.queryAddressesSelector)),
        (t.getLiveAddressesSelector = (0, l.makeLiveSelectorGetter)(t.addressesSelector, () => i.listView, m, t.addressMappersSelector));
      t.viewedAddressSelector = (e, r) => {
        const a = (0, t.addressSelector)(e, r);
        return (0, i.maybeDetailView)(a);
      };
      t.getViewedAddressSelector = (e) => {
        const r = (0, u.createSelector)(t.addressesSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, u.createSelector)(r, i.maybeDetailView);
      };
    },
    84523: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(16516),
        o = r(82043),
        n = (0, a.defaultTo)("");
      (t.detailView = (e) => ({
        ...(0, o.dataModelDetailView)(e),
        addressFull: n(e.AddressFull),
        addressName: n(e.AddressName),
        building: n(e.Building),
        city: n(e.City),
        country: n(e.Country),
        digitCode: n(e.DigitCode),
        door: n(e.Door),
        floor: n(e.Floor),
        linkedPhone: n(e.LinkedPhone),
        personalNote: n(e.PersonalNote),
        receiver: n(e.Receiver),
        stairs: n(e.Stairs),
        state: n(e.State),
        stateLevel2: n(e.StateLevel2),
        stateNumber: n(e.StateNumber),
        streetName: n(e.StreetName),
        streetNumber: n(e.StreetNumber),
        streetTitle: n(e.StreetTitle),
        zipCode: n(e.ZipCode)
      })),
        (t.maybeDetailView = (0, o.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({
        ...(0, o.dataModelItemView)(e),
        addressName: n(e.AddressName),
        addressFull: n(e.AddressFull),
        city: n(e.City),
        streetNumber: n(e.StreetNumber),
        zipCode: n(e.ZipCode)
      });
      t.listView = (e) => e.map(t.itemView);
    },
    72580: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(80624),
        o = r(81071);
      t.config = {
        commands: {},
        queries: { getCompany: { selector: a.viewedCompanySelector }, getCompanies: { selector: a.viewedQueriedCompaniesSelector } },
        liveQueries: { liveCompanies: { operator: o.companies$ }, liveCompany: { operator: o.getCompany$ } }
      };
    },
    9951: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeCompanySpecificProps = t.makeNewCompany = t.makeUpdatedCompany = void 0);
      const a = r(16516),
        o = r(78163),
        n = r(53),
        i = r(95623);
      function s(e) {
        const t = (0, a.defaultTo)("");
        return { JobTitle: t(e.content.jobTitle), Name: t(e.content.name), PersonalNote: t(e.content.personalNote) };
      }
      (t.makeUpdatedCompany = async function (e, t) {
        return (
          i.default.log(`[Data] Updating existing Company with id: ${t.Id}`),
          {
            ...t,
            ...(0, o.makeUpdatedPersonalDataItemBase)({ existingItem: t, updatedItem: e, itemUpdateDate: (0, n.getUnixTimestamp)() }),
            ...s(e)
          }
        );
      }),
        (t.makeNewCompany = async function (e) {
          return { ...(0, o.makeNewPersonalDataItemBase)(e), ...s(e) };
        }),
        (t.makeCompanySpecificProps = s);
    },
    81071: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCompany$ = t.companies$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(80624);
      t.companies$ = (0, n.getLivePersonalInfo)(i.getLiveCompaniesSelector);
      t.getCompany$ = (e) => {
        const t = (0, i.getViewedCompanySelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    6628: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCompanyMappers = void 0);
      const a = r(83539);
      t.getCompanyMappers = () => ({ spaceId: (e) => e.SpaceId, lastUse: a.lastUseMapper, id: (e) => e.Id });
    },
    76475: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.companyMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234);
      (t.searchGetters = [(0, o.stringProp)("JobTitle"), (0, o.stringProp)("Name")]), (t.companyMatch = (0, a.match)(t.searchGetters));
    },
    80624: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedCompanySelector =
          t.viewedCompanySelector =
          t.getLiveCompaniesSelector =
          t.viewedQueriedCompaniesSelector =
          t.queryCompaniesSelector =
          t.companyMappersSelector =
          t.companySelector =
          t.companiesSelector =
            void 0);
      const a = r(16516),
        o = r(76475),
        n = r(2849),
        i = r(6628),
        s = r(63566),
        c = r(24589),
        l = r(97006),
        d = r(49551),
        u = r(32034),
        p = r(40602),
        S = r(57989);
      t.companiesSelector = (0, u.createSelector)(
        (e) => e.userSession.personalData.companies,
        S.quarantinedSpacesSelector,
        p.filterOutQuarantinedItems
      );
      t.companySelector = (e, r) => {
        const a = (0, t.companiesSelector)(e);
        return (0, d.findDataModelObject)(r, a);
      };
      t.companyMappersSelector = (e) => (0, i.getCompanyMappers)();
      const m = () => o.companyMatch;
      (t.queryCompaniesSelector = (0, c.getQuerySelector)(t.companiesSelector, m, t.companyMappersSelector)),
        (t.viewedQueriedCompaniesSelector = (0, a.compose)((0, s.viewListResults)(n.listView), t.queryCompaniesSelector)),
        (t.getLiveCompaniesSelector = (0, l.makeLiveSelectorGetter)(t.companiesSelector, () => n.listView, m, t.companyMappersSelector));
      t.viewedCompanySelector = (e, r) => {
        const a = (0, t.companySelector)(e, r);
        return (0, n.maybeDetailView)(a);
      };
      t.getViewedCompanySelector = (e) => {
        const r = (0, u.createSelector)(t.companiesSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, u.createSelector)(r, n.maybeDetailView);
      };
    },
    2849: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(16516),
        o = r(82043),
        n = (0, a.defaultTo)("");
      (t.detailView = (e) => ({
        ...(0, o.dataModelDetailView)(e),
        name: n(e.Name),
        jobTitle: n(e.JobTitle),
        personalNote: n(e.PersonalNote)
      })),
        (t.maybeDetailView = (0, o.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({ ...(0, o.dataModelItemView)(e), name: n(e.Name), jobTitle: n(e.JobTitle) });
      t.listView = (e) => e.map(t.itemView);
    },
    64489: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(26147),
        o = r(99020);
      t.config = {
        commands: {},
        queries: { getEmail: { selector: a.viewedEmailSelector }, getEmails: { selector: a.viewedQueriedEmailsSelector } },
        liveQueries: { liveEmail: { operator: o.getEmail$ }, liveEmails: { operator: o.emails$ } }
      };
    },
    49766: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeEmailSpecificProps = t.makeNewEmail = t.makeUpdatedEmail = void 0);
      const a = r(16516),
        o = r(78163),
        n = r(53),
        i = r(95623);
      function s(e) {
        const t = (0, a.defaultTo)("");
        return { Email: t(e.content.email), EmailName: t(e.content.emailName), Type: e.content.type || "PERSO" };
      }
      (t.makeUpdatedEmail = async function (e, t) {
        return (
          i.default.log(`[Data] Updating existing Email with id: ${t.Id}`),
          {
            ...t,
            ...(0, o.makeUpdatedPersonalDataItemBase)({ existingItem: t, updatedItem: e, itemUpdateDate: (0, n.getUnixTimestamp)() }),
            ...s(e)
          }
        );
      }),
        (t.makeNewEmail = async function (e) {
          return i.default.log("[Data] Adding new Email"), { ...(0, o.makeNewPersonalDataItemBase)(e), ...s(e) };
        }),
        (t.makeEmailSpecificProps = s);
    },
    99020: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmail$ = t.emails$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(26147);
      t.emails$ = (0, n.getLivePersonalInfo)(i.getLiveEmailsSelector);
      t.getEmail$ = (e) => {
        const t = (0, i.getViewedEmailSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    16384: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmailMappers = void 0);
      const a = r(83539);
      t.getEmailMappers = () => ({ spaceId: (e) => e.SpaceId, lastUse: a.lastUseMapper, id: (e) => e.Id });
    },
    61808: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.emailMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234);
      (t.searchGetters = [(0, o.stringProp)("Email"), (0, o.stringProp)("EmailName")]), (t.emailMatch = (0, a.match)(t.searchGetters));
    },
    26147: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedEmailSelector =
          t.viewedEmailSelector =
          t.getLiveEmailsSelector =
          t.viewedQueriedEmailsSelector =
          t.queryEmailsSelector =
          t.emailMappersSelector =
          t.emailSelector =
          t.emailsSelector =
          t.countAllEmailsSelector =
            void 0);
      const a = r(16516),
        o = r(61808),
        n = r(16384),
        i = r(82864),
        s = r(63566),
        c = r(24589),
        l = r(97006),
        d = r(49551),
        u = r(32034),
        p = r(57989),
        S = r(40602);
      (t.countAllEmailsSelector = (e) => e.userSession.personalData.emails.length),
        (t.emailsSelector = (0, u.createSelector)(
          (e) => e.userSession.personalData.emails,
          p.quarantinedSpacesSelector,
          S.filterOutQuarantinedItems
        ));
      t.emailSelector = (e, r) => {
        const a = (0, t.emailsSelector)(e);
        return (0, d.findDataModelObject)(r, a);
      };
      t.emailMappersSelector = (e) => (0, n.getEmailMappers)();
      const m = () => o.emailMatch;
      (t.queryEmailsSelector = (0, c.getQuerySelector)(t.emailsSelector, m, t.emailMappersSelector)),
        (t.viewedQueriedEmailsSelector = (0, a.compose)((0, s.viewListResults)(i.listView), t.queryEmailsSelector)),
        (t.getLiveEmailsSelector = (0, l.makeLiveSelectorGetter)(t.emailsSelector, () => i.listView, m, t.emailMappersSelector));
      t.viewedEmailSelector = (e, r) => {
        const a = (0, t.emailSelector)(e, r);
        return (0, i.maybeDetailView)(a);
      };
      t.getViewedEmailSelector = (e) => {
        const r = (0, u.createSelector)(t.emailsSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, u.createSelector)(r, i.maybeDetailView);
      };
    },
    82864: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(16516),
        o = r(82043),
        n = (0, a.defaultTo)("");
      (t.detailView = (e) => ({ ...(0, o.dataModelDetailView)(e), email: n(e.Email), name: n(e.EmailName), type: e.Type || "NO_TYPE" })),
        (t.maybeDetailView = (0, o.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({ ...(0, o.dataModelItemView)(e), email: n(e.Email), name: n(e.EmailName), type: e.Type || "NO_TYPE" });
      t.listView = (e) => e.map(t.itemView);
    },
    95633: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(28074),
        o = r(50329);
      t.config = {
        commands: {},
        queries: {
          getIdentities: { selector: a.viewedQueriedIdentitiesSelector },
          getIdentitiesCount: { selector: a.identitiesCountSelector },
          getIdentity: { selector: a.viewedIdentitySelector }
        },
        liveQueries: {
          liveIdentities: { operator: o.identities$ },
          liveIdentitiesCount: { operator: o.identitiesCount$ },
          liveIdentity: { operator: o.getIdentity$ }
        }
      };
    },
    91494: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeIdentitySpecificProps = t.makeNewIdentity = t.makeUpdatedIdentity = void 0);
      const a = r(16516),
        o = r(78163),
        n = r(95623),
        i = r(53);
      function s(e) {
        const t = (0, a.defaultTo)("");
        return {
          FirstName: t(e.content.firstName),
          MiddleName: t(e.content.middleName),
          LastName: t(e.content.lastName),
          LastName2: t(e.content.lastName2),
          Pseudo: t(e.content.pseudo),
          BirthDate: t(e.content.birthDate),
          BirthPlace: t(e.content.birthPlace),
          Title: t(e.content.title)
        };
      }
      (t.makeUpdatedIdentity = async function (e, t) {
        return (
          n.Debugger.log(`[Data] Updating existing Identity with id: ${t.Id}`),
          {
            ...t,
            ...(0, o.makeUpdatedPersonalDataItemBase)({ existingItem: t, updatedItem: e, itemUpdateDate: (0, i.getUnixTimestamp)() }),
            ...s(e)
          }
        );
      }),
        (t.makeNewIdentity = async function (e) {
          return n.Debugger.log("[Data] Adding new Identity"), { ...(0, o.makeNewPersonalDataItemBase)(e), ...s(e) };
        }),
        (t.makeIdentitySpecificProps = s);
    },
    50329: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getIdentity$ = t.identitiesCount$ = t.identities$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(28074);
      t.identities$ = (0, n.getLivePersonalInfo)(i.getLiveIdentitiesSelector);
      t.identitiesCount$ = () => (0, a.pipe)((0, o.map)(i.identitiesCountSelector), (0, o.distinctUntilChanged)());
      t.getIdentity$ = (e) => {
        const t = (0, i.getViewedIdentitySelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    22742: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getIdentityMappers = void 0);
      const a = r(83539);
      t.getIdentityMappers = () => ({ spaceId: (e) => e.SpaceId, lastUse: a.lastUseMapper, id: (e) => e.Id });
    },
    86052: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.identityMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234);
      (t.searchGetters = [
        (0, o.stringProp)("BirthDate"),
        (0, o.stringProp)("BirthPlace"),
        (0, o.stringProp)("FirstName"),
        (0, o.stringProp)("LastName"),
        (0, o.stringProp)("LastName2"),
        (0, o.stringProp)("MiddleName"),
        (0, o.stringProp)("Pseudo")
      ]),
        (t.identityMatch = (0, a.match)(t.searchGetters));
    },
    28074: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedIdentitySelector =
          t.viewedIdentitySelector =
          t.getLiveIdentitiesSelector =
          t.identitiesCountSelector =
          t.viewedQueriedIdentitiesSelector =
          t.queryIdentitiesSelector =
          t.identityMappersSelector =
          t.identitySelector =
          t.identitiesByIdSelector =
          t.identitiesSelector =
            void 0);
      const a = r(16516),
        o = r(86052),
        n = r(76652),
        i = r(63566),
        s = r(24589),
        c = r(97006),
        l = r(49551),
        d = r(32034),
        u = r(22742),
        p = r(40602),
        S = r(57989);
      (t.identitiesSelector = (0, d.createSelector)(
        (e) => e.userSession.personalData.identities,
        S.quarantinedSpacesSelector,
        p.filterOutQuarantinedItems
      )),
        (t.identitiesByIdSelector = (0, d.createSelector)(t.identitiesSelector, (e) => e.reduce((e, t) => ((e[t.Id] = t), e), {})));
      t.identitySelector = (e, r) => {
        const a = (0, t.identitiesSelector)(e);
        return (0, l.findDataModelObject)(r, a);
      };
      t.identityMappersSelector = (e) => (0, u.getIdentityMappers)();
      const m = () => o.identityMatch;
      (t.queryIdentitiesSelector = (0, s.getQuerySelector)(t.identitiesSelector, m, t.identityMappersSelector)),
        (t.viewedQueriedIdentitiesSelector = (0, a.compose)((0, i.viewListResults)(n.listView), t.queryIdentitiesSelector));
      (t.identitiesCountSelector = (e) => e.userSession.personalData.identities?.length ?? 0),
        (t.getLiveIdentitiesSelector = (0, c.makeLiveSelectorGetter)(t.identitiesSelector, () => n.listView, m, t.identityMappersSelector));
      t.viewedIdentitySelector = (e, r) => {
        const a = (0, t.identitySelector)(e, r);
        return (0, n.maybeDetailView)(a);
      };
      t.getViewedIdentitySelector = (e) => {
        const r = (0, d.createSelector)(t.identitiesSelector, (t) => (0, l.findDataModelObject)(e, t));
        return (0, d.createSelector)(r, n.maybeDetailView);
      };
    },
    76652: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(16516),
        o = r(82043),
        n = (0, a.defaultTo)("");
      (t.detailView = (e) => ({
        ...(0, o.dataModelDetailView)(e),
        birthDate: n(e.BirthDate),
        birthPlace: n(e.BirthPlace),
        firstName: n(e.FirstName),
        lastName2: n(e.LastName2),
        lastName: n(e.LastName),
        middleName: n(e.MiddleName),
        pseudo: n(e.Pseudo),
        title: e.Title
      })),
        (t.maybeDetailView = (0, o.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({
        ...(0, o.dataModelItemView)(e),
        birthDate: n(e.BirthDate),
        birthPlace: n(e.BirthPlace),
        firstName: n(e.FirstName),
        lastName2: n(e.LastName2),
        lastName: n(e.LastName),
        middleName: n(e.MiddleName),
        pseudo: n(e.Pseudo),
        title: e.Title
      });
      t.listView = (e) => e.map(t.itemView);
    },
    6210: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(81473),
        o = r(96055);
      t.config = {
        commands: {},
        queries: {
          getPersonalWebsite: { selector: a.viewedPersonalWebsiteSelector },
          getPersonalWebsites: { selector: a.viewedQueriedPersonalWebsitesSelector }
        },
        liveQueries: { livePersonalWebsite: { operator: o.getPersonalWebsite$ }, livePersonalWebsites: { operator: o.personalWebsites$ } }
      };
    },
    29565: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makePersonalWebsiteSpecificProps = t.makeNewPersonalWebsite = t.makeUpdatedPersonalWebsite = void 0);
      const a = r(16516),
        o = r(78163),
        n = r(53),
        i = r(95623);
      function s(e) {
        const t = (0, a.defaultTo)("");
        return { Website: t(e.content.website), Name: t(e.content.name) };
      }
      (t.makeUpdatedPersonalWebsite = async function (e, t) {
        return (
          i.default.log(`[Data] Updating existing PersonalWebsite with id: ${t.Id}`),
          {
            ...t,
            ...(0, o.makeUpdatedPersonalDataItemBase)({ existingItem: t, updatedItem: e, itemUpdateDate: (0, n.getUnixTimestamp)() }),
            ...s(e)
          }
        );
      }),
        (t.makeNewPersonalWebsite = async function (e) {
          return i.default.log("[Data] Adding new PersonalWebsite"), { ...(0, o.makeNewPersonalDataItemBase)(e), ...s(e) };
        }),
        (t.makePersonalWebsiteSpecificProps = s);
    },
    96055: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPersonalWebsite$ = t.personalWebsites$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(81473);
      t.personalWebsites$ = (0, n.getLivePersonalInfo)(i.getLivePersonalWebsitesSelector);
      t.getPersonalWebsite$ = (e) => {
        const t = (0, i.getViewedPersonalWebsiteSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    93315: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPersonalWebsiteMappers = void 0);
      const a = r(83539);
      t.getPersonalWebsiteMappers = () => ({ spaceId: (e) => e.SpaceId, lastUse: a.lastUseMapper, id: (e) => e.Id });
    },
    86963: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.personalWebsiteMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234);
      (t.searchGetters = [(0, o.stringProp)("Name"), (0, o.stringProp)("Website")]),
        (t.personalWebsiteMatch = (0, a.match)(t.searchGetters));
    },
    81473: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedPersonalWebsiteSelector =
          t.viewedPersonalWebsiteSelector =
          t.getLivePersonalWebsitesSelector =
          t.viewedQueriedPersonalWebsitesSelector =
          t.queryPersonalWebsitesSelector =
          t.personalWebsiteMappersSelector =
          t.personalWebsiteSelector =
          t.personalWebsitesSelector =
            void 0);
      const a = r(16516),
        o = r(32034),
        n = r(86963),
        i = r(70024),
        s = r(63566),
        c = r(24589),
        l = r(97006),
        d = r(49551),
        u = r(93315),
        p = r(40602),
        S = r(57989);
      t.personalWebsitesSelector = (0, o.createSelector)(
        (e) => e.userSession.personalData.personalWebsites,
        S.quarantinedSpacesSelector,
        p.filterOutQuarantinedItems
      );
      t.personalWebsiteSelector = (e, r) => {
        const a = (0, t.personalWebsitesSelector)(e);
        return (0, d.findDataModelObject)(r, a);
      };
      t.personalWebsiteMappersSelector = (e) => (0, u.getPersonalWebsiteMappers)();
      const m = () => n.personalWebsiteMatch;
      (t.queryPersonalWebsitesSelector = (0, c.getQuerySelector)(t.personalWebsitesSelector, m, t.personalWebsiteMappersSelector)),
        (t.viewedQueriedPersonalWebsitesSelector = (0, a.compose)((0, s.viewListResults)(i.listView), t.queryPersonalWebsitesSelector)),
        (t.getLivePersonalWebsitesSelector = (0, l.makeLiveSelectorGetter)(
          t.personalWebsitesSelector,
          () => i.listView,
          m,
          t.personalWebsiteMappersSelector
        ));
      t.viewedPersonalWebsiteSelector = (e, r) => {
        const a = (0, t.personalWebsiteSelector)(e, r);
        return (0, i.maybeDetailView)(a);
      };
      t.getViewedPersonalWebsiteSelector = (e) => {
        const r = (0, o.createSelector)(t.personalWebsitesSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, o.createSelector)(r, i.maybeDetailView);
      };
    },
    70024: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(16516),
        o = r(82043),
        n = (0, a.defaultTo)("");
      (t.detailView = (e) => ({
        ...(0, o.dataModelDetailView)(e),
        name: n(e.Name),
        personalNote: n(e.PersonalNote),
        website: n(e.Website)
      })),
        (t.maybeDetailView = (0, o.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({ ...(0, o.dataModelItemView)(e), name: n(e.Name), website: n(e.Website) });
      t.listView = (e) => e.map(t.itemView);
    },
    14037: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(82439),
        o = r(21264);
      t.config = {
        commands: {},
        queries: { getPhone: { selector: a.viewedPhoneSelector }, getPhones: { selector: a.viewedQueriedPhonesSelector } },
        liveQueries: { livePhone: { operator: o.getPhone$ }, livePhones: { operator: o.phones$ } }
      };
    },
    39732: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parsePhoneNumbers = t.makePhoneSpecificProps = t.makeNewPhone = t.makeUpdatedPhone = void 0);
      const a = r(16516),
        o = r(22630),
        n = r(32626),
        i = r(78163),
        s = r(86056),
        c = r(10360),
        l = r(53),
        d = r(28445),
        u = r(95623);
      function p(e) {
        const t = (0, a.defaultTo)(""),
          { Number: r, NumberInternational: o, NumberNational: i } = S(e);
        return {
          Number: r,
          NumberInternational: o,
          NumberNational: i,
          PersonalNote: t(e.content.personalNote),
          PhoneName: e.content.phoneName || i,
          Type: n.PhoneType[e.content.type] || n.PhoneType.PHONE_TYPE_ANY
        };
      }
      function S(e) {
        const { localeFormat: t, number: r } = e.content;
        if (!r) return { Number: "", NumberInternational: "", NumberNational: "" };
        const a = ((0, c.isProposedLocaleLocalized)(t) && n.Country[t]) || n.Country[(0, s.getPlatformInfo)().country] || n.Country.US;
        if (!(a ? (0, o.isValidNumber)(r, a) : (0, o.isValidNumber)(r)))
          return { Number: (0, d.removeNonDigitCharacters)(r), NumberInternational: r, NumberNational: r };
        const i = (0, o.parsePhoneNumber)(r, a),
          l = i.formatNational(),
          u = i.formatInternational();
        return { Number: (0, d.removeNonDigitCharacters)(r), NumberInternational: u, NumberNational: l };
      }
      (t.makeUpdatedPhone = async function (e, t) {
        return (
          u.default.log(`[Data] Updating existing Phone with id: ${t.Id}`),
          {
            ...t,
            ...(0, i.makeUpdatedPersonalDataItemBase)({ existingItem: t, updatedItem: e, itemUpdateDate: (0, l.getUnixTimestamp)() }),
            ...p(e)
          }
        );
      }),
        (t.makeNewPhone = async function (e) {
          return u.default.log("[Data] Adding new Phone"), { ...(0, i.makeNewPersonalDataItemBase)(e), ...p(e) };
        }),
        (t.makePhoneSpecificProps = p),
        (t.parsePhoneNumbers = S);
    },
    21264: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPhone$ = t.phones$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(55220),
        i = r(82439);
      t.phones$ = (0, n.getLivePersonalInfo)(i.getLivePhonesSelector);
      t.getPhone$ = (e) => {
        const t = (0, i.getViewedPhoneSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
    },
    90076: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPhoneMappers = void 0);
      const a = r(83539);
      t.getPhoneMappers = () => ({ spaceId: (e) => e.SpaceId, lastUse: a.lastUseMapper, id: (e) => e.Id });
    },
    41648: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.phoneMatch = t.searchGetters = void 0);
      const a = r(64455),
        o = r(82234);
      (t.searchGetters = [(0, o.stringProp)("Number"), (0, o.stringProp)("PhoneName")]), (t.phoneMatch = (0, a.match)(t.searchGetters));
    },
    82439: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getViewedPhoneSelector =
          t.viewedPhoneSelector =
          t.getLivePhonesSelector =
          t.viewedQueriedPhonesSelector =
          t.queryPhonesSelector =
          t.phoneMappersSelector =
          t.phoneSelector =
          t.phonesSelector =
            void 0);
      const a = r(16516),
        o = r(41648),
        n = r(83566),
        i = r(90076),
        s = r(63566),
        c = r(24589),
        l = r(97006),
        d = r(49551),
        u = r(32034),
        p = r(40602),
        S = r(57989);
      t.phonesSelector = (0, u.createSelector)(
        (e) => e.userSession.personalData.phones,
        S.quarantinedSpacesSelector,
        p.filterOutQuarantinedItems
      );
      t.phoneSelector = (e, r) => {
        const a = (0, t.phonesSelector)(e);
        return (0, d.findDataModelObject)(r, a);
      };
      t.phoneMappersSelector = (e) => (0, i.getPhoneMappers)();
      const m = () => o.phoneMatch;
      (t.queryPhonesSelector = (0, c.getQuerySelector)(t.phonesSelector, m, t.phoneMappersSelector)),
        (t.viewedQueriedPhonesSelector = (0, a.compose)((0, s.viewListResults)(n.listView), t.queryPhonesSelector)),
        (t.getLivePhonesSelector = (0, l.makeLiveSelectorGetter)(t.phonesSelector, () => n.listView, m, t.phoneMappersSelector));
      t.viewedPhoneSelector = (e, r) => {
        const a = (0, t.phoneSelector)(e, r);
        return (0, n.maybeDetailView)(a);
      };
      t.getViewedPhoneSelector = (e) => {
        const r = (0, u.createSelector)(t.phonesSelector, (t) => (0, d.findDataModelObject)(e, t));
        return (0, u.createSelector)(r, n.maybeDetailView);
      };
    },
    83566: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = t.maybeDetailView = t.detailView = void 0);
      const a = r(16516),
        o = r(82043),
        n = (0, a.defaultTo)(""),
        i = (e) => n(e.NumberInternational || e.NumberNational || e.Number);
      (t.detailView = (e) => ({
        ...(0, o.dataModelDetailView)(e),
        displayNumber: i(e),
        name: n(e.PhoneName),
        number: n(e.Number),
        numberInternational: n(e.NumberNational),
        numberNational: n(e.NumberNational),
        personalNote: n(e.PersonalNote),
        type: e.Type
      })),
        (t.maybeDetailView = (0, o.maybeDataModelDetailView)(t.detailView));
      t.itemView = (e) => ({
        ...(0, o.dataModelItemView)(e),
        displayNumber: i(e),
        name: n(e.PhoneName),
        numberInternational: n(e.NumberNational),
        number: n(e.Number),
        type: e.Type
      });
      t.listView = (e) => e.map(t.itemView);
    },
    55220: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getLivePersonalInfo = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(35893),
        i = r(33627);
      t.getLivePersonalInfo = (e) => (t) => {
        const r = (0, n.parseToken)(t),
          s = e(r);
        return (0, a.pipe)(
          (0, o.map)(s),
          (0, o.distinctUntilChanged)((e, t) => (0, i.sameBatch)(e.items, t.items) && e.matchingCount === t.matchingCount)
        );
      };
    },
    64455: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.match = void 0);
      const a = r(97601);
      t.match = (e) => (t, r) =>
        "string" == typeof t &&
        0 !== t.length &&
        e.some((e) => {
          const o = e(r) || "";
          return (0, a.normalizeString)(o).includes(t);
        });
    },
    82234: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.stringProp = void 0);
      const a = r(16516);
      t.stringProp = (e) => (0, a.prop)(e);
    },
    63566: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.viewListResults = void 0);
      t.viewListResults =
        (e) =>
        ({ items: t, matchingCount: r }) => ({ items: e(t), matchingCount: r });
    },
    2105: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(64202),
        o = r(61426),
        n = r(72918);
      t.config = {
        commands: {
          addSecret: { handler: o.addSecretHandler },
          updateSecret: { handler: o.updateSecretHandler },
          deleteSecret: { handler: o.deleteSecretHandler }
        },
        queries: {
          getSecret: { selector: a.viewedSecretSelector },
          getSecrets: { selector: a.viewedQueriedSecretsSelector },
          getSecretsCount: { selector: a.secretsCountSelector },
          getSecretsPage: { selector: a.secretsPageSelector },
          getSecretsPaginationToken: { selector: a.secretsPaginationTokenSelector }
        },
        liveQueries: {
          liveSecret: { operator: n.getSecret$ },
          liveSecrets: { operator: n.secrets$ },
          liveSecretsBatch: { operator: n.secretsBatch$ },
          liveSecretsCount: { operator: n.secretsCount$ }
        }
      };
    },
    71498: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.handleLimitedSharedSecrets = void 0);
      const a = r(89489),
        o = r(37275);
      t.handleLimitedSharedSecrets = function (e, t, r) {
        const n = (0, o.getSharingDataWithCollections)(t),
          i = (0, a.getLimitedSharedItemIds)(t, n.collections, n.itemGroups, r);
        return e.map((e) => ({ ...e, ...(i[e.Id] ? { limitedPermissions: !0 } : {}) }));
      };
    },
    96391: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addSecretHandler = t.secretFormatter = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(23136),
        i = r(98900),
        s = r(48313),
        c = r(53),
        l = r(78320),
        d = r(70252),
        u = r(13675),
        p = r(79980),
        S = r(73566),
        m = r(85225),
        g = r(56915);
      t.secretFormatter = (e) => {
        const t = (0, u.sanitizeInputPersonalData)(e),
          r = (0, c.getUnixTimestamp)();
        return {
          kwType: "KWSecret",
          AnonId: (0, l.generateItemUuid)(),
          CreationDatetime: r,
          Id: (0, l.generateItemUuid)(),
          LocaleFormat: o.Country.US,
          SpaceId: t.spaceId || "",
          UserModificationDatetime: r,
          LastBackupTime: 0,
          Title: t.title || "Untitled secret",
          Content: t.content || ""
        };
      };
      t.addSecretHandler = async (e, r) => {
        try {
          (({ storeService: e, sessionService: r, eventLoggerService: a }, o) => {
            const i = e.getPersonalData(),
              c = (0, t.secretFormatter)(o);
            if (!c.SpaceId) {
              const t = (0, n.getDefaultSpaceId)(e);
              c.SpaceId = t;
            }
            (0, p.logAddVaultItem)(e, a, c);
            const l = (0, S.getUpdatedItemChangeHistory)({
              deviceName: e.getLocalSettings().deviceName,
              personalData: i,
              change: (0, m.makeUpdateChange)(c),
              userLogin: e.getUserLogin(),
              platformInfo: (0, g.platformInfoSelector)(e.getState())
            });
            e.dispatch((0, s.savePersonalDataItem)(c, c.kwType, l)), r.getInstance().user.persistPersonalData();
          })(e, r);
          return (
            (0, n.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save),
            Promise.resolve({ success: !0 })
          );
        } catch (e) {
          return (
            (0, d.sendExceptionLog)({ error: e }),
            e instanceof i.RequestError && void 0 !== e.code
              ? Promise.resolve({ success: !1, error: { code: e.code } })
              : Promise.resolve({ success: !1 })
          );
        }
      };
    },
    56823: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteSecretHandler = void 0);
      const a = r(93039),
        o = r(23136),
        n = r(64202),
        i = r(70252),
        s = r(45291),
        c = r(79980),
        l = r(36513),
        d = r(90622),
        u = r(36884),
        p = r(58107),
        S = r(71646),
        m = r(63698),
        g = r(45157),
        y = r(16593),
        h = r(52102),
        v = r(32626),
        f = async ({ storeService: e, eventLoggerService: t, wsService: r }, a) => {
          const o = e.getState();
          try {
            let i = null;
            const f = (0, n.secretSelector)(o, a);
            if (!f) return { success: !1, error: { code: v.DeleteSecretErrorCode.NOT_FOUND } };
            const w = (0, l.makeCryptoService)(),
              A = (0, y.userLoginSelector)(o),
              P = (0, d.ukiSelector)(e.getState()),
              { makeRefuseItemGroupEvent: T } = (0, u.makeItemGroupService)(r, w),
              { Id: b } = f,
              { userGroups: I, itemGroups: C } = (0, h.sharingDataSelector)(o),
              E = (0, S.findItemItemGroup)(b, C);
            if (E) {
              const e = (0, p.isUserLastAdmin)(E, A),
                t = (0, p.doesUserReceiveItemGroupViaGroup)(E, I, A);
              if (!(!e && !t))
                return {
                  success: !1,
                  error: {
                    code: e
                      ? v.DeleteSecretErrorCode.LEAVE_SHARING_FORBIDDEN_LAST_ADMIN
                      : v.DeleteSecretErrorCode.LEAVE_SHARING_FORBIDDEN_GROUP_ITEM
                  }
                };
              try {
                const { groupId: e, revision: t } = E,
                  { refuseItemGroup: r } = (0, m.makeItemGroupWS)(),
                  a = await T(e, t, null);
                await r(A, P, a);
              } catch (e) {
                return { success: !1, error: { code: v.DeleteSecretErrorCode.LEAVE_SHARING_FAILED } };
              }
            }
            i = (0, g.getRemoveChangeHistory)(e, f);
            const _ = (0, s.removePersonalItem)(f.kwType, f.Id, i);
            return e.dispatch(_), (0, c.logDeleteVaultItem)(e, t, f), { success: !0 };
          } catch (e) {
            const t = new Error(`[Secrets] - deleteSecret: ${e}`);
            return (0, i.sendExceptionLog)({ error: t }), { success: !1, error: { code: v.DeleteSecretErrorCode.INTERNAL_ERROR } };
          }
        };
      t.deleteSecretHandler = async function (e, { id: t }) {
        const r = await f(e, t);
        if (r.success) {
          (0, o.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save);
        }
        return Promise.resolve(r);
      };
    },
    61426: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(96391), t), o(r(94915), t), o(r(56823), t);
    },
    94915: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateSecretHandler = t.getUpdatedSecret = void 0);
      const a = r(32626),
        o = r(93039),
        n = r(64202),
        i = r(23136),
        s = r(98900),
        c = r(48313),
        l = r(53),
        d = r(70252),
        u = r(13675),
        p = r(79980),
        S = r(96850),
        m = r(73566),
        g = r(85225),
        y = r(56915),
        h = r(84511);
      function v(e, t) {
        if (!e) throw new s.RequestError("[updateSecret]: unable to find secret to update.", a.SecretSaveResultErrorCode.NOT_FOUND);
        const r = (0, u.sanitizeInputPersonalData)(t),
          o = (0, l.getUnixTimestamp)(),
          n = { Title: r.title ?? e.Title, Content: r.content ?? e.Content, SpaceId: r.spaceId ?? e.SpaceId, UserModificationDatetime: o };
        return { ...e, ...n };
      }
      (t.getUpdatedSecret = v),
        (t.updateSecretHandler = async function (e, t) {
          try {
            !(function ({ storeService: e, sessionService: t, eventLoggerService: r }, a) {
              if (!e.isAuthenticated()) throw new Error("No session available to updateSecret");
              const o = e.getPersonalData(),
                i = (0, n.secretSelector)(e.getState(), a.id),
                s = v(i, a);
              (0, S.notifySharersSecretUpdated)(e, i, s), (0, p.logEditVaultItem)(e, r, s, i);
              const l = (0, m.getUpdatedItemChangeHistory)({
                deviceName: e.getLocalSettings().deviceName,
                personalData: o,
                change: (0, g.makeUpdateChange)(s),
                userLogin: e.getUserLogin(),
                platformInfo: (0, y.platformInfoSelector)(e.getState())
              });
              e.dispatch((0, c.savePersonalDataItem)(s, s.kwType, l)), t.getInstance().user.persistPersonalData();
            })(e, t);
            const r = e.storeService.getState();
            if ((0, h.isSharedSelector)(r, t.id)) await e.sessionService.getInstance().user.attemptSync(o.Trigger.SettingsChange);
            else {
              (0, i.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, o.Trigger.Save);
            }
            return Promise.resolve({ success: !0 });
          } catch (e) {
            return (
              (0, d.sendExceptionLog)({ error: e }),
              e instanceof s.RequestError && void 0 !== e.code
                ? Promise.resolve({ success: !1, error: { code: e.code } })
                : Promise.resolve({ success: !1 })
            );
          }
        });
    },
    98900: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updatedAt = t.createdAt = t.RequestError = void 0);
      const a = r(16516);
      class o extends Error {
        constructor(e, t) {
          super(e), Object.setPrototypeOf(this, new.target.prototype), (this.name = "RequestError"), (this.code = t);
        }
      }
      t.RequestError = o;
      t.createdAt = (e) => ((0, a.isNil)(e.CreationDatetime) ? 0 : e.CreationDatetime);
      t.updatedAt = (e) => ((0, a.isNil)(e.UserModificationDatetime) ? 0 : e.UserModificationDatetime);
    },
    96850: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notifySharersSecretUpdated = t.makeSecretSpecificProps = t.makeNewSecret = t.makeUpdatedSecret = t.sharedFields = void 0);
      const a = r(16516),
        o = r(53),
        n = r(70252),
        i = r(78163);
      function s(e) {
        return { Title: e.title || "Untitled secret", Content: e.content || "" };
      }
      (t.sharedFields = ["Title", "Content"]),
        (t.makeUpdatedSecret = async function (e, t) {
          return {
            ...t,
            ...(0, i.makeUpdatedPersonalDataItemBase)({ existingItem: t, updatedItem: e, itemUpdateDate: (0, o.getUnixTimestamp)() }),
            ...s(e.content)
          };
        }),
        (t.makeNewSecret = async function (e) {
          return { ...(0, i.makeNewPersonalDataItemBase)(e), ...s(e.content) };
        }),
        (t.makeSecretSpecificProps = s),
        (t.notifySharersSecretUpdated = async function (e, r, o) {
          !(0, a.equals)((0, a.pick)(t.sharedFields, r), (0, a.pick)(t.sharedFields, o)) &&
            (await (0, i.notifySharersOnUpdate)(e, o).catch((e) => {
              const t = new Error(`[Sharing] - notifySharersSecretUpdated: ${e}`);
              (0, n.sendExceptionLog)({ error: t });
            }));
        });
    },
    72918: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.secrets$ = t.secretsCount$ = t.getSecret$ = t.secretsBatch$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(64202),
        i = r(35893),
        s = r(55220),
        c = r(33627);
      t.secretsBatch$ = (e) => {
        const t = (0, i.parseToken)(e),
          r = (0, n.getViewedSecretsBatchSelector)(t);
        return (0, a.pipe)((0, o.map)(r), (0, o.distinctUntilChanged)(c.sameBatch));
      };
      t.getSecret$ = (e) => {
        const t = (0, n.getViewedSecretSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
      (t.secretsCount$ = (e) => {
        const t = (0, i.parseToken)(e);
        return (0, a.pipe)(
          (0, o.map)((e) => (0, n.secretsCountSelector)(e, t)),
          (0, o.distinctUntilChanged)()
        );
      }),
        (t.secrets$ = (0, s.getLivePersonalInfo)(n.getLiveSecretsSelector));
    },
    54860: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getSecretMappers = void 0);
      const a = r(98900),
        o = r(83539),
        n = r(71646);
      t.getSecretMappers = (e) => ({
        groupIds: (t) => (0, n.getItemUserGroupIds)(e, t.Id),
        sharingUserIds: (t) => (0, n.getItemUserIds)(e, t.Id),
        createdAt: a.createdAt,
        id: (e) => e.Id,
        lastUse: o.lastUseMapper,
        spaceId: (e) => e.SpaceId,
        title: (e) => e.Title,
        updatedAt: a.updatedAt
      });
    },
    93823: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSecretsBatch = t.viewSecretsBatch = t.getSecretsFirstToken = t.getSecretsSortToken = t.getSecretsFilterToken = void 0);
      const a = r(16516),
        o = r(20553),
        n = r(19238),
        i = r(83687);
      t.getSecretsFilterToken = ({ filterCriteria: e }) => ({ filterCriteria: e || [] });
      t.getSecretsSortToken = ({ sortCriteria: e }) => ({ uniqField: "id", sortCriteria: e || [] });
      t.getSecretsFirstToken = (e, t, r, a) => (0, o.generateFirstToken)(e, t, r.initialBatchSize || 30, a);
      (t.viewSecretsBatch = (e, t, r) => {
        const a = (0, i.getSharingStatusItem)(t, r);
        return (0, n.listView)(a, e);
      }),
        (t.getSecretsBatch = (0, a.curry)((e, t, r) => (0, o.getBatch)(r, e, t)));
    },
    57141: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.secretMatch = t.searchGetters = t.limitedSearchGetters = void 0);
      const a = r(64455),
        o = r(82234);
      (t.limitedSearchGetters = [(0, o.stringProp)("Title")]),
        (t.searchGetters = [...t.limitedSearchGetters, (0, o.stringProp)("Content")]);
      t.secretMatch = (e, r) => (0, a.match)(t.searchGetters)(e, r);
    },
    64202: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.secretsCountSelector =
          t.viewedQueriedSecretsSelector =
          t.querySecretsSelector =
          t.getViewedSecretSelector =
          t.getLiveSecretsSelector =
          t.getViewedSecretsBatchSelector =
          t.secretsQuerySelector =
          t.fieldMappersSelector =
          t.secretsPaginationTokenSelector =
          t.secretsPageSelector =
          t.viewedSecretSelector =
          t.secretSelector =
            void 0);
      const a = r(16516),
        o = r(32034),
        n = r(93823),
        i = r(54860),
        s = r(65021),
        c = r(20553),
        l = r(35893),
        d = r(91210),
        u = r(80993),
        p = r(49551),
        S = r(57141),
        m = r(24589),
        g = r(63566),
        y = r(52102),
        h = r(16593),
        v = r(97006),
        f = r(89698),
        w = r(81904);
      t.secretSelector = (e, t) => {
        const r = (0, w.secretsSelector)(e);
        return (0, p.findDataModelObject)(t, r);
      };
      t.viewedSecretSelector = (e, r) => {
        const a = (0, t.secretSelector)(e, r);
        if (!a) return;
        const o = (0, y.sharingDataSelector)(e),
          n = (0, h.userIdSelector)(e),
          i = (0, d.limitedSharingItemsSelector)(e);
        return (0, s.viewSecret)(a, o, n, i);
      };
      t.secretsPageSelector = (e, r) => {
        const a = (0, l.parseToken)(r),
          { sortToken: o, filterToken: n } = a,
          i = { sortToken: o, filterToken: n },
          s = (0, t.fieldMappersSelector)(e),
          d = (0, t.secretsQuerySelector)(e, i),
          u = b(e),
          p = (0, c.generateNextToken)(s, a, d),
          S = (0, c.generatePrevToken)(s, a, d),
          m = (0, c.getBatch)(s, a, d),
          g = (0, l.stringifyToken)(p),
          y = (0, l.stringifyToken)(S);
        return { batch: u(m), nextToken: g, prevToken: y };
      };
      (t.secretsPaginationTokenSelector = (e, r) => {
        const a = (0, n.getSecretsSortToken)(r),
          o = (0, n.getSecretsFilterToken)(r),
          i = (0, t.fieldMappersSelector)(e),
          s = { sortToken: a, filterToken: o },
          c = (0, t.secretsQuerySelector)(e, s),
          d = (0, n.getSecretsFirstToken)(i, s, r, c);
        return (0, l.stringifyToken)(d);
      }),
        (t.fieldMappersSelector = (0, o.createSelector)(f.acceptedItemGroupsSelector, i.getSecretMappers));
      const A = (0, l.createOptimizedSortTokenSelector)((e, { sortToken: t }) => t, a.identity),
        P = (0, l.createOptimizedFilterTokenSelector)((e, { filterToken: t }) => t, a.identity),
        T = () => S.secretMatch;
      t.secretsQuerySelector = (0, o.createSelector)(t.fieldMappersSelector, T, A, P, w.secretsSelector, l.queryData);
      t.getViewedSecretsBatchSelector = (e) => {
        const { sortToken: r, filterToken: a } = e,
          i = { sortToken: r, filterToken: a },
          s = (0, n.getSecretsBatch)(e),
          c = (0, o.createSelector)((e) => (0, t.secretsQuerySelector)(e, i), t.fieldMappersSelector, s),
          p = (0, l.optimizeBatchSelector)(c);
        return (0, o.createSelector)(p, u.sortedSharedItemIdsSelector, d.limitedSharingItemsSelector, n.viewSecretsBatch);
      };
      const b = (e) => {
        const t = (0, u.sortedSharedItemIdsSelector)(e),
          r = (0, d.limitedSharingItemsSelector)(e);
        return (e) => (0, n.viewSecretsBatch)(e, t, r);
      };
      t.getLiveSecretsSelector = (0, v.makeLiveSelectorGetter)(w.secretsSelector, b, T, t.fieldMappersSelector);
      (t.getViewedSecretSelector = (e) => {
        const t = (0, o.createSelector)(w.secretsSelector, (t) => (0, p.findDataModelObject)(e, t));
        return (0, o.createSelector)(t, y.sharingDataSelector, h.userIdSelector, d.limitedSharingItemsSelector, s.viewSecret);
      }),
        (t.querySecretsSelector = (0, m.getQuerySelector)(w.secretsSelector, T, t.fieldMappersSelector));
      (t.viewedQueriedSecretsSelector = (e, r) => {
        const a = (0, t.querySecretsSelector)(e, r),
          o = b(e);
        return (0, g.viewListResults)(o)(a);
      }),
        (t.secretsCountSelector = (0, o.createSelector)(
          t.fieldMappersSelector,
          T,
          P,
          w.secretsSelector,
          (e, t, r, a) => (0, l.filterData)(e, t, r, a).length
        ));
    },
    81904: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.secretsSelector = void 0);
      const a = r(32034),
        o = r(40602),
        n = r(57989);
      t.secretsSelector = (0, a.createSelector)(
        (e) => e.userSession.personalData.secrets,
        n.quarantinedSpacesSelector,
        o.filterOutQuarantinedItems
      );
    },
    65021: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.viewSecret = void 0);
      const a = r(83687),
        o = r(45589);
      t.viewSecret = function (e, t, r, n) {
        if (!e) return;
        const i = (0, a.getSharingStatusDetail)(n, t, r);
        return (0, o.detailView)(i, e);
      };
    },
    45589: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.detailView = void 0);
      const a = r(16516),
        o = r(82043),
        n = r(98900),
        i = (0, a.defaultTo)("");
      t.detailView = (0, a.curry)((e, t) => ({
        ...(0, o.dataModelDetailView)(t),
        content: i(t.Content),
        createdAt: (0, n.createdAt)(t),
        sharingStatus: e(t.Id),
        title: i(t.Title),
        updatedAt: (0, n.updatedAt)(t)
      }));
    },
    19238: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = void 0);
      const a = r(16516),
        o = r(82043),
        n = r(98900),
        i = (0, a.defaultTo)("");
      t.itemView = (0, a.curry)((e, t) => {
        const r = ((e) => (e.length > 30 ? e.slice(0, 27) + "…" : e))(i(t.Content));
        return {
          ...(0, o.dataModelItemView)(t),
          abbrContent: r,
          createdAt: (0, n.createdAt)(t),
          sharingStatus: e(t.Id),
          title: i(t.Title),
          updatedAt: (0, n.updatedAt)(t)
        };
      });
      t.listView = (e, r) => {
        const a = (0, t.itemView)(e);
        return r.map(a);
      };
    },
    80529: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(24465),
        o = r(89642),
        n = r(37403),
        i = r(90489),
        s = r(81043),
        c = r(49006),
        l = r(27416),
        d = r(32818),
        u = r(9124),
        p = r(40409);
      t.config = {
        commands: {
          downloadSecureFile: { handler: i.downloadSecureFileHandler },
          deleteSecureFile: { handler: c.deleteSecureFileHandler },
          addSecureFile: { handler: a.addSecureFileHandler },
          validateSecureFile: { handler: d.validateSecureFileHandler },
          commitSecureFile: { handler: s.commitSecureFileHandler },
          initSecureFilesStorageInfo: { handler: n.initSecureFilesStorageInfoHandler },
          chunkTransferDone: { handler: u.chunkTransferDoneHandler },
          clearSecureFileState: { handler: p.clearSecureFileStateHandler }
        },
        queries: {
          getSecureFilesInfoList: { selector: o.secureFileInfoSelector },
          getSecureFilesQuota: { selector: o.secureFilesQuotaSelector },
          getFileDownloadProgress: { selector: o.secureFileDownloadSelector },
          getFileUploadProgress: { selector: o.secureFileUploadSelector }
        },
        liveQueries: {
          liveFileDownloadProgress: { operator: l.getFileDownloadProgress$ },
          liveFileUploadProgress: { operator: l.getFileUploadProgress$ },
          liveSecureFilesQuota: { operator: l.secureFilesQuota$ }
        }
      };
    },
    24465: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addSecureFileHandler = t.createSecureFile = void 0);
      const a = r(32626),
        o = r(35088),
        n = r(90622),
        i = r(16593),
        s = r(69530),
        c = r(46445),
        l = r(65675),
        d = r(16038),
        u = r(55623),
        p = r(27993),
        S = r(20810),
        m = r(89642),
        g = r(99994),
        y = { success: !1, error: { code: a.SecureFileResultErrorCode.SERVER_ERROR } },
        h = Math.pow(1024, 2) / 2,
        v = 1e3,
        f = (e) => {
          switch (e) {
            case a.SecureFileResultErrorCode.MAX_CONTENT_LENGTH_EXCEEDED:
              return a.SecureFileResultErrorCode.MAX_CONTENT_LENGTH_EXCEEDED;
            case a.SecureFileResultErrorCode.QUOTA_EXCEEDED:
              return a.SecureFileResultErrorCode.QUOTA_EXCEEDED;
            default:
              return a.SecureFileResultErrorCode.SERVER_ERROR;
          }
        },
        w = (e) => ("getAdditionalInfo" in e ? { success: !1, error: { code: f(e.getAdditionalInfo().webServiceSubMessage) } } : y),
        A = (e, t, r, a, n, i) => {
          const s = `{${(0, o.v4)()}}`,
            c = Math.floor(Date.now() / 1e3);
          return {
            kwType: "KWSecureFileInfo",
            Id: s,
            LastBackupTime: 0,
            CryptoKey: (0, d.bufferToBase64)(t),
            DownloadKey: "",
            Filename: a,
            LocalSize: e.byteLength,
            RemoteSize: r.byteLength,
            Type: n,
            CreationDatetime: c,
            UserModificationDatetime: c,
            Owner: i
          };
        };
      async function P(e, t, r, a) {
        try {
          const { cryptoConfig: o } = (0, l.parsePayload)("$1$noderivation$aes256$cbchmac$16$"),
            n = (0, u.getRandomValues)(32),
            i = await (0, c.hashAndSplitKey)(n),
            S = (0, p.generateIV)(),
            m = await (0, s.encryptAES256)({ key: i.aes, iv: S, clearData: e }),
            g = {
              salt: null,
              iv: S,
              hash: await (0, s.signHashHmacSHA256)({ key: i.hmac, data: (0, d.concatBuffers)(S, m) }),
              cipheredContent: m,
              cryptoConfig: o
            },
            y = (0, l.convertDashlaneSecureDataFlexibleToTransportableData)(g);
          return { success: !0, secureFileDataBuffer: y, secureFileInfo: A(e, n, y, t, r, a) };
        } catch (e) {
          return { success: !1 };
        }
      }
      (t.createSecureFile = P),
        (t.addSecureFileHandler = async function ({ wsService: e, storeService: t }, r) {
          const o = (0, i.userIdSelector)(t.getState());
          if (!(0, g.validateSecureFile)(r.fileName, r.fileType))
            return { success: !1, error: { code: a.SecureFileResultErrorCode.INVALID_FILE_TYPE } };
          let s;
          t.dispatch((0, S.secureFileStartUploadAction)(r.serializedContent.length)), t.dispatch((0, S.secureFileStartCipheringAction)());
          try {
            const e = JSON.parse(r.serializedContent);
            s = new Uint8Array(e).buffer;
          } catch (e) {
            return { success: !1, error: { code: a.SecureFileResultErrorCode.INTERNAL_ERROR } };
          }
          const { secureFileDataBuffer: c, secureFileInfo: l } = await P(s, r.fileName, r.fileType, o);
          if ((0, m.secureFilesQuotaSelector)(t.getState()).remaining < c.byteLength)
            return { success: !1, error: { code: a.SecureFileResultErrorCode.QUOTA_EXCEEDED } };
          const d = setInterval(() => {
            t.dispatch((0, S.secureFileUploadChunkAction)(h));
          }, v);
          let u = null;
          try {
            u = await e.secureFile.getUploadLink({
              contentLength: l.RemoteSize,
              secureFileInfoId: l.Id,
              login: o,
              uki: (0, n.ukiSelector)(t.getState())
            });
          } catch (e) {
            return clearInterval(d), t.dispatch((0, S.secureFileUploadErrorAction)()), w(e);
          }
          return 200 === u.code
            ? ((l.DownloadKey = u.content.key),
              (await (async function (e, t) {
                try {
                  const r = t.content.url,
                    a = new FormData();
                  for (const e of Object.keys(t.content.fields)) a.append(e, t.content.fields[e]);
                  return (
                    a.append("key", `${t.content.key}`),
                    a.append("acl", `${t.content.acl}`),
                    a.append("file", new Blob([e])),
                    204 === (await fetch(r, { method: "POST", body: a })).status
                  );
                } catch (e) {
                  return !1;
                }
              })(c, u))
                ? (t.dispatch((0, S.secureFileSetStorageInfoAction)(u.content.quota)),
                  clearInterval(d),
                  t.dispatch((0, S.secureFileUploadDoneAction)()),
                  t.dispatch((0, S.secureFileUploadClearAction)()),
                  { success: !0, secureFileInfo: l })
                : (clearInterval(d), y))
            : (clearInterval(d), t.dispatch((0, S.secureFileUploadErrorAction)()), y);
        });
    },
    9124: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.chunkTransferDoneHandler = void 0);
      const a = r(20810);
      t.chunkTransferDoneHandler = async function ({ storeService: e }, t) {
        return e.dispatch((0, a.secureFileChunkReadyAction)(t)), Promise.resolve();
      };
    },
    40409: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.clearSecureFileStateHandler = void 0);
      const a = r(20810);
      t.clearSecureFileStateHandler = async function ({ storeService: e }, t) {
        return e.dispatch((0, a.secureFileClearAction)(t)), Promise.resolve();
      };
    },
    81043: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.commitSecureFileHandler = void 0);
      const a = r(90622),
        o = r(16593),
        n = r(48313);
      t.commitSecureFileHandler = async function ({ wsService: e, sessionService: t, storeService: r }, { secureFileInfo: i }) {
        if (
          200 !==
          (
            await e.secureFile.commit({
              key: i.DownloadKey,
              secureFileInfoId: i.Id,
              login: (0, o.userIdSelector)(r.getState()),
              uki: (0, a.ukiSelector)(r.getState())
            })
          ).code
        )
          return { success: !1 };
        try {
          return r.dispatch((0, n.savePersonalDataItem)(i, i.kwType)), t.getInstance().user.persistPersonalData(), { success: !0 };
        } catch (e) {
          return { success: !1 };
        }
      };
    },
    49006: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteSecureFileHandler = void 0);
      const a = r(32626),
        o = r(90622),
        n = r(76496),
        i = r(16593),
        s = r(20810);
      t.deleteSecureFileHandler = async (e, t) => {
        const { storeService: r, wsService: c, eventLoggerService: l } = e,
          d = r.getState(),
          u = (0, i.userIdSelector)(d),
          p = (0, o.ukiSelector)(d),
          S = await (0, n.deletePersonalDataItem)({ storeService: r, wsService: c, eventLoggerService: l }, t.id);
        if (!S.success && S.reason !== a.RemovePersonalDataItemFailureReason.NOT_FOUND)
          return { success: !1, error: { code: a.SecureFileResultErrorCode.INTERNAL_ERROR } };
        let m = null;
        try {
          m = await c.secureFile.delete({ login: u, uki: p, secureFileInfoId: t.id });
        } catch (e) {
          return { success: !1, error: { code: a.SecureFileResultErrorCode.SERVER_ERROR } };
        }
        return S.reason === a.RemovePersonalDataItemFailureReason.NOT_FOUND
          ? { success: !1, error: { code: a.SecureFileResultErrorCode.FILE_NOT_FOUND } }
          : 200 !== m.code
          ? { success: !1, error: { code: a.SecureFileResultErrorCode.SERVER_ERROR } }
          : (r.dispatch((0, s.secureFileSetStorageInfoAction)(m.content.quota)), { success: !0 });
      };
    },
    90489: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.downloadSecureFileHandler = void 0);
      const a = r(32626),
        o = r(16516),
        n = r(20810),
        i = r(22349),
        s = r(37104),
        c = r(71422),
        l = { success: !1, error: { code: a.SecureFileResultErrorCode.INTERNAL_ERROR } },
        d = 15 * Math.pow(1024, 2);
      t.downloadSecureFileHandler = async (e, t) => {
        const r = await (0, c.getDownloadLink)(e, t);
        if (!r) return l;
        const a = await (0, s.downloadFileFromStorage)(e, r, t);
        if (!a.success) return e.storeService.dispatch((0, n.secureFileDownloadErrorAction)(t.downloadKey)), l;
        e.storeService.dispatch((0, n.secureFileStartDecipheringAction)(t.downloadKey));
        const u = await (0, i.decipherSecureFileContent)(a.chunks, t.cryptoKey);
        if (null === u) return e.storeService.dispatch((0, n.secureFileDownloadErrorAction)(t.downloadKey)), l;
        const p = new Uint8Array(u),
          S = JSON.stringify(Array.from(p)),
          m = S.length > d ? (0, o.splitEvery)(d, S) : [S];
        return e.storeService.dispatch((0, n.secureFileChunkReadyAction)(t.downloadKey, m)), { success: !0 };
      };
    },
    37403: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.initSecureFilesStorageInfoHandler = void 0);
      const a = r(35088),
        o = r(32626),
        n = r(90622),
        i = r(16593),
        s = r(20810);
      t.initSecureFilesStorageInfoHandler = async function ({ wsService: e, storeService: t }) {
        const r = (0, i.userIdSelector)(t.getState());
        let c = null;
        try {
          c = await e.secureFile.getUploadLink({
            contentLength: 0,
            secureFileInfoId: (0, a.v4)(),
            login: r,
            uki: (0, n.ukiSelector)(t.getState())
          });
        } catch (e) {
          return { success: !1, error: { code: o.SecureFileResultErrorCode.SERVER_ERROR } };
        }
        return 200 === c.code
          ? (t.dispatch((0, s.secureFileSetStorageInfoAction)(c.content.quota)), { success: !0 })
          : (t.dispatch((0, s.secureFileSetStorageInfoAction)(null)), { success: !1 });
      };
    },
    32818: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.validateSecureFileHandler = void 0);
      const a = r(32626),
        o = r(99994);
      t.validateSecureFileHandler = async function (e, t) {
        return (0, o.validateSecureFile)(t.fileName, t.fileType)
          ? { success: !0 }
          : { success: !1, error: { code: a.SecureFileResultErrorCode.INVALID_FILE_TYPE } };
      };
    },
    27416: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.secureFilesQuota$ = t.getFileUploadProgress$ = t.getFileDownloadProgress$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(89642);
      t.getFileDownloadProgress$ = (e) => {
        const t = (0, n.getSecureFileDownloadSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
      t.getFileUploadProgress$ = () => (0, a.pipe)((0, o.map)(n.secureFileUploadSelector), (0, o.distinctUntilChanged)());
      t.secureFilesQuota$ = () => (0, a.pipe)((0, o.map)(n.secureFilesQuotaSelector), (0, o.distinctUntilChanged)());
    },
    89642: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.secureFilesQuotaSelector =
          t.getSecureFileDownloadSelector =
          t.secureFileUploadSelector =
          t.secureFileDownloadSelector =
          t.secureFileInfoSelector =
            void 0);
      const a = r(32626),
        o = r(16516);
      t.secureFileInfoSelector = (e) => e.userSession.personalData.secureFileInfo;
      t.secureFileDownloadSelector = (e, t) => {
        const r = e.userSession.secureFileStorageState.downloads[t];
        if (!r) return null;
        const n = r?.status === a.FileDownloadStatus.ChunkReady ? { chunk: r.chunks[r.currentChunkIndex] } : {};
        return { ...(0, o.omit)(["chunks", "currentChunkIndex"], r), ...n };
      };
      t.secureFileUploadSelector = (e) => e.userSession.secureFileStorageState.upload;
      t.getSecureFileDownloadSelector = (e) => (r) => (0, t.secureFileDownloadSelector)(r, e);
      t.secureFilesQuotaSelector = (e) => e.userSession.secureFileStorageState.quota;
    },
    22349: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.decipherSecureFileContent = void 0);
      const a = r(16038),
        o = r(46445),
        n = r(69530),
        i = r(65675);
      t.decipherSecureFileContent = async (e, t) => {
        const r = (0, i.parseCipheredData)(e),
          s = r.cryptoConfig;
        if (!(0, i.isDashlaneSecureDataFlexible)(r) || !(0, i.isNoDerivation)(s.derivation)) return null;
        const c = await (0, o.hashAndSplitKey)((0, a.base64ToBuffer)(t)),
          l = await (0, n.signHashHmacSHA256)({ key: c.hmac, data: (0, a.concatBuffers)(r.iv, r.cipheredContent) });
        if ((0, a.bufferToBase64)(l) !== (0, a.bufferToBase64)(r.hash)) return null;
        return await (0, n.decryptAES256)({ key: c.aes, iv: r.iv, encryptedData: r.cipheredContent });
      };
    },
    37104: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.downloadFileFromStorage = void 0);
      const a = r(20810);
      t.downloadFileFromStorage = async (e, t, r) => {
        try {
          const o = await fetch(t);
          if (!o.ok) return { success: !1 };
          const n = o.body.getReader(),
            i = [],
            s = o.headers.get("Content-Length");
          e.storeService.dispatch((0, a.secureFileStartDownloadAction)(r.downloadKey, Number.parseInt(s, 10)));
          let c = 0,
            l = !0,
            d = 0;
          for (; l; ) {
            const { done: t, value: o } = await n.read();
            (l = !t),
              l &&
                (i.push(new Uint8Array(o)),
                (c += o.length),
                (d += o.length),
                d > 1e5 && (e.storeService.dispatch((0, a.secureFileDownloadChunkAction)(r.downloadKey, d)), (d = 0)));
          }
          let u = 0;
          const p = new Uint8Array(c);
          return (
            i.forEach((e) => {
              p.set(e, u), (u += e.length);
            }),
            { success: !0, chunks: p }
          );
        } catch (e) {
          return { success: !1 };
        }
      };
    },
    71422: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDownloadLink = void 0);
      const a = r(90622),
        o = r(95623),
        n = r(16593),
        i = r(20810);
      t.getDownloadLink = async (e, t) => {
        const { storeService: r, wsService: s } = e,
          c = r.getState(),
          l = (0, n.userIdSelector)(c),
          d = (0, a.ukiSelector)(c);
        let u = null;
        try {
          u = await s.secureFile.getDownloadLink({ login: l, uki: d, key: t.downloadKey });
        } catch (r) {
          return (
            (0, o.logDebug)({ tag: ["SecureFile"], message: "Error while getting S3 download link", details: { error: r } }),
            e.storeService.dispatch((0, i.secureFileDownloadErrorAction)(t.downloadKey)),
            null
          );
        }
        return 200 !== u.code ? (e.storeService.dispatch((0, i.secureFileDownloadErrorAction)(t.downloadKey)), null) : u.content.url;
      };
    },
    99994: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.validateSecureFile = void 0);
      const a = r(98337);
      t.validateSecureFile = (e, t) => {
        const r = e.split(".").pop().toLowerCase();
        return (
          ((e, t) => "rar" === e && !t)(r, t) ||
          (((e) => (0, a.getSecureDocumentsAllowedMimeTypes)().includes(e))(t) &&
            ((e) => (0, a.getSecureDocumentsAllowedExtensions)().includes(`.${e}`))(r))
        );
      };
    },
    74172: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(94187);
      t.config = {
        commands: { setupDefaultNoteCategories: { handler: a.setupDefaultNoteCategoriesHandler } },
        queries: {},
        liveQueries: {}
      };
    },
    94187: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupDefaultNoteCategoriesHandler = void 0);
      const a = r(93039),
        o = r(54565),
        n = r(23136);
      t.setupDefaultNoteCategoriesHandler = async function (e, t) {
        try {
          const { storeService: r, sessionService: i } = e;
          if (!r.isAuthenticated()) return { success: !1 };
          const s = r.getPersonalData().noteCategories;
          if (!s || 0 === s.length) {
            t.categories.forEach((e) => {
              (0, o.saveNoteCategory)(r, { name: e });
            }),
              i.getInstance().user.persistPersonalData();
            (0, n.getDebounceSync)(r, i)({ immediateCall: !0 }, a.Trigger.Save);
          }
          return { success: !0 };
        } catch (e) {
          return { success: !1 };
        }
      };
    },
    54565: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.saveNoteCategory = t.getUpdatedNoteCategory = t.getNewNoteCategory = void 0);
      const a = r(45291),
        o = r(95623),
        n = r(78320),
        i = r(49551);
      function s(e) {
        return { kwType: "KWSecureNoteCategory", Id: (0, n.generateItemUuid)(), CategoryName: e.trim(), LastBackupTime: 0 };
      }
      function c(e, t) {
        const r = (0, i.findDataModelObject)(t.id, e);
        if (!r) throw new Error("UI asks to update an unknown Note Category");
        return { ...r, CategoryName: t.name.trim() };
      }
      (t.getNewNoteCategory = s),
        (t.getUpdatedNoteCategory = c),
        (t.saveNoteCategory = function (e, t) {
          if (!e.isAuthenticated()) return void (0, o.logError)({ message: "No session available to save note category" });
          const r = e.getPersonalData().noteCategories;
          if (
            !(function (e, t) {
              return "string" == typeof t && "" !== t.trim() && !e.some((e) => e.CategoryName === t);
            })(r, t.name)
          )
            return void (0, o.logError)({ message: "Category name is invalid" });
          const n = t.id ? c(r, t) : s(t.name);
          return e.dispatch((0, a.saveNoteCategory)(n)), n;
        });
    },
    80818: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(81438),
        o = r(49293),
        n = r(77749);
      t.config = {
        commands: {
          addSecureNote: { handler: o.addSecureNoteHandler },
          updateSecureNote: { handler: o.updateSecureNoteHandler },
          deleteSecureNote: { handler: o.deleteSecureNoteHandler }
        },
        queries: {
          getNote: { selector: a.viewedNoteSelector },
          getNoteCategories: { selector: a.viewedNoteCategoriesSelector },
          getNotes: { selector: a.viewedQueriedNotesSelector },
          getNotesCount: { selector: a.notesCountSelector },
          getNotesPage: { selector: a.notesPageSelector },
          getNotesPaginationToken: { selector: a.notesPaginationTokenSelector }
        },
        liveQueries: {
          liveNote: { operator: n.getNote$ },
          liveNotes: { operator: n.notes$ },
          liveNotesBatch: { operator: n.notesBatch$ },
          liveNotesCount: { operator: n.notesCount$ }
        }
      };
    },
    46083: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.handleLimitedSharedNotes = void 0);
      const a = r(89489),
        o = r(37275);
      t.handleLimitedSharedNotes = function (e, t, r) {
        const n = (0, o.getSharingDataWithCollections)(t),
          i = (0, a.getLimitedSharedItemIds)(t, n.collections, n.itemGroups, r);
        return e.map((e) => ({ ...e, ...(i[e.Id] ? { limitedPermissions: !0 } : {}) }));
      };
    },
    67859: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addSecureNoteHandler = t.noteFormatter = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(23136),
        i = r(71141),
        s = r(48313),
        c = r(53),
        l = r(78320),
        d = r(70252),
        u = r(13675),
        p = r(79980),
        S = r(73566),
        m = r(85225),
        g = r(56915);
      t.noteFormatter = (e) => {
        const t = (0, u.sanitizeInputPersonalData)(e),
          r = (0, c.getUnixTimestamp)();
        return {
          kwType: "KWSecureNote",
          AnonId: (0, l.generateItemUuid)(),
          CreationDatetime: r,
          Id: (0, l.generateItemUuid)(),
          LocaleFormat: o.Country.US,
          SpaceId: t.spaceId || "",
          UserModificationDatetime: r,
          LastBackupTime: 0,
          Title: t.title || "Untitled note",
          Content: t.content || "",
          Category: t.category || "noCategory",
          Secured: t.secured || !1,
          Type: t.type || "GRAY",
          Attachments: t.attachments || []
        };
      };
      t.addSecureNoteHandler = async (e, r) => {
        try {
          await (async ({ storeService: e, sessionService: r, eventLoggerService: a }, o) => {
            const i = e.getPersonalData(),
              c = (0, t.noteFormatter)(o);
            if (!c.SpaceId) {
              const t = await (0, n.getDefaultSpaceId)(e);
              c.SpaceId = t;
            }
            (0, p.logAddVaultItem)(e, a, c);
            const l = (0, S.getUpdatedItemChangeHistory)({
              deviceName: e.getLocalSettings().deviceName,
              personalData: i,
              change: (0, m.makeUpdateChange)(c),
              userLogin: e.getUserLogin(),
              platformInfo: (0, g.platformInfoSelector)(e.getState())
            });
            e.dispatch((0, s.savePersonalDataItem)(c, c.kwType, l)), r.getInstance().user.persistPersonalData();
          })(e, r);
          return (
            (0, n.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save),
            Promise.resolve({ success: !0 })
          );
        } catch (e) {
          return (
            (0, d.sendExceptionLog)({ error: e }),
            e instanceof i.RequestError && void 0 !== e.code
              ? Promise.resolve({ success: !1, error: { code: e.code } })
              : Promise.resolve({ success: !1 })
          );
        }
      };
    },
    5948: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deleteSecureNoteHandler = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(23136),
        i = r(81438),
        s = r(70252),
        c = r(45291),
        l = r(79980),
        d = r(36513),
        u = r(90622),
        p = r(36884),
        S = r(58107),
        m = r(71646),
        g = r(63698),
        y = r(45157),
        h = r(16593),
        v = r(52102),
        f = async ({ storeService: e, eventLoggerService: t, wsService: r }, a) => {
          const n = e.getState();
          try {
            let s = null;
            const f = (0, i.noteSelector)(n, a);
            if (!f) return { success: !1, error: { code: o.DeleteSecureNoteErrorCode.NOT_FOUND } };
            const w = await (0, d.makeCryptoService)(),
              A = (0, h.userLoginSelector)(n),
              P = (0, u.ukiSelector)(e.getState()),
              { makeRefuseItemGroupEvent: T } = (0, p.makeItemGroupService)(r, w),
              { Id: b } = f,
              { userGroups: I, itemGroups: C } = (0, v.sharingDataSelector)(n),
              E = (0, m.findItemItemGroup)(b, C);
            if (E) {
              const e = (0, S.isUserLastAdmin)(E, A),
                t = (0, S.doesUserReceiveItemGroupViaGroup)(E, I, A);
              if (!(!e && !t))
                return {
                  success: !1,
                  error: {
                    code: e
                      ? o.DeleteSecureNoteErrorCode.LEAVE_SHARING_FORBIDDEN_LAST_ADMIN
                      : o.DeleteSecureNoteErrorCode.LEAVE_SHARING_FORBIDDEN_GROUP_ITEM
                  }
                };
              try {
                const { groupId: e, revision: t } = E,
                  { refuseItemGroup: r } = (0, g.makeItemGroupWS)(),
                  a = await T(e, t, null);
                await r(A, P, a);
              } catch (e) {
                return { success: !1, error: { code: o.DeleteSecureNoteErrorCode.LEAVE_SHARING_FAILED } };
              }
            }
            s = (0, y.getRemoveChangeHistory)(e, f);
            const _ = (0, c.removePersonalItem)(f.kwType, f.Id, s);
            return e.dispatch(_), (0, l.logDeleteVaultItem)(e, t, f), { success: !0 };
          } catch (e) {
            const t = new Error(`[SecureNotes] - deleteSecureNote: ${e}`);
            return (0, s.sendExceptionLog)({ error: t }), { success: !1, error: { code: o.DeleteSecureNoteErrorCode.INTERNAL_ERROR } };
          }
        };
      t.deleteSecureNoteHandler = async function (e, { id: t }) {
        const r = await f(e, t);
        if (r.success) {
          (0, n.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save);
        }
        return Promise.resolve(r);
      };
    },
    49293: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(67859), t), o(r(71407), t), o(r(5948), t);
    },
    71407: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateSecureNoteHandler = t.getUpdatedSecureNote = void 0);
      const a = r(93039),
        o = r(32626),
        n = r(81438),
        i = r(23136),
        s = r(71141),
        c = r(48313),
        l = r(53),
        d = r(70252),
        u = r(13675),
        p = r(79980),
        S = r(72079),
        m = r(73566),
        g = r(85225),
        y = r(56915),
        h = r(84511);
      function v(e, t) {
        if (!e)
          throw new s.RequestError("[updateSecureNote]: unable to find secure note to update.", o.SecureNoteSaveResultErrorCode.NOT_FOUND);
        const r = (0, u.sanitizeInputPersonalData)(t),
          a = (0, l.getUnixTimestamp)(),
          n = {
            Title: r.title ?? e.Title,
            Content: r.content ?? e.Content,
            Category: r.category ?? e.Category,
            Secured: r.secured ?? e.Secured,
            Type: r.type ?? e.Type,
            SpaceId: r.spaceId ?? e.SpaceId,
            UserModificationDatetime: a,
            Attachments: r.attachments ?? e.Attachments
          };
        return { ...e, ...n };
      }
      (t.getUpdatedSecureNote = v),
        (t.updateSecureNoteHandler = async function (e, t) {
          try {
            !(function ({ storeService: e, sessionService: t, eventLoggerService: r }, a) {
              if (!e.isAuthenticated()) throw new Error("No session available to updateSecureNote");
              const o = e.getPersonalData(),
                i = (0, n.noteSelector)(e.getState(), a.id),
                s = v(i, a);
              (0, S.notifySharersNoteUpdated)(e, i, s), (0, p.logEditVaultItem)(e, r, s, i);
              const l = (0, m.getUpdatedItemChangeHistory)({
                deviceName: e.getLocalSettings().deviceName,
                personalData: o,
                change: (0, g.makeUpdateChange)(s),
                userLogin: e.getUserLogin(),
                platformInfo: (0, y.platformInfoSelector)(e.getState())
              });
              e.dispatch((0, c.savePersonalDataItem)(s, s.kwType, l)), t.getInstance().user.persistPersonalData();
            })(e, t);
            const r = e.storeService.getState();
            if ((0, h.isSharedSelector)(r, t.id)) await e.sessionService.getInstance().user.attemptSync(a.Trigger.SettingsChange);
            else {
              (0, i.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, a.Trigger.Save);
            }
            return Promise.resolve({ success: !0 });
          } catch (e) {
            return (
              (0, d.sendExceptionLog)({ error: e }),
              e instanceof s.RequestError && void 0 !== e.code
                ? Promise.resolve({ success: !1, error: { code: e.code } })
                : Promise.resolve({ success: !1 })
            );
          }
        });
    },
    71141: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updatedAt = t.createdAt = t.getCategory = t.RequestError = void 0);
      const a = r(16516);
      class o extends Error {
        constructor(e, t) {
          super(e), Object.setPrototypeOf(this, new.target.prototype), (this.name = "RequestError"), (this.code = t);
        }
      }
      (t.RequestError = o), (t.getCategory = (0, a.curry)((e, t) => e.find((e) => e.Id === t)));
      t.createdAt = (e) => ((0, a.isNil)(e.CreationDatetime) ? ((0, a.isNil)(e.CreationDate) ? 0 : e.CreationDate) : e.CreationDatetime);
      t.updatedAt = (e) =>
        (0, a.isNil)(e.UserModificationDatetime) ? ((0, a.isNil)(e.UpdateDate) ? 0 : e.UpdateDate) : e.UserModificationDatetime;
    },
    72079: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notifySharersNoteUpdated = t.makeNoteSpecificProps = t.makeNewNote = t.makeUpdatedNote = t.sharedFields = void 0);
      const a = r(16516),
        o = r(53),
        n = r(70252),
        i = r(78163);
      function s(e, t) {
        const r = t ? t.CreationDate : (0, o.getUnixTimestamp)(),
          a = t ? (e.content !== t.Content ? (0, o.getUnixTimestamp)() : t.UpdateDate) : r;
        return {
          Title: e.title || "Untitled note",
          Content: e.content || "",
          Category: e.category || "noCategory",
          Secured: e.secured || !1,
          Type: e.type || "GRAY",
          CreationDate: r,
          UpdateDate: a
        };
      }
      (t.sharedFields = ["Title", "Content"]),
        (t.makeUpdatedNote = async function (e, t) {
          return {
            ...t,
            ...(0, i.makeUpdatedPersonalDataItemBase)({ existingItem: t, updatedItem: e, itemUpdateDate: (0, o.getUnixTimestamp)() }),
            ...s(e.content, t)
          };
        }),
        (t.makeNewNote = async function (e) {
          return { ...(0, i.makeNewPersonalDataItemBase)(e), ...s(e.content) };
        }),
        (t.makeNoteSpecificProps = s),
        (t.notifySharersNoteUpdated = async function (e, r, o) {
          !(0, a.equals)((0, a.pick)(t.sharedFields, r), (0, a.pick)(t.sharedFields, o)) &&
            (await (0, i.notifySharersOnUpdate)(e, o).catch((e) => {
              const t = new Error(`[Sharing] - notifySharersNoteUpdated: ${e}`);
              (0, n.sendExceptionLog)({ error: t });
            }));
        });
    },
    77749: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.notes$ = t.notesCount$ = t.getNote$ = t.notesBatch$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(81438),
        i = r(35893),
        s = r(55220),
        c = r(33627);
      t.notesBatch$ = (e) => {
        const t = (0, i.parseToken)(e),
          r = (0, n.getViewedNotesBatchSelector)(t);
        return (0, a.pipe)((0, o.map)(r), (0, o.distinctUntilChanged)(c.sameBatch));
      };
      t.getNote$ = (e) => {
        const t = (0, n.getViewedNoteSelector)(e);
        return (0, a.pipe)((0, o.map)(t), (0, o.distinctUntilChanged)());
      };
      (t.notesCount$ = (e) => {
        const t = (0, i.parseToken)(e);
        return (0, a.pipe)(
          (0, o.map)((e) => (0, n.notesCountSelector)(e, t)),
          (0, o.distinctUntilChanged)()
        );
      }),
        (t.notes$ = (0, s.getLivePersonalInfo)(n.getLiveNotesSelector));
    },
    3113: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getNoteMappers = void 0);
      const a = r(16516),
        o = r(71141),
        n = r(83539),
        i = r(71646),
        s = (0, a.curry)((e, t) => {
          const r = t.Category,
            a = (e || []).find((e) => e.Id === r);
          return a && a.CategoryName ? a.CategoryName : "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
        }),
        c = (e) => !!e.Attachments && e.Attachments.length > 0,
        l = (0, a.curry)((e, t) => !!e[t.Id]);
      t.getNoteMappers = (e, t, r) => ({
        category: s(e),
        groupIds: (e) => (0, i.getItemUserGroupIds)(r, e.Id),
        sharingUserIds: (e) => (0, i.getItemUserIds)(r, e.Id),
        createdAt: o.createdAt,
        hasAttachments: c,
        id: (e) => e.Id,
        isLimited: l(t),
        lastUse: n.lastUseMapper,
        spaceId: (e) => e.SpaceId,
        title: (e) => e.Title,
        updatedAt: o.updatedAt
      });
    },
    93534: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getNotesBatch = t.viewNotesBatch = t.getNotesFirstToken = t.getNotesSortToken = t.getNotesFilterToken = void 0);
      const a = r(16516),
        o = r(20553),
        n = r(80010),
        i = r(83687),
        s = r(71141);
      t.getNotesFilterToken = ({ filterCriteria: e }) => ({ filterCriteria: e || [] });
      t.getNotesSortToken = ({ sortCriteria: e }) => ({ uniqField: "id", sortCriteria: e || [] });
      t.getNotesFirstToken = (e, t, r, a) => (0, o.generateFirstToken)(e, t, r.initialBatchSize || 30, a);
      (t.viewNotesBatch = (e, t, r, a) => {
        const o = (0, i.getSharingStatusItem)(t, r),
          c = (0, s.getCategory)(a);
        return (0, n.listView)(o, c, e);
      }),
        (t.getNotesBatch = (0, a.curry)((e, t, r) => (0, o.getBatch)(r, e, t)));
    },
    55498: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.noteMatch = t.searchGetters = t.limitedSearchGetters = void 0);
      const a = r(64455),
        o = r(82234);
      (t.limitedSearchGetters = [(0, o.stringProp)("Title")]),
        (t.searchGetters = [...t.limitedSearchGetters, (0, o.stringProp)("Content")]);
      t.noteMatch = (e, r) => {
        const o = r.Secured ? t.limitedSearchGetters : t.searchGetters;
        return (0, a.match)(o)(e, r);
      };
    },
    81438: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notesCountSelector =
          t.viewedQueriedNotesSelector =
          t.queryNotesSelector =
          t.getViewedNoteSelector =
          t.getLiveNotesSelector =
          t.getViewedNotesBatchSelector =
          t.notesQuerySelector =
          t.fieldMappersSelector =
          t.viewedNoteCategoriesSelector =
          t.notesPaginationTokenSelector =
          t.notesPageSelector =
          t.viewedNoteSelector =
          t.noteSelector =
          t.noteCategoriesSelector =
            void 0);
      const a = r(16516),
        o = r(32034),
        n = r(93534),
        i = r(3113),
        s = r(23875),
        c = r(20553),
        l = r(35893),
        d = r(91210),
        u = r(80993),
        p = r(49551),
        S = r(55498),
        m = r(24589),
        g = r(63566),
        y = r(52102),
        h = r(16593),
        v = r(97006),
        f = r(26703),
        w = r(75705),
        A = r(89698);
      t.noteCategoriesSelector = (e) => e.userSession.personalData.noteCategories;
      t.noteSelector = (e, t) => {
        const r = (0, w.notesSelector)(e);
        return (0, p.findDataModelObject)(t, r);
      };
      t.viewedNoteSelector = (e, r) => {
        const a = (0, t.noteSelector)(e, r);
        if (!a) return;
        const o = (0, t.noteCategoriesSelector)(e),
          n = (0, y.sharingDataSelector)(e),
          i = (0, h.userIdSelector)(e),
          c = (0, d.limitedSharingItemsSelector)(e);
        return (0, s.viewNote)(a, n, i, c, o);
      };
      t.notesPageSelector = (e, r) => {
        const a = (0, l.parseToken)(r),
          { sortToken: o, filterToken: n } = a,
          i = { sortToken: o, filterToken: n },
          s = (0, t.fieldMappersSelector)(e),
          d = (0, t.notesQuerySelector)(e, i),
          u = I(e),
          p = (0, c.generateNextToken)(s, a, d),
          S = (0, c.generatePrevToken)(s, a, d),
          m = (0, c.getBatch)(s, a, d),
          g = (0, l.stringifyToken)(p),
          y = (0, l.stringifyToken)(S);
        return { batch: u(m), nextToken: g, prevToken: y };
      };
      (t.notesPaginationTokenSelector = (e, r) => {
        const a = (0, n.getNotesSortToken)(r),
          o = (0, n.getNotesFilterToken)(r),
          i = (0, t.fieldMappersSelector)(e),
          s = { sortToken: a, filterToken: o },
          c = (0, t.notesQuerySelector)(e, s),
          d = (0, n.getNotesFirstToken)(i, s, r, c);
        return (0, l.stringifyToken)(d);
      }),
        (t.viewedNoteCategoriesSelector = (0, o.createSelector)(t.noteCategoriesSelector, (e) => ({
          items: (0, f.listView)(e),
          matchingCount: e.length
        }))),
        (t.fieldMappersSelector = (0, o.createSelector)(
          t.noteCategoriesSelector,
          d.limitedSharingItemsSelector,
          A.acceptedItemGroupsSelector,
          i.getNoteMappers
        ));
      const P = (0, l.createOptimizedSortTokenSelector)((e, { sortToken: t }) => t, a.identity),
        T = (0, l.createOptimizedFilterTokenSelector)((e, { filterToken: t }) => t, a.identity),
        b = () => S.noteMatch;
      t.notesQuerySelector = (0, o.createSelector)(t.fieldMappersSelector, b, P, T, w.notesSelector, l.queryData);
      t.getViewedNotesBatchSelector = (e) => {
        const { sortToken: r, filterToken: a } = e,
          i = { sortToken: r, filterToken: a },
          s = (0, n.getNotesBatch)(e),
          c = (0, o.createSelector)((e) => (0, t.notesQuerySelector)(e, i), t.fieldMappersSelector, s),
          p = (0, l.optimizeBatchSelector)(c);
        return (0, o.createSelector)(
          p,
          u.sortedSharedItemIdsSelector,
          d.limitedSharingItemsSelector,
          t.noteCategoriesSelector,
          n.viewNotesBatch
        );
      };
      const I = (e) => {
        const r = (0, u.sortedSharedItemIdsSelector)(e),
          a = (0, d.limitedSharingItemsSelector)(e),
          o = (0, t.noteCategoriesSelector)(e);
        return (e) => (0, n.viewNotesBatch)(e, r, a, o);
      };
      t.getLiveNotesSelector = (0, v.makeLiveSelectorGetter)(w.notesSelector, I, b, t.fieldMappersSelector);
      (t.getViewedNoteSelector = (e) => {
        const r = (0, o.createSelector)(w.notesSelector, (t) => (0, p.findDataModelObject)(e, t));
        return (0, o.createSelector)(
          r,
          y.sharingDataSelector,
          h.userIdSelector,
          d.limitedSharingItemsSelector,
          t.noteCategoriesSelector,
          s.viewNote
        );
      }),
        (t.queryNotesSelector = (0, m.getQuerySelector)(w.notesSelector, b, t.fieldMappersSelector));
      (t.viewedQueriedNotesSelector = (e, r) => {
        const a = (0, t.queryNotesSelector)(e, r),
          o = I(e);
        return (0, g.viewListResults)(o)(a);
      }),
        (t.notesCountSelector = (0, o.createSelector)(
          t.fieldMappersSelector,
          b,
          T,
          w.notesSelector,
          (e, t, r, a) => (0, l.filterData)(e, t, r, a).length
        ));
    },
    75705: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.notesSelector = void 0);
      const a = r(32034),
        o = r(40602),
        n = r(57989);
      t.notesSelector = (0, a.createSelector)(
        (e) => e.userSession.personalData.notes,
        n.quarantinedSpacesSelector,
        o.filterOutQuarantinedItems
      );
    },
    23875: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.viewNote = void 0);
      const a = r(83687),
        o = r(71141),
        n = r(83881);
      t.viewNote = function (e, t, r, i, s) {
        if (!e) return;
        const c = (0, a.getSharingStatusDetail)(i, t, r),
          l = (0, o.getCategory)(s);
        return (0, n.detailView)(c, l, e);
      };
    },
    26703: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.detailView = void 0);
      const a = (0, r(16516).defaultTo)("");
      t.detailView = (e) => {
        if (e) return { id: e.Id, categoryName: a(e.CategoryName) };
      };
      t.listView = (e) => e.map(t.detailView);
    },
    83881: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.detailView = void 0);
      const a = r(16516),
        o = r(82043),
        n = r(26703),
        i = r(71141),
        s = (0, a.defaultTo)("");
      t.detailView = (0, a.curry)((e, t, r) => {
        const c = t(r.Category);
        return {
          ...(0, o.dataModelDetailView)(r),
          category: (0, n.detailView)(c),
          color: r.Type,
          content: s(r.Content),
          createdAt: (0, i.createdAt)(r),
          secured: (0, a.defaultTo)(!1, r.Secured),
          sharingStatus: e(r.Id),
          title: s(r.Title),
          updatedAt: (0, i.updatedAt)(r)
        };
      });
    },
    80010: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = void 0);
      const a = r(16516),
        o = r(82043),
        n = r(26703),
        i = r(71141),
        s = (0, a.defaultTo)("");
      t.itemView = (0, a.curry)((e, t, r) => {
        const a = t(r.Category),
          c = r.Secured
            ? "*******"
            : ((e) => {
                if (e.length > 30) return e.slice(0, 27) + "…";
              })(s(r.Content));
        return {
          ...(0, o.dataModelItemView)(r),
          abbrContent: c,
          category: (0, n.detailView)(a),
          color: r.Type,
          createdAt: (0, i.createdAt)(r),
          secured: r.Secured || !1,
          sharingStatus: e(r.Id),
          title: s(r.Title),
          updatedAt: (0, i.updatedAt)(r)
        };
      });
      t.listView = (e, r, a) => {
        const o = (0, t.itemView)(e, r);
        return a.map(o);
      };
    },
    60309: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(43767),
        o = r(16593),
        n = r(64717),
        i = r(17250);
      t.config = {
        commands: {
          updateProtectPasswordsSetting: { handler: i.updateProtectPasswordsSettingHandler },
          toggleDashlane: { handler: i.toggleDashlaneHandler },
          updateAutofillSettings: { handler: i.updateAutofillSettingsHandler }
        },
        queries: {
          getAnonymousUserId: { selector: a.anonymousUserIdSelector },
          getIsUrlBanished: { selector: a.getIsUrlBanishedSelector },
          arePasswordsProtected: { selector: o.protectPasswordsSettingSelector }
        },
        liveQueries: { liveArePasswordsProtected: { operator: n.protectPasswordsSetting$ } }
      };
    },
    17250: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.updateAutofillSettingsHandler = t.toggleDashlaneHandler = t.updateProtectPasswordsSettingHandler = void 0);
      const a = r(32626),
        o = r(93039),
        n = r(70252),
        i = r(23136),
        s = r(29954),
        c = r(86903),
        l = r(68857);
      t.updateProtectPasswordsSettingHandler = (e, t) => {
        try {
          const r = { ProtectPasswords: t };
          return (0, s.updatePersonalSettings)(e.storeService, e.sessionService, r), (0, c.sendUserSettingsLog)(e), Promise.resolve();
        } catch (e) {
          const t = new Error(`updateProtectPasswordsSettingHandler: ${e}`);
          (0, n.sendExceptionLog)({ error: t, code: a.ExceptionCriticality.WARNING });
        }
      };
      t.toggleDashlaneHandler = ({ sessionService: e, storeService: t }, r) => {
        const a = (0, i.getDebounceSync)(t, e),
          n = t.getPersonalSettings(),
          c = (0, l.toggleDashlaneOnSiteToPersonalSettingsPartial)(n, r);
        (0, s.updatePersonalSettings)(t, e, c), a({ immediateCall: !0 }, o.Trigger.SettingsChange);
      };
      t.updateAutofillSettingsHandler = ({ sessionService: e, storeService: t }, r) => {
        const a = (0, i.getDebounceSync)(t, e);
        (0, s.updatePersonalSettings)(t, e, { AutofillSettings: r.AutofillSettings }), a({ immediateCall: !0 }, o.Trigger.SettingsChange);
      };
    },
    64717: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.protectPasswordsSetting$ = void 0);
      const a = r(18948),
        o = r(3343),
        n = r(16593);
      t.protectPasswordsSetting$ = () => (0, a.pipe)((0, o.map)(n.protectPasswordsSettingSelector), (0, o.distinctUntilChanged)());
    },
    68857: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.toggleDashlaneOnSiteToPersonalSettingsPartial = void 0);
      const a = r(16516),
        o = r(21178);
      t.toggleDashlaneOnSiteToPersonalSettingsPartial = function (e, t) {
        const r = new o.ParsedURL(t.url).getRootDomain();
        let n = e.AutofillSettings;
        return (
          (n = {
            ...n,
            disabledDomains: t.autofill
              ? (0, a.without)([r], e.AutofillSettings.disabledDomains)
              : (0, a.uniq)(e.AutofillSettings.disabledDomains.concat(r))
          }),
          { AutofillSettings: n }
        );
      };
    },
    29954: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pickUpdatedPersonalSettings =
          t.isSaveCredentialDisabledOnDomain =
          t.signalSaveCredentialDisabled =
          t.updatePersonalSettings =
            void 0);
      const a = r(21178),
        o = r(95623),
        n = r(16516),
        i = r(27517);
      (t.updatePersonalSettings = function (e, r, a) {
        if (!e.isAuthenticated()) return void o.default.log("No session available to updatePersonalSettings");
        const n = (0, t.pickUpdatedPersonalSettings)(e.getPersonalSettings(), a);
        e.dispatch((0, i.editPersonalSettings)(n)), r.getInstance().user.persistPersonalSettings();
      }),
        (t.signalSaveCredentialDisabled = function (e, t, r) {
          if (!e.isAuthenticated()) return void o.default.log("No session available, in theory this should not be called");
          const a = Array.isArray(e.getPersonalSettings().BanishedUrlsList) ? e.getPersonalSettings().BanishedUrlsList : [];
          a.indexOf(r.fullDomain) > 0 ||
            (e.dispatch((0, i.editPersonalSettings)({ BanishedUrlsList: [...a, r.fullDomain] })),
            t.getInstance().user.persistPersonalSettings());
        }),
        (t.isSaveCredentialDisabledOnDomain = function (e, t) {
          return e.isAuthenticated()
            ? (Array.isArray(e.getPersonalSettings().BanishedUrlsList) ? e.getPersonalSettings().BanishedUrlsList : [])
                .map((e) => new a.ParsedURL(e))
                .some((e) => e.getHostname() === t.fullDomain)
            : (o.default.log("No session available, save credential is enabled by default"), !1);
        });
      t.pickUpdatedPersonalSettings = (e, t) => {
        const r = (0, n.pick)(Object.keys(t))(e),
          a = (0, n.unapply)(n.identity);
        return (0, n.mergeAll)((0, n.difference)(a(t), a(r)));
      };
    },
    43767: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getIsUrlBanishedSelector =
          t.banishedUrlsListSelector =
          t.securedDataAutofillCreditcardSelector =
          t.anonymousUserIdSelector =
            void 0);
      const a = r(21178),
        o = r(16593);
      t.anonymousUserIdSelector = (e) => e.userSession.personalSettings.AnonymousUserId;
      t.securedDataAutofillCreditcardSelector = (e) => {
        const t = e.userSession.personalSettings.SecuredDataAutofillCreditcard;
        return "boolean" != typeof t || t;
      };
      t.banishedUrlsListSelector = (e) => (0, o.personalSettingsSelector)(e).BanishedUrlsList ?? [];
      t.getIsUrlBanishedSelector = (e, r) => {
        const o = new a.ParsedURL(r).getHostname();
        return (0, t.banishedUrlsListSelector)(e)
          .map((e) => new a.ParsedURL(e).getHostname())
          .some((e) => e === o);
      };
    },
    68979: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.TeamDomainsMatchResult = void 0);
      r(84977);
      !(function (e) {
        (e[(e.SomeFieldsMatch = 0)] = "SomeFieldsMatch"), (e[(e.NoFieldMatch = 1)] = "NoFieldMatch");
      })(t.TeamDomainsMatchResult || (t.TeamDomainsMatchResult = {}));
    },
    11700: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isItemToForceCategorize =
          t.isItemForceCategorizable =
          t.pickBestTeamSpaceForForcedCategorization =
          t.ForceCategorizableKWTypes =
          t.isTeamSpaceAfterGracePeriod =
          t.isTeamSpaceQuarantined =
            void 0);
      const a = r(16516),
        o = r(32626),
        n = r(68979),
        i = r(87496),
        s = r(43145),
        c = r(6205),
        l = (e, t) =>
          (t || []).some((t) => {
            if ("string" != typeof t) return !1;
            const r = t.toLowerCase();
            return (e || []).some((e) => "string" == typeof e && e.toLowerCase().includes(r));
          }),
        d = (e) => [e.Login, e.SecondaryLogin, e.Email, (0, i.getBestUrl)(e), ...(0, c.getUserAddedLinkedWebsiteDomains)(e)],
        u = (e, t) => {
          const r = [e.Domain],
            a = (0, s.findAssociatedCredential)(e, t);
          return [...r, ...(a ? d(a) : [])];
        },
        p = { [o.DataModelType.KWAuthentifiant]: d, [o.DataModelType.KWGeneratedPassword]: u, [o.DataModelType.KWEmail]: (e) => [e.Email] };
      function S(e) {
        const t = p[e.kwType];
        return t ? t(e) : [];
      }
      t.isTeamSpaceQuarantined = (e) => "revoked" === e.status;
      (t.isTeamSpaceAfterGracePeriod = (e) => (0, t.isTeamSpaceQuarantined)(e) && Boolean(e.shouldDelete)),
        (t.ForceCategorizableKWTypes = [o.DataModelType.KWAuthentifiant, o.DataModelType.KWEmail, o.DataModelType.KWGeneratedPassword]);
      (t.pickBestTeamSpaceForForcedCategorization = (e, r, i) => {
        const s = r.SpaceId,
          c = (0, o.isGeneratedPassword)(r) ? u(r, i) : S(r),
          d = e.reduce((e, t) => {
            const r = l(c, t.info.teamDomains);
            return { ...e, [t.teamId]: r };
          }, {}),
          p = e.filter((e) => d[e.teamId] || ((0, t.isTeamSpaceQuarantined)(e) && e.teamId === s)),
          [m, g] = (0, a.partition)(t.isTeamSpaceQuarantined, p),
          [y, h] = (0, a.partition)(t.isTeamSpaceAfterGracePeriod, m),
          [v, f] = (0, a.partition)(
            (
              (e) => (t) =>
                e.SpaceId === t.teamId
            )(r),
            g
          ),
          w = [...y, ...h, ...v, ...f];
        if (0 === w.length) return null;
        const A = w[0];
        return A.teamId !== r.SpaceId || (0, t.isTeamSpaceQuarantined)(A)
          ? {
              teamSpace: A,
              domainsMatchResult: d[A.teamId] ? n.TeamDomainsMatchResult.SomeFieldsMatch : n.TeamDomainsMatchResult.NoFieldMatch
            }
          : null;
      }),
        (t.isItemForceCategorizable = function (e) {
          return e.kwType in p;
        });
      t.isItemToForceCategorize = (e, t) => {
        if (!t?.info) return !1;
        const { forcedDomainsEnabled: r, teamDomains: a } = t.info;
        if (!r) return !1;
        const o = S(e);
        return l(o, a);
      };
    },
    57989: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.quarantinedSpacesSelector = t.forceCategorizableItemsSelector = t.spacesWithForcedCategorizationEnabledSelector = void 0);
      const a = r(32034),
        o = r(7944),
        n = r(11700),
        i = r(95458),
        s = r(72678);
      t.spacesWithForcedCategorizationEnabledSelector = (e) =>
        (e.userSession?.spaceData?.spaces || []).filter(
          (e) =>
            e?.details?.info &&
            Array.isArray(e.details.info.teamDomains) &&
            e.details.info.teamDomains.length > 0 &&
            Boolean(e.details.info.forcedDomainsEnabled)
        );
      (t.forceCategorizableItemsSelector = (e) => (0, s.personalDataItemsOfTypeSelector)(e, n.ForceCategorizableKWTypes)),
        (t.quarantinedSpacesSelector = (0, a.createSelector)(o.spacesSelector, (e) => e.filter(i.isQuarantined)));
    },
    92307: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getSmartCategorizedSpace = t.getCategory = void 0);
      const a = r(16516),
        o = r(52578);
      t.getCategory = (0, a.curry)((e, t) => e.find((e) => e.Id === t));
      t.getSmartCategorizedSpace = (e) => (t) => {
        const r = ((e) => e.filter((e) => "accepted" === e.details?.status && e.details?.info?.forcedDomainsEnabled))(e),
          a = r?.[0]?.details?.info?.teamDomains ?? [];
        return (0, o.isCredentialSmartCategorized)(t, a) ? r[0] : null;
      };
    },
    76226: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.applyTeamSpaceContentControlRules = void 0);
      const a = r(32626),
        o = r(70252),
        n = r(45291),
        i = r(24525),
        s = r(45962),
        c = r(90622);
      async function l(e, t, r) {
        const { updates: a, deletions: o, changeHistories: i } = r,
          s = a.length > 0,
          c =
            (function ({ deletions: e }) {
              return Object.keys(e).reduce((t, r) => t + e[r].length, 0);
            })(r) > 0;
        (s || c) && (t.dispatch((0, n.teamSpaceContentControlApplied)(a, o, i)), await e.getInstance().user.persistPersonalData());
      }
      t.applyTeamSpaceContentControlRules = async function (e, t, r, n, d) {
        try {
          const o = (0, i.teamSpaceContentControlStateSelector)(r.getState()),
            u = (0, s.controlTeamSpacesContent)(o),
            p = u.deletions.KWAuthentifiant || [],
            S = u.updates.filter(a.isCredential).map((e) => e.Id),
            m = u.hiddenItemIds,
            g = [...p, ...S, ...m];
          await l(t, r, u);
          if (
            ((function (e, t, r) {
              const a = e.getUserLogin(),
                o = (0, c.ukiSelector)(e.getState());
              r.forEach((e) => {
                t.teamPlans.spaceDeleted({ login: a, uki: o, teamId: Number(e.teamId) });
              });
            })(
              r,
              n,
              o.spaces.filter((e) => e.details.shouldDelete)
            ),
            (function (e, t) {
              const { deletions: r, hiddenItemIds: a, updates: o } = t,
                n = {
                  deletedItemIds: Object.keys(r).reduce((e, t) => [...e, ...r[t]], []),
                  hiddenItemIds: a,
                  updatedItemIds: o.map((e) => e.Id)
                };
              e.teamSpaceContentControlDone(n);
            })(e, u),
            g.length > 0)
          ) {
            const {
              commands: { recalculatePasswordHealth: e }
            } = d.createClients().passwordHealth;
            e();
          }
        } catch (e) {
          const t = new Error(`[Spaces] - runTeamSpaceContentControlJob: ${e}`);
          (0, o.sendExceptionLog)({ error: t });
        }
      };
    },
    45962: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.controlTeamSpacesContent = void 0);
      const a = r(32626),
        o = r(17825),
        n = r(49901),
        i = r(68979),
        s = r(11700),
        c = r(73566),
        l = r(85225);
      function d(e, t) {
        return { ...e, SpaceId: t };
      }
      function u(e, t, r, s) {
        const { domainsMatchResult: u } = t;
        switch (u) {
          case i.TeamDomainsMatchResult.SomeFieldsMatch:
            return (function (e, t, r) {
              const { deletions: o, changeHistories: n } = t,
                { deviceName: i, login: s, personalData: d, platformInfo: u } = e,
                { kwType: p } = r,
                S = (0, a.isCredential)(r)
                  ? (0, c.getUpdatedItemChangeHistory)({
                      change: (0, l.makeRemovalChange)(r),
                      deviceName: i,
                      personalData: d,
                      userLogin: s,
                      platformInfo: u
                    })
                  : null;
              return { ...t, deletions: { ...o, [p]: o[p].concat(r.Id) }, changeHistories: S ? n.concat(S) : n };
            })(e, s, r);
          case i.TeamDomainsMatchResult.NoFieldMatch:
            return (function (e, t, r) {
              const { updates: o, changeHistories: i } = t,
                { deviceName: s, login: u, personalData: p, platformInfo: S } = e,
                m = d(r, n.PERSONAL_SPACE_ID),
                g = (0, a.isCredential)(m)
                  ? (0, c.getUpdatedItemChangeHistory)({
                      change: (0, l.makeUpdateChange)(m),
                      deviceName: s,
                      personalData: p,
                      userLogin: u,
                      platformInfo: S
                    })
                  : null;
              return { ...t, updates: o.concat(m), changeHistories: g ? i.concat(g) : i };
            })(e, s, r);
          default:
            return (0, o.assertUnreachable)(u);
        }
      }
      const p = (e) => e.info.removeForcedContentEnabled && e.shouldDelete;
      function S(e, t, r) {
        const o = e.spaces.map((e) => e.details),
          n = (0, s.pickBestTeamSpaceForForcedCategorization)(o, r, e.credentials);
        if (!n) return t;
        const { teamSpace: S } = n,
          { status: m } = S;
        switch (m) {
          case "accepted":
            return (function (e, t, r, o) {
              const { updates: n, changeHistories: i } = t,
                { teamId: s } = r,
                { deviceName: u, login: p, personalData: S, platformInfo: m } = e,
                g = d(o, s),
                y = (0, a.isCredential)(g)
                  ? (0, c.getUpdatedItemChangeHistory)({
                      change: (0, l.makeUpdateChange)(g),
                      deviceName: u,
                      personalData: S,
                      userLogin: p,
                      platformInfo: m
                    })
                  : null;
              return { ...t, updates: n.concat(g), changeHistories: y ? i.concat(y) : i };
            })(e, t, S, r);
          case "revoked":
            return (function (e, t, r, a) {
              const { teamSpace: o, domainsMatchResult: n } = t,
                { hiddenItemIds: s } = a;
              return { ...(p(o) ? u(e, t, r, a) : a), hiddenItemIds: n === i.TeamDomainsMatchResult.SomeFieldsMatch ? [...s, r.Id] : s };
            })(e, n, r, t);
          default:
            return t;
        }
      }
      t.controlTeamSpacesContent = function (e) {
        const t = {
          deletions: { KWAuthentifiant: [], KWEmail: [], KWGeneratedPassword: [] },
          updates: [],
          changeHistories: [],
          hiddenItemIds: []
        };
        return 0 === e.spaces.length ? t : e.items.reduce((t, r) => S(e, t, r), t);
      };
    },
    24525: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.teamSpaceContentControlStateSelector = void 0);
      const a = r(56915),
        o = r(16593),
        n = r(73299),
        i = r(72678),
        s = r(7944),
        c = r(92598),
        l = r(26147),
        d = r(74380),
        u = r(83659),
        p = r(57989),
        S = (e) => ({
          KWAuthentifiant: (0, d.countAllCredentialsSelector)(e),
          KWEmail: (0, l.countAllEmailsSelector)(e),
          KWGeneratedPassword: (0, c.countAllGeneratedPasswordsSelector)(e)
        });
      t.teamSpaceContentControlStateSelector = (e) => ({
        anonymousSpaceIds: (0, s.anonymousSpaceIdsSelector)(e),
        credentials: (0, u.unsafeAllCredentialsSelector)(e),
        itemCountByType: S(e),
        items: (0, p.forceCategorizableItemsSelector)(e),
        spaces: (0, p.spacesWithForcedCategorizationEnabledSelector)(e),
        personalData: (0, i.personalDataSelector)(e),
        platformInfo: (0, a.platformInfoSelector)(e),
        login: (0, o.userLoginSelector)(e),
        deviceName: (0, n.deviceNameSelector)(e)
      });
    },
    67631: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const a = r(76226);
      t.setupSubscriptions = async function (e, t) {
        const { sessionService: r, storeService: o, wsService: n, applicationModulesAccess: i } = t;
        e.sessionOpened.on(() => {
          (0, a.applyTeamSpaceContentControlRules)(e, r, o, n, i);
        });
      };
    },
    45665: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(7944);
      t.config = {
        commands: {},
        queries: { getSpace: { selector: a.viewedSpaceSelector }, getSpaces: { selector: a.viewedSpacesSelector } },
        liveQueries: {}
      };
    },
    77163: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.associateTeamSpaceId = void 0);
      const a = r(11700),
        o = (e) => e.filter((e) => e.info.forcedDomainsEnabled && e.info.teamDomains.length && !(0, a.isTeamSpaceQuarantined)(e));
      t.associateTeamSpaceId = function (e, t, r) {
        if (!(0, a.isItemForceCategorizable)(e) || !t || 0 === t.length) return e;
        const n = o(t);
        if (!n.length) return e;
        const i = (0, a.pickBestTeamSpaceForForcedCategorization)(n, e, r);
        return i ? { ...e, SpaceId: i.teamSpace.teamId } : e;
      };
    },
    49901: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.PERSONAL_SPACE_ID = void 0), (t.PERSONAL_SPACE_ID = "");
    },
    69105: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDefaultPersonalSpace = t.isSpaceItem = void 0);
      const a = r(32626),
        o = r(49901);
      t.isSpaceItem = (e) => "SpaceId" in e && "string" == typeof e.SpaceId;
      t.getDefaultPersonalSpace = () => ({
        associatedEmail: null,
        billingAdmins: [],
        color: "",
        companyName: null,
        info: { name: "", forcedDomainsEnabled: !1, teamDomains: [] },
        invitationDate: null,
        isBillingAdmin: !1,
        isSSOUser: !1,
        isTeamAdmin: !1,
        joinDate: null,
        letter: "",
        membersNumber: null,
        planType: null,
        revokeDate: null,
        status: a.SpaceStatus.Accepted,
        teamAdmins: [],
        teamId: o.PERSONAL_SPACE_ID,
        teamName: null,
        tier: a.SpaceTiers.Free,
        shouldDelete: !1
      });
    },
    95458: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isQuarantined = t.isPremiumStatusSpaceQuarantined = void 0);
      t.isPremiumStatusSpaceQuarantined = (e) =>
        !!e?.status &&
        "accepted" !== e.status.toLowerCase() &&
        !!e.info &&
        Array.isArray(e.info.teamDomains) &&
        e.info.teamDomains.length > 0 &&
        Boolean(e.info.removeForcedContentEnabled);
      t.isQuarantined = (e) => e && (0, t.isPremiumStatusSpaceQuarantined)(e.details);
    },
    7944: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.anonymousSpaceIdsSelector =
          t.viewedSpaceSelector =
          t.viewedSpacesSelector =
          t.activeSpacesDetailsSelector =
          t.activeSpacesSelector =
          t.spacesSelector =
            void 0);
      const a = r(69105),
        o = r(664);
      t.spacesSelector = (e) => e.userSession?.spaceData?.spaces ?? [];
      t.activeSpacesSelector = (e) => ((0, t.spacesSelector)(e) || []).filter((e) => e.details && "accepted" === e.details.status);
      t.activeSpacesDetailsSelector = (e) => (0, t.activeSpacesSelector)(e).map((e) => e.details);
      t.viewedSpacesSelector = (e) => {
        const r = e.userSession.localSettings.nodePremiumStatus.b2bStatus;
        return !!r &&
          "in_team" === r.statusCode &&
          !r.currentTeam?.teamInfo.personalSpaceEnabled &&
          (0, t.activeSpacesDetailsSelector)(e).length
          ? (0, o.listView)([...(0, t.activeSpacesDetailsSelector)(e)])
          : (0, o.listView)([...(0, t.activeSpacesDetailsSelector)(e), (0, a.getDefaultPersonalSpace)()]);
      };
      t.viewedSpaceSelector = (e, r) => (0, t.viewedSpacesSelector)(e).find((e) => e.spaceId === r);
      t.anonymousSpaceIdsSelector = (e) => e.userSession.personalSettings.SpaceAnonIds;
    },
    664: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.itemView = void 0);
      t.itemView = ({ color: e, letter: t, info: r, teamId: a, isSSOUser: o }) => ({
        spaceId: a,
        displayName: r.name ?? "",
        color: e,
        letter: t,
        settings: { enableForcedCategorization: r.forcedDomainsEnabled, spaceForcedDomains: r.teamDomains },
        isSSOUser: o
      });
      t.listView = (e) => e.map(t.itemView);
    },
    16458: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vaultConfig = void 0);
      const a = r(98518),
        o = r(56316);
      t.vaultConfig = {
        commands: { disableVaultItemProtection: { handler: a.disableVaultProtectionHandler } },
        queries: { getAutofillProtectionContext: { selector: o.autofillProtectionContextSelector } },
        liveQueries: {}
      };
    },
    98518: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.disableVaultProtectionHandler = void 0);
      const a = r(19736),
        o = r(17250),
        n = r(18344),
        i = r(16593);
      t.disableVaultProtectionHandler = async (e, t) => {
        const r = e.storeService.getState();
        if ((0, a.credentialSelector)(r, t)) {
          if ((0, i.protectPasswordsSettingSelector)(r)) return void (0, o.updateProtectPasswordsSettingHandler)(e, !1);
          (0, n.disableCredentialProtection)(e, t);
        }
      };
    },
    56316: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.autofillProtectionContextSelector = void 0);
      const a = r(32626),
        o = r(19736),
        n = r(27147),
        i = r(58235),
        s = r(43767),
        c = r(81846),
        l = r(16593);
      t.autofillProtectionContextSelector = (e, t) => {
        if (!t) return { disableMode: a.VaultItemDisableProtectionMode.CannotDisable, isProtected: !1 };
        const r = (0, c.areProtectedItemsUnlockedSelector)(e);
        if ((0, i.paymentCardSelector)(e, t))
          return {
            disableMode: a.VaultItemDisableProtectionMode.CannotDisable,
            isProtected: (0, s.securedDataAutofillCreditcardSelector)(e) && !r
          };
        if ((0, n.socialSecurityIdSelector)(e, t))
          return {
            disableMode: a.VaultItemDisableProtectionMode.CannotDisable,
            isProtected: (0, s.securedDataAutofillCreditcardSelector)(e) && !r
          };
        const d = (0, o.credentialSelector)(e, t);
        if (d) {
          return (0, l.protectPasswordsSettingSelector)(e)
            ? { disableMode: a.VaultItemDisableProtectionMode.DisableGeneralSetting, isProtected: !r }
            : { disableMode: a.VaultItemDisableProtectionMode.DisableSpecificVaultItem, isProtected: d.AutoProtected && !r };
        }
        return { disableMode: a.VaultItemDisableProtectionMode.CannotDisable, isProtected: !1 };
      };
    },
    70660: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(76235);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    78163: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.computeAndSendCSVImportActivityLog =
          t.computeAndSendDeletedCredentialActivityLog =
          t.computeAndSendModifiedCredentialActivityLog =
          t.computeAndSendCreatedCredentialActivityLog =
          t.shouldSendCreateOrModifiedCredentialActivityLog =
          t.hasVaultAuditLogsFFActivated =
          t.notifySharersOnUpdate =
          t.makeNewPersonalDataItemBase =
          t.makeUpdatedPersonalDataItemBase =
            void 0);
      const a = r(18948),
        o = r(35088),
        n = r(32626),
        i = r(61475),
        s = r(97494),
        c = r(21178),
        l = r(10294),
        d = r(98892),
        u = r(58107),
        p = r(36513),
        S = r(56915),
        m = r(53),
        g = r(78320),
        y = r(10360),
        h = r(92310),
        v = r(11700),
        f = r(16593),
        w = r(70252),
        A = r(88205);
      function P(e) {
        const t = "MANUAL" === e.updatedItem.origin ? { UserModificationDatetime: e.itemUpdateDate } : {};
        return {
          LocaleFormat: (0, y.getLocaleFormat)(e.existingItem, e.updatedItem),
          SpaceId: void 0 !== e.updatedItem.content.spaceId ? e.updatedItem.content.spaceId : e.existingItem?.SpaceId ?? "",
          Attachments: e.updatedItem.attachments,
          ...t
        };
      }
      async function T(e) {
        return (await (0, A.makeFeatureFlipsSelectors)(e).featureFlipsSelector()).audit_logs_vault;
      }
      function b(e) {
        return async (t, r) => {
          const a = { domain_url: new c.ParsedURL(r.domainUrl).getRootDomain() ?? "" },
            n = { import_count: r.importCount ?? 0 },
            i = {
              category: s.ActivityLogCategory.VaultPasswords,
              log_type: e,
              properties: e === s.ActivityLogType.UserImportedCredentials ? n : a,
              is_sensitive: e !== s.ActivityLogType.UserImportedCredentials || void 0,
              date_time: new Date().getTime(),
              schema_version: "1.0.0",
              uuid: `{${(0, o.v4)().toUpperCase()}}`
            };
          await t.createClients().activityLogs.commands.storeActivityLogs({ activityLogs: [i] });
        };
      }
      (t.makeUpdatedPersonalDataItemBase = P),
        (t.makeNewPersonalDataItemBase = function (e, t = (0, m.getUnixTimestamp)()) {
          return {
            kwType: e.kwType,
            Id: (0, g.generateItemUuid)(),
            AnonId: (0, g.generateItemUuid)(),
            CreationDatetime: t,
            LastBackupTime: 0,
            LastUse: t,
            ...P({ updatedItem: e, itemUpdateDate: t })
          };
        }),
        (t.notifySharersOnUpdate = async function (e, t, r) {
          const o = (0, l.makeItemService)(),
            n = (0, d.makeItemWS)(),
            s = e.getSharingData(),
            c = e.getUserLogin(),
            m = (0, S.ukiSelector)(e.getState()),
            { privateKey: g } = e.getUserSession().keyPair,
            y = (s.items || []).find((e) => e.itemId === t.Id);
          if (!y) return;
          if (r)
            try {
              const { queries: e } = r.createClients().sharingCollections,
                t = await (0, a.firstValueFrom)(e.getSharedCollections({}));
              s.collections = (0, i.isSuccess)(t) && Array.isArray(t.data) ? t.data : [];
            } catch (e) {
              const t = new Error(`[SharingSync] - getSharedCollections failed: ${e}`);
              (0, w.sendExceptionLog)({ error: t });
            }
          const h = (s.itemGroups || []).find((e) => (e.items || []).map((e) => e.itemId).includes(t.Id));
          if (!h) throw new Error("ItemGroup containing item not found in sharingData");
          const { timestamp: v } = y,
            f = await (0, u.getItemGroupKey)(h, s.userGroups, g, c, s.collections);
          if (!f) throw new Error("Could not decipher itemGroupKey for itemGroup");
          const A = h.items.find((e) => e.itemId === t.Id);
          if (!A) throw new Error("Could not find itemKey for item in itemGroup");
          const P = await (0, p.makeSymmetricEncryption)().decryptAES256(f, A.itemKey),
            T = await o.makeUpdateItemEvent(v, P, { item: t });
          return n.updateItem(c, m, T);
        }),
        (t.hasVaultAuditLogsFFActivated = T),
        (t.shouldSendCreateOrModifiedCredentialActivityLog = function (e, t, r, a) {
          const o = (0, h.currentTeamIdSelector)(e.getState()),
            i = (0, f.activeSpacesSelector)(e.getState())[0],
            s = (0, v.isItemToForceCategorize)(r, i);
          return T(t) && a !== n.SaveOrigin.IMPORT && (r.SpaceId === o || s);
        }),
        (t.computeAndSendCreatedCredentialActivityLog = b(s.ActivityLogType.UserCreatedCredential)),
        (t.computeAndSendModifiedCredentialActivityLog = b(s.ActivityLogType.UserModifiedCredential)),
        (t.computeAndSendDeletedCredentialActivityLog = b(s.ActivityLogType.UserDeletedCredential)),
        (t.computeAndSendCSVImportActivityLog = b(s.ActivityLogType.UserImportedCredentials));
    },
    99293: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = t.setupSubscriptions = void 0);
      const a = r(38390);
      Object.defineProperty(t, "setupSubscriptions", {
        enumerable: !0,
        get: function () {
          return a.setupSubscriptions;
        }
      });
      var o = r(70660);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return o.bootstrap;
        }
      });
    },
    97006: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeLiveSelectorGetter = void 0);
      const a = r(32034),
        o = r(63566),
        n = r(24589);
      t.makeLiveSelectorGetter = (e, t, r, i) => (s) =>
        (0, a.createSelector)(e, i, r, t, (e, t, r, a) => (0, o.viewListResults)(a)((0, n.applyQuery)(r, t, s, e)));
    },
    40602: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.filterOutQuarantinedItems = t.itemIsNotQuarantined = void 0);
      t.itemIsNotQuarantined = (e, t) => {
        const r = ((e, t) => {
          const r = t.find((t) => t.details && t.teamId === e.SpaceId);
          return r ? r.details : null;
        })(t, e);
        return !r || !((e, t) => e.SpaceId === t.teamId)(t, r);
      };
      t.filterOutQuarantinedItems = (e, r) => {
        if (0 === r.length) return e;
        return e.filter((e) => (0, t.itemIsNotQuarantined)(r, e));
      };
    },
    24589: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.applyQuery = t.getQuerySelector = void 0);
      const a = r(35893),
        o = r(32541);
      t.getQuerySelector = (e, r, a) => (o, n) => {
        const i = e(o),
          s = a(o),
          c = r(o);
        return (0, t.applyQuery)(c, s, n, i);
      };
      t.applyQuery = (e, t, r, n) => {
        const { sortToken: i, filterToken: s, limit: c } = r,
          l = ((r) => (0, a.filterData)(t, e, s, r))(n),
          d = ((e) => (0, o.sortData)(t, i, e))(l);
        return { items: c ? d.slice(0, c) : d, matchingCount: d.length };
      };
    },
    10360: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getValidState = t.isProposedLocaleLocalized = t.getLocaleFormat = void 0);
      const a = r(32626),
        o = r(38495),
        n = r(86056),
        i = r(95623);
      function s(e) {
        return !!a.Country[e] && [a.Country.NO_TYPE, a.Country.UNIVERSAL].every((t) => t !== e);
      }
      (t.getLocaleFormat = function (e, t) {
        if (!a.isObjectLocalized(t)) return a.Country.UNIVERSAL;
        const r = a.Country[t.content.localeFormat],
          o = s(r),
          i = e && e.LocaleFormat ? e.LocaleFormat : a.Country[(0, n.getPlatformInfo)().country] || a.Country.US;
        return r && o ? r : i;
      }),
        (t.isProposedLocaleLocalized = s),
        (t.getValidState = function (e, t) {
          return (0, o.isStateValid)(e, t)
            ? t
            : (i.default.log(`[Data] Given value (${t}) is not a valid state value for country code ${e}`), "");
        });
    },
    38390: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const a = r(67631),
        o = r(79405),
        n = r(8566);
      t.setupSubscriptions = async function (e, t) {
        (0, a.setupSubscriptions)(e, t), (0, o.setupSubscriptions)(e, t), (0, n.setupSubscriptions)(e, t);
      };
    },
    72883: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isDataKeyVaultItem = t.PERSONAL_DATA_META_DATA = void 0),
        (t.PERSONAL_DATA_META_DATA = [
          "changeHistories",
          "changesToUpload",
          "generatedPasswords",
          "securityBreaches",
          "securityBreachesMetadata",
          "breachesUpdaterStatus",
          "versionedBreaches",
          "secureFileInfo",
          "noteCategories",
          "paypalAccounts",
          "credentialCategories"
        ]),
        (t.isDataKeyVaultItem = function (e) {
          return !t.PERSONAL_DATA_META_DATA.includes(e);
        });
    },
    23136: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDefaultSpaceId = t.getCurrentItems = t.getDebounceSync = t.WAIT_MS_BEFORE_SYNC = t.nextTick = void 0),
        (t.nextTick = r(28255));
      const a = r(63311),
        o = r(95623),
        n = r(58639),
        i = r(84977),
        s = r(26634),
        c = r(49901),
        l = r(7944);
      t.WAIT_MS_BEFORE_SYNC = 6e4;
      t.getDebounceSync = (e, r) =>
        (0, a.debounce)((a) => {
          o.Debugger.log("DebounceSync called => informClientsAndSyncPersonalDataChange()"),
            (function (e, r, a) {
              (0, n.reportDataUpdate)(e),
                (0, t.nextTick)(() => {
                  r.getInstance().user.attemptSync(a);
                });
            })(e, r, a);
        }, t.WAIT_MS_BEFORE_SYNC);
      t.getCurrentItems = (e, t) => {
        const r = i.default[e];
        return t?.[r] || [];
      };
      t.getDefaultSpaceId = (e) => {
        const t = e.getState(),
          r = (0, l.activeSpacesSelector)(t)[0];
        return (0, s.isPersonalSpaceEnabledSelector)(t) ? c.PERSONAL_SPACE_ID : r.teamId;
      };
    },
    82043: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.maybeDataModelDetailView = t.dataModelDetailView = t.dataModelItemView = void 0);
      const r = (e) => ({ id: e.Id });
      t.dataModelItemView = (e) => ({
        ...r(e),
        anonId: e.AnonId,
        hasAttachments: Array.isArray(e.Attachments) && e.Attachments.length > 0,
        kwType: e.kwType,
        lastUse: e.LastUse,
        localeFormat: e.LocaleFormat,
        spaceId: e.SpaceId
      });
      const a = (e) => ({ id: e.Id });
      t.dataModelDetailView = (e) => ({
        ...a(e),
        anonId: e.AnonId,
        attachments: e.Attachments || [],
        kwType: e.kwType,
        lastUse: e.LastUse,
        localeFormat: e.LocaleFormat,
        spaceId: e.SpaceId
      });
      t.maybeDataModelDetailView = (e) => (t) => (t ? e(t) : void 0);
    },
    8581: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(5600),
        o = r(56915),
        n = r(61078);
      t.config = {
        commands: { cleanRemotelyRemovedProfiles: { handler: n.cleanRemotelyRemovedProfilesHandler } },
        queries: {
          getAnonymousComputerId: { selector: a.anonymousComputerIdSelector },
          getPlatformInfo: { selector: o.platformInfoSelector }
        },
        liveQueries: {}
      };
    },
    9486: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.triggerABTestingChanged = void 0);
      const a = r(19697);
      t.triggerABTestingChanged = function (e) {
        (0, a.default)().abTestingChanged({ version: e.version });
      };
    },
    88322: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.loadAnonymousApplicationId = t.ANONYMOUS_APPLICATION_ID_KEY = void 0);
      const a = r(35088),
        o = r(93564),
        n = r(95623),
        i = r(70252),
        s = r(12995);
      async function c(e) {
        const r = e.getLocalStorage();
        if (await r.itemExists(t.ANONYMOUS_APPLICATION_ID_KEY)) {
          const e = await r.readItem(t.ANONYMOUS_APPLICATION_ID_KEY);
          if ("string" == typeof e) return e;
        }
        const n = await (async function (e) {
          const r = (0, o.getWindowLocalStorage)();
          if (!r) return null;
          const a = r.getItem(t.ANONYMOUS_APPLICATION_ID_KEY);
          if (!a) return null;
          const n = a.replaceAll('"', "");
          return await e.writeItem(t.ANONYMOUS_APPLICATION_ID_KEY, n), n;
        })(r);
        return n || (0, a.v4)();
      }
      t.ANONYMOUS_APPLICATION_ID_KEY = "anonymousApplicationId";
      t.loadAnonymousApplicationId = async (e, t) => {
        (0, n.log)({ message: "Load anonymousApplicationId" });
        try {
          const r = await c(e);
          (0, n.logInfo)({ message: "anonymousApplicationId has been fetched successfully" }),
            t.dispatch((0, s.loadedAnonymousComputerId)(r));
        } catch (e) {
          const t = `An error occurred when trying to load anonymousApplicationId ${e} `;
          (0, i.sendExceptionLog)({ message: t });
        }
      };
    },
    91122: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.killswitchStateUpdated = void 0);
      const a = r(5307);
      t.killswitchStateUpdated = (e) => ({ type: a.KILLSWITCH_STATE_UPDATED, killswitchState: e });
    },
    73651: (e, t) => {
      function r() {
        return { disableAutofill: !1, disableLoginFlowMigration: !1, brazeContentCardsDisabled: !1, disableAutoSSOLogin: !1 };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getEmptyKillswitchState = void 0),
        (t.getEmptyKillswitchState = r),
        (t.default = (
          e = { disableAutofill: !1, disableLoginFlowMigration: !1, brazeContentCardsDisabled: !1, disableAutoSSOLogin: !1 },
          t
        ) => ({ ...e, ...t.killswitchState }));
    },
    5307: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.KILLSWITCH_STATE_UPDATED = void 0),
        (t.KILLSWITCH_STATE_UPDATED = "KILLSWITCH_STATE_UPDATED");
    },
    53439: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.blacklistedDeviceKeys = void 0), (t.blacklistedDeviceKeys = ["remoteFile"]);
    },
    3163: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(8581);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    78806: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.cleanRemotelyRemovedProfilesHandler = void 0);
      const a = r(1965);
      t.cleanRemotelyRemovedProfilesHandler = async function (e) {
        try {
          await (0, a.deviceRemoteDeletion)(e.storeService, e.storageService, e.applicationModulesAccess);
        } catch (e) {
          throw new Error("Failed to perform device remote deletion");
        }
      };
    },
    61078: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(78806), t);
    },
    55861: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(3163);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    19399: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.secureDeviceName = void 0),
        (t.secureDeviceName = function (e) {
          return e ? e.replace(/https?:\/\//g, " ") : e;
        });
    },
    5600: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.anonymousComputerIdSelector = void 0);
      const a = r(2246);
      t.anonymousComputerIdSelector = () => (0, a.getCommonAppSetting)("anonymousComputerId");
    },
    12787: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.EventBusConnectors = void 0);
      const a = r(71796);
      t.EventBusConnectors = {
        sessionOpened: (0, a.slot)(),
        syncFailure: (0, a.slot)(),
        syncSuccess: (0, a.slot)(),
        teamSpaceContentControlDone: (0, a.slot)(),
        sessionClosed: (0, a.slot)(),
        familyMemberLeft: (0, a.slot)(),
        remoteFileChanged: (0, a.slot)(),
        appInitialized: (0, a.slot)(),
        coreServicesReady: (0, a.slot)()
      };
    },
    73297: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeEventBusService = void 0);
      const n = r(71796),
        i = r(12787);
      (t.makeEventBusService = () => (0, n.createEventBus)({ events: i.EventBusConnectors })), o(r(6775), t);
    },
    6775: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    28207: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonEventHooks = void 0);
      const a = r(49352);
      t.carbonEventHooks = { iconsUpdates: a.iconsUpdatesHook };
    },
    15660: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultCarbonEventStore = void 0),
        (t.defaultCarbonEventStore = { iconsUpdates: [] });
    },
    86691: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.clearInstance = t.getInstance = t.setInstance = void 0);
      const a = r(42898),
        o = r(28207);
      let n = null;
      t.setInstance = (e) => {
        n = new a.EventStoreConsumer(e, o.carbonEventHooks);
      };
      t.getInstance = () => {
        if (!n) throw new Error("Cannot get EventStoreConsumer instance");
        return n;
      };
      t.clearInstance = () => {
        n && n.teardown(), (n = null);
      };
    },
    12362: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.clearInstance = t.getInstance = t.setInstance = void 0);
      let r = null;
      t.setInstance = (e) => {
        r = e;
      };
      t.getInstance = () => {
        if (!r) throw new Error("Cannot get EventStore instance");
        return r;
      };
      t.clearInstance = () => {
        r && r.teardown(), (r = null);
      };
    },
    46414: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(8821),
        o = r(306),
        n = r(99319);
      t.config = {
        commands: {
          joinFamily: { handler: a.joinFamilyRequest },
          leaveFamily: { handler: n.leaveFamilyRequest },
          removeFamilyMember: { handler: a.removeFamilyMemberRequest },
          resetFamilyJoinToken: { handler: a.resetFamilyJoinTokenRequest },
          getFamilyDetails: { handler: o.getFamilyDetailsRequest }
        },
        queries: {},
        liveQueries: {}
      };
    },
    59047: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(46414);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    49409: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(59047);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    306: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getFamilyDetailsRequest = void 0);
      const a = r(32626),
        o = r(66374),
        n = r(95623),
        i = r(46298),
        s = r(16593),
        c = r(4933);
      t.getFamilyDetailsRequest = async function (e) {
        const { storeService: t } = e,
          r = (0, s.userLoginSelector)(t.getState());
        try {
          const e = await (0, i.getFamilyDetails)(t, r);
          if ((0, i.isApiError)(e)) return { success: !1, error: { code: (0, i.getCode)(e.code, [c.UserMustBeFamilyAdmin]) } };
          const { name: n, id: s, joinToken: l, statusCode: d, members: u, maxMembers: p } = e;
          return {
            success: !0,
            response: {
              name: n,
              id: s,
              joinToken: l,
              statusCode: d,
              members: {
                admin: (0, o.getAdmin)(u),
                regular: (0, o.getMembersByRole)(u, a.FamilyMemberRole.REGULAR),
                removed: (0, o.getMembersByRole)(u, a.FamilyMemberRole.REMOVED)
              },
              spots: (0, o.getSpots)(u, p)
            }
          };
        } catch (e) {
          return n.Debugger.error(`[Family] getFamilyDetailsRequest - Failed: ${e}`), { success: !1, error: { code: i.UnknownError } };
        }
      };
    },
    66374: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getSpots = t.getMembersCount = t.getMembersByRole = t.getAdmin = void 0);
      const a = r(32626);
      function o(e, t) {
        return e.filter((e) => e.role === t);
      }
      function n(e) {
        return o(e, a.FamilyMemberRole.ADMIN).length + o(e, a.FamilyMemberRole.REGULAR).length;
      }
      (t.getAdmin = function (e) {
        return e.find((e) => e.role === a.FamilyMemberRole.ADMIN);
      }),
        (t.getMembersByRole = o),
        (t.getMembersCount = n),
        (t.getSpots = function (e, t) {
          return t - n(e);
        });
    },
    3698: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRenewalInformation = void 0);
      const a = r(32626),
        o = r(46298);
      t.getRenewalInformation = (e) => {
        if (!e || e.state === o.FamilyStopRenewalState.STOPPED) return { showRenewalMessage: !1 };
        const t =
          (r = e.platform) === o.FamilyStopRenewalPlatform.IOS_APP_STORE
            ? a.FamilyRenewalPlatform.IOS_APP_STORE
            : r === o.FamilyStopRenewalPlatform.MAC_STORE
            ? a.FamilyRenewalPlatform.MAC_STORE
            : r === o.FamilyStopRenewalPlatform.PLAY_STORE
            ? a.FamilyRenewalPlatform.PLAY_STORE
            : null;
        var r;
        return t ? { showRenewalMessage: !0, platform: t } : { showRenewalMessage: !1 };
      };
    },
    68385: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getUserStatus = void 0);
      const a = r(32626);
      t.getUserStatus = (e, t) => {
        switch (e) {
          case a.PremiumStatusCode.NEW_USER:
            return a.JoinFamilyUserStatus.NEW_USER;
          case a.PremiumStatusCode.NO_PREMIUM:
            return t ? a.JoinFamilyUserStatus.EXISTING_FREE_USER : a.JoinFamilyUserStatus.NEW_USER;
          case a.PremiumStatusCode.OLD_ACCOUNT:
            return a.JoinFamilyUserStatus.EXISTING_FREE_USER;
          case a.PremiumStatusCode.PREMIUM:
          case a.PremiumStatusCode.PREMIUM_CANCELLED:
            return a.JoinFamilyUserStatus.EXISTING_PREMIUM_USER;
          default:
            throw new Error("Family getUserStatus: impossible to identify user status");
        }
      };
    },
    8821: function (e, t, r) {
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, a, o);
              }
            : function (e, t, r, a) {
                void 0 === a && (a = r), (e[a] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || a(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(50794), t), o(r(98995), t), o(r(49828), t);
    },
    50794: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.joinFamilyRequest = void 0);
      const a = r(95623),
        o = r(46298),
        n = r(68385),
        i = r(3698),
        s = r(4933);
      t.joinFamilyRequest = async function (e, t) {
        const { storeService: r } = e,
          { login: c, joinToken: l } = t;
        try {
          const e = await (0, o.joinFamily)(r, { login: c, joinToken: l });
          if ((0, o.isApiError)(e)) return { success: !1, error: { code: (0, o.getCode)(e.code, s.joinFamilyErrors) } };
          const { name: t, userExists: a, statusCode: d, stopRenewalResult: u } = e,
            p = (0, i.getRenewalInformation)(u);
          return { success: !0, response: { name: t, userExists: a, userStatus: (0, n.getUserStatus)(d, a), renewalInformation: p } };
        } catch (e) {
          return a.Debugger.error(`[Family] joinFamilyRequest - Failed: ${e}`), { success: !1, error: { code: o.UnknownError } };
        }
      };
    },
    99319: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.leaveFamilyRequest = void 0);
      const a = r(95623),
        o = r(46298),
        n = r(16593),
        i = r(4933);
      t.leaveFamilyRequest = async function (e) {
        const { storeService: t, eventBusService: r } = e,
          s = (0, n.userLoginSelector)(t.getState());
        try {
          const e = await (0, o.leaveFamily)(t, s);
          return (0, o.isApiError)(e)
            ? { success: !1, error: { code: (0, o.getCode)(e.code, i.leaveFamilyErrors) } }
            : (r.familyMemberLeft(), { success: !0, response: {} });
        } catch (e) {
          return a.Debugger.error(`[Family] leaveFamilyRequest - Failed: ${e}`), { success: !1, error: { code: o.UnknownError } };
        }
      };
    },
    98995: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeFamilyMemberRequest = void 0);
      const a = r(95623),
        o = r(46298),
        n = r(16593),
        i = r(4933);
      t.removeFamilyMemberRequest = async function (e, t) {
        const { storeService: r } = e,
          s = (0, n.userLoginSelector)(r.getState());
        try {
          const e = await (0, o.removeFamilyMember)(r, s, { userId: t.userId });
          return (0, o.isApiError)(e)
            ? { success: !1, error: { code: (0, o.getCode)(e.code, i.removeFamilyMemberErrors) } }
            : { success: !0, response: {} };
        } catch (e) {
          return a.Debugger.error(`[Family] removeFamilyMemberRequest - Failed: ${e}`), { success: !1, error: { code: o.UnknownError } };
        }
      };
    },
    49828: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.resetFamilyJoinTokenRequest = void 0);
      const a = r(95623),
        o = r(46298),
        n = r(16593),
        i = r(4933);
      t.resetFamilyJoinTokenRequest = async function (e) {
        const { storeService: t } = e,
          r = (0, n.userLoginSelector)(t.getState());
        try {
          const e = await (0, o.resetFamilyJoinToken)(t, r);
          if ((0, o.isApiError)(e)) return { success: !1, error: { code: (0, o.getCode)(e.code, [i.UserMustBeFamilyAdmin]) } };
          const { joinToken: a } = e;
          return { success: !0, response: { joinToken: a } };
        } catch (e) {
          return a.Debugger.error(`[Family] resetFamilyJoinTokenRequest - Failed: ${e}`), { success: !1, error: { code: o.UnknownError } };
        }
      };
    },
    57362: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(88205);
      t.config = {
        commands: {},
        queries: {
          getHasFeature: {
            selectorFactory: async (e) => (await (0, a.makeFeatureFlipsSelectors)(e.applicationModulesAccess)).getHasFeatureSelector
          },
          getFeatures: {
            selectorFactory: async (e) => (await (0, a.makeFeatureFlipsSelectors)(e.applicationModulesAccess)).featureFlipsSelector
          }
        },
        liveQueries: {}
      };
    },
    72175: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(57362);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    43542: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(72175);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    88205: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeFeatureFlipsSelectors = t.makeGetHasFeatureSelector = t.makeFeatureFlipsSelector = void 0);
      const a = r(18948),
        o = r(61475);
      t.makeFeatureFlipsSelector = (e) => async () => {
        const { queries: t } = e.createClients().featureFlips,
          r = await (0, a.firstValueFrom)(t.userFeatureFlips());
        return (0, o.isSuccess)(r) ? r.data : {};
      };
      t.makeGetHasFeatureSelector = (e) => async (t, r) => {
        const { queries: n } = e.createClients().featureFlips,
          i = await (0, a.firstValueFrom)(n.userFeatureFlips());
        if ((0, o.isSuccess)(i)) return i.data[r];
      };
      t.makeFeatureFlipsSelectors = (e) => ({
        featureFlipsSelector: (0, t.makeFeatureFlipsSelector)(e),
        getHasFeatureSelector: (0, t.makeGetHasFeatureSelector)(e)
      });
    },
    88485: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(78671);
      t.config = {
        commands: {
          setGlobalExtensionSettings: { handler: a.setGlobalExtensionSettings },
          getGlobalExtensionSettings: { handler: a.getGlobalExtensionSettings }
        },
        queries: {},
        liveQueries: {}
      };
    },
    17644: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setGlobalExtensionSettingsState = t.SET_GLOBAL_EXTENSION_SETTINGS = void 0),
        (t.SET_GLOBAL_EXTENSION_SETTINGS = "SET_GLOBAL_EXTENSION_SETTINGS");
      t.setGlobalExtensionSettingsState = (e) => ({ type: t.SET_GLOBAL_EXTENSION_SETTINGS, extensionSettings: e });
    },
    45316: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.globalExtensionSettingsReducer = void 0);
      var a = r(22018);
      Object.defineProperty(t, "globalExtensionSettingsReducer", {
        enumerable: !0,
        get: function () {
          return a.globalExtensionSettingsReducer;
        }
      });
    },
    22018: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.globalExtensionSettingsReducer = void 0);
      const a = r(17644);
      t.globalExtensionSettingsReducer = (e = {}, t) =>
        t.type === a.SET_GLOBAL_EXTENSION_SETTINGS ? Object.assign({}, e, { extensionSettings: t.extensionSettings }) : e;
    },
    84838: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(88485);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    78671: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setGlobalExtensionSettings = t.getGlobalExtensionSettings = void 0);
      const a = r(66102),
        o = r(17644),
        n = r(70252),
        i = "consents",
        s = { interactionDataConsent: "interactionData", personalDataConsent: "personalData" },
        c = { interactionDataConsent: null, personalDataConsent: null };
      t.getGlobalExtensionSettings = async (e) => {
        const t = e.storageService.getLocalStorage();
        try {
          return ((e = null) => {
            const t = JSON.parse(e);
            return !t || "object" != typeof t || Array.isArray(t)
              ? c
              : Object.values(s).every((e) => Object.prototype.hasOwnProperty.call(t, e))
              ? { interactionDataConsent: t[s.interactionDataConsent], personalDataConsent: t[s.personalDataConsent] }
              : c;
          })(await t.readItem(i));
        } catch {
          return (
            console.warn("failed parsing user consent values; proceeding as if they haven't been set."),
            { interactionDataConsent: null, personalDataConsent: null }
          );
        }
      };
      t.setGlobalExtensionSettings = async (e, t) => {
        const r = e.storageService.getLocalStorage();
        try {
          await r.writeItem(
            i,
            JSON.stringify({ [s.interactionDataConsent]: t.interactionDataConsent, [s.personalDataConsent]: t.personalDataConsent })
          ),
            e.storeService.dispatch((0, o.setGlobalExtensionSettingsState)(t)),
            (0, n.setAllowedToSendExceptionLog)(!1 !== t.interactionDataConsent),
            (0, a.logToggleAnalyticsEvent)(e);
        } catch {
          return { success: !1 };
        }
        return { success: !0 };
      };
    },
    44389: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(84838);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    64090: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const a = r(47975);
      t.config = { commands: { evaluatePassword: { handler: a.evaluatePassword } }, queries: {}, liveQueries: {} };
    },
    10925: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.load = void 0);
      const a = r(55539);
      t.load = async (e) => {
        const { data: t } = await (0, a.httpGetUsingFetch)(`${e}assets/frequency_lists.json`);
        return t;
      };
    },
    47975: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.evaluatePassword = t.evaluatePasswordStrength = t.loadFrequencyLists = void 0);
      const a = r(85465),
        o = r(2646),
        n = r(10925);
      let i = () => {};
      const s = new Promise((e) => {
        i = e;
      });
      t.loadFrequencyLists = async () => {
        const e = (0, o.getPublicPath)(),
          t = await (0, n.load)(e);
        (0, a.setFrequencyLists)(t), i();
      };
      const c = async (e) => (await s, (0, a.evaluate)(e));
      t.evaluatePasswordStrength = async (e) => (await c(e)).score;
      t.evaluatePassword = async (e, t) => {
        const { score: r, feedback: a } = await c(t.password);
        return { score: r, feedback: a };
      };
    },
    64948: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.evaluatePasswordStrengthOutOfFive = void 0);
      const a = r(47975);
      t.evaluatePasswordStrengthOutOfFive = async (e) => {
        if (e) return (await (0, a.evaluatePasswordStrength)(e)) / 25;
      };
    },
    61566: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const a = r(64090);
      t.bootstrap = (e) => {
        e.register(a.config);
      };
    },
    16359: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var a = r(61566);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    }
  }
]);
