"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [274],
  {
    676240: (e, t, s) => {
      s.d(t, { m: () => u });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.User }) {}
      class a extends (0, r.g)({ scope: n.F.User }) {}
      var c = s(999059);
      class l extends (0, c.k)({ scope: n.F.User }) {}
      class d extends (0, c.k)({ scope: n.F.User }) {}
      const u = (0, o.Q)({
        name: "scim",
        commands: { updateScimConfiguration: i, generateScimToken: a },
        events: {},
        queries: { scimConfiguration: l, scimEndpoint: d }
      });
    },
    440234: (e, t, s) => {
      s.d(t, { y: () => f });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.User }) {}
      class a extends (0, r.g)({ scope: n.F.User }) {}
      class c extends (0, r.g)({ scope: n.F.User }) {}
      class l extends (0, r.g)({ scope: n.F.User }) {}
      class d extends (0, r.g)({ scope: n.F.User }) {}
      class u extends (0, r.g)({ scope: n.F.User }) {}
      class p extends (0, r.g)({ scope: n.F.Device }) {}
      class _ extends (0, r.g)({ scope: n.F.User }) {}
      class S extends (0, r.g)({ scope: n.F.User }) {}
      class E extends (0, r.g)({ scope: n.F.User }) {}
      class m extends (0, r.g)({ scope: n.F.User }) {}
      var v = s(999059);
      class O extends (0, v.k)({ scope: n.F.User }) {}
      const f = (0, o.Q)({
        name: "confidentialSSOApi",
        commands: {
          CheckDNSValidationCommand: i,
          ClearSettingsCommand: a,
          CreateTeamCommand: c,
          DeleteDomainCommand: l,
          EnableSsoCommand: d,
          InitSsoProvisioningCommand: u,
          LoginUserWithEnclaveSSOCommand: p,
          ProvisionDomainCommand: _,
          TestLoginUserWithEnclaveSSOCommand: S,
          UpdateMetadataCommand: E,
          ValidateMetadataCommand: m
        },
        events: {},
        queries: { SsoProvisioningQuery: O }
      });
    },
    622677: (e, t, s) => {
      s.d(t, { x: () => a });
      var o = s(215904),
        r = s(549259),
        n = s(661222),
        i = s(92204);
      async function a() {
        const e = await (async function () {
          const e = await (0, n.I)({}),
            t = (0, i.A)("");
          return e.filter((e) => "string" == typeof e.url && e.url.startsWith(t)).filter((e) => "" !== e.url);
        })();
        if (!e.length) return;
        const t = (0, o.a)(),
          s = e.map((e) => e.id).filter((e) => "number" == typeof e && e !== t);
        await (0, r.O)(s);
      }
    },
    653006: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    627571: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.abTestsLiveQueriesSlots = t.abTestsQueriesSlots = t.abTestsCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.abTestsCommandsSlots = { participateToUserABTest: (0, o.slot)() }),
        (t.abTestsQueriesSlots = { getUserABTestVariant: (0, o.slot)() }),
        (t.abTestsLiveQueriesSlots = { liveUserABTestVariant: (0, r.liveSlot)() });
    },
    628249: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(653006), t), r(s(627571), t);
    },
    29004: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(919240), t), r(s(169021), t);
    },
    919240: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.contactInfoLiveQueriesSlots = t.contactInfoQueriesSlots = t.contactInfoCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.contactInfoCommandsSlots = { editContactInfo: (0, o.slot)() }),
        (t.contactInfoQueriesSlots = { getContactInfo: (0, o.slot)() }),
        (t.contactInfoLiveQueriesSlots = { liveContactInfo: (0, r.liveSlot)() });
    },
    169021: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EditContactInfoErrorCode = void 0),
        (function (e) {
          (e[(e.EMPTY_EMAIL = 0)] = "EMPTY_EMAIL"),
            (e[(e.INVALID_EMAIL = 1)] = "INVALID_EMAIL"),
            (e[(e.UNKNOWN_ERROR = 2)] = "UNKNOWN_ERROR");
        })(t.EditContactInfoErrorCode || (t.EditContactInfoErrorCode = {}));
    },
    90041: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(483559), t);
    },
    483559: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.subscriptionCodeLiveQueriesSlots = t.subscriptionCodeQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.subscriptionCodeQueriesSlots = { getSubscriptionCode: (0, o.slot)() }),
        (t.subscriptionCodeLiveQueriesSlots = { liveSubscriptionCode: (0, r.liveSlot)() });
    },
    53042: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AccountCreationCode = void 0),
        (function (e) {
          (e[(e.USER_EXISTS = 0)] = "USER_EXISTS"),
            (e[(e.USER_DOESNT_EXIST = 1)] = "USER_DOESNT_EXIST"),
            (e[(e.USER_DOESNT_EXIST_UNLIKELY_MX = 2)] = "USER_DOESNT_EXIST_UNLIKELY_MX"),
            (e[(e.USER_DOESNT_EXIST_INVALID_MX = 3)] = "USER_DOESNT_EXIST_INVALID_MX"),
            (e[(e.USER_DOESNT_EXIST_SSO_NON_PROVISIONED = 4)] = "USER_DOESNT_EXIST_SSO_NON_PROVISIONED"),
            (e[(e.USER_SSO_PROVISIONED = 5)] = "USER_SSO_PROVISIONED"),
            (e[(e.USER_NITRO_SSO_PROVISIONED = 6)] = "USER_NITRO_SSO_PROVISIONED"),
            (e[(e.USER_NOT_PROPOSED = 7)] = "USER_NOT_PROPOSED");
        })(t.AccountCreationCode || (t.AccountCreationCode = {}));
    },
    912972: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.accountCreationLiveQueriesSlots = void 0);
      const o = s(672345);
      t.accountCreationLiveQueriesSlots = { liveAccountCreated: (0, o.liveSlot)() };
    },
    533773: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(53042), t), r(s(912972), t);
    },
    416307: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.antiPhishingLiveQueriesSlots = void 0);
      const o = s(672345);
      t.antiPhishingLiveQueriesSlots = { livePhishingURLList: (0, o.liveSlot)() };
    },
    765722: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(416307), t);
    },
    22786: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(614529), t), r(s(254876), t);
    },
    614529: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.twoFactorAuthenticationLiveQueriesSlots =
          t.twoFactorAuthenticationQueriesSlots =
          t.twoFactorAuthenticationCommandsSlots =
            void 0);
      const o = s(71796),
        r = s(672345);
      (t.twoFactorAuthenticationCommandsSlots = {
        refreshU2FDevicesList: (0, o.slot)(),
        removeU2FAuthenticator: (0, o.slot)(),
        refreshTwoFactorAuthenticationInfo: (0, o.slot)(),
        startTwoFactorAuthenticationEnableFlow: (0, o.slot)(),
        stopTwoFactorAuthenticationEnableFlow: (0, o.slot)(),
        continueTwoFactorAuthenticationEnableFlow: (0, o.slot)(),
        backTwoFactorAuthenticationEnableFlow: (0, o.slot)(),
        startTwoFactorAuthenticationDisableFlow: (0, o.slot)(),
        stopTwoFactorAuthenticationDisableFlow: (0, o.slot)(),
        continueTwoFactorAuthenticationDisableFlow: (0, o.slot)(),
        backTwoFactorAuthenticationDisableFlow: (0, o.slot)()
      }),
        (t.twoFactorAuthenticationQueriesSlots = {
          getU2FDevicesList: (0, o.slot)(),
          getTwoFactorAuthenticationEnableStage: (0, o.slot)(),
          getTwoFactorAuthenticationDisableStage: (0, o.slot)()
        }),
        (t.twoFactorAuthenticationLiveQueriesSlots = {
          liveU2FDevicesList: (0, r.liveSlot)(),
          liveTwoFactorAuthenticationEnableStage: (0, r.liveSlot)(),
          liveTwoFactorAuthenticationDisableStage: (0, r.liveSlot)()
        });
    },
    254876: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RequestTOTPActivationError =
          t.TwoFactorAuthenticationDisableStages =
          t.TwoFactorAuthenticationEnableStages =
          t.RemoveU2FAuthenticatorError =
          t.RefreshU2FErrorCode =
            void 0),
        (function (e) {
          e[(e.UNKNOWN_ERROR = 0)] = "UNKNOWN_ERROR";
        })(t.RefreshU2FErrorCode || (t.RefreshU2FErrorCode = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NO_KEYHANDLE_FOUND = "NO_KEYHANDLE_FOUND"),
            (e.WRONG_AUTHENTICATION_CODE = "WRONG_AUTHENTICATION_CODE");
        })(t.RemoveU2FAuthenticatorError || (t.RemoveU2FAuthenticatorError = {})),
        (function (e) {
          (e.AUTHENTICATION_TYPE = "AUTHENTICATION_TYPE"),
            (e.BACKUP_PHONE = "BACKUP_PHONE"),
            (e.QR_CODE = "QR_CODE"),
            (e.AUTHENTICATION_CODE = "AUTHENTICATION_CODE"),
            (e.LOADING = "LOADING"),
            (e.FINALIZING_CHANGES = "FINALIZING_CHANGES"),
            (e.BACKUP_CODES = "BACKUP_CODES"),
            (e.GENERIC_ERROR = "GENERIC_ERROR"),
            (e.LOGOUT_REQUIRED = "LOGOUT_REQUIRED"),
            (e.SUCCESS = "SUCCESS");
        })(t.TwoFactorAuthenticationEnableStages || (t.TwoFactorAuthenticationEnableStages = {})),
        (function (e) {
          (e.CONFIRMATION = "CONFIRMATION"),
            (e.AUTHENTICATION_CODE = "AUTHENTICATION_CODE"),
            (e.BACKUP_CODE = "BACKUP_CODE"),
            (e.FINALIZING_CHANGES = "FINALIZING_CHANGES"),
            (e.SUCCESS = "SUCCESS"),
            (e.LOGOUT_REQUIRED = "LOGOUT_REQUIRED"),
            (e.GENERIC_ERROR = "GENERIC_ERROR");
        })(t.TwoFactorAuthenticationDisableStages || (t.TwoFactorAuthenticationDisableStages = {})),
        (function (e) {
          (e.INTERNAL_ERROR = "internal_error"),
            (e.CANNOT_SEED_FOR_USER_WITH_TOTP_ENABLED = "cannot_seed_for_user_with_TOTP_enabled"),
            (e.OTP_FAILED = "otp_failed"),
            (e.TOTP_TYPE_IS_NOT_SET_TO_EMAIL_TOKEN = "totp_type_is_not_set_to_email_token"),
            (e.PHONE_VALIDATION_FAILED = "phone_validation_failed");
        })(t.RequestTOTPActivationError || (t.RequestTOTPActivationError = {}));
    },
    230156: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(447817), t), r(s(401195), t);
    },
    401195: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InitUserVerificationWithWebAuthnError =
          t.RemoveWebAuthnAuthenticatorError =
          t.DisableWebAuthnAuthenticationError =
          t.OpenSessionWithWebAuthnAuthenticatorError =
          t.InitOpenSessionWithWebAuthnAuthenticatorError =
          t.RefreshAvailableWebAuthnAuthenticatorsError =
          t.RefreshWebAuthnAuthenticatorsError =
          t.RegisterWebAuthnAuthenticatorError =
          t.InitRegisterWebAuthnAuthenticatorError =
          t.EnableWebAuthnAuthenticationError =
          t.InitEnableWebAuthnAuthenticationError =
          t.WebAuthnCallTypes =
            void 0),
        (t.WebAuthnCallTypes = Object.freeze({ CREATE: "webauthn.create", GET: "webauthn.get" })),
        (function (e) {
          e.UNKNOWN_ERROR = "UNKNOWN_ERROR";
        })(t.InitEnableWebAuthnAuthenticationError || (t.InitEnableWebAuthnAuthenticationError = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.USER_HAS_OTP = "USER_HAS_OTP"),
            (e.WEBAUTHN_SERVICE_INIT_FAILED = "WEBAUTHN_SERVICE_INIT_FAILED");
        })(t.EnableWebAuthnAuthenticationError || (t.EnableWebAuthnAuthenticationError = {})),
        (function (e) {
          e.UNKNOWN_ERROR = "UNKNOWN_ERROR";
        })(t.InitRegisterWebAuthnAuthenticatorError || (t.InitRegisterWebAuthnAuthenticatorError = {})),
        (function (e) {
          (e.USER_HAS_OTP = "USER_HAS_OTP"), (e.UNKNOWN_ERROR = "UNKNOWN_ERROR");
        })(t.RegisterWebAuthnAuthenticatorError || (t.RegisterWebAuthnAuthenticatorError = {})),
        (function (e) {
          e.UNKNOWN_ERROR = "UNKNOWN_ERROR";
        })(t.RefreshWebAuthnAuthenticatorsError || (t.RefreshWebAuthnAuthenticatorsError = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"), (e.MISSING_SESSION_KEYS_IN_STORE = "MISSING_SESSION_KEYS_IN_STORE");
        })(t.RefreshAvailableWebAuthnAuthenticatorsError || (t.RefreshAvailableWebAuthnAuthenticatorsError = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.UNAVAILABLE_AUTHENTICATORS = "UNAVAILABLE_AUTHENTICATORS"),
            (e.CANNOT_TRIGGER_WEBAUTHN_AUTHENTICATION = "CANNOT_TRIGGER_WEBAUTHN_AUTHENTICATION");
        })(t.InitOpenSessionWithWebAuthnAuthenticatorError || (t.InitOpenSessionWithWebAuthnAuthenticatorError = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"), (e.MP_MISSING_IN_SESSION_ERROR = "MP_MISSING_IN_SESSION_ERROR");
        })(t.OpenSessionWithWebAuthnAuthenticatorError || (t.OpenSessionWithWebAuthnAuthenticatorError = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.WEBAUTHN_SERVICE_DEACTIVATE_FAILED = "WEBAUTHN_SERVICE_DEACTIVATE_FAILED"),
            (e.MISSING_LOGIN = "MISSING_LOGIN");
        })(t.DisableWebAuthnAuthenticationError || (t.DisableWebAuthnAuthenticationError = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"), (e.CANNOT_REMOVE_WEBAUTHN_AUTHENTICATOR = "CANNOT_REMOVE_WEBAUTHN_AUTHENTICATOR");
        })(t.RemoveWebAuthnAuthenticatorError || (t.RemoveWebAuthnAuthenticatorError = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.LOGGED_OUT = "LOGGED_OUT"),
            (e.CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS = "CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS"),
            (e.CANNOT_FETCH_WEBAUTHN_CHALLENGE = "CANNOT_FETCH_WEBAUTHN_CHALLENGE");
        })(t.InitUserVerificationWithWebAuthnError || (t.InitUserVerificationWithWebAuthnError = {}));
    },
    447817: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.webAuthnAuthenticationLiveQueriesSlots = t.webAuthnAuthenticationQueriesSlots = t.webAuthnAuthenticationCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.webAuthnAuthenticationCommandsSlots = {
        enableWebAuthnAuthentication: (0, o.slot)(),
        initEnableWebAuthnAuthentication: (0, o.slot)(),
        refreshAvailableWebAuthnAuthenticators: (0, o.slot)(),
        refreshWebAuthnAuthenticators: (0, o.slot)(),
        initRegisterWebAuthnAuthenticator: (0, o.slot)(),
        registerWebAuthnAuthenticator: (0, o.slot)(),
        initOpenSessionWithWebAuthnAuthenticator: (0, o.slot)(),
        openSessionWithWebAuthnAuthenticator: (0, o.slot)(),
        disableWebAuthnAuthentication: (0, o.slot)(),
        removeWebAuthnAuthenticator: (0, o.slot)(),
        initUserVerificationWithWebAuthn: (0, o.slot)()
      }),
        (t.webAuthnAuthenticationQueriesSlots = {
          getWebAuthnAuthenticators: (0, o.slot)(),
          getWebAuthnAuthenticationOptedIn: (0, o.slot)()
        }),
        (t.webAuthnAuthenticationLiveQueriesSlots = {
          liveWebAuthnAuthenticators: (0, r.liveSlot)(),
          liveWebAuthnAuthenticationOptedIn: (0, r.liveSlot)()
        });
    },
    829814: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.authenticationLiveQueriesSlots = t.authenticationQueriesSlots = t.authenticationCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345),
        n = s(22786),
        i = s(230156);
      (t.authenticationCommandsSlots = (0, o.combineEvents)(
        {
          registerDevice: (0, o.slot)(),
          requestExtraDeviceToken: (0, o.slot)(),
          requestEmailToken: (0, o.slot)(),
          requestPaymentUpdateAuthenticationToken: (0, o.slot)(),
          setReactivationStatus: (0, o.slot)()
        },
        i.webAuthnAuthenticationCommandsSlots,
        n.twoFactorAuthenticationCommandsSlots
      )),
        (t.authenticationQueriesSlots = (0, o.combineEvents)(
          {
            getHasOtp2Type: (0, o.slot)(),
            getUserOtpType: (0, o.slot)(),
            getReactivationStatus: (0, o.slot)(),
            getAvailableUserVerificationMethods: (0, o.slot)()
          },
          i.webAuthnAuthenticationQueriesSlots,
          n.twoFactorAuthenticationQueriesSlots
        )),
        (t.authenticationLiveQueriesSlots = (0, o.combineEvents)(
          { liveReactivationStatus: (0, r.liveSlot)() },
          i.webAuthnAuthenticationLiveQueriesSlots,
          n.twoFactorAuthenticationLiveQueriesSlots
        ));
    },
    925098: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(829814), t), r(s(352632), t), r(s(22786), t), r(s(230156), t);
    },
    352632: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AuthenticationCode =
          t.OtpType =
          t.UserVerificationMethods =
          t.PersistData =
          t.ReactivationStatus =
          t.EmailTokenApiError =
            void 0),
        (t.EmailTokenApiError = "SEND_TOKEN_FAILED"),
        (function (e) {
          (e.DISABLED = "DISABLED"), (e.CLASSIC = "CLASSIC"), (e.WEBAUTHN = "WEBAUTHN");
        })(t.ReactivationStatus || (t.ReactivationStatus = {})),
        (function (e) {
          (e[(e.PERSIST_DATA_YES = 0)] = "PERSIST_DATA_YES"), (e[(e.PERSIST_DATA_NO = 1)] = "PERSIST_DATA_NO");
        })(t.PersistData || (t.PersistData = {})),
        (t.UserVerificationMethods = Object.freeze({ MasterPassword: "masterPassword", Webauthn: "webauthn" })),
        (function (e) {
          (e[(e.NO_OTP = 0)] = "NO_OTP"), (e[(e.OTP_NEW_DEVICE = 1)] = "OTP_NEW_DEVICE"), (e[(e.OTP_LOGIN = 2)] = "OTP_LOGIN");
        })(t.OtpType || (t.OtpType = {})),
        (function (e) {
          (e[(e.INVALID_LOGIN = 0)] = "INVALID_LOGIN"),
            (e[(e.EMPTY_LOGIN = 1)] = "EMPTY_LOGIN"),
            (e[(e.EMPTY_MASTER_PASSWORD = 2)] = "EMPTY_MASTER_PASSWORD"),
            (e[(e.EMPTY_ENCRYPTED_KEY = 3)] = "EMPTY_ENCRYPTED_KEY"),
            (e[(e.INVALID_ENCRYPTED_KEY = 4)] = "INVALID_ENCRYPTED_KEY"),
            (e[(e.EMPTY_TOKEN = 5)] = "EMPTY_TOKEN"),
            (e[(e.EMPTY_OTP = 6)] = "EMPTY_OTP"),
            (e[(e.SEND_TOKEN_FAILED = 7)] = "SEND_TOKEN_FAILED"),
            (e[(e.UKI_REGISTRATION_FAILED = 8)] = "UKI_REGISTRATION_FAILED"),
            (e[(e.REGISTER_DEVICE_FAILED = 9)] = "REGISTER_DEVICE_FAILED"),
            (e[(e.BUSINESS_ERROR = 10)] = "BUSINESS_ERROR"),
            (e[(e.USER_DOESNT_EXIST = 11)] = "USER_DOESNT_EXIST"),
            (e[(e.USER_DOESNT_EXIST_UNLIKELY_MX = 12)] = "USER_DOESNT_EXIST_UNLIKELY_MX"),
            (e[(e.USER_DOESNT_EXIST_INVALID_MX = 13)] = "USER_DOESNT_EXIST_INVALID_MX"),
            (e[(e.USER_UNAUTHORIZED = 14)] = "USER_UNAUTHORIZED"),
            (e[(e.WRONG_PASSWORD = 15)] = "WRONG_PASSWORD"),
            (e[(e.DATA_TAMPERED_ERROR = 16)] = "DATA_TAMPERED_ERROR"),
            (e[(e.LOGGEDIN = 17)] = "LOGGEDIN"),
            (e[(e.ASK_TOKEN = 18)] = "ASK_TOKEN"),
            (e[(e.ASK_OTP = 19)] = "ASK_OTP"),
            (e[(e.ASK_MASTER_PASSWORD = 20)] = "ASK_MASTER_PASSWORD"),
            (e[(e.USE_LOCAL_UKI = 21)] = "USE_LOCAL_UKI"),
            (e[(e.ASK_DASHLANE_AUTHENTICATOR = 22)] = "ASK_DASHLANE_AUTHENTICATOR"),
            (e[(e.OTP_NOT_VALID = 23)] = "OTP_NOT_VALID"),
            (e[(e.OTP_TOO_MANY_ATTEMPTS = 24)] = "OTP_TOO_MANY_ATTEMPTS"),
            (e[(e.OTP_ALREADY_USED = 25)] = "OTP_ALREADY_USED"),
            (e[(e.BACKUP_CODE_NOT_VALID = 26)] = "BACKUP_CODE_NOT_VALID"),
            (e[(e.TOKEN_NOT_VALID = 27)] = "TOKEN_NOT_VALID"),
            (e[(e.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED = 28)] = "DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED"),
            (e[(e.SERVER_KEY_MISSING = 29)] = "SERVER_KEY_MISSING"),
            (e[(e.TOKEN_LOCKED = 30)] = "TOKEN_LOCKED"),
            (e[(e.TOKEN_TOO_MANY_ATTEMPTS = 31)] = "TOKEN_TOO_MANY_ATTEMPTS"),
            (e[(e.TOKEN_ACCOUNT_LOCKED = 32)] = "TOKEN_ACCOUNT_LOCKED"),
            (e[(e.TOKEN_EXPIRED = 33)] = "TOKEN_EXPIRED"),
            (e[(e.NO_ACTIVE_AUTHENTICATOR = 34)] = "NO_ACTIVE_AUTHENTICATOR"),
            (e[(e.FAILED_TO_CONTACT_AUTHENTICATOR_DEVICE = 35)] = "FAILED_TO_CONTACT_AUTHENTICATOR_DEVICE"),
            (e[(e.DASHLANE_AUTHENTICATOR_ASKED_FOR_LOCAL_SESSION = 36)] = "DASHLANE_AUTHENTICATOR_ASKED_FOR_LOCAL_SESSION"),
            (e[(e.DASHLANE_AUTHENTICATOR_LOGIN_CANCELLED = 37)] = "DASHLANE_AUTHENTICATOR_LOGIN_CANCELLED"),
            (e[(e.TOKEN_PROVIDED_FOR_LOCAL_SESSION = 38)] = "TOKEN_PROVIDED_FOR_LOCAL_SESSION"),
            (e[(e.DEVICE_ALREADY_REGISTERED = 39)] = "DEVICE_ALREADY_REGISTERED"),
            (e[(e.OTP_PROVIDED_FOR_LOCAL_NON_OTP_SESSION = 40)] = "OTP_PROVIDED_FOR_LOCAL_NON_OTP_SESSION"),
            (e[(e.DIFFERENT_LOGIN_PROVIDED_WITH_TOKEN_OR_OTP = 41)] = "DIFFERENT_LOGIN_PROVIDED_WITH_TOKEN_OR_OTP"),
            (e[(e.UNKNOWN_SYNC_ERROR = 42)] = "UNKNOWN_SYNC_ERROR"),
            (e[(e.INVALID_UKI = 43)] = "INVALID_UKI"),
            (e[(e.UNKNOWN_UKI = 44)] = "UNKNOWN_UKI"),
            (e[(e.UNKNOWN_ERROR = 45)] = "UNKNOWN_ERROR"),
            (e[(e.UNEXPECTED_OTP_TYPE = 46)] = "UNEXPECTED_OTP_TYPE"),
            (e[(e.UNAUTHORIZED = 47)] = "UNAUTHORIZED"),
            (e[(e.UNAUTHORIZED_NOT_VALID_CONTENT = 48)] = "UNAUTHORIZED_NOT_VALID_CONTENT"),
            (e[(e.NETWORK_ERROR = 49)] = "NETWORK_ERROR"),
            (e[(e.THROTTLED = 50)] = "THROTTLED"),
            (e[(e.SESSION_ALREADY_OPENED = 51)] = "SESSION_ALREADY_OPENED"),
            (e[(e.INVALID_SESSION = 52)] = "INVALID_SESSION"),
            (e[(e.DEVICE_NOT_REGISTERED = 53)] = "DEVICE_NOT_REGISTERED"),
            (e[(e.MISSING_APP_KEYS = 54)] = "MISSING_APP_KEYS"),
            (e[(e.PROVIDE_EXTRA_DEVICE_TOKEN = 55)] = "PROVIDE_EXTRA_DEVICE_TOKEN"),
            (e[(e.PROVIDE_MASTER_PASSWORD_FOR_EXTRA_DEVICE = 56)] = "PROVIDE_MASTER_PASSWORD_FOR_EXTRA_DEVICE"),
            (e[(e.PROVIDE_MASTER_PASSWORD_AND_SERVER_KEY_FOR_EXTRA_DEVICE = 57)] =
              "PROVIDE_MASTER_PASSWORD_AND_SERVER_KEY_FOR_EXTRA_DEVICE"),
            (e[(e.ASK_OTP_FOR_NEW_DEVICE = 58)] = "ASK_OTP_FOR_NEW_DEVICE"),
            (e[(e.TEAM_GENERIC_ERROR = 59)] = "TEAM_GENERIC_ERROR"),
            (e[(e.SSO_LOGIN_BYPASS = 60)] = "SSO_LOGIN_BYPASS"),
            (e[(e.SSO_VERIFICATION_FAILED = 61)] = "SSO_VERIFICATION_FAILED"),
            (e[(e.SSO_BLOCKED = 62)] = "SSO_BLOCKED"),
            (e[(e.CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION = 63)] = "CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION"),
            (e[(e.USER_DOESNT_EXIST_SSO = 64)] = "USER_DOESNT_EXIST_SSO");
        })(t.AuthenticationCode || (t.AuthenticationCode = {}));
    },
    1295: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.autofillDataQueriesSlots = void 0);
      const o = s(71796);
      t.autofillDataQueriesSlots = {
        getSingleAddressForAutofill: (0, o.slot)(),
        getMultipleAddressesForAutofill: (0, o.slot)(),
        getSingleBankAccountForAutofill: (0, o.slot)(),
        getMultipleBankAccountsForAutofill: (0, o.slot)(),
        getSingleCompanyForAutofill: (0, o.slot)(),
        getMultipleCompaniesForAutofill: (0, o.slot)(),
        getSingleCredentialForAutofill: (0, o.slot)(),
        getMultipleCredentialsForAutofill: (0, o.slot)(),
        getSingleDriverLicenseForAutofill: (0, o.slot)(),
        getMultipleDriverLicensesForAutofill: (0, o.slot)(),
        getSingleEmailForAutofill: (0, o.slot)(),
        getMultipleEmailsForAutofill: (0, o.slot)(),
        getSingleFiscalIdForAutofill: (0, o.slot)(),
        getMultipleFiscalIdsForAutofill: (0, o.slot)(),
        getSingleGeneratedPasswordForAutofill: (0, o.slot)(),
        getMultipleGeneratedPasswordsForAutofill: (0, o.slot)(),
        getSingleIdCardForAutofill: (0, o.slot)(),
        getMultipleIdCardsForAutofill: (0, o.slot)(),
        getSingleIdentityForAutofill: (0, o.slot)(),
        getMultipleIdentitiesForAutofill: (0, o.slot)(),
        getSingleNoteForAutofill: (0, o.slot)(),
        getMultipleNotesForAutofill: (0, o.slot)(),
        getSinglePasskeyForAutofill: (0, o.slot)(),
        getSinglePassportForAutofill: (0, o.slot)(),
        getMultiplePassportsForAutofill: (0, o.slot)(),
        getSinglePaymentCardForAutofill: (0, o.slot)(),
        getMultiplePaymentCardsForAutofill: (0, o.slot)(),
        getSinglePersonalWebsiteForAutofill: (0, o.slot)(),
        getMultiplePersonalWebsitesForAutofill: (0, o.slot)(),
        getSinglePhoneForAutofill: (0, o.slot)(),
        getMultiplePhonesForAutofill: (0, o.slot)(),
        getSingleSocialSecurityIdForAutofill: (0, o.slot)(),
        getMultipleSocialSecurityIdsForAutofill: (0, o.slot)(),
        getAutofillSettingOnUrlForAutofill: (0, o.slot)()
      };
    },
    594372: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(1295), t), r(s(937905), t), r(s(660188), t), r(s(942362), t);
    },
    660188: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    937905: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AutofillOptions = void 0),
        (function (e) {
          (e.ANALYSIS_ENABLED_ON_ALL_FORMS = "ANALYSIS_ENABLED_ON_ALL_FORMS"),
            (e.ANALYSIS_ENABLED_ONLY_ON_LOGINS_AND_PASSWORDS = "ANALYSIS_ENABLED_ONLY_ON_LOGINS_AND_PASSWORDS");
        })(t.AutofillOptions || (t.AutofillOptions = {}));
    },
    942362: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vaultSourceTypeToDataModelTypeMap = void 0);
      const o = s(249360),
        r = s(744225);
      t.vaultSourceTypeToDataModelTypeMap = {
        [o.VaultSourceType.Address]: r.DataModelType.KWAddress,
        [o.VaultSourceType.BankAccount]: r.DataModelType.KWBankStatement,
        [o.VaultSourceType.Company]: r.DataModelType.KWCompany,
        [o.VaultSourceType.Credential]: r.DataModelType.KWAuthentifiant,
        [o.VaultSourceType.CredentialCategory]: r.DataModelType.KWAuthCategory,
        [o.VaultSourceType.DriverLicense]: r.DataModelType.KWDriverLicence,
        [o.VaultSourceType.Email]: r.DataModelType.KWEmail,
        [o.VaultSourceType.FiscalId]: r.DataModelType.KWFiscalStatement,
        [o.VaultSourceType.GeneratedPassword]: r.DataModelType.KWGeneratedPassword,
        [o.VaultSourceType.IdCard]: r.DataModelType.KWIDCard,
        [o.VaultSourceType.Identity]: r.DataModelType.KWIdentity,
        [o.VaultSourceType.NoteCategory]: r.DataModelType.KWSecureNoteCategory,
        [o.VaultSourceType.Note]: r.DataModelType.KWSecureNote,
        [o.VaultSourceType.Passkey]: r.DataModelType.KWPasskey,
        [o.VaultSourceType.Passport]: r.DataModelType.KWPassport,
        [o.VaultSourceType.PaymentCard]: r.DataModelType.KWPaymentMean_creditCard,
        [o.VaultSourceType.PersonalWebsite]: r.DataModelType.KWPersonalWebsite,
        [o.VaultSourceType.Phone]: r.DataModelType.KWPhone,
        [o.VaultSourceType.SocialSecurityId]: r.DataModelType.KWSocialSecurityStatement
      };
    },
    539229: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonApiConnector = void 0);
      const o = s(71796),
        r = s(552240),
        n = s(78178),
        i = s(690397);
      t.CarbonApiConnector = (0, o.combineEvents)(r.carbonCommandsSlots, n.carbonQueriesSlots, i.carbonLiveQueriesSlots);
    },
    552240: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonCommandsSlots = void 0);
      const o = s(71796),
        r = s(628249),
        n = s(29004),
        i = s(925098),
        a = s(315874),
        c = s(250459),
        l = s(114811),
        d = s(630897),
        u = s(65005),
        p = s(329450),
        _ = s(796035),
        S = s(506666),
        E = s(815925),
        m = s(968183),
        v = s(506768),
        O = s(458290),
        f = s(878779),
        A = s(137174),
        g = s(160687),
        h = s(577277),
        T = s(649106),
        y = s(968440),
        C = s(34852),
        I = s(131525),
        N = s(9987),
        R = s(857369),
        P = s(622162),
        b = s(931955),
        D = s(488219);
      t.carbonCommandsSlots = (0, o.combineEvents)(
        r.abTestsCommandsSlots,
        i.authenticationCommandsSlots,
        a.changeMasterPasswordCommandsSlots,
        n.contactInfoCommandsSlots,
        c.cryptoMigrationCommandsSlots,
        l.darkWebInsightsCommandsSlots,
        d.dataManagementCommandsSlots,
        E.eventLoggerCommandsSlots,
        m.exceptionCommandsSlots,
        u.familyCommandsSlots,
        _.globalExtensionSettingsCommandsSlots,
        S.healthCommandsSlots,
        v.loginCommandsSlots,
        O.loginNotificationsCommandsSlots,
        f.loginStepInfoCommandsSlots,
        A.notificationsCommandsSlots,
        g.openSessionCommandsSlots,
        h.passwordGeneratorCommandsSlots,
        T.paymentsCommandsSlots,
        y.protectedItemsUnlockerCommandsSlots,
        C.recoveryCommandsSlots,
        p.remoteFileCommandsSlots,
        I.sharingCommandsSlots,
        N.teamCommandsSlots,
        R.teamAdminCommandsSlots,
        P.userMessagesCommandsSlots,
        b.vpnCommandsSlots,
        D.deviceCommandsSlots
      );
    },
    690397: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonLiveQueriesSlots = void 0);
      const o = s(71796),
        r = s(628249),
        n = s(29004),
        i = s(90041),
        a = s(533773),
        c = s(765722),
        l = s(925098),
        d = s(630897),
        u = s(315874),
        p = s(250459),
        _ = s(329450),
        S = s(224875),
        E = s(458290),
        m = s(878779),
        v = s(137174),
        O = s(160687),
        f = s(968440),
        A = s(34852),
        g = s(131525),
        h = s(857369),
        T = s(622162),
        y = s(931955);
      t.carbonLiveQueriesSlots = (0, o.combineEvents)(
        r.abTestsLiveQueriesSlots,
        a.accountCreationLiveQueriesSlots,
        c.antiPhishingLiveQueriesSlots,
        l.authenticationLiveQueriesSlots,
        u.changeMasterPasswordLiveQueriesSlots,
        n.contactInfoLiveQueriesSlots,
        p.cryptoMigrationLiveQueriesSlots,
        d.dataManagementLiveQueriesSlots,
        S.killswitchLiveQueriesSlots,
        E.loginNotificationsLiveQueriesSlots,
        m.loginStepInfoLiveQueriesSlots,
        v.notificationsLiveQueriesSlots,
        O.openSessionLiveQueriesSlots,
        f.protectedItemsUnlockerLiveQueriesSlots,
        A.recoveryLiveQueriesSlots,
        _.remoteFilesLiveQueriesSlots,
        g.sharingLiveQueriesSlots,
        i.subscriptionCodeLiveQueriesSlots,
        h.teamAdminLiveQueriesSlots,
        T.userMessagesLiveQueriesSlots,
        y.vpnLiveQueriesSlots
      );
    },
    78178: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonQueriesSlots = void 0);
      const o = s(71796),
        r = s(628249),
        n = s(29004),
        i = s(90041),
        a = s(925098),
        c = s(594372),
        l = s(630897),
        d = s(250459),
        u = s(488219),
        p = s(180898),
        _ = s(329450),
        S = s(224875),
        E = s(458290),
        m = s(878779),
        v = s(137174),
        O = s(160687),
        f = s(577277),
        A = s(649106),
        g = s(968440),
        h = s(34852),
        T = s(98655),
        y = s(131525),
        C = s(9987),
        I = s(857369),
        N = s(622162),
        R = s(931955);
      t.carbonQueriesSlots = (0, o.combineEvents)(
        r.abTestsQueriesSlots,
        a.authenticationQueriesSlots,
        c.autofillDataQueriesSlots,
        n.contactInfoQueriesSlots,
        d.cryptoMigrationQueriesSlots,
        l.dataManagementQueriesSlots,
        u.deviceQueriesSlots,
        p.featureQueriesSlots,
        S.killswitchQueriesSlots,
        E.loginNotificationsQueriesSlots,
        m.loginStepInfoQueriesSlots,
        v.notificationsQueriesSlots,
        O.openSessionQueriesSlots,
        f.passwordGeneratorQueriesSlots,
        A.paymentsQueriesSlots,
        g.protectedItemsUnlockerQueriesSlots,
        h.recoveryQueriesSlots,
        _.remoteFilesQueriesSlots,
        y.sharingQueriesSlots,
        T.staticDataQueriesSlots,
        i.subscriptionCodeQueriesSlots,
        C.teamQueriesSlots,
        I.teamAdminQueriesSlots,
        N.userMessagesQueriesSlots,
        R.vpnQueriesSlots
      );
    },
    808438: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(552240), t), r(s(690397), t), r(s(78178), t), r(s(539229), t);
    },
    672345: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(60283), t), r(s(900910), t), r(s(808438), t), r(s(153143), t);
    },
    900910: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    60283: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.liveSlot = void 0);
      const o = s(71796),
        r = { noBuffer: !0 };
      t.liveSlot = () => (0, o.slot)(r);
    },
    153143: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    935715: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonDebugConnector = void 0);
      const o = s(71796);
      t.CarbonDebugConnector = { log: (0, o.slot)(), info: (0, o.slot)(), warning: (0, o.slot)(), error: (0, o.slot)() };
    },
    811873: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    480112: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(935715), t), r(s(811873), t);
    },
    879702: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonDiagnosticConnector = void 0);
      const o = s(71796);
      t.CarbonDiagnosticConnector = { decipheringDiagnosticLogEvent: (0, o.slot)() };
    },
    531427: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    255334: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(879702), t), r(s(531427), t);
    },
    680213: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.changeMasterPasswordLiveQueriesSlots = t.changeMasterPasswordCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.changeMasterPasswordCommandsSlots = { changeMasterPassword: (0, o.slot)() }),
        (t.changeMasterPasswordLiveQueriesSlots = { liveChangeMasterPasswordStatus: (0, r.liveSlot)() });
    },
    315874: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(680213), t), r(s(714776), t);
    },
    714776: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ChangeMasterPasswordStepNeeded = t.ChangeMasterPasswordCode = t.ChangeMPFlowPath = void 0),
        (function (e) {
          (e.USER_CHANGING_MP = "USER_CHANGING_MP"),
            (e.MP_TO_SSO = "MP_TO_SSO"),
            (e.SSO_TO_MP = "SSO_TO_MP"),
            (e.TO_EMAIL_TOKEN = "EMAIL_TOKEN"),
            (e.ADMIN_ASSISTED_RECOVERY = "ADMIN_ASSISTED_RECOVERY"),
            (e.ACCOUNT_RECOVERY_KEY = "ACCOUNT_RECOVERY_KEY");
        })(t.ChangeMPFlowPath || (t.ChangeMPFlowPath = {})),
        (function (e) {
          (e.FEATURE_BLOCKED = "feature_blocked"),
            (e.INNACTIVE_SESSION = "inactive_session"),
            (e.INVALID_TOKEN = "invalid_token"),
            (e.OTP_PROBLEM = "otp_problem"),
            (e.MP_ERROR = "mp_error"),
            (e.MP_STRENGTH_ERROR = "mp_strength_error"),
            (e.SUCCESS = "success"),
            (e.SYNC_PROGRESS = "sync_in_progress"),
            (e.UNKNOWN_ERROR = "unknown_error"),
            (e.WRONG_PASSWORD = "wrong_password"),
            (e.UNEXPECTED_STATE = "unexpected_state");
        })(t.ChangeMasterPasswordCode || (t.ChangeMasterPasswordCode = {})),
        (function (e) {
          (e.DOWNLOAD = "download"),
            (e.DECRYPTING = "decrypting"),
            (e.ENCRYPTING = "encrypting"),
            (e.UPLOADING = "uploading"),
            (e.DONE = "done"),
            (e.ERROR = "error");
        })(t.ChangeMasterPasswordStepNeeded || (t.ChangeMasterPasswordStepNeeded = {}));
    },
    223411: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cryptoMigrationLiveQueriesSlots = t.cryptoMigrationQueriesSlots = t.cryptoMigrationCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.cryptoMigrationCommandsSlots = { changeUserCrypto: (0, o.slot)() }),
        (t.cryptoMigrationQueriesSlots = { getCanUserChangeCrypto: (0, o.slot)(), getUserDerivationMethod: (0, o.slot)() }),
        (t.cryptoMigrationLiveQueriesSlots = { liveUserDerivationMethod: (0, r.liveSlot)() });
    },
    250459: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(223411), t), r(s(292490), t);
    },
    292490: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SupportedDerivationMethods = t.CryptoMigrationApiErrorType = void 0),
        (function (e) {
          e.ChangeUserCryptoFailed = "CHANGE_USER_CRYPTO_FAILED";
        })(t.CryptoMigrationApiErrorType || (t.CryptoMigrationApiErrorType = {})),
        (function (e) {
          (e.ARGON2D = "argon2d"), (e.PBKDF2 = "pbkdf2"), (e.KWC3 = "kwc3");
        })(t.SupportedDerivationMethods || (t.SupportedDerivationMethods = {}));
    },
    910130: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.darkWebInsightsCommandsSlots = void 0);
      const o = s(71796);
      t.darkWebInsightsCommandsSlots = { getDarkWebInsightsReportResults: (0, o.slot)(), getDarkWebInsightsSummary: (0, o.slot)() };
    },
    114811: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(910130), t), r(s(976128), t);
    },
    976128: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EmailIncidentViewStatuses = t.DarkWebInsightsBreachType = t.DarkWebInsightsApiErrorType = void 0),
        (function (e) {
          (e.GetDarkWebInsightsFailed = "GET_DARK_WEB_INSIGHTS_FAILED"),
            (e.GetDarkWebInsightsSummaryFailed = "GET_DARK_WEB_INSIGHTS_SUMMARY_FAILED");
        })(t.DarkWebInsightsApiErrorType || (t.DarkWebInsightsApiErrorType = {})),
        (function (e) {
          (e.Password = "password"),
            (e.CreditCard = "creditcard"),
            (e.IPAddress = "ip"),
            (e.MailingAddress = "address"),
            (e.Phone = "phone"),
            (e.Email = "email"),
            (e.Social = "social"),
            (e.GeoLocation = "geolocation"),
            (e.UserName = "username"),
            (e.PersonalInfo = "personalinfo");
        })(t.DarkWebInsightsBreachType || (t.DarkWebInsightsBreachType = {})),
        (t.EmailIncidentViewStatuses = Object.freeze({ New: "new", Viewed: "viewed" }));
    },
    447495: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isAddress = void 0),
        (t.isAddress = function (e) {
          return Boolean(e) && "KWAddress" === e.kwType;
        });
    },
    876647: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBankAccount = void 0),
        (t.isBankAccount = function (e) {
          return Boolean(e) && "KWBankStatement" === e.kwType;
        });
    },
    315381: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBreach = t.BreachStatus = void 0),
        (function (e) {
          (e.PENDING = "PENDING"), (e.VIEWED = "VIEWED"), (e.ACKNOWLEDGED = "ACKNOWLEDGED");
        })(t.BreachStatus || (t.BreachStatus = {})),
        (t.isBreach = function (e) {
          return Boolean(e) && "KWSecurityBreach" === e.kwType;
        });
    },
    39093: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isCollection = void 0),
        (t.isCollection = function (e) {
          return Boolean(e) && "KWCollection" === e.kwType;
        });
    },
    700270: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isObjectLocalized =
          t.isDataModelObject =
          t.dataModelTypes =
          t.transactionTypes =
          t.getTransactionTypeFromDataModelType =
          t.getDataModelTypeFromTransactionType =
          t.TRANSACTION_TYPE_TO_DATAMODEL_TYPE =
          t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE =
          t.TransactionType =
          t.DataModelType =
          t.getLocalFormat =
          t.Country =
            void 0);
      const o = s(50415);
      !(function (e) {
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
          (e.AR = "AR"),
          (e.AS = "AS"),
          (e.AT = "AT"),
          (e.AU = "AU"),
          (e.AW = "AW"),
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
          (e.BW = "BW"),
          (e.BY = "BY"),
          (e.BZ = "BZ"),
          (e.CA = "CA"),
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
          (e.GT = "GT"),
          (e.GU = "GU"),
          (e.GW = "GW"),
          (e.GY = "GY"),
          (e.HK = "HK"),
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
          (e.ZW = "ZW"),
          (e.AQ = "AQ"),
          (e.AX = "AX"),
          (e.BV = "BV"),
          (e.CC = "CC"),
          (e.CX = "CX"),
          (e.EH = "EH"),
          (e.GS = "GS"),
          (e.HM = "HM"),
          (e.PN = "PN"),
          (e.SJ = "SJ"),
          (e.UM = "UM");
      })(t.Country || (t.Country = {})),
        (t.getLocalFormat = function (e) {
          return e.LocaleFormat;
        }),
        (t.DataModelType = (0, o.Enum)(
          "KWAddress",
          "KWAuthCategory",
          "KWAuthentifiant",
          "KWBankStatement",
          "KWCollection",
          "KWCompany",
          "KWDataChangeHistory",
          "KWDriverLicence",
          "KWEmail",
          "KWFiscalStatement",
          "KWGeneratedPassword",
          "KWIDCard",
          "KWIdentity",
          "KWMerchand",
          "KWMiscData",
          "KWPasskey",
          "KWPassport",
          "KWPaymentMean_creditCard",
          "KWPaymentMean_paypal",
          "KWPersonalWebsite",
          "KWPhone",
          "KWPurchaseAccount",
          "KWPurchaseCategory",
          "KWPurchasePaidBasket",
          "KWPurchaseTrueArticle",
          "KWSecret",
          "KWSecureFileInfo",
          "KWSecureNote",
          "KWSecureNoteCategory",
          "KWSecurityBreach",
          "KWSettingsManagerApp",
          "KWSocialSecurityStatement",
          "KWWebSite"
        )),
        (t.TransactionType = (0, o.Enum)(
          "ADDRESS",
          "AUTHENTIFIANT",
          "AUTH_CATEGORY",
          "BANKACCESS",
          "BANKACCOUNT",
          "BANKCATEGORY",
          "BANKINSTITUTION",
          "BANKSITE",
          "BANKSTATEMENT",
          "BANKTRANSACTION",
          "COLLECTION",
          "COMPANY",
          "DATA_CHANGE_HISTORY",
          "DATA_USAGE_HISTORY",
          "DEFAULT_AUTHENTIFIANT",
          "DEFAULT_CONFIDENTIAL",
          "DEFAULT_IDENTITY",
          "DEFAULT_MISC",
          "DEFAULT_PAYMENTMEANS",
          "DEFAULT_REWARDCARD",
          "DRIVERLICENCE",
          "EMAIL",
          "EMERGENCY_BUNDLE_FULL",
          "EMERGENCY_BUNDLE_LITE",
          "FULLBACKUP",
          "FISCALSTATEMENT",
          "GENERATED_PASSWORD",
          "IDCARD",
          "IDENTITY",
          "INVOICEACCESS",
          "INVOICEELEMENT",
          "INVOICEINSTITUTION",
          "MERCHANT",
          "MISCDATA",
          "PASSKEY",
          "PASSPORT",
          "PAYMENTMEANS_CREDITCARD",
          "PAYMENTMEAN_PAYPAL",
          "PERSONALWEBSITE",
          "PHONE",
          "POINTS",
          "PURCHASEABANDONNEDBASKET",
          "PURCHASEACCOUNT",
          "PURCHASEARTICLE",
          "PURCHASEBASKET",
          "PURCHASEDELIVERYARTICLE",
          "PURCHASEOPTIONARTICLE",
          "PURCHASEPAIDBASKET",
          "PURCHASE_CATEGORY",
          "REWARDCARD",
          "SECRET",
          "SECUREFILEINFO",
          "SECURENOTE",
          "SECURENOTE_CATEGORY",
          "SECURITYALERT",
          "SECURITYALERTS",
          "SECURITYBREACH",
          "SETTINGS",
          "SHARING_GROUP",
          "SOCIALSECURITYSTATEMENT",
          "WEBSITE"
        )),
        (t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE = {
          KWAddress: t.TransactionType.ADDRESS,
          KWAuthCategory: t.TransactionType.AUTH_CATEGORY,
          KWAuthentifiant: t.TransactionType.AUTHENTIFIANT,
          KWCollection: t.TransactionType.COLLECTION,
          KWBankStatement: t.TransactionType.BANKSTATEMENT,
          KWCompany: t.TransactionType.COMPANY,
          KWDataChangeHistory: t.TransactionType.DATA_CHANGE_HISTORY,
          KWDriverLicence: t.TransactionType.DRIVERLICENCE,
          KWEmail: t.TransactionType.EMAIL,
          KWFiscalStatement: t.TransactionType.FISCALSTATEMENT,
          KWGeneratedPassword: t.TransactionType.GENERATED_PASSWORD,
          KWIDCard: t.TransactionType.IDCARD,
          KWIdentity: t.TransactionType.IDENTITY,
          KWMerchand: t.TransactionType.MERCHANT,
          KWMiscData: t.TransactionType.MISCDATA,
          KWPasskey: t.TransactionType.PASSKEY,
          KWPassport: t.TransactionType.PASSPORT,
          KWPaymentMean_creditCard: t.TransactionType.PAYMENTMEANS_CREDITCARD,
          KWPaymentMean_paypal: t.TransactionType.PAYMENTMEAN_PAYPAL,
          KWPersonalWebsite: t.TransactionType.PERSONALWEBSITE,
          KWPhone: t.TransactionType.PHONE,
          KWPurchaseAccount: t.TransactionType.PURCHASEACCOUNT,
          KWPurchaseCategory: t.TransactionType.PURCHASE_CATEGORY,
          KWPurchasePaidBasket: t.TransactionType.PURCHASEPAIDBASKET,
          KWPurchaseTrueArticle: t.TransactionType.PURCHASEARTICLE,
          KWSecret: t.TransactionType.SECRET,
          KWSecureFileInfo: t.TransactionType.SECUREFILEINFO,
          KWSecureNote: t.TransactionType.SECURENOTE,
          KWSecureNoteCategory: t.TransactionType.SECURENOTE_CATEGORY,
          KWSecurityBreach: t.TransactionType.SECURITYBREACH,
          KWSettingsManagerApp: t.TransactionType.SETTINGS,
          KWSocialSecurityStatement: t.TransactionType.SOCIALSECURITYSTATEMENT,
          KWWebSite: t.TransactionType.WEBSITE
        }),
        (t.TRANSACTION_TYPE_TO_DATAMODEL_TYPE = Object.values(t.DataModelType).reduce(
          (e, s) => ((e[t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE[s]] = s), e),
          {}
        )),
        (t.getDataModelTypeFromTransactionType = function (e) {
          const s = t.TRANSACTION_TYPE_TO_DATAMODEL_TYPE[e];
          if (!s) throw new Error(`No DataModelType found for TransactionType '${e}'`);
          return s;
        }),
        (t.getTransactionTypeFromDataModelType = function (e) {
          if (!t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE[e]) throw new Error(`No TransactionType found for DataModelType ${e}`);
          return t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE[e];
        }),
        (t.transactionTypes = o.Enum.keys(t.TransactionType)),
        (t.dataModelTypes = o.Enum.keys(t.DataModelType)),
        (t.isDataModelObject = (e) => !!e.LocaleFormat && "string" == typeof e.AnonId && "string" == typeof e.SpaceId),
        (t.isObjectLocalized = function (e) {
          return (
            Boolean(e) &&
            ("KWPhone" === e.kwType || "KWIdentity" === e.kwType || "KWAddress" === e.kwType || "KWBankStatement" === e.kwType)
          );
        });
    },
    559761: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isCompany = void 0),
        (t.isCompany = function (e) {
          return Boolean(e) && "KWCompany" === e.kwType;
        });
    },
    477467: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isCredential = t.isCredentialCategory = void 0),
        (t.isCredentialCategory = function (e) {
          return Boolean(e) && "KWAuthCategory" === e.kwType;
        }),
        (t.isCredential = function (e) {
          return Boolean(e) && "KWAuthentifiant" === e.kwType;
        });
    },
    879840: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isDriverLicense = void 0),
        (t.isDriverLicense = function (e) {
          return Boolean(e) && "KWDriverLicence" === e.kwType;
        });
    },
    321563: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isEmail = void 0),
        (t.isEmail = function (e) {
          return Boolean(e) && "KWEmail" === e.kwType;
        });
    },
    419200: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    671148: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isFiscalId = void 0),
        (t.isFiscalId = function (e) {
          return Boolean(e) && "KWFiscalStatement" === e.kwType;
        });
    },
    934314: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isGeneratedPassword = void 0),
        (t.isGeneratedPassword = function (e) {
          return Boolean(e) && "KWGeneratedPassword" === e.kwType;
        });
    },
    633092: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    645633: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isIdCard = void 0),
        (t.isIdCard = function (e) {
          return Boolean(e) && "KWIDCard" === e.kwType;
        });
    },
    636070: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isIdentity = void 0),
        (t.isIdentity = function (e) {
          return Boolean(e) && "KWIdentity" === e.kwType;
        });
    },
    515578: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LinkedWebsiteSource = void 0),
        (function (e) {
          (e.Manual = "manual"), (e.Remember = "remember");
        })(t.LinkedWebsiteSource || (t.LinkedWebsiteSource = {}));
    },
    25353: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isNote = t.isNoteCategory = t.NoteTypes = void 0),
        (t.NoteTypes = ["GRAY", "PURPLE", "GREEN", "BLUE", "YELLOW", "ORANGE", "PINK", "BROWN", "RED"]),
        (t.isNoteCategory = function (e) {
          return Boolean(e) && "KWSecureNoteCategory" === e.kwType;
        }),
        (t.isNote = function (e) {
          return Boolean(e) && "KWSecureNote" === e.kwType;
        });
    },
    309455: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPasskey = void 0),
        (t.isPasskey = function (e) {
          return Boolean(e) && "KWPasskey" === e.kwType;
        });
    },
    338275: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPassport = void 0),
        (t.isPassport = function (e) {
          return Boolean(e) && "KWPassport" === e.kwType;
        });
    },
    12728: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isPaymentCard = t.PaymentCardColor = t.PaymentCardType = void 0);
      const o = s(50415);
      (t.PaymentCardType = (0, o.Enum)(
        "PAYMENT_TYPE_VISA",
        "PAYMENT_TYPE_MASTERCARD",
        "PAYMENT_TYPE_AMEX",
        "PAYMENT_TYPE_DISCOVER",
        "PAYMENT_TYPE_JCB",
        "PAYMENT_TYPE_DINERSCLUB"
      )),
        (t.PaymentCardColor = (0, o.Enum)("BLACK", "SILVER", "WHITE", "RED", "ORANGE", "GOLD", "BLUE_1", "BLUE_2", "GREEN_1", "GREEN_2")),
        (t.isPaymentCard = function (e) {
          return Boolean(e) && "KWPaymentMean_creditCard" === e.kwType;
        });
    },
    376756: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPaypalAccount = void 0),
        (t.isPaypalAccount = function (e) {
          return Boolean(e) && "KWPaymentMean_paypal" === e.kwType;
        });
    },
    995701: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPersonalSettings = void 0),
        (t.isPersonalSettings = function (e) {
          return Boolean(e) && "KWSettingsManagerApp" === e.kwType;
        });
    },
    641667: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPersonalWebsite = void 0),
        (t.isPersonalWebsite = function (e) {
          return Boolean(e) && "KWPersonalWebsite" === e.kwType;
        });
    },
    191760: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isPhone = t.PhoneType = void 0);
      const o = s(50415);
      (t.PhoneType = (0, o.Enum)(
        "PHONE_TYPE_ANY",
        "PHONE_TYPE_MOBILE",
        "PHONE_TYPE_LANDLINE",
        "PHONE_TYPE_FAX",
        "PHONE_TYPE_WORK_MOBILE",
        "PHONE_TYPE_WORK_LANDLINE",
        "PHONE_TYPE_WORK_FAX"
      )),
        (t.isPhone = function (e) {
          return Boolean(e) && "KWPhone" === e.kwType;
        });
    },
    798661: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSecret = void 0),
        (t.isSecret = function (e) {
          return Boolean(e) && "KWSecret" === e.kwType;
        });
    },
    233952: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSecureFileInfo = void 0),
        (t.isSecureFileInfo = function (e) {
          return Boolean(e) && "KWSecureFileInfo" === e.kwType;
        });
    },
    596949: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSocialSecurityId = void 0),
        (t.isSocialSecurityId = function (e) {
          return Boolean(e) && "KWSocialSecurityStatement" === e.kwType;
        });
    },
    647357: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(s(447495), t),
        r(s(876647), t),
        r(s(315381), t),
        r(s(39093), t),
        r(s(700270), t),
        r(s(559761), t),
        r(s(477467), t),
        r(s(879840), t),
        r(s(321563), t),
        r(s(419200), t),
        r(s(671148), t),
        r(s(934314), t),
        r(s(633092), t),
        r(s(645633), t),
        r(s(636070), t),
        r(s(515578), t),
        r(s(25353), t),
        r(s(309455), t),
        r(s(338275), t),
        r(s(12728), t),
        r(s(376756), t),
        r(s(995701), t),
        r(s(641667), t),
        r(s(191760), t),
        r(s(798661), t),
        r(s(233952), t),
        r(s(596949), t);
    },
    424635: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    539191: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    744225: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(647357), t), r(s(424635), t);
    },
    755623: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deviceCommandsSlots = t.deviceQueriesSlots = void 0);
      const o = s(71796);
      (t.deviceQueriesSlots = { getAnonymousComputerId: (0, o.slot)(), getPlatformInfo: (0, o.slot)() }),
        (t.deviceCommandsSlots = { cleanRemotelyRemovedProfiles: (0, o.slot)() });
    },
    488219: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(755623), t);
    },
    198792: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DeviceLimitCapabilityConnector = void 0);
      const o = s(71796);
      t.DeviceLimitCapabilityConnector = { deviceLimitCapabilityUpdated: (0, o.slot)() };
    },
    143245: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(198792), t);
    },
    699103: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    170242: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionCarbonConnector = void 0);
      const o = s(71796);
      t.ExtensionCarbonConnector = {
        loginStatusChanged: (0, o.slot)({ noBuffer: !0 }),
        localAccountsListUpdated: (0, o.slot)({ noBuffer: !0 }),
        openSessionProgressChanged: (0, o.slot)({ noBuffer: !0 }),
        openSessionTokenSent: (0, o.slot)({ noBuffer: !0 }),
        openSessionDashlaneAuthenticator: (0, o.slot)({ noBuffer: !0 }),
        openSessionOTPSent: (0, o.slot)({ noBuffer: !0 }),
        openSessionOTPForNewDeviceRequired: (0, o.slot)({ noBuffer: !0 }),
        openSessionAskMasterPassword: (0, o.slot)({ noBuffer: !0 }),
        openSessionTokenWarning: (0, o.slot)({ noBuffer: !0 }),
        openSessionExtraDeviceTokenRequired: (0, o.slot)({ noBuffer: !0 }),
        openSessionMasterPasswordLess: (0, o.slot)({ noBuffer: !0 }),
        openSessionSsoRedirectionToIdpRequired: (0, o.slot)({ noBuffer: !0 }),
        openSessionFailed: (0, o.slot)({ noBuffer: !0 }),
        sessionSyncStatus: (0, o.slot)({ noBuffer: !0 }),
        deactivateDeviceResult: (0, o.slot)({ noBuffer: !0 }),
        changeDeviceNameResult: (0, o.slot)({ noBuffer: !0 }),
        accountInfoChanged: (0, o.slot)({ noBuffer: !0 }),
        dataModelUpdated: (0, o.slot)({ noBuffer: !0 }),
        accountFeaturesChanged: (0, o.slot)({ noBuffer: !0 }),
        webOnboardingModeUpdated: (0, o.slot)({ noBuffer: !0 }),
        askWebsiteInfo: (0, o.slot)({ noBuffer: !0 }),
        getAccountInfo: (0, o.slot)({ noBuffer: !0 }),
        getAnonymousLogsMetadata: (0, o.slot)({ noBuffer: !0 }),
        checkIfMasterPasswordIsValid: (0, o.slot)({ noBuffer: !0 }),
        openSession: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithToken: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithDashlaneAuthenticator: (0, o.slot)({ noBuffer: !0 }),
        cancelDashlaneAuthenticatorRegistration: (0, o.slot)(),
        openSessionWithOTP: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithOTPForNewDevice: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithMasterPassword: (0, o.slot)({ noBuffer: !0 }),
        openExtraDeviceSession: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithExtraDeviceToken: (0, o.slot)({ noBuffer: !0 }),
        openSessionResendToken: (0, o.slot)({ noBuffer: !0 }),
        sessionForceSync: (0, o.slot)({ noBuffer: !0 }),
        closeSession: (0, o.slot)({ noBuffer: !0 }),
        lockSession: (0, o.slot)({ noBuffer: !0 }),
        exceptionLog: (0, o.slot)({ noBuffer: !0 }),
        getDevicesList: (0, o.slot)({ noBuffer: !0 }),
        getLocalAccountsList: (0, o.slot)({ noBuffer: !0 }),
        deactivateDevice: (0, o.slot)({ noBuffer: !0 }),
        changeDeviceName: (0, o.slot)({ noBuffer: !0 }),
        updateWebOnboardingMode: (0, o.slot)({ noBuffer: !0 })
      };
    },
    115763: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionCarbonEventType = void 0);
      const o = s(50415);
      t.ExtensionCarbonEventType = (0, o.Enum)(
        "LOGIN_STATUS_CHANGED",
        "LOCAL_ACCOUNTS_LIST_UPDATED",
        "OPEN_SESSION_PROGRESS_CHANGED",
        "OPEN_SESSION_TOKEN_SENT",
        "OPEN_SESSION_OTP_SENT",
        "OPEN_SESSION_ASK_MASTER_PASSWORD",
        "OPEN_SESSION_ASK_PERSIST_DATA",
        "OPEN_SESSION_TOKEN_WARNING",
        "OPEN_SESSION_FAILED",
        "SESSION_SYNC_STATUS",
        "DEACTIVATE_DEVICE_RESULT",
        "CHANGE_DEVICE_NAME_RESULT",
        "ACCOUNT_INFO",
        "DATA_MODEL_UPDATED",
        "ACCOUNT_FEATURES",
        "OPEN_WEB_ONBOARDING_TAB",
        "WEB_ONBOARDING_MODE_UPDATED",
        "ASK_WEBSITE_INFO",
        "TOGGLE_DASHLANE_ON_PAGE",
        "TOGGLE_DASHLANE_ON_SITE",
        "GET_LOGIN_STATUS",
        "GET_ACCOUNT_INFO",
        "GET_DEVICES_LIST",
        "GET_LOCAL_ACCOUNTS_LIST",
        "GET_PASSWORD_GENERATION_SETTINGS",
        "GET_ANONYMOUS_LOGS_METADATA",
        "GENERATE_PASSWORD",
        "SAVE_GENERATED_PASSWORD",
        "DEACTIVATE_DEVICE",
        "CHANGE_DEVICE_NAME",
        "USERS_METADATA",
        "OPEN_SESSION",
        "OPEN_SESSION_WITH_TOKEN",
        "OPEN_SESSION_WITH_OTP",
        "OPEN_SESSION_MASTER_PASSWORD",
        "PERSIST_DATA_FOR_NEW_SESSION",
        "OPEN_SESSION_RESEND_TOKEN",
        "SESSION_FORCE_SYNC",
        "CLOSE_SESSION",
        "OPEN_DEV_SESSION",
        "UPDATE_WEB_ONBOARDING_MODE",
        "PERF_LOG",
        "EXCEPTION_LOG",
        "USAGE_LOG",
        "INSTALLER_LOG"
      );
    },
    628413: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(170242), t), r(s(115763), t);
    },
    556376: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionDebugConnector = void 0);
      const o = s(71796);
      t.ExtensionDebugConnector = {
        getExtensionId: (0, o.slot)(),
        switchExtensionToStandalone: (0, o.slot)(),
        showInput: (0, o.slot)(),
        showFormOnPage: (0, o.slot)(),
        signalTti: (0, o.slot)(),
        signalDatabasesSent: (0, o.slot)()
      };
    },
    713981: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionDebugEventType = void 0);
      const o = s(50415);
      t.ExtensionDebugEventType = (0, o.Enum)(
        "GET_EXTENSION_ID",
        "SIGNAL_TTI",
        "DATABASES_SEND",
        "SHOW_INPUT",
        "SHOW_FORM_ON_PAGE",
        "SWITCH_TO_STANDALONE"
      );
    },
    391609: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(556376), t), r(s(713981), t);
    },
    921818: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.familyCommandsSlots = void 0);
      const o = s(71796);
      t.familyCommandsSlots = {
        getFamilyDetails: (0, o.slot)(),
        joinFamily: (0, o.slot)(),
        leaveFamily: (0, o.slot)(),
        removeFamilyMember: (0, o.slot)(),
        resetFamilyJoinToken: (0, o.slot)()
      };
    },
    65005: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(921818), t), r(s(450647), t);
    },
    450647: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FamilyRenewalPlatform = t.FamilyMemberRole = t.FamilyStatusCode = t.JoinFamilyUserStatus = void 0),
        (function (e) {
          (e.NEW_USER = "NEW_USER"), (e.EXISTING_FREE_USER = "EXISTING_FREE_USER"), (e.EXISTING_PREMIUM_USER = "EXISTING_PREMIUM_USER");
        })(t.JoinFamilyUserStatus || (t.JoinFamilyUserStatus = {})),
        (function (e) {
          (e[(e.DISCONTINUED = 0)] = "DISCONTINUED"), (e[(e.PREMIUM = 1)] = "PREMIUM"), (e[(e.PREMIUM_PLUS = 2)] = "PREMIUM_PLUS");
        })(t.FamilyStatusCode || (t.FamilyStatusCode = {})),
        (function (e) {
          (e.ADMIN = "admin"), (e.REGULAR = "regular"), (e.REMOVED = "removed");
        })(t.FamilyMemberRole || (t.FamilyMemberRole = {})),
        (function (e) {
          (e.IOS_APP_STORE = "ios"), (e.MAC_STORE = "mac"), (e.PLAY_STORE = "playstore");
        })(t.FamilyRenewalPlatform || (t.FamilyRenewalPlatform = {}));
    },
    333824: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.featureQueriesSlots = void 0);
      const o = s(71796);
      t.featureQueriesSlots = { getHasFeature: (0, o.slot)(), getFeatures: (0, o.slot)() };
    },
    180898: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(478674), t), r(s(333824), t);
    },
    478674: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    604126: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.remoteFilesLiveQueriesSlots = t.remoteFilesQueriesSlots = t.remoteFileCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.remoteFileCommandsSlots = { decipherRemoteFile: (0, o.slot)() }),
        (t.remoteFilesQueriesSlots = { getFileContent: (0, o.slot)() }),
        (t.remoteFilesLiveQueriesSlots = { liveFileMeta: (0, r.liveSlot)() });
    },
    329450: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(604126), t), r(s(846046), t);
    },
    846046: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FileNamesList =
          t.SERVER_ERROR_HTTP_STATUS =
          t.UNSPECIFIED_ERROR =
          t.FILE_NOT_UPDATED =
          t.FILE_NOT_FOUND_HTTP_STATUS =
          t.NO_CURRENT_UPDATE_HTTP_STATUS =
          t.UPDATE_AVAILABLE_HTTP_STATUS =
            void 0),
        (t.UPDATE_AVAILABLE_HTTP_STATUS = "update_available"),
        (t.NO_CURRENT_UPDATE_HTTP_STATUS = "unknown_revision"),
        (t.FILE_NOT_FOUND_HTTP_STATUS = "not_found"),
        (t.FILE_NOT_UPDATED = "not_updated"),
        (t.UNSPECIFIED_ERROR = "unspecified_error"),
        (t.SERVER_ERROR_HTTP_STATUS = "error_server"),
        (t.FileNamesList = ["overrides.json", "phishing_urls_test.json"]);
    },
    444605: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.globalExtensionSettingsCommandsSlots = void 0);
      const o = s(71796);
      t.globalExtensionSettingsCommandsSlots = { setGlobalExtensionSettings: (0, o.slot)(), getGlobalExtensionSettings: (0, o.slot)() };
    },
    796035: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(444605), t), r(s(673054), t);
    },
    673054: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    515044: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.healthCommandsSlots = void 0);
      const o = s(71796);
      t.healthCommandsSlots = { evaluatePassword: (0, o.slot)() };
    },
    506666: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(515044), t), r(s(614836), t);
    },
    614836: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    224875: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(938561), t);
    },
    938561: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.killswitchLiveQueriesSlots = t.killswitchQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.killswitchQueriesSlots = {
        getIsBrazeContentDisabled: (0, o.slot)(),
        getIsLoginFlowMigrationDisabled: (0, o.slot)(),
        getIsAutoSSOLoginDisabled: (0, o.slot)()
      }),
        (t.killswitchLiveQueriesSlots = {
          liveIsBrazeContentDisabled: (0, r.liveSlot)(),
          liveIsLoginFlowMigrationDisabled: (0, r.liveSlot)(),
          liveIsAutoSSOLoginDisabled: (0, r.liveSlot)()
        });
    },
    428730: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonLeelooConnector = void 0);
      const o = s(71796);
      t.CarbonLeelooConnector = {
        abTestingChanged: (0, o.slot)(),
        loginStatusChanged: (0, o.slot)({ noBuffer: !0 }),
        openSessionProgressChanged: (0, o.slot)({ noBuffer: !0 }),
        openSessionTokenSent: (0, o.slot)({ noBuffer: !0 }),
        openSessionDashlaneAuthenticator: (0, o.slot)({ noBuffer: !0 }),
        openSessionOTPSent: (0, o.slot)({ noBuffer: !0 }),
        openSessionOTPForNewDeviceRequired: (0, o.slot)({ noBuffer: !0 }),
        openSessionAskMasterPassword: (0, o.slot)({ noBuffer: !0 }),
        openSessionTokenWarning: (0, o.slot)({ noBuffer: !0 }),
        openSessionExtraDeviceTokenRequired: (0, o.slot)({ noBuffer: !0 }),
        openSessionSsoRedirectionToIdpRequired: (0, o.slot)({ noBuffer: !0 }),
        openSessionMasterPasswordLess: (0, o.slot)({ noBuffer: !0 }),
        openSessionFailed: (0, o.slot)({ noBuffer: !0 }),
        sessionSyncStatus: (0, o.slot)({ noBuffer: !0 }),
        localAccountsListUpdated: (0, o.slot)(),
        spaceDataUpdated: (0, o.slot)(),
        teamAdminDataUpdated: (0, o.slot)(),
        credentialLoginUrlRetrieved: (0, o.slot)(),
        deactivateDeviceResult: (0, o.slot)(),
        changeDeviceNameResult: (0, o.slot)(),
        accountInfoChanged: (0, o.slot)(),
        accountFeaturesChanged: (0, o.slot)(),
        updatePaymentCardTokenResult: (0, o.slot)(),
        webOnboardingModeUpdated: (0, o.slot)(),
        currentLocationUpdated: (0, o.slot)(),
        checkDirectorySyncKeyRequest: (0, o.slot)(),
        encryptSettingsResultUpdated: (0, o.slot)(),
        confirmCreateAccountResultUpdated: (0, o.slot)(),
        sendSharingResponseResult: (0, o.slot)(),
        serverSidePairingStatusChanged: (0, o.slot)(),
        getUki: (0, o.slot)(),
        getAccountInfo: (0, o.slot)(),
        getDevicesList: (0, o.slot)(),
        getLocalAccountsList: (0, o.slot)(),
        getTemporaryToken: (0, o.slot)(),
        deactivateDevice: (0, o.slot)(),
        changeDeviceName: (0, o.slot)(),
        getInvoices: (0, o.slot)(),
        getPersonalSettings: (0, o.slot)(),
        openSession: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithToken: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithDashlaneAuthenticator: (0, o.slot)({ noBuffer: !0 }),
        cancelDashlaneAuthenticatorRegistration: (0, o.slot)(),
        openSessionWithOTP: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithOTPForNewDevice: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithMasterPassword: (0, o.slot)({ noBuffer: !0 }),
        openExtraDeviceSession: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithExtraDeviceToken: (0, o.slot)({ noBuffer: !0 }),
        openSessionResendToken: (0, o.slot)({ noBuffer: !0 }),
        sessionForceSync: (0, o.slot)(),
        closeSession: (0, o.slot)(),
        lockSession: (0, o.slot)({ noBuffer: !0 }),
        cancelPremiumSubscription: (0, o.slot)(),
        createUserGroup: (0, o.slot)(),
        deleteUserGroup: (0, o.slot)(),
        renameUserGroup: (0, o.slot)(),
        inviteUserGroupMembers: (0, o.slot)(),
        revokeUserGroupMembers: (0, o.slot)(),
        updateUserGroupMembers: (0, o.slot)(),
        teamUpdated: (0, o.slot)(),
        createAccountStep1: (0, o.slot)(),
        createAccountStep2: (0, o.slot)(),
        checkLogin: (0, o.slot)(),
        savePersonalDataItem: (0, o.slot)(),
        removePersonalDataItem: (0, o.slot)(),
        savePaymentCard: (0, o.slot)(),
        getMasterPasswordResetDemandList: (0, o.slot)(),
        acceptMasterPasswordResetDemand: (0, o.slot)(),
        checkIfMasterPasswordIsValid: (0, o.slot)(),
        declineMasterPasswordResetDemand: (0, o.slot)(),
        getMembers: (0, o.slot)(),
        addTeamAdmin: (0, o.slot)(),
        removeTeamAdmin: (0, o.slot)(),
        setTeamSettings: (0, o.slot)(),
        updateWebOnboardingMode: (0, o.slot)(),
        checkDirectorySyncKeyResponse: (0, o.slot)(),
        queryStaticDataCollections: (0, o.slot)(),
        sendSharingResponse: (0, o.slot)(),
        getDataModel: (0, o.slot)(),
        getSharingSync: (0, o.slot)(),
        revokeSharing: (0, o.slot)(),
        getSharingData: (0, o.slot)(),
        updateSharingPermission: (0, o.slot)(),
        setPendingElementsAsSeen: (0, o.slot)(),
        isUserLastAdminOnItem: (0, o.slot)(),
        doesUserReceiveItemViaGroup: (0, o.slot)(),
        resumeSession: (0, o.slot)(),
        exceptionLog: (0, o.slot)()
      };
    },
    317317: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(428730), t), r(s(431291), t);
    },
    431291: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RemovePersonalDataItemFailureReason = void 0),
        (function (e) {
          (e[(e.LEAVE_SHARING_FAILED = 0)] = "LEAVE_SHARING_FAILED"),
            (e[(e.FORBIDDEN_LAST_ADMIN = 1)] = "FORBIDDEN_LAST_ADMIN"),
            (e[(e.FORBIDDEN_GROUP_ITEM = 2)] = "FORBIDDEN_GROUP_ITEM"),
            (e[(e.NOT_AUTHORIZED = 3)] = "NOT_AUTHORIZED"),
            (e[(e.NOT_FOUND = 4)] = "NOT_FOUND"),
            (e[(e.INTERNAL_ERROR = 5)] = "INTERNAL_ERROR");
        })(t.RemovePersonalDataItemFailureReason || (t.RemovePersonalDataItemFailureReason = {}));
    },
    829182: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.eventLoggerCommandsSlots = void 0);
      const o = s(71796);
      t.eventLoggerCommandsSlots = { logEvent: (0, o.slot)(), logPageView: (0, o.slot)(), flushQueue: (0, o.slot)() };
    },
    815925: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(829182), t), r(s(40035), t);
    },
    40035: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StyxApiResult = void 0),
        (function (e) {
          (e[(e.AllBatchesSent = 0)] = "AllBatchesSent"),
            (e[(e.SomeBatchesSent = 1)] = "SomeBatchesSent"),
            (e[(e.NoBatchesSent = 2)] = "NoBatchesSent");
        })(t.StyxApiResult || (t.StyxApiResult = {}));
    },
    463054: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.exceptionCommandsSlots = void 0);
      const o = s(71796);
      t.exceptionCommandsSlots = { logException: (0, o.slot)() };
    },
    968183: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(463054), t), r(s(496103), t);
    },
    496103: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ExceptionCriticality = void 0),
        (function (e) {
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"), (e[(e.WARNING = 1)] = "WARNING"), (e[(e.ERROR = 2)] = "ERROR");
        })(t.ExceptionCriticality || (t.ExceptionCriticality = {}));
    },
    387940: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ApplicationBuildType = t.LoggingEventType = void 0);
      const o = s(50415);
      t.LoggingEventType = (0, o.Enum)("EXCEPTION_LOG");
      var r = s(890693);
      Object.defineProperty(t, "ApplicationBuildType", {
        enumerable: !0,
        get: function () {
          return r.ApplicationBuildType;
        }
      });
    },
    506768: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(765063), t), r(s(724309), t);
    },
    765063: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.loginCommandsSlots = void 0);
      const o = s(71796);
      t.loginCommandsSlots = {
        abortDeviceLimitFlow: (0, o.slot)(),
        loginViaSSO: (0, o.slot)(),
        unlinkPreviousDevice: (0, o.slot)(),
        unlinkMultipleDevices: (0, o.slot)()
      };
    },
    724309: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoginViaSsoCode = t.SsoMigrationServerMethod = t.LoginResultEnum = void 0),
        (function (e) {
          (e[(e.MasterPasswordMissing = 0)] = "MasterPasswordMissing"),
            (e[(e.DeviceAuthenticationMissing = 1)] = "DeviceAuthenticationMissing"),
            (e[(e.TokenMissing = 2)] = "TokenMissing"),
            (e[(e.OTPMissing = 3)] = "OTPMissing"),
            (e[(e.AskPersistData = 4)] = "AskPersistData"),
            (e[(e.LoggedIn = 5)] = "LoggedIn"),
            (e[(e.ExtraDeviceTokenMissing = 6)] = "ExtraDeviceTokenMissing"),
            (e[(e.SSOLogin = 7)] = "SSOLogin"),
            (e[(e.DeviceLimitFlow = 8)] = "DeviceLimitFlow"),
            (e[(e.DashlaneAuthenticatorApprovalMissing = 9)] = "DashlaneAuthenticatorApprovalMissing"),
            (e[(e.DashlaneAuthenticatorApprovalCancelled = 10)] = "DashlaneAuthenticatorApprovalCancelled"),
            (e[(e.MasterPasswordLess = 11)] = "MasterPasswordLess");
        })(t.LoginResultEnum || (t.LoginResultEnum = {})),
        (function (e) {
          (e.SSO = "sso"), (e.MP = "master_password");
        })(t.SsoMigrationServerMethod || (t.SsoMigrationServerMethod = {})),
        (function (e) {
          (e.SUCCESS = "SUCCESS"),
            (e.ASK_NEW_MP = "ASK_NEW_MP"),
            (e.EMPTY_LOGIN = "EMPTY_LOGIN"),
            (e.INNACTIVE_SESSION = "INNACTIVE_SESSION"),
            (e.SSO_VERIFICATION_FAILED = "SSO_VERIFICATION_FAILED"),
            (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.UNSUPPORTED_TRANSITION = "UNSUPPORTED_TRANSITION"),
            (e.WRONG_PASSWORD = "WRONG_PASSWORD");
        })(t.LoginViaSsoCode || (t.LoginViaSsoCode = {}));
    },
    458290: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(423903), t), r(s(353168), t);
    },
    353168: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loginNotificationsLiveQueriesSlots = t.loginNotificationsQueriesSlots = t.loginNotificationsCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.loginNotificationsCommandsSlots = { addLoginNotification: (0, o.slot)(), clearAllStoredLoginNotification: (0, o.slot)() }),
        (t.loginNotificationsQueriesSlots = { getLoginNotifications: (0, o.slot)() }),
        (t.loginNotificationsLiveQueriesSlots = { liveLoginNotifications: (0, r.liveSlot)() });
    },
    423903: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoginNotificationType = void 0),
        (function (e) {
          (e.RELOGIN_NEEDED = "RELOGIN_NEEDED"),
            (e.SSO_FEATURE_BLOCKED = "SSO_FEATURE_BLOCKED"),
            (e.SSO_SETUP_ERROR = "SSO_SETUP_ERROR"),
            (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.TEAM_ACCEPTANCE_SUCCESS = "TEAM_ACCEPTANCE_SUCCESS"),
            (e.TEAM_ACCEPTANCE_ERROR = "TEAM_ACCEPTANCE_ERROR");
        })(t.LoginNotificationType || (t.LoginNotificationType = {}));
    },
    878779: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(112249), t), r(s(503455), t);
    },
    112249: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loginStepInfoLiveQueriesSlots = t.loginStepInfoQueriesSlots = t.loginStepInfoCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.loginStepInfoCommandsSlots = { updateLoginStepInfo: (0, o.slot)(), resetLoginStepInfo: (0, o.slot)() }),
        (t.loginStepInfoQueriesSlots = { getLoginStepInfo: (0, o.slot)() }),
        (t.loginStepInfoLiveQueriesSlots = { liveLoginStepInfo: (0, r.liveSlot)() });
    },
    503455: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoginStep = void 0),
        (function (e) {
          (e.Email = "email"),
            (e.Welcome = "welcome"),
            (e.OTP1 = "OTP1"),
            (e.OTP2 = "OTP2"),
            (e.BackupCodeOTP1 = "backupCodeOTP1"),
            (e.BackupCodeOTP2 = "backupCodeOTP2"),
            (e.OTPToken = "token"),
            (e.Password = "password"),
            (e.SSO = "SSO"),
            (e.ActivateSSO = "activateSSO"),
            (e.WebAuthn = "webAuthn"),
            (e.WebAuthnError = "webAuthnError"),
            (e.DeviceLimitReached = "deviceLimitReached"),
            (e.DashlaneAuthenticator = "dashlaneAuthenticator"),
            (e.PasswordLess = "passwordLess");
        })(t.LoginStep || (t.LoginStep = {}));
    },
    666478: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    348905: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    125460: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonMaverickConnector = void 0);
      const o = s(71796);
      t.CarbonMaverickConnector = {
        savePersonalDataItem: (0, o.slot)(),
        filledDataItem: (0, o.slot)(),
        updateWebOnboardingMode: (0, o.slot)()
      };
    },
    698521: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(125460), t), r(s(558962), t);
    },
    558962: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    39687: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MaverickDebugConnector = void 0);
      const o = s(71796);
      t.MaverickDebugConnector = {
        getState: (0, o.slot)(),
        analyseDom: (0, o.slot)(),
        processAnalyzedPage: (0, o.slot)(),
        loadDatabases: (0, o.slot)(),
        runCredentialSaveTest: (0, o.slot)(),
        openUrl: (0, o.slot)(),
        toggleLogTypes: (0, o.slot)(),
        actionProcessed: (0, o.slot)(),
        domReceived: (0, o.slot)(),
        domAnalysed: (0, o.slot)(),
        signalError: (0, o.slot)(),
        credentialSaveTestRan: (0, o.slot)(),
        log: (0, o.slot)(),
        signalTabOpened: (0, o.slot)(),
        sendAnalysisResults: (0, o.slot)(),
        signalTabClosed: (0, o.slot)(),
        signalDatabasesInitialized: (0, o.slot)()
      };
    },
    842739: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MaverickDebugEventType = void 0);
      const o = s(50415);
      t.MaverickDebugEventType = (0, o.Enum)(
        "GET_STATE",
        "ANALYSE_DOM",
        "LOAD_DATABASES",
        "RUN_CREDENTAL_SAVE_TEST",
        "OPEN_URL",
        "TOGGLE_LOGS",
        "ACTION_PROCESSED",
        "DOM_RECEIVED",
        "DOM_ANALYSED",
        "SIGNAL_EXCEPTION",
        "CREDENTIAL_SAVE_RAN",
        "LOG"
      );
    },
    611733: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(39687), t), r(s(842739), t);
    },
    393645: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MaverickWrapperConnector = void 0);
      const o = s(71796);
      t.MaverickWrapperConnector = { analyseDom: (0, o.slot)(), pageInfoComputed: (0, o.slot)(), signalError: (0, o.slot)() };
    },
    227707: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ClickableElementTypes = t.LoginStatus = t.MaverickWrapperEventType = void 0);
      const o = s(50415);
      (t.MaverickWrapperEventType = (0, o.Enum)("COMPUTE_PAGE_INFO", "PAGE_INFO_COMPUTED", "SIGNAL_EXCEPTION")),
        (t.LoginStatus = (0, o.Enum)("LOGGED_IN", "LOGGED_OUT", "UNKNOWN")),
        (t.ClickableElementTypes = (0, o.Enum)("goToLoginPage", "goToChangePasswordPage", "goToResetPasswordPage"));
    },
    311889: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(393645), t), r(s(227707), t);
    },
    137174: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(605264), t), r(s(28155), t);
    },
    28155: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notificationsLiveQueriesSlots = t.notificationsQueriesSlots = t.notificationsCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.notificationsCommandsSlots = {
        markNotificationAsInteracted: (0, o.slot)(),
        markNotificationAsSeen: (0, o.slot)(),
        markNotificationAsUnseen: (0, o.slot)()
      }),
        (t.notificationsQueriesSlots = { getNotificationStatus: (0, o.slot)() }),
        (t.notificationsLiveQueriesSlots = { liveNotificationStatus: (0, r.liveSlot)() });
    },
    605264: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NotificationStatus = t.NotificationName = void 0),
        (function (e) {
          (e.PaymentFailureChurning = "paymentFailureChurning"),
            (e.PaymentFailureChurned = "paymentFailureChurned"),
            (e.SwitchToMlAnalysisEngine = "switchToMlAnalysisEngine"),
            (e.DWMb2bAutoEnrollTooltip = "dWMb2bAutoEnrollTooltip"),
            (e.VpnProviderIsNowHotspot = "vpnProviderIsNowHotspot"),
            (e.VpnHostpotshieldInstalled = "vpnHostpotshieldInstalled"),
            (e.PopupIncomingTabPayments = "popupIncomingTabPayments"),
            (e.PopupIncomingTabSecureNotes = "popupIncomingTabSecureNotes"),
            (e.PopupIncomingTabPersonalInfo = "popupIncomingTabPersonalInfo"),
            (e.PopupIncomingTabIDs = "popupIncomingTabIDs"),
            (e.NewAccountMenuTooltip = "newAccountMenuTooltip"),
            (e.TacGetTheExtensionBanner = "tacGetTheExtensionBanner"),
            (e.TacEnableAccountRecoveryBanner = "tacEnableAccountRecoveryBanner"),
            (e.TacOnlyOneAdminBanner = "tacOnlyOneAdminBanner"),
            (e.TacDarkWebInsightsNewBadge = "tacDarkWebInsightsNewBadge"),
            (e.PasswordHistoryBanner = "passwordHistoryBanner"),
            (e.SharingCenterDisabledBanner = "sharingCenterDisabledBanner"),
            (e.AccountRecoveryAvailableAdminTooltip = "accountRecoveryAvailableAdminTooltip"),
            (e.AccountRecoveryAvailableEmployeeDialog = "accountRecoveryAvailableEmployeeDialog"),
            (e.ActivateInviteLink = "activateInviteLink"),
            (e.TacGetStartedOpenVault = "tacGetStartedOpenVault"),
            (e.TacGetStartedDismissPage = "tacGetStartedDismissedPage"),
            (e.TacGetStartedSeenPage = "tacGetStartedSeenPage");
        })(t.NotificationName || (t.NotificationName = {})),
        (function (e) {
          (e.Interacted = "interacted"), (e.Seen = "seen"), (e.Unseen = "unseen");
        })(t.NotificationStatus || (t.NotificationStatus = {}));
    },
    136632: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(758355), t);
    },
    758355: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.WebOnboardingPopoverStep = t.WebOnboardingLeelooStep = void 0);
      const o = s(50415);
      (t.WebOnboardingLeelooStep = (0, o.Enum)(
        "SHOW_LOGIN_USING_EXTENSION_NOTIFICATION",
        "SHOW_SAVE_SITES_DIALOG",
        "SHOW_PASSWORD_SAVE_SUCCESS",
        "SHOW_WEB_SAVE_AND_AUTOLOGIN_COMPLETED",
        "SHOW_PASSWORD_IMPORT",
        "SHOW_GET_MOBILE_DIALOG"
      )),
        (t.WebOnboardingPopoverStep = (0, o.Enum)("SHOW_LOGIN_NOTIFICATION"));
    },
    724281: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Platform = void 0),
        (function (e) {
          (e[(e.Android = 0)] = "Android"),
            (e[(e.CarbonTests = 1)] = "CarbonTests"),
            (e[(e.CarbonUnknown = 2)] = "CarbonUnknown"),
            (e[(e.DesktopLegacyMacOS = 3)] = "DesktopLegacyMacOS"),
            (e[(e.DesktopLegacyWindows = 4)] = "DesktopLegacyWindows"),
            (e[(e.DesktopUWP = 5)] = "DesktopUWP"),
            (e[(e.IPad = 6)] = "IPad"),
            (e[(e.IPhone = 7)] = "IPhone"),
            (e[(e.IPod = 8)] = "IPod"),
            (e[(e.StandaloneExtension = 9)] = "StandaloneExtension"),
            (e[(e.TeamAdminConsole = 10)] = "TeamAdminConsole"),
            (e[(e.WebApp = 11)] = "WebApp"),
            (e[(e.WebAppDev = 12)] = "WebAppDev");
        })(t.Platform || (t.Platform = {}));
    },
    868557: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PlatformView = void 0),
        (function (e) {
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
        })(t.PlatformView || (t.PlatformView = {}));
    },
    354982: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoginDeviceLimitFlowStage = void 0),
        (function (e) {
          (e.OneDeviceLimitReached = "OneDeviceLimitReached"),
            (e.MultipleDevicesLimitReached = "MultipleDevicesLimitReached"),
            (e.UnlinkingAndOpeningSession = "UnlinkingAndOpeningSession"),
            (e.UnlinkingMultipleDevicesError = "UnlinkingMultipleDevicesError"),
            (e.RefreshingDeviceLimitStatus = "RefreshingDeviceLimitStatus"),
            (e.OpeningSessionAfterDeviceLimitRemoval = "OpeningSessionAfterDeviceLimitRemoval"),
            (e.DeviceLimitDone = "DeviceLimitDone");
        })(t.LoginDeviceLimitFlowStage || (t.LoginDeviceLimitFlowStage = {}));
    },
    138340: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    43556: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AbortDeviceLimitFlowError = void 0),
        (function (e) {
          e.UnexpectedError = "UNEXPECTED_ERROR";
        })(t.AbortDeviceLimitFlowError || (t.AbortDeviceLimitFlowError = {}));
    },
    396197: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(s(43556), t),
        r(s(793522), t),
        r(s(144270), t),
        r(s(354982), t),
        r(s(138340), t),
        r(s(868557), t),
        r(s(961445), t),
        r(s(653240), t),
        r(s(724281), t);
    },
    793522: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UNEXPECTED_ERROR = t.USER_STILL_OVERFLOWING = void 0),
        (t.USER_STILL_OVERFLOWING = "USER_STILL_OVERFLOWING"),
        (t.UNEXPECTED_ERROR = "UNEXPECTED_ERROR");
    },
    653240: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    144270: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UnlinkPreviousDeviceError = void 0),
        (function (e) {
          e.UnexpectedError = "UNEXPECTED_ERROR";
        })(t.UnlinkPreviousDeviceError || (t.UnlinkPreviousDeviceError = {}));
    },
    961445: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    984369: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deviceLimitLiveSlots = t.deviceLimitSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.deviceLimitSlots = { getLoginDeviceLimitFlow: (0, o.slot)() }),
        (t.deviceLimitLiveSlots = { liveLoginDeviceLimitFlow: (0, r.liveSlot)() });
    },
    576758: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(126749), t);
    },
    189391: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.twoFactorStatusLiveSlots = t.twoFactorStatusSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.twoFactorStatusSlots = { getTwoFactorAuthenticationInfo: (0, o.slot)() }),
        (t.twoFactorStatusLiveSlots = { liveTwoFactorAuthenticationInfo: (0, r.liveSlot)() });
    },
    126749: (e, t) => {
      var s;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ENFORCE_TWO_FACTOR_AUTHENTICATION_ENABLED_VALUES =
          t.TwoFactorAuthenticationInfoRequestStatus =
          t.TwoFactorAuthenticationType =
            void 0),
        (function (e) {
          (e.EMAIL_TOKEN = "email_token"), (e.DEVICE_REGISTRATION = "totp_device_registration"), (e.LOGIN = "totp_login"), (e.SSO = "sso");
        })(t.TwoFactorAuthenticationType || (t.TwoFactorAuthenticationType = {})),
        (function (e) {
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"), (e[(e.PENDING = 1)] = "PENDING"), (e[(e.ERROR = 2)] = "ERROR"), (e[(e.READY = 3)] = "READY");
        })(t.TwoFactorAuthenticationInfoRequestStatus || (t.TwoFactorAuthenticationInfoRequestStatus = {})),
        (function (e) {
          (e.LOGIN = "login"), (e.NEW_DEVICE = "newDevice"), (e.DISABLED = "disabled");
        })(s || (s = {})),
        (t.ENFORCE_TWO_FACTOR_AUTHENTICATION_ENABLED_VALUES = [s.LOGIN, s.NEW_DEVICE]);
    },
    160687: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(489884), t), r(s(22574), t), r(s(396197), t), r(s(576758), t);
    },
    22574: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.openSessionCommandsSlots = t.openSessionLiveQueriesSlots = t.openSessionQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345),
        n = s(984369),
        i = s(189391);
      (t.openSessionQueriesSlots = {
        getLoginStatus: (0, o.slot)(),
        getLocalAccounts: (0, o.slot)(),
        getIsSSOUser: (0, o.slot)(),
        getSSOMigrationInfo: (0, o.slot)(),
        getSessionInfo: (0, o.slot)(),
        getMasterPasswordAndServerKey: (0, o.slot)(),
        getUserCryptoSettings: (0, o.slot)(),
        getSyncInfo: (0, o.slot)(),
        getIsSyncInProgress: (0, o.slot)(),
        getPremiumStatus: (0, o.slot)(),
        getNodePremiumStatus: (0, o.slot)(),
        getSubscriptionInformation: (0, o.slot)(),
        getActiveSpaces: (0, o.slot)(),
        getIsAuthenticated: (0, o.slot)(),
        getSSOProviderInfo: (0, o.slot)(),
        getUserLogin: (0, o.slot)(),
        getPublicUserId: (0, o.slot)(),
        getAnalyticsInstallationId: (0, o.slot)(),
        getUserLoginStatus: (0, o.slot)(),
        getWebOnboardingMode: (0, o.slot)(),
        getPremiumChurningDismissDate: (0, o.slot)(),
        getIsPaymentFailureChurningDismissed: (0, o.slot)(),
        getCredentialSearchOrder: (0, o.slot)(),
        getDidOpen: (0, o.slot)(),
        getPlatformName: (0, o.slot)(),
        getAccountAuthenticationType: (0, o.slot)(),
        ...n.deviceLimitSlots,
        ...i.twoFactorStatusSlots
      }),
        (t.openSessionLiveQueriesSlots = {
          liveLoginStatus: (0, r.liveSlot)(),
          liveDidOpen: (0, r.liveSlot)(),
          liveIsSSOUser: (0, r.liveSlot)(),
          liveSSOMigrationInfo: (0, r.liveSlot)(),
          liveSessionInfo: (0, r.liveSlot)(),
          liveSyncInfo: (0, r.liveSlot)(),
          liveIsSyncInProgress: (0, r.liveSlot)(),
          livePremiumStatus: (0, r.liveSlot)(),
          liveServiceProviderUrl: (0, r.liveSlot)(),
          liveWebOnboardingMode: (0, r.liveSlot)(),
          liveSubscriptionInformation: (0, r.liveSlot)(),
          ...n.deviceLimitLiveSlots,
          ...i.twoFactorStatusLiveSlots
        }),
        (t.openSessionCommandsSlots = {
          validateToken: (0, o.slot)(),
          validateMasterPassword: (0, o.slot)(),
          resetProtectedItemAutofillTimer: (0, o.slot)(),
          forceSync: (0, o.slot)(),
          updatePremiumChurningDismissDate: (0, o.slot)(),
          setCredentialSearchOrder: (0, o.slot)(),
          refreshSubscriptionInformation: (0, o.slot)(),
          updateAccountRecoveryKeyPersonalSettings: (0, o.slot)()
        });
    },
    489884: (e, t) => {
      var s;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CredentialSearchOrder =
          t.SSOMigrationType =
          t.SpaceStatus =
          t.SpaceTiers =
          t.B2CPlanFeatures =
          t.SyncStatuses =
          t.ServerSidePairingStatus =
          t.possibleAdminPermissions =
          t.groupPermissions =
          t.PlanTypes =
          t.PremiumLogTypes =
          t.CapabilityKeys =
          t.PremiumStatusCode =
            void 0),
        (function (e) {
          (e[(e.NO_PREMIUM = 0)] = "NO_PREMIUM"),
            (e[(e.PREMIUM = 1)] = "PREMIUM"),
            (e[(e.PREMIUM_CANCELLED = 2)] = "PREMIUM_CANCELLED"),
            (e[(e.OLD_ACCOUNT = 3)] = "OLD_ACCOUNT"),
            (e[(e.NEW_USER = 4)] = "NEW_USER"),
            (e[(e.GRACE_PERIOD = 5)] = "GRACE_PERIOD");
        })(t.PremiumStatusCode || (t.PremiumStatusCode = {})),
        (t.CapabilityKeys = [
          "autofillWithPhishingPrevention",
          "creditMonitoring",
          "dataLeak",
          "devicesLimit",
          "identityRestoration",
          "identityTheftProtection",
          "multipleAccounts",
          "passwordsLimit",
          "phoneSupport",
          "secureFiles",
          "secureNotes",
          "secureWiFi",
          "securityBreach",
          "sharingLimit",
          "sync",
          "yubikey",
          "scim",
          "sso",
          "collectionSharing"
        ]),
        (t.PremiumLogTypes = Object.freeze({
          freeTrialGranted: "free_trial_granted",
          premiumGranted: "premium_granted",
          renewed: "renewed",
          subscribed: "subscribed",
          crosssellPurchased: "crosssell_purchased",
          setAsLegacy: "set_as_legacy",
          familyCreated: "family_created",
          familyRenewed: "family_renewed"
        })),
        (t.PlanTypes = Object.freeze({
          Amazon: "amazon",
          FreeTrial: "free_trial",
          Invoice: "invoice",
          IOS: "ios",
          IOSRenewable: "ios_renewable",
          Legacy: "legacy",
          Mac: "mac",
          MacRenewable: "mac_renewable",
          Offer: "offer",
          Partner: "partner",
          Paypal: "paypal",
          PaypalRenewable: "paypal_renewable",
          Playstore: "playstore",
          PlaystoreRenewable: "playstore_renewable",
          Stripe: "stripe"
        })),
        (t.groupPermissions = ["GROUP_CREATE", "GROUP_DELETE", "GROUP_EDIT", "GROUP_READ"]),
        (t.possibleAdminPermissions = ["FULL", "BILLING", ...t.groupPermissions]),
        (function (e) {
          (e[(e.UNPAIRED = 0)] = "UNPAIRED"), (e[(e.PAIRED = 1)] = "PAIRED");
        })(t.ServerSidePairingStatus || (t.ServerSidePairingStatus = {})),
        (function (e) {
          (e.READY = "ready"), (e.IN_PROGRESS = "in_progress"), (e.SUCCESS = "success"), (e.FAILURE = "failure");
        })(t.SyncStatuses || (t.SyncStatuses = {})),
        (function (e) {
          (e.not_in_team = "not_in_team"), (e.proposed = "proposed"), (e.in_team = "in_team");
        })(s || (s = {})),
        (t.B2CPlanFeatures = Object.freeze({
          Premium: "premium",
          Essentials: "essentials",
          Premiumplus: "premiumplus",
          BackupForAll: "backup-for-all"
        })),
        (t.SpaceTiers = Object.freeze({
          Team: "team",
          Business: "business",
          Legacy: "legacy",
          Entreprise: "entreprise",
          Free: "free",
          Starter: "starter"
        })),
        (function (e) {
          (e.Accepted = "accepted"),
            (e.Pending = "pending"),
            (e.Proposed = "proposed"),
            (e.Refused = "refused"),
            (e.Removed = "removed"),
            (e.Revoked = "revoked"),
            (e.Unproposed = "unproposed");
        })(t.SpaceStatus || (t.SpaceStatus = {})),
        (function (e) {
          (e[(e.MP_TO_SSO = 0)] = "MP_TO_SSO"),
            (e[(e.MP_TO_SSO_WITH_INFO = 1)] = "MP_TO_SSO_WITH_INFO"),
            (e[(e.SSO_TO_MP = 2)] = "SSO_TO_MP");
        })(t.SSOMigrationType || (t.SSOMigrationType = {})),
        (function (e) {
          (e.NAME = "name"), (e.DATE = "date");
        })(t.CredentialSearchOrder || (t.CredentialSearchOrder = {}));
    },
    577277: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(220188), t), r(s(759417), t);
    },
    220188: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.passwordGeneratorQueriesSlots = t.passwordGeneratorCommandsSlots = void 0);
      const o = s(71796);
      (t.passwordGeneratorCommandsSlots = {
        generatePassword: (0, o.slot)(),
        generateAndSavePassword: (0, o.slot)(),
        savePasswordGenerationSettings: (0, o.slot)()
      }),
        (t.passwordGeneratorQueriesSlots = { getPasswordGenerationSettings: (0, o.slot)() });
    },
    759417: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    649106: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(254841), t), r(s(677492), t);
    },
    254841: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.paymentsQueriesSlots = t.paymentsCommandsSlots = void 0);
      const o = s(71796);
      (t.paymentsCommandsSlots = {
        cancelAutoRenew: (0, o.slot)(),
        downloadCustomerInvoice: (0, o.slot)(),
        fetchInvoiceList: (0, o.slot)(),
        requestRefund: (0, o.slot)()
      }),
        (t.paymentsQueriesSlots = { getInvoicesCount: (0, o.slot)(), getInvoiceList: (0, o.slot)(), getInvoiceListYears: (0, o.slot)() });
    },
    677492: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.OrderDir = void 0),
        (function (e) {
          (e.ascending = "ascending"), (e.descending = "descending");
        })(t.OrderDir || (t.OrderDir = {}));
    },
    968440: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(253379), t), r(s(184493), t);
    },
    253379: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.protectedItemsUnlockerLiveQueriesSlots = t.protectedItemsUnlockerQueriesSlots = t.protectedItemsUnlockerCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.protectedItemsUnlockerCommandsSlots = { disableCredentialProtection: (0, o.slot)(), unlockProtectedItems: (0, o.slot)() }),
        (t.protectedItemsUnlockerQueriesSlots = { areProtectedItemsUnlocked: (0, o.slot)() }),
        (t.protectedItemsUnlockerLiveQueriesSlots = { liveAreProtectedItemsUnlocked: (0, r.liveSlot)() });
    },
    184493: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DisableCredentialProtectionStatus = t.unlockProtectedItemsWrongPasswordError = t.UnlockProtectedItemsStatus = void 0),
        (function (e) {
          (e.SUCCESS = "success"), (e.ERROR = "error");
        })(t.UnlockProtectedItemsStatus || (t.UnlockProtectedItemsStatus = {})),
        (t.unlockProtectedItemsWrongPasswordError = "WRONG PASSWORD"),
        (function (e) {
          (e.SUCCESS = "success"), (e.ERROR = "error");
        })(t.DisableCredentialProtectionStatus || (t.DisableCredentialProtectionStatus = {}));
    },
    34852: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(536569), t), r(s(206461), t);
    },
    536569: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.recoveryLiveQueriesSlots = t.recoveryQueriesSlots = t.recoveryCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.recoveryCommandsSlots = {
        activateAccountRecovery: (0, o.slot)(),
        setupMasterPasswordForRecovery: (0, o.slot)(),
        deactivateAccountRecovery: (0, o.slot)(),
        registerDeviceForRecovery: (0, o.slot)(),
        startAccountRecovery: (0, o.slot)(),
        sendRecoveryRequest: (0, o.slot)(),
        cancelRecoveryRequest: (0, o.slot)(),
        checkRecoveryRequestStatus: (0, o.slot)(),
        recoverUserData: (0, o.slot)(),
        checkDoesLocalRecoveryKeyExist: (0, o.slot)(),
        isRecoveryRequestPending: (0, o.slot)()
      }),
        (t.recoveryQueriesSlots = {
          getRecoveryOptInSetting: (0, o.slot)(),
          getShouldShowFeatureActivationModal: (0, o.slot)(),
          getAccountRecoveryRequestCount: (0, o.slot)()
        }),
        (t.recoveryLiveQueriesSlots = { liveAccountRecoveryRequestCount: (0, r.liveSlot)() });
    },
    206461: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RequestStatus = t.RecoveryApiErrorType = void 0),
        (function (e) {
          (e.CheckRecoveryStatusFailed = "CHECK_RECOVERY_STATUS_FAILED"),
            (e.RecoverySetupFailed = "RECOVERY_SETUP_FAILED"),
            (e.RecoveryDeactivationFailed = "RECOVERY_DEACTIVATION_FAILED"),
            (e.RecoveryRequestFailed = "RECOVERY_REQUEST_FAILED"),
            (e.RegisterDeviceFailed = "REGISTER_DEVICE_FAILED"),
            (e.SetupMasterPasswordForRecoveryFailed = "SETUP_MASTERPASSWORD_FOR_RECOVERY_FAILED"),
            (e.CancelRecoveryRequestFailed = "CANCEL_RECOVERY_REQUEST_FAILED"),
            (e.RecoverUserDataFailed = "RECOVER_REQUEST_FAILED"),
            (e.CheckLocalRecoveryKeyFailed = "CHECK_LOCAL_RECOVERY_KEY_FAILED"),
            (e.StartAccountRecoveryFailed = "START_ACCOUNT_RECOVERY_FAILED"),
            (e.AccountRecoveryNotAvailableError = "ACCOUNT_RECOVERY_NOT_AVAILABLE_ERROR"),
            (e.IsRecoveryRequestPendingFailed = "IS_RECOVERY_REQUEST_PENDING_FAILED");
        })(t.RecoveryApiErrorType || (t.RecoveryApiErrorType = {})),
        (function (e) {
          (e.PENDING = "PENDING"),
            (e.APPROVED = "APPROVED"),
            (e.REFUSED = "REFUSED"),
            (e.OVERRIDDEN = "OVERRIDDEN"),
            (e.CANCELED = "CANCELED");
        })(t.RequestStatus || (t.RequestStatus = {}));
    },
    454205: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPIPersonalWebsiteEvent =
          t.isPIEmailEvent =
          t.isPICompanyEvent =
          t.isPIAddressEvent =
          t.isPIPhoneEvent =
          t.isPIIdentityEvent =
          t.isPersonalInfoEvent =
          t.SaveOrigin =
            void 0),
        (function (e) {
          (e.MANUAL = "MANUAL"),
            (e.MAV_DATACAPTURE = "MAV_DATACAPTURE"),
            (e.MAV_SAVE_CREDENTIAL = "MAV_SAVE_CREDENTIAL"),
            (e.IMPORT = "IMPORT");
        })(t.SaveOrigin || (t.SaveOrigin = {})),
        (t.isPersonalInfoEvent = function (e) {
          return ["KWCompany", "KWEmail", "KWPersonalWebsite", "KWIdentity", "KWAddress", "KWPhone"].some(
            (t) => Boolean(e) && e.kwType === t
          );
        }),
        (t.isPIIdentityEvent = function (e) {
          return Boolean(e) && "KWIdentity" === e.kwType;
        }),
        (t.isPIPhoneEvent = function (e) {
          return Boolean(e) && "KWPhone" === e.kwType;
        }),
        (t.isPIAddressEvent = function (e) {
          return Boolean(e) && "KWAddress" === e.kwType;
        }),
        (t.isPICompanyEvent = function (e) {
          return Boolean(e) && "KWCompany" === e.kwType;
        }),
        (t.isPIEmailEvent = function (e) {
          return Boolean(e) && "KWEmail" === e.kwType;
        }),
        (t.isPIPersonalWebsiteEvent = function (e) {
          return Boolean(e) && "KWPersonalWebsite" === e.kwType;
        });
    },
    919635: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(454205), t);
    },
    212891: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    399714: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UpdateSharingPermissionFailureReason =
          t.RevokeSharingFailureReason =
          t.SharingResponseStatus =
          t.ShareItemFailureReason =
          t.isGroupRecipient =
          t.isUserRecipient =
            void 0),
        (t.isUserRecipient = function (e) {
          return Boolean(e) && "user" === e.type;
        }),
        (t.isGroupRecipient = function (e) {
          return Boolean(e) && "userGroup" === e.type;
        }),
        (function (e) {
          (e[(e.ITEM_DOESNT_EXIST = 0)] = "ITEM_DOESNT_EXIST"),
            (e[(e.LIMIT_EXCEEDED = 1)] = "LIMIT_EXCEEDED"),
            (e[(e.ITEM_HAS_ATTACHMENTS = 2)] = "ITEM_HAS_ATTACHMENTS"),
            (e[(e.SHARING_FAILED = 3)] = "SHARING_FAILED");
        })(t.ShareItemFailureReason || (t.ShareItemFailureReason = {})),
        (function (e) {
          (e[(e.Accept = 0)] = "Accept"), (e[(e.Refuse = 1)] = "Refuse");
        })(t.SharingResponseStatus || (t.SharingResponseStatus = {})),
        (function (e) {
          (e[(e.FORBIDDEN = 0)] = "FORBIDDEN"), (e[(e.NOT_FOUND = 1)] = "NOT_FOUND"), (e[(e.REVOKE_FAILED = 2)] = "REVOKE_FAILED");
        })(t.RevokeSharingFailureReason || (t.RevokeSharingFailureReason = {})),
        (function (e) {
          (e[(e.FORBIDDEN = 0)] = "FORBIDDEN"), (e[(e.NOT_FOUND = 1)] = "NOT_FOUND"), (e[(e.UPDATE_FAILED = 2)] = "UPDATE_FAILED");
        })(t.UpdateSharingPermissionFailureReason || (t.UpdateSharingPermissionFailureReason = {}));
    },
    118497: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    559296: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    482130: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(559296), t), r(s(118497), t), r(s(399714), t);
    },
    131525: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(482130), t), r(s(957926), t), r(s(375841), t);
    },
    957926: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sharingCommandsSlots = t.sharingLiveQueriesSlots = t.sharingQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.sharingQueriesSlots = {
        getAllSharedItemIds: (0, o.slot)(),
        getMyAcceptedItemGroupUserMembers: (0, o.slot)(),
        getMyAcceptedUserGroups: (0, o.slot)(),
        getSharingCapacity: (0, o.slot)(),
        isAllowedToShare: (0, o.slot)(),
        getUserGroups: (0, o.slot)(),
        getUserGroup: (0, o.slot)(),
        getUserGroupPermissionLevel: (0, o.slot)(),
        getUserGroupMembers: (0, o.slot)(),
        getSharingUsers: (0, o.slot)(),
        getSharingUserPermissionLevel: (0, o.slot)()
      }),
        (t.sharingLiveQueriesSlots = {
          liveAllSharedItemIds: (0, r.liveSlot)(),
          liveMyAcceptedItemGroupUserMembers: (0, r.liveSlot)(),
          liveMyAcceptedUserGroups: (0, r.liveSlot)(),
          liveSharingCapacity: (0, r.liveSlot)(),
          liveUserGroups: (0, r.liveSlot)(),
          liveUserGroupPermissionLevel: (0, r.liveSlot)(),
          liveSharingUsers: (0, r.liveSlot)(),
          liveSharingUserPermissionLevel: (0, r.liveSlot)()
        }),
        (t.sharingCommandsSlots = { convertItemToDashlaneXml: (0, o.slot)(), shareItem: (0, o.slot)() });
    },
    375841: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    258575: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    84470: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    974226: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    760292: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StaticDataQueryType = void 0),
        (function (e) {
          (e[(e.CALLING_CODES = 0)] = "CALLING_CODES"), (e[(e.GEOGRAPHIC_STATES = 1)] = "GEOGRAPHIC_STATES");
        })(t.StaticDataQueryType || (t.StaticDataQueryType = {}));
    },
    558462: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GeographicStateLevel = void 0),
        (function (e) {
          (e[(e.LEVEL_0 = 0)] = "LEVEL_0"), (e[(e.LEVEL_1 = 1)] = "LEVEL_1");
        })(t.GeographicStateLevel || (t.GeographicStateLevel = {}));
    },
    98655: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.StaticDataQueryType = void 0);
      var n = s(760292);
      Object.defineProperty(t, "StaticDataQueryType", {
        enumerable: !0,
        get: function () {
          return n.StaticDataQueryType;
        }
      }),
        r(s(974226), t),
        r(s(558462), t),
        r(s(35324), t),
        r(s(778017), t);
    },
    778017: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.staticDataQueriesSlots = void 0);
      const o = s(71796);
      t.staticDataQueriesSlots = {
        getAllBanks: (0, o.slot)(),
        getAllCallingCodes: (0, o.slot)(),
        getBanks: (0, o.slot)(),
        getSecureDocumentsExtensionsList: (0, o.slot)()
      };
    },
    35324: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    901659: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    9987: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(84797), t), r(s(877030), t);
    },
    84797: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.teamCommandsSlots = t.teamQueriesSlots = void 0);
      const o = s(71796);
      (t.teamQueriesSlots = { getIsRecoveryEnabled: (0, o.slot)() }),
        (t.teamCommandsSlots = {
          getTeamInfo: (0, o.slot)(),
          getMidCycleTierUpgradePrice: (0, o.slot)(),
          getExpectedTaxInformation: (0, o.slot)(),
          changeTierMidCycle: (0, o.slot)(),
          computePlanPricing: (0, o.slot)(),
          addSeats: (0, o.slot)()
        });
    },
    877030: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AddSeatsErrorType =
          t.ComputePlanPricingErrorType =
          t.ChangeTierMidCycleErrorType =
          t.GetExpectedTaxInformationErrorType =
          t.GetMidCycleTierUpgradePriceErrorType =
            void 0),
        (function (e) {
          e.GetMidCycleTierUpgradePriceFailed = "GET_MID_CYCLE_TIER_UPGRADE_PRICE_FAILED";
        })(t.GetMidCycleTierUpgradePriceErrorType || (t.GetMidCycleTierUpgradePriceErrorType = {})),
        (function (e) {
          e.GetExpectedTaxInformationFailed = "GET_EXPECTED_TAX_INFORMATION_FAILED";
        })(t.GetExpectedTaxInformationErrorType || (t.GetExpectedTaxInformationErrorType = {})),
        (function (e) {
          (e.ChangeTierMidCycleFailed = "CHANGE_TIER_MID_CYCLE_FAILED"),
            (e.PaymentMeanIsNotCreditcard = "PAYMENT_MEAN_IS_NOT_CREDITCARD"),
            (e.CurrentPlanStartDateInFuture = "CURRENT_PLAN_START_DATE_IN_FUTURE"),
            (e.ChangeTierMidCycleError = "CHANGE_TIER_MID_CYCLE_ERROR"),
            (e.PaymentMeanIsNotInvoice = "PAYMENT_MEAN_IS_NOT_INVOICE"),
            (e.ChangeTierAmountTooExpensive = "CHANGE_TIER_AMOUNT_TOO_EXPENSIVE"),
            (e.ErrorCalculatingTierChangeDiscount = "ERROR_CALCULATING_TIER_CHANGE_DISCOUNT"),
            (e.InsufficientAmount = "INSUFFICIENT_AMOUNT"),
            (e.AssignedPlanSameTierAsCurrentPlan = "ASSIGNED_PLAN_SAME_TIER_AS_CURRENT_PLAN"),
            (e.SalesTaxMismatch = "SALES_TAX_MISMATCH"),
            (e.NotBillingAdmin = "NOT_BILLING_ADMIN");
        })(t.ChangeTierMidCycleErrorType || (t.ChangeTierMidCycleErrorType = {})),
        (function (e) {
          (e.ComputePlanPricingFailed = "COMPUTE_PLAN_PRICING_FAILED"), (e.NotBillingAdmin = "NOT_BILLING_ADMIN");
        })(t.ComputePlanPricingErrorType || (t.ComputePlanPricingErrorType = {})),
        (function (e) {
          (e.AddSeatsFailed = "ADD_SEATS_FAILED"),
            (e.CannotAddSeatDuringFreeTrial = "CANNOT_ADD_SEAT_DURING_FREE_TRIAL"),
            (e.CannotAddSeatDuringGracePeriod = "CANNOT_ADD_SEAT_DURING_GRACE_PERIOD"),
            (e.UnsupportedPaymentMean = "UNSUPPORTED_PAYMENT_MEAN"),
            (e.NotBillingAdmin = "NOT_BILLING_ADMIN"),
            (e.PaymentFailed = "PAYMENT_FAILED");
        })(t.AddSeatsErrorType || (t.AddSeatsErrorType = {}));
    },
    783891: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GetAuditLogQueryResultsState = t.ApiAuditLogsErrorType = void 0),
        (function (e) {
          (e.StartAuditLogsQueryFailed = "START_AUDIT_LOGS_QUERY_FAILED"),
            (e.GetAuditLogQueryResultsFailed = "GET_AUDIT_LOG_QUERY_RESULTS_FAILED");
        })(t.ApiAuditLogsErrorType || (t.ApiAuditLogsErrorType = {})),
        (function (e) {
          (e.Queued = "QUEUED"), (e.Running = "RUNNING"), (e.Succeeded = "SUCCEEDED"), (e.Failed = "FAILED"), (e.Cancelled = "CANCELLED");
        })(t.GetAuditLogQueryResultsState || (t.GetAuditLogQueryResultsState = {}));
    },
    776198: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TeamDevicePlatform = void 0),
        (function (e) {
          (e.SSO_CONNECTOR = "sso_connector"), (e.ENCRYPTION_SERVICE = "encryption_service"), (e.NITRO = "nitro_encryption_service");
        })(t.TeamDevicePlatform || (t.TeamDevicePlatform = {}));
    },
    56254: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    431197: (e, t) => {
      var s;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DomainStatus = t.DomainStatusResponse = void 0),
        (function (e) {
          (e.pending = "pending"), (e.valid = "valid"), (e.expired = "expired"), (e.invalid = "invalid");
        })((s = t.DomainStatusResponse || (t.DomainStatusResponse = {}))),
        (t.DomainStatus = s);
    },
    362236: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EncryptionServiceRestartStatusCodes = void 0),
        (function (e) {
          (e.OK = "OK"),
            (e.ES_UNREACHABLE = "ES_UNREACHABLE"),
            (e.ES_CONFIG_RELOAD_FAILURE = "ES_CONFIG_RELOAD_FAILURE"),
            (e.ES_INTERNAL_NETWORK_ERROR = "ES_INTERNAL_NETWORK_ERROR");
        })(t.EncryptionServiceRestartStatusCodes || (t.EncryptionServiceRestartStatusCodes = {}));
    },
    759226: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DomainNotValidForTeam =
          t.DomainContainsNonTeamUsers =
          t.InvalidPublicDomain =
          t.DomainAlreadyExists =
          t.TeamDoesNotExist =
          t.ServerError =
          t.InsufficientTier =
          t.TeamDeviceEncryptedConfigNotFound =
          t.InvalidTeamDeviceLogin =
          t.InvalidRequestError =
          t.DeviceAccountMappingAlreadyExists =
          t.DeviceKeyNotFound =
          t.UnknownTeamAdminError =
          t.NotAdmin =
          t.DeactivatedTeamDevice =
          t.BasicConfigNotFound =
            void 0),
        (t.BasicConfigNotFound = "BASIC_CONFIGURATION_NOT_FOUND"),
        (t.DeactivatedTeamDevice = "DEACTIVATED_TEAM_DEVICE"),
        (t.NotAdmin = "NOT_ADMIN"),
        (t.UnknownTeamAdminError = "UNKNOWN_ERROR"),
        (t.DeviceKeyNotFound = "DEVICE_KEY_NOT_FOUND"),
        (t.DeviceAccountMappingAlreadyExists = "DEVICE_ACCOUNT_MAPPING_ALREADY_EXISTS"),
        (t.InvalidRequestError = "invalid_request_error"),
        (t.InvalidTeamDeviceLogin = "INVALID_TEAM_DEVICE_LOGIN"),
        (t.TeamDeviceEncryptedConfigNotFound = "TEAM_DEVICE_CONFIGURATION_NOT_FOUND"),
        (t.InsufficientTier = "INSUFFICIENT_TIER"),
        (t.ServerError = "server_error"),
        (t.TeamDoesNotExist = "TEAM_DOES_NOT_EXIST"),
        (t.DomainAlreadyExists = "DOMAIN_ALREADY_EXISTS"),
        (t.InvalidPublicDomain = "INVALID_PUBLIC_DOMAIN"),
        (t.DomainContainsNonTeamUsers = "DOMAIN_CONTAINS_EXISTING_NONTEAM_USERS"),
        (t.DomainNotValidForTeam = "DOMAIN_NOT_VALID_FOR_TEAM");
    },
    857369: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnknownTeamAdminError = t.TeamDeviceEncryptedConfigNotFound = void 0);
      var n = s(759226);
      Object.defineProperty(t, "TeamDeviceEncryptedConfigNotFound", {
        enumerable: !0,
        get: function () {
          return n.TeamDeviceEncryptedConfigNotFound;
        }
      }),
        Object.defineProperty(t, "UnknownTeamAdminError", {
          enumerable: !0,
          get: function () {
            return n.UnknownTeamAdminError;
          }
        }),
        r(s(809825), t),
        r(s(783891), t),
        r(s(776198), t),
        r(s(56254), t),
        r(s(431197), t),
        r(s(362236), t),
        r(s(836471), t),
        r(s(34059), t),
        r(s(217023), t),
        r(s(221310), t),
        r(s(315770), t),
        r(s(210434), t);
    },
    836471: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InviteLinkResponseErrorCode = void 0),
        (function (e) {
          (e.NotAdmin = "not_admin"),
            (e.TeamKeyNotFound = "TEAM_KEY_NOT_FOUND"),
            (e.InviteLinkNotFound = "TEAM_INVITE_LINK_NOT_FOUND"),
            (e.UserInviteLinkNotFound = "USER_TEAM_INVITE_TOKEN_NOT_FOUND");
        })(t.InviteLinkResponseErrorCode || (t.InviteLinkResponseErrorCode = {}));
    },
    34059: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GetRecoveryCodesAsTeamCaptainErrorCode = void 0),
        (function (e) {
          (e.NotAdmin = "not_billing_admin"), (e.InternalError = "internal_error"), (e.UnknownError = "UNKNOWN_ERROR");
        })(t.GetRecoveryCodesAsTeamCaptainErrorCode || (t.GetRecoveryCodesAsTeamCaptainErrorCode = {}));
    },
    217023: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IDPMetadataParseErrors = t.IDPXmlParseErrors = void 0),
        (function (e) {
          e.XML_PARSE_FAILED = "xml_parse_failed";
        })(t.IDPXmlParseErrors || (t.IDPXmlParseErrors = {})),
        (function (e) {
          (e.KEY_DESCRIPTOR_NOT_FOUND = "key_descriptor_not_found"),
            (e.IDP_ENTRYPOINT_NOT_FOUND = "idp_entrypoint_not_found"),
            (e.INVALID_IDP_SSO_DESCRIPTOR = "invalid_idp_sso_descriptor"),
            (e.MISSING_CERTIFICATE = "missing_certificate"),
            (e.MULTIPLE_CERTIFICATES = "multiple_certificates"),
            (e.CERTIFICATE_TOO_SHORT = "certificate_too_short"),
            (e.CERTIFICATE_TOO_LONG = "certificate_too_long "),
            (e.CERTIFICATE_DECODE_FAILED = "certificate_decode_failed"),
            (e.INVALID_ENTRYPOINT = "invalid_entrypoint");
        })(t.IDPMetadataParseErrors || (t.IDPMetadataParseErrors = {}));
    },
    221310: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    210434: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.teamAdminCommandsSlots = t.teamAdminLiveQueriesSlots = t.teamAdminQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.teamAdminQueriesSlots = {
        getAdministrableUserGroup: (0, o.slot)(),
        getAdministrableUserGroups: (0, o.slot)(),
        isGroupNameAvailable: (0, o.slot)(),
        getAdminProvisioningKey: (0, o.slot)()
      }),
        (t.teamAdminLiveQueriesSlots = {
          liveAdministrableUserGroup: (0, r.liveSlot)(),
          liveAdministrableUserGroups: (0, r.liveSlot)(),
          liveAdminProvisioningKey: (0, r.liveSlot)()
        }),
        (t.teamAdminCommandsSlots = {
          registerTeamDomain: (0, o.slot)(),
          completeTeamDomainRegistration: (0, o.slot)(),
          deactivateTeamDomain: (0, o.slot)(),
          getTeamDomains: (0, o.slot)(),
          getTeamDevice: (0, o.slot)(),
          listTeamDevices: (0, o.slot)(),
          deactivateTeamDevice: (0, o.slot)(),
          registerTeamDevice: (0, o.slot)(),
          registerTeamDeviceAccount: (0, o.slot)(),
          getEncryptionServiceConfig: (0, o.slot)(),
          generateAndSaveEncryptionServiceConfig: (0, o.slot)(),
          clearSelfHostedESSettings: (0, o.slot)(),
          getTeamDeviceEncryptedConfig: (0, o.slot)(),
          updateTeamDeviceEncryptedConfig: (0, o.slot)(),
          updateTeamSettings: (0, o.slot)(),
          parseMetadataFields: (0, o.slot)(),
          persistAdminProvisioningKey: (0, o.slot)(),
          removeAdminProvisioningKey: (0, o.slot)(),
          createSSOConnectorConfig: (0, o.slot)(),
          generateSSOConnectorKey: (0, o.slot)(),
          startAuditLogsQuery: (0, o.slot)(),
          getAuditLogQueryResults: (0, o.slot)(),
          getRecoveryCodesAsTeamCaptain: (0, o.slot)(),
          createInviteLink: (0, o.slot)(),
          changeInviteLinkTeamKey: (0, o.slot)(),
          toggleInviteLink: (0, o.slot)(),
          getInviteLink: (0, o.slot)(),
          requestInviteLinkToken: (0, o.slot)(),
          getInviteLinkForAdmin: (0, o.slot)(),
          getLastADSyncDate: (0, o.slot)(),
          getSpecialUserGroupInviteValuesForMemberInTeam: (0, o.slot)(),
          getSpecialUserGroupRevision: (0, o.slot)()
        });
    },
    315770: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    809825: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TeamMemberSSOStatus = void 0),
        (function (e) {
          (e.Activated = "activated"), (e.PendingActivation = "pending_activation"), (e.PendingDeactivation = "pending_deactivation");
        })(t.TeamMemberSSOStatus || (t.TeamMemberSSOStatus = {}));
    },
    622162: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(662485), t), r(s(686174), t);
    },
    662485: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UserMessageTypes = void 0),
        (function (e) {
          (e.DEFAULT = "default"),
            (e.TRIAL_EXPIRED = "trial_expired"),
            (e.WEB_STORE = "web_store"),
            (e.DASHBOARD_UPRADE = "dashboard_upgrade"),
            (e.SHARING_CENTER_FAMILY = "sharing_center_family"),
            (e.SHARING_CENTER_WORK = "sharing_center_work");
        })(t.UserMessageTypes || (t.UserMessageTypes = {}));
    },
    686174: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.userMessagesCommandsSlots = t.userMessagesLiveQueriesSlots = t.userMessagesQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.userMessagesQueriesSlots = { getVisibleUserMessages: (0, o.slot)(), getUserMessages: (0, o.slot)() }),
        (t.userMessagesLiveQueriesSlots = { liveUserMessages: (0, r.liveSlot)(), liveVisibleUserMessages: (0, r.liveSlot)() }),
        (t.userMessagesCommandsSlots = { dismissUserMessages: (0, o.slot)(), addUserMessage: (0, o.slot)() });
    },
    931955: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(473955), t), r(s(325625), t);
    },
    473955: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VpnDisabledReason = t.VpnAccountActivationErrorType = t.VpnAccountStatusType = void 0),
        (function (e) {
          (e.Activated = "Activated"), (e.Activating = "Activating"), (e.Error = "Error"), (e.NotFound = "NotFound"), (e.Ready = "Ready");
        })(t.VpnAccountStatusType || (t.VpnAccountStatusType = {})),
        (function (e) {
          (e.ServerError = "ServerError"), (e.AccountAlreadyExistError = "AccountAlreadyExist");
        })(t.VpnAccountActivationErrorType || (t.VpnAccountActivationErrorType = {})),
        (function (e) {
          (e.InTeam = "InTeam"), (e.NotPremium = "NotPremium"), (e.NoPayment = "NoPayment"), (e.Other = "Other");
        })(t.VpnDisabledReason || (t.VpnDisabledReason = {}));
    },
    325625: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vpnCommandsSlots = t.vpnLiveQueriesSlots = t.vpnQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.vpnQueriesSlots = { getVpnAccount: (0, o.slot)(), getVpnCapabilitySetting: (0, o.slot)() }),
        (t.vpnLiveQueriesSlots = { liveVpnAccount: (0, r.liveSlot)() }),
        (t.vpnCommandsSlots = {
          activateVpnAccount: (0, o.slot)(),
          clearVpnAccountErrors: (0, o.slot)(),
          completeVpnAccountActivation: (0, o.slot)()
        });
    },
    613006: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = s(890693),
        r = s(162240),
        n = s(47582),
        i = s(23704),
        a = s(78095),
        c = s(65741),
        l = s(796591),
        d = s(185481),
        u = s(992137);
      o.taskTrackingApi,
        r.activityLogsApi,
        n.vaultItemsCrudApi,
        l.AuthenticationFlowContracts.authenticationFlowApi,
        l.DeviceTransferContracts.deviceTransferApi,
        d.sessionApi,
        u.masterPasswordSecurityApi,
        a.passwordHealthApi,
        c.carbonLegacyApi,
        d.changeMasterPasswordApi,
        i.sharingCollectionsApi,
        i.sharingInvitesApi,
        n.vaultOrganizationApi,
        o.featureFlipsApi,
        o.webServicesApi;
    },
    65741: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonLegacyApi = void 0);
      const o = s(890693),
        r = s(399765),
        n = s(970314),
        i = s(78515);
      t.carbonLegacyApi = (0, o.defineModuleApi)({ name: "carbon-legacy", commands: r.commands, queries: i.queries, events: n.events });
    },
    149420: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonLegacyClient = void 0);
      const o = s(890693),
        r = s(65741);
      class n extends (0, o.defineModuleClient)(r.carbonLegacyApi) {}
      (t.CarbonLegacyClient = n), (0, o.registerModuleClient)(r.carbonLegacyApi, n);
    },
    399765: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.commands =
          t.commandsFromCarbonAPI =
          t.MitigationDeleteGrapheneUserDataCommand =
          t.CarbonLegacyLeelooCommand =
          t.CarbonCommand =
            void 0);
      const o = s(890693),
        r = s(672345),
        n = s(516229);
      class i extends (0, o.defineCarbonCommand)({ scope: o.UseCaseScope.Device }) {}
      t.CarbonCommand = i;
      class a extends (0, o.defineCarbonCommand)({ scope: o.UseCaseScope.Device }) {}
      t.CarbonLegacyLeelooCommand = a;
      class c extends (0, o.defineCommand)({ scope: o.UseCaseScope.Device }) {}
      (t.MitigationDeleteGrapheneUserDataCommand = c),
        (t.commandsFromCarbonAPI = (0, n.createCommandContractsFromConnector)(r.carbonCommandsSlots)),
        (t.commands = {
          ...t.commandsFromCarbonAPI,
          CarbonCommand: i,
          CarbonLegacyLeelooCommand: a,
          MitigationDeleteGrapheneUserDataCommand: c
        });
    },
    970314: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.events = t.CarbonLegacyDeviceRemotelyDeleted = t.CarbonLegacyEvent = t.CarbonCommandResultEvent = void 0);
      const o = s(890693);
      class r extends (0, o.defineEvent)({ scope: o.UseCaseScope.Device }) {}
      t.CarbonCommandResultEvent = r;
      class n extends (0, o.defineEvent)({ scope: o.UseCaseScope.Device }) {}
      t.CarbonLegacyEvent = n;
      class i extends (0, o.defineEvent)({ scope: o.UseCaseScope.Device }) {}
      (t.CarbonLegacyDeviceRemotelyDeleted = i),
        (t.events = { CarbonCommandResultEvent: r, CarbonLegacyEvent: n, CarbonLegacyDeviceRemotelyDeleted: i });
    },
    78515: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.queries = t.queriesFromCarbonAPI = t.CarbonStateListQuery = t.CarbonStateQuery = void 0);
      const o = s(890693),
        r = s(672345),
        n = s(516229);
      class i extends (0, o.defineQuery)({ scope: o.UseCaseScope.Device }) {}
      t.CarbonStateQuery = i;
      class a extends (0, o.defineQuery)({ scope: o.UseCaseScope.Device }) {}
      (t.CarbonStateListQuery = a),
        (t.queriesFromCarbonAPI = (0, n.createQueryContractsFromConnectors)(r.carbonQueriesSlots, r.carbonLiveQueriesSlots)),
        (t.queries = { ...t.queriesFromCarbonAPI, CarbonStateQuery: i, CarbonStateListQuery: a });
    },
    83496: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(s(78515), t),
        r(s(970314), t),
        r(s(399765), t),
        r(s(176931), t),
        r(s(65741), t),
        r(s(149420), t);
    },
    516229: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createQueryContractsFromConnectors = t.createCommandContractsFromConnector = void 0);
      const o = s(890693);
      (t.createCommandContractsFromConnector = function (e) {
        return Object.keys(e).reduce(
          (e, t) => ({
            ...e,
            [`${t[0].toUpperCase().concat(t.substring(1))}Command`]: (0, o.defineCarbonCommand)({ scope: o.UseCaseScope.Device })
          }),
          {}
        );
      }),
        (t.createQueryContractsFromConnectors = function (e, t) {
          return [...Object.keys(e), ...Object.keys(t)].reduce(
            (e, t) => ({
              ...e,
              [`${t[0].toUpperCase().concat(t.substring(1))}Query`]: (0, o.defineQuery)({ scope: o.UseCaseScope.Device })
            }),
            {}
          );
        });
    },
    176931: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LEGACY_CARBON_LEELOO_USED_COMMANDS = void 0),
        (t.LEGACY_CARBON_LEELOO_USED_COMMANDS = [
          "lockSession",
          "closeSession",
          "cancelDashlaneAuthenticatorRegistration",
          "openSession",
          "openSessionWithMasterPassword",
          "openSessionWithDashlaneAuthenticator",
          "openSessionWithExtraDeviceToken",
          "openSessionWithOTP",
          "openSessionWithOTPForNewDevice",
          "openSessionWithToken",
          "openSessionResendToken",
          "removePersonalDataItem",
          "savePersonalDataItem",
          "sessionForceSync",
          "getLocalAccountsList"
        ]);
    },
    137988: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bankAccountCommandsSlots = t.bankAccountLiveQueriesSlots = t.bankAccountQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.bankAccountQueriesSlots = { getBankAccount: (0, o.slot)(), getBankAccounts: (0, o.slot)() }),
        (t.bankAccountLiveQueriesSlots = { liveBankAccount: (0, r.liveSlot)(), liveBankAccounts: (0, r.liveSlot)() }),
        (t.bankAccountCommandsSlots = {
          addBankAccount: (0, o.slot)(),
          updateBankAccount: (0, o.slot)(),
          deleteBankAccount: (0, o.slot)()
        });
    },
    123446: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(137988), t), r(s(605865), t);
    },
    605865: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UpdateBankAccountResultErrorCode = t.AddBankAccountResultErrorCode = t.DeleteBankAccountErrorCode = void 0),
        (function (e) {
          (e[(e.NOT_AUTHORIZED = 0)] = "NOT_AUTHORIZED"),
            (e[(e.NOT_FOUND = 1)] = "NOT_FOUND"),
            (e[(e.INTERNAL_ERROR = 2)] = "INTERNAL_ERROR");
        })(t.DeleteBankAccountErrorCode || (t.DeleteBankAccountErrorCode = {})),
        (function (e) {
          e.EMPTY_BIC_AND_IBAN = "EMPTY_BIC_AND_IBAN";
        })(t.AddBankAccountResultErrorCode || (t.AddBankAccountResultErrorCode = {})),
        (function (e) {
          e.EMPTY_BIC_AND_IBAN = "EMPTY_BIC_AND_IBAN";
        })(t.UpdateBankAccountResultErrorCode || (t.UpdateBankAccountResultErrorCode = {}));
    },
    685530: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.breachesCommandsSlots = t.breachesLiveQueriesSlots = t.breachesQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.breachesQueriesSlots = {
        getBreach: (0, o.slot)(),
        getBreaches: (0, o.slot)(),
        getBreachesPage: (0, o.slot)(),
        getBreachesPaginationToken: (0, o.slot)(),
        getBreachesUpdateStatus: (0, o.slot)()
      }),
        (t.breachesLiveQueriesSlots = {
          liveBreach: (0, r.liveSlot)(),
          liveBreaches: (0, r.liveSlot)(),
          liveBreachesBatch: (0, r.liveSlot)(),
          liveBreachesUpdaterStatus: (0, r.liveSlot)()
        }),
        (t.breachesCommandsSlots = { updateBreachStatus: (0, o.slot)() });
    },
    859870: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(685530), t), r(s(456476), t);
    },
    456476: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BreachesUpdaterStatus = t.BreachLeakedDataType = void 0),
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
        })(t.BreachLeakedDataType || (t.BreachLeakedDataType = {})),
        (function (e) {
          (e.UNKNOWN = "unknown"),
            (e.SYNCING = "syncing"),
            (e.SKIPPED = "skipped"),
            (e.UNCHANGED = "unchanged"),
            (e.UPDATED = "updated"),
            (e.ERROR = "error");
        })(t.BreachesUpdaterStatus || (t.BreachesUpdaterStatus = {}));
    },
    21528: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.collectionsCommandsSlots = void 0);
      const o = s(71796);
      t.collectionsCommandsSlots = {
        addCollection: (0, o.slot)(),
        deleteCollection: (0, o.slot)(),
        removeItemsFromCollections: (0, o.slot)(),
        updateCollection: (0, o.slot)()
      };
    },
    523328: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(21528), t), r(s(902868), t);
    },
    902868: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    340466: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(495331), t), r(s(300347), t);
    },
    495331: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.credentialsLiveQueriesSlots = t.credentialsQueriesSlots = t.credentialsCommandsSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.credentialsCommandsSlots = {
        addCredential: (0, o.slot)(),
        deleteCredential: (0, o.slot)(),
        deleteCredentialsInBulk: (0, o.slot)(),
        updateCredential: (0, o.slot)(),
        updateLinkedWebsites: (0, o.slot)()
      }),
        (t.credentialsQueriesSlots = {
          canUserAddNewCredential: (0, o.slot)(),
          getCredential: (0, o.slot)(),
          getCredentialCategories: (0, o.slot)(),
          getCredentials: (0, o.slot)(),
          getCredentialsByDomain: (0, o.slot)(),
          getCredentialsCount: (0, o.slot)(),
          getCredentialLimitStatus: (0, o.slot)(),
          getCredentialsPage: (0, o.slot)(),
          getCredentialsPaginationToken: (0, o.slot)(),
          getDashlaneDefinedLinkedWebsites: (0, o.slot)(),
          getShouldShowRequireMasterPassword: (0, o.slot)()
        }),
        (t.credentialsLiveQueriesSlots = {
          liveCanUserAddNewCredential: (0, r.liveSlot)(),
          liveCredential: (0, r.liveSlot)(),
          liveCredentials: (0, r.liveSlot)(),
          liveCredentialsByDomain: (0, r.liveSlot)(),
          liveCredentialsBatch: (0, r.liveSlot)(),
          liveCredentialsCount: (0, r.liveSlot)(),
          liveCredentialLimitStatus: (0, r.liveSlot)()
        });
    },
    300347: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CredentialLimitStatus = void 0),
        (function (e) {
          (e.Unlimited = "unlimited"), (e.UnderLimit = "underLimit"), (e.NearLimit = "nearLimit"), (e.AtOrAboveLimit = "atOrAboveLimit");
        })(t.CredentialLimitStatus || (t.CredentialLimitStatus = {}));
    },
    555552: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.exportCommandsSlots = t.exportQueriesSlots = void 0);
      const o = s(71796);
      (t.exportQueriesSlots = { getIsForcedDomainsEnabled: (0, o.slot)() }),
        (t.exportCommandsSlots = { getPersonalDataExport: (0, o.slot)() });
    },
    510362: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(555552), t), r(s(400082), t);
    },
    400082: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GetPersonalDataExportErrorMessage = void 0),
        (function (e) {
          (e.UNSUPPORTED_DATATYPE_ERROR = "Unsupported Data Export Type"), (e.UNDEFINED_PASSWORD_ERROR = "Undefined Password");
        })(t.GetPersonalDataExportErrorMessage || (t.GetPersonalDataExportErrorMessage = {}));
    },
    386575: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generatedPasswordsCommandsSlots = t.generatedPasswordsLiveQueriesSlots = t.generatedPasswordsQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.generatedPasswordsQueriesSlots = {
        getGeneratedPassword: (0, o.slot)(),
        getGeneratedPasswordsCount: (0, o.slot)(),
        getGeneratedPasswords: (0, o.slot)(),
        getGeneratedPasswordsPage: (0, o.slot)(),
        getGeneratedPasswordsPaginationToken: (0, o.slot)()
      }),
        (t.generatedPasswordsLiveQueriesSlots = {
          liveGeneratedPasswordsCount: (0, r.liveSlot)(),
          liveGeneratedPasswords: (0, r.liveSlot)()
        }),
        (t.generatedPasswordsCommandsSlots = { saveGeneratedPassword: (0, o.slot)() });
    },
    520703: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(386575), t), r(s(999308), t);
    },
    999308: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    325632: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.driverLicensesCommandsSlots = t.driverLicensesLiveQueriesSlots = t.driverLicensesQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.driverLicensesQueriesSlots = { getDriverLicense: (0, o.slot)(), getDriverLicenses: (0, o.slot)() }),
        (t.driverLicensesLiveQueriesSlots = { liveDriverLicense: (0, r.liveSlot)(), liveDriverLicenses: (0, r.liveSlot)() }),
        (t.driverLicensesCommandsSlots = {
          addDriverLicense: (0, o.slot)(),
          editDriverLicense: (0, o.slot)(),
          deleteDriverLicense: (0, o.slot)()
        });
    },
    57155: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(325632), t), r(s(648749), t);
    },
    648749: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    565671: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fiscalsIdCommandsSlots = t.fiscalIdsLiveQueriesSlots = t.fiscalIdsQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.fiscalIdsQueriesSlots = { getFiscalId: (0, o.slot)(), getFiscalIds: (0, o.slot)() }),
        (t.fiscalIdsLiveQueriesSlots = { liveFiscalId: (0, r.liveSlot)(), liveFiscalIds: (0, r.liveSlot)() }),
        (t.fiscalsIdCommandsSlots = { addFiscalId: (0, o.slot)(), editFiscalId: (0, o.slot)(), deleteFiscalId: (0, o.slot)() });
    },
    249258: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(565671), t), r(s(483059), t);
    },
    483059: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    90232: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.idCardsCommandsSlots = t.idCardsLiveQueriesSlots = t.idCardsQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.idCardsQueriesSlots = { getIdCard: (0, o.slot)(), getIdCards: (0, o.slot)() }),
        (t.idCardsLiveQueriesSlots = { liveIdCard: (0, r.liveSlot)(), liveIdCards: (0, r.liveSlot)() }),
        (t.idCardsCommandsSlots = { addIdCard: (0, o.slot)(), editIdCard: (0, o.slot)(), deleteIdCard: (0, o.slot)() });
    },
    313538: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(90232), t), r(s(26328), t);
    },
    26328: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    461470: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(s(916281), t),
        r(s(57155), t),
        r(s(249258), t),
        r(s(313538), t),
        r(s(673758), t),
        r(s(274847), t),
        r(s(568955), t);
    },
    673758: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(204922), t), r(s(686924), t);
    },
    204922: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.passportsCommandsSlots = t.passportsLiveQueriesSlots = t.passportsQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.passportsQueriesSlots = { getPassport: (0, o.slot)(), getPassports: (0, o.slot)() }),
        (t.passportsLiveQueriesSlots = { livePassport: (0, r.liveSlot)(), livePassports: (0, r.liveSlot)() }),
        (t.passportsCommandsSlots = { addPassport: (0, o.slot)(), editPassport: (0, o.slot)(), deletePassport: (0, o.slot)() });
    },
    686924: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    916281: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.idsCommandsSlots = t.idsLiveQueriesSlots = t.idsQueriesSlots = void 0);
      const o = s(71796),
        r = s(57155),
        n = s(565671),
        i = s(313538),
        a = s(673758),
        c = s(274847);
      (t.idsQueriesSlots = (0, o.combineEvents)(
        r.driverLicensesQueriesSlots,
        n.fiscalIdsQueriesSlots,
        i.idCardsQueriesSlots,
        a.passportsQueriesSlots,
        c.socialSecurityIdsQueriesSlots
      )),
        (t.idsLiveQueriesSlots = (0, o.combineEvents)(
          r.driverLicensesLiveQueriesSlots,
          n.fiscalIdsLiveQueriesSlots,
          i.idCardsLiveQueriesSlots,
          a.passportsLiveQueriesSlots,
          c.socialSecurityIdsLiveQueriesSlots
        )),
        (t.idsCommandsSlots = (0, o.combineEvents)(
          r.driverLicensesCommandsSlots,
          n.fiscalsIdCommandsSlots,
          i.idCardsCommandsSlots,
          a.passportsCommandsSlots,
          c.socialSecurityIdsCommandsSlots
        ));
    },
    274847: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(344771), t), r(s(641022), t);
    },
    344771: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.socialSecurityIdsCommandsSlots = t.socialSecurityIdsLiveQueriesSlots = t.socialSecurityIdsQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.socialSecurityIdsQueriesSlots = { getSocialSecurityId: (0, o.slot)(), getSocialSecurityIds: (0, o.slot)() }),
        (t.socialSecurityIdsLiveQueriesSlots = { liveSocialSecurityId: (0, r.liveSlot)(), liveSocialSecurityIds: (0, r.liveSlot)() }),
        (t.socialSecurityIdsCommandsSlots = {
          addSocialSecurityId: (0, o.slot)(),
          editSocialSecurityId: (0, o.slot)(),
          deleteSocialSecurityId: (0, o.slot)()
        });
    },
    641022: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    568955: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UpdateIdResultErrorCode = t.AddIdResultErrorCode = t.IdErrorCode = void 0),
        (function (e) {
          (e.INTERNAL_ERROR = "INTERNAL_ERROR"), (e.NOT_AUTHENTICATED = "NOT_AUTHENTICATED"), (e.NOT_FOUND = "NOT_FOUND");
        })(t.IdErrorCode || (t.IdErrorCode = {})),
        (function (e) {
          e.MISSING_ID_NUMBER = "MISSING_ID_NUMBER";
        })(t.AddIdResultErrorCode || (t.AddIdResultErrorCode = {})),
        (function (e) {
          e.MISSING_ID_NUMBER = "MISSING_ID_NUMBER";
        })(t.UpdateIdResultErrorCode || (t.UpdateIdResultErrorCode = {}));
    },
    760655: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.importCommandsSlots = t.importLiveQueriesSlots = t.importQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.importQueriesSlots = { getImportPersonalDataStatus: (0, o.slot)() }),
        (t.importLiveQueriesSlots = { liveImportPersonalDataStatus: (0, r.liveSlot)() }),
        (t.importCommandsSlots = {
          importPersonalData: (0, o.slot)(),
          previewPersonalData: (0, o.slot)(),
          dismissPersonalDataImportNotifications: (0, o.slot)()
        });
    },
    107716: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(760655), t), r(s(342393), t);
    },
    342393: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PreviewPersonalDataErrorType =
          t.ImportPersonalDataStateType =
          t.ImportPersonalDataErrorType =
          t.ImportFormats =
          t.ImportSource =
          t.SupportedVaultTypes =
            void 0),
        (function (e) {
          (e.CREDENTIAL = "credentials"),
            (e.NOTE = "notes"),
            (e.PAYMENT_CARD = "paymentCards"),
            (e.BANK_ACCOUNT = "bankAccounts"),
            (e.COLLECTION = "collections");
        })(t.SupportedVaultTypes || (t.SupportedVaultTypes = {})),
        (function (e) {
          (e["1Password"] = "1password"),
            (e.Bitwarden = "bitwarden"),
            (e.Chrome = "chrome"),
            (e.Dash = "dash"),
            (e.Edge = "edge"),
            (e.Firefox = "firefox"),
            (e.Keepass = "keepass"),
            (e.Keeper = "keeper"),
            (e.Lastpass = "lastpass"),
            (e.Other = "other"),
            (e.Safari = "safari");
        })(t.ImportSource || (t.ImportSource = {})),
        (function (e) {
          (e.Csv = "csv"), (e.Dash = "dash");
        })(t.ImportFormats || (t.ImportFormats = {})),
        (function (e) {
          (e.Unavailable = "unavailable"), (e.Unknown = "unknown");
        })(t.ImportPersonalDataErrorType || (t.ImportPersonalDataErrorType = {})),
        (function (e) {
          (e.Idle = "idle"), (e.Processing = "processing"), (e.Success = "success"), (e.Error = "error");
        })(t.ImportPersonalDataStateType || (t.ImportPersonalDataStateType = {})),
        (function (e) {
          (e.BadPassword = "bad_password"), (e.Unavailable = "unavailable"), (e.InvalidFormat = "invalid"), (e.Unknown = "unknown");
        })(t.PreviewPersonalDataErrorType || (t.PreviewPersonalDataErrorType = {}));
    },
    630897: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(s(757882), t),
        r(s(288295), t),
        r(s(63571), t),
        r(s(123446), t),
        r(s(859870), t),
        r(s(523328), t),
        r(s(340466), t),
        r(s(510362), t),
        r(s(461470), t),
        r(s(107716), t),
        r(s(376354), t),
        r(s(913995), t),
        r(s(342366), t),
        r(s(727958), t),
        r(s(591480), t),
        r(s(244015), t),
        r(s(532487), t),
        r(s(862061), t),
        r(s(135643), t),
        r(s(748934), t),
        r(s(520703), t),
        r(s(434237), t);
    },
    376354: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(909092), t);
    },
    909092: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UpdateLinkedWebsitesError = void 0),
        (function (e) {
          e.CredentialUpdateError = "credentialUpdateError";
        })(t.UpdateLinkedWebsitesError || (t.UpdateLinkedWebsitesError = {}));
    },
    862061: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(491583), t), r(s(701172), t);
    },
    491583: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.passkeyCommandsSlots = t.passkeyLiveQueriesSlots = t.passkeyQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.passkeyQueriesSlots = { getPasskey: (0, o.slot)(), getPasskeys: (0, o.slot)(), getPasskeysForDomain: (0, o.slot)() }),
        (t.passkeyLiveQueriesSlots = { livePasskey: (0, r.liveSlot)(), livePasskeys: (0, r.liveSlot)() }),
        (t.passkeyCommandsSlots = { addPasskey: (0, o.slot)(), updatePasskey: (0, o.slot)(), deletePasskey: (0, o.slot)() });
    },
    701172: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DeletePasskeyErrorCode = void 0),
        (function (e) {
          (e[(e.NOT_AUTHORIZED = 0)] = "NOT_AUTHORIZED"),
            (e[(e.NOT_FOUND = 1)] = "NOT_FOUND"),
            (e[(e.INTERNAL_ERROR = 2)] = "INTERNAL_ERROR");
        })(t.DeletePasskeyErrorCode || (t.DeletePasskeyErrorCode = {}));
    },
    135643: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(929477), t), r(s(138161), t);
    },
    929477: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.passwordHistoryLiveQueriesSlots = t.passwordHistoryQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.passwordHistoryQueriesSlots = {
        getPasswordHistory: (0, o.slot)(),
        getHasPasswordHistory: (0, o.slot)(),
        getPasswordHistoryPage: (0, o.slot)(),
        getPasswordHistoryPaginationToken: (0, o.slot)()
      }),
        (t.passwordHistoryLiveQueriesSlots = { livePasswordHistory: (0, r.liveSlot)(), livePasswordHistoryBatch: (0, r.liveSlot)() });
    },
    138161: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PasswordHistoryItemType = void 0),
        (function (e) {
          (e.Credential = "credential"), (e.Generated = "generated");
        })(t.PasswordHistoryItemType || (t.PasswordHistoryItemType = {}));
    },
    748934: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(675161), t), r(s(640672), t);
    },
    675161: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.paymentCardCommandsSlots = t.paymentCardLiveQueriesSlots = t.paymentCardQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.paymentCardQueriesSlots = { getPaymentCard: (0, o.slot)(), getPaymentCards: (0, o.slot)() }),
        (t.paymentCardLiveQueriesSlots = { livePaymentCard: (0, r.liveSlot)(), livePaymentCards: (0, r.liveSlot)() }),
        (t.paymentCardCommandsSlots = {
          addPaymentCard: (0, o.slot)(),
          updatePaymentCard: (0, o.slot)(),
          deletePaymentCard: (0, o.slot)()
        });
    },
    640672: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DeletePaymentCardErrorCode = t.PaymentCardSaveResultErrorCode = void 0),
        (function (e) {
          (e.EMPTY_CARD_NUMBER_AND_SECURITY_CODE = "EMPTY_CARD_NUMBER_AND_SECURITY_CODE"), (e.NOT_FOUND = "NOT_FOUND");
        })(t.PaymentCardSaveResultErrorCode || (t.PaymentCardSaveResultErrorCode = {})),
        (function (e) {
          (e.NOT_AUTHORIZED = "NOT_AUTHORIZED"), (e.NOT_FOUND = "NOT_FOUND"), (e.INTERNAL_ERROR = "INTERNAL_ERROR");
        })(t.DeletePaymentCardErrorCode || (t.DeletePaymentCardErrorCode = {}));
    },
    130557: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addressLiveQueriesSlots = t.addressQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.addressQueriesSlots = { getAddresses: (0, o.slot)(), getAddress: (0, o.slot)() }),
        (t.addressLiveQueriesSlots = { liveAddress: (0, r.liveSlot)(), liveAddresses: (0, r.liveSlot)() });
    },
    646329: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(130557), t), r(s(801721), t);
    },
    801721: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    697301: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.companyLiveQueriesSlots = t.companyQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.companyQueriesSlots = { getCompanies: (0, o.slot)(), getCompany: (0, o.slot)() }),
        (t.companyLiveQueriesSlots = { liveCompanies: (0, r.liveSlot)(), liveCompany: (0, r.liveSlot)() });
    },
    5746: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(697301), t), r(s(104249), t);
    },
    104249: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    824375: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.emailLiveQueriesSlots = t.emailQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.emailQueriesSlots = { getEmail: (0, o.slot)(), getEmails: (0, o.slot)() }),
        (t.emailLiveQueriesSlots = { liveEmail: (0, r.liveSlot)(), liveEmails: (0, r.liveSlot)() });
    },
    947413: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(824375), t), r(s(300836), t);
    },
    300836: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    783530: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.identityLiveQueriesSlots = t.identityQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.identityQueriesSlots = { getIdentities: (0, o.slot)(), getIdentitiesCount: (0, o.slot)(), getIdentity: (0, o.slot)() }),
        (t.identityLiveQueriesSlots = {
          liveIdentities: (0, r.liveSlot)(),
          liveIdentitiesCount: (0, r.liveSlot)(),
          liveIdentity: (0, r.liveSlot)()
        });
    },
    808400: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(783530), t), r(s(367369), t);
    },
    367369: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    63571: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(s(646329), t),
        r(s(5746), t),
        r(s(947413), t),
        r(s(808400), t),
        r(s(87893), t),
        r(s(660776), t),
        r(s(664682), t);
    },
    660776: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(868813), t), r(s(800392), t);
    },
    800392: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.phoneLiveQueriesSlots = t.phoneQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.phoneQueriesSlots = { getPhone: (0, o.slot)(), getPhones: (0, o.slot)() }),
        (t.phoneLiveQueriesSlots = { livePhone: (0, r.liveSlot)(), livePhones: (0, r.liveSlot)() });
    },
    868813: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    664682: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.personalInfoLiveQueriesSlots = t.personalInfoQueriesSlots = void 0);
      const o = s(71796),
        r = s(646329),
        n = s(5746),
        i = s(947413),
        a = s(808400),
        c = s(660776),
        l = s(87893);
      (t.personalInfoQueriesSlots = (0, o.combineEvents)(
        r.addressQueriesSlots,
        n.companyQueriesSlots,
        i.emailQueriesSlots,
        a.identityQueriesSlots,
        c.phoneQueriesSlots,
        l.websiteQueriesSlots
      )),
        (t.personalInfoLiveQueriesSlots = (0, o.combineEvents)(
          r.addressLiveQueriesSlots,
          n.companyLiveQueriesSlots,
          i.emailLiveQueriesSlots,
          a.identityLiveQueriesSlots,
          c.phoneLiveQueriesSlots,
          l.websiteLiveQueriesSlots
        ));
    },
    87893: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(63142), t), r(s(708598), t);
    },
    63142: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    708598: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.websiteLiveQueriesSlots = t.websiteQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.websiteQueriesSlots = { getPersonalWebsite: (0, o.slot)(), getPersonalWebsites: (0, o.slot)() }),
        (t.websiteLiveQueriesSlots = { livePersonalWebsite: (0, r.liveSlot)(), livePersonalWebsites: (0, r.liveSlot)() });
    },
    913995: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(356894), t), r(s(517013), t);
    },
    356894: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.secretCommandsSlots = t.secretLiveQueriesSlots = t.secretQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.secretQueriesSlots = {
        getSecret: (0, o.slot)(),
        getSecrets: (0, o.slot)(),
        getSecretsCount: (0, o.slot)(),
        getSecretsPage: (0, o.slot)(),
        getSecretsPaginationToken: (0, o.slot)()
      }),
        (t.secretLiveQueriesSlots = {
          liveSecret: (0, r.liveSlot)(),
          liveSecrets: (0, r.liveSlot)(),
          liveSecretsBatch: (0, r.liveSlot)(),
          liveSecretsCount: (0, r.liveSlot)()
        }),
        (t.secretCommandsSlots = { addSecret: (0, o.slot)(), updateSecret: (0, o.slot)(), deleteSecret: (0, o.slot)() });
    },
    517013: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DeleteSecretErrorCode = t.SecretSaveResultErrorCode = void 0),
        (function (e) {
          e.NOT_FOUND = "NOT_FOUND";
        })(t.SecretSaveResultErrorCode || (t.SecretSaveResultErrorCode = {})),
        (function (e) {
          (e.NOT_FOUND = "NOT_FOUND"),
            (e.INTERNAL_ERROR = "INTERNAL_ERROR"),
            (e.LEAVE_SHARING_FAILED = "LEAVE_SHARING_FAILED"),
            (e.LEAVE_SHARING_FORBIDDEN_LAST_ADMIN = "LEAVE_SHARING_FORBIDDEN_LAST_ADMIN"),
            (e.LEAVE_SHARING_FORBIDDEN_GROUP_ITEM = "LEAVE_SHARING_FORBIDDEN_GROUP_ITEM");
        })(t.DeleteSecretErrorCode || (t.DeleteSecretErrorCode = {}));
    },
    342366: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(70954), t), r(s(101376), t);
    },
    70954: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.secureFilesCommandsSlots = t.secureFilesLiveQueriesSlots = t.secureFilesQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.secureFilesQueriesSlots = {
        getSecureFilesQuota: (0, o.slot)(),
        getSecureFilesInfoList: (0, o.slot)(),
        getFileDownloadProgress: (0, o.slot)(),
        getFileUploadProgress: (0, o.slot)()
      }),
        (t.secureFilesLiveQueriesSlots = {
          liveSecureFilesQuota: (0, r.liveSlot)(),
          liveFileDownloadProgress: (0, r.liveSlot)(),
          liveFileUploadProgress: (0, r.liveSlot)()
        }),
        (t.secureFilesCommandsSlots = {
          downloadSecureFile: (0, o.slot)(),
          chunkTransferDone: (0, o.slot)(),
          deleteSecureFile: (0, o.slot)(),
          addSecureFile: (0, o.slot)(),
          validateSecureFile: (0, o.slot)(),
          commitSecureFile: (0, o.slot)(),
          initSecureFilesStorageInfo: (0, o.slot)(),
          clearSecureFileState: (0, o.slot)()
        });
    },
    101376: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FileUploadStatus = t.FileDownloadStatus = t.SecureFileResultErrorCode = void 0),
        (function (e) {
          (e.MAX_CONTENT_LENGTH_EXCEEDED = "MAX_CONTENT_LENGTH_EXCEEDED"),
            (e.QUOTA_EXCEEDED = "QUOTA_EXCEEDED"),
            (e.INVALID_FILE_TYPE = "INVALID_FILE_TYPE"),
            (e.INTERNAL_ERROR = "INTERNAL_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.FILE_NOT_FOUND = "FILE_NOT_FOUND");
        })(t.SecureFileResultErrorCode || (t.SecureFileResultErrorCode = {})),
        (function (e) {
          (e.Initial = "Initial"),
            (e.Downloading = "Downloading"),
            (e.Deciphering = "Deciphering"),
            (e.Error = "Error"),
            (e.ChunkReady = "ChunkReady"),
            (e.ChunkDownloaded = "ChunkDownloaded"),
            (e.TransferComplete = "TransferComplete");
        })(t.FileDownloadStatus || (t.FileDownloadStatus = {})),
        (function (e) {
          (e.None = "None"),
            (e.Initial = "Initial"),
            (e.Uploading = "Uploading"),
            (e.Ciphering = "Ciphering"),
            (e.Done = "Done"),
            (e.Error = "Error");
        })(t.FileUploadStatus || (t.FileUploadStatus = {}));
    },
    727958: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(132376), t), r(s(797261), t);
    },
    132376: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.secureNoteCategoryCommandsSlots = void 0);
      const o = s(71796);
      t.secureNoteCategoryCommandsSlots = { setupDefaultNoteCategories: (0, o.slot)() };
    },
    797261: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    591480: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(647110), t), r(s(805721), t);
    },
    647110: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.noteCommandsSlots = t.noteLiveQueriesSlots = t.noteQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.noteQueriesSlots = {
        getNote: (0, o.slot)(),
        getNoteCategories: (0, o.slot)(),
        getNotes: (0, o.slot)(),
        getNotesCount: (0, o.slot)(),
        getNotesPage: (0, o.slot)(),
        getNotesPaginationToken: (0, o.slot)()
      }),
        (t.noteLiveQueriesSlots = {
          liveNote: (0, r.liveSlot)(),
          liveNotes: (0, r.liveSlot)(),
          liveNotesBatch: (0, r.liveSlot)(),
          liveNotesCount: (0, r.liveSlot)()
        }),
        (t.noteCommandsSlots = { addSecureNote: (0, o.slot)(), updateSecureNote: (0, o.slot)(), deleteSecureNote: (0, o.slot)() });
    },
    805721: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DeleteSecureNoteErrorCode = t.SecureNoteSaveResultErrorCode = void 0),
        (function (e) {
          e.NOT_FOUND = "NOT_FOUND";
        })(t.SecureNoteSaveResultErrorCode || (t.SecureNoteSaveResultErrorCode = {})),
        (function (e) {
          (e.NOT_FOUND = "NOT_FOUND"),
            (e.INTERNAL_ERROR = "INTERNAL_ERROR"),
            (e.LEAVE_SHARING_FAILED = "LEAVE_SHARING_FAILED"),
            (e.LEAVE_SHARING_FORBIDDEN_LAST_ADMIN = "LEAVE_SHARING_FORBIDDEN_LAST_ADMIN"),
            (e.LEAVE_SHARING_FORBIDDEN_GROUP_ITEM = "LEAVE_SHARING_FORBIDDEN_GROUP_ITEM");
        })(t.DeleteSecureNoteErrorCode || (t.DeleteSecureNoteErrorCode = {}));
    },
    244015: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(312451), t), r(s(876646), t);
    },
    312451: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.settingsCommandsSlots = t.settingsLiveQueriesSlots = t.settingsQueriesSlots = void 0);
      const o = s(71796),
        r = s(672345);
      (t.settingsQueriesSlots = {
        getAnonymousUserId: (0, o.slot)(),
        getIsUrlBanished: (0, o.slot)(),
        arePasswordsProtected: (0, o.slot)()
      }),
        (t.settingsLiveQueriesSlots = { liveArePasswordsProtected: (0, r.liveSlot)() }),
        (t.settingsCommandsSlots = {
          toggleDashlane: (0, o.slot)(),
          updateProtectPasswordsSetting: (0, o.slot)(),
          updateAutofillSettings: (0, o.slot)()
        });
    },
    876646: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    757882: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.dataManagementCommandsSlots = t.dataManagementLiveQueriesSlots = t.dataManagementQueriesSlots = void 0);
      const o = s(71796),
        r = s(123446),
        n = s(859870),
        i = s(523328),
        a = s(340466),
        c = s(510362),
        l = s(520703),
        d = s(461470),
        u = s(107716),
        p = s(862061),
        _ = s(135643),
        S = s(748934),
        E = s(63571),
        m = s(342366),
        v = s(727958),
        O = s(591480),
        f = s(244015),
        A = s(532487),
        g = s(434237),
        h = s(913995);
      (t.dataManagementQueriesSlots = (0, o.combineEvents)(
        r.bankAccountQueriesSlots,
        n.breachesQueriesSlots,
        a.credentialsQueriesSlots,
        c.exportQueriesSlots,
        l.generatedPasswordsQueriesSlots,
        d.idsQueriesSlots,
        u.importQueriesSlots,
        O.noteQueriesSlots,
        p.passkeyQueriesSlots,
        _.passwordHistoryQueriesSlots,
        S.paymentCardQueriesSlots,
        E.personalInfoQueriesSlots,
        h.secretQueriesSlots,
        m.secureFilesQueriesSlots,
        f.settingsQueriesSlots,
        A.spacesQueriesSlots,
        g.vaultQueriesSlots
      )),
        (t.dataManagementLiveQueriesSlots = (0, o.combineEvents)(
          r.bankAccountLiveQueriesSlots,
          n.breachesLiveQueriesSlots,
          a.credentialsLiveQueriesSlots,
          l.generatedPasswordsLiveQueriesSlots,
          d.idsLiveQueriesSlots,
          u.importLiveQueriesSlots,
          O.noteLiveQueriesSlots,
          p.passkeyLiveQueriesSlots,
          _.passwordHistoryLiveQueriesSlots,
          S.paymentCardLiveQueriesSlots,
          E.personalInfoLiveQueriesSlots,
          h.secretLiveQueriesSlots,
          m.secureFilesLiveQueriesSlots,
          f.settingsLiveQueriesSlots
        )),
        (t.dataManagementCommandsSlots = (0, o.combineEvents)(
          r.bankAccountCommandsSlots,
          n.breachesCommandsSlots,
          i.collectionsCommandsSlots,
          a.credentialsCommandsSlots,
          c.exportCommandsSlots,
          l.generatedPasswordsCommandsSlots,
          d.idsCommandsSlots,
          u.importCommandsSlots,
          O.noteCommandsSlots,
          p.passkeyCommandsSlots,
          S.paymentCardCommandsSlots,
          h.secretCommandsSlots,
          m.secureFilesCommandsSlots,
          v.secureNoteCategoryCommandsSlots,
          f.settingsCommandsSlots,
          g.vaultCommandsSlots
        ));
    },
    532487: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(703316), t), r(s(81774), t);
    },
    703316: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.spacesQueriesSlots = void 0);
      const o = s(71796);
      t.spacesQueriesSlots = { getSpace: (0, o.slot)(), getSpaces: (0, o.slot)() };
    },
    81774: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    288295: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    434237: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(352810), t), r(s(976417), t);
    },
    352810: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VaultItemDisableProtectionMode = void 0),
        (function (e) {
          (e[(e.CannotDisable = 0)] = "CannotDisable"),
            (e[(e.DisableSpecificVaultItem = 1)] = "DisableSpecificVaultItem"),
            (e[(e.DisableGeneralSetting = 2)] = "DisableGeneralSetting");
        })(t.VaultItemDisableProtectionMode || (t.VaultItemDisableProtectionMode = {}));
    },
    976417: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vaultCommandsSlots = t.vaultQueriesSlots = void 0);
      const o = s(71796);
      (t.vaultQueriesSlots = { getAutofillProtectionContext: (0, o.slot)() }),
        (t.vaultCommandsSlots = { disableVaultItemProtection: (0, o.slot)() });
    },
    632626: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(s(672345), t),
        r(s(628413), t),
        r(s(317317), t),
        r(s(698521), t),
        r(s(611733), t),
        r(s(480112), t),
        r(s(255334), t),
        r(s(391609), t),
        r(s(311889), t),
        r(s(699103), t),
        r(s(29004), t),
        r(s(90041), t),
        r(s(765722), t),
        r(s(925098), t),
        r(s(594372), t),
        r(s(315874), t),
        r(s(250459), t),
        r(s(114811), t),
        r(s(630897), t),
        r(s(488219), t),
        r(s(143245), t),
        r(s(65005), t),
        r(s(180898), t),
        r(s(329450), t),
        r(s(796035), t),
        r(s(506666), t),
        r(s(224875), t),
        r(s(387940), t),
        r(s(815925), t),
        r(s(968183), t),
        r(s(506768), t),
        r(s(458290), t),
        r(s(878779), t),
        r(s(539191), t),
        r(s(137174), t),
        r(s(160687), t),
        r(s(136632), t),
        r(s(577277), t),
        r(s(649106), t),
        r(s(968440), t),
        r(s(34852), t),
        r(s(131525), t),
        r(s(628249), t),
        r(s(533773), t),
        r(s(84470), t),
        r(s(258575), t),
        r(s(9987), t),
        r(s(857369), t),
        r(s(901659), t),
        r(s(348905), t),
        r(s(666478), t),
        r(s(212891), t),
        r(s(98655), t),
        r(s(744225), t),
        r(s(919635), t),
        r(s(622162), t),
        r(s(931955), t),
        r(s(83496), t),
        r(s(613006), t);
    },
    505933: (e, t, s) => {
      s.d(t, { KV: () => a, co: () => i, td: () => n });
      var o = s(71796),
        r = s(455432);
      const n = { participateToUserABTest: (0, o.slot)() },
        i = { getUserABTestVariant: (0, o.slot)() },
        a = { liveUserABTestVariant: (0, r.H)() };
    },
    116537: (e, t, s) => {
      s.d(t, { PG: () => i, PO: () => n, cN: () => a });
      var o = s(71796),
        r = s(455432);
      const n = { editContactInfo: (0, o.slot)() },
        i = { getContactInfo: (0, o.slot)() },
        a = { liveContactInfo: (0, r.H)() };
    },
    686756: (e, t, s) => {
      var o;
      s.d(t, { D: () => o }),
        (function (e) {
          (e[(e.EMPTY_EMAIL = 0)] = "EMPTY_EMAIL"),
            (e[(e.INVALID_EMAIL = 1)] = "INVALID_EMAIL"),
            (e[(e.UNKNOWN_ERROR = 2)] = "UNKNOWN_ERROR");
        })(o || (o = {}));
    },
    957317: (e, t, s) => {
      s.d(t, { E: () => n, b: () => i });
      var o = s(71796),
        r = s(455432);
      const n = { getSubscriptionCode: (0, o.slot)() },
        i = { liveSubscriptionCode: (0, r.H)() };
    },
    258163: (e, t, s) => {
      var o;
      s.d(t, { r: () => o }),
        (function (e) {
          (e[(e.USER_EXISTS = 0)] = "USER_EXISTS"),
            (e[(e.USER_DOESNT_EXIST = 1)] = "USER_DOESNT_EXIST"),
            (e[(e.USER_DOESNT_EXIST_UNLIKELY_MX = 2)] = "USER_DOESNT_EXIST_UNLIKELY_MX"),
            (e[(e.USER_DOESNT_EXIST_INVALID_MX = 3)] = "USER_DOESNT_EXIST_INVALID_MX"),
            (e[(e.USER_DOESNT_EXIST_SSO_NON_PROVISIONED = 4)] = "USER_DOESNT_EXIST_SSO_NON_PROVISIONED"),
            (e[(e.USER_SSO_PROVISIONED = 5)] = "USER_SSO_PROVISIONED"),
            (e[(e.USER_NITRO_SSO_PROVISIONED = 6)] = "USER_NITRO_SSO_PROVISIONED"),
            (e[(e.USER_NOT_PROPOSED = 7)] = "USER_NOT_PROPOSED");
        })(o || (o = {}));
    },
    140030: (e, t, s) => {
      var o, r, n, i, a;
      s.d(t, { KB: () => a, Qw: () => i, Sc: () => n }),
        (function (e) {
          e[(e.UNKNOWN_ERROR = 0)] = "UNKNOWN_ERROR";
        })(o || (o = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NO_KEYHANDLE_FOUND = "NO_KEYHANDLE_FOUND"),
            (e.WRONG_AUTHENTICATION_CODE = "WRONG_AUTHENTICATION_CODE");
        })(r || (r = {})),
        (function (e) {
          (e.AUTHENTICATION_TYPE = "AUTHENTICATION_TYPE"),
            (e.BACKUP_PHONE = "BACKUP_PHONE"),
            (e.QR_CODE = "QR_CODE"),
            (e.AUTHENTICATION_CODE = "AUTHENTICATION_CODE"),
            (e.LOADING = "LOADING"),
            (e.FINALIZING_CHANGES = "FINALIZING_CHANGES"),
            (e.BACKUP_CODES = "BACKUP_CODES"),
            (e.GENERIC_ERROR = "GENERIC_ERROR"),
            (e.LOGOUT_REQUIRED = "LOGOUT_REQUIRED"),
            (e.SUCCESS = "SUCCESS");
        })(n || (n = {})),
        (function (e) {
          (e.CONFIRMATION = "CONFIRMATION"),
            (e.AUTHENTICATION_CODE = "AUTHENTICATION_CODE"),
            (e.BACKUP_CODE = "BACKUP_CODE"),
            (e.FINALIZING_CHANGES = "FINALIZING_CHANGES"),
            (e.SUCCESS = "SUCCESS"),
            (e.LOGOUT_REQUIRED = "LOGOUT_REQUIRED"),
            (e.GENERIC_ERROR = "GENERIC_ERROR");
        })(i || (i = {})),
        (function (e) {
          (e.INTERNAL_ERROR = "internal_error"),
            (e.CANNOT_SEED_FOR_USER_WITH_TOTP_ENABLED = "cannot_seed_for_user_with_TOTP_enabled"),
            (e.OTP_FAILED = "otp_failed"),
            (e.TOTP_TYPE_IS_NOT_SET_TO_EMAIL_TOKEN = "totp_type_is_not_set_to_email_token"),
            (e.PHONE_VALIDATION_FAILED = "phone_validation_failed");
        })(a || (a = {}));
    },
    371922: (e, t, s) => {
      s.d(t, { vz: () => o });
      const o = Object.freeze({ CREATE: "webauthn.create", GET: "webauthn.get" });
      var r, n, i, a, c, l, d, u, p, _, S;
      !(function (e) {
        e.UNKNOWN_ERROR = "UNKNOWN_ERROR";
      })(r || (r = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.USER_HAS_OTP = "USER_HAS_OTP"),
            (e.WEBAUTHN_SERVICE_INIT_FAILED = "WEBAUTHN_SERVICE_INIT_FAILED");
        })(n || (n = {})),
        (function (e) {
          e.UNKNOWN_ERROR = "UNKNOWN_ERROR";
        })(i || (i = {})),
        (function (e) {
          (e.USER_HAS_OTP = "USER_HAS_OTP"), (e.UNKNOWN_ERROR = "UNKNOWN_ERROR");
        })(a || (a = {})),
        (function (e) {
          e.UNKNOWN_ERROR = "UNKNOWN_ERROR";
        })(c || (c = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"), (e.MISSING_SESSION_KEYS_IN_STORE = "MISSING_SESSION_KEYS_IN_STORE");
        })(l || (l = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.UNAVAILABLE_AUTHENTICATORS = "UNAVAILABLE_AUTHENTICATORS"),
            (e.CANNOT_TRIGGER_WEBAUTHN_AUTHENTICATION = "CANNOT_TRIGGER_WEBAUTHN_AUTHENTICATION");
        })(d || (d = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"), (e.MP_MISSING_IN_SESSION_ERROR = "MP_MISSING_IN_SESSION_ERROR");
        })(u || (u = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.WEBAUTHN_SERVICE_DEACTIVATE_FAILED = "WEBAUTHN_SERVICE_DEACTIVATE_FAILED"),
            (e.MISSING_LOGIN = "MISSING_LOGIN");
        })(p || (p = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"), (e.CANNOT_REMOVE_WEBAUTHN_AUTHENTICATOR = "CANNOT_REMOVE_WEBAUTHN_AUTHENTICATOR");
        })(_ || (_ = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.LOGGED_OUT = "LOGGED_OUT"),
            (e.CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS = "CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS"),
            (e.CANNOT_FETCH_WEBAUTHN_CHALLENGE = "CANNOT_FETCH_WEBAUTHN_CHALLENGE");
        })(S || (S = {}));
    },
    253927: (e, t, s) => {
      s.d(t, { zR: () => u, QR: () => _, ke: () => p });
      var o = s(71796),
        r = s(455432);
      const n = {
          refreshU2FDevicesList: (0, o.slot)(),
          removeU2FAuthenticator: (0, o.slot)(),
          refreshTwoFactorAuthenticationInfo: (0, o.slot)(),
          startTwoFactorAuthenticationEnableFlow: (0, o.slot)(),
          stopTwoFactorAuthenticationEnableFlow: (0, o.slot)(),
          continueTwoFactorAuthenticationEnableFlow: (0, o.slot)(),
          backTwoFactorAuthenticationEnableFlow: (0, o.slot)(),
          startTwoFactorAuthenticationDisableFlow: (0, o.slot)(),
          stopTwoFactorAuthenticationDisableFlow: (0, o.slot)(),
          continueTwoFactorAuthenticationDisableFlow: (0, o.slot)(),
          backTwoFactorAuthenticationDisableFlow: (0, o.slot)()
        },
        i = {
          getU2FDevicesList: (0, o.slot)(),
          getTwoFactorAuthenticationEnableStage: (0, o.slot)(),
          getTwoFactorAuthenticationDisableStage: (0, o.slot)()
        },
        a = {
          liveU2FDevicesList: (0, r.H)(),
          liveTwoFactorAuthenticationEnableStage: (0, r.H)(),
          liveTwoFactorAuthenticationDisableStage: (0, r.H)()
        },
        c = {
          enableWebAuthnAuthentication: (0, o.slot)(),
          initEnableWebAuthnAuthentication: (0, o.slot)(),
          refreshAvailableWebAuthnAuthenticators: (0, o.slot)(),
          refreshWebAuthnAuthenticators: (0, o.slot)(),
          initRegisterWebAuthnAuthenticator: (0, o.slot)(),
          registerWebAuthnAuthenticator: (0, o.slot)(),
          initOpenSessionWithWebAuthnAuthenticator: (0, o.slot)(),
          openSessionWithWebAuthnAuthenticator: (0, o.slot)(),
          disableWebAuthnAuthentication: (0, o.slot)(),
          removeWebAuthnAuthenticator: (0, o.slot)(),
          initUserVerificationWithWebAuthn: (0, o.slot)()
        },
        l = { getWebAuthnAuthenticators: (0, o.slot)(), getWebAuthnAuthenticationOptedIn: (0, o.slot)() },
        d = { liveWebAuthnAuthenticators: (0, r.H)(), liveWebAuthnAuthenticationOptedIn: (0, r.H)() },
        u = (0, o.combineEvents)(
          {
            registerDevice: (0, o.slot)(),
            requestExtraDeviceToken: (0, o.slot)(),
            requestEmailToken: (0, o.slot)(),
            requestPaymentUpdateAuthenticationToken: (0, o.slot)(),
            setReactivationStatus: (0, o.slot)()
          },
          c,
          n
        ),
        p = (0, o.combineEvents)(
          {
            getHasOtp2Type: (0, o.slot)(),
            getUserOtpType: (0, o.slot)(),
            getReactivationStatus: (0, o.slot)(),
            getAvailableUserVerificationMethods: (0, o.slot)()
          },
          l,
          i
        ),
        _ = (0, o.combineEvents)({ liveReactivationStatus: (0, r.H)() }, d, a);
    },
    581173: (e, t, s) => {
      var o, r, n, i;
      s.d(t, { _V: () => i }),
        (function (e) {
          (e.DISABLED = "DISABLED"), (e.CLASSIC = "CLASSIC"), (e.WEBAUTHN = "WEBAUTHN");
        })(o || (o = {})),
        (function (e) {
          (e[(e.PERSIST_DATA_YES = 0)] = "PERSIST_DATA_YES"), (e[(e.PERSIST_DATA_NO = 1)] = "PERSIST_DATA_NO");
        })(r || (r = {})),
        Object.freeze({ MasterPassword: "masterPassword", Webauthn: "webauthn" }),
        (function (e) {
          (e[(e.NO_OTP = 0)] = "NO_OTP"), (e[(e.OTP_NEW_DEVICE = 1)] = "OTP_NEW_DEVICE"), (e[(e.OTP_LOGIN = 2)] = "OTP_LOGIN");
        })(n || (n = {})),
        (function (e) {
          (e[(e.INVALID_LOGIN = 0)] = "INVALID_LOGIN"),
            (e[(e.EMPTY_LOGIN = 1)] = "EMPTY_LOGIN"),
            (e[(e.EMPTY_MASTER_PASSWORD = 2)] = "EMPTY_MASTER_PASSWORD"),
            (e[(e.EMPTY_ENCRYPTED_KEY = 3)] = "EMPTY_ENCRYPTED_KEY"),
            (e[(e.INVALID_ENCRYPTED_KEY = 4)] = "INVALID_ENCRYPTED_KEY"),
            (e[(e.EMPTY_TOKEN = 5)] = "EMPTY_TOKEN"),
            (e[(e.EMPTY_OTP = 6)] = "EMPTY_OTP"),
            (e[(e.SEND_TOKEN_FAILED = 7)] = "SEND_TOKEN_FAILED"),
            (e[(e.UKI_REGISTRATION_FAILED = 8)] = "UKI_REGISTRATION_FAILED"),
            (e[(e.REGISTER_DEVICE_FAILED = 9)] = "REGISTER_DEVICE_FAILED"),
            (e[(e.BUSINESS_ERROR = 10)] = "BUSINESS_ERROR"),
            (e[(e.USER_DOESNT_EXIST = 11)] = "USER_DOESNT_EXIST"),
            (e[(e.USER_DOESNT_EXIST_UNLIKELY_MX = 12)] = "USER_DOESNT_EXIST_UNLIKELY_MX"),
            (e[(e.USER_DOESNT_EXIST_INVALID_MX = 13)] = "USER_DOESNT_EXIST_INVALID_MX"),
            (e[(e.USER_UNAUTHORIZED = 14)] = "USER_UNAUTHORIZED"),
            (e[(e.WRONG_PASSWORD = 15)] = "WRONG_PASSWORD"),
            (e[(e.DATA_TAMPERED_ERROR = 16)] = "DATA_TAMPERED_ERROR"),
            (e[(e.LOGGEDIN = 17)] = "LOGGEDIN"),
            (e[(e.ASK_TOKEN = 18)] = "ASK_TOKEN"),
            (e[(e.ASK_OTP = 19)] = "ASK_OTP"),
            (e[(e.ASK_MASTER_PASSWORD = 20)] = "ASK_MASTER_PASSWORD"),
            (e[(e.USE_LOCAL_UKI = 21)] = "USE_LOCAL_UKI"),
            (e[(e.ASK_DASHLANE_AUTHENTICATOR = 22)] = "ASK_DASHLANE_AUTHENTICATOR"),
            (e[(e.OTP_NOT_VALID = 23)] = "OTP_NOT_VALID"),
            (e[(e.OTP_TOO_MANY_ATTEMPTS = 24)] = "OTP_TOO_MANY_ATTEMPTS"),
            (e[(e.OTP_ALREADY_USED = 25)] = "OTP_ALREADY_USED"),
            (e[(e.BACKUP_CODE_NOT_VALID = 26)] = "BACKUP_CODE_NOT_VALID"),
            (e[(e.TOKEN_NOT_VALID = 27)] = "TOKEN_NOT_VALID"),
            (e[(e.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED = 28)] = "DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED"),
            (e[(e.SERVER_KEY_MISSING = 29)] = "SERVER_KEY_MISSING"),
            (e[(e.TOKEN_LOCKED = 30)] = "TOKEN_LOCKED"),
            (e[(e.TOKEN_TOO_MANY_ATTEMPTS = 31)] = "TOKEN_TOO_MANY_ATTEMPTS"),
            (e[(e.TOKEN_ACCOUNT_LOCKED = 32)] = "TOKEN_ACCOUNT_LOCKED"),
            (e[(e.TOKEN_EXPIRED = 33)] = "TOKEN_EXPIRED"),
            (e[(e.NO_ACTIVE_AUTHENTICATOR = 34)] = "NO_ACTIVE_AUTHENTICATOR"),
            (e[(e.FAILED_TO_CONTACT_AUTHENTICATOR_DEVICE = 35)] = "FAILED_TO_CONTACT_AUTHENTICATOR_DEVICE"),
            (e[(e.DASHLANE_AUTHENTICATOR_ASKED_FOR_LOCAL_SESSION = 36)] = "DASHLANE_AUTHENTICATOR_ASKED_FOR_LOCAL_SESSION"),
            (e[(e.DASHLANE_AUTHENTICATOR_LOGIN_CANCELLED = 37)] = "DASHLANE_AUTHENTICATOR_LOGIN_CANCELLED"),
            (e[(e.TOKEN_PROVIDED_FOR_LOCAL_SESSION = 38)] = "TOKEN_PROVIDED_FOR_LOCAL_SESSION"),
            (e[(e.DEVICE_ALREADY_REGISTERED = 39)] = "DEVICE_ALREADY_REGISTERED"),
            (e[(e.OTP_PROVIDED_FOR_LOCAL_NON_OTP_SESSION = 40)] = "OTP_PROVIDED_FOR_LOCAL_NON_OTP_SESSION"),
            (e[(e.DIFFERENT_LOGIN_PROVIDED_WITH_TOKEN_OR_OTP = 41)] = "DIFFERENT_LOGIN_PROVIDED_WITH_TOKEN_OR_OTP"),
            (e[(e.UNKNOWN_SYNC_ERROR = 42)] = "UNKNOWN_SYNC_ERROR"),
            (e[(e.INVALID_UKI = 43)] = "INVALID_UKI"),
            (e[(e.UNKNOWN_UKI = 44)] = "UNKNOWN_UKI"),
            (e[(e.UNKNOWN_ERROR = 45)] = "UNKNOWN_ERROR"),
            (e[(e.UNEXPECTED_OTP_TYPE = 46)] = "UNEXPECTED_OTP_TYPE"),
            (e[(e.UNAUTHORIZED = 47)] = "UNAUTHORIZED"),
            (e[(e.UNAUTHORIZED_NOT_VALID_CONTENT = 48)] = "UNAUTHORIZED_NOT_VALID_CONTENT"),
            (e[(e.NETWORK_ERROR = 49)] = "NETWORK_ERROR"),
            (e[(e.THROTTLED = 50)] = "THROTTLED"),
            (e[(e.SESSION_ALREADY_OPENED = 51)] = "SESSION_ALREADY_OPENED"),
            (e[(e.INVALID_SESSION = 52)] = "INVALID_SESSION"),
            (e[(e.DEVICE_NOT_REGISTERED = 53)] = "DEVICE_NOT_REGISTERED"),
            (e[(e.MISSING_APP_KEYS = 54)] = "MISSING_APP_KEYS"),
            (e[(e.PROVIDE_EXTRA_DEVICE_TOKEN = 55)] = "PROVIDE_EXTRA_DEVICE_TOKEN"),
            (e[(e.PROVIDE_MASTER_PASSWORD_FOR_EXTRA_DEVICE = 56)] = "PROVIDE_MASTER_PASSWORD_FOR_EXTRA_DEVICE"),
            (e[(e.PROVIDE_MASTER_PASSWORD_AND_SERVER_KEY_FOR_EXTRA_DEVICE = 57)] =
              "PROVIDE_MASTER_PASSWORD_AND_SERVER_KEY_FOR_EXTRA_DEVICE"),
            (e[(e.ASK_OTP_FOR_NEW_DEVICE = 58)] = "ASK_OTP_FOR_NEW_DEVICE"),
            (e[(e.TEAM_GENERIC_ERROR = 59)] = "TEAM_GENERIC_ERROR"),
            (e[(e.SSO_LOGIN_BYPASS = 60)] = "SSO_LOGIN_BYPASS"),
            (e[(e.SSO_VERIFICATION_FAILED = 61)] = "SSO_VERIFICATION_FAILED"),
            (e[(e.SSO_BLOCKED = 62)] = "SSO_BLOCKED"),
            (e[(e.CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION = 63)] = "CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION"),
            (e[(e.USER_DOESNT_EXIST_SSO = 64)] = "USER_DOESNT_EXIST_SSO");
        })(i || (i = {}));
    },
    849594: (e, t, s) => {
      s.d(t, { X: () => a });
      var o = s(71796),
        r = s(166302),
        n = s(938344),
        i = s(933820);
      const a = (0, o.combineEvents)(r.z, n.r, i.z);
    },
    166302: (e, t, s) => {
      s.d(t, { z: () => U });
      var o = s(71796),
        r = s(505933),
        n = s(116537),
        i = s(253927),
        a = s(438429),
        c = s(661045);
      const l = { getDarkWebInsightsReportResults: (0, o.slot)(), getDarkWebInsightsSummary: (0, o.slot)() };
      var d = s(734485);
      const u = {
        getFamilyDetails: (0, o.slot)(),
        joinFamily: (0, o.slot)(),
        leaveFamily: (0, o.slot)(),
        removeFamilyMember: (0, o.slot)(),
        resetFamilyJoinToken: (0, o.slot)()
      };
      var p = s(64128);
      const _ = { setGlobalExtensionSettings: (0, o.slot)(), getGlobalExtensionSettings: (0, o.slot)() },
        S = { evaluatePassword: (0, o.slot)() },
        E = { logEvent: (0, o.slot)(), logPageView: (0, o.slot)(), flushQueue: (0, o.slot)() },
        m = { logException: (0, o.slot)() },
        v = {
          abortDeviceLimitFlow: (0, o.slot)(),
          loginViaSSO: (0, o.slot)(),
          unlinkPreviousDevice: (0, o.slot)(),
          unlinkMultipleDevices: (0, o.slot)()
        };
      var O = s(994883),
        f = s(422955),
        A = s(208755),
        g = s(252215),
        h = s(138578),
        T = s(73298),
        y = s(852860),
        C = s(977507),
        I = s(527794),
        N = s(973762),
        R = s(677253),
        P = s(889210),
        b = s(971316),
        D = s(992753);
      const U = (0, o.combineEvents)(
        r.td,
        i.zR,
        a.v,
        n.PO,
        c.rU,
        l,
        d.fv,
        E,
        m,
        u,
        _,
        S,
        v,
        O._m,
        f.vq,
        A.U$,
        g.of,
        h.r,
        T._,
        y.gQ,
        C.$k,
        p.H9,
        I.uG,
        N.b,
        R.hO,
        P.Kr,
        b.lp,
        D.n
      );
    },
    933820: (e, t, s) => {
      s.d(t, { z: () => I });
      var o = s(71796),
        r = s(505933),
        n = s(116537),
        i = s(957317),
        a = s(455432);
      const c = { liveAccountCreated: (0, a.H)() },
        l = { livePhishingURLList: (0, a.H)() };
      var d = s(253927),
        u = s(734485),
        p = s(438429),
        _ = s(661045),
        S = s(64128),
        E = s(264001),
        m = s(994883),
        v = s(422955),
        O = s(208755),
        f = s(252215),
        A = s(852860),
        g = s(977507),
        h = s(527794),
        T = s(677253),
        y = s(889210),
        C = s(971316);
      const I = (0, o.combineEvents)(
        r.KV,
        c,
        l,
        d.QR,
        p.F,
        n.cN,
        _.vF,
        u.QX,
        E.b,
        m.Rj,
        v._1,
        O.iX,
        f.K1,
        A.qN,
        g.EX,
        S.YW,
        h.Ll,
        i.b,
        T.dN,
        y.kh,
        C.fD
      );
    },
    938344: (e, t, s) => {
      s.d(t, { r: () => P });
      var o = s(71796),
        r = s(505933),
        n = s(116537),
        i = s(957317),
        a = s(253927);
      const c = {
        getSingleAddressForAutofill: (0, o.slot)(),
        getMultipleAddressesForAutofill: (0, o.slot)(),
        getSingleBankAccountForAutofill: (0, o.slot)(),
        getMultipleBankAccountsForAutofill: (0, o.slot)(),
        getSingleCompanyForAutofill: (0, o.slot)(),
        getMultipleCompaniesForAutofill: (0, o.slot)(),
        getSingleCredentialForAutofill: (0, o.slot)(),
        getMultipleCredentialsForAutofill: (0, o.slot)(),
        getSingleDriverLicenseForAutofill: (0, o.slot)(),
        getMultipleDriverLicensesForAutofill: (0, o.slot)(),
        getSingleEmailForAutofill: (0, o.slot)(),
        getMultipleEmailsForAutofill: (0, o.slot)(),
        getSingleFiscalIdForAutofill: (0, o.slot)(),
        getMultipleFiscalIdsForAutofill: (0, o.slot)(),
        getSingleGeneratedPasswordForAutofill: (0, o.slot)(),
        getMultipleGeneratedPasswordsForAutofill: (0, o.slot)(),
        getSingleIdCardForAutofill: (0, o.slot)(),
        getMultipleIdCardsForAutofill: (0, o.slot)(),
        getSingleIdentityForAutofill: (0, o.slot)(),
        getMultipleIdentitiesForAutofill: (0, o.slot)(),
        getSingleNoteForAutofill: (0, o.slot)(),
        getMultipleNotesForAutofill: (0, o.slot)(),
        getSinglePasskeyForAutofill: (0, o.slot)(),
        getSinglePassportForAutofill: (0, o.slot)(),
        getMultiplePassportsForAutofill: (0, o.slot)(),
        getSinglePaymentCardForAutofill: (0, o.slot)(),
        getMultiplePaymentCardsForAutofill: (0, o.slot)(),
        getSinglePersonalWebsiteForAutofill: (0, o.slot)(),
        getMultiplePersonalWebsitesForAutofill: (0, o.slot)(),
        getSinglePhoneForAutofill: (0, o.slot)(),
        getMultiplePhonesForAutofill: (0, o.slot)(),
        getSingleSocialSecurityIdForAutofill: (0, o.slot)(),
        getMultipleSocialSecurityIdsForAutofill: (0, o.slot)(),
        getAutofillSettingOnUrlForAutofill: (0, o.slot)()
      };
      var l = s(734485),
        d = s(661045),
        u = s(992753);
      const p = { getHasFeature: (0, o.slot)(), getFeatures: (0, o.slot)() };
      var _ = s(64128),
        S = s(264001),
        E = s(994883),
        m = s(422955),
        v = s(208755),
        O = s(252215),
        f = s(138578),
        A = s(73298),
        g = s(852860),
        h = s(977507);
      const T = {
        getAllBanks: (0, o.slot)(),
        getAllCallingCodes: (0, o.slot)(),
        getBanks: (0, o.slot)(),
        getSecureDocumentsExtensionsList: (0, o.slot)()
      };
      var y = s(527794),
        C = s(973762),
        I = s(677253),
        N = s(889210),
        R = s(971316);
      const P = (0, o.combineEvents)(
        r.co,
        a.ke,
        c,
        n.PG,
        d.kQ,
        l.pz,
        u.C,
        p,
        S.c,
        E.Xz,
        m.xP,
        v.Ie,
        O.A2,
        f.H,
        A.P,
        g.UW,
        h.q9,
        _.JQ,
        y.i1,
        T,
        i.E,
        C.N,
        I.XJ,
        N.Vz,
        R.T4
      );
    },
    455432: (e, t, s) => {
      s.d(t, { H: () => n });
      var o = s(71796);
      const r = { noBuffer: !0 },
        n = () => (0, o.slot)(r);
    },
    438429: (e, t, s) => {
      s.d(t, { F: () => i, v: () => n });
      var o = s(71796),
        r = s(455432);
      const n = { changeMasterPassword: (0, o.slot)() },
        i = { liveChangeMasterPasswordStatus: (0, r.H)() };
    },
    784995: (e, t, s) => {
      var o, r, n;
      s.d(t, { FD: () => n, pT: () => o }),
        (function (e) {
          (e.USER_CHANGING_MP = "USER_CHANGING_MP"),
            (e.MP_TO_SSO = "MP_TO_SSO"),
            (e.SSO_TO_MP = "SSO_TO_MP"),
            (e.TO_EMAIL_TOKEN = "EMAIL_TOKEN"),
            (e.ADMIN_ASSISTED_RECOVERY = "ADMIN_ASSISTED_RECOVERY"),
            (e.ACCOUNT_RECOVERY_KEY = "ACCOUNT_RECOVERY_KEY");
        })(o || (o = {})),
        (function (e) {
          (e.FEATURE_BLOCKED = "feature_blocked"),
            (e.INNACTIVE_SESSION = "inactive_session"),
            (e.INVALID_TOKEN = "invalid_token"),
            (e.OTP_PROBLEM = "otp_problem"),
            (e.MP_ERROR = "mp_error"),
            (e.MP_STRENGTH_ERROR = "mp_strength_error"),
            (e.SUCCESS = "success"),
            (e.SYNC_PROGRESS = "sync_in_progress"),
            (e.UNKNOWN_ERROR = "unknown_error"),
            (e.WRONG_PASSWORD = "wrong_password"),
            (e.UNEXPECTED_STATE = "unexpected_state");
        })(r || (r = {})),
        (function (e) {
          (e.DOWNLOAD = "download"),
            (e.DECRYPTING = "decrypting"),
            (e.ENCRYPTING = "encrypting"),
            (e.UPLOADING = "uploading"),
            (e.DONE = "done"),
            (e.ERROR = "error");
        })(n || (n = {}));
    },
    661045: (e, t, s) => {
      s.d(t, { kQ: () => i, rU: () => n, vF: () => a });
      var o = s(71796),
        r = s(455432);
      const n = { changeUserCrypto: (0, o.slot)() },
        i = { getCanUserChangeCrypto: (0, o.slot)(), getUserDerivationMethod: (0, o.slot)() },
        a = { liveUserDerivationMethod: (0, r.H)() };
    },
    720256: (e, t, s) => {
      var o, r;
      s.d(t, { a: () => r }),
        (function (e) {
          e.ChangeUserCryptoFailed = "CHANGE_USER_CRYPTO_FAILED";
        })(o || (o = {})),
        (function (e) {
          (e.ARGON2D = "argon2d"), (e.PBKDF2 = "pbkdf2"), (e.KWC3 = "kwc3");
        })(r || (r = {}));
    },
    735760: (e, t, s) => {
      var o, r;
      s.d(t, { hb: () => r, j8: () => n }),
        (function (e) {
          (e.GetDarkWebInsightsFailed = "GET_DARK_WEB_INSIGHTS_FAILED"),
            (e.GetDarkWebInsightsSummaryFailed = "GET_DARK_WEB_INSIGHTS_SUMMARY_FAILED");
        })(o || (o = {})),
        (function (e) {
          (e.Password = "password"),
            (e.CreditCard = "creditcard"),
            (e.IPAddress = "ip"),
            (e.MailingAddress = "address"),
            (e.Phone = "phone"),
            (e.Email = "email"),
            (e.Social = "social"),
            (e.GeoLocation = "geolocation"),
            (e.UserName = "username"),
            (e.PersonalInfo = "personalinfo");
        })(r || (r = {}));
      const n = Object.freeze({ New: "new", Viewed: "viewed" });
    },
    44947: (e, t, s) => {
      var o;
      s.d(t, { J: () => o }),
        (function (e) {
          (e.PENDING = "PENDING"), (e.VIEWED = "VIEWED"), (e.ACKNOWLEDGED = "ACKNOWLEDGED");
        })(o || (o = {}));
    },
    914662: (e, t, s) => {
      s.d(t, { cH: () => o, dJ: () => n });
      var o,
        r = s(50415);
      !(function (e) {
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
          (e.AR = "AR"),
          (e.AS = "AS"),
          (e.AT = "AT"),
          (e.AU = "AU"),
          (e.AW = "AW"),
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
          (e.BW = "BW"),
          (e.BY = "BY"),
          (e.BZ = "BZ"),
          (e.CA = "CA"),
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
          (e.GT = "GT"),
          (e.GU = "GU"),
          (e.GW = "GW"),
          (e.GY = "GY"),
          (e.HK = "HK"),
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
          (e.ZW = "ZW"),
          (e.AQ = "AQ"),
          (e.AX = "AX"),
          (e.BV = "BV"),
          (e.CC = "CC"),
          (e.CX = "CX"),
          (e.EH = "EH"),
          (e.GS = "GS"),
          (e.HM = "HM"),
          (e.PN = "PN"),
          (e.SJ = "SJ"),
          (e.UM = "UM");
      })(o || (o = {}));
      const n = (0, r.Enum)(
          "KWAddress",
          "KWAuthCategory",
          "KWAuthentifiant",
          "KWBankStatement",
          "KWCollection",
          "KWCompany",
          "KWDataChangeHistory",
          "KWDriverLicence",
          "KWEmail",
          "KWFiscalStatement",
          "KWGeneratedPassword",
          "KWIDCard",
          "KWIdentity",
          "KWMerchand",
          "KWMiscData",
          "KWPasskey",
          "KWPassport",
          "KWPaymentMean_creditCard",
          "KWPaymentMean_paypal",
          "KWPersonalWebsite",
          "KWPhone",
          "KWPurchaseAccount",
          "KWPurchaseCategory",
          "KWPurchasePaidBasket",
          "KWPurchaseTrueArticle",
          "KWSecret",
          "KWSecureFileInfo",
          "KWSecureNote",
          "KWSecureNoteCategory",
          "KWSecurityBreach",
          "KWSettingsManagerApp",
          "KWSocialSecurityStatement",
          "KWWebSite"
        ),
        i = (0, r.Enum)(
          "ADDRESS",
          "AUTHENTIFIANT",
          "AUTH_CATEGORY",
          "BANKACCESS",
          "BANKACCOUNT",
          "BANKCATEGORY",
          "BANKINSTITUTION",
          "BANKSITE",
          "BANKSTATEMENT",
          "BANKTRANSACTION",
          "COLLECTION",
          "COMPANY",
          "DATA_CHANGE_HISTORY",
          "DATA_USAGE_HISTORY",
          "DEFAULT_AUTHENTIFIANT",
          "DEFAULT_CONFIDENTIAL",
          "DEFAULT_IDENTITY",
          "DEFAULT_MISC",
          "DEFAULT_PAYMENTMEANS",
          "DEFAULT_REWARDCARD",
          "DRIVERLICENCE",
          "EMAIL",
          "EMERGENCY_BUNDLE_FULL",
          "EMERGENCY_BUNDLE_LITE",
          "FULLBACKUP",
          "FISCALSTATEMENT",
          "GENERATED_PASSWORD",
          "IDCARD",
          "IDENTITY",
          "INVOICEACCESS",
          "INVOICEELEMENT",
          "INVOICEINSTITUTION",
          "MERCHANT",
          "MISCDATA",
          "PASSKEY",
          "PASSPORT",
          "PAYMENTMEANS_CREDITCARD",
          "PAYMENTMEAN_PAYPAL",
          "PERSONALWEBSITE",
          "PHONE",
          "POINTS",
          "PURCHASEABANDONNEDBASKET",
          "PURCHASEACCOUNT",
          "PURCHASEARTICLE",
          "PURCHASEBASKET",
          "PURCHASEDELIVERYARTICLE",
          "PURCHASEOPTIONARTICLE",
          "PURCHASEPAIDBASKET",
          "PURCHASE_CATEGORY",
          "REWARDCARD",
          "SECRET",
          "SECUREFILEINFO",
          "SECURENOTE",
          "SECURENOTE_CATEGORY",
          "SECURITYALERT",
          "SECURITYALERTS",
          "SECURITYBREACH",
          "SETTINGS",
          "SHARING_GROUP",
          "SOCIALSECURITYSTATEMENT",
          "WEBSITE"
        ),
        a = {
          KWAddress: i.ADDRESS,
          KWAuthCategory: i.AUTH_CATEGORY,
          KWAuthentifiant: i.AUTHENTIFIANT,
          KWCollection: i.COLLECTION,
          KWBankStatement: i.BANKSTATEMENT,
          KWCompany: i.COMPANY,
          KWDataChangeHistory: i.DATA_CHANGE_HISTORY,
          KWDriverLicence: i.DRIVERLICENCE,
          KWEmail: i.EMAIL,
          KWFiscalStatement: i.FISCALSTATEMENT,
          KWGeneratedPassword: i.GENERATED_PASSWORD,
          KWIDCard: i.IDCARD,
          KWIdentity: i.IDENTITY,
          KWMerchand: i.MERCHANT,
          KWMiscData: i.MISCDATA,
          KWPasskey: i.PASSKEY,
          KWPassport: i.PASSPORT,
          KWPaymentMean_creditCard: i.PAYMENTMEANS_CREDITCARD,
          KWPaymentMean_paypal: i.PAYMENTMEAN_PAYPAL,
          KWPersonalWebsite: i.PERSONALWEBSITE,
          KWPhone: i.PHONE,
          KWPurchaseAccount: i.PURCHASEACCOUNT,
          KWPurchaseCategory: i.PURCHASE_CATEGORY,
          KWPurchasePaidBasket: i.PURCHASEPAIDBASKET,
          KWPurchaseTrueArticle: i.PURCHASEARTICLE,
          KWSecret: i.SECRET,
          KWSecureFileInfo: i.SECUREFILEINFO,
          KWSecureNote: i.SECURENOTE,
          KWSecureNoteCategory: i.SECURENOTE_CATEGORY,
          KWSecurityBreach: i.SECURITYBREACH,
          KWSettingsManagerApp: i.SETTINGS,
          KWSocialSecurityStatement: i.SOCIALSECURITYSTATEMENT,
          KWWebSite: i.WEBSITE
        };
      Object.values(n).reduce((e, t) => ((e[a[t]] = t), e), {}), r.Enum.keys(i), r.Enum.keys(n);
    },
    157789: (e, t, s) => {
      function o(e) {
        return Boolean(e) && "KWAuthentifiant" === e.kwType;
      }
      s.d(t, { G: () => o });
    },
    115237: (e, t, s) => {
      function o(e) {
        return Boolean(e) && "KWSecureNote" === e.kwType;
      }
      s.d(t, { gi: () => o });
    },
    992753: (e, t, s) => {
      s.d(t, { C: () => r, n: () => n });
      var o = s(71796);
      const r = { getAnonymousComputerId: (0, o.slot)(), getPlatformInfo: (0, o.slot)() },
        n = { cleanRemotelyRemovedProfiles: (0, o.slot)() };
    },
    498558: (e, t, s) => {
      s.d(t, { D: () => o });
      const o = { deviceLimitCapabilityUpdated: (0, s(71796).slot)() };
    },
    317150: (e, t, s) => {
      var o, r, n, i;
      s.d(t, { H9: () => i, QJ: () => n }),
        (function (e) {
          (e.NEW_USER = "NEW_USER"), (e.EXISTING_FREE_USER = "EXISTING_FREE_USER"), (e.EXISTING_PREMIUM_USER = "EXISTING_PREMIUM_USER");
        })(o || (o = {})),
        (function (e) {
          (e[(e.DISCONTINUED = 0)] = "DISCONTINUED"), (e[(e.PREMIUM = 1)] = "PREMIUM"), (e[(e.PREMIUM_PLUS = 2)] = "PREMIUM_PLUS");
        })(r || (r = {})),
        (function (e) {
          (e.ADMIN = "admin"), (e.REGULAR = "regular"), (e.REMOVED = "removed");
        })(n || (n = {})),
        (function (e) {
          (e.IOS_APP_STORE = "ios"), (e.MAC_STORE = "mac"), (e.PLAY_STORE = "playstore");
        })(i || (i = {}));
    },
    64128: (e, t, s) => {
      s.d(t, { H9: () => n, JQ: () => i, YW: () => a });
      var o = s(71796),
        r = s(455432);
      const n = { decipherRemoteFile: (0, o.slot)() },
        i = { getFileContent: (0, o.slot)() },
        a = { liveFileMeta: (0, r.H)() };
    },
    264001: (e, t, s) => {
      s.d(t, { b: () => i, c: () => n });
      var o = s(71796),
        r = s(455432);
      const n = {
          getIsBrazeContentDisabled: (0, o.slot)(),
          getIsLoginFlowMigrationDisabled: (0, o.slot)(),
          getIsAutoSSOLoginDisabled: (0, o.slot)()
        },
        i = {
          liveIsBrazeContentDisabled: (0, r.H)(),
          liveIsLoginFlowMigrationDisabled: (0, r.H)(),
          liveIsAutoSSOLoginDisabled: (0, r.H)()
        };
    },
    492486: (e, t, s) => {
      s.d(t, { N: () => r });
      var o = s(71796);
      const r = {
        abTestingChanged: (0, o.slot)(),
        loginStatusChanged: (0, o.slot)({ noBuffer: !0 }),
        openSessionProgressChanged: (0, o.slot)({ noBuffer: !0 }),
        openSessionTokenSent: (0, o.slot)({ noBuffer: !0 }),
        openSessionDashlaneAuthenticator: (0, o.slot)({ noBuffer: !0 }),
        openSessionOTPSent: (0, o.slot)({ noBuffer: !0 }),
        openSessionOTPForNewDeviceRequired: (0, o.slot)({ noBuffer: !0 }),
        openSessionAskMasterPassword: (0, o.slot)({ noBuffer: !0 }),
        openSessionTokenWarning: (0, o.slot)({ noBuffer: !0 }),
        openSessionExtraDeviceTokenRequired: (0, o.slot)({ noBuffer: !0 }),
        openSessionSsoRedirectionToIdpRequired: (0, o.slot)({ noBuffer: !0 }),
        openSessionMasterPasswordLess: (0, o.slot)({ noBuffer: !0 }),
        openSessionFailed: (0, o.slot)({ noBuffer: !0 }),
        sessionSyncStatus: (0, o.slot)({ noBuffer: !0 }),
        localAccountsListUpdated: (0, o.slot)(),
        spaceDataUpdated: (0, o.slot)(),
        teamAdminDataUpdated: (0, o.slot)(),
        credentialLoginUrlRetrieved: (0, o.slot)(),
        deactivateDeviceResult: (0, o.slot)(),
        changeDeviceNameResult: (0, o.slot)(),
        accountInfoChanged: (0, o.slot)(),
        accountFeaturesChanged: (0, o.slot)(),
        updatePaymentCardTokenResult: (0, o.slot)(),
        webOnboardingModeUpdated: (0, o.slot)(),
        currentLocationUpdated: (0, o.slot)(),
        checkDirectorySyncKeyRequest: (0, o.slot)(),
        encryptSettingsResultUpdated: (0, o.slot)(),
        confirmCreateAccountResultUpdated: (0, o.slot)(),
        sendSharingResponseResult: (0, o.slot)(),
        serverSidePairingStatusChanged: (0, o.slot)(),
        getUki: (0, o.slot)(),
        getAccountInfo: (0, o.slot)(),
        getDevicesList: (0, o.slot)(),
        getLocalAccountsList: (0, o.slot)(),
        getTemporaryToken: (0, o.slot)(),
        deactivateDevice: (0, o.slot)(),
        changeDeviceName: (0, o.slot)(),
        getInvoices: (0, o.slot)(),
        getPersonalSettings: (0, o.slot)(),
        openSession: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithToken: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithDashlaneAuthenticator: (0, o.slot)({ noBuffer: !0 }),
        cancelDashlaneAuthenticatorRegistration: (0, o.slot)(),
        openSessionWithOTP: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithOTPForNewDevice: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithMasterPassword: (0, o.slot)({ noBuffer: !0 }),
        openExtraDeviceSession: (0, o.slot)({ noBuffer: !0 }),
        openSessionWithExtraDeviceToken: (0, o.slot)({ noBuffer: !0 }),
        openSessionResendToken: (0, o.slot)({ noBuffer: !0 }),
        sessionForceSync: (0, o.slot)(),
        closeSession: (0, o.slot)(),
        lockSession: (0, o.slot)({ noBuffer: !0 }),
        cancelPremiumSubscription: (0, o.slot)(),
        createUserGroup: (0, o.slot)(),
        deleteUserGroup: (0, o.slot)(),
        renameUserGroup: (0, o.slot)(),
        inviteUserGroupMembers: (0, o.slot)(),
        revokeUserGroupMembers: (0, o.slot)(),
        updateUserGroupMembers: (0, o.slot)(),
        teamUpdated: (0, o.slot)(),
        createAccountStep1: (0, o.slot)(),
        createAccountStep2: (0, o.slot)(),
        checkLogin: (0, o.slot)(),
        savePersonalDataItem: (0, o.slot)(),
        removePersonalDataItem: (0, o.slot)(),
        savePaymentCard: (0, o.slot)(),
        getMasterPasswordResetDemandList: (0, o.slot)(),
        acceptMasterPasswordResetDemand: (0, o.slot)(),
        checkIfMasterPasswordIsValid: (0, o.slot)(),
        declineMasterPasswordResetDemand: (0, o.slot)(),
        getMembers: (0, o.slot)(),
        addTeamAdmin: (0, o.slot)(),
        removeTeamAdmin: (0, o.slot)(),
        setTeamSettings: (0, o.slot)(),
        updateWebOnboardingMode: (0, o.slot)(),
        checkDirectorySyncKeyResponse: (0, o.slot)(),
        queryStaticDataCollections: (0, o.slot)(),
        sendSharingResponse: (0, o.slot)(),
        getDataModel: (0, o.slot)(),
        getSharingSync: (0, o.slot)(),
        revokeSharing: (0, o.slot)(),
        getSharingData: (0, o.slot)(),
        updateSharingPermission: (0, o.slot)(),
        setPendingElementsAsSeen: (0, o.slot)(),
        isUserLastAdminOnItem: (0, o.slot)(),
        doesUserReceiveItemViaGroup: (0, o.slot)(),
        resumeSession: (0, o.slot)(),
        exceptionLog: (0, o.slot)()
      };
    },
    828298: (e, t, s) => {
      var o, r, n;
      s.d(t, { E6: () => n, hr: () => r, xZ: () => o }),
        (function (e) {
          (e[(e.MasterPasswordMissing = 0)] = "MasterPasswordMissing"),
            (e[(e.DeviceAuthenticationMissing = 1)] = "DeviceAuthenticationMissing"),
            (e[(e.TokenMissing = 2)] = "TokenMissing"),
            (e[(e.OTPMissing = 3)] = "OTPMissing"),
            (e[(e.AskPersistData = 4)] = "AskPersistData"),
            (e[(e.LoggedIn = 5)] = "LoggedIn"),
            (e[(e.ExtraDeviceTokenMissing = 6)] = "ExtraDeviceTokenMissing"),
            (e[(e.SSOLogin = 7)] = "SSOLogin"),
            (e[(e.DeviceLimitFlow = 8)] = "DeviceLimitFlow"),
            (e[(e.DashlaneAuthenticatorApprovalMissing = 9)] = "DashlaneAuthenticatorApprovalMissing"),
            (e[(e.DashlaneAuthenticatorApprovalCancelled = 10)] = "DashlaneAuthenticatorApprovalCancelled"),
            (e[(e.MasterPasswordLess = 11)] = "MasterPasswordLess");
        })(o || (o = {})),
        (function (e) {
          (e.SSO = "sso"), (e.MP = "master_password");
        })(r || (r = {})),
        (function (e) {
          (e.SUCCESS = "SUCCESS"),
            (e.ASK_NEW_MP = "ASK_NEW_MP"),
            (e.EMPTY_LOGIN = "EMPTY_LOGIN"),
            (e.INNACTIVE_SESSION = "INNACTIVE_SESSION"),
            (e.SSO_VERIFICATION_FAILED = "SSO_VERIFICATION_FAILED"),
            (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.UNSUPPORTED_TRANSITION = "UNSUPPORTED_TRANSITION"),
            (e.WRONG_PASSWORD = "WRONG_PASSWORD");
        })(n || (n = {}));
    },
    994883: (e, t, s) => {
      s.d(t, { Rj: () => a, Xz: () => i, _m: () => n });
      var o = s(71796),
        r = s(455432);
      const n = { addLoginNotification: (0, o.slot)(), clearAllStoredLoginNotification: (0, o.slot)() },
        i = { getLoginNotifications: (0, o.slot)() },
        a = { liveLoginNotifications: (0, r.H)() };
    },
    882772: (e, t, s) => {
      var o;
      s.d(t, { A: () => o }),
        (function (e) {
          (e.RELOGIN_NEEDED = "RELOGIN_NEEDED"),
            (e.SSO_FEATURE_BLOCKED = "SSO_FEATURE_BLOCKED"),
            (e.SSO_SETUP_ERROR = "SSO_SETUP_ERROR"),
            (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.TEAM_ACCEPTANCE_SUCCESS = "TEAM_ACCEPTANCE_SUCCESS"),
            (e.TEAM_ACCEPTANCE_ERROR = "TEAM_ACCEPTANCE_ERROR");
        })(o || (o = {}));
    },
    422955: (e, t, s) => {
      s.d(t, { _1: () => a, vq: () => n, xP: () => i });
      var o = s(71796),
        r = s(455432);
      const n = { updateLoginStepInfo: (0, o.slot)(), resetLoginStepInfo: (0, o.slot)() },
        i = { getLoginStepInfo: (0, o.slot)() },
        a = { liveLoginStepInfo: (0, r.H)() };
    },
    214049: (e, t, s) => {
      var o;
      s.d(t, { F: () => o }),
        (function (e) {
          (e.Email = "email"),
            (e.Welcome = "welcome"),
            (e.OTP1 = "OTP1"),
            (e.OTP2 = "OTP2"),
            (e.BackupCodeOTP1 = "backupCodeOTP1"),
            (e.BackupCodeOTP2 = "backupCodeOTP2"),
            (e.OTPToken = "token"),
            (e.Password = "password"),
            (e.SSO = "SSO"),
            (e.ActivateSSO = "activateSSO"),
            (e.WebAuthn = "webAuthn"),
            (e.WebAuthnError = "webAuthnError"),
            (e.DeviceLimitReached = "deviceLimitReached"),
            (e.DashlaneAuthenticator = "dashlaneAuthenticator"),
            (e.PasswordLess = "passwordLess");
        })(o || (o = {}));
    },
    208755: (e, t, s) => {
      s.d(t, { Ie: () => i, U$: () => n, iX: () => a });
      var o = s(71796),
        r = s(455432);
      const n = {
          markNotificationAsInteracted: (0, o.slot)(),
          markNotificationAsSeen: (0, o.slot)(),
          markNotificationAsUnseen: (0, o.slot)()
        },
        i = { getNotificationStatus: (0, o.slot)() },
        a = { liveNotificationStatus: (0, r.H)() };
    },
    506295: (e, t, s) => {
      var o, r;
      s.d(t, { E: () => r, O: () => o }),
        (function (e) {
          (e.PaymentFailureChurning = "paymentFailureChurning"),
            (e.PaymentFailureChurned = "paymentFailureChurned"),
            (e.SwitchToMlAnalysisEngine = "switchToMlAnalysisEngine"),
            (e.DWMb2bAutoEnrollTooltip = "dWMb2bAutoEnrollTooltip"),
            (e.VpnProviderIsNowHotspot = "vpnProviderIsNowHotspot"),
            (e.VpnHostpotshieldInstalled = "vpnHostpotshieldInstalled"),
            (e.PopupIncomingTabPayments = "popupIncomingTabPayments"),
            (e.PopupIncomingTabSecureNotes = "popupIncomingTabSecureNotes"),
            (e.PopupIncomingTabPersonalInfo = "popupIncomingTabPersonalInfo"),
            (e.PopupIncomingTabIDs = "popupIncomingTabIDs"),
            (e.NewAccountMenuTooltip = "newAccountMenuTooltip"),
            (e.TacGetTheExtensionBanner = "tacGetTheExtensionBanner"),
            (e.TacEnableAccountRecoveryBanner = "tacEnableAccountRecoveryBanner"),
            (e.TacOnlyOneAdminBanner = "tacOnlyOneAdminBanner"),
            (e.TacDarkWebInsightsNewBadge = "tacDarkWebInsightsNewBadge"),
            (e.PasswordHistoryBanner = "passwordHistoryBanner"),
            (e.SharingCenterDisabledBanner = "sharingCenterDisabledBanner"),
            (e.AccountRecoveryAvailableAdminTooltip = "accountRecoveryAvailableAdminTooltip"),
            (e.AccountRecoveryAvailableEmployeeDialog = "accountRecoveryAvailableEmployeeDialog"),
            (e.ActivateInviteLink = "activateInviteLink"),
            (e.TacGetStartedOpenVault = "tacGetStartedOpenVault"),
            (e.TacGetStartedDismissPage = "tacGetStartedDismissedPage"),
            (e.TacGetStartedSeenPage = "tacGetStartedSeenPage");
        })(o || (o = {})),
        (function (e) {
          (e.Interacted = "interacted"), (e.Seen = "seen"), (e.Unseen = "unseen");
        })(r || (r = {}));
    },
    298142: (e, t, s) => {
      s.d(t, { H: () => n, s: () => r });
      var o = s(50415);
      const r = (0, o.Enum)(
          "SHOW_LOGIN_USING_EXTENSION_NOTIFICATION",
          "SHOW_SAVE_SITES_DIALOG",
          "SHOW_PASSWORD_SAVE_SUCCESS",
          "SHOW_WEB_SAVE_AND_AUTOLOGIN_COMPLETED",
          "SHOW_PASSWORD_IMPORT",
          "SHOW_GET_MOBILE_DIALOG"
        ),
        n = (0, o.Enum)("SHOW_LOGIN_NOTIFICATION");
    },
    87697: (e, t, s) => {
      var o;
      s.d(t, { s: () => o }),
        (function (e) {
          (e.OneDeviceLimitReached = "OneDeviceLimitReached"),
            (e.MultipleDevicesLimitReached = "MultipleDevicesLimitReached"),
            (e.UnlinkingAndOpeningSession = "UnlinkingAndOpeningSession"),
            (e.UnlinkingMultipleDevicesError = "UnlinkingMultipleDevicesError"),
            (e.RefreshingDeviceLimitStatus = "RefreshingDeviceLimitStatus"),
            (e.OpeningSessionAfterDeviceLimitRemoval = "OpeningSessionAfterDeviceLimitRemoval"),
            (e.DeviceLimitDone = "DeviceLimitDone");
        })(o || (o = {}));
    },
    164272: (e, t, s) => {
      var o, r, n;
      s.d(t, { dN: () => r, fr: () => o }),
        (function (e) {
          (e.EMAIL_TOKEN = "email_token"), (e.DEVICE_REGISTRATION = "totp_device_registration"), (e.LOGIN = "totp_login"), (e.SSO = "sso");
        })(o || (o = {})),
        (function (e) {
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"), (e[(e.PENDING = 1)] = "PENDING"), (e[(e.ERROR = 2)] = "ERROR"), (e[(e.READY = 3)] = "READY");
        })(r || (r = {})),
        (function (e) {
          (e.LOGIN = "login"), (e.NEW_DEVICE = "newDevice"), (e.DISABLED = "disabled");
        })(n || (n = {})),
        n.LOGIN,
        n.NEW_DEVICE;
    },
    252215: (e, t, s) => {
      s.d(t, { of: () => u, K1: () => d, A2: () => l });
      var o = s(71796),
        r = s(455432);
      const n = { getLoginDeviceLimitFlow: (0, o.slot)() },
        i = { liveLoginDeviceLimitFlow: (0, r.H)() },
        a = { getTwoFactorAuthenticationInfo: (0, o.slot)() },
        c = { liveTwoFactorAuthenticationInfo: (0, r.H)() },
        l = {
          getLoginStatus: (0, o.slot)(),
          getLocalAccounts: (0, o.slot)(),
          getIsSSOUser: (0, o.slot)(),
          getSSOMigrationInfo: (0, o.slot)(),
          getSessionInfo: (0, o.slot)(),
          getMasterPasswordAndServerKey: (0, o.slot)(),
          getUserCryptoSettings: (0, o.slot)(),
          getSyncInfo: (0, o.slot)(),
          getIsSyncInProgress: (0, o.slot)(),
          getPremiumStatus: (0, o.slot)(),
          getNodePremiumStatus: (0, o.slot)(),
          getSubscriptionInformation: (0, o.slot)(),
          getActiveSpaces: (0, o.slot)(),
          getIsAuthenticated: (0, o.slot)(),
          getSSOProviderInfo: (0, o.slot)(),
          getUserLogin: (0, o.slot)(),
          getPublicUserId: (0, o.slot)(),
          getAnalyticsInstallationId: (0, o.slot)(),
          getUserLoginStatus: (0, o.slot)(),
          getWebOnboardingMode: (0, o.slot)(),
          getPremiumChurningDismissDate: (0, o.slot)(),
          getIsPaymentFailureChurningDismissed: (0, o.slot)(),
          getCredentialSearchOrder: (0, o.slot)(),
          getDidOpen: (0, o.slot)(),
          getPlatformName: (0, o.slot)(),
          getAccountAuthenticationType: (0, o.slot)(),
          ...n,
          ...a
        },
        d = {
          liveLoginStatus: (0, r.H)(),
          liveDidOpen: (0, r.H)(),
          liveIsSSOUser: (0, r.H)(),
          liveSSOMigrationInfo: (0, r.H)(),
          liveSessionInfo: (0, r.H)(),
          liveSyncInfo: (0, r.H)(),
          liveIsSyncInProgress: (0, r.H)(),
          livePremiumStatus: (0, r.H)(),
          liveServiceProviderUrl: (0, r.H)(),
          liveWebOnboardingMode: (0, r.H)(),
          liveSubscriptionInformation: (0, r.H)(),
          ...i,
          ...c
        },
        u = {
          validateToken: (0, o.slot)(),
          validateMasterPassword: (0, o.slot)(),
          resetProtectedItemAutofillTimer: (0, o.slot)(),
          forceSync: (0, o.slot)(),
          updatePremiumChurningDismissDate: (0, o.slot)(),
          setCredentialSearchOrder: (0, o.slot)(),
          refreshSubscriptionInformation: (0, o.slot)(),
          updateAccountRecoveryKeyPersonalSettings: (0, o.slot)()
        };
    },
    543956: (e, t, s) => {
      var o;
      s.d(t, { Io: () => r, LT: () => i, LW: () => a, a1: () => n, fE: () => d, lU: () => o, rR: () => l }),
        (function (e) {
          (e[(e.NO_PREMIUM = 0)] = "NO_PREMIUM"),
            (e[(e.PREMIUM = 1)] = "PREMIUM"),
            (e[(e.PREMIUM_CANCELLED = 2)] = "PREMIUM_CANCELLED"),
            (e[(e.OLD_ACCOUNT = 3)] = "OLD_ACCOUNT"),
            (e[(e.NEW_USER = 4)] = "NEW_USER"),
            (e[(e.GRACE_PERIOD = 5)] = "GRACE_PERIOD");
        })(o || (o = {})),
        Object.freeze({
          freeTrialGranted: "free_trial_granted",
          premiumGranted: "premium_granted",
          renewed: "renewed",
          subscribed: "subscribed",
          crosssellPurchased: "crosssell_purchased",
          setAsLegacy: "set_as_legacy",
          familyCreated: "family_created",
          familyRenewed: "family_renewed"
        }),
        Object.freeze({
          Amazon: "amazon",
          FreeTrial: "free_trial",
          Invoice: "invoice",
          IOS: "ios",
          IOSRenewable: "ios_renewable",
          Legacy: "legacy",
          Mac: "mac",
          MacRenewable: "mac_renewable",
          Offer: "offer",
          Partner: "partner",
          Paypal: "paypal",
          PaypalRenewable: "paypal_renewable",
          Playstore: "playstore",
          PlaystoreRenewable: "playstore_renewable",
          Stripe: "stripe"
        });
      const r = ["GROUP_CREATE", "GROUP_DELETE", "GROUP_EDIT", "GROUP_READ"],
        n = ["FULL", "BILLING", ...r];
      var i, a, c;
      !(function (e) {
        (e[(e.UNPAIRED = 0)] = "UNPAIRED"), (e[(e.PAIRED = 1)] = "PAIRED");
      })(i || (i = {})),
        (function (e) {
          (e.READY = "ready"), (e.IN_PROGRESS = "in_progress"), (e.SUCCESS = "success"), (e.FAILURE = "failure");
        })(a || (a = {})),
        (function (e) {
          (e.not_in_team = "not_in_team"), (e.proposed = "proposed"), (e.in_team = "in_team");
        })(c || (c = {})),
        Object.freeze({ Premium: "premium", Essentials: "essentials", Premiumplus: "premiumplus", BackupForAll: "backup-for-all" });
      const l = Object.freeze({
        Team: "team",
        Business: "business",
        Legacy: "legacy",
        Entreprise: "entreprise",
        Free: "free",
        Starter: "starter"
      });
      var d, u, p;
      !(function (e) {
        (e.Accepted = "accepted"),
          (e.Pending = "pending"),
          (e.Proposed = "proposed"),
          (e.Refused = "refused"),
          (e.Removed = "removed"),
          (e.Revoked = "revoked"),
          (e.Unproposed = "unproposed");
      })(d || (d = {})),
        (function (e) {
          (e[(e.MP_TO_SSO = 0)] = "MP_TO_SSO"),
            (e[(e.MP_TO_SSO_WITH_INFO = 1)] = "MP_TO_SSO_WITH_INFO"),
            (e[(e.SSO_TO_MP = 2)] = "SSO_TO_MP");
        })(u || (u = {})),
        (function (e) {
          (e.NAME = "name"), (e.DATE = "date");
        })(p || (p = {}));
    },
    138578: (e, t, s) => {
      s.d(t, { H: () => n, r: () => r });
      var o = s(71796);
      const r = { generatePassword: (0, o.slot)(), generateAndSavePassword: (0, o.slot)(), savePasswordGenerationSettings: (0, o.slot)() },
        n = { getPasswordGenerationSettings: (0, o.slot)() };
    },
    73298: (e, t, s) => {
      s.d(t, { P: () => n, _: () => r });
      var o = s(71796);
      const r = {
          cancelAutoRenew: (0, o.slot)(),
          downloadCustomerInvoice: (0, o.slot)(),
          fetchInvoiceList: (0, o.slot)(),
          requestRefund: (0, o.slot)()
        },
        n = { getInvoicesCount: (0, o.slot)(), getInvoiceList: (0, o.slot)(), getInvoiceListYears: (0, o.slot)() };
    },
    638819: (e, t, s) => {
      var o;
      s.d(t, { _: () => o }),
        (function (e) {
          (e.ascending = "ascending"), (e.descending = "descending");
        })(o || (o = {}));
    },
    852860: (e, t, s) => {
      s.d(t, { UW: () => i, gQ: () => n, qN: () => a });
      var o = s(71796),
        r = s(455432);
      const n = { disableCredentialProtection: (0, o.slot)(), unlockProtectedItems: (0, o.slot)() },
        i = { areProtectedItemsUnlocked: (0, o.slot)() },
        a = { liveAreProtectedItemsUnlocked: (0, r.H)() };
    },
    186552: (e, t, s) => {
      var o, r;
      s.d(t, { FI: () => o }),
        (function (e) {
          (e.SUCCESS = "success"), (e.ERROR = "error");
        })(o || (o = {})),
        (function (e) {
          (e.SUCCESS = "success"), (e.ERROR = "error");
        })(r || (r = {}));
    },
    977507: (e, t, s) => {
      s.d(t, { $k: () => n, EX: () => a, q9: () => i });
      var o = s(71796),
        r = s(455432);
      const n = {
          activateAccountRecovery: (0, o.slot)(),
          setupMasterPasswordForRecovery: (0, o.slot)(),
          deactivateAccountRecovery: (0, o.slot)(),
          registerDeviceForRecovery: (0, o.slot)(),
          startAccountRecovery: (0, o.slot)(),
          sendRecoveryRequest: (0, o.slot)(),
          cancelRecoveryRequest: (0, o.slot)(),
          checkRecoveryRequestStatus: (0, o.slot)(),
          recoverUserData: (0, o.slot)(),
          checkDoesLocalRecoveryKeyExist: (0, o.slot)(),
          isRecoveryRequestPending: (0, o.slot)()
        },
        i = {
          getRecoveryOptInSetting: (0, o.slot)(),
          getShouldShowFeatureActivationModal: (0, o.slot)(),
          getAccountRecoveryRequestCount: (0, o.slot)()
        },
        a = { liveAccountRecoveryRequestCount: (0, r.H)() };
    },
    181151: (e, t, s) => {
      var o, r;
      s.d(t, { e: () => r }),
        (function (e) {
          (e.CheckRecoveryStatusFailed = "CHECK_RECOVERY_STATUS_FAILED"),
            (e.RecoverySetupFailed = "RECOVERY_SETUP_FAILED"),
            (e.RecoveryDeactivationFailed = "RECOVERY_DEACTIVATION_FAILED"),
            (e.RecoveryRequestFailed = "RECOVERY_REQUEST_FAILED"),
            (e.RegisterDeviceFailed = "REGISTER_DEVICE_FAILED"),
            (e.SetupMasterPasswordForRecoveryFailed = "SETUP_MASTERPASSWORD_FOR_RECOVERY_FAILED"),
            (e.CancelRecoveryRequestFailed = "CANCEL_RECOVERY_REQUEST_FAILED"),
            (e.RecoverUserDataFailed = "RECOVER_REQUEST_FAILED"),
            (e.CheckLocalRecoveryKeyFailed = "CHECK_LOCAL_RECOVERY_KEY_FAILED"),
            (e.StartAccountRecoveryFailed = "START_ACCOUNT_RECOVERY_FAILED"),
            (e.AccountRecoveryNotAvailableError = "ACCOUNT_RECOVERY_NOT_AVAILABLE_ERROR"),
            (e.IsRecoveryRequestPendingFailed = "IS_RECOVERY_REQUEST_PENDING_FAILED");
        })(o || (o = {})),
        (function (e) {
          (e.PENDING = "PENDING"),
            (e.APPROVED = "APPROVED"),
            (e.REFUSED = "REFUSED"),
            (e.OVERRIDDEN = "OVERRIDDEN"),
            (e.CANCELED = "CANCELED");
        })(r || (r = {}));
    },
    567196: (e, t, s) => {
      var o, r, n, i;
      s.d(t, { ShareItemFailureReason: () => o, pQ: () => r }),
        (function (e) {
          (e[(e.ITEM_DOESNT_EXIST = 0)] = "ITEM_DOESNT_EXIST"),
            (e[(e.LIMIT_EXCEEDED = 1)] = "LIMIT_EXCEEDED"),
            (e[(e.ITEM_HAS_ATTACHMENTS = 2)] = "ITEM_HAS_ATTACHMENTS"),
            (e[(e.SHARING_FAILED = 3)] = "SHARING_FAILED");
        })(o || (o = {})),
        (function (e) {
          (e[(e.Accept = 0)] = "Accept"), (e[(e.Refuse = 1)] = "Refuse");
        })(r || (r = {})),
        (function (e) {
          (e[(e.FORBIDDEN = 0)] = "FORBIDDEN"), (e[(e.NOT_FOUND = 1)] = "NOT_FOUND"), (e[(e.REVOKE_FAILED = 2)] = "REVOKE_FAILED");
        })(n || (n = {})),
        (function (e) {
          (e[(e.FORBIDDEN = 0)] = "FORBIDDEN"), (e[(e.NOT_FOUND = 1)] = "NOT_FOUND"), (e[(e.UPDATE_FAILED = 2)] = "UPDATE_FAILED");
        })(i || (i = {}));
    },
    527794: (e, t, s) => {
      s.d(t, { Ll: () => i, i1: () => n, uG: () => a });
      var o = s(71796),
        r = s(455432);
      const n = {
          getAllSharedItemIds: (0, o.slot)(),
          getMyAcceptedItemGroupUserMembers: (0, o.slot)(),
          getMyAcceptedUserGroups: (0, o.slot)(),
          getSharingCapacity: (0, o.slot)(),
          isAllowedToShare: (0, o.slot)(),
          getUserGroups: (0, o.slot)(),
          getUserGroup: (0, o.slot)(),
          getUserGroupPermissionLevel: (0, o.slot)(),
          getUserGroupMembers: (0, o.slot)(),
          getSharingUsers: (0, o.slot)(),
          getSharingUserPermissionLevel: (0, o.slot)()
        },
        i = {
          liveAllSharedItemIds: (0, r.H)(),
          liveMyAcceptedItemGroupUserMembers: (0, r.H)(),
          liveMyAcceptedUserGroups: (0, r.H)(),
          liveSharingCapacity: (0, r.H)(),
          liveUserGroups: (0, r.H)(),
          liveUserGroupPermissionLevel: (0, r.H)(),
          liveSharingUsers: (0, r.H)(),
          liveSharingUserPermissionLevel: (0, r.H)()
        },
        a = { convertItemToDashlaneXml: (0, o.slot)(), shareItem: (0, o.slot)() };
    },
    369558: (e, t, s) => {
      var o;
      s.d(t, { N: () => o }),
        (function (e) {
          (e[(e.CALLING_CODES = 0)] = "CALLING_CODES"), (e[(e.GEOGRAPHIC_STATES = 1)] = "GEOGRAPHIC_STATES");
        })(o || (o = {}));
    },
    378552: (e, t, s) => {
      var o;
      s.d(t, { Y: () => o }),
        (function (e) {
          (e[(e.LEVEL_0 = 0)] = "LEVEL_0"), (e[(e.LEVEL_1 = 1)] = "LEVEL_1");
        })(o || (o = {}));
    },
    973762: (e, t, s) => {
      s.d(t, { N: () => r, b: () => n });
      var o = s(71796);
      const r = { getIsRecoveryEnabled: (0, o.slot)() },
        n = {
          getTeamInfo: (0, o.slot)(),
          getMidCycleTierUpgradePrice: (0, o.slot)(),
          getExpectedTaxInformation: (0, o.slot)(),
          changeTierMidCycle: (0, o.slot)(),
          computePlanPricing: (0, o.slot)(),
          addSeats: (0, o.slot)()
        };
    },
    319586: (e, t, s) => {
      var o, r;
      s.d(t, { L: () => r }),
        (function (e) {
          (e.StartAuditLogsQueryFailed = "START_AUDIT_LOGS_QUERY_FAILED"),
            (e.GetAuditLogQueryResultsFailed = "GET_AUDIT_LOG_QUERY_RESULTS_FAILED");
        })(o || (o = {})),
        (function (e) {
          (e.Queued = "QUEUED"), (e.Running = "RUNNING"), (e.Succeeded = "SUCCEEDED"), (e.Failed = "FAILED"), (e.Cancelled = "CANCELLED");
        })(r || (r = {}));
    },
    740763: (e, t, s) => {
      var o;
      s.d(t, { p: () => r }),
        (function (e) {
          (e.pending = "pending"), (e.valid = "valid"), (e.expired = "expired"), (e.invalid = "invalid");
        })(o || (o = {}));
      const r = o;
    },
    320144: (e, t, s) => {
      var o;
      s.d(t, { x: () => o }),
        (function (e) {
          (e.OK = "OK"),
            (e.ES_UNREACHABLE = "ES_UNREACHABLE"),
            (e.ES_CONFIG_RELOAD_FAILURE = "ES_CONFIG_RELOAD_FAILURE"),
            (e.ES_INTERNAL_NETWORK_ERROR = "ES_INTERNAL_NETWORK_ERROR");
        })(o || (o = {}));
    },
    823512: (e, t, s) => {
      s.d(t, { Bf: () => r, S2: () => o });
      const o = "UNKNOWN_ERROR",
        r = "TEAM_DEVICE_CONFIGURATION_NOT_FOUND";
    },
    677253: (e, t, s) => {
      s.d(t, { XJ: () => n, dN: () => i, hO: () => a });
      var o = s(71796),
        r = s(455432);
      const n = {
          getAdministrableUserGroup: (0, o.slot)(),
          getAdministrableUserGroups: (0, o.slot)(),
          isGroupNameAvailable: (0, o.slot)(),
          getAdminProvisioningKey: (0, o.slot)()
        },
        i = { liveAdministrableUserGroup: (0, r.H)(), liveAdministrableUserGroups: (0, r.H)(), liveAdminProvisioningKey: (0, r.H)() },
        a = {
          registerTeamDomain: (0, o.slot)(),
          completeTeamDomainRegistration: (0, o.slot)(),
          deactivateTeamDomain: (0, o.slot)(),
          getTeamDomains: (0, o.slot)(),
          getTeamDevice: (0, o.slot)(),
          listTeamDevices: (0, o.slot)(),
          deactivateTeamDevice: (0, o.slot)(),
          registerTeamDevice: (0, o.slot)(),
          registerTeamDeviceAccount: (0, o.slot)(),
          getEncryptionServiceConfig: (0, o.slot)(),
          generateAndSaveEncryptionServiceConfig: (0, o.slot)(),
          clearSelfHostedESSettings: (0, o.slot)(),
          getTeamDeviceEncryptedConfig: (0, o.slot)(),
          updateTeamDeviceEncryptedConfig: (0, o.slot)(),
          updateTeamSettings: (0, o.slot)(),
          parseMetadataFields: (0, o.slot)(),
          persistAdminProvisioningKey: (0, o.slot)(),
          removeAdminProvisioningKey: (0, o.slot)(),
          createSSOConnectorConfig: (0, o.slot)(),
          generateSSOConnectorKey: (0, o.slot)(),
          startAuditLogsQuery: (0, o.slot)(),
          getAuditLogQueryResults: (0, o.slot)(),
          getRecoveryCodesAsTeamCaptain: (0, o.slot)(),
          createInviteLink: (0, o.slot)(),
          changeInviteLinkTeamKey: (0, o.slot)(),
          toggleInviteLink: (0, o.slot)(),
          getInviteLink: (0, o.slot)(),
          requestInviteLinkToken: (0, o.slot)(),
          getInviteLinkForAdmin: (0, o.slot)(),
          getLastADSyncDate: (0, o.slot)(),
          getSpecialUserGroupInviteValuesForMemberInTeam: (0, o.slot)(),
          getSpecialUserGroupRevision: (0, o.slot)()
        };
    },
    417799: (e, t, s) => {
      var o;
      s.d(t, { U: () => o }),
        (function (e) {
          (e.DEFAULT = "default"),
            (e.TRIAL_EXPIRED = "trial_expired"),
            (e.WEB_STORE = "web_store"),
            (e.DASHBOARD_UPRADE = "dashboard_upgrade"),
            (e.SHARING_CENTER_FAMILY = "sharing_center_family"),
            (e.SHARING_CENTER_WORK = "sharing_center_work");
        })(o || (o = {}));
    },
    889210: (e, t, s) => {
      s.d(t, { Kr: () => a, Vz: () => n, kh: () => i });
      var o = s(71796),
        r = s(455432);
      const n = { getVisibleUserMessages: (0, o.slot)(), getUserMessages: (0, o.slot)() },
        i = { liveUserMessages: (0, r.H)(), liveVisibleUserMessages: (0, r.H)() },
        a = { dismissUserMessages: (0, o.slot)(), addUserMessage: (0, o.slot)() };
    },
    785539: (e, t, s) => {
      var o, r, n;
      s.d(t, { OG: () => r, Ym: () => n, gl: () => o }),
        (function (e) {
          (e.Activated = "Activated"), (e.Activating = "Activating"), (e.Error = "Error"), (e.NotFound = "NotFound"), (e.Ready = "Ready");
        })(o || (o = {})),
        (function (e) {
          (e.ServerError = "ServerError"), (e.AccountAlreadyExistError = "AccountAlreadyExist");
        })(r || (r = {})),
        (function (e) {
          (e.InTeam = "InTeam"), (e.NotPremium = "NotPremium"), (e.NoPayment = "NoPayment"), (e.Other = "Other");
        })(n || (n = {}));
    },
    971316: (e, t, s) => {
      s.d(t, { T4: () => n, fD: () => i, lp: () => a });
      var o = s(71796),
        r = s(455432);
      const n = { getVpnAccount: (0, o.slot)(), getVpnCapabilitySetting: (0, o.slot)() },
        i = { liveVpnAccount: (0, r.H)() },
        a = { activateVpnAccount: (0, o.slot)(), clearVpnAccountErrors: (0, o.slot)(), completeVpnAccountActivation: (0, o.slot)() };
    },
    545874: (e, t, s) => {
      s.d(t, { W: () => C });
      var o,
        r = s(486952),
        n = s(574354),
        i = s(125029),
        a = s(166302),
        c = s(999059);
      class l extends (0, n.A)({ scope: i.F.Device }) {}
      class d extends (0, n.A)({ scope: i.F.Device }) {}
      class u extends (0, n.g)({ scope: i.F.Device }) {}
      const p = {
        ...((o = a.z),
        Object.keys(o).reduce(
          (e, t) => ({ ...e, [`${t[0].toUpperCase().concat(t.substring(1))}Command`]: (0, n.A)({ scope: i.F.Device }) }),
          {}
        )),
        CarbonCommand: l,
        CarbonLegacyLeelooCommand: d,
        MitigationDeleteGrapheneUserDataCommand: u
      };
      var _ = s(188885);
      class S extends (0, _.d)({ scope: i.F.Device }) {}
      class E extends (0, _.d)({ scope: i.F.Device }) {}
      class m extends (0, _.d)({ scope: i.F.Device }) {}
      const v = { CarbonCommandResultEvent: S, CarbonLegacyEvent: E, CarbonLegacyDeviceRemotelyDeleted: m };
      var O,
        f,
        A = s(938344),
        g = s(933820);
      class h extends (0, c.k)({ scope: i.F.Device }) {}
      class T extends (0, c.k)({ scope: i.F.Device }) {}
      const y = {
          ...((O = A.r),
          (f = g.z),
          [...Object.keys(O), ...Object.keys(f)].reduce(
            (e, t) => ({ ...e, [`${t[0].toUpperCase().concat(t.substring(1))}Query`]: (0, c.k)({ scope: i.F.Device }) }),
            {}
          )),
          CarbonStateQuery: h,
          CarbonStateListQuery: T
        },
        C = (0, r.Q)({ name: "carbon-legacy", commands: p, queries: y, events: v });
    },
    957239: (e, t, s) => {
      var o, r;
      s.d(t, { K: () => o }),
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
        })(o || (o = {})),
        (function (e) {
          (e.UNKNOWN = "unknown"),
            (e.SYNCING = "syncing"),
            (e.SKIPPED = "skipped"),
            (e.UNCHANGED = "unchanged"),
            (e.UPDATED = "updated"),
            (e.ERROR = "error");
        })(r || (r = {}));
    },
    680439: (e, t, s) => {
      var o, r, n, i, a, c;
      s.d(t, { G8: () => n, Q8: () => r, qJ: () => a, rp: () => c }),
        (function (e) {
          (e.CREDENTIAL = "credentials"),
            (e.NOTE = "notes"),
            (e.PAYMENT_CARD = "paymentCards"),
            (e.BANK_ACCOUNT = "bankAccounts"),
            (e.COLLECTION = "collections");
        })(o || (o = {})),
        (function (e) {
          (e["1Password"] = "1password"),
            (e.Bitwarden = "bitwarden"),
            (e.Chrome = "chrome"),
            (e.Dash = "dash"),
            (e.Edge = "edge"),
            (e.Firefox = "firefox"),
            (e.Keepass = "keepass"),
            (e.Keeper = "keeper"),
            (e.Lastpass = "lastpass"),
            (e.Other = "other"),
            (e.Safari = "safari");
        })(r || (r = {})),
        (function (e) {
          (e.Csv = "csv"), (e.Dash = "dash");
        })(n || (n = {})),
        (function (e) {
          (e.Unavailable = "unavailable"), (e.Unknown = "unknown");
        })(i || (i = {})),
        (function (e) {
          (e.Idle = "idle"), (e.Processing = "processing"), (e.Success = "success"), (e.Error = "error");
        })(a || (a = {})),
        (function (e) {
          (e.BadPassword = "bad_password"), (e.Unavailable = "unavailable"), (e.InvalidFormat = "invalid"), (e.Unknown = "unknown");
        })(c || (c = {}));
    },
    520435: (e, t, s) => {
      var o;
      s.d(t, { m: () => o }),
        (function (e) {
          (e.Credential = "credential"), (e.Generated = "generated");
        })(o || (o = {}));
    },
    734485: (e, t, s) => {
      s.d(t, { fv: () => Ne, QX: () => Ie, pz: () => Ce });
      var o = s(71796),
        r = s(455432);
      const n = { getBankAccount: (0, o.slot)(), getBankAccounts: (0, o.slot)() },
        i = { liveBankAccount: (0, r.H)(), liveBankAccounts: (0, r.H)() },
        a = { addBankAccount: (0, o.slot)(), updateBankAccount: (0, o.slot)(), deleteBankAccount: (0, o.slot)() },
        c = {
          getBreach: (0, o.slot)(),
          getBreaches: (0, o.slot)(),
          getBreachesPage: (0, o.slot)(),
          getBreachesPaginationToken: (0, o.slot)(),
          getBreachesUpdateStatus: (0, o.slot)()
        },
        l = { liveBreach: (0, r.H)(), liveBreaches: (0, r.H)(), liveBreachesBatch: (0, r.H)(), liveBreachesUpdaterStatus: (0, r.H)() },
        d = { updateBreachStatus: (0, o.slot)() },
        u = {
          addCollection: (0, o.slot)(),
          deleteCollection: (0, o.slot)(),
          removeItemsFromCollections: (0, o.slot)(),
          updateCollection: (0, o.slot)()
        },
        p = {
          addCredential: (0, o.slot)(),
          deleteCredential: (0, o.slot)(),
          deleteCredentialsInBulk: (0, o.slot)(),
          updateCredential: (0, o.slot)(),
          updateLinkedWebsites: (0, o.slot)()
        },
        _ = {
          canUserAddNewCredential: (0, o.slot)(),
          getCredential: (0, o.slot)(),
          getCredentialCategories: (0, o.slot)(),
          getCredentials: (0, o.slot)(),
          getCredentialsByDomain: (0, o.slot)(),
          getCredentialsCount: (0, o.slot)(),
          getCredentialLimitStatus: (0, o.slot)(),
          getCredentialsPage: (0, o.slot)(),
          getCredentialsPaginationToken: (0, o.slot)(),
          getDashlaneDefinedLinkedWebsites: (0, o.slot)(),
          getShouldShowRequireMasterPassword: (0, o.slot)()
        },
        S = {
          liveCanUserAddNewCredential: (0, r.H)(),
          liveCredential: (0, r.H)(),
          liveCredentials: (0, r.H)(),
          liveCredentialsByDomain: (0, r.H)(),
          liveCredentialsBatch: (0, r.H)(),
          liveCredentialsCount: (0, r.H)(),
          liveCredentialLimitStatus: (0, r.H)()
        },
        E = { getIsForcedDomainsEnabled: (0, o.slot)() },
        m = { getPersonalDataExport: (0, o.slot)() },
        v = {
          getGeneratedPassword: (0, o.slot)(),
          getGeneratedPasswordsCount: (0, o.slot)(),
          getGeneratedPasswords: (0, o.slot)(),
          getGeneratedPasswordsPage: (0, o.slot)(),
          getGeneratedPasswordsPaginationToken: (0, o.slot)()
        },
        O = { liveGeneratedPasswordsCount: (0, r.H)(), liveGeneratedPasswords: (0, r.H)() },
        f = { saveGeneratedPassword: (0, o.slot)() },
        A = { getDriverLicense: (0, o.slot)(), getDriverLicenses: (0, o.slot)() },
        g = { liveDriverLicense: (0, r.H)(), liveDriverLicenses: (0, r.H)() },
        h = { addDriverLicense: (0, o.slot)(), editDriverLicense: (0, o.slot)(), deleteDriverLicense: (0, o.slot)() },
        T = { getFiscalId: (0, o.slot)(), getFiscalIds: (0, o.slot)() },
        y = { liveFiscalId: (0, r.H)(), liveFiscalIds: (0, r.H)() },
        C = { addFiscalId: (0, o.slot)(), editFiscalId: (0, o.slot)(), deleteFiscalId: (0, o.slot)() },
        I = { getIdCard: (0, o.slot)(), getIdCards: (0, o.slot)() },
        N = { liveIdCard: (0, r.H)(), liveIdCards: (0, r.H)() },
        R = { addIdCard: (0, o.slot)(), editIdCard: (0, o.slot)(), deleteIdCard: (0, o.slot)() },
        P = { getPassport: (0, o.slot)(), getPassports: (0, o.slot)() },
        b = { livePassport: (0, r.H)(), livePassports: (0, r.H)() },
        D = { addPassport: (0, o.slot)(), editPassport: (0, o.slot)(), deletePassport: (0, o.slot)() },
        U = { getSocialSecurityId: (0, o.slot)(), getSocialSecurityIds: (0, o.slot)() },
        M = { liveSocialSecurityId: (0, r.H)(), liveSocialSecurityIds: (0, r.H)() },
        L = { addSocialSecurityId: (0, o.slot)(), editSocialSecurityId: (0, o.slot)(), deleteSocialSecurityId: (0, o.slot)() },
        w = (0, o.combineEvents)(A, T, I, P, U),
        F = (0, o.combineEvents)(g, y, N, b, M),
        G = (0, o.combineEvents)(h, C, R, D, L),
        k = { getImportPersonalDataStatus: (0, o.slot)() },
        B = { liveImportPersonalDataStatus: (0, r.H)() },
        x = {
          importPersonalData: (0, o.slot)(),
          previewPersonalData: (0, o.slot)(),
          dismissPersonalDataImportNotifications: (0, o.slot)()
        },
        j = { getPasskey: (0, o.slot)(), getPasskeys: (0, o.slot)(), getPasskeysForDomain: (0, o.slot)() },
        W = { livePasskey: (0, r.H)(), livePasskeys: (0, r.H)() },
        K = { addPasskey: (0, o.slot)(), updatePasskey: (0, o.slot)(), deletePasskey: (0, o.slot)() },
        H = {
          getPasswordHistory: (0, o.slot)(),
          getHasPasswordHistory: (0, o.slot)(),
          getPasswordHistoryPage: (0, o.slot)(),
          getPasswordHistoryPaginationToken: (0, o.slot)()
        },
        V = { livePasswordHistory: (0, r.H)(), livePasswordHistoryBatch: (0, r.H)() },
        Q = { getPaymentCard: (0, o.slot)(), getPaymentCards: (0, o.slot)() },
        Y = { livePaymentCard: (0, r.H)(), livePaymentCards: (0, r.H)() },
        q = { addPaymentCard: (0, o.slot)(), updatePaymentCard: (0, o.slot)(), deletePaymentCard: (0, o.slot)() },
        z = { getAddresses: (0, o.slot)(), getAddress: (0, o.slot)() },
        X = { liveAddress: (0, r.H)(), liveAddresses: (0, r.H)() },
        $ = { getCompanies: (0, o.slot)(), getCompany: (0, o.slot)() },
        Z = { liveCompanies: (0, r.H)(), liveCompany: (0, r.H)() },
        J = { getEmail: (0, o.slot)(), getEmails: (0, o.slot)() },
        ee = { liveEmail: (0, r.H)(), liveEmails: (0, r.H)() },
        te = { getIdentities: (0, o.slot)(), getIdentitiesCount: (0, o.slot)(), getIdentity: (0, o.slot)() },
        se = { liveIdentities: (0, r.H)(), liveIdentitiesCount: (0, r.H)(), liveIdentity: (0, r.H)() },
        oe = { getPhone: (0, o.slot)(), getPhones: (0, o.slot)() },
        re = { livePhone: (0, r.H)(), livePhones: (0, r.H)() },
        ne = { getPersonalWebsite: (0, o.slot)(), getPersonalWebsites: (0, o.slot)() },
        ie = { livePersonalWebsite: (0, r.H)(), livePersonalWebsites: (0, r.H)() },
        ae = (0, o.combineEvents)(z, $, J, te, oe, ne),
        ce = (0, o.combineEvents)(X, Z, ee, se, re, ie),
        le = {
          getSecureFilesQuota: (0, o.slot)(),
          getSecureFilesInfoList: (0, o.slot)(),
          getFileDownloadProgress: (0, o.slot)(),
          getFileUploadProgress: (0, o.slot)()
        },
        de = { liveSecureFilesQuota: (0, r.H)(), liveFileDownloadProgress: (0, r.H)(), liveFileUploadProgress: (0, r.H)() },
        ue = {
          downloadSecureFile: (0, o.slot)(),
          chunkTransferDone: (0, o.slot)(),
          deleteSecureFile: (0, o.slot)(),
          addSecureFile: (0, o.slot)(),
          validateSecureFile: (0, o.slot)(),
          commitSecureFile: (0, o.slot)(),
          initSecureFilesStorageInfo: (0, o.slot)(),
          clearSecureFileState: (0, o.slot)()
        },
        pe = { setupDefaultNoteCategories: (0, o.slot)() },
        _e = {
          getNote: (0, o.slot)(),
          getNoteCategories: (0, o.slot)(),
          getNotes: (0, o.slot)(),
          getNotesCount: (0, o.slot)(),
          getNotesPage: (0, o.slot)(),
          getNotesPaginationToken: (0, o.slot)()
        },
        Se = { liveNote: (0, r.H)(), liveNotes: (0, r.H)(), liveNotesBatch: (0, r.H)(), liveNotesCount: (0, r.H)() },
        Ee = { addSecureNote: (0, o.slot)(), updateSecureNote: (0, o.slot)(), deleteSecureNote: (0, o.slot)() },
        me = { getAnonymousUserId: (0, o.slot)(), getIsUrlBanished: (0, o.slot)(), arePasswordsProtected: (0, o.slot)() },
        ve = { liveArePasswordsProtected: (0, r.H)() },
        Oe = { toggleDashlane: (0, o.slot)(), updateProtectPasswordsSetting: (0, o.slot)(), updateAutofillSettings: (0, o.slot)() },
        fe = { getSpace: (0, o.slot)(), getSpaces: (0, o.slot)() },
        Ae = { getAutofillProtectionContext: (0, o.slot)() },
        ge = { disableVaultItemProtection: (0, o.slot)() },
        he = {
          getSecret: (0, o.slot)(),
          getSecrets: (0, o.slot)(),
          getSecretsCount: (0, o.slot)(),
          getSecretsPage: (0, o.slot)(),
          getSecretsPaginationToken: (0, o.slot)()
        },
        Te = { liveSecret: (0, r.H)(), liveSecrets: (0, r.H)(), liveSecretsBatch: (0, r.H)(), liveSecretsCount: (0, r.H)() },
        ye = { addSecret: (0, o.slot)(), updateSecret: (0, o.slot)(), deleteSecret: (0, o.slot)() },
        Ce = (0, o.combineEvents)(n, c, _, E, v, w, k, _e, j, H, Q, ae, he, le, me, fe, Ae),
        Ie = (0, o.combineEvents)(i, l, S, O, F, B, Se, W, V, Y, ce, Te, de, ve),
        Ne = (0, o.combineEvents)(a, d, u, p, m, f, G, x, Ee, K, q, ye, ue, pe, Oe, ge);
    },
    918007: (e, t, s) => {
      s.d(t, { J: () => d });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.User }) {}
      class a extends (0, r.g)({ scope: n.F.User }) {}
      var c = s(999059);
      class l extends (0, c.k)({ scope: n.F.Device }) {}
      const d = (0, o.Q)({
        name: "permissions",
        commands: { addGroupManager: i, removeGroupManager: a },
        events: {},
        queries: { userPermissions: l }
      });
    },
    764130: (e, t, s) => {
      s.d(t, { j: () => T });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.User }) {}
      class a extends (0, r.g)({ scope: n.F.User }) {}
      class c extends (0, r.g)({ scope: n.F.User }) {}
      class l extends (0, r.g)({ scope: n.F.User }) {}
      class d extends (0, r.g)({ scope: n.F.User }) {}
      class u extends (0, r.g)({ scope: n.F.User }) {}
      class p extends (0, r.g)({ scope: n.F.Device }) {}
      class _ extends (0, r.g)({ scope: n.F.User }) {}
      class S extends (0, r.g)({ scope: n.F.Device }) {}
      class E extends (0, r.g)({ scope: n.F.Device }) {}
      class m extends (0, r.g)({ scope: n.F.Device }) {}
      class v extends (0, r.g)({ scope: n.F.Device }) {}
      var O = s(999059);
      class f extends (0, O.k)({ scope: n.F.User }) {}
      class A extends (0, O.k)({ scope: n.F.Device }) {}
      class g extends (0, O.k)({ scope: n.F.Device }) {}
      class h extends (0, O.k)({ scope: n.F.User }) {}
      const T = (0, o.Q)({
        name: "accountRecoveryKey",
        commands: {
          goToActivationNextStep: i,
          goToActivationPrevStep: a,
          requestActivation: c,
          cancelActivation: l,
          cancelGeneration: d,
          confirmActivation: u,
          confirmNewPassword: p,
          deactivate: _,
          submitRecoveryKey: S,
          tryAgainRecovery: E,
          cancelRecoveryFlow: m,
          startRecoveryFlow: v
        },
        queries: { activationFlowStatus: f, accountRecoveryKeyStatus: A, recoveryFlowStatus: g, recoveryMethodsInfo: h },
        events: {}
      });
    },
    201705: (e, t, s) => {
      var o, r;
      s.d(t, { F: () => o, G: () => r }),
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
        })(o || (o = {})),
        (function (e) {
          (e[(e.InitRecovery = 0)] = "InitRecovery"),
            (e[(e.IdentityVerification = 1)] = "IdentityVerification"),
            (e[(e.EnterRecoveryKey = 2)] = "EnterRecoveryKey"),
            (e[(e.ChangeMasterPassword = 3)] = "ChangeMasterPassword"),
            (e[(e.Finalising = 4)] = "Finalising"),
            (e[(e.Success = 5)] = "Success"),
            (e[(e.Failure = 6)] = "Failure");
        })(r || (r = {}));
    },
    76485: (e, t, s) => {
      s.d(t, { l: () => l });
      var o = s(486952),
        r = s(999059),
        n = s(125029);
      class i extends (0, r.k)({ scope: n.F.User }) {}
      var a = s(574354);
      class c extends (0, a.g)({ scope: n.F.User }) {}
      const l = (0, o.Q)({ name: "accountReferral", commands: { inviteByEmail: c }, events: {}, queries: { getSharingLink: i } });
    },
    474281: (e, t, s) => {
      s.d(t, { d: () => d });
      var o = s(486952),
        r = s(999059),
        n = s(125029);
      class i extends (0, r.k)({ scope: n.F.Device }) {}
      class a extends (0, r.k)({ scope: n.F.Device }) {}
      var c = s(75456),
        l = s(495843);
      const d = (0, o.Q)({
        name: "deleteOrResetAccount",
        commands: { completeFlow: c.I, initiateFlow: l.O },
        events: {},
        queries: { userAuthenticationMethod: i, isFlowCompleted: a }
      });
    },
    75456: (e, t, s) => {
      s.d(t, { I: () => a, O: () => o });
      var o,
        r = s(574354),
        n = s(125029),
        i = s(807165);
      !(function (e) {
        (e.INVALID_OTP_ALREADY_USED = "INVALID_OTP_ALREADY_USED"),
          (e.INVALID_OTP_BLOCKED = "INVALID_OTP_BLOCKED"),
          (e.VERIFICATION_FAILED = "VERIFICATION_FAILED"),
          (e.ACCOUNT_BLOCKED_CONTACT_SUPPORT = "ACCOUNT_BLOCKED_CONTACT_SUPPORT"),
          (e.VERIFICATION_REQUIRES_REQUEST = "VERIFICATION_REQUIRES_REQUEST"),
          (e.VERIFICATION_TIMEOUT = "VERIFICATION_TIMEOUT");
      })(o || (o = {})),
        i.z.object({ tag: i.z.nativeEnum(o) });
      class a extends (0, r.g)({ scope: n.F.Device }) {}
    },
    495843: (e, t, s) => {
      s.d(t, { O: () => a, U: () => o });
      var o,
        r = s(574354),
        n = s(125029),
        i = s(807165);
      !(function (e) {
        (e.UNKNOWN_USER = "user_not_found"), (e.SSO_BLOCKED = "SSO_BLOCKED");
      })(o || (o = {})),
        i.z.object({ tag: i.z.nativeEnum(o) });
      class a extends (0, r.g)({ scope: n.F.Device }) {}
    },
    385169: (e, t, s) => {
      var o;
      s.d(t, { k: () => o }),
        (function (e) {
          (e.EMAIL = "EMAIL"), (e.TOTP = "TOTP");
        })(o || (o = {}));
    },
    191235: (e, t, s) => {
      s.d(t, { D: () => a });
      var o = s(486952),
        r = s(999059),
        n = s(125029);
      class i extends (0, r.k)({ scope: n.F.Device }) {}
      const a = (0, o.Q)({ name: "overrides", commands: {}, events: {}, queries: { OverridesQuery: i } });
    },
    929986: (e, t, s) => {
      s.d(t, { V: () => i });
      var o = s(486952),
        r = s(228096),
        n = s(575203);
      const i = (0, o.Q)({
        name: "authenticationFlow",
        commands: {
          changeLogin: n.hW,
          changeTwoFactorAuthenticationOtpType: n.eG,
          clearError: n.jq,
          cancelDeviceTransferRequest: n.Yc,
          resendEmailToken: n.Gc,
          resendPushNotification: n.rF,
          sendAccountEmail: n.A,
          sendMasterPassword: n.rT,
          submitBackupCode: n.sH,
          submitEmailToken: n.XH,
          submitTotp: n.ad,
          switchToDashlaneAuthenticator: n.K1,
          switchToEmailToken: n.v5,
          retryWebAuthnAuthentication: n.M6,
          useMasterPassword: n.Cc,
          webAuthnAuthenticationFail: n.O3,
          logout: n.N5,
          lockSession: n.Y$,
          loginViaSSO: n.yv,
          initiateLoginWithSSO: n.Hr,
          initiateAutologinWithSSOCommand: n.x2
        },
        queries: { authenticationFlowStatus: r.DW, getSsoUserSettings: r.Dc, getProviderInfo: r.L2 },
        events: {}
      });
    },
    575203: (e, t, s) => {
      s.d(t, {
        A: () => n,
        Cc: () => O,
        Gc: () => p,
        Hr: () => T,
        K1: () => a,
        M6: () => v,
        N5: () => A,
        O3: () => f,
        XH: () => c,
        Y$: () => g,
        Yc: () => C,
        ad: () => l,
        eG: () => u,
        hW: () => i,
        jq: () => m,
        rF: () => S,
        rT: () => _,
        sH: () => d,
        v5: () => E,
        x2: () => y,
        yv: () => h
      });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.Device }) {}
      class i extends (0, o.g)({ scope: r.F.Device }) {}
      class a extends (0, o.g)({ scope: r.F.Device }) {}
      class c extends (0, o.g)({ scope: r.F.Device }) {}
      class l extends (0, o.g)({ scope: r.F.Device }) {}
      class d extends (0, o.g)({ scope: r.F.Device }) {}
      class u extends (0, o.g)({ scope: r.F.Device }) {}
      class p extends (0, o.g)({ scope: r.F.Device }) {}
      class _ extends (0, o.g)({ scope: r.F.Device }) {}
      class S extends (0, o.g)({ scope: r.F.Device }) {}
      class E extends (0, o.g)({ scope: r.F.Device }) {}
      class m extends (0, o.g)({ scope: r.F.Device }) {}
      class v extends (0, o.g)({ scope: r.F.Device }) {}
      class O extends (0, o.g)({ scope: r.F.Device }) {}
      class f extends (0, o.g)({ scope: r.F.Device }) {}
      class A extends (0, o.g)({ scope: r.F.Device }) {}
      class g extends (0, o.g)({ scope: r.F.Device }) {}
      class h extends (0, o.g)({ scope: r.F.Device }) {}
      class T extends (0, o.g)({ scope: r.F.Device }) {}
      class y extends (0, o.g)({ scope: r.F.Device }) {}
      class C extends (0, o.g)({ scope: r.F.Device }) {}
    },
    228096: (e, t, s) => {
      s.d(t, { DW: () => n, Dc: () => i, L2: () => a });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.Device }) {}
      class i extends (0, o.k)({ scope: r.F.Device }) {}
      class a extends (0, o.k)({ scope: r.F.Device }) {}
    },
    64496: (e, t, s) => {
      var o, r, n;
      s.d(t, { E6: () => r, UY: () => n, ao: () => i, hr: () => o, vX: () => a }),
        (function (e) {
          (e.SSO = "sso"), (e.MP = "master_password");
        })(o || (o = {})),
        (function (e) {
          (e.WaitingForTransferRequest = "WaitingForTransferRequest"),
            (e.DisplayInstructions = "DisplayInstructions"),
            (e.LoadingPassphrase = "LoadingPassphrase"),
            (e.DisplayPassphrase = "DisplayPassphrase"),
            (e.LoadingAccount = "LoadingAccount"),
            (e.Error = "Error"),
            (e.DeviceRegistered = "DeviceRegistered");
        })(r || (r = {})),
        (function (e) {
          (e.GENERIC_ERROR = "GENERIC_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.REQUEST_REJECTED = "REQUEST_REJECTED"),
            (e.ACCOUNT_ERROR = "ACCOUNT_ERROR"),
            (e.RATE_LIMIT = "RATE_LIMIT");
        })(n || (n = {}));
      const i = (e) => Object.values(n).includes(e);
      var a;
      !(function (e) {
        (e[(e.MP_TO_SSO = 0)] = "MP_TO_SSO"),
          (e[(e.MP_TO_SSO_WITH_INFO = 1)] = "MP_TO_SSO_WITH_INFO"),
          (e[(e.SSO_TO_MP = 2)] = "SSO_TO_MP");
      })(a || (a = {}));
    },
    442853: (e, t, s) => {
      s.d(t, { G: () => a });
      var o = s(486952),
        r = s(400319),
        n = s(696782),
        i = s(359463);
      const a = (0, o.Q)({
        name: "deviceRegistration",
        commands: { cleanRemotelyRemovedProfiles: r.L, registerDevice: n.J },
        events: {},
        queries: { localAccounts: i.a }
      });
    },
    400319: (e, t, s) => {
      s.d(t, { L: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.Device }) {}
    },
    696782: (e, t, s) => {
      s.d(t, { J: () => a, Y: () => i });
      var o = s(574354),
        r = s(125029),
        n = s(807165);
      const i = n.z.discriminatedUnion("with", [
        n.z.object({
          with: n.z.literal("token"),
          login: n.z.string(),
          token: n.z.string(),
          deviceName: n.z.optional(n.z.string()),
          ignoreAlreadyRegisteredError: n.z.optional(n.z.boolean())
        }),
        n.z.object({
          with: n.z.literal("authTicket"),
          login: n.z.string(),
          authTicket: n.z.string(),
          deviceName: n.z.optional(n.z.string()),
          ignoreAlreadyRegisteredError: n.z.optional(n.z.boolean())
        })
      ]);
      class a extends (0, o.g)({ scope: r.F.Device }) {}
    },
    359463: (e, t, s) => {
      s.d(t, { a: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.Device }) {}
    },
    406218: (e, t, s) => {
      s.d(t, { F: () => u });
      var o = s(486952),
        r = s(853835),
        n = s(333969),
        i = s(697891),
        a = s(287041),
        c = s(155870),
        l = s(648214),
        d = s(681540);
      const u = (0, o.Q)({
        name: "deviceTransfer",
        commands: {
          refreshRequest: n.V,
          cancelRequest: i.b,
          approveRequest: a.G,
          rejectRequest: c.a,
          submitPassphraseChallenge: l.I,
          returnToDeviceSetupCommand: d.n
        },
        events: {},
        queries: { trustedDeviceFlowStatus: r.N }
      });
    },
    287041: (e, t, s) => {
      s.d(t, { G: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    697891: (e, t, s) => {
      s.d(t, { b: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    333969: (e, t, s) => {
      s.d(t, { V: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    155870: (e, t, s) => {
      s.d(t, { a: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    681540: (e, t, s) => {
      s.d(t, { n: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    648214: (e, t, s) => {
      s.d(t, { I: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    853835: (e, t, s) => {
      s.d(t, { N: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.Device }) {}
    },
    870486: (e, t, s) => {
      var o, r;
      s.d(t, { S: () => o, T: () => r }),
        (function (e) {
          (e.GENERIC_ERROR = "GENERIC_ERROR"),
            (e.INVALID_PASSPHRASE = "INVALID_PASSPHRASE"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.PASSPHRASE_ATTEMPTS_LIMIT = "PASSPHRASE_ATTEMPTS_LIMIT");
        })(o || (o = {})),
        (function (e) {
          (e[(e.WaitingForNewDeviceRequest = 0)] = "WaitingForNewDeviceRequest"),
            (e[(e.NewDeviceRequestAvailable = 1)] = "NewDeviceRequestAvailable"),
            (e[(e.DisplayPassphraseChallenge = 2)] = "DisplayPassphraseChallenge"),
            (e[(e.DeviceTransferComplete = 3)] = "DeviceTransferComplete"),
            (e[(e.LoadingChallenge = 4)] = "LoadingChallenge"),
            (e[(e.DeviceTransferRejected = 5)] = "DeviceTransferRejected"),
            (e[(e.Error = 6)] = "Error");
        })(r || (r = {}));
    },
    611433: (e, t, s) => {
      s.d(t, { i: () => a });
      var o = s(486952),
        r = s(441025),
        n = s(313744),
        i = s(613089);
      const a = (0, o.Q)({
        name: "identityVerificationFlow",
        commands: {
          changeTwoFactorAuthenticationOtpType: n.eG,
          clearError: n.$5,
          resendEmailToken: n.Gc,
          resendPushNotification: n.rF,
          submitBackupCode: n.sH,
          submitEmailToken: n.XH,
          submitTotp: n.ad,
          switchToDashlaneAuthenticator: n.K1,
          switchToEmailToken: n.v5,
          startIdentityVerification: n.qw,
          cancelIdentityVerification: n.Vs
        },
        queries: { identityVerificationFlowStatus: r.O },
        events: { identityVerificationCompleted: i.w }
      });
    },
    313744: (e, t, s) => {
      s.d(t, {
        $5: () => i,
        Gc: () => a,
        K1: () => p,
        Vs: () => E,
        XH: () => l,
        ad: () => u,
        eG: () => n,
        qw: () => S,
        rF: () => c,
        sH: () => d,
        v5: () => _
      });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.Device }) {}
      class i extends (0, o.g)({ scope: r.F.Device }) {}
      class a extends (0, o.g)({ scope: r.F.Device }) {}
      class c extends (0, o.g)({ scope: r.F.Device }) {}
      class l extends (0, o.g)({ scope: r.F.Device }) {}
      class d extends (0, o.g)({ scope: r.F.Device }) {}
      class u extends (0, o.g)({ scope: r.F.Device }) {}
      class p extends (0, o.g)({ scope: r.F.Device }) {}
      class _ extends (0, o.g)({ scope: r.F.Device }) {}
      class S extends (0, o.g)({ scope: r.F.Device }) {}
      class E extends (0, o.g)({ scope: r.F.Device }) {}
    },
    613089: (e, t, s) => {
      s.d(t, { w: () => n });
      var o = s(188885),
        r = s(125029);
      class n extends (0, o.d)({ scope: r.F.Device }) {}
    },
    441025: (e, t, s) => {
      s.d(t, { O: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.Device }) {}
    },
    796591: (e, t, s) => {
      s.r(t),
        s.d(t, {
          AuthenticationFlowContracts: () => o,
          CleanRemotelyRemovedProfilesCommand: () => b.L,
          DeviceRegistrationClient: () => M,
          DeviceTransferContracts: () => n,
          IdentityVerificationFlowContracts: () => r,
          LocalAccountsQuery: () => U.a,
          RegisterDeviceCommand: () => D.J,
          Request2FaCodesByPhoneCommand: () => R.x,
          Request2FaCodesByPhoneErrorCodes: () => m,
          ValidateWebauthnAssertionCommand: () => R.L,
          deviceRegistrationApi: () => P.G,
          registrationSchema: () => D.Y,
          userVerificationApi: () => N.M
        });
      var o = {};
      s.r(o),
        s.d(o, {
          AuthenticationFlowClient: () => u,
          AuthenticationFlowStatusQuery: () => c.DW,
          CancelDeviceTransferRequestCommand: () => a.Yc,
          ChangeAccountEmailCommand: () => a.hW,
          ChangeTwoFactorAuthenticationOtpTypeCommand: () => a.eG,
          ClearErrorCommand: () => a.jq,
          DeviceToDeviceAuthenticationErrors: () => l.UY,
          DeviceToDeviceAuthenticationFlowStep: () => l.E6,
          GetSsoProviderInfoQuery: () => c.L2,
          GetSsoUserSettingsQuery: () => c.Dc,
          InitiateAutologinWithSSOCommand: () => a.x2,
          InitiateLoginWithSSOCommand: () => a.Hr,
          LockCommand: () => a.Y$,
          LoginViaSSOCommand: () => a.yv,
          LogoutCommand: () => a.N5,
          ResendEmailTokenCommand: () => a.Gc,
          ResendPushNotificationCommand: () => a.rF,
          RetryWebAuthnAuthenticationCommand: () => a.M6,
          SSOMigrationType: () => l.vX,
          SendAccountEmailCommand: () => a.A,
          SendMasterPasswordCommand: () => a.rT,
          SsoMigrationServerMethod: () => l.hr,
          SubmitBackupCodeCommand: () => a.sH,
          SubmitEmailTokenCommand: () => a.XH,
          SubmitTotpCommand: () => a.ad,
          SwitchToDashlaneAuthenticatorCommand: () => a.K1,
          SwitchToEmailTokenCommand: () => a.v5,
          UseMasterPasswordCommand: () => a.Cc,
          WebAuthnAuthenticationFailCommand: () => a.O3,
          authenticationFlowApi: () => i.V,
          isDeviceToDeviceAuthenticationError: () => l.ao
        });
      var r = {};
      s.r(r),
        s.d(r, {
          CancelIdentityVerificationCommand: () => _.Vs,
          ChangeTwoFactorAuthenticationOtpTypeCommand: () => _.eG,
          ClearIdentityVerificationErrorCommand: () => _.$5,
          IdentityVerificationClient: () => E,
          IdentityVerificationCompletedEvent: () => v.w,
          IdentityVerificationFlowStatusQuery: () => S.O,
          ResendEmailTokenCommand: () => _.Gc,
          ResendPushNotificationCommand: () => _.rF,
          StartIdentityVerificationCommand: () => _.qw,
          SubmitBackupCodeCommand: () => _.sH,
          SubmitEmailTokenCommand: () => _.XH,
          SubmitTotpCommand: () => _.ad,
          SwitchToDashlaneAuthenticatorCommand: () => _.K1,
          SwitchToEmailTokenCommand: () => _.v5,
          identityVerificationFlowApi: () => p.i
        });
      var n = {};
      s.r(n),
        s.d(n, {
          ApproveDeviceTransferRequestCommand: () => A.G,
          CancelRequestCommand: () => T.b,
          RefreshRequestCommand: () => f.V,
          RejectDeviceTransferRequestCommand: () => g.a,
          ReturnToDeviceSetupCommand: () => y.n,
          SubmitPassphraseChallengeCommand: () => h.I,
          TrustedDeviceFlowErrors: () => I.S,
          TrustedDeviceFlowStatusQuery: () => C.N,
          TrustedDeviceFlowStep: () => I.T,
          deviceTransferApi: () => O.F
        });
      var i = s(929986),
        a = s(575203),
        c = s(228096),
        l = s(64496),
        d = s(767837);
      class u extends (0, d.E)(i.V) {}
      (0, d.K)(i.V, u);
      var p = s(611433),
        _ = s(313744),
        S = s(441025);
      class E extends (0, d.E)(p.i) {}
      (0, d.K)(p.i, E);
      var m,
        v = s(613089),
        O = s(406218),
        f = s(333969),
        A = s(287041),
        g = s(155870),
        h = s(648214),
        T = s(697891),
        y = s(681540),
        C = s(853835),
        I = s(870486),
        N = s(69401),
        R = s(611088);
      !(function (e) {
        (e.AccountNotEligible = "AccountNotEligible"), (e.NetworkError = "NetworkError");
      })(m || (m = {}));
      var P = s(442853),
        b = s(400319),
        D = s(696782),
        U = s(359463);
      class M extends (0, d.E)(P.G) {}
      (0, d.K)(P.G, M);
    },
    69401: (e, t, s) => {
      s.d(t, { M: () => n });
      var o = s(486952),
        r = s(611088);
      const n = (0, o.Q)({
        name: "userVerification",
        commands: { validateWebauthnAssertion: r.L, request2FaCodesByPhone: r.x },
        queries: {},
        events: {}
      });
    },
    611088: (e, t, s) => {
      s.d(t, { L: () => n, x: () => i });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
      class i extends (0, o.g)({ scope: r.F.Device }) {}
    },
    715403: (e, t, s) => {
      s.d(t, { c: () => o });
      const o = (0, s(486952).Q)({ name: "autofillData", commands: {}, events: {}, queries: {} });
    },
    592018: (e, t, s) => {
      s.d(t, { Y: () => i });
      var o = s(486952),
        r = s(111564),
        n = s(873581);
      const i = (0, o.Q)({
        name: "autofillTracking",
        commands: { temporaryEmitPasswordAutofillPerformedEvent: n.q },
        events: { passwordAutofillPerformedEvent: r.p },
        queries: {}
      });
    },
    873581: (e, t, s) => {
      s.d(t, { q: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    111564: (e, t, s) => {
      s.d(t, { p: () => n });
      var o = s(188885),
        r = s(125029);
      class n extends (0, o.d)({ scope: r.F.User }) {}
    },
    249360: (e, t, s) => {
      s.r(t),
        s.d(t, {
          AddDisabledSourceTypesCommand: () => M.g,
          AnalysisStatus: () => b._,
          CREDENTIAL_DATA_MODELS: () => _,
          CountriesForAutofill: () => a,
          DisableAnalysisCommand: () => L.u,
          DisableAutofillOnFormsCommand: () => F.t,
          DisableAutofillOnLoginsCommand: () => G.f,
          DisableAutologinCommand: () => w.T,
          DisableFollowUpNotificationCommand: () => k.y,
          DisablePhishingPreventionForUrlCommand: () => R.z,
          EnableAnalysisCommand: () => B.c,
          EnableAutofillOnFormsCommand: () => j.a,
          EnableAutofillOnLoginsCommand: () => W.I,
          EnableAutologinCommand: () => x.i,
          EnableFollowUpNotificationCommand: () => K.B,
          FORM_DATA_MODELS: () => p,
          GetAnalysisStatusOnUrlQuery: () => b.h,
          GetAutofillDisabledOnLoginsAndFormsNotificationStatusQuery: () => h.z,
          GetAutofillProtectionContextQuery: () => y.u,
          GetAutofillSettingsQuery: () => D.T,
          GetDashlaneDefinedLinkedWebsitesQuery: () => q.J,
          GetUserAutofillCorrectionsQuery: () => U.w,
          OtherSourceType: () => l,
          PasswordAutofillPerformedEvent: () => n.p,
          PhishingPreventionDisabledForUrlQuery: () => I.v,
          PhishingPreventionEnabledQuery: () => C.i,
          RemoveDisabledSourceTypesCommand: () => H.v,
          ResetProtectedItemAutofillTimerCommand: () => N.y,
          SetAutofillDisabledOnLoginsAndFormsNotificationStatusCommand: () => g.a,
          SetUserAutofillCorrectionsCommand: () => Q.S,
          TemporaryEmitPasswordAutofillPerformedEventCommand: () => i.q,
          ToggleDashlaneCommand: () => V.r,
          UpdateLinkedWebsitesCommand: () => z.A,
          VaultItemDisableProtectionMode: () => f,
          VaultSourceType: () => c,
          autofillDataApi: () => o.c,
          autofillNotificationsApi: () => A._,
          autofillSecurityApi: () => T.V,
          autofillSettingsApi: () => P.I,
          autofillTrackingApi: () => r.Y,
          isArrayOfAutofillableDataModel: () => m,
          isArrayOfUserAutofillCorrections: () => v,
          isAutofillableDataModel: () => E,
          isDashlaneDisabledPermanently: () => O,
          isOtherSourceType: () => d,
          isVaultSourceType: () => u,
          linkedWebsitesApi: () => Y.G
        });
      var o = s(715403),
        r = s(592018),
        n = s(111564),
        i = s(873581);
      const a = Object.freeze({
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
      var c, l;
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
        })(l || (l = {}));
      const d = (e) => Object.values(l).includes(e),
        u = (e) => e in c,
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
        _ = ["KWAuthentifiant", "KWGeneratedPassword", "KWPasskey"],
        S = [...p, ..._],
        E = (e) => !!e && "string" == typeof e && S.includes(e),
        m = (e) => !!e && "object" == typeof e && Array.isArray(e) && e.every(E),
        v = (e) =>
          e instanceof Array &&
          !e.find((e) => {
            return !("object" == typeof (t = e) && null !== t && "id" in t && "fieldIdentifier" in t && "domain" in t);
            var t;
          }),
        O = (e) => "none" === e.correctedDataSource;
      var f;
      !(function (e) {
        (e[(e.CannotDisable = 0)] = "CannotDisable"),
          (e[(e.DisableSpecificVaultItem = 1)] = "DisableSpecificVaultItem"),
          (e[(e.DisableGeneralSetting = 2)] = "DisableGeneralSetting");
      })(f || (f = {}));
      var A = s(845714),
        g = s(261933),
        h = s(863208),
        T = s(238554),
        y = s(651730),
        C = s(705282),
        I = s(563212),
        N = s(993555),
        R = s(494370),
        P = s(569029),
        b = s(168573),
        D = s(263267),
        U = s(803414),
        M = s(299682),
        L = s(903909),
        w = s(434962),
        F = s(865791),
        G = s(856e3),
        k = s(811232),
        B = s(554405),
        x = s(504924),
        j = s(138018),
        W = s(569643),
        K = s(382796),
        H = s(446918),
        V = s(850163),
        Q = s(629641),
        Y = s(846097),
        q = s(666608),
        z = s(909446);
    },
    846097: (e, t, s) => {
      s.d(t, { G: () => i });
      var o = s(486952),
        r = s(666608),
        n = s(909446);
      const i = (0, o.Q)({
        name: "linkedWebsites",
        commands: { updateLinkedWebsites: n.A },
        events: {},
        queries: { getDashlaneDefinedLinkedWebsites: r.J }
      });
    },
    909446: (e, t, s) => {
      s.d(t, { A: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    666608: (e, t, s) => {
      s.d(t, { J: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    845714: (e, t, s) => {
      s.d(t, { _: () => i });
      var o = s(486952),
        r = s(261933),
        n = s(863208);
      const i = (0, o.Q)({
        name: "autofillNotifications",
        commands: { setAutofillDisabledOnLoginsAndFormsNotificationStatus: r.a },
        events: {},
        queries: { getAutofillDisabledOnLoginsAndFormsNotificationStatus: n.z }
      });
    },
    261933: (e, t, s) => {
      s.d(t, { a: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    863208: (e, t, s) => {
      s.d(t, { z: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    238554: (e, t, s) => {
      s.d(t, { V: () => l });
      var o = s(486952),
        r = s(651730),
        n = s(705282),
        i = s(563212),
        a = s(494370),
        c = s(993555);
      const l = (0, o.Q)({
        name: "autofillSecurity",
        commands: { disablePhishingPreventionForUrl: a.z, resetProtectedItemAutofillTimer: c.y },
        events: {},
        queries: { getAutofillProtectionContext: r.u, isPhishingPreventionCapabilityEnabled: n.i, isPhishingPreventionDisabledForUrl: i.v }
      });
    },
    494370: (e, t, s) => {
      s.d(t, { z: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    993555: (e, t, s) => {
      s.d(t, { y: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.Device }) {}
    },
    651730: (e, t, s) => {
      s.d(t, { u: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    705282: (e, t, s) => {
      s.d(t, { i: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    563212: (e, t, s) => {
      s.d(t, { v: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    569029: (e, t, s) => {
      s.d(t, { I: () => g });
      var o = s(486952),
        r = s(446918),
        n = s(299682),
        i = s(850163),
        a = s(168573),
        c = s(263267),
        l = s(803414),
        d = s(554405),
        u = s(504924),
        p = s(138018),
        _ = s(569643),
        S = s(382796),
        E = s(903909),
        m = s(434962),
        v = s(865791),
        O = s(856e3),
        f = s(811232),
        A = s(629641);
      const g = (0, o.Q)({
        name: "autofillSettings",
        commands: {
          toggleDashlane: i.r,
          enableAnalysis: d.c,
          enableAutologin: u.i,
          enableAutofillOnForms: p.a,
          enableAutofillOnLogins: _.I,
          enableFollowUpNotification: S.B,
          disableAnalysis: E.u,
          disableAutologin: m.T,
          disableAutofillOnForms: v.t,
          disableAutofillOnLogins: O.f,
          disableFollowUpNotification: f.y,
          addDisabledSourceTypes: n.g,
          removeDisabledSourceTypes: r.v,
          setUserAutofillCorrections: A.S
        },
        events: {},
        queries: { getAnalysisStatusOnUrl: a.h, getAutofillSettings: c.T, getUserAutofillCorrections: l.w }
      });
    },
    299682: (e, t, s) => {
      s.d(t, { g: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    903909: (e, t, s) => {
      s.d(t, { u: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    865791: (e, t, s) => {
      s.d(t, { t: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    856e3: (e, t, s) => {
      s.d(t, { f: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    434962: (e, t, s) => {
      s.d(t, { T: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    811232: (e, t, s) => {
      s.d(t, { y: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    554405: (e, t, s) => {
      s.d(t, { c: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    138018: (e, t, s) => {
      s.d(t, { a: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    569643: (e, t, s) => {
      s.d(t, { I: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    504924: (e, t, s) => {
      s.d(t, { i: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    382796: (e, t, s) => {
      s.d(t, { B: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    446918: (e, t, s) => {
      s.d(t, { v: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    629641: (e, t, s) => {
      s.d(t, { S: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    850163: (e, t, s) => {
      s.d(t, { r: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    168573: (e, t, s) => {
      s.d(t, { _: () => o, h: () => i });
      var o,
        r = s(999059),
        n = s(125029);
      !(function (e) {
        (e.ANALYSIS_ENABLED = "ANALYSIS_ENABLED"),
          (e.ANALYSIS_DISABLED_BY_USER = "ANALYSIS_DISABLED_BY_USER"),
          (e.ANALYSIS_DISABLED_BY_B2B_ADMIN = "ANALYSIS_DISABLED_BY_B2B_ADMIN"),
          (e.ANALYSIS_DISABLED_BY_KILLSWITCH = "ANALYSIS_DISABLED_BY_KILLSWITCH"),
          (e.ANALYSIS_DISABLED_BY_2FA_ENFORCEMENT = "ANALYSIS_DISABLED_BY_2FA_ENFORCEMENT");
      })(o || (o = {}));
      class i extends (0, r.k)({ scope: n.F.Device }) {}
    },
    263267: (e, t, s) => {
      s.d(t, { T: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    803414: (e, t, s) => {
      s.d(t, { w: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    992137: (e, t, s) => {
      s.r(t),
        s.d(t, {
          DismissMasterPasswordNotificationCommand: () => r.T,
          IsMasterPasswordLeakedQuery: () => c.B,
          IsMasterPasswordNotificationDismissedQuery: () => l.F,
          IsMasterPasswordWeakQuery: () => d.D,
          TemporaryCheckMasterPasswordCommand: () => n.T,
          TemporaryCheckMasterPasswordWeakCommand: () => a.B,
          TemporaryResetMasterPasswordLeakedCommand: () => i.j,
          masterPasswordSecurityApi: () => o.J
        });
      var o = s(575962),
        r = s(480673),
        n = s(888030),
        i = s(130600),
        a = s(705105),
        c = s(422730),
        l = s(823913),
        d = s(886695);
    },
    575962: (e, t, s) => {
      s.d(t, { J: () => u });
      var o = s(486952),
        r = s(480673),
        n = s(888030),
        i = s(130600),
        a = s(705105),
        c = s(422730),
        l = s(886695),
        d = s(823913);
      const u = (0, o.Q)({
        name: "masterPasswordSecurity",
        commands: {
          dismissMasterPasswordNotification: r.T,
          temporaryCheckMasterPassword: n.T,
          temporaryResetMasterPasswordLeaked: i.j,
          temporaryCheckMasterPasswordWeak: a.B
        },
        events: {},
        queries: { isMasterPasswordLeaked: c.B, isMasterPasswordWeak: l.D, isMasterPasswordNotificationDismissed: d.F }
      });
    },
    480673: (e, t, s) => {
      s.d(t, { T: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    705105: (e, t, s) => {
      s.d(t, { B: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    888030: (e, t, s) => {
      s.d(t, { T: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    130600: (e, t, s) => {
      s.d(t, { j: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    422730: (e, t, s) => {
      s.d(t, { B: () => r });
      var o = s(999059);
      class r extends (0, o.k)() {}
    },
    823913: (e, t, s) => {
      s.d(t, { F: () => r });
      var o = s(999059);
      class r extends (0, o.k)() {}
    },
    886695: (e, t, s) => {
      s.d(t, { D: () => r });
      var o = s(999059);
      class r extends (0, o.k)() {}
    },
    885575: (e, t, s) => {
      s.d(t, { B: () => l });
      var o,
        r = s(486952),
        n = s(999059),
        i = s(125029);
      class a extends (0, n.k)({ scope: i.F.User }) {}
      !(function (e) {
        (e.DEFAULT = "default"),
          (e.TRIAL_EXPIRED = "trial_expired"),
          (e.WEB_STORE = "web_store"),
          (e.DASHBOARD_UPGRADE = "dashboard_upgrade"),
          (e.SHARING_CENTER_FAMILY = "sharing_center_family"),
          (e.SHARING_CENTER_WORK = "sharing_center_work");
      })(o || (o = {}));
      class c extends (0, n.k)({ scope: i.F.User }) {}
      const l = (0, r.Q)({ name: "notifications", commands: {}, events: {}, queries: { GetPlanPricingQuery: a, GetUserMessagesQuery: c } });
    },
    85176: (e, t, s) => {
      s.d(t, { U: () => _ });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.User }) {}
      class a extends (0, r.g)({ scope: n.F.User }) {}
      var c = s(999059);
      class l extends (0, c.k)({ scope: n.F.User }) {}
      class d extends (0, c.k)({ scope: n.F.User }) {}
      class u extends (0, c.k)() {}
      class p extends (0, c.k)() {}
      const _ = (0, o.Q)({
        name: "getStarted",
        commands: { dismissGetStarted: i, markAdminConsoleOpened: a },
        events: {},
        queries: { hasCompletedAutofillTutorial: l, hasCompletedCredentialTutorial: d, hasOpenedAdminConsole: u, isGetStartedDismissed: p }
      });
    },
    908122: (e, t, s) => {
      s.d(t, { J: () => i });
      var o = s(486952),
        r = s(447010),
        n = s(76107);
      const i = (0, o.Q)({
        name: "antiphishing",
        commands: { addAutoRedirectedDomain: n.A },
        events: {},
        queries: { isAutoRedirectedDomain: r.U }
      });
    },
    76107: (e, t, s) => {
      s.d(t, { A: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    447010: (e, t, s) => {
      s.d(t, { U: () => r });
      var o = s(999059);
      class r extends (0, o.k)() {}
    },
    571450: (e, t, s) => {
      s.d(t, { H: () => c });
      var o = s(486952),
        r = s(826254),
        n = s(991619),
        i = s(430240),
        a = s(360135);
      const c = (0, o.Q)({
        name: "breaches",
        commands: { dismissBreach: r.n, markBreachAsSeen: n.Q },
        events: {},
        queries: { breach: i.i, unreadBreachesCount: a.L }
      });
    },
    826254: (e, t, s) => {
      s.d(t, { n: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    991619: (e, t, s) => {
      s.d(t, { Q: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    430240: (e, t, s) => {
      s.d(t, { i: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    360135: (e, t, s) => {
      s.d(t, { L: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    496248: (e, t, s) => {
      s.d(t, { M: () => l });
      var o = s(486952),
        r = s(409310),
        n = s(21444),
        i = s(894814),
        a = s(409062),
        c = s(736214);
      const l = (0, o.Q)({
        name: "emailMonitoring",
        commands: { dismissOnboardingNotification: r.n, optinEmail: n.P5, optoutEmail: i.Lc },
        events: {},
        queries: { emailList: a.dB, onboardingNotificationState: c.p }
      });
    },
    409310: (e, t, s) => {
      s.d(t, { n: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    21444: (e, t, s) => {
      s.d(t, { Dq: () => i, NM: () => d, Ox: () => c, P5: () => p, XX: () => a, l2: () => l, vc: () => u });
      var o = s(574354),
        r = s(125029),
        n = s(996168);
      const i = "OK";
      var a;
      !(function (e) {
        (e.INVALID_EMAIL = "EMAIL_IS_INVALID"),
          (e.ALREADY_SUBSCRIBED = "USER_HAS_ALREADY_AN_ACTIVE_SUBSCRIPTION"),
          (e.TOO_MANY_SUBSCRIPTIONS = "USER_HAS_TOO_MANY_SUBSCRIPTIONS"),
          (e.GENERIC_ERROR = "GENERIC_ERROR");
      })(a || (a = {}));
      class c extends (0, n.Hu)(a.INVALID_EMAIL, "") {}
      class l extends (0, n.Hu)(a.ALREADY_SUBSCRIBED, "") {}
      class d extends (0, n.Hu)(a.TOO_MANY_SUBSCRIPTIONS, "") {}
      class u extends (0, n.Hu)(a.GENERIC_ERROR, "") {}
      class p extends (0, o.g)({ scope: r.F.User }) {}
    },
    894814: (e, t, s) => {
      s.d(t, { KP: () => a, Lc: () => u, QS: () => i, h1: () => l, uD: () => c, v4: () => d });
      var o = s(574354),
        r = s(125029),
        n = s(996168);
      const i = "OK";
      var a;
      !(function (e) {
        (e.INVALID_EMAIL = "EMAIL_IS_INVALID"), (e.NO_SUBSCRIPTION = "USER_HAS_NO_SUBSCRIPTION"), (e.GENERIC_ERROR = "GENERIC_ERROR");
      })(a || (a = {}));
      class c extends (0, n.Hu)(a.INVALID_EMAIL, "") {}
      class l extends (0, n.Hu)(a.NO_SUBSCRIPTION, "") {}
      class d extends (0, n.Hu)(a.GENERIC_ERROR, "") {}
      class u extends (0, o.g)({ scope: r.F.User }) {}
    },
    657255: (e, t, s) => {
      var o;
      function r(e) {
        return "UNKNOWN" === e || "SEEN" === e || "NOT_SEEN" === e;
      }
      s.d(t, { M: () => o, U: () => r }),
        (function (e) {
          (e.UNKNOWN = "UNKNOWN"), (e.SEEN = "SEEN"), (e.NOT_SEEN = "NOT_SEEN");
        })(o || (o = {}));
    },
    409062: (e, t, s) => {
      s.d(t, { a2: () => n, dB: () => i, wp: () => o });
      var o,
        r = s(999059);
      function n(e) {
        return "pending" === e || "active" === e || "disabled" === e;
      }
      !(function (e) {
        (e.PENDING = "pending"), (e.ACTIVE = "active"), (e.DISABLED = "disabled");
      })(o || (o = {}));
      class i extends (0, r.k)() {}
    },
    736214: (e, t, s) => {
      s.d(t, { p: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    78095: (e, t, s) => {
      s.r(t),
        s.d(t, {
          AddAutoRedirectedDomainCommand: () => U.A,
          BreachLeakedDataType: () => r,
          BreachQuery: () => E.i,
          BreachState: () => o,
          CompromisedCredentialsIdsForBreachQuery: () => T.A,
          CompromisedCredentialsQuery: () => g.v,
          CorruptionDataSeverity: () => R.bp,
          CorruptionDataStrength: () => R.ub,
          CredentialHealthDataQuery: () => O.w,
          DarkWebOnboardingState: () => u.M,
          DataLeaksEmailStatus: () => l.wp,
          DismissBreachCommand: () => _.n,
          DismissOnboardingNotificationCommand: () => i.n,
          EmailsListQuery: () => l.dB,
          FilterCredentialsQuery: () => A.Q,
          HealthFilter: () => R._x,
          IsAutoRedirectedDomainQuery: () => D.U,
          MarkBreachAsSeenCommand: () => S.Q,
          OnboardingNotificationStateQuery: () => d.p,
          OptinAlreadySubscribedError: () => a.l2,
          OptinDataLeaksResultErrorCode: () => a.XX,
          OptinDataLeaksResultOkCode: () => a.Dq,
          OptinEmailCommand: () => a.P5,
          OptinGenericError: () => a.vc,
          OptinInvalidEmailError: () => a.Ox,
          OptinTooManySubscriptionsError: () => a.NM,
          OptoutDataLeaksResultErrorCode: () => c.KP,
          OptoutDataLeaksResultOkCode: () => c.QS,
          OptoutEmailCommand: () => c.Lc,
          OptoutGenericError: () => c.v4,
          OptoutInvalidEmailError: () => c.uD,
          OptoutNoSubscriptionError: () => c.h1,
          OtpCodeForSecretOrUrlGenerationError: () => w.k,
          OtpCodeForSecretOrUrlQuery: () => w.S,
          OtpCodeGenerationError: () => L.c,
          OtpCodeQuery: () => L.J,
          PasswordHealthComputationFinishedEvent: () => N.w,
          PasswordHealthReportQuery: () => h.b,
          RecalculatePasswordHealthCommand: () => I.t,
          RiskType: () => R.gI,
          ScoreForPasswordQuery: () => y.c,
          ScoreQuery: () => f.e,
          UnreadBreachesCountQuery: () => m.L,
          UpdateIsCredentialExcludedCommand: () => C.v,
          antiphishingApi: () => b.J,
          breachesApi: () => p.H,
          emailMonitoringApi: () => n.M,
          isDarkWebOnboardingState: () => u.U,
          isDataLeaksEmailStatus: () => l.a2,
          otpApi: () => M.i,
          passwordHealthApi: () => v.d,
          vaultReportApi: () => P.f
        });
      var o,
        r,
        n = s(496248),
        i = s(409310),
        a = s(21444),
        c = s(894814),
        l = s(409062),
        d = s(736214),
        u = s(657255),
        p = s(571450),
        _ = s(826254),
        S = s(991619),
        E = s(430240),
        m = s(360135);
      !(function (e) {
        (e.PENDING = "PENDING"), (e.VIEWED = "VIEWED"), (e.ACKNOWLEDGED = "ACKNOWLEDGED");
      })(o || (o = {})),
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
        })(r || (r = {}));
      var v = s(157668),
        O = s(299097),
        f = s(375787),
        A = s(953489),
        g = s(465796),
        h = s(807466),
        T = s(832069),
        y = s(905998),
        C = s(876687),
        I = s(45806),
        N = s(125547),
        R = s(504253),
        P = s(593856),
        b = s(908122),
        D = s(447010),
        U = s(76107),
        M = s(690056),
        L = s(325619),
        w = s(5158);
    },
    690056: (e, t, s) => {
      s.d(t, { i: () => i });
      var o = s(486952),
        r = s(325619),
        n = s(5158);
      const i = (0, o.Q)({ name: "otp", commands: {}, events: {}, queries: { otpCode: r.J, otpCodeForSecretOrUrl: n.S } });
    },
    325619: (e, t, s) => {
      s.d(t, { J: () => a, c: () => i });
      var o = s(999059),
        r = s(125029),
        n = s(996168);
      class i extends (0, n.Hu)("Cannot generate OTP code due to no OtpSecret or OtpUrl found for credential", "") {}
      class a extends (0, o.k)({ scope: r.F.User }) {}
    },
    5158: (e, t, s) => {
      s.d(t, { S: () => a, k: () => i });
      var o = s(999059),
        r = s(125029),
        n = s(996168);
      class i extends (0, n.Hu)("Cannot generate OTP code for secret or url", "") {}
      class a extends (0, o.k)({ scope: r.F.User }) {}
    },
    157668: (e, t, s) => {
      s.d(t, { d: () => S });
      var o = s(486952),
        r = s(876687),
        n = s(45806),
        i = s(125547),
        a = s(299097),
        c = s(953489),
        l = s(375787),
        d = s(465796),
        u = s(832069),
        p = s(807466),
        _ = s(905998);
      const S = (0, o.Q)({
        name: "passwordHealth",
        commands: { updateIsCredentialExcluded: r.v, recalculatePasswordHealth: n.t },
        events: { passwordHealthComputationFinished: i.w },
        queries: {
          credentialHealthData: a.w,
          filterCredentials: c.Q,
          score: l.e,
          compromisedCredentials: d.v,
          compromisedCredentialsIdsForBreach: u.A,
          passwordHealthReport: p.b,
          scoreForPassword: _.c
        }
      });
    },
    876687: (e, t, s) => {
      s.d(t, { v: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    45806: (e, t, s) => {
      s.d(t, { t: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    125547: (e, t, s) => {
      s.d(t, { w: () => n });
      var o = s(188885),
        r = s(125029);
      class n extends (0, o.d)({ scope: r.F.User }) {}
    },
    504253: (e, t, s) => {
      var o, r, n, i;
      s.d(t, { _x: () => r, bp: () => i, gI: () => o, ub: () => n }),
        (function (e) {
          (e.Weak = "weak"), (e.Reused = "reused"), (e.Compromised = "compromised"), (e.Excluded = "excluded");
        })(o || (o = {})),
        (function (e) {
          (e.All = "all"), (e.Weak = "weak"), (e.Reused = "reused"), (e.Compromised = "compromised"), (e.Excluded = "excluded");
        })(r || (r = {})),
        (function (e) {
          (e.WEAK = "weak"), (e.EXTREMELY_WEAK = "extremely_weak");
        })(n || (n = {})),
        (function (e) {
          (e.COMMON = "common"), (e.STRONG = "strong");
        })(i || (i = {}));
    },
    832069: (e, t, s) => {
      s.d(t, { A: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    465796: (e, t, s) => {
      s.d(t, { v: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    299097: (e, t, s) => {
      s.d(t, { w: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    953489: (e, t, s) => {
      s.d(t, { Q: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    807466: (e, t, s) => {
      s.d(t, { b: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    905998: (e, t, s) => {
      s.d(t, { c: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    375787: (e, t, s) => {
      s.d(t, { e: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    593856: (e, t, s) => {
      s.d(t, { f: () => o });
      const o = (0, s(486952).Q)({ name: "vaultReport", commands: {}, events: {}, queries: {} });
    },
    571669: (e, t, s) => {
      s.d(t, { y: () => l });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.User }) {}
      var a = s(999059);
      class c extends (0, a.k)({ scope: n.F.User }) {}
      const l = (0, o.Q)({ name: "userConsents", commands: { UpdateConsentsCommand: i }, events: {}, queries: { getConsents: c } });
    },
    589193: (e, t, s) => {
      s.d(t, { g: () => n });
      var o = s(486952),
        r = s(798976);
      const n = (0, o.Q)({ name: "activityLogs", commands: { storeActivityLogs: r.M }, events: {}, queries: {} });
    },
    798976: (e, t, s) => {
      s.d(t, { M: () => i, W: () => o });
      var o,
        r = s(574354),
        n = s(125029);
      !(function (e) {
        (e.AUDIT_LOG_MISSING_JSON_SCHEMA = "AUDIT_LOG_MISSING_JSON_SCHEMA"),
          (e.AUDIT_LOG_INVALID_JSON_FOR_JSON_SCHEMA = "AUDIT_LOG_INVALID_JSON_FOR_JSON_SCHEMA"),
          (e.AUDIT_LOG_INVALID_LOG_SCHEMA_TYPE_OR_VERSION = "AUDIT_LOG_INVALID_LOG_SCHEMA_TYPE_OR_VERSION"),
          (e.AUDIT_LOG_ERROR_READING_JSON_SCHEMA = "AUDIT_LOG_ERROR_READING_JSON_SCHEMA"),
          (e.STORING_SENSITIVE_AUDIT_LOGS_NOT_ALLOWED = "STORING_SENSITIVE_AUDIT_LOGS_NOT_ALLOWED");
      })(o || (o = {}));
      class i extends (0, r.g)({ scope: n.F.User }) {}
    },
    755920: (e, t, s) => {
      var o, r;
      s.d(t, { p: () => r, z: () => o }),
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
            (e.UserAddedCredentialToCollection = "user_added_credential_to_collection"),
            (e.UserCreatedCollection = "user_created_collection"),
            (e.UserDeletedCollection = "user_deleted_collection"),
            (e.UserImportedCollection = "user_imported_collection"),
            (e.UserRemovedCredentialFromCollection = "user_removed_credential_from_collection"),
            (e.UserRenamedCollection = "user_renamed_collection"),
            (e.UserSharedCollectionWithUser = "user_shared_collection_with_user"),
            (e.UserSharedCollectionWithGroup = "user_shared_collection_with_usergroup"),
            (e.UserAcceptedCollection = "user_accepted_collection_invite"),
            (e.UserRejectedCollection = "user_rejected_collection_invite"),
            (e.UserAddedItemToCollection = "user_added_credential_to_shared_collection"),
            (e.UserRemovedItemFromCollection = "user_removed_credential_from_shared_collection"),
            (e.UserUpdatedGroupRoleInCollection = "user_updated_collection_usergroup"),
            (e.UserUpdatedUserRoleInCollection = "user_updated_collection_user"),
            (e.UserRenamedSharedCollection = "user_renamed_shared_collection"),
            (e.UserRevokedGroupFromCollection = "user_revoked_collection_usergroup"),
            (e.UserRevokedUserFromCollection = "user_revoked_collection_user"),
            (e.UserCreatedCredential = "user_created_credential"),
            (e.UserModifiedCredential = "user_modified_credential"),
            (e.UserDeletedCredential = "user_deleted_credential"),
            (e.UserImportedCredentials = "user_imported_credentials"),
            (e.UserCreatedSecureNote = "user_created_secure_note"),
            (e.UserModifiedSecureNote = "user_modified_secure_note"),
            (e.UserDeletedSecureNote = "user_deleted_secure_note");
        })(o || (o = {})),
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
        })(r || (r = {}));
    },
    162240: (e, t, s) => {
      s.r(t),
        s.d(t, {
          ActivityLogCategory: () => n.p,
          ActivityLogType: () => n.z,
          StoreActivityLogsCommand: () => r.M,
          StoreActivityLogsInvalidLogsError: () => r.W,
          activityLogsApi: () => o.g
        });
      var o = s(589193),
        r = s(798976),
        n = s(755920);
    },
    470305: (e, t, s) => {
      s.d(t, { v: () => i });
      var o = s(486952),
        r = s(867490),
        n = s(398193);
      const i = (0, o.Q)({
        name: "changeMasterPassword",
        commands: { temporarySendMasterPasswordChangedEvent: n.n },
        events: { masterPasswordChanged: r.D },
        queries: {}
      });
    },
    398193: (e, t, s) => {
      s.d(t, { n: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    867490: (e, t, s) => {
      s.d(t, { D: () => n });
      var o = s(188885),
        r = s(125029);
      class n extends (0, o.d)({ scope: r.F.User }) {}
    },
    185481: (e, t, s) => {
      s.r(t),
        s.d(t, {
          ChangeSessionKeyErrorTypes: () => d.eq,
          CheckSessionKeyErrorTypes: () => A,
          CheckSessionKeyQuery: () => _.Z,
          CheckSessionSessionNotCreated: () => h,
          CloseUserSessionCommand: () => i.V,
          CreateUserSessionCommand: () => a.lk,
          CreatedSessionState: () => u.XL,
          CreatedSessionsStateQuery: () => u.iH,
          DeleteLocalSessionCommand: () => l.G,
          DeviceLimitQuery: () => P.X,
          FlushLocalDataCommand: () => r.e,
          IsAllowedQuery: () => R.bY,
          MasterPasswordChangedEvent: () => C.D,
          MultiAccountNotYetSupported: () => c.y9,
          NotAllowedReason: () => R.Oq,
          OpenUserSessionCommand: () => c.Dx,
          PlatformView: () => P.i,
          PrepareLocalDataFlushCommand: () => n.X,
          SelectedOpenedSessionQuery: () => p._,
          SessionAlreadyExists: () => a.X0,
          SessionAlreadyOpened: () => c.mR,
          SessionClient: () => f,
          SessionCloseMode: () => S.K,
          SessionClosedEvent: () => S.X,
          SessionClosingEvent: () => E.Z,
          SessionCreationErrorTypes: () => a.v5,
          SessionKeyChecker: () => T,
          SessionNotCreated: () => c.aK,
          SessionOpenErrorTypes: () => c.T8,
          SessionOpenedEvent: () => m.M,
          SessionOpeningEvent: () => v.$,
          SessionQueryParamsSchema: () => u.cM,
          SessionState: () => u.sM,
          SessionStateQuery: () => u.ZP,
          TemporarySendMasterPasswordChangedEventCommand: () => I.n,
          UnableToUpdateSessionKeyForNonExistingAccount: () => d.pX,
          UnableToUpdateSessionSessionNotOpened: () => d.nA,
          UpdateUserSessionKeyCommand: () => d.yt,
          UserNotLogged: () => R.Fh,
          changeMasterPasswordApi: () => y.v,
          sessionApi: () => o.Q,
          vaultAccessApi: () => N.Y
        });
      var o = s(434710),
        r = s(42858),
        n = s(915473),
        i = s(186334),
        a = s(169207),
        c = s(637334),
        l = s(354703),
        d = s(490032),
        u = s(55510),
        p = s(731839),
        _ = s(945911),
        S = s(466134),
        E = s(782398),
        m = s(305237),
        v = s(90775),
        O = s(767837);
      class f extends (0, O.E)(o.Q) {}
      (0, O.K)(o.Q, f);
      var A,
        g = s(996168);
      !(function (e) {
        e.SessionNotCreated = "notCreated";
      })(A || (A = {}));
      class h extends (0, g.Hu)(A.SessionNotCreated, "The session has not been created. Create it first.") {}
      class T {}
      var y = s(470305),
        C = s(867490),
        I = s(398193),
        N = s(565766),
        R = s(757755),
        P = s(149273);
    },
    434710: (e, t, s) => {
      s.d(t, { Q: () => O });
      var o = s(486952),
        r = s(55510),
        n = s(945911),
        i = s(305237),
        a = s(782398),
        c = s(466134),
        l = s(42858),
        d = s(915473),
        u = s(169207),
        p = s(637334),
        _ = s(186334),
        S = s(354703),
        E = s(90775),
        m = s(731839),
        v = s(490032);
      const O = (0, o.Q)({
        name: "session",
        commands: {
          FlushLocalDataCommand: l.e,
          PrepareLocalDataFlushCommand: d.X,
          CreateUserSessionCommand: u.lk,
          OpenUserSessionCommand: p.Dx,
          CloseUserSessionCommand: _.V,
          DeleteLocalSessionCommand: S.G,
          UpdateUserSessionKeyCommand: v.yt
        },
        queries: { sessionState: r.ZP, createdSessionsState: r.iH, selectedOpenedSession: m._, checkSessionKey: n.Z },
        events: { SessionOpenedEvent: i.M, SessionClosingEvent: a.Z, SessionClosedEvent: c.X, SessionOpeningEvent: E.$ }
      });
    },
    186334: (e, t, s) => {
      s.d(t, { V: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.Device }) {}
    },
    169207: (e, t, s) => {
      s.d(t, { X0: () => a, lk: () => c, v5: () => o });
      var o,
        r = s(574354),
        n = s(125029),
        i = s(996168);
      !(function (e) {
        e.AlreadyExists = "alreadyExists";
      })(o || (o = {}));
      class a extends (0, i.Hu)(o.AlreadyExists, "The session already exists. Delete it first.") {}
      class c extends (0, r.g)({ scope: n.F.Device }) {}
    },
    354703: (e, t, s) => {
      s.d(t, { G: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.Device }) {}
    },
    42858: (e, t, s) => {
      s.d(t, { e: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    637334: (e, t, s) => {
      s.d(t, { Dx: () => d, T8: () => o, aK: () => a, mR: () => c, y9: () => l });
      var o,
        r = s(574354),
        n = s(125029),
        i = s(996168);
      !(function (e) {
        (e.NotCreated = "notCreated"), (e.AlreadyOpened = "alreadyOpened"), (e.MultiAccountNotYetSupported = "multiAccountNotYetSupported");
      })(o || (o = {}));
      class a extends (0, i.Hu)(o.NotCreated, "The session has not been created. Create it first.") {}
      class c extends (0, i.Hu)(o.AlreadyOpened, "The session is already opened for this user. Close it first.") {}
      class l extends (0, i.Hu)(o.MultiAccountNotYetSupported, "Another session is opened. Close it first.") {}
      class d extends (0, r.g)({ scope: n.F.Device }) {}
    },
    915473: (e, t, s) => {
      s.d(t, { X: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    490032: (e, t, s) => {
      s.d(t, { eq: () => o, nA: () => c, pX: () => a, yt: () => l });
      var o,
        r = s(574354),
        n = s(125029),
        i = s(996168);
      !(function (e) {
        (e.NotCreated = "notCreated"), (e.NotOpened = "notOpened");
      })(o || (o = {}));
      class a extends (0, i.Hu)(o.NotCreated, "The session has not been created. Create it first.") {}
      class c extends (0, i.Hu)(o.NotOpened, "The session has not been opened") {}
      class l extends (0, r.g)({ scope: n.F.Device }) {}
    },
    466134: (e, t, s) => {
      s.d(t, { K: () => o, X: () => i });
      var o,
        r = s(188885),
        n = s(125029);
      !(function (e) {
        (e.Close = "close"), (e.Lock = "lock");
      })(o || (o = {}));
      class i extends (0, r.d)({ scope: n.F.Device }) {}
    },
    782398: (e, t, s) => {
      s.d(t, { Z: () => n });
      var o = s(188885),
        r = s(125029);
      class n extends (0, o.d)({ scope: r.F.User }) {}
    },
    305237: (e, t, s) => {
      s.d(t, { M: () => n });
      var o = s(188885),
        r = s(125029);
      class n extends (0, o.d)({ scope: r.F.User }) {}
    },
    90775: (e, t, s) => {
      s.d(t, { $: () => n });
      var o = s(188885),
        r = s(125029);
      class n extends (0, o.d)({ scope: r.F.User }) {}
    },
    945911: (e, t, s) => {
      s.d(t, { Z: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.Device }) {}
    },
    731839: (e, t, s) => {
      s.d(t, { _: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.Device }) {}
    },
    55510: (e, t, s) => {
      s.d(t, { XL: () => c, ZP: () => l, cM: () => i, iH: () => d, sM: () => a });
      var o = s(999059),
        r = s(125029),
        n = s(807165);
      const i = n.z.object({ email: n.z.string() });
      var a, c;
      !(function (e) {
        (e.NotCreated = "notCreated"), (e.Closed = "closed"), (e.Open = "open");
      })(a || (a = {}));
      class l extends (0, o.k)({ scope: r.F.Device }) {}
      !(function (e) {
        (e.Closed = "closed"), (e.Open = "open");
      })(c || (c = {}));
      class d extends (0, o.k)({ scope: r.F.Device }) {}
    },
    565766: (e, t, s) => {
      s.d(t, { Y: () => i });
      var o = s(486952),
        r = s(757755),
        n = s(149273);
      const i = (0, o.Q)({ name: "vaultAccess", commands: {}, events: {}, queries: { isAllowed: r.bY, deviceLimit: n.X } });
    },
    149273: (e, t, s) => {
      s.d(t, { X: () => i, i: () => o });
      var o,
        r = s(999059),
        n = s(125029);
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
      })(o || (o = {}));
      class i extends (0, r.k)({ scope: n.F.User }) {}
    },
    757755: (e, t, s) => {
      s.d(t, { Fh: () => a, Oq: () => o, bY: () => c });
      var o,
        r = s(999059),
        n = s(125029),
        i = s(996168);
      !(function (e) {
        (e.DeviceLimited = "DeviceLimited"),
          (e.Requires2FAEnforcement = "Requires2FAEnforcement"),
          (e.RequiresSSO2MPMigration = "RequiresSSO2MPMigration"),
          (e.RequiresMP2SSOMigration = "RequiresMP2SSOMigration"),
          (e.NoActiveUser = "NoActiveUser");
      })(o || (o = {}));
      class a extends (0, i.Hu)("UserNotLogged", "Please log the user") {}
      class c extends (0, r.k)({ scope: n.F.Device }) {}
    },
    982466: (e, t, s) => {
      s.d(t, { Iy: () => a, bd: () => c, qb: () => r, y$: () => i, y3: () => o });
      var o,
        r,
        n = s(807165);
      !(function (e) {
        (e.Admin = "admin"), (e.Limited = "limited");
      })(o || (o = {})),
        (function (e) {
          (e.Pending = "pending"), (e.Accepted = "accepted"), (e.Refused = "refused"), (e.Revoked = "revoked");
        })(r || (r = {}));
      const i = n.z.nativeEnum(r),
        a = n.z.nativeEnum(o),
        c = n.z.union([n.z.literal("noKey"), n.z.literal("publicKey"), n.z.literal("sharingKeys")]);
    },
    23704: (e, t, s) => {
      s.r(t),
        s.d(t, {
          AcceptCollectionInviteCommand: () => p.cD,
          AcceptCollectionInviteFailedError: () => p.nu,
          AcceptCollectionInviteResultErrorCode: () => p.Ti,
          AddItemToCollectionsCommand: () => w.$,
          AddItemsToCollectionCommand: () => L.Z,
          CreateSharedCollectionCommand: () => F.I,
          DeleteSharedCollectionCommand: () => G.U,
          GetCollectionPermissionsForUserQuery: () => N.y,
          GetCollectionRoleForGroupQuery: () => R.L,
          GetCollectionsForUserOrGroupQuery: () => P.Q,
          GetInvitesQuery: () => v.q,
          GetIsLastAdminForItemQuery: () => l.X,
          GetItemGroupForItemQuery: () => i.i,
          GetItemIdsInSharedCollectionsQuery: () => I.q,
          GetItemIdsInSharedCollectionsSchema: () => V.Po,
          GetPendingCollectionsQuery: () => O.D,
          GetPermissionForItemQuery: () => c.C,
          GetSharedCollectionsCountQuery: () => D.C,
          GetSharedCollectionsQuery: () => b.$,
          GetSharingStatusForItemQuery: () => a.S,
          GetSharingTeamLoginsQuery: () => r.G,
          HasInvitesQuery: () => f._,
          InviteCollectionMembersCommand: () => k.Q,
          PendingCollectionSchema: () => h,
          PendingItemGroupSchema: () => T,
          PendingUserGroupSchema: () => y,
          Permission: () => g.y3,
          PermissionSchema: () => g.Iy,
          RecipientTypes: () => d.I,
          RefuseCollectionInviteCommand: () => _.UC,
          RefuseCollectionInviteFailedError: () => _.R$,
          RefuseCollectionInviteResultErrorCode: () => _.eT,
          RefuseItemGroupInviteAuthorHasInvalidStatusError: () => S.bp,
          RefuseItemGroupInviteCommand: () => S.gm,
          RefuseItemGroupInviteGroupHasInvalidStatusError: () => S.Xj,
          RefuseItemGroupInviteInvalidItemGroupRevisionError: () => S.Ne,
          RefuseItemGroupInviteNotEnoughAdminsError: () => S.Ix,
          RefuseItemGroupInviteNotFoundError: () => S.fL,
          RefuseItemGroupInviteResultErrorCode: () => S.dI,
          RefuseItemGroupInviteUserGroupIsNotInItemGroupError: () => S.Te,
          RefuseItemGroupInviteUserIsNotInItemGroupError: () => S.hp,
          RefuseItemGroupInviteUserIsNotInPendingStatusError: () => S.gR,
          RefuseUserGroupInviteAuthorHasInvalidStatusError: () => E.K8,
          RefuseUserGroupInviteCommand: () => E.Fo,
          RefuseUserGroupInviteGroupHasInvalidStatusError: () => E.kh,
          RefuseUserGroupInviteInsufficientPrivilegesError: () => E.FO,
          RefuseUserGroupInviteInvalidItemGroupRevisionError: () => E.Uf,
          RefuseUserGroupInviteInvalidTeamIdError: () => E.Ix,
          RefuseUserGroupInviteNotFoundError: () => E.i6,
          RefuseUserGroupInviteResultErrorCode: () => E.xC,
          RefuseUserGroupInviteUserGroupIsNotFoundError: () => E.U1,
          RefuseUserGroupInviteUserGroupUpdateConflictError: () => E.Xp,
          RefuseUserGroupInviteUserIsNotInPendingStatusError: () => E.PZ,
          RefuseUserGroupInviteUserIsNotInUserGroupError: () => E.xz,
          RemoveItemFromCollectionsCommand: () => x.B,
          RenameCollectionCommand: () => B.r,
          RevokeCollectionMembersCommand: () => j.q,
          RsaStatusSchema: () => g.bd,
          ShareableCollectionSchema: () => U.JQ,
          ShareableCollectionVaultItemSchema: () => U.FN,
          SharedAccessForItemQuery: () => d.v,
          SharedCollectionRole: () => V.Yt,
          SharedCollectionSchema: () => V.MX,
          SharedCollectionUserGroupSchema: () => V.yD,
          SharedCollectionUserOrGroupViewSchema: () => V.fg,
          SharedCollectionUserSchema: () => V.Me,
          SharedCollectionsWithItemsQuery: () => U.MO,
          SharingCollectionsClient: () => Y,
          SharingEnabledQuery: () => n.N,
          Status: () => g.qb,
          StatusSchema: () => g.y$,
          UpdateCollectionMembersCommand: () => K.c,
          UpdatePendingCollectionsCommand: () => m.r,
          UpdatePermissionForCollectionItemCommand: () => H.a,
          UpdateSharedCollectionsCommand: () => W.M,
          UsersAndGroupsInCollectionQuery: () => M.O,
          UsersAndGroupsInCollectionSchema: () => V.a7,
          getRefuseItemGroupInviteFunctionalError: () => S.fr,
          getRefuseUserGroupInviteFunctionalError: () => E.cz,
          sharingCollectionsApi: () => C.a,
          sharingInvitesApi: () => u.t,
          sharingItemsApi: () => o.X
        });
      var o = s(348958),
        r = s(931485),
        n = s(954003),
        i = s(354326),
        a = s(620920),
        c = s(904975),
        l = s(456556),
        d = s(11098),
        u = s(258425),
        p = s(231609),
        _ = s(68096),
        S = s(455677),
        E = s(584009),
        m = s(179517),
        v = s(715179),
        O = s(236610),
        f = s(736469),
        A = s(807165),
        g = s(982466);
      const h = A.z.object({
          uuid: A.z.string(),
          name: A.z.string(),
          referrer: A.z.string(),
          permission: A.z.nativeEnum(g.y3),
          seen: A.z.boolean()
        }),
        T = A.z.object({
          itemGroupId: A.z.string(),
          referrer: A.z.string(),
          permission: A.z.enum(["admin", "limited"]),
          seen: A.z.boolean()
        }),
        y = A.z.object({
          groupId: A.z.string(),
          name: A.z.string(),
          referrer: A.z.string(),
          permission: A.z.enum(["admin", "limited"]),
          seen: A.z.boolean()
        });
      var C = s(172721),
        I = s(567591),
        N = s(184178),
        R = s(839821),
        P = s(444282),
        b = s(724249),
        D = s(219286),
        U = s(311578),
        M = s(506233),
        L = s(99676),
        w = s(546629),
        F = s(11527),
        G = s(850384),
        k = s(589074),
        B = s(86590),
        x = s(368827),
        j = s(177311),
        W = s(615507),
        K = s(500177),
        H = s(485980),
        V = s(604400),
        Q = s(767837);
      class Y extends (0, Q.E)(C.a) {}
      (0, Q.K)(C.a, Y);
    },
    172721: (e, t, s) => {
      s.d(t, { a: () => T });
      var o = s(486952),
        r = s(444282),
        n = s(567591),
        i = s(724249),
        a = s(184178),
        c = s(839821),
        l = s(219286),
        d = s(311578),
        u = s(506233),
        p = s(99676),
        _ = s(546629),
        S = s(11527),
        E = s(850384),
        m = s(589074),
        v = s(500177),
        O = s(368827),
        f = s(86590),
        A = s(177311),
        g = s(615507),
        h = s(485980);
      const T = (0, o.Q)({
        name: "sharingCollections",
        commands: {
          addItemsToCollection: p.Z,
          addItemToCollections: _.$,
          createSharedCollection: S.I,
          deleteSharedCollection: E.U,
          inviteCollectionMembers: m.Q,
          updateCollectionMembers: v.c,
          removeItemFromCollections: O.B,
          renameCollection: f.r,
          revokeCollectionMembers: A.q,
          updateSharedCollections: g.M,
          updatePermissionForCollectionItem: h.a
        },
        events: {},
        queries: {
          getCollectionsForUserOrGroup: r.Q,
          getItemIdsInSharedCollections: n.q,
          getSharedCollections: i.$,
          getCollectionPermissionsForUser: a.y,
          getCollectionRoleForGroup: c.L,
          getSharedCollectionsCount: l.C,
          sharedCollectionsWithItems: d.MO,
          usersAndGroupsInCollection: u.O
        }
      });
    },
    546629: (e, t, s) => {
      s.d(t, { $: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    99676: (e, t, s) => {
      s.d(t, { Z: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    11527: (e, t, s) => {
      s.d(t, { I: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    850384: (e, t, s) => {
      s.d(t, { U: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    589074: (e, t, s) => {
      s.d(t, { Q: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    368827: (e, t, s) => {
      s.d(t, { B: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    86590: (e, t, s) => {
      s.d(t, { r: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    177311: (e, t, s) => {
      s.d(t, { q: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    500177: (e, t, s) => {
      s.d(t, { c: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    485980: (e, t, s) => {
      s.d(t, { a: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    615507: (e, t, s) => {
      s.d(t, { M: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    567591: (e, t, s) => {
      s.d(t, { q: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    839821: (e, t, s) => {
      s.d(t, { L: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    184178: (e, t, s) => {
      s.d(t, { y: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    444282: (e, t, s) => {
      s.d(t, { Q: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    219286: (e, t, s) => {
      s.d(t, { C: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    724249: (e, t, s) => {
      s.d(t, { $: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    311578: (e, t, s) => {
      s.d(t, { FN: () => i, JQ: () => a, MO: () => c });
      var o = s(807165),
        r = s(999059),
        n = s(125029);
      const i = o.z.object({ id: o.z.string(), type: o.z.string() }),
        a = o.z.object({
          id: o.z.string(),
          name: o.z.string(),
          spaceId: o.z.string(),
          vaultItems: o.z.array(i),
          isShared: o.z.optional(o.z.boolean())
        });
      class c extends (0, r.k)({ scope: n.F.User }) {}
    },
    506233: (e, t, s) => {
      s.d(t, { O: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    604400: (e, t, s) => {
      s.d(t, { MX: () => c, Me: () => n, Po: () => d, Yt: () => u, a7: () => l, fg: () => a, yD: () => i });
      var o = s(807165),
        r = s(982466);
      const n = o.z.object({
          acceptSignature: o.z.optional(o.z.nullable(o.z.string())),
          collectionKey: o.z.optional(o.z.nullable(o.z.string())),
          login: o.z.string(),
          permission: r.Iy,
          proposeSignature: o.z.optional(o.z.string()),
          proposeSignatureUsingAlias: o.z.optional(o.z.boolean()),
          referrer: o.z.string(),
          rsaStatus: o.z.optional(r.bd),
          status: r.y$
        }),
        i = o.z.object({
          acceptSignature: o.z.optional(o.z.nullable(o.z.string())),
          collectionKey: o.z.optional(o.z.nullable(o.z.string())),
          name: o.z.string(),
          permission: r.Iy,
          proposeSignature: o.z.optional(o.z.string()),
          referrer: o.z.optional(o.z.string()),
          status: r.y$,
          uuid: o.z.string()
        }),
        a = o.z.object({ label: o.z.string(), status: r.y$, permission: r.Iy, id: o.z.string() }),
        c = o.z.object({
          name: o.z.string(),
          privateKey: o.z.string(),
          publicKey: o.z.string(),
          revision: o.z.number(),
          userGroups: o.z.optional(o.z.array(i)),
          users: o.z.optional(o.z.array(n)),
          uuid: o.z.string(),
          authorLogin: o.z.optional(o.z.string())
        }),
        l = o.z.object({ userGroups: o.z.optional(o.z.array(a)), users: o.z.optional(o.z.array(a)) }),
        d = o.z.array(o.z.string());
      var u;
      !(function (e) {
        (e.Editor = "editor"), (e.Manager = "manager");
      })(u || (u = {}));
    },
    258425: (e, t, s) => {
      s.d(t, { t: () => p });
      var o = s(486952),
        r = s(231609),
        n = s(68096),
        i = s(455677),
        a = s(584009),
        c = s(179517),
        l = s(715179),
        d = s(236610),
        u = s(736469);
      const p = (0, o.Q)({
        name: "sharingInvites",
        commands: {
          AcceptCollectionInviteCommand: r.cD,
          RefuseCollectionInviteCommand: n.UC,
          RefuseItemGroupInviteCommand: i.gm,
          RefuseUserGroupInviteCommand: a.Fo,
          UpdatePendingCollectionsCommand: c.r
        },
        events: {},
        queries: { GetInvitesQuery: l.q, GetPendingCollectionsQuery: d.D, HasInvitesQuery: u._ }
      });
    },
    231609: (e, t, s) => {
      s.d(t, { Ti: () => o, cD: () => c, nu: () => a });
      var o,
        r = s(574354),
        n = s(125029),
        i = s(996168);
      !(function (e) {
        e.AcceptFailed = "AcceptFailed";
      })(o || (o = {}));
      class a extends (0, i.Hu)(o.AcceptFailed, "Failed to accept collection") {}
      class c extends (0, r.g)({ scope: n.F.User }) {}
    },
    68096: (e, t, s) => {
      s.d(t, { R$: () => a, UC: () => c, eT: () => o });
      var o,
        r = s(574354),
        n = s(125029),
        i = s(996168);
      !(function (e) {
        e.RefuseFailed = "RefuseFailed";
      })(o || (o = {}));
      class a extends (0, i.Hu)(o.RefuseFailed, "Failed to refuse collection") {}
      class c extends (0, r.g)({ scope: n.F.User }) {}
    },
    455677: (e, t, s) => {
      s.d(t, {
        Ix: () => _,
        Ne: () => p,
        Te: () => u,
        Xj: () => l,
        bp: () => c,
        dI: () => o,
        fL: () => a,
        fr: () => E,
        gR: () => S,
        gm: () => m,
        hp: () => d
      });
      var o,
        r = s(574354),
        n = s(125029),
        i = s(996168);
      !(function (e) {
        (e.ItemGroupNotFound = "ItemGroupNotFound"),
          (e.AuthorHasInvalidStatus = "AuthorHasInvalidStatus"),
          (e.GroupHasInvalidStatus = "GroupHasInvalidStatus"),
          (e.UserIsNotInItemGroup = "UserIsNotInItemGroup"),
          (e.UserGroupIsNotInItemGroup = "UserGroupIsNotInItemGroup"),
          (e.InvalidItemGroupRevision = "InvalidItemGroupRevision"),
          (e.NotEnoughAdmins = "NotEnoughAdmins"),
          (e.UserIsNotInPendingStatus = "UserIsNotInPendingStatus");
      })(o || (o = {}));
      class a extends (0, i.Hu)(o.ItemGroupNotFound, "Item Group not found") {}
      class c extends (0, i.Hu)(o.AuthorHasInvalidStatus, "User is not in accepted/pending status (already refused or revoked)") {}
      class l extends (0, i.Hu)(o.GroupHasInvalidStatus, "UserGroup is not in accepted/pending status (already refused or revoked)") {}
      class d extends (0, i.Hu)(o.UserIsNotInItemGroup, "User is not part of item group") {}
      class u extends (0, i.Hu)(o.UserGroupIsNotInItemGroup, "User group is not part of item group") {}
      class p extends (0, i.Hu)(o.InvalidItemGroupRevision, "Item group revision is not valid") {}
      class _ extends (0, i.Hu)(o.NotEnoughAdmins, "The operation would let the item group with no admin") {}
      class S extends (0, i.Hu)(o.UserIsNotInPendingStatus, 'User is not in "pending" status or not part of a group') {}
      function E(e) {
        switch (e) {
          case "AUTHOR_HAS_INVALID_STATUS":
            return new c();
          case "GROUP_HAS_INVALID_STATUS":
            return new l();
          case "USER_IS_NOT_IN_ITEM_GROUP":
            return new d();
          case "USER_GROUP_IS_NOT_IN_ITEM_GROUP":
            return new u();
          case "INVALID_ITEM_GROUP_REVISION":
            return new p();
          case "NOT_ENOUGH_ADMINS":
            return new _();
          case "USER_IS_NOT_IN_PENDING_STATUS":
            return new S();
          default:
            throw new Error("Unknown server error");
        }
      }
      class m extends (0, r.g)({ scope: n.F.User }) {}
    },
    584009: (e, t, s) => {
      s.d(t, {
        FO: () => p,
        Fo: () => O,
        Ix: () => c,
        K8: () => m,
        PZ: () => S,
        U1: () => l,
        Uf: () => d,
        Xp: () => u,
        cz: () => v,
        i6: () => a,
        kh: () => E,
        xC: () => o,
        xz: () => _
      });
      var o,
        r = s(574354),
        n = s(125029),
        i = s(996168);
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
      })(o || (o = {}));
      class a extends (0, i.Hu)(o.UserGroupNotFound, "User Group not found") {}
      class c extends (0, i.Hu)(o.InvalidTeamId, "Provided Team ID is not a number") {}
      class l extends (0, i.Hu)(o.UserGroupIsNotFound, "User group for provided ID does not exist") {}
      class d extends (0, i.Hu)(o.InvalidItemGroupRevision, "User group revision is not valid") {}
      class u extends (0, i.Hu)(o.UserGroupUpdateConflict, "Conflict between users attempting to update the same user group") {}
      class p extends (0, i.Hu)(o.InsufficientPrivileges, "The user does not have User Group permission to refuse the invitation") {}
      class _ extends (0, i.Hu)(o.UserIsNotInUserGroup, "User is not part of a group") {}
      class S extends (0, i.Hu)(o.UserIsNotInPendingStatus, 'User is not in "pending" status or not part of a group') {}
      class E extends (0, i.Hu)(
        o.GroupHasInvalidStatus,
        'UserGroup is not in "accepted" or "pending" status (already refused or revoked)'
      ) {}
      class m extends (0, i.Hu)(o.AuthorHasInvalidStatus, "User is not in accepted/pending status (already refused or revoked)") {}
      function v(e) {
        switch (e) {
          case "INVALID_TEAM_ID":
            return new c();
          case "USER_GROUP_IS_NOT_FOUND":
            return new l();
          case "INVALID_USER_GROUP_REVISION":
            return new d();
          case "USER_GROUP_UPDATE_CONFLICT":
            return new u();
          case "INSUFFICIENT_PRIVILEGES":
            return new p();
          case "USER_IS_NOT_IN_USER_GROUP":
            return new _();
          case "USER_IS_NOT_IN_PENDING_STATUS":
            return new S();
          case "GROUP_HAS_INVALID_STATUS":
            return new E();
          case "AUTHOR_HAS_INVALID_STATUS":
            return new m();
          default:
            throw new Error("Unknown server error");
        }
      }
      class O extends (0, r.g)({ scope: n.F.User }) {}
    },
    179517: (e, t, s) => {
      s.d(t, { r: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    715179: (e, t, s) => {
      s.d(t, { q: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    236610: (e, t, s) => {
      s.d(t, { D: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    736469: (e, t, s) => {
      s.d(t, { _: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    348958: (e, t, s) => {
      s.d(t, { X: () => u });
      var o = s(486952),
        r = s(931485),
        n = s(954003),
        i = s(354326),
        a = s(620920),
        c = s(904975),
        l = s(456556),
        d = s(11098);
      const u = (0, o.Q)({
        name: "sharingItems",
        commands: {},
        events: {},
        queries: {
          getSharingTeamLogins: r.G,
          sharingEnabled: n.N,
          getItemGroupForItem: i.i,
          getSharingStatusForItem: a.S,
          getPermissionForItem: c.C,
          getIsLastAdminForItem: l.X,
          sharedAccessForItem: d.v
        }
      });
    },
    456556: (e, t, s) => {
      s.d(t, { X: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    354326: (e, t, s) => {
      s.d(t, { i: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    904975: (e, t, s) => {
      s.d(t, { C: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    620920: (e, t, s) => {
      s.d(t, { S: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    931485: (e, t, s) => {
      s.d(t, { G: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    11098: (e, t, s) => {
      s.d(t, { I: () => n, v: () => i });
      var o = s(999059),
        r = s(125029);
      const n = Object.freeze({ Group: "group", Collection: "collection", User: "user" });
      class i extends (0, o.k)({ scope: r.F.User }) {}
    },
    954003: (e, t, s) => {
      s.d(t, { N: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    277007: (e, t, s) => {
      s.d(t, { S: () => o });
      const o = (0, s(486952).Q)({ name: "enclaveSdkApi", commands: {}, events: {}, queries: {} });
    },
    818995: (e, t, s) => {
      s.d(t, { m: () => u });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.User }) {}
      class a extends (0, r.g)({ scope: n.F.User }) {}
      var c = s(999059);
      class l extends (0, c.k)({ scope: n.F.User }) {}
      class d extends (0, c.k)({ scope: n.F.User }) {}
      const u = (0, o.Q)({
        name: "scim",
        commands: { updateScimConfiguration: i, generateScimToken: a },
        events: {},
        queries: { scimConfiguration: l, scimEndpoint: d }
      });
    },
    460384: (e, t, s) => {
      s.d(t, { y: () => f });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.User }) {}
      class a extends (0, r.g)({ scope: n.F.User }) {}
      class c extends (0, r.g)({ scope: n.F.User }) {}
      class l extends (0, r.g)({ scope: n.F.User }) {}
      class d extends (0, r.g)({ scope: n.F.User }) {}
      class u extends (0, r.g)({ scope: n.F.User }) {}
      class p extends (0, r.g)({ scope: n.F.Device }) {}
      class _ extends (0, r.g)({ scope: n.F.User }) {}
      class S extends (0, r.g)({ scope: n.F.User }) {}
      class E extends (0, r.g)({ scope: n.F.User }) {}
      class m extends (0, r.g)({ scope: n.F.User }) {}
      var v = s(999059);
      class O extends (0, v.k)({ scope: n.F.User }) {}
      const f = (0, o.Q)({
        name: "confidentialSSOApi",
        commands: {
          CheckDNSValidationCommand: i,
          ClearSettingsCommand: a,
          CreateTeamCommand: c,
          DeleteDomainCommand: l,
          EnableSsoCommand: d,
          InitSsoProvisioningCommand: u,
          LoginUserWithEnclaveSSOCommand: p,
          ProvisionDomainCommand: _,
          TestLoginUserWithEnclaveSSOCommand: S,
          UpdateMetadataCommand: E,
          ValidateMetadataCommand: m
        },
        events: {},
        queries: { SsoProvisioningQuery: O }
      });
    },
    533258: (e, t, s) => {
      s.d(t, { Q8: () => n, X5: () => r, s5: () => a });
      var o = s(807165);
      o.z.object({
        idpUuid: o.z.string().uuid(),
        certificates: o.z.array(o.z.string()),
        entrypoint: o.z.string(),
        creationDateUnix: o.z.number(),
        updateDateUnix: o.z.number()
      });
      const r = o.z.enum(["valid", "pending", "expired", "invalid"]),
        n = o.z.enum(["tokenNotFound", "invalidToken"]),
        i = o.z.object({
          status: r.nullable(),
          verificationToken: o.z.string(),
          lastCheckDateUnix: o.z.number(),
          pendingReason: n.nullable(),
          expiryDateUnix: o.z.number()
        }),
        a =
          (o.z.object({
            creationDateUnix: o.z.number(),
            dnsCheckStatus: i,
            domainName: o.z.string(),
            idpUuid: o.z.ostring(),
            updateDateUnix: o.z.number()
          }),
          o.z.enum([
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
        c = o.z.object({
          subdomainValue: o.z.string().nullable(),
          txtValue: o.z.string().nullable(),
          verificationStatus: r.nullable(),
          tokenFound: o.z.string().nullable(),
          pendingReason: n.nullable()
        }),
        l = o.z.array(o.z.object({ domainName: o.z.string().url(), verificationStatus: r, idpUuid: o.z.string().optional().nullable() }));
      o.z.object({
        global: o.z.object({
          adminProvisioningKey: o.z.string().nullable(),
          isTeamProvisionedInNitro: o.z.boolean().nullable(),
          inferredSsoState: a,
          teamUuid: o.z.string().nullable(),
          ssoCapable: o.z.boolean().nullable()
        }),
        idpApplication: o.z.object({
          entityId: o.z.string().nullable(),
          acsUrl: o.z.string().nullable(),
          signOnUrl: o.z.string().nullable()
        }),
        idpMetadata: o.z.object({ metadataValue: o.z.string().nullable(), idpUuid: o.z.string().nullable() }),
        domainSetup: l,
        domainVerificationInfo: o.z.record(o.z.string().url(), c),
        enableSSO: o.z.object({ ssoEnabled: o.z.boolean().nullable() })
      });
    },
    816189: (e, t, s) => {
      s.d(t, { r: () => l });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.Device }) {}
      var a = s(999059);
      class c extends (0, a.k)({ scope: n.F.Device }) {}
      const l = (0, o.Q)({ name: "sync", commands: { SyncCommand: i }, queries: { SyncProgressQuery: c }, events: {} });
    },
    676183: (e, t, s) => {
      var o;
      s.d(t, { L: () => o }),
        (function (e) {
          (e.READY = "ready"), (e.IN_PROGRESS = "in_progress"), (e.SUCCESS = "success"), (e.FAILURE = "failure");
        })(o || (o = {}));
    },
    375062: (e, t, s) => {
      s.d(t, { t: () => E });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.User }) {}
      class a extends (0, r.g)({ scope: n.F.User }) {}
      class c extends (0, r.g)({ scope: n.F.User }) {}
      class l extends (0, r.g)({ scope: n.F.User }) {}
      var d = s(999059);
      class u extends (0, d.k)() {}
      class p extends (0, d.k)() {}
      class _ extends (0, d.k)() {}
      class S extends (0, d.k)() {}
      const E = (0, o.Q)({
        name: "teamAdminNotifications",
        commands: {
          markB2BPlanDiscontinuedSeen: i,
          markNewRestrictSharingPolicySeen: a,
          markNotificationTrialExtendedSeen: c,
          markOfferToExtendFreeTrialSeen: l
        },
        events: {},
        queries: {
          hasSeenB2BPlanDiscontinued: u,
          hasSeenNewRestrictSharingPolicy: p,
          hasSeenNotificationTrialExtended: _,
          hasSeenOfferToExtendFreeTrial: S
        }
      });
    },
    57904: (e, t, s) => {
      s.d(t, { h: () => O });
      var o = s(486952),
        r = s(999059);
      class n extends (0, r.k)() {}
      class i extends (0, r.k)() {}
      class a extends (0, r.k)() {}
      var c = s(125029),
        l = s(996168);
      class d extends (0, l.Hu)("UserNotLogged", "Please log the user") {}
      class u extends (0, l.Hu)("UserNotAdmin", "User is not an admin") {}
      class p extends (0, r.k)({ scope: c.F.User, noUserError: new d() }) {}
      class _ extends (0, r.k)() {}
      var S = s(574354);
      class E extends (0, S.g)({ scope: c.F.User }) {}
      class m extends (0, S.g)({ scope: c.F.User }) {}
      class v extends (0, S.g)({ scope: c.F.User }) {}
      const O = (0, o.Q)({
        name: "teamGetStarted",
        commands: { markVaultAsVisited: E, markGetStartedAsSeen: m, markNotificationAsSeen: v },
        events: {},
        queries: { hasVisitedVault: n, hasSeenGetStarted: i, hasSeenNotification: a, isTeamCreator: p, teamTasksCompletion: _ }
      });
    },
    351055: (e, t, s) => {
      s.d(t, { L: () => m });
      var o,
        r = s(486952),
        n = s(574354),
        i = s(125029),
        a = s(996168);
      !(function (e) {
        (e.InvalidOrigin = "InvalidOrigin"),
          (e.NoFreeSlot = "NoFreeSlot"),
          (e.NoFreeSlotFreePlan = "NoFreeSlotFreePlan"),
          (e.UserTeamInviteTokenNotFound = "UserTeamInviteTokenNotFound"),
          (e.PaymentFailed = "PaymentFailed"),
          (e.NotBillingAdmin = "NotBillingAdmin"),
          (e.CannotAddSeatDuringGracePeriod = "CannotAddSeatDuringGracePeriod");
      })(o || (o = {}));
      class c extends (0, a.Hu)(o.InvalidOrigin, "Invalid origin") {}
      class l extends (0, a.Hu)(o.NoFreeSlot, "No free slot") {}
      class d extends (0, a.Hu)(o.NoFreeSlotFreePlan, "No free slot in free plan") {}
      class u extends (0, a.Hu)(o.UserTeamInviteTokenNotFound, "No invite token to a team available for user") {}
      class p extends (0, a.Hu)(o.PaymentFailed, "Payment failed") {}
      class _ extends (0, a.Hu)(o.NotBillingAdmin, "User is not the billing admin") {}
      class S extends (0, a.Hu)(o.CannotAddSeatDuringGracePeriod, "Seats cannot be added during grace period") {}
      class E extends (0, n.g)({ scope: i.F.User }) {}
      const m = (0, r.Q)({ name: "teamMembers", commands: { ProposeMembersCommand: E }, events: {}, queries: {} });
    },
    1086: (e, t, s) => {
      s.d(t, { R: () => c });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.User }) {}
      class a extends (0, r.g)({ scope: n.F.User }) {}
      const c = (0, o.Q)({
        name: "teamMidcycleTier",
        commands: { ChangeTierMidcycleCommand: i, MidcycleTierUpgradePriceCommand: a },
        events: {},
        queries: {}
      });
    },
    128510: (e, t, s) => {
      s.d(t, { F: () => a });
      var o = s(486952),
        r = s(999059),
        n = s(125029);
      class i extends (0, r.k)({ scope: n.F.User }) {}
      const a = (0, o.Q)({ name: "teamOffers", commands: {}, events: {}, queries: { getTeamOffers: i } });
    },
    481030: (e, t, s) => {
      s.d(t, { B: () => a });
      var o = s(486952),
        r = s(999059),
        n = s(125029);
      class i extends (0, r.k)({ scope: n.F.User }) {}
      const a = (0, o.Q)({ name: "teamPasswordHealth", commands: {}, events: {}, queries: { getReport: i } });
    },
    551453: (e, t, s) => {
      s.d(t, { o: () => g });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.User }) {}
      class a extends (0, r.g)({ scope: n.F.User }) {}
      class c extends (0, r.g)({ scope: n.F.User }) {}
      var l = s(999059);
      class d extends (0, l.k)({ scope: n.F.User }) {}
      class u extends (0, l.k)({ scope: n.F.User }) {}
      class p extends (0, l.k)({ scope: n.F.User }) {}
      class _ extends (0, l.k)({ scope: n.F.User }) {}
      class S extends (0, l.k)({ scope: n.F.User }) {}
      class E extends (0, l.k)({ scope: n.F.User }) {}
      class m extends (0, l.k)({ scope: n.F.User }) {}
      class v extends (0, l.k)({ scope: n.F.User }) {}
      class O extends (0, l.k)({ scope: n.F.User }) {}
      class f extends (0, l.k)({ scope: n.F.User }) {}
      class A extends (0, l.k)({ scope: n.F.User }) {}
      const g = (0, o.Q)({
        name: "teamPlanDetails",
        commands: { extendFreeTrial: i, requestTeamPlanCancellation: a, editTeamPolicies: c },
        events: {},
        queries: {
          getTeamBillingInformation: d,
          getTeamCancellationStatus: u,
          getTeamCapabilities: p,
          getTeamCreationDateUnixQuery: _,
          getTeamId: S,
          getTeamName: E,
          getTeamRoles: m,
          getTeamPolicies: v,
          getTeamSeats: O,
          getTeamSecurityScore: f,
          getTeamTrialStatus: A
        }
      });
    },
    581598: (e, t, s) => {
      s.d(t, { Uz: () => i, lD: () => o, qo: () => r, ud: () => l });
      var o,
        r,
        n,
        i,
        a = s(807165);
      !(function (e) {
        (e.Legacy = "legacy"), (e.Starter = "starter"), (e.Team = "team"), (e.Business = "business"), (e.Enterprise = "entreprise");
      })(o || (o = {})),
        (function (e) {
          (e.ProcessOut = "processout"), (e.Invoice = "invoice");
        })(r || (r = {})),
        (function (e) {
          (e.USD = "usd"), (e.EUR = "eur");
        })(n || (n = {})),
        (function (e) {
          (e.Pending = "pending"), (e.Canceled = "canceled"), (e.None = "none");
        })(i || (i = {}));
      const c = a.z.union([
          a.z.literal("chose_other_password_manager"),
          a.z.literal("downsized_employee_count"),
          a.z.literal("missing_critical_features"),
          a.z.literal("no_internal_usage"),
          a.z.literal("other"),
          a.z.literal("technical_issues"),
          a.z.literal("too_expensive")
        ]),
        l = (e) => c.safeParse(e).success;
      var d;
      !(function (e) {
        (e.InTeam = "in_team"),
          (e.NotPremium = "not_premium"),
          (e.NoPayment = "no_payment"),
          (e.IsUnpaidFamilyMember = "is_unpaid_family_member"),
          (e.DefaultSettings = "default_settings"),
          (e.NoVPNCapability = "no_vpn_capability"),
          (e.DisabledForFreeUser = "disabled_for_free_user");
      })(d || (d = {})),
        a.z.object({
          allowPersistenceForMasterPassword: a.z.boolean(),
          allowSharing: a.z.boolean(),
          sharingRestrictedToTeam: a.z.boolean(),
          enforce2FA: a.z.boolean(),
          cryptoForcedPayload: a.z.string(),
          disableAutoLoginDomains: a.z.array(a.z.string()),
          enableForcedDomains: a.z.boolean(),
          enablePersonalSpace: a.z.boolean(),
          enableRemoveForcedContent: a.z.boolean(),
          enableVPN: a.z.boolean(),
          forceAutomaticLogout: a.z.number(),
          lockOnExit: a.z.boolean(),
          vaultExportEnabled: a.z.boolean(),
          collectSensitiveDataAuditLogsEnabled: a.z.boolean(),
          ssoEnabled: a.z.boolean(),
          ssoProvisioning: a.z.boolean(),
          teamDomain: a.z.array(a.z.string()),
          restrictSharingToTeam: a.z.boolean(),
          recoveryEnabled: a.z.boolean()
        });
    },
    925930: (e, t, s) => {
      s.d(t, { a: () => g });
      var o,
        r,
        n,
        i = s(486952),
        a = s(574354),
        c = s(125029),
        l = s(996168);
      !(function (e) {
        (e.TeamNotFound = "TeamNotFound"), (e.NotBillingAdmin = "NotBillingAdmin");
      })(o || (o = {}));
      class d extends (0, l.Hu)(o.TeamNotFound, "The given user is not part of a single team") {}
      class u extends (0, l.Hu)(o.NotBillingAdmin, "The user is not Billing Admin") {}
      class p extends (0, a.g)({ scope: c.F.User }) {}
      !(function (e) {
        (e.TeamNotFound = "TeamNotFound"), (e.VatNumberNotFound = "VatNumberNotFound"), (e.NotBillingAdmin = "NotBillingAdmin");
      })(r || (r = {}));
      class _ extends (0, l.Hu)(r.TeamNotFound, "The given user is not part of a single team") {}
      class S extends (0, l.Hu)(r.VatNumberNotFound, "The given Team does not have a VAT number") {}
      class E extends (0, l.Hu)(r.NotBillingAdmin, "The user is not Billing Admin") {}
      class m extends (0, a.g)({ scope: c.F.User }) {}
      !(function (e) {
        (e.TeamNotFound = "TeamNotFound"), (e.NotBillingAdmin = "NotBillingAdmin"), (e.VatNumberNotUpserted = "VatNumberNotUpserted");
      })(n || (n = {}));
      class v extends (0, l.Hu)(n.TeamNotFound, "The given user is not part of a single team") {}
      class O extends (0, l.Hu)(n.NotBillingAdmin, "The user is not Billing Admin") {}
      class f extends (0, l.Hu)(n.VatNumberNotUpserted, "The VAT number couldn't be upserted") {}
      class A extends (0, a.g)({ scope: c.F.User }) {}
      const g = (0, i.Q)({
        name: "teamVat",
        commands: { DeleteTeamVatCommand: p, GetTeamVatCommand: m, UpsertTeamVatCommand: A },
        events: {},
        queries: {}
      });
    },
    972833: (e, t, s) => {
      s.d(t, { P: () => o });
      const o = {
        EcommerceWebSadPathDev: "ecommerce_web_cancel_subscription_flow_dev",
        EcommerceWebSadPathProd: "ecommerce_web_cancel_subscription_flow_prod"
      };
    },
    47582: (e, t, s) => {
      s.r(t),
        s.d(t, {
          CanUserAddNewPasswordQuery: () => Q.K,
          CollectionsQuery: () => j.I,
          Country: () => A.c,
          CreateCollectionCommand: () => k.e,
          CreateVaultItemCommand: () => a._,
          CreatedEvent: () => p.J,
          DeleteCollectionCommand: () => G.T,
          DeleteVaultItemsCommand: () => c.c,
          DeletedEvent: () => _.s,
          DomainIconDetailsMapSchema: () => C,
          DomainIconDetailsQuery: () => E.s,
          DomainIconDetailsSchema: () => y,
          EmailType: () => N.V,
          EmitTemporaryVaultItemEventCommand: () => u.c,
          EventType: () => u.t,
          FilterOperators: () => i,
          GetPasswordLimitStatusQuery: () => Y.r,
          GetVaultNotificationsStatusQuery: () => w.M,
          IdentityTitle: () => R.t,
          MigrateCategoriesCommand: () => x._,
          NoteColors: () => b.L,
          OperationType: () => B.C,
          PaymentCardColorType: () => I.X,
          PhoneType: () => P.z,
          SecureNoteCategoryQuery: () => m.F,
          SecureNoteSchema: () => b._,
          SetVaultNotificationsStatusCommand: () => L.x,
          SortDirection: () => v.S,
          TempCredentialPreferencesQuery: () => O.M,
          TempCredentialPreferencesUpdateCommand: () => d.m,
          UpdateCollectionCommand: () => B.s,
          UpdateVaultItemCommand: () => l.K,
          UpdatedEvent: () => S.V,
          VaultItemType: () => D.U,
          VaultItemTypeToResultDictionary: () => U.N,
          VaultItemsCrudClient: () => n,
          VaultItemsQuery: () => f.W,
          VaultOrganizationClient: () => W,
          VaultSearchQuery: () => H.W,
          passwordLimitApi: () => V.Z,
          vaultItemsCrudApi: () => o.L,
          vaultNotificationsApi: () => M.e,
          vaultOrganizationApi: () => F.v,
          vaultSearchApi: () => K.R
        });
      var o = s(448430),
        r = s(767837);
      class n extends (0, r.E)(o.L) {}
      (0, r.K)(o.L, n);
      var i,
        a = s(900273),
        c = s(131154),
        l = s(754547),
        d = s(455441),
        u = s(247412),
        p = s(3137),
        _ = s(949135),
        S = s(972989),
        E = s(155713);
      !(function (e) {
        (e.Equal = "equal"), (e.LessThan = "lessThan"), (e.GreaterThan = "greaterThan");
      })(i || (i = {}));
      var m = s(383984),
        v = s(224652),
        O = s(411907),
        f = s(496342),
        A = s(575257),
        g = s(807165);
      const h = [
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
        T = (g.z.enum(h), h.reduce((e, t) => e.setKey(t, g.z.string().optional().nullable()), g.z.object({}))),
        y = g.z.object({ backgroundColor: g.z.string(), mainColor: g.z.string(), urls: T }),
        C = g.z.map(g.z.string(), y);
      var I = s(945146),
        N = s(649341),
        R = s(511329),
        P = s(882009),
        b = s(207149),
        D = s(382706),
        U = s(964035),
        M = s(722499),
        L = s(412338),
        w = s(319892),
        F = s(299074),
        G = s(825041),
        k = s(533),
        B = s(96862),
        x = s(65378),
        j = s(506519);
      class W extends (0, r.E)(F.v) {}
      (0, r.K)(F.v, W);
      var K = s(573883),
        H = s(488994),
        V = s(252484),
        Q = s(663197),
        Y = s(458684);
    },
    252484: (e, t, s) => {
      s.d(t, { Z: () => i });
      var o = s(486952),
        r = s(663197),
        n = s(458684);
      const i = (0, o.Q)({
        name: "passwordLimit",
        commands: {},
        events: {},
        queries: { canUserAddNewPassword: r.K, getPasswordLimitStatus: n.r }
      });
    },
    663197: (e, t, s) => {
      s.d(t, { K: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    458684: (e, t, s) => {
      s.d(t, { r: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    448430: (e, t, s) => {
      s.d(t, { L: () => m });
      var o = s(486952),
        r = s(900273),
        n = s(131154),
        i = s(754547),
        a = s(455441),
        c = s(247412),
        l = s(3137),
        d = s(949135),
        u = s(972989),
        p = s(155713),
        _ = s(496342),
        S = s(383984),
        E = s(411907);
      const m = (0, o.Q)({
        name: "vaultItemsCrud",
        commands: {
          createVaultItem: r._,
          deleteVaultItems: n.c,
          updateVaultItem: i.K,
          tempCredentialPreferencesUpdate: a.m,
          emitTemporaryVaultItemEvent: c.c
        },
        events: { createdEvent: l.J, deletedEvent: d.s, updatedEvent: u.V },
        queries: { domainIconDetails: p.s, query: _.W, secureNoteCategory: S.F, tempCredentialPreferences: E.M }
      });
    },
    900273: (e, t, s) => {
      s.d(t, { _: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    131154: (e, t, s) => {
      s.d(t, { c: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    247412: (e, t, s) => {
      s.d(t, { c: () => i, t: () => o });
      var o,
        r = s(574354),
        n = s(125029);
      !(function (e) {
        (e.Deleted = "deleted"), (e.Updated = "updated"), (e.Created = "created");
      })(o || (o = {}));
      class i extends (0, r.g)({ scope: n.F.User }) {}
    },
    455441: (e, t, s) => {
      s.d(t, { m: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    754547: (e, t, s) => {
      s.d(t, { K: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    977649: (e, t, s) => {
      s.d(t, { D: () => n });
      var o = s(188885),
        r = s(125029);
      class n extends (0, o.d)({ scope: r.F.User }) {}
    },
    3137: (e, t, s) => {
      s.d(t, { J: () => r });
      var o = s(977649);
      class r extends o.D {}
    },
    949135: (e, t, s) => {
      s.d(t, { s: () => r });
      var o = s(977649);
      class r extends o.D {}
    },
    972989: (e, t, s) => {
      s.d(t, { V: () => r });
      var o = s(977649);
      class r extends o.D {}
    },
    155713: (e, t, s) => {
      s.d(t, { s: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    383984: (e, t, s) => {
      s.d(t, { F: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    224652: (e, t, s) => {
      var o;
      s.d(t, { S: () => o }),
        (function (e) {
          (e.Ascend = "ascend"), (e.Descend = "descend");
        })(o || (o = {}));
    },
    411907: (e, t, s) => {
      s.d(t, { M: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    496342: (e, t, s) => {
      s.d(t, { W: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    575257: (e, t, s) => {
      var o;
      s.d(t, { c: () => o }),
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
        })(o || (o = {}));
    },
    945146: (e, t, s) => {
      var o;
      s.d(t, { X: () => o }),
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
        })(o || (o = {}));
    },
    649341: (e, t, s) => {
      var o;
      s.d(t, { V: () => o }),
        (function (e) {
          (e.Perso = "PERSO"), (e.Pro = "PRO"), (e.NoType = "NO_TYPE");
        })(o || (o = {}));
    },
    511329: (e, t, s) => {
      var o;
      s.d(t, { t: () => o }),
        (function (e) {
          (e.Mr = "MR"), (e.Mrs = "MRS"), (e.Miss = "MISS"), (e.Ms = "MS"), (e.Mx = "MX"), (e.NoneOfThese = "NONEOFTHESE");
        })(o || (o = {}));
    },
    882009: (e, t, s) => {
      var o;
      s.d(t, { z: () => o }),
        (function (e) {
          (e.Any = "ANY"),
            (e.Fax = "FAX"),
            (e.Landline = "LANDLINE"),
            (e.Mobile = "MOBILE"),
            (e.WorkFax = "WORKFAX"),
            (e.WorkLandline = "WORKLANDLINE"),
            (e.WorkMobile = "WORKMOBILE");
        })(o || (o = {}));
    },
    207149: (e, t, s) => {
      s.d(t, { L: () => o, _: () => n });
      var o,
        r = s(807165);
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
      })(o || (o = {}));
      const n = r.z.object({
        color: r.z.string(),
        isSecured: r.z.boolean(),
        title: r.z.string(),
        content: r.z.string(),
        categoryId: r.z.string()
      });
    },
    382706: (e, t, s) => {
      var o;
      s.d(t, { U: () => o }),
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
        })(o || (o = {}));
    },
    964035: (e, t, s) => {
      s.d(t, { N: () => r });
      var o = s(382706);
      const r = {
        [o.U.Address]: "addressesResult",
        [o.U.BankAccount]: "bankAccountsResult",
        [o.U.Company]: "companiesResult",
        [o.U.Credential]: "credentialsResult",
        [o.U.DriversLicense]: "driversLicensesResult",
        [o.U.Email]: "emailsResult",
        [o.U.FiscalId]: "fiscalIdsResult",
        [o.U.IdCard]: "idCardsResult",
        [o.U.Identity]: "identitiesResult",
        [o.U.Passkey]: "passkeysResult",
        [o.U.Passport]: "passportsResult",
        [o.U.PaymentCard]: "paymentCardsResult",
        [o.U.Phone]: "phonesResult",
        [o.U.Secret]: "secretsResult",
        [o.U.SecureNote]: "secureNotesResult",
        [o.U.SocialSecurityId]: "socialSecurityIdsResult",
        [o.U.Website]: "websitesResult"
      };
    },
    722499: (e, t, s) => {
      s.d(t, { e: () => i });
      var o = s(486952),
        r = s(412338),
        n = s(319892);
      const i = (0, o.Q)({
        name: "vaultNotifications",
        commands: { setVaultNotificationsStatus: r.x },
        events: {},
        queries: { getVaultNotificationsStatus: n.M }
      });
    },
    412338: (e, t, s) => {
      s.d(t, { x: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    319892: (e, t, s) => {
      s.d(t, { M: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    299074: (e, t, s) => {
      s.d(t, { v: () => l });
      var o = s(486952),
        r = s(825041),
        n = s(533),
        i = s(65378),
        a = s(96862),
        c = s(506519);
      const l = (0, o.Q)({
        name: "vaultOrganization",
        commands: { deleteCollection: r.T, createCollection: n.e, migrateCategories: i._, updateCollection: a.s },
        events: {},
        queries: { queryCollections: c.I }
      });
    },
    533: (e, t, s) => {
      s.d(t, { e: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    825041: (e, t, s) => {
      s.d(t, { T: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    65378: (e, t, s) => {
      s.d(t, { _: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.User }) {}
    },
    96862: (e, t, s) => {
      s.d(t, { C: () => o, s: () => i });
      var o,
        r = s(574354),
        n = s(125029);
      !(function (e) {
        (e.SUBSTRACT_VAULT_ITEMS = "subtract_vault_items"), (e.APPEND_VAULT_ITEMS = "append_vault_items");
      })(o || (o = {}));
      class i extends (0, r.g)({ scope: n.F.User }) {}
    },
    506519: (e, t, s) => {
      s.d(t, { I: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    573883: (e, t, s) => {
      s.d(t, { R: () => n });
      var o = s(486952),
        r = s(488994);
      const n = (0, o.Q)({ name: "vaultSearch", commands: {}, events: {}, queries: { search: r.W } });
    },
    488994: (e, t, s) => {
      s.d(t, { W: () => n });
      var o = s(999059),
        r = s(125029);
      class n extends (0, o.k)({ scope: r.F.User }) {}
    },
    334512: (e, t, s) => {
      var o;
      s.d(t, { j: () => o }),
        (function (e) {
          (e.PasskeysInVaultDev = "vault_web_passkey_dev"), (e.PasskeysInVaultProd = "vault_web_passkey_prod");
        })(o || (o = {}));
    },
    896259: (e, t, s) => {
      s.d(t, { t: () => n, u: () => i });
      var o = s(208987),
        r = s(249329);
      const n = (e, t) =>
          (() => {
            const e = (t) => ({
              define: () => t,
              with: (s) => {
                const o = { api: s.module, main: s.on, queryOnly: s.queryOnly ?? [] },
                  r = { [s.module.name]: o };
                return e({ ...t, ...r });
              }
            });
            return e({});
          })()
            .with({ module: o.t$, on: e })
            .with({ module: r.e, on: e }),
        i = n("node", []);
    },
    442949: (e, t, s) => {
      s.d(t, { d: () => S });
      var o = s(386924),
        r = s(160399),
        n = s(530523),
        i = s(87065),
        a = s(317350),
        c = s(295087),
        l = s(828489);
      const d = (e) => "response" === e.type;
      var u = s(665488),
        p = s(921869);
      const _ = () => (0, o.D)([]);
      class S {
        constructor(e) {
          this.config = e;
        }
        async sendCommand(e, t, s, o) {
          if (!this.broker) throw new Error("call connect() first");
          return await (0, r.z)(
            this.broker
              .sendMessage(`command-${e}`, { type: "command", module: e, commandName: String(t), command: s, context: o.toSerializable() })
              .pipe(
                (0, n.h)(d),
                (0, i.U)((e) => e.response)
              )
          );
        }
        sendQuery(e, t, s, o) {
          if (!this.broker) throw new Error("call connect() first");
          return this.broker
            .sendMessage(`query-${e}`, { type: "query", module: e, queryName: String(t), query: s, context: o.toSerializable() })
            .pipe(
              (0, n.h)(d),
              (0, i.U)((e) => e.response)
            );
        }
        connect(e) {
          const t = e
              ? (t, s, r) => {
                  switch (s.type) {
                    case "response":
                      return a.E;
                    case "command":
                      return (0, o.D)(
                        e.onCommand(s.module, s.commandName, s.command, p.f.fromSerializable(s.context), { isReminder: r.isReminder })
                      ).pipe((0, i.U)((e) => ({ type: "response", response: e })));
                    case "query":
                      return (0, o.D)(e.onQuery(s.module, s.queryName, s.query, p.f.fromSerializable(s.context))).pipe(
                        (0, i.U)((e) => ({ type: "response", response: e }))
                      );
                  }
                  (0, c.U)(s);
                }
              : _,
            s = ((e, t, s, o) =>
              Object.keys(e).reduce(
                (r, n) => {
                  const { commandMailbox: i, queryMailbox: a } = ((r) => {
                    const { main: n, queryOnly: i } = e[r],
                      a = { type: "local", onMessage: o };
                    if (n === t) return { commandMailbox: a, queryMailbox: a };
                    const c = { type: "remote", channel: s[n] };
                    return { commandMailbox: c, queryMailbox: t && i.includes(t) ? a : c };
                  })(n);
                  return (r[`command-${n}`] = i), (r[`query-${n}`] = a), r;
                },
                (0, l.Ay)({})
              ))(this.config.appDefinition, this.config.currentNode, this.config.channels, t);
          return (this.broker = new u.U(s)), this.broker.connect(Object.values(this.config.channels), this.config.channelsListener);
        }
      }
    },
    373880: (e, t, s) => {
      s.d(t, { X: () => i });
      var o = s(616855),
        r = s(442949),
        n = s(740945);
      function i({ appDefinition: e, channels: t, channelsListener: s }) {
        const i = new o.$({ appDefinition: e, channels: t, channelsListener: s, currentNode: null, subscriptions: {} }),
          a = new r.d(i),
          c = () => {
            throw new Error("Unexpected request received by detached application client");
          },
          l = a.connect({ onCommand: c, onQuery: c }).start();
        return { client: (0, n.R)(e, a), stop: async () => (await l).stop() };
      }
    },
    740945: (e, t, s) => {
      s.d(t, { R: () => i, c: () => n });
      var o = s(828489),
        r = s(921869);
      const n = (e, t, s, n) => ({
          commands: Object.keys(e[s].api.commands).reduce(
            (e, o) => (
              (e[o] = (e) => {
                const i = n ?? new r.f();
                return t.sendCommand(s, o, e, i);
              }),
              e
            ),
            (0, o.Ay)({})
          ),
          queries: Object.keys(e[s].api.queries).reduce(
            (e, o) => (
              (e[o] = (e) => {
                const i = n ?? new r.f();
                return t.sendQuery(s, o, e, i);
              }),
              e
            ),
            (0, o.Ay)({})
          )
        }),
        i = (e, t, s) => {
          const n = (n) =>
              Object.keys(e[n].api.commands).reduce(
                (e, o) => (
                  (e[o] = (e) => {
                    const i = s ?? new r.f();
                    return t.sendCommand(n, o, e, i);
                  }),
                  e
                ),
                (0, o.Ay)({})
              ),
            i = (n) =>
              Object.keys(e[n].api.queries).reduce(
                (e, o) => (
                  (e[o] = (e) => {
                    const i = s ?? new r.f();
                    return t.sendQuery(n, o, e, i);
                  }),
                  e
                ),
                (0, o.Ay)({})
              );
          return Object.keys(e)
            .map((e) => e)
            .reduce((e, t) => ((e[t] = { commands: n(t), queries: i(t) }), e), {});
        };
    },
    876948: (e, t, s) => {
      s.r(t),
        s.d(t, {
          AcknowledgedChannel: () => Ns.N,
          AllowedToFail: () => De,
          AppLifeCycle: () => b,
          AppLogger: () => D,
          AppTimers: () => Y,
          BadStatus: () => Zt.R,
          BaseEventEmitter: () => Us,
          ChannelMessageBroker: () => C.U,
          ChannelState: () => Is.D,
          CommandHandler: () => is,
          CommandRefresherFactory: () => J,
          ContextLessCqrsClient: () => A,
          ContextlessBaseEventEmitter: () => Ms,
          CqrsBroker: () => d.d,
          CqrsClient: () => f,
          CqrsCommandRefresher: () => Z,
          CronLowLevelSource: () => rt.R_,
          DefaultEncryptionCodecForDeviceData: () => ee,
          DefaultEncryptionCodecForUserData: () => te,
          EventHandler: () => bs,
          ExceptionCriticality: () => _e,
          ExceptionLogger: () => he,
          ExceptionLoggingSink: () => fe,
          FetchFailedError: () => Zt.a,
          FrameworkInit: () => E,
          FrameworkRequestContextValues: () => O.l,
          Global: () => _,
          HttpBackend: () => Vt,
          HttpClient: () => ss,
          HttpHeaders: () => Qt.W,
          HttpModule: () => os,
          HttpParams: () => qt,
          HttpRequest: () => zt,
          HttpResponse: () => Xt.Z,
          HttpStatusCode: () => $t.W,
          Injectable: () => S,
          JsonApplicationResourceFetcher: () => Se.X,
          JsonApplicationResourceLoader: () => Zs,
          KeyValueStorageFactory: () => pe,
          KeyValueStorageInfrastructure: () => de,
          ManualTriggeredTimers: () => q,
          MemoryChannel: () => Is.q,
          MemoryKeyValueStorageInfrastructure: () => st,
          MemoryStoreInfrastructureFactory: () => P.N,
          MockJsonApplicationResourceFetcher: () => Se.W,
          Module: () => At,
          NoDynamicChannels: () => tt.y,
          NodeConfiguration: () => m.$,
          NodeEventBroker: () => R,
          NodeModulesIntrospection: () => K,
          NodeToModuleEventBroker: () => Ds,
          NullCronTaskHandler: () => rt.ql,
          NullLogger: () => U,
          NullStorage: () => le,
          ParameterProviderType: () => ot,
          QueryHandler: () => Ps,
          RequestContext: () => O.f,
          RequestContextModule: () => Hs,
          SingleNodeAppBuilder: () => Ht.u,
          Store: () => ps,
          StoreCapacity: () => Es,
          StoreFlusher: () => Le,
          StoreInfrastructureFactory: () => P.G,
          TaskTrackingModule: () => Cs,
          TimerBasedCronSource: () => rt._C,
          UncaughtErrorSource: () => ge,
          createApplicationClient: () => Fs.X,
          createClientFactory: () => ws,
          createCqrsClient: () => v.c,
          createCqrsClients: () => v.R,
          createNullAllowedToFail: () => Ue,
          createSingleChannelListener: () => tt.v,
          defineApplication: () => Ht.t,
          defineBatchExecutor: () => Xs,
          defineStore: () => Ss,
          deviceScopedSingletonProvider: () => _t,
          getQueryValue: () => ks,
          getStoresProviders: () => vt,
          isExceptionLogEntry: () => Oe,
          isSendMessageRequest: () => Rs.F,
          isVersionedData: () => ce,
          mockStore: () => Qs,
          provideClass: () => ht,
          provideValue: () => gt,
          refresherCreationToken: () => $,
          scopedSingleton: () => Et,
          sendMessageRequest: () => Rs.k,
          startApplicationNode: () => Wt,
          startSingleApplicationNode: () => Kt,
          useEventsOfModule: () => Ot,
          userScopedSingletonProvider: () => St
        });
      const o = (e) => e;
      class r {
        constructor() {
          (this.encode = o), (this.decode = o);
        }
      }
      var n = s(530523),
        i = s(160399),
        a = s(201484),
        c = s(828489),
        l = s(31408),
        d = s(442949),
        u = s(488802),
        p = s(17988);
      function _() {
        return (0, p.Global)();
      }
      function S(e) {
        return (0, p.Injectable)({ scope: e?.neverReuseInstance ? p.Scope.TRANSIENT : p.Scope.DEFAULT });
      }
      const E = () => S();
      var m = s(616855),
        v = s(740945),
        O = s(921869);
      let f = class {
        constructor(e, t, s) {
          (this.broker = e), (this.configuration = t), (this.context = s);
        }
        getClient(e) {
          return (0, v.c)(this.configuration.appDefinition, this.broker, e.name, this.context);
        }
      };
      f = (0, u.__decorate)([S(), (0, u.__metadata)("design:paramtypes", [d.d, m.$, O.f])], f);
      let A = class {
        constructor(e, t) {
          (this.configuration = e), (this.broker = t);
        }
        getClient(e) {
          return (0, v.c)(this.configuration.appDefinition, this.broker, e.name);
        }
      };
      A = (0, u.__decorate)([S(), (0, u.__metadata)("design:paramtypes", [m.$, d.d])], A);
      var g = s(386924),
        h = s(87065),
        T = s(317350),
        y = s(69885),
        C = s(665488);
      const I = { type: "ask" },
        N = { type: "eventResponse" };
      let R = class {
        constructor(e) {
          (this.regenerateReverseSubscriptionMap = () => {
            const { configuration: e, subscriberToEvent: t } = this,
              s = e.getModuleNames().reduce((e, t) => ({ ...e, [t]: new Map() }), {});
            return e.getNodeList().reduce((e, s) => {
              const o = t[s];
              return (
                Object.entries(o).forEach(([t, o]) => {
                  const r = e[t];
                  o.forEach((e) => {
                    const t = [...(r.get(e) ?? []), s];
                    r.set(e, t);
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
        async publishEvent(e, t, s, o) {
          const { broker: r, eventToSubscriber: n } = this;
          if (!r) throw new Error("Not started");
          const i = (n[e].get(t) ?? []).map((r) => ({
            type: "event",
            context: o.toSerializable(),
            event: s,
            eventName: t,
            moduleSource: e,
            nodeDestination: r
          }));
          await Promise.all(
            i.map(async (e) => {
              await r.trySendMessage(`event-${e.nodeDestination}`, e);
            })
          );
        }
        connect(e) {
          const { configuration: t } = this,
            s = Object.keys(t.subscriptions).reduce((e, s) => ({ ...e, ...t.subscriptions[s] }), (0, c.Ay)({})),
            o = { type: "subscriptions", nodeName: t.currentNode, subscribesTo: s },
            r = ((e, t) =>
              e
                .getNodeList()
                .reduce(
                  (s, o) => (
                    o === e.currentNode
                      ? (s[`event-${o}`] = { type: "local", onMessage: t })
                      : (s[`event-${o}`] = { type: "remote", channel: e.channels[o] }),
                    s
                  ),
                  (0, c.Ay)({})
                ))(this.configuration, (t, s, r) => {
              switch (s.type) {
                case "event":
                  return (0, g.D)(
                    e.onLocalEvent(s.moduleSource, s.nodeDestination, s.eventName, s.event, O.f.fromSerializable(s.context), r)
                  ).pipe((0, h.U)(() => N));
                case "eventResponse":
                  return T.E;
                case "subscriptions":
                  return (
                    (this.subscriberToEvent[s.nodeName] = s.subscribesTo),
                    (this.eventToSubscriber = this.regenerateReverseSubscriptionMap()),
                    (0, y.of)(N)
                  );
                case "ask":
                  return (0, y.of)(o);
              }
            }),
            n = new C.U(r);
          return (
            t.getNodeList().map(async (e) => {
              await n.trySendMessage(`event-${e}`, o), await n.trySendMessage(`event-${e}`, I);
            }),
            (this.broker = n),
            n.connect(Object.values(t.channels), t.channelsListener)
          );
        }
      };
      R = (0, u.__decorate)([S(), (0, u.__metadata)("design:paramtypes", [m.$])], R);
      var P = s(383081);
      class b {
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
      class D {}
      class U extends D {
        log() {}
        error() {}
        warn() {}
        trace() {}
      }
      var M,
        L = s(965192);
      !(function (e) {
        (e.Command = "command"), (e.Query = "query"), (e.Event = "event"), (e.Init = "init"), (e.Cron = "cron");
      })(M || (M = {}));
      const w = { body: void 0, context: new O.f(), module: "module", name: "command", type: M.Command },
        F = { name: "api", commands: {}, events: {}, queries: {} };
      var G = s(125029),
        k = s(295087),
        B = s(287279),
        x = s(208987);
      async function j(e) {
        const t = await (0, i.z)(e.getClient(x.t$).queries.activeUser());
        if ((0, B.d6)(t) && t.data.userName) return t.data.userName;
      }
      const W = { commands: {}, events: {}, queries: {} };
      class K {
        constructor(e, t) {
          (this.supportedEventHandlers = e), (this.modules = t);
        }
      }
      let H = class {
        constructor(e, t, s) {
          (this.introspection = e), (this.moduleRef = t), (this.clients = s);
        }
        async execute(e) {
          const t = a.ContextIdFactory.getByRequest(e),
            { type: s } = e,
            o = () => e.context.getOrAdd(O.l.UserName, async () => await j(this.clients));
          if (!(e.module in this.introspection.modules)) throw new Error("Unknown module " + e.module);
          const r = this.introspection.modules[e.module],
            n = r.api ?? F,
            i = r.handlers ?? W;
          switch (s) {
            case M.Query: {
              const { queries: s } = n;
              if (e.name in s) {
                const r = s[e.name],
                  n = new r(e.body),
                  a = i.queries[e.name];
                return (
                  r.metadata.scope === G.F.User && (await o()),
                  { result: (await this.moduleRef.resolve(a, t, { strict: !1 })).execute(n, { name: e.name }) }
                );
              }
              throw new Error("Unknown query " + e.name);
            }
            case M.Command: {
              const { commands: s } = n;
              if (e.name in s) {
                const r = s[e.name],
                  n = new r(e.body),
                  a = i.commands[e.name];
                r.metadata.scope === G.F.User && (await o());
                const c = await this.moduleRef.resolve(a, t, { strict: !1 });
                return { result: await c.execute(n, { name: e.name }) };
              }
              throw new Error("Unknown command " + e.name);
            }
            case M.Event: {
              const { events: s } = n;
              if (e.name in s) {
                const r = s[e.name],
                  n = new r(e.body),
                  i = Object.values(this.introspection.modules).flatMap((t) => (t.handlers ?? W).events[e.module]?.events[e.name]);
                r.metadata.scope === G.F.User && (await o());
                const a = await Promise.all(
                  i
                    .filter((e) => this.introspection.supportedEventHandlers.has(e))
                    .map(async (e) => await this.moduleRef.resolve(e, t, { strict: !1 }))
                );
                return void (await Promise.all(a.map((e) => e.handle(n))));
              }
              throw new Error("Unknown event " + e.name);
            }
            case M.Cron: {
              const s = (r.crons ?? []).find((t) => t.name === e.name);
              if (!s) throw new Error("unknown cron " + e.name);
              if (s.scope === G.F.User && !(await o())) return { result: !1 };
              const n = await this.moduleRef.resolve(s.handler, t, { strict: !1 });
              return n.isRunnable && !(await n.isRunnable()) ? { result: !1 } : (await n.run(), { result: !0 });
            }
          }
          (0, k.U)(s);
        }
      };
      (0, u.__decorate)(
        [
          (0, p.All)(),
          (0, u.__param)(0, (0, p.Req)()),
          (0, u.__metadata)("design:type", Function),
          (0, u.__metadata)("design:paramtypes", [Object]),
          (0, u.__metadata)("design:returntype", Promise)
        ],
        H.prototype,
        "execute",
        null
      ),
        (H = (0, u.__decorate)(
          [(0, p.Controller)({ scope: p.Scope.REQUEST, durable: !1 }), (0, u.__metadata)("design:paramtypes", [K, a.ModuleRef, A])],
          H
        ));
      var V = s(724966),
        Q = s(227257);
      class Y {
        async waitTimeout(e) {
          await (0, i.z)(this.createObservableTimer(e, e));
        }
      }
      class q extends Y {
        constructor() {
          super(...arguments),
            (this.subscribers$ = new V.X(new Set())),
            (this.time = 0),
            (this.pendingTimerCount$ = this.subscribers$.pipe((0, h.U)((e) => e.size)));
        }
        fireTimer(e = 1) {
          (this.time += e),
            [...this.subscribers$.value].forEach((e) => {
              e.next(this.time);
            });
        }
        async allSubscribersDisconnected() {
          await (0, i.z)(this.pendingTimerCount$.pipe((0, n.h)((e) => !e)));
        }
        createObservableTimer() {
          return new Q.y(
            (e) => (
              this.subscribers$.next(new Set([...this.subscribers$.value, e])),
              () => {
                this.subscribers$.next(new Set([...this.subscribers$.value].filter((t) => t !== e)));
              }
            )
          );
        }
      }
      var z = s(536414),
        X = s(507074);
      function $(e) {
        return e;
      }
      class Z {
        constructor(e, t, { args: s, commandName: o }) {
          const r = t.commands[o];
          this.refreshObservable$ = e.pipe(
            (0, z.z)(async () => {
              await r(s);
            }),
            (0, X.B)({})
          );
        }
        withRefresh() {
          return (e) =>
            new Q.y((t) => {
              const s = this.refreshObservable$.subscribe();
              return s.add(e.subscribe(t)), s;
            });
        }
      }
      let J = class {
        constructor(e, t) {
          (this.timers = e), (this.cqrsClient = t), (this.map = new WeakMap());
        }
        getRefresher(e) {
          const t = this.map.get(e);
          return t || new Z(this.timers.createObservableTimer(e.period, e.period), this.cqrsClient.getClient(e.api), e);
        }
      };
      J = (0, u.__decorate)([S(), (0, u.__metadata)("design:paramtypes", [Y, A])], J);
      let ee = class {};
      ee = (0, u.__decorate)([(0, p.Injectable)()], ee);
      let te = class {};
      te = (0, u.__decorate)([(0, p.Injectable)()], te);
      var se = s(707502),
        oe = s(810370);
      class re {
        decode(e) {
          return (0, se.R)(e);
        }
        encode(e) {
          return (0, oe.s)(e);
        }
      }
      var ne = s(89685),
        ie = s(354066);
      class ae {
        decode(e) {
          return JSON.parse((0, ne.v)(e));
        }
        encode(e) {
          return (0, ie.u)(JSON.stringify(e));
        }
      }
      function ce(e, t) {
        return null !== e && "object" == typeof e && "version" in e && "content" in e && t(e.content);
      }
      const le = { read: () => Promise.resolve(void 0), write: () => Promise.resolve(), clear: () => Promise.resolve() };
      class de {}
      class ue {
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
        createBackend(e, t, s, o) {
          const r = s ? `${e}.${t}.${s}` : `${e}.${t}`;
          return new ue(this.storage, r, o);
        }
      }
      var _e,
        Se = s(475994),
        Ee = s(489618),
        me = s(537182),
        ve = s(970493);
      function Oe(e) {
        return (
          !(!e || "object" != typeof e) &&
          "criticality" in e &&
          "timestamp" in e &&
          "message" in e &&
          "callStack" in e &&
          (e.criticality === _e.CRITICAL || e.criticality === _e.WARNING) &&
          "string" == typeof e.message &&
          "string" == typeof e.callStack
        );
      }
      !(function (e) {
        (e.WARNING = "warning"), (e.CRITICAL = "critical");
      })(_e || (_e = {}));
      class fe {}
      class Ae extends fe {
        logException() {
          return Promise.resolve();
        }
        start() {
          return Promise.resolve({ stop: () => Promise.resolve() });
        }
      }
      class ge {
        constructor(e) {
          this.events$ = e;
        }
      }
      let he = class {
        constructor(e, t) {
          (this.sink = e), (this.logger = t);
        }
        captureException(e, t, s = _e.CRITICAL) {
          try {
            const o = e instanceof Error ? e : new Error("Invalid exception type"),
              r = this.createExceptionLogEntry(t, o, s);
            return this.sink.logException(r);
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
      he = (0, u.__decorate)([(0, p.Injectable)(), (0, u.__metadata)("design:paramtypes", [fe, D])], he);
      var Te = s(925313),
        ye = s(767837);
      class Ce extends (0, ye.E)(x.t$) {}
      (0, ye.K)(x.t$, Ce);
      const Ie = "USE_CASE_STACKTRACE";
      let Ne = class {
        constructor(e) {
          this.requestContext = e;
        }
        isInitialUseCase() {
          return (this.requestContext.get(Ie) ?? []).length <= 1;
        }
        read() {
          return this.requestContext.getOrAddSync(Ie, () => []) ?? [];
        }
        append(e) {
          const { requestContext: t } = this,
            s = t.get(Ie) ?? [];
          t.set(Ie, [...s, e]);
        }
      };
      Ne = (0, u.__decorate)([(0, p.Injectable)(), (0, u.__metadata)("design:paramtypes", [O.f])], Ne);
      const Re = new Ne(new O.f());
      class Pe extends Error {
        constructor(e, t) {
          super("ApplicationRequestError"), (this.exception = e), (this.useCaseStacktrace = t);
        }
      }
      let be = class {
        constructor(e, t, s, o) {
          (this.logger = e), (this.useCaseStacktraceRepo = t), (this.cqrsClient = s), (this.requestContextClient = o);
        }
        intercept(e, t) {
          const s = e.getArgByIndex(0);
          return t.handle().pipe((0, me.K)(this.handleException(s)));
        }
        handleException(e) {
          const { useCaseStacktraceRepo: t } = this;
          return (s) => {
            if (t.isInitialUseCase()) {
              const [o, r] = s instanceof Pe ? [s.exception, s.useCaseStacktrace] : [s, t.read()];
              return this.captureException(e, o, r), (0, Te._)(() => o);
            }
            const o = s instanceof Pe ? s : new Pe(s, t.read());
            return (0, Te._)(() => o);
          };
        }
        async getUserFeatureFlips() {
          if (
            !(await (0, i.z)(this.requestContextClient.queries.activeUser().pipe((0, h.U)((e) => (0, B.d6)(e) && !!(0, B.db)(e).userName))))
          )
            return Promise.resolve({});
          const {
            queries: { userFeatureFlips: e }
          } = this.cqrsClient.getClient(ve.cV);
          return await (0, i.z)(e().pipe((0, h.U)((e) => ((0, B.d6)(e) ? (0, B.db)(e) : {}))));
        }
        async captureException(e, t, s) {
          this.logger.captureException(t, {
            moduleName: e.module,
            useCaseName: e.name,
            useCaseId: e.context.get(O.l.UseCaseId),
            featureFlips: await this.getUserFeatureFlips(),
            useCaseStacktrace: s
          });
        }
      };
      be = (0, u.__decorate)([(0, p.Injectable)({ scope: p.Scope.REQUEST }), (0, u.__metadata)("design:paramtypes", [he, Ne, f, Ce])], be);
      let De = class {
        constructor(e, t, s, o) {
          (this.request = e), (this.logger = t), (this.useCaseStacktraceRepo = s), (this.cqrsClient = o);
        }
        async do(...e) {
          return (await Promise.all(e.map((e) => this.doOne(e)))).every((e) => !!e);
        }
        async doOne(e, t = "method") {
          try {
            const s = await e();
            if ((0, B.AZ)(s) && (0, B.hx)(s)) throw new Error(`Allowed to fail ${t} has failed`);
            return !0;
          } catch (e) {
            const { request: t, useCaseStacktraceRepo: s } = this,
              [o, r] = e instanceof Pe ? [e.exception, e.useCaseStacktrace] : [e, s.read()];
            try {
              await Promise.race([
                new Promise((e) => setTimeout(e, 100)),
                this.logger.captureException(
                  o,
                  {
                    moduleName: t?.module,
                    useCaseId: t?.context.get(O.l.UseCaseId),
                    useCaseName: t?.name,
                    useCaseStacktrace: r,
                    featureFlips: await this.getUserFeatureFlips()
                  },
                  _e.WARNING
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
          } = this.cqrsClient.getClient(ve.cV);
          return (0, i.z)(
            e().pipe(
              (0, h.U)((e) => ((0, B.d6)(e) ? (0, B.db)(e) : {})),
              (0, Ee.V)(50),
              (0, me.K)(() => (0, y.of)({}))
            )
          );
        }
      };
      function Ue() {
        return new De(w, new he(new Ae(), new U()), Re, {
          getClient: () => ({ queries: { userFeatureFlips: () => (0, y.of)((0, B.Vp)({})) } })
        });
      }
      De = (0, u.__decorate)(
        [(0, u.__param)(0, (0, p.Inject)(a.REQUEST)), (0, u.__metadata)("design:paramtypes", [Object, he, Ne, f])],
        De
      );
      class Me {
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
      let Le = class {
        constructor(e, t, s) {
          (this.moduleRef = e), (this.request = t), (this.storeList = s);
        }
        async prepare() {
          const e = a.ContextIdFactory.getByRequest(this.request);
          this.storeList.instances = await Promise.all(this.storeList.classes.map((t) => this.moduleRef.resolve(t, e, { strict: !1 })));
        }
        async flush() {
          const { instances: e } = this.storeList;
          if (!e.length) throw new Error("Stores not instantiated");
          const t = e.map((e) => e.persist());
          await Promise.all(t);
        }
      };
      Le = (0, u.__decorate)(
        [
          (0, p.Injectable)(),
          (0, u.__param)(1, (0, p.Inject)(a.REQUEST)),
          (0, u.__metadata)("design:paramtypes", [a.ModuleRef, Object, Me])
        ],
        Le
      );
      let we = class {
        catch(e, t) {
          t.switchToHttp().getResponse().fail(e);
        }
      };
      we = (0, u.__decorate)([(0, p.Catch)(Error)], we);
      const Fe = {
        provide: O.f,
        scope: p.Scope.REQUEST,
        inject: [a.REQUEST],
        useFactory: (e) => {
          const t = (() => {
            switch (e.type) {
              case M.Command:
              case M.Event:
              case M.Query:
              case M.Cron:
                return e.context;
              case M.Init:
                return new O.f();
              default:
                (0, k.U)(e);
            }
          })();
          return t.getOrAdd(O.l.UseCaseId, () => String(a.ContextIdFactory.getByRequest(e).id)), t;
        }
      };
      var Ge = s(778263),
        ke = s(116433);
      const Be = "open",
        xe = "closed";
      class je {
        constructor(e) {
          (this.lifecycle = e),
            (this.status = Be),
            (this.onAppShutdown = () => this.close()),
            (this.closeHooks = []),
            e.addShutdownHook(this.onAppShutdown);
        }
        async close() {
          for (; this.closeHooks.length > 0; ) {
            const e = this.closeHooks.pop();
            e && (await e());
          }
          (this.status = xe), this.lifecycle.removeShutdownHook(this.onAppShutdown);
        }
        addCloseHook(e) {
          this.closeHooks.push(e);
        }
      }
      let We = class extends je {
        constructor(e, t, s) {
          super(t),
            (this.requestContext = s),
            s.queries
              .activeUser()
              .pipe((0, Ge.G)(), (0, n.h)(this.thisUserGotDeactivated(e)), (0, ke.q)(1))
              .subscribe(() => {
                this.close();
              });
        }
        thisUserGotDeactivated(e) {
          return ([t, s]) => {
            if (!(0, B.d6)(t) || !(0, B.d6)(s)) return !1;
            const o = (0, B.db)(t).userName,
              r = (0, B.db)(s).userName;
            return o === e && void 0 === r;
          };
        }
      };
      We = (0, u.__decorate)([(0, p.Injectable)(), (0, u.__metadata)("design:paramtypes", [String, b, Ce])], We);
      class Ke {
        static create({
          brokers: { cqrs: e, event: t },
          configProviders: s,
          keyValueStorageInfrastructure: o,
          lifeCycle: n,
          logger: i,
          modules: c,
          nodeConfiguration: u,
          storeInfrastructureFactory: p,
          timers: _,
          jsonFetcher: S,
          defaultDeviceStorageEncryptionCodecProvider: E,
          defaultUserStorageEncryptionCodecProvider: v,
          storeList: g,
          interceptors: h,
          introspection: T,
          moduleClientsProviders: y,
          userUseCaseScopeProvider: C
        }) {
          return {
            module: Ke,
            providers: [
              l.ExplorerService,
              { provide: de, useValue: o },
              { provide: b, useValue: n },
              { provide: m.$, useValue: u },
              { provide: d.d, useValue: e },
              { provide: R, useValue: t },
              { provide: Se.X, useValue: S },
              f,
              A,
              ...s,
              { provide: D, useValue: i },
              Fe,
              { provide: P.G, useValue: p },
              { provide: Y, useValue: _ },
              J,
              { provide: pe, useValue: new pe(o) },
              re,
              E,
              v,
              ae,
              r,
              { provide: K, useValue: T },
              { provide: Me, useValue: g },
              Le,
              De,
              { provide: a.APP_FILTER, useClass: we },
              ...h.flatMap((e) => [{ provide: a.APP_INTERCEPTOR, useClass: e }, e]),
              ...y,
              C
            ],
            imports: [...c],
            exports: [
              b,
              m.$,
              d.d,
              R,
              f,
              A,
              ...s.map(({ provide: e }) => e),
              D,
              O.f,
              P.G,
              Y,
              J,
              re,
              ee,
              te,
              ae,
              r,
              pe,
              de,
              Se.X,
              Le,
              De,
              K,
              ...y.map(({ provide: e }) => e),
              We
            ],
            controllers: [H],
            global: !0
          };
        }
      }
      var He = s(674081);
      const Ve = () => {},
        Qe = () => {
          throw new Error("Not supported");
        };
      class Ye {
        constructor(e, t, s) {
          (this.cqrsBroker = e),
            (this.eventsBroker = t),
            (this.cronsBroker = s),
            (this.isListening$ = new V.X(!1)),
            (this.use = Qe),
            (this.get = Qe),
            (this.post = Qe),
            (this.head = Qe),
            (this.delete = Qe),
            (this.put = Qe),
            (this.options = Qe),
            (this.patch = Qe),
            (this.end = Qe),
            (this.applyVersionFilter = Qe),
            (this.disconnect = Ve),
            (this.close = Ve),
            (this.status = Qe),
            (this.render = Qe),
            (this.redirect = Qe),
            (this.setHeader = Qe),
            (this.enableCors = Qe),
            (this.initHttpServer = Qe),
            (this.registerParserMiddleware = Qe),
            (this.createMiddlewareFactory = Qe);
        }
        isHeadersSent() {
          return !1;
        }
        bindHandler(e) {
          if (this.cqrsCallbacks || this.eventCallbacks) throw new Error("Handler already registered");
          (this.cqrsCallbacks = {
            onCommand: (t, s, o, r) =>
              new Promise((n, i) => {
                e(
                  { type: M.Command, module: t, name: s, body: o, context: r },
                  { type: M.Command, value: { result: (0, B.Vp)(void 0) }, reply: (e) => n(e), fail: (e) => i(e) }
                );
              }),
            onQuery: (t, s, o, r) => {
              const n = new Promise((n, i) => {
                e(
                  { type: M.Query, module: t, name: s, body: o, context: r },
                  { type: M.Query, value: { result: T.E }, reply: (e) => n(e), fail: (e) => i(e) }
                );
              });
              return (0, g.D)(n).pipe((0, He.J)());
            }
          }),
            (this.eventCallbacks = {
              onLocalEvent: (t, s, o, r, n) =>
                new Promise((s, i) => {
                  e({ type: M.Event, body: r, context: n, name: o, module: t }, { type: M.Event, reply: () => s(), fail: (e) => i(e) });
                })
            }),
            (this.cronCallbacks = (t, s) =>
              new Promise((o, r) => {
                e(
                  { type: M.Cron, context: new O.f(), module: t, name: s },
                  { type: M.Cron, value: { result: !1 }, reply: (e) => o(e), fail: (e) => r(e) }
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
            { isListening$: o } = this;
          (this.disconnect = () => {
            e.stop(), t.stop(), s.stop(), o.complete();
          }),
            (this.close = this.disconnect),
            this.isListening$.next(!0);
        }
        reply(e, t) {
          switch (e.type) {
            case M.Query:
            case M.Command:
              e.reply(t.result);
              break;
            case M.Event:
              e.reply();
              break;
            case M.Cron:
              e.reply(t.result);
              break;
            default:
              (0, k.U)(e);
          }
        }
        getInstance() {
          return this;
        }
        getHttpServer() {
          return { once: Ve, address: () => "", removeListener: Ve };
        }
        getType() {
          return "AppCoreNode";
        }
      }
      const qe = () => {};
      class ze extends a.AbstractHttpAdapter {
        constructor(e, t, s) {
          super(new Ye(e, t, s)),
            (this.createMiddlewareFactory = this.instance.createMiddlewareFactory),
            (this.close = this.instance.close),
            (this.reply = this.instance.reply),
            (this.useStaticAssets = qe),
            (this.setViewEngine = qe),
            (this.getRequestHostname = qe),
            (this.status = qe),
            (this.render = qe),
            (this.redirect = qe),
            (this.setNotFoundHandler = qe),
            (this.setHeader = qe),
            (this.registerParserMiddleware = qe),
            (this.enableCors = qe),
            (this.setErrorHandler = qe),
            (this.end = qe),
            (this.isListening$ = this.instance.isListening$);
        }
        initHttpServer() {
          this.setHttpServer({ once: qe, address: () => "", removeListener: qe });
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
      var Xe = s(890171);
      class $e extends D {
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
      class Ze extends Y {
        get time() {
          return Date.now();
        }
        createObservableTimer(e, t) {
          return (0, Xe.H)(e, t);
        }
      }
      class Je extends Se.X {
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
      var ot,
        rt = s(369594);
      function nt(e) {
        const { parameterProvider: t, token: s } = e;
        switch (t.type) {
          case ot.CLASS_PROVIDER:
            return { provide: s, useClass: t.useClass };
          case ot.VALUE_PROVIDER:
            return { provide: s, useValue: t.useValue };
          default:
            (0, k.U)(t);
        }
      }
      !(function (e) {
        (e.VALUE_PROVIDER = "value_provider"), (e.CLASS_PROVIDER = "class_provider");
      })(ot || (ot = {})),
        s(760171);
      const it = "frameworkModuleName",
        at = new ae(),
        ct = new re();
      let lt = class {
        constructor(e, t, s) {
          (this.kv = e), (this.prefix = `batch-storage.${s}.${t.get(O.l.UserName)}`);
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
          const t = at.encode(e);
          return ct.encode(t);
        }
        stringToState(e) {
          const t = ct.decode(e);
          return at.decode(t);
        }
      };
      lt = (0, u.__decorate)([(0, u.__param)(2, (0, p.Inject)(it)), (0, u.__metadata)("design:paramtypes", [de, O.f, String])], lt);
      class dt {
        getProviders(e) {
          return e.length
            ? [
                ...e.map((e) => ({ provide: e, inject: [lt, e.Definition.chunkProcessor], useFactory: (t, s) => new e(t, s) })),
                ...e.map(({ Definition: { chunkProcessor: e } }) => e),
                lt
              ]
            : [];
        }
      }
      var ut = s(957459),
        pt = s(164987);
      const _t = (e, t) => {
          const s = t.token ?? (0, ut.Z)();
          class o {
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
          S()(o);
          const r = o,
            n = {
              token: e,
              inject: [o, b, a.ModuleRef, a.REQUEST],
              asyncFactory: (e, t, o, r) => {
                const n = a.ContextIdFactory.getByRequest(r);
                return e.getOrCreate(() => o.resolve(s, n), t);
              }
            };
          return [{ ...t, token: s }, r, n];
        },
        St = (e, t) => {
          const s = t.token ?? (0, ut.Z)();
          class o {
            constructor() {
              (this.instances = new Map()), (this.mutex = new pt.WU());
            }
            getOrCreate(e, t, s) {
              return this.mutex.runExclusive(async () => {
                const o = this.instances.get(e);
                if (o) return o;
                s.addCloseHook(() => {
                  this.invalidate(e);
                });
                const r = await t();
                return this.instances.set(e, r), r;
              });
            }
            invalidate(e) {
              this.instances.delete(e);
            }
          }
          const r = o,
            n = {
              token: e,
              inject: [o, O.f, a.ModuleRef, a.REQUEST, We],
              asyncFactory: (t, o, r, n, i) => {
                const c = a.ContextIdFactory.getByRequest(n),
                  l = o.getOrDefault(O.l.UserName, "");
                if ("" === l) throw new Error(`Provider ${e} is a user-scoped singleton but there is no user`);
                if (!i) throw new Error("No user scope available");
                return t.getOrCreate(l, () => r.resolve(s, c), i);
              }
            };
          return [{ token: s, asyncFactory: t.asyncFactory, inject: [...(t.inject ?? []), O.f] }, r, n];
        },
        Et = (e, t, s) => {
          switch (e) {
            case G.F.Device:
              return _t(t, s);
            case G.F.User:
              return St(t, s);
            default:
              (0, k.U)(e);
          }
        },
        mt = { [G.F.Device]: ee, [G.F.User]: te };
      function vt(...e) {
        return e.flatMap((e) =>
          (function (e) {
            const t = e.Definition.persist
                ? (function (e, t, s) {
                    const {
                      EncryptionCodec: o = mt[t],
                      SerializationCodec: r = ae,
                      TransportStorageCodec: n = re,
                      initialValue: i,
                      schemaVersion: a
                    } = s.Definition;
                    class c {
                      constructor(e, t, s, o) {
                        (this.encryptionCodec = e), (this.serializationCodec = t), (this.transportStorageCodec = s), (this.backend = o);
                      }
                    }
                    class l extends s {
                      constructor(e) {
                        super(e.encryptionCodec, e.serializationCodec, e.transportStorageCodec, e.backend);
                      }
                    }
                    const d = { token: (0, ut.Z)(), inject: [c], asyncFactory: (e) => Promise.resolve(new l(e)) },
                      u = {
                        token: c,
                        inject: [it, o, r, n, pe, ...(t === G.F.User ? [O.f] : [])],
                        asyncFactory: async (s, o, r, n, l, d) => {
                          const u = await l.createBackend(s, e, (t === G.F.User ? d?.get(O.l.UserName) : "") ?? "", async () => {
                            const e = { version: a, content: i },
                              t = await r.encode(e),
                              s = await o.encode(t);
                            return await n.encode(s);
                          });
                          return new c(o, r, n, u);
                        }
                      };
                    return [u, ...Et(t, s, d)];
                  })(e.Definition.storeName, e.Definition.scope, e.Definition.storage)
                : [],
              s = {
                token: (0, ut.Z)(),
                inject: [
                  it,
                  b,
                  P.G,
                  e.Definition.scope === G.F.User ? O.f : a.REQUEST,
                  De,
                  We,
                  ...(e.Definition.persist ? [e.Definition.storage, e.Definition.codec] : [])
                ],
                asyncFactory: async (t, s, o, r, n, i, a, c) => {
                  const l = new e(t, e.Definition, o, (e.Definition.scope === G.F.User ? r.get(O.l.UserName) : "") ?? "", n, a, c),
                    d = async () => {
                      await l.clear(), l.stop();
                    };
                  if (e.Definition.scope === G.F.User) {
                    if (!i) throw new Error("No user scope available");
                    i.addCloseHook(d);
                  } else s.addShutdownHook(d);
                  return await l.load(), l;
                }
              };
            return [...t, ...Et(e.Definition.scope, e, s)];
          })(e)
        );
      }
      const Ot = (e, t) => ({ [e.name]: { name: e.name, events: t } }),
        ft = (e, t) => {
          const { exports: s = [], imports: o = [], providers: r = [], onFrameworkInit: n = [], stores: i = [], crons: a = [] } = e,
            c = [n, t.onFrameworkInit ?? []].flat();
          return {
            ...e,
            exports: s.concat(t.exports ?? []),
            imports: o.concat(t.imports ?? []),
            providers: r.concat(t.providers ?? []),
            onFrameworkInit: c,
            stores: i.concat(t.stores ?? []),
            crons: a.concat(t.crons ?? [])
          };
        };
      function At(e) {
        const { composes: t = [] } = e;
        e = t.reduce((e, t) => ft(e, t), e);
        const {
            exports: s = [],
            imports: o = [],
            handlers: r = { commands: {}, events: {}, queries: {} },
            providers: n = [],
            onFrameworkInit: i = [],
            stores: a,
            batchExecutors: c,
            crons: l
          } = e,
          d = e.api?.name ?? e.sharedModuleName,
          u = d ? vt(...(a ?? [])) : [],
          _ = d ? new dt().getProviders(c ?? []) : [],
          S = [
            ...n,
            ...(l ?? []).map((e) => e.handler),
            ...u,
            ..._,
            ...Object.values(r.commands),
            ...Object.values(r.queries),
            ...Object.values(r.events)
              .map((e) => Object.values(e.events))
              .reduce((e, t) => [...e, ...t], new Array()),
            ...(i instanceof Array ? i : [i]),
            { provide: it, useValue: d }
          ],
          { asyncProviders: E, basicClassProviders: m } = S.reduce(
            (e, t) => {
              return "object" == typeof (s = t) && "token" in s && "asyncFactory" in s && "function" == typeof s.asyncFactory
                ? { asyncProviders: [...e.asyncProviders, t], basicClassProviders: e.basicClassProviders }
                : { asyncProviders: e.asyncProviders, basicClassProviders: [...e.basicClassProviders, t] };
              var s;
            },
            { asyncProviders: new Array(), basicClassProviders: new Array() }
          ),
          v = [...m, ...E.map((e) => ({ provide: e.token, useFactory: e.asyncFactory, inject: e.inject }))],
          O = (0, p.Module)({ exports: s, imports: o, providers: v });
        return (t) => (Reflect.defineMetadata(et, e, t), O(t));
      }
      function gt(e) {
        return { type: ot.VALUE_PROVIDER, useValue: e };
      }
      function ht(e) {
        return { type: ot.CLASS_PROVIDER, useClass: e };
      }
      const Tt = {
        sink: gt(
          new (class {
            logException() {
              return Promise.resolve();
            }
            start() {
              return Promise.resolve({ stop: () => Promise.resolve() });
            }
          })()
        ),
        uncaughtErrorSource: gt(
          new (class extends ge {
            constructor() {
              super(T.E);
            }
          })()
        )
      };
      let yt = class {
        constructor(e) {
          this.logger = e;
        }
        handle(e) {
          const { error: t, fileLocation: s, lineNumber: o, origin: r } = e,
            [n, i] = t instanceof Pe ? [t.exception, t.useCaseStacktrace] : [t];
          return this.logger.captureException(n, { fileLocation: s, lineNumber: o, origin: r, useCaseStacktrace: i }, _e.CRITICAL);
        }
      };
      yt = (0, u.__decorate)([S(), (0, u.__metadata)("design:paramtypes", [he])], yt);
      let Ct = class {
        constructor(e, t, s, o) {
          (this.sink = e), (this.lifeCycle = t), (this.moduleRef = s), (this.uncaughtErrorsSource = o);
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
          this.moduleRef.get(yt).handle(e);
        }
      };
      var It;
      Ct = (0, u.__decorate)([E(), (0, u.__metadata)("design:paramtypes", [fe, b, a.ModuleRef, ge])], Ct);
      let Nt = (It = class {
        static configure(e) {
          return {
            module: It,
            configurations: { ...Tt, sink: e.sink, ...(e.uncaughtErrorSource ? { uncaughtErrorSource: e.uncaughtErrorSource } : {}) }
          };
        }
      });
      Nt = It = (0, u.__decorate)(
        [
          At({
            sharedModuleName: "exception-logging",
            providers: [he, { provide: a.APP_INTERCEPTOR, useClass: be }, Ne, yt],
            configurations: { sink: { token: fe }, uncaughtErrorSource: { token: ge } },
            exports: [he, Ne],
            onFrameworkInit: Ct,
            requiredFeatureFlips: []
          })
        ],
        Nt
      );
      var Rt = s(243978);
      const Pt = { tag: "" };
      let bt = class {
        constructor(e, t, s, o) {
          (this.request = e), (this.clients = t), (this.config = s), (this.introspection = o);
        }
        intercept(e, t) {
          const { request: s } = this,
            { appDefinition: o } = this.config;
          if (s.type === M.Cron) return this.checkCronActiveUser(t, s);
          if (!(s.module in o)) return t.handle();
          const r = o[s.module].api;
          switch (s.type) {
            case M.Query:
              return this.checkQueryActiveUser(t, s, r);
            case M.Command:
              return this.checkCommandActiveUser(t, s, r);
            case M.Event:
              return this.checkEventActiveUser(t, s, r);
            default:
              (0, k.U)(s);
          }
        }
        checkCronActiveUser(e, t) {
          const s = (this.introspection.modules[t.module].crons ?? []).find((e) => e.name === t.name);
          if (!s) throw new Error("No such cron " + t.name);
          return s.scope === G.F.Device
            ? e.handle()
            : this.checkActiveUserPromise(e, t.context, { noUserError: Pt, scope: G.F.User }, "Cron");
        }
        checkQueryActiveUser(e, t, s) {
          const { queries: o } = s;
          if (t.name in o) {
            const s = o[t.name],
              { metadata: r } = s;
            return this.checkActiveUserObservable(e, t.context, r, `Query ${t.module}.${t.name}`);
          }
          return e.handle();
        }
        checkCommandActiveUser(e, t, s) {
          const { commands: o } = s;
          if (t.name in o) {
            const s = o[t.name],
              { metadata: r } = s;
            return this.checkActiveUserPromise(e, t.context, r, `Command ${t.module}.${t.name}`);
          }
          return e.handle();
        }
        checkEventActiveUser(e, t, s) {
          const { events: o } = s;
          if (t.name in o) {
            const s = o[t.name],
              { metadata: r } = s;
            return this.checkActiveUserPromise(e, t.context, r, `Event ${t.module}.${t.name}`);
          }
          return e.handle();
        }
        checkActiveUserPromise(e, t, s, o) {
          if (s.scope !== G.F.User) return e.handle();
          const { noUserError: r } = s;
          return (0, g.D)(t.getOrAdd(O.l.UserName, () => j(this.clients))).pipe(
            (0, Rt.w)((t) => {
              if (t) return e.handle();
              if (r) return (0, y.of)({ result: (0, B.Rn)(r) });
              throw new Error(`Not logged in : ${o}`);
            })
          );
        }
        checkActiveUserObservable(e, t, s, o) {
          if (s.scope !== G.F.User) return e.handle();
          const { noUserError: r } = s;
          return (0, g.D)(t.getOrAdd(O.l.UserName, () => j(this.clients))).pipe(
            (0, Rt.w)((t) => {
              if (t) return e.handle();
              if (r) return (0, y.of)({ result: new V.X((0, B.Rn)(r)) });
              throw new Error(`Not logged in : ${o}`);
            })
          );
        }
      };
      bt = (0, u.__decorate)(
        [
          (0, p.Injectable)({ scope: p.Scope.REQUEST }),
          (0, u.__param)(0, (0, p.Inject)(a.REQUEST)),
          (0, u.__metadata)("design:paramtypes", [Object, A, m.$, K])
        ],
        bt
      );
      class Dt {
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
      var Ut = s(734987);
      const Mt = 6e4;
      function Lt(e) {
        return Math.ceil(e / Mt) * Mt;
      }
      function wt(e) {
        return Math.floor(e / Mt) * Mt;
      }
      class Ft {
        constructor(e, t) {
          (this.infra = e), (this.definitions = t);
        }
        async init() {
          const e = Lt(this.infra.timers.time),
            t = await this.infra.repository.getState(),
            s = this.definitions.filter((e) => !t.entries.find((t) => t.name === e.name && t.moduleName === e.moduleName)),
            o = {
              entries: [
                ...t.entries.filter((e) => this.definitions.find((t) => t.name === e.name && t.moduleName === e.moduleName)),
                ...s.map((t) => ({ ...t, dueTimestamp: e + t.periodInMinutes * Mt }))
              ]
            };
          await this.infra.repository.setState(o);
        }
        connect(e) {
          const { infra: t, definitions: s } = this;
          return {
            start: async () => {
              await this.init();
              const o = t.cronSource.alarm$
                .pipe(
                  (0, Ut.b)(async () => {
                    const o = await t.repository.getState(),
                      r = Lt(t.timers.time),
                      n = wt(t.timers.time),
                      i = o.entries.filter((e) => e.dueTimestamp <= r);
                    await Promise.allSettled(
                      i.map((r) => {
                        const i = s.find((e) => e.moduleName === r.moduleName && e.name === r.name);
                        if (!i) throw new Error("we should have a declaration");
                        return (async function (s, o, r, n) {
                          let i = !1;
                          try {
                            i = await e(r.moduleName, r.name);
                          } finally {
                            i && ((r.dueTimestamp = wt(s + n.periodInMinutes * Mt)), await t.repository.setState(o));
                          }
                        })(n, o, r, i);
                      })
                    );
                  })
                )
                .subscribe();
              return {
                stop: () => {
                  o.unsubscribe();
                }
              };
            }
          };
        }
      }
      let Gt,
        kt = class {
          constructor(e, t) {
            (this.request = e), (this.useCaseStacktraceRepo = t);
          }
          intercept(e, t) {
            return this.useCaseStacktraceRepo.append(this.request.name), t.handle();
          }
        };
      kt = (0, u.__decorate)(
        [
          (0, p.Injectable)({ scope: p.Scope.REQUEST }),
          (0, u.__param)(0, (0, p.Inject)(a.REQUEST)),
          (0, u.__metadata)("design:paramtypes", [Object, Ne])
        ],
        kt
      );
      class Bt {
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
      var xt = s(173656);
      const jt = [kt, bt],
        Wt = async ({
          appDefinition: e,
          channels: t,
          currentNode: s,
          implementations: o,
          otherModules: l = [],
          logger: u = new $e(),
          storeInfrastructureFactory: p = new P.N(),
          channelsListener: _ = tt.y,
          timers: E = new Ze(),
          keyValueStorageInfrastructure: A = new st(),
          jsonFetcher: g = new Je(),
          cronSource: h = new rt._C(E),
          defaultDeviceStorageEncryptionCodec: T = { type: ot.CLASS_PROVIDER, useClass: r },
          defaultUserStorageEncryptionCodec: y = { type: ot.CLASS_PROVIDER, useClass: r },
          exceptionLogging: C = Tt
        }) => {
          const I = () => {
            throw new Error("Aborted");
          };
          (xt.abort = I), (xt.exit = I);
          const N = [
              Nt.configure(C),
              ...l,
              ...Object.keys(o)
                .map((e) => e)
                .map((e) => o[e])
            ],
            {
              configProviders: D,
              modules: U,
              modulesMetadata: w,
              onFrameworkInits: F,
              crons: G,
              eventHandlers: k,
              stores: B,
              allDeclarations: x
            } = ((e, t) =>
              t.reduce(
                (t, s) => {
                  const o = Reflect.getMetadata(et, s.module);
                  if (
                    !(r = o) ||
                    "object" != typeof r ||
                    (r.api && !(r.api.commands && r.api.events && r.api.name && r.api.queries && r.handlers)) ||
                    (r.exports && !Array.isArray(r.exports)) ||
                    (r.handlers && !r.api) ||
                    (r.imports && !Array.isArray(r.imports)) ||
                    (r.providers && !Array.isArray(r.providers))
                  )
                    return t;
                  var r;
                  o.onFrameworkInit &&
                    (o.onFrameworkInit instanceof Array
                      ? (t.onFrameworkInits = t.onFrameworkInits.concat(o.onFrameworkInit))
                      : t.onFrameworkInits.push(o.onFrameworkInit));
                  const n = o.api?.name ?? o.sharedModuleName ?? "unnamed";
                  return (
                    t.configProviders.push(
                      ...(function (e, t, s, o) {
                        if (!s.configurations) return [];
                        const { configurations: r } = s,
                          n = [];
                        return (
                          Object.keys(r).forEach((e) => {
                            const s = r[e].token,
                              i = o.configurations?.[e];
                            if (!i) throw new Error(`Missing '${e}' configuration for '${t}' module`);
                            n.push({ ...i, provide: s });
                          }),
                          Object.keys(o.configurations ?? {}).forEach((o) => {
                            s.configurations?.[o] || e.error(`Unknown '${o}' configuration for '${t}' module will be unused`);
                          }),
                          n
                        );
                      })(e, n, o, s)
                    ),
                    o.api?.name && t.modulesMetadata.set(o.api.name, o),
                    t.modules.push(s.module),
                    o.crons && t.crons.push(...o.crons.map((e) => ({ ...e, moduleName: n }))),
                    o.handlers?.events && t.eventHandlers.push(...Object.values(o.handlers.events).flatMap((e) => Object.values(e.events))),
                    o.stores && t.stores.push(...o.stores),
                    (t.allDeclarations[n] = o),
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
              ))(u, N),
            j = new Me();
          B.forEach((e) => {
            j.registerClass(e);
          }),
            ((e, t, s) => {
              const o = new Set([...s.keys()]),
                r = new Set(
                  Object.values(e)
                    .filter((e) => e.main === t || e.queryOnly.includes(t))
                    .map((e) => e.api.name)
                ),
                n = [...r].filter((e) => !o.has(e)),
                i = [...o].filter((e) => !r.has(e));
              if (n.length > 0) throw new Error("These APIs are not implemented " + JSON.stringify(n));
              if (i.length > 0) throw new Error("Some implementations do not have APIS " + JSON.stringify(i));
            })(e, s, w);
          const W = ((e) =>
              [...e.entries()].reduce(
                (e, [t, s]) => {
                  const o = s.handlers?.events ?? {};
                  return (
                    (e[t] = Object.values(o).reduce((e, t) => (t.name ? ((e[t.name] = Object.keys(t.events)), e) : e), (0, c.Ay)({}))), e
                  );
                },
                (0, c.Ay)({})
              ))(w),
            H = new m.$({ appDefinition: e, channels: t, channelsListener: _, currentNode: s, subscriptions: W }),
            V = new d.d(H),
            Q = new R(H),
            Y = new Ft({ cronSource: h, repository: new Dt(A, s), timers: E }, G),
            q = new ze(V, Q, Y),
            z = nt({ token: ee, parameterProvider: T }),
            X = nt({ token: te, parameterProvider: y }),
            $ = new b(),
            Z = new K(new Set(k), x),
            J = (function (e) {
              const t = [];
              return (
                Object.values(e).forEach((e) => {
                  const { api: s } = e,
                    { ClientClass: o } = s;
                  o && (S()(o), t.push({ provide: o, useFactory: (e) => new Bt(e, s), inject: [f] }));
                }),
                t
              );
            })(e),
            se = {
              useFactory: (e, t, s) => {
                const o = e.get(O.l.UserName);
                if (o) return (Gt && Gt.status !== xe) || (Gt = new We(o, s, t)), Promise.resolve(Gt);
              },
              provide: We,
              inject: [O.f, Ce, b]
            },
            oe = Ke.create({
              nodeConfiguration: H,
              brokers: { cqrs: V, event: Q },
              modules: U,
              configProviders: D,
              logger: u,
              lifeCycle: $,
              storeInfrastructureFactory: p,
              timers: E,
              keyValueStorageInfrastructure: A,
              jsonFetcher: g,
              defaultDeviceStorageEncryptionCodecProvider: z,
              defaultUserStorageEncryptionCodecProvider: X,
              storeList: j,
              interceptors: jt,
              introspection: Z,
              moduleClientsProviders: J,
              userUseCaseScopeProvider: se
            }),
            re = await a.NestFactory.create(oe, q, { logger: u }),
            ne = await re.init();
          await (async function (e, t) {
            const s = Object.freeze({ id: -1 }),
              o = e.map(async (e) => {
                const o = { type: M.Init, [L.REQUEST_CONTEXT_ID]: s };
                t.registerRequestByContextId(o, s);
                const r = await t.resolve(e, s, { strict: !1 });
                await r.onFrameworkInit();
              });
            await Promise.all(o);
          })(F, ne),
            re.listen("");
          const ie = q.isListening$.pipe((0, n.h)((e) => !!e));
          return (
            await (0, i.z)(ie),
            $.addShutdownHook(() => re.close()),
            await $.startup(),
            {
              stop: () => $.shutDown(),
              createClient: () => (0, v.R)(e, V),
              sendEvent: (e, t, s, o) => Q.publishEvent(e, t, s, o ?? new O.f())
            }
          );
        },
        Kt = (e) => Wt({ ...e, appDefinition: e.appDefinition, channels: {}, currentNode: "node" });
      var Ht = s(896259);
      class Vt {}
      var Qt = s(804607);
      class Yt {
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
          return encodeURIComponent(e).replace(Yt.STANDARD_ENCODING_REGEX, (e, t) => Yt.STANDARD_ENCODING_REPLACEMENTS[t] ?? e);
        }
      }
      (Yt.STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi),
        (Yt.STANDARD_ENCODING_REPLACEMENTS = { 40: "@", "3A": ":", 24: "$", "2C": ",", "3B": ";", "3D": "=", "3F": "?", "2F": "/" });
      class qt {
        constructor(e = {}, t = {}) {
          (this.map = new Map()),
            (this.encoder = t.encoder ?? new Yt()),
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
              const o = e[s];
              Array.isArray(o)
                ? o.forEach((e) => {
                    t.push({ param: s, value: e, op: 0 });
                  })
                : t.push({ param: s, value: o, op: 0 });
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
          const t = new qt({}, { encoder: this.encoder });
          return t.initFromOther(this), t.applyUpdates(Array.isArray(e) ? e : [e]), t;
        }
        initFromOther(e) {
          e.keys().forEach((t) => this.map.set(t, [...e.map.get(t)]));
        }
        initFromObject(e) {
          Object.keys(e).forEach((t) => {
            const s = e[t],
              o = qt.isValueArray(s) ? s.map(qt.valueToString) : [qt.valueToString(s)];
            this.map.set(t, o);
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
                  [o, r] = -1 === s ? [t.decodeKey(e), ""] : [t.decodeKey(e.slice(0, s)), t.decodeValue(e.slice(s + 1))],
                  n = this.map.get(o) ?? [];
                n.push(r), this.map.set(o, n);
              });
        }
        applyUpdates(e) {
          e.forEach((e) => {
            switch (e.op) {
              case 0:
              case 1: {
                const t = (0 === e.op ? this.map.get(e.param) : void 0) ?? [];
                t.push(qt.valueToString(e.value)), this.map.set(e.param, t);
                break;
              }
              case 2:
                if (void 0 === e.value) {
                  this.map.delete(e.param);
                  break;
                }
                {
                  const t = this.map.get(e.param) ?? [],
                    s = t.indexOf(qt.valueToString(e.value));
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
      class zt {
        constructor(e, t, s, o) {
          (this.body = null),
            (this.headers = new Qt.W()),
            (this.withCredentials = !1),
            (this.timeout = void 0),
            (this.responseType = "json"),
            (this.params = new qt({})),
            (this.url = t),
            (this.method = e),
            zt.mightHaveBody(this.method) && (this.body = s ?? null),
            o &&
              ((this.withCredentials = Boolean(o.withCredentials)),
              o.responseType && (this.responseType = o.responseType),
              o.headers && (this.headers = this.getHeadersFromOptions(o.headers)),
              o.params && (this.params = this.getParamsFromOptions(o.params)),
              o.timeout && o.timeout > 0 && (this.timeout = o.timeout),
              o.mode && (this.mode = o.mode)),
            (this.urlWithParams = this.initUrlWithParams());
        }
        serializeBody() {
          return null === this.body
            ? null
            : zt.isArrayBuffer(this.body) || "string" == typeof this.body
            ? this.body
            : this.body instanceof qt
            ? this.body.toString()
            : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || zt.isArrayBuffer(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof qt
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body || "number" == typeof this.body || "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(e = {}) {
          const t = e.method ?? this.method,
            s = e.url ?? this.url,
            o = e.responseType ?? this.responseType,
            r = void 0 !== e.body ? e.body : this.body,
            n = void 0 !== e.withCredentials ? e.withCredentials : this.withCredentials,
            i = void 0 !== e.timeout ? e.timeout : this.timeout,
            a = e.mode ?? this.mode;
          let c = e.headers ? this.getHeadersFromOptions(e.headers) : this.headers,
            l = e.params ? this.getParamsFromOptions(e.params) : this.params;
          const d = e.setHeaders;
          d && (c = Object.keys(d).reduce((e, t) => e.set(t, d[t]), c));
          const u = e.setParams;
          return (
            u && (l = Object.keys(u).reduce((e, t) => e.set(t, u[t]), l)),
            new zt(t, s, r, { params: l, headers: c, responseType: o, withCredentials: n, timeout: i, mode: a })
          );
        }
        getHeadersFromOptions(e) {
          return e instanceof Qt.W ? e : new Qt.W(e);
        }
        getParamsFromOptions(e) {
          return e instanceof qt ? e : new qt(e);
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
      var Xt = s(912964),
        $t = s(625994),
        Zt = s(673155),
        Jt = s(948844);
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
          let t, s, o;
          if (1 === e.length) (t = e[0]), (s = "response");
          else {
            const [r, n, i] = e;
            (t = new zt(r, n, void 0 !== i.body ? i.body : null, {
              headers: i.headers,
              params: i.params,
              responseType: i.responseType ?? "json",
              withCredentials: i.withCredentials
            })),
              (s = i.observe ?? "body"),
              "json" === i.responseType && "body" === i.observe && (o = i.responseBodyDecoder);
          }
          const r = new es(this.backend, Array.from(this.interceptors.values())),
            n = (0, y.of)(this.addContentTypeRequestHeader(t)).pipe((0, Ut.b)((e) => r.handle(e)));
          switch (s) {
            case "body":
              switch (t.responseType) {
                case "arraybuffer":
                  return n.pipe((0, Jt.Gx)((e) => e.arrayBuffer()));
                case "text":
                  return n.pipe((0, Jt.Gx)((e) => e.text()));
                case "json":
                  return n.pipe((0, Jt.Gx)((e) => e.json(o)));
                default:
                  (0, k.U)(t.responseType);
              }
              break;
            case "response":
              return n;
            default:
              (0, k.U)(s);
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
      ss = (0, u.__decorate)([S(), (0, u.__metadata)("design:paramtypes", [Vt])], ss);
      let os = class {};
      os = (0, u.__decorate)(
        [At({ providers: [ss], configurations: { infrastructure: { token: Vt } }, exports: [ss], sharedModuleName: "http" })],
        os
      );
      var rs = s(249329),
        ns = s(542339);
      function is(e) {
        const t = S();
        return (s) => {
          Reflect.defineMetadata("dl-handler", s, e), t(s);
        };
      }
      function as(...e) {
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
        constructor(e, t, s, o, n) {
          (this.encryptionCodec = e),
            (this.serializationCodec = t),
            (this.transportStorageCodec = s),
            (this.backend = o),
            (this.definition = n),
            (this.codec = as(s, e, t));
          const i = new r();
          this.bypassedDecryptionDecoder = as(s, i, t);
        }
        async read() {
          const e = await this.backend.read();
          if (!e) return;
          const { decoded: t, hasBypassedDecryption: s } = await this.decodeData(e),
            { definition: o } = this;
          if (!ce(t, o.typeGuard)) {
            if (!o.typeGuard(t))
              throw (
                (s && (await this.rawWrite(t)),
                new Error(`Can't migrate non-versioned Storage : Typeguard ${o.typeGuard.name} check failed.`))
              );
            return await this.write(t), t;
          }
          if (t.version < o.schemaVersion) {
            if (!o.migrateStorageSchema) throw (s && (await this.rawWrite(t)), new Error("migrateStorage is undefined"));
            const e = o.migrateStorageSchema(t);
            return await this.write(e), e;
          }
          s && (await this.write(t.content));
          const { content: r } = t;
          if (!o.typeGuard(r)) throw new Error("Type guard failed");
          return r;
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
      const ls = (e) => {
        var t;
        return (
          (t = class extends cs {
            constructor(t, s, o, r) {
              super(t, s, o, r, e);
            }
          }),
          (t.Definition = e),
          t
        );
      };
      var ds = s(385390),
        us = s(6136);
      class ps {
        constructor(e, t, s, o, r, i, a) {
          (this.conf = t),
            (this.allowedToFail = r),
            (this.storage = i),
            (this.codec = a),
            (this.infrastructure = (() => {
              switch (t.scope) {
                case G.F.Device:
                  return s.createDeviceScopedInfrastructure(e, t.storeName, t.storeTypeGuard);
                case G.F.User:
                  if (!o) throw new Error("Attempting to create a user-scoped store without a user");
                  return s.createUserScopedInfrastructure(e, t.storeName, o, t.storeTypeGuard);
              }
              (0, k.U)(t.scope);
            })()),
            (this.timeGetter = () => Date.now()),
            (this.localState$ = new V.X({ timestamp: void 0 })),
            (this.mergedState$ = (0, ds.a)({ infra: this.infrastructure.state$, current: this.localState$ }).pipe(
              (0, h.U)(({ current: e, infra: t }) => (t.timestamp && (!e.timestamp || t.timestamp > e.timestamp) ? t : e)),
              (0, us.x)()
            ));
          const c = t.persist ? void 0 : t.initialValue;
          this.state$ = this.mergedState$.pipe(
            (0, n.h)((e) => !t.persist || !!e.timestamp),
            (0, h.U)((e) => e.data ?? c)
          );
        }
        getState() {
          return (0, i.z)(this.state$);
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
          const { conf: t, codec: s, storage: o } = this;
          if (t.persist) {
            if (!s || !o) throw new Error("Persisted stores should have conf/storage");
            (await this.allowedToFail.conditionallyAllowToFailOne(async () => {
              const e = (await o.read()) ?? t.storage.Definition.initialValue,
                r = await s.decode(e);
              await this.setWithoutPersist(r);
            }, !!t.isCache)) || (await this.setWithoutPersist(await s.decode(t.storage.Definition.initialValue)));
          }
        }
        async persist() {
          const { conf: e, codec: t, storage: s } = this;
          if (!e.persist) return;
          if (!t || !s) throw new Error("Persisted stores should have conf/storage");
          const o = await this.getState(),
            r = await t.encode(o);
          await s.write(r);
        }
      }
      const _s = (e) =>
        e.persist
          ? {
              persist: !0,
              codec: e.codec,
              scope: e.scope,
              storeName: e.storeName,
              storeTypeGuard: e.storeTypeGuard,
              isCache: e.isCache,
              storage: ls(e.storage)
            }
          : { persist: !1, initialValue: e.initialValue, scope: e.scope, storeName: e.storeName };
      function Ss(e) {
        var t;
        const s = _s(e),
          o =
            (((t = class extends ps {
              constructor(e, t, s, o, r, n, i) {
                super(e, t, s, o, r, n, i);
              }
            }).Definition = s),
            t);
        return S()(o), o;
      }
      var Es;
      !(function (e) {
        (e._001KB = "1KB"), (e._010KB = "10KB"), (e._100KB = "100KB"), (e.Unlimited = "Unlimited");
      })(Es || (Es = {}));
      const ms = (e) =>
        "object" == typeof e &&
        null !== e &&
        "swStartTime" in e &&
        "taskTrackingList" in e &&
        "string" == typeof e.swStartTime &&
        "object" == typeof e.taskTrackingList;
      class vs extends Ss({
        persist: !1,
        initialValue: { swStartTime: "", taskTrackingList: {} },
        scope: G.F.Device,
        storeName: "task-tracking",
        storeTypeGuard: ms,
        capacity: Es._001KB
      }) {}
      let Os = class {
        constructor(e) {
          this.store = e;
        }
        async execute({ body: e }) {
          const t = new Date().toISOString(),
            { taskName: s, feature: o, businessDomain: r } = e,
            n = { taskName: s, feature: o, businessDomain: r, startTime: t, serviceWorkerInterruptionCount: 0 },
            i = await this.store.getState();
          return await this.store.set({ ...i, taskTrackingList: { ...i.taskTrackingList, [t]: n } }), Promise.resolve((0, B.Vp)({ id: t }));
        }
      };
      Os = (0, u.__decorate)([is(ns.g), (0, u.__metadata)("design:paramtypes", [vs])], Os);
      var fs = s(545874);
      class As extends (0, ye.E)(fs.W) {}
      (0, ye.K)(fs.W, As);
      var gs = s(593039);
      let hs = class {
        constructor(e, t, s) {
          (this.store = e), (this.carbonLegacyClient = t), (this.appLifecycle = s);
        }
        onFrameworkInit() {
          this.appLifecycle.addAppReadyHook(async () => {
            const e = await this.store.getState(),
              t = { ...e.taskTrackingList },
              s = Object.keys(e.taskTrackingList).map(async (s) => {
                const { taskName: o, feature: r, businessDomain: n, startTime: i } = e.taskTrackingList[s],
                  a = new gs.UserMv3ExtensionTaskInterruptionEvent({
                    businessDomain: n,
                    feature: r,
                    taskName: o,
                    taskStartDateTime: i,
                    serviceWorkerStartDateTime: e.swStartTime
                  }),
                  c = this.carbonLegacyClient;
                await c.commands.carbon({ name: "logEvent", args: [{ event: a }] }), delete t[s];
              });
            await Promise.all(s), await this.store.set({ swStartTime: new Date().toISOString(), taskTrackingList: t });
          });
        }
      };
      hs = (0, u.__decorate)([E(), (0, u.__metadata)("design:paramtypes", [vs, As, b])], hs);
      var Ts = s(829876);
      let ys = class {
        constructor(e, t, s) {
          (this.store = e), (this.carbonLegacyClient = t), (this.logger = s);
        }
        async execute({ body: e }) {
          const { taskTrackingId: t } = e,
            s = await this.store.getState(),
            o = s.taskTrackingList[t];
          if (!o) return this.logger.trace("Trying to track a task that does not exist"), (0, B.Vp)(void 0);
          const { taskName: r, feature: n, businessDomain: i, startTime: a, serviceWorkerInterruptionCount: c } = o,
            l = new gs.UserMv3ExtensionTaskReportEvent({
              businessDomain: i,
              feature: n,
              serviceWorkerInterruptionCount: c,
              serviceWorkerStartDateTime: s.swStartTime,
              taskName: r,
              taskStartDateTime: a,
              taskEndDateTime: new Date().toISOString()
            }),
            d = this.carbonLegacyClient;
          await d.commands.carbon({ name: "logEvent", args: [{ event: l }] });
          const u = { ...s.taskTrackingList };
          return delete u[t], await this.store.set({ swStartTime: s.swStartTime, taskTrackingList: u }), (0, B.Vp)(void 0);
        }
      };
      ys = (0, u.__decorate)([is(Ts.y), (0, u.__metadata)("design:paramtypes", [vs, As, D])], ys);
      let Cs = class {};
      Cs = (0, u.__decorate)(
        [
          At({
            api: rs.e,
            handlers: { commands: { startTaskTracking: Os, terminateTaskTracking: ys }, events: {}, queries: {} },
            stores: [vs],
            onFrameworkInit: hs,
            providers: []
          })
        ],
        Cs
      );
      var Is = s(915572),
        Ns = s(158649),
        Rs = s(645244);
      function Ps(e) {
        const t = S();
        return (s) => {
          Reflect.defineMetadata("dl-handler", s, e), t(s);
        };
      }
      function bs(e) {
        const t = S();
        return (s) => {
          if (Reflect.hasMetadata("dl-handlers", e)) {
            const t = Reflect.getMetadata("dl-handlers", e);
            Reflect.defineMetadata("dl-handlers", [...t, s], e);
          } else Reflect.defineMetadata("dl-handlers", [s], e);
          t(s);
        };
      }
      class Ds {
        constructor(e) {
          (this.publishEvent = (e, t, s, o) => this.broker.publishEvent(e, t, s, o)), (this.broker = new R(e));
          const t = e
            .getModuleNames()
            .reduce(
              (t, s) => ({ ...t, [s]: Object.keys(e.appDefinition[s].api.events).reduce((e, t) => ((e[t] = []), e), (0, c.Ay)({})) }),
              (0, c.Ay)({})
            );
          this.localSubscribersMap = Object.keys(e.subscriptions)
            .map((e) => e)
            .reduce((t, s) => {
              const o = e.subscriptions[s];
              return (
                Object.keys(o)
                  .map((e) => e)
                  .forEach((e) => {
                    const r = o[e] ?? [],
                      n = t[e];
                    r.forEach((e) => {
                      n[e].push(s);
                    });
                  }),
                t
              );
            }, t);
        }
        connect(e) {
          const { localSubscribersMap: t, broker: s } = this;
          return s.connect({
            onLocalEvent: async (s, o, r, n, i, a) => {
              const c = t[s][r];
              await Promise.all(
                c.map(async (t) => {
                  await e.onEvent(s, t, r, n, i, a);
                })
              );
            }
          });
        }
      }
      let Us = class {
        constructor(e, t, s) {
          (this.apiName = e), (this.broker = t), (this.context = s);
        }
        sendEvent(e, t) {
          return this.broker.publishEvent(this.apiName, e, t, this.context);
        }
      };
      Us = (0, u.__decorate)([S(), (0, u.__param)(0, (0, p.Inject)(it)), (0, u.__metadata)("design:paramtypes", [Object, R, O.f])], Us);
      let Ms = class {
        constructor(e, t) {
          (this.apiName = e), (this.broker = t);
        }
        sendEvent(e, t, s) {
          return this.broker.publishEvent(this.apiName, e, t, s ?? new O.f());
        }
      };
      function Ls(e) {
        const t = (e) => ({
            build: () => e,
            withMockedCommand: (s, o) => ((e.commands[s] = o), t(e)),
            withMockedQuery: (s, o) => ((e.queries[s] = o), t(e))
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
      Ms = (0, u.__decorate)([S(), (0, u.__param)(0, (0, p.Inject)(it)), (0, u.__metadata)("design:paramtypes", [Object, R])], Ms);
      const ws = () => {
        const e = (t, s) => {
          const o = new m.$({ appDefinition: t, channels: {}, channelsListener: tt.y, currentNode: "", subscriptions: {} }),
            r = new d.d(o);
          let n;
          const i = async () => {
            if (n) return n;
            const e = s.build(),
              t = r.connect({
                onCommand: (t, s, o) => {
                  if (!(t in e)) throw new Error(`${t} is not mocked`);
                  return e[t].commands[s](o);
                },
                onQuery: (t, s, o) => {
                  if (!(t in e)) throw new Error(`${t} is not mocked`);
                  return e[t].queries[s](o);
                }
              });
            return (n = await t.start()), n;
          };
          return {
            buildClient: async (e) => {
              const t = new f(r, o, e ?? new O.f());
              return await i(), t;
            },
            buildContextlessClient: async () => {
              const e = new A(o, r);
              return await i(), e;
            },
            withMock: (o, r) => {
              const n = { ...t, ...(0, c.Ay)({ [o.name]: { api: o, main: "", queryOnly: [] } }) },
                i = s.withModule(o, r);
              return e(n, i);
            }
          };
        };
        return e(
          {},
          (function () {
            const e = new Map(),
              t = {
                withModule: (s, o) => {
                  const r = s.name;
                  if (void 0 === o) {
                    const o = Ls(s).build();
                    return e.set(r, o), t;
                  }
                  if ("function" == typeof o) {
                    const n = Ls(s);
                    return e.set(r, o(n).build()), t;
                  }
                  return e.set(r, o), t;
                },
                build: (t) => {
                  const s = t ? Object.keys(t) : [...e.keys()];
                  return Array.from(s).reduce(
                    (s, o) => ({ ...s, [o]: e.get(o) ?? Ls(t ? t[o].api : { name: "", commands: {}, events: {}, queries: {} }).build() }),
                    {}
                  );
                }
              };
            return t;
          })()
        );
      };
      var Fs = s(373880),
        Gs = s(27149);
      async function ks(e, t = 1e4) {
        if (!(0, Gs.b)(e)) throw new Error("Error in getQueryValue: the argument is not an observable");
        try {
          return await (0, i.z)(e.pipe((0, Ee.V)({ first: t })));
        } catch (e) {
          throw new Error("Error in getQueryValue: " + e);
        }
      }
      const Bs = (e) => !(!e || "object" != typeof e) && "userName" in e;
      class xs extends Ss({
        initialValue: { userName: void 0 },
        persist: !1,
        scope: G.F.Device,
        storeName: "active-user-store",
        storeTypeGuard: Bs,
        capacity: Es._001KB
      }) {}
      let js = class extends Us {};
      js = (0, u.__decorate)([S()], js);
      let Ws = class {
        constructor(e) {
          this.activeUserStore = e;
        }
        execute() {
          return this.activeUserStore.state$.pipe(
            (0, h.U)((e) => e.userName),
            (0, us.x)(),
            (0, h.U)((e) => (0, B.Vp)({ userName: e }))
          );
        }
      };
      Ws = (0, u.__decorate)([Ps(x.p), (0, u.__metadata)("design:paramtypes", [xs])], Ws);
      let Ks = class {
        constructor(e, t) {
          (this.activeUserStore = e), (this.eventEmitter = t);
        }
        async execute({ body: { userName: e } }) {
          return (
            await this.activeUserStore.set({ userName: e }),
            e && this.eventEmitter.sendEvent("activeUserSet", { userName: e }),
            (0, B.Vp)(void 0)
          );
        }
      };
      Ks = (0, u.__decorate)([is(x.r$), (0, u.__metadata)("design:paramtypes", [xs, js])], Ks);
      let Hs = class {};
      Hs = (0, u.__decorate)(
        [
          At({
            api: x.t$,
            handlers: { commands: { setActiveUser: Ks }, events: {}, queries: { activeUser: Ws } },
            stores: [xs],
            providers: [js]
          })
        ],
        Hs
      );
      const Vs = new P.N();
      async function Qs(e, t) {
        const s = new e("mockedModuleName", e.Definition, Vs, "user", Ue(), le, new r());
        return t && (await s.set(t)), s;
      }
      const Ys = 16,
        qs = 0.5,
        zs = 1.3;
      function Xs(e) {
        var t;
        const {
            chunkControl: { decrement: s = qs, increment: o = zs, initialSize: r = Ys } = { decrement: qs, increment: zs, initialSize: Ys }
          } = e,
          n = new pt.WU();
        return (
          ((t = class {
            constructor(e, t) {
              (this.repository = e), (this.processor = t);
            }
            async dispatchBatch(e) {
              await n.runExclusive(async () => {
                const t = await this.pushItemsInQueue(e);
                for (; t.queue.length > 0; ) await this.processOneChunkFromQueue(t);
              });
            }
            async pushItemsInQueue(t) {
              const s = await this.repository.getBatchState(e.name),
                o = t.filter((e) => !s.queue.find((t) => t === e));
              return o.length && (s.queue.push(...o), await this.repository.setBatchState(e.name, s)), s;
            }
            async processOneChunkFromQueue(t) {
              const n = (function (e) {
                  const { lastStartedChunkFirstId: t, lastStartedChunkSize: n = r } = e;
                  if (!t) return r;
                  const i = !e.queue.find((e) => e === t);
                  return Math.max(1, i ? Math.ceil(n * o) : Math.floor(n * s));
                })(t),
                i = Math.min(n, t.queue.length);
              if (!i) throw new Error("Should have something to process");
              await this.repository.setBatchState(e.name, { ...t, lastStartedChunkSize: i, lastStartedChunkFirstId: t.queue[0] });
              const a = t.queue.splice(0, i);
              await this.processor.processChunk(a), await this.repository.setBatchState(e.name, t);
            }
          }).Definition = e),
          t
        );
      }
      var $s = s(625859);
      let Zs = class {
        constructor(e, t) {
          (this.url = e), (this.fetcher = t), (this.value$ = (0, g.D)((0, $s.P)(() => this.get())));
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
      Zs = (0, u.__decorate)([S(), (0, u.__metadata)("design:paramtypes", [String, Se.X])], Zs);
    },
    158649: (e, t, s) => {
      s.d(t, { N: () => O });
      var o = s(6136),
        r = s(198187),
        n = s(915023),
        i = s(530523),
        a = s(116433),
        c = s(489618),
        l = s(537182),
        d = s(317350),
        u = s(897280),
        p = s(442946),
        _ = s(386924),
        S = s(102049),
        E = s(536414),
        m = s(507074),
        v = s(957459);
      class O {
        constructor(e, t = 3e4) {
          const s = e.status$.pipe((0, o.x)());
          let O = !1;
          const f = new r.x(),
            A = f
              .pipe(
                (0, E.z)(async (o) => {
                  const r = (0, v.Z)();
                  let E = !1;
                  const m = e.messages$.pipe(
                      (0, n.o)(() => !O),
                      (0, i.h)((e) => "acknowledgement" === e.type && e.id === r),
                      (0, a.q)(1),
                      (0, c.V)(t),
                      (0, l.K)(() => d.E),
                      (0, u.d)(1)
                    ),
                    f = m.subscribe(() => {
                      (E = !0), f.unsubscribe();
                    }),
                    A = s
                      .pipe(
                        (0, n.o)(() => !E && !O),
                        (0, p.z)(() => (0, _.D)(e.sendMessage({ type: "send", id: r, message: o.message })))
                      )
                      .subscribe();
                  try {
                    await (0, S.n)(m), A.unsubscribe(), o.resolve();
                  } catch (e) {
                    A.unsubscribe(), o.reject(e);
                  }
                })
              )
              .subscribe();
          (this.stop = () => ((O = !0), A.unsubscribe(), e.stop())),
            (this.send = (e) =>
              new Promise((t, s) => {
                const o = { message: e, resolve: t, reject: s };
                f.next(o);
              })),
            (this.channelState$ = e.status$),
            (this.receivedMessages$ = e.messages$.pipe(
              (0, i.h)((e) => "send" === e.type),
              (0, E.z)(async (t) => {
                if ("send" === t.type) return await e.sendMessage({ type: "acknowledgement", id: t.id }), t.message;
              }),
              (0, m.B)()
            ));
        }
      }
    },
    665488: (e, t, s) => {
      s.d(t, { U: () => T });
      var o = s(724966),
        r = s(102049),
        n = s(530523),
        i = s(536414),
        a = s(386924),
        c = s(87065),
        l = s(537182),
        d = s(69885),
        u = s(464659);
      const p = (e) => !(!e || "object" != typeof e) && "unSubscription" === e.type,
        _ = (e, t, s) => {
          const o = new Set(s),
            r = new Map(),
            _ = t.receivedMessages$.pipe((0, n.h)(p)).subscribe((e) => {
              const t = r.get(e.id);
              t?.unsubscribe(), r.delete(e.id);
            }),
            S = t.receivedMessages$
              .pipe(
                (0, n.h)((e) => {
                  return (
                    !(!(t = e) || "object" != typeof t) && "start" === t.type && o.has(e.definition.destination) && !r.has(e.definition.id)
                  );
                  var t;
                }),
                (0, i.z)((e) =>
                  (0, a.D)(
                    (async (e) => (
                      r.set(e.definition.id, { unsubscribe: () => {} }),
                      await t.send({ type: "initial-acknowledgement", id: e.definition.id }),
                      e
                    ))(e)
                  )
                )
              )
              .subscribe((s) => {
                const o = s.definition.destination,
                  n = e(o, s.definition.content, s.metadata),
                  p = { type: "end", id: s.definition.id },
                  _ = n
                    .pipe(
                      (0, c.U)((e) => ({ id: s.definition.id, data: e, type: "data" })),
                      (0, l.K)((e) => {
                        const t = { id: s.definition.id, type: "error", errorMessage: e.message };
                        return (0, d.of)(t);
                      }),
                      (0, u.l)(p),
                      (0, i.z)((e) => (0, a.D)(t.send(e)))
                    )
                    .subscribe();
                r.set(s.definition.id, {
                  unsubscribe: () => {
                    _.unsubscribe();
                  }
                });
              });
          return {
            unsubscribe: () => {
              S.unsubscribe(), _.unsubscribe();
              for (const e of r.values()) e.unsubscribe();
            }
          };
        };
      var S = s(227257),
        E = s(385390),
        m = s(915023),
        v = s(6136),
        O = s(442946),
        f = s(160399),
        A = s(915572),
        g = s(957459),
        h = s(828489);
      class T {
        constructor(e) {
          this.stopped$ = new o.X(!1);
          const t = { routes: (0, h.Ay)({}) };
          this.routes = (() => {
            const { routes: s } = Object.keys(e).reduce((t, s) => {
              const o = e[s];
              if (
                ("local" === o.type &&
                  (t.routes[s] = { send: o.onMessage, trySend: async (...e) => (await (0, r.n)(o.onMessage(...e)), !0) }),
                "remote" === o.type)
              ) {
                const e = ((e, t) => {
                  const s = (s, o, r) => {
                    const i = { content: o, destination: String(s), id: (0, g.Z)() };
                    return new S.y((s) => {
                      let o = { type: "start", definition: i, metadata: r };
                      const l = (0, E.a)({ message: e.receivedMessages$, stopped: t })
                          .pipe(
                            (0, m.o)(({ stopped: e }) => !e),
                            (0, c.U)(({ message: e }) => e)
                          )
                          .subscribe((e) => {
                            var t;
                            (t = e) && "object" == typeof t && "initial-acknowledgement" === t.type && e.id === i.id
                              ? (o = { ...o, metadata: { ...o.metadata, isReminder: !0 } })
                              : ((e) => !(!e || "object" != typeof e) && "data" === e.type)(e) && e.id === i.id
                              ? s.next(e.data)
                              : ((e) => !(!e || "object" != typeof e) && "error" === e.type)(e) && e.id === i.id
                              ? s.error(new Error(e.errorMessage))
                              : ((e) => !(!e || "object" != typeof e) && "end" === e.type)(e) && e.id === i.id && s.complete();
                          }),
                        d = (0, E.a)({
                          sendTimes: e.channelState$.pipe(
                            (0, v.x)(),
                            (0, n.h)((e) => e === A.D.Connected)
                          ),
                          stopped: t
                        })
                          .pipe(
                            (0, m.o)(({ stopped: e }) => !e),
                            (0, O.z)(() => (0, a.D)(e.send(o)))
                          )
                          .subscribe();
                      return () => {
                        e.send({ type: "unSubscription", id: i.id }), d.unsubscribe(), l.unsubscribe();
                      };
                    });
                  };
                  return {
                    send: s,
                    trySend: async (t, o, n) => (await (0, f.z)(e.channelState$)) === A.D.Connected && (await (0, r.n)(s(t, o, n)), !0)
                  };
                })(o.channel, this.stopped$);
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
              const o = (e) => _((e, t, s) => this.routes[e].send(e, t, s), e, Object.keys(this.routes)),
                r = e.map(o),
                n = new Map(),
                i = t.connectedChannels$.subscribe((e) => {
                  const t = [...n.entries()].filter(([t]) => !(t in e)),
                    s = Object.keys(e).filter((e) => !n.has(e));
                  t.forEach(([e, t]) => {
                    n.delete(e), t.unsubscribe();
                  }),
                    s.forEach((t) => {
                      const s = e[t],
                        r = o(s);
                      n.set(t, r);
                    });
                });
              return Promise.resolve({
                stop: () => ([...r, i, ...n.values()].forEach((e) => e.unsubscribe()), this.stopped$.next(!0), Promise.resolve())
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
      s.d(t, { D: () => o, q: () => i });
      var o,
        r = s(198187),
        n = s(724966);
      !(function (e) {
        (e.Connected = "Connected"), (e.Disconnected = "Disconnected");
      })(o || (o = {}));
      class i {
        constructor() {
          (this.sentMessages$ = new r.x()),
            (this.receivedMessagesSubject$ = new r.x()),
            (this.channelStateSubject$ = new n.X(o.Disconnected));
        }
        send(e) {
          if (this.channelStateSubject$.value !== o.Connected) throw new Error("Channel is not connected");
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
          if (this.channelStateSubject$.value === o.Connected) return { disconnect: () => {} };
          const t = this.sentMessages$.subscribe((t) => {
            e.receivedMessages$.next(t);
          });
          return (
            this.channelState$.next(o.Connected),
            {
              disconnect: () => {
                this.channelState$.next(o.Disconnected), t.unsubscribe();
              }
            }
          );
        }
      }
    },
    554452: (e, t, s) => {
      s.d(t, { v: () => n, y: () => r });
      var o = s(724966);
      const r = { connectedChannels$: new o.X({}) },
        n = (e) => ({ connectedChannels$: new o.X({ channel: e }) });
    },
    645244: (e, t, s) => {
      s.d(t, { F: () => r, k: () => o });
      const o = ({ channelName: e, message: t }) => ({ channelName: e, message: t, type: "graphene-message" }),
        r = (e) => !(!e || "object" != typeof e) && "graphene-message" === e.type;
    },
    616855: (e, t, s) => {
      s.d(t, { $: () => o });
      class o {
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
      s.d(t, { f: () => r, l: () => o });
      const o = { UseCaseId: "USE_CASE_ID", UserName: "USER_NAME" };
      class r {
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
          const t = new r();
          for (const [s, o] of Object.entries(e)) t.entries[s] = o;
          return t;
        }
        clone() {
          return r.fromSerializable(JSON.parse(JSON.stringify(this.toSerializable())));
        }
        withValue(e, t) {
          return this.set(e, t), this;
        }
      }
    },
    475994: (e, t, s) => {
      s.d(t, { W: () => r, X: () => o });
      class o {}
      class r extends o {
        constructor(e) {
          super(), (this.files = e);
        }
        fetch(e) {
          return e in this.files ? Promise.resolve(this.files[e]) : Promise.reject(new Error("404 not found :" + e));
        }
      }
    },
    383081: (e, t, s) => {
      s.d(t, { N: () => i, G: () => n });
      var o = s(724966);
      class r {
        constructor(e) {
          (this.initValue = e), (this.state$ = new o.X(e));
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
      class n {}
      class i extends n {
        createUserScopedInfrastructure() {
          return new r({ timestamp: void 0 });
        }
        createDeviceScopedInfrastructure() {
          return new r({ timestamp: void 0 });
        }
      }
    },
    369594: (e, t, s) => {
      s.d(t, { R_: () => r, _C: () => n, ql: () => o });
      class o {
        run() {
          return Promise.resolve();
        }
        isRunnable() {
          return !1;
        }
      }
      class r {}
      class n extends r {
        constructor(e) {
          super(), (this.alarm$ = e.createObservableTimer(6e4, 6e4));
        }
      }
    },
    137204: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.analyticsApi = t.TrackPageViewCommand = t.TrackEventCommand = void 0);
      const o = s(285888),
        r = s(470986);
      class n extends (0, r.defineCommand)({ scope: r.UseCaseScope.Device }) {}
      t.TrackEventCommand = n;
      class i extends (0, r.defineCommand)({ scope: r.UseCaseScope.Device }) {}
      (t.TrackPageViewCommand = i),
        (t.analyticsApi = (0, o.defineModuleApi)({
          commands: { TrackEventCommand: n, TrackPageViewCommand: i },
          events: {},
          name: "analytics",
          queries: {}
        }));
    },
    207022: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    852389: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(137204), t), r(s(207022), t);
    },
    182142: (e, t) => {
      function s(e) {
        const t = (e) => ({
            build: () => e,
            withMockedCommand: (s, o) => ((e.commands[s] = o), t(e)),
            withMockedQuery: (s, o) => ((e.queries[s] = o), t(e))
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
              withModule: (o, r) => {
                const n = o.name;
                if (void 0 === r) {
                  const r = s(o).build();
                  return e.set(n, r), t;
                }
                if ("function" == typeof r) {
                  const i = s(o);
                  return e.set(n, r(i).build()), t;
                }
                return e.set(n, r), t;
              },
              build: (t) => {
                const o = t ? Object.keys(t) : [...e.keys()];
                return Array.from(o).reduce(
                  (o, r) => ({ ...o, [r]: e.get(r) ?? s(t ? t[r].api : { name: "", commands: {}, events: {}, queries: {} }).build() }),
                  {}
                );
              }
            };
          return t;
        });
    },
    967202: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.appClientMockBuilder = void 0);
      var o = s(182142);
      Object.defineProperty(t, "appClientMockBuilder", {
        enumerable: !0,
        get: function () {
          return o.appClientMockBuilder;
        }
      });
    },
    154072: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CommandMessage = void 0);
      const o = s(898653);
      class r extends o.RequestMessage {
        constructor(e) {
          super(), (this.body = e);
        }
      }
      t.CommandMessage = r;
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
      const o = s(154072),
        r = s(898653);
      (t.defineCommand = (...[e = { scope: r.UseCaseScope.User }]) => {
        var t;
        return ((t = class extends o.CommandMessage {}).metadata = e), t;
      }),
        (t.defineCarbonCommand = (e = { scope: r.UseCaseScope.User }) => {
          var t;
          return ((t = class extends o.CommandMessage {}).metadata = e), t;
        });
    },
    201941: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.defineQuery = void 0);
      const o = s(70522),
        r = s(898653);
      t.defineQuery = (e = { scope: r.UseCaseScope.User }) => {
        var t;
        return ((t = class extends o.QueryMessage {}).metadata = e), t;
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
      var o = s(154072);
      Object.defineProperty(t, "CommandMessage", {
        enumerable: !0,
        get: function () {
          return o.CommandMessage;
        }
      });
      var r = s(70522);
      Object.defineProperty(t, "QueryMessage", {
        enumerable: !0,
        get: function () {
          return r.QueryMessage;
        }
      });
      var n = s(485088);
      Object.defineProperty(t, "PAGINATION_START_PAGE_INDEX", {
        enumerable: !0,
        get: function () {
          return n.PAGINATION_START_PAGE_INDEX;
        }
      });
      var i = s(485088);
      Object.defineProperty(t, "EMPTY_QUERY_RESULT", {
        enumerable: !0,
        get: function () {
          return i.EMPTY_QUERY_RESULT;
        }
      }),
        Object.defineProperty(t, "FilterOperationName", {
          enumerable: !0,
          get: function () {
            return i.FilterOperationName;
          }
        });
      var a = s(898653);
      Object.defineProperty(t, "UseCaseScope", {
        enumerable: !0,
        get: function () {
          return a.UseCaseScope;
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
      var l = s(201941);
      Object.defineProperty(t, "defineQuery", {
        enumerable: !0,
        get: function () {
          return l.defineQuery;
        }
      });
    },
    70522: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.QueryMessage = void 0);
      const o = s(898653);
      class r extends o.RequestMessage {
        constructor(e) {
          super(), (this.body = e);
        }
      }
      t.QueryMessage = r;
    },
    249631: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.EventMessage = t.defineEvent = void 0);
      var o = s(484776);
      Object.defineProperty(t, "defineEvent", {
        enumerable: !0,
        get: function () {
          return o.defineEvent;
        }
      }),
        Object.defineProperty(t, "EventMessage", {
          enumerable: !0,
          get: function () {
            return o.EventMessage;
          }
        });
    },
    484776: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.defineEvent = t.EventMessage = void 0);
      const o = s(898653);
      class r {
        constructor(e) {
          this.body = e;
        }
      }
      (t.EventMessage = r),
        (t.defineEvent = (e = { scope: o.UseCaseScope.User }) => {
          var t;
          return ((t = class extends r {}).metadata = e), t;
        });
    },
    890693: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(s(852389), t),
        r(s(470986), t),
        r(s(735079), t),
        r(s(285888), t),
        r(s(249631), t),
        r(s(967202), t),
        r(s(522396), t),
        r(s(528601), t);
    },
    735079: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(536518), t);
    },
    682397: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.taskTrackingApi = void 0);
      const o = s(285888),
        r = s(496609),
        n = s(507797);
      t.taskTrackingApi = (0, o.defineModuleApi)({
        name: "taskTracking",
        commands: { startTaskTracking: r.StartTaskTrackingCommand, terminateTaskTracking: n.TerminateTaskTrackingCommand },
        events: {},
        queries: {}
      });
    },
    939948: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(496609), t), r(s(507797), t);
    },
    496609: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.StartTaskTrackingCommand = void 0);
      const o = s(470986);
      class r extends (0, o.defineCommand)({ scope: o.UseCaseScope.Device }) {}
      t.StartTaskTrackingCommand = r;
    },
    507797: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.TerminateTaskTrackingCommand = void 0);
      const o = s(470986);
      class r extends (0, o.defineCommand)({ scope: o.UseCaseScope.Device }) {}
      t.TerminateTaskTrackingCommand = r;
    },
    536518: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.taskTrackingApi = void 0);
      var n = s(682397);
      Object.defineProperty(t, "taskTrackingApi", {
        enumerable: !0,
        get: function () {
          return n.taskTrackingApi;
        }
      }),
        r(s(939948), t);
    },
    17286: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    724164: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.featureFlipsApi = t.UserFeatureFlipQuery = t.UserFeatureFlipsQuery = void 0);
      const o = s(470986),
        r = s(608369);
      class n extends (0, o.defineQuery)({ scope: o.UseCaseScope.User }) {}
      t.UserFeatureFlipsQuery = n;
      class i extends (0, o.defineQuery)({ scope: o.UseCaseScope.Device }) {}
      (t.UserFeatureFlipQuery = i),
        (t.featureFlipsApi = (0, r.defineModuleApi)({
          commands: {},
          events: {},
          name: "featureFlips",
          queries: { UserFeatureFlipsQuery: n, UserFeatureFlipQuery: i }
        }));
    },
    171057: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.FeatureFlipsClient = void 0);
      const o = s(623767),
        r = s(724164);
      class n extends (0, o.defineModuleClient)(r.featureFlipsApi) {}
      (t.FeatureFlipsClient = n), (0, o.registerModuleClient)(r.featureFlipsApi, n);
    },
    285888: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(s(608369), t),
        r(s(521697), t),
        r(s(17286), t),
        r(s(306964), t),
        r(s(623767), t),
        r(s(724164), t),
        r(s(171057), t),
        r(s(27646), t);
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
          (e, [s, o]) => (
            (e[((e, t) => (e.endsWith(t) ? e.charAt(0).toLowerCase() + e.substring(1, e.length - t.length) : e))(s, t)] = o), e
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
      const o = s(470986),
        r = s(249631),
        n = s(608369);
      class i extends (0, o.defineQuery)({ scope: o.UseCaseScope.Device }) {}
      t.ActiveUserQuery = i;
      class a extends (0, o.defineCommand)({ scope: o.UseCaseScope.Device }) {}
      t.SetActiveUserCommand = a;
      class c extends (0, r.defineEvent)({ scope: o.UseCaseScope.User }) {}
      (t.ActiveUserSetEvent = c),
        (t.requestContextApi = (0, n.defineModuleApi)({
          commands: { SetActiveUserCommand: a },
          events: { activeUserSet: c },
          name: "requestContext",
          queries: { ActiveUserQuery: i }
        }));
    },
    27646: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RequestContextClient = void 0);
      const o = s(623767),
        r = s(306964);
      class n extends (0, o.defineModuleClient)(r.requestContextApi) {}
      (t.RequestContextClient = n), (0, o.registerModuleClient)(r.requestContextApi, n);
    },
    521697: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NullModuleApi = void 0),
        (t.NullModuleApi = { name: "api", commands: {}, events: {}, queries: {} });
    },
    448304: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.platformInfoApi = t.PlatformInfoQuery = void 0);
      const o = s(470986),
        r = s(285888);
      class n extends (0, o.defineQuery)({ scope: o.UseCaseScope.Device }) {}
      (t.PlatformInfoQuery = n),
        (t.platformInfoApi = (0, r.defineModuleApi)({ name: "platformInfo", commands: {}, events: {}, queries: { PlatformInfoQuery: n } }));
    },
    924199: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.PlatformInfoClient = void 0);
      const o = s(285888),
        r = s(448304);
      class n extends (0, o.defineModuleClient)(r.platformInfoApi) {}
      (t.PlatformInfoClient = n), (0, o.registerModuleClient)(r.platformInfoApi, n);
    },
    522396: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(448304), t), r(s(924199), t), r(s(984289), t);
    },
    984289: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ApplicationBuildType = void 0),
        (function (e) {
          (e.DEV = "DEV"), (e.QA = "QA"), (e.NIGHTLY = "NIGHTLY"), (e.BETA = "BETA"), (e.PRODUCTION = "PRODUCTION");
        })(t.ApplicationBuildType || (t.ApplicationBuildType = {}));
    },
    638783: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.webServicesApi = t.EditSettingsForStagingCommand = t.SettingsForStagingQuery = void 0);
      const o = s(470986),
        r = s(285888);
      class n extends (0, o.defineQuery)({ scope: o.UseCaseScope.Device }) {}
      t.SettingsForStagingQuery = n;
      class i extends (0, o.defineCommand)({ scope: o.UseCaseScope.Device }) {}
      (t.EditSettingsForStagingCommand = i),
        (t.webServicesApi = (0, r.defineModuleApi)({
          commands: { EditSettingsForStagingCommand: i },
          events: {},
          name: "webServices",
          queries: { SettingsForStagingQuery: n }
        }));
    },
    656651: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.WebServicesClient = void 0);
      const o = s(285888),
        r = s(638783);
      class n extends (0, o.defineModuleClient)(r.webServicesApi) {}
      (t.WebServicesClient = n), (0, o.registerModuleClient)(r.webServicesApi, n);
    },
    528601: function (e, t, s) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, s, o) {
                void 0 === o && (o = s);
                var r = Object.getOwnPropertyDescriptor(t, s);
                (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    }
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, s, o) {
                void 0 === o && (o = s), (e[o] = t[s]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || o(t, e, s);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), r(s(638783), t), r(s(656651), t);
    },
    520587: (e, t, s) => {
      s.d(t, { Yu: () => c });
      var o = s(486952),
        r = s(574354),
        n = s(125029);
      class i extends (0, r.g)({ scope: n.F.Device }) {}
      class a extends (0, r.g)({ scope: n.F.Device }) {}
      const c = (0, o.Q)({ commands: { TrackEventCommand: i, TrackPageViewCommand: a }, events: {}, name: "analytics", queries: {} });
    },
    125029: (e, t, s) => {
      s.d(t, { F: () => r, z: () => o });
      class o {}
      var r;
      !(function (e) {
        (e.User = "user"), (e.Device = "device");
      })(r || (r = {}));
    },
    574354: (e, t, s) => {
      s.d(t, { A: () => i, g: () => n });
      var o = s(125029);
      class r extends o.z {
        constructor(e) {
          super(), (this.body = e);
        }
      }
      const n = (...[e = { scope: o.F.User }]) => {
          var t;
          return ((t = class extends r {}).metadata = e), t;
        },
        i = (e = { scope: o.F.User }) => {
          var t;
          return ((t = class extends r {}).metadata = e), t;
        };
    },
    999059: (e, t, s) => {
      s.d(t, { k: () => n });
      var o = s(125029);
      class r extends o.z {
        constructor(e) {
          super(), (this.body = e);
        }
      }
      const n = (e = { scope: o.F.User }) => {
        var t;
        return ((t = class extends r {}).metadata = e), t;
      };
    },
    188885: (e, t, s) => {
      s.d(t, { d: () => n });
      var o = s(125029);
      class r {
        constructor(e) {
          this.body = e;
        }
      }
      const n = (e = { scope: o.F.User }) => {
        var t;
        return ((t = class extends r {}).metadata = e), t;
      };
    },
    249329: (e, t, s) => {
      s.d(t, { e: () => i });
      var o = s(486952),
        r = s(542339),
        n = s(829876);
      const i = (0, o.Q)({
        name: "taskTracking",
        commands: { startTaskTracking: r.g, terminateTaskTracking: n.y },
        events: {},
        queries: {}
      });
    },
    542339: (e, t, s) => {
      s.d(t, { g: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.Device }) {}
    },
    829876: (e, t, s) => {
      s.d(t, { y: () => n });
      var o = s(574354),
        r = s(125029);
      class n extends (0, o.g)({ scope: r.F.Device }) {}
    },
    970493: (e, t, s) => {
      s.d(t, { cV: () => c });
      var o = s(999059),
        r = s(125029),
        n = s(486952);
      class i extends (0, o.k)({ scope: r.F.User }) {}
      class a extends (0, o.k)({ scope: r.F.Device }) {}
      const c = (0, n.Q)({
        commands: {},
        events: {},
        name: "featureFlips",
        queries: { UserFeatureFlipsQuery: i, UserFeatureFlipQuery: a }
      });
    },
    767837: (e, t, s) => {
      function o(e) {
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
      function r(e, t) {
        e.ClientClass = t;
      }
      s.d(t, { E: () => o, K: () => r });
    },
    486952: (e, t, s) => {
      s.d(t, { Q: () => r });
      const o = (e, t) =>
          Object.entries(e).reduce(
            (e, [s, o]) => (
              (e[((e, t) => (e.endsWith(t) ? e.charAt(0).toLowerCase() + e.substring(1, e.length - t.length) : e))(s, t)] = o), e
            ),
            {}
          ),
        r = (e) => ({ name: e.name, commands: o(e.commands, "Command"), queries: o(e.queries, "Query"), events: o(e.events, "Event") });
    },
    208987: (e, t, s) => {
      s.d(t, { p: () => c, r$: () => l, t$: () => u });
      var o = s(999059),
        r = s(125029),
        n = s(574354),
        i = s(188885),
        a = s(486952);
      class c extends (0, o.k)({ scope: r.F.Device }) {}
      class l extends (0, n.g)({ scope: r.F.Device }) {}
      class d extends (0, i.d)({ scope: r.F.User }) {}
      const u = (0, a.Q)({
        commands: { SetActiveUserCommand: l },
        events: { activeUserSet: d },
        name: "requestContext",
        queries: { ActiveUserQuery: c }
      });
    },
    650540: (e, t, s) => {
      s.d(t, { J: () => a });
      var o = s(999059),
        r = s(125029),
        n = s(486952);
      class i extends (0, o.k)({ scope: r.F.Device }) {}
      const a = (0, n.Q)({ name: "platformInfo", commands: {}, events: {}, queries: { PlatformInfoQuery: i } });
    },
    397191: (e, t, s) => {
      s.d(t, { Dm: () => l });
      var o = s(999059),
        r = s(125029),
        n = s(574354),
        i = s(486952);
      class a extends (0, o.k)({ scope: r.F.Device }) {}
      class c extends (0, n.g)({ scope: r.F.Device }) {}
      const l = (0, i.Q)({
        commands: { EditSettingsForStagingCommand: c },
        events: {},
        name: "webServices",
        queries: { SettingsForStagingQuery: a }
      });
    },
    65255: (e, t, s) => {
      s.d(t, { w: () => o });
      const o = {
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
        EcommerceWebB2BDiscontinuationDev: "ecommerce_web_b2bDiscontinuation_dev",
        EcommerceWebB2BDiscontinuationPhase1: "ecommerce_web_b2bDiscontinuation_phase1",
        EcommerceWebB2BDiscontinuationPhase2: "ecommerce_web_b2bDiscontinuation_phase2",
        GrowthproductDSLPaywallDemogorgon: "growthproduct_DSLPaywall_demogorgon",
        ImsWebWeakMpProd: "ims_web_weak_mp_prod",
        ItadminSAEXCryptoMigrationPhase3V1: "itadmin_SAEX_CryptoMigration_Phase3_v1",
        ItadminTacEncryptionserviceSSOmigrationReset: "itadmin_tac_encryptionservice_SSOmigration_reset",
        ItadminTacPhonesupport: "itadmin_tac_phonesupport",
        OnboardingWebTeamsignuppage: "onboarding_web_teamsignuppage",
        OnboardingWebAdminVaultGetStartedGuide: "onboarding_web_adminVaultGetStartedGuide",
        PasswordHealthWeb: "passwordHealthWeb",
        SaexOnboardingHubAddPasswords: "saexOnboardingHubAddPasswords",
        SaexSecureNoteAttachmentsForrelease: "saex_SecureNoteAttachments_forrelease",
        TechWeekWebDisplayLabs: "techWeek_web_displayLabs",
        TechweekWebAttachmentsForIdsV1: "techweek_web_attachmentsForIds_v1",
        TechweekWebExpiredLabelforIDDev: "techweek_web_expiredLabelforID_dev",
        WebplatformWebPrideColors: "webplatform_web_prideColors",
        WebproductExtensionActivateChangeMasterPasswordRelease: "webproduct_extension_ActivateChangeMasterPassword_release",
        WebproductExtensionShowUserConsentOptions: "webproduct_extension_ShowUserConsentOptions",
        SupportMarkdownInSecureNotes: "webproduct_extension_securenotesmarkdown_dev",
        SharingVaultOtpSetupDev: "sharingVault_web_otp_setup_dev",
        SecretManagementDev: "ace_secrets_vault_dev"
      };
    },
    810370: (e, t, s) => {
      s.d(t, { s: () => n });
      var o = s(46041);
      function r(e) {
        const t = e.length,
          s = [];
        for (let r = 0; r < t; r += 3)
          s.push(o.T[e[r] >> 2]),
            s.push(o.T[((3 & e[r]) << 4) | (e[r + 1] >> 4)]),
            s.push(o.T[((15 & e[r + 1]) << 2) | (e[r + 2] >> 6)]),
            s.push(o.T[63 & e[r + 2]]);
        return s.join("");
      }
      function n(e, t = o.V) {
        const s = new Uint8Array(e),
          n = s.length,
          i = t % 3,
          a = 0 === i ? t : t + (3 - i),
          c = Math.ceil(n / a);
        let l = "",
          d = -1;
        for (; d++ < c; ) {
          const e = d * a,
            t = d === c - 1 ? n : (d + 1) * a,
            o = r(s.slice(e, t));
          l = l.concat(o);
        }
        return n % 3 == 2 ? l.substring(0, l.length - 1) + "=" : n % 3 == 1 ? l.substring(0, l.length - 2) + "==" : l;
      }
    },
    1971: (e, t, s) => {
      s.d(t, { K: () => r });
      var o = s(810370);
      function r(e) {
        const t = new Uint8Array(e);
        return (0, o.s)(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
    },
    89685: (e, t, s) => {
      s.d(t, { v: () => r });
      const o = Math.pow(2, 14) - 1;
      function r(e) {
        const t = new Uint8Array(e),
          s = t.length;
        let r = "",
          n = o;
        for (let e = 0; e < s; e += n) {
          e + n > s && (n = s - e);
          const o = t.subarray(e, e + n);
          r += String.fromCharCode(...o);
        }
        return r;
      }
    },
    668376: (e, t, s) => {
      s.d(t, { L: () => r });
      var o = s(346803);
      function r(e) {
        const t = new Uint8Array(e),
          s = [];
        for (let e = 0; e < t.byteLength; e++) s[e >>> 2] |= t[e] << (24 - (e % 4) * 8);
        return o.lib.WordArray.create(s, t.byteLength);
      }
    },
    707502: (e, t, s) => {
      s.d(t, { R: () => n });
      var o = s(46041);
      const r = new Uint8Array(256);
      for (let e = 0; e < o.T.length; e++) r[o.T.charCodeAt(e)] = e;
      function n(e) {
        let t = 0.75 * e.length;
        const s = e.length;
        let o,
          n,
          i,
          a,
          c,
          l = 0;
        e.endsWith("=") && (t--, "=" === e[e.length - 2] && t--);
        const d = new ArrayBuffer(t),
          u = new Uint8Array(d);
        for (o = 0; o < s; o += 4)
          (n = r[e.charCodeAt(o)]),
            (i = r[e.charCodeAt(o + 1)]),
            (a = r[e.charCodeAt(o + 2)]),
            (c = r[e.charCodeAt(o + 3)]),
            (u[l++] = (n << 2) | (i >> 4)),
            (u[l++] = ((15 & i) << 4) | (a >> 2)),
            (u[l++] = ((3 & a) << 6) | (63 & c));
        return d;
      }
    },
    560198: (e, t, s) => {
      s.d(t, { N: () => r });
      var o = s(707502);
      function r(e) {
        const t = e.replace(/-/g, "+").replace(/_/g, "/"),
          s = (4 - (t.length % 4)) % 4,
          r = t.padEnd(t.length + s, "=");
        return (0, o.R)(r);
      }
    },
    46041: (e, t, s) => {
      s.d(t, { T: () => r, V: () => o });
      const o = Math.pow(10, 6),
        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    },
    407573: (e, t, s) => {
      s.d(t, { i: () => o });
      const o = (e) => {
        const t = e.match(/[\da-f]{2}/gi);
        return t ? new Uint8Array(t.map((e) => parseInt(e, 16))).buffer : new Uint8Array().buffer;
      };
    },
    354066: (e, t, s) => {
      function o(e) {
        const t = new ArrayBuffer(e.length),
          s = new Uint8Array(t);
        for (let t = 0; t < e.length; ++t) s[t] = e.charCodeAt(t);
        return t;
      }
      s.d(t, { u: () => o });
    },
    669806: (e, t, s) => {
      function o(e) {
        const { sigBytes: t, words: s } = e,
          o = new Uint8Array(t);
        let r = 0,
          n = 0;
        for (; r !== t; ) {
          const e = s[n++];
          if (((o[r++] = (4278190080 & e) >>> 24), r === t)) break;
          if (((o[r++] = (16711680 & e) >>> 16), r === t)) break;
          if (((o[r++] = (65280 & e) >>> 8), r === t)) break;
          o[r++] = 255 & e;
        }
        return o.buffer;
      }
      s.d(t, { o: () => o });
    },
    174153: (e, t, s) => {
      s.d(t, { X: () => i });
      var o = s(89685),
        r = s(668376),
        n = s(669806);
      function i(e, t) {
        const s = (0, o.v)(t),
          i = (0, r.L)(e);
        return (0, n.o)(CryptoJS.AES.decrypt(s, i, { mode: CryptoJS.mode.ECB }));
      }
    },
    186381: (e, t, s) => {
      s.d(t, { $: () => n });
      var o = s(22609),
        r = s(983961);
      async function n(e, t, s) {
        const n = await (0, r.Y)(e);
        return self.crypto.subtle.decrypt({ name: o.z, iv: t }, n, s);
      }
    },
    980954: (e, t, s) => {
      s.d(t, { x: () => r });
      var o = s(22609);
      async function r(e, t, s) {
        const r = await self.crypto.subtle.importKey("raw", e, "PBKDF2", !1, ["deriveKey"]),
          n = { name: o.z, length: 256 },
          { iterations: i, hashType: a } = s,
          c = { name: "PBKDF2", salt: t, iterations: i, hash: { name: a } },
          l = await self.crypto.subtle.deriveKey(c, r, n, !0, ["encrypt", "decrypt"]);
        return self.crypto.subtle.exportKey("raw", l);
      }
    },
    983961: (e, t, s) => {
      s.d(t, { Y: () => r });
      var o = s(22609);
      function r(e) {
        return self.crypto.subtle.importKey("raw", e, o.z, !1, ["encrypt", "decrypt"]);
      }
    },
    553788: (e, t, s) => {
      s.r(t),
        s.d(t, {
          BrowserCronSource: () => St,
          BrowserPortConnector: () => Pt.G,
          BrowserPortListener: () => Rt,
          BrowserPortListenerChannel: () => Mt,
          BufferedEventStream: () => c,
          ExtensionCronSource: () => At,
          ExtensionLocalStorageInfrastructure: () => ct,
          HttpFetchBackend: () => Z,
          IndexDbKeyValueStorage: () => pt,
          IndexDbStorage: () => ut,
          JsonExtensionResourceFetcher: () => i,
          JsonWebAppResourceFetcher: () => r,
          PageToWorkerChannel: () => yt,
          computeHash: () => _,
          computeHashSynchronous: () => S,
          cookieRemoveByDomain: () => Oe,
          decryptAes256: () => E.$,
          decryptAesEcb256: () => m.X,
          decryptRsaOaep: () => f,
          deriveKeyArgon2d: () => h,
          deriveKeyPbkdf2: () => T.x,
          disableBrowserNativeAutofill: () => le,
          enablePrivacyService: () => ce,
          encryptAes256: () => I,
          encryptRsaOaep: () => N,
          generateKeyAes256: () => R,
          generateKeyPairRsaOaep: () => b,
          getLanguage: () => oe,
          getRandomValues: () => D,
          getShortcutValues: () => Pe,
          isMv3Environment: () => gt,
          makeStoreInfrastructure: () => nt,
          signHmacSha: () => L,
          signRsassaPkcs1: () => w,
          storageLocalItemExists: () => Ue,
          unsafeComputeMd5Hash: () => k,
          updateToolbarIcon: () => Se,
          verifyHmacSha: () => B,
          verifyRsassaPkcs1: () => x,
          webappClose: () => He,
          webappOpen: () => je
        });
      var o = s(475994);
      class r extends o.X {
        constructor(e) {
          super(), (this.publicPath = e);
        }
        async fetch(e) {
          return (await fetch(new URL(e.replace(/^\/*/, ""), this.publicPath).href)).json();
        }
      }
      var n = s(92204);
      class i extends o.X {
        async fetch(e) {
          const t = (0, n.A)(e);
          return (await fetch(t)).json();
        }
      }
      var a = s(227257);
      class c {
        constructor(e, t) {
          (this.source = e), (this.filter = t);
          let s = [];
          const o = new Set();
          (this.listener = (e, t) => {
            if (!this.filter(e, t)) return !1;
            o.size ? o.forEach((s) => s.next([e, t])) : s.push([e, t]);
          }),
            (this.events$ = new a.y(
              (e) => (
                o.size || (s.forEach((t) => e.next(t)), (s = [])),
                o.add(e),
                () => {
                  o.delete(e);
                }
              )
            )),
            this.source.addListener(this.listener);
        }
        stop() {
          this.source.removeListener(this.listener);
        }
      }
      var l = s(5900),
        d = s.n(l),
        u = s(668376),
        p = s(669806);
      function _(e, t) {
        if (self.crypto.subtle) return self.crypto.subtle.digest({ name: t }, e);
        if ("SHA-1" === t) {
          const t = (0, u.L)(e),
            s = (0, p.o)(d()(t));
          return Promise.resolve(s);
        }
        return Promise.reject(new Error("Unsupported hash method"));
      }
      function S(e, t) {
        if ("SHA-1" === t) {
          const t = (0, u.L)(e);
          return (0, p.o)(d()(t));
        }
        throw new Error("Unsupported hash method");
      }
      var E = s(186381),
        m = s(174153);
      const v = "RSA-OAEP",
        O = "RSASSA-PKCS1-v1_5";
      async function f(e, t, s) {
        const o = { name: v, hash: { name: s } },
          r = await self.crypto.subtle.importKey("pkcs8", e, o, !1, ["decrypt"]);
        return self.crypto.subtle.decrypt(o, r, t);
      }
      var A = s(635558),
        g = s.n(A);
      async function h(e, t, s) {
        const { tCost: o, mCost: r, parallelism: n } = s,
          { hash: i } = await g().hash({
            pass: new Uint8Array(e),
            salt: new Uint8Array(t),
            time: o,
            mem: r,
            hashLen: 32,
            parallelism: n,
            type: A.ArgonType.Argon2d
          });
        return i.buffer;
      }
      var T = s(980954),
        y = s(22609),
        C = s(983961);
      async function I(e, t, s) {
        const o = await (0, C.Y)(e);
        return self.crypto.subtle.encrypt({ name: y.z, iv: t }, o, s);
      }
      async function N(e, t, s) {
        const o = { name: v, hash: { name: s } },
          r = await self.crypto.subtle.importKey("spki", e, o, !1, ["encrypt"]);
        return self.crypto.subtle.encrypt(o, r, t);
      }
      async function R() {
        const e = await self.crypto.subtle.generateKey({ name: y.z, length: y.N }, !0, ["encrypt", "decrypt"]);
        return self.crypto.subtle.exportKey("raw", e);
      }
      const P = new Uint8Array([1, 0, 1]);
      async function b(e) {
        const t = await self.crypto.subtle.generateKey({ name: v, modulusLength: 2048, publicExponent: P, hash: { name: e } }, !0, [
            "encrypt",
            "decrypt"
          ]),
          { privateKey: s, publicKey: o } = t;
        return { privateKey: await self.crypto.subtle.exportKey("pkcs8", s), publicKey: await self.crypto.subtle.exportKey("spki", o) };
      }
      function D(e) {
        const t = new Uint8Array(e);
        return self.crypto.getRandomValues(t);
      }
      const U = "SHA-256";
      function M(e, t) {
        return self.crypto.subtle.importKey("raw", e, { name: "HMAC", hash: { name: t } }, !0, ["sign", "verify"]);
      }
      async function L(e, t, s = U) {
        const o = await M(e, s);
        return self.crypto.subtle.sign({ name: "HMAC", hash: { name: s } }, o, t);
      }
      async function w(e, t, s) {
        const o = { name: O, hash: { name: s } },
          r = await self.crypto.subtle.importKey("pkcs8", e, o, !1, ["sign"]);
        return self.crypto.subtle.sign(o, r, t);
      }
      var F = s(590278),
        G = s.n(F);
      function k(e) {
        const t = (0, u.L)(e);
        return (0, p.o)(G()(t));
      }
      async function B(e, t, s, o = U) {
        const r = await M(e, o);
        return self.crypto.subtle.verify({ name: "HMAC", hash: { name: o } }, r, t, s);
      }
      async function x(e, t, s, o) {
        const r = { name: O, hash: { name: o } },
          n = await self.crypto.subtle.importKey("spki", e, r, !1, ["verify"]);
        return self.crypto.subtle.verify(r, n, t, s);
      }
      var j = s(87065),
        W = s(793192),
        K = s(890171),
        H = s(547968),
        V = s(537182),
        Q = s(69885),
        Y = s(51992),
        q = s(673155),
        z = s(912964),
        X = s(804607),
        $ = s(287279);
      class Z {
        constructor() {
          (this.toHttpResult = (e) => (e instanceof q.a ? (0, $.Rn)(e) : e.ok ? (0, $.Vp)(e) : (0, $.Rn)(new q.R(e)))),
            (this.toHttpResponse = (e) =>
              e instanceof q.a
                ? e
                : new z.Z({
                    body: e.body,
                    url: e.url,
                    status: e.status,
                    statusText: e.statusText,
                    headers: this.mapToHttpHeaders(e.headers)
                  }));
        }
        handle(e) {
          const t = this.getTimeout$(e.timeout),
            s = this.doFetch(e).pipe((0, j.U)(this.toHttpResponse), (0, j.U)(this.toHttpResult));
          return (0, W.S)(t, s);
        }
        getTimeout$(e) {
          return e ? (0, K.H)(e).pipe((0, j.U)(() => (0, $.Rn)(new q.a()))) : H.C;
        }
        doFetch(e) {
          return (0, Y.U)(e.url, {
            method: e.method,
            body: e.serializeBody(),
            headers: this.getHeaders(e),
            credentials: e.withCredentials ? "include" : "omit",
            mode: e.mode
          }).pipe(
            (0, V.K)((e) => {
              if (!(e instanceof TypeError)) throw e;
              return (0, Q.of)(new q.a());
            })
          );
        }
        mapToHttpHeaders(e) {
          const t = new X.W();
          return e.forEach((e, s) => t.set(s, e)), t;
        }
        getHeaders(e) {
          return e.headers.keys().reduce((t, s) => ({ ...t, [s]: e.headers.get(s) }), {});
        }
      }
      const J = new Set(["en", "fr", "es", "ja", "de", "pt", "it", "ko", "zh", "nl", "sv"]),
        ee = "en";
      function te(e) {
        return e.substr(0, 2);
      }
      function se(e) {
        const t = te(e);
        return J.has(t);
      }
      function oe() {
        const e = [navigator.language].concat(navigator.languages).find(se);
        return e ? (e.includes("-") ? te(e) : e) : ee;
      }
      var re = s(930754),
        ne = s(782324),
        ie = s(781805);
      const ae = " ";
      async function ce(e, t) {
        try {
          const { levelOfControl: t } = await (0, re.U)(e);
          if ("controllable_by_this_extension" !== t && "controlled_by_this_extension" !== t) {
            const s = [`Impossible to change browser setting: ${e}.`, `Extension prevented from changing: ${t}`].join(ae);
            throw new Error(s);
          }
        } catch (t) {
          if ((0, ne.b)(t)) throw new Error(`Browser setting not supported: ${e}`);
          if ((0, ne.I)(t)) throw t.runtimeError;
          throw t;
        }
        try {
          await (0, ie.t)(e, t);
        } catch (e) {
          throw (0, ne.I)(e) ? e.runtimeError : e;
        }
      }
      async function le() {
        const e = ["autofillAddressEnabled", "autofillCreditCardEnabled", "passwordSavingEnabled"].map((e) => ce(e, !1));
        await Promise.all(e);
      }
      var de = s(384318),
        ue = s(516241);
      const pe = { nightly: "icon_nightly_auth", mv2: "icon_auth", mv3: "icon_mv3_auth" },
        _e = "icon_not_auth";
      async function Se({ isUserAuthenticated: e }) {
        const t = `icons/action/${
            e
              ? (function () {
                  const e = (0, de.W)();
                  return e.name.includes("Nightly") ? pe.nightly : e.name.includes("Beta") || 3 === e.manifest_version ? pe.mv3 : pe.mv2;
                })()
              : _e
          }`,
          s = { 16: `${t}.png`, 32: `${t}@2x.png` };
        await (0, ue.B)(s);
      }
      var Ee = s(329),
        me = s(598641);
      function ve(e) {
        return `${"http" + (e.secure ? "s" : "")}://${e.domain.startsWith(".") ? e.domain.substring(1) : e.domain}${e.path}`;
      }
      async function Oe(e) {
        const t = await (0, Ee.g)({ domain: e });
        return Promise.all(t.map((e) => (0, me.O)({ url: ve(e), name: e.name })));
      }
      var fe = s(528509),
        Ae = s(690123);
      const ge = /^_execute(_browser){0,1}_action$/,
        he = "+";
      var Te;
      function ye(e) {
        return ge.test(e.name ?? "");
      }
      function Ce(e) {
        const t = e.toUpperCase();
        switch (t) {
          case "⌃":
          case "CTRL":
            return fe.isMacOS() ? Te.Command : Te.Ctrl;
          case "SHIFT":
          case "⇧":
            return Te.Shift;
          case "COMMAND":
          case "⌘":
            return Te.Command;
          case "MACCTRL":
            return Te.MacCtrl;
          default:
            return t;
        }
      }
      function Ie(e) {
        const t = Object.values(Te),
          s = t.indexOf(e);
        return -1 === s ? t.length : s;
      }
      function Ne(e, t) {
        return Ie(e) - Ie(t);
      }
      function Re(e) {
        switch (e) {
          case Te.Ctrl:
          case Te.MacCtrl:
            return "Ctrl";
          case Te.Shift:
            return "⇧";
          case Te.Command:
            return "⌘";
          default:
            return e;
        }
      }
      async function Pe() {
        const e = await (0, Ae.g)(),
          t = e.find(ye)?.shortcut;
        if (!t) return;
        const s = (function (e) {
          return e.split(e.includes(he) ? he : "");
        })(t);
        return s.map(Ce).sort(Ne).map(Re);
      }
      !(function (e) {
        (e.Command = "Command"), (e.Ctrl = "Ctrl"), (e.MacCtrl = "MacCtrl"), (e.Shift = "Shift");
      })(Te || (Te = {}));
      var be = s(939680),
        De = s(641808);
      async function Ue(e) {
        if ((0, be.G)()) return (await (0, be.y)(e)) > 0;
        const t = await (0, De.U)(e),
          s = void 0 === t[e],
          o = null === t[e];
        return !s && !o;
      }
      var Me = s(724715),
        Le = s(772733),
        we = s(457306),
        Fe = s(731460),
        Ge = s(661222);
      async function ke() {
        const e = await (0, Ge.I)({}),
          t = (0, n.A)("");
        return e.filter((e) => "string" == typeof e.url && e.url.startsWith(t)).filter((e) => "" !== e.url);
      }
      const Be = "index.html";
      function xe() {
        return `${(0, n.A)("")}${Be}`;
      }
      async function je({ id: e, query: t, route: s }) {
        const o = (function ({ identifier: e, queryInfo: t, name: s }) {
            const o = xe();
            if (!s) return o;
            const r = e ? `#${s}/${e}` : `#${s}`,
              n = t
                ? `?${(function (e) {
                    return Object.keys(e)
                      .map((t) => `${t}=${e[t]}`)
                      .join("&");
                  })(t)}`
                : "";
            return encodeURI(`${o}${r}${n}`);
          })({ identifier: e, queryInfo: t, name: s }),
          r = await ke();
        r.length
          ? await (async function ({ path: e, tabs: t }) {
              const s = await (0, Le.T)(),
                o = (function ({ existingTabs: e, focusedWindow: t }) {
                  const s = e.filter((e) => e.active),
                    o = s.find((e) => e.windowId === t.id),
                    r = s.pop(),
                    n = e.pop();
                  return o ?? r ?? n;
                })({ existingTabs: t, focusedWindow: s });
              if (!o) return;
              if ((o.windowId !== s.id && (0, we.V)(o.windowId, { focused: !0 }), !o.id)) return;
              const r = { active: !0, ...(e === xe() ? {} : { url: e }) };
              await (0, Fe.V)(o.id, r);
            })({ path: o, tabs: r })
          : await (async function (e) {
              const t = { url: e };
              await (0, Me.U)(t);
            })(o);
      }
      var We = s(215904),
        Ke = s(549259);
      async function He() {
        const e = await ke();
        if (!e.length) return;
        const t = (0, We.a)(),
          s = e.map((e) => e.id).filter((e) => "number" == typeof e && e !== t);
        await (0, Ke.O)(s);
      }
      var Ve = s(383081),
        Qe = s(732012),
        Ye = s(507074),
        qe = s(724966),
        ze = s(385390),
        Xe = s(915023),
        $e = s(826603),
        Ze = s(56847),
        Je = s(252477),
        et = s(15026);
      function tt(e) {
        return JSON.parse(JSON.stringify(e));
      }
      class st {
        constructor() {
          this.events$ = new a.y((e) => {
            const t = (t) => {
              e.next(t);
            };
            return $e.r.addListener(t), () => $e.r.removeListener(t);
          }).pipe((0, Ye.B)());
        }
      }
      class ot {
        constructor(e, t, s) {
          (this.stopped$ = new qe.X(!1)), (this.key = t), (this.typeGuard = s ?? ((e) => !0));
          const o = new a.y((s) => {
            this.getState().then((e) => {
              s.next(e);
            });
            const o = e.events$.subscribe((e) => {
              if (t in e) {
                const { newValue: o } = e[t];
                return s.next(this.asDataWithTimestamp(o));
              }
            });
            return () => o.unsubscribe();
          });
          this.state$ = (0, ze.a)({ state: o, isStopped: this.stopped$ }).pipe(
            (0, Xe.o)(({ isStopped: e }) => !e, !1),
            (0, j.U)(({ state: e }) => e)
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
          return (0, Ze.t)(tt({ [this.key]: e }));
        }
        init(e) {
          return (0, Ze.t)(tt({ [this.key]: e }));
        }
        clear() {
          return (0, Je.O)(this.key);
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
      class rt extends Ve.G {
        constructor() {
          super(...arguments), (this.source = new st());
        }
        createUserScopedInfrastructure(e, t, s, o) {
          const r = `graphene.${e}.${t}.${s}`;
          return new ot(this.source, r, o);
        }
        createDeviceScopedInfrastructure(e, t, s) {
          const o = `graphene.${e}.${t}`;
          return new ot(this.source, o, s);
        }
      }
      function nt() {
        return (0, Qe.G)() ? new rt() : new Ve.N();
      }
      var it = s(9244),
        at = s(945441);
      class ct {
        async getAllKeys() {
          return Object.keys(await (0, De.U)(null));
        }
        async get(e) {
          const t = (await (0, De.U)([e]))[e];
          if (t) {
            if ("string" != typeof t)
              throw new Error(
                `[ChromeLocalStorage] - cannot read content of ${e} properly. Type is\n        ${typeof t} but should be 'string'`
              );
            return t;
          }
        }
        async set(e, t) {
          await (0, it.t)({ [e]: t });
        }
        async remove(e) {
          await (0, at.O)([e]);
        }
      }
      var lt = s(996168);
      class dt extends (0, lt.Hu)("NotSupported", "Index DB is not supported in this environment") {}
      class ut {
        constructor(e, t, s) {
          (this.DB_STORE_NAME = e), (this.DB_VERSION = t), (this.DB_OBJECT_STORE_NAME = s);
        }
        getIndexedDB() {
          return new Promise((e, t) => {
            const s = self.indexedDB;
            if (!s) return t(new Error("indexedDB is not supported in this environment"));
            const o = s.open(this.DB_STORE_NAME, this.DB_VERSION);
            (o.onerror = function () {
              "InvalidStateError" === o.error?.name && e((0, $.Rn)(new dt())), t(o.error);
            }),
              (o.onupgradeneeded = () => {
                o.result.objectStoreNames.contains(this.DB_OBJECT_STORE_NAME) || o.result.createObjectStore(this.DB_OBJECT_STORE_NAME);
              }),
              (o.onsuccess = function () {
                (o.onsuccess = null), e((0, $.Vp)(o.result));
              });
          });
        }
        async isSupported() {
          return (0, $.d6)(await this.getIndexedDB());
        }
        async getStore(e = "readwrite") {
          const t = await this.getIndexedDB();
          if (!(0, $.d6)(t)) throw new Error("Failed to get db");
          return t.data.transaction([this.DB_OBJECT_STORE_NAME], e).objectStore(this.DB_OBJECT_STORE_NAME);
        }
        async readItem(e) {
          const t = await this.getStore("readonly");
          return new Promise((s) => {
            const o = t.get(e);
            o.onsuccess = () => {
              (o.onsuccess = null), s(o.result);
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
            const o = t.delete(e);
            o.onsuccess = () => {
              (o.onsuccess = null), s();
            };
          });
        }
        async writeItem(e, t) {
          const s = await this.getStore("readwrite");
          return new Promise((o) => {
            const r = s.put(t, e);
            r.onsuccess = () => {
              (r.onsuccess = null), o();
            };
          });
        }
        async itemExists(e) {
          return null != (await this.readItem(e));
        }
      }
      class pt {
        constructor() {
          this.storageLayer = new ut("dashlane-ng", 1, "module-data");
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
      var _t = s(369594);
      class St extends _t.R_ {
        constructor() {
          super(...arguments),
            (this.alarm$ = new a.y((e) => {
              const t = self.setInterval(() => {
                e.next();
              }, 6e4);
              return () => {
                self.clearInterval(t);
              };
            }));
        }
      }
      var Et = s(897280),
        mt = s(531034),
        vt = s(418477),
        Ot = s(665496);
      const ft = "cron-source";
      class At extends _t.R_ {
        constructor() {
          super(...arguments),
            (this.alarm$ = (
              (0, Ot.G)()
                ? new a.y((e) => {
                    const t = (t) => {
                      t.name === ft && e.next();
                    };
                    return (
                      (0, mt.U)(ft, { delayInMinutes: 1, periodInMinutes: 1 }),
                      vt.i.addListener(t),
                      () => {
                        vt.i.removeListener(t);
                      }
                    );
                  })
                : new a.y((e) => {
                    const t = self.setInterval(() => {
                      e.next();
                    }, 6e4);
                    return () => {
                      self.clearInterval(t);
                    };
                  })
            ).pipe((0, Et.d)(1))),
            (this.subscription = this.alarm$.subscribe());
        }
        stop() {
          this.subscription.unsubscribe();
        }
      }
      function gt() {
        return (
          "undefined" != typeof chrome &&
          void 0 !== chrome.runtime &&
          void 0 !== chrome.runtime.getManifest &&
          3 === (0, de.W)().manifest_version
        );
      }
      var ht = s(915572),
        Tt = s(645244);
      class yt {
        constructor(e, t) {
          (this.worker = e),
            (this.channelName = t),
            (this.status$ = (0, Q.of)(ht.D.Connected)),
            (this.messages$ = new a.y((t) => {
              const s = (e) => {
                (0, Tt.F)(e.data) && !e.origin && t.next(e.data.message);
              };
              return (
                e.addEventListener("message", s),
                () => {
                  e.removeEventListener("message", s);
                }
              );
            }).pipe((0, Ye.B)()));
        }
        async sendMessage(e) {
          this.worker.postMessage((0, Tt.k)({ channelName: this.channelName, message: e }));
        }
        stop() {
          return Promise.resolve();
        }
      }
      var Ct = s(957459),
        It = s(158649),
        Nt = s(20500);
      class Rt {
        constructor(e) {
          this.connectedChannels$ = new qe.X({});
          const t = new a.y((t) => {
            const s = {},
              o = (o) => {
                const r = (0, Ct.Z)();
                if (o.name !== e) return;
                const n = new c(
                    { addListener: (e) => o.onMessage.addListener(e), removeListener: (e) => o.onMessage.removeListener(e) },
                    (t) => (0, Tt.F)(t) && t.channelName === e
                  ),
                  i = new Promise((e) => {
                    const t = () => {
                      o.onDisconnect.removeListener(t), e(null);
                    };
                    o.onDisconnect.addListener(t);
                  }),
                  a = new qe.X(ht.D.Connected);
                i.then(() => {
                  n.stop(), a.next(ht.D.Disconnected), delete s[r], t.next(s);
                });
                const l = {
                    messages$: n.events$.pipe((0, j.U)(([e]) => e.message)),
                    sendMessage: (t) => (o.postMessage((0, Tt.k)({ channelName: e, message: t })), Promise.resolve()),
                    stop: () => (o.disconnect(), Promise.resolve()),
                    status$: a
                  },
                  d = new It.N(l);
                (s[r] = d), t.next(s);
              };
            return (
              Nt.b.addListener(o),
              () => {
                Nt.b.removeListener(o);
              }
            );
          });
          this.subscription = t.subscribe((e) => this.connectedChannels$.next(e));
        }
        stop() {
          this.subscription.unsubscribe();
        }
      }
      var Pt = s(249808),
        bt = s(243978),
        Dt = s(317350),
        Ut = s(160399);
      class Mt {
        constructor(e) {
          (this.listener = new Rt(e)),
            (this.channel$ = this.listener.connectedChannels$.pipe(
              (0, j.U)((e) => {
                const t = Object.values(e);
                if (t.length) return t[0];
              }),
              (0, Et.d)(1)
            )),
            (this.receivedMessages$ = this.channel$.pipe((0, bt.w)((e) => (e ? e.receivedMessages$ : Dt.E)))),
            (this.channelState$ = this.channel$.pipe((0, j.U)((e) => (e ? ht.D.Connected : ht.D.Disconnected))));
        }
        async send(e) {
          const t = await (0, Ut.z)(this.channel$);
          if (!t) throw new Error("Channel is not connected");
          await t.send(e);
        }
        stop() {
          this.listener.stop();
        }
      }
    },
    249808: (e, t, s) => {
      s.d(t, { G: () => u });
      var o = s(915572),
        r = s(645244),
        n = s(724966),
        i = s(227257),
        a = s(897280),
        c = s(536414),
        l = s(160399),
        d = s(505441);
      class u {
        constructor(e) {
          (this.status$ = new n.X(o.D.Connected)),
            (this.port$ = new i.y((t) => {
              let s;
              const r = this.status$;
              function n() {
                s?.onDisconnect.removeListener(n);
                const i = (0, d.$)({ name: e });
                r.next(o.D.Disconnected), i.onDisconnect.addListener(n), t.next(i), r.next(o.D.Connected), (s = i);
              }
              return (
                n(),
                () => {
                  s?.onDisconnect.removeListener(n), s?.disconnect();
                }
              );
            }).pipe((0, a.d)(1))),
            (this.portSubscription = this.port$.subscribe()),
            (this.messages$ = this.port$.pipe(
              (0, c.z)(
                (t) =>
                  new i.y((s) => {
                    const o = (t) => {
                      (0, r.F)(t) && t.channelName === e && s.next(t.message);
                    };
                    return (
                      t.onMessage.addListener(o),
                      () => {
                        t.onMessage.removeListener(o);
                      }
                    );
                  })
              )
            ));
        }
        async sendMessage(e) {
          const t = await (0, l.z)(this.port$);
          t.postMessage((0, r.k)({ channelName: t.name, message: e }));
        }
        stop() {
          return this.portSubscription.unsubscribe(), this.status$.next(o.D.Disconnected), Promise.resolve();
        }
      }
    },
    768593: (e, t, s) => {
      s.d(t, { S: () => r });
      var o = s(696832);
      class r extends o.Component {
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
      s.d(t, { i: () => n });
      var o = s(696832),
        r = s(350941);
      const n = (e) => {
        const t = o.useCallback((t) => e.client[t.name], [e.client]),
          s = o.useMemo(() => ({ appClient: { getModuleClient: t } }), [t]);
        return o.createElement(r.I.Provider, { value: s }, e.children);
      };
    },
    350941: (e, t, s) => {
      s.d(t, { I: () => o });
      const o = (0, s(696832).createContext)({ appClient: null });
    },
    133354: (e, t, s) => {
      var o;
      s.d(t, { QY: () => n, hA: () => r, rq: () => o }),
        (function (e) {
          (e.Success = "success"), (e.Loading = "loading"), (e.Error = "error");
        })(o || (o = {}));
      const r = { status: o.Loading, data: void 0, error: void 0 },
        n = null;
    },
    55548: (e, t, s) => {
      s.d(t, { D: () => n });
      var o = s(520587),
        r = s(482598);
      const n = () => (0, r.u)(o.Yu);
    },
    412408: (e, t, s) => {
      s.d(t, { b: () => n });
      var o = s(696832),
        r = s(350941);
      const n = () => (0, o.useContext)(r.I);
    },
    112555: (e, t, s) => {
      function o() {
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
      s.d(t, { u: () => o });
    },
    242714: (e, t, s) => {
      s.d(t, { o: () => n });
      var o = s(133354),
        r = s(361607);
      function n(e) {
        const t = (0, r._)();
        return t.status === o.rq.Loading ? null : t.status !== o.rq.Error ? t.data[e] ?? void 0 : void 0;
      }
    },
    361607: (e, t, s) => {
      s.d(t, { _: () => l });
      var o = s(696832),
        r = s(160399),
        n = s(970493),
        i = s(133354),
        a = s(221637),
        c = s(402938);
      function l() {
        const [e, t] = (0, o.useState)(i.hA),
          s = (0, o.useCallback)(async (e) => {
            const s = await (0, r.z)(e);
            t((0, c.o)(s));
          }, []),
          l = (0, o.useCallback)(
            (e) => {
              s(e);
            },
            [s]
          );
        return (0, a.V)({ moduleApi: n.cV, query: "userFeatureFlips", effectCallback: l }), e;
      }
    },
    482598: (e, t, s) => {
      s.d(t, { u: () => n });
      var o = s(696832),
        r = s(412408);
      const n = (e) => {
        const { appClient: t } = (0, r.b)();
        return (0, o.useMemo)(() => {
          if (!t) throw new Error("No app client available");
          const s = t.getModuleClient(e);
          if (!s) throw new Error(`Module ${e.name} is not available in the context`);
          return s;
        }, [t, e]).commands;
      };
    },
    995445: (e, t, s) => {
      s.d(t, { Y: () => a });
      var o = s(133354),
        r = s(412408),
        n = s(287279),
        i = s(696832);
      const a = (e, t, s) => {
        const { appClient: a } = (0, r.b)();
        if (!a) throw new Error("No app client available");
        const [c, l] = (0, i.useState)(Object.keys(t).reduce((e, t) => ({ ...e, [t]: { status: o.rq.Loading } }), {}));
        return (
          (0, i.useEffect)(() => {
            const s = (() => {
                const s = a.getModuleClient(e);
                if (!s) throw new Error(`Module ${e.name} is not available in the context`);
                return Object.keys(t).reduce((e, t) => ({ ...e, [t]: s.queries[t] }), {});
              })(),
              r = Object.keys(t)
                .map((e) => e)
                .map((e) => {
                  const r = t[e].queryParam ?? o.QY;
                  return (0, s[e])(r).subscribe((t) => {
                    (0, n.d6)(t)
                      ? l((s) => ({ ...s, [e]: { status: o.rq.Success, data: t.data } }))
                      : l((t) => ({ ...t, [e]: { status: o.rq.Error, data: void 0 } }));
                  });
                });
            return () => r.forEach((e) => e.unsubscribe());
          }, s),
          c
        );
      };
    },
    221637: (e, t, s) => {
      s.d(t, { V: () => i });
      var o = s(696832),
        r = s(133354),
        n = s(412408);
      function i({ moduleApi: e, query: t, param: s, effectCallback: i, dependencies: a }) {
        const { appClient: c } = (0, n.b)();
        if (!c) throw new Error("No app client available");
        const l = (0, o.useMemo)(() => {
            const s = c.getModuleClient(e);
            if (!s) throw new Error(`Module ${e.name} is not available in the context`);
            return s.queries[t];
          }, [c, e, t]),
          d = (0, o.useMemo)(() => a ?? [JSON.stringify(s)], [a, s]);
        (0, o.useEffect)(() => i?.(l(s ?? r.QY)), [l, i, ...d]);
      }
    },
    799852: (e, t, s) => {
      s.d(t, { k: () => a });
      var o = s(696832),
        r = s(133354),
        n = s(221637),
        i = s(402938);
      function a(...e) {
        const [t, s] = (0, o.useState)(r.hA),
          [a, c, l, d] = e,
          u = (0, o.useCallback)((e) => {
            const t = e.subscribe((e) => {
              s((0, i.o)(e));
            });
            return () => t.unsubscribe();
          }, []);
        return (0, n.V)({ moduleApi: a, query: c, param: l, effectCallback: u, dependencies: d }), t;
      }
    },
    402938: (e, t, s) => {
      s.d(t, { o: () => n });
      var o = s(287279),
        r = s(133354);
      const n = (e) =>
        (0, o.d6)(e) ? { status: r.rq.Success, data: e.data, error: void 0 } : { status: r.rq.Error, data: void 0, error: e.error };
    },
    22609: (e, t, s) => {
      s.d(t, { N: () => r, z: () => o });
      const o = "AES-CBC",
        r = 256;
    },
    804607: (e, t, s) => {
      s.d(t, { W: () => o });
      class o {
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
          const t = new o();
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
                const o = (0 === e.op ? this.headers.get(t) : void 0) ?? [];
                o.push(...s), this.headers.set(t, o);
              }
              break;
            case 2:
              {
                const t = e.name.toLowerCase(),
                  s = e.value;
                if (s) {
                  let e = this.headers.get(t);
                  if (!e) return;
                  const o = Array.isArray(s) ? s : [s];
                  (e = e.filter((e) => !o.includes(e))),
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
            const o = t.toLowerCase();
            "string" == typeof s && (s = [s]), s.length > 0 && (this.headers.set(o, s), this.maybeSetNormalizedName(t, o));
          });
        }
        initFromString(e) {
          e.split("\n").forEach((e) => {
            const t = e.indexOf(":");
            if (t > 0) {
              const s = e.slice(0, t),
                o = s.toLowerCase(),
                r = e.slice(t + 1).trim();
              this.maybeSetNormalizedName(s, o), this.headers.has(o) ? this.headers.get(o).push(r) : this.headers.set(o, [r]);
            }
          });
        }
      }
    },
    912964: (e, t, s) => {
      s.d(t, { Z: () => d });
      var o = s(833818),
        r = s(89685),
        n = s(354066),
        i = s(804607),
        a = s(625994);
      async function c(e) {
        const t = e.getReader();
        let s = new Uint8Array(0),
          o = await t.read();
        for (; !o.done; ) {
          const e = new Uint8Array(s.byteLength + o.value.byteLength);
          e.set(s, 0), e.set(o.value, s.byteLength), (s = e), (o = await t.read());
        }
        return s;
      }
      class l {
        constructor(e) {
          (this.bytesRead = 0), (this.data = e);
        }
        pull(e) {
          const { bytesRead: t, data: s } = this;
          if (t >= s.byteLength) return void e.close();
          const o = Math.min(s.byteLength - t, e.desiredSize ?? 1 / 0);
          if (o > 0) {
            const r = new Uint8Array(s, t, o);
            e.enqueue(r), (this.bytesRead += o);
          }
          t >= s.byteLength && e.close();
        }
      }
      class d {
        constructor(e = {}, t = a.W.Ok, s = "OK") {
          (this.headers = e.headers instanceof i.W ? e.headers : new i.W(e.headers)),
            (this.status = void 0 !== e.status ? e.status : t),
            (this.statusText = e.statusText ?? s),
            (this.url = e.url ?? null),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.body = void 0 !== e.body ? e.body : null);
        }
        clone(e = {}) {
          return new d({
            body:
              void 0 !== e.body
                ? e.body
                : null === this.body
                ? null
                : this.body instanceof o.ReadableStream
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
            return (0, r.v)(e.buffer);
          }
          if ("string" != typeof this.body) throw new Error("Unexpected body type, not a string");
          return this.body;
        }
        async json(e) {
          if (null === this.body) throw new Error("Empty response body");
          if ("object" == typeof this.body && "ReadableStream" === this.body.constructor.name) {
            const t = await c(this.body),
              s = (0, r.v)(t.buffer);
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
          if ("string" == typeof this.body) return new o.ReadableStream(new l((0, n.u)(this.body)));
          if (this.body instanceof ArrayBuffer) return new o.ReadableStream(new l(this.body));
          const e = JSON.stringify(this.body);
          return new o.ReadableStream(new l((0, n.u)(e)));
        }
      }
    },
    625994: (e, t, s) => {
      var o;
      s.d(t, { W: () => o }),
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
        })(o || (o = {}));
    },
    673155: (e, t, s) => {
      s.d(t, { R: () => r, a: () => n });
      var o = s(996168);
      class r extends (0, o.Hu)("BadStatus", "The HTTP response has a non-successful status code (not 2XX)") {
        constructor(e) {
          super(), (this.response = e);
        }
      }
      class n extends (0, o.Hu)("FetchFailedError", "Something happened while communicating to the server") {}
    },
    996168: (e, t, s) => {
      s.d(t, { As: () => r, BU: () => n, Hu: () => o });
      const o = (e, t) =>
        class extends Error {
          constructor() {
            super(t), (this.tag = e);
          }
        };
      function r(e, t) {
        return t.includes(e.tag);
      }
      const n = (e) => e.tag;
    },
    419562: (e, t, s) => {
      s.r(t),
        s.d(t, {
          FunctionalError: () => o.Hu,
          assertUnreachable: () => n.U,
          concatMapFailure: () => c.Tc,
          concatMapSuccess: () => c.Gx,
          concatMatchResult: () => c.RW,
          createMatchable: () => i.H6,
          failure: () => a.Rn,
          getBrander: () => d.zq,
          getFailure: () => a.Yv,
          getSuccess: () => a.db,
          hasProperty: () => d.l$,
          isFailure: () => a.hx,
          isFunctionalErrorOfType: () => o.As,
          isMatchable: () => i.cw,
          isResult: () => a.AZ,
          isSuccess: () => a.d6,
          mapFailure: () => a.SN,
          mapFailureObservable: () => c.DZ,
          mapResultObservable: () => c.vg,
          mapSuccess: () => a.ty,
          mapSuccessObservable: () => c.Qn,
          mapSuccessResultObservable: () => c.lk,
          match: () => i.EQ,
          matchMap: () => l,
          matchResult: () => a.f2,
          matchResultObservable: () => c.nb,
          panic: () => r,
          safeCast: () => d.Ay,
          success: () => a.Vp,
          switchMapFailure: () => c.pr,
          switchMapSuccess: () => c.CP,
          switchMatchResult: () => c.bM,
          toFunctionalErrorCode: () => o.BU
        });
      var o = s(996168);
      function r(e) {
        if (e instanceof Error) throw e;
        if ("string" == typeof e) throw new Error(e);
        throw new Error(e.tag);
      }
      var n = s(295087),
        i = s(18533),
        a = s(287279),
        c = s(948844);
      const l = (e, t) => t[e]();
      var d = s(828489);
    },
    295087: (e, t, s) => {
      function o(e, t) {
        throw new Error(t ?? `Unreachable code detected (${e})`);
      }
      s.d(t, { U: () => o });
    },
    18533: (e, t, s) => {
      s.d(t, { EQ: () => r, H6: () => o, cw: () => n });
      const o = (e, t) => ({ tag: e, ...t }),
        r = (e, t) => {
          const s = e.tag,
            o = s in t ? t[s] : null;
          if (!o) throw new Error("Unmatchable case");
          return o(e);
        },
        n = (e, ...t) => !("object" != typeof e || !e) && "tag" in e && t.includes(e.tag);
    },
    948844: (e, t, s) => {
      s.d(t, {
        CP: () => m,
        DZ: () => d,
        Gx: () => _,
        Qn: () => l,
        RW: () => E,
        Tc: () => S,
        bM: () => O,
        lk: () => p,
        nb: () => c,
        pr: () => v,
        vg: () => u
      });
      var o = s(87065),
        r = s(734987),
        n = s(243978),
        i = s(287279),
        a = s(18533);
      function c(e) {
        return (t) =>
          t.pipe((0, o.U)((t) => (0, a.EQ)(t, { success: ({ data: t }) => e.success(t), failure: ({ error: t }) => e.failure(t) })));
      }
      function l(e) {
        return (t) => t.pipe((0, o.U)((t) => ((0, i.hx)(t) ? t : (0, i.Vp)(e(t.data)))));
      }
      function d(e) {
        return (t) => t.pipe((0, o.U)((t) => ((0, i.d6)(t) ? t : (0, i.Rn)(e(t.error)))));
      }
      function u(e, t) {
        return (s) => s.pipe((0, o.U)((s) => ((0, i.hx)(s) ? (t ? t(s.error) : s) : e(s.data))));
      }
      function p(e) {
        return (t) => t.pipe((0, o.U)((t) => ((0, i.hx)(t) ? t : e(t.data))));
      }
      function _(e) {
        return (t) => t.pipe((0, r.b)(async (t) => ((0, i.hx)(t) ? t : (0, i.Vp)(await e(t.data)))));
      }
      function S(e) {
        return (t) => t.pipe((0, r.b)(async (t) => ((0, i.d6)(t) ? t : (0, i.Rn)(await e(t.error)))));
      }
      function E(e) {
        return (t) => t.pipe((0, r.b)((t) => (0, i.f2)(t, e)));
      }
      function m(e) {
        return (t) => t.pipe((0, n.w)(async (t) => ((0, i.hx)(t) ? t : (0, i.Vp)(await e(t.data)))));
      }
      function v(e) {
        return (t) => t.pipe((0, n.w)(async (t) => ((0, i.d6)(t) ? t : (0, i.Rn)(await e(t.error)))));
      }
      function O(e) {
        return (t) => t.pipe((0, n.w)((t) => (0, i.f2)(t, e)));
      }
    },
    287279: (e, t, s) => {
      s.d(t, {
        Rn: () => a,
        Yv: () => _,
        db: () => p,
        hx: () => d,
        AZ: () => u,
        d6: () => l,
        SN: () => E,
        ty: () => S,
        f2: () => c,
        Vp: () => i
      });
      var o = s(18533);
      const r = "success",
        n = "failure",
        i = (e) => (0, o.H6)("success", { data: e }),
        a = (e) => (0, o.H6)("failure", { error: e }),
        c = (e, t) => (0, o.EQ)(e, { success: ({ data: e }) => t.success(e), failure: ({ error: e }) => t.failure(e) }),
        l = (e) => e.tag === r,
        d = (e) => e.tag === n,
        u = (e) => (0, o.cw)(e, r, n),
        p = (e) => e.data,
        _ = (e) => e.error,
        S = (e, t) => (d(e) ? e : i(t(e.data))),
        E = (e, t) => (l(e) ? e : a(t(e.error)));
    },
    828489: (e, t, s) => {
      s.d(t, { Ay: () => r, l$: () => n, zq: () => o });
      const o = (e) => (t) => Object.assign(t, { brand: e }),
        r = (e) => e;
      function n(e, t) {
        return t in e;
      }
    }
  }
]);
