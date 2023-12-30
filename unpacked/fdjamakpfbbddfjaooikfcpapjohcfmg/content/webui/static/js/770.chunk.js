(this.webpackChunk_dashlane_webcards = this.webpackChunk_dashlane_webcards || []).push([
  [770],
  {
    98770: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { hookExtensionBackground: () => r });
      var a = o(9771),
        n = o(66773),
        s = o(82370);
      const r = (e, t) => {
        const { type: o, token: r } = e.getFromUrl();
        (o && r) || e.loadUrl(o || "autologin-selection"),
          (e.connectToAutofillEngine = () =>
            (0, n.stubAutofillEngineCommands)((e, o) => {
              t((t) => ({ ...t, commandCalls: t.commandCalls.concat({ command: e, args: o }) }));
            })),
          (e.connectToDispatcher = () => ({
            addListener: () => {},
            removeListener: () => {},
            sendMessage: async ({ message: t }) => {
              switch (t) {
                case a.DispatcherMessages.GetWebcardInitialData: {
                  const { type: t, mockData: o } = e.getFromUrl();
                  return ((e, t) => {
                    const o = s.q.dialogs[e];
                    var a;
                    if (o) return null != (a = o[t]) ? a : Object.values(o)[0];
                    const n = s.q.dropdowns[e];
                    var r;
                    if (n) return null != (r = n[t]) ? r : Object.values(n)[0];
                    throw new Error(`No mock webcard for type ${e}`);
                  })(null != t ? t : "", null != o ? o : "");
                }
                case a.DispatcherMessages.UpdateWebcardGeometry:
                  return 100;
                case a.DispatcherMessages.WebcardClosed:
                  return;
                case a.DispatcherMessages.VisibilityCheckRequest:
                  return !0;
              }
              throw new Error(`Message ${t} has not been mocked`);
            }
          })),
          (e.clearPlaygroundLogs = () => {
            t((e) => ({ ...e, commandCalls: [] }));
          });
      };
    },
    66773: (e) => {
      (() => {
        "use strict";
        var t = {
            5910: (e, t, o) => {
              Object.defineProperty(t, "__esModule", { value: !0 }), (t.mockAutofillEngineActions = void 0);
              const a = o(31135);
              t.mockAutofillEngineActions = () => {
                const e = {};
                for (const o of ((t = new a.AutofillEngineActions()),
                Object.getOwnPropertyNames(Object.getPrototypeOf(t)).filter((e) => "constructor" !== e)))
                  e[o] = jest.fn(() => {
                    throw new Error(`** AutofillEngineActions.${o} handler called but not defined **`);
                  });
                var t;
                return e;
              };
            },
            54691: (e, t, o) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.stubAutofillEngineCommands = t.mockUsageLogCommands = t.mockAutofillEngineCommands = void 0);
              const a = o(70995),
                n = o(83866);
              (t.mockAutofillEngineCommands = () => {
                const e = {};
                for (const t of (0, a.getMethodNamesFromClass)(new n.AutofillEngineCommands()))
                  e[t] = jest.fn(() => {
                    throw new Error(`** AutofillEngineCommands.${t} called but not mocked **`);
                  });
                return e;
              }),
                (t.mockUsageLogCommands = (e) => {
                  e.logEvent.mockReturnValue(), e.logPageView.mockReturnValue(), e.logFormSubmit.mockReturnValue();
                }),
                (t.stubAutofillEngineCommands = (e) => {
                  const t = {};
                  for (const o of (0, a.getMethodNamesFromClass)(new n.AutofillEngineCommands()))
                    t[o] = (...t) => {
                      e(o, t);
                    };
                  return t;
                });
            },
            12107: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.mockAutofillEngineDispatcher = void 0),
                (t.mockAutofillEngineDispatcher = () => ({
                  addListener: jest.fn(() => {
                    throw new Error("** AutofillEngineDispatcher.addListener called but not mocked **");
                  }),
                  removeListener: jest.fn(() => {
                    throw new Error("** AutofillEngineDispatcher.removeListener called but not mocked **");
                  }),
                  sendMessage: jest.fn(() => {
                    throw new Error("** AutofillEngineDispatcher.sendMessage called but not mocked **");
                  })
                }));
            },
            31135: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.AutofillEngineActions = void 0),
                (t.AutofillEngineActions = class {
                  showWebcard(e, t) {}
                  updateWebcard(e) {}
                  updateWebcardItems(e) {}
                  updateWebcardItemDetails(e, t, o) {}
                  closeWebcard(e) {}
                  updateAutofillRecipes(e) {}
                  updateUnrecognizedElements(e) {}
                  computeContextMenuTargetInfo(e) {}
                  updateClientFrameId(e) {}
                  updateDomainAnalysisStatus(e) {}
                  applyAutofillOperations(e) {}
                  applyAutofillOperationsAndTriggerDataCapture(e) {}
                  setMasterPasswordValidationResult(e) {}
                  updateTabActiveInfo(e) {}
                  updateUserLoginStatus(e) {}
                  updateUserFeatureFlips(e) {}
                  updateNewPassword(e, t) {}
                  updateSavePasswordTargetCredential(e, t) {}
                  updateSavePasswordCapturedData(e, t, o, a) {}
                  disableDashlaneOnField(e) {}
                  subscribeLiveValuesUpdate(e, t) {}
                  updateUserSubscriptionCode(e) {}
                  updateWebAuthnChallenge(e) {}
                  updateWebAuthnStatus(e) {}
                  updatePaymentUpdateAuthenticationToken(e) {}
                  webauthnCreateResponse(e, t) {}
                  webauthnGetResponse(e, t) {}
                  webauthnUseFallback(e) {}
                  webauthnStoreConditionalUiRequest(e) {}
                  webauthnConditionalUiSupported(e) {}
                  dataCopiedAlert(e, t, o, a) {}
                  copyValueToClipboard(e) {}
                  resendAnalysisResults() {}
                  permissionToPaste(e) {}
                });
            },
            83866: (e, t) => {
              var o;
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.AutofillEngineCommands = t.UserVerificationResult = void 0),
                ((o = t.UserVerificationResult || (t.UserVerificationResult = {})).Success = "success"),
                (o.Failure = "failure"),
                (t.AutofillEngineCommands = class {
                  analysisResultsAvailable(e) {}
                  documentComplete() {}
                  userFocusOnElement(e) {}
                  userRightClickOnElement(e) {}
                  applyAutofillRecipe(e) {}
                  applyAutofillRecipeForOtherDataSource(e) {}
                  logAutofillPerformedEvent(e) {}
                  disableReactivationWebcards() {}
                  startWebAuthnLoginFlow() {}
                  completeWebAuthnLoginFlow(e, t) {}
                  startWebAuthnUserVerificationFlow() {}
                  generateNewPassword(e) {}
                  validateMasterPassword(e) {}
                  resetProtectedItemsTimerAndApplyRecipe(e) {}
                  disableAccessProtectionForVaultItem(e) {}
                  userVerificationComplete(e, t, o, a) {}
                  webcardClosed(e) {}
                  saveCredential(e, t) {}
                  updateCredential(e, t) {}
                  savePersonalData(e) {}
                  cancelSaveCredential() {}
                  findSavePasswordTargetCredential(e, t) {}
                  captureDataFromPage(e) {}
                  applySelfCorrectingAutofill(e, t) {}
                  disableDashlaneOnField(e, t) {}
                  notifyLiveValuesUpdate(e, t) {}
                  logEvent(e) {}
                  logPageView(e) {}
                  logException(e, t) {}
                  getUserSubscriptionCode() {}
                  getUserFeatureFlips() {}
                  openNewTabWithUrl(e) {}
                  openWebapp(e) {}
                  logFormSubmit(e, t) {}
                  requestPaymentUpdateAuthenticationToken() {}
                  webauthnCreate(e) {}
                  webauthnCreateUserConfirmed(e, t) {}
                  webauthnGet(e) {}
                  webauthnGetUserConfirmed(e, t, o) {}
                  webauthnUseOtherAuthenticator(e) {}
                  webauthnUserCanceled(e) {}
                  webauthnIsConditionalUiSupported() {}
                  logRightClickMenu(e) {}
                  queryVaultItems(e, t) {}
                  getVaultItemDetails(e, t) {}
                  dataCopiedToClipboardDetected(e, t, o) {}
                  dataPasteDetected(e, t, o) {}
                  copyToClipboard(e, t, o, a) {}
                  signalPasteDecision(e, t) {}
                  webcardItemSelected(e, t, o) {}
                  userValidatedMasterPassword(e, t) {}
                });
            },
            70995: (e, t) => {
              var o;
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.BROWSER_MAIN_FRAME_ID = t.AutofillEngineMessageType = t.getMethodNamesFromClass = void 0),
                (t.getMethodNamesFromClass = (e) =>
                  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).filter((e) => "constructor" !== e)),
                ((o = t.AutofillEngineMessageType || (t.AutofillEngineMessageType = {})).Action = "autofill-engine-action"),
                (o.Command = "autofill-engine-command"),
                (t.BROWSER_MAIN_FRAME_ID = 0);
            },
            82503: function (e, t, o) {
              var a =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, o, a) {
                        void 0 === a && (a = o);
                        var n = Object.getOwnPropertyDescriptor(t, o);
                        (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                          (n = {
                            enumerable: !0,
                            get: function () {
                              return t[o];
                            }
                          }),
                          Object.defineProperty(e, a, n);
                      }
                    : function (e, t, o, a) {
                        void 0 === a && (a = o), (e[a] = t[o]);
                      }),
                n =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || a(t, e, o);
                  };
              Object.defineProperty(t, "__esModule", { value: !0 }), n(o(54691), t), n(o(5910), t), n(o(12107), t);
            }
          },
          o = {},
          a = (function e(a) {
            var n = o[a];
            if (void 0 !== n) return n.exports;
            var s = (o[a] = { exports: {} });
            return t[a].call(s.exports, s, s.exports, e), s.exports;
          })(82503);
        e.exports = a;
      })();
    }
  }
]);
