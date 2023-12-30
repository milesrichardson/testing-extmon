(this.webpackChunk_dashlane_webcards = this.webpackChunk_dashlane_webcards || []).push([
  [433],
  {
    1433: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { hookExtensionBackground: () => s });
      var o = a(9771),
        n = a(6773),
        r = a(2921);
      const s = (e, t) => {
        const { type: a, token: s } = e.getFromUrl();
        (a && s) || e.loadUrl(a || "autologin-selection"),
          (e.connectToAutofillEngine = () =>
            (0, n.stubAutofillEngineCommands)((e, a) => {
              t((t) => ({ ...t, commandCalls: t.commandCalls.concat({ command: e, args: a }) }));
            })),
          (e.connectToDispatcher = () => ({
            addListener: () => {},
            removeListener: () => {},
            sendMessage: async ({ message: t }) => {
              switch (t) {
                case o.DispatcherMessages.GetWebcardInitialData: {
                  const { type: t, mockData: a } = e.getFromUrl();
                  return ((e, t) => {
                    const a = r.q.dialogs[e];
                    var o;
                    if (a) return null != (o = a[t]) ? o : Object.values(a)[0];
                    const n = r.q.dropdowns[e];
                    var s;
                    if (n) return null != (s = n[t]) ? s : Object.values(n)[0];
                    throw new Error(`No mock webcard for type ${e}`);
                  })(null != t ? t : "", null != a ? a : "");
                }
                case o.DispatcherMessages.UpdateWebcardGeometry:
                  return 100;
                case o.DispatcherMessages.WebcardClosed:
                  return;
                case o.DispatcherMessages.VisibilityCheckRequest:
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
    6773: (e) => {
      (() => {
        "use strict";
        var t = {
            d: (e, a) => {
              for (var o in a) t.o(a, o) && !t.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: a[o] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }
          },
          a = {};
        t.r(a),
          t.d(a, {
            mockAutofillEngineActions: () => d,
            mockAutofillEngineCommands: () => l,
            mockAutofillEngineDispatcher: () => p,
            mockUsageLogCommands: () => i,
            stubAutofillEngineCommands: () => c
          });
        const o = (e) => Object.getOwnPropertyNames(Object.getPrototypeOf(e)).filter((e) => "constructor" !== e);
        var n, r;
        !(function (e) {
          (e.Action = "autofill-engine-action"), (e.Command = "autofill-engine-command");
        })(n || (n = {})),
          (function (e) {
            (e.Success = "success"), (e.Failure = "failure");
          })(r || (r = {}));
        class s {
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
          validateWebAuthnUserVerificationFlow(e) {}
          generateNewPassword(e) {}
          validateMasterPassword(e) {}
          resetProtectedItemsTimerAndApplyRecipe(e) {}
          disableAccessProtectionForVaultItem(e) {}
          userVerificationComplete(e, t, a, o) {}
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
          webauthnGetUserConfirmed(e, t, a) {}
          webauthnUseOtherAuthenticator(e) {}
          webauthnUserCanceled(e) {}
          webauthnIsConditionalUiSupported() {}
          logRightClickMenu(e) {}
          queryVaultItems(e, t) {}
          getVaultItemDetails(e, t) {}
          dataCopiedToClipboardDetected(e, t, a) {}
          dataPasteDetected(e, t, a) {}
          copyToClipboard(e, t, a, o) {}
          signalPasteDecision(e, t) {}
          webcardItemSelected(e, t, a) {}
          userValidatedMasterPassword(e, t) {}
        }
        const l = () => {
            const e = {};
            for (const t of o(new s()))
              e[t] = jest.fn(() => {
                throw new Error(`** AutofillEngineCommands.${t} called but not mocked **`);
              });
            return e;
          },
          i = (e) => {
            e.logEvent.mockReturnValue(), e.logPageView.mockReturnValue(), e.logFormSubmit.mockReturnValue();
          },
          c = (e) => {
            const t = {};
            for (const a of o(new s()))
              t[a] = (...t) => {
                e(a, t);
              };
            return t;
          };
        class u {
          showWebcard(e, t) {}
          updateWebcard(e) {}
          updateWebcardItems(e) {}
          updateWebcardItemDetails(e, t, a) {}
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
          updateSavePasswordCapturedData(e, t, a, o) {}
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
          dataCopiedAlert(e, t, a, o) {}
          copyValueToClipboard(e) {}
          resendAnalysisResults() {}
          permissionToPaste(e) {}
        }
        const d = () => {
            const e = {};
            for (const a of ((t = new u()), Object.getOwnPropertyNames(Object.getPrototypeOf(t)).filter((e) => "constructor" !== e)))
              e[a] = jest.fn(() => {
                throw new Error(`** AutofillEngineActions.${a} handler called but not defined **`);
              });
            var t;
            return e;
          },
          p = () => ({
            addListener: jest.fn(() => {
              throw new Error("** AutofillEngineDispatcher.addListener called but not mocked **");
            }),
            removeListener: jest.fn(() => {
              throw new Error("** AutofillEngineDispatcher.removeListener called but not mocked **");
            }),
            sendMessage: jest.fn(() => {
              throw new Error("** AutofillEngineDispatcher.sendMessage called but not mocked **");
            })
          });
        e.exports = a;
      })();
    }
  }
]);
