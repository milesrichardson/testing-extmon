{
  function setupProxy(e) {
    const t = {
      window: "",
      navigator: "",
      location: "",
      Uint16Array: "",
      fetch: "",
      String: "",
      Math: "",
      Object: "",
      Symbol: "",
      Function: "",
      Array: "",
      Boolean: "",
      Number: "",
      Request: "",
      Date: "",
      JSON: "",
      encodeURIComponent: "",
      console: "",
      crypto: "",
      clearTimeout: "window",
      setTimeout: "window",
      __SENTRY__: "",
      sentryHooks: "",
      sentry: "",
      appState: "",
      extra: "",
      stateHooks: "",
      document: ""
    };
    for (const n in t) {
      const r = t[n];
      let s = e[n];
      r && (s = s.bind(e[r])), (t[n] = s);
    }
    const n = new Proxy(t, {
      set: function (n, r, s) {
        if (t.hasOwnProperty(r) || r.startsWith("on")) return (t[r] = e[r] = s) || !0;
      }
    });
    return (
      (function (e, t) {
        "use strict";
        function n(e, t, n, r) {
          const s = e[t];
          e[t] = function (e) {
            e === r && (e = n);
            const t = [].slice.call(arguments, 1);
            return s.call(this, e, ...t);
          };
        }
        n(Function.prototype, "bind", e, t), n(Function.prototype, "apply", e, t);
      })(e, n),
      n
    );
  }
  const proxy = setupProxy(globalThis);
  with (proxy)
    with ({ window: proxy, self: proxy, globalThis: proxy })
      !(function e(t, n, r) {
        function s(o, a) {
          if (!n[o]) {
            if (!t[o]) {
              var c = "function" == typeof require && require;
              if (!a && c) return c(o, !0);
              if (i) return i(o, !0);
              var u = new Error("Cannot find module '" + o + "'");
              throw ((u.code = "MODULE_NOT_FOUND"), u);
            }
            var l = (n[o] = { exports: {} });
            t[o][0].call(
              l.exports,
              function (e) {
                return s(t[o][1][e] || e);
              },
              l,
              l.exports,
              e,
              t,
              n,
              r
            );
          }
          return n[o].exports;
        }
        for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
        return s;
      })(
        {
          1: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.default = function (e) {
                  if (e.includes(r)) {
                    const t = e.slice(r.length);
                    return t.slice(t.indexOf(s) + s.length);
                  }
                  return e;
                });
              const r = "Error: [ethjs-rpc] rpc error with payload ",
                s = "Error: ";
            },
            {}
          ],
          2: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 }), (n.FilterEvents = void 0);
              var r = e("@sentry/utils");
              function s(e, t, n) {
                return (
                  (t = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (n !== undefined) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : String(t);
                  })(t)) in e
                    ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                    : (e[t] = n),
                  e
                );
              }
              class i {
                constructor({ getMetaMetricsEnabled: e }) {
                  s(this, "name", i.id), s(this, "getMetaMetricsEnabled", void 0), (this.getMetaMetricsEnabled = e);
                }
                setupOnce(e, t) {
                  e(async (e) => {
                    const n = t().getIntegration(i);
                    return n && !(await n.getMetaMetricsEnabled()) ? (r.logger.warn("Event dropped due to MetaMetrics setting."), null) : e;
                  });
                }
              }
              (n.FilterEvents = i), s(i, "id", "FilterEvents");
            },
            { "@sentry/utils": 120 }
          ],
          3: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.SENTRY_UI_STATE = n.SENTRY_BACKGROUND_STATE = n.ERROR_URL_ALLOWLIST = void 0),
                (n.beforeBreadcrumb = E),
                (n.default = function ({ release: e, getState: t }) {
                  if (!e) throw new Error("Missing release");
                  if (l && !_) return undefined;
                  const n = "main" === f ? d : `${d}-${f}`;
                  let r;
                  "production" === d
                    ? (console.log(`Setting up Sentry Remote Error Reporting for '${n}': SENTRY_DSN`),
                      (r = "https://3567c198f8a8412082d32655da2961d0@sentry.io/273505"))
                    : (console.log(`Setting up Sentry Remote Error Reporting for '${n}': SENTRY_DSN_DEV`), (r = p));
                  async function o() {
                    const e = t();
                    if (e.state || e.persistedState) return y(e);
                    try {
                      return b(await globalThis.stateHooks.getPersistedState());
                    } catch (e) {
                      return console.error(e), !1;
                    }
                  }
                  s.init({
                    dsn: r,
                    debug: l,
                    autoSessionTracking: !1,
                    environment: n,
                    integrations: [new a.FilterEvents({ getMetaMetricsEnabled: o }), new i.Dedupe(), new i.ExtraErrorData()],
                    release: e,
                    beforeSend: (e) => w(e, t),
                    beforeBreadcrumb: E(t)
                  });
                  const c = async () => {
                      var e, t, n, r;
                      const i = null === (e = s.getCurrentHub) || void 0 === e ? void 0 : e.call(s),
                        a =
                          (null === (t = i.getClient) || void 0 === t || null === (n = (r = t.call(i)).getOptions) || void 0 === n
                            ? void 0
                            : n.call(r)) ?? {};
                      i && !0 === (await o()) && ((a.autoSessionTracking = !0), i.startSession());
                    },
                    u = async () => {
                      var e, t, n, r;
                      const i = null === (e = s.getCurrentHub) || void 0 === e ? void 0 : e.call(s),
                        a =
                          (null === (t = i.getClient) || void 0 === t || null === (n = (r = t.call(i)).getOptions) || void 0 === n
                            ? void 0
                            : n.call(r)) ?? {};
                      i && !1 === (await o()) && ((a.autoSessionTracking = !1), i.endSession());
                    };
                  return {
                    ...s,
                    startSession: c,
                    endSession: u,
                    toggleSession: async () => {
                      var e, t, n, r;
                      const i = null === (e = s.getCurrentHub) || void 0 === e ? void 0 : e.call(s),
                        a = (null === (t = i.getClient) || void 0 === t || null === (n = (r = t.call(i)).getOptions) || void 0 === n
                          ? void 0
                          : n.call(r)) ?? { autoSessionTracking: !1 },
                        l = await o();
                      !0 === l && !1 === a.autoSessionTracking ? await c() : !1 === l && !0 === a.autoSessionTracking && (await u());
                    }
                  };
                }),
                (n.removeUrlsFromBreadCrumb = S),
                (n.rewriteReport = w);
              var r,
                s = (function (e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = u(t);
                  if (n && n.has(e)) return n.get(e);
                  var r = { __proto__: null },
                    s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                      var o = s ? Object.getOwnPropertyDescriptor(e, i) : null;
                      o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
                    }
                  return (r.default = e), n && n.set(e, r), r;
                })(e("@sentry/browser")),
                i = e("@sentry/integrations"),
                o = e("../../../shared/modules/object.utils"),
                a = e("./sentry-filter-events"),
                c = (r = e("./extractEthjsErrorMessage")) && r.__esModule ? r : { default: r };
              function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap(),
                  n = new WeakMap();
                return (u = function (e) {
                  return e ? n : t;
                })(e);
              }
              const l = !1,
                d = "production",
                p = "https://f59f3dd640d2429d9d0e2445a87ea8e1@sentry.io/273496",
                f = "main",
                _ = !1,
                h = (n.ERROR_URL_ALLOWLIST = {
                  CRYPTOCOMPARE: "cryptocompare.com",
                  COINGECKO: "coingecko.com",
                  ETHERSCAN: "etherscan.io",
                  CODEFI: "codefi.network",
                  SEGMENT: "segment.io"
                }),
                m = (n.SENTRY_BACKGROUND_STATE = {
                  AccountTracker: { accounts: !1, currentBlockGasLimit: !0 },
                  AddressBookController: { addressBook: !1 },
                  AlertController: { alertEnabledness: !0, unconnectedAccountAlertShownOrigins: !1, web3ShimUsageOrigins: !1 },
                  AnnouncementController: { announcements: !1 },
                  AppMetadataController: {
                    currentAppVersion: !0,
                    currentMigrationVersion: !0,
                    previousAppVersion: !0,
                    previousMigrationVersion: !0
                  },
                  ApprovalController: { approvalFlows: !1, pendingApprovals: !1, pendingApprovalCount: !1 },
                  AppStateController: {
                    browserEnvironment: !0,
                    connectedStatusPopoverHasBeenShown: !0,
                    currentPopupId: !1,
                    defaultHomeActiveTabName: !0,
                    fullScreenGasPollTokens: !0,
                    hadAdvancedGasFeesSetPriorToMigration92_3: !0,
                    nftsDetectionNoticeDismissed: !0,
                    nftsDropdownState: !0,
                    notificationGasPollTokens: !0,
                    outdatedBrowserWarningLastShown: !0,
                    popupGasPollTokens: !0,
                    qrHardware: !0,
                    recoveryPhraseReminderHasBeenShown: !0,
                    recoveryPhraseReminderLastShown: !0,
                    showBetaHeader: !0,
                    showProductTour: !0,
                    showTestnetMessageInDropdown: !0,
                    snapsInstallPrivacyWarningShown: !0,
                    termsOfUseLastAgreed: !0,
                    timeoutMinutes: !0,
                    trezorModel: !0,
                    usedNetworks: !0
                  },
                  CachedBalancesController: { cachedBalances: !1 },
                  CronjobController: { jobs: !1 },
                  CurrencyController: {
                    conversionDate: !0,
                    conversionRate: !0,
                    currentCurrency: !0,
                    nativeCurrency: !0,
                    pendingCurrentCurrency: !0,
                    pendingNativeCurrency: !0,
                    usdConversionRate: !0
                  },
                  DecryptMessageController: { unapprovedDecryptMsgs: !1, unapprovedDecryptMsgCount: !0 },
                  EncryptionPublicKeyController: { unapprovedEncryptionPublicKeyMsgs: !1, unapprovedEncryptionPublicKeyMsgCount: !0 },
                  EnsController: { ensResolutionsByAddress: !1 },
                  GasFeeController: { estimatedGasFeeTimeBounds: !0, gasEstimateType: !0, gasFeeEstimates: !0 },
                  KeyringController: { isUnlocked: !0, keyrings: !1 },
                  LoggingController: { logs: !1 },
                  MetaMetricsController: {
                    eventsBeforeMetricsOptIn: !1,
                    fragments: !1,
                    metaMetricsId: !0,
                    participateInMetaMetrics: !0,
                    previousUserTraits: !1,
                    segmentApiCalls: !1,
                    traits: !1
                  },
                  NetworkController: {
                    networkConfigurations: !1,
                    networksMetadata: !0,
                    providerConfig: { chainId: !0, id: !0, nickname: !0, rpcPrefs: !1, rpcUrl: !1, ticker: !0, type: !0 },
                    selectedNetworkClientId: !1
                  },
                  NftController: { allNftContracts: !1, allNfts: !1, ignoredNfts: !1 },
                  NotificationController: { notifications: !1 },
                  OnboardingController: { completedOnboarding: !0, firstTimeFlowType: !0, onboardingTabs: !1, seedPhraseBackedUp: !0 },
                  PPOMController: { chainStatus: !0, securityAlertsEnabled: !1, storageMetadata: [], versionInfo: [] },
                  PermissionController: { subjects: !1 },
                  PermissionLogController: { permissionActivityLog: !1, permissionHistory: !1 },
                  PhishingController: {},
                  PreferencesController: {
                    advancedGasFee: !0,
                    currentLocale: !0,
                    disabledRpcMethodPreferences: !0,
                    dismissSeedBackUpReminder: !0,
                    featureFlags: !0,
                    forgottenPassword: !0,
                    identities: !1,
                    incomingTransactionsPreferences: !0,
                    ipfsGateway: !1,
                    isLineaMainnetReleased: !0,
                    knownMethodData: !1,
                    ledgerTransportType: !0,
                    lostIdentities: !1,
                    openSeaEnabled: !0,
                    preferences: {
                      autoLockTimeLimit: !0,
                      hideZeroBalanceTokens: !0,
                      showFiatInTestnets: !0,
                      showTestNetworks: !0,
                      useNativeCurrencyAsPrimaryCurrency: !0
                    },
                    selectedAddress: !1,
                    snapRegistryList: !1,
                    theme: !0,
                    transactionSecurityCheckEnabled: !0,
                    use4ByteResolution: !0,
                    useAddressBarEnsResolution: !0,
                    useBlockie: !0,
                    useCurrencyRateCheck: !0,
                    useMultiAccountBalanceChecker: !0,
                    useNftDetection: !0,
                    useNonceField: !0,
                    usePhishDetect: !0,
                    useTokenDetection: !0
                  },
                  SelectedNetworkController: { domains: !0, perDomainNetwork: !1 },
                  SignatureController: {
                    unapprovedMsgCount: !0,
                    unapprovedMsgs: !1,
                    unapprovedPersonalMsgCount: !0,
                    unapprovedPersonalMsgs: !1,
                    unapprovedTypedMessages: !1,
                    unapprovedTypedMessagesCount: !0
                  },
                  SmartTransactionsController: {
                    smartTransactionsState: {
                      fees: { approvalTxFees: !0, tradeTxFees: !0 },
                      liveness: !0,
                      smartTransactions: !1,
                      userOptIn: !0
                    }
                  },
                  SnapController: { snapStates: !1, snaps: !1 },
                  SnapsRegistry: { database: !1, lastUpdated: !1 },
                  SubjectMetadataController: { subjectMetadata: !1 },
                  SwapsController: {
                    swapsState: {
                      approveTxId: !1,
                      customApproveTxData: !1,
                      customGasPrice: !0,
                      customMaxFeePerGas: !0,
                      customMaxGas: !0,
                      customMaxPriorityFeePerGas: !0,
                      errorKey: !0,
                      fetchParams: !0,
                      quotes: !1,
                      quotesLastFetched: !0,
                      quotesPollingLimitEnabled: !0,
                      routeState: !0,
                      saveFetchedQuotes: !0,
                      selectedAggId: !0,
                      swapsFeatureFlags: !0,
                      swapsFeatureIsLive: !0,
                      swapsQuotePrefetchingRefreshTime: !0,
                      swapsQuoteRefreshTime: !0,
                      swapsStxBatchStatusRefreshTime: !0,
                      swapsStxGetTransactionsRefreshTime: !0,
                      swapsStxMaxFeeMultiplier: !0,
                      swapsUserFeeLevel: !0,
                      tokens: !1,
                      topAggId: !1,
                      tradeTxId: !1
                    }
                  },
                  TokenListController: { preventPollingOnNetworkRestart: !0, tokenList: !1, tokensChainsCache: { [o.AllProperties]: !1 } },
                  TokenRatesController: { contractExchangeRates: !1 },
                  TokensController: {
                    allDetectedTokens: { [o.AllProperties]: !1 },
                    allIgnoredTokens: { [o.AllProperties]: !1 },
                    allTokens: { [o.AllProperties]: !1 },
                    detectedTokens: !1,
                    ignoredTokens: !1,
                    tokens: !1
                  },
                  TransactionController: { transactions: !1, lastFetchedBlockNumbers: !1 },
                  TxController: { transactions: !1 }
                }),
                g = Object.values(m).reduce((e, t) => ({ ...e, ...t }), {});
              n.SENTRY_UI_STATE = {
                gas: !0,
                history: !0,
                metamask: {
                  ...g,
                  isInitialized: !0,
                  customNonceValue: !0,
                  isAccountMenuOpen: !0,
                  isNetworkMenuOpen: !0,
                  nextNonce: !0,
                  pendingTokens: !1,
                  welcomeScreenSeen: !0,
                  useSafeChainsListValidation: !0,
                  addSnapAccountEnabled: !1,
                  snapsAddSnapAccountModalDismissed: !1
                },
                unconnectedAccount: !0
              };
              function y(e) {
                return e.persistedState
                  ? b(e.persistedState)
                  : !!e.state &&
                      (e.state.metamask
                        ? Boolean(e.state.metamask.participateInMetaMetrics)
                        : Boolean(null === (t = e.state.MetaMetricsController) || void 0 === t ? void 0 : t.participateInMetaMetrics));
                var t;
              }
              function b(e) {
                var t;
                return Boolean(
                  null == e || null === (t = e.data) || void 0 === t || null === (t = t.MetaMetricsController) || void 0 === t
                    ? void 0
                    : t.participateInMetaMetrics
                );
              }
              function v(e) {
                return e.match(/^(chrome-extension|moz-extension):\/\//u) ? e : "";
              }
              function E(e) {
                return (t) => {
                  if (!e) return null;
                  const n = e();
                  if (
                    !y(n) ||
                    !(function (e) {
                      var t, n;
                      return e.persistedState
                        ? Boolean(
                            null === (t = e.persistedState.data) || void 0 === t || null === (t = t.OnboardingController) || void 0 === t
                              ? void 0
                              : t.completedOnboarding
                          )
                        : !!e.state &&
                            (e.state.metamask
                              ? Boolean(e.state.metamask.completedOnboarding)
                              : Boolean(null === (n = e.state.OnboardingController) || void 0 === n ? void 0 : n.completedOnboarding));
                    })(n) ||
                    "ui.input" === (null == t ? void 0 : t.category)
                  )
                    return null;
                  return S(t);
                };
              }
              function S(e) {
                var t, n, r;
                return (
                  null != e && null !== (t = e.data) && void 0 !== t && t.url && (e.data.url = v(e.data.url)),
                  null != e && null !== (n = e.data) && void 0 !== n && n.to && (e.data.to = v(e.data.to)),
                  null != e && null !== (r = e.data) && void 0 !== r && r.from && (e.data.from = v(e.data.from)),
                  e
                );
              }
              function w(e, t) {
                try {
                  if (
                    ((function (e) {
                      T(e, (e) => {
                        let t = (0, c.default)(e);
                        return 0 === t.indexOf("Transaction Failed: known transaction") && (t = "Transaction Failed: known transaction"), t;
                      });
                    })(e),
                    (function (e) {
                      T(e, (e) => {
                        let t = e;
                        const n = /(([-.+a-zA-Z]+:\/\/)|(www\.))\S+[@:.]\S+/gu;
                        return (
                          (t.match(n) || []).forEach((e) => {
                            try {
                              const n = new URL(e),
                                { hostname: r } = n;
                              Object.values(h).some((e) => r === e || r.endsWith(`.${e}`)) || (t = t.replace(e, "**"));
                            } catch (n) {
                              t = t.replace(e, "**");
                            }
                          }),
                          t
                        );
                      });
                    })(e),
                    (function (e) {
                      T(e, (e) => e.replace(/0x[A-Fa-f0-9]{40}/u, "0x**"));
                    })(e),
                    (function (e) {
                      var t;
                      null !== (t = e.request) && void 0 !== t && t.url && (e.request.url = k(e.request.url));
                      e.exception &&
                        e.exception.values &&
                        e.exception.values.forEach((e) => {
                          e.stacktrace &&
                            e.stacktrace.frames.forEach((e) => {
                              e.filename = k(e.filename);
                            });
                        });
                    })(e),
                    t)
                  ) {
                    const n = t();
                    e.extra || (e.extra = {}), (e.extra.appState = n);
                  }
                } catch (e) {
                  console.warn(e);
                }
                return e;
              }
              function T(e, t) {
                "string" == typeof e.message && (e.message = t(e.message)),
                  e.exception &&
                    e.exception.values &&
                    e.exception.values.forEach((e) => {
                      "string" == typeof e.value && (e.value = t(e.value));
                    });
              }
              function k(e) {
                var t;
                if (null === (t = globalThis.location) || void 0 === t || !t.origin) return e;
                const n = null == e ? void 0 : e.split(globalThis.location.origin)[1];
                if (!n) return e;
                return `/metamask${n}`;
              }
            },
            {
              "../../../shared/modules/object.utils": 148,
              "./extractEthjsErrorMessage": 1,
              "./sentry-filter-events": 2,
              "@sentry/browser": 37,
              "@sentry/integrations": 92
            }
          ],
          4: [
            function (e, t, n) {
              (function (t) {
                (function () {
                  "use strict";
                  var n,
                    r = (n = e("./lib/setupSentry")) && n.__esModule ? n : { default: n };
                  (t.stateHooks = {}),
                    (t.sentry = (0, r.default)({
                      release: "11.5.0",
                      getState: () => {
                        var e, n;
                        return (
                          (null === (e = t.stateHooks) || void 0 === e || null === (n = e.getSentryState) || void 0 === n
                            ? void 0
                            : n.call(e)) || {}
                        );
                      }
                    })),
                    (async function e() {
                      var n;
                      t.stateHooks.getSentryState
                        ? await (null === (n = t.sentry) || void 0 === n ? void 0 : n.startSession())
                        : setTimeout(e, 100);
                    })();
                }).call(this);
              }).call(
                this,
                "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
              );
            },
            { "./lib/setupSentry": 3 }
          ],
          5: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("./types.js");
              n.registerBackgroundTabDetection = function () {
                i.WINDOW && i.WINDOW.document
                  ? i.WINDOW.document.addEventListener("visibilitychange", () => {
                      const e = r.getActiveTransaction();
                      if (i.WINDOW.document.hidden && e) {
                        const t = "cancelled";
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`),
                          e.status || e.setStatus(t),
                          e.setTag("visibilitychange", "document.hidden"),
                          e.finish();
                      }
                    })
                  : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    s.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document");
              };
            },
            { "./types.js": 11, "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          6: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("./backgroundtab.js"),
                o = e("./metrics/index.js"),
                a = e("./request.js"),
                c = e("./router.js"),
                u = e("./types.js"),
                l = "BrowserTracing",
                d = {
                  ...r.TRACING_DEFAULTS,
                  markBackgroundTransactions: !0,
                  routingInstrumentation: c.instrumentRoutingWithDefaults,
                  startTransactionOnLocationChange: !0,
                  startTransactionOnPageLoad: !0,
                  enableLongTask: !0,
                  _experiments: {},
                  ...a.defaultRequestInstrumentationOptions
                };
              class p {
                __init() {
                  this.name = l;
                }
                constructor(e) {
                  p.prototype.__init.call(this),
                    r.addTracingExtensions(),
                    (this.options = { ...d, ...e }),
                    this.options._experiments.enableLongTask !== undefined &&
                      (this.options.enableLongTask = this.options._experiments.enableLongTask),
                    e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins),
                    (this._collectWebVitals = o.startTrackingWebVitals()),
                    this.options.enableLongTask && o.startTrackingLongTasks(),
                    this.options._experiments.enableInteractions && o.startTrackingInteractions();
                }
                setupOnce(e, t) {
                  this._getCurrentHub = t;
                  const {
                    routingInstrumentation: n,
                    startTransactionOnLocationChange: r,
                    startTransactionOnPageLoad: s,
                    markBackgroundTransactions: o,
                    traceFetch: c,
                    traceXHR: u,
                    tracePropagationTargets: l,
                    shouldCreateSpanForRequest: d,
                    _experiments: p
                  } = this.options;
                  n(
                    (e) => {
                      const n = this._createRouteTransaction(e);
                      return (
                        this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, e, t), n
                      );
                    },
                    s,
                    r
                  ),
                    o && i.registerBackgroundTabDetection(),
                    p.enableInteractions && this._registerInteractionListener(),
                    a.instrumentOutgoingRequests({ traceFetch: c, traceXHR: u, tracePropagationTargets: l, shouldCreateSpanForRequest: d });
                }
                _createRouteTransaction(e) {
                  if (!this._getCurrentHub)
                    return (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`),
                      undefined
                    );
                  const { beforeNavigate: t, idleTimeout: n, finalTimeout: i, heartbeatInterval: a } = this.options,
                    c = "pageload" === e.op,
                    l = c ? f("sentry-trace") : null,
                    d = c ? f("baggage") : null,
                    p = l ? r.extractTraceparentData(l) : undefined,
                    _ = d ? s.baggageHeaderToDynamicSamplingContext(d) : undefined,
                    h = { ...e, ...p, metadata: { ...e.metadata, dynamicSamplingContext: p && !_ ? {} : _ }, trimEnd: !0 },
                    m = "function" == typeof t ? t(h) : h,
                    g = m === undefined ? { ...h, sampled: !1 } : m;
                  (g.metadata = g.name !== h.name ? { ...g.metadata, source: "custom" } : g.metadata),
                    (this._latestRouteName = g.name),
                    (this._latestRouteSource = g.metadata && g.metadata.source),
                    !1 === g.sampled &&
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log(`[Tracing] Will not send ${g.op} transaction because of beforeNavigate.`),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log(`[Tracing] Starting ${g.op} transaction on scope`);
                  const y = this._getCurrentHub(),
                    { location: b } = u.WINDOW,
                    v = r.startIdleTransaction(y, g, n, i, !0, { location: b }, a);
                  return (
                    v.registerBeforeFinishCallback((e) => {
                      this._collectWebVitals(), o.addPerformanceEntries(e);
                    }),
                    v
                  );
                }
                _registerInteractionListener() {
                  let e;
                  const t = () => {
                    const { idleTimeout: t, finalTimeout: n, heartbeatInterval: i } = this.options,
                      o = "ui.action.click",
                      a = r.getActiveTransaction();
                    if (a && a.op && ["navigation", "pageload"].includes(a.op))
                      return (
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.warn(
                            `[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`
                          ),
                        undefined
                      );
                    if ((e && (e.setFinishReason("interactionInterrupted"), e.finish(), (e = undefined)), !this._getCurrentHub))
                      return (
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`),
                        undefined
                      );
                    if (!this._latestRouteName)
                      return (
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`),
                        undefined
                      );
                    const c = this._getCurrentHub(),
                      { location: l } = u.WINDOW,
                      d = { name: this._latestRouteName, op: o, trimEnd: !0, metadata: { source: this._latestRouteSource || "url" } };
                    e = r.startIdleTransaction(c, d, t, n, !0, { location: l }, i);
                  };
                  ["click"].forEach((e) => {
                    addEventListener(e, t, { once: !1, capture: !0 });
                  });
                }
              }
              function f(e) {
                const t = s.getDomElement(`meta[name=${e}]`);
                return t ? t.getAttribute("content") : null;
              }
              (n.BROWSER_TRACING_INTEGRATION_ID = l), (n.BrowserTracing = p), (n.getMetaContent = f);
            },
            {
              "./backgroundtab.js": 5,
              "./metrics/index.js": 7,
              "./request.js": 9,
              "./router.js": 10,
              "./types.js": 11,
              "@sentry/core": 64,
              "@sentry/utils": 120
            }
          ],
          7: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("../types.js"),
                o = e("../web-vitals/getCLS.js"),
                a = e("../web-vitals/getFID.js"),
                c = e("../web-vitals/getLCP.js"),
                u = e("../web-vitals/lib/getVisibilityWatcher.js"),
                l = e("../web-vitals/lib/observe.js"),
                d = e("./utils.js");
              function p(e) {
                return e / 1e3;
              }
              function f() {
                return i.WINDOW && i.WINDOW.addEventListener && i.WINDOW.performance;
              }
              let _,
                h,
                m = 0,
                g = {};
              function y(e, t, n, r, s) {
                const i = s + n,
                  o = i + r;
                return d._startChild(e, { description: t.name, endTimestamp: o, op: t.entryType, startTimestamp: i }), i;
              }
              function b(e, t, n, r, s, i) {
                const o = i ? t[i] : t[`${n}End`],
                  a = t[`${n}Start`];
                a && o && d._startChild(e, { op: "browser", description: s || n, startTimestamp: r + p(a), endTimestamp: r + p(o) });
              }
              function v(e, t, n, r, s, i) {
                if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                const o = {};
                "transferSize" in t && (o["http.response_transfer_size"] = t.transferSize),
                  "encodedBodySize" in t && (o["http.response_content_length"] = t.encodedBodySize),
                  "decodedBodySize" in t && (o["http.decoded_response_content_length"] = t.decodedBodySize),
                  "renderBlockingStatus" in t && (o["resource.render_blocking_status"] = t.renderBlockingStatus);
                const a = i + r,
                  c = a + s;
                d._startChild(e, {
                  description: n,
                  endTimestamp: c,
                  op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                  startTimestamp: a,
                  data: o
                });
              }
              (n._addMeasureSpans = y),
                (n._addResourceSpans = v),
                (n.addPerformanceEntries = function (e) {
                  const t = f();
                  if (!t || !i.WINDOW.performance.getEntries || !s.browserPerformanceTimeOrigin) return;
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    s.logger.log("[Tracing] Adding & adjusting spans using Performance API");
                  const n = p(s.browserPerformanceTimeOrigin),
                    r = t.getEntries();
                  let o, a;
                  if (
                    (r.slice(m).forEach((t) => {
                      const r = p(t.startTime),
                        c = p(t.duration);
                      if (!("navigation" === e.op && n + r < e.startTimestamp))
                        switch (t.entryType) {
                          case "navigation":
                            !(function (e, t, n) {
                              ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r) => {
                                b(e, t, r, n);
                              }),
                                b(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
                                b(e, t, "fetch", n, "cache", "domainLookupStart"),
                                b(e, t, "domainLookup", n, "DNS"),
                                (function (e, t, n) {
                                  d._startChild(e, {
                                    op: "browser",
                                    description: "request",
                                    startTimestamp: n + p(t.requestStart),
                                    endTimestamp: n + p(t.responseEnd)
                                  }),
                                    d._startChild(e, {
                                      op: "browser",
                                      description: "response",
                                      startTimestamp: n + p(t.responseStart),
                                      endTimestamp: n + p(t.responseEnd)
                                    });
                                })(e, t, n);
                            })(e, t, n),
                              (o = n + p(t.responseStart)),
                              (a = n + p(t.requestStart));
                            break;
                          case "mark":
                          case "paint":
                          case "measure": {
                            y(e, t, r, c, n);
                            const i = u.getVisibilityWatcher(),
                              o = t.startTime < i.firstHiddenTime;
                            "first-paint" === t.name &&
                              o &&
                              (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding FP"),
                              (g.fp = { value: t.startTime, unit: "millisecond" })),
                              "first-contentful-paint" === t.name &&
                                o &&
                                (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding FCP"),
                                (g.fcp = { value: t.startTime, unit: "millisecond" }));
                            break;
                          }
                          case "resource": {
                            const s = t.name.replace(i.WINDOW.location.origin, "");
                            v(e, t, s, r, c, n);
                            break;
                          }
                        }
                    }),
                    (m = Math.max(r.length - 1, 0)),
                    (function (e) {
                      const t = i.WINDOW.navigator;
                      if (!t) return;
                      const n = t.connection;
                      n &&
                        (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
                        n.type && e.setTag("connectionType", n.type),
                        d.isMeasurementValue(n.rtt) && (g["connection.rtt"] = { value: n.rtt, unit: "millisecond" }));
                      d.isMeasurementValue(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`);
                      d.isMeasurementValue(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency));
                    })(e),
                    "pageload" === e.op)
                  ) {
                    "number" == typeof o &&
                      (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding TTFB"),
                      (g.ttfb = { value: 1e3 * (o - e.startTimestamp), unit: "millisecond" }),
                      "number" == typeof a && a <= o && (g["ttfb.requestTime"] = { value: 1e3 * (o - a), unit: "millisecond" })),
                      ["fcp", "fp", "lcp"].forEach((t) => {
                        if (!g[t] || n >= e.startTimestamp) return;
                        const r = g[t].value,
                          i = n + p(r),
                          o = Math.abs(1e3 * (i - e.startTimestamp)),
                          a = o - r;
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.log(`[Measurements] Normalized ${t} from ${r} to ${o} (${a})`),
                          (g[t].value = o);
                      });
                    const t = g["mark.fid"];
                    t &&
                      g.fid &&
                      (d._startChild(e, {
                        description: "first input delay",
                        endTimestamp: t.value + p(g.fid.value),
                        op: "ui.action",
                        startTimestamp: t.value
                      }),
                      delete g["mark.fid"]),
                      "fcp" in g || delete g.cls,
                      Object.keys(g).forEach((t) => {
                        e.setMeasurement(t, g[t].value, g[t].unit);
                      }),
                      (function (e) {
                        _ &&
                          (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding LCP Data"),
                          _.element && e.setTag("lcp.element", s.htmlTreeAsString(_.element)),
                          _.id && e.setTag("lcp.id", _.id),
                          _.url && e.setTag("lcp.url", _.url.trim().slice(0, 200)),
                          e.setTag("lcp.size", _.size));
                        h &&
                          h.sources &&
                          (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding CLS Data"),
                          h.sources.forEach((t, n) => e.setTag(`cls.source.${n + 1}`, s.htmlTreeAsString(t.node))));
                      })(e);
                  }
                  (_ = undefined), (h = undefined), (g = {});
                }),
                (n.startTrackingInteractions = function () {
                  l.observe(
                    "event",
                    (e) => {
                      for (const t of e) {
                        const e = r.getActiveTransaction();
                        if (!e) return;
                        if ("click" === t.name) {
                          const n = p(s.browserPerformanceTimeOrigin + t.startTime),
                            r = p(t.duration);
                          e.startChild({
                            description: s.htmlTreeAsString(t.target),
                            op: `ui.interaction.${t.name}`,
                            startTimestamp: n,
                            endTimestamp: n + r
                          });
                        }
                      }
                    },
                    { durationThreshold: 0 }
                  );
                }),
                (n.startTrackingLongTasks = function () {
                  l.observe("longtask", (e) => {
                    for (const t of e) {
                      const e = r.getActiveTransaction();
                      if (!e) return;
                      const n = p(s.browserPerformanceTimeOrigin + t.startTime),
                        i = p(t.duration);
                      e.startChild({ description: "Main UI thread blocked", op: "ui.long-task", startTimestamp: n, endTimestamp: n + i });
                    }
                  });
                }),
                (n.startTrackingWebVitals = function () {
                  const e = f();
                  if (e && s.browserPerformanceTimeOrigin) {
                    e.mark && i.WINDOW.performance.mark("sentry-tracing-init"),
                      a.onFID((e) => {
                        const t = e.entries.pop();
                        if (!t) return;
                        const n = p(s.browserPerformanceTimeOrigin),
                          r = p(t.startTime);
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding FID"),
                          (g.fid = { value: e.value, unit: "millisecond" }),
                          (g["mark.fid"] = { value: n + r, unit: "second" });
                      });
                    const t = o.onCLS((e) => {
                        const t = e.entries.pop();
                        t &&
                          (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding CLS"),
                          (g.cls = { value: e.value, unit: "" }),
                          (h = t));
                      }),
                      n = c.onLCP((e) => {
                        const t = e.entries.pop();
                        t &&
                          (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding LCP"),
                          (g.lcp = { value: e.value, unit: "millisecond" }),
                          (_ = t));
                      });
                    return () => {
                      t && t(), n && n();
                    };
                  }
                  return () => undefined;
                });
            },
            {
              "../types.js": 11,
              "../web-vitals/getCLS.js": 12,
              "../web-vitals/getFID.js": 13,
              "../web-vitals/getLCP.js": 14,
              "../web-vitals/lib/getVisibilityWatcher.js": 19,
              "../web-vitals/lib/observe.js": 21,
              "./utils.js": 8,
              "@sentry/core": 64,
              "@sentry/utils": 120
            }
          ],
          8: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n._startChild = function (e, { startTimestamp: t, ...n }) {
                  return t && e.startTimestamp > t && (e.startTimestamp = t), e.startChild({ startTimestamp: t, ...n });
                }),
                (n.isMeasurementValue = function (e) {
                  return "number" == typeof e && isFinite(e);
                });
            },
            {}
          ],
          9: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = ["localhost", /^\/(?!\/)/],
                o = { traceFetch: !0, traceXHR: !0, tracingOrigins: i, tracePropagationTargets: i };
              function a(e, t) {
                return s.stringMatchesSomePattern(e, t || i);
              }
              function c(e, t, n, s) {
                if (!r.hasTracingEnabled() || !e.fetchData || !t(e.fetchData.url)) return;
                if (e.endTimestamp) {
                  const t = e.fetchData.__span;
                  if (!t) return;
                  const n = s[t];
                  if (n) {
                    if (e.response) {
                      n.setHttpStatus(e.response.status);
                      const t = e.response && e.response.headers && e.response.headers.get("content-length"),
                        r = parseInt(t);
                      r > 0 && n.setData("http.response_content_length", r);
                    } else e.error && n.setStatus("internal_error");
                    n.finish(), delete s[t];
                  }
                  return;
                }
                const i = r.getCurrentHub().getScope(),
                  o = i && i.getSpan(),
                  a = o && o.transaction;
                if (o && a) {
                  const { method: t, url: r } = e.fetchData,
                    i = o.startChild({ data: { url: r, type: "fetch", "http.method": t }, description: `${t} ${r}`, op: "http.client" });
                  (e.fetchData.__span = i.spanId), (s[i.spanId] = i);
                  const c = e.args[0];
                  e.args[1] = e.args[1] || {};
                  const l = e.args[1];
                  n(e.fetchData.url) && (l.headers = u(c, a.getDynamicSamplingContext(), i, l));
                }
              }
              function u(e, t, n, r) {
                const i = s.dynamicSamplingContextToSentryBaggageHeader(t),
                  o = n.toTraceparent(),
                  a = "undefined" != typeof Request && s.isInstanceOf(e, Request) ? e.headers : r.headers;
                if (a) {
                  if ("undefined" != typeof Headers && s.isInstanceOf(a, Headers)) {
                    const e = new Headers(a);
                    return e.append("sentry-trace", o), i && e.append(s.BAGGAGE_HEADER_NAME, i), e;
                  }
                  if (Array.isArray(a)) {
                    const e = [...a, ["sentry-trace", o]];
                    return i && e.push([s.BAGGAGE_HEADER_NAME, i]), e;
                  }
                  {
                    const e = "baggage" in a ? a.baggage : undefined,
                      t = [];
                    return (
                      Array.isArray(e) ? t.push(...e) : e && t.push(e),
                      i && t.push(i),
                      { ...a, "sentry-trace": o, baggage: t.length > 0 ? t.join(",") : undefined }
                    );
                  }
                }
                return { "sentry-trace": o, baggage: i };
              }
              function l(e, t, n, i) {
                const o = e.xhr,
                  a = o && o[s.SENTRY_XHR_DATA_KEY];
                if (!r.hasTracingEnabled() || (o && o.__sentry_own_request__) || !(o && a && t(a.url))) return;
                if (e.endTimestamp) {
                  const e = o.__sentry_xhr_span_id__;
                  if (!e) return;
                  const t = i[e];
                  return void (t && (t.setHttpStatus(a.status_code), t.finish(), delete i[e]));
                }
                const c = r.getCurrentHub().getScope(),
                  u = c && c.getSpan(),
                  l = u && u.transaction;
                if (u && l) {
                  const e = u.startChild({
                    data: { ...a.data, type: "xhr", "http.method": a.method, url: a.url },
                    description: `${a.method} ${a.url}`,
                    op: "http.client"
                  });
                  if (((o.__sentry_xhr_span_id__ = e.spanId), (i[o.__sentry_xhr_span_id__] = e), o.setRequestHeader && n(a.url)))
                    try {
                      o.setRequestHeader("sentry-trace", e.toTraceparent());
                      const t = l.getDynamicSamplingContext(),
                        n = s.dynamicSamplingContextToSentryBaggageHeader(t);
                      n && o.setRequestHeader(s.BAGGAGE_HEADER_NAME, n);
                    } catch (e) {}
                }
              }
              (n.DEFAULT_TRACE_PROPAGATION_TARGETS = i),
                (n.addTracingHeadersToFetchRequest = u),
                (n.defaultRequestInstrumentationOptions = o),
                (n.fetchCallback = c),
                (n.instrumentOutgoingRequests = function (e) {
                  const {
                      traceFetch: t,
                      traceXHR: n,
                      tracePropagationTargets: r,
                      tracingOrigins: i,
                      shouldCreateSpanForRequest: u
                    } = { traceFetch: o.traceFetch, traceXHR: o.traceXHR, ...e },
                    d = "function" == typeof u ? u : (e) => !0,
                    p = (e) => a(e, r || i),
                    f = {};
                  t &&
                    s.addInstrumentationHandler("fetch", (e) => {
                      c(e, d, p, f);
                    }),
                    n &&
                      s.addInstrumentationHandler("xhr", (e) => {
                        l(e, d, p, f);
                      });
                }),
                (n.shouldAttachHeaders = a),
                (n.xhrCallback = l);
            },
            { "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          10: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("./types.js");
              n.instrumentRoutingWithDefaults = function (e, t = !0, n = !0) {
                if (!s.WINDOW || !s.WINDOW.location)
                  return void (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    r.logger.warn("Could not initialize routing instrumentation due to invalid location")
                  );
                let i,
                  o = s.WINDOW.location.href;
                t &&
                  (i = e({
                    name: s.WINDOW.location.pathname,
                    startTimestamp: r.browserPerformanceTimeOrigin ? r.browserPerformanceTimeOrigin / 1e3 : undefined,
                    op: "pageload",
                    metadata: { source: "url" }
                  })),
                  n &&
                    r.addInstrumentationHandler("history", ({ to: t, from: n }) => {
                      n === undefined && o && -1 !== o.indexOf(t)
                        ? (o = undefined)
                        : n !== t &&
                          ((o = undefined),
                          i &&
                            (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                              r.logger.log(`[Tracing] Finishing current transaction with op: ${i.op}`),
                            i.finish()),
                          (i = e({ name: s.WINDOW.location.pathname, op: "navigation", metadata: { source: "url" } })));
                    });
              };
            },
            { "./types.js": 11, "@sentry/utils": 120 }
          ],
          11: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils").GLOBAL_OBJ;
              n.WINDOW = r;
            },
            { "@sentry/utils": 120 }
          ],
          12: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./lib/bindReporter.js"),
                s = e("./lib/initMetric.js"),
                i = e("./lib/observe.js"),
                o = e("./lib/onHidden.js");
              n.onCLS = (e) => {
                const t = s.initMetric("CLS", 0);
                let n,
                  a = 0,
                  c = [];
                const u = (e) => {
                    e.forEach((e) => {
                      if (!e.hadRecentInput) {
                        const r = c[0],
                          s = c[c.length - 1];
                        a && 0 !== c.length && e.startTime - s.startTime < 1e3 && e.startTime - r.startTime < 5e3
                          ? ((a += e.value), c.push(e))
                          : ((a = e.value), (c = [e])),
                          a > t.value && ((t.value = a), (t.entries = c), n && n());
                      }
                    });
                  },
                  l = i.observe("layout-shift", u);
                if (l) {
                  n = r.bindReporter(e, t);
                  const s = () => {
                    u(l.takeRecords()), n(!0);
                  };
                  return o.onHidden(s), s;
                }
              };
            },
            { "./lib/bindReporter.js": 15, "./lib/initMetric.js": 20, "./lib/observe.js": 21, "./lib/onHidden.js": 22 }
          ],
          13: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./lib/bindReporter.js"),
                s = e("./lib/getVisibilityWatcher.js"),
                i = e("./lib/initMetric.js"),
                o = e("./lib/observe.js"),
                a = e("./lib/onHidden.js");
              n.onFID = (e) => {
                const t = s.getVisibilityWatcher(),
                  n = i.initMetric("FID");
                let c;
                const u = (e) => {
                    e.startTime < t.firstHiddenTime && ((n.value = e.processingStart - e.startTime), n.entries.push(e), c(!0));
                  },
                  l = (e) => {
                    e.forEach(u);
                  },
                  d = o.observe("first-input", l);
                (c = r.bindReporter(e, n)),
                  d &&
                    a.onHidden(() => {
                      l(d.takeRecords()), d.disconnect();
                    }, !0);
              };
            },
            {
              "./lib/bindReporter.js": 15,
              "./lib/getVisibilityWatcher.js": 19,
              "./lib/initMetric.js": 20,
              "./lib/observe.js": 21,
              "./lib/onHidden.js": 22
            }
          ],
          14: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./lib/bindReporter.js"),
                s = e("./lib/getActivationStart.js"),
                i = e("./lib/getVisibilityWatcher.js"),
                o = e("./lib/initMetric.js"),
                a = e("./lib/observe.js"),
                c = e("./lib/onHidden.js"),
                u = {};
              n.onLCP = (e) => {
                const t = i.getVisibilityWatcher(),
                  n = o.initMetric("LCP");
                let l;
                const d = (e) => {
                    const r = e[e.length - 1];
                    if (r) {
                      const e = Math.max(r.startTime - s.getActivationStart(), 0);
                      e < t.firstHiddenTime && ((n.value = e), (n.entries = [r]), l());
                    }
                  },
                  p = a.observe("largest-contentful-paint", d);
                if (p) {
                  l = r.bindReporter(e, n);
                  const t = () => {
                    u[n.id] || (d(p.takeRecords()), p.disconnect(), (u[n.id] = !0), l(!0));
                  };
                  return (
                    ["keydown", "click"].forEach((e) => {
                      addEventListener(e, t, { once: !0, capture: !0 });
                    }),
                    c.onHidden(t, !0),
                    t
                  );
                }
              };
            },
            {
              "./lib/bindReporter.js": 15,
              "./lib/getActivationStart.js": 17,
              "./lib/getVisibilityWatcher.js": 19,
              "./lib/initMetric.js": 20,
              "./lib/observe.js": 21,
              "./lib/onHidden.js": 22
            }
          ],
          15: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.bindReporter = (e, t, n) => {
                let r, s;
                return (i) => {
                  t.value >= 0 && (i || n) && ((s = t.value - (r || 0)), (s || r === undefined) && ((r = t.value), (t.delta = s), e(t)));
                };
              };
            },
            {}
          ],
          16: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.generateUniqueID = () => `v3-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`;
            },
            {}
          ],
          17: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./getNavigationEntry.js");
              n.getActivationStart = () => {
                const e = r.getNavigationEntry();
                return (e && e.activationStart) || 0;
              };
            },
            { "./getNavigationEntry.js": 18 }
          ],
          18: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("../../types.js");
              n.getNavigationEntry = () =>
                r.WINDOW.__WEB_VITALS_POLYFILL__
                  ? r.WINDOW.performance &&
                    ((performance.getEntriesByType && performance.getEntriesByType("navigation")[0]) ||
                      (() => {
                        const e = r.WINDOW.performance.timing,
                          t = r.WINDOW.performance.navigation.type,
                          n = { entryType: "navigation", startTime: 0, type: 2 == t ? "back_forward" : 1 === t ? "reload" : "navigate" };
                        for (const t in e) "navigationStart" !== t && "toJSON" !== t && (n[t] = Math.max(e[t] - e.navigationStart, 0));
                        return n;
                      })())
                  : r.WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
            },
            { "../../types.js": 11 }
          ],
          19: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("../../types.js"),
                s = e("./onHidden.js");
              let i = -1;
              n.getVisibilityWatcher = () => (
                i < 0 &&
                  ((i = "hidden" !== r.WINDOW.document.visibilityState || r.WINDOW.document.prerendering ? Infinity : 0),
                  s.onHidden(({ timeStamp: e }) => {
                    i = e;
                  }, !0)),
                {
                  get firstHiddenTime() {
                    return i;
                  }
                }
              );
            },
            { "../../types.js": 11, "./onHidden.js": 22 }
          ],
          20: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("../../types.js"),
                s = e("./generateUniqueID.js"),
                i = e("./getActivationStart.js"),
                o = e("./getNavigationEntry.js");
              n.initMetric = (e, t) => {
                const n = o.getNavigationEntry();
                let a = "navigate";
                return (
                  n && (a = r.WINDOW.document.prerendering || i.getActivationStart() > 0 ? "prerender" : n.type.replace(/_/g, "-")),
                  {
                    name: e,
                    value: void 0 === t ? -1 : t,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: s.generateUniqueID(),
                    navigationType: a
                  }
                );
              };
            },
            { "../../types.js": 11, "./generateUniqueID.js": 16, "./getActivationStart.js": 17, "./getNavigationEntry.js": 18 }
          ],
          21: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.observe = (e, t, n) => {
                try {
                  if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    const r = new PerformanceObserver((e) => {
                      t(e.getEntries());
                    });
                    return r.observe(Object.assign({ type: e, buffered: !0 }, n || {})), r;
                  }
                } catch (e) {}
              };
            },
            {}
          ],
          22: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("../../types.js");
              n.onHidden = (e, t) => {
                const n = (s) => {
                  ("pagehide" !== s.type && "hidden" !== r.WINDOW.document.visibilityState) ||
                    (e(s), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)));
                };
                addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
              };
            },
            { "../../types.js": 11 }
          ],
          23: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils");
              n.addExtensionMethods = function () {
                r.addTracingExtensions(),
                  s.isNodeEnv() &&
                    (function () {
                      const e = r.getMainCarrier();
                      if (!e.__SENTRY__) return;
                      const n = {
                          mongodb: () => new (s.dynamicRequire(t, "./node/integrations/mongo").Mongo)(),
                          mongoose: () => new (s.dynamicRequire(t, "./node/integrations/mongo").Mongo)(),
                          mysql: () => new (s.dynamicRequire(t, "./node/integrations/mysql").Mysql)(),
                          pg: () => new (s.dynamicRequire(t, "./node/integrations/postgres").Postgres)()
                        },
                        i = Object.keys(n)
                          .filter((e) => !!s.loadModule(e))
                          .map((e) => {
                            try {
                              return n[e]();
                            } catch (e) {
                              return undefined;
                            }
                          })
                          .filter((e) => e);
                      i.length > 0 && (e.__SENTRY__.integrations = [...(e.__SENTRY__.integrations || []), ...i]);
                    })();
              };
            },
            { "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          24: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("./node/integrations/express.js"),
                o = e("./node/integrations/postgres.js"),
                a = e("./node/integrations/mysql.js"),
                c = e("./node/integrations/mongo.js"),
                u = e("./node/integrations/prisma.js"),
                l = e("./node/integrations/graphql.js"),
                d = e("./node/integrations/apollo.js"),
                p = e("./node/integrations/lazy.js"),
                f = e("./browser/browsertracing.js"),
                _ = e("./browser/request.js"),
                h = e("./extensions.js");
              (n.IdleTransaction = r.IdleTransaction),
                (n.Span = r.Span),
                (n.SpanStatus = r.SpanStatus),
                (n.Transaction = r.Transaction),
                (n.extractTraceparentData = r.extractTraceparentData),
                (n.getActiveTransaction = r.getActiveTransaction),
                (n.hasTracingEnabled = r.hasTracingEnabled),
                (n.spanStatusfromHttpCode = r.spanStatusfromHttpCode),
                (n.startIdleTransaction = r.startIdleTransaction),
                (n.TRACEPARENT_REGEXP = s.TRACEPARENT_REGEXP),
                (n.stripUrlQueryAndFragment = s.stripUrlQueryAndFragment),
                (n.Express = i.Express),
                (n.Postgres = o.Postgres),
                (n.Mysql = a.Mysql),
                (n.Mongo = c.Mongo),
                (n.Prisma = u.Prisma),
                (n.GraphQL = l.GraphQL),
                (n.Apollo = d.Apollo),
                (n.lazyLoadedNodePerformanceMonitoringIntegrations = p.lazyLoadedNodePerformanceMonitoringIntegrations),
                (n.BROWSER_TRACING_INTEGRATION_ID = f.BROWSER_TRACING_INTEGRATION_ID),
                (n.BrowserTracing = f.BrowserTracing),
                (n.addTracingHeadersToFetchRequest = _.addTracingHeadersToFetchRequest),
                (n.defaultRequestInstrumentationOptions = _.defaultRequestInstrumentationOptions),
                (n.instrumentOutgoingRequests = _.instrumentOutgoingRequests),
                (n.addExtensionMethods = h.addExtensionMethods);
            },
            {
              "./browser/browsertracing.js": 6,
              "./browser/request.js": 9,
              "./extensions.js": 23,
              "./node/integrations/apollo.js": 25,
              "./node/integrations/express.js": 26,
              "./node/integrations/graphql.js": 27,
              "./node/integrations/lazy.js": 28,
              "./node/integrations/mongo.js": 29,
              "./node/integrations/mysql.js": 30,
              "./node/integrations/postgres.js": 31,
              "./node/integrations/prisma.js": 32,
              "@sentry/core": 64,
              "@sentry/utils": 120
            }
          ],
          25: [
            function (e, t, n) {
              var { _optionalChain: r } = e("@sentry/utils/cjs/buildPolyfills");
              Object.defineProperty(n, "__esModule", { value: !0 });
              const s = e("@sentry/utils"),
                i = e("./utils/node-utils.js");
              class o {
                static __initStatic() {
                  this.id = "Apollo";
                }
                __init() {
                  this.name = o.id;
                }
                constructor(e = { useNestjs: !1 }) {
                  o.prototype.__init.call(this), (this._useNest = !!e.useNestjs);
                }
                loadDependency() {
                  return (
                    this._useNest
                      ? (this._module = this._module || s.loadModule("@nestjs/graphql"))
                      : (this._module = this._module || s.loadModule("apollo-server-core")),
                    this._module
                  );
                }
                setupOnce(e, t) {
                  if (i.shouldDisableAutoInstrumentation(t))
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("Apollo Integration is skipped because of instrumenter configuration.");
                  else if (this._useNest) {
                    const e = this.loadDependency();
                    if (!e)
                      return void (
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.error("Apollo-NestJS Integration was unable to require @nestjs/graphql package.")
                      );
                    s.fill(e.GraphQLFactory.prototype, "mergeWithSchema", function (e) {
                      return function (...n) {
                        return (
                          s.fill(this.resolversExplorerService, "explore", function (e) {
                            return function () {
                              return a(s.arrayify(e.call(this)), t);
                            };
                          }),
                          e.call(this, ...n)
                        );
                      };
                    });
                  } else {
                    const e = this.loadDependency();
                    if (!e)
                      return void (
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.error("Apollo Integration was unable to require apollo-server-core package.")
                      );
                    s.fill(e.ApolloServerBase.prototype, "constructSchema", function (e) {
                      return function () {
                        if (!this.config.resolvers)
                          return (
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                              (this.config.schema
                                ? (s.logger.warn(
                                    "Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property." +
                                      "If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead."
                                  ),
                                  s.logger.warn())
                                : this.config.modules &&
                                  s.logger.warn(
                                    "Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property."
                                  ),
                              s.logger.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")),
                            e.call(this)
                          );
                        const n = s.arrayify(this.config.resolvers);
                        return (this.config.resolvers = a(n, t)), e.call(this);
                      };
                    });
                  }
                }
              }
              function a(e, t) {
                return e.map(
                  (e) => (
                    Object.keys(e).forEach((n) => {
                      Object.keys(e[n]).forEach((i) => {
                        "function" == typeof e[n][i] &&
                          (function (e, t, n, i) {
                            s.fill(e[t], n, function (e) {
                              return function (...o) {
                                const a = i().getScope(),
                                  c = r([a, "optionalAccess", (e) => e.getSpan, "call", (e) => e()]),
                                  u = r([
                                    c,
                                    "optionalAccess",
                                    (e) => e.startChild,
                                    "call",
                                    (e) => e({ description: `${t}.${n}`, op: "graphql.resolve" })
                                  ]),
                                  l = e.call(this, ...o);
                                return s.isThenable(l)
                                  ? l.then((e) => (r([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]), e))
                                  : (r([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]), l);
                              };
                            });
                          })(e, n, i, t);
                      });
                    }),
                    e
                  )
                );
              }
              o.__initStatic(), (n.Apollo = o);
            },
            { "./utils/node-utils.js": 33, "@sentry/utils": 120, "@sentry/utils/cjs/buildPolyfills": 114 }
          ],
          26: [
            function (e, t, n) {
              var { _optionalChain: r } = e("@sentry/utils/cjs/buildPolyfills");
              Object.defineProperty(n, "__esModule", { value: !0 });
              const s = e("@sentry/utils"),
                i = e("./utils/node-utils.js");
              class o {
                static __initStatic() {
                  this.id = "Express";
                }
                __init() {
                  this.name = o.id;
                }
                constructor(e = {}) {
                  o.prototype.__init.call(this),
                    (this._router = e.router || e.app),
                    (this._methods = (Array.isArray(e.methods) ? e.methods : []).concat("use"));
                }
                setupOnce(e, t) {
                  this._router
                    ? i.shouldDisableAutoInstrumentation(t)
                      ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.log("Express Integration is skipped because of instrumenter configuration.")
                      : ((function (e, t = []) {
                          t.forEach((t) =>
                            (function (e, t) {
                              const n = e[t];
                              return (
                                (e[t] = function (...e) {
                                  return n.call(
                                    this,
                                    ...(function (e, t) {
                                      return e.map((e) =>
                                        "function" == typeof e
                                          ? a(e, t)
                                          : Array.isArray(e)
                                          ? e.map((e) => ("function" == typeof e ? a(e, t) : e))
                                          : e
                                      );
                                    })(e, t)
                                  );
                                }),
                                e
                              );
                            })(e, t)
                          );
                        })(this._router, this._methods),
                        (function (e) {
                          const t = "settings" in e;
                          t && e._router === undefined && e.lazyrouter && e.lazyrouter();
                          const n = t ? e._router : e;
                          if (!n)
                            return (
                              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                                s.logger.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."),
                              void (
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                                s.logger.debug("Routing instrumentation is currently only supported in Express 4.")
                              )
                            );
                          const i = Object.getPrototypeOf(n),
                            o = i.process_params;
                          i.process_params = function (e, t, n, i, a) {
                            n._reconstructedRoute || (n._reconstructedRoute = "");
                            const {
                              layerRoutePath: c,
                              isRegex: u,
                              isArray: l,
                              numExtraSegments: d
                            } = (function (e) {
                              const t = r([e, "access", (e) => e.route, "optionalAccess", (e) => e.path]),
                                n = s.isRegExp(t),
                                i = Array.isArray(t);
                              if (!t) return { isRegex: n, isArray: i, numExtraSegments: 0 };
                              const o = i
                                  ? Math.max(
                                      ((c = t),
                                      c.reduce((e, t) => e + s.getNumberOfUrlSegments(t.toString()), 0) -
                                        s.getNumberOfUrlSegments(e.path || "")),
                                      0
                                    )
                                  : 0,
                                a = (function (e, t) {
                                  if (e) return t.map((e) => e.toString()).join(",");
                                  return t && t.toString();
                                })(i, t);
                              var c;
                              return { layerRoutePath: a, isRegex: n, isArray: i, numExtraSegments: o };
                            })(e);
                            (c || u || l) && (n._hasParameters = !0);
                            const p = (c || e.path || "")
                              .split("/")
                              .filter((e) => e.length > 0 && (u || l || !e.includes("*")))
                              .join("/");
                            p && p.length > 0 && (n._reconstructedRoute += `/${p}${u ? "/" : ""}`);
                            if (s.getNumberOfUrlSegments(n.originalUrl || "") + d === s.getNumberOfUrlSegments(n._reconstructedRoute)) {
                              n._hasParameters || (n._reconstructedRoute !== n.originalUrl && (n._reconstructedRoute = n.originalUrl));
                              const e = i.__sentry_transaction;
                              if (e && "custom" !== e.metadata.source) {
                                const t = n._reconstructedRoute || "/";
                                e.setName(...s.extractPathForTransaction(n, { path: !0, method: !0, customRoute: t }));
                              }
                            }
                            return o.call(this, e, t, n, i, a);
                          };
                        })(this._router))
                    : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.error("ExpressIntegration is missing an Express instance");
                }
              }
              function a(e, t) {
                const n = e.length;
                switch (n) {
                  case 2:
                    return function (n, r) {
                      const s = r.__sentry_transaction;
                      if (s) {
                        const n = s.startChild({ description: e.name, op: `middleware.express.${t}` });
                        r.once("finish", () => {
                          n.finish();
                        });
                      }
                      return e.call(this, n, r);
                    };
                  case 3:
                    return function (n, s, i) {
                      const o = s.__sentry_transaction,
                        a = r([
                          o,
                          "optionalAccess",
                          (e) => e.startChild,
                          "call",
                          (n) => n({ description: e.name, op: `middleware.express.${t}` })
                        ]);
                      e.call(this, n, s, function (...e) {
                        r([a, "optionalAccess", (e) => e.finish, "call", (e) => e()]), i.call(this, ...e);
                      });
                    };
                  case 4:
                    return function (n, s, i, o) {
                      const a = i.__sentry_transaction,
                        c = r([
                          a,
                          "optionalAccess",
                          (e) => e.startChild,
                          "call",
                          (n) => n({ description: e.name, op: `middleware.express.${t}` })
                        ]);
                      e.call(this, n, s, i, function (...e) {
                        r([c, "optionalAccess", (e) => e.finish, "call", (e) => e()]), o.call(this, ...e);
                      });
                    };
                  default:
                    throw new Error(`Express middleware takes 2-4 arguments. Got: ${n}`);
                }
              }
              o.__initStatic(), (n.Express = o);
            },
            { "./utils/node-utils.js": 33, "@sentry/utils": 120, "@sentry/utils/cjs/buildPolyfills": 114 }
          ],
          27: [
            function (e, t, n) {
              var { _optionalChain: r } = e("@sentry/utils/cjs/buildPolyfills");
              Object.defineProperty(n, "__esModule", { value: !0 });
              const s = e("@sentry/utils"),
                i = e("./utils/node-utils.js");
              class o {
                constructor() {
                  o.prototype.__init.call(this);
                }
                static __initStatic() {
                  this.id = "GraphQL";
                }
                __init() {
                  this.name = o.id;
                }
                loadDependency() {
                  return (this._module = this._module || s.loadModule("graphql/execution/execute.js"));
                }
                setupOnce(e, t) {
                  if (i.shouldDisableAutoInstrumentation(t))
                    return void (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("GraphQL Integration is skipped because of instrumenter configuration.")
                    );
                  const n = this.loadDependency();
                  n
                    ? s.fill(n, "execute", function (e) {
                        return function (...n) {
                          const i = t().getScope(),
                            o = r([i, "optionalAccess", (e) => e.getSpan, "call", (e) => e()]),
                            a = r([
                              o,
                              "optionalAccess",
                              (e) => e.startChild,
                              "call",
                              (e) => e({ description: "execute", op: "graphql.execute" })
                            ]);
                          r([i, "optionalAccess", (e) => e.setSpan, "call", (e) => e(a)]);
                          const c = e.call(this, ...n);
                          return s.isThenable(c)
                            ? c.then(
                                (e) => (
                                  r([a, "optionalAccess", (e) => e.finish, "call", (e) => e()]),
                                  r([i, "optionalAccess", (e) => e.setSpan, "call", (e) => e(o)]),
                                  e
                                )
                              )
                            : (r([a, "optionalAccess", (e) => e.finish, "call", (e) => e()]),
                              r([i, "optionalAccess", (e) => e.setSpan, "call", (e) => e(o)]),
                              c);
                        };
                      })
                    : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.error("GraphQL Integration was unable to require graphql/execution package.");
                }
              }
              o.__initStatic(), (n.GraphQL = o);
            },
            { "./utils/node-utils.js": 33, "@sentry/utils": 120, "@sentry/utils/cjs/buildPolyfills": 114 }
          ],
          28: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = [
                  () => new (r.dynamicRequire(t, "./apollo").Apollo)(),
                  () => new (r.dynamicRequire(t, "./apollo").Apollo)({ useNestjs: !0 }),
                  () => new (r.dynamicRequire(t, "./graphql").GraphQL)(),
                  () => new (r.dynamicRequire(t, "./mongo").Mongo)(),
                  () => new (r.dynamicRequire(t, "./mongo").Mongo)({ mongoose: !0 }),
                  () => new (r.dynamicRequire(t, "./mysql").Mysql)(),
                  () => new (r.dynamicRequire(t, "./postgres").Postgres)()
                ];
              n.lazyLoadedNodePerformanceMonitoringIntegrations = s;
            },
            { "@sentry/utils": 120 }
          ],
          29: [
            function (e, t, n) {
              var { _optionalChain: r } = e("@sentry/utils/cjs/buildPolyfills");
              Object.defineProperty(n, "__esModule", { value: !0 });
              const s = e("@sentry/utils"),
                i = e("./utils/node-utils.js"),
                o = [
                  "aggregate",
                  "bulkWrite",
                  "countDocuments",
                  "createIndex",
                  "createIndexes",
                  "deleteMany",
                  "deleteOne",
                  "distinct",
                  "drop",
                  "dropIndex",
                  "dropIndexes",
                  "estimatedDocumentCount",
                  "find",
                  "findOne",
                  "findOneAndDelete",
                  "findOneAndReplace",
                  "findOneAndUpdate",
                  "indexes",
                  "indexExists",
                  "indexInformation",
                  "initializeOrderedBulkOp",
                  "insertMany",
                  "insertOne",
                  "isCapped",
                  "mapReduce",
                  "options",
                  "parallelCollectionScan",
                  "rename",
                  "replaceOne",
                  "stats",
                  "updateMany",
                  "updateOne"
                ],
                a = {
                  bulkWrite: ["operations"],
                  countDocuments: ["query"],
                  createIndex: ["fieldOrSpec"],
                  createIndexes: ["indexSpecs"],
                  deleteMany: ["filter"],
                  deleteOne: ["filter"],
                  distinct: ["key", "query"],
                  dropIndex: ["indexName"],
                  find: ["query"],
                  findOne: ["query"],
                  findOneAndDelete: ["filter"],
                  findOneAndReplace: ["filter", "replacement"],
                  findOneAndUpdate: ["filter", "update"],
                  indexExists: ["indexes"],
                  insertMany: ["docs"],
                  insertOne: ["doc"],
                  mapReduce: ["map", "reduce"],
                  rename: ["newName"],
                  replaceOne: ["filter", "doc"],
                  updateMany: ["filter", "update"],
                  updateOne: ["filter", "update"]
                };
              class c {
                static __initStatic() {
                  this.id = "Mongo";
                }
                __init() {
                  this.name = c.id;
                }
                constructor(e = {}) {
                  c.prototype.__init.call(this),
                    (this._operations = Array.isArray(e.operations) ? e.operations : o),
                    (this._describeOperations = !("describeOperations" in e) || e.describeOperations),
                    (this._useMongoose = !!e.useMongoose);
                }
                loadDependency() {
                  const e = this._useMongoose ? "mongoose" : "mongodb";
                  return (this._module = this._module || s.loadModule(e));
                }
                setupOnce(e, t) {
                  if (i.shouldDisableAutoInstrumentation(t))
                    return void (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("Mongo Integration is skipped because of instrumenter configuration.")
                    );
                  const n = this.loadDependency();
                  if (n) this._instrumentOperations(n.Collection, this._operations, t);
                  else {
                    const e = this._useMongoose ? "mongoose" : "mongodb";
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.error(`Mongo Integration was unable to require \`${e}\` package.`);
                  }
                }
                _instrumentOperations(e, t, n) {
                  t.forEach((t) => this._patchOperation(e, t, n));
                }
                _patchOperation(e, t, n) {
                  if (!(t in e.prototype)) return;
                  const i = this._getSpanContextFromOperationArguments.bind(this);
                  s.fill(e.prototype, t, function (e) {
                    return function (...o) {
                      const a = o[o.length - 1],
                        c = n().getScope(),
                        u = r([c, "optionalAccess", (e) => e.getSpan, "call", (e) => e()]);
                      if ("function" != typeof a || ("mapReduce" === t && 2 === o.length)) {
                        const n = r([u, "optionalAccess", (e) => e.startChild, "call", (e) => e(i(this, t, o))]),
                          a = e.call(this, ...o);
                        if (s.isThenable(a)) return a.then((e) => (r([n, "optionalAccess", (e) => e.finish, "call", (e) => e()]), e));
                        if ((l = a) && "object" == typeof l && l.once && "function" == typeof l.once) {
                          const e = a;
                          try {
                            e.once("close", () => {
                              r([n, "optionalAccess", (e) => e.finish, "call", (e) => e()]);
                            });
                          } catch (e) {
                            r([n, "optionalAccess", (e) => e.finish, "call", (e) => e()]);
                          }
                          return e;
                        }
                        return r([n, "optionalAccess", (e) => e.finish, "call", (e) => e()]), a;
                      }
                      var l;
                      const d = r([u, "optionalAccess", (e) => e.startChild, "call", (e) => e(i(this, t, o.slice(0, -1)))]);
                      return e.call(this, ...o.slice(0, -1), function (e, t) {
                        r([d, "optionalAccess", (e) => e.finish, "call", (e) => e()]), a(e, t);
                      });
                    };
                  });
                }
                _getSpanContextFromOperationArguments(e, t, n) {
                  const r = { collectionName: e.collectionName, dbName: e.dbName, namespace: e.namespace, "db.system": "mongodb" },
                    s = { op: "db", description: t, data: r },
                    i = a[t],
                    o = Array.isArray(this._describeOperations) ? this._describeOperations.includes(t) : this._describeOperations;
                  if (!i || !o) return s;
                  try {
                    if ("mapReduce" === t) {
                      const [e, t] = n;
                      (r[i[0]] = "string" == typeof e ? e : e.name || "<anonymous>"),
                        (r[i[1]] = "string" == typeof t ? t : t.name || "<anonymous>");
                    } else for (let e = 0; e < i.length; e++) r[i[e]] = JSON.stringify(n[e]);
                  } catch (e) {}
                  return s;
                }
              }
              c.__initStatic(), (n.Mongo = c);
            },
            { "./utils/node-utils.js": 33, "@sentry/utils": 120, "@sentry/utils/cjs/buildPolyfills": 114 }
          ],
          30: [
            function (e, t, n) {
              var { _optionalChain: r } = e("@sentry/utils/cjs/buildPolyfills");
              Object.defineProperty(n, "__esModule", { value: !0 });
              const s = e("@sentry/utils"),
                i = e("./utils/node-utils.js");
              class o {
                constructor() {
                  o.prototype.__init.call(this);
                }
                static __initStatic() {
                  this.id = "Mysql";
                }
                __init() {
                  this.name = o.id;
                }
                loadDependency() {
                  return (this._module = this._module || s.loadModule("mysql/lib/Connection.js"));
                }
                setupOnce(e, t) {
                  if (i.shouldDisableAutoInstrumentation(t))
                    return void (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("Mysql Integration is skipped because of instrumenter configuration.")
                    );
                  const n = this.loadDependency();
                  n
                    ? s.fill(n, "createQuery", function (e) {
                        return function (n, s, i) {
                          const o = t().getScope(),
                            a = r([o, "optionalAccess", (e) => e.getSpan, "call", (e) => e()]),
                            c = r([
                              a,
                              "optionalAccess",
                              (e) => e.startChild,
                              "call",
                              (e) => e({ description: "string" == typeof n ? n : n.sql, op: "db", data: { "db.system": "mysql" } })
                            ]);
                          return "function" == typeof i
                            ? e.call(this, n, s, function (e, t, n) {
                                r([c, "optionalAccess", (e) => e.finish, "call", (e) => e()]), i(e, t, n);
                              })
                            : "function" == typeof s
                            ? e.call(this, n, function (e, t, n) {
                                r([c, "optionalAccess", (e) => e.finish, "call", (e) => e()]), s(e, t, n);
                              })
                            : e.call(this, n, s, i);
                        };
                      })
                    : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.error("Mysql Integration was unable to require `mysql` package.");
                }
              }
              o.__initStatic(), (n.Mysql = o);
            },
            { "./utils/node-utils.js": 33, "@sentry/utils": 120, "@sentry/utils/cjs/buildPolyfills": 114 }
          ],
          31: [
            function (e, t, n) {
              var { _optionalChain: r } = e("@sentry/utils/cjs/buildPolyfills");
              Object.defineProperty(n, "__esModule", { value: !0 });
              const s = e("@sentry/utils"),
                i = e("./utils/node-utils.js");
              class o {
                static __initStatic() {
                  this.id = "Postgres";
                }
                __init() {
                  this.name = o.id;
                }
                constructor(e = {}) {
                  o.prototype.__init.call(this), (this._usePgNative = !!e.usePgNative);
                }
                loadDependency() {
                  return (this._module = this._module || s.loadModule("pg"));
                }
                setupOnce(e, t) {
                  if (i.shouldDisableAutoInstrumentation(t))
                    return void (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("Postgres Integration is skipped because of instrumenter configuration.")
                    );
                  const n = this.loadDependency();
                  if (!n)
                    return void (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.error("Postgres Integration was unable to require `pg` package.")
                    );
                  if (this._usePgNative && !r([n, "access", (e) => e.native, "optionalAccess", (e) => e.Client]))
                    return void (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.error("Postgres Integration was unable to access 'pg-native' bindings.")
                    );
                  const { Client: o } = this._usePgNative ? n.native : n;
                  s.fill(o.prototype, "query", function (e) {
                    return function (n, i, o) {
                      const a = t().getScope(),
                        c = r([a, "optionalAccess", (e) => e.getSpan, "call", (e) => e()]),
                        u = r([
                          c,
                          "optionalAccess",
                          (e) => e.startChild,
                          "call",
                          (e) => e({ description: "string" == typeof n ? n : n.text, op: "db", data: { "db.system": "postgresql" } })
                        ]);
                      if ("function" == typeof o)
                        return e.call(this, n, i, function (e, t) {
                          r([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]), o(e, t);
                        });
                      if ("function" == typeof i)
                        return e.call(this, n, function (e, t) {
                          r([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]), i(e, t);
                        });
                      const l = void 0 !== i ? e.call(this, n, i) : e.call(this, n);
                      return s.isThenable(l)
                        ? l.then((e) => (r([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]), e))
                        : (r([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]), l);
                    };
                  });
                }
              }
              o.__initStatic(), (n.Postgres = o);
            },
            { "./utils/node-utils.js": 33, "@sentry/utils": 120, "@sentry/utils/cjs/buildPolyfills": 114 }
          ],
          32: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("./utils/node-utils.js");
              class o {
                static __initStatic() {
                  this.id = "Prisma";
                }
                __init() {
                  this.name = o.id;
                }
                constructor(e = {}) {
                  var t;
                  o.prototype.__init.call(this),
                    (t = e.client) && t.$use
                      ? (this._client = e.client)
                      : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.warn(
                          `Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(e.client)}`
                        );
                }
                setupOnce(e, t) {
                  this._client
                    ? i.shouldDisableAutoInstrumentation(t)
                      ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.log("Prisma Integration is skipped because of instrumenter configuration.")
                      : this._client.$use((e, t) => {
                          const n = e.action,
                            s = e.model;
                          return r.trace({ name: s ? `${s} ${n}` : n, op: "db.sql.prisma", data: { "db.system": "prisma" } }, () => t(e));
                        })
                    : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.error("PrismaIntegration is missing a Prisma Client Instance");
                }
              }
              o.__initStatic(), (n.Prisma = o);
            },
            { "./utils/node-utils.js": 33, "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          33: [
            function (e, t, n) {
              var { _optionalChain: r } = e("@sentry/utils/cjs/buildPolyfills");
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.shouldDisableAutoInstrumentation = function (e) {
                  const t = r([
                    e,
                    "call",
                    (e) => e(),
                    "access",
                    (e) => e.getClient,
                    "call",
                    (e) => e(),
                    "optionalAccess",
                    (e) => e.getOptions,
                    "call",
                    (e) => e()
                  ]);
                  return "sentry" !== (r([t, "optionalAccess", (e) => e.instrumenter]) || "sentry");
                });
            },
            { "@sentry/utils/cjs/buildPolyfills": 114 }
          ],
          34: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("./eventbuilder.js"),
                o = e("./helpers.js"),
                a = e("./integrations/breadcrumbs.js"),
                c = e("./userfeedback.js");
              class u extends r.BaseClient {
                constructor(e) {
                  const t = o.WINDOW.SENTRY_SDK_SOURCE || s.getSDKSource();
                  (e._metadata = e._metadata || {}),
                    (e._metadata.sdk = e._metadata.sdk || {
                      name: "sentry.javascript.browser",
                      packages: [{ name: `${t}:@sentry/browser`, version: r.SDK_VERSION }],
                      version: r.SDK_VERSION
                    }),
                    super(e),
                    e.sendClientReports &&
                      o.WINDOW.document &&
                      o.WINDOW.document.addEventListener("visibilitychange", () => {
                        "hidden" === o.WINDOW.document.visibilityState && this._flushOutcomes();
                      });
                }
                eventFromException(e, t) {
                  return i.eventFromException(this._options.stackParser, e, t, this._options.attachStacktrace);
                }
                eventFromMessage(e, t = "info", n) {
                  return i.eventFromMessage(this._options.stackParser, e, t, n, this._options.attachStacktrace);
                }
                sendEvent(e, t) {
                  const n = this.getIntegrationById(a.BREADCRUMB_INTEGRATION_ID);
                  n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(e), super.sendEvent(e, t);
                }
                captureUserFeedback(e) {
                  if (!this._isEnabled())
                    return void (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.warn("SDK not enabled, will not capture user feedback.")
                    );
                  const t = c.createUserFeedbackEnvelope(e, {
                    metadata: this.getSdkMetadata(),
                    dsn: this.getDsn(),
                    tunnel: this.getOptions().tunnel
                  });
                  this._sendEnvelope(t);
                }
                _prepareEvent(e, t, n) {
                  return (e.platform = e.platform || "javascript"), super._prepareEvent(e, t, n);
                }
                _flushOutcomes() {
                  const e = this._clearOutcomes();
                  if (0 === e.length)
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("No outcomes to send"));
                  if (!this._dsn)
                    return void (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("No dsn provided, will not send outcomes")
                    );
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("Sending outcomes:", e);
                  const t = s.createClientReportEnvelope(e, this._options.tunnel && s.dsnToString(this._dsn));
                  this._sendEnvelope(t);
                }
              }
              n.BrowserClient = u;
            },
            {
              "./eventbuilder.js": 35,
              "./helpers.js": 36,
              "./integrations/breadcrumbs.js": 38,
              "./userfeedback.js": 56,
              "@sentry/core": 64,
              "@sentry/utils": 120
            }
          ],
          35: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils");
              function i(e, t) {
                const n = c(e, t),
                  r = { type: t && t.name, value: l(t) };
                return (
                  n.length && (r.stacktrace = { frames: n }),
                  r.type === undefined && "" === r.value && (r.value = "Unrecoverable error caught"),
                  r
                );
              }
              function o(e, t, n, i) {
                const o = r.getCurrentHub().getClient(),
                  a = o && o.getOptions().normalizeDepth,
                  u = {
                    exception: {
                      values: [
                        {
                          type: s.isEvent(t) ? t.constructor.name : i ? "UnhandledRejection" : "Error",
                          value: `Non-Error ${i ? "promise rejection" : "exception"} captured with keys: ${s.extractExceptionKeysForMessage(
                            t
                          )}`
                        }
                      ]
                    },
                    extra: { __serialized__: s.normalizeToSize(t, a) }
                  };
                if (n) {
                  const t = c(e, n);
                  t.length && (u.exception.values[0].stacktrace = { frames: t });
                }
                return u;
              }
              function a(e, t) {
                return { exception: { values: [i(e, t)] } };
              }
              function c(e, t) {
                const n = t.stacktrace || t.stack || "",
                  r = (function (e) {
                    if (e) {
                      if ("number" == typeof e.framesToPop) return e.framesToPop;
                      if (u.test(e.message)) return 1;
                    }
                    return 0;
                  })(t);
                try {
                  return e(n, r);
                } catch (e) {}
                return [];
              }
              const u = /Minified React error #\d+;/i;
              function l(e) {
                const t = e && e.message;
                return t ? (t.error && "string" == typeof t.error.message ? t.error.message : t) : "No error message";
              }
              function d(e, t, n, r, i) {
                let c;
                if (s.isErrorEvent(t) && t.error) {
                  return a(e, t.error);
                }
                if (s.isDOMError(t) || s.isDOMException(t)) {
                  const i = t;
                  if ("stack" in t) c = a(e, t);
                  else {
                    const t = i.name || (s.isDOMError(i) ? "DOMError" : "DOMException"),
                      o = i.message ? `${t}: ${i.message}` : t;
                    (c = p(e, o, n, r)), s.addExceptionTypeValue(c, o);
                  }
                  return "code" in i && (c.tags = { ...c.tags, "DOMException.code": `${i.code}` }), c;
                }
                if (s.isError(t)) return a(e, t);
                if (s.isPlainObject(t) || s.isEvent(t)) {
                  return (c = o(e, t, n, i)), s.addExceptionMechanism(c, { synthetic: !0 }), c;
                }
                return (c = p(e, t, n, r)), s.addExceptionTypeValue(c, `${t}`, undefined), s.addExceptionMechanism(c, { synthetic: !0 }), c;
              }
              function p(e, t, n, r) {
                const s = { message: t };
                if (r && n) {
                  const r = c(e, n);
                  r.length && (s.exception = { values: [{ value: t, stacktrace: { frames: r } }] });
                }
                return s;
              }
              (n.eventFromError = a),
                (n.eventFromException = function (e, t, n, r) {
                  const i = d(e, t, (n && n.syntheticException) || undefined, r);
                  return (
                    s.addExceptionMechanism(i), (i.level = "error"), n && n.event_id && (i.event_id = n.event_id), s.resolvedSyncPromise(i)
                  );
                }),
                (n.eventFromMessage = function (e, t, n = "info", r, i) {
                  const o = p(e, t, (r && r.syntheticException) || undefined, i);
                  return (o.level = n), r && r.event_id && (o.event_id = r.event_id), s.resolvedSyncPromise(o);
                }),
                (n.eventFromPlainObject = o),
                (n.eventFromString = p),
                (n.eventFromUnknownInput = d),
                (n.exceptionFromError = i),
                (n.parseStackFrames = c);
            },
            { "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          36: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = s.GLOBAL_OBJ;
              let o = 0;
              function a() {
                o++,
                  setTimeout(() => {
                    o--;
                  });
              }
              (n.WINDOW = i),
                (n.ignoreNextOnError = a),
                (n.shouldIgnoreOnError = function () {
                  return o > 0;
                }),
                (n.wrap = function e(t, n = {}, i) {
                  if ("function" != typeof t) return t;
                  try {
                    const e = t.__sentry_wrapped__;
                    if (e) return e;
                    if (s.getOriginalFunction(t)) return t;
                  } catch (e) {
                    return t;
                  }
                  const o = function () {
                    const o = Array.prototype.slice.call(arguments);
                    try {
                      i && "function" == typeof i && i.apply(this, arguments);
                      const r = o.map((t) => e(t, n));
                      return t.apply(this, r);
                    } catch (e) {
                      throw (
                        (a(),
                        r.withScope((t) => {
                          t.addEventProcessor(
                            (e) => (
                              n.mechanism && (s.addExceptionTypeValue(e, undefined, undefined), s.addExceptionMechanism(e, n.mechanism)),
                              (e.extra = { ...e.extra, arguments: o }),
                              e
                            )
                          ),
                            r.captureException(e);
                        }),
                        e)
                      );
                    }
                  };
                  try {
                    for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
                  } catch (e) {}
                  s.markFunctionWrapped(o, t), s.addNonEnumerableProperty(t, "__sentry_wrapped__", o);
                  try {
                    Object.getOwnPropertyDescriptor(o, "name").configurable && Object.defineProperty(o, "name", { get: () => t.name });
                  } catch (e) {}
                  return o;
                });
            },
            { "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          37: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("./helpers.js"),
                i = e("./client.js"),
                o = e("./transports/fetch.js"),
                a = e("./transports/xhr.js"),
                c = e("./stack-parsers.js"),
                u = e("./eventbuilder.js"),
                l = e("./userfeedback.js"),
                d = e("./sdk.js"),
                p = e("./integrations/index.js"),
                f = e("@sentry/replay"),
                _ = e("@sentry-internal/tracing"),
                h = e("./transports/offline.js"),
                m = e("./profiling/hubextensions.js"),
                g = e("./profiling/integration.js"),
                y = e("./integrations/globalhandlers.js"),
                b = e("./integrations/trycatch.js"),
                v = e("./integrations/breadcrumbs.js"),
                E = e("./integrations/linkederrors.js"),
                S = e("./integrations/httpcontext.js"),
                w = e("./integrations/dedupe.js");
              let T = {};
              s.WINDOW.Sentry && s.WINDOW.Sentry.Integrations && (T = s.WINDOW.Sentry.Integrations);
              const k = { ...T, ...r.Integrations, ...p };
              (n.FunctionToString = r.FunctionToString),
                (n.Hub = r.Hub),
                (n.InboundFilters = r.InboundFilters),
                (n.SDK_VERSION = r.SDK_VERSION),
                (n.Scope = r.Scope),
                (n.addBreadcrumb = r.addBreadcrumb),
                (n.addGlobalEventProcessor = r.addGlobalEventProcessor),
                (n.addTracingExtensions = r.addTracingExtensions),
                (n.captureEvent = r.captureEvent),
                (n.captureException = r.captureException),
                (n.captureMessage = r.captureMessage),
                (n.configureScope = r.configureScope),
                (n.createTransport = r.createTransport),
                (n.extractTraceparentData = r.extractTraceparentData),
                (n.getActiveTransaction = r.getActiveTransaction),
                (n.getCurrentHub = r.getCurrentHub),
                (n.getHubFromCarrier = r.getHubFromCarrier),
                (n.makeMain = r.makeMain),
                (n.makeMultiplexedTransport = r.makeMultiplexedTransport),
                (n.setContext = r.setContext),
                (n.setExtra = r.setExtra),
                (n.setExtras = r.setExtras),
                (n.setTag = r.setTag),
                (n.setTags = r.setTags),
                (n.setUser = r.setUser),
                (n.spanStatusfromHttpCode = r.spanStatusfromHttpCode),
                (n.startTransaction = r.startTransaction),
                (n.trace = r.trace),
                (n.withScope = r.withScope),
                (n.WINDOW = s.WINDOW),
                (n.BrowserClient = i.BrowserClient),
                (n.makeFetchTransport = o.makeFetchTransport),
                (n.makeXHRTransport = a.makeXHRTransport),
                (n.chromeStackLineParser = c.chromeStackLineParser),
                (n.defaultStackLineParsers = c.defaultStackLineParsers),
                (n.defaultStackParser = c.defaultStackParser),
                (n.geckoStackLineParser = c.geckoStackLineParser),
                (n.opera10StackLineParser = c.opera10StackLineParser),
                (n.opera11StackLineParser = c.opera11StackLineParser),
                (n.winjsStackLineParser = c.winjsStackLineParser),
                (n.eventFromException = u.eventFromException),
                (n.eventFromMessage = u.eventFromMessage),
                (n.createUserFeedbackEnvelope = l.createUserFeedbackEnvelope),
                (n.captureUserFeedback = d.captureUserFeedback),
                (n.close = d.close),
                (n.defaultIntegrations = d.defaultIntegrations),
                (n.flush = d.flush),
                (n.forceLoad = d.forceLoad),
                (n.init = d.init),
                (n.lastEventId = d.lastEventId),
                (n.onLoad = d.onLoad),
                (n.showReportDialog = d.showReportDialog),
                (n.wrap = d.wrap),
                (n.Replay = f.Replay),
                (n.BrowserTracing = _.BrowserTracing),
                (n.defaultRequestInstrumentationOptions = _.defaultRequestInstrumentationOptions),
                (n.instrumentOutgoingRequests = _.instrumentOutgoingRequests),
                (n.makeBrowserOfflineTransport = h.makeBrowserOfflineTransport),
                (n.onProfilingStartRouteTransaction = m.onProfilingStartRouteTransaction),
                (n.BrowserProfilingIntegration = g.BrowserProfilingIntegration),
                (n.GlobalHandlers = y.GlobalHandlers),
                (n.TryCatch = b.TryCatch),
                (n.Breadcrumbs = v.Breadcrumbs),
                (n.LinkedErrors = E.LinkedErrors),
                (n.HttpContext = S.HttpContext),
                (n.Dedupe = w.Dedupe),
                (n.Integrations = k);
            },
            {
              "./client.js": 34,
              "./eventbuilder.js": 35,
              "./helpers.js": 36,
              "./integrations/breadcrumbs.js": 38,
              "./integrations/dedupe.js": 39,
              "./integrations/globalhandlers.js": 40,
              "./integrations/httpcontext.js": 41,
              "./integrations/index.js": 42,
              "./integrations/linkederrors.js": 43,
              "./integrations/trycatch.js": 44,
              "./profiling/hubextensions.js": 46,
              "./profiling/integration.js": 47,
              "./sdk.js": 50,
              "./stack-parsers.js": 51,
              "./transports/fetch.js": 52,
              "./transports/offline.js": 53,
              "./transports/xhr.js": 55,
              "./userfeedback.js": 56,
              "@sentry-internal/tracing": 24,
              "@sentry/core": 64,
              "@sentry/replay": 98
            }
          ],
          38: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("../helpers.js"),
                o = 1024,
                a = "Breadcrumbs";
              class c {
                static __initStatic() {
                  this.id = a;
                }
                __init() {
                  this.name = c.id;
                }
                constructor(e) {
                  c.prototype.__init.call(this),
                    (this.options = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...e });
                }
                setupOnce() {
                  this.options.console && s.addInstrumentationHandler("console", u),
                    this.options.dom &&
                      s.addInstrumentationHandler(
                        "dom",
                        (function (e) {
                          function t(t) {
                            let n,
                              i = "object" == typeof e ? e.serializeAttribute : undefined,
                              a = "object" == typeof e && "number" == typeof e.maxStringLength ? e.maxStringLength : undefined;
                            a &&
                              a > o &&
                              (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                                s.logger.warn(
                                  `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`
                                ),
                              (a = o)),
                              "string" == typeof i && (i = [i]);
                            try {
                              const e = t.event;
                              n = (function (e) {
                                return e && !!e.target;
                              })(e)
                                ? s.htmlTreeAsString(e.target, { keyAttrs: i, maxStringLength: a })
                                : s.htmlTreeAsString(e, { keyAttrs: i, maxStringLength: a });
                            } catch (e) {
                              n = "<unknown>";
                            }
                            0 !== n.length &&
                              r
                                .getCurrentHub()
                                .addBreadcrumb(
                                  { category: `ui.${t.name}`, message: n },
                                  { event: t.event, name: t.name, global: t.global }
                                );
                          }
                          return t;
                        })(this.options.dom)
                      ),
                    this.options.xhr && s.addInstrumentationHandler("xhr", l),
                    this.options.fetch && s.addInstrumentationHandler("fetch", d),
                    this.options.history && s.addInstrumentationHandler("history", p);
                }
                addSentryBreadcrumb(e) {
                  this.options.sentry &&
                    r
                      .getCurrentHub()
                      .addBreadcrumb(
                        {
                          category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                          event_id: e.event_id,
                          level: e.level,
                          message: s.getEventDescription(e)
                        },
                        { event: e }
                      );
                }
              }
              function u(e) {
                for (let t = 0; t < e.args.length; t++)
                  if ("ref=Ref<" === e.args[t]) {
                    e.args[t + 1] = "viewRef";
                    break;
                  }
                const t = {
                  category: "console",
                  data: { arguments: e.args, logger: "console" },
                  level: s.severityLevelFromString(e.level),
                  message: s.safeJoin(e.args, " ")
                };
                if ("assert" === e.level) {
                  if (!1 !== e.args[0]) return;
                  (t.message = `Assertion failed: ${s.safeJoin(e.args.slice(1), " ") || "console.assert"}`),
                    (t.data.arguments = e.args.slice(1));
                }
                r.getCurrentHub().addBreadcrumb(t, { input: e.args, level: e.level });
              }
              function l(e) {
                const { startTimestamp: t, endTimestamp: n } = e,
                  i = e.xhr[s.SENTRY_XHR_DATA_KEY];
                if (!t || !n || !i) return;
                const { method: o, url: a, status_code: c, body: u } = i,
                  l = { method: o, url: a, status_code: c },
                  d = { xhr: e.xhr, input: u, startTimestamp: t, endTimestamp: n };
                r.getCurrentHub().addBreadcrumb({ category: "xhr", data: l, type: "http" }, d);
              }
              function d(e) {
                const { startTimestamp: t, endTimestamp: n } = e;
                if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
                  if (e.error) {
                    const s = e.fetchData,
                      i = { data: e.error, input: e.args, startTimestamp: t, endTimestamp: n };
                    r.getCurrentHub().addBreadcrumb({ category: "fetch", data: s, level: "error", type: "http" }, i);
                  } else {
                    const s = { ...e.fetchData, status_code: e.response && e.response.status },
                      i = { input: e.args, response: e.response, startTimestamp: t, endTimestamp: n };
                    r.getCurrentHub().addBreadcrumb({ category: "fetch", data: s, type: "http" }, i);
                  }
              }
              function p(e) {
                let t = e.from,
                  n = e.to;
                const o = s.parseUrl(i.WINDOW.location.href);
                let a = s.parseUrl(t);
                const c = s.parseUrl(n);
                a.path || (a = o),
                  o.protocol === c.protocol && o.host === c.host && (n = c.relative),
                  o.protocol === a.protocol && o.host === a.host && (t = a.relative),
                  r.getCurrentHub().addBreadcrumb({ category: "navigation", data: { from: t, to: n } });
              }
              c.__initStatic(), (n.BREADCRUMB_INTEGRATION_ID = a), (n.Breadcrumbs = c);
            },
            { "../helpers.js": 36, "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          39: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              class s {
                constructor() {
                  s.prototype.__init.call(this);
                }
                static __initStatic() {
                  this.id = "Dedupe";
                }
                __init() {
                  this.name = s.id;
                }
                setupOnce(e, t) {
                  const n = (e) => {
                    if (e.type) return e;
                    const n = t().getIntegration(s);
                    if (n) {
                      try {
                        if (
                          (function (e, t) {
                            if (!t) return !1;
                            if (
                              (function (e, t) {
                                const n = e.message,
                                  r = t.message;
                                if (!n && !r) return !1;
                                if ((n && !r) || (!n && r)) return !1;
                                if (n !== r) return !1;
                                if (!o(e, t)) return !1;
                                if (!i(e, t)) return !1;
                                return !0;
                              })(e, t)
                            )
                              return !0;
                            if (
                              (function (e, t) {
                                const n = a(t),
                                  r = a(e);
                                if (!n || !r) return !1;
                                if (n.type !== r.type || n.value !== r.value) return !1;
                                if (!o(e, t)) return !1;
                                if (!i(e, t)) return !1;
                                return !0;
                              })(e, t)
                            )
                              return !0;
                            return !1;
                          })(e, n._previousEvent)
                        )
                          return (
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                              r.logger.warn("Event dropped due to being a duplicate of previously captured event."),
                            null
                          );
                      } catch (t) {
                        return (n._previousEvent = e);
                      }
                      return (n._previousEvent = e);
                    }
                    return e;
                  };
                  (n.id = this.name), e(n);
                }
              }
              function i(e, t) {
                let n = c(e),
                  r = c(t);
                if (!n && !r) return !0;
                if ((n && !r) || (!n && r)) return !1;
                if (r.length !== n.length) return !1;
                for (let e = 0; e < r.length; e++) {
                  const t = r[e],
                    s = n[e];
                  if (t.filename !== s.filename || t.lineno !== s.lineno || t.colno !== s.colno || t.function !== s.function) return !1;
                }
                return !0;
              }
              function o(e, t) {
                let n = e.fingerprint,
                  r = t.fingerprint;
                if (!n && !r) return !0;
                if ((n && !r) || (!n && r)) return !1;
                try {
                  return !(n.join("") !== r.join(""));
                } catch (e) {
                  return !1;
                }
              }
              function a(e) {
                return e.exception && e.exception.values && e.exception.values[0];
              }
              function c(e) {
                const t = e.exception;
                if (t)
                  try {
                    return t.values[0].stacktrace.frames;
                  } catch (e) {
                    return undefined;
                  }
                return undefined;
              }
              s.__initStatic(), (n.Dedupe = s);
            },
            { "@sentry/utils": 120 }
          ],
          40: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("../eventbuilder.js"),
                o = e("../helpers.js");
              class a {
                static __initStatic() {
                  this.id = "GlobalHandlers";
                }
                __init() {
                  this.name = a.id;
                }
                __init2() {
                  this._installFunc = { onerror: c, onunhandledrejection: u };
                }
                constructor(e) {
                  a.prototype.__init.call(this),
                    a.prototype.__init2.call(this),
                    (this._options = { onerror: !0, onunhandledrejection: !0, ...e });
                }
                setupOnce() {
                  Error.stackTraceLimit = 50;
                  const e = this._options;
                  for (const n in e) {
                    const r = this._installFunc[n];
                    r &&
                      e[n] &&
                      ((t = n),
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log(`Global Handler attached: ${t}`),
                      r(),
                      (this._installFunc[n] = undefined));
                  }
                  var t;
                }
              }
              function c() {
                s.addInstrumentationHandler("error", (e) => {
                  const [t, n, r] = p();
                  if (!t.getIntegration(a)) return;
                  const { msg: c, url: u, line: f, column: _, error: h } = e;
                  if (o.shouldIgnoreOnError() || (h && h.__sentry_own_request__)) return;
                  const m =
                    h === undefined && s.isString(c)
                      ? (function (e, t, n, r) {
                          const i =
                            /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
                          let o = s.isErrorEvent(e) ? e.message : e,
                            a = "Error";
                          const c = o.match(i);
                          c && ((a = c[1]), (o = c[2]));
                          const u = { exception: { values: [{ type: a, value: o }] } };
                          return l(u, t, n, r);
                        })(c, u, f, _)
                      : l(i.eventFromUnknownInput(n, h || c, undefined, r, !1), u, f, _);
                  (m.level = "error"), d(t, h, m, "onerror");
                });
              }
              function u() {
                s.addInstrumentationHandler("unhandledrejection", (e) => {
                  const [t, n, r] = p();
                  if (!t.getIntegration(a)) return;
                  let c = e;
                  try {
                    "reason" in e ? (c = e.reason) : "detail" in e && "reason" in e.detail && (c = e.detail.reason);
                  } catch (e) {}
                  if (o.shouldIgnoreOnError() || (c && c.__sentry_own_request__)) return !0;
                  const u = s.isPrimitive(c)
                    ? {
                        exception: {
                          values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(c)}` }]
                        }
                      }
                    : i.eventFromUnknownInput(n, c, undefined, r, !0);
                  (u.level = "error"), d(t, c, u, "onunhandledrejection");
                });
              }
              function l(e, t, n, r) {
                const i = (e.exception = e.exception || {}),
                  o = (i.values = i.values || []),
                  a = (o[0] = o[0] || {}),
                  c = (a.stacktrace = a.stacktrace || {}),
                  u = (c.frames = c.frames || []),
                  l = isNaN(parseInt(r, 10)) ? undefined : r,
                  d = isNaN(parseInt(n, 10)) ? undefined : n,
                  p = s.isString(t) && t.length > 0 ? t : s.getLocationHref();
                return 0 === u.length && u.push({ colno: l, filename: p, function: "?", in_app: !0, lineno: d }), e;
              }
              function d(e, t, n, r) {
                s.addExceptionMechanism(n, { handled: !1, type: r }), e.captureEvent(n, { originalException: t });
              }
              function p() {
                const e = r.getCurrentHub(),
                  t = e.getClient(),
                  n = (t && t.getOptions()) || { stackParser: () => [], attachStacktrace: !1 };
                return [e, n.stackParser, n.attachStacktrace];
              }
              a.__initStatic(), (n.GlobalHandlers = a);
            },
            { "../eventbuilder.js": 35, "../helpers.js": 36, "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          41: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("../helpers.js");
              class i {
                constructor() {
                  i.prototype.__init.call(this);
                }
                static __initStatic() {
                  this.id = "HttpContext";
                }
                __init() {
                  this.name = i.id;
                }
                setupOnce() {
                  r.addGlobalEventProcessor((e) => {
                    if (r.getCurrentHub().getIntegration(i)) {
                      if (!s.WINDOW.navigator && !s.WINDOW.location && !s.WINDOW.document) return e;
                      const t = (e.request && e.request.url) || (s.WINDOW.location && s.WINDOW.location.href),
                        { referrer: n } = s.WINDOW.document || {},
                        { userAgent: r } = s.WINDOW.navigator || {},
                        i = { ...(e.request && e.request.headers), ...(n && { Referer: n }), ...(r && { "User-Agent": r }) },
                        o = { ...e.request, ...(t && { url: t }), headers: i };
                      return { ...e, request: o };
                    }
                    return e;
                  });
                }
              }
              i.__initStatic(), (n.HttpContext = i);
            },
            { "../helpers.js": 36, "@sentry/core": 64 }
          ],
          42: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./globalhandlers.js"),
                s = e("./trycatch.js"),
                i = e("./breadcrumbs.js"),
                o = e("./linkederrors.js"),
                a = e("./httpcontext.js"),
                c = e("./dedupe.js");
              (n.GlobalHandlers = r.GlobalHandlers),
                (n.TryCatch = s.TryCatch),
                (n.Breadcrumbs = i.Breadcrumbs),
                (n.LinkedErrors = o.LinkedErrors),
                (n.HttpContext = a.HttpContext),
                (n.Dedupe = c.Dedupe);
            },
            {
              "./breadcrumbs.js": 38,
              "./dedupe.js": 39,
              "./globalhandlers.js": 40,
              "./httpcontext.js": 41,
              "./linkederrors.js": 43,
              "./trycatch.js": 44
            }
          ],
          43: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("../eventbuilder.js");
              class o {
                static __initStatic() {
                  this.id = "LinkedErrors";
                }
                __init() {
                  this.name = o.id;
                }
                constructor(e = {}) {
                  o.prototype.__init.call(this), (this._key = e.key || "cause"), (this._limit = e.limit || 5);
                }
                setupOnce() {
                  const e = r.getCurrentHub().getClient();
                  e &&
                    r.addGlobalEventProcessor((t, n) => {
                      const s = r.getCurrentHub().getIntegration(o);
                      return s ? a(e.getOptions().stackParser, s._key, s._limit, t, n) : t;
                    });
                }
              }
              function a(e, t, n, r, i) {
                if (!(r.exception && r.exception.values && i && s.isInstanceOf(i.originalException, Error))) return r;
                const o = c(e, n, i.originalException, t);
                return (r.exception.values = [...o, ...r.exception.values]), r;
              }
              function c(e, t, n, r, o = []) {
                if (!s.isInstanceOf(n[r], Error) || o.length + 1 >= t) return o;
                const a = i.exceptionFromError(e, n[r]);
                return c(e, t, n[r], r, [a, ...o]);
              }
              o.__initStatic(), (n.LinkedErrors = o), (n._handler = a), (n._walkErrorTree = c);
            },
            { "../eventbuilder.js": 35, "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          44: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("../helpers.js"),
                i = [
                  "EventTarget",
                  "Window",
                  "Node",
                  "ApplicationCache",
                  "AudioTrackList",
                  "ChannelMergerNode",
                  "CryptoOperation",
                  "EventSource",
                  "FileReader",
                  "HTMLUnknownElement",
                  "IDBDatabase",
                  "IDBRequest",
                  "IDBTransaction",
                  "KeyOperation",
                  "MediaController",
                  "MessagePort",
                  "ModalWindow",
                  "Notification",
                  "SVGElementInstance",
                  "Screen",
                  "TextTrack",
                  "TextTrackCue",
                  "TextTrackList",
                  "WebSocket",
                  "WebSocketWorker",
                  "Worker",
                  "XMLHttpRequest",
                  "XMLHttpRequestEventTarget",
                  "XMLHttpRequestUpload"
                ];
              class o {
                static __initStatic() {
                  this.id = "TryCatch";
                }
                __init() {
                  this.name = o.id;
                }
                constructor(e) {
                  o.prototype.__init.call(this),
                    (this._options = {
                      XMLHttpRequest: !0,
                      eventTarget: !0,
                      requestAnimationFrame: !0,
                      setInterval: !0,
                      setTimeout: !0,
                      ...e
                    });
                }
                setupOnce() {
                  this._options.setTimeout && r.fill(s.WINDOW, "setTimeout", a),
                    this._options.setInterval && r.fill(s.WINDOW, "setInterval", a),
                    this._options.requestAnimationFrame && r.fill(s.WINDOW, "requestAnimationFrame", c),
                    this._options.XMLHttpRequest && "XMLHttpRequest" in s.WINDOW && r.fill(XMLHttpRequest.prototype, "send", u);
                  const e = this._options.eventTarget;
                  if (e) {
                    (Array.isArray(e) ? e : i).forEach(l);
                  }
                }
              }
              function a(e) {
                return function (...t) {
                  const n = t[0];
                  return (
                    (t[0] = s.wrap(n, { mechanism: { data: { function: r.getFunctionName(e) }, handled: !0, type: "instrument" } })),
                    e.apply(this, t)
                  );
                };
              }
              function c(e) {
                return function (t) {
                  return e.apply(this, [
                    s.wrap(t, {
                      mechanism: {
                        data: { function: "requestAnimationFrame", handler: r.getFunctionName(e) },
                        handled: !0,
                        type: "instrument"
                      }
                    })
                  ]);
                };
              }
              function u(e) {
                return function (...t) {
                  const n = this;
                  return (
                    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e) => {
                      e in n &&
                        "function" == typeof n[e] &&
                        r.fill(n, e, function (t) {
                          const n = {
                              mechanism: { data: { function: e, handler: r.getFunctionName(t) }, handled: !0, type: "instrument" }
                            },
                            i = r.getOriginalFunction(t);
                          return i && (n.mechanism.data.handler = r.getFunctionName(i)), s.wrap(t, n);
                        });
                    }),
                    e.apply(this, t)
                  );
                };
              }
              function l(e) {
                const t = s.WINDOW,
                  n = t[e] && t[e].prototype;
                n &&
                  n.hasOwnProperty &&
                  n.hasOwnProperty("addEventListener") &&
                  (r.fill(n, "addEventListener", function (t) {
                    return function (n, i, o) {
                      try {
                        "function" == typeof i.handleEvent &&
                          (i.handleEvent = s.wrap(i.handleEvent, {
                            mechanism: {
                              data: { function: "handleEvent", handler: r.getFunctionName(i), target: e },
                              handled: !0,
                              type: "instrument"
                            }
                          }));
                      } catch (e) {}
                      return t.apply(this, [
                        n,
                        s.wrap(i, {
                          mechanism: {
                            data: { function: "addEventListener", handler: r.getFunctionName(i), target: e },
                            handled: !0,
                            type: "instrument"
                          }
                        }),
                        o
                      ]);
                    };
                  }),
                  r.fill(n, "removeEventListener", function (e) {
                    return function (t, n, r) {
                      const s = n;
                      try {
                        const n = s && s.__sentry_wrapped__;
                        n && e.call(this, t, n, r);
                      } catch (e) {}
                      return e.call(this, t, s, r);
                    };
                  }));
              }
              o.__initStatic(), (n.TryCatch = o);
            },
            { "../helpers.js": 36, "@sentry/utils": 120 }
          ],
          45: [
            function (e, t, n) {
              function r(e) {
                let t = [],
                  n = {};
                return {
                  add(r, s) {
                    for (; t.length >= e; ) {
                      const e = t.shift();
                      e !== undefined && delete n[e];
                    }
                    n[r] && this.delete(r), t.push(r), (n[r] = s);
                  },
                  clear() {
                    (n = {}), (t = []);
                  },
                  get: (e) => n[e],
                  size: () => t.length,
                  delete(e) {
                    if (!n[e]) return !1;
                    delete n[e];
                    for (let n = 0; n < t.length; n++)
                      if (t[n] === e) {
                        t.splice(n, 1);
                        break;
                      }
                    return !0;
                  }
                };
              }
              Object.defineProperty(n, "__esModule", { value: !0 });
              const s = r(20);
              (n.PROFILING_EVENT_CACHE = s), (n.makeProfilingCache = r);
            },
            {}
          ],
          46: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("../helpers.js"),
                o = e("./sendProfile.js"),
                a = 3e4;
              let c = !1;
              function u(e) {
                const t = i.WINDOW.Profiler;
                if ("function" != typeof t)
                  return (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."),
                    e
                  );
                if (!e.sampled)
                  return (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("[Profiling] Transaction is not sampled, skipping profiling"),
                    e
                  );
                if (c)
                  return (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("[Profiling] Profiling has been disabled for the duration of the current user session."),
                    e
                  );
                const n = r.getCurrentHub().getClient(),
                  u = n && n.getOptions(),
                  l = (u && u.profilesSampleRate) || 0;
                if (l === undefined)
                  return (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("[Profiling] Profiling disabled, enable it by setting `profilesSampleRate` option to SDK init call."),
                    e
                  );
                if (Math.random() > l)
                  return (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("[Profiling] Skip profiling transaction due to sampling."),
                    e
                  );
                const d = Math.floor(a / 10);
                let p;
                try {
                  p = new t({ sampleInterval: 10, maxBufferSize: d });
                } catch (e) {
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    (s.logger.log(
                      "[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."
                    ),
                    s.logger.log("[Profiling] Disabling profiling for current user session.")),
                    (c = !0);
                }
                if (!p) return e;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  s.logger.log(`[Profiling] started profiling transaction: ${e.name || e.description}`);
                const f = s.uuid4();
                let _ = null;
                function h() {
                  e &&
                    p &&
                    (_
                      ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.log("[Profiling] profile for:", e.name || e.description, "already exists, returning early")
                      : p
                          .stop()
                          .then((t) => {
                            m && (i.WINDOW.clearTimeout(m), (m = undefined)),
                              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                                s.logger.log(`[Profiling] stopped profiling of transaction: ${e.name || e.description}`),
                              t
                                ? t.samples.length < 2 || ((_ = { ...t, profile_id: f }), o.sendProfile(f, _))
                                : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                                  s.logger.log(
                                    `[Profiling] profiler returned null profile for: ${e.name || e.description}`,
                                    "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"
                                  );
                          })
                          .catch(
                            (e) => (
                              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                                s.logger.log("[Profiling] error while stopping profiler:", e),
                              null
                            )
                          ));
                }
                let m = i.WINDOW.setTimeout(() => {
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    s.logger.log("[Profiling] max profile duration elapsed, stopping profiling for:", e.name || e.description),
                    h();
                }, a);
                const g = e.finish.bind(e);
                return (
                  (e.finish = function () {
                    return e ? (h(), e.setContext("profile", { profile_id: f }), g()) : g();
                  }),
                  e
                );
              }
              (n.addProfilingExtensionMethods = function () {
                const e = r.getMainCarrier();
                var t;
                e.__SENTRY__
                  ? ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
                    e.__SENTRY__.extensions.startTransaction
                      ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.log("[Profiling] startTransaction exists, patching it with profiling functionality..."),
                        (e.__SENTRY__.extensions.startTransaction =
                          ((t = e.__SENTRY__.extensions.startTransaction),
                          function (e, n) {
                            const r = t.call(this, e, n);
                            return r === undefined
                              ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                                  s.logger.log("[Profiling] Transaction is undefined, skipping profiling"),
                                r)
                              : u(r);
                          })))
                      : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.log(
                          "[Profiling] startTransaction does not exists, profiling will not work. Make sure you import @sentry/tracing package before @sentry/profiling-node as import order matters."
                        ))
                  : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    s.logger.log("[Profiling] Can't find main carrier, profiling won't work.");
              }),
                (n.onProfilingStartRouteTransaction = function (e) {
                  return e
                    ? u(e)
                    : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.log("[Profiling] Transaction is undefined, skipping profiling"),
                      e);
                });
            },
            { "../helpers.js": 36, "./sendProfile.js": 48, "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          47: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("./cache.js"),
                i = e("./hubextensions.js");
              class o {
                constructor() {
                  o.prototype.__init.call(this);
                }
                __init() {
                  this.name = "BrowserProfilingIntegration";
                }
                setupOnce(e) {
                  i.addProfilingExtensionMethods(), e(this.handleGlobalEvent.bind(this));
                }
                handleGlobalEvent(e) {
                  const t = e.contexts && e.contexts.profile && e.contexts.profile.profile_id;
                  return (
                    t &&
                      "string" == typeof t &&
                      (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.log("[Profiling] Profiling event found, caching it."),
                      s.PROFILING_EVENT_CACHE.add(t, e)),
                    e
                  );
                }
              }
              n.BrowserProfilingIntegration = o;
            },
            { "./cache.js": 45, "./hubextensions.js": 46, "@sentry/utils": 120 }
          ],
          48: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("./cache.js"),
                o = e("./utils.js");
              n.sendProfile = function (e, t) {
                const n = i.PROFILING_EVENT_CACHE.get(e);
                if (!n)
                  return void (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    s.logger.log("[Profiling] Couldn't find a transaction event for this profile, dropping it.")
                  );
                (n.sdkProcessingMetadata = n.sdkProcessingMetadata || {}),
                  n.sdkProcessingMetadata && !n.sdkProcessingMetadata.profile && (n.sdkProcessingMetadata.profile = t);
                const a = r.getCurrentHub().getClient();
                if (!a)
                  return void (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    s.logger.log(
                      "[Profiling] getClient did not return a Client, removing profile from event and forwarding to next event processors."
                    )
                  );
                const c = a.getDsn();
                if (!c)
                  return void (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    s.logger.log(
                      "[Profiling] getDsn did not return a Dsn, removing profile from event and forwarding to next event processors."
                    )
                  );
                const u = a.getTransport();
                if (!u)
                  return void (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    s.logger.log(
                      "[Profiling] getTransport did not return a Transport, removing profile from event and forwarding to next event processors."
                    )
                  );
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  s.logger.log("[Profiling] Preparing envelope and sending a profiling event");
                const l = o.createProfilingEventEnvelope(n, c);
                i.PROFILING_EVENT_CACHE.delete(e),
                  l
                    ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.log("[Profiling] Envelope constructed, sending it"),
                      u.send(l).then(null, (e) => {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.log("[Profiling] Error while sending event:", e);
                      }))
                    : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.log("[Profiling] Failed to construct envelope");
              };
            },
            { "./cache.js": 45, "./utils.js": 49, "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          49: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("../helpers.js"),
                o = 1e6,
                a = String(0),
                c = "main";
              let u = "",
                l = "",
                d = "",
                p = (i.WINDOW.navigator && i.WINDOW.navigator.userAgent) || "",
                f = "";
              const _ =
                (i.WINDOW.navigator && i.WINDOW.navigator.language) ||
                (i.WINDOW.navigator && i.WINDOW.navigator.languages && i.WINDOW.navigator.languages[0]) ||
                "";
              const h = i.WINDOW.navigator && i.WINDOW.navigator.userAgentData;
              var m;
              function g(e) {
                return (function (e) {
                  return !("thread_metadata" in e);
                })(e)
                  ? y(e)
                  : e;
              }
              function y(e) {
                let t = undefined,
                  n = 0;
                const r = { samples: [], stacks: [], frames: [], thread_metadata: { [a]: { name: c } } };
                if (!e.samples.length) return r;
                const s = e.samples[0].timestamp;
                for (let i = 0; i < e.samples.length; i++) {
                  const c = e.samples[i];
                  if (c.stackId === undefined) {
                    t === undefined && ((t = n), (r.stacks[t] = []), n++),
                      (r.samples[i] = { elapsed_since_start_ns: ((c.timestamp - s) * o).toFixed(0), stack_id: t, thread_id: a });
                    continue;
                  }
                  let u = e.stacks[c.stackId];
                  const l = [];
                  for (; u; ) {
                    l.push(u.frameId);
                    const t = e.frames[u.frameId];
                    r.frames[u.frameId] === undefined &&
                      (r.frames[u.frameId] = {
                        function: t.name,
                        file: t.resourceId ? e.resources[t.resourceId] : undefined,
                        line: t.line,
                        column: t.column
                      }),
                      (u = u.parentId === undefined ? undefined : e.stacks[u.parentId]);
                  }
                  const d = { elapsed_since_start_ns: ((c.timestamp - s) * o).toFixed(0), stack_id: n, thread_id: a };
                  (r.stacks[n] = l), (r.samples[i] = d), n++;
                }
                return r;
              }
              "object" == typeof (m = h) &&
                null !== m &&
                "getHighEntropyValues" in m &&
                h
                  .getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"])
                  .then((e) => {
                    if (
                      ((u = e.platform || ""),
                      (d = e.architecture || ""),
                      (f = e.model || ""),
                      (l = e.platformVersion || ""),
                      e.fullVersionList && e.fullVersionList.length > 0)
                    ) {
                      const t = e.fullVersionList[e.fullVersionList.length - 1];
                      p = `${t.brand} ${t.version}`;
                    }
                  })
                  .catch((e) => {}),
                (n.convertJSSelfProfileToSampledFormat = y),
                (n.createProfilingEventEnvelope = function (e, t, n, o) {
                  if ("transaction" !== e.type)
                    throw new TypeError("Profiling events may only be attached to transactions, this should never occur.");
                  const c = e.sdkProcessingMetadata.profile;
                  if (c === undefined || null === c)
                    throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${c} instead.`);
                  if (!c.profile_id) throw new TypeError("Profile is missing profile_id");
                  if (c.samples.length <= 1)
                    return (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.log("[Profiling] Discarding profile because it contains less than 2 samples"),
                      null
                    );
                  const h = (function (e) {
                      const t = e && e.contexts && e.contexts.trace && e.contexts.trace.trace_id;
                      return (
                        "string" == typeof t &&
                          32 !== t.length &&
                          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.log(`[Profiling] Invalid traceId: ${t} on profiled event`),
                        "string" != typeof t ? "" : t
                      );
                    })(e),
                    m = (function (e) {
                      return e && e.sdk ? { name: e.sdk.name, version: e.sdk.version } : undefined;
                    })(n);
                  !(function (e, t) {
                    t &&
                      ((e.sdk = e.sdk || {}),
                      (e.sdk.name = e.sdk.name || t.name || "unknown sdk"),
                      (e.sdk.version = e.sdk.version || t.version || "unknown sdk version"),
                      (e.sdk.integrations = [...(e.sdk.integrations || []), ...(t.integrations || [])]),
                      (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])]));
                  })(e, n && n.sdk);
                  const y = (function (e, t, n, r) {
                      const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                      return {
                        event_id: e.event_id,
                        sent_at: new Date().toISOString(),
                        ...(t && { sdk: t }),
                        ...(!!n && { dsn: s.dsnToString(r) }),
                        ...("transaction" === e.type && i && { trace: s.dropUndefinedKeys({ ...i }) })
                      };
                    })(e, m, o, t),
                    b = g(c),
                    v = "number" == typeof e.start_timestamp ? 1e3 * e.start_timestamp : Date.now(),
                    E = "number" == typeof e.timestamp ? 1e3 * e.timestamp : Date.now(),
                    S = [
                      { type: "profile" },
                      {
                        event_id: c.profile_id,
                        timestamp: new Date(v).toISOString(),
                        platform: "javascript",
                        version: "1",
                        release: e.release || "",
                        environment: e.environment || r.DEFAULT_ENVIRONMENT,
                        runtime: { name: "javascript", version: i.WINDOW.navigator.userAgent },
                        os: { name: u, version: l, build_number: p },
                        device: { locale: _, model: f, manufacturer: p, architecture: d, is_emulator: !1 },
                        profile: b,
                        transactions: [
                          {
                            name: e.transaction || "",
                            id: e.event_id || s.uuid4(),
                            trace_id: h,
                            active_thread_id: a,
                            relative_start_ns: "0",
                            relative_end_ns: (1e6 * (E - v)).toFixed(0)
                          }
                        ]
                      }
                    ];
                  return s.createEnvelope(y, [S]);
                }),
                (n.enrichWithThreadInformation = g);
            },
            { "../helpers.js": 36, "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          50: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("./client.js"),
                o = e("./helpers.js"),
                a = e("./integrations/globalhandlers.js"),
                c = e("./integrations/trycatch.js"),
                u = e("./integrations/breadcrumbs.js"),
                l = e("./integrations/linkederrors.js"),
                d = e("./integrations/httpcontext.js"),
                p = e("./integrations/dedupe.js"),
                f = e("./stack-parsers.js"),
                _ = e("./transports/fetch.js"),
                h = e("./transports/xhr.js"),
                m = [
                  new r.Integrations.InboundFilters(),
                  new r.Integrations.FunctionToString(),
                  new c.TryCatch(),
                  new u.Breadcrumbs(),
                  new a.GlobalHandlers(),
                  new l.LinkedErrors(),
                  new p.Dedupe(),
                  new d.HttpContext()
                ];
              function g(e) {
                e.startSession({ ignoreDuration: !0 }), e.captureSession();
              }
              (n.captureUserFeedback = function (e) {
                const t = r.getCurrentHub().getClient();
                t && t.captureUserFeedback(e);
              }),
                (n.close = function (e) {
                  const t = r.getCurrentHub().getClient();
                  return t
                    ? t.close(e)
                    : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.warn("Cannot flush events and disable SDK. No client defined."),
                      s.resolvedSyncPromise(!1));
                }),
                (n.defaultIntegrations = m),
                (n.flush = function (e) {
                  const t = r.getCurrentHub().getClient();
                  return t
                    ? t.flush(e)
                    : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.warn("Cannot flush events. No client defined."),
                      s.resolvedSyncPromise(!1));
                }),
                (n.forceLoad = function () {}),
                (n.init = function (e = {}) {
                  e.defaultIntegrations === undefined && (e.defaultIntegrations = m),
                    e.release === undefined &&
                      ("string" == typeof __SENTRY_RELEASE__ && (e.release = __SENTRY_RELEASE__),
                      o.WINDOW.SENTRY_RELEASE && o.WINDOW.SENTRY_RELEASE.id && (e.release = o.WINDOW.SENTRY_RELEASE.id)),
                    e.autoSessionTracking === undefined && (e.autoSessionTracking = !0),
                    e.sendClientReports === undefined && (e.sendClientReports = !0);
                  const t = {
                    ...e,
                    stackParser: s.stackParserFromStackParserOptions(e.stackParser || f.defaultStackParser),
                    integrations: r.getIntegrationsToSetup(e),
                    transport: e.transport || (s.supportsFetch() ? _.makeFetchTransport : h.makeXHRTransport)
                  };
                  r.initAndBind(i.BrowserClient, t),
                    e.autoSessionTracking &&
                      (function () {
                        if (void 0 === o.WINDOW.document)
                          return void (
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                            s.logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")
                          );
                        const e = r.getCurrentHub();
                        if (!e.captureSession) return;
                        g(e),
                          s.addInstrumentationHandler("history", ({ from: e, to: t }) => {
                            e !== undefined && e !== t && g(r.getCurrentHub());
                          });
                      })();
                }),
                (n.lastEventId = function () {
                  return r.getCurrentHub().lastEventId();
                }),
                (n.onLoad = function (e) {
                  e();
                }),
                (n.showReportDialog = function (e = {}, t = r.getCurrentHub()) {
                  if (!o.WINDOW.document)
                    return void (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.error("Global document not defined in showReportDialog call")
                    );
                  const { client: n, scope: i } = t.getStackTop(),
                    a = e.dsn || (n && n.getDsn());
                  if (!a)
                    return void (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.error("DSN not configured for showReportDialog call")
                    );
                  i && (e.user = { ...i.getUser(), ...e.user }), e.eventId || (e.eventId = t.lastEventId());
                  const c = o.WINDOW.document.createElement("script");
                  (c.async = !0), (c.src = r.getReportDialogEndpoint(a, e)), e.onLoad && (c.onload = e.onLoad);
                  const u = o.WINDOW.document.head || o.WINDOW.document.body;
                  u
                    ? u.appendChild(c)
                    : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      s.logger.error("Not injecting report dialog. No injection point found in HTML");
                }),
                (n.wrap = function (e) {
                  return o.wrap(e)();
                });
            },
            {
              "./client.js": 34,
              "./helpers.js": 36,
              "./integrations/breadcrumbs.js": 38,
              "./integrations/dedupe.js": 39,
              "./integrations/globalhandlers.js": 40,
              "./integrations/httpcontext.js": 41,
              "./integrations/linkederrors.js": 43,
              "./integrations/trycatch.js": 44,
              "./stack-parsers.js": 51,
              "./transports/fetch.js": 52,
              "./transports/xhr.js": 55,
              "@sentry/core": 64,
              "@sentry/utils": 120
            }
          ],
          51: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = "?";
              function i(e, t, n, r) {
                const s = { filename: e, function: t, in_app: !0 };
                return n !== undefined && (s.lineno = n), r !== undefined && (s.colno = r), s;
              }
              const o =
                  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                a = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                c = [
                  30,
                  (e) => {
                    const t = o.exec(e);
                    if (t) {
                      if (t[2] && 0 === t[2].indexOf("eval")) {
                        const e = a.exec(t[2]);
                        e && ((t[2] = e[1]), (t[3] = e[2]), (t[4] = e[3]));
                      }
                      const [e, n] = v(t[1] || s, t[2]);
                      return i(n, e, t[3] ? +t[3] : undefined, t[4] ? +t[4] : undefined);
                    }
                  }
                ],
                u =
                  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                d = [
                  50,
                  (e) => {
                    const t = u.exec(e);
                    if (t) {
                      if (t[3] && t[3].indexOf(" > eval") > -1) {
                        const e = l.exec(t[3]);
                        e && ((t[1] = t[1] || "eval"), (t[3] = e[1]), (t[4] = e[2]), (t[5] = ""));
                      }
                      let e = t[3],
                        n = t[1] || s;
                      return ([n, e] = v(n, e)), i(e, n, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
                    }
                  }
                ],
                p = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                f = [
                  40,
                  (e) => {
                    const t = p.exec(e);
                    return t ? i(t[2], t[1] || s, +t[3], t[4] ? +t[4] : undefined) : undefined;
                  }
                ],
                _ = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                h = [
                  10,
                  (e) => {
                    const t = _.exec(e);
                    return t ? i(t[2], t[3] || s, +t[1]) : undefined;
                  }
                ],
                m = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
                g = [
                  20,
                  (e) => {
                    const t = m.exec(e);
                    return t ? i(t[5], t[3] || t[4] || s, +t[1], +t[2]) : undefined;
                  }
                ],
                y = [c, d, f],
                b = r.createStackParser(...y),
                v = (e, t) => {
                  const n = -1 !== e.indexOf("safari-extension"),
                    r = -1 !== e.indexOf("safari-web-extension");
                  return n || r
                    ? [-1 !== e.indexOf("@") ? e.split("@")[0] : s, n ? `safari-extension:${t}` : `safari-web-extension:${t}`]
                    : [e, t];
                };
              (n.chromeStackLineParser = c),
                (n.defaultStackLineParsers = y),
                (n.defaultStackParser = b),
                (n.geckoStackLineParser = d),
                (n.opera10StackLineParser = h),
                (n.opera11StackLineParser = g),
                (n.winjsStackLineParser = f);
            },
            { "@sentry/utils": 120 }
          ],
          52: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils"),
                i = e("./utils.js");
              n.makeFetchTransport = function (e, t = i.getNativeFetchImplementation()) {
                let n = 0,
                  o = 0;
                return r.createTransport(e, function (r) {
                  const a = r.body.length;
                  (n += a), o++;
                  const c = {
                    body: r.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: e.headers,
                    keepalive: n <= 6e4 && o < 15,
                    ...e.fetchOptions
                  };
                  try {
                    return t(e.url, c).then(
                      (e) => (
                        (n -= a),
                        o--,
                        {
                          statusCode: e.status,
                          headers: {
                            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": e.headers.get("Retry-After")
                          }
                        }
                      )
                    );
                  } catch (e) {
                    return i.clearCachedFetchImplementation(), (n -= a), o--, s.rejectedSyncPromise(e);
                  }
                });
              };
            },
            { "./utils.js": 54, "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          53: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils");
              function i(e) {
                return new Promise((t, n) => {
                  (e.oncomplete = e.onsuccess = () => t(e.result)), (e.onabort = e.onerror = () => n(e.error));
                });
              }
              function o(e, t) {
                const n = indexedDB.open(e);
                n.onupgradeneeded = () => n.result.createObjectStore(t);
                const r = i(n);
                return (e) => r.then((n) => e(n.transaction(t, "readwrite").objectStore(t)));
              }
              function a(e) {
                return i(e.getAllKeys());
              }
              function c(e, t, n) {
                return e((e) =>
                  a(e).then((r) => {
                    if (!(r.length >= n)) return e.put(t, Math.max(...r, 0) + 1), i(e.transaction);
                  })
                );
              }
              function u(e) {
                return e((e) =>
                  a(e).then((t) =>
                    0 === t.length ? undefined : i(e.get(t[0])).then((n) => (e.delete(t[0]), i(e.transaction).then(() => n)))
                  )
                );
              }
              function l(e) {
                let t;
                function n() {
                  return t == undefined && (t = o(e.dbName || "sentry-offline", e.storeName || "queue")), t;
                }
                return {
                  insert: async (t) => {
                    try {
                      const r = await s.serializeEnvelope(t, e.textEncoder);
                      await c(n(), r, e.maxQueueSize || 30);
                    } catch (e) {}
                  },
                  pop: async () => {
                    try {
                      const t = await u(n());
                      if (t) return s.parseEnvelope(t, e.textEncoder || new TextEncoder(), e.textDecoder || new TextDecoder());
                    } catch (e) {}
                    return undefined;
                  }
                };
              }
              (n.createStore = o),
                (n.insert = c),
                (n.makeBrowserOfflineTransport = function (e) {
                  return (function (e) {
                    return (t) => e({ ...t, createStore: l });
                  })(r.makeOfflineTransport(e));
                }),
                (n.pop = u);
            },
            { "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          54: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("../helpers.js");
              let i = undefined;
              (n.clearCachedFetchImplementation = function () {
                i = undefined;
              }),
                (n.getNativeFetchImplementation = function () {
                  if (i) return i;
                  if (r.isNativeFetch(s.WINDOW.fetch)) return (i = s.WINDOW.fetch.bind(s.WINDOW));
                  const e = s.WINDOW.document;
                  let t = s.WINDOW.fetch;
                  if (e && "function" == typeof e.createElement)
                    try {
                      const n = e.createElement("iframe");
                      (n.hidden = !0), e.head.appendChild(n);
                      const r = n.contentWindow;
                      r && r.fetch && (t = r.fetch), e.head.removeChild(n);
                    } catch (e) {
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
                    }
                  return (i = t.bind(s.WINDOW));
                });
            },
            { "../helpers.js": 36, "@sentry/utils": 120 }
          ],
          55: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/core"),
                s = e("@sentry/utils");
              n.makeXHRTransport = function (e) {
                return r.createTransport(e, function (t) {
                  return new s.SyncPromise((n, r) => {
                    const s = new XMLHttpRequest();
                    (s.onerror = r),
                      (s.onreadystatechange = () => {
                        4 === s.readyState &&
                          n({
                            statusCode: s.status,
                            headers: {
                              "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
                              "retry-after": s.getResponseHeader("Retry-After")
                            }
                          });
                      }),
                      s.open("POST", e.url);
                    for (const t in e.headers) Object.prototype.hasOwnProperty.call(e.headers, t) && s.setRequestHeader(t, e.headers[t]);
                    s.send(t.body);
                  });
                });
              };
            },
            { "@sentry/core": 64, "@sentry/utils": 120 }
          ],
          56: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              n.createUserFeedbackEnvelope = function (e, { metadata: t, tunnel: n, dsn: s }) {
                const i = {
                    event_id: e.event_id,
                    sent_at: new Date().toISOString(),
                    ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
                    ...(!!n && !!s && { dsn: r.dsnToString(s) })
                  },
                  o = (function (e) {
                    return [{ type: "user_report" }, e];
                  })(e);
                return r.createEnvelope(i, [o]);
              };
            },
            { "@sentry/utils": 120 }
          ],
          57: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = "7";
              function i(e) {
                const t = e.protocol ? `${e.protocol}:` : "",
                  n = e.port ? `:${e.port}` : "";
                return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
              }
              (n.getEnvelopeEndpointWithUrlEncodedAuth = function (e, t = {}) {
                const n = "string" == typeof t ? t : t.tunnel,
                  o = "string" != typeof t && t._metadata ? t._metadata.sdk : undefined;
                return (
                  n ||
                  `${(function (e) {
                    return `${i(e)}${e.projectId}/envelope/`;
                  })(e)}?${(function (e, t) {
                    return r.urlEncode({
                      sentry_key: e.publicKey,
                      sentry_version: s,
                      ...(t && { sentry_client: `${t.name}/${t.version}` })
                    });
                  })(e, o)}`
                );
              }),
                (n.getReportDialogEndpoint = function (e, t) {
                  const n = r.makeDsn(e);
                  if (!n) return "";
                  const s = `${i(n)}embed/error-page/`;
                  let o = `dsn=${r.dsnToString(n)}`;
                  for (const e in t)
                    if ("dsn" !== e)
                      if ("user" === e) {
                        const e = t.user;
                        if (!e) continue;
                        e.name && (o += `&name=${encodeURIComponent(e.name)}`), e.email && (o += `&email=${encodeURIComponent(e.email)}`);
                      } else o += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
                  return `${s}?${o}`;
                });
            },
            { "@sentry/utils": 120 }
          ],
          58: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("./api.js"),
                i = e("./envelope.js"),
                o = e("./integration.js"),
                a = e("./session.js"),
                c = e("./utils/prepareEvent.js"),
                u = "Not capturing exception because it's already been captured.";
              class l {
                __init() {
                  this._integrations = {};
                }
                __init2() {
                  this._integrationsInitialized = !1;
                }
                __init3() {
                  this._numProcessing = 0;
                }
                __init4() {
                  this._outcomes = {};
                }
                __init5() {
                  this._hooks = {};
                }
                constructor(e) {
                  if (
                    (l.prototype.__init.call(this),
                    l.prototype.__init2.call(this),
                    l.prototype.__init3.call(this),
                    l.prototype.__init4.call(this),
                    l.prototype.__init5.call(this),
                    (this._options = e),
                    e.dsn
                      ? (this._dsn = r.makeDsn(e.dsn))
                      : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.warn("No DSN provided, client will not do anything."),
                    this._dsn)
                  ) {
                    const t = s.getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, e);
                    this._transport = e.transport({
                      recordDroppedEvent: this.recordDroppedEvent.bind(this),
                      ...e.transportOptions,
                      url: t
                    });
                  }
                }
                captureException(e, t, n) {
                  if (r.checkOrSetAlreadyCaught(e))
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(u));
                  let s = t && t.event_id;
                  return (
                    this._process(
                      this.eventFromException(e, t)
                        .then((e) => this._captureEvent(e, t, n))
                        .then((e) => {
                          s = e;
                        })
                    ),
                    s
                  );
                }
                captureMessage(e, t, n, s) {
                  let i = n && n.event_id;
                  const o = r.isPrimitive(e) ? this.eventFromMessage(String(e), t, n) : this.eventFromException(e, n);
                  return (
                    this._process(
                      o
                        .then((e) => this._captureEvent(e, n, s))
                        .then((e) => {
                          i = e;
                        })
                    ),
                    i
                  );
                }
                captureEvent(e, t, n) {
                  if (t && t.originalException && r.checkOrSetAlreadyCaught(t.originalException))
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(u));
                  let s = t && t.event_id;
                  return (
                    this._process(
                      this._captureEvent(e, t, n).then((e) => {
                        s = e;
                      })
                    ),
                    s
                  );
                }
                captureSession(e) {
                  this._isEnabled()
                    ? "string" != typeof e.release
                      ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.warn("Discarded session because of missing or non-string release")
                      : (this.sendSession(e), a.updateSession(e, { init: !1 }))
                    : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.warn("SDK not enabled, will not capture session.");
                }
                getDsn() {
                  return this._dsn;
                }
                getOptions() {
                  return this._options;
                }
                getSdkMetadata() {
                  return this._options._metadata;
                }
                getTransport() {
                  return this._transport;
                }
                flush(e) {
                  const t = this._transport;
                  return t ? this._isClientDoneProcessing(e).then((n) => t.flush(e).then((e) => n && e)) : r.resolvedSyncPromise(!0);
                }
                close(e) {
                  return this.flush(e).then((e) => ((this.getOptions().enabled = !1), e));
                }
                setupIntegrations() {
                  this._isEnabled() &&
                    !this._integrationsInitialized &&
                    ((this._integrations = o.setupIntegrations(this._options.integrations)), (this._integrationsInitialized = !0));
                }
                getIntegrationById(e) {
                  return this._integrations[e];
                }
                getIntegration(e) {
                  try {
                    return this._integrations[e.id] || null;
                  } catch (t) {
                    return (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.warn(`Cannot retrieve integration ${e.id} from the current Client`),
                      null
                    );
                  }
                }
                addIntegration(e) {
                  o.setupIntegration(e, this._integrations);
                }
                sendEvent(e, t = {}) {
                  if (this._dsn) {
                    let n = i.createEventEnvelope(e, this._dsn, this._options._metadata, this._options.tunnel);
                    for (const e of t.attachments || [])
                      n = r.addItemToEnvelope(
                        n,
                        r.createAttachmentEnvelopeItem(e, this._options.transportOptions && this._options.transportOptions.textEncoder)
                      );
                    const s = this._sendEnvelope(n);
                    s && s.then((t) => this.emit("afterSendEvent", e, t), null);
                  }
                }
                sendSession(e) {
                  if (this._dsn) {
                    const t = i.createSessionEnvelope(e, this._dsn, this._options._metadata, this._options.tunnel);
                    this._sendEnvelope(t);
                  }
                }
                recordDroppedEvent(e, t, n) {
                  if (this._options.sendClientReports) {
                    const n = `${e}:${t}`;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Adding outcome: "${n}"`),
                      (this._outcomes[n] = this._outcomes[n] + 1 || 1);
                  }
                }
                on(e, t) {
                  this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t);
                }
                emit(e, ...t) {
                  this._hooks[e] && this._hooks[e].forEach((e) => e(...t));
                }
                _updateSessionFromEvent(e, t) {
                  let n = !1,
                    r = !1;
                  const s = t.exception && t.exception.values;
                  if (s) {
                    r = !0;
                    for (const e of s) {
                      const t = e.mechanism;
                      if (t && !1 === t.handled) {
                        n = !0;
                        break;
                      }
                    }
                  }
                  const i = "ok" === e.status;
                  ((i && 0 === e.errors) || (i && n)) &&
                    (a.updateSession(e, { ...(n && { status: "crashed" }), errors: e.errors || Number(r || n) }), this.captureSession(e));
                }
                _isClientDoneProcessing(e) {
                  return new r.SyncPromise((t) => {
                    let n = 0;
                    const r = setInterval(() => {
                      0 == this._numProcessing ? (clearInterval(r), t(!0)) : ((n += 1), e && n >= e && (clearInterval(r), t(!1)));
                    }, 1);
                  });
                }
                _isEnabled() {
                  return !1 !== this.getOptions().enabled && this._dsn !== undefined;
                }
                _prepareEvent(e, t, n) {
                  const r = this.getOptions(),
                    s = Object.keys(this._integrations);
                  return !t.integrations && s.length > 0 && (t.integrations = s), c.prepareEvent(r, e, t, n);
                }
                _captureEvent(e, t = {}, n) {
                  return this._processEvent(e, t, n).then(
                    (e) => e.event_id,
                    (e) => {
                      if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                        const t = e;
                        "log" === t.logLevel ? r.logger.log(t.message) : r.logger.warn(t);
                      }
                      return undefined;
                    }
                  );
                }
                _processEvent(e, t, n) {
                  const s = this.getOptions(),
                    { sampleRate: i } = s;
                  if (!this._isEnabled())
                    return r.rejectedSyncPromise(new r.SentryError("SDK not enabled, will not capture event.", "log"));
                  const o = p(e),
                    a = d(e),
                    c = e.type || "error",
                    u = `before send for type \`${c}\``;
                  if (a && "number" == typeof i && Math.random() > i)
                    return (
                      this.recordDroppedEvent("sample_rate", "error", e),
                      r.rejectedSyncPromise(
                        new r.SentryError(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log")
                      )
                    );
                  const l = "replay_event" === c ? "replay" : c;
                  return this._prepareEvent(e, t, n)
                    .then((n) => {
                      if (null === n)
                        throw (
                          (this.recordDroppedEvent("event_processor", l, e),
                          new r.SentryError("An event processor returned `null`, will not send event.", "log"))
                        );
                      if (t.data && !0 === t.data.__sentry__) return n;
                      const i = (function (e, t, n) {
                        const { beforeSend: r, beforeSendTransaction: s } = e;
                        if (d(t) && r) return r(t, n);
                        if (p(t) && s) return s(t, n);
                        return t;
                      })(s, n, t);
                      return (function (e, t) {
                        const n = `${t} must return \`null\` or a valid event.`;
                        if (r.isThenable(e))
                          return e.then(
                            (e) => {
                              if (!r.isPlainObject(e) && null !== e) throw new r.SentryError(n);
                              return e;
                            },
                            (e) => {
                              throw new r.SentryError(`${t} rejected with ${e}`);
                            }
                          );
                        if (!r.isPlainObject(e) && null !== e) throw new r.SentryError(n);
                        return e;
                      })(i, u);
                    })
                    .then((s) => {
                      if (null === s)
                        throw (
                          (this.recordDroppedEvent("before_send", l, e),
                          new r.SentryError(`${u} returned \`null\`, will not send event.`, "log"))
                        );
                      const i = n && n.getSession();
                      !o && i && this._updateSessionFromEvent(i, s);
                      const a = s.transaction_info;
                      if (o && a && s.transaction !== e.transaction) {
                        const e = "custom";
                        s.transaction_info = { ...a, source: e };
                      }
                      return this.sendEvent(s, t), s;
                    })
                    .then(null, (e) => {
                      if (e instanceof r.SentryError) throw e;
                      throw (
                        (this.captureException(e, { data: { __sentry__: !0 }, originalException: e }),
                        new r.SentryError(
                          `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`
                        ))
                      );
                    });
                }
                _process(e) {
                  this._numProcessing++,
                    e.then(
                      (e) => (this._numProcessing--, e),
                      (e) => (this._numProcessing--, e)
                    );
                }
                _sendEnvelope(e) {
                  if (this._transport && this._dsn)
                    return (
                      this.emit("beforeEnvelope", e),
                      this._transport.send(e).then(null, (e) => {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Error while sending event:", e);
                      })
                    );
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Transport disabled");
                }
                _clearOutcomes() {
                  const e = this._outcomes;
                  return (
                    (this._outcomes = {}),
                    Object.keys(e).map((t) => {
                      const [n, r] = t.split(":");
                      return { reason: n, category: r, quantity: e[t] };
                    })
                  );
                }
              }
              function d(e) {
                return e.type === undefined;
              }
              function p(e) {
                return "transaction" === e.type;
              }
              n.BaseClient = l;
            },
            {
              "./api.js": 57,
              "./envelope.js": 61,
              "./integration.js": 65,
              "./session.js": 71,
              "./utils/prepareEvent.js": 85,
              "@sentry/utils": 120
            }
          ],
          59: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              n.createCheckInEnvelope = function (e, t, n, s) {
                const i = {
                    sent_at: new Date().toISOString(),
                    ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
                    ...(!!n && !!s && { dsn: r.dsnToString(s) })
                  },
                  o = (function (e) {
                    return [{ type: "check_in" }, e];
                  })(e);
                return r.createEnvelope(i, [o]);
              };
            },
            { "@sentry/utils": 120 }
          ],
          60: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.DEFAULT_ENVIRONMENT = "production";
            },
            {}
          ],
          61: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              (n.createEventEnvelope = function (e, t, n, s) {
                const i = r.getSdkMetadataForEnvelopeHeader(n),
                  o = e.type && "replay_event" !== e.type ? e.type : "event";
                !(function (e, t) {
                  t &&
                    ((e.sdk = e.sdk || {}),
                    (e.sdk.name = e.sdk.name || t.name),
                    (e.sdk.version = e.sdk.version || t.version),
                    (e.sdk.integrations = [...(e.sdk.integrations || []), ...(t.integrations || [])]),
                    (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])]));
                })(e, n && n.sdk);
                const a = r.createEventEnvelopeHeaders(e, i, s, t);
                delete e.sdkProcessingMetadata;
                const c = [{ type: o }, e];
                return r.createEnvelope(a, [c]);
              }),
                (n.createSessionEnvelope = function (e, t, n, s) {
                  const i = r.getSdkMetadataForEnvelopeHeader(n),
                    o = { sent_at: new Date().toISOString(), ...(i && { sdk: i }), ...(!!s && { dsn: r.dsnToString(t) }) },
                    a = "aggregates" in e ? [{ type: "sessions" }, e] : [{ type: "session" }, e];
                  return r.createEnvelope(o, [a]);
                });
            },
            { "@sentry/utils": 120 }
          ],
          62: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("./hub.js");
              (n.addBreadcrumb = function (e) {
                s.getCurrentHub().addBreadcrumb(e);
              }),
                (n.captureCheckIn = function (e, t) {
                  const n = s.getCurrentHub().getClient();
                  if (n) {
                    if (n.captureCheckIn) return n.captureCheckIn(e, t);
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.warn("Cannot capture check-in. Client does not support sending check-ins.");
                  } else
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.warn("Cannot capture check-in. No client defined.");
                  return r.uuid4();
                }),
                (n.captureEvent = function (e, t) {
                  return s.getCurrentHub().captureEvent(e, t);
                }),
                (n.captureException = function (e, t) {
                  return s.getCurrentHub().captureException(e, { captureContext: t });
                }),
                (n.captureMessage = function (e, t) {
                  const n = "string" == typeof t ? t : undefined,
                    r = "string" != typeof t ? { captureContext: t } : undefined;
                  return s.getCurrentHub().captureMessage(e, n, r);
                }),
                (n.configureScope = function (e) {
                  s.getCurrentHub().configureScope(e);
                }),
                (n.setContext = function (e, t) {
                  s.getCurrentHub().setContext(e, t);
                }),
                (n.setExtra = function (e, t) {
                  s.getCurrentHub().setExtra(e, t);
                }),
                (n.setExtras = function (e) {
                  s.getCurrentHub().setExtras(e);
                }),
                (n.setTag = function (e, t) {
                  s.getCurrentHub().setTag(e, t);
                }),
                (n.setTags = function (e) {
                  s.getCurrentHub().setTags(e);
                }),
                (n.setUser = function (e) {
                  s.getCurrentHub().setUser(e);
                }),
                (n.startTransaction = function (e, t) {
                  return s.getCurrentHub().startTransaction({ ...e }, t);
                }),
                (n.withScope = function (e) {
                  s.getCurrentHub().withScope(e);
                });
            },
            { "./hub.js": 63, "@sentry/utils": 120 }
          ],
          63: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("./constants.js"),
                i = e("./scope.js"),
                o = e("./session.js"),
                a = 4,
                c = 100;
              class u {
                constructor(e, t = new i.Scope(), n = a) {
                  (this._version = n), (this._stack = [{ scope: t }]), e && this.bindClient(e);
                }
                isOlderThan(e) {
                  return this._version < e;
                }
                bindClient(e) {
                  (this.getStackTop().client = e), e && e.setupIntegrations && e.setupIntegrations();
                }
                pushScope() {
                  const e = i.Scope.clone(this.getScope());
                  return this.getStack().push({ client: this.getClient(), scope: e }), e;
                }
                popScope() {
                  return !(this.getStack().length <= 1) && !!this.getStack().pop();
                }
                withScope(e) {
                  const t = this.pushScope();
                  try {
                    e(t);
                  } finally {
                    this.popScope();
                  }
                }
                getClient() {
                  return this.getStackTop().client;
                }
                getScope() {
                  return this.getStackTop().scope;
                }
                getStack() {
                  return this._stack;
                }
                getStackTop() {
                  return this._stack[this._stack.length - 1];
                }
                captureException(e, t) {
                  const n = (this._lastEventId = t && t.event_id ? t.event_id : r.uuid4()),
                    s = new Error("Sentry syntheticException");
                  return (
                    this._withClient((r, i) => {
                      r.captureException(e, { originalException: e, syntheticException: s, ...t, event_id: n }, i);
                    }),
                    n
                  );
                }
                captureMessage(e, t, n) {
                  const s = (this._lastEventId = n && n.event_id ? n.event_id : r.uuid4()),
                    i = new Error(e);
                  return (
                    this._withClient((r, o) => {
                      r.captureMessage(e, t, { originalException: e, syntheticException: i, ...n, event_id: s }, o);
                    }),
                    s
                  );
                }
                captureEvent(e, t) {
                  const n = t && t.event_id ? t.event_id : r.uuid4();
                  return (
                    e.type || (this._lastEventId = n),
                    this._withClient((r, s) => {
                      r.captureEvent(e, { ...t, event_id: n }, s);
                    }),
                    n
                  );
                }
                lastEventId() {
                  return this._lastEventId;
                }
                addBreadcrumb(e, t) {
                  const { scope: n, client: s } = this.getStackTop();
                  if (!s) return;
                  const { beforeBreadcrumb: i = null, maxBreadcrumbs: o = c } = (s.getOptions && s.getOptions()) || {};
                  if (o <= 0) return;
                  const a = { timestamp: r.dateTimestampInSeconds(), ...e },
                    u = i ? r.consoleSandbox(() => i(a, t)) : a;
                  null !== u && (s.emit && s.emit("beforeAddBreadcrumb", u, t), n.addBreadcrumb(u, o));
                }
                setUser(e) {
                  this.getScope().setUser(e);
                }
                setTags(e) {
                  this.getScope().setTags(e);
                }
                setExtras(e) {
                  this.getScope().setExtras(e);
                }
                setTag(e, t) {
                  this.getScope().setTag(e, t);
                }
                setExtra(e, t) {
                  this.getScope().setExtra(e, t);
                }
                setContext(e, t) {
                  this.getScope().setContext(e, t);
                }
                configureScope(e) {
                  const { scope: t, client: n } = this.getStackTop();
                  n && e(t);
                }
                run(e) {
                  const t = d(this);
                  try {
                    e(this);
                  } finally {
                    d(t);
                  }
                }
                getIntegration(e) {
                  const t = this.getClient();
                  if (!t) return null;
                  try {
                    return t.getIntegration(e);
                  } catch (t) {
                    return (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.warn(`Cannot retrieve integration ${e.id} from the current Hub`),
                      null
                    );
                  }
                }
                startTransaction(e, t) {
                  const n = this._callExtensionMethod("startTransaction", e, t);
                  return (
                    ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) ||
                      n ||
                      console.warn(
                        "Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"
                      ),
                    n
                  );
                }
                traceHeaders() {
                  return this._callExtensionMethod("traceHeaders");
                }
                captureSession(e = !1) {
                  if (e) return this.endSession();
                  this._sendSessionUpdate();
                }
                endSession() {
                  const e = this.getStackTop().scope,
                    t = e.getSession();
                  t && o.closeSession(t), this._sendSessionUpdate(), e.setSession();
                }
                startSession(e) {
                  const { scope: t, client: n } = this.getStackTop(),
                    { release: i, environment: a = s.DEFAULT_ENVIRONMENT } = (n && n.getOptions()) || {},
                    { userAgent: c } = r.GLOBAL_OBJ.navigator || {},
                    u = o.makeSession({ release: i, environment: a, user: t.getUser(), ...(c && { userAgent: c }), ...e }),
                    l = t.getSession && t.getSession();
                  return l && "ok" === l.status && o.updateSession(l, { status: "exited" }), this.endSession(), t.setSession(u), u;
                }
                shouldSendDefaultPii() {
                  const e = this.getClient(),
                    t = e && e.getOptions();
                  return Boolean(t && t.sendDefaultPii);
                }
                _sendSessionUpdate() {
                  const { scope: e, client: t } = this.getStackTop(),
                    n = e.getSession();
                  n && t && t.captureSession && t.captureSession(n);
                }
                _withClient(e) {
                  const { scope: t, client: n } = this.getStackTop();
                  n && e(n, t);
                }
                _callExtensionMethod(e, ...t) {
                  const n = l().__SENTRY__;
                  if (n && n.extensions && "function" == typeof n.extensions[e]) return n.extensions[e].apply(this, t);
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    r.logger.warn(`Extension method ${e} couldn't be found, doing nothing.`);
                }
              }
              function l() {
                return (r.GLOBAL_OBJ.__SENTRY__ = r.GLOBAL_OBJ.__SENTRY__ || { extensions: {}, hub: undefined }), r.GLOBAL_OBJ;
              }
              function d(e) {
                const t = l(),
                  n = _(t);
                return h(t, e), n;
              }
              function p(e = l()) {
                return (f(e) && !_(e).isOlderThan(a)) || h(e, new u()), _(e);
              }
              function f(e) {
                return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
              }
              function _(e) {
                return r.getGlobalSingleton("hub", () => new u(), e);
              }
              function h(e, t) {
                if (!e) return !1;
                return ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t), !0;
              }
              (n.API_VERSION = a),
                (n.Hub = u),
                (n.ensureHubOnCarrier = function (e, t = p()) {
                  if (!f(e) || _(e).isOlderThan(a)) {
                    const n = t.getStackTop();
                    h(e, new u(n.client, i.Scope.clone(n.scope)));
                  }
                }),
                (n.getCurrentHub = function () {
                  const e = l();
                  if (e.__SENTRY__ && e.__SENTRY__.acs) {
                    const t = e.__SENTRY__.acs.getCurrentHub();
                    if (t) return t;
                  }
                  return p(e);
                }),
                (n.getHubFromCarrier = _),
                (n.getMainCarrier = l),
                (n.makeMain = d),
                (n.runWithAsyncContext = function (e, t = {}) {
                  const n = l();
                  return n.__SENTRY__ && n.__SENTRY__.acs ? n.__SENTRY__.acs.runWithAsyncContext(e, t) : e();
                }),
                (n.setAsyncContextStrategy = function (e) {
                  const t = l();
                  (t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.acs = e);
                }),
                (n.setHubOnCarrier = h);
            },
            { "./constants.js": 60, "./scope.js": 69, "./session.js": 71, "@sentry/utils": 120 }
          ],
          64: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./tracing/hubextensions.js"),
                s = e("./tracing/idletransaction.js"),
                i = e("./tracing/span.js"),
                o = e("./tracing/transaction.js"),
                a = e("./tracing/utils.js"),
                c = e("./tracing/spanstatus.js"),
                u = e("./tracing/trace.js"),
                l = e("./exports.js"),
                d = e("./hub.js"),
                p = e("./session.js"),
                f = e("./sessionflusher.js"),
                _ = e("./scope.js"),
                h = e("./api.js"),
                m = e("./baseclient.js"),
                g = e("./sdk.js"),
                y = e("./transports/base.js"),
                b = e("./transports/offline.js"),
                v = e("./transports/multiplexed.js"),
                E = e("./version.js"),
                S = e("./integration.js"),
                w = e("./integrations/index.js"),
                T = e("./utils/prepareEvent.js"),
                k = e("./checkin.js"),
                R = e("./utils/hasTracingEnabled.js"),
                x = e("./constants.js"),
                N = e("./integrations/functiontostring.js"),
                D = e("./integrations/inboundfilters.js"),
                I = e("@sentry/utils");
              (n.addTracingExtensions = r.addTracingExtensions),
                (n.startIdleTransaction = r.startIdleTransaction),
                (n.IdleTransaction = s.IdleTransaction),
                (n.TRACING_DEFAULTS = s.TRACING_DEFAULTS),
                (n.Span = i.Span),
                (n.spanStatusfromHttpCode = i.spanStatusfromHttpCode),
                (n.Transaction = o.Transaction),
                (n.getActiveTransaction = a.getActiveTransaction),
                Object.defineProperty(n, "SpanStatus", { enumerable: !0, get: () => c.SpanStatus }),
                (n.trace = u.trace),
                (n.addBreadcrumb = l.addBreadcrumb),
                (n.captureCheckIn = l.captureCheckIn),
                (n.captureEvent = l.captureEvent),
                (n.captureException = l.captureException),
                (n.captureMessage = l.captureMessage),
                (n.configureScope = l.configureScope),
                (n.setContext = l.setContext),
                (n.setExtra = l.setExtra),
                (n.setExtras = l.setExtras),
                (n.setTag = l.setTag),
                (n.setTags = l.setTags),
                (n.setUser = l.setUser),
                (n.startTransaction = l.startTransaction),
                (n.withScope = l.withScope),
                (n.Hub = d.Hub),
                (n.ensureHubOnCarrier = d.ensureHubOnCarrier),
                (n.getCurrentHub = d.getCurrentHub),
                (n.getHubFromCarrier = d.getHubFromCarrier),
                (n.getMainCarrier = d.getMainCarrier),
                (n.makeMain = d.makeMain),
                (n.runWithAsyncContext = d.runWithAsyncContext),
                (n.setAsyncContextStrategy = d.setAsyncContextStrategy),
                (n.setHubOnCarrier = d.setHubOnCarrier),
                (n.closeSession = p.closeSession),
                (n.makeSession = p.makeSession),
                (n.updateSession = p.updateSession),
                (n.SessionFlusher = f.SessionFlusher),
                (n.Scope = _.Scope),
                (n.addGlobalEventProcessor = _.addGlobalEventProcessor),
                (n.getEnvelopeEndpointWithUrlEncodedAuth = h.getEnvelopeEndpointWithUrlEncodedAuth),
                (n.getReportDialogEndpoint = h.getReportDialogEndpoint),
                (n.BaseClient = m.BaseClient),
                (n.initAndBind = g.initAndBind),
                (n.createTransport = y.createTransport),
                (n.makeOfflineTransport = b.makeOfflineTransport),
                (n.makeMultiplexedTransport = v.makeMultiplexedTransport),
                (n.SDK_VERSION = E.SDK_VERSION),
                (n.getIntegrationsToSetup = S.getIntegrationsToSetup),
                (n.Integrations = w),
                (n.prepareEvent = T.prepareEvent),
                (n.createCheckInEnvelope = k.createCheckInEnvelope),
                (n.hasTracingEnabled = R.hasTracingEnabled),
                (n.DEFAULT_ENVIRONMENT = x.DEFAULT_ENVIRONMENT),
                (n.FunctionToString = N.FunctionToString),
                (n.InboundFilters = D.InboundFilters),
                (n.extractTraceparentData = I.extractTraceparentData);
            },
            {
              "./api.js": 57,
              "./baseclient.js": 58,
              "./checkin.js": 59,
              "./constants.js": 60,
              "./exports.js": 62,
              "./hub.js": 63,
              "./integration.js": 65,
              "./integrations/functiontostring.js": 66,
              "./integrations/inboundfilters.js": 67,
              "./integrations/index.js": 68,
              "./scope.js": 69,
              "./sdk.js": 70,
              "./session.js": 71,
              "./sessionflusher.js": 72,
              "./tracing/hubextensions.js": 74,
              "./tracing/idletransaction.js": 75,
              "./tracing/span.js": 76,
              "./tracing/spanstatus.js": 77,
              "./tracing/trace.js": 78,
              "./tracing/transaction.js": 79,
              "./tracing/utils.js": 80,
              "./transports/base.js": 81,
              "./transports/multiplexed.js": 82,
              "./transports/offline.js": 83,
              "./utils/hasTracingEnabled.js": 84,
              "./utils/prepareEvent.js": 85,
              "./version.js": 86,
              "@sentry/utils": 120
            }
          ],
          65: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("./hub.js"),
                i = e("./scope.js"),
                o = [];
              function a(e, t) {
                (t[e.name] = e),
                  -1 === o.indexOf(e.name) &&
                    (e.setupOnce(i.addGlobalEventProcessor, s.getCurrentHub),
                    o.push(e.name),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Integration installed: ${e.name}`));
              }
              (n.getIntegrationsToSetup = function (e) {
                const t = e.defaultIntegrations || [],
                  n = e.integrations;
                let s;
                t.forEach((e) => {
                  e.isDefaultInstance = !0;
                }),
                  (s = Array.isArray(n) ? [...t, ...n] : "function" == typeof n ? r.arrayify(n(t)) : t);
                const i = (function (e) {
                    const t = {};
                    return (
                      e.forEach((e) => {
                        const { name: n } = e,
                          r = t[n];
                        (r && !r.isDefaultInstance && e.isDefaultInstance) || (t[n] = e);
                      }),
                      Object.keys(t).map((e) => t[e])
                    );
                  })(s),
                  o = (function (e, t) {
                    for (let n = 0; n < e.length; n++) if (!0 === t(e[n])) return n;
                    return -1;
                  })(i, (e) => "Debug" === e.name);
                if (-1 !== o) {
                  const [e] = i.splice(o, 1);
                  i.push(e);
                }
                return i;
              }),
                (n.installedIntegrations = o),
                (n.setupIntegration = a),
                (n.setupIntegrations = function (e) {
                  const t = {};
                  return (
                    e.forEach((e) => {
                      e && a(e, t);
                    }),
                    t
                  );
                });
            },
            { "./hub.js": 63, "./scope.js": 69, "@sentry/utils": 120 }
          ],
          66: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              let s;
              class i {
                constructor() {
                  i.prototype.__init.call(this);
                }
                static __initStatic() {
                  this.id = "FunctionToString";
                }
                __init() {
                  this.name = i.id;
                }
                setupOnce() {
                  s = Function.prototype.toString;
                  try {
                    Function.prototype.toString = function (...e) {
                      const t = r.getOriginalFunction(this) || this;
                      return s.apply(t, e);
                    };
                  } catch (e) {}
                }
              }
              i.__initStatic(), (n.FunctionToString = i);
            },
            { "@sentry/utils": 120 }
          ],
          67: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
              class i {
                static __initStatic() {
                  this.id = "InboundFilters";
                }
                __init() {
                  this.name = i.id;
                }
                constructor(e = {}) {
                  (this._options = e), i.prototype.__init.call(this);
                }
                setupOnce(e, t) {
                  const n = (e) => {
                    const n = t();
                    if (n) {
                      const t = n.getIntegration(i);
                      if (t) {
                        const r = n.getClient(),
                          s = r ? r.getOptions() : {};
                        return a(e, o(t._options, s)) ? null : e;
                      }
                    }
                    return e;
                  };
                  (n.id = this.name), e(n);
                }
              }
              function o(e = {}, t = {}) {
                return {
                  allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
                  denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
                  ignoreErrors: [...(e.ignoreErrors || []), ...(t.ignoreErrors || []), ...s],
                  ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
                  ignoreInternal: e.ignoreInternal === undefined || e.ignoreInternal
                };
              }
              function a(e, t) {
                return t.ignoreInternal &&
                  (function (e) {
                    try {
                      return "SentryError" === e.exception.values[0].type;
                    } catch (e) {}
                    return !1;
                  })(e)
                  ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${r.getEventDescription(e)}`),
                    !0)
                  : (function (e, t) {
                      if (e.type || !t || !t.length) return !1;
                      return (function (e) {
                        if (e.message) return [e.message];
                        if (e.exception) {
                          const { values: t } = e.exception;
                          try {
                            const { type: e = "", value: n = "" } = (t && t[t.length - 1]) || {};
                            return [`${n}`, `${e}: ${n}`];
                          } catch (t) {
                            return (
                              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                                r.logger.error(`Cannot extract message for event ${r.getEventDescription(e)}`),
                              []
                            );
                          }
                        }
                        return [];
                      })(e).some((e) => r.stringMatchesSomePattern(e, t));
                    })(e, t.ignoreErrors)
                  ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${r.getEventDescription(e)}`),
                    !0)
                  : (function (e, t) {
                      if ("transaction" !== e.type || !t || !t.length) return !1;
                      const n = e.transaction;
                      return !!n && r.stringMatchesSomePattern(n, t);
                    })(e, t.ignoreTransactions)
                  ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.warn(
                        `Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${r.getEventDescription(e)}`
                      ),
                    !0)
                  : (function (e, t) {
                      if (!t || !t.length) return !1;
                      const n = c(e);
                      return !!n && r.stringMatchesSomePattern(n, t);
                    })(e, t.denyUrls)
                  ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.warn(
                        `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${r.getEventDescription(e)}.\nUrl: ${c(e)}`
                      ),
                    !0)
                  : !(function (e, t) {
                      if (!t || !t.length) return !0;
                      const n = c(e);
                      return !n || r.stringMatchesSomePattern(n, t);
                    })(e, t.allowUrls) &&
                    (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.warn(
                        `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${r.getEventDescription(e)}.\nUrl: ${c(e)}`
                      ),
                    !0);
              }
              function c(e) {
                try {
                  let t;
                  try {
                    t = e.exception.values[0].stacktrace.frames;
                  } catch (e) {}
                  return t
                    ? (function (e = []) {
                        for (let t = e.length - 1; t >= 0; t--) {
                          const n = e[t];
                          if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null;
                        }
                        return null;
                      })(t)
                    : null;
                } catch (t) {
                  return (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.error(`Cannot extract url for event ${r.getEventDescription(e)}`),
                    null
                  );
                }
              }
              i.__initStatic(), (n.InboundFilters = i), (n._mergeOptions = o), (n._shouldDropEvent = a);
            },
            { "@sentry/utils": 120 }
          ],
          68: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./functiontostring.js"),
                s = e("./inboundfilters.js");
              (n.FunctionToString = r.FunctionToString), (n.InboundFilters = s.InboundFilters);
            },
            { "./functiontostring.js": 66, "./inboundfilters.js": 67 }
          ],
          69: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("./session.js");
              class i {
                constructor() {
                  (this._notifyingListeners = !1),
                    (this._scopeListeners = []),
                    (this._eventProcessors = []),
                    (this._breadcrumbs = []),
                    (this._attachments = []),
                    (this._user = {}),
                    (this._tags = {}),
                    (this._extra = {}),
                    (this._contexts = {}),
                    (this._sdkProcessingMetadata = {});
                }
                static clone(e) {
                  const t = new i();
                  return (
                    e &&
                      ((t._breadcrumbs = [...e._breadcrumbs]),
                      (t._tags = { ...e._tags }),
                      (t._extra = { ...e._extra }),
                      (t._contexts = { ...e._contexts }),
                      (t._user = e._user),
                      (t._level = e._level),
                      (t._span = e._span),
                      (t._session = e._session),
                      (t._transactionName = e._transactionName),
                      (t._fingerprint = e._fingerprint),
                      (t._eventProcessors = [...e._eventProcessors]),
                      (t._requestSession = e._requestSession),
                      (t._attachments = [...e._attachments]),
                      (t._sdkProcessingMetadata = { ...e._sdkProcessingMetadata })),
                    t
                  );
                }
                addScopeListener(e) {
                  this._scopeListeners.push(e);
                }
                addEventProcessor(e) {
                  return this._eventProcessors.push(e), this;
                }
                setUser(e) {
                  return (
                    (this._user = e || {}), this._session && s.updateSession(this._session, { user: e }), this._notifyScopeListeners(), this
                  );
                }
                getUser() {
                  return this._user;
                }
                getRequestSession() {
                  return this._requestSession;
                }
                setRequestSession(e) {
                  return (this._requestSession = e), this;
                }
                setTags(e) {
                  return (this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this;
                }
                setTag(e, t) {
                  return (this._tags = { ...this._tags, [e]: t }), this._notifyScopeListeners(), this;
                }
                setExtras(e) {
                  return (this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this;
                }
                setExtra(e, t) {
                  return (this._extra = { ...this._extra, [e]: t }), this._notifyScopeListeners(), this;
                }
                setFingerprint(e) {
                  return (this._fingerprint = e), this._notifyScopeListeners(), this;
                }
                setLevel(e) {
                  return (this._level = e), this._notifyScopeListeners(), this;
                }
                setTransactionName(e) {
                  return (this._transactionName = e), this._notifyScopeListeners(), this;
                }
                setContext(e, t) {
                  return null === t ? delete this._contexts[e] : (this._contexts[e] = t), this._notifyScopeListeners(), this;
                }
                setSpan(e) {
                  return (this._span = e), this._notifyScopeListeners(), this;
                }
                getSpan() {
                  return this._span;
                }
                getTransaction() {
                  const e = this.getSpan();
                  return e && e.transaction;
                }
                setSession(e) {
                  return e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this;
                }
                getSession() {
                  return this._session;
                }
                update(e) {
                  if (!e) return this;
                  if ("function" == typeof e) {
                    const t = e(this);
                    return t instanceof i ? t : this;
                  }
                  return (
                    e instanceof i
                      ? ((this._tags = { ...this._tags, ...e._tags }),
                        (this._extra = { ...this._extra, ...e._extra }),
                        (this._contexts = { ...this._contexts, ...e._contexts }),
                        e._user && Object.keys(e._user).length && (this._user = e._user),
                        e._level && (this._level = e._level),
                        e._fingerprint && (this._fingerprint = e._fingerprint),
                        e._requestSession && (this._requestSession = e._requestSession))
                      : r.isPlainObject(e) &&
                        ((this._tags = { ...this._tags, ...e.tags }),
                        (this._extra = { ...this._extra, ...e.extra }),
                        (this._contexts = { ...this._contexts, ...e.contexts }),
                        e.user && (this._user = e.user),
                        e.level && (this._level = e.level),
                        e.fingerprint && (this._fingerprint = e.fingerprint),
                        e.requestSession && (this._requestSession = e.requestSession)),
                    this
                  );
                }
                clear() {
                  return (
                    (this._breadcrumbs = []),
                    (this._tags = {}),
                    (this._extra = {}),
                    (this._user = {}),
                    (this._contexts = {}),
                    (this._level = undefined),
                    (this._transactionName = undefined),
                    (this._fingerprint = undefined),
                    (this._requestSession = undefined),
                    (this._span = undefined),
                    (this._session = undefined),
                    this._notifyScopeListeners(),
                    (this._attachments = []),
                    this
                  );
                }
                addBreadcrumb(e, t) {
                  const n = "number" == typeof t ? t : 100;
                  if (n <= 0) return this;
                  const s = { timestamp: r.dateTimestampInSeconds(), ...e };
                  return (this._breadcrumbs = [...this._breadcrumbs, s].slice(-n)), this._notifyScopeListeners(), this;
                }
                getLastBreadcrumb() {
                  return this._breadcrumbs[this._breadcrumbs.length - 1];
                }
                clearBreadcrumbs() {
                  return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
                }
                addAttachment(e) {
                  return this._attachments.push(e), this;
                }
                getAttachments() {
                  return this._attachments;
                }
                clearAttachments() {
                  return (this._attachments = []), this;
                }
                applyToEvent(e, t = {}) {
                  if (
                    (this._extra && Object.keys(this._extra).length && (e.extra = { ...this._extra, ...e.extra }),
                    this._tags && Object.keys(this._tags).length && (e.tags = { ...this._tags, ...e.tags }),
                    this._user && Object.keys(this._user).length && (e.user = { ...this._user, ...e.user }),
                    this._contexts && Object.keys(this._contexts).length && (e.contexts = { ...this._contexts, ...e.contexts }),
                    this._level && (e.level = this._level),
                    this._transactionName && (e.transaction = this._transactionName),
                    this._span)
                  ) {
                    e.contexts = { trace: this._span.getTraceContext(), ...e.contexts };
                    const t = this._span.transaction;
                    if (t) {
                      e.sdkProcessingMetadata = { dynamicSamplingContext: t.getDynamicSamplingContext(), ...e.sdkProcessingMetadata };
                      const n = t.name;
                      n && (e.tags = { transaction: n, ...e.tags });
                    }
                  }
                  return (
                    this._applyFingerprint(e),
                    (e.breadcrumbs = [...(e.breadcrumbs || []), ...this._breadcrumbs]),
                    (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : undefined),
                    (e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...this._sdkProcessingMetadata }),
                    this._notifyEventProcessors([...o(), ...this._eventProcessors], e, t)
                  );
                }
                setSDKProcessingMetadata(e) {
                  return (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...e }), this;
                }
                _notifyEventProcessors(e, t, n, s = 0) {
                  return new r.SyncPromise((i, o) => {
                    const a = e[s];
                    if (null === t || "function" != typeof a) i(t);
                    else {
                      const c = a({ ...t }, n);
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        a.id &&
                        null === c &&
                        r.logger.log(`Event processor "${a.id}" dropped event`),
                        r.isThenable(c)
                          ? c.then((t) => this._notifyEventProcessors(e, t, n, s + 1).then(i)).then(null, o)
                          : this._notifyEventProcessors(e, c, n, s + 1)
                              .then(i)
                              .then(null, o);
                    }
                  });
                }
                _notifyScopeListeners() {
                  this._notifyingListeners ||
                    ((this._notifyingListeners = !0),
                    this._scopeListeners.forEach((e) => {
                      e(this);
                    }),
                    (this._notifyingListeners = !1));
                }
                _applyFingerprint(e) {
                  (e.fingerprint = e.fingerprint ? r.arrayify(e.fingerprint) : []),
                    this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
                    e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
                }
              }
              function o() {
                return r.getGlobalSingleton("globalEventProcessors", () => []);
              }
              (n.Scope = i),
                (n.addGlobalEventProcessor = function (e) {
                  o().push(e);
                });
            },
            { "./session.js": 71, "@sentry/utils": 120 }
          ],
          70: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("./hub.js");
              n.initAndBind = function (e, t) {
                !0 === t.debug &&
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
                    ? r.logger.enable()
                    : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                const n = s.getCurrentHub();
                n.getScope().update(t.initialScope);
                const i = new e(t);
                n.bindClient(i);
              };
            },
            { "./hub.js": 63, "@sentry/utils": 120 }
          ],
          71: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              function s(e, t = {}) {
                if (
                  (t.user &&
                    (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
                    e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
                  (e.timestamp = t.timestamp || r.timestampInSeconds()),
                  t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
                  t.sid && (e.sid = 32 === t.sid.length ? t.sid : r.uuid4()),
                  t.init !== undefined && (e.init = t.init),
                  !e.did && t.did && (e.did = `${t.did}`),
                  "number" == typeof t.started && (e.started = t.started),
                  e.ignoreDuration)
                )
                  e.duration = undefined;
                else if ("number" == typeof t.duration) e.duration = t.duration;
                else {
                  const t = e.timestamp - e.started;
                  e.duration = t >= 0 ? t : 0;
                }
                t.release && (e.release = t.release),
                  t.environment && (e.environment = t.environment),
                  !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
                  !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
                  "number" == typeof t.errors && (e.errors = t.errors),
                  t.status && (e.status = t.status);
              }
              (n.closeSession = function (e, t) {
                let n = {};
                t ? (n = { status: t }) : "ok" === e.status && (n = { status: "exited" }), s(e, n);
              }),
                (n.makeSession = function (e) {
                  const t = r.timestampInSeconds(),
                    n = {
                      sid: r.uuid4(),
                      init: !0,
                      timestamp: t,
                      started: t,
                      duration: 0,
                      status: "ok",
                      errors: 0,
                      ignoreDuration: !1,
                      toJSON: () =>
                        (function (e) {
                          return r.dropUndefinedKeys({
                            sid: `${e.sid}`,
                            init: e.init,
                            started: new Date(1e3 * e.started).toISOString(),
                            timestamp: new Date(1e3 * e.timestamp).toISOString(),
                            status: e.status,
                            errors: e.errors,
                            did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : undefined,
                            duration: e.duration,
                            attrs: { release: e.release, environment: e.environment, ip_address: e.ipAddress, user_agent: e.userAgent }
                          });
                        })(n)
                    };
                  return e && s(n, e), n;
                }),
                (n.updateSession = s);
            },
            { "@sentry/utils": 120 }
          ],
          72: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("./hub.js");
              class i {
                __init() {
                  this.flushTimeout = 60;
                }
                __init2() {
                  this._pendingAggregates = {};
                }
                __init3() {
                  this._isEnabled = !0;
                }
                constructor(e, t) {
                  i.prototype.__init.call(this),
                    i.prototype.__init2.call(this),
                    i.prototype.__init3.call(this),
                    (this._client = e),
                    (this._intervalId = setInterval(() => this.flush(), 1e3 * this.flushTimeout)),
                    (this._sessionAttrs = t);
                }
                flush() {
                  const e = this.getSessionAggregates();
                  0 !== e.aggregates.length && ((this._pendingAggregates = {}), this._client.sendSession(e));
                }
                getSessionAggregates() {
                  const e = Object.keys(this._pendingAggregates).map((e) => this._pendingAggregates[parseInt(e)]),
                    t = { attrs: this._sessionAttrs, aggregates: e };
                  return r.dropUndefinedKeys(t);
                }
                close() {
                  clearInterval(this._intervalId), (this._isEnabled = !1), this.flush();
                }
                incrementSessionStatusCount() {
                  if (!this._isEnabled) return;
                  const e = s.getCurrentHub().getScope(),
                    t = e.getRequestSession();
                  t && t.status && (this._incrementSessionStatusCount(t.status, new Date()), e.setRequestSession(undefined));
                }
                _incrementSessionStatusCount(e, t) {
                  const n = new Date(t).setSeconds(0, 0);
                  this._pendingAggregates[n] = this._pendingAggregates[n] || {};
                  const r = this._pendingAggregates[n];
                  switch ((r.started || (r.started = new Date(n).toISOString()), e)) {
                    case "errored":
                      return (r.errored = (r.errored || 0) + 1), r.errored;
                    case "ok":
                      return (r.exited = (r.exited || 0) + 1), r.exited;
                    default:
                      return (r.crashed = (r.crashed || 0) + 1), r.crashed;
                  }
                }
              }
              n.SessionFlusher = i;
            },
            { "./hub.js": 63, "@sentry/utils": 120 }
          ],
          73: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("./utils.js");
              let i = !1;
              function o() {
                const e = s.getActiveTransaction();
                if (e) {
                  const t = "internal_error";
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    r.logger.log(`[Tracing] Transaction: ${t} -> Global error occured`),
                    e.setStatus(t);
                }
              }
              (o.tag = "sentry_tracingErrorCallback"),
                (n.registerErrorInstrumentation = function () {
                  i || ((i = !0), r.addInstrumentationHandler("error", o), r.addInstrumentationHandler("unhandledrejection", o));
                });
            },
            { "./utils.js": 80, "@sentry/utils": 120 }
          ],
          74: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("../hub.js"),
                i = e("../utils/hasTracingEnabled.js"),
                o = e("./errors.js"),
                a = e("./idletransaction.js"),
                c = e("./transaction.js");
              function u() {
                const e = this.getScope().getSpan();
                return e ? { "sentry-trace": e.toTraceparent() } : {};
              }
              function l(e, t, n) {
                if (!i.hasTracingEnabled(t)) return (e.sampled = !1), e;
                if (e.sampled !== undefined) return e.setMetadata({ sampleRate: Number(e.sampled) }), e;
                let s;
                return (
                  "function" == typeof t.tracesSampler
                    ? ((s = t.tracesSampler(n)), e.setMetadata({ sampleRate: Number(s) }))
                    : n.parentSampled !== undefined
                    ? (s = n.parentSampled)
                    : void 0 !== t.tracesSampleRate
                    ? ((s = t.tracesSampleRate), e.setMetadata({ sampleRate: Number(s) }))
                    : ((s = 1), e.setMetadata({ sampleRate: s })),
                  (function (e) {
                    if (r.isNaN(e) || ("number" != typeof e && "boolean" != typeof e))
                      return (
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          r.logger.warn(
                            `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
                              e
                            )} of type ${JSON.stringify(typeof e)}.`
                          ),
                        !1
                      );
                    if (e < 0 || e > 1)
                      return (
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          r.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`),
                        !1
                      );
                    return !0;
                  })(s)
                    ? s
                      ? ((e.sampled = Math.random() < s),
                        e.sampled
                          ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                              r.logger.log(`[Tracing] starting ${e.op} transaction - ${e.name}`),
                            e)
                          : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                              r.logger.log(
                                `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
                                  s
                                )})`
                              ),
                            e))
                      : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          r.logger.log(
                            "[Tracing] Discarding transaction because " +
                              ("function" == typeof t.tracesSampler
                                ? "tracesSampler returned 0 or false"
                                : "a negative sampling decision was inherited or tracesSampleRate is set to 0")
                          ),
                        (e.sampled = !1),
                        e)
                    : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.warn("[Tracing] Discarding transaction because of invalid sample rate."),
                      (e.sampled = !1),
                      e)
                );
              }
              function d(e, t) {
                const n = this.getClient(),
                  s = (n && n.getOptions()) || {},
                  i = s.instrumenter || "sentry",
                  o = e.instrumenter || "sentry";
                i !== o &&
                  (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    r.logger.error(
                      `A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${i}\` instrumenter.\nThe transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`
                    ),
                  (e.sampled = !1));
                let a = new c.Transaction(e, this);
                return (
                  (a = l(a, s, { parentSampled: e.parentSampled, transactionContext: e, ...t })),
                  a.sampled && a.initSpanRecorder(s._experiments && s._experiments.maxSpans),
                  n && n.emit && n.emit("startTransaction", a),
                  a
                );
              }
              (n.addTracingExtensions = function () {
                const e = s.getMainCarrier();
                e.__SENTRY__ &&
                  ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
                  e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = d),
                  e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = u),
                  o.registerErrorInstrumentation());
              }),
                (n.startIdleTransaction = function (e, t, n, r, s, i, o) {
                  const c = e.getClient(),
                    u = (c && c.getOptions()) || {};
                  let d = new a.IdleTransaction(t, e, n, r, o, s);
                  return (
                    (d = l(d, u, { parentSampled: t.parentSampled, transactionContext: t, ...i })),
                    d.sampled && d.initSpanRecorder(u._experiments && u._experiments.maxSpans),
                    c && c.emit && c.emit("startTransaction", d),
                    d
                  );
                });
            },
            {
              "../hub.js": 63,
              "../utils/hasTracingEnabled.js": 84,
              "./errors.js": 73,
              "./idletransaction.js": 75,
              "./transaction.js": 79,
              "@sentry/utils": 120
            }
          ],
          75: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("./span.js"),
                i = e("./transaction.js"),
                o = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 },
                a = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
              class c extends s.SpanRecorder {
                constructor(e, t, n, r) {
                  super(r), (this._pushActivity = e), (this._popActivity = t), (this.transactionSpanId = n);
                }
                add(e) {
                  e.spanId !== this.transactionSpanId &&
                    ((e.finish = (t) => {
                      (e.endTimestamp = "number" == typeof t ? t : r.timestampInSeconds()), this._popActivity(e.spanId);
                    }),
                    e.endTimestamp === undefined && this._pushActivity(e.spanId)),
                    super.add(e);
                }
              }
              class u extends i.Transaction {
                __init() {
                  this.activities = {};
                }
                __init2() {
                  this._heartbeatCounter = 0;
                }
                __init3() {
                  this._finished = !1;
                }
                __init4() {
                  this._idleTimeoutCanceledPermanently = !1;
                }
                __init5() {
                  this._beforeFinishCallbacks = [];
                }
                __init6() {
                  this._finishReason = a[4];
                }
                constructor(e, t, n = o.idleTimeout, s = o.finalTimeout, i = o.heartbeatInterval, c = !1) {
                  super(e, t),
                    (this._idleHub = t),
                    (this._idleTimeout = n),
                    (this._finalTimeout = s),
                    (this._heartbeatInterval = i),
                    (this._onScope = c),
                    u.prototype.__init.call(this),
                    u.prototype.__init2.call(this),
                    u.prototype.__init3.call(this),
                    u.prototype.__init4.call(this),
                    u.prototype.__init5.call(this),
                    u.prototype.__init6.call(this),
                    c &&
                      (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
                      t.configureScope((e) => e.setSpan(this))),
                    this._restartIdleTimeout(),
                    setTimeout(() => {
                      this._finished || (this.setStatus("deadline_exceeded"), (this._finishReason = a[3]), this.finish());
                    }, this._finalTimeout);
                }
                finish(e = r.timestampInSeconds()) {
                  if (
                    ((this._finished = !0),
                    (this.activities = {}),
                    "ui.action.click" === this.op && this.setTag("finishReason", this._finishReason),
                    this.spanRecorder)
                  ) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.log("[Tracing] finishing IdleTransaction", new Date(1e3 * e).toISOString(), this.op);
                    for (const t of this._beforeFinishCallbacks) t(this, e);
                    (this.spanRecorder.spans = this.spanRecorder.spans.filter((t) => {
                      if (t.spanId === this.spanId) return !0;
                      t.endTimestamp ||
                        ((t.endTimestamp = e),
                        t.setStatus("cancelled"),
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          r.logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(t, undefined, 2)));
                      const n = t.startTimestamp < e;
                      return (
                        n ||
                          (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                            r.logger.log(
                              "[Tracing] discarding Span since it happened after Transaction was finished",
                              JSON.stringify(t, undefined, 2)
                            )),
                        n
                      );
                    })),
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] flushing IdleTransaction");
                  } else
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] No active IdleTransaction");
                  if (this._onScope) {
                    const e = this._idleHub.getScope();
                    e.getTransaction() === this && e.setSpan(undefined);
                  }
                  return super.finish(e);
                }
                registerBeforeFinishCallback(e) {
                  this._beforeFinishCallbacks.push(e);
                }
                initSpanRecorder(e) {
                  if (!this.spanRecorder) {
                    const t = (e) => {
                        this._finished || this._pushActivity(e);
                      },
                      n = (e) => {
                        this._finished || this._popActivity(e);
                      };
                    (this.spanRecorder = new c(t, n, this.spanId, e)),
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("Starting heartbeat"),
                      this._pingHeartbeat();
                  }
                  this.spanRecorder.add(this);
                }
                cancelIdleTimeout(e, { restartOnChildSpanChange: t } = { restartOnChildSpanChange: !0 }) {
                  (this._idleTimeoutCanceledPermanently = !1 === t),
                    this._idleTimeoutID &&
                      (clearTimeout(this._idleTimeoutID),
                      (this._idleTimeoutID = undefined),
                      0 === Object.keys(this.activities).length &&
                        this._idleTimeoutCanceledPermanently &&
                        ((this._finishReason = a[5]), this.finish(e)));
                }
                setFinishReason(e) {
                  this._finishReason = e;
                }
                _restartIdleTimeout(e) {
                  this.cancelIdleTimeout(),
                    (this._idleTimeoutID = setTimeout(() => {
                      this._finished || 0 !== Object.keys(this.activities).length || ((this._finishReason = a[1]), this.finish(e));
                    }, this._idleTimeout));
                }
                _pushActivity(e) {
                  this.cancelIdleTimeout(undefined, { restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently }),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] pushActivity: ${e}`),
                    (this.activities[e] = !0),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
                }
                _popActivity(e) {
                  if (
                    (this.activities[e] &&
                      (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] popActivity ${e}`),
                      delete this.activities[e],
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.log("[Tracing] new activities count", Object.keys(this.activities).length)),
                    0 === Object.keys(this.activities).length)
                  ) {
                    const e = r.timestampInSeconds();
                    this._idleTimeoutCanceledPermanently
                      ? ((this._finishReason = a[5]), this.finish(e))
                      : this._restartIdleTimeout(e + this._idleTimeout / 1e3);
                  }
                }
                _beat() {
                  if (this._finished) return;
                  const e = Object.keys(this.activities).join("");
                  e === this._prevHeartbeatString ? this._heartbeatCounter++ : (this._heartbeatCounter = 1),
                    (this._prevHeartbeatString = e),
                    this._heartbeatCounter >= 3
                      ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          r.logger.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
                        this.setStatus("deadline_exceeded"),
                        (this._finishReason = a[0]),
                        this.finish())
                      : this._pingHeartbeat();
                }
                _pingHeartbeat() {
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    r.logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
                    setTimeout(() => {
                      this._beat();
                    }, this._heartbeatInterval);
                }
              }
              (n.IdleTransaction = u), (n.IdleTransactionSpanRecorder = c), (n.TRACING_DEFAULTS = o);
            },
            { "./span.js": 76, "./transaction.js": 79, "@sentry/utils": 120 }
          ],
          76: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              class s {
                __init() {
                  this.spans = [];
                }
                constructor(e = 1e3) {
                  s.prototype.__init.call(this), (this._maxlen = e);
                }
                add(e) {
                  this.spans.length > this._maxlen ? (e.spanRecorder = undefined) : this.spans.push(e);
                }
              }
              class i {
                __init2() {
                  this.traceId = r.uuid4();
                }
                __init3() {
                  this.spanId = r.uuid4().substring(16);
                }
                __init4() {
                  this.startTimestamp = r.timestampInSeconds();
                }
                __init5() {
                  this.tags = {};
                }
                __init6() {
                  this.data = {};
                }
                __init7() {
                  this.instrumenter = "sentry";
                }
                constructor(e) {
                  if (
                    (i.prototype.__init2.call(this),
                    i.prototype.__init3.call(this),
                    i.prototype.__init4.call(this),
                    i.prototype.__init5.call(this),
                    i.prototype.__init6.call(this),
                    i.prototype.__init7.call(this),
                    !e)
                  )
                    return this;
                  e.traceId && (this.traceId = e.traceId),
                    e.spanId && (this.spanId = e.spanId),
                    e.parentSpanId && (this.parentSpanId = e.parentSpanId),
                    "sampled" in e && (this.sampled = e.sampled),
                    e.op && (this.op = e.op),
                    e.description && (this.description = e.description),
                    e.data && (this.data = e.data),
                    e.tags && (this.tags = e.tags),
                    e.status && (this.status = e.status),
                    e.startTimestamp && (this.startTimestamp = e.startTimestamp),
                    e.endTimestamp && (this.endTimestamp = e.endTimestamp),
                    e.instrumenter && (this.instrumenter = e.instrumenter);
                }
                startChild(e) {
                  const t = new i({ ...e, parentSpanId: this.spanId, sampled: this.sampled, traceId: this.traceId });
                  if (
                    ((t.spanRecorder = this.spanRecorder),
                    t.spanRecorder && t.spanRecorder.add(t),
                    (t.transaction = this.transaction),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && t.transaction)
                  ) {
                    const n = `[Tracing] Starting '${(e && e.op) || "< unknown op >"}' span on transaction '${
                      t.transaction.name || "< unknown name >"
                    }' (${t.transaction.spanId}).`;
                    (t.transaction.metadata.spanMetadata[t.spanId] = { logMessage: n }), r.logger.log(n);
                  }
                  return t;
                }
                setTag(e, t) {
                  return (this.tags = { ...this.tags, [e]: t }), this;
                }
                setData(e, t) {
                  return (this.data = { ...this.data, [e]: t }), this;
                }
                setStatus(e) {
                  return (this.status = e), this;
                }
                setHttpStatus(e) {
                  this.setTag("http.status_code", String(e));
                  const t = o(e);
                  return "unknown_error" !== t && this.setStatus(t), this;
                }
                isSuccess() {
                  return "ok" === this.status;
                }
                finish(e) {
                  if (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    this.transaction &&
                    this.transaction.spanId !== this.spanId
                  ) {
                    const { logMessage: e } = this.transaction.metadata.spanMetadata[this.spanId];
                    e && r.logger.log(e.replace("Starting", "Finishing"));
                  }
                  this.endTimestamp = "number" == typeof e ? e : r.timestampInSeconds();
                }
                toTraceparent() {
                  let e = "";
                  return this.sampled !== undefined && (e = this.sampled ? "-1" : "-0"), `${this.traceId}-${this.spanId}${e}`;
                }
                toContext() {
                  return r.dropUndefinedKeys({
                    data: this.data,
                    description: this.description,
                    endTimestamp: this.endTimestamp,
                    op: this.op,
                    parentSpanId: this.parentSpanId,
                    sampled: this.sampled,
                    spanId: this.spanId,
                    startTimestamp: this.startTimestamp,
                    status: this.status,
                    tags: this.tags,
                    traceId: this.traceId
                  });
                }
                updateWithContext(e) {
                  return (
                    (this.data = e.data || {}),
                    (this.description = e.description),
                    (this.endTimestamp = e.endTimestamp),
                    (this.op = e.op),
                    (this.parentSpanId = e.parentSpanId),
                    (this.sampled = e.sampled),
                    (this.spanId = e.spanId || this.spanId),
                    (this.startTimestamp = e.startTimestamp || this.startTimestamp),
                    (this.status = e.status),
                    (this.tags = e.tags || {}),
                    (this.traceId = e.traceId || this.traceId),
                    this
                  );
                }
                getTraceContext() {
                  return r.dropUndefinedKeys({
                    data: Object.keys(this.data).length > 0 ? this.data : undefined,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
                    trace_id: this.traceId
                  });
                }
                toJSON() {
                  return r.dropUndefinedKeys({
                    data: Object.keys(this.data).length > 0 ? this.data : undefined,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    start_timestamp: this.startTimestamp,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
                    timestamp: this.endTimestamp,
                    trace_id: this.traceId
                  });
                }
              }
              function o(e) {
                if (e < 400 && e >= 100) return "ok";
                if (e >= 400 && e < 500)
                  switch (e) {
                    case 401:
                      return "unauthenticated";
                    case 403:
                      return "permission_denied";
                    case 404:
                      return "not_found";
                    case 409:
                      return "already_exists";
                    case 413:
                      return "failed_precondition";
                    case 429:
                      return "resource_exhausted";
                    default:
                      return "invalid_argument";
                  }
                if (e >= 500 && e < 600)
                  switch (e) {
                    case 501:
                      return "unimplemented";
                    case 503:
                      return "unavailable";
                    case 504:
                      return "deadline_exceeded";
                    default:
                      return "internal_error";
                  }
                return "unknown_error";
              }
              (n.Span = i), (n.SpanRecorder = s), (n.spanStatusfromHttpCode = o);
            },
            { "@sentry/utils": 120 }
          ],
          77: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.SpanStatus = void 0),
                (function (e) {
                  e.Ok = "ok";
                  e.DeadlineExceeded = "deadline_exceeded";
                  e.Unauthenticated = "unauthenticated";
                  e.PermissionDenied = "permission_denied";
                  e.NotFound = "not_found";
                  e.ResourceExhausted = "resource_exhausted";
                  e.InvalidArgument = "invalid_argument";
                  e.Unimplemented = "unimplemented";
                  e.Unavailable = "unavailable";
                  e.InternalError = "internal_error";
                  e.UnknownError = "unknown_error";
                  e.Cancelled = "cancelled";
                  e.AlreadyExists = "already_exists";
                  e.FailedPrecondition = "failed_precondition";
                  e.Aborted = "aborted";
                  e.OutOfRange = "out_of_range";
                  e.DataLoss = "data_loss";
                })(n.SpanStatus || (n.SpanStatus = {}));
            },
            {}
          ],
          78: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("../hub.js");
              n.trace = function (e, t, n = () => {}) {
                const i = { ...e };
                i.name !== undefined && i.description === undefined && (i.description = i.name);
                const o = s.getCurrentHub(),
                  a = o.getScope(),
                  c = a.getSpan(),
                  u = c ? c.startChild(i) : o.startTransaction(i);
                function l() {
                  u && u.finish(), o.getScope().setSpan(c);
                }
                let d;
                a.setSpan(u);
                try {
                  d = t(u);
                } catch (e) {
                  throw (u && u.setStatus("internal_error"), n(e), l(), e);
                }
                return (
                  r.isThenable(d)
                    ? Promise.resolve(d).then(
                        () => {
                          l();
                        },
                        (e) => {
                          u && u.setStatus("internal_error"), n(e), l();
                        }
                      )
                    : l(),
                  d
                );
              };
            },
            { "../hub.js": 63, "@sentry/utils": 120 }
          ],
          79: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("../constants.js"),
                i = e("../hub.js"),
                o = e("./span.js");
              class a extends o.Span {
                __init() {
                  this._measurements = {};
                }
                __init2() {
                  this._contexts = {};
                }
                __init3() {
                  this._frozenDynamicSamplingContext = undefined;
                }
                constructor(e, t) {
                  super(e),
                    a.prototype.__init.call(this),
                    a.prototype.__init2.call(this),
                    a.prototype.__init3.call(this),
                    (this._hub = t || i.getCurrentHub()),
                    (this._name = e.name || ""),
                    (this.metadata = { source: "custom", ...e.metadata, spanMetadata: {} }),
                    (this._trimEnd = e.trimEnd),
                    (this.transaction = this);
                  const n = this.metadata.dynamicSamplingContext;
                  n && (this._frozenDynamicSamplingContext = { ...n });
                }
                get name() {
                  return this._name;
                }
                set name(e) {
                  this.setName(e);
                }
                setName(e, t = "custom") {
                  (this._name = e), (this.metadata.source = t);
                }
                initSpanRecorder(e = 1e3) {
                  this.spanRecorder || (this.spanRecorder = new o.SpanRecorder(e)), this.spanRecorder.add(this);
                }
                setContext(e, t) {
                  null === t ? delete this._contexts[e] : (this._contexts[e] = t);
                }
                setMeasurement(e, t, n = "") {
                  this._measurements[e] = { value: t, unit: n };
                }
                setMetadata(e) {
                  this.metadata = { ...this.metadata, ...e };
                }
                finish(e) {
                  if (this.endTimestamp !== undefined) return undefined;
                  this.name ||
                    (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
                    (this.name = "<unlabeled transaction>")),
                    super.finish(e);
                  const t = this._hub.getClient();
                  if ((t && t.emit && t.emit("finishTransaction", this), !0 !== this.sampled))
                    return (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
                      t && t.recordDroppedEvent("sample_rate", "transaction"),
                      undefined
                    );
                  const n = this.spanRecorder ? this.spanRecorder.spans.filter((e) => e !== this && e.endTimestamp) : [];
                  this._trimEnd &&
                    n.length > 0 &&
                    (this.endTimestamp = n.reduce((e, t) =>
                      e.endTimestamp && t.endTimestamp ? (e.endTimestamp > t.endTimestamp ? e : t) : e
                    ).endTimestamp);
                  const s = this.metadata,
                    i = {
                      contexts: { ...this._contexts, trace: this.getTraceContext() },
                      spans: n,
                      start_timestamp: this.startTimestamp,
                      tags: this.tags,
                      timestamp: this.endTimestamp,
                      transaction: this.name,
                      type: "transaction",
                      sdkProcessingMetadata: { ...s, dynamicSamplingContext: this.getDynamicSamplingContext() },
                      ...(s.source && { transaction_info: { source: s.source } })
                    };
                  return (
                    Object.keys(this._measurements).length > 0 &&
                      (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, undefined, 2)),
                      (i.measurements = this._measurements)),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
                    this._hub.captureEvent(i)
                  );
                }
                toContext() {
                  const e = super.toContext();
                  return r.dropUndefinedKeys({ ...e, name: this.name, trimEnd: this._trimEnd });
                }
                updateWithContext(e) {
                  return super.updateWithContext(e), (this.name = e.name || ""), (this._trimEnd = e.trimEnd), this;
                }
                getDynamicSamplingContext() {
                  if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
                  const e = this._hub || i.getCurrentHub(),
                    t = e && e.getClient();
                  if (!t) return {};
                  const { environment: n, release: o } = t.getOptions() || {},
                    { publicKey: a } = t.getDsn() || {},
                    c = this.metadata.sampleRate,
                    u = c !== undefined ? c.toString() : undefined,
                    { segment: l } = e.getScope().getUser() || {},
                    d = this.metadata.source,
                    p = d && "url" !== d ? this.name : undefined,
                    f = r.dropUndefinedKeys({
                      environment: n || s.DEFAULT_ENVIRONMENT,
                      release: o,
                      transaction: p,
                      user_segment: l,
                      public_key: a,
                      trace_id: this.traceId,
                      sample_rate: u
                    });
                  return t.emit && t.emit("createDsc", f), f;
                }
                setHub(e) {
                  this._hub = e;
                }
              }
              n.Transaction = a;
            },
            { "../constants.js": 60, "../hub.js": 63, "./span.js": 76, "@sentry/utils": 120 }
          ],
          80: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("../hub.js"),
                s = e("@sentry/utils");
              (n.TRACEPARENT_REGEXP = s.TRACEPARENT_REGEXP),
                (n.extractTraceparentData = s.extractTraceparentData),
                (n.stripUrlQueryAndFragment = s.stripUrlQueryAndFragment),
                (n.getActiveTransaction = function (e) {
                  return (e || r.getCurrentHub()).getScope().getTransaction();
                });
            },
            { "../hub.js": 63, "@sentry/utils": 120 }
          ],
          81: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              function s(e, t) {
                return "event" !== t && "transaction" !== t ? undefined : Array.isArray(e) ? e[1] : undefined;
              }
              (n.DEFAULT_TRANSPORT_BUFFER_SIZE = 30),
                (n.createTransport = function (e, t, n = r.makePromiseBuffer(e.bufferSize || 30)) {
                  let i = {};
                  function o(o) {
                    const a = [];
                    if (
                      (r.forEachEnvelopeItem(o, (t, n) => {
                        const o = r.envelopeItemTypeToDataCategory(n);
                        if (r.isRateLimited(i, o)) {
                          const r = s(t, n);
                          e.recordDroppedEvent("ratelimit_backoff", o, r);
                        } else a.push(t);
                      }),
                      0 === a.length)
                    )
                      return r.resolvedSyncPromise();
                    const c = r.createEnvelope(o[0], a),
                      u = (t) => {
                        r.forEachEnvelopeItem(c, (n, i) => {
                          const o = s(n, i);
                          e.recordDroppedEvent(t, r.envelopeItemTypeToDataCategory(i), o);
                        });
                      };
                    return n
                      .add(() =>
                        t({ body: r.serializeEnvelope(c, e.textEncoder) }).then(
                          (e) => (
                            e.statusCode !== undefined &&
                              (e.statusCode < 200 || e.statusCode >= 300) &&
                              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                              r.logger.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
                            (i = r.updateRateLimits(i, e)),
                            e
                          ),
                          (e) => {
                            throw (u("network_error"), e);
                          }
                        )
                      )
                      .then(
                        (e) => e,
                        (e) => {
                          if (e instanceof r.SentryError)
                            return (
                              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                                r.logger.error("Skipped sending event because buffer is full."),
                              u("queue_overflow"),
                              r.resolvedSyncPromise()
                            );
                          throw e;
                        }
                      );
                  }
                  return (o.__sentry__baseTransport__ = !0), { send: o, flush: (e) => n.drain(e) };
                });
            },
            { "@sentry/utils": 120 }
          ],
          82: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("../api.js");
              n.makeMultiplexedTransport = function (e, t) {
                return (n) => {
                  const i = e(n),
                    o = {};
                  return {
                    send: async function (a) {
                      const c = t({
                        envelope: a,
                        getEvent: function (e) {
                          const t = e && e.length ? e : ["event"];
                          return (function (e, t) {
                            let n;
                            return r.forEachEnvelopeItem(e, (e, r) => (t.includes(r) && (n = Array.isArray(e) ? e[1] : undefined), !!n)), n;
                          })(a, t);
                        }
                      })
                        .map((t) =>
                          (function (t) {
                            if (!o[t]) {
                              const i = r.dsnFromString(t);
                              if (!i) return undefined;
                              const a = s.getEnvelopeEndpointWithUrlEncodedAuth(i);
                              o[t] = e({ ...n, url: a });
                            }
                            return o[t];
                          })(t)
                        )
                        .filter((e) => !!e);
                      return 0 === c.length && c.push(i), (await Promise.all(c.map((e) => e.send(a))))[0];
                    },
                    flush: async function (e) {
                      const t = [...Object.keys(o).map((e) => o[e]), i];
                      return (await Promise.all(t.map((t) => t.flush(e)))).every((e) => e);
                    }
                  };
                };
              };
            },
            { "../api.js": 57, "@sentry/utils": 120 }
          ],
          83: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = 5e3;
              function i(e, t) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.info(`[Offline]: ${e}`, t);
              }
              (n.MIN_DELAY = 100),
                (n.START_DELAY = s),
                (n.makeOfflineTransport = function (e) {
                  return (t) => {
                    const n = e(t),
                      o = t.createStore ? t.createStore(t) : undefined;
                    let a,
                      c = s;
                    function u(e) {
                      o &&
                        (a && clearTimeout(a),
                        (a = setTimeout(async () => {
                          a = undefined;
                          const e = await o.pop();
                          e &&
                            (i("Attempting to send previously queued event"),
                            d(e).catch((e) => {
                              i("Failed to retry sending", e);
                            }));
                        }, e)),
                        "number" != typeof a && a.unref && a.unref());
                    }
                    function l() {
                      a || (u(c), (c = Math.min(2 * c, 36e5)));
                    }
                    async function d(e) {
                      try {
                        const t = await n.send(e);
                        let i = 100;
                        if (t)
                          if (t.headers && t.headers["retry-after"]) i = r.parseRetryAfterHeader(t.headers["retry-after"]);
                          else if ((t.statusCode || 0) >= 400) return t;
                        return u(i), (c = s), t;
                      } catch (n) {
                        if (
                          o &&
                          (await (function (e, n, s) {
                            return (
                              !r.envelopeContainsItemType(e, ["replay_event", "replay_recording", "client_report"]) &&
                              (!t.shouldStore || t.shouldStore(e, n, s))
                            );
                          })(e, n, c))
                        )
                          return await o.insert(e), l(), i("Error sending. Event queued", n), {};
                        throw n;
                      }
                    }
                    return t.flushAtStartup && l(), { send: d, flush: (e) => n.flush(e) };
                  };
                });
            },
            { "@sentry/utils": 120 }
          ],
          84: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("../hub.js");
              n.hasTracingEnabled = function (e) {
                if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
                const t = r.getCurrentHub().getClient(),
                  n = e || (t && t.getOptions());
                return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n);
              };
            },
            { "../hub.js": 63 }
          ],
          85: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("../constants.js"),
                i = e("../scope.js");
              const o = new WeakMap();
              function a(e, t) {
                const n = r.GLOBAL_OBJ._sentryDebugIds;
                if (!n) return;
                let s;
                const i = o.get(t);
                i ? (s = i) : ((s = new Map()), o.set(t, s));
                const a = Object.keys(n).reduce((e, r) => {
                    let i;
                    const o = s.get(r);
                    o ? (i = o) : ((i = t(r)), s.set(r, i));
                    for (let t = i.length - 1; t >= 0; t--) {
                      const s = i[t];
                      if (s.filename) {
                        e[s.filename] = n[r];
                        break;
                      }
                    }
                    return e;
                  }, {}),
                  c = new Set();
                try {
                  e.exception.values.forEach((e) => {
                    e.stacktrace.frames.forEach((e) => {
                      e.filename && c.add(e.filename);
                    });
                  });
                } catch (e) {}
                (e.debug_meta = e.debug_meta || {}), (e.debug_meta.images = e.debug_meta.images || []);
                const u = e.debug_meta.images;
                c.forEach((e) => {
                  a[e] && u.push({ type: "sourcemap", code_file: e, debug_id: a[e] });
                });
              }
              (n.applyDebugMetadata = a),
                (n.prepareEvent = function (e, t, n, o) {
                  const { normalizeDepth: c = 3, normalizeMaxBreadth: u = 1e3 } = e,
                    l = { ...t, event_id: t.event_id || n.event_id || r.uuid4(), timestamp: t.timestamp || r.dateTimestampInSeconds() },
                    d = n.integrations || e.integrations.map((e) => e.name);
                  !(function (e, t) {
                    const { environment: n, release: i, dist: o, maxValueLength: a = 250 } = t;
                    "environment" in e || (e.environment = "environment" in t ? n : s.DEFAULT_ENVIRONMENT);
                    e.release === undefined && i !== undefined && (e.release = i);
                    e.dist === undefined && o !== undefined && (e.dist = o);
                    e.message && (e.message = r.truncate(e.message, a));
                    const c = e.exception && e.exception.values && e.exception.values[0];
                    c && c.value && (c.value = r.truncate(c.value, a));
                    const u = e.request;
                    u && u.url && (u.url = r.truncate(u.url, a));
                  })(l, e),
                    (function (e, t) {
                      t.length > 0 && ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
                    })(l, d),
                    t.type === undefined && a(l, e.stackParser);
                  let p = o;
                  n.captureContext && (p = i.Scope.clone(p).update(n.captureContext));
                  let f = r.resolvedSyncPromise(l);
                  if (p) {
                    if (p.getAttachments) {
                      const e = [...(n.attachments || []), ...p.getAttachments()];
                      e.length && (n.attachments = e);
                    }
                    f = p.applyToEvent(l, n);
                  }
                  return f.then((e) =>
                    "number" == typeof c && c > 0
                      ? (function (e, t, n) {
                          if (!e) return null;
                          const s = {
                            ...e,
                            ...(e.breadcrumbs && {
                              breadcrumbs: e.breadcrumbs.map((e) => ({ ...e, ...(e.data && { data: r.normalize(e.data, t, n) }) }))
                            }),
                            ...(e.user && { user: r.normalize(e.user, t, n) }),
                            ...(e.contexts && { contexts: r.normalize(e.contexts, t, n) }),
                            ...(e.extra && { extra: r.normalize(e.extra, t, n) })
                          };
                          e.contexts &&
                            e.contexts.trace &&
                            s.contexts &&
                            ((s.contexts.trace = e.contexts.trace),
                            e.contexts.trace.data && (s.contexts.trace.data = r.normalize(e.contexts.trace.data, t, n)));
                          e.spans && (s.spans = e.spans.map((e) => (e.data && (e.data = r.normalize(e.data, t, n)), e)));
                          return s;
                        })(e, c, u)
                      : e
                  );
                });
            },
            { "../constants.js": 60, "../scope.js": 69, "@sentry/utils": 120 }
          ],
          86: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.SDK_VERSION = "7.53.0";
            },
            {}
          ],
          87: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              class s {
                static __initStatic() {
                  this.id = "CaptureConsole";
                }
                __init() {
                  this.name = s.id;
                }
                __init2() {
                  this._levels = r.CONSOLE_LEVELS;
                }
                constructor(e = {}) {
                  s.prototype.__init.call(this), s.prototype.__init2.call(this), e.levels && (this._levels = e.levels);
                }
                setupOnce(e, t) {
                  "console" in r.GLOBAL_OBJ &&
                    this._levels.forEach((e) => {
                      e in r.GLOBAL_OBJ.console &&
                        r.fill(r.GLOBAL_OBJ.console, e, (n) => (...i) => {
                          const o = t();
                          o.getIntegration(s) &&
                            o.withScope((t) => {
                              t.setLevel(r.severityLevelFromString(e)),
                                t.setExtra("arguments", i),
                                t.addEventProcessor((e) => ((e.logger = "console"), e));
                              let n = r.safeJoin(i, " ");
                              "assert" === e
                                ? !1 === i[0] &&
                                  ((n = `Assertion failed: ${r.safeJoin(i.slice(1), " ") || "console.assert"}`),
                                  t.setExtra("arguments", i.slice(1)),
                                  o.captureMessage(n))
                                : "error" === e && i[0] instanceof Error
                                ? o.captureException(i[0])
                                : o.captureMessage(n);
                            }),
                            n && n.apply(r.GLOBAL_OBJ.console, i);
                        });
                    });
                }
              }
              s.__initStatic(), (n.CaptureConsole = s);
            },
            { "@sentry/utils": 120 }
          ],
          88: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              class s {
                static __initStatic() {
                  this.id = "Debug";
                }
                __init() {
                  this.name = s.id;
                }
                constructor(e) {
                  s.prototype.__init.call(this), (this._options = { debugger: !1, stringify: !1, ...e });
                }
                setupOnce(e, t) {
                  e((e, n) => {
                    const i = t().getIntegration(s);
                    return (
                      i &&
                        (i._options.debugger,
                        r.consoleSandbox(() => {
                          i._options.stringify
                            ? (console.log(JSON.stringify(e, null, 2)), Object.keys(n).length && console.log(JSON.stringify(n, null, 2)))
                            : (console.log(e), Object.keys(n).length && console.log(n));
                        })),
                      e
                    );
                  });
                }
              }
              s.__initStatic(), (n.Debug = s);
            },
            { "@sentry/utils": 120 }
          ],
          89: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              class s {
                constructor() {
                  s.prototype.__init.call(this);
                }
                static __initStatic() {
                  this.id = "Dedupe";
                }
                __init() {
                  this.name = s.id;
                }
                setupOnce(e, t) {
                  const n = (e) => {
                    if (e.type) return e;
                    const n = t().getIntegration(s);
                    if (n) {
                      try {
                        if (i(e, n._previousEvent))
                          return (
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                              r.logger.warn("Event dropped due to being a duplicate of previously captured event."),
                            null
                          );
                      } catch (t) {
                        return (n._previousEvent = e);
                      }
                      return (n._previousEvent = e);
                    }
                    return e;
                  };
                  (n.id = this.name), e(n);
                }
              }
              function i(e, t) {
                return (
                  !!t &&
                  (!!(function (e, t) {
                    const n = e.message,
                      r = t.message;
                    if (!n && !r) return !1;
                    if ((n && !r) || (!n && r)) return !1;
                    if (n !== r) return !1;
                    if (!a(e, t)) return !1;
                    if (!o(e, t)) return !1;
                    return !0;
                  })(e, t) ||
                    !!(function (e, t) {
                      const n = c(t),
                        r = c(e);
                      if (!n || !r) return !1;
                      if (n.type !== r.type || n.value !== r.value) return !1;
                      if (!a(e, t)) return !1;
                      if (!o(e, t)) return !1;
                      return !0;
                    })(e, t))
                );
              }
              function o(e, t) {
                let n = u(e),
                  r = u(t);
                if (!n && !r) return !0;
                if ((n && !r) || (!n && r)) return !1;
                if (r.length !== n.length) return !1;
                for (let e = 0; e < r.length; e++) {
                  const t = r[e],
                    s = n[e];
                  if (t.filename !== s.filename || t.lineno !== s.lineno || t.colno !== s.colno || t.function !== s.function) return !1;
                }
                return !0;
              }
              function a(e, t) {
                let n = e.fingerprint,
                  r = t.fingerprint;
                if (!n && !r) return !0;
                if ((n && !r) || (!n && r)) return !1;
                try {
                  return !(n.join("") !== r.join(""));
                } catch (e) {
                  return !1;
                }
              }
              function c(e) {
                return e.exception && e.exception.values && e.exception.values[0];
              }
              function u(e) {
                const t = e.exception;
                if (t)
                  try {
                    return t.values[0].stacktrace.frames;
                  } catch (e) {
                    return undefined;
                  }
                return undefined;
              }
              s.__initStatic(), (n.Dedupe = s), (n._shouldDropEvent = i);
            },
            { "@sentry/utils": 120 }
          ],
          90: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              class s {
                static __initStatic() {
                  this.id = "ExtraErrorData";
                }
                __init() {
                  this.name = s.id;
                }
                constructor(e) {
                  s.prototype.__init.call(this), (this._options = { depth: 3, ...e });
                }
                setupOnce(e, t) {
                  e((e, n) => {
                    const r = t().getIntegration(s);
                    return r ? r.enhanceEventWithErrorData(e, n) : e;
                  });
                }
                enhanceEventWithErrorData(e, t = {}) {
                  if (!t.originalException || !r.isError(t.originalException)) return e;
                  const n = t.originalException.name || t.originalException.constructor.name,
                    s = this._extractErrorData(t.originalException);
                  if (s) {
                    const t = { ...e.contexts },
                      i = r.normalize(s, this._options.depth);
                    return (
                      r.isPlainObject(i) && (r.addNonEnumerableProperty(i, "__sentry_skip_normalization__", !0), (t[n] = i)),
                      { ...e, contexts: t }
                    );
                  }
                  return e;
                }
                _extractErrorData(e) {
                  try {
                    const t = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                      n = {};
                    for (const s of Object.keys(e)) {
                      if (-1 !== t.indexOf(s)) continue;
                      const i = e[s];
                      n[s] = r.isError(i) ? i.toString() : i;
                    }
                    if ("function" == typeof e.toJSON) {
                      const t = e.toJSON();
                      for (const e of Object.keys(t)) {
                        const s = t[e];
                        n[e] = r.isError(s) ? s.toString() : s;
                      }
                    }
                    return n;
                  } catch (e) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      r.logger.error("Unable to extract extra data from the Error object:", e);
                  }
                  return null;
                }
              }
              s.__initStatic(), (n.ExtraErrorData = s);
            },
            { "@sentry/utils": 120 }
          ],
          91: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              class s {
                static __initStatic() {
                  this.id = "HttpClient";
                }
                __init() {
                  this.name = s.id;
                }
                constructor(e) {
                  s.prototype.__init.call(this),
                    (this._options = { failedRequestStatusCodes: [[500, 599]], failedRequestTargets: [/.*/], ...e });
                }
                setupOnce(e, t) {
                  (this._getCurrentHub = t), this._wrapFetch(), this._wrapXHR();
                }
                _fetchResponseHandler(e, t, n) {
                  if (this._getCurrentHub && this._shouldCaptureResponse(t.status, t.url)) {
                    const s = (function (e, t) {
                        if (!t && e instanceof Request) return e;
                        if (e instanceof Request && e.bodyUsed) return e;
                        return new Request(e, t);
                      })(e, n),
                      i = this._getCurrentHub();
                    let o, a, c, u;
                    i.shouldSendDefaultPii() &&
                      ([{ headers: o, cookies: c }, { headers: a, cookies: u }] = [
                        { cookieHeader: "Cookie", obj: s },
                        { cookieHeader: "Set-Cookie", obj: t }
                      ].map(({ cookieHeader: e, obj: t }) => {
                        const n = this._extractFetchHeaders(t.headers);
                        let s;
                        try {
                          const t = n[e] || n[e.toLowerCase()] || undefined;
                          t && (s = this._parseCookieString(t));
                        } catch (t) {
                          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                            r.logger.log(`Could not extract cookies from header ${e}`);
                        }
                        return { headers: n, cookies: s };
                      }));
                    const l = this._createEvent({
                      url: s.url,
                      method: s.method,
                      status: t.status,
                      requestHeaders: o,
                      responseHeaders: a,
                      requestCookies: c,
                      responseCookies: u
                    });
                    i.captureEvent(l);
                  }
                }
                _xhrResponseHandler(e, t, n) {
                  if (this._getCurrentHub && this._shouldCaptureResponse(e.status, e.responseURL)) {
                    let s, i, o;
                    const a = this._getCurrentHub();
                    if (a.shouldSendDefaultPii()) {
                      try {
                        const t = e.getResponseHeader("Set-Cookie") || e.getResponseHeader("set-cookie") || undefined;
                        t && (i = this._parseCookieString(t));
                      } catch (e) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          r.logger.log("Could not extract cookies from response headers");
                      }
                      try {
                        o = this._getXHRResponseHeaders(e);
                      } catch (e) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          r.logger.log("Could not extract headers from response");
                      }
                      s = n;
                    }
                    const c = this._createEvent({
                      url: e.responseURL,
                      method: t,
                      status: e.status,
                      requestHeaders: s,
                      responseHeaders: o,
                      responseCookies: i
                    });
                    a.captureEvent(c);
                  }
                }
                _getResponseSizeFromHeaders(e) {
                  if (e) {
                    const t = e["Content-Length"] || e["content-length"];
                    if (t) return parseInt(t, 10);
                  }
                  return undefined;
                }
                _parseCookieString(e) {
                  return e.split("; ").reduce((e, t) => {
                    const [n, r] = t.split("=");
                    return (e[n] = r), e;
                  }, {});
                }
                _extractFetchHeaders(e) {
                  const t = {};
                  return (
                    e.forEach((e, n) => {
                      t[n] = e;
                    }),
                    t
                  );
                }
                _getXHRResponseHeaders(e) {
                  const t = e.getAllResponseHeaders();
                  return t
                    ? t.split("\r\n").reduce((e, t) => {
                        const [n, r] = t.split(": ");
                        return (e[n] = r), e;
                      }, {})
                    : {};
                }
                _isInGivenRequestTargets(e) {
                  return (
                    !!this._options.failedRequestTargets &&
                    this._options.failedRequestTargets.some((t) => ("string" == typeof t ? e.includes(t) : t.test(e)))
                  );
                }
                _isInGivenStatusRanges(e) {
                  return (
                    !!this._options.failedRequestStatusCodes &&
                    this._options.failedRequestStatusCodes.some((t) => ("number" == typeof t ? t === e : e >= t[0] && e <= t[1]))
                  );
                }
                _wrapFetch() {
                  r.supportsNativeFetch() &&
                    r.addInstrumentationHandler("fetch", (e) => {
                      const { response: t, args: n } = e,
                        [r, s] = n;
                      t && this._fetchResponseHandler(r, t, s);
                    });
                }
                _wrapXHR() {
                  "XMLHttpRequest" in r.GLOBAL_OBJ &&
                    r.addInstrumentationHandler("xhr", (e) => {
                      const { xhr: t } = e,
                        n = t[r.SENTRY_XHR_DATA_KEY];
                      if (!n) return;
                      const { method: s, request_headers: i } = n;
                      if (s)
                        try {
                          this._xhrResponseHandler(t, s, i);
                        } catch (e) {
                          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                            r.logger.warn("Error while extracting response event form XHR response", e);
                        }
                    });
                }
                _isSentryRequest(e) {
                  const t = this._getCurrentHub && this._getCurrentHub().getClient();
                  if (!t) return !1;
                  const n = t.getDsn();
                  return !!n && e.includes(n.host);
                }
                _shouldCaptureResponse(e, t) {
                  return this._isInGivenStatusRanges(e) && this._isInGivenRequestTargets(t) && !this._isSentryRequest(t);
                }
                _createEvent(e) {
                  const t = `HTTP Client Error with status code: ${e.status}`,
                    n = {
                      message: t,
                      exception: { values: [{ type: "Error", value: t }] },
                      request: { url: e.url, method: e.method, headers: e.requestHeaders, cookies: e.requestCookies },
                      contexts: {
                        response: {
                          status_code: e.status,
                          headers: e.responseHeaders,
                          cookies: e.responseCookies,
                          body_size: this._getResponseSizeFromHeaders(e.responseHeaders)
                        }
                      }
                    };
                  return r.addExceptionMechanism(n, { type: "http.client" }), n;
                }
              }
              s.__initStatic(), (n.HttpClient = s);
            },
            { "@sentry/utils": 120 }
          ],
          92: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./captureconsole.js"),
                s = e("./debug.js"),
                i = e("./dedupe.js"),
                o = e("./extraerrordata.js"),
                a = e("./offline.js"),
                c = e("./reportingobserver.js"),
                u = e("./rewriteframes.js"),
                l = e("./sessiontiming.js"),
                d = e("./transaction.js"),
                p = e("./httpclient.js");
              (n.CaptureConsole = r.CaptureConsole),
                (n.Debug = s.Debug),
                (n.Dedupe = i.Dedupe),
                (n.ExtraErrorData = o.ExtraErrorData),
                (n.Offline = a.Offline),
                (n.ReportingObserver = c.ReportingObserver),
                (n.RewriteFrames = u.RewriteFrames),
                (n.SessionTiming = l.SessionTiming),
                (n.Transaction = d.Transaction),
                (n.HttpClient = p.HttpClient);
            },
            {
              "./captureconsole.js": 87,
              "./debug.js": 88,
              "./dedupe.js": 89,
              "./extraerrordata.js": 90,
              "./httpclient.js": 91,
              "./offline.js": 93,
              "./reportingobserver.js": 94,
              "./rewriteframes.js": 95,
              "./sessiontiming.js": 96,
              "./transaction.js": 97
            }
          ],
          93: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = e("localforage"),
                i = r.GLOBAL_OBJ;
              class o {
                static __initStatic() {
                  this.id = "Offline";
                }
                __init() {
                  this.name = o.id;
                }
                constructor(e = {}) {
                  o.prototype.__init.call(this),
                    (this.maxStoredEvents = e.maxStoredEvents || 30),
                    (this.offlineEventStore = s.default.createInstance({ name: "sentry/offlineEventStore" }));
                }
                setupOnce(e, t) {
                  (this.hub = t()),
                    "addEventListener" in i &&
                      i.addEventListener("online", () => {
                        this._sendEvents().catch(() => {
                          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("could not send cached events");
                        });
                      });
                  const n = (e) =>
                    this.hub && this.hub.getIntegration(o) && "navigator" in i && "onLine" in i.navigator && !i.navigator.onLine
                      ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          r.logger.log("Event dropped due to being a offline - caching instead"),
                        this._cacheEvent(e)
                          .then((e) => this._enforceMaxEvents())
                          .catch((e) => {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                              r.logger.warn("could not cache event while offline");
                          }),
                        null)
                      : e;
                  (n.id = this.name),
                    e(n),
                    "navigator" in i &&
                      "onLine" in i.navigator &&
                      i.navigator.onLine &&
                      this._sendEvents().catch(() => {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("could not send cached events");
                      });
                }
                async _cacheEvent(e) {
                  return this.offlineEventStore.setItem(r.uuid4(), r.normalize(e));
                }
                async _enforceMaxEvents() {
                  const e = [];
                  return this.offlineEventStore
                    .iterate((t, n, r) => {
                      e.push({ cacheKey: n, event: t });
                    })
                    .then(() =>
                      this._purgeEvents(
                        e
                          .sort((e, t) => (t.event.timestamp || 0) - (e.event.timestamp || 0))
                          .slice(this.maxStoredEvents < e.length ? this.maxStoredEvents : e.length)
                          .map((e) => e.cacheKey)
                      )
                    )
                    .catch((e) => {
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("could not enforce max events");
                    });
                }
                async _purgeEvent(e) {
                  return this.offlineEventStore.removeItem(e);
                }
                async _purgeEvents(e) {
                  return Promise.all(e.map((e) => this._purgeEvent(e))).then();
                }
                async _sendEvents() {
                  return this.offlineEventStore.iterate((e, t, n) => {
                    this.hub
                      ? (this.hub.captureEvent(e),
                        this._purgeEvent(t).catch((e) => {
                          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("could not purge event from cache");
                        }))
                      : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.warn("no hub found - could not send cached event");
                  });
                }
              }
              o.__initStatic(), (n.Offline = o);
            },
            { "@sentry/utils": 120, localforage: 146 }
          ],
          94: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils"),
                s = r.GLOBAL_OBJ;
              class i {
                static __initStatic() {
                  this.id = "ReportingObserver";
                }
                __init() {
                  this.name = i.id;
                }
                constructor(e = { types: ["crash", "deprecation", "intervention"] }) {
                  (this._options = e), i.prototype.__init.call(this);
                }
                setupOnce(e, t) {
                  if (!r.supportsReportingObserver()) return;
                  this._getCurrentHub = t;
                  new s.ReportingObserver(this.handler.bind(this), { buffered: !0, types: this._options.types }).observe();
                }
                handler(e) {
                  const t = this._getCurrentHub && this._getCurrentHub();
                  if (t && t.getIntegration(i))
                    for (const n of e)
                      t.withScope((e) => {
                        e.setExtra("url", n.url);
                        const r = `ReportingObserver [${n.type}]`;
                        let s = "No details available";
                        if (n.body) {
                          const t = {};
                          for (const e in n.body) t[e] = n.body[e];
                          if ((e.setExtra("body", t), "crash" === n.type)) {
                            const e = n.body;
                            s = [e.crashId || "", e.reason || ""].join(" ").trim() || s;
                          } else {
                            s = n.body.message || s;
                          }
                        }
                        t.captureMessage(`${r}: ${s}`);
                      });
                }
              }
              i.__initStatic(), (n.ReportingObserver = i);
            },
            { "@sentry/utils": 120 }
          ],
          95: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("@sentry/utils");
              class s {
                static __initStatic() {
                  this.id = "RewriteFrames";
                }
                __init() {
                  this.name = s.id;
                }
                __init2() {
                  this._prefix = "app:///";
                }
                constructor(e = {}) {
                  s.prototype.__init.call(this),
                    s.prototype.__init2.call(this),
                    s.prototype.__init3.call(this),
                    e.root && (this._root = e.root),
                    e.prefix && (this._prefix = e.prefix),
                    e.iteratee && (this._iteratee = e.iteratee);
                }
                setupOnce(e, t) {
                  e((e) => {
                    const n = t().getIntegration(s);
                    return n ? n.process(e) : e;
                  });
                }
                process(e) {
                  let t = e;
                  return e.exception && Array.isArray(e.exception.values) && (t = this._processExceptionsEvent(t)), t;
                }
                __init3() {
                  this._iteratee = (e) => {
                    if (!e.filename) return e;
                    const t = /^[a-zA-Z]:\\/.test(e.filename) || (e.filename.includes("\\") && !e.filename.includes("/")),
                      n = /^\//.test(e.filename);
                    if (t || n) {
                      const n = t ? e.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : e.filename,
                        s = this._root ? r.relative(this._root, n) : r.basename(n);
                      e.filename = `${this._prefix}${s}`;
                    }
                    return e;
                  };
                }
                _processExceptionsEvent(e) {
                  try {
                    return {
                      ...e,
                      exception: {
                        ...e.exception,
                        values: e.exception.values.map((e) => ({
                          ...e,
                          ...(e.stacktrace && { stacktrace: this._processStacktrace(e.stacktrace) })
                        }))
                      }
                    };
                  } catch (t) {
                    return e;
                  }
                }
                _processStacktrace(e) {
                  return { ...e, frames: e && e.frames && e.frames.map((e) => this._iteratee(e)) };
                }
              }
              s.__initStatic(), (n.RewriteFrames = s);
            },
            { "@sentry/utils": 120 }
          ],
          96: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              class r {
                constructor() {
                  r.prototype.__init.call(this), r.prototype.__init2.call(this);
                }
                static __initStatic() {
                  this.id = "SessionTiming";
                }
                __init() {
                  this.name = r.id;
                }
                __init2() {
                  this._startTime = Date.now();
                }
                setupOnce(e, t) {
                  e((e) => {
                    const n = t().getIntegration(r);
                    return n ? n.process(e) : e;
                  });
                }
                process(e) {
                  const t = Date.now();
                  return {
                    ...e,
                    extra: { ...e.extra, "session:start": this._startTime, "session:duration": t - this._startTime, "session:end": t }
                  };
                }
              }
              r.__initStatic(), (n.SessionTiming = r);
            },
            {}
          ],
          97: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              class r {
                constructor() {
                  r.prototype.__init.call(this);
                }
                static __initStatic() {
                  this.id = "Transaction";
                }
                __init() {
                  this.name = r.id;
                }
                setupOnce(e, t) {
                  e((e) => {
                    const n = t().getIntegration(r);
                    return n ? n.process(e) : e;
                  });
                }
                process(e) {
                  const t = this._getFramesFromEvent(e);
                  for (let n = t.length - 1; n >= 0; n--) {
                    const r = t[n];
                    if (!0 === r.in_app) {
                      e.transaction = this._getTransaction(r);
                      break;
                    }
                  }
                  return e;
                }
                _getFramesFromEvent(e) {
                  const t = e.exception && e.exception.values && e.exception.values[0];
                  return (t && t.stacktrace && t.stacktrace.frames) || [];
                }
                _getTransaction(e) {
                  return e.module || e.function ? `${e.module || "?"}/${e.function || "?"}` : "<unknown>";
                }
              }
              r.__initStatic(), (n.Transaction = r);
            },
            {}
          ],
          98: [
            function (e, t, n) {
              (function (t) {
                (function () {
                  Object.defineProperty(n, "__esModule", { value: !0 });
                  const r = e("@sentry/core"),
                    s = e("@sentry/utils"),
                    i = s.GLOBAL_OBJ,
                    o = "sentryReplaySession",
                    a = "replay_event",
                    c = "Unable to send Replay",
                    u = 15e4,
                    l = 5e3;
                  var d;
                  function p(e) {
                    const t = null == e ? void 0 : e.host;
                    return Boolean(t && t.shadowRoot && t.shadowRoot === e);
                  }
                  function f({ maskInputOptions: e, tagName: t, type: n }) {
                    "option" === t.toLowerCase() && (t = "select");
                    const r = "string" == typeof n ? n.toLowerCase() : undefined;
                    return e[t.toLowerCase()] || (r && e[r]) || "password" === r || ("input" === t && !n && e.text);
                  }
                  function _({
                    input: e,
                    maskInputSelector: t,
                    unmaskInputSelector: n,
                    maskInputOptions: r,
                    tagName: s,
                    type: i,
                    value: o,
                    maskInputFn: a
                  }) {
                    let c = o || "";
                    return (
                      (n && e.matches(n)) ||
                        (e.hasAttribute("data-rr-is-password") && (i = "password"),
                        (f({ maskInputOptions: r, tagName: s, type: i }) || (t && e.matches(t))) && (c = a ? a(c) : "*".repeat(c.length))),
                      c
                    );
                  }
                  !(function (e) {
                    (e[(e.Document = 0)] = "Document"),
                      (e[(e.DocumentType = 1)] = "DocumentType"),
                      (e[(e.Element = 2)] = "Element"),
                      (e[(e.Text = 3)] = "Text"),
                      (e[(e.CDATA = 4)] = "CDATA"),
                      (e[(e.Comment = 5)] = "Comment");
                  })(d || (d = {}));
                  const h = "__rrweb_original__";
                  function m(e) {
                    const t = e.type;
                    return e.hasAttribute("data-rr-is-password") ? "password" : t ? t.toLowerCase() : null;
                  }
                  function g(e, t, n) {
                    return (
                      "string" == typeof n && n.toLowerCase(),
                      "INPUT" !== t || ("radio" !== n && "checkbox" !== n) ? e.value : e.getAttribute("value") || ""
                    );
                  }
                  let y = 1;
                  const b = new RegExp("[^a-z0-9-_:]"),
                    v = -2;
                  function E(e) {
                    return e ? e.replace(/[\S]/g, "*") : "";
                  }
                  function S(e) {
                    try {
                      const t = e.rules || e.cssRules;
                      return t ? Array.from(t).map(w).join("") : null;
                    } catch (e) {
                      return null;
                    }
                  }
                  function w(e) {
                    let t = e.cssText;
                    if (
                      (function (e) {
                        return "styleSheet" in e;
                      })(e)
                    )
                      try {
                        t = S(e.styleSheet) || t;
                      } catch (e) {}
                    return T(t);
                  }
                  function T(e) {
                    if (e.indexOf(":") > -1) {
                      const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
                      return e.replace(t, "$1\\$2");
                    }
                    return e;
                  }
                  let k, R;
                  const x = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                    N = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
                    D = /^(data:)([^,]*),(.*)/i;
                  function I(e, t) {
                    return (e || "").replace(x, (e, n, r, s, i, o) => {
                      const a = r || i || o,
                        c = n || s || "";
                      if (!a) return e;
                      if (!N.test(a)) return `url(${c}${a}${c})`;
                      if (D.test(a)) return `url(${c}${a}${c})`;
                      if ("/" === a[0])
                        return `url(${c}${
                          (function (e) {
                            let t = "";
                            return (
                              (t = e.indexOf("//") > -1 ? e.split("/").slice(0, 3).join("/") : e.split("/")[0]), (t = t.split("?")[0]), t
                            );
                          })(t) + a
                        }${c})`;
                      const u = t.split("/"),
                        l = a.split("/");
                      u.pop();
                      for (const e of l) "." !== e && (".." === e ? u.pop() : u.push(e));
                      return `url(${c}${u.join("/")}${c})`;
                    });
                  }
                  const O = /^[^ \t\n\r\u000c]+/,
                    C = /^[, \t\n\r\u000c]+/;
                  function j(e, t) {
                    if (!t || "" === t.trim()) return t;
                    const n = e.createElement("a");
                    return (n.href = t), n.href;
                  }
                  function A() {
                    const e = document.createElement("a");
                    return (e.href = ""), e.href;
                  }
                  function M(e, t, n, r, s, i, o, a) {
                    if (!s) return s;
                    const c = r.toLowerCase(),
                      u = n.toLowerCase();
                    return "src" === c || "href" === c || ("xlink:href" === c && "#" !== s[0])
                      ? j(e, s)
                      : "background" !== c || ("table" !== u && "td" !== u && "th" !== u)
                      ? "srcset" === c
                        ? (function (e, t) {
                            if ("" === t.trim()) return t;
                            let n = 0;
                            function r(e) {
                              let r,
                                s = e.exec(t.substring(n));
                              return s ? ((r = s[0]), (n += r.length), r) : "";
                            }
                            let s = [];
                            for (; r(C), !(n >= t.length); ) {
                              let i = r(O);
                              if ("," === i.slice(-1)) (i = j(e, i.substring(0, i.length - 1))), s.push(i);
                              else {
                                let r = "";
                                i = j(e, i);
                                let o = !1;
                                for (;;) {
                                  let e = t.charAt(n);
                                  if ("" === e) {
                                    s.push((i + r).trim());
                                    break;
                                  }
                                  if (o) ")" === e && (o = !1);
                                  else {
                                    if ("," === e) {
                                      (n += 1), s.push((i + r).trim());
                                      break;
                                    }
                                    "(" === e && (o = !0);
                                  }
                                  (r += e), (n += 1);
                                }
                              }
                            }
                            return s.join(", ");
                          })(e, s)
                        : "style" === c
                        ? I(s, A())
                        : "object" === u && "data" === c
                        ? j(e, s)
                        : i &&
                          (function (e, t, n, r) {
                            if (r && e.matches(r)) return !1;
                            return (
                              ["placeholder", "title", "aria-label"].indexOf(t) > -1 ||
                              ("input" === n &&
                                "value" === t &&
                                e.hasAttribute("type") &&
                                ["submit", "button"].indexOf(e.getAttribute("type").toLowerCase()) > -1)
                            );
                          })(t, c, u, o)
                        ? a
                          ? a(s)
                          : E(s)
                        : s
                      : j(e, s);
                  }
                  function B(e, t, n, r, s) {
                    if (!e) return !1;
                    if (e.nodeType !== e.ELEMENT_NODE) return B(e.parentNode, t, n, r, s);
                    if (r && (e.matches(r) || e.closest(r))) return !1;
                    if (s) return !0;
                    if ("string" == typeof t) {
                      if (e.classList.contains(t)) return !0;
                    } else
                      for (let n = 0; n < e.classList.length; n++) {
                        const r = e.classList[n];
                        if (t.test(r)) return !0;
                      }
                    return !(!n || !e.matches(n)) || B(e.parentNode, t, n, r, s);
                  }
                  function P(e, t) {
                    var n;
                    const {
                      doc: r,
                      blockClass: s,
                      blockSelector: i,
                      unblockSelector: o,
                      maskTextClass: a,
                      maskTextSelector: c,
                      unmaskTextSelector: u,
                      inlineStylesheet: l,
                      maskInputSelector: p,
                      unmaskInputSelector: f,
                      maskAllText: y,
                      maskInputOptions: v = {},
                      maskTextFn: w,
                      maskInputFn: x,
                      dataURLOptions: N = {},
                      inlineImages: D,
                      recordCanvas: O,
                      keepIframeSrcFn: C
                    } = t;
                    let j;
                    if (r.__sn) {
                      const e = r.__sn.id;
                      j = 1 === e ? undefined : e;
                    }
                    switch (e.nodeType) {
                      case e.DOCUMENT_NODE:
                        return "CSS1Compat" !== e.compatMode
                          ? { type: d.Document, childNodes: [], compatMode: e.compatMode, rootId: j }
                          : { type: d.Document, childNodes: [], rootId: j };
                      case e.DOCUMENT_TYPE_NODE:
                        return { type: d.DocumentType, name: e.name, publicId: e.publicId, systemId: e.systemId, rootId: j };
                      case e.ELEMENT_NODE:
                        const t = (function (e, t, n, r) {
                            if (r && e.matches(r)) return !1;
                            if ("string" == typeof t) {
                              if (e.classList.contains(t)) return !0;
                            } else
                              for (let n = 0; n < e.classList.length; n++) {
                                const r = e.classList[n];
                                if (t.test(r)) return !0;
                              }
                            return !!n && e.matches(n);
                          })(e, s, i, o),
                          L = (function (e) {
                            if (e instanceof HTMLFormElement) return "form";
                            const t = e.tagName.toLowerCase().trim();
                            return b.test(t) ? "div" : t;
                          })(e);
                        let F = {};
                        for (const { name: t, value: n } of Array.from(e.attributes)) G(L, t) || (F[t] = M(r, e, L, t, n, y, u, w));
                        if ("link" === L && l) {
                          const t = Array.from(r.styleSheets).find((t) => t.href === e.href);
                          let n = null;
                          t && (n = S(t)), n && (delete F.rel, delete F.href, (F._cssText = I(n, t.href)));
                        }
                        if ("style" === L && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                          const t = S(e.sheet);
                          t && (F._cssText = I(t, A()));
                        }
                        if ("input" === L || "textarea" === L || "select" === L || "option" === L) {
                          const t = e,
                            n = m(t),
                            r = g(t, L.toUpperCase(), n),
                            s = e.checked;
                          "submit" !== n &&
                            "button" !== n &&
                            r &&
                            (F.value = _({
                              input: t,
                              type: n,
                              tagName: L,
                              value: r,
                              maskInputSelector: p,
                              unmaskInputSelector: f,
                              maskInputOptions: v,
                              maskInputFn: x
                            })),
                            s && (F.checked = s);
                        }
                        if (("option" === L && (e.selected && !v.select ? (F.selected = !0) : delete F.selected), "canvas" === L && O))
                          if ("2d" === e.__context)
                            (function (e) {
                              const t = e.getContext("2d");
                              if (!t) return !0;
                              for (let n = 0; n < e.width; n += 50)
                                for (let r = 0; r < e.height; r += 50) {
                                  const s = t.getImageData,
                                    i = h in s ? s[h] : s;
                                  if (
                                    new Uint32Array(
                                      i.call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer
                                    ).some((e) => 0 !== e)
                                  )
                                    return !1;
                                }
                              return !0;
                            })(e) || (F.rr_dataURL = e.toDataURL(N.type, N.quality));
                          else if (!("__context" in e)) {
                            const t = e.toDataURL(N.type, N.quality),
                              n = document.createElement("canvas");
                            (n.width = e.width), (n.height = e.height);
                            t !== n.toDataURL(N.type, N.quality) && (F.rr_dataURL = t);
                          }
                        if ("img" === L && D) {
                          k || ((k = r.createElement("canvas")), (R = k.getContext("2d")));
                          const t = e,
                            n = t.crossOrigin;
                          t.crossOrigin = "anonymous";
                          const s = () => {
                            try {
                              (k.width = t.naturalWidth),
                                (k.height = t.naturalHeight),
                                R.drawImage(t, 0, 0),
                                (F.rr_dataURL = k.toDataURL(N.type, N.quality));
                            } catch (e) {
                              console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`);
                            }
                            n ? (F.crossOrigin = n) : delete F.crossOrigin;
                          };
                          t.complete && 0 !== t.naturalWidth ? s() : (t.onload = s);
                        }
                        if (
                          (("audio" !== L && "video" !== L) ||
                            ((F.rr_mediaState = e.paused ? "paused" : "played"), (F.rr_mediaCurrentTime = e.currentTime)),
                          e.scrollLeft && (F.rr_scrollLeft = e.scrollLeft),
                          e.scrollTop && (F.rr_scrollTop = e.scrollTop),
                          t)
                        ) {
                          const { width: t, height: n } = e.getBoundingClientRect();
                          F = { class: F.class, rr_width: `${t}px`, rr_height: `${n}px` };
                        }
                        return (
                          "iframe" !== L || C(F.src) || (e.contentDocument || (F.rr_src = F.src), delete F.src),
                          {
                            type: d.Element,
                            tagName: L,
                            attributes: F,
                            childNodes: [],
                            isSVG: ((U = e), Boolean("svg" === U.tagName || U.ownerSVGElement) || undefined),
                            needBlock: t,
                            rootId: j
                          }
                        );
                      case e.TEXT_NODE:
                        const Y = e.parentNode && e.parentNode.tagName;
                        let H = e.textContent;
                        const z = "STYLE" === Y || undefined,
                          W = "SCRIPT" === Y || undefined;
                        if (z && H) {
                          try {
                            e.nextSibling ||
                              e.previousSibling ||
                              ((null === (n = e.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) &&
                                (H = (P = e.parentNode.sheet).cssRules
                                  ? Array.from(P.cssRules)
                                      .map((e) => (e.cssText ? T(e.cssText) : ""))
                                      .join("")
                                  : ""));
                          } catch (t) {
                            console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e);
                          }
                          H = I(H, A());
                        }
                        if ((W && (H = "SCRIPT_PLACEHOLDER"), "TEXTAREA" === Y && H)) H = "";
                        else if ("OPTION" === Y && H) {
                          H = _({
                            input: e.parentNode,
                            type: null,
                            tagName: Y,
                            value: H,
                            maskInputSelector: p,
                            unmaskInputSelector: f,
                            maskInputOptions: v,
                            maskInputFn: x
                          });
                        } else !z && !W && B(e, a, c, u, y) && H && (H = w ? w(H) : E(H));
                        return { type: d.Text, textContent: H || "", isStyle: z, rootId: j };
                      case e.CDATA_SECTION_NODE:
                        return { type: d.CDATA, textContent: "", rootId: j };
                      case e.COMMENT_NODE:
                        return { type: d.Comment, textContent: e.textContent || "", rootId: j };
                      default:
                        return !1;
                    }
                    var P, U;
                  }
                  function U(e) {
                    return e === undefined || null === e ? "" : e.toLowerCase();
                  }
                  function L(e, t) {
                    const {
                      doc: n,
                      map: r,
                      blockClass: s,
                      blockSelector: i,
                      unblockSelector: o,
                      maskTextClass: a,
                      maskTextSelector: c,
                      unmaskTextSelector: u,
                      skipChild: l = !1,
                      inlineStylesheet: f = !0,
                      maskInputSelector: _,
                      unmaskInputSelector: h,
                      maskAllText: m,
                      maskInputOptions: g = {},
                      maskTextFn: b,
                      maskInputFn: E,
                      slimDOMOptions: S,
                      dataURLOptions: w = {},
                      inlineImages: T = !1,
                      recordCanvas: k = !1,
                      onSerialize: R,
                      onIframeLoad: x,
                      iframeLoadTimeout: N = 5e3,
                      keepIframeSrcFn: D = () => !1
                    } = t;
                    let { preserveWhiteSpace: I = !0 } = t;
                    const O = P(e, {
                      doc: n,
                      blockClass: s,
                      blockSelector: i,
                      unblockSelector: o,
                      maskTextClass: a,
                      maskTextSelector: c,
                      unmaskTextSelector: u,
                      inlineStylesheet: f,
                      maskInputSelector: _,
                      unmaskInputSelector: h,
                      maskAllText: m,
                      maskInputOptions: g,
                      maskTextFn: b,
                      maskInputFn: E,
                      dataURLOptions: w,
                      inlineImages: T,
                      recordCanvas: k,
                      keepIframeSrcFn: D
                    });
                    if (!O) return console.warn(e, "not serialized"), null;
                    let C;
                    C =
                      "__sn" in e
                        ? e.__sn.id
                        : !(function (e, t) {
                            if (t.comment && e.type === d.Comment) return !0;
                            if (e.type === d.Element) {
                              if (
                                t.script &&
                                ("script" === e.tagName ||
                                  ("link" === e.tagName &&
                                    ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) &&
                                    "script" === e.attributes.as) ||
                                  ("link" === e.tagName &&
                                    "prefetch" === e.attributes.rel &&
                                    "string" == typeof e.attributes.href &&
                                    e.attributes.href.endsWith(".js")))
                              )
                                return !0;
                              if (
                                t.headFavicon &&
                                (("link" === e.tagName && "shortcut icon" === e.attributes.rel) ||
                                  ("meta" === e.tagName &&
                                    (U(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                                      "application-name" === U(e.attributes.name) ||
                                      "icon" === U(e.attributes.rel) ||
                                      "apple-touch-icon" === U(e.attributes.rel) ||
                                      "shortcut icon" === U(e.attributes.rel))))
                              )
                                return !0;
                              if ("meta" === e.tagName) {
                                if (t.headMetaDescKeywords && U(e.attributes.name).match(/^description|keywords$/)) return !0;
                                if (
                                  t.headMetaSocial &&
                                  (U(e.attributes.property).match(/^(og|twitter|fb):/) ||
                                    U(e.attributes.name).match(/^(og|twitter):/) ||
                                    "pinterest" === U(e.attributes.name))
                                )
                                  return !0;
                                if (
                                  t.headMetaRobots &&
                                  ("robots" === U(e.attributes.name) ||
                                    "googlebot" === U(e.attributes.name) ||
                                    "bingbot" === U(e.attributes.name))
                                )
                                  return !0;
                                if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== undefined) return !0;
                                if (
                                  t.headMetaAuthorship &&
                                  ("author" === U(e.attributes.name) ||
                                    "generator" === U(e.attributes.name) ||
                                    "framework" === U(e.attributes.name) ||
                                    "publisher" === U(e.attributes.name) ||
                                    "progid" === U(e.attributes.name) ||
                                    U(e.attributes.property).match(/^article:/) ||
                                    U(e.attributes.property).match(/^product:/))
                                )
                                  return !0;
                                if (
                                  t.headMetaVerification &&
                                  ("google-site-verification" === U(e.attributes.name) ||
                                    "yandex-verification" === U(e.attributes.name) ||
                                    "csrf-token" === U(e.attributes.name) ||
                                    "p:domain_verify" === U(e.attributes.name) ||
                                    "verify-v1" === U(e.attributes.name) ||
                                    "verification" === U(e.attributes.name) ||
                                    "shopify-checkout-api-token" === U(e.attributes.name))
                                )
                                  return !0;
                              }
                            }
                            return !1;
                          })(O, S) &&
                          (I || O.type !== d.Text || O.isStyle || O.textContent.replace(/^\s+|\s+$/gm, "").length)
                        ? y++
                        : v;
                    const j = Object.assign(O, { id: C });
                    if (((e.__sn = j), C === v)) return null;
                    (r[C] = e), R && R(e);
                    let A = !l;
                    if (
                      (j.type === d.Element && ((A = A && !j.needBlock), delete j.needBlock, e.shadowRoot && (j.isShadowHost = !0)),
                      (j.type === d.Document || j.type === d.Element) && A)
                    ) {
                      S.headWhitespace && O.type === d.Element && "head" === O.tagName && (I = !1);
                      const t = {
                        doc: n,
                        map: r,
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        maskTextClass: a,
                        maskTextSelector: c,
                        unmaskTextSelector: u,
                        skipChild: l,
                        inlineStylesheet: f,
                        maskInputSelector: _,
                        unmaskInputSelector: h,
                        maskAllText: m,
                        maskInputOptions: g,
                        maskTextFn: b,
                        maskInputFn: E,
                        slimDOMOptions: S,
                        dataURLOptions: w,
                        inlineImages: T,
                        recordCanvas: k,
                        preserveWhiteSpace: I,
                        onSerialize: R,
                        onIframeLoad: x,
                        iframeLoadTimeout: N,
                        keepIframeSrcFn: D
                      };
                      for (const n of Array.from(e.childNodes)) {
                        const e = L(n, t);
                        e && j.childNodes.push(e);
                      }
                      if (
                        (function (e) {
                          return e.nodeType === e.ELEMENT_NODE;
                        })(e) &&
                        e.shadowRoot
                      )
                        for (const n of Array.from(e.shadowRoot.childNodes)) {
                          const e = L(n, t);
                          e && ((e.isShadow = !0), j.childNodes.push(e));
                        }
                    }
                    return (
                      e.parentNode && p(e.parentNode) && (j.isShadow = !0),
                      j.type === d.Element &&
                        "iframe" === j.tagName &&
                        (function (e, t, n) {
                          const r = e.contentWindow;
                          if (!r) return;
                          let s,
                            i = !1;
                          try {
                            s = r.document.readyState;
                          } catch (e) {
                            return;
                          }
                          if ("complete" !== s) {
                            const r = setTimeout(() => {
                              i || (t(), (i = !0));
                            }, n);
                            return void e.addEventListener("load", () => {
                              clearTimeout(r), (i = !0), t();
                            });
                          }
                          const o = "about:blank";
                          r.location.href === o && e.src !== o && "" !== e.src ? e.addEventListener("load", t) : setTimeout(t, 0);
                        })(
                          e,
                          () => {
                            const t = e.contentDocument;
                            if (t && x) {
                              const n = L(t, {
                                doc: t,
                                map: r,
                                blockClass: s,
                                blockSelector: i,
                                unblockSelector: o,
                                maskTextClass: a,
                                maskTextSelector: c,
                                unmaskTextSelector: u,
                                skipChild: !1,
                                inlineStylesheet: f,
                                maskInputSelector: _,
                                unmaskInputSelector: h,
                                maskAllText: m,
                                maskInputOptions: g,
                                maskTextFn: b,
                                maskInputFn: E,
                                slimDOMOptions: S,
                                dataURLOptions: w,
                                inlineImages: T,
                                recordCanvas: k,
                                preserveWhiteSpace: I,
                                onSerialize: R,
                                onIframeLoad: x,
                                iframeLoadTimeout: N,
                                keepIframeSrcFn: D
                              });
                              n && x(e, n);
                            }
                          },
                          N
                        ),
                      j
                    );
                  }
                  function G(e, t, n) {
                    return ("video" === e || "audio" === e) && "autoplay" === t;
                  }
                  var F, Y, H, z, W, $;
                  function q(e, t, n = document) {
                    const r = { capture: !0, passive: !0 };
                    return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
                  }
                  !(function (e) {
                    (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
                      (e[(e.Load = 1)] = "Load"),
                      (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
                      (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
                      (e[(e.Meta = 4)] = "Meta"),
                      (e[(e.Custom = 5)] = "Custom"),
                      (e[(e.Plugin = 6)] = "Plugin");
                  })(F || (F = {})),
                    (function (e) {
                      (e[(e.Mutation = 0)] = "Mutation"),
                        (e[(e.MouseMove = 1)] = "MouseMove"),
                        (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
                        (e[(e.Scroll = 3)] = "Scroll"),
                        (e[(e.ViewportResize = 4)] = "ViewportResize"),
                        (e[(e.Input = 5)] = "Input"),
                        (e[(e.TouchMove = 6)] = "TouchMove"),
                        (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
                        (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
                        (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
                        (e[(e.Font = 10)] = "Font"),
                        (e[(e.Log = 11)] = "Log"),
                        (e[(e.Drag = 12)] = "Drag"),
                        (e[(e.StyleDeclaration = 13)] = "StyleDeclaration");
                    })(Y || (Y = {})),
                    (function (e) {
                      (e[(e.MouseUp = 0)] = "MouseUp"),
                        (e[(e.MouseDown = 1)] = "MouseDown"),
                        (e[(e.Click = 2)] = "Click"),
                        (e[(e.ContextMenu = 3)] = "ContextMenu"),
                        (e[(e.DblClick = 4)] = "DblClick"),
                        (e[(e.Focus = 5)] = "Focus"),
                        (e[(e.Blur = 6)] = "Blur"),
                        (e[(e.TouchStart = 7)] = "TouchStart"),
                        (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
                        (e[(e.TouchEnd = 9)] = "TouchEnd"),
                        (e[(e.TouchCancel = 10)] = "TouchCancel");
                    })(H || (H = {})),
                    (function (e) {
                      (e[(e["2D"] = 0)] = "2D"), (e[(e.WebGL = 1)] = "WebGL"), (e[(e.WebGL2 = 2)] = "WebGL2");
                    })(z || (z = {})),
                    (function (e) {
                      (e[(e.Play = 0)] = "Play"),
                        (e[(e.Pause = 1)] = "Pause"),
                        (e[(e.Seeked = 2)] = "Seeked"),
                        (e[(e.VolumeChange = 3)] = "VolumeChange");
                    })(W || (W = {})),
                    (function (e) {
                      (e.Start = "start"),
                        (e.Pause = "pause"),
                        (e.Resume = "resume"),
                        (e.Resize = "resize"),
                        (e.Finish = "finish"),
                        (e.FullsnapshotRebuilded = "fullsnapshot-rebuilded"),
                        (e.LoadStylesheetStart = "load-stylesheet-start"),
                        (e.LoadStylesheetEnd = "load-stylesheet-end"),
                        (e.SkipStart = "skip-start"),
                        (e.SkipEnd = "skip-end"),
                        (e.MouseInteraction = "mouse-interaction"),
                        (e.EventCast = "event-cast"),
                        (e.CustomEvent = "custom-event"),
                        (e.Flush = "flush"),
                        (e.StateChange = "state-change"),
                        (e.PlayBack = "play-back");
                    })($ || ($ = {}));
                  const K =
                    "Please stop import mirror directly. Instead of that," +
                    "\r\n" +
                    "now you can use replayer.getMirror() to access the mirror instance of a replayer," +
                    "\r\n" +
                    "or you can use record.mirror to access the mirror instance during recording.";
                  let V = {
                    map: {},
                    getId: () => (console.error(K), -1),
                    getNode: () => (console.error(K), null),
                    removeNodeFromMap() {
                      console.error(K);
                    },
                    has: () => (console.error(K), !1),
                    reset() {
                      console.error(K);
                    }
                  };
                  function Z(e, t, n = {}) {
                    let r = null,
                      s = 0;
                    return function (i) {
                      let o = Date.now();
                      s || !1 !== n.leading || (s = o);
                      let a = t - (o - s),
                        c = this,
                        u = arguments;
                      a <= 0 || a > t
                        ? (r && (clearTimeout(r), (r = null)), (s = o), e.apply(c, u))
                        : r ||
                          !1 === n.trailing ||
                          (r = setTimeout(() => {
                            (s = !1 === n.leading ? 0 : Date.now()), (r = null), e.apply(c, u);
                          }, a));
                    };
                  }
                  function X(e, t, n, r, s = window) {
                    const i = s.Object.getOwnPropertyDescriptor(e, t);
                    return (
                      s.Object.defineProperty(
                        e,
                        t,
                        r
                          ? n
                          : {
                              set(e) {
                                setTimeout(() => {
                                  n.set.call(this, e);
                                }, 0),
                                  i && i.set && i.set.call(this, e);
                              }
                            }
                      ),
                      () => X(e, t, i || {}, !0)
                    );
                  }
                  function J(e, t, n) {
                    try {
                      if (!(t in e)) return () => {};
                      const r = e[t],
                        s = n(r);
                      return (
                        "function" == typeof s &&
                          ((s.prototype = s.prototype || {}),
                          Object.defineProperties(s, { __rrweb_original__: { enumerable: !1, value: r } })),
                        (e[t] = s),
                        () => {
                          e[t] = r;
                        }
                      );
                    } catch (e) {
                      return () => {};
                    }
                  }
                  function Q() {
                    return (
                      window.innerHeight ||
                      (document.documentElement && document.documentElement.clientHeight) ||
                      (document.body && document.body.clientHeight)
                    );
                  }
                  function ee() {
                    return (
                      window.innerWidth ||
                      (document.documentElement && document.documentElement.clientWidth) ||
                      (document.body && document.body.clientWidth)
                    );
                  }
                  function te(e, t, n, r) {
                    if (!e) return !1;
                    if (e.nodeType === e.ELEMENT_NODE) {
                      let s = !1;
                      const i = r && e.matches(r);
                      return (
                        "string" == typeof t
                          ? (s = e.closest !== undefined ? !i && null !== e.closest("." + t) : !i && e.classList.contains(t))
                          : !i &&
                            e.classList.forEach((e) => {
                              t.test(e) && (s = !0);
                            }),
                        !s && n && (s = e.matches(n)),
                        (!i && s) || te(e.parentNode, t, n, r)
                      );
                    }
                    return e.nodeType, e.TEXT_NODE, te(e.parentNode, t, n, r);
                  }
                  function ne(e) {
                    return "__sn" in e && e.__sn.id === v;
                  }
                  function re(e, t) {
                    if (p(e)) return !1;
                    const n = t.getId(e);
                    return (
                      !t.has(n) || ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || re(e.parentNode, t)))
                    );
                  }
                  function se(e) {
                    return Boolean(e.changedTouches);
                  }
                  function ie(e) {
                    return "__sn" in e && e.__sn.type === d.Element && "iframe" === e.__sn.tagName;
                  }
                  function oe(e) {
                    return Boolean(null == e ? void 0 : e.shadowRoot);
                  }
                  function ae(e) {
                    return "__ln" in e;
                  }
                  "undefined" != typeof window &&
                    window.Proxy &&
                    window.Reflect &&
                    (V = new Proxy(V, { get: (e, t, n) => ("map" === t && console.error(K), Reflect.get(e, t, n)) }));
                  class ce {
                    constructor() {
                      (this.length = 0), (this.head = null);
                    }
                    get(e) {
                      if (e >= this.length) throw new Error("Position outside of list range");
                      let t = this.head;
                      for (let n = 0; n < e; n++) t = (null == t ? void 0 : t.next) || null;
                      return t;
                    }
                    addNode(e) {
                      const t = { value: e, previous: null, next: null };
                      if (((e.__ln = t), e.previousSibling && ae(e.previousSibling))) {
                        const n = e.previousSibling.__ln.next;
                        (t.next = n), (t.previous = e.previousSibling.__ln), (e.previousSibling.__ln.next = t), n && (n.previous = t);
                      } else if (e.nextSibling && ae(e.nextSibling) && e.nextSibling.__ln.previous) {
                        const n = e.nextSibling.__ln.previous;
                        (t.previous = n), (t.next = e.nextSibling.__ln), (e.nextSibling.__ln.previous = t), n && (n.next = t);
                      } else this.head && (this.head.previous = t), (t.next = this.head), (this.head = t);
                      this.length++;
                    }
                    removeNode(e) {
                      const t = e.__ln;
                      this.head &&
                        (t.previous
                          ? ((t.previous.next = t.next), t.next && (t.next.previous = t.previous))
                          : ((this.head = t.next), this.head && (this.head.previous = null)),
                        e.__ln && delete e.__ln,
                        this.length--);
                    }
                  }
                  const ue = (e, t) => `${e}@${t}`;
                  function le(e) {
                    return "__sn" in e;
                  }
                  class de {
                    constructor() {
                      (this.frozen = !1),
                        (this.locked = !1),
                        (this.texts = []),
                        (this.attributes = []),
                        (this.removes = []),
                        (this.mapRemoves = []),
                        (this.movedMap = {}),
                        (this.addedSet = new Set()),
                        (this.movedSet = new Set()),
                        (this.droppedSet = new Set()),
                        (this.processMutations = (e) => {
                          e.forEach(this.processMutation), this.emit();
                        }),
                        (this.emit = () => {
                          if (this.frozen || this.locked) return;
                          const e = [],
                            t = new ce(),
                            n = (e) => {
                              let t = e,
                                n = v;
                              for (; n === v; ) (t = t && t.nextSibling), (n = t && this.mirror.getId(t));
                              return n;
                            },
                            r = (r) => {
                              var s, i, o, a, c;
                              const u = r.getRootNode ? (null === (s = r.getRootNode()) || void 0 === s ? void 0 : s.host) : null;
                              let l = u;
                              for (
                                ;
                                null === (o = null === (i = null == l ? void 0 : l.getRootNode) || void 0 === i ? void 0 : i.call(l)) ||
                                void 0 === o
                                  ? void 0
                                  : o.host;

                              )
                                l =
                                  (null === (c = null === (a = null == l ? void 0 : l.getRootNode) || void 0 === a ? void 0 : a.call(l)) ||
                                  void 0 === c
                                    ? void 0
                                    : c.host) || null;
                              const d = !(this.doc.contains(r) || (l && this.doc.contains(l)));
                              if (!r.parentNode || d) return;
                              const f = p(r.parentNode) ? this.mirror.getId(u) : this.mirror.getId(r.parentNode),
                                _ = n(r);
                              if (-1 === f || -1 === _) return t.addNode(r);
                              let h = L(r, {
                                doc: this.doc,
                                map: this.mirror.map,
                                blockClass: this.blockClass,
                                blockSelector: this.blockSelector,
                                unblockSelector: this.unblockSelector,
                                maskTextClass: this.maskTextClass,
                                maskTextSelector: this.maskTextSelector,
                                unmaskTextSelector: this.unmaskTextSelector,
                                maskInputSelector: this.maskInputSelector,
                                unmaskInputSelector: this.unmaskInputSelector,
                                skipChild: !0,
                                inlineStylesheet: this.inlineStylesheet,
                                maskAllText: this.maskAllText,
                                maskInputOptions: this.maskInputOptions,
                                maskTextFn: this.maskTextFn,
                                maskInputFn: this.maskInputFn,
                                slimDOMOptions: this.slimDOMOptions,
                                recordCanvas: this.recordCanvas,
                                inlineImages: this.inlineImages,
                                onSerialize: (e) => {
                                  ie(e) && this.iframeManager.addIframe(e),
                                    oe(r) && this.shadowDomManager.addShadowRoot(r.shadowRoot, document);
                                },
                                onIframeLoad: (e, t) => {
                                  this.iframeManager.attachIframe(e, t), this.shadowDomManager.observeAttachShadow(e);
                                }
                              });
                              h && e.push({ parentId: f, nextId: _, node: h });
                            };
                          for (; this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                          for (const e of this.movedSet) (fe(this.removes, e, this.mirror) && !this.movedSet.has(e.parentNode)) || r(e);
                          for (const e of this.addedSet)
                            _e(this.droppedSet, e) || fe(this.removes, e, this.mirror)
                              ? _e(this.movedSet, e)
                                ? r(e)
                                : this.droppedSet.add(e)
                              : r(e);
                          let s = null;
                          for (; t.length; ) {
                            let e = null;
                            if (s) {
                              const t = this.mirror.getId(s.value.parentNode),
                                r = n(s.value);
                              -1 !== t && -1 !== r && (e = s);
                            }
                            if (!e)
                              for (let r = t.length - 1; r >= 0; r--) {
                                const s = t.get(r);
                                if (s) {
                                  const t = this.mirror.getId(s.value.parentNode),
                                    r = n(s.value);
                                  if (-1 !== t && -1 !== r) {
                                    e = s;
                                    break;
                                  }
                                }
                              }
                            if (!e) {
                              for (; t.head; ) t.removeNode(t.head.value);
                              break;
                            }
                            (s = e.previous), t.removeNode(e.value), r(e.value);
                          }
                          const i = {
                            texts: this.texts
                              .map((e) => ({ id: this.mirror.getId(e.node), value: e.value }))
                              .filter((e) => this.mirror.has(e.id)),
                            attributes: this.attributes
                              .map((e) => ({ id: this.mirror.getId(e.node), attributes: e.attributes }))
                              .filter((e) => this.mirror.has(e.id)),
                            removes: this.removes,
                            adds: e
                          };
                          (i.texts.length || i.attributes.length || i.removes.length || i.adds.length) &&
                            ((this.texts = []),
                            (this.attributes = []),
                            (this.removes = []),
                            (this.addedSet = new Set()),
                            (this.movedSet = new Set()),
                            (this.droppedSet = new Set()),
                            (this.movedMap = {}),
                            this.mutationCb(i));
                        }),
                        (this.processMutation = (e) => {
                          if (!ne(e.target))
                            switch (e.type) {
                              case "characterData": {
                                const t = e.target.textContent;
                                te(e.target, this.blockClass, this.blockSelector, this.unblockSelector) ||
                                  t === e.oldValue ||
                                  this.texts.push({
                                    value:
                                      B(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextSelector, this.maskAllText) && t
                                        ? this.maskTextFn
                                          ? this.maskTextFn(t)
                                          : t.replace(/[\S]/g, "*")
                                        : t,
                                    node: e.target
                                  });
                                break;
                              }
                              case "attributes": {
                                const t = e.target;
                                let n = t.getAttribute(e.attributeName);
                                if (
                                  ("value" === e.attributeName &&
                                    (n = _({
                                      input: t,
                                      maskInputSelector: this.maskInputSelector,
                                      unmaskInputSelector: this.unmaskInputSelector,
                                      maskInputOptions: this.maskInputOptions,
                                      tagName: t.tagName,
                                      type: t.getAttribute("type"),
                                      value: n,
                                      maskInputFn: this.maskInputFn
                                    })),
                                  te(e.target, this.blockClass, this.blockSelector, this.unblockSelector) || n === e.oldValue)
                                )
                                  return;
                                let r = this.attributes.find((t) => t.node === e.target);
                                if (
                                  (r || ((r = { node: e.target, attributes: {} }), this.attributes.push(r)),
                                  "type" === e.attributeName &&
                                    "INPUT" === t.tagName &&
                                    "password" === (e.oldValue || "").toLowerCase() &&
                                    t.setAttribute("data-rr-is-password", "true"),
                                  "style" === e.attributeName)
                                ) {
                                  const n = this.doc.createElement("span");
                                  e.oldValue && n.setAttribute("style", e.oldValue),
                                    (r.attributes.style !== undefined && null !== r.attributes.style) || (r.attributes.style = {});
                                  try {
                                    const e = r.attributes.style;
                                    for (const r of Array.from(t.style)) {
                                      const s = t.style.getPropertyValue(r),
                                        i = t.style.getPropertyPriority(r);
                                      (s === n.style.getPropertyValue(r) && i === n.style.getPropertyPriority(r)) ||
                                        (e[r] = "" === i ? s : [s, i]);
                                    }
                                    for (const r of Array.from(n.style)) "" === t.style.getPropertyValue(r) && (e[r] = !1);
                                  } catch (e) {
                                    console.warn("[rrweb] Error when parsing update to style attribute:", e);
                                  }
                                } else {
                                  const t = e.target;
                                  r.attributes[e.attributeName] = M(
                                    this.doc,
                                    t,
                                    t.tagName,
                                    e.attributeName,
                                    n,
                                    this.maskAllText,
                                    this.unmaskTextSelector,
                                    this.maskTextFn
                                  );
                                }
                                break;
                              }
                              case "childList":
                                e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                                  e.removedNodes.forEach((t) => {
                                    const n = this.mirror.getId(t),
                                      r = p(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                    te(e.target, this.blockClass, this.blockSelector, this.unblockSelector) ||
                                      ne(t) ||
                                      (this.addedSet.has(t)
                                        ? (pe(this.addedSet, t), this.droppedSet.add(t))
                                        : (this.addedSet.has(e.target) && -1 === n) ||
                                          re(e.target, this.mirror) ||
                                          (this.movedSet.has(t) && this.movedMap[ue(n, r)]
                                            ? pe(this.movedSet, t)
                                            : this.removes.push({ parentId: r, id: n, isShadow: !!p(e.target) || undefined })),
                                      this.mapRemoves.push(t));
                                  });
                            }
                        }),
                        (this.genAdds = (e, t) => {
                          if (!t || !te(t, this.blockClass, this.blockSelector, this.unblockSelector)) {
                            if (le(e)) {
                              if (ne(e)) return;
                              this.movedSet.add(e);
                              let n = null;
                              t && le(t) && (n = t.__sn.id), n && (this.movedMap[ue(e.__sn.id, n)] = !0);
                            } else this.addedSet.add(e), this.droppedSet.delete(e);
                            te(e, this.blockClass, this.blockSelector, this.unblockSelector) ||
                              e.childNodes.forEach((e) => this.genAdds(e));
                          }
                        });
                    }
                    init(e) {
                      [
                        "mutationCb",
                        "blockClass",
                        "blockSelector",
                        "unblockSelector",
                        "maskTextClass",
                        "maskTextSelector",
                        "unmaskTextSelector",
                        "maskInputSelector",
                        "unmaskInputSelector",
                        "inlineStylesheet",
                        "maskAllText",
                        "maskInputOptions",
                        "maskTextFn",
                        "maskInputFn",
                        "recordCanvas",
                        "inlineImages",
                        "slimDOMOptions",
                        "doc",
                        "mirror",
                        "iframeManager",
                        "shadowDomManager",
                        "canvasManager"
                      ].forEach((t) => {
                        this[t] = e[t];
                      });
                    }
                    freeze() {
                      (this.frozen = !0), this.canvasManager.freeze();
                    }
                    unfreeze() {
                      (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
                    }
                    isFrozen() {
                      return this.frozen;
                    }
                    lock() {
                      (this.locked = !0), this.canvasManager.lock();
                    }
                    unlock() {
                      (this.locked = !1), this.canvasManager.unlock(), this.emit();
                    }
                    reset() {
                      this.shadowDomManager.reset(), this.canvasManager.reset();
                    }
                  }
                  function pe(e, t) {
                    e.delete(t), t.childNodes.forEach((t) => pe(e, t));
                  }
                  function fe(e, t, n) {
                    const { parentNode: r } = t;
                    if (!r) return !1;
                    const s = n.getId(r);
                    return !!e.some((e) => e.id === s) || fe(e, r, n);
                  }
                  function _e(e, t) {
                    const { parentNode: n } = t;
                    return !!n && (!!e.has(n) || _e(e, n));
                  }
                  const he =
                      (e) =>
                      (...t) => {
                        try {
                          return e(...t);
                        } catch (e) {
                          try {
                            e.__rrweb__ = !0;
                          } catch (e) {}
                          throw e;
                        }
                      },
                    me = [];
                  function ge(e) {
                    try {
                      if ("composedPath" in e) {
                        const t = e.composedPath();
                        if (t.length) return t[0];
                      } else if ("path" in e && e.path.length) return e.path[0];
                    } catch (e) {}
                    return e && e.target;
                  }
                  function ye(e, t) {
                    var n, r;
                    const s = new de();
                    me.push(s), s.init(e);
                    let i = window.MutationObserver || window.__rrMutationObserver;
                    const o =
                      null ===
                        (r =
                          null === (n = null === window || void 0 === window ? void 0 : window.Zone) || void 0 === n
                            ? void 0
                            : n.__symbol__) || void 0 === r
                        ? void 0
                        : r.call(n, "MutationObserver");
                    o && window[o] && (i = window[o]);
                    const a = new i(
                      he((t) => {
                        (e.onMutation && !1 === e.onMutation(t)) || s.processMutations(t);
                      })
                    );
                    return (
                      a.observe(t, {
                        attributes: !0,
                        attributeOldValue: !0,
                        characterData: !0,
                        characterDataOldValue: !0,
                        childList: !0,
                        subtree: !0
                      }),
                      a
                    );
                  }
                  function be({
                    mouseInteractionCb: e,
                    doc: t,
                    mirror: n,
                    blockClass: r,
                    blockSelector: s,
                    unblockSelector: i,
                    sampling: o
                  }) {
                    if (!1 === o.mouseInteraction) return () => {};
                    const a = !0 === o.mouseInteraction || o.mouseInteraction === undefined ? {} : o.mouseInteraction,
                      c = [];
                    return (
                      Object.keys(H)
                        .filter((e) => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e])
                        .forEach((o) => {
                          const a = o.toLowerCase(),
                            u = he(
                              ((t) => (o) => {
                                const a = ge(o);
                                if (te(a, r, s, i)) return;
                                const c = se(o) ? o.changedTouches[0] : o;
                                if (!c) return;
                                const u = n.getId(a),
                                  { clientX: l, clientY: d } = c;
                                he(e)({ type: H[t], id: u, x: l, y: d });
                              })(o)
                            );
                          c.push(q(a, u, t));
                        }),
                      he(() => {
                        c.forEach((e) => e());
                      })
                    );
                  }
                  function ve({ scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: i, sampling: o }) {
                    const a = Z((o) => {
                      const a = ge(o);
                      if (!a || te(a, r, s, i)) return;
                      const c = n.getId(a);
                      if (a === t) {
                        const n = t.scrollingElement || t.documentElement;
                        he(e)({ id: c, x: n.scrollLeft, y: n.scrollTop });
                      } else he(e)({ id: c, x: a.scrollLeft, y: a.scrollTop });
                    }, o.scroll || 100);
                    return q("scroll", he(a), t);
                  }
                  function Ee(e, t) {
                    const n = Object.assign({}, e);
                    return t || delete n.userTriggered, n;
                  }
                  const Se = ["INPUT", "TEXTAREA", "SELECT"],
                    we = new WeakMap();
                  function Te({
                    inputCb: e,
                    doc: t,
                    mirror: n,
                    blockClass: r,
                    blockSelector: s,
                    unblockSelector: i,
                    ignoreClass: o,
                    ignoreSelector: a,
                    maskInputSelector: c,
                    unmaskInputSelector: u,
                    maskInputOptions: l,
                    maskInputFn: d,
                    sampling: p,
                    userTriggeredOnInput: h
                  }) {
                    function y(e) {
                      let n = ge(e);
                      const p = n && n.tagName,
                        y = e.isTrusted;
                      if (("OPTION" === p && (n = n.parentElement), !n || !p || Se.indexOf(p) < 0 || te(n, r, s, i))) return;
                      const v = n,
                        E = m(v);
                      if (v.classList.contains(o) || (a && v.matches(a))) return;
                      let S = g(v, p, E),
                        w = !1;
                      ("radio" !== E && "checkbox" !== E) || (w = n.checked),
                        (function ({ tagName: e, type: t, maskInputOptions: n, maskInputSelector: r }) {
                          return r || f({ maskInputOptions: n, tagName: e, type: t });
                        })({ maskInputOptions: l, maskInputSelector: c, tagName: p, type: E }) &&
                          (S = _({
                            input: v,
                            maskInputOptions: l,
                            maskInputSelector: c,
                            unmaskInputSelector: u,
                            tagName: p,
                            type: E,
                            value: S,
                            maskInputFn: d
                          })),
                        b(n, he(Ee)({ text: S, isChecked: w, userTriggered: y }, h));
                      const T = n.name;
                      "radio" === E &&
                        T &&
                        w &&
                        t.querySelectorAll(`input[type="radio"][name="${T}"]`).forEach((e) => {
                          if (e !== n) {
                            const t = _({
                              input: e,
                              maskInputOptions: l,
                              maskInputSelector: c,
                              unmaskInputSelector: u,
                              tagName: p,
                              type: E,
                              value: g(e, p, E),
                              maskInputFn: d
                            });
                            b(e, he(Ee)({ text: t, isChecked: !w, userTriggered: !1 }, h));
                          }
                        });
                    }
                    function b(t, r) {
                      const s = we.get(t);
                      if (!s || s.text !== r.text || s.isChecked !== r.isChecked) {
                        we.set(t, r);
                        const s = n.getId(t);
                        e(Object.assign(Object.assign({}, r), { id: s }));
                      }
                    }
                    const v = ("last" === p.input ? ["change"] : ["input", "change"]).map((e) => q(e, he(y), t)),
                      E = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
                      S = [
                        [HTMLInputElement.prototype, "value"],
                        [HTMLInputElement.prototype, "checked"],
                        [HTMLSelectElement.prototype, "value"],
                        [HTMLTextAreaElement.prototype, "value"],
                        [HTMLSelectElement.prototype, "selectedIndex"],
                        [HTMLOptionElement.prototype, "selected"]
                      ];
                    return (
                      E &&
                        E.set &&
                        v.push(
                          ...S.map((e) =>
                            X(e[0], e[1], {
                              set() {
                                he(y)({ target: this });
                              }
                            })
                          )
                        ),
                      he(() => {
                        v.forEach((e) => e());
                      })
                    );
                  }
                  function ke(e) {
                    return (function (e, t) {
                      if (
                        (xe("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule) ||
                        (xe("CSSMediaRule") && e.parentRule instanceof CSSMediaRule) ||
                        (xe("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule) ||
                        (xe("CSSConditionRule") && e.parentRule instanceof CSSConditionRule)
                      ) {
                        const n = Array.from(e.parentRule.cssRules).indexOf(e);
                        t.unshift(n);
                      } else {
                        const n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
                        t.unshift(n);
                      }
                      return t;
                    })(e, []);
                  }
                  function Re(e, t = {}) {
                    const n = e.doc.defaultView;
                    if (!n) return () => {};
                    !(function (e, t) {
                      const {
                        mutationCb: n,
                        mousemoveCb: r,
                        mouseInteractionCb: s,
                        scrollCb: i,
                        viewportResizeCb: o,
                        inputCb: a,
                        mediaInteractionCb: c,
                        styleSheetRuleCb: u,
                        styleDeclarationCb: l,
                        canvasMutationCb: d,
                        fontCb: p
                      } = e;
                      (e.mutationCb = (...e) => {
                        t.mutation && t.mutation(...e), n(...e);
                      }),
                        (e.mousemoveCb = (...e) => {
                          t.mousemove && t.mousemove(...e), r(...e);
                        }),
                        (e.mouseInteractionCb = (...e) => {
                          t.mouseInteraction && t.mouseInteraction(...e), s(...e);
                        }),
                        (e.scrollCb = (...e) => {
                          t.scroll && t.scroll(...e), i(...e);
                        }),
                        (e.viewportResizeCb = (...e) => {
                          t.viewportResize && t.viewportResize(...e), o(...e);
                        }),
                        (e.inputCb = (...e) => {
                          t.input && t.input(...e), a(...e);
                        }),
                        (e.mediaInteractionCb = (...e) => {
                          t.mediaInteaction && t.mediaInteaction(...e), c(...e);
                        }),
                        (e.styleSheetRuleCb = (...e) => {
                          t.styleSheetRule && t.styleSheetRule(...e), u(...e);
                        }),
                        (e.styleDeclarationCb = (...e) => {
                          t.styleDeclaration && t.styleDeclaration(...e), l(...e);
                        }),
                        (e.canvasMutationCb = (...e) => {
                          t.canvasMutation && t.canvasMutation(...e), d(...e);
                        }),
                        (e.fontCb = (...e) => {
                          t.font && t.font(...e), p(...e);
                        });
                    })(e, t);
                    const r = ye(e, e.doc),
                      s = (function ({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
                        if (!1 === t.mousemove) return () => {};
                        const s = "number" == typeof t.mousemove ? t.mousemove : 50,
                          i = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500;
                        let o,
                          a = [];
                        const c = Z((t) => {
                            const n = Date.now() - o;
                            he(e)(
                              a.map((e) => ((e.timeOffset -= n), e)),
                              t
                            ),
                              (a = []),
                              (o = null);
                          }, i),
                          u = Z(
                            (e) => {
                              const t = ge(e),
                                { clientX: n, clientY: s } = se(e) ? e.changedTouches[0] : e;
                              o || (o = Date.now()),
                                a.push({ x: n, y: s, id: r.getId(t), timeOffset: Date.now() - o }),
                                c(
                                  "undefined" != typeof DragEvent && e instanceof DragEvent
                                    ? Y.Drag
                                    : e instanceof MouseEvent
                                    ? Y.MouseMove
                                    : Y.TouchMove
                                );
                            },
                            s,
                            { trailing: !1 }
                          ),
                          l = [q("mousemove", he(u), n), q("touchmove", he(u), n), q("drag", he(u), n)];
                        return he(() => {
                          l.forEach((e) => e());
                        });
                      })(e),
                      i = be(e),
                      o = ve(e),
                      a = (function ({ viewportResizeCb: e }) {
                        let t = -1,
                          n = -1;
                        const r = Z(() => {
                          const r = Q(),
                            s = ee();
                          (t === r && n === s) || (he(e)({ width: Number(s), height: Number(r) }), (t = r), (n = s));
                        }, 200);
                        return q("resize", he(r), window);
                      })(e),
                      c = Te(e),
                      u = (function ({
                        mediaInteractionCb: e,
                        blockClass: t,
                        blockSelector: n,
                        unblockSelector: r,
                        mirror: s,
                        sampling: i
                      }) {
                        const o = (o) =>
                            Z(
                              he((i) => {
                                const a = ge(i);
                                if (!a || te(a, t, n, r)) return;
                                const { currentTime: c, volume: u, muted: l } = a;
                                e({ type: o, id: s.getId(a), currentTime: c, volume: u, muted: l });
                              }),
                              i.media || 500
                            ),
                          a = [q("play", o(0)), q("pause", o(1)), q("seeked", o(2)), q("volumechange", o(3))];
                        return he(() => {
                          a.forEach((e) => e());
                        });
                      })(e),
                      l = (function ({ styleSheetRuleCb: e, mirror: t }, { win: n }) {
                        if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
                        const r = n.CSSStyleSheet.prototype.insertRule;
                        n.CSSStyleSheet.prototype.insertRule = new Proxy(r, {
                          apply: he((n, r, s) => {
                            const [i, o] = s,
                              a = t.getId(r.ownerNode);
                            return -1 !== a && e({ id: a, adds: [{ rule: i, index: o }] }), n.apply(r, s);
                          })
                        });
                        const s = n.CSSStyleSheet.prototype.deleteRule;
                        n.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
                          apply: he((n, r, s) => {
                            const [i] = s,
                              o = t.getId(r.ownerNode);
                            return -1 !== o && e({ id: o, removes: [{ index: i }] }), n.apply(r, s);
                          })
                        });
                        const i = {};
                        Ne("CSSGroupingRule")
                          ? (i.CSSGroupingRule = n.CSSGroupingRule)
                          : (Ne("CSSMediaRule") && (i.CSSMediaRule = n.CSSMediaRule),
                            Ne("CSSConditionRule") && (i.CSSConditionRule = n.CSSConditionRule),
                            Ne("CSSSupportsRule") && (i.CSSSupportsRule = n.CSSSupportsRule));
                        const o = {};
                        return (
                          Object.entries(i).forEach(([n, r]) => {
                            (o[n] = { insertRule: r.prototype.insertRule, deleteRule: r.prototype.deleteRule }),
                              (r.prototype.insertRule = new Proxy(o[n].insertRule, {
                                apply: he((n, r, s) => {
                                  const [i, o] = s,
                                    a = t.getId(r.parentStyleSheet.ownerNode);
                                  return -1 !== a && e({ id: a, adds: [{ rule: i, index: [...ke(r), o || 0] }] }), n.apply(r, s);
                                })
                              })),
                              (r.prototype.deleteRule = new Proxy(o[n].deleteRule, {
                                apply: he((n, r, s) => {
                                  const [i] = s,
                                    o = t.getId(r.parentStyleSheet.ownerNode);
                                  return -1 !== o && e({ id: o, removes: [{ index: [...ke(r), i] }] }), n.apply(r, s);
                                })
                              }));
                          }),
                          he(() => {
                            (n.CSSStyleSheet.prototype.insertRule = r),
                              (n.CSSStyleSheet.prototype.deleteRule = s),
                              Object.entries(i).forEach(([e, t]) => {
                                (t.prototype.insertRule = o[e].insertRule), (t.prototype.deleteRule = o[e].deleteRule);
                              });
                          })
                        );
                      })(e, { win: n }),
                      d = (function ({ styleDeclarationCb: e, mirror: t }, { win: n }) {
                        const r = n.CSSStyleDeclaration.prototype.setProperty;
                        n.CSSStyleDeclaration.prototype.setProperty = new Proxy(r, {
                          apply: he((n, r, s) => {
                            var i, o;
                            const [a, c, u] = s,
                              l = t.getId(
                                null === (o = null === (i = r.parentRule) || void 0 === i ? void 0 : i.parentStyleSheet) || void 0 === o
                                  ? void 0
                                  : o.ownerNode
                              );
                            return (
                              -1 !== l && e({ id: l, set: { property: a, value: c, priority: u }, index: ke(r.parentRule) }), n.apply(r, s)
                            );
                          })
                        });
                        const s = n.CSSStyleDeclaration.prototype.removeProperty;
                        return (
                          (n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
                            apply: he((n, r, s) => {
                              var i, o;
                              const [a] = s,
                                c = t.getId(
                                  null === (o = null === (i = r.parentRule) || void 0 === i ? void 0 : i.parentStyleSheet) || void 0 === o
                                    ? void 0
                                    : o.ownerNode
                                );
                              return -1 !== c && e({ id: c, remove: { property: a }, index: ke(r.parentRule) }), n.apply(r, s);
                            })
                          })),
                          he(() => {
                            (n.CSSStyleDeclaration.prototype.setProperty = r), (n.CSSStyleDeclaration.prototype.removeProperty = s);
                          })
                        );
                      })(e, { win: n }),
                      p = e.collectFonts
                        ? (function ({ fontCb: e, doc: t }) {
                            const n = t.defaultView;
                            if (!n) return () => {};
                            const r = [],
                              s = new WeakMap(),
                              i = n.FontFace;
                            n.FontFace = function (e, t, n) {
                              const r = new i(e, t, n);
                              return (
                                s.set(r, {
                                  family: e,
                                  buffer: "string" != typeof t,
                                  descriptors: n,
                                  fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                                }),
                                r
                              );
                            };
                            const o = J(t.fonts, "add", function (t) {
                              return function (n) {
                                return (
                                  setTimeout(() => {
                                    const t = s.get(n);
                                    t && (e(t), s.delete(n));
                                  }, 0),
                                  t.apply(this, [n])
                                );
                              };
                            });
                            return (
                              r.push(() => {
                                n.FontFace = i;
                              }),
                              r.push(o),
                              he(() => {
                                r.forEach((e) => e());
                              })
                            );
                          })(e)
                        : () => {},
                      f = [];
                    for (const t of e.plugins) f.push(t.observer(t.callback, n, t.options));
                    return he(() => {
                      me.forEach((e) => e.reset()), r.disconnect(), s(), i(), o(), a(), c(), u();
                      try {
                        l(), d();
                      } catch (e) {}
                      p(), f.forEach((e) => e());
                    });
                  }
                  function xe(e) {
                    return void 0 !== window[e];
                  }
                  function Ne(e) {
                    return Boolean(
                      void 0 !== window[e] &&
                        window[e].prototype &&
                        "insertRule" in window[e].prototype &&
                        "deleteRule" in window[e].prototype
                    );
                  }
                  class De {
                    constructor(e) {
                      (this.iframes = new WeakMap()), (this.mutationCb = e.mutationCb);
                    }
                    addIframe(e) {
                      this.iframes.set(e, !0);
                    }
                    addLoadListener(e) {
                      this.loadListener = e;
                    }
                    attachIframe(e, t) {
                      var n;
                      this.mutationCb({
                        adds: [{ parentId: e.__sn.id, nextId: null, node: t }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                      }),
                        null === (n = this.loadListener) || void 0 === n || n.call(this, e);
                    }
                  }
                  class Ie {
                    constructor(e) {
                      (this.restorePatches = []),
                        (this.mutationCb = e.mutationCb),
                        (this.scrollCb = e.scrollCb),
                        (this.bypassOptions = e.bypassOptions),
                        (this.mirror = e.mirror);
                      const t = this;
                      this.restorePatches.push(
                        J(HTMLElement.prototype, "attachShadow", function (e) {
                          return function () {
                            const n = e.apply(this, arguments);
                            return this.shadowRoot && t.addShadowRoot(this.shadowRoot, this.ownerDocument), n;
                          };
                        })
                      );
                    }
                    addShadowRoot(e, t) {
                      ye(
                        Object.assign(Object.assign({}, this.bypassOptions), {
                          doc: t,
                          mutationCb: this.mutationCb,
                          mirror: this.mirror,
                          shadowDomManager: this
                        }),
                        e
                      ),
                        ve(Object.assign(Object.assign({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: e, mirror: this.mirror }));
                    }
                    observeAttachShadow(e) {
                      if (e.contentWindow) {
                        const t = this;
                        this.restorePatches.push(
                          J(e.contentWindow.HTMLElement.prototype, "attachShadow", function (n) {
                            return function () {
                              const r = n.apply(this, arguments);
                              return this.shadowRoot && t.addShadowRoot(this.shadowRoot, e.contentDocument), r;
                            };
                          })
                        );
                      }
                    }
                    reset() {
                      this.restorePatches.forEach((e) => e());
                    }
                  }
                  for (
                    var Oe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                      Ce = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
                      je = 0;
                    je < 64;
                    je++
                  )
                    Ce[Oe.charCodeAt(je)] = je;
                  const Ae = new Map();
                  const Me = (e, t, n) => {
                    if (!e || (!Ue(e, t) && "object" != typeof e)) return;
                    const r = (function (e, t) {
                      let n = Ae.get(e);
                      return n || ((n = new Map()), Ae.set(e, n)), n.has(t) || n.set(t, []), n.get(t);
                    })(n, e.constructor.name);
                    let s = r.indexOf(e);
                    return -1 === s && ((s = r.length), r.push(e)), s;
                  };
                  function Be(e, t, n) {
                    if (e instanceof Array) return e.map((e) => Be(e, t, n));
                    if (null === e) return e;
                    if (
                      e instanceof Float32Array ||
                      e instanceof Float64Array ||
                      e instanceof Int32Array ||
                      e instanceof Uint32Array ||
                      e instanceof Uint8Array ||
                      e instanceof Uint16Array ||
                      e instanceof Int16Array ||
                      e instanceof Int8Array ||
                      e instanceof Uint8ClampedArray
                    ) {
                      return { rr_type: e.constructor.name, args: [Object.values(e)] };
                    }
                    if (e instanceof ArrayBuffer) {
                      const t = e.constructor.name,
                        n = (function (e) {
                          var t,
                            n = new Uint8Array(e),
                            r = n.length,
                            s = "";
                          for (t = 0; t < r; t += 3)
                            (s += Oe[n[t] >> 2]),
                              (s += Oe[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
                              (s += Oe[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
                              (s += Oe[63 & n[t + 2]]);
                          return (
                            r % 3 == 2 ? (s = s.substring(0, s.length - 1) + "=") : r % 3 == 1 && (s = s.substring(0, s.length - 2) + "=="),
                            s
                          );
                        })(e);
                      return { rr_type: t, base64: n };
                    }
                    if (e instanceof DataView) {
                      return { rr_type: e.constructor.name, args: [Be(e.buffer, t, n), e.byteOffset, e.byteLength] };
                    }
                    if (e instanceof HTMLImageElement) {
                      const t = e.constructor.name,
                        { src: n } = e;
                      return { rr_type: t, src: n };
                    }
                    if (e instanceof ImageData) {
                      return { rr_type: e.constructor.name, args: [Be(e.data, t, n), e.width, e.height] };
                    }
                    if (Ue(e, t) || "object" == typeof e) {
                      return { rr_type: e.constructor.name, index: Me(e, t, n) };
                    }
                    return e;
                  }
                  const Pe = (e, t, n) => [...e].map((e) => Be(e, t, n)),
                    Ue = (e, t) => {
                      const n = [
                        "WebGLActiveInfo",
                        "WebGLBuffer",
                        "WebGLFramebuffer",
                        "WebGLProgram",
                        "WebGLRenderbuffer",
                        "WebGLShader",
                        "WebGLShaderPrecisionFormat",
                        "WebGLTexture",
                        "WebGLUniformLocation",
                        "WebGLVertexArrayObject",
                        "WebGLVertexArrayObjectOES"
                      ].filter((e) => "function" == typeof t[e]);
                      return Boolean(n.find((n) => e instanceof t[n]));
                    };
                  function Le(e, t, n, r, s, i, o, a) {
                    const c = [],
                      u = Object.getOwnPropertyNames(e);
                    for (const l of u)
                      try {
                        if ("function" != typeof e[l]) continue;
                        const u = J(e, l, function (c) {
                          return function (...u) {
                            const d = c.apply(this, u);
                            if ((Me(d, a, e), !te(this.canvas, r, i, s))) {
                              o.getId(this.canvas);
                              const r = Pe([...u], a, e),
                                s = { type: t, property: l, args: r };
                              n(this.canvas, s);
                            }
                            return d;
                          };
                        });
                        c.push(u);
                      } catch (r) {
                        const s = X(e, l, {
                          set(e) {
                            n(this.canvas, { type: t, property: l, args: [e], setter: !0 });
                          }
                        });
                        c.push(s);
                      }
                    return c;
                  }
                  class Ge {
                    reset() {
                      this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
                    }
                    freeze() {
                      this.frozen = !0;
                    }
                    unfreeze() {
                      this.frozen = !1;
                    }
                    lock() {
                      this.locked = !0;
                    }
                    unlock() {
                      this.locked = !1;
                    }
                    constructor(e) {
                      (this.pendingCanvasMutations = new Map()),
                        (this.rafStamps = { latestId: 0, invokeId: null }),
                        (this.frozen = !1),
                        (this.locked = !1),
                        (this.processMutation = function (e, t) {
                          (!(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId) ||
                            (this.rafStamps.invokeId = this.rafStamps.latestId),
                            this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []),
                            this.pendingCanvasMutations.get(e).push(t);
                        }),
                        (this.mutationCb = e.mutationCb),
                        (this.mirror = e.mirror),
                        !0 === e.recordCanvas && this.initCanvasMutationObserver(e.win, e.blockClass, e.blockSelector, e.unblockSelector);
                    }
                    initCanvasMutationObserver(e, t, n, r) {
                      this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                      const s = (function (e, t, n, r) {
                          const s = [];
                          try {
                            const i = J(e.HTMLCanvasElement.prototype, "getContext", function (e) {
                              return function (s, ...i) {
                                return te(this, t, n, r) || "__context" in this || (this.__context = s), e.apply(this, [s, ...i]);
                              };
                            });
                            s.push(i);
                          } catch (e) {
                            console.error("failed to patch HTMLCanvasElement.prototype.getContext");
                          }
                          return () => {
                            s.forEach((e) => e());
                          };
                        })(e, t, r, n),
                        i = (function (e, t, n, r, s, i) {
                          const o = [],
                            a = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
                          for (const i of a)
                            try {
                              if ("function" != typeof t.CanvasRenderingContext2D.prototype[i]) continue;
                              const a = J(t.CanvasRenderingContext2D.prototype, i, function (t) {
                                return function (...o) {
                                  return (
                                    te(this.canvas, n, s, r) ||
                                      setTimeout(() => {
                                        const t = [...o];
                                        if ("drawImage" === i && t[0] && t[0] instanceof HTMLCanvasElement) {
                                          const e = t[0],
                                            n = e.getContext("2d");
                                          let r = null == n ? void 0 : n.getImageData(0, 0, e.width, e.height),
                                            s = null == r ? void 0 : r.data;
                                          t[0] = JSON.stringify(s);
                                        }
                                        e(this.canvas, { type: z["2D"], property: i, args: t });
                                      }, 0),
                                    t.apply(this, o)
                                  );
                                };
                              });
                              o.push(a);
                            } catch (n) {
                              const r = X(t.CanvasRenderingContext2D.prototype, i, {
                                set(t) {
                                  e(this.canvas, { type: z["2D"], property: i, args: [t], setter: !0 });
                                }
                              });
                              o.push(r);
                            }
                          return () => {
                            o.forEach((e) => e());
                          };
                        })(this.processMutation.bind(this), e, t, r, n, this.mirror),
                        o = (function (e, t, n, r, s, i) {
                          const o = [];
                          return (
                            o.push(...Le(t.WebGLRenderingContext.prototype, z.WebGL, e, n, r, s, i, t)),
                            void 0 !== t.WebGL2RenderingContext &&
                              o.push(...Le(t.WebGL2RenderingContext.prototype, z.WebGL2, e, n, r, s, i, t)),
                            () => {
                              o.forEach((e) => e());
                            }
                          );
                        })(this.processMutation.bind(this), e, t, r, n, this.mirror);
                      this.resetObservers = () => {
                        s(), i(), o();
                      };
                    }
                    startPendingCanvasMutationFlusher() {
                      requestAnimationFrame(() => this.flushPendingCanvasMutations());
                    }
                    startRAFTimestamping() {
                      const e = (t) => {
                        (this.rafStamps.latestId = t), requestAnimationFrame(e);
                      };
                      requestAnimationFrame(e);
                    }
                    flushPendingCanvasMutations() {
                      this.pendingCanvasMutations.forEach((e, t) => {
                        const n = this.mirror.getId(t);
                        this.flushPendingCanvasMutationFor(t, n);
                      }),
                        requestAnimationFrame(() => this.flushPendingCanvasMutations());
                    }
                    flushPendingCanvasMutationFor(e, t) {
                      if (this.frozen || this.locked) return;
                      const n = this.pendingCanvasMutations.get(e);
                      if (!n || -1 === t) return;
                      const r = n.map((e) => {
                          const t = (function (e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                              var s = 0;
                              for (r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                                t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
                            }
                            return n;
                          })(e, ["type"]);
                          return t;
                        }),
                        { type: s } = n[0];
                      this.mutationCb({ id: t, type: s, commands: r }), this.pendingCanvasMutations.delete(e);
                    }
                  }
                  function Fe(e) {
                    return Object.assign(Object.assign({}, e), { timestamp: Date.now() });
                  }
                  let Ye, He;
                  const ze = {
                    map: {},
                    getId: (e) => (e && e.__sn ? e.__sn.id : -1),
                    getNode(e) {
                      return this.map[e] || null;
                    },
                    removeNodeFromMap(e) {
                      const t = e.__sn && e.__sn.id;
                      delete this.map[t], e.childNodes && e.childNodes.forEach((e) => this.removeNodeFromMap(e));
                    },
                    has(e) {
                      return this.map.hasOwnProperty(e);
                    },
                    reset() {
                      this.map = {};
                    }
                  };
                  function We(e = {}) {
                    const {
                      emit: t,
                      checkoutEveryNms: n,
                      checkoutEveryNth: r,
                      blockClass: s = "rr-block",
                      blockSelector: i = null,
                      unblockSelector: o = null,
                      ignoreClass: a = "rr-ignore",
                      ignoreSelector: c = null,
                      maskTextClass: u = "rr-mask",
                      maskTextSelector: l = null,
                      maskInputSelector: d = null,
                      unmaskTextSelector: p = null,
                      unmaskInputSelector: f = null,
                      inlineStylesheet: _ = !0,
                      maskAllText: h = !1,
                      maskAllInputs: m,
                      maskInputOptions: g,
                      slimDOMOptions: y,
                      maskInputFn: b,
                      maskTextFn: v,
                      hooks: E,
                      packFn: S,
                      sampling: w = {},
                      mousemoveWait: T,
                      recordCanvas: k = !1,
                      userTriggeredOnInput: R = !1,
                      collectFonts: x = !1,
                      inlineImages: N = !1,
                      plugins: D,
                      keepIframeSrcFn: I = () => !1,
                      onMutation: O
                    } = e;
                    if (!t) throw new Error("emit function is required");
                    T !== undefined && w.mousemove === undefined && (w.mousemove = T);
                    const C =
                        !0 === m
                          ? {
                              color: !0,
                              date: !0,
                              "datetime-local": !0,
                              email: !0,
                              month: !0,
                              number: !0,
                              range: !0,
                              search: !0,
                              tel: !0,
                              text: !0,
                              time: !0,
                              url: !0,
                              week: !0,
                              textarea: !0,
                              select: !0,
                              radio: !0,
                              checkbox: !0
                            }
                          : g !== undefined
                          ? g
                          : {},
                      j =
                        !0 === y || "all" === y
                          ? {
                              script: !0,
                              comment: !0,
                              headFavicon: !0,
                              headWhitespace: !0,
                              headMetaSocial: !0,
                              headMetaRobots: !0,
                              headMetaHttpEquiv: !0,
                              headMetaVerification: !0,
                              headMetaAuthorship: "all" === y,
                              headMetaDescKeywords: "all" === y
                            }
                          : y || {};
                    let A;
                    !(function (e = window) {
                      "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
                        "DOMTokenList" in e &&
                          !e.DOMTokenList.prototype.forEach &&
                          (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
                        Node.prototype.contains ||
                          (Node.prototype.contains = function (e) {
                            if (!(0 in arguments)) throw new TypeError("1 argument is required");
                            do {
                              if (this === e) return !0;
                            } while ((e = e && e.parentNode));
                            return !1;
                          });
                    })();
                    let M = 0;
                    Ye = (e, s) => {
                      var i;
                      if (
                        (!(null === (i = me[0]) || void 0 === i ? void 0 : i.isFrozen()) ||
                          e.type === F.FullSnapshot ||
                          (e.type === F.IncrementalSnapshot && e.data.source === Y.Mutation) ||
                          me.forEach((e) => e.unfreeze()),
                        t(
                          ((e) => {
                            for (const t of D || []) t.eventProcessor && (e = t.eventProcessor(e));
                            return S && (e = S(e)), e;
                          })(e),
                          s
                        ),
                        e.type === F.FullSnapshot)
                      )
                        (A = e), (M = 0);
                      else if (e.type === F.IncrementalSnapshot) {
                        if (e.data.source === Y.Mutation && e.data.isAttachIframe) return;
                        M++;
                        const t = r && M >= r,
                          s = n && e.timestamp - A.timestamp > n;
                        (t || s) && He(!0);
                      }
                    };
                    const B = (e) => {
                        Ye(Fe({ type: F.IncrementalSnapshot, data: Object.assign({ source: Y.Mutation }, e) }));
                      },
                      P = (e) => Ye(Fe({ type: F.IncrementalSnapshot, data: Object.assign({ source: Y.Scroll }, e) })),
                      U = (e) => Ye(Fe({ type: F.IncrementalSnapshot, data: Object.assign({ source: Y.CanvasMutation }, e) })),
                      G = new De({ mutationCb: B }),
                      H = new Ge({
                        recordCanvas: k,
                        mutationCb: U,
                        win: window,
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        mirror: ze
                      }),
                      z = new Ie({
                        mutationCb: B,
                        scrollCb: P,
                        bypassOptions: {
                          onMutation: O,
                          blockClass: s,
                          blockSelector: i,
                          unblockSelector: o,
                          maskTextClass: u,
                          maskTextSelector: l,
                          unmaskTextSelector: p,
                          maskInputSelector: d,
                          unmaskInputSelector: f,
                          inlineStylesheet: _,
                          maskAllText: h,
                          maskInputOptions: C,
                          maskTextFn: v,
                          maskInputFn: b,
                          recordCanvas: k,
                          inlineImages: N,
                          sampling: w,
                          slimDOMOptions: j,
                          iframeManager: G,
                          canvasManager: H
                        },
                        mirror: ze
                      });
                    He = (e = !1) => {
                      var t, n, r, a;
                      Ye(Fe({ type: F.Meta, data: { href: window.location.href, width: ee(), height: Q() } }), e),
                        me.forEach((e) => e.lock());
                      const [c, m] = (function (e, t) {
                        const {
                            blockClass: n = "rr-block",
                            blockSelector: r = null,
                            unblockSelector: s = null,
                            maskTextClass: i = "rr-mask",
                            maskTextSelector: o = null,
                            unmaskTextSelector: a = null,
                            inlineStylesheet: c = !0,
                            inlineImages: u = !1,
                            recordCanvas: l = !1,
                            maskInputSelector: d = null,
                            unmaskInputSelector: p = null,
                            maskAllText: f = !1,
                            maskAllInputs: _ = !1,
                            maskTextFn: h,
                            maskInputFn: m,
                            slimDOM: g = !1,
                            dataURLOptions: y,
                            preserveWhiteSpace: b,
                            onSerialize: v,
                            onIframeLoad: E,
                            iframeLoadTimeout: S,
                            keepIframeSrcFn: w = () => !1
                          } = t || {},
                          T = {};
                        return [
                          L(e, {
                            doc: e,
                            map: T,
                            blockClass: n,
                            blockSelector: r,
                            unblockSelector: s,
                            maskTextClass: i,
                            maskTextSelector: o,
                            unmaskTextSelector: a,
                            skipChild: !1,
                            inlineStylesheet: c,
                            maskInputSelector: d,
                            unmaskInputSelector: p,
                            maskAllText: f,
                            maskInputOptions:
                              !0 === _
                                ? {
                                    color: !0,
                                    date: !0,
                                    "datetime-local": !0,
                                    email: !0,
                                    month: !0,
                                    number: !0,
                                    range: !0,
                                    search: !0,
                                    tel: !0,
                                    text: !0,
                                    time: !0,
                                    url: !0,
                                    week: !0,
                                    textarea: !0,
                                    select: !0
                                  }
                                : !1 === _
                                ? {}
                                : _,
                            maskTextFn: h,
                            maskInputFn: m,
                            slimDOMOptions:
                              !0 === g || "all" === g
                                ? {
                                    script: !0,
                                    comment: !0,
                                    headFavicon: !0,
                                    headWhitespace: !0,
                                    headMetaDescKeywords: "all" === g,
                                    headMetaSocial: !0,
                                    headMetaRobots: !0,
                                    headMetaHttpEquiv: !0,
                                    headMetaAuthorship: !0,
                                    headMetaVerification: !0
                                  }
                                : !1 === g
                                ? {}
                                : g,
                            dataURLOptions: y,
                            inlineImages: u,
                            recordCanvas: l,
                            preserveWhiteSpace: b,
                            onSerialize: v,
                            onIframeLoad: E,
                            iframeLoadTimeout: S,
                            keepIframeSrcFn: w
                          }),
                          T
                        ];
                      })(document, {
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        maskTextClass: u,
                        maskTextSelector: l,
                        unmaskTextSelector: p,
                        maskInputSelector: d,
                        unmaskInputSelector: f,
                        inlineStylesheet: _,
                        maskAllText: h,
                        maskAllInputs: C,
                        maskTextFn: v,
                        slimDOM: j,
                        recordCanvas: k,
                        inlineImages: N,
                        onSerialize: (e) => {
                          ie(e) && G.addIframe(e), oe(e) && z.addShadowRoot(e.shadowRoot, document);
                        },
                        onIframeLoad: (e, t) => {
                          G.attachIframe(e, t), z.observeAttachShadow(e);
                        },
                        keepIframeSrcFn: I
                      });
                      if (!c) return console.warn("Failed to snapshot the document");
                      (ze.map = m),
                        Ye(
                          Fe({
                            type: F.FullSnapshot,
                            data: {
                              node: c,
                              initialOffset: {
                                left:
                                  window.pageXOffset !== undefined
                                    ? window.pageXOffset
                                    : (null === document || void 0 === document ? void 0 : document.documentElement.scrollLeft) ||
                                      (null ===
                                        (n =
                                          null === (t = null === document || void 0 === document ? void 0 : document.body) || void 0 === t
                                            ? void 0
                                            : t.parentElement) || void 0 === n
                                        ? void 0
                                        : n.scrollLeft) ||
                                      (null === document || void 0 === document ? void 0 : document.body.scrollLeft) ||
                                      0,
                                top:
                                  window.pageYOffset !== undefined
                                    ? window.pageYOffset
                                    : (null === document || void 0 === document ? void 0 : document.documentElement.scrollTop) ||
                                      (null ===
                                        (a =
                                          null === (r = null === document || void 0 === document ? void 0 : document.body) || void 0 === r
                                            ? void 0
                                            : r.parentElement) || void 0 === a
                                        ? void 0
                                        : a.scrollTop) ||
                                      (null === document || void 0 === document ? void 0 : document.body.scrollTop) ||
                                      0
                              }
                            }
                          })
                        ),
                        me.forEach((e) => e.unlock());
                    };
                    try {
                      const e = [];
                      e.push(
                        q("DOMContentLoaded", () => {
                          Ye(Fe({ type: F.DomContentLoaded, data: {} }));
                        })
                      );
                      const t = (e) => {
                        var t;
                        return he(Re)(
                          {
                            onMutation: O,
                            mutationCb: B,
                            mousemoveCb: (e, t) => Ye(Fe({ type: F.IncrementalSnapshot, data: { source: t, positions: e } })),
                            mouseInteractionCb: (e) =>
                              Ye(Fe({ type: F.IncrementalSnapshot, data: Object.assign({ source: Y.MouseInteraction }, e) })),
                            scrollCb: P,
                            viewportResizeCb: (e) =>
                              Ye(Fe({ type: F.IncrementalSnapshot, data: Object.assign({ source: Y.ViewportResize }, e) })),
                            inputCb: (e) => Ye(Fe({ type: F.IncrementalSnapshot, data: Object.assign({ source: Y.Input }, e) })),
                            mediaInteractionCb: (e) =>
                              Ye(Fe({ type: F.IncrementalSnapshot, data: Object.assign({ source: Y.MediaInteraction }, e) })),
                            styleSheetRuleCb: (e) =>
                              Ye(Fe({ type: F.IncrementalSnapshot, data: Object.assign({ source: Y.StyleSheetRule }, e) })),
                            styleDeclarationCb: (e) =>
                              Ye(Fe({ type: F.IncrementalSnapshot, data: Object.assign({ source: Y.StyleDeclaration }, e) })),
                            canvasMutationCb: U,
                            fontCb: (e) => Ye(Fe({ type: F.IncrementalSnapshot, data: Object.assign({ source: Y.Font }, e) })),
                            blockClass: s,
                            ignoreClass: a,
                            ignoreSelector: c,
                            maskTextClass: u,
                            maskTextSelector: l,
                            unmaskTextSelector: p,
                            maskInputSelector: d,
                            unmaskInputSelector: f,
                            maskInputOptions: C,
                            inlineStylesheet: _,
                            sampling: w,
                            recordCanvas: k,
                            inlineImages: N,
                            userTriggeredOnInput: R,
                            collectFonts: x,
                            doc: e,
                            maskAllText: h,
                            maskInputFn: b,
                            maskTextFn: v,
                            blockSelector: i,
                            unblockSelector: o,
                            slimDOMOptions: j,
                            mirror: ze,
                            iframeManager: G,
                            shadowDomManager: z,
                            canvasManager: H,
                            plugins:
                              (null === (t = null == D ? void 0 : D.filter((e) => e.observer)) || void 0 === t
                                ? void 0
                                : t.map((e) => ({
                                    observer: e.observer,
                                    options: e.options,
                                    callback: (t) => Ye(Fe({ type: F.Plugin, data: { plugin: e.name, payload: t } }))
                                  }))) || []
                          },
                          E
                        );
                      };
                      G.addLoadListener((n) => {
                        try {
                          e.push(t(n.contentDocument));
                        } catch (e) {
                          console.warn(e);
                        }
                      });
                      const n = () => {
                        He(), e.push(t(document));
                      };
                      return (
                        "interactive" === document.readyState || "complete" === document.readyState
                          ? n()
                          : e.push(
                              q(
                                "load",
                                () => {
                                  Ye(Fe({ type: F.Load, data: {} })), n();
                                },
                                window
                              )
                            ),
                        () => {
                          e.forEach((e) => e());
                        }
                      );
                    } catch (e) {
                      console.warn(e);
                    }
                  }
                  function $e(e) {
                    return { timestamp: Date.now() / 1e3, type: "default", ...e };
                  }
                  var qe, Ke;
                  function Ve(e) {
                    return e > 9999999999 ? e : 1e3 * e;
                  }
                  async function Ze(e, t, n) {
                    if (!e.eventBuffer) return null;
                    if (e.isPaused()) return null;
                    if (Ve(t.timestamp) + e.timeouts.sessionIdlePause < Date.now()) return null;
                    try {
                      n && e.eventBuffer.clear();
                      const r = e.getOptions(),
                        s = "function" == typeof r.beforeAddRecordingEvent && t.type === Ke.Custom ? r.beforeAddRecordingEvent(t) : t;
                      if (!s) return;
                      return await e.eventBuffer.addEvent(s);
                    } catch (t) {
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error(t), await e.stop("addEvent");
                      const n = r.getCurrentHub().getClient();
                      n && n.recordDroppedEvent("internal_sdk_error", "replay");
                    }
                  }
                  function Xe(e, t) {
                    "sentry.transaction" !== t.category &&
                      (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
                      e.addUpdate(
                        () => (
                          Ze(e, {
                            type: F.Custom,
                            timestamp: 1e3 * (t.timestamp || 0),
                            data: { tag: "breadcrumb", payload: s.normalize(t, 10, 1e3) }
                          }),
                          "console" === t.category
                        )
                      ));
                  }
                  function Je(e, t, n, r) {
                    if (
                      (function (e, t) {
                        if ("INPUT" === e.tagName && !["submit", "button"].includes(e.getAttribute("type") || "")) return !0;
                        if (tt.includes(e.tagName)) return !0;
                        if (
                          "A" === e.tagName &&
                          (e.hasAttribute("download") || (e.hasAttribute("target") && "_self" !== e.getAttribute("target")))
                        )
                          return !0;
                        if (t.ignoreSelector && e.matches(t.ignoreSelector)) return !0;
                        return !1;
                      })(r, t)
                    )
                      return;
                    let s = () => {};
                    const o = setTimeout(() => {
                        et(e, n, t.timeout, "timeout"), s();
                      }, t.timeout),
                      a = () => {
                        Qe(e, n, t.scrollTimeout, t.timeout, "scroll"), s();
                      },
                      c = new MutationObserver(() => {
                        Qe(e, n, t.threshold, t.timeout, "mutation"), s();
                      });
                    c.observe(i.document.documentElement, { attributes: !0, characterData: !0, childList: !0, subtree: !0 }),
                      i.addEventListener("scroll", a);
                    const u = setTimeout(() => {
                      i.removeEventListener("scroll", a);
                    }, t.scrollTimeout);
                    s = () => {
                      clearTimeout(o), clearTimeout(u), c.disconnect(), i.removeEventListener("scroll", a);
                    };
                  }
                  function Qe(e, t, n, r, s) {
                    const i = Date.now() - 1e3 * t.timestamp;
                    return i > n && (et(e, t, Math.min(i, r), s), !0);
                  }
                  function et(e, t, n, r) {
                    Xe(e, {
                      message: t.message,
                      timestamp: t.timestamp,
                      category: "ui.slowClickDetected",
                      data: { ...t.data, url: i.location.href, timeAfterClickMs: n, endReason: r }
                    });
                  }
                  (We.addCustomEvent = (e, t) => {
                    if (!Ye) throw new Error("please add custom event after start recording");
                    Ye(Fe({ type: F.Custom, data: { tag: e, payload: t } }));
                  }),
                    (We.freezePage = () => {
                      me.forEach((e) => e.freeze());
                    }),
                    (We.takeFullSnapshot = (e) => {
                      if (!He) throw new Error("please take full snapshot after start recording");
                      He(e);
                    }),
                    (We.mirror = ze),
                    (function (e) {
                      (e[(e.Document = 0)] = "Document"),
                        (e[(e.DocumentType = 1)] = "DocumentType"),
                        (e[(e.Element = 2)] = "Element"),
                        (e[(e.Text = 3)] = "Text"),
                        (e[(e.CDATA = 4)] = "CDATA"),
                        (e[(e.Comment = 5)] = "Comment");
                    })(qe || (qe = {})),
                    (function (e) {
                      e[(e.DomContentLoaded = 0)] = "DomContentLoaded";
                      e[(e.Load = 1)] = "Load";
                      e[(e.FullSnapshot = 2)] = "FullSnapshot";
                      e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot";
                      e[(e.Meta = 4)] = "Meta";
                      e[(e.Custom = 5)] = "Custom";
                      e[(e.Plugin = 6)] = "Plugin";
                    })(Ke || (Ke = {}));
                  const tt = ["SELECT", "OPTION"];
                  const nt = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid"]);
                  function rt(e) {
                    const t = {};
                    for (const n in e)
                      if (nt.has(n)) {
                        let r = n;
                        ("data-testid" !== n && "data-test-id" !== n) || (r = "testId"), (t[r] = e[n]);
                      }
                    return t;
                  }
                  const st = (e) => {
                    const t = e.getOptions()._experiments.slowClicks,
                      n = t
                        ? {
                            threshold: t.threshold,
                            timeout: t.timeout,
                            scrollTimeout: t.scrollTimeout,
                            ignoreSelector: t.ignoreSelectors ? t.ignoreSelectors.join(",") : ""
                          }
                        : undefined;
                    return (t) => {
                      if (!e.isEnabled()) return;
                      const r = (function (e) {
                        const { target: t, message: n } = (function (e) {
                          const t = "click" === e.name;
                          let n,
                            r = null;
                          try {
                            (r = t ? ct(e.event) : ot(e.event)), (n = s.htmlTreeAsString(r, { maxStringLength: 200 }) || "<unknown>");
                          } catch (e) {
                            n = "<unknown>";
                          }
                          return { target: r, message: n };
                        })(e);
                        return $e({ category: `ui.${e.name}`, ...it(t, n) });
                      })(t);
                      if (!r) return;
                      const i = "click" === t.name,
                        o = i && t.event;
                      i && n && o && !o.altKey && !o.metaKey && !o.ctrlKey && Je(e, n, r, ct(t.event)), Xe(e, r);
                    };
                  };
                  function it(e, t) {
                    const n = e && "__sn" in e && e.__sn.type === qe.Element ? e.__sn : null;
                    return {
                      message: t,
                      data: n
                        ? {
                            nodeId: n.id,
                            node: {
                              id: n.id,
                              tagName: n.tagName,
                              textContent: e
                                ? Array.from(e.childNodes)
                                    .map((e) => "__sn" in e && e.__sn.type === qe.Text && e.__sn.textContent)
                                    .filter(Boolean)
                                    .map((e) => e.trim())
                                    .join("")
                                : "",
                              attributes: rt(n.attributes)
                            }
                          }
                        : {}
                    };
                  }
                  function ot(e) {
                    return (function (e) {
                      return "object" == typeof e && !!e && "target" in e;
                    })(e)
                      ? e.target
                      : e;
                  }
                  const at = "button,a";
                  function ct(e) {
                    const t = ot(e);
                    if (!(t && t instanceof Element)) return t;
                    return t.closest(at) || t;
                  }
                  function ut(e, t) {
                    if (!e.isEnabled()) return;
                    e.triggerUserActivity();
                    const n = (function (e) {
                      const { metaKey: t, shiftKey: n, ctrlKey: r, altKey: i, key: o, target: a } = e;
                      if (
                        !a ||
                        (function (e) {
                          return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable;
                        })(a)
                      )
                        return null;
                      const c = t || r || i,
                        u = 1 === o.length;
                      if (!c && u) return null;
                      const l = s.htmlTreeAsString(a, { maxStringLength: 200 }) || "<unknown>",
                        d = it(a, l);
                      return $e({
                        category: "ui.keyDown",
                        message: l,
                        data: { ...d.data, metaKey: t, shiftKey: n, ctrlKey: r, altKey: i, key: o }
                      });
                    })(t);
                    n && Xe(e, n);
                  }
                  const lt = ["name", "type", "startTime", "transferSize", "duration"];
                  function dt(e) {
                    return function (t) {
                      return lt.every((n) => e[n] === t[n]);
                    };
                  }
                  function pt(e) {
                    const t = new PerformanceObserver((t) => {
                      const n = (function (e, t) {
                        const [n, r, s] = e.reduce(
                            (e, t) => (
                              "navigation" === t.entryType
                                ? e[0].push(t)
                                : "largest-contentful-paint" === t.entryType
                                ? e[1].push(t)
                                : e[2].push(t),
                              e
                            ),
                            [[], [], []]
                          ),
                          i = [],
                          o = [];
                        let a = r.length ? r[r.length - 1] : undefined;
                        return (
                          t.forEach((e) => {
                            if ("largest-contentful-paint" !== e.entryType)
                              if ("navigation" !== e.entryType) i.push(e);
                              else {
                                const t = e;
                                e.duration > 0 && !n.find(dt(t)) && !o.find(dt(t)) && o.push(t);
                              }
                            else (!a || a.startTime < e.startTime) && (a = e);
                          }),
                          [...(a ? [a] : []), ...n, ...s, ...i, ...o].sort((e, t) => e.startTime - t.startTime)
                        );
                      })(e.performanceEvents, t.getEntries());
                      e.performanceEvents = n;
                    });
                    return (
                      [
                        "element",
                        "event",
                        "first-input",
                        "largest-contentful-paint",
                        "layout-shift",
                        "longtask",
                        "navigation",
                        "paint",
                        "resource"
                      ].forEach((e) => {
                        try {
                          t.observe({ type: e, buffered: !0 });
                        } catch (e) {}
                      }),
                      t
                    );
                  }
                  const ft =
                    '/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */\nfunction t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
                  class _t {
                    constructor() {
                      this.events = [];
                    }
                    get hasEvents() {
                      return this.events.length > 0;
                    }
                    get type() {
                      return "sync";
                    }
                    destroy() {
                      this.events = [];
                    }
                    async addEvent(e) {
                      this.events.push(e);
                    }
                    finish() {
                      return new Promise((e) => {
                        const t = this.events;
                        (this.events = []), e(JSON.stringify(t));
                      });
                    }
                    clear() {
                      this.events = [];
                    }
                    getEarliestTimestamp() {
                      const e = this.events.map((e) => e.timestamp).sort()[0];
                      return e ? Ve(e) : null;
                    }
                  }
                  class ht {
                    constructor(e) {
                      (this._worker = e), (this._id = 0);
                    }
                    ensureReady() {
                      return (
                        this._ensureReadyPromise ||
                          (this._ensureReadyPromise = new Promise((e, t) => {
                            this._worker.addEventListener(
                              "message",
                              ({ data: n }) => {
                                n.success ? e() : t();
                              },
                              { once: !0 }
                            ),
                              this._worker.addEventListener(
                                "error",
                                (e) => {
                                  t(e);
                                },
                                { once: !0 }
                              );
                          })),
                        this._ensureReadyPromise
                      );
                    }
                    destroy() {
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.log("[Replay] Destroying compression worker"),
                        this._worker.terminate();
                    }
                    postMessage(e, t) {
                      const n = this._getAndIncrementId();
                      return new Promise((r, i) => {
                        const o = ({ data: t }) => {
                          const a = t;
                          if (a.method === e && a.id === n) {
                            if ((this._worker.removeEventListener("message", o), !a.success))
                              return (
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("[Replay]", a.response),
                                void i(new Error("Error in compression worker"))
                              );
                            r(a.response);
                          }
                        };
                        this._worker.addEventListener("message", o), this._worker.postMessage({ id: n, method: e, arg: t });
                      });
                    }
                    _getAndIncrementId() {
                      return this._id++;
                    }
                  }
                  class mt {
                    constructor(e) {
                      (this._worker = new ht(e)), (this._earliestTimestamp = null);
                    }
                    get hasEvents() {
                      return !!this._earliestTimestamp;
                    }
                    get type() {
                      return "worker";
                    }
                    ensureReady() {
                      return this._worker.ensureReady();
                    }
                    destroy() {
                      this._worker.destroy();
                    }
                    addEvent(e) {
                      const t = Ve(e.timestamp);
                      return (
                        (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t),
                        this._sendEventToWorker(e)
                      );
                    }
                    finish() {
                      return this._finishRequest();
                    }
                    clear() {
                      (this._earliestTimestamp = null), this._worker.postMessage("clear");
                    }
                    getEarliestTimestamp() {
                      return this._earliestTimestamp;
                    }
                    _sendEventToWorker(e) {
                      return this._worker.postMessage("addEvent", JSON.stringify(e));
                    }
                    async _finishRequest() {
                      const e = await this._worker.postMessage("finish");
                      return (this._earliestTimestamp = null), e;
                    }
                  }
                  class gt {
                    constructor(e) {
                      (this._fallback = new _t()),
                        (this._compression = new mt(e)),
                        (this._used = this._fallback),
                        (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
                    }
                    get type() {
                      return this._used.type;
                    }
                    get hasEvents() {
                      return this._used.hasEvents;
                    }
                    destroy() {
                      this._fallback.destroy(), this._compression.destroy();
                    }
                    clear() {
                      return this._used.clear();
                    }
                    getEarliestTimestamp() {
                      return this._used.getEarliestTimestamp();
                    }
                    addEvent(e) {
                      return this._used.addEvent(e);
                    }
                    async finish() {
                      return await this.ensureWorkerIsLoaded(), this._used.finish();
                    }
                    ensureWorkerIsLoaded() {
                      return this._ensureWorkerIsLoadedPromise;
                    }
                    async _ensureWorkerIsLoaded() {
                      try {
                        await this._compression.ensureReady();
                      } catch (e) {
                        return void (
                          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.log("[Replay] Failed to load the compression worker, falling back to simple buffer")
                        );
                      }
                      await this._switchToCompressionWorker();
                    }
                    async _switchToCompressionWorker() {
                      const { events: e } = this._fallback,
                        t = [];
                      for (const n of e) t.push(this._compression.addEvent(n));
                      this._used = this._compression;
                      try {
                        await Promise.all(t);
                      } catch (e) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.warn("[Replay] Failed to add events when switching buffers.", e);
                      }
                    }
                  }
                  function yt({ useCompression: e }) {
                    if (e && window.Worker)
                      try {
                        const e = (function () {
                          const e = new Blob([ft]);
                          return URL.createObjectURL(e);
                        })();
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Replay] Using compression worker");
                        const t = new Worker(e);
                        return new gt(t);
                      } catch (e) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.log("[Replay] Failed to create compression worker");
                      }
                    return (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Replay] Using simple buffer"), new _t()
                    );
                  }
                  function bt(e) {
                    !(function () {
                      if (!("sessionStorage" in i)) return;
                      try {
                        i.sessionStorage.removeItem(o);
                      } catch (e) {}
                    })(),
                      (e.session = undefined);
                  }
                  function vt(e, t, n = +new Date()) {
                    return null === e || t === undefined || t < 0 || (0 !== t && e + t <= n);
                  }
                  function Et(e, t, n = +new Date()) {
                    return vt(e.started, t.maxSessionLife, n) || vt(e.lastActivity, t.sessionIdleExpire, n);
                  }
                  function St(e) {
                    return e !== undefined && Math.random() < e;
                  }
                  function wt(e) {
                    if ("sessionStorage" in i)
                      try {
                        i.sessionStorage.setItem(o, JSON.stringify(e));
                      } catch (e) {}
                  }
                  function Tt(e) {
                    const t = Date.now();
                    return {
                      id: e.id || s.uuid4(),
                      started: e.started || t,
                      lastActivity: e.lastActivity || t,
                      segmentId: e.segmentId || 0,
                      sampled: e.sampled,
                      shouldRefresh: !0
                    };
                  }
                  function kt({ sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 }) {
                    const r = (function (e, t) {
                        return St(e) ? "session" : !!t && "buffer";
                      })(e, t),
                      i = Tt({ sampled: r });
                    return (
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.log(`[Replay] Creating new session: ${i.id}`),
                      n && wt(i),
                      i
                    );
                  }
                  function Rt({ timeouts: e, currentSession: t, stickySession: n, sessionSampleRate: r, allowBuffering: a }) {
                    const c =
                      t ||
                      (n &&
                        (function () {
                          if (!("sessionStorage" in i)) return null;
                          try {
                            const e = i.sessionStorage.getItem(o);
                            return e ? Tt(JSON.parse(e)) : null;
                          } catch (e) {
                            return null;
                          }
                        })());
                    if (c) {
                      if (!Et(c, e)) return { type: "saved", session: c };
                      if (!c.shouldRefresh) {
                        return { type: "new", session: Tt({ sampled: !1 }) };
                      }
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Replay] Session has expired");
                    }
                    return { type: "new", session: kt({ stickySession: n, sessionSampleRate: r, allowBuffering: a }) };
                  }
                  function xt(e) {
                    return !e.type;
                  }
                  function Nt(e) {
                    return "transaction" === e.type;
                  }
                  function Dt(e) {
                    const t = (function () {
                      const e = r.getCurrentHub().getClient();
                      if (!e) return !1;
                      const t = e.getTransport();
                      if (!t) return !1;
                      return t.send.__sentry__baseTransport__ || !1;
                    })();
                    return (n, r) => {
                      if (!xt(n) && !Nt(n)) return;
                      const s = r && r.statusCode;
                      (t && (!s || s < 200 || s >= 300)) ||
                        (Nt(n) && n.contexts && n.contexts.trace && n.contexts.trace.trace_id
                          ? e.getContext().traceIds.add(n.contexts.trace.trace_id)
                          : xt(n) &&
                            (n.event_id && e.getContext().errorIds.add(n.event_id),
                            "buffer" === e.recordingMode &&
                              n.tags &&
                              n.tags.replayId &&
                              setTimeout(() => {
                                e.sendBufferedReplayOrFlush();
                              })));
                    };
                  }
                  function It(e, t = !1) {
                    const n = t ? Dt(e) : undefined;
                    return (t, i) => {
                      if (
                        (function (e) {
                          return "replay_event" === e.type;
                        })(t)
                      )
                        return delete t.breadcrumbs, t;
                      if (!xt(t) && !Nt(t)) return t;
                      if (
                        (function (e, t) {
                          return (
                            !(e.type || !e.exception || !e.exception.values || !e.exception.values.length) &&
                            (!(!t.originalException || !t.originalException.__rrweb__) ||
                              e.exception.values.some(
                                (e) =>
                                  !!(e.stacktrace && e.stacktrace.frames && e.stacktrace.frames.length) &&
                                  e.stacktrace.frames.some((e) => e.filename && e.filename.includes("/rrweb/src/"))
                              ))
                          );
                        })(t, i) &&
                        !e.getOptions()._experiments.captureExceptions
                      )
                        return (
                          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                            s.logger.log("[Replay] Ignoring error from rrweb internals", t),
                          null
                        );
                      const o = (function (e, t) {
                        return (
                          "buffer" === e.recordingMode && t.message !== c && !(!t.exception || t.type) && St(e.getOptions().errorSampleRate)
                        );
                      })(e, t);
                      if (
                        ((o || "session" === e.recordingMode) && (t.tags = { ...t.tags, replayId: e.getSessionId() }),
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.getOptions()._experiments.traceInternals && xt(t))
                      ) {
                        const e = (function (e) {
                          return { type: "Unknown", value: "n/a", ...(e.exception && e.exception.values && e.exception.values[0]) };
                        })(t);
                        !(function (e) {
                          const { category: t, level: n, message: s, ...i } = e;
                          r.addBreadcrumb({ category: t || "console", level: n || "debug", message: `[debug]: ${s}`, ...i });
                        })({ message: `Tagging event (${t.event_id}) - ${t.message} - ${e.type}: ${e.value}` });
                      }
                      return n && n(t, { statusCode: 200 }), t;
                    };
                  }
                  function Ot(e, t) {
                    return t.map(({ type: t, start: n, end: r, name: s, data: i }) =>
                      Ze(e, {
                        type: F.Custom,
                        timestamp: n,
                        data: { tag: "performanceSpan", payload: { op: t, description: s, startTimestamp: n, endTimestamp: r, data: i } }
                      })
                    );
                  }
                  function Ct(e) {
                    return (t) => {
                      if (!e.isEnabled()) return;
                      const n = (function (e) {
                        const { from: t, to: n } = e,
                          r = Date.now() / 1e3;
                        return { type: "navigation.push", start: r, end: r, name: n, data: { previous: t } };
                      })(t);
                      null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (Ot(e, [n]), !1)));
                    };
                  }
                  function jt(e, t) {
                    return (
                      (("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) || !e.getOptions()._experiments.traceInternals) &&
                      (function (e) {
                        const t = r.getCurrentHub().getClient(),
                          n = t && t.getDsn();
                        return !!n && e.includes(n.host);
                      })(t)
                    );
                  }
                  function At(e, t) {
                    e.isEnabled() && null !== t && (jt(e, t.name) || e.addUpdate(() => (Ot(e, [t]), !0)));
                  }
                  function Mt(e) {
                    return (t) => {
                      if (!e.isEnabled()) return;
                      const n = (function (e) {
                        const { startTimestamp: t, endTimestamp: n, xhr: r } = e,
                          i = r[s.SENTRY_XHR_DATA_KEY];
                        if (!t || !n || !i) return null;
                        const { method: o, url: a, status_code: c } = i;
                        return a === undefined
                          ? null
                          : { type: "resource.xhr", name: a, start: t / 1e3, end: n / 1e3, data: { method: o, statusCode: c } };
                      })(t);
                      At(e, n);
                    };
                  }
                  const Bt = 10,
                    Pt = 11,
                    Ut = 12,
                    Lt = 13,
                    Gt = 14,
                    Ft = 15,
                    Yt = 20,
                    Ht = 21,
                    zt = 22,
                    Wt = 23,
                    $t = ["true", "false", "null"];
                  function qt(e, t) {
                    if (!t.length) return e;
                    let n = e;
                    const r = t.length - 1;
                    n = (function (e, t) {
                      switch (t) {
                        case Bt:
                          return `${e}"~~":"~~"`;
                        case Pt:
                          return `${e}:"~~"`;
                        case Ut:
                          return `${e}~~":"~~"`;
                        case Lt:
                          return (function (e) {
                            const t = e.lastIndexOf(":"),
                              n = e.slice(t + 1);
                            if ($t.includes(n.trim())) return `${e},"~~":"~~"`;
                            return `${e.slice(0, t + 1)}"~~"`;
                          })(e);
                        case Gt:
                          return `${e}~~"`;
                        case Ft:
                          return `${e},"~~":"~~"`;
                        case Yt:
                          return `${e}"~~"`;
                        case Ht:
                          return (function (e) {
                            const t = (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                const n = e[t];
                                if ("," === n || "[" === n) return t;
                              }
                              return -1;
                            })(e);
                            if (t > -1) {
                              const n = e.slice(t + 1);
                              return $t.includes(n.trim()) ? `${e},"~~"` : `${e.slice(0, t + 1)}"~~"`;
                            }
                            return e;
                          })(e);
                        case zt:
                          return `${e}~~"`;
                        case Wt:
                          return `${e},"~~"`;
                      }
                      return e;
                    })(n, t[r]);
                    for (let e = r; e >= 0; e--) {
                      switch (t[e]) {
                        case Bt:
                          n = `${n}}`;
                          break;
                        case Yt:
                          n = `${n}]`;
                      }
                    }
                    return n;
                  }
                  function Kt(e, t, n) {
                    const r = e[e.length - 1],
                      s = t[n];
                    if (!/\s/.test(s))
                      if ('"' !== s || Vt(t, n))
                        switch (s) {
                          case "{":
                            !(function (e, t) {
                              if (!t) return void e.push(Bt);
                              if (t === Lt) return void e.push(Bt);
                              t === Ht && e.push(Bt);
                              if (t === Yt) e.push(Bt);
                            })(e, r);
                            break;
                          case "[":
                            !(function (e, t) {
                              if (!t) return e.push(Yt), void e.push(Ht);
                              if (t === Lt) return e.push(Yt), void e.push(Ht);
                              t === Ht && (e.push(Yt), e.push(Ht));
                              if (t === Yt) e.push(Yt), e.push(Ht);
                            })(e, r);
                            break;
                          case ":":
                            !(function (e, t) {
                              t === Pt && (e.pop(), e.push(Lt));
                            })(e, r);
                            break;
                          case ",":
                            !(function (e, t) {
                              if (t === Lt) return void e.pop();
                              if (t === Ft) return e.pop(), void e.pop();
                              if (t === Ht) return;
                              if (t === Wt) e.pop();
                            })(e, r);
                            break;
                          case "}":
                            !(function (e, t) {
                              t === Bt && e.pop();
                              t === Lt && (e.pop(), e.pop());
                              t === Ft && (e.pop(), e.pop(), e.pop());
                              e[e.length - 1] === Lt && e.push(Ft);
                              e[e.length - 1] === Ht && e.push(Wt);
                            })(e, r);
                            break;
                          case "]":
                            !(function (e, t) {
                              t === Yt && e.pop();
                              t === Ht && (e.pop(), e.pop());
                              t === Wt && (e.pop(), e.pop(), e.pop());
                              e[e.length - 1] === Lt && e.push(Ft);
                              e[e.length - 1] === Ht && e.push(Wt);
                            })(e, r);
                        }
                      else
                        !(function (e, t) {
                          if (t === Gt) return e.pop(), void e.push(Ft);
                          if (t === zt) return e.pop(), void e.push(Wt);
                          if (t === Lt) return void e.push(Gt);
                          if (t === Ht) return void e.push(zt);
                          if (t === Bt) return void e.push(Ut);
                          if (t === Ut) e.pop(), e.push(Pt);
                        })(e, r);
                  }
                  function Vt(e, t) {
                    return "\\" === e[t - 1] && !Vt(e, t - 1);
                  }
                  function Zt(e) {
                    return qt(
                      e,
                      (function (e) {
                        const t = [];
                        for (let n = 0; n < e.length; n++) Kt(t, e, n);
                        return t;
                      })(e)
                    );
                  }
                  function Xt(e, t) {
                    if (!e) return undefined;
                    try {
                      if ("string" == typeof e) return t.encode(e).length;
                      if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
                      if (e instanceof FormData) {
                        const n = sn(e);
                        return t.encode(n).length;
                      }
                      if (e instanceof Blob) return e.size;
                      if (e instanceof ArrayBuffer) return e.byteLength;
                    } catch (e) {}
                    return undefined;
                  }
                  function Jt(e) {
                    if (!e) return undefined;
                    const t = parseInt(e, 10);
                    return isNaN(t) ? undefined : t;
                  }
                  function Qt(e) {
                    return "string" == typeof e
                      ? e
                      : e instanceof URLSearchParams
                      ? e.toString()
                      : e instanceof FormData
                      ? sn(e)
                      : undefined;
                  }
                  function en(e, t) {
                    if (!t) return null;
                    const { startTimestamp: n, endTimestamp: r, url: i, method: o, statusCode: a, request: c, response: u } = t;
                    return {
                      type: e,
                      start: n / 1e3,
                      end: r / 1e3,
                      name: i,
                      data: s.dropUndefinedKeys({ method: o, statusCode: a, request: c, response: u })
                    };
                  }
                  function tn(e) {
                    return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
                  }
                  function nn(e, t, n) {
                    if (!t && 0 === Object.keys(e).length) return undefined;
                    if (!t) return { headers: e };
                    if (!n) return { headers: e, size: t };
                    const r = { headers: e, size: t },
                      { body: s, warnings: i } = (function (e) {
                        if (!e || "string" != typeof e) return { body: e, warnings: [] };
                        const t = e.length > u;
                        if (
                          (function (e) {
                            const t = e[0],
                              n = e[e.length - 1];
                            return ("[" === t && "]" === n) || ("{" === t && "}" === n);
                          })(e)
                        )
                          try {
                            const n = t ? Zt(e.slice(0, u)) : e;
                            return { body: JSON.parse(n), warnings: t ? ["JSON_TRUNCATED"] : [] };
                          } catch (n) {
                            return {
                              body: t ? `${e.slice(0, u)}…` : e,
                              warnings: t ? ["INVALID_JSON", "TEXT_TRUNCATED"] : ["INVALID_JSON"]
                            };
                          }
                        return { body: t ? `${e.slice(0, u)}…` : e, warnings: t ? ["TEXT_TRUNCATED"] : [] };
                      })(n);
                    return (r.body = s), i.length > 0 && (r._meta = { warnings: i }), r;
                  }
                  function rn(e, t) {
                    return Object.keys(e).reduce((n, r) => {
                      const s = r.toLowerCase();
                      return t.includes(s) && e[r] && (n[s] = e[r]), n;
                    }, {});
                  }
                  function sn(e) {
                    return new URLSearchParams(e).toString();
                  }
                  function on(e, t) {
                    const n = (function (e, t = i.document.baseURI) {
                      if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(i.location.origin)) return e;
                      const n = new URL(e, t);
                      if (n.origin !== new URL(t).origin) return e;
                      const r = n.href;
                      if (!e.endsWith("/") && r.endsWith("/")) return r.slice(0, -1);
                      return r;
                    })(e);
                    return s.stringMatchesSomePattern(n, t);
                  }
                  async function an(e, t, n) {
                    try {
                      const r = await (async function (e, t, n) {
                          const { startTimestamp: r, endTimestamp: s } = t,
                            { url: i, method: o, status_code: a = 0, request_body_size: c, response_body_size: u } = e.data,
                            l = on(i, n.networkDetailAllowUrls),
                            d = l
                              ? (function ({ networkCaptureBodies: e, networkRequestHeaders: t }, n, r) {
                                  const s = (function (e, t) {
                                    if (1 === e.length && "string" != typeof e[0]) return ln(e[0], t);
                                    if (2 === e.length) return ln(e[1], t);
                                    return {};
                                  })(n, t);
                                  if (!e) return nn(s, r, undefined);
                                  const i = Qt(cn(n));
                                  return nn(s, r, i);
                                })(n, t.input, c)
                              : tn(c),
                            p = await (async function (e, { networkCaptureBodies: t, textEncoder: n, networkResponseHeaders: r }, s, i) {
                              if (!e && i !== undefined) return tn(i);
                              const o = un(s.headers, r);
                              if (!t && i !== undefined) return nn(o, i, undefined);
                              try {
                                const r = s.clone(),
                                  a = await (async function (e) {
                                    try {
                                      return await e.text();
                                    } catch (e) {
                                      return undefined;
                                    }
                                  })(r),
                                  c = a && a.length && i === undefined ? Xt(a, n) : i;
                                return e ? nn(o, c, t ? a : undefined) : tn(c);
                              } catch (e) {
                                return nn(o, i, undefined);
                              }
                            })(l, n, t.response, u);
                          return { startTimestamp: r, endTimestamp: s, url: i, method: o, statusCode: a, request: d, response: p };
                        })(e, t, n),
                        s = en("resource.fetch", r);
                      At(n.replay, s);
                    } catch (e) {
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.error("[Replay] Failed to capture fetch breadcrumb", e);
                    }
                  }
                  function cn(e = []) {
                    return 2 !== e.length || "object" != typeof e[1] ? undefined : e[1].body;
                  }
                  function un(e, t) {
                    const n = {};
                    return (
                      t.forEach((t) => {
                        e.get(t) && (n[t] = e.get(t));
                      }),
                      n
                    );
                  }
                  function ln(e, t) {
                    if (!e) return {};
                    const n = e.headers;
                    return n ? (n instanceof Headers ? un(n, t) : Array.isArray(n) ? {} : rn(n, t)) : {};
                  }
                  async function dn(e, t, n) {
                    try {
                      const r = (function (e, t, n) {
                          const { startTimestamp: r, endTimestamp: i, input: o, xhr: a } = t,
                            { url: c, method: u, status_code: l = 0, request_body_size: d, response_body_size: p } = e.data;
                          if (!c) return null;
                          if (!on(c, n.networkDetailAllowUrls)) {
                            return {
                              startTimestamp: r,
                              endTimestamp: i,
                              url: c,
                              method: u,
                              statusCode: l,
                              request: tn(d),
                              response: tn(p)
                            };
                          }
                          const f = a[s.SENTRY_XHR_DATA_KEY],
                            _ = f ? rn(f.request_headers, n.networkRequestHeaders) : {},
                            h = rn(
                              (function (e) {
                                const t = e.getAllResponseHeaders();
                                if (!t) return {};
                                return t.split("\r\n").reduce((e, t) => {
                                  const [n, r] = t.split(": ");
                                  return (e[n.toLowerCase()] = r), e;
                                }, {});
                              })(a),
                              n.networkResponseHeaders
                            ),
                            m = nn(_, d, n.networkCaptureBodies ? Qt(o) : undefined),
                            g = nn(h, p, n.networkCaptureBodies ? t.xhr.responseText : undefined);
                          return { startTimestamp: r, endTimestamp: i, url: c, method: u, statusCode: l, request: m, response: g };
                        })(e, t, n),
                        i = en("resource.xhr", r);
                      At(n.replay, i);
                    } catch (e) {
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.error("[Replay] Failed to capture fetch breadcrumb", e);
                    }
                  }
                  function pn(e) {
                    const t = r.getCurrentHub().getClient();
                    try {
                      const n = new TextEncoder(),
                        {
                          networkDetailAllowUrls: r,
                          networkCaptureBodies: i,
                          networkRequestHeaders: o,
                          networkResponseHeaders: a
                        } = e.getOptions(),
                        c = {
                          replay: e,
                          textEncoder: n,
                          networkDetailAllowUrls: r,
                          networkCaptureBodies: i,
                          networkRequestHeaders: o,
                          networkResponseHeaders: a
                        };
                      t && t.on
                        ? t.on("beforeAddBreadcrumb", (e, t) =>
                            (function (e, t, n) {
                              if (!t.data) return;
                              try {
                                (function (e) {
                                  return "xhr" === e.category;
                                })(t) &&
                                  (function (e) {
                                    return e && e.xhr;
                                  })(n) &&
                                  (!(function (e, t, n) {
                                    const { xhr: r, input: s } = t,
                                      i = Xt(s, n.textEncoder),
                                      o = r.getResponseHeader("content-length")
                                        ? Jt(r.getResponseHeader("content-length"))
                                        : Xt(r.response, n.textEncoder);
                                    i !== undefined && (e.data.request_body_size = i), o !== undefined && (e.data.response_body_size = o);
                                  })(t, n, e),
                                  dn(t, n, e)),
                                  (function (e) {
                                    return "fetch" === e.category;
                                  })(t) &&
                                    (function (e) {
                                      return e && e.response;
                                    })(n) &&
                                    (!(function (e, t, n) {
                                      const { input: r, response: s } = t,
                                        i = Xt(cn(r), n.textEncoder),
                                        o = s ? Jt(s.headers.get("content-length")) : undefined;
                                      i !== undefined && (e.data.request_body_size = i), o !== undefined && (e.data.response_body_size = o);
                                    })(t, n, e),
                                    an(t, n, e));
                              } catch (e) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                                  s.logger.warn("Error when enriching network breadcrumb");
                              }
                            })(c, e, t)
                          )
                        : (s.addInstrumentationHandler(
                            "fetch",
                            (function (e) {
                              return (t) => {
                                if (!e.isEnabled()) return;
                                const n = (function (e) {
                                  const { startTimestamp: t, endTimestamp: n, fetchData: r, response: s } = e;
                                  if (!n) return null;
                                  const { method: i, url: o } = r;
                                  return {
                                    type: "resource.fetch",
                                    start: t / 1e3,
                                    end: n / 1e3,
                                    name: o,
                                    data: { method: i, statusCode: s && s.status }
                                  };
                                })(t);
                                At(e, n);
                              };
                            })(e)
                          ),
                          s.addInstrumentationHandler("xhr", Mt(e)));
                    } catch (e) {}
                  }
                  let fn = null;
                  const _n = (e) => (t) => {
                    if (!e.isEnabled()) return;
                    const n = (function (e) {
                      const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
                      if (fn === t || !t) return null;
                      if (
                        ((fn = t),
                        t.category &&
                          (["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.")))
                      )
                        return null;
                      if ("console" === t.category)
                        return (function (e) {
                          const t = e.data && e.data.arguments;
                          if (!Array.isArray(t) || 0 === t.length) return $e(e);
                          let n = !1;
                          const r = t.map((e) => {
                            if (!e) return e;
                            if ("string" == typeof e) return e.length > l ? ((n = !0), `${e.slice(0, l)}…`) : e;
                            if ("object" == typeof e)
                              try {
                                const t = s.normalize(e, 7),
                                  r = JSON.stringify(t);
                                if (r.length > l) {
                                  const e = Zt(r.slice(0, l)),
                                    t = JSON.parse(e);
                                  return (n = !0), t;
                                }
                                return t;
                              } catch (e) {}
                            return e;
                          });
                          return $e({
                            ...e,
                            data: { ...e.data, arguments: r, ...(n ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } } : {}) }
                          });
                        })(t);
                      return $e(t);
                    })(t);
                    n && Xe(e, n);
                  };
                  function hn(e) {
                    return !(!e || !e.on);
                  }
                  function mn(e) {
                    const { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r } = e,
                      s = Date.now() / 1e3;
                    return {
                      type: "memory",
                      name: "memory",
                      start: s,
                      end: s,
                      data: { memory: { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r } }
                    };
                  }
                  const gn = {
                    resource: function (e) {
                      const {
                        entryType: t,
                        initiatorType: n,
                        name: r,
                        responseEnd: s,
                        startTime: i,
                        decodedBodySize: o,
                        encodedBodySize: a,
                        responseStatus: c,
                        transferSize: u
                      } = e;
                      if (["fetch", "xmlhttprequest"].includes(n)) return null;
                      return {
                        type: `${t}.${n}`,
                        start: bn(i),
                        end: bn(s),
                        name: r,
                        data: { size: u, statusCode: c, decodedBodySize: o, encodedBodySize: a }
                      };
                    },
                    paint: function (e) {
                      const { duration: t, entryType: n, name: r, startTime: s } = e,
                        i = bn(s);
                      return { type: n, name: r, start: i, end: i + t, data: undefined };
                    },
                    navigation: function (e) {
                      const {
                        entryType: t,
                        name: n,
                        decodedBodySize: r,
                        duration: s,
                        domComplete: i,
                        encodedBodySize: o,
                        domContentLoadedEventStart: a,
                        domContentLoadedEventEnd: c,
                        domInteractive: u,
                        loadEventStart: l,
                        loadEventEnd: d,
                        redirectCount: p,
                        startTime: f,
                        transferSize: _,
                        type: h
                      } = e;
                      if (0 === s) return null;
                      return {
                        type: `${t}.${h}`,
                        start: bn(f),
                        end: bn(i),
                        name: n,
                        data: {
                          size: _,
                          decodedBodySize: r,
                          encodedBodySize: o,
                          duration: s,
                          domInteractive: u,
                          domContentLoadedEventStart: a,
                          domContentLoadedEventEnd: c,
                          loadEventStart: l,
                          loadEventEnd: d,
                          domComplete: i,
                          redirectCount: p
                        }
                      };
                    },
                    "largest-contentful-paint": function (e) {
                      const { entryType: t, startTime: n, size: r } = e;
                      let s = 0;
                      if (i.performance) {
                        const e = i.performance.getEntriesByType("navigation")[0];
                        s = (e && e.activationStart) || 0;
                      }
                      const o = Math.max(n - s, 0),
                        a = bn(s) + o / 1e3;
                      return { type: t, name: t, start: a, end: a, data: { value: o, size: r, nodeId: We.mirror.getId(e.element) } };
                    }
                  };
                  function yn(e) {
                    return gn[e.entryType] === undefined ? null : gn[e.entryType](e);
                  }
                  function bn(e) {
                    return ((s.browserPerformanceTimeOrigin || i.performance.timeOrigin) + e) / 1e3;
                  }
                  function vn(e) {
                    let t = !1;
                    return (n, r) => {
                      if (!e.checkAndHandleExpiredSession())
                        return void (
                          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.warn("[Replay] Received replay event after session expired.")
                        );
                      const i = r || !t;
                      (t = !0),
                        e.addUpdate(() => {
                          if (("buffer" === e.recordingMode && i && e.setInitialState(), Ze(e, n, i), !i)) return !1;
                          if (
                            ((function (e, t) {
                              if (!t || !e.session || 0 !== e.session.segmentId) return Promise.resolve(null);
                              Ze(
                                e,
                                (function (e) {
                                  const t = e.getOptions();
                                  return {
                                    type: Ke.Custom,
                                    timestamp: Date.now(),
                                    data: {
                                      tag: "options",
                                      payload: {
                                        sessionSampleRate: t.sessionSampleRate,
                                        errorSampleRate: t.errorSampleRate,
                                        useCompressionOption: t.useCompression,
                                        blockAllMedia: t.blockAllMedia,
                                        maskAllText: t.maskAllText,
                                        maskAllInputs: t.maskAllInputs,
                                        useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                        networkCaptureBodies: t.networkCaptureBodies,
                                        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                        networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                      }
                                    }
                                  };
                                })(e),
                                !1
                              );
                            })(e, i),
                            e.session && e.session.previousSessionId)
                          )
                            return !0;
                          if ("buffer" === e.recordingMode && e.session && e.eventBuffer) {
                            const t = e.eventBuffer.getEarliestTimestamp();
                            t && ((e.session.started = t), e.getOptions().stickySession && wt(e.session));
                          }
                          const t = e.getOptions();
                          return t._experiments.delayFlushOnCheckout
                            ? (setTimeout(() => e.conditionalFlush(), t._experiments.delayFlushOnCheckout), e.cancelFlush(), !0)
                            : ("session" === e.recordingMode && e.flushImmediate(), !0);
                        });
                    };
                  }
                  async function En({ recordingData: e, replayId: t, segmentId: n, eventContext: i, timestamp: o, session: u }) {
                    const l = (function ({ recordingData: e, headers: t }) {
                        let n;
                        const r = `${JSON.stringify(t)}\n`;
                        if ("string" == typeof e) n = `${r}${e}`;
                        else {
                          const t = new TextEncoder().encode(r);
                          (n = new Uint8Array(t.length + e.length)), n.set(t), n.set(e, t.length);
                        }
                        return n;
                      })({ recordingData: e, headers: { segment_id: n } }),
                      { urls: d, errorIds: p, traceIds: f, initialTimestamp: _ } = i,
                      h = r.getCurrentHub(),
                      m = h.getClient(),
                      g = h.getScope(),
                      y = m && m.getTransport(),
                      b = m && m.getDsn();
                    if (!(m && g && y && b && u.sampled)) return;
                    const v = {
                        type: a,
                        replay_start_timestamp: _ / 1e3,
                        timestamp: o / 1e3,
                        error_ids: p,
                        trace_ids: f,
                        urls: d,
                        replay_id: t,
                        segment_id: n,
                        replay_type: u.sampled
                      },
                      E = await (async function ({ client: e, scope: t, replayId: n, event: s }) {
                        const i =
                            "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations)
                              ? undefined
                              : Object.keys(e._integrations),
                          o = await r.prepareEvent(e.getOptions(), s, { event_id: n, integrations: i }, t);
                        if (!o) return null;
                        o.platform = o.platform || "javascript";
                        const a = e.getSdkMetadata && e.getSdkMetadata(),
                          { name: c, version: u } = (a && a.sdk) || {};
                        return (o.sdk = { ...o.sdk, name: c || "sentry.javascript.unknown", version: u || "0.0.0" }), o;
                      })({ scope: g, client: m, replayId: t, event: v });
                    if (!E)
                      return (
                        m.recordDroppedEvent("event_processor", "replay", v),
                        void (
                          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.log("An event processor returned `null`, will not send event.")
                        )
                      );
                    const S = (function (e, t, n, r) {
                      return s.createEnvelope(s.createEventEnvelopeHeaders(e, s.getSdkMetadataForEnvelopeHeader(e), r, n), [
                        [{ type: "replay_event" }, e],
                        [{ type: "replay_recording", length: "string" == typeof t ? new TextEncoder().encode(t).length : t.length }, t]
                      ]);
                    })(E, l, b, m.getOptions().tunnel);
                    let w;
                    try {
                      w = await y.send(S);
                    } catch (e) {
                      const t = new Error(c);
                      try {
                        t.cause = e;
                      } catch (e) {}
                      throw t;
                    }
                    if (!w) return w;
                    if ("number" == typeof w.statusCode && (w.statusCode < 200 || w.statusCode >= 300)) throw new Sn(w.statusCode);
                    return w;
                  }
                  class Sn extends Error {
                    constructor(e) {
                      super(`Transport returned status code ${e}`);
                    }
                  }
                  async function wn(e, t = { count: 0, interval: 5e3 }) {
                    const { recordingData: n, options: s } = e;
                    if (n.length)
                      try {
                        return await En(e), !0;
                      } catch (n) {
                        if (n instanceof Sn) throw n;
                        if (
                          (r.setContext("Replays", { _retryCount: t.count }),
                          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                            s._experiments &&
                            s._experiments.captureExceptions &&
                            r.captureException(n),
                          t.count >= 3)
                        ) {
                          const e = new Error(`${c} - max retries exceeded`);
                          try {
                            e.cause = n;
                          } catch (e) {}
                          throw e;
                        }
                        return (
                          (t.interval *= ++t.count),
                          await new Promise((n, r) => {
                            setTimeout(async () => {
                              try {
                                await wn(e, t), n(!0);
                              } catch (e) {
                                r(e);
                              }
                            }, t.interval);
                          })
                        );
                      }
                  }
                  class Tn {
                    __init() {
                      this.eventBuffer = null;
                    }
                    __init2() {
                      this.performanceEvents = [];
                    }
                    __init3() {
                      this.recordingMode = "session";
                    }
                    __init4() {
                      this.timeouts = { sessionIdlePause: 3e5, sessionIdleExpire: 9e5, maxSessionLife: 36e5 };
                    }
                    __init5() {
                      this._performanceObserver = null;
                    }
                    __init6() {
                      this._flushLock = null;
                    }
                    __init7() {
                      this._lastActivity = Date.now();
                    }
                    __init8() {
                      this._isEnabled = !1;
                    }
                    __init9() {
                      this._isPaused = !1;
                    }
                    __init10() {
                      this._hasInitializedCoreListeners = !1;
                    }
                    __init11() {
                      this._stopRecording = null;
                    }
                    __init12() {
                      this._context = { errorIds: new Set(), traceIds: new Set(), urls: [], initialTimestamp: Date.now(), initialUrl: "" };
                    }
                    constructor({ options: e, recordingOptions: t }) {
                      Tn.prototype.__init.call(this),
                        Tn.prototype.__init2.call(this),
                        Tn.prototype.__init3.call(this),
                        Tn.prototype.__init4.call(this),
                        Tn.prototype.__init5.call(this),
                        Tn.prototype.__init6.call(this),
                        Tn.prototype.__init7.call(this),
                        Tn.prototype.__init8.call(this),
                        Tn.prototype.__init9.call(this),
                        Tn.prototype.__init10.call(this),
                        Tn.prototype.__init11.call(this),
                        Tn.prototype.__init12.call(this),
                        Tn.prototype.__init13.call(this),
                        Tn.prototype.__init14.call(this),
                        Tn.prototype.__init15.call(this),
                        Tn.prototype.__init16.call(this),
                        Tn.prototype.__init17.call(this),
                        Tn.prototype.__init18.call(this),
                        (this._recordingOptions = t),
                        (this._options = e),
                        (this._debouncedFlush = (function (e, t, n) {
                          let r, s, i;
                          const o = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
                          function a() {
                            return c(), (r = e()), r;
                          }
                          function c() {
                            s !== undefined && clearTimeout(s), i !== undefined && clearTimeout(i), (s = i = undefined);
                          }
                          function u() {
                            return s && clearTimeout(s), (s = setTimeout(a, t)), o && i === undefined && (i = setTimeout(a, o)), r;
                          }
                          return (
                            (u.cancel = c),
                            (u.flush = function () {
                              return s !== undefined || i !== undefined ? a() : r;
                            }),
                            u
                          );
                        })(() => this._flush(), this._options.flushMinDelay, { maxWait: this._options.flushMaxDelay }));
                    }
                    getContext() {
                      return this._context;
                    }
                    isEnabled() {
                      return this._isEnabled;
                    }
                    isPaused() {
                      return this._isPaused;
                    }
                    getOptions() {
                      return this._options;
                    }
                    initializeSampling() {
                      const { errorSampleRate: e, sessionSampleRate: t } = this._options;
                      if (e <= 0 && t <= 0) return;
                      this._loadAndCheckSession() &&
                        (this.session
                          ? (this.session.sampled && "session" !== this.session.sampled && (this.recordingMode = "buffer"),
                            this._initializeRecording())
                          : this._handleException(new Error("Unable to initialize and create session")));
                    }
                    start() {
                      if (this._isEnabled && "session" === this.recordingMode) throw new Error("Replay recording is already in progress");
                      if (this._isEnabled && "buffer" === this.recordingMode)
                        throw new Error("Replay buffering is in progress, call `flush()` to save the replay");
                      const e = this.session && this.session.id,
                        { session: t } = Rt({
                          timeouts: this.timeouts,
                          stickySession: Boolean(this._options.stickySession),
                          currentSession: this.session,
                          sessionSampleRate: 1,
                          allowBuffering: !1
                        });
                      (t.previousSessionId = e), (this.session = t), this._initializeRecording();
                    }
                    startBuffering() {
                      if (this._isEnabled) throw new Error("Replay recording is already in progress");
                      const e = this.session && this.session.id,
                        { session: t } = Rt({
                          timeouts: this.timeouts,
                          stickySession: Boolean(this._options.stickySession),
                          currentSession: this.session,
                          sessionSampleRate: 0,
                          allowBuffering: !0
                        });
                      (t.previousSessionId = e), (this.session = t), (this.recordingMode = "buffer"), this._initializeRecording();
                    }
                    startRecording() {
                      try {
                        this._stopRecording = We({
                          ...this._recordingOptions,
                          ...("buffer" === this.recordingMode && { checkoutEveryNms: 6e4 }),
                          emit: vn(this),
                          onMutation: this._onMutationHandler
                        });
                      } catch (e) {
                        this._handleException(e);
                      }
                    }
                    stopRecording() {
                      try {
                        return this._stopRecording && (this._stopRecording(), (this._stopRecording = undefined)), !0;
                      } catch (e) {
                        return this._handleException(e), !1;
                      }
                    }
                    async stop(e) {
                      if (this._isEnabled)
                        try {
                          if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                            const t = "[Replay] Stopping Replay" + (e ? ` triggered by ${e}` : "");
                            (this.getOptions()._experiments.traceInternals ? console.warn : s.logger.log)(t);
                          }
                          (this._isEnabled = !1),
                            this._removeListeners(),
                            this.stopRecording(),
                            this._debouncedFlush.cancel(),
                            await this._flush({ force: !0 }),
                            this.eventBuffer && this.eventBuffer.destroy(),
                            (this.eventBuffer = null),
                            bt(this);
                        } catch (e) {
                          this._handleException(e);
                        }
                    }
                    pause() {
                      (this._isPaused = !0), this.stopRecording();
                    }
                    resume() {
                      this._loadAndCheckSession() && ((this._isPaused = !1), this.startRecording());
                    }
                    async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
                      if ("session" === this.recordingMode) return this.flushImmediate();
                      await this.flushImmediate();
                      const t = this.stopRecording();
                      e &&
                        t &&
                        ((this.recordingMode = "session"),
                        this.session && ((this.session.shouldRefresh = !1), this._maybeSaveSession()),
                        this.startRecording());
                    }
                    addUpdate(e) {
                      const t = e();
                      "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush();
                    }
                    triggerUserActivity() {
                      if ((this._updateUserActivity(), this._stopRecording))
                        this.checkAndHandleExpiredSession(), this._updateSessionActivity();
                      else {
                        if (!this._loadAndCheckSession()) return;
                        this.resume();
                      }
                    }
                    conditionalFlush() {
                      return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate();
                    }
                    flushImmediate() {
                      return this._debouncedFlush(), this._debouncedFlush.flush();
                    }
                    cancelFlush() {
                      this._debouncedFlush.cancel();
                    }
                    getSessionId() {
                      return this.session && this.session.id;
                    }
                    checkAndHandleExpiredSession() {
                      const e = this.getSessionId();
                      if (
                        this._lastActivity &&
                        vt(this._lastActivity, this.timeouts.sessionIdlePause) &&
                        this.session &&
                        "session" === this.session.sampled
                      )
                        return void this.pause();
                      if (!this._loadAndCheckSession()) return;
                      return e === this.getSessionId() || (this._triggerFullSnapshot(), !1);
                    }
                    setInitialState() {
                      const e = `${i.location.pathname}${i.location.hash}${i.location.search}`,
                        t = `${i.location.origin}${e}`;
                      (this.performanceEvents = []),
                        this._clearContext(),
                        (this._context.initialUrl = t),
                        (this._context.initialTimestamp = Date.now()),
                        this._context.urls.push(t);
                    }
                    _initializeRecording() {
                      this.setInitialState(),
                        this._updateSessionActivity(),
                        (this.eventBuffer = yt({ useCompression: this._options.useCompression })),
                        this._removeListeners(),
                        this._addListeners(),
                        (this._isEnabled = !0),
                        this.startRecording();
                    }
                    _handleException(e) {
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("[Replay]", e),
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          this._options._experiments &&
                          this._options._experiments.captureExceptions &&
                          r.captureException(e);
                    }
                    _loadAndCheckSession() {
                      const { type: e, session: t } = Rt({
                        timeouts: this.timeouts,
                        stickySession: Boolean(this._options.stickySession),
                        currentSession: this.session,
                        sessionSampleRate: this._options.sessionSampleRate,
                        allowBuffering: this._options.errorSampleRate > 0
                      });
                      "new" === e && this.setInitialState();
                      const n = this.getSessionId();
                      return (
                        t.id !== n && (t.previousSessionId = n),
                        (this.session = t),
                        !!this.session.sampled || (this.stop("session unsampled"), !1)
                      );
                    }
                    _addListeners() {
                      try {
                        i.document.addEventListener("visibilitychange", this._handleVisibilityChange),
                          i.addEventListener("blur", this._handleWindowBlur),
                          i.addEventListener("focus", this._handleWindowFocus),
                          i.addEventListener("keydown", this._handleKeyboardEvent),
                          this._hasInitializedCoreListeners ||
                            (!(function (e) {
                              const t = r.getCurrentHub().getScope(),
                                n = r.getCurrentHub().getClient();
                              t && t.addScopeListener(_n(e)),
                                s.addInstrumentationHandler("dom", st(e)),
                                s.addInstrumentationHandler("history", Ct(e)),
                                pn(e),
                                r.addGlobalEventProcessor(It(e, !hn(n))),
                                hn(n) &&
                                  (n.on("afterSendEvent", Dt(e)),
                                  n.on("createDsc", (t) => {
                                    const n = e.getSessionId();
                                    n && e.isEnabled() && "session" === e.recordingMode && (t.replay_id = n);
                                  }));
                            })(this),
                            (this._hasInitializedCoreListeners = !0));
                      } catch (e) {
                        this._handleException(e);
                      }
                      "PerformanceObserver" in i && (this._performanceObserver = pt(this));
                    }
                    _removeListeners() {
                      try {
                        i.document.removeEventListener("visibilitychange", this._handleVisibilityChange),
                          i.removeEventListener("blur", this._handleWindowBlur),
                          i.removeEventListener("focus", this._handleWindowFocus),
                          i.removeEventListener("keydown", this._handleKeyboardEvent),
                          this._performanceObserver && (this._performanceObserver.disconnect(), (this._performanceObserver = null));
                      } catch (e) {
                        this._handleException(e);
                      }
                    }
                    __init13() {
                      this._handleVisibilityChange = () => {
                        "visible" === i.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks();
                      };
                    }
                    __init14() {
                      this._handleWindowBlur = () => {
                        const e = $e({ category: "ui.blur" });
                        this._doChangeToBackgroundTasks(e);
                      };
                    }
                    __init15() {
                      this._handleWindowFocus = () => {
                        const e = $e({ category: "ui.focus" });
                        this._doChangeToForegroundTasks(e);
                      };
                    }
                    __init16() {
                      this._handleKeyboardEvent = (e) => {
                        ut(this, e);
                      };
                    }
                    _doChangeToBackgroundTasks(e) {
                      if (!this.session) return;
                      const t = Et(this.session, this.timeouts);
                      e && !t && this._createCustomBreadcrumb(e), this.conditionalFlush();
                    }
                    _doChangeToForegroundTasks(e) {
                      if (!this.session) return;
                      this.checkAndHandleExpiredSession()
                        ? e && this._createCustomBreadcrumb(e)
                        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.log("[Replay] Document has become active, but session has expired");
                    }
                    _triggerFullSnapshot(e = !0) {
                      try {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Replay] Taking full rrweb snapshot"),
                          We.takeFullSnapshot(e);
                      } catch (e) {
                        this._handleException(e);
                      }
                    }
                    _updateUserActivity(e = Date.now()) {
                      this._lastActivity = e;
                    }
                    _updateSessionActivity(e = Date.now()) {
                      this.session && ((this.session.lastActivity = e), this._maybeSaveSession());
                    }
                    _createCustomBreadcrumb(e) {
                      this.addUpdate(() => {
                        Ze(this, { type: F.Custom, timestamp: e.timestamp || 0, data: { tag: "breadcrumb", payload: e } });
                      });
                    }
                    _addPerformanceEntries() {
                      const e = [...this.performanceEvents];
                      return (
                        (this.performanceEvents = []),
                        Promise.all(
                          Ot(
                            this,
                            (function (e) {
                              return e.map(yn).filter(Boolean);
                            })(e)
                          )
                        )
                      );
                    }
                    _clearContext() {
                      this._context.errorIds.clear(), this._context.traceIds.clear(), (this._context.urls = []);
                    }
                    _updateInitialTimestampFromEventBuffer() {
                      const { session: e, eventBuffer: t } = this;
                      if (!e || !t) return;
                      if (e.segmentId) return;
                      const n = t.getEarliestTimestamp();
                      n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n);
                    }
                    _popEventContext() {
                      const e = {
                        initialTimestamp: this._context.initialTimestamp,
                        initialUrl: this._context.initialUrl,
                        errorIds: Array.from(this._context.errorIds),
                        traceIds: Array.from(this._context.traceIds),
                        urls: this._context.urls
                      };
                      return this._clearContext(), e;
                    }
                    async _runFlush() {
                      if (this.session && this.eventBuffer) {
                        if (
                          (await this._addPerformanceEntries(),
                          this.eventBuffer &&
                            this.eventBuffer.hasEvents &&
                            (await (async function (e) {
                              try {
                                return Promise.all(Ot(e, [mn(i.performance.memory)]));
                              } catch (e) {
                                return [];
                              }
                            })(this),
                            this.eventBuffer))
                        )
                          try {
                            this._updateInitialTimestampFromEventBuffer();
                            const e = await this.eventBuffer.finish(),
                              t = this.session.id,
                              n = this._popEventContext(),
                              r = this.session.segmentId++;
                            this._maybeSaveSession(),
                              await wn({
                                replayId: t,
                                recordingData: e,
                                segmentId: r,
                                eventContext: n,
                                session: this.session,
                                options: this.getOptions(),
                                timestamp: Date.now()
                              });
                          } catch (e) {
                            this._handleException(e), this.stop("sendReplay");
                            const t = r.getCurrentHub().getClient();
                            t && t.recordDroppedEvent("send_error", "replay");
                          }
                      } else
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                          s.logger.error("[Replay] No session or eventBuffer found to flush.");
                    }
                    __init17() {
                      this._flush = async ({ force: e = !1 } = {}) => {
                        if (this._isEnabled || e)
                          if (this.checkAndHandleExpiredSession())
                            if (this.session) {
                              if ((this._debouncedFlush.cancel(), !this._flushLock))
                                return (this._flushLock = this._runFlush()), await this._flushLock, void (this._flushLock = null);
                              try {
                                await this._flushLock;
                              } catch (e) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error(e);
                              } finally {
                                this._debouncedFlush();
                              }
                            } else
                              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                                s.logger.error("[Replay] No session found to flush.");
                          else
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                              s.logger.error("[Replay] Attempting to finish replay event after session expired.");
                      };
                    }
                    _maybeSaveSession() {
                      this.session && this._options.stickySession && wt(this.session);
                    }
                    __init18() {
                      this._onMutationHandler = (e) => {
                        const t = e.length,
                          n = this._options._experiments.mutationLimit || 0,
                          r = n && t > n;
                        if (t > (this._options._experiments.mutationBreadcrumbLimit || 1e3) || r) {
                          const e = $e({ category: "replay.mutations", data: { count: t } });
                          this._createCustomBreadcrumb(e);
                        }
                        return !r || (this._triggerFullSnapshot(!1), !1);
                      };
                    }
                  }
                  function kn(e, t, n, r) {
                    const s = [...e, ...("string" == typeof r ? r.split(",") : []), ...t];
                    return (
                      void 0 !== n &&
                        ("string" == typeof n && s.push(`.${n}`),
                        console.warn(
                          "[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration."
                        )),
                      s.join(",")
                    );
                  }
                  function Rn({
                    mask: e,
                    unmask: t,
                    block: n,
                    unblock: r,
                    ignore: s,
                    blockClass: i,
                    blockSelector: o,
                    maskTextClass: a,
                    maskTextSelector: c,
                    ignoreClass: u
                  }) {
                    const l = kn(e, [".sentry-mask", "[data-sentry-mask]"], a, c),
                      d = kn(t, [".sentry-unmask", "[data-sentry-unmask]"]),
                      p = {
                        maskTextSelector: l,
                        unmaskTextSelector: d,
                        maskInputSelector: l,
                        unmaskInputSelector: d,
                        blockSelector: kn(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], i, o),
                        unblockSelector: kn(r, [".sentry-unblock", "[data-sentry-unblock]"]),
                        ignoreSelector: kn(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], u)
                      };
                    return i instanceof RegExp && (p.blockClass = i), a instanceof RegExp && (p.maskTextClass = a), p;
                  }
                  function xn() {
                    return "undefined" != typeof window && (!s.isNodeEnv() || (void 0 !== t && "renderer" === t.type));
                  }
                  const Nn = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
                    Dn = ["content-length", "content-type", "accept"];
                  let In = !1;
                  class On {
                    static __initStatic() {
                      this.id = "Replay";
                    }
                    __init() {
                      this.name = On.id;
                    }
                    constructor({
                      flushMinDelay: e = 5e3,
                      flushMaxDelay: t = 5500,
                      stickySession: n = !0,
                      useCompression: r = !0,
                      _experiments: s = {},
                      sessionSampleRate: i,
                      errorSampleRate: o,
                      maskAllText: a = !0,
                      maskAllInputs: c = !0,
                      blockAllMedia: u = !0,
                      networkDetailAllowUrls: l = [],
                      networkCaptureBodies: d = !0,
                      networkRequestHeaders: p = [],
                      networkResponseHeaders: f = [],
                      mask: _ = [],
                      unmask: h = [],
                      block: m = [],
                      unblock: g = [],
                      ignore: y = [],
                      maskFn: b,
                      beforeAddRecordingEvent: v,
                      blockClass: E,
                      blockSelector: S,
                      maskInputOptions: w,
                      maskTextClass: T,
                      maskTextSelector: k,
                      ignoreClass: R
                    } = {}) {
                      if (
                        (On.prototype.__init.call(this),
                        (this._recordingOptions = {
                          maskAllInputs: c,
                          maskAllText: a,
                          maskInputOptions: { ...(w || {}), password: !0 },
                          maskTextFn: b,
                          maskInputFn: b,
                          ...Rn({
                            mask: _,
                            unmask: h,
                            block: m,
                            unblock: g,
                            ignore: y,
                            blockClass: E,
                            blockSelector: S,
                            maskTextClass: T,
                            maskTextSelector: k,
                            ignoreClass: R
                          }),
                          slimDOMOptions: "all",
                          inlineStylesheet: !0,
                          inlineImages: !1,
                          collectFonts: !0
                        }),
                        (this._initialOptions = {
                          flushMinDelay: e,
                          flushMaxDelay: t,
                          stickySession: n,
                          sessionSampleRate: i,
                          errorSampleRate: o,
                          useCompression: r,
                          blockAllMedia: u,
                          maskAllInputs: c,
                          maskAllText: a,
                          networkDetailAllowUrls: l,
                          networkCaptureBodies: d,
                          networkRequestHeaders: Cn(p),
                          networkResponseHeaders: Cn(f),
                          beforeAddRecordingEvent: v,
                          _experiments: s
                        }),
                        "number" == typeof i &&
                          (console.warn(
                            `[Replay] You are passing \`sessionSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ${i} })`
                          ),
                          (this._initialOptions.sessionSampleRate = i)),
                        "number" == typeof o &&
                          (console.warn(
                            `[Replay] You are passing \`errorSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ${o} })`
                          ),
                          (this._initialOptions.errorSampleRate = o)),
                        this._initialOptions.blockAllMedia &&
                          (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector
                            ? `${this._recordingOptions.blockSelector},${Nn}`
                            : Nn),
                        this._isInitialized && xn())
                      )
                        throw new Error("Multiple Sentry Session Replay instances are not supported");
                      this._isInitialized = !0;
                    }
                    get _isInitialized() {
                      return In;
                    }
                    set _isInitialized(e) {
                      In = e;
                    }
                    setupOnce() {
                      xn() && (this._setup(), setTimeout(() => this._initialize()));
                    }
                    start() {
                      this._replay && this._replay.start();
                    }
                    startBuffering() {
                      this._replay && this._replay.startBuffering();
                    }
                    stop() {
                      return this._replay ? this._replay.stop() : Promise.resolve();
                    }
                    flush(e) {
                      return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : Promise.resolve();
                    }
                    getReplayId() {
                      if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId();
                    }
                    _initialize() {
                      this._replay && this._replay.initializeSampling();
                    }
                    _setup() {
                      const e = (function (e) {
                        const t = r.getCurrentHub().getClient(),
                          n = t && t.getOptions(),
                          i = { sessionSampleRate: 0, errorSampleRate: 0, ...s.dropUndefinedKeys(e) };
                        if (!n) return console.warn("SDK client is not available."), i;
                        null == e.sessionSampleRate &&
                          null == e.errorSampleRate &&
                          null == n.replaysSessionSampleRate &&
                          null == n.replaysOnErrorSampleRate &&
                          console.warn(
                            "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."
                          );
                        "number" == typeof n.replaysSessionSampleRate && (i.sessionSampleRate = n.replaysSessionSampleRate);
                        "number" == typeof n.replaysOnErrorSampleRate && (i.errorSampleRate = n.replaysOnErrorSampleRate);
                        return i;
                      })(this._initialOptions);
                      this._replay = new Tn({ options: e, recordingOptions: this._recordingOptions });
                    }
                  }
                  function Cn(e) {
                    return [...Dn, ...e.map((e) => e.toLowerCase())];
                  }
                  On.__initStatic(), (n.Replay = On);
                }).call(this);
              }).call(this, e("_process"));
            },
            { "@sentry/core": 64, "@sentry/utils": 120, _process: 147 }
          ],
          99: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./is.js"),
                s = e("./logger.js"),
                i = "sentry-",
                o = /^sentry-/,
                a = 8192;
              function c(e) {
                return e
                  .split(",")
                  .map((e) => e.split("=").map((e) => decodeURIComponent(e.trim())))
                  .reduce((e, [t, n]) => ((e[t] = n), e), {});
              }
              (n.BAGGAGE_HEADER_NAME = "baggage"),
                (n.MAX_BAGGAGE_STRING_LENGTH = a),
                (n.SENTRY_BAGGAGE_KEY_PREFIX = i),
                (n.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = o),
                (n.baggageHeaderToDynamicSamplingContext = function (e) {
                  if (!r.isString(e) && !Array.isArray(e)) return undefined;
                  let t = {};
                  if (Array.isArray(e)) t = e.reduce((e, t) => ({ ...e, ...c(t) }), {});
                  else {
                    if (!e) return undefined;
                    t = c(e);
                  }
                  const n = Object.entries(t).reduce((e, [t, n]) => {
                    if (t.match(o)) {
                      e[t.slice(7)] = n;
                    }
                    return e;
                  }, {});
                  return Object.keys(n).length > 0 ? n : undefined;
                }),
                (n.dynamicSamplingContextToSentryBaggageHeader = function (e) {
                  return (function (e) {
                    if (0 === Object.keys(e).length) return undefined;
                    return Object.entries(e).reduce((e, [t, n], r) => {
                      const i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                        o = 0 === r ? i : `${e},${i}`;
                      return o.length > a
                        ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                            s.logger.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`),
                          e)
                        : o;
                    }, "");
                  })(Object.entries(e).reduce((e, [t, n]) => (n && (e[`${i}${t}`] = n), e), {}));
                });
            },
            { "./is.js": 122, "./logger.js": 123 }
          ],
          100: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./is.js"),
                s = e("./worldwide.js").getGlobalObject();
              function i(e, t) {
                const n = e,
                  s = [];
                let i, o, a, c, u;
                if (!n || !n.tagName) return "";
                s.push(n.tagName.toLowerCase());
                const l = t && t.length ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)]) : null;
                if (l && l.length)
                  l.forEach((e) => {
                    s.push(`[${e[0]}="${e[1]}"]`);
                  });
                else if ((n.id && s.push(`#${n.id}`), (i = n.className), i && r.isString(i)))
                  for (o = i.split(/\s+/), u = 0; u < o.length; u++) s.push(`.${o[u]}`);
                const d = ["aria-label", "type", "name", "title", "alt"];
                for (u = 0; u < d.length; u++) (a = d[u]), (c = n.getAttribute(a)), c && s.push(`[${a}="${c}"]`);
                return s.join("");
              }
              (n.getDomElement = function (e) {
                return s.document && s.document.querySelector ? s.document.querySelector(e) : null;
              }),
                (n.getLocationHref = function () {
                  try {
                    return s.document.location.href;
                  } catch (e) {
                    return "";
                  }
                }),
                (n.htmlTreeAsString = function (e, t = {}) {
                  try {
                    let n = e;
                    const r = 5,
                      s = [];
                    let o = 0,
                      a = 0;
                    const c = " > ",
                      u = c.length;
                    let l;
                    const d = Array.isArray(t) ? t : t.keyAttrs,
                      p = (!Array.isArray(t) && t.maxStringLength) || 80;
                    for (; n && o++ < r && ((l = i(n, d)), !("html" === l || (o > 1 && a + s.length * u + l.length >= p))); )
                      s.push(l), (a += l.length), (n = n.parentNode);
                    return s.reverse().join(c);
                  } catch (e) {
                    return "<unknown>";
                  }
                });
            },
            { "./is.js": 122, "./worldwide.js": 145 }
          ],
          101: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./_nullishCoalesce.js");
              n._asyncNullishCoalesce = async function (e, t) {
                return r._nullishCoalesce(e, t);
              };
            },
            { "./_nullishCoalesce.js": 111 }
          ],
          102: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n._asyncOptionalChain = async function (e) {
                  let t = undefined,
                    n = e[0],
                    r = 1;
                  for (; r < e.length; ) {
                    const s = e[r],
                      i = e[r + 1];
                    if (((r += 2), ("optionalAccess" === s || "optionalCall" === s) && null == n)) return;
                    "access" === s || "optionalAccess" === s
                      ? ((t = n), (n = await i(n)))
                      : ("call" !== s && "optionalCall" !== s) || ((n = await i((...e) => n.call(t, ...e))), (t = undefined));
                  }
                  return n;
                });
            },
            {}
          ],
          103: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./_asyncOptionalChain.js");
              n._asyncOptionalChainDelete = async function (e) {
                const t = await r._asyncOptionalChain(e);
                return null == t || t;
              };
            },
            { "./_asyncOptionalChain.js": 102 }
          ],
          104: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n._createNamedExportFrom = function (e, t, r) {
                  n[t] = e[r];
                });
            },
            {}
          ],
          105: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n._createStarExport = function (e) {
                  Object.keys(e)
                    .filter((e) => "default" !== e && "__esModule" !== e && !(e in n))
                    .forEach((t) => (n[t] = e[t]));
                });
            },
            {}
          ],
          106: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n._interopDefault = function (e) {
                  return e.__esModule ? e.default : e;
                });
            },
            {}
          ],
          107: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n._interopNamespace = function (e) {
                  return e.__esModule ? e : { ...e, default: e };
                });
            },
            {}
          ],
          108: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n._interopNamespaceDefaultOnly = function (e) {
                  return { __proto__: null, default: e };
                });
            },
            {}
          ],
          109: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n._interopRequireDefault = function (e) {
                  return e.__esModule ? e : { default: e };
                });
            },
            {}
          ],
          110: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n._interopRequireWildcard = function (e) {
                  return e.__esModule ? e : { ...e, default: e };
                });
            },
            {}
          ],
          111: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n._nullishCoalesce = function (e, t) {
                  return null != e ? e : t();
                });
            },
            {}
          ],
          112: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n._optionalChain = function (e) {
                  let t = undefined,
                    n = e[0],
                    r = 1;
                  for (; r < e.length; ) {
                    const s = e[r],
                      i = e[r + 1];
                    if (((r += 2), ("optionalAccess" === s || "optionalCall" === s) && null == n)) return;
                    "access" === s || "optionalAccess" === s
                      ? ((t = n), (n = i(n)))
                      : ("call" !== s && "optionalCall" !== s) || ((n = i((...e) => n.call(t, ...e))), (t = undefined));
                  }
                  return n;
                });
            },
            {}
          ],
          113: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./_optionalChain.js");
              n._optionalChainDelete = function (e) {
                const t = r._optionalChain(e);
                return null == t || t;
              };
            },
            { "./_optionalChain.js": 112 }
          ],
          114: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./_asyncNullishCoalesce.js"),
                s = e("./_asyncOptionalChain.js"),
                i = e("./_asyncOptionalChainDelete.js"),
                o = e("./_createNamedExportFrom.js"),
                a = e("./_createStarExport.js"),
                c = e("./_interopDefault.js"),
                u = e("./_interopNamespace.js"),
                l = e("./_interopNamespaceDefaultOnly.js"),
                d = e("./_interopRequireDefault.js"),
                p = e("./_interopRequireWildcard.js"),
                f = e("./_nullishCoalesce.js"),
                _ = e("./_optionalChain.js"),
                h = e("./_optionalChainDelete.js");
              (n._asyncNullishCoalesce = r._asyncNullishCoalesce),
                (n._asyncOptionalChain = s._asyncOptionalChain),
                (n._asyncOptionalChainDelete = i._asyncOptionalChainDelete),
                (n._createNamedExportFrom = o._createNamedExportFrom),
                (n._createStarExport = a._createStarExport),
                (n._interopDefault = c._interopDefault),
                (n._interopNamespace = u._interopNamespace),
                (n._interopNamespaceDefaultOnly = l._interopNamespaceDefaultOnly),
                (n._interopRequireDefault = d._interopRequireDefault),
                (n._interopRequireWildcard = p._interopRequireWildcard),
                (n._nullishCoalesce = f._nullishCoalesce),
                (n._optionalChain = _._optionalChain),
                (n._optionalChainDelete = h._optionalChainDelete);
            },
            {
              "./_asyncNullishCoalesce.js": 101,
              "./_asyncOptionalChain.js": 102,
              "./_asyncOptionalChainDelete.js": 103,
              "./_createNamedExportFrom.js": 104,
              "./_createStarExport.js": 105,
              "./_interopDefault.js": 106,
              "./_interopNamespace.js": 107,
              "./_interopNamespaceDefaultOnly.js": 108,
              "./_interopRequireDefault.js": 109,
              "./_interopRequireWildcard.js": 110,
              "./_nullishCoalesce.js": 111,
              "./_optionalChain.js": 112,
              "./_optionalChainDelete.js": 113
            }
          ],
          115: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./envelope.js"),
                s = e("./time.js");
              n.createClientReportEnvelope = function (e, t, n) {
                const i = [{ type: "client_report" }, { timestamp: n || s.dateTimestampInSeconds(), discarded_events: e }];
                return r.createEnvelope(t ? { dsn: t } : {}, [i]);
              };
            },
            { "./envelope.js": 118, "./time.js": 139 }
          ],
          116: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./logger.js"),
                s = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
              function i(e) {
                const t = s.exec(e);
                if (!t) return console.error(`Invalid Sentry Dsn: ${e}`), undefined;
                const [n, r, i = "", a, c = "", u] = t.slice(1);
                let l = "",
                  d = u;
                const p = d.split("/");
                if ((p.length > 1 && ((l = p.slice(0, -1).join("/")), (d = p.pop())), d)) {
                  const e = d.match(/^\d+/);
                  e && (d = e[0]);
                }
                return o({ host: a, pass: i, path: l, projectId: d, port: c, protocol: n, publicKey: r });
              }
              function o(e) {
                return {
                  protocol: e.protocol,
                  publicKey: e.publicKey || "",
                  pass: e.pass || "",
                  host: e.host,
                  port: e.port || "",
                  path: e.path || "",
                  projectId: e.projectId
                };
              }
              (n.dsnFromString = i),
                (n.dsnToString = function (e, t = !1) {
                  const { host: n, path: r, pass: s, port: i, projectId: o, protocol: a, publicKey: c } = e;
                  return `${a}://${c}${t && s ? `:${s}` : ""}@${n}${i ? `:${i}` : ""}/${r ? `${r}/` : r}${o}`;
                }),
                (n.makeDsn = function (e) {
                  const t = "string" == typeof e ? i(e) : o(e);
                  return t &&
                    (function (e) {
                      if ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) return !0;
                      const { port: t, projectId: n, protocol: s } = e;
                      return !(
                        ["protocol", "publicKey", "host", "projectId"].find(
                          (t) => !e[t] && (r.logger.error(`Invalid Sentry Dsn: ${t} missing`), !0)
                        ) ||
                        (n.match(/^\d+$/)
                          ? (function (e) {
                              return "http" === e || "https" === e;
                            })(s)
                            ? t && isNaN(parseInt(t, 10)) && (r.logger.error(`Invalid Sentry Dsn: Invalid port ${t}`), 1)
                            : (r.logger.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), 1)
                          : (r.logger.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1))
                      );
                    })(t)
                    ? t
                    : undefined;
                });
            },
            { "./logger.js": 123 }
          ],
          117: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.getSDKSource = function () {
                  return "npm";
                }),
                (n.isBrowserBundle = function () {
                  return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__;
                });
            },
            {}
          ],
          118: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./dsn.js"),
                s = e("./normalize.js"),
                i = e("./object.js");
              function o(e, t) {
                const n = e[1];
                for (const e of n) {
                  if (t(e, e[0].type)) return !0;
                }
                return !1;
              }
              function a(e, t) {
                return (t || new TextEncoder()).encode(e);
              }
              const c = {
                session: "session",
                sessions: "session",
                attachment: "attachment",
                transaction: "transaction",
                event: "error",
                client_report: "internal",
                user_report: "default",
                profile: "profile",
                replay_event: "replay",
                replay_recording: "replay",
                check_in: "monitor"
              };
              (n.addItemToEnvelope = function (e, t) {
                const [n, r] = e;
                return [n, [...r, t]];
              }),
                (n.createAttachmentEnvelopeItem = function (e, t) {
                  const n = "string" == typeof e.data ? a(e.data, t) : e.data;
                  return [
                    i.dropUndefinedKeys({
                      type: "attachment",
                      length: n.length,
                      filename: e.filename,
                      content_type: e.contentType,
                      attachment_type: e.attachmentType
                    }),
                    n
                  ];
                }),
                (n.createEnvelope = function (e, t = []) {
                  return [e, t];
                }),
                (n.createEventEnvelopeHeaders = function (e, t, n, s) {
                  const o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                  return {
                    event_id: e.event_id,
                    sent_at: new Date().toISOString(),
                    ...(t && { sdk: t }),
                    ...(!!n && { dsn: r.dsnToString(s) }),
                    ...(o && { trace: i.dropUndefinedKeys({ ...o }) })
                  };
                }),
                (n.envelopeContainsItemType = function (e, t) {
                  return o(e, (e, n) => t.includes(n));
                }),
                (n.envelopeItemTypeToDataCategory = function (e) {
                  return c[e];
                }),
                (n.forEachEnvelopeItem = o),
                (n.getSdkMetadataForEnvelopeHeader = function (e) {
                  if (!e || !e.sdk) return;
                  const { name: t, version: n } = e.sdk;
                  return { name: t, version: n };
                }),
                (n.parseEnvelope = function (e, t, n) {
                  let r = "string" == typeof e ? t.encode(e) : e;
                  function s(e) {
                    const t = r.subarray(0, e);
                    return (r = r.subarray(e + 1)), t;
                  }
                  function i() {
                    let e = r.indexOf(10);
                    return e < 0 && (e = r.length), JSON.parse(n.decode(s(e)));
                  }
                  const o = i(),
                    a = [];
                  for (; r.length; ) {
                    const e = i(),
                      t = "number" == typeof e.length ? e.length : undefined;
                    a.push([e, t ? s(t) : i()]);
                  }
                  return [o, a];
                }),
                (n.serializeEnvelope = function (e, t) {
                  const [n, r] = e;
                  let i = JSON.stringify(n);
                  function o(e) {
                    "string" == typeof i ? (i = "string" == typeof e ? i + e : [a(i, t), e]) : i.push("string" == typeof e ? a(e, t) : e);
                  }
                  for (const e of r) {
                    const [t, n] = e;
                    if ((o(`\n${JSON.stringify(t)}\n`), "string" == typeof n || n instanceof Uint8Array)) o(n);
                    else {
                      let e;
                      try {
                        e = JSON.stringify(n);
                      } catch (t) {
                        e = JSON.stringify(s.normalize(n));
                      }
                      o(e);
                    }
                  }
                  return "string" == typeof i
                    ? i
                    : (function (e) {
                        const t = e.reduce((e, t) => e + t.length, 0),
                          n = new Uint8Array(t);
                        let r = 0;
                        for (const t of e) n.set(t, r), (r += t.length);
                        return n;
                      })(i);
                });
            },
            { "./dsn.js": 116, "./normalize.js": 128, "./object.js": 129 }
          ],
          119: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              class r extends Error {
                constructor(e, t = "warn") {
                  super(e),
                    (this.message = e),
                    (this.name = new.target.prototype.constructor.name),
                    Object.setPrototypeOf(this, new.target.prototype),
                    (this.logLevel = t);
                }
              }
              n.SentryError = r;
            },
            {}
          ],
          120: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./browser.js"),
                s = e("./dsn.js"),
                i = e("./error.js"),
                o = e("./worldwide.js"),
                a = e("./instrument.js"),
                c = e("./is.js"),
                u = e("./logger.js"),
                l = e("./memo.js"),
                d = e("./misc.js"),
                p = e("./node.js"),
                f = e("./normalize.js"),
                _ = e("./object.js"),
                h = e("./path.js"),
                m = e("./promisebuffer.js"),
                g = e("./requestdata.js"),
                y = e("./severity.js"),
                b = e("./stacktrace.js"),
                v = e("./string.js"),
                E = e("./supports.js"),
                S = e("./syncpromise.js"),
                w = e("./time.js"),
                T = e("./tracing.js"),
                k = e("./env.js"),
                R = e("./envelope.js"),
                x = e("./clientreport.js"),
                N = e("./ratelimit.js"),
                D = e("./baggage.js"),
                I = e("./url.js"),
                O = e("./userIntegrations.js"),
                C = e("./vendor/escapeStringForRegex.js"),
                j = e("./vendor/supportsHistory.js");
              (n.getDomElement = r.getDomElement),
                (n.getLocationHref = r.getLocationHref),
                (n.htmlTreeAsString = r.htmlTreeAsString),
                (n.dsnFromString = s.dsnFromString),
                (n.dsnToString = s.dsnToString),
                (n.makeDsn = s.makeDsn),
                (n.SentryError = i.SentryError),
                (n.GLOBAL_OBJ = o.GLOBAL_OBJ),
                (n.getGlobalObject = o.getGlobalObject),
                (n.getGlobalSingleton = o.getGlobalSingleton),
                (n.SENTRY_XHR_DATA_KEY = a.SENTRY_XHR_DATA_KEY),
                (n.addInstrumentationHandler = a.addInstrumentationHandler),
                (n.parseFetchArgs = a.parseFetchArgs),
                (n.isDOMError = c.isDOMError),
                (n.isDOMException = c.isDOMException),
                (n.isElement = c.isElement),
                (n.isError = c.isError),
                (n.isErrorEvent = c.isErrorEvent),
                (n.isEvent = c.isEvent),
                (n.isInstanceOf = c.isInstanceOf),
                (n.isNaN = c.isNaN),
                (n.isPlainObject = c.isPlainObject),
                (n.isPrimitive = c.isPrimitive),
                (n.isRegExp = c.isRegExp),
                (n.isString = c.isString),
                (n.isSyntheticEvent = c.isSyntheticEvent),
                (n.isThenable = c.isThenable),
                (n.CONSOLE_LEVELS = u.CONSOLE_LEVELS),
                (n.consoleSandbox = u.consoleSandbox),
                Object.defineProperty(n, "logger", { enumerable: !0, get: () => u.logger }),
                (n.memoBuilder = l.memoBuilder),
                (n.addContextToFrame = d.addContextToFrame),
                (n.addExceptionMechanism = d.addExceptionMechanism),
                (n.addExceptionTypeValue = d.addExceptionTypeValue),
                (n.arrayify = d.arrayify),
                (n.checkOrSetAlreadyCaught = d.checkOrSetAlreadyCaught),
                (n.getEventDescription = d.getEventDescription),
                (n.parseSemver = d.parseSemver),
                (n.uuid4 = d.uuid4),
                (n.dynamicRequire = p.dynamicRequire),
                (n.isNodeEnv = p.isNodeEnv),
                (n.loadModule = p.loadModule),
                (n.normalize = f.normalize),
                (n.normalizeToSize = f.normalizeToSize),
                (n.walk = f.walk),
                (n.addNonEnumerableProperty = _.addNonEnumerableProperty),
                (n.convertToPlainObject = _.convertToPlainObject),
                (n.dropUndefinedKeys = _.dropUndefinedKeys),
                (n.extractExceptionKeysForMessage = _.extractExceptionKeysForMessage),
                (n.fill = _.fill),
                (n.getOriginalFunction = _.getOriginalFunction),
                (n.markFunctionWrapped = _.markFunctionWrapped),
                (n.objectify = _.objectify),
                (n.urlEncode = _.urlEncode),
                (n.basename = h.basename),
                (n.dirname = h.dirname),
                (n.isAbsolute = h.isAbsolute),
                (n.join = h.join),
                (n.normalizePath = h.normalizePath),
                (n.relative = h.relative),
                (n.resolve = h.resolve),
                (n.makePromiseBuffer = m.makePromiseBuffer),
                (n.addRequestDataToEvent = g.addRequestDataToEvent),
                (n.addRequestDataToTransaction = g.addRequestDataToTransaction),
                (n.extractPathForTransaction = g.extractPathForTransaction),
                (n.extractRequestData = g.extractRequestData),
                (n.severityFromString = y.severityFromString),
                (n.severityLevelFromString = y.severityLevelFromString),
                (n.validSeverityLevels = y.validSeverityLevels),
                (n.createStackParser = b.createStackParser),
                (n.getFunctionName = b.getFunctionName),
                (n.nodeStackLineParser = b.nodeStackLineParser),
                (n.stackParserFromStackParserOptions = b.stackParserFromStackParserOptions),
                (n.stripSentryFramesAndReverse = b.stripSentryFramesAndReverse),
                (n.isMatchingPattern = v.isMatchingPattern),
                (n.safeJoin = v.safeJoin),
                (n.snipLine = v.snipLine),
                (n.stringMatchesSomePattern = v.stringMatchesSomePattern),
                (n.truncate = v.truncate),
                (n.isNativeFetch = E.isNativeFetch),
                (n.supportsDOMError = E.supportsDOMError),
                (n.supportsDOMException = E.supportsDOMException),
                (n.supportsErrorEvent = E.supportsErrorEvent),
                (n.supportsFetch = E.supportsFetch),
                (n.supportsNativeFetch = E.supportsNativeFetch),
                (n.supportsReferrerPolicy = E.supportsReferrerPolicy),
                (n.supportsReportingObserver = E.supportsReportingObserver),
                (n.SyncPromise = S.SyncPromise),
                (n.rejectedSyncPromise = S.rejectedSyncPromise),
                (n.resolvedSyncPromise = S.resolvedSyncPromise),
                Object.defineProperty(n, "_browserPerformanceTimeOriginMode", {
                  enumerable: !0,
                  get: () => w._browserPerformanceTimeOriginMode
                }),
                (n.browserPerformanceTimeOrigin = w.browserPerformanceTimeOrigin),
                (n.dateTimestampInSeconds = w.dateTimestampInSeconds),
                (n.timestampInSeconds = w.timestampInSeconds),
                (n.timestampWithMs = w.timestampWithMs),
                (n.usingPerformanceAPI = w.usingPerformanceAPI),
                (n.TRACEPARENT_REGEXP = T.TRACEPARENT_REGEXP),
                (n.extractTraceparentData = T.extractTraceparentData),
                (n.getSDKSource = k.getSDKSource),
                (n.isBrowserBundle = k.isBrowserBundle),
                (n.addItemToEnvelope = R.addItemToEnvelope),
                (n.createAttachmentEnvelopeItem = R.createAttachmentEnvelopeItem),
                (n.createEnvelope = R.createEnvelope),
                (n.createEventEnvelopeHeaders = R.createEventEnvelopeHeaders),
                (n.envelopeContainsItemType = R.envelopeContainsItemType),
                (n.envelopeItemTypeToDataCategory = R.envelopeItemTypeToDataCategory),
                (n.forEachEnvelopeItem = R.forEachEnvelopeItem),
                (n.getSdkMetadataForEnvelopeHeader = R.getSdkMetadataForEnvelopeHeader),
                (n.parseEnvelope = R.parseEnvelope),
                (n.serializeEnvelope = R.serializeEnvelope),
                (n.createClientReportEnvelope = x.createClientReportEnvelope),
                (n.DEFAULT_RETRY_AFTER = N.DEFAULT_RETRY_AFTER),
                (n.disabledUntil = N.disabledUntil),
                (n.isRateLimited = N.isRateLimited),
                (n.parseRetryAfterHeader = N.parseRetryAfterHeader),
                (n.updateRateLimits = N.updateRateLimits),
                (n.BAGGAGE_HEADER_NAME = D.BAGGAGE_HEADER_NAME),
                (n.MAX_BAGGAGE_STRING_LENGTH = D.MAX_BAGGAGE_STRING_LENGTH),
                (n.SENTRY_BAGGAGE_KEY_PREFIX = D.SENTRY_BAGGAGE_KEY_PREFIX),
                (n.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = D.SENTRY_BAGGAGE_KEY_PREFIX_REGEX),
                (n.baggageHeaderToDynamicSamplingContext = D.baggageHeaderToDynamicSamplingContext),
                (n.dynamicSamplingContextToSentryBaggageHeader = D.dynamicSamplingContextToSentryBaggageHeader),
                (n.getNumberOfUrlSegments = I.getNumberOfUrlSegments),
                (n.getSanitizedUrlString = I.getSanitizedUrlString),
                (n.parseUrl = I.parseUrl),
                (n.stripUrlQueryAndFragment = I.stripUrlQueryAndFragment),
                (n.addOrUpdateIntegration = O.addOrUpdateIntegration),
                (n.escapeStringForRegex = C.escapeStringForRegex),
                (n.supportsHistory = j.supportsHistory);
            },
            {
              "./baggage.js": 99,
              "./browser.js": 100,
              "./clientreport.js": 115,
              "./dsn.js": 116,
              "./env.js": 117,
              "./envelope.js": 118,
              "./error.js": 119,
              "./instrument.js": 121,
              "./is.js": 122,
              "./logger.js": 123,
              "./memo.js": 124,
              "./misc.js": 125,
              "./node.js": 127,
              "./normalize.js": 128,
              "./object.js": 129,
              "./path.js": 130,
              "./promisebuffer.js": 131,
              "./ratelimit.js": 132,
              "./requestdata.js": 133,
              "./severity.js": 134,
              "./stacktrace.js": 135,
              "./string.js": 136,
              "./supports.js": 137,
              "./syncpromise.js": 138,
              "./time.js": 139,
              "./tracing.js": 140,
              "./url.js": 141,
              "./userIntegrations.js": 142,
              "./vendor/escapeStringForRegex.js": 143,
              "./vendor/supportsHistory.js": 144,
              "./worldwide.js": 145
            }
          ],
          121: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./is.js"),
                s = e("./logger.js"),
                i = e("./object.js"),
                o = e("./stacktrace.js"),
                a = e("./supports.js"),
                c = e("./worldwide.js"),
                u = e("./vendor/supportsHistory.js"),
                l = c.getGlobalObject(),
                d = "__sentry_xhr_v2__",
                p = {},
                f = {};
              function _(e) {
                if (!f[e])
                  switch (((f[e] = !0), e)) {
                    case "console":
                      !(function () {
                        if (!("console" in l)) return;
                        s.CONSOLE_LEVELS.forEach(function (e) {
                          e in l.console &&
                            i.fill(l.console, e, function (t) {
                              return function (...n) {
                                h("console", { args: n, level: e }), t && t.apply(l.console, n);
                              };
                            });
                        });
                      })();
                      break;
                    case "dom":
                      !(function () {
                        if (!("document" in l)) return;
                        const e = h.bind(null, "dom"),
                          t = w(e, !0);
                        l.document.addEventListener("click", t, !1),
                          l.document.addEventListener("keypress", t, !1),
                          ["EventTarget", "Node"].forEach((t) => {
                            const n = l[t] && l[t].prototype;
                            n &&
                              n.hasOwnProperty &&
                              n.hasOwnProperty("addEventListener") &&
                              (i.fill(n, "addEventListener", function (t) {
                                return function (n, r, s) {
                                  if ("click" === n || "keypress" == n)
                                    try {
                                      const r = this,
                                        i = (r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}),
                                        o = (i[n] = i[n] || { refCount: 0 });
                                      if (!o.handler) {
                                        const r = w(e);
                                        (o.handler = r), t.call(this, n, r, s);
                                      }
                                      o.refCount++;
                                    } catch (e) {}
                                  return t.call(this, n, r, s);
                                };
                              }),
                              i.fill(n, "removeEventListener", function (e) {
                                return function (t, n, r) {
                                  if ("click" === t || "keypress" == t)
                                    try {
                                      const n = this,
                                        s = n.__sentry_instrumentation_handlers__ || {},
                                        i = s[t];
                                      i &&
                                        (i.refCount--,
                                        i.refCount <= 0 && (e.call(this, t, i.handler, r), (i.handler = undefined), delete s[t]),
                                        0 === Object.keys(s).length && delete n.__sentry_instrumentation_handlers__);
                                    } catch (e) {}
                                  return e.call(this, t, n, r);
                                };
                              }));
                          });
                      })();
                      break;
                    case "xhr":
                      !(function () {
                        if (!("XMLHttpRequest" in l)) return;
                        const e = XMLHttpRequest.prototype;
                        i.fill(e, "open", function (e) {
                          return function (...t) {
                            const n = t[1],
                              s = (this[d] = { method: r.isString(t[0]) ? t[0].toUpperCase() : t[0], url: t[1], request_headers: {} });
                            r.isString(n) && "POST" === s.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                            const o = () => {
                              const e = this[d];
                              if (e && 4 === this.readyState) {
                                try {
                                  e.status_code = this.status;
                                } catch (e) {}
                                h("xhr", { args: t, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: this });
                              }
                            };
                            return (
                              "onreadystatechange" in this && "function" == typeof this.onreadystatechange
                                ? i.fill(this, "onreadystatechange", function (e) {
                                    return function (...t) {
                                      return o(), e.apply(this, t);
                                    };
                                  })
                                : this.addEventListener("readystatechange", o),
                              i.fill(this, "setRequestHeader", function (e) {
                                return function (...t) {
                                  const [n, r] = t,
                                    s = this[d];
                                  return s && (s.request_headers[n.toLowerCase()] = r), e.apply(this, t);
                                };
                              }),
                              e.apply(this, t)
                            );
                          };
                        }),
                          i.fill(e, "send", function (e) {
                            return function (...t) {
                              const n = this[d];
                              return (
                                n && t[0] !== undefined && (n.body = t[0]),
                                h("xhr", { args: t, startTimestamp: Date.now(), xhr: this }),
                                e.apply(this, t)
                              );
                            };
                          });
                      })();
                      break;
                    case "fetch":
                      !(function () {
                        if (!a.supportsNativeFetch()) return;
                        i.fill(l, "fetch", function (e) {
                          return function (...t) {
                            const { method: n, url: r } = y(t),
                              s = { args: t, fetchData: { method: n, url: r }, startTimestamp: Date.now() };
                            return (
                              h("fetch", { ...s }),
                              e.apply(l, t).then(
                                (e) => (h("fetch", { ...s, endTimestamp: Date.now(), response: e }), e),
                                (e) => {
                                  throw (h("fetch", { ...s, endTimestamp: Date.now(), error: e }), e);
                                }
                              )
                            );
                          };
                        });
                      })();
                      break;
                    case "history":
                      !(function () {
                        if (!u.supportsHistory()) return;
                        const e = l.onpopstate;
                        function t(e) {
                          return function (...t) {
                            const n = t.length > 2 ? t[2] : undefined;
                            if (n) {
                              const e = b,
                                t = String(n);
                              (b = t), h("history", { from: e, to: t });
                            }
                            return e.apply(this, t);
                          };
                        }
                        (l.onpopstate = function (...t) {
                          const n = l.location.href,
                            r = b;
                          if (((b = n), h("history", { from: r, to: n }), e))
                            try {
                              return e.apply(this, t);
                            } catch (e) {}
                        }),
                          i.fill(l.history, "pushState", t),
                          i.fill(l.history, "replaceState", t);
                      })();
                      break;
                    case "error":
                      (T = l.onerror),
                        (l.onerror = function (e, t, n, r, s) {
                          return (
                            h("error", { column: r, error: s, line: n, msg: e, url: t }),
                            !(!T || T.__SENTRY_LOADER__) && T.apply(this, arguments)
                          );
                        }),
                        (l.onerror.__SENTRY_INSTRUMENTED__ = !0);
                      break;
                    case "unhandledrejection":
                      (k = l.onunhandledrejection),
                        (l.onunhandledrejection = function (e) {
                          return h("unhandledrejection", e), !(k && !k.__SENTRY_LOADER__) || k.apply(this, arguments);
                        }),
                        (l.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
                      break;
                    default:
                      return void (
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.warn("unknown instrumentation type:", e)
                      );
                  }
              }
              function h(e, t) {
                if (e && p[e])
                  for (const n of p[e] || [])
                    try {
                      n(t);
                    } catch (t) {
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        s.logger.error(
                          `Error while triggering instrumentation handler.\nType: ${e}\nName: ${o.getFunctionName(n)}\nError:`,
                          t
                        );
                    }
              }
              function m(e, t) {
                return !!e && "object" == typeof e && !!e[t];
              }
              function g(e) {
                return "string" == typeof e ? e : e ? (m(e, "url") ? e.url : e.toString ? e.toString() : "") : "";
              }
              function y(e) {
                if (0 === e.length) return { method: "GET", url: "" };
                if (2 === e.length) {
                  const [t, n] = e;
                  return { url: g(t), method: m(n, "method") ? String(n.method).toUpperCase() : "GET" };
                }
                const t = e[0];
                return { url: g(t), method: m(t, "method") ? String(t.method).toUpperCase() : "GET" };
              }
              let b;
              const v = 1e3;
              let E, S;
              function w(e, t = !1) {
                return (n) => {
                  if (!n || S === n) return;
                  if (
                    (function (e) {
                      if ("keypress" !== e.type) return !1;
                      try {
                        const t = e.target;
                        if (!t || !t.tagName) return !0;
                        if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return !1;
                      } catch (e) {}
                      return !0;
                    })(n)
                  )
                    return;
                  const r = "keypress" === n.type ? "input" : n.type;
                  (E === undefined ||
                    (function (e, t) {
                      if (!e) return !0;
                      if (e.type !== t.type) return !0;
                      try {
                        if (e.target !== t.target) return !0;
                      } catch (e) {}
                      return !1;
                    })(S, n)) &&
                    (e({ event: n, name: r, global: t }), (S = n)),
                    clearTimeout(E),
                    (E = l.setTimeout(() => {
                      E = undefined;
                    }, v));
                };
              }
              let T = null;
              let k = null;
              (n.SENTRY_XHR_DATA_KEY = d),
                (n.addInstrumentationHandler = function (e, t) {
                  (p[e] = p[e] || []), p[e].push(t), _(e);
                }),
                (n.parseFetchArgs = y);
            },
            {
              "./is.js": 122,
              "./logger.js": 123,
              "./object.js": 129,
              "./stacktrace.js": 135,
              "./supports.js": 137,
              "./vendor/supportsHistory.js": 144,
              "./worldwide.js": 145
            }
          ],
          122: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = Object.prototype.toString;
              function s(e, t) {
                return r.call(e) === `[object ${t}]`;
              }
              function i(e) {
                return s(e, "Object");
              }
              function o(e, t) {
                try {
                  return e instanceof t;
                } catch (e) {
                  return !1;
                }
              }
              (n.isDOMError = function (e) {
                return s(e, "DOMError");
              }),
                (n.isDOMException = function (e) {
                  return s(e, "DOMException");
                }),
                (n.isElement = function (e) {
                  return "undefined" != typeof Element && o(e, Element);
                }),
                (n.isError = function (e) {
                  switch (r.call(e)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                      return !0;
                    default:
                      return o(e, Error);
                  }
                }),
                (n.isErrorEvent = function (e) {
                  return s(e, "ErrorEvent");
                }),
                (n.isEvent = function (e) {
                  return "undefined" != typeof Event && o(e, Event);
                }),
                (n.isInstanceOf = o),
                (n.isNaN = function (e) {
                  return "number" == typeof e && e != e;
                }),
                (n.isPlainObject = i),
                (n.isPrimitive = function (e) {
                  return null === e || ("object" != typeof e && "function" != typeof e);
                }),
                (n.isRegExp = function (e) {
                  return s(e, "RegExp");
                }),
                (n.isString = function (e) {
                  return s(e, "String");
                }),
                (n.isSyntheticEvent = function (e) {
                  return i(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
                }),
                (n.isThenable = function (e) {
                  return Boolean(e && e.then && "function" == typeof e.then);
                });
            },
            {}
          ],
          123: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./worldwide.js"),
                s = ["debug", "info", "warn", "error", "log", "assert", "trace"];
              function i(e) {
                if (!("console" in r.GLOBAL_OBJ)) return e();
                const t = r.GLOBAL_OBJ.console,
                  n = {};
                s.forEach((e) => {
                  const r = t[e] && t[e].__sentry_original__;
                  e in t && r && ((n[e] = t[e]), (t[e] = r));
                });
                try {
                  return e();
                } finally {
                  Object.keys(n).forEach((e) => {
                    t[e] = n[e];
                  });
                }
              }
              function o() {
                let e = !1;
                const t = {
                  enable: () => {
                    e = !0;
                  },
                  disable: () => {
                    e = !1;
                  }
                };
                return (
                  "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
                    ? s.forEach((n) => {
                        t[n] = (...t) => {
                          e &&
                            i(() => {
                              r.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...t);
                            });
                        };
                      })
                    : s.forEach((e) => {
                        t[e] = () => undefined;
                      }),
                  t
                );
              }
              (n.logger = void 0),
                "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
                  ? (n.logger = r.getGlobalSingleton("logger", o))
                  : (n.logger = o()),
                (n.CONSOLE_LEVELS = s),
                (n.consoleSandbox = i);
            },
            { "./worldwide.js": 145 }
          ],
          124: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.memoBuilder = function () {
                  const e = "function" == typeof WeakSet,
                    t = e ? new WeakSet() : [];
                  return [
                    function (n) {
                      if (e) return !!t.has(n) || (t.add(n), !1);
                      for (let e = 0; e < t.length; e++) {
                        if (t[e] === n) return !0;
                      }
                      return t.push(n), !1;
                    },
                    function (n) {
                      if (e) t.delete(n);
                      else
                        for (let e = 0; e < t.length; e++)
                          if (t[e] === n) {
                            t.splice(e, 1);
                            break;
                          }
                    }
                  ];
                });
            },
            {}
          ],
          125: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./object.js"),
                s = e("./string.js"),
                i = e("./worldwide.js");
              function o(e) {
                return e.exception && e.exception.values ? e.exception.values[0] : undefined;
              }
              const a =
                /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
              (n.addContextToFrame = function (e, t, n = 5) {
                if (t.lineno === undefined) return;
                const r = e.length,
                  i = Math.max(Math.min(r, t.lineno - 1), 0);
                (t.pre_context = e.slice(Math.max(0, i - n), i).map((e) => s.snipLine(e, 0))),
                  (t.context_line = s.snipLine(e[Math.min(r - 1, i)], t.colno || 0)),
                  (t.post_context = e.slice(Math.min(i + 1, r), i + 1 + n).map((e) => s.snipLine(e, 0)));
              }),
                (n.addExceptionMechanism = function (e, t) {
                  const n = o(e);
                  if (!n) return;
                  const r = n.mechanism;
                  if (((n.mechanism = { type: "generic", handled: !0, ...r, ...t }), t && "data" in t)) {
                    const e = { ...(r && r.data), ...t.data };
                    n.mechanism.data = e;
                  }
                }),
                (n.addExceptionTypeValue = function (e, t, n) {
                  const r = (e.exception = e.exception || {}),
                    s = (r.values = r.values || []),
                    i = (s[0] = s[0] || {});
                  i.value || (i.value = t || ""), i.type || (i.type = n || "Error");
                }),
                (n.arrayify = function (e) {
                  return Array.isArray(e) ? e : [e];
                }),
                (n.checkOrSetAlreadyCaught = function (e) {
                  if (e && e.__sentry_captured__) return !0;
                  try {
                    r.addNonEnumerableProperty(e, "__sentry_captured__", !0);
                  } catch (e) {}
                  return !1;
                }),
                (n.getEventDescription = function (e) {
                  const { message: t, event_id: n } = e;
                  if (t) return t;
                  const r = o(e);
                  return r ? (r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>") : n || "<unknown>";
                }),
                (n.parseSemver = function (e) {
                  const t = e.match(a) || [],
                    n = parseInt(t[1], 10),
                    r = parseInt(t[2], 10),
                    s = parseInt(t[3], 10);
                  return {
                    buildmetadata: t[5],
                    major: isNaN(n) ? undefined : n,
                    minor: isNaN(r) ? undefined : r,
                    patch: isNaN(s) ? undefined : s,
                    prerelease: t[4]
                  };
                }),
                (n.uuid4 = function () {
                  const e = i.GLOBAL_OBJ,
                    t = e.crypto || e.msCrypto;
                  if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
                  const n = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
                  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e) => (e ^ ((15 & n()) >> (e / 4))).toString(16));
                });
            },
            { "./object.js": 129, "./string.js": 136, "./worldwide.js": 145 }
          ],
          126: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.node = function (e) {
                  const t = /^\s*[-]{4,}$/,
                    n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
                  return (r) => {
                    const s = r.match(n);
                    if (s) {
                      let t, n, r, i, o;
                      if (s[1]) {
                        r = s[1];
                        let e = r.lastIndexOf(".");
                        if (("." === r[e - 1] && e--, e > 0)) {
                          (t = r.slice(0, e)), (n = r.slice(e + 1));
                          const s = t.indexOf(".Module");
                          s > 0 && ((r = r.slice(s + 1)), (t = t.slice(0, s)));
                        }
                        i = undefined;
                      }
                      n && ((i = t), (o = n)),
                        "<anonymous>" === n && ((o = undefined), (r = undefined)),
                        r === undefined && ((o = o || "<anonymous>"), (r = i ? `${i}.${o}` : o));
                      let a = s[2] && s[2].startsWith("file://") ? s[2].slice(7) : s[2];
                      const c = "native" === s[5];
                      a || !s[5] || c || (a = s[5]);
                      const u =
                        !(
                          c ||
                          (a &&
                            !a.startsWith("/") &&
                            !a.includes(":\\") &&
                            !a.startsWith(".") &&
                            !a.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))
                        ) &&
                        a !== undefined &&
                        !a.includes("node_modules/");
                      return {
                        filename: a,
                        module: e ? e(a) : undefined,
                        function: r,
                        lineno: parseInt(s[3], 10) || undefined,
                        colno: parseInt(s[4], 10) || undefined,
                        in_app: u
                      };
                    }
                    return r.match(t) ? { filename: r } : undefined;
                  };
                });
            },
            {}
          ],
          127: [
            function (e, t, n) {
              (function (r) {
                (function () {
                  Object.defineProperty(n, "__esModule", { value: !0 });
                  const s = e("./env.js");
                  function i(e, t) {
                    return e.require(t);
                  }
                  (n.dynamicRequire = i),
                    (n.isNodeEnv = function () {
                      return !s.isBrowserBundle() && "[object process]" === Object.prototype.toString.call(void 0 !== r ? r : 0);
                    }),
                    (n.loadModule = function (e) {
                      let n;
                      try {
                        n = i(t, e);
                      } catch (e) {}
                      try {
                        const { cwd: r } = i(t, "process");
                        n = i(t, `${r()}/node_modules/${e}`);
                      } catch (e) {}
                      return n;
                    });
                }).call(this);
              }).call(this, e("_process"));
            },
            { "./env.js": 117, _process: 147 }
          ],
          128: [
            function (e, t, n) {
              (function (t) {
                (function () {
                  Object.defineProperty(n, "__esModule", { value: !0 });
                  const r = e("./is.js"),
                    s = e("./memo.js"),
                    i = e("./object.js"),
                    o = e("./stacktrace.js");
                  function a(e, t = 100, n = +Infinity) {
                    try {
                      return c("", e, t, n);
                    } catch (e) {
                      return { ERROR: `**non-serializable** (${e})` };
                    }
                  }
                  function c(e, n, a = +Infinity, u = +Infinity, l = s.memoBuilder()) {
                    const [d, p] = l;
                    if (null == n || (["number", "boolean", "string"].includes(typeof n) && !r.isNaN(n))) return n;
                    const f = (function (e, n) {
                      try {
                        if ("domain" === e && n && "object" == typeof n && n._events) return "[Domain]";
                        if ("domainEmitter" === e) return "[DomainEmitter]";
                        if (void 0 !== t && n === t) return "[Global]";
                        if ("undefined" != typeof window && n === window) return "[Window]";
                        if ("undefined" != typeof document && n === document) return "[Document]";
                        if (r.isSyntheticEvent(n)) return "[SyntheticEvent]";
                        if ("number" == typeof n && n != n) return "[NaN]";
                        if ("function" == typeof n) return `[Function: ${o.getFunctionName(n)}]`;
                        if ("symbol" == typeof n) return `[${String(n)}]`;
                        if ("bigint" == typeof n) return `[BigInt: ${String(n)}]`;
                        const s = (function (e) {
                          const t = Object.getPrototypeOf(e);
                          return t ? t.constructor.name : "null prototype";
                        })(n);
                        return /^HTML(\w*)Element$/.test(s) ? `[HTMLElement: ${s}]` : `[object ${s}]`;
                      } catch (e) {
                        return `**non-serializable** (${e})`;
                      }
                    })(e, n);
                    if (!f.startsWith("[object ")) return f;
                    if (n.__sentry_skip_normalization__) return n;
                    const _ = "number" == typeof n.__sentry_override_normalization_depth__ ? n.__sentry_override_normalization_depth__ : a;
                    if (0 === _) return f.replace("object ", "");
                    if (d(n)) return "[Circular ~]";
                    const h = n;
                    if (h && "function" == typeof h.toJSON)
                      try {
                        return c("", h.toJSON(), _ - 1, u, l);
                      } catch (e) {}
                    const m = Array.isArray(n) ? [] : {};
                    let g = 0;
                    const y = i.convertToPlainObject(n);
                    for (const e in y) {
                      if (!Object.prototype.hasOwnProperty.call(y, e)) continue;
                      if (g >= u) {
                        m[e] = "[MaxProperties ~]";
                        break;
                      }
                      const t = y[e];
                      (m[e] = c(e, t, _ - 1, u, l)), g++;
                    }
                    return p(n), m;
                  }
                  (n.normalize = a),
                    (n.normalizeToSize = function e(t, n = 3, r = 102400) {
                      const s = a(t, n);
                      return (
                        (i = s),
                        (function (e) {
                          return ~-encodeURI(e).split(/%..|./).length;
                        })(JSON.stringify(i)) > r
                          ? e(t, n - 1, r)
                          : s
                      );
                      var i;
                    }),
                    (n.walk = c);
                }).call(this);
              }).call(
                this,
                "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
              );
            },
            { "./is.js": 122, "./memo.js": 124, "./object.js": 129, "./stacktrace.js": 135 }
          ],
          129: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./browser.js"),
                s = e("./is.js"),
                i = e("./string.js");
              function o(e, t, n) {
                Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
              }
              function a(e, t) {
                const n = t.prototype || {};
                (e.prototype = t.prototype = n), o(e, "__sentry_original__", t);
              }
              function c(e) {
                if (s.isError(e)) return { message: e.message, name: e.name, stack: e.stack, ...l(e) };
                if (s.isEvent(e)) {
                  const t = { type: e.type, target: u(e.target), currentTarget: u(e.currentTarget), ...l(e) };
                  return "undefined" != typeof CustomEvent && s.isInstanceOf(e, CustomEvent) && (t.detail = e.detail), t;
                }
                return e;
              }
              function u(e) {
                try {
                  return s.isElement(e) ? r.htmlTreeAsString(e) : Object.prototype.toString.call(e);
                } catch (e) {
                  return "<unknown>";
                }
              }
              function l(e) {
                if ("object" == typeof e && null !== e) {
                  const t = {};
                  for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                  return t;
                }
                return {};
              }
              function d(e, t) {
                if (s.isPlainObject(e)) {
                  const n = t.get(e);
                  if (n !== undefined) return n;
                  const r = {};
                  t.set(e, r);
                  for (const n of Object.keys(e)) void 0 !== e[n] && (r[n] = d(e[n], t));
                  return r;
                }
                if (Array.isArray(e)) {
                  const n = t.get(e);
                  if (n !== undefined) return n;
                  const r = [];
                  return (
                    t.set(e, r),
                    e.forEach((e) => {
                      r.push(d(e, t));
                    }),
                    r
                  );
                }
                return e;
              }
              (n.addNonEnumerableProperty = o),
                (n.convertToPlainObject = c),
                (n.dropUndefinedKeys = function (e) {
                  return d(e, new Map());
                }),
                (n.extractExceptionKeysForMessage = function (e, t = 40) {
                  const n = Object.keys(c(e));
                  if ((n.sort(), !n.length)) return "[object has no keys]";
                  if (n[0].length >= t) return i.truncate(n[0], t);
                  for (let e = n.length; e > 0; e--) {
                    const r = n.slice(0, e).join(", ");
                    if (!(r.length > t)) return e === n.length ? r : i.truncate(r, t);
                  }
                  return "";
                }),
                (n.fill = function (e, t, n) {
                  if (!(t in e)) return;
                  const r = e[t],
                    s = n(r);
                  if ("function" == typeof s)
                    try {
                      a(s, r);
                    } catch (e) {}
                  e[t] = s;
                }),
                (n.getOriginalFunction = function (e) {
                  return e.__sentry_original__;
                }),
                (n.markFunctionWrapped = a),
                (n.objectify = function (e) {
                  let t;
                  switch (!0) {
                    case e === undefined || null === e:
                      t = new String(e);
                      break;
                    case "symbol" == typeof e || "bigint" == typeof e:
                      t = Object(e);
                      break;
                    case s.isPrimitive(e):
                      t = new e.constructor(e);
                      break;
                    default:
                      t = e;
                  }
                  return t;
                }),
                (n.urlEncode = function (e) {
                  return Object.keys(e)
                    .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
                    .join("&");
                });
            },
            { "./browser.js": 100, "./is.js": 122, "./string.js": 136 }
          ],
          130: [
            function (e, t, n) {
              function r(e, t) {
                let n = 0;
                for (let t = e.length - 1; t >= 0; t--) {
                  const r = e[t];
                  "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--);
                }
                if (t) for (; n--; n) e.unshift("..");
                return e;
              }
              Object.defineProperty(n, "__esModule", { value: !0 });
              const s = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
              function i(e) {
                const t = s.exec(e);
                return t ? t.slice(1) : [];
              }
              function o(...e) {
                let t = "",
                  n = !1;
                for (let r = e.length - 1; r >= -1 && !n; r--) {
                  const s = r >= 0 ? e[r] : "/";
                  s && ((t = `${s}/${t}`), (n = "/" === s.charAt(0)));
                }
                return (
                  (t = r(
                    t.split("/").filter((e) => !!e),
                    !n
                  ).join("/")),
                  (n ? "/" : "") + t || "."
                );
              }
              function a(e) {
                let t = 0;
                for (; t < e.length && "" === e[t]; t++);
                let n = e.length - 1;
                for (; n >= 0 && "" === e[n]; n--);
                return t > n ? [] : e.slice(t, n - t + 1);
              }
              function c(e) {
                const t = u(e),
                  n = "/" === e.slice(-1);
                let s = r(
                  e.split("/").filter((e) => !!e),
                  !t
                ).join("/");
                return s || t || (s = "."), s && n && (s += "/"), (t ? "/" : "") + s;
              }
              function u(e) {
                return "/" === e.charAt(0);
              }
              (n.basename = function (e, t) {
                let n = i(e)[2];
                return t && n.slice(-1 * t.length) === t && (n = n.slice(0, n.length - t.length)), n;
              }),
                (n.dirname = function (e) {
                  const t = i(e),
                    n = t[0];
                  let r = t[1];
                  return n || r ? (r && (r = r.slice(0, r.length - 1)), n + r) : ".";
                }),
                (n.isAbsolute = u),
                (n.join = function (...e) {
                  return c(e.join("/"));
                }),
                (n.normalizePath = c),
                (n.relative = function (e, t) {
                  (e = o(e).slice(1)), (t = o(t).slice(1));
                  const n = a(e.split("/")),
                    r = a(t.split("/")),
                    s = Math.min(n.length, r.length);
                  let i = s;
                  for (let e = 0; e < s; e++)
                    if (n[e] !== r[e]) {
                      i = e;
                      break;
                    }
                  let c = [];
                  for (let e = i; e < n.length; e++) c.push("..");
                  return (c = c.concat(r.slice(i))), c.join("/");
                }),
                (n.resolve = o);
            },
            {}
          ],
          131: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./error.js"),
                s = e("./syncpromise.js");
              n.makePromiseBuffer = function (e) {
                const t = [];
                function n(e) {
                  return t.splice(t.indexOf(e), 1)[0];
                }
                return {
                  $: t,
                  add: function (i) {
                    if (!(e === undefined || t.length < e))
                      return s.rejectedSyncPromise(new r.SentryError("Not adding Promise because buffer limit was reached."));
                    const o = i();
                    return -1 === t.indexOf(o) && t.push(o), o.then(() => n(o)).then(null, () => n(o).then(null, () => {})), o;
                  },
                  drain: function (e) {
                    return new s.SyncPromise((n, r) => {
                      let i = t.length;
                      if (!i) return n(!0);
                      const o = setTimeout(() => {
                        e && e > 0 && n(!1);
                      }, e);
                      t.forEach((e) => {
                        s.resolvedSyncPromise(e).then(() => {
                          --i || (clearTimeout(o), n(!0));
                        }, r);
                      });
                    });
                  }
                };
              };
            },
            { "./error.js": 119, "./syncpromise.js": 138 }
          ],
          132: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = 6e4;
              function s(e, t = Date.now()) {
                const n = parseInt(`${e}`, 10);
                if (!isNaN(n)) return 1e3 * n;
                const s = Date.parse(`${e}`);
                return isNaN(s) ? r : s - t;
              }
              function i(e, t) {
                return e[t] || e.all || 0;
              }
              (n.DEFAULT_RETRY_AFTER = r),
                (n.disabledUntil = i),
                (n.isRateLimited = function (e, t, n = Date.now()) {
                  return i(e, t) > n;
                }),
                (n.parseRetryAfterHeader = s),
                (n.updateRateLimits = function (e, { statusCode: t, headers: n }, r = Date.now()) {
                  const i = { ...e },
                    o = n && n["x-sentry-rate-limits"],
                    a = n && n["retry-after"];
                  if (o)
                    for (const e of o.trim().split(",")) {
                      const [t, n] = e.split(":", 2),
                        s = parseInt(t, 10),
                        o = 1e3 * (isNaN(s) ? 60 : s);
                      if (n) for (const e of n.split(";")) i[e] = r + o;
                      else i.all = r + o;
                    }
                  else a ? (i.all = r + s(a, r)) : 429 === t && (i.all = r + 6e4);
                  return i;
                });
            },
            {}
          ],
          133: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./is.js"),
                s = e("./normalize.js"),
                i = e("./url.js"),
                o = { ip: !1, request: !0, transaction: !0, user: !0 },
                a = ["cookies", "data", "headers", "method", "query_string", "url"],
                c = ["id", "username", "email"];
              function u(e, t = {}) {
                const n = e.method && e.method.toUpperCase();
                let r = "",
                  s = "url";
                t.customRoute || e.route
                  ? ((r = t.customRoute || `${e.baseUrl || ""}${e.route && e.route.path}`), (s = "route"))
                  : (e.originalUrl || e.url) && (r = i.stripUrlQueryAndFragment(e.originalUrl || e.url || ""));
                let o = "";
                return t.method && n && (o += n), t.method && t.path && (o += " "), t.path && r && (o += r), [o, s];
              }
              function l(e, t) {
                const { include: n = a, deps: i } = t || {},
                  o = {},
                  c = e.headers || {},
                  u = e.method,
                  l = e.hostname || e.host || c.host || "<no host>",
                  p = `${"https" === e.protocol || (e.socket && e.socket.encrypted) ? "https" : "http"}://${l}${
                    e.originalUrl || e.url || ""
                  }`;
                return (
                  n.forEach((t) => {
                    switch (t) {
                      case "headers":
                        o.headers = c;
                        break;
                      case "method":
                        o.method = u;
                        break;
                      case "url":
                        o.url = p;
                        break;
                      case "cookies":
                        o.cookies = e.cookies || (c.cookie && i && i.cookie && i.cookie.parse(c.cookie)) || {};
                        break;
                      case "query_string":
                        o.query_string = d(e, i);
                        break;
                      case "data":
                        if ("GET" === u || "HEAD" === u) break;
                        e.body !== undefined && (o.data = r.isString(e.body) ? e.body : JSON.stringify(s.normalize(e.body)));
                        break;
                      default:
                        ({}).hasOwnProperty.call(e, t) && (o[t] = e[t]);
                    }
                  }),
                  o
                );
              }
              function d(e, t) {
                let n = e.originalUrl || e.url || "";
                if (n)
                  return (
                    n.startsWith("/") && (n = `http://dogs.are.great${n}`),
                    e.query ||
                      (typeof URL !== undefined && new URL(n).search.replace("?", "")) ||
                      (t && t.url && t.url.parse(n).query) ||
                      undefined
                  );
              }
              (n.addRequestDataToEvent = function (e, t, n) {
                const s = { ...o, ...(n && n.include) };
                if (s.request) {
                  const r = Array.isArray(s.request) ? l(t, { include: s.request, deps: n && n.deps }) : l(t, { deps: n && n.deps });
                  e.request = { ...e.request, ...r };
                }
                if (s.user) {
                  const n =
                    t.user && r.isPlainObject(t.user)
                      ? (function (e, t) {
                          const n = {};
                          return (
                            (Array.isArray(t) ? t : c).forEach((t) => {
                              e && t in e && (n[t] = e[t]);
                            }),
                            n
                          );
                        })(t.user, s.user)
                      : {};
                  Object.keys(n).length && (e.user = { ...e.user, ...n });
                }
                if (s.ip) {
                  const n = t.ip || (t.socket && t.socket.remoteAddress);
                  n && (e.user = { ...e.user, ip_address: n });
                }
                return (
                  s.transaction &&
                    !e.transaction &&
                    (e.transaction = (function (e, t) {
                      switch (t) {
                        case "path":
                          return u(e, { path: !0 })[0];
                        case "handler":
                          return (e.route && e.route.stack && e.route.stack[0] && e.route.stack[0].name) || "<anonymous>";
                        default:
                          return u(e, { path: !0, method: !0 })[0];
                      }
                    })(t, s.transaction)),
                  e
                );
              }),
                (n.addRequestDataToTransaction = function (e, t, n) {
                  e &&
                    ((e.metadata.source && "url" !== e.metadata.source) || e.setName(...u(t, { path: !0, method: !0 })),
                    e.setData("url", t.originalUrl || t.url),
                    t.baseUrl && e.setData("baseUrl", t.baseUrl),
                    e.setData("query", d(t, n)));
                }),
                (n.extractPathForTransaction = u),
                (n.extractRequestData = l);
            },
            { "./is.js": 122, "./normalize.js": 128, "./url.js": 141 }
          ],
          134: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = ["fatal", "error", "warning", "log", "info", "debug"];
              function s(e) {
                return "warn" === e ? "warning" : r.includes(e) ? e : "log";
              }
              (n.severityFromString = function (e) {
                return s(e);
              }),
                (n.severityLevelFromString = s),
                (n.validSeverityLevels = r);
            },
            {}
          ],
          135: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./node-stack-trace.js"),
                s = 50,
                i = /\(error: (.*)\)/;
              function o(...e) {
                const t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
                return (e, n = 0) => {
                  const r = [],
                    o = e.split("\n");
                  for (let e = n; e < o.length; e++) {
                    const n = o[e];
                    if (n.length > 1024) continue;
                    const a = i.test(n) ? n.replace(i, "$1") : n;
                    if (!a.match(/\S*Error: /)) {
                      for (const e of t) {
                        const t = e(a);
                        if (t) {
                          r.push(t);
                          break;
                        }
                      }
                      if (r.length >= s) break;
                    }
                  }
                  return a(r);
                };
              }
              function a(e) {
                if (!e.length) return [];
                const t = e.slice(0, s),
                  n = t[t.length - 1].function;
                n && /sentryWrapped/.test(n) && t.pop(), t.reverse();
                const r = t[t.length - 1].function;
                return (
                  r && /captureMessage|captureException/.test(r) && t.pop(),
                  t.map((e) => ({ ...e, filename: e.filename || t[t.length - 1].filename, function: e.function || "?" }))
                );
              }
              const c = "<anonymous>";
              (n.createStackParser = o),
                (n.getFunctionName = function (e) {
                  try {
                    return (e && "function" == typeof e && e.name) || c;
                  } catch (e) {
                    return c;
                  }
                }),
                (n.nodeStackLineParser = function (e) {
                  return [90, r.node(e)];
                }),
                (n.stackParserFromStackParserOptions = function (e) {
                  return Array.isArray(e) ? o(...e) : e;
                }),
                (n.stripSentryFramesAndReverse = a);
            },
            { "./node-stack-trace.js": 126 }
          ],
          136: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./is.js");
              function s(e, t, n = !1) {
                return !!r.isString(e) && (r.isRegExp(t) ? t.test(e) : !!r.isString(t) && (n ? e === t : e.includes(t)));
              }
              (n.isMatchingPattern = s),
                (n.safeJoin = function (e, t) {
                  if (!Array.isArray(e)) return "";
                  const n = [];
                  for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    try {
                      n.push(String(r));
                    } catch (e) {
                      n.push("[value cannot be serialized]");
                    }
                  }
                  return n.join(t);
                }),
                (n.snipLine = function (e, t) {
                  let n = e;
                  const r = n.length;
                  if (r <= 150) return n;
                  t > r && (t = r);
                  let s = Math.max(t - 60, 0);
                  s < 5 && (s = 0);
                  let i = Math.min(s + 140, r);
                  return (
                    i > r - 5 && (i = r),
                    i === r && (s = Math.max(i - 140, 0)),
                    (n = n.slice(s, i)),
                    s > 0 && (n = `'{snip} ${n}`),
                    i < r && (n += " {snip}"),
                    n
                  );
                }),
                (n.stringMatchesSomePattern = function (e, t = [], n = !1) {
                  return t.some((t) => s(e, t, n));
                }),
                (n.truncate = function (e, t = 0) {
                  return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`;
                });
            },
            { "./is.js": 122 }
          ],
          137: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./logger.js"),
                s = e("./worldwide.js").getGlobalObject();
              function i() {
                if (!("fetch" in s)) return !1;
                try {
                  return new Headers(), new Request("http://www.example.com"), new Response(), !0;
                } catch (e) {
                  return !1;
                }
              }
              function o(e) {
                return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
              }
              (n.isNativeFetch = o),
                (n.supportsDOMError = function () {
                  try {
                    return new DOMError(""), !0;
                  } catch (e) {
                    return !1;
                  }
                }),
                (n.supportsDOMException = function () {
                  try {
                    return new DOMException(""), !0;
                  } catch (e) {
                    return !1;
                  }
                }),
                (n.supportsErrorEvent = function () {
                  try {
                    return new ErrorEvent(""), !0;
                  } catch (e) {
                    return !1;
                  }
                }),
                (n.supportsFetch = i),
                (n.supportsNativeFetch = function () {
                  if (!i()) return !1;
                  if (o(s.fetch)) return !0;
                  let e = !1;
                  const t = s.document;
                  if (t && "function" == typeof t.createElement)
                    try {
                      const n = t.createElement("iframe");
                      (n.hidden = !0),
                        t.head.appendChild(n),
                        n.contentWindow && n.contentWindow.fetch && (e = o(n.contentWindow.fetch)),
                        t.head.removeChild(n);
                    } catch (e) {
                      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                        r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
                    }
                  return e;
                }),
                (n.supportsReferrerPolicy = function () {
                  if (!i()) return !1;
                  try {
                    return new Request("_", { referrerPolicy: "origin" }), !0;
                  } catch (e) {
                    return !1;
                  }
                }),
                (n.supportsReportingObserver = function () {
                  return "ReportingObserver" in s;
                });
            },
            { "./logger.js": 123, "./worldwide.js": 145 }
          ],
          138: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./is.js");
              var s;
              !(function (e) {
                e[(e.PENDING = 0)] = "PENDING";
                e[(e.RESOLVED = 1)] = "RESOLVED";
                e[(e.REJECTED = 2)] = "REJECTED";
              })(s || (s = {}));
              class i {
                __init() {
                  this._state = s.PENDING;
                }
                __init2() {
                  this._handlers = [];
                }
                constructor(e) {
                  i.prototype.__init.call(this),
                    i.prototype.__init2.call(this),
                    i.prototype.__init3.call(this),
                    i.prototype.__init4.call(this),
                    i.prototype.__init5.call(this),
                    i.prototype.__init6.call(this);
                  try {
                    e(this._resolve, this._reject);
                  } catch (e) {
                    this._reject(e);
                  }
                }
                then(e, t) {
                  return new i((n, r) => {
                    this._handlers.push([
                      !1,
                      (t) => {
                        if (e)
                          try {
                            n(e(t));
                          } catch (e) {
                            r(e);
                          }
                        else n(t);
                      },
                      (e) => {
                        if (t)
                          try {
                            n(t(e));
                          } catch (e) {
                            r(e);
                          }
                        else r(e);
                      }
                    ]),
                      this._executeHandlers();
                  });
                }
                catch(e) {
                  return this.then((e) => e, e);
                }
                finally(e) {
                  return new i((t, n) => {
                    let r, s;
                    return this.then(
                      (t) => {
                        (s = !1), (r = t), e && e();
                      },
                      (t) => {
                        (s = !0), (r = t), e && e();
                      }
                    ).then(() => {
                      s ? n(r) : t(r);
                    });
                  });
                }
                __init3() {
                  this._resolve = (e) => {
                    this._setResult(s.RESOLVED, e);
                  };
                }
                __init4() {
                  this._reject = (e) => {
                    this._setResult(s.REJECTED, e);
                  };
                }
                __init5() {
                  this._setResult = (e, t) => {
                    this._state === s.PENDING &&
                      (r.isThenable(t)
                        ? t.then(this._resolve, this._reject)
                        : ((this._state = e), (this._value = t), this._executeHandlers()));
                  };
                }
                __init6() {
                  this._executeHandlers = () => {
                    if (this._state === s.PENDING) return;
                    const e = this._handlers.slice();
                    (this._handlers = []),
                      e.forEach((e) => {
                        e[0] ||
                          (this._state === s.RESOLVED && e[1](this._value), this._state === s.REJECTED && e[2](this._value), (e[0] = !0));
                      });
                  };
                }
              }
              (n.SyncPromise = i),
                (n.rejectedSyncPromise = function (e) {
                  return new i((t, n) => {
                    n(e);
                  });
                }),
                (n.resolvedSyncPromise = function (e) {
                  return new i((t) => {
                    t(e);
                  });
                });
            },
            { "./is.js": 122 }
          ],
          139: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("./node.js"),
                s = e("./worldwide.js").getGlobalObject(),
                i = { nowSeconds: () => Date.now() / 1e3 };
              const o = r.isNodeEnv()
                  ? (function () {
                      try {
                        return r.dynamicRequire(t, "perf_hooks").performance;
                      } catch (e) {
                        return undefined;
                      }
                    })()
                  : (function () {
                      const { performance: e } = s;
                      return e && e.now ? { now: () => e.now(), timeOrigin: Date.now() - e.now() } : undefined;
                    })(),
                a = o === undefined ? i : { nowSeconds: () => (o.timeOrigin + o.now()) / 1e3 },
                c = i.nowSeconds.bind(i),
                u = a.nowSeconds.bind(a),
                l = u,
                d = o !== undefined;
              n._browserPerformanceTimeOriginMode = void 0;
              const p = (() => {
                const { performance: e } = s;
                if (!e || !e.now) return (n._browserPerformanceTimeOriginMode = "none"), undefined;
                const t = 36e5,
                  r = e.now(),
                  i = Date.now(),
                  o = e.timeOrigin ? Math.abs(e.timeOrigin + r - i) : t,
                  a = o < t,
                  c = e.timing && e.timing.navigationStart,
                  u = "number" == typeof c ? Math.abs(c + r - i) : t;
                return a || u < t
                  ? o <= u
                    ? ((n._browserPerformanceTimeOriginMode = "timeOrigin"), e.timeOrigin)
                    : ((n._browserPerformanceTimeOriginMode = "navigationStart"), c)
                  : ((n._browserPerformanceTimeOriginMode = "dateNow"), i);
              })();
              (n.browserPerformanceTimeOrigin = p),
                (n.dateTimestampInSeconds = c),
                (n.timestampInSeconds = u),
                (n.timestampWithMs = l),
                (n.usingPerformanceAPI = d);
            },
            { "./node.js": 127, "./worldwide.js": 145 }
          ],
          140: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = new RegExp("^[ \\t]*" + "([0-9a-f]{32})?" + "-?([0-9a-f]{16})?" + "-?([01])?" + "[ \\t]*$");
              (n.TRACEPARENT_REGEXP = r),
                (n.extractTraceparentData = function (e) {
                  const t = e.match(r);
                  if (!e || !t) return undefined;
                  let n;
                  return "1" === t[3] ? (n = !0) : "0" === t[3] && (n = !1), { traceId: t[1], parentSampled: n, parentSpanId: t[2] };
                });
            },
            {}
          ],
          141: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.getNumberOfUrlSegments = function (e) {
                  return e.split(/\\?\//).filter((e) => e.length > 0 && "," !== e).length;
                }),
                (n.getSanitizedUrlString = function (e) {
                  const { protocol: t, host: n, path: r } = e;
                  return `${t ? `${t}://` : ""}${
                    (n && n.replace(/^.*@/, "[filtered]:[filtered]@").replace(":80", "").replace(":443", "")) || ""
                  }${r}`;
                }),
                (n.parseUrl = function (e) {
                  if (!e) return {};
                  const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                  if (!t) return {};
                  const n = t[6] || "",
                    r = t[8] || "";
                  return { host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r };
                }),
                (n.stripUrlQueryAndFragment = function (e) {
                  return e.split(/[\?#]/, 1)[0];
                });
            },
            {}
          ],
          142: [
            function (e, t, n) {
              function r(e, t, n) {
                const s = t.match(/([a-z_]+)\.(.*)/i);
                if (null === s) e[t] = n;
                else {
                  r(e[s[1]], s[2], n);
                }
              }
              function s(e, t, n) {
                const s = t.find((t) => t.name === e.name);
                if (s) {
                  for (const [e, t] of Object.entries(n)) r(s, e, t);
                  return t;
                }
                return [...t, e];
              }
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.addOrUpdateIntegration = function (e, t, n = {}) {
                  return Array.isArray(t)
                    ? s(e, t, n)
                    : (function (e, t, n) {
                        const r = (r) => {
                          const i = t(r);
                          if (e.allowExclusionByUser) {
                            if (!i.find((t) => t.name === e.name)) return i;
                          }
                          return s(e, i, n);
                        };
                        return r;
                      })(e, t, n);
                });
            },
            {}
          ],
          143: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.escapeStringForRegex = function (e) {
                  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
                });
            },
            {}
          ],
          144: [
            function (e, t, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              const r = e("../worldwide.js").getGlobalObject();
              n.supportsHistory = function () {
                const e = r.chrome,
                  t = e && e.app && e.app.runtime,
                  n = "history" in r && !!r.history.pushState && !!r.history.replaceState;
                return !t && n;
              };
            },
            { "../worldwide.js": 145 }
          ],
          145: [
            function (e, t, n) {
              (function (e) {
                (function () {
                  function t(e) {
                    return e && e.Math == Math ? e : undefined;
                  }
                  Object.defineProperty(n, "__esModule", { value: !0 });
                  const r =
                    ("object" == typeof globalThis && t(globalThis)) ||
                    ("object" == typeof window && t(window)) ||
                    ("object" == typeof self && t(self)) ||
                    ("object" == typeof e && t(e)) ||
                    (function () {
                      return this;
                    })() ||
                    {};
                  (n.GLOBAL_OBJ = r),
                    (n.getGlobalObject = function () {
                      return r;
                    }),
                    (n.getGlobalSingleton = function (e, t, n) {
                      const s = n || r,
                        i = (s.__SENTRY__ = s.__SENTRY__ || {});
                      return i[e] || (i[e] = t());
                    });
                }).call(this);
              }).call(
                this,
                "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
              );
            },
            {}
          ],
          146: [
            function (e, t, n) {
              (function (r) {
                (function () {
                  /*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
                  !(function (e) {
                    if ("object" == typeof n && void 0 !== t) t.exports = e();
                    else if ("function" == typeof define && define.amd) define([], e);
                    else {
                      ("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this).localforage =
                        e();
                    }
                  })(function () {
                    return (function t(n, r, s) {
                      function i(a, c) {
                        if (!r[a]) {
                          if (!n[a]) {
                            var u = "function" == typeof e && e;
                            if (!c && u) return u(a, !0);
                            if (o) return o(a, !0);
                            var l = new Error("Cannot find module '" + a + "'");
                            throw ((l.code = "MODULE_NOT_FOUND"), l);
                          }
                          var d = (r[a] = { exports: {} });
                          n[a][0].call(
                            d.exports,
                            function (e) {
                              var t = n[a][1][e];
                              return i(t || e);
                            },
                            d,
                            d.exports,
                            t,
                            n,
                            r,
                            s
                          );
                        }
                        return r[a].exports;
                      }
                      for (var o = "function" == typeof e && e, a = 0; a < s.length; a++) i(s[a]);
                      return i;
                    })(
                      {
                        1: [
                          function (e, t, n) {
                            (function (e) {
                              "use strict";
                              var n,
                                r,
                                s = e.MutationObserver || e.WebKitMutationObserver;
                              if (s) {
                                var i = 0,
                                  o = new s(l),
                                  a = e.document.createTextNode("");
                                o.observe(a, { characterData: !0 }),
                                  (n = function () {
                                    a.data = i = ++i % 2;
                                  });
                              } else if (e.setImmediate || void 0 === e.MessageChannel)
                                n =
                                  "document" in e && "onreadystatechange" in e.document.createElement("script")
                                    ? function () {
                                        var t = e.document.createElement("script");
                                        (t.onreadystatechange = function () {
                                          l(), (t.onreadystatechange = null), t.parentNode.removeChild(t), (t = null);
                                        }),
                                          e.document.documentElement.appendChild(t);
                                      }
                                    : function () {
                                        setTimeout(l, 0);
                                      };
                              else {
                                var c = new e.MessageChannel();
                                (c.port1.onmessage = l),
                                  (n = function () {
                                    c.port2.postMessage(0);
                                  });
                              }
                              var u = [];
                              function l() {
                                var e, t;
                                r = !0;
                                for (var n = u.length; n; ) {
                                  for (t = u, u = [], e = -1; ++e < n; ) t[e]();
                                  n = u.length;
                                }
                                r = !1;
                              }
                              t.exports = function (e) {
                                1 !== u.push(e) || r || n();
                              };
                            }).call(
                              this,
                              void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
                            );
                          },
                          {}
                        ],
                        2: [
                          function (e, t, n) {
                            "use strict";
                            var r = e(1);
                            function s() {}
                            var i = {},
                              o = ["REJECTED"],
                              a = ["FULFILLED"],
                              c = ["PENDING"];
                            function u(e) {
                              if ("function" != typeof e) throw new TypeError("resolver must be a function");
                              (this.state = c), (this.queue = []), (this.outcome = void 0), e !== s && f(this, e);
                            }
                            function l(e, t, n) {
                              (this.promise = e),
                                "function" == typeof t && ((this.onFulfilled = t), (this.callFulfilled = this.otherCallFulfilled)),
                                "function" == typeof n && ((this.onRejected = n), (this.callRejected = this.otherCallRejected));
                            }
                            function d(e, t, n) {
                              r(function () {
                                var r;
                                try {
                                  r = t(n);
                                } catch (t) {
                                  return i.reject(e, t);
                                }
                                r === e ? i.reject(e, new TypeError("Cannot resolve promise with itself")) : i.resolve(e, r);
                              });
                            }
                            function p(e) {
                              var t = e && e.then;
                              if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t)
                                return function () {
                                  t.apply(e, arguments);
                                };
                            }
                            function f(e, t) {
                              var n = !1;
                              function r(t) {
                                n || ((n = !0), i.reject(e, t));
                              }
                              function s(t) {
                                n || ((n = !0), i.resolve(e, t));
                              }
                              var o = _(function () {
                                t(s, r);
                              });
                              "error" === o.status && r(o.value);
                            }
                            function _(e, t) {
                              var n = {};
                              try {
                                (n.value = e(t)), (n.status = "success");
                              } catch (e) {
                                (n.status = "error"), (n.value = e);
                              }
                              return n;
                            }
                            (t.exports = u),
                              (u.prototype.catch = function (e) {
                                return this.then(null, e);
                              }),
                              (u.prototype.then = function (e, t) {
                                if (("function" != typeof e && this.state === a) || ("function" != typeof t && this.state === o))
                                  return this;
                                var n = new this.constructor(s);
                                this.state !== c ? d(n, this.state === a ? e : t, this.outcome) : this.queue.push(new l(n, e, t));
                                return n;
                              }),
                              (l.prototype.callFulfilled = function (e) {
                                i.resolve(this.promise, e);
                              }),
                              (l.prototype.otherCallFulfilled = function (e) {
                                d(this.promise, this.onFulfilled, e);
                              }),
                              (l.prototype.callRejected = function (e) {
                                i.reject(this.promise, e);
                              }),
                              (l.prototype.otherCallRejected = function (e) {
                                d(this.promise, this.onRejected, e);
                              }),
                              (i.resolve = function (e, t) {
                                var n = _(p, t);
                                if ("error" === n.status) return i.reject(e, n.value);
                                var r = n.value;
                                if (r) f(e, r);
                                else {
                                  (e.state = a), (e.outcome = t);
                                  for (var s = -1, o = e.queue.length; ++s < o; ) e.queue[s].callFulfilled(t);
                                }
                                return e;
                              }),
                              (i.reject = function (e, t) {
                                (e.state = o), (e.outcome = t);
                                for (var n = -1, r = e.queue.length; ++n < r; ) e.queue[n].callRejected(t);
                                return e;
                              }),
                              (u.resolve = function (e) {
                                if (e instanceof this) return e;
                                return i.resolve(new this(s), e);
                              }),
                              (u.reject = function (e) {
                                var t = new this(s);
                                return i.reject(t, e);
                              }),
                              (u.all = function (e) {
                                var t = this;
                                if ("[object Array]" !== Object.prototype.toString.call(e))
                                  return this.reject(new TypeError("must be an array"));
                                var n = e.length,
                                  r = !1;
                                if (!n) return this.resolve([]);
                                var o = new Array(n),
                                  a = 0,
                                  c = -1,
                                  u = new this(s);
                                for (; ++c < n; ) l(e[c], c);
                                return u;
                                function l(e, s) {
                                  t.resolve(e).then(
                                    function (e) {
                                      (o[s] = e), ++a !== n || r || ((r = !0), i.resolve(u, o));
                                    },
                                    function (e) {
                                      r || ((r = !0), i.reject(u, e));
                                    }
                                  );
                                }
                              }),
                              (u.race = function (e) {
                                var t = this;
                                if ("[object Array]" !== Object.prototype.toString.call(e))
                                  return this.reject(new TypeError("must be an array"));
                                var n = e.length,
                                  r = !1;
                                if (!n) return this.resolve([]);
                                var o = -1,
                                  a = new this(s);
                                for (; ++o < n; )
                                  (c = e[o]),
                                    t.resolve(c).then(
                                      function (e) {
                                        r || ((r = !0), i.resolve(a, e));
                                      },
                                      function (e) {
                                        r || ((r = !0), i.reject(a, e));
                                      }
                                    );
                                var c;
                                return a;
                              });
                          },
                          { 1: 1 }
                        ],
                        3: [
                          function (e, t, n) {
                            (function (t) {
                              "use strict";
                              "function" != typeof t.Promise && (t.Promise = e(2));
                            }).call(
                              this,
                              void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
                            );
                          },
                          { 2: 2 }
                        ],
                        4: [
                          function (e, t, n) {
                            "use strict";
                            var r =
                              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                    return typeof e;
                                  }
                                : function (e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                                  };
                            var s = (function () {
                              try {
                                if ("undefined" != typeof indexedDB) return indexedDB;
                                if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                                if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                                if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                                if ("undefined" != typeof msIndexedDB) return msIndexedDB;
                              } catch (e) {
                                return;
                              }
                            })();
                            function i(e, t) {
                              (e = e || []), (t = t || {});
                              try {
                                return new Blob(e, t);
                              } catch (s) {
                                if ("TypeError" !== s.name) throw s;
                                for (
                                  var n = new (
                                      "undefined" != typeof BlobBuilder
                                        ? BlobBuilder
                                        : "undefined" != typeof MSBlobBuilder
                                        ? MSBlobBuilder
                                        : "undefined" != typeof MozBlobBuilder
                                        ? MozBlobBuilder
                                        : WebKitBlobBuilder
                                    )(),
                                    r = 0;
                                  r < e.length;
                                  r += 1
                                )
                                  n.append(e[r]);
                                return n.getBlob(t.type);
                              }
                            }
                            "undefined" == typeof Promise && e(3);
                            var o = Promise;
                            function a(e, t) {
                              t &&
                                e.then(
                                  function (e) {
                                    t(null, e);
                                  },
                                  function (e) {
                                    t(e);
                                  }
                                );
                            }
                            function c(e, t, n) {
                              "function" == typeof t && e.then(t), "function" == typeof n && e.catch(n);
                            }
                            function u(e) {
                              return (
                                "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), (e = String(e))), e
                              );
                            }
                            function l() {
                              if (arguments.length && "function" == typeof arguments[arguments.length - 1])
                                return arguments[arguments.length - 1];
                            }
                            var d = "local-forage-detect-blob-support",
                              p = void 0,
                              f = {},
                              _ = Object.prototype.toString,
                              h = "readonly",
                              m = "readwrite";
                            function g(e) {
                              return "boolean" == typeof p
                                ? o.resolve(p)
                                : (function (e) {
                                    return new o(function (t) {
                                      var n = e.transaction(d, m),
                                        r = i([""]);
                                      n.objectStore(d).put(r, "key"),
                                        (n.onabort = function (e) {
                                          e.preventDefault(), e.stopPropagation(), t(!1);
                                        }),
                                        (n.oncomplete = function () {
                                          var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                                            n = navigator.userAgent.match(/Edge\//);
                                          t(n || !e || parseInt(e[1], 10) >= 43);
                                        });
                                    }).catch(function () {
                                      return !1;
                                    });
                                  })(e).then(function (e) {
                                    return (p = e);
                                  });
                            }
                            function y(e) {
                              var t = f[e.name],
                                n = {};
                              (n.promise = new o(function (e, t) {
                                (n.resolve = e), (n.reject = t);
                              })),
                                t.deferredOperations.push(n),
                                t.dbReady
                                  ? (t.dbReady = t.dbReady.then(function () {
                                      return n.promise;
                                    }))
                                  : (t.dbReady = n.promise);
                            }
                            function b(e) {
                              var t = f[e.name].deferredOperations.pop();
                              if (t) return t.resolve(), t.promise;
                            }
                            function v(e, t) {
                              var n = f[e.name].deferredOperations.pop();
                              if (n) return n.reject(t), n.promise;
                            }
                            function E(e, t) {
                              return new o(function (n, r) {
                                if (((f[e.name] = f[e.name] || { forages: [], db: null, dbReady: null, deferredOperations: [] }), e.db)) {
                                  if (!t) return n(e.db);
                                  y(e), e.db.close();
                                }
                                var i = [e.name];
                                t && i.push(e.version);
                                var o = s.open.apply(s, i);
                                t &&
                                  (o.onupgradeneeded = function (t) {
                                    var n = o.result;
                                    try {
                                      n.createObjectStore(e.storeName), t.oldVersion <= 1 && n.createObjectStore(d);
                                    } catch (n) {
                                      if ("ConstraintError" !== n.name) throw n;
                                      console.warn(
                                        'The database "' +
                                          e.name +
                                          '"' +
                                          " has been upgraded from version " +
                                          t.oldVersion +
                                          " to version " +
                                          t.newVersion +
                                          ', but the storage "' +
                                          e.storeName +
                                          '" already exists.'
                                      );
                                    }
                                  }),
                                  (o.onerror = function (e) {
                                    e.preventDefault(), r(o.error);
                                  }),
                                  (o.onsuccess = function () {
                                    var t = o.result;
                                    (t.onversionchange = function (e) {
                                      e.target.close();
                                    }),
                                      n(t),
                                      b(e);
                                  });
                              });
                            }
                            function S(e) {
                              return E(e, !1);
                            }
                            function w(e) {
                              return E(e, !0);
                            }
                            function T(e, t) {
                              if (!e.db) return !0;
                              var n = !e.db.objectStoreNames.contains(e.storeName),
                                r = e.version < e.db.version,
                                s = e.version > e.db.version;
                              if (
                                (r &&
                                  (e.version !== t &&
                                    console.warn(
                                      'The database "' +
                                        e.name +
                                        '"' +
                                        " can't be downgraded from version " +
                                        e.db.version +
                                        " to version " +
                                        e.version +
                                        "."
                                    ),
                                  (e.version = e.db.version)),
                                s || n)
                              ) {
                                if (n) {
                                  var i = e.db.version + 1;
                                  i > e.version && (e.version = i);
                                }
                                return !0;
                              }
                              return !1;
                            }
                            function k(e) {
                              var t = (function (e) {
                                for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), s = 0; s < t; s++)
                                  r[s] = e.charCodeAt(s);
                                return n;
                              })(atob(e.data));
                              return i([t], { type: e.type });
                            }
                            function R(e) {
                              return e && e.__local_forage_encoded_blob;
                            }
                            function x(e) {
                              var t = this,
                                n = t._initReady().then(function () {
                                  var e = f[t._dbInfo.name];
                                  if (e && e.dbReady) return e.dbReady;
                                });
                              return c(n, e, e), n;
                            }
                            function N(e, t, n, r) {
                              r === undefined && (r = 1);
                              try {
                                var s = e.db.transaction(e.storeName, t);
                                n(null, s);
                              } catch (s) {
                                if (r > 0 && (!e.db || "InvalidStateError" === s.name || "NotFoundError" === s.name))
                                  return o
                                    .resolve()
                                    .then(function () {
                                      if (
                                        !e.db ||
                                        ("NotFoundError" === s.name &&
                                          !e.db.objectStoreNames.contains(e.storeName) &&
                                          e.version <= e.db.version)
                                      )
                                        return e.db && (e.version = e.db.version + 1), w(e);
                                    })
                                    .then(function () {
                                      return (function (e) {
                                        y(e);
                                        for (var t = f[e.name], n = t.forages, r = 0; r < n.length; r++) {
                                          var s = n[r];
                                          s._dbInfo.db && (s._dbInfo.db.close(), (s._dbInfo.db = null));
                                        }
                                        return (
                                          (e.db = null),
                                          S(e)
                                            .then(function (t) {
                                              return (e.db = t), T(e) ? w(e) : t;
                                            })
                                            .then(function (r) {
                                              e.db = t.db = r;
                                              for (var s = 0; s < n.length; s++) n[s]._dbInfo.db = r;
                                            })
                                            .catch(function (t) {
                                              throw (v(e, t), t);
                                            })
                                        );
                                      })(e).then(function () {
                                        N(e, t, n, r - 1);
                                      });
                                    })
                                    .catch(n);
                                n(s);
                              }
                            }
                            var D = {
                              _driver: "asyncStorage",
                              _initStorage: function (e) {
                                var t = this,
                                  n = { db: null };
                                if (e) for (var r in e) n[r] = e[r];
                                var s = f[n.name];
                                s || ((s = { forages: [], db: null, dbReady: null, deferredOperations: [] }), (f[n.name] = s)),
                                  s.forages.push(t),
                                  t._initReady || ((t._initReady = t.ready), (t.ready = x));
                                var i = [];
                                function a() {
                                  return o.resolve();
                                }
                                for (var c = 0; c < s.forages.length; c++) {
                                  var u = s.forages[c];
                                  u !== t && i.push(u._initReady().catch(a));
                                }
                                var l = s.forages.slice(0);
                                return o
                                  .all(i)
                                  .then(function () {
                                    return (n.db = s.db), S(n);
                                  })
                                  .then(function (e) {
                                    return (n.db = e), T(n, t._defaultConfig.version) ? w(n) : e;
                                  })
                                  .then(function (e) {
                                    (n.db = s.db = e), (t._dbInfo = n);
                                    for (var r = 0; r < l.length; r++) {
                                      var i = l[r];
                                      i !== t && ((i._dbInfo.db = n.db), (i._dbInfo.version = n.version));
                                    }
                                  });
                              },
                              _support: (function () {
                                try {
                                  if (!s || !s.open) return !1;
                                  var e =
                                      "undefined" != typeof openDatabase &&
                                      /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
                                      !/Chrome/.test(navigator.userAgent) &&
                                      !/BlackBerry/.test(navigator.platform),
                                    t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                  return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange;
                                } catch (e) {
                                  return !1;
                                }
                              })(),
                              iterate: function (e, t) {
                                var n = this,
                                  r = new o(function (t, r) {
                                    n.ready()
                                      .then(function () {
                                        N(n._dbInfo, h, function (s, i) {
                                          if (s) return r(s);
                                          try {
                                            var o = i.objectStore(n._dbInfo.storeName).openCursor(),
                                              a = 1;
                                            (o.onsuccess = function () {
                                              var n = o.result;
                                              if (n) {
                                                var r = n.value;
                                                R(r) && (r = k(r));
                                                var s = e(r, n.key, a++);
                                                void 0 !== s ? t(s) : n.continue();
                                              } else t();
                                            }),
                                              (o.onerror = function () {
                                                r(o.error);
                                              });
                                          } catch (e) {
                                            r(e);
                                          }
                                        });
                                      })
                                      .catch(r);
                                  });
                                return a(r, t), r;
                              },
                              getItem: function (e, t) {
                                var n = this;
                                e = u(e);
                                var r = new o(function (t, r) {
                                  n.ready()
                                    .then(function () {
                                      N(n._dbInfo, h, function (s, i) {
                                        if (s) return r(s);
                                        try {
                                          var o = i.objectStore(n._dbInfo.storeName).get(e);
                                          (o.onsuccess = function () {
                                            var e = o.result;
                                            e === undefined && (e = null), R(e) && (e = k(e)), t(e);
                                          }),
                                            (o.onerror = function () {
                                              r(o.error);
                                            });
                                        } catch (e) {
                                          r(e);
                                        }
                                      });
                                    })
                                    .catch(r);
                                });
                                return a(r, t), r;
                              },
                              setItem: function (e, t, n) {
                                var r = this;
                                e = u(e);
                                var s = new o(function (n, s) {
                                  var i;
                                  r.ready()
                                    .then(function () {
                                      return (
                                        (i = r._dbInfo),
                                        "[object Blob]" === _.call(t)
                                          ? g(i.db).then(function (e) {
                                              return e
                                                ? t
                                                : ((n = t),
                                                  new o(function (e, t) {
                                                    var r = new FileReader();
                                                    (r.onerror = t),
                                                      (r.onloadend = function (t) {
                                                        var r = btoa(t.target.result || "");
                                                        e({ __local_forage_encoded_blob: !0, data: r, type: n.type });
                                                      }),
                                                      r.readAsBinaryString(n);
                                                  }));
                                              var n;
                                            })
                                          : t
                                      );
                                    })
                                    .then(function (t) {
                                      N(r._dbInfo, m, function (i, o) {
                                        if (i) return s(i);
                                        try {
                                          var a = o.objectStore(r._dbInfo.storeName);
                                          null === t && (t = undefined);
                                          var c = a.put(t, e);
                                          (o.oncomplete = function () {
                                            t === undefined && (t = null), n(t);
                                          }),
                                            (o.onabort = o.onerror =
                                              function () {
                                                var e = c.error ? c.error : c.transaction.error;
                                                s(e);
                                              });
                                        } catch (e) {
                                          s(e);
                                        }
                                      });
                                    })
                                    .catch(s);
                                });
                                return a(s, n), s;
                              },
                              removeItem: function (e, t) {
                                var n = this;
                                e = u(e);
                                var r = new o(function (t, r) {
                                  n.ready()
                                    .then(function () {
                                      N(n._dbInfo, m, function (s, i) {
                                        if (s) return r(s);
                                        try {
                                          var o = i.objectStore(n._dbInfo.storeName).delete(e);
                                          (i.oncomplete = function () {
                                            t();
                                          }),
                                            (i.onerror = function () {
                                              r(o.error);
                                            }),
                                            (i.onabort = function () {
                                              var e = o.error ? o.error : o.transaction.error;
                                              r(e);
                                            });
                                        } catch (e) {
                                          r(e);
                                        }
                                      });
                                    })
                                    .catch(r);
                                });
                                return a(r, t), r;
                              },
                              clear: function (e) {
                                var t = this,
                                  n = new o(function (e, n) {
                                    t.ready()
                                      .then(function () {
                                        N(t._dbInfo, m, function (r, s) {
                                          if (r) return n(r);
                                          try {
                                            var i = s.objectStore(t._dbInfo.storeName).clear();
                                            (s.oncomplete = function () {
                                              e();
                                            }),
                                              (s.onabort = s.onerror =
                                                function () {
                                                  var e = i.error ? i.error : i.transaction.error;
                                                  n(e);
                                                });
                                          } catch (e) {
                                            n(e);
                                          }
                                        });
                                      })
                                      .catch(n);
                                  });
                                return a(n, e), n;
                              },
                              length: function (e) {
                                var t = this,
                                  n = new o(function (e, n) {
                                    t.ready()
                                      .then(function () {
                                        N(t._dbInfo, h, function (r, s) {
                                          if (r) return n(r);
                                          try {
                                            var i = s.objectStore(t._dbInfo.storeName).count();
                                            (i.onsuccess = function () {
                                              e(i.result);
                                            }),
                                              (i.onerror = function () {
                                                n(i.error);
                                              });
                                          } catch (e) {
                                            n(e);
                                          }
                                        });
                                      })
                                      .catch(n);
                                  });
                                return a(n, e), n;
                              },
                              key: function (e, t) {
                                var n = this,
                                  r = new o(function (t, r) {
                                    e < 0
                                      ? t(null)
                                      : n
                                          .ready()
                                          .then(function () {
                                            N(n._dbInfo, h, function (s, i) {
                                              if (s) return r(s);
                                              try {
                                                var o = i.objectStore(n._dbInfo.storeName),
                                                  a = !1,
                                                  c = o.openKeyCursor();
                                                (c.onsuccess = function () {
                                                  var n = c.result;
                                                  n ? (0 === e || a ? t(n.key) : ((a = !0), n.advance(e))) : t(null);
                                                }),
                                                  (c.onerror = function () {
                                                    r(c.error);
                                                  });
                                              } catch (e) {
                                                r(e);
                                              }
                                            });
                                          })
                                          .catch(r);
                                  });
                                return a(r, t), r;
                              },
                              keys: function (e) {
                                var t = this,
                                  n = new o(function (e, n) {
                                    t.ready()
                                      .then(function () {
                                        N(t._dbInfo, h, function (r, s) {
                                          if (r) return n(r);
                                          try {
                                            var i = s.objectStore(t._dbInfo.storeName).openKeyCursor(),
                                              o = [];
                                            (i.onsuccess = function () {
                                              var t = i.result;
                                              t ? (o.push(t.key), t.continue()) : e(o);
                                            }),
                                              (i.onerror = function () {
                                                n(i.error);
                                              });
                                          } catch (e) {
                                            n(e);
                                          }
                                        });
                                      })
                                      .catch(n);
                                  });
                                return a(n, e), n;
                              },
                              dropInstance: function (e, t) {
                                t = l.apply(this, arguments);
                                var n,
                                  r = this.config();
                                if (
                                  ((e = ("function" != typeof e && e) || {}).name ||
                                    ((e.name = e.name || r.name), (e.storeName = e.storeName || r.storeName)),
                                  e.name)
                                ) {
                                  var i =
                                    e.name === r.name && this._dbInfo.db
                                      ? o.resolve(this._dbInfo.db)
                                      : S(e).then(function (t) {
                                          var n = f[e.name],
                                            r = n.forages;
                                          n.db = t;
                                          for (var s = 0; s < r.length; s++) r[s]._dbInfo.db = t;
                                          return t;
                                        });
                                  n = e.storeName
                                    ? i.then(function (t) {
                                        if (t.objectStoreNames.contains(e.storeName)) {
                                          var n = t.version + 1;
                                          y(e);
                                          var r = f[e.name],
                                            i = r.forages;
                                          t.close();
                                          for (var a = 0; a < i.length; a++) {
                                            var c = i[a];
                                            (c._dbInfo.db = null), (c._dbInfo.version = n);
                                          }
                                          var u = new o(function (t, r) {
                                            var i = s.open(e.name, n);
                                            (i.onerror = function (e) {
                                              i.result.close(), r(e);
                                            }),
                                              (i.onupgradeneeded = function () {
                                                i.result.deleteObjectStore(e.storeName);
                                              }),
                                              (i.onsuccess = function () {
                                                var e = i.result;
                                                e.close(), t(e);
                                              });
                                          });
                                          return u
                                            .then(function (e) {
                                              r.db = e;
                                              for (var t = 0; t < i.length; t++) {
                                                var n = i[t];
                                                (n._dbInfo.db = e), b(n._dbInfo);
                                              }
                                            })
                                            .catch(function (t) {
                                              throw ((v(e, t) || o.resolve()).catch(function () {}), t);
                                            });
                                        }
                                      })
                                    : i.then(function (t) {
                                        y(e);
                                        var n = f[e.name],
                                          r = n.forages;
                                        t.close();
                                        for (var i = 0; i < r.length; i++) {
                                          r[i]._dbInfo.db = null;
                                        }
                                        var a = new o(function (t, n) {
                                          var r = s.deleteDatabase(e.name);
                                          (r.onerror = function () {
                                            var e = r.result;
                                            e && e.close(), n(r.error);
                                          }),
                                            (r.onblocked = function () {
                                              console.warn(
                                                'dropInstance blocked for database "' + e.name + '" until all open connections are closed'
                                              );
                                            }),
                                            (r.onsuccess = function () {
                                              var e = r.result;
                                              e && e.close(), t(e);
                                            });
                                        });
                                        return a
                                          .then(function (e) {
                                            n.db = e;
                                            for (var t = 0; t < r.length; t++) {
                                              b(r[t]._dbInfo);
                                            }
                                          })
                                          .catch(function (t) {
                                            throw ((v(e, t) || o.resolve()).catch(function () {}), t);
                                          });
                                      });
                                } else n = o.reject("Invalid arguments");
                                return a(n, t), n;
                              }
                            };
                            var I = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                              O = /^~~local_forage_type~([^~]+)~/,
                              C = "__lfsc__:",
                              j = "arbf",
                              A = "blob",
                              M = "si08",
                              B = "ui08",
                              P = "uic8",
                              U = "si16",
                              L = "si32",
                              G = "ur16",
                              F = "ui32",
                              Y = "fl32",
                              H = "fl64",
                              z = Object.prototype.toString;
                            function W(e) {
                              var t,
                                n,
                                r,
                                s,
                                i,
                                o = 0.75 * e.length,
                                a = e.length,
                                c = 0;
                              "=" === e[e.length - 1] && (o--, "=" === e[e.length - 2] && o--);
                              var u = new ArrayBuffer(o),
                                l = new Uint8Array(u);
                              for (t = 0; t < a; t += 4)
                                (n = I.indexOf(e[t])),
                                  (r = I.indexOf(e[t + 1])),
                                  (s = I.indexOf(e[t + 2])),
                                  (i = I.indexOf(e[t + 3])),
                                  (l[c++] = (n << 2) | (r >> 4)),
                                  (l[c++] = ((15 & r) << 4) | (s >> 2)),
                                  (l[c++] = ((3 & s) << 6) | (63 & i));
                              return u;
                            }
                            function $(e) {
                              var t,
                                n = new Uint8Array(e),
                                r = "";
                              for (t = 0; t < n.length; t += 3)
                                (r += I[n[t] >> 2]),
                                  (r += I[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
                                  (r += I[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
                                  (r += I[63 & n[t + 2]]);
                              return (
                                n.length % 3 == 2
                                  ? (r = r.substring(0, r.length - 1) + "=")
                                  : n.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="),
                                r
                              );
                            }
                            var q = {
                              serialize: function (e, t) {
                                var n = "";
                                if (
                                  (e && (n = z.call(e)),
                                  e && ("[object ArrayBuffer]" === n || (e.buffer && "[object ArrayBuffer]" === z.call(e.buffer))))
                                ) {
                                  var r,
                                    s = C;
                                  e instanceof ArrayBuffer
                                    ? ((r = e), (s += j))
                                    : ((r = e.buffer),
                                      "[object Int8Array]" === n
                                        ? (s += M)
                                        : "[object Uint8Array]" === n
                                        ? (s += B)
                                        : "[object Uint8ClampedArray]" === n
                                        ? (s += P)
                                        : "[object Int16Array]" === n
                                        ? (s += U)
                                        : "[object Uint16Array]" === n
                                        ? (s += G)
                                        : "[object Int32Array]" === n
                                        ? (s += L)
                                        : "[object Uint32Array]" === n
                                        ? (s += F)
                                        : "[object Float32Array]" === n
                                        ? (s += Y)
                                        : "[object Float64Array]" === n
                                        ? (s += H)
                                        : t(new Error("Failed to get type for BinaryArray"))),
                                    t(s + $(r));
                                } else if ("[object Blob]" === n) {
                                  var i = new FileReader();
                                  (i.onload = function () {
                                    var n = "~~local_forage_type~" + e.type + "~" + $(this.result);
                                    t(C + A + n);
                                  }),
                                    i.readAsArrayBuffer(e);
                                } else
                                  try {
                                    t(JSON.stringify(e));
                                  } catch (n) {
                                    console.error("Couldn't convert value into a JSON string: ", e), t(null, n);
                                  }
                              },
                              deserialize: function (e) {
                                if (e.substring(0, 9) !== C) return JSON.parse(e);
                                var t,
                                  n = e.substring(13),
                                  r = e.substring(9, 13);
                                if (r === A && O.test(n)) {
                                  var s = n.match(O);
                                  (t = s[1]), (n = n.substring(s[0].length));
                                }
                                var o = W(n);
                                switch (r) {
                                  case j:
                                    return o;
                                  case A:
                                    return i([o], { type: t });
                                  case M:
                                    return new Int8Array(o);
                                  case B:
                                    return new Uint8Array(o);
                                  case P:
                                    return new Uint8ClampedArray(o);
                                  case U:
                                    return new Int16Array(o);
                                  case G:
                                    return new Uint16Array(o);
                                  case L:
                                    return new Int32Array(o);
                                  case F:
                                    return new Uint32Array(o);
                                  case Y:
                                    return new Float32Array(o);
                                  case H:
                                    return new Float64Array(o);
                                  default:
                                    throw new Error("Unkown type: " + r);
                                }
                              },
                              stringToBuffer: W,
                              bufferToString: $
                            };
                            function K(e, t, n, r) {
                              e.executeSql(
                                "CREATE TABLE IF NOT EXISTS " + t.storeName + " " + "(id INTEGER PRIMARY KEY, key unique, value)",
                                [],
                                n,
                                r
                              );
                            }
                            function V(e, t, n, r, s, i) {
                              e.executeSql(
                                n,
                                r,
                                s,
                                function (e, o) {
                                  o.code === o.SYNTAX_ERR
                                    ? e.executeSql(
                                        "SELECT name FROM sqlite_master " + "WHERE type='table' AND name = ?",
                                        [t.storeName],
                                        function (e, a) {
                                          a.rows.length
                                            ? i(e, o)
                                            : K(
                                                e,
                                                t,
                                                function () {
                                                  e.executeSql(n, r, s, i);
                                                },
                                                i
                                              );
                                        },
                                        i
                                      )
                                    : i(e, o);
                                },
                                i
                              );
                            }
                            function Z(e, t, n, r) {
                              var s = this;
                              e = u(e);
                              var i = new o(function (i, o) {
                                s.ready()
                                  .then(function () {
                                    t === undefined && (t = null);
                                    var a = t,
                                      c = s._dbInfo;
                                    c.serializer.serialize(t, function (t, u) {
                                      u
                                        ? o(u)
                                        : c.db.transaction(
                                            function (n) {
                                              V(
                                                n,
                                                c,
                                                "INSERT OR REPLACE INTO " + c.storeName + " " + "(key, value) VALUES (?, ?)",
                                                [e, t],
                                                function () {
                                                  i(a);
                                                },
                                                function (e, t) {
                                                  o(t);
                                                }
                                              );
                                            },
                                            function (t) {
                                              if (t.code === t.QUOTA_ERR) {
                                                if (r > 0) return void i(Z.apply(s, [e, a, n, r - 1]));
                                                o(t);
                                              }
                                            }
                                          );
                                    });
                                  })
                                  .catch(o);
                              });
                              return a(i, n), i;
                            }
                            var X = {
                              _driver: "webSQLStorage",
                              _initStorage: function (e) {
                                var t = this,
                                  n = { db: null };
                                if (e) for (var r in e) n[r] = "string" != typeof e[r] ? e[r].toString() : e[r];
                                var s = new o(function (e, r) {
                                  try {
                                    n.db = openDatabase(n.name, String(n.version), n.description, n.size);
                                  } catch (e) {
                                    return r(e);
                                  }
                                  n.db.transaction(function (s) {
                                    K(
                                      s,
                                      n,
                                      function () {
                                        (t._dbInfo = n), e();
                                      },
                                      function (e, t) {
                                        r(t);
                                      }
                                    );
                                  }, r);
                                });
                                return (n.serializer = q), s;
                              },
                              _support: "function" == typeof openDatabase,
                              iterate: function (e, t) {
                                var n = this,
                                  r = new o(function (t, r) {
                                    n.ready()
                                      .then(function () {
                                        var s = n._dbInfo;
                                        s.db.transaction(function (n) {
                                          V(
                                            n,
                                            s,
                                            "SELECT * FROM " + s.storeName,
                                            [],
                                            function (n, r) {
                                              for (var i = r.rows, o = i.length, a = 0; a < o; a++) {
                                                var c = i.item(a),
                                                  u = c.value;
                                                if ((u && (u = s.serializer.deserialize(u)), void 0 !== (u = e(u, c.key, a + 1))))
                                                  return void t(u);
                                              }
                                              t();
                                            },
                                            function (e, t) {
                                              r(t);
                                            }
                                          );
                                        });
                                      })
                                      .catch(r);
                                  });
                                return a(r, t), r;
                              },
                              getItem: function (e, t) {
                                var n = this;
                                e = u(e);
                                var r = new o(function (t, r) {
                                  n.ready()
                                    .then(function () {
                                      var s = n._dbInfo;
                                      s.db.transaction(function (n) {
                                        V(
                                          n,
                                          s,
                                          "SELECT * FROM " + s.storeName + " WHERE key = ? LIMIT 1",
                                          [e],
                                          function (e, n) {
                                            var r = n.rows.length ? n.rows.item(0).value : null;
                                            r && (r = s.serializer.deserialize(r)), t(r);
                                          },
                                          function (e, t) {
                                            r(t);
                                          }
                                        );
                                      });
                                    })
                                    .catch(r);
                                });
                                return a(r, t), r;
                              },
                              setItem: function (e, t, n) {
                                return Z.apply(this, [e, t, n, 1]);
                              },
                              removeItem: function (e, t) {
                                var n = this;
                                e = u(e);
                                var r = new o(function (t, r) {
                                  n.ready()
                                    .then(function () {
                                      var s = n._dbInfo;
                                      s.db.transaction(function (n) {
                                        V(
                                          n,
                                          s,
                                          "DELETE FROM " + s.storeName + " WHERE key = ?",
                                          [e],
                                          function () {
                                            t();
                                          },
                                          function (e, t) {
                                            r(t);
                                          }
                                        );
                                      });
                                    })
                                    .catch(r);
                                });
                                return a(r, t), r;
                              },
                              clear: function (e) {
                                var t = this,
                                  n = new o(function (e, n) {
                                    t.ready()
                                      .then(function () {
                                        var r = t._dbInfo;
                                        r.db.transaction(function (t) {
                                          V(
                                            t,
                                            r,
                                            "DELETE FROM " + r.storeName,
                                            [],
                                            function () {
                                              e();
                                            },
                                            function (e, t) {
                                              n(t);
                                            }
                                          );
                                        });
                                      })
                                      .catch(n);
                                  });
                                return a(n, e), n;
                              },
                              length: function (e) {
                                var t = this,
                                  n = new o(function (e, n) {
                                    t.ready()
                                      .then(function () {
                                        var r = t._dbInfo;
                                        r.db.transaction(function (t) {
                                          V(
                                            t,
                                            r,
                                            "SELECT COUNT(key) as c FROM " + r.storeName,
                                            [],
                                            function (t, n) {
                                              var r = n.rows.item(0).c;
                                              e(r);
                                            },
                                            function (e, t) {
                                              n(t);
                                            }
                                          );
                                        });
                                      })
                                      .catch(n);
                                  });
                                return a(n, e), n;
                              },
                              key: function (e, t) {
                                var n = this,
                                  r = new o(function (t, r) {
                                    n.ready()
                                      .then(function () {
                                        var s = n._dbInfo;
                                        s.db.transaction(function (n) {
                                          V(
                                            n,
                                            s,
                                            "SELECT key FROM " + s.storeName + " WHERE id = ? LIMIT 1",
                                            [e + 1],
                                            function (e, n) {
                                              var r = n.rows.length ? n.rows.item(0).key : null;
                                              t(r);
                                            },
                                            function (e, t) {
                                              r(t);
                                            }
                                          );
                                        });
                                      })
                                      .catch(r);
                                  });
                                return a(r, t), r;
                              },
                              keys: function (e) {
                                var t = this,
                                  n = new o(function (e, n) {
                                    t.ready()
                                      .then(function () {
                                        var r = t._dbInfo;
                                        r.db.transaction(function (t) {
                                          V(
                                            t,
                                            r,
                                            "SELECT key FROM " + r.storeName,
                                            [],
                                            function (t, n) {
                                              for (var r = [], s = 0; s < n.rows.length; s++) r.push(n.rows.item(s).key);
                                              e(r);
                                            },
                                            function (e, t) {
                                              n(t);
                                            }
                                          );
                                        });
                                      })
                                      .catch(n);
                                  });
                                return a(n, e), n;
                              },
                              dropInstance: function (e, t) {
                                t = l.apply(this, arguments);
                                var n = this.config();
                                (e = ("function" != typeof e && e) || {}).name ||
                                  ((e.name = e.name || n.name), (e.storeName = e.storeName || n.storeName));
                                var r,
                                  s = this;
                                return (
                                  a(
                                    (r = e.name
                                      ? new o(function (t) {
                                          var r;
                                          (r = e.name === n.name ? s._dbInfo.db : openDatabase(e.name, "", "", 0)),
                                            e.storeName
                                              ? t({ db: r, storeNames: [e.storeName] })
                                              : t(
                                                  (function (e) {
                                                    return new o(function (t, n) {
                                                      e.transaction(
                                                        function (r) {
                                                          r.executeSql(
                                                            "SELECT name FROM sqlite_master " +
                                                              "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                                                            [],
                                                            function (n, r) {
                                                              for (var s = [], i = 0; i < r.rows.length; i++) s.push(r.rows.item(i).name);
                                                              t({ db: e, storeNames: s });
                                                            },
                                                            function (e, t) {
                                                              n(t);
                                                            }
                                                          );
                                                        },
                                                        function (e) {
                                                          n(e);
                                                        }
                                                      );
                                                    });
                                                  })(r)
                                                );
                                        }).then(function (e) {
                                          return new o(function (t, n) {
                                            e.db.transaction(
                                              function (r) {
                                                function s(e) {
                                                  return new o(function (t, n) {
                                                    r.executeSql(
                                                      "DROP TABLE IF EXISTS " + e,
                                                      [],
                                                      function () {
                                                        t();
                                                      },
                                                      function (e, t) {
                                                        n(t);
                                                      }
                                                    );
                                                  });
                                                }
                                                for (var i = [], a = 0, c = e.storeNames.length; a < c; a++) i.push(s(e.storeNames[a]));
                                                o.all(i)
                                                  .then(function () {
                                                    t();
                                                  })
                                                  .catch(function (e) {
                                                    n(e);
                                                  });
                                              },
                                              function (e) {
                                                n(e);
                                              }
                                            );
                                          });
                                        })
                                      : o.reject("Invalid arguments")),
                                    t
                                  ),
                                  r
                                );
                              }
                            };
                            function J(e, t) {
                              var n = e.name + "/";
                              return e.storeName !== t.storeName && (n += e.storeName + "/"), n;
                            }
                            function Q() {
                              return (
                                !(function () {
                                  var e = "_localforage_support_test";
                                  try {
                                    return localStorage.setItem(e, !0), localStorage.removeItem(e), !1;
                                  } catch (e) {
                                    return !0;
                                  }
                                })() || localStorage.length > 0
                              );
                            }
                            var ee = {
                                _driver: "localStorageWrapper",
                                _initStorage: function (e) {
                                  var t = {};
                                  if (e) for (var n in e) t[n] = e[n];
                                  return (
                                    (t.keyPrefix = J(e, this._defaultConfig)),
                                    Q() ? ((this._dbInfo = t), (t.serializer = q), o.resolve()) : o.reject()
                                  );
                                },
                                _support: (function () {
                                  try {
                                    return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem;
                                  } catch (e) {
                                    return !1;
                                  }
                                })(),
                                iterate: function (e, t) {
                                  var n = this,
                                    r = n.ready().then(function () {
                                      for (
                                        var t = n._dbInfo, r = t.keyPrefix, s = r.length, i = localStorage.length, o = 1, a = 0;
                                        a < i;
                                        a++
                                      ) {
                                        var c = localStorage.key(a);
                                        if (0 === c.indexOf(r)) {
                                          var u = localStorage.getItem(c);
                                          if ((u && (u = t.serializer.deserialize(u)), void 0 !== (u = e(u, c.substring(s), o++))))
                                            return u;
                                        }
                                      }
                                    });
                                  return a(r, t), r;
                                },
                                getItem: function (e, t) {
                                  var n = this;
                                  e = u(e);
                                  var r = n.ready().then(function () {
                                    var t = n._dbInfo,
                                      r = localStorage.getItem(t.keyPrefix + e);
                                    return r && (r = t.serializer.deserialize(r)), r;
                                  });
                                  return a(r, t), r;
                                },
                                setItem: function (e, t, n) {
                                  var r = this;
                                  e = u(e);
                                  var s = r.ready().then(function () {
                                    t === undefined && (t = null);
                                    var n = t;
                                    return new o(function (s, i) {
                                      var o = r._dbInfo;
                                      o.serializer.serialize(t, function (t, r) {
                                        if (r) i(r);
                                        else
                                          try {
                                            localStorage.setItem(o.keyPrefix + e, t), s(n);
                                          } catch (e) {
                                            ("QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name) || i(e), i(e);
                                          }
                                      });
                                    });
                                  });
                                  return a(s, n), s;
                                },
                                removeItem: function (e, t) {
                                  var n = this;
                                  e = u(e);
                                  var r = n.ready().then(function () {
                                    var t = n._dbInfo;
                                    localStorage.removeItem(t.keyPrefix + e);
                                  });
                                  return a(r, t), r;
                                },
                                clear: function (e) {
                                  var t = this,
                                    n = t.ready().then(function () {
                                      for (var e = t._dbInfo.keyPrefix, n = localStorage.length - 1; n >= 0; n--) {
                                        var r = localStorage.key(n);
                                        0 === r.indexOf(e) && localStorage.removeItem(r);
                                      }
                                    });
                                  return a(n, e), n;
                                },
                                length: function (e) {
                                  var t = this.keys().then(function (e) {
                                    return e.length;
                                  });
                                  return a(t, e), t;
                                },
                                key: function (e, t) {
                                  var n = this,
                                    r = n.ready().then(function () {
                                      var t,
                                        r = n._dbInfo;
                                      try {
                                        t = localStorage.key(e);
                                      } catch (e) {
                                        t = null;
                                      }
                                      return t && (t = t.substring(r.keyPrefix.length)), t;
                                    });
                                  return a(r, t), r;
                                },
                                keys: function (e) {
                                  var t = this,
                                    n = t.ready().then(function () {
                                      for (var e = t._dbInfo, n = localStorage.length, r = [], s = 0; s < n; s++) {
                                        var i = localStorage.key(s);
                                        0 === i.indexOf(e.keyPrefix) && r.push(i.substring(e.keyPrefix.length));
                                      }
                                      return r;
                                    });
                                  return a(n, e), n;
                                },
                                dropInstance: function (e, t) {
                                  if (((t = l.apply(this, arguments)), !(e = ("function" != typeof e && e) || {}).name)) {
                                    var n = this.config();
                                    (e.name = e.name || n.name), (e.storeName = e.storeName || n.storeName);
                                  }
                                  var r,
                                    s = this;
                                  return (
                                    (r = e.name
                                      ? new o(function (t) {
                                          e.storeName ? t(J(e, s._defaultConfig)) : t(e.name + "/");
                                        }).then(function (e) {
                                          for (var t = localStorage.length - 1; t >= 0; t--) {
                                            var n = localStorage.key(t);
                                            0 === n.indexOf(e) && localStorage.removeItem(n);
                                          }
                                        })
                                      : o.reject("Invalid arguments")),
                                    a(r, t),
                                    r
                                  );
                                }
                              },
                              te = function (e, t) {
                                for (var n, r, s = e.length, i = 0; i < s; ) {
                                  if ((n = e[i]) === (r = t) || ("number" == typeof n && "number" == typeof r && isNaN(n) && isNaN(r)))
                                    return !0;
                                  i++;
                                }
                                return !1;
                              },
                              ne =
                                Array.isArray ||
                                function (e) {
                                  return "[object Array]" === Object.prototype.toString.call(e);
                                },
                              re = {},
                              se = {},
                              ie = { INDEXEDDB: D, WEBSQL: X, LOCALSTORAGE: ee },
                              oe = [ie.INDEXEDDB._driver, ie.WEBSQL._driver, ie.LOCALSTORAGE._driver],
                              ae = ["dropInstance"],
                              ce = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(ae),
                              ue = {
                                description: "",
                                driver: oe.slice(),
                                name: "localforage",
                                size: 4980736,
                                storeName: "keyvaluepairs",
                                version: 1
                              };
                            function le(e, t) {
                              e[t] = function () {
                                var n = arguments;
                                return e.ready().then(function () {
                                  return e[t].apply(e, n);
                                });
                              };
                            }
                            function de() {
                              for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                if (t)
                                  for (var n in t)
                                    t.hasOwnProperty(n) && (ne(t[n]) ? (arguments[0][n] = t[n].slice()) : (arguments[0][n] = t[n]));
                              }
                              return arguments[0];
                            }
                            var pe = (function () {
                                function e(t) {
                                  for (var n in ((function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                  })(this, e),
                                  ie))
                                    if (ie.hasOwnProperty(n)) {
                                      var r = ie[n],
                                        s = r._driver;
                                      (this[n] = s), re[s] || this.defineDriver(r);
                                    }
                                  (this._defaultConfig = de({}, ue)),
                                    (this._config = de({}, this._defaultConfig, t)),
                                    (this._driverSet = null),
                                    (this._initDriver = null),
                                    (this._ready = !1),
                                    (this._dbInfo = null),
                                    this._wrapLibraryMethodsWithReady(),
                                    this.setDriver(this._config.driver).catch(function () {});
                                }
                                return (
                                  (e.prototype.config = function (e) {
                                    if ("object" === (void 0 === e ? "undefined" : r(e))) {
                                      if (this._ready) return new Error("Can't call config() after localforage " + "has been used.");
                                      for (var t in e) {
                                        if (
                                          ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")),
                                          "version" === t && "number" != typeof e[t])
                                        )
                                          return new Error("Database version must be a number.");
                                        this._config[t] = e[t];
                                      }
                                      return !("driver" in e) || !e.driver || this.setDriver(this._config.driver);
                                    }
                                    return "string" == typeof e ? this._config[e] : this._config;
                                  }),
                                  (e.prototype.defineDriver = function (e, t, n) {
                                    var r = new o(function (t, n) {
                                      try {
                                        var r = e._driver,
                                          s = new Error(
                                            "Custom driver not compliant; see " + "https://mozilla.github.io/localForage/#definedriver"
                                          );
                                        if (!e._driver) return void n(s);
                                        for (var i = ce.concat("_initStorage"), c = 0, u = i.length; c < u; c++) {
                                          var l = i[c];
                                          if ((!te(ae, l) || e[l]) && "function" != typeof e[l]) return void n(s);
                                        }
                                        !(function () {
                                          for (
                                            var t = function (e) {
                                                return function () {
                                                  var t = new Error("Method " + e + " is not implemented by the current driver"),
                                                    n = o.reject(t);
                                                  return a(n, arguments[arguments.length - 1]), n;
                                                };
                                              },
                                              n = 0,
                                              r = ae.length;
                                            n < r;
                                            n++
                                          ) {
                                            var s = ae[n];
                                            e[s] || (e[s] = t(s));
                                          }
                                        })();
                                        var d = function (n) {
                                          re[r] && console.info("Redefining LocalForage driver: " + r), (re[r] = e), (se[r] = n), t();
                                        };
                                        "_support" in e
                                          ? e._support && "function" == typeof e._support
                                            ? e._support().then(d, n)
                                            : d(!!e._support)
                                          : d(!0);
                                      } catch (e) {
                                        n(e);
                                      }
                                    });
                                    return c(r, t, n), r;
                                  }),
                                  (e.prototype.driver = function () {
                                    return this._driver || null;
                                  }),
                                  (e.prototype.getDriver = function (e, t, n) {
                                    var r = re[e] ? o.resolve(re[e]) : o.reject(new Error("Driver not found."));
                                    return c(r, t, n), r;
                                  }),
                                  (e.prototype.getSerializer = function (e) {
                                    var t = o.resolve(q);
                                    return c(t, e), t;
                                  }),
                                  (e.prototype.ready = function (e) {
                                    var t = this,
                                      n = t._driverSet.then(function () {
                                        return null === t._ready && (t._ready = t._initDriver()), t._ready;
                                      });
                                    return c(n, e, e), n;
                                  }),
                                  (e.prototype.setDriver = function (e, t, n) {
                                    var r = this;
                                    ne(e) || (e = [e]);
                                    var s = this._getSupportedDrivers(e);
                                    function i() {
                                      r._config.driver = r.driver();
                                    }
                                    function a(e) {
                                      return r._extend(e), i(), (r._ready = r._initStorage(r._config)), r._ready;
                                    }
                                    var u =
                                      null !== this._driverSet
                                        ? this._driverSet.catch(function () {
                                            return o.resolve();
                                          })
                                        : o.resolve();
                                    return (
                                      (this._driverSet = u
                                        .then(function () {
                                          var e = s[0];
                                          return (
                                            (r._dbInfo = null),
                                            (r._ready = null),
                                            r.getDriver(e).then(function (e) {
                                              (r._driver = e._driver),
                                                i(),
                                                r._wrapLibraryMethodsWithReady(),
                                                (r._initDriver = (function (e) {
                                                  return function () {
                                                    var t = 0;
                                                    return (function n() {
                                                      for (; t < e.length; ) {
                                                        var s = e[t];
                                                        return t++, (r._dbInfo = null), (r._ready = null), r.getDriver(s).then(a).catch(n);
                                                      }
                                                      i();
                                                      var c = new Error("No available storage method found.");
                                                      return (r._driverSet = o.reject(c)), r._driverSet;
                                                    })();
                                                  };
                                                })(s));
                                            })
                                          );
                                        })
                                        .catch(function () {
                                          i();
                                          var e = new Error("No available storage method found.");
                                          return (r._driverSet = o.reject(e)), r._driverSet;
                                        })),
                                      c(this._driverSet, t, n),
                                      this._driverSet
                                    );
                                  }),
                                  (e.prototype.supports = function (e) {
                                    return !!se[e];
                                  }),
                                  (e.prototype._extend = function (e) {
                                    de(this, e);
                                  }),
                                  (e.prototype._getSupportedDrivers = function (e) {
                                    for (var t = [], n = 0, r = e.length; n < r; n++) {
                                      var s = e[n];
                                      this.supports(s) && t.push(s);
                                    }
                                    return t;
                                  }),
                                  (e.prototype._wrapLibraryMethodsWithReady = function () {
                                    for (var e = 0, t = ce.length; e < t; e++) le(this, ce[e]);
                                  }),
                                  (e.prototype.createInstance = function (t) {
                                    return new e(t);
                                  }),
                                  e
                                );
                              })(),
                              fe = new pe();
                            t.exports = fe;
                          },
                          { 3: 3 }
                        ]
                      },
                      {},
                      [4]
                    )(4);
                  });
                }).call(this);
              }).call(
                this,
                "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
              );
            },
            {}
          ],
          147: [
            function (e, t, n) {
              var r,
                s,
                i = (t.exports = {});
              function o() {
                throw new Error("setTimeout has not been defined");
              }
              function a() {
                throw new Error("clearTimeout has not been defined");
              }
              function c(e) {
                if (r === setTimeout) return setTimeout(e, 0);
                if ((r === o || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
                try {
                  return r(e, 0);
                } catch (t) {
                  try {
                    return r.call(null, e, 0);
                  } catch (t) {
                    return r.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  r = "function" == typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  r = o;
                }
                try {
                  s = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (e) {
                  s = a;
                }
              })();
              var u,
                l = [],
                d = !1,
                p = -1;
              function f() {
                d && u && ((d = !1), u.length ? (l = u.concat(l)) : (p = -1), l.length && _());
              }
              function _() {
                if (!d) {
                  var e = c(f);
                  d = !0;
                  for (var t = l.length; t; ) {
                    for (u = l, l = []; ++p < t; ) u && u[p].run();
                    (p = -1), (t = l.length);
                  }
                  (u = null),
                    (d = !1),
                    (function (e) {
                      if (s === clearTimeout) return clearTimeout(e);
                      if ((s === a || !s) && clearTimeout) return (s = clearTimeout), clearTimeout(e);
                      try {
                        return s(e);
                      } catch (t) {
                        try {
                          return s.call(null, e);
                        } catch (t) {
                          return s.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function h(e, t) {
                (this.fun = e), (this.array = t);
              }
              function m() {}
              (i.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                l.push(new h(e, t)), 1 !== l.length || d || c(_);
              }),
                (h.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = m),
                (i.addListener = m),
                (i.once = m),
                (i.off = m),
                (i.removeListener = m),
                (i.removeAllListeners = m),
                (i.emit = m),
                (i.prependListener = m),
                (i.prependOnceListener = m),
                (i.listeners = function (e) {
                  return [];
                }),
                (i.binding = function (e) {
                  throw new Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (e) {
                  throw new Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                  return 0;
                });
            },
            {}
          ],
          148: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.AllProperties = void 0),
                (n.maskObject = function e(t, n) {
                  let s = !1;
                  if (Object.keys(n).includes(r)) {
                    if (Object.keys(n).length > 1) throw new Error("AllProperties mask key does not support sibling keys");
                    s = !0;
                  }
                  return Object.keys(t).reduce((i, o) => {
                    const a = s ? n[r] : n[o];
                    if (!0 === a) i[o] = t[o];
                    else if (a && "object" == typeof a) i[o] = e(t[o], a);
                    else {
                      if (a !== undefined && !1 !== a) throw new Error(`Unsupported mask entry: ${a}`);
                      i[o] = typeof t[o];
                    }
                    return i;
                  }, {});
                });
              const r = (n.AllProperties = Symbol("*"));
            },
            {}
          ]
        },
        {},
        [4]
      );
}
