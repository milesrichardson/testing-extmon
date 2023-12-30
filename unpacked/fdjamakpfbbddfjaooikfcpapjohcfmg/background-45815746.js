"use strict";
(self.webpackChunk_dashlane_amphora = self.webpackChunk_dashlane_amphora || []).push([
  [681],
  {
    13094: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    75689: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.abTestsLiveQueriesSlots = t.abTestsQueriesSlots = t.abTestsCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.abTestsCommandsSlots = { participateToUserABTest: (0, r.slot)() }),
        (t.abTestsQueriesSlots = { getUserABTestVariant: (0, r.slot)() }),
        (t.abTestsLiveQueriesSlots = { liveUserABTestVariant: (0, i.liveSlot)() });
    },
    82607: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(13094), t), i(o(75689), t);
    },
    58209: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(61831), t), i(o(24190), t);
    },
    61831: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.contactInfoLiveQueriesSlots = t.contactInfoQueriesSlots = t.contactInfoCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.contactInfoCommandsSlots = { editContactInfo: (0, r.slot)() }),
        (t.contactInfoQueriesSlots = { getContactInfo: (0, r.slot)() }),
        (t.contactInfoLiveQueriesSlots = { liveContactInfo: (0, i.liveSlot)() });
    },
    24190: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EditContactInfoErrorCode = void 0),
        (function (e) {
          (e[(e.EMPTY_EMAIL = 0)] = "EMPTY_EMAIL"),
            (e[(e.INVALID_EMAIL = 1)] = "INVALID_EMAIL"),
            (e[(e.UNKNOWN_ERROR = 2)] = "UNKNOWN_ERROR");
        })(t.EditContactInfoErrorCode || (t.EditContactInfoErrorCode = {}));
    },
    59539: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(55315), t);
    },
    55315: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.subscriptionCodeLiveQueriesSlots = t.subscriptionCodeQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.subscriptionCodeQueriesSlots = { getSubscriptionCode: (0, r.slot)() }),
        (t.subscriptionCodeLiveQueriesSlots = { liveSubscriptionCode: (0, i.liveSlot)() });
    },
    88875: (e, t) => {
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
    21225: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.accountCreationLiveQueriesSlots = void 0);
      const r = o(55195);
      t.accountCreationLiveQueriesSlots = { liveAccountCreated: (0, r.liveSlot)() };
    },
    94705: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(88875), t), i(o(21225), t);
    },
    31336: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.antiPhishingLiveQueriesSlots = void 0);
      const r = o(55195);
      t.antiPhishingLiveQueriesSlots = { livePhishingURLList: (0, r.liveSlot)() };
    },
    88806: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(31336), t);
    },
    19051: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(64837), t), i(o(54373), t);
    },
    64837: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.twoFactorAuthenticationLiveQueriesSlots =
          t.twoFactorAuthenticationQueriesSlots =
          t.twoFactorAuthenticationCommandsSlots =
            void 0);
      const r = o(71796),
        i = o(55195);
      (t.twoFactorAuthenticationCommandsSlots = {
        refreshU2FDevicesList: (0, r.slot)(),
        removeU2FAuthenticator: (0, r.slot)(),
        refreshTwoFactorAuthenticationInfo: (0, r.slot)(),
        startTwoFactorAuthenticationEnableFlow: (0, r.slot)(),
        stopTwoFactorAuthenticationEnableFlow: (0, r.slot)(),
        continueTwoFactorAuthenticationEnableFlow: (0, r.slot)(),
        backTwoFactorAuthenticationEnableFlow: (0, r.slot)(),
        startTwoFactorAuthenticationDisableFlow: (0, r.slot)(),
        stopTwoFactorAuthenticationDisableFlow: (0, r.slot)(),
        continueTwoFactorAuthenticationDisableFlow: (0, r.slot)(),
        backTwoFactorAuthenticationDisableFlow: (0, r.slot)()
      }),
        (t.twoFactorAuthenticationQueriesSlots = {
          getU2FDevicesList: (0, r.slot)(),
          getTwoFactorAuthenticationEnableStage: (0, r.slot)(),
          getTwoFactorAuthenticationDisableStage: (0, r.slot)()
        }),
        (t.twoFactorAuthenticationLiveQueriesSlots = {
          liveU2FDevicesList: (0, i.liveSlot)(),
          liveTwoFactorAuthenticationEnableStage: (0, i.liveSlot)(),
          liveTwoFactorAuthenticationDisableStage: (0, i.liveSlot)()
        });
    },
    54373: (e, t) => {
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
    32420: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(58185), t), i(o(39110), t);
    },
    39110: (e, t) => {
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
    58185: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.webAuthnAuthenticationLiveQueriesSlots = t.webAuthnAuthenticationQueriesSlots = t.webAuthnAuthenticationCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.webAuthnAuthenticationCommandsSlots = {
        enableWebAuthnAuthentication: (0, r.slot)(),
        initEnableWebAuthnAuthentication: (0, r.slot)(),
        refreshAvailableWebAuthnAuthenticators: (0, r.slot)(),
        refreshWebAuthnAuthenticators: (0, r.slot)(),
        initRegisterWebAuthnAuthenticator: (0, r.slot)(),
        registerWebAuthnAuthenticator: (0, r.slot)(),
        initOpenSessionWithWebAuthnAuthenticator: (0, r.slot)(),
        openSessionWithWebAuthnAuthenticator: (0, r.slot)(),
        disableWebAuthnAuthentication: (0, r.slot)(),
        removeWebAuthnAuthenticator: (0, r.slot)(),
        initUserVerificationWithWebAuthn: (0, r.slot)()
      }),
        (t.webAuthnAuthenticationQueriesSlots = {
          getWebAuthnAuthenticators: (0, r.slot)(),
          getWebAuthnAuthenticationOptedIn: (0, r.slot)()
        }),
        (t.webAuthnAuthenticationLiveQueriesSlots = {
          liveWebAuthnAuthenticators: (0, i.liveSlot)(),
          liveWebAuthnAuthenticationOptedIn: (0, i.liveSlot)()
        });
    },
    84634: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.authenticationLiveQueriesSlots = t.authenticationQueriesSlots = t.authenticationCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195),
        n = o(19051),
        s = o(32420);
      (t.authenticationCommandsSlots = (0, r.combineEvents)(
        {
          registerDevice: (0, r.slot)(),
          requestExtraDeviceToken: (0, r.slot)(),
          requestEmailToken: (0, r.slot)(),
          requestPaymentUpdateAuthenticationToken: (0, r.slot)(),
          setReactivationStatus: (0, r.slot)()
        },
        s.webAuthnAuthenticationCommandsSlots,
        n.twoFactorAuthenticationCommandsSlots
      )),
        (t.authenticationQueriesSlots = (0, r.combineEvents)(
          {
            getHasOtp2Type: (0, r.slot)(),
            getUserOtpType: (0, r.slot)(),
            getReactivationStatus: (0, r.slot)(),
            getAvailableUserVerificationMethods: (0, r.slot)()
          },
          s.webAuthnAuthenticationQueriesSlots,
          n.twoFactorAuthenticationQueriesSlots
        )),
        (t.authenticationLiveQueriesSlots = (0, r.combineEvents)(
          { liveReactivationStatus: (0, i.liveSlot)() },
          s.webAuthnAuthenticationLiveQueriesSlots,
          n.twoFactorAuthenticationLiveQueriesSlots
        ));
    },
    39888: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(84634), t), i(o(68190), t), i(o(19051), t), i(o(32420), t);
    },
    68190: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AuthenticationCode =
          t.OtpType =
          t.UserVerificationMethod =
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
        (function (e) {
          (e.MasterPassword = "masterPassword"), (e.Webauthn = "webauthn");
        })(t.UserVerificationMethod || (t.UserVerificationMethod = {})),
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
    60233: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.autofillDataQueriesSlots = void 0);
      const r = o(71796);
      t.autofillDataQueriesSlots = {
        getSingleAddressForAutofill: (0, r.slot)(),
        getMultipleAddressesForAutofill: (0, r.slot)(),
        getSingleBankAccountForAutofill: (0, r.slot)(),
        getMultipleBankAccountsForAutofill: (0, r.slot)(),
        getSingleCompanyForAutofill: (0, r.slot)(),
        getMultipleCompaniesForAutofill: (0, r.slot)(),
        getSingleCredentialForAutofill: (0, r.slot)(),
        getMultipleCredentialsForAutofill: (0, r.slot)(),
        getSingleDriverLicenseForAutofill: (0, r.slot)(),
        getMultipleDriverLicensesForAutofill: (0, r.slot)(),
        getSingleEmailForAutofill: (0, r.slot)(),
        getMultipleEmailsForAutofill: (0, r.slot)(),
        getSingleFiscalIdForAutofill: (0, r.slot)(),
        getMultipleFiscalIdsForAutofill: (0, r.slot)(),
        getSingleGeneratedPasswordForAutofill: (0, r.slot)(),
        getMultipleGeneratedPasswordsForAutofill: (0, r.slot)(),
        getSingleIdCardForAutofill: (0, r.slot)(),
        getMultipleIdCardsForAutofill: (0, r.slot)(),
        getSingleIdentityForAutofill: (0, r.slot)(),
        getMultipleIdentitiesForAutofill: (0, r.slot)(),
        getSingleNoteForAutofill: (0, r.slot)(),
        getMultipleNotesForAutofill: (0, r.slot)(),
        getSinglePasskeyForAutofill: (0, r.slot)(),
        getSinglePassportForAutofill: (0, r.slot)(),
        getMultiplePassportsForAutofill: (0, r.slot)(),
        getSinglePaymentCardForAutofill: (0, r.slot)(),
        getMultiplePaymentCardsForAutofill: (0, r.slot)(),
        getSinglePersonalWebsiteForAutofill: (0, r.slot)(),
        getMultiplePersonalWebsitesForAutofill: (0, r.slot)(),
        getSinglePhoneForAutofill: (0, r.slot)(),
        getMultiplePhonesForAutofill: (0, r.slot)(),
        getSingleSocialSecurityIdForAutofill: (0, r.slot)(),
        getMultipleSocialSecurityIdsForAutofill: (0, r.slot)(),
        getAutofillSettingOnUrlForAutofill: (0, r.slot)()
      };
    },
    45861: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(60233), t), i(o(13577), t), i(o(79450), t), i(o(8698), t);
    },
    79450: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    13577: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AutofillOptions = void 0),
        (function (e) {
          (e.ANALYSIS_ENABLED_ON_ALL_FORMS = "ANALYSIS_ENABLED_ON_ALL_FORMS"),
            (e.ANALYSIS_ENABLED_ONLY_ON_LOGINS_AND_PASSWORDS = "ANALYSIS_ENABLED_ONLY_ON_LOGINS_AND_PASSWORDS");
        })(t.AutofillOptions || (t.AutofillOptions = {}));
    },
    8698: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vaultSourceTypeToDataModelTypeMap = void 0);
      const r = o(92202),
        i = o(6937);
      t.vaultSourceTypeToDataModelTypeMap = {
        [r.VaultSourceType.Address]: i.DataModelType.KWAddress,
        [r.VaultSourceType.BankAccount]: i.DataModelType.KWBankStatement,
        [r.VaultSourceType.Company]: i.DataModelType.KWCompany,
        [r.VaultSourceType.Credential]: i.DataModelType.KWAuthentifiant,
        [r.VaultSourceType.CredentialCategory]: i.DataModelType.KWAuthCategory,
        [r.VaultSourceType.DriverLicense]: i.DataModelType.KWDriverLicence,
        [r.VaultSourceType.Email]: i.DataModelType.KWEmail,
        [r.VaultSourceType.FiscalId]: i.DataModelType.KWFiscalStatement,
        [r.VaultSourceType.GeneratedPassword]: i.DataModelType.KWGeneratedPassword,
        [r.VaultSourceType.IdCard]: i.DataModelType.KWIDCard,
        [r.VaultSourceType.Identity]: i.DataModelType.KWIdentity,
        [r.VaultSourceType.NoteCategory]: i.DataModelType.KWSecureNoteCategory,
        [r.VaultSourceType.Note]: i.DataModelType.KWSecureNote,
        [r.VaultSourceType.Passkey]: i.DataModelType.KWPasskey,
        [r.VaultSourceType.Passport]: i.DataModelType.KWPassport,
        [r.VaultSourceType.PaymentCard]: i.DataModelType.KWPaymentMean_creditCard,
        [r.VaultSourceType.PersonalWebsite]: i.DataModelType.KWPersonalWebsite,
        [r.VaultSourceType.Phone]: i.DataModelType.KWPhone,
        [r.VaultSourceType.SocialSecurityId]: i.DataModelType.KWSocialSecurityStatement
      };
    },
    53314: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonApiConnector = void 0);
      const r = o(71796),
        i = o(48884),
        n = o(82270),
        s = o(85431);
      t.CarbonApiConnector = (0, r.combineEvents)(i.carbonCommandsSlots, n.carbonQueriesSlots, s.carbonLiveQueriesSlots);
    },
    48884: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonCommandsSlots = void 0);
      const r = o(71796),
        i = o(82607),
        n = o(58209),
        s = o(39888),
        a = o(67120),
        l = o(80078),
        c = o(60754),
        u = o(54707),
        d = o(80953),
        _ = o(1738),
        S = o(42553),
        E = o(61812),
        O = o(20170),
        p = o(51126),
        v = o(36210),
        f = o(29358),
        T = o(63919),
        A = o(17341),
        P = o(74477),
        b = o(87894),
        y = o(83263),
        N = o(97981),
        I = o(23448),
        g = o(57422),
        C = o(80553),
        R = o(67195),
        D = o(73572),
        m = o(7970);
      t.carbonCommandsSlots = (0, r.combineEvents)(
        i.abTestsCommandsSlots,
        s.authenticationCommandsSlots,
        a.changeMasterPasswordCommandsSlots,
        n.contactInfoCommandsSlots,
        l.cryptoMigrationCommandsSlots,
        c.darkWebInsightsCommandsSlots,
        u.dataManagementCommandsSlots,
        O.eventLoggerCommandsSlots,
        p.exceptionCommandsSlots,
        d.familyCommandsSlots,
        S.globalExtensionSettingsCommandsSlots,
        E.healthCommandsSlots,
        v.loginCommandsSlots,
        f.loginNotificationsCommandsSlots,
        T.loginStepInfoCommandsSlots,
        A.notificationsCommandsSlots,
        P.openSessionCommandsSlots,
        b.passwordGeneratorCommandsSlots,
        y.paymentsCommandsSlots,
        N.protectedItemsUnlockerCommandsSlots,
        I.recoveryCommandsSlots,
        _.remoteFileCommandsSlots,
        g.sharingCommandsSlots,
        C.teamCommandsSlots,
        R.teamAdminCommandsSlots,
        D.userMessagesCommandsSlots,
        m.vpnCommandsSlots
      );
    },
    85431: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonLiveQueriesSlots = void 0);
      const r = o(71796),
        i = o(82607),
        n = o(58209),
        s = o(59539),
        a = o(94705),
        l = o(88806),
        c = o(39888),
        u = o(54707),
        d = o(67120),
        _ = o(80078),
        S = o(1738),
        E = o(7890),
        O = o(29358),
        p = o(63919),
        v = o(17341),
        f = o(74477),
        T = o(97981),
        A = o(23448),
        P = o(57422),
        b = o(67195),
        y = o(73572),
        N = o(7970);
      t.carbonLiveQueriesSlots = (0, r.combineEvents)(
        i.abTestsLiveQueriesSlots,
        a.accountCreationLiveQueriesSlots,
        l.antiPhishingLiveQueriesSlots,
        c.authenticationLiveQueriesSlots,
        d.changeMasterPasswordLiveQueriesSlots,
        n.contactInfoLiveQueriesSlots,
        _.cryptoMigrationLiveQueriesSlots,
        u.dataManagementLiveQueriesSlots,
        E.killswitchLiveQueriesSlots,
        O.loginNotificationsLiveQueriesSlots,
        p.loginStepInfoLiveQueriesSlots,
        v.notificationsLiveQueriesSlots,
        f.openSessionLiveQueriesSlots,
        T.protectedItemsUnlockerLiveQueriesSlots,
        A.recoveryLiveQueriesSlots,
        S.remoteFilesLiveQueriesSlots,
        P.sharingLiveQueriesSlots,
        s.subscriptionCodeLiveQueriesSlots,
        b.teamAdminLiveQueriesSlots,
        y.userMessagesLiveQueriesSlots,
        N.vpnLiveQueriesSlots
      );
    },
    82270: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonQueriesSlots = void 0);
      const r = o(71796),
        i = o(82607),
        n = o(58209),
        s = o(59539),
        a = o(39888),
        l = o(45861),
        c = o(54707),
        u = o(80078),
        d = o(46359),
        _ = o(71559),
        S = o(1738),
        E = o(7890),
        O = o(29358),
        p = o(63919),
        v = o(17341),
        f = o(74477),
        T = o(87894),
        A = o(83263),
        P = o(97981),
        b = o(23448),
        y = o(31072),
        N = o(57422),
        I = o(80553),
        g = o(67195),
        C = o(73572),
        R = o(7970);
      t.carbonQueriesSlots = (0, r.combineEvents)(
        i.abTestsQueriesSlots,
        a.authenticationQueriesSlots,
        l.autofillDataQueriesSlots,
        n.contactInfoQueriesSlots,
        u.cryptoMigrationQueriesSlots,
        c.dataManagementQueriesSlots,
        d.deviceQueriesSlots,
        _.featureQueriesSlots,
        E.killswitchQueriesSlots,
        O.loginNotificationsQueriesSlots,
        p.loginStepInfoQueriesSlots,
        v.notificationsQueriesSlots,
        f.openSessionQueriesSlots,
        T.passwordGeneratorQueriesSlots,
        A.paymentsQueriesSlots,
        P.protectedItemsUnlockerQueriesSlots,
        b.recoveryQueriesSlots,
        S.remoteFilesQueriesSlots,
        N.sharingQueriesSlots,
        y.staticDataQueriesSlots,
        s.subscriptionCodeQueriesSlots,
        I.teamQueriesSlots,
        g.teamAdminQueriesSlots,
        C.userMessagesQueriesSlots,
        R.vpnQueriesSlots
      );
    },
    45040: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(48884), t), i(o(85431), t), i(o(82270), t), i(o(53314), t);
    },
    55195: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(16771), t), i(o(92798), t), i(o(45040), t), i(o(92022), t);
    },
    92798: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    16771: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.liveSlot = void 0);
      const r = o(71796),
        i = { noBuffer: !0 };
      t.liveSlot = () => (0, r.slot)(i);
    },
    92022: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    50130: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonDebugConnector = void 0);
      const r = o(71796);
      t.CarbonDebugConnector = { log: (0, r.slot)(), info: (0, r.slot)(), warning: (0, r.slot)(), error: (0, r.slot)() };
    },
    99308: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    79158: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(50130), t), i(o(99308), t);
    },
    12497: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonDiagnosticConnector = void 0);
      const r = o(71796);
      t.CarbonDiagnosticConnector = { decipheringDiagnosticLogEvent: (0, r.slot)() };
    },
    74546: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    14874: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(12497), t), i(o(74546), t);
    },
    44459: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.changeMasterPasswordLiveQueriesSlots = t.changeMasterPasswordCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.changeMasterPasswordCommandsSlots = { changeMasterPassword: (0, r.slot)() }),
        (t.changeMasterPasswordLiveQueriesSlots = { liveChangeMasterPasswordStatus: (0, i.liveSlot)() });
    },
    67120: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(44459), t), i(o(42113), t);
    },
    42113: (e, t) => {
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
    40438: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cryptoMigrationLiveQueriesSlots = t.cryptoMigrationQueriesSlots = t.cryptoMigrationCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.cryptoMigrationCommandsSlots = { changeUserCrypto: (0, r.slot)() }),
        (t.cryptoMigrationQueriesSlots = { getCanUserChangeCrypto: (0, r.slot)(), getUserDerivationMethod: (0, r.slot)() }),
        (t.cryptoMigrationLiveQueriesSlots = { liveUserDerivationMethod: (0, i.liveSlot)() });
    },
    80078: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(40438), t), i(o(64032), t);
    },
    64032: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SupportedDerivationMethods = t.CryptoMigrationApiErrorType = void 0),
        (function (e) {
          e.ChangeUserCryptoFailed = "CHANGE_USER_CRYPTO_FAILED";
        })(t.CryptoMigrationApiErrorType || (t.CryptoMigrationApiErrorType = {})),
        (function (e) {
          (e.ARGON2D = "argon2d"), (e.PBKDF2 = "pbkdf2"), (e.KWC3 = "kwc3");
        })(t.SupportedDerivationMethods || (t.SupportedDerivationMethods = {}));
    },
    8523: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.darkWebInsightsCommandsSlots = void 0);
      const r = o(71796);
      t.darkWebInsightsCommandsSlots = { getDarkWebInsightsReportResults: (0, r.slot)(), getDarkWebInsightsSummary: (0, r.slot)() };
    },
    60754: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(8523), t), i(o(40455), t);
    },
    40455: (e, t) => {
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
    9632: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isAddress = void 0),
        (t.isAddress = function (e) {
          return Boolean(e) && "KWAddress" === e.kwType;
        });
    },
    26430: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBankAccount = void 0),
        (t.isBankAccount = function (e) {
          return Boolean(e) && "KWBankStatement" === e.kwType;
        });
    },
    85341: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBreach = t.BreachStatus = void 0),
        (function (e) {
          (e.PENDING = "PENDING"), (e.VIEWED = "VIEWED"), (e.ACKNOWLEDGED = "ACKNOWLEDGED");
        })(t.BreachStatus || (t.BreachStatus = {})),
        (t.isBreach = function (e) {
          return Boolean(e) && "KWSecurityBreach" === e.kwType;
        });
    },
    37790: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isCollection = void 0),
        (t.isCollection = function (e) {
          return Boolean(e) && "KWCollection" === e.kwType;
        });
    },
    1471: (e, t, o) => {
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
      const r = o(50415);
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
        (t.DataModelType = (0, r.Enum)(
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
        (t.TransactionType = (0, r.Enum)(
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
        (t.TRANSACTION_TYPE_TO_DATAMODEL_TYPE = Object.keys(t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE).reduce(
          (e, o) => ((e[t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE[o]] = o), e),
          {}
        )),
        (t.getDataModelTypeFromTransactionType = function (e) {
          const o = t.TRANSACTION_TYPE_TO_DATAMODEL_TYPE[e];
          if (!o) throw new Error(`No DataModelType found for TransactionType '${e}'`);
          return o;
        }),
        (t.getTransactionTypeFromDataModelType = function (e) {
          if (!t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE[e]) throw new Error(`No TransactionType found for DataModelType ${e}`);
          return t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE[e];
        }),
        (t.transactionTypes = r.Enum.keys(t.TransactionType)),
        (t.dataModelTypes = r.Enum.keys(t.DataModelType));
      (t.isDataModelObject = (e) => !!e.LocaleFormat && "string" == typeof e.AnonId && "string" == typeof e.SpaceId),
        (t.isObjectLocalized = function (e) {
          return Boolean(e) && ("KWPhone" === e.kwType || "KWIdentity" === e.kwType || "KWAddress" === e.kwType);
        });
    },
    2615: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isCompany = void 0),
        (t.isCompany = function (e) {
          return Boolean(e) && "KWCompany" === e.kwType;
        });
    },
    29103: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isCredential = t.isCredentialCategory = void 0),
        (t.isCredentialCategory = function (e) {
          return Boolean(e) && "KWAuthCategory" === e.kwType;
        }),
        (t.isCredential = function (e) {
          return Boolean(e) && "KWAuthentifiant" === e.kwType;
        });
    },
    40866: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isDriverLicense = void 0),
        (t.isDriverLicense = function (e) {
          return Boolean(e) && "KWDriverLicence" === e.kwType;
        });
    },
    72317: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isEmail = void 0),
        (t.isEmail = function (e) {
          return Boolean(e) && "KWEmail" === e.kwType;
        });
    },
    76323: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    2258: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isFiscalId = void 0),
        (t.isFiscalId = function (e) {
          return Boolean(e) && "KWFiscalStatement" === e.kwType;
        });
    },
    97092: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isGeneratedPassword = void 0),
        (t.isGeneratedPassword = function (e) {
          return Boolean(e) && "KWGeneratedPassword" === e.kwType;
        });
    },
    93343: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    51407: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isIdCard = void 0),
        (t.isIdCard = function (e) {
          return Boolean(e) && "KWIDCard" === e.kwType;
        });
    },
    27682: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isIdentity = void 0),
        (t.isIdentity = function (e) {
          return Boolean(e) && "KWIdentity" === e.kwType;
        });
    },
    43393: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LinkedWebsiteSource = void 0),
        (function (e) {
          (e.Manual = "manual"), (e.Remember = "remember");
        })(t.LinkedWebsiteSource || (t.LinkedWebsiteSource = {}));
    },
    19878: (e, t) => {
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
    24928: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPasskey = void 0),
        (t.isPasskey = function (e) {
          return Boolean(e) && "KWPasskey" === e.kwType;
        });
    },
    77610: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPassport = void 0),
        (t.isPassport = function (e) {
          return Boolean(e) && "KWPassport" === e.kwType;
        });
    },
    14082: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isPaymentCard = t.PaymentCardColor = t.PaymentCardType = void 0);
      const r = o(50415);
      (t.PaymentCardType = (0, r.Enum)(
        "PAYMENT_TYPE_VISA",
        "PAYMENT_TYPE_MASTERCARD",
        "PAYMENT_TYPE_AMEX",
        "PAYMENT_TYPE_DISCOVER",
        "PAYMENT_TYPE_JCB",
        "PAYMENT_TYPE_DINERSCLUB"
      )),
        (t.PaymentCardColor = (0, r.Enum)("BLACK", "SILVER", "WHITE", "RED", "ORANGE", "GOLD", "BLUE_1", "BLUE_2", "GREEN_1", "GREEN_2")),
        (t.isPaymentCard = function (e) {
          return Boolean(e) && "KWPaymentMean_creditCard" === e.kwType;
        });
    },
    47633: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPaypalAccount = void 0),
        (t.isPaypalAccount = function (e) {
          return Boolean(e) && "KWPaymentMean_paypal" === e.kwType;
        });
    },
    57066: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPersonalSettings = void 0),
        (t.isPersonalSettings = function (e) {
          return Boolean(e) && "KWSettingsManagerApp" === e.kwType;
        });
    },
    58994: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPersonalWebsite = void 0),
        (t.isPersonalWebsite = function (e) {
          return Boolean(e) && "KWPersonalWebsite" === e.kwType;
        });
    },
    68711: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isPhone = t.PhoneType = void 0);
      const r = o(50415);
      (t.PhoneType = (0, r.Enum)(
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
    56058: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSecret = void 0),
        (t.isSecret = function (e) {
          return Boolean(e) && "KWSecret" === e.kwType;
        });
    },
    90018: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSecureFileInfo = void 0),
        (t.isSecureFileInfo = function (e) {
          return Boolean(e) && "KWSecureFileInfo" === e.kwType;
        });
    },
    72679: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSocialSecurityId = void 0),
        (t.isSocialSecurityId = function (e) {
          return Boolean(e) && "KWSocialSecurityStatement" === e.kwType;
        });
    },
    9056: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(o(9632), t),
        i(o(26430), t),
        i(o(85341), t),
        i(o(37790), t),
        i(o(1471), t),
        i(o(2615), t),
        i(o(29103), t),
        i(o(40866), t),
        i(o(72317), t),
        i(o(76323), t),
        i(o(2258), t),
        i(o(97092), t),
        i(o(93343), t),
        i(o(51407), t),
        i(o(27682), t),
        i(o(43393), t),
        i(o(19878), t),
        i(o(24928), t),
        i(o(77610), t),
        i(o(14082), t),
        i(o(47633), t),
        i(o(57066), t),
        i(o(58994), t),
        i(o(68711), t),
        i(o(56058), t),
        i(o(90018), t),
        i(o(72679), t);
    },
    31626: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    54692: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    6937: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(9056), t), i(o(31626), t);
    },
    43230: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deviceQueriesSlots = void 0);
      const r = o(71796);
      t.deviceQueriesSlots = { getAnonymousComputerId: (0, r.slot)(), getPlatformInfo: (0, r.slot)() };
    },
    46359: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(43230), t);
    },
    91642: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DeviceLimitCapabilityConnector = void 0);
      const r = o(71796);
      t.DeviceLimitCapabilityConnector = { deviceLimitCapabilityUpdated: (0, r.slot)() };
    },
    73254: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(91642), t);
    },
    10989: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    49039: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionCarbonConnector = void 0);
      const r = o(71796);
      t.ExtensionCarbonConnector = {
        loginStatusChanged: (0, r.slot)({ noBuffer: !0 }),
        localAccountsListUpdated: (0, r.slot)({ noBuffer: !0 }),
        openSessionProgressChanged: (0, r.slot)({ noBuffer: !0 }),
        openSessionTokenSent: (0, r.slot)({ noBuffer: !0 }),
        openSessionDashlaneAuthenticator: (0, r.slot)({ noBuffer: !0 }),
        openSessionOTPSent: (0, r.slot)({ noBuffer: !0 }),
        openSessionOTPForNewDeviceRequired: (0, r.slot)({ noBuffer: !0 }),
        openSessionAskMasterPassword: (0, r.slot)({ noBuffer: !0 }),
        openSessionTokenWarning: (0, r.slot)({ noBuffer: !0 }),
        openSessionExtraDeviceTokenRequired: (0, r.slot)({ noBuffer: !0 }),
        openSessionMasterPasswordLess: (0, r.slot)({ noBuffer: !0 }),
        openSessionSsoRedirectionToIdpRequired: (0, r.slot)({ noBuffer: !0 }),
        openSessionFailed: (0, r.slot)({ noBuffer: !0 }),
        sessionSyncStatus: (0, r.slot)({ noBuffer: !0 }),
        deactivateDeviceResult: (0, r.slot)({ noBuffer: !0 }),
        changeDeviceNameResult: (0, r.slot)({ noBuffer: !0 }),
        accountInfoChanged: (0, r.slot)({ noBuffer: !0 }),
        dataModelUpdated: (0, r.slot)({ noBuffer: !0 }),
        accountFeaturesChanged: (0, r.slot)({ noBuffer: !0 }),
        webOnboardingModeUpdated: (0, r.slot)({ noBuffer: !0 }),
        askWebsiteInfo: (0, r.slot)({ noBuffer: !0 }),
        getAccountInfo: (0, r.slot)({ noBuffer: !0 }),
        getAnonymousLogsMetadata: (0, r.slot)({ noBuffer: !0 }),
        checkIfMasterPasswordIsValid: (0, r.slot)({ noBuffer: !0 }),
        openSession: (0, r.slot)({ noBuffer: !0 }),
        openSessionWithToken: (0, r.slot)({ noBuffer: !0 }),
        openSessionWithDashlaneAuthenticator: (0, r.slot)({ noBuffer: !0 }),
        cancelDashlaneAuthenticatorRegistration: (0, r.slot)(),
        openSessionWithOTP: (0, r.slot)({ noBuffer: !0 }),
        openSessionWithOTPForNewDevice: (0, r.slot)({ noBuffer: !0 }),
        openSessionWithMasterPassword: (0, r.slot)({ noBuffer: !0 }),
        openExtraDeviceSession: (0, r.slot)({ noBuffer: !0 }),
        openSessionWithExtraDeviceToken: (0, r.slot)({ noBuffer: !0 }),
        openSessionResendToken: (0, r.slot)({ noBuffer: !0 }),
        sessionForceSync: (0, r.slot)({ noBuffer: !0 }),
        closeSession: (0, r.slot)({ noBuffer: !0 }),
        lockSession: (0, r.slot)({ noBuffer: !0 }),
        exceptionLog: (0, r.slot)({ noBuffer: !0 }),
        getDevicesList: (0, r.slot)({ noBuffer: !0 }),
        getLocalAccountsList: (0, r.slot)({ noBuffer: !0 }),
        deactivateDevice: (0, r.slot)({ noBuffer: !0 }),
        changeDeviceName: (0, r.slot)({ noBuffer: !0 }),
        updateWebOnboardingMode: (0, r.slot)({ noBuffer: !0 })
      };
    },
    93148: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionCarbonEventType = void 0);
      const r = o(50415);
      t.ExtensionCarbonEventType = (0, r.Enum)(
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
    58616: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(49039), t), i(o(93148), t);
    },
    13178: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionDebugConnector = void 0);
      const r = o(71796);
      t.ExtensionDebugConnector = {
        getExtensionId: (0, r.slot)(),
        switchExtensionToStandalone: (0, r.slot)(),
        showInput: (0, r.slot)(),
        showFormOnPage: (0, r.slot)(),
        signalTti: (0, r.slot)(),
        signalDatabasesSent: (0, r.slot)()
      };
    },
    52739: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionDebugEventType = void 0);
      const r = o(50415);
      t.ExtensionDebugEventType = (0, r.Enum)(
        "GET_EXTENSION_ID",
        "SIGNAL_TTI",
        "DATABASES_SEND",
        "SHOW_INPUT",
        "SHOW_FORM_ON_PAGE",
        "SWITCH_TO_STANDALONE"
      );
    },
    58300: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(13178), t), i(o(52739), t);
    },
    64496: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.familyCommandsSlots = void 0);
      const r = o(71796);
      t.familyCommandsSlots = {
        getFamilyDetails: (0, r.slot)(),
        joinFamily: (0, r.slot)(),
        leaveFamily: (0, r.slot)(),
        removeFamilyMember: (0, r.slot)(),
        resetFamilyJoinToken: (0, r.slot)()
      };
    },
    80953: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(64496), t), i(o(51224), t);
    },
    51224: (e, t) => {
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
    11580: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.featureQueriesSlots = void 0);
      const r = o(71796);
      t.featureQueriesSlots = { getHasFeature: (0, r.slot)(), getFeatures: (0, r.slot)() };
    },
    71559: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(22363), t), i(o(11580), t);
    },
    22363: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    95470: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.remoteFilesLiveQueriesSlots = t.remoteFilesQueriesSlots = t.remoteFileCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.remoteFileCommandsSlots = { decipherRemoteFile: (0, r.slot)() }),
        (t.remoteFilesQueriesSlots = { getFileContent: (0, r.slot)() }),
        (t.remoteFilesLiveQueriesSlots = { liveFileMeta: (0, i.liveSlot)() });
    },
    1738: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(95470), t), i(o(356), t);
    },
    356: (e, t) => {
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
    829: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.globalExtensionSettingsCommandsSlots = void 0);
      const r = o(71796);
      t.globalExtensionSettingsCommandsSlots = { setGlobalExtensionSettings: (0, r.slot)(), getGlobalExtensionSettings: (0, r.slot)() };
    },
    42553: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(829), t), i(o(9767), t);
    },
    9767: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    2223: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.healthCommandsSlots = void 0);
      const r = o(71796);
      t.healthCommandsSlots = { evaluatePassword: (0, r.slot)() };
    },
    61812: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(2223), t), i(o(72115), t);
    },
    72115: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    7890: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(76875), t);
    },
    76875: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.killswitchLiveQueriesSlots = t.killswitchQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.killswitchQueriesSlots = {
        getIsBrazeContentDisabled: (0, r.slot)(),
        getIsLoginFlowMigrationDisabled: (0, r.slot)(),
        getIsAutoSSOLoginDisabled: (0, r.slot)()
      }),
        (t.killswitchLiveQueriesSlots = {
          liveIsBrazeContentDisabled: (0, i.liveSlot)(),
          liveIsLoginFlowMigrationDisabled: (0, i.liveSlot)(),
          liveIsAutoSSOLoginDisabled: (0, i.liveSlot)()
        });
    },
    36605: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonLeelooConnector = void 0);
      const r = o(71796);
      t.CarbonLeelooConnector = {
        abTestingChanged: (0, r.slot)(),
        loginStatusChanged: (0, r.slot)({ noBuffer: !0 }),
        openSessionProgressChanged: (0, r.slot)({ noBuffer: !0 }),
        openSessionTokenSent: (0, r.slot)({ noBuffer: !0 }),
        openSessionDashlaneAuthenticator: (0, r.slot)({ noBuffer: !0 }),
        openSessionOTPSent: (0, r.slot)({ noBuffer: !0 }),
        openSessionOTPForNewDeviceRequired: (0, r.slot)({ noBuffer: !0 }),
        openSessionAskMasterPassword: (0, r.slot)({ noBuffer: !0 }),
        openSessionTokenWarning: (0, r.slot)({ noBuffer: !0 }),
        openSessionExtraDeviceTokenRequired: (0, r.slot)({ noBuffer: !0 }),
        openSessionSsoRedirectionToIdpRequired: (0, r.slot)({ noBuffer: !0 }),
        openSessionMasterPasswordLess: (0, r.slot)({ noBuffer: !0 }),
        openSessionFailed: (0, r.slot)({ noBuffer: !0 }),
        sessionSyncStatus: (0, r.slot)({ noBuffer: !0 }),
        localAccountsListUpdated: (0, r.slot)(),
        spaceDataUpdated: (0, r.slot)(),
        teamAdminDataUpdated: (0, r.slot)(),
        credentialLoginUrlRetrieved: (0, r.slot)(),
        deactivateDeviceResult: (0, r.slot)(),
        changeDeviceNameResult: (0, r.slot)(),
        accountInfoChanged: (0, r.slot)(),
        accountFeaturesChanged: (0, r.slot)(),
        updatePaymentCardTokenResult: (0, r.slot)(),
        webOnboardingModeUpdated: (0, r.slot)(),
        currentLocationUpdated: (0, r.slot)(),
        checkDirectorySyncKeyRequest: (0, r.slot)(),
        encryptSettingsResultUpdated: (0, r.slot)(),
        confirmCreateAccountResultUpdated: (0, r.slot)(),
        sendSharingResponseResult: (0, r.slot)(),
        serverSidePairingStatusChanged: (0, r.slot)(),
        getUki: (0, r.slot)(),
        getAccountInfo: (0, r.slot)(),
        getDevicesList: (0, r.slot)(),
        getLocalAccountsList: (0, r.slot)(),
        getTemporaryToken: (0, r.slot)(),
        deactivateDevice: (0, r.slot)(),
        changeDeviceName: (0, r.slot)(),
        getInvoices: (0, r.slot)(),
        getPersonalSettings: (0, r.slot)(),
        openSession: (0, r.slot)({ noBuffer: !0 }),
        openSessionWithToken: (0, r.slot)({ noBuffer: !0 }),
        openSessionWithDashlaneAuthenticator: (0, r.slot)({ noBuffer: !0 }),
        cancelDashlaneAuthenticatorRegistration: (0, r.slot)(),
        openSessionWithOTP: (0, r.slot)({ noBuffer: !0 }),
        openSessionWithOTPForNewDevice: (0, r.slot)({ noBuffer: !0 }),
        openSessionWithMasterPassword: (0, r.slot)({ noBuffer: !0 }),
        openExtraDeviceSession: (0, r.slot)({ noBuffer: !0 }),
        openSessionWithExtraDeviceToken: (0, r.slot)({ noBuffer: !0 }),
        openSessionResendToken: (0, r.slot)({ noBuffer: !0 }),
        sessionForceSync: (0, r.slot)(),
        closeSession: (0, r.slot)(),
        lockSession: (0, r.slot)({ noBuffer: !0 }),
        cancelPremiumSubscription: (0, r.slot)(),
        createUserGroup: (0, r.slot)(),
        deleteUserGroup: (0, r.slot)(),
        renameUserGroup: (0, r.slot)(),
        inviteUserGroupMembers: (0, r.slot)(),
        revokeUserGroupMembers: (0, r.slot)(),
        updateUserGroupMembers: (0, r.slot)(),
        teamUpdated: (0, r.slot)(),
        createAccountStep1: (0, r.slot)(),
        createAccountStep2: (0, r.slot)(),
        checkLogin: (0, r.slot)(),
        savePersonalDataItem: (0, r.slot)(),
        removePersonalDataItem: (0, r.slot)(),
        savePaymentCard: (0, r.slot)(),
        getMasterPasswordResetDemandList: (0, r.slot)(),
        acceptMasterPasswordResetDemand: (0, r.slot)(),
        checkIfMasterPasswordIsValid: (0, r.slot)(),
        declineMasterPasswordResetDemand: (0, r.slot)(),
        getMembers: (0, r.slot)(),
        addTeamAdmin: (0, r.slot)(),
        removeTeamAdmin: (0, r.slot)(),
        setTeamSettings: (0, r.slot)(),
        updateWebOnboardingMode: (0, r.slot)(),
        checkDirectorySyncKeyResponse: (0, r.slot)(),
        queryStaticDataCollections: (0, r.slot)(),
        sendSharingResponse: (0, r.slot)(),
        getDataModel: (0, r.slot)(),
        getSharingSync: (0, r.slot)(),
        revokeSharing: (0, r.slot)(),
        getSharingData: (0, r.slot)(),
        updateSharingPermission: (0, r.slot)(),
        setPendingElementsAsSeen: (0, r.slot)(),
        isUserLastAdminOnItem: (0, r.slot)(),
        doesUserReceiveItemViaGroup: (0, r.slot)(),
        resumeSession: (0, r.slot)(),
        exceptionLog: (0, r.slot)()
      };
    },
    75640: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(36605), t), i(o(11340), t);
    },
    11340: (e, t) => {
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
    1278: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.eventLoggerCommandsSlots = void 0);
      const r = o(71796);
      t.eventLoggerCommandsSlots = { logEvent: (0, r.slot)(), logPageView: (0, r.slot)(), flushQueue: (0, r.slot)() };
    },
    20170: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(1278), t), i(o(4168), t);
    },
    4168: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StyxApiResult = void 0),
        (function (e) {
          (e[(e.AllBatchesSent = 0)] = "AllBatchesSent"),
            (e[(e.SomeBatchesSent = 1)] = "SomeBatchesSent"),
            (e[(e.NoBatchesSent = 2)] = "NoBatchesSent");
        })(t.StyxApiResult || (t.StyxApiResult = {}));
    },
    63894: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.exceptionCommandsSlots = void 0);
      const r = o(71796);
      t.exceptionCommandsSlots = { logException: (0, r.slot)() };
    },
    51126: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(63894), t), i(o(96929), t);
    },
    96929: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ExceptionCriticality = void 0),
        (function (e) {
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"), (e[(e.WARNING = 1)] = "WARNING"), (e[(e.ERROR = 2)] = "ERROR");
        })(t.ExceptionCriticality || (t.ExceptionCriticality = {}));
    },
    17124: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LoggingEventType = void 0);
      const r = o(50415);
      t.LoggingEventType = (0, r.Enum)("EXCEPTION_LOG");
    },
    36210: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(14160), t), i(o(98786), t);
    },
    14160: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.loginCommandsSlots = void 0);
      const r = o(71796);
      t.loginCommandsSlots = {
        abortDeviceLimitFlow: (0, r.slot)(),
        loginViaSSO: (0, r.slot)(),
        unlinkPreviousDevice: (0, r.slot)(),
        unlinkMultipleDevices: (0, r.slot)()
      };
    },
    98786: (e, t) => {
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
    29358: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(46863), t), i(o(20512), t);
    },
    20512: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loginNotificationsLiveQueriesSlots = t.loginNotificationsQueriesSlots = t.loginNotificationsCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.loginNotificationsCommandsSlots = { addLoginNotification: (0, r.slot)(), clearAllStoredLoginNotification: (0, r.slot)() }),
        (t.loginNotificationsQueriesSlots = { getLoginNotifications: (0, r.slot)() }),
        (t.loginNotificationsLiveQueriesSlots = { liveLoginNotifications: (0, i.liveSlot)() });
    },
    46863: (e, t) => {
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
    63919: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(11228), t), i(o(25741), t);
    },
    11228: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loginStepInfoLiveQueriesSlots = t.loginStepInfoQueriesSlots = t.loginStepInfoCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.loginStepInfoCommandsSlots = { updateLoginStepInfo: (0, r.slot)(), resetLoginStepInfo: (0, r.slot)() }),
        (t.loginStepInfoQueriesSlots = { getLoginStepInfo: (0, r.slot)() }),
        (t.loginStepInfoLiveQueriesSlots = { liveLoginStepInfo: (0, i.liveSlot)() });
    },
    25741: (e, t) => {
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
    66913: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    86038: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    32700: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonMaverickConnector = void 0);
      const r = o(71796);
      t.CarbonMaverickConnector = {
        savePersonalDataItem: (0, r.slot)(),
        filledDataItem: (0, r.slot)(),
        updateWebOnboardingMode: (0, r.slot)()
      };
    },
    54503: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(32700), t), i(o(24490), t);
    },
    24490: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    70480: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MaverickDebugConnector = void 0);
      const r = o(71796);
      t.MaverickDebugConnector = {
        getState: (0, r.slot)(),
        analyseDom: (0, r.slot)(),
        processAnalyzedPage: (0, r.slot)(),
        loadDatabases: (0, r.slot)(),
        runCredentialSaveTest: (0, r.slot)(),
        openUrl: (0, r.slot)(),
        toggleLogTypes: (0, r.slot)(),
        actionProcessed: (0, r.slot)(),
        domReceived: (0, r.slot)(),
        domAnalysed: (0, r.slot)(),
        signalError: (0, r.slot)(),
        credentialSaveTestRan: (0, r.slot)(),
        log: (0, r.slot)(),
        signalTabOpened: (0, r.slot)(),
        sendAnalysisResults: (0, r.slot)(),
        signalTabClosed: (0, r.slot)(),
        signalDatabasesInitialized: (0, r.slot)()
      };
    },
    45728: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MaverickDebugEventType = void 0);
      const r = o(50415);
      t.MaverickDebugEventType = (0, r.Enum)(
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
    83025: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(70480), t), i(o(45728), t);
    },
    7674: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MaverickWrapperConnector = void 0);
      const r = o(71796);
      t.MaverickWrapperConnector = { analyseDom: (0, r.slot)(), pageInfoComputed: (0, r.slot)(), signalError: (0, r.slot)() };
    },
    9344: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ClickableElementTypes = t.LoginStatus = t.MaverickWrapperEventType = void 0);
      const r = o(50415);
      (t.MaverickWrapperEventType = (0, r.Enum)("COMPUTE_PAGE_INFO", "PAGE_INFO_COMPUTED", "SIGNAL_EXCEPTION")),
        (t.LoginStatus = (0, r.Enum)("LOGGED_IN", "LOGGED_OUT", "UNKNOWN")),
        (t.ClickableElementTypes = (0, r.Enum)("goToLoginPage", "goToChangePasswordPage", "goToResetPasswordPage"));
    },
    63979: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(7674), t), i(o(9344), t);
    },
    17341: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(50424), t), i(o(9199), t);
    },
    9199: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notificationsLiveQueriesSlots = t.notificationsQueriesSlots = t.notificationsCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.notificationsCommandsSlots = {
        markNotificationAsInteracted: (0, r.slot)(),
        markNotificationAsSeen: (0, r.slot)(),
        markNotificationAsUnseen: (0, r.slot)()
      }),
        (t.notificationsQueriesSlots = { getNotificationStatus: (0, r.slot)() }),
        (t.notificationsLiveQueriesSlots = { liveNotificationStatus: (0, i.liveSlot)() });
    },
    50424: (e, t) => {
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
    78690: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(30022), t);
    },
    30022: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.WebOnboardingPopoverStep = t.WebOnboardingLeelooStep = void 0);
      const r = o(50415);
      (t.WebOnboardingLeelooStep = (0, r.Enum)(
        "SHOW_LOGIN_USING_EXTENSION_NOTIFICATION",
        "SHOW_SAVE_SITES_DIALOG",
        "SHOW_PASSWORD_SAVE_SUCCESS",
        "SHOW_WEB_SAVE_AND_AUTOLOGIN_COMPLETED",
        "SHOW_PASSWORD_IMPORT",
        "SHOW_GET_MOBILE_DIALOG"
      )),
        (t.WebOnboardingPopoverStep = (0, r.Enum)("SHOW_LOGIN_NOTIFICATION"));
    },
    12902: (e, t) => {
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
    8627: (e, t) => {
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
    99257: (e, t) => {
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
    5155: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    98098: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AbortDeviceLimitFlowError = void 0),
        (function (e) {
          e.UnexpectedError = "UNEXPECTED_ERROR";
        })(t.AbortDeviceLimitFlowError || (t.AbortDeviceLimitFlowError = {}));
    },
    32233: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(o(98098), t),
        i(o(5131), t),
        i(o(60969), t),
        i(o(99257), t),
        i(o(5155), t),
        i(o(8627), t),
        i(o(28950), t),
        i(o(952), t),
        i(o(12902), t);
    },
    5131: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UNEXPECTED_ERROR = t.USER_STILL_OVERFLOWING = void 0),
        (t.USER_STILL_OVERFLOWING = "USER_STILL_OVERFLOWING"),
        (t.UNEXPECTED_ERROR = "UNEXPECTED_ERROR");
    },
    952: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    60969: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UnlinkPreviousDeviceError = void 0),
        (function (e) {
          e.UnexpectedError = "UNEXPECTED_ERROR";
        })(t.UnlinkPreviousDeviceError || (t.UnlinkPreviousDeviceError = {}));
    },
    28950: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    7168: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deviceLimitLiveSlots = t.deviceLimitSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.deviceLimitSlots = { getLoginDeviceLimitFlow: (0, r.slot)() }),
        (t.deviceLimitLiveSlots = { liveLoginDeviceLimitFlow: (0, i.liveSlot)() });
    },
    17725: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(4001), t);
    },
    88056: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.twoFactorStatusLiveSlots = t.twoFactorStatusSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.twoFactorStatusSlots = { getTwoFactorAuthenticationInfo: (0, r.slot)() }),
        (t.twoFactorStatusLiveSlots = { liveTwoFactorAuthenticationInfo: (0, i.liveSlot)() });
    },
    4001: (e, t) => {
      var o;
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
        })(o || (o = {})),
        (t.ENFORCE_TWO_FACTOR_AUTHENTICATION_ENABLED_VALUES = [o.LOGIN, o.NEW_DEVICE]);
    },
    74477: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(93016), t), i(o(3985), t), i(o(32233), t), i(o(17725), t);
    },
    3985: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.openSessionCommandsSlots = t.openSessionLiveQueriesSlots = t.openSessionQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195),
        n = o(7168),
        s = o(88056);
      (t.openSessionQueriesSlots = Object.assign(
        Object.assign(
          {
            getLoginStatus: (0, r.slot)(),
            getLocalAccounts: (0, r.slot)(),
            getIsSSOUser: (0, r.slot)(),
            getSSOMigrationInfo: (0, r.slot)(),
            getSessionInfo: (0, r.slot)(),
            getMasterPasswordAndServerKey: (0, r.slot)(),
            getUserCryptoSettings: (0, r.slot)(),
            getSyncInfo: (0, r.slot)(),
            getIsSyncInProgress: (0, r.slot)(),
            getPremiumStatus: (0, r.slot)(),
            getNodePremiumStatus: (0, r.slot)(),
            getSubscriptionInformation: (0, r.slot)(),
            getActiveSpaces: (0, r.slot)(),
            getIsAuthenticated: (0, r.slot)(),
            getSSOProviderInfo: (0, r.slot)(),
            getUserLogin: (0, r.slot)(),
            getPublicUserId: (0, r.slot)(),
            getAnalyticsInstallationId: (0, r.slot)(),
            getUserLoginStatus: (0, r.slot)(),
            getWebOnboardingMode: (0, r.slot)(),
            getPremiumChurningDismissDate: (0, r.slot)(),
            getIsPaymentFailureChurningDismissed: (0, r.slot)(),
            getCredentialSearchOrder: (0, r.slot)(),
            getDidOpen: (0, r.slot)(),
            getPlatformName: (0, r.slot)(),
            getAccountAuthenticationType: (0, r.slot)()
          },
          n.deviceLimitSlots
        ),
        s.twoFactorStatusSlots
      )),
        (t.openSessionLiveQueriesSlots = Object.assign(
          Object.assign(
            {
              liveLoginStatus: (0, i.liveSlot)(),
              liveDidOpen: (0, i.liveSlot)(),
              liveIsSSOUser: (0, i.liveSlot)(),
              liveSSOMigrationInfo: (0, i.liveSlot)(),
              liveSessionInfo: (0, i.liveSlot)(),
              liveSyncInfo: (0, i.liveSlot)(),
              liveIsSyncInProgress: (0, i.liveSlot)(),
              livePremiumStatus: (0, i.liveSlot)(),
              liveServiceProviderUrl: (0, i.liveSlot)(),
              liveWebOnboardingMode: (0, i.liveSlot)(),
              liveSubscriptionInformation: (0, i.liveSlot)()
            },
            n.deviceLimitLiveSlots
          ),
          s.twoFactorStatusLiveSlots
        )),
        (t.openSessionCommandsSlots = {
          validateToken: (0, r.slot)(),
          validateMasterPassword: (0, r.slot)(),
          resetProtectedItemAutofillTimer: (0, r.slot)(),
          forceSync: (0, r.slot)(),
          updatePremiumChurningDismissDate: (0, r.slot)(),
          setCredentialSearchOrder: (0, r.slot)(),
          refreshSubscriptionInformation: (0, r.slot)(),
          updateAccountRecoveryKeyPersonalSettings: (0, r.slot)()
        });
    },
    93016: (e, t) => {
      var o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CredentialSearchOrder =
          t.SSOMigrationType =
          t.SpaceStatus =
          t.SpaceTier =
          t.B2CPlanFeature =
          t.SyncStatuses =
          t.ServerSidePairingStatus =
          t.possibleAdminPermissions =
          t.groupPermissions =
          t.PlanType =
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
        (function (e) {
          (e.Amazon = "amazon"),
            (e.FreeTrial = "free_trial"),
            (e.Invoice = "invoice"),
            (e.IOS = "ios"),
            (e.IOSRenewable = "ios_renewable"),
            (e.Mac = "mac"),
            (e.MacRenewable = "mac_renewable"),
            (e.Offer = "offer"),
            (e.Partner = "partner"),
            (e.Paypal = "paypal"),
            (e.PaypalRenewable = "paypal_renewable"),
            (e.Playstore = "playstore"),
            (e.PlaystoreRenewable = "playstore_renewable"),
            (e.Stripe = "stripe");
        })(t.PlanType || (t.PlanType = {})),
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
        })(o || (o = {})),
        (function (e) {
          (e.Premium = "premium"), (e.Essentials = "essentials"), (e.Premiumplus = "premiumplus"), (e.BackupForAll = "backup");
        })(t.B2CPlanFeature || (t.B2CPlanFeature = {})),
        (function (e) {
          (e.Team = "team"),
            (e.Business = "business"),
            (e.Legacy = "legacy"),
            (e.Entreprise = "entreprise"),
            (e.Free = "free"),
            (e.Starter = "starter");
        })(t.SpaceTier || (t.SpaceTier = {})),
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
    87894: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(24231), t), i(o(23533), t);
    },
    24231: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.passwordGeneratorQueriesSlots = t.passwordGeneratorCommandsSlots = void 0);
      const r = o(71796);
      (t.passwordGeneratorCommandsSlots = {
        generatePassword: (0, r.slot)(),
        generateAndSavePassword: (0, r.slot)(),
        savePasswordGenerationSettings: (0, r.slot)()
      }),
        (t.passwordGeneratorQueriesSlots = { getPasswordGenerationSettings: (0, r.slot)() });
    },
    23533: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    83263: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(85154), t), i(o(65869), t);
    },
    85154: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.paymentsQueriesSlots = t.paymentsCommandsSlots = void 0);
      const r = o(71796);
      (t.paymentsCommandsSlots = {
        cancelAutoRenew: (0, r.slot)(),
        downloadCustomerInvoice: (0, r.slot)(),
        fetchInvoiceList: (0, r.slot)(),
        requestRefund: (0, r.slot)()
      }),
        (t.paymentsQueriesSlots = { getInvoicesCount: (0, r.slot)(), getInvoiceList: (0, r.slot)(), getInvoiceListYears: (0, r.slot)() });
    },
    65869: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.OrderDir = void 0),
        (function (e) {
          (e.ascending = "ascending"), (e.descending = "descending");
        })(t.OrderDir || (t.OrderDir = {}));
    },
    97981: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(56331), t), i(o(21230), t);
    },
    56331: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.protectedItemsUnlockerLiveQueriesSlots = t.protectedItemsUnlockerQueriesSlots = t.protectedItemsUnlockerCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.protectedItemsUnlockerCommandsSlots = { disableCredentialProtection: (0, r.slot)(), unlockProtectedItems: (0, r.slot)() }),
        (t.protectedItemsUnlockerQueriesSlots = { areProtectedItemsUnlocked: (0, r.slot)() }),
        (t.protectedItemsUnlockerLiveQueriesSlots = { liveAreProtectedItemsUnlocked: (0, i.liveSlot)() });
    },
    21230: (e, t) => {
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
    23448: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(69239), t), i(o(24298), t);
    },
    69239: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.recoveryLiveQueriesSlots = t.recoveryQueriesSlots = t.recoveryCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.recoveryCommandsSlots = {
        activateAccountRecovery: (0, r.slot)(),
        setupMasterPasswordForRecovery: (0, r.slot)(),
        deactivateAccountRecovery: (0, r.slot)(),
        registerDeviceForRecovery: (0, r.slot)(),
        startAccountRecovery: (0, r.slot)(),
        sendRecoveryRequest: (0, r.slot)(),
        cancelRecoveryRequest: (0, r.slot)(),
        checkRecoveryRequestStatus: (0, r.slot)(),
        recoverUserData: (0, r.slot)(),
        checkDoesLocalRecoveryKeyExist: (0, r.slot)(),
        isRecoveryRequestPending: (0, r.slot)()
      }),
        (t.recoveryQueriesSlots = {
          getRecoveryOptInSetting: (0, r.slot)(),
          getShouldShowFeatureActivationModal: (0, r.slot)(),
          getAccountRecoveryRequestCount: (0, r.slot)()
        }),
        (t.recoveryLiveQueriesSlots = { liveAccountRecoveryRequestCount: (0, i.liveSlot)() });
    },
    24298: (e, t) => {
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
    96014: (e, t) => {
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
    45169: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(96014), t);
    },
    82725: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    76480: (e, t) => {
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
    80245: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    36145: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    96687: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(36145), t), i(o(80245), t), i(o(76480), t);
    },
    57422: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(96687), t), i(o(65252), t), i(o(42866), t);
    },
    65252: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sharingCommandsSlots = t.sharingLiveQueriesSlots = t.sharingQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.sharingQueriesSlots = {
        getAllSharedItemIds: (0, r.slot)(),
        getGroupRecipients: (0, r.slot)(),
        getHasNotifications: (0, r.slot)(),
        getIsShared: (0, r.slot)(),
        getItemItemGroup: (0, r.slot)(),
        getMyAcceptedItemGroupUserMembers: (0, r.slot)(),
        getMyAcceptedUserGroups: (0, r.slot)(),
        getPendingUserGroups: (0, r.slot)(),
        getPendingItemGroups: (0, r.slot)(),
        getRecipientsCount: (0, r.slot)(),
        getUserRecipients: (0, r.slot)(),
        getSharingCapacity: (0, r.slot)(),
        isAllowedToShare: (0, r.slot)(),
        getUserGroups: (0, r.slot)(),
        getUserGroup: (0, r.slot)(),
        getUserGroupPermissionLevel: (0, r.slot)(),
        getUserGroupMembers: (0, r.slot)(),
        getSharingUsers: (0, r.slot)(),
        getSharingUserPermissionLevel: (0, r.slot)()
      }),
        (t.sharingLiveQueriesSlots = {
          liveAllSharedItemIds: (0, i.liveSlot)(),
          liveGroupRecipients: (0, i.liveSlot)(),
          liveHasNotifications: (0, i.liveSlot)(),
          liveIsShared: (0, i.liveSlot)(),
          liveMyAcceptedItemGroupUserMembers: (0, i.liveSlot)(),
          liveMyAcceptedUserGroups: (0, i.liveSlot)(),
          livePendingItemGroups: (0, i.liveSlot)(),
          livePendingUserGroups: (0, i.liveSlot)(),
          liveRecipientsCount: (0, i.liveSlot)(),
          liveUserRecipients: (0, i.liveSlot)(),
          liveSharingCapacity: (0, i.liveSlot)(),
          liveUserGroups: (0, i.liveSlot)(),
          liveUserGroupPermissionLevel: (0, i.liveSlot)(),
          liveSharingUsers: (0, i.liveSlot)(),
          liveSharingUserPermissionLevel: (0, i.liveSlot)()
        }),
        (t.sharingCommandsSlots = { convertItemToDashlaneXml: (0, r.slot)(), shareItem: (0, r.slot)() });
    },
    42866: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    80793: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    41804: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    72563: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    85187: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StaticDataQueryType = void 0),
        (function (e) {
          (e[(e.CALLING_CODES = 0)] = "CALLING_CODES"), (e[(e.GEOGRAPHIC_STATES = 1)] = "GEOGRAPHIC_STATES");
        })(t.StaticDataQueryType || (t.StaticDataQueryType = {}));
    },
    54332: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GeographicStateLevel = void 0),
        (function (e) {
          (e[(e.LEVEL_0 = 0)] = "LEVEL_0"), (e[(e.LEVEL_1 = 1)] = "LEVEL_1");
        })(t.GeographicStateLevel || (t.GeographicStateLevel = {}));
    },
    31072: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.StaticDataQueryType = void 0);
      var n = o(85187);
      Object.defineProperty(t, "StaticDataQueryType", {
        enumerable: !0,
        get: function () {
          return n.StaticDataQueryType;
        }
      }),
        i(o(72563), t),
        i(o(54332), t),
        i(o(68554), t),
        i(o(16193), t);
    },
    16193: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.staticDataQueriesSlots = void 0);
      const r = o(71796);
      t.staticDataQueriesSlots = {
        getAllBanks: (0, r.slot)(),
        getAllCallingCodes: (0, r.slot)(),
        getBanks: (0, r.slot)(),
        getSecureDocumentsExtensionsList: (0, r.slot)()
      };
    },
    68554: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    86648: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    80553: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(30494), t), i(o(72170), t);
    },
    30494: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.teamCommandsSlots = t.teamQueriesSlots = void 0);
      const r = o(71796);
      (t.teamQueriesSlots = { getIsRecoveryEnabled: (0, r.slot)() }),
        (t.teamCommandsSlots = {
          getTeamInfo: (0, r.slot)(),
          getTeamOffers: (0, r.slot)(),
          getMidCycleTierUpgradePrice: (0, r.slot)(),
          getExpectedTaxInformation: (0, r.slot)(),
          changeTierMidCycle: (0, r.slot)(),
          computePlanPricing: (0, r.slot)(),
          addSeats: (0, r.slot)()
        });
    },
    72170: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AddSeatsErrorType =
          t.ComputePlanPricingErrorType =
          t.ChangeTierMidCycleErrorType =
          t.GetExpectedTaxInformationErrorType =
          t.GetMidCycleTierUpgradePriceErrorType =
          t.B2BPlanTiers =
          t.GetTeamOffersErrorType =
            void 0);
      !(function (e) {
        (e.GetTeamOffersFailed = "GET_TEAM_OFFERS_FAILED"), (e.GetTeamOffersSummaryFailed = "GET_TEAM_OFFERS_SUMMARY_FAILED");
      })(t.GetTeamOffersErrorType || (t.GetTeamOffersErrorType = {})),
        (t.B2BPlanTiers = ["legacy", "team", "business", "entreprise"]),
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
    41197: (e, t) => {
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
    43129: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TeamDevicePlatform = void 0),
        (function (e) {
          (e.SSO_CONNECTOR = "sso_connector"), (e.ENCRYPTION_SERVICE = "encryption_service"), (e.NITRO = "nitro_encryption_service");
        })(t.TeamDevicePlatform || (t.TeamDevicePlatform = {}));
    },
    82567: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    96649: (e, t) => {
      var o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DomainStatus = t.DomainStatusResponse = void 0),
        (function (e) {
          (e.pending = "pending"), (e.valid = "valid"), (e.expired = "expired"), (e.invalid = "invalid");
        })((o = t.DomainStatusResponse || (t.DomainStatusResponse = {}))),
        (t.DomainStatus = o);
    },
    61182: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EncryptionServiceRestartStatusCodes = void 0),
        (function (e) {
          (e.OK = "OK"),
            (e.ES_UNREACHABLE = "ES_UNREACHABLE"),
            (e.ES_CONFIG_RELOAD_FAILURE = "ES_CONFIG_RELOAD_FAILURE"),
            (e.ES_INTERNAL_NETWORK_ERROR = "ES_INTERNAL_NETWORK_ERROR");
        })(t.EncryptionServiceRestartStatusCodes || (t.EncryptionServiceRestartStatusCodes = {}));
    },
    59815: (e, t) => {
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
    67195: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnknownTeamAdminError = t.TeamDeviceEncryptedConfigNotFound = void 0);
      var n = o(59815);
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
        i(o(12027), t),
        i(o(41197), t),
        i(o(43129), t),
        i(o(82567), t),
        i(o(96649), t),
        i(o(61182), t),
        i(o(90294), t),
        i(o(20049), t),
        i(o(23187), t),
        i(o(85787), t),
        i(o(29560), t),
        i(o(67202), t);
    },
    90294: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InviteLinkResponseErrorCode = void 0),
        (function (e) {
          (e.NotAdmin = "not_admin"),
            (e.TeamKeyNotFound = "TEAM_KEY_NOT_FOUND"),
            (e.InviteLinkNotFound = "TEAM_INVITE_LINK_NOT_FOUND"),
            (e.UserInviteLinkNotFound = "USER_TEAM_INVITE_TOKEN_NOT_FOUND");
        })(t.InviteLinkResponseErrorCode || (t.InviteLinkResponseErrorCode = {}));
    },
    20049: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GetRecoveryCodesAsTeamCaptainErrorCode = void 0),
        (function (e) {
          (e.NotAdmin = "not_billing_admin"), (e.InternalError = "internal_error"), (e.UnknownError = "UNKNOWN_ERROR");
        })(t.GetRecoveryCodesAsTeamCaptainErrorCode || (t.GetRecoveryCodesAsTeamCaptainErrorCode = {}));
    },
    23187: (e, t) => {
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
    85787: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    67202: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.teamAdminCommandsSlots = t.teamAdminLiveQueriesSlots = t.teamAdminQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.teamAdminQueriesSlots = {
        getAdministrableUserGroup: (0, r.slot)(),
        getAdministrableUserGroups: (0, r.slot)(),
        isGroupNameAvailable: (0, r.slot)(),
        getAdminProvisioningKey: (0, r.slot)()
      }),
        (t.teamAdminLiveQueriesSlots = {
          liveAdministrableUserGroup: (0, i.liveSlot)(),
          liveAdministrableUserGroups: (0, i.liveSlot)(),
          liveAdminProvisioningKey: (0, i.liveSlot)()
        }),
        (t.teamAdminCommandsSlots = {
          registerTeamDomain: (0, r.slot)(),
          completeTeamDomainRegistration: (0, r.slot)(),
          deactivateTeamDomain: (0, r.slot)(),
          getTeamDomains: (0, r.slot)(),
          getTeamDevice: (0, r.slot)(),
          listTeamDevices: (0, r.slot)(),
          deactivateTeamDevice: (0, r.slot)(),
          registerTeamDevice: (0, r.slot)(),
          registerTeamDeviceAccount: (0, r.slot)(),
          getEncryptionServiceConfig: (0, r.slot)(),
          generateAndSaveEncryptionServiceConfig: (0, r.slot)(),
          clearSelfHostedESSettings: (0, r.slot)(),
          getTeamDeviceEncryptedConfig: (0, r.slot)(),
          updateTeamDeviceEncryptedConfig: (0, r.slot)(),
          updateTeamSettings: (0, r.slot)(),
          parseMetadataFields: (0, r.slot)(),
          persistAdminProvisioningKey: (0, r.slot)(),
          removeAdminProvisioningKey: (0, r.slot)(),
          createSSOConnectorConfig: (0, r.slot)(),
          generateSSOConnectorKey: (0, r.slot)(),
          startAuditLogsQuery: (0, r.slot)(),
          getAuditLogQueryResults: (0, r.slot)(),
          getRecoveryCodesAsTeamCaptain: (0, r.slot)(),
          createInviteLink: (0, r.slot)(),
          changeInviteLinkTeamKey: (0, r.slot)(),
          toggleInviteLink: (0, r.slot)(),
          getInviteLink: (0, r.slot)(),
          requestInviteLinkToken: (0, r.slot)(),
          getInviteLinkForAdmin: (0, r.slot)(),
          getLastADSyncDate: (0, r.slot)(),
          getSpecialUserGroupInviteValuesForMemberInTeam: (0, r.slot)(),
          getSpecialUserGroupRevision: (0, r.slot)()
        });
    },
    29560: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    12027: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TeamMemberSSOStatus = void 0),
        (function (e) {
          (e.Activated = "activated"), (e.PendingActivation = "pending_activation"), (e.PendingDeactivation = "pending_deactivation");
        })(t.TeamMemberSSOStatus || (t.TeamMemberSSOStatus = {}));
    },
    73572: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(29647), t), i(o(70195), t);
    },
    29647: (e, t) => {
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
    70195: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.userMessagesCommandsSlots = t.userMessagesLiveQueriesSlots = t.userMessagesQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.userMessagesQueriesSlots = { getVisibleUserMessages: (0, r.slot)(), getUserMessages: (0, r.slot)() }),
        (t.userMessagesLiveQueriesSlots = { liveUserMessages: (0, i.liveSlot)(), liveVisibleUserMessages: (0, i.liveSlot)() }),
        (t.userMessagesCommandsSlots = { dismissUserMessages: (0, r.slot)(), addUserMessage: (0, r.slot)() });
    },
    7970: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(74012), t), i(o(63468), t);
    },
    74012: (e, t) => {
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
    63468: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vpnCommandsSlots = t.vpnLiveQueriesSlots = t.vpnQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.vpnQueriesSlots = { getVpnAccount: (0, r.slot)(), getVpnCapabilitySetting: (0, r.slot)() }),
        (t.vpnLiveQueriesSlots = { liveVpnAccount: (0, i.liveSlot)() }),
        (t.vpnCommandsSlots = {
          activateVpnAccount: (0, r.slot)(),
          clearVpnAccountErrors: (0, r.slot)(),
          completeVpnAccountActivation: (0, r.slot)()
        });
    },
    88522: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = o(90693),
        i = o(97494),
        n = o(59360),
        s = o(56999),
        a = o(37284),
        l = o(36520),
        c = o(81719),
        u = o(29597),
        d = o(92137);
      r.taskTrackingApi,
        i.activityLogsApi,
        n.vaultItemsCrudApi,
        c.AuthenticationFlowContracts.authenticationFlowApi,
        c.DeviceTransferContracts.deviceTransferApi,
        u.sessionApi,
        d.masterPasswordSecurityApi,
        a.passwordHealthApi,
        l.carbonLegacyApi,
        u.changeMasterPasswordApi,
        s.sharingCollectionsApi,
        s.sharingInvitesApi,
        n.vaultOrganizationApi,
        r.featureFlipsApi;
    },
    36520: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonLegacyApi = void 0);
      const r = o(90693),
        i = o(6530),
        n = o(8652),
        s = o(92299);
      t.carbonLegacyApi = (0, r.defineModuleApi)({ name: "carbon-legacy", commands: i.commands, queries: s.queries, events: n.events });
    },
    56402: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonLegacyClient = void 0);
      const r = o(90693),
        i = o(36520);
      class n extends (0, r.defineModuleClient)(i.carbonLegacyApi) {}
      (t.CarbonLegacyClient = n), (0, r.registerModuleClient)(i.carbonLegacyApi, n);
    },
    6530: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.commands =
          t.commandsFromCarbonAPI =
          t.MitigationDeleteGrapheneUserDataCommand =
          t.CarbonLegacyLeelooCommand =
          t.CarbonCommand =
            void 0);
      const r = o(90693),
        i = o(55195),
        n = o(41155);
      class s extends (0, r.defineCarbonCommand)({ scope: r.UseCaseScope.Device }) {}
      t.CarbonCommand = s;
      class a extends (0, r.defineCarbonCommand)({ scope: r.UseCaseScope.Device }) {}
      t.CarbonLegacyLeelooCommand = a;
      class l extends (0, r.defineCommand)({ scope: r.UseCaseScope.Device }) {}
      (t.MitigationDeleteGrapheneUserDataCommand = l),
        (t.commandsFromCarbonAPI = (0, n.createCommandContractsFromConnector)(i.carbonCommandsSlots)),
        (t.commands = Object.assign(Object.assign({}, t.commandsFromCarbonAPI), {
          CarbonCommand: s,
          CarbonLegacyLeelooCommand: a,
          MitigationDeleteGrapheneUserDataCommand: l
        }));
    },
    8652: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.events = t.CarbonLegacyDeviceRemotelyDeleted = t.CarbonLegacyEvent = t.CarbonCommandResultEvent = void 0);
      const r = o(90693);
      class i extends (0, r.defineEvent)({ scope: r.UseCaseScope.Device }) {}
      t.CarbonCommandResultEvent = i;
      class n extends (0, r.defineEvent)({ scope: r.UseCaseScope.Device }) {}
      t.CarbonLegacyEvent = n;
      class s extends (0, r.defineEvent)({ scope: r.UseCaseScope.Device }) {}
      (t.CarbonLegacyDeviceRemotelyDeleted = s),
        (t.events = { CarbonCommandResultEvent: i, CarbonLegacyEvent: n, CarbonLegacyDeviceRemotelyDeleted: s });
    },
    92299: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.queries = t.queriesFromCarbonAPI = t.CarbonStateListQuery = t.CarbonStateQuery = void 0);
      const r = o(90693),
        i = o(55195),
        n = o(41155);
      class s extends (0, r.defineQuery)({ scope: r.UseCaseScope.Device }) {}
      t.CarbonStateQuery = s;
      class a extends (0, r.defineQuery)({ scope: r.UseCaseScope.Device }) {}
      (t.CarbonStateListQuery = a),
        (t.queriesFromCarbonAPI = (0, n.createQueryContractsFromConnectors)(i.carbonQueriesSlots, i.carbonLiveQueriesSlots)),
        (t.queries = Object.assign(Object.assign({}, t.queriesFromCarbonAPI), { CarbonStateQuery: s, CarbonStateListQuery: a }));
    },
    47453: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(o(92299), t),
        i(o(8652), t),
        i(o(6530), t),
        i(o(35278), t),
        i(o(36520), t),
        i(o(56402), t);
    },
    41155: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createQueryContractsFromConnectors = t.createCommandContractsFromConnector = void 0);
      const r = o(90693);
      (t.createCommandContractsFromConnector = function (e) {
        return Object.keys(e).reduce(
          (e, t) =>
            Object.assign(Object.assign({}, e), {
              [`${t[0].toUpperCase().concat(t.substring(1))}Command`]: (0, r.defineCarbonCommand)({ scope: r.UseCaseScope.Device })
            }),
          {}
        );
      }),
        (t.createQueryContractsFromConnectors = function (e, t) {
          return [...Object.keys(e), ...Object.keys(t)].reduce(
            (e, t) =>
              Object.assign(Object.assign({}, e), {
                [`${t[0].toUpperCase().concat(t.substring(1))}Query`]: (0, r.defineQuery)({ scope: r.UseCaseScope.Device })
              }),
            {}
          );
        });
    },
    35278: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LEGACY_CARBON_LEELOO_USED_COMMANDS = void 0);
      t.LEGACY_CARBON_LEELOO_USED_COMMANDS = [
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
        "sessionForceSync"
      ];
    },
    76075: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bankAccountCommandsSlots = t.bankAccountLiveQueriesSlots = t.bankAccountQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.bankAccountQueriesSlots = { getBankAccount: (0, r.slot)(), getBankAccounts: (0, r.slot)() }),
        (t.bankAccountLiveQueriesSlots = { liveBankAccount: (0, i.liveSlot)(), liveBankAccounts: (0, i.liveSlot)() }),
        (t.bankAccountCommandsSlots = {
          addBankAccount: (0, r.slot)(),
          updateBankAccount: (0, r.slot)(),
          deleteBankAccount: (0, r.slot)()
        });
    },
    68528: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(76075), t), i(o(32101), t);
    },
    32101: (e, t) => {
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
    41153: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.breachesCommandsSlots = t.breachesLiveQueriesSlots = t.breachesQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.breachesQueriesSlots = {
        getBreach: (0, r.slot)(),
        getBreaches: (0, r.slot)(),
        getBreachesPage: (0, r.slot)(),
        getBreachesPaginationToken: (0, r.slot)(),
        getBreachesUpdateStatus: (0, r.slot)()
      }),
        (t.breachesLiveQueriesSlots = {
          liveBreach: (0, i.liveSlot)(),
          liveBreaches: (0, i.liveSlot)(),
          liveBreachesBatch: (0, i.liveSlot)(),
          liveBreachesUpdaterStatus: (0, i.liveSlot)()
        }),
        (t.breachesCommandsSlots = { updateBreachStatus: (0, r.slot)() });
    },
    90079: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(41153), t), i(o(93949), t);
    },
    93949: (e, t) => {
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
    33513: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.collectionsCommandsSlots = void 0);
      const r = o(71796);
      t.collectionsCommandsSlots = {
        addCollection: (0, r.slot)(),
        deleteCollection: (0, r.slot)(),
        removeItemsFromCollections: (0, r.slot)(),
        updateCollection: (0, r.slot)()
      };
    },
    5813: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(33513), t), i(o(16238), t);
    },
    16238: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    78979: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(11060), t), i(o(41827), t);
    },
    11060: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.credentialsLiveQueriesSlots = t.credentialsQueriesSlots = t.credentialsCommandsSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.credentialsCommandsSlots = {
        addCredential: (0, r.slot)(),
        deleteCredential: (0, r.slot)(),
        deleteCredentialsInBulk: (0, r.slot)(),
        updateCredential: (0, r.slot)(),
        updateLinkedWebsites: (0, r.slot)()
      }),
        (t.credentialsQueriesSlots = {
          canUserAddNewCredential: (0, r.slot)(),
          getCredential: (0, r.slot)(),
          getCredentialCategories: (0, r.slot)(),
          getCredentials: (0, r.slot)(),
          getCredentialsByDomain: (0, r.slot)(),
          getCredentialsCount: (0, r.slot)(),
          getCredentialLimitStatus: (0, r.slot)(),
          getCredentialsPage: (0, r.slot)(),
          getCredentialsPaginationToken: (0, r.slot)(),
          getDashlaneDefinedLinkedWebsites: (0, r.slot)(),
          getShouldShowRequireMasterPassword: (0, r.slot)()
        }),
        (t.credentialsLiveQueriesSlots = {
          liveCanUserAddNewCredential: (0, i.liveSlot)(),
          liveCredential: (0, i.liveSlot)(),
          liveCredentials: (0, i.liveSlot)(),
          liveCredentialsByDomain: (0, i.liveSlot)(),
          liveCredentialsBatch: (0, i.liveSlot)(),
          liveCredentialsCount: (0, i.liveSlot)(),
          liveCredentialLimitStatus: (0, i.liveSlot)()
        });
    },
    41827: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CredentialLimitStatus = void 0),
        (function (e) {
          (e.Unlimited = "unlimited"), (e.UnderLimit = "underLimit"), (e.NearLimit = "nearLimit"), (e.AtOrAboveLimit = "atOrAboveLimit");
        })(t.CredentialLimitStatus || (t.CredentialLimitStatus = {}));
    },
    58806: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.exportCommandsSlots = t.exportQueriesSlots = void 0);
      const r = o(71796);
      (t.exportQueriesSlots = { getIsForcedDomainsEnabled: (0, r.slot)() }),
        (t.exportCommandsSlots = { getPersonalDataExport: (0, r.slot)() });
    },
    88887: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(58806), t), i(o(54615), t);
    },
    54615: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.GetPersonalDataExportErrorMessage = void 0);
      !(function (e) {
        (e.UNSUPPORTED_DATATYPE_ERROR = "Unsupported Data Export Type"), (e.UNDEFINED_PASSWORD_ERROR = "Undefined Password");
      })(t.GetPersonalDataExportErrorMessage || (t.GetPersonalDataExportErrorMessage = {}));
    },
    60575: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generatedPasswordsCommandsSlots = t.generatedPasswordsLiveQueriesSlots = t.generatedPasswordsQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.generatedPasswordsQueriesSlots = {
        getGeneratedPassword: (0, r.slot)(),
        getGeneratedPasswordsCount: (0, r.slot)(),
        getGeneratedPasswords: (0, r.slot)(),
        getGeneratedPasswordsPage: (0, r.slot)(),
        getGeneratedPasswordsPaginationToken: (0, r.slot)()
      }),
        (t.generatedPasswordsLiveQueriesSlots = {
          liveGeneratedPasswordsCount: (0, i.liveSlot)(),
          liveGeneratedPasswords: (0, i.liveSlot)()
        }),
        (t.generatedPasswordsCommandsSlots = { saveGeneratedPassword: (0, r.slot)() });
    },
    24842: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(60575), t), i(o(39282), t);
    },
    39282: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    88359: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.driverLicensesCommandsSlots = t.driverLicensesLiveQueriesSlots = t.driverLicensesQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.driverLicensesQueriesSlots = { getDriverLicense: (0, r.slot)(), getDriverLicenses: (0, r.slot)() }),
        (t.driverLicensesLiveQueriesSlots = { liveDriverLicense: (0, i.liveSlot)(), liveDriverLicenses: (0, i.liveSlot)() }),
        (t.driverLicensesCommandsSlots = {
          addDriverLicense: (0, r.slot)(),
          editDriverLicense: (0, r.slot)(),
          deleteDriverLicense: (0, r.slot)()
        });
    },
    59032: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(88359), t), i(o(36896), t);
    },
    36896: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    5260: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fiscalsIdCommandsSlots = t.fiscalIdsLiveQueriesSlots = t.fiscalIdsQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.fiscalIdsQueriesSlots = { getFiscalId: (0, r.slot)(), getFiscalIds: (0, r.slot)() }),
        (t.fiscalIdsLiveQueriesSlots = { liveFiscalId: (0, i.liveSlot)(), liveFiscalIds: (0, i.liveSlot)() }),
        (t.fiscalsIdCommandsSlots = { addFiscalId: (0, r.slot)(), editFiscalId: (0, r.slot)(), deleteFiscalId: (0, r.slot)() });
    },
    99524: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(5260), t), i(o(27659), t);
    },
    27659: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    58014: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.idCardsCommandsSlots = t.idCardsLiveQueriesSlots = t.idCardsQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.idCardsQueriesSlots = { getIdCard: (0, r.slot)(), getIdCards: (0, r.slot)() }),
        (t.idCardsLiveQueriesSlots = { liveIdCard: (0, i.liveSlot)(), liveIdCards: (0, i.liveSlot)() }),
        (t.idCardsCommandsSlots = { addIdCard: (0, r.slot)(), editIdCard: (0, r.slot)(), deleteIdCard: (0, r.slot)() });
    },
    11609: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(58014), t), i(o(61255), t);
    },
    61255: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    61835: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(o(66128), t),
        i(o(59032), t),
        i(o(99524), t),
        i(o(11609), t),
        i(o(16118), t),
        i(o(30310), t),
        i(o(37217), t);
    },
    16118: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(1063), t), i(o(8876), t);
    },
    1063: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.passportsCommandsSlots = t.passportsLiveQueriesSlots = t.passportsQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.passportsQueriesSlots = { getPassport: (0, r.slot)(), getPassports: (0, r.slot)() }),
        (t.passportsLiveQueriesSlots = { livePassport: (0, i.liveSlot)(), livePassports: (0, i.liveSlot)() }),
        (t.passportsCommandsSlots = { addPassport: (0, r.slot)(), editPassport: (0, r.slot)(), deletePassport: (0, r.slot)() });
    },
    8876: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    66128: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.idsCommandsSlots = t.idsLiveQueriesSlots = t.idsQueriesSlots = void 0);
      const r = o(71796),
        i = o(59032),
        n = o(5260),
        s = o(11609),
        a = o(16118),
        l = o(30310);
      (t.idsQueriesSlots = (0, r.combineEvents)(
        i.driverLicensesQueriesSlots,
        n.fiscalIdsQueriesSlots,
        s.idCardsQueriesSlots,
        a.passportsQueriesSlots,
        l.socialSecurityIdsQueriesSlots
      )),
        (t.idsLiveQueriesSlots = (0, r.combineEvents)(
          i.driverLicensesLiveQueriesSlots,
          n.fiscalIdsLiveQueriesSlots,
          s.idCardsLiveQueriesSlots,
          a.passportsLiveQueriesSlots,
          l.socialSecurityIdsLiveQueriesSlots
        )),
        (t.idsCommandsSlots = (0, r.combineEvents)(
          i.driverLicensesCommandsSlots,
          n.fiscalsIdCommandsSlots,
          s.idCardsCommandsSlots,
          a.passportsCommandsSlots,
          l.socialSecurityIdsCommandsSlots
        ));
    },
    30310: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(25078), t), i(o(79003), t);
    },
    25078: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.socialSecurityIdsCommandsSlots = t.socialSecurityIdsLiveQueriesSlots = t.socialSecurityIdsQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.socialSecurityIdsQueriesSlots = { getSocialSecurityId: (0, r.slot)(), getSocialSecurityIds: (0, r.slot)() }),
        (t.socialSecurityIdsLiveQueriesSlots = { liveSocialSecurityId: (0, i.liveSlot)(), liveSocialSecurityIds: (0, i.liveSlot)() }),
        (t.socialSecurityIdsCommandsSlots = {
          addSocialSecurityId: (0, r.slot)(),
          editSocialSecurityId: (0, r.slot)(),
          deleteSocialSecurityId: (0, r.slot)()
        });
    },
    79003: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    37217: (e, t) => {
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
    93088: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.importCommandsSlots = t.importLiveQueriesSlots = t.importQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.importQueriesSlots = { getImportPersonalDataStatus: (0, r.slot)() }),
        (t.importLiveQueriesSlots = { liveImportPersonalDataStatus: (0, i.liveSlot)() }),
        (t.importCommandsSlots = {
          importPersonalData: (0, r.slot)(),
          previewPersonalData: (0, r.slot)(),
          dismissPersonalDataImportNotifications: (0, r.slot)()
        });
    },
    31186: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(93088), t), i(o(73606), t);
    },
    73606: (e, t) => {
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
    54707: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(o(60460), t),
        i(o(53664), t),
        i(o(60154), t),
        i(o(68528), t),
        i(o(90079), t),
        i(o(5813), t),
        i(o(78979), t),
        i(o(88887), t),
        i(o(61835), t),
        i(o(31186), t),
        i(o(97722), t),
        i(o(30610), t),
        i(o(74483), t),
        i(o(71101), t),
        i(o(41176), t),
        i(o(77959), t),
        i(o(31655), t),
        i(o(32617), t),
        i(o(7767), t),
        i(o(51809), t),
        i(o(24842), t),
        i(o(67028), t);
    },
    97722: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(15264), t);
    },
    15264: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UpdateLinkedWebsitesError = void 0),
        (function (e) {
          e.CredentialUpdateError = "credentialUpdateError";
        })(t.UpdateLinkedWebsitesError || (t.UpdateLinkedWebsitesError = {}));
    },
    32617: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(30827), t), i(o(43187), t);
    },
    30827: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.passkeyCommandsSlots = t.passkeyLiveQueriesSlots = t.passkeyQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.passkeyQueriesSlots = { getPasskey: (0, r.slot)(), getPasskeys: (0, r.slot)(), getPasskeysForDomain: (0, r.slot)() }),
        (t.passkeyLiveQueriesSlots = { livePasskey: (0, i.liveSlot)(), livePasskeys: (0, i.liveSlot)() }),
        (t.passkeyCommandsSlots = { addPasskey: (0, r.slot)(), updatePasskey: (0, r.slot)(), deletePasskey: (0, r.slot)() });
    },
    43187: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DeletePasskeyErrorCode = void 0),
        (function (e) {
          (e[(e.NOT_AUTHORIZED = 0)] = "NOT_AUTHORIZED"),
            (e[(e.NOT_FOUND = 1)] = "NOT_FOUND"),
            (e[(e.INTERNAL_ERROR = 2)] = "INTERNAL_ERROR");
        })(t.DeletePasskeyErrorCode || (t.DeletePasskeyErrorCode = {}));
    },
    7767: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(60771), t), i(o(45417), t);
    },
    60771: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.passwordHistoryLiveQueriesSlots = t.passwordHistoryQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.passwordHistoryQueriesSlots = {
        getPasswordHistory: (0, r.slot)(),
        getHasPasswordHistory: (0, r.slot)(),
        getPasswordHistoryPage: (0, r.slot)(),
        getPasswordHistoryPaginationToken: (0, r.slot)()
      }),
        (t.passwordHistoryLiveQueriesSlots = { livePasswordHistory: (0, i.liveSlot)(), livePasswordHistoryBatch: (0, i.liveSlot)() });
    },
    45417: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PasswordHistoryItemType = void 0),
        (function (e) {
          (e.Credential = "credential"), (e.Generated = "generated");
        })(t.PasswordHistoryItemType || (t.PasswordHistoryItemType = {}));
    },
    51809: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(95549), t), i(o(19691), t);
    },
    95549: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.paymentCardCommandsSlots = t.paymentCardLiveQueriesSlots = t.paymentCardQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.paymentCardQueriesSlots = { getPaymentCard: (0, r.slot)(), getPaymentCards: (0, r.slot)() }),
        (t.paymentCardLiveQueriesSlots = { livePaymentCard: (0, i.liveSlot)(), livePaymentCards: (0, i.liveSlot)() }),
        (t.paymentCardCommandsSlots = {
          addPaymentCard: (0, r.slot)(),
          updatePaymentCard: (0, r.slot)(),
          deletePaymentCard: (0, r.slot)()
        });
    },
    19691: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DeletePaymentCardErrorCode = t.PaymentCardSaveResultErrorCode = void 0),
        (function (e) {
          (e.EMPTY_CARD_NUMBER_AND_SECURITY_CODE = "EMPTY_CARD_NUMBER_AND_SECURITY_CODE"), (e.NOT_FOUND = "NOT_FOUND");
        })(t.PaymentCardSaveResultErrorCode || (t.PaymentCardSaveResultErrorCode = {})),
        (function (e) {
          (e.NOT_AUTHORIZED = "NOT_AUTHORIZED"), (e.NOT_FOUND = "NOT_FOUND"), (e.INTERNAL_ERROR = "INTERNAL_ERROR");
        })(t.DeletePaymentCardErrorCode || (t.DeletePaymentCardErrorCode = {}));
    },
    38504: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addressLiveQueriesSlots = t.addressQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.addressQueriesSlots = { getAddresses: (0, r.slot)(), getAddress: (0, r.slot)() }),
        (t.addressLiveQueriesSlots = { liveAddress: (0, i.liveSlot)(), liveAddresses: (0, i.liveSlot)() });
    },
    83287: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(38504), t), i(o(73207), t);
    },
    73207: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    32826: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.companyLiveQueriesSlots = t.companyQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.companyQueriesSlots = { getCompanies: (0, r.slot)(), getCompany: (0, r.slot)() }),
        (t.companyLiveQueriesSlots = { liveCompanies: (0, i.liveSlot)(), liveCompany: (0, i.liveSlot)() });
    },
    4898: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(32826), t), i(o(97595), t);
    },
    97595: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    84951: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.emailLiveQueriesSlots = t.emailQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.emailQueriesSlots = { getEmail: (0, r.slot)(), getEmails: (0, r.slot)() }),
        (t.emailLiveQueriesSlots = { liveEmail: (0, i.liveSlot)(), liveEmails: (0, i.liveSlot)() });
    },
    1182: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(84951), t), i(o(61269), t);
    },
    61269: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    69422: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.identityLiveQueriesSlots = t.identityQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.identityQueriesSlots = { getIdentities: (0, r.slot)(), getIdentitiesCount: (0, r.slot)(), getIdentity: (0, r.slot)() }),
        (t.identityLiveQueriesSlots = {
          liveIdentities: (0, i.liveSlot)(),
          liveIdentitiesCount: (0, i.liveSlot)(),
          liveIdentity: (0, i.liveSlot)()
        });
    },
    55170: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(69422), t), i(o(58761), t);
    },
    58761: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    60154: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(o(83287), t),
        i(o(4898), t),
        i(o(1182), t),
        i(o(55170), t),
        i(o(24306), t),
        i(o(31250), t),
        i(o(34100), t);
    },
    31250: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(84148), t), i(o(51277), t);
    },
    51277: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.phoneLiveQueriesSlots = t.phoneQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.phoneQueriesSlots = { getPhone: (0, r.slot)(), getPhones: (0, r.slot)() }),
        (t.phoneLiveQueriesSlots = { livePhone: (0, i.liveSlot)(), livePhones: (0, i.liveSlot)() });
    },
    84148: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    34100: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.personalInfoLiveQueriesSlots = t.personalInfoQueriesSlots = void 0);
      const r = o(71796),
        i = o(83287),
        n = o(4898),
        s = o(1182),
        a = o(55170),
        l = o(31250),
        c = o(24306);
      (t.personalInfoQueriesSlots = (0, r.combineEvents)(
        i.addressQueriesSlots,
        n.companyQueriesSlots,
        s.emailQueriesSlots,
        a.identityQueriesSlots,
        l.phoneQueriesSlots,
        c.websiteQueriesSlots
      )),
        (t.personalInfoLiveQueriesSlots = (0, r.combineEvents)(
          i.addressLiveQueriesSlots,
          n.companyLiveQueriesSlots,
          s.emailLiveQueriesSlots,
          a.identityLiveQueriesSlots,
          l.phoneLiveQueriesSlots,
          c.websiteLiveQueriesSlots
        ));
    },
    24306: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(56346), t), i(o(29434), t);
    },
    56346: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    29434: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.websiteLiveQueriesSlots = t.websiteQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.websiteQueriesSlots = { getPersonalWebsite: (0, r.slot)(), getPersonalWebsites: (0, r.slot)() }),
        (t.websiteLiveQueriesSlots = { livePersonalWebsite: (0, i.liveSlot)(), livePersonalWebsites: (0, i.liveSlot)() });
    },
    30610: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(67667), t), i(o(55003), t);
    },
    67667: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.secretCommandsSlots = t.secretLiveQueriesSlots = t.secretQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.secretQueriesSlots = {
        getSecret: (0, r.slot)(),
        getSecrets: (0, r.slot)(),
        getSecretsCount: (0, r.slot)(),
        getSecretsPage: (0, r.slot)(),
        getSecretsPaginationToken: (0, r.slot)()
      }),
        (t.secretLiveQueriesSlots = {
          liveSecret: (0, i.liveSlot)(),
          liveSecrets: (0, i.liveSlot)(),
          liveSecretsBatch: (0, i.liveSlot)(),
          liveSecretsCount: (0, i.liveSlot)()
        }),
        (t.secretCommandsSlots = { addSecret: (0, r.slot)(), updateSecret: (0, r.slot)(), deleteSecret: (0, r.slot)() });
    },
    55003: (e, t) => {
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
    74483: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(57606), t), i(o(85252), t);
    },
    57606: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.secureFilesCommandsSlots = t.secureFilesLiveQueriesSlots = t.secureFilesQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.secureFilesQueriesSlots = {
        getSecureFilesQuota: (0, r.slot)(),
        getSecureFilesInfoList: (0, r.slot)(),
        getFileDownloadProgress: (0, r.slot)(),
        getFileUploadProgress: (0, r.slot)()
      }),
        (t.secureFilesLiveQueriesSlots = {
          liveSecureFilesQuota: (0, i.liveSlot)(),
          liveFileDownloadProgress: (0, i.liveSlot)(),
          liveFileUploadProgress: (0, i.liveSlot)()
        }),
        (t.secureFilesCommandsSlots = {
          downloadSecureFile: (0, r.slot)(),
          chunkTransferDone: (0, r.slot)(),
          deleteSecureFile: (0, r.slot)(),
          addSecureFile: (0, r.slot)(),
          validateSecureFile: (0, r.slot)(),
          commitSecureFile: (0, r.slot)(),
          initSecureFilesStorageInfo: (0, r.slot)(),
          clearSecureFileState: (0, r.slot)()
        });
    },
    85252: (e, t) => {
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
    71101: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(84240), t), i(o(50766), t);
    },
    84240: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.secureNoteCategoryCommandsSlots = void 0);
      const r = o(71796);
      t.secureNoteCategoryCommandsSlots = { setupDefaultNoteCategories: (0, r.slot)() };
    },
    50766: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    41176: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(41670), t), i(o(11379), t);
    },
    41670: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.noteCommandsSlots = t.noteLiveQueriesSlots = t.noteQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.noteQueriesSlots = {
        getNote: (0, r.slot)(),
        getNoteCategories: (0, r.slot)(),
        getNotes: (0, r.slot)(),
        getNotesCount: (0, r.slot)(),
        getNotesPage: (0, r.slot)(),
        getNotesPaginationToken: (0, r.slot)()
      }),
        (t.noteLiveQueriesSlots = {
          liveNote: (0, i.liveSlot)(),
          liveNotes: (0, i.liveSlot)(),
          liveNotesBatch: (0, i.liveSlot)(),
          liveNotesCount: (0, i.liveSlot)()
        }),
        (t.noteCommandsSlots = { addSecureNote: (0, r.slot)(), updateSecureNote: (0, r.slot)(), deleteSecureNote: (0, r.slot)() });
    },
    11379: (e, t) => {
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
    77959: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(17515), t), i(o(94628), t);
    },
    17515: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.settingsCommandsSlots = t.settingsLiveQueriesSlots = t.settingsQueriesSlots = void 0);
      const r = o(71796),
        i = o(55195);
      (t.settingsQueriesSlots = {
        getAnonymousUserId: (0, r.slot)(),
        getIsUrlBanished: (0, r.slot)(),
        arePasswordsProtected: (0, r.slot)()
      }),
        (t.settingsLiveQueriesSlots = { liveArePasswordsProtected: (0, i.liveSlot)() }),
        (t.settingsCommandsSlots = {
          toggleDashlane: (0, r.slot)(),
          updateProtectPasswordsSetting: (0, r.slot)(),
          updateAutofillSettings: (0, r.slot)()
        });
    },
    94628: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    60460: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.dataManagementCommandsSlots = t.dataManagementLiveQueriesSlots = t.dataManagementQueriesSlots = void 0);
      const r = o(71796),
        i = o(68528),
        n = o(90079),
        s = o(5813),
        a = o(78979),
        l = o(88887),
        c = o(24842),
        u = o(61835),
        d = o(31186),
        _ = o(32617),
        S = o(7767),
        E = o(51809),
        O = o(60154),
        p = o(74483),
        v = o(71101),
        f = o(41176),
        T = o(77959),
        A = o(31655),
        P = o(67028),
        b = o(30610);
      (t.dataManagementQueriesSlots = (0, r.combineEvents)(
        i.bankAccountQueriesSlots,
        n.breachesQueriesSlots,
        a.credentialsQueriesSlots,
        l.exportQueriesSlots,
        c.generatedPasswordsQueriesSlots,
        u.idsQueriesSlots,
        d.importQueriesSlots,
        f.noteQueriesSlots,
        _.passkeyQueriesSlots,
        S.passwordHistoryQueriesSlots,
        E.paymentCardQueriesSlots,
        O.personalInfoQueriesSlots,
        b.secretQueriesSlots,
        p.secureFilesQueriesSlots,
        T.settingsQueriesSlots,
        A.spacesQueriesSlots,
        P.vaultQueriesSlots
      )),
        (t.dataManagementLiveQueriesSlots = (0, r.combineEvents)(
          i.bankAccountLiveQueriesSlots,
          n.breachesLiveQueriesSlots,
          a.credentialsLiveQueriesSlots,
          c.generatedPasswordsLiveQueriesSlots,
          u.idsLiveQueriesSlots,
          d.importLiveQueriesSlots,
          f.noteLiveQueriesSlots,
          _.passkeyLiveQueriesSlots,
          S.passwordHistoryLiveQueriesSlots,
          E.paymentCardLiveQueriesSlots,
          O.personalInfoLiveQueriesSlots,
          b.secretLiveQueriesSlots,
          p.secureFilesLiveQueriesSlots,
          T.settingsLiveQueriesSlots
        )),
        (t.dataManagementCommandsSlots = (0, r.combineEvents)(
          i.bankAccountCommandsSlots,
          n.breachesCommandsSlots,
          s.collectionsCommandsSlots,
          a.credentialsCommandsSlots,
          l.exportCommandsSlots,
          c.generatedPasswordsCommandsSlots,
          u.idsCommandsSlots,
          d.importCommandsSlots,
          f.noteCommandsSlots,
          _.passkeyCommandsSlots,
          E.paymentCardCommandsSlots,
          b.secretCommandsSlots,
          p.secureFilesCommandsSlots,
          v.secureNoteCategoryCommandsSlots,
          T.settingsCommandsSlots,
          P.vaultCommandsSlots
        ));
    },
    31655: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(10711), t), i(o(61131), t);
    },
    10711: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.spacesQueriesSlots = void 0);
      const r = o(71796);
      t.spacesQueriesSlots = { getSpace: (0, r.slot)(), getSpaces: (0, r.slot)() };
    },
    61131: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    53664: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    67028: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(o(99092), t), i(o(28937), t);
    },
    99092: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VaultItemDisableProtectionMode = void 0),
        (function (e) {
          (e[(e.CannotDisable = 0)] = "CannotDisable"),
            (e[(e.DisableSpecificVaultItem = 1)] = "DisableSpecificVaultItem"),
            (e[(e.DisableGeneralSetting = 2)] = "DisableGeneralSetting");
        })(t.VaultItemDisableProtectionMode || (t.VaultItemDisableProtectionMode = {}));
    },
    28937: (e, t, o) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vaultCommandsSlots = t.vaultQueriesSlots = void 0);
      const r = o(71796);
      (t.vaultQueriesSlots = { getAutofillProtectionContext: (0, r.slot)() }),
        (t.vaultCommandsSlots = { disableVaultItemProtection: (0, r.slot)() });
    },
    53576: function (e, t, o) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, r) {
                void 0 === r && (r = o);
                var i = Object.getOwnPropertyDescriptor(t, o);
                (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    }
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, o, r) {
                void 0 === r && (r = o), (e[r] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(o(55195), t),
        i(o(58616), t),
        i(o(75640), t),
        i(o(54503), t),
        i(o(83025), t),
        i(o(79158), t),
        i(o(14874), t),
        i(o(58300), t),
        i(o(63979), t),
        i(o(10989), t),
        i(o(58209), t),
        i(o(59539), t),
        i(o(88806), t),
        i(o(39888), t),
        i(o(45861), t),
        i(o(67120), t),
        i(o(80078), t),
        i(o(60754), t),
        i(o(54707), t),
        i(o(46359), t),
        i(o(73254), t),
        i(o(80953), t),
        i(o(71559), t),
        i(o(1738), t),
        i(o(42553), t),
        i(o(61812), t),
        i(o(7890), t),
        i(o(17124), t),
        i(o(20170), t),
        i(o(51126), t),
        i(o(36210), t),
        i(o(29358), t),
        i(o(63919), t),
        i(o(54692), t),
        i(o(17341), t),
        i(o(74477), t),
        i(o(78690), t),
        i(o(87894), t),
        i(o(83263), t),
        i(o(97981), t),
        i(o(23448), t),
        i(o(57422), t),
        i(o(82607), t),
        i(o(94705), t),
        i(o(41804), t),
        i(o(80793), t),
        i(o(80553), t),
        i(o(67195), t),
        i(o(86648), t),
        i(o(86038), t),
        i(o(66913), t),
        i(o(82725), t),
        i(o(31072), t),
        i(o(6937), t),
        i(o(45169), t),
        i(o(73572), t),
        i(o(7970), t),
        i(o(47453), t),
        i(o(88522), t);
    }
  }
]);
