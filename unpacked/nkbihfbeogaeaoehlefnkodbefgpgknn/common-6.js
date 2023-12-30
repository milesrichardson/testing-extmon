LavaPack.loadBundle(
  [
    [
      4758,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.REJECT_NOTIFICATION_CLOSE_SIG =
                    r.REJECT_NOTIFICATION_CLOSE =
                    r.MetaMetricsUserTrait =
                    r.MetaMetricsTransactionEventSource =
                    r.MetaMetricsTokenEventSource =
                    r.MetaMetricsSwapsEventSource =
                    r.MetaMetricsNetworkEventSource =
                    r.MetaMetricsEventUiCustomization =
                    r.MetaMetricsEventName =
                    r.MetaMetricsEventLocation =
                    r.MetaMetricsEventLinkType =
                    r.MetaMetricsEventKeyType =
                    r.MetaMetricsEventErrorType =
                    r.MetaMetricsEventCategory =
                    r.MetaMetricsEventAccountType =
                    r.MetaMetricsEventAccountImportType =
                    r.MetaMetricsContextProp =
                    r.METAMETRICS_BACKGROUND_PAGE_OBJECT =
                    r.METAMETRICS_ANONYMOUS_ID =
                      void 0);
                r.MetaMetricsUserTrait = (function (e) {
                  return (
                    (e.AddressBookEntries = "address_book_entries"),
                    (e.InstallDateExt = "install_date_ext"),
                    (e.LedgerConnectionType = "ledger_connection_type"),
                    (e.NetworksAdded = "networks_added"),
                    (e.NetworksWithoutTicker = "networks_without_ticker"),
                    (e.NftAutodetectionEnabled = "nft_autodetection_enabled"),
                    (e.NumberOfAccounts = "number_of_accounts"),
                    (e.NumberOfNftCollections = "number_of_nft_collections"),
                    (e.NumberOfNfts = "number_of_nfts"),
                    (e.NumberOfTokens = "number_of_tokens"),
                    (e.OpenSeaApiEnabled = "opensea_api_enabled"),
                    (e.Theme = "theme"),
                    (e.ThreeBoxEnabled = "three_box_enabled"),
                    (e.TokenDetectionEnabled = "token_detection_enabled"),
                    (e.DesktopEnabled = "desktop_enabled"),
                    (e.SecurityProviders = "security_providers"),
                    e
                  );
                })({});
                (r.METAMETRICS_ANONYMOUS_ID = "0x0000000000000000"),
                  (r.METAMETRICS_BACKGROUND_PAGE_OBJECT = {
                    path: "/background-process",
                    title: "Background Process",
                    url: "/background-process"
                  }),
                  (r.REJECT_NOTIFICATION_CLOSE = "Cancel Via Notification Close"),
                  (r.REJECT_NOTIFICATION_CLOSE_SIG = "Cancel Sig Request Via Notification Close");
                (r.MetaMetricsEventName = (function (e) {
                  return (
                    (e.AccountAdded = "Account Added"),
                    (e.AccountAddSelected = "Account Add Selected"),
                    (e.AccountAddFailed = "Account Add Failed"),
                    (e.AccountPasswordCreated = "Account Password Created"),
                    (e.AccountReset = "Account Reset"),
                    (e.AccountRenamed = "Account Renamed"),
                    (e.ActivityDetailsOpened = "Activity Details Opened"),
                    (e.ActivityDetailsClosed = "Activity Details Closed"),
                    (e.AppInstalled = "App Installed"),
                    (e.AppUnlocked = "App Unlocked"),
                    (e.AppUnlockedFailed = "App Unlocked Failed"),
                    (e.AppLocked = "App Locked"),
                    (e.AppWindowExpanded = "App Window Expanded"),
                    (e.BridgeLinkClicked = "Bridge Link Clicked"),
                    (e.DecryptionApproved = "Decryption Approved"),
                    (e.DecryptionRejected = "Decryption Rejected"),
                    (e.DecryptionRequested = "Decryption Requested"),
                    (e.EncryptionPublicKeyApproved = "Encryption Approved"),
                    (e.EncryptionPublicKeyRejected = "Encryption Rejected"),
                    (e.EncryptionPublicKeyRequested = "Encryption Requested"),
                    (e.ExternalLinkClicked = "External Link Clicked"),
                    (e.KeyExportSelected = "Key Export Selected"),
                    (e.KeyExportRequested = "Key Export Requested"),
                    (e.KeyExportFailed = "Key Export Failed"),
                    (e.KeyExportCanceled = "Key Export Canceled"),
                    (e.KeyExportRevealed = "Key Material Revealed"),
                    (e.KeyExportCopied = "Key Material Copied"),
                    (e.KeyTokenDetectionSelected = "Key Token Detection Selected"),
                    (e.KeyGlobalSecurityToggleSelected = "Key Global Security/Privacy Settings"),
                    (e.KeyBalanceTokenPriceChecker = "Key Show Balance and Token Price Checker Settings"),
                    (e.KeyGasFeeEstimationBuySwapTokens = "Key Show Gas Fee Estimation, Buy Crypto and Swap Tokens"),
                    (e.KeyAutoDetectTokens = "Key Autodetect tokens"),
                    (e.KeyBatchAccountBalanceRequests = "Key Batch account balance requests"),
                    (e.MetricsOptIn = "Metrics Opt In"),
                    (e.MetricsOptOut = "Metrics Opt Out"),
                    (e.NavAccountMenuOpened = "Account Menu Opened"),
                    (e.NavAccountDetailsOpened = "Account Details Opened"),
                    (e.NavConnectedSitesOpened = "Connected Sites Opened"),
                    (e.NavMainMenuOpened = "Main Menu Opened"),
                    (e.NavNetworkMenuOpened = "Network Menu Opened"),
                    (e.NavSettingsOpened = "Settings Opened"),
                    (e.NavAccountSwitched = "Account Switched"),
                    (e.NavNetworkSwitched = "Network Switched"),
                    (e.NavBuyButtonClicked = "Buy Button Clicked"),
                    (e.NavSendButtonClicked = "Send Button Clicked"),
                    (e.NavSwapButtonClicked = "Swap Button Clicked"),
                    (e.NftAdded = "NFT Added"),
                    (e.OnboardingWalletCreationStarted = "Wallet Setup Selected"),
                    (e.OnboardingWalletImportStarted = "Wallet Import Started"),
                    (e.OnboardingWalletCreationAttempted = "Wallet Password Created"),
                    (e.OnboardingWalletSecurityStarted = "SRP Backup Selected"),
                    (e.OnboardingWalletSecuritySkipInitiated = "SRP Skip Backup Selected"),
                    (e.OnboardingWalletSecuritySkipConfirmed = "SRP Backup Skipped"),
                    (e.OnboardingWalletSecuritySkipCanceled = "SRP Skip Backup Canceled"),
                    (e.OnboardingWalletSecurityPhraseRevealed = "SRP Revealed"),
                    (e.OnboardingWalletSecurityPhraseWrittenDown = "SRP Backup Confirm Display"),
                    (e.OnboardingWalletSecurityPhraseConfirmed = "SRP Backup Confirmed"),
                    (e.OnboardingWalletCreationComplete = "Wallet Created"),
                    (e.OnboardingWalletSetupComplete = "Application Opened"),
                    (e.OnboardingWalletAdvancedSettings = "Settings Updated"),
                    (e.OnboardingWalletImportAttempted = "Wallet Import Attempted"),
                    (e.OnboardingWalletVideoPlay = "SRP Intro Video Played"),
                    (e.OnboardingTwitterClick = "External Link Clicked"),
                    (e.OnrampProviderSelected = "On-ramp Provider Selected"),
                    (e.PermissionsApproved = "Permissions Approved"),
                    (e.PermissionsRejected = "Permissions Rejected"),
                    (e.PermissionsRequested = "Permissions Requested"),
                    (e.PetnameCreated = "Petname Created"),
                    (e.PetnameDeleted = "Petname Deleted"),
                    (e.PetnameDisplayed = "Petname Displayed"),
                    (e.PetnameModalOpened = "Petname Modal Opened"),
                    (e.PetnameUpdated = "Petname Updated"),
                    (e.PhishingPageDisplayed = "Phishing Page Displayed"),
                    (e.PortfolioLinkClicked = "Portfolio Link Clicked"),
                    (e.ProviderMethodCalled = "Provider Method Called"),
                    (e.PublicAddressCopied = "Public Address Copied"),
                    (e.QuoteError = "Quote Error"),
                    (e.SettingsUpdated = "Settings Updated"),
                    (e.SignatureApproved = "Signature Approved"),
                    (e.SignatureFailed = "Signature Failed"),
                    (e.SignatureRejected = "Signature Rejected"),
                    (e.SignatureRequested = "Signature Requested"),
                    (e.SrpRevealStarted = "Reveal SRP Initiated"),
                    (e.SrpRevealClicked = "Clicked Reveal Secret Recovery"),
                    (e.SrpRevealViewed = "Views Reveal Secret Recovery"),
                    (e.SrpRevealBackButtonClicked = "Clicked Back on Reveal SRP Password Page"),
                    (e.SrpRevealCancelled = "Reveal SRP Cancelled"),
                    (e.SrpRevealCancelButtonClicked = "Clicks Cancel on Reveal Secret Recovery Phrase Page"),
                    (e.SrpRevealCloseClicked = "Clicks CLOSE with SRP"),
                    (e.SrpRevealNextClicked = "Clicks Next on Reveal Secret Recovery Phrase"),
                    (e.SrpHoldToRevealClickStarted = "Reveal SRP Click Started"),
                    (e.SrpHoldToRevealCloseClicked = "Closes Hold To Reveal SRP"),
                    (e.SrpHoldToRevealCompleted = "Reveal SRP Completed"),
                    (e.SrpViewsSrpQR = "Views SRP QR Code"),
                    (e.SrpViewSrpText = "Views SRP"),
                    (e.SrpCopiedToClipboard = "Copies SRP to clipboard"),
                    (e.SrpToConfirmBackup = "SRP Backup Confirm Displayed"),
                    (e.SupportLinkClicked = "Support Link Clicked"),
                    (e.TermsOfUseShown = "Terms of Use Shown"),
                    (e.TermsOfUseAccepted = "Terms of Use Accepted"),
                    (e.TokenImportButtonClicked = "Import Token Button Clicked"),
                    (e.TokenScreenOpened = "Token Screen Opened"),
                    (e.TokenAdded = "Token Added"),
                    (e.TokenDetected = "Token Detected"),
                    (e.TokenHidden = "Token Hidden"),
                    (e.TokenImportCanceled = "Token Import Canceled"),
                    (e.TokenImportClicked = "Token Import Clicked"),
                    (e.WalletSetupStarted = "Wallet Setup Selected"),
                    (e.WalletSetupCanceled = "Wallet Setup Canceled"),
                    (e.WalletSetupFailed = "Wallet Setup Failed"),
                    (e.WalletCreated = "Wallet Created"),
                    (e.AccountDetailMenuOpened = "Account Details Menu Opened"),
                    (e.BlockExplorerLinkClicked = "Block Explorer Clicked"),
                    (e.AccountRemoved = "Account Removed"),
                    (e.TestNetworksDisplayed = "Test Networks Displayed"),
                    (e.AddNetworkButtonClick = "Add Network Button Clicked"),
                    (e.CustomNetworkAdded = "Custom Network Added"),
                    (e.TokenDetailsOpened = "Token Details Opened"),
                    (e.NftScreenOpened = "NFT Screen Opened"),
                    (e.ActivityScreenOpened = "Activity Screen Opened"),
                    (e.WhatsNewViewed = "What's New Viewed"),
                    (e.WhatsNewClicked = "What's New Link Clicked"),
                    (e.PrepareSwapPageLoaded = "Prepare Swap Page Loaded"),
                    (e.QuotesRequested = "Quotes Requested"),
                    (e.QuotesReceived = "Quotes Received"),
                    (e.BestQuoteReviewed = "Best Quote Reviewed"),
                    (e.AllAvailableQuotesOpened = "All Available Quotes Opened"),
                    (e.SwapStarted = "Swap Started"),
                    (e.TransactionAdded = "Transaction Added"),
                    (e.TransactionSubmitted = "Transaction Submitted"),
                    (e.TransactionApproved = "Transaction Approved"),
                    (e.SwapCompleted = "Swap Completed"),
                    (e.TransactionFinalized = "Transaction Finalized"),
                    (e.ExitedSwaps = "Exited Swaps"),
                    (e.SwapError = "Swap Error"),
                    (e.SnapInstalled = "Snap Installed"),
                    (e.SnapUninstalled = "Snap Uninstalled"),
                    (e.SnapUpdated = "Snap Updated"),
                    (e.SnapExportUsed = "Snap Export Used"),
                    (e.AddSnapAccountEnabled = "Add Snap Account Enabled"),
                    e
                  );
                })({})),
                  (r.MetaMetricsEventAccountType = (function (e) {
                    return (e.Default = "metamask"), (e.Hardware = "hardware"), (e.Imported = "imported"), e;
                  })({})),
                  (r.MetaMetricsEventAccountImportType = (function (e) {
                    return (e.Json = "json"), (e.PrivateKey = "private_key"), (e.Srp = "srp"), e;
                  })({})),
                  (r.MetaMetricsEventCategory = (function (e) {
                    return (
                      (e.Accounts = "Accounts"),
                      (e.App = "App"),
                      (e.Auth = "Auth"),
                      (e.Background = "Background"),
                      (e.Desktop = "Desktop"),
                      (e.Error = "Error"),
                      (e.Footer = "Footer"),
                      (e.Home = "Home"),
                      (e.InpageProvider = "inpage_provider"),
                      (e.Keys = "Keys"),
                      (e.Messages = "Messages"),
                      (e.Navigation = "Navigation"),
                      (e.Network = "Network"),
                      (e.Onboarding = "Onboarding"),
                      (e.Petnames = "Petnames"),
                      (e.Phishing = "Phishing"),
                      (e.Retention = "Retention"),
                      (e.Settings = "Settings"),
                      (e.Snaps = "Snaps"),
                      (e.Swaps = "Swaps"),
                      (e.Tokens = "Tokens"),
                      (e.Transactions = "Transactions"),
                      (e.Wallet = "Wallet"),
                      e
                    );
                  })({})),
                  (r.MetaMetricsEventLinkType = (function (e) {
                    return (
                      (e.AccountTracker = "Account Tracker"),
                      (e.BlockExplorer = "Block Explorer"),
                      (e.TokenTracker = "Token Tracker"),
                      (e.TransactionBlockExplorer = "Transaction Block Explorer"),
                      e
                    );
                  })({})),
                  (r.MetaMetricsEventKeyType = (function (e) {
                    return (e.Pkey = "private_key"), (e.Srp = "srp"), e;
                  })({})),
                  (r.MetaMetricsEventErrorType = (function (e) {
                    return (e.InsufficientGas = "insufficient_gas"), (e.GasTimeout = "gas_timeout"), e;
                  })({})),
                  (r.MetaMetricsNetworkEventSource = (function (e) {
                    return (
                      (e.CustomNetworkForm = "custom_network_form"), (e.PopularNetworkList = "popular_network_list"), (e.Dapp = "dapp"), e
                    );
                  })({})),
                  (r.MetaMetricsSwapsEventSource = (function (e) {
                    return (e.MainView = "Main View"), (e.TokenView = "Token View"), e;
                  })({})),
                  (r.MetaMetricsTokenEventSource = (function (e) {
                    return (e.Custom = "custom"), (e.Dapp = "dapp"), (e.Detected = "detected"), (e.List = "list"), e;
                  })({})),
                  (r.MetaMetricsTransactionEventSource = (function (e) {
                    return (e.Dapp = "dapp"), (e.User = "user"), e;
                  })({})),
                  (r.MetaMetricsEventLocation = (function (e) {
                    return (e.TokenDetails = "token_details"), (e.TokenDetection = "token_detection"), (e.TokenMenu = "token_menu"), e;
                  })({})),
                  (r.MetaMetricsEventUiCustomization = (function (e) {
                    return (
                      (e.FlaggedAsMalicious = "flagged_as_malicious"),
                      (e.FlaggedAsSafetyUnknown = "flagged_as_safety_unknown"),
                      (e.Siwe = "sign_in_with_ethereum"),
                      e
                    );
                  })({})),
                  (r.MetaMetricsContextProp = (function (e) {
                    return (e.PageTitle = "location"), e;
                  })({}));
              };
            };
      },
      { package: "$root$", file: "shared/constants/metametrics.ts" }
    ],
    [
      4759,
      { lodash: 4071 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.infuraProjectId =
                    r.getRpcUrl =
                    r.UNSUPPORTED_RPC_METHODS =
                    r.TEST_NETWORK_TICKER_MAP =
                    r.TEST_ETH_TOKEN_IMAGE_URL =
                    r.TEST_CHAINS =
                    r.SEPOLIA_RPC_URL =
                    r.SEPOLIA_DISPLAY_NAME =
                    r.POLYGON_DISPLAY_NAME =
                    r.PALM_TOKEN_IMAGE_URL =
                    r.PALM_DISPLAY_NAME =
                    r.OPTIMISM_TOKEN_IMAGE_URL =
                    r.OPTIMISM_DISPLAY_NAME =
                    r.NetworkStatus =
                    r.NETWORK_TYPES =
                    r.NETWORK_TO_NAME_MAP =
                    r.NETWORK_NAMES =
                    r.NATIVE_CURRENCY_TOKEN_IMAGE_MAP =
                    r.MAX_SAFE_CHAIN_ID =
                    r.MATIC_TOKEN_IMAGE_URL =
                    r.MAINNET_RPC_URL =
                    r.MAINNET_DISPLAY_NAME =
                    r.LOCALHOST_RPC_URL =
                    r.LOCALHOST_DISPLAY_NAME =
                    r.LINEA_MAINNET_TOKEN_IMAGE_URL =
                    r.LINEA_MAINNET_RPC_URL =
                    r.LINEA_MAINNET_DISPLAY_NAME =
                    r.LINEA_GOERLI_TOKEN_IMAGE_URL =
                    r.LINEA_GOERLI_RPC_URL =
                    r.LINEA_GOERLI_DISPLAY_NAME =
                    r.IPFS_DEFAULT_GATEWAY_URL =
                    r.INFURA_PROVIDER_TYPES =
                    r.INFURA_BLOCKED_KEY =
                    r.HARMONY_ONE_TOKEN_IMAGE_URL =
                    r.HARMONY_DISPLAY_NAME =
                    r.GOERLI_RPC_URL =
                    r.GOERLI_DISPLAY_NAME =
                    r.GNOSIS_TOKEN_IMAGE_URL =
                    r.GNOSIS_DISPLAY_NAME =
                    r.FTM_TOKEN_IMAGE_URL =
                    r.FEATURED_RPCS =
                    r.FANTOM_DISPLAY_NAME =
                    r.ETH_TOKEN_IMAGE_URL =
                    r.ETHERSCAN_SUPPORTED_NETWORKS =
                    r.CURRENCY_SYMBOLS =
                    r.CHAIN_ID_TO_TYPE_MAP =
                    r.CHAIN_ID_TO_RPC_URL_MAP =
                    r.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP =
                    r.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP =
                    r.CHAIN_ID_TO_ETHERS_NETWORK_NAME_MAP =
                    r.CHAIN_IDS =
                    r.CELO_TOKEN_IMAGE_URL =
                    r.CELO_DISPLAY_NAME =
                    r.BUYABLE_CHAINS_MAP =
                    r.BUILT_IN_NETWORKS =
                    r.BUILT_IN_INFURA_NETWORKS =
                    r.BSC_DISPLAY_NAME =
                    r.BNB_TOKEN_IMAGE_URL =
                    r.BNB_DISPLAY_NAME =
                    r.AVAX_TOKEN_IMAGE_URL =
                    r.AVALANCHE_DISPLAY_NAME =
                    r.AURORA_TOKEN_IMAGE_URL =
                    r.AURORA_DISPLAY_NAME =
                    r.ARBITRUM_DISPLAY_NAME =
                    r.AETH_TOKEN_IMAGE_URL =
                      void 0);
                var n = e("lodash");
                const o = (r.NETWORK_TYPES = {
                    GOERLI: "goerli",
                    LOCALHOST: "localhost",
                    MAINNET: "mainnet",
                    RPC: "rpc",
                    SEPOLIA: "sepolia",
                    LINEA_GOERLI: "linea-goerli",
                    LINEA_MAINNET: "linea-mainnet"
                  }),
                  i = (r.NETWORK_NAMES = { HOMESTEAD: "homestead" }),
                  s = (r.CHAIN_IDS = {
                    MAINNET: "0x1",
                    GOERLI: "0x5",
                    LOCALHOST: "0x539",
                    BSC: "0x38",
                    BSC_TESTNET: "0x61",
                    OPTIMISM: "0xa",
                    OPTIMISM_TESTNET: "0x1a4",
                    BASE: "0x2105",
                    BASE_TESTNET: "0x14a33",
                    OPBNB: "0xcc",
                    OPBNB_TESTNET: "0x15eb",
                    POLYGON: "0x89",
                    POLYGON_TESTNET: "0x13881",
                    AVALANCHE: "0xa86a",
                    AVALANCHE_TESTNET: "0xa869",
                    FANTOM: "0xfa",
                    FANTOM_TESTNET: "0xfa2",
                    CELO: "0xa4ec",
                    ARBITRUM: "0xa4b1",
                    HARMONY: "0x63564c40",
                    PALM: "0x2a15c308d",
                    SEPOLIA: "0xaa36a7",
                    LINEA_GOERLI: "0xe704",
                    LINEA_MAINNET: "0xe708",
                    AURORA: "0x4e454152",
                    MOONBEAM: "0x504",
                    MOONBEAM_TESTNET: "0x507",
                    MOONRIVER: "0x505",
                    CRONOS: "0x19",
                    GNOSIS: "0x64",
                    ZKSYNC_ERA: "0x144"
                  }),
                  a = ((r.MAX_SAFE_CHAIN_ID = 0xfffffffffffec), (r.MAINNET_DISPLAY_NAME = "Ethereum Mainnet")),
                  c = (r.GOERLI_DISPLAY_NAME = "Goerli"),
                  u = (r.SEPOLIA_DISPLAY_NAME = "Sepolia"),
                  l = (r.LINEA_GOERLI_DISPLAY_NAME = "Linea Goerli"),
                  d = (r.LINEA_MAINNET_DISPLAY_NAME = "Linea Mainnet"),
                  p = (r.LOCALHOST_DISPLAY_NAME = "Localhost 8545"),
                  h = ((r.BSC_DISPLAY_NAME = "Binance Smart Chain"), (r.POLYGON_DISPLAY_NAME = "Polygon")),
                  f = (r.AVALANCHE_DISPLAY_NAME = "Avalanche Network C-Chain"),
                  g = (r.ARBITRUM_DISPLAY_NAME = "Arbitrum One"),
                  m = (r.BNB_DISPLAY_NAME = "BNB Chain"),
                  y = (r.OPTIMISM_DISPLAY_NAME = "OP Mainnet"),
                  _ = (r.FANTOM_DISPLAY_NAME = "Fantom Opera"),
                  v = (r.HARMONY_DISPLAY_NAME = "Harmony Mainnet Shard 0"),
                  T = (r.PALM_DISPLAY_NAME = "Palm"),
                  E = (r.AURORA_DISPLAY_NAME = "Aurora Mainnet"),
                  b = (r.CELO_DISPLAY_NAME = "Celo Mainnet"),
                  w = (r.GNOSIS_DISPLAY_NAME = "Gnosis"),
                  A = (r.infuraProjectId = "b6bf7d3508c941499b10025c0776eaf8"),
                  N = ({ network: e, excludeProjectId: t = !1 }) => `https://${e}.infura.io/v3/${t ? "" : A}`;
                r.getRpcUrl = N;
                const I = (r.MAINNET_RPC_URL = N({ network: o.MAINNET })),
                  O = (r.GOERLI_RPC_URL = N({ network: o.GOERLI })),
                  R = (r.SEPOLIA_RPC_URL = N({ network: o.SEPOLIA })),
                  S = (r.LINEA_GOERLI_RPC_URL = N({ network: o.LINEA_GOERLI })),
                  P = (r.LINEA_MAINNET_RPC_URL = N({ network: o.LINEA_MAINNET })),
                  k = (r.LOCALHOST_RPC_URL = "http://localhost:8545"),
                  C = (r.CURRENCY_SYMBOLS = {
                    ARBITRUM: "ETH",
                    AURORA_ETH: "AURORA ETH",
                    AVALANCHE: "AVAX",
                    BNB: "BNB",
                    BUSD: "BUSD",
                    CELO: "CELO",
                    DAI: "DAI",
                    GNOSIS: "XDAI",
                    ETH: "ETH",
                    FANTOM: "FTM",
                    HARMONY: "ONE",
                    PALM: "PALM",
                    MATIC: "MATIC",
                    TEST_ETH: "TESTETH",
                    USDC: "USDC",
                    USDT: "USDT",
                    WETH: "WETH",
                    OPTIMISM: "OP",
                    CRONOS: "CRO",
                    GLIMMER: "GLMR",
                    MOONRIVER: "MOVR",
                    ONE: "ONE"
                  }),
                  D = (r.ETH_TOKEN_IMAGE_URL = "./images/eth_logo.png"),
                  M = (r.LINEA_GOERLI_TOKEN_IMAGE_URL = "./images/linea-logo-testnet.png"),
                  L = (r.LINEA_MAINNET_TOKEN_IMAGE_URL = "./images/linea-logo-mainnet.png"),
                  x = (r.TEST_ETH_TOKEN_IMAGE_URL = "./images/black-eth-logo.svg"),
                  j = (r.BNB_TOKEN_IMAGE_URL = "./images/bnb.png"),
                  B = (r.MATIC_TOKEN_IMAGE_URL = "./images/matic-token.png"),
                  U = (r.AVAX_TOKEN_IMAGE_URL = "./images/avax-token.png"),
                  F = (r.AETH_TOKEN_IMAGE_URL = "./images/arbitrum.svg"),
                  H = (r.FTM_TOKEN_IMAGE_URL = "./images/fantom-opera.svg"),
                  K = (r.HARMONY_ONE_TOKEN_IMAGE_URL = "./images/harmony-one.svg"),
                  G = (r.OPTIMISM_TOKEN_IMAGE_URL = "./images/optimism.svg"),
                  W = (r.PALM_TOKEN_IMAGE_URL = "./images/palm.svg"),
                  $ = (r.AURORA_TOKEN_IMAGE_URL = "./images/aurora.png"),
                  q = (r.CELO_TOKEN_IMAGE_URL = "./images/celo.svg"),
                  V = (r.GNOSIS_TOKEN_IMAGE_URL = "./images/gnosis.svg"),
                  Y = (r.INFURA_PROVIDER_TYPES = [o.MAINNET, o.GOERLI, o.SEPOLIA, o.LINEA_GOERLI, o.LINEA_MAINNET]),
                  J = ((r.TEST_CHAINS = [s.GOERLI, s.SEPOLIA, s.LINEA_GOERLI, s.LOCALHOST]), (e) => (0, n.capitalize)(e)),
                  z = (r.TEST_NETWORK_TICKER_MAP = {
                    [o.GOERLI]: `${J(o.GOERLI)}${C.ETH}`,
                    [o.SEPOLIA]: `${J(o.SEPOLIA)}${C.ETH}`,
                    [o.LINEA_GOERLI]: `Linea${C.ETH}`
                  }),
                  X = (r.BUILT_IN_NETWORKS = {
                    [o.GOERLI]: { chainId: s.GOERLI, ticker: z[o.GOERLI], blockExplorerUrl: `https://${o.GOERLI}.etherscan.io` },
                    [o.SEPOLIA]: { chainId: s.SEPOLIA, ticker: z[o.SEPOLIA], blockExplorerUrl: `https://${o.SEPOLIA}.etherscan.io` },
                    [o.LINEA_GOERLI]: {
                      chainId: s.LINEA_GOERLI,
                      ticker: z[o.LINEA_GOERLI],
                      blockExplorerUrl: "https://goerli.lineascan.build"
                    },
                    [o.MAINNET]: { chainId: s.MAINNET, blockExplorerUrl: "https://etherscan.io" },
                    [o.LINEA_MAINNET]: { chainId: s.LINEA_MAINNET, blockExplorerUrl: "https://lineascan.build" },
                    [o.LOCALHOST]: { chainId: s.LOCALHOST }
                  }),
                  Z =
                    ((r.BUILT_IN_INFURA_NETWORKS = (0, n.pick)(X, Y)),
                    (r.NETWORK_TO_NAME_MAP = {
                      [o.MAINNET]: a,
                      [o.GOERLI]: c,
                      [o.SEPOLIA]: u,
                      [o.LINEA_GOERLI]: l,
                      [o.LINEA_MAINNET]: d,
                      [o.LOCALHOST]: p,
                      [s.GOERLI]: c,
                      [s.SEPOLIA]: u,
                      [s.LINEA_GOERLI]: l,
                      [s.MAINNET]: a,
                      [s.LINEA_MAINNET]: d,
                      [s.LOCALHOST]: p
                    }),
                    (r.CHAIN_ID_TO_TYPE_MAP = {
                      [s.MAINNET]: o.MAINNET,
                      [s.GOERLI]: o.GOERLI,
                      [s.SEPOLIA]: o.SEPOLIA,
                      [s.LINEA_GOERLI]: o.LINEA_GOERLI,
                      [s.LINEA_MAINNET]: o.LINEA_MAINNET,
                      [s.LOCALHOST]: o.LOCALHOST
                    })),
                  Q =
                    ((r.CHAIN_ID_TO_RPC_URL_MAP = {
                      [s.GOERLI]: O,
                      [s.SEPOLIA]: R,
                      [s.LINEA_GOERLI]: S,
                      [s.MAINNET]: I,
                      [s.LINEA_MAINNET]: P,
                      [s.LOCALHOST]: k
                    }),
                    (r.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP = {
                      [s.MAINNET]: D,
                      [s.LINEA_GOERLI]: M,
                      [s.LINEA_MAINNET]: L,
                      [s.AVALANCHE]: U,
                      [s.BSC]: j,
                      [s.POLYGON]: B,
                      [s.ARBITRUM]: F,
                      [s.FANTOM]: H,
                      [s.HARMONY]: K,
                      [s.OPTIMISM]: G,
                      [s.PALM]: W,
                      [s.AURORA]: $,
                      [s.CELO]: q,
                      [s.GNOSIS]: V
                    }),
                    (r.CHAIN_ID_TO_ETHERS_NETWORK_NAME_MAP = {
                      [s.GOERLI]: o.GOERLI,
                      [s.SEPOLIA]: o.SEPOLIA,
                      [s.LINEA_GOERLI]: o.LINEA_GOERLI,
                      [s.MAINNET]: i.HOMESTEAD,
                      [s.LINEA_MAINNET]: o.LINEA_MAINNET
                    }),
                    (r.NATIVE_CURRENCY_TOKEN_IMAGE_MAP = {
                      [C.ETH]: D,
                      [C.TEST_ETH]: x,
                      [C.BNB]: j,
                      [C.MATIC]: B,
                      [C.AVALANCHE]: U,
                      [C.OPTIMISM]: G,
                      [C.CELO]: q,
                      [C.AURORA_ETH]: D,
                      [C.GNOSIS]: V
                    }),
                    (r.INFURA_BLOCKED_KEY = "countryBlocked"),
                    "etherscan.io"),
                  ee = "api";
                (r.ETHERSCAN_SUPPORTED_NETWORKS = {
                  [s.GOERLI]: { domain: Q, subdomain: `${ee}-${Z[s.GOERLI]}` },
                  [s.MAINNET]: { domain: Q, subdomain: ee },
                  [s.SEPOLIA]: { domain: Q, subdomain: `${ee}-${Z[s.SEPOLIA]}` },
                  [s.LINEA_GOERLI]: { domain: "lineascan.build", subdomain: "goerli" },
                  [s.LINEA_MAINNET]: { domain: "lineascan.build", subdomain: ee },
                  [s.BSC]: { domain: "bscscan.com", subdomain: ee },
                  [s.BSC_TESTNET]: { domain: "bscscan.com", subdomain: `${ee}-testnet` },
                  [s.OPTIMISM]: { domain: Q, subdomain: `${ee}-optimistic` },
                  [s.OPTIMISM_TESTNET]: { domain: Q, subdomain: `${ee}-goerli-optimistic` },
                  [s.POLYGON]: { domain: "polygonscan.com", subdomain: ee },
                  [s.POLYGON_TESTNET]: { domain: "polygonscan.com", subdomain: `${ee}-mumbai` },
                  [s.AVALANCHE]: { domain: "snowtrace.io", subdomain: ee },
                  [s.AVALANCHE_TESTNET]: { domain: "snowtrace.io", subdomain: `${ee}-testnet` },
                  [s.FANTOM]: { domain: "ftmscan.com", subdomain: ee },
                  [s.FANTOM_TESTNET]: { domain: "ftmscan.com", subdomain: `${ee}-testnet` },
                  [s.MOONBEAM]: { domain: "moonscan.io", subdomain: `${ee}-moonbeam` },
                  [s.MOONBEAM_TESTNET]: { domain: "moonscan.io", subdomain: `${ee}-moonbase` },
                  [s.MOONRIVER]: { domain: "moonscan.io", subdomain: `${ee}-moonriver` },
                  [s.GNOSIS]: { domain: "gnosisscan.io", subdomain: `${ee}-gnosis` }
                }),
                  (r.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP = { [s.OPTIMISM]: 1, [s.OPTIMISM_TESTNET]: 1 }),
                  (r.UNSUPPORTED_RPC_METHODS = new Set(["eth_signTransaction"])),
                  (r.IPFS_DEFAULT_GATEWAY_URL = "dweb.link"),
                  (r.BUYABLE_CHAINS_MAP = {
                    [s.MAINNET]: { nativeCurrency: C.ETH, network: "ethereum" },
                    [s.BSC]: { nativeCurrency: C.BNB, network: "bsc" },
                    [s.POLYGON]: { nativeCurrency: C.MATIC, network: "polygon" },
                    [s.AVALANCHE]: { nativeCurrency: C.AVALANCHE, network: "avaxcchain" },
                    [s.FANTOM]: { nativeCurrency: C.FANTOM, network: "fantom" },
                    [s.CELO]: { nativeCurrency: C.CELO, network: "celo" },
                    [s.OPTIMISM]: { nativeCurrency: C.ETH, network: "optimism" },
                    [s.ARBITRUM]: { nativeCurrency: C.ARBITRUM, network: "arbitrum" },
                    [s.CRONOS]: { nativeCurrency: C.CRONOS, network: "cronos" },
                    [s.MOONBEAM]: { nativeCurrency: C.GLIMMER, network: "moonbeam" },
                    [s.MOONRIVER]: { nativeCurrency: C.MOONRIVER, network: "moonriver" },
                    [s.AURORA]: { nativeCurrency: C.AURORA_ETH, network: "aurora" },
                    [s.HARMONY]: { nativeCurrency: C.ONE, network: "harmony" },
                    [s.PALM]: { nativeCurrency: C.PALM, network: "palm" },
                    [s.LINEA_MAINNET]: { nativeCurrency: C.ETH, network: "linea" },
                    [s.ZKSYNC_ERA]: { nativeCurrency: C.ETH, network: "zksync" }
                  }),
                  (r.FEATURED_RPCS = [
                    {
                      chainId: s.ARBITRUM,
                      nickname: g,
                      rpcUrl: `https://arbitrum-mainnet.infura.io/v3/${A}`,
                      ticker: C.ARBITRUM,
                      rpcPrefs: { blockExplorerUrl: "https://explorer.arbitrum.io", imageUrl: F }
                    },
                    {
                      chainId: s.AURORA,
                      nickname: E,
                      rpcUrl: `https://aurora-mainnet.infura.io/v3/${A}`,
                      ticker: C.AURORA_ETH,
                      rpcPrefs: { blockExplorerUrl: "https://aurorascan.dev/", imageUrl: $ }
                    },
                    {
                      chainId: s.AVALANCHE,
                      nickname: f,
                      rpcUrl: `https://avalanche-mainnet.infura.io/v3/${A}`,
                      ticker: C.AVALANCHE,
                      rpcPrefs: { blockExplorerUrl: "https://snowtrace.io/", imageUrl: U }
                    },
                    {
                      chainId: s.BSC,
                      nickname: m,
                      rpcUrl: "https://bsc-dataseed.binance.org/",
                      ticker: C.BNB,
                      rpcPrefs: { blockExplorerUrl: "https://bscscan.com/", imageUrl: j }
                    },
                    {
                      chainId: s.FANTOM,
                      nickname: _,
                      rpcUrl: "https://rpc.ftm.tools/",
                      ticker: C.FANTOM,
                      rpcPrefs: { blockExplorerUrl: "https://ftmscan.com/", imageUrl: H }
                    },
                    {
                      chainId: s.HARMONY,
                      nickname: v,
                      rpcUrl: "https://api.harmony.one/",
                      ticker: C.HARMONY,
                      rpcPrefs: { blockExplorerUrl: "https://explorer.harmony.one/", imageUrl: K }
                    },
                    {
                      chainId: s.OPTIMISM,
                      nickname: y,
                      rpcUrl: `https://optimism-mainnet.infura.io/v3/${A}`,
                      ticker: C.ETH,
                      rpcPrefs: { blockExplorerUrl: "https://optimistic.etherscan.io/", imageUrl: G }
                    },
                    {
                      chainId: s.PALM,
                      nickname: T,
                      rpcUrl: `https://palm-mainnet.infura.io/v3/${A}`,
                      ticker: C.PALM,
                      rpcPrefs: { blockExplorerUrl: "https://explorer.palm.io/", imageUrl: W }
                    },
                    {
                      chainId: s.POLYGON,
                      nickname: `${h} ${(0, n.capitalize)(o.MAINNET)}`,
                      rpcUrl: `https://polygon-mainnet.infura.io/v3/${A}`,
                      ticker: C.MATIC,
                      rpcPrefs: { blockExplorerUrl: "https://polygonscan.com/", imageUrl: B }
                    },
                    {
                      chainId: s.CELO,
                      nickname: b,
                      rpcUrl: `https://celo-mainnet.infura.io/v3/${A}`,
                      ticker: C.CELO,
                      rpcPrefs: { blockExplorerUrl: "https://celoscan.io", imageUrl: q }
                    },
                    {
                      chainId: s.GNOSIS,
                      nickname: w,
                      rpcUrl: "https://rpc.gnosischain.com",
                      ticker: C.GNOSIS,
                      rpcPrefs: { blockExplorerUrl: "https://gnosisscan.io", imageUrl: V }
                    }
                  ]);
                r.NetworkStatus = (function (e) {
                  return (e.Unknown = "unknown"), (e.Available = "available"), (e.Unavailable = "unavailable"), (e.Blocked = "blocked"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "shared/constants/network.ts" }
    ],
    [
      476,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "logger/5.7.0");
              };
            };
      },
      { package: "@ethersproject/abi>@ethersproject/logger", file: "node_modules/@ethersproject/logger/lib/_version.js" }
    ],
    [
      4760,
      { "./snaps/permissions": 4765 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var n = { CaveatTypes: !0, RestrictedMethods: !0 };
                r.RestrictedMethods = r.CaveatTypes = void 0;
                var o = e("./snaps/permissions");
                Object.keys(o).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(n, e) ||
                      (e in r && r[e] === o[e]) ||
                      Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: function () {
                          return o[e];
                        }
                      }));
                });
                (r.CaveatTypes = Object.freeze({ restrictReturnedAccounts: "restrictReturnedAccounts" })),
                  (r.RestrictedMethods = Object.freeze({
                    eth_accounts: "eth_accounts",
                    snap_dialog: "snap_dialog",
                    snap_notify: "snap_notify",
                    snap_manageState: "snap_manageState",
                    snap_getBip32PublicKey: "snap_getBip32PublicKey",
                    snap_getBip32Entropy: "snap_getBip32Entropy",
                    snap_getBip44Entropy: "snap_getBip44Entropy",
                    snap_getEntropy: "snap_getEntropy",
                    snap_getLocale: "snap_getLocale",
                    wallet_snap: "wallet_snap",
                    snap_manageAccounts: "snap_manageAccounts"
                  }));
              };
            };
      },
      { package: "$root$", file: "shared/constants/permissions.ts" }
    ],
    [
      4761,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.ThemeType = r.DEFAULT_AUTO_LOCK_TIME_LIMIT = void 0);
                r.ThemeType = (function (e) {
                  return (e.light = "light"), (e.dark = "dark"), (e.os = "os"), e;
                })({});
                r.DEFAULT_AUTO_LOCK_TIME_LIMIT = 0;
              };
            };
      },
      { package: "$root$", file: "shared/constants/preferences.ts" }
    ],
    [
      4762,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.SecurityProvider =
                    r.SECURITY_PROVIDER_MESSAGE_SEVERITY =
                    r.SECURITY_PROVIDER_CONFIG =
                    r.BlockaidResultType =
                    r.BlockaidReason =
                      void 0);
                let n = (r.SecurityProvider = (function (e) {
                  return (e.Blockaid = "blockaid"), e;
                })({}));
                r.SECURITY_PROVIDER_CONFIG = { [n.Blockaid]: { tKeyName: "blockaid", url: "https://blockaid.io/" } };
                (r.BlockaidReason = (function (e) {
                  return (
                    (e.approvalFarming = "approval_farming"),
                    (e.blurFarming = "blur_farming"),
                    (e.maliciousDomain = "malicious_domain"),
                    (e.permitFarming = "permit_farming"),
                    (e.rawNativeTokenTransfer = "raw_native_token_transfer"),
                    (e.rawSignatureFarming = "raw_signature_farming"),
                    (e.seaportFarming = "seaport_farming"),
                    (e.setApprovalForAll = "set_approval_for_all"),
                    (e.tradeOrderFarming = "trade_order_farming"),
                    (e.transferFarming = "transfer_farming"),
                    (e.transferFromFarming = "transfer_from_farming"),
                    (e.other = "other"),
                    (e.failed = "Failed"),
                    (e.notApplicable = "NotApplicable"),
                    e
                  );
                })({})),
                  (r.BlockaidResultType = (function (e) {
                    return (
                      (e.Malicious = "Malicious"),
                      (e.Warning = "Warning"),
                      (e.Benign = "Benign"),
                      (e.Failed = "Failed"),
                      (e.NotApplicable = "NotApplicable"),
                      e
                    );
                  })({}));
                r.SECURITY_PROVIDER_MESSAGE_SEVERITY = { NOT_MALICIOUS: 0, MALICIOUS: 1, NOT_SAFE: 2 };
              };
            };
      },
      { package: "$root$", file: "shared/constants/security-provider.ts" }
    ],
    [
      4764,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.SNAPS_METADATA = r.SNAPS_DERIVATION_PATHS = void 0);
                (r.SNAPS_METADATA = {
                  "npm:@metamask/test-snap-error": { name: "Error Test Snap" },
                  "npm:@metamask/test-snap-confirm": { name: "Confirm Test Snap" },
                  "npm:@metamask/test-snap-dialog": { name: "Dialog Test Snap" },
                  "npm:@metamask/test-snap-bip44": { name: "BIP-44 Test Snap" },
                  "npm:@metamask/test-snap-managestate": { name: "Manage State Test Snap" },
                  "npm:@metamask/test-snap-notification": { name: "Notification Test Snap" },
                  "npm:@metamask/test-snap-bip32": { name: "BIP-32 Test Snap" },
                  "npm:@metamask/test-snap-insights": { name: "Insights Test Snap" },
                  "npm:@metamask/test-snap-rpc": { name: "RPC Test Snap" },
                  "npm:@metamask/test-snap-cronjob": { name: "Cronjob Test Snap" }
                }),
                  (r.SNAPS_DERIVATION_PATHS = [
                    { path: ["m", "44'", "0'"], curve: "ed25519", name: "Test BIP-32 Path (ed25519)" },
                    { path: ["m", "44'", "1'"], curve: "secp256k1", name: "Testnet" },
                    { path: ["m", "44'", "0'"], curve: "secp256k1", name: "Bitcoin Legacy" },
                    { path: ["m", "49'", "0'"], curve: "secp256k1", name: "Bitcoin Nested SegWit" },
                    { path: ["m", "49'", "1'"], curve: "secp256k1", name: "Bitcoin Testnet Nested SegWit" },
                    { path: ["m", "84'", "0'"], curve: "secp256k1", name: "Bitcoin Native SegWit" },
                    { path: ["m", "84'", "1'"], curve: "secp256k1", name: "Bitcoin Testnet Native SegWit" },
                    { path: ["m", "44'", "501'"], curve: "ed25519", name: "Solana" },
                    { path: ["m", "44'", "501'", "0'", "0'"], curve: "ed25519", name: "Solana" },
                    { path: ["m", "44'", "2'"], curve: "secp256k1", name: "Litecoin" },
                    { path: ["m", "44'", "3'"], curve: "secp256k1", name: "Dogecoin" },
                    { path: ["m", "44'", "60'"], curve: "secp256k1", name: "Ethereum" },
                    { path: ["m", "44'", "118'"], curve: "secp256k1", name: "Atom" },
                    { path: ["m", "44'", "145'"], curve: "secp256k1", name: "Bitcoin Cash" },
                    { path: ["m", "44'", "637'"], curve: "ed25519", name: "Aptos" },
                    { path: ["m", "44'", "714'"], curve: "secp256k1", name: "Binance (BNB)" },
                    { path: ["m", "44'", "784'"], curve: "ed25519", name: "Sui" },
                    { path: ["m", "44'", "931'"], curve: "secp256k1", name: "THORChain (RUNE)" },
                    { path: ["m", "44'", "330'"], curve: "secp256k1", name: "Terra (LUNA)" },
                    { path: ["m", "44'", "459'"], curve: "secp256k1", name: "Kava" },
                    { path: ["m", "44'", "529'"], curve: "secp256k1", name: "Secret Network" },
                    { path: ["m", "44'", "397'", "0'"], curve: "ed25519", name: "NEAR Protocol" },
                    { path: ["m", "44'", "1'", "0'"], curve: "ed25519", name: "Testnet" },
                    { path: ["m", "44'", "472'"], curve: "ed25519", name: "Arweave" },
                    { path: ["m", "44'", "12586'"], curve: "secp256k1", name: "Mina" },
                    { path: ["m", "44'", "1729'", "0'", "0'"], curve: "ed25519", name: "Tezos" },
                    { path: ["m", "1789'", "0'"], curve: "ed25519", name: "Vega" }
                  ]);
              };
            };
      },
      { package: "$root$", file: "shared/constants/snaps.ts" }
    ],
    [
      4765,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.ExcludedSnapPermissions = r.ExcludedSnapEndowments = r.EndowmentPermissions = r.DynamicSnapPermissions = void 0);
                (r.EndowmentPermissions = Object.freeze({
                  "endowment:network-access": "endowment:network-access",
                  "endowment:transaction-insight": "endowment:transaction-insight",
                  "endowment:cronjob": "endowment:cronjob",
                  "endowment:ethereum-provider": "endowment:ethereum-provider",
                  "endowment:rpc": "endowment:rpc",
                  "endowment:webassembly": "endowment:webassembly",
                  "endowment:keyring": "endowment:keyring"
                })),
                  (r.ExcludedSnapPermissions = Object.freeze({
                    snap_getLocale: "This permission is still in development and therefore not available.",
                    eth_accounts: "eth_accounts is disabled. For more information please see https://github.com/MetaMask/snaps/issues/990."
                  })),
                  (r.ExcludedSnapEndowments = Object.freeze({
                    "endowment:lifecycle-hooks": "This endowment is experimental and therefore not available.",
                    "endowment:name-lookup": "This permission is still in development and therefore not available."
                  })),
                  (r.DynamicSnapPermissions = Object.freeze(["eth_accounts"]));
              };
            };
      },
      { package: "$root$", file: "shared/constants/snaps/permissions.ts" }
    ],
    [
      4766,
      { "./network": 4759 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.ZKSYNC_ERA_SWAPS_TOKEN_OBJECT =
                    r.ZKSYNC_ERA =
                    r.WMATIC_CONTRACT_ADDRESS =
                    r.WETH_ZKSYNC_ERA_CONTRACT_ADDRESS =
                    r.WETH_OPTIMISM_CONTRACT_ADDRESS =
                    r.WETH_LINEA_CONTRACT_ADDRESS =
                    r.WETH_GOERLI_CONTRACT_ADDRESS =
                    r.WETH_CONTRACT_ADDRESS =
                    r.WETH_ARBITRUM_CONTRACT_ADDRESS =
                    r.WBNB_CONTRACT_ADDRESS =
                    r.WAVAX_CONTRACT_ADDRESS =
                    r.TokenBucketPriority =
                    r.TEST_ETH_SWAPS_TOKEN_OBJECT =
                    r.Slippage =
                    r.SWAP_FAILED_ERROR =
                    r.SWAPS_WRAPPED_TOKENS_ADDRESSES =
                    r.SWAPS_FETCH_ORDER_CONFLICT =
                    r.SWAPS_DEV_API_V2_BASE_URL =
                    r.SWAPS_CLIENT_ID =
                    r.SWAPS_CHAINID_DEFAULT_TOKEN_MAP =
                    r.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP =
                    r.SWAPS_CHAINID_CONTRACT_ADDRESS_MAP =
                    r.SWAPS_API_V2_BASE_URL =
                    r.SLIPPAGE_VERY_HIGH_ERROR =
                    r.SLIPPAGE_NEGATIVE_ERROR =
                    r.SLIPPAGE_LOW_ERROR =
                    r.SLIPPAGE_HIGH_ERROR =
                    r.QUOTES_NOT_AVAILABLE_ERROR =
                    r.QUOTES_EXPIRED_ERROR =
                    r.POLYGON =
                    r.OPTIMISM_SWAPS_TOKEN_OBJECT =
                    r.OPTIMISM =
                    r.OFFLINE_FOR_MAINTENANCE =
                    r.MAX_ALLOWED_SLIPPAGE =
                    r.MATIC_SWAPS_TOKEN_OBJECT =
                    r.LINEA_SWAPS_TOKEN_OBJECT =
                    r.LINEA =
                    r.GOERLI_SWAPS_TOKEN_OBJECT =
                    r.GOERLI =
                    r.GAS_DEV_API_BASE_URL =
                    r.GAS_API_BASE_URL =
                    r.ETH_SWAPS_TOKEN_OBJECT =
                    r.ETHEREUM =
                    r.ERROR_FETCHING_QUOTES =
                    r.DEFAULT_ERC20_APPROVE_GAS =
                    r.CONTRACT_DATA_DISABLED_ERROR =
                    r.BSC =
                    r.BNB_SWAPS_TOKEN_OBJECT =
                    r.AVAX_SWAPS_TOKEN_OBJECT =
                    r.AVALANCHE =
                    r.ARBITRUM_SWAPS_TOKEN_OBJECT =
                    r.ARBITRUM =
                    r.ALLOWED_SMART_TRANSACTIONS_CHAIN_IDS =
                    r.ALLOWED_PROD_SWAPS_CHAIN_IDS =
                    r.ALLOWED_DEV_SWAPS_CHAIN_IDS =
                    r.ALLOWED_CONTRACT_ADDRESSES =
                      void 0);
                var n = e("./network");
                (r.QUOTES_EXPIRED_ERROR = "quotes-expired"),
                  (r.SWAP_FAILED_ERROR = "swap-failed-error"),
                  (r.ERROR_FETCHING_QUOTES = "error-fetching-quotes"),
                  (r.QUOTES_NOT_AVAILABLE_ERROR = "quotes-not-avilable"),
                  (r.CONTRACT_DATA_DISABLED_ERROR = "contract-data-disabled"),
                  (r.OFFLINE_FOR_MAINTENANCE = "offline-for-maintenance"),
                  (r.SWAPS_FETCH_ORDER_CONFLICT = "swaps-fetch-order-conflict"),
                  (r.SLIPPAGE_VERY_HIGH_ERROR = "slippage-very-high"),
                  (r.SLIPPAGE_HIGH_ERROR = "slippage-high"),
                  (r.SLIPPAGE_LOW_ERROR = "slippage-low"),
                  (r.SLIPPAGE_NEGATIVE_ERROR = "slippage-negative"),
                  (r.MAX_ALLOWED_SLIPPAGE = 15);
                const o = "0x0000000000000000000000000000000000000000",
                  i = (r.ETH_SWAPS_TOKEN_OBJECT = {
                    symbol: n.CURRENCY_SYMBOLS.ETH,
                    name: "Ether",
                    address: o,
                    decimals: 18,
                    iconUrl: n.ETH_TOKEN_IMAGE_URL
                  }),
                  s = (r.BNB_SWAPS_TOKEN_OBJECT = {
                    symbol: n.CURRENCY_SYMBOLS.BNB,
                    name: "Binance Coin",
                    address: o,
                    decimals: 18,
                    iconUrl: n.BNB_TOKEN_IMAGE_URL
                  }),
                  a = (r.MATIC_SWAPS_TOKEN_OBJECT = {
                    symbol: n.CURRENCY_SYMBOLS.MATIC,
                    name: "Matic",
                    address: o,
                    decimals: 18,
                    iconUrl: n.MATIC_TOKEN_IMAGE_URL
                  }),
                  c = (r.AVAX_SWAPS_TOKEN_OBJECT = {
                    symbol: n.CURRENCY_SYMBOLS.AVALANCHE,
                    name: "Avalanche",
                    address: o,
                    decimals: 18,
                    iconUrl: n.AVAX_TOKEN_IMAGE_URL
                  }),
                  u = (r.TEST_ETH_SWAPS_TOKEN_OBJECT = {
                    symbol: n.CURRENCY_SYMBOLS.TEST_ETH,
                    name: "Test Ether",
                    address: o,
                    decimals: 18,
                    iconUrl: n.TEST_ETH_TOKEN_IMAGE_URL
                  }),
                  l = (r.GOERLI_SWAPS_TOKEN_OBJECT = {
                    symbol: n.CURRENCY_SYMBOLS.ETH,
                    name: "Ether",
                    address: o,
                    decimals: 18,
                    iconUrl: n.TEST_ETH_TOKEN_IMAGE_URL
                  }),
                  d = (r.ARBITRUM_SWAPS_TOKEN_OBJECT = { ...i }),
                  p = (r.OPTIMISM_SWAPS_TOKEN_OBJECT = { ...i }),
                  h = (r.ZKSYNC_ERA_SWAPS_TOKEN_OBJECT = { ...i }),
                  f = (r.LINEA_SWAPS_TOKEN_OBJECT = { ...i }),
                  g = ((r.DEFAULT_ERC20_APPROVE_GAS = "0x1d4c0"), "0x881d40237659c251811cec9c364ef91dc08d300c"),
                  m = (r.WETH_CONTRACT_ADDRESS = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
                  y = (r.WETH_GOERLI_CONTRACT_ADDRESS = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"),
                  _ = (r.WBNB_CONTRACT_ADDRESS = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"),
                  v = (r.WMATIC_CONTRACT_ADDRESS = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"),
                  T = (r.WAVAX_CONTRACT_ADDRESS = "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"),
                  E = (r.WETH_OPTIMISM_CONTRACT_ADDRESS = "0x4200000000000000000000000000000000000006"),
                  b = (r.WETH_ARBITRUM_CONTRACT_ADDRESS = "0x82af49447d8a07e3bd95bd0d56f35241523fbab1"),
                  w = (r.WETH_ZKSYNC_ERA_CONTRACT_ADDRESS = "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"),
                  A = (r.WETH_LINEA_CONTRACT_ADDRESS = "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f"),
                  N = "0x539",
                  I =
                    ((r.SWAPS_API_V2_BASE_URL = "https://swap.metaswap.codefi.network"),
                    (r.SWAPS_DEV_API_V2_BASE_URL = "https://swap.dev-api.cx.metamask.io"),
                    (r.GAS_API_BASE_URL = "https://gas-api.metaswap.codefi.network"),
                    (r.GAS_DEV_API_BASE_URL = "https://gas.uat-api.cx.metamask.io"),
                    (r.ALLOWED_PROD_SWAPS_CHAIN_IDS = [
                      n.CHAIN_IDS.MAINNET,
                      N,
                      n.CHAIN_IDS.BSC,
                      n.CHAIN_IDS.POLYGON,
                      n.CHAIN_IDS.AVALANCHE,
                      n.CHAIN_IDS.OPTIMISM,
                      n.CHAIN_IDS.ARBITRUM,
                      n.CHAIN_IDS.ZKSYNC_ERA,
                      n.CHAIN_IDS.LINEA_MAINNET
                    ])),
                  O =
                    ((r.ALLOWED_DEV_SWAPS_CHAIN_IDS = [...I, n.CHAIN_IDS.GOERLI]),
                    (r.ALLOWED_SMART_TRANSACTIONS_CHAIN_IDS = [n.CHAIN_IDS.MAINNET, n.CHAIN_IDS.GOERLI]),
                    (r.SWAPS_CHAINID_CONTRACT_ADDRESS_MAP = {
                      [n.CHAIN_IDS.MAINNET]: "0x881d40237659c251811cec9c364ef91dc08d300c",
                      [N]: g,
                      [n.CHAIN_IDS.BSC]: "0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31",
                      [n.CHAIN_IDS.POLYGON]: "0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31",
                      [n.CHAIN_IDS.GOERLI]: g,
                      [n.CHAIN_IDS.AVALANCHE]: "0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31",
                      [n.CHAIN_IDS.OPTIMISM]: "0x9dda6ef3d919c9bc8885d5560999a3640431e8e6",
                      [n.CHAIN_IDS.ARBITRUM]: "0x9dda6ef3d919c9bc8885d5560999a3640431e8e6",
                      [n.CHAIN_IDS.ZKSYNC_ERA]: "0xf504c1fe13d14df615e66dcd0abf39e60c697f34",
                      [n.CHAIN_IDS.LINEA_MAINNET]: "0x9dda6ef3d919c9bc8885d5560999a3640431e8e6"
                    })),
                  R = (r.SWAPS_WRAPPED_TOKENS_ADDRESSES = {
                    [n.CHAIN_IDS.MAINNET]: m,
                    [N]: m,
                    [n.CHAIN_IDS.BSC]: _,
                    [n.CHAIN_IDS.POLYGON]: v,
                    [n.CHAIN_IDS.GOERLI]: y,
                    [n.CHAIN_IDS.AVALANCHE]: T,
                    [n.CHAIN_IDS.OPTIMISM]: E,
                    [n.CHAIN_IDS.ARBITRUM]: b,
                    [n.CHAIN_IDS.ZKSYNC_ERA]: w,
                    [n.CHAIN_IDS.LINEA_MAINNET]: A
                  });
                (r.ALLOWED_CONTRACT_ADDRESSES = {
                  [n.CHAIN_IDS.MAINNET]: [O[n.CHAIN_IDS.MAINNET], R[n.CHAIN_IDS.MAINNET]],
                  [N]: [O[N], R[N]],
                  [n.CHAIN_IDS.GOERLI]: [O[n.CHAIN_IDS.GOERLI], R[n.CHAIN_IDS.GOERLI]],
                  [n.CHAIN_IDS.BSC]: [O[n.CHAIN_IDS.BSC], R[n.CHAIN_IDS.BSC]],
                  [n.CHAIN_IDS.POLYGON]: [O[n.CHAIN_IDS.POLYGON], R[n.CHAIN_IDS.POLYGON]],
                  [n.CHAIN_IDS.AVALANCHE]: [O[n.CHAIN_IDS.AVALANCHE], R[n.CHAIN_IDS.AVALANCHE]],
                  [n.CHAIN_IDS.OPTIMISM]: [O[n.CHAIN_IDS.OPTIMISM], R[n.CHAIN_IDS.OPTIMISM]],
                  [n.CHAIN_IDS.ARBITRUM]: [O[n.CHAIN_IDS.ARBITRUM], R[n.CHAIN_IDS.ARBITRUM]],
                  [n.CHAIN_IDS.ZKSYNC_ERA]: [O[n.CHAIN_IDS.ZKSYNC_ERA], R[n.CHAIN_IDS.ZKSYNC_ERA]],
                  [n.CHAIN_IDS.LINEA_MAINNET]: [O[n.CHAIN_IDS.LINEA_MAINNET], R[n.CHAIN_IDS.LINEA_MAINNET]]
                }),
                  (r.SWAPS_CHAINID_DEFAULT_TOKEN_MAP = {
                    [n.CHAIN_IDS.MAINNET]: i,
                    [N]: u,
                    [n.CHAIN_IDS.BSC]: s,
                    [n.CHAIN_IDS.POLYGON]: a,
                    [n.CHAIN_IDS.GOERLI]: l,
                    [n.CHAIN_IDS.AVALANCHE]: c,
                    [n.CHAIN_IDS.OPTIMISM]: p,
                    [n.CHAIN_IDS.ARBITRUM]: d,
                    [n.CHAIN_IDS.ZKSYNC_ERA]: h,
                    [n.CHAIN_IDS.LINEA_MAINNET]: f
                  }),
                  (r.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP = {
                    [n.CHAIN_IDS.BSC]: "https://bscscan.com/",
                    [n.CHAIN_IDS.MAINNET]: "https://etherscan.io/",
                    [n.CHAIN_IDS.POLYGON]: "https://polygonscan.com/",
                    [n.CHAIN_IDS.GOERLI]: "https://goerli.etherscan.io/",
                    [n.CHAIN_IDS.AVALANCHE]: "https://snowtrace.io/",
                    [n.CHAIN_IDS.OPTIMISM]: "https://optimistic.etherscan.io/",
                    [n.CHAIN_IDS.ARBITRUM]: "https://arbiscan.io/",
                    [n.CHAIN_IDS.ZKSYNC_ERA]: "https://explorer.zksync.io/",
                    [n.CHAIN_IDS.LINEA_MAINNET]: "https://lineascan.build/"
                  }),
                  (r.ETHEREUM = "ethereum"),
                  (r.POLYGON = "polygon"),
                  (r.BSC = "bsc"),
                  (r.GOERLI = "goerli"),
                  (r.AVALANCHE = "avalanche"),
                  (r.OPTIMISM = "optimism"),
                  (r.ARBITRUM = "arbitrum"),
                  (r.ZKSYNC_ERA = "zksync"),
                  (r.LINEA = "linea"),
                  (r.SWAPS_CLIENT_ID = "extension");
                (r.TokenBucketPriority = (function (e) {
                  return (e.owned = "owned"), (e.top = "top"), e;
                })({})),
                  (r.Slippage = (function (e) {
                    return (e[(e.default = 2)] = "default"), (e[(e.high = 3)] = "high"), e;
                  })({}));
              };
            };
      },
      { package: "$root$", file: "shared/constants/swaps.ts" }
    ],
    [
      4768,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.SECOND = r.MINUTE = r.MILLISECOND = r.HOUR = r.DAY = void 0);
                const n = (r.MILLISECOND = 1),
                  o = (r.SECOND = 1e3 * n),
                  i = (r.MINUTE = 60 * o),
                  s = (r.HOUR = 60 * i);
                r.DAY = 24 * s;
              };
            };
      },
      { package: "$root$", file: "shared/constants/time.ts" }
    ],
    [
      4769,
      { "@metamask/contract-metadata": 1122, "bignumber.js": 2804 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.TOKEN_API_METASWAP_CODEFI_URL =
                    r.STATIC_MAINNET_TOKEN_LIST =
                    r.NUM_W_OPT_DECIMAL_COMMA_OR_DOT_REGEX =
                    r.MAX_TOKEN_ALLOWANCE_AMOUNT =
                    r.LISTED_CONTRACT_ADDRESSES =
                    r.DECIMAL_REGEX =
                      void 0);
                var n = i(e("@metamask/contract-metadata")),
                  o = i(e("bignumber.js"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                (r.LISTED_CONTRACT_ADDRESSES = Object.keys(n.default).map((e) => e.toLowerCase())),
                  (r.STATIC_MAINNET_TOKEN_LIST = Object.keys(n.default).reduce((e, t) => {
                    const { logo: r, ...o } = n.default[t];
                    return {
                      ...e,
                      [t.toLowerCase()]: { ...o, address: t.toLowerCase(), iconUrl: `images/contract/${r}`, aggregators: [] }
                    };
                  }, {})),
                  (r.TOKEN_API_METASWAP_CODEFI_URL = "https://token-api.metaswap.codefi.network/tokens/"),
                  (r.MAX_TOKEN_ALLOWANCE_AMOUNT = new o.default(2).pow(256).minus(1).toString(10)),
                  (r.NUM_W_OPT_DECIMAL_COMMA_OR_DOT_REGEX = /^[0-9]{1,}([,.][0-9]{1,})?$/u),
                  (r.DECIMAL_REGEX = /\.(\d*)/u);
              };
            };
      },
      { package: "$root$", file: "shared/constants/tokens.js" }
    ],
    [
      477,
      { "./_version": 476 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.Logger = r.ErrorCode = r.LogLevel = void 0);
                var n = !1,
                  o = !1,
                  i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
                  s = i.default,
                  a = e("./_version"),
                  c = null;
                var u,
                  l,
                  d = (function () {
                    try {
                      var e = [];
                      if (
                        (["NFD", "NFC", "NFKD", "NFKC"].forEach(function (t) {
                          try {
                            if ("test" !== "test".normalize(t)) throw new Error("bad normalize");
                          } catch (r) {
                            e.push(t);
                          }
                        }),
                        e.length)
                      )
                        throw new Error("missing " + e.join(", "));
                      if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
                        throw new Error("broken implementation");
                    } catch (e) {
                      return e.message;
                    }
                    return null;
                  })();
                !(function (e) {
                  (e.DEBUG = "DEBUG"), (e.INFO = "INFO"), (e.WARNING = "WARNING"), (e.ERROR = "ERROR"), (e.OFF = "OFF");
                })((u = r.LogLevel || (r.LogLevel = {}))),
                  (function (e) {
                    (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
                      (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
                      (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
                      (e.NETWORK_ERROR = "NETWORK_ERROR"),
                      (e.SERVER_ERROR = "SERVER_ERROR"),
                      (e.TIMEOUT = "TIMEOUT"),
                      (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
                      (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
                      (e.MISSING_NEW = "MISSING_NEW"),
                      (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
                      (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
                      (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
                      (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
                      (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
                      (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
                      (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
                      (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
                      (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
                      (e.ACTION_REJECTED = "ACTION_REJECTED");
                  })((l = r.ErrorCode || (r.ErrorCode = {})));
                var p = "0123456789abcdef",
                  h = (function () {
                    function e(e) {
                      Object.defineProperty(this, "version", { enumerable: !0, value: e, writable: !1 });
                    }
                    return (
                      (e.prototype._log = function (e, t) {
                        var r = e.toLowerCase();
                        null == i[r] && this.throwArgumentError("invalid log level name", "logLevel", e),
                          s > i[r] || console.log.apply(console, t);
                      }),
                      (e.prototype.debug = function () {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        this._log(e.levels.DEBUG, t);
                      }),
                      (e.prototype.info = function () {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        this._log(e.levels.INFO, t);
                      }),
                      (e.prototype.warn = function () {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        this._log(e.levels.WARNING, t);
                      }),
                      (e.prototype.makeError = function (t, r, n) {
                        if (o) return this.makeError("censored error", r, {});
                        r || (r = e.errors.UNKNOWN_ERROR), n || (n = {});
                        var i = [];
                        Object.keys(n).forEach(function (e) {
                          var t = n[e];
                          try {
                            if (t instanceof Uint8Array) {
                              for (var r = "", o = 0; o < t.length; o++) (r += p[t[o] >> 4]), (r += p[15 & t[o]]);
                              i.push(e + "=Uint8Array(0x" + r + ")");
                            } else i.push(e + "=" + JSON.stringify(t));
                          } catch (t) {
                            i.push(e + "=" + JSON.stringify(n[e].toString()));
                          }
                        }),
                          i.push("code=" + r),
                          i.push("version=" + this.version);
                        var s = t,
                          a = "";
                        switch (r) {
                          case l.NUMERIC_FAULT:
                            a = "NUMERIC_FAULT";
                            var c = t;
                            switch (c) {
                              case "overflow":
                              case "underflow":
                              case "division-by-zero":
                                a += "-" + c;
                                break;
                              case "negative-power":
                              case "negative-width":
                                a += "-unsupported";
                                break;
                              case "unbound-bitwise-result":
                                a += "-unbound-result";
                            }
                            break;
                          case l.CALL_EXCEPTION:
                          case l.INSUFFICIENT_FUNDS:
                          case l.MISSING_NEW:
                          case l.NONCE_EXPIRED:
                          case l.REPLACEMENT_UNDERPRICED:
                          case l.TRANSACTION_REPLACED:
                          case l.UNPREDICTABLE_GAS_LIMIT:
                            a = r;
                        }
                        a && (t += " [ See: https://links.ethers.org/v5-errors-" + a + " ]"), i.length && (t += " (" + i.join(", ") + ")");
                        var u = new Error(t);
                        return (
                          (u.reason = s),
                          (u.code = r),
                          Object.keys(n).forEach(function (e) {
                            u[e] = n[e];
                          }),
                          u
                        );
                      }),
                      (e.prototype.throwError = function (e, t, r) {
                        throw this.makeError(e, t, r);
                      }),
                      (e.prototype.throwArgumentError = function (t, r, n) {
                        return this.throwError(t, e.errors.INVALID_ARGUMENT, { argument: r, value: n });
                      }),
                      (e.prototype.assert = function (e, t, r, n) {
                        e || this.throwError(t, r, n);
                      }),
                      (e.prototype.assertArgument = function (e, t, r, n) {
                        e || this.throwArgumentError(t, r, n);
                      }),
                      (e.prototype.checkNormalize = function (t) {
                        null == t && (t = "platform missing String.prototype.normalize"),
                          d &&
                            this.throwError("platform missing String.prototype.normalize", e.errors.UNSUPPORTED_OPERATION, {
                              operation: "String.prototype.normalize",
                              form: d
                            });
                      }),
                      (e.prototype.checkSafeUint53 = function (t, r) {
                        "number" == typeof t &&
                          (null == r && (r = "value not safe"),
                          (t < 0 || t >= 9007199254740991) &&
                            this.throwError(r, e.errors.NUMERIC_FAULT, {
                              operation: "checkSafeInteger",
                              fault: "out-of-safe-range",
                              value: t
                            }),
                          t % 1 &&
                            this.throwError(r, e.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t }));
                      }),
                      (e.prototype.checkArgumentCount = function (t, r, n) {
                        (n = n ? ": " + n : ""),
                          t < r && this.throwError("missing argument" + n, e.errors.MISSING_ARGUMENT, { count: t, expectedCount: r }),
                          t > r && this.throwError("too many arguments" + n, e.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: r });
                      }),
                      (e.prototype.checkNew = function (t, r) {
                        (t !== Object && null != t) || this.throwError("missing new", e.errors.MISSING_NEW, { name: r.name });
                      }),
                      (e.prototype.checkAbstract = function (t, r) {
                        t === r
                          ? this.throwError(
                              "cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class",
                              e.errors.UNSUPPORTED_OPERATION,
                              { name: t.name, operation: "new" }
                            )
                          : (t !== Object && null != t) || this.throwError("missing new", e.errors.MISSING_NEW, { name: r.name });
                      }),
                      (e.globalLogger = function () {
                        return c || (c = new e(a.version)), c;
                      }),
                      (e.setCensorship = function (t, r) {
                        if (
                          (!t &&
                            r &&
                            this.globalLogger().throwError("cannot permanently disable censorship", e.errors.UNSUPPORTED_OPERATION, {
                              operation: "setCensorship"
                            }),
                          n)
                        ) {
                          if (!t) return;
                          this.globalLogger().throwError("error censorship permanent", e.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                          });
                        }
                        (o = !!t), (n = !!r);
                      }),
                      (e.setLogLevel = function (t) {
                        var r = i[t.toLowerCase()];
                        null != r ? (s = r) : e.globalLogger().warn("invalid log level - " + t);
                      }),
                      (e.from = function (t) {
                        return new e(t);
                      }),
                      (e.errors = l),
                      (e.levels = u),
                      e
                    );
                  })();
                r.Logger = h;
              };
            };
      },
      { package: "@ethersproject/abi>@ethersproject/logger", file: "node_modules/@ethersproject/logger/lib/index.js" }
    ],
    [
      4770,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.TransactionType =
                    r.TransactionStatus =
                    r.TransactionMetaMetricsEvent =
                    r.TransactionGroupStatus =
                    r.TransactionGroupCategory =
                    r.TransactionEnvelopeType =
                    r.TransactionApprovalAmountType =
                    r.TokenStandard =
                    r.SmartTransactionStatus =
                    r.IN_PROGRESS_TRANSACTION_STATUSES =
                    r.AssetType =
                    r.AnonymousTransactionMetaMetricsEvent =
                      void 0);
                (r.TransactionType = (function (e) {
                  return (
                    (e.cancel = "cancel"),
                    (e.contractInteraction = "contractInteraction"),
                    (e.deployContract = "contractDeployment"),
                    (e.ethDecrypt = "eth_decrypt"),
                    (e.ethGetEncryptionPublicKey = "eth_getEncryptionPublicKey"),
                    (e.incoming = "incoming"),
                    (e.personalSign = "personal_sign"),
                    (e.retry = "retry"),
                    (e.sign = "eth_sign"),
                    (e.signTypedData = "eth_signTypedData"),
                    (e.simpleSend = "simpleSend"),
                    (e.smart = "smart"),
                    (e.swap = "swap"),
                    (e.swapApproval = "swapApproval"),
                    (e.tokenMethodApprove = "approve"),
                    (e.tokenMethodSafeTransferFrom = "safetransferfrom"),
                    (e.tokenMethodTransfer = "transfer"),
                    (e.tokenMethodTransferFrom = "transferfrom"),
                    (e.tokenMethodSetApprovalForAll = "setapprovalforall"),
                    e
                  );
                })({})),
                  (r.TransactionEnvelopeType = (function (e) {
                    return (e.legacy = "0x0"), (e.accessList = "0x1"), (e.feeMarket = "0x2"), e;
                  })({}));
                let n = (r.TransactionStatus = (function (e) {
                  return (
                    (e.unapproved = "unapproved"),
                    (e.approved = "approved"),
                    (e.rejected = "rejected"),
                    (e.signed = "signed"),
                    (e.submitted = "submitted"),
                    (e.failed = "failed"),
                    (e.dropped = "dropped"),
                    (e.confirmed = "confirmed"),
                    (e.pending = "pending"),
                    e
                  );
                })({}));
                r.IN_PROGRESS_TRANSACTION_STATUSES = [n.unapproved, n.approved, n.signed, n.submitted, n.pending];
                (r.TransactionGroupStatus = (function (e) {
                  return (e.cancelled = "cancelled"), (e.pending = "pending"), e;
                })({})),
                  (r.SmartTransactionStatus = (function (e) {
                    return (e.cancelled = "cancelled"), (e.pending = "pending"), (e.success = "success"), e;
                  })({})),
                  (r.TransactionApprovalAmountType = (function (e) {
                    return (e.custom = "custom"), (e.revoke = "revoke"), (e.dappProposed = "dapp_proposed"), e;
                  })({})),
                  (r.TransactionGroupCategory = (function (e) {
                    return (
                      (e.approval = "approval"),
                      (e.interaction = "interaction"),
                      (e.receive = "receive"),
                      (e.send = "send"),
                      (e.signatureRequest = "signature-request"),
                      (e.swap = "swap"),
                      e
                    );
                  })({})),
                  (r.TransactionMetaMetricsEvent = (function (e) {
                    return (
                      (e.added = "Transaction Added"),
                      (e.approved = "Transaction Approved"),
                      (e.finalized = "Transaction Finalized"),
                      (e.rejected = "Transaction Rejected"),
                      (e.submitted = "Transaction Submitted"),
                      e
                    );
                  })({})),
                  (r.AnonymousTransactionMetaMetricsEvent = (function (e) {
                    return (
                      (e.added = "Transaction Added Anon"),
                      (e.approved = "Transaction Approved Anon"),
                      (e.finalized = "Transaction Finalized Anon"),
                      (e.rejected = "Transaction Rejected Anon"),
                      (e.submitted = "Transaction Submitted Anon"),
                      e
                    );
                  })({})),
                  (r.AssetType = (function (e) {
                    return (e.native = "NATIVE"), (e.token = "TOKEN"), (e.NFT = "NFT"), (e.unknown = "UNKNOWN"), e;
                  })({})),
                  (r.TokenStandard = (function (e) {
                    return (e.ERC20 = "ERC20"), (e.ERC721 = "ERC721"), (e.ERC1155 = "ERC1155"), (e.none = "NONE"), e;
                  })({}));
              };
            };
      },
      { package: "$root$", file: "shared/constants/transaction.ts" }
    ],
    [
      4772,
      { "../constants/time": 4768, "../modules/fetch-with-timeout": 4786, "./storage-helpers": 4774 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n,
                  o = e("../constants/time"),
                  i = (n = e("../modules/fetch-with-timeout")) && n.__esModule ? n : { default: n },
                  s = e("./storage-helpers");
                r.default = async ({
                  url: e,
                  fetchOptions: t = {},
                  cacheOptions: { cacheRefreshTime: r = 6 * o.MINUTE, timeout: n = 30 * o.SECOND } = {},
                  functionName: a = ""
                }) => {
                  if (t.body || (t.method && "GET" !== t.method)) throw new Error("fetchWithCache only supports GET requests");
                  if (
                    (t.headers instanceof window.Headers || (t.headers = new window.Headers(t.headers)),
                    t.headers.has("Content-Type") && "application/json" !== t.headers.get("Content-Type"))
                  )
                    throw new Error("fetchWithCache only supports JSON responses");
                  const c = Date.now(),
                    u = `cachedFetch:${e}`,
                    { cachedResponse: l, cachedTime: d } = (await (0, s.getStorageItem)(u)) || {};
                  if (l && c - d < r) return l;
                  t.headers.set("Content-Type", "application/json");
                  const p = (0, i.default)(n),
                    h = await p(e, { referrerPolicy: "no-referrer-when-downgrade", body: null, method: "GET", mode: "cors", ...t });
                  if (!h.ok) throw new Error(`Fetch with cache failed within function ${a} with status'${h.status}': '${h.statusText}'`);
                  const f = await h.json(),
                    g = { cachedResponse: f, cachedTime: c };
                  return await (0, s.setStorageItem)(u, g), f;
                };
              };
            };
      },
      { package: "$root$", file: "shared/lib/fetch-with-cache.ts" }
    ],
    [
      4773,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.getTokenValueParam = function (e = {}) {
                    var t;
                    return null == e || null === (t = e.args) || void 0 === t || null === (t = t._value) || void 0 === t
                      ? void 0
                      : t.toString();
                  });
              };
            };
      },
      { package: "$root$", file: "shared/lib/metamask-controller-utils.js" }
    ],
    [
      4774,
      { localforage: 3909 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.getStorageItem = async function (e) {
                    try {
                      const t = await o.default.getItem(e);
                      return null === t ? undefined : JSON.parse(t);
                    } catch (e) {
                      return undefined;
                    }
                  }),
                  (r.setStorageItem = async function (e, t) {
                    try {
                      const r = JSON.stringify(t);
                      await o.default.setItem(e, r);
                    } catch (e) {
                      console.warn(e);
                    }
                  });
                var n,
                  o = (n = e("localforage")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "shared/lib/storage-helpers.js" }
    ],
    [
      4775,
      {
        "../../app/scripts/lib/util": 91,
        "../constants/network": 4759,
        "../constants/swaps": 4766,
        "../constants/time": 4768,
        "../modules/conversion.utils": 4784,
        "../modules/hexstring-utils": 4788,
        "../modules/string-utils": 4797,
        "./fetch-with-cache": 4772,
        "bignumber.js": 2804,
        loglevel: 4083
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.QUOTE_VALIDATORS = void 0),
                  (r.addHexPrefixToObjectValues = A),
                  (r.calcTokenValue = b),
                  (r.constructTxParams = N),
                  (r.fetchTradesInfo = async function (
                    { slippage: e, sourceToken: t, sourceDecimals: r, destinationToken: n, value: o, fromAddress: i, exchangeList: s },
                    { chainId: c }
                  ) {
                    const u = {
                      destinationToken: n,
                      sourceToken: t,
                      sourceAmount: b(o, r).toString(10),
                      slippage: e,
                      timeout: 10 * a.SECOND,
                      walletAddress: i
                    };
                    s && (u.exchangeList = s);
                    w(c, t, n) && (u.enableDirectWrapping = !0);
                    const l = new URLSearchParams(u).toString(),
                      h = `${E("trade", c)}${l}`,
                      f = await (0, p.default)({
                        url: h,
                        fetchOptions: { method: "GET", headers: g },
                        cacheOptions: { cacheRefreshTime: 0, timeout: 15 * a.SECOND },
                        functionName: "fetchTradesInfo"
                      });
                    return f.reduce((t, r) => {
                      if (r.trade && !r.error && v(T, r, h)) {
                        const n = N({
                          to: r.trade.to,
                          from: r.trade.from,
                          data: r.trade.data,
                          amount: (0, d.decimalToHex)(r.trade.value),
                          gas: (0, d.decimalToHex)(r.maxGas)
                        });
                        let { approvalNeeded: o } = r;
                        return o && (o = N({ ...o })), { ...t, [r.aggregator]: { ...r, slippage: e, trade: n, approvalNeeded: o } };
                      }
                      return t;
                    }, {});
                  }),
                  (r.validHex = r.truthyString = r.truthyDigitString = r.shouldEnableDirectWrapping = r.getBaseApi = void 0),
                  (r.validateData = v);
                var n = h(e("bignumber.js")),
                  o = h(e("loglevel")),
                  i = e("../constants/network"),
                  s = e("../constants/swaps"),
                  a = e("../constants/time"),
                  c = e("../modules/hexstring-utils"),
                  u = e("../modules/string-utils"),
                  l = e("../../app/scripts/lib/util"),
                  d = e("../modules/conversion.utils"),
                  p = h(e("./fetch-with-cache"));
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const f = [i.CHAIN_IDS.GOERLI, i.CHAIN_IDS.LOCALHOST],
                  g = { "X-Client-Id": s.SWAPS_CLIENT_ID },
                  m = (e) => Boolean(null == e ? void 0 : e.match(/^0x[a-f0-9]+$/u));
                r.validHex = m;
                const y = (e) => Boolean(null == e ? void 0 : e.length);
                r.truthyString = y;
                const _ = (e) => y(e) && Boolean(e.match(/^\d+$/u));
                function v(e, t, r, n = !0) {
                  return e.every(({ property: e, type: i, validator: s }) => {
                    const a = i.split("|").some((r) => typeof t[e] === r) && (!s || s(t[e]));
                    return (
                      !a &&
                        n &&
                        o.default.error(`response to GET ${r} invalid for property ${e}; value was:`, t[e], "| type was: ", typeof t[e]),
                      a
                    );
                  });
                }
                r.truthyDigitString = _;
                const T = (r.QUOTE_VALIDATORS = [
                    {
                      property: "trade",
                      type: "object",
                      validator: (e) =>
                        e &&
                        m(e.data) &&
                        (0, c.isValidHexAddress)(e.to, { allowNonPrefixed: !1 }) &&
                        (0, c.isValidHexAddress)(e.from, { allowNonPrefixed: !1 }) &&
                        y(e.value)
                    },
                    {
                      property: "approvalNeeded",
                      type: "object",
                      validator: (e) =>
                        null === e ||
                        (e &&
                          m(e.data) &&
                          (0, c.isValidHexAddress)(e.to, { allowNonPrefixed: !1 }) &&
                          (0, c.isValidHexAddress)(e.from, { allowNonPrefixed: !1 }))
                    },
                    { property: "sourceAmount", type: "string", validator: _ },
                    { property: "destinationAmount", type: "string", validator: _ },
                    { property: "sourceToken", type: "string", validator: (e) => (0, c.isValidHexAddress)(e, { allowNonPrefixed: !1 }) },
                    {
                      property: "destinationToken",
                      type: "string",
                      validator: (e) => (0, c.isValidHexAddress)(e, { allowNonPrefixed: !1 })
                    },
                    { property: "aggregator", type: "string", validator: y },
                    { property: "aggType", type: "string", validator: y },
                    { property: "error", type: "object", validator: (e) => null === e || "object" == typeof e },
                    { property: "averageGas", type: "number" },
                    { property: "maxGas", type: "number" },
                    { property: "gasEstimate", type: "number|undefined", validator: (e) => e === undefined || e > 0 },
                    { property: "fee", type: "number" }
                  ]),
                  E = function (e, t) {
                    const r = f.includes(t) ? i.CHAIN_IDS.MAINNET : t,
                      n = ((e, t) => {
                        const r = s.SWAPS_API_V2_BASE_URL,
                          n = s.GAS_API_BASE_URL;
                        if (["refreshTime"].includes(e)) return r;
                        const o = t && parseInt(t, 16);
                        return ["gasPrices"].includes(e) ? `${n}/networks/${o}` : `${r}/networks/${o}`;
                      })(e, r);
                    if (!n) throw new Error(`Swaps API calls are disabled for chainId: ${r}`);
                    switch (e) {
                      case "trade":
                        return `${n}/trades?`;
                      case "tokens":
                        return `${n}/tokens?includeBlockedTokens=true`;
                      case "token":
                        return `${n}/token`;
                      case "topAssets":
                        return `${n}/topAssets`;
                      case "aggregatorMetadata":
                        return `${n}/aggregatorMetadata`;
                      case "gasPrices":
                        return `${n}/gasPrices`;
                      case "network":
                        return n;
                      default:
                        throw new Error("getBaseApi requires an api call type");
                    }
                  };
                function b(e, t) {
                  const r = Math.pow(10, Number(t || 0));
                  return new n.default(String(e)).times(r);
                }
                r.getBaseApi = E;
                const w = (e, t, r) => {
                  var n;
                  if (!t || !r) return !1;
                  const o = s.SWAPS_WRAPPED_TOKENS_ADDRESSES[e],
                    i = null === (n = s.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[e]) || void 0 === n ? void 0 : n.address;
                  return (
                    ((0, u.isEqualCaseInsensitive)(t, o) && (0, u.isEqualCaseInsensitive)(r, i)) ||
                    ((0, u.isEqualCaseInsensitive)(t, i) && (0, u.isEqualCaseInsensitive)(r, o))
                  );
                };
                function A(e) {
                  return Object.keys(e).reduce((t, r) => ({ ...t, [r]: (0, l.addHexPrefix)(e[r]) }), {});
                }
                function N({ sendToken: e, data: t, to: r, amount: n, from: o, gas: i, gasPrice: s }) {
                  const a = { data: t, from: o, value: "0", gas: i, gasPrice: s };
                  return e || ((a.value = n), (a.to = r)), A(a);
                }
                r.shouldEnableDirectWrapping = w;
              };
            };
      },
      { package: "$root$", file: "shared/lib/swaps-utils.js" }
    ],
    [
      4777,
      { "@ethersproject/contracts": 455, "@ethersproject/providers": 494, "@metamask/metamask-eth-abis": 1593 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.fetchTokenBalance = async function (e, t, r) {
                    const s = new i.Web3Provider(r),
                      a = new o.Contract(e, n.abiERC20, s),
                      c = a ? a.balanceOf(t) : Promise.resolve();
                    return await c;
                  }),
                  (r.getTokenIdParam = function (e = {}) {
                    var t, r;
                    return (
                      (null == e || null === (t = e.args) || void 0 === t || null === (t = t._tokenId) || void 0 === t
                        ? void 0
                        : t.toString()) ??
                      (null == e || null === (r = e.args) || void 0 === r || null === (r = r.id) || void 0 === r ? void 0 : r.toString())
                    );
                  });
                var n = e("@metamask/metamask-eth-abis"),
                  o = e("@ethersproject/contracts"),
                  i = e("@ethersproject/providers");
              };
            };
      },
      { package: "$root$", file: "shared/lib/token-util.ts" }
    ],
    [
      4778,
      {
        "../constants/common": 4751,
        "../constants/transaction": 4770,
        "../modules/Numeric": 4780,
        "../modules/swaps.utils": 4798,
        "bignumber.js": 2804
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.TRANSACTION_NO_CONTRACT_ERROR_KEY =
                    r.TRANSACTION_ENVELOPE_TYPE_NAMES =
                    r.TOKEN_TRANSFER_LOG_TOPIC_HASH =
                    r.TEN_SECONDS_IN_MILLISECONDS =
                      void 0),
                  (r.calcGasTotal = l),
                  (r.calcTokenAmount = p),
                  (r.getSwapsTokensReceivedFromTxMeta = function (e, t, r, n, o, h, f) {
                    var g;
                    const m = null == t ? void 0 : t.txReceipt,
                      y =
                        (null == t || null === (g = t.txReceipt) || void 0 === g ? void 0 : g.type) === s.TransactionEnvelopeType.feeMarket;
                    if ((0, c.isSwapsDefaultTokenSymbol)(e, f)) {
                      if (!(m && t && t.postTxBalance && t.preTxBalance)) return null;
                      if (t.swapMetaData && t.preTxBalance === t.postTxBalance) return t.swapMetaData.token_to_amount;
                      let e = new a.Numeric("0x0", 16);
                      h &&
                        h.txReceipt &&
                        (e = new a.Numeric(l(h.txReceipt.gasUsed, y ? h.txReceipt.effectiveGasPrice : h.txParams.gasPrice), 16));
                      const r = l(m.gasUsed, y ? m.effectiveGasPrice : t.txParams.gasPrice),
                        n = new a.Numeric(r, 16).add(e),
                        o = new a.Numeric(t.preTxBalance, 16).minus(n);
                      return new a.Numeric(t.postTxBalance, 16, i.EtherDenomination.WEI)
                        .minus(o)
                        .toDenomination(i.EtherDenomination.ETH)
                        .toBase(10)
                        .round(6)
                        .toString();
                    }
                    const _ = null == m ? void 0 : m.logs;
                    if (_ && "0x0" !== (null == m ? void 0 : m.status)) {
                      const e = _.find((e) => {
                        const t = e.topics && e.topics[0] === u,
                          o = e.address === r,
                          i = e.topics && e.topics[2] && e.topics[2].match(n.slice(2));
                        return t && o && i;
                      });
                      return e ? d(p(e.data, o).toString(10), 6) : "";
                    }
                    return null;
                  }),
                  (r.toPrecisionWithoutTrailingZeros = d);
                var n,
                  o = (n = e("bignumber.js")) && n.__esModule ? n : { default: n },
                  i = e("../constants/common"),
                  s = e("../constants/transaction"),
                  a = e("../modules/Numeric"),
                  c = e("../modules/swaps.utils");
                const u = (r.TOKEN_TRANSFER_LOG_TOPIC_HASH = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef");
                (r.TRANSACTION_NO_CONTRACT_ERROR_KEY = "transactionErrorNoContract"), (r.TEN_SECONDS_IN_MILLISECONDS = 1e4);
                function l(e = "0", t = "0") {
                  return new a.Numeric(e, 16).times(new a.Numeric(t, 16)).toString();
                }
                function d(e, t) {
                  return new o.default(e).toPrecision(t).replace(/(\.[0-9]*[1-9])0*|(\.0*)/u, "$1");
                }
                function p(e, t) {
                  const r = Math.pow(10, Number(t || 0));
                  return new o.default(String(e)).div(r);
                }
                r.TRANSACTION_ENVELOPE_TYPE_NAMES = { FEE_MARKET: "fee-market", LEGACY: "legacy" };
              };
            };
      },
      { package: "$root$", file: "shared/lib/transactions-controller-utils.js" }
    ],
    [
      478,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "networks/5.7.1");
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/networks", file: "node_modules/@ethersproject/networks/lib/_version.js" }
    ],
    [
      4780,
      {
        "../constants/common": 4751,
        "./hexstring-utils": 4788,
        "@metamask/utils": 2081,
        "bignumber.js": 2804,
        "bn.js": 2851,
        "ethereumjs-util": 3272
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.Numeric = void 0);
                var n,
                  o = e("bignumber.js"),
                  i = (n = e("bn.js")) && n.__esModule ? n : { default: n },
                  s = e("@metamask/utils"),
                  a = e("ethereumjs-util"),
                  c = e("../constants/common"),
                  u = e("./hexstring-utils");
                function l(e, t, r) {
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
                function d(e) {
                  return (0, s.isHexString)(e.replace("-", "")) || (0, s.isHexString)(e);
                }
                function p(e, t) {
                  if ("string" != typeof e) throw new Error(`Value of type ${typeof e} passed to stringToBigNumber`);
                  if (
                    16 === t &&
                    (d(e) ||
                      (function (e) {
                        const t = e.split(".");
                        return 1 !== t.length && t.every((e) => d(e));
                      })(e))
                  )
                    return (function (e) {
                      const t = "number" == typeof e ? `${e}` : e,
                        r = "-" === (0, u.stripHexPrefix)(t)[0],
                        n = t.replace("-", ""),
                        i = new o.BigNumber((0, u.stripHexPrefix)(n), 16);
                      return r ? i.negated() : i;
                    })(e);
                  if (10 === t && (isFinite(parseInt(e, 10)) || isFinite(parseFloat(e))))
                    return (function (e) {
                      return new o.BigNumber(String(e), 10);
                    })(e);
                  throw new Error(`String provided to stringToBigNumber is not a hexadecimal or decimal string: ${e}, ${t}`);
                }
                function h(e, t) {
                  if ("string" == typeof e) return p(e, t);
                  if ("number" == typeof e && !1 === isNaN(e))
                    return (function (e, t) {
                      if ("number" != typeof e) throw new Error(`Value of type ${typeof e} passed to numberToBigNumber`);
                      return 16 === t && (0, s.isHexString)(`${e}`) ? new o.BigNumber(`${e}`, 16) : new o.BigNumber(e, 10);
                    })(e, t);
                  throw new Error(`Value: ${e} is not a string, number, BigNumber or BN. Type is: ${typeof e}.`);
                }
                o.BigNumber.config({ DECIMAL_PLACES: 36 });
                const f = new o.BigNumber("1000000000000000000"),
                  g = new o.BigNumber("1000000000"),
                  m = new o.BigNumber("1"),
                  y = { WEI: (e) => e.div(f), GWEI: (e) => e.div(g), ETH: (e) => e.div(m) },
                  _ = { WEI: (e) => e.times(f).round(), GWEI: (e) => e.times(g).round(9), ETH: (e) => e.times(m).round(9) };
                function v(e, t) {
                  return void 0 !== t.denomination && e.denomination !== t.denomination ? t.toDenomination(e.denomination) : t;
                }
                class T {
                  constructor(e, t, r) {
                    if (
                      (l(this, "value", void 0),
                      l(this, "base", void 0),
                      l(this, "denomination", void 0),
                      (this.base = t),
                      (this.denomination = r),
                      e instanceof o.BigNumber)
                    )
                      this.value = e;
                    else if (e instanceof i.default)
                      this.value = (function (e) {
                        if (e instanceof i.default == 0)
                          throw new Error("value passed to bnToBigNumber is not a BN. Received type " + typeof e);
                        return new o.BigNumber(e.toString(16), 16);
                      })(e);
                    else if ((0, s.isNullOrUndefined)(e) || ("number" == typeof e && isNaN(e)) || ("string" == typeof e && "" === e))
                      (this.value = new o.BigNumber("0", 10)), (this.base = 10);
                    else {
                      if (!t) throw new Error("You must specify the base of the provided number if the value is not already a BigNumber");
                      this.value = h(e, t);
                    }
                  }
                  static from(e, t, r) {
                    if (e instanceof T) {
                      if (t || r)
                        throw new Error(
                          `Numeric.from was called with a value (${e.toString()}) that is already a Numeric but a base and/or denomination was provided. Only supply base or denomination when creating a new Numeric`
                        );
                      return e;
                    }
                    return new T(e, t, r);
                  }
                  toBase(e) {
                    return this.base !== e ? new T(this.value, e, this.denomination) : this;
                  }
                  toDenomination(e) {
                    if (e && this.denomination !== e) {
                      return new T(
                        _[e](
                          (t = this).denomination === c.EtherDenomination.ETH || void 0 === t.denomination
                            ? t.value
                            : y[t.denomination](t.value)
                        ),
                        this.base,
                        e
                      );
                    }
                    var t;
                    return this;
                  }
                  shiftedBy(e) {
                    const t = new T(Math.pow(10, e), 10);
                    return this.divide(t);
                  }
                  applyConversionRate(e, t) {
                    if (void 0 === e) return this;
                    let r = new T(e, 10);
                    return t && (r = new T(new o.BigNumber(1)).divide(r)), this.times(r);
                  }
                  round(e, t = o.BigNumber.ROUND_HALF_DOWN) {
                    return "number" == typeof e ? new T(this.value.round(e, t), this.base, this.denomination) : this;
                  }
                  add(e, t, r) {
                    const n = T.from(e, t, r);
                    return new T(this.value.add(v(this, n).value), this.base, this.denomination);
                  }
                  minus(e, t, r) {
                    const n = T.from(e, t, r);
                    return new T(this.value.minus(v(this, n).value), this.base, this.denomination);
                  }
                  times(e, t, r) {
                    const n = T.from(e, t, r);
                    return new T(this.value.times(v(this, n).value), this.base, this.denomination);
                  }
                  divide(e, t, r) {
                    return new T(this.value.div(v(this, T.from(e, t, r)).value), this.base, this.denomination);
                  }
                  greaterThan(e, t, r) {
                    return this.value.greaterThan(T.from(e, t, r).value);
                  }
                  greaterThanOrEqualTo(e, t, r) {
                    return this.value.greaterThanOrEqualTo(T.from(e, t, r).value);
                  }
                  lessThan(e, t, r) {
                    return this.value.lessThan(T.from(e, t, r).value);
                  }
                  lessThanOrEqualTo(e, t, r) {
                    return this.value.lessThanOrEqualTo(T.from(e, t, r).value);
                  }
                  isNegative() {
                    return this.value.isNegative();
                  }
                  isPositive() {
                    return !1 === this.isNegative();
                  }
                  toPrefixedHexString() {
                    return (0, a.addHexPrefix)(this.value.toString(16));
                  }
                  toString() {
                    return this.value.toString(this.base);
                  }
                  toFixed(e) {
                    return this.value.toFixed(e);
                  }
                  toNumber() {
                    return this.value.toNumber();
                  }
                }
                r.Numeric = T;
              };
            };
      },
      { package: "$root$", file: "shared/modules/Numeric.ts" }
    ],
    [
      4781,
      { loglevel: 4083, "webextension-polyfill": 4733 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.checkForLastError = s),
                  (r.checkForLastErrorAndLog = function () {
                    const e = s();
                    e && o.default.error(e);
                    return e;
                  }),
                  (r.checkForLastErrorAndWarn = function () {
                    const e = s();
                    e && console.warn(e);
                    return e;
                  });
                var n = i(e("webextension-polyfill")),
                  o = i(e("loglevel"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s() {
                  const { lastError: e } = n.default.runtime;
                  return e ? (e.stack && e.message ? e : new Error(e.message)) : undefined;
                }
              };
            };
      },
      { package: "$root$", file: "shared/modules/browser-runtime.utils.js" }
    ],
    [
      4783,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.readAddressAsContract = void 0);
                r.readAddressAsContract = async (e, t) => {
                  let r;
                  try {
                    r = await e.getCode(t);
                  } catch (e) {
                    r = null;
                  }
                  return { contractCode: r, isContractAddress: !!r && "0x" !== r && "0x0" !== r };
                };
              };
            };
      },
      { package: "$root$", file: "shared/modules/contract-utils.ts" }
    ],
    [
      4784,
      { "../constants/common": 4751, "./Numeric": 4780, "bignumber.js": 2804, "ethereumjs-util": 3272 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.addHexes = function (e, t) {
                    return new s.Numeric(e, 16).add(new s.Numeric(t, 16)).round(6, n.BigNumber.ROUND_HALF_DOWN).toString();
                  }),
                  (r.bnToHex = function (e) {
                    return (0, o.addHexPrefix)(e.toString(16));
                  }),
                  (r.decEthToConvertedCurrency = function (e, t, r) {
                    let n = new s.Numeric(e, 10, i.EtherDenomination.ETH);
                    t !== i.EtherDenomination.ETH && (n = n.applyConversionRate(r));
                    return n.round(2);
                  }),
                  (r.decGWEIToHexWEI = function (e) {
                    return new s.Numeric(e, 10, i.EtherDenomination.GWEI).toBase(16).toDenomination(i.EtherDenomination.WEI).toString();
                  }),
                  (r.decWEIToDecETH = function (e) {
                    return new s.Numeric(e, 10, i.EtherDenomination.WEI).toDenomination(i.EtherDenomination.ETH).toString();
                  }),
                  (r.decimalToHex = function (e) {
                    return new s.Numeric(e, 10).toBase(16).toString();
                  }),
                  (r.getEthConversionFromWeiHex = function ({
                    value: e,
                    fromCurrency: t = i.EtherDenomination.ETH,
                    conversionRate: r,
                    numberOfDecimals: n = 6
                  }) {
                    const o = [i.EtherDenomination.ETH, i.EtherDenomination.GWEI, i.EtherDenomination.WEI];
                    let s;
                    for (let i = 0; i < o.length; i++) {
                      const c = a({
                        value: e,
                        conversionRate: r,
                        fromCurrency: t,
                        toCurrency: t,
                        numberOfDecimals: n,
                        toDenomination: o[i]
                      });
                      if ("0" !== c || i === o.length - 1) {
                        s = `${c} ${o[i]}`;
                        break;
                      }
                    }
                    return s;
                  }),
                  (r.getValueFromWeiHex = a),
                  (r.getWeiHexFromDecimalValue = function ({
                    value: e,
                    conversionRate: t = 1,
                    fromDenomination: r,
                    fromCurrency: n,
                    invertConversionRate: o = !1
                  }) {
                    let a = new s.Numeric(e, 10, r);
                    n !== i.EtherDenomination.ETH && (a = a.applyConversionRate(t, o));
                    return a.toBase(16).toDenomination(i.EtherDenomination.WEI).toString();
                  }),
                  (r.hexToDecimal = function (e) {
                    return new s.Numeric(e, 16).toBase(10).toString();
                  }),
                  (r.hexWEIToDecETH = function (e) {
                    return new s.Numeric(e, 16, i.EtherDenomination.WEI).toDenomination(i.EtherDenomination.ETH).toBase(10).toString();
                  }),
                  (r.hexWEIToDecGWEI = function (e) {
                    return new s.Numeric(e, 16, i.EtherDenomination.WEI).toBase(10).toDenomination(i.EtherDenomination.GWEI).toString();
                  }),
                  (r.subtractHexes = function (e, t) {
                    return new s.Numeric(e, 16).minus(new s.Numeric(t, 16)).round(6, n.BigNumber.ROUND_HALF_DOWN).toString();
                  }),
                  (r.sumDecimals = function (e, ...t) {
                    const r = new s.Numeric(e, 10);
                    return t.reduce((e, t) => e.add(new s.Numeric(t, 10)), r);
                  }),
                  (r.sumHexes = function (e, ...t) {
                    const r = new s.Numeric(e, 16);
                    return t.reduce((e, t) => e.add(new s.Numeric(t, 16)), r).toPrefixedHexString();
                  });
                var n = e("bignumber.js"),
                  o = e("ethereumjs-util"),
                  i = e("../constants/common"),
                  s = e("./Numeric");
                function a({
                  value: e,
                  fromCurrency: t = i.EtherDenomination.ETH,
                  toCurrency: r,
                  conversionRate: o,
                  numberOfDecimals: a,
                  toDenomination: c = i.EtherDenomination.ETH
                }) {
                  let u = new s.Numeric(e, 16, i.EtherDenomination.WEI);
                  return (
                    t !== r && (u = u.applyConversionRate(o)),
                    u.toBase(10).toDenomination(c).round(a, n.BigNumber.ROUND_HALF_DOWN).toString()
                  );
                }
              };
            };
      },
      { package: "$root$", file: "shared/modules/conversion.utils.ts" }
    ],
    [
      4785,
      { loglevel: 4083 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.isErrorWithMessage = i),
                  (r.logErrorWithMessage = function (e) {
                    i(e) ? o.default.error(e.message) : o.default.error(e);
                  });
                var n,
                  o = (n = e("loglevel")) && n.__esModule ? n : { default: n };
                function i(e) {
                  return "object" == typeof e && null !== e && "message" in e;
                }
              };
            };
      },
      { package: "$root$", file: "shared/modules/error.ts" }
    ],
    [
      4786,
      { "../constants/time": 4768, lodash: 4071 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash"),
                  o = e("../constants/time");
                const i = (0, n.memoize)((e = 30 * o.SECOND) => {
                  if (!Number.isInteger(e) || e < 1) throw new Error("Must specify positive integer timeout.");
                  return async function (t, r) {
                    const n = new window.AbortController(),
                      { signal: o } = n,
                      i = window.fetch(t, { ...r, signal: o }),
                      s = setTimeout(() => n.abort(), e);
                    try {
                      return await i;
                    } finally {
                      clearTimeout(s);
                    }
                  };
                });
                r.default = i;
              };
            };
      },
      { package: "$root$", file: "shared/modules/fetch-with-timeout.ts" }
    ],
    [
      4788,
      { "ethereumjs-util": 3272 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.BURN_ADDRESS = void 0),
                  (r.isBurnAddress = function (e) {
                    return e === o;
                  }),
                  (r.isEmptyHexString = function (e) {
                    return [undefined, null, "0x", "0x0", "0x0000000000000000000000000000000000000000000000000000000000000000"].includes(e);
                  }),
                  (r.isValidHexAddress = function (e, { allowNonPrefixed: t = !0, mixedCaseUseChecksum: r = !1 } = {}) {
                    const o = t ? (0, n.addHexPrefix)(e) : e;
                    if (!(0, n.isHexString)(o)) return !1;
                    if (r) {
                      const e = o.slice(2),
                        t = e.toLowerCase(),
                        r = e.toUpperCase();
                      if (!(e === t || e === r)) return (0, n.isValidChecksumAddress)(o);
                    }
                    return (0, n.isValidAddress)(o);
                  }),
                  (r.stripHexPrefix = function (e) {
                    if ("string" != typeof e) return e;
                    return (0, n.isHexPrefixed)(e) ? e.slice(2) : e;
                  }),
                  (r.toChecksumHexAddress = function (e) {
                    if (!e) return "";
                    const t = (0, n.addHexPrefix)(e);
                    if (!(0, n.isHexString)(t)) return t;
                    return (0, n.toChecksumAddress)(t);
                  });
                var n = e("ethereumjs-util");
                const o = (r.BURN_ADDRESS = (0, n.zeroAddress)());
              };
            };
      },
      { package: "$root$", file: "shared/modules/hexstring-utils.ts" }
    ],
    [
      4789,
      { "./fetch-with-timeout": 4786, loglevel: 4083 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.FALLBACK_LOCALE = void 0),
                  (r.clearCaches = function () {
                    Object.keys(a).forEach((e) => {
                      delete a[e];
                    }),
                      Object.keys(c).forEach((e) => {
                        delete c[e];
                      }),
                      Object.keys(u).forEach((e) => {
                        delete u[e];
                      }),
                      l.clear();
                  }),
                  (r.fetchLocale = async function (e) {
                    try {
                      const t = await i(`./_locales/${e}/messages.json`);
                      return await t.json();
                    } catch (t) {
                      return n.default.error(`failed to fetch ${e} locale because of ${t}`), {};
                    }
                  }),
                  (r.getMessage = void 0),
                  (r.loadRelativeTimeFormatLocaleData = async function (e) {
                    const t = e.split("_")[0];
                    if (Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && !l.has(t)) {
                      const e = await (async function (e) {
                        const t = await i(`./intl/${e}/relative-time-format-data.json`);
                        return await t.json();
                      })(t);
                      Intl.RelativeTimeFormat.__addLocaleData(e), l.add(t);
                    }
                  });
                var n = o(e("loglevel"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = (0, o(e("./fetch-with-timeout")).default)(),
                  s = (r.FALLBACK_LOCALE = "en"),
                  a = {},
                  c = {},
                  u = {},
                  l = new Set();
                r.getMessage = (e, t, r, o, i, l) => {
                  if (!t) return null;
                  const d = t[r];
                  if (!d)
                    return (
                      (function (e, t, r) {
                        var o;
                        if (t === s && !c[e]) {
                          const o = new Error(`Unable to find value of key "${e}" for locale "${t}"`);
                          (c[e] = o), null == r || r(o), n.default.error(o);
                        }
                        if (t === s || (null !== (o = a[t]) && void 0 !== o && o[e])) return;
                        (a[t] = a[t] ?? {}),
                          (a[t][e] = !0),
                          n.default.warn(`Translator - Unable to find value of key "${e}" for locale "${t}"`);
                      })(r, e, i),
                      null
                    );
                  const p = d.message,
                    h = (function (e) {
                      return ((null == e ? void 0 : e.length) ?? 0) > 0;
                    })(o)
                      ? (function (e, t, r, o, i) {
                          const s = e.split(/(\$\d)/gu);
                          return s.map((e) => {
                            const s = e.match(/\$(\d)/u);
                            if (!s) return e;
                            const a = Number(s[1]) - 1,
                              c = t[a];
                            return (
                              (null !== c && c !== undefined) ||
                                (function (e, t, r) {
                                  var o;
                                  if (null !== (o = u[t]) && void 0 !== o && o[e]) return;
                                  (u[t] = u[t] ?? {}), (u[t][e] = !0);
                                  const i = new Error(`Insufficient number of substitutions for key "${e}" with locale "${t}"`);
                                  n.default.error(i), null == r || r(i);
                                })(r, o, i),
                              null == t ? void 0 : t[a]
                            );
                          });
                        })(p, o, r, e, i)
                      : [p];
                  return l ? l(h) : h.join("");
                };
              };
            };
      },
      { package: "$root$", file: "shared/modules/i18n.ts" }
    ],
    [
      479,
      { "./_version": 478, "@ethersproject/logger": 477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.getNetwork = void 0);
                var n = e("@ethersproject/logger"),
                  o = e("./_version"),
                  i = new n.Logger(o.version);
                function s(e) {
                  var t = function (t, r) {
                    null == r && (r = {});
                    var n = [];
                    if (t.InfuraProvider && "-" !== r.infura)
                      try {
                        n.push(new t.InfuraProvider(e, r.infura));
                      } catch (e) {}
                    if (t.EtherscanProvider && "-" !== r.etherscan)
                      try {
                        n.push(new t.EtherscanProvider(e, r.etherscan));
                      } catch (e) {}
                    if (t.AlchemyProvider && "-" !== r.alchemy)
                      try {
                        n.push(new t.AlchemyProvider(e, r.alchemy));
                      } catch (e) {}
                    if (t.PocketProvider && "-" !== r.pocket) {
                      var o = ["goerli", "ropsten", "rinkeby", "sepolia"];
                      try {
                        (i = new t.PocketProvider(e, r.pocket)).network && -1 === o.indexOf(i.network.name) && n.push(i);
                      } catch (e) {}
                    }
                    if (t.CloudflareProvider && "-" !== r.cloudflare)
                      try {
                        n.push(new t.CloudflareProvider(e));
                      } catch (e) {}
                    if (t.AnkrProvider && "-" !== r.ankr)
                      try {
                        var i;
                        o = ["ropsten"];
                        (i = new t.AnkrProvider(e, r.ankr)).network && -1 === o.indexOf(i.network.name) && n.push(i);
                      } catch (e) {}
                    if (0 === n.length) return null;
                    if (t.FallbackProvider) {
                      var s = 1;
                      return null != r.quorum ? (s = r.quorum) : "homestead" === e && (s = 2), new t.FallbackProvider(n, s);
                    }
                    return n[0];
                  };
                  return (
                    (t.renetwork = function (e) {
                      return s(e);
                    }),
                    t
                  );
                }
                function a(e, t) {
                  var r = function (r, n) {
                    return r.JsonRpcProvider ? new r.JsonRpcProvider(e, t) : null;
                  };
                  return (
                    (r.renetwork = function (t) {
                      return a(e, t);
                    }),
                    r
                  );
                }
                var c = {
                    chainId: 1,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "homestead",
                    _defaultProvider: s("homestead")
                  },
                  u = {
                    chainId: 3,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "ropsten",
                    _defaultProvider: s("ropsten")
                  },
                  l = { chainId: 63, name: "classicMordor", _defaultProvider: a("https://www.ethercluster.com/mordor", "classicMordor") },
                  d = {
                    unspecified: { chainId: 0, name: "unspecified" },
                    homestead: c,
                    mainnet: c,
                    morden: { chainId: 2, name: "morden" },
                    ropsten: u,
                    testnet: u,
                    rinkeby: {
                      chainId: 4,
                      ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                      name: "rinkeby",
                      _defaultProvider: s("rinkeby")
                    },
                    kovan: { chainId: 42, name: "kovan", _defaultProvider: s("kovan") },
                    goerli: {
                      chainId: 5,
                      ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                      name: "goerli",
                      _defaultProvider: s("goerli")
                    },
                    kintsugi: { chainId: 1337702, name: "kintsugi" },
                    sepolia: { chainId: 11155111, name: "sepolia", _defaultProvider: s("sepolia") },
                    classic: { chainId: 61, name: "classic", _defaultProvider: a("https://www.ethercluster.com/etc", "classic") },
                    classicMorden: { chainId: 62, name: "classicMorden" },
                    classicMordor: l,
                    classicTestnet: l,
                    classicKotti: {
                      chainId: 6,
                      name: "classicKotti",
                      _defaultProvider: a("https://www.ethercluster.com/kotti", "classicKotti")
                    },
                    xdai: { chainId: 100, name: "xdai" },
                    matic: { chainId: 137, name: "matic", _defaultProvider: s("matic") },
                    maticmum: { chainId: 80001, name: "maticmum" },
                    optimism: { chainId: 10, name: "optimism", _defaultProvider: s("optimism") },
                    "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
                    "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
                    arbitrum: { chainId: 42161, name: "arbitrum" },
                    "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
                    "arbitrum-goerli": { chainId: 421613, name: "arbitrum-goerli" },
                    bnb: { chainId: 56, name: "bnb" },
                    bnbt: { chainId: 97, name: "bnbt" }
                  };
                r.getNetwork = function (e) {
                  if (null == e) return null;
                  if ("number" == typeof e) {
                    for (var t in d) {
                      var r = d[t];
                      if (r.chainId === e)
                        return {
                          name: r.name,
                          chainId: r.chainId,
                          ensAddress: r.ensAddress || null,
                          _defaultProvider: r._defaultProvider || null
                        };
                    }
                    return { chainId: e, name: "unknown" };
                  }
                  if ("string" == typeof e) {
                    var n = d[e];
                    return null == n
                      ? null
                      : { name: n.name, chainId: n.chainId, ensAddress: n.ensAddress, _defaultProvider: n._defaultProvider || null };
                  }
                  var o = d[e.name];
                  if (!o) return "number" != typeof e.chainId && i.throwArgumentError("invalid network chainId", "network", e), e;
                  0 !== e.chainId && e.chainId !== o.chainId && i.throwArgumentError("network chainId mismatch", "network", e);
                  var s,
                    a = e._defaultProvider || null;
                  return (
                    null == a &&
                      o._defaultProvider &&
                      (a =
                        (s = o._defaultProvider) && "function" == typeof s.renetwork
                          ? o._defaultProvider.renetwork(e)
                          : o._defaultProvider),
                    { name: e.name, chainId: o.chainId, ensAddress: e.ensAddress || o.ensAddress || null, _defaultProvider: a }
                  );
                };
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/networks", file: "node_modules/@ethersproject/networks/lib/index.js" }
    ],
    [
      4790,
      { "webextension-polyfill": 4733 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.isManifestV3 = void 0);
                var n,
                  o = (n = e("webextension-polyfill")) && n.__esModule ? n : { default: n };
                r.isManifestV3 = 3 === o.default.runtime.getManifest().manifest_version;
              };
            };
      },
      { package: "$root$", file: "shared/modules/mv3.utils.js" }
    ],
    [
      4791,
      { "../constants/network": 4759, "@metamask/controller-utils": 1124, "@metamask/utils": 2081 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.convertNetworkId = function (e) {
                    if ("number" == typeof e && !Number.isNaN(e)) return `${e}`;
                    if ((0, n.isStrictHexString)(e)) return `${(0, o.convertHexToDecimal)(e)}`;
                    if ("string" == typeof e && /^\d+$/u.test(e)) return e;
                    throw new Error(`Cannot parse as a valid network ID: '${e}'`);
                  }),
                  (r.isPrefixedFormattedHexString = function (e) {
                    if ("string" != typeof e) return !1;
                    return /^0x[1-9a-f]+[0-9a-f]*$/iu.test(e);
                  }),
                  (r.isSafeChainId = function (e) {
                    return (t = e), Number.isSafeInteger(t) && e > 0 && e <= i.MAX_SAFE_CHAIN_ID;
                    var t;
                  }),
                  (r.isTokenDetectionEnabledForNetwork = function (e) {
                    switch (e) {
                      case i.CHAIN_IDS.MAINNET:
                      case i.CHAIN_IDS.BSC:
                      case i.CHAIN_IDS.POLYGON:
                      case i.CHAIN_IDS.AVALANCHE:
                      case i.CHAIN_IDS.LINEA_GOERLI:
                      case i.CHAIN_IDS.LINEA_MAINNET:
                      case i.CHAIN_IDS.AURORA:
                        return !0;
                      default:
                        return !1;
                    }
                  }),
                  (r.shouldShowLineaMainnet = function () {
                    return new Date().getTime() > Date.UTC(2023, 6, 11, 18);
                  });
                var n = e("@metamask/utils"),
                  o = e("@metamask/controller-utils"),
                  i = e("../constants/network");
              };
            };
      },
      { package: "$root$", file: "shared/modules/network.utils.ts" }
    ],
    [
      4792,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.AllProperties = void 0),
                  (r.maskObject = function e(t, r) {
                    let o = !1;
                    if (Object.keys(r).includes(n)) {
                      if (Object.keys(r).length > 1) throw new Error("AllProperties mask key does not support sibling keys");
                      o = !0;
                    }
                    return Object.keys(t).reduce((i, s) => {
                      const a = o ? r[n] : r[s];
                      if (!0 === a) i[s] = t[s];
                      else if (a && "object" == typeof a) i[s] = e(t[s], a);
                      else {
                        if (a !== undefined && !1 !== a) throw new Error(`Unsupported mask entry: ${a}`);
                        i[s] = typeof t[s];
                      }
                      return i;
                    }, {});
                  });
                const n = (r.AllProperties = Symbol("*"));
              };
            };
      },
      { package: "$root$", file: "shared/modules/object.utils.js" }
    ],
    [
      4793,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = function () {
                    return (o %= n), o++;
                  });
                const n = Number.MAX_SAFE_INTEGER;
                let o = Math.round(Math.random() * n);
              };
            };
      },
      { package: "$root$", file: "shared/modules/random-id.js" }
    ],
    [
      4797,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.isEqualCaseInsensitive = function (e, t) {
                    if ("string" != typeof e || "string" != typeof t) return !1;
                    return e.toLowerCase() === t.toLowerCase();
                  }),
                  (r.prependZero = function (e, t) {
                    return e.toString().padStart(t, "0");
                  });
              };
            };
      },
      { package: "$root$", file: "shared/modules/string-utils.ts" }
    ],
    [
      4798,
      { "../constants/swaps": 4766 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.isSwapsDefaultTokenAddress = function (e, t) {
                    var r;
                    if (!e || !t) return !1;
                    return e === (null === (r = n.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[t]) || void 0 === r ? void 0 : r.address);
                  }),
                  (r.isSwapsDefaultTokenSymbol = function (e, t) {
                    var r;
                    if (!e || !t) return !1;
                    return e === (null === (r = n.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[t]) || void 0 === r ? void 0 : r.symbol);
                  });
                var n = e("../constants/swaps");
              };
            };
      },
      { package: "$root$", file: "shared/modules/swaps.utils.js" }
    ],
    [
      4799,
      {
        "../constants/transaction": 4770,
        "./contract-utils": 4783,
        "./string-utils": 4797,
        "@ethersproject/abi": 432,
        "@metamask/metamask-eth-abis": 1593,
        "ethereumjs-util": 3272,
        loglevel: 4083
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.determineTransactionAssetType = async function (e, t, r) {
                    let n = e.type;
                    if (!1 === m.includes(e.type)) {
                      const r = await g(e.txParams, t);
                      n = r.type;
                    }
                    if (
                      [
                        c.TransactionType.tokenMethodApprove,
                        c.TransactionType.tokenMethodSetApprovalForAll,
                        c.TransactionType.tokenMethodTransfer,
                        c.TransactionType.tokenMethodTransferFrom
                      ].find((e) => e === n) ||
                      n === c.TransactionType.contractInteraction
                    )
                      try {
                        const t = await r(e.txParams.to);
                        if (t.standard)
                          return {
                            assetType: t.standard === c.TokenStandard.ERC20 ? c.AssetType.token : c.AssetType.NFT,
                            tokenStandard: t.standard
                          };
                      } catch {}
                    if (n === c.TransactionType.contractInteraction)
                      return { assetType: c.AssetType.unknown, tokenStandard: c.TokenStandard.none };
                    return { assetType: c.AssetType.native, tokenStandard: c.TokenStandard.none };
                  }),
                  (r.determineTransactionContractCode = async function (e, t) {
                    const { to: r } = e,
                      { contractCode: n } = await (0, u.readAddressAsContract)(t, r);
                    return n;
                  }),
                  (r.determineTransactionType = g),
                  (r.isEIP1559Transaction = function (e) {
                    var t, r;
                    return (
                      (0, o.isHexString)(null == e || null === (t = e.txParams) || void 0 === t ? void 0 : t.maxFeePerGas) &&
                      (0, o.isHexString)(null == e || null === (r = e.txParams) || void 0 === r ? void 0 : r.maxPriorityFeePerGas)
                    );
                  }),
                  (r.isLegacyTransaction = function (e) {
                    return (
                      void 0 === e.txParams.maxFeePerGas &&
                      void 0 === e.txParams.maxPriorityFeePerGas &&
                      (void 0 === e.txParams.gasPrice || (0, o.isHexString)(e.txParams.gasPrice))
                    );
                  }),
                  (r.parseStandardTokenTransactionData = f),
                  (r.txParamsAreDappSuggested = function (e) {
                    var t, r, n;
                    const { gasPrice: o, maxPriorityFeePerGas: i, maxFeePerGas: s } = (null == e ? void 0 : e.txParams) || {};
                    return (
                      (o && o === (null == e || null === (t = e.dappSuggestedGasFees) || void 0 === t ? void 0 : t.gasPrice)) ||
                      (i &&
                        s &&
                        (null == e || null === (r = e.dappSuggestedGasFees) || void 0 === r ? void 0 : r.maxPriorityFeePerGas) === i &&
                        (null == e || null === (n = e.dappSuggestedGasFees) || void 0 === n ? void 0 : n.maxFeePerGas) === s)
                    );
                  });
                var n,
                  o = e("ethereumjs-util"),
                  i = e("@ethersproject/abi"),
                  s = e("@metamask/metamask-eth-abis"),
                  a = (n = e("loglevel")) && n.__esModule ? n : { default: n },
                  c = e("../constants/transaction"),
                  u = e("./contract-utils"),
                  l = e("./string-utils");
                const d = new i.Interface(s.abiERC20),
                  p = new i.Interface(s.abiERC721),
                  h = new i.Interface(s.abiERC1155);
                function f(e) {
                  try {
                    return d.parseTransaction({ data: e });
                  } catch {}
                  try {
                    return p.parseTransaction({ data: e });
                  } catch {}
                  try {
                    return h.parseTransaction({ data: e });
                  } catch {}
                  return undefined;
                }
                async function g(e, t) {
                  const { data: r, to: n } = e;
                  let o, i, s;
                  try {
                    ({ name: o } = r && f(r));
                  } catch (e) {
                    a.default.debug("Failed to parse transaction data.", e, r);
                  }
                  if (r && !n) i = c.TransactionType.deployContract;
                  else {
                    const { contractCode: a, isContractAddress: d } = await (0, u.readAddressAsContract)(t, n);
                    if (((s = a), d)) {
                      const t = e.value && 0 !== Number(e.value),
                        n = [
                          c.TransactionType.tokenMethodApprove,
                          c.TransactionType.tokenMethodSetApprovalForAll,
                          c.TransactionType.tokenMethodTransfer,
                          c.TransactionType.tokenMethodTransferFrom,
                          c.TransactionType.tokenMethodSafeTransferFrom
                        ].find((e) => (0, l.isEqualCaseInsensitive)(e, o));
                      i = r && n && !t ? n : c.TransactionType.contractInteraction;
                    } else i = c.TransactionType.simpleSend;
                  }
                  return { type: i, getCodeResponse: s };
                }
                const m = [
                  c.TransactionType.tokenMethodApprove,
                  c.TransactionType.tokenMethodSetApprovalForAll,
                  c.TransactionType.tokenMethodTransfer,
                  c.TransactionType.tokenMethodTransferFrom,
                  c.TransactionType.contractInteraction,
                  c.TransactionType.simpleSend
                ];
              };
            };
      },
      { package: "$root$", file: "shared/modules/transaction.utils.js" }
    ],
    [
      4801,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.getTranslatedUINotifications =
                    r.UI_NOTIFICATIONS =
                    r.NOTIFICATION_OPEN_BETA_SNAPS =
                    r.NOTIFICATION_DROP_LEDGER_FIREFOX =
                    r.NOTIFICATION_BUY_SELL_BUTTON =
                      void 0);
                const n = (r.NOTIFICATION_DROP_LEDGER_FIREFOX = 25),
                  o = (r.NOTIFICATION_OPEN_BETA_SNAPS = 26),
                  i = (r.NOTIFICATION_BUY_SELL_BUTTON = 27),
                  s = (r.UI_NOTIFICATIONS = {
                    1: {
                      id: 1,
                      date: "2021-03-17",
                      image: { src: "images/mobile-link-qr.svg", height: "230px", width: "230px", placeImageBelowDescription: !0 }
                    },
                    3: { id: 3, date: "2021-03-08" },
                    4: { id: 4, date: "2021-05-11", image: { src: "images/source-logos-bsc.svg", width: "100%" } },
                    5: { id: 5, date: "2021-06-09" },
                    6: { id: 6, date: "2021-05-26" },
                    7: { id: 7, date: "2021-09-17" },
                    8: { id: 8, date: "2021-11-01" },
                    9: { id: 9, date: "2021-12-07", image: { src: "images/txinsights.png", width: "80%" } },
                    10: { id: 10, date: "2022-09-15", image: { src: "images/token-detection.svg", width: "100%" } },
                    11: { id: 11, date: "2022-09-15" },
                    12: { id: 12, date: "2022-05-18", image: { src: "images/darkmode-banner.png", width: "100%" } },
                    13: { id: 13, date: "2022-09-15" },
                    14: { id: 14, date: "2022-09-15" },
                    15: { id: 15, date: "2022-09-15" },
                    16: { id: 16, date: null },
                    17: { id: 17, date: null },
                    18: { id: 18, date: null, image: { src: "images/open-sea-security-provider.svg", width: "100%" } },
                    19: { id: 19, date: null, image: { src: "images/nfts.svg", width: "100%" } },
                    20: { id: 20, date: null },
                    21: { id: 21, date: null, image: { src: "images/swaps-redesign.svg", width: "100%" } },
                    22: { id: 22, date: null, image: { src: "images/global-menu-block-explorer.svg" } },
                    23: { id: 23, date: null, image: { src: "images/blockaid-security-provider.svg", width: "100%" } },
                    24: { id: 24, date: null },
                    [n]: { id: Number(n), date: null },
                    [o]: { id: Number(o), date: null, image: { src: "images/introducing-snaps.svg", width: "100%" } },
                    [i]: { id: Number(i), date: null, image: { src: "images/sell_button_whatsnew.png", width: "100%" } }
                  });
                r.getTranslatedUINotifications = (e, t) => {
                  const r = null == t ? void 0 : t.replace("_", "-");
                  return {
                    1: {
                      ...s[1],
                      title: e("notifications1Title"),
                      description: e("notifications1Description"),
                      date: new Intl.DateTimeFormat(r).format(new Date(s[1].date))
                    },
                    3: {
                      ...s[3],
                      title: e("notifications3Title"),
                      description: e("notifications3Description"),
                      actionText: e("notifications3ActionText"),
                      date: new Intl.DateTimeFormat(r).format(new Date(s[3].date))
                    },
                    4: {
                      ...s[4],
                      title: e("notifications4Title"),
                      description: e("notifications4Description"),
                      actionText: e("notifications4ActionText"),
                      date: new Intl.DateTimeFormat(r).format(new Date(s[4].date))
                    },
                    5: {
                      ...s[5],
                      title: e("secretRecoveryPhrase"),
                      description: e("notifications5Description"),
                      actionText: e("notifications3ActionText"),
                      date: new Intl.DateTimeFormat(r).format(new Date(s[5].date))
                    },
                    6: {
                      ...s[6],
                      title: e("notifications6Title"),
                      description: [
                        e("notifications6DescriptionOne"),
                        e("notifications6DescriptionTwo"),
                        e("notifications6DescriptionThree")
                      ],
                      date: new Intl.DateTimeFormat(r).format(new Date(s[6].date))
                    },
                    7: {
                      ...s[7],
                      title: e("notifications7Title"),
                      description: [e("notifications7DescriptionOne"), e("notifications7DescriptionTwo")],
                      date: new Intl.DateTimeFormat(r).format(new Date(s[7].date))
                    },
                    8: {
                      ...s[8],
                      title: e("notifications8Title"),
                      description: [e("notifications8DescriptionOne"), e("notifications8DescriptionTwo")],
                      date: new Intl.DateTimeFormat(r).format(new Date(s[8].date)),
                      actionText: e("notifications8ActionText")
                    },
                    9: {
                      ...s[9],
                      title: e("notifications9Title"),
                      description: [e("notifications9DescriptionOne"), e("notifications9DescriptionTwo")],
                      date: new Intl.DateTimeFormat(r).format(new Date(s[9].date))
                    },
                    10: {
                      ...s[10],
                      title: e("notifications10Title"),
                      description: [
                        e("notifications10DescriptionOne"),
                        e("notifications10DescriptionTwo"),
                        e("notifications10DescriptionThree")
                      ],
                      actionText: e("notifications10ActionText"),
                      date: new Intl.DateTimeFormat(r).format(new Date(s[10].date))
                    },
                    11: {
                      ...s[11],
                      title: e("notifications11Title"),
                      description: e("notifications11Description"),
                      date: new Intl.DateTimeFormat(r).format(new Date(s[11].date))
                    },
                    12: {
                      ...s[12],
                      title: e("notifications12Title"),
                      description: e("notifications12Description"),
                      actionText: e("notifications12ActionText"),
                      date: new Intl.DateTimeFormat(r).format(new Date(s[12].date))
                    },
                    13: {
                      ...s[13],
                      title: e("notifications13Title"),
                      description: e("notifications13Description"),
                      actionText: e("notifications13ActionText"),
                      date: new Intl.DateTimeFormat(r).format(new Date(s[13].date))
                    },
                    14: {
                      ...s[14],
                      title: e("notifications14Title"),
                      description: e("notifications14Description"),
                      actionText: e("notifications14ActionText"),
                      date: s[14].date ? new Intl.DateTimeFormat(r).format(new Date(s[14].date)) : ""
                    },
                    15: {
                      ...s[15],
                      title: e("notifications15Title"),
                      description: e("notifications15Description"),
                      date: s[15].date ? new Intl.DateTimeFormat(r).format(new Date(s[15].date)) : ""
                    },
                    18: {
                      ...s[18],
                      title: e("notifications18Title"),
                      description: [
                        e("notifications18DescriptionOne"),
                        e("notifications18DescriptionTwo"),
                        e("notifications18DescriptionThree")
                      ],
                      actionText: e("notifications18ActionText"),
                      date: s[18].date ? new Intl.DateTimeFormat(r).format(new Date(s[18].date)) : ""
                    },
                    19: {
                      ...s[19],
                      title: e("notifications19Title"),
                      description: [
                        e("notifications19DescriptionOne"),
                        e("notifications19DescriptionTwo"),
                        e("notifications19DescriptionThree")
                      ],
                      actionText: e("notifications19ActionText"),
                      date: s[19].date ? new Intl.DateTimeFormat(r).format(new Date(s[19].date)) : ""
                    },
                    20: {
                      ...s[20],
                      title: e("notifications20Title"),
                      description: [e("notifications20Description")],
                      actionText: e("notifications20ActionText"),
                      date: s[20].date ? new Intl.DateTimeFormat(r).format(new Date(s[20].date)) : ""
                    },
                    21: {
                      ...s[21],
                      title: e("notifications21Title"),
                      description: e("notifications21Description"),
                      actionText: e("notifications21ActionText"),
                      date: s[21].date ? new Intl.DateTimeFormat(r).format(new Date(s[21].date)) : ""
                    },
                    22: {
                      ...s[22],
                      title: e("notifications22Title"),
                      description: e("notifications22Description"),
                      actionText: e("notifications22ActionText"),
                      date: s[22].date ? new Intl.DateTimeFormat(r).format(new Date(s[22].date)) : ""
                    },
                    23: {
                      ...s[23],
                      title: e("notifications23Title"),
                      description: [e("notifications23DescriptionOne"), e("notifications23DescriptionTwo")],
                      actionText: e("notifications23ActionText"),
                      date: s[23].date ? new Intl.DateTimeFormat(r).format(new Date(s[23].date)) : ""
                    },
                    24: {
                      ...s[24],
                      title: e("notifications24Title"),
                      description: e("notifications24Description"),
                      actionText: e("notifications24ActionText"),
                      date: s[24].date ? new Intl.DateTimeFormat(r).format(new Date(s[24].date)) : ""
                    },
                    [n]: {
                      ...s[n],
                      title: e("notificationsDropLedgerFirefoxTitle"),
                      description: [e("notificationsDropLedgerFirefoxDescription")],
                      date: s[n].date ? new Intl.DateTimeFormat(r).format(new Date(s[n].date)) : ""
                    },
                    [o]: {
                      ...s[o],
                      title: e("notificationsOpenBetaSnapsTitle"),
                      description: [
                        e("notificationsOpenBetaSnapsDescriptionOne"),
                        e("notificationsOpenBetaSnapsDescriptionTwo"),
                        e("notificationsOpenBetaSnapsDescriptionThree")
                      ],
                      actionText: e("notificationsOpenBetaSnapsActionText"),
                      date: s[o].date ? new Intl.DateTimeFormat(r).format(new Date(s[o].date)) : ""
                    },
                    [i]: {
                      ...s[i],
                      title: e("notificationsBuySellTitle"),
                      description: e("notificationsBuySellDescription"),
                      actionText: e("notificationsBuySellActionText"),
                      date: s[i].date ? new Intl.DateTimeFormat(r).format(new Date(s[i].date)) : ""
                    }
                  };
                };
              };
            };
      },
      { package: "$root$", file: "shared/notifications/index.js" }
    ],
    [
      482,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "properties/5.7.0");
              };
            };
      },
      { package: "@ethersproject/abi>@ethersproject/properties", file: "node_modules/@ethersproject/properties/lib/_version.js" }
    ],
    [
      483,
      { "./_version": 482, "@ethersproject/logger": 477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  o =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        o,
                        i,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: []
                        };
                      return (
                        (i = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                                    !(o = o.call(n, i[1])).done)
                                )
                                  return o;
                                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;
                                  case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                  case 5:
                                    s.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      s = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                      s.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                      (s.label = o[1]), (o = i);
                                      break;
                                    }
                                    if (o && s.label < o[2]) {
                                      (s.label = o[2]), s.ops.push(i);
                                      break;
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                i = t.call(e, s);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = o = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.Description =
                    r.deepCopy =
                    r.shallowCopy =
                    r.checkProperties =
                    r.resolveProperties =
                    r.getStatic =
                    r.defineReadOnly =
                      void 0);
                var i = e("@ethersproject/logger"),
                  s = e("./_version"),
                  a = new i.Logger(s.version);
                function c(e, t, r) {
                  Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 });
                }
                (r.defineReadOnly = c),
                  (r.getStatic = function (e, t) {
                    for (var r = 0; r < 32; r++) {
                      if (e[t]) return e[t];
                      if (!e.prototype || "object" != typeof e.prototype) break;
                      e = Object.getPrototypeOf(e.prototype).constructor;
                    }
                    return null;
                  }),
                  (r.resolveProperties = function (e) {
                    return n(this, void 0, void 0, function () {
                      var t;
                      return o(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return (
                              (t = Object.keys(e).map(function (t) {
                                var r = e[t];
                                return Promise.resolve(r).then(function (e) {
                                  return { key: t, value: e };
                                });
                              })),
                              [4, Promise.all(t)]
                            );
                          case 1:
                            return [
                              2,
                              r.sent().reduce(function (e, t) {
                                return (e[t.key] = t.value), e;
                              }, {})
                            ];
                        }
                      });
                    });
                  }),
                  (r.checkProperties = function (e, t) {
                    (e && "object" == typeof e) || a.throwArgumentError("invalid object", "object", e),
                      Object.keys(e).forEach(function (r) {
                        t[r] || a.throwArgumentError("invalid object key - " + r, "transaction:" + r, e);
                      });
                  }),
                  (r.shallowCopy = function (e) {
                    var t = {};
                    for (var r in e) t[r] = e[r];
                    return t;
                  });
                var u = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
                function l(e) {
                  if (e === undefined || null === e || u[typeof e]) return !0;
                  if (Array.isArray(e) || "object" == typeof e) {
                    if (!Object.isFrozen(e)) return !1;
                    for (var t = Object.keys(e), r = 0; r < t.length; r++) {
                      var n = null;
                      try {
                        n = e[t[r]];
                      } catch (e) {
                        continue;
                      }
                      if (!l(n)) return !1;
                    }
                    return !0;
                  }
                  return a.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
                }
                function d(e) {
                  if (l(e)) return e;
                  if (Array.isArray(e))
                    return Object.freeze(
                      e.map(function (e) {
                        return p(e);
                      })
                    );
                  if ("object" == typeof e) {
                    var t = {};
                    for (var r in e) {
                      var n = e[r];
                      n !== undefined && c(t, r, p(n));
                    }
                    return t;
                  }
                  return a.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
                }
                function p(e) {
                  return d(e);
                }
                r.deepCopy = p;
                var h = function (e) {
                  for (var t in e) this[t] = p(e[t]);
                };
                r.Description = h;
              };
            };
      },
      { package: "@ethersproject/abi>@ethersproject/properties", file: "node_modules/@ethersproject/properties/lib/index.js" }
    ],
    [
      484,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "providers/5.7.2");
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/_version.js" }
    ],
    [
      485,
      {
        "./_version": 484,
        "./formatter": 493,
        "./url-json-rpc-provider": 500,
        "./websocket-provider": 502,
        "@ethersproject/logger": 477,
        "@ethersproject/properties": 483
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.AlchemyProvider = r.AlchemyWebSocketProvider = void 0);
                var i = e("@ethersproject/properties"),
                  s = e("./formatter"),
                  a = e("./websocket-provider"),
                  c = e("@ethersproject/logger"),
                  u = e("./_version"),
                  l = new c.Logger(u.version),
                  d = e("./url-json-rpc-provider"),
                  p = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                  h = (function (e) {
                    function t(t, r) {
                      var n,
                        o = new f(t, r),
                        s = o.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi.");
                      return (n = e.call(this, s, o.network) || this), (0, i.defineReadOnly)(n, "apiKey", o.apiKey), n;
                    }
                    return (
                      o(t, e),
                      (t.prototype.isCommunityResource = function () {
                        return this.apiKey === p;
                      }),
                      t
                    );
                  })(a.WebSocketProvider);
                r.AlchemyWebSocketProvider = h;
                var f = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return (
                    o(t, e),
                    (t.getWebSocketProvider = function (e, t) {
                      return new h(e, t);
                    }),
                    (t.getApiKey = function (e) {
                      return null == e ? p : (e && "string" != typeof e && l.throwArgumentError("invalid apiKey", "apiKey", e), e);
                    }),
                    (t.getUrl = function (e, t) {
                      var r = null;
                      switch (e.name) {
                        case "homestead":
                          r = "eth-mainnet.alchemyapi.io/v2/";
                          break;
                        case "goerli":
                          r = "eth-goerli.g.alchemy.com/v2/";
                          break;
                        case "matic":
                          r = "polygon-mainnet.g.alchemy.com/v2/";
                          break;
                        case "maticmum":
                          r = "polygon-mumbai.g.alchemy.com/v2/";
                          break;
                        case "arbitrum":
                          r = "arb-mainnet.g.alchemy.com/v2/";
                          break;
                        case "arbitrum-goerli":
                          r = "arb-goerli.g.alchemy.com/v2/";
                          break;
                        case "optimism":
                          r = "opt-mainnet.g.alchemy.com/v2/";
                          break;
                        case "optimism-goerli":
                          r = "opt-goerli.g.alchemy.com/v2/";
                          break;
                        default:
                          l.throwArgumentError("unsupported network", "network", arguments[0]);
                      }
                      return {
                        allowGzip: !0,
                        url: "https:/" + "/" + r + t,
                        throttleCallback: function (e, r) {
                          return t === p && (0, s.showThrottleMessage)(), Promise.resolve(!0);
                        }
                      };
                    }),
                    (t.prototype.isCommunityResource = function () {
                      return this.apiKey === p;
                    }),
                    t
                  );
                })(d.UrlJsonRpcProvider);
                r.AlchemyProvider = f;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/alchemy-provider.js" }
    ],
    [
      486,
      { "./_version": 484, "./formatter": 493, "./url-json-rpc-provider": 500, "@ethersproject/logger": 477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.AnkrProvider = void 0);
                var i = e("./formatter"),
                  s = e("./url-json-rpc-provider"),
                  a = e("@ethersproject/logger"),
                  c = e("./_version"),
                  u = new a.Logger(c.version),
                  l = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
                function d(e) {
                  switch (e) {
                    case "homestead":
                      return "rpc.ankr.com/eth/";
                    case "ropsten":
                      return "rpc.ankr.com/eth_ropsten/";
                    case "rinkeby":
                      return "rpc.ankr.com/eth_rinkeby/";
                    case "goerli":
                      return "rpc.ankr.com/eth_goerli/";
                    case "matic":
                      return "rpc.ankr.com/polygon/";
                    case "arbitrum":
                      return "rpc.ankr.com/arbitrum/";
                  }
                  return u.throwArgumentError("unsupported network", "name", e);
                }
                var p = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return (
                    o(t, e),
                    (t.prototype.isCommunityResource = function () {
                      return this.apiKey === l;
                    }),
                    (t.getApiKey = function (e) {
                      return null == e ? l : e;
                    }),
                    (t.getUrl = function (e, t) {
                      null == t && (t = l);
                      var r = {
                        allowGzip: !0,
                        url: "https://" + d(e.name) + t,
                        throttleCallback: function (e, r) {
                          return t.apiKey === l && (0, i.showThrottleMessage)(), Promise.resolve(!0);
                        }
                      };
                      return null != t.projectSecret && ((r.user = ""), (r.password = t.projectSecret)), r;
                    }),
                    t
                  );
                })(s.UrlJsonRpcProvider);
                r.AnkrProvider = p;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/ankr-provider.js" }
    ],
    [
      487,
      {
        "./_version": 484,
        "./formatter": 493,
        "@ethersproject/abstract-provider": 435,
        "@ethersproject/base64": 441,
        "@ethersproject/basex": 442,
        "@ethersproject/bignumber": 446,
        "@ethersproject/bytes": 448,
        "@ethersproject/constants": 452,
        "@ethersproject/hash": 461,
        "@ethersproject/logger": 477,
        "@ethersproject/networks": 479,
        "@ethersproject/properties": 483,
        "@ethersproject/sha2": 511,
        "@ethersproject/strings": 521,
        "@ethersproject/web": 531,
        bech32: 2802
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    }),
                  i =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  s =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        o,
                        i,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: []
                        };
                      return (
                        (i = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                                    !(o = o.call(n, i[1])).done)
                                )
                                  return o;
                                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;
                                  case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                  case 5:
                                    s.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      s = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                      s.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                      (s.label = o[1]), (o = i);
                                      break;
                                    }
                                    if (o && s.label < o[2]) {
                                      (s.label = o[2]), s.ops.push(i);
                                      break;
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                i = t.call(e, s);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = o = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    },
                  a =
                    (this && this.__importDefault) ||
                    function (e) {
                      return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.BaseProvider = r.Resolver = r.Event = void 0);
                var c = e("@ethersproject/abstract-provider"),
                  u = e("@ethersproject/base64"),
                  l = e("@ethersproject/basex"),
                  d = e("@ethersproject/bignumber"),
                  p = e("@ethersproject/bytes"),
                  h = e("@ethersproject/constants"),
                  f = e("@ethersproject/hash"),
                  g = e("@ethersproject/networks"),
                  m = e("@ethersproject/properties"),
                  y = e("@ethersproject/sha2"),
                  _ = e("@ethersproject/strings"),
                  v = e("@ethersproject/web"),
                  T = a(e("bech32")),
                  E = e("@ethersproject/logger"),
                  b = e("./_version"),
                  w = new E.Logger(b.version),
                  A = e("./formatter");
                function N(e) {
                  return null == e
                    ? "null"
                    : (32 !== (0, p.hexDataLength)(e) && w.throwArgumentError("invalid topic", "topic", e), e.toLowerCase());
                }
                function I(e) {
                  for (e = e.slice(); e.length > 0 && null == e[e.length - 1]; ) e.pop();
                  return e
                    .map(function (e) {
                      if (Array.isArray(e)) {
                        var t = {};
                        e.forEach(function (e) {
                          t[N(e)] = !0;
                        });
                        var r = Object.keys(t);
                        return r.sort(), r.join("|");
                      }
                      return N(e);
                    })
                    .join("&");
                }
                function O(e) {
                  if ("string" == typeof e) {
                    if (((e = e.toLowerCase()), 32 === (0, p.hexDataLength)(e))) return "tx:" + e;
                    if (-1 === e.indexOf(":")) return e;
                  } else {
                    if (Array.isArray(e)) return "filter:*:" + I(e);
                    if (c.ForkEvent.isForkEvent(e)) throw (w.warn("not implemented"), new Error("not implemented"));
                    if (e && "object" == typeof e) return "filter:" + (e.address || "*") + ":" + I(e.topics || []);
                  }
                  throw new Error("invalid event - " + e);
                }
                function R() {
                  return new Date().getTime();
                }
                function S(e) {
                  return new Promise(function (t) {
                    setTimeout(t, e);
                  });
                }
                var P = ["block", "network", "pending", "poll"],
                  k = (function () {
                    function e(e, t, r) {
                      (0, m.defineReadOnly)(this, "tag", e),
                        (0, m.defineReadOnly)(this, "listener", t),
                        (0, m.defineReadOnly)(this, "once", r),
                        (this._lastBlockNumber = -2),
                        (this._inflight = !1);
                    }
                    return (
                      Object.defineProperty(e.prototype, "event", {
                        get: function () {
                          switch (this.type) {
                            case "tx":
                              return this.hash;
                            case "filter":
                              return this.filter;
                          }
                          return this.tag;
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      Object.defineProperty(e.prototype, "type", {
                        get: function () {
                          return this.tag.split(":")[0];
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      Object.defineProperty(e.prototype, "hash", {
                        get: function () {
                          var e = this.tag.split(":");
                          return "tx" !== e[0] ? null : e[1];
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      Object.defineProperty(e.prototype, "filter", {
                        get: function () {
                          var e = this.tag.split(":");
                          if ("filter" !== e[0]) return null;
                          var t,
                            r = e[1],
                            n =
                              "" === (t = e[2])
                                ? []
                                : t.split(/&/g).map(function (e) {
                                    if ("" === e) return [];
                                    var t = e.split("|").map(function (e) {
                                      return "null" === e ? null : e;
                                    });
                                    return 1 === t.length ? t[0] : t;
                                  }),
                            o = {};
                          return n.length > 0 && (o.topics = n), r && "*" !== r && (o.address = r), o;
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      (e.prototype.pollable = function () {
                        return this.tag.indexOf(":") >= 0 || P.indexOf(this.tag) >= 0;
                      }),
                      e
                    );
                  })();
                r.Event = k;
                var C = {
                  0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
                  2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
                  3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
                  60: { symbol: "eth", ilk: "eth" },
                  61: { symbol: "etc", ilk: "eth" },
                  700: { symbol: "xdai", ilk: "eth" }
                };
                function D(e) {
                  return (0, p.hexZeroPad)(d.BigNumber.from(e).toHexString(), 32);
                }
                function M(e) {
                  return l.Base58.encode((0, p.concat)([e, (0, p.hexDataSlice)((0, y.sha256)((0, y.sha256)(e)), 0, 4)]));
                }
                var L = new RegExp("^(ipfs)://(.*)$", "i"),
                  x = [
                    new RegExp("^(https)://(.*)$", "i"),
                    new RegExp("^(data):(.*)$", "i"),
                    L,
                    new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
                  ];
                function j(e, t) {
                  try {
                    return (0, _.toUtf8String)(B(e, t));
                  } catch (e) {}
                  return null;
                }
                function B(e, t) {
                  if ("0x" === e) return null;
                  var r = d.BigNumber.from((0, p.hexDataSlice)(e, t, t + 32)).toNumber(),
                    n = d.BigNumber.from((0, p.hexDataSlice)(e, r, r + 32)).toNumber();
                  return (0, p.hexDataSlice)(e, r + 32, r + 32 + n);
                }
                function U(e) {
                  return (
                    e.match(/^ipfs:\/\/ipfs\//i)
                      ? (e = e.substring(12))
                      : e.match(/^ipfs:\/\//i)
                      ? (e = e.substring(7))
                      : w.throwArgumentError("unsupported IPFS format", "link", e),
                    "https://gateway.ipfs.io/ipfs/" + e
                  );
                }
                function F(e) {
                  var t = (0, p.arrayify)(e);
                  if (t.length > 32) throw new Error("internal; should not happen");
                  var r = new Uint8Array(32);
                  return r.set(t, 32 - t.length), r;
                }
                function H(e) {
                  if (e.length % 32 == 0) return e;
                  var t = new Uint8Array(32 * Math.ceil(e.length / 32));
                  return t.set(e), t;
                }
                function K(e) {
                  for (var t = [], r = 0, n = 0; n < e.length; n++) t.push(null), (r += 32);
                  for (n = 0; n < e.length; n++) {
                    var o = (0, p.arrayify)(e[n]);
                    (t[n] = F(r)), t.push(F(o.length)), t.push(H(o)), (r += 32 + 32 * Math.ceil(o.length / 32));
                  }
                  return (0, p.hexConcat)(t);
                }
                var G = (function () {
                  function e(e, t, r, n) {
                    (0, m.defineReadOnly)(this, "provider", e),
                      (0, m.defineReadOnly)(this, "name", r),
                      (0, m.defineReadOnly)(this, "address", e.formatter.address(t)),
                      (0, m.defineReadOnly)(this, "_resolvedAddress", n);
                  }
                  return (
                    (e.prototype.supportsWildcard = function () {
                      var e = this;
                      return (
                        this._supportsEip2544 ||
                          (this._supportsEip2544 = this.provider
                            .call({ to: this.address, data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000" })
                            .then(function (e) {
                              return d.BigNumber.from(e).eq(1);
                            })
                            .catch(function (t) {
                              if (t.code === E.Logger.errors.CALL_EXCEPTION) return !1;
                              throw ((e._supportsEip2544 = null), t);
                            })),
                        this._supportsEip2544
                      );
                    }),
                    (e.prototype._fetch = function (e, t) {
                      return i(this, void 0, void 0, function () {
                        var r, n, o, i;
                        return s(this, function (s) {
                          switch (s.label) {
                            case 0:
                              return (
                                (r = {
                                  to: this.address,
                                  ccipReadEnabled: !0,
                                  data: (0, p.hexConcat)([e, (0, f.namehash)(this.name), t || "0x"])
                                }),
                                (n = !1),
                                [4, this.supportsWildcard()]
                              );
                            case 1:
                              s.sent() && ((n = !0), (r.data = (0, p.hexConcat)(["0x9061b923", K([(0, f.dnsEncode)(this.name), r.data])]))),
                                (s.label = 2);
                            case 2:
                              return s.trys.push([2, 4, , 5]), [4, this.provider.call(r)];
                            case 3:
                              return (
                                (o = s.sent()),
                                (0, p.arrayify)(o).length % 32 == 4 &&
                                  w.throwError("resolver threw error", E.Logger.errors.CALL_EXCEPTION, { transaction: r, data: o }),
                                n && (o = B(o, 0)),
                                [2, o]
                              );
                            case 4:
                              if ((i = s.sent()).code === E.Logger.errors.CALL_EXCEPTION) return [2, null];
                              throw i;
                            case 5:
                              return [2];
                          }
                        });
                      });
                    }),
                    (e.prototype._fetchBytes = function (e, t) {
                      return i(this, void 0, void 0, function () {
                        var r;
                        return s(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return [4, this._fetch(e, t)];
                            case 1:
                              return null != (r = n.sent()) ? [2, B(r, 0)] : [2, null];
                          }
                        });
                      });
                    }),
                    (e.prototype._getAddress = function (e, t) {
                      var r = C[String(e)];
                      if (
                        (null == r &&
                          w.throwError("unsupported coin type: " + e, E.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "getAddress(" + e + ")"
                          }),
                        "eth" === r.ilk)
                      )
                        return this.provider.formatter.address(t);
                      var n = (0, p.arrayify)(t);
                      if (null != r.p2pkh) {
                        var o = t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                        if (o) {
                          var i = parseInt(o[1], 16);
                          if (o[2].length === 2 * i && i >= 1 && i <= 75) return M((0, p.concat)([[r.p2pkh], "0x" + o[2]]));
                        }
                      }
                      if (null != r.p2sh) {
                        var s = t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                        if (s) {
                          var a = parseInt(s[1], 16);
                          if (s[2].length === 2 * a && a >= 1 && a <= 75) return M((0, p.concat)([[r.p2sh], "0x" + s[2]]));
                        }
                      }
                      if (null != r.prefix) {
                        var c = n[1],
                          u = n[0];
                        if ((0 === u ? 20 !== c && 32 !== c && (u = -1) : (u = -1), u >= 0 && n.length === 2 + c && c >= 1 && c <= 75)) {
                          var l = T.default.toWords(n.slice(2));
                          return l.unshift(u), T.default.encode(r.prefix, l);
                        }
                      }
                      return null;
                    }),
                    (e.prototype.getAddress = function (e) {
                      return i(this, void 0, void 0, function () {
                        var t, r, n, o;
                        return s(this, function (i) {
                          switch (i.label) {
                            case 0:
                              if ((null == e && (e = 60), 60 !== e)) return [3, 4];
                              i.label = 1;
                            case 1:
                              return i.trys.push([1, 3, , 4]), [4, this._fetch("0x3b3b57de")];
                            case 2:
                              return "0x" === (t = i.sent()) || t === h.HashZero ? [2, null] : [2, this.provider.formatter.callAddress(t)];
                            case 3:
                              if ((r = i.sent()).code === E.Logger.errors.CALL_EXCEPTION) return [2, null];
                              throw r;
                            case 4:
                              return [4, this._fetchBytes("0xf1cb7e06", D(e))];
                            case 5:
                              return null == (n = i.sent()) || "0x" === n
                                ? [2, null]
                                : (null == (o = this._getAddress(e, n)) &&
                                    w.throwError("invalid or unsupported coin data", E.Logger.errors.UNSUPPORTED_OPERATION, {
                                      operation: "getAddress(" + e + ")",
                                      coinType: e,
                                      data: n
                                    }),
                                  [2, o]);
                          }
                        });
                      });
                    }),
                    (e.prototype.getAvatar = function () {
                      return i(this, void 0, void 0, function () {
                        var e, t, r, n, o, i, a, c, u, l, h, f, g, m, y, _, T, E, b, w, A, N;
                        return s(this, function (s) {
                          switch (s.label) {
                            case 0:
                              (e = [{ type: "name", content: this.name }]), (s.label = 1);
                            case 1:
                              return s.trys.push([1, 19, , 20]), [4, this.getText("avatar")];
                            case 2:
                              if (null == (t = s.sent())) return [2, null];
                              (r = 0), (s.label = 3);
                            case 3:
                              if (!(r < x.length)) return [3, 18];
                              if (null == (n = t.match(x[r]))) return [3, 17];
                              switch (((o = n[1].toLowerCase()), o)) {
                                case "https":
                                  return [3, 4];
                                case "data":
                                  return [3, 5];
                                case "ipfs":
                                  return [3, 6];
                                case "erc721":
                                case "erc1155":
                                  return [3, 7];
                              }
                              return [3, 17];
                            case 4:
                              return e.push({ type: "url", content: t }), [2, { linkage: e, url: t }];
                            case 5:
                              return e.push({ type: "data", content: t }), [2, { linkage: e, url: t }];
                            case 6:
                              return e.push({ type: "ipfs", content: t }), [2, { linkage: e, url: U(t) }];
                            case 7:
                              return (
                                (i = "erc721" === o ? "0xc87b56dd" : "0x0e89341c"),
                                e.push({ type: o, content: t }),
                                (c = this._resolvedAddress) ? [3, 9] : [4, this.getAddress()]
                              );
                            case 8:
                              (c = s.sent()), (s.label = 9);
                            case 9:
                              return (
                                (a = c), 2 !== (u = (n[2] || "").split("/")).length ? [2, null] : [4, this.provider.formatter.address(u[0])]
                              );
                            case 10:
                              return (
                                (l = s.sent()),
                                (h = (0, p.hexZeroPad)(d.BigNumber.from(u[1]).toHexString(), 32)),
                                "erc721" !== o
                                  ? [3, 12]
                                  : ((m = (g = this.provider.formatter).callAddress),
                                    [4, this.provider.call({ to: l, data: (0, p.hexConcat)(["0x6352211e", h]) })])
                              );
                            case 11:
                              return (f = m.apply(g, [s.sent()])), a !== f ? [2, null] : (e.push({ type: "owner", content: f }), [3, 14]);
                            case 12:
                              return "erc1155" !== o
                                ? [3, 14]
                                : ((T = (_ = d.BigNumber).from),
                                  [4, this.provider.call({ to: l, data: (0, p.hexConcat)(["0x00fdd58e", (0, p.hexZeroPad)(a, 32), h]) })]);
                            case 13:
                              if ((y = T.apply(_, [s.sent()])).isZero()) return [2, null];
                              e.push({ type: "balance", content: y.toString() }), (s.label = 14);
                            case 14:
                              return (
                                (E = { to: this.provider.formatter.address(u[0]), data: (0, p.hexConcat)([i, h]) }),
                                (w = j),
                                [4, this.provider.call(E)]
                              );
                            case 15:
                              return null == (b = w.apply(void 0, [s.sent(), 0]))
                                ? [2, null]
                                : (e.push({ type: "metadata-url-base", content: b }),
                                  "erc1155" === o &&
                                    ((b = b.replace("{id}", h.substring(2))), e.push({ type: "metadata-url-expanded", content: b })),
                                  b.match(/^ipfs:/i) && (b = U(b)),
                                  e.push({ type: "metadata-url", content: b }),
                                  [4, (0, v.fetchJson)(b)]);
                            case 16:
                              if (!(A = s.sent())) return [2, null];
                              if ((e.push({ type: "metadata", content: JSON.stringify(A) }), "string" != typeof (N = A.image)))
                                return [2, null];
                              if (N.match(/^(https:\/\/|data:)/i));
                              else {
                                if (null == N.match(L)) return [2, null];
                                e.push({ type: "url-ipfs", content: N }), (N = U(N));
                              }
                              return e.push({ type: "url", content: N }), [2, { linkage: e, url: N }];
                            case 17:
                              return r++, [3, 3];
                            case 18:
                              return [3, 20];
                            case 19:
                              return s.sent(), [3, 20];
                            case 20:
                              return [2, null];
                          }
                        });
                      });
                    }),
                    (e.prototype.getContentHash = function () {
                      return i(this, void 0, void 0, function () {
                        var e, t, r, n, o, i, a, c;
                        return s(this, function (s) {
                          switch (s.label) {
                            case 0:
                              return [4, this._fetchBytes("0xbc1c58d1")];
                            case 1:
                              return null == (e = s.sent()) || "0x" === e
                                ? [2, null]
                                : (t = e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/)) &&
                                  ((r = parseInt(t[3], 16)), t[4].length === 2 * r)
                                ? [2, "ipfs://" + l.Base58.encode("0x" + t[1])]
                                : (n = e.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/)) &&
                                  ((o = parseInt(n[3], 16)), n[4].length === 2 * o)
                                ? [2, "ipns://" + l.Base58.encode("0x" + n[1])]
                                : (i = e.match(/^0xe40101fa011b20([0-9a-f]*)$/)) && 64 === i[1].length
                                ? [2, "bzz://" + i[1]]
                                : (a = e.match(/^0x90b2c605([0-9a-f]*)$/)) && 68 === a[1].length
                                ? ((c = { "=": "", "+": "-", "/": "_" }),
                                  [
                                    2,
                                    "sia://" +
                                      (0, u.encode)("0x" + a[1]).replace(/[=+\/]/g, function (e) {
                                        return c[e];
                                      })
                                  ])
                                : [
                                    2,
                                    w.throwError("invalid or unsupported content hash data", E.Logger.errors.UNSUPPORTED_OPERATION, {
                                      operation: "getContentHash()",
                                      data: e
                                    })
                                  ];
                          }
                        });
                      });
                    }),
                    (e.prototype.getText = function (e) {
                      return i(this, void 0, void 0, function () {
                        var t, r;
                        return s(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return (
                                (t = (0, _.toUtf8Bytes)(e)),
                                (t = (0, p.concat)([D(64), D(t.length), t])).length % 32 != 0 &&
                                  (t = (0, p.concat)([t, (0, p.hexZeroPad)("0x", 32 - (e.length % 32))])),
                                [4, this._fetchBytes("0x59d1d43c", (0, p.hexlify)(t))]
                              );
                            case 1:
                              return null == (r = n.sent()) || "0x" === r ? [2, null] : [2, (0, _.toUtf8String)(r)];
                          }
                        });
                      });
                    }),
                    e
                  );
                })();
                r.Resolver = G;
                var W = null,
                  $ = 1,
                  q = (function (e) {
                    function t(t) {
                      var r = this.constructor,
                        n = e.call(this) || this;
                      if (
                        ((n._events = []),
                        (n._emitted = { block: -2 }),
                        (n.disableCcipRead = !1),
                        (n.formatter = r.getFormatter()),
                        (0, m.defineReadOnly)(n, "anyNetwork", "any" === t),
                        n.anyNetwork && (t = n.detectNetwork()),
                        t instanceof Promise)
                      )
                        (n._networkPromise = t), t.catch(function (e) {}), n._ready().catch(function (e) {});
                      else {
                        var o = (0, m.getStatic)(r, "getNetwork")(t);
                        o
                          ? ((0, m.defineReadOnly)(n, "_network", o), n.emit("network", o, null))
                          : w.throwArgumentError("invalid network", "network", t);
                      }
                      return (
                        (n._maxInternalBlockNumber = -1024),
                        (n._lastBlockNumber = -2),
                        (n._maxFilterBlockRange = 10),
                        (n._pollingInterval = 4e3),
                        (n._fastQueryDate = 0),
                        n
                      );
                    }
                    return (
                      o(t, e),
                      (t.prototype._ready = function () {
                        return i(this, void 0, void 0, function () {
                          var e;
                          return s(this, function (t) {
                            switch (t.label) {
                              case 0:
                                if (null != this._network) return [3, 7];
                                if (((e = null), !this._networkPromise)) return [3, 4];
                                t.label = 1;
                              case 1:
                                return t.trys.push([1, 3, , 4]), [4, this._networkPromise];
                              case 2:
                                return (e = t.sent()), [3, 4];
                              case 3:
                                return t.sent(), [3, 4];
                              case 4:
                                return null != e ? [3, 6] : [4, this.detectNetwork()];
                              case 5:
                                (e = t.sent()), (t.label = 6);
                              case 6:
                                e || w.throwError("no network detected", E.Logger.errors.UNKNOWN_ERROR, {}),
                                  null == this._network &&
                                    (this.anyNetwork ? (this._network = e) : (0, m.defineReadOnly)(this, "_network", e),
                                    this.emit("network", e, null)),
                                  (t.label = 7);
                              case 7:
                                return [2, this._network];
                            }
                          });
                        });
                      }),
                      Object.defineProperty(t.prototype, "ready", {
                        get: function () {
                          var e = this;
                          return (0, v.poll)(function () {
                            return e._ready().then(
                              function (e) {
                                return e;
                              },
                              function (e) {
                                if (e.code === E.Logger.errors.NETWORK_ERROR && "noNetwork" === e.event) return undefined;
                                throw e;
                              }
                            );
                          });
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      (t.getFormatter = function () {
                        return null == W && (W = new A.Formatter()), W;
                      }),
                      (t.getNetwork = function (e) {
                        return (0, g.getNetwork)(null == e ? "homestead" : e);
                      }),
                      (t.prototype.ccipReadFetch = function (e, t, r) {
                        return i(this, void 0, void 0, function () {
                          var n, o, i, a, c, u, l, d, p;
                          return s(this, function (s) {
                            switch (s.label) {
                              case 0:
                                if (this.disableCcipRead || 0 === r.length) return [2, null];
                                (n = e.to.toLowerCase()), (o = t.toLowerCase()), (i = []), (a = 0), (s.label = 1);
                              case 1:
                                return a < r.length
                                  ? ((c = r[a]),
                                    (u = c.replace("{sender}", n).replace("{data}", o)),
                                    (l = c.indexOf("{data}") >= 0 ? null : JSON.stringify({ data: o, sender: n })),
                                    [
                                      4,
                                      (0, v.fetchJson)({ url: u, errorPassThrough: !0 }, l, function (e, t) {
                                        return (e.status = t.statusCode), e;
                                      })
                                    ])
                                  : [3, 4];
                              case 2:
                                if ((d = s.sent()).data) return [2, d.data];
                                if (((p = d.message || "unknown error"), d.status >= 400 && d.status < 500))
                                  return [
                                    2,
                                    w.throwError("response not found during CCIP fetch: " + p, E.Logger.errors.SERVER_ERROR, {
                                      url: c,
                                      errorMessage: p
                                    })
                                  ];
                                i.push(p), (s.label = 3);
                              case 3:
                                return a++, [3, 1];
                              case 4:
                                return [
                                  2,
                                  w.throwError(
                                    "error encountered during CCIP fetch: " +
                                      i
                                        .map(function (e) {
                                          return JSON.stringify(e);
                                        })
                                        .join(", "),
                                    E.Logger.errors.SERVER_ERROR,
                                    { urls: r, errorMessages: i }
                                  )
                                ];
                            }
                          });
                        });
                      }),
                      (t.prototype._getInternalBlockNumber = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t,
                            r,
                            n,
                            o,
                            i = this;
                          return s(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return [4, this._ready()];
                              case 1:
                                if ((s.sent(), !(e > 0))) return [3, 7];
                                s.label = 2;
                              case 2:
                                if (!this._internalBlockNumber) return [3, 7];
                                (t = this._internalBlockNumber), (s.label = 3);
                              case 3:
                                return s.trys.push([3, 5, , 6]), [4, t];
                              case 4:
                                return (r = s.sent()), R() - r.respTime <= e ? [2, r.blockNumber] : [3, 7];
                              case 5:
                                return s.sent(), this._internalBlockNumber === t ? [3, 7] : [3, 6];
                              case 6:
                                return [3, 2];
                              case 7:
                                return (
                                  (n = R()),
                                  (o = (0, m.resolveProperties)({
                                    blockNumber: this.perform("getBlockNumber", {}),
                                    networkError: this.getNetwork().then(
                                      function (e) {
                                        return null;
                                      },
                                      function (e) {
                                        return e;
                                      }
                                    )
                                  }).then(function (e) {
                                    var t = e.blockNumber,
                                      r = e.networkError;
                                    if (r) throw (i._internalBlockNumber === o && (i._internalBlockNumber = null), r);
                                    var s = R();
                                    return (
                                      (t = d.BigNumber.from(t).toNumber()) < i._maxInternalBlockNumber && (t = i._maxInternalBlockNumber),
                                      (i._maxInternalBlockNumber = t),
                                      i._setFastBlockNumber(t),
                                      { blockNumber: t, reqTime: n, respTime: s }
                                    );
                                  })),
                                  (this._internalBlockNumber = o),
                                  o.catch(function (e) {
                                    i._internalBlockNumber === o && (i._internalBlockNumber = null);
                                  }),
                                  [4, o]
                                );
                              case 8:
                                return [2, s.sent().blockNumber];
                            }
                          });
                        });
                      }),
                      (t.prototype.poll = function () {
                        return i(this, void 0, void 0, function () {
                          var e,
                            t,
                            r,
                            n,
                            o,
                            i = this;
                          return s(this, function (s) {
                            switch (s.label) {
                              case 0:
                                (e = $++), (t = []), (r = null), (s.label = 1);
                              case 1:
                                return s.trys.push([1, 3, , 4]), [4, this._getInternalBlockNumber(100 + this.pollingInterval / 2)];
                              case 2:
                                return (r = s.sent()), [3, 4];
                              case 3:
                                return (n = s.sent()), this.emit("error", n), [2];
                              case 4:
                                if ((this._setFastBlockNumber(r), this.emit("poll", e, r), r === this._lastBlockNumber))
                                  return this.emit("didPoll", e), [2];
                                if ((-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3))
                                  w.warn(
                                    "network block skew detected; skipping block events (emitted=" +
                                      this._emitted.block +
                                      " blockNumber" +
                                      r +
                                      ")"
                                  ),
                                    this.emit(
                                      "error",
                                      w.makeError("network block skew detected", E.Logger.errors.NETWORK_ERROR, {
                                        blockNumber: r,
                                        event: "blockSkew",
                                        previousBlockNumber: this._emitted.block
                                      })
                                    ),
                                    this.emit("block", r);
                                else for (o = this._emitted.block + 1; o <= r; o++) this.emit("block", o);
                                return (
                                  this._emitted.block !== r &&
                                    ((this._emitted.block = r),
                                    Object.keys(this._emitted).forEach(function (e) {
                                      if ("block" !== e) {
                                        var t = i._emitted[e];
                                        "pending" !== t && r - t > 12 && delete i._emitted[e];
                                      }
                                    })),
                                  -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1),
                                  this._events.forEach(function (e) {
                                    switch (e.type) {
                                      case "tx":
                                        var n = e.hash,
                                          o = i
                                            .getTransactionReceipt(n)
                                            .then(function (e) {
                                              return e && null != e.blockNumber
                                                ? ((i._emitted["t:" + n] = e.blockNumber), i.emit(n, e), null)
                                                : null;
                                            })
                                            .catch(function (e) {
                                              i.emit("error", e);
                                            });
                                        t.push(o);
                                        break;
                                      case "filter":
                                        if (!e._inflight) {
                                          (e._inflight = !0), -2 === e._lastBlockNumber && (e._lastBlockNumber = r - 1);
                                          var s = e.filter;
                                          (s.fromBlock = e._lastBlockNumber + 1), (s.toBlock = r);
                                          var a = s.toBlock - i._maxFilterBlockRange;
                                          a > s.fromBlock && (s.fromBlock = a), s.fromBlock < 0 && (s.fromBlock = 0);
                                          o = i
                                            .getLogs(s)
                                            .then(function (t) {
                                              (e._inflight = !1),
                                                0 !== t.length &&
                                                  t.forEach(function (t) {
                                                    t.blockNumber > e._lastBlockNumber && (e._lastBlockNumber = t.blockNumber),
                                                      (i._emitted["b:" + t.blockHash] = t.blockNumber),
                                                      (i._emitted["t:" + t.transactionHash] = t.blockNumber),
                                                      i.emit(s, t);
                                                  });
                                            })
                                            .catch(function (t) {
                                              i.emit("error", t), (e._inflight = !1);
                                            });
                                          t.push(o);
                                        }
                                    }
                                  }),
                                  (this._lastBlockNumber = r),
                                  Promise.all(t)
                                    .then(function () {
                                      i.emit("didPoll", e);
                                    })
                                    .catch(function (e) {
                                      i.emit("error", e);
                                    }),
                                  [2]
                                );
                            }
                          });
                        });
                      }),
                      (t.prototype.resetEventsBlock = function (e) {
                        (this._lastBlockNumber = e - 1), this.polling && this.poll();
                      }),
                      Object.defineProperty(t.prototype, "network", {
                        get: function () {
                          return this._network;
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      (t.prototype.detectNetwork = function () {
                        return i(this, void 0, void 0, function () {
                          return s(this, function (e) {
                            return [
                              2,
                              w.throwError("provider does not support network detection", E.Logger.errors.UNSUPPORTED_OPERATION, {
                                operation: "provider.detectNetwork"
                              })
                            ];
                          });
                        });
                      }),
                      (t.prototype.getNetwork = function () {
                        return i(this, void 0, void 0, function () {
                          var e, t, r;
                          return s(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return [4, this._ready()];
                              case 1:
                                return (e = n.sent()), [4, this.detectNetwork()];
                              case 2:
                                return (
                                  (t = n.sent()),
                                  e.chainId === t.chainId
                                    ? [3, 5]
                                    : this.anyNetwork
                                    ? ((this._network = t),
                                      (this._lastBlockNumber = -2),
                                      (this._fastBlockNumber = null),
                                      (this._fastBlockNumberPromise = null),
                                      (this._fastQueryDate = 0),
                                      (this._emitted.block = -2),
                                      (this._maxInternalBlockNumber = -1024),
                                      (this._internalBlockNumber = null),
                                      this.emit("network", t, e),
                                      [4, S(0)])
                                    : [3, 4]
                                );
                              case 3:
                                return n.sent(), [2, this._network];
                              case 4:
                                throw (
                                  ((r = w.makeError("underlying network changed", E.Logger.errors.NETWORK_ERROR, {
                                    event: "changed",
                                    network: e,
                                    detectedNetwork: t
                                  })),
                                  this.emit("error", r),
                                  r)
                                );
                              case 5:
                                return [2, e];
                            }
                          });
                        });
                      }),
                      Object.defineProperty(t.prototype, "blockNumber", {
                        get: function () {
                          var e = this;
                          return (
                            this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
                              function (t) {
                                e._setFastBlockNumber(t);
                              },
                              function (e) {}
                            ),
                            null != this._fastBlockNumber ? this._fastBlockNumber : -1
                          );
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      Object.defineProperty(t.prototype, "polling", {
                        get: function () {
                          return null != this._poller;
                        },
                        set: function (e) {
                          var t = this;
                          e && !this._poller
                            ? ((this._poller = setInterval(function () {
                                t.poll();
                              }, this.pollingInterval)),
                              this._bootstrapPoll ||
                                (this._bootstrapPoll = setTimeout(function () {
                                  t.poll(),
                                    (t._bootstrapPoll = setTimeout(function () {
                                      t._poller || t.poll(), (t._bootstrapPoll = null);
                                    }, t.pollingInterval));
                                }, 0)))
                            : !e && this._poller && (clearInterval(this._poller), (this._poller = null));
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      Object.defineProperty(t.prototype, "pollingInterval", {
                        get: function () {
                          return this._pollingInterval;
                        },
                        set: function (e) {
                          var t = this;
                          if ("number" != typeof e || e <= 0 || parseInt(String(e)) != e) throw new Error("invalid polling interval");
                          (this._pollingInterval = e),
                            this._poller &&
                              (clearInterval(this._poller),
                              (this._poller = setInterval(function () {
                                t.poll();
                              }, this._pollingInterval)));
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      (t.prototype._getFastBlockNumber = function () {
                        var e = this,
                          t = R();
                        return (
                          t - this._fastQueryDate > 2 * this._pollingInterval &&
                            ((this._fastQueryDate = t),
                            (this._fastBlockNumberPromise = this.getBlockNumber().then(function (t) {
                              return (null == e._fastBlockNumber || t > e._fastBlockNumber) && (e._fastBlockNumber = t), e._fastBlockNumber;
                            }))),
                          this._fastBlockNumberPromise
                        );
                      }),
                      (t.prototype._setFastBlockNumber = function (e) {
                        (null != this._fastBlockNumber && e < this._fastBlockNumber) ||
                          ((this._fastQueryDate = R()),
                          (null == this._fastBlockNumber || e > this._fastBlockNumber) &&
                            ((this._fastBlockNumber = e), (this._fastBlockNumberPromise = Promise.resolve(e))));
                      }),
                      (t.prototype.waitForTransaction = function (e, t, r) {
                        return i(this, void 0, void 0, function () {
                          return s(this, function (n) {
                            return [2, this._waitForTransaction(e, null == t ? 1 : t, r || 0, null)];
                          });
                        });
                      }),
                      (t.prototype._waitForTransaction = function (e, t, r, n) {
                        return i(this, void 0, void 0, function () {
                          var o,
                            a = this;
                          return s(this, function (c) {
                            switch (c.label) {
                              case 0:
                                return [4, this.getTransactionReceipt(e)];
                              case 1:
                                return ((o = c.sent()) ? o.confirmations : 0) >= t
                                  ? [2, o]
                                  : [
                                      2,
                                      new Promise(function (o, c) {
                                        var u = [],
                                          l = !1,
                                          d = function () {
                                            return (
                                              !!l ||
                                              ((l = !0),
                                              u.forEach(function (e) {
                                                e();
                                              }),
                                              !1)
                                            );
                                          },
                                          p = function (e) {
                                            e.confirmations < t || d() || o(e);
                                          };
                                        if (
                                          (a.on(e, p),
                                          u.push(function () {
                                            a.removeListener(e, p);
                                          }),
                                          n)
                                        ) {
                                          var h = n.startBlock,
                                            f = null,
                                            g = function (r) {
                                              return i(a, void 0, void 0, function () {
                                                var o = this;
                                                return s(this, function (a) {
                                                  switch (a.label) {
                                                    case 0:
                                                      return l ? [2] : [4, S(1e3)];
                                                    case 1:
                                                      return (
                                                        a.sent(),
                                                        this.getTransactionCount(n.from).then(
                                                          function (a) {
                                                            return i(o, void 0, void 0, function () {
                                                              var o, i, u, p, m, y;
                                                              return s(this, function (s) {
                                                                switch (s.label) {
                                                                  case 0:
                                                                    return l ? [2] : a <= n.nonce ? ((h = r), [3, 9]) : [3, 1];
                                                                  case 1:
                                                                    return [4, this.getTransaction(e)];
                                                                  case 2:
                                                                    if ((o = s.sent()) && null != o.blockNumber) return [2];
                                                                    null == f && (f = h - 3) < n.startBlock && (f = n.startBlock),
                                                                      (s.label = 3);
                                                                  case 3:
                                                                    return f <= r
                                                                      ? l
                                                                        ? [2]
                                                                        : [4, this.getBlockWithTransactions(f)]
                                                                      : [3, 9];
                                                                  case 4:
                                                                    (i = s.sent()), (u = 0), (s.label = 5);
                                                                  case 5:
                                                                    return u < i.transactions.length
                                                                      ? (p = i.transactions[u]).hash === e
                                                                        ? [2]
                                                                        : p.from !== n.from || p.nonce !== n.nonce
                                                                        ? [3, 7]
                                                                        : l
                                                                        ? [2]
                                                                        : [4, this.waitForTransaction(p.hash, t)]
                                                                      : [3, 8];
                                                                  case 6:
                                                                    return (
                                                                      (m = s.sent()),
                                                                      d()
                                                                        ? [2]
                                                                        : ((y = "replaced"),
                                                                          p.data === n.data && p.to === n.to && p.value.eq(n.value)
                                                                            ? (y = "repriced")
                                                                            : "0x" === p.data &&
                                                                              p.from === p.to &&
                                                                              p.value.isZero() &&
                                                                              (y = "cancelled"),
                                                                          c(
                                                                            w.makeError(
                                                                              "transaction was replaced",
                                                                              E.Logger.errors.TRANSACTION_REPLACED,
                                                                              {
                                                                                cancelled: "replaced" === y || "cancelled" === y,
                                                                                reason: y,
                                                                                replacement: this._wrapTransaction(p),
                                                                                hash: e,
                                                                                receipt: m
                                                                              }
                                                                            )
                                                                          ),
                                                                          [2])
                                                                    );
                                                                  case 7:
                                                                    return u++, [3, 5];
                                                                  case 8:
                                                                    return f++, [3, 3];
                                                                  case 9:
                                                                    return l || this.once("block", g), [2];
                                                                }
                                                              });
                                                            });
                                                          },
                                                          function (e) {
                                                            l || o.once("block", g);
                                                          }
                                                        ),
                                                        [2]
                                                      );
                                                  }
                                                });
                                              });
                                            };
                                          if (l) return;
                                          a.once("block", g),
                                            u.push(function () {
                                              a.removeListener("block", g);
                                            });
                                        }
                                        if ("number" == typeof r && r > 0) {
                                          var m = setTimeout(function () {
                                            d() || c(w.makeError("timeout exceeded", E.Logger.errors.TIMEOUT, { timeout: r }));
                                          }, r);
                                          m.unref && m.unref(),
                                            u.push(function () {
                                              clearTimeout(m);
                                            });
                                        }
                                      })
                                    ];
                            }
                          });
                        });
                      }),
                      (t.prototype.getBlockNumber = function () {
                        return i(this, void 0, void 0, function () {
                          return s(this, function (e) {
                            return [2, this._getInternalBlockNumber(0)];
                          });
                        });
                      }),
                      (t.prototype.getGasPrice = function () {
                        return i(this, void 0, void 0, function () {
                          var e;
                          return s(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return t.sent(), [4, this.perform("getGasPrice", {})];
                              case 2:
                                e = t.sent();
                                try {
                                  return [2, d.BigNumber.from(e)];
                                } catch (t) {
                                  return [
                                    2,
                                    w.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                      method: "getGasPrice",
                                      result: e,
                                      error: t
                                    })
                                  ];
                                }
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype.getBalance = function (e, t) {
                        return i(this, void 0, void 0, function () {
                          var r, n;
                          return s(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return (
                                  o.sent(), [4, (0, m.resolveProperties)({ address: this._getAddress(e), blockTag: this._getBlockTag(t) })]
                                );
                              case 2:
                                return (r = o.sent()), [4, this.perform("getBalance", r)];
                              case 3:
                                n = o.sent();
                                try {
                                  return [2, d.BigNumber.from(n)];
                                } catch (e) {
                                  return [
                                    2,
                                    w.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                      method: "getBalance",
                                      params: r,
                                      result: n,
                                      error: e
                                    })
                                  ];
                                }
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype.getTransactionCount = function (e, t) {
                        return i(this, void 0, void 0, function () {
                          var r, n;
                          return s(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return (
                                  o.sent(), [4, (0, m.resolveProperties)({ address: this._getAddress(e), blockTag: this._getBlockTag(t) })]
                                );
                              case 2:
                                return (r = o.sent()), [4, this.perform("getTransactionCount", r)];
                              case 3:
                                n = o.sent();
                                try {
                                  return [2, d.BigNumber.from(n).toNumber()];
                                } catch (e) {
                                  return [
                                    2,
                                    w.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                      method: "getTransactionCount",
                                      params: r,
                                      result: n,
                                      error: e
                                    })
                                  ];
                                }
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype.getCode = function (e, t) {
                        return i(this, void 0, void 0, function () {
                          var r, n;
                          return s(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return (
                                  o.sent(), [4, (0, m.resolveProperties)({ address: this._getAddress(e), blockTag: this._getBlockTag(t) })]
                                );
                              case 2:
                                return (r = o.sent()), [4, this.perform("getCode", r)];
                              case 3:
                                n = o.sent();
                                try {
                                  return [2, (0, p.hexlify)(n)];
                                } catch (e) {
                                  return [
                                    2,
                                    w.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                      method: "getCode",
                                      params: r,
                                      result: n,
                                      error: e
                                    })
                                  ];
                                }
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype.getStorageAt = function (e, t, r) {
                        return i(this, void 0, void 0, function () {
                          var n, o;
                          return s(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return (
                                  i.sent(),
                                  [
                                    4,
                                    (0, m.resolveProperties)({
                                      address: this._getAddress(e),
                                      blockTag: this._getBlockTag(r),
                                      position: Promise.resolve(t).then(function (e) {
                                        return (0, p.hexValue)(e);
                                      })
                                    })
                                  ]
                                );
                              case 2:
                                return (n = i.sent()), [4, this.perform("getStorageAt", n)];
                              case 3:
                                o = i.sent();
                                try {
                                  return [2, (0, p.hexlify)(o)];
                                } catch (e) {
                                  return [
                                    2,
                                    w.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                      method: "getStorageAt",
                                      params: n,
                                      result: o,
                                      error: e
                                    })
                                  ];
                                }
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype._wrapTransaction = function (e, t, r) {
                        var n = this;
                        if (null != t && 32 !== (0, p.hexDataLength)(t)) throw new Error("invalid response - sendTransaction");
                        var o = e;
                        return (
                          null != t &&
                            e.hash !== t &&
                            w.throwError("Transaction hash mismatch from Provider.sendTransaction.", E.Logger.errors.UNKNOWN_ERROR, {
                              expectedHash: e.hash,
                              returnedHash: t
                            }),
                          (o.wait = function (t, o) {
                            return i(n, void 0, void 0, function () {
                              var n, i;
                              return s(this, function (s) {
                                switch (s.label) {
                                  case 0:
                                    return (
                                      null == t && (t = 1),
                                      null == o && (o = 0),
                                      (n = undefined),
                                      0 !== t &&
                                        null != r &&
                                        (n = { data: e.data, from: e.from, nonce: e.nonce, to: e.to, value: e.value, startBlock: r }),
                                      [4, this._waitForTransaction(e.hash, t, o, n)]
                                    );
                                  case 1:
                                    return null == (i = s.sent()) && 0 === t
                                      ? [2, null]
                                      : ((this._emitted["t:" + e.hash] = i.blockNumber),
                                        0 === i.status &&
                                          w.throwError("transaction failed", E.Logger.errors.CALL_EXCEPTION, {
                                            transactionHash: e.hash,
                                            transaction: e,
                                            receipt: i
                                          }),
                                        [2, i]);
                                }
                              });
                            });
                          }),
                          o
                        );
                      }),
                      (t.prototype.sendTransaction = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t, r, n, o, i;
                          return s(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return (
                                  s.sent(),
                                  [
                                    4,
                                    Promise.resolve(e).then(function (e) {
                                      return (0, p.hexlify)(e);
                                    })
                                  ]
                                );
                              case 2:
                                return (
                                  (t = s.sent()),
                                  null == (r = this.formatter.transaction(e)).confirmations && (r.confirmations = 0),
                                  [4, this._getInternalBlockNumber(100 + 2 * this.pollingInterval)]
                                );
                              case 3:
                                (n = s.sent()), (s.label = 4);
                              case 4:
                                return s.trys.push([4, 6, , 7]), [4, this.perform("sendTransaction", { signedTransaction: t })];
                              case 5:
                                return (o = s.sent()), [2, this._wrapTransaction(r, o, n)];
                              case 6:
                                throw (((i = s.sent()).transaction = r), (i.transactionHash = r.hash), i);
                              case 7:
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype._getTransactionRequest = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t,
                            r,
                            n,
                            o,
                            i = this;
                          return s(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return [4, e];
                              case 1:
                                return (
                                  (t = s.sent()),
                                  (r = {}),
                                  ["from", "to"].forEach(function (e) {
                                    null != t[e] &&
                                      (r[e] = Promise.resolve(t[e]).then(function (e) {
                                        return e ? i._getAddress(e) : null;
                                      }));
                                  }),
                                  ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach(function (e) {
                                    null != t[e] &&
                                      (r[e] = Promise.resolve(t[e]).then(function (e) {
                                        return e ? d.BigNumber.from(e) : null;
                                      }));
                                  }),
                                  ["type"].forEach(function (e) {
                                    null != t[e] &&
                                      (r[e] = Promise.resolve(t[e]).then(function (e) {
                                        return null != e ? e : null;
                                      }));
                                  }),
                                  t.accessList && (r.accessList = this.formatter.accessList(t.accessList)),
                                  ["data"].forEach(function (e) {
                                    null != t[e] &&
                                      (r[e] = Promise.resolve(t[e]).then(function (e) {
                                        return e ? (0, p.hexlify)(e) : null;
                                      }));
                                  }),
                                  (o = (n = this.formatter).transactionRequest),
                                  [4, (0, m.resolveProperties)(r)]
                                );
                              case 2:
                                return [2, o.apply(n, [s.sent()])];
                            }
                          });
                        });
                      }),
                      (t.prototype._getFilter = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t,
                            r,
                            n,
                            o = this;
                          return s(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return [4, e];
                              case 1:
                                return (
                                  (e = i.sent()),
                                  (t = {}),
                                  null != e.address && (t.address = this._getAddress(e.address)),
                                  ["blockHash", "topics"].forEach(function (r) {
                                    null != e[r] && (t[r] = e[r]);
                                  }),
                                  ["fromBlock", "toBlock"].forEach(function (r) {
                                    null != e[r] && (t[r] = o._getBlockTag(e[r]));
                                  }),
                                  (n = (r = this.formatter).filter),
                                  [4, (0, m.resolveProperties)(t)]
                                );
                              case 2:
                                return [2, n.apply(r, [i.sent()])];
                            }
                          });
                        });
                      }),
                      (t.prototype._call = function (e, t, r) {
                        return i(this, void 0, void 0, function () {
                          var n, o, i, a, c, u, l, h, f, g, m, y, _, v, T, b;
                          return s(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return (
                                  r >= 10 &&
                                    w.throwError("CCIP read exceeded maximum redirections", E.Logger.errors.SERVER_ERROR, {
                                      redirects: r,
                                      transaction: e
                                    }),
                                  (n = e.to),
                                  [4, this.perform("call", { transaction: e, blockTag: t })]
                                );
                              case 1:
                                if (
                                  ((o = s.sent()),
                                  !(
                                    r >= 0 &&
                                    "latest" === t &&
                                    null != n &&
                                    "0x556f1830" === o.substring(0, 10) &&
                                    (0, p.hexDataLength)(o) % 32 == 4
                                  ))
                                )
                                  return [3, 5];
                                s.label = 2;
                              case 2:
                                for (
                                  s.trys.push([2, 4, , 5]),
                                    i = (0, p.hexDataSlice)(o, 4),
                                    a = (0, p.hexDataSlice)(i, 0, 32),
                                    d.BigNumber.from(a).eq(n) ||
                                      w.throwError("CCIP Read sender did not match", E.Logger.errors.CALL_EXCEPTION, {
                                        name: "OffchainLookup",
                                        signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                        transaction: e,
                                        data: o
                                      }),
                                    c = [],
                                    u = d.BigNumber.from((0, p.hexDataSlice)(i, 32, 64)).toNumber(),
                                    l = d.BigNumber.from((0, p.hexDataSlice)(i, u, u + 32)).toNumber(),
                                    h = (0, p.hexDataSlice)(i, u + 32),
                                    f = 0;
                                  f < l;
                                  f++
                                )
                                  null == (g = j(h, 32 * f)) &&
                                    w.throwError("CCIP Read contained corrupt URL string", E.Logger.errors.CALL_EXCEPTION, {
                                      name: "OffchainLookup",
                                      signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                      transaction: e,
                                      data: o
                                    }),
                                    c.push(g);
                                return (
                                  (m = B(i, 64)),
                                  d.BigNumber.from((0, p.hexDataSlice)(i, 100, 128)).isZero() ||
                                    w.throwError("CCIP Read callback selector included junk", E.Logger.errors.CALL_EXCEPTION, {
                                      name: "OffchainLookup",
                                      signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                      transaction: e,
                                      data: o
                                    }),
                                  (y = (0, p.hexDataSlice)(i, 96, 100)),
                                  (_ = B(i, 128)),
                                  [4, this.ccipReadFetch(e, m, c)]
                                );
                              case 3:
                                return (
                                  null == (v = s.sent()) &&
                                    w.throwError("CCIP Read disabled or provided no URLs", E.Logger.errors.CALL_EXCEPTION, {
                                      name: "OffchainLookup",
                                      signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                      transaction: e,
                                      data: o
                                    }),
                                  (T = { to: n, data: (0, p.hexConcat)([y, K([v, _])]) }),
                                  [2, this._call(T, t, r + 1)]
                                );
                              case 4:
                                if ((b = s.sent()).code === E.Logger.errors.SERVER_ERROR) throw b;
                                return [3, 5];
                              case 5:
                                try {
                                  return [2, (0, p.hexlify)(o)];
                                } catch (r) {
                                  return [
                                    2,
                                    w.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                      method: "call",
                                      params: { transaction: e, blockTag: t },
                                      result: o,
                                      error: r
                                    })
                                  ];
                                }
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype.call = function (e, t) {
                        return i(this, void 0, void 0, function () {
                          var r;
                          return s(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return (
                                  n.sent(),
                                  [
                                    4,
                                    (0, m.resolveProperties)({
                                      transaction: this._getTransactionRequest(e),
                                      blockTag: this._getBlockTag(t),
                                      ccipReadEnabled: Promise.resolve(e.ccipReadEnabled)
                                    })
                                  ]
                                );
                              case 2:
                                return (r = n.sent()), [2, this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)];
                            }
                          });
                        });
                      }),
                      (t.prototype.estimateGas = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t, r;
                          return s(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return n.sent(), [4, (0, m.resolveProperties)({ transaction: this._getTransactionRequest(e) })];
                              case 2:
                                return (t = n.sent()), [4, this.perform("estimateGas", t)];
                              case 3:
                                r = n.sent();
                                try {
                                  return [2, d.BigNumber.from(r)];
                                } catch (e) {
                                  return [
                                    2,
                                    w.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                      method: "estimateGas",
                                      params: t,
                                      result: r,
                                      error: e
                                    })
                                  ];
                                }
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype._getAddress = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t;
                          return s(this, function (r) {
                            switch (r.label) {
                              case 0:
                                return [4, e];
                              case 1:
                                return (
                                  "string" != typeof (e = r.sent()) && w.throwArgumentError("invalid address or ENS name", "name", e),
                                  [4, this.resolveName(e)]
                                );
                              case 2:
                                return (
                                  null == (t = r.sent()) &&
                                    w.throwError("ENS name not configured", E.Logger.errors.UNSUPPORTED_OPERATION, {
                                      operation: "resolveName(" + JSON.stringify(e) + ")"
                                    }),
                                  [2, t]
                                );
                            }
                          });
                        });
                      }),
                      (t.prototype._getBlock = function (e, t) {
                        return i(this, void 0, void 0, function () {
                          var r,
                            n,
                            o,
                            a = this;
                          return s(this, function (c) {
                            switch (c.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return c.sent(), [4, e];
                              case 2:
                                return (
                                  (e = c.sent()),
                                  (r = -128),
                                  (n = { includeTransactions: !!t }),
                                  (0, p.isHexString)(e, 32) ? ((n.blockHash = e), [3, 6]) : [3, 3]
                                );
                              case 3:
                                return c.trys.push([3, 5, , 6]), (o = n), [4, this._getBlockTag(e)];
                              case 4:
                                return (
                                  (o.blockTag = c.sent()),
                                  (0, p.isHexString)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16)),
                                  [3, 6]
                                );
                              case 5:
                                return c.sent(), w.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", e), [3, 6];
                              case 6:
                                return [
                                  2,
                                  (0, v.poll)(
                                    function () {
                                      return i(a, void 0, void 0, function () {
                                        var e,
                                          o,
                                          i,
                                          a,
                                          c,
                                          u,
                                          l = this;
                                        return s(this, function (s) {
                                          switch (s.label) {
                                            case 0:
                                              return [4, this.perform("getBlock", n)];
                                            case 1:
                                              if (null == (e = s.sent()))
                                                return (null != n.blockHash && null == this._emitted["b:" + n.blockHash]) ||
                                                  (null != n.blockTag && r > this._emitted.block)
                                                  ? [2, null]
                                                  : [2, undefined];
                                              if (!t) return [3, 8];
                                              (o = null), (i = 0), (s.label = 2);
                                            case 2:
                                              return i < e.transactions.length
                                                ? null != (a = e.transactions[i]).blockNumber
                                                  ? [3, 3]
                                                  : ((a.confirmations = 0), [3, 6])
                                                : [3, 7];
                                            case 3:
                                              return null != a.confirmations
                                                ? [3, 6]
                                                : null != o
                                                ? [3, 5]
                                                : [4, this._getInternalBlockNumber(100 + 2 * this.pollingInterval)];
                                            case 4:
                                              (o = s.sent()), (s.label = 5);
                                            case 5:
                                              (c = o - a.blockNumber + 1) <= 0 && (c = 1), (a.confirmations = c), (s.label = 6);
                                            case 6:
                                              return i++, [3, 2];
                                            case 7:
                                              return (
                                                ((u = this.formatter.blockWithTransactions(e)).transactions = u.transactions.map(
                                                  function (e) {
                                                    return l._wrapTransaction(e);
                                                  }
                                                )),
                                                [2, u]
                                              );
                                            case 8:
                                              return [2, this.formatter.block(e)];
                                          }
                                        });
                                      });
                                    },
                                    { oncePoll: this }
                                  )
                                ];
                            }
                          });
                        });
                      }),
                      (t.prototype.getBlock = function (e) {
                        return this._getBlock(e, !1);
                      }),
                      (t.prototype.getBlockWithTransactions = function (e) {
                        return this._getBlock(e, !0);
                      }),
                      (t.prototype.getTransaction = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t,
                            r = this;
                          return s(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return n.sent(), [4, e];
                              case 2:
                                return (
                                  (e = n.sent()),
                                  (t = { transactionHash: this.formatter.hash(e, !0) }),
                                  [
                                    2,
                                    (0, v.poll)(
                                      function () {
                                        return i(r, void 0, void 0, function () {
                                          var r, n, o, i;
                                          return s(this, function (s) {
                                            switch (s.label) {
                                              case 0:
                                                return [4, this.perform("getTransaction", t)];
                                              case 1:
                                                return null == (r = s.sent())
                                                  ? null == this._emitted["t:" + e]
                                                    ? [2, null]
                                                    : [2, undefined]
                                                  : null != (n = this.formatter.transactionResponse(r)).blockNumber
                                                  ? [3, 2]
                                                  : ((n.confirmations = 0), [3, 4]);
                                              case 2:
                                                return null != n.confirmations
                                                  ? [3, 4]
                                                  : [4, this._getInternalBlockNumber(100 + 2 * this.pollingInterval)];
                                              case 3:
                                                (o = s.sent()),
                                                  (i = o - n.blockNumber + 1) <= 0 && (i = 1),
                                                  (n.confirmations = i),
                                                  (s.label = 4);
                                              case 4:
                                                return [2, this._wrapTransaction(n)];
                                            }
                                          });
                                        });
                                      },
                                      { oncePoll: this }
                                    )
                                  ]
                                );
                            }
                          });
                        });
                      }),
                      (t.prototype.getTransactionReceipt = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t,
                            r = this;
                          return s(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return n.sent(), [4, e];
                              case 2:
                                return (
                                  (e = n.sent()),
                                  (t = { transactionHash: this.formatter.hash(e, !0) }),
                                  [
                                    2,
                                    (0, v.poll)(
                                      function () {
                                        return i(r, void 0, void 0, function () {
                                          var r, n, o, i;
                                          return s(this, function (s) {
                                            switch (s.label) {
                                              case 0:
                                                return [4, this.perform("getTransactionReceipt", t)];
                                              case 1:
                                                return null == (r = s.sent())
                                                  ? null == this._emitted["t:" + e]
                                                    ? [2, null]
                                                    : [2, undefined]
                                                  : null == r.blockHash
                                                  ? [2, undefined]
                                                  : null != (n = this.formatter.receipt(r)).blockNumber
                                                  ? [3, 2]
                                                  : ((n.confirmations = 0), [3, 4]);
                                              case 2:
                                                return null != n.confirmations
                                                  ? [3, 4]
                                                  : [4, this._getInternalBlockNumber(100 + 2 * this.pollingInterval)];
                                              case 3:
                                                (o = s.sent()),
                                                  (i = o - n.blockNumber + 1) <= 0 && (i = 1),
                                                  (n.confirmations = i),
                                                  (s.label = 4);
                                              case 4:
                                                return [2, n];
                                            }
                                          });
                                        });
                                      },
                                      { oncePoll: this }
                                    )
                                  ]
                                );
                            }
                          });
                        });
                      }),
                      (t.prototype.getLogs = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t, r;
                          return s(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return n.sent(), [4, (0, m.resolveProperties)({ filter: this._getFilter(e) })];
                              case 2:
                                return (t = n.sent()), [4, this.perform("getLogs", t)];
                              case 3:
                                return (
                                  (r = n.sent()).forEach(function (e) {
                                    null == e.removed && (e.removed = !1);
                                  }),
                                  [2, A.Formatter.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)]
                                );
                            }
                          });
                        });
                      }),
                      (t.prototype.getEtherPrice = function () {
                        return i(this, void 0, void 0, function () {
                          return s(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return [4, this.getNetwork()];
                              case 1:
                                return e.sent(), [2, this.perform("getEtherPrice", {})];
                            }
                          });
                        });
                      }),
                      (t.prototype._getBlockTag = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t;
                          return s(this, function (r) {
                            switch (r.label) {
                              case 0:
                                return [4, e];
                              case 1:
                                return "number" == typeof (e = r.sent()) && e < 0
                                  ? (e % 1 && w.throwArgumentError("invalid BlockTag", "blockTag", e),
                                    [4, this._getInternalBlockNumber(100 + 2 * this.pollingInterval)])
                                  : [3, 3];
                              case 2:
                                return (t = r.sent()), (t += e) < 0 && (t = 0), [2, this.formatter.blockTag(t)];
                              case 3:
                                return [2, this.formatter.blockTag(e)];
                            }
                          });
                        });
                      }),
                      (t.prototype.getResolver = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t, r, n, o;
                          return s(this, function (i) {
                            switch (i.label) {
                              case 0:
                                (t = e), (i.label = 1);
                              case 1:
                                return "" === t || "." === t || ("eth" !== e && "eth" === t)
                                  ? [2, null]
                                  : [4, this._getResolver(t, "getResolver")];
                              case 2:
                                return null == (r = i.sent())
                                  ? [3, 5]
                                  : ((n = new G(this, r, e)), (o = t !== e) ? [4, n.supportsWildcard()] : [3, 4]);
                              case 3:
                                (o = !i.sent()), (i.label = 4);
                              case 4:
                                return o ? [2, null] : [2, n];
                              case 5:
                                return (t = t.split(".").slice(1).join(".")), [3, 1];
                              case 6:
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype._getResolver = function (e, t) {
                        return i(this, void 0, void 0, function () {
                          var r, n;
                          return s(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return null == t && (t = "ENS"), [4, this.getNetwork()];
                              case 1:
                                (r = o.sent()).ensAddress ||
                                  w.throwError("network does not support ENS", E.Logger.errors.UNSUPPORTED_OPERATION, {
                                    operation: t,
                                    network: r.name
                                  }),
                                  (o.label = 2);
                              case 2:
                                return (
                                  o.trys.push([2, 4, , 5]),
                                  [4, this.call({ to: r.ensAddress, data: "0x0178b8bf" + (0, f.namehash)(e).substring(2) })]
                                );
                              case 3:
                                return (n = o.sent()), [2, this.formatter.callAddress(n)];
                              case 4:
                                return o.sent(), [3, 5];
                              case 5:
                                return [2, null];
                            }
                          });
                        });
                      }),
                      (t.prototype.resolveName = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t;
                          return s(this, function (r) {
                            switch (r.label) {
                              case 0:
                                return [4, e];
                              case 1:
                                e = r.sent();
                                try {
                                  return [2, Promise.resolve(this.formatter.address(e))];
                                } catch (t) {
                                  if ((0, p.isHexString)(e)) throw t;
                                }
                                return (
                                  "string" != typeof e && w.throwArgumentError("invalid ENS name", "name", e), [4, this.getResolver(e)]
                                );
                              case 2:
                                return (t = r.sent()) ? [4, t.getAddress()] : [2, null];
                              case 3:
                                return [2, r.sent()];
                            }
                          });
                        });
                      }),
                      (t.prototype.lookupAddress = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t, r, n, o;
                          return s(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return [4, e];
                              case 1:
                                return (
                                  (e = i.sent()),
                                  (e = this.formatter.address(e)),
                                  (t = e.substring(2).toLowerCase() + ".addr.reverse"),
                                  [4, this._getResolver(t, "lookupAddress")]
                                );
                              case 2:
                                return null == (r = i.sent())
                                  ? [2, null]
                                  : ((o = j), [4, this.call({ to: r, data: "0x691f3431" + (0, f.namehash)(t).substring(2) })]);
                              case 3:
                                return (n = o.apply(void 0, [i.sent(), 0])), [4, this.resolveName(n)];
                              case 4:
                                return i.sent() != e ? [2, null] : [2, n];
                            }
                          });
                        });
                      }),
                      (t.prototype.getAvatar = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t, r, n, o, i, a, c, u, l, d;
                          return s(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return (
                                  (t = null),
                                  (0, p.isHexString)(e)
                                    ? ((r = this.formatter.address(e)),
                                      (n = r.substring(2).toLowerCase() + ".addr.reverse"),
                                      [4, this._getResolver(n, "getAvatar")])
                                    : [3, 10]
                                );
                              case 1:
                                if (!(o = s.sent())) return [2, null];
                                (t = new G(this, o, n)), (s.label = 2);
                              case 2:
                                return s.trys.push([2, 4, , 5]), [4, t.getAvatar()];
                              case 3:
                                return (i = s.sent()) ? [2, i.url] : [3, 5];
                              case 4:
                                if ((a = s.sent()).code !== E.Logger.errors.CALL_EXCEPTION) throw a;
                                return [3, 5];
                              case 5:
                                return (
                                  s.trys.push([5, 8, , 9]),
                                  (u = j),
                                  [4, this.call({ to: o, data: "0x691f3431" + (0, f.namehash)(n).substring(2) })]
                                );
                              case 6:
                                return (c = u.apply(void 0, [s.sent(), 0])), [4, this.getResolver(c)];
                              case 7:
                                return (t = s.sent()), [3, 9];
                              case 8:
                                if ((l = s.sent()).code !== E.Logger.errors.CALL_EXCEPTION) throw l;
                                return [2, null];
                              case 9:
                                return [3, 12];
                              case 10:
                                return [4, this.getResolver(e)];
                              case 11:
                                if (!(t = s.sent())) return [2, null];
                                s.label = 12;
                              case 12:
                                return [4, t.getAvatar()];
                              case 13:
                                return null == (d = s.sent()) ? [2, null] : [2, d.url];
                            }
                          });
                        });
                      }),
                      (t.prototype.perform = function (e, t) {
                        return w.throwError(e + " not implemented", E.Logger.errors.NOT_IMPLEMENTED, { operation: e });
                      }),
                      (t.prototype._startEvent = function (e) {
                        this.polling =
                          this._events.filter(function (e) {
                            return e.pollable();
                          }).length > 0;
                      }),
                      (t.prototype._stopEvent = function (e) {
                        this.polling =
                          this._events.filter(function (e) {
                            return e.pollable();
                          }).length > 0;
                      }),
                      (t.prototype._addEventListener = function (e, t, r) {
                        var n = new k(O(e), t, r);
                        return this._events.push(n), this._startEvent(n), this;
                      }),
                      (t.prototype.on = function (e, t) {
                        return this._addEventListener(e, t, !1);
                      }),
                      (t.prototype.once = function (e, t) {
                        return this._addEventListener(e, t, !0);
                      }),
                      (t.prototype.emit = function (e) {
                        for (var t = this, r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                        var o = !1,
                          i = [],
                          s = O(e);
                        return (
                          (this._events = this._events.filter(function (e) {
                            return (
                              e.tag !== s ||
                              (setTimeout(function () {
                                e.listener.apply(t, r);
                              }, 0),
                              (o = !0),
                              !e.once || (i.push(e), !1))
                            );
                          })),
                          i.forEach(function (e) {
                            t._stopEvent(e);
                          }),
                          o
                        );
                      }),
                      (t.prototype.listenerCount = function (e) {
                        if (!e) return this._events.length;
                        var t = O(e);
                        return this._events.filter(function (e) {
                          return e.tag === t;
                        }).length;
                      }),
                      (t.prototype.listeners = function (e) {
                        if (null == e)
                          return this._events.map(function (e) {
                            return e.listener;
                          });
                        var t = O(e);
                        return this._events
                          .filter(function (e) {
                            return e.tag === t;
                          })
                          .map(function (e) {
                            return e.listener;
                          });
                      }),
                      (t.prototype.off = function (e, t) {
                        var r = this;
                        if (null == t) return this.removeAllListeners(e);
                        var n = [],
                          o = !1,
                          i = O(e);
                        return (
                          (this._events = this._events.filter(function (e) {
                            return e.tag !== i || e.listener != t || !!o || ((o = !0), n.push(e), !1);
                          })),
                          n.forEach(function (e) {
                            r._stopEvent(e);
                          }),
                          this
                        );
                      }),
                      (t.prototype.removeAllListeners = function (e) {
                        var t = this,
                          r = [];
                        if (null == e) (r = this._events), (this._events = []);
                        else {
                          var n = O(e);
                          this._events = this._events.filter(function (e) {
                            return e.tag !== n || (r.push(e), !1);
                          });
                        }
                        return (
                          r.forEach(function (e) {
                            t._stopEvent(e);
                          }),
                          this
                        );
                      }),
                      t
                    );
                  })(c.Provider);
                r.BaseProvider = q;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/base-provider.js" }
    ],
    [
      488,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.IpcProvider = void 0);
                r.IpcProvider = null;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/browser-ipc-provider.js" }
    ],
    [
      489,
      { "./_version": 484, "@ethersproject/logger": 477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.WebSocket = void 0);
                var n = e("@ethersproject/logger"),
                  o = e("./_version"),
                  i = null;
                r.WebSocket = i;
                try {
                  if (((r.WebSocket = i = WebSocket), null == i)) throw new Error("inject please");
                } catch (e) {
                  var s = new n.Logger(o.version);
                  r.WebSocket = i = function () {
                    s.throwError("WebSockets not supported in this environment", n.Logger.errors.UNSUPPORTED_OPERATION, {
                      operation: "new WebSocket()"
                    });
                  };
                }
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/browser-ws.js" }
    ],
    [
      490,
      { "./_version": 484, "./url-json-rpc-provider": 500, "@ethersproject/logger": 477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    }),
                  i =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  s =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        o,
                        i,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: []
                        };
                      return (
                        (i = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                                    !(o = o.call(n, i[1])).done)
                                )
                                  return o;
                                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;
                                  case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                  case 5:
                                    s.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      s = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                      s.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                      (s.label = o[1]), (o = i);
                                      break;
                                    }
                                    if (o && s.label < o[2]) {
                                      (s.label = o[2]), s.ops.push(i);
                                      break;
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                i = t.call(e, s);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = o = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.CloudflareProvider = void 0);
                var a = e("./url-json-rpc-provider"),
                  c = e("@ethersproject/logger"),
                  u = e("./_version"),
                  l = new c.Logger(u.version),
                  d = (function (e) {
                    function t() {
                      return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                      o(t, e),
                      (t.getApiKey = function (e) {
                        return null != e && l.throwArgumentError("apiKey not supported for cloudflare", "apiKey", e), null;
                      }),
                      (t.getUrl = function (e, t) {
                        var r = null;
                        if ("homestead" === e.name) r = "https://cloudflare-eth.com/";
                        else l.throwArgumentError("unsupported network", "network", arguments[0]);
                        return r;
                      }),
                      (t.prototype.perform = function (t, r) {
                        return i(this, void 0, void 0, function () {
                          return s(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return "getBlockNumber" !== t
                                  ? [3, 2]
                                  : [4, e.prototype.perform.call(this, "getBlock", { blockTag: "latest" })];
                              case 1:
                                return [2, n.sent().number];
                              case 2:
                                return [2, e.prototype.perform.call(this, t, r)];
                            }
                          });
                        });
                      }),
                      t
                    );
                  })(a.UrlJsonRpcProvider);
                r.CloudflareProvider = d;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/cloudflare-provider.js" }
    ],
    [
      491,
      {
        "./_version": 484,
        "./base-provider": 487,
        "./formatter": 493,
        "@ethersproject/bytes": 448,
        "@ethersproject/logger": 477,
        "@ethersproject/properties": 483,
        "@ethersproject/transactions": 524,
        "@ethersproject/web": 531
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    }),
                  i =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  s =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        o,
                        i,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: []
                        };
                      return (
                        (i = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                                    !(o = o.call(n, i[1])).done)
                                )
                                  return o;
                                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;
                                  case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                  case 5:
                                    s.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      s = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                      s.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                      (s.label = o[1]), (o = i);
                                      break;
                                    }
                                    if (o && s.label < o[2]) {
                                      (s.label = o[2]), s.ops.push(i);
                                      break;
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                i = t.call(e, s);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = o = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.EtherscanProvider = void 0);
                var a = e("@ethersproject/bytes"),
                  c = e("@ethersproject/properties"),
                  u = e("@ethersproject/transactions"),
                  l = e("@ethersproject/web"),
                  d = e("./formatter"),
                  p = e("@ethersproject/logger"),
                  h = e("./_version"),
                  f = new p.Logger(h.version);
                function g(e) {
                  var t = {};
                  for (var r in e)
                    if (null != e[r]) {
                      var n = e[r];
                      ("type" === r && 0 === n) ||
                        ((n = { type: !0, gasLimit: !0, gasPrice: !0, maxFeePerGs: !0, maxPriorityFeePerGas: !0, nonce: !0, value: !0 }[r]
                          ? (0, a.hexValue)((0, a.hexlify)(n))
                          : "accessList" === r
                          ? "[" +
                            (0, u.accessListify)(n)
                              .map(function (e) {
                                return '{address:"' + e.address + '",storageKeys:["' + e.storageKeys.join('","') + '"]}';
                              })
                              .join(",") +
                            "]"
                          : (0, a.hexlify)(n)),
                        (t[r] = n));
                    }
                  return t;
                }
                function m(e) {
                  if (0 == e.status && ("No records found" === e.message || "No transactions found" === e.message)) return e.result;
                  if (1 != e.status || "string" != typeof e.message || !e.message.match(/^OK/)) {
                    var t = new Error("invalid response");
                    throw (
                      ((t.result = JSON.stringify(e)),
                      (e.result || "").toLowerCase().indexOf("rate limit") >= 0 && (t.throttleRetry = !0),
                      t)
                    );
                  }
                  return e.result;
                }
                function y(e) {
                  if (e && 0 == e.status && "NOTOK" == e.message && (e.result || "").toLowerCase().indexOf("rate limit") >= 0)
                    throw (((t = new Error("throttled response")).result = JSON.stringify(e)), (t.throttleRetry = !0), t);
                  if ("2.0" != e.jsonrpc) throw (((t = new Error("invalid response")).result = JSON.stringify(e)), t);
                  if (e.error) {
                    var t = new Error(e.error.message || "unknown error");
                    throw (e.error.code && (t.code = e.error.code), e.error.data && (t.data = e.error.data), t);
                  }
                  return e.result;
                }
                function _(e) {
                  if ("pending" === e) throw new Error("pending not supported");
                  return "latest" === e ? e : parseInt(e.substring(2), 16);
                }
                function v(e, t, r) {
                  if ("call" === e && t.code === p.Logger.errors.SERVER_ERROR) {
                    var n = t.error;
                    if (n && (n.message.match(/reverted/i) || n.message.match(/VM execution error/i))) {
                      var o = n.data;
                      if ((o && (o = "0x" + o.replace(/^.*0x/i, "")), (0, a.isHexString)(o))) return o;
                      f.throwError("missing revert data in call exception", p.Logger.errors.CALL_EXCEPTION, { error: t, data: "0x" });
                    }
                  }
                  var i = t.message;
                  throw (
                    (t.code === p.Logger.errors.SERVER_ERROR &&
                      (t.error && "string" == typeof t.error.message
                        ? (i = t.error.message)
                        : "string" == typeof t.body
                        ? (i = t.body)
                        : "string" == typeof t.responseText && (i = t.responseText)),
                    (i = (i || "").toLowerCase()).match(/insufficient funds/) &&
                      f.throwError("insufficient funds for intrinsic transaction cost", p.Logger.errors.INSUFFICIENT_FUNDS, {
                        error: t,
                        method: e,
                        transaction: r
                      }),
                    i.match(/same hash was already imported|transaction nonce is too low|nonce too low/) &&
                      f.throwError("nonce has already been used", p.Logger.errors.NONCE_EXPIRED, { error: t, method: e, transaction: r }),
                    i.match(/another transaction with same nonce/) &&
                      f.throwError("replacement fee too low", p.Logger.errors.REPLACEMENT_UNDERPRICED, {
                        error: t,
                        method: e,
                        transaction: r
                      }),
                    i.match(/execution failed due to an exception|execution reverted/) &&
                      f.throwError(
                        "cannot estimate gas; transaction may fail or may require manual gas limit",
                        p.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
                        { error: t, method: e, transaction: r }
                      ),
                    t)
                  );
                }
                var T = (function (e) {
                  function t(t, r) {
                    var n = e.call(this, t) || this;
                    return (0, c.defineReadOnly)(n, "baseUrl", n.getBaseUrl()), (0, c.defineReadOnly)(n, "apiKey", r || null), n;
                  }
                  return (
                    o(t, e),
                    (t.prototype.getBaseUrl = function () {
                      switch (this.network ? this.network.name : "invalid") {
                        case "homestead":
                          return "https://api.etherscan.io";
                        case "goerli":
                          return "https://api-goerli.etherscan.io";
                        case "sepolia":
                          return "https://api-sepolia.etherscan.io";
                        case "matic":
                          return "https://api.polygonscan.com";
                        case "maticmum":
                          return "https://api-testnet.polygonscan.com";
                        case "arbitrum":
                          return "https://api.arbiscan.io";
                        case "arbitrum-goerli":
                          return "https://api-goerli.arbiscan.io";
                        case "optimism":
                          return "https://api-optimistic.etherscan.io";
                        case "optimism-goerli":
                          return "https://api-goerli-optimistic.etherscan.io";
                      }
                      return f.throwArgumentError("unsupported network", "network", this.network.name);
                    }),
                    (t.prototype.getUrl = function (e, t) {
                      var r = Object.keys(t).reduce(function (e, r) {
                          var n = t[r];
                          return null != n && (e += "&" + r + "=" + n), e;
                        }, ""),
                        n = this.apiKey ? "&apikey=" + this.apiKey : "";
                      return this.baseUrl + "/api?module=" + e + r + n;
                    }),
                    (t.prototype.getPostUrl = function () {
                      return this.baseUrl + "/api";
                    }),
                    (t.prototype.getPostData = function (e, t) {
                      return (t.module = e), (t.apikey = this.apiKey), t;
                    }),
                    (t.prototype.fetch = function (e, t, r) {
                      return i(this, void 0, void 0, function () {
                        var n,
                          o,
                          i,
                          a,
                          u,
                          p,
                          h = this;
                        return s(this, function (s) {
                          switch (s.label) {
                            case 0:
                              return (
                                (n = r ? this.getPostUrl() : this.getUrl(e, t)),
                                (o = r ? this.getPostData(e, t) : null),
                                (i = "proxy" === e ? y : m),
                                this.emit("debug", { action: "request", request: n, provider: this }),
                                (a = {
                                  url: n,
                                  throttleSlotInterval: 1e3,
                                  throttleCallback: function (e, t) {
                                    return h.isCommunityResource() && (0, d.showThrottleMessage)(), Promise.resolve(!0);
                                  }
                                }),
                                (u = null),
                                o &&
                                  ((a.headers = { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" }),
                                  (u = Object.keys(o)
                                    .map(function (e) {
                                      return e + "=" + o[e];
                                    })
                                    .join("&"))),
                                [4, (0, l.fetchJson)(a, u, i || y)]
                              );
                            case 1:
                              return (
                                (p = s.sent()),
                                this.emit("debug", { action: "response", request: n, response: (0, c.deepCopy)(p), provider: this }),
                                [2, p]
                              );
                          }
                        });
                      });
                    }),
                    (t.prototype.detectNetwork = function () {
                      return i(this, void 0, void 0, function () {
                        return s(this, function (e) {
                          return [2, this.network];
                        });
                      });
                    }),
                    (t.prototype.perform = function (t, r) {
                      return i(this, void 0, void 0, function () {
                        var n, o, i, a, c, u, l, d, h;
                        return s(this, function (s) {
                          switch (s.label) {
                            case 0:
                              switch (t) {
                                case "getBlockNumber":
                                  return [3, 1];
                                case "getGasPrice":
                                  return [3, 2];
                                case "getBalance":
                                  return [3, 3];
                                case "getTransactionCount":
                                  return [3, 4];
                                case "getCode":
                                  return [3, 5];
                                case "getStorageAt":
                                  return [3, 6];
                                case "sendTransaction":
                                  return [3, 7];
                                case "getBlock":
                                  return [3, 8];
                                case "getTransaction":
                                  return [3, 9];
                                case "getTransactionReceipt":
                                  return [3, 10];
                                case "call":
                                  return [3, 11];
                                case "estimateGas":
                                  return [3, 15];
                                case "getLogs":
                                  return [3, 19];
                                case "getEtherPrice":
                                  return [3, 26];
                              }
                              return [3, 28];
                            case 1:
                              return [2, this.fetch("proxy", { action: "eth_blockNumber" })];
                            case 2:
                              return [2, this.fetch("proxy", { action: "eth_gasPrice" })];
                            case 3:
                              return [2, this.fetch("account", { action: "balance", address: r.address, tag: r.blockTag })];
                            case 4:
                              return [2, this.fetch("proxy", { action: "eth_getTransactionCount", address: r.address, tag: r.blockTag })];
                            case 5:
                              return [2, this.fetch("proxy", { action: "eth_getCode", address: r.address, tag: r.blockTag })];
                            case 6:
                              return [
                                2,
                                this.fetch("proxy", {
                                  action: "eth_getStorageAt",
                                  address: r.address,
                                  position: r.position,
                                  tag: r.blockTag
                                })
                              ];
                            case 7:
                              return [
                                2,
                                this.fetch("proxy", { action: "eth_sendRawTransaction", hex: r.signedTransaction }, !0).catch(function (e) {
                                  return v("sendTransaction", e, r.signedTransaction);
                                })
                              ];
                            case 8:
                              if (r.blockTag)
                                return [
                                  2,
                                  this.fetch("proxy", {
                                    action: "eth_getBlockByNumber",
                                    tag: r.blockTag,
                                    boolean: r.includeTransactions ? "true" : "false"
                                  })
                                ];
                              throw new Error("getBlock by blockHash not implemented");
                            case 9:
                              return [2, this.fetch("proxy", { action: "eth_getTransactionByHash", txhash: r.transactionHash })];
                            case 10:
                              return [2, this.fetch("proxy", { action: "eth_getTransactionReceipt", txhash: r.transactionHash })];
                            case 11:
                              if ("latest" !== r.blockTag) throw new Error("EtherscanProvider does not support blockTag for call");
                              ((n = g(r.transaction)).module = "proxy"), (n.action = "eth_call"), (s.label = 12);
                            case 12:
                              return s.trys.push([12, 14, , 15]), [4, this.fetch("proxy", n, !0)];
                            case 13:
                              return [2, s.sent()];
                            case 14:
                              return [2, v("call", s.sent(), r.transaction)];
                            case 15:
                              ((n = g(r.transaction)).module = "proxy"), (n.action = "eth_estimateGas"), (s.label = 16);
                            case 16:
                              return s.trys.push([16, 18, , 19]), [4, this.fetch("proxy", n, !0)];
                            case 17:
                              return [2, s.sent()];
                            case 18:
                              return [2, v("estimateGas", s.sent(), r.transaction)];
                            case 19:
                              return (
                                (o = { action: "getLogs" }),
                                r.filter.fromBlock && (o.fromBlock = _(r.filter.fromBlock)),
                                r.filter.toBlock && (o.toBlock = _(r.filter.toBlock)),
                                r.filter.address && (o.address = r.filter.address),
                                r.filter.topics &&
                                  r.filter.topics.length > 0 &&
                                  (r.filter.topics.length > 1 &&
                                    f.throwError("unsupported topic count", p.Logger.errors.UNSUPPORTED_OPERATION, {
                                      topics: r.filter.topics
                                    }),
                                  1 === r.filter.topics.length &&
                                    (("string" == typeof (i = r.filter.topics[0]) && 66 === i.length) ||
                                      f.throwError("unsupported topic format", p.Logger.errors.UNSUPPORTED_OPERATION, { topic0: i }),
                                    (o.topic0 = i))),
                                [4, this.fetch("logs", o)]
                              );
                            case 20:
                              (a = s.sent()), (c = {}), (u = 0), (s.label = 21);
                            case 21:
                              return u < a.length
                                ? null != (l = a[u]).blockHash
                                  ? [3, 24]
                                  : null != c[l.blockNumber]
                                  ? [3, 23]
                                  : [4, this.getBlock(l.blockNumber)]
                                : [3, 25];
                            case 22:
                              (d = s.sent()) && (c[l.blockNumber] = d.hash), (s.label = 23);
                            case 23:
                              (l.blockHash = c[l.blockNumber]), (s.label = 24);
                            case 24:
                              return u++, [3, 21];
                            case 25:
                              return [2, a];
                            case 26:
                              return "homestead" !== this.network.name
                                ? [2, 0]
                                : ((h = parseFloat), [4, this.fetch("stats", { action: "ethprice" })]);
                            case 27:
                              return [2, h.apply(void 0, [s.sent().ethusd])];
                            case 28:
                              return [3, 29];
                            case 29:
                              return [2, e.prototype.perform.call(this, t, r)];
                          }
                        });
                      });
                    }),
                    (t.prototype.getHistory = function (e, t, r) {
                      return i(this, void 0, void 0, function () {
                        var n,
                          o,
                          i = this;
                        return s(this, function (s) {
                          switch (s.label) {
                            case 0:
                              return (o = { action: "txlist" }), [4, this.resolveName(e)];
                            case 1:
                              return (
                                (o.address = s.sent()),
                                (o.startblock = null == t ? 0 : t),
                                (o.endblock = null == r ? 99999999 : r),
                                (o.sort = "asc"),
                                (n = o),
                                [4, this.fetch("account", n)]
                              );
                            case 2:
                              return [
                                2,
                                s.sent().map(function (e) {
                                  ["contractAddress", "to"].forEach(function (t) {
                                    "" == e[t] && delete e[t];
                                  }),
                                    null == e.creates && null != e.contractAddress && (e.creates = e.contractAddress);
                                  var t = i.formatter.transactionResponse(e);
                                  return e.timeStamp && (t.timestamp = parseInt(e.timeStamp)), t;
                                })
                              ];
                          }
                        });
                      });
                    }),
                    (t.prototype.isCommunityResource = function () {
                      return null == this.apiKey;
                    }),
                    t
                  );
                })(e("./base-provider").BaseProvider);
                r.EtherscanProvider = T;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/etherscan-provider.js" }
    ],
    [
      492,
      {
        "./_version": 484,
        "./base-provider": 487,
        "./formatter": 493,
        "@ethersproject/abstract-provider": 435,
        "@ethersproject/bignumber": 446,
        "@ethersproject/bytes": 448,
        "@ethersproject/logger": 477,
        "@ethersproject/properties": 483,
        "@ethersproject/random": 505,
        "@ethersproject/web": 531
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    }),
                  i =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  s =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        o,
                        i,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: []
                        };
                      return (
                        (i = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                                    !(o = o.call(n, i[1])).done)
                                )
                                  return o;
                                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;
                                  case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                  case 5:
                                    s.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      s = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                      s.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                      (s.label = o[1]), (o = i);
                                      break;
                                    }
                                    if (o && s.label < o[2]) {
                                      (s.label = o[2]), s.ops.push(i);
                                      break;
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                i = t.call(e, s);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = o = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.FallbackProvider = void 0);
                var a = e("@ethersproject/abstract-provider"),
                  c = e("@ethersproject/bignumber"),
                  u = e("@ethersproject/bytes"),
                  l = e("@ethersproject/properties"),
                  d = e("@ethersproject/random"),
                  p = e("@ethersproject/web"),
                  h = e("./base-provider"),
                  f = e("./formatter"),
                  g = e("@ethersproject/logger"),
                  m = e("./_version"),
                  y = new g.Logger(m.version);
                function _() {
                  return new Date().getTime();
                }
                function v(e) {
                  for (var t = null, r = 0; r < e.length; r++) {
                    var n = e[r];
                    if (null == n) return null;
                    t
                      ? (t.name === n.name &&
                          t.chainId === n.chainId &&
                          (t.ensAddress === n.ensAddress || (null == t.ensAddress && null == n.ensAddress))) ||
                        y.throwArgumentError("provider mismatch", "networks", e)
                      : (t = n);
                  }
                  return t;
                }
                function T(e, t) {
                  e = e.slice().sort();
                  var r = Math.floor(e.length / 2);
                  if (e.length % 2) return e[r];
                  var n = e[r - 1],
                    o = e[r];
                  return null != t && Math.abs(n - o) > t ? null : (n + o) / 2;
                }
                function E(e) {
                  if (null === e) return "null";
                  if ("number" == typeof e || "boolean" == typeof e) return JSON.stringify(e);
                  if ("string" == typeof e) return e;
                  if (c.BigNumber.isBigNumber(e)) return e.toString();
                  if (Array.isArray(e))
                    return JSON.stringify(
                      e.map(function (e) {
                        return E(e);
                      })
                    );
                  if ("object" == typeof e) {
                    var t = Object.keys(e);
                    return (
                      t.sort(),
                      "{" +
                        t
                          .map(function (t) {
                            var r = e[t];
                            return (r = "function" == typeof r ? "[function]" : E(r)), JSON.stringify(t) + ":" + r;
                          })
                          .join(",") +
                        "}"
                    );
                  }
                  throw new Error("unknown value type: " + typeof e);
                }
                var b = 1;
                function w(e) {
                  var t = null,
                    r = null,
                    n = new Promise(function (n) {
                      (t = function () {
                        r && (clearTimeout(r), (r = null)), n();
                      }),
                        (r = setTimeout(t, e));
                    });
                  return {
                    cancel: t,
                    getPromise: function () {
                      return n;
                    },
                    wait: function (e) {
                      return (n = n.then(e));
                    }
                  };
                }
                var A = [
                    g.Logger.errors.CALL_EXCEPTION,
                    g.Logger.errors.INSUFFICIENT_FUNDS,
                    g.Logger.errors.NONCE_EXPIRED,
                    g.Logger.errors.REPLACEMENT_UNDERPRICED,
                    g.Logger.errors.UNPREDICTABLE_GAS_LIMIT
                  ],
                  N = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];
                function I(e, t) {
                  var r = { weight: e.weight };
                  return (
                    Object.defineProperty(r, "provider", {
                      get: function () {
                        return e.provider;
                      }
                    }),
                    e.start && (r.start = e.start),
                    t && (r.duration = t - e.start),
                    e.done && (e.error ? (r.error = e.error) : (r.result = e.result || null)),
                    r
                  );
                }
                function O(e, t, r) {
                  var n = E;
                  switch (t) {
                    case "getBlockNumber":
                      return function (t) {
                        var r = t.map(function (e) {
                            return e.result;
                          }),
                          n = T(
                            t.map(function (e) {
                              return e.result;
                            }),
                            2
                          );
                        return null == n
                          ? undefined
                          : ((n = Math.ceil(n)),
                            r.indexOf(n + 1) >= 0 && n++,
                            n >= e._highestBlockNumber && (e._highestBlockNumber = n),
                            e._highestBlockNumber);
                      };
                    case "getGasPrice":
                      return function (e) {
                        var t = e.map(function (e) {
                          return e.result;
                        });
                        return t.sort(), t[Math.floor(t.length / 2)];
                      };
                    case "getEtherPrice":
                      return function (e) {
                        return T(
                          e.map(function (e) {
                            return e.result;
                          })
                        );
                      };
                    case "getBalance":
                    case "getTransactionCount":
                    case "getCode":
                    case "getStorageAt":
                    case "call":
                    case "estimateGas":
                    case "getLogs":
                      break;
                    case "getTransaction":
                    case "getTransactionReceipt":
                      n = function (e) {
                        return null == e ? null : (((e = (0, l.shallowCopy)(e)).confirmations = -1), E(e));
                      };
                      break;
                    case "getBlock":
                      n = r.includeTransactions
                        ? function (e) {
                            return null == e
                              ? null
                              : (((e = (0, l.shallowCopy)(e)).transactions = e.transactions.map(function (e) {
                                  return ((e = (0, l.shallowCopy)(e)).confirmations = -1), e;
                                })),
                                E(e));
                          }
                        : function (e) {
                            return null == e ? null : E(e);
                          };
                      break;
                    default:
                      throw new Error("unknown method: " + t);
                  }
                  return (function (e, t) {
                    return function (r) {
                      var n = {};
                      r.forEach(function (t) {
                        var r = e(t.result);
                        n[r] || (n[r] = { count: 0, result: t.result }), n[r].count++;
                      });
                      for (var o = Object.keys(n), i = 0; i < o.length; i++) {
                        var s = n[o[i]];
                        if (s.count >= t) return s.result;
                      }
                      return undefined;
                    };
                  })(n, e.quorum);
                }
                function R(e, t) {
                  return i(this, void 0, void 0, function () {
                    var r;
                    return s(this, function (n) {
                      return (null != (r = e.provider).blockNumber && r.blockNumber >= t) || -1 === t
                        ? [2, r]
                        : [
                            2,
                            (0, p.poll)(
                              function () {
                                return new Promise(function (n, o) {
                                  setTimeout(function () {
                                    return r.blockNumber >= t ? n(r) : e.cancelled ? n(null) : n(undefined);
                                  }, 0);
                                });
                              },
                              { oncePoll: r }
                            )
                          ];
                    });
                  });
                }
                var S = (function (e) {
                  function t(t, r) {
                    var n = this;
                    0 === t.length && y.throwArgumentError("missing providers", "providers", t);
                    var o = t.map(function (e, t) {
                        if (a.Provider.isProvider(e)) {
                          var r = (0, f.isCommunityResource)(e) ? 2e3 : 750;
                          return Object.freeze({ provider: e, weight: 1, stallTimeout: r, priority: 1 });
                        }
                        var n = (0, l.shallowCopy)(e);
                        null == n.priority && (n.priority = 1),
                          null == n.stallTimeout && (n.stallTimeout = (0, f.isCommunityResource)(e) ? 2e3 : 750),
                          null == n.weight && (n.weight = 1);
                        var o = n.weight;
                        return (
                          (o % 1 || o > 512 || o < 1) &&
                            y.throwArgumentError("invalid weight; must be integer in [1, 512]", "providers[" + t + "].weight", o),
                          Object.freeze(n)
                        );
                      }),
                      i = o.reduce(function (e, t) {
                        return e + t.weight;
                      }, 0);
                    null == r
                      ? (r = i / 2)
                      : r > i && y.throwArgumentError("quorum will always fail; larger than total weight", "quorum", r);
                    var s = v(
                      o.map(function (e) {
                        return e.provider.network;
                      })
                    );
                    return (
                      null == s &&
                        (s = new Promise(function (e, t) {
                          setTimeout(function () {
                            n.detectNetwork().then(e, t);
                          }, 0);
                        })),
                      (n = e.call(this, s) || this),
                      (0, l.defineReadOnly)(n, "providerConfigs", Object.freeze(o)),
                      (0, l.defineReadOnly)(n, "quorum", r),
                      (n._highestBlockNumber = -1),
                      n
                    );
                  }
                  return (
                    o(t, e),
                    (t.prototype.detectNetwork = function () {
                      return i(this, void 0, void 0, function () {
                        return s(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [
                                4,
                                Promise.all(
                                  this.providerConfigs.map(function (e) {
                                    return e.provider.getNetwork();
                                  })
                                )
                              ];
                            case 1:
                              return [2, v(e.sent())];
                          }
                        });
                      });
                    }),
                    (t.prototype.perform = function (e, t) {
                      return i(this, void 0, void 0, function () {
                        var r,
                          n,
                          o,
                          a,
                          c,
                          p,
                          h,
                          f,
                          m,
                          v,
                          T,
                          E = this;
                        return s(this, function (S) {
                          switch (S.label) {
                            case 0:
                              return "sendTransaction" !== e
                                ? [3, 2]
                                : [
                                    4,
                                    Promise.all(
                                      this.providerConfigs.map(function (e) {
                                        return e.provider.sendTransaction(t.signedTransaction).then(
                                          function (e) {
                                            return e.hash;
                                          },
                                          function (e) {
                                            return e;
                                          }
                                        );
                                      })
                                    )
                                  ];
                            case 1:
                              for (r = S.sent(), n = 0; n < r.length; n++) if ("string" == typeof (o = r[n])) return [2, o];
                              throw r[0];
                            case 2:
                              return -1 !== this._highestBlockNumber || "getBlockNumber" === e ? [3, 4] : [4, this.getBlockNumber()];
                            case 3:
                              S.sent(), (S.label = 4);
                            case 4:
                              (a = O(this, e, t)),
                                (c = (0, d.shuffled)(this.providerConfigs.map(l.shallowCopy))).sort(function (e, t) {
                                  return e.priority - t.priority;
                                }),
                                (p = this._highestBlockNumber),
                                (h = 0),
                                (f = !0),
                                (m = function () {
                                  var r, n, o, d, m, T, O;
                                  return s(this, function (S) {
                                    switch (S.label) {
                                      case 0:
                                        for (
                                          r = _(),
                                            n = c
                                              .filter(function (e) {
                                                return e.runner && r - e.start < e.stallTimeout;
                                              })
                                              .reduce(function (e, t) {
                                                return e + t.weight;
                                              }, 0),
                                            o = function () {
                                              var r = c[h++],
                                                o = b++;
                                              (r.start = _()),
                                                (r.staller = w(r.stallTimeout)),
                                                r.staller.wait(function () {
                                                  r.staller = null;
                                                }),
                                                (r.runner = (function (e, t, r, n) {
                                                  return i(this, void 0, void 0, function () {
                                                    var o, i;
                                                    return s(this, function (s) {
                                                      switch (s.label) {
                                                        case 0:
                                                          switch (((o = e.provider), r)) {
                                                            case "getBlockNumber":
                                                            case "getGasPrice":
                                                              return [3, 1];
                                                            case "getEtherPrice":
                                                              return [3, 2];
                                                            case "getBalance":
                                                            case "getTransactionCount":
                                                            case "getCode":
                                                              return [3, 3];
                                                            case "getStorageAt":
                                                              return [3, 6];
                                                            case "getBlock":
                                                              return [3, 9];
                                                            case "call":
                                                            case "estimateGas":
                                                              return [3, 12];
                                                            case "getTransaction":
                                                            case "getTransactionReceipt":
                                                              return [3, 15];
                                                            case "getLogs":
                                                              return [3, 16];
                                                          }
                                                          return [3, 19];
                                                        case 1:
                                                          return [2, o[r]()];
                                                        case 2:
                                                          return o.getEtherPrice ? [2, o.getEtherPrice()] : [3, 19];
                                                        case 3:
                                                          return n.blockTag && (0, u.isHexString)(n.blockTag) ? [4, R(e, t)] : [3, 5];
                                                        case 4:
                                                          (o = s.sent()), (s.label = 5);
                                                        case 5:
                                                          return [2, o[r](n.address, n.blockTag || "latest")];
                                                        case 6:
                                                          return n.blockTag && (0, u.isHexString)(n.blockTag) ? [4, R(e, t)] : [3, 8];
                                                        case 7:
                                                          (o = s.sent()), (s.label = 8);
                                                        case 8:
                                                          return [2, o.getStorageAt(n.address, n.position, n.blockTag || "latest")];
                                                        case 9:
                                                          return n.blockTag && (0, u.isHexString)(n.blockTag) ? [4, R(e, t)] : [3, 11];
                                                        case 10:
                                                          (o = s.sent()), (s.label = 11);
                                                        case 11:
                                                          return [
                                                            2,
                                                            o[n.includeTransactions ? "getBlockWithTransactions" : "getBlock"](
                                                              n.blockTag || n.blockHash
                                                            )
                                                          ];
                                                        case 12:
                                                          return n.blockTag && (0, u.isHexString)(n.blockTag) ? [4, R(e, t)] : [3, 14];
                                                        case 13:
                                                          (o = s.sent()), (s.label = 14);
                                                        case 14:
                                                          return "call" === r && n.blockTag
                                                            ? [2, o[r](n.transaction, n.blockTag)]
                                                            : [2, o[r](n.transaction)];
                                                        case 15:
                                                          return [2, o[r](n.transactionHash)];
                                                        case 16:
                                                          return ((i = n.filter).fromBlock && (0, u.isHexString)(i.fromBlock)) ||
                                                            (i.toBlock && (0, u.isHexString)(i.toBlock))
                                                            ? [4, R(e, t)]
                                                            : [3, 18];
                                                        case 17:
                                                          (o = s.sent()), (s.label = 18);
                                                        case 18:
                                                          return [2, o.getLogs(i)];
                                                        case 19:
                                                          return [
                                                            2,
                                                            y.throwError("unknown method error", g.Logger.errors.UNKNOWN_ERROR, {
                                                              method: r,
                                                              params: n
                                                            })
                                                          ];
                                                      }
                                                    });
                                                  });
                                                })(r, p, e, t).then(
                                                  function (n) {
                                                    (r.done = !0),
                                                      (r.result = n),
                                                      E.listenerCount("debug") &&
                                                        E.emit("debug", {
                                                          action: "request",
                                                          rid: o,
                                                          backend: I(r, _()),
                                                          request: { method: e, params: (0, l.deepCopy)(t) },
                                                          provider: E
                                                        });
                                                  },
                                                  function (n) {
                                                    (r.done = !0),
                                                      (r.error = n),
                                                      E.listenerCount("debug") &&
                                                        E.emit("debug", {
                                                          action: "request",
                                                          rid: o,
                                                          backend: I(r, _()),
                                                          request: { method: e, params: (0, l.deepCopy)(t) },
                                                          provider: E
                                                        });
                                                  }
                                                )),
                                                v.listenerCount("debug") &&
                                                  v.emit("debug", {
                                                    action: "request",
                                                    rid: o,
                                                    backend: I(r, null),
                                                    request: { method: e, params: (0, l.deepCopy)(t) },
                                                    provider: v
                                                  }),
                                                (n += r.weight);
                                            };
                                          n < v.quorum && h < c.length;

                                        )
                                          o();
                                        return (
                                          (d = []),
                                          c.forEach(function (e) {
                                            !e.done && e.runner && (d.push(e.runner), e.staller && d.push(e.staller.getPromise()));
                                          }),
                                          d.length ? [4, Promise.race(d)] : [3, 2]
                                        );
                                      case 1:
                                        S.sent(), (S.label = 2);
                                      case 2:
                                        return (m = c.filter(function (e) {
                                          return e.done && null == e.error;
                                        })).length >= v.quorum
                                          ? (T = a(m)) !== undefined
                                            ? (c.forEach(function (e) {
                                                e.staller && e.staller.cancel(), (e.cancelled = !0);
                                              }),
                                              [2, { value: T }])
                                            : f
                                            ? [3, 4]
                                            : [4, w(100).getPromise()]
                                          : [3, 5];
                                      case 3:
                                        S.sent(), (S.label = 4);
                                      case 4:
                                        (f = !1), (S.label = 5);
                                      case 5:
                                        return (
                                          (O = c.reduce(function (e, t) {
                                            if (!t.done || null == t.error) return e;
                                            var r = t.error.code;
                                            return (
                                              A.indexOf(r) >= 0 &&
                                                (e[r] || (e[r] = { error: t.error, weight: 0 }), (e[r].weight += t.weight)),
                                              e
                                            );
                                          }, {})),
                                          Object.keys(O).forEach(function (e) {
                                            var t = O[e];
                                            if (!(t.weight < E.quorum)) {
                                              c.forEach(function (e) {
                                                e.staller && e.staller.cancel(), (e.cancelled = !0);
                                              });
                                              var r = t.error,
                                                n = {};
                                              N.forEach(function (e) {
                                                null != r[e] && (n[e] = r[e]);
                                              }),
                                                y.throwError(r.reason || r.message, e, n);
                                            }
                                          }),
                                          0 ===
                                          c.filter(function (e) {
                                            return !e.done;
                                          }).length
                                            ? [2, "break"]
                                            : [2]
                                        );
                                    }
                                  });
                                }),
                                (v = this),
                                (S.label = 5);
                            case 5:
                              return [5, m()];
                            case 6:
                              return "object" == typeof (T = S.sent()) ? [2, T.value] : "break" === T ? [3, 7] : [3, 5];
                            case 7:
                              return (
                                c.forEach(function (e) {
                                  e.staller && e.staller.cancel(), (e.cancelled = !0);
                                }),
                                [
                                  2,
                                  y.throwError("failed to meet quorum", g.Logger.errors.SERVER_ERROR, {
                                    method: e,
                                    params: t,
                                    results: c.map(function (e) {
                                      return I(e);
                                    }),
                                    provider: this
                                  })
                                ]
                              );
                          }
                        });
                      });
                    }),
                    t
                  );
                })(h.BaseProvider);
                r.FallbackProvider = S;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/fallback-provider.js" }
    ],
    [
      493,
      {
        "./_version": 484,
        "@ethersproject/address": 439,
        "@ethersproject/bignumber": 446,
        "@ethersproject/bytes": 448,
        "@ethersproject/constants": 452,
        "@ethersproject/logger": 477,
        "@ethersproject/properties": 483,
        "@ethersproject/transactions": 524
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.showThrottleMessage = r.isCommunityResource = r.isCommunityResourcable = r.Formatter = void 0);
                var n = e("@ethersproject/address"),
                  o = e("@ethersproject/bignumber"),
                  i = e("@ethersproject/bytes"),
                  s = e("@ethersproject/constants"),
                  a = e("@ethersproject/properties"),
                  c = e("@ethersproject/transactions"),
                  u = e("@ethersproject/logger"),
                  l = e("./_version"),
                  d = new u.Logger(l.version),
                  p = (function () {
                    function e() {
                      this.formats = this.getDefaultFormats();
                    }
                    return (
                      (e.prototype.getDefaultFormats = function () {
                        var t = this,
                          r = {},
                          n = this.address.bind(this),
                          o = this.bigNumber.bind(this),
                          i = this.blockTag.bind(this),
                          s = this.data.bind(this),
                          c = this.hash.bind(this),
                          u = this.hex.bind(this),
                          l = this.number.bind(this),
                          d = this.type.bind(this);
                        return (
                          (r.transaction = {
                            hash: c,
                            type: d,
                            accessList: e.allowNull(this.accessList.bind(this), null),
                            blockHash: e.allowNull(c, null),
                            blockNumber: e.allowNull(l, null),
                            transactionIndex: e.allowNull(l, null),
                            confirmations: e.allowNull(l, null),
                            from: n,
                            gasPrice: e.allowNull(o),
                            maxPriorityFeePerGas: e.allowNull(o),
                            maxFeePerGas: e.allowNull(o),
                            gasLimit: o,
                            to: e.allowNull(n, null),
                            value: o,
                            nonce: l,
                            data: s,
                            r: e.allowNull(this.uint256),
                            s: e.allowNull(this.uint256),
                            v: e.allowNull(l),
                            creates: e.allowNull(n, null),
                            raw: e.allowNull(s)
                          }),
                          (r.transactionRequest = {
                            from: e.allowNull(n),
                            nonce: e.allowNull(l),
                            gasLimit: e.allowNull(o),
                            gasPrice: e.allowNull(o),
                            maxPriorityFeePerGas: e.allowNull(o),
                            maxFeePerGas: e.allowNull(o),
                            to: e.allowNull(n),
                            value: e.allowNull(o),
                            data: e.allowNull(function (e) {
                              return t.data(e, !0);
                            }),
                            type: e.allowNull(l),
                            accessList: e.allowNull(this.accessList.bind(this), null)
                          }),
                          (r.receiptLog = {
                            transactionIndex: l,
                            blockNumber: l,
                            transactionHash: c,
                            address: n,
                            topics: e.arrayOf(c),
                            data: s,
                            logIndex: l,
                            blockHash: c
                          }),
                          (r.receipt = {
                            to: e.allowNull(this.address, null),
                            from: e.allowNull(this.address, null),
                            contractAddress: e.allowNull(n, null),
                            transactionIndex: l,
                            root: e.allowNull(u),
                            gasUsed: o,
                            logsBloom: e.allowNull(s),
                            blockHash: c,
                            transactionHash: c,
                            logs: e.arrayOf(this.receiptLog.bind(this)),
                            blockNumber: l,
                            confirmations: e.allowNull(l, null),
                            cumulativeGasUsed: o,
                            effectiveGasPrice: e.allowNull(o),
                            status: e.allowNull(l),
                            type: d
                          }),
                          (r.block = {
                            hash: e.allowNull(c),
                            parentHash: c,
                            number: l,
                            timestamp: l,
                            nonce: e.allowNull(u),
                            difficulty: this.difficulty.bind(this),
                            gasLimit: o,
                            gasUsed: o,
                            miner: e.allowNull(n),
                            extraData: s,
                            transactions: e.allowNull(e.arrayOf(c)),
                            baseFeePerGas: e.allowNull(o)
                          }),
                          (r.blockWithTransactions = (0, a.shallowCopy)(r.block)),
                          (r.blockWithTransactions.transactions = e.allowNull(e.arrayOf(this.transactionResponse.bind(this)))),
                          (r.filter = {
                            fromBlock: e.allowNull(i, undefined),
                            toBlock: e.allowNull(i, undefined),
                            blockHash: e.allowNull(c, undefined),
                            address: e.allowNull(n, undefined),
                            topics: e.allowNull(this.topics.bind(this), undefined)
                          }),
                          (r.filterLog = {
                            blockNumber: e.allowNull(l),
                            blockHash: e.allowNull(c),
                            transactionIndex: l,
                            removed: e.allowNull(this.boolean.bind(this)),
                            address: n,
                            data: e.allowFalsish(s, "0x"),
                            topics: e.arrayOf(c),
                            transactionHash: c,
                            logIndex: l
                          }),
                          r
                        );
                      }),
                      (e.prototype.accessList = function (e) {
                        return (0, c.accessListify)(e || []);
                      }),
                      (e.prototype.number = function (e) {
                        return "0x" === e ? 0 : o.BigNumber.from(e).toNumber();
                      }),
                      (e.prototype.type = function (e) {
                        return "0x" === e || null == e ? 0 : o.BigNumber.from(e).toNumber();
                      }),
                      (e.prototype.bigNumber = function (e) {
                        return o.BigNumber.from(e);
                      }),
                      (e.prototype.boolean = function (e) {
                        if ("boolean" == typeof e) return e;
                        if ("string" == typeof e) {
                          if ("true" === (e = e.toLowerCase())) return !0;
                          if ("false" === e) return !1;
                        }
                        throw new Error("invalid boolean - " + e);
                      }),
                      (e.prototype.hex = function (e, t) {
                        return "string" == typeof e && (t || "0x" === e.substring(0, 2) || (e = "0x" + e), (0, i.isHexString)(e))
                          ? e.toLowerCase()
                          : d.throwArgumentError("invalid hash", "value", e);
                      }),
                      (e.prototype.data = function (e, t) {
                        var r = this.hex(e, t);
                        if (r.length % 2 != 0) throw new Error("invalid data; odd-length - " + e);
                        return r;
                      }),
                      (e.prototype.address = function (e) {
                        return (0, n.getAddress)(e);
                      }),
                      (e.prototype.callAddress = function (e) {
                        if (!(0, i.isHexString)(e, 32)) return null;
                        var t = (0, n.getAddress)((0, i.hexDataSlice)(e, 12));
                        return t === s.AddressZero ? null : t;
                      }),
                      (e.prototype.contractAddress = function (e) {
                        return (0, n.getContractAddress)(e);
                      }),
                      (e.prototype.blockTag = function (e) {
                        if (null == e) return "latest";
                        if ("earliest" === e) return "0x0";
                        switch (e) {
                          case "earliest":
                            return "0x0";
                          case "latest":
                          case "pending":
                          case "safe":
                          case "finalized":
                            return e;
                        }
                        if ("number" == typeof e || (0, i.isHexString)(e)) return (0, i.hexValue)(e);
                        throw new Error("invalid blockTag");
                      }),
                      (e.prototype.hash = function (e, t) {
                        var r = this.hex(e, t);
                        return 32 !== (0, i.hexDataLength)(r) ? d.throwArgumentError("invalid hash", "value", e) : r;
                      }),
                      (e.prototype.difficulty = function (e) {
                        if (null == e) return null;
                        var t = o.BigNumber.from(e);
                        try {
                          return t.toNumber();
                        } catch (e) {}
                        return null;
                      }),
                      (e.prototype.uint256 = function (e) {
                        if (!(0, i.isHexString)(e)) throw new Error("invalid uint256");
                        return (0, i.hexZeroPad)(e, 32);
                      }),
                      (e.prototype._block = function (t, r) {
                        null != t.author && null == t.miner && (t.miner = t.author);
                        var n = null != t._difficulty ? t._difficulty : t.difficulty,
                          i = e.check(r, t);
                        return (i._difficulty = null == n ? null : o.BigNumber.from(n)), i;
                      }),
                      (e.prototype.block = function (e) {
                        return this._block(e, this.formats.block);
                      }),
                      (e.prototype.blockWithTransactions = function (e) {
                        return this._block(e, this.formats.blockWithTransactions);
                      }),
                      (e.prototype.transactionRequest = function (t) {
                        return e.check(this.formats.transactionRequest, t);
                      }),
                      (e.prototype.transactionResponse = function (t) {
                        null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas),
                          t.to && o.BigNumber.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"),
                          null != t.input && null == t.data && (t.data = t.input),
                          null == t.to && null == t.creates && (t.creates = this.contractAddress(t)),
                          (1 !== t.type && 2 !== t.type) || null != t.accessList || (t.accessList = []);
                        var r = e.check(this.formats.transaction, t);
                        if (null != t.chainId) {
                          var n = t.chainId;
                          (0, i.isHexString)(n) && (n = o.BigNumber.from(n).toNumber()), (r.chainId = n);
                        } else {
                          null == (n = t.networkId) && null == r.v && (n = t.chainId),
                            (0, i.isHexString)(n) && (n = o.BigNumber.from(n).toNumber()),
                            "number" != typeof n && null != r.v && ((n = (r.v - 35) / 2) < 0 && (n = 0), (n = parseInt(n))),
                            "number" != typeof n && (n = 0),
                            (r.chainId = n);
                        }
                        return r.blockHash && "x" === r.blockHash.replace(/0/g, "") && (r.blockHash = null), r;
                      }),
                      (e.prototype.transaction = function (e) {
                        return (0, c.parse)(e);
                      }),
                      (e.prototype.receiptLog = function (t) {
                        return e.check(this.formats.receiptLog, t);
                      }),
                      (e.prototype.receipt = function (t) {
                        var r = e.check(this.formats.receipt, t);
                        if (null != r.root)
                          if (r.root.length <= 4) {
                            var n = o.BigNumber.from(r.root).toNumber();
                            0 === n || 1 === n
                              ? (null != r.status &&
                                  r.status !== n &&
                                  d.throwArgumentError("alt-root-status/status mismatch", "value", { root: r.root, status: r.status }),
                                (r.status = n),
                                delete r.root)
                              : d.throwArgumentError("invalid alt-root-status", "value.root", r.root);
                          } else 66 !== r.root.length && d.throwArgumentError("invalid root hash", "value.root", r.root);
                        return null != r.status && (r.byzantium = !0), r;
                      }),
                      (e.prototype.topics = function (e) {
                        var t = this;
                        return Array.isArray(e)
                          ? e.map(function (e) {
                              return t.topics(e);
                            })
                          : null != e
                          ? this.hash(e, !0)
                          : null;
                      }),
                      (e.prototype.filter = function (t) {
                        return e.check(this.formats.filter, t);
                      }),
                      (e.prototype.filterLog = function (t) {
                        return e.check(this.formats.filterLog, t);
                      }),
                      (e.check = function (e, t) {
                        var r = {};
                        for (var n in e)
                          try {
                            var o = e[n](t[n]);
                            o !== undefined && (r[n] = o);
                          } catch (e) {
                            throw ((e.checkKey = n), (e.checkValue = t[n]), e);
                          }
                        return r;
                      }),
                      (e.allowNull = function (e, t) {
                        return function (r) {
                          return null == r ? t : e(r);
                        };
                      }),
                      (e.allowFalsish = function (e, t) {
                        return function (r) {
                          return r ? e(r) : t;
                        };
                      }),
                      (e.arrayOf = function (e) {
                        return function (t) {
                          if (!Array.isArray(t)) throw new Error("not an array");
                          var r = [];
                          return (
                            t.forEach(function (t) {
                              r.push(e(t));
                            }),
                            r
                          );
                        };
                      }),
                      e
                    );
                  })();
                function h(e) {
                  return e && "function" == typeof e.isCommunityResource;
                }
                (r.Formatter = p),
                  (r.isCommunityResourcable = h),
                  (r.isCommunityResource = function (e) {
                    return h(e) && e.isCommunityResource();
                  });
                var f = !1;
                r.showThrottleMessage = function () {
                  f ||
                    ((f = !0),
                    console.log("========= NOTICE ========="),
                    console.log("Request-Rate Exceeded  (this message will not be repeated)"),
                    console.log(""),
                    console.log("The default API keys for each service are provided as a highly-throttled,"),
                    console.log("community resource for low-traffic projects and early prototyping."),
                    console.log(""),
                    console.log("While your application will continue to function, we highly recommended"),
                    console.log("signing up for your own API keys to improve performance, increase your"),
                    console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."),
                    console.log(""),
                    console.log("For more details: https://docs.ethers.io/api-keys/"),
                    console.log("=========================="));
                };
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/formatter.js" }
    ],
    [
      494,
      {
        "./_version": 484,
        "./alchemy-provider": 485,
        "./ankr-provider": 486,
        "./base-provider": 487,
        "./cloudflare-provider": 490,
        "./etherscan-provider": 491,
        "./fallback-provider": 492,
        "./formatter": 493,
        "./infura-provider": 495,
        "./ipc-provider": 488,
        "./json-rpc-batch-provider": 496,
        "./json-rpc-provider": 497,
        "./nodesmith-provider": 498,
        "./pocket-provider": 499,
        "./url-json-rpc-provider": 500,
        "./web3-provider": 501,
        "./websocket-provider": 502,
        "@ethersproject/abstract-provider": 435,
        "@ethersproject/logger": 477,
        "@ethersproject/networks": 479
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.Formatter =
                    r.showThrottleMessage =
                    r.isCommunityResourcable =
                    r.isCommunityResource =
                    r.getNetwork =
                    r.getDefaultProvider =
                    r.JsonRpcSigner =
                    r.IpcProvider =
                    r.WebSocketProvider =
                    r.Web3Provider =
                    r.StaticJsonRpcProvider =
                    r.PocketProvider =
                    r.NodesmithProvider =
                    r.JsonRpcBatchProvider =
                    r.JsonRpcProvider =
                    r.InfuraWebSocketProvider =
                    r.InfuraProvider =
                    r.EtherscanProvider =
                    r.CloudflareProvider =
                    r.AnkrProvider =
                    r.AlchemyWebSocketProvider =
                    r.AlchemyProvider =
                    r.FallbackProvider =
                    r.UrlJsonRpcProvider =
                    r.Resolver =
                    r.BaseProvider =
                    r.Provider =
                      void 0);
                var n = e("@ethersproject/abstract-provider");
                Object.defineProperty(r, "Provider", {
                  enumerable: !0,
                  get: function () {
                    return n.Provider;
                  }
                });
                var o = e("@ethersproject/networks");
                Object.defineProperty(r, "getNetwork", {
                  enumerable: !0,
                  get: function () {
                    return o.getNetwork;
                  }
                });
                var i = e("./base-provider");
                Object.defineProperty(r, "BaseProvider", {
                  enumerable: !0,
                  get: function () {
                    return i.BaseProvider;
                  }
                }),
                  Object.defineProperty(r, "Resolver", {
                    enumerable: !0,
                    get: function () {
                      return i.Resolver;
                    }
                  });
                var s = e("./alchemy-provider");
                Object.defineProperty(r, "AlchemyProvider", {
                  enumerable: !0,
                  get: function () {
                    return s.AlchemyProvider;
                  }
                }),
                  Object.defineProperty(r, "AlchemyWebSocketProvider", {
                    enumerable: !0,
                    get: function () {
                      return s.AlchemyWebSocketProvider;
                    }
                  });
                var a = e("./ankr-provider");
                Object.defineProperty(r, "AnkrProvider", {
                  enumerable: !0,
                  get: function () {
                    return a.AnkrProvider;
                  }
                });
                var c = e("./cloudflare-provider");
                Object.defineProperty(r, "CloudflareProvider", {
                  enumerable: !0,
                  get: function () {
                    return c.CloudflareProvider;
                  }
                });
                var u = e("./etherscan-provider");
                Object.defineProperty(r, "EtherscanProvider", {
                  enumerable: !0,
                  get: function () {
                    return u.EtherscanProvider;
                  }
                });
                var l = e("./fallback-provider");
                Object.defineProperty(r, "FallbackProvider", {
                  enumerable: !0,
                  get: function () {
                    return l.FallbackProvider;
                  }
                });
                var d = e("./ipc-provider");
                Object.defineProperty(r, "IpcProvider", {
                  enumerable: !0,
                  get: function () {
                    return d.IpcProvider;
                  }
                });
                var p = e("./infura-provider");
                Object.defineProperty(r, "InfuraProvider", {
                  enumerable: !0,
                  get: function () {
                    return p.InfuraProvider;
                  }
                }),
                  Object.defineProperty(r, "InfuraWebSocketProvider", {
                    enumerable: !0,
                    get: function () {
                      return p.InfuraWebSocketProvider;
                    }
                  });
                var h = e("./json-rpc-provider");
                Object.defineProperty(r, "JsonRpcProvider", {
                  enumerable: !0,
                  get: function () {
                    return h.JsonRpcProvider;
                  }
                }),
                  Object.defineProperty(r, "JsonRpcSigner", {
                    enumerable: !0,
                    get: function () {
                      return h.JsonRpcSigner;
                    }
                  });
                var f = e("./json-rpc-batch-provider");
                Object.defineProperty(r, "JsonRpcBatchProvider", {
                  enumerable: !0,
                  get: function () {
                    return f.JsonRpcBatchProvider;
                  }
                });
                var g = e("./nodesmith-provider");
                Object.defineProperty(r, "NodesmithProvider", {
                  enumerable: !0,
                  get: function () {
                    return g.NodesmithProvider;
                  }
                });
                var m = e("./pocket-provider");
                Object.defineProperty(r, "PocketProvider", {
                  enumerable: !0,
                  get: function () {
                    return m.PocketProvider;
                  }
                });
                var y = e("./url-json-rpc-provider");
                Object.defineProperty(r, "StaticJsonRpcProvider", {
                  enumerable: !0,
                  get: function () {
                    return y.StaticJsonRpcProvider;
                  }
                }),
                  Object.defineProperty(r, "UrlJsonRpcProvider", {
                    enumerable: !0,
                    get: function () {
                      return y.UrlJsonRpcProvider;
                    }
                  });
                var _ = e("./web3-provider");
                Object.defineProperty(r, "Web3Provider", {
                  enumerable: !0,
                  get: function () {
                    return _.Web3Provider;
                  }
                });
                var v = e("./websocket-provider");
                Object.defineProperty(r, "WebSocketProvider", {
                  enumerable: !0,
                  get: function () {
                    return v.WebSocketProvider;
                  }
                });
                var T = e("./formatter");
                Object.defineProperty(r, "Formatter", {
                  enumerable: !0,
                  get: function () {
                    return T.Formatter;
                  }
                }),
                  Object.defineProperty(r, "isCommunityResourcable", {
                    enumerable: !0,
                    get: function () {
                      return T.isCommunityResourcable;
                    }
                  }),
                  Object.defineProperty(r, "isCommunityResource", {
                    enumerable: !0,
                    get: function () {
                      return T.isCommunityResource;
                    }
                  }),
                  Object.defineProperty(r, "showThrottleMessage", {
                    enumerable: !0,
                    get: function () {
                      return T.showThrottleMessage;
                    }
                  });
                var E = e("@ethersproject/logger"),
                  b = e("./_version"),
                  w = new E.Logger(b.version);
                r.getDefaultProvider = function (e, t) {
                  if ((null == e && (e = "homestead"), "string" == typeof e)) {
                    var r = e.match(/^(ws|http)s?:/i);
                    if (r)
                      switch (r[1].toLowerCase()) {
                        case "http":
                        case "https":
                          return new h.JsonRpcProvider(e);
                        case "ws":
                        case "wss":
                          return new v.WebSocketProvider(e);
                        default:
                          w.throwArgumentError("unsupported URL scheme", "network", e);
                      }
                  }
                  var n = (0, o.getNetwork)(e);
                  return (
                    (n && n._defaultProvider) ||
                      w.throwError("unsupported getDefaultProvider network", E.Logger.errors.NETWORK_ERROR, {
                        operation: "getDefaultProvider",
                        network: e
                      }),
                    n._defaultProvider(
                      {
                        FallbackProvider: l.FallbackProvider,
                        AlchemyProvider: s.AlchemyProvider,
                        AnkrProvider: a.AnkrProvider,
                        CloudflareProvider: c.CloudflareProvider,
                        EtherscanProvider: u.EtherscanProvider,
                        InfuraProvider: p.InfuraProvider,
                        JsonRpcProvider: h.JsonRpcProvider,
                        NodesmithProvider: g.NodesmithProvider,
                        PocketProvider: m.PocketProvider,
                        Web3Provider: _.Web3Provider,
                        IpcProvider: d.IpcProvider
                      },
                      t
                    )
                  );
                };
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/index.js" }
    ],
    [
      495,
      {
        "./_version": 484,
        "./formatter": 493,
        "./url-json-rpc-provider": 500,
        "./websocket-provider": 502,
        "@ethersproject/logger": 477,
        "@ethersproject/properties": 483
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.InfuraProvider = r.InfuraWebSocketProvider = void 0);
                var i = e("@ethersproject/properties"),
                  s = e("./websocket-provider"),
                  a = e("./formatter"),
                  c = e("@ethersproject/logger"),
                  u = e("./_version"),
                  l = new c.Logger(u.version),
                  d = e("./url-json-rpc-provider"),
                  p = "84842078b09946638c03157f83405213",
                  h = (function (e) {
                    function t(t, r) {
                      var n,
                        o = new f(t, r),
                        s = o.connection;
                      s.password &&
                        l.throwError("INFURA WebSocket project secrets unsupported", c.Logger.errors.UNSUPPORTED_OPERATION, {
                          operation: "InfuraProvider.getWebSocketProvider()"
                        });
                      var a = s.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
                      return (
                        (n = e.call(this, a, t) || this),
                        (0, i.defineReadOnly)(n, "apiKey", o.projectId),
                        (0, i.defineReadOnly)(n, "projectId", o.projectId),
                        (0, i.defineReadOnly)(n, "projectSecret", o.projectSecret),
                        n
                      );
                    }
                    return (
                      o(t, e),
                      (t.prototype.isCommunityResource = function () {
                        return this.projectId === p;
                      }),
                      t
                    );
                  })(s.WebSocketProvider);
                r.InfuraWebSocketProvider = h;
                var f = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return (
                    o(t, e),
                    (t.getWebSocketProvider = function (e, t) {
                      return new h(e, t);
                    }),
                    (t.getApiKey = function (e) {
                      var t = { apiKey: p, projectId: p, projectSecret: null };
                      return (
                        null == e ||
                          ("string" == typeof e
                            ? (t.projectId = e)
                            : null != e.projectSecret
                            ? (l.assertArgument(
                                "string" == typeof e.projectId,
                                "projectSecret requires a projectId",
                                "projectId",
                                e.projectId
                              ),
                              l.assertArgument("string" == typeof e.projectSecret, "invalid projectSecret", "projectSecret", "[REDACTED]"),
                              (t.projectId = e.projectId),
                              (t.projectSecret = e.projectSecret))
                            : e.projectId && (t.projectId = e.projectId),
                          (t.apiKey = t.projectId)),
                        t
                      );
                    }),
                    (t.getUrl = function (e, t) {
                      var r = null;
                      switch (e ? e.name : "unknown") {
                        case "homestead":
                          r = "mainnet.infura.io";
                          break;
                        case "goerli":
                          r = "goerli.infura.io";
                          break;
                        case "sepolia":
                          r = "sepolia.infura.io";
                          break;
                        case "matic":
                          r = "polygon-mainnet.infura.io";
                          break;
                        case "maticmum":
                          r = "polygon-mumbai.infura.io";
                          break;
                        case "optimism":
                          r = "optimism-mainnet.infura.io";
                          break;
                        case "optimism-goerli":
                          r = "optimism-goerli.infura.io";
                          break;
                        case "arbitrum":
                          r = "arbitrum-mainnet.infura.io";
                          break;
                        case "arbitrum-goerli":
                          r = "arbitrum-goerli.infura.io";
                          break;
                        default:
                          l.throwError("unsupported network", c.Logger.errors.INVALID_ARGUMENT, { argument: "network", value: e });
                      }
                      var n = {
                        allowGzip: !0,
                        url: "https:/" + "/" + r + "/v3/" + t.projectId,
                        throttleCallback: function (e, r) {
                          return t.projectId === p && (0, a.showThrottleMessage)(), Promise.resolve(!0);
                        }
                      };
                      return null != t.projectSecret && ((n.user = ""), (n.password = t.projectSecret)), n;
                    }),
                    (t.prototype.isCommunityResource = function () {
                      return this.projectId === p;
                    }),
                    t
                  );
                })(d.UrlJsonRpcProvider);
                r.InfuraProvider = f;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/infura-provider.js" }
    ],
    [
      496,
      { "./json-rpc-provider": 497, "@ethersproject/properties": 483, "@ethersproject/web": 531 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.JsonRpcBatchProvider = void 0);
                var i = e("@ethersproject/properties"),
                  s = e("@ethersproject/web"),
                  a = (function (e) {
                    function t() {
                      return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                      o(t, e),
                      (t.prototype.send = function (e, t) {
                        var r = this,
                          n = { method: e, params: t, id: this._nextId++, jsonrpc: "2.0" };
                        null == this._pendingBatch && (this._pendingBatch = []);
                        var o = { request: n, resolve: null, reject: null },
                          a = new Promise(function (e, t) {
                            (o.resolve = e), (o.reject = t);
                          });
                        return (
                          this._pendingBatch.push(o),
                          this._pendingBatchAggregator ||
                            (this._pendingBatchAggregator = setTimeout(function () {
                              var e = r._pendingBatch;
                              (r._pendingBatch = null), (r._pendingBatchAggregator = null);
                              var t = e.map(function (e) {
                                return e.request;
                              });
                              return (
                                r.emit("debug", { action: "requestBatch", request: (0, i.deepCopy)(t), provider: r }),
                                (0, s.fetchJson)(r.connection, JSON.stringify(t)).then(
                                  function (n) {
                                    r.emit("debug", { action: "response", request: t, response: n, provider: r }),
                                      e.forEach(function (e, t) {
                                        var r = n[t];
                                        if (r.error) {
                                          var o = new Error(r.error.message);
                                          (o.code = r.error.code), (o.data = r.error.data), e.reject(o);
                                        } else e.resolve(r.result);
                                      });
                                  },
                                  function (n) {
                                    r.emit("debug", { action: "response", error: n, request: t, provider: r }),
                                      e.forEach(function (e) {
                                        e.reject(n);
                                      });
                                  }
                                )
                              );
                            }, 10)),
                          a
                        );
                      }),
                      t
                    );
                  })(e("./json-rpc-provider").JsonRpcProvider);
                r.JsonRpcBatchProvider = a;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/json-rpc-batch-provider.js" }
    ],
    [
      497,
      {
        "./_version": 484,
        "./base-provider": 487,
        "@ethersproject/abstract-signer": 437,
        "@ethersproject/bignumber": 446,
        "@ethersproject/bytes": 448,
        "@ethersproject/hash": 461,
        "@ethersproject/logger": 477,
        "@ethersproject/properties": 483,
        "@ethersproject/strings": 521,
        "@ethersproject/transactions": 524,
        "@ethersproject/web": 531
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    }),
                  i =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  s =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        o,
                        i,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: []
                        };
                      return (
                        (i = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                                    !(o = o.call(n, i[1])).done)
                                )
                                  return o;
                                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;
                                  case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                  case 5:
                                    s.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      s = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                      s.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                      (s.label = o[1]), (o = i);
                                      break;
                                    }
                                    if (o && s.label < o[2]) {
                                      (s.label = o[2]), s.ops.push(i);
                                      break;
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                i = t.call(e, s);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = o = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.JsonRpcProvider = r.JsonRpcSigner = void 0);
                var a = e("@ethersproject/abstract-signer"),
                  c = e("@ethersproject/bignumber"),
                  u = e("@ethersproject/bytes"),
                  l = e("@ethersproject/hash"),
                  d = e("@ethersproject/properties"),
                  p = e("@ethersproject/strings"),
                  h = e("@ethersproject/transactions"),
                  f = e("@ethersproject/web"),
                  g = e("@ethersproject/logger"),
                  m = e("./_version"),
                  y = new g.Logger(m.version),
                  _ = e("./base-provider"),
                  v = ["call", "estimateGas"];
                function T(e, t) {
                  if (null == e) return null;
                  if ("string" == typeof e.message && e.message.match("reverted")) {
                    var r = (0, u.isHexString)(e.data) ? e.data : null;
                    if (!t || r) return { message: e.message, data: r };
                  }
                  if ("object" == typeof e) {
                    for (var n in e) {
                      var o = T(e[n], t);
                      if (o) return o;
                    }
                    return null;
                  }
                  if ("string" == typeof e)
                    try {
                      return T(JSON.parse(e), t);
                    } catch (e) {}
                  return null;
                }
                function E(e, t, r) {
                  var n = r.transaction || r.signedTransaction;
                  if ("call" === e) {
                    var o;
                    if ((o = T(t, !0))) return o.data;
                    y.throwError(
                      "missing revert data in call exception; Transaction reverted without a reason string",
                      g.Logger.errors.CALL_EXCEPTION,
                      { data: "0x", transaction: n, error: t }
                    );
                  }
                  "estimateGas" === e &&
                    (null == (o = T(t.body, !1)) && (o = T(t, !1)),
                    o &&
                      y.throwError(
                        "cannot estimate gas; transaction may fail or may require manual gas limit",
                        g.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
                        { reason: o.message, method: e, transaction: n, error: t }
                      ));
                  var i = t.message;
                  throw (
                    (t.code === g.Logger.errors.SERVER_ERROR && t.error && "string" == typeof t.error.message
                      ? (i = t.error.message)
                      : "string" == typeof t.body
                      ? (i = t.body)
                      : "string" == typeof t.responseText && (i = t.responseText),
                    (i = (i || "").toLowerCase()).match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) &&
                      y.throwError("insufficient funds for intrinsic transaction cost", g.Logger.errors.INSUFFICIENT_FUNDS, {
                        error: t,
                        method: e,
                        transaction: n
                      }),
                    i.match(/nonce (is )?too low/i) &&
                      y.throwError("nonce has already been used", g.Logger.errors.NONCE_EXPIRED, { error: t, method: e, transaction: n }),
                    i.match(/replacement transaction underpriced|transaction gas price.*too low/i) &&
                      y.throwError("replacement fee too low", g.Logger.errors.REPLACEMENT_UNDERPRICED, {
                        error: t,
                        method: e,
                        transaction: n
                      }),
                    i.match(/only replay-protected/i) &&
                      y.throwError("legacy pre-eip-155 transactions not supported", g.Logger.errors.UNSUPPORTED_OPERATION, {
                        error: t,
                        method: e,
                        transaction: n
                      }),
                    v.indexOf(e) >= 0 &&
                      i.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) &&
                      y.throwError(
                        "cannot estimate gas; transaction may fail or may require manual gas limit",
                        g.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
                        { error: t, method: e, transaction: n }
                      ),
                    t)
                  );
                }
                function b(e) {
                  return new Promise(function (t) {
                    setTimeout(t, e);
                  });
                }
                function w(e) {
                  if (e.error) {
                    var t = new Error(e.error.message);
                    throw ((t.code = e.error.code), (t.data = e.error.data), t);
                  }
                  return e.result;
                }
                function A(e) {
                  return e ? e.toLowerCase() : e;
                }
                var N = {},
                  I = (function (e) {
                    function t(t, r, n) {
                      var o = e.call(this) || this;
                      if (t !== N) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                      return (
                        (0, d.defineReadOnly)(o, "provider", r),
                        null == n && (n = 0),
                        "string" == typeof n
                          ? ((0, d.defineReadOnly)(o, "_address", o.provider.formatter.address(n)),
                            (0, d.defineReadOnly)(o, "_index", null))
                          : "number" == typeof n
                          ? ((0, d.defineReadOnly)(o, "_index", n), (0, d.defineReadOnly)(o, "_address", null))
                          : y.throwArgumentError("invalid address or index", "addressOrIndex", n),
                        o
                      );
                    }
                    return (
                      o(t, e),
                      (t.prototype.connect = function (e) {
                        return y.throwError("cannot alter JSON-RPC Signer connection", g.Logger.errors.UNSUPPORTED_OPERATION, {
                          operation: "connect"
                        });
                      }),
                      (t.prototype.connectUnchecked = function () {
                        return new O(N, this.provider, this._address || this._index);
                      }),
                      (t.prototype.getAddress = function () {
                        var e = this;
                        return this._address
                          ? Promise.resolve(this._address)
                          : this.provider.send("eth_accounts", []).then(function (t) {
                              return (
                                t.length <= e._index &&
                                  y.throwError("unknown account #" + e._index, g.Logger.errors.UNSUPPORTED_OPERATION, {
                                    operation: "getAddress"
                                  }),
                                e.provider.formatter.address(t[e._index])
                              );
                            });
                      }),
                      (t.prototype.sendUncheckedTransaction = function (e) {
                        var t = this;
                        e = (0, d.shallowCopy)(e);
                        var r = this.getAddress().then(function (e) {
                          return e && (e = e.toLowerCase()), e;
                        });
                        if (null == e.gasLimit) {
                          var n = (0, d.shallowCopy)(e);
                          (n.from = r), (e.gasLimit = this.provider.estimateGas(n));
                        }
                        return (
                          null != e.to &&
                            (e.to = Promise.resolve(e.to).then(function (e) {
                              return i(t, void 0, void 0, function () {
                                var t;
                                return s(this, function (r) {
                                  switch (r.label) {
                                    case 0:
                                      return null == e ? [2, null] : [4, this.provider.resolveName(e)];
                                    case 1:
                                      return (
                                        null == (t = r.sent()) && y.throwArgumentError("provided ENS name resolves to null", "tx.to", e),
                                        [2, t]
                                      );
                                  }
                                });
                              });
                            })),
                          (0, d.resolveProperties)({ tx: (0, d.resolveProperties)(e), sender: r }).then(function (r) {
                            var n = r.tx,
                              o = r.sender;
                            null != n.from
                              ? n.from.toLowerCase() !== o && y.throwArgumentError("from address mismatch", "transaction", e)
                              : (n.from = o);
                            var i = t.provider.constructor.hexlifyTransaction(n, { from: !0 });
                            return t.provider.send("eth_sendTransaction", [i]).then(
                              function (e) {
                                return e;
                              },
                              function (e) {
                                return (
                                  "string" == typeof e.message &&
                                    e.message.match(/user denied/i) &&
                                    y.throwError("user rejected transaction", g.Logger.errors.ACTION_REJECTED, {
                                      action: "sendTransaction",
                                      transaction: n
                                    }),
                                  E("sendTransaction", e, i)
                                );
                              }
                            );
                          })
                        );
                      }),
                      (t.prototype.signTransaction = function (e) {
                        return y.throwError("signing transactions is unsupported", g.Logger.errors.UNSUPPORTED_OPERATION, {
                          operation: "signTransaction"
                        });
                      }),
                      (t.prototype.sendTransaction = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t,
                            r,
                            n,
                            o = this;
                          return s(this, function (a) {
                            switch (a.label) {
                              case 0:
                                return [4, this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval)];
                              case 1:
                                return (t = a.sent()), [4, this.sendUncheckedTransaction(e)];
                              case 2:
                                (r = a.sent()), (a.label = 3);
                              case 3:
                                return (
                                  a.trys.push([3, 5, , 6]),
                                  [
                                    4,
                                    (0, f.poll)(
                                      function () {
                                        return i(o, void 0, void 0, function () {
                                          var e;
                                          return s(this, function (n) {
                                            switch (n.label) {
                                              case 0:
                                                return [4, this.provider.getTransaction(r)];
                                              case 1:
                                                return null === (e = n.sent())
                                                  ? [2, undefined]
                                                  : [2, this.provider._wrapTransaction(e, r, t)];
                                            }
                                          });
                                        });
                                      },
                                      { oncePoll: this.provider }
                                    )
                                  ]
                                );
                              case 4:
                                return [2, a.sent()];
                              case 5:
                                throw (((n = a.sent()).transactionHash = r), n);
                              case 6:
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype.signMessage = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t, r, n;
                          return s(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return (t = "string" == typeof e ? (0, p.toUtf8Bytes)(e) : e), [4, this.getAddress()];
                              case 1:
                                (r = o.sent()), (o.label = 2);
                              case 2:
                                return (
                                  o.trys.push([2, 4, , 5]), [4, this.provider.send("personal_sign", [(0, u.hexlify)(t), r.toLowerCase()])]
                                );
                              case 3:
                                return [2, o.sent()];
                              case 4:
                                throw (
                                  ("string" == typeof (n = o.sent()).message &&
                                    n.message.match(/user denied/i) &&
                                    y.throwError("user rejected signing", g.Logger.errors.ACTION_REJECTED, {
                                      action: "signMessage",
                                      from: r,
                                      messageData: e
                                    }),
                                  n)
                                );
                              case 5:
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype._legacySignMessage = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t, r, n;
                          return s(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return (t = "string" == typeof e ? (0, p.toUtf8Bytes)(e) : e), [4, this.getAddress()];
                              case 1:
                                (r = o.sent()), (o.label = 2);
                              case 2:
                                return o.trys.push([2, 4, , 5]), [4, this.provider.send("eth_sign", [r.toLowerCase(), (0, u.hexlify)(t)])];
                              case 3:
                                return [2, o.sent()];
                              case 4:
                                throw (
                                  ("string" == typeof (n = o.sent()).message &&
                                    n.message.match(/user denied/i) &&
                                    y.throwError("user rejected signing", g.Logger.errors.ACTION_REJECTED, {
                                      action: "_legacySignMessage",
                                      from: r,
                                      messageData: e
                                    }),
                                  n)
                                );
                              case 5:
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype._signTypedData = function (e, t, r) {
                        return i(this, void 0, void 0, function () {
                          var n,
                            o,
                            i,
                            a = this;
                          return s(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return [
                                  4,
                                  l._TypedDataEncoder.resolveNames(e, t, r, function (e) {
                                    return a.provider.resolveName(e);
                                  })
                                ];
                              case 1:
                                return (n = s.sent()), [4, this.getAddress()];
                              case 2:
                                (o = s.sent()), (s.label = 3);
                              case 3:
                                return (
                                  s.trys.push([3, 5, , 6]),
                                  [
                                    4,
                                    this.provider.send("eth_signTypedData_v4", [
                                      o.toLowerCase(),
                                      JSON.stringify(l._TypedDataEncoder.getPayload(n.domain, t, n.value))
                                    ])
                                  ]
                                );
                              case 4:
                                return [2, s.sent()];
                              case 5:
                                throw (
                                  ("string" == typeof (i = s.sent()).message &&
                                    i.message.match(/user denied/i) &&
                                    y.throwError("user rejected signing", g.Logger.errors.ACTION_REJECTED, {
                                      action: "_signTypedData",
                                      from: o,
                                      messageData: { domain: n.domain, types: t, value: n.value }
                                    }),
                                  i)
                                );
                              case 6:
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype.unlock = function (e) {
                        return i(this, void 0, void 0, function () {
                          var t, r;
                          return s(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return (t = this.provider), [4, this.getAddress()];
                              case 1:
                                return (r = n.sent()), [2, t.send("personal_unlockAccount", [r.toLowerCase(), e, null])];
                            }
                          });
                        });
                      }),
                      t
                    );
                  })(a.Signer);
                r.JsonRpcSigner = I;
                var O = (function (e) {
                    function t() {
                      return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                      o(t, e),
                      (t.prototype.sendTransaction = function (e) {
                        var t = this;
                        return this.sendUncheckedTransaction(e).then(function (e) {
                          return {
                            hash: e,
                            nonce: null,
                            gasLimit: null,
                            gasPrice: null,
                            data: null,
                            value: null,
                            chainId: null,
                            confirmations: 0,
                            from: null,
                            wait: function (r) {
                              return t.provider.waitForTransaction(e, r);
                            }
                          };
                        });
                      }),
                      t
                    );
                  })(I),
                  R = {
                    chainId: !0,
                    data: !0,
                    gasLimit: !0,
                    gasPrice: !0,
                    nonce: !0,
                    to: !0,
                    value: !0,
                    type: !0,
                    accessList: !0,
                    maxFeePerGas: !0,
                    maxPriorityFeePerGas: !0
                  },
                  S = (function (e) {
                    function t(t, r) {
                      var n = this,
                        o = r;
                      return (
                        null == o &&
                          (o = new Promise(function (e, t) {
                            setTimeout(function () {
                              n.detectNetwork().then(
                                function (t) {
                                  e(t);
                                },
                                function (e) {
                                  t(e);
                                }
                              );
                            }, 0);
                          })),
                        (n = e.call(this, o) || this),
                        t || (t = (0, d.getStatic)(n.constructor, "defaultUrl")()),
                        "string" == typeof t
                          ? (0, d.defineReadOnly)(n, "connection", Object.freeze({ url: t }))
                          : (0, d.defineReadOnly)(n, "connection", Object.freeze((0, d.shallowCopy)(t))),
                        (n._nextId = 42),
                        n
                      );
                    }
                    return (
                      o(t, e),
                      Object.defineProperty(t.prototype, "_cache", {
                        get: function () {
                          return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache;
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      (t.defaultUrl = function () {
                        return "http://localhost:8545";
                      }),
                      (t.prototype.detectNetwork = function () {
                        var e = this;
                        return (
                          this._cache.detectNetwork ||
                            ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
                            setTimeout(function () {
                              e._cache.detectNetwork = null;
                            }, 0)),
                          this._cache.detectNetwork
                        );
                      }),
                      (t.prototype._uncachedDetectNetwork = function () {
                        return i(this, void 0, void 0, function () {
                          var e, t;
                          return s(this, function (r) {
                            switch (r.label) {
                              case 0:
                                return [4, b(0)];
                              case 1:
                                r.sent(), (e = null), (r.label = 2);
                              case 2:
                                return r.trys.push([2, 4, , 9]), [4, this.send("eth_chainId", [])];
                              case 3:
                                return (e = r.sent()), [3, 9];
                              case 4:
                                r.sent(), (r.label = 5);
                              case 5:
                                return r.trys.push([5, 7, , 8]), [4, this.send("net_version", [])];
                              case 6:
                                return (e = r.sent()), [3, 8];
                              case 7:
                                return r.sent(), [3, 8];
                              case 8:
                                return [3, 9];
                              case 9:
                                if (null != e) {
                                  t = (0, d.getStatic)(this.constructor, "getNetwork");
                                  try {
                                    return [2, t(c.BigNumber.from(e).toNumber())];
                                  } catch (t) {
                                    return [
                                      2,
                                      y.throwError("could not detect network", g.Logger.errors.NETWORK_ERROR, {
                                        chainId: e,
                                        event: "invalidNetwork",
                                        serverError: t
                                      })
                                    ];
                                  }
                                }
                                return [2, y.throwError("could not detect network", g.Logger.errors.NETWORK_ERROR, { event: "noNetwork" })];
                            }
                          });
                        });
                      }),
                      (t.prototype.getSigner = function (e) {
                        return new I(N, this, e);
                      }),
                      (t.prototype.getUncheckedSigner = function (e) {
                        return this.getSigner(e).connectUnchecked();
                      }),
                      (t.prototype.listAccounts = function () {
                        var e = this;
                        return this.send("eth_accounts", []).then(function (t) {
                          return t.map(function (t) {
                            return e.formatter.address(t);
                          });
                        });
                      }),
                      (t.prototype.send = function (e, t) {
                        var r = this,
                          n = { method: e, params: t, id: this._nextId++, jsonrpc: "2.0" };
                        this.emit("debug", { action: "request", request: (0, d.deepCopy)(n), provider: this });
                        var o = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
                        if (o && this._cache[e]) return this._cache[e];
                        var i = (0, f.fetchJson)(this.connection, JSON.stringify(n), w).then(
                          function (e) {
                            return r.emit("debug", { action: "response", request: n, response: e, provider: r }), e;
                          },
                          function (e) {
                            throw (r.emit("debug", { action: "response", error: e, request: n, provider: r }), e);
                          }
                        );
                        return (
                          o &&
                            ((this._cache[e] = i),
                            setTimeout(function () {
                              r._cache[e] = null;
                            }, 0)),
                          i
                        );
                      }),
                      (t.prototype.prepareRequest = function (e, t) {
                        switch (e) {
                          case "getBlockNumber":
                            return ["eth_blockNumber", []];
                          case "getGasPrice":
                            return ["eth_gasPrice", []];
                          case "getBalance":
                            return ["eth_getBalance", [A(t.address), t.blockTag]];
                          case "getTransactionCount":
                            return ["eth_getTransactionCount", [A(t.address), t.blockTag]];
                          case "getCode":
                            return ["eth_getCode", [A(t.address), t.blockTag]];
                          case "getStorageAt":
                            return ["eth_getStorageAt", [A(t.address), (0, u.hexZeroPad)(t.position, 32), t.blockTag]];
                          case "sendTransaction":
                            return ["eth_sendRawTransaction", [t.signedTransaction]];
                          case "getBlock":
                            return t.blockTag
                              ? ["eth_getBlockByNumber", [t.blockTag, !!t.includeTransactions]]
                              : t.blockHash
                              ? ["eth_getBlockByHash", [t.blockHash, !!t.includeTransactions]]
                              : null;
                          case "getTransaction":
                            return ["eth_getTransactionByHash", [t.transactionHash]];
                          case "getTransactionReceipt":
                            return ["eth_getTransactionReceipt", [t.transactionHash]];
                          case "call":
                            return [
                              "eth_call",
                              [(0, d.getStatic)(this.constructor, "hexlifyTransaction")(t.transaction, { from: !0 }), t.blockTag]
                            ];
                          case "estimateGas":
                            return [
                              "eth_estimateGas",
                              [(0, d.getStatic)(this.constructor, "hexlifyTransaction")(t.transaction, { from: !0 })]
                            ];
                          case "getLogs":
                            return (
                              t.filter && null != t.filter.address && (t.filter.address = A(t.filter.address)), ["eth_getLogs", [t.filter]]
                            );
                        }
                        return null;
                      }),
                      (t.prototype.perform = function (e, t) {
                        return i(this, void 0, void 0, function () {
                          var r, n, o, i;
                          return s(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return "call" !== e && "estimateGas" !== e
                                  ? [3, 2]
                                  : (r = t.transaction) && null != r.type && c.BigNumber.from(r.type).isZero()
                                  ? null != r.maxFeePerGas || null != r.maxPriorityFeePerGas
                                    ? [3, 2]
                                    : [4, this.getFeeData()]
                                  : [3, 2];
                              case 1:
                                null == (n = s.sent()).maxFeePerGas &&
                                  null == n.maxPriorityFeePerGas &&
                                  (((t = (0, d.shallowCopy)(t)).transaction = (0, d.shallowCopy)(r)), delete t.transaction.type),
                                  (s.label = 2);
                              case 2:
                                null == (o = this.prepareRequest(e, t)) &&
                                  y.throwError(e + " not implemented", g.Logger.errors.NOT_IMPLEMENTED, { operation: e }),
                                  (s.label = 3);
                              case 3:
                                return s.trys.push([3, 5, , 6]), [4, this.send(o[0], o[1])];
                              case 4:
                                return [2, s.sent()];
                              case 5:
                                return (i = s.sent()), [2, E(e, i, t)];
                              case 6:
                                return [2];
                            }
                          });
                        });
                      }),
                      (t.prototype._startEvent = function (t) {
                        "pending" === t.tag && this._startPending(), e.prototype._startEvent.call(this, t);
                      }),
                      (t.prototype._startPending = function () {
                        if (null == this._pendingFilter) {
                          var e = this,
                            t = this.send("eth_newPendingTransactionFilter", []);
                          (this._pendingFilter = t),
                            t
                              .then(function (r) {
                                return (
                                  (function n() {
                                    e.send("eth_getFilterChanges", [r])
                                      .then(function (r) {
                                        if (e._pendingFilter != t) return null;
                                        var n = Promise.resolve();
                                        return (
                                          r.forEach(function (t) {
                                            (e._emitted["t:" + t.toLowerCase()] = "pending"),
                                              (n = n.then(function () {
                                                return e.getTransaction(t).then(function (t) {
                                                  return e.emit("pending", t), null;
                                                });
                                              }));
                                          }),
                                          n.then(function () {
                                            return b(1e3);
                                          })
                                        );
                                      })
                                      .then(function () {
                                        if (e._pendingFilter == t)
                                          return (
                                            setTimeout(function () {
                                              n();
                                            }, 0),
                                            null
                                          );
                                        e.send("eth_uninstallFilter", [r]);
                                      })
                                      .catch(function (e) {});
                                  })(),
                                  r
                                );
                              })
                              .catch(function (e) {});
                        }
                      }),
                      (t.prototype._stopEvent = function (t) {
                        "pending" === t.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null),
                          e.prototype._stopEvent.call(this, t);
                      }),
                      (t.hexlifyTransaction = function (e, t) {
                        var r = (0, d.shallowCopy)(R);
                        if (t) for (var n in t) t[n] && (r[n] = !0);
                        (0, d.checkProperties)(e, r);
                        var o = {};
                        return (
                          ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(
                            function (t) {
                              if (null != e[t]) {
                                var r = (0, u.hexValue)(c.BigNumber.from(e[t]));
                                "gasLimit" === t && (t = "gas"), (o[t] = r);
                              }
                            }
                          ),
                          ["from", "to", "data"].forEach(function (t) {
                            null != e[t] && (o[t] = (0, u.hexlify)(e[t]));
                          }),
                          e.accessList && (o.accessList = (0, h.accessListify)(e.accessList)),
                          o
                        );
                      }),
                      t
                    );
                  })(_.BaseProvider);
                r.JsonRpcProvider = S;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/json-rpc-provider.js" }
    ],
    [
      498,
      { "./_version": 484, "./url-json-rpc-provider": 500, "@ethersproject/logger": 477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.NodesmithProvider = void 0);
                var i = e("./url-json-rpc-provider"),
                  s = e("@ethersproject/logger"),
                  a = e("./_version"),
                  c = new s.Logger(a.version),
                  u = (function (e) {
                    function t() {
                      return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                      o(t, e),
                      (t.getApiKey = function (e) {
                        return e && "string" != typeof e && c.throwArgumentError("invalid apiKey", "apiKey", e), e || "ETHERS_JS_SHARED";
                      }),
                      (t.getUrl = function (e, t) {
                        c.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
                        var r = null;
                        switch (e.name) {
                          case "homestead":
                            r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
                            break;
                          case "ropsten":
                            r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
                            break;
                          case "rinkeby":
                            r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
                            break;
                          case "goerli":
                            r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
                            break;
                          case "kovan":
                            r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
                            break;
                          default:
                            c.throwArgumentError("unsupported network", "network", arguments[0]);
                        }
                        return r + "?apiKey=" + t;
                      }),
                      t
                    );
                  })(i.UrlJsonRpcProvider);
                r.NodesmithProvider = u;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/nodesmith-provider.js" }
    ],
    [
      499,
      { "./_version": 484, "./url-json-rpc-provider": 500, "@ethersproject/logger": 477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.PocketProvider = void 0);
                var i = e("@ethersproject/logger"),
                  s = e("./_version"),
                  a = new i.Logger(s.version),
                  c = e("./url-json-rpc-provider"),
                  u = "62e1ad51b37b8e00394bda3b",
                  l = (function (e) {
                    function t() {
                      return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                      o(t, e),
                      (t.getApiKey = function (e) {
                        var t = { applicationId: null, loadBalancer: !0, applicationSecretKey: null };
                        return (
                          null == e
                            ? (t.applicationId = u)
                            : "string" == typeof e
                            ? (t.applicationId = e)
                            : null != e.applicationSecretKey
                            ? ((t.applicationId = e.applicationId), (t.applicationSecretKey = e.applicationSecretKey))
                            : e.applicationId
                            ? (t.applicationId = e.applicationId)
                            : a.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", e),
                          t
                        );
                      }),
                      (t.getUrl = function (e, t) {
                        var r = null;
                        switch (e ? e.name : "unknown") {
                          case "goerli":
                            r = "eth-goerli.gateway.pokt.network";
                            break;
                          case "homestead":
                            r = "eth-mainnet.gateway.pokt.network";
                            break;
                          case "kovan":
                            r = "poa-kovan.gateway.pokt.network";
                            break;
                          case "matic":
                            r = "poly-mainnet.gateway.pokt.network";
                            break;
                          case "maticmum":
                            r = "polygon-mumbai-rpc.gateway.pokt.network";
                            break;
                          case "rinkeby":
                            r = "eth-rinkeby.gateway.pokt.network";
                            break;
                          case "ropsten":
                            r = "eth-ropsten.gateway.pokt.network";
                            break;
                          default:
                            a.throwError("unsupported network", i.Logger.errors.INVALID_ARGUMENT, { argument: "network", value: e });
                        }
                        var n = { headers: {}, url: "https://" + r + "/v1/lb/" + t.applicationId };
                        return null != t.applicationSecretKey && ((n.user = ""), (n.password = t.applicationSecretKey)), n;
                      }),
                      (t.prototype.isCommunityResource = function () {
                        return this.applicationId === u;
                      }),
                      t
                    );
                  })(c.UrlJsonRpcProvider);
                r.PocketProvider = l;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/pocket-provider.js" }
    ],
    [
      500,
      { "./_version": 484, "./json-rpc-provider": 497, "@ethersproject/logger": 477, "@ethersproject/properties": 483 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    }),
                  i =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  s =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        o,
                        i,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: []
                        };
                      return (
                        (i = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                                    !(o = o.call(n, i[1])).done)
                                )
                                  return o;
                                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;
                                  case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                  case 5:
                                    s.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      s = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                      s.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                      (s.label = o[1]), (o = i);
                                      break;
                                    }
                                    if (o && s.label < o[2]) {
                                      (s.label = o[2]), s.ops.push(i);
                                      break;
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                i = t.call(e, s);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = o = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.UrlJsonRpcProvider = r.StaticJsonRpcProvider = void 0);
                var a = e("@ethersproject/properties"),
                  c = e("@ethersproject/logger"),
                  u = e("./_version"),
                  l = new c.Logger(u.version),
                  d = (function (e) {
                    function t() {
                      return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                      o(t, e),
                      (t.prototype.detectNetwork = function () {
                        return i(this, void 0, void 0, function () {
                          var t;
                          return s(this, function (r) {
                            switch (r.label) {
                              case 0:
                                return null != (t = this.network) ? [3, 2] : [4, e.prototype.detectNetwork.call(this)];
                              case 1:
                                (t = r.sent()) || l.throwError("no network detected", c.Logger.errors.UNKNOWN_ERROR, {}),
                                  null == this._network && ((0, a.defineReadOnly)(this, "_network", t), this.emit("network", t, null)),
                                  (r.label = 2);
                              case 2:
                                return [2, t];
                            }
                          });
                        });
                      }),
                      t
                    );
                  })(e("./json-rpc-provider").JsonRpcProvider);
                r.StaticJsonRpcProvider = d;
                var p = (function (e) {
                  function t(r, n) {
                    var o,
                      i = this.constructor;
                    l.checkAbstract(i, t), (r = (0, a.getStatic)(i, "getNetwork")(r)), (n = (0, a.getStatic)(i, "getApiKey")(n));
                    var s = (0, a.getStatic)(i, "getUrl")(r, n);
                    return (
                      (o = e.call(this, s, r) || this),
                      "string" == typeof n
                        ? (0, a.defineReadOnly)(o, "apiKey", n)
                        : null != n &&
                          Object.keys(n).forEach(function (e) {
                            (0, a.defineReadOnly)(o, e, n[e]);
                          }),
                      o
                    );
                  }
                  return (
                    o(t, e),
                    (t.prototype._startPending = function () {
                      l.warn("WARNING: API provider does not support pending filters");
                    }),
                    (t.prototype.isCommunityResource = function () {
                      return !1;
                    }),
                    (t.prototype.getSigner = function (e) {
                      return l.throwError("API provider does not support signing", c.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "getSigner"
                      });
                    }),
                    (t.prototype.listAccounts = function () {
                      return Promise.resolve([]);
                    }),
                    (t.getApiKey = function (e) {
                      return e;
                    }),
                    (t.getUrl = function (e, t) {
                      return l.throwError("not implemented; sub-classes must override getUrl", c.Logger.errors.NOT_IMPLEMENTED, {
                        operation: "getUrl"
                      });
                    }),
                    t
                  );
                })(d);
                r.UrlJsonRpcProvider = p;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/url-json-rpc-provider.js" }
    ],
    [
      501,
      { "./_version": 484, "./json-rpc-provider": 497, "@ethersproject/logger": 477, "@ethersproject/properties": 483 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.Web3Provider = void 0);
                var i = e("@ethersproject/properties"),
                  s = e("@ethersproject/logger"),
                  a = e("./_version"),
                  c = new s.Logger(a.version),
                  u = e("./json-rpc-provider"),
                  l = 1;
                function d(e, t) {
                  var r = "Web3LegacyFetcher";
                  return function (e, n) {
                    var o = this,
                      s = { method: e, params: n, id: l++, jsonrpc: "2.0" };
                    return new Promise(function (e, n) {
                      o.emit("debug", { action: "request", fetcher: r, request: (0, i.deepCopy)(s), provider: o }),
                        t(s, function (t, i) {
                          if (t) return o.emit("debug", { action: "response", fetcher: r, error: t, request: s, provider: o }), n(t);
                          if ((o.emit("debug", { action: "response", fetcher: r, request: s, response: i, provider: o }), i.error)) {
                            var a = new Error(i.error.message);
                            return (a.code = i.error.code), (a.data = i.error.data), n(a);
                          }
                          e(i.result);
                        });
                    });
                  };
                }
                var p = (function (e) {
                  function t(t, r) {
                    var n;
                    null == t && c.throwArgumentError("missing provider", "provider", t);
                    var o = null,
                      s = null,
                      a = null;
                    return (
                      "function" == typeof t
                        ? ((o = "unknown:"), (s = t))
                        : (!(o = t.host || t.path || "") && t.isMetaMask && (o = "metamask"),
                          (a = t),
                          t.request
                            ? ("" === o && (o = "eip-1193:"),
                              (s = (function (e) {
                                return function (t, r) {
                                  var n = this;
                                  null == r && (r = []);
                                  var o = { method: t, params: r };
                                  return (
                                    this.emit("debug", {
                                      action: "request",
                                      fetcher: "Eip1193Fetcher",
                                      request: (0, i.deepCopy)(o),
                                      provider: this
                                    }),
                                    e.request(o).then(
                                      function (e) {
                                        return (
                                          n.emit("debug", {
                                            action: "response",
                                            fetcher: "Eip1193Fetcher",
                                            request: o,
                                            response: e,
                                            provider: n
                                          }),
                                          e
                                        );
                                      },
                                      function (e) {
                                        throw (
                                          (n.emit("debug", {
                                            action: "response",
                                            fetcher: "Eip1193Fetcher",
                                            request: o,
                                            error: e,
                                            provider: n
                                          }),
                                          e)
                                        );
                                      }
                                    )
                                  );
                                };
                              })(t)))
                            : t.sendAsync
                            ? (s = d(0, t.sendAsync.bind(t)))
                            : t.send
                            ? (s = d(0, t.send.bind(t)))
                            : c.throwArgumentError("unsupported provider", "provider", t),
                          o || (o = "unknown:")),
                      (n = e.call(this, o, r) || this),
                      (0, i.defineReadOnly)(n, "jsonRpcFetchFunc", s),
                      (0, i.defineReadOnly)(n, "provider", a),
                      n
                    );
                  }
                  return (
                    o(t, e),
                    (t.prototype.send = function (e, t) {
                      return this.jsonRpcFetchFunc(e, t);
                    }),
                    t
                  );
                })(u.JsonRpcProvider);
                r.Web3Provider = p;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/web3-provider.js" }
    ],
    [
      502,
      {
        "./_version": 484,
        "./json-rpc-provider": 497,
        "./ws": 489,
        "@ethersproject/bignumber": 446,
        "@ethersproject/logger": 477,
        "@ethersproject/properties": 483
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  o =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    }),
                  i =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  s =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        o,
                        i,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: []
                        };
                      return (
                        (i = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                                    !(o = o.call(n, i[1])).done)
                                )
                                  return o;
                                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;
                                  case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                  case 5:
                                    s.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      s = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                      s.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                      (s.label = o[1]), (o = i);
                                      break;
                                    }
                                    if (o && s.label < o[2]) {
                                      (s.label = o[2]), s.ops.push(i);
                                      break;
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                i = t.call(e, s);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = o = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.WebSocketProvider = void 0);
                var a = e("@ethersproject/bignumber"),
                  c = e("@ethersproject/properties"),
                  u = e("./json-rpc-provider"),
                  l = e("./ws"),
                  d = e("@ethersproject/logger"),
                  p = e("./_version"),
                  h = new d.Logger(p.version),
                  f = 1,
                  g = (function (e) {
                    function t(t, r) {
                      var n = this;
                      "any" === r &&
                        h.throwError("WebSocketProvider does not support 'any' network yet", d.Logger.errors.UNSUPPORTED_OPERATION, {
                          operation: "network:any"
                        }),
                        ((n = "string" == typeof t ? e.call(this, t, r) || this : e.call(this, "_websocket", r) || this)._pollingInterval =
                          -1),
                        (n._wsReady = !1),
                        "string" == typeof t
                          ? (0, c.defineReadOnly)(n, "_websocket", new l.WebSocket(n.connection.url))
                          : (0, c.defineReadOnly)(n, "_websocket", t),
                        (0, c.defineReadOnly)(n, "_requests", {}),
                        (0, c.defineReadOnly)(n, "_subs", {}),
                        (0, c.defineReadOnly)(n, "_subIds", {}),
                        (0, c.defineReadOnly)(n, "_detectNetwork", e.prototype.detectNetwork.call(n)),
                        (n.websocket.onopen = function () {
                          (n._wsReady = !0),
                            Object.keys(n._requests).forEach(function (e) {
                              n.websocket.send(n._requests[e].payload);
                            });
                        }),
                        (n.websocket.onmessage = function (e) {
                          var t = e.data,
                            r = JSON.parse(t);
                          if (null != r.id) {
                            var o = String(r.id),
                              i = n._requests[o];
                            if ((delete n._requests[o], r.result !== undefined))
                              i.callback(null, r.result),
                                n.emit("debug", { action: "response", request: JSON.parse(i.payload), response: r.result, provider: n });
                            else {
                              var s = null;
                              r.error
                                ? ((s = new Error(r.error.message || "unknown error")),
                                  (0, c.defineReadOnly)(s, "code", r.error.code || null),
                                  (0, c.defineReadOnly)(s, "response", t))
                                : (s = new Error("unknown error")),
                                i.callback(s, undefined),
                                n.emit("debug", { action: "response", error: s, request: JSON.parse(i.payload), provider: n });
                            }
                          } else if ("eth_subscription" === r.method) {
                            var a = n._subs[r.params.subscription];
                            a && a.processFunc(r.params.result);
                          } else console.warn("this should not happen");
                        });
                      var o = setInterval(function () {
                        n.emit("poll");
                      }, 1e3);
                      return o.unref && o.unref(), n;
                    }
                    return (
                      o(t, e),
                      Object.defineProperty(t.prototype, "websocket", {
                        get: function () {
                          return this._websocket;
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      (t.prototype.detectNetwork = function () {
                        return this._detectNetwork;
                      }),
                      Object.defineProperty(t.prototype, "pollingInterval", {
                        get: function () {
                          return 0;
                        },
                        set: function (e) {
                          h.throwError("cannot set polling interval on WebSocketProvider", d.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "setPollingInterval"
                          });
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      (t.prototype.resetEventsBlock = function (e) {
                        h.throwError("cannot reset events block on WebSocketProvider", d.Logger.errors.UNSUPPORTED_OPERATION, {
                          operation: "resetEventBlock"
                        });
                      }),
                      (t.prototype.poll = function () {
                        return i(this, void 0, void 0, function () {
                          return s(this, function (e) {
                            return [2, null];
                          });
                        });
                      }),
                      Object.defineProperty(t.prototype, "polling", {
                        set: function (e) {
                          e &&
                            h.throwError("cannot set polling on WebSocketProvider", d.Logger.errors.UNSUPPORTED_OPERATION, {
                              operation: "setPolling"
                            });
                        },
                        enumerable: !1,
                        configurable: !0
                      }),
                      (t.prototype.send = function (e, t) {
                        var r = this,
                          n = f++;
                        return new Promise(function (o, i) {
                          var s = JSON.stringify({ method: e, params: t, id: n, jsonrpc: "2.0" });
                          r.emit("debug", { action: "request", request: JSON.parse(s), provider: r }),
                            (r._requests[String(n)] = {
                              callback: function (e, t) {
                                return e ? i(e) : o(t);
                              },
                              payload: s
                            }),
                            r._wsReady && r.websocket.send(s);
                        });
                      }),
                      (t.defaultUrl = function () {
                        return "ws://localhost:8546";
                      }),
                      (t.prototype._subscribe = function (e, t, r) {
                        return i(this, void 0, void 0, function () {
                          var n,
                            o,
                            i = this;
                          return s(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return (
                                  null == (n = this._subIds[e]) &&
                                    ((n = Promise.all(t).then(function (e) {
                                      return i.send("eth_subscribe", e);
                                    })),
                                    (this._subIds[e] = n)),
                                  [4, n]
                                );
                              case 1:
                                return (o = s.sent()), (this._subs[o] = { tag: e, processFunc: r }), [2];
                            }
                          });
                        });
                      }),
                      (t.prototype._startEvent = function (e) {
                        var t = this;
                        switch (e.type) {
                          case "block":
                            this._subscribe("block", ["newHeads"], function (e) {
                              var r = a.BigNumber.from(e.number).toNumber();
                              (t._emitted.block = r), t.emit("block", r);
                            });
                            break;
                          case "pending":
                            this._subscribe("pending", ["newPendingTransactions"], function (e) {
                              t.emit("pending", e);
                            });
                            break;
                          case "filter":
                            this._subscribe(e.tag, ["logs", this._getFilter(e.filter)], function (r) {
                              null == r.removed && (r.removed = !1), t.emit(e.filter, t.formatter.filterLog(r));
                            });
                            break;
                          case "tx":
                            var r = function (e) {
                              var r = e.hash;
                              t.getTransactionReceipt(r).then(function (e) {
                                e && t.emit(r, e);
                              });
                            };
                            r(e),
                              this._subscribe("tx", ["newHeads"], function (e) {
                                t._events
                                  .filter(function (e) {
                                    return "tx" === e.type;
                                  })
                                  .forEach(r);
                              });
                            break;
                          case "debug":
                          case "poll":
                          case "willPoll":
                          case "didPoll":
                          case "error":
                            break;
                          default:
                            console.log("unhandled:", e);
                        }
                      }),
                      (t.prototype._stopEvent = function (e) {
                        var t = this,
                          r = e.tag;
                        if ("tx" === e.type) {
                          if (
                            this._events.filter(function (e) {
                              return "tx" === e.type;
                            }).length
                          )
                            return;
                          r = "tx";
                        } else if (this.listenerCount(e.event)) return;
                        var n = this._subIds[r];
                        n &&
                          (delete this._subIds[r],
                          n.then(function (e) {
                            t._subs[e] && (delete t._subs[e], t.send("eth_unsubscribe", [e]));
                          }));
                      }),
                      (t.prototype.destroy = function () {
                        return i(this, void 0, void 0, function () {
                          var e = this;
                          return s(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return this.websocket.readyState !== l.WebSocket.CONNECTING
                                  ? [3, 2]
                                  : [
                                      4,
                                      new Promise(function (t) {
                                        (e.websocket.onopen = function () {
                                          t(!0);
                                        }),
                                          (e.websocket.onerror = function () {
                                            t(!1);
                                          });
                                      })
                                    ];
                              case 1:
                                t.sent(), (t.label = 2);
                              case 2:
                                return this.websocket.close(1e3), [2];
                            }
                          });
                        });
                      }),
                      t
                    );
                  })(u.JsonRpcProvider);
                r.WebSocketProvider = g;
              };
            };
      },
      { package: "@ethersproject/providers", file: "node_modules/@ethersproject/providers/lib/websocket-provider.js" }
    ],
    [
      503,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "random/5.7.0");
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/random", file: "node_modules/@ethersproject/random/lib/_version.js" }
    ],
    [
      504,
      { "./_version": 503, "@ethersproject/bytes": 448, "@ethersproject/logger": 477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.randomBytes = void 0);
                var n = e("@ethersproject/bytes"),
                  o = e("@ethersproject/logger"),
                  i = e("./_version"),
                  s = new o.Logger(i.version);
                var a = (function () {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if ("undefined" != typeof global) return global;
                    throw new Error("unable to locate global object");
                  })(),
                  c = a.crypto || a.msCrypto;
                (c && c.getRandomValues) ||
                  (s.warn("WARNING: Missing strong random number source"),
                  (c = {
                    getRandomValues: function (e) {
                      return s.throwError("no secure random source avaialble", o.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "crypto.getRandomValues"
                      });
                    }
                  })),
                  (r.randomBytes = function (e) {
                    (e <= 0 || e > 1024 || e % 1 || e != e) && s.throwArgumentError("invalid length", "length", e);
                    var t = new Uint8Array(e);
                    return c.getRandomValues(t), (0, n.arrayify)(t);
                  });
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/random", file: "node_modules/@ethersproject/random/lib/browser-random.js" }
    ],
    [
      505,
      { "./random": 504, "./shuffle": 506 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.shuffled = r.randomBytes = void 0);
                var n = e("./random");
                Object.defineProperty(r, "randomBytes", {
                  enumerable: !0,
                  get: function () {
                    return n.randomBytes;
                  }
                });
                var o = e("./shuffle");
                Object.defineProperty(r, "shuffled", {
                  enumerable: !0,
                  get: function () {
                    return o.shuffled;
                  }
                });
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/random", file: "node_modules/@ethersproject/random/lib/index.js" }
    ],
    [
      506,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.shuffled = void 0),
                  (r.shuffled = function (e) {
                    for (var t = (e = e.slice()).length - 1; t > 0; t--) {
                      var r = Math.floor(Math.random() * (t + 1)),
                        n = e[t];
                      (e[t] = e[r]), (e[r] = n);
                    }
                    return e;
                  });
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/random", file: "node_modules/@ethersproject/random/lib/shuffle.js" }
    ],
    [
      507,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "rlp/5.7.0");
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/rlp", file: "node_modules/@ethersproject/rlp/lib/_version.js" }
    ],
    [
      508,
      { "./_version": 507, "@ethersproject/bytes": 448, "@ethersproject/logger": 477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.decode = r.encode = void 0);
                var n = e("@ethersproject/bytes"),
                  o = e("@ethersproject/logger"),
                  i = e("./_version"),
                  s = new o.Logger(i.version);
                function a(e) {
                  for (var t = []; e; ) t.unshift(255 & e), (e >>= 8);
                  return t;
                }
                function c(e, t, r) {
                  for (var n = 0, o = 0; o < r; o++) n = 256 * n + e[t + o];
                  return n;
                }
                function u(e) {
                  if (Array.isArray(e)) {
                    var t = [];
                    if (
                      (e.forEach(function (e) {
                        t = t.concat(u(e));
                      }),
                      t.length <= 55)
                    )
                      return t.unshift(192 + t.length), t;
                    var r = a(t.length);
                    return r.unshift(247 + r.length), r.concat(t);
                  }
                  (0, n.isBytesLike)(e) || s.throwArgumentError("RLP object must be BytesLike", "object", e);
                  var o = Array.prototype.slice.call((0, n.arrayify)(e));
                  if (1 === o.length && o[0] <= 127) return o;
                  if (o.length <= 55) return o.unshift(128 + o.length), o;
                  var i = a(o.length);
                  return i.unshift(183 + i.length), i.concat(o);
                }
                function l(e, t, r, n) {
                  for (var i = []; r < t + 1 + n; ) {
                    var a = d(e, r);
                    i.push(a.result),
                      (r += a.consumed) > t + 1 + n && s.throwError("child data too short", o.Logger.errors.BUFFER_OVERRUN, {});
                  }
                  return { consumed: 1 + n, result: i };
                }
                function d(e, t) {
                  if ((0 === e.length && s.throwError("data too short", o.Logger.errors.BUFFER_OVERRUN, {}), e[t] >= 248)) {
                    t + 1 + (a = e[t] - 247) > e.length && s.throwError("data short segment too short", o.Logger.errors.BUFFER_OVERRUN, {});
                    var r = c(e, t + 1, a);
                    return (
                      t + 1 + a + r > e.length && s.throwError("data long segment too short", o.Logger.errors.BUFFER_OVERRUN, {}),
                      l(e, t, t + 1 + a, a + r)
                    );
                  }
                  if (e[t] >= 192) {
                    var i = e[t] - 192;
                    return (
                      t + 1 + i > e.length && s.throwError("data array too short", o.Logger.errors.BUFFER_OVERRUN, {}), l(e, t, t + 1, i)
                    );
                  }
                  if (e[t] >= 184) {
                    var a;
                    t + 1 + (a = e[t] - 183) > e.length && s.throwError("data array too short", o.Logger.errors.BUFFER_OVERRUN, {});
                    var u = c(e, t + 1, a);
                    return (
                      t + 1 + a + u > e.length && s.throwError("data array too short", o.Logger.errors.BUFFER_OVERRUN, {}),
                      { consumed: 1 + a + u, result: (0, n.hexlify)(e.slice(t + 1 + a, t + 1 + a + u)) }
                    );
                  }
                  if (e[t] >= 128) {
                    var d = e[t] - 128;
                    return (
                      t + 1 + d > e.length && s.throwError("data too short", o.Logger.errors.BUFFER_OVERRUN, {}),
                      { consumed: 1 + d, result: (0, n.hexlify)(e.slice(t + 1, t + 1 + d)) }
                    );
                  }
                  return { consumed: 1, result: (0, n.hexlify)(e[t]) };
                }
                (r.encode = function (e) {
                  return (0, n.hexlify)(u(e));
                }),
                  (r.decode = function (e) {
                    var t = (0, n.arrayify)(e),
                      r = d(t, 0);
                    return r.consumed !== t.length && s.throwArgumentError("invalid rlp data", "data", e), r.result;
                  });
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/rlp", file: "node_modules/@ethersproject/rlp/lib/index.js" }
    ],
    [
      509,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "sha2/5.7.0");
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/sha2", file: "node_modules/@ethersproject/sha2/lib/_version.js" }
    ],
    [
      510,
      { "./_version": 509, "./types": 512, "@ethersproject/bytes": 448, "@ethersproject/logger": 477, "hash.js": 3810 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.computeHmac = r.sha512 = r.sha256 = r.ripemd160 = void 0);
                var o = n(e("hash.js")),
                  i = e("@ethersproject/bytes"),
                  s = e("./types"),
                  a = e("@ethersproject/logger"),
                  c = e("./_version"),
                  u = new a.Logger(c.version);
                (r.ripemd160 = function (e) {
                  return (
                    "0x" +
                    o.default
                      .ripemd160()
                      .update((0, i.arrayify)(e))
                      .digest("hex")
                  );
                }),
                  (r.sha256 = function (e) {
                    return (
                      "0x" +
                      o.default
                        .sha256()
                        .update((0, i.arrayify)(e))
                        .digest("hex")
                    );
                  }),
                  (r.sha512 = function (e) {
                    return (
                      "0x" +
                      o.default
                        .sha512()
                        .update((0, i.arrayify)(e))
                        .digest("hex")
                    );
                  }),
                  (r.computeHmac = function (e, t, r) {
                    return (
                      s.SupportedAlgorithm[e] ||
                        u.throwError("unsupported algorithm " + e, a.Logger.errors.UNSUPPORTED_OPERATION, {
                          operation: "hmac",
                          algorithm: e
                        }),
                      "0x" +
                        o.default
                          .hmac(o.default[e], (0, i.arrayify)(t))
                          .update((0, i.arrayify)(r))
                          .digest("hex")
                    );
                  });
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/sha2", file: "node_modules/@ethersproject/sha2/lib/browser-sha2.js" }
    ],
    [
      511,
      { "./sha2": 510, "./types": 512 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.SupportedAlgorithm = r.sha512 = r.sha256 = r.ripemd160 = r.computeHmac = void 0);
                var n = e("./sha2");
                Object.defineProperty(r, "computeHmac", {
                  enumerable: !0,
                  get: function () {
                    return n.computeHmac;
                  }
                }),
                  Object.defineProperty(r, "ripemd160", {
                    enumerable: !0,
                    get: function () {
                      return n.ripemd160;
                    }
                  }),
                  Object.defineProperty(r, "sha256", {
                    enumerable: !0,
                    get: function () {
                      return n.sha256;
                    }
                  }),
                  Object.defineProperty(r, "sha512", {
                    enumerable: !0,
                    get: function () {
                      return n.sha512;
                    }
                  });
                var o = e("./types");
                Object.defineProperty(r, "SupportedAlgorithm", {
                  enumerable: !0,
                  get: function () {
                    return o.SupportedAlgorithm;
                  }
                });
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/sha2", file: "node_modules/@ethersproject/sha2/lib/index.js" }
    ],
    [
      512,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.SupportedAlgorithm = void 0),
                  (function (e) {
                    (e.sha256 = "sha256"), (e.sha512 = "sha512");
                  })(r.SupportedAlgorithm || (r.SupportedAlgorithm = {}));
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/sha2", file: "node_modules/@ethersproject/sha2/lib/types.js" }
    ],
    [
      513,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "signing-key/5.7.0");
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/signing-key", file: "node_modules/@ethersproject/signing-key/lib/_version.js" }
    ],
    [
      514,
      { elliptic: 3153 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.EC = void 0);
                var o = n(e("elliptic")).default.ec;
                r.EC = o;
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/signing-key", file: "node_modules/@ethersproject/signing-key/lib/elliptic.js" }
    ],
    [
      515,
      { "./_version": 513, "./elliptic": 514, "@ethersproject/bytes": 448, "@ethersproject/logger": 477, "@ethersproject/properties": 483 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.computePublicKey = r.recoverPublicKey = r.SigningKey = void 0);
                var n = e("./elliptic"),
                  o = e("@ethersproject/bytes"),
                  i = e("@ethersproject/properties"),
                  s = e("@ethersproject/logger"),
                  a = e("./_version"),
                  c = new s.Logger(a.version),
                  u = null;
                function l() {
                  return u || (u = new n.EC("secp256k1")), u;
                }
                var d = (function () {
                  function e(e) {
                    (0, i.defineReadOnly)(this, "curve", "secp256k1"),
                      (0, i.defineReadOnly)(this, "privateKey", (0, o.hexlify)(e)),
                      32 !== (0, o.hexDataLength)(this.privateKey) &&
                        c.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                    var t = l().keyFromPrivate((0, o.arrayify)(this.privateKey));
                    (0, i.defineReadOnly)(this, "publicKey", "0x" + t.getPublic(!1, "hex")),
                      (0, i.defineReadOnly)(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")),
                      (0, i.defineReadOnly)(this, "_isSigningKey", !0);
                  }
                  return (
                    (e.prototype._addPoint = function (e) {
                      var t = l().keyFromPublic((0, o.arrayify)(this.publicKey)),
                        r = l().keyFromPublic((0, o.arrayify)(e));
                      return "0x" + t.pub.add(r.pub).encodeCompressed("hex");
                    }),
                    (e.prototype.signDigest = function (e) {
                      var t = l().keyFromPrivate((0, o.arrayify)(this.privateKey)),
                        r = (0, o.arrayify)(e);
                      32 !== r.length && c.throwArgumentError("bad digest length", "digest", e);
                      var n = t.sign(r, { canonical: !0 });
                      return (0, o.splitSignature)({
                        recoveryParam: n.recoveryParam,
                        r: (0, o.hexZeroPad)("0x" + n.r.toString(16), 32),
                        s: (0, o.hexZeroPad)("0x" + n.s.toString(16), 32)
                      });
                    }),
                    (e.prototype.computeSharedSecret = function (e) {
                      var t = l().keyFromPrivate((0, o.arrayify)(this.privateKey)),
                        r = l().keyFromPublic((0, o.arrayify)(p(e)));
                      return (0, o.hexZeroPad)("0x" + t.derive(r.getPublic()).toString(16), 32);
                    }),
                    (e.isSigningKey = function (e) {
                      return !(!e || !e._isSigningKey);
                    }),
                    e
                  );
                })();
                function p(e, t) {
                  var r = (0, o.arrayify)(e);
                  if (32 === r.length) {
                    var n = new d(r);
                    return t ? "0x" + l().keyFromPrivate(r).getPublic(!0, "hex") : n.publicKey;
                  }
                  return 33 === r.length
                    ? t
                      ? (0, o.hexlify)(r)
                      : "0x" + l().keyFromPublic(r).getPublic(!1, "hex")
                    : 65 === r.length
                    ? t
                      ? "0x" + l().keyFromPublic(r).getPublic(!0, "hex")
                      : (0, o.hexlify)(r)
                    : c.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
                }
                (r.SigningKey = d),
                  (r.recoverPublicKey = function (e, t) {
                    var r = (0, o.splitSignature)(t),
                      n = { r: (0, o.arrayify)(r.r), s: (0, o.arrayify)(r.s) };
                    return (
                      "0x" +
                      l()
                        .recoverPubKey((0, o.arrayify)(e), n, r.recoveryParam)
                        .encode("hex", !1)
                    );
                  }),
                  (r.computePublicKey = p);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/signing-key", file: "node_modules/@ethersproject/signing-key/lib/index.js" }
    ],
    [
      518,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "strings/5.7.0");
              };
            };
      },
      { package: "@ethersproject/abi>@ethersproject/strings", file: "node_modules/@ethersproject/strings/lib/_version.js" }
    ],
    [
      519,
      { "./utf8": 522, "@ethersproject/bytes": 448, "@ethersproject/constants": 452 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.parseBytes32String = r.formatBytes32String = void 0);
                var n = e("@ethersproject/constants"),
                  o = e("@ethersproject/bytes"),
                  i = e("./utf8");
                (r.formatBytes32String = function (e) {
                  var t = (0, i.toUtf8Bytes)(e);
                  if (t.length > 31) throw new Error("bytes32 string must be less than 32 bytes");
                  return (0, o.hexlify)((0, o.concat)([t, n.HashZero]).slice(0, 32));
                }),
                  (r.parseBytes32String = function (e) {
                    var t = (0, o.arrayify)(e);
                    if (32 !== t.length) throw new Error("invalid bytes32 - not 32 bytes long");
                    if (0 !== t[31]) throw new Error("invalid bytes32 string - no null terminator");
                    for (var r = 31; 0 === t[r - 1]; ) r--;
                    return (0, i.toUtf8String)(t.slice(0, r));
                  });
              };
            };
      },
      { package: "@ethersproject/abi>@ethersproject/strings", file: "node_modules/@ethersproject/strings/lib/bytes32.js" }
    ],
    [
      520,
      { "./utf8": 522 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.nameprep = r._nameprepTableC = r._nameprepTableB2 = r._nameprepTableA1 = void 0);
                var n = e("./utf8");
                function o(e, t) {
                  t ||
                    (t = function (e) {
                      return [parseInt(e, 16)];
                    });
                  var r = 0,
                    n = {};
                  return (
                    e.split(",").forEach(function (e) {
                      var o = e.split(":");
                      (r += parseInt(o[0], 16)), (n[r] = t(o[1]));
                    }),
                    n
                  );
                }
                function i(e) {
                  var t = 0;
                  return e.split(",").map(function (e) {
                    var r = e.split("-");
                    return (
                      1 === r.length ? (r[1] = "0") : "" === r[1] && (r[1] = "1"),
                      { l: t + parseInt(r[0], 16), h: (t = parseInt(r[1], 16)) }
                    );
                  });
                }
                function s(e, t) {
                  for (var r = 0, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (e >= (r += o.l) && e <= r + o.h && (e - r) % (o.d || 1) == 0) {
                      if (o.e && -1 !== o.e.indexOf(e - r)) continue;
                      return o;
                    }
                  }
                  return null;
                }
                var a = i(
                    "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
                  ),
                  c = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(function (e) {
                    return parseInt(e, 16);
                  }),
                  u = [
                    { h: 25, s: 32, l: 65 },
                    { h: 30, s: 32, e: [23], l: 127 },
                    { h: 54, s: 1, e: [48], l: 64, d: 2 },
                    { h: 14, s: 1, l: 57, d: 2 },
                    { h: 44, s: 1, l: 17, d: 2 },
                    { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
                    { h: 16, s: 1, l: 68, d: 2 },
                    { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
                    { h: 26, s: 32, e: [17], l: 435 },
                    { h: 22, s: 1, l: 71, d: 2 },
                    { h: 15, s: 80, l: 40 },
                    { h: 31, s: 32, l: 16 },
                    { h: 32, s: 1, l: 80, d: 2 },
                    { h: 52, s: 1, l: 42, d: 2 },
                    { h: 12, s: 1, l: 55, d: 2 },
                    { h: 40, s: 1, e: [38], l: 15, d: 2 },
                    { h: 14, s: 1, l: 48, d: 2 },
                    { h: 37, s: 48, l: 49 },
                    { h: 148, s: 1, l: 6351, d: 2 },
                    { h: 88, s: 1, l: 160, d: 2 },
                    { h: 15, s: 16, l: 704 },
                    { h: 25, s: 26, l: 854 },
                    { h: 25, s: 32, l: 55915 },
                    { h: 37, s: 40, l: 1247 },
                    { h: 25, s: -119711, l: 53248 },
                    { h: 25, s: -119763, l: 52 },
                    { h: 25, s: -119815, l: 52 },
                    { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
                    { h: 25, s: -119919, l: 52 },
                    { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
                    { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
                    { h: 25, s: -120075, l: 52 },
                    { h: 25, s: -120127, l: 52 },
                    { h: 25, s: -120179, l: 52 },
                    { h: 25, s: -120231, l: 52 },
                    { h: 25, s: -120283, l: 52 },
                    { h: 25, s: -120335, l: 52 },
                    { h: 24, s: -119543, e: [17], l: 56 },
                    { h: 24, s: -119601, e: [17], l: 58 },
                    { h: 24, s: -119659, e: [17], l: 58 },
                    { h: 24, s: -119717, e: [17], l: 58 },
                    { h: 24, s: -119775, e: [17], l: 58 }
                  ],
                  l = o(
                    "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
                  ),
                  d = o(
                    "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
                  ),
                  p = o(
                    "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
                    function (e) {
                      if (e.length % 4 != 0) throw new Error("bad data");
                      for (var t = [], r = 0; r < e.length; r += 4) t.push(parseInt(e.substring(r, r + 4), 16));
                      return t;
                    }
                  ),
                  h = i(
                    "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
                  );
                function f(e) {
                  return !!s(e, a);
                }
                function g(e) {
                  var t = s(e, u);
                  if (t) return [e + t.s];
                  var r = l[e];
                  if (r) return r;
                  var n = d[e];
                  if (n) return [e + n[0]];
                  var o = p[e];
                  return o || null;
                }
                function m(e) {
                  return !!s(e, h);
                }
                (r._nameprepTableA1 = f),
                  (r._nameprepTableB2 = g),
                  (r._nameprepTableC = m),
                  (r.nameprep = function (e) {
                    if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
                    var t,
                      r = (0, n.toUtf8CodePoints)(e);
                    (t = r.map(function (e) {
                      if (c.indexOf(e) >= 0) return [];
                      if (e >= 65024 && e <= 65039) return [];
                      var t = g(e);
                      return t || [e];
                    })),
                      (r = t.reduce(function (e, t) {
                        return (
                          t.forEach(function (t) {
                            e.push(t);
                          }),
                          e
                        );
                      }, [])),
                      (r = (0, n.toUtf8CodePoints)((0, n._toUtf8String)(r), n.UnicodeNormalizationForm.NFKC)).forEach(function (e) {
                        if (m(e)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
                      }),
                      r.forEach(function (e) {
                        if (f(e)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
                      });
                    var o = (0, n._toUtf8String)(r);
                    if ("-" === o.substring(0, 1) || "--" === o.substring(2, 4) || "-" === o.substring(o.length - 1))
                      throw new Error("invalid hyphen");
                    return o;
                  });
              };
            };
      },
      { package: "@ethersproject/abi>@ethersproject/strings", file: "node_modules/@ethersproject/strings/lib/idna.js" }
    ],
    [
      521,
      { "./bytes32": 519, "./idna": 520, "./utf8": 522 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.nameprep =
                    r.parseBytes32String =
                    r.formatBytes32String =
                    r.UnicodeNormalizationForm =
                    r.Utf8ErrorReason =
                    r.Utf8ErrorFuncs =
                    r.toUtf8String =
                    r.toUtf8CodePoints =
                    r.toUtf8Bytes =
                    r._toEscapedUtf8String =
                      void 0);
                var n = e("./bytes32");
                Object.defineProperty(r, "formatBytes32String", {
                  enumerable: !0,
                  get: function () {
                    return n.formatBytes32String;
                  }
                }),
                  Object.defineProperty(r, "parseBytes32String", {
                    enumerable: !0,
                    get: function () {
                      return n.parseBytes32String;
                    }
                  });
                var o = e("./idna");
                Object.defineProperty(r, "nameprep", {
                  enumerable: !0,
                  get: function () {
                    return o.nameprep;
                  }
                });
                var i = e("./utf8");
                Object.defineProperty(r, "_toEscapedUtf8String", {
                  enumerable: !0,
                  get: function () {
                    return i._toEscapedUtf8String;
                  }
                }),
                  Object.defineProperty(r, "toUtf8Bytes", {
                    enumerable: !0,
                    get: function () {
                      return i.toUtf8Bytes;
                    }
                  }),
                  Object.defineProperty(r, "toUtf8CodePoints", {
                    enumerable: !0,
                    get: function () {
                      return i.toUtf8CodePoints;
                    }
                  }),
                  Object.defineProperty(r, "toUtf8String", {
                    enumerable: !0,
                    get: function () {
                      return i.toUtf8String;
                    }
                  }),
                  Object.defineProperty(r, "UnicodeNormalizationForm", {
                    enumerable: !0,
                    get: function () {
                      return i.UnicodeNormalizationForm;
                    }
                  }),
                  Object.defineProperty(r, "Utf8ErrorFuncs", {
                    enumerable: !0,
                    get: function () {
                      return i.Utf8ErrorFuncs;
                    }
                  }),
                  Object.defineProperty(r, "Utf8ErrorReason", {
                    enumerable: !0,
                    get: function () {
                      return i.Utf8ErrorReason;
                    }
                  });
              };
            };
      },
      { package: "@ethersproject/abi>@ethersproject/strings", file: "node_modules/@ethersproject/strings/lib/index.js" }
    ],
    [
      522,
      { "./_version": 518, "@ethersproject/bytes": 448, "@ethersproject/logger": 477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.toUtf8CodePoints =
                    r.toUtf8String =
                    r._toUtf8String =
                    r._toEscapedUtf8String =
                    r.toUtf8Bytes =
                    r.Utf8ErrorFuncs =
                    r.Utf8ErrorReason =
                    r.UnicodeNormalizationForm =
                      void 0);
                var n,
                  o,
                  i = e("@ethersproject/bytes"),
                  s = e("@ethersproject/logger"),
                  a = e("./_version"),
                  c = new s.Logger(a.version);
                function u(e, t, r, n, i) {
                  if (e === o.BAD_PREFIX || e === o.UNEXPECTED_CONTINUE) {
                    for (var s = 0, a = t + 1; a < r.length && r[a] >> 6 == 2; a++) s++;
                    return s;
                  }
                  return e === o.OVERRUN ? r.length - t - 1 : 0;
                }
                function l(e, t) {
                  null == t && (t = r.Utf8ErrorFuncs.error), (e = (0, i.arrayify)(e));
                  for (var n = [], s = 0; s < e.length; ) {
                    var a = e[s++];
                    if (a >> 7 != 0) {
                      var c = null,
                        u = null;
                      if (192 == (224 & a)) (c = 1), (u = 127);
                      else if (224 == (240 & a)) (c = 2), (u = 2047);
                      else {
                        if (240 != (248 & a)) {
                          s += t(128 == (192 & a) ? o.UNEXPECTED_CONTINUE : o.BAD_PREFIX, s - 1, e, n);
                          continue;
                        }
                        (c = 3), (u = 65535);
                      }
                      if (s - 1 + c >= e.length) s += t(o.OVERRUN, s - 1, e, n);
                      else {
                        for (var l = a & ((1 << (8 - c - 1)) - 1), d = 0; d < c; d++) {
                          var p = e[s];
                          if (128 != (192 & p)) {
                            (s += t(o.MISSING_CONTINUE, s, e, n)), (l = null);
                            break;
                          }
                          (l = (l << 6) | (63 & p)), s++;
                        }
                        null !== l &&
                          (l > 1114111
                            ? (s += t(o.OUT_OF_RANGE, s - 1 - c, e, n, l))
                            : l >= 55296 && l <= 57343
                            ? (s += t(o.UTF16_SURROGATE, s - 1 - c, e, n, l))
                            : l <= u
                            ? (s += t(o.OVERLONG, s - 1 - c, e, n, l))
                            : n.push(l));
                      }
                    } else n.push(a);
                  }
                  return n;
                }
                function d(e, t) {
                  void 0 === t && (t = n.current), t != n.current && (c.checkNormalize(), (e = e.normalize(t)));
                  for (var r = [], o = 0; o < e.length; o++) {
                    var s = e.charCodeAt(o);
                    if (s < 128) r.push(s);
                    else if (s < 2048) r.push((s >> 6) | 192), r.push((63 & s) | 128);
                    else if (55296 == (64512 & s)) {
                      o++;
                      var a = e.charCodeAt(o);
                      if (o >= e.length || 56320 != (64512 & a)) throw new Error("invalid utf-8 string");
                      var u = 65536 + ((1023 & s) << 10) + (1023 & a);
                      r.push((u >> 18) | 240), r.push(((u >> 12) & 63) | 128), r.push(((u >> 6) & 63) | 128), r.push((63 & u) | 128);
                    } else r.push((s >> 12) | 224), r.push(((s >> 6) & 63) | 128), r.push((63 & s) | 128);
                  }
                  return (0, i.arrayify)(r);
                }
                function p(e) {
                  var t = "0000" + e.toString(16);
                  return "\\u" + t.substring(t.length - 4);
                }
                function h(e) {
                  return e
                    .map(function (e) {
                      return e <= 65535
                        ? String.fromCharCode(e)
                        : ((e -= 65536), String.fromCharCode(55296 + ((e >> 10) & 1023), 56320 + (1023 & e)));
                    })
                    .join("");
                }
                !(function (e) {
                  (e.current = ""), (e.NFC = "NFC"), (e.NFD = "NFD"), (e.NFKC = "NFKC"), (e.NFKD = "NFKD");
                })((n = r.UnicodeNormalizationForm || (r.UnicodeNormalizationForm = {}))),
                  (function (e) {
                    (e.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
                      (e.BAD_PREFIX = "bad codepoint prefix"),
                      (e.OVERRUN = "string overrun"),
                      (e.MISSING_CONTINUE = "missing continuation byte"),
                      (e.OUT_OF_RANGE = "out of UTF-8 range"),
                      (e.UTF16_SURROGATE = "UTF-16 surrogate"),
                      (e.OVERLONG = "overlong representation");
                  })((o = r.Utf8ErrorReason || (r.Utf8ErrorReason = {}))),
                  (r.Utf8ErrorFuncs = Object.freeze({
                    error: function (e, t, r, n, o) {
                      return c.throwArgumentError("invalid codepoint at offset " + t + "; " + e, "bytes", r);
                    },
                    ignore: u,
                    replace: function (e, t, r, n, i) {
                      return e === o.OVERLONG ? (n.push(i), 0) : (n.push(65533), u(e, t, r));
                    }
                  })),
                  (r.toUtf8Bytes = d),
                  (r._toEscapedUtf8String = function (e, t) {
                    return (
                      '"' +
                      l(e, t)
                        .map(function (e) {
                          if (e < 256) {
                            switch (e) {
                              case 8:
                                return "\\b";
                              case 9:
                                return "\\t";
                              case 10:
                                return "\\n";
                              case 13:
                                return "\\r";
                              case 34:
                                return '\\"';
                              case 92:
                                return "\\\\";
                            }
                            if (e >= 32 && e < 127) return String.fromCharCode(e);
                          }
                          return e <= 65535 ? p(e) : p(55296 + (((e -= 65536) >> 10) & 1023)) + p(56320 + (1023 & e));
                        })
                        .join("") +
                      '"'
                    );
                  }),
                  (r._toUtf8String = h),
                  (r.toUtf8String = function (e, t) {
                    return h(l(e, t));
                  }),
                  (r.toUtf8CodePoints = function (e, t) {
                    return void 0 === t && (t = n.current), l(d(e, t));
                  });
              };
            };
      },
      { package: "@ethersproject/abi>@ethersproject/strings", file: "node_modules/@ethersproject/strings/lib/utf8.js" }
    ],
    [
      523,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "transactions/5.7.0");
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/transactions", file: "node_modules/@ethersproject/transactions/lib/_version.js" }
    ],
    [
      524,
      {
        "./_version": 523,
        "@ethersproject/address": 439,
        "@ethersproject/bignumber": 446,
        "@ethersproject/bytes": 448,
        "@ethersproject/constants": 452,
        "@ethersproject/keccak256": 474,
        "@ethersproject/logger": 477,
        "@ethersproject/properties": 483,
        "@ethersproject/rlp": 508,
        "@ethersproject/signing-key": 515
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r),
                            Object.defineProperty(e, n, {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            });
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  o =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                      ? function (e, t) {
                          Object.defineProperty(e, "default", { enumerable: !0, value: t });
                        }
                      : function (e, t) {
                          e.default = t;
                        }),
                  i =
                    (this && this.__importStar) ||
                    function (e) {
                      if (e && e.__esModule) return e;
                      var t = {};
                      if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                      return o(t, e), t;
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.parse = r.serialize = r.accessListify = r.recoverAddress = r.computeAddress = r.TransactionTypes = void 0);
                var s = e("@ethersproject/address"),
                  a = e("@ethersproject/bignumber"),
                  c = e("@ethersproject/bytes"),
                  u = e("@ethersproject/constants"),
                  l = e("@ethersproject/keccak256"),
                  d = e("@ethersproject/properties"),
                  p = i(e("@ethersproject/rlp")),
                  h = e("@ethersproject/signing-key"),
                  f = e("@ethersproject/logger"),
                  g = e("./_version"),
                  m = new f.Logger(g.version);
                function y(e) {
                  return "0x" === e ? null : (0, s.getAddress)(e);
                }
                function _(e) {
                  return "0x" === e ? u.Zero : a.BigNumber.from(e);
                }
                !(function (e) {
                  (e[(e.legacy = 0)] = "legacy"), (e[(e.eip2930 = 1)] = "eip2930"), (e[(e.eip1559 = 2)] = "eip1559");
                })(r.TransactionTypes || (r.TransactionTypes = {}));
                var v = [
                    { name: "nonce", maxLength: 32, numeric: !0 },
                    { name: "gasPrice", maxLength: 32, numeric: !0 },
                    { name: "gasLimit", maxLength: 32, numeric: !0 },
                    { name: "to", length: 20 },
                    { name: "value", maxLength: 32, numeric: !0 },
                    { name: "data" }
                  ],
                  T = { chainId: !0, data: !0, gasLimit: !0, gasPrice: !0, nonce: !0, to: !0, type: !0, value: !0 };
                function E(e) {
                  var t = (0, h.computePublicKey)(e);
                  return (0, s.getAddress)((0, c.hexDataSlice)((0, l.keccak256)((0, c.hexDataSlice)(t, 1)), 12));
                }
                function b(e, t) {
                  return E((0, h.recoverPublicKey)((0, c.arrayify)(e), t));
                }
                function w(e, t) {
                  var r = (0, c.stripZeros)(a.BigNumber.from(e).toHexString());
                  return r.length > 32 && m.throwArgumentError("invalid length for " + t, "transaction:" + t, e), r;
                }
                function A(e, t) {
                  return {
                    address: (0, s.getAddress)(e),
                    storageKeys: (t || []).map(function (t, r) {
                      return (
                        32 !== (0, c.hexDataLength)(t) &&
                          m.throwArgumentError("invalid access list storageKey", "accessList[" + e + ":" + r + "]", t),
                        t.toLowerCase()
                      );
                    })
                  };
                }
                function N(e) {
                  if (Array.isArray(e))
                    return e.map(function (e, t) {
                      return Array.isArray(e)
                        ? (e.length > 2 &&
                            m.throwArgumentError("access list expected to be [ address, storageKeys[] ]", "value[" + t + "]", e),
                          A(e[0], e[1]))
                        : A(e.address, e.storageKeys);
                    });
                  var t = Object.keys(e).map(function (t) {
                    var r = e[t].reduce(function (e, t) {
                      return (e[t] = !0), e;
                    }, {});
                    return A(t, Object.keys(r).sort());
                  });
                  return (
                    t.sort(function (e, t) {
                      return e.address.localeCompare(t.address);
                    }),
                    t
                  );
                }
                function I(e) {
                  return N(e).map(function (e) {
                    return [e.address, e.storageKeys];
                  });
                }
                function O(e, t) {
                  if (null != e.gasPrice) {
                    var r = a.BigNumber.from(e.gasPrice),
                      n = a.BigNumber.from(e.maxFeePerGas || 0);
                    r.eq(n) || m.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", { gasPrice: r, maxFeePerGas: n });
                  }
                  var o = [
                    w(e.chainId || 0, "chainId"),
                    w(e.nonce || 0, "nonce"),
                    w(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                    w(e.maxFeePerGas || 0, "maxFeePerGas"),
                    w(e.gasLimit || 0, "gasLimit"),
                    null != e.to ? (0, s.getAddress)(e.to) : "0x",
                    w(e.value || 0, "value"),
                    e.data || "0x",
                    I(e.accessList || [])
                  ];
                  if (t) {
                    var i = (0, c.splitSignature)(t);
                    o.push(w(i.recoveryParam, "recoveryParam")), o.push((0, c.stripZeros)(i.r)), o.push((0, c.stripZeros)(i.s));
                  }
                  return (0, c.hexConcat)(["0x02", p.encode(o)]);
                }
                function R(e, t) {
                  var r = [
                    w(e.chainId || 0, "chainId"),
                    w(e.nonce || 0, "nonce"),
                    w(e.gasPrice || 0, "gasPrice"),
                    w(e.gasLimit || 0, "gasLimit"),
                    null != e.to ? (0, s.getAddress)(e.to) : "0x",
                    w(e.value || 0, "value"),
                    e.data || "0x",
                    I(e.accessList || [])
                  ];
                  if (t) {
                    var n = (0, c.splitSignature)(t);
                    r.push(w(n.recoveryParam, "recoveryParam")), r.push((0, c.stripZeros)(n.r)), r.push((0, c.stripZeros)(n.s));
                  }
                  return (0, c.hexConcat)(["0x01", p.encode(r)]);
                }
                function S(e, t, r) {
                  try {
                    var n = _(t[0]).toNumber();
                    if (0 !== n && 1 !== n) throw new Error("bad recid");
                    e.v = n;
                  } catch (e) {
                    m.throwArgumentError("invalid v for transaction type: 1", "v", t[0]);
                  }
                  (e.r = (0, c.hexZeroPad)(t[1], 32)), (e.s = (0, c.hexZeroPad)(t[2], 32));
                  try {
                    var o = (0, l.keccak256)(r(e));
                    e.from = b(o, { r: e.r, s: e.s, recoveryParam: e.v });
                  } catch (e) {}
                }
                (r.computeAddress = E),
                  (r.recoverAddress = b),
                  (r.accessListify = N),
                  (r.serialize = function (e, t) {
                    if (null == e.type || 0 === e.type)
                      return (
                        null != e.accessList &&
                          m.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", e),
                        (function (e, t) {
                          (0, d.checkProperties)(e, T);
                          var r = [];
                          v.forEach(function (t) {
                            var n = e[t.name] || [],
                              o = {};
                            t.numeric && (o.hexPad = "left"),
                              (n = (0, c.arrayify)((0, c.hexlify)(n, o))),
                              t.length &&
                                n.length !== t.length &&
                                n.length > 0 &&
                                m.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n),
                              t.maxLength &&
                                (n = (0, c.stripZeros)(n)).length > t.maxLength &&
                                m.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n),
                              r.push((0, c.hexlify)(n));
                          });
                          var n = 0;
                          if (
                            (null != e.chainId
                              ? "number" != typeof (n = e.chainId) && m.throwArgumentError("invalid transaction.chainId", "transaction", e)
                              : t && !(0, c.isBytesLike)(t) && t.v > 28 && (n = Math.floor((t.v - 35) / 2)),
                            0 !== n && (r.push((0, c.hexlify)(n)), r.push("0x"), r.push("0x")),
                            !t)
                          )
                            return p.encode(r);
                          var o = (0, c.splitSignature)(t),
                            i = 27 + o.recoveryParam;
                          return (
                            0 !== n
                              ? (r.pop(),
                                r.pop(),
                                r.pop(),
                                (i += 2 * n + 8),
                                o.v > 28 && o.v !== i && m.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t))
                              : o.v !== i && m.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t),
                            r.push((0, c.hexlify)(i)),
                            r.push((0, c.stripZeros)((0, c.arrayify)(o.r))),
                            r.push((0, c.stripZeros)((0, c.arrayify)(o.s))),
                            p.encode(r)
                          );
                        })(e, t)
                      );
                    switch (e.type) {
                      case 1:
                        return R(e, t);
                      case 2:
                        return O(e, t);
                    }
                    return m.throwError("unsupported transaction type: " + e.type, f.Logger.errors.UNSUPPORTED_OPERATION, {
                      operation: "serializeTransaction",
                      transactionType: e.type
                    });
                  }),
                  (r.parse = function (e) {
                    var t = (0, c.arrayify)(e);
                    if (t[0] > 127)
                      return (function (e) {
                        var t = p.decode(e);
                        9 !== t.length && 6 !== t.length && m.throwArgumentError("invalid raw transaction", "rawTransaction", e);
                        var r = {
                          nonce: _(t[0]).toNumber(),
                          gasPrice: _(t[1]),
                          gasLimit: _(t[2]),
                          to: y(t[3]),
                          value: _(t[4]),
                          data: t[5],
                          chainId: 0
                        };
                        if (6 === t.length) return r;
                        try {
                          r.v = a.BigNumber.from(t[6]).toNumber();
                        } catch (e) {
                          return r;
                        }
                        if (
                          ((r.r = (0, c.hexZeroPad)(t[7], 32)),
                          (r.s = (0, c.hexZeroPad)(t[8], 32)),
                          a.BigNumber.from(r.r).isZero() && a.BigNumber.from(r.s).isZero())
                        )
                          (r.chainId = r.v), (r.v = 0);
                        else {
                          (r.chainId = Math.floor((r.v - 35) / 2)), r.chainId < 0 && (r.chainId = 0);
                          var n = r.v - 27,
                            o = t.slice(0, 6);
                          0 !== r.chainId && (o.push((0, c.hexlify)(r.chainId)), o.push("0x"), o.push("0x"), (n -= 2 * r.chainId + 8));
                          var i = (0, l.keccak256)(p.encode(o));
                          try {
                            r.from = b(i, { r: (0, c.hexlify)(r.r), s: (0, c.hexlify)(r.s), recoveryParam: n });
                          } catch (e) {}
                          r.hash = (0, l.keccak256)(e);
                        }
                        return (r.type = null), r;
                      })(t);
                    switch (t[0]) {
                      case 1:
                        return (function (e) {
                          var t = p.decode(e.slice(1));
                          8 !== t.length &&
                            11 !== t.length &&
                            m.throwArgumentError("invalid component count for transaction type: 1", "payload", (0, c.hexlify)(e));
                          var r = {
                            type: 1,
                            chainId: _(t[0]).toNumber(),
                            nonce: _(t[1]).toNumber(),
                            gasPrice: _(t[2]),
                            gasLimit: _(t[3]),
                            to: y(t[4]),
                            value: _(t[5]),
                            data: t[6],
                            accessList: N(t[7])
                          };
                          return 8 === t.length || ((r.hash = (0, l.keccak256)(e)), S(r, t.slice(8), R)), r;
                        })(t);
                      case 2:
                        return (function (e) {
                          var t = p.decode(e.slice(1));
                          9 !== t.length &&
                            12 !== t.length &&
                            m.throwArgumentError("invalid component count for transaction type: 2", "payload", (0, c.hexlify)(e));
                          var r = _(t[2]),
                            n = _(t[3]),
                            o = {
                              type: 2,
                              chainId: _(t[0]).toNumber(),
                              nonce: _(t[1]).toNumber(),
                              maxPriorityFeePerGas: r,
                              maxFeePerGas: n,
                              gasPrice: null,
                              gasLimit: _(t[4]),
                              to: y(t[5]),
                              value: _(t[6]),
                              data: t[7],
                              accessList: N(t[8])
                            };
                          return 9 === t.length || ((o.hash = (0, l.keccak256)(e)), S(o, t.slice(9), O)), o;
                        })(t);
                    }
                    return m.throwError("unsupported transaction type: " + t[0], f.Logger.errors.UNSUPPORTED_OPERATION, {
                      operation: "parseTransaction",
                      transactionType: t[0]
                    });
                  });
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/transactions", file: "node_modules/@ethersproject/transactions/lib/index.js" }
    ],
    [
      529,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "web/5.7.1");
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/web", file: "node_modules/@ethersproject/web/lib/_version.js" }
    ],
    [
      530,
      { "@ethersproject/bytes": 448 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  o =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        o,
                        i,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: []
                        };
                      return (
                        (i = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                                    !(o = o.call(n, i[1])).done)
                                )
                                  return o;
                                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;
                                  case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                  case 5:
                                    s.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      s = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                      s.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                      (s.label = o[1]), (o = i);
                                      break;
                                    }
                                    if (o && s.label < o[2]) {
                                      (s.label = o[2]), s.ops.push(i);
                                      break;
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                i = t.call(e, s);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = o = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.getUrl = void 0);
                var i = e("@ethersproject/bytes");
                r.getUrl = function (e, t) {
                  return n(this, void 0, void 0, function () {
                    var r, n, s, a, c;
                    return o(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return (
                            null == t && (t = {}),
                            (r = { method: t.method || "GET", headers: t.headers || {}, body: t.body || undefined }),
                            !0 !== t.skipFetchSetup &&
                              ((r.mode = "cors"),
                              (r.cache = "no-cache"),
                              (r.credentials = "same-origin"),
                              (r.redirect = "follow"),
                              (r.referrer = "client")),
                            null != t.fetchOptions &&
                              ((n = t.fetchOptions).mode && (r.mode = n.mode),
                              n.cache && (r.cache = n.cache),
                              n.credentials && (r.credentials = n.credentials),
                              n.redirect && (r.redirect = n.redirect),
                              n.referrer && (r.referrer = n.referrer)),
                            [4, fetch(e, r)]
                          );
                        case 1:
                          return [4, (s = o.sent()).arrayBuffer()];
                        case 2:
                          return (
                            (a = o.sent()),
                            (c = {}),
                            s.headers.forEach
                              ? s.headers.forEach(function (e, t) {
                                  c[t.toLowerCase()] = e;
                                })
                              : s.headers.keys().forEach(function (e) {
                                  c[e.toLowerCase()] = s.headers.get(e);
                                }),
                            [2, { headers: c, statusCode: s.status, statusMessage: s.statusText, body: (0, i.arrayify)(new Uint8Array(a)) }]
                          );
                      }
                    });
                  });
                };
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/web", file: "node_modules/@ethersproject/web/lib/browser-geturl.js" }
    ],
    [
      531,
      {
        "./_version": 529,
        "./geturl": 530,
        "@ethersproject/base64": 441,
        "@ethersproject/bytes": 448,
        "@ethersproject/logger": 477,
        "@ethersproject/properties": 483,
        "@ethersproject/strings": 521
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  o =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        o,
                        i,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                          },
                          trys: [],
                          ops: []
                        };
                      return (
                        (i = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                                    !(o = o.call(n, i[1])).done)
                                )
                                  return o;
                                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;
                                  case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                  case 5:
                                    s.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      s = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                      s.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                      (s.label = o[1]), (o = i);
                                      break;
                                    }
                                    if (o && s.label < o[2]) {
                                      (s.label = o[2]), s.ops.push(i);
                                      break;
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                i = t.call(e, s);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = o = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.poll = r.fetchJson = r._fetchData = void 0);
                var i = e("@ethersproject/base64"),
                  s = e("@ethersproject/bytes"),
                  a = e("@ethersproject/properties"),
                  c = e("@ethersproject/strings"),
                  u = e("@ethersproject/logger"),
                  l = e("./_version"),
                  d = new u.Logger(l.version),
                  p = e("./geturl");
                function h(e) {
                  return new Promise(function (t) {
                    setTimeout(t, e);
                  });
                }
                function f(e, t) {
                  if (null == e) return null;
                  if ("string" == typeof e) return e;
                  if ((0, s.isBytesLike)(e)) {
                    if (t && ("text" === t.split("/")[0] || "application/json" === t.split(";")[0].trim()))
                      try {
                        return (0, c.toUtf8String)(e);
                      } catch (e) {}
                    return (0, s.hexlify)(e);
                  }
                  return e;
                }
                function g(e, t, r) {
                  var s = "object" == typeof e && null != e.throttleLimit ? e.throttleLimit : 12;
                  d.assertArgument(s > 0 && s % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", s);
                  var l = "object" == typeof e ? e.throttleCallback : null,
                    g = "object" == typeof e && "number" == typeof e.throttleSlotInterval ? e.throttleSlotInterval : 100;
                  d.assertArgument(g > 0 && g % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", g);
                  var m = "object" == typeof e && !!e.errorPassThrough,
                    y = {},
                    _ = null,
                    v = { method: "GET" },
                    T = !1,
                    E = 12e4;
                  if ("string" == typeof e) _ = e;
                  else if ("object" == typeof e) {
                    if (
                      ((null != e && null != e.url) || d.throwArgumentError("missing URL", "connection.url", e),
                      (_ = e.url),
                      "number" == typeof e.timeout && e.timeout > 0 && (E = e.timeout),
                      e.headers)
                    )
                      for (var b in e.headers)
                        (y[b.toLowerCase()] = { key: b, value: String(e.headers[b]) }),
                          ["if-none-match", "if-modified-since"].indexOf(b.toLowerCase()) >= 0 && (T = !0);
                    if (((v.allowGzip = !!e.allowGzip), null != e.user && null != e.password)) {
                      "https:" !== _.substring(0, 6) &&
                        !0 !== e.allowInsecureAuthentication &&
                        d.throwError("basic authentication requires a secure https url", u.Logger.errors.INVALID_ARGUMENT, {
                          argument: "url",
                          url: _,
                          user: e.user,
                          password: "[REDACTED]"
                        });
                      var w = e.user + ":" + e.password;
                      y.authorization = { key: "Authorization", value: "Basic " + (0, i.encode)((0, c.toUtf8Bytes)(w)) };
                    }
                    null != e.skipFetchSetup && (v.skipFetchSetup = !!e.skipFetchSetup),
                      null != e.fetchOptions && (v.fetchOptions = (0, a.shallowCopy)(e.fetchOptions));
                  }
                  var A,
                    N = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
                    I = _ ? _.match(N) : null;
                  if (I)
                    try {
                      var O = {
                          statusCode: 200,
                          statusMessage: "OK",
                          headers: { "content-type": I[1] || "text/plain" },
                          body: I[2]
                            ? (0, i.decode)(I[3])
                            : ((A = I[3]),
                              (0, c.toUtf8Bytes)(
                                A.replace(/%([0-9a-f][0-9a-f])/gi, function (e, t) {
                                  return String.fromCharCode(parseInt(t, 16));
                                })
                              ))
                        },
                        R = O.body;
                      return r && (R = r(O.body, O)), Promise.resolve(R);
                    } catch (e) {
                      d.throwError("processing response error", u.Logger.errors.SERVER_ERROR, {
                        body: f(I[1], I[2]),
                        error: e,
                        requestBody: null,
                        requestMethod: "GET",
                        url: _
                      });
                    }
                  t &&
                    ((v.method = "POST"),
                    (v.body = t),
                    null == y["content-type"] && (y["content-type"] = { key: "Content-Type", value: "application/octet-stream" }),
                    null == y["content-length"] && (y["content-length"] = { key: "Content-Length", value: String(t.length) }));
                  var S = {};
                  Object.keys(y).forEach(function (e) {
                    var t = y[e];
                    S[t.key] = t.value;
                  }),
                    (v.headers = S);
                  var P,
                    k =
                      ((P = null),
                      {
                        promise: new Promise(function (e, t) {
                          E &&
                            (P = setTimeout(function () {
                              null != P &&
                                ((P = null),
                                t(
                                  d.makeError("timeout", u.Logger.errors.TIMEOUT, {
                                    requestBody: f(v.body, S["content-type"]),
                                    requestMethod: v.method,
                                    timeout: E,
                                    url: _
                                  })
                                ));
                            }, E));
                        }),
                        cancel: function () {
                          null != P && (clearTimeout(P), (P = null));
                        }
                      }),
                    C = (function () {
                      return n(this, void 0, void 0, function () {
                        var e, t, n, i, a, c, y, E, b;
                        return o(this, function (o) {
                          switch (o.label) {
                            case 0:
                              (e = 0), (o.label = 1);
                            case 1:
                              if (!(e < s)) return [3, 20];
                              (t = null), (o.label = 2);
                            case 2:
                              return o.trys.push([2, 9, , 10]), [4, (0, p.getUrl)(_, v)];
                            case 3:
                              return (
                                (t = o.sent()),
                                e < s
                                  ? 301 !== t.statusCode && 302 !== t.statusCode
                                    ? [3, 4]
                                    : ((n = t.headers.location || ""),
                                      "GET" === v.method && n.match(/^https:/) ? ((_ = t.headers.location), [3, 19]) : [3, 8])
                                  : [3, 8]
                              );
                            case 4:
                              return 429 !== t.statusCode ? [3, 8] : ((b = !0), l ? [4, l(e, _)] : [3, 6]);
                            case 5:
                              (b = o.sent()), (o.label = 6);
                            case 6:
                              return b
                                ? (0,
                                  (i = t.headers["retry-after"]),
                                  [
                                    4,
                                    h(
                                      "string" == typeof i && i.match(/^[1-9][0-9]*$/)
                                        ? 1e3 * parseInt(i)
                                        : g * parseInt(String(Math.random() * Math.pow(2, e)))
                                    )
                                  ])
                                : [3, 8];
                            case 7:
                              return o.sent(), [3, 19];
                            case 8:
                              return [3, 10];
                            case 9:
                              return (
                                (a = o.sent()),
                                null == (t = a.response) &&
                                  (k.cancel(),
                                  d.throwError("missing response", u.Logger.errors.SERVER_ERROR, {
                                    requestBody: f(v.body, S["content-type"]),
                                    requestMethod: v.method,
                                    serverError: a,
                                    url: _
                                  })),
                                [3, 10]
                              );
                            case 10:
                              if (
                                ((c = t.body),
                                T && 304 === t.statusCode
                                  ? (c = null)
                                  : !m &&
                                    (t.statusCode < 200 || t.statusCode >= 300) &&
                                    (k.cancel(),
                                    d.throwError("bad response", u.Logger.errors.SERVER_ERROR, {
                                      status: t.statusCode,
                                      headers: t.headers,
                                      body: f(c, t.headers ? t.headers["content-type"] : null),
                                      requestBody: f(v.body, S["content-type"]),
                                      requestMethod: v.method,
                                      url: _
                                    })),
                                !r)
                              )
                                return [3, 18];
                              o.label = 11;
                            case 11:
                              return o.trys.push([11, 13, , 18]), [4, r(c, t)];
                            case 12:
                              return (y = o.sent()), k.cancel(), [2, y];
                            case 13:
                              return (E = o.sent()).throttleRetry && e < s ? ((b = !0), l ? [4, l(e, _)] : [3, 15]) : [3, 17];
                            case 14:
                              (b = o.sent()), (o.label = 15);
                            case 15:
                              return b ? [4, h(g * parseInt(String(Math.random() * Math.pow(2, e))))] : [3, 17];
                            case 16:
                              return o.sent(), [3, 19];
                            case 17:
                              return (
                                k.cancel(),
                                d.throwError("processing response error", u.Logger.errors.SERVER_ERROR, {
                                  body: f(c, t.headers ? t.headers["content-type"] : null),
                                  error: E,
                                  requestBody: f(v.body, S["content-type"]),
                                  requestMethod: v.method,
                                  url: _
                                }),
                                [3, 18]
                              );
                            case 18:
                              return k.cancel(), [2, c];
                            case 19:
                              return e++, [3, 1];
                            case 20:
                              return [
                                2,
                                d.throwError("failed response", u.Logger.errors.SERVER_ERROR, {
                                  requestBody: f(v.body, S["content-type"]),
                                  requestMethod: v.method,
                                  url: _
                                })
                              ];
                          }
                        });
                      });
                    })();
                  return Promise.race([k.promise, C]);
                }
                (r._fetchData = g),
                  (r.fetchJson = function (e, t, r) {
                    var n = null;
                    if (null != t) {
                      n = (0, c.toUtf8Bytes)(t);
                      var o = "string" == typeof e ? { url: e } : (0, a.shallowCopy)(e);
                      if (o.headers)
                        0 !==
                          Object.keys(o.headers).filter(function (e) {
                            return "content-type" === e.toLowerCase();
                          }).length || ((o.headers = (0, a.shallowCopy)(o.headers)), (o.headers["content-type"] = "application/json"));
                      else o.headers = { "content-type": "application/json" };
                      e = o;
                    }
                    return g(e, n, function (e, t) {
                      var n = null;
                      if (null != e)
                        try {
                          n = JSON.parse((0, c.toUtf8String)(e));
                        } catch (t) {
                          d.throwError("invalid JSON", u.Logger.errors.SERVER_ERROR, { body: e, error: t });
                        }
                      return r && (n = r(n, t)), n;
                    });
                  }),
                  (r.poll = function (e, t) {
                    return (
                      t || (t = {}),
                      null == (t = (0, a.shallowCopy)(t)).floor && (t.floor = 0),
                      null == t.ceiling && (t.ceiling = 1e4),
                      null == t.interval && (t.interval = 250),
                      new Promise(function (r, n) {
                        var o = null,
                          i = !1,
                          s = function () {
                            return !i && ((i = !0), o && clearTimeout(o), !0);
                          };
                        t.timeout &&
                          (o = setTimeout(function () {
                            s() && n(new Error("timeout"));
                          }, t.timeout));
                        var a = t.retryLimit,
                          c = 0;
                        !(function o() {
                          return e().then(
                            function (e) {
                              if (e !== undefined) s() && r(e);
                              else if (t.oncePoll) t.oncePoll.once("poll", o);
                              else if (t.onceBlock) t.onceBlock.once("block", o);
                              else if (!i) {
                                if (++c > a) return void (s() && n(new Error("retry limit reached")));
                                var u = t.interval * parseInt(String(Math.random() * Math.pow(2, c)));
                                u < t.floor && (u = t.floor), u > t.ceiling && (u = t.ceiling), setTimeout(o, u);
                              }
                              return null;
                            },
                            function (e) {
                              s() && n(e);
                            }
                          );
                        })();
                      })
                    );
                  });
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/web", file: "node_modules/@ethersproject/web/lib/index.js" }
    ],
    [
      548,
      { "@ethereumjs/util": 410, "@keystonehq/bc-ur-registry": 567, buffer: 2913, hdkey: 3822, uuid: 4695 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var n,
                      o = e("@keystonehq/bc-ur-registry"),
                      i = e("uuid"),
                      s = (n = e("hdkey")) && "object" == typeof n && "default" in n ? n.default : n,
                      a = e("@ethereumjs/util");
                    const c = {
                        ETH_SIGN_REQUEST: new o.RegistryType("eth-sign-request", 401),
                        ETH_SIGNATURE: new o.RegistryType("eth-signature", 402),
                        ETH_NFT_ITEM: new o.RegistryType("eth-nft-item", 403)
                      },
                      { decodeToDataItem: u, RegistryTypes: l } = o.extend;
                    var d, p;
                    !(function (e) {
                      (e[(e.requestId = 1)] = "requestId"),
                        (e[(e.signData = 2)] = "signData"),
                        (e[(e.dataType = 3)] = "dataType"),
                        (e[(e.chainId = 4)] = "chainId"),
                        (e[(e.derivationPath = 5)] = "derivationPath"),
                        (e[(e.address = 6)] = "address"),
                        (e[(e.origin = 7)] = "origin");
                    })(d || (d = {})),
                      ((p = r.DataType || (r.DataType = {}))[(p.transaction = 1)] = "transaction"),
                      (p[(p.typedData = 2)] = "typedData"),
                      (p[(p.personalMessage = 3)] = "personalMessage"),
                      (p[(p.typedTransaction = 4)] = "typedTransaction");
                    class h extends o.RegistryItem {
                      constructor(e) {
                        super(),
                          (this.getRegistryType = () => c.ETH_SIGN_REQUEST),
                          (this.getRequestId = () => this.requestId),
                          (this.getSignData = () => this.signData),
                          (this.getDataType = () => this.dataType),
                          (this.getChainId = () => this.chainId),
                          (this.getDerivationPath = () => this.derivationPath.getPath()),
                          (this.getSourceFingerprint = () => this.derivationPath.getSourceFingerprint()),
                          (this.getSignRequestAddress = () => this.address),
                          (this.getOrigin = () => this.origin),
                          (this.toDataItem = () => {
                            const e = {};
                            this.requestId && (e[d.requestId] = new o.DataItem(this.requestId, l.UUID.getTag())),
                              this.address && (e[d.address] = this.address),
                              this.chainId && (e[d.chainId] = Number(this.chainId)),
                              this.origin && (e[d.origin] = this.origin),
                              (e[d.signData] = this.signData),
                              (e[d.dataType] = this.dataType);
                            const t = this.derivationPath.toDataItem();
                            return t.setTag(this.derivationPath.getRegistryType().getTag()), (e[d.derivationPath] = t), new o.DataItem(e);
                          }),
                          (this.requestId = e.requestId),
                          (this.signData = e.signData),
                          (this.dataType = e.dataType),
                          (this.chainId = e.chainId),
                          (this.derivationPath = e.derivationPath),
                          (this.address = e.address),
                          (this.origin = e.origin);
                      }
                      static constructETHRequest(e, r, n, s, a, c, u, l) {
                        const d = n.replace(/[m|M]\//, "").split("/"),
                          p = new o.CryptoKeypath(
                            d.map((e) => {
                              const t = parseInt(e.replace("'", ""));
                              let r = !1;
                              return e.endsWith("'") && (r = !0), new o.PathComponent({ index: t, hardened: r });
                            }),
                            t.from(s, "hex")
                          );
                        return new h({
                          requestId: a ? t.from(i.parse(a)) : undefined,
                          signData: e,
                          dataType: r,
                          derivationPath: p,
                          chainId: c,
                          address: u ? t.from(u.replace("0x", ""), "hex") : undefined,
                          origin: l || undefined
                        });
                      }
                    }
                    (h.fromDataItem = (e) => {
                      const t = e.getData(),
                        r = t[d.signData],
                        n = t[d.dataType],
                        i = o.CryptoKeypath.fromDataItem(t[d.derivationPath]),
                        s = t[d.chainId] ? t[d.chainId] : undefined,
                        a = t[d.address] ? t[d.address] : undefined,
                        c = t[d.requestId] ? t[d.requestId].getData() : undefined,
                        u = t[d.origin] ? t[d.origin] : undefined;
                      return new h({ requestId: c, signData: r, dataType: n, chainId: s, derivationPath: i, address: a, origin: u });
                    }),
                      (h.fromCBOR = (e) => {
                        const t = u(e);
                        return h.fromDataItem(t);
                      });
                    const { RegistryTypes: f, decodeToDataItem: g } = o.extend;
                    var m;
                    !(function (e) {
                      (e[(e.requestId = 1)] = "requestId"), (e[(e.signature = 2)] = "signature"), (e[(e.origin = 3)] = "origin");
                    })(m || (m = {}));
                    class y extends o.RegistryItem {
                      constructor(e, t, r) {
                        super(),
                          (this.getRegistryType = () => c.ETH_SIGNATURE),
                          (this.getRequestId = () => this.requestId),
                          (this.getSignature = () => this.signature),
                          (this.getOrigin = () => this.origin),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              this.requestId && (e[m.requestId] = new o.DataItem(this.requestId, f.UUID.getTag())),
                              this.origin && (e[m.origin] = this.origin),
                              (e[m.signature] = this.signature),
                              new o.DataItem(e)
                            );
                          }),
                          (this.signature = e),
                          (this.requestId = t),
                          (this.origin = r);
                      }
                    }
                    (y.fromDataItem = (e) => {
                      const t = e.getData(),
                        r = t[m.signature],
                        n = t[m.requestId] ? t[m.requestId].getData() : undefined;
                      return new y(r, n, t[m.origin]);
                    }),
                      (y.fromCBOR = (e) => {
                        const t = g(e);
                        return y.fromDataItem(t);
                      });
                    const { decodeToDataItem: _ } = o.extend;
                    var v;
                    !(function (e) {
                      (e[(e.chainId = 1)] = "chainId"),
                        (e[(e.contractAddress = 2)] = "contractAddress"),
                        (e[(e.contractName = 3)] = "contractName"),
                        (e[(e.name = 4)] = "name"),
                        (e[(e.mediaData = 5)] = "mediaData");
                    })(v || (v = {}));
                    class T extends o.RegistryItem {
                      constructor(e) {
                        super(),
                          (this.getRegistryType = () => c.ETH_NFT_ITEM),
                          (this.getChainId = () => this.chainId),
                          (this.getName = () => this.name),
                          (this.getmediaData = () => this.mediaData),
                          (this.getContractAddress = () => this.contractAddress),
                          (this.getContractName = () => this.contractName),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              (e[v.chainId] = this.chainId),
                              (e[v.name] = this.name),
                              (e[v.contractAddress] = this.contractAddress),
                              (e[v.contractName] = this.contractName),
                              (e[v.mediaData] = this.mediaData),
                              new o.DataItem(e)
                            );
                          }),
                          (this.chainId = e.chainId),
                          (this.name = e.name),
                          (this.contractAddress = e.contractAddress),
                          (this.contractName = e.contractName),
                          (this.mediaData = e.mediaData);
                      }
                      static constructETHNFTItem(e, t, r, n, o) {
                        return new T({ chainId: e, contractAddress: t, contractName: r, mediaData: o, name: n });
                      }
                    }
                    (T.fromDataItem = (e) => {
                      const t = e.getData(),
                        r = t[v.chainId],
                        n = t[v.name],
                        o = t[v.mediaData],
                        i = t[v.contractAddress],
                        s = t[v.contractName];
                      return new T({ chainId: r, name: n, contractAddress: i, contractName: s, mediaData: o });
                    }),
                      (T.fromCBOR = (e) => {
                        const t = _(e);
                        return T.fromDataItem(t);
                      });
                    const E = (e, t) => {
                      const r = s.fromExtendedKey(e).derive(t),
                        n = "0x" + a.publicToAddress(r.publicKey, !0).toString("hex");
                      return a.toChecksumAddress(n);
                    };
                    o.patchTags(
                      Object.values(c)
                        .filter((e) => !!e.getTag())
                        .map((e) => e.getTag())
                    ),
                      Object.keys(o).forEach(function (e) {
                        "default" !== e &&
                          Object.defineProperty(r, e, {
                            enumerable: !0,
                            get: function () {
                              return o[e];
                            }
                          });
                      }),
                      (r.ETHNFTItem = T),
                      (r.ETHSignature = y),
                      (r.EthSignRequest = h),
                      (r.findHDPathFromAddress = (e, t, r, n) => {
                        for (let o = 0; o < r; o++) {
                          const r = E(t, `M/0/${o}`);
                          if (e.toLowerCase() == r.toLowerCase()) return `${n}/0/${o}`;
                        }
                        return null;
                      }),
                      (r.generateAddressFromXpub = E);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth",
        file: "node_modules/@keystonehq/bc-ur-registry-eth/dist/bc-ur-registry-eth.cjs.development.js"
      }
    ],
    [
      549,
      { "@ethereumjs/util": 410, "@keystonehq/bc-ur-registry": 567, buffer: 2913, hdkey: 3822, uuid: 4695 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var n,
                      o = e("@keystonehq/bc-ur-registry"),
                      i = e("uuid"),
                      s = (n = e("hdkey")) && "object" == typeof n && "default" in n ? n.default : n,
                      a = e("@ethereumjs/util");
                    const c = {
                        ETH_SIGN_REQUEST: new o.RegistryType("eth-sign-request", 401),
                        ETH_SIGNATURE: new o.RegistryType("eth-signature", 402),
                        ETH_NFT_ITEM: new o.RegistryType("eth-nft-item", 403)
                      },
                      { decodeToDataItem: u, RegistryTypes: l } = o.extend;
                    var d, p;
                    !(function (e) {
                      (e[(e.requestId = 1)] = "requestId"),
                        (e[(e.signData = 2)] = "signData"),
                        (e[(e.dataType = 3)] = "dataType"),
                        (e[(e.chainId = 4)] = "chainId"),
                        (e[(e.derivationPath = 5)] = "derivationPath"),
                        (e[(e.address = 6)] = "address"),
                        (e[(e.origin = 7)] = "origin");
                    })(d || (d = {})),
                      ((p = r.DataType || (r.DataType = {}))[(p.transaction = 1)] = "transaction"),
                      (p[(p.typedData = 2)] = "typedData"),
                      (p[(p.personalMessage = 3)] = "personalMessage"),
                      (p[(p.typedTransaction = 4)] = "typedTransaction");
                    class h extends o.RegistryItem {
                      constructor(e) {
                        super(),
                          (this.getRegistryType = () => c.ETH_SIGN_REQUEST),
                          (this.getRequestId = () => this.requestId),
                          (this.getSignData = () => this.signData),
                          (this.getDataType = () => this.dataType),
                          (this.getChainId = () => this.chainId),
                          (this.getDerivationPath = () => this.derivationPath.getPath()),
                          (this.getSourceFingerprint = () => this.derivationPath.getSourceFingerprint()),
                          (this.getSignRequestAddress = () => this.address),
                          (this.getOrigin = () => this.origin),
                          (this.toDataItem = () => {
                            const e = {};
                            this.requestId && (e[d.requestId] = new o.DataItem(this.requestId, l.UUID.getTag())),
                              this.address && (e[d.address] = this.address),
                              this.chainId && (e[d.chainId] = Number(this.chainId)),
                              this.origin && (e[d.origin] = this.origin),
                              (e[d.signData] = this.signData),
                              (e[d.dataType] = this.dataType);
                            const t = this.derivationPath.toDataItem();
                            return t.setTag(this.derivationPath.getRegistryType().getTag()), (e[d.derivationPath] = t), new o.DataItem(e);
                          }),
                          (this.requestId = e.requestId),
                          (this.signData = e.signData),
                          (this.dataType = e.dataType),
                          (this.chainId = e.chainId),
                          (this.derivationPath = e.derivationPath),
                          (this.address = e.address),
                          (this.origin = e.origin);
                      }
                      static constructETHRequest(e, r, n, s, a, c, u, l) {
                        const d = n.replace(/[m|M]\//, "").split("/"),
                          p = new o.CryptoKeypath(
                            d.map((e) => {
                              const t = parseInt(e.replace("'", ""));
                              let r = !1;
                              return e.endsWith("'") && (r = !0), new o.PathComponent({ index: t, hardened: r });
                            }),
                            t.from(s, "hex")
                          );
                        return new h({
                          requestId: a ? t.from(i.parse(a)) : void 0,
                          signData: e,
                          dataType: r,
                          derivationPath: p,
                          chainId: c,
                          address: u ? t.from(u.replace("0x", ""), "hex") : void 0,
                          origin: l || void 0
                        });
                      }
                    }
                    (h.fromDataItem = (e) => {
                      const t = e.getData(),
                        r = t[d.signData],
                        n = t[d.dataType],
                        i = o.CryptoKeypath.fromDataItem(t[d.derivationPath]),
                        s = t[d.chainId] ? t[d.chainId] : void 0,
                        a = t[d.address] ? t[d.address] : void 0,
                        c = t[d.requestId] ? t[d.requestId].getData() : void 0;
                      return new h({
                        requestId: c,
                        signData: r,
                        dataType: n,
                        chainId: s,
                        derivationPath: i,
                        address: a,
                        origin: t[d.origin] ? t[d.origin] : void 0
                      });
                    }),
                      (h.fromCBOR = (e) => {
                        const t = u(e);
                        return h.fromDataItem(t);
                      });
                    const { RegistryTypes: f, decodeToDataItem: g } = o.extend;
                    var m;
                    !(function (e) {
                      (e[(e.requestId = 1)] = "requestId"), (e[(e.signature = 2)] = "signature"), (e[(e.origin = 3)] = "origin");
                    })(m || (m = {}));
                    class y extends o.RegistryItem {
                      constructor(e, t, r) {
                        super(),
                          (this.getRegistryType = () => c.ETH_SIGNATURE),
                          (this.getRequestId = () => this.requestId),
                          (this.getSignature = () => this.signature),
                          (this.getOrigin = () => this.origin),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              this.requestId && (e[m.requestId] = new o.DataItem(this.requestId, f.UUID.getTag())),
                              this.origin && (e[m.origin] = this.origin),
                              (e[m.signature] = this.signature),
                              new o.DataItem(e)
                            );
                          }),
                          (this.signature = e),
                          (this.requestId = t),
                          (this.origin = r);
                      }
                    }
                    (y.fromDataItem = (e) => {
                      const t = e.getData(),
                        r = t[m.signature],
                        n = t[m.requestId] ? t[m.requestId].getData() : void 0;
                      return new y(r, n, t[m.origin]);
                    }),
                      (y.fromCBOR = (e) => {
                        const t = g(e);
                        return y.fromDataItem(t);
                      });
                    const { decodeToDataItem: _ } = o.extend;
                    var v;
                    !(function (e) {
                      (e[(e.chainId = 1)] = "chainId"),
                        (e[(e.contractAddress = 2)] = "contractAddress"),
                        (e[(e.contractName = 3)] = "contractName"),
                        (e[(e.name = 4)] = "name"),
                        (e[(e.mediaData = 5)] = "mediaData");
                    })(v || (v = {}));
                    class T extends o.RegistryItem {
                      constructor(e) {
                        super(),
                          (this.getRegistryType = () => c.ETH_NFT_ITEM),
                          (this.getChainId = () => this.chainId),
                          (this.getName = () => this.name),
                          (this.getmediaData = () => this.mediaData),
                          (this.getContractAddress = () => this.contractAddress),
                          (this.getContractName = () => this.contractName),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              (e[v.chainId] = this.chainId),
                              (e[v.name] = this.name),
                              (e[v.contractAddress] = this.contractAddress),
                              (e[v.contractName] = this.contractName),
                              (e[v.mediaData] = this.mediaData),
                              new o.DataItem(e)
                            );
                          }),
                          (this.chainId = e.chainId),
                          (this.name = e.name),
                          (this.contractAddress = e.contractAddress),
                          (this.contractName = e.contractName),
                          (this.mediaData = e.mediaData);
                      }
                      static constructETHNFTItem(e, t, r, n, o) {
                        return new T({ chainId: e, contractAddress: t, contractName: r, mediaData: o, name: n });
                      }
                    }
                    (T.fromDataItem = (e) => {
                      const t = e.getData();
                      return new T({
                        chainId: t[v.chainId],
                        name: t[v.name],
                        contractAddress: t[v.contractAddress],
                        contractName: t[v.contractName],
                        mediaData: t[v.mediaData]
                      });
                    }),
                      (T.fromCBOR = (e) => {
                        const t = _(e);
                        return T.fromDataItem(t);
                      });
                    const E = (e, t) => {
                      const r = s.fromExtendedKey(e).derive(t),
                        n = "0x" + a.publicToAddress(r.publicKey, !0).toString("hex");
                      return a.toChecksumAddress(n);
                    };
                    o.patchTags(
                      Object.values(c)
                        .filter((e) => !!e.getTag())
                        .map((e) => e.getTag())
                    ),
                      Object.keys(o).forEach(function (e) {
                        "default" !== e &&
                          Object.defineProperty(r, e, {
                            enumerable: !0,
                            get: function () {
                              return o[e];
                            }
                          });
                      }),
                      (r.ETHNFTItem = T),
                      (r.ETHSignature = y),
                      (r.EthSignRequest = h),
                      (r.findHDPathFromAddress = (e, t, r, n) => {
                        for (let o = 0; o < r; o++) {
                          const r = E(t, "M/0/" + o);
                          if (e.toLowerCase() == r.toLowerCase()) return `${n}/0/${o}`;
                        }
                        return null;
                      }),
                      (r.generateAddressFromXpub = E);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth",
        file: "node_modules/@keystonehq/bc-ur-registry-eth/dist/bc-ur-registry-eth.cjs.production.min.js"
      }
    ],
    [
      55,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = function (e) {
                    if (e.includes(n)) {
                      const t = e.slice(n.length);
                      return t.slice(t.indexOf(o) + o.length);
                    }
                    return e;
                  });
                const n = "Error: [ethjs-rpc] rpc error with payload ",
                  o = "Error: ";
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/extractEthjsErrorMessage.js" }
    ],
    [
      550,
      { "./bc-ur-registry-eth.cjs.development.js": 548, "./bc-ur-registry-eth.cjs.production.min.js": 549 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = e("./bc-ur-registry-eth.cjs.production.min.js");
              };
            };
      },
      { package: "@keystonehq/bc-ur-registry-eth", file: "node_modules/@keystonehq/bc-ur-registry-eth/dist/index.js" }
    ],
    [
      551,
      { "./RegistryItem": 562, "./RegistryType": 563, "./lib": 570 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.Bytes = void 0);
                const n = e("./lib"),
                  o = e("./RegistryItem"),
                  i = e("./RegistryType");
                class s extends o.RegistryItem {
                  constructor(e) {
                    super(),
                      (this.bytes = e),
                      (this.getRegistryType = () => i.RegistryTypes.BYTES),
                      (this.getData = () => this.bytes),
                      (this.toDataItem = () => new n.DataItem(this.bytes));
                  }
                }
                (r.Bytes = s),
                  (s.fromDataItem = (e) => {
                    const t = e.getData();
                    if (!t) throw new Error(`#[ur-registry][Bytes][fn.fromDataItem]: decoded [dataItem][#data] is undefined: ${e}`);
                    return new s(t);
                  }),
                  (s.fromCBOR = (e) => {
                    const t = (0, n.decodeToDataItem)(e);
                    return s.fromDataItem(t);
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/Bytes.js"
      }
    ],
    [
      552,
      { ".": 567, "./RegistryItem": 562, "./RegistryType": 563, "./lib": 570, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoAccount = void 0);
                    const n = e("."),
                      o = e("./lib"),
                      i = e("./RegistryItem"),
                      s = e("./RegistryType");
                    var a;
                    !(function (e) {
                      (e[(e.masterFingerprint = 1)] = "masterFingerprint"), (e[(e.outputDescriptors = 2)] = "outputDescriptors");
                    })(a || (a = {}));
                    class c extends i.RegistryItem {
                      constructor(e, t) {
                        super(),
                          (this.masterFingerprint = e),
                          (this.outputDescriptors = t),
                          (this.getRegistryType = () => s.RegistryTypes.CRYPTO_ACCOUNT),
                          (this.getMasterFingerprint = () => this.masterFingerprint),
                          (this.getOutputDescriptors = () => this.outputDescriptors),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              this.masterFingerprint && (e[a.masterFingerprint] = this.masterFingerprint.readUInt32BE(0)),
                              this.outputDescriptors && (e[a.outputDescriptors] = this.outputDescriptors.map((e) => e.toDataItem())),
                              new o.DataItem(e)
                            );
                          });
                      }
                    }
                    (r.CryptoAccount = c),
                      (c.fromDataItem = (e) => {
                        const r = e.getData(),
                          o = t.alloc(4),
                          i = r[a.masterFingerprint];
                        i && o.writeUInt32BE(i, 0);
                        const s = r[a.outputDescriptors].map((e) => n.CryptoOutput.fromDataItem(e));
                        return new c(o, s);
                      }),
                      (c.fromCBOR = (e) => {
                        const t = (0, o.decodeToDataItem)(e);
                        return c.fromDataItem(t);
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoAccount.js"
      }
    ],
    [
      553,
      { "./RegistryItem": 562, "./RegistryType": 563, "./lib": 570 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoCoinInfo = r.Network = r.Type = void 0);
                const n = e("./lib"),
                  o = e("./RegistryItem"),
                  i = e("./RegistryType");
                var s, a, c;
                !(function (e) {
                  (e.type = "1"), (e.network = "2");
                })(s || (s = {})),
                  (function (e) {
                    e[(e.bitcoin = 0)] = "bitcoin";
                  })((a = r.Type || (r.Type = {}))),
                  (function (e) {
                    (e[(e.mainnet = 0)] = "mainnet"), (e[(e.testnet = 1)] = "testnet");
                  })((c = r.Network || (r.Network = {})));
                class u extends o.RegistryItem {
                  constructor(e, t) {
                    super(),
                      (this.type = e),
                      (this.network = t),
                      (this.getRegistryType = () => i.RegistryTypes.CRYPTO_COIN_INFO),
                      (this.getType = () => this.type || a.bitcoin),
                      (this.getNetwork = () => this.network || c.mainnet),
                      (this.toDataItem = () => {
                        const e = {};
                        return this.type && (e[s.type] = this.type), this.network && (e[s.network] = this.network), new n.DataItem(e);
                      });
                  }
                }
                (r.CryptoCoinInfo = u),
                  (u.fromDataItem = (e) => {
                    const t = e.getData(),
                      r = t[s.type],
                      n = t[s.network];
                    return new u(r, n);
                  }),
                  (u.fromCBOR = (e) => {
                    const t = (0, n.decodeToDataItem)(e);
                    return u.fromDataItem(t);
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoCoinInfo.js"
      }
    ],
    [
      5535,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.SUPPORT_REQUEST_LINK =
                    r.SECONDARY =
                    r.PRIMARY =
                    r.PASSWORD_MIN_LENGTH =
                    r.OUTDATED_BROWSER_VERSIONS =
                    r.CONTRACT_ADDRESS_LINK =
                      void 0);
                (r.PRIMARY = "PRIMARY"),
                  (r.SECONDARY = "SECONDARY"),
                  (r.SUPPORT_REQUEST_LINK = "https://metamask.zendesk.com/hc/en-us"),
                  (r.CONTRACT_ADDRESS_LINK =
                    "https://metamask.zendesk.com/hc/en-us/articles/360020028092-What-is-the-known-contract-address-warning-"),
                  (r.PASSWORD_MIN_LENGTH = 8),
                  (r.OUTDATED_BROWSER_VERSIONS = { chrome: "<90", edge: "<90", firefox: "<91", opera: "<76" });
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/common.ts" }
    ],
    [
      554,
      { "./RegistryItem": 562, "./RegistryType": 563, "./lib": 570 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoECKey = void 0);
                const n = e("./lib"),
                  o = e("./RegistryItem"),
                  i = e("./RegistryType");
                var s;
                !(function (e) {
                  (e[(e.curve = 1)] = "curve"), (e[(e.private = 2)] = "private"), (e[(e.data = 3)] = "data");
                })(s || (s = {}));
                class a extends o.RegistryItem {
                  constructor(e) {
                    super(),
                      (this.isECKey = () => !0),
                      (this.getCurve = () => this.curve || 0),
                      (this.isPrivateKey = () => this.privateKey || !1),
                      (this.getData = () => this.data),
                      (this.getRegistryType = () => i.RegistryTypes.CRYPTO_ECKEY),
                      (this.toDataItem = () => {
                        const e = {};
                        return (
                          this.curve && (e[s.curve] = this.curve),
                          this.privateKey !== undefined && (e[s.private] = this.privateKey),
                          (e[s.data] = this.data),
                          new n.DataItem(e)
                        );
                      }),
                      (this.getOutputDescriptorContent = () => this.data.toString("hex")),
                      (this.data = e.data),
                      (this.curve = e.curve),
                      (this.privateKey = e.privateKey || undefined);
                  }
                }
                (r.CryptoECKey = a),
                  (a.fromDataItem = (e) => {
                    const t = e.getData(),
                      r = t[s.curve],
                      n = t[s.private],
                      o = t[s.data];
                    if (!o)
                      throw new Error(`#[ur-registry][CryptoECKey][fn.fromDataItem]: decoded [dataItem][#data.data] is undefined: ${e}`);
                    return new a({ data: o, curve: r, privateKey: n });
                  }),
                  (a.fromCBOR = (e) => {
                    const t = (0, n.decodeToDataItem)(e);
                    return a.fromDataItem(t);
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoECKey.js"
      }
    ],
    [
      5542,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.VIEW_QUOTE_ROUTE =
                    r.UNLOCK_ROUTE =
                    r.TOKEN_DETAILS =
                    r.SWAPS_ROUTE =
                    r.SWAPS_NOTIFICATION_ROUTE =
                    r.SWAPS_MAINTENANCE_ROUTE =
                    r.SWAPS_ERROR_ROUTE =
                    r.SNAPS_VIEW_ROUTE =
                    r.SNAPS_ROUTE =
                    r.SMART_TRANSACTION_STATUS_ROUTE =
                    r.SIGNATURE_REQUEST_PATH =
                    r.SETTINGS_ROUTE =
                    r.SEND_ROUTE =
                    r.SECURITY_ROUTE =
                    r.REVEAL_SEED_ROUTE =
                    r.RESTORE_VAULT_ROUTE =
                    r.PREPARE_SWAP_ROUTE =
                    r.PATH_NAME_MAP =
                    r.ONBOARDING_WELCOME_ROUTE =
                    r.ONBOARDING_UNLOCK_ROUTE =
                    r.ONBOARDING_SECURE_YOUR_WALLET_ROUTE =
                    r.ONBOARDING_ROUTE =
                    r.ONBOARDING_REVIEW_SRP_ROUTE =
                    r.ONBOARDING_PRIVACY_SETTINGS_ROUTE =
                    r.ONBOARDING_PIN_EXTENSION_ROUTE =
                    r.ONBOARDING_METAMETRICS =
                    r.ONBOARDING_IMPORT_WITH_SRP_ROUTE =
                    r.ONBOARDING_HELP_US_IMPROVE_ROUTE =
                    r.ONBOARDING_CREATE_PASSWORD_ROUTE =
                    r.ONBOARDING_CONFIRM_SRP_ROUTE =
                    r.ONBOARDING_COMPLETION_ROUTE =
                    r.NOTIFICATIONS_ROUTE =
                    r.NEW_ACCOUNT_ROUTE =
                    r.NETWORKS_ROUTE =
                    r.NETWORKS_FORM_ROUTE =
                    r.MMI_ONBOARDING_COMPLETION_ROUTE =
                    r.LOCK_ROUTE =
                    r.LOADING_QUOTES_ROUTE =
                    r.IMPORT_TOKEN_ROUTE =
                    r.GENERAL_ROUTE =
                    r.EXPERIMENTAL_ROUTE =
                    r.ENCRYPTION_PUBLIC_KEY_REQUEST_PATH =
                    r.DEFAULT_ROUTE =
                    r.DECRYPT_MESSAGE_REQUEST_PATH =
                    r.CONTACT_VIEW_ROUTE =
                    r.CONTACT_LIST_ROUTE =
                    r.CONTACT_EDIT_ROUTE =
                    r.CONTACT_ADD_ROUTE =
                    r.CONNECT_SNAP_UPDATE_ROUTE =
                    r.CONNECT_SNAP_RESULT_ROUTE =
                    r.CONNECT_SNAP_INSTALL_ROUTE =
                    r.CONNECT_SNAPS_CONNECT_ROUTE =
                    r.CONNECT_ROUTE =
                    r.CONNECT_HARDWARE_ROUTE =
                    r.CONNECT_CONFIRM_PERMISSIONS_ROUTE =
                    r.CONNECTIONS =
                    r.CONNECTED_ROUTE =
                    r.CONNECTED_ACCOUNTS_ROUTE =
                    r.CONFIRM_TRANSFER_FROM_PATH =
                    r.CONFIRM_TRANSACTION_ROUTE =
                    r.CONFIRM_TOKEN_METHOD_PATH =
                    r.CONFIRM_SET_APPROVAL_FOR_ALL_PATH =
                    r.CONFIRM_SEND_TOKEN_PATH =
                    r.CONFIRM_SEND_ETHER_PATH =
                    r.CONFIRM_SAFE_TRANSFER_FROM_PATH =
                    r.CONFIRM_IMPORT_TOKEN_ROUTE =
                    r.CONFIRM_DEPLOY_CONTRACT_PATH =
                    r.CONFIRM_APPROVE_PATH =
                    r.CONFIRM_ADD_SUGGESTED_TOKEN_ROUTE =
                    r.CONFIRM_ADD_SUGGESTED_NFT_ROUTE =
                    r.CONFIRMATION_V_NEXT_ROUTE =
                    r.BUILD_QUOTE_ROUTE =
                    r.AWAITING_SWAP_ROUTE =
                    r.AWAITING_SIGNATURES_ROUTE =
                    r.ASSET_ROUTE =
                    r.ALERTS_ROUTE =
                    r.ADVANCED_ROUTE =
                    r.ADD_SNAP_ACCOUNT_ROUTE =
                    r.ADD_POPULAR_CUSTOM_NETWORK =
                    r.ADD_NETWORK_ROUTE =
                    r.ABOUT_US_ROUTE =
                      void 0);
                const n = (r.DEFAULT_ROUTE = "/"),
                  o = (r.UNLOCK_ROUTE = "/unlock"),
                  i = (r.LOCK_ROUTE = "/lock"),
                  s = (r.ASSET_ROUTE = "/asset"),
                  a = (r.SETTINGS_ROUTE = "/settings"),
                  c = (r.GENERAL_ROUTE = "/settings/general"),
                  u = (r.ADVANCED_ROUTE = "/settings/advanced"),
                  l = (r.EXPERIMENTAL_ROUTE = "/settings/experimental"),
                  d = (r.SECURITY_ROUTE = "/settings/security"),
                  p = (r.ABOUT_US_ROUTE = "/settings/about-us"),
                  h = (r.ALERTS_ROUTE = "/settings/alerts"),
                  f = (r.NETWORKS_ROUTE = "/settings/networks"),
                  g = (r.NETWORKS_FORM_ROUTE = "/settings/networks/form"),
                  m = (r.ADD_NETWORK_ROUTE = "/settings/networks/add-network"),
                  y = (r.ADD_POPULAR_CUSTOM_NETWORK = "/settings/networks/add-popular-custom-network"),
                  _ = (r.CONTACT_LIST_ROUTE = "/settings/contact-list"),
                  v = (r.CONTACT_EDIT_ROUTE = "/settings/contact-list/edit-contact"),
                  T = (r.CONTACT_ADD_ROUTE = "/settings/contact-list/add-contact"),
                  E = (r.CONTACT_VIEW_ROUTE = "/settings/contact-list/view-contact"),
                  b = (r.REVEAL_SEED_ROUTE = "/seed"),
                  w = (r.RESTORE_VAULT_ROUTE = "/restore-vault"),
                  A = (r.IMPORT_TOKEN_ROUTE = "/import-token"),
                  N = (r.CONFIRM_IMPORT_TOKEN_ROUTE = "/confirm-import-token"),
                  I = (r.CONFIRM_ADD_SUGGESTED_TOKEN_ROUTE = "/confirm-add-suggested-token"),
                  O = (r.NEW_ACCOUNT_ROUTE = "/new-account"),
                  R = (r.CONFIRM_ADD_SUGGESTED_NFT_ROUTE = "/confirm-add-suggested-nft"),
                  S = (r.CONNECT_HARDWARE_ROUTE = "/new-account/connect"),
                  P = (r.SEND_ROUTE = "/send"),
                  k = (r.CONNECTIONS = "/connections"),
                  C = (r.TOKEN_DETAILS = "/token-details"),
                  D = (r.CONNECT_ROUTE = "/connect"),
                  M = (r.CONNECT_CONFIRM_PERMISSIONS_ROUTE = "/confirm-permissions"),
                  L =
                    ((r.CONNECT_SNAPS_CONNECT_ROUTE = "/snaps-connect"),
                    (r.CONNECT_SNAP_INSTALL_ROUTE = "/snap-install"),
                    (r.CONNECT_SNAP_UPDATE_ROUTE = "/snap-update"),
                    (r.CONNECT_SNAP_RESULT_ROUTE = "/snap-install-result"),
                    (r.NOTIFICATIONS_ROUTE = "/notifications"),
                    (r.SNAPS_ROUTE = "/snaps"),
                    (r.SNAPS_VIEW_ROUTE = "/snaps/view"),
                    (r.ADD_SNAP_ACCOUNT_ROUTE = "/add-snap-account")),
                  x = (r.CONNECTED_ROUTE = "/connected"),
                  j = (r.CONNECTED_ACCOUNTS_ROUTE = "/connected/accounts"),
                  B = ((r.SWAPS_ROUTE = "/swaps"), (r.PREPARE_SWAP_ROUTE = "/swaps/prepare-swap-page")),
                  U = (r.SWAPS_NOTIFICATION_ROUTE = "/swaps/notification-page"),
                  F = (r.BUILD_QUOTE_ROUTE = "/swaps/build-quote"),
                  H = (r.VIEW_QUOTE_ROUTE = "/swaps/view-quote"),
                  K = (r.LOADING_QUOTES_ROUTE = "/swaps/loading-quotes"),
                  G =
                    ((r.AWAITING_SIGNATURES_ROUTE = "/swaps/awaiting-signatures"),
                    (r.SMART_TRANSACTION_STATUS_ROUTE = "/swaps/smart-transaction-status"),
                    (r.AWAITING_SWAP_ROUTE = "/swaps/awaiting-swap")),
                  W = (r.SWAPS_ERROR_ROUTE = "/swaps/swaps-error"),
                  $ =
                    ((r.SWAPS_MAINTENANCE_ROUTE = "/swaps/maintenance"),
                    (r.ONBOARDING_ROUTE = "/onboarding"),
                    (r.ONBOARDING_REVIEW_SRP_ROUTE = "/onboarding/review-recovery-phrase"),
                    (r.ONBOARDING_CONFIRM_SRP_ROUTE = "/onboarding/confirm-recovery-phrase"),
                    (r.ONBOARDING_CREATE_PASSWORD_ROUTE = "/onboarding/create-password"),
                    (r.ONBOARDING_COMPLETION_ROUTE = "/onboarding/completion"),
                    (r.MMI_ONBOARDING_COMPLETION_ROUTE = "/onboarding/account-completion"),
                    (r.ONBOARDING_UNLOCK_ROUTE = "/onboarding/unlock"),
                    (r.ONBOARDING_HELP_US_IMPROVE_ROUTE = "/onboarding/help-us-improve"),
                    (r.ONBOARDING_IMPORT_WITH_SRP_ROUTE = "/onboarding/import-with-recovery-phrase"),
                    (r.ONBOARDING_SECURE_YOUR_WALLET_ROUTE = "/onboarding/secure-your-wallet"),
                    (r.ONBOARDING_PRIVACY_SETTINGS_ROUTE = "/onboarding/privacy-settings"),
                    (r.ONBOARDING_PIN_EXTENSION_ROUTE = "/onboarding/pin-extension"),
                    (r.ONBOARDING_WELCOME_ROUTE = "/onboarding/welcome"),
                    (r.ONBOARDING_METAMETRICS = "/onboarding/metametrics"),
                    (r.CONFIRM_TRANSACTION_ROUTE = "/confirm-transaction")),
                  q = (r.CONFIRM_SEND_ETHER_PATH = "/send-ether"),
                  V = (r.CONFIRM_SEND_TOKEN_PATH = "/send-token"),
                  Y = (r.CONFIRM_DEPLOY_CONTRACT_PATH = "/deploy-contract"),
                  J = (r.CONFIRM_APPROVE_PATH = "/approve"),
                  z = (r.CONFIRM_SET_APPROVAL_FOR_ALL_PATH = "/set-approval-for-all"),
                  X = (r.CONFIRM_TRANSFER_FROM_PATH = "/transfer-from"),
                  Z = (r.CONFIRM_SAFE_TRANSFER_FROM_PATH = "/safe-transfer-from"),
                  Q = (r.CONFIRM_TOKEN_METHOD_PATH = "/token-method"),
                  ee = (r.SIGNATURE_REQUEST_PATH = "/signature-request"),
                  te = (r.DECRYPT_MESSAGE_REQUEST_PATH = "/decrypt-message-request"),
                  re = (r.ENCRYPTION_PUBLIC_KEY_REQUEST_PATH = "/encryption-public-key-request"),
                  ne = (r.CONFIRMATION_V_NEXT_ROUTE = "/confirmation");
                r.PATH_NAME_MAP = {
                  [n]: "Home",
                  [o]: "Unlock Page",
                  [i]: "Lock Page",
                  [`${s}/:asset/:id`]: "Asset Page",
                  [a]: "Settings Page",
                  [c]: "General Settings Page",
                  [u]: "Advanced Settings Page",
                  [l]: "Experimental Settings Page",
                  [d]: "Security Settings Page",
                  [p]: "About Us Page",
                  [h]: "Alerts Settings Page",
                  [f]: "Network Settings Page",
                  [g]: "Network Settings Page Form",
                  [m]: "Add Network From Settings Page Form",
                  [y]: "Add Network From A List Of Popular Custom Networks",
                  [_]: "Contact List Settings Page",
                  [`${v}/:address`]: "Edit Contact Settings Page",
                  [T]: "Add Contact Settings Page",
                  [`${E}/:address`]: "View Contact Settings Page",
                  [b]: "Reveal Secret Recovery Phrase Page",
                  [w]: "Restore Vault Page",
                  [A]: "Import Token Page",
                  [N]: "Confirm Import Token Page",
                  [I]: "Confirm Add Suggested Token Page",
                  [O]: "New Account Page",
                  [L]: "Add Snap Account List Page",
                  [`${L}/:snapId`]: "Add Snap Account Page",
                  [R]: "Confirm Add Suggested NFT Page",
                  [S]: "Connect Hardware Wallet Page",
                  [P]: "Send Page",
                  [k]: "Connections",
                  [`${C}/:address`]: "Token Details Page",
                  [`${D}/:id`]: "Connect To Site Confirmation Page",
                  [`${D}/:id${M}`]: "Grant Connected Site Permissions Confirmation Page",
                  [x]: "Sites Connected To This Account Page",
                  [j]: "Accounts Connected To This Site Page",
                  [`${$}/:id`]: "Confirmation Root Page",
                  [$]: "Confirmation Root Page",
                  [ne]: "New Confirmation Page",
                  [`${$}/:id${Q}`]: "Confirm Token Method Transaction Page",
                  [`${$}/:id${q}`]: "Confirm Send Ether Transaction Page",
                  [`${$}/:id${V}`]: "Confirm Send Token Transaction Page",
                  [`${$}/:id${Y}`]: "Confirm Deploy Contract Transaction Page",
                  [`${$}/:id${J}`]: "Confirm Approve Transaction Page",
                  [`${$}/:id${z}`]: "Confirm Set Approval For All Transaction Page",
                  [`${$}/:id${X}`]: "Confirm Transfer From Transaction Page",
                  [`${$}/:id${Z}`]: "Confirm Safe Transfer From Transaction Page",
                  [`${$}/:id${ee}`]: "Signature Request Page",
                  [`${$}/:id${te}`]: "Decrypt Message Request Page",
                  [`${$}/:id${re}`]: "Encryption Public Key Request Page",
                  [F]: "Swaps Build Quote Page",
                  [B]: "Prepare Swap Page",
                  [U]: "Swaps Notification Page",
                  [H]: "Swaps View Quotes Page",
                  [K]: "Swaps Loading Quotes Page",
                  [G]: "Swaps Awaiting Swaps Page",
                  [W]: "Swaps Error Page"
                };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/routes.ts" }
    ],
    [
      555,
      {
        "./CryptoCoinInfo": 553,
        "./CryptoKeypath": 556,
        "./RegistryItem": 562,
        "./RegistryType": 563,
        "./lib": 570,
        bs58check: 2917,
        buffer: 2913
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoHDKey = void 0);
                    const n = e("bs58check"),
                      o = e("./CryptoCoinInfo"),
                      i = e("./CryptoKeypath"),
                      s = e("./lib"),
                      a = e("./RegistryItem"),
                      c = e("./RegistryType");
                    var u;
                    !(function (e) {
                      (e[(e.is_master = 1)] = "is_master"),
                        (e[(e.is_private = 2)] = "is_private"),
                        (e[(e.key_data = 3)] = "key_data"),
                        (e[(e.chain_code = 4)] = "chain_code"),
                        (e[(e.use_info = 5)] = "use_info"),
                        (e[(e.origin = 6)] = "origin"),
                        (e[(e.children = 7)] = "children"),
                        (e[(e.parent_fingerprint = 8)] = "parent_fingerprint"),
                        (e[(e.name = 9)] = "name"),
                        (e[(e.note = 10)] = "note");
                    })(u || (u = {}));
                    class l extends a.RegistryItem {
                      constructor(e) {
                        super(),
                          (this.isECKey = () => !1),
                          (this.getKey = () => this.key),
                          (this.getChainCode = () => this.chainCode),
                          (this.isMaster = () => this.master),
                          (this.isPrivateKey = () => !!this.privateKey),
                          (this.getUseInfo = () => this.useInfo),
                          (this.getOrigin = () => this.origin),
                          (this.getChildren = () => this.children),
                          (this.getParentFingerprint = () => this.parentFingerprint),
                          (this.getName = () => this.name),
                          (this.getNote = () => this.note),
                          (this.getBip32Key = () => {
                            var e, r, o;
                            let i,
                              s,
                              a = 0,
                              c = t.alloc(4).fill(0);
                            if (this.isMaster()) (i = t.from("0488ADE4", "hex")), (s = 0), (a = 0);
                            else {
                              s =
                                (null === (e = this.getOrigin()) || void 0 === e ? void 0 : e.getComponents().length) ||
                                (null === (r = this.getOrigin()) || void 0 === r ? void 0 : r.getDepth());
                              const n = null === (o = this.getOrigin()) || void 0 === o ? void 0 : o.getComponents(),
                                u = n[n.length - 1];
                              u &&
                                ((a = u.isHardened() ? u.getIndex() + 2147483648 : u.getIndex()),
                                this.getParentFingerprint() && (c = this.getParentFingerprint())),
                                (i = this.isPrivateKey() ? t.from("0488ADE4", "hex") : t.from("0488B21E", "hex"));
                            }
                            const u = t.alloc(1);
                            u.writeUInt8(s, 0);
                            const l = t.alloc(4);
                            l.writeUInt32BE(a, 0);
                            const d = this.getChainCode(),
                              p = this.getKey();
                            return (0, n.encode)(t.concat([i, u, c, l, d, p]));
                          }),
                          (this.getRegistryType = () => c.RegistryTypes.CRYPTO_HDKEY),
                          (this.getOutputDescriptorContent = () => {
                            var e, t, r, n, o, i, s;
                            let a = "";
                            return (
                              this.getOrigin() &&
                                (null === (e = this.getOrigin()) || void 0 === e ? void 0 : e.getSourceFingerprint()) &&
                                (null === (t = this.getOrigin()) || void 0 === t ? void 0 : t.getPath()) &&
                                (a += `${
                                  null === (n = null === (r = this.getOrigin()) || void 0 === r ? void 0 : r.getSourceFingerprint()) ||
                                  void 0 === n
                                    ? void 0
                                    : n.toString("hex")
                                }/${null === (o = this.getOrigin()) || void 0 === o ? void 0 : o.getPath()}`),
                              (a += this.getBip32Key()),
                              this.getChildren() &&
                                (null === (i = this.getChildren()) || void 0 === i ? void 0 : i.getPath()) &&
                                (a += `/${null === (s = this.getChildren()) || void 0 === s ? void 0 : s.getPath()}`),
                              a
                            );
                          }),
                          (this.setupMasterKey = (e) => {
                            (this.master = !0), (this.key = e.key), (this.chainCode = e.chainCode);
                          }),
                          (this.setupDeriveKey = (e) => {
                            (this.master = !1),
                              (this.privateKey = e.isPrivateKey),
                              (this.key = e.key),
                              (this.chainCode = e.chainCode),
                              (this.useInfo = e.useInfo),
                              (this.origin = e.origin),
                              (this.children = e.children),
                              (this.parentFingerprint = e.parentFingerprint),
                              (this.name = e.name),
                              (this.note = e.note);
                          }),
                          (this.toDataItem = () => {
                            const e = {};
                            if (this.master) (e[u.is_master] = !0), (e[u.key_data] = this.key), (e[u.chain_code] = this.chainCode);
                            else {
                              if (
                                (this.privateKey !== undefined && (e[u.is_private] = this.privateKey),
                                (e[u.key_data] = this.key),
                                this.chainCode && (e[u.chain_code] = this.chainCode),
                                this.useInfo)
                              ) {
                                const t = this.useInfo.toDataItem();
                                t.setTag(this.useInfo.getRegistryType().getTag()), (e[u.use_info] = t);
                              }
                              if (this.origin) {
                                const t = this.origin.toDataItem();
                                t.setTag(this.origin.getRegistryType().getTag()), (e[u.origin] = t);
                              }
                              if (this.children) {
                                const t = this.children.toDataItem();
                                t.setTag(this.children.getRegistryType().getTag()), (e[u.children] = t);
                              }
                              this.parentFingerprint && (e[u.parent_fingerprint] = this.parentFingerprint.readUInt32BE(0)),
                                this.name !== undefined && (e[u.name] = this.name),
                                this.note !== undefined && (e[u.note] = this.note);
                            }
                            return new s.DataItem(e);
                          }),
                          e.isMaster ? this.setupMasterKey(e) : this.setupDeriveKey(e);
                      }
                    }
                    (r.CryptoHDKey = l),
                      (l.fromDataItem = (e) => {
                        const r = e.getData(),
                          n = !!r[u.is_master],
                          s = r[u.is_private],
                          a = r[u.key_data],
                          c = r[u.chain_code],
                          d = r[u.use_info] ? o.CryptoCoinInfo.fromDataItem(r[u.use_info]) : undefined,
                          p = r[u.origin] ? i.CryptoKeypath.fromDataItem(r[u.origin]) : undefined,
                          h = r[u.children] ? i.CryptoKeypath.fromDataItem(r[u.children]) : undefined,
                          f = r[u.parent_fingerprint];
                        let g = undefined;
                        f && ((g = t.alloc(4)), g.writeUInt32BE(f, 0));
                        const m = r[u.name],
                          y = r[u.note];
                        return new l({
                          isMaster: n,
                          isPrivateKey: s,
                          key: a,
                          chainCode: c,
                          useInfo: d,
                          origin: p,
                          children: h,
                          parentFingerprint: g,
                          name: m,
                          note: y
                        });
                      }),
                      (l.fromCBOR = (e) => {
                        const t = (0, s.decodeToDataItem)(e);
                        return l.fromDataItem(t);
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoHDKey.js"
      }
    ],
    [
      5558,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.getBuildSpecificAsset = function (e) {
                    const t = "main";
                    if (!n[t] || !Object.keys(n[t]).includes(e))
                      return console.error(`Cannot find asset "${e}" for build "${t}", returning main build asset.`), n.main[e];
                    return n[t][e];
                  }),
                  (r.isBeta = function () {
                    return !1;
                  });
                const n = { main: { foxMeshJson: undefined } };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/build-types.js" }
    ],
    [
      556,
      { "./PathComponent": 561, "./RegistryItem": 562, "./RegistryType": 563, "./lib": 570, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoKeypath = void 0);
                    const n = e("./lib"),
                      o = e("./PathComponent"),
                      i = e("./RegistryItem"),
                      s = e("./RegistryType");
                    var a;
                    !(function (e) {
                      (e[(e.components = 1)] = "components"),
                        (e[(e.source_fingerprint = 2)] = "source_fingerprint"),
                        (e[(e.depth = 3)] = "depth");
                    })(a || (a = {}));
                    class c extends i.RegistryItem {
                      constructor(e = [], t, r) {
                        super(),
                          (this.components = e),
                          (this.sourceFingerprint = t),
                          (this.depth = r),
                          (this.getRegistryType = () => s.RegistryTypes.CRYPTO_KEYPATH),
                          (this.getPath = () => {
                            if (0 === this.components.length) return undefined;
                            return this.components
                              .map((e) => `${e.isWildcard() ? "*" : e.getIndex()}${e.isHardened() ? "'" : ""}`)
                              .join("/");
                          }),
                          (this.getComponents = () => this.components),
                          (this.getSourceFingerprint = () => this.sourceFingerprint),
                          (this.getDepth = () => this.depth),
                          (this.toDataItem = () => {
                            const e = {},
                              t = [];
                            return (
                              this.components &&
                                this.components.forEach((e) => {
                                  e.isWildcard() ? t.push([]) : t.push(e.getIndex()), t.push(e.isHardened());
                                }),
                              (e[a.components] = t),
                              this.sourceFingerprint && (e[a.source_fingerprint] = this.sourceFingerprint.readUInt32BE(0)),
                              this.depth !== undefined && (e[a.depth] = this.depth),
                              new n.DataItem(e)
                            );
                          });
                      }
                    }
                    (r.CryptoKeypath = c),
                      (c.fromDataItem = (e) => {
                        const r = e.getData(),
                          n = [],
                          i = r[a.components];
                        if (i)
                          for (let e = 0; e < i.length; e += 2) {
                            const t = i[e + 1],
                              r = i[e];
                            "number" == typeof r
                              ? n.push(new o.PathComponent({ index: r, hardened: t }))
                              : n.push(new o.PathComponent({ hardened: t }));
                          }
                        const s = r[a.source_fingerprint];
                        let u;
                        s && ((u = t.alloc(4)), u.writeUInt32BE(s, 0));
                        const l = r[a.depth];
                        return new c(n, u, l);
                      }),
                      (c.fromCBOR = (e) => {
                        const t = (0, n.decodeToDataItem)(e);
                        return c.fromDataItem(t);
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoKeypath.js"
      }
    ],
    [
      557,
      {
        "./CryptoECKey": 554,
        "./CryptoHDKey": 555,
        "./MultiKey": 560,
        "./RegistryItem": 562,
        "./RegistryType": 563,
        "./ScriptExpression": 564,
        "./lib": 570
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoOutput = void 0);
                const n = e("./CryptoECKey"),
                  o = e("./CryptoHDKey"),
                  i = e("./lib"),
                  s = e("./MultiKey"),
                  a = e("./RegistryItem"),
                  c = e("./RegistryType"),
                  u = e("./ScriptExpression");
                class l extends a.RegistryItem {
                  constructor(e, t) {
                    super(),
                      (this.scriptExpressions = e),
                      (this.cryptoKey = t),
                      (this.getRegistryType = () => c.RegistryTypes.CRYPTO_OUTPUT),
                      (this.getCryptoKey = () => this.cryptoKey),
                      (this.getHDKey = () => (this.cryptoKey instanceof o.CryptoHDKey ? this.cryptoKey : undefined)),
                      (this.getECKey = () => (this.cryptoKey instanceof n.CryptoECKey ? this.cryptoKey : undefined)),
                      (this.getMultiKey = () => (this.cryptoKey instanceof s.MultiKey ? this.cryptoKey : undefined)),
                      (this.getScriptExpressions = () => this.scriptExpressions),
                      (this._toOutputDescriptor = (e) =>
                        e >= this.scriptExpressions.length
                          ? this.cryptoKey.getOutputDescriptorContent()
                          : `${this.scriptExpressions[e].getExpression()}(${this._toOutputDescriptor(e + 1)})`),
                      (this.toString = () => this._toOutputDescriptor(0)),
                      (this.toDataItem = () => {
                        let e = this.cryptoKey.toDataItem();
                        (this.cryptoKey instanceof n.CryptoECKey || this.cryptoKey instanceof o.CryptoHDKey) &&
                          e.setTag(this.cryptoKey.getRegistryType().getTag());
                        return (
                          [...this.scriptExpressions].reverse().forEach((t) => {
                            const r = t.getTag();
                            e.getTag() === undefined ? e.setTag(r) : (e = new i.DataItem(e, r));
                          }),
                          e
                        );
                      });
                  }
                }
                (r.CryptoOutput = l),
                  (l.fromDataItem = (e) => {
                    const t = [];
                    let r = e;
                    for (;;) {
                      let e = r.getTag();
                      const n = u.ScriptExpression.fromTag(e);
                      if (!n) break;
                      if ((t.push(n), !(r.getData() instanceof i.DataItem))) break;
                      (r = r.getData()), (e = r.getTag());
                    }
                    const a = t.length;
                    if (
                      a > 0 &&
                      (t[a - 1].getExpression() === u.ScriptExpressions.MULTISIG.getExpression() ||
                        t[a - 1].getExpression() === u.ScriptExpressions.SORTED_MULTISIG.getExpression())
                    ) {
                      const e = s.MultiKey.fromDataItem(r);
                      return new l(t, e);
                    }
                    if (r.getTag() === c.RegistryTypes.CRYPTO_HDKEY.getTag()) {
                      const e = o.CryptoHDKey.fromDataItem(r);
                      return new l(t, e);
                    }
                    {
                      const e = n.CryptoECKey.fromDataItem(r);
                      return new l(t, e);
                    }
                  }),
                  (l.fromCBOR = (e) => {
                    const t = (0, i.decodeToDataItem)(e);
                    return l.fromDataItem(t);
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoOutput.js"
      }
    ],
    [
      5570,
      {
        "../../../../shared/modules/hexstring-utils": 4788,
        "@ethereumjs/common": 390,
        "@ethereumjs/tx": 398,
        "ethereumjs-util": 3272,
        lodash: 4071
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = function (e) {
                    const t = (function (e) {
                        return { ...(0, n.omit)(e.txParams, "gas"), gasLimit: e.txParams.gas };
                      })(e),
                      r = (function (e) {
                        return i.Common.custom({
                          chainId: new o.BN((0, a.stripHexPrefix)(e.chainId), 16),
                          defaultHardfork: i.Hardfork.SpuriousDragon
                        });
                      })(e);
                    return s.TransactionFactory.fromTxData(t, { common: r });
                  });
                var n = e("lodash"),
                  o = e("ethereumjs-util"),
                  i = e("@ethereumjs/common"),
                  s = e("@ethereumjs/tx"),
                  a = e("../../../../shared/modules/hexstring-utils");
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/optimism/buildUnserializedTransaction.js" }
    ],
    [
      5571,
      {
        "../../../../shared/modules/conversion.utils": 4784,
        "./buildUnserializedTransaction": 5570,
        "@ethersproject/contracts": 455,
        "@ethersproject/providers": 494
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = async function (e, t, r) {
                    const n = Number((0, s.hexToDecimal)(e)),
                      l = global.ethereumProvider ? new i.Web3Provider(global.ethereumProvider, n) : r;
                    0;
                    const d = new o.Contract(u, c, l),
                      p = (0, a.default)(t).serialize(),
                      h = await d.getL1Fee(p);
                    return null == h ? void 0 : h.toHexString();
                  });
                var n,
                  o = e("@ethersproject/contracts"),
                  i = e("@ethersproject/providers"),
                  s = e("../../../../shared/modules/conversion.utils"),
                  a = (n = e("./buildUnserializedTransaction")) && n.__esModule ? n : { default: n };
                const c = [
                    {
                      inputs: [{ internalType: "bytes", name: "_data", type: "bytes" }],
                      name: "getL1Fee",
                      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                      stateMutability: "view",
                      type: "function"
                    }
                  ],
                  u = "0x420000000000000000000000000000000000000F";
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/optimism/fetchEstimatedL1Fee.js" }
    ],
    [
      5578,
      {
        "../../../shared/constants/labels": 4756,
        "../../../shared/constants/network": 4759,
        "../../../shared/constants/snaps": 4764,
        "../../../shared/modules/Numeric": 4780,
        "../../../shared/modules/conversion.utils": 4784,
        "../../../shared/modules/error": 4785,
        "../../../shared/modules/hexstring-utils": 4788,
        "../../../shared/modules/string-utils": 4797,
        "../constants/common": 5535,
        "../constants/routes": 5542,
        "@metamask/assets-controllers": 1095,
        "@metamask/slip44": 1794,
        "@metamask/snaps-rpc-methods": 1953,
        "@metamask/snaps-utils": 2034,
        "@metamask/utils": 2081,
        "bignumber.js": 2804,
        bowser: 2862,
        "ethereumjs-util": 3272,
        "human-standard-token-abi": 3827,
        lodash: 4071,
        luxon: 4087,
        "punycode/punycode": 4278
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.addressSummary = function (e, t = 10, r = 4, n = !0) {
                    if (!e) return "";
                    let o = (0, y.toChecksumHexAddress)(e);
                    n || (o = (0, y.stripHexPrefix)(o));
                    return o ? `${o.slice(0, t)}...${o.slice(o.length - r)}` : "...";
                  }),
                  (r.bnGreaterThan = function (e, t) {
                    if (null === e || e === undefined || null === t || t === undefined) return null;
                    return new i.default(e, 10).gt(t, 10);
                  }),
                  (r.bnGreaterThanEqualTo = function (e, t) {
                    if (null === e || e === undefined || null === t || t === undefined) return null;
                    return new i.default(e, 10).gte(t, 10);
                  }),
                  (r.bnLessThan = function (e, t) {
                    if (null === e || e === undefined || null === t || t === undefined) return null;
                    return new i.default(e, 10).lt(t, 10);
                  }),
                  (r.bnLessThanEqualTo = function (e, t) {
                    if (null === e || e === undefined || null === t || t === undefined) return null;
                    return new i.default(e, 10).lte(t, 10);
                  }),
                  (r.checkExistingAddresses = function (e, t = []) {
                    if (!e) return !1;
                    return t.some((t) => t.address.toLowerCase() === e.toLowerCase());
                  }),
                  (r.checkTokenIdExists = void 0),
                  (r.clearClipboard = function () {
                    window.navigator.clipboard.writeText("");
                  }),
                  (r.coinTypeToProtocolName = function (e) {
                    var t;
                    if ("1" === String(e)) return "Test Networks";
                    return (null === (t = u.default[e]) || void 0 === t ? void 0 : t.name) || undefined;
                  }),
                  (r.formatBalance = function (e, t, r = !0, n = "ETH") {
                    const o = r ? S(e) : e.split("."),
                      i = o[0];
                    let s = o[1],
                      a = "None";
                    if (t === undefined)
                      if ("0" === i) {
                        if ("0" !== s) {
                          const e = s.match(/^0*(.{2})/u);
                          e && (s = e[0]), (a = `0.${s} ${n}`);
                        }
                      } else a = `${i}.${s.slice(0, 3)} ${n}`;
                    else (s += Array(t).join("0")), (a = `${i}.${s.slice(0, t)} ${n}`);
                    return a;
                  }),
                  (r.formatDate = function (e, t = "M/d/y 'at' T") {
                    if (!e) return "";
                    return a.DateTime.fromMillis(e).toFormat(t);
                  }),
                  (r.formatDateWithYearContext = function (e, t = "MMM d", r = "MMM d, y") {
                    if (!e) return "";
                    const n = a.DateTime.fromMillis(e),
                      o = a.DateTime.local();
                    return n.toFormat(o.year === n.year ? t : r);
                  }),
                  (r.getAccountByAddress = function (e = [], t) {
                    return e.find(({ address: e }) => e === t);
                  }),
                  (r.getAssetImageURL = function (e, t) {
                    if (!e || "string" != typeof e) return "";
                    if (t && e.startsWith("ipfs://"))
                      try {
                        return (0, c.getFormattedIpfsUrl)(t, e, !0);
                      } catch (e) {
                        return (0, m.logErrorWithMessage)(e), "";
                      }
                    return e;
                  }),
                  (r.getContractAtAddress = function (e) {
                    return global.eth.contract(o.default).at(e);
                  }),
                  (r.getDedupedSnaps = void 0),
                  (r.getIsBrowserDeprecated = function (e = d.default.getParser(window.navigator.userAgent)) {
                    return e.satisfies(T.OUTDATED_BROWSER_VERSIONS) ?? !1;
                  }),
                  (r.getNetworkNameFromProviderType = void 0),
                  (r.getRandomFileName = function () {
                    let e = "";
                    const t = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"],
                      r = Math.floor(7 * Math.random() + 6);
                    for (let n = 0; n < r; n++) e += t[Math.floor(Math.random() * t.length)];
                    return e;
                  }),
                  (r.getSnapDerivationPathName = function (e, t) {
                    const r = E.SNAPS_DERIVATION_PATHS.find((r) => r.curve === t && l.isEqual(r.path, e));
                    return (null == r ? void 0 : r.name) ?? null;
                  }),
                  (r.getSnapRoute = r.getSnapName = void 0),
                  (r.getURL = k),
                  (r.getURLHost = function (e) {
                    var t;
                    return (null === (t = k(e)) || void 0 === t ? void 0 : t.host) || "";
                  }),
                  (r.getURLHostName = function (e) {
                    var t;
                    return (null === (t = k(e)) || void 0 === t ? void 0 : t.hostname) || "";
                  }),
                  (r.isAbleToExportAccount = void 0),
                  (r.isDefaultMetaMaskChain = function (e) {
                    if (
                      !e ||
                      e === g.CHAIN_IDS.MAINNET ||
                      e === g.CHAIN_IDS.LINEA_MAINNET ||
                      e === g.CHAIN_IDS.GOERLI ||
                      e === g.CHAIN_IDS.SEPOLIA ||
                      e === g.CHAIN_IDS.LINEA_GOERLI ||
                      e === g.CHAIN_IDS.LOCALHOST
                    )
                      return !0;
                    return !1;
                  }),
                  (r.isExtensionUrl = function (e) {
                    const t = ["chrome-extension:", "moz-extension:"];
                    if ("string" == typeof e) for (const r of t) if (e.startsWith(r)) return !0;
                    if (null != e && e.protocol) return t.includes(e.protocol);
                    return !1;
                  }),
                  (r.isNullish = function (e) {
                    return null === e || e === undefined;
                  }),
                  (r.isOriginContractAddress = function (e, t) {
                    if (!e || !t) return !1;
                    return e.toLowerCase() === t.toLowerCase();
                  }),
                  (r.isValidDomainName = function (e) {
                    return (
                      null !==
                      n.default
                        .toASCII(e)
                        .toLowerCase()
                        .match(/^(?:[a-z0-9](?:[-a-z0-9]*[a-z0-9])?\.)+[a-z0-9][-a-z0-9]*[a-z0-9]$/u)
                    );
                  }),
                  (r.numericBalance = R),
                  (r.parseBalance = S),
                  (r.removeSnapIdPrefix = void 0),
                  (r.roundToDecimalPlacesRemovingExtraZeroes = function (e, t) {
                    if (e === undefined || null === e) return "";
                    return new v.Numeric(new v.Numeric(e, 10).toFixed(t), 10).toNumber();
                  }),
                  (r.sanitizeString = r.sanitizeMessage = void 0),
                  (r.shortenAddress = function (e = "") {
                    if (e.length < _.TRUNCATED_NAME_CHAR_LIMIT) return e;
                    return `${e.slice(0, _.TRUNCATED_ADDRESS_START_CHARS)}...${e.slice(-_.TRUNCATED_ADDRESS_END_CHARS)}`;
                  }),
                  (r.stripHttpSchemes = function (e) {
                    return e.replace(/^https?:\/\//u, "");
                  }),
                  (r.stripHttpsScheme = P),
                  (r.stripHttpsSchemeWithoutPort = function (e) {
                    if (k(e).port) return e;
                    return P(e);
                  }),
                  (r.toHumanReadableTime = void 0),
                  (r.valuesFor = function (e) {
                    if (!e) return [];
                    return Object.keys(e).map(function (t) {
                      return e[t];
                    });
                  });
                var n = O(e("punycode/punycode")),
                  o = O(e("human-standard-token-abi")),
                  i = O(e("bignumber.js")),
                  s = I(e("ethereumjs-util")),
                  a = e("luxon"),
                  c = e("@metamask/assets-controllers"),
                  u = O(e("@metamask/slip44")),
                  l = I(e("lodash")),
                  d = O(e("bowser")),
                  p = e("@metamask/snaps-utils"),
                  h = e("@metamask/snaps-rpc-methods"),
                  f = e("@metamask/utils"),
                  g = e("../../../shared/constants/network"),
                  m = e("../../../shared/modules/error"),
                  y = e("../../../shared/modules/hexstring-utils"),
                  _ = e("../../../shared/constants/labels"),
                  v = e("../../../shared/modules/Numeric"),
                  T = e("../constants/common"),
                  E = e("../../../shared/constants/snaps"),
                  b = e("../../../shared/modules/string-utils"),
                  w = e("../../../shared/modules/conversion.utils"),
                  A = e("../constants/routes");
                function N(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    r = new WeakMap();
                  return (N = function (e) {
                    return e ? r : t;
                  })(e);
                }
                function I(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var r = N(t);
                  if (r && r.has(e)) return r.get(e);
                  var n = { __proto__: null },
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : (n[i] = e[i]);
                    }
                  return (n.default = e), r && r.set(e, n), n;
                }
                function O(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function R(e) {
                  if (!e) return new s.BN(0, 16);
                  const t = (0, y.stripHexPrefix)(e);
                  return new s.BN(t, 16);
                }
                function S(e) {
                  let t;
                  const r = R(e),
                    n = r.toString(),
                    o = n.length > 18 ? n.slice(0, n.length - 18) : "0";
                  return (t = `000000000000000000${r}`.slice(-18).replace(/0+$/u, "")), "" === t && (t = "0"), [o, t];
                }
                function P(e) {
                  return e.replace(/^https:\/\//u, "");
                }
                function k(e) {
                  try {
                    return new URL(e);
                  } catch (e) {
                    return "";
                  }
                }
                r.toHumanReadableTime = (e, t) => {
                  if (t === undefined || null === t) return "";
                  const r = Math.ceil(t / 1e3);
                  return r <= 90
                    ? e("gasTimingSecondsShort", [r])
                    : r <= 5400
                    ? e("gasTimingMinutesShort", [Math.ceil(r / 60)])
                    : e("gasTimingHoursShort", [Math.ceil(r / 3600)]);
                };
                const C = (() => {
                    const e = Array.from(new Array(32)).map((e, t) => "int" + 8 * (t + 1)),
                      t = Array.from(new Array(32)).map((e, t) => "uint" + 8 * (t + 1)),
                      r = Array.from(new Array(32)).map((e, t) => `bytes${t + 1}`),
                      n = Array.from(new Array(32)).map((e, t) => "fixed" + 8 * (t + 1)),
                      o = Array.from(new Array(32)).map((e, t) => "ufixed" + 8 * (t + 1)),
                      i = Array.from(new Array(80)).map((e, t) => n.map((e) => `${e}x${t + 1}`)),
                      s = Array.from(new Array(80)).map((e, t) => o.map((e) => `${e}x${t + 1}`));
                    return [
                      "bool",
                      "address",
                      "string",
                      "bytes",
                      "int",
                      "uint",
                      "fixed",
                      "ufixed",
                      ...e,
                      ...t,
                      ...r,
                      ...i.flat(),
                      ...s.flat()
                    ];
                  })(),
                  D = (e, t, r) => {
                    if (!r) throw new Error("Invalid types definition");
                    const n = t && null !== t.match(/\[[[0-9]*\]*/u);
                    var o;
                    if (n) return { value: e.map((e) => D(e, ((e) => e.replace(/\[[[0-9]*\]/u, ""))(t), r)), type: t };
                    if (((o = t), C.includes(o))) return { value: e, type: t };
                    const i = n ? ((e) => e.replace(/\[[[0-9]*\]*/gu, ""))(t) : t,
                      s = r[i];
                    if (!s) throw new Error("Invalid primary type definition");
                    const a = {};
                    return (
                      Object.keys(e).forEach((t) => {
                        const n = Object.values(s).find((e) => e.name === t);
                        n && (a[t] = D(e[t], n.type, r));
                      }),
                      { value: a, type: t }
                    );
                  };
                r.sanitizeMessage = D;
                const M = (e) => (null == e ? void 0 : e.replace((0, p.getSnapPrefix)(e), ""));
                r.removeSnapIdPrefix = M;
                r.getSnapName = (e, t) => {
                  var r;
                  return null !== (r = E.SNAPS_METADATA[e]) && void 0 !== r && r.name
                    ? E.SNAPS_METADATA[e].name
                    : (null == t ? void 0 : t.name) ?? M(e);
                };
                r.getSnapRoute = (e) => `${A.SNAPS_VIEW_ROUTE}/${encodeURIComponent(e)}`;
                r.getDedupedSnaps = (e, t) => {
                  var r, n;
                  const o = null == e || null === (r = e.permissions) || void 0 === r ? void 0 : r[h.WALLET_SNAP_PERMISSION_KEY],
                    i = null == o ? void 0 : o.caveats[0].value,
                    s = null == t || null === (n = t[h.WALLET_SNAP_PERMISSION_KEY]) || void 0 === n ? void 0 : n.caveats[0].value;
                  if (!(0, f.isObject)(s) && i) return Object.keys(i);
                  const a = i ? Object.keys(i) : [],
                    c = s ? Object.keys(s) : [],
                    u = a.filter((e) => !c.includes(e));
                  return u.length > 0 ? u : a;
                };
                r.sanitizeString = (e) => {
                  if (!e) return e;
                  if (!l.isString(e)) return e;
                  return e.replace(/\u202E/giu, "\\u202E");
                };
                r.getNetworkNameFromProviderType = (e) => (e === g.NETWORK_TYPES.RPC ? "" : e);
                r.isAbleToExportAccount = (e = "") => !e.includes("Hardware") && !e.includes("Snap");
                r.checkTokenIdExists = (e, t, r) => {
                  const n = (0, f.isStrictHexString)(t);
                  let o = t;
                  if ((n && (o = (0, w.hexToDecimal)(t)), r[e])) {
                    const n = r[e];
                    return l.some(
                      n.nfts,
                      (r) =>
                        r.address === e &&
                        ((0, b.isEqualCaseInsensitive)(r.tokenId, t) || (0, b.isEqualCaseInsensitive)(r.tokenId, o.toString()))
                    );
                  }
                  return !1;
                };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/util.js" }
    ],
    [
      558,
      { "./RegistryItem": 562, "./RegistryType": 563, "./lib": 570 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoPSBT = void 0);
                const n = e("./lib"),
                  o = e("./RegistryItem"),
                  i = e("./RegistryType");
                class s extends o.RegistryItem {
                  constructor(e) {
                    super(),
                      (this.psbt = e),
                      (this.getRegistryType = () => i.RegistryTypes.CRYPTO_PSBT),
                      (this.getPSBT = () => this.psbt),
                      (this.toDataItem = () => new n.DataItem(this.psbt));
                  }
                }
                (r.CryptoPSBT = s),
                  (s.fromDataItem = (e) => {
                    const t = e.getData();
                    if (!t) throw new Error(`#[ur-registry][CryptoPSBT][fn.fromDataItem]: decoded [dataItem][#data] is undefined: ${e}`);
                    return new s(t);
                  }),
                  (s.fromCBOR = (e) => {
                    const t = (0, n.decodeToDataItem)(e);
                    return s.fromDataItem(t);
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoPSBT.js"
      }
    ],
    [
      559,
      { "..": 567, "../RegistryType": 563, "../errors": 565, "@ngraveio/bc-ur": 2098 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.URRegistryDecoder = void 0);
                const n = e("@ngraveio/bc-ur"),
                  o = e(".."),
                  i = e("../RegistryType"),
                  s = e("../errors");
                class a extends n.URDecoder {
                  constructor() {
                    super(...arguments),
                      (this.resultRegistryType = () => {
                        const e = this.resultUR();
                        switch (e.type) {
                          case i.RegistryTypes.BYTES.getType():
                            return o.Bytes.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_HDKEY.getType():
                            return o.CryptoHDKey.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_KEYPATH.getType():
                            return o.CryptoKeypath.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_COIN_INFO.getType():
                            return o.CryptoCoinInfo.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_ECKEY.getType():
                            return o.CryptoECKey.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_OUTPUT.getType():
                            return o.CryptoOutput.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_PSBT.getType():
                            return o.CryptoPSBT.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_ACCOUNT.getType():
                            return o.CryptoAccount.fromCBOR(e.cbor);
                          default:
                            throw new s.UnknownURTypeError(
                              `#[ur-registry][Decoder][fn.resultRegistryType]: registry type ${e.type} is not supported now`
                            );
                        }
                      });
                  }
                }
                r.URRegistryDecoder = a;
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/Decoder/index.js"
      }
    ],
    [
      56,
      { "../../_locales/index.json": 3, "webextension-polyfill": 4733 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = async function () {
                    let e;
                    try {
                      e = await n.default.i18n.getAcceptLanguages();
                    } catch (t) {
                      e = [];
                    }
                    e || (e = []);
                    let t = e
                      .map((e) => e.toLowerCase().replace("_", "-"))
                      .find((e) => s[e] !== undefined || s[e.split("-")[0]] !== undefined);
                    t !== undefined && s[t] === undefined && (t = t.split("-")[0]);
                    return s[t] || "en";
                  });
                var n = i(e("webextension-polyfill")),
                  o = i(e("../../_locales/index.json"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const s = { zh: "zh_CN" };
                o.default.forEach((e) => {
                  e && e.code && (s[e.code.toLowerCase().replace("_", "-")] = e.code);
                });
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/get-first-preferred-lang-code.js" }
    ],
    [
      560,
      { "./CryptoECKey": 554, "./CryptoHDKey": 555, "./RegistryItem": 562, "./RegistryType": 563, "./lib/DataItem": 568 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.MultiKey = void 0);
                const n = e("./CryptoECKey"),
                  o = e("./CryptoHDKey"),
                  i = e("./lib/DataItem"),
                  s = e("./RegistryItem"),
                  a = e("./RegistryType");
                var c;
                !(function (e) {
                  (e[(e.threshold = 1)] = "threshold"), (e[(e.keys = 2)] = "keys");
                })(c || (c = {}));
                class u extends s.RegistryItem {
                  constructor(e, t) {
                    super(),
                      (this.threshold = e),
                      (this.keys = t),
                      (this.getThreshold = () => this.threshold),
                      (this.getKeys = () => this.keys),
                      (this.toDataItem = () => {
                        const e = {};
                        e[c.threshold] = this.threshold;
                        const t = this.keys.map((e) => {
                          const t = e.toDataItem();
                          return t.setTag(e.getRegistryType().getTag()), t;
                        });
                        return (e[c.keys] = t), new i.DataItem(e);
                      }),
                      (this.getOutputDescriptorContent = () =>
                        [this.getThreshold(), this.keys.map((e) => e.getOutputDescriptorContent()).join(",")].join(","));
                  }
                }
                (r.MultiKey = u),
                  (u.fromDataItem = (e) => {
                    const t = e.getData(),
                      r = t[c.threshold],
                      i = t[c.keys],
                      s = [];
                    return (
                      i.forEach((e) => {
                        e.getTag() === a.RegistryTypes.CRYPTO_HDKEY.getTag()
                          ? s.push(o.CryptoHDKey.fromDataItem(e))
                          : e.getTag() === a.RegistryTypes.CRYPTO_ECKEY.getTag() && s.push(n.CryptoECKey.fromDataItem(e));
                      }),
                      new u(r, s)
                    );
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/MultiKey.js"
      }
    ],
    [
      561,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.PathComponent = void 0);
                class n {
                  constructor(e) {
                    if (
                      ((this.getIndex = () => this.index),
                      (this.isWildcard = () => this.wildcard),
                      (this.isHardened = () => this.hardened),
                      (this.index = e.index),
                      (this.hardened = e.hardened),
                      this.index !== undefined ? (this.wildcard = !1) : (this.wildcard = !0),
                      this.index && 0 != (this.index & n.HARDENED_BIT))
                    )
                      throw new Error(
                        `#[ur-registry][PathComponent][fn.constructor]: Invalid index ${this.index} - most significant bit cannot be set`
                      );
                  }
                }
                (r.PathComponent = n), (n.HARDENED_BIT = 2147483648);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/PathComponent.js"
      }
    ],
    [
      562,
      { "./lib": 570, "@ngraveio/bc-ur": 2098 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.RegistryItem = void 0);
                const n = e("@ngraveio/bc-ur"),
                  o = e("./lib");
                r.RegistryItem = class {
                  constructor() {
                    (this.toCBOR = () => {
                      if (this.toDataItem() === undefined)
                        throw new Error(
                          `#[ur-registry][RegistryItem][fn.toCBOR]: registry ${this.getRegistryType()}'s method toDataItem returns undefined`
                        );
                      return (0, o.encodeDataItem)(this.toDataItem());
                    }),
                      (this.toUR = () => new n.UR(this.toCBOR(), this.getRegistryType().getType())),
                      (this.toUREncoder = (e, t, r) => {
                        const o = this.toUR();
                        return new n.UREncoder(o, e, t, r);
                      });
                  }
                };
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/RegistryItem.js"
      }
    ],
    [
      563,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.RegistryTypes = r.RegistryType = void 0);
                class n {
                  constructor(e, t) {
                    (this.type = e), (this.tag = t), (this.getTag = () => this.tag), (this.getType = () => this.type);
                  }
                }
                (r.RegistryType = n),
                  (r.RegistryTypes = {
                    UUID: new n("uuid", 37),
                    BYTES: new n("bytes", undefined),
                    CRYPTO_HDKEY: new n("crypto-hdkey", 303),
                    CRYPTO_KEYPATH: new n("crypto-keypath", 304),
                    CRYPTO_COIN_INFO: new n("crypto-coin-info", 305),
                    CRYPTO_ECKEY: new n("crypto-eckey", 306),
                    CRYPTO_OUTPUT: new n("crypto-output", 308),
                    CRYPTO_PSBT: new n("crypto-psbt", 310),
                    CRYPTO_ACCOUNT: new n("crypto-account", 311),
                    CRYPTO_MULTI_ACCOUNTS: new n("crypto-multi-accounts", 1103)
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/RegistryType.js"
      }
    ],
    [
      564,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.ScriptExpressions = r.ScriptExpression = void 0);
                class n {
                  constructor(e, t) {
                    (this.tag = e), (this.expression = t), (this.getTag = () => this.tag), (this.getExpression = () => this.expression);
                  }
                }
                (r.ScriptExpression = n),
                  (n.fromTag = (e) => Object.values(r.ScriptExpressions).find((t) => t.getTag() === e)),
                  (r.ScriptExpressions = {
                    SCRIPT_HASH: new n(400, "sh"),
                    WITNESS_SCRIPT_HASH: new n(401, "wsh"),
                    PUBLIC_KEY: new n(402, "pk"),
                    PUBLIC_KEY_HASH: new n(403, "pkh"),
                    WITNESS_PUBLIC_KEY_HASH: new n(404, "wpkh"),
                    COMBO: new n(405, "combo"),
                    MULTISIG: new n(406, "multi"),
                    SORTED_MULTISIG: new n(407, "sortedmulti"),
                    ADDRESS: new n(307, "addr"),
                    RAW_SCRIPT: new n(408, "raw")
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/ScriptExpression.js"
      }
    ],
    [
      565,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.UnknownURTypeError = void 0);
                class n extends Error {
                  constructor(e) {
                    super(e);
                  }
                }
                r.UnknownURTypeError = n;
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/errors/index.js"
      }
    ],
    [
      566,
      { "../CryptoHDKey": 555, "../RegistryItem": 562, "../RegistryType": 563, "../lib": 570, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoMultiAccounts = void 0);
                    const n = e("../RegistryType"),
                      o = e("../CryptoHDKey"),
                      i = e("../RegistryItem"),
                      s = e("../lib");
                    var a;
                    !(function (e) {
                      (e[(e.masterFingerprint = 1)] = "masterFingerprint"), (e[(e.keys = 2)] = "keys"), (e[(e.device = 3)] = "device");
                    })(a || (a = {}));
                    class c extends i.RegistryItem {
                      constructor(e, t, r) {
                        super(),
                          (this.masterFingerprint = e),
                          (this.keys = t),
                          (this.device = r),
                          (this.getRegistryType = () => n.RegistryTypes.CRYPTO_MULTI_ACCOUNTS),
                          (this.getMasterFingerprint = () => this.masterFingerprint),
                          (this.getKeys = () => this.keys),
                          (this.getDevice = () => this.device),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              this.masterFingerprint && (e[a.masterFingerprint] = this.masterFingerprint.readUInt32BE(0)),
                              this.keys &&
                                (e[a.keys] = this.keys.map((e) => {
                                  const t = e.toDataItem();
                                  return t.setTag(e.getRegistryType().getTag()), t;
                                })),
                              this.device && (e[a.device] = this.device),
                              new s.DataItem(e)
                            );
                          });
                      }
                    }
                    (r.CryptoMultiAccounts = c),
                      (c.fromDataItem = (e) => {
                        const r = e.getData(),
                          n = t.alloc(4),
                          i = r[a.masterFingerprint];
                        i && n.writeUInt32BE(i, 0);
                        const s = r[a.keys].map((e) => o.CryptoHDKey.fromDataItem(e)),
                          u = r[a.device];
                        return new c(n, s, u);
                      }),
                      (c.fromCBOR = (e) => {
                        const t = (0, s.decodeToDataItem)(e);
                        return c.fromDataItem(t);
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/extended/CryptoMultiAccounts.js"
      }
    ],
    [
      567,
      {
        "./Bytes": 551,
        "./CryptoAccount": 552,
        "./CryptoCoinInfo": 553,
        "./CryptoECKey": 554,
        "./CryptoHDKey": 555,
        "./CryptoKeypath": 556,
        "./CryptoOutput": 557,
        "./CryptoPSBT": 558,
        "./Decoder": 559,
        "./MultiKey": 560,
        "./PathComponent": 561,
        "./RegistryItem": 562,
        "./RegistryType": 563,
        "./ScriptExpression": 564,
        "./errors": 565,
        "./extended/CryptoMultiAccounts": 566,
        "./lib": 570,
        "./patchCBOR": 571,
        "./types": 572,
        "./utils": 573,
        tslib: 4649
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.extend =
                    r.PathComponent =
                    r.ScriptExpressions =
                    r.MultiKey =
                    r.CryptoPSBT =
                    r.CryptoOutput =
                    r.CryptoECKey =
                    r.CryptoCoinInfoNetwork =
                    r.CryptoCoinInfoType =
                    r.CryptoCoinInfo =
                    r.CryptoKeypath =
                    r.CryptoMultiAccounts =
                    r.CryptoHDKey =
                    r.CryptoAccount =
                    r.Bytes =
                    r.URRegistryDecoder =
                    r.DataItem =
                      void 0);
                const n = e("tslib");
                e("./patchCBOR");
                const o = e("./CryptoHDKey");
                Object.defineProperty(r, "CryptoHDKey", {
                  enumerable: !0,
                  get: function () {
                    return o.CryptoHDKey;
                  }
                });
                const i = e("./CryptoKeypath");
                Object.defineProperty(r, "CryptoKeypath", {
                  enumerable: !0,
                  get: function () {
                    return i.CryptoKeypath;
                  }
                });
                const s = e("./CryptoCoinInfo");
                Object.defineProperty(r, "CryptoCoinInfo", {
                  enumerable: !0,
                  get: function () {
                    return s.CryptoCoinInfo;
                  }
                }),
                  Object.defineProperty(r, "CryptoCoinInfoType", {
                    enumerable: !0,
                    get: function () {
                      return s.Type;
                    }
                  }),
                  Object.defineProperty(r, "CryptoCoinInfoNetwork", {
                    enumerable: !0,
                    get: function () {
                      return s.Network;
                    }
                  });
                const a = e("./CryptoECKey");
                Object.defineProperty(r, "CryptoECKey", {
                  enumerable: !0,
                  get: function () {
                    return a.CryptoECKey;
                  }
                });
                const c = e("./Bytes");
                Object.defineProperty(r, "Bytes", {
                  enumerable: !0,
                  get: function () {
                    return c.Bytes;
                  }
                });
                const u = e("./CryptoOutput");
                Object.defineProperty(r, "CryptoOutput", {
                  enumerable: !0,
                  get: function () {
                    return u.CryptoOutput;
                  }
                });
                const l = e("./CryptoPSBT");
                Object.defineProperty(r, "CryptoPSBT", {
                  enumerable: !0,
                  get: function () {
                    return l.CryptoPSBT;
                  }
                });
                const d = e("./CryptoAccount");
                Object.defineProperty(r, "CryptoAccount", {
                  enumerable: !0,
                  get: function () {
                    return d.CryptoAccount;
                  }
                });
                const p = e("./Decoder");
                Object.defineProperty(r, "URRegistryDecoder", {
                  enumerable: !0,
                  get: function () {
                    return p.URRegistryDecoder;
                  }
                });
                const h = e("./MultiKey");
                Object.defineProperty(r, "MultiKey", {
                  enumerable: !0,
                  get: function () {
                    return h.MultiKey;
                  }
                });
                const f = e("./ScriptExpression");
                Object.defineProperty(r, "ScriptExpressions", {
                  enumerable: !0,
                  get: function () {
                    return f.ScriptExpressions;
                  }
                });
                const g = e("./PathComponent");
                Object.defineProperty(r, "PathComponent", {
                  enumerable: !0,
                  get: function () {
                    return g.PathComponent;
                  }
                });
                const m = e("./RegistryItem"),
                  y = e("./RegistryType"),
                  _ = e("./lib");
                var v = e("./lib");
                Object.defineProperty(r, "DataItem", {
                  enumerable: !0,
                  get: function () {
                    return v.DataItem;
                  }
                });
                const T = e("./utils"),
                  E = e("./extended/CryptoMultiAccounts");
                Object.defineProperty(r, "CryptoMultiAccounts", {
                  enumerable: !0,
                  get: function () {
                    return E.CryptoMultiAccounts;
                  }
                });
                const b = {
                    URRegistryDecoder: p.URRegistryDecoder,
                    Bytes: c.Bytes,
                    CryptoAccount: d.CryptoAccount,
                    CryptoHDKey: o.CryptoHDKey,
                    CryptoMultiAccounts: E.CryptoMultiAccounts,
                    CryptoKeypath: i.CryptoKeypath,
                    CryptoCoinInfo: s.CryptoCoinInfo,
                    CryptoCoinInfoType: s.Type,
                    CryptoCoinInfoNetwork: s.Network,
                    CryptoECKey: a.CryptoECKey,
                    CryptoOutput: u.CryptoOutput,
                    CryptoPSBT: l.CryptoPSBT,
                    MultiKey: h.MultiKey,
                    ScriptExpressions: f.ScriptExpressions,
                    PathComponent: g.PathComponent
                  },
                  w = {
                    addReader: _.addReader,
                    addSemanticDecode: _.addSemanticDecode,
                    addSemanticEncode: _.addSemanticEncode,
                    addWriter: _.addWriter,
                    patchTags: T.patchTags
                  },
                  A = {
                    RegistryTypes: y.RegistryTypes,
                    RegistryItem: m.RegistryItem,
                    RegistryType: y.RegistryType,
                    decodeToDataItem: _.decodeToDataItem,
                    encodeDataItem: _.encodeDataItem,
                    cbor: w
                  };
                (r.extend = A),
                  (0, n.__exportStar)(e("./errors"), r),
                  (0, n.__exportStar)(e("./Decoder"), r),
                  (0, n.__exportStar)(e("./lib"), r),
                  (0, n.__exportStar)(e("./CryptoAccount"), r),
                  (0, n.__exportStar)(e("./CryptoPSBT"), r),
                  (0, n.__exportStar)(e("./CryptoHDKey"), r),
                  (0, n.__exportStar)(e("./extended/CryptoMultiAccounts"), r),
                  (0, n.__exportStar)(e("./CryptoOutput"), r),
                  (0, n.__exportStar)(e("./CryptoCoinInfo"), r),
                  (0, n.__exportStar)(e("./CryptoECKey"), r),
                  (0, n.__exportStar)(e("./MultiKey"), r),
                  (0, n.__exportStar)(e("./CryptoKeypath"), r),
                  (0, n.__exportStar)(e("./patchCBOR"), r),
                  (0, n.__exportStar)(e("./PathComponent"), r),
                  (0, n.__exportStar)(e("./RegistryItem"), r),
                  (0, n.__exportStar)(e("./RegistryType"), r),
                  (0, n.__exportStar)(e("./types"), r),
                  (0, n.__exportStar)(e("./utils"), r),
                  (r.default = b);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/index.js"
      }
    ],
    [
      568,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.DataItem = void 0);
                r.DataItem = class {
                  constructor(e, t) {
                    (this.setTag = (e) => {
                      this.tag = e;
                    }),
                      (this.clearTag = () => {
                        this.tag = undefined;
                      }),
                      (this.getTag = () => this.tag),
                      (this.getData = () => this.data),
                      (this.data = e),
                      (this.tag = t);
                  }
                };
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/lib/DataItem.js"
      }
    ],
    [
      569,
      { "./DataItem": 568, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (r) {
                  (function () {
                    !(function (e, r) {
                      "function" == typeof define && define.amd
                        ? define([], r)
                        : void 0 !== t && t.exports
                        ? (t.exports = r())
                        : (e.CBOR = r());
                    })(this, function () {
                      const { DataItem: t } = e("./DataItem");
                      var n = (function () {
                        function e(e) {
                          this.$hex = e;
                        }
                        (e.prototype = {
                          length: function () {
                            return this.$hex.length / 2;
                          },
                          toString: function (e) {
                            if (!e || "hex" === e || 16 === e) return this.$hex;
                            if ("utf-8" === e) {
                              for (var t = "", r = 0; r < this.$hex.length; r += 2) t += "%" + this.$hex.substring(r, r + 2);
                              return decodeURIComponent(t);
                            }
                            if ("latin" === e) {
                              for (t = [], r = 0; r < this.$hex.length; r += 2) t.push(parseInt(this.$hex.substring(r, r + 2), 16));
                              return String.fromCharCode.apply(String, t);
                            }
                            throw new Error("Unrecognised format: " + e);
                          }
                        }),
                          (e.fromLatinString = function (t) {
                            for (var r = "", n = 0; n < t.length; n++) {
                              var o = t.charCodeAt(n).toString(16);
                              1 === o.length && (o = "0" + o), (r += o);
                            }
                            return new e(r);
                          }),
                          (e.fromUtf8String = function (t) {
                            for (var r = encodeURIComponent(t), n = "", o = 0; o < r.length; o++)
                              if ("%" === r.charAt(o)) (n += r.substring(o + 1, o + 3)), (o += 2);
                              else {
                                var i = r.charCodeAt(o).toString(16);
                                i.length < 2 && (i = "0" + i), (n += i);
                              }
                            return new e(n);
                          });
                        var n = [],
                          o = {},
                          i = function (e) {
                            return function () {
                              throw new Error(e + " not implemented");
                            };
                          };
                        function s() {}
                        function a() {}
                        function c(e, t) {
                          var r = e.value;
                          return r < 24
                            ? r
                            : 24 == r
                            ? t.readByte()
                            : 25 == r
                            ? t.readUint16()
                            : 26 == r
                            ? t.readUint32()
                            : 27 == r
                            ? t.readUint64()
                            : 31 == r
                            ? null
                            : void i("Additional info: " + r)();
                        }
                        function u(e, t, r) {
                          var n = e << 5;
                          t < 24
                            ? r.writeByte(n | t)
                            : t < 256
                            ? (r.writeByte(24 | n), r.writeByte(t))
                            : t < 65536
                            ? (r.writeByte(25 | n), r.writeUint16(t))
                            : t < 4294967296
                            ? (r.writeByte(26 | n), r.writeUint32(t))
                            : (r.writeByte(27 | n), r.writeUint64(t));
                        }
                        (s.prototype = {
                          peekByte: i("peekByte"),
                          readByte: i("readByte"),
                          readChunk: i("readChunk"),
                          readFloat16: function () {
                            var e = this.readUint16(),
                              t = (32767 & e) >> 10,
                              r = 1023 & e,
                              n = 32768 & e;
                            if (31 === t) return 0 === r ? (n ? -Infinity : Infinity) : NaN;
                            var o = t ? Math.pow(2, t - 25) * (1024 + r) : Math.pow(2, -24) * r;
                            return n ? -o : o;
                          },
                          readFloat32: function () {
                            var e = this.readUint32(),
                              t = (2147483647 & e) >> 23,
                              r = 8388607 & e,
                              n = 2147483648 & e;
                            if (255 === t) return 0 === r ? (n ? -Infinity : Infinity) : NaN;
                            var o = t ? Math.pow(2, t - 23 - 127) * (8388608 + r) : Math.pow(2, -149) * r;
                            return n ? -o : o;
                          },
                          readFloat64: function () {
                            var e = this.readUint32(),
                              t = (e >> 20) & 2047,
                              r = 4294967296 * (1048575 & e) + this.readUint32(),
                              n = 2147483648 & e;
                            if (2047 === t) return 0 === r ? (n ? -Infinity : Infinity) : NaN;
                            var o = t ? Math.pow(2, t - 52 - 1023) * (4503599627370496 + r) : Math.pow(2, -1074) * r;
                            return n ? -o : o;
                          },
                          readUint16: function () {
                            return 256 * this.readByte() + this.readByte();
                          },
                          readUint32: function () {
                            return 65536 * this.readUint16() + this.readUint16();
                          },
                          readUint64: function () {
                            return 4294967296 * this.readUint32() + this.readUint32();
                          }
                        }),
                          (a.prototype = {
                            writeByte: i("writeByte"),
                            result: i("result"),
                            writeFloat16: i("writeFloat16"),
                            writeFloat32: i("writeFloat32"),
                            writeFloat64: i("writeFloat64"),
                            writeUint16: function (e) {
                              this.writeByte((e >> 8) & 255), this.writeByte(255 & e);
                            },
                            writeUint32: function (e) {
                              this.writeUint16((e >> 16) & 65535), this.writeUint16(65535 & e);
                            },
                            writeUint64: function (e) {
                              if (e >= 9007199254740992 || e <= -9007199254740992)
                                throw new Error("Cannot encode Uint64 of: " + e + " magnitude to big (floating point errors)");
                              this.writeUint32(Math.floor(e / 4294967296)), this.writeUint32(e % 4294967296);
                            },
                            writeString: i("writeString"),
                            canWriteBinary: function (e) {
                              return !1;
                            },
                            writeBinary: i("writeChunk")
                          });
                        var l = new Error();
                        function d(e) {
                          var t = (function (e) {
                            var t = e.readByte();
                            return { type: t >> 5, value: 31 & t };
                          })(e);
                          switch (t.type) {
                            case 0:
                              return c(t, e);
                            case 1:
                              return -1 - c(t, e);
                            case 2:
                              return e.readChunk(c(t, e));
                            case 3:
                              return e.readChunk(c(t, e)).toString("utf-8");
                            case 4:
                            case 5:
                              var r = c(t, e),
                                n = [];
                              if (null !== r) {
                                5 === t.type && (r *= 2);
                                for (var i = 0; i < r; i++) n[i] = d(e);
                              } else for (var s; (s = d(e)) !== l; ) n.push(s);
                              if (5 === t.type) {
                                var a = {};
                                for (i = 0; i < n.length; i += 2) a[n[i]] = n[i + 1];
                                return a;
                              }
                              return n;
                            case 6:
                              var u = c(t, e),
                                p = o[u];
                              n = d(e);
                              return p ? p(n) : n;
                            case 7:
                              if (25 === t.value) return e.readFloat16();
                              if (26 === t.value) return e.readFloat32();
                              if (27 === t.value) return e.readFloat64();
                              switch (c(t, e)) {
                                case 20:
                                  return !1;
                                case 21:
                                  return !0;
                                case 22:
                                  return null;
                                case 23:
                                  return undefined;
                                case null:
                                  return l;
                                default:
                                  throw new Error("Unknown fixed value: " + t.value);
                              }
                            default:
                              throw new Error("Unsupported header: " + JSON.stringify(t));
                          }
                          throw new Error("not implemented yet");
                        }
                        function p(e, t) {
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r].fn(e);
                            if (o !== undefined) return u(6, n[r].tag, t), p(o, t);
                          }
                          if ((e && "function" == typeof e.toCBOR && (e = e.toCBOR()), !1 === e)) u(7, 20, t);
                          else if (!0 === e) u(7, 21, t);
                          else if (null === e) u(7, 22, t);
                          else if (e === undefined) u(7, 23, t);
                          else if ("number" == typeof e)
                            Math.floor(e) === e && e < 9007199254740992 && e > -9007199254740992
                              ? e < 0
                                ? u(1, -1 - e, t)
                                : u(0, e, t)
                              : (!(function (e, t, r) {
                                  r.writeByte((e << 5) | t);
                                })(7, 27, t),
                                t.writeFloat64(e));
                          else if ("string" == typeof e)
                            t.writeString(e, function (e) {
                              u(3, e, t);
                            });
                          else if (t.canWriteBinary(e))
                            t.writeBinary(e, function (e) {
                              u(2, e, t);
                            });
                          else {
                            if ("object" != typeof e) throw new Error("CBOR encoding not supported: " + e);
                            if ((g.config.useToJSON && "function" == typeof e.toJSON && (e = e.toJSON()), Array.isArray(e))) {
                              u(4, e.length, t);
                              for (r = 0; r < e.length; r++) p(e[r], t);
                            } else {
                              var i = Object.keys(e);
                              u(5, i.length, t);
                              for (r = 0; r < i.length; r++) {
                                const n = parseInt(i[r]);
                                isNaN(n) ? (p(i[r], t), p(e[i[r]], t)) : (p(n, t), p(e[i[r]], t));
                              }
                            }
                          }
                        }
                        var h = [],
                          f = [],
                          g = {
                            config: { useToJSON: !0 },
                            addWriter: function (e, t) {
                              "string" == typeof e
                                ? f.push(function (r) {
                                    if (e === r) return t(r);
                                  })
                                : f.push(e);
                            },
                            addReader: function (e, t) {
                              "string" == typeof e
                                ? h.push(function (r, n) {
                                    if (e === n) return t(r, n);
                                  })
                                : h.push(e);
                            },
                            encode: function (e, t) {
                              for (var r = 0; r < f.length; r++) {
                                var n = (0, f[r])(t);
                                if (n) return p(e, n), n.result();
                              }
                              throw new Error("Unsupported output format: " + t);
                            },
                            encodeDataItem: function (e, t) {
                              for (var r = 0; r < f.length; r++) {
                                var n = (0, f[r])(t);
                                if (n) return e.getTag() !== undefined ? (p(e, n), n.result()) : (p(e.getData(), n), n.result());
                              }
                              throw new Error("Unsupported output format: " + t);
                            },
                            decode: function (e, t) {
                              for (var r = 0; r < h.length; r++) {
                                var n = (0, h[r])(e, t);
                                if (n) return d(n);
                              }
                              throw new Error("Unsupported input format: " + t);
                            },
                            decodeToDataItem: function (e, r) {
                              for (var n = 0; n < h.length; n++) {
                                var o = (0, h[n])(e, r);
                                if (o) {
                                  const e = d(o);
                                  return e instanceof t ? e : new t(e);
                                }
                              }
                              throw new Error("Unsupported input format: " + r);
                            },
                            addSemanticEncode: function (e, t) {
                              if ("number" != typeof e || e % 1 != 0 || e < 0) throw new Error("Tag must be a positive integer");
                              return n.push({ tag: e, fn: t }), this;
                            },
                            addSemanticDecode: function (e, t) {
                              if ("number" != typeof e || e % 1 != 0 || e < 0) throw new Error("Tag must be a positive integer");
                              return (o[e] = t), this;
                            }
                          };
                        function m(e) {
                          (this.buffer = e), (this.pos = 0);
                        }
                        function y(e) {
                          (this.byteLength = 0),
                            (this.defaultBufferLength = 16384),
                            (this.latestBuffer = r.alloc(this.defaultBufferLength)),
                            (this.latestBufferOffset = 0),
                            (this.completeBuffers = []),
                            (this.stringFormat = e);
                        }
                        function _(e) {
                          (this.hex = e), (this.pos = 0);
                        }
                        function v(e) {
                          (this.$hex = ""), (this.finalFormat = e || "hex");
                        }
                        return (
                          (m.prototype = Object.create(s.prototype)),
                          (m.prototype.peekByte = function () {
                            return this.buffer[this.pos];
                          }),
                          (m.prototype.readByte = function () {
                            return this.buffer[this.pos++];
                          }),
                          (m.prototype.readUint16 = function () {
                            var e = this.buffer.readUInt16BE(this.pos);
                            return (this.pos += 2), e;
                          }),
                          (m.prototype.readUint32 = function () {
                            var e = this.buffer.readUInt32BE(this.pos);
                            return (this.pos += 4), e;
                          }),
                          (m.prototype.readFloat32 = function () {
                            var e = this.buffer.readFloatBE(this.pos);
                            return (this.pos += 4), e;
                          }),
                          (m.prototype.readFloat64 = function () {
                            var e = this.buffer.readDoubleBE(this.pos);
                            return (this.pos += 8), e;
                          }),
                          (m.prototype.readChunk = function (e) {
                            var t = r.alloc(e);
                            return this.buffer.copy(t, 0, this.pos, (this.pos += e)), t;
                          }),
                          (y.prototype = Object.create(a.prototype)),
                          (y.prototype.writeByte = function (e) {
                            (this.latestBuffer[this.latestBufferOffset++] = e),
                              this.latestBufferOffset >= this.latestBuffer.length &&
                                (this.completeBuffers.push(this.latestBuffer),
                                (this.latestBuffer = r.alloc(this.defaultBufferLength)),
                                (this.latestBufferOffset = 0)),
                              this.byteLength++;
                          }),
                          (y.prototype.writeFloat32 = function (e) {
                            var t = r.alloc(4);
                            t.writeFloatBE(e, 0), this.writeBuffer(t);
                          }),
                          (y.prototype.writeFloat64 = function (e) {
                            var t = r.alloc(8);
                            t.writeDoubleBE(e, 0), this.writeBuffer(t);
                          }),
                          (y.prototype.writeString = function (e, t) {
                            var n = r.from(e, "utf-8");
                            t(n.length), this.writeBuffer(n);
                          }),
                          (y.prototype.canWriteBinary = function (e) {
                            return e instanceof r;
                          }),
                          (y.prototype.writeBinary = function (e, t) {
                            t(e.length), this.writeBuffer(e);
                          }),
                          (y.prototype.writeBuffer = function (e) {
                            if (!(e instanceof r)) throw new TypeError("BufferWriter only accepts Buffers");
                            this.latestBufferOffset
                              ? this.latestBuffer.length - this.latestBufferOffset >= e.length
                                ? (e.copy(this.latestBuffer, this.latestBufferOffset),
                                  (this.latestBufferOffset += e.length),
                                  this.latestBufferOffset >= this.latestBuffer.length &&
                                    (this.completeBuffers.push(this.latestBuffer),
                                    (this.latestBuffer = r.alloc(this.defaultBufferLength)),
                                    (this.latestBufferOffset = 0)))
                                : (this.completeBuffers.push(this.latestBuffer.slice(0, this.latestBufferOffset)),
                                  this.completeBuffers.push(e),
                                  (this.latestBuffer = r.alloc(this.defaultBufferLength)),
                                  (this.latestBufferOffset = 0))
                              : this.completeBuffers.push(e),
                              (this.byteLength += e.length);
                          }),
                          (y.prototype.result = function () {
                            for (var e = r.alloc(this.byteLength), t = 0, n = 0; n < this.completeBuffers.length; n++) {
                              var o = this.completeBuffers[n];
                              o.copy(e, t, 0, o.length), (t += o.length);
                            }
                            return (
                              this.latestBufferOffset && this.latestBuffer.copy(e, t, 0, this.latestBufferOffset),
                              this.stringFormat ? e.toString(this.stringFormat) : e
                            );
                          }),
                          "function" == typeof r &&
                            (g.addReader(function (e, t) {
                              return r.isBuffer(e) ? new m(e) : "hex" === t || "base64" === t ? new m(r.from(e, t)) : void 0;
                            }),
                            g.addWriter(function (e) {
                              return e && "buffer" !== e ? ("hex" === e || "base64" === e ? new y(e) : void 0) : new y();
                            })),
                          (_.prototype = Object.create(s.prototype)),
                          (_.prototype.peekByte = function () {
                            var e = this.hex.substring(this.pos, 2);
                            return parseInt(e, 16);
                          }),
                          (_.prototype.readByte = function () {
                            var e = this.hex.substring(this.pos, this.pos + 2);
                            return (this.pos += 2), parseInt(e, 16);
                          }),
                          (_.prototype.readChunk = function (t) {
                            var n = this.hex.substring(this.pos, this.pos + 2 * t);
                            return (this.pos += 2 * t), "function" == typeof r ? r.from(n, "hex") : new e(n);
                          }),
                          (v.prototype = Object.create(a.prototype)),
                          (v.prototype.writeByte = function (e) {
                            if (e < 0 || e > 255) throw new Error("Byte value out of range: " + e);
                            var t = e.toString(16);
                            1 == t.length && (t = "0" + t), (this.$hex += t);
                          }),
                          (v.prototype.canWriteBinary = function (t) {
                            return t instanceof e || ("function" == typeof r && t instanceof r);
                          }),
                          (v.prototype.writeBinary = function (t, n) {
                            if (t instanceof e) n(t.length()), (this.$hex += t.$hex);
                            else {
                              if (!("function" == typeof r && t instanceof r))
                                throw new TypeError("HexWriter only accepts BinaryHex or Buffers");
                              n(t.length), (this.$hex += t.toString("hex"));
                            }
                          }),
                          (v.prototype.result = function () {
                            return "buffer" === this.finalFormat && "function" == typeof r
                              ? r.from(this.$hex, "hex")
                              : new e(this.$hex).toString(this.finalFormat);
                          }),
                          (v.prototype.writeString = function (t, r) {
                            var n = e.fromUtf8String(t);
                            r(n.length()), (this.$hex += n.$hex);
                          }),
                          g.addReader(function (t, r) {
                            return t instanceof e || t.$hex ? new _(t.$hex) : "hex" === r ? new _(t) : void 0;
                          }),
                          g.addWriter(function (e) {
                            if ("hex" === e) return new v();
                          }),
                          g
                        );
                      })();
                      return (
                        n
                          .addSemanticEncode(0, function (e) {
                            if (e instanceof Date) return e.toISOString();
                          })
                          .addSemanticDecode(0, function (e) {
                            return new Date(e);
                          })
                          .addSemanticDecode(1, function (e) {
                            return new Date(e);
                          }),
                        n
                      );
                    });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/lib/cbor-sync.js"
      }
    ],
    [
      570,
      { "./DataItem": 568, "./cbor-sync": 569 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.DataItem =
                    r.addWriter =
                    r.addReader =
                    r.addSemanticEncode =
                    r.addSemanticDecode =
                    r.decodeToDataItem =
                    r.encodeDataItem =
                      void 0);
                var n = e("./cbor-sync");
                Object.defineProperty(r, "encodeDataItem", {
                  enumerable: !0,
                  get: function () {
                    return n.encodeDataItem;
                  }
                }),
                  Object.defineProperty(r, "decodeToDataItem", {
                    enumerable: !0,
                    get: function () {
                      return n.decodeToDataItem;
                    }
                  }),
                  Object.defineProperty(r, "addSemanticDecode", {
                    enumerable: !0,
                    get: function () {
                      return n.addSemanticDecode;
                    }
                  }),
                  Object.defineProperty(r, "addSemanticEncode", {
                    enumerable: !0,
                    get: function () {
                      return n.addSemanticEncode;
                    }
                  }),
                  Object.defineProperty(r, "addReader", {
                    enumerable: !0,
                    get: function () {
                      return n.addReader;
                    }
                  }),
                  Object.defineProperty(r, "addWriter", {
                    enumerable: !0,
                    get: function () {
                      return n.addWriter;
                    }
                  });
                var o = e("./DataItem");
                Object.defineProperty(r, "DataItem", {
                  enumerable: !0,
                  get: function () {
                    return o.DataItem;
                  }
                });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/lib/index.js"
      }
    ],
    [
      571,
      { "./RegistryType": 563, "./ScriptExpression": 564, "./utils": 573 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                const n = e("./utils"),
                  o = e("./RegistryType"),
                  i = e("./ScriptExpression"),
                  s = Object.values(o.RegistryTypes)
                    .filter((e) => !!e.getTag())
                    .map((e) => e.getTag()),
                  a = Object.values(i.ScriptExpressions).map((e) => e.getTag());
                (0, n.patchTags)(s.concat(a));
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/patchCBOR.js"
      }
    ],
    [
      572,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/types.js"
      }
    ],
    [
      573,
      { "./lib": 570 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.patchTags = void 0);
                const n = e("./lib"),
                  o = [];
                r.patchTags = (e) => {
                  e.forEach((e) => {
                    o.find((t) => t === e) ||
                      ((0, n.addSemanticEncode)(e, (t) => {
                        if (t instanceof n.DataItem && t.getTag() === e) return t.getData();
                      }),
                      (0, n.addSemanticDecode)(e, (t) => new n.DataItem(t, e)),
                      o.push(e));
                  });
                };
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/utils.js"
      }
    ],
    [
      59,
      { "../../../shared/modules/browser-runtime.utils": 4781, "@sentry/browser": 2179, loglevel: 4083, "webextension-polyfill": 4733 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = a(e("webextension-polyfill")),
                  o = a(e("loglevel")),
                  i = e("@sentry/browser"),
                  s = e("../../../shared/modules/browser-runtime.utils");
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                r.default = class {
                  constructor() {
                    (this.isSupported = Boolean(n.default.storage.local)),
                      this.isSupported || o.default.error("Storage local API not available."),
                      (this.dataPersistenceFailing = !1),
                      (this.mostRecentRetrievedState = null);
                  }
                  setMetadata(e) {
                    this.metadata = e;
                  }
                  async set(e) {
                    if (!this.isSupported)
                      throw new Error("Metamask- cannot persist state to local store as this browser does not support this action");
                    if (!e) throw new Error("MetaMask - updated state is missing");
                    if (!this.metadata)
                      throw new Error('MetaMask - metadata must be set on instance of ExtensionStore before calling "set"');
                    try {
                      await this._set({ data: e, meta: this.metadata }), this.dataPersistenceFailing && (this.dataPersistenceFailing = !1);
                    } catch (e) {
                      this.dataPersistenceFailing || ((this.dataPersistenceFailing = !0), (0, i.captureException)(e)),
                        o.default.error("error setting state in local store:", e);
                    }
                  }
                  async get() {
                    if (!this.isSupported) return undefined;
                    const e = await this._get();
                    return (
                      (t = e),
                      0 === Object.keys(t).length
                        ? ((this.mostRecentRetrievedState = null), undefined)
                        : ((this.mostRecentRetrievedState = e), e)
                    );
                    var t;
                  }
                  _get() {
                    const { local: e } = n.default.storage;
                    return new Promise((t, r) => {
                      e.get(null).then((e) => {
                        const n = (0, s.checkForLastError)();
                        n ? r(n) : t(e);
                      });
                    });
                  }
                  _set(e) {
                    const { local: t } = n.default.storage;
                    return new Promise((r, n) => {
                      t.set(e).then(() => {
                        const e = (0, s.checkForLastError)();
                        e ? n(e) : r();
                      });
                    });
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/local-store.js" }
    ],
    [
      63,
      { "../../../shared/modules/fetch-with-timeout": 4786, loglevel: 4083 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = o(e("loglevel"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i(e, t, r) {
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
                const s = (0, o(e("../../../shared/modules/fetch-with-timeout")).default)();
                r.default = class {
                  constructor() {
                    i(this, "isSupported", !0),
                      (this._initialized = !1),
                      (this._initializing = this._init()),
                      (this._state = undefined),
                      (this.mostRecentRetrievedState = null);
                  }
                  async _init() {
                    try {
                      const e = await s("http://localhost:12345/state.json");
                      e.ok && (this._state = await e.json());
                    } catch (e) {
                      n.default.debug(`Error loading network state: '${e.message}'`);
                    } finally {
                      this._initialized = !0;
                    }
                  }
                  async get() {
                    return (
                      this._initialized || (await this._initializing),
                      this.mostRecentRetrievedState || (this.mostRecentRetrievedState = this._state),
                      this._state
                    );
                  }
                  setMetadata(e) {
                    this.metadata = e;
                  }
                  async set(e) {
                    if (!this.isSupported)
                      throw new Error("Metamask- cannot persist state to local store as this browser does not support this action");
                    if (!e) throw new Error("MetaMask - updated state is missing");
                    if (!this.metadata)
                      throw new Error('MetaMask - metadata must be set on instance of ExtensionStore before calling "set"');
                    this._initialized || (await this._initializing), (this._state = { data: e, meta: this._metadata });
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/network-store.js" }
    ],
    [
      82,
      { "@sentry/utils": 2262 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.FilterEvents = void 0);
                var n = e("@sentry/utils");
                function o(e, t, r) {
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
                class i {
                  constructor({ getMetaMetricsEnabled: e }) {
                    o(this, "name", i.id), o(this, "getMetaMetricsEnabled", void 0), (this.getMetaMetricsEnabled = e);
                  }
                  setupOnce(e, t) {
                    e(async (e) => {
                      const r = t().getIntegration(i);
                      return r && !(await r.getMetaMetricsEnabled())
                        ? (n.logger.warn("Event dropped due to MetaMetrics setting."), null)
                        : e;
                    });
                  }
                }
                (r.FilterEvents = i), o(i, "id", "FilterEvents");
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/sentry-filter-events.ts" }
    ],
    [
      83,
      {
        "../../../shared/modules/object.utils": 4792,
        "../platforms/extension": 203,
        "./local-store": 59,
        "./network-store": 63,
        "./setupSentry": 84
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n = e("../../../shared/modules/object.utils"),
                  o = a(e("../platforms/extension")),
                  i = a(e("./local-store")),
                  s = (a(e("./network-store")), e("./setupSentry"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = new o.default(),
                  u = new i.default();
                globalThis.stateHooks.getPersistedState = async function () {
                  return await u.get();
                };
                const l = { data: s.SENTRY_BACKGROUND_STATE, meta: { version: !0 } };
                globalThis.stateHooks.getSentryState = function () {
                  const e = { browser: window.navigator.userAgent, version: c.getVersion() };
                  if (globalThis.stateHooks.getSentryAppState) return { ...e, state: globalThis.stateHooks.getSentryAppState() };
                  if (u.mostRecentRetrievedState || globalThis.stateHooks.getMostRecentPersistedState) {
                    const t = u.mostRecentRetrievedState || globalThis.stateHooks.getMostRecentPersistedState();
                    if (t) return { ...e, persistedState: (0, n.maskObject)(t, l) };
                  }
                  return e;
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/setup-initial-state-hooks.js" }
    ],
    [
      84,
      {
        "../../../shared/modules/object.utils": 4792,
        "./extractEthjsErrorMessage": 55,
        "./sentry-filter-events": 82,
        "@sentry/browser": 2179,
        "@sentry/integrations": 2234
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.SENTRY_UI_STATE = r.SENTRY_BACKGROUND_STATE = r.ERROR_URL_ALLOWLIST = void 0),
                  (r.beforeBreadcrumb = E),
                  (r.default = function ({ release: e, getState: t }) {
                    if (!e) throw new Error("Missing release");
                    if (l && !f) return undefined;
                    const r = "main" === h ? d : `${d}-${h}`;
                    let n;
                    "production" === d
                      ? (console.log(`Setting up Sentry Remote Error Reporting for '${r}': SENTRY_DSN`),
                        (n = "https://3567c198f8a8412082d32655da2961d0@sentry.io/273505"))
                      : (console.log(`Setting up Sentry Remote Error Reporting for '${r}': SENTRY_DSN_DEV`), (n = p));
                    async function s() {
                      const e = t();
                      if (e.state || e.persistedState) return _(e);
                      try {
                        return v(await globalThis.stateHooks.getPersistedState());
                      } catch (e) {
                        return console.error(e), !1;
                      }
                    }
                    o.init({
                      dsn: n,
                      debug: l,
                      autoSessionTracking: !1,
                      environment: r,
                      integrations: [new a.FilterEvents({ getMetaMetricsEnabled: s }), new i.Dedupe(), new i.ExtraErrorData()],
                      release: e,
                      beforeSend: (e) => w(e, t),
                      beforeBreadcrumb: E(t)
                    });
                    const c = async () => {
                        var e, t, r, n;
                        const i = null === (e = o.getCurrentHub) || void 0 === e ? void 0 : e.call(o),
                          a =
                            (null === (t = i.getClient) || void 0 === t || null === (r = (n = t.call(i)).getOptions) || void 0 === r
                              ? void 0
                              : r.call(n)) ?? {};
                        i && !0 === (await s()) && ((a.autoSessionTracking = !0), i.startSession());
                      },
                      u = async () => {
                        var e, t, r, n;
                        const i = null === (e = o.getCurrentHub) || void 0 === e ? void 0 : e.call(o),
                          a =
                            (null === (t = i.getClient) || void 0 === t || null === (r = (n = t.call(i)).getOptions) || void 0 === r
                              ? void 0
                              : r.call(n)) ?? {};
                        i && !1 === (await s()) && ((a.autoSessionTracking = !1), i.endSession());
                      };
                    return {
                      ...o,
                      startSession: c,
                      endSession: u,
                      toggleSession: async () => {
                        var e, t, r, n;
                        const i = null === (e = o.getCurrentHub) || void 0 === e ? void 0 : e.call(o),
                          a = (null === (t = i.getClient) || void 0 === t || null === (r = (n = t.call(i)).getOptions) || void 0 === r
                            ? void 0
                            : r.call(n)) ?? { autoSessionTracking: !1 },
                          l = await s();
                        !0 === l && !1 === a.autoSessionTracking ? await c() : !1 === l && !0 === a.autoSessionTracking && (await u());
                      }
                    };
                  }),
                  (r.removeUrlsFromBreadCrumb = b),
                  (r.rewriteReport = w);
                var n,
                  o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var r = u(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = { __proto__: null },
                      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                      if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, i, s) : (n[i] = e[i]);
                      }
                    return (n.default = e), r && r.set(e, n), n;
                  })(e("@sentry/browser")),
                  i = e("@sentry/integrations"),
                  s = e("../../../shared/modules/object.utils"),
                  a = e("./sentry-filter-events"),
                  c = (n = e("./extractEthjsErrorMessage")) && n.__esModule ? n : { default: n };
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    r = new WeakMap();
                  return (u = function (e) {
                    return e ? r : t;
                  })(e);
                }
                const l = !1,
                  d = "production",
                  p = "https://f59f3dd640d2429d9d0e2445a87ea8e1@sentry.io/273496",
                  h = "main",
                  f = !1,
                  g = (r.ERROR_URL_ALLOWLIST = {
                    CRYPTOCOMPARE: "cryptocompare.com",
                    COINGECKO: "coingecko.com",
                    ETHERSCAN: "etherscan.io",
                    CODEFI: "codefi.network",
                    SEGMENT: "segment.io"
                  }),
                  m = (r.SENTRY_BACKGROUND_STATE = {
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
                    TokenListController: {
                      preventPollingOnNetworkRestart: !0,
                      tokenList: !1,
                      tokensChainsCache: { [s.AllProperties]: !1 }
                    },
                    TokenRatesController: { contractExchangeRates: !1 },
                    TokensController: {
                      allDetectedTokens: { [s.AllProperties]: !1 },
                      allIgnoredTokens: { [s.AllProperties]: !1 },
                      allTokens: { [s.AllProperties]: !1 },
                      detectedTokens: !1,
                      ignoredTokens: !1,
                      tokens: !1
                    },
                    TransactionController: { transactions: !1, lastFetchedBlockNumbers: !1 },
                    TxController: { transactions: !1 }
                  }),
                  y = Object.values(m).reduce((e, t) => ({ ...e, ...t }), {});
                r.SENTRY_UI_STATE = {
                  gas: !0,
                  history: !0,
                  metamask: {
                    ...y,
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
                function _(e) {
                  return e.persistedState
                    ? v(e.persistedState)
                    : !!e.state &&
                        (e.state.metamask
                          ? Boolean(e.state.metamask.participateInMetaMetrics)
                          : Boolean(null === (t = e.state.MetaMetricsController) || void 0 === t ? void 0 : t.participateInMetaMetrics));
                  var t;
                }
                function v(e) {
                  var t;
                  return Boolean(
                    null == e || null === (t = e.data) || void 0 === t || null === (t = t.MetaMetricsController) || void 0 === t
                      ? void 0
                      : t.participateInMetaMetrics
                  );
                }
                function T(e) {
                  return e.match(/^(chrome-extension|moz-extension):\/\//u) ? e : "";
                }
                function E(e) {
                  return (t) => {
                    if (!e) return null;
                    const r = e();
                    if (
                      !_(r) ||
                      !(function (e) {
                        var t, r;
                        return e.persistedState
                          ? Boolean(
                              null === (t = e.persistedState.data) || void 0 === t || null === (t = t.OnboardingController) || void 0 === t
                                ? void 0
                                : t.completedOnboarding
                            )
                          : !!e.state &&
                              (e.state.metamask
                                ? Boolean(e.state.metamask.completedOnboarding)
                                : Boolean(null === (r = e.state.OnboardingController) || void 0 === r ? void 0 : r.completedOnboarding));
                      })(r) ||
                      "ui.input" === (null == t ? void 0 : t.category)
                    )
                      return null;
                    return b(t);
                  };
                }
                function b(e) {
                  var t, r, n;
                  return (
                    null != e && null !== (t = e.data) && void 0 !== t && t.url && (e.data.url = T(e.data.url)),
                    null != e && null !== (r = e.data) && void 0 !== r && r.to && (e.data.to = T(e.data.to)),
                    null != e && null !== (n = e.data) && void 0 !== n && n.from && (e.data.from = T(e.data.from)),
                    e
                  );
                }
                function w(e, t) {
                  try {
                    if (
                      ((function (e) {
                        A(e, (e) => {
                          let t = (0, c.default)(e);
                          return (
                            0 === t.indexOf("Transaction Failed: known transaction") && (t = "Transaction Failed: known transaction"), t
                          );
                        });
                      })(e),
                      (function (e) {
                        A(e, (e) => {
                          let t = e;
                          const r = /(([-.+a-zA-Z]+:\/\/)|(www\.))\S+[@:.]\S+/gu;
                          return (
                            (t.match(r) || []).forEach((e) => {
                              try {
                                const r = new URL(e),
                                  { hostname: n } = r;
                                Object.values(g).some((e) => n === e || n.endsWith(`.${e}`)) || (t = t.replace(e, "**"));
                              } catch (r) {
                                t = t.replace(e, "**");
                              }
                            }),
                            t
                          );
                        });
                      })(e),
                      (function (e) {
                        A(e, (e) => e.replace(/0x[A-Fa-f0-9]{40}/u, "0x**"));
                      })(e),
                      (function (e) {
                        var t;
                        null !== (t = e.request) && void 0 !== t && t.url && (e.request.url = N(e.request.url));
                        e.exception &&
                          e.exception.values &&
                          e.exception.values.forEach((e) => {
                            e.stacktrace &&
                              e.stacktrace.frames.forEach((e) => {
                                e.filename = N(e.filename);
                              });
                          });
                      })(e),
                      t)
                    ) {
                      const r = t();
                      e.extra || (e.extra = {}), (e.extra.appState = r);
                    }
                  } catch (e) {
                    console.warn(e);
                  }
                  return e;
                }
                function A(e, t) {
                  "string" == typeof e.message && (e.message = t(e.message)),
                    e.exception &&
                      e.exception.values &&
                      e.exception.values.forEach((e) => {
                        "string" == typeof e.value && (e.value = t(e.value));
                      });
                }
                function N(e) {
                  var t;
                  if (null === (t = globalThis.location) || void 0 === t || !t.origin) return e;
                  const r = null == e ? void 0 : e.split(globalThis.location.origin)[1];
                  if (!r) return e;
                  return `/metamask${r}`;
                }
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/setupSentry.js" }
    ],
    [
      89,
      { "../../../shared/constants/app": 4749, "obj-multiplex": 4167, pump: 4277 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.setupMultiplex = function (e) {
                    const t = new n.default();
                    return (
                      t.ignoreStream(i.EXTENSION_MESSAGES.CONNECTION_READY),
                      (0, o.default)(e, t, e, (e) => {
                        e && console.error(e);
                      }),
                      t
                    );
                  });
                var n = s(e("obj-multiplex")),
                  o = s(e("pump")),
                  i = e("../../../shared/constants/app");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/stream-utils.js" }
    ],
    [
      91,
      {
        "../../../shared/constants/app": 4749,
        "../../../shared/constants/network": 4759,
        "../../../shared/constants/transaction": 4770,
        "../../../shared/modules/hexstring-utils": 4788,
        "bn.js": 2851,
        lodash: 4071,
        url: 4672
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.BnMultiplyByFraction = function (e, t, r) {
                    const n = new o.default(t),
                      i = new o.default(r);
                    return e.mul(n).div(i);
                  }),
                  (r.addHexPrefix = void 0),
                  (r.addUrlProtocolPrefix = function (e) {
                    let t = e.trim();
                    t.length && !n.default.parse(t).protocol && (t = `https://${t}`);
                    if (null !== h(t)) return t;
                    return null;
                  }),
                  (r.checkAlarmExists = function (e, t) {
                    return e.some((e) => e.name === t);
                  }),
                  (r.deferredPromise = function () {
                    let e, t;
                    return {
                      promise: new Promise((r, n) => {
                        (e = r), (t = n);
                      }),
                      resolve: e,
                      reject: t
                    };
                  }),
                  (r.formatTxMetaForRpcResult = function (e) {
                    const { r: t, s: r, v: n, hash: o, txReceipt: i, txParams: s } = e,
                      {
                        to: a,
                        data: u,
                        nonce: l,
                        gas: d,
                        from: p,
                        value: h,
                        gasPrice: f,
                        accessList: g,
                        maxFeePerGas: m,
                        maxPriorityFeePerGas: y
                      } = s,
                      _ = {
                        v: n,
                        r: t,
                        s: r,
                        to: a,
                        gas: d,
                        from: p,
                        hash: o,
                        nonce: `${l}`,
                        input: u || "0x",
                        value: h || "0x0",
                        accessList: g || null,
                        blockHash: (null == i ? void 0 : i.blockHash) || null,
                        blockNumber: (null == i ? void 0 : i.blockNumber) || null,
                        transactionIndex: (null == i ? void 0 : i.transactionIndex) || null,
                        type: m && y ? c.TransactionEnvelopeType.feeMarket : c.TransactionEnvelopeType.legacy
                      };
                    m && y ? ((_.gasPrice = m), (_.maxFeePerGas = m), (_.maxPriorityFeePerGas = y)) : (_.gasPrice = f);
                    return _;
                  }),
                  (r.generateRandomId = void 0),
                  (r.getChainType = function (e) {
                    if (e === a.CHAIN_IDS.MAINNET) return "mainnet";
                    if (a.TEST_CHAINS.includes(e)) return "testnet";
                    return "custom";
                  }),
                  (r.getPlatform = r.getEnvironmentType = void 0),
                  (r.getValidUrl = h),
                  (r.hexToBn = function (e) {
                    return new o.default((0, u.stripHexPrefix)(e), 16);
                  }),
                  (r.isValidDate = void 0),
                  (r.isWebUrl = function (e) {
                    const t = h(e);
                    return null !== t && ("https:" === t.protocol || "http:" === t.protocol);
                  }),
                  (r.previousValueComparator = function (e, t) {
                    let r,
                      n = !0;
                    return (o) => {
                      try {
                        return n ? ((n = !1), e(t ?? o, o)) : e(r, o);
                      } finally {
                        r = o;
                      }
                    };
                  });
                var n = l(e("url")),
                  o = l(e("bn.js")),
                  i = e("lodash"),
                  s = e("../../../shared/constants/app"),
                  a = e("../../../shared/constants/network"),
                  c = e("../../../shared/constants/transaction"),
                  u = e("../../../shared/modules/hexstring-utils");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const d = (0, i.memoize)((e) => {
                  const t = new URL(e);
                  return "/popup.html" === t.pathname
                    ? s.ENVIRONMENT_TYPE_POPUP
                    : ["/home.html"].includes(t.pathname)
                    ? s.ENVIRONMENT_TYPE_FULLSCREEN
                    : "/notification.html" === t.pathname
                    ? s.ENVIRONMENT_TYPE_NOTIFICATION
                    : s.ENVIRONMENT_TYPE_BACKGROUND;
                });
                r.getEnvironmentType = (e = window.location.href) => d(e);
                r.getPlatform = () => {
                  const { navigator: e } = window,
                    { userAgent: t } = e;
                  return t.includes("Firefox")
                    ? s.PLATFORM_FIREFOX
                    : "brave" in e
                    ? s.PLATFORM_BRAVE
                    : t.includes("Edg/")
                    ? s.PLATFORM_EDGE
                    : t.includes("OPR")
                    ? s.PLATFORM_OPERA
                    : s.PLATFORM_CHROME;
                };
                r.addHexPrefix = (e) =>
                  "string" != typeof e || e.match(/^-?0x/u)
                    ? e
                    : e.match(/^-?0X/u)
                    ? e.replace("0X", "0x")
                    : e.startsWith("-")
                    ? e.replace("-", "-0x")
                    : `0x${e}`;
                const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                r.generateRandomId = () => {
                  let e = "";
                  for (let t = 0; t < 20; t++) e += p.charAt(Math.floor(62 * Math.random()));
                  return e;
                };
                function h(e) {
                  try {
                    const t = new URL(e);
                    return 0 === t.hostname.length || 0 === t.pathname.length || t.hostname !== decodeURIComponent(t.hostname) ? null : t;
                  } catch (e) {
                    return null;
                  }
                }
                r.isValidDate = (e) => e instanceof Date;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/util.ts" }
    ]
  ],
  [],
  {}
);
