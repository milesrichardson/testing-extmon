"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [1399],
  {
    191354: (e, t, s) => {
      s.d(t, { m: () => l });
      var r = s(486952),
        n = s(574354),
        a = s(125029);
      class o extends (0, n.g)({ scope: a.F.User }) {}
      class i extends (0, n.g)({ scope: a.F.User }) {}
      var c = s(999059);
      class d extends (0, c.k)({ scope: a.F.User }) {}
      class u extends (0, c.k)({ scope: a.F.User }) {}
      const l = (0, r.Q)({
        name: "scim",
        commands: { updateScimConfiguration: o, generateScimToken: i },
        events: {},
        queries: { scimConfiguration: d, scimEndpoint: u }
      });
    },
    821789: (e, t, s) => {
      s.d(t, { y: () => S });
      var r = s(486952),
        n = s(574354),
        a = s(125029);
      class o extends (0, n.g)({ scope: a.F.User }) {}
      class i extends (0, n.g)({ scope: a.F.User }) {}
      class c extends (0, n.g)({ scope: a.F.User }) {}
      class d extends (0, n.g)({ scope: a.F.User }) {}
      class u extends (0, n.g)({ scope: a.F.User }) {}
      class l extends (0, n.g)({ scope: a.F.User }) {}
      class p extends (0, n.g)({ scope: a.F.Device }) {}
      class m extends (0, n.g)({ scope: a.F.User }) {}
      class h extends (0, n.g)({ scope: a.F.User }) {}
      class v extends (0, n.g)({ scope: a.F.User }) {}
      class g extends (0, n.g)({ scope: a.F.User }) {}
      var y = s(999059);
      class f extends (0, y.k)({ scope: a.F.User }) {}
      const S = (0, r.Q)({
        name: "confidentialSSOApi",
        commands: {
          CheckDNSValidationCommand: o,
          ClearSettingsCommand: i,
          CreateTeamCommand: c,
          DeleteDomainCommand: d,
          EnableSsoCommand: u,
          InitSsoProvisioningCommand: l,
          LoginUserWithEnclaveSSOCommand: p,
          ProvisionDomainCommand: m,
          TestLoginUserWithEnclaveSSOCommand: h,
          UpdateMetadataCommand: v,
          ValidateMetadataCommand: g
        },
        events: {},
        queries: { SsoProvisioningQuery: f }
      });
    },
    635318: (e, t, s) => {
      s.d(t, { x: () => i });
      var r = s(215904),
        n = s(549259),
        a = s(661222),
        o = s(92204);
      async function i() {
        const e = await (async function () {
          const e = await (0, a.I)({}),
            t = (0, o.A)("");
          return e.filter((e) => "string" == typeof e.url && e.url.startsWith(t)).filter((e) => "" !== e.url);
        })();
        if (!e.length) return;
        const t = (0, r.a)(),
          s = e.map((e) => e.id).filter((e) => "number" == typeof e && e !== t);
        await (0, n.O)(s);
      }
    },
    918007: (e, t, s) => {
      s.d(t, { J: () => u });
      var r = s(486952),
        n = s(574354),
        a = s(125029);
      class o extends (0, n.g)({ scope: a.F.User }) {}
      class i extends (0, n.g)({ scope: a.F.User }) {}
      var c = s(999059);
      class d extends (0, c.k)({ scope: a.F.Device }) {}
      const u = (0, r.Q)({
        name: "permissions",
        commands: { addGroupManager: o, removeGroupManager: i },
        events: {},
        queries: { userPermissions: d }
      });
    },
    764130: (e, t, s) => {
      s.d(t, { j: () => _ });
      var r = s(486952),
        n = s(574354),
        a = s(125029);
      class o extends (0, n.g)({ scope: a.F.User }) {}
      class i extends (0, n.g)({ scope: a.F.User }) {}
      class c extends (0, n.g)({ scope: a.F.User }) {}
      class d extends (0, n.g)({ scope: a.F.User }) {}
      class u extends (0, n.g)({ scope: a.F.User }) {}
      class l extends (0, n.g)({ scope: a.F.User }) {}
      class p extends (0, n.g)({ scope: a.F.Device }) {}
      class m extends (0, n.g)({ scope: a.F.User }) {}
      class h extends (0, n.g)({ scope: a.F.Device }) {}
      class v extends (0, n.g)({ scope: a.F.Device }) {}
      class g extends (0, n.g)({ scope: a.F.Device }) {}
      class y extends (0, n.g)({ scope: a.F.Device }) {}
      var f = s(999059);
      class S extends (0, f.k)({ scope: a.F.User }) {}
      class b extends (0, f.k)({ scope: a.F.Device }) {}
      class C extends (0, f.k)({ scope: a.F.Device }) {}
      class w extends (0, f.k)({ scope: a.F.User }) {}
      const _ = (0, r.Q)({
        name: "accountRecoveryKey",
        commands: {
          goToActivationNextStep: o,
          goToActivationPrevStep: i,
          requestActivation: c,
          cancelActivation: d,
          cancelGeneration: u,
          confirmActivation: l,
          confirmNewPassword: p,
          deactivate: m,
          submitRecoveryKey: h,
          tryAgainRecovery: v,
          cancelRecoveryFlow: g,
          startRecoveryFlow: y
        },
        queries: { activationFlowStatus: S, accountRecoveryKeyStatus: b, recoveryFlowStatus: C, recoveryMethodsInfo: w },
        events: {}
      });
    },
    201705: (e, t, s) => {
      var r, n;
      s.d(t, { F: () => r, G: () => n }),
        (function (e) {
          (e[(e.InitActivation = 0)] = "InitActivation"),
            (e[(e.RequestActivation = 1)] = "RequestActivation"),
            (e[(e.DisplayKey = 2)] = "DisplayKey"),
            (e[(e.ConfirmKey = 3)] = "ConfirmKey"),
            (e[(e.FinaliseActivation = 4)] = "FinaliseActivation"),
            (e[(e.ActivationDone = 5)] = "ActivationDone"),
            (e[(e.ShowError = 6)] = "ShowError"),
            (e[(e.GenerateNewKey = 7)] = "GenerateNewKey"),
            (e[(e.CancelGenerateNewKey = 8)] = "CancelGenerateNewKey");
        })(r || (r = {})),
        (function (e) {
          (e[(e.InitRecovery = 0)] = "InitRecovery"),
            (e[(e.IdentityVerification = 1)] = "IdentityVerification"),
            (e[(e.EnterRecoveryKey = 2)] = "EnterRecoveryKey"),
            (e[(e.CheckAccountRecoveryKey = 3)] = "CheckAccountRecoveryKey"),
            (e[(e.ChangeMasterPassword = 4)] = "ChangeMasterPassword"),
            (e[(e.Finalising = 5)] = "Finalising"),
            (e[(e.Success = 6)] = "Success"),
            (e[(e.Failure = 7)] = "Failure");
        })(n || (n = {}));
    },
    371795: (e, t, s) => {
      s.d(t, { m: () => u });
      var r = s(486952),
        n = s(999059),
        a = s(125029);
      class o extends (0, n.k)({ scope: a.F.Device }) {}
      class i extends (0, n.k)({ scope: a.F.Device }) {}
      var c = s(312729),
        d = s(806118);
      const u = (0, r.Q)({
        name: "accountDeletion",
        commands: { completeAccountDeletion: c.w, initiateAccountDeletion: d.G },
        events: {},
        queries: { userAuthenticationMethod: o, isFlowCompleted: i }
      });
    },
    312729: (e, t, s) => {
      s.d(t, { D: () => r, w: () => i });
      var r,
        n = s(574354),
        a = s(125029),
        o = s(807165);
      !(function (e) {
        (e.INVALID_OTP_ALREADY_USED = "INVALID_OTP_ALREADY_USED"),
          (e.INVALID_OTP_BLOCKED = "INVALID_OTP_BLOCKED"),
          (e.VERIFICATION_FAILED = "VERIFICATION_FAILED"),
          (e.ACCOUNT_BLOCKED_CONTACT_SUPPORT = "ACCOUNT_BLOCKED_CONTACT_SUPPORT"),
          (e.VERIFICATION_REQUIRES_REQUEST = "VERIFICATION_REQUIRES_REQUEST"),
          (e.VERIFICATION_TIMEOUT = "VERIFICATION_TIMEOUT");
      })(r || (r = {})),
        o.z.object({ tag: o.z.nativeEnum(r) });
      class i extends (0, n.g)({ scope: a.F.Device }) {}
    },
    806118: (e, t, s) => {
      s.d(t, { G: () => i, q: () => r });
      var r,
        n = s(574354),
        a = s(125029),
        o = s(807165);
      !(function (e) {
        (e.UNKNOWN_USER = "user_not_found"), (e.SSO_BLOCKED = "SSO_BLOCKED");
      })(r || (r = {})),
        o.z.object({ tag: o.z.nativeEnum(r) });
      class i extends (0, n.g)({ scope: a.F.Device }) {}
    },
    731788: (e, t, s) => {
      var r;
      s.d(t, { k: () => r }),
        (function (e) {
          (e.EMAIL = "EMAIL"), (e.TOTP = "TOTP");
        })(r || (r = {}));
    },
    76485: (e, t, s) => {
      s.d(t, { l: () => d });
      var r = s(486952),
        n = s(999059),
        a = s(125029);
      class o extends (0, n.k)({ scope: a.F.User }) {}
      var i = s(574354);
      class c extends (0, i.g)({ scope: a.F.User }) {}
      const d = (0, r.Q)({ name: "accountReferral", commands: { inviteByEmail: c }, events: {}, queries: { getSharingLink: o } });
    },
    191235: (e, t, s) => {
      s.d(t, { D: () => i });
      var r = s(486952),
        n = s(999059),
        a = s(125029);
      class o extends (0, n.k)({ scope: a.F.Device }) {}
      const i = (0, r.Q)({ name: "overrides", commands: {}, events: {}, queries: { OverridesQuery: o } });
    },
    929986: (e, t, s) => {
      s.d(t, { V: () => o });
      var r = s(486952),
        n = s(228096),
        a = s(575203);
      const o = (0, r.Q)({
        name: "authenticationFlow",
        commands: {
          changeLogin: a.hW,
          changeTwoFactorAuthenticationOtpType: a.eG,
          clearError: a.jq,
          cancelDeviceTransferRequest: a.Yc,
          resendEmailToken: a.Gc,
          resendPushNotification: a.rF,
          sendAccountEmail: a.A,
          sendMasterPassword: a.rT,
          submitBackupCode: a.sH,
          submitEmailToken: a.XH,
          submitTotp: a.ad,
          switchToDashlaneAuthenticator: a.K1,
          switchToEmailToken: a.v5,
          retryWebAuthnAuthentication: a.M6,
          useMasterPassword: a.Cc,
          webAuthnAuthenticationFail: a.O3,
          logout: a.N5,
          lockSession: a.Y$,
          loginViaSSO: a.yv,
          initiateLoginWithSSO: a.Hr,
          initiateAutologinWithSSOCommand: a.x2
        },
        queries: { authenticationFlowStatus: n.DW, getSsoUserSettings: n.Dc, getProviderInfo: n.L2 },
        events: {}
      });
    },
    575203: (e, t, s) => {
      s.d(t, {
        A: () => a,
        Cc: () => f,
        Gc: () => p,
        Hr: () => _,
        K1: () => i,
        M6: () => y,
        N5: () => b,
        O3: () => S,
        XH: () => c,
        Y$: () => C,
        Yc: () => A,
        ad: () => d,
        eG: () => l,
        hW: () => o,
        jq: () => g,
        rF: () => h,
        rT: () => m,
        sH: () => u,
        v5: () => v,
        x2: () => E,
        yv: () => w
      });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.Device }) {}
      class o extends (0, r.g)({ scope: n.F.Device }) {}
      class i extends (0, r.g)({ scope: n.F.Device }) {}
      class c extends (0, r.g)({ scope: n.F.Device }) {}
      class d extends (0, r.g)({ scope: n.F.Device }) {}
      class u extends (0, r.g)({ scope: n.F.Device }) {}
      class l extends (0, r.g)({ scope: n.F.Device }) {}
      class p extends (0, r.g)({ scope: n.F.Device }) {}
      class m extends (0, r.g)({ scope: n.F.Device }) {}
      class h extends (0, r.g)({ scope: n.F.Device }) {}
      class v extends (0, r.g)({ scope: n.F.Device }) {}
      class g extends (0, r.g)({ scope: n.F.Device }) {}
      class y extends (0, r.g)({ scope: n.F.Device }) {}
      class f extends (0, r.g)({ scope: n.F.Device }) {}
      class S extends (0, r.g)({ scope: n.F.Device }) {}
      class b extends (0, r.g)({ scope: n.F.Device }) {}
      class C extends (0, r.g)({ scope: n.F.Device }) {}
      class w extends (0, r.g)({ scope: n.F.Device }) {}
      class _ extends (0, r.g)({ scope: n.F.Device }) {}
      class E extends (0, r.g)({ scope: n.F.Device }) {}
      class A extends (0, r.g)({ scope: n.F.Device }) {}
    },
    228096: (e, t, s) => {
      s.d(t, { DW: () => a, Dc: () => o, L2: () => i });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.Device }) {}
      class o extends (0, r.k)({ scope: n.F.Device }) {}
      class i extends (0, r.k)({ scope: n.F.Device }) {}
    },
    64496: (e, t, s) => {
      var r, n, a;
      s.d(t, { E6: () => n, UY: () => a, ao: () => o, hr: () => r, vX: () => i }),
        (function (e) {
          (e.SSO = "sso"), (e.MP = "master_password");
        })(r || (r = {})),
        (function (e) {
          (e.WaitingForTransferRequest = "WaitingForTransferRequest"),
            (e.DisplayInstructions = "DisplayInstructions"),
            (e.DisplayPassphrase = "DisplayPassphrase"),
            (e.Error = "Error"),
            (e.DeviceRegistered = "DeviceRegistered");
        })(n || (n = {})),
        (function (e) {
          (e.GENERIC_ERROR = "GENERIC_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.REQUEST_REJECTED = "REQUEST_REJECTED"),
            (e.ACCOUNT_ERROR = "ACCOUNT_ERROR"),
            (e.RATE_LIMIT = "RATE_LIMIT");
        })(a || (a = {}));
      const o = (e) => Object.values(a).includes(e);
      var i;
      !(function (e) {
        (e[(e.MP_TO_SSO = 0)] = "MP_TO_SSO"),
          (e[(e.MP_TO_SSO_WITH_INFO = 1)] = "MP_TO_SSO_WITH_INFO"),
          (e[(e.SSO_TO_MP = 2)] = "SSO_TO_MP");
      })(i || (i = {}));
    },
    406218: (e, t, s) => {
      s.d(t, { F: () => l });
      var r = s(486952),
        n = s(853835),
        a = s(333969),
        o = s(697891),
        i = s(287041),
        c = s(155870),
        d = s(648214),
        u = s(681540);
      const l = (0, r.Q)({
        name: "deviceTransfer",
        commands: {
          refreshRequest: a.V,
          cancelRequest: o.b,
          approveRequest: i.G,
          rejectRequest: c.a,
          submitPassphraseChallenge: d.I,
          returnToDeviceSetupCommand: u.n
        },
        events: {},
        queries: { trustedDeviceFlowStatus: n.N }
      });
    },
    287041: (e, t, s) => {
      s.d(t, { G: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    697891: (e, t, s) => {
      s.d(t, { b: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    333969: (e, t, s) => {
      s.d(t, { V: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    155870: (e, t, s) => {
      s.d(t, { a: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    681540: (e, t, s) => {
      s.d(t, { n: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    648214: (e, t, s) => {
      s.d(t, { I: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    853835: (e, t, s) => {
      s.d(t, { N: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.Device }) {}
    },
    870486: (e, t, s) => {
      var r, n;
      s.d(t, { SA: () => r, Te: () => n, dJ: () => a }),
        (function (e) {
          (e.GENERIC_ERROR = "GENERIC_ERROR"), (e.INVALID_PASSPHRASE = "INVALID_PASSPHRASE"), (e.TIMEOUT = "TIMEOUT");
        })(r || (r = {}));
      class a extends Error {
        constructor(e, t) {
          super(e), (this.code = void 0), (this.code = t);
        }
      }
      !(function (e) {
        (e[(e.WaitingForNewDeviceRequest = 0)] = "WaitingForNewDeviceRequest"),
          (e[(e.NewDeviceRequestAvailable = 1)] = "NewDeviceRequestAvailable"),
          (e[(e.DisplayPassphraseChallenge = 2)] = "DisplayPassphraseChallenge"),
          (e[(e.DeviceTransferComplete = 3)] = "DeviceTransferComplete"),
          (e[(e.DeviceTransferRejected = 4)] = "DeviceTransferRejected"),
          (e[(e.Error = 5)] = "Error");
      })(n || (n = {}));
    },
    611433: (e, t, s) => {
      s.d(t, { i: () => i });
      var r = s(486952),
        n = s(441025),
        a = s(313744),
        o = s(613089);
      const i = (0, r.Q)({
        name: "identityVerificationFlow",
        commands: {
          changeTwoFactorAuthenticationOtpType: a.eG,
          clearError: a.$5,
          resendEmailToken: a.Gc,
          resendPushNotification: a.rF,
          submitBackupCode: a.sH,
          submitEmailToken: a.XH,
          submitTotp: a.ad,
          switchToDashlaneAuthenticator: a.K1,
          switchToEmailToken: a.v5,
          startIdentityVerification: a.qw,
          cancelIdentityVerification: a.Vs
        },
        queries: { identityVerificationFlowStatus: n.O },
        events: { identityVerificationCompleted: o.w }
      });
    },
    313744: (e, t, s) => {
      s.d(t, {
        $5: () => o,
        Gc: () => i,
        K1: () => p,
        Vs: () => v,
        XH: () => d,
        ad: () => l,
        eG: () => a,
        qw: () => h,
        rF: () => c,
        sH: () => u,
        v5: () => m
      });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.Device }) {}
      class o extends (0, r.g)({ scope: n.F.Device }) {}
      class i extends (0, r.g)({ scope: n.F.Device }) {}
      class c extends (0, r.g)({ scope: n.F.Device }) {}
      class d extends (0, r.g)({ scope: n.F.Device }) {}
      class u extends (0, r.g)({ scope: n.F.Device }) {}
      class l extends (0, r.g)({ scope: n.F.Device }) {}
      class p extends (0, r.g)({ scope: n.F.Device }) {}
      class m extends (0, r.g)({ scope: n.F.Device }) {}
      class h extends (0, r.g)({ scope: n.F.Device }) {}
      class v extends (0, r.g)({ scope: n.F.Device }) {}
    },
    613089: (e, t, s) => {
      s.d(t, { w: () => a });
      var r = s(188885),
        n = s(125029);
      class a extends (0, r.d)({ scope: n.F.Device }) {}
    },
    441025: (e, t, s) => {
      s.d(t, { O: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.Device }) {}
    },
    677876: (e, t, s) => {
      s.r(t),
        s.d(t, {
          AuthenticationFlowContracts: () => r,
          DeviceTransferContracts: () => a,
          IdentityVerificationFlowContracts: () => n,
          Request2FaCodesByPhoneCommand: () => T.x,
          Request2FaCodesByPhoneErrorCodes: () => g,
          ValidateWebauthnAssertionCommand: () => T.L,
          userVerificationApi: () => I.M
        });
      var r = {};
      s.r(r),
        s.d(r, {
          AuthenticationFlowClient: () => l,
          AuthenticationFlowStatusQuery: () => c.DW,
          CancelDeviceTransferRequestCommand: () => i.Yc,
          ChangeAccountEmailCommand: () => i.hW,
          ChangeTwoFactorAuthenticationOtpTypeCommand: () => i.eG,
          ClearErrorCommand: () => i.jq,
          DeviceToDeviceAuthenticationErrors: () => d.UY,
          DeviceToDeviceAuthenticationFlowStep: () => d.E6,
          GetSsoProviderInfoQuery: () => c.L2,
          GetSsoUserSettingsQuery: () => c.Dc,
          InitiateAutologinWithSSOCommand: () => i.x2,
          InitiateLoginWithSSOCommand: () => i.Hr,
          LockCommand: () => i.Y$,
          LoginViaSSOCommand: () => i.yv,
          LogoutCommand: () => i.N5,
          ResendEmailTokenCommand: () => i.Gc,
          ResendPushNotificationCommand: () => i.rF,
          RetryWebAuthnAuthenticationCommand: () => i.M6,
          SSOMigrationType: () => d.vX,
          SendAccountEmailCommand: () => i.A,
          SendMasterPasswordCommand: () => i.rT,
          SsoMigrationServerMethod: () => d.hr,
          SubmitBackupCodeCommand: () => i.sH,
          SubmitEmailTokenCommand: () => i.XH,
          SubmitTotpCommand: () => i.ad,
          SwitchToDashlaneAuthenticatorCommand: () => i.K1,
          SwitchToEmailTokenCommand: () => i.v5,
          UseMasterPasswordCommand: () => i.Cc,
          WebAuthnAuthenticationFailCommand: () => i.O3,
          authenticationFlowApi: () => o.V,
          isDeviceToDeviceAuthenticationError: () => d.ao
        });
      var n = {};
      s.r(n),
        s.d(n, {
          CancelIdentityVerificationCommand: () => m.Vs,
          ChangeTwoFactorAuthenticationOtpTypeCommand: () => m.eG,
          ClearIdentityVerificationErrorCommand: () => m.$5,
          IdentityVerificationClient: () => v,
          IdentityVerificationCompletedEvent: () => y.w,
          IdentityVerificationFlowStatusQuery: () => h.O,
          ResendEmailTokenCommand: () => m.Gc,
          ResendPushNotificationCommand: () => m.rF,
          StartIdentityVerificationCommand: () => m.qw,
          SubmitBackupCodeCommand: () => m.sH,
          SubmitEmailTokenCommand: () => m.XH,
          SubmitTotpCommand: () => m.ad,
          SwitchToDashlaneAuthenticatorCommand: () => m.K1,
          SwitchToEmailTokenCommand: () => m.v5,
          identityVerificationFlowApi: () => p.i
        });
      var a = {};
      s.r(a),
        s.d(a, {
          ApproveDeviceTransferRequestCommand: () => b.G,
          CancelRequestCommand: () => _.b,
          RefreshRequestCommand: () => S.V,
          RejectDeviceTransferRequestCommand: () => C.a,
          ReturnToDeviceSetupCommand: () => E.n,
          SubmitPassphraseChallengeCommand: () => w.I,
          TrustedDeviceFlowError: () => U.dJ,
          TrustedDeviceFlowErrors: () => U.SA,
          TrustedDeviceFlowStatusQuery: () => A.N,
          TrustedDeviceFlowStep: () => U.Te,
          deviceTransferApi: () => f.F
        });
      var o = s(929986),
        i = s(575203),
        c = s(228096),
        d = s(64496),
        u = s(767837);
      class l extends (0, u.E)(o.V) {}
      (0, u.K)(o.V, l);
      var p = s(611433),
        m = s(313744),
        h = s(441025);
      class v extends (0, u.E)(p.i) {}
      (0, u.K)(p.i, v);
      var g,
        y = s(613089),
        f = s(406218),
        S = s(333969),
        b = s(287041),
        C = s(155870),
        w = s(648214),
        _ = s(697891),
        E = s(681540),
        A = s(853835),
        U = s(870486),
        I = s(69401),
        T = s(611088);
      !(function (e) {
        (e.AccountNotEligible = "AccountNotEligible"), (e.NetworkError = "NetworkError");
      })(g || (g = {}));
    },
    69401: (e, t, s) => {
      s.d(t, { M: () => a });
      var r = s(486952),
        n = s(611088);
      const a = (0, r.Q)({
        name: "userVerification",
        commands: { validateWebauthnAssertion: n.L, request2FaCodesByPhone: n.x },
        queries: {},
        events: {}
      });
    },
    611088: (e, t, s) => {
      s.d(t, { L: () => a, x: () => o });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
      class o extends (0, r.g)({ scope: n.F.Device }) {}
    },
    715403: (e, t, s) => {
      s.d(t, { c: () => r });
      const r = (0, s(486952).Q)({ name: "autofillData", commands: {}, events: {}, queries: {} });
    },
    592018: (e, t, s) => {
      s.d(t, { Y: () => o });
      var r = s(486952),
        n = s(111564),
        a = s(873581);
      const o = (0, r.Q)({
        name: "autofillTracking",
        commands: { temporaryEmitPasswordAutofillPerformedEvent: a.q },
        events: { passwordAutofillPerformedEvent: n.p },
        queries: {}
      });
    },
    873581: (e, t, s) => {
      s.d(t, { q: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    111564: (e, t, s) => {
      s.d(t, { p: () => a });
      var r = s(188885),
        n = s(125029);
      class a extends (0, r.d)({ scope: n.F.User }) {}
    },
    249360: (e, t, s) => {
      s.r(t),
        s.d(t, {
          AddDisabledSourceTypesCommand: () => D.g,
          AnalysisStatus: () => F._,
          CREDENTIAL_DATA_MODELS: () => m,
          CountriesForAutofill: () => i,
          DisableAnalysisCommand: () => P.u,
          DisableAutofillOnFormsCommand: () => M.t,
          DisableAutofillOnLoginsCommand: () => O.f,
          DisableAutologinCommand: () => k.T,
          DisableFollowUpNotificationCommand: () => L.y,
          DisablePhishingPreventionForUrlCommand: () => T.z,
          EnableAnalysisCommand: () => G.c,
          EnableAutofillOnFormsCommand: () => q.a,
          EnableAutofillOnLoginsCommand: () => V.I,
          EnableAutologinCommand: () => B.i,
          EnableFollowUpNotificationCommand: () => H.B,
          FORM_DATA_MODELS: () => p,
          GetAnalysisStatusOnUrlQuery: () => F.h,
          GetAutofillDisabledOnLoginsAndFormsNotificationStatusQuery: () => w.z,
          GetAutofillProtectionContextQuery: () => E.u,
          GetAutofillSettingsQuery: () => x.T,
          GetDashlaneDefinedLinkedWebsitesQuery: () => Q.J,
          GetUserAutofillCorrectionsQuery: () => R.w,
          OtherSourceType: () => d,
          PasswordAutofillPerformedEvent: () => a.p,
          PhishingPreventionDisabledForUrlQuery: () => U.v,
          PhishingPreventionEnabledQuery: () => A.i,
          RemoveDisabledSourceTypesCommand: () => j.v,
          ResetProtectedItemAutofillTimerCommand: () => I.y,
          SetAutofillDisabledOnLoginsAndFormsNotificationStatusCommand: () => C.a,
          SetUserAutofillCorrectionsCommand: () => z.S,
          TemporaryEmitPasswordAutofillPerformedEventCommand: () => o.q,
          ToggleDashlaneCommand: () => K.r,
          UpdateLinkedWebsitesCommand: () => $.A,
          VaultItemDisableProtectionMode: () => S,
          VaultSourceType: () => c,
          autofillDataApi: () => r.c,
          autofillNotificationsApi: () => b._,
          autofillSecurityApi: () => _.V,
          autofillSettingsApi: () => N.I,
          autofillTrackingApi: () => n.Y,
          isArrayOfAutofillableDataModel: () => g,
          isArrayOfUserAutofillCorrections: () => y,
          isAutofillableDataModel: () => v,
          isDashlaneDisabledPermanently: () => f,
          isOtherSourceType: () => u,
          isVaultSourceType: () => l,
          linkedWebsitesApi: () => W.G
        });
      var r = s(715403),
        n = s(592018),
        a = s(111564),
        o = s(873581);
      const i = Object.freeze({
        NO_TYPE: "NO_TYPE",
        UNIVERSAL: "UNIVERSAL",
        AD: "AD",
        AE: "AE",
        AF: "AF",
        AG: "AG",
        AI: "AI",
        AL: "AL",
        AM: "AM",
        AO: "AO",
        AR: "AR",
        AS: "AS",
        AT: "AT",
        AU: "AU",
        AW: "AW",
        AZ: "AZ",
        BA: "BA",
        BB: "BB",
        BD: "BD",
        BE: "BE",
        BF: "BF",
        BG: "BG",
        BH: "BH",
        BI: "BI",
        BJ: "BJ",
        BL: "BL",
        BM: "BM",
        BN: "BN",
        BO: "BO",
        BR: "BR",
        BS: "BS",
        BT: "BT",
        BW: "BW",
        BY: "BY",
        BZ: "BZ",
        CA: "CA",
        CD: "CD",
        CF: "CF",
        CG: "CG",
        CH: "CH",
        CI: "CI",
        CK: "CK",
        CL: "CL",
        CM: "CM",
        CN: "CN",
        CO: "CO",
        CR: "CR",
        CU: "CU",
        CV: "CV",
        CY: "CY",
        CZ: "CZ",
        DE: "DE",
        DJ: "DJ",
        DK: "DK",
        DM: "DM",
        DO: "DO",
        DZ: "DZ",
        EC: "EC",
        EE: "EE",
        EG: "EG",
        ER: "ER",
        ES: "ES",
        ET: "ET",
        FI: "FI",
        FJ: "FJ",
        FK: "FK",
        FM: "FM",
        FO: "FO",
        FR: "FR",
        GA: "GA",
        GB: "GB",
        GD: "GD",
        GE: "GE",
        GF: "GF",
        GG: "GG",
        GH: "GH",
        GI: "GI",
        GL: "GL",
        GM: "GM",
        GN: "GN",
        GP: "GP",
        GQ: "GQ",
        GR: "GR",
        GT: "GT",
        GU: "GU",
        GW: "GW",
        GY: "GY",
        HK: "HK",
        HN: "HN",
        HR: "HR",
        HT: "HT",
        HU: "HU",
        ID: "ID",
        IE: "IE",
        IL: "IL",
        IM: "IM",
        IN: "IN",
        IO: "IO",
        IQ: "IQ",
        IR: "IR",
        IS: "IS",
        IT: "IT",
        JE: "JE",
        JM: "JM",
        JO: "JO",
        JP: "JP",
        KE: "KE",
        KG: "KG",
        KH: "KH",
        KI: "KI",
        KM: "KM",
        KN: "KN",
        KP: "KP",
        KR: "KR",
        KW: "KW",
        KY: "KY",
        KZ: "KZ",
        LA: "LA",
        LB: "LB",
        LC: "LC",
        LI: "LI",
        LK: "LK",
        LR: "LR",
        LS: "LS",
        LT: "LT",
        LU: "LU",
        LV: "LV",
        LY: "LY",
        MA: "MA",
        MC: "MC",
        MD: "MD",
        ME: "ME",
        MF: "MF",
        MG: "MG",
        MH: "MH",
        MK: "MK",
        ML: "ML",
        MM: "MM",
        MN: "MN",
        MO: "MO",
        MP: "MP",
        MQ: "MQ",
        MR: "MR",
        MS: "MS",
        MT: "MT",
        MU: "MU",
        MV: "MV",
        MW: "MW",
        MX: "MX",
        MY: "MY",
        MZ: "MZ",
        NA: "NA",
        NC: "NC",
        NE: "NE",
        NF: "NF",
        NG: "NG",
        NI: "NI",
        NL: "NL",
        NO: "NO",
        NP: "NP",
        NR: "NR",
        NU: "NU",
        NZ: "NZ",
        OM: "OM",
        PA: "PA",
        PE: "PE",
        PF: "PF",
        PG: "PG",
        PH: "PH",
        PK: "PK",
        PL: "PL",
        PM: "PM",
        PR: "PR",
        PS: "PS",
        PT: "PT",
        PW: "PW",
        PY: "PY",
        QA: "QA",
        RE: "RE",
        RO: "RO",
        RS: "RS",
        RU: "RU",
        RW: "RW",
        SA: "SA",
        SB: "SB",
        SC: "SC",
        SD: "SD",
        SE: "SE",
        SG: "SG",
        SH: "SH",
        SI: "SI",
        SK: "SK",
        SL: "SL",
        SM: "SM",
        SN: "SN",
        SO: "SO",
        SR: "SR",
        ST: "ST",
        SV: "SV",
        SY: "SY",
        SZ: "SZ",
        TC: "TC",
        TD: "TD",
        TF: "TF",
        TG: "TG",
        TH: "TH",
        TJ: "TJ",
        TK: "TK",
        TL: "TL",
        TM: "TM",
        TN: "TN",
        TO: "TO",
        TR: "TR",
        TT: "TT",
        TV: "TV",
        TW: "TW",
        TZ: "TZ",
        UA: "UA",
        UG: "UG",
        US: "US",
        UY: "UY",
        UZ: "UZ",
        VA: "VA",
        VC: "VC",
        VE: "VE",
        VG: "VG",
        VI: "VI",
        VN: "VN",
        VU: "VU",
        WF: "WF",
        WS: "WS",
        XK: "XK",
        YE: "YE",
        YT: "YT",
        ZA: "ZA",
        ZM: "ZM",
        ZW: "ZW",
        AQ: "AQ",
        AX: "AX",
        BV: "BV",
        CC: "CC",
        CX: "CX",
        EH: "EH",
        GS: "GS",
        HM: "HM",
        PN: "PN",
        SJ: "SJ",
        UM: "UM"
      });
      var c, d;
      !(function (e) {
        (e.Address = "Address"),
          (e.BankAccount = "BankAccount"),
          (e.Company = "Company"),
          (e.Credential = "Credential"),
          (e.CredentialCategory = "CredentialCategory"),
          (e.DriverLicense = "DriverLicense"),
          (e.Email = "Email"),
          (e.FiscalId = "FiscalId"),
          (e.GeneratedPassword = "GeneratedPassword"),
          (e.IdCard = "IdCard"),
          (e.Identity = "Identity"),
          (e.NoteCategory = "NoteCategory"),
          (e.Note = "Note"),
          (e.Passport = "Passport"),
          (e.Passkey = "Passkey"),
          (e.PaymentCard = "PaymentCard"),
          (e.PersonalWebsite = "PersonalWebsite"),
          (e.Phone = "Phone"),
          (e.SocialSecurityId = "SocialSecurityId");
      })(c || (c = {})),
        (function (e) {
          (e.NewPassword = "newPassword"), (e.SubmitButton = "submitButton"), (e.WebauthnConditionalUI = "WebauthnConditionalUI");
        })(d || (d = {}));
      const u = (e) => Object.values(d).includes(e),
        l = (e) => e in c,
        p = [
          "KWAddress",
          "KWBankStatement",
          "KWCompany",
          "KWDriverLicence",
          "KWEmail",
          "KWFiscalStatement",
          "KWIDCard",
          "KWIdentity",
          "KWMerchand",
          "KWPassport",
          "KWPaymentMean_creditCard",
          "KWPaymentMean_paypal",
          "KWPersonalWebsite",
          "KWPhone",
          "KWSecureNote",
          "KWSecureNoteCategory",
          "KWSocialSecurityStatement"
        ],
        m = ["KWAuthentifiant", "KWGeneratedPassword", "KWPasskey"],
        h = [...p, ...m],
        v = (e) => !!e && "string" == typeof e && h.includes(e),
        g = (e) => !!e && "object" == typeof e && Array.isArray(e) && e.every(v),
        y = (e) =>
          e instanceof Array &&
          !e.find((e) => {
            return !("object" == typeof (t = e) && null !== t && "id" in t && "fieldIdentifier" in t && "domain" in t);
            var t;
          }),
        f = (e) => "none" === e.correctedDataSource;
      var S;
      !(function (e) {
        (e[(e.CannotDisable = 0)] = "CannotDisable"),
          (e[(e.DisableSpecificVaultItem = 1)] = "DisableSpecificVaultItem"),
          (e[(e.DisableGeneralSetting = 2)] = "DisableGeneralSetting");
      })(S || (S = {}));
      var b = s(845714),
        C = s(261933),
        w = s(863208),
        _ = s(238554),
        E = s(651730),
        A = s(705282),
        U = s(563212),
        I = s(993555),
        T = s(494370),
        N = s(569029),
        F = s(168573),
        x = s(263267),
        R = s(803414),
        D = s(299682),
        P = s(903909),
        k = s(434962),
        M = s(865791),
        O = s(856e3),
        L = s(811232),
        G = s(554405),
        B = s(504924),
        q = s(138018),
        V = s(569643),
        H = s(382796),
        j = s(446918),
        K = s(850163),
        z = s(629641),
        W = s(846097),
        Q = s(666608),
        $ = s(909446);
    },
    846097: (e, t, s) => {
      s.d(t, { G: () => o });
      var r = s(486952),
        n = s(666608),
        a = s(909446);
      const o = (0, r.Q)({
        name: "linkedWebsites",
        commands: { updateLinkedWebsites: a.A },
        events: {},
        queries: { getDashlaneDefinedLinkedWebsites: n.J }
      });
    },
    909446: (e, t, s) => {
      s.d(t, { A: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    666608: (e, t, s) => {
      s.d(t, { J: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    845714: (e, t, s) => {
      s.d(t, { _: () => o });
      var r = s(486952),
        n = s(261933),
        a = s(863208);
      const o = (0, r.Q)({
        name: "autofillNotifications",
        commands: { setAutofillDisabledOnLoginsAndFormsNotificationStatus: n.a },
        events: {},
        queries: { getAutofillDisabledOnLoginsAndFormsNotificationStatus: a.z }
      });
    },
    261933: (e, t, s) => {
      s.d(t, { a: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    863208: (e, t, s) => {
      s.d(t, { z: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    238554: (e, t, s) => {
      s.d(t, { V: () => d });
      var r = s(486952),
        n = s(651730),
        a = s(705282),
        o = s(563212),
        i = s(494370),
        c = s(993555);
      const d = (0, r.Q)({
        name: "autofillSecurity",
        commands: { disablePhishingPreventionForUrl: i.z, resetProtectedItemAutofillTimer: c.y },
        events: {},
        queries: { getAutofillProtectionContext: n.u, isPhishingPreventionCapabilityEnabled: a.i, isPhishingPreventionDisabledForUrl: o.v }
      });
    },
    494370: (e, t, s) => {
      s.d(t, { z: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    993555: (e, t, s) => {
      s.d(t, { y: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.Device }) {}
    },
    651730: (e, t, s) => {
      s.d(t, { u: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    705282: (e, t, s) => {
      s.d(t, { i: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    563212: (e, t, s) => {
      s.d(t, { v: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    569029: (e, t, s) => {
      s.d(t, { I: () => C });
      var r = s(486952),
        n = s(446918),
        a = s(299682),
        o = s(850163),
        i = s(168573),
        c = s(263267),
        d = s(803414),
        u = s(554405),
        l = s(504924),
        p = s(138018),
        m = s(569643),
        h = s(382796),
        v = s(903909),
        g = s(434962),
        y = s(865791),
        f = s(856e3),
        S = s(811232),
        b = s(629641);
      const C = (0, r.Q)({
        name: "autofillSettings",
        commands: {
          toggleDashlane: o.r,
          enableAnalysis: u.c,
          enableAutologin: l.i,
          enableAutofillOnForms: p.a,
          enableAutofillOnLogins: m.I,
          enableFollowUpNotification: h.B,
          disableAnalysis: v.u,
          disableAutologin: g.T,
          disableAutofillOnForms: y.t,
          disableAutofillOnLogins: f.f,
          disableFollowUpNotification: S.y,
          addDisabledSourceTypes: a.g,
          removeDisabledSourceTypes: n.v,
          setUserAutofillCorrections: b.S
        },
        events: {},
        queries: { getAnalysisStatusOnUrl: i.h, getAutofillSettings: c.T, getUserAutofillCorrections: d.w }
      });
    },
    299682: (e, t, s) => {
      s.d(t, { g: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    903909: (e, t, s) => {
      s.d(t, { u: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    865791: (e, t, s) => {
      s.d(t, { t: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    856e3: (e, t, s) => {
      s.d(t, { f: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    434962: (e, t, s) => {
      s.d(t, { T: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    811232: (e, t, s) => {
      s.d(t, { y: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    554405: (e, t, s) => {
      s.d(t, { c: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    138018: (e, t, s) => {
      s.d(t, { a: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    569643: (e, t, s) => {
      s.d(t, { I: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    504924: (e, t, s) => {
      s.d(t, { i: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    382796: (e, t, s) => {
      s.d(t, { B: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    446918: (e, t, s) => {
      s.d(t, { v: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    629641: (e, t, s) => {
      s.d(t, { S: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    850163: (e, t, s) => {
      s.d(t, { r: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    168573: (e, t, s) => {
      s.d(t, { _: () => r, h: () => o });
      var r,
        n = s(999059),
        a = s(125029);
      !(function (e) {
        (e.ANALYSIS_ENABLED = "ANALYSIS_ENABLED"),
          (e.ANALYSIS_DISABLED_BY_USER = "ANALYSIS_DISABLED_BY_USER"),
          (e.ANALYSIS_DISABLED_BY_B2B_ADMIN = "ANALYSIS_DISABLED_BY_B2B_ADMIN"),
          (e.ANALYSIS_DISABLED_BY_KILLSWITCH = "ANALYSIS_DISABLED_BY_KILLSWITCH"),
          (e.ANALYSIS_DISABLED_BY_2FA_ENFORCEMENT = "ANALYSIS_DISABLED_BY_2FA_ENFORCEMENT");
      })(r || (r = {}));
      class o extends (0, n.k)({ scope: a.F.Device }) {}
    },
    263267: (e, t, s) => {
      s.d(t, { T: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    803414: (e, t, s) => {
      s.d(t, { w: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    992137: (e, t, s) => {
      s.r(t),
        s.d(t, {
          DismissMasterPasswordNotificationCommand: () => n.T,
          IsMasterPasswordLeakedQuery: () => c.B,
          IsMasterPasswordNotificationDismissedQuery: () => d.F,
          IsMasterPasswordWeakQuery: () => u.D,
          TemporaryCheckMasterPasswordCommand: () => a.T,
          TemporaryCheckMasterPasswordWeakCommand: () => i.B,
          TemporaryResetMasterPasswordLeakedCommand: () => o.j,
          masterPasswordSecurityApi: () => r.J
        });
      var r = s(575962),
        n = s(480673),
        a = s(888030),
        o = s(130600),
        i = s(705105),
        c = s(422730),
        d = s(823913),
        u = s(886695);
    },
    575962: (e, t, s) => {
      s.d(t, { J: () => l });
      var r = s(486952),
        n = s(480673),
        a = s(888030),
        o = s(130600),
        i = s(705105),
        c = s(422730),
        d = s(886695),
        u = s(823913);
      const l = (0, r.Q)({
        name: "masterPasswordSecurity",
        commands: {
          dismissMasterPasswordNotification: n.T,
          temporaryCheckMasterPassword: a.T,
          temporaryResetMasterPasswordLeaked: o.j,
          temporaryCheckMasterPasswordWeak: i.B
        },
        events: {},
        queries: { isMasterPasswordLeaked: c.B, isMasterPasswordWeak: d.D, isMasterPasswordNotificationDismissed: u.F }
      });
    },
    480673: (e, t, s) => {
      s.d(t, { T: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    705105: (e, t, s) => {
      s.d(t, { B: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    888030: (e, t, s) => {
      s.d(t, { T: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    130600: (e, t, s) => {
      s.d(t, { j: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    422730: (e, t, s) => {
      s.d(t, { B: () => n });
      var r = s(999059);
      class n extends (0, r.k)() {}
    },
    823913: (e, t, s) => {
      s.d(t, { F: () => n });
      var r = s(999059);
      class n extends (0, r.k)() {}
    },
    886695: (e, t, s) => {
      s.d(t, { D: () => n });
      var r = s(999059);
      class n extends (0, r.k)() {}
    },
    885575: (e, t, s) => {
      s.d(t, { B: () => d });
      var r,
        n = s(486952),
        a = s(999059),
        o = s(125029);
      class i extends (0, a.k)({ scope: o.F.User }) {}
      !(function (e) {
        (e.DEFAULT = "default"),
          (e.TRIAL_EXPIRED = "trial_expired"),
          (e.WEB_STORE = "web_store"),
          (e.DASHBOARD_UPGRADE = "dashboard_upgrade"),
          (e.SHARING_CENTER_FAMILY = "sharing_center_family"),
          (e.SHARING_CENTER_WORK = "sharing_center_work");
      })(r || (r = {}));
      class c extends (0, a.k)({ scope: o.F.User }) {}
      const d = (0, n.Q)({ name: "notifications", commands: {}, events: {}, queries: { GetPlanPricingQuery: i, GetUserMessagesQuery: c } });
    },
    908122: (e, t, s) => {
      s.d(t, { J: () => o });
      var r = s(486952),
        n = s(447010),
        a = s(76107);
      const o = (0, r.Q)({
        name: "antiphishing",
        commands: { addAutoRedirectedDomain: a.A },
        events: {},
        queries: { isAutoRedirectedDomain: n.U }
      });
    },
    76107: (e, t, s) => {
      s.d(t, { A: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    447010: (e, t, s) => {
      s.d(t, { U: () => n });
      var r = s(999059);
      class n extends (0, r.k)() {}
    },
    571450: (e, t, s) => {
      s.d(t, { H: () => c });
      var r = s(486952),
        n = s(826254),
        a = s(991619),
        o = s(430240),
        i = s(360135);
      const c = (0, r.Q)({
        name: "breaches",
        commands: { dismissBreach: n.n, markBreachAsSeen: a.Q },
        events: {},
        queries: { breach: o.i, unreadBreachesCount: i.L }
      });
    },
    826254: (e, t, s) => {
      s.d(t, { n: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    991619: (e, t, s) => {
      s.d(t, { Q: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    430240: (e, t, s) => {
      s.d(t, { i: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    360135: (e, t, s) => {
      s.d(t, { L: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    496248: (e, t, s) => {
      s.d(t, { M: () => d });
      var r = s(486952),
        n = s(409310),
        a = s(21444),
        o = s(894814),
        i = s(409062),
        c = s(736214);
      const d = (0, r.Q)({
        name: "emailMonitoring",
        commands: { dismissOnboardingNotification: n.n, optinEmail: a.P5, optoutEmail: o.Lc },
        events: {},
        queries: { emailList: i.dB, onboardingNotificationState: c.p }
      });
    },
    409310: (e, t, s) => {
      s.d(t, { n: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    21444: (e, t, s) => {
      s.d(t, { Dq: () => o, NM: () => u, Ox: () => c, P5: () => p, XX: () => i, l2: () => d, vc: () => l });
      var r = s(574354),
        n = s(125029),
        a = s(996168);
      const o = "OK";
      var i;
      !(function (e) {
        (e.INVALID_EMAIL = "EMAIL_IS_INVALID"),
          (e.ALREADY_SUBSCRIBED = "USER_HAS_ALREADY_AN_ACTIVE_SUBSCRIPTION"),
          (e.TOO_MANY_SUBSCRIPTIONS = "USER_HAS_TOO_MANY_SUBSCRIPTIONS"),
          (e.GENERIC_ERROR = "GENERIC_ERROR");
      })(i || (i = {}));
      class c extends (0, a.Hu)(i.INVALID_EMAIL, "") {}
      class d extends (0, a.Hu)(i.ALREADY_SUBSCRIBED, "") {}
      class u extends (0, a.Hu)(i.TOO_MANY_SUBSCRIPTIONS, "") {}
      class l extends (0, a.Hu)(i.GENERIC_ERROR, "") {}
      class p extends (0, r.g)({ scope: n.F.User }) {}
    },
    894814: (e, t, s) => {
      s.d(t, { KP: () => i, Lc: () => l, QS: () => o, h1: () => d, uD: () => c, v4: () => u });
      var r = s(574354),
        n = s(125029),
        a = s(996168);
      const o = "OK";
      var i;
      !(function (e) {
        (e.INVALID_EMAIL = "EMAIL_IS_INVALID"), (e.NO_SUBSCRIPTION = "USER_HAS_NO_SUBSCRIPTION"), (e.GENERIC_ERROR = "GENERIC_ERROR");
      })(i || (i = {}));
      class c extends (0, a.Hu)(i.INVALID_EMAIL, "") {}
      class d extends (0, a.Hu)(i.NO_SUBSCRIPTION, "") {}
      class u extends (0, a.Hu)(i.GENERIC_ERROR, "") {}
      class l extends (0, r.g)({ scope: n.F.User }) {}
    },
    657255: (e, t, s) => {
      var r;
      function n(e) {
        return "UNKNOWN" === e || "SEEN" === e || "NOT_SEEN" === e;
      }
      s.d(t, { M: () => r, U: () => n }),
        (function (e) {
          (e.UNKNOWN = "UNKNOWN"), (e.SEEN = "SEEN"), (e.NOT_SEEN = "NOT_SEEN");
        })(r || (r = {}));
    },
    409062: (e, t, s) => {
      s.d(t, { a2: () => a, dB: () => o, wp: () => r });
      var r,
        n = s(999059);
      function a(e) {
        return "pending" === e || "active" === e || "disabled" === e;
      }
      !(function (e) {
        (e.PENDING = "pending"), (e.ACTIVE = "active"), (e.DISABLED = "disabled");
      })(r || (r = {}));
      class o extends (0, n.k)() {}
    },
    736214: (e, t, s) => {
      s.d(t, { p: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    78095: (e, t, s) => {
      s.r(t),
        s.d(t, {
          AddAutoRedirectedDomainCommand: () => x.A,
          BreachLeakedDataType: () => n,
          BreachQuery: () => v.i,
          BreachState: () => r,
          CompromisedCredentialsIdsForBreachQuery: () => _.A,
          CompromisedCredentialsQuery: () => C.v,
          CorruptionDataSeverity: () => I.bp,
          CorruptionDataStrength: () => I.ub,
          CredentialHealthDataQuery: () => f.w,
          DarkWebOnboardingState: () => l.M,
          DataLeaksEmailStatus: () => d.wp,
          DismissBreachCommand: () => m.n,
          DismissOnboardingNotificationCommand: () => o.n,
          EmailsListQuery: () => d.dB,
          FilterCredentialsQuery: () => b.Q,
          HealthFilter: () => I._x,
          IsAutoRedirectedDomainQuery: () => F.U,
          MarkBreachAsSeenCommand: () => h.Q,
          OnboardingNotificationStateQuery: () => u.p,
          OptinAlreadySubscribedError: () => i.l2,
          OptinDataLeaksResultErrorCode: () => i.XX,
          OptinDataLeaksResultOkCode: () => i.Dq,
          OptinEmailCommand: () => i.P5,
          OptinGenericError: () => i.vc,
          OptinInvalidEmailError: () => i.Ox,
          OptinTooManySubscriptionsError: () => i.NM,
          OptoutDataLeaksResultErrorCode: () => c.KP,
          OptoutDataLeaksResultOkCode: () => c.QS,
          OptoutEmailCommand: () => c.Lc,
          OptoutGenericError: () => c.v4,
          OptoutInvalidEmailError: () => c.uD,
          OptoutNoSubscriptionError: () => c.h1,
          OtpCodeForSecretOrUrlGenerationError: () => P.k,
          OtpCodeForSecretOrUrlQuery: () => P.S,
          OtpCodeGenerationError: () => D.c,
          OtpCodeQuery: () => D.J,
          PasswordHealthComputationFinishedEvent: () => U.w,
          PasswordHealthReportQuery: () => w.b,
          RecalculatePasswordHealthCommand: () => A.t,
          RiskType: () => I.gI,
          ScoreQuery: () => S.e,
          UnreadBreachesCountQuery: () => g.L,
          UpdateIsCredentialExcludedCommand: () => E.v,
          antiphishingApi: () => N.J,
          breachesApi: () => p.H,
          emailMonitoringApi: () => a.M,
          isDarkWebOnboardingState: () => l.U,
          isDataLeaksEmailStatus: () => d.a2,
          otpApi: () => R.i,
          passwordHealthApi: () => y.d,
          vaultReportApi: () => T.f
        });
      var r,
        n,
        a = s(496248),
        o = s(409310),
        i = s(21444),
        c = s(894814),
        d = s(409062),
        u = s(736214),
        l = s(657255),
        p = s(571450),
        m = s(826254),
        h = s(991619),
        v = s(430240),
        g = s(360135);
      !(function (e) {
        (e.PENDING = "PENDING"), (e.VIEWED = "VIEWED"), (e.ACKNOWLEDGED = "ACKNOWLEDGED");
      })(r || (r = {})),
        (function (e) {
          (e.Username = "username"),
            (e.Password = "password"),
            (e.Email = "email"),
            (e.CreditCard = "creditcard"),
            (e.Phone = "phone"),
            (e.Address = "address"),
            (e.SSN = "ssn"),
            (e.IP = "ip"),
            (e.Location = "geolocation"),
            (e.PersonalInfo = "personalinfo"),
            (e.SocialNetwork = "social");
        })(n || (n = {}));
      var y = s(157668),
        f = s(299097),
        S = s(375787),
        b = s(953489),
        C = s(465796),
        w = s(807466),
        _ = s(832069),
        E = s(876687),
        A = s(45806),
        U = s(125547),
        I = s(504253),
        T = s(593856),
        N = s(908122),
        F = s(447010),
        x = s(76107),
        R = s(690056),
        D = s(325619),
        P = s(5158);
    },
    690056: (e, t, s) => {
      s.d(t, { i: () => o });
      var r = s(486952),
        n = s(325619),
        a = s(5158);
      const o = (0, r.Q)({ name: "otp", commands: {}, events: {}, queries: { otpCode: n.J, otpCodeForSecretOrUrl: a.S } });
    },
    325619: (e, t, s) => {
      s.d(t, { J: () => i, c: () => o });
      var r = s(999059),
        n = s(125029),
        a = s(996168);
      class o extends (0, a.Hu)("Cannot generate OTP code due to no OtpSecret or OtpUrl found for credential", "") {}
      class i extends (0, r.k)({ scope: n.F.User }) {}
    },
    5158: (e, t, s) => {
      s.d(t, { S: () => i, k: () => o });
      var r = s(999059),
        n = s(125029),
        a = s(996168);
      class o extends (0, a.Hu)("Cannot generate OTP code for secret or url", "") {}
      class i extends (0, r.k)({ scope: n.F.User }) {}
    },
    157668: (e, t, s) => {
      s.d(t, { d: () => m });
      var r = s(486952),
        n = s(876687),
        a = s(45806),
        o = s(125547),
        i = s(299097),
        c = s(953489),
        d = s(375787),
        u = s(465796),
        l = s(832069),
        p = s(807466);
      const m = (0, r.Q)({
        name: "passwordHealth",
        commands: { updateIsCredentialExcluded: n.v, recalculatePasswordHealth: a.t },
        events: { passwordHealthComputationFinished: o.w },
        queries: {
          credentialHealthData: i.w,
          filterCredentials: c.Q,
          score: d.e,
          compromisedCredentials: u.v,
          compromisedCredentialsIdsForBreach: l.A,
          passwordHealthReport: p.b
        }
      });
    },
    876687: (e, t, s) => {
      s.d(t, { v: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    45806: (e, t, s) => {
      s.d(t, { t: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    125547: (e, t, s) => {
      s.d(t, { w: () => a });
      var r = s(188885),
        n = s(125029);
      class a extends (0, r.d)({ scope: n.F.User }) {}
    },
    504253: (e, t, s) => {
      var r, n, a, o;
      s.d(t, { _x: () => n, bp: () => o, gI: () => r, ub: () => a }),
        (function (e) {
          (e.Weak = "weak"), (e.Reused = "reused"), (e.Compromised = "compromised"), (e.Excluded = "excluded");
        })(r || (r = {})),
        (function (e) {
          (e.All = "all"), (e.Weak = "weak"), (e.Reused = "reused"), (e.Compromised = "compromised"), (e.Excluded = "excluded");
        })(n || (n = {})),
        (function (e) {
          (e.WEAK = "weak"), (e.EXTREMELY_WEAK = "extremely_weak");
        })(a || (a = {})),
        (function (e) {
          (e.COMMON = "common"), (e.STRONG = "strong");
        })(o || (o = {}));
    },
    832069: (e, t, s) => {
      s.d(t, { A: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    465796: (e, t, s) => {
      s.d(t, { v: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    299097: (e, t, s) => {
      s.d(t, { w: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    953489: (e, t, s) => {
      s.d(t, { Q: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    807466: (e, t, s) => {
      s.d(t, { b: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    375787: (e, t, s) => {
      s.d(t, { e: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    593856: (e, t, s) => {
      s.d(t, { f: () => r });
      const r = (0, s(486952).Q)({ name: "vaultReport", commands: {}, events: {}, queries: {} });
    },
    571669: (e, t, s) => {
      s.d(t, { y: () => d });
      var r = s(486952),
        n = s(574354),
        a = s(125029);
      class o extends (0, n.g)({ scope: a.F.User }) {}
      var i = s(999059);
      class c extends (0, i.k)({ scope: a.F.User }) {}
      const d = (0, r.Q)({ name: "userConsents", commands: { UpdateConsentsCommand: o }, events: {}, queries: { getConsents: c } });
    },
    589193: (e, t, s) => {
      s.d(t, { g: () => a });
      var r = s(486952),
        n = s(798976);
      const a = (0, r.Q)({ name: "activityLogs", commands: { storeActivityLogs: n.M }, events: {}, queries: {} });
    },
    798976: (e, t, s) => {
      s.d(t, { M: () => o, W: () => r });
      var r,
        n = s(574354),
        a = s(125029);
      !(function (e) {
        (e.AUDIT_LOG_MISSING_JSON_SCHEMA = "AUDIT_LOG_MISSING_JSON_SCHEMA"),
          (e.AUDIT_LOG_INVALID_JSON_FOR_JSON_SCHEMA = "AUDIT_LOG_INVALID_JSON_FOR_JSON_SCHEMA"),
          (e.AUDIT_LOG_INVALID_LOG_SCHEMA_TYPE_OR_VERSION = "AUDIT_LOG_INVALID_LOG_SCHEMA_TYPE_OR_VERSION"),
          (e.AUDIT_LOG_ERROR_READING_JSON_SCHEMA = "AUDIT_LOG_ERROR_READING_JSON_SCHEMA"),
          (e.STORING_SENSITIVE_AUDIT_LOGS_NOT_ALLOWED = "STORING_SENSITIVE_AUDIT_LOGS_NOT_ALLOWED");
      })(r || (r = {}));
      class o extends (0, n.g)({ scope: a.F.User }) {}
    },
    755920: (e, t, s) => {
      var r, n;
      s.d(t, { p: () => n, z: () => r }),
        (function (e) {
          (e.UserInvited = "user_invited"),
            (e.UserReinvited = "user_reinvited"),
            (e.UserRemoved = "user_removed"),
            (e.TeamCaptainAdded = "team_captain_added"),
            (e.TeamCaptainRemoved = "team_captain_removed"),
            (e.GroupManagerAdded = "group_manager_added"),
            (e.GroupManagerRemoved = "group_manager_removed"),
            (e.MasterPasswordResetAccepted = "master_password_reset_accepted"),
            (e.MasterPasswordResetRefused = "master_password_reset_refused"),
            (e.BillingAdminAdded = "billing_admin_added"),
            (e.BillingAdminRemoved = "billing_admin_removed"),
            (e.UserGroupCreated = "user_group_created"),
            (e.UserGroupRenamed = "user_group_renamed"),
            (e.UserGroupDeleted = "user_group_deleted"),
            (e.UserJoinedUserGroup = "user_joined_user_group"),
            (e.UserLeftUserGroup = "user_left_user_group"),
            (e.UserInvitedToUserGroup = "user_invited_to_user_group"),
            (e.UserDeclinedInviteToUserGroup = "user_declined_invite_to_user_group"),
            (e.UserRemovedFromUserGroup = "user_removed_from_user_group"),
            (e.DomainRequested = "domain_requested"),
            (e.DomainValidated = "domain_validated"),
            (e.SensitiveLogsEnabled = "collect_sensitive_data_audit_logs_enabled"),
            (e.SensitiveLogsDisabled = "collect_sensitive_data_audit_logs_disabled"),
            (e.SsoIdpMetadataSet = "sso_idp_metadata_set"),
            (e.SsoServiceProviderUrlSet = "sso_service_provider_url_set"),
            (e.SsoEnabled = "sso_enabled"),
            (e.SsoDisabled = "sso_disabled"),
            (e.NitroSsoDomainProvisioned = "nitro_sso_domain_provisioned"),
            (e.NitroSsoDomainRemoved = "nitro_sso_domain_removed"),
            (e.NitroSsoDomainVerified = "nitro_sso_domain_verified"),
            (e.NitroSsoSetupStarted = "nitro_sso_setup_started"),
            (e.TeamNameChanged = "team_name_changed"),
            (e.NewBillingPeriodCreated = "new_billing_period_created"),
            (e.SeatsAdded = "seats_added"),
            (e.ContactEmailChanged = "contact_email_changed"),
            (e.MasterPasswordMobileResetEnabled = "master_password_mobile_reset_enabled"),
            (e.MasterPasswordMobileResetDisabled = "master_password_mobile_reset_disabled"),
            (e.MasterPasswordMobileReset = "master_password_mobile_reset"),
            (e.MasterPasswordChanged = "master_password_changed"),
            (e.MpToViewPasswordsEnabled = "mp_to_view_passwords_enabled"),
            (e.MpToViewPasswordsDisabled = "mp_to_view_passwords_disabled"),
            (e.TwoFactorAuthenticationLoginMethodAdded = "two_factor_authentication_login_method_added"),
            (e.TwoFactorAuthenticationLoginMethodRemoved = "two_factor_authentication_login_method_removed"),
            (e.BiometricSignInDisabled = "biometric_sign_in_disabled"),
            (e.DWMEmailAdded = "dwm_email_added"),
            (e.DWMEmailRemoved = "dwm_email_removed"),
            (e.DWMAlertReceived = "dwm_alert_received"),
            (e.UserDeviceAdded = "user_device_added"),
            (e.UserDeviceRemoved = "user_device_removed"),
            (e.UserDeviceLogin = "user_device_login"),
            (e.MasterPasswordReset = "master_password_reset"),
            (e.RequestedAccountRecovery = "requested_account_recovery"),
            (e.CompletedAccountRecovery = "completed_account_recovery"),
            (e.UserSharedCredentialWithGroup = "user_shared_credential_with_group"),
            (e.UserSharedCredentialWithEmail = "user_shared_credential_with_email"),
            (e.UserSharedCredentialWithExternal = "user_shared_credential_with_external"),
            (e.UserSharedSecureNoteWithGroup = "user_shared_secure_note_with_group"),
            (e.UserSharedSecureNoteWithEmail = "user_shared_secure_note_with_email"),
            (e.UserSharedSecureNoteWithExternal = "user_shared_secure_note_with_external"),
            (e.UserRevokedSharedCredentialGroup = "user_revoked_shared_credential_group"),
            (e.UserRevokedSharedCredentialEmail = "user_revoked_shared_credential_email"),
            (e.UserRevokedSharedCredentialExternal = "user_revoked_shared_credential_external"),
            (e.UserRevokedSharedSecureNoteGroup = "user_revoked_shared_secure_note_group"),
            (e.UserRevokedSharedSecureNoteEmail = "user_revoked_shared_secure_note_email"),
            (e.UserRevokedSharedSecureNoteExternal = "user_revoked_shared_secure_note_external"),
            (e.UserAcceptedSharingInviteSecureNote = "user_accepted_sharing_invite_secure_note"),
            (e.UserRejectedSharingInviteSecureNote = "user_rejected_sharing_invite_secure_note"),
            (e.UserAcceptedSharingInviteCredential = "user_accepted_sharing_invite_credential"),
            (e.UserRejectedSharingInviteCredential = "user_rejected_sharing_invite_credential"),
            (e.UserCreatedCredential = "user_created_credential"),
            (e.UserModifiedCredential = "user_modified_credential"),
            (e.UserDeletedCredential = "user_deleted_credential"),
            (e.UserImportedCredentials = "user_imported_credentials"),
            (e.UserCreatedSecureNote = "user_created_secure_note"),
            (e.UserModifiedSecureNote = "user_modified_secure_note"),
            (e.UserDeletedSecureNote = "user_deleted_secure_note");
        })(r || (r = {})),
        (function (e) {
          (e.Account = "account"),
            (e.Authentication = "authentication"),
            (e.DarkWebMonitoring = "dark_web_monitoring"),
            (e.Groups = "groups"),
            (e.ImportExport = "import_export"),
            (e.TeamSettings = "team_settings"),
            (e.TeamSettingsActiveDirectory = "team_settings_activedirectory"),
            (e.TeamSettingsPolicies = "team_settings_policies"),
            (e.TeamSettingsSAMLProvisioning = "team_settings_samlprovisioning"),
            (e.TeamSettingsSCIM = "team_settings_scim"),
            (e.TeamSettingsSSO = "team_settings_sso"),
            (e.Sharing = "sharing"),
            (e.UserSettings = "user_settings"),
            (e.UserSettingsAccountRecovery = "user_settings_accountrecovery"),
            (e.Users = "users"),
            (e.VaultIDs = "vault_ids"),
            (e.VaultPasswords = "vault_passwords"),
            (e.VaultPayments = "vault_payments"),
            (e.VaultPersonalInfo = "vault_personalinfo"),
            (e.VaultSecureNotes = "vault_securenotes");
        })(n || (n = {}));
    },
    162240: (e, t, s) => {
      s.r(t),
        s.d(t, {
          ActivityLogCategory: () => a.p,
          ActivityLogType: () => a.z,
          StoreActivityLogsCommand: () => n.M,
          StoreActivityLogsInvalidLogsError: () => n.W,
          activityLogsApi: () => r.g
        });
      var r = s(589193),
        n = s(798976),
        a = s(755920);
    },
    470305: (e, t, s) => {
      s.d(t, { v: () => o });
      var r = s(486952),
        n = s(867490),
        a = s(398193);
      const o = (0, r.Q)({
        name: "changeMasterPassword",
        commands: { temporarySendMasterPasswordChangedEvent: a.n },
        events: { masterPasswordChanged: n.D },
        queries: {}
      });
    },
    398193: (e, t, s) => {
      s.d(t, { n: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    867490: (e, t, s) => {
      s.d(t, { D: () => a });
      var r = s(188885),
        n = s(125029);
      class a extends (0, r.d)({ scope: n.F.User }) {}
    },
    185481: (e, t, s) => {
      s.r(t),
        s.d(t, {
          ChangeSessionKeyErrorTypes: () => u.eq,
          CheckSessionKeyErrorTypes: () => b,
          CheckSessionKeyQuery: () => m.Z,
          CheckSessionSessionNotCreated: () => w,
          CloseUserSessionCommand: () => o.V,
          CreateUserSessionCommand: () => i.lk,
          CreatedSessionState: () => l.XL,
          CreatedSessionsStateQuery: () => l.iH,
          DeleteLocalSessionCommand: () => d.G,
          DeviceLimitQuery: () => N.X,
          FlushLocalDataCommand: () => n.e,
          IsAllowedQuery: () => T.bY,
          MasterPasswordChangedEvent: () => A.D,
          MultiAccountNotYetSupported: () => c.y9,
          NotAllowedReason: () => T.Oq,
          OpenUserSessionCommand: () => c.Dx,
          PlatformView: () => N.i,
          PrepareLocalDataFlushCommand: () => a.X,
          SelectedOpenedSessionQuery: () => p._,
          SessionAlreadyExists: () => i.X0,
          SessionAlreadyOpened: () => c.mR,
          SessionClient: () => S,
          SessionCloseMode: () => h.K,
          SessionClosedEvent: () => h.X,
          SessionClosingEvent: () => v.Z,
          SessionCreationErrorTypes: () => i.v5,
          SessionKeyChecker: () => _,
          SessionNotCreated: () => c.aK,
          SessionOpenErrorTypes: () => c.T8,
          SessionOpenedEvent: () => g.M,
          SessionOpeningEvent: () => y.$,
          SessionQueryParamsSchema: () => l.cM,
          SessionState: () => l.sM,
          SessionStateQuery: () => l.ZP,
          TemporarySendMasterPasswordChangedEventCommand: () => U.n,
          UnableToUpdateSessionKeyForNonExistingAccount: () => u.pX,
          UnableToUpdateSessionSessionNotOpened: () => u.nA,
          UpdateUserSessionKeyCommand: () => u.yt,
          UserNotLogged: () => T.Fh,
          changeMasterPasswordApi: () => E.v,
          sessionApi: () => r.Q,
          vaultAccessApi: () => I.Y
        });
      var r = s(434710),
        n = s(42858),
        a = s(915473),
        o = s(186334),
        i = s(169207),
        c = s(637334),
        d = s(354703),
        u = s(490032),
        l = s(55510),
        p = s(731839),
        m = s(945911),
        h = s(466134),
        v = s(782398),
        g = s(305237),
        y = s(90775),
        f = s(767837);
      class S extends (0, f.E)(r.Q) {}
      (0, f.K)(r.Q, S);
      var b,
        C = s(996168);
      !(function (e) {
        e.SessionNotCreated = "notCreated";
      })(b || (b = {}));
      class w extends (0, C.Hu)(b.SessionNotCreated, "The session has not been created. Create it first.") {}
      class _ {}
      var E = s(470305),
        A = s(867490),
        U = s(398193),
        I = s(565766),
        T = s(757755),
        N = s(149273);
    },
    434710: (e, t, s) => {
      s.d(t, { Q: () => f });
      var r = s(486952),
        n = s(55510),
        a = s(945911),
        o = s(305237),
        i = s(782398),
        c = s(466134),
        d = s(42858),
        u = s(915473),
        l = s(169207),
        p = s(637334),
        m = s(186334),
        h = s(354703),
        v = s(90775),
        g = s(731839),
        y = s(490032);
      const f = (0, r.Q)({
        name: "session",
        commands: {
          FlushLocalDataCommand: d.e,
          PrepareLocalDataFlushCommand: u.X,
          CreateUserSessionCommand: l.lk,
          OpenUserSessionCommand: p.Dx,
          CloseUserSessionCommand: m.V,
          DeleteLocalSessionCommand: h.G,
          UpdateUserSessionKeyCommand: y.yt
        },
        queries: { sessionState: n.ZP, createdSessionsState: n.iH, selectedOpenedSession: g._, checkSessionKey: a.Z },
        events: { SessionOpenedEvent: o.M, SessionClosingEvent: i.Z, SessionClosedEvent: c.X, SessionOpeningEvent: v.$ }
      });
    },
    186334: (e, t, s) => {
      s.d(t, { V: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.Device }) {}
    },
    169207: (e, t, s) => {
      s.d(t, { X0: () => i, lk: () => c, v5: () => r });
      var r,
        n = s(574354),
        a = s(125029),
        o = s(996168);
      !(function (e) {
        e.AlreadyExists = "alreadyExists";
      })(r || (r = {}));
      class i extends (0, o.Hu)(r.AlreadyExists, "The session already exists. Delete it first.") {}
      class c extends (0, n.g)({ scope: a.F.Device }) {}
    },
    354703: (e, t, s) => {
      s.d(t, { G: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.Device }) {}
    },
    42858: (e, t, s) => {
      s.d(t, { e: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    637334: (e, t, s) => {
      s.d(t, { Dx: () => u, T8: () => r, aK: () => i, mR: () => c, y9: () => d });
      var r,
        n = s(574354),
        a = s(125029),
        o = s(996168);
      !(function (e) {
        (e.NotCreated = "notCreated"), (e.AlreadyOpened = "alreadyOpened"), (e.MultiAccountNotYetSupported = "multiAccountNotYetSupported");
      })(r || (r = {}));
      class i extends (0, o.Hu)(r.NotCreated, "The session has not been created. Create it first.") {}
      class c extends (0, o.Hu)(r.AlreadyOpened, "The session is already opened for this user. Close it first.") {}
      class d extends (0, o.Hu)(r.MultiAccountNotYetSupported, "Another session is opened. Close it first.") {}
      class u extends (0, n.g)({ scope: a.F.Device }) {}
    },
    915473: (e, t, s) => {
      s.d(t, { X: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    490032: (e, t, s) => {
      s.d(t, { eq: () => r, nA: () => c, pX: () => i, yt: () => d });
      var r,
        n = s(574354),
        a = s(125029),
        o = s(996168);
      !(function (e) {
        (e.NotCreated = "notCreated"), (e.NotOpened = "notOpened");
      })(r || (r = {}));
      class i extends (0, o.Hu)(r.NotCreated, "The session has not been created. Create it first.") {}
      class c extends (0, o.Hu)(r.NotOpened, "The session has not been opened") {}
      class d extends (0, n.g)({ scope: a.F.Device }) {}
    },
    466134: (e, t, s) => {
      s.d(t, { K: () => r, X: () => o });
      var r,
        n = s(188885),
        a = s(125029);
      !(function (e) {
        (e.Close = "close"), (e.Lock = "lock");
      })(r || (r = {}));
      class o extends (0, n.d)({ scope: a.F.Device }) {}
    },
    782398: (e, t, s) => {
      s.d(t, { Z: () => a });
      var r = s(188885),
        n = s(125029);
      class a extends (0, r.d)({ scope: n.F.User }) {}
    },
    305237: (e, t, s) => {
      s.d(t, { M: () => a });
      var r = s(188885),
        n = s(125029);
      class a extends (0, r.d)({ scope: n.F.User }) {}
    },
    90775: (e, t, s) => {
      s.d(t, { $: () => a });
      var r = s(188885),
        n = s(125029);
      class a extends (0, r.d)({ scope: n.F.User }) {}
    },
    945911: (e, t, s) => {
      s.d(t, { Z: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.Device }) {}
    },
    731839: (e, t, s) => {
      s.d(t, { _: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.Device }) {}
    },
    55510: (e, t, s) => {
      s.d(t, { XL: () => c, ZP: () => d, cM: () => o, iH: () => u, sM: () => i });
      var r = s(999059),
        n = s(125029),
        a = s(807165);
      const o = a.z.object({ email: a.z.string() });
      var i, c;
      !(function (e) {
        (e.NotCreated = "notCreated"), (e.Closed = "closed"), (e.Open = "open");
      })(i || (i = {}));
      class d extends (0, r.k)({ scope: n.F.Device }) {}
      !(function (e) {
        (e.Closed = "closed"), (e.Open = "open");
      })(c || (c = {}));
      class u extends (0, r.k)({ scope: n.F.Device }) {}
    },
    565766: (e, t, s) => {
      s.d(t, { Y: () => o });
      var r = s(486952),
        n = s(757755),
        a = s(149273);
      const o = (0, r.Q)({ name: "vaultAccess", commands: {}, events: {}, queries: { isAllowed: n.bY, deviceLimit: a.X } });
    },
    149273: (e, t, s) => {
      s.d(t, { X: () => o, i: () => r });
      var r,
        n = s(999059),
        a = s(125029);
      !(function (e) {
        (e.Android = "android"),
          (e.DesktopMacOS = "macosx"),
          (e.DesktopWindows = "windows"),
          (e.IPad = "ipad"),
          (e.IPhone = "iphone"),
          (e.IPod = "ipod"),
          (e.Other = "other"),
          (e.StandaloneExtension = "saex"),
          (e.TeamAdminConsole = "tac"),
          (e.WebApp = "webapp");
      })(r || (r = {}));
      class o extends (0, n.k)({ scope: a.F.User }) {}
    },
    757755: (e, t, s) => {
      s.d(t, { Fh: () => i, Oq: () => r, bY: () => c });
      var r,
        n = s(999059),
        a = s(125029),
        o = s(996168);
      !(function (e) {
        (e.DeviceLimited = "DeviceLimited"),
          (e.Requires2FAEnforcement = "Requires2FAEnforcement"),
          (e.RequiresSSO2MPMigration = "RequiresSSO2MPMigration"),
          (e.RequiresMP2SSOMigration = "RequiresMP2SSOMigration"),
          (e.NoActiveUser = "NoActiveUser");
      })(r || (r = {}));
      class i extends (0, o.Hu)("UserNotLogged", "Please log the user") {}
      class c extends (0, n.k)({ scope: a.F.Device }) {}
    },
    23704: (e, t, s) => {
      s.r(t),
        s.d(t, {
          AcceptCollectionInviteCommand: () => u.cD,
          AcceptCollectionInviteFailedError: () => u.nu,
          AcceptCollectionInviteResultErrorCode: () => u.Ti,
          AddItemToCollectionsCommand: () => F.$,
          AddItemsToCollectionCommand: () => N.Z,
          CreateSharedCollectionCommand: () => x.I,
          DeleteSharedCollectionCommand: () => R.U,
          GetCollectionPermissionsQuery: () => A.A,
          GetInvitesQuery: () => v.q,
          GetItemGroupForItemQuery: () => o.i,
          GetItemIdsInSharedCollectionsQuery: () => E.q,
          GetItemIdsInSharedCollectionsSchema: () => S.Po,
          GetPendingCollectionsQuery: () => g.D,
          GetPermissionForItemQuery: () => c.C,
          GetSharedCollectionsQuery: () => U.$,
          GetSharingStatusForItemQuery: () => i.S,
          GetSharingTeamLoginsQuery: () => n.G,
          HasInvitesQuery: () => y._,
          InviteCollectionMembersCommand: () => D.Q,
          PendingCollectionSchema: () => b,
          PendingItemGroupSchema: () => C,
          PendingUserGroupSchema: () => w,
          Permission: () => S.y3,
          PermissionSchema: () => S.Iy,
          RefuseCollectionInviteCommand: () => l.UC,
          RefuseCollectionInviteFailedError: () => l.R$,
          RefuseCollectionInviteResultErrorCode: () => l.eT,
          RefuseItemGroupInviteAuthorHasInvalidStatusError: () => p.bp,
          RefuseItemGroupInviteCommand: () => p.gm,
          RefuseItemGroupInviteGroupHasInvalidStatusError: () => p.Xj,
          RefuseItemGroupInviteInvalidItemGroupRevisionError: () => p.Ne,
          RefuseItemGroupInviteNotEnoughAdminsError: () => p.Ix,
          RefuseItemGroupInviteNotFoundError: () => p.fL,
          RefuseItemGroupInviteResultErrorCode: () => p.dI,
          RefuseItemGroupInviteUserGroupIsNotInItemGroupError: () => p.Te,
          RefuseItemGroupInviteUserIsNotInItemGroupError: () => p.hp,
          RefuseItemGroupInviteUserIsNotInPendingStatusError: () => p.gR,
          RefuseUserGroupInviteAuthorHasInvalidStatusError: () => m.K8,
          RefuseUserGroupInviteCommand: () => m.Fo,
          RefuseUserGroupInviteGroupHasInvalidStatusError: () => m.kh,
          RefuseUserGroupInviteInsufficientPrivilegesError: () => m.FO,
          RefuseUserGroupInviteInvalidItemGroupRevisionError: () => m.Uf,
          RefuseUserGroupInviteInvalidTeamIdError: () => m.Ix,
          RefuseUserGroupInviteNotFoundError: () => m.i6,
          RefuseUserGroupInviteResultErrorCode: () => m.xC,
          RefuseUserGroupInviteUserGroupIsNotFoundError: () => m.U1,
          RefuseUserGroupInviteUserGroupUpdateConflictError: () => m.Xp,
          RefuseUserGroupInviteUserIsNotInPendingStatusError: () => m.PZ,
          RefuseUserGroupInviteUserIsNotInUserGroupError: () => m.xz,
          RemoveItemFromCollectionsCommand: () => k.B,
          RenameCollectionCommand: () => P.r,
          RevokeCollectionMembersCommand: () => M.q,
          RsaStatusSchema: () => S.bd,
          ShareableCollectionSchema: () => I.JQ,
          ShareableCollectionVaultItemSchema: () => I.FN,
          SharedCollectionRole: () => S.Yt,
          SharedCollectionSchema: () => S.MX,
          SharedCollectionUserGroupSchema: () => S.yD,
          SharedCollectionUserOrGroupViewSchema: () => S.fg,
          SharedCollectionUserSchema: () => S.Me,
          SharedCollectionsWithItemsQuery: () => I.MO,
          SharingCollectionsClient: () => B,
          SharingEnabledQuery: () => a.N,
          Status: () => S.qb,
          StatusSchema: () => S.y$,
          UpdateCollectionMembersCommand: () => L.c,
          UpdatePendingCollectionsCommand: () => h.r,
          UpdateSharedCollectionsCommand: () => O.M,
          UsersAndGroupsInCollectionQuery: () => T.O,
          UsersAndGroupsInCollectionSchema: () => S.a7,
          getRefuseItemGroupInviteFunctionalError: () => p.fr,
          getRefuseUserGroupInviteFunctionalError: () => m.cz,
          sharingCollectionsApi: () => _.a,
          sharingInvitesApi: () => d.t,
          sharingItemsApi: () => r.X
        });
      var r = s(348958),
        n = s(931485),
        a = s(954003),
        o = s(354326),
        i = s(620920),
        c = s(904975),
        d = s(258425),
        u = s(231609),
        l = s(68096),
        p = s(455677),
        m = s(584009),
        h = s(179517),
        v = s(715179),
        g = s(236610),
        y = s(736469),
        f = s(807165),
        S = s(604400);
      const b = f.z.object({
          uuid: f.z.string(),
          name: f.z.string(),
          referrer: f.z.string(),
          permission: f.z.nativeEnum(S.y3),
          seen: f.z.boolean()
        }),
        C = f.z.object({
          itemGroupId: f.z.string(),
          referrer: f.z.string(),
          permission: f.z.enum(["admin", "limited"]),
          seen: f.z.boolean()
        }),
        w = f.z.object({
          groupId: f.z.string(),
          name: f.z.string(),
          referrer: f.z.string(),
          permission: f.z.enum(["admin", "limited"]),
          seen: f.z.boolean()
        });
      var _ = s(172721),
        E = s(567591),
        A = s(935317),
        U = s(724249),
        I = s(311578),
        T = s(506233),
        N = s(99676),
        F = s(546629),
        x = s(11527),
        R = s(850384),
        D = s(589074),
        P = s(86590),
        k = s(368827),
        M = s(177311),
        O = s(615507),
        L = s(500177),
        G = s(767837);
      class B extends (0, G.E)(_.a) {}
      (0, G.K)(_.a, B);
    },
    172721: (e, t, s) => {
      s.d(t, { a: () => S });
      var r = s(486952),
        n = s(567591),
        a = s(724249),
        o = s(935317),
        i = s(311578),
        c = s(506233),
        d = s(99676),
        u = s(546629),
        l = s(11527),
        p = s(850384),
        m = s(589074),
        h = s(500177),
        v = s(368827),
        g = s(86590),
        y = s(177311),
        f = s(615507);
      const S = (0, r.Q)({
        name: "sharingCollections",
        commands: {
          addItemsToCollection: d.Z,
          addItemToCollections: u.$,
          createSharedCollection: l.I,
          deleteSharedCollection: p.U,
          inviteCollectionMembers: m.Q,
          updateCollectionMembers: h.c,
          removeItemFromCollections: v.B,
          renameCollection: g.r,
          revokeCollectionMembers: y.q,
          updateSharedCollections: f.M
        },
        events: {},
        queries: {
          getItemIdsInSharedCollections: n.q,
          getSharedCollections: a.$,
          getCollectionPermissions: o.A,
          sharedCollectionsWithItems: i.MO,
          usersAndGroupsInCollection: c.O
        }
      });
    },
    546629: (e, t, s) => {
      s.d(t, { $: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    99676: (e, t, s) => {
      s.d(t, { Z: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    11527: (e, t, s) => {
      s.d(t, { I: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    850384: (e, t, s) => {
      s.d(t, { U: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    589074: (e, t, s) => {
      s.d(t, { Q: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    368827: (e, t, s) => {
      s.d(t, { B: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    86590: (e, t, s) => {
      s.d(t, { r: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    177311: (e, t, s) => {
      s.d(t, { q: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    500177: (e, t, s) => {
      s.d(t, { c: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    615507: (e, t, s) => {
      s.d(t, { M: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    567591: (e, t, s) => {
      s.d(t, { q: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    935317: (e, t, s) => {
      s.d(t, { A: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    724249: (e, t, s) => {
      s.d(t, { $: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    311578: (e, t, s) => {
      s.d(t, { FN: () => o, JQ: () => i, MO: () => c });
      var r = s(807165),
        n = s(999059),
        a = s(125029);
      const o = r.z.object({ id: r.z.string(), type: r.z.string() }),
        i = r.z.object({
          id: r.z.string(),
          name: r.z.string(),
          spaceId: r.z.string(),
          vaultItems: r.z.array(o),
          isShared: r.z.optional(r.z.boolean())
        });
      class c extends (0, n.k)({ scope: a.F.User }) {}
    },
    506233: (e, t, s) => {
      s.d(t, { O: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    604400: (e, t, s) => {
      s.d(t, {
        Iy: () => i,
        MX: () => p,
        Me: () => d,
        Po: () => h,
        Yt: () => v,
        a7: () => m,
        bd: () => c,
        fg: () => l,
        qb: () => n,
        y$: () => o,
        y3: () => r,
        yD: () => u
      });
      var r,
        n,
        a = s(807165);
      !(function (e) {
        (e.Admin = "admin"), (e.Limited = "limited");
      })(r || (r = {})),
        (function (e) {
          (e.Pending = "pending"), (e.Accepted = "accepted"), (e.Refused = "refused"), (e.Revoked = "revoked");
        })(n || (n = {}));
      const o = a.z.nativeEnum(n),
        i = a.z.nativeEnum(r),
        c = a.z.union([a.z.literal("noKey"), a.z.literal("publicKey"), a.z.literal("sharingKeys")]),
        d = a.z.object({
          acceptSignature: a.z.optional(a.z.nullable(a.z.string())),
          collectionKey: a.z.optional(a.z.nullable(a.z.string())),
          login: a.z.string(),
          permission: i,
          proposeSignature: a.z.optional(a.z.string()),
          proposeSignatureUsingAlias: a.z.optional(a.z.boolean()),
          referrer: a.z.string(),
          rsaStatus: a.z.optional(c),
          status: o
        }),
        u = a.z.object({
          acceptSignature: a.z.optional(a.z.nullable(a.z.string())),
          collectionKey: a.z.optional(a.z.nullable(a.z.string())),
          name: a.z.string(),
          permission: i,
          proposeSignature: a.z.optional(a.z.string()),
          referrer: a.z.optional(a.z.string()),
          status: o,
          uuid: a.z.string()
        }),
        l = a.z.object({ label: a.z.string(), status: o, permission: i, id: a.z.string() }),
        p = a.z.object({
          name: a.z.string(),
          privateKey: a.z.string(),
          publicKey: a.z.string(),
          revision: a.z.number(),
          userGroups: a.z.optional(a.z.array(u)),
          users: a.z.optional(a.z.array(d)),
          uuid: a.z.string()
        }),
        m = a.z.object({ userGroups: a.z.optional(a.z.array(l)), users: a.z.optional(a.z.array(l)) }),
        h = a.z.array(a.z.string());
      var v;
      !(function (e) {
        (e.Editor = "editor"), (e.Manager = "manager");
      })(v || (v = {}));
    },
    258425: (e, t, s) => {
      s.d(t, { t: () => p });
      var r = s(486952),
        n = s(231609),
        a = s(68096),
        o = s(455677),
        i = s(584009),
        c = s(179517),
        d = s(715179),
        u = s(236610),
        l = s(736469);
      const p = (0, r.Q)({
        name: "sharingInvites",
        commands: {
          AcceptCollectionInviteCommand: n.cD,
          RefuseCollectionInviteCommand: a.UC,
          RefuseItemGroupInviteCommand: o.gm,
          RefuseUserGroupInviteCommand: i.Fo,
          UpdatePendingCollectionsCommand: c.r
        },
        events: {},
        queries: { GetInvitesQuery: d.q, GetPendingCollectionsQuery: u.D, HasInvitesQuery: l._ }
      });
    },
    231609: (e, t, s) => {
      s.d(t, { Ti: () => r, cD: () => c, nu: () => i });
      var r,
        n = s(574354),
        a = s(125029),
        o = s(996168);
      !(function (e) {
        e.AcceptFailed = "AcceptFailed";
      })(r || (r = {}));
      class i extends (0, o.Hu)(r.AcceptFailed, "Failed to accept collection") {}
      class c extends (0, n.g)({ scope: a.F.User }) {}
    },
    68096: (e, t, s) => {
      s.d(t, { R$: () => i, UC: () => c, eT: () => r });
      var r,
        n = s(574354),
        a = s(125029),
        o = s(996168);
      !(function (e) {
        e.RefuseFailed = "RefuseFailed";
      })(r || (r = {}));
      class i extends (0, o.Hu)(r.RefuseFailed, "Failed to refuse collection") {}
      class c extends (0, n.g)({ scope: a.F.User }) {}
    },
    455677: (e, t, s) => {
      s.d(t, {
        Ix: () => m,
        Ne: () => p,
        Te: () => l,
        Xj: () => d,
        bp: () => c,
        dI: () => r,
        fL: () => i,
        fr: () => v,
        gR: () => h,
        gm: () => g,
        hp: () => u
      });
      var r,
        n = s(574354),
        a = s(125029),
        o = s(996168);
      !(function (e) {
        (e.ItemGroupNotFound = "ItemGroupNotFound"),
          (e.AuthorHasInvalidStatus = "AuthorHasInvalidStatus"),
          (e.GroupHasInvalidStatus = "GroupHasInvalidStatus"),
          (e.UserIsNotInItemGroup = "UserIsNotInItemGroup"),
          (e.UserGroupIsNotInItemGroup = "UserGroupIsNotInItemGroup"),
          (e.InvalidItemGroupRevision = "InvalidItemGroupRevision"),
          (e.NotEnoughAdmins = "NotEnoughAdmins"),
          (e.UserIsNotInPendingStatus = "UserIsNotInPendingStatus");
      })(r || (r = {}));
      class i extends (0, o.Hu)(r.ItemGroupNotFound, "Item Group not found") {}
      class c extends (0, o.Hu)(r.AuthorHasInvalidStatus, "User is not in accepted/pending status (already refused or revoked)") {}
      class d extends (0, o.Hu)(r.GroupHasInvalidStatus, "UserGroup is not in accepted/pending status (already refused or revoked)") {}
      class u extends (0, o.Hu)(r.UserIsNotInItemGroup, "User is not part of item group") {}
      class l extends (0, o.Hu)(r.UserGroupIsNotInItemGroup, "User group is not part of item group") {}
      class p extends (0, o.Hu)(r.InvalidItemGroupRevision, "Item group revision is not valid") {}
      class m extends (0, o.Hu)(r.NotEnoughAdmins, "The operation would let the item group with no admin") {}
      class h extends (0, o.Hu)(r.UserIsNotInPendingStatus, 'User is not in "pending" status or not part of a group') {}
      function v(e) {
        switch (e) {
          case "AUTHOR_HAS_INVALID_STATUS":
            return new c();
          case "GROUP_HAS_INVALID_STATUS":
            return new d();
          case "USER_IS_NOT_IN_ITEM_GROUP":
            return new u();
          case "USER_GROUP_IS_NOT_IN_ITEM_GROUP":
            return new l();
          case "INVALID_ITEM_GROUP_REVISION":
            return new p();
          case "NOT_ENOUGH_ADMINS":
            return new m();
          case "USER_IS_NOT_IN_PENDING_STATUS":
            return new h();
          default:
            throw new Error("Unknown server error");
        }
      }
      class g extends (0, n.g)({ scope: a.F.User }) {}
    },
    584009: (e, t, s) => {
      s.d(t, {
        FO: () => p,
        Fo: () => f,
        Ix: () => c,
        K8: () => g,
        PZ: () => h,
        U1: () => d,
        Uf: () => u,
        Xp: () => l,
        cz: () => y,
        i6: () => i,
        kh: () => v,
        xC: () => r,
        xz: () => m
      });
      var r,
        n = s(574354),
        a = s(125029),
        o = s(996168);
      !(function (e) {
        (e.UserGroupNotFound = "UserGroupNotFound"),
          (e.InvalidTeamId = "InvalidTeamId"),
          (e.UserGroupIsNotFound = "UserGroupIsNotFound"),
          (e.InvalidItemGroupRevision = "InvalidItemGroupRevision"),
          (e.UserGroupUpdateConflict = "UserGroupUpdateConflict"),
          (e.InsufficientPrivileges = "InsufficientPrivileges"),
          (e.UserIsNotInUserGroup = "UserIsNotInUserGroup"),
          (e.UserIsNotInPendingStatus = "UserIsNotInPendingStatus"),
          (e.GroupHasInvalidStatus = "GroupHasInvalidStatus"),
          (e.AuthorHasInvalidStatus = "AuthorHasInvalidStatus");
      })(r || (r = {}));
      class i extends (0, o.Hu)(r.UserGroupNotFound, "User Group not found") {}
      class c extends (0, o.Hu)(r.InvalidTeamId, "Provided Team ID is not a number") {}
      class d extends (0, o.Hu)(r.UserGroupIsNotFound, "User group for provided ID does not exist") {}
      class u extends (0, o.Hu)(r.InvalidItemGroupRevision, "User group revision is not valid") {}
      class l extends (0, o.Hu)(r.UserGroupUpdateConflict, "Conflict between users attempting to update the same user group") {}
      class p extends (0, o.Hu)(r.InsufficientPrivileges, "The user does not have User Group permission to refuse the invitation") {}
      class m extends (0, o.Hu)(r.UserIsNotInUserGroup, "User is not part of a group") {}
      class h extends (0, o.Hu)(r.UserIsNotInPendingStatus, 'User is not in "pending" status or not part of a group') {}
      class v extends (0, o.Hu)(
        r.GroupHasInvalidStatus,
        'UserGroup is not in "accepted" or "pending" status (already refused or revoked)'
      ) {}
      class g extends (0, o.Hu)(r.AuthorHasInvalidStatus, "User is not in accepted/pending status (already refused or revoked)") {}
      function y(e) {
        switch (e) {
          case "INVALID_TEAM_ID":
            return new c();
          case "USER_GROUP_IS_NOT_FOUND":
            return new d();
          case "INVALID_USER_GROUP_REVISION":
            return new u();
          case "USER_GROUP_UPDATE_CONFLICT":
            return new l();
          case "INSUFFICIENT_PRIVILEGES":
            return new p();
          case "USER_IS_NOT_IN_USER_GROUP":
            return new m();
          case "USER_IS_NOT_IN_PENDING_STATUS":
            return new h();
          case "GROUP_HAS_INVALID_STATUS":
            return new v();
          case "AUTHOR_HAS_INVALID_STATUS":
            return new g();
          default:
            throw new Error("Unknown server error");
        }
      }
      class f extends (0, n.g)({ scope: a.F.User }) {}
    },
    179517: (e, t, s) => {
      s.d(t, { r: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    715179: (e, t, s) => {
      s.d(t, { q: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    236610: (e, t, s) => {
      s.d(t, { D: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    736469: (e, t, s) => {
      s.d(t, { _: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    348958: (e, t, s) => {
      s.d(t, { X: () => d });
      var r = s(486952),
        n = s(931485),
        a = s(954003),
        o = s(354326),
        i = s(620920),
        c = s(904975);
      const d = (0, r.Q)({
        name: "sharingItems",
        commands: {},
        events: {},
        queries: {
          getSharingTeamLogins: n.G,
          sharingEnabled: a.N,
          getItemGroupForItem: o.i,
          getSharingStatusForItem: i.S,
          getPermissionForItem: c.C
        }
      });
    },
    354326: (e, t, s) => {
      s.d(t, { i: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    904975: (e, t, s) => {
      s.d(t, { C: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    620920: (e, t, s) => {
      s.d(t, { S: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    931485: (e, t, s) => {
      s.d(t, { G: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    954003: (e, t, s) => {
      s.d(t, { N: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    277007: (e, t, s) => {
      s.d(t, { S: () => r });
      const r = (0, s(486952).Q)({ name: "enclaveSdkApi", commands: {}, events: {}, queries: {} });
    },
    818995: (e, t, s) => {
      s.d(t, { m: () => l });
      var r = s(486952),
        n = s(574354),
        a = s(125029);
      class o extends (0, n.g)({ scope: a.F.User }) {}
      class i extends (0, n.g)({ scope: a.F.User }) {}
      var c = s(999059);
      class d extends (0, c.k)({ scope: a.F.User }) {}
      class u extends (0, c.k)({ scope: a.F.User }) {}
      const l = (0, r.Q)({
        name: "scim",
        commands: { updateScimConfiguration: o, generateScimToken: i },
        events: {},
        queries: { scimConfiguration: d, scimEndpoint: u }
      });
    },
    460384: (e, t, s) => {
      s.d(t, { y: () => S });
      var r = s(486952),
        n = s(574354),
        a = s(125029);
      class o extends (0, n.g)({ scope: a.F.User }) {}
      class i extends (0, n.g)({ scope: a.F.User }) {}
      class c extends (0, n.g)({ scope: a.F.User }) {}
      class d extends (0, n.g)({ scope: a.F.User }) {}
      class u extends (0, n.g)({ scope: a.F.User }) {}
      class l extends (0, n.g)({ scope: a.F.User }) {}
      class p extends (0, n.g)({ scope: a.F.Device }) {}
      class m extends (0, n.g)({ scope: a.F.User }) {}
      class h extends (0, n.g)({ scope: a.F.User }) {}
      class v extends (0, n.g)({ scope: a.F.User }) {}
      class g extends (0, n.g)({ scope: a.F.User }) {}
      var y = s(999059);
      class f extends (0, y.k)({ scope: a.F.User }) {}
      const S = (0, r.Q)({
        name: "confidentialSSOApi",
        commands: {
          CheckDNSValidationCommand: o,
          ClearSettingsCommand: i,
          CreateTeamCommand: c,
          DeleteDomainCommand: d,
          EnableSsoCommand: u,
          InitSsoProvisioningCommand: l,
          LoginUserWithEnclaveSSOCommand: p,
          ProvisionDomainCommand: m,
          TestLoginUserWithEnclaveSSOCommand: h,
          UpdateMetadataCommand: v,
          ValidateMetadataCommand: g
        },
        events: {},
        queries: { SsoProvisioningQuery: f }
      });
    },
    533258: (e, t, s) => {
      s.d(t, { Q8: () => a, X5: () => n, s5: () => i });
      var r = s(807165);
      r.z.object({
        idpUuid: r.z.string().uuid(),
        certificates: r.z.array(r.z.string()),
        entrypoint: r.z.string(),
        creationDateUnix: r.z.number(),
        updateDateUnix: r.z.number()
      });
      const n = r.z.enum(["valid", "pending", "expired", "invalid"]),
        a = r.z.enum(["tokenNotFound", "invalidToken"]),
        o = r.z.object({
          status: n.nullable(),
          verificationToken: r.z.string(),
          lastCheckDateUnix: r.z.number(),
          pendingReason: a.nullable(),
          expiryDateUnix: r.z.number()
        }),
        i =
          (r.z.object({
            creationDateUnix: r.z.number(),
            dnsCheckStatus: o,
            domainName: r.z.string(),
            idpUuid: r.z.ostring(),
            updateDateUnix: r.z.number()
          }),
          r.z.enum([
            "NitroComplete",
            "NitroIncomplete",
            "SelfHostedComplete",
            "SelfHostedIncomplete",
            "SsoConnectorIncomplete",
            "SsoConnectorComplete",
            "SsoConnectorToSelfHostedMigration",
            "None",
            "Unknown"
          ])),
        c = r.z.object({
          subdomainValue: r.z.string().nullable(),
          txtValue: r.z.string().nullable(),
          verificationStatus: n.nullable(),
          tokenFound: r.z.string().nullable(),
          pendingReason: a.nullable()
        }),
        d = r.z.array(r.z.object({ domainName: r.z.string().url(), verificationStatus: n, idpUuid: r.z.string().optional().nullable() }));
      r.z.object({
        global: r.z.object({
          adminProvisioningKey: r.z.string().nullable(),
          isTeamProvisionedInNitro: r.z.boolean().nullable(),
          inferredSsoState: i,
          teamUuid: r.z.string().nullable(),
          ssoCapable: r.z.boolean().nullable()
        }),
        idpApplication: r.z.object({
          entityId: r.z.string().nullable(),
          acsUrl: r.z.string().nullable(),
          signOnUrl: r.z.string().nullable()
        }),
        idpMetadata: r.z.object({ metadataValue: r.z.string().nullable(), idpUuid: r.z.string().nullable() }),
        domainSetup: d,
        domainVerificationInfo: r.z.record(r.z.string().url(), c),
        enableSSO: r.z.object({ ssoEnabled: r.z.boolean().nullable() })
      });
    },
    816189: (e, t, s) => {
      s.d(t, { r: () => d });
      var r = s(486952),
        n = s(574354),
        a = s(125029);
      class o extends (0, n.g)({ scope: a.F.Device }) {}
      var i = s(999059);
      class c extends (0, i.k)({ scope: a.F.Device }) {}
      const d = (0, r.Q)({ name: "sync", commands: { SyncCommand: o }, queries: { SyncProgressQuery: c }, events: {} });
    },
    676183: (e, t, s) => {
      var r;
      s.d(t, { L: () => r }),
        (function (e) {
          (e.READY = "ready"), (e.IN_PROGRESS = "in_progress"), (e.SUCCESS = "success"), (e.FAILURE = "failure");
        })(r || (r = {}));
    },
    375062: (e, t, s) => {
      s.d(t, { t: () => v });
      var r = s(486952),
        n = s(574354),
        a = s(125029);
      class o extends (0, n.g)({ scope: a.F.User }) {}
      class i extends (0, n.g)({ scope: a.F.User }) {}
      class c extends (0, n.g)({ scope: a.F.User }) {}
      class d extends (0, n.g)({ scope: a.F.User }) {}
      var u = s(999059);
      class l extends (0, u.k)() {}
      class p extends (0, u.k)() {}
      class m extends (0, u.k)() {}
      class h extends (0, u.k)() {}
      const v = (0, r.Q)({
        name: "teamAdminNotifications",
        commands: {
          markB2BPlanDiscontinuedSeen: o,
          markNewRestrictSharingPolicySeen: i,
          markNotificationTrialExtendedSeen: c,
          markOfferToExtendFreeTrialSeen: d
        },
        events: {},
        queries: {
          hasSeenB2BPlanDiscontinued: l,
          hasSeenNewRestrictSharingPolicy: p,
          hasSeenNotificationTrialExtended: m,
          hasSeenOfferToExtendFreeTrial: h
        }
      });
    },
    57904: (e, t, s) => {
      s.d(t, { h: () => y });
      var r = s(486952),
        n = s(999059);
      class a extends (0, n.k)() {}
      class o extends (0, n.k)() {}
      class i extends (0, n.k)() {}
      var c = s(125029),
        d = s(996168);
      class u extends (0, d.Hu)("UserNotLogged", "Please log the user") {}
      class l extends (0, n.k)({ scope: c.F.User, noUserError: new u() }) {}
      class p extends (0, n.k)() {}
      var m = s(574354);
      class h extends (0, m.g)({ scope: c.F.User }) {}
      class v extends (0, m.g)({ scope: c.F.User }) {}
      class g extends (0, m.g)({ scope: c.F.User }) {}
      const y = (0, r.Q)({
        name: "teamGetStarted",
        commands: { markVaultAsVisited: h, markGetStartedAsSeen: v, markNotificationAsSeen: g },
        events: {},
        queries: { hasVisitedVault: a, hasSeenGetStarted: o, hasSeenNotification: i, isTeamCreator: l, teamTasksCompletion: p }
      });
    },
    351055: (e, t, s) => {
      s.d(t, { L: () => g });
      var r,
        n = s(486952),
        a = s(574354),
        o = s(125029),
        i = s(996168);
      !(function (e) {
        (e.InvalidOrigin = "InvalidOrigin"),
          (e.NoFreeSlot = "NoFreeSlot"),
          (e.NoFreeSlotFreePlan = "NoFreeSlotFreePlan"),
          (e.UserTeamInviteTokenNotFound = "UserTeamInviteTokenNotFound"),
          (e.PaymentFailed = "PaymentFailed"),
          (e.NotBillingAdmin = "NotBillingAdmin"),
          (e.CannotAddSeatDuringGracePeriod = "CannotAddSeatDuringGracePeriod");
      })(r || (r = {}));
      class c extends (0, i.Hu)(r.InvalidOrigin, "Invalid origin") {}
      class d extends (0, i.Hu)(r.NoFreeSlot, "No free slot") {}
      class u extends (0, i.Hu)(r.NoFreeSlotFreePlan, "No free slot in free plan") {}
      class l extends (0, i.Hu)(r.UserTeamInviteTokenNotFound, "No invite token to a team available for user") {}
      class p extends (0, i.Hu)(r.PaymentFailed, "Payment failed") {}
      class m extends (0, i.Hu)(r.NotBillingAdmin, "User is not the billing admin") {}
      class h extends (0, i.Hu)(r.CannotAddSeatDuringGracePeriod, "Seats cannot be added during grace period") {}
      class v extends (0, a.g)({ scope: o.F.User }) {}
      const g = (0, n.Q)({ name: "teamMembers", commands: { ProposeMembersCommand: v }, events: {}, queries: {} });
    },
    481030: (e, t, s) => {
      s.d(t, { B: () => i });
      var r = s(486952),
        n = s(999059),
        a = s(125029);
      class o extends (0, n.k)({ scope: a.F.User }) {}
      const i = (0, r.Q)({ name: "teamPasswordHealth", commands: {}, events: {}, queries: { getReport: o } });
    },
    551453: (e, t, s) => {
      s.d(t, { o: () => C });
      var r = s(486952),
        n = s(574354),
        a = s(125029);
      class o extends (0, n.g)({ scope: a.F.User }) {}
      class i extends (0, n.g)({ scope: a.F.User }) {}
      class c extends (0, n.g)({ scope: a.F.User }) {}
      var d = s(999059);
      class u extends (0, d.k)({ scope: a.F.User }) {}
      class l extends (0, d.k)({ scope: a.F.User }) {}
      class p extends (0, d.k)({ scope: a.F.User }) {}
      class m extends (0, d.k)({ scope: a.F.User }) {}
      class h extends (0, d.k)({ scope: a.F.User }) {}
      class v extends (0, d.k)({ scope: a.F.User }) {}
      class g extends (0, d.k)({ scope: a.F.User }) {}
      class y extends (0, d.k)({ scope: a.F.User }) {}
      class f extends (0, d.k)({ scope: a.F.User }) {}
      class S extends (0, d.k)({ scope: a.F.User }) {}
      class b extends (0, d.k)({ scope: a.F.User }) {}
      const C = (0, r.Q)({
        name: "teamPlanDetails",
        commands: { extendFreeTrial: o, requestTeamPlanCancellation: i, editTeamPolicies: c },
        events: {},
        queries: {
          getTeamBillingInformation: u,
          getTeamCancellationStatus: l,
          getTeamCapabilities: p,
          getTeamCreationDateUnixQuery: m,
          getTeamId: h,
          getTeamName: v,
          getTeamRoles: g,
          getTeamPolicies: y,
          getTeamSeats: f,
          getTeamSecurityScore: S,
          getTeamTrialStatus: b
        }
      });
    },
    581598: (e, t, s) => {
      s.d(t, { Uz: () => o, lD: () => r, ud: () => d });
      var r,
        n,
        a,
        o,
        i,
        c = s(807165);
      !(function (e) {
        (e.Legacy = "legacy"), (e.Starter = "starter"), (e.Team = "team"), (e.Business = "business"), (e.Enterprise = "entreprise");
      })(r || (r = {})),
        (function (e) {
          (e.ProcessOut = "processout"), (e.Invoice = "invoice");
        })(n || (n = {})),
        (function (e) {
          (e.USD = "usd"), (e.EUR = "eur");
        })(a || (a = {})),
        (function (e) {
          (e.Pending = "pending"), (e.Canceled = "canceled"), (e.None = "none");
        })(o || (o = {})),
        (function (e) {
          (e.NoInternalUsage = "no_internal_usage"),
            (e.NoNeedForPasswordManager = "no_need_for_password_manager"),
            (e.ChoseOtherPasswordManager = "chose_other_password_manager"),
            (e.MissingCriticalFeatures = "missing_critical_features"),
            (e.TechnicalIssues = "technical_issues"),
            (e.TooExpensive = "too_expensive"),
            (e.Other = "other");
        })(i || (i = {}));
      const d = (e) => "string" == typeof e && Object.values(i).includes(e);
      var u;
      !(function (e) {
        (e.InTeam = "in_team"),
          (e.NotPremium = "not_premium"),
          (e.NoPayment = "no_payment"),
          (e.IsUnpaidFamilyMember = "is_unpaid_family_member"),
          (e.DefaultSettings = "default_settings"),
          (e.NoVPNCapability = "no_vpn_capability"),
          (e.DisabledForFreeUser = "disabled_for_free_user");
      })(u || (u = {})),
        c.z.object({
          allowPersistenceForMasterPassword: c.z.boolean(),
          allowSharing: c.z.boolean(),
          sharingRestrictedToTeam: c.z.boolean(),
          enforce2FA: c.z.boolean(),
          cryptoForcedPayload: c.z.string(),
          disableAutoLoginDomains: c.z.array(c.z.string()),
          enableForcedDomains: c.z.boolean(),
          enablePersonalSpace: c.z.boolean(),
          enableRemoveForcedContent: c.z.boolean(),
          enableVPN: c.z.boolean(),
          forceAutomaticLogout: c.z.number(),
          lockOnExit: c.z.boolean(),
          vaultExportEnabled: c.z.boolean(),
          collectSensitiveDataAuditLogsEnabled: c.z.boolean(),
          ssoEnabled: c.z.boolean(),
          ssoProvisioning: c.z.boolean(),
          teamDomain: c.z.array(c.z.string()),
          restrictSharingToTeam: c.z.boolean()
        });
    },
    925930: (e, t, s) => {
      s.d(t, { a: () => C });
      var r,
        n,
        a,
        o = s(486952),
        i = s(574354),
        c = s(125029),
        d = s(996168);
      !(function (e) {
        (e.TeamNotFound = "TeamNotFound"), (e.NotBillingAdmin = "NotBillingAdmin");
      })(r || (r = {}));
      class u extends (0, d.Hu)(r.TeamNotFound, "The given user is not part of a single team") {}
      class l extends (0, d.Hu)(r.NotBillingAdmin, "The user is not Billing Admin") {}
      class p extends (0, i.g)({ scope: c.F.User }) {}
      !(function (e) {
        (e.TeamNotFound = "TeamNotFound"), (e.VatNumberNotFound = "VatNumberNotFound"), (e.NotBillingAdmin = "NotBillingAdmin");
      })(n || (n = {}));
      class m extends (0, d.Hu)(n.TeamNotFound, "The given user is not part of a single team") {}
      class h extends (0, d.Hu)(n.VatNumberNotFound, "The given Team does not have a VAT number") {}
      class v extends (0, d.Hu)(n.NotBillingAdmin, "The user is not Billing Admin") {}
      class g extends (0, i.g)({ scope: c.F.User }) {}
      !(function (e) {
        (e.TeamNotFound = "TeamNotFound"), (e.NotBillingAdmin = "NotBillingAdmin"), (e.VatNumberNotUpserted = "VatNumberNotUpserted");
      })(a || (a = {}));
      class y extends (0, d.Hu)(a.TeamNotFound, "The given user is not part of a single team") {}
      class f extends (0, d.Hu)(a.NotBillingAdmin, "The user is not Billing Admin") {}
      class S extends (0, d.Hu)(a.VatNumberNotUpserted, "The VAT number couldn't be upserted") {}
      class b extends (0, i.g)({ scope: c.F.User }) {}
      const C = (0, o.Q)({
        name: "teamVat",
        commands: { DeleteTeamVatCommand: p, GetTeamVatCommand: g, UpsertTeamVatCommand: b },
        events: {},
        queries: {}
      });
    },
    183769: (e, t, s) => {
      s.r(t),
        s.d(t, {
          CanUserAddNewPasswordQuery: () => z.K,
          CollectionsQuery: () => q.I,
          Country: () => b.c,
          CreateCollectionCommand: () => L.e,
          CreateVaultItemCommand: () => i._,
          CreatedEvent: () => p.J,
          DeleteCollectionCommand: () => O.T,
          DeleteVaultItemsCommand: () => c.c,
          DeletedEvent: () => m.s,
          DomainIconDetailsMapSchema: () => A,
          DomainIconDetailsQuery: () => v.s,
          DomainIconDetailsSchema: () => E,
          EmailType: () => U,
          EmitTemporaryVaultItemEventCommand: () => l.c,
          EventType: () => l.t,
          FilterOperators: () => o,
          GetPasswordLimitStatusQuery: () => W.r,
          GetVaultNotificationsStatusQuery: () => k.M,
          IdentityTitle: () => T.t,
          MigrateCategoriesCommand: () => B._,
          NoteColors: () => F.L,
          OperationType: () => G.C,
          PaymentCardColorType: () => I.X,
          PhoneType: () => N.z,
          SecureNoteCategoryQuery: () => g.F,
          SecureNoteSchema: () => F._,
          SetVaultNotificationsStatusCommand: () => P.x,
          SortDirection: () => y.S,
          TempCredentialPreferencesQuery: () => f.M,
          TempCredentialPreferencesUpdateCommand: () => u.m,
          UpdateCollectionCommand: () => G.s,
          UpdateVaultItemCommand: () => d.K,
          UpdatedEvent: () => h.V,
          VaultItemType: () => x.U,
          VaultItemTypeToResultDictionary: () => R.N,
          VaultItemsCrudClient: () => a,
          VaultItemsQuery: () => S.W,
          VaultOrganizationClient: () => V,
          VaultSearchQuery: () => j.W,
          passwordLimitApi: () => K.Z,
          vaultItemsCrudApi: () => r.L,
          vaultNotificationsApi: () => D.e,
          vaultOrganizationApi: () => M.v,
          vaultSearchApi: () => H.R
        });
      var r = s(448430),
        n = s(767837);
      class a extends (0, n.E)(r.L) {}
      (0, n.K)(r.L, a);
      var o,
        i = s(900273),
        c = s(131154),
        d = s(754547),
        u = s(455441),
        l = s(247412),
        p = s(3137),
        m = s(949135),
        h = s(972989),
        v = s(155713);
      !(function (e) {
        (e.Equal = "equal"), (e.LessThan = "lessThan"), (e.GreaterThan = "greaterThan");
      })(o || (o = {}));
      var g = s(383984),
        y = s(224652),
        f = s(411907),
        S = s(496342),
        b = s(575257),
        C = s(807165);
      const w = [
          "crawled",
          "xs",
          "sm",
          "sm@2x",
          "md",
          "md.tiff",
          "xmd",
          "xmd@2x",
          "l",
          "l@2x",
          "xl",
          "xl@2x",
          "46x30",
          "46x30@2x",
          "50x33",
          "50x33@2x",
          "56x56",
          "56x56@2x",
          "118x98",
          "118x98@2x",
          "160x106",
          "160x106@2x"
        ],
        _ = (C.z.enum(w), w.reduce((e, t) => e.setKey(t, C.z.string().optional().nullable()), C.z.object({}))),
        E = C.z.object({ backgroundColor: C.z.string(), mainColor: C.z.string(), urls: _ }),
        A = C.z.map(C.z.string(), E);
      var U,
        I = s(945146);
      !(function (e) {
        (e.Perso = "PERSO"), (e.Pro = "PRO"), (e.NoType = "NO_TYPE");
      })(U || (U = {}));
      var T = s(511329),
        N = s(882009),
        F = s(207149),
        x = s(382706),
        R = s(964035),
        D = s(722499),
        P = s(412338),
        k = s(319892),
        M = s(299074),
        O = s(825041),
        L = s(533),
        G = s(96862),
        B = s(65378),
        q = s(506519);
      class V extends (0, n.E)(M.v) {}
      (0, n.K)(M.v, V);
      var H = s(573883),
        j = s(488994),
        K = s(252484),
        z = s(663197),
        W = s(458684);
    },
    252484: (e, t, s) => {
      s.d(t, { Z: () => o });
      var r = s(486952),
        n = s(663197),
        a = s(458684);
      const o = (0, r.Q)({
        name: "passwordLimit",
        commands: {},
        events: {},
        queries: { canUserAddNewPassword: n.K, getPasswordLimitStatus: a.r }
      });
    },
    663197: (e, t, s) => {
      s.d(t, { K: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    458684: (e, t, s) => {
      s.d(t, { r: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    448430: (e, t, s) => {
      s.d(t, { L: () => g });
      var r = s(486952),
        n = s(900273),
        a = s(131154),
        o = s(754547),
        i = s(455441),
        c = s(247412),
        d = s(3137),
        u = s(949135),
        l = s(972989),
        p = s(155713),
        m = s(496342),
        h = s(383984),
        v = s(411907);
      const g = (0, r.Q)({
        name: "vaultItemsCrud",
        commands: {
          createVaultItem: n._,
          deleteVaultItems: a.c,
          updateVaultItem: o.K,
          tempCredentialPreferencesUpdate: i.m,
          emitTemporaryVaultItemEvent: c.c
        },
        events: { createdEvent: d.J, deletedEvent: u.s, updatedEvent: l.V },
        queries: { domainIconDetails: p.s, query: m.W, secureNoteCategory: h.F, tempCredentialPreferences: v.M }
      });
    },
    900273: (e, t, s) => {
      s.d(t, { _: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    131154: (e, t, s) => {
      s.d(t, { c: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    247412: (e, t, s) => {
      s.d(t, { c: () => o, t: () => r });
      var r,
        n = s(574354),
        a = s(125029);
      !(function (e) {
        (e.Deleted = "deleted"), (e.Updated = "updated"), (e.Created = "created");
      })(r || (r = {}));
      class o extends (0, n.g)({ scope: a.F.User }) {}
    },
    455441: (e, t, s) => {
      s.d(t, { m: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    754547: (e, t, s) => {
      s.d(t, { K: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    977649: (e, t, s) => {
      s.d(t, { D: () => a });
      var r = s(188885),
        n = s(125029);
      class a extends (0, r.d)({ scope: n.F.User }) {}
    },
    3137: (e, t, s) => {
      s.d(t, { J: () => n });
      var r = s(977649);
      class n extends r.D {}
    },
    949135: (e, t, s) => {
      s.d(t, { s: () => n });
      var r = s(977649);
      class n extends r.D {}
    },
    972989: (e, t, s) => {
      s.d(t, { V: () => n });
      var r = s(977649);
      class n extends r.D {}
    },
    155713: (e, t, s) => {
      s.d(t, { s: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    383984: (e, t, s) => {
      s.d(t, { F: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    224652: (e, t, s) => {
      var r;
      s.d(t, { S: () => r }),
        (function (e) {
          (e.Ascend = "ascend"), (e.Descend = "descend");
        })(r || (r = {}));
    },
    411907: (e, t, s) => {
      s.d(t, { M: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    496342: (e, t, s) => {
      s.d(t, { W: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    575257: (e, t, s) => {
      var r;
      s.d(t, { c: () => r }),
        (function (e) {
          (e.NO_TYPE = "NO_TYPE"),
            (e.UNIVERSAL = "UNIVERSAL"),
            (e.AD = "AD"),
            (e.AE = "AE"),
            (e.AF = "AF"),
            (e.AG = "AG"),
            (e.AI = "AI"),
            (e.AL = "AL"),
            (e.AM = "AM"),
            (e.AO = "AO"),
            (e.AQ = "AQ"),
            (e.AR = "AR"),
            (e.AS = "AS"),
            (e.AT = "AT"),
            (e.AU = "AU"),
            (e.AW = "AW"),
            (e.AX = "AX"),
            (e.AZ = "AZ"),
            (e.BA = "BA"),
            (e.BB = "BB"),
            (e.BD = "BD"),
            (e.BE = "BE"),
            (e.BF = "BF"),
            (e.BG = "BG"),
            (e.BH = "BH"),
            (e.BI = "BI"),
            (e.BJ = "BJ"),
            (e.BL = "BL"),
            (e.BM = "BM"),
            (e.BN = "BN"),
            (e.BO = "BO"),
            (e.BR = "BR"),
            (e.BS = "BS"),
            (e.BT = "BT"),
            (e.BV = "BV"),
            (e.BW = "BW"),
            (e.BY = "BY"),
            (e.BZ = "BZ"),
            (e.CA = "CA"),
            (e.CC = "CC"),
            (e.CD = "CD"),
            (e.CF = "CF"),
            (e.CG = "CG"),
            (e.CH = "CH"),
            (e.CI = "CI"),
            (e.CK = "CK"),
            (e.CL = "CL"),
            (e.CM = "CM"),
            (e.CN = "CN"),
            (e.CO = "CO"),
            (e.CR = "CR"),
            (e.CU = "CU"),
            (e.CV = "CV"),
            (e.CX = "CX"),
            (e.CY = "CY"),
            (e.CZ = "CZ"),
            (e.DE = "DE"),
            (e.DJ = "DJ"),
            (e.DK = "DK"),
            (e.DM = "DM"),
            (e.DO = "DO"),
            (e.DZ = "DZ"),
            (e.EC = "EC"),
            (e.EE = "EE"),
            (e.EG = "EG"),
            (e.EH = "EH"),
            (e.ER = "ER"),
            (e.ES = "ES"),
            (e.ET = "ET"),
            (e.FI = "FI"),
            (e.FJ = "FJ"),
            (e.FK = "FK"),
            (e.FM = "FM"),
            (e.FO = "FO"),
            (e.FR = "FR"),
            (e.GA = "GA"),
            (e.GB = "GB"),
            (e.GD = "GD"),
            (e.GE = "GE"),
            (e.GF = "GF"),
            (e.GG = "GG"),
            (e.GH = "GH"),
            (e.GI = "GI"),
            (e.GL = "GL"),
            (e.GM = "GM"),
            (e.GN = "GN"),
            (e.GP = "GP"),
            (e.GQ = "GQ"),
            (e.GR = "GR"),
            (e.GS = "GS"),
            (e.GT = "GT"),
            (e.GU = "GU"),
            (e.GW = "GW"),
            (e.GY = "GY"),
            (e.HK = "HK"),
            (e.HM = "HM"),
            (e.HN = "HN"),
            (e.HR = "HR"),
            (e.HT = "HT"),
            (e.HU = "HU"),
            (e.ID = "ID"),
            (e.IE = "IE"),
            (e.IL = "IL"),
            (e.IM = "IM"),
            (e.IN = "IN"),
            (e.IO = "IO"),
            (e.IQ = "IQ"),
            (e.IR = "IR"),
            (e.IS = "IS"),
            (e.IT = "IT"),
            (e.JE = "JE"),
            (e.JM = "JM"),
            (e.JO = "JO"),
            (e.JP = "JP"),
            (e.KE = "KE"),
            (e.KG = "KG"),
            (e.KH = "KH"),
            (e.KI = "KI"),
            (e.KM = "KM"),
            (e.KN = "KN"),
            (e.KP = "KP"),
            (e.KR = "KR"),
            (e.KW = "KW"),
            (e.KY = "KY"),
            (e.KZ = "KZ"),
            (e.LA = "LA"),
            (e.LB = "LB"),
            (e.LC = "LC"),
            (e.LI = "LI"),
            (e.LK = "LK"),
            (e.LR = "LR"),
            (e.LS = "LS"),
            (e.LT = "LT"),
            (e.LU = "LU"),
            (e.LV = "LV"),
            (e.LY = "LY"),
            (e.MA = "MA"),
            (e.MC = "MC"),
            (e.MD = "MD"),
            (e.ME = "ME"),
            (e.MF = "MF"),
            (e.MG = "MG"),
            (e.MH = "MH"),
            (e.MK = "MK"),
            (e.ML = "ML"),
            (e.MM = "MM"),
            (e.MN = "MN"),
            (e.MO = "MO"),
            (e.MP = "MP"),
            (e.MQ = "MQ"),
            (e.MR = "MR"),
            (e.MS = "MS"),
            (e.MT = "MT"),
            (e.MU = "MU"),
            (e.MV = "MV"),
            (e.MW = "MW"),
            (e.MX = "MX"),
            (e.MY = "MY"),
            (e.MZ = "MZ"),
            (e.NA = "NA"),
            (e.NC = "NC"),
            (e.NE = "NE"),
            (e.NF = "NF"),
            (e.NG = "NG"),
            (e.NI = "NI"),
            (e.NL = "NL"),
            (e.NO = "NO"),
            (e.NP = "NP"),
            (e.NR = "NR"),
            (e.NU = "NU"),
            (e.NZ = "NZ"),
            (e.OM = "OM"),
            (e.PA = "PA"),
            (e.PE = "PE"),
            (e.PF = "PF"),
            (e.PG = "PG"),
            (e.PH = "PH"),
            (e.PK = "PK"),
            (e.PL = "PL"),
            (e.PM = "PM"),
            (e.PN = "PN"),
            (e.PR = "PR"),
            (e.PS = "PS"),
            (e.PT = "PT"),
            (e.PW = "PW"),
            (e.PY = "PY"),
            (e.QA = "QA"),
            (e.RE = "RE"),
            (e.RO = "RO"),
            (e.RS = "RS"),
            (e.RU = "RU"),
            (e.RW = "RW"),
            (e.SA = "SA"),
            (e.SB = "SB"),
            (e.SC = "SC"),
            (e.SD = "SD"),
            (e.SE = "SE"),
            (e.SG = "SG"),
            (e.SH = "SH"),
            (e.SI = "SI"),
            (e.SJ = "SJ"),
            (e.SK = "SK"),
            (e.SL = "SL"),
            (e.SM = "SM"),
            (e.SN = "SN"),
            (e.SO = "SO"),
            (e.SR = "SR"),
            (e.ST = "ST"),
            (e.SV = "SV"),
            (e.SY = "SY"),
            (e.SZ = "SZ"),
            (e.TC = "TC"),
            (e.TD = "TD"),
            (e.TF = "TF"),
            (e.TG = "TG"),
            (e.TH = "TH"),
            (e.TJ = "TJ"),
            (e.TK = "TK"),
            (e.TL = "TL"),
            (e.TM = "TM"),
            (e.TN = "TN"),
            (e.TO = "TO"),
            (e.TR = "TR"),
            (e.TT = "TT"),
            (e.TV = "TV"),
            (e.TW = "TW"),
            (e.TZ = "TZ"),
            (e.UA = "UA"),
            (e.UG = "UG"),
            (e.UM = "UM"),
            (e.US = "US"),
            (e.UY = "UY"),
            (e.UZ = "UZ"),
            (e.VA = "VA"),
            (e.VC = "VC"),
            (e.VE = "VE"),
            (e.VG = "VG"),
            (e.VI = "VI"),
            (e.VN = "VN"),
            (e.VU = "VU"),
            (e.WF = "WF"),
            (e.WS = "WS"),
            (e.XK = "XK"),
            (e.YE = "YE"),
            (e.YT = "YT"),
            (e.ZA = "ZA"),
            (e.ZM = "ZM"),
            (e.ZW = "ZW");
        })(r || (r = {}));
    },
    945146: (e, t, s) => {
      var r;
      s.d(t, { X: () => r }),
        (function (e) {
          (e.Black = "BLACK"),
            (e.Blue1 = "BLUE1"),
            (e.Blue2 = "BLUE2"),
            (e.Gold = "GOLD"),
            (e.Green1 = "GREEN1"),
            (e.Green2 = "GREEN2"),
            (e.Orange = "ORANGE"),
            (e.Red = "RED"),
            (e.Silver = "SILVER"),
            (e.White = "WHITE");
        })(r || (r = {}));
    },
    511329: (e, t, s) => {
      var r;
      s.d(t, { t: () => r }),
        (function (e) {
          (e.Mr = "MR"), (e.Mrs = "MRS"), (e.Miss = "MISS"), (e.Ms = "MS"), (e.Mx = "MX"), (e.NoneOfThese = "NONEOFTHESE");
        })(r || (r = {}));
    },
    882009: (e, t, s) => {
      var r;
      s.d(t, { z: () => r }),
        (function (e) {
          (e.Any = "ANY"),
            (e.Fax = "FAX"),
            (e.Landline = "LANDLINE"),
            (e.Mobile = "MOBILE"),
            (e.WorkFax = "WORKFAX"),
            (e.WorkLandline = "WORKLANDLINE"),
            (e.WorkMobile = "WORKMOBILE");
        })(r || (r = {}));
    },
    207149: (e, t, s) => {
      s.d(t, { L: () => r, _: () => a });
      var r,
        n = s(807165);
      !(function (e) {
        (e.BLUE = "BLUE"),
          (e.BROWN = "BROWN"),
          (e.GRAY = "GRAY"),
          (e.GREEN = "GREEN"),
          (e.ORANGE = "ORANGE"),
          (e.PINK = "PINK"),
          (e.PURPLE = "PURPLE"),
          (e.RED = "RED"),
          (e.YELLOW = "YELLOW");
      })(r || (r = {}));
      const a = n.z.object({
        color: n.z.string(),
        isSecured: n.z.boolean(),
        title: n.z.string(),
        content: n.z.string(),
        categoryId: n.z.string()
      });
    },
    382706: (e, t, s) => {
      var r;
      s.d(t, { U: () => r }),
        (function (e) {
          (e.Address = "KWAddress"),
            (e.BankAccount = "KWBankStatement"),
            (e.Company = "KWCompany"),
            (e.Credential = "KWAuthentifiant"),
            (e.DriversLicense = "KWDriverLicence"),
            (e.Email = "KWEmail"),
            (e.FiscalId = "KWFiscalStatement"),
            (e.IdCard = "KWIDCard"),
            (e.Identity = "KWIdentity"),
            (e.Passkey = "KWPasskey"),
            (e.Passport = "KWPassport"),
            (e.PaymentCard = "KWPaymentMean_creditCard"),
            (e.Phone = "KWPhone"),
            (e.Secret = "KWSecret"),
            (e.SecureNote = "KWSecureNote"),
            (e.SocialSecurityId = "KWSocialSecurityStatement"),
            (e.Website = "KWPersonalWebsite");
        })(r || (r = {}));
    },
    964035: (e, t, s) => {
      s.d(t, { N: () => n });
      var r = s(382706);
      const n = {
        [r.U.Address]: "addressesResult",
        [r.U.BankAccount]: "bankAccountsResult",
        [r.U.Company]: "companiesResult",
        [r.U.Credential]: "credentialsResult",
        [r.U.DriversLicense]: "driversLicensesResult",
        [r.U.Email]: "emailsResult",
        [r.U.FiscalId]: "fiscalIdsResult",
        [r.U.IdCard]: "idCardsResult",
        [r.U.Identity]: "identitiesResult",
        [r.U.Passkey]: "passkeysResult",
        [r.U.Passport]: "passportsResult",
        [r.U.PaymentCard]: "paymentCardsResult",
        [r.U.Phone]: "phonesResult",
        [r.U.Secret]: "secretsResult",
        [r.U.SecureNote]: "secureNotesResult",
        [r.U.SocialSecurityId]: "socialSecurityIdsResult",
        [r.U.Website]: "websitesResult"
      };
    },
    722499: (e, t, s) => {
      s.d(t, { e: () => o });
      var r = s(486952),
        n = s(412338),
        a = s(319892);
      const o = (0, r.Q)({
        name: "vaultNotifications",
        commands: { setVaultNotificationsStatus: n.x },
        events: {},
        queries: { getVaultNotificationsStatus: a.M }
      });
    },
    412338: (e, t, s) => {
      s.d(t, { x: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    319892: (e, t, s) => {
      s.d(t, { M: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    299074: (e, t, s) => {
      s.d(t, { v: () => d });
      var r = s(486952),
        n = s(825041),
        a = s(533),
        o = s(65378),
        i = s(96862),
        c = s(506519);
      const d = (0, r.Q)({
        name: "vaultOrganization",
        commands: { deleteCollection: n.T, createCollection: a.e, migrateCategories: o._, updateCollection: i.s },
        events: {},
        queries: { queryCollections: c.I }
      });
    },
    533: (e, t, s) => {
      s.d(t, { e: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    825041: (e, t, s) => {
      s.d(t, { T: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    65378: (e, t, s) => {
      s.d(t, { _: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.User }) {}
    },
    96862: (e, t, s) => {
      s.d(t, { C: () => r, s: () => o });
      var r,
        n = s(574354),
        a = s(125029);
      !(function (e) {
        (e.SUBSTRACT_VAULT_ITEMS = "subtract_vault_items"), (e.APPEND_VAULT_ITEMS = "append_vault_items");
      })(r || (r = {}));
      class o extends (0, n.g)({ scope: a.F.User }) {}
    },
    506519: (e, t, s) => {
      s.d(t, { I: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    573883: (e, t, s) => {
      s.d(t, { R: () => a });
      var r = s(486952),
        n = s(488994);
      const a = (0, r.Q)({ name: "vaultSearch", commands: {}, events: {}, queries: { search: n.W } });
    },
    488994: (e, t, s) => {
      s.d(t, { W: () => a });
      var r = s(999059),
        n = s(125029);
      class a extends (0, r.k)({ scope: n.F.User }) {}
    },
    334512: (e, t, s) => {
      var r;
      s.d(t, { j: () => r }),
        (function (e) {
          (e.PasskeysInVaultDev = "vault_web_passkey_dev"), (e.PasskeysInVaultProd = "vault_web_passkey_prod");
        })(r || (r = {}));
    },
    896259: (e, t, s) => {
      s.d(t, { t: () => a, u: () => o });
      var r = s(208987),
        n = s(249329);
      const a = (e, t) =>
          (() => {
            const e = (t) => ({
              define: () => t,
              with: (s) => {
                const r = { api: s.module, main: s.on, queryOnly: s.queryOnly ?? [] },
                  n = { [s.module.name]: r };
                return e({ ...t, ...n });
              }
            });
            return e({});
          })()
            .with({ module: r.t$, on: e })
            .with({ module: n.e, on: e }),
        o = a("node", []);
    },
    442949: (e, t, s) => {
      s.d(t, { d: () => h });
      var r = s(386924),
        n = s(160399),
        a = s(530523),
        o = s(87065),
        i = s(317350),
        c = s(295087),
        d = s(828489);
      const u = (e) => "response" === e.type;
      var l = s(665488),
        p = s(921869);
      const m = () => (0, r.D)([]);
      class h {
        constructor(e) {
          this.config = e;
        }
        async sendCommand(e, t, s, r) {
          if (!this.broker) throw new Error("call connect() first");
          return await (0, n.z)(
            this.broker
              .sendMessage(`command-${e}`, { type: "command", module: e, commandName: String(t), command: s, context: r.toSerializable() })
              .pipe(
                (0, a.h)(u),
                (0, o.U)((e) => e.response)
              )
          );
        }
        sendQuery(e, t, s, r) {
          if (!this.broker) throw new Error("call connect() first");
          return this.broker
            .sendMessage(`query-${e}`, { type: "query", module: e, queryName: String(t), query: s, context: r.toSerializable() })
            .pipe(
              (0, a.h)(u),
              (0, o.U)((e) => e.response)
            );
        }
        connect(e) {
          const t = e
              ? (t, s, n) => {
                  switch (s.type) {
                    case "response":
                      return i.E;
                    case "command":
                      return (0, r.D)(
                        e.onCommand(s.module, s.commandName, s.command, p.f.fromSerializable(s.context), { isReminder: n.isReminder })
                      ).pipe((0, o.U)((e) => ({ type: "response", response: e })));
                    case "query":
                      return (0, r.D)(e.onQuery(s.module, s.queryName, s.query, p.f.fromSerializable(s.context))).pipe(
                        (0, o.U)((e) => ({ type: "response", response: e }))
                      );
                  }
                  (0, c.U)(s);
                }
              : m,
            s = ((e, t, s, r) =>
              Object.keys(e).reduce(
                (n, a) => {
                  const { commandMailbox: o, queryMailbox: i } = ((n) => {
                    const { main: a, queryOnly: o } = e[n],
                      i = { type: "local", onMessage: r };
                    if (a === t) return { commandMailbox: i, queryMailbox: i };
                    const c = { type: "remote", channel: s[a] };
                    return { commandMailbox: c, queryMailbox: t && o.includes(t) ? i : c };
                  })(a);
                  return (n[`command-${a}`] = o), (n[`query-${a}`] = i), n;
                },
                (0, d.Ay)({})
              ))(this.config.appDefinition, this.config.currentNode, this.config.channels, t);
          return (this.broker = new l.U(s)), this.broker.connect(Object.values(this.config.channels), this.config.channelsListener);
        }
      }
    },
    373880: (e, t, s) => {
      s.d(t, { X: () => o });
      var r = s(616855),
        n = s(442949),
        a = s(740945);
      function o({ appDefinition: e, channels: t, channelsListener: s }) {
        const o = new r.$({ appDefinition: e, channels: t, channelsListener: s, currentNode: null, subscriptions: {} }),
          i = new n.d(o),
          c = () => {
            throw new Error("Unexpected request received by detached application client");
          },
          d = i.connect({ onCommand: c, onQuery: c }).start();
        return { client: (0, a.R)(e, i), stop: async () => (await d).stop() };
      }
    },
    740945: (e, t, s) => {
      s.d(t, { R: () => o, c: () => a });
      var r = s(828489),
        n = s(921869);
      const a = (e, t, s, a) => ({
          commands: Object.keys(e[s].api.commands).reduce(
            (e, r) => (
              (e[r] = (e) => {
                const o = a ?? new n.f();
                return t.sendCommand(s, r, e, o);
              }),
              e
            ),
            (0, r.Ay)({})
          ),
          queries: Object.keys(e[s].api.queries).reduce(
            (e, r) => (
              (e[r] = (e) => {
                const o = a ?? new n.f();
                return t.sendQuery(s, r, e, o);
              }),
              e
            ),
            (0, r.Ay)({})
          )
        }),
        o = (e, t, s) => {
          const a = (a) =>
              Object.keys(e[a].api.commands).reduce(
                (e, r) => (
                  (e[r] = (e) => {
                    const o = s ?? new n.f();
                    return t.sendCommand(a, r, e, o);
                  }),
                  e
                ),
                (0, r.Ay)({})
              ),
            o = (a) =>
              Object.keys(e[a].api.queries).reduce(
                (e, r) => (
                  (e[r] = (e) => {
                    const o = s ?? new n.f();
                    return t.sendQuery(a, r, e, o);
                  }),
                  e
                ),
                (0, r.Ay)({})
              );
          return Object.keys(e)
            .map((e) => e)
            .reduce((e, t) => ((e[t] = { commands: a(t), queries: o(t) }), e), {});
        };
    },
    474887: (e, t, s) => {
      s.r(t),
        s.d(t, {
          AcknowledgedChannel: () => Us.N,
          AllowedToFail: () => xe,
          AppLifeCycle: () => F,
          AppLogger: () => x,
          AppTimers: () => W,
          BadStatus: () => Jt.R,
          BaseEventEmitter: () => xs,
          ChannelMessageBroker: () => A.U,
          ChannelState: () => As.D,
          CommandHandler: () => os,
          CommandRefresherFactory: () => Z,
          ContextLessCqrsClient: () => b,
          ContextlessBaseEventEmitter: () => Rs,
          CqrsBroker: () => u.d,
          CqrsClient: () => S,
          CqrsCommandRefresher: () => J,
          CronLowLevelSource: () => nt.R_,
          DefaultEncryptionCodecForDeviceData: () => ee,
          DefaultEncryptionCodecForUserData: () => te,
          EventHandler: () => Ns,
          ExceptionCriticality: () => me,
          ExceptionLogger: () => we,
          ExceptionLoggingSink: () => Se,
          FetchFailedError: () => Jt.a,
          FrameworkInit: () => v,
          FrameworkRequestContextValues: () => f.l,
          Global: () => m,
          HttpBackend: () => Kt,
          HttpClient: () => ss,
          HttpHeaders: () => zt.W,
          HttpModule: () => rs,
          HttpParams: () => Qt,
          HttpRequest: () => $t,
          HttpResponse: () => Yt.Z,
          HttpStatusCode: () => Xt.W,
          Injectable: () => h,
          JsonApplicationResourceFetcher: () => he.X,
          JsonApplicationResourceLoader: () => Xs,
          KeyValueStorageFactory: () => pe,
          KeyValueStorageInfrastructure: () => ue,
          ManualTriggeredTimers: () => Q,
          MemoryChannel: () => As.q,
          MemoryKeyValueStorageInfrastructure: () => st,
          MemoryStoreInfrastructureFactory: () => N.N,
          MockJsonApplicationResourceFetcher: () => he.W,
          Module: () => bt,
          NoDynamicChannels: () => tt.y,
          NodeConfiguration: () => g.$,
          NodeEventBroker: () => T,
          NodeModulesIntrospection: () => H,
          NodeToModuleEventBroker: () => Fs,
          NullCronTaskHandler: () => nt.ql,
          NullLogger: () => R,
          NullStorage: () => de,
          ParameterProviderType: () => rt,
          QueryHandler: () => Ts,
          RequestContext: () => f.f,
          RequestContextModule: () => Hs,
          SingleNodeAppBuilder: () => jt.u,
          Store: () => ps,
          StoreCapacity: () => vs,
          StoreFlusher: () => Pe,
          StoreInfrastructureFactory: () => N.G,
          TaskTrackingModule: () => Es,
          TimerBasedCronSource: () => nt._C,
          UncaughtErrorSource: () => Ce,
          createApplicationClient: () => ks.X,
          createClientFactory: () => Ps,
          createCqrsClient: () => y.c,
          createCqrsClients: () => y.R,
          createNullAllowedToFail: () => Re,
          createSingleChannelListener: () => tt.v,
          defineApplication: () => jt.t,
          defineBatchExecutor: () => $s,
          defineStore: () => hs,
          deviceScopedSingletonProvider: () => mt,
          getQueryValue: () => Os,
          getStoresProviders: () => yt,
          isExceptionLogEntry: () => fe,
          isSendMessageRequest: () => Is.F,
          isVersionedData: () => ce,
          mockStore: () => Ks,
          provideClass: () => wt,
          provideValue: () => Ct,
          refresherCreationToken: () => X,
          scopedSingleton: () => vt,
          sendMessageRequest: () => Is.k,
          startApplicationNode: () => Vt,
          startSingleApplicationNode: () => Ht,
          useEventsOfModule: () => ft,
          userScopedSingletonProvider: () => ht
        });
      const r = (e) => e;
      class n {
        constructor() {
          (this.encode = r), (this.decode = r);
        }
      }
      var a = s(530523),
        o = s(160399),
        i = s(670695),
        c = s(828489),
        d = s(773201),
        u = s(442949),
        l = s(488802),
        p = s(632875);
      function m() {
        return (0, p.Global)();
      }
      function h(e) {
        return (0, p.Injectable)({ scope: e?.neverReuseInstance ? p.Scope.TRANSIENT : p.Scope.DEFAULT });
      }
      const v = () => h();
      var g = s(616855),
        y = s(740945),
        f = s(921869);
      let S = class {
        constructor(e, t, s) {
          (this.broker = e), (this.configuration = t), (this.context = s);
        }
        getClient(e) {
          return (0, y.c)(this.configuration.appDefinition, this.broker, e.name, this.context);
        }
      };
      S = (0, l.__decorate)([h(), (0, l.__metadata)("design:paramtypes", [u.d, g.$, f.f])], S);
      let b = class {
        constructor(e, t) {
          (this.configuration = e), (this.broker = t);
        }
        getClient(e) {
          return (0, y.c)(this.configuration.appDefinition, this.broker, e.name);
        }
      };
      b = (0, l.__decorate)([h(), (0, l.__metadata)("design:paramtypes", [g.$, u.d])], b);
      var C = s(386924),
        w = s(87065),
        _ = s(317350),
        E = s(69885),
        A = s(665488);
      const U = { type: "ask" },
        I = { type: "eventResponse" };
      let T = class {
        constructor(e) {
          (this.regenerateReverseSubscriptionMap = () => {
            const { configuration: e, subscriberToEvent: t } = this,
              s = e.getModuleNames().reduce((e, t) => ({ ...e, [t]: new Map() }), {});
            return e.getNodeList().reduce((e, s) => {
              const r = t[s];
              return (
                Object.entries(r).forEach(([t, r]) => {
                  const n = e[t];
                  r.forEach((e) => {
                    const t = [...(n.get(e) ?? []), s];
                    n.set(e, t);
                  });
                }),
                e
              );
            }, s);
          }),
            (this.configuration = e);
          const t = Object.entries(e.appDefinition).reduce((e, [t, s]) => ((e[t] = Object.keys(s.api.events)), e), {});
          (this.subscriberToEvent = this.configuration.getNodeList().reduce((e, s) => ((e[s] = { ...t }), e), {})),
            (this.eventToSubscriber = this.regenerateReverseSubscriptionMap());
        }
        async publishEvent(e, t, s, r) {
          const { broker: n, eventToSubscriber: a } = this;
          if (!n) throw new Error("Not started");
          const o = (a[e].get(t) ?? []).map((n) => ({
            type: "event",
            context: r.toSerializable(),
            event: s,
            eventName: t,
            moduleSource: e,
            nodeDestination: n
          }));
          await Promise.all(
            o.map(async (e) => {
              await n.trySendMessage(`event-${e.nodeDestination}`, e);
            })
          );
        }
        connect(e) {
          const { configuration: t } = this,
            s = Object.keys(t.subscriptions).reduce((e, s) => ({ ...e, ...t.subscriptions[s] }), (0, c.Ay)({})),
            r = { type: "subscriptions", nodeName: t.currentNode, subscribesTo: s },
            n = ((e, t) =>
              e
                .getNodeList()
                .reduce(
                  (s, r) => (
                    r === e.currentNode
                      ? (s[`event-${r}`] = { type: "local", onMessage: t })
                      : (s[`event-${r}`] = { type: "remote", channel: e.channels[r] }),
                    s
                  ),
                  (0, c.Ay)({})
                ))(this.configuration, (t, s, n) => {
              switch (s.type) {
                case "event":
                  return (0, C.D)(
                    e.onLocalEvent(s.moduleSource, s.nodeDestination, s.eventName, s.event, f.f.fromSerializable(s.context), n)
                  ).pipe((0, w.U)(() => I));
                case "eventResponse":
                  return _.E;
                case "subscriptions":
                  return (
                    (this.subscriberToEvent[s.nodeName] = s.subscribesTo),
                    (this.eventToSubscriber = this.regenerateReverseSubscriptionMap()),
                    (0, E.of)(I)
                  );
                case "ask":
                  return (0, E.of)(r);
              }
            }),
            a = new A.U(n);
          return (
            t.getNodeList().map(async (e) => {
              await a.trySendMessage(`event-${e}`, r), await a.trySendMessage(`event-${e}`, U);
            }),
            (this.broker = a),
            a.connect(Object.values(t.channels), t.channelsListener)
          );
        }
      };
      T = (0, l.__decorate)([h(), (0, l.__metadata)("design:paramtypes", [g.$])], T);
      var N = s(383081);
      class F {
        constructor() {
          (this.shutdownHooks = []), (this.externalComponentReadyConditions = []), (this.appReadyHooks = []);
        }
        addExternalComponentReadyCondition(e) {
          this.externalComponentReadyConditions.push(e);
        }
        addAppReadyHook(e) {
          this.appReadyHooks.push(e);
        }
        addShutdownHook(e) {
          this.shutdownHooks.push(e);
        }
        removeShutdownHook(e) {
          const t = this.shutdownHooks.indexOf(e);
          t >= 0 && this.shutdownHooks.splice(t, 1);
        }
        startup() {
          const e = this.waitAndTriggerAppReady();
          if (!this.externalComponentReadyConditions.length) return e;
          this.addShutdownHook(async () => await e);
        }
        async shutDown() {
          for (; this.shutdownHooks.length > 0; ) {
            const e = this.shutdownHooks.pop();
            e && (await e());
          }
        }
        async waitAndTriggerAppReady() {
          await Promise.all(this.externalComponentReadyConditions.map((e) => e())), await this.executeStartupHooks(this.appReadyHooks);
        }
        async executeStartupHooks(e) {
          for (; e.length > 0; ) {
            const t = e.shift();
            if (t) {
              const e = await t();
              e && this.addShutdownHook(e);
            }
          }
        }
      }
      class x {}
      class R extends x {
        log() {}
        error() {}
        warn() {}
        trace() {}
      }
      var D,
        P = s(805373);
      !(function (e) {
        (e.Command = "command"), (e.Query = "query"), (e.Event = "event"), (e.Init = "init"), (e.Cron = "cron");
      })(D || (D = {}));
      const k = { body: void 0, context: new f.f(), module: "module", name: "command", type: D.Command },
        M = { name: "api", commands: {}, events: {}, queries: {} };
      var O = s(125029),
        L = s(295087),
        G = s(287279),
        B = s(208987);
      async function q(e) {
        const t = await (0, o.z)(e.getClient(B.t$).queries.activeUser());
        if ((0, G.d6)(t) && t.data.userName) return t.data.userName;
      }
      const V = { commands: {}, events: {}, queries: {} };
      class H {
        constructor(e, t) {
          (this.supportedEventHandlers = e), (this.modules = t);
        }
      }
      let j = class {
        constructor(e, t, s) {
          (this.introspection = e), (this.moduleRef = t), (this.clients = s);
        }
        async execute(e) {
          const t = i.ContextIdFactory.getByRequest(e),
            { type: s } = e,
            r = () => e.context.getOrAdd(f.l.UserName, async () => await q(this.clients));
          if (!(e.module in this.introspection.modules)) throw new Error("Unknown module " + e.module);
          const n = this.introspection.modules[e.module],
            a = n.api ?? M,
            o = n.handlers ?? V;
          switch (s) {
            case D.Query: {
              const { queries: s } = a;
              if (e.name in s) {
                const n = s[e.name],
                  a = new n(e.body),
                  i = o.queries[e.name];
                return (
                  n.metadata.scope === O.F.User && (await r()),
                  { result: (await this.moduleRef.resolve(i, t, { strict: !1 })).execute(a, { name: e.name }) }
                );
              }
              throw new Error("Unknown query " + e.name);
            }
            case D.Command: {
              const { commands: s } = a;
              if (e.name in s) {
                const n = s[e.name],
                  a = new n(e.body),
                  i = o.commands[e.name];
                n.metadata.scope === O.F.User && (await r());
                const c = await this.moduleRef.resolve(i, t, { strict: !1 });
                return { result: await c.execute(a, { name: e.name }) };
              }
              throw new Error("Unknown command " + e.name);
            }
            case D.Event: {
              const { events: s } = a;
              if (e.name in s) {
                const n = s[e.name],
                  a = new n(e.body),
                  o = Object.values(this.introspection.modules).flatMap((t) => (t.handlers ?? V).events[e.module]?.events[e.name]);
                n.metadata.scope === O.F.User && (await r());
                const i = await Promise.all(
                  o
                    .filter((e) => this.introspection.supportedEventHandlers.has(e))
                    .map(async (e) => await this.moduleRef.resolve(e, t, { strict: !1 }))
                );
                return void (await Promise.all(i.map((e) => e.handle(a))));
              }
              throw new Error("Unknown event " + e.name);
            }
            case D.Cron: {
              const s = (n.crons ?? []).find((t) => t.name === e.name);
              if (!s) throw new Error("unknown cron " + e.name);
              if (s.scope === O.F.User && !(await r())) return { result: !1 };
              const a = await this.moduleRef.resolve(s.handler, t, { strict: !1 });
              return a.isRunnable && !(await a.isRunnable()) ? { result: !1 } : (await a.run(), { result: !0 });
            }
          }
          (0, L.U)(s);
        }
      };
      (0, l.__decorate)(
        [
          (0, p.All)(),
          (0, l.__param)(0, (0, p.Req)()),
          (0, l.__metadata)("design:type", Function),
          (0, l.__metadata)("design:paramtypes", [Object]),
          (0, l.__metadata)("design:returntype", Promise)
        ],
        j.prototype,
        "execute",
        null
      ),
        (j = (0, l.__decorate)(
          [(0, p.Controller)({ scope: p.Scope.REQUEST, durable: !1 }), (0, l.__metadata)("design:paramtypes", [H, i.ModuleRef, b])],
          j
        ));
      var K = s(724966),
        z = s(227257);
      class W {
        async waitTimeout(e) {
          await (0, o.z)(this.createObservableTimer(e, e));
        }
      }
      class Q extends W {
        constructor() {
          super(...arguments),
            (this.subscribers$ = new K.X(new Set())),
            (this.time = 0),
            (this.pendingTimerCount$ = this.subscribers$.pipe((0, w.U)((e) => e.size)));
        }
        fireTimer(e = 1) {
          (this.time += e),
            [...this.subscribers$.value].forEach((e) => {
              e.next(this.time);
            });
        }
        async allSubscribersDisconnected() {
          await (0, o.z)(this.pendingTimerCount$.pipe((0, a.h)((e) => !e)));
        }
        createObservableTimer() {
          return new z.y(
            (e) => (
              this.subscribers$.next(new Set([...this.subscribers$.value, e])),
              () => {
                this.subscribers$.next(new Set([...this.subscribers$.value].filter((t) => t !== e)));
              }
            )
          );
        }
      }
      var $ = s(536414),
        Y = s(507074);
      function X(e) {
        return e;
      }
      class J {
        constructor(e, t, { args: s, commandName: r }) {
          const n = t.commands[r];
          this.refreshObservable$ = e.pipe(
            (0, $.z)(async () => {
              await n(s);
            }),
            (0, Y.B)({})
          );
        }
        withRefresh() {
          return (e) =>
            new z.y((t) => {
              const s = this.refreshObservable$.subscribe();
              return s.add(e.subscribe(t)), s;
            });
        }
      }
      let Z = class {
        constructor(e, t) {
          (this.timers = e), (this.cqrsClient = t), (this.map = new WeakMap());
        }
        getRefresher(e) {
          const t = this.map.get(e);
          return t || new J(this.timers.createObservableTimer(e.period, e.period), this.cqrsClient.getClient(e.api), e);
        }
      };
      Z = (0, l.__decorate)([h(), (0, l.__metadata)("design:paramtypes", [W, b])], Z);
      let ee = class {};
      ee = (0, l.__decorate)([(0, p.Injectable)()], ee);
      let te = class {};
      te = (0, l.__decorate)([(0, p.Injectable)()], te);
      var se = s(707502),
        re = s(810370);
      class ne {
        decode(e) {
          return (0, se.R)(e);
        }
        encode(e) {
          return (0, re.s)(e);
        }
      }
      var ae = s(89685),
        oe = s(354066);
      class ie {
        decode(e) {
          return JSON.parse((0, ae.v)(e));
        }
        encode(e) {
          return (0, oe.u)(JSON.stringify(e));
        }
      }
      function ce(e, t) {
        return null !== e && "object" == typeof e && "version" in e && "content" in e && t(e.content);
      }
      const de = { read: () => Promise.resolve(void 0), write: () => Promise.resolve(), clear: () => Promise.resolve() };
      class ue {}
      class le {
        constructor(e, t, s) {
          (this.storage = e), (this.baseKey = t), (this.initialValueFactory = s);
        }
        clear() {
          return this.storage.remove(this.baseKey);
        }
        async read() {
          const e = await this.storage.get(this.baseKey);
          return !e && this.initialValueFactory ? await this.initialValueFactory() : e;
        }
        async write(e) {
          await this.storage.set(this.baseKey, e);
        }
      }
      class pe {
        constructor(e) {
          this.storage = e;
        }
        createBackend(e, t, s, r) {
          const n = s ? `${e}.${t}.${s}` : `${e}.${t}`;
          return new le(this.storage, n, r);
        }
      }
      var me,
        he = s(475994),
        ve = s(489618),
        ge = s(537182),
        ye = s(970493);
      function fe(e) {
        return (
          !(!e || "object" != typeof e) &&
          "criticality" in e &&
          "timestamp" in e &&
          "message" in e &&
          "callStack" in e &&
          (e.criticality === me.CRITICAL || e.criticality === me.WARNING) &&
          "string" == typeof e.message &&
          "string" == typeof e.callStack
        );
      }
      !(function (e) {
        (e.WARNING = "warning"), (e.CRITICAL = "critical");
      })(me || (me = {}));
      class Se {}
      class be extends Se {
        logException() {
          return Promise.resolve();
        }
        start() {
          return Promise.resolve({ stop: () => Promise.resolve() });
        }
      }
      class Ce {
        constructor(e) {
          this.events$ = e;
        }
      }
      let we = class {
        constructor(e, t) {
          (this.sink = e), (this.logger = t);
        }
        captureException(e, t, s = me.CRITICAL) {
          try {
            const r = e instanceof Error ? e : new Error("Invalid exception type"),
              n = this.createExceptionLogEntry(t, r, s);
            return this.sink.logException(n);
          } catch (s) {
            this.logger.error("Failed to capture exception", s, e, t);
          }
          return Promise.resolve();
        }
        createExceptionLogEntry(e, t, s) {
          return {
            callStack: t.stack ?? "",
            criticality: s,
            featuresFlipped: this.mapFeatures(e.featureFlips ?? {}),
            fileLocation: e.fileLocation,
            lineNumber: e.lineNumber,
            message: t.message,
            moduleName: e.moduleName,
            origin: e.origin,
            timestamp: Date.now(),
            useCaseId: e.useCaseId,
            useCaseName: e.useCaseName,
            useCaseStacktrace: e.useCaseStacktrace
          };
        }
        mapFeatures(e) {
          return Object.keys(e).reduce((t, s) => (e[s] ? [s, ...t] : t), []);
        }
      };
      we = (0, l.__decorate)([(0, p.Injectable)(), (0, l.__metadata)("design:paramtypes", [Se, x])], we);
      var _e = s(925313),
        Ee = s(767837);
      class Ae extends (0, Ee.E)(B.t$) {}
      (0, Ee.K)(B.t$, Ae);
      const Ue = "USE_CASE_STACKTRACE";
      let Ie = class {
        constructor(e) {
          this.requestContext = e;
        }
        isInitialUseCase() {
          return (this.requestContext.get(Ue) ?? []).length <= 1;
        }
        read() {
          return this.requestContext.getOrAddSync(Ue, () => []) ?? [];
        }
        append(e) {
          const { requestContext: t } = this,
            s = t.get(Ue) ?? [];
          t.set(Ue, [...s, e]);
        }
      };
      Ie = (0, l.__decorate)([(0, p.Injectable)(), (0, l.__metadata)("design:paramtypes", [f.f])], Ie);
      const Te = new Ie(new f.f());
      class Ne extends Error {
        constructor(e, t) {
          super("ApplicationRequestError"), (this.exception = e), (this.useCaseStacktrace = t);
        }
      }
      let Fe = class {
        constructor(e, t, s, r) {
          (this.logger = e), (this.useCaseStacktraceRepo = t), (this.cqrsClient = s), (this.requestContextClient = r);
        }
        intercept(e, t) {
          const s = e.getArgByIndex(0);
          return t.handle().pipe((0, ge.K)(this.handleException(s)));
        }
        handleException(e) {
          const { useCaseStacktraceRepo: t } = this;
          return (s) => {
            if (t.isInitialUseCase()) {
              const [r, n] = s instanceof Ne ? [s.exception, s.useCaseStacktrace] : [s, t.read()];
              return this.captureException(e, r, n), (0, _e._)(() => r);
            }
            const r = s instanceof Ne ? s : new Ne(s, t.read());
            return (0, _e._)(() => r);
          };
        }
        async getUserFeatureFlips() {
          if (
            !(await (0, o.z)(this.requestContextClient.queries.activeUser().pipe((0, w.U)((e) => (0, G.d6)(e) && !!(0, G.db)(e).userName))))
          )
            return Promise.resolve({});
          const {
            queries: { userFeatureFlips: e }
          } = this.cqrsClient.getClient(ye.cV);
          return await (0, o.z)(e().pipe((0, w.U)((e) => ((0, G.d6)(e) ? (0, G.db)(e) : {}))));
        }
        async captureException(e, t, s) {
          this.logger.captureException(t, {
            moduleName: e.module,
            useCaseName: e.name,
            useCaseId: e.context.get(f.l.UseCaseId),
            featureFlips: await this.getUserFeatureFlips(),
            useCaseStacktrace: s
          });
        }
      };
      Fe = (0, l.__decorate)([(0, p.Injectable)({ scope: p.Scope.REQUEST }), (0, l.__metadata)("design:paramtypes", [we, Ie, S, Ae])], Fe);
      let xe = class {
        constructor(e, t, s, r) {
          (this.request = e), (this.logger = t), (this.useCaseStacktraceRepo = s), (this.cqrsClient = r);
        }
        async do(...e) {
          return (await Promise.all(e.map((e) => this.doOne(e)))).every((e) => !!e);
        }
        async doOne(e, t = "method") {
          try {
            const s = await e();
            if ((0, G.AZ)(s) && (0, G.hx)(s)) throw new Error(`Allowed to fail ${t} has failed`);
            return !0;
          } catch (e) {
            const { request: t, useCaseStacktraceRepo: s } = this,
              [r, n] = e instanceof Ne ? [e.exception, e.useCaseStacktrace] : [e, s.read()];
            try {
              await Promise.race([
                new Promise((e) => setTimeout(e, 100)),
                this.logger.captureException(
                  r,
                  {
                    moduleName: t?.module,
                    useCaseId: t?.context.get(f.l.UseCaseId),
                    useCaseName: t?.name,
                    useCaseStacktrace: n,
                    featureFlips: await this.getUserFeatureFlips()
                  },
                  me.WARNING
                )
              ]);
            } catch (e) {}
            return !1;
          }
        }
        async conditionallyAllowToFailOne(e, t) {
          return t ? this.doOne(e) : (await e(), !0);
        }
        getUserFeatureFlips() {
          const {
            queries: { userFeatureFlips: e }
          } = this.cqrsClient.getClient(ye.cV);
          return (0, o.z)(
            e().pipe(
              (0, w.U)((e) => ((0, G.d6)(e) ? (0, G.db)(e) : {})),
              (0, ve.V)(50),
              (0, ge.K)(() => (0, E.of)({}))
            )
          );
        }
      };
      function Re() {
        return new xe(k, new we(new be(), new R()), Te, {
          getClient: () => ({ queries: { userFeatureFlips: () => (0, E.of)((0, G.Vp)({})) } })
        });
      }
      xe = (0, l.__decorate)(
        [(0, l.__param)(0, (0, p.Inject)(i.REQUEST)), (0, l.__metadata)("design:paramtypes", [Object, we, Ie, S])],
        xe
      );
      class De {
        constructor() {
          (this.registeredClasses = []), (this.preparedInstances = []);
        }
        get classes() {
          return this.registeredClasses;
        }
        get instances() {
          return this.preparedInstances;
        }
        set instances(e) {
          this.preparedInstances = e;
        }
        registerClass(e) {
          this.registeredClasses.push(e);
        }
      }
      let Pe = class {
        constructor(e, t, s) {
          (this.moduleRef = e), (this.request = t), (this.storeList = s);
        }
        async prepare() {
          const e = i.ContextIdFactory.getByRequest(this.request);
          this.storeList.instances = await Promise.all(this.storeList.classes.map((t) => this.moduleRef.resolve(t, e, { strict: !1 })));
        }
        async flush() {
          const { instances: e } = this.storeList;
          if (!e.length) throw new Error("Stores not instantiated");
          const t = e.map((e) => e.persist());
          await Promise.all(t);
        }
      };
      Pe = (0, l.__decorate)(
        [
          (0, p.Injectable)(),
          (0, l.__param)(1, (0, p.Inject)(i.REQUEST)),
          (0, l.__metadata)("design:paramtypes", [i.ModuleRef, Object, De])
        ],
        Pe
      );
      let ke = class {
        catch(e, t) {
          t.switchToHttp().getResponse().fail(e);
        }
      };
      ke = (0, l.__decorate)([(0, p.Catch)(Error)], ke);
      const Me = {
        provide: f.f,
        scope: p.Scope.REQUEST,
        inject: [i.REQUEST],
        useFactory: (e) => {
          const t = (() => {
            switch (e.type) {
              case D.Command:
              case D.Event:
              case D.Query:
              case D.Cron:
                return e.context;
              case D.Init:
                return new f.f();
              default:
                (0, L.U)(e);
            }
          })();
          return t.getOrAdd(f.l.UseCaseId, () => String(i.ContextIdFactory.getByRequest(e).id)), t;
        }
      };
      var Oe = s(778263),
        Le = s(116433);
      const Ge = "open",
        Be = "closed";
      class qe {
        constructor(e) {
          (this.lifecycle = e),
            (this.status = Ge),
            (this.onAppShutdown = () => this.close()),
            (this.closeHooks = []),
            e.addShutdownHook(this.onAppShutdown);
        }
        async close() {
          for (; this.closeHooks.length > 0; ) {
            const e = this.closeHooks.pop();
            e && (await e());
          }
          (this.status = Be), this.lifecycle.removeShutdownHook(this.onAppShutdown);
        }
        addCloseHook(e) {
          this.closeHooks.push(e);
        }
      }
      let Ve = class extends qe {
        constructor(e, t, s) {
          super(t),
            (this.requestContext = s),
            s.queries
              .activeUser()
              .pipe((0, Oe.G)(), (0, a.h)(this.thisUserGotDeactivated(e)), (0, Le.q)(1))
              .subscribe(() => {
                this.close();
              });
        }
        thisUserGotDeactivated(e) {
          return ([t, s]) => {
            if (!(0, G.d6)(t) || !(0, G.d6)(s)) return !1;
            const r = (0, G.db)(t).userName,
              n = (0, G.db)(s).userName;
            return r === e && void 0 === n;
          };
        }
      };
      Ve = (0, l.__decorate)([(0, p.Injectable)(), (0, l.__metadata)("design:paramtypes", [String, F, Ae])], Ve);
      class He {
        static create({
          brokers: { cqrs: e, event: t },
          configProviders: s,
          keyValueStorageInfrastructure: r,
          lifeCycle: a,
          logger: o,
          modules: c,
          nodeConfiguration: l,
          storeInfrastructureFactory: p,
          timers: m,
          jsonFetcher: h,
          defaultDeviceStorageEncryptionCodecProvider: v,
          defaultUserStorageEncryptionCodecProvider: y,
          storeList: C,
          interceptors: w,
          introspection: _,
          moduleClientsProviders: E,
          userUseCaseScopeProvider: A
        }) {
          return {
            module: He,
            providers: [
              d.ExplorerService,
              { provide: ue, useValue: r },
              { provide: F, useValue: a },
              { provide: g.$, useValue: l },
              { provide: u.d, useValue: e },
              { provide: T, useValue: t },
              { provide: he.X, useValue: h },
              S,
              b,
              ...s,
              { provide: x, useValue: o },
              Me,
              { provide: N.G, useValue: p },
              { provide: W, useValue: m },
              Z,
              { provide: pe, useValue: new pe(r) },
              ne,
              v,
              y,
              ie,
              n,
              { provide: H, useValue: _ },
              { provide: De, useValue: C },
              Pe,
              xe,
              { provide: i.APP_FILTER, useClass: ke },
              ...w.flatMap((e) => [{ provide: i.APP_INTERCEPTOR, useClass: e }, e]),
              ...E,
              A
            ],
            imports: [...c],
            exports: [
              F,
              g.$,
              u.d,
              T,
              S,
              b,
              ...s.map(({ provide: e }) => e),
              x,
              f.f,
              N.G,
              W,
              Z,
              ne,
              ee,
              te,
              ie,
              n,
              pe,
              ue,
              he.X,
              Pe,
              xe,
              H,
              ...E.map(({ provide: e }) => e),
              Ve
            ],
            controllers: [j],
            global: !0
          };
        }
      }
      var je = s(674081);
      const Ke = () => {},
        ze = () => {
          throw new Error("Not supported");
        };
      class We {
        constructor(e, t, s) {
          (this.cqrsBroker = e),
            (this.eventsBroker = t),
            (this.cronsBroker = s),
            (this.isListening$ = new K.X(!1)),
            (this.use = ze),
            (this.get = ze),
            (this.post = ze),
            (this.head = ze),
            (this.delete = ze),
            (this.put = ze),
            (this.options = ze),
            (this.patch = ze),
            (this.end = ze),
            (this.applyVersionFilter = ze),
            (this.disconnect = Ke),
            (this.close = Ke),
            (this.status = ze),
            (this.render = ze),
            (this.redirect = ze),
            (this.setHeader = ze),
            (this.enableCors = ze),
            (this.initHttpServer = ze),
            (this.registerParserMiddleware = ze),
            (this.createMiddlewareFactory = ze);
        }
        isHeadersSent() {
          return !1;
        }
        bindHandler(e) {
          if (this.cqrsCallbacks || this.eventCallbacks) throw new Error("Handler already registered");
          (this.cqrsCallbacks = {
            onCommand: (t, s, r, n) =>
              new Promise((a, o) => {
                e(
                  { type: D.Command, module: t, name: s, body: r, context: n },
                  { type: D.Command, value: { result: (0, G.Vp)(void 0) }, reply: (e) => a(e), fail: (e) => o(e) }
                );
              }),
            onQuery: (t, s, r, n) => {
              const a = new Promise((a, o) => {
                e(
                  { type: D.Query, module: t, name: s, body: r, context: n },
                  { type: D.Query, value: { result: _.E }, reply: (e) => a(e), fail: (e) => o(e) }
                );
              });
              return (0, C.D)(a).pipe((0, je.J)());
            }
          }),
            (this.eventCallbacks = {
              onLocalEvent: (t, s, r, n, a) =>
                new Promise((s, o) => {
                  e({ type: D.Event, body: n, context: a, name: r, module: t }, { type: D.Event, reply: () => s(), fail: (e) => o(e) });
                })
            }),
            (this.cronCallbacks = (t, s) =>
              new Promise((r, n) => {
                e(
                  { type: D.Cron, context: new f.f(), module: t, name: s },
                  { type: D.Cron, value: { result: !1 }, reply: (e) => r(e), fail: (e) => n(e) }
                );
              }));
        }
        all(e, t) {
          if (!t) throw new Error("Provide a handler");
          return this.bindHandler(t);
        }
        async listen() {
          if (!this.cqrsCallbacks || !this.eventCallbacks || !this.cronCallbacks) throw new Error("Please call `all(path, handler)` first");
          const e = await this.cqrsBroker.connect(this.cqrsCallbacks).start(),
            t = await this.eventsBroker.connect(this.eventCallbacks).start(),
            s = await this.cronsBroker.connect(this.cronCallbacks).start(),
            { isListening$: r } = this;
          (this.disconnect = () => {
            e.stop(), t.stop(), s.stop(), r.complete();
          }),
            (this.close = this.disconnect),
            this.isListening$.next(!0);
        }
        reply(e, t) {
          switch (e.type) {
            case D.Query:
            case D.Command:
              e.reply(t.result);
              break;
            case D.Event:
              e.reply();
              break;
            case D.Cron:
              e.reply(t.result);
              break;
            default:
              (0, L.U)(e);
          }
        }
        getInstance() {
          return this;
        }
        getHttpServer() {
          return { once: Ke, address: () => "", removeListener: Ke };
        }
        getType() {
          return "AppCoreNode";
        }
      }
      const Qe = () => {};
      class $e extends i.AbstractHttpAdapter {
        constructor(e, t, s) {
          super(new We(e, t, s)),
            (this.createMiddlewareFactory = this.instance.createMiddlewareFactory),
            (this.close = this.instance.close),
            (this.reply = this.instance.reply),
            (this.useStaticAssets = Qe),
            (this.setViewEngine = Qe),
            (this.getRequestHostname = Qe),
            (this.status = Qe),
            (this.render = Qe),
            (this.redirect = Qe),
            (this.setNotFoundHandler = Qe),
            (this.setHeader = Qe),
            (this.registerParserMiddleware = Qe),
            (this.enableCors = Qe),
            (this.setErrorHandler = Qe),
            (this.end = Qe),
            (this.isListening$ = this.instance.isListening$);
        }
        initHttpServer() {
          this.setHttpServer({ once: Qe, address: () => "", removeListener: Qe });
        }
        getRequestMethod() {
          return p.RequestMethod.ALL;
        }
        getRequestUrl() {
          return "/";
        }
        getType() {
          return "CoreApp";
        }
        isHeadersSent() {
          return !1;
        }
        applyVersionFilter() {
          throw new Error("Versioning not supported");
        }
      }
      var Ye = s(890171);
      class Xe extends x {
        log() {}
        warn(e, ...t) {
          return console.warn(e, t);
        }
        error(e, ...t) {
          return console.error(e, t);
        }
        trace(e, ...t) {
          return console.trace(e, t);
        }
      }
      class Je extends W {
        get time() {
          return Date.now();
        }
        createObservableTimer(e, t) {
          return (0, Ye.H)(e, t);
        }
      }
      class Ze extends he.X {
        fetch() {
          return Promise.reject(
            new Error(
              "Please add a jsonFetcher to the application. Probably you are seing that in unit tests.\nIf this is the case, please mock whatever service is requiring to fetch the data"
            )
          );
        }
      }
      const et = "dl-module";
      var tt = s(554452);
      class st {
        constructor() {
          this.memory = new Map();
        }
        set(e, t) {
          return this.memory.set(e, t), Promise.resolve();
        }
        getAllKeys() {
          return Promise.resolve([...this.memory.keys()]);
        }
        remove(e) {
          return this.memory.get(e) ? (this.memory.delete(e), Promise.resolve()) : Promise.resolve();
        }
        get(e) {
          return Promise.resolve(this.memory.get(e));
        }
      }
      var rt,
        nt = s(369594);
      function at(e) {
        const { parameterProvider: t, token: s } = e;
        switch (t.type) {
          case rt.CLASS_PROVIDER:
            return { provide: s, useClass: t.useClass };
          case rt.VALUE_PROVIDER:
            return { provide: s, useValue: t.useValue };
          default:
            (0, L.U)(t);
        }
      }
      !(function (e) {
        (e.VALUE_PROVIDER = "value_provider"), (e.CLASS_PROVIDER = "class_provider");
      })(rt || (rt = {})),
        s(760171);
      const ot = "frameworkModuleName",
        it = new ie(),
        ct = new ne();
      let dt = class {
        constructor(e, t, s) {
          (this.kv = e), (this.prefix = `batch-storage.${s}.${t.get(f.l.UserName)}`);
        }
        async getBatchState(e) {
          const t = await this.kv.get(`${this.prefix}.${e}`);
          return t ? this.stringToState(t) : { queue: [] };
        }
        async setBatchState(e, t) {
          const s = this.stateToString(t);
          return await this.kv.set(`${this.prefix}.${e}`, s);
        }
        stateToString(e) {
          const t = it.encode(e);
          return ct.encode(t);
        }
        stringToState(e) {
          const t = ct.decode(e);
          return it.decode(t);
        }
      };
      dt = (0, l.__decorate)([(0, l.__param)(2, (0, p.Inject)(ot)), (0, l.__metadata)("design:paramtypes", [ue, f.f, String])], dt);
      class ut {
        getProviders(e) {
          return e.length
            ? [
                ...e.map((e) => ({ provide: e, inject: [dt, e.Definition.chunkProcessor], useFactory: (t, s) => new e(t, s) })),
                ...e.map(({ Definition: { chunkProcessor: e } }) => e),
                dt
              ]
            : [];
        }
      }
      var lt = s(769183),
        pt = s(164987);
      const mt = (e, t) => {
          const s = t.token ?? (0, lt.Z)();
          class r {
            constructor() {
              this.mutex = new pt.WU();
            }
            getOrCreate(e, t) {
              return this.mutex.runExclusive(
                async () => (
                  this.instance ||
                    (t.addShutdownHook(() => {
                      this.invalidate();
                    }),
                    (this.instance = await e())),
                  this.instance
                )
              );
            }
            invalidate() {
              this.instance = void 0;
            }
          }
          h()(r);
          const n = r,
            a = {
              token: e,
              inject: [r, F, i.ModuleRef, i.REQUEST],
              asyncFactory: (e, t, r, n) => {
                const a = i.ContextIdFactory.getByRequest(n);
                return e.getOrCreate(() => r.resolve(s, a), t);
              }
            };
          return [{ ...t, token: s }, n, a];
        },
        ht = (e, t) => {
          const s = t.token ?? (0, lt.Z)();
          class r {
            constructor() {
              (this.instances = new Map()), (this.mutex = new pt.WU());
            }
            getOrCreate(e, t, s) {
              return this.mutex.runExclusive(async () => {
                const r = this.instances.get(e);
                if (r) return r;
                s.addCloseHook(() => {
                  this.invalidate(e);
                });
                const n = await t();
                return this.instances.set(e, n), n;
              });
            }
            invalidate(e) {
              this.instances.delete(e);
            }
          }
          const n = r,
            a = {
              token: e,
              inject: [r, f.f, i.ModuleRef, i.REQUEST, Ve],
              asyncFactory: (t, r, n, a, o) => {
                const c = i.ContextIdFactory.getByRequest(a),
                  d = r.getOrDefault(f.l.UserName, "");
                if ("" === d) throw new Error(`Provider ${e} is a user-scoped singleton but there is no user`);
                if (!o) throw new Error("No user scope available");
                return t.getOrCreate(d, () => n.resolve(s, c), o);
              }
            };
          return [{ token: s, asyncFactory: t.asyncFactory, inject: [...(t.inject ?? []), f.f] }, n, a];
        },
        vt = (e, t, s) => {
          switch (e) {
            case O.F.Device:
              return mt(t, s);
            case O.F.User:
              return ht(t, s);
            default:
              (0, L.U)(e);
          }
        },
        gt = { [O.F.Device]: ee, [O.F.User]: te };
      function yt(...e) {
        return e.flatMap((e) =>
          (function (e) {
            const t = e.Definition.persist
                ? (function (e, t, s) {
                    const {
                      EncryptionCodec: r = gt[t],
                      SerializationCodec: n = ie,
                      TransportStorageCodec: a = ne,
                      initialValue: o,
                      schemaVersion: i
                    } = s.Definition;
                    class c {
                      constructor(e, t, s, r) {
                        (this.encryptionCodec = e), (this.serializationCodec = t), (this.transportStorageCodec = s), (this.backend = r);
                      }
                    }
                    class d extends s {
                      constructor(e) {
                        super(e.encryptionCodec, e.serializationCodec, e.transportStorageCodec, e.backend);
                      }
                    }
                    const u = { token: (0, lt.Z)(), inject: [c], asyncFactory: (e) => Promise.resolve(new d(e)) },
                      l = {
                        token: c,
                        inject: [ot, r, n, a, pe, ...(t === O.F.User ? [f.f] : [])],
                        asyncFactory: async (s, r, n, a, d, u) => {
                          const l = await d.createBackend(s, e, (t === O.F.User ? u?.get(f.l.UserName) : "") ?? "", async () => {
                            const e = { version: i, content: o },
                              t = await n.encode(e),
                              s = await r.encode(t);
                            return await a.encode(s);
                          });
                          return new c(r, n, a, l);
                        }
                      };
                    return [l, ...vt(t, s, u)];
                  })(e.Definition.storeName, e.Definition.scope, e.Definition.storage)
                : [],
              s = {
                token: (0, lt.Z)(),
                inject: [
                  ot,
                  F,
                  N.G,
                  e.Definition.scope === O.F.User ? f.f : i.REQUEST,
                  xe,
                  Ve,
                  ...(e.Definition.persist ? [e.Definition.storage, e.Definition.codec] : [])
                ],
                asyncFactory: async (t, s, r, n, a, o, i, c) => {
                  const d = new e(t, e.Definition, r, (e.Definition.scope === O.F.User ? n.get(f.l.UserName) : "") ?? "", a, i, c),
                    u = async () => {
                      await d.clear(), d.stop();
                    };
                  if (e.Definition.scope === O.F.User) {
                    if (!o) throw new Error("No user scope available");
                    o.addCloseHook(u);
                  } else s.addShutdownHook(u);
                  return await d.load(), d;
                }
              };
            return [...t, ...vt(e.Definition.scope, e, s)];
          })(e)
        );
      }
      const ft = (e, t) => ({ [e.name]: { name: e.name, events: t } }),
        St = (e, t) => {
          const { exports: s = [], imports: r = [], providers: n = [], onFrameworkInit: a = [], stores: o = [], crons: i = [] } = e,
            c = [a, t.onFrameworkInit ?? []].flat();
          return {
            ...e,
            exports: s.concat(t.exports ?? []),
            imports: r.concat(t.imports ?? []),
            providers: n.concat(t.providers ?? []),
            onFrameworkInit: c,
            stores: o.concat(t.stores ?? []),
            crons: i.concat(t.crons ?? [])
          };
        };
      function bt(e) {
        const { composes: t = [] } = e;
        e = t.reduce((e, t) => St(e, t), e);
        const {
            exports: s = [],
            imports: r = [],
            handlers: n = { commands: {}, events: {}, queries: {} },
            providers: a = [],
            onFrameworkInit: o = [],
            stores: i,
            batchExecutors: c,
            crons: d
          } = e,
          u = e.api?.name ?? e.sharedModuleName,
          l = u ? yt(...(i ?? [])) : [],
          m = u ? new ut().getProviders(c ?? []) : [],
          h = [
            ...a,
            ...(d ?? []).map((e) => e.handler),
            ...l,
            ...m,
            ...Object.values(n.commands),
            ...Object.values(n.queries),
            ...Object.values(n.events)
              .map((e) => Object.values(e.events))
              .reduce((e, t) => [...e, ...t], new Array()),
            ...(o instanceof Array ? o : [o]),
            { provide: ot, useValue: u }
          ],
          { asyncProviders: v, basicClassProviders: g } = h.reduce(
            (e, t) => {
              return "object" == typeof (s = t) && "token" in s && "asyncFactory" in s && "function" == typeof s.asyncFactory
                ? { asyncProviders: [...e.asyncProviders, t], basicClassProviders: e.basicClassProviders }
                : { asyncProviders: e.asyncProviders, basicClassProviders: [...e.basicClassProviders, t] };
              var s;
            },
            { asyncProviders: new Array(), basicClassProviders: new Array() }
          ),
          y = [...g, ...v.map((e) => ({ provide: e.token, useFactory: e.asyncFactory, inject: e.inject }))],
          f = (0, p.Module)({ exports: s, imports: r, providers: y });
        return (t) => (Reflect.defineMetadata(et, e, t), f(t));
      }
      function Ct(e) {
        return { type: rt.VALUE_PROVIDER, useValue: e };
      }
      function wt(e) {
        return { type: rt.CLASS_PROVIDER, useClass: e };
      }
      const _t = {
        sink: Ct(
          new (class {
            logException() {
              return Promise.resolve();
            }
            start() {
              return Promise.resolve({ stop: () => Promise.resolve() });
            }
          })()
        ),
        uncaughtErrorSource: Ct(
          new (class extends Ce {
            constructor() {
              super(_.E);
            }
          })()
        )
      };
      let Et = class {
        constructor(e) {
          this.logger = e;
        }
        handle(e) {
          const { error: t, fileLocation: s, lineNumber: r, origin: n } = e,
            [a, o] = t instanceof Ne ? [t.exception, t.useCaseStacktrace] : [t];
          return this.logger.captureException(a, { fileLocation: s, lineNumber: r, origin: n, useCaseStacktrace: o }, me.CRITICAL);
        }
      };
      Et = (0, l.__decorate)([h(), (0, l.__metadata)("design:paramtypes", [we])], Et);
      let At = class {
        constructor(e, t, s, r) {
          (this.sink = e), (this.lifeCycle = t), (this.moduleRef = s), (this.uncaughtErrorsSource = r);
        }
        onFrameworkInit() {
          this.lifeCycle.addAppReadyHook(async () => {
            const { stop: e } = await this.sink.start(),
              t = this.uncaughtErrorsSource.events$.subscribe(this.onUncaughtErrorEvent.bind(this));
            return () => {
              t.unsubscribe(), e();
            };
          });
        }
        onUncaughtErrorEvent(e) {
          this.moduleRef.get(Et).handle(e);
        }
      };
      var Ut;
      At = (0, l.__decorate)([v(), (0, l.__metadata)("design:paramtypes", [Se, F, i.ModuleRef, Ce])], At);
      let It = (Ut = class {
        static configure(e) {
          return {
            module: Ut,
            configurations: { ..._t, sink: e.sink, ...(e.uncaughtErrorSource ? { uncaughtErrorSource: e.uncaughtErrorSource } : {}) }
          };
        }
      });
      It = Ut = (0, l.__decorate)(
        [
          bt({
            sharedModuleName: "exception-logging",
            providers: [we, { provide: i.APP_INTERCEPTOR, useClass: Fe }, Ie, Et],
            configurations: { sink: { token: Se }, uncaughtErrorSource: { token: Ce } },
            exports: [we, Ie],
            onFrameworkInit: At,
            requiredFeatureFlips: []
          })
        ],
        It
      );
      var Tt = s(243978);
      const Nt = { tag: "" };
      let Ft = class {
        constructor(e, t, s, r) {
          (this.request = e), (this.clients = t), (this.config = s), (this.introspection = r);
        }
        intercept(e, t) {
          const { request: s } = this,
            { appDefinition: r } = this.config;
          if (s.type === D.Cron) return this.checkCronActiveUser(t, s);
          if (!(s.module in r)) return t.handle();
          const n = r[s.module].api;
          switch (s.type) {
            case D.Query:
              return this.checkQueryActiveUser(t, s, n);
            case D.Command:
              return this.checkCommandActiveUser(t, s, n);
            case D.Event:
              return this.checkEventActiveUser(t, s, n);
            default:
              (0, L.U)(s);
          }
        }
        checkCronActiveUser(e, t) {
          const s = (this.introspection.modules[t.module].crons ?? []).find((e) => e.name === t.name);
          if (!s) throw new Error("No such cron " + t.name);
          return s.scope === O.F.Device
            ? e.handle()
            : this.checkActiveUserPromise(e, t.context, { noUserError: Nt, scope: O.F.User }, "Cron");
        }
        checkQueryActiveUser(e, t, s) {
          const { queries: r } = s;
          if (t.name in r) {
            const s = r[t.name],
              { metadata: n } = s;
            return this.checkActiveUserObservable(e, t.context, n, `Query ${t.module}.${t.name}`);
          }
          return e.handle();
        }
        checkCommandActiveUser(e, t, s) {
          const { commands: r } = s;
          if (t.name in r) {
            const s = r[t.name],
              { metadata: n } = s;
            return this.checkActiveUserPromise(e, t.context, n, `Command ${t.module}.${t.name}`);
          }
          return e.handle();
        }
        checkEventActiveUser(e, t, s) {
          const { events: r } = s;
          if (t.name in r) {
            const s = r[t.name],
              { metadata: n } = s;
            return this.checkActiveUserPromise(e, t.context, n, `Event ${t.module}.${t.name}`);
          }
          return e.handle();
        }
        checkActiveUserPromise(e, t, s, r) {
          if (s.scope !== O.F.User) return e.handle();
          const { noUserError: n } = s;
          return (0, C.D)(t.getOrAdd(f.l.UserName, () => q(this.clients))).pipe(
            (0, Tt.w)((t) => {
              if (t) return e.handle();
              if (n) return (0, E.of)({ result: (0, G.Rn)(n) });
              throw new Error(`Not logged in : ${r}`);
            })
          );
        }
        checkActiveUserObservable(e, t, s, r) {
          if (s.scope !== O.F.User) return e.handle();
          const { noUserError: n } = s;
          return (0, C.D)(t.getOrAdd(f.l.UserName, () => q(this.clients))).pipe(
            (0, Tt.w)((t) => {
              if (t) return e.handle();
              if (n) return (0, E.of)({ result: new K.X((0, G.Rn)(n)) });
              throw new Error(`Not logged in : ${r}`);
            })
          );
        }
      };
      Ft = (0, l.__decorate)(
        [
          (0, p.Injectable)({ scope: p.Scope.REQUEST }),
          (0, l.__param)(0, (0, p.Inject)(i.REQUEST)),
          (0, l.__metadata)("design:paramtypes", [Object, b, g.$, H])
        ],
        Ft
      );
      class xt {
        constructor(e, t) {
          (this.storage = e), (this.storageKey = `crons.${t}`);
        }
        async setState(e) {
          await this.storage.set(this.storageKey, JSON.stringify(e));
        }
        async getState() {
          const e = await this.storage.get(this.storageKey);
          if (!e) return { entries: [] };
          const t = JSON.parse(e);
          return (s = t) &&
            "object" == typeof s &&
            "entries" in s &&
            Array.isArray(s.entries) &&
            s.entries.every((e) =>
              (function (e) {
                return (
                  !!e &&
                  "object" == typeof e &&
                  "dueTimestamp" in e &&
                  "moduleName" in e &&
                  "name" in e &&
                  "string" == typeof e.name &&
                  "string" == typeof e.moduleName &&
                  "number" == typeof e.dueTimestamp
                );
              })(e)
            )
            ? t
            : { entries: [] };
          var s;
        }
      }
      var Rt = s(734987);
      const Dt = 6e4;
      function Pt(e) {
        return Math.ceil(e / Dt) * Dt;
      }
      function kt(e) {
        return Math.floor(e / Dt) * Dt;
      }
      class Mt {
        constructor(e, t) {
          (this.infra = e), (this.definitions = t);
        }
        async init() {
          const e = Pt(this.infra.timers.time),
            t = await this.infra.repository.getState(),
            s = this.definitions.filter((e) => !t.entries.find((t) => t.name === e.name && t.moduleName === e.moduleName)),
            r = {
              entries: [
                ...t.entries.filter((e) => this.definitions.find((t) => t.name === e.name && t.moduleName === e.moduleName)),
                ...s.map((t) => ({ ...t, dueTimestamp: e + t.periodInMinutes * Dt }))
              ]
            };
          await this.infra.repository.setState(r);
        }
        connect(e) {
          const { infra: t, definitions: s } = this;
          return {
            start: async () => {
              await this.init();
              const r = t.cronSource.alarm$
                .pipe(
                  (0, Rt.b)(async () => {
                    const r = await t.repository.getState(),
                      n = Pt(t.timers.time),
                      a = kt(t.timers.time),
                      o = r.entries.filter((e) => e.dueTimestamp <= n);
                    await Promise.allSettled(
                      o.map((n) => {
                        const o = s.find((e) => e.moduleName === n.moduleName && e.name === n.name);
                        if (!o) throw new Error("we should have a declaration");
                        return (async function (s, r, n, a) {
                          let o = !1;
                          try {
                            o = await e(n.moduleName, n.name);
                          } finally {
                            o && ((n.dueTimestamp = kt(s + a.periodInMinutes * Dt)), await t.repository.setState(r));
                          }
                        })(a, r, n, o);
                      })
                    );
                  })
                )
                .subscribe();
              return {
                stop: () => {
                  r.unsubscribe();
                }
              };
            }
          };
        }
      }
      let Ot,
        Lt = class {
          constructor(e, t) {
            (this.request = e), (this.useCaseStacktraceRepo = t);
          }
          intercept(e, t) {
            return this.useCaseStacktraceRepo.append(this.request.name), t.handle();
          }
        };
      Lt = (0, l.__decorate)(
        [
          (0, p.Injectable)({ scope: p.Scope.REQUEST }),
          (0, l.__param)(0, (0, p.Inject)(i.REQUEST)),
          (0, l.__metadata)("design:paramtypes", [Object, Ie])
        ],
        Lt
      );
      class Gt {
        constructor(e, t) {
          this.client = e.getClient(t);
        }
        get commands() {
          return this.client.commands;
        }
        get queries() {
          return this.client.queries;
        }
      }
      var Bt = s(173656);
      const qt = [Lt, Ft],
        Vt = async ({
          appDefinition: e,
          channels: t,
          currentNode: s,
          implementations: r,
          otherModules: d = [],
          logger: l = new Xe(),
          storeInfrastructureFactory: p = new N.N(),
          channelsListener: m = tt.y,
          timers: v = new Je(),
          keyValueStorageInfrastructure: b = new st(),
          jsonFetcher: C = new Ze(),
          cronSource: w = new nt._C(v),
          defaultDeviceStorageEncryptionCodec: _ = { type: rt.CLASS_PROVIDER, useClass: n },
          defaultUserStorageEncryptionCodec: E = { type: rt.CLASS_PROVIDER, useClass: n },
          exceptionLogging: A = _t
        }) => {
          const U = () => {
            throw new Error("Aborted");
          };
          (Bt.abort = U), (Bt.exit = U);
          const I = [
              It.configure(A),
              ...d,
              ...Object.keys(r)
                .map((e) => e)
                .map((e) => r[e])
            ],
            {
              configProviders: x,
              modules: R,
              modulesMetadata: k,
              onFrameworkInits: M,
              crons: O,
              eventHandlers: L,
              stores: G,
              allDeclarations: B
            } = ((e, t) =>
              t.reduce(
                (t, s) => {
                  const r = Reflect.getMetadata(et, s.module);
                  if (
                    !(n = r) ||
                    "object" != typeof n ||
                    (n.api && !(n.api.commands && n.api.events && n.api.name && n.api.queries && n.handlers)) ||
                    (n.exports && !Array.isArray(n.exports)) ||
                    (n.handlers && !n.api) ||
                    (n.imports && !Array.isArray(n.imports)) ||
                    (n.providers && !Array.isArray(n.providers))
                  )
                    return t;
                  var n;
                  r.onFrameworkInit &&
                    (r.onFrameworkInit instanceof Array
                      ? (t.onFrameworkInits = t.onFrameworkInits.concat(r.onFrameworkInit))
                      : t.onFrameworkInits.push(r.onFrameworkInit));
                  const a = r.api?.name ?? r.sharedModuleName ?? "unnamed";
                  return (
                    t.configProviders.push(
                      ...(function (e, t, s, r) {
                        if (!s.configurations) return [];
                        const { configurations: n } = s,
                          a = [];
                        return (
                          Object.keys(n).forEach((e) => {
                            const s = n[e].token,
                              o = r.configurations?.[e];
                            if (!o) throw new Error(`Missing '${e}' configuration for '${t}' module`);
                            a.push({ ...o, provide: s });
                          }),
                          Object.keys(r.configurations ?? {}).forEach((r) => {
                            s.configurations?.[r] || e.error(`Unknown '${r}' configuration for '${t}' module will be unused`);
                          }),
                          a
                        );
                      })(e, a, r, s)
                    ),
                    r.api?.name && t.modulesMetadata.set(r.api.name, r),
                    t.modules.push(s.module),
                    r.crons && t.crons.push(...r.crons.map((e) => ({ ...e, moduleName: a }))),
                    r.handlers?.events && t.eventHandlers.push(...Object.values(r.handlers.events).flatMap((e) => Object.values(e.events))),
                    r.stores && t.stores.push(...r.stores),
                    (t.allDeclarations[a] = r),
                    t
                  );
                },
                {
                  configProviders: new Array(),
                  modules: new Array(),
                  modulesMetadata: new Map(),
                  onFrameworkInits: new Array(),
                  crons: new Array(),
                  eventHandlers: new Array(),
                  stores: new Array(),
                  allDeclarations: (0, c.Ay)({})
                }
              ))(l, I),
            q = new De();
          G.forEach((e) => {
            q.registerClass(e);
          }),
            ((e, t, s) => {
              const r = new Set([...s.keys()]),
                n = new Set(
                  Object.values(e)
                    .filter((e) => e.main === t || e.queryOnly.includes(t))
                    .map((e) => e.api.name)
                ),
                a = [...n].filter((e) => !r.has(e)),
                o = [...r].filter((e) => !n.has(e));
              if (a.length > 0) throw new Error("These APIs are not implemented " + JSON.stringify(a));
              if (o.length > 0) throw new Error("Some implementations do not have APIS " + JSON.stringify(o));
            })(e, s, k);
          const V = ((e) =>
              [...e.entries()].reduce(
                (e, [t, s]) => {
                  const r = s.handlers?.events ?? {};
                  return (
                    (e[t] = Object.values(r).reduce((e, t) => (t.name ? ((e[t.name] = Object.keys(t.events)), e) : e), (0, c.Ay)({}))), e
                  );
                },
                (0, c.Ay)({})
              ))(k),
            j = new g.$({ appDefinition: e, channels: t, channelsListener: m, currentNode: s, subscriptions: V }),
            K = new u.d(j),
            z = new T(j),
            W = new Mt({ cronSource: w, repository: new xt(b, s), timers: v }, O),
            Q = new $e(K, z, W),
            $ = at({ token: ee, parameterProvider: _ }),
            Y = at({ token: te, parameterProvider: E }),
            X = new F(),
            J = new H(new Set(L), B),
            Z = (function (e) {
              const t = [];
              return (
                Object.values(e).forEach((e) => {
                  const { api: s } = e,
                    { ClientClass: r } = s;
                  r && (h()(r), t.push({ provide: r, useFactory: (e) => new Gt(e, s), inject: [S] }));
                }),
                t
              );
            })(e),
            se = {
              useFactory: (e, t, s) => {
                const r = e.get(f.l.UserName);
                if (r) return (Ot && Ot.status !== Be) || (Ot = new Ve(r, s, t)), Promise.resolve(Ot);
              },
              provide: Ve,
              inject: [f.f, Ae, F]
            },
            re = He.create({
              nodeConfiguration: j,
              brokers: { cqrs: K, event: z },
              modules: R,
              configProviders: x,
              logger: l,
              lifeCycle: X,
              storeInfrastructureFactory: p,
              timers: v,
              keyValueStorageInfrastructure: b,
              jsonFetcher: C,
              defaultDeviceStorageEncryptionCodecProvider: $,
              defaultUserStorageEncryptionCodecProvider: Y,
              storeList: q,
              interceptors: qt,
              introspection: J,
              moduleClientsProviders: Z,
              userUseCaseScopeProvider: se
            }),
            ne = await i.NestFactory.create(re, Q, { logger: l }),
            ae = await ne.init();
          await (async function (e, t) {
            const s = Object.freeze({ id: -1 }),
              r = e.map(async (e) => {
                const r = { type: D.Init, [P.REQUEST_CONTEXT_ID]: s };
                t.registerRequestByContextId(r, s);
                const n = await t.resolve(e, s, { strict: !1 });
                await n.onFrameworkInit();
              });
            await Promise.all(r);
          })(M, ae),
            ne.listen("");
          const oe = Q.isListening$.pipe((0, a.h)((e) => !!e));
          return (
            await (0, o.z)(oe),
            X.addShutdownHook(() => ne.close()),
            await X.startup(),
            {
              stop: () => X.shutDown(),
              createClient: () => (0, y.R)(e, K),
              sendEvent: (e, t, s, r) => z.publishEvent(e, t, s, r ?? new f.f())
            }
          );
        },
        Ht = (e) => Vt({ ...e, appDefinition: e.appDefinition, channels: {}, currentNode: "node" });
      var jt = s(896259);
      class Kt {}
      var zt = s(804607);
      class Wt {
        encodeKey(e) {
          return this.standardEncoding(e);
        }
        encodeValue(e) {
          return this.standardEncoding(e);
        }
        decodeKey(e) {
          return decodeURIComponent(e);
        }
        decodeValue(e) {
          return decodeURIComponent(e);
        }
        standardEncoding(e) {
          return encodeURIComponent(e).replace(Wt.STANDARD_ENCODING_REGEX, (e, t) => Wt.STANDARD_ENCODING_REPLACEMENTS[t] ?? e);
        }
      }
      (Wt.STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi),
        (Wt.STANDARD_ENCODING_REPLACEMENTS = { 40: "@", "3A": ":", 24: "$", "2C": ",", "3B": ";", "3D": "=", "3F": "?", "2F": "/" });
      class Qt {
        constructor(e = {}, t = {}) {
          (this.map = new Map()),
            (this.encoder = t.encoder ?? new Wt()),
            "string" == typeof e ? this.initFromString(e) : this.initFromObject(e);
        }
        has(e) {
          return this.map.has(e);
        }
        get(e) {
          const t = this.map.get(e);
          return t?.[0] ?? null;
        }
        getAll(e) {
          return this.map.get(e) ?? null;
        }
        keys() {
          return Array.from(this.map.keys());
        }
        append(e, t) {
          return this.clone({ param: e, value: t, op: 0 });
        }
        appendAll(e) {
          const t = [];
          return (
            Object.keys(e).forEach((s) => {
              const r = e[s];
              Array.isArray(r)
                ? r.forEach((e) => {
                    t.push({ param: s, value: e, op: 0 });
                  })
                : t.push({ param: s, value: r, op: 0 });
            }),
            this.clone(t)
          );
        }
        set(e, t) {
          return this.clone({ param: e, value: t, op: 1 });
        }
        delete(e, t) {
          return this.clone({ param: e, value: t, op: 2 });
        }
        toString() {
          return this.keys()
            .map((e) => {
              const t = this.encoder.encodeKey(e);
              return this.map
                .get(e)
                .map((e) => t + "=" + this.encoder.encodeValue(e))
                .join("&");
            })
            .filter((e) => "" !== e)
            .join("&");
        }
        clone(e) {
          const t = new Qt({}, { encoder: this.encoder });
          return t.initFromOther(this), t.applyUpdates(Array.isArray(e) ? e : [e]), t;
        }
        initFromOther(e) {
          e.keys().forEach((t) => this.map.set(t, [...e.map.get(t)]));
        }
        initFromObject(e) {
          Object.keys(e).forEach((t) => {
            const s = e[t],
              r = Qt.isValueArray(s) ? s.map(Qt.valueToString) : [Qt.valueToString(s)];
            this.map.set(t, r);
          });
        }
        initFromString(e) {
          const { encoder: t } = this;
          e.length > 0 &&
            e
              .replace(/^\?/, "")
              .split("&")
              .forEach((e) => {
                const s = e.indexOf("="),
                  [r, n] = -1 === s ? [t.decodeKey(e), ""] : [t.decodeKey(e.slice(0, s)), t.decodeValue(e.slice(s + 1))],
                  a = this.map.get(r) ?? [];
                a.push(n), this.map.set(r, a);
              });
        }
        applyUpdates(e) {
          e.forEach((e) => {
            switch (e.op) {
              case 0:
              case 1: {
                const t = (0 === e.op ? this.map.get(e.param) : void 0) ?? [];
                t.push(Qt.valueToString(e.value)), this.map.set(e.param, t);
                break;
              }
              case 2:
                if (void 0 === e.value) {
                  this.map.delete(e.param);
                  break;
                }
                {
                  const t = this.map.get(e.param) ?? [],
                    s = t.indexOf(Qt.valueToString(e.value));
                  -1 !== s && t.splice(s, 1), t.length > 0 ? this.map.set(e.param, t) : this.map.delete(e.param);
                }
            }
          });
        }
        static valueToString(e) {
          return `${e}`;
        }
        static isValueArray(e) {
          return Array.isArray(e);
        }
      }
      class $t {
        constructor(e, t, s, r) {
          (this.body = null),
            (this.headers = new zt.W()),
            (this.withCredentials = !1),
            (this.timeout = void 0),
            (this.responseType = "json"),
            (this.params = new Qt({})),
            (this.url = t),
            (this.method = e),
            $t.mightHaveBody(this.method) && (this.body = s ?? null),
            r &&
              ((this.withCredentials = Boolean(r.withCredentials)),
              r.responseType && (this.responseType = r.responseType),
              r.headers && (this.headers = this.getHeadersFromOptions(r.headers)),
              r.params && (this.params = this.getParamsFromOptions(r.params)),
              r.timeout && r.timeout > 0 && (this.timeout = r.timeout),
              r.mode && (this.mode = r.mode)),
            (this.urlWithParams = this.initUrlWithParams());
        }
        serializeBody() {
          return null === this.body
            ? null
            : $t.isArrayBuffer(this.body) || "string" == typeof this.body
            ? this.body
            : this.body instanceof Qt
            ? this.body.toString()
            : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || $t.isArrayBuffer(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof Qt
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body || "number" == typeof this.body || "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(e = {}) {
          const t = e.method ?? this.method,
            s = e.url ?? this.url,
            r = e.responseType ?? this.responseType,
            n = void 0 !== e.body ? e.body : this.body,
            a = void 0 !== e.withCredentials ? e.withCredentials : this.withCredentials,
            o = void 0 !== e.timeout ? e.timeout : this.timeout,
            i = e.mode ?? this.mode;
          let c = e.headers ? this.getHeadersFromOptions(e.headers) : this.headers,
            d = e.params ? this.getParamsFromOptions(e.params) : this.params;
          const u = e.setHeaders;
          u && (c = Object.keys(u).reduce((e, t) => e.set(t, u[t]), c));
          const l = e.setParams;
          return (
            l && (d = Object.keys(l).reduce((e, t) => e.set(t, l[t]), d)),
            new $t(t, s, n, { params: d, headers: c, responseType: r, withCredentials: a, timeout: o, mode: i })
          );
        }
        getHeadersFromOptions(e) {
          return e instanceof zt.W ? e : new zt.W(e);
        }
        getParamsFromOptions(e) {
          return e instanceof Qt ? e : new Qt(e);
        }
        initUrlWithParams() {
          const e = this.params.toString();
          if (0 === e.length) return this.url;
          const t = this.url.indexOf("?"),
            s = -1 === t ? "?" : t < this.url.length - 1 ? "&" : "";
          return this.url + s + e;
        }
        static mightHaveBody(e) {
          switch (e) {
            case "DELETE":
            case "GET":
            case "HEAD":
            case "OPTIONS":
              return !1;
            default:
              return !0;
          }
        }
        static isArrayBuffer(e) {
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer;
        }
      }
      var Yt = s(912964),
        Xt = s(625994),
        Jt = s(673155),
        Zt = s(948844);
      class es {
        constructor(e, t) {
          this.pipeline = this.initPipeline(e, this.dedupeInterceptorsById(t));
        }
        handle(e) {
          return this.pipeline.handle(e);
        }
        dedupeInterceptorsById(e) {
          const t = e.reduce((e, t) => (e.set(t.id, t), e), new Map());
          return Array.from(t.values());
        }
        initPipeline(e, t) {
          return t.reduceRight((e, t) => ({ handle: (s) => t.intercept(s, e.handle.bind(e)) }), e);
        }
      }
      class ts {
        constructor(e) {
          (this.backend = e), (this.interceptors = new Map());
        }
        addInterceptor(e) {
          this.interceptors.set(e.id, e);
        }
        request(...e) {
          return this.makeRequest(...e);
        }
        delete(e, t) {
          return this.makeRequest("DELETE", e, t);
        }
        get(e, t) {
          return this.makeRequest("GET", e, t);
        }
        head(e, t) {
          return this.makeRequest("HEAD", e, t);
        }
        options(e, t) {
          return this.makeRequest("OPTIONS", e, t);
        }
        patch(e, t, s) {
          return this.makeRequest("PATCH", e, { body: t, ...s });
        }
        post(e, t, s) {
          return this.makeRequest("POST", e, { body: t, ...s });
        }
        put(e, t, s) {
          return this.makeRequest("PUT", e, { body: t, ...s });
        }
        makeRequest(...e) {
          let t, s, r;
          if (1 === e.length) (t = e[0]), (s = "response");
          else {
            const [n, a, o] = e;
            (t = new $t(n, a, void 0 !== o.body ? o.body : null, {
              headers: o.headers,
              params: o.params,
              responseType: o.responseType ?? "json",
              withCredentials: o.withCredentials
            })),
              (s = o.observe ?? "body"),
              "json" === o.responseType && "body" === o.observe && (r = o.responseBodyDecoder);
          }
          const n = new es(this.backend, Array.from(this.interceptors.values())),
            a = (0, E.of)(this.addContentTypeRequestHeader(t)).pipe((0, Rt.b)((e) => n.handle(e)));
          switch (s) {
            case "body":
              switch (t.responseType) {
                case "arraybuffer":
                  return a.pipe((0, Zt.Gx)((e) => e.arrayBuffer()));
                case "text":
                  return a.pipe((0, Zt.Gx)((e) => e.text()));
                case "json":
                  return a.pipe((0, Zt.Gx)((e) => e.json(r)));
                default:
                  (0, L.U)(t.responseType);
              }
              break;
            case "response":
              return a;
            default:
              (0, L.U)(s);
          }
        }
        addContentTypeRequestHeader(e) {
          if (!e.headers.has("content-type")) {
            const t = e.detectContentTypeHeader();
            if (t) return e.clone({ headers: e.headers.set("content-type", t) });
          }
          return e;
        }
      }
      let ss = class extends ts {
        constructor(e) {
          super(e);
        }
      };
      ss = (0, l.__decorate)([h(), (0, l.__metadata)("design:paramtypes", [Kt])], ss);
      let rs = class {};
      rs = (0, l.__decorate)(
        [bt({ providers: [ss], configurations: { infrastructure: { token: Kt } }, exports: [ss], sharedModuleName: "http" })],
        rs
      );
      var ns = s(249329),
        as = s(542339);
      function os(e) {
        const t = h();
        return (s) => {
          Reflect.defineMetadata("dl-handler", s, e), t(s);
        };
      }
      function is(...e) {
        const t = [...e].reverse();
        return {
          decode: async (t) => {
            for (const s of e) t = await s.decode(t);
            return t;
          },
          encode: async (e) => {
            for (const s of t) e = await s.encode(e);
            return e;
          }
        };
      }
      class cs {
        constructor(e, t, s, r, a) {
          (this.encryptionCodec = e),
            (this.serializationCodec = t),
            (this.transportStorageCodec = s),
            (this.backend = r),
            (this.definition = a),
            (this.codec = is(s, e, t));
          const o = new n();
          this.bypassedDecryptionDecoder = is(s, o, t);
        }
        async read() {
          const e = await this.backend.read();
          if (!e) return;
          const { decoded: t, hasBypassedDecryption: s } = await this.decodeData(e),
            { definition: r } = this;
          if (!ce(t, r.typeGuard)) {
            if (!r.typeGuard(t))
              throw (
                (s && (await this.rawWrite(t)),
                new Error(`Can't migrate non-versioned Storage : Typeguard ${r.typeGuard.name} check failed.`))
              );
            return await this.write(t), t;
          }
          if (t.version < r.schemaVersion) {
            if (!r.migrateStorageSchema) throw (s && (await this.rawWrite(t)), new Error("migrateStorage is undefined"));
            const e = r.migrateStorageSchema(t);
            return await this.write(e), e;
          }
          s && (await this.write(t.content));
          const { content: n } = t;
          if (!r.typeGuard(n)) throw new Error("Type guard failed");
          return n;
        }
        async write(e) {
          const t = { version: this.definition.schemaVersion, content: e };
          await this.rawWrite(t);
        }
        clear() {
          return this.backend.clear();
        }
        async rawWrite(e) {
          const t = await this.codec.encode(e);
          await this.backend.write(t);
        }
        async decodeData(e) {
          const { codec: t, bypassedDecryptionDecoder: s } = this;
          try {
            return { decoded: await t.decode(e), hasBypassedDecryption: !1 };
          } catch (t) {
            try {
              return { decoded: await s.decode(e), hasBypassedDecryption: !0 };
            } catch {
              throw t;
            }
          }
        }
      }
      const ds = (e) => {
        var t;
        return (
          (t = class extends cs {
            constructor(t, s, r, n) {
              super(t, s, r, n, e);
            }
          }),
          (t.Definition = e),
          t
        );
      };
      var us = s(385390),
        ls = s(6136);
      class ps {
        constructor(e, t, s, r, n, o, i) {
          (this.conf = t),
            (this.allowedToFail = n),
            (this.storage = o),
            (this.codec = i),
            (this.infrastructure = (() => {
              switch (t.scope) {
                case O.F.Device:
                  return s.createDeviceScopedInfrastructure(e, t.storeName, t.storeTypeGuard);
                case O.F.User:
                  if (!r) throw new Error("Attempting to create a user-scoped store without a user");
                  return s.createUserScopedInfrastructure(e, t.storeName, r, t.storeTypeGuard);
              }
              (0, L.U)(t.scope);
            })()),
            (this.timeGetter = () => Date.now()),
            (this.localState$ = new K.X({ timestamp: void 0 })),
            (this.mergedState$ = (0, us.a)({ infra: this.infrastructure.state$, current: this.localState$ }).pipe(
              (0, w.U)(({ current: e, infra: t }) => (t.timestamp && (!e.timestamp || t.timestamp > e.timestamp) ? t : e)),
              (0, ls.x)()
            ));
          const c = t.persist ? void 0 : t.initialValue;
          this.state$ = this.mergedState$.pipe(
            (0, a.h)((e) => !t.persist || !!e.timestamp),
            (0, w.U)((e) => e.data ?? c)
          );
        }
        getState() {
          return (0, o.z)(this.state$);
        }
        async set(e) {
          await this.setWithoutPersist(e), await this.persist();
        }
        async setWithoutPersist(e) {
          const t = { data: e, timestamp: this.timeGetter() };
          this.localState$.next(t), await this.infrastructure.set(t);
        }
        init(e) {
          const t = { data: e, timestamp: 0 };
          return this.localState$.next(t), Promise.resolve();
        }
        async clear() {
          this.localState$.next({ timestamp: void 0 }), await this.infrastructure.clear();
        }
        async clearStorage() {
          if (!this.storage) throw new Error("Persisted stores should have storage");
          await this.storage.clear();
        }
        stop() {
          this.localState$.complete();
        }
        async update(e) {
          const t = await this.getState();
          await this.set(e(t));
        }
        async load() {
          const e = await this.infrastructure.getState();
          if (e.timestamp) return void this.localState$.next(e);
          const { conf: t, codec: s, storage: r } = this;
          if (t.persist) {
            if (!s || !r) throw new Error("Persisted stores should have conf/storage");
            (await this.allowedToFail.conditionallyAllowToFailOne(async () => {
              const e = (await r.read()) ?? t.storage.Definition.initialValue,
                n = await s.decode(e);
              await this.setWithoutPersist(n);
            }, !!t.isCache)) || (await this.setWithoutPersist(await s.decode(t.storage.Definition.initialValue)));
          }
        }
        async persist() {
          const { conf: e, codec: t, storage: s } = this;
          if (!e.persist) return;
          if (!t || !s) throw new Error("Persisted stores should have conf/storage");
          const r = await this.getState(),
            n = await t.encode(r);
          await s.write(n);
        }
      }
      const ms = (e) =>
        e.persist
          ? {
              persist: !0,
              codec: e.codec,
              scope: e.scope,
              storeName: e.storeName,
              storeTypeGuard: e.storeTypeGuard,
              isCache: e.isCache,
              storage: ds(e.storage)
            }
          : { persist: !1, initialValue: e.initialValue, scope: e.scope, storeName: e.storeName };
      function hs(e) {
        var t;
        const s = ms(e),
          r =
            (((t = class extends ps {
              constructor(e, t, s, r, n, a, o) {
                super(e, t, s, r, n, a, o);
              }
            }).Definition = s),
            t);
        return h()(r), r;
      }
      var vs;
      !(function (e) {
        (e._001KB = "1KB"), (e._010KB = "10KB"), (e._100KB = "100KB"), (e.Unlimited = "Unlimited");
      })(vs || (vs = {}));
      const gs = (e) =>
        "object" == typeof e &&
        null !== e &&
        "swStartTime" in e &&
        "taskTrackingList" in e &&
        "string" == typeof e.swStartTime &&
        "object" == typeof e.taskTrackingList;
      class ys extends hs({
        persist: !1,
        initialValue: { swStartTime: "", taskTrackingList: {} },
        scope: O.F.Device,
        storeName: "task-tracking",
        storeTypeGuard: gs,
        capacity: vs._001KB
      }) {}
      let fs = class {
        constructor(e) {
          this.store = e;
        }
        async execute({ body: e }) {
          const t = new Date().toISOString(),
            { taskName: s, feature: r, businessDomain: n } = e,
            a = { taskName: s, feature: r, businessDomain: n, startTime: t, serviceWorkerInterruptionCount: 0 },
            o = await this.store.getState();
          return await this.store.set({ ...o, taskTrackingList: { ...o.taskTrackingList, [t]: a } }), Promise.resolve((0, G.Vp)({ id: t }));
        }
      };
      fs = (0, l.__decorate)([os(as.g), (0, l.__metadata)("design:paramtypes", [ys])], fs);
      var Ss = s(453576),
        bs = s(660765);
      let Cs = class {
        constructor(e, t, s) {
          (this.store = e), (this.carbonLegacyClient = t), (this.appLifecycle = s);
        }
        onFrameworkInit() {
          this.appLifecycle.addAppReadyHook(async () => {
            const e = await this.store.getState(),
              t = { ...e.taskTrackingList },
              s = Object.keys(e.taskTrackingList).map(async (s) => {
                const { taskName: r, feature: n, businessDomain: a, startTime: o } = e.taskTrackingList[s],
                  i = new bs.UserMv3ExtensionTaskInterruptionEvent({
                    businessDomain: a,
                    feature: n,
                    taskName: r,
                    taskStartDateTime: o,
                    serviceWorkerStartDateTime: e.swStartTime
                  }),
                  c = this.carbonLegacyClient;
                await c.commands.carbon({ name: "logEvent", args: [{ event: i }] }), delete t[s];
              });
            await Promise.all(s), await this.store.set({ swStartTime: new Date().toISOString(), taskTrackingList: t });
          });
        }
      };
      Cs = (0, l.__decorate)([v(), (0, l.__metadata)("design:paramtypes", [ys, Ss.CarbonLegacyClient, F])], Cs);
      var ws = s(829876);
      let _s = class {
        constructor(e, t, s) {
          (this.store = e), (this.carbonLegacyClient = t), (this.logger = s);
        }
        async execute({ body: e }) {
          const { taskTrackingId: t } = e,
            s = await this.store.getState(),
            r = s.taskTrackingList[t];
          if (!r) return this.logger.trace("Trying to track a task that does not exist"), (0, G.Vp)(void 0);
          const { taskName: n, feature: a, businessDomain: o, startTime: i, serviceWorkerInterruptionCount: c } = r,
            d = new bs.UserMv3ExtensionTaskReportEvent({
              businessDomain: o,
              feature: a,
              serviceWorkerInterruptionCount: c,
              serviceWorkerStartDateTime: s.swStartTime,
              taskName: n,
              taskStartDateTime: i,
              taskEndDateTime: new Date().toISOString()
            }),
            u = this.carbonLegacyClient;
          await u.commands.carbon({ name: "logEvent", args: [{ event: d }] });
          const l = { ...s.taskTrackingList };
          return delete l[t], await this.store.set({ swStartTime: s.swStartTime, taskTrackingList: l }), (0, G.Vp)(void 0);
        }
      };
      _s = (0, l.__decorate)([os(ws.y), (0, l.__metadata)("design:paramtypes", [ys, Ss.CarbonLegacyClient, x])], _s);
      let Es = class {};
      Es = (0, l.__decorate)(
        [
          bt({
            api: ns.e,
            handlers: { commands: { startTaskTracking: fs, terminateTaskTracking: _s }, events: {}, queries: {} },
            stores: [ys],
            onFrameworkInit: Cs,
            providers: []
          })
        ],
        Es
      );
      var As = s(915572),
        Us = s(158649),
        Is = s(645244);
      function Ts(e) {
        const t = h();
        return (s) => {
          Reflect.defineMetadata("dl-handler", s, e), t(s);
        };
      }
      function Ns(e) {
        const t = h();
        return (s) => {
          if (Reflect.hasMetadata("dl-handlers", e)) {
            const t = Reflect.getMetadata("dl-handlers", e);
            Reflect.defineMetadata("dl-handlers", [...t, s], e);
          } else Reflect.defineMetadata("dl-handlers", [s], e);
          t(s);
        };
      }
      class Fs {
        constructor(e) {
          (this.publishEvent = (e, t, s, r) => this.broker.publishEvent(e, t, s, r)), (this.broker = new T(e));
          const t = e
            .getModuleNames()
            .reduce(
              (t, s) => ({ ...t, [s]: Object.keys(e.appDefinition[s].api.events).reduce((e, t) => ((e[t] = []), e), (0, c.Ay)({})) }),
              (0, c.Ay)({})
            );
          this.localSubscribersMap = Object.keys(e.subscriptions)
            .map((e) => e)
            .reduce((t, s) => {
              const r = e.subscriptions[s];
              return (
                Object.keys(r)
                  .map((e) => e)
                  .forEach((e) => {
                    const n = r[e] ?? [],
                      a = t[e];
                    n.forEach((e) => {
                      a[e].push(s);
                    });
                  }),
                t
              );
            }, t);
        }
        connect(e) {
          const { localSubscribersMap: t, broker: s } = this;
          return s.connect({
            onLocalEvent: async (s, r, n, a, o, i) => {
              const c = t[s][n];
              await Promise.all(
                c.map(async (t) => {
                  await e.onEvent(s, t, n, a, o, i);
                })
              );
            }
          });
        }
      }
      let xs = class {
        constructor(e, t, s) {
          (this.apiName = e), (this.broker = t), (this.context = s);
        }
        sendEvent(e, t) {
          return this.broker.publishEvent(this.apiName, e, t, this.context);
        }
      };
      xs = (0, l.__decorate)([h(), (0, l.__param)(0, (0, p.Inject)(ot)), (0, l.__metadata)("design:paramtypes", [Object, T, f.f])], xs);
      let Rs = class {
        constructor(e, t) {
          (this.apiName = e), (this.broker = t);
        }
        sendEvent(e, t, s) {
          return this.broker.publishEvent(this.apiName, e, t, s ?? new f.f());
        }
      };
      function Ds(e) {
        const t = (e) => ({
            build: () => e,
            withMockedCommand: (s, r) => ((e.commands[s] = r), t(e)),
            withMockedQuery: (s, r) => ((e.queries[s] = r), t(e))
          }),
          s = { commands: {}, queries: {} };
        for (const t of Object.keys(e.commands))
          s.commands[t] = jest.fn(() => {
            throw new Error(`command ${t} of module ${e.name} is called but not mocked`);
          });
        for (const t of Object.keys(e.queries))
          s.queries[t] = jest.fn(() => {
            throw new Error(`query ${t} of module ${e.name} is called but not mocked`);
          });
        return t(s);
      }
      Rs = (0, l.__decorate)([h(), (0, l.__param)(0, (0, p.Inject)(ot)), (0, l.__metadata)("design:paramtypes", [Object, T])], Rs);
      const Ps = () => {
        const e = (t, s) => {
          const r = new g.$({ appDefinition: t, channels: {}, channelsListener: tt.y, currentNode: "", subscriptions: {} }),
            n = new u.d(r);
          let a;
          const o = async () => {
            if (a) return a;
            const e = s.build(),
              t = n.connect({
                onCommand: (t, s, r) => {
                  if (!(t in e)) throw new Error(`${t} is not mocked`);
                  return e[t].commands[s](r);
                },
                onQuery: (t, s, r) => {
                  if (!(t in e)) throw new Error(`${t} is not mocked`);
                  return e[t].queries[s](r);
                }
              });
            return (a = await t.start()), a;
          };
          return {
            buildClient: async (e) => {
              const t = new S(n, r, e ?? new f.f());
              return await o(), t;
            },
            buildContextlessClient: async () => {
              const e = new b(r, n);
              return await o(), e;
            },
            withMock: (r, n) => {
              const a = { ...t, ...(0, c.Ay)({ [r.name]: { api: r, main: "", queryOnly: [] } }) },
                o = s.withModule(r, n);
              return e(a, o);
            }
          };
        };
        return e(
          {},
          (function () {
            const e = new Map(),
              t = {
                withModule: (s, r) => {
                  const n = s.name;
                  if (void 0 === r) {
                    const r = Ds(s).build();
                    return e.set(n, r), t;
                  }
                  if ("function" == typeof r) {
                    const a = Ds(s);
                    return e.set(n, r(a).build()), t;
                  }
                  return e.set(n, r), t;
                },
                build: (t) => {
                  const s = t ? Object.keys(t) : [...e.keys()];
                  return Array.from(s).reduce(
                    (s, r) => ({ ...s, [r]: e.get(r) ?? Ds(t ? t[r].api : { name: "", commands: {}, events: {}, queries: {} }).build() }),
                    {}
                  );
                }
              };
            return t;
          })()
        );
      };
      var ks = s(373880),
        Ms = s(27149);
      async function Os(e, t = 1e4) {
        if (!(0, Ms.b)(e)) throw new Error("Error in getQueryValue: the argument is not an observable");
        try {
          return await (0, o.z)(e.pipe((0, ve.V)({ first: t })));
        } catch (e) {
          throw new Error("Error in getQueryValue: " + e);
        }
      }
      const Ls = (e) => !(!e || "object" != typeof e) && "userName" in e;
      class Gs extends hs({
        initialValue: { userName: void 0 },
        persist: !1,
        scope: O.F.Device,
        storeName: "active-user-store",
        storeTypeGuard: Ls,
        capacity: vs._001KB
      }) {}
      let Bs = class extends xs {};
      Bs = (0, l.__decorate)([h()], Bs);
      let qs = class {
        constructor(e) {
          this.activeUserStore = e;
        }
        execute() {
          return this.activeUserStore.state$.pipe(
            (0, w.U)((e) => e.userName),
            (0, ls.x)(),
            (0, w.U)((e) => (0, G.Vp)({ userName: e }))
          );
        }
      };
      qs = (0, l.__decorate)([Ts(B.p), (0, l.__metadata)("design:paramtypes", [Gs])], qs);
      let Vs = class {
        constructor(e, t) {
          (this.activeUserStore = e), (this.eventEmitter = t);
        }
        async execute({ body: { userName: e } }) {
          return (
            await this.activeUserStore.set({ userName: e }),
            e && this.eventEmitter.sendEvent("activeUserSet", { userName: e }),
            (0, G.Vp)(void 0)
          );
        }
      };
      Vs = (0, l.__decorate)([os(B.r$), (0, l.__metadata)("design:paramtypes", [Gs, Bs])], Vs);
      let Hs = class {};
      Hs = (0, l.__decorate)(
        [
          bt({
            api: B.t$,
            handlers: { commands: { setActiveUser: Vs }, events: {}, queries: { activeUser: qs } },
            stores: [Gs],
            providers: [Bs]
          })
        ],
        Hs
      );
      const js = new N.N();
      async function Ks(e, t) {
        const s = new e("mockedModuleName", e.Definition, js, "user", Re(), de, new n());
        return t && (await s.set(t)), s;
      }
      const zs = 16,
        Ws = 0.5,
        Qs = 1.3;
      function $s(e) {
        var t;
        const {
            chunkControl: { decrement: s = Ws, increment: r = Qs, initialSize: n = zs } = { decrement: Ws, increment: Qs, initialSize: zs }
          } = e,
          a = new pt.WU();
        return (
          ((t = class {
            constructor(e, t) {
              (this.repository = e), (this.processor = t);
            }
            async dispatchBatch(e) {
              await a.runExclusive(async () => {
                const t = await this.pushItemsInQueue(e);
                for (; t.queue.length > 0; ) await this.processOneChunkFromQueue(t);
              });
            }
            async pushItemsInQueue(t) {
              const s = await this.repository.getBatchState(e.name),
                r = t.filter((e) => !s.queue.find((t) => t === e));
              return r.length && (s.queue.push(...r), await this.repository.setBatchState(e.name, s)), s;
            }
            async processOneChunkFromQueue(t) {
              const a = (function (e) {
                  const { lastStartedChunkFirstId: t, lastStartedChunkSize: a = n } = e;
                  if (!t) return n;
                  const o = !e.queue.find((e) => e === t);
                  return Math.max(1, o ? Math.ceil(a * r) : Math.floor(a * s));
                })(t),
                o = Math.min(a, t.queue.length);
              if (!o) throw new Error("Should have something to process");
              await this.repository.setBatchState(e.name, { ...t, lastStartedChunkSize: o, lastStartedChunkFirstId: t.queue[0] });
              const i = t.queue.splice(0, o);
              await this.processor.processChunk(i), await this.repository.setBatchState(e.name, t);
            }
          }).Definition = e),
          t
        );
      }
      var Ys = s(625859);
      let Xs = class {
        constructor(e, t) {
          (this.url = e), (this.fetcher = t), (this.value$ = (0, C.D)((0, Ys.P)(() => this.get())));
        }
        async load() {
          await this.get();
        }
        async get() {
          const { value: e } = this;
          if (e) return e;
          const t = await this.fetcher.fetch(this.url),
            s = await this.loadResource(t);
          return (this.value = s), s;
        }
      };
      Xs = (0, l.__decorate)([h(), (0, l.__metadata)("design:paramtypes", [String, he.X])], Xs);
    },
    158649: (e, t, s) => {
      s.d(t, { N: () => f });
      var r = s(6136),
        n = s(198187),
        a = s(915023),
        o = s(530523),
        i = s(116433),
        c = s(489618),
        d = s(537182),
        u = s(317350),
        l = s(897280),
        p = s(442946),
        m = s(386924),
        h = s(102049),
        v = s(536414),
        g = s(507074),
        y = s(769183);
      class f {
        constructor(e, t = 3e4) {
          const s = e.status$.pipe((0, r.x)());
          let f = !1;
          const S = new n.x(),
            b = S.pipe(
              (0, v.z)(async (r) => {
                const n = (0, y.Z)();
                let v = !1;
                const g = e.messages$.pipe(
                    (0, a.o)(() => !f),
                    (0, o.h)((e) => "acknowledgement" === e.type && e.id === n),
                    (0, i.q)(1),
                    (0, c.V)(t),
                    (0, d.K)(() => u.E),
                    (0, l.d)(1)
                  ),
                  S = g.subscribe(() => {
                    (v = !0), S.unsubscribe();
                  }),
                  b = s
                    .pipe(
                      (0, a.o)(() => !v && !f),
                      (0, p.z)(() => (0, m.D)(e.sendMessage({ type: "send", id: n, message: r.message })))
                    )
                    .subscribe();
                try {
                  await (0, h.n)(g), b.unsubscribe(), r.resolve();
                } catch (e) {
                  b.unsubscribe(), r.reject(e);
                }
              })
            ).subscribe();
          (this.stop = () => ((f = !0), b.unsubscribe(), e.stop())),
            (this.send = (e) =>
              new Promise((t, s) => {
                const r = { message: e, resolve: t, reject: s };
                S.next(r);
              })),
            (this.channelState$ = e.status$),
            (this.receivedMessages$ = e.messages$.pipe(
              (0, o.h)((e) => "send" === e.type),
              (0, v.z)(async (t) => {
                if ("send" === t.type) return await e.sendMessage({ type: "acknowledgement", id: t.id }), t.message;
              }),
              (0, g.B)()
            ));
        }
      }
    },
    665488: (e, t, s) => {
      s.d(t, { U: () => _ });
      var r = s(724966),
        n = s(102049),
        a = s(530523),
        o = s(536414),
        i = s(386924),
        c = s(87065),
        d = s(537182),
        u = s(69885),
        l = s(464659);
      const p = (e) => !(!e || "object" != typeof e) && "unSubscription" === e.type,
        m = (e, t, s) => {
          const r = new Set(s),
            n = new Map(),
            m = t.receivedMessages$.pipe((0, a.h)(p)).subscribe((e) => {
              const t = n.get(e.id);
              t?.unsubscribe(), n.delete(e.id);
            }),
            h = t.receivedMessages$
              .pipe(
                (0, a.h)((e) => {
                  return (
                    !(!(t = e) || "object" != typeof t) && "start" === t.type && r.has(e.definition.destination) && !n.has(e.definition.id)
                  );
                  var t;
                }),
                (0, o.z)((e) =>
                  (0, i.D)(
                    (async (e) => (
                      n.set(e.definition.id, { unsubscribe: () => {} }),
                      await t.send({ type: "initial-acknowledgement", id: e.definition.id }),
                      e
                    ))(e)
                  )
                )
              )
              .subscribe((s) => {
                const r = s.definition.destination,
                  a = e(r, s.definition.content, s.metadata),
                  p = { type: "end", id: s.definition.id },
                  m = a
                    .pipe(
                      (0, c.U)((e) => ({ id: s.definition.id, data: e, type: "data" })),
                      (0, d.K)((e) => {
                        const t = { id: s.definition.id, type: "error", errorMessage: e.message };
                        return (0, u.of)(t);
                      }),
                      (0, l.l)(p),
                      (0, o.z)((e) => (0, i.D)(t.send(e)))
                    )
                    .subscribe();
                n.set(s.definition.id, {
                  unsubscribe: () => {
                    m.unsubscribe();
                  }
                });
              });
          return {
            unsubscribe: () => {
              h.unsubscribe(), m.unsubscribe();
              for (const e of n.values()) e.unsubscribe();
            }
          };
        };
      var h = s(227257),
        v = s(385390),
        g = s(915023),
        y = s(6136),
        f = s(442946),
        S = s(160399),
        b = s(915572),
        C = s(769183),
        w = s(828489);
      class _ {
        constructor(e) {
          this.stopped$ = new r.X(!1);
          const t = { routes: (0, w.Ay)({}) };
          this.routes = (() => {
            const { routes: s } = Object.keys(e).reduce((t, s) => {
              const r = e[s];
              if (
                ("local" === r.type &&
                  (t.routes[s] = { send: r.onMessage, trySend: async (...e) => (await (0, n.n)(r.onMessage(...e)), !0) }),
                "remote" === r.type)
              ) {
                const e = ((e, t) => {
                  const s = (s, r, n) => {
                    const o = { content: r, destination: String(s), id: (0, C.Z)() };
                    return new h.y((s) => {
                      let r = { type: "start", definition: o, metadata: n };
                      const d = (0, v.a)({ message: e.receivedMessages$, stopped: t })
                          .pipe(
                            (0, g.o)(({ stopped: e }) => !e),
                            (0, c.U)(({ message: e }) => e)
                          )
                          .subscribe((e) => {
                            var t;
                            (t = e) && "object" == typeof t && "initial-acknowledgement" === t.type && e.id === o.id
                              ? (r = { ...r, metadata: { ...r.metadata, isReminder: !0 } })
                              : ((e) => !(!e || "object" != typeof e) && "data" === e.type)(e) && e.id === o.id
                              ? s.next(e.data)
                              : ((e) => !(!e || "object" != typeof e) && "error" === e.type)(e) && e.id === o.id
                              ? s.error(new Error(e.errorMessage))
                              : ((e) => !(!e || "object" != typeof e) && "end" === e.type)(e) && e.id === o.id && s.complete();
                          }),
                        u = (0, v.a)({
                          sendTimes: e.channelState$.pipe(
                            (0, y.x)(),
                            (0, a.h)((e) => e === b.D.Connected)
                          ),
                          stopped: t
                        })
                          .pipe(
                            (0, g.o)(({ stopped: e }) => !e),
                            (0, f.z)(() => (0, i.D)(e.send(r)))
                          )
                          .subscribe();
                      return () => {
                        e.send({ type: "unSubscription", id: o.id }), u.unsubscribe(), d.unsubscribe();
                      };
                    });
                  };
                  return {
                    send: s,
                    trySend: async (t, r, a) => (await (0, S.z)(e.channelState$)) === b.D.Connected && (await (0, n.n)(s(t, r, a)), !0)
                  };
                })(r.channel, this.stopped$);
                t.routes[s] = e;
              }
              return t;
            }, t);
            return s;
          })();
        }
        connect(e, t) {
          let s = !1;
          return {
            start: () => {
              if (s) throw new Error("Already started");
              s = !0;
              const r = (e) => m((e, t, s) => this.routes[e].send(e, t, s), e, Object.keys(this.routes)),
                n = e.map(r),
                a = new Map(),
                o = t.connectedChannels$.subscribe((e) => {
                  const t = [...a.entries()].filter(([t]) => !(t in e)),
                    s = Object.keys(e).filter((e) => !a.has(e));
                  t.forEach(([e, t]) => {
                    a.delete(e), t.unsubscribe();
                  }),
                    s.forEach((t) => {
                      const s = e[t],
                        n = r(s);
                      a.set(t, n);
                    });
                });
              return Promise.resolve({
                stop: () => ([...n, o, ...a.values()].forEach((e) => e.unsubscribe()), this.stopped$.next(!0), Promise.resolve())
              });
            }
          };
        }
        sendMessage(e, t) {
          return this.routes[e].send(e, t, { isReminder: !1 });
        }
        trySendMessage(e, t) {
          return this.routes[e].trySend(e, t, { isReminder: !1 });
        }
      }
    },
    915572: (e, t, s) => {
      s.d(t, { D: () => r, q: () => o });
      var r,
        n = s(198187),
        a = s(724966);
      !(function (e) {
        (e.Connected = "Connected"), (e.Disconnected = "Disconnected");
      })(r || (r = {}));
      class o {
        constructor() {
          (this.sentMessages$ = new n.x()),
            (this.receivedMessagesSubject$ = new n.x()),
            (this.channelStateSubject$ = new a.X(r.Disconnected));
        }
        send(e) {
          if (this.channelStateSubject$.value !== r.Connected) throw new Error("Channel is not connected");
          return this.sentMessages$.next(e), Promise.resolve();
        }
        get receivedMessages$() {
          return this.receivedMessagesSubject$;
        }
        get channelState$() {
          return this.channelStateSubject$;
        }
        stop() {
          this.receivedMessages$.complete();
        }
        connect(e) {
          if (this.channelStateSubject$.value === r.Connected) return { disconnect: () => {} };
          const t = this.sentMessages$.subscribe((t) => {
            e.receivedMessages$.next(t);
          });
          return (
            this.channelState$.next(r.Connected),
            {
              disconnect: () => {
                this.channelState$.next(r.Disconnected), t.unsubscribe();
              }
            }
          );
        }
      }
    },
    554452: (e, t, s) => {
      s.d(t, { v: () => a, y: () => n });
      var r = s(724966);
      const n = { connectedChannels$: new r.X({}) },
        a = (e) => ({ connectedChannels$: new r.X({ channel: e }) });
    },
    645244: (e, t, s) => {
      s.d(t, { F: () => n, k: () => r });
      const r = ({ channelName: e, message: t }) => ({ channelName: e, message: t, type: "graphene-message" }),
        n = (e) => !(!e || "object" != typeof e) && "graphene-message" === e.type;
    },
    616855: (e, t, s) => {
      s.d(t, { $: () => r });
      class r {
        constructor(e) {
          (this.appDefinition = e.appDefinition),
            (this.currentNode = e.currentNode),
            (this.channels = e.channels),
            (this.subscriptions = e.subscriptions),
            (this.channelsListener = e.channelsListener);
        }
        getNodeList() {
          return this.currentNode ? [...this.getRemoteNodeList(), this.currentNode] : this.getRemoteNodeList();
        }
        getRemoteNodeList() {
          return Object.keys(this.channels);
        }
        getModuleNames() {
          return Object.keys(this.appDefinition);
        }
      }
    },
    921869: (e, t, s) => {
      s.d(t, { f: () => n, l: () => r });
      const r = { UseCaseId: "USE_CASE_ID", UserName: "USER_NAME" };
      class n {
        constructor() {
          this.entries = {};
        }
        get(e) {
          return this.entries[e];
        }
        getOrDefault(e, t) {
          return this.entries[e] ?? t;
        }
        getOrFail(e) {
          if (!this.has(e)) throw new Error(`No ${e} in request context`);
          return this.entries[e];
        }
        has(e) {
          return e in this.entries;
        }
        async getOrAdd(e, t) {
          return this.has(e) || this.set(e, await t()), this.get(e);
        }
        getOrAddSync(e, t) {
          return this.has(e) || this.set(e, t()), this.get(e);
        }
        set(e, t) {
          this.entries[e] = t;
        }
        toSerializable() {
          return this.entries;
        }
        static fromSerializable(e) {
          const t = new n();
          for (const [s, r] of Object.entries(e)) t.entries[s] = r;
          return t;
        }
        clone() {
          return n.fromSerializable(JSON.parse(JSON.stringify(this.toSerializable())));
        }
        withValue(e, t) {
          return this.set(e, t), this;
        }
      }
    },
    475994: (e, t, s) => {
      s.d(t, { W: () => n, X: () => r });
      class r {}
      class n extends r {
        constructor(e) {
          super(), (this.files = e);
        }
        fetch(e) {
          return e in this.files ? Promise.resolve(this.files[e]) : Promise.reject(new Error("404 not found :" + e));
        }
      }
    },
    383081: (e, t, s) => {
      s.d(t, { N: () => o, G: () => a });
      var r = s(724966);
      class n {
        constructor(e) {
          (this.initValue = e), (this.state$ = new r.X(e));
        }
        set(e) {
          return this.state$.next(e), Promise.resolve();
        }
        init(e) {
          return this.state$.next(e), Promise.resolve();
        }
        stop() {
          this.state$.complete();
        }
        getState() {
          return Promise.resolve(this.state$.value);
        }
        clear() {
          return this.state$.next(this.initValue), Promise.resolve();
        }
        clearStorage() {
          return Promise.resolve();
        }
        update(e) {
          return this.set(e(this.state$.value)), Promise.resolve();
        }
        persist() {
          return Promise.resolve();
        }
        load() {
          return Promise.resolve();
        }
      }
      class a {}
      class o extends a {
        createUserScopedInfrastructure() {
          return new n({ timestamp: void 0 });
        }
        createDeviceScopedInfrastructure() {
          return new n({ timestamp: void 0 });
        }
      }
    },
    369594: (e, t, s) => {
      s.d(t, { R_: () => n, _C: () => a, ql: () => r });
      class r {
        run() {
          return Promise.resolve();
        }
        isRunnable() {
          return !1;
        }
      }
      class n {}
      class a extends n {
        constructor(e) {
          super(), (this.alarm$ = e.createObservableTimer(6e4, 6e4));
        }
      }
    },
    137204: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.analyticsApi = t.TrackPageViewCommand = t.TrackEventCommand = void 0);
      const r = s(285888),
        n = s(470986);
      class a extends (0, n.defineCommand)({ scope: n.UseCaseScope.Device }) {}
      t.TrackEventCommand = a;
      class o extends (0, n.defineCommand)({ scope: n.UseCaseScope.Device }) {}
      (t.TrackPageViewCommand = o),
        (t.analyticsApi = (0, r.defineModuleApi)({
          commands: { TrackEventCommand: a, TrackPageViewCommand: o },
          events: {},
          name: "analytics",
          queries: {}
        }));
    },
    207022: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    852389: function (e, t, s) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, r) {
                void 0 === r && (r = s);
                var n = Object.getOwnPropertyDescriptor(t, s);
                (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, r, n);
              }
            : function (e, t, s, r) {
                void 0 === r && (r = s), (e[r] = t[s]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(s(137204), t), n(s(207022), t);
    },
    182142: (e, t) => {
      function s(e) {
        const t = (e) => ({
            build: () => e,
            withMockedCommand: (s, r) => ((e.commands[s] = r), t(e)),
            withMockedQuery: (s, r) => ((e.queries[s] = r), t(e))
          }),
          s = { commands: {}, queries: {} };
        for (const t of Object.keys(e.commands))
          s.commands[t] = jest.fn(() => {
            throw new Error(`command ${t} of module ${e.name} is called but not mocked`);
          });
        for (const t of Object.keys(e.queries))
          s.queries[t] = jest.fn(() => {
            throw new Error(`query ${t} of module ${e.name} is called but not mocked`);
          });
        return t(s);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.appClientMockBuilder = void 0),
        (t.appClientMockBuilder = function () {
          const e = new Map(),
            t = {
              withModule: (r, n) => {
                const a = r.name;
                if (void 0 === n) {
                  const n = s(r).build();
                  return e.set(a, n), t;
                }
                if ("function" == typeof n) {
                  const o = s(r);
                  return e.set(a, n(o).build()), t;
                }
                return e.set(a, n), t;
              },
              build: (t) => {
                const r = t ? Object.keys(t) : [...e.keys()];
                return Array.from(r).reduce(
                  (r, n) => ({ ...r, [n]: e.get(n) ?? s(t ? t[n].api : { name: "", commands: {}, events: {}, queries: {} }).build() }),
                  {}
                );
              }
            };
          return t;
        });
    },
    967202: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.appClientMockBuilder = void 0);
      var r = s(182142);
      Object.defineProperty(t, "appClientMockBuilder", {
        enumerable: !0,
        get: function () {
          return r.appClientMockBuilder;
        }
      });
    },
    154072: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CommandMessage = void 0);
      const r = s(898653);
      class n extends r.RequestMessage {
        constructor(e) {
          super(), (this.body = e);
        }
      }
      t.CommandMessage = n;
    },
    898653: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UseCaseScope = t.RequestMessage = void 0),
        (t.RequestMessage = class {}),
        (function (e) {
          (e.User = "user"), (e.Device = "device");
        })(t.UseCaseScope || (t.UseCaseScope = {}));
    },
    485088: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EMPTY_QUERY_RESULT = t.PAGINATION_START_PAGE_INDEX = t.FilterOperationName = void 0),
        (function (e) {
          (e.Equals = "equals"), (e.Differs = "differs"), (e.Matches = "matches"), (e.In = "in"), (e.Contains = "contains");
        })(t.FilterOperationName || (t.FilterOperationName = {})),
        (t.PAGINATION_START_PAGE_INDEX = 1),
        (t.EMPTY_QUERY_RESULT = { items: [], itemCount: 0, page: t.PAGINATION_START_PAGE_INDEX, pageCount: 1 });
    },
    477939: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.defineCarbonCommand = t.defineCommand = void 0);
      const r = s(154072),
        n = s(898653);
      (t.defineCommand = (...[e = { scope: n.UseCaseScope.User }]) => {
        var t;
        return ((t = class extends r.CommandMessage {}).metadata = e), t;
      }),
        (t.defineCarbonCommand = (e = { scope: n.UseCaseScope.User }) => {
          var t;
          return ((t = class extends r.CommandMessage {}).metadata = e), t;
        });
    },
    201941: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.defineQuery = void 0);
      const r = s(70522),
        n = s(898653);
      t.defineQuery = (e = { scope: n.UseCaseScope.User }) => {
        var t;
        return ((t = class extends r.QueryMessage {}).metadata = e), t;
      };
    },
    470986: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defineQuery =
          t.defineCarbonCommand =
          t.defineCommand =
          t.UseCaseScope =
          t.FilterOperationName =
          t.EMPTY_QUERY_RESULT =
          t.PAGINATION_START_PAGE_INDEX =
          t.QueryMessage =
          t.CommandMessage =
            void 0);
      var r = s(154072);
      Object.defineProperty(t, "CommandMessage", {
        enumerable: !0,
        get: function () {
          return r.CommandMessage;
        }
      });
      var n = s(70522);
      Object.defineProperty(t, "QueryMessage", {
        enumerable: !0,
        get: function () {
          return n.QueryMessage;
        }
      });
      var a = s(485088);
      Object.defineProperty(t, "PAGINATION_START_PAGE_INDEX", {
        enumerable: !0,
        get: function () {
          return a.PAGINATION_START_PAGE_INDEX;
        }
      });
      var o = s(485088);
      Object.defineProperty(t, "EMPTY_QUERY_RESULT", {
        enumerable: !0,
        get: function () {
          return o.EMPTY_QUERY_RESULT;
        }
      }),
        Object.defineProperty(t, "FilterOperationName", {
          enumerable: !0,
          get: function () {
            return o.FilterOperationName;
          }
        });
      var i = s(898653);
      Object.defineProperty(t, "UseCaseScope", {
        enumerable: !0,
        get: function () {
          return i.UseCaseScope;
        }
      });
      var c = s(477939);
      Object.defineProperty(t, "defineCommand", {
        enumerable: !0,
        get: function () {
          return c.defineCommand;
        }
      }),
        Object.defineProperty(t, "defineCarbonCommand", {
          enumerable: !0,
          get: function () {
            return c.defineCarbonCommand;
          }
        });
      var d = s(201941);
      Object.defineProperty(t, "defineQuery", {
        enumerable: !0,
        get: function () {
          return d.defineQuery;
        }
      });
    },
    70522: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.QueryMessage = void 0);
      const r = s(898653);
      class n extends r.RequestMessage {
        constructor(e) {
          super(), (this.body = e);
        }
      }
      t.QueryMessage = n;
    },
    249631: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.EventMessage = t.defineEvent = void 0);
      var r = s(484776);
      Object.defineProperty(t, "defineEvent", {
        enumerable: !0,
        get: function () {
          return r.defineEvent;
        }
      }),
        Object.defineProperty(t, "EventMessage", {
          enumerable: !0,
          get: function () {
            return r.EventMessage;
          }
        });
    },
    484776: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.defineEvent = t.EventMessage = void 0);
      const r = s(898653);
      class n {
        constructor(e) {
          this.body = e;
        }
      }
      (t.EventMessage = n),
        (t.defineEvent = (e = { scope: r.UseCaseScope.User }) => {
          var t;
          return ((t = class extends n {}).metadata = e), t;
        });
    },
    890693: function (e, t, s) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, r) {
                void 0 === r && (r = s);
                var n = Object.getOwnPropertyDescriptor(t, s);
                (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, r, n);
              }
            : function (e, t, s, r) {
                void 0 === r && (r = s), (e[r] = t[s]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n(s(852389), t),
        n(s(470986), t),
        n(s(735079), t),
        n(s(285888), t),
        n(s(249631), t),
        n(s(967202), t);
    },
    735079: function (e, t, s) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, r) {
                void 0 === r && (r = s);
                var n = Object.getOwnPropertyDescriptor(t, s);
                (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, r, n);
              }
            : function (e, t, s, r) {
                void 0 === r && (r = s), (e[r] = t[s]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(s(536518), t);
    },
    682397: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.taskTrackingApi = void 0);
      const r = s(285888),
        n = s(496609),
        a = s(507797);
      t.taskTrackingApi = (0, r.defineModuleApi)({
        name: "taskTracking",
        commands: { startTaskTracking: n.StartTaskTrackingCommand, terminateTaskTracking: a.TerminateTaskTrackingCommand },
        events: {},
        queries: {}
      });
    },
    939948: function (e, t, s) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, r) {
                void 0 === r && (r = s);
                var n = Object.getOwnPropertyDescriptor(t, s);
                (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, r, n);
              }
            : function (e, t, s, r) {
                void 0 === r && (r = s), (e[r] = t[s]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(s(496609), t), n(s(507797), t);
    },
    496609: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.StartTaskTrackingCommand = void 0);
      const r = s(470986);
      class n extends (0, r.defineCommand)({ scope: r.UseCaseScope.Device }) {}
      t.StartTaskTrackingCommand = n;
    },
    507797: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.TerminateTaskTrackingCommand = void 0);
      const r = s(470986);
      class n extends (0, r.defineCommand)({ scope: r.UseCaseScope.Device }) {}
      t.TerminateTaskTrackingCommand = n;
    },
    536518: function (e, t, s) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, r) {
                void 0 === r && (r = s);
                var n = Object.getOwnPropertyDescriptor(t, s);
                (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, r, n);
              }
            : function (e, t, s, r) {
                void 0 === r && (r = s), (e[r] = t[s]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.taskTrackingApi = void 0);
      var a = s(682397);
      Object.defineProperty(t, "taskTrackingApi", {
        enumerable: !0,
        get: function () {
          return a.taskTrackingApi;
        }
      }),
        n(s(939948), t);
    },
    17286: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    724164: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.featureFlipsApi = t.UserFeatureFlipQuery = t.UserFeatureFlipsQuery = void 0);
      const r = s(470986),
        n = s(608369);
      class a extends (0, r.defineQuery)({ scope: r.UseCaseScope.User }) {}
      t.UserFeatureFlipsQuery = a;
      class o extends (0, r.defineQuery)({ scope: r.UseCaseScope.Device }) {}
      (t.UserFeatureFlipQuery = o),
        (t.featureFlipsApi = (0, n.defineModuleApi)({
          commands: {},
          events: {},
          name: "featureFlips",
          queries: { UserFeatureFlipsQuery: a, UserFeatureFlipQuery: o }
        }));
    },
    171057: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.FeatureFlipsClient = void 0);
      const r = s(623767),
        n = s(724164);
      class a extends (0, r.defineModuleClient)(n.featureFlipsApi) {}
      (t.FeatureFlipsClient = a), (0, r.registerModuleClient)(n.featureFlipsApi, a);
    },
    285888: function (e, t, s) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, r) {
                void 0 === r && (r = s);
                var n = Object.getOwnPropertyDescriptor(t, s);
                (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, r, n);
              }
            : function (e, t, s, r) {
                void 0 === r && (r = s), (e[r] = t[s]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n(s(608369), t),
        n(s(521697), t),
        n(s(17286), t),
        n(s(306964), t),
        n(s(623767), t),
        n(s(724164), t),
        n(s(171057), t),
        n(s(27646), t);
    },
    623767: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.registerModuleClient = t.defineModuleClient = void 0),
        (t.defineModuleClient = function (e) {
          var t;
          return (
            ((t = class {
              get commands() {
                throw new Error("Not implemented");
              }
              get queries() {
                throw new Error("Not implemented");
              }
            }).api = e),
            t
          );
        }),
        (t.registerModuleClient = function (e, t) {
          e.ClientClass = t;
        });
    },
    608369: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.defineModuleApi = void 0);
      const s = (e, t) =>
        Object.entries(e).reduce(
          (e, [s, r]) => (
            (e[((e, t) => (e.endsWith(t) ? e.charAt(0).toLowerCase() + e.substring(1, e.length - t.length) : e))(s, t)] = r), e
          ),
          {}
        );
      t.defineModuleApi = (e) => ({
        name: e.name,
        commands: s(e.commands, "Command"),
        queries: s(e.queries, "Query"),
        events: s(e.events, "Event")
      });
    },
    306964: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.requestContextApi = t.ActiveUserSetEvent = t.SetActiveUserCommand = t.ActiveUserQuery = void 0);
      const r = s(470986),
        n = s(249631),
        a = s(608369);
      class o extends (0, r.defineQuery)({ scope: r.UseCaseScope.Device }) {}
      t.ActiveUserQuery = o;
      class i extends (0, r.defineCommand)({ scope: r.UseCaseScope.Device }) {}
      t.SetActiveUserCommand = i;
      class c extends (0, n.defineEvent)({ scope: r.UseCaseScope.User }) {}
      (t.ActiveUserSetEvent = c),
        (t.requestContextApi = (0, a.defineModuleApi)({
          commands: { SetActiveUserCommand: i },
          events: { activeUserSet: c },
          name: "requestContext",
          queries: { ActiveUserQuery: o }
        }));
    },
    27646: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RequestContextClient = void 0);
      const r = s(623767),
        n = s(306964);
      class a extends (0, r.defineModuleClient)(n.requestContextApi) {}
      (t.RequestContextClient = a), (0, r.registerModuleClient)(n.requestContextApi, a);
    },
    521697: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NullModuleApi = void 0),
        (t.NullModuleApi = { name: "api", commands: {}, events: {}, queries: {} });
    },
    520587: (e, t, s) => {
      s.d(t, { Yu: () => c });
      var r = s(486952),
        n = s(574354),
        a = s(125029);
      class o extends (0, n.g)({ scope: a.F.Device }) {}
      class i extends (0, n.g)({ scope: a.F.Device }) {}
      const c = (0, r.Q)({ commands: { TrackEventCommand: o, TrackPageViewCommand: i }, events: {}, name: "analytics", queries: {} });
    },
    125029: (e, t, s) => {
      s.d(t, { F: () => n, z: () => r });
      class r {}
      var n;
      !(function (e) {
        (e.User = "user"), (e.Device = "device");
      })(n || (n = {}));
    },
    574354: (e, t, s) => {
      s.d(t, { g: () => a });
      var r = s(125029);
      class n extends r.z {
        constructor(e) {
          super(), (this.body = e);
        }
      }
      const a = (...[e = { scope: r.F.User }]) => {
        var t;
        return ((t = class extends n {}).metadata = e), t;
      };
    },
    999059: (e, t, s) => {
      s.d(t, { k: () => a });
      var r = s(125029);
      class n extends r.z {
        constructor(e) {
          super(), (this.body = e);
        }
      }
      const a = (e = { scope: r.F.User }) => {
        var t;
        return ((t = class extends n {}).metadata = e), t;
      };
    },
    188885: (e, t, s) => {
      s.d(t, { d: () => a });
      var r = s(125029);
      class n {
        constructor(e) {
          this.body = e;
        }
      }
      const a = (e = { scope: r.F.User }) => {
        var t;
        return ((t = class extends n {}).metadata = e), t;
      };
    },
    249329: (e, t, s) => {
      s.d(t, { e: () => o });
      var r = s(486952),
        n = s(542339),
        a = s(829876);
      const o = (0, r.Q)({
        name: "taskTracking",
        commands: { startTaskTracking: n.g, terminateTaskTracking: a.y },
        events: {},
        queries: {}
      });
    },
    542339: (e, t, s) => {
      s.d(t, { g: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.Device }) {}
    },
    829876: (e, t, s) => {
      s.d(t, { y: () => a });
      var r = s(574354),
        n = s(125029);
      class a extends (0, r.g)({ scope: n.F.Device }) {}
    },
    970493: (e, t, s) => {
      s.d(t, { cV: () => c });
      var r = s(999059),
        n = s(125029),
        a = s(486952);
      class o extends (0, r.k)({ scope: n.F.User }) {}
      class i extends (0, r.k)({ scope: n.F.Device }) {}
      const c = (0, a.Q)({
        commands: {},
        events: {},
        name: "featureFlips",
        queries: { UserFeatureFlipsQuery: o, UserFeatureFlipQuery: i }
      });
    },
    767837: (e, t, s) => {
      function r(e) {
        var t;
        return (
          ((t = class {
            get commands() {
              throw new Error("Not implemented");
            }
            get queries() {
              throw new Error("Not implemented");
            }
          }).api = e),
          t
        );
      }
      function n(e, t) {
        e.ClientClass = t;
      }
      s.d(t, { E: () => r, K: () => n });
    },
    486952: (e, t, s) => {
      s.d(t, { Q: () => n });
      const r = (e, t) =>
          Object.entries(e).reduce(
            (e, [s, r]) => (
              (e[((e, t) => (e.endsWith(t) ? e.charAt(0).toLowerCase() + e.substring(1, e.length - t.length) : e))(s, t)] = r), e
            ),
            {}
          ),
        n = (e) => ({ name: e.name, commands: r(e.commands, "Command"), queries: r(e.queries, "Query"), events: r(e.events, "Event") });
    },
    208987: (e, t, s) => {
      s.d(t, { p: () => c, r$: () => d, t$: () => l });
      var r = s(999059),
        n = s(125029),
        a = s(574354),
        o = s(188885),
        i = s(486952);
      class c extends (0, r.k)({ scope: n.F.Device }) {}
      class d extends (0, a.g)({ scope: n.F.Device }) {}
      class u extends (0, o.d)({ scope: n.F.User }) {}
      const l = (0, i.Q)({
        commands: { SetActiveUserCommand: d },
        events: { activeUserSet: u },
        name: "requestContext",
        queries: { ActiveUserQuery: c }
      });
    },
    65255: (e, t, s) => {
      s.d(t, { w: () => r });
      const r = {
        AuthsyncExtensionArkRelease: "authsync_extension_ark_release",
        B2CWebPostTrialBanner: "b2c_web_postTrialBanner",
        B2CRestrictPasswordFreePlanPhase1: "b2c_web_restrict_password_free_plan_phase1",
        B2CRestrictPasswordFreePlanPhase2: "b2c_web_restrict_password_free_plan_phase2",
        B2CRestrictPasswordFreePlan: "b2c_web_restrict_password_free_plan_dev",
        BBCOM238Duo: "BBCOM-238-duo",
        CollectionsPageEnabled: "vault_web_collectionpage_dev",
        SAEXSendSharing: "SAEXSendSharing",
        DarkwebMonitoringWebRelease: "darkwebMonitoringWebRelease",
        DwiMultipleDomainsProd: "dwi_multiple_domains_prod",
        DisableSecureNotes: "disableSecureNotes",
        EcommerceWebOfferToExtendPhase1: "ecommerce_web_offerToExtend_phase1",
        EcommerceWebChromeratingV2: "ecommerce_web_chromerating_V2",
        EcommerceWebPaywallUpdate: "ecommerce_web_paywall_update",
        EcommerceWebSadPathDev: "ecommerce_web_cancel_subscription_flow_dev",
        EcommerceWebB2BDiscontinuationDev: "ecommerce_web_b2bDiscontinuation_dev",
        EcommerceWebB2BDiscontinuationPhase1: "ecommerce_web_b2bDiscontinuation_phase1",
        EcommerceWebB2BDiscontinuationPhase2: "ecommerce_web_b2bDiscontinuation_phase2",
        EcommerceWebReferralPageUpdate: "ecommerce_web_referralpage_update",
        GrowthproductDSLPaywallDemogorgon: "growthproduct_DSLPaywall_demogorgon",
        ImsWebWeakMpProd: "ims_web_weak_mp_prod",
        ItadminSAEXCryptoMigrationPhase3V1: "itadmin_SAEX_CryptoMigration_Phase3_v1",
        ItadminTacEncryptionserviceSSOmigrationReset: "itadmin_tac_encryptionservice_SSOmigration_reset",
        ItadminTacPhonesupport: "itadmin_tac_phonesupport",
        OnboardingWebTeamsignuppage: "onboarding_web_teamsignuppage",
        PasswordHealthWeb: "passwordHealthWeb",
        SaexOnboardingHubAddPasswords: "saexOnboardingHubAddPasswords",
        SaexSecureNoteAttachmentsForrelease: "saex_SecureNoteAttachments_forrelease",
        SharingVaultWebRestrictSharingToTeamDev: "sharingVault_web_restrictSharingToTeam_dev",
        TechWeekWebDisplayLabs: "techWeek_web_displayLabs",
        TechweekWebAttachmentsForIdsV1: "techweek_web_attachmentsForIds_v1",
        TechweekWebExpiredLabelforIDDev: "techweek_web_expiredLabelforID_dev",
        WebplatformWebPrideColors: "webplatform_web_prideColors",
        WebproductExtensionActivateChangeMasterPasswordRelease: "webproduct_extension_ActivateChangeMasterPassword_release",
        WebproductExtensionShowUserConsentOptions: "webproduct_extension_ShowUserConsentOptions",
        SupportMarkdownInSecureNotes: "webproduct_extension_securenotesmarkdown_dev",
        SharingVaultOtpSetupDev: "sharingVault_web_otp_setup_dev",
        SecretManagementDev: "ace_secrets_vault_dev",
        SetupRolloutCtaProd: "setup_rollout_cta_prod"
      };
    },
    810370: (e, t, s) => {
      s.d(t, { s: () => a });
      var r = s(46041);
      function n(e) {
        const t = e.length,
          s = [];
        for (let n = 0; n < t; n += 3)
          s.push(r.T[e[n] >> 2]),
            s.push(r.T[((3 & e[n]) << 4) | (e[n + 1] >> 4)]),
            s.push(r.T[((15 & e[n + 1]) << 2) | (e[n + 2] >> 6)]),
            s.push(r.T[63 & e[n + 2]]);
        return s.join("");
      }
      function a(e, t = r.V) {
        const s = new Uint8Array(e),
          a = s.length,
          o = t % 3,
          i = 0 === o ? t : t + (3 - o),
          c = Math.ceil(a / i);
        let d = "",
          u = -1;
        for (; u++ < c; ) {
          const e = u * i,
            t = u === c - 1 ? a : (u + 1) * i,
            r = n(s.slice(e, t));
          d = d.concat(r);
        }
        return a % 3 == 2 ? d.substring(0, d.length - 1) + "=" : a % 3 == 1 ? d.substring(0, d.length - 2) + "==" : d;
      }
    },
    1971: (e, t, s) => {
      s.d(t, { K: () => n });
      var r = s(810370);
      function n(e) {
        const t = new Uint8Array(e);
        return (0, r.s)(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
    },
    89685: (e, t, s) => {
      s.d(t, { v: () => n });
      const r = Math.pow(2, 14) - 1;
      function n(e) {
        const t = new Uint8Array(e),
          s = t.length;
        let n = "",
          a = r;
        for (let e = 0; e < s; e += a) {
          e + a > s && (a = s - e);
          const r = t.subarray(e, e + a);
          n += String.fromCharCode(...r);
        }
        return n;
      }
    },
    668376: (e, t, s) => {
      s.d(t, { L: () => n });
      var r = s(96785);
      function n(e) {
        const t = new Uint8Array(e),
          s = [];
        for (let e = 0; e < t.byteLength; e++) s[e >>> 2] |= t[e] << (24 - (e % 4) * 8);
        return r.lib.WordArray.create(s, t.byteLength);
      }
    },
    707502: (e, t, s) => {
      s.d(t, { R: () => a });
      var r = s(46041);
      const n = new Uint8Array(256);
      for (let e = 0; e < r.T.length; e++) n[r.T.charCodeAt(e)] = e;
      function a(e) {
        let t = 0.75 * e.length;
        const s = e.length;
        let r,
          a,
          o,
          i,
          c,
          d = 0;
        e.endsWith("=") && (t--, "=" === e[e.length - 2] && t--);
        const u = new ArrayBuffer(t),
          l = new Uint8Array(u);
        for (r = 0; r < s; r += 4)
          (a = n[e.charCodeAt(r)]),
            (o = n[e.charCodeAt(r + 1)]),
            (i = n[e.charCodeAt(r + 2)]),
            (c = n[e.charCodeAt(r + 3)]),
            (l[d++] = (a << 2) | (o >> 4)),
            (l[d++] = ((15 & o) << 4) | (i >> 2)),
            (l[d++] = ((3 & i) << 6) | (63 & c));
        return u;
      }
    },
    560198: (e, t, s) => {
      s.d(t, { N: () => n });
      var r = s(707502);
      function n(e) {
        const t = e.replace(/-/g, "+").replace(/_/g, "/"),
          s = (4 - (t.length % 4)) % 4,
          n = t.padEnd(t.length + s, "=");
        return (0, r.R)(n);
      }
    },
    46041: (e, t, s) => {
      s.d(t, { T: () => n, V: () => r });
      const r = Math.pow(10, 6),
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    },
    407573: (e, t, s) => {
      s.d(t, { i: () => r });
      const r = (e) => {
        const t = e.match(/[\da-f]{2}/gi);
        return t ? new Uint8Array(t.map((e) => parseInt(e, 16))).buffer : new Uint8Array().buffer;
      };
    },
    354066: (e, t, s) => {
      function r(e) {
        const t = new ArrayBuffer(e.length),
          s = new Uint8Array(t);
        for (let t = 0; t < e.length; ++t) s[t] = e.charCodeAt(t);
        return t;
      }
      s.d(t, { u: () => r });
    },
    669806: (e, t, s) => {
      function r(e) {
        const { sigBytes: t, words: s } = e,
          r = new Uint8Array(t);
        let n = 0,
          a = 0;
        for (; n !== t; ) {
          const e = s[a++];
          if (((r[n++] = (4278190080 & e) >>> 24), n === t)) break;
          if (((r[n++] = (16711680 & e) >>> 16), n === t)) break;
          if (((r[n++] = (65280 & e) >>> 8), n === t)) break;
          r[n++] = 255 & e;
        }
        return r.buffer;
      }
      s.d(t, { o: () => r });
    },
    174153: (e, t, s) => {
      s.d(t, { X: () => o });
      var r = s(89685),
        n = s(668376),
        a = s(669806);
      function o(e, t) {
        const s = (0, r.v)(t),
          o = (0, n.L)(e);
        return (0, a.o)(CryptoJS.AES.decrypt(s, o, { mode: CryptoJS.mode.ECB }));
      }
    },
    186381: (e, t, s) => {
      s.d(t, { $: () => a });
      var r = s(22609),
        n = s(983961);
      async function a(e, t, s) {
        const a = await (0, n.Y)(e);
        return self.crypto.subtle.decrypt({ name: r.z, iv: t }, a, s);
      }
    },
    980954: (e, t, s) => {
      s.d(t, { x: () => n });
      var r = s(22609);
      async function n(e, t, s) {
        const n = await self.crypto.subtle.importKey("raw", e, "PBKDF2", !1, ["deriveKey"]),
          a = { name: r.z, length: 256 },
          { iterations: o, hashType: i } = s,
          c = { name: "PBKDF2", salt: t, iterations: o, hash: { name: i } },
          d = await self.crypto.subtle.deriveKey(c, n, a, !0, ["encrypt", "decrypt"]);
        return self.crypto.subtle.exportKey("raw", d);
      }
    },
    983961: (e, t, s) => {
      s.d(t, { Y: () => n });
      var r = s(22609);
      function n(e) {
        return self.crypto.subtle.importKey("raw", e, r.z, !1, ["encrypt", "decrypt"]);
      }
    },
    553788: (e, t, s) => {
      s.r(t),
        s.d(t, {
          BrowserCronSource: () => ht,
          BrowserPortConnector: () => Nt.G,
          BrowserPortListener: () => Tt,
          BrowserPortListenerChannel: () => Dt,
          BufferedEventStream: () => c,
          ExtensionCronSource: () => bt,
          ExtensionLocalStorageInfrastructure: () => ct,
          HttpFetchBackend: () => J,
          IndexDbKeyValueStorage: () => pt,
          IndexDbStorage: () => lt,
          JsonExtensionResourceFetcher: () => o,
          JsonWebAppResourceFetcher: () => n,
          PageToWorkerChannel: () => Et,
          computeHash: () => m,
          computeHashSynchronous: () => h,
          cookieRemoveByDomain: () => fe,
          decryptAes256: () => v.$,
          decryptAesEcb256: () => g.X,
          decryptRsaOaep: () => S,
          deriveKeyArgon2d: () => w,
          deriveKeyPbkdf2: () => _.x,
          disableBrowserNativeAutofill: () => de,
          enablePrivacyService: () => ce,
          encryptAes256: () => U,
          encryptRsaOaep: () => I,
          generateKeyAes256: () => T,
          generateKeyPairRsaOaep: () => F,
          getLanguage: () => re,
          getRandomValues: () => x,
          getShortcutValues: () => Ne,
          isMv3Environment: () => Ct,
          makeStoreInfrastructure: () => at,
          signHmacSha: () => P,
          signRsassaPkcs1: () => k,
          storageLocalItemExists: () => Re,
          unsafeComputeMd5Hash: () => L,
          updateToolbarIcon: () => he,
          verifyHmacSha: () => G,
          verifyRsassaPkcs1: () => B,
          webappClose: () => je,
          webappOpen: () => qe
        });
      var r = s(475994);
      class n extends r.X {
        constructor(e) {
          super(), (this.publicPath = e);
        }
        async fetch(e) {
          return (await fetch(new URL(e.replace(/^\/*/, ""), this.publicPath).href)).json();
        }
      }
      var a = s(92204);
      class o extends r.X {
        async fetch(e) {
          const t = (0, a.A)(e);
          return (await fetch(t)).json();
        }
      }
      var i = s(227257);
      class c {
        constructor(e, t) {
          (this.source = e), (this.filter = t);
          let s = [];
          const r = new Set();
          (this.listener = (e, t) => {
            if (!this.filter(e, t)) return !1;
            r.size ? r.forEach((s) => s.next([e, t])) : s.push([e, t]);
          }),
            (this.events$ = new i.y(
              (e) => (
                r.size || (s.forEach((t) => e.next(t)), (s = [])),
                r.add(e),
                () => {
                  r.delete(e);
                }
              )
            )),
            this.source.addListener(this.listener);
        }
        stop() {
          this.source.removeListener(this.listener);
        }
      }
      var d = s(234064),
        u = s.n(d),
        l = s(668376),
        p = s(669806);
      function m(e, t) {
        if (self.crypto.subtle) return self.crypto.subtle.digest({ name: t }, e);
        if ("SHA-1" === t) {
          const t = (0, l.L)(e),
            s = (0, p.o)(u()(t));
          return Promise.resolve(s);
        }
        return Promise.reject(new Error("Unsupported hash method"));
      }
      function h(e, t) {
        if ("SHA-1" === t) {
          const t = (0, l.L)(e);
          return (0, p.o)(u()(t));
        }
        throw new Error("Unsupported hash method");
      }
      var v = s(186381),
        g = s(174153);
      const y = "RSA-OAEP",
        f = "RSASSA-PKCS1-v1_5";
      async function S(e, t, s) {
        const r = { name: y, hash: { name: s } },
          n = await self.crypto.subtle.importKey("pkcs8", e, r, !1, ["decrypt"]);
        return self.crypto.subtle.decrypt(r, n, t);
      }
      var b = s(635558),
        C = s.n(b);
      async function w(e, t, s) {
        const { tCost: r, mCost: n, parallelism: a } = s,
          { hash: o } = await C().hash({
            pass: new Uint8Array(e),
            salt: new Uint8Array(t),
            time: r,
            mem: n,
            hashLen: 32,
            parallelism: a,
            type: b.ArgonType.Argon2d
          });
        return o.buffer;
      }
      var _ = s(980954),
        E = s(22609),
        A = s(983961);
      async function U(e, t, s) {
        const r = await (0, A.Y)(e);
        return self.crypto.subtle.encrypt({ name: E.z, iv: t }, r, s);
      }
      async function I(e, t, s) {
        const r = { name: y, hash: { name: s } },
          n = await self.crypto.subtle.importKey("spki", e, r, !1, ["encrypt"]);
        return self.crypto.subtle.encrypt(r, n, t);
      }
      async function T() {
        const e = await self.crypto.subtle.generateKey({ name: E.z, length: E.N }, !0, ["encrypt", "decrypt"]);
        return self.crypto.subtle.exportKey("raw", e);
      }
      const N = new Uint8Array([1, 0, 1]);
      async function F(e) {
        const t = await self.crypto.subtle.generateKey({ name: y, modulusLength: 2048, publicExponent: N, hash: { name: e } }, !0, [
            "encrypt",
            "decrypt"
          ]),
          { privateKey: s, publicKey: r } = t;
        return { privateKey: await self.crypto.subtle.exportKey("pkcs8", s), publicKey: await self.crypto.subtle.exportKey("spki", r) };
      }
      function x(e) {
        const t = new Uint8Array(e);
        return self.crypto.getRandomValues(t);
      }
      const R = "SHA-256";
      function D(e, t) {
        return self.crypto.subtle.importKey("raw", e, { name: "HMAC", hash: { name: t } }, !0, ["sign", "verify"]);
      }
      async function P(e, t, s = R) {
        const r = await D(e, s);
        return self.crypto.subtle.sign({ name: "HMAC", hash: { name: s } }, r, t);
      }
      async function k(e, t, s) {
        const r = { name: f, hash: { name: s } },
          n = await self.crypto.subtle.importKey("pkcs8", e, r, !1, ["sign"]);
        return self.crypto.subtle.sign(r, n, t);
      }
      var M = s(181968),
        O = s.n(M);
      function L(e) {
        const t = (0, l.L)(e);
        return (0, p.o)(O()(t));
      }
      async function G(e, t, s, r = R) {
        const n = await D(e, r);
        return self.crypto.subtle.verify({ name: "HMAC", hash: { name: r } }, n, t, s);
      }
      async function B(e, t, s, r) {
        const n = { name: f, hash: { name: r } },
          a = await self.crypto.subtle.importKey("spki", e, n, !1, ["verify"]);
        return self.crypto.subtle.verify(n, a, t, s);
      }
      var q = s(87065),
        V = s(793192),
        H = s(890171),
        j = s(547968),
        K = s(537182),
        z = s(69885),
        W = s(51992),
        Q = s(673155),
        $ = s(912964),
        Y = s(804607),
        X = s(287279);
      class J {
        constructor() {
          (this.toHttpResult = (e) => (e instanceof Q.a ? (0, X.Rn)(e) : e.ok ? (0, X.Vp)(e) : (0, X.Rn)(new Q.R(e)))),
            (this.toHttpResponse = (e) =>
              e instanceof Q.a
                ? e
                : new $.Z({
                    body: e.body,
                    url: e.url,
                    status: e.status,
                    statusText: e.statusText,
                    headers: this.mapToHttpHeaders(e.headers)
                  }));
        }
        handle(e) {
          const t = this.getTimeout$(e.timeout),
            s = this.doFetch(e).pipe((0, q.U)(this.toHttpResponse), (0, q.U)(this.toHttpResult));
          return (0, V.S)(t, s);
        }
        getTimeout$(e) {
          return e ? (0, H.H)(e).pipe((0, q.U)(() => (0, X.Rn)(new Q.a()))) : j.C;
        }
        doFetch(e) {
          return (0, W.U)(e.url, {
            method: e.method,
            body: e.serializeBody(),
            headers: this.getHeaders(e),
            credentials: e.withCredentials ? "include" : "omit",
            mode: e.mode
          }).pipe(
            (0, K.K)((e) => {
              if (!(e instanceof TypeError)) throw e;
              return (0, z.of)(new Q.a());
            })
          );
        }
        mapToHttpHeaders(e) {
          const t = new Y.W();
          return e.forEach((e, s) => t.set(s, e)), t;
        }
        getHeaders(e) {
          return e.headers.keys().reduce((t, s) => ({ ...t, [s]: e.headers.get(s) }), {});
        }
      }
      const Z = new Set(["en", "fr", "es", "ja", "de", "pt", "it", "ko", "zh", "nl", "sv"]),
        ee = "en";
      function te(e) {
        return e.substr(0, 2);
      }
      function se(e) {
        const t = te(e);
        return Z.has(t);
      }
      function re() {
        const e = [navigator.language].concat(navigator.languages).find(se);
        return e ? (e.includes("-") ? te(e) : e) : ee;
      }
      var ne = s(930754),
        ae = s(782324),
        oe = s(781805);
      const ie = " ";
      async function ce(e, t) {
        try {
          const { levelOfControl: t } = await (0, ne.U)(e);
          if ("controllable_by_this_extension" !== t && "controlled_by_this_extension" !== t) {
            const s = [`Impossible to change browser setting: ${e}.`, `Extension prevented from changing: ${t}`].join(ie);
            throw new Error(s);
          }
        } catch (t) {
          if ((0, ae.b)(t)) throw new Error(`Browser setting not supported: ${e}`);
          if ((0, ae.I)(t)) throw t.runtimeError;
          throw t;
        }
        try {
          await (0, oe.t)(e, t);
        } catch (e) {
          throw (0, ae.I)(e) ? e.runtimeError : e;
        }
      }
      async function de() {
        const e = ["autofillAddressEnabled", "autofillCreditCardEnabled", "passwordSavingEnabled"].map((e) => ce(e, !1));
        await Promise.all(e);
      }
      var ue = s(384318),
        le = s(516241);
      const pe = { nightly: "icon_nightly_auth", mv2: "icon_auth", mv3: "icon_mv3_auth" },
        me = "icon_not_auth";
      async function he({ isUserAuthenticated: e }) {
        const t = `icons/action/${
            e
              ? (function () {
                  const e = (0, ue.W)();
                  return e.name.includes("Nightly") ? pe.nightly : e.name.includes("Beta") || 3 === e.manifest_version ? pe.mv3 : pe.mv2;
                })()
              : me
          }`,
          s = { 16: `${t}.png`, 32: `${t}@2x.png` };
        await (0, le.B)(s);
      }
      var ve = s(329),
        ge = s(598641);
      function ye(e) {
        return `${"http" + (e.secure ? "s" : "")}://${e.domain.startsWith(".") ? e.domain.substring(1) : e.domain}${e.path}`;
      }
      async function fe(e) {
        const t = await (0, ve.g)({ domain: e });
        return Promise.all(t.map((e) => (0, ge.O)({ url: ye(e), name: e.name })));
      }
      var Se = s(528509),
        be = s(690123);
      const Ce = /^_execute(_browser){0,1}_action$/,
        we = "+";
      var _e;
      function Ee(e) {
        return Ce.test(e.name ?? "");
      }
      function Ae(e) {
        const t = e.toUpperCase();
        switch (t) {
          case "⌃":
          case "CTRL":
            return Se.isMacOS() ? _e.Command : _e.Ctrl;
          case "SHIFT":
          case "⇧":
            return _e.Shift;
          case "COMMAND":
          case "⌘":
            return _e.Command;
          case "MACCTRL":
            return _e.MacCtrl;
          default:
            return t;
        }
      }
      function Ue(e) {
        const t = Object.values(_e),
          s = t.indexOf(e);
        return -1 === s ? t.length : s;
      }
      function Ie(e, t) {
        return Ue(e) - Ue(t);
      }
      function Te(e) {
        switch (e) {
          case _e.Ctrl:
          case _e.MacCtrl:
            return "Ctrl";
          case _e.Shift:
            return "⇧";
          case _e.Command:
            return "⌘";
          default:
            return e;
        }
      }
      async function Ne() {
        const e = await (0, be.g)(),
          t = e.find(Ee)?.shortcut;
        if (!t) return;
        const s = (function (e) {
          return e.split(e.includes(we) ? we : "");
        })(t);
        return s.map(Ae).sort(Ie).map(Te);
      }
      !(function (e) {
        (e.Command = "Command"), (e.Ctrl = "Ctrl"), (e.MacCtrl = "MacCtrl"), (e.Shift = "Shift");
      })(_e || (_e = {}));
      var Fe = s(939680),
        xe = s(641808);
      async function Re(e) {
        if ((0, Fe.G)()) return (await (0, Fe.y)(e)) > 0;
        const t = await (0, xe.U)(e),
          s = void 0 === t[e],
          r = null === t[e];
        return !s && !r;
      }
      var De = s(724715),
        Pe = s(772733),
        ke = s(457306),
        Me = s(731460),
        Oe = s(661222);
      async function Le() {
        const e = await (0, Oe.I)({}),
          t = (0, a.A)("");
        return e.filter((e) => "string" == typeof e.url && e.url.startsWith(t)).filter((e) => "" !== e.url);
      }
      const Ge = "index.html";
      function Be() {
        return `${(0, a.A)("")}${Ge}`;
      }
      async function qe({ id: e, query: t, route: s }) {
        const r = (function ({ identifier: e, queryInfo: t, name: s }) {
            const r = Be();
            if (!s) return r;
            const n = e ? `#${s}/${e}` : `#${s}`,
              a = t
                ? `?${(function (e) {
                    return Object.keys(e)
                      .map((t) => `${t}=${e[t]}`)
                      .join("&");
                  })(t)}`
                : "";
            return encodeURI(`${r}${n}${a}`);
          })({ identifier: e, queryInfo: t, name: s }),
          n = await Le();
        n.length
          ? await (async function ({ path: e, tabs: t }) {
              const s = await (0, Pe.T)(),
                r = (function ({ existingTabs: e, focusedWindow: t }) {
                  const s = e.filter((e) => e.active),
                    r = s.find((e) => e.windowId === t.id),
                    n = s.pop(),
                    a = e.pop();
                  return r ?? n ?? a;
                })({ existingTabs: t, focusedWindow: s });
              if (!r) return;
              if ((r.windowId !== s.id && (0, ke.V)(r.windowId, { focused: !0 }), !r.id)) return;
              const n = { active: !0, ...(e === Be() ? {} : { url: e }) };
              await (0, Me.V)(r.id, n);
            })({ path: r, tabs: n })
          : await (async function (e) {
              const t = { url: e };
              await (0, De.U)(t);
            })(r);
      }
      var Ve = s(215904),
        He = s(549259);
      async function je() {
        const e = await Le();
        if (!e.length) return;
        const t = (0, Ve.a)(),
          s = e.map((e) => e.id).filter((e) => "number" == typeof e && e !== t);
        await (0, He.O)(s);
      }
      var Ke = s(383081),
        ze = s(732012),
        We = s(507074),
        Qe = s(724966),
        $e = s(385390),
        Ye = s(915023),
        Xe = s(826603),
        Je = s(56847),
        Ze = s(252477),
        et = s(15026);
      function tt(e) {
        return JSON.parse(JSON.stringify(e));
      }
      class st {
        constructor() {
          this.events$ = new i.y((e) => {
            const t = (t) => {
              e.next(t);
            };
            return Xe.r.addListener(t), () => Xe.r.removeListener(t);
          }).pipe((0, We.B)());
        }
      }
      class rt {
        constructor(e, t, s) {
          (this.stopped$ = new Qe.X(!1)), (this.key = t), (this.typeGuard = s ?? ((e) => !0));
          const r = new i.y((s) => {
            this.getState().then((e) => {
              s.next(e);
            });
            const r = e.events$.subscribe((e) => {
              if (t in e) {
                const { newValue: r } = e[t];
                return s.next(this.asDataWithTimestamp(r));
              }
            });
            return () => r.unsubscribe();
          });
          this.state$ = (0, $e.a)({ state: r, isStopped: this.stopped$ }).pipe(
            (0, Ye.o)(({ isStopped: e }) => !e, !1),
            (0, q.U)(({ state: e }) => e)
          );
        }
        async update(e) {
          return this.set(e(await this.getState()));
        }
        persist() {
          return Promise.resolve();
        }
        load() {
          return Promise.resolve();
        }
        set(e) {
          return (0, Je.t)(tt({ [this.key]: e }));
        }
        init(e) {
          return (0, Je.t)(tt({ [this.key]: e }));
        }
        clear() {
          return (0, Ze.O)(this.key);
        }
        clearStorage() {
          return Promise.resolve();
        }
        stop() {
          this.stopped$.next(!0);
        }
        async getState() {
          const e = (await (0, et.U)(this.key))[this.key];
          return this.asDataWithTimestamp(e);
        }
        asDataWithTimestamp(e) {
          return e &&
            "object" == typeof e &&
            "timestamp" in e &&
            "number" == typeof e.timestamp &&
            e.timestamp &&
            "data" in e &&
            this.typeGuard(e.data)
            ? { timestamp: e.timestamp, data: e.data }
            : { timestamp: void 0 };
        }
      }
      class nt extends Ke.G {
        constructor() {
          super(...arguments), (this.source = new st());
        }
        createUserScopedInfrastructure(e, t, s, r) {
          const n = `graphene.${e}.${t}.${s}`;
          return new rt(this.source, n, r);
        }
        createDeviceScopedInfrastructure(e, t, s) {
          const r = `graphene.${e}.${t}`;
          return new rt(this.source, r, s);
        }
      }
      function at() {
        return (0, ze.G)() ? new nt() : new Ke.N();
      }
      var ot = s(9244),
        it = s(945441);
      class ct {
        async getAllKeys() {
          return Object.keys(await (0, xe.U)(null));
        }
        async get(e) {
          const t = (await (0, xe.U)([e]))[e];
          if (t) {
            if ("string" != typeof t)
              throw new Error(
                `[ChromeLocalStorage] - cannot read content of ${e} properly. Type is\n        ${typeof t} but should be 'string'`
              );
            return t;
          }
        }
        async set(e, t) {
          await (0, ot.t)({ [e]: t });
        }
        async remove(e) {
          await (0, it.O)([e]);
        }
      }
      var dt = s(996168);
      class ut extends (0, dt.Hu)("NotSupported", "Index DB is not supported in this environment") {}
      class lt {
        constructor(e, t, s) {
          (this.DB_STORE_NAME = e), (this.DB_VERSION = t), (this.DB_OBJECT_STORE_NAME = s);
        }
        getIndexedDB() {
          return new Promise((e, t) => {
            const s = self.indexedDB;
            if (!s) return t(new Error("indexedDB is not supported in this environment"));
            const r = s.open(this.DB_STORE_NAME, this.DB_VERSION);
            (r.onerror = function () {
              "InvalidStateError" === r.error?.name && e((0, X.Rn)(new ut())), t(r.error);
            }),
              (r.onupgradeneeded = () => {
                r.result.objectStoreNames.contains(this.DB_OBJECT_STORE_NAME) || r.result.createObjectStore(this.DB_OBJECT_STORE_NAME);
              }),
              (r.onsuccess = function () {
                (r.onsuccess = null), e((0, X.Vp)(r.result));
              });
          });
        }
        async isSupported() {
          return (0, X.d6)(await this.getIndexedDB());
        }
        async getStore(e = "readwrite") {
          const t = await this.getIndexedDB();
          if (!(0, X.d6)(t)) throw new Error("Failed to get db");
          return t.data.transaction([this.DB_OBJECT_STORE_NAME], e).objectStore(this.DB_OBJECT_STORE_NAME);
        }
        async readItem(e) {
          const t = await this.getStore("readonly");
          return new Promise((s) => {
            const r = t.get(e);
            r.onsuccess = () => {
              (r.onsuccess = null), s(r.result);
            };
          });
        }
        async getAllKeys() {
          const e = await this.getStore("readonly");
          return new Promise((t) => {
            const s = e.getAllKeys();
            s.onsuccess = () => {
              t(s.result.map((e) => String(e)));
            };
          });
        }
        async removeItem(e) {
          const t = await this.getStore("readwrite");
          return new Promise((s) => {
            const r = t.delete(e);
            r.onsuccess = () => {
              (r.onsuccess = null), s();
            };
          });
        }
        async writeItem(e, t) {
          const s = await this.getStore("readwrite");
          return new Promise((r) => {
            const n = s.put(t, e);
            n.onsuccess = () => {
              (n.onsuccess = null), r();
            };
          });
        }
        async itemExists(e) {
          return null != (await this.readItem(e));
        }
      }
      class pt {
        constructor() {
          this.storageLayer = new lt("dashlane-ng", 1, "module-data");
        }
        isSupported() {
          return this.storageLayer.isSupported();
        }
        getAllKeys() {
          return this.storageLayer.getAllKeys();
        }
        async set(e, t) {
          return await this.storageLayer.writeItem(e, t);
        }
        remove(e) {
          return this.storageLayer.removeItem(e);
        }
        async get(e) {
          return (await this.storageLayer.readItem(e)) ?? void 0;
        }
      }
      var mt = s(369594);
      class ht extends mt.R_ {
        constructor() {
          super(...arguments),
            (this.alarm$ = new i.y((e) => {
              const t = self.setInterval(() => {
                e.next();
              }, 6e4);
              return () => {
                self.clearInterval(t);
              };
            }));
        }
      }
      var vt = s(897280),
        gt = s(531034),
        yt = s(418477),
        ft = s(665496);
      const St = "cron-source";
      class bt extends mt.R_ {
        constructor() {
          super(...arguments),
            (this.alarm$ = (
              (0, ft.G)()
                ? new i.y((e) => {
                    const t = (t) => {
                      t.name === St && e.next();
                    };
                    return (
                      (0, gt.U)(St, { delayInMinutes: 1, periodInMinutes: 1 }),
                      yt.i.addListener(t),
                      () => {
                        yt.i.removeListener(t);
                      }
                    );
                  })
                : new i.y((e) => {
                    const t = self.setInterval(() => {
                      e.next();
                    }, 6e4);
                    return () => {
                      self.clearInterval(t);
                    };
                  })
            ).pipe((0, vt.d)(1))),
            (this.subscription = this.alarm$.subscribe());
        }
        stop() {
          this.subscription.unsubscribe();
        }
      }
      function Ct() {
        return (
          "undefined" != typeof chrome &&
          void 0 !== chrome.runtime &&
          void 0 !== chrome.runtime.getManifest &&
          3 === (0, ue.W)().manifest_version
        );
      }
      var wt = s(915572),
        _t = s(645244);
      class Et {
        constructor(e, t) {
          (this.worker = e),
            (this.channelName = t),
            (this.status$ = (0, z.of)(wt.D.Connected)),
            (this.messages$ = new i.y((t) => {
              const s = (e) => {
                (0, _t.F)(e.data) && !e.origin && t.next(e.data.message);
              };
              return (
                e.addEventListener("message", s),
                () => {
                  e.removeEventListener("message", s);
                }
              );
            }).pipe((0, We.B)()));
        }
        async sendMessage(e) {
          this.worker.postMessage((0, _t.k)({ channelName: this.channelName, message: e }));
        }
        stop() {
          return Promise.resolve();
        }
      }
      var At = s(769183),
        Ut = s(158649),
        It = s(20500);
      class Tt {
        constructor(e) {
          this.connectedChannels$ = new Qe.X({});
          const t = new i.y((t) => {
            const s = {},
              r = (r) => {
                const n = (0, At.Z)();
                if (r.name !== e) return;
                const a = new c(
                    { addListener: (e) => r.onMessage.addListener(e), removeListener: (e) => r.onMessage.removeListener(e) },
                    (t) => (0, _t.F)(t) && t.channelName === e
                  ),
                  o = new Promise((e) => {
                    const t = () => {
                      r.onDisconnect.removeListener(t), e(null);
                    };
                    r.onDisconnect.addListener(t);
                  }),
                  i = new Qe.X(wt.D.Connected);
                o.then(() => {
                  a.stop(), i.next(wt.D.Disconnected), delete s[n], t.next(s);
                });
                const d = {
                    messages$: a.events$.pipe((0, q.U)(([e]) => e.message)),
                    sendMessage: (t) => (r.postMessage((0, _t.k)({ channelName: e, message: t })), Promise.resolve()),
                    stop: () => (r.disconnect(), Promise.resolve()),
                    status$: i
                  },
                  u = new Ut.N(d);
                (s[n] = u), t.next(s);
              };
            return (
              It.b.addListener(r),
              () => {
                It.b.removeListener(r);
              }
            );
          });
          this.subscription = t.subscribe((e) => this.connectedChannels$.next(e));
        }
        stop() {
          this.subscription.unsubscribe();
        }
      }
      var Nt = s(249808),
        Ft = s(243978),
        xt = s(317350),
        Rt = s(160399);
      class Dt {
        constructor(e) {
          (this.listener = new Tt(e)),
            (this.channel$ = this.listener.connectedChannels$.pipe(
              (0, q.U)((e) => {
                const t = Object.values(e);
                if (t.length) return t[0];
              }),
              (0, vt.d)(1)
            )),
            (this.receivedMessages$ = this.channel$.pipe((0, Ft.w)((e) => (e ? e.receivedMessages$ : xt.E)))),
            (this.channelState$ = this.channel$.pipe((0, q.U)((e) => (e ? wt.D.Connected : wt.D.Disconnected))));
        }
        async send(e) {
          const t = await (0, Rt.z)(this.channel$);
          if (!t) throw new Error("Channel is not connected");
          await t.send(e);
        }
        stop() {
          this.listener.stop();
        }
      }
    },
    249808: (e, t, s) => {
      s.d(t, { G: () => l });
      var r = s(915572),
        n = s(645244),
        a = s(724966),
        o = s(227257),
        i = s(897280),
        c = s(536414),
        d = s(160399),
        u = s(505441);
      class l {
        constructor(e) {
          (this.status$ = new a.X(r.D.Connected)),
            (this.port$ = new o.y((t) => {
              let s;
              const n = this.status$;
              function a() {
                s?.onDisconnect.removeListener(a);
                const o = (0, u.$)({ name: e });
                n.next(r.D.Disconnected), o.onDisconnect.addListener(a), t.next(o), n.next(r.D.Connected), (s = o);
              }
              return (
                a(),
                () => {
                  s?.onDisconnect.removeListener(a), s?.disconnect();
                }
              );
            }).pipe((0, i.d)(1))),
            (this.portSubscription = this.port$.subscribe()),
            (this.messages$ = this.port$.pipe(
              (0, c.z)(
                (t) =>
                  new o.y((s) => {
                    const r = (t) => {
                      (0, n.F)(t) && t.channelName === e && s.next(t.message);
                    };
                    return (
                      t.onMessage.addListener(r),
                      () => {
                        t.onMessage.removeListener(r);
                      }
                    );
                  })
              )
            ));
        }
        async sendMessage(e) {
          const t = await (0, d.z)(this.port$);
          t.postMessage((0, n.k)({ channelName: t.name, message: e }));
        }
        stop() {
          return this.portSubscription.unsubscribe(), this.status$.next(r.D.Disconnected), Promise.resolve();
        }
      }
    },
    768593: (e, t, s) => {
      s.d(t, { S: () => n });
      var r = s(696832);
      class n extends r.Component {
        constructor(e) {
          super(e), (this.state = { hasError: !1 });
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e) {
          this.props.onError?.(e);
        }
        render() {
          return this.state.hasError ? this.props.errorView(() => this.setState({ hasError: !1 })) : this.props.children;
        }
      }
    },
    643892: (e, t, s) => {
      s.d(t, { i: () => a });
      var r = s(696832),
        n = s(350941);
      const a = (e) => {
        const t = r.useCallback((t) => e.client[t.name], [e.client]),
          s = r.useMemo(() => ({ appClient: { getModuleClient: t } }), [t]);
        return r.createElement(n.I.Provider, { value: s }, e.children);
      };
    },
    350941: (e, t, s) => {
      s.d(t, { I: () => r });
      const r = (0, s(696832).createContext)({ appClient: null });
    },
    133354: (e, t, s) => {
      var r;
      s.d(t, { QY: () => a, hA: () => n, rq: () => r }),
        (function (e) {
          (e.Success = "success"), (e.Loading = "loading"), (e.Error = "error");
        })(r || (r = {}));
      const n = { status: r.Loading, data: void 0, error: void 0 },
        a = null;
    },
    55548: (e, t, s) => {
      s.d(t, { D: () => a });
      var r = s(520587),
        n = s(482598);
      const a = () => (0, n.u)(r.Yu);
    },
    412408: (e, t, s) => {
      s.d(t, { b: () => a });
      var r = s(696832),
        n = s(350941);
      const a = () => (0, r.useContext)(n.I);
    },
    112555: (e, t, s) => {
      function r() {
        return {
          wrap: (e, t) => async () => {
            try {
              await e();
            } catch (e) {
              t();
            }
          }
        };
      }
      s.d(t, { u: () => r });
    },
    242714: (e, t, s) => {
      s.d(t, { o: () => a });
      var r = s(133354),
        n = s(361607);
      function a(e) {
        const t = (0, n._)();
        return t.status === r.rq.Loading ? null : t.status !== r.rq.Error ? t.data[e] ?? void 0 : void 0;
      }
    },
    361607: (e, t, s) => {
      s.d(t, { _: () => d });
      var r = s(696832),
        n = s(160399),
        a = s(970493),
        o = s(133354),
        i = s(221637),
        c = s(402938);
      function d() {
        const [e, t] = (0, r.useState)(o.hA),
          s = (0, r.useCallback)(async (e) => {
            const s = await (0, n.z)(e);
            t((0, c.o)(s));
          }, []),
          d = (0, r.useCallback)(
            (e) => {
              s(e);
            },
            [s]
          );
        return (0, i.V)({ moduleApi: a.cV, query: "userFeatureFlips", effectCallback: d }), e;
      }
    },
    482598: (e, t, s) => {
      s.d(t, { u: () => a });
      var r = s(696832),
        n = s(412408);
      const a = (e) => {
        const { appClient: t } = (0, n.b)();
        return (0, r.useMemo)(() => {
          if (!t) throw new Error("No app client available");
          const s = t.getModuleClient(e);
          if (!s) throw new Error(`Module ${e.name} is not available in the context`);
          return s;
        }, [t, e]).commands;
      };
    },
    995445: (e, t, s) => {
      s.d(t, { Y: () => i });
      var r = s(133354),
        n = s(412408),
        a = s(287279),
        o = s(696832);
      const i = (e, t, s) => {
        const { appClient: i } = (0, n.b)();
        if (!i) throw new Error("No app client available");
        const [c, d] = (0, o.useState)(Object.keys(t).reduce((e, t) => ({ ...e, [t]: { status: r.rq.Loading } }), {}));
        return (
          (0, o.useEffect)(() => {
            const s = (() => {
                const s = i.getModuleClient(e);
                if (!s) throw new Error(`Module ${e.name} is not available in the context`);
                return Object.keys(t).reduce((e, t) => ({ ...e, [t]: s.queries[t] }), {});
              })(),
              n = Object.keys(t)
                .map((e) => e)
                .map((e) => {
                  const n = t[e].queryParam ?? r.QY;
                  return (0, s[e])(n).subscribe((t) => {
                    (0, a.d6)(t)
                      ? d((s) => ({ ...s, [e]: { status: r.rq.Success, data: t.data } }))
                      : d((t) => ({ ...t, [e]: { status: r.rq.Error, data: void 0 } }));
                  });
                });
            return () => n.forEach((e) => e.unsubscribe());
          }, s),
          c
        );
      };
    },
    221637: (e, t, s) => {
      s.d(t, { V: () => o });
      var r = s(696832),
        n = s(133354),
        a = s(412408);
      function o({ moduleApi: e, query: t, param: s, effectCallback: o, dependencies: i }) {
        const { appClient: c } = (0, a.b)();
        if (!c) throw new Error("No app client available");
        const d = (0, r.useMemo)(() => {
            const s = c.getModuleClient(e);
            if (!s) throw new Error(`Module ${e.name} is not available in the context`);
            return s.queries[t];
          }, [c, e, t]),
          u = (0, r.useMemo)(() => i ?? [JSON.stringify(s)], [i, s]);
        (0, r.useEffect)(() => o?.(d(s ?? n.QY)), [d, o, ...u]);
      }
    },
    799852: (e, t, s) => {
      s.d(t, { k: () => i });
      var r = s(696832),
        n = s(133354),
        a = s(221637),
        o = s(402938);
      function i(...e) {
        const [t, s] = (0, r.useState)(n.hA),
          [i, c, d, u] = e,
          l = (0, r.useCallback)((e) => {
            const t = e.subscribe((e) => {
              s((0, o.o)(e));
            });
            return () => t.unsubscribe();
          }, []);
        return (0, a.V)({ moduleApi: i, query: c, param: d, effectCallback: l, dependencies: u }), t;
      }
    },
    402938: (e, t, s) => {
      s.d(t, { o: () => a });
      var r = s(287279),
        n = s(133354);
      const a = (e) =>
        (0, r.d6)(e) ? { status: n.rq.Success, data: e.data, error: void 0 } : { status: n.rq.Error, data: void 0, error: e.error };
    },
    22609: (e, t, s) => {
      s.d(t, { N: () => n, z: () => r });
      const r = "AES-CBC",
        n = 256;
    },
    804607: (e, t, s) => {
      s.d(t, { W: () => r });
      class r {
        constructor(e) {
          (this.headers = new Map()),
            (this.normalizedNames = new Map()),
            "string" == typeof e ? this.initFromString(e) : e && this.initFromObject(e);
        }
        has(e) {
          return this.headers.has(e.toLowerCase());
        }
        get(e) {
          const t = this.headers.get(e.toLowerCase());
          return t?.[0] ?? null;
        }
        keys() {
          return Array.from(this.normalizedNames.values());
        }
        getAll(e) {
          return this.headers.get(e.toLowerCase()) ?? null;
        }
        append(e, t) {
          return this.clone({ name: e, value: t, op: 0 });
        }
        set(e, t) {
          return this.clone({ name: e, value: t, op: 1 });
        }
        delete(e, t) {
          return this.clone({ name: e, value: t, op: 2 });
        }
        deleteMultiple(e) {
          return this.clone({ names: e, op: 3 });
        }
        toObject() {
          return Object.fromEntries(this.headers);
        }
        maybeSetNormalizedName(e, t) {
          this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
        }
        clone(e) {
          const t = new r();
          return t.initFromOther(this), t.applyUpdate(e), t;
        }
        applyUpdate(e) {
          switch (e.op) {
            case 0:
            case 1:
              {
                const t = e.name.toLowerCase();
                let s = e.value;
                if (("string" == typeof s && (s = [s]), 0 === s.length)) return;
                this.maybeSetNormalizedName(e.name, t);
                const r = (0 === e.op ? this.headers.get(t) : void 0) ?? [];
                r.push(...s), this.headers.set(t, r);
              }
              break;
            case 2:
              {
                const t = e.name.toLowerCase(),
                  s = e.value;
                if (s) {
                  let e = this.headers.get(t);
                  if (!e) return;
                  const r = Array.isArray(s) ? s : [s];
                  (e = e.filter((e) => !r.includes(e))),
                    0 === e.length ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, e);
                } else this.headers.delete(t), this.normalizedNames.delete(t);
              }
              break;
            case 3:
              e.names.forEach((e) => {
                const t = e.toLowerCase();
                this.headers.delete(t), this.normalizedNames.delete(t);
              });
          }
        }
        initFromOther(e) {
          Array.from(e.headers.keys()).forEach((t) => {
            this.headers.set(t, [...e.headers.get(t)]), this.normalizedNames.set(t, e.normalizedNames.get(t));
          });
        }
        initFromObject(e) {
          Object.keys(e).forEach((t) => {
            let s = e[t];
            const r = t.toLowerCase();
            "string" == typeof s && (s = [s]), s.length > 0 && (this.headers.set(r, s), this.maybeSetNormalizedName(t, r));
          });
        }
        initFromString(e) {
          e.split("\n").forEach((e) => {
            const t = e.indexOf(":");
            if (t > 0) {
              const s = e.slice(0, t),
                r = s.toLowerCase(),
                n = e.slice(t + 1).trim();
              this.maybeSetNormalizedName(s, r), this.headers.has(r) ? this.headers.get(r).push(n) : this.headers.set(r, [n]);
            }
          });
        }
      }
    },
    912964: (e, t, s) => {
      s.d(t, { Z: () => u });
      var r = s(587631),
        n = s(89685),
        a = s(354066),
        o = s(804607),
        i = s(625994);
      async function c(e) {
        const t = e.getReader();
        let s = new Uint8Array(0),
          r = await t.read();
        for (; !r.done; ) {
          const e = new Uint8Array(s.byteLength + r.value.byteLength);
          e.set(s, 0), e.set(r.value, s.byteLength), (s = e), (r = await t.read());
        }
        return s;
      }
      class d {
        constructor(e) {
          (this.bytesRead = 0), (this.data = e);
        }
        pull(e) {
          const { bytesRead: t, data: s } = this;
          if (t >= s.byteLength) return void e.close();
          const r = Math.min(s.byteLength - t, e.desiredSize ?? 1 / 0);
          if (r > 0) {
            const n = new Uint8Array(s, t, r);
            e.enqueue(n), (this.bytesRead += r);
          }
          t >= s.byteLength && e.close();
        }
      }
      class u {
        constructor(e = {}, t = i.W.Ok, s = "OK") {
          (this.headers = e.headers instanceof o.W ? e.headers : new o.W(e.headers)),
            (this.status = void 0 !== e.status ? e.status : t),
            (this.statusText = e.statusText ?? s),
            (this.url = e.url ?? null),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.body = void 0 !== e.body ? e.body : null);
        }
        clone(e = {}) {
          return new u({
            body:
              void 0 !== e.body
                ? e.body
                : null === this.body
                ? null
                : this.body instanceof r.ReadableStream
                ? this.body.tee()[0]
                : this.body,
            headers: e.headers ?? this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText ?? this.statusText,
            url: e.url ?? this.url ?? void 0
          });
        }
        async arrayBuffer() {
          if (null === this.body) throw new Error("Empty response body");
          if ("object" == typeof this.body && "ReadableStream" === this.body.constructor.name) return (await c(this.body)).buffer;
          if (!(this.body instanceof ArrayBuffer)) throw new Error("Unexpected body type, not an ArrayBuffer");
          return this.body;
        }
        async text() {
          if (null === this.body) throw new Error("Empty response body");
          if ("object" == typeof this.body && "ReadableStream" === this.body.constructor.name) {
            const e = await c(this.body);
            return (0, n.v)(e.buffer);
          }
          if ("string" != typeof this.body) throw new Error("Unexpected body type, not a string");
          return this.body;
        }
        async json(e) {
          if (null === this.body) throw new Error("Empty response body");
          if ("object" == typeof this.body && "ReadableStream" === this.body.constructor.name) {
            const t = await c(this.body),
              s = (0, n.v)(t.buffer);
            try {
              const t = JSON.parse(s);
              return e.decode(t);
            } catch (e) {
              throw new Error("Failed to parse response body JSON");
            }
          }
          if (this.body instanceof ArrayBuffer || "string" == typeof this.body) throw new Error("Unexpected body type");
          return e.decode(this.body);
        }
        bodyStream() {
          if (null === this.body) throw new Error("Empty response body");
          if ("object" == typeof this.body && "ReadableStream" === this.body.constructor.name) return this.body;
          if ("string" == typeof this.body) return new r.ReadableStream(new d((0, a.u)(this.body)));
          if (this.body instanceof ArrayBuffer) return new r.ReadableStream(new d(this.body));
          const e = JSON.stringify(this.body);
          return new r.ReadableStream(new d((0, a.u)(e)));
        }
      }
    },
    625994: (e, t, s) => {
      var r;
      s.d(t, { W: () => r }),
        (function (e) {
          (e[(e.Continue = 100)] = "Continue"),
            (e[(e.SwitchingProtocols = 101)] = "SwitchingProtocols"),
            (e[(e.Processing = 102)] = "Processing"),
            (e[(e.EarlyHints = 103)] = "EarlyHints"),
            (e[(e.Ok = 200)] = "Ok"),
            (e[(e.Created = 201)] = "Created"),
            (e[(e.Accepted = 202)] = "Accepted"),
            (e[(e.NonAuthoritativeInformation = 203)] = "NonAuthoritativeInformation"),
            (e[(e.NoContent = 204)] = "NoContent"),
            (e[(e.ResetContent = 205)] = "ResetContent"),
            (e[(e.PartialContent = 206)] = "PartialContent"),
            (e[(e.MultiStatus = 207)] = "MultiStatus"),
            (e[(e.AlreadyReported = 208)] = "AlreadyReported"),
            (e[(e.ImUsed = 226)] = "ImUsed"),
            (e[(e.MultipleChoices = 300)] = "MultipleChoices"),
            (e[(e.MovedPermanently = 301)] = "MovedPermanently"),
            (e[(e.Found = 302)] = "Found"),
            (e[(e.SeeOther = 303)] = "SeeOther"),
            (e[(e.NotModified = 304)] = "NotModified"),
            (e[(e.UseProxy = 305)] = "UseProxy"),
            (e[(e.Unused = 306)] = "Unused"),
            (e[(e.TemporaryRedirect = 307)] = "TemporaryRedirect"),
            (e[(e.PermanentRedirect = 308)] = "PermanentRedirect"),
            (e[(e.BadRequest = 400)] = "BadRequest"),
            (e[(e.Unauthorized = 401)] = "Unauthorized"),
            (e[(e.PaymentRequired = 402)] = "PaymentRequired"),
            (e[(e.Forbidden = 403)] = "Forbidden"),
            (e[(e.NotFound = 404)] = "NotFound"),
            (e[(e.MethodNotAllowed = 405)] = "MethodNotAllowed"),
            (e[(e.NotAcceptable = 406)] = "NotAcceptable"),
            (e[(e.ProxyAuthenticationRequired = 407)] = "ProxyAuthenticationRequired"),
            (e[(e.RequestTimeout = 408)] = "RequestTimeout"),
            (e[(e.Conflict = 409)] = "Conflict"),
            (e[(e.Gone = 410)] = "Gone"),
            (e[(e.LengthRequired = 411)] = "LengthRequired"),
            (e[(e.PreconditionFailed = 412)] = "PreconditionFailed"),
            (e[(e.PayloadTooLarge = 413)] = "PayloadTooLarge"),
            (e[(e.UriTooLong = 414)] = "UriTooLong"),
            (e[(e.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
            (e[(e.RangeNotSatisfiable = 416)] = "RangeNotSatisfiable"),
            (e[(e.ExpectationFailed = 417)] = "ExpectationFailed"),
            (e[(e.ImATeapot = 418)] = "ImATeapot"),
            (e[(e.MisdirectedRequest = 421)] = "MisdirectedRequest"),
            (e[(e.UnprocessableEntity = 422)] = "UnprocessableEntity"),
            (e[(e.Locked = 423)] = "Locked"),
            (e[(e.FailedDependency = 424)] = "FailedDependency"),
            (e[(e.TooEarly = 425)] = "TooEarly"),
            (e[(e.UpgradeRequired = 426)] = "UpgradeRequired"),
            (e[(e.PreconditionRequired = 428)] = "PreconditionRequired"),
            (e[(e.TooManyRequests = 429)] = "TooManyRequests"),
            (e[(e.RequestHeaderFieldsTooLarge = 431)] = "RequestHeaderFieldsTooLarge"),
            (e[(e.UnavailableForLegalReasons = 451)] = "UnavailableForLegalReasons"),
            (e[(e.InternalServerError = 500)] = "InternalServerError"),
            (e[(e.NotImplemented = 501)] = "NotImplemented"),
            (e[(e.BadGateway = 502)] = "BadGateway"),
            (e[(e.ServiceUnavailable = 503)] = "ServiceUnavailable"),
            (e[(e.GatewayTimeout = 504)] = "GatewayTimeout"),
            (e[(e.HttpVersionNotSupported = 505)] = "HttpVersionNotSupported"),
            (e[(e.VariantAlsoNegotiates = 506)] = "VariantAlsoNegotiates"),
            (e[(e.InsufficientStorage = 507)] = "InsufficientStorage"),
            (e[(e.LoopDetected = 508)] = "LoopDetected"),
            (e[(e.NotExtended = 510)] = "NotExtended"),
            (e[(e.NetworkAuthenticationRequired = 511)] = "NetworkAuthenticationRequired");
        })(r || (r = {}));
    },
    673155: (e, t, s) => {
      s.d(t, { R: () => n, a: () => a });
      var r = s(996168);
      class n extends (0, r.Hu)("BadStatus", "The HTTP response has a non-successful status code (not 2XX)") {
        constructor(e) {
          super(), (this.response = e);
        }
      }
      class a extends (0, r.Hu)("FetchFailedError", "Something happened while communicating to the server") {}
    },
    996168: (e, t, s) => {
      s.d(t, { As: () => n, BU: () => a, Hu: () => r });
      const r = (e, t) =>
        class extends Error {
          constructor() {
            super(t), (this.tag = e);
          }
        };
      function n(e, t) {
        return t.includes(e.tag);
      }
      const a = (e) => e.tag;
    },
    419562: (e, t, s) => {
      s.r(t),
        s.d(t, {
          FunctionalError: () => r.Hu,
          assertUnreachable: () => a.U,
          concatMapFailure: () => c.Tc,
          concatMapSuccess: () => c.Gx,
          concatMatchResult: () => c.RW,
          createMatchable: () => o.H6,
          failure: () => i.Rn,
          getBrander: () => u.zq,
          getFailure: () => i.Yv,
          getSuccess: () => i.db,
          hasProperty: () => u.l$,
          isFailure: () => i.hx,
          isFunctionalErrorOfType: () => r.As,
          isMatchable: () => o.cw,
          isResult: () => i.AZ,
          isSuccess: () => i.d6,
          mapFailure: () => i.SN,
          mapFailureObservable: () => c.DZ,
          mapResultObservable: () => c.vg,
          mapSuccess: () => i.ty,
          mapSuccessObservable: () => c.Qn,
          mapSuccessResultObservable: () => c.lk,
          match: () => o.EQ,
          matchMap: () => d,
          matchResult: () => i.f2,
          matchResultObservable: () => c.nb,
          panic: () => n,
          safeCast: () => u.Ay,
          success: () => i.Vp,
          switchMapFailure: () => c.pr,
          switchMapSuccess: () => c.CP,
          switchMatchResult: () => c.bM,
          toFunctionalErrorCode: () => r.BU
        });
      var r = s(996168);
      function n(e) {
        if (e instanceof Error) throw e;
        if ("string" == typeof e) throw new Error(e);
        throw new Error(e.tag);
      }
      var a = s(295087),
        o = s(18533),
        i = s(287279),
        c = s(948844);
      const d = (e, t) => t[e]();
      var u = s(828489);
    },
    295087: (e, t, s) => {
      function r(e, t) {
        throw new Error(t ?? `Unreachable code detected (${e})`);
      }
      s.d(t, { U: () => r });
    },
    18533: (e, t, s) => {
      s.d(t, { EQ: () => n, H6: () => r, cw: () => a });
      const r = (e, t) => ({ tag: e, ...t }),
        n = (e, t) => {
          const s = e.tag,
            r = s in t ? t[s] : null;
          if (!r) throw new Error("Unmatchable case");
          return r(e);
        },
        a = (e, ...t) => !("object" != typeof e || !e) && "tag" in e && t.includes(e.tag);
    },
    948844: (e, t, s) => {
      s.d(t, {
        CP: () => g,
        DZ: () => u,
        Gx: () => m,
        Qn: () => d,
        RW: () => v,
        Tc: () => h,
        bM: () => f,
        lk: () => p,
        nb: () => c,
        pr: () => y,
        vg: () => l
      });
      var r = s(87065),
        n = s(734987),
        a = s(243978),
        o = s(287279),
        i = s(18533);
      function c(e) {
        return (t) =>
          t.pipe((0, r.U)((t) => (0, i.EQ)(t, { success: ({ data: t }) => e.success(t), failure: ({ error: t }) => e.failure(t) })));
      }
      function d(e) {
        return (t) => t.pipe((0, r.U)((t) => ((0, o.hx)(t) ? t : (0, o.Vp)(e(t.data)))));
      }
      function u(e) {
        return (t) => t.pipe((0, r.U)((t) => ((0, o.d6)(t) ? t : (0, o.Rn)(e(t.error)))));
      }
      function l(e, t) {
        return (s) => s.pipe((0, r.U)((s) => ((0, o.hx)(s) ? (t ? t(s.error) : s) : e(s.data))));
      }
      function p(e) {
        return (t) => t.pipe((0, r.U)((t) => ((0, o.hx)(t) ? t : e(t.data))));
      }
      function m(e) {
        return (t) => t.pipe((0, n.b)(async (t) => ((0, o.hx)(t) ? t : (0, o.Vp)(await e(t.data)))));
      }
      function h(e) {
        return (t) => t.pipe((0, n.b)(async (t) => ((0, o.d6)(t) ? t : (0, o.Rn)(await e(t.error)))));
      }
      function v(e) {
        return (t) => t.pipe((0, n.b)((t) => (0, o.f2)(t, e)));
      }
      function g(e) {
        return (t) => t.pipe((0, a.w)(async (t) => ((0, o.hx)(t) ? t : (0, o.Vp)(await e(t.data)))));
      }
      function y(e) {
        return (t) => t.pipe((0, a.w)(async (t) => ((0, o.d6)(t) ? t : (0, o.Rn)(await e(t.error)))));
      }
      function f(e) {
        return (t) => t.pipe((0, a.w)((t) => (0, o.f2)(t, e)));
      }
    },
    287279: (e, t, s) => {
      s.d(t, {
        Rn: () => i,
        Yv: () => m,
        db: () => p,
        hx: () => u,
        AZ: () => l,
        d6: () => d,
        SN: () => v,
        ty: () => h,
        f2: () => c,
        Vp: () => o
      });
      var r = s(18533);
      const n = "success",
        a = "failure",
        o = (e) => (0, r.H6)("success", { data: e }),
        i = (e) => (0, r.H6)("failure", { error: e }),
        c = (e, t) => (0, r.EQ)(e, { success: ({ data: e }) => t.success(e), failure: ({ error: e }) => t.failure(e) }),
        d = (e) => e.tag === n,
        u = (e) => e.tag === a,
        l = (e) => (0, r.cw)(e, n, a),
        p = (e) => e.data,
        m = (e) => e.error,
        h = (e, t) => (u(e) ? e : o(t(e.data))),
        v = (e, t) => (d(e) ? e : i(t(e.error)));
    },
    828489: (e, t, s) => {
      s.d(t, { Ay: () => n, l$: () => a, zq: () => r });
      const r = (e) => (t) => Object.assign(t, { brand: e }),
        n = (e) => e;
      function a(e, t) {
        return t in e;
      }
    }
  }
]);
