(self.webpackChunk_dashlane_amphora = self.webpackChunk_dashlane_amphora || []).push([
  [431],
  {
    54404: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => n, m: () => a });
      var o = r(64839),
        s = r(24982);
      const n = {
        accountInfo: {
          method: "POST",
          path: "account/AccountInfo",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        createUser: {
          method: "POST",
          path: "account/CreateUser",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        createUserWithSso: {
          method: "POST",
          path: "account/CreateUserWithSSO",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        deleteOrResetAccount: {
          method: "POST",
          path: "account/DeleteOrResetAccount",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        forgetUserPii: {
          method: "POST",
          path: "account/ForgetUserPII",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.BACK_OFFICE,
          version: s.W.V1
        },
        getActivity: {
          method: "POST",
          path: "account/GetActivity",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.BACK_OFFICE,
          version: s.W.V1
        },
        getUserTeamDetailsByLogin: {
          method: "POST",
          path: "account/GetUserTeamDetailsByLogin",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        requestAccountCreation: {
          method: "POST",
          path: "account/RequestAccountCreation",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        updateContactInfo: {
          method: "POST",
          path: "account/UpdateContactInfo",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        accountInfo(e) {
          return this.executorFactory.createExecutor(n.accountInfo).executeRequest({ credentials: e });
        }
        createUser(e) {
          return this.executorFactory.createExecutor(n.createUser).executeRequest({ body: e });
        }
        createUserWithSso(e) {
          return this.executorFactory.createExecutor(n.createUserWithSso).executeRequest({ body: e });
        }
        deleteOrResetAccount(e) {
          return this.executorFactory.createExecutor(n.deleteOrResetAccount).executeRequest({ body: e });
        }
        forgetUserPii(e) {
          return this.executorFactory.createExecutor(n.forgetUserPii).executeRequest({ body: e });
        }
        getActivity(e) {
          return this.executorFactory.createExecutor(n.getActivity).executeRequest({ body: e });
        }
        getUserTeamDetailsByLogin(e) {
          return this.executorFactory.createExecutor(n.getUserTeamDetailsByLogin).executeRequest({ body: e });
        }
        requestAccountCreation(e) {
          return this.executorFactory.createExecutor(n.requestAccountCreation).executeRequest({ body: e });
        }
        updateContactInfo(e, t) {
          return this.executorFactory.createExecutor(n.updateContactInfo).executeRequest({ credentials: e, body: t });
        }
      }
    },
    77837: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => a, y: () => n });
      var o = r(64839),
        s = r(24982);
      const n = {
        confirmActivation: {
          method: "POST",
          path: "accountrecovery/ConfirmActivation",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deactivate: {
          method: "POST",
          path: "accountrecovery/Deactivate",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getEncryptedVaultKey: {
          method: "POST",
          path: "accountrecovery/GetEncryptedVaultKey",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getStatus: {
          method: "POST",
          path: "accountrecovery/GetStatus",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        requestActivation: {
          method: "POST",
          path: "accountrecovery/RequestActivation",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        confirmActivation(e, t) {
          return this.executorFactory.createExecutor(n.confirmActivation).executeRequest({ credentials: e, body: t });
        }
        deactivate(e, t) {
          return this.executorFactory.createExecutor(n.deactivate).executeRequest({ credentials: e, body: t });
        }
        getEncryptedVaultKey(e) {
          return this.executorFactory.createExecutor(n.getEncryptedVaultKey).executeRequest({ body: e });
        }
        getStatus(e) {
          return this.executorFactory.createExecutor(n.getStatus).executeRequest({ body: e });
        }
        requestActivation(e, t) {
          return this.executorFactory.createExecutor(n.requestActivation).executeRequest({ credentials: e, body: t });
        }
      }
    },
    33027: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => a, k: () => n });
      var o = r(64839),
        s = r(24982);
      const n = {
        completeDeviceRegistrationWithAuthTicket: {
          method: "POST",
          path: "authentication/CompleteDeviceRegistrationWithAuthTicket",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        completeDeviceRegistrationWithToken: {
          method: "POST",
          path: "authentication/CompleteDeviceRegistrationWithToken",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        completeDeviceRegistrationWithTotp: {
          method: "POST",
          path: "authentication/CompleteDeviceRegistrationWithTOTP",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        completeExtraDeviceRegistrationWithToken: {
          method: "POST",
          path: "authentication/CompleteExtraDeviceRegistrationWithToken",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        completeLoginWithAuthTicket: {
          method: "POST",
          path: "authentication/CompleteLoginWithAuthTicket",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        completeLoginWithTotp: {
          method: "POST",
          path: "authentication/CompleteLoginWithTOTP",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        completeRememberMeOpenSession: {
          method: "POST",
          path: "authentication/CompleteRememberMeOpenSession",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.SESSION,
          version: s.W.V1
        },
        completeRememberMeRegistration: {
          method: "POST",
          path: "authentication/CompleteRememberMeRegistration",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        completeTotpActivation: {
          method: "POST",
          path: "authentication/CompleteTOTPActivation",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        completeWebAuthnAuthenticatorRegistration: {
          method: "POST",
          path: "authentication/CompleteWebAuthnAuthenticatorRegistration",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        createSamlSession: {
          method: "POST",
          path: "authentication/CreateSAMLSession",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        createTokenExtAuth: {
          method: "POST",
          path: "authentication/CreateTokenExtAuth",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deactivateRememberMe: {
          method: "POST",
          path: "authentication/DeactivateRememberMe",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deactivateTotp: {
          method: "POST",
          path: "authentication/DeactivateTOTP",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deactivateU2FDevice: {
          method: "POST",
          path: "authentication/DeactivateU2FDevice",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deactivateWebAuthnAuthenticator: {
          method: "POST",
          path: "authentication/DeactivateWebAuthnAuthenticator",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        destroySamlSession: {
          method: "POST",
          path: "authentication/DestroySAMLSession",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.BACK_OFFICE,
          version: s.W.V1
        },
        get2FaStatus: {
          method: "POST",
          path: "authentication/Get2FAStatus",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        get2FaStatusUnauthenticated: {
          method: "POST",
          path: "authentication/Get2FAStatusUnauthenticated",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getAuthenticationMethodsForDevice: {
          method: "POST",
          path: "authentication/GetAuthenticationMethodsForDevice",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getAuthenticationMethodsForLogin: {
          method: "POST",
          path: "authentication/GetAuthenticationMethodsForLogin",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getAuthenticationMethodsForReset: {
          method: "POST",
          path: "authentication/GetAuthenticationMethodsForReset",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getAvailableWebAuthnAuthenticators: {
          method: "POST",
          path: "authentication/GetAvailableWebAuthnAuthenticators",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.SESSION,
          version: s.W.V1
        },
        getMasterPasswordCipheringKey: {
          method: "POST",
          path: "authentication/GetMasterPasswordCipheringKey",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.SESSION,
          version: s.W.V1
        },
        getRecoveryPhoneNumber: {
          method: "POST",
          path: "authentication/GetRecoveryPhoneNumber",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getTokensList: {
          method: "GET",
          path: "authentication/GetTokens",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getTokens: {
          method: "POST",
          path: "authentication/GetTokens",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getU2FDevices: {
          method: "POST",
          path: "authentication/GetU2FDevices",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getUnauthorizedProfiles: {
          method: "POST",
          path: "authentication/GetUnauthorizedProfiles",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getUserSsoInfo: {
          method: "POST",
          path: "authentication/GetUserSSOInfo",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.TEAM_DEVICE,
          version: s.W.V1
        },
        getWebAuthnAuthenticators: {
          method: "POST",
          path: "authentication/GetWebAuthnAuthenticators",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        initRememberMasterPassword: {
          method: "POST",
          path: "authentication/InitRememberMasterPassword",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        performDashlaneAuthenticatorVerification: {
          method: "POST",
          path: "authentication/PerformDashlaneAuthenticatorVerification",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        performDuoPushVerification: {
          method: "POST",
          path: "authentication/PerformDuoPushVerification",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        performEmailTokenVerification: {
          method: "POST",
          path: "authentication/PerformEmailTokenVerification",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        performExtraDeviceVerification: {
          method: "POST",
          path: "authentication/PerformExtraDeviceVerification",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        performSsoVerification: {
          method: "POST",
          path: "authentication/PerformSsoVerification",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        performTotpVerification: {
          method: "POST",
          path: "authentication/PerformTotpVerification",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        performU2FVerification: {
          method: "POST",
          path: "authentication/PerformU2FVerification",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        renameWebAuthnAuthenticator: {
          method: "POST",
          path: "authentication/RenameWebAuthnAuthenticator",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        requestDeviceRegistration: {
          method: "POST",
          path: "authentication/RequestDeviceRegistration",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        requestEmailTokenVerification: {
          method: "POST",
          path: "authentication/RequestEmailTokenVerification",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        requestExtraDeviceRegistration: {
          method: "POST",
          path: "authentication/RequestExtraDeviceRegistration",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        requestLogin: {
          method: "POST",
          path: "authentication/RequestLogin",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        requestOtpRecoveryCodesByPhone: {
          method: "POST",
          path: "authentication/RequestOtpRecoveryCodesByPhone",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        requestPushNotificationToken: {
          method: "POST",
          path: "authentication/RequestPushNotificationToken",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        requestTotpActivation: {
          method: "POST",
          path: "authentication/RequestTOTPActivation",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        requestWebauthnOpenSession: {
          method: "POST",
          path: "authentication/RequestWebauthnOpenSession",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.SESSION,
          version: s.W.V1
        },
        requestWebauthnRegistration: {
          method: "POST",
          path: "authentication/RequestWebauthnRegistration",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        resetBlockedToken: {
          method: "POST",
          path: "authentication/ResetBlockedToken",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        updateRecoveryPhoneNumber: {
          method: "POST",
          path: "authentication/UpdateRecoveryPhoneNumber",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        completeDeviceRegistrationWithAuthTicket(e) {
          return this.executorFactory.createExecutor(n.completeDeviceRegistrationWithAuthTicket).executeRequest({ body: e });
        }
        completeDeviceRegistrationWithToken(e) {
          return this.executorFactory.createExecutor(n.completeDeviceRegistrationWithToken).executeRequest({ body: e });
        }
        completeDeviceRegistrationWithTotp(e) {
          return this.executorFactory.createExecutor(n.completeDeviceRegistrationWithTotp).executeRequest({ body: e });
        }
        completeExtraDeviceRegistrationWithToken(e) {
          return this.executorFactory.createExecutor(n.completeExtraDeviceRegistrationWithToken).executeRequest({ body: e });
        }
        completeLoginWithAuthTicket(e) {
          return this.executorFactory.createExecutor(n.completeLoginWithAuthTicket).executeRequest({ body: e });
        }
        completeLoginWithTotp(e) {
          return this.executorFactory.createExecutor(n.completeLoginWithTotp).executeRequest({ body: e });
        }
        completeRememberMeOpenSession(e, t) {
          return this.executorFactory.createExecutor(n.completeRememberMeOpenSession).executeRequest({ credentials: e, body: t });
        }
        completeRememberMeRegistration(e, t) {
          return this.executorFactory.createExecutor(n.completeRememberMeRegistration).executeRequest({ credentials: e, body: t });
        }
        completeTotpActivation(e, t) {
          return this.executorFactory.createExecutor(n.completeTotpActivation).executeRequest({ credentials: e, body: t });
        }
        completeWebAuthnAuthenticatorRegistration(e, t) {
          return this.executorFactory
            .createExecutor(n.completeWebAuthnAuthenticatorRegistration)
            .executeRequest({ credentials: e, body: t });
        }
        createSamlSession(e) {
          return this.executorFactory.createExecutor(n.createSamlSession).executeRequest({ body: e });
        }
        createTokenExtAuth(e) {
          return this.executorFactory.createExecutor(n.createTokenExtAuth).executeRequest({ credentials: e });
        }
        deactivateRememberMe(e, t) {
          return this.executorFactory.createExecutor(n.deactivateRememberMe).executeRequest({ credentials: e, body: t });
        }
        deactivateTotp(e, t) {
          return this.executorFactory.createExecutor(n.deactivateTotp).executeRequest({ credentials: e, body: t });
        }
        deactivateU2FDevice(e, t) {
          return this.executorFactory.createExecutor(n.deactivateU2FDevice).executeRequest({ credentials: e, body: t });
        }
        deactivateWebAuthnAuthenticator(e, t) {
          return this.executorFactory.createExecutor(n.deactivateWebAuthnAuthenticator).executeRequest({ credentials: e, body: t });
        }
        destroySamlSession() {
          return this.executorFactory.createExecutor(n.destroySamlSession).executeRequest({});
        }
        get2FaStatus(e) {
          return this.executorFactory.createExecutor(n.get2FaStatus).executeRequest({ credentials: e });
        }
        get2FaStatusUnauthenticated(e) {
          return this.executorFactory.createExecutor(n.get2FaStatusUnauthenticated).executeRequest({ body: e });
        }
        getAuthenticationMethodsForDevice(e) {
          return this.executorFactory.createExecutor(n.getAuthenticationMethodsForDevice).executeRequest({ body: e });
        }
        getAuthenticationMethodsForLogin(e) {
          return this.executorFactory.createExecutor(n.getAuthenticationMethodsForLogin).executeRequest({ body: e });
        }
        getAuthenticationMethodsForReset(e) {
          return this.executorFactory.createExecutor(n.getAuthenticationMethodsForReset).executeRequest({ body: e });
        }
        getAvailableWebAuthnAuthenticators(e, t) {
          return this.executorFactory.createExecutor(n.getAvailableWebAuthnAuthenticators).executeRequest({ credentials: e, body: t });
        }
        getMasterPasswordCipheringKey(e) {
          return this.executorFactory.createExecutor(n.getMasterPasswordCipheringKey).executeRequest({ credentials: e });
        }
        getRecoveryPhoneNumber(e) {
          return this.executorFactory.createExecutor(n.getRecoveryPhoneNumber).executeRequest({ credentials: e });
        }
        getTokensList() {
          return this.executorFactory.createExecutor(n.getTokensList).executeRequest({});
        }
        getTokens() {
          return this.executorFactory.createExecutor(n.getTokens).executeRequest({});
        }
        getU2FDevices(e) {
          return this.executorFactory.createExecutor(n.getU2FDevices).executeRequest({ credentials: e });
        }
        getUnauthorizedProfiles(e) {
          return this.executorFactory.createExecutor(n.getUnauthorizedProfiles).executeRequest({ body: e });
        }
        getUserSsoInfo(e, t) {
          return this.executorFactory.createExecutor(n.getUserSsoInfo).executeRequest({ credentials: e, body: t });
        }
        getWebAuthnAuthenticators(e) {
          return this.executorFactory.createExecutor(n.getWebAuthnAuthenticators).executeRequest({ credentials: e });
        }
        initRememberMasterPassword(e, t) {
          return this.executorFactory.createExecutor(n.initRememberMasterPassword).executeRequest({ credentials: e, body: t });
        }
        performDashlaneAuthenticatorVerification(e) {
          return this.executorFactory.createExecutor(n.performDashlaneAuthenticatorVerification).executeRequest({ body: e });
        }
        performDuoPushVerification(e) {
          return this.executorFactory.createExecutor(n.performDuoPushVerification).executeRequest({ body: e });
        }
        performEmailTokenVerification(e) {
          return this.executorFactory.createExecutor(n.performEmailTokenVerification).executeRequest({ body: e });
        }
        performExtraDeviceVerification(e) {
          return this.executorFactory.createExecutor(n.performExtraDeviceVerification).executeRequest({ body: e });
        }
        performSsoVerification(e) {
          return this.executorFactory.createExecutor(n.performSsoVerification).executeRequest({ body: e });
        }
        performTotpVerification(e) {
          return this.executorFactory.createExecutor(n.performTotpVerification).executeRequest({ body: e });
        }
        performU2FVerification(e) {
          return this.executorFactory.createExecutor(n.performU2FVerification).executeRequest({ body: e });
        }
        renameWebAuthnAuthenticator(e, t) {
          return this.executorFactory.createExecutor(n.renameWebAuthnAuthenticator).executeRequest({ credentials: e, body: t });
        }
        requestDeviceRegistration(e) {
          return this.executorFactory.createExecutor(n.requestDeviceRegistration).executeRequest({ body: e });
        }
        requestEmailTokenVerification(e) {
          return this.executorFactory.createExecutor(n.requestEmailTokenVerification).executeRequest({ body: e });
        }
        requestExtraDeviceRegistration(e, t) {
          return this.executorFactory.createExecutor(n.requestExtraDeviceRegistration).executeRequest({ credentials: e, body: t });
        }
        requestLogin(e) {
          return this.executorFactory.createExecutor(n.requestLogin).executeRequest({ body: e });
        }
        requestOtpRecoveryCodesByPhone(e) {
          return this.executorFactory.createExecutor(n.requestOtpRecoveryCodesByPhone).executeRequest({ body: e });
        }
        requestPushNotificationToken(e) {
          return this.executorFactory.createExecutor(n.requestPushNotificationToken).executeRequest({ credentials: e });
        }
        requestTotpActivation(e, t) {
          return this.executorFactory.createExecutor(n.requestTotpActivation).executeRequest({ credentials: e, body: t });
        }
        requestWebauthnOpenSession(e) {
          return this.executorFactory.createExecutor(n.requestWebauthnOpenSession).executeRequest({ credentials: e });
        }
        requestWebauthnRegistration(e) {
          return this.executorFactory.createExecutor(n.requestWebauthnRegistration).executeRequest({ credentials: e });
        }
        resetBlockedToken(e) {
          return this.executorFactory.createExecutor(n.resetBlockedToken).executeRequest({ body: e });
        }
        updateRecoveryPhoneNumber(e, t) {
          return this.executorFactory.createExecutor(n.updateRecoveryPhoneNumber).executeRequest({ credentials: e, body: t });
        }
      }
    },
    9536: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => a, T: () => n });
      var o = r(64839),
        s = r(24982);
      const n = {
        confirmRegistration: {
          method: "POST",
          path: "darkwebmonitoring/ConfirmRegistration",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        deregisterEmail: {
          method: "POST",
          path: "darkwebmonitoring/DeregisterEmail",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        listLeaks: {
          method: "POST",
          path: "darkwebmonitoring/ListLeaks",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        listRegistrations: {
          method: "POST",
          path: "darkwebmonitoring/ListRegistrations",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        registerEmail: {
          method: "POST",
          path: "darkwebmonitoring/RegisterEmail",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        unsubscribe: {
          method: "POST",
          path: "darkwebmonitoring/Unsubscribe",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        confirmRegistration(e) {
          return this.executorFactory.createExecutor(n.confirmRegistration).executeRequest({ body: e });
        }
        deregisterEmail(e, t) {
          return this.executorFactory.createExecutor(n.deregisterEmail).executeRequest({ credentials: e, body: t });
        }
        listLeaks(e, t) {
          return this.executorFactory.createExecutor(n.listLeaks).executeRequest({ credentials: e, body: t });
        }
        listRegistrations(e) {
          return this.executorFactory.createExecutor(n.listRegistrations).executeRequest({ credentials: e });
        }
        registerEmail(e, t) {
          return this.executorFactory.createExecutor(n.registerEmail).executeRequest({ credentials: e, body: t });
        }
        unsubscribe(e, t) {
          return this.executorFactory.createExecutor(n.unsubscribe).executeRequest({ credentials: e, body: t });
        }
      }
    },
    69865: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a, Z: () => n });
      var o = r(64839),
        s = r(24982);
      const n = {
        getAndEvaluateForUser: {
          method: "POST",
          path: "features/GetAndEvaluateForUser",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        listAvailableFeatureFlips: {
          method: "POST",
          path: "features/ListAvailableFeatureFlips",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        listAvailableLabs: {
          method: "POST",
          path: "features/ListAvailableLabs",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        getAndEvaluateForUser(e, t) {
          return this.executorFactory.createExecutor(n.getAndEvaluateForUser).executeRequest({ credentials: e, body: t });
        }
        listAvailableFeatureFlips() {
          return this.executorFactory.createExecutor(n.listAvailableFeatureFlips).executeRequest({});
        }
        listAvailableLabs(e) {
          return this.executorFactory.createExecutor(n.listAvailableLabs).executeRequest({ body: e });
        }
      }
    },
    62361: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => a, _: () => n });
      var o = r(64839),
        s = r(24982);
      const n = {
        getFileMeta: {
          method: "POST",
          path: "file/GetFileMeta",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getFileMetaV2: {
          method: "POST",
          path: "file/GetFileMetaV2",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        updatedFile: {
          method: "POST",
          path: "file/UpdatedFile",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        getFileMeta(e, t) {
          return this.executorFactory.createExecutor(n.getFileMeta).executeRequest({ credentials: e, body: t });
        }
        getFileMetaV2(e, t) {
          return this.executorFactory.createExecutor(n.getFileMetaV2).executeRequest({ credentials: e, body: t });
        }
        updatedFile(e) {
          return this.executorFactory.createExecutor(n.updatedFile).executeRequest({ body: e });
        }
      }
    },
    4119: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => a, p: () => n });
      var o = r(64839),
        s = r(24982);
      const n = {
        getSharingLink: {
          method: "POST",
          path: "invitation/GetSharingLink",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        invite: {
          method: "POST",
          path: "invitation/Invite",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        getSharingLink(e) {
          return this.executorFactory.createExecutor(n.getSharingLink).executeRequest({ body: e });
        }
        invite(e) {
          return this.executorFactory.createExecutor(n.invite).executeRequest({ body: e });
        }
      }
    },
    59091: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => a, l: () => n });
      var o = r(64839),
        s = r(24982);
      const n = {
        accessibleMobileOffers: {
          method: "POST",
          path: "payments/AccessibleMobileOffers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getAccessibleStoreOffers: {
          method: "POST",
          path: "payments/GetAccessibleStoreOffers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getAccessibleWebOffers: {
          method: "POST",
          path: "payments/GetAccessibleWebOffers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getCustomerInvoice: {
          method: "POST",
          path: "payments/GetCustomerInvoice",
          requestAcceptHeader: "application/pdf",
          responseType: "arraybuffer",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getDefaultWebOffers: {
          method: "POST",
          path: "payments/GetDefaultWebOffers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getExpectedTaxInformation: {
          method: "POST",
          path: "payments/GetExpectedTaxInformation",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getProcessOutKeys: {
          method: "POST",
          path: "payments/GetProcessOutKeys",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.NONE,
          version: s.W.V1
        },
        grantFullRefundAndCancelSubscription: {
          method: "POST",
          path: "payments/GrantFullRefundAndCancelSubscription",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        listInvoices: {
          method: "POST",
          path: "payments/ListInvoices",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        accessibleMobileOffers(e, t) {
          return this.executorFactory.createExecutor(n.accessibleMobileOffers).executeRequest({ credentials: e, body: t });
        }
        getAccessibleStoreOffers(e, t) {
          return this.executorFactory.createExecutor(n.getAccessibleStoreOffers).executeRequest({ credentials: e, body: t });
        }
        getAccessibleWebOffers(e) {
          return this.executorFactory.createExecutor(n.getAccessibleWebOffers).executeRequest({ body: e });
        }
        getCustomerInvoice(e, t) {
          return this.executorFactory.createExecutor(n.getCustomerInvoice).executeRequest({ credentials: e, body: t });
        }
        getDefaultWebOffers(e) {
          return this.executorFactory.createExecutor(n.getDefaultWebOffers).executeRequest({ body: e });
        }
        getExpectedTaxInformation(e) {
          return this.executorFactory.createExecutor(n.getExpectedTaxInformation).executeRequest({ body: e });
        }
        getProcessOutKeys() {
          return this.executorFactory.createExecutor(n.getProcessOutKeys).executeRequest({});
        }
        grantFullRefundAndCancelSubscription(e, t) {
          return this.executorFactory.createExecutor(n.grantFullRefundAndCancelSubscription).executeRequest({ credentials: e, body: t });
        }
        listInvoices(e) {
          return this.executorFactory.createExecutor(n.listInvoices).executeRequest({ credentials: e });
        }
      }
    },
    52839: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => n, J: () => a });
      var o = r(64839),
        s = r(24982);
      const n = {
        getHashes: {
          method: "POST",
          path: "pwleak/GetHashes",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getLastUpdate: {
          method: "POST",
          path: "pwleak/GetLastUpdate",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        getHashes(e) {
          return this.executorFactory.createExecutor(n.getHashes).executeRequest({ body: e });
        }
        getLastUpdate() {
          return this.executorFactory.createExecutor(n.getLastUpdate).executeRequest({});
        }
      }
    },
    7181: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => a, t: () => n });
      var o = r(64839),
        s = r(24982);
      const n = {
        completeKeyExchange: {
          method: "POST",
          path: "secretTransfer/CompleteKeyExchange",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        completeTransfer: {
          method: "POST",
          path: "secretTransfer/CompleteTransfer",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getKeyExchangeTransferInfo: {
          method: "POST",
          path: "secretTransfer/GetKeyExchangeTransferInfo",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        requestTransfer: {
          method: "POST",
          path: "secretTransfer/RequestTransfer",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        startReceiverKeyExchange: {
          method: "POST",
          path: "secretTransfer/StartReceiverKeyExchange",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        startSenderKeyExchange: {
          method: "POST",
          path: "secretTransfer/StartSenderKeyExchange",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        startTransfer: {
          method: "POST",
          path: "secretTransfer/StartTransfer",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        completeKeyExchange(e) {
          return this.executorFactory.createExecutor(n.completeKeyExchange).executeRequest({ body: e });
        }
        completeTransfer(e, t) {
          return this.executorFactory.createExecutor(n.completeTransfer).executeRequest({ credentials: e, body: t });
        }
        getKeyExchangeTransferInfo(e) {
          return this.executorFactory.createExecutor(n.getKeyExchangeTransferInfo).executeRequest({ credentials: e });
        }
        requestTransfer(e) {
          return this.executorFactory.createExecutor(n.requestTransfer).executeRequest({ body: e });
        }
        startReceiverKeyExchange(e) {
          return this.executorFactory.createExecutor(n.startReceiverKeyExchange).executeRequest({ body: e });
        }
        startSenderKeyExchange(e, t) {
          return this.executorFactory.createExecutor(n.startSenderKeyExchange).executeRequest({ credentials: e, body: t });
        }
        startTransfer(e) {
          return this.executorFactory.createExecutor(n.startTransfer).executeRequest({ body: e });
        }
      }
    },
    55127: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => n, b: () => a });
      var o = r(64839),
        s = r(24982);
      const n = {
        acceptCollection: {
          method: "POST",
          path: "sharing-userdevice/AcceptCollection",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        acceptItemGroup: {
          method: "POST",
          path: "sharing-userdevice/AcceptItemGroup",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        acceptUserGroup: {
          method: "POST",
          path: "sharing-userdevice/AcceptUserGroup",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        addItemGroupsToCollection: {
          method: "POST",
          path: "sharing-userdevice/AddItemGroupsToCollection",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        addItems: {
          method: "POST",
          path: "sharing-userdevice/AddItems",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        createCollection: {
          method: "POST",
          path: "sharing-userdevice/CreateCollection",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        createItemGroup: {
          method: "POST",
          path: "sharing-userdevice/CreateItemGroup",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        createMultipleItemGroups: {
          method: "POST",
          path: "sharing-userdevice/CreateMultipleItemGroups",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        createTeamAdminsUserGroup: {
          method: "POST",
          path: "sharing-userdevice/CreateTeamAdminsUserGroup",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        createUserGroup: {
          method: "POST",
          path: "sharing-userdevice/CreateUserGroup",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        createUserGroupsItemGroup: {
          method: "POST",
          path: "sharing-userdevice/CreateUserGroupsItemGroup",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deleteCollection: {
          method: "POST",
          path: "sharing-userdevice/DeleteCollection",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deleteItemGroup: {
          method: "POST",
          path: "sharing-userdevice/DeleteItemGroup",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deleteUserGroup: {
          method: "POST",
          path: "sharing-userdevice/DeleteUserGroup",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        postSharingUserdevice: {
          method: "POST",
          path: "sharing-userdevice/Get",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getTeamLogins: {
          method: "POST",
          path: "sharing-userdevice/GetTeamLogins",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getUsersPublicKey: {
          method: "POST",
          path: "sharing-userdevice/GetUsersPublicKey",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        inviteCollectionMembers: {
          method: "POST",
          path: "sharing-userdevice/InviteCollectionMembers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        inviteItemGroupMembers: {
          method: "POST",
          path: "sharing-userdevice/InviteItemGroupMembers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        inviteUserGroupUsers: {
          method: "POST",
          path: "sharing-userdevice/InviteUserGroupUsers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        refuseCollection: {
          method: "POST",
          path: "sharing-userdevice/RefuseCollection",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        refuseItemGroup: {
          method: "POST",
          path: "sharing-userdevice/RefuseItemGroup",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        refuseUserGroup: {
          method: "POST",
          path: "sharing-userdevice/RefuseUserGroup",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        removeItemGroupsFromCollection: {
          method: "POST",
          path: "sharing-userdevice/RemoveItemGroupsFromCollection",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        removeItems: {
          method: "POST",
          path: "sharing-userdevice/RemoveItems",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        renameCollection: {
          method: "POST",
          path: "sharing-userdevice/RenameCollection",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        renameUserGroup: {
          method: "POST",
          path: "sharing-userdevice/RenameUserGroup",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        resendItemGroupInvites: {
          method: "POST",
          path: "sharing-userdevice/ResendItemGroupInvites",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        revokeCollectionMembers: {
          method: "POST",
          path: "sharing-userdevice/RevokeCollectionMembers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        revokeItemGroupMembers: {
          method: "POST",
          path: "sharing-userdevice/RevokeItemGroupMembers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        revokeUserGroupUsers: {
          method: "POST",
          path: "sharing-userdevice/RevokeUserGroupUsers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        updateCollectionMembers: {
          method: "POST",
          path: "sharing-userdevice/UpdateCollectionMembers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        updateItem: {
          method: "POST",
          path: "sharing-userdevice/UpdateItem",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        updateItemGroupMembers: {
          method: "POST",
          path: "sharing-userdevice/UpdateItemGroupMembers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        updateUserGroupUsers: {
          method: "POST",
          path: "sharing-userdevice/UpdateUserGroupUsers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        acceptCollection(e, t) {
          return this.executorFactory.createExecutor(n.acceptCollection).executeRequest({ credentials: e, body: t });
        }
        acceptItemGroup(e, t) {
          return this.executorFactory.createExecutor(n.acceptItemGroup).executeRequest({ credentials: e, body: t });
        }
        acceptUserGroup(e, t) {
          return this.executorFactory.createExecutor(n.acceptUserGroup).executeRequest({ credentials: e, body: t });
        }
        addItemGroupsToCollection(e, t) {
          return this.executorFactory.createExecutor(n.addItemGroupsToCollection).executeRequest({ credentials: e, body: t });
        }
        addItems(e, t) {
          return this.executorFactory.createExecutor(n.addItems).executeRequest({ credentials: e, body: t });
        }
        createCollection(e, t) {
          return this.executorFactory.createExecutor(n.createCollection).executeRequest({ credentials: e, body: t });
        }
        createItemGroup(e, t) {
          return this.executorFactory.createExecutor(n.createItemGroup).executeRequest({ credentials: e, body: t });
        }
        createMultipleItemGroups(e, t) {
          return this.executorFactory.createExecutor(n.createMultipleItemGroups).executeRequest({ credentials: e, body: t });
        }
        createTeamAdminsUserGroup(e, t) {
          return this.executorFactory.createExecutor(n.createTeamAdminsUserGroup).executeRequest({ credentials: e, body: t });
        }
        createUserGroup(e, t) {
          return this.executorFactory.createExecutor(n.createUserGroup).executeRequest({ credentials: e, body: t });
        }
        createUserGroupsItemGroup(e, t) {
          return this.executorFactory.createExecutor(n.createUserGroupsItemGroup).executeRequest({ credentials: e, body: t });
        }
        deleteCollection(e, t) {
          return this.executorFactory.createExecutor(n.deleteCollection).executeRequest({ credentials: e, body: t });
        }
        deleteItemGroup(e, t) {
          return this.executorFactory.createExecutor(n.deleteItemGroup).executeRequest({ credentials: e, body: t });
        }
        deleteUserGroup(e, t) {
          return this.executorFactory.createExecutor(n.deleteUserGroup).executeRequest({ credentials: e, body: t });
        }
        postSharingUserdevice(e, t) {
          return this.executorFactory.createExecutor(n.postSharingUserdevice).executeRequest({ credentials: e, body: t });
        }
        getTeamLogins(e) {
          return this.executorFactory.createExecutor(n.getTeamLogins).executeRequest({ credentials: e });
        }
        getUsersPublicKey(e, t) {
          return this.executorFactory.createExecutor(n.getUsersPublicKey).executeRequest({ credentials: e, body: t });
        }
        inviteCollectionMembers(e, t) {
          return this.executorFactory.createExecutor(n.inviteCollectionMembers).executeRequest({ credentials: e, body: t });
        }
        inviteItemGroupMembers(e, t) {
          return this.executorFactory.createExecutor(n.inviteItemGroupMembers).executeRequest({ credentials: e, body: t });
        }
        inviteUserGroupUsers(e, t) {
          return this.executorFactory.createExecutor(n.inviteUserGroupUsers).executeRequest({ credentials: e, body: t });
        }
        refuseCollection(e, t) {
          return this.executorFactory.createExecutor(n.refuseCollection).executeRequest({ credentials: e, body: t });
        }
        refuseItemGroup(e, t) {
          return this.executorFactory.createExecutor(n.refuseItemGroup).executeRequest({ credentials: e, body: t });
        }
        refuseUserGroup(e, t) {
          return this.executorFactory.createExecutor(n.refuseUserGroup).executeRequest({ credentials: e, body: t });
        }
        removeItemGroupsFromCollection(e, t) {
          return this.executorFactory.createExecutor(n.removeItemGroupsFromCollection).executeRequest({ credentials: e, body: t });
        }
        removeItems(e, t) {
          return this.executorFactory.createExecutor(n.removeItems).executeRequest({ credentials: e, body: t });
        }
        renameCollection(e, t) {
          return this.executorFactory.createExecutor(n.renameCollection).executeRequest({ credentials: e, body: t });
        }
        renameUserGroup(e, t) {
          return this.executorFactory.createExecutor(n.renameUserGroup).executeRequest({ credentials: e, body: t });
        }
        resendItemGroupInvites(e, t) {
          return this.executorFactory.createExecutor(n.resendItemGroupInvites).executeRequest({ credentials: e, body: t });
        }
        revokeCollectionMembers(e, t) {
          return this.executorFactory.createExecutor(n.revokeCollectionMembers).executeRequest({ credentials: e, body: t });
        }
        revokeItemGroupMembers(e, t) {
          return this.executorFactory.createExecutor(n.revokeItemGroupMembers).executeRequest({ credentials: e, body: t });
        }
        revokeUserGroupUsers(e, t) {
          return this.executorFactory.createExecutor(n.revokeUserGroupUsers).executeRequest({ credentials: e, body: t });
        }
        updateCollectionMembers(e, t) {
          return this.executorFactory.createExecutor(n.updateCollectionMembers).executeRequest({ credentials: e, body: t });
        }
        updateItem(e, t) {
          return this.executorFactory.createExecutor(n.updateItem).executeRequest({ credentials: e, body: t });
        }
        updateItemGroupMembers(e, t) {
          return this.executorFactory.createExecutor(n.updateItemGroupMembers).executeRequest({ credentials: e, body: t });
        }
        updateUserGroupUsers(e, t) {
          return this.executorFactory.createExecutor(n.updateUserGroupUsers).executeRequest({ credentials: e, body: t });
        }
      }
    },
    91406: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => n, p: () => a });
      var o = r(64839),
        s = r(24982);
      const n = {
        accessibleTeamOffers: {
          method: "POST",
          path: "teams/AccessibleTeamOffers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        activateSsoForUsers: {
          method: "POST",
          path: "teams/ActivateSsoForUsers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        addGroupManager: {
          method: "POST",
          path: "teams/AddGroupManager",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        addSeats: {
          method: "POST",
          path: "teams/AddSeats",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        addTeamCaptain: {
          method: "POST",
          path: "teams/AddTeamCaptain",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        changeTeamKeyTeamSignUpPage: {
          method: "POST",
          path: "teams/ChangeTeamKeyTeamSignUpPage",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        changeTierMidCycle: {
          method: "POST",
          path: "teams/ChangeTierMidCycle",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        completeDomainsRegistration: {
          method: "POST",
          path: "teams/CompleteDomainsRegistration",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        computePlanPricing: {
          method: "POST",
          path: "teams/ComputePlanPricing",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        countDomainUsersNotInTeam: {
          method: "POST",
          path: "teams/CountDomainUsersNotInTeam",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        createTeamDeviceAccount: {
          method: "POST",
          path: "teams/CreateTeamDeviceAccount",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        createTeamSignUpPage: {
          method: "POST",
          path: "teams/CreateTeamSignUpPage",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        createZendeskCancellationTicket: {
          method: "POST",
          path: "teams/CreateZendeskCancellationTicket",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deactivateDomain: {
          method: "POST",
          path: "teams/DeactivateDomain",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deactivateSsoForUsers: {
          method: "POST",
          path: "teams/DeactivateSsoForUsers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deactivateTeamDevice: {
          method: "POST",
          path: "teams/DeactivateTeamDevice",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deleteTeamVat: {
          method: "POST",
          path: "teams/DeleteTeamVAT",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        editSettings: {
          method: "POST",
          path: "teams/EditSettings",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        extendFreeTrial: {
          method: "POST",
          path: "teams/ExtendFreeTrial",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getAllMemberDeviceInformation: {
          method: "POST",
          path: "teams/GetAllMemberDeviceInformation",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getAuditLogQueryResults: {
          method: "POST",
          path: "teams/GetAuditLogQueryResults",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getAuditLogs: {
          method: "POST",
          path: "teams/GetAuditLogs",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getDarkWebInsightsReportDetails: {
          method: "POST",
          path: "teams/GetDarkWebInsightsReportDetails",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getDarkWebInsightsSummary: {
          method: "POST",
          path: "teams/GetDarkWebInsightsSummary",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getDomainUsersNotInTeam: {
          method: "POST",
          path: "teams/GetDomainUsersNotInTeam",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getExpectedTaxInformation: {
          method: "POST",
          path: "teams/GetExpectedTaxInformation",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getMidCycleTierUpgradePrice: {
          method: "POST",
          path: "teams/GetMidCycleTierUpgradePrice",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getRecoveryCodesAsTeamCaptain: {
          method: "POST",
          path: "teams/GetRecoveryCodesAsTeamCaptain",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getTeamDevice: {
          method: "POST",
          path: "teams/GetTeamDevice",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getTeamDeviceEncryptedConfiguration: {
          method: "POST",
          path: "teams/GetTeamDeviceEncryptedConfiguration",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getTeamLastUpdateTs: {
          method: "POST",
          path: "teams/GetTeamLastUpdateTs",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getTeamMembers: {
          method: "POST",
          path: "teams/GetTeamMembers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getTeamOffers: {
          method: "POST",
          path: "teams/GetTeamOffers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getTeamReceipts: {
          method: "POST",
          path: "teams/GetTeamReceipts",
          requestAcceptHeader: "application/pdf",
          responseType: "arraybuffer",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getTeamSignUpPage: {
          method: "POST",
          path: "teams/GetTeamSignUpPage",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getTeamSignUpPageForAdmin: {
          method: "POST",
          path: "teams/GetTeamSignUpPageForAdmin",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getTeamVat: {
          method: "POST",
          path: "teams/GetTeamVAT",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getUserPermissions: {
          method: "POST",
          path: "teams/GetUserPermissions",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getZendeskCancellationTicket: {
          method: "POST",
          path: "teams/GetZendeskCancellationTicket",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        invoiceTeamCreate: {
          method: "POST",
          path: "teams/InvoiceTeamCreate",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        invoiceTeamUpgrade: {
          method: "POST",
          path: "teams/InvoiceTeamUpgrade",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        lastAdSyncDate: {
          method: "POST",
          path: "teams/LastADSyncDate",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        listDomains: {
          method: "POST",
          path: "teams/ListDomains",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        listTeamDevices: {
          method: "POST",
          path: "teams/ListTeamDevices",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        proposeMembers: {
          method: "POST",
          path: "teams/ProposeMembers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        registerFreeTrial: {
          method: "POST",
          path: "teams/RegisterFreeTrial",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        registerFreeTrialOptionalFields: {
          method: "POST",
          path: "teams/RegisterFreeTrialOptionalFields",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        registerTeamDevice: {
          method: "POST",
          path: "teams/RegisterTeamDevice",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        removeGroupManager: {
          method: "POST",
          path: "teams/RemoveGroupManager",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        report: {
          method: "POST",
          path: "teams/Report",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        reportTeamDeviceError: {
          method: "POST",
          path: "teams/ReportTeamDeviceError",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.TEAM_DEVICE,
          version: s.W.V1
        },
        requestDomainRegistration: {
          method: "POST",
          path: "teams/RequestDomainRegistration",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        requestTeamInviteToken: {
          method: "POST",
          path: "teams/RequestTeamInviteToken",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        startAuditLogsQuery: {
          method: "POST",
          path: "teams/StartAuditLogsQuery",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        storeActivityLogs: {
          method: "POST",
          path: "teams/StoreActivityLogs",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        storeAuditLogs: {
          method: "POST",
          path: "teams/StoreAuditLogs",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        teamStatus: {
          method: "POST",
          path: "teams/TeamStatus",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        toggleTeamSignUpPage: {
          method: "POST",
          path: "teams/ToggleTeamSignUpPage",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        updateTeamDeviceEncryptedConfiguration: {
          method: "POST",
          path: "teams/UpdateTeamDeviceEncryptedConfiguration",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        upsertTeamVat: {
          method: "POST",
          path: "teams/UpsertTeamVAT",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        accessibleTeamOffers(e) {
          return this.executorFactory.createExecutor(n.accessibleTeamOffers).executeRequest({ body: e });
        }
        activateSsoForUsers(e, t) {
          return this.executorFactory.createExecutor(n.activateSsoForUsers).executeRequest({ credentials: e, body: t });
        }
        addGroupManager(e, t) {
          return this.executorFactory.createExecutor(n.addGroupManager).executeRequest({ credentials: e, body: t });
        }
        addSeats(e, t) {
          return this.executorFactory.createExecutor(n.addSeats).executeRequest({ credentials: e, body: t });
        }
        addTeamCaptain(e, t) {
          return this.executorFactory.createExecutor(n.addTeamCaptain).executeRequest({ credentials: e, body: t });
        }
        changeTeamKeyTeamSignUpPage(e) {
          return this.executorFactory.createExecutor(n.changeTeamKeyTeamSignUpPage).executeRequest({ credentials: e });
        }
        changeTierMidCycle(e, t) {
          return this.executorFactory.createExecutor(n.changeTierMidCycle).executeRequest({ credentials: e, body: t });
        }
        completeDomainsRegistration(e) {
          return this.executorFactory.createExecutor(n.completeDomainsRegistration).executeRequest({ credentials: e });
        }
        computePlanPricing(e, t) {
          return this.executorFactory.createExecutor(n.computePlanPricing).executeRequest({ credentials: e, body: t });
        }
        countDomainUsersNotInTeam(e) {
          return this.executorFactory.createExecutor(n.countDomainUsersNotInTeam).executeRequest({ credentials: e });
        }
        createTeamDeviceAccount(e, t) {
          return this.executorFactory.createExecutor(n.createTeamDeviceAccount).executeRequest({ credentials: e, body: t });
        }
        createTeamSignUpPage(e, t) {
          return this.executorFactory.createExecutor(n.createTeamSignUpPage).executeRequest({ credentials: e, body: t });
        }
        createZendeskCancellationTicket(e, t) {
          return this.executorFactory.createExecutor(n.createZendeskCancellationTicket).executeRequest({ credentials: e, body: t });
        }
        deactivateDomain(e, t) {
          return this.executorFactory.createExecutor(n.deactivateDomain).executeRequest({ credentials: e, body: t });
        }
        deactivateSsoForUsers(e, t) {
          return this.executorFactory.createExecutor(n.deactivateSsoForUsers).executeRequest({ credentials: e, body: t });
        }
        deactivateTeamDevice(e, t) {
          return this.executorFactory.createExecutor(n.deactivateTeamDevice).executeRequest({ credentials: e, body: t });
        }
        deleteTeamVat(e) {
          return this.executorFactory.createExecutor(n.deleteTeamVat).executeRequest({ credentials: e });
        }
        editSettings(e, t) {
          return this.executorFactory.createExecutor(n.editSettings).executeRequest({ credentials: e, body: t });
        }
        extendFreeTrial(e) {
          return this.executorFactory.createExecutor(n.extendFreeTrial).executeRequest({ credentials: e });
        }
        getAllMemberDeviceInformation(e) {
          return this.executorFactory.createExecutor(n.getAllMemberDeviceInformation).executeRequest({ credentials: e });
        }
        getAuditLogQueryResults(e, t) {
          return this.executorFactory.createExecutor(n.getAuditLogQueryResults).executeRequest({ credentials: e, body: t });
        }
        getAuditLogs(e, t) {
          return this.executorFactory.createExecutor(n.getAuditLogs).executeRequest({ credentials: e, body: t });
        }
        getDarkWebInsightsReportDetails(e, t) {
          return this.executorFactory.createExecutor(n.getDarkWebInsightsReportDetails).executeRequest({ credentials: e, body: t });
        }
        getDarkWebInsightsSummary(e, t) {
          return this.executorFactory.createExecutor(n.getDarkWebInsightsSummary).executeRequest({ credentials: e, body: t });
        }
        getDomainUsersNotInTeam(e) {
          return this.executorFactory.createExecutor(n.getDomainUsersNotInTeam).executeRequest({ credentials: e });
        }
        getExpectedTaxInformation(e, t) {
          return this.executorFactory.createExecutor(n.getExpectedTaxInformation).executeRequest({ credentials: e, body: t });
        }
        getMidCycleTierUpgradePrice(e, t) {
          return this.executorFactory.createExecutor(n.getMidCycleTierUpgradePrice).executeRequest({ credentials: e, body: t });
        }
        getRecoveryCodesAsTeamCaptain(e, t) {
          return this.executorFactory.createExecutor(n.getRecoveryCodesAsTeamCaptain).executeRequest({ credentials: e, body: t });
        }
        getTeamDevice(e, t) {
          return this.executorFactory.createExecutor(n.getTeamDevice).executeRequest({ credentials: e, body: t });
        }
        getTeamDeviceEncryptedConfiguration(e, t) {
          return this.executorFactory.createExecutor(n.getTeamDeviceEncryptedConfiguration).executeRequest({ credentials: e, body: t });
        }
        getTeamLastUpdateTs(e, t) {
          return this.executorFactory.createExecutor(n.getTeamLastUpdateTs).executeRequest({ credentials: e, body: t });
        }
        getTeamMembers(e, t) {
          return this.executorFactory.createExecutor(n.getTeamMembers).executeRequest({ credentials: e, body: t });
        }
        getTeamOffers(e, t) {
          return this.executorFactory.createExecutor(n.getTeamOffers).executeRequest({ credentials: e, body: t });
        }
        getTeamReceipts(e, t) {
          return this.executorFactory.createExecutor(n.getTeamReceipts).executeRequest({ credentials: e, body: t });
        }
        getTeamSignUpPage(e) {
          return this.executorFactory.createExecutor(n.getTeamSignUpPage).executeRequest({ body: e });
        }
        getTeamSignUpPageForAdmin(e) {
          return this.executorFactory.createExecutor(n.getTeamSignUpPageForAdmin).executeRequest({ credentials: e });
        }
        getTeamVat(e) {
          return this.executorFactory.createExecutor(n.getTeamVat).executeRequest({ credentials: e });
        }
        getUserPermissions(e) {
          return this.executorFactory.createExecutor(n.getUserPermissions).executeRequest({ credentials: e });
        }
        getZendeskCancellationTicket(e) {
          return this.executorFactory.createExecutor(n.getZendeskCancellationTicket).executeRequest({ credentials: e });
        }
        invoiceTeamCreate(e) {
          return this.executorFactory.createExecutor(n.invoiceTeamCreate).executeRequest({ body: e });
        }
        invoiceTeamUpgrade(e) {
          return this.executorFactory.createExecutor(n.invoiceTeamUpgrade).executeRequest({ body: e });
        }
        lastAdSyncDate(e) {
          return this.executorFactory.createExecutor(n.lastAdSyncDate).executeRequest({ credentials: e });
        }
        listDomains(e) {
          return this.executorFactory.createExecutor(n.listDomains).executeRequest({ credentials: e });
        }
        listTeamDevices(e) {
          return this.executorFactory.createExecutor(n.listTeamDevices).executeRequest({ credentials: e });
        }
        proposeMembers(e, t) {
          return this.executorFactory.createExecutor(n.proposeMembers).executeRequest({ credentials: e, body: t });
        }
        registerFreeTrial(e) {
          return this.executorFactory.createExecutor(n.registerFreeTrial).executeRequest({ body: e });
        }
        registerFreeTrialOptionalFields(e) {
          return this.executorFactory.createExecutor(n.registerFreeTrialOptionalFields).executeRequest({ body: e });
        }
        registerTeamDevice(e, t) {
          return this.executorFactory.createExecutor(n.registerTeamDevice).executeRequest({ credentials: e, body: t });
        }
        removeGroupManager(e, t) {
          return this.executorFactory.createExecutor(n.removeGroupManager).executeRequest({ credentials: e, body: t });
        }
        report(e, t) {
          return this.executorFactory.createExecutor(n.report).executeRequest({ credentials: e, body: t });
        }
        reportTeamDeviceError(e, t) {
          return this.executorFactory.createExecutor(n.reportTeamDeviceError).executeRequest({ credentials: e, body: t });
        }
        requestDomainRegistration(e, t) {
          return this.executorFactory.createExecutor(n.requestDomainRegistration).executeRequest({ credentials: e, body: t });
        }
        requestTeamInviteToken(e) {
          return this.executorFactory.createExecutor(n.requestTeamInviteToken).executeRequest({ body: e });
        }
        startAuditLogsQuery(e, t) {
          return this.executorFactory.createExecutor(n.startAuditLogsQuery).executeRequest({ credentials: e, body: t });
        }
        storeActivityLogs(e, t) {
          return this.executorFactory.createExecutor(n.storeActivityLogs).executeRequest({ credentials: e, body: t });
        }
        storeAuditLogs(e, t) {
          return this.executorFactory.createExecutor(n.storeAuditLogs).executeRequest({ credentials: e, body: t });
        }
        teamStatus(e) {
          return this.executorFactory.createExecutor(n.teamStatus).executeRequest({ credentials: e });
        }
        toggleTeamSignUpPage(e, t) {
          return this.executorFactory.createExecutor(n.toggleTeamSignUpPage).executeRequest({ credentials: e, body: t });
        }
        updateTeamDeviceEncryptedConfiguration(e, t) {
          return this.executorFactory.createExecutor(n.updateTeamDeviceEncryptedConfiguration).executeRequest({ credentials: e, body: t });
        }
        upsertTeamVat(e, t) {
          return this.executorFactory.createExecutor(n.upsertTeamVat).executeRequest({ credentials: e, body: t });
        }
      }
    },
    73873: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => n, q: () => a });
      var o = r(64839),
        s = r(24982);
      const n = {
        getRemoteTimeList: {
          method: "GET",
          path: "time/GetRemoteTime",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.NONE,
          version: s.W.V1
        },
        getRemoteTime: {
          method: "POST",
          path: "time/GetRemoteTime",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.NONE,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        getRemoteTimeList(e) {
          return this.executorFactory.createExecutor(n.getRemoteTimeList).executeRequest({ body: e });
        }
        getRemoteTime(e) {
          return this.executorFactory.createExecutor(n.getRemoteTime).executeRequest({ body: e });
        }
      }
    },
    84626: (e, t, r) => {
      "use strict";
      r.d(t, { K: () => n, V: () => a });
      var o = r(64839),
        s = r(24982);
      const n = {
        create: {
          method: "POST",
          path: "useractivity/Create",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        create(e, t) {
          return this.executorFactory.createExecutor(n.create).executeRequest({ credentials: e, body: t });
        }
      }
    },
    42882: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => a, _: () => n });
      var o = r(64839),
        s = r(24982);
      const n = {
        getConsents: {
          method: "POST",
          path: "userconsents/GetConsents",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        updateConsents: {
          method: "POST",
          path: "userconsents/UpdateConsents",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        getConsents(e, t) {
          return this.executorFactory.createExecutor(n.getConsents).executeRequest({ credentials: e, body: t });
        }
        updateConsents(e, t) {
          return this.executorFactory.createExecutor(n.updateConsents).executeRequest({ credentials: e, body: t });
        }
      }
    },
    32739: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => a, m: () => n });
      var o = r(64839),
        s = r(24982);
      const n = {
        getCredentials: {
          method: "POST",
          path: "vpn/GetCredentials",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getVpnSubscriptionInfo: {
          method: "POST",
          path: "vpn/GetVPNSubscriptionInfo",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      class a {
        constructor(e) {
          this.executorFactory = e;
        }
        getCredentials(e, t) {
          return this.executorFactory.createExecutor(n.getCredentials).executeRequest({ credentials: e, body: t });
        }
        getVpnSubscriptionInfo(e) {
          return this.executorFactory.createExecutor(n.getVpnSubscriptionInfo).executeRequest({ credentials: e });
        }
      }
    },
    62694: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => D });
      var o = r(64839),
        s = r(24982);
      const n = {
        getAndEvaluateForDevice: {
          method: "POST",
          path: "abtesting/GetAndEvaluateForDevice",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getAndEvaluateForUser: {
          method: "POST",
          path: "abtesting/GetAndEvaluateForUser",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        listAll: {
          method: "POST",
          path: "abtesting/ListAll",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        reportOfflineExperiments: {
          method: "POST",
          path: "abtesting/ReportOfflineExperiments",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      var a = r(54404),
        i = r(77837),
        c = r(33027);
      const u = {
        createTestBreach: {
          method: "POST",
          path: "breaches-qa/CreateTestBreach",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        }
      };
      var p = r(9536);
      const d = {
        getSubscriptionTokens: {
          method: "POST",
          path: "dataleak/GetSubscriptionTokens",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        status: {
          method: "POST",
          path: "dataleak/Status",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      const h = {
        addTestLeak: {
          method: "POST",
          path: "dataleak-qa/AddTestLeak",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        setTestDataBreach: {
          method: "POST",
          path: "dataleak-qa/SetTestDataBreach",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        }
      };
      const m = {
        checkTeamDeviceInitialization: {
          method: "POST",
          path: "devices/CheckTeamDeviceInitialization",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.TEAM_DEVICE,
          version: s.W.V1
        },
        deactivateDevice: {
          method: "POST",
          path: "devices/DeactivateDevice",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        deactivateDevices: {
          method: "POST",
          path: "devices/DeactivateDevices",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        listDevices: {
          method: "POST",
          path: "devices/ListDevices",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        renameDevice: {
          method: "POST",
          path: "devices/RenameDevice",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        setPushNotificationId: {
          method: "POST",
          path: "devices/SetPushNotificationID",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        updateDeviceInfo: {
          method: "POST",
          path: "devices/UpdateDeviceInfo",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      const l = {
        accessibleFamilyOffers: {
          method: "POST",
          path: "familyplan/AccessibleFamilyOffers",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        completePaidFamilyCreation: {
          method: "POST",
          path: "familyplan/CompletePaidFamilyCreation",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        createFreeFamily: {
          method: "POST",
          path: "familyplan/CreateFreeFamily",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        getFamilyDetails: {
          method: "POST",
          path: "familyplan/GetFamilyDetails",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        invoiceFamilyCreationWithCreditCard: {
          method: "POST",
          path: "familyplan/InvoiceFamilyCreationWithCreditCard",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        joinFamily: {
          method: "POST",
          path: "familyplan/JoinFamily",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        },
        leaveFamily: {
          method: "POST",
          path: "familyplan/LeaveFamily",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        removeFamilyMember: {
          method: "POST",
          path: "familyplan/RemoveFamilyMember",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        resetJoinToken: {
          method: "POST",
          path: "familyplan/ResetJoinToken",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      var y = r(69865),
        E = r(62361),
        T = r(4119);
      const v = {
        getKillSwitches: {
          method: "POST",
          path: "killswitch/GetKillSwitches",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.APP,
          version: s.W.V1
        }
      };
      const g = {
        requestPairing: {
          method: "POST",
          path: "pairing/RequestPairing",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      var x = r(59091);
      const S = {
        getPremiumStatus: {
          method: "POST",
          path: "premium/GetPremiumStatus",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getSubscriptionInfo: {
          method: "POST",
          path: "premium/GetSubscriptionInfo",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      var R = r(52839),
        A = r(7181);
      const f = {
        deleteSecureFile: {
          method: "POST",
          path: "securefile/DeleteSecureFile",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      var q = r(55127);
      const P = {
        confirmMasterPasswordChangeDone: {
          method: "POST",
          path: "sync/ConfirmMasterPasswordChangeDone",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getDataForMasterPasswordChange: {
          method: "POST",
          path: "sync/GetDataForMasterPasswordChange",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        getLatestContent: {
          method: "POST",
          path: "sync/GetLatestContent",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        uploadContent: {
          method: "POST",
          path: "sync/UploadContent",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        uploadDataForCryptoUpdate: {
          method: "POST",
          path: "sync/UploadDataForCryptoUpdate",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        },
        uploadDataForMasterPasswordChange: {
          method: "POST",
          path: "sync/UploadDataForMasterPasswordChange",
          requestAcceptHeader: "application/json",
          responseType: "json",
          authType: o.d.USER_DEVICE,
          version: s.W.V1
        }
      };
      var j = r(91406),
        b = r(73873),
        V = r(84626),
        C = r(42882),
        U = r(32739);
      const D = {
        abtesting: n,
        account: a.h,
        accountrecovery: i.y,
        authentication: c.k,
        breachesQa: u,
        darkwebmonitoring: p.T,
        dataleak: d,
        dataleakQa: h,
        devices: m,
        familyplan: l,
        features: y.Z,
        file: E._,
        invitation: T.p,
        killswitch: v,
        pairing: g,
        payments: x.l,
        premium: S,
        pwleak: R.D,
        secretTransfer: A.t,
        securefile: f,
        sharingUserdevice: q.T,
        sync: P,
        teams: j.b,
        time: b.i,
        useractivity: V.K,
        userconsents: C._,
        vpn: U.m
      };
      a.m, i.u, c.V, p.D, y.A, E.$, T.R, x.H, R.J, A.V, q.b, j.p, b.q, V.V, C.G, U.V;
    },
    63877: (e, t, r) => {
      "use strict";
      var o, s, n;
      r.d(t, { ET: () => s, qb: () => n, y3: () => o }),
        (function (e) {
          (e.Admin = "admin"), (e.Limited = "limited");
        })(o || (o = {})),
        (function (e) {
          (e.USER = "USER"), (e.TAC = "TAC"), (e.AD = "AD"), (e.SCIM = "SCIM");
        })(s || (s = {})),
        (function (e) {
          (e.Pending = "pending"), (e.Accepted = "accepted"), (e.Refused = "refused"), (e.Revoked = "revoked");
        })(n || (n = {}));
    },
    64839: (e, t, r) => {
      "use strict";
      var o;
      r.d(t, { d: () => o }),
        (function (e) {
          (e.NONE = "NONE"),
            (e.APP = "App"),
            (e.USER_DEVICE = "UserDevice"),
            (e.SESSION = "Session"),
            (e.TEAM_DEVICE = "TeamDevice"),
            (e.BACK_OFFICE = "Backoffice"),
            (e.EXTERNAL = "External"),
            (e.CUSTOM = "Custom");
        })(o || (o = {}));
    },
    71937: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => B });
      var o = r(37182),
        s = r(69885),
        n = r(14888),
        a = r(34987),
        i = r(87065),
        c = r(87279),
        u = r(18533),
        p = r(48844),
        d = r(4607),
        h = r(4043),
        m = r(25994),
        l = r(64839),
        y = r(96168);
      function E(e, t) {
        return class extends (0, y.Hu)(e, t) {
          constructor(e, t) {
            super(), (this.requestId = e), (this.error = t);
          }
        };
      }
      class T extends E("BusinessError", "Service responded with a business error") {
        constructor(e, t, r, o) {
          super(t, o), (this.code = e), (this.businessMessage = r);
        }
      }
      class v extends E("OutOfBoundsTimestamp", "Client clock is not synced with server clock") {}
      class g extends E("RateLimited", "Request was throttled by Dashlane API rate limiting setup") {}
      class x extends E("InvalidRequest", "The request sent by the client was invalid in its content or shape") {}
      class S extends E("ServiceUnavailable", "The requested endpoint is unavailable temporarily") {}
      class R extends E("InternalServerError", "The server is having an internal issue") {}
      class A extends (0, y.Hu)("UnspecifiedBadStatus", "A non-succesful response") {
        constructor(e) {
          super(), (this.response = e);
        }
      }
      var f = r(95087),
        q = r(64718),
        P = r(43293),
        j = r(54066),
        b = r(96303);
      function V(e) {
        const t = (0, P.N)(e);
        return (0, j.u)(t);
      }
      async function C(e, t) {
        const r = await e.compute(V(t), "SHA-256");
        return (0, b.k)(r);
      }
      function U(e) {
        return e.replace(/[^A-Za-z0-9_.~\\-]/g, (e) => "%" + e.charCodeAt(0).toString(16).toUpperCase());
      }
      function D(e, t) {
        return e.localeCompare(t, "en", { numeric: !0 });
      }
      function w(e) {
        return e.map((e) => e.toLowerCase());
      }
      class I {
        constructor(e) {
          this.secureHasher = e;
        }
        async canonicalizeRequest(e, t) {
          const {
              makeCanonicalBody: r,
              makeCanonicalURI: o,
              makeCanonicalQueryString: s,
              makeCanonicalHeadersString: n,
              makeSignedHeaderNamesString: a
            } = I,
            { body: i, headers: c, method: u, url: p, params: d } = e,
            h = new q.Y(p).getHostname(),
            m = p.indexOf(h),
            l = p.substring(m + h.length),
            y = r(i),
            E = await C(this.secureHasher, y),
            T = t ? w(t) : void 0,
            v = T ? ((g = w(c.keys())), (x = T).length ? g.filter((e) => !x.includes(e)) : g) : [];
          var g, x;
          const S = c.deleteMultiple(v),
            R = o(l),
            A = s(d),
            f = n(S),
            P = a(S);
          return { canonicalRequest: [u, R, A, f, P, E].join("\n"), signedHeaderNames: P };
        }
        static makeCanonicalURI(e) {
          return (function (e) {
            return e
              .split("/")
              .map((e) => U(e))
              .join("/");
          })(e);
        }
        static makeCanonicalQueryStringPair(e, t) {
          const r = U(e),
            o = Array.isArray(t) ? t : [t];
          return o.sort(D).map((e) => {
            return (t = ((e) => U(e))(e)), [r, t];
            var t;
          });
        }
        static makeCanonicalQueryString(e) {
          return e
            .keys()
            .map(
              (t) =>
                `${(([e, t]) => I.makeCanonicalQueryStringPair(e, t))([t, e.getAll(t) ?? []])
                  .map((e) => e.join("="))
                  .join("&")}`
            )
            .sort(D)
            .join("&");
        }
        static makeCanonicalHeadersString(e) {
          return e
            .keys()
            .map((t) => {
              return (r = t), (o = e.get(t)), `${r.toLowerCase()}:${o.trim().replace(/\s+/g, " ")}\n`;
              var r, o;
            })
            .sort(D)
            .join("");
        }
        static makeSignedHeaderNamesString(e) {
          return e
            .keys()
            .map((e) => e.toLowerCase())
            .sort(D)
            .join(";");
        }
        static makeCanonicalBody(e) {
          return e ? JSON.stringify(e) : "";
        }
      }
      const F = "DL1-HMAC-SHA256";
      class O {
        constructor(e, t) {
          (this.hmacSigner = e), (this.secureHasher = t);
        }
        async signRequest(e, t, r) {
          const o = await C(this.secureHasher, e),
            s = [F, t, o].join("\n"),
            n = this.getFinalSecretKey(r),
            a = (0, j.u)(n),
            i = V(s),
            c = await this.hmacSigner.sign(a, i);
          return (0, b.k)(c);
        }
        getFinalSecretKey(e) {
          const { appSecretKey: t } = e;
          switch (e.type) {
            case l.d.APP:
              return t;
            case l.d.USER_DEVICE: {
              const { deviceSecretKey: r } = e;
              return `${t}\n${r}`;
            }
            case l.d.SESSION: {
              const { sessionSecretKey: r } = e;
              return `${t}\n${r}`;
            }
            case l.d.TEAM_DEVICE: {
              const { teamDeviceSecretKey: r } = e;
              return `${t}\n${r}`;
            }
            case l.d.EXTERNAL: {
              const { tokenSecretKey: r } = e;
              return `${t}\n${r}`;
            }
            case l.d.BACK_OFFICE:
              return t;
            default:
              (0, f.U)(e);
          }
        }
      }
      class W {
        constructor(e, t, r) {
          (this.signatureService = new O(t, e)), (this.canonicalizationService = new I(e)), (this.clockDriftService = r);
        }
        async prepareRequestForAuthorization(e, t) {
          if (t.type === l.d.CUSTOM) throw new Error("Unexpected credentials type provided to standard auth method");
          const r = this.addHostHeader(e),
            { canonicalRequest: o, signedHeaderNames: s } = await this.canonicalizationService.canonicalizeRequest(r),
            n = await this.clockDriftService.getDriftCorrectedTimestamp(),
            a = await this.signatureService.signRequest(o, n, t),
            i = this.buildAuthorizationHeader(t, n, s, a);
          return this.addAuthorizationHeader(e, i);
        }
        addHostHeader(e) {
          const t = new q.Y(e.url).getHostname(),
            r = e.headers.append("host", t);
          return e.clone({ headers: r });
        }
        addAuthorizationHeader(e, t) {
          const r = e.headers.append("authorization", t);
          return e.clone({ headers: r });
        }
        buildAuthorizationHeader(e, t, r, o) {
          const { appAccessKey: s } = e;
          switch (e.type) {
            case l.d.APP:
              return F + " " + [`AppAccessKey=${s}`, `Timestamp=${t}`, `SignedHeaders=${r}`, `Signature=${o}`].join(",");
            case l.d.USER_DEVICE: {
              const { login: n, deviceAccessKey: a } = e;
              return (
                F +
                " " +
                [`Login=${n}`, `AppAccessKey=${s}`, `DeviceAccessKey=${a}`, `Timestamp=${t}`, `SignedHeaders=${r}`, `Signature=${o}`].join(
                  ","
                )
              );
            }
            case l.d.SESSION: {
              const { deviceAccessKey: n, login: a, sessionAccessKey: i } = e;
              return (
                F +
                " " +
                [
                  `Login=${a}`,
                  `AppAccessKey=${s}`,
                  `SessionAccessKey=${i}`,
                  `DeviceAccessKey=${n}`,
                  `Timestamp=${t}`,
                  `SignedHeaders=${r}`,
                  `Signature=${o}`
                ].join(",")
              );
            }
            case l.d.TEAM_DEVICE: {
              const { teamDeviceAccessKey: n, teamUuid: a } = e;
              return (
                F +
                " " +
                [
                  `TeamUuid=${a}`,
                  `AppAccessKey=${s}`,
                  `DeviceAccessKey=${n}`,
                  `Timestamp=${t}`,
                  `SignedHeaders=${r}`,
                  `Signature=${o}`
                ].join(",")
              );
            }
            case l.d.BACK_OFFICE:
              return F + " " + ["Backoffice", `AppAccessKey=${s}`, `Timestamp=${t}`, `SignedHeaders=${r}`, `Signature=${o}`].join(",");
            case l.d.EXTERNAL: {
              const { tokenAccessKey: n } = e;
              return (
                F + " " + [`AppAccessKey=${s}`, `TokenAccessKey=${n}`, `Timestamp=${t}`, `SignedHeaders=${r}`, `Signature=${o}`].join(",")
              );
            }
            default:
              (0, f.U)(e);
          }
        }
      }
      class H {
        constructor(e) {
          this.descriptor = e;
        }
        decode(e) {
          return e;
        }
      }
      class k {
        constructor(e) {
          this.descriptor = e;
        }
        decode(e) {
          return e;
        }
      }
      class _ {
        constructor(e, t, r, s, n, a) {
          (this.initHttpRequest = (e) => {
            const { method: t, path: r, version: o } = this.descriptor,
              { baseUrl: s, platformInfo: n } = this.config,
              a = `${s.endsWith("/") ? s : `${s}/`}${o}/${r}`,
              i = new d.W({
                accept: this.descriptor.requestAcceptHeader ?? "application/json",
                "content-type": "application/json; charset=UTF-8",
                "dashlane-client-agent": JSON.stringify({
                  platform: n.platformName,
                  version: n.version,
                  osversion: n.osversion,
                  language: n.language
                })
              });
            return new h.a(t, a, e, { headers: i });
          }),
            (this.prepareRequestForAuthorization = (e) => async (t) => {
              if (this.descriptor.authType === l.d.NONE) return t;
              let r;
              if (this.descriptor.authType === l.d.CUSTOM) {
                r = new (this.getCustomAuthPreparationClass())();
              } else r = this.standardAuthPreparationService;
              const o = this.getSigningCredentials(this.descriptor.authType, e);
              return await r.prepareRequestForAuthorization(t, o);
            }),
            (this.sendHttpRequest = (e) => this.httpClient.request(e)),
            (this.handleSuccess = async (e) => {
              if ("arraybuffer" === this.descriptor.responseType) return (0, c.Vp)(await e.arrayBuffer());
              if ("text" === this.descriptor.responseType) return (0, c.Vp)(await e.text());
              const t = await e.json(this.successBodyDecoder);
              return (0, c.Vp)(t);
            }),
            (this.handleFailure = async (e) =>
              await (0, u.EQ)(e, { BadStatus: this.handleBadStatus, FetchFailedError: (e) => Promise.resolve((0, c.Rn)(e)) })),
            (this.handleBadStatus = async (e) => {
              const { response: t } = e;
              if (t.status === m.W.BadRequest) {
                const { errors: e, requestId: r } = await t.json(this.failureBodyDecoder),
                  o = e[0];
                if ("business_error" === o.type) {
                  const { code: e, message: t } = o;
                  return (0, c.Rn)(new T(e, r, t, o));
                }
                if ("invalid_request_error" === o.type && "out_of_bounds_timestamp" === o.code) throw new v(r, o);
                return (0, c.Rn)(new x(r, o));
              }
              if (t.status === m.W.InternalServerError) {
                const { errors: e, requestId: r } = await t.json(this.failureBodyDecoder);
                return (0, c.Rn)(new R(r, e[0]));
              }
              if (t.status === m.W.ServiceUnavailable) {
                const { errors: e, requestId: r } = await t.json(this.failureBodyDecoder);
                return (0, c.Rn)(new S(r, e[0]));
              }
              if (t.status === m.W.TooManyRequests) {
                const { errors: e, requestId: r } = await t.json(this.failureBodyDecoder);
                return (0, c.Rn)(new g(r, e[0]));
              }
              return (0, c.Rn)(new A(t));
            }),
            (this.notifyWhenClockDriftErrorCompensated = (e) => {
              if (!(e instanceof v)) throw e;
              return this.clockDriftService.refresh().pipe(
                (0, o.K)(() => {
                  throw e;
                })
              );
            }),
            (this.httpClient = e),
            (this.standardAuthPreparationService = new W(t, r, s)),
            (this.clockDriftService = s),
            (this.config = n),
            (this.descriptor = a),
            (this.successBodyDecoder = new H(a)),
            (this.failureBodyDecoder = new k(a));
        }
        executeRequest(e) {
          const { body: t = null, credentials: r } = e;
          return (0, s.of)(this.initHttpRequest(t)).pipe(
            (0, a.b)(this.prepareRequestForAuthorization(r)),
            (0, a.b)(this.sendHttpRequest),
            (0, p.RW)({ success: this.handleSuccess, failure: this.handleFailure }),
            (0, i.U)(this.assertReturnType),
            (0, n.X)({ count: 1, delay: this.notifyWhenClockDriftErrorCompensated })
          );
        }
        getCustomAuthPreparationClass() {
          throw new Error("Unsupported custom authorization level");
        }
        getSigningCredentials(e, t) {
          if (e === l.d.APP || e === l.d.BACK_OFFICE) {
            if (t) throw new Error("Superfluous credentials provided");
            return { type: e, ...this.config.appKeys };
          }
          if (e === l.d.SESSION) {
            if (
              !t ||
              !(function (e) {
                return (
                  "object" == typeof e &&
                  "login" in e &&
                  "string" == typeof e.login &&
                  "deviceAccessKey" in e &&
                  "string" == typeof e.deviceAccessKey &&
                  "sessionAccessKey" in e &&
                  "string" == typeof e.sessionAccessKey &&
                  "sessionSecretKey" in e &&
                  "string" == typeof e.sessionSecretKey
                );
              })(t)
            )
              throw new Error("Invalid session credentials provided");
            return { type: e, ...this.config.appKeys, ...t };
          }
          if (e === l.d.TEAM_DEVICE) {
            if (
              !t ||
              !(function (e) {
                return (
                  "object" == typeof e &&
                  "teamUuid" in e &&
                  "string" == typeof e.teamUuid &&
                  "teamDeviceAccessKey" in e &&
                  "string" == typeof e.teamDeviceAccessKey &&
                  "teamDeviceSecretKey" in e &&
                  "string" == typeof e.teamDeviceSecretKey
                );
              })(t)
            )
              throw new Error("Invalid team device credentials provided");
            return { type: e, ...this.config.appKeys, ...t };
          }
          if (e === l.d.USER_DEVICE) {
            if (
              !t ||
              !(function (e) {
                return (
                  "object" == typeof e &&
                  "login" in e &&
                  "string" == typeof e.login &&
                  "deviceAccessKey" in e &&
                  "string" == typeof e.deviceAccessKey &&
                  "deviceSecretKey" in e &&
                  "string" == typeof e.deviceSecretKey
                );
              })(t)
            )
              throw new Error("Invalid user device credentials provided");
            return { type: e, ...this.config.appKeys, ...t };
          }
          if (e === l.d.EXTERNAL) {
            if (
              !t ||
              !(function (e) {
                return (
                  "object" == typeof e &&
                  "tokenAccessKey" in e &&
                  "string" == typeof e.tokenAccessKey &&
                  "tokenSecretKey" in e &&
                  "string" == typeof e.tokenSecretKey
                );
              })(t)
            )
              throw new Error("Invalid external credentials provided");
            return { type: e, ...this.config.appKeys, ...t };
          }
          return { type: e, ...(t ?? {}), ...this.config.appKeys };
        }
        assertReturnType(e) {
          return e;
        }
      }
      class L {
        constructor(e, t, r, o, s) {
          (this.httpClient = e), (this.clockDriftService = o), (this.secureHasher = t), (this.hmacSigner = r), (this.config = s);
        }
        createExecutor(e) {
          return new _(this.httpClient, this.secureHasher, this.hmacSigner, this.clockDriftService, this.config, e);
        }
      }
      class G {
        constructor(e, t) {
          (this.timeSyncStore = e), (this.serverClockService = t);
        }
        async getDriftCorrectedTimestamp() {
          const e = (await this.timeSyncStore.getServerToClientClockDrift()) ?? 0;
          return Math.round(this.getUnixTimestamp() - e);
        }
        refresh() {
          return this.serverClockService
            .getServerTime()
            .pipe((0, i.U)(this.mapServerTimestampToClockDrift.bind(this)), (0, a.b)(this.storeUpdatedClockDrift.bind(this)));
        }
        mapServerTimestampToClockDrift(e) {
          const { timestamp: t } = e;
          return this.getUnixTimestamp() - t;
        }
        async storeUpdatedClockDrift(e) {
          await this.timeSyncStore.storeServerToClientClockDrift(e);
        }
        getUnixTimestamp() {
          return Math.round(Date.now() / 1e3);
        }
      }
      var N = r(73873);
      class M {
        getServerTime() {
          if (!this.executorFactory) throw new Error("No request executor factory");
          return new N.q(this.executorFactory).getRemoteTime({}).pipe(
            (0, p.nb)({
              success: (e) => ({ timestamp: e.data.timestamp }),
              failure: (e) => {
                throw e;
              }
            })
          );
        }
        setExecutorFactory(e) {
          this.executorFactory = e;
        }
      }
      function B(e) {
        const { apis: t, config: r, secureHasher: o, httpClient: s, hmacSigner: n, timeSyncStore: a } = e,
          i = new M(),
          c = new G(a, i),
          u = new L(s, o, n, c, r);
        i.setExecutorFactory(u);
        return {
          refreshClockDrift: () => c.refresh(),
          v1: Object.keys(t.v1).reduce((e, r) => {
            const o = t.v1[r];
            return (e[r] = new o(u)), e;
          }, {})
        };
      }
    },
    24982: (e, t, r) => {
      "use strict";
      var o;
      r.d(t, { W: () => o }),
        (function (e) {
          e.V1 = "v1";
        })(o || (o = {}));
    },
    63272: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          getBrowserCountry: () => u,
          getBrowserLanguage: () => c,
          getBrowserName: () => a,
          getBrowserVersion: () => i,
          isChrome: () => p,
          isChromiumEdge: () => y,
          isEdge: () => h,
          isFirefox: () => d,
          isInternetExplorer: () => E,
          isOpera: () => l,
          isSafari: () => m
        });
      var o,
        s = r(96471),
        n = r(64785);
      function a() {
        return (0, n.r)().browser.name ?? "";
      }
      function i() {
        return (0, n.r)().browser.version ?? "";
      }
      function c() {
        const e = (0, s.getNavigator)();
        return e?.language ?? "";
      }
      function u() {
        const e = (0, s.getNavigator)(),
          t = e?.language ?? "";
        let r = "";
        return t.length >= 5 && (r = t.substr(3, 2)), r;
      }
      function p() {
        return a() === o.CHROME;
      }
      function d() {
        return a() === o.FIREFOX;
      }
      function h() {
        return a() === o.EDGE;
      }
      function m() {
        return a() === o.SAFARI;
      }
      function l() {
        return a() === o.OPERA;
      }
      function y() {
        const e = i() ?? "";
        return h() && parseInt(e.split(".")[0], 10) >= 76;
      }
      function E() {
        const e = a();
        return "Internet Explorer" === e ?? "IE" === e;
      }
      !(function (e) {
        (e.CHROME = "Chrome"), (e.FIREFOX = "Firefox"), (e.EDGE = "Edge"), (e.SAFARI = "Safari"), (e.OPERA = "Opera");
      })(o || (o = {}));
    },
    10551: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          getDefaultDeviceName: () => i,
          getDeviceType: () => c,
          isDeviceConsole: () => p,
          isDeviceEmbedded: () => l,
          isDeviceMobile: () => u,
          isDeviceSmartTV: () => h,
          isDeviceTablet: () => d,
          isDeviceWearable: () => m
        });
      var o,
        s = r(63272),
        n = r(28509),
        a = r(64785);
      function i() {
        return `${(0, s.getBrowserName)()} - ${(0, n.getOSName)()}`;
      }
      !(function (e) {
        (e.MOBILE = "mobile"),
          (e.CONSOLE = "console"),
          (e.TABLET = "tablet"),
          (e.SMARTTV = "smarttv"),
          (e.WEARABLE = "wearable"),
          (e.EMBEDDED = "embedded");
      })(o || (o = {}));
      const c = () => (0, a.r)().device.type,
        u = () => c() === o.MOBILE,
        p = () => c() === o.CONSOLE,
        d = () => c() === o.TABLET,
        h = () => c() === o.SMARTTV,
        m = () => c() === o.WEARABLE,
        l = () => c() === o.EMBEDDED;
    },
    33493: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { isBrowserEnvironment: () => s, isNodeEnvironment: () => a, isWorkerEnvironment: () => n });
      var o = r(73656);
      function s() {
        return "object" == typeof window;
      }
      function n() {
        return "object" == typeof self && "function" == typeof importScripts;
      }
      function a() {
        return "object" == typeof o && !s() && !n();
      }
    },
    96471: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { getNavigator: () => s });
      var o = r(33493);
      function s() {
        return (0, o.isBrowserEnvironment)() ? window.navigator : (0, o.isWorkerEnvironment)() ? self.navigator : void 0;
      }
    },
    50038: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { getUserAgent: () => s });
      var o = r(96471);
      function s() {
        const e = (0, o.getNavigator)();
        return e?.userAgent;
      }
    },
    72609: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          browser: () => i,
          cookie: () => o,
          device: () => d,
          env: () => h,
          iframe: () => s,
          navigator: () => l,
          os: () => y,
          storage: () => n,
          url: () => a,
          userAgent: () => C
        });
      var o = {};
      r.r(o), r.d(o, { desktopAnonymousComputerId: () => u, websiteTrackingId: () => p });
      var s = {};
      r.r(s), r.d(s, { isInsideIframe: () => m });
      var n = {};
      r.r(n), r.d(n, { makeBrowserStorage: () => j });
      var a = {};
      r.r(a), r.d(a, { getAuthorityForUrl: () => V, getDomainForUrl: () => b });
      var i = r(63272),
        c = r(75077);
      function u() {
        return c.Q(document.cookie).anonid;
      }
      function p() {
        try {
          const e = c.Q(document.cookie);
          return JSON.parse(e.userFunnelCookie).trackingId;
        } catch (e) {
          return null;
        }
      }
      var d = r(10551),
        h = r(33493);
      function m() {
        return window.location !== window.parent.location;
      }
      var l = r(96471),
        y = r(28509);
      const E = 1,
        T = "dashlane",
        v = "user-data";
      function g() {
        return new Promise((e, t) => {
          const r = (0, h.isBrowserEnvironment)() ? window.indexedDB : (0, h.isWorkerEnvironment)() ? self.indexedDB : null;
          if (!r) return t(new Error("indexedDB is not supported in this environment"));
          const o = r.open(T, E);
          (o.onerror = function () {
            t(o.error);
          }),
            (o.onupgradeneeded = () => {
              o.result.objectStoreNames.contains(v) || o.result.createObjectStore(v);
            }),
            (o.onsuccess = function () {
              (o.onsuccess = null), e(o.result);
            });
        });
      }
      async function x(e = "readwrite") {
        return (await g()).transaction([v], e).objectStore(v);
      }
      async function S(e) {
        const t = await x("readonly");
        return new Promise((r) => {
          const o = t.get(e);
          o.onsuccess = () => {
            (o.onsuccess = null), r(o.result);
          };
        });
      }
      const R = {
          isSupported: async function () {
            if (!(0, h.isBrowserEnvironment)() && !(0, h.isWorkerEnvironment)()) return !1;
            if (i.isInternetExplorer()) return !1;
            if ((0, h.isBrowserEnvironment)() && !window.indexedDB) return !1;
            if ((0, h.isWorkerEnvironment)() && !self.indexedDB) return !1;
            try {
              return await g(), !0;
            } catch (e) {
              return !1;
            }
          },
          readItem: S,
          writeItem: async function (e, t) {
            const r = await x("readwrite");
            return new Promise((o) => {
              const s = r.put(t, e);
              s.onsuccess = () => {
                (s.onsuccess = null), o();
              };
            });
          },
          removeItem: async function (e) {
            const t = await x("readwrite");
            return new Promise((r) => {
              const o = t.delete(e);
              o.onsuccess = () => {
                (o.onsuccess = null), r();
              };
            });
          },
          itemExists: async function (e) {
            const t = await S(e);
            return null != t;
          }
        },
        A = R,
        f = {
          isSupported: () => Promise.resolve(void 0 !== typeof window && !!window.localStorage),
          readItem: (e) => Promise.resolve(window.localStorage.getItem(e)),
          writeItem: (e, t) => Promise.resolve(window.localStorage.setItem(e, t)),
          removeItem: (e) => Promise.resolve(window.localStorage.removeItem(e)),
          itemExists: (e) => {
            const t = window.localStorage.getItem(e);
            return Promise.resolve(null != t);
          }
        },
        q = {},
        P = {
          isSupported: () => Promise.resolve(!0),
          readItem: (e) => {
            const t = e in q;
            return Promise.resolve(t ? q[e] : null);
          },
          writeItem: (e, t) => ((q[e] = t), Promise.resolve()),
          removeItem: (e) => (delete q[e], Promise.resolve()),
          itemExists: (e) => Promise.resolve(e in q)
        },
        j = async () => {
          try {
            if (await A.isSupported()) return A;
            if (await f.isSupported()) return f;
          } catch (e) {}
          return P;
        },
        b = (e) => {
          if (!e) return null;
          const t = e.trim(),
            r = ["http://", "https://", "ftp://", "ftps://", "file://", "afp://", "smb://"].filter((e) => t.startsWith(e))[0],
            o = r ? t.substr(r.length) : t,
            s = o.indexOf("/"),
            n = s > -1 ? o.slice(0, s) : o,
            a = n.split(""),
            i = a.filter((e) => "." === e),
            c = a.filter((e) => ":" === e),
            u = a.filter((e) => !Number.isNaN(Number(e)));
          if (3 === i.length && (u.length === n.length - 3 || (u.length === n.length - 4 && 1 === c.length))) return n;
          if (!i.length || 1 === i.length) return n;
          const p = n.lastIndexOf("."),
            d = n.slice(0, p),
            h = n.substr(p),
            m = d.lastIndexOf("."),
            l = d.substr(m + 1),
            y = d.slice(0, m);
          if (
            !["co", "com", "fr", "ac", "gov", "org", "edu", "net"].includes(l) &&
            ![
              "judiciary.uk",
              "ltd.uk",
              "me.uk",
              "mod.uk",
              "nhs.uk",
              "nic.uk",
              "parliament.uk",
              "plc.uk",
              "sch.uk",
              "bl.uk",
              "jet.uk",
              "british-library.uk",
              "nls.uk",
              "qc.ca"
            ].includes(l + h)
          )
            return l + h;
          const E = y.lastIndexOf(".");
          return E > -1 ? y.substr(E + 1) + "." + l + h : n;
        },
        V = (e) => {
          const t = (e ?? "").trim();
          if (!t) return null;
          const r = ["afp://", "file://", "ftp://", "ftps://", "http://", "https://", "smb://"].find((e) => t.startsWith(e)),
            o = r ? t.substr(r.length) : t,
            s = o.indexOf("/");
          return s > -1 ? o.slice(0, s) : o;
        };
      var C = r(50038);
    },
    28509: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          getOSName: () => n,
          getOSVersion: () => a,
          isAndroid: () => i,
          isIOS: () => c,
          isLinux: () => d,
          isMacOS: () => p,
          isWindows: () => u
        });
      var o,
        s = r(64785);
      function n() {
        return "Chromium OS" === (0, s.r)().os.name ? "Chrome OS" : (0, s.r)().os.name;
      }
      function a() {
        const { version: e = "" } = (0, s.r)().os;
        return "Mac OS" === n() ? `OS_X_${e.replace(/\./g, "_")}` : e;
      }
      !(function (e) {
        (e.ANDROID = "Android"), (e.IOS = "iOS"), (e.WINDOWS = "Windows"), (e.LINUX = "Linux"), (e.MACOS = "Mac OS");
      })(o || (o = {}));
      const i = () => n() === o.ANDROID,
        c = () => n() === o.IOS,
        u = () => n() === o.WINDOWS,
        p = () => n() === o.MACOS,
        d = () => n() === o.LINUX;
    },
    64785: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => a });
      var o = r(8473),
        s = r.n(o),
        n = r(50038);
      function a() {
        return new (s())((0, n.getUserAgent)(), {
          browser: [
            [/(AVG|Avast)\/([\w.]+)/i],
            [[s().BROWSER.NAME, "Avast"], s().BROWSER.VERSION],
            [/(edge|edgios|edga|edg)\/((\d+)?[\w.]+)/i],
            [[s().BROWSER.NAME, "Edge"], s().BROWSER.VERSION]
          ]
        }).getResult();
      }
    },
    96873: (e, t, r) => {
      "use strict";
      r.d(t, { _: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          if (!(0, o.Ez)("action.setBadgeBackgroundColor") && !(0, o.Ez)("browserAction.setBadgeBackgroundColor"))
            return void r(new Error("No setBadgeBackgroundColor support"));
          (chrome.action?.setBadgeBackgroundColor ?? chrome.browserAction.setBadgeBackgroundColor)(e, () => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                t = new Error(`action/setBadgeBackgroundColor: ${e}`);
              r(t);
            } else t();
          });
        });
      }
    },
    86554: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          if (!(0, o.Ez)("action.setBadgeText") && !(0, o.Ez)("browserAction.setBadgeText"))
            return void r(new Error("No setBadgeText support"));
          (chrome.action?.setBadgeText ?? chrome.browserAction.setBadgeText)(e, () => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                t = new Error(`action/setBadgeText: ${e}`);
              r(t);
            } else t();
          });
        });
      }
    },
    16241: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => s });
      var o = r(839);
      function s(e, t) {
        return new Promise((r, s) => {
          if (!(0, o.Ez)("action.setIcon") && !(0, o.Ez)("browserAction.setIcon")) return void s(new Error("No action.setIcon support"));
          (chrome.action?.setIcon ?? chrome.browserAction.setIcon)({ path: e, tabId: t }, () => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                t = new Error(`action/setIcon: ${e}`);
              s(t);
            } else r();
          });
        });
      }
    },
    31034: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => s });
      var o = r(839);
      const s = (e, t) => {
        if (!(0, o.qX)(["alarms"])) throw new Error("No alarms.create support, permission is missing");
        if (!(0, o.Ez)("alarms.create")) throw new Error("No alarms.create support");
        chrome.alarms.create(e, t);
      };
    },
    65496: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => s });
      var o = r(839);
      function s() {
        return (0, o.Ez)("alarms.clear") && (0, o.qX)(["alarms"]);
      }
    },
    18477: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => s });
      var o = r(839);
      const s = {
        addListener: (e) => {
          if (!(0, o.qX)(["alarms"])) throw new Error("No alarms.onAlarm.addListener support, permission is missing");
          if (!(0, o.Ez)("alarms.onAlarm.addListener")) throw new Error("No alarms.onAlarm.addListener support");
          chrome.alarms.onAlarm.addListener(e);
          const t = chrome.runtime.lastError?.message;
          if (t) throw new Error("alarms/onAlarm error:" + t);
        },
        removeListener: (e) => {
          if (!(0, o.qX)(["alarms"])) throw new Error("No alarms.onAlarm.removeListener support, permission is missing");
          if (!(0, o.Ez)("alarms.onAlarm.removeListener")) throw new Error("No alarms.onAlarm.removeListener support");
          chrome.alarms.onAlarm.removeListener(e);
          const t = chrome.runtime.lastError?.message;
          if (t) throw new Error("alarms/onAlarm error:" + t);
        }
      };
    },
    90123: (e, t, r) => {
      "use strict";
      r.d(t, { g: () => s });
      var o = r(839);
      function s() {
        return new Promise((e, t) => {
          (0, o.Ez)("commands.getAll")
            ? chrome.commands.getAll((r) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    r = new Error(`commands/getAll: ${e}`);
                  t(r);
                } else e(r);
              })
            : t(new Error("No commands.getAll support"));
        });
      }
    },
    329: (e, t, r) => {
      "use strict";
      r.d(t, { g: () => s });
      var o = r(839);
      function s(e = {}) {
        return new Promise((t, r) => {
          (0, o.qX)(["cookies"])
            ? (0, o.Ez)("cookies.getAll")
              ? chrome.cookies.getAll(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`cookies/getAll: ${e}`);
                    r(t);
                  } else t(e);
                })
              : r(new Error("No cookies.getAll support"))
            : r(new Error("No cookies.getAll support, permission is missing"));
        });
      }
    },
    98641: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["cookies"])
            ? (0, o.Ez)("cookies.remove")
              ? chrome.cookies.remove(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`cookies/remove: ${e}`);
                    r(t);
                  } else t(e);
                })
              : r(new Error("No cookies.remove support"))
            : r(new Error("No cookies.remove support, permission is missing"));
        });
      }
    },
    96412: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["cookies"])
            ? (0, o.Ez)("cookies.set")
              ? chrome.cookies.set(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`cookies/set: ${e}`);
                    r(t);
                  } else t(e);
                })
              : r(new Error("No cookies.set support"))
            : r(new Error("No cookies.set support, permission is missing"));
        });
      }
    },
    6212: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => s });
      var o = r(839);
      function s() {
        return new Promise((e, t) => {
          (0, o.qX)(["declarativeNetRequest"])
            ? (0, o.Ez)("declarativeNetRequest.getDynamicRules")
              ? chrome.declarativeNetRequest.getDynamicRules((r) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      r = new Error(`declarativeNetRequest/getDynamicRules: ${e}`);
                    t(r);
                  } else e(r);
                })
              : t(new Error("No declarativeNetRequest.getDynamicRules support"))
            : t(new Error("No declarativeNetRequest.getDynamicRules support, permission is missing"));
        });
      }
    },
    25417: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => s });
      var o = r(839);
      function s() {
        return (0, o.Ez)("declarativeNetRequest") && (0, o.qX)(["declarativeNetRequest"]);
      }
    },
    84867: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["declarativeNetRequest"])
            ? (0, o.Ez)("declarativeNetRequest.updateDynamicRules")
              ? chrome.declarativeNetRequest.updateDynamicRules(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`declarativeNetRequest/updateDynamicRules: ${e}`);
                    r(t);
                  } else t();
                })
              : r(new Error("No declarativeNetRequest.updateDynamicRules support"))
            : r(new Error("No declarativeNetRequest.updateDynamicRules support, permission is missing"));
        });
      }
    },
    839: (e, t, r) => {
      "use strict";
      r.d(t, { Ez: () => n, qX: () => s });
      var o = r(84318);
      function s(e) {
        const t = (0, o.W)().permissions ?? [];
        return e.every((e) => t.includes(e));
      }
      function n(e) {
        if ("undefined" == typeof chrome) return !1;
        const t = e.split(".").reduce((e, t) => e?.[t], chrome);
        return Boolean(t);
      }
    },
    13090: (e, t, r) => {
      "use strict";
      r.d(t, { e: () => s });
      var o = r(839);
      const s = {
        addListener: function (e) {
          if (!(0, o.qX)(["idle"])) throw new Error("No idle.onStateChanged.addListener support, permission is missing");
          if (!(0, o.Ez)("idle.onStateChanged.addListener")) throw new Error("No idle.onStateChanged.addListener support");
          const t = (t) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError";
              throw new Error(`idle/onStateChanged: ${e}`);
            }
            return e(t);
          };
          return chrome.idle.onStateChanged.addListener(t), t;
        },
        removeListener: function (e) {
          if (!(0, o.qX)(["idle"])) throw new Error("No idle.onStateChanged.removeListener support, permission is missing");
          if (!(0, o.Ez)("idle.onStateChanged.removeListener")) throw new Error("No idle.onStateChanged.removeListener support");
          chrome.idle.onStateChanged.removeListener(e);
        }
      };
    },
    54422: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => s });
      var o = r(839);
      function s(e) {
        if (!(0, o.qX)(["idle"])) throw new Error("No idle.setDetectionInterval support, permission is missing");
        if (!(0, o.Ez)("idle.setDetectionInterval")) throw new Error("No idle.setDetectionInterval support");
        chrome.idle.setDetectionInterval(e);
      }
    },
    82324: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => s, b: () => n });
      var o = r(74972);
      function s(e) {
        if ("object" != typeof e || !e) return !1;
        return !!("reason" in e) && e.reason === o.$.RuntimeError;
      }
      function n(e) {
        if ("object" != typeof e || !e) return !1;
        return !!("reason" in e) && e.reason === o.$.SettingNotSupported;
      }
    },
    30754: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => a });
      var o = r(839),
        s = r(74972);
      const n = { reason: s.$.SettingNotSupported };
      function a(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["privacy"]) && (0, o.Ez)(`privacy.services.${e}.get`)
            ? chrome.privacy.services[e].get({}, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = { reason: s.$.RuntimeError, runtimeError: new Error(e) };
                  r(t);
                } else t(e);
              })
            : r(n);
        });
      }
    },
    74972: (e, t, r) => {
      "use strict";
      var o;
      r.d(t, { $: () => o }),
        (function (e) {
          (e.RuntimeError = "runtimeError"), (e.SettingNotSupported = "settingNotSupported");
        })(o || (o = {}));
    },
    81805: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => a });
      var o = r(839),
        s = r(74972);
      const n = { reason: s.$.SettingNotSupported };
      function a(e, t) {
        return new Promise((r, a) => {
          (0, o.qX)(["privacy"]) && (0, o.Ez)(`privacy.services.${e}.set`)
            ? chrome.privacy.services[e].set({ value: t }, () => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = { reason: s.$.RuntimeError, runtimeError: new Error(e) };
                  a(t);
                } else r();
              })
            : a(n);
        });
      }
    },
    5441: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => s });
      var o = r(839);
      function s(e) {
        if (!(0, o.Ez)("runtime.connect")) throw new Error("No runtime.connect support");
        return chrome.runtime.connect(e);
      }
    },
    48593: (e, t, r) => {
      "use strict";
      function o() {
        return chrome.runtime.id;
      }
      r.d(t, { z: () => o });
    },
    84318: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => s });
      var o = r(839);
      function s() {
        if (!(0, o.Ez)("runtime.getManifest")) throw new Error("No runtime.getManifest support");
        return chrome.runtime.getManifest();
      }
    },
    92204: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var o = r(839);
      function s(e) {
        if (!(0, o.Ez)("runtime.getURL")) throw new Error("No runtime.getURL support");
        return chrome.runtime.getURL(e);
      }
    },
    20500: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => s });
      var o = r(839);
      const s = {
        addListener: function (e) {
          if (!(0, o.Ez)("runtime.onConnect.addListener")) throw new Error("No runtime.onConnect.addListener support");
          const t = (t) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError";
              throw new Error(`runtime/onConnect: ${e}`);
            }
            return e(t);
          };
          return chrome.runtime.onConnect.addListener(t), t;
        },
        removeListener: function (e) {
          if (!(0, o.Ez)("runtime.onConnect.removeListener")) throw new Error("No runtime.onConnect.removeListener support");
          chrome.runtime.onConnect.removeListener(e);
        }
      };
    },
    23386: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => s });
      var o = r(839);
      const s = {
        addListener: function (e) {
          if (!(0, o.Ez)("runtime.onInstalled.addListener")) throw new Error("No runtime.onInstalled.addListener support");
          chrome.runtime.onInstalled.addListener((t) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError";
              throw new Error(`runtime/onInstalled: ${e}`);
            }
            return e(t);
          });
        }
      };
    },
    2235: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => s });
      var o = r(839);
      const s = {
        addListener: function (e) {
          const t = (t, r, o) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError";
              throw new Error(`runtime/onMessage: ${e}`);
            }
            return e(t, r, o);
          };
          if (!(0, o.Ez)("runtime.onMessage.addListener")) throw new Error("No runtime.onMessage.addListener support");
          return chrome.runtime.onMessage.addListener(t), t;
        },
        removeListener: function (e) {
          chrome.runtime.onMessage.removeListener(e);
        }
      };
    },
    56386: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => s });
      var o = r(839);
      function s() {
        if (!(0, o.Ez)("runtime.reload")) throw new Error("No runtime.reload support");
        chrome.runtime.reload();
      }
    },
    2927: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => s });
      var o = r(839);
      function s(e) {
        if (!(0, o.Ez)("runtime.setUninstallURL")) throw new Error("No runtime.setUninstallURL support");
        chrome.runtime.setUninstallURL(e);
      }
    },
    21763: (e, t, r) => {
      "use strict";
      r.d(t, { k: () => n });
      var o = r(839);
      const s = (e, t) => () => {
        if (chrome.runtime.lastError) {
          const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
            r = new Error(`scripting/executeScript: ${e}`);
          t(r);
        } else e();
      };
      function n(e, t) {
        return (0, o.Ez)("scripting.executeScript")
          ? (function (e, t) {
              return new Promise((r, o) => {
                const n = t ?? s(r, o);
                chrome.scripting.executeScript(e, n);
              });
            })(e, t)
          : (0, o.Ez)("tabs.executeScript")
          ? (function (e, t) {
              return new Promise((r, o) => {
                const n = t ?? s(r, o),
                  a = { allFrames: e.target.allFrames, file: void 0, frameId: e.target.frameIds?.[0], runAt: "document_start" };
                "func" in e ? (a.code = e.func.toString()) : (a.file = e.files[0]), chrome.tabs.executeScript(e.target.tabId, a, n);
              });
            })(e, t)
          : Promise.reject(new Error("No scripting.executeScript support"));
      }
    },
    39680: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => s, y: () => n });
      var o = r(839);
      function s() {
        return !!chrome.storage?.local.getBytesInUse;
      }
      function n(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.local.getBytesInUse")
              ? chrome.storage.local.getBytesInUse(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/getBytesInUse: ${e}`);
                    r(t);
                  } else t(e);
                })
              : r(new Error("No storage.local.getBytesInUse support"))
            : r(new Error("No storage.local.getBytesInUse support, permission is missing"));
        });
      }
    },
    41808: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.local.get")
              ? chrome.storage.local.get(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/get: ${e}`);
                    r(t);
                  } else t(e);
                })
              : r(new Error("No storage.local.get support"))
            : r(new Error("No storage.local.get support, permission is missing"));
        });
      }
    },
    45441: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.local.remove")
              ? chrome.storage.local.remove(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/remove: ${e}`);
                    r(t);
                  } else t();
                })
              : r(new Error("No storage.local.remove support"))
            : r(new Error("No storage.local.remove support, permission is missing"));
        });
      }
    },
    9244: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.local.set")
              ? chrome.storage.local.set(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/set: ${e}`);
                    r(t);
                  } else t();
                })
              : r(new Error("No storage.local.set support"))
            : r(new Error("No storage.local.set support, permission is missing"));
        });
      }
    },
    15026: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.session.get")
              ? chrome.storage.session.get(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/session/get: ${e}`);
                    r(t);
                  }
                  t(e);
                })
              : r(new Error("No storage.session.get support"))
            : r(new Error("No storage.session.get support, permission is missing"));
        });
      }
    },
    32012: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => n });
      var o = r(839),
        s = r(84318);
      function n() {
        return (0, o.Ez)("storage.session") && (0, o.qX)(["storage"]) && 3 === (0, s.W)().manifest_version;
      }
    },
    26603: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => s });
      var o = r(839);
      const s = {
        addListener: function (e) {
          if (!(0, o.qX)(["storage"])) throw new Error("No storage.session.onChanged.addListener support, permission is missing");
          if (!(0, o.Ez)("storage.session.onChanged.addListener")) throw new Error("No storage.session.onChanged.addListener support");
          const t = (t) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError";
              throw new Error(`storage/session/onChanged: ${e}`);
            }
            return e(t);
          };
          return chrome.storage.session.onChanged.addListener(t), t;
        },
        removeListener: function (e) {
          if (!(0, o.qX)(["storage"])) throw new Error("No storage.session.onChanged.removeListener support, permission is missing");
          if (!(0, o.Ez)("storage.session.onChanged.removeListener"))
            throw new Error("No storage.session.onChanged.removeListener support");
          chrome.storage.session.onChanged.removeListener(e);
        }
      };
    },
    52477: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.session.remove")
              ? chrome.storage.session.remove(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/session/remove: ${e}`);
                    r(t);
                  }
                  t();
                })
              : r(new Error("No storage.session.remove support"))
            : r(new Error("No storage.session.remove support, permission is missing"));
        });
      }
    },
    56847: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.session.set")
              ? chrome.storage.session.set(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/session/set: ${e}`);
                    r(t);
                  }
                  t();
                })
              : r(new Error("No storage.session.set support"))
            : r(new Error("No storage.session.set support, permission is missing"));
        });
      }
    },
    15904: (e, t, r) => {
      "use strict";
      function o() {
        return chrome.tabs.TAB_ID_NONE;
      }
      r.d(t, { a: () => o });
    },
    24715: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.Ez)("tabs.create")
            ? chrome.tabs.create(e, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`tabs/create: ${e}`);
                  r(t);
                } else t(e);
              })
            : r(new Error("No tabs.create support"));
        });
      }
    },
    45599: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => s });
      var o = r(839);
      const s = {
        addListener: function (e) {
          if (!(0, o.Ez)("tabs.onRemoved.addListener")) throw new Error("No tabs.onRemoved.addListener support");
          const t = (t, r) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError";
              throw new Error(`tabs/onRemoved: ${e}`);
            }
            return e(t, r);
          };
          return chrome.tabs.onRemoved.addListener(t), t;
        },
        removeListener: function (e) {
          if (!(0, o.Ez)("tabs.onRemoved.removeListener")) throw new Error("No tabs.onRemoved.removeListener support");
          chrome.tabs.onRemoved.removeListener(e);
        }
      };
    },
    71558: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => s });
      var o = r(839);
      const s = {
        addListener: function (e) {
          if (!(0, o.Ez)("tabs.onUpdated.addListener")) throw new Error("No tabs.onUpdated.addListener support");
          const t = (t, r, o) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError";
              throw new Error(`tabs/onUpdated: ${e}`);
            }
            return e(t, r, o);
          };
          return chrome.tabs.onUpdated.addListener(t), t;
        },
        removeListener: function (e) {
          if (!(0, o.Ez)("tabs.onUpdated.removeListener")) throw new Error("No tabs.onUpdated.removeListener support");
          chrome.tabs.onUpdated.removeListener(e);
        }
      };
    },
    61222: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.qX)(["tabs"])
            ? (0, o.Ez)("tabs.query")
              ? chrome.tabs.query(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`tabs/query: ${e}`);
                    r(t);
                  } else t(e);
                })
              : r(new Error("No tabs.query support"))
            : r(new Error("No tabs.query support, permission is missing"));
        });
      }
    },
    49259: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          (0, o.Ez)("tabs.remove")
            ? chrome.tabs.remove(e, () => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`tabs/remove: ${e}`);
                  r(t);
                } else t();
              })
            : r(new Error("No tabs.remove support"));
        });
      }
    },
    31460: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => s });
      var o = r(839);
      function s(e, t) {
        return new Promise((r, s) => {
          (0, o.Ez)("tabs.update")
            ? chrome.tabs.update(e, t, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`tabs/update: ${e}`);
                  s(t);
                } else r(e);
              })
            : s(new Error("No tabs.update support"));
        });
      }
    },
    48291: (e, t, r) => {
      "use strict";
      r.d(t, { a: () => n });
      var o = r(65881),
        s = r(839);
      const n = {
        addListener: function (e, t, r) {
          const n = r?.includes(o.X.Blocking) ? ["webRequest", "webRequestBlocking"] : ["webRequest"];
          if (!(0, s.qX)(n)) throw new Error("No webRequest.onBeforeRequest.addListener support, permission is missing");
          if (!(0, s.Ez)("webRequest.onBeforeRequest.addListener")) throw new Error("No webRequest.onBeforeRequest.addListener support");
          const a = (t) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError";
              throw new Error(`webRequest/onBeforeRequest: ${e}`);
            }
            return e(t);
          };
          return chrome.webRequest.onBeforeRequest.addListener(a, t, r), a;
        },
        hasListener: function (e) {
          if (!(0, s.qX)(["webRequest", "webRequestBlocking"]))
            throw new Error("No webRequest.onBeforeRequest.hasListener support, permission is missing");
          if (!(0, s.Ez)("webRequest.onBeforeRequest.hasListener")) throw new Error("No webRequest.onBeforeRequest support");
          return chrome.webRequest.onBeforeRequest.hasListener(e);
        },
        removeListener: function (e) {
          if (!(0, s.qX)(["webRequest"])) throw new Error("No webRequest.onBeforeRequest.removeListener support, permission is missing");
          if (!(0, s.Ez)("webRequest.onBeforeRequest.removeListener")) throw new Error("No webRequest.onBeforeRequest support");
          chrome.webRequest.onBeforeRequest.removeListener(e);
        }
      };
    },
    65881: (e, t, r) => {
      "use strict";
      var o;
      r.d(t, { X: () => o }),
        (function (e) {
          (e.Blocking = "blocking"), (e.RequestBody = "requestBody");
        })(o || (o = {}));
    },
    72733: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => s });
      var o = r(839);
      function s(e) {
        return new Promise((t, r) => {
          if (!(0, o.Ez)("windows.getCurrent")) return void r(new Error("No windows.getCurrent support"));
          const s = (e) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                t = new Error(`windows/getCurrent: ${e}`);
              r(t);
            } else t(e);
          };
          e ? chrome.windows.getCurrent(e, s) : chrome.windows.getCurrent(s);
        });
      }
    },
    57306: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => s });
      var o = r(839);
      function s(e, t) {
        return new Promise((r, s) => {
          (0, o.Ez)("windows.update")
            ? chrome.windows.update(e, t, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`windows/update: ${e}`);
                  s(t);
                } else r(e);
              })
            : s(new Error("No windows.update support"));
        });
      }
    },
    48038: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => s });
      const o = (e) => ({
        actions: (...t) => {
          console.error("Missing onError callback" + e, ...t);
        }
      });
      function s(e) {
        if (!e.states) return e;
        const t = [...Object.entries(e.states).map(([e, t]) => ({ path: e, state: t }))];
        for (; t.length > 0; ) {
          const e = t.pop();
          if (!e) continue;
          const { path: r, state: s } = e;
          if (
            (t.push(...Object.entries(s.states ?? {}).map(([e, t]) => ({ path: `${r}.${e}`, state: t }))),
            !("invoke" in s) || "object" != typeof s.invoke)
          )
            continue;
          const n = o(r);
          "onError" in s.invoke || (s.invoke.onError = n);
        }
        return e;
      }
    },
    37294: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => s });
      var o = r(15187);
      function s(e) {
        return async (t) => {
          if (t.type.startsWith("error.")) {
            const r = "data" in t ? t.data : "";
            if (r instanceof o.x) return;
            await e.doOne(() => {
              throw new Error(`Error executing state machine service: ${t.type} ${r}`);
            });
          }
        };
      }
    },
    53446: (e, t, r) => {
      "use strict";
      function o(e) {
        return async (t) => {
          t.changed ||
            "xstate.init" === t.event.type ||
            (await e.doOne(() => {
              throw new Error(`State machine unchanged: Unexpected transition on ${JSON.stringify(t.value)} with event ${t.event.type} `);
            }));
        };
      }
      r.d(t, { V: () => o });
    },
    15187: (e, t, r) => {
      "use strict";
      r.d(t, { x: () => o });
      class o extends Error {
        constructor(e = "Functional error") {
          super(e), (this.description = e);
        }
      }
    },
    34573: () => {},
    19381: () => {},
    86585: () => {},
    7091: () => {},
    22324: () => {},
    17978: () => {},
    98814: () => {},
    97961: () => {},
    3275: () => {},
    63619: () => {},
    25387: () => {},
    46332: () => {},
    48263: () => {},
    1973: () => {},
    43350: () => {}
  }
]);
