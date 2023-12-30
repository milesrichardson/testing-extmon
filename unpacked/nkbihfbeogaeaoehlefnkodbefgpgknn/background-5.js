LavaPack.loadBundle(
  [
    [
      92,
      {
        "../../shared/constants/app": 4749,
        "../../shared/constants/hardware-wallets": 4754,
        "../../shared/constants/keyring": 4755,
        "../../shared/constants/logs": 4757,
        "../../shared/constants/metametrics": 4758,
        "../../shared/constants/network": 4759,
        "../../shared/constants/permissions": 4760,
        "../../shared/constants/swaps": 4766,
        "../../shared/constants/time": 4768,
        "../../shared/constants/tokens": 4769,
        "../../shared/constants/transaction": 4770,
        "../../shared/lib/metamask-controller-utils": 4773,
        "../../shared/lib/token-util.ts": 4777,
        "../../shared/modules/conversion.utils": 4784,
        "../../shared/modules/mv3.utils": 4790,
        "../../shared/modules/network.utils": 4791,
        "../../shared/modules/string-utils": 4797,
        "../../shared/modules/transaction.utils": 4799,
        "../../shared/notifications": 4801,
        "./controllers/alert": 6,
        "./controllers/app-metadata": 7,
        "./controllers/app-state": 8,
        "./controllers/cached-balances": 9,
        "./controllers/decrypt-message": 10,
        "./controllers/detect-tokens": 11,
        "./controllers/encryption-public-key": 12,
        "./controllers/ens": 14,
        "./controllers/metametrics": 15,
        "./controllers/onboarding": 16,
        "./controllers/permissions": 20,
        "./controllers/preferences": 25,
        "./controllers/swaps": 26,
        "./controllers/transactions": 30,
        "./detect-multiple-instances": 36,
        "./lib/ComposableObservableStore": 38,
        "./lib/account-tracker": 39,
        "./lib/backup": 40,
        "./lib/createDupeReqFilterMiddleware": 42,
        "./lib/createLoggerMiddleware": 43,
        "./lib/createMetaRPCHandler": 44,
        "./lib/createMetamaskMiddleware": 45,
        "./lib/createOnboardingMiddleware": 46,
        "./lib/createOriginMiddleware": 47,
        "./lib/createRPCMethodTrackingMiddleware": 48,
        "./lib/createTabIdMiddleware": 50,
        "./lib/keyring-snaps-permissions": 58,
        "./lib/ppom/indexed-db-backend": 65,
        "./lib/ppom/ppom": 67,
        "./lib/ppom/ppom-middleware": 66,
        "./lib/rpc-method-middleware": 78,
        "./lib/security-provider-helpers": 79,
        "./lib/segment": 81,
        "./lib/snap-keyring": 85,
        "./lib/stream-utils": 89,
        "./lib/transaction-metrics": 90,
        "./lib/util": 91,
        "./translate": 204,
        "@keystonehq/metamask-airgapped-keyring": 574,
        "@metamask/address-book-controller": 1047,
        "@metamask/announcement-controller": 1073,
        "@metamask/approval-controller": 1076,
        "@metamask/assets-controllers": 1095,
        "@metamask/base-controller": 1119,
        "@metamask/browser-passworder": 1120,
        "@metamask/controller-utils": 1124,
        "@metamask/eth-json-rpc-middleware": 1196,
        "@metamask/eth-keyring-controller": 1218,
        "@metamask/eth-ledger-bridge-keyring": 1244,
        "@metamask/eth-trezor-keyring": 1340,
        "@metamask/gas-fee-controller": 1383,
        "@metamask/keyring-controller": 1524,
        "@metamask/logging-controller": 1545,
        "@metamask/network-controller": 1626,
        "@metamask/notification-controller": 1649,
        "@metamask/obs-store": 1659,
        "@metamask/obs-store/dist/asStream": 1658,
        "@metamask/permission-controller": 1667,
        "@metamask/phishing-controller": 1695,
        "@metamask/ppom-validator": 1723,
        "@metamask/rate-limit-controller": 1752,
        "@metamask/scure-bip39/dist/wordlists/english": 1779,
        "@metamask/selected-network-controller": 1791,
        "@metamask/signature-controller": 1793,
        "@metamask/smart-transactions-controller": 1797,
        "@metamask/snaps-controllers": 1828,
        "@sentry/browser": 2179,
        "await-semaphore": 2785,
        buffer: 2913,
        "eth-json-rpc-filters": 3189,
        "eth-json-rpc-filters/subscriptionManager": 3191,
        "eth-lattice-keyring": 3193,
        "eth-query": 3222,
        "eth-rpc-errors": 3226,
        events: 3331,
        "json-rpc-engine": 3868,
        "json-rpc-middleware-stream": 3872,
        lodash: 4071,
        loglevel: 4083,
        nanoid: 4157,
        pump: 4277
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = r.METAMASK_CONTROLLER_EVENTS = void 0);
                    var n = Qe(e("events")),
                      o = Qe(e("pump")),
                      s = e("@metamask/obs-store"),
                      i = e("@metamask/obs-store/dist/asStream"),
                      a = e("json-rpc-engine"),
                      l = e("json-rpc-middleware-stream"),
                      c = e("@metamask/eth-json-rpc-middleware"),
                      d = e("lodash"),
                      h = e("@metamask/eth-keyring-controller"),
                      p = e("@metamask/keyring-controller"),
                      u = Qe(e("eth-json-rpc-filters")),
                      g = Qe(e("eth-json-rpc-filters/subscriptionManager")),
                      C = e("eth-rpc-errors"),
                      m = e("await-semaphore"),
                      b = Qe(e("loglevel")),
                      k = e("@metamask/eth-trezor-keyring"),
                      w = Qe(e("@metamask/eth-ledger-bridge-keyring")),
                      f = Qe(e("eth-lattice-keyring")),
                      y = e("@keystonehq/metamask-airgapped-keyring"),
                      v = Qe(e("eth-query")),
                      S = Qe(e("nanoid")),
                      T = e("@sentry/browser"),
                      M = e("@metamask/address-book-controller"),
                      A = e("@metamask/approval-controller"),
                      P = e("@metamask/base-controller"),
                      E = e("@metamask/assets-controllers"),
                      N = e("@metamask/phishing-controller"),
                      R = e("@metamask/announcement-controller"),
                      I = e("@metamask/network-controller"),
                      O = e("@metamask/gas-fee-controller"),
                      L = e("@metamask/permission-controller"),
                      x = Qe(e("@metamask/smart-transactions-controller")),
                      U = e("@metamask/selected-network-controller"),
                      F = e("@metamask/logging-controller"),
                      _ = e("@metamask/browser-passworder"),
                      D = e("@metamask/rate-limit-controller"),
                      j = e("@metamask/notification-controller"),
                      K = e("@metamask/snaps-controllers"),
                      B = e("@metamask/signature-controller"),
                      q = e("@metamask/ppom-validator"),
                      $ = e("@metamask/controller-utils"),
                      G = e("@metamask/scure-bip39/dist/wordlists/english"),
                      V = e("../../shared/constants/transaction"),
                      H = e("../../shared/constants/swaps"),
                      W = e("../../shared/constants/network"),
                      z = e("../../shared/constants/hardware-wallets"),
                      Q = e("../../shared/constants/keyring"),
                      Y = e("../../shared/constants/permissions"),
                      J = e("../../shared/notifications"),
                      X = e("../../shared/constants/time"),
                      Z = e("../../shared/constants/app"),
                      ee = e("../../shared/constants/metametrics"),
                      te = e("../../shared/constants/logs"),
                      re = e("../../shared/lib/token-util.ts"),
                      ne = e("../../shared/modules/string-utils"),
                      oe = e("../../shared/modules/transaction.utils"),
                      se = e("../../shared/constants/tokens"),
                      ie = e("../../shared/lib/metamask-controller-utils"),
                      ae = e("../../shared/modules/mv3.utils"),
                      le = e("../../shared/modules/conversion.utils"),
                      ce = e("../../shared/modules/network.utils"),
                      de = e("./lib/transaction-metrics"),
                      he = e("./lib/keyring-snaps-permissions"),
                      pe = e("./lib/ppom/ppom-middleware"),
                      ue = (function (e, t) {
                        if (!t && e && e.__esModule) return e;
                        if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                        var r = ze(t);
                        if (r && r.has(e)) return r.get(e);
                        var n = { __proto__: null },
                          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var s in e)
                          if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, s) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, s, i) : (n[s] = e[s]);
                          }
                        return (n.default = e), r && r.set(e, n), n;
                      })(e("./lib/ppom/ppom")),
                      ge = e("./detect-multiple-instances"),
                      Ce = Qe(e("./lib/ComposableObservableStore")),
                      me = Qe(e("./lib/account-tracker")),
                      be = Qe(e("./lib/createDupeReqFilterMiddleware")),
                      ke = Qe(e("./lib/createLoggerMiddleware")),
                      we = e("./lib/rpc-method-middleware"),
                      fe = Qe(e("./lib/createOriginMiddleware")),
                      ye = Qe(e("./lib/createTabIdMiddleware")),
                      ve = Qe(e("./lib/createOnboardingMiddleware")),
                      Se = e("./lib/stream-utils"),
                      Te = Qe(e("./controllers/ens")),
                      Me = Qe(e("./controllers/preferences")),
                      Ae = Qe(e("./controllers/app-state")),
                      Pe = Qe(e("./controllers/cached-balances")),
                      Ee = Qe(e("./controllers/alert")),
                      Ne = Qe(e("./controllers/onboarding")),
                      Re = Qe(e("./lib/backup")),
                      Ie = Qe(e("./controllers/decrypt-message")),
                      Oe = Qe(e("./controllers/transactions")),
                      Le = Qe(e("./controllers/detect-tokens")),
                      xe = Qe(e("./controllers/swaps")),
                      Ue = Qe(e("./controllers/metametrics")),
                      Fe = e("./lib/segment"),
                      _e = Qe(e("./lib/createMetaRPCHandler")),
                      De = e("./lib/util"),
                      je = Qe(e("./lib/createMetamaskMiddleware")),
                      Ke = Qe(e("./controllers/encryption-public-key")),
                      Be = Qe(e("./controllers/app-metadata")),
                      qe = e("./controllers/permissions"),
                      $e = Qe(e("./lib/createRPCMethodTrackingMiddleware")),
                      Ge = e("./lib/security-provider-helpers"),
                      Ve = e("./lib/ppom/indexed-db-backend"),
                      He = e("./translate"),
                      We = e("./lib/snap-keyring");
                    function ze(e) {
                      if ("function" != typeof WeakMap) return null;
                      var t = new WeakMap(),
                        r = new WeakMap();
                      return (ze = function (e) {
                        return e ? r : t;
                      })(e);
                    }
                    function Qe(e) {
                      return e && e.__esModule ? e : { default: e };
                    }
                    function Ye(e, t, r) {
                      return (
                        (t = (function (e) {
                          var t = (function (e, t) {
                            if ("object" != typeof e || null === e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (r !== undefined) {
                              var n = r.call(e, t || "default");
                              if ("object" != typeof n) return n;
                              throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                          })(e, "string");
                          return "symbol" == typeof t ? t : String(t);
                        })(t)) in e
                          ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                          : (e[t] = r),
                        e
                      );
                    }
                    r.METAMASK_CONTROLLER_EVENTS = { UPDATE_BADGE: "updateBadge", APPROVAL_STATE_CHANGE: "ApprovalController:stateChange" };
                    class Je extends n.default {
                      constructor(e) {
                        var t;
                        super(),
                          Ye(
                            this,
                            "_trackSnapExportUsage",
                            (0, d.wrap)(
                              (0, d.memoize)(
                                () =>
                                  (0, d.throttle)(
                                    (e, t) =>
                                      this.metaMetricsController.trackEvent({
                                        event: ee.MetaMetricsEventName.SnapExportUsed,
                                        category: ee.MetaMetricsEventCategory.Snaps,
                                        properties: { snap_id: e, export: t }
                                      }),
                                    60 * X.SECOND
                                  ),
                                (e, t) => `${e}${t}`
                              ),
                              (e, ...t) => e(...t)(...t)
                            )
                          ),
                          Ye(this, "handleWatchAssetRequest", ({ asset: e, type: t, origin: r, networkClientId: n }) => {
                            switch (t) {
                              case $.ERC20:
                                return this.tokensController.watchAsset({ asset: e, type: t, networkClientId: n });
                              case $.ERC721:
                              case $.ERC1155:
                                return this.nftController.watchNft(e, t, r);
                              default:
                                throw new Error(`Asset type ${t} not supported`);
                            }
                          }),
                          Ye(this, "removePermissionsFor", (e) => {
                            try {
                              this.permissionController.revokePermissions(e);
                            } catch (e) {
                              if (!(e instanceof L.PermissionsRequestNotFoundError)) throw e;
                            }
                          }),
                          Ye(this, "updateCaveat", (e, t, r, n) => {
                            try {
                              this.controllerMessenger.call("PermissionController:updateCaveat", e, t, r, n);
                            } catch (e) {
                              if (!(e instanceof L.PermissionsRequestNotFoundError)) throw e;
                            }
                          }),
                          Ye(this, "rejectPermissionsRequest", (e) => {
                            try {
                              this.permissionController.rejectPermissionsRequest(e);
                            } catch (e) {
                              if (!(e instanceof L.PermissionsRequestNotFoundError)) throw e;
                            }
                          }),
                          Ye(this, "acceptPermissionsRequest", (e) => {
                            try {
                              this.permissionController.acceptPermissionsRequest(e);
                            } catch (e) {
                              if (!(e instanceof L.PermissionsRequestNotFoundError)) throw e;
                            }
                          }),
                          Ye(this, "resolvePendingApproval", async (e, t, r) => {
                            try {
                              await this.approvalController.accept(e, t, r);
                            } catch (e) {
                              if (!(e instanceof A.ApprovalRequestNotFoundError)) throw e;
                            }
                          }),
                          Ye(this, "rejectPendingApproval", (e, t) => {
                            try {
                              this.approvalController.reject(e, new C.EthereumRpcError(t.code, t.message, t.data));
                            } catch (e) {
                              if (!(e instanceof A.ApprovalRequestNotFoundError)) throw e;
                            }
                          });
                        const { isFirstMetaMaskControllerSetup: r } = e;
                        (this.defaultMaxListeners = 20),
                          (this.sendUpdate = (0, d.debounce)(this.privateSendUpdate.bind(this), 200 * X.MILLISECOND)),
                          (this.opts = e),
                          (this.extension = e.browser),
                          (this.platform = e.platform),
                          (this.notificationManager = e.notificationManager);
                        const n = e.initState || {},
                          o = this.platform.getVersion();
                        this.recordFirstTimeInfo(n),
                          (this.activeControllerConnections = 0),
                          (this.getRequestAccountTabIds = e.getRequestAccountTabIds),
                          (this.getOpenMetamaskTabsIds = e.getOpenMetamaskTabsIds),
                          (this.controllerMessenger = new P.ControllerMessenger()),
                          (this.loggingController = new F.LoggingController({
                            messenger: this.controllerMessenger.getRestricted({ name: "LoggingController" }),
                            state: n.LoggingController
                          })),
                          (this.localStoreApiWrapper = e.localStore),
                          (this.currentMigrationVersion = e.currentMigrationVersion),
                          (this.store = new Ce.default({ state: n, controllerMessenger: this.controllerMessenger, persist: !0 })),
                          (this.connections = {}),
                          (this.createVaultMutex = new m.Mutex()),
                          this.extension.runtime.onInstalled.addListener((e) => {
                            "update" === e.reason &&
                              ("8.1.0" === o && this.platform.openExtensionInBrowser(),
                              this.loggingController.add({
                                type: F.LogType.GenericLog,
                                data: { event: te.LOG_EVENT.VERSION_UPDATE, previousVersion: e.previousVersion, version: o }
                              }));
                          }),
                          (this.appMetadataController = new Be.default({
                            state: n.AppMetadataController,
                            currentMigrationVersion: this.currentMigrationVersion,
                            currentAppVersion: o
                          })),
                          (this.selectedNetworkController = new U.SelectedNetworkController({
                            messenger: this.controllerMessenger.getRestricted({
                              name: "SelectedNetworkController",
                              allowedActions: [
                                "SelectedNetworkController:getState",
                                "SelectedNetworkController:getNetworkClientIdForDomain",
                                "SelectedNetworkController:setNetworkClientIdForDomain"
                              ],
                              allowedEvents: ["SelectedNetworkController:stateChange", "NetworkController:stateChange"]
                            })
                          })),
                          (this.approvalController = new A.ApprovalController({
                            messenger: this.controllerMessenger.getRestricted({ name: "ApprovalController" }),
                            showApprovalRequest: e.showUserConfirmation,
                            typesExcludedFromRateLimiting: [
                              $.ApprovalType.EthSign,
                              $.ApprovalType.PersonalSign,
                              $.ApprovalType.EthSignTypedData,
                              $.ApprovalType.Transaction,
                              $.ApprovalType.WatchAsset,
                              $.ApprovalType.EthGetEncryptionPublicKey,
                              $.ApprovalType.EthDecrypt
                            ]
                          }));
                        const s = this.controllerMessenger.getRestricted({
                          name: "NetworkController",
                          allowedEvents: [
                            "NetworkController:stateChange",
                            "NetworkController:networkWillChange",
                            "NetworkController:networkDidChange",
                            "NetworkController:infuraIsBlocked",
                            "NetworkController:infuraIsUnblocked"
                          ]
                        });
                        let i = {};
                        n.NetworkController && (i = n.NetworkController),
                          (this.networkController = new I.NetworkController({
                            messenger: s,
                            state: i,
                            infuraProjectId: e.infuraProjectId,
                            trackMetaMetricsEvent: (...e) => this.metaMetricsController.trackEvent(...e)
                          })),
                          this.networkController.initializeProvider(),
                          (this.provider = this.networkController.getProviderAndBlockTracker().provider),
                          (this.blockTracker = this.networkController.getProviderAndBlockTracker().blockTracker),
                          (this.deprecatedNetworkId = null),
                          this.updateDeprecatedNetworkId(),
                          s.subscribe("NetworkController:networkDidChange", () => this.updateDeprecatedNetworkId());
                        const a = this.controllerMessenger.getRestricted({
                          name: "TokenListController",
                          allowedEvents: ["TokenListController:stateChange", "NetworkController:stateChange"]
                        });
                        (this.tokenListController = new E.TokenListController({
                          chainId: this.networkController.state.providerConfig.chainId,
                          preventPollingOnNetworkRestart: !n.TokenListController || n.TokenListController.preventPollingOnNetworkRestart,
                          messenger: a,
                          state: n.TokenListController
                        })),
                          (this.preferencesController = new Me.default({
                            initState: n.PreferencesController,
                            initLangCode: e.initLangCode,
                            onAccountRemoved: this.controllerMessenger.subscribe.bind(
                              this.controllerMessenger,
                              "KeyringController:accountRemoved"
                            ),
                            tokenListController: this.tokenListController,
                            provider: this.provider,
                            networkConfigurations: this.networkController.state.networkConfigurations
                          })),
                          (this.assetsContractController = new E.AssetsContractController(
                            {
                              chainId: this.networkController.state.providerConfig.chainId,
                              onPreferencesStateChange: (e) => this.preferencesController.store.subscribe(e),
                              onNetworkStateChange: (e) =>
                                s.subscribe("NetworkController:networkDidChange", () => {
                                  const t = this.networkController.state;
                                  return e(t);
                                }),
                              getNetworkClientById: this.networkController.getNetworkClientById.bind(this.networkController)
                            },
                            { provider: this.provider },
                            n.AssetsContractController
                          ));
                        const l = this.controllerMessenger.getRestricted({
                          name: "TokensController",
                          allowedActions: ["ApprovalController:addRequest"],
                          allowedEvents: ["NetworkController:stateChange"]
                        });
                        this.tokensController = new E.TokensController({
                          messenger: l,
                          chainId: this.networkController.state.providerConfig.chainId,
                          onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
                          onNetworkStateChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                          onTokenListStateChange: (e) =>
                            this.controllerMessenger.subscribe(`${this.tokenListController.name}:stateChange`, e),
                          getNetworkClientById: this.networkController.getNetworkClientById.bind(this.networkController),
                          getERC20TokenName: this.assetsContractController.getERC20TokenName.bind(this.assetsContractController),
                          config: { provider: this.provider },
                          state: n.TokensController
                        });
                        const c = this.controllerMessenger.getRestricted({
                          name: "NftController",
                          allowedActions: [`${this.approvalController.name}:addRequest`]
                        });
                        (this.nftController = new E.NftController(
                          {
                            messenger: c,
                            chainId: this.networkController.state.providerConfig.chainId,
                            onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
                            onNetworkStateChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                            getERC721AssetName: this.assetsContractController.getERC721AssetName.bind(this.assetsContractController),
                            getERC721AssetSymbol: this.assetsContractController.getERC721AssetSymbol.bind(this.assetsContractController),
                            getERC721TokenURI: this.assetsContractController.getERC721TokenURI.bind(this.assetsContractController),
                            getERC721OwnerOf: this.assetsContractController.getERC721OwnerOf.bind(this.assetsContractController),
                            getERC1155BalanceOf: this.assetsContractController.getERC1155BalanceOf.bind(this.assetsContractController),
                            getERC1155TokenURI: this.assetsContractController.getERC1155TokenURI.bind(this.assetsContractController),
                            onNftAdded: ({ address: e, symbol: t, tokenId: r, standard: n, source: o }) =>
                              this.metaMetricsController.trackEvent({
                                event: ee.MetaMetricsEventName.NftAdded,
                                category: ee.MetaMetricsEventCategory.Wallet,
                                sensitiveProperties: {
                                  token_contract_address: e,
                                  token_symbol: t,
                                  token_id: r,
                                  token_standard: n,
                                  asset_type: V.AssetType.NFT,
                                  source: o
                                }
                              }),
                            getNetworkClientById: this.networkController.getNetworkClientById.bind(this.networkController)
                          },
                          {},
                          n.NftController
                        )),
                          this.nftController.setApiKey(null),
                          (this.nftDetectionController = new E.NftDetectionController({
                            chainId: this.networkController.state.providerConfig.chainId,
                            onNftsStateChange: (e) => this.nftController.subscribe(e),
                            onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
                            onNetworkStateChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                            getOpenSeaApiKey: () => this.nftController.openSeaApiKey,
                            getBalancesInSingleCall: this.assetsContractController.getBalancesInSingleCall.bind(
                              this.assetsContractController
                            ),
                            addNft: this.nftController.addNft.bind(this.nftController),
                            getNftState: () => this.nftController.state
                          })),
                          (this.metaMetricsController = new Ue.default({
                            segment: Fe.segment,
                            preferencesStore: this.preferencesController.store,
                            onNetworkDidChange: s.subscribe.bind(s, "NetworkController:networkDidChange"),
                            getNetworkIdentifier: () => {
                              const { type: e, rpcUrl: t } = this.networkController.state.providerConfig;
                              return e === W.NETWORK_TYPES.RPC ? t : e;
                            },
                            getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                            version: this.platform.getVersion(),
                            environment: "production",
                            extension: this.extension,
                            initState: n.MetaMetricsController,
                            captureException: T.captureException
                          })),
                          this.on("update", (e) => {
                            this.metaMetricsController.handleMetaMaskStateUpdate(e);
                          });
                        const u = this.controllerMessenger.getRestricted({ name: "GasFeeController" }),
                          g = H.GAS_API_BASE_URL;
                        (this.gasFeeController = new O.GasFeeController({
                          state: n.GasFeeController,
                          interval: 1e4,
                          messenger: u,
                          clientId: H.SWAPS_CLIENT_ID,
                          getProvider: () => this.networkController.getProviderAndBlockTracker().provider,
                          onNetworkStateChange: (e) => {
                            s.subscribe("NetworkController:networkDidChange", () => e(this.networkController.state));
                          },
                          getCurrentNetworkEIP1559Compatibility: this.networkController.getEIP1559Compatibility.bind(
                            this.networkController
                          ),
                          getCurrentAccountEIP1559Compatibility: this.getCurrentAccountEIP1559Compatibility.bind(this),
                          legacyAPIEndpoint: `${g}/networks/<chain_id>/gasPrices`,
                          EIP1559APIEndpoint: `${g}/networks/<chain_id>/suggestedGasFees`,
                          getCurrentNetworkLegacyGasAPICompatibility: () => {
                            const { chainId: e } = this.networkController.state.providerConfig;
                            return e === W.CHAIN_IDS.BSC;
                          },
                          getChainId: () => this.networkController.state.providerConfig.chainId
                        })),
                          (this.appStateController = new Ae.default({
                            addUnlockListener: this.on.bind(this, "unlock"),
                            isUnlocked: this.isUnlocked.bind(this),
                            initState: n.AppStateController,
                            onInactiveTimeout: () => this.setLocked(),
                            preferencesStore: this.preferencesController.store,
                            messenger: this.controllerMessenger.getRestricted({
                              name: "AppStateController",
                              allowedActions: [
                                `${this.approvalController.name}:addRequest`,
                                `${this.approvalController.name}:acceptRequest`
                              ],
                              allowedEvents: ["KeyringController:qrKeyringStateChange"]
                            }),
                            extension: this.extension
                          }));
                        const v = this.controllerMessenger.getRestricted({ name: "CurrencyRateController" });
                        (this.currencyRateController = new E.CurrencyRateController({
                          includeUsdRate: !0,
                          messenger: v,
                          state: { ...n.CurrencyController, nativeCurrency: this.networkController.state.providerConfig.ticker }
                        })),
                          (this.phishingController = new N.PhishingController({}, n.PhishingController)),
                          this.phishingController.maybeUpdateState(),
                          (this.ppomController = new q.PPOMController({
                            messenger: this.controllerMessenger.getRestricted({ name: "PPOMController" }),
                            storageBackend: new Ve.IndexedDBPPOMStorage("PPOMDB", 1),
                            provider: this.provider,
                            ppomProvider: { PPOM: ue.PPOM, ppomInit: ue.default },
                            state: n.PPOMController,
                            chainId: this.networkController.state.providerConfig.chainId,
                            onNetworkChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                            securityAlertsEnabled: this.preferencesController.store.getState().securityAlertsEnabled,
                            onPreferencesChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
                            cdnBaseUrl: "static.metafi.codefi.network/api/v1/confirmations/ppom",
                            blockaidPublicKey: "066ad3e8af5583385e312c156d238055215d5f25247c1e91055afa756cb98a88"
                          }));
                        const S = this.controllerMessenger.getRestricted({ name: "AnnouncementController" });
                        (this.announcementController = new R.AnnouncementController({
                          messenger: S,
                          allAnnouncements: J.UI_NOTIFICATIONS,
                          state: n.AnnouncementController
                        })),
                          (this.tokenRatesController = new E.TokenRatesController(
                            {
                              chainId: this.networkController.state.providerConfig.chainId,
                              ticker: this.networkController.state.providerConfig.ticker,
                              selectedAddress: this.preferencesController.getSelectedAddress(),
                              onTokensStateChange: (e) => this.tokensController.subscribe(e),
                              onNetworkStateChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                              onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store)
                            },
                            {},
                            n.TokenRatesController
                          )),
                          this.preferencesController.store.getState().useCurrencyRateCheck && this.tokenRatesController.start(),
                          this.preferencesController.store.subscribe(
                            (0, De.previousValueComparator)((e, t) => {
                              const { useCurrencyRateCheck: r } = e,
                                { useCurrencyRateCheck: n } = t;
                              n && !r
                                ? (this.currencyRateController.start(), this.tokenRatesController.start())
                                : !n && r && (this.currencyRateController.stop(), this.tokenRatesController.stop());
                            }, this.preferencesController.store.getState())
                          ),
                          (this.ensController = new Te.default({
                            provider: this.provider,
                            getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                            onNetworkDidChange: s.subscribe.bind(s, "NetworkController:networkDidChange")
                          })),
                          (this.onboardingController = new Ne.default({ initState: n.OnboardingController })),
                          (this.accountTracker = new me.default({
                            provider: this.provider,
                            blockTracker: this.blockTracker,
                            getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                            getNetworkIdentifier: () => {
                              const { type: e, rpcUrl: t } = this.networkController.state.providerConfig;
                              return e === W.NETWORK_TYPES.RPC ? t : e;
                            },
                            preferencesController: this.preferencesController,
                            onboardingController: this.onboardingController,
                            initState:
                              ae.isManifestV3 && !1 === r && null !== (t = n.AccountTracker) && void 0 !== t && t.accounts
                                ? { accounts: n.AccountTracker.accounts }
                                : { accounts: {} },
                            onAccountRemoved: this.controllerMessenger.subscribe.bind(
                              this.controllerMessenger,
                              "KeyringController:accountRemoved"
                            )
                          })),
                          this.on("controllerConnectionChanged", (e) => {
                            const { completedOnboarding: t } = this.onboardingController.store.getState();
                            e > 0 && t ? this.triggerNetworkrequests() : this.stopNetworkRequests();
                          }),
                          this.onboardingController.store.subscribe(
                            (0, De.previousValueComparator)(async (e, t) => {
                              const { completedOnboarding: r } = e,
                                { completedOnboarding: n } = t;
                              !r && n && this.triggerNetworkrequests();
                            }, this.onboardingController.store.getState())
                          ),
                          (this.cachedBalancesController = new Pe.default({
                            accountTracker: this.accountTracker,
                            getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                            initState: n.CachedBalancesController
                          }));
                        let _ = [(0, h.keyringBuilderFactory)(y.MetaMaskKeyring)];
                        if (this.canUseHardwareWallets()) {
                          var G;
                          const e = null === (G = this.opts.overrides) || void 0 === G ? void 0 : G.keyrings;
                          _ = [
                            (null == e ? void 0 : e.trezor) || k.TrezorKeyring,
                            (null == e ? void 0 : e.ledger) || w.default,
                            (null == e ? void 0 : e.lattice) || f.default,
                            y.MetaMaskKeyring
                          ].map((e) => (0, h.keyringBuilderFactory)(e));
                        }
                        _.push(
                          (0, We.snapKeyringBuilder)(
                            () => this.snapController,
                            () => this.approvalController,
                            () => this.keyringController,
                            () => this.preferencesController,
                            () => this.phishingController,
                            (e) => this.removeAccount(e)
                          )
                        );
                        const z = this.controllerMessenger.getRestricted({
                          name: "KeyringController",
                          allowedActions: [
                            "KeyringController:getState",
                            "KeyringController:signMessage",
                            "KeyringController:signPersonalMessage",
                            "KeyringController:signTypedMessage",
                            "KeyringController:decryptMessage",
                            "KeyringController:getEncryptionPublicKey",
                            "KeyringController:getKeyringsByType",
                            "KeyringController:getKeyringForAccount",
                            "KeyringController:getAccounts"
                          ],
                          allowedEvents: [
                            "KeyringController:stateChange",
                            "KeyringController:lock",
                            "KeyringController:unlock",
                            "KeyringController:accountRemoved",
                            "KeyringController:qrKeyringStateChange"
                          ]
                        });
                        (this.keyringController = new p.KeyringController({
                          keyringBuilders: _,
                          state: n.KeyringController,
                          encryptor: e.encryptor || undefined,
                          cacheEncryptionKey: ae.isManifestV3,
                          messenger: z,
                          removeIdentity: this.preferencesController.removeAddress.bind(this.preferencesController),
                          setAccountLabel: this.preferencesController.setAccountLabel.bind(this.preferencesController),
                          setSelectedAddress: this.preferencesController.setSelectedAddress.bind(this.preferencesController),
                          syncIdentities: this.preferencesController.syncAddresses.bind(this.preferencesController),
                          updateIdentities: this.preferencesController.setAddresses.bind(this.preferencesController)
                        })),
                          this.controllerMessenger.subscribe("KeyringController:unlock", () => this._onUnlock()),
                          this.controllerMessenger.subscribe("KeyringController:lock", () => this._onLock()),
                          this.controllerMessenger.subscribe("KeyringController:stateChange", (e) => {
                            this._onKeyringControllerUpdate(e);
                          });
                        const Q = () => this.preferencesController.store.getState().identities;
                        (this.permissionController = new L.PermissionController({
                          messenger: this.controllerMessenger.getRestricted({
                            name: "PermissionController",
                            allowedActions: [
                              `${this.approvalController.name}:addRequest`,
                              `${this.approvalController.name}:hasRequest`,
                              `${this.approvalController.name}:acceptRequest`,
                              `${this.approvalController.name}:rejectRequest`,
                              "SnapController:getPermitted",
                              "SnapController:install",
                              "SubjectMetadataController:getSubjectMetadata"
                            ]
                          }),
                          state: n.PermissionController,
                          caveatSpecifications: (0, qe.getCaveatSpecifications)({ getIdentities: Q }),
                          permissionSpecifications: {
                            ...(0, qe.getPermissionSpecifications)({
                              getIdentities: Q,
                              getAllAccounts: this.keyringController.getAccounts.bind(this.keyringController),
                              captureKeyringTypesWithMissingIdentities: (e = {}, t = []) => {
                                const r = t.filter((t) => !e[t]).map((e) => this.keyringController.getAccountKeyringType(e)),
                                  n = Object.keys(e || {}).length,
                                  o = Object.keys(this.accountTracker.store.getState().accounts || {}).length;
                                (0, T.captureException)(
                                  new Error(
                                    `Attempt to get permission specifications failed because their were ${t.length} accounts, but ${n} identities, and the ${r} keyrings included accounts with missing identities. Meanwhile, there are ${o} accounts in the account tracker.`
                                  )
                                );
                              }
                            }),
                            ...this.getSnapPermissionSpecifications()
                          },
                          unrestrictedMethods: qe.unrestrictedMethods
                        })),
                          (this.permissionLogController = new qe.PermissionLogController({
                            restrictedMethods: new Set(Object.keys(Y.RestrictedMethods)),
                            initState: n.PermissionLogController
                          })),
                          (this.subjectMetadataController = new L.SubjectMetadataController({
                            messenger: this.controllerMessenger.getRestricted({
                              name: "SubjectMetadataController",
                              allowedActions: [`${this.permissionController.name}:hasPermissions`]
                            }),
                            state: n.SubjectMetadataController,
                            subjectCacheLimit: 100
                          }));
                        const se = {
                          iframeUrl: new URL("https://execution.consensys.io/3.1.0/index.html"),
                          messenger: this.controllerMessenger.getRestricted({ name: "ExecutionService" }),
                          setupSnapProvider: this.setupSnapProvider.bind(this)
                        };
                        this.snapExecutionService = new K.IframeExecutionService(se);
                        const le = this.controllerMessenger.getRestricted({
                            name: "SnapController",
                            allowedEvents: [
                              "ExecutionService:unhandledError",
                              "ExecutionService:outboundRequest",
                              "ExecutionService:outboundResponse",
                              "SnapController:snapInstalled",
                              "SnapController:snapUpdated"
                            ],
                            allowedActions: [
                              `${this.permissionController.name}:getEndowments`,
                              `${this.permissionController.name}:getPermissions`,
                              `${this.permissionController.name}:hasPermission`,
                              `${this.permissionController.name}:hasPermissions`,
                              `${this.permissionController.name}:requestPermissions`,
                              `${this.permissionController.name}:revokeAllPermissions`,
                              `${this.permissionController.name}:revokePermissions`,
                              `${this.permissionController.name}:revokePermissionForAllSubjects`,
                              `${this.permissionController.name}:getSubjectNames`,
                              `${this.permissionController.name}:updateCaveat`,
                              `${this.approvalController.name}:addRequest`,
                              `${this.approvalController.name}:updateRequestState`,
                              `${this.permissionController.name}:grantPermissions`,
                              `${this.subjectMetadataController.name}:getSubjectMetadata`,
                              "ExecutionService:executeSnap",
                              "ExecutionService:getRpcRequestHandler",
                              "ExecutionService:terminateSnap",
                              "ExecutionService:terminateAllSnaps",
                              "ExecutionService:handleRpcRequest",
                              "SnapsRegistry:get",
                              "SnapsRegistry:getMetadata",
                              "SnapsRegistry:update",
                              "SnapsRegistry:resolveVersion"
                            ]
                          }),
                          ce = !0;
                        (this.snapController = new K.SnapController({
                          environmentEndowmentPermissions: Object.values(Y.EndowmentPermissions),
                          excludedPermissions: { ...Y.ExcludedSnapPermissions, ...Y.ExcludedSnapEndowments },
                          closeAllConnections: this.removeAllConnections.bind(this),
                          state: n.SnapController,
                          messenger: le,
                          featureFlags: { dappsCanUpdateSnaps: !0, allowLocalSnaps: !1, requireAllowlist: ce }
                        })),
                          (this.notificationController = new j.NotificationController({
                            messenger: this.controllerMessenger.getRestricted({ name: "NotificationController" }),
                            state: n.NotificationController
                          })),
                          (this.rateLimitController = new D.RateLimitController({
                            state: n.RateLimitController,
                            messenger: this.controllerMessenger.getRestricted({ name: "RateLimitController" }),
                            implementations: {
                              showNativeNotification: {
                                method: (e, t) => {
                                  const r = this.controllerMessenger.call("SubjectMetadataController:getState").subjectMetadata[e];
                                  return (
                                    this.platform._showNotification((null == r ? void 0 : r.name) ?? e, t).catch((e) => {
                                      b.default.error("Failed to create notification", e);
                                    }),
                                    null
                                  );
                                },
                                rateLimitCount: 2,
                                rateLimitTimeout: 3e5
                              },
                              showInAppNotification: {
                                method: (e, t) => (this.controllerMessenger.call("NotificationController:show", e, t), null),
                                rateLimitCount: 5,
                                rateLimitTimeout: 6e4
                              }
                            }
                          }));
                        const he = this.controllerMessenger.getRestricted({
                          name: "CronjobController",
                          allowedEvents: [
                            "SnapController:snapInstalled",
                            "SnapController:snapUpdated",
                            "SnapController:snapRemoved",
                            "SnapController:snapEnabled",
                            "SnapController:snapDisabled"
                          ],
                          allowedActions: [
                            `${this.permissionController.name}:getPermissions`,
                            "SnapController:handleRequest",
                            "SnapController:getAll"
                          ]
                        });
                        this.cronjobController = new K.CronjobController({ state: n.CronjobController, messenger: he });
                        const pe = this.controllerMessenger.getRestricted({ name: "SnapsRegistry", allowedEvents: [], allowedActions: [] });
                        this.snapsRegistry = new K.JsonSnapsRegistry({
                          state: n.SnapsRegistry,
                          messenger: pe,
                          refetchOnAllowlistMiss: ce,
                          failOnUnavailableRegistry: ce,
                          url: {
                            registry: "https://acl.execution.consensys.io/latest/registry.json",
                            signature: "https://acl.execution.consensys.io/latest/signature.json"
                          },
                          publicKey: "0x025b65308f0f0fb8bc7f7ff87bfc296e0330eee5d3c1d1ee4a048b2fd6a86fa0a6"
                        });
                        const be = this.controllerMessenger.getRestricted({
                          name: "DetectTokensController",
                          allowedActions: ["KeyringController:getState"],
                          allowedEvents: ["NetworkController:stateChange", "KeyringController:lock", "KeyringController:unlock"]
                        });
                        (this.detectTokensController = new Le.default({
                          messenger: be,
                          preferences: this.preferencesController,
                          tokensController: this.tokensController,
                          assetsContractController: this.assetsContractController,
                          network: this.networkController,
                          tokenList: this.tokenListController,
                          trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
                        })),
                          (this.addressBookController = new M.AddressBookController(undefined, n.AddressBookController)),
                          (this.alertController = new Ee.default({
                            initState: n.AlertController,
                            preferencesStore: this.preferencesController.store
                          })),
                          (this.backup = new Re.default({
                            preferencesController: this.preferencesController,
                            addressBookController: this.addressBookController,
                            networkController: this.networkController,
                            trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
                          })),
                          (this.txController = new Oe.default({
                            initState: n.TransactionController || n.TransactionManager,
                            getPermittedAccounts: this.getPermittedAccounts.bind(this),
                            getProviderConfig: () => this.networkController.state.providerConfig,
                            getCurrentNetworkEIP1559Compatibility: this.networkController.getEIP1559Compatibility.bind(
                              this.networkController
                            ),
                            getCurrentAccountEIP1559Compatibility: this.getCurrentAccountEIP1559Compatibility.bind(this),
                            getNetworkStatus: () => {
                              var e;
                              return null === (e = this.networkController.state.networksMetadata) ||
                                void 0 === e ||
                                null === (e = e[this.networkController.state.selectedNetworkClientId]) ||
                                void 0 === e
                                ? void 0
                                : e.status;
                            },
                            getNetworkState: () => this.networkController.state,
                            hasCompletedOnboarding: () => this.onboardingController.store.getState().completedOnboarding,
                            onNetworkStateChange: (e) => {
                              s.subscribe(
                                "NetworkController:stateChange",
                                () => e(),
                                (e) => e.providerConfig.chainId
                              );
                            },
                            getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                            preferencesStore: this.preferencesController.store,
                            txHistoryLimit: 60,
                            signTransaction: this.keyringController.signTransaction.bind(this.keyringController),
                            provider: this.provider,
                            blockTracker: this.blockTracker,
                            getParticipateInMetrics: () => this.metaMetricsController.state.participateInMetaMetrics,
                            getEIP1559GasFeeEstimates: this.gasFeeController.fetchGasFeeEstimates.bind(this.gasFeeController),
                            getExternalPendingTransactions: this.getExternalPendingTransactions.bind(this),
                            securityProviderRequest: this.securityProviderRequest.bind(this),
                            messenger: this.controllerMessenger.getRestricted({
                              name: "TransactionController",
                              allowedActions: [
                                `${this.approvalController.name}:addRequest`,
                                `${this.approvalController.name}:acceptRequest`,
                                `${this.approvalController.name}:rejectRequest`
                              ]
                            })
                          }));
                        const ke = this.getTransactionMetricsRequest();
                        this.txController.on("transaction-added", de.handleTransactionAdded.bind(null, ke)),
                          this.txController.on("transaction-approved", de.handleTransactionApproved.bind(null, ke)),
                          this.txController.on("transaction-dropped", de.handleTransactionDropped.bind(null, ke)),
                          this.txController.on("transaction-finalized", de.handleTransactionFinalized.bind(null, ke)),
                          this.txController.on("transaction-rejected", de.handleTransactionRejected.bind(null, ke)),
                          this.txController.on("transaction-submitted", de.handleTransactionSubmitted.bind(null, ke)),
                          this.txController.on("transaction-swap-failed", (e) => this.metaMetricsController.trackEvent(e)),
                          this.txController.on("transaction-swap-finalized", (e) => this.metaMetricsController.trackEvent(e)),
                          this.txController.on("tx:status-update", async (e, t) => {
                            if (t === V.TransactionStatus.confirmed || t === V.TransactionStatus.failed) {
                              const t = this.txController.txStateManager.getTransaction(e);
                              let o = {};
                              if (t.chainId) {
                                const { networkConfigurations: e } = this.networkController.state,
                                  r = Object.values(e).find((e) => e.chainId === t.chainId);
                                o = (null == r ? void 0 : r.rpcPrefs) ?? {};
                              }
                              try {
                                await this.platform.showTransactionNotification(t, o);
                              } catch (e) {
                                b.default.error("Failed to create transaction notification", e);
                              }
                              const { txReceipt: s } = t;
                              if (t.type === V.TransactionType.tokenMethodTransferFrom && t.txParams !== undefined) {
                                var r;
                                const { data: e, to: n, from: o } = t.txParams,
                                  { chainId: s } = t,
                                  i = (0, oe.parseStandardTokenTransactionData)(e),
                                  a = (0, re.getTokenIdParam)(i) ?? (0, ie.getTokenValueParam)(i),
                                  { allNfts: l } = this.nftController.state,
                                  c =
                                    null == l || null === (r = l[o]) || void 0 === r || null === (r = r[s]) || void 0 === r
                                      ? void 0
                                      : r.find(({ address: e, tokenId: t }) => (0, ne.isEqualCaseInsensitive)(e, n) && t === a);
                                c && this.nftController.checkAndUpdateSingleNftOwnershipStatus(c, !1, { userAddress: o, chainId: s });
                              }
                              const i = this.getState();
                              var n;
                              if (s && "0x0" === s.status)
                                this.metaMetricsController.trackEvent(
                                  {
                                    event: "Tx Status Update: On-Chain Failure",
                                    category: ee.MetaMetricsEventCategory.Background,
                                    properties: {
                                      action: "Transactions",
                                      errorMessage: null === (n = t.simulationFails) || void 0 === n ? void 0 : n.reason,
                                      numberOfTokens: i.tokens.length,
                                      numberOfAccounts: Object.keys(i.accounts).length
                                    }
                                  },
                                  { matomoEvent: !0 }
                                );
                            }
                          }),
                          s.subscribe("NetworkController:networkDidChange", async () => {
                            const { ticker: e } = this.networkController.state.providerConfig;
                            try {
                              await this.currencyRateController.setNativeCurrency(e);
                            } catch (e) {
                              console.error(e);
                            }
                          }),
                          this.networkController.lookupNetwork(),
                          (this.decryptMessageController = new Ie.default({
                            getState: this.getState.bind(this),
                            messenger: this.controllerMessenger.getRestricted({
                              name: "DecryptMessageController",
                              allowedActions: [
                                `${this.approvalController.name}:addRequest`,
                                `${this.approvalController.name}:acceptRequest`,
                                `${this.approvalController.name}:rejectRequest`,
                                `${this.keyringController.name}:decryptMessage`
                              ]
                            }),
                            metricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
                          })),
                          (this.encryptionPublicKeyController = new Ke.default({
                            messenger: this.controllerMessenger.getRestricted({
                              name: "EncryptionPublicKeyController",
                              allowedActions: [
                                `${this.approvalController.name}:addRequest`,
                                `${this.approvalController.name}:acceptRequest`,
                                `${this.approvalController.name}:rejectRequest`
                              ]
                            }),
                            getEncryptionPublicKey: this.keyringController.getEncryptionPublicKey.bind(this.keyringController),
                            getAccountKeyringType: this.keyringController.getAccountKeyringType.bind(this.keyringController),
                            getState: this.getState.bind(this),
                            metricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
                          })),
                          (this.signatureController = new B.SignatureController({
                            messenger: this.controllerMessenger.getRestricted({
                              name: "SignatureController",
                              allowedActions: [
                                `${this.approvalController.name}:addRequest`,
                                `${this.keyringController.name}:signMessage`,
                                `${this.keyringController.name}:signPersonalMessage`,
                                `${this.keyringController.name}:signTypedMessage`,
                                `${this.loggingController.name}:add`
                              ]
                            }),
                            isEthSignEnabled: () => {
                              var e;
                              return null === (e = this.preferencesController.store.getState()) ||
                                void 0 === e ||
                                null === (e = e.disabledRpcMethodPreferences) ||
                                void 0 === e
                                ? void 0
                                : e.eth_sign;
                            },
                            getAllState: this.getState.bind(this),
                            securityProviderRequest: this.securityProviderRequest.bind(this),
                            getCurrentChainId: () => this.networkController.state.providerConfig.chainId
                          })),
                          this.signatureController.hub.on("cancelWithReason", ({ message: e, reason: t }) => {
                            this.metaMetricsController.trackEvent({
                              event: t,
                              category: ee.MetaMetricsEventCategory.Transactions,
                              properties: { action: "Sign Request", type: e.type }
                            });
                          }),
                          (this.swapsController = new xe.default(
                            {
                              getBufferedGasLimit: this.txController.txGasUtil.getBufferedGasLimit.bind(this.txController.txGasUtil),
                              networkController: this.networkController,
                              onNetworkStateChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                              provider: this.provider,
                              getProviderConfig: () => this.networkController.state.providerConfig,
                              getTokenRatesState: () => this.tokenRatesController.state,
                              getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                              getEIP1559GasFeeEstimates: this.gasFeeController.fetchGasFeeEstimates.bind(this.gasFeeController),
                              trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
                            },
                            n.SwapsController
                          )),
                          (this.smartTransactionsController = new x.default(
                            {
                              onNetworkStateChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                              getNetwork: () => this.networkController.state.networkId ?? "loading",
                              getNonceLock: this.txController.nonceTracker.getNonceLock.bind(this.txController.nonceTracker),
                              confirmExternalTransaction: this.txController.confirmExternalTransaction.bind(this.txController),
                              provider: this.provider,
                              trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
                            },
                            { supportedChainIds: [W.CHAIN_IDS.MAINNET, W.CHAIN_IDS.GOERLI] },
                            n.SmartTransactionsController
                          )),
                          this.txController.on("newSwapApproval", (e) => {
                            this.swapsController.setApproveTxId(e.id);
                          }),
                          this.txController.on("newSwap", (e) => {
                            this.swapsController.setTradeTxId(e.id);
                          }),
                          s.subscribe("NetworkController:networkDidChange", () => {
                            this.accountTracker._updateAccounts();
                          }),
                          s.subscribe("NetworkController:networkWillChange", () => {
                            this.txController.txStateManager.clearUnapprovedTxs(),
                              this.encryptionPublicKeyController.clearUnapproved(),
                              this.decryptMessageController.clearUnapproved(),
                              this.signatureController.clearUnapproved(),
                              this.approvalController.clear();
                          }),
                          (this.metamaskMiddleware = (0, je.default)({
                            static: { eth_syncing: !1, web3_clientVersion: `MetaMask/v${o}` },
                            version: o,
                            getAccounts: async ({ origin: e }, { suppressUnauthorizedError: t = !0 } = {}) => {
                              if (e === Z.ORIGIN_METAMASK) {
                                const e = this.preferencesController.getSelectedAddress();
                                return e ? [e] : [];
                              }
                              return this.isUnlocked() ? await this.getPermittedAccounts(e, { suppressUnauthorizedError: t }) : [];
                            },
                            processTransaction: this.newUnapprovedTransaction.bind(this),
                            processEthSignMessage: this.signatureController.newUnsignedMessage.bind(this.signatureController),
                            processTypedMessage: this.signatureController.newUnsignedTypedMessage.bind(this.signatureController),
                            processTypedMessageV3: this.signatureController.newUnsignedTypedMessage.bind(this.signatureController),
                            processTypedMessageV4: this.signatureController.newUnsignedTypedMessage.bind(this.signatureController),
                            processPersonalMessage: this.signatureController.newUnsignedPersonalMessage.bind(this.signatureController),
                            processEncryptionPublicKey: this.encryptionPublicKeyController.newRequestEncryptionPublicKey.bind(
                              this.encryptionPublicKeyController
                            ),
                            processDecryptMessage: this.decryptMessageController.newRequestDecryptMessage.bind(
                              this.decryptMessageController
                            ),
                            getPendingNonce: this.getPendingNonce.bind(this),
                            getPendingTransactionByHash: (e) =>
                              this.txController.getTransactions({ searchCriteria: { hash: e, status: V.TransactionStatus.submitted } })[0]
                          })),
                          this.on("update", (e) => this._onStateUpdate(e));
                        const we = {
                          AccountTracker: this.accountTracker.store,
                          TxController: this.txController.memStore,
                          TokenRatesController: this.tokenRatesController,
                          DecryptMessageController: this.decryptMessageController,
                          EncryptionPublicKeyController: this.encryptionPublicKeyController,
                          SignatureController: this.signatureController,
                          SwapsController: this.swapsController.store,
                          EnsController: this.ensController.store,
                          ApprovalController: this.approvalController,
                          PPOMController: this.ppomController
                        };
                        this.store.updateStructure({
                          AppStateController: this.appStateController.store,
                          AppMetadataController: this.appMetadataController.store,
                          TransactionController: this.txController.store,
                          KeyringController: this.keyringController,
                          PreferencesController: this.preferencesController.store,
                          MetaMetricsController: this.metaMetricsController.store,
                          AddressBookController: this.addressBookController,
                          CurrencyController: this.currencyRateController,
                          NetworkController: this.networkController,
                          CachedBalancesController: this.cachedBalancesController.store,
                          AlertController: this.alertController.store,
                          OnboardingController: this.onboardingController.store,
                          PermissionController: this.permissionController,
                          PermissionLogController: this.permissionLogController.store,
                          SubjectMetadataController: this.subjectMetadataController,
                          AnnouncementController: this.announcementController,
                          GasFeeController: this.gasFeeController,
                          TokenListController: this.tokenListController,
                          TokensController: this.tokensController,
                          SmartTransactionsController: this.smartTransactionsController,
                          NftController: this.nftController,
                          PhishingController: this.phishingController,
                          SelectedNetworkController: this.selectedNetworkController,
                          LoggingController: this.loggingController,
                          SnapController: this.snapController,
                          CronjobController: this.cronjobController,
                          SnapsRegistry: this.snapsRegistry,
                          NotificationController: this.notificationController,
                          PPOMController: this.ppomController,
                          ...we
                        }),
                          (this.memStore = new Ce.default({
                            config: {
                              AppStateController: this.appStateController.store,
                              AppMetadataController: this.appMetadataController.store,
                              NetworkController: this.networkController,
                              CachedBalancesController: this.cachedBalancesController.store,
                              KeyringController: this.keyringController,
                              PreferencesController: this.preferencesController.store,
                              MetaMetricsController: this.metaMetricsController.store,
                              AddressBookController: this.addressBookController,
                              CurrencyController: this.currencyRateController,
                              AlertController: this.alertController.store,
                              OnboardingController: this.onboardingController.store,
                              PermissionController: this.permissionController,
                              PermissionLogController: this.permissionLogController.store,
                              SubjectMetadataController: this.subjectMetadataController,
                              AnnouncementController: this.announcementController,
                              GasFeeController: this.gasFeeController,
                              TokenListController: this.tokenListController,
                              TokensController: this.tokensController,
                              SmartTransactionsController: this.smartTransactionsController,
                              NftController: this.nftController,
                              SelectedNetworkController: this.selectedNetworkController,
                              LoggingController: this.loggingController,
                              SnapController: this.snapController,
                              CronjobController: this.cronjobController,
                              SnapsRegistry: this.snapsRegistry,
                              NotificationController: this.notificationController,
                              ...we
                            },
                            controllerMessenger: this.controllerMessenger
                          }));
                        const fe = [
                          this.accountTracker.resetState,
                          this.txController.resetState,
                          this.decryptMessageController.resetState.bind(this.decryptMessageController),
                          this.encryptionPublicKeyController.resetState.bind(this.encryptionPublicKeyController),
                          this.signatureController.resetState.bind(this.signatureController),
                          this.swapsController.resetState,
                          this.ensController.resetState,
                          this.approvalController.clear.bind(this.approvalController)
                        ];
                        ae.isManifestV3
                          ? !0 === r && (this.resetStates(fe), this.extension.storage.session.set({ isFirstMetaMaskControllerSetup: !1 }))
                          : this.resetStates(fe),
                          !this.isUnlocked() && this.onboardingController.store.getState().completedOnboarding
                            ? this._loginUser()
                            : this._startUISync(),
                          this.extension.runtime.getPlatformInfo().then(({ os: e }) => {
                            this.appStateController.setBrowserEnvironment(
                              e,
                              this.extension.runtime.getBrowserInfo === undefined ? "chrome" : "firefox"
                            );
                          }),
                          this.setupControllerEventSubscriptions(),
                          (this.publicConfigStore = this.createPublicConfigStore()),
                          this.extension.runtime.onMessageExternal.addListener(ge.onMessageReceived),
                          (0, ge.checkForMultipleVersionsRunning)();
                      }
                      getTransactionMetricsRequest() {
                        return {
                          ...{
                            createEventFragment: this.metaMetricsController.createEventFragment.bind(this.metaMetricsController),
                            finalizeEventFragment: this.metaMetricsController.finalizeEventFragment.bind(this.metaMetricsController),
                            getEventFragmentById: this.metaMetricsController.getEventFragmentById.bind(this.metaMetricsController),
                            updateEventFragment: this.metaMetricsController.updateEventFragment.bind(this.metaMetricsController),
                            getAccountType: this.getAccountType.bind(this),
                            getDeviceModel: this.getDeviceModel.bind(this),
                            getEIP1559GasFeeEstimates: this.gasFeeController.fetchGasFeeEstimates.bind(this.gasFeeController),
                            getSelectedAddress: () => this.preferencesController.store.getState().selectedAddress,
                            getTokenStandardAndDetails: this.getTokenStandardAndDetails.bind(this),
                            getTransaction: this.txController.txStateManager.getTransaction.bind(this.txController)
                          },
                          snapAndHardwareMessenger: this.controllerMessenger.getRestricted({
                            name: "SnapAndHardwareMessenger",
                            allowedActions: ["KeyringController:getKeyringForAccount", "SnapController:get"]
                          }),
                          provider: this.provider
                        };
                      }
                      triggerNetworkrequests() {
                        this.accountTracker.start(),
                          this.txController.startIncomingTransactionPolling(),
                          this.preferencesController.store.getState().useCurrencyRateCheck && this.currencyRateController.start(),
                          this.preferencesController.store.getState().useTokenDetection && this.tokenListController.start();
                      }
                      stopNetworkRequests() {
                        this.accountTracker.stop(),
                          this.txController.stopIncomingTransactionPolling(),
                          this.preferencesController.store.getState().useCurrencyRateCheck && this.currencyRateController.stop(),
                          this.preferencesController.store.getState().useTokenDetection && this.tokenListController.stop();
                      }
                      canUseHardwareWallets() {
                        return !ae.isManifestV3 || !1;
                      }
                      resetStates(e) {
                        e.forEach((e) => {
                          try {
                            e();
                          } catch (e) {
                            console.error(e);
                          }
                        });
                      }
                      async getSnapKeyring() {
                        let [e] = this.keyringController.getKeyringsByType(Q.KeyringType.snap);
                        return e || (e = await this.keyringController.addNewKeyring(Q.KeyringType.snap)), e;
                      }
                      handleSnapRequest(e) {
                        return (
                          this._trackSnapExportUsage(e.snapId, e.handler), this.controllerMessenger.call("SnapController:handleRequest", e)
                        );
                      }
                      getLocale() {
                        const { currentLocale: e } = this.preferencesController.store.getState();
                        return e;
                      }
                      getSnapPermissionSpecifications() {
                        return {
                          ...(0, qe.buildSnapEndowmentSpecifications)(),
                          ...(0, qe.buildSnapRestrictedMethodSpecifications)({
                            encrypt: _.encrypt,
                            decrypt: _.decrypt,
                            getLocale: this.getLocale.bind(this),
                            clearSnapState: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:clearSnapState"),
                            getMnemonic: this.getPrimaryKeyringMnemonic.bind(this),
                            getUnlockPromise: this.appStateController.getUnlockPromise.bind(this.appStateController),
                            getSnap: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:get"),
                            handleSnapRpcRequest: this.handleSnapRequest.bind(this),
                            getSnapState: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:getSnapState"),
                            showDialog: (e, t, r, n) =>
                              this.approvalController.addAndShowApprovalRequest({
                                origin: e,
                                type: Z.SNAP_DIALOG_TYPES[t],
                                requestData: { content: r, placeholder: n }
                              }),
                            showNativeNotification: (e, t) =>
                              this.controllerMessenger.call("RateLimitController:call", e, "showNativeNotification", e, t.message),
                            showInAppNotification: (e, t) =>
                              this.controllerMessenger.call("RateLimitController:call", e, "showInAppNotification", e, t.message),
                            updateSnapState: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:updateSnapState"),
                            getSnapKeyring: this.getSnapKeyring.bind(this)
                          })
                        };
                      }
                      dismissNotifications(e) {
                        this.notificationController.dismiss(e);
                      }
                      markNotificationsAsRead(e) {
                        this.notificationController.markRead(e);
                      }
                      setupControllerEventSubscriptions() {
                        let e;
                        this.preferencesController.store.subscribe(async (t) => {
                          var r;
                          const { selectedAddress: n, currentLocale: o } = t,
                            { chainId: s } = this.networkController.state.providerConfig;
                          await (0, He.updateCurrentLocale)(o),
                            null !== (r = t.incomingTransactionsPreferences) && void 0 !== r && r[s]
                              ? this.txController.startIncomingTransactionPolling()
                              : this.txController.stopIncomingTransactionPolling(),
                            n && n !== e && ((e = n), await this._onAccountChange(n));
                        }),
                          this.controllerMessenger.subscribe(
                            `${this.permissionController.name}:stateChange`,
                            async (e, t) => {
                              const r = (0, qe.getChangedAccounts)(e, t);
                              for (const [e, t] of r.entries()) this._notifyAccountsChange(e, t);
                            },
                            qe.getPermittedAccountsByOrigin
                          ),
                          this.controllerMessenger.subscribe("NetworkController:networkDidChange", async () => {
                            await this.txController.updateIncomingTransactions();
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapAdded`, (e, t = null) => {
                            const {
                              manifest: { proposedName: r },
                              version: n
                            } = e;
                            this.subjectMetadataController.addSubjectMetadata({
                              subjectType: L.SubjectType.Snap,
                              name: r,
                              origin: e.id,
                              version: n,
                              svgIcon: t
                            });
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapInstalled`, (e, t) => {
                            this.metaMetricsController.trackEvent({
                              event: ee.MetaMetricsEventName.SnapInstalled,
                              category: ee.MetaMetricsEventCategory.Snaps,
                              properties: { snap_id: e.id, version: e.version, origin: t }
                            });
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapUpdated`, (e, t, r) => {
                            this.metaMetricsController.trackEvent({
                              event: ee.MetaMetricsEventName.SnapUpdated,
                              category: ee.MetaMetricsEventCategory.Snaps,
                              properties: { snap_id: e.id, old_version: t, new_version: e.version, origin: r }
                            });
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapTerminated`, (e) => {
                            const t = Object.values(this.approvalController.state.pendingApprovals).filter(
                              (t) => t.origin === e.id && t.type.startsWith(Y.RestrictedMethods.snap_dialog)
                            );
                            for (const e of t) this.approvalController.reject(e.id, new Error("Snap was terminated."));
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapRemoved`, (e) => {
                            const t = Object.values(this.notificationController.state.notifications).reduce(
                              (t, r) => (r.origin === e.id && t.push(r.id), t),
                              []
                            );
                            this.dismissNotifications(t);
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapUninstalled`, (e) => {
                            this.metaMetricsController.trackEvent({
                              event: ee.MetaMetricsEventName.SnapUninstalled,
                              category: ee.MetaMetricsEventCategory.Snaps,
                              properties: { snap_id: e.id, version: e.version }
                            });
                          });
                      }
                      createPublicConfigStore() {
                        const e = new s.ObservableStore(),
                          t = (e, { isUnlocked: t }) => ({
                            isUnlocked: t,
                            chainId: e,
                            networkVersion: this.deprecatedNetworkId ?? "loading"
                          }),
                          r = (r) => {
                            var n;
                            const o = null === (n = r.networksMetadata[r.selectedNetworkClientId]) || void 0 === n ? void 0 : n.status,
                              { chainId: s } = this.networkController.state.providerConfig;
                            o === W.NetworkStatus.Available && e.putState(t(s, r));
                          };
                        return this.on("update", r), r(this.getState()), e;
                      }
                      async getProviderState(e) {
                        return {
                          isUnlocked: this.isUnlocked(),
                          accounts: await this.getPermittedAccounts(e),
                          ...this.getProviderNetworkState()
                        };
                      }
                      getProviderNetworkState() {
                        return {
                          chainId: this.networkController.state.providerConfig.chainId,
                          networkVersion: this.deprecatedNetworkId ?? "loading"
                        };
                      }
                      async updateDeprecatedNetworkId() {
                        try {
                          this.deprecatedNetworkId = await this.deprecatedGetNetworkId();
                        } catch (e) {
                          console.error(e), (this.deprecatedNetworkId = null);
                        }
                        this._notifyChainChange();
                      }
                      async deprecatedGetNetworkId() {
                        const e = this.controllerMessenger.call("NetworkController:getEthQuery");
                        if (!e) throw new Error("Provider has not been initialized");
                        return new Promise((t, r) => {
                          e.sendAsync({ method: "net_version" }, (e, n) => {
                            e ? r(e) : t((0, ce.convertNetworkId)(n));
                          });
                        });
                      }
                      getState() {
                        const { vault: e } = this.keyringController.state,
                          t = Boolean(e),
                          r = this.memStore.getFlatState();
                        return (
                          delete r.vault,
                          {
                            isInitialized: t,
                            ...r,
                            snapStates: {},
                            snaps: Object.values(r.snaps ?? {}).reduce((e, t) => {
                              const { sourceCode: r, auxiliaryFiles: n, ...o } = t;
                              return (e[t.id] = o), e;
                            }, {})
                          }
                        );
                      }
                      getApi() {
                        const {
                          addressBookController: e,
                          alertController: t,
                          appStateController: r,
                          keyringController: n,
                          nftController: o,
                          nftDetectionController: s,
                          currencyRateController: i,
                          detectTokensController: a,
                          ensController: l,
                          gasFeeController: c,
                          metaMetricsController: d,
                          networkController: h,
                          announcementController: p,
                          onboardingController: u,
                          permissionController: g,
                          preferencesController: C,
                          swapsController: m,
                          tokensController: b,
                          smartTransactionsController: k,
                          txController: w,
                          assetsContractController: f,
                          backup: y,
                          approvalController: v,
                          phishingController: S
                        } = this;
                        return {
                          getState: this.getState.bind(this),
                          setCurrentCurrency: i.setCurrentCurrency.bind(i),
                          setUseBlockie: C.setUseBlockie.bind(C),
                          setUseNonceField: C.setUseNonceField.bind(C),
                          setUsePhishDetect: C.setUsePhishDetect.bind(C),
                          setUseMultiAccountBalanceChecker: C.setUseMultiAccountBalanceChecker.bind(C),
                          setUseSafeChainsListValidation: C.setUseSafeChainsListValidation.bind(C),
                          setUseTokenDetection: C.setUseTokenDetection.bind(C),
                          setUseNftDetection: C.setUseNftDetection.bind(C),
                          setUse4ByteResolution: C.setUse4ByteResolution.bind(C),
                          setUseCurrencyRateCheck: C.setUseCurrencyRateCheck.bind(C),
                          setOpenSeaEnabled: C.setOpenSeaEnabled.bind(C),
                          setSecurityAlertsEnabled: C.setSecurityAlertsEnabled.bind(C),
                          setAddSnapAccountEnabled: C.setAddSnapAccountEnabled.bind(C),
                          setIpfsGateway: C.setIpfsGateway.bind(C),
                          setUseAddressBarEnsResolution: C.setUseAddressBarEnsResolution.bind(C),
                          setParticipateInMetaMetrics: d.setParticipateInMetaMetrics.bind(d),
                          setCurrentLocale: C.setCurrentLocale.bind(C),
                          setIncomingTransactionsPreferences: C.setIncomingTransactionsPreferences.bind(C),
                          markPasswordForgotten: this.markPasswordForgotten.bind(this),
                          unMarkPasswordForgotten: this.unMarkPasswordForgotten.bind(this),
                          getRequestAccountTabIds: this.getRequestAccountTabIds,
                          getOpenMetamaskTabsIds: this.getOpenMetamaskTabsIds,
                          markNotificationPopupAsAutomaticallyClosed: () => this.notificationManager.markAsAutomaticallyClosed(),
                          requestUserApproval: v.addAndShowApprovalRequest.bind(v),
                          addNewAccount: this.addNewAccount.bind(this),
                          verifySeedPhrase: this.verifySeedPhrase.bind(this),
                          resetAccount: this.resetAccount.bind(this),
                          removeAccount: this.removeAccount.bind(this),
                          importAccountWithStrategy: this.importAccountWithStrategy.bind(this),
                          getAccountsBySnapId: (e) => (0, We.getAccountsBySnapId)(this, e),
                          connectHardware: this.connectHardware.bind(this),
                          forgetDevice: this.forgetDevice.bind(this),
                          checkHardwareStatus: this.checkHardwareStatus.bind(this),
                          unlockHardwareWalletAccount: this.unlockHardwareWalletAccount.bind(this),
                          setLedgerTransportPreference: this.setLedgerTransportPreference.bind(this),
                          attemptLedgerTransportCreation: this.attemptLedgerTransportCreation.bind(this),
                          establishLedgerTransportPreference: this.establishLedgerTransportPreference.bind(this),
                          submitQRHardwareCryptoHDKey: n.submitQRCryptoHDKey.bind(n),
                          submitQRHardwareCryptoAccount: n.submitQRCryptoAccount.bind(n),
                          cancelSyncQRHardware: n.cancelQRSynchronization.bind(n),
                          submitQRHardwareSignature: n.submitQRSignature.bind(n),
                          cancelQRHardwareSignRequest: n.cancelQRSignRequest.bind(n),
                          submitPassword: this.submitPassword.bind(this),
                          verifyPassword: this.verifyPassword.bind(this),
                          setProviderType: h.setProviderType.bind(h),
                          rollbackToPreviousProvider: h.rollbackToPreviousProvider.bind(h),
                          removeNetworkConfiguration: h.removeNetworkConfiguration.bind(h),
                          setActiveNetwork: h.setActiveNetwork.bind(h),
                          upsertNetworkConfiguration: this.networkController.upsertNetworkConfiguration.bind(this.networkController),
                          getCurrentNetworkEIP1559Compatibility: this.networkController.getEIP1559Compatibility.bind(
                            this.networkController
                          ),
                          setSelectedAddress: C.setSelectedAddress.bind(C),
                          addToken: b.addToken.bind(b),
                          updateTokenType: b.updateTokenType.bind(b),
                          setAccountLabel: C.setAccountLabel.bind(C),
                          setFeatureFlag: C.setFeatureFlag.bind(C),
                          setPreference: C.setPreference.bind(C),
                          addKnownMethodData: C.addKnownMethodData.bind(C),
                          setDismissSeedBackUpReminder: C.setDismissSeedBackUpReminder.bind(C),
                          setDisabledRpcMethodPreference: C.setDisabledRpcMethodPreference.bind(C),
                          getRpcMethodPreferences: C.getRpcMethodPreferences.bind(C),
                          setAdvancedGasFee: C.setAdvancedGasFee.bind(C),
                          setTheme: C.setTheme.bind(C),
                          setTransactionSecurityCheckEnabled: C.setTransactionSecurityCheckEnabled.bind(C),
                          setSnapsAddSnapAccountModalDismissed: C.setSnapsAddSnapAccountModalDismissed.bind(C),
                          getTokenStandardAndDetails: this.getTokenStandardAndDetails.bind(this),
                          addNft: o.addNft.bind(o),
                          addNftVerifyOwnership: o.addNftVerifyOwnership.bind(o),
                          removeAndIgnoreNft: o.removeAndIgnoreNft.bind(o),
                          removeNft: o.removeNft.bind(o),
                          checkAndUpdateAllNftsOwnershipStatus: o.checkAndUpdateAllNftsOwnershipStatus.bind(o),
                          checkAndUpdateSingleNftOwnershipStatus: o.checkAndUpdateSingleNftOwnershipStatus.bind(o),
                          isNftOwner: o.isNftOwner.bind(o),
                          setAddressBook: e.set.bind(e),
                          removeFromAddressBook: e.delete.bind(e),
                          setLastActiveTime: r.setLastActiveTime.bind(r),
                          setDefaultHomeActiveTabName: r.setDefaultHomeActiveTabName.bind(r),
                          setConnectedStatusPopoverHasBeenShown: r.setConnectedStatusPopoverHasBeenShown.bind(r),
                          setRecoveryPhraseReminderHasBeenShown: r.setRecoveryPhraseReminderHasBeenShown.bind(r),
                          setRecoveryPhraseReminderLastShown: r.setRecoveryPhraseReminderLastShown.bind(r),
                          setTermsOfUseLastAgreed: r.setTermsOfUseLastAgreed.bind(r),
                          setSnapsInstallPrivacyWarningShownStatus: r.setSnapsInstallPrivacyWarningShownStatus.bind(r),
                          setOutdatedBrowserWarningLastShown: r.setOutdatedBrowserWarningLastShown.bind(r),
                          setShowTestnetMessageInDropdown: r.setShowTestnetMessageInDropdown.bind(r),
                          setShowBetaHeader: r.setShowBetaHeader.bind(r),
                          setShowProductTour: r.setShowProductTour.bind(r),
                          updateNftDropDownState: r.updateNftDropDownState.bind(r),
                          setFirstTimeUsedNetwork: r.setFirstTimeUsedNetwork.bind(r),
                          tryReverseResolveAddress: l.reverseResolveAddress.bind(l),
                          setLocked: this.setLocked.bind(this),
                          createNewVaultAndKeychain: this.createNewVaultAndKeychain.bind(this),
                          createNewVaultAndRestore: this.createNewVaultAndRestore.bind(this),
                          exportAccount: this.exportAccount.bind(this),
                          updateTransaction: w.updateTransaction.bind(w),
                          approveTransactionsWithSameNonce: w.approveTransactionsWithSameNonce.bind(w),
                          createCancelTransaction: this.createCancelTransaction.bind(this),
                          createSpeedUpTransaction: this.createSpeedUpTransaction.bind(this),
                          estimateGas: this.estimateGas.bind(this),
                          getNextNonce: this.getNextNonce.bind(this),
                          addTransaction: this.addTransaction.bind(this),
                          addTransactionAndWaitForPublish: this.addTransactionAndWaitForPublish.bind(this),
                          createTransactionEventFragment: de.createTransactionEventFragmentWithTxId.bind(
                            null,
                            this.getTransactionMetricsRequest()
                          ),
                          getTransactions: w.getTransactions.bind(w),
                          updateEditableParams: w.updateEditableParams.bind(w),
                          updateTransactionGasFees: w.updateTransactionGasFees.bind(w),
                          updateTransactionSendFlowHistory: w.updateTransactionSendFlowHistory.bind(w),
                          updatePreviousGasParams: w.updatePreviousGasParams.bind(w),
                          decryptMessage: this.decryptMessageController.decryptMessage.bind(this.decryptMessageController),
                          decryptMessageInline: this.decryptMessageController.decryptMessageInline.bind(this.decryptMessageController),
                          cancelDecryptMessage: this.decryptMessageController.cancelDecryptMessage.bind(this.decryptMessageController),
                          encryptionPublicKey: this.encryptionPublicKeyController.encryptionPublicKey.bind(
                            this.encryptionPublicKeyController
                          ),
                          cancelEncryptionPublicKey: this.encryptionPublicKeyController.cancelEncryptionPublicKey.bind(
                            this.encryptionPublicKeyController
                          ),
                          setSeedPhraseBackedUp: u.setSeedPhraseBackedUp.bind(u),
                          completeOnboarding: u.completeOnboarding.bind(u),
                          setFirstTimeFlowType: u.setFirstTimeFlowType.bind(u),
                          setAlertEnabledness: t.setAlertEnabledness.bind(t),
                          setUnconnectedAccountAlertShown: t.setUnconnectedAccountAlertShown.bind(t),
                          setWeb3ShimUsageAlertDismissed: t.setWeb3ShimUsageAlertDismissed.bind(t),
                          removePermissionsFor: this.removePermissionsFor,
                          approvePermissionsRequest: this.acceptPermissionsRequest,
                          rejectPermissionsRequest: this.rejectPermissionsRequest,
                          ...(0, qe.getPermissionBackgroundApiMethods)(g),
                          disableSnap: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:disable"),
                          enableSnap: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:enable"),
                          removeSnap: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:remove"),
                          handleSnapRequest: this.handleSnapRequest.bind(this),
                          revokeDynamicSnapPermissions: this.controllerMessenger.call.bind(
                            this.controllerMessenger,
                            "SnapController:revokeDynamicPermissions"
                          ),
                          dismissNotifications: this.dismissNotifications.bind(this),
                          markNotificationsAsRead: this.markNotificationsAsRead.bind(this),
                          updateCaveat: this.updateCaveat.bind(this),
                          getPhishingResult: async (e) => (await S.maybeUpdateState(), S.test(e)),
                          updateSnapRegistry: this.preferencesController.updateSnapRegistry.bind(C),
                          fetchAndSetQuotes: m.fetchAndSetQuotes.bind(m),
                          setSelectedQuoteAggId: m.setSelectedQuoteAggId.bind(m),
                          resetSwapsState: m.resetSwapsState.bind(m),
                          setSwapsTokens: m.setSwapsTokens.bind(m),
                          clearSwapsQuotes: m.clearSwapsQuotes.bind(m),
                          setApproveTxId: m.setApproveTxId.bind(m),
                          setTradeTxId: m.setTradeTxId.bind(m),
                          setSwapsTxGasPrice: m.setSwapsTxGasPrice.bind(m),
                          setSwapsTxGasLimit: m.setSwapsTxGasLimit.bind(m),
                          setSwapsTxMaxFeePerGas: m.setSwapsTxMaxFeePerGas.bind(m),
                          setSwapsTxMaxFeePriorityPerGas: m.setSwapsTxMaxFeePriorityPerGas.bind(m),
                          safeRefetchQuotes: m.safeRefetchQuotes.bind(m),
                          stopPollingForQuotes: m.stopPollingForQuotes.bind(m),
                          setBackgroundSwapRouteState: m.setBackgroundSwapRouteState.bind(m),
                          resetPostFetchState: m.resetPostFetchState.bind(m),
                          setSwapsErrorKey: m.setSwapsErrorKey.bind(m),
                          setInitialGasEstimate: m.setInitialGasEstimate.bind(m),
                          setCustomApproveTxData: m.setCustomApproveTxData.bind(m),
                          setSwapsLiveness: m.setSwapsLiveness.bind(m),
                          setSwapsFeatureFlags: m.setSwapsFeatureFlags.bind(m),
                          setSwapsUserFeeLevel: m.setSwapsUserFeeLevel.bind(m),
                          setSwapsQuotesPollingLimitEnabled: m.setSwapsQuotesPollingLimitEnabled.bind(m),
                          setSmartTransactionsOptInStatus: k.setOptInState.bind(k),
                          fetchSmartTransactionFees: k.getFees.bind(k),
                          clearSmartTransactionFees: k.clearFees.bind(k),
                          submitSignedTransactions: k.submitSignedTransactions.bind(k),
                          cancelSmartTransaction: k.cancelSmartTransaction.bind(k),
                          fetchSmartTransactionsLiveness: k.fetchLiveness.bind(k),
                          updateSmartTransaction: k.updateSmartTransaction.bind(k),
                          setStatusRefreshInterval: k.setStatusRefreshInterval.bind(k),
                          trackMetaMetricsEvent: d.trackEvent.bind(d),
                          trackMetaMetricsPage: d.trackPage.bind(d),
                          createEventFragment: d.createEventFragment.bind(d),
                          updateEventFragment: d.updateEventFragment.bind(d),
                          finalizeEventFragment: d.finalizeEventFragment.bind(d),
                          resolvePendingApproval: this.resolvePendingApproval,
                          rejectPendingApproval: this.rejectPendingApproval,
                          updateViewedNotifications: p.updateViewed.bind(p),
                          getGasFeeEstimatesAndStartPolling: c.getGasFeeEstimatesAndStartPolling.bind(c),
                          disconnectGasFeeEstimatePoller: c.disconnectPoller.bind(c),
                          getGasFeeTimeEstimate: c.getTimeEstimate.bind(c),
                          addPollingTokenToAppState: r.addPollingToken.bind(r),
                          removePollingTokenFromAppState: r.removePollingToken.bind(r),
                          backupUserData: y.backupUserData.bind(y),
                          restoreUserData: y.restoreUserData.bind(y),
                          detectNewTokens: a.detectNewTokens.bind(a),
                          detectNfts: s.detectNfts.bind(s),
                          addDetectedTokens: b.addDetectedTokens.bind(b),
                          addImportedTokens: b.addTokens.bind(b),
                          ignoreTokens: b.ignoreTokens.bind(b),
                          getBalancesInSingleCall: f.getBalancesInSingleCall.bind(f),
                          throwTestError: this.throwTestError.bind(this)
                        };
                      }
                      async exportAccount(e, t) {
                        return await this.verifyPassword(t), this.keyringController.exportAccount(t, e);
                      }
                      async getTokenStandardAndDetails(e, t, r) {
                        var n, o;
                        const { tokenList: s } = this.tokenListController.state,
                          { tokens: i } = this.tokensController.state,
                          a = {
                            ...(se.STATIC_MAINNET_TOKEN_LIST[e.toLowerCase()] || {}),
                            ...(s[e.toLowerCase()] || {}),
                            ...(i.find(({ address: t }) => (0, ne.isEqualCaseInsensitive)(t, e)) || {})
                          },
                          l = (0, ne.isEqualCaseInsensitive)(a.standard, V.TokenStandard.ERC20) || !0 === a.erc20,
                          c = !(
                            r ||
                            (0, ne.isEqualCaseInsensitive)(a.standard, V.TokenStandard.ERC1155) ||
                            (0, ne.isEqualCaseInsensitive)(a.standard, V.TokenStandard.ERC721) ||
                            a.erc721
                          ),
                          d = a.decimals !== undefined && a.symbol;
                        let h;
                        if (l || (c && d))
                          try {
                            const r = await (0, re.fetchTokenBalance)(e, t, this.provider);
                            h = { address: e, balance: r, standard: V.TokenStandard.ERC20, decimals: a.decimals, symbol: a.symbol };
                          } catch (e) {
                            b.default.warning(`Failed to get token balance. Error: ${e}`);
                          }
                        return (
                          h === undefined && (h = await this.assetsContractController.getTokenStandardAndDetails(e, t, r)),
                          {
                            ...h,
                            decimals:
                              null === (n = h) || void 0 === n || null === (n = n.decimals) || void 0 === n ? void 0 : n.toString(10),
                            balance: null === (o = h) || void 0 === o || null === (o = o.balance) || void 0 === o ? void 0 : o.toString(10)
                          }
                        );
                      }
                      async createNewVaultAndKeychain(e) {
                        const t = await this.createVaultMutex.acquire();
                        try {
                          const t = await this.keyringController.createNewVaultAndKeychain(e),
                            r = await this.keyringController.getAccounts();
                          return this.preferencesController.setAddresses(r), this.selectFirstIdentity(), t;
                        } finally {
                          t();
                        }
                      }
                      async createNewVaultAndRestore(e, r) {
                        const n = await this.createVaultMutex.acquire();
                        try {
                          let n, o;
                          const s = t.from(r);
                          this.preferencesController.setAddresses([]),
                            this.permissionController.clearState(),
                            this.snapController.clearState(),
                            this.notificationController.clear(),
                            this.accountTracker.clearAccounts(),
                            this.cachedBalancesController.clearCachedBalances(),
                            this.txController.txStateManager.clearUnapprovedTxs();
                          const i = await this.keyringController.createNewVaultAndRestore(e, this._convertMnemonicToWordlistIndices(s)),
                            a = new v.default(this.provider);
                          for (
                            n = await this.keyringController.getAccounts(), o = await this.getBalance(n[n.length - 1], a);
                            "0x0" !== o;

                          ) {
                            const { addedAccountAddress: e } = await this.keyringController.addNewAccount(n.length);
                            (n = await this.keyringController.getAccounts()), (o = await this.getBalance(e, a));
                          }
                          n.length > 1 &&
                            "0x0" === o &&
                            (await this.removeAccount(n[n.length - 1]), (n = await this.keyringController.getAccounts()));
                          const l = this.preferencesController.getLedgerTransportPreference();
                          return this.setLedgerTransportPreference(l), this.selectFirstIdentity(), i;
                        } finally {
                          n();
                        }
                      }
                      _convertMnemonicToWordlistIndices(e) {
                        const t = e
                          .toString()
                          .split(" ")
                          .map((e) => G.wordlist.indexOf(e));
                        return new Uint8Array(new Uint16Array(t).buffer);
                      }
                      _convertEnglishWordlistIndicesToCodepoints(e) {
                        return t.from(
                          Array.from(new Uint16Array(e.buffer))
                            .map((e) => G.wordlist[e])
                            .join(" ")
                        );
                      }
                      getBalance(e, t) {
                        return new Promise((r, n) => {
                          const o = this.accountTracker.store.getState().accounts[e];
                          o && o.balance
                            ? r(o.balance)
                            : t.getBalance(e, (e, t) => {
                                e ? (n(e), b.default.error(e)) : r(t || "0x0");
                              });
                        });
                      }
                      async submitPassword(e) {
                        await this.keyringController.submitPassword(e);
                        try {
                          await this.blockTracker.checkForLatestBlock();
                        } catch (e) {
                          b.default.error("Error while unlocking extension.", e);
                        }
                        const t = this.preferencesController.getLedgerTransportPreference();
                        this.setLedgerTransportPreference(t);
                      }
                      async _loginUser() {
                        try {
                          const e = null;
                          e ? await this.submitPassword(e) : ae.isManifestV3 && (await this.submitEncryptionKey()),
                            await this.accountTracker._updateAccounts();
                        } finally {
                          this._startUISync();
                        }
                      }
                      _startUISync() {
                        this.emit("startUISync"), (this.startUISync = !0), this.memStore.subscribe(this.sendUpdate.bind(this));
                      }
                      async submitEncryptionKey() {
                        try {
                          const { loginToken: e, loginSalt: t } = await this.extension.storage.session.get(["loginToken", "loginSalt"]);
                          if (e && t) {
                            const { vault: r } = this.keyringController.state;
                            if (JSON.parse(r).salt !== t)
                              return (
                                console.warn("submitEncryptionKey: Stored salt and vault salt do not match"),
                                void (await this.clearLoginArtifacts())
                              );
                            await this.keyringController.submitEncryptionKey(e, t);
                          }
                        } catch (e) {
                          throw (await this.clearLoginArtifacts(), e);
                        }
                      }
                      async clearLoginArtifacts() {
                        await this.extension.storage.session.remove(["loginToken", "loginSalt"]);
                      }
                      async verifyPassword(e) {
                        await this.keyringController.verifyPassword(e);
                      }
                      selectFirstIdentity() {
                        const { identities: e } = this.preferencesController.store.getState(),
                          [t] = Object.keys(e);
                        this.preferencesController.setSelectedAddress(t);
                      }
                      getPrimaryKeyringMnemonic() {
                        const [e] = this.keyringController.getKeyringsByType(Q.KeyringType.hdKeyTree);
                        if (!e.mnemonic) throw new Error("Primary keyring mnemonic unavailable.");
                        return e.mnemonic;
                      }
                      async getKeyringForDevice(e, t = null) {
                        var r, n, o, s;
                        const i = null === (r = this.opts.overrides) || void 0 === r ? void 0 : r.keyrings;
                        let a = null;
                        if (e !== z.HardwareDeviceNames.QR && !this.canUseHardwareWallets())
                          throw new Error("Hardware wallets are not supported on this version.");
                        switch (e) {
                          case z.HardwareDeviceNames.trezor:
                            a = (null == i || null === (n = i.trezor) || void 0 === n ? void 0 : n.type) || k.TrezorKeyring.type;
                            break;
                          case z.HardwareDeviceNames.ledger:
                            a = (null == i || null === (o = i.ledger) || void 0 === o ? void 0 : o.type) || w.default.type;
                            break;
                          case z.HardwareDeviceNames.qr:
                            a = y.MetaMaskKeyring.type;
                            break;
                          case z.HardwareDeviceNames.lattice:
                            a = (null == i || null === (s = i.lattice) || void 0 === s ? void 0 : s.type) || f.default.type;
                            break;
                          default:
                            throw new Error("MetamaskController:getKeyringForDevice - Unknown device");
                        }
                        let [l] = await this.keyringController.getKeyringsByType(a);
                        if (
                          (l || (l = await this.keyringController.addNewKeyring(a)),
                          t && l.setHdPath && l.setHdPath(t),
                          e === z.HardwareDeviceNames.lattice && (l.appName = "MetaMask"),
                          e === z.HardwareDeviceNames.trezor)
                        ) {
                          const e = l.getModel();
                          this.appStateController.setTrezorModel(e);
                        }
                        return (l.network = this.networkController.state.providerConfig.type), l;
                      }
                      async attemptLedgerTransportCreation() {
                        const e = await this.getKeyringForDevice(z.HardwareDeviceNames.ledger);
                        return await e.attemptMakeApp();
                      }
                      async establishLedgerTransportPreference() {
                        const e = this.preferencesController.getLedgerTransportPreference();
                        return await this.setLedgerTransportPreference(e);
                      }
                      async connectHardware(e, t, r) {
                        const n = await this.getKeyringForDevice(e, r);
                        let o = [];
                        switch (t) {
                          case -1:
                            o = await n.getPreviousPage();
                            break;
                          case 1:
                            o = await n.getNextPage();
                            break;
                          default:
                            o = await n.getFirstPage();
                        }
                        const s = await this.keyringController.getAccounts(),
                          i = [...new Set(s.concat(o.map((e) => e.address.toLowerCase())))];
                        return this.accountTracker.syncWithAddresses(i), o;
                      }
                      async checkHardwareStatus(e, t) {
                        return (await this.getKeyringForDevice(e, t)).isUnlocked();
                      }
                      async forgetDevice(e) {
                        return (await this.getKeyringForDevice(e)).forgetDevice(), !0;
                      }
                      async getAccountType(e) {
                        switch (await this.keyringController.getAccountKeyringType(e)) {
                          case Q.KeyringType.trezor:
                          case Q.KeyringType.lattice:
                          case Q.KeyringType.qr:
                          case Q.KeyringType.ledger:
                            return "hardware";
                          case Q.KeyringType.imported:
                            return "imported";
                          case Q.KeyringType.snap:
                            return "snap";
                          default:
                            return "MetaMask";
                        }
                      }
                      async getDeviceModel(e) {
                        const t = await this.keyringController.getKeyringForAccount(e);
                        switch (t.type) {
                          case Q.KeyringType.trezor:
                            return t.getModel();
                          case Q.KeyringType.qr:
                            return t.getName();
                          case Q.KeyringType.ledger:
                            return z.HardwareDeviceNames.ledger;
                          case Q.KeyringType.lattice:
                            return z.HardwareDeviceNames.lattice;
                          default:
                            return undefined;
                        }
                      }
                      getAccountLabel(e, t, r) {
                        return `${e[0].toUpperCase()}${e.slice(1)} ${parseInt(t, 10) + 1} ${r || ""}`.trim();
                      }
                      async unlockHardwareWalletAccount(e, t, r, n) {
                        const o = await this.getKeyringForDevice(t, r);
                        o.setAccountToUnlock(e);
                        const s = await this.keyringController.getAccounts(),
                          i = await this.keyringController.addNewAccountForKeyring(o),
                          a = await this.keyringController.getAccounts();
                        this.preferencesController.setAddresses(a),
                          a.forEach((r) => {
                            if (!s.includes(r)) {
                              const s = this.getAccountLabel(t === z.HardwareDeviceNames.qr ? o.getName() : t, e, n);
                              this.preferencesController.setAccountLabel(r, s), this.preferencesController.setSelectedAddress(r);
                            }
                          });
                        const { identities: l } = this.preferencesController.store.getState();
                        return { ...i, identities: l };
                      }
                      async addNewAccount(e) {
                        const t = await this.keyringController.getAccounts(),
                          { addedAccountAddress: r } = await this.keyringController.addNewAccount(e);
                        return t.includes(r) || this.preferencesController.setSelectedAddress(r), r;
                      }
                      async verifySeedPhrase() {
                        return this._convertEnglishWordlistIndicesToCodepoints(await this.keyringController.verifySeedPhrase());
                      }
                      async resetAccount() {
                        const e = this.preferencesController.getSelectedAddress();
                        return this.txController.wipeTransactions(e), this.networkController.resetConnection(), e;
                      }
                      async getPermittedAccounts(e, { suppressUnauthorizedError: t = !0 } = {}) {
                        try {
                          return await this.permissionController.executeRestrictedMethod(e, Y.RestrictedMethods.eth_accounts);
                        } catch (e) {
                          if (t && e.code === C.errorCodes.provider.unauthorized) return [];
                          throw e;
                        }
                      }
                      removeAllAccountPermissions(e) {
                        this.permissionController.updatePermissionsByCaveat(Y.CaveatTypes.restrictReturnedAccounts, (t) =>
                          qe.CaveatMutatorFactories[Y.CaveatTypes.restrictReturnedAccounts].removeAccount(e, t)
                        );
                      }
                      async removeAccount(e) {
                        this.removeAllAccountPermissions(e);
                        const t = await this.keyringController.getKeyringForAccount(e);
                        await this.keyringController.removeAccount(e);
                        const r = t ? await t.getAccounts() : {};
                        var n;
                        0 === (null == r ? void 0 : r.length) && (null === (n = t.destroy) || void 0 === n || n.call(t));
                        return e;
                      }
                      async importAccountWithStrategy(e, t) {
                        const { importedAccountAddress: r } = await this.keyringController.importAccountWithStrategy(e, t);
                        this.preferencesController.setSelectedAddress(r);
                      }
                      async newUnapprovedTransaction(e, t) {
                        const { result: r } = await this.txController.addTransaction(e, {
                          actionId: t.id,
                          method: t.method,
                          origin: t.origin,
                          requireApproval: !0,
                          securityAlertResponse: t.securityAlertResponse
                        });
                        return await r;
                      }
                      async addTransactionAndWaitForPublish(e, t) {
                        const { transactionMeta: r, result: n } = await this.txController.addTransaction(e, t);
                        return await n, r;
                      }
                      async addTransaction(e, t) {
                        const { transactionMeta: r, result: n } = await this.txController.addTransaction(e, t);
                        return n.catch(() => {}), r;
                      }
                      async getCurrentAccountEIP1559Compatibility() {
                        return !0;
                      }
                      async createCancelTransaction(e, t, r) {
                        await this.txController.createCancelTransaction(e, t, r);
                        return this.getState();
                      }
                      async createSpeedUpTransaction(e, t, r) {
                        await this.txController.createSpeedUpTransaction(e, t, r);
                        return this.getState();
                      }
                      estimateGas(e) {
                        return new Promise((t, r) =>
                          this.txController.txGasUtil.query.estimateGas(e, (e, n) => (e ? r(e) : t(n.toString(16))))
                        );
                      }
                      markPasswordForgotten() {
                        this.preferencesController.setPasswordForgotten(!0), this.sendUpdate();
                      }
                      unMarkPasswordForgotten() {
                        this.preferencesController.setPasswordForgotten(!1), this.sendUpdate();
                      }
                      setupUntrustedCommunication({ connectionStream: e, sender: t, subjectType: r }) {
                        const { usePhishDetect: n } = this.preferencesController.store.getState();
                        let o;
                        if (
                          ((o = r || (t.id && t.id !== this.extension.runtime.id ? L.SubjectType.Extension : L.SubjectType.Website)), t.url)
                        ) {
                          const { hostname: r } = new URL(t.url);
                          this.phishingController.maybeUpdateState();
                          const o = this.phishingController.test(r);
                          if (n && null != o && o.result)
                            return (
                              this.sendPhishingWarning(e, r),
                              void this.metaMetricsController.trackEvent({
                                event: ee.MetaMetricsEventName.PhishingPageDisplayed,
                                category: ee.MetaMetricsEventCategory.Phishing,
                                properties: { url: r }
                              })
                            );
                        }
                        const s = (0, Se.setupMultiplex)(e);
                        this.setupProviderConnection(s.createStream("metamask-provider"), t, o),
                          t.url && this.setupPublicConfig(s.createStream("publicConfig"));
                      }
                      setupTrustedCommunication(e, t) {
                        const r = (0, Se.setupMultiplex)(e);
                        this.setupControllerConnection(r.createStream("controller")),
                          this.setupProviderConnection(r.createStream("provider"), t, L.SubjectType.Internal);
                      }
                      setupPhishingCommunication({ connectionStream: e }) {
                        const { usePhishDetect: t } = this.preferencesController.store.getState();
                        if (!t) return;
                        const r = (0, Se.setupMultiplex)(e).createStream("metamask-phishing-safelist");
                        r.on(
                          "data",
                          (0, _e.default)(
                            {
                              safelistPhishingDomain: this.safelistPhishingDomain.bind(this),
                              backToSafetyPhishingWarning: this.backToSafetyPhishingWarning.bind(this)
                            },
                            r
                          )
                        );
                      }
                      sendPhishingWarning(e, t) {
                        (0, Se.setupMultiplex)(e).createStream("phishing").write({ hostname: t });
                      }
                      setupControllerConnection(e) {
                        const t = this.getApi();
                        (this.activeControllerConnections += 1),
                          this.emit("controllerConnectionChanged", this.activeControllerConnections),
                          e.on("data", (0, _e.default)(t, e, this.store, this.localStoreApiWrapper));
                        const r = (t) => {
                          e._writableState.ended || e.write({ jsonrpc: "2.0", method: "sendUpdate", params: [t] });
                        };
                        this.on("update", r);
                        const n = () => {
                          e._writableState.ended || e.write({ jsonrpc: "2.0", method: "startUISync" });
                        };
                        this.startUISync ? n() : this.once("startUISync", n),
                          e.on("end", () => {
                            (this.activeControllerConnections -= 1),
                              this.emit("controllerConnectionChanged", this.activeControllerConnections),
                              this.removeListener("update", r);
                          });
                      }
                      setupProviderConnection(e, t, r) {
                        let n, s;
                        (n =
                          r === L.SubjectType.Internal ? Z.ORIGIN_METAMASK : r === L.SubjectType.Snap ? t.snapId : new URL(t.url).origin),
                          t.id &&
                            t.id !== this.extension.runtime.id &&
                            this.subjectMetadataController.addSubjectMetadata({
                              origin: n,
                              extensionId: t.id,
                              subjectType: L.SubjectType.Extension
                            }),
                          t.tab && t.tab.id && (s = t.tab.id);
                        const i = this.setupProviderEngine({ origin: n, sender: t, subjectType: r, tabId: s }),
                          a = (0, l.createEngineStream)({ engine: i }),
                          c = this.addConnection(n, { engine: i });
                        (0, o.default)(e, a, e, (e) => {
                          i._middleware.forEach((e) => {
                            e.destroy && "function" == typeof e.destroy && e.destroy();
                          }),
                            c && this.removeConnection(n, c),
                            e && b.default.error(e);
                        });
                      }
                      setupSnapProvider(e, t) {
                        this.setupUntrustedCommunication({ connectionStream: t, sender: { snapId: e }, subjectType: L.SubjectType.Snap });
                      }
                      setupProviderEngine({ origin: e, subjectType: t, sender: r, tabId: n }) {
                        const o = new a.JsonRpcEngine(),
                          { blockTracker: s, provider: i } = this;
                        o.push((0, fe.default)({ origin: e })), o.push((0, U.createSelectedNetworkMiddleware)(this.controllerMessenger));
                        const l = (0, u.default)({ provider: i, blockTracker: s }),
                          d = (0, g.default)({ provider: i, blockTracker: s });
                        return (
                          d.events.on("notification", (e) => o.emit("notification", e)),
                          ae.isManifestV3 && o.push((0, be.default)()),
                          n && o.push((0, ye.default)({ tabId: n })),
                          o.push((0, ke.default)({ origin: e })),
                          o.push(this.permissionLogController.createMiddleware()),
                          o.push((0, pe.createPPOMMiddleware)(this.ppomController, this.preferencesController, this.networkController)),
                          o.push(
                            (0, $e.default)({
                              trackEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                              getMetricsState: this.metaMetricsController.store.getState.bind(this.metaMetricsController.store),
                              securityProviderRequest: this.securityProviderRequest.bind(this),
                              getSelectedAddress: this.preferencesController.getSelectedAddress.bind(this.preferencesController),
                              getAccountType: this.getAccountType.bind(this),
                              getDeviceModel: this.getDeviceModel.bind(this),
                              snapAndHardwareMessenger: this.controllerMessenger.getRestricted({
                                name: "SnapAndHardwareMessenger",
                                allowedActions: ["KeyringController:getKeyringForAccount", "SnapController:get"]
                              })
                            })
                          ),
                          t === L.SubjectType.Website &&
                            o.push((0, ve.default)({ location: r.url, registerOnboarding: this.onboardingController.registerOnboarding })),
                          o.push(
                            (0, we.createMethodMiddleware)({
                              origin: e,
                              subjectType: t,
                              addSubjectMetadata: this.subjectMetadataController.addSubjectMetadata.bind(this.subjectMetadataController),
                              getProviderState: this.getProviderState.bind(this),
                              getUnlockPromise: this.appStateController.getUnlockPromise.bind(this.appStateController),
                              handleWatchAssetRequest: this.handleWatchAssetRequest.bind(this),
                              requestUserApproval: this.approvalController.addAndShowApprovalRequest.bind(this.approvalController),
                              startApprovalFlow: this.approvalController.startFlow.bind(this.approvalController),
                              endApprovalFlow: this.approvalController.endFlow.bind(this.approvalController),
                              setApprovalFlowLoadingText: this.approvalController.setFlowLoadingText.bind(this.approvalController),
                              showApprovalSuccess: this.approvalController.success.bind(this.approvalController),
                              showApprovalError: this.approvalController.error.bind(this.approvalController),
                              sendMetrics: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                              getAccounts: this.getPermittedAccounts.bind(this, e),
                              getPermissionsForOrigin: this.permissionController.getPermissions.bind(this.permissionController, e),
                              hasPermission: this.permissionController.hasPermission.bind(this.permissionController, e),
                              requestAccountsPermission: this.permissionController.requestPermissions.bind(
                                this.permissionController,
                                { origin: e },
                                { eth_accounts: {} }
                              ),
                              requestPermissionsForOrigin: this.permissionController.requestPermissions.bind(this.permissionController, {
                                origin: e
                              }),
                              getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                              getCurrentRpcUrl: () => this.networkController.state.providerConfig.rpcUrl,
                              getNetworkConfigurations: () => this.networkController.state.networkConfigurations,
                              upsertNetworkConfiguration: this.networkController.upsertNetworkConfiguration.bind(this.networkController),
                              setActiveNetwork: this.networkController.setActiveNetwork.bind(this.networkController),
                              findNetworkClientIdByChainId: this.networkController.findNetworkClientIdByChainId.bind(
                                this.networkController
                              ),
                              findNetworkConfigurationBy: this.findNetworkConfigurationBy.bind(this),
                              setNetworkClientIdForDomain: this.selectedNetworkController.setNetworkClientIdForDomain.bind(
                                this.selectedNetworkController
                              ),
                              setProviderType: this.networkController.setProviderType.bind(this.networkController),
                              getWeb3ShimUsageState: this.alertController.getWeb3ShimUsageState.bind(this.alertController),
                              setWeb3ShimUsageRecorded: this.alertController.setWeb3ShimUsageRecorded.bind(this.alertController)
                            })
                          ),
                          o.push(
                            (0, we.createSnapMethodMiddleware)(t === L.SubjectType.Snap, {
                              getUnlockPromise: this.appStateController.getUnlockPromise.bind(this.appStateController),
                              getSnaps: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:getPermitted", e),
                              requestPermissions: async (t) => await this.permissionController.requestPermissions({ origin: e }, t),
                              getPermissions: this.permissionController.getPermissions.bind(this.permissionController, e),
                              getSnapFile: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:getFile", e),
                              installSnaps: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:install", e),
                              hasPermission: this.permissionController.hasPermission.bind(this.permissionController),
                              getSnap: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:get"),
                              handleSnapRpcRequest: this.controllerMessenger.call.bind(
                                this.controllerMessenger,
                                "SnapController:handleRequest"
                              ),
                              getAllowedKeyringMethods: (0, he.keyringSnapPermissionsBuilder)(this.subjectMetadataController)
                            })
                          ),
                          o.push(l),
                          o.push(d.middleware),
                          t !== L.SubjectType.Internal && o.push(this.permissionController.createPermissionMiddleware({ origin: e })),
                          o.push(this.metamaskMiddleware),
                          o.push((0, c.providerAsMiddleware)(i)),
                          o
                        );
                      }
                      setupPublicConfig(e) {
                        const t = (0, i.storeAsStream)(this.publicConfigStore);
                        (0, o.default)(t, e, (e) => {
                          t.destroy(), e && b.default.error(e);
                        });
                      }
                      addConnection(e, { engine: t }) {
                        if (e === Z.ORIGIN_METAMASK) return null;
                        this.connections[e] || (this.connections[e] = {});
                        const r = (0, S.default)();
                        return (this.connections[e][r] = { engine: t }), r;
                      }
                      removeConnection(e, t) {
                        const r = this.connections[e];
                        r && (delete r[t], 0 === Object.keys(r).length && delete this.connections[e]);
                      }
                      removeAllConnections(e) {
                        const t = this.connections[e];
                        t &&
                          Object.keys(t).forEach((t) => {
                            this.removeConnection(e, t);
                          });
                      }
                      notifyConnections(e, t) {
                        const r = this.connections[e];
                        r &&
                          Object.values(r).forEach((e) => {
                            e.engine && e.engine.emit("notification", t);
                          });
                      }
                      notifyAllConnections(e) {
                        const t = "function" == typeof e ? (t) => e(t) : () => e;
                        Object.keys(this.connections).forEach((e) => {
                          Object.values(this.connections[e]).forEach(async (r) => {
                            r.engine && r.engine.emit("notification", await t(e));
                          });
                        });
                      }
                      async _onKeyringControllerUpdate(e) {
                        const { keyrings: t, encryptionKey: r, encryptionSalt: n } = e,
                          o = t.reduce((e, { accounts: t }) => e.concat(t), []);
                        ae.isManifestV3 && (await this.extension.storage.session.set({ loginToken: r, loginSalt: n })),
                          o.length && (this.preferencesController.syncAddresses(o), this.accountTracker.syncWithAddresses(o));
                      }
                      _onUnlock() {
                        this.notifyAllConnections(async (e) => ({
                          method: qe.NOTIFICATION_NAMES.unlockStateChanged,
                          params: { isUnlocked: !0, accounts: await this.getPermittedAccounts(e) }
                        })),
                          this.unMarkPasswordForgotten(),
                          this.emit("unlock");
                      }
                      _onLock() {
                        this.notifyAllConnections({ method: qe.NOTIFICATION_NAMES.unlockStateChanged, params: { isUnlocked: !1 } }),
                          this.emit("lock");
                      }
                      _onStateUpdate(e) {
                        (this.isClientOpenAndUnlocked = e.isUnlocked && this._isClientOpen), this._notifyChainChange();
                      }
                      privateSendUpdate() {
                        this.emit("update", this.getState());
                      }
                      isUnlocked() {
                        return this.keyringController.state.isUnlocked;
                      }
                      getExternalPendingTransactions(e) {
                        return this.smartTransactionsController.getTransactions({ addressFrom: e, status: "pending" });
                      }
                      async getPendingNonce(e) {
                        const { nonceDetails: t, releaseLock: r } = await this.txController.nonceTracker.getNonceLock(e),
                          n = t.params.highestSuggested;
                        return r(), n;
                      }
                      async getNextNonce(e) {
                        const t = await this.txController.nonceTracker.getNonceLock(e);
                        return t.releaseLock(), t.nextNonce;
                      }
                      throwTestError(e) {
                        setTimeout(() => {
                          const t = new Error(e);
                          throw ((t.name = "TestError"), t);
                        });
                      }
                      findNetworkConfigurationBy(e) {
                        const { networkConfigurations: t } = this.networkController.state;
                        return Object.values(t).find((t) => Object.keys(e).some((r) => t[r] === e[r])) || null;
                      }
                      async setLedgerTransportPreference(e) {
                        if (!this.canUseHardwareWallets()) return undefined;
                        const t = this.preferencesController.getLedgerTransportPreference(),
                          r = this.preferencesController.setLedgerTransportPreference(e),
                          n = await this.getKeyringForDevice(z.HardwareDeviceNames.ledger);
                        return null != n && n.updateTransportMethod
                          ? n.updateTransportMethod(r).catch((e) => {
                              throw (this.preferencesController.setLedgerTransportPreference(t), e);
                            })
                          : undefined;
                      }
                      recordFirstTimeInfo(e) {
                        if (!("firstTimeInfo" in e)) {
                          const t = this.platform.getVersion();
                          e.firstTimeInfo = { version: t, date: Date.now() };
                        }
                      }
                      set isClientOpen(e) {
                        (this._isClientOpen = e), (this.detectTokensController.isOpen = e);
                      }
                      onClientClosed() {
                        try {
                          this.gasFeeController.stopPolling(), this.appStateController.clearPollingTokens();
                        } catch (e) {
                          console.error(e);
                        }
                      }
                      onEnvironmentTypeClosed(e) {
                        const t = Z.POLLING_TOKEN_ENVIRONMENT_TYPES[e];
                        this.appStateController.store.getState()[t].forEach((e) => {
                          this.gasFeeController.disconnectPoller(e), this.appStateController.removePollingToken(e, t);
                        });
                      }
                      safelistPhishingDomain(e) {
                        return this.phishingController.bypass(e);
                      }
                      async backToSafetyPhishingWarning() {
                        const e = this.platform.getExtensionURL();
                        await this.platform.switchToAnotherURL(undefined, e);
                      }
                      setLocked() {
                        const [e] = this.keyringController.getKeyringsByType(Q.KeyringType.trezor);
                        return e && e.dispose(), ae.isManifestV3 && this.clearLoginArtifacts(), this.keyringController.setLocked();
                      }
                      async securityProviderRequest(e, t) {
                        const { currentLocale: r, transactionSecurityCheckEnabled: n } = this.preferencesController.store.getState();
                        if (n) {
                          const n = Number((0, le.hexToDecimal)(this.networkController.state.providerConfig.chainId));
                          try {
                            return await (0, Ge.securityProviderCheck)(e, t, n, r);
                          } catch (e) {
                            throw (b.default.error(e.message), e);
                          }
                        }
                        return null;
                      }
                      async _onAccountChange(e) {
                        const t = (0, qe.getPermittedAccountsByOrigin)(this.permissionController.state);
                        for (const [r, n] of t.entries()) n.includes(e) && this._notifyAccountsChange(r, n);
                        await this.txController.updateIncomingTransactions();
                      }
                      async _notifyAccountsChange(e, t) {
                        this.isUnlocked() &&
                          this.notifyConnections(e, {
                            method: qe.NOTIFICATION_NAMES.accountsChanged,
                            params: t.length < 2 ? t : await this.getPermittedAccounts(e)
                          }),
                          this.permissionLogController.updateAccountsHistory(e, t);
                      }
                      _notifyChainChange() {
                        this.notifyAllConnections({ method: qe.NOTIFICATION_NAMES.chainChanged, params: this.getProviderNetworkState() });
                      }
                    }
                    r.default = Je;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "$root$", file: "app/scripts/metamask-controller.js" }
    ],
    [
      93,
      { lodash: 4071 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 2,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 2;
                    try {
                      "etherscan" === t.data.config.provider.type &&
                        ((t.data.config.provider.type = "rpc"), (t.data.config.provider.rpcTarget = "https://rpc.metamask.io/"));
                    } catch (e) {}
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/002.js" }
    ],
    [
      94,
      { lodash: 4071 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 3,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 3;
                    try {
                      "https://rawtestrpc.metamask.io/" === t.data.config.provider.rpcTarget &&
                        (t.data.config.provider.rpcTarget = "https://testrpc.metamask.io/");
                    } catch (e) {}
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/003.js" }
    ],
    [
      95,
      { lodash: 4071 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 4,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 4;
                    try {
                      if ("rpc" !== t.data.config.provider.type) return Promise.resolve(t);
                      switch (t.data.config.provider.rpcTarget) {
                        case "https://testrpc.metamask.io/":
                          t.data.config.provider = { type: "testnet" };
                          break;
                        case "https://rpc.metamask.io/":
                          t.data.config.provider = { type: "mainnet" };
                      }
                    } catch (e) {}
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/004.js" }
    ],
    [
      96,
      { lodash: 4071 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 5,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 5;
                    try {
                      const e = (function (e) {
                        const { config: t } = e,
                          r = {
                            ...e,
                            KeyringController: { vault: e.vault, selectedAccount: t.selectedAccount, walletNicknames: e.walletNicknames }
                          };
                        return delete r.vault, delete r.walletNicknames, delete r.config.selectedAccount, r;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #5${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/005.js" }
    ],
    [
      97,
      { lodash: 4071 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 6,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 6;
                    try {
                      const e = (function (e) {
                        const t = e.KeyringController,
                          r = { ...e, PreferencesController: { selectedAddress: t.selectedAccount } };
                        return delete r.KeyringController.selectedAccount, r;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #6${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/006.js" }
    ],
    [
      98,
      { lodash: 4071 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 7,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 7;
                    try {
                      const e = (function (e) {
                        const t = { ...e, TransactionManager: { transactions: e.transactions || [], gasMultiplier: e.gasMultiplier || 1 } };
                        return delete t.transactions, delete t.gasMultiplier, t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #7${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/007.js" }
    ],
    [
      99,
      { lodash: 4071 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 8,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 8;
                    try {
                      const e = (function (e) {
                        const t = { ...e, NoticeController: { noticesList: e.noticesList || [] } };
                        return delete t.noticesList, t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #8${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/008.js" }
    ],
    [
      4,
      {
        "../../shared/constants/app": 4749,
        "../../shared/constants/metametrics": 4758,
        "../../shared/modules/browser-runtime.utils": 4781,
        "../../shared/modules/mv3.utils": 4790,
        "../../shared/modules/object.utils": 4792,
        "./first-time-state": 37,
        "./lib/createStreamSink": 49,
        "./lib/ens-ipfs/setup": 54,
        "./lib/get-first-preferred-lang-code": 56,
        "./lib/getObjStructure": 57,
        "./lib/local-store": 59,
        "./lib/migrator": 62,
        "./lib/network-store": 63,
        "./lib/notification-manager": 64,
        "./lib/setup-initial-state-hooks": 83,
        "./lib/setupSentry": 84,
        "./lib/util": 91,
        "./metamask-controller": 92,
        "./migrations": 202,
        "./platforms/extension": 203,
        "@metamask/controller-utils": 1124,
        "@metamask/obs-store": 1659,
        "@metamask/utils": 2081,
        "debounce-stream": 3129,
        "end-of-stream": 3169,
        "eth-rpc-errors": 3226,
        events: 3331,
        "extension-port-stream": 3334,
        loglevel: 4083,
        pump: 4277,
        "webextension-polyfill": 4733
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.loadStateFromPersistence = ae),
                  (r.setupController = le),
                  (r.statePersistenceEvents = void 0),
                  e("./lib/setup-initial-state-hooks");
                var n = x(e("events")),
                  o = x(e("end-of-stream")),
                  s = x(e("pump")),
                  i = x(e("debounce-stream")),
                  a = x(e("loglevel")),
                  l = x(e("webextension-polyfill")),
                  c = e("@metamask/obs-store"),
                  d = e("@metamask/utils"),
                  h = e("@metamask/controller-utils"),
                  p = x(e("extension-port-stream")),
                  u = e("eth-rpc-errors"),
                  g = e("../../shared/constants/app"),
                  C = e("../../shared/constants/metametrics"),
                  m = e("../../shared/modules/browser-runtime.utils"),
                  b = e("../../shared/modules/mv3.utils"),
                  k = e("../../shared/modules/object.utils"),
                  w = x(e("./migrations")),
                  f = x(e("./lib/migrator")),
                  y = x(e("./platforms/extension")),
                  v = x(e("./lib/local-store")),
                  S = (x(e("./lib/network-store")), e("./lib/setupSentry")),
                  T = x(e("./lib/createStreamSink")),
                  M = L(e("./lib/notification-manager")),
                  A = L(e("./metamask-controller")),
                  P = x(e("./first-time-state")),
                  E = x(e("./lib/get-first-preferred-lang-code")),
                  N = x(e("./lib/getObjStructure")),
                  R = x(e("./lib/ens-ipfs/setup")),
                  I = e("./lib/util");
                function O(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    r = new WeakMap();
                  return (O = function (e) {
                    return e ? r : t;
                  })(e);
                }
                function L(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var r = O(t);
                  if (r && r.has(e)) return r.get(e);
                  var n = { __proto__: null },
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                      var i = o ? Object.getOwnPropertyDescriptor(e, s) : null;
                      i && (i.get || i.set) ? Object.defineProperty(n, s, i) : (n[s] = e[s]);
                    }
                  return (n.default = e), r && r.set(e, n), n;
                }
                function x(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const U = new v.default();
                global.stateHooks.getMostRecentPersistedState = () => U.mostRecentRetrievedState;
                const { sentry: F } = global,
                  _ = { ...P.default },
                  D = { [g.ENVIRONMENT_TYPE_POPUP]: !0, [g.ENVIRONMENT_TYPE_NOTIFICATION]: !0, [g.ENVIRONMENT_TYPE_FULLSCREEN]: !0 },
                  j = ["trezor-connect"];
                a.default.setLevel("info", !1);
                const K = new y.default(),
                  B = new M.default();
                let q = !1,
                  $ = !1,
                  G = !1;
                const V = {},
                  H = {};
                let W, z;
                const Q = new URL("https://metamask.github.io/phishing-warning/v2.1.0/"),
                  Y = 1e3,
                  J = (r.statePersistenceEvents = new n.default()),
                  { promise: X, resolve: Z, reject: ee } = (0, I.deferredPromise)(),
                  te = async () => {
                    const e = await l.default.tabs
                      .query({ url: "<all_urls>", windowType: "normal" })
                      .then((e) => ((0, m.checkForLastErrorAndLog)(), e))
                      .catch(() => {
                        (0, m.checkForLastErrorAndLog)();
                      });
                    for (const t of e)
                      l.default.tabs
                        .sendMessage(t.id, { name: g.EXTENSION_MESSAGES.READY })
                        .then(() => {
                          (0, m.checkForLastErrorAndLog)();
                        })
                        .catch(() => {
                          (0, m.checkForLastErrorAndLog)();
                        });
                  };
                let re, ne;
                function oe() {
                  const e = new Date().toISOString();
                  l.default.storage.session.set({ timestamp: e });
                }
                async function se() {
                  try {
                    const e = await ae(),
                      t = e.data,
                      r = await (0, E.default)();
                    let n;
                    if (b.isManifestV3) {
                      const e = 2e3;
                      oe(), setInterval(oe, e);
                      const t = await l.default.storage.session.get(["isFirstMetaMaskControllerSetup"]);
                      (n = (null == t ? void 0 : t.isFirstMetaMaskControllerSetup) === undefined),
                        await l.default.storage.session.set({ isFirstMetaMaskControllerSetup: n });
                    }
                    le(t, r, {}, n, e.meta),
                      b.isManifestV3 ||
                        (await (async function () {
                          let e;
                          try {
                            const t = new URL("https://metamask.github.io/phishing-warning/v2.1.0/");
                            let r, n;
                            (t.hash = "#extensionStartup"),
                              (e = window.document.createElement("iframe")),
                              e.setAttribute("src", t.href),
                              e.setAttribute("sandbox", "allow-scripts allow-same-origin");
                            const o = new Promise((e, t) => {
                              (r = e), (n = t);
                            });
                            e.addEventListener("load", r), window.document.body.appendChild(e), setTimeout(() => n(new ie()), Y), await o;
                          } catch (e) {
                            e instanceof ie
                              ? console.warn("Phishing warning page timeout; page not guaranteed to work offline.")
                              : console.error("Failed to initialize phishing warning page", e);
                          } finally {
                            e && e.remove();
                          }
                        })()),
                      await te(),
                      a.default.info("MetaMask initialization complete."),
                      Z();
                  } catch (e) {
                    ee(e);
                  }
                }
                l.default.runtime.onConnect.addListener(async (...e) => {
                  await X, re(...e);
                }),
                  l.default.runtime.onConnectExternal.addListener(async (...e) => {
                    await X, ne(...e);
                  });
                class ie extends Error {
                  constructor() {
                    super("Timeout failed");
                  }
                }
                async function ae() {
                  const e = new f.default({ migrations: w.default });
                  if (
                    (e.on("error", console.warn),
                    (z = (await U.get()) || e.generateInitialState(_)),
                    z && !z.data && ((z = e.generateInitialState(_)), F.captureMessage("MetaMask - Empty vault found - unable to recover")),
                    e.on("error", (e) => {
                      const t = (0, N.default)(z);
                      F.captureException(e, { extra: { vaultStructure: t } });
                    }),
                    (z = await e.migrateData(z)),
                    !z)
                  )
                    throw new Error("MetaMask - migrator returned undefined");
                  if (!(0, d.isObject)(z.meta)) throw new Error(`MetaMask - migrator metadata has invalid type '${typeof z.meta}'`);
                  if ("number" != typeof z.meta.version)
                    throw new Error(`MetaMask - migrator metadata version has invalid type '${typeof z.meta.version}'`);
                  if (!(0, d.isObject)(z.data)) throw new Error(`MetaMask - migrator data has invalid type '${typeof z.data}'`);
                  return U.setMetadata(z.meta), U.set(z.data), z;
                }
                function le(e, t, r, n, d) {
                  var m;
                  (W = new A.default({
                    infuraProjectId: "b6bf7d3508c941499b10025c0776eaf8",
                    showUserConfirmation: ce,
                    initState: e,
                    initLangCode: t,
                    platform: K,
                    notificationManager: B,
                    browser: l.default,
                    getRequestAccountTabIds: () => H,
                    getOpenMetamaskTabsIds: () => V,
                    localStore: U,
                    overrides: r,
                    isFirstMetaMaskControllerSetup: n,
                    currentMigrationVersion: d.version
                  })),
                    (0, R.default)({
                      getCurrentChainId: () => W.networkController.state.providerConfig.chainId,
                      getIpfsGateway: W.preferencesController.getIpfsGateway.bind(W.preferencesController),
                      getUseAddressBarEnsResolution: () => W.preferencesController.store.getState().useAddressBarEnsResolution,
                      provider: W.provider
                    }),
                    (0, s.default)(
                      (0, c.storeAsStream)(W.store),
                      (0, i.default)(1e3),
                      (0, T.default)(async (e) => {
                        await U.set(e), J.emit("state-persisted", e);
                      }),
                      (e) => {
                        a.default.error("MetaMask - Persistence pipeline failed", e);
                      }
                    ),
                    (m = W),
                    (global.stateHooks.getSentryAppState = function () {
                      const e = m.memStore.getState();
                      return (0, k.maskObject)(e, S.SENTRY_BACKGROUND_STATE);
                    });
                  const w = () => q || Boolean(Object.keys(V).length) || $,
                    f = (e, t) => {
                      if (!1 === e) W.onClientClosed();
                      else {
                        if (t === g.ENVIRONMENT_TYPE_FULLSCREEN && Boolean(Object.keys(V).length)) return;
                        W.onEnvironmentTypeClosed(t);
                      }
                    };
                  function y() {
                    let e = "";
                    const t = v();
                    t && (e = String(t)),
                      b.isManifestV3
                        ? (l.default.action.setBadgeText({ text: e }), l.default.action.setBadgeBackgroundColor({ color: "#037DD6" }))
                        : (l.default.browserAction.setBadgeText({ text: e }),
                          l.default.browserAction.setBadgeBackgroundColor({ color: "#037DD6" }));
                  }
                  function v() {
                    return W.approvalController.getTotalApprovalCount() + W.appStateController.waitingForUnlock.length;
                  }
                  (re = async (e) => {
                    var t;
                    const n = e.name;
                    if (j.includes(e.name)) return;
                    let s = !1;
                    const i = (0, I.getPlatform)(),
                      a = null !== (t = e.sender) && void 0 !== t && t.url ? new URL(e.sender.url) : null;
                    if (
                      ((s =
                        i === g.PLATFORM_FIREFOX ? D[n] : (null == a ? void 0 : a.origin) === `chrome-extension://${l.default.runtime.id}`),
                      s)
                    ) {
                      var c;
                      const t = (null == r || null === (c = r.getPortStream) || void 0 === c ? void 0 : c.call(r, e)) || new p.default(e);
                      if (
                        ((W.isClientOpen = !0),
                        W.setupTrustedCommunication(t, e.sender),
                        n === g.ENVIRONMENT_TYPE_POPUP &&
                          ((q = !0),
                          (0, o.default)(t, () => {
                            q = !1;
                            const e = w();
                            (W.isClientOpen = e), f(e, g.ENVIRONMENT_TYPE_POPUP);
                          })),
                        n === g.ENVIRONMENT_TYPE_NOTIFICATION &&
                          (($ = !0),
                          (0, o.default)(t, () => {
                            $ = !1;
                            const e = w();
                            (W.isClientOpen = e), f(e, g.ENVIRONMENT_TYPE_NOTIFICATION);
                          })),
                        n === g.ENVIRONMENT_TYPE_FULLSCREEN)
                      ) {
                        const r = e.sender.tab.id;
                        (V[r] = !0),
                          (0, o.default)(t, () => {
                            delete V[r];
                            const e = w();
                            (W.isClientOpen = e), f(e, g.ENVIRONMENT_TYPE_FULLSCREEN);
                          });
                      }
                    } else if (a && a.origin === Q.origin && a.pathname === Q.pathname) {
                      var d;
                      const t = (null == r || null === (d = r.getPortStream) || void 0 === d ? void 0 : d.call(r, e)) || new p.default(e);
                      W.setupPhishingCommunication({ connectionStream: t });
                    } else {
                      if (e.sender && e.sender.tab && e.sender.url) {
                        const t = e.sender.tab.id,
                          r = new URL(e.sender.url),
                          { origin: n } = r;
                        e.onMessage.addListener((e) => {
                          e.data && "eth_requestAccounts" === e.data.method && (H[n] = t);
                        });
                      }
                      ne(e);
                    }
                  }),
                    (ne = (e) => {
                      var t;
                      const n = (null == r || null === (t = r.getPortStream) || void 0 === t ? void 0 : t.call(r, e)) || new p.default(e);
                      W.setupUntrustedCommunication({ connectionStream: n, sender: e.sender });
                    }),
                    null != r && r.registerConnectListeners && r.registerConnectListeners(re, ne),
                    y(),
                    W.txController.on(A.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, y),
                    W.decryptMessageController.hub.on(A.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, y),
                    W.encryptionPublicKeyController.hub.on(A.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, y),
                    W.signatureController.hub.on(A.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, y),
                    W.appStateController.on(A.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, y),
                    W.controllerMessenger.subscribe(A.METAMASK_CONTROLLER_EVENTS.APPROVAL_STATE_CHANGE, y),
                    W.txController.initApprovals(),
                    B.on(M.NOTIFICATION_MANAGER_EVENTS.POPUP_CLOSED, ({ automaticallyClosed: e }) => {
                      e
                        ? v() > 0 && ce()
                        : (Object.keys(W.txController.txStateManager.getUnapprovedTxList()).forEach((e) =>
                            W.txController.txStateManager.setTxStatusRejected(e)
                          ),
                          W.signatureController.rejectUnapproved(C.REJECT_NOTIFICATION_CLOSE_SIG),
                          W.decryptMessageController.rejectUnapproved(C.REJECT_NOTIFICATION_CLOSE),
                          W.encryptionPublicKeyController.rejectUnapproved(C.REJECT_NOTIFICATION_CLOSE),
                          Object.values(W.approvalController.state.pendingApprovals).forEach(({ id: e, type: t }) => {
                            switch (t) {
                              case h.ApprovalType.SnapDialogAlert:
                              case h.ApprovalType.SnapDialogPrompt:
                                W.approvalController.accept(e, null);
                                break;
                              case h.ApprovalType.SnapDialogConfirmation:
                              case g.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.confirmAccountCreation:
                              case g.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.confirmAccountRemoval:
                              case g.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.showSnapAccountRedirect:
                                W.approvalController.accept(e, !1);
                                break;
                              default:
                                W.approvalController.reject(e, u.ethErrors.provider.userRejectedRequest());
                            }
                          }),
                          y());
                    }),
                    Object.keys(W.snapController.state.snaps).length > 0 && W.snapController.updateBlockedSnaps();
                }
                async function ce() {
                  const e = await K.getActiveTabs(),
                    t = Boolean(e.find((e) => V[e.id])),
                    r = e.length > 0 && e[0].extData && e[0].extData.indexOf("vivaldi_tab") > -1;
                  if (!G && (r || !q) && !t) {
                    G = !0;
                    try {
                      const e = W.appStateController.getCurrentPopupId();
                      await B.showPopup((e) => W.appStateController.setCurrentPopupId(e), e);
                    } finally {
                      G = !1;
                    }
                  }
                }
                const de = () => {
                  if (W)
                    return (
                      W.metaMetricsController.updateTraits({
                        [C.MetaMetricsUserTrait.InstallDateExt]: new Date().toISOString().split("T")[0]
                      }),
                      void W.metaMetricsController.addEventBeforeMetricsOptIn({
                        category: C.MetaMetricsEventCategory.App,
                        event: C.MetaMetricsEventName.AppInstalled,
                        properties: {}
                      })
                    );
                  setTimeout(() => {
                    de();
                  }, 1e3);
                };
                (async function () {
                  await (async function () {
                    Boolean(await U.get()) || (de(), K.openExtensionInBrowser());
                  })(),
                    se().catch(a.default.error);
                })();
              };
            };
      },
      { package: "$root$", file: "app/scripts/background.js" }
    ]
  ],
  [4],
  {}
);
