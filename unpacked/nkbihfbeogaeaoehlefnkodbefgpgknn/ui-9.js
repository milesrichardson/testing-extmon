LavaPack.loadBundle(
  [
    [
      5113,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../components/ui/pulse-loader": 4701,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../selectors/selectors": 5200,
        "../swaps-footer": 5177,
        "./swap-step-icon": 5115,
        "lodash/isEqual": 3300,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    const e = (0, n.useContext)(l.I18nContext),
                      t = (0, s.useHistory)(),
                      a = (0, r.useDispatch)(),
                      w = (0, r.useSelector)(i.getFetchParams, o.default),
                      { destinationTokenInfo: v, sourceTokenInfo: y } = (null == w ? void 0 : w.metaData) || {},
                      T = (0, r.useSelector)(i.getApproveTxParams, r.shallowEqual),
                      b = (0, r.useSelector)(u.isHardwareWallet),
                      S = (0, r.useSelector)(u.getHardwareWalletType),
                      k = (0, r.useSelector)(i.getSmartTransactionsOptInStatus),
                      C = (0, r.useSelector)(i.getSmartTransactionsEnabled),
                      x = (0, r.useSelector)(i.getCurrentSmartTransactionsEnabled),
                      O = Boolean(T),
                      I = (0, n.useContext)(g.MetaMetricsContext);
                    (0, n.useEffect)(() => {
                      I({
                        event: "Awaiting Signature(s) on a HW wallet",
                        category: h.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: {
                          needs_two_confirmations: O,
                          token_from: null == y ? void 0 : y.symbol,
                          token_from_amount: null == w ? void 0 : w.value,
                          token_to: null == v ? void 0 : v.symbol,
                          request_type: null != w && w.balanceError ? "Quote" : "Order",
                          slippage: null == w ? void 0 : w.slippage,
                          custom_slippage: 2 === (null == w ? void 0 : w.slippage),
                          is_hardware_wallet: b,
                          hardware_wallet_type: S,
                          stx_enabled: C,
                          current_stx_enabled: x,
                          stx_user_opt_in: k
                        }
                      });
                    }, []);
                    const P = e(O ? "swapTwoTransactions" : "swapConfirmWithHwWallet");
                    return n.default.createElement(
                      "div",
                      { className: "awaiting-signatures" },
                      n.default.createElement(
                        p.default,
                        {
                          paddingLeft: 8,
                          paddingRight: 8,
                          height: f.BLOCK_SIZES.FULL,
                          justifyContent: f.JustifyContent.center,
                          display: f.DISPLAY.FLEX,
                          className: "awaiting-signatures__content"
                        },
                        n.default.createElement(p.default, { marginTop: 3, marginBottom: 4 }, n.default.createElement(d.default, null)),
                        n.default.createElement(_.Text, { color: f.TextColor.textDefault, variant: f.TextVariant.headingMd, as: "h3" }, P),
                        O &&
                          n.default.createElement(
                            n.default.Fragment,
                            null,
                            n.default.createElement(
                              _.Text,
                              { variant: f.TextVariant.bodyMdBold, marginTop: 2 },
                              e("swapToConfirmWithHwWallet")
                            ),
                            n.default.createElement(
                              "ul",
                              { className: "awaiting-signatures__steps" },
                              n.default.createElement(
                                "li",
                                null,
                                n.default.createElement(E.default, { stepNumber: 1 }),
                                e("swapAllowSwappingOf", [
                                  n.default.createElement(
                                    _.Text,
                                    { as: "span", variant: f.TextVariant.bodyMdBold, key: "allowToken" },
                                    null == v ? void 0 : v.symbol
                                  )
                                ])
                              ),
                              n.default.createElement(
                                "li",
                                null,
                                n.default.createElement(E.default, { stepNumber: 2 }),
                                e("swapFromTo", [
                                  n.default.createElement(
                                    _.Text,
                                    { as: "span", variant: f.TextVariant.bodyMdBold, key: "tokenFrom" },
                                    null == y ? void 0 : y.symbol
                                  ),
                                  n.default.createElement(
                                    _.Text,
                                    { as: "span", variation: f.TextVariant.bodyMdBold, key: "tokenTo" },
                                    null == v ? void 0 : v.symbol
                                  )
                                ])
                              )
                            ),
                            n.default.createElement(_.Text, { variant: f.TextVariant.bodyMd }, e("swapGasFeesSplit"))
                          )
                      ),
                      n.default.createElement(m.default, {
                        onSubmit: async () => {
                          await a((0, i.prepareToLeaveSwaps)()), t.push(c.DEFAULT_ROUTE), t.push(c.BUILD_QUOTE_ROUTE);
                        },
                        submitText: e("cancel"),
                        hideCancel: !0
                      })
                    );
                  });
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = v(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = w(e("lodash/isEqual")),
                  l = e("../../../contexts/i18n"),
                  i = e("../../../ducks/swaps/swaps"),
                  u = e("../../../selectors/selectors"),
                  c = e("../../../helpers/constants/routes"),
                  d = w(e("../../../components/ui/pulse-loader")),
                  p = w(e("../../../components/ui/box")),
                  f = e("../../../helpers/constants/design-system"),
                  m = w(e("../swaps-footer")),
                  g = e("../../../contexts/metametrics"),
                  h = e("../../../../shared/constants/metametrics"),
                  _ = e("../../../components/component-library"),
                  E = w(e("./swap-step-icon"));
                function w(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (v = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-signatures/awaiting-signatures.js" }
    ],
    [
      5114,
      { "./awaiting-signatures": 5113 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./awaiting-signatures")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-signatures/index.js" }
    ],
    [
      5115,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = o);
                var n = s(e("react")),
                  r = s(e("prop-types"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function o({ stepNumber: e = 1 }) {
                  switch (e) {
                    case 1:
                      return n.default.createElement(
                        "svg",
                        { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        n.default.createElement("circle", {
                          cx: "7",
                          cy: "7",
                          r: "6.25",
                          stroke: "var(--color-primary-default)",
                          strokeWidth: "1.5"
                        }),
                        n.default.createElement("path", {
                          d: "M6.50983 5.192H5.27783L6.14183 4H7.71783V9.68H6.50983V5.192Z",
                          fill: "var(--color-primary-default)"
                        })
                      );
                    case 2:
                      return n.default.createElement(
                        "svg",
                        { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        n.default.createElement("circle", {
                          cx: "7",
                          cy: "7",
                          r: "6.25",
                          stroke: "var(--color-primary-default)",
                          strokeWidth: "1.5"
                        }),
                        n.default.createElement("path", {
                          d: "M8.92 9.776H5V9.368C5 9.048 5.056 8.77067 5.168 8.536C5.28 8.296 5.42133 8.08533 5.592 7.904C5.768 7.71733 5.96267 7.54933 6.176 7.4C6.39467 7.25067 6.608 7.10133 6.816 6.952C6.928 6.872 7.03467 6.78933 7.136 6.704C7.24267 6.61867 7.33333 6.53067 7.408 6.44C7.488 6.34933 7.552 6.256 7.6 6.16C7.648 6.064 7.672 5.96533 7.672 5.864C7.672 5.67733 7.616 5.52 7.504 5.392C7.39733 5.25867 7.22933 5.192 7 5.192C6.88267 5.192 6.776 5.21333 6.68 5.256C6.584 5.29333 6.50133 5.344 6.432 5.408C6.368 5.472 6.31733 5.54667 6.28 5.632C6.248 5.71733 6.232 5.808 6.232 5.904H5.024C5.024 5.62667 5.07467 5.37067 5.176 5.136C5.27733 4.90133 5.41867 4.70133 5.6 4.536C5.78133 4.36533 5.99467 4.23467 6.24 4.144C6.48533 4.048 6.752 4 7.04 4C7.28 4 7.50933 4.03733 7.728 4.112C7.952 4.18667 8.14933 4.29867 8.32 4.448C8.49067 4.59733 8.62667 4.784 8.728 5.008C8.82933 5.22667 8.88 5.48267 8.88 5.776C8.88 6.032 8.85067 6.25867 8.792 6.456C8.73333 6.648 8.65067 6.824 8.544 6.984C8.44267 7.13867 8.32 7.28 8.176 7.408C8.032 7.536 7.87733 7.66133 7.712 7.784C7.64267 7.832 7.55733 7.888 7.456 7.952C7.36 8.016 7.26133 8.08267 7.16 8.152C7.064 8.22133 6.97333 8.29333 6.888 8.368C6.80267 8.44267 6.74133 8.51467 6.704 8.584H8.92V9.776Z",
                          fill: "var(--color-primary-default)"
                        })
                      );
                    default:
                      return undefined;
                  }
                }
                o.propTypes = { stepNumber: r.default.number };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-signatures/swap-step-icon.js" }
    ],
    [
      5116,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/swaps": 3970,
        "../../../../shared/lib/ui-utils": 3983,
        "../../../../shared/modules/swaps.utils": 4003,
        "../../../components/ui/mascot": 4679,
        "../../../components/ui/pulse-loader": 4701,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/routes": 4776,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../create-new-swap": 5126,
        "../swaps-footer": 5177,
        "../swaps.util": 5179,
        "../view-on-block-explorer": 5181,
        "./quotes-timeout-icon": 5118,
        "./swap-failure-icon": 5119,
        "./swap-success-icon": 5120,
        "@metamask/etherscan-link": 1255,
        events: 2745,
        "lodash/isEqual": 3300,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = A);
                var n = P(e("events")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = I(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = e("react-redux"),
                  o = P(e("prop-types")),
                  l = e("react-router-dom"),
                  i = P(e("lodash/isEqual")),
                  u = e("@metamask/etherscan-link"),
                  c = e("../../../contexts/i18n"),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../../shared/constants/metametrics"),
                  f = e("../../../selectors"),
                  m = e("../../../ducks/swaps/swaps"),
                  g = P(e("../../../components/ui/mascot")),
                  h = e("../../../../shared/constants/swaps"),
                  _ = e("../../../../shared/modules/swaps.utils"),
                  E = P(e("../../../components/ui/pulse-loader")),
                  w = e("../../../helpers/constants/routes"),
                  v = e("../../../store/actions"),
                  y = e("../swaps.util"),
                  T = P(e("../swaps-footer")),
                  b = P(e("../create-new-swap")),
                  S = P(e("../view-on-block-explorer")),
                  k = e("../../../../shared/lib/ui-utils"),
                  C = P(e("./swap-failure-icon")),
                  x = P(e("./swap-success-icon")),
                  O = P(e("./quotes-timeout-icon"));
                function I(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (I = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function P(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function A({ swapComplete: e, errorKey: t, txHash: a, tokensReceived: o, submittingSwap: I, txId: P }) {
                  const A = (0, r.useContext)(c.I18nContext),
                    M = (0, r.useContext)(d.MetaMetricsContext),
                    N = (0, l.useHistory)(),
                    R = (0, s.useDispatch)(),
                    F = (0, r.useRef)(new n.default()),
                    { swapMetaData: L } = (0, s.useSelector)((e) => (0, f.getFullTxData)(e, P)) || {},
                    D = (0, s.useSelector)(m.getFetchParams, i.default),
                    j = (0, s.useSelector)(m.getFromTokenInputValue),
                    q = (0, s.useSelector)(m.getMaxSlippage),
                    W = (0, s.useSelector)(m.getUsedQuote, i.default),
                    U = (0, s.useSelector)(m.getApproveTxParams, s.shallowEqual),
                    B = (0, s.useSelector)(m.getUsedSwapsGasPrice),
                    G = (0, s.useSelector)(f.getCurrentCurrency),
                    H = (0, s.useSelector)(f.getUSDConversionRate),
                    V = (0, s.useSelector)(f.getCurrentChainId),
                    $ = (0, s.useSelector)(f.getRpcPrefsForCurrentProvider, s.shallowEqual),
                    [Q, X] = (0, r.useState)(!1);
                  let Z;
                  if (W && B) {
                    var K;
                    Z = (0, y.getRenderableNetworkFeesForQuote)({
                      tradeGas: W.gasEstimateWithRefund || W.averageGas,
                      approveGas: (null == U ? void 0 : U.gas) || "0x0",
                      gasPrice: B,
                      currentCurrency: G,
                      conversionRate: H,
                      tradeValue: null == W || null === (K = W.trade) || void 0 === K ? void 0 : K.value,
                      sourceSymbol: null == L ? void 0 : L.token_from,
                      sourceAmount: W.sourceAmount,
                      chainId: V
                    }).rawNetworkFees;
                  }
                  const Y = (0, s.useSelector)(f.isHardwareWallet),
                    z = (0, s.useSelector)(f.getHardwareWalletType),
                    J = (0, s.useSelector)(m.getSmartTransactionsOptInStatus),
                    ee = (0, s.useSelector)(m.getSmartTransactionsEnabled),
                    te = (0, s.useSelector)(m.getCurrentSmartTransactionsEnabled),
                    ae = {
                      token_from: null == L ? void 0 : L.token_from,
                      token_from_amount: null == L ? void 0 : L.token_from_amount,
                      token_to: null == L ? void 0 : L.token_to,
                      request_type: null != D && D.balanceError ? "Quote" : "Order",
                      slippage: null == L ? void 0 : L.slippage,
                      custom_slippage: 2 === (null == L ? void 0 : L.slippage),
                      gas_fees: Z,
                      is_hardware_wallet: Y,
                      hardware_wallet_type: z,
                      stx_enabled: ee,
                      current_stx_enabled: te,
                      stx_user_opt_in: J
                    },
                    ne = $.blockExplorerUrl ?? h.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[V] ?? null,
                    re = (0, u.getBlockExplorerLink)({ hash: a, chainId: V }, { blockExplorerUrl: ne });
                  let se, oe, le, ie, ue;
                  return (
                    t === h.OFFLINE_FOR_MAINTENANCE
                      ? ((se = A("offlineForMaintenance")),
                        (le = A("metamaskSwapsOfflineDescription")),
                        (ie = A("close")),
                        (oe = r.default.createElement(C.default, null)))
                      : t === h.SWAP_FAILED_ERROR
                      ? ((se = A("swapFailedErrorTitle")),
                        (le = A("swapFailedErrorDescriptionWithSupportLink", [
                          r.default.createElement(
                            "a",
                            {
                              className: "awaiting-swap__support-link",
                              key: "awaiting-swap-support-link",
                              href: k.SUPPORT_LINK,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              onClick: () => {
                                M(
                                  {
                                    category: p.MetaMetricsEventCategory.Swaps,
                                    event: p.MetaMetricsEventName.SupportLinkClicked,
                                    properties: { url: k.SUPPORT_LINK }
                                  },
                                  { contextPropsIntoEventProperties: [p.MetaMetricsContextProp.PageTitle] }
                                );
                              }
                            },
                            new URL(k.SUPPORT_LINK).hostname
                          )
                        ])),
                        (ie = A("tryAgain")),
                        (oe = r.default.createElement(C.default, null)),
                        (ue = re && r.default.createElement(S.default, { blockExplorerUrl: re, sensitiveTrackingProperties: ae })))
                      : t === h.QUOTES_EXPIRED_ERROR
                      ? ((se = A("swapQuotesExpiredErrorTitle")),
                        (le = A("swapQuotesExpiredErrorDescription")),
                        (ie = A("tryAgain")),
                        (oe = r.default.createElement(O.default, null)),
                        Q || (X(!0), M({ event: "Quotes Timed Out", category: p.MetaMetricsEventCategory.Swaps, sensitiveProperties: ae })))
                      : t === h.ERROR_FETCHING_QUOTES
                      ? ((se = A("swapFetchingQuotesErrorTitle")),
                        (le = A("swapFetchingQuotesErrorDescription")),
                        (ie = A("back")),
                        (oe = r.default.createElement(C.default, null)))
                      : t === h.QUOTES_NOT_AVAILABLE_ERROR
                      ? ((se = A("swapQuotesNotAvailableErrorTitle")),
                        (le = A("swapQuotesNotAvailableErrorDescription")),
                        (ie = A("tryAgain")),
                        (oe = r.default.createElement(C.default, null)))
                      : t === h.CONTRACT_DATA_DISABLED_ERROR
                      ? ((se = A("swapContractDataDisabledErrorTitle")),
                        (le = A("swapContractDataDisabledErrorDescription")),
                        (ie = A("tryAgain")),
                        (oe = r.default.createElement(C.default, null)))
                      : t || e
                      ? !t &&
                        e &&
                        ((se = A("swapTransactionComplete")),
                        (oe = r.default.createElement(x.default, null)),
                        (ie = A("close")),
                        (le = A("swapTokenAvailable", [
                          r.default.createElement(
                            "span",
                            { key: "swapTokenAvailable-2", className: "awaiting-swap__amount-and-symbol" },
                            `${o || ""} ${null == L ? void 0 : L.token_to}`
                          )
                        ])),
                        (ue = re && r.default.createElement(S.default, { blockExplorerUrl: re, sensitiveTrackingProperties: ae })))
                      : ((se = A("swapProcessing")),
                        (oe = r.default.createElement(E.default, null)),
                        (ie = A("swapsViewInActivity")),
                        (le = A("swapOnceTransactionHasProcess", [
                          r.default.createElement(
                            "span",
                            {
                              key: "swapOnceTransactionHasProcess-1",
                              className: "awaiting-swap__amount-and-symbol",
                              "data-testid": "awaiting-swap-amount-and-symbol"
                            },
                            null == L ? void 0 : L.token_to
                          )
                        ])),
                        (ue = re && r.default.createElement(S.default, { blockExplorerUrl: re, sensitiveTrackingProperties: ae }))),
                    (0, r.useEffect)(() => {
                      t && R((0, v.stopPollingForQuotes)());
                    }, [R, t]),
                    r.default.createElement(
                      "div",
                      { className: "awaiting-swap" },
                      r.default.createElement(
                        "div",
                        { className: "awaiting-swap__content" },
                        !(e || t) && r.default.createElement(g.default, { animationEventEmitter: F.current, width: "90", height: "90" }),
                        r.default.createElement("div", { className: "awaiting-swap__status-image" }, oe),
                        r.default.createElement("div", { className: "awaiting-swap__header", "data-testid": "awaiting-swap-header" }, se),
                        r.default.createElement(
                          "div",
                          { className: "awaiting-swap__main-description", "data-testid": "awaiting-swap-main-description" },
                          le
                        ),
                        ue
                      ),
                      !t && e ? r.default.createElement(b.default, { sensitiveTrackingProperties: ae }) : null,
                      r.default.createElement(T.default, {
                        onSubmit: async () => {
                          t === h.OFFLINE_FOR_MAINTENANCE
                            ? (await R((0, m.prepareToLeaveSwaps)()), N.push(w.DEFAULT_ROUTE))
                            : t === h.QUOTES_EXPIRED_ERROR
                            ? (R((0, m.prepareForRetryGetQuotes)()), await R((0, m.fetchQuotesAndSetQuoteState)(N, j, q, M)))
                            : t
                            ? await R((0, m.navigateBackToBuildQuote)(N))
                            : ((0, _.isSwapsDefaultTokenSymbol)(null == L ? void 0 : L.token_to, V) ||
                                e ||
                                (await R((0, v.setDefaultHomeActiveTabName)("activity"))),
                              N.push(w.DEFAULT_ROUTE));
                        },
                        onCancel: async () => await R((0, m.navigateBackToBuildQuote)(N)),
                        submitText: ie,
                        disabled: I,
                        hideCancel: t !== h.QUOTES_EXPIRED_ERROR
                      })
                    )
                  );
                }
                A.propTypes = {
                  swapComplete: o.default.bool,
                  txHash: o.default.string,
                  tokensReceived: o.default.string,
                  errorKey: o.default.oneOf([
                    h.QUOTES_EXPIRED_ERROR,
                    h.SWAP_FAILED_ERROR,
                    h.ERROR_FETCHING_QUOTES,
                    h.QUOTES_NOT_AVAILABLE_ERROR,
                    h.OFFLINE_FOR_MAINTENANCE,
                    h.CONTRACT_DATA_DISABLED_ERROR
                  ]),
                  submittingSwap: o.default.bool,
                  txId: o.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-swap/awaiting-swap.js" }
    ],
    [
      5117,
      { "./awaiting-swap": 5116 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./awaiting-swap")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-swap/index.js" }
    ],
    [
      5118,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "44", height: "44", viewBox: "0 0 44 44", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("path", {
                        d: "M22 0C9.96768 0 0.178406 9.78928 0.178406 21.8216C0.178406 33.8539 9.96768 43.6432 22 43.6432C34.0323 43.6432 43.8216 33.8539 43.8216 21.8216C43.8216 9.78929 34.0323 0 22 0ZM22 3.27324C32.2633 3.27324 40.5484 11.5583 40.5484 21.8216C40.5484 32.0849 32.2633 40.3699 22 40.3699C11.7367 40.3699 3.45164 32.0849 3.45164 21.8216C3.45164 11.5583 11.7367 3.27324 22 3.27324ZM22 6.00094C21.0961 6.00094 20.3634 6.73371 20.3634 7.63756V21.8216C20.3634 22.4269 20.6932 22.9534 21.1817 23.2366L32.5187 29.783C33.3014 30.235 34.3001 29.9692 34.752 29.1864C35.2039 28.4036 34.938 27.405 34.1553 26.953L23.6366 20.8839V7.63756C23.6366 6.73371 22.9039 6.00094 22 6.00094Z",
                        fill: "var(--color-primary-default)"
                      })
                    );
                  });
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-swap/quotes-timeout-icon.js" }
    ],
    [
      5119,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "45", height: "39", viewBox: "0 0 45 39", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("path", {
                        d: "M22.203 0.424438L0.285706 38.2816H44.1203L22.203 0.424438ZM22.203 8.39436L37.2064 34.2966H7.19961L22.203 8.39436ZM20.2105 16.3643V24.3342H24.1955V16.3643H20.2105ZM20.2105 28.3192V32.3041H24.1955V28.3192",
                        fill: "var(--color-error-default)"
                      })
                    );
                  });
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-swap/swap-failure-icon.js" }
    ],
    [
      512,
      { "./_version": 502, "@ethersproject/hash": 443, "@ethersproject/logger": 452, "@ethersproject/properties": 458 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.Wordlist = a.logger = void 0);
                var n = e("@ethersproject/hash"),
                  r = e("@ethersproject/properties"),
                  s = e("@ethersproject/logger"),
                  o = e("./_version");
                a.logger = new s.Logger(o.version);
                var l = (function () {
                  function e(t) {
                    var n = this.constructor;
                    a.logger.checkAbstract(n, e), (0, r.defineReadOnly)(this, "locale", t);
                  }
                  return (
                    (e.prototype.split = function (e) {
                      return e.toLowerCase().split(/ +/g);
                    }),
                    (e.prototype.join = function (e) {
                      return e.join(" ");
                    }),
                    (e.check = function (e) {
                      for (var t = [], a = 0; a < 2048; a++) {
                        var r = e.getWord(a);
                        if (a !== e.getWordIndex(r)) return "0x";
                        t.push(r);
                      }
                      return (0, n.id)(t.join("\n") + "\n");
                    }),
                    (e.register = function (e, t) {
                      t || (t = e.locale);
                    }),
                    e
                  );
                })();
                a.Wordlist = l;
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/wordlist.js" }
    ],
    [
      5120,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "38", height: "38", viewBox: "0 0 38 38", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("path", {
                        d: "M34.1429 19C34.1429 23.0161 32.5474 26.8678 29.7076 29.7076C26.8678 32.5474 23.0161 34.1428 19 34.1428C14.9839 34.1428 11.1322 32.5474 8.29238 29.7076C5.45254 26.8678 3.85714 23.0161 3.85714 19C3.85714 14.9838 5.45254 11.1322 8.29238 8.29237C11.1322 5.45253 14.9839 3.85713 19 3.85713C20.4386 3.85713 21.8393 4.06534 23.1643 4.44391L26.1361 1.47213C23.9404 0.563554 21.5364 0.0714111 19 0.0714111C16.5143 0.0714111 14.0529 0.561013 11.7563 1.51226C9.45983 2.46351 7.37316 3.85778 5.61548 5.61546C2.06568 9.16526 0.0714264 13.9798 0.0714264 19C0.0714264 24.0201 2.06568 28.8347 5.61548 32.3845C7.37316 34.1422 9.45983 35.5364 11.7563 36.4877C14.0529 37.4389 16.5143 37.9286 19 37.9286C24.0202 37.9286 28.8347 35.9343 32.3845 32.3845C35.9343 28.8347 37.9286 24.0201 37.9286 19H34.1429ZM11.2582 15.3657L8.58928 18.0536L17.1071 26.5714L36.0357 7.64284L33.3668 4.95498L17.1071 21.2146L11.2582 15.3657Z",
                        fill: "var(--color-success-default)"
                      })
                    );
                  });
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-swap/swap-success-icon.js" }
    ],
    [
      5121,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/swaps": 3970,
        "../../../../shared/lib/swaps-utils": 3979,
        "../../../../shared/lib/token-util.ts": 3981,
        "../../../../shared/lib/transactions-controller-utils": 3982,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../../shared/modules/string-utils": 4002,
        "../../../../shared/modules/swaps.utils": 4003,
        "../../../components/ui/actionable-message/actionable-message": 4603,
        "../../../components/ui/info-tooltip": 4665,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useEqualityCheck": 4834,
        "../../../hooks/useEthFiatAmount": 4835,
        "../../../hooks/usePrevious": 4845,
        "../../../hooks/useTokenFiatAmount": 4858,
        "../../../hooks/useTokenTracker": 4859,
        "../../../hooks/useTokensToSearch": 4860,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../dropdown-input-pair": 5128,
        "../dropdown-search-list": 5130,
        "../prepare-swap-page/smart-transactions-popover": 5150,
        "../slippage-buttons": 5166,
        "../swaps-footer": 5177,
        "../swaps.util": 5179,
        "@metamask/etherscan-link": 1255,
        "bignumber.js": 2283,
        classnames: 2414,
        lodash: 3312,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = V);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = B(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = U(e("bignumber.js")),
                  s = U(e("prop-types")),
                  o = e("react-redux"),
                  l = U(e("classnames")),
                  i = e("lodash"),
                  u = e("react-router-dom"),
                  c = e("@metamask/etherscan-link"),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../hooks/useTokensToSearch"),
                  f = e("../../../hooks/useEqualityCheck"),
                  m = e("../../../contexts/i18n"),
                  g = U(e("../dropdown-input-pair")),
                  h = U(e("../dropdown-search-list")),
                  _ = U(e("../slippage-buttons")),
                  E = e("../../../ducks/metamask/metamask"),
                  w = U(e("../../../components/ui/info-tooltip")),
                  v = U(e("../../../components/ui/actionable-message/actionable-message")),
                  y = e("../../../helpers/constants/routes"),
                  T = e("../../../ducks/swaps/swaps"),
                  b = e("../../../selectors"),
                  S = e("../../../helpers/utils/util"),
                  k = e("../../../hooks/usePrevious"),
                  C = e("../../../hooks/useTokenTracker"),
                  x = e("../../../hooks/useTokenFiatAmount"),
                  O = e("../../../hooks/useEthFiatAmount"),
                  I = e("../../../../shared/modules/swaps.utils"),
                  P = e("../../../../shared/constants/metametrics"),
                  A = e("../../../../shared/constants/swaps"),
                  M = e("../../../store/actions"),
                  N = e("../swaps.util"),
                  R = U(e("../swaps-footer")),
                  F = e("../../../../shared/modules/string-utils"),
                  L = e("../../../../shared/lib/transactions-controller-utils"),
                  D = e("../../../../shared/lib/token-util.ts"),
                  j = e("../../../../shared/lib/swaps-utils"),
                  q = e("../../../../shared/modules/conversion.utils"),
                  W = U(e("../prepare-swap-page/smart-transactions-popover"));
                function U(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function B(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (B = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const G = [
                  { name: "name", weight: 0.499 },
                  { name: "symbol", weight: 0.499 },
                  { name: "address", weight: 0.002 }
                ];
                let H;
                function V({ ethBalance: e, selectedAccountAddress: t, shuffledTokensList: a }) {
                  var s;
                  const U = (0, n.useContext)(m.I18nContext),
                    B = (0, o.useDispatch)(),
                    V = (0, u.useHistory)(),
                    $ = (0, n.useContext)(d.MetaMetricsContext),
                    [Q, X] = (0, n.useState)(undefined),
                    [Z, K] = (0, n.useState)(!1),
                    Y = (0, o.useSelector)(T.getIsFeatureFlagLoaded),
                    z = (0, o.useSelector)(T.getBalanceError),
                    J = (0, o.useSelector)(T.getFetchParams, i.isEqual),
                    { sourceTokenInfo: ee = {}, destinationTokenInfo: te = {} } = (null == J ? void 0 : J.metaData) || {},
                    ae = (0, o.useSelector)(E.getTokens, i.isEqual),
                    ne = (0, o.useSelector)(T.getTopAssets, i.isEqual),
                    re = (0, o.useSelector)(T.getFromToken, i.isEqual),
                    se = (0, o.useSelector)(T.getFromTokenInputValue),
                    oe = (0, o.useSelector)(T.getFromTokenError),
                    le = (0, o.useSelector)(T.getMaxSlippage),
                    ie = (0, o.useSelector)(T.getToToken, i.isEqual) || te,
                    ue = (0, o.useSelector)(b.getSwapsDefaultToken, i.isEqual),
                    ce = (0, o.useSelector)(b.getCurrentChainId),
                    de = (0, o.useSelector)(b.getRpcPrefsForCurrentProvider, o.shallowEqual),
                    pe = (0, o.useSelector)(b.getTokenList, i.isEqual),
                    fe = (0, o.useSelector)(T.getQuotes, i.isEqual),
                    me = Object.keys(fe).length > 0,
                    ge = (0, o.useSelector)(T.getLatestAddedTokenTo, i.isEqual),
                    he = (0, o.useSelector)(b.getTokenExchangeRates, i.isEqual),
                    _e = (0, o.useSelector)(E.getConversionRate),
                    Ee = (0, o.useSelector)(b.getUseCurrencyRateCheck),
                    we = (0, o.useSelector)(b.isHardwareWallet),
                    ve = (0, o.useSelector)(b.getHardwareWalletType),
                    ye = (0, o.useSelector)(T.getSmartTransactionsOptInStatus),
                    Te = (0, o.useSelector)(T.getSmartTransactionsEnabled),
                    be = (0, o.useSelector)(T.getCurrentSmartTransactionsEnabled),
                    Se = (0, o.useSelector)(T.getSmartTransactionFees),
                    ke = ye !== undefined,
                    Ce = (0, o.useSelector)(T.getCurrentSmartTransactionsError),
                    xe = (0, o.useSelector)(b.getCurrentCurrency),
                    Oe = Te && !ke,
                    Ie = (0, I.isSwapsDefaultTokenSymbol)(null == ee ? void 0 : ee.symbol, ce) ? ue : ee,
                    { loading: Pe, tokensWithBalances: Ae } = (0, C.useTokenTracker)({ tokens: ae }),
                    Me = !(0, I.isSwapsDefaultTokenSymbol)(null == re ? void 0 : re.symbol, ce) && null != re && re.balance ? [re] : [],
                    Ne = (0, i.uniqBy)([...Ae, ...ae, ...Me], "address"),
                    Re = (0, f.useEqualityCheck)(Ne),
                    Fe = (0, p.getRenderableTokenData)(re || Ie, he, _e, xe, ce, pe),
                    Le = (0, p.useTokensToSearch)({
                      usersTokens: Re,
                      topTokens: ne,
                      shuffledTokensList: a,
                      tokenBucketPriority: A.TokenBucketPriority.owned
                    }),
                    De = (0, p.useTokensToSearch)({
                      usersTokens: Re,
                      topTokens: ne,
                      shuffledTokensList: a,
                      tokenBucketPriority: A.TokenBucketPriority.top
                    }),
                    je = Le.find(({ address: e }) => (0, F.isEqualCaseInsensitive)(e, null == ie ? void 0 : ie.address)) || ie,
                    qe = (null == je ? void 0 : je.address) && !(0, I.isSwapsDefaultTokenAddress)(null == je ? void 0 : je.address, ce),
                    We = Number((null == je ? void 0 : je.occurances) || (null == je ? void 0 : je.occurrences) || 0),
                    { address: Ue, symbol: Be, string: Ge, decimals: He, balance: Ve } = Fe || {},
                    { address: $e } = je || {},
                    Qe = Ve && (0, L.calcTokenAmount)(Ve, He).toString(10),
                    Xe = (0, k.usePrevious)(Qe),
                    Ze = (0, x.useTokenFiatAmount)(Ue, se || 0, Be, { showFiat: Ee }, !0),
                    Ke = (0, O.useEthFiatAmount)(se || 0, { showFiat: Ee }, !0),
                    Ye = (0, I.isSwapsDefaultTokenSymbol)(Be, ce) ? Ke : Ze,
                    ze = (0, n.useCallback)(
                      (e, t) => {
                        B((0, T.setFromTokenInputValue)(e));
                        const a = new r.default(e || 0).gt(t || 0);
                        z !== a && B((0, T.setBalanceError)(a)),
                          B((0, T.setFromTokenError)(re && (0, N.countDecimals)(e) > re.decimals ? "tooManyDecimals" : null));
                      },
                      [B, re, z]
                    ),
                    Je = (e) => {
                      null != e && e.address && !Ye && null !== Q
                        ? (0, N.fetchTokenPrice)(e.address).then((e) => {
                            null !== e && e !== undefined && X(e);
                          })
                        : X(null),
                        null != e &&
                          e.address &&
                          !Re.find((t) => (0, F.isEqualCaseInsensitive)(t.address, e.address)) &&
                          (0, D.fetchTokenBalance)(e.address, t, global.ethereumProvider).then((t) => {
                            if (null != t && t.balance) {
                              const a = t.balance.toString(10),
                                n = (0, L.calcTokenAmount)(a, e.decimals);
                              B((0, T.setSwapsFromToken)({ ...e, string: n.toString(10), balance: a }));
                            }
                          }),
                        B((0, T.setSwapsFromToken)(e)),
                        ze(null != e && e.address ? se : "", e.string, e.decimals);
                    },
                    et = (0, c.getTokenTrackerLink)(je.address, ce, null, null, {
                      blockExplorerUrl: A.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[ce] ?? null
                    }),
                    tt = de.blockExplorerUrl ? (0, S.getURLHostName)(et) : U("etherscan"),
                    { address: at } = ie || {},
                    nt = (0, n.useCallback)(
                      (e) => {
                        ge && e.address !== at && B((0, M.ignoreTokens)({ tokensToIgnore: at, dontShowLoadingIndicator: !0 })),
                          B((0, T.setSwapToToken)(e)),
                          K(!1);
                      },
                      [B, ge, at]
                    ),
                    rt = (0, n.useCallback)((e) => (0, F.isEqualCaseInsensitive)(e.address, Ue), [Ue]),
                    st = Ae.find((e) => (0, F.isEqualCaseInsensitive)(e.address, null == re ? void 0 : re.address)),
                    ot = (0, k.usePrevious)(st);
                  (0, n.useEffect)(() => {
                    const e = !(0, I.isSwapsDefaultTokenAddress)(null == st ? void 0 : st.address, ce),
                      t = (0, F.isEqualCaseInsensitive)(null == st ? void 0 : st.address, null == ot ? void 0 : ot.address),
                      a = (null == st ? void 0 : st.balance) !== (null == ot ? void 0 : ot.balance);
                    e &&
                      t &&
                      a &&
                      B(
                        (0, T.setSwapsFromToken)({
                          ...re,
                          balance: null == st ? void 0 : st.balance,
                          string: null == st ? void 0 : st.string
                        })
                      );
                  }, [B, st, ot, re, ce]),
                    (0, n.useEffect)(() => {
                      (0, I.isSwapsDefaultTokenAddress)(null == re ? void 0 : re.address, ce) &&
                        (null == re ? void 0 : re.balance) !== (0, q.hexToDecimal)(e) &&
                        B(
                          (0, T.setSwapsFromToken)({
                            ...re,
                            balance: (0, q.hexToDecimal)(e),
                            string: (0, q.getValueFromWeiHex)({ value: e, numberOfDecimals: 4, toDenomination: "ETH" })
                          })
                        );
                    }, [B, re, e, ce]),
                    (0, n.useEffect)(() => {
                      Xe !== Qe && ze(se, Qe);
                    }, [ze, Xe, se, Qe]);
                  const lt = (0, n.useCallback)(() => {
                    $({
                      event: "Build Quote Page Loaded",
                      category: P.MetaMetricsEventCategory.Swaps,
                      sensitiveProperties: {
                        is_hardware_wallet: we,
                        hardware_wallet_type: ve,
                        stx_enabled: Te,
                        current_stx_enabled: be,
                        stx_user_opt_in: ye
                      }
                    });
                  }, [$, we, ve, Te, be, ye]);
                  (0, n.useEffect)(() => {
                    B((0, M.resetSwapsPostFetchState)()), B((0, T.setReviewSwapClickedTimestamp)()), lt();
                  }, [B, lt]),
                    (0, n.useEffect)(() => {
                      Te && null != Se && Se.tradeTxFees && (0, M.clearSmartTransactionFees)();
                    }, [Te, Se]);
                  const it = () =>
                    n.default.createElement(
                      "a",
                      {
                        className: "build-quote__token-etherscan-link build-quote__underline",
                        key: "build-quote-etherscan-link",
                        onClick: () => {
                          $({
                            event: P.MetaMetricsEventName.ExternalLinkClicked,
                            category: P.MetaMetricsEventCategory.Swaps,
                            properties: {
                              link_type: P.MetaMetricsEventLinkType.TokenTracker,
                              location: "Swaps Confirmation",
                              url_domain: (0, S.getURLHostName)(et)
                            }
                          }),
                            global.platform.openTab({ url: et });
                        },
                        target: "_blank",
                        rel: "noopener noreferrer"
                      },
                      tt
                    );
                  let ut = "";
                  et &&
                    (1 === We
                      ? (ut = U("verifyThisTokenOn", [n.default.createElement(it, { key: "block-explorer-link" })]))
                      : 0 === We &&
                        (ut = U("verifyThisUnconfirmedTokenOn", [n.default.createElement(it, { key: "block-explorer-link" })])));
                  const ct = U("swapYourTokenBalance", [
                      Ge || "0",
                      Be || (null === (s = A.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[ce]) || void 0 === s ? void 0 : s.symbol) || ""
                    ]),
                    dt = (0, j.shouldEnableDirectWrapping)(ce, Ue, je.address),
                    pt =
                      oe ||
                      !Y ||
                      !Number(se) ||
                      !(null != je && je.address) ||
                      !Ue ||
                      Number(le) < 0 ||
                      Number(le) > A.MAX_ALLOWED_SLIPPAGE ||
                      (qe && We < 2 && !Z);
                  return (
                    (0, n.useEffect)(() => {
                      B((0, M.clearSwapsQuotes)()), B((0, M.stopPollingForQuotes)());
                      return (
                        (H = setTimeout(() => {
                          (H = null),
                            pt ||
                              (async () => {
                                await B((0, T.fetchQuotesAndSetQuoteState)(V, se, le, $, !0));
                              })();
                        }, 1e3)),
                        () => clearTimeout(H)
                      );
                    }, [B, V, le, $, pt, se, Ue, $e, ye]),
                    n.default.createElement(
                      "div",
                      { className: "build-quote" },
                      n.default.createElement(
                        "div",
                        { className: "build-quote__content" },
                        n.default.createElement(W.default, {
                          onStartSwapping: () => (0, M.setSmartTransactionsOptInStatus)(!0, ye),
                          onManageStxInSettings: (e) => {
                            null == e || e.preventDefault(), (0, M.setSmartTransactionsOptInStatus)(!1, ye);
                          },
                          isOpen: Oe
                        }),
                        n.default.createElement(
                          "div",
                          { className: "build-quote__dropdown-input-pair-header" },
                          n.default.createElement("div", { className: "build-quote__input-label" }, U("swapSwapFrom")),
                          !(0, I.isSwapsDefaultTokenSymbol)(Be, ce) &&
                            n.default.createElement(
                              "div",
                              {
                                className: "build-quote__max-button",
                                "data-testid": "build-quote__max-button",
                                onClick: () => ze(Qe || "0", Qe)
                              },
                              U("max")
                            )
                        ),
                        n.default.createElement(g.default, {
                          onSelect: Je,
                          itemsToSearch: Le,
                          onInputChange: (e) => {
                            ze(e, Qe);
                          },
                          inputValue: se,
                          leftValue: se && Ye,
                          selectedItem: Fe,
                          maxListItems: 30,
                          loading: Pe && (!(null != Le && Le.length) || !ne || !Object.keys(ne).length),
                          selectPlaceHolderText: U("swapSelect"),
                          hideItemIf: (e) => (0, F.isEqualCaseInsensitive)(e.address, null == je ? void 0 : je.address),
                          listContainerClassName: "build-quote__open-dropdown",
                          autoFocus: !0
                        }),
                        n.default.createElement(
                          "div",
                          { className: (0, l.default)("build-quote__balance-message", { "build-quote__balance-message--error": z || oe }) },
                          !oe && !z && Be && ct,
                          !oe &&
                            z &&
                            Be &&
                            n.default.createElement(
                              "div",
                              { className: "build-quite__insufficient-funds" },
                              n.default.createElement(
                                "div",
                                { className: "build-quite__insufficient-funds-first" },
                                U("swapsNotEnoughForTx", [Be])
                              ),
                              n.default.createElement("div", { className: "build-quite__insufficient-funds-second" }, ct)
                            ),
                          oe &&
                            n.default.createElement(
                              n.default.Fragment,
                              null,
                              n.default.createElement(
                                "div",
                                { className: "build-quote__form-error" },
                                U("swapTooManyDecimalsError", [Be, He])
                              ),
                              n.default.createElement("div", null, ct)
                            )
                        ),
                        n.default.createElement(
                          "div",
                          { className: "build-quote__swap-arrows-row" },
                          n.default.createElement(
                            "button",
                            {
                              className: "build-quote__swap-arrows",
                              "data-testid": "build-quote__swap-arrows",
                              onClick: () => {
                                nt(Fe), Je(je);
                              }
                            },
                            n.default.createElement("i", { className: "fa fa-arrow-up", title: U("swapSwapSwitch") }),
                            n.default.createElement("i", { className: "fa fa-arrow-down", title: U("swapSwapSwitch") })
                          )
                        ),
                        n.default.createElement(
                          "div",
                          { className: "build-quote__dropdown-swap-to-header" },
                          n.default.createElement("div", { className: "build-quote__input-label" }, U("swapSwapTo"))
                        ),
                        n.default.createElement(
                          "div",
                          { className: "dropdown-input-pair dropdown-input-pair__to" },
                          n.default.createElement(h.default, {
                            startingItem: je,
                            itemsToSearch: De,
                            fuseSearchKeys: G,
                            selectPlaceHolderText: U("swapSelectAToken"),
                            maxListItems: 30,
                            onSelect: nt,
                            loading: Pe && (!(null != De && De.length) || !ne || !Object.keys(ne).length),
                            externallySelectedItem: je,
                            hideItemIf: rt,
                            listContainerClassName: "build-quote__open-to-dropdown",
                            hideRightLabels: !0,
                            defaultToAll: !0,
                            shouldSearchForImports: !0
                          })
                        ),
                        qe &&
                          (We < 2
                            ? n.default.createElement(v.default, {
                                type: 1 === We ? "warning" : "danger",
                                message: n.default.createElement(
                                  "div",
                                  { className: "build-quote__token-verification-warning-message" },
                                  n.default.createElement(
                                    "div",
                                    { className: "build-quote__bold" },
                                    U(1 === We ? "swapTokenVerificationOnlyOneSource" : "swapTokenVerificationAddedManually")
                                  ),
                                  n.default.createElement("div", null, ut)
                                ),
                                primaryAction: Z ? null : { label: U("continue"), onClick: () => K(!0) },
                                withRightButton: !0,
                                infoTooltipText: et && U("swapVerifyTokenExplanation", [tt])
                              })
                            : n.default.createElement(
                                "div",
                                { className: "build-quote__token-message" },
                                n.default.createElement(
                                  "span",
                                  { className: "build-quote__bold", key: "token-verification-bold-text" },
                                  U("swapTokenVerificationSources", [We])
                                ),
                                et &&
                                  n.default.createElement(
                                    n.default.Fragment,
                                    null,
                                    U("swapTokenVerificationMessage", [
                                      n.default.createElement(
                                        "a",
                                        {
                                          className: "build-quote__token-etherscan-link",
                                          key: "build-quote-etherscan-link",
                                          onClick: () => {
                                            $({
                                              event: "Clicked Block Explorer Link",
                                              category: P.MetaMetricsEventCategory.Swaps,
                                              properties: {
                                                link_type: "Token Tracker",
                                                action: "Swaps Confirmation",
                                                block_explorer_domain: (0, S.getURLHostName)(et)
                                              }
                                            }),
                                              global.platform.openTab({ url: et });
                                          },
                                          target: "_blank",
                                          rel: "noopener noreferrer"
                                        },
                                        tt
                                      )
                                    ]),
                                    n.default.createElement(w.default, {
                                      position: "top",
                                      contentText: U("swapVerifyTokenExplanation", [tt]),
                                      containerClassName: "build-quote__token-tooltip-container",
                                      key: "token-verification-info-tooltip"
                                    })
                                  )
                              )),
                        (Te || (!Te && !dt)) &&
                          n.default.createElement(
                            "div",
                            { className: "build-quote__slippage-buttons-container" },
                            n.default.createElement(_.default, {
                              onSelect: (e) => {
                                B((0, T.setMaxSlippage)(e));
                              },
                              maxAllowedSlippage: A.MAX_ALLOWED_SLIPPAGE,
                              currentSlippage: le,
                              smartTransactionsEnabled: Te,
                              smartTransactionsOptInStatus: ye,
                              setSmartTransactionsOptInStatus: M.setSmartTransactionsOptInStatus,
                              currentSmartTransactionsError: Ce,
                              isDirectWrappingEnabled: dt
                            })
                          )
                      ),
                      n.default.createElement(R.default, {
                        onSubmit: async () => {
                          B((0, T.setReviewSwapClickedTimestamp)(Date.now())),
                            H
                              ? (clearTimeout(H), B((0, T.fetchQuotesAndSetQuoteState)(V, se, le, $)))
                              : me
                              ? V.push(y.VIEW_QUOTE_ROUTE)
                              : (await B((0, M.setBackgroundSwapRouteState)("loading")), V.push(y.LOADING_QUOTES_ROUTE));
                        },
                        submitText: U("swapReviewSwap"),
                        disabled: pt,
                        hideCancel: !0,
                        showTermsOfService: !0
                      })
                    )
                  );
                }
                V.propTypes = {
                  ethBalance: s.default.string,
                  selectedAccountAddress: s.default.string,
                  shuffledTokensList: s.default.array
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/build-quote/build-quote.js" }
    ],
    [
      5122,
      { "./build-quote": 5121 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./build-quote")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/build-quote/index.js" }
    ],
    [
      5123,
      {
        "../../../../shared/constants/time": 3972,
        "../../../components/ui/info-tooltip": 4665,
        "../../../contexts/i18n": 4748,
        "../../../ducks/swaps/swaps": 4767,
        classnames: 2414,
        luxon: 3324,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = _);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = f(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = p(e("prop-types")),
                  o = p(e("classnames")),
                  l = e("luxon"),
                  i = e("../../../contexts/i18n"),
                  u = p(e("../../../components/ui/info-tooltip")),
                  c = e("../../../ducks/swaps/swaps"),
                  d = e("../../../../shared/constants/time");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (f = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function m(e, t, a) {
                  return a - (e - t);
                }
                function g(e) {
                  return Math.max(e - d.SECOND, 0);
                }
                function h(e, t) {
                  const [a, n] = t.split(":");
                  return e <= (60 * Number(a) + Number(n)) * d.SECOND;
                }
                function _({ timeStarted: e, timeOnly: t, timerBase: a, warningTime: s, labelKey: p, infoTooltipLabelKey: f }) {
                  const _ = (0, n.useContext)(i.I18nContext),
                    E = (0, n.useRef)(),
                    w = (0, n.useRef)(),
                    v = (0, r.useSelector)(c.getSwapsQuoteRefreshTime),
                    y = (0, r.useSelector)(c.getSwapsQuotePrefetchingRefreshTime),
                    T = w.current ? v : y,
                    b = Number(a) || T,
                    [S, k] = (0, n.useState)(() => Date.now()),
                    [C, x] = (0, n.useState)(() => m(S, e, b));
                  (0, n.useEffect)(
                    () => (
                      E.current === undefined &&
                        (E.current = setInterval(() => {
                          x(g);
                        }, d.SECOND)),
                      function () {
                        clearInterval(E.current);
                      }
                    ),
                    []
                  ),
                    (0, n.useEffect)(() => {
                      if ((w.current || (w.current = e || Date.now()), 0 === C && e !== w.current)) {
                        w.current = e;
                        const t = Date.now();
                        k(t),
                          x(m(t, e, b)),
                          clearInterval(E.current),
                          (E.current = setInterval(() => {
                            x(g);
                          }, d.SECOND));
                      }
                    }, [e, C, b]);
                  const O = l.Duration.fromMillis(C).toFormat("m:ss");
                  let I;
                  return (
                    t
                      ? (I = n.default.createElement("div", { className: "countdown-timer__time" }, O))
                      : p &&
                        (I = _(p, [n.default.createElement("div", { key: "countdown-time-1", className: "countdown-timer__time" }, O)])),
                    n.default.createElement(
                      "div",
                      { className: "countdown-timer" },
                      n.default.createElement(
                        "div",
                        {
                          "data-testid": "countdown-timer__timer-container",
                          className: (0, o.default)("countdown-timer__timer-container", {
                            "countdown-timer__timer-container--warning": s && h(C, s)
                          })
                        },
                        I
                      ),
                      !t && f ? n.default.createElement(u.default, { position: "bottom", contentText: _(f) }) : null
                    )
                  );
                }
                _.propTypes = {
                  timeStarted: s.default.number,
                  timeOnly: s.default.bool,
                  timerBase: s.default.number,
                  warningTime: s.default.string,
                  labelKey: s.default.string,
                  infoTooltipLabelKey: s.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/countdown-timer/countdown-timer.js" }
    ],
    [
      5124,
      { "./countdown-timer": 5123 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./countdown-timer")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/countdown-timer/index.js" }
    ],
    [
      5125,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/ui/box": 4607,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/routes": 4776,
        "../../../selectors": 5197,
        "lodash/isEqual": 3300,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = _);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = h(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = g(e("prop-types")),
                  o = e("react-router-dom"),
                  l = g(e("lodash/isEqual")),
                  i = g(e("../../../components/ui/box")),
                  u = e("../../../contexts/i18n"),
                  c = e("../../../contexts/metametrics"),
                  d = e("../../../../shared/constants/metametrics"),
                  p = e("../../../ducks/swaps/swaps"),
                  f = e("../../../helpers/constants/routes"),
                  m = e("../../../selectors");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (h = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function _({ sensitiveTrackingProperties: e }) {
                  const t = (0, n.useContext)(u.I18nContext),
                    a = (0, n.useContext)(c.MetaMetricsContext),
                    s = (0, r.useDispatch)(),
                    g = (0, o.useHistory)(),
                    h = (0, r.useSelector)(m.getSwapsDefaultToken, l.default);
                  return n.default.createElement(
                    i.default,
                    { marginBottom: 3, className: "create-new-swap" },
                    n.default.createElement(
                      "button",
                      {
                        onClick: async () => {
                          a({ event: "Make Another Swap", category: d.MetaMetricsEventCategory.Swaps, sensitiveProperties: e }),
                            g.push(f.DEFAULT_ROUTE),
                            await s((0, p.navigateBackToBuildQuote)(g)),
                            s((0, p.setSwapsFromToken)(h));
                        }
                      },
                      t("makeAnotherSwap")
                    )
                  );
                }
                _.propTypes = { sensitiveTrackingProperties: s.default.object.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/create-new-swap/create-new-swap.js" }
    ],
    [
      5126,
      { "./create-new-swap": 5125 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./create-new-swap")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/create-new-swap/index.js" }
    ],
    [
      5127,
      { "../../../components/ui/text-field": 4725, "../dropdown-search-list": 5130, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = p);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = u(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = i(e("prop-types")),
                  s = i(e("classnames")),
                  o = i(e("../dropdown-search-list")),
                  l = i(e("../../../components/ui/text-field"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (u = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const c = { 1: 5.86, 2: 10.05, 3: 10.45, 4: 11.1, 5: 10, 6: 10.06, 7: 9.17, 8: 10.28, 9: 10.06, 0: 11.22, ".": 4.55 },
                  d = (e) =>
                    String(e)
                      .split("")
                      .reduce((e, t) => e + c[t], 12);
                function p({
                  itemsToSearch: e = [],
                  onInputChange: t,
                  inputValue: a = "",
                  onSelect: r,
                  leftValue: i,
                  selectedItem: u,
                  SearchListPlaceholder: c,
                  maxListItems: p,
                  selectPlaceHolderText: f,
                  loading: m,
                  hideItemIf: g,
                  listContainerClassName: h,
                  autoFocus: _
                }) {
                  const [E, w] = (0, n.useState)(!1),
                    v = (0, n.useRef)(),
                    [y, T] = (0, n.useState)(null);
                  return (
                    (0, n.useEffect)(() => {
                      var e;
                      T(
                        ((null == v || null === (e = v.current) || void 0 === e || null === (e = e.getBoundingClientRect()) || void 0 === e
                          ? void 0
                          : e.width) || 0) +
                          d(a || "") >
                          137
                      );
                    }, [a, v]),
                    n.default.createElement(
                      "div",
                      { className: "dropdown-input-pair" },
                      n.default.createElement(o.default, {
                        itemsToSearch: e,
                        SearchListPlaceholder: c,
                        fuseSearchKeys: [
                          { name: "name", weight: 0.499 },
                          { name: "symbol", weight: 0.499 },
                          { name: "address", weight: 0.002 }
                        ],
                        maxListItems: p,
                        onOpen: () => w(!0),
                        onClose: () => w(!1),
                        onSelect: r,
                        className: E ? "dropdown-input-pair__list--full-width" : "",
                        externallySelectedItem: u,
                        selectPlaceHolderText: f,
                        selectorClosedClassName: "dropdown-input-pair__selector--closed",
                        listContainerClassName: h,
                        loading: m,
                        hideItemIf: g,
                        defaultToAll: !0
                      }),
                      !E &&
                        n.default.createElement(l.default, {
                          className: (0, s.default)("dropdown-input-pair__input", { "dropdown-input-pair__two-line-input": y }),
                          type: "text",
                          placeholder: "0",
                          onChange: (e) => {
                            e.stopPropagation();
                            const n = "." === e.target.value ? "0." : e.target.value;
                            "" === n || /^(\.\d+|\d+(\.\d+)?|\d+\.)$/u.test(n) ? t(n) : t(a || "");
                          },
                          fullWidth: !0,
                          margin: "dense",
                          value: a,
                          autoFocus: _
                        }),
                      !E &&
                        i &&
                        n.default.createElement(
                          "div",
                          {
                            className: (0, s.default)("dropdown-input-pair__left-value", {
                              "dropdown-input-pair__left-value--two-lines": y
                            }),
                            ref: v
                          },
                          "≈ ",
                          i
                        )
                    )
                  );
                }
                p.propTypes = {
                  itemsToSearch: r.default.array,
                  onInputChange: r.default.func,
                  inputValue: r.default.oneOfType([r.default.number, r.default.string]),
                  onSelect: r.default.func,
                  leftValue: r.default.string,
                  selectedItem: r.default.object,
                  SearchListPlaceholder: r.default.func,
                  maxListItems: r.default.number,
                  selectPlaceHolderText: r.default.string,
                  loading: r.default.bool,
                  hideItemIf: r.default.func,
                  listContainerClassName: r.default.string,
                  autoFocus: r.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/dropdown-input-pair/dropdown-input-pair.js" }
    ],
    [
      5128,
      { "./dropdown-input-pair": 5127 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./dropdown-input-pair")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/dropdown-input-pair/index.js" }
    ],
    [
      5129,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/swaps": 3970,
        "../../../components/component-library": 4453,
        "../../../components/ui/actionable-message/actionable-message": 4603,
        "../../../components/ui/pulse-loader": 4701,
        "../../../components/ui/url-icon": 4745,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/utils/util": 4812,
        "../../../selectors/selectors": 5200,
        "../import-token": 5136,
        "../searchable-item-list": 5152,
        classnames: 2414,
        lodash: 3312,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = S);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = T(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = y(e("prop-types")),
                  o = y(e("classnames")),
                  l = e("lodash"),
                  i = e("../../../contexts/i18n"),
                  u = y(e("../searchable-item-list")),
                  c = y(e("../../../components/ui/pulse-loader")),
                  d = y(e("../../../components/ui/url-icon")),
                  p = e("../../../components/component-library"),
                  f = y(e("../../../components/ui/actionable-message/actionable-message")),
                  m = y(e("../import-token")),
                  g = e("../../../selectors/selectors"),
                  h = e("../../../../shared/constants/swaps"),
                  _ = e("../../../helpers/utils/util"),
                  E = e("../../../ducks/swaps/swaps"),
                  w = e("../../../contexts/metametrics"),
                  v = e("../../../../shared/constants/metametrics");
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function T(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (T = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function b() {
                  return (
                    (b = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                          }
                          return e;
                        }),
                    b.apply(this, arguments)
                  );
                }
                function S({
                  searchListClassName: e,
                  itemsToSearch: t,
                  selectPlaceHolderText: a,
                  fuseSearchKeys: s,
                  defaultToAll: y,
                  maxListItems: T,
                  onSelect: S,
                  startingItem: k,
                  onOpen: C,
                  onClose: x,
                  className: O = "",
                  externallySelectedItem: I,
                  selectorClosedClassName: P,
                  loading: A,
                  hideRightLabels: M,
                  hideItemIf: N,
                  listContainerClassName: R,
                  shouldSearchForImports: F
                }) {
                  const L = (0, n.useContext)(i.I18nContext),
                    [D, j] = (0, n.useState)(!1),
                    [q, W] = (0, n.useState)(!1),
                    [U, B] = (0, n.useState)(k),
                    [G, H] = (0, n.useState)(null),
                    [V, $] = (0, n.useState)(""),
                    Q = (0, r.useSelector)(g.isHardwareWallet),
                    X = (0, r.useSelector)(g.getHardwareWalletType),
                    Z = (0, r.useSelector)(g.getCurrentChainId),
                    K = (0, r.useSelector)(g.getRpcPrefsForCurrentProvider),
                    Y = (0, r.useSelector)(E.getSmartTransactionsOptInStatus),
                    z = (0, r.useSelector)(E.getSmartTransactionsEnabled),
                    J = (0, r.useSelector)(E.getCurrentSmartTransactionsEnabled),
                    ee = (0, n.useContext)(w.MetaMetricsContext),
                    te = (0, n.useCallback)(() => {
                      j(!1), null == x || x();
                    }, [x]),
                    ae = (0, n.useCallback)(
                      (e) => {
                        null == S || S(e), B(e), te();
                      },
                      [S, te]
                    ),
                    ne = (0, n.useCallback)(() => {
                      D || (j(!0), null == C || C());
                    }, [D, C]),
                    re = (0, n.useRef)();
                  (0, n.useEffect)(() => {
                    re.current = I;
                  });
                  const se = re.current;
                  (0, n.useEffect)(() => {
                    I && !(0, l.isEqual)(I, U) ? B(I) : se && !I && B(null);
                  }, [I, U, se]);
                  const oe = K.blockExplorerUrl ?? h.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[Z] ?? null,
                    le = (0, _.getURLHostName)(oe),
                    ie = {
                      onImportTokenCloseClick: () => {
                        W(!1), te();
                      },
                      onImportTokenClick: () => {
                        ee({
                          event: "Token Imported",
                          category: v.MetaMetricsEventCategory.Swaps,
                          sensitiveProperties: {
                            symbol: null == G ? void 0 : G.symbol,
                            address: null == G ? void 0 : G.address,
                            chain_id: Z,
                            is_hardware_wallet: Q,
                            hardware_wallet_type: X,
                            stx_enabled: z,
                            current_stx_enabled: J,
                            stx_user_opt_in: Y
                          }
                        }),
                          null == S || S(G),
                          B(G),
                          H(null),
                          te();
                      },
                      setIsImportTokenModalOpen: W,
                      tokenForImport: G
                    };
                  return n.default.createElement(
                    "div",
                    {
                      className: (0, o.default)("dropdown-search-list", O),
                      "data-testid": "dropdown-search-list",
                      onClick: ne,
                      onKeyUp: (e) => {
                        "Escape" === e.key ? te() : "Enter" === e.key && ne(e);
                      },
                      tabIndex: "0"
                    },
                    G && q && n.default.createElement(m.default, b({ isOpen: !0 }, ie)),
                    !D &&
                      n.default.createElement(
                        "div",
                        { className: (0, o.default)("dropdown-search-list__selector-closed-container", P) },
                        n.default.createElement(
                          "div",
                          { className: "dropdown-search-list__selector-closed" },
                          (null == U ? void 0 : U.iconUrl) &&
                            n.default.createElement(d.default, {
                              url: U.iconUrl,
                              className: "dropdown-search-list__selector-closed-icon",
                              name: null == U ? void 0 : U.symbol
                            }),
                          !(null != U && U.iconUrl) &&
                            n.default.createElement("div", { className: "dropdown-search-list__default-dropdown-icon" }),
                          n.default.createElement(
                            "div",
                            { className: "dropdown-search-list__labels" },
                            n.default.createElement(
                              "div",
                              { className: "dropdown-search-list__item-labels" },
                              n.default.createElement(
                                "span",
                                {
                                  className: (0, o.default)("dropdown-search-list__closed-primary-label", {
                                    "dropdown-search-list__select-default": !(null != U && U.symbol)
                                  })
                                },
                                (null == U ? void 0 : U.symbol) || a
                              )
                            )
                          )
                        ),
                        n.default.createElement(p.Icon, { name: p.IconName.ArrowDown, size: p.IconSize.Xs, marginRight: 3 })
                      ),
                    D &&
                      n.default.createElement(
                        n.default.Fragment,
                        null,
                        n.default.createElement(u.default, {
                          itemsToSearch: A ? [] : t,
                          Placeholder: () =>
                            A
                              ? n.default.createElement(
                                  "div",
                                  { className: "dropdown-search-list__loading-item" },
                                  n.default.createElement(c.default, null),
                                  n.default.createElement(
                                    "div",
                                    { className: "dropdown-search-list__loading-item-text-container" },
                                    n.default.createElement(
                                      "span",
                                      { className: "dropdown-search-list__loading-item-text" },
                                      L("swapFetchingTokens")
                                    )
                                  )
                                )
                              : n.default.createElement(
                                  "div",
                                  { className: "dropdown-search-list__placeholder" },
                                  L("swapBuildQuotePlaceHolderText", [V]),
                                  oe &&
                                    n.default.createElement(
                                      "div",
                                      {
                                        tabIndex: "0",
                                        className: "searchable-item-list__item searchable-item-list__item--add-token",
                                        key: "searchable-item-list-item-last"
                                      },
                                      n.default.createElement(f.default, {
                                        message: L("addTokenByContractAddress", [
                                          n.default.createElement(
                                            "a",
                                            {
                                              key: "dropdown-search-list__etherscan-link",
                                              onClick: () => {
                                                ee({
                                                  event: "Clicked Block Explorer Link",
                                                  category: v.MetaMetricsEventCategory.Swaps,
                                                  properties: {
                                                    link_type: "Token Tracker",
                                                    action: "Verify Contract Address",
                                                    block_explorer_domain: le
                                                  }
                                                }),
                                                  global.platform.openTab({ url: oe });
                                              },
                                              target: "_blank",
                                              rel: "noopener noreferrer"
                                            },
                                            le
                                          )
                                        ])
                                      })
                                    )
                                ),
                          searchPlaceholderText: L("swapSearchNameOrAddress"),
                          fuseSearchKeys: s,
                          defaultToAll: y,
                          onClickItem: ae,
                          onOpenImportTokenModalClick: (e) => {
                            H(e), W(!0);
                          },
                          maxListItems: T,
                          className: (0, o.default)("dropdown-search-list__token-container", e, { "dropdown-search-list--open": D }),
                          hideRightLabels: M,
                          hideItemIf: N,
                          listContainerClassName: R,
                          shouldSearchForImports: F,
                          searchQuery: V,
                          setSearchQuery: $
                        }),
                        n.default.createElement("div", {
                          className: "dropdown-search-list__close-area",
                          "data-testid": "dropdown-search-list__close-area",
                          onClick: (e) => {
                            e.stopPropagation(), j(!1), null == x || x();
                          }
                        })
                      )
                  );
                }
                S.propTypes = {
                  itemsToSearch: s.default.array,
                  onSelect: s.default.func,
                  searchListClassName: s.default.string,
                  fuseSearchKeys: s.default.arrayOf(s.default.shape({ name: s.default.string, weight: s.default.number })),
                  defaultToAll: s.default.bool,
                  maxListItems: s.default.number,
                  startingItem: s.default.object,
                  onOpen: s.default.func,
                  onClose: s.default.func,
                  className: s.default.string,
                  externallySelectedItem: s.default.object,
                  loading: s.default.bool,
                  selectPlaceHolderText: s.default.string,
                  selectorClosedClassName: s.default.string,
                  hideRightLabels: s.default.bool,
                  hideItemIf: s.default.func,
                  listContainerClassName: s.default.string,
                  shouldSearchForImports: s.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/dropdown-search-list/dropdown-search-list.js" }
    ],
    [
      513,
      {
        "./lang-cz": 504,
        "./lang-en": 505,
        "./lang-es": 506,
        "./lang-fr": 507,
        "./lang-it": 508,
        "./lang-ja": 509,
        "./lang-ko": 510,
        "./lang-zh": 511
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.wordlists = void 0);
                var n = e("./lang-cz"),
                  r = e("./lang-en"),
                  s = e("./lang-es"),
                  o = e("./lang-fr"),
                  l = e("./lang-ja"),
                  i = e("./lang-ko"),
                  u = e("./lang-it"),
                  c = e("./lang-zh");
                a.wordlists = {
                  cz: n.langCz,
                  en: r.langEn,
                  es: s.langEs,
                  fr: o.langFr,
                  it: u.langIt,
                  ja: l.langJa,
                  ko: i.langKo,
                  zh: c.langZhCn,
                  zh_cn: c.langZhCn,
                  zh_tw: c.langZhTw
                };
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/wordlists.js" }
    ],
    [
      5130,
      { "./dropdown-search-list": 5129 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./dropdown-search-list")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/dropdown-search-list/index.js" }
    ],
    [
      5131,
      {
        "../../../../shared/lib/transactions-controller-utils": 3982,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../swaps.util": 5179,
        "bignumber.js": 2283,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = g);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = m(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = f(e("prop-types")),
                  s = f(e("bignumber.js")),
                  o = f(e("classnames")),
                  l = e("../swaps.util"),
                  i = e("../../../../shared/lib/transactions-controller-utils"),
                  u = f(e("../../../components/ui/box")),
                  c = e("../../../helpers/constants/design-system"),
                  d = e("../../../components/component-library"),
                  p = e("../../../contexts/i18n");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (m = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function g({
                  primaryTokenValue: e,
                  primaryTokenDecimals: t = 18,
                  primaryTokenSymbol: a,
                  secondaryTokenValue: r,
                  secondaryTokenDecimals: f = 18,
                  secondaryTokenSymbol: m,
                  boldSymbols: g = !0,
                  showIconForSwappingTokens: h = !0,
                  className: _,
                  onQuotesClick: E
                }) {
                  const [w, v] = (0, n.useState)(!0),
                    y = (0, n.useContext)(p.I18nContext),
                    T = (0, i.calcTokenAmount)(e, t),
                    b = (0, i.calcTokenAmount)(r, f),
                    S = new s.default(b).div(T).round(9).toString(10),
                    k = new s.default(T).div(b).round(9).toString(10),
                    C = w ? a : m,
                    x = w ? m : a,
                    O = w ? S : k;
                  let I,
                    P = "=";
                  new s.default(O, 10).lt("0.00000001", 10)
                    ? ((I = "0.000000001"), (P = "<"))
                    : (I = new s.default(O, 10).lt("0.000001", 10) ? O : (0, l.formatSwapsValueForDisplay)(O));
                  const A = E ? "exchange-rate-display__quote-rate" : "exchange-rate-display__quote-rate--no-link",
                    M = E ? c.TextColor.primaryDefault : c.TextColor.textDefault;
                  return n.default.createElement(
                    "div",
                    { className: (0, o.default)("exchange-rate-display", _) },
                    n.default.createElement(
                      u.default,
                      {
                        display: c.DISPLAY.FLEX,
                        justifyContent: c.JustifyContent.center,
                        alignItems: c.AlignItems.center,
                        onClick: E,
                        color: M,
                        className: A,
                        "data-testid": "exchange-rate-display-quote-rate"
                      },
                      n.default.createElement("span", null, "1"),
                      n.default.createElement(
                        "span",
                        {
                          className: (0, o.default)({ "exchange-rate-display__bold": g }),
                          "data-testid": "exchange-rate-display-base-symbol"
                        },
                        C
                      ),
                      n.default.createElement("span", null, P),
                      n.default.createElement("span", null, I),
                      n.default.createElement("span", { className: (0, o.default)({ "exchange-rate-display__bold": g }) }, x)
                    ),
                    h &&
                      n.default.createElement(d.Icon, {
                        name: d.IconName.SwapHorizontal,
                        onClick: () => {
                          v(!w);
                        },
                        color: c.IconColor.iconAlternative,
                        style: { cursor: "pointer" },
                        title: y("switch"),
                        "data-testid": "exchange-rate-display-switch"
                      })
                  );
                }
                g.propTypes = {
                  primaryTokenValue: r.default.oneOfType([r.default.string, r.default.instanceOf(s.default)]).isRequired,
                  primaryTokenDecimals: r.default.oneOfType([r.default.string, r.default.number]),
                  primaryTokenSymbol: r.default.string.isRequired,
                  secondaryTokenValue: r.default.oneOfType([r.default.string, r.default.instanceOf(s.default)]).isRequired,
                  secondaryTokenDecimals: r.default.oneOfType([r.default.string, r.default.number]),
                  secondaryTokenSymbol: r.default.string.isRequired,
                  className: r.default.string,
                  boldSymbols: r.default.bool,
                  showIconForSwappingTokens: r.default.bool,
                  onQuotesClick: r.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/exchange-rate-display/exchange-rate-display.js" }
    ],
    [
      5132,
      { "./exchange-rate-display": 5131 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./exchange-rate-display")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/exchange-rate-display/index.js" }
    ],
    [
      5133,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/network": 3963,
        "../../../components/app/transaction-detail-item/transaction-detail-item.component": 4364,
        "../../../components/app/transaction-detail/transaction-detail.component": 4366,
        "../../../components/component-library": 4453,
        "../../../components/ui/info-tooltip": 4665,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../selectors": 5197,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = w);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = _(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = h(e("prop-types")),
                  o = e("../../../contexts/i18n"),
                  l = h(e("../../../components/ui/info-tooltip")),
                  i = e("../../../../shared/constants/network"),
                  u = h(e("../../../components/app/transaction-detail/transaction-detail.component")),
                  c = h(e("../../../components/app/transaction-detail-item/transaction-detail-item.component")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../contexts/metametrics"),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../../selectors"),
                  g = e("../../../components/component-library");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function _(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (_ = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const E = "https://community.metamask.io/t/what-is-gas-why-do-transactions-take-so-long/3172";
                function w({
                  primaryFee: e,
                  secondaryFee: t,
                  hideTokenApprovalRow: a,
                  tokenApprovalSourceTokenSymbol: s,
                  onTokenApprovalClick: h,
                  metaMaskFee: _,
                  numberOfQuotes: w,
                  onQuotesClick: v,
                  chainId: y
                }) {
                  const T = (0, n.useContext)(o.I18nContext),
                    b = (0, r.useSelector)(m.getUseCurrencyRateCheck),
                    S = (0, n.useContext)(p.MetaMetricsContext),
                    k = n.default.createElement(
                      "span",
                      { key: "fee-card-approve-symbol", className: "fee-card__bold" },
                      T("enableToken", [s])
                    );
                  return n.default.createElement(
                    "div",
                    { className: "fee-card" },
                    n.default.createElement(
                      "div",
                      { className: "fee-card__main" },
                      n.default.createElement(u.default, {
                        disableEditGasFeeButton: !0,
                        rows: [
                          n.default.createElement(c.default, {
                            key: "fee-card-gas-item",
                            detailTitle: n.default.createElement(
                              n.default.Fragment,
                              null,
                              T("transactionDetailGasHeading"),
                              n.default.createElement(l.default, {
                                position: "top",
                                contentText: n.default.createElement(
                                  n.default.Fragment,
                                  null,
                                  n.default.createElement(
                                    "p",
                                    { className: "fee-card__info-tooltip-paragraph" },
                                    T("swapGasFeesSummary", [
                                      (() => {
                                        switch (y) {
                                          case i.CHAIN_IDS.MAINNET:
                                            return T("networkNameEthereum");
                                          case i.CHAIN_IDS.BSC:
                                            return T("networkNameBSC");
                                          case i.CHAIN_IDS.POLYGON:
                                            return T("networkNamePolygon");
                                          case i.CHAIN_IDS.LOCALHOST:
                                            return T("networkNameTestnet");
                                          case i.CHAIN_IDS.GOERLI:
                                            return T("networkNameGoerli");
                                          case i.CHAIN_IDS.AVALANCHE:
                                            return T("networkNameAvalanche");
                                          case i.CHAIN_IDS.OPTIMISM:
                                            return T("networkNameOpMainnet");
                                          case i.CHAIN_IDS.ARBITRUM:
                                            return T("networkNameArbitrum");
                                          case i.CHAIN_IDS.ZKSYNC_ERA:
                                            return T("networkNameZkSyncEra");
                                          case i.CHAIN_IDS.LINEA_MAINNET:
                                            return T("networkNameLinea");
                                          default:
                                            throw new Error("This network is not supported for token swaps");
                                        }
                                      })()
                                    ])
                                  ),
                                  n.default.createElement("p", { className: "fee-card__info-tooltip-paragraph" }, T("swapGasFeesDetails")),
                                  n.default.createElement(
                                    "p",
                                    { className: "fee-card__info-tooltip-paragraph" },
                                    n.default.createElement(
                                      "a",
                                      {
                                        className: "fee-card__link",
                                        onClick: () => {
                                          S({ event: 'Clicked "Gas Fees: Learn More" Link', category: f.MetaMetricsEventCategory.Swaps }),
                                            global.platform.openTab({ url: E });
                                        },
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                      },
                                      T("swapGasFeesLearnMore")
                                    )
                                  )
                                ),
                                containerClassName: "fee-card__info-tooltip-content-container",
                                wrapperClassName: "fee-card__row-label fee-card__info-tooltip-container"
                              })
                            ),
                            detailText: e.fee,
                            detailTotal: b && t.fee,
                            subText:
                              ((null == t ? void 0 : t.maxFee) !== undefined || (null == e ? void 0 : e.maxFee) !== undefined) &&
                              n.default.createElement(
                                n.default.Fragment,
                                null,
                                n.default.createElement(
                                  g.Text,
                                  {
                                    as: "span",
                                    fontWeight: d.FontWeight.Bold,
                                    color: d.TextColor.textAlternative,
                                    variant: d.TextVariant.bodySm
                                  },
                                  T("maxFee")
                                ),
                                b ? `: ${t.maxFee}` : `: ${e.maxFee}`
                              )
                          })
                        ]
                      }),
                      !a &&
                        n.default.createElement(
                          "div",
                          { className: "fee-card__row-header" },
                          n.default.createElement(
                            "div",
                            { className: "fee-card__row-label" },
                            n.default.createElement(
                              "div",
                              { className: "fee-card__row-header-text" },
                              T("swapEnableTokenForSwapping", [k]),
                              n.default.createElement(l.default, {
                                position: "top",
                                contentText: T("swapEnableDescription", [s]),
                                containerClassName: "fee-card__info-tooltip-container"
                              })
                            )
                          ),
                          n.default.createElement("div", { className: "fee-card__link", onClick: () => h() }, T("swapEditLimit"))
                        ),
                      n.default.createElement(
                        "div",
                        { className: "fee-card__row-header" },
                        n.default.createElement(
                          "div",
                          { className: "fee-card__row-label" },
                          n.default.createElement(
                            "div",
                            { className: "fee-card__row-header-text" },
                            w > 1 &&
                              n.default.createElement(
                                "span",
                                { onClick: v, className: "fee-card__quote-link-text" },
                                T("swapNQuotesWithDot", [w])
                              ),
                            T("swapIncludesMMFee", [_]),
                            n.default.createElement(l.default, {
                              position: "top",
                              contentText: T("swapMetaMaskFeeDescription", [_]),
                              wrapperClassName: "fee-card__info-tooltip-container"
                            })
                          )
                        )
                      )
                    )
                  );
                }
                w.propTypes = {
                  primaryFee: s.default.shape({ fee: s.default.string.isRequired, maxFee: s.default.string.isRequired }).isRequired,
                  secondaryFee: s.default.shape({ fee: s.default.string.isRequired, maxFee: s.default.string.isRequired }),
                  hideTokenApprovalRow: s.default.bool.isRequired,
                  tokenApprovalSourceTokenSymbol: s.default.string,
                  onTokenApprovalClick: s.default.func,
                  metaMaskFee: s.default.string.isRequired,
                  onQuotesClick: s.default.func.isRequired,
                  numberOfQuotes: s.default.number.isRequired,
                  chainId: s.default.string.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/fee-card/fee-card.js" }
    ],
    [
      5134,
      { "./fee-card": 5133 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./fee-card")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/fee-card/index.js" }
    ],
    [
      5135,
      {
        "../../../components/component-library": 4453,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = c);
                var n,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = u(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = (n = e("prop-types")) && n.__esModule ? n : { default: n },
                  o = e("../../../contexts/i18n"),
                  l = e("../../../helpers/constants/design-system"),
                  i = e("../../../components/component-library");
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (u = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function c({
                  onImportTokenCloseClick: e,
                  onImportTokenClick: t,
                  setIsImportTokenModalOpen: a,
                  tokenForImport: n,
                  isOpen: s
                }) {
                  const u = (0, r.useContext)(o.I18nContext);
                  return r.default.createElement(
                    i.Modal,
                    { isOpen: s, onClose: () => a(!1) },
                    r.default.createElement(i.ModalOverlay, null),
                    r.default.createElement(
                      i.ModalContent,
                      {
                        modalDialogProps: {
                          display: l.Display.Flex,
                          flexDirection: l.FlexDirection.Column,
                          alignItems: l.AlignItems.center,
                          gap: 4
                        }
                      },
                      r.default.createElement(i.ModalHeader, { onClose: () => a(!1), width: l.BlockSize.Full }, u("importTokenQuestion")),
                      r.default.createElement(i.BannerAlert, { severity: l.Severity.Danger, description: u("importTokenWarning") }),
                      r.default.createElement(i.AvatarToken, { src: n.iconUrl, name: n.symbol, size: i.AvatarTokenSize.Xl }),
                      r.default.createElement(i.Text, { variant: l.TextVariant.headingSm, as: "h4" }, n.name || ""),
                      r.default.createElement(i.FormTextField, {
                        label: u("contract"),
                        id: "import-tokens-input",
                        inputProps: { variant: l.TextVariant.bodySm },
                        readOnly: !0,
                        value: n.address || "",
                        width: l.BlockSize.Full
                      }),
                      r.default.createElement(
                        i.Box,
                        { display: l.Display.Flex, flexDirection: l.FlexDirection.Row, gap: 4, width: l.BlockSize.Full },
                        r.default.createElement(
                          i.Button,
                          { variant: i.BUTTON_VARIANT.SECONDARY, block: !0, size: i.BUTTON_SIZES.LG, onClick: e },
                          u("cancel")
                        ),
                        r.default.createElement(
                          i.Button,
                          {
                            variant: i.BUTTON_VARIANT.PRIMARY,
                            block: !0,
                            size: i.BUTTON_SIZES.LG,
                            onClick: t,
                            "data-testid": "import-tokens-import-button"
                          },
                          u("import")
                        )
                      )
                    )
                  );
                }
                c.propTypes = {
                  onImportTokenCloseClick: s.default.func,
                  onImportTokenClick: s.default.func,
                  setIsImportTokenModalOpen: s.default.func,
                  tokenForImport: s.default.object,
                  isOpen: s.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/import-token/import-token.js" }
    ],
    [
      5136,
      { "./import-token": 5135 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./import-token")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/import-token/index.js" }
    ],
    [
      5137,
      {
        "../../../shared/constants/metametrics": 3962,
        "../../../shared/constants/swaps": 3970,
        "../../../shared/lib/transactions-controller-utils": 3982,
        "../../components/component-library": 4453,
        "../../components/ui/box": 4607,
        "../../contexts/i18n": 4748,
        "../../contexts/metametrics": 4749,
        "../../ducks/swaps/swaps": 4767,
        "../../helpers/constants/design-system": 4771,
        "../../helpers/constants/routes": 4776,
        "../../helpers/higher-order-components/feature-toggled-route": 4785,
        "../../hooks/useGasFeeEstimates": 4836,
        "../../selectors": 5197,
        "../../selectors/selectors": 5200,
        "../../store/actions": 5204,
        "./awaiting-signatures": 5114,
        "./awaiting-swap": 5117,
        "./build-quote": 5122,
        "./loading-swaps-quotes": 5140,
        "./notification-page/notification-page": 5145,
        "./prepare-swap-page/prepare-swap-page": 5146,
        "./smart-transaction-status": 5170,
        "./swaps.util": 5179,
        "./view-quote": 5183,
        "@metamask/transaction-controller": 1835,
        classnames: 2414,
        lodash: 3312,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    var e, t, a, N;
                    const R = (0, n.useContext)(u.I18nContext),
                      F = (0, s.useHistory)(),
                      L = (0, r.useDispatch)(),
                      D = (0, n.useContext)(w.MetaMetricsContext),
                      { pathname: j } = (0, s.useLocation)(),
                      q = j === f.AWAITING_SWAP_ROUTE,
                      W = j === f.AWAITING_SIGNATURES_ROUTE,
                      U = j === f.SWAPS_ERROR_ROUTE,
                      B = j === f.LOADING_QUOTES_ROUTE,
                      G = j === f.SMART_TRANSACTION_STATUS_ROUTE,
                      H = j === f.VIEW_QUOTE_ROUTE,
                      V = j === f.PREPARE_SWAP_ROUTE,
                      [$, Q] = (0, n.useState)(!1),
                      X = (0, r.useSelector)(d.getFetchParams, o.isEqual),
                      { destinationTokenInfo: Z = {} } = (null == X ? void 0 : X.metaData) || {},
                      K = (0, r.useSelector)(d.getBackgroundSwapRouteState),
                      Y = (0, r.useSelector)(c.getSelectedAccount, r.shallowEqual),
                      z = (0, r.useSelector)(d.getQuotes, o.isEqual),
                      J = (0, r.useSelector)(d.getLatestAddedTokenTo, o.isEqual),
                      ee = (0, r.useSelector)(p.getCurrentNetworkTransactions, r.shallowEqual),
                      te = (0, r.useSelector)(d.getTradeTxId),
                      ae = (0, r.useSelector)(d.getApproveTxId),
                      ne = (0, r.useSelector)(d.getAggregatorMetadata, r.shallowEqual),
                      re = (0, r.useSelector)(d.getFetchingQuotes);
                    let se = (0, r.useSelector)(d.getSwapsErrorKey);
                    const oe = (0, r.useSelector)(d.getSwapsFeatureIsLive),
                      le = (0, r.useSelector)(c.getCurrentChainId),
                      ie = (0, r.useSelector)(c.getIsSwapsChain),
                      ue = (0, r.useSelector)(p.checkNetworkAndAccountSupports1559),
                      ce = (0, r.useSelector)(c.getTokenList, o.isEqual),
                      de = (0, o.shuffle)(Object.values(ce)),
                      pe = (0, r.useSelector)(d.getReviewSwapClickedTimestamp),
                      fe = (0, r.useSelector)(d.getPendingSmartTransactions),
                      me = Boolean(pe),
                      ge = (0, r.useSelector)(d.getSmartTransactionsOptInStatus),
                      he = (0, r.useSelector)(d.getSmartTransactionsEnabled),
                      _e = (0, r.useSelector)(d.getCurrentSmartTransactionsEnabled),
                      Ee = (0, r.useSelector)(d.getSwapRedesignEnabled),
                      we = (0, r.useSelector)(d.getCurrentSmartTransactionsError);
                    (0, n.useEffect)(() => {
                      ie ||
                        (async () => {
                          await L((0, d.prepareToLeaveSwaps)()), F.push(f.DEFAULT_ROUTE);
                        })();
                    }, [ie, L, F]),
                      (0, h.useGasFeeEstimates)();
                    const { balance: ve, address: ye } = Y,
                      Te = ae && ee.find(({ id: e }) => ae === e),
                      be = te && ee.find(({ id: e }) => te === e),
                      Se =
                        (null == be ? void 0 : be.txReceipt) &&
                        (0, v.getSwapsTokensReceivedFromTxMeta)(
                          null == Z ? void 0 : Z.symbol,
                          be,
                          null == Z ? void 0 : Z.address,
                          ye,
                          null == Z ? void 0 : Z.decimals,
                          Te,
                          le
                        ),
                      ke = (null == be ? void 0 : be.status) === i.TransactionStatus.confirmed,
                      Ce =
                        (null == Te ? void 0 : Te.status) === i.TransactionStatus.failed ||
                        "0x0" === (null == Te || null === (e = Te.txReceipt) || void 0 === e ? void 0 : e.status),
                      xe =
                        (null == be ? void 0 : be.status) === i.TransactionStatus.failed ||
                        "0x0" === (null == be || null === (t = be.txReceipt) || void 0 === t ? void 0 : t.status),
                      Oe = Ce || xe;
                    Oe && se !== m.CONTRACT_DATA_DISABLED_ERROR && (se = m.SWAP_FAILED_ERROR);
                    const Ie = (0, n.useRef)();
                    (0, n.useEffect)(() => {
                      Ie.current = () => {
                        !J || (q && !Oe) || L((0, g.ignoreTokens)({ tokensToIgnore: J, dontShowLoadingIndicator: !0 }));
                      };
                    }, [Oe, L, J, Z, X, q]),
                      (0, n.useEffect)(
                        () => () => {
                          Ie.current();
                        },
                        []
                      ),
                      (0, n.useEffect)(
                        () =>
                          ie
                            ? ((0, S.fetchTokens)(le)
                                .then((e) => {
                                  L((0, g.setSwapsTokens)(e));
                                })
                                .catch((e) => console.error(e)),
                              (0, S.fetchTopAssets)(le).then((e) => {
                                L((0, d.setTopAssets)(e));
                              }),
                              (0, S.fetchAggregatorMetadata)(le).then((e) => {
                                L((0, d.setAggregatorMetadata)(e));
                              }),
                              ue || L((0, d.fetchAndSetSwapsGasPriceInfo)(le)),
                              () => {
                                L((0, d.prepareToLeaveSwaps)());
                              })
                            : undefined,
                        [L, le, ue, ie]
                      );
                    const Pe = (0, r.useSelector)(c.isHardwareWallet),
                      Ae = (0, r.useSelector)(c.getHardwareWalletType),
                      Me = (0, n.useRef)();
                    (0, n.useEffect)(() => {
                      Me.current = () => {
                        var e, t;
                        D({
                          event: "Exited Swaps",
                          category: E.MetaMetricsEventCategory.Swaps,
                          sensitiveProperties: {
                            token_from: null == X || null === (e = X.sourceTokenInfo) || void 0 === e ? void 0 : e.symbol,
                            token_from_amount: null == X ? void 0 : X.value,
                            request_type: null == X ? void 0 : X.balanceError,
                            token_to: null == X || null === (t = X.destinationTokenInfo) || void 0 === t ? void 0 : t.symbol,
                            slippage: null == X ? void 0 : X.slippage,
                            custom_slippage: 2 !== (null == X ? void 0 : X.slippage),
                            current_screen: j.match(/\/swaps\/(.+)/u)[1],
                            is_hardware_wallet: Pe,
                            hardware_wallet_type: Ae,
                            stx_enabled: he,
                            current_stx_enabled: _e,
                            stx_user_opt_in: ge
                          }
                        });
                      };
                    }),
                      (0, n.useEffect)(
                        () => (
                          (async () => {
                            await L((0, d.fetchSwapsLivenessAndFeatureFlags)());
                          })(),
                          () => {
                            Me.current();
                          }
                        ),
                        [L]
                      ),
                      (0, n.useEffect)(() => {
                        se && !U && me && F.push(f.SWAPS_ERROR_ROUTE);
                      }, [F, se, U, me]);
                    const Ne = (0, n.useRef)();
                    (0, n.useEffect)(() => {
                      const e = () => (Ie.current(), B && L((0, d.prepareToLeaveSwaps)()), null);
                      return (
                        B && !Ne.current && ((Ne.current = !0), window.addEventListener("beforeunload", e)),
                        () => window.removeEventListener("beforeunload", e)
                      );
                    }, [L, B]);
                    const Re = (0, n.useCallback)(() => {
                      var e, t;
                      D({
                        event: "Error Smart Transactions",
                        category: E.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: {
                          token_from: null == X || null === (e = X.sourceTokenInfo) || void 0 === e ? void 0 : e.symbol,
                          token_from_amount: null == X ? void 0 : X.value,
                          request_type: null == X ? void 0 : X.balanceError,
                          token_to: null == X || null === (t = X.destinationTokenInfo) || void 0 === t ? void 0 : t.symbol,
                          slippage: null == X ? void 0 : X.slippage,
                          custom_slippage: 2 !== (null == X ? void 0 : X.slippage),
                          current_screen: j.match(/\/swaps\/(.+)/u)[1],
                          is_hardware_wallet: Pe,
                          hardware_wallet_type: Ae,
                          stx_enabled: he,
                          current_stx_enabled: _e,
                          stx_user_opt_in: ge,
                          stx_error: we
                        }
                      });
                    }, [
                      we,
                      _e,
                      D,
                      null == X ? void 0 : X.balanceError,
                      null == X || null === (a = X.destinationTokenInfo) || void 0 === a ? void 0 : a.symbol,
                      null == X ? void 0 : X.slippage,
                      null == X || null === (N = X.sourceTokenInfo) || void 0 === N ? void 0 : N.symbol,
                      null == X ? void 0 : X.value,
                      Ae,
                      Pe,
                      j,
                      he,
                      ge
                    ]);
                    if (
                      ((0, n.useEffect)(() => {
                        we && !$ && (Q(!0), Re());
                      }, [we, Re, $]),
                      !ie)
                    )
                      return n.default.createElement(n.default.Fragment, null);
                    const Fe = async () => {
                      Ie.current(),
                        F.push({ pathname: f.DEFAULT_ROUTE, state: { stayOnHomePage: !0 } }),
                        L((0, d.clearSwapsState)()),
                        await L((0, g.resetBackgroundSwapsState)());
                    };
                    return n.default.createElement(
                      "div",
                      { className: "swaps" },
                      n.default.createElement(
                        "div",
                        { className: "swaps__container" },
                        n.default.createElement(
                          "div",
                          { className: "swaps__header" },
                          !Ee &&
                            n.default.createElement(
                              "div",
                              {
                                className: "swaps__header-edit",
                                onClick: async () => {
                                  await L((0, d.navigateBackToBuildQuote)(F));
                                }
                              },
                              H && R("edit")
                            ),
                          Ee &&
                            n.default.createElement(
                              T.default,
                              {
                                display: b.DISPLAY.FLEX,
                                justifyContent: b.JustifyContent.center,
                                marginLeft: 4,
                                width: b.FRACTIONS.ONE_TWELFTH,
                                tabIndex: "0",
                                onKeyUp: (e) => {
                                  "Enter" === e.key && Fe();
                                }
                              },
                              !q &&
                                !W &&
                                !G &&
                                n.default.createElement(y.Icon, {
                                  name: y.IconName.Arrow2Left,
                                  size: y.IconSize.Lg,
                                  color: b.IconColor.iconAlternative,
                                  onClick: Fe,
                                  style: { cursor: "pointer" },
                                  title: R("cancel")
                                })
                            ),
                          n.default.createElement("div", { className: "swaps__title" }, R("swap")),
                          !Ee &&
                            n.default.createElement(
                              "div",
                              {
                                className: "swaps__header-cancel",
                                onClick: async () => {
                                  Ie.current(),
                                    L((0, d.clearSwapsState)()),
                                    await L((0, g.resetBackgroundSwapsState)()),
                                    F.push(f.DEFAULT_ROUTE);
                                }
                              },
                              !q && !W && !G && R("cancel")
                            ),
                          Ee &&
                            n.default.createElement(
                              T.default,
                              {
                                display: b.DISPLAY.FLEX,
                                justifyContent: b.JustifyContent.center,
                                marginRight: 4,
                                width: b.FRACTIONS.ONE_TWELFTH,
                                tabIndex: "0",
                                onKeyUp: (e) => {
                                  "Enter" === e.key && L((0, d.setTransactionSettingsOpened)(!0));
                                }
                              },
                              V &&
                                n.default.createElement(y.Icon, {
                                  name: y.IconName.Setting,
                                  size: y.IconSize.Lg,
                                  color: b.IconColor.iconAlternative,
                                  onClick: () => {
                                    L((0, d.setTransactionSettingsOpened)(!0));
                                  },
                                  style: { cursor: "pointer" },
                                  title: R("transactionSettings")
                                })
                            )
                        ),
                        n.default.createElement(
                          "div",
                          { className: (0, l.default)("swaps__content", { "swaps__content--redesign-enabled": Ee }) },
                          n.default.createElement(
                            s.Switch,
                            null,
                            n.default.createElement(_.default, {
                              redirectRoute: f.SWAPS_MAINTENANCE_ROUTE,
                              flag: oe,
                              path: f.BUILD_QUOTE_ROUTE,
                              exact: !0,
                              render: () =>
                                Ee
                                  ? n.default.createElement(s.Redirect, { to: { pathname: f.PREPARE_SWAP_ROUTE } })
                                  : be && !Oe
                                  ? n.default.createElement(s.Redirect, { to: { pathname: f.AWAITING_SWAP_ROUTE } })
                                  : be && K
                                  ? n.default.createElement(s.Redirect, { to: { pathname: f.SWAPS_ERROR_ROUTE } })
                                  : "loading" === K && ne
                                  ? n.default.createElement(s.Redirect, { to: { pathname: f.LOADING_QUOTES_ROUTE } })
                                  : n.default.createElement(I.default, {
                                      ethBalance: ve,
                                      selectedAccountAddress: ye,
                                      shuffledTokensList: de
                                    })
                            }),
                            n.default.createElement(_.default, {
                              redirectRoute: f.SWAPS_MAINTENANCE_ROUTE,
                              flag: oe,
                              path: f.PREPARE_SWAP_ROUTE,
                              exact: !0,
                              render: () =>
                                Ee
                                  ? n.default.createElement(P.default, {
                                      ethBalance: ve,
                                      selectedAccountAddress: ye,
                                      shuffledTokensList: de
                                    })
                                  : n.default.createElement(s.Redirect, { to: { pathname: f.BUILD_QUOTE_ROUTE } })
                            }),
                            n.default.createElement(_.default, {
                              redirectRoute: f.SWAPS_MAINTENANCE_ROUTE,
                              flag: oe,
                              path: f.VIEW_QUOTE_ROUTE,
                              exact: !0,
                              render: () =>
                                fe.length > 0 && "smartTransactionStatus" === K
                                  ? n.default.createElement(s.Redirect, { to: { pathname: f.SMART_TRANSACTION_STATUS_ROUTE } })
                                  : Ee
                                  ? n.default.createElement(s.Redirect, { to: { pathname: f.PREPARE_SWAP_ROUTE } })
                                  : Object.values(z).length
                                  ? n.default.createElement(M.default, { numberOfQuotes: Object.values(z).length })
                                  : X
                                  ? n.default.createElement(s.Redirect, { to: { pathname: f.SWAPS_ERROR_ROUTE } })
                                  : n.default.createElement(s.Redirect, { to: { pathname: f.BUILD_QUOTE_ROUTE } })
                            }),
                            n.default.createElement(s.Route, {
                              path: f.SWAPS_ERROR_ROUTE,
                              exact: !0,
                              render: () =>
                                se
                                  ? n.default.createElement(x.default, {
                                      swapComplete: !1,
                                      errorKey: se,
                                      txHash: null == be ? void 0 : be.hash,
                                      txId: null == be ? void 0 : be.id,
                                      submittedTime: null == be ? void 0 : be.submittedTime
                                    })
                                  : n.default.createElement(s.Redirect, { to: { pathname: f.BUILD_QUOTE_ROUTE } })
                            }),
                            n.default.createElement(s.Route, {
                              path: f.SWAPS_NOTIFICATION_ROUTE,
                              exact: !0,
                              render: () =>
                                se
                                  ? n.default.createElement(A.default, { notificationKey: se })
                                  : n.default.createElement(s.Redirect, { to: { pathname: f.PREPARE_SWAP_ROUTE } })
                            }),
                            n.default.createElement(_.default, {
                              redirectRoute: f.SWAPS_MAINTENANCE_ROUTE,
                              flag: oe,
                              path: f.LOADING_QUOTES_ROUTE,
                              exact: !0,
                              render: () =>
                                ne
                                  ? n.default.createElement(O.default, {
                                      loadingComplete: !re && Boolean(Object.values(z).length),
                                      onDone: async () => {
                                        await L((0, g.setBackgroundSwapRouteState)("")),
                                          se === m.ERROR_FETCHING_QUOTES || se === m.QUOTES_NOT_AVAILABLE_ERROR
                                            ? (L((0, g.setSwapsErrorKey)(m.QUOTES_NOT_AVAILABLE_ERROR)), F.push(f.SWAPS_ERROR_ROUTE))
                                            : F.push(f.VIEW_QUOTE_ROUTE);
                                      },
                                      aggregatorMetadata: ne
                                    })
                                  : n.default.createElement(s.Redirect, { to: { pathname: f.BUILD_QUOTE_ROUTE } })
                            }),
                            n.default.createElement(s.Route, {
                              path: f.SWAPS_MAINTENANCE_ROUTE,
                              exact: !0,
                              render: () =>
                                !1 === oe
                                  ? n.default.createElement(x.default, { errorKey: m.OFFLINE_FOR_MAINTENANCE })
                                  : n.default.createElement(s.Redirect, { to: { pathname: f.BUILD_QUOTE_ROUTE } })
                            }),
                            n.default.createElement(s.Route, {
                              path: f.AWAITING_SIGNATURES_ROUTE,
                              exact: !0,
                              render: () => n.default.createElement(k.default, null)
                            }),
                            n.default.createElement(s.Route, {
                              path: f.SMART_TRANSACTION_STATUS_ROUTE,
                              exact: !0,
                              render: () => n.default.createElement(C.default, { txId: null == be ? void 0 : be.id })
                            }),
                            n.default.createElement(s.Route, {
                              path: f.AWAITING_SWAP_ROUTE,
                              exact: !0,
                              render: () =>
                                "awaiting" === K || be
                                  ? n.default.createElement(x.default, {
                                      swapComplete: ke,
                                      txHash: null == be ? void 0 : be.hash,
                                      tokensReceived: Se,
                                      txId: null == be ? void 0 : be.id,
                                      submittingSwap: "awaiting" === K && !(ae || te)
                                    })
                                  : n.default.createElement(s.Redirect, { to: { pathname: f.DEFAULT_ROUTE } })
                            })
                          )
                        )
                      )
                    );
                  });
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = R(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = e("lodash"),
                  l = N(e("classnames")),
                  i = e("@metamask/transaction-controller"),
                  u = e("../../contexts/i18n"),
                  c = e("../../selectors/selectors"),
                  d = e("../../ducks/swaps/swaps"),
                  p = e("../../selectors"),
                  f = e("../../helpers/constants/routes"),
                  m = e("../../../shared/constants/swaps"),
                  g = e("../../store/actions"),
                  h = e("../../hooks/useGasFeeEstimates"),
                  _ = N(e("../../helpers/higher-order-components/feature-toggled-route")),
                  E = e("../../../shared/constants/metametrics"),
                  w = e("../../contexts/metametrics"),
                  v = e("../../../shared/lib/transactions-controller-utils"),
                  y = e("../../components/component-library"),
                  T = N(e("../../components/ui/box")),
                  b = e("../../helpers/constants/design-system"),
                  S = e("./swaps.util"),
                  k = N(e("./awaiting-signatures")),
                  C = N(e("./smart-transaction-status")),
                  x = N(e("./awaiting-swap")),
                  O = N(e("./loading-swaps-quotes")),
                  I = N(e("./build-quote")),
                  P = N(e("./prepare-swap-page/prepare-swap-page")),
                  A = N(e("./notification-page/notification-page")),
                  M = N(e("./view-quote"));
                function N(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function R(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (R = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/index.js" }
    ],
    [
      5138,
      {
        "../../../../shared/modules/hexstring-utils": 3993,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../../../selectors/selectors": 5200,
        "../searchable-item-list/item-list": 5153,
        "../swaps.util": 5179,
        lodash: 3312,
        loglevel: 3322,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = w);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = _(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = h(e("prop-types")),
                  o = e("lodash"),
                  l = h(e("loglevel")),
                  i = h(e("../../../components/ui/box")),
                  u = e("../../../helpers/constants/design-system"),
                  c = e("../../../components/component-library"),
                  d = h(e("../searchable-item-list/item-list")),
                  p = e("../../../../shared/modules/hexstring-utils"),
                  f = e("../../../contexts/i18n"),
                  m = e("../swaps.util"),
                  g = e("../../../selectors/selectors");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function _(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (_ = function (e) {
                    return e ? a : t;
                  })(e);
                }
                let E;
                function w({
                  itemsToSearch: e = [],
                  listTitle: t,
                  maxListItems: a,
                  onClickItem: s,
                  onOpenImportTokenModalClick: h,
                  shouldSearchForImports: _,
                  Placeholder: w,
                  hideRightLabels: v,
                  hideItemIf: y,
                  listContainerClassName: T,
                  searchQuery: b,
                  setSearchQuery: S
                }) {
                  const k = (0, n.useRef)(),
                    C = (0, n.useContext)(f.I18nContext),
                    [x, O] = (0, n.useState)(e),
                    I = (0, r.useSelector)(g.getCurrentChainId),
                    P = async (t) => {
                      S(t),
                        E && clearTimeout(E),
                        (E = setTimeout(async () => {
                          E = null;
                          const a = t.trim(),
                            n = a.toUpperCase(),
                            r = a.toLowerCase();
                          if (!a) return void O(e);
                          const s = (0, p.isValidHexAddress)(a);
                          let i = [];
                          if (s) {
                            const t = e.find((e) => e.address === r);
                            t && i.push(t);
                          } else
                            i = (0, o.filter)(e, function (e) {
                              return e.symbol.includes(n);
                            });
                          const u = "" === t ? e : i;
                          _ && 0 === u.length && s
                            ? await (async (e) => {
                                try {
                                  const t = await (0, m.fetchToken)(e, I);
                                  if (t) return (t.primaryLabel = t.symbol), (t.secondaryLabel = t.name), (t.notImported = !0), void O([t]);
                                } catch (e) {
                                  l.default.error("Token not found, show 0 results.", e);
                                }
                                O([]);
                              })(a)
                            : O(u);
                        }, 350));
                    };
                  (0, n.useEffect)(() => {
                    P(b);
                  }, [b]);
                  return n.default.createElement(
                    i.default,
                    { className: "list-with-search", width: u.BlockSize.Full, tabIndex: "0" },
                    n.default.createElement(
                      i.default,
                      { style: { gridColumnStart: 1, gridColumnEnd: 3 }, display: u.Display.Flex, flexDirection: u.FlexDirection.Column },
                      n.default.createElement(c.TextFieldSearch, {
                        id: "list-with-search__text-search",
                        marginBottom: 4,
                        onChange: (e) => P(e.target.value),
                        clearButtonOnClick: () => {
                          S("");
                        },
                        value: b,
                        placeholder: C("enterTokenNameOrAddress"),
                        inputProps: { marginRight: 0 },
                        className: "list-with-search__text-search",
                        autoFocus: !0,
                        tabIndex: "0"
                      })
                    ),
                    (null == x ? void 0 : x.length) > 0 &&
                      n.default.createElement(d.default, {
                        searchQuery: b,
                        results: x,
                        onClickItem: s,
                        onOpenImportTokenModalClick: h,
                        Placeholder: w,
                        listTitle: t,
                        maxListItems: a,
                        containerRef: k,
                        hideRightLabels: v,
                        hideItemIf: y,
                        listContainerClassName: T
                      }),
                    0 === (null == x ? void 0 : x.length) &&
                      n.default.createElement(
                        i.default,
                        {
                          marginTop: 1,
                          marginBottom: 5,
                          display: u.Display.Flex,
                          justifyContent: u.JustifyContent.center,
                          alignItems: u.AlignItems.center
                        },
                        n.default.createElement(c.Text, { variant: u.TextVariant.bodyMd, as: "h6" }, C("swapNoTokensAvailable", [b]))
                      )
                  );
                }
                w.propTypes = {
                  itemsToSearch: s.default.array,
                  onClickItem: s.default.func,
                  onOpenImportTokenModalClick: s.default.func,
                  Placeholder: s.default.func,
                  listTitle: s.default.string,
                  maxListItems: s.default.number,
                  hideRightLabels: s.default.bool,
                  shouldSearchForImports: s.default.bool,
                  hideItemIf: s.default.func,
                  listContainerClassName: s.default.string,
                  searchQuery: s.default.string,
                  setSearchQuery: s.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/list-with-search/list-with-search.js" }
    ],
    [
      5139,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    return r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(
                        "div",
                        { className: "loading-swaps-quotes__background-1", "data-testid": "loading-swaps-quotes-background-1" },
                        r.default.createElement(
                          "svg",
                          { width: "193", height: "190", viewBox: "0 0 193 190", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                          r.default.createElement("path", {
                            d: "M153.753 53.876C153.595 53.9493 153.419 54.0161 153.25 54.0651C151.081 54.7451 148.777 53.538 148.086 51.3768C147.763 50.3298 147.851 49.2109 148.361 48.2363C148.87 47.2618 149.732 46.5374 150.78 46.2144C151.828 45.8913 152.948 45.9781 153.923 46.4865C154.898 46.9949 155.622 47.8557 155.944 48.9027C156.567 50.918 155.592 53.0243 153.753 53.876ZM150.817 47.5708C150.245 47.8359 149.782 48.2721 149.495 48.8334C149.144 49.5127 149.073 50.2843 149.303 51.0047C149.774 52.4998 151.375 53.3384 152.877 52.8787C154.374 52.4069 155.215 50.8063 154.756 49.3056C154.526 48.5852 154.027 47.9888 153.36 47.6334C152.68 47.2836 151.908 47.213 151.187 47.4437C151.049 47.4636 150.927 47.52 150.817 47.5708Z",
                            fill: "#86E29B"
                          }),
                          r.default.createElement("path", {
                            d: "M18.3624 73.9241C18.3015 73.9523 18.2407 73.9805 18.1798 74.0087C17.0495 74.4733 15.8073 74.4728 14.6751 74.0078C12.3517 73.0461 11.2387 70.3567 12.2031 68.0341C13.1676 65.7115 15.8598 64.5971 18.1833 65.5589C19.3155 66.0239 20.1951 66.9013 20.6591 68.0304C21.123 69.1595 21.1215 70.4008 20.6552 71.5326C20.2207 72.6053 19.4093 73.4391 18.3624 73.9241ZM15.0433 66.7921C14.3129 67.1305 13.713 67.7186 13.3766 68.5243C12.6776 70.207 13.4834 72.1377 15.1666 72.8348C15.9849 73.1647 16.8786 73.1789 17.6933 72.831C18.5136 72.4952 19.1388 71.8659 19.4818 71.0424C19.8126 70.2245 19.8276 69.3313 19.4801 68.5175C19.1448 67.6981 18.5155 67.0739 17.6917 66.7319C16.8144 66.3703 15.8589 66.4142 15.0433 66.7921Z",
                            fill: "#FFB0EB"
                          }),
                          r.default.createElement("path", {
                            d: "M116.617 37.3839C117.397 37.0226 117.736 36.0982 117.375 35.3192C117.015 34.5402 116.09 34.2016 115.31 34.5629C114.53 34.9243 114.19 35.8487 114.551 36.6277C114.912 37.4067 115.837 37.7453 116.617 37.3839Z",
                            fill: "url(#paint0_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M55.1317 91.7213C55.9116 91.36 56.2512 90.4356 55.8903 89.6566C55.5294 88.8776 54.6046 88.539 53.8247 88.9003C53.0448 89.2617 52.7052 90.1861 53.0661 90.9651C53.427 91.7441 54.3518 92.0827 55.1317 91.7213Z",
                            fill: "url(#paint1_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M31.9932 126.235C32.7731 125.874 33.1127 124.95 32.7518 124.171C32.3909 123.392 31.4661 123.053 30.6863 123.414C29.9064 123.776 29.5667 124.7 29.9277 125.479C30.2886 126.258 31.2134 126.597 31.9932 126.235Z",
                            fill: "url(#paint2_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M119.43 132.589C120.21 132.228 120.55 131.304 120.189 130.525C119.828 129.746 118.903 129.407 118.123 129.768C117.344 130.13 117.004 131.054 117.365 131.833C117.726 132.612 118.651 132.951 119.43 132.589Z",
                            fill: "url(#paint3_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M44.7469 47.3835C46.0108 46.7979 46.5612 45.2997 45.9763 44.0372C45.3914 42.7747 43.8926 42.2259 42.6286 42.8115C41.3647 43.3971 40.8143 44.8953 41.3992 46.1578C41.9841 47.4203 43.4829 47.9691 44.7469 47.3835Z",
                            fill: "url(#paint4_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M105.107 90.7857C106.371 90.2001 106.922 88.702 106.337 87.4394C105.752 86.1769 104.253 85.6282 102.989 86.2137C101.725 86.7993 101.175 88.2975 101.76 89.56C102.344 90.8226 103.843 91.3713 105.107 90.7857Z",
                            fill: "url(#paint5_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M95.5179 172.376C96.7818 171.791 97.3322 170.293 96.7473 169.03C96.1624 167.767 94.6636 167.219 93.3996 167.804C92.1357 168.39 91.5853 169.888 92.1702 171.151C92.7551 172.413 94.2539 172.962 95.5179 172.376Z",
                            fill: "url(#paint6_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M165.098 102.367C166.362 101.781 166.912 100.283 166.327 99.0205C165.742 97.758 164.244 97.2092 162.98 97.7948C161.716 98.3804 161.165 99.8786 161.75 101.141C162.335 102.404 163.834 102.952 165.098 102.367Z",
                            fill: "url(#paint7_linear)"
                          }),
                          r.default.createElement(
                            "defs",
                            null,
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint0_linear",
                                x1: "114.554",
                                y1: "36.6326",
                                x2: "117.379",
                                y2: "35.3237",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint1_linear",
                                x1: "53.0688",
                                y1: "90.97",
                                x2: "55.8937",
                                y2: "89.6611",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint2_linear",
                                x1: "29.9283",
                                y1: "125.483",
                                x2: "32.7532",
                                y2: "124.174",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint3_linear",
                                x1: "117.365",
                                y1: "131.837",
                                x2: "120.19",
                                y2: "130.528",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint4_linear",
                                x1: "41.4394",
                                y1: "46.2402",
                                x2: "45.947",
                                y2: "43.9537",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint5_linear",
                                x1: "101.8",
                                y1: "89.6425",
                                x2: "106.307",
                                y2: "87.356",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint6_linear",
                                x1: "92.2104",
                                y1: "171.233",
                                x2: "96.718",
                                y2: "168.947",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint7_linear",
                                x1: "161.79",
                                y1: "101.224",
                                x2: "166.298",
                                y2: "98.937",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            )
                          )
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "loading-swaps-quotes__background-2", "data-testid": "loading-swaps-quotes-background-2" },
                        r.default.createElement(
                          "svg",
                          { width: "195", height: "205", viewBox: "0 0 195 205", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                          r.default.createElement("path", {
                            d: "M29.84 121.982C30.0408 121.969 30.245 122.01 30.4258 122.106L46.4233 130.275C46.8125 130.478 47.0536 130.893 47.0402 131.324C47.0143 131.768 46.7423 132.148 46.3356 132.308L24.5484 140.937C24.1417 141.097 23.6789 141.005 23.3642 140.702C23.0495 140.4 22.9398 139.937 23.0753 139.525L28.8651 122.727C28.9671 122.426 29.2065 122.169 29.5086 122.056C29.614 122.023 29.7194 121.989 29.84 121.982ZM43.1981 131.148L30.5607 124.689L25.9884 137.96L43.1981 131.148Z",
                            fill: "#75C4FD"
                          }),
                          r.default.createElement("path", {
                            d: "M168.214 54.3381C168.442 54.3238 168.674 54.3764 168.869 54.485C169.217 54.6781 169.44 55.0266 169.465 55.4145L170.59 68.4358C170.631 68.8763 170.416 69.3061 170.041 69.5444C169.666 69.7827 169.182 69.7862 168.805 69.5681L156.14 62.2246C155.763 62.0065 155.535 61.5911 155.548 61.1472C155.56 60.7033 155.818 60.3112 156.209 60.1122L167.75 54.4343C167.908 54.3841 168.067 54.3473 168.214 54.3381ZM168.027 66.3674L167.248 57.3661L159.267 61.2902L168.027 66.3674Z",
                            fill: "#FFB0EB"
                          }),
                          r.default.createElement("path", {
                            d: "M88.6283 16.6885C88.8694 16.6734 89.1154 16.7385 89.3255 16.873L100.21 24.1133C100.561 24.3464 100.762 24.7635 100.708 25.1832C100.653 25.6028 100.381 25.969 99.9864 26.1146L86.3391 31.4276C85.9449 31.5731 85.5106 31.5064 85.1842 31.2314C84.8712 30.9556 84.7239 30.5352 84.8192 30.1264L87.5815 17.5731C87.666 17.2053 87.9162 16.9076 88.2702 16.7646C88.3882 16.7169 88.5078 16.696 88.6283 16.6885ZM97.1342 24.7894L89.4471 19.6718L87.5021 28.5349L97.1342 24.7894Z",
                            fill: "url(#paint0_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M117.145 183.156C116.944 183.289 116.698 183.356 116.449 183.344L103.402 182.517C102.982 182.49 102.6 182.229 102.437 181.839C102.274 181.448 102.327 180.995 102.596 180.671L111.758 169.247C112.027 168.923 112.436 168.764 112.856 168.839C113.265 168.921 113.603 169.212 113.725 169.614L117.609 181.866C117.72 182.227 117.652 182.61 117.417 182.911C117.339 183.011 117.246 183.089 117.145 183.156ZM105.728 180.393L114.944 180.981L112.197 172.333L105.728 180.393Z",
                            fill: "url(#paint1_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M38.0816 74.0208C38.1217 74.0183 38.1485 74.0166 38.1887 74.0141C42.3831 73.805 45.9744 77.0577 46.1831 81.2474C46.3919 85.4371 43.1484 89.0241 38.9407 89.234C34.7463 89.4431 31.1549 86.1904 30.9462 82.0007C30.7391 77.8377 33.9307 74.2809 38.0816 74.0208ZM38.9104 87.2486C41.9767 87.0565 44.3523 84.4236 44.1997 81.3448C44.0455 78.2393 41.3949 75.8407 38.2859 75.9952C35.1761 76.1364 32.7753 78.7977 32.9296 81.9033C33.0838 85.0088 35.7344 87.4073 38.8434 87.2528C38.8568 87.252 38.8836 87.2503 38.9104 87.2486Z",
                            fill: "#86E29B"
                          }),
                          r.default.createElement("path", {
                            d: "M162.178 97.8401C162.218 97.8376 162.245 97.8359 162.285 97.8334C166.48 97.6243 170.071 100.877 170.28 105.067C170.489 109.256 167.245 112.843 163.037 113.053C158.843 113.262 155.252 110.01 155.043 105.82C154.836 101.657 158.027 98.1002 162.178 97.8401ZM163.007 111.068C166.073 110.876 168.449 108.243 168.296 105.164C168.142 102.059 165.492 99.6601 162.383 99.8146C159.273 99.9557 156.872 102.617 157.026 105.723C157.181 108.828 159.831 111.227 162.94 111.072C162.953 111.071 162.98 111.07 163.007 111.068Z",
                            fill: "#86E29B"
                          }),
                          r.default.createElement(
                            "defs",
                            null,
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint0_linear",
                                x1: "100.609",
                                y1: "23.2611",
                                x2: "84.4152",
                                y2: "24.2757",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#FFE466" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#FFAFEA" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint1_linear",
                                x1: "103.812",
                                y1: "183.939",
                                x2: "116.959",
                                y2: "174.66",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "0.0928503", stopColor: "#81C2F6" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#F0B8BD" })
                            )
                          )
                        )
                      )
                    );
                  });
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/loading-swaps-quotes/background-animation.js" }
    ],
    [
      5140,
      { "./loading-swaps-quotes": 5141 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./loading-swaps-quotes")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/loading-swaps-quotes/index.js" }
    ],
    [
      5141,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/ui/mascot": 4679,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/swaps/swaps": 4767,
        "../../../selectors/selectors": 5200,
        "../swaps-footer": 5177,
        "./background-animation": 5139,
        events: 2745,
        lodash: 3312,
        "lodash/isEqual": 3300,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = v);
                var n = w(e("events")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = E(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = e("react-redux"),
                  o = w(e("prop-types")),
                  l = e("lodash"),
                  i = e("react-router-dom"),
                  u = w(e("lodash/isEqual")),
                  c = e("../../../ducks/swaps/swaps"),
                  d = e("../../../selectors/selectors"),
                  p = e("../../../contexts/i18n"),
                  f = e("../../../contexts/metametrics"),
                  m = w(e("../../../components/ui/mascot")),
                  g = e("../../../../shared/constants/metametrics"),
                  h = w(e("../swaps-footer")),
                  _ = w(e("./background-animation"));
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (E = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function w(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v({ aggregatorMetadata: e, loadingComplete: t, onDone: a }) {
                  var o, E;
                  const w = (0, r.useContext)(p.I18nContext),
                    v = (0, r.useContext)(f.MetaMetricsContext),
                    y = (0, s.useDispatch)(),
                    T = (0, i.useHistory)(),
                    b = (0, r.useRef)(new n.default()),
                    S = (0, s.useSelector)(c.getFetchParams, u.default),
                    k = (0, s.useSelector)(c.getQuotesFetchStartTime),
                    C = (0, s.useSelector)(d.isHardwareWallet),
                    x = (0, s.useSelector)(d.getHardwareWalletType),
                    O = (0, s.useSelector)(c.getSmartTransactionsOptInStatus),
                    I = (0, s.useSelector)(c.getSmartTransactionsEnabled),
                    P = (0, s.useSelector)(c.getCurrentSmartTransactionsEnabled),
                    A = {
                      event: "Quotes Request Cancelled",
                      category: g.MetaMetricsEventCategory.Swaps,
                      sensitiveProperties: {
                        token_from: null == S || null === (o = S.sourceTokenInfo) || void 0 === o ? void 0 : o.symbol,
                        token_from_amount: null == S ? void 0 : S.value,
                        request_type: null == S ? void 0 : S.balanceError,
                        token_to: null == S || null === (E = S.destinationTokenInfo) || void 0 === E ? void 0 : E.symbol,
                        slippage: null == S ? void 0 : S.slippage,
                        custom_slippage: 2 !== (null == S ? void 0 : S.slippage),
                        response_time: Date.now() - k,
                        is_hardware_wallet: C,
                        hardware_wallet_type: x,
                        stx_enabled: I,
                        current_stx_enabled: P,
                        stx_user_opt_in: O
                      }
                    },
                    [M] = (0, r.useState)(() => (0, l.shuffle)(Object.keys(e))),
                    N = M.length,
                    R = (0, r.useRef)(),
                    F = R.current,
                    [L, D] = (0, r.useState)(0),
                    [j, q] = (0, r.useState)(null);
                  return (
                    (0, r.useEffect)(() => {
                      let e;
                      e = t ? 20 : 500 + Math.floor(1500 * Math.random());
                      const n = setTimeout(() => {
                        L < N ? D(L + 1) : L === N && t && a();
                      }, e);
                      return function () {
                        clearTimeout(n);
                      };
                    }, [L, t, a, N]),
                    (0, r.useEffect)(() => {
                      if (F) {
                        const { top: e, left: t, width: a, height: n } = F.getBoundingClientRect();
                        q({ x: t + a / 2, y: e + n / 2 });
                      }
                    }, [F]),
                    r.default.createElement(
                      "div",
                      { className: "loading-swaps-quotes" },
                      r.default.createElement(
                        "div",
                        { className: "loading-swaps-quotes__content" },
                        r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(
                            "div",
                            { className: "loading-swaps-quotes__quote-counter" },
                            r.default.createElement("span", null, w("swapFetchingQuoteNofN", [Math.min(L + 1, N), N]))
                          ),
                          r.default.createElement(
                            "div",
                            { className: "loading-swaps-quotes__quote-name-check" },
                            r.default.createElement("span", null, w("swapFetchingQuotes"))
                          ),
                          r.default.createElement(
                            "div",
                            { className: "loading-swaps-quotes__loading-bar-container" },
                            r.default.createElement("div", {
                              className: "loading-swaps-quotes__loading-bar",
                              style: { width: (100 / N) * L + "%" }
                            })
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "loading-swaps-quotes__animation" },
                          r.default.createElement(_.default, null),
                          r.default.createElement(
                            "div",
                            { className: "loading-swaps-quotes__mascot-container", ref: R },
                            r.default.createElement(m.default, {
                              animationEventEmitter: b.current,
                              width: "90",
                              height: "90",
                              lookAtTarget: j
                            })
                          )
                        )
                      ),
                      r.default.createElement(h.default, {
                        submitText: w("back"),
                        onSubmit: async () => {
                          v(A), await y((0, c.navigateBackToBuildQuote)(T));
                        },
                        hideCancel: !0
                      })
                    )
                  );
                }
                v.propTypes = {
                  loadingComplete: o.default.bool.isRequired,
                  onDone: o.default.func.isRequired,
                  aggregatorMetadata: o.default.objectOf(
                    o.default.shape({ title: o.default.string, color: o.default.string, icon: o.default.string })
                  )
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/loading-swaps-quotes/loading-swaps-quotes.js" }
    ],
    [
      5142,
      { "./main-quote-summary": 5143 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./main-quote-summary")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/main-quote-summary/index.js" }
    ],
    [
      5143,
      {
        "../../../../shared/lib/transactions-controller-utils": 3982,
        "../../../components/ui/tooltip": 4736,
        "../../../components/ui/url-icon": 4745,
        "../exchange-rate-display": 5132,
        "../swaps.util": 5179,
        "bignumber.js": 2283,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = p);
                var n = d(e("react")),
                  r = d(e("prop-types")),
                  s = d(e("bignumber.js")),
                  o = d(e("../../../components/ui/tooltip")),
                  l = d(e("../../../components/ui/url-icon")),
                  i = d(e("../exchange-rate-display")),
                  u = e("../swaps.util"),
                  c = e("../../../../shared/lib/transactions-controller-utils");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p({
                  sourceValue: e,
                  sourceSymbol: t,
                  sourceDecimals: a,
                  sourceIconUrl: r,
                  destinationValue: s,
                  destinationSymbol: d,
                  destinationDecimals: p,
                  destinationIconUrl: f
                }) {
                  const m = (0, c.toPrecisionWithoutTrailingZeros)((0, c.calcTokenAmount)(e, a).toString(10), 12),
                    g = (0, c.calcTokenAmount)(s, p),
                    h = (0, u.formatSwapsValueForDisplay)(g),
                    _ = h.match(/\d+/gu).join("").length,
                    [E, w] = (v = _) <= 9 ? [50, 48] : v <= 13 ? [40, 32] : [26, 15];
                  var v;
                  let y = h;
                  return (
                    _ > 20 && (y = `${h.slice(0, 20)}...`),
                    n.default.createElement(
                      "div",
                      { className: "main-quote-summary" },
                      n.default.createElement(
                        "div",
                        { className: "main-quote-summary__details" },
                        n.default.createElement(
                          "div",
                          { className: "main-quote-summary__quote-details-top" },
                          n.default.createElement(
                            "div",
                            { className: "main-quote-summary__source-row", "data-testid": "main-quote-summary__source-row" },
                            n.default.createElement(
                              "span",
                              { className: "main-quote-summary__source-row-value", title: (0, u.formatSwapsValueForDisplay)(m) },
                              (0, u.formatSwapsValueForDisplay)(m)
                            ),
                            n.default.createElement(l.default, {
                              url: r,
                              className: "main-quote-summary__icon",
                              name: t,
                              fallbackClassName: "main-quote-summary__icon-fallback"
                            }),
                            n.default.createElement("span", { className: "main-quote-summary__source-row-symbol", title: t }, t)
                          ),
                          n.default.createElement("i", { className: "fa fa-arrow-down main-quote-summary__down-arrow" }),
                          n.default.createElement(
                            "div",
                            { className: "main-quote-summary__destination-row" },
                            n.default.createElement(l.default, {
                              url: f,
                              className: "main-quote-summary__icon",
                              name: d,
                              fallbackClassName: "main-quote-summary__icon-fallback"
                            }),
                            n.default.createElement("span", { className: "main-quote-summary__destination-row-symbol" }, d)
                          ),
                          n.default.createElement(
                            "div",
                            { className: "main-quote-summary__quote-large" },
                            n.default.createElement(
                              o.default,
                              { interactive: !0, position: "bottom", html: h, disabled: y === h },
                              n.default.createElement(
                                "span",
                                { className: "main-quote-summary__quote-large-number", style: { fontSize: E, lineHeight: `${w}px` } },
                                `${y}`
                              )
                            )
                          )
                        ),
                        n.default.createElement(
                          "div",
                          {
                            className: "main-quote-summary__exchange-rate-container",
                            "data-testid": "main-quote-summary__exchange-rate-container"
                          },
                          n.default.createElement(i.default, {
                            primaryTokenValue: e,
                            primaryTokenDecimals: a,
                            primaryTokenSymbol: t,
                            secondaryTokenValue: s,
                            secondaryTokenDecimals: p,
                            secondaryTokenSymbol: d,
                            arrowColor: "var(--color-primary-default)",
                            boldSymbols: !1,
                            className: "main-quote-summary__exchange-rate-display"
                          })
                        )
                      )
                    )
                  );
                }
                p.propTypes = {
                  sourceValue: r.default.oneOfType([r.default.string, r.default.instanceOf(s.default)]).isRequired,
                  sourceDecimals: r.default.oneOfType([r.default.string, r.default.number]),
                  sourceSymbol: r.default.string.isRequired,
                  destinationValue: r.default.oneOfType([r.default.string, r.default.instanceOf(s.default)]).isRequired,
                  destinationDecimals: r.default.oneOfType([r.default.string, r.default.number]),
                  destinationSymbol: r.default.string.isRequired,
                  sourceIconUrl: r.default.string,
                  destinationIconUrl: r.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/main-quote-summary/main-quote-summary.js" }
    ],
    [
      5144,
      { "../../../components/ui/mascot": 4679, events: 2745, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    const e = (0, r.useRef)(new n.default());
                    return r.default.createElement(
                      "div",
                      { className: "mascot-background-animation__animation" },
                      r.default.createElement(
                        "div",
                        {
                          className: "mascot-background-animation__background-1",
                          "data-testid": "mascot-background-animation-background-1"
                        },
                        r.default.createElement(
                          "svg",
                          { width: "193", height: "190", viewBox: "0 0 193 190", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                          r.default.createElement("path", {
                            d: "M153.753 53.876C153.595 53.9493 153.419 54.0161 153.25 54.0651C151.081 54.7451 148.777 53.538 148.086 51.3768C147.763 50.3298 147.851 49.2109 148.361 48.2363C148.87 47.2618 149.732 46.5374 150.78 46.2144C151.828 45.8913 152.948 45.9781 153.923 46.4865C154.898 46.9949 155.622 47.8557 155.944 48.9027C156.567 50.918 155.592 53.0243 153.753 53.876ZM150.817 47.5708C150.245 47.8359 149.782 48.2721 149.495 48.8334C149.144 49.5127 149.073 50.2843 149.303 51.0047C149.774 52.4998 151.375 53.3384 152.877 52.8787C154.374 52.4069 155.215 50.8063 154.756 49.3056C154.526 48.5852 154.027 47.9888 153.36 47.6334C152.68 47.2836 151.908 47.213 151.187 47.4437C151.049 47.4636 150.927 47.52 150.817 47.5708Z",
                            fill: "#86E29B"
                          }),
                          r.default.createElement("path", {
                            d: "M18.3624 73.9241C18.3015 73.9523 18.2407 73.9805 18.1798 74.0087C17.0495 74.4733 15.8073 74.4728 14.6751 74.0078C12.3517 73.0461 11.2387 70.3567 12.2031 68.0341C13.1676 65.7115 15.8598 64.5971 18.1833 65.5589C19.3155 66.0239 20.1951 66.9013 20.6591 68.0304C21.123 69.1595 21.1215 70.4008 20.6552 71.5326C20.2207 72.6053 19.4093 73.4391 18.3624 73.9241ZM15.0433 66.7921C14.3129 67.1305 13.713 67.7186 13.3766 68.5243C12.6776 70.207 13.4834 72.1377 15.1666 72.8348C15.9849 73.1647 16.8786 73.1789 17.6933 72.831C18.5136 72.4952 19.1388 71.8659 19.4818 71.0424C19.8126 70.2245 19.8276 69.3313 19.4801 68.5175C19.1448 67.6981 18.5155 67.0739 17.6917 66.7319C16.8144 66.3703 15.8589 66.4142 15.0433 66.7921Z",
                            fill: "#FFB0EB"
                          }),
                          r.default.createElement("path", {
                            d: "M116.617 37.3839C117.397 37.0226 117.736 36.0982 117.375 35.3192C117.015 34.5402 116.09 34.2016 115.31 34.5629C114.53 34.9243 114.19 35.8487 114.551 36.6277C114.912 37.4067 115.837 37.7453 116.617 37.3839Z",
                            fill: "url(#paint0_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M55.1317 91.7213C55.9116 91.36 56.2512 90.4356 55.8903 89.6566C55.5294 88.8776 54.6046 88.539 53.8247 88.9003C53.0448 89.2617 52.7052 90.1861 53.0661 90.9651C53.427 91.7441 54.3518 92.0827 55.1317 91.7213Z",
                            fill: "url(#paint1_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M31.9932 126.235C32.7731 125.874 33.1127 124.95 32.7518 124.171C32.3909 123.392 31.4661 123.053 30.6863 123.414C29.9064 123.776 29.5667 124.7 29.9277 125.479C30.2886 126.258 31.2134 126.597 31.9932 126.235Z",
                            fill: "url(#paint2_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M119.43 132.589C120.21 132.228 120.55 131.304 120.189 130.525C119.828 129.746 118.903 129.407 118.123 129.768C117.344 130.13 117.004 131.054 117.365 131.833C117.726 132.612 118.651 132.951 119.43 132.589Z",
                            fill: "url(#paint3_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M44.7469 47.3835C46.0108 46.7979 46.5612 45.2997 45.9763 44.0372C45.3914 42.7747 43.8926 42.2259 42.6286 42.8115C41.3647 43.3971 40.8143 44.8953 41.3992 46.1578C41.9841 47.4203 43.4829 47.9691 44.7469 47.3835Z",
                            fill: "url(#paint4_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M105.107 90.7857C106.371 90.2001 106.922 88.702 106.337 87.4394C105.752 86.1769 104.253 85.6282 102.989 86.2137C101.725 86.7993 101.175 88.2975 101.76 89.56C102.344 90.8226 103.843 91.3713 105.107 90.7857Z",
                            fill: "url(#paint5_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M95.5179 172.376C96.7818 171.791 97.3322 170.293 96.7473 169.03C96.1624 167.767 94.6636 167.219 93.3996 167.804C92.1357 168.39 91.5853 169.888 92.1702 171.151C92.7551 172.413 94.2539 172.962 95.5179 172.376Z",
                            fill: "url(#paint6_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M165.098 102.367C166.362 101.781 166.912 100.283 166.327 99.0205C165.742 97.758 164.244 97.2092 162.98 97.7948C161.716 98.3804 161.165 99.8786 161.75 101.141C162.335 102.404 163.834 102.952 165.098 102.367Z",
                            fill: "url(#paint7_linear)"
                          }),
                          r.default.createElement(
                            "defs",
                            null,
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint0_linear",
                                x1: "114.554",
                                y1: "36.6326",
                                x2: "117.379",
                                y2: "35.3237",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint1_linear",
                                x1: "53.0688",
                                y1: "90.97",
                                x2: "55.8937",
                                y2: "89.6611",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint2_linear",
                                x1: "29.9283",
                                y1: "125.483",
                                x2: "32.7532",
                                y2: "124.174",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint3_linear",
                                x1: "117.365",
                                y1: "131.837",
                                x2: "120.19",
                                y2: "130.528",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint4_linear",
                                x1: "41.4394",
                                y1: "46.2402",
                                x2: "45.947",
                                y2: "43.9537",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint5_linear",
                                x1: "101.8",
                                y1: "89.6425",
                                x2: "106.307",
                                y2: "87.356",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint6_linear",
                                x1: "92.2104",
                                y1: "171.233",
                                x2: "96.718",
                                y2: "168.947",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint7_linear",
                                x1: "161.79",
                                y1: "101.224",
                                x2: "166.298",
                                y2: "98.937",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#75C3FC" })
                            )
                          )
                        )
                      ),
                      r.default.createElement(
                        "div",
                        {
                          className: "mascot-background-animation__background-2",
                          "data-testid": "mascot-background-animation-background-2"
                        },
                        r.default.createElement(
                          "svg",
                          { width: "195", height: "205", viewBox: "0 0 195 205", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                          r.default.createElement("path", {
                            d: "M29.84 121.982C30.0408 121.969 30.245 122.01 30.4258 122.106L46.4233 130.275C46.8125 130.478 47.0536 130.893 47.0402 131.324C47.0143 131.768 46.7423 132.148 46.3356 132.308L24.5484 140.937C24.1417 141.097 23.6789 141.005 23.3642 140.702C23.0495 140.4 22.9398 139.937 23.0753 139.525L28.8651 122.727C28.9671 122.426 29.2065 122.169 29.5086 122.056C29.614 122.023 29.7194 121.989 29.84 121.982ZM43.1981 131.148L30.5607 124.689L25.9884 137.96L43.1981 131.148Z",
                            fill: "#75C4FD"
                          }),
                          r.default.createElement("path", {
                            d: "M168.214 54.3381C168.442 54.3238 168.674 54.3764 168.869 54.485C169.217 54.6781 169.44 55.0266 169.465 55.4145L170.59 68.4358C170.631 68.8763 170.416 69.3061 170.041 69.5444C169.666 69.7827 169.182 69.7862 168.805 69.5681L156.14 62.2246C155.763 62.0065 155.535 61.5911 155.548 61.1472C155.56 60.7033 155.818 60.3112 156.209 60.1122L167.75 54.4343C167.908 54.3841 168.067 54.3473 168.214 54.3381ZM168.027 66.3674L167.248 57.3661L159.267 61.2902L168.027 66.3674Z",
                            fill: "#FFB0EB"
                          }),
                          r.default.createElement("path", {
                            d: "M88.6283 16.6885C88.8694 16.6734 89.1154 16.7385 89.3255 16.873L100.21 24.1133C100.561 24.3464 100.762 24.7635 100.708 25.1832C100.653 25.6028 100.381 25.969 99.9864 26.1146L86.3391 31.4276C85.9449 31.5731 85.5106 31.5064 85.1842 31.2314C84.8712 30.9556 84.7239 30.5352 84.8192 30.1264L87.5815 17.5731C87.666 17.2053 87.9162 16.9076 88.2702 16.7646C88.3882 16.7169 88.5078 16.696 88.6283 16.6885ZM97.1342 24.7894L89.4471 19.6718L87.5021 28.5349L97.1342 24.7894Z",
                            fill: "url(#paint0_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M117.145 183.156C116.944 183.289 116.698 183.356 116.449 183.344L103.402 182.517C102.982 182.49 102.6 182.229 102.437 181.839C102.274 181.448 102.327 180.995 102.596 180.671L111.758 169.247C112.027 168.923 112.436 168.764 112.856 168.839C113.265 168.921 113.603 169.212 113.725 169.614L117.609 181.866C117.72 182.227 117.652 182.61 117.417 182.911C117.339 183.011 117.246 183.089 117.145 183.156ZM105.728 180.393L114.944 180.981L112.197 172.333L105.728 180.393Z",
                            fill: "url(#paint1_linear)"
                          }),
                          r.default.createElement("path", {
                            d: "M38.0816 74.0208C38.1217 74.0183 38.1485 74.0166 38.1887 74.0141C42.3831 73.805 45.9744 77.0577 46.1831 81.2474C46.3919 85.4371 43.1484 89.0241 38.9407 89.234C34.7463 89.4431 31.1549 86.1904 30.9462 82.0007C30.7391 77.8377 33.9307 74.2809 38.0816 74.0208ZM38.9104 87.2486C41.9767 87.0565 44.3523 84.4236 44.1997 81.3448C44.0455 78.2393 41.3949 75.8407 38.2859 75.9952C35.1761 76.1364 32.7753 78.7977 32.9296 81.9033C33.0838 85.0088 35.7344 87.4073 38.8434 87.2528C38.8568 87.252 38.8836 87.2503 38.9104 87.2486Z",
                            fill: "#86E29B"
                          }),
                          r.default.createElement("path", {
                            d: "M162.178 97.8401C162.218 97.8376 162.245 97.8359 162.285 97.8334C166.48 97.6243 170.071 100.877 170.28 105.067C170.489 109.256 167.245 112.843 163.037 113.053C158.843 113.262 155.252 110.01 155.043 105.82C154.836 101.657 158.027 98.1002 162.178 97.8401ZM163.007 111.068C166.073 110.876 168.449 108.243 168.296 105.164C168.142 102.059 165.492 99.6601 162.383 99.8146C159.273 99.9557 156.872 102.617 157.026 105.723C157.181 108.828 159.831 111.227 162.94 111.072C162.953 111.071 162.98 111.07 163.007 111.068Z",
                            fill: "#86E29B"
                          }),
                          r.default.createElement(
                            "defs",
                            null,
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint0_linear",
                                x1: "100.609",
                                y1: "23.2611",
                                x2: "84.4152",
                                y2: "24.2757",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#FFE466" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#FFAFEA" })
                            ),
                            r.default.createElement(
                              "linearGradient",
                              {
                                id: "paint1_linear",
                                x1: "103.812",
                                y1: "183.939",
                                x2: "116.959",
                                y2: "174.66",
                                gradientUnits: "userSpaceOnUse"
                              },
                              r.default.createElement("stop", { stopColor: "#75C3FC" }),
                              r.default.createElement("stop", { offset: "0.0928503", stopColor: "#81C2F6" }),
                              r.default.createElement("stop", { offset: "1", stopColor: "#F0B8BD" })
                            )
                          )
                        )
                      ),
                      r.default.createElement(
                        "div",
                        {
                          className: "mascot-background-animation__mascot-container",
                          "data-testid": "mascot-background-animation-mascot-container"
                        },
                        r.default.createElement(s.default, { animationEventEmitter: e.current, width: "42", height: "42", followMouse: !1 })
                      )
                    );
                  });
                var n = l(e("events")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = o(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, s, l) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = l(e("../../../components/ui/mascot"));
                function o(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (o = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/mascot-background-animation/mascot-background-animation.js" }
    ],
    [
      5145,
      {
        "../../../../shared/constants/swaps": 3970,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../store/actions": 5204,
        "../swaps-footer": 5177,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = _);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = h(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = g(e("prop-types")),
                  l = e("../../../contexts/i18n"),
                  i = e("../../../store/actions"),
                  u = g(e("../../../components/ui/box")),
                  c = e("../../../helpers/constants/design-system"),
                  d = e("../../../components/component-library"),
                  p = e("../../../helpers/constants/routes"),
                  f = g(e("../swaps-footer")),
                  m = e("../../../../shared/constants/swaps");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (h = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function _({ notificationKey: e }) {
                  const t = (0, n.useContext)(l.I18nContext),
                    a = (0, s.useHistory)(),
                    o = (0, r.useDispatch)();
                  let g = "",
                    h = "",
                    _ = "";
                  return (
                    e === m.QUOTES_EXPIRED_ERROR &&
                      ((g = t("swapAreYouStillThere")), (h = t("swapAreYouStillThereDescription")), (_ = t("swapShowLatestQuotes"))),
                    n.default.createElement(
                      "div",
                      { className: "notification-page" },
                      n.default.createElement(
                        u.default,
                        {
                          alignItems: c.AlignItems.center,
                          display: c.DISPLAY.FLEX,
                          flexDirection: c.FLEX_DIRECTION.COLUMN,
                          marginTop: 10,
                          marginLeft: 4,
                          marginRight: 4,
                          textAlign: c.TEXT_ALIGN.CENTER,
                          className: "notification-page__content"
                        },
                        n.default.createElement(
                          u.default,
                          { marginTop: 8, marginBottom: 4 },
                          n.default.createElement(d.Icon, {
                            name: d.IconName.Warning,
                            color: c.IconColor.iconMuted,
                            className: "notification-page__warning-icon"
                          })
                        ),
                        n.default.createElement(d.Text, { variant: c.TextVariant.bodyLgMedium, as: "h2" }, g),
                        n.default.createElement(d.Text, { variant: c.TextVariant.bodyMd, as: "h6" }, h)
                      ),
                      n.default.createElement(f.default, {
                        onSubmit: async () => {
                          await o((0, i.setSwapsErrorKey)("")), a.push(p.PREPARE_SWAP_ROUTE);
                        },
                        submitText: _,
                        hideCancel: !0,
                        showTermsOfService: !0
                      })
                    )
                  );
                }
                _.propTypes = { notificationKey: o.default.oneOf([m.QUOTES_EXPIRED_ERROR]) };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/notification-page/notification-page.js" }
    ],
    [
      5146,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/swaps": 3970,
        "../../../../shared/lib/swaps-utils": 3979,
        "../../../../shared/lib/token-util.ts": 3981,
        "../../../../shared/lib/transactions-controller-utils": 3982,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../../shared/modules/string-utils": 4002,
        "../../../../shared/modules/swaps.utils": 4003,
        "../../../components/component-library": 4453,
        "../../../components/component-library/text-field/deprecated": 4492,
        "../../../components/ui/box": 4607,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useEqualityCheck": 4834,
        "../../../hooks/useEthFiatAmount": 4835,
        "../../../hooks/usePrevious": 4845,
        "../../../hooks/useTokenFiatAmount": 4858,
        "../../../hooks/useTokenTracker": 4859,
        "../../../hooks/useTokensToSearch": 4860,
        "../../../selectors": 5197,
        "../../../store/actionConstants": 5203,
        "../../../store/actions": 5204,
        "../import-token": 5136,
        "../list-with-search/list-with-search": 5138,
        "../selected-token/selected-token": 5165,
        "../swaps-banner-alert/swaps-banner-alert": 5176,
        "../swaps-footer": 5177,
        "../swaps.util": 5179,
        "../transaction-settings/transaction-settings": 5180,
        "./quotes-loading-animation": 5147,
        "./review-quote": 5148,
        "./smart-transactions-popover": 5150,
        "@metamask/etherscan-link": 1255,
        "bignumber.js": 2283,
        classnames: 2414,
        lodash: 3312,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = z);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = Z(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = X(e("bignumber.js")),
                  s = X(e("prop-types")),
                  o = e("react-redux"),
                  l = e("lodash"),
                  i = e("react-router-dom"),
                  u = e("@metamask/etherscan-link"),
                  c = X(e("classnames")),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../hooks/useTokensToSearch"),
                  f = e("../../../hooks/useEqualityCheck"),
                  m = e("../../../contexts/i18n"),
                  g = e("../../../ducks/metamask/metamask"),
                  h = X(e("../../../components/ui/box")),
                  _ = e("../../../helpers/constants/design-system"),
                  E = e("../../../ducks/swaps/swaps"),
                  w = e("../../../selectors"),
                  v = e("../../../../shared/modules/conversion.utils"),
                  y = e("../../../helpers/utils/util"),
                  T = e("../../../hooks/usePrevious"),
                  b = e("../../../hooks/useTokenTracker"),
                  S = e("../../../hooks/useTokenFiatAmount"),
                  k = e("../../../hooks/useEthFiatAmount"),
                  C = e("../../../../shared/modules/swaps.utils"),
                  x = e("../../../../shared/constants/metametrics"),
                  O = e("../../../../shared/constants/swaps"),
                  I = e("../../../store/actions"),
                  P = e("../../../store/actionConstants"),
                  A = e("../swaps.util"),
                  M = e("../../../../shared/lib/token-util.ts"),
                  N = e("../../../../shared/modules/string-utils"),
                  R = e("../../../../shared/lib/transactions-controller-utils"),
                  F = e("../../../../shared/lib/swaps-utils"),
                  L = e("../../../components/component-library"),
                  D = e("../../../components/component-library/text-field/deprecated"),
                  j = e("../../../helpers/constants/routes"),
                  q = X(e("../import-token")),
                  W = X(e("../transaction-settings/transaction-settings")),
                  U = X(e("../swaps-banner-alert/swaps-banner-alert")),
                  B = X(e("../swaps-footer")),
                  G = X(e("../selected-token/selected-token")),
                  H = X(e("../list-with-search/list-with-search")),
                  V = X(e("./smart-transactions-popover")),
                  $ = X(e("./quotes-loading-animation")),
                  Q = X(e("./review-quote"));
                function X(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function Z(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (Z = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function K() {
                  return (
                    (K = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                          }
                          return e;
                        }),
                    K.apply(this, arguments)
                  );
                }
                let Y;
                function z({ ethBalance: e, selectedAccountAddress: t, shuffledTokensList: a }) {
                  const s = (0, n.useContext)(m.I18nContext),
                    X = (0, o.useDispatch)(),
                    Z = (0, i.useHistory)(),
                    z = (0, n.useContext)(d.MetaMetricsContext),
                    [J, ee] = (0, n.useState)(undefined),
                    [te, ae] = (0, n.useState)(!1),
                    [ne, re] = (0, n.useState)(),
                    [se, oe] = (0, n.useState)(!1),
                    le = () => oe(!1),
                    [ie, ue] = (0, n.useState)(!1),
                    ce = () => ue(!1),
                    [de, pe] = (0, n.useState)(!1),
                    [fe, me] = (0, n.useState)(null),
                    [ge, he] = (0, n.useState)(""),
                    [_e, Ee] = (0, n.useState)(""),
                    [we, ve] = (0, n.useState)(0),
                    [ye, Te] = (0, n.useState)(!1),
                    [be, Se] = (0, n.useState)(!1),
                    ke = (0, o.useSelector)(E.getIsFeatureFlagLoaded),
                    Ce = (0, o.useSelector)(E.getBalanceError),
                    xe = (0, o.useSelector)(E.getFetchParams, l.isEqual),
                    { sourceTokenInfo: Oe = {}, destinationTokenInfo: Ie = {} } = (null == xe ? void 0 : xe.metaData) || {},
                    Pe = (0, o.useSelector)(g.getTokens, l.isEqual),
                    Ae = (0, o.useSelector)(E.getTopAssets, l.isEqual),
                    Me = (0, o.useSelector)(E.getFromToken, l.isEqual),
                    Ne = (0, o.useSelector)(E.getFromTokenInputValue),
                    Re = (0, o.useSelector)(E.getFromTokenError),
                    Fe = (0, o.useSelector)(E.getMaxSlippage),
                    Le = (0, o.useSelector)(E.getToToken, l.isEqual) || Ie,
                    De = (0, o.useSelector)(w.getSwapsDefaultToken, l.isEqual),
                    je = (0, o.useSelector)(w.getCurrentChainId),
                    qe = (0, o.useSelector)(w.getRpcPrefsForCurrentProvider, o.shallowEqual),
                    We = (0, o.useSelector)(w.getTokenList, l.isEqual),
                    Ue = (0, o.useSelector)(E.getQuotes, l.isEqual),
                    Be = (0, o.useSelector)(E.getLatestAddedTokenTo, l.isEqual),
                    Ge = Object.keys(Ue).length,
                    He = Ge > 0,
                    Ve = (0, o.useSelector)(E.getSwapsErrorKey),
                    $e = (0, o.useSelector)(E.getAggregatorMetadata, o.shallowEqual),
                    Qe = (0, o.useSelector)(E.getTransactionSettingsOpened, o.shallowEqual),
                    Xe = $e ? Object.keys($e).length : 0,
                    Ze = (0, o.useSelector)(w.getTokenExchangeRates, l.isEqual),
                    Ke = (0, o.useSelector)(g.getConversionRate),
                    Ye = (0, o.useSelector)(w.isHardwareWallet),
                    ze = (0, o.useSelector)(w.getHardwareWalletType),
                    Je = (0, o.useSelector)(E.getSmartTransactionsOptInStatus),
                    et = (0, o.useSelector)(E.getSmartTransactionsEnabled),
                    tt = (0, o.useSelector)(E.getCurrentSmartTransactionsEnabled),
                    at = tt && Je,
                    nt = Je !== undefined,
                    rt = (0, o.useSelector)(E.getCurrentSmartTransactionsError),
                    st = (0, o.useSelector)(w.getCurrentCurrency),
                    ot = (0, o.useSelector)(E.getFetchingQuotes),
                    lt = !ot && He,
                    it = et && !nt,
                    ut = (0, C.isSwapsDefaultTokenSymbol)(null == Oe ? void 0 : Oe.symbol, je) ? De : Oe,
                    { tokensWithBalances: ct } = (0, b.useTokenTracker)({ tokens: Pe }),
                    dt = !(0, C.isSwapsDefaultTokenSymbol)(null == Me ? void 0 : Me.symbol, je) && null != Me && Me.balance ? [Me] : [],
                    pt = (0, l.uniqBy)([...ct, ...Pe, ...dt], "address"),
                    ft = (0, f.useEqualityCheck)(pt),
                    mt = (0, p.getRenderableTokenData)(Me || ut, Ze, Ke, st, je, We),
                    gt = (0, p.useTokensToSearch)({
                      usersTokens: ft,
                      topTokens: Ae,
                      shuffledTokensList: a,
                      tokenBucketPriority: O.TokenBucketPriority.owned
                    }),
                    ht = (0, p.useTokensToSearch)({
                      usersTokens: ft,
                      topTokens: Ae,
                      shuffledTokensList: a,
                      tokenBucketPriority: O.TokenBucketPriority.top
                    }),
                    _t = gt.find(({ address: e }) => (0, N.isEqualCaseInsensitive)(e, null == Le ? void 0 : Le.address)) || Le,
                    Et = (null == _t ? void 0 : _t.address) && !(0, C.isSwapsDefaultTokenAddress)(null == _t ? void 0 : _t.address, je),
                    wt = Number((null == _t ? void 0 : _t.occurances) || (null == _t ? void 0 : _t.occurrences) || 0),
                    { address: vt, symbol: yt, string: Tt, decimals: bt, balance: St } = mt || {},
                    { address: kt } = _t || {},
                    Ct = St && (0, R.calcTokenAmount)(St, bt).toString(10),
                    xt = (0, T.usePrevious)(Ct),
                    Ot = (0, S.useTokenFiatAmount)(vt, Ne || 0, yt, { showFiat: !0 }, !0),
                    It = (0, k.useEthFiatAmount)(Ne || 0, { showFiat: !0 }, !0),
                    Pt = (0, C.isSwapsDefaultTokenSymbol)(yt, je) ? It : Ot,
                    At = (0, n.useCallback)(
                      (e, t) => {
                        X((0, E.setFromTokenInputValue)(e));
                        const a = new r.default(e || 0).gt(t || 0);
                        Ce !== a && X((0, E.setBalanceError)(a)),
                          X((0, E.setFromTokenError)(Me && (0, A.countDecimals)(e) > Me.decimals ? "tooManyDecimals" : null));
                      },
                      [X, Me, Ce]
                    );
                  (0, n.useEffect)(() => {
                    let e;
                    if (!ye) return void ve(0);
                    e = lt ? 20 : 500 + Math.floor(1500 * Math.random());
                    const t = setTimeout(() => {
                      we < Xe
                        ? ve(we + 1)
                        : we === Xe &&
                          lt &&
                          (async () => {
                            await X((0, I.setBackgroundSwapRouteState)("")),
                              Te(!1),
                              (Ve !== O.ERROR_FETCHING_QUOTES && Ve !== O.QUOTES_NOT_AVAILABLE_ERROR) ||
                                X((0, I.setSwapsErrorKey)(O.QUOTES_NOT_AVAILABLE_ERROR));
                          })();
                    }, e);
                    return function () {
                      clearTimeout(t);
                    };
                  }, [ot, we, lt, Ge, X, Z, Ve, Xe, ye]);
                  const Mt = (e) => {
                      null != e && e.address && !Pt && null !== J
                        ? (0, A.fetchTokenPrice)(e.address).then((e) => {
                            null !== e && e !== undefined && ee(e);
                          })
                        : ee(null),
                        null != e &&
                          e.address &&
                          !ft.find((t) => (0, N.isEqualCaseInsensitive)(t.address, e.address)) &&
                          (0, M.fetchTokenBalance)(e.address, t, global.ethereumProvider).then((t) => {
                            if (null != t && t.balance) {
                              const a = t.balance.toString(10),
                                n = (0, R.calcTokenAmount)(a, e.decimals);
                              X((0, E.setSwapsFromToken)({ ...e, string: n.toString(10), balance: a }));
                            }
                          }),
                        X((0, E.setSwapsFromToken)(e)),
                        At(Ne, e.string, e.decimals);
                    },
                    Nt = (0, u.getTokenTrackerLink)(_t.address, je, null, null, {
                      blockExplorerUrl: O.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[je] ?? null
                    }),
                    Rt = qe.blockExplorerUrl ? (0, y.getURLHostName)(Nt) : s("etherscan"),
                    { address: Ft } = Le || {},
                    Lt = (0, n.useCallback)(
                      (e) => {
                        Be && e.address !== Ft && X((0, I.ignoreTokens)({ tokensToIgnore: Ft, dontShowLoadingIndicator: !0 })),
                          X((0, E.setSwapToToken)(e)),
                          ae(!1);
                      },
                      [X, Be, Ft]
                    ),
                    Dt = ct.find((e) => (0, N.isEqualCaseInsensitive)(e.address, null == Me ? void 0 : Me.address)),
                    jt = (0, T.usePrevious)(Dt);
                  (0, n.useEffect)(() => {
                    const e = !(0, C.isSwapsDefaultTokenAddress)(null == Dt ? void 0 : Dt.address, je),
                      t = (0, N.isEqualCaseInsensitive)(null == Dt ? void 0 : Dt.address, null == jt ? void 0 : jt.address),
                      a = (null == Dt ? void 0 : Dt.balance) !== (null == jt ? void 0 : jt.balance);
                    e &&
                      t &&
                      a &&
                      X(
                        (0, E.setSwapsFromToken)({
                          ...Me,
                          balance: null == Dt ? void 0 : Dt.balance,
                          string: null == Dt ? void 0 : Dt.string
                        })
                      );
                  }, [X, Dt, jt, Me, je]),
                    (0, n.useEffect)(() => {
                      (0, C.isSwapsDefaultTokenAddress)(null == Me ? void 0 : Me.address, je) &&
                        (null == Me ? void 0 : Me.balance) !== (0, v.hexToDecimal)(e) &&
                        X(
                          (0, E.setSwapsFromToken)({
                            ...Me,
                            balance: (0, v.hexToDecimal)(e),
                            string: (0, v.getValueFromWeiHex)({ value: e, numberOfDecimals: 4, toDenomination: "ETH" })
                          })
                        );
                    }, [X, Me, e, je]),
                    (0, n.useEffect)(() => {
                      (null != Me && Me.symbol) || (null != ut && ut.symbol) || X((0, E.setSwapsFromToken)(De));
                    }, []),
                    (0, n.useEffect)(() => {
                      xt !== Ct && At(Ne, Ct);
                    }, [At, xt, Ne, Ct]);
                  const qt = (0, n.useCallback)(() => {
                    z({
                      event: "Prepare Swap Page Loaded",
                      category: x.MetaMetricsEventCategory.Swaps,
                      sensitiveProperties: {
                        is_hardware_wallet: Ye,
                        hardware_wallet_type: ze,
                        stx_enabled: et,
                        current_stx_enabled: tt,
                        stx_user_opt_in: Je
                      }
                    });
                  }, [z, Ye, ze, et, tt, Je]);
                  (0, n.useEffect)(() => {
                    X((0, I.resetSwapsPostFetchState)()), X((0, E.setReviewSwapClickedTimestamp)()), qt();
                  }, [X, qt]);
                  const Wt = () =>
                      n.default.createElement(
                        "a",
                        {
                          className: "prepare-swap-page__token-etherscan-link",
                          key: "prepare-swap-page-etherscan-link",
                          onClick: () => {
                            z({
                              event: x.MetaMetricsEventName.ExternalLinkClicked,
                              category: x.MetaMetricsEventCategory.Swaps,
                              properties: {
                                link_type: x.MetaMetricsEventLinkType.TokenTracker,
                                location: "Swaps Confirmation",
                                url_domain: (0, y.getURLHostName)(Nt)
                              }
                            }),
                              global.platform.openTab({ url: Nt });
                          },
                          target: "_blank",
                          rel: "noopener noreferrer"
                        },
                        Rt
                      ),
                    Ut = `${s("balance")}: ${Tt || "0"}`,
                    Bt = `${s("balance")}: ${(null == _t ? void 0 : _t.string) || "0"}`,
                    Gt = (0, F.shouldEnableDirectWrapping)(je, vt, _t.address),
                    Ht =
                      Re ||
                      !ke ||
                      !Number(Ne) ||
                      !(null != _t && _t.address) ||
                      !vt ||
                      Number(Fe) < 0 ||
                      Number(Fe) > O.MAX_ALLOWED_SLIPPAGE ||
                      (Et && wt < 2 && !te);
                  let Vt;
                  (0, n.useEffect)(() => {
                    X((0, I.clearSwapsQuotes)()), X((0, I.stopPollingForQuotes)());
                    return (
                      (Y = setTimeout(() => {
                        (Y = null),
                          Ht ||
                            (at && ((0, I.clearSmartTransactionFees)(), X({ type: P.SET_SMART_TRANSACTIONS_ERROR, payload: null })),
                            (async () => {
                              Te(!0), await X((0, E.fetchQuotesAndSetQuoteState)(Z, Ne, Fe, z, !0));
                            })());
                      }, 1e3)),
                      () => clearTimeout(Y)
                    );
                  }, [X, Z, Fe, z, Ht, Ne, vt, kt, Je, at]),
                    (Vt =
                      Ve && Ve === O.QUOTES_NOT_AVAILABLE_ERROR
                        ? s("swapQuotesNotAvailableErrorTitle")
                        : Ht
                        ? null != _t && _t.address && vt
                          ? s("swapEnterAmount")
                          : s("swapSelectToken")
                        : s("swapFetchingQuotes"));
                  const $t = (0, n.useCallback)((e) => (0, N.isEqualCaseInsensitive)(e.address, vt), [vt]),
                    Qt = (0, n.useCallback)(
                      (e) => (0, N.isEqualCaseInsensitive)(e.address, null == _t ? void 0 : _t.address),
                      [null == _t ? void 0 : _t.address]
                    ),
                    Xt = !Ve && !Ht && He,
                    Zt = !Ve && !Ht && !He,
                    Kt = !Re && Ce && yt,
                    Yt = 1 === wt;
                  (0, n.useEffect)(() => {
                    Ve === O.QUOTES_EXPIRED_ERROR && Z.push(j.SWAPS_NOTIFICATION_ROUTE);
                  }, [Ve, Z]),
                    (0, n.useEffect)(() => {
                      Zt && re("");
                    }, [Zt]);
                  const zt = {
                    onImportTokenCloseClick: () => {
                      pe(!1);
                    },
                    onImportTokenClick: () => {
                      z({
                        event: "Token Imported",
                        category: x.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: {
                          symbol: null == fe ? void 0 : fe.symbol,
                          address: null == fe ? void 0 : fe.address,
                          chain_id: je,
                          is_hardware_wallet: Ye,
                          hardware_wallet_type: ze,
                          stx_enabled: et,
                          current_stx_enabled: tt,
                          stx_user_opt_in: Je
                        }
                      }),
                        null == Lt || Lt(fe),
                        me(null);
                    },
                    setIsImportTokenModalOpen: pe,
                    tokenForImport: fe
                  };
                  let Jt, ea, ta;
                  ne &&
                    !Ht &&
                    ((Jt = (0, A.formatSwapsValueForDisplay)(ne)),
                    (ea = (0, A.getClassNameForCharLength)(Jt, "prepare-swap-page__receive-amount"))),
                    Ne && (ta = (0, A.getClassNameForCharLength)(Ne, "prepare-swap-page__from-token-amount"));
                  const aa = yt && !(0, C.isSwapsDefaultTokenSymbol)(yt, je) && St > 0;
                  return n.default.createElement(
                    "div",
                    { className: "prepare-swap-page" },
                    n.default.createElement(
                      "div",
                      { className: "prepare-swap-page__content" },
                      fe && de && n.default.createElement(q.default, K({ isOpen: !0 }, zt)),
                      n.default.createElement(
                        L.Modal,
                        {
                          onClose: le,
                          isOpen: se,
                          isClosedOnOutsideClick: !0,
                          isClosedOnEscapeKey: !0,
                          className: "mm-modal__custom-scrollbar"
                        },
                        n.default.createElement(L.ModalOverlay, null),
                        n.default.createElement(
                          L.ModalContent,
                          null,
                          n.default.createElement(L.ModalHeader, { onClose: le }, s("swapSwapTo")),
                          n.default.createElement(
                            h.default,
                            { paddingTop: 10, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, display: _.DISPLAY.FLEX },
                            n.default.createElement(H.default, {
                              selectedItem: _t,
                              itemsToSearch: ht,
                              onClickItem: (e) => {
                                null == Lt || Lt(e), le();
                              },
                              maxListItems: 30,
                              searchQuery: _e,
                              setSearchQuery: Ee,
                              hideItemIf: $t,
                              shouldSearchForImports: !0,
                              onOpenImportTokenModalClick: (e) => {
                                me(e), pe(!0), le(), Ee("");
                              }
                            })
                          )
                        )
                      ),
                      n.default.createElement(
                        L.Modal,
                        {
                          onClose: ce,
                          isOpen: ie,
                          isClosedOnOutsideClick: !0,
                          isClosedOnEscapeKey: !0,
                          className: "mm-modal__custom-scrollbar"
                        },
                        n.default.createElement(L.ModalOverlay, null),
                        n.default.createElement(
                          L.ModalContent,
                          null,
                          n.default.createElement(L.ModalHeader, { onClose: ce }, s("swapSwapFrom")),
                          n.default.createElement(
                            h.default,
                            { paddingTop: 10, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, display: _.DISPLAY.FLEX },
                            n.default.createElement(H.default, {
                              selectedItem: mt,
                              itemsToSearch: gt,
                              onClickItem: (e) => {
                                null == Mt || Mt(e), ce();
                              },
                              maxListItems: 30,
                              searchQuery: ge,
                              setSearchQuery: he,
                              hideItemIf: Qt
                            })
                          )
                        )
                      ),
                      n.default.createElement(V.default, {
                        onStartSwapping: () => {
                          (0, I.setSmartTransactionsOptInStatus)(!0, Je);
                        },
                        onManageStxInSettings: (e) => {
                          null == e || e.preventDefault(),
                            (0, I.setSmartTransactionsOptInStatus)(!0, Je),
                            X((0, E.setTransactionSettingsOpened)(!0));
                        },
                        isOpen: it
                      }),
                      n.default.createElement(
                        "div",
                        { className: "prepare-swap-page__swap-from-content" },
                        n.default.createElement(
                          h.default,
                          { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.spaceBetween, alignItems: _.AlignItems.center },
                          n.default.createElement(G.default, {
                            onClick: () => ue(!0),
                            onClose: ce,
                            selectedToken: mt,
                            testId: "prepare-swap-page-swap-from"
                          }),
                          n.default.createElement(
                            h.default,
                            { display: _.DISPLAY.FLEX, alignItems: _.AlignItems.center },
                            n.default.createElement(D.TextField, {
                              className: (0, c.default)("prepare-swap-page__from-token-amount", { [ta]: ta }),
                              size: _.Size.SM,
                              placeholder: "0",
                              onChange: (e) => {
                                e.stopPropagation();
                                const t = "." === e.target.value ? "0." : e.target.value;
                                "" === t || /^(\.\d+|\d+(\.\d+)?|\d+\.)$/u.test(t) ? At(t, Ct) : At(Ne || "", Ct);
                              },
                              value: Ne,
                              truncate: !1,
                              testId: "prepare-swap-page-from-token-amount"
                            })
                          )
                        ),
                        n.default.createElement(
                          h.default,
                          { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.spaceBetween, alignItems: _.AlignItems.stretch },
                          n.default.createElement(
                            "div",
                            { className: "prepare-swap-page__balance-message" },
                            yt && Ut,
                            aa &&
                              n.default.createElement(
                                "div",
                                {
                                  className: "prepare-swap-page__max-balance",
                                  "data-testid": "prepare-swap-page-max-balance",
                                  onClick: () => At(Ct || "0", Ct)
                                },
                                s("max")
                              )
                          ),
                          Ne &&
                            Pt &&
                            n.default.createElement(
                              h.default,
                              { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.flexEnd, alignItems: _.AlignItems.flexEnd },
                              n.default.createElement(L.Text, { variant: _.TextVariant.bodySm, color: _.TextColor.textAlternative }, Pt)
                            )
                        ),
                        Kt &&
                          n.default.createElement(
                            h.default,
                            { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.flexStart },
                            n.default.createElement(
                              L.Text,
                              { variant: _.TextVariant.bodySmBold, color: _.TextColor.textAlternative, marginTop: 0 },
                              s("swapsNotEnoughToken", [yt])
                            )
                          ),
                        Re &&
                          n.default.createElement(
                            h.default,
                            { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.flexStart },
                            n.default.createElement(
                              L.Text,
                              { variant: _.TextVariant.bodySmBold, color: _.TextColor.textAlternative, marginTop: 0 },
                              s("swapTooManyDecimalsError", [yt, bt])
                            )
                          ),
                        n.default.createElement(
                          h.default,
                          { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.center },
                          n.default.createElement(
                            "div",
                            {
                              className: (0, c.default)("prepare-swap-page__switch-tokens", {
                                "prepare-swap-page__switch-tokens--rotate": be,
                                "prepare-swap-page__switch-tokens--disabled": Zt
                              }),
                              "data-testid": "prepare-swap-page-switch-tokens",
                              onClick: () => {
                                Zt || (Lt(mt), Mt(_t), Se(!be));
                              },
                              title: s("swapSwapSwitch")
                            },
                            n.default.createElement(L.Icon, { name: L.IconName.Arrow2Down, size: L.IconSize.Lg })
                          )
                        )
                      ),
                      n.default.createElement(
                        "div",
                        { className: "prepare-swap-page__swap-to-content" },
                        n.default.createElement(
                          h.default,
                          { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.spaceBetween, alignItems: _.AlignItems.center },
                          n.default.createElement(G.default, {
                            onClick: () => oe(!0),
                            onClose: le,
                            selectedToken: _t,
                            testId: "prepare-swap-page-swap-to"
                          }),
                          n.default.createElement(
                            h.default,
                            {
                              display: _.DISPLAY.FLEX,
                              alignItems: _.AlignItems.center,
                              marginLeft: 2,
                              className: "prepare-swap-page__receive-amount-container"
                            },
                            n.default.createElement(
                              L.Text,
                              {
                                as: "h6",
                                "data-testid": "prepare-swap-page-receive-amount",
                                className: (0, c.default)("prepare-swap-page__receive-amount", { [ea]: ea })
                              },
                              Jt
                            )
                          )
                        ),
                        n.default.createElement(
                          h.default,
                          { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.spaceBetween, alignItems: _.AlignItems.stretch },
                          n.default.createElement(
                            "div",
                            { className: "prepare-swap-page__balance-message" },
                            (null == _t ? void 0 : _t.string) && Bt
                          )
                        )
                      ),
                      !Xt &&
                        Et &&
                        wt < 2 &&
                        n.default.createElement(
                          h.default,
                          { display: _.DISPLAY.FLEX, marginTop: 2 },
                          n.default.createElement(
                            L.BannerAlert,
                            {
                              severity: Yt ? _.SEVERITIES.WARNING : _.SEVERITIES.DANGER,
                              title: s(Yt ? "swapTokenVerifiedOn1SourceTitle" : "swapTokenAddedManuallyTitle"),
                              titleProps: { "data-testid": "swaps-banner-title" },
                              width: _.BLOCK_SIZES.FULL
                            },
                            n.default.createElement(
                              h.default,
                              null,
                              n.default.createElement(
                                L.Text,
                                { variant: _.TextVariant.bodyMd, as: "h6", "data-testid": "mm-banner-alert-notification-text" },
                                Yt
                                  ? s("swapTokenVerifiedOn1SourceDescription", [
                                      null == _t ? void 0 : _t.symbol,
                                      n.default.createElement(Wt, { key: "block-explorer-link" })
                                    ])
                                  : s("swapTokenAddedManuallyDescription", [n.default.createElement(Wt, { key: "block-explorer-link" })])
                              ),
                              !te &&
                                n.default.createElement(
                                  L.ButtonLink,
                                  {
                                    size: L.ButtonLinkSize.Inherit,
                                    textProps: { variant: _.TextVariant.bodyMd, alignItems: _.AlignItems.flexStart },
                                    onClick: (e) => {
                                      e.preventDefault(), ae(!0);
                                    }
                                  },
                                  s("swapContinueSwapping")
                                )
                            )
                          )
                        ),
                      Ve &&
                        n.default.createElement(
                          h.default,
                          { display: _.DISPLAY.FLEX, marginTop: 2 },
                          n.default.createElement(U.default, { swapsErrorKey: Ve, currentSlippage: Fe })
                        ),
                      Qe &&
                        (et || (!et && !Gt)) &&
                        n.default.createElement(W.default, {
                          onSelect: (e) => {
                            X((0, E.setMaxSlippage)(e));
                          },
                          maxAllowedSlippage: O.MAX_ALLOWED_SLIPPAGE,
                          currentSlippage: Fe,
                          smartTransactionsEnabled: et,
                          smartTransactionsOptInStatus: Je,
                          setSmartTransactionsOptInStatus: I.setSmartTransactionsOptInStatus,
                          currentSmartTransactionsError: rt,
                          isDirectWrappingEnabled: Gt,
                          onModalClose: () => {
                            X((0, E.setTransactionSettingsOpened)(!1));
                          }
                        }),
                      Zt && n.default.createElement($.default, { quoteCount: we, numberOfAggregators: Xe }),
                      Xt && n.default.createElement(Q.default, { setReceiveToAmount: re })
                    ),
                    !He && n.default.createElement(B.default, { submitText: Vt, disabled: !0, hideCancel: !0, showTermsOfService: !0 })
                  );
                }
                z.propTypes = {
                  ethBalance: s.default.string,
                  selectedAccountAddress: s.default.string,
                  shuffledTokensList: s.default.array
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/prepare-swap-page/prepare-swap-page.js" }
    ],
    [
      5147,
      {
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../mascot-background-animation/mascot-background-animation": 5144,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = p);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = d(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = c(e("prop-types")),
                  s = e("../../../contexts/i18n"),
                  o = c(e("../../../components/ui/box")),
                  l = e("../../../helpers/constants/design-system"),
                  i = e("../../../components/component-library"),
                  u = c(e("../mascot-background-animation/mascot-background-animation"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (d = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function p(e) {
                  const { quoteCount: t, numberOfAggregators: a } = e,
                    r = (0, n.useContext)(s.I18nContext);
                  return n.default.createElement(
                    o.default,
                    {
                      marginTop: 4,
                      display: l.DISPLAY.FLEX,
                      justifyContent: l.JustifyContent.center,
                      alignItems: l.AlignItems.center,
                      flexDirection: l.FLEX_DIRECTION.COLUMN
                    },
                    n.default.createElement(
                      o.default,
                      { display: l.DISPLAY.FLEX, justifyContent: l.JustifyContent.center, alignItems: l.AlignItems.center },
                      n.default.createElement(
                        i.Text,
                        { variant: l.TextVariant.bodyMd, as: "h6", color: l.TextColor.textAlternative, marginLeft: 1, marginRight: 1 },
                        r("swapFetchingQuote")
                      ),
                      n.default.createElement(
                        i.Text,
                        { variant: l.TextVariant.bodyMdBold, as: "h6", color: l.TextColor.textAlternative },
                        r("swapQuoteNofM", [Math.min(t + 1, a), a])
                      )
                    ),
                    n.default.createElement(u.default, null)
                  );
                }
                p.propTypes = { quoteCount: r.default.number.isRequired, numberOfAggregators: r.default.number.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/prepare-swap-page/quotes-loading-animation.js" }
    ],
    [
      5148,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/gas": 3957,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/network": 3963,
        "../../../../shared/constants/swaps": 3970,
        "../../../../shared/lib/metamask-controller-utils": 3977,
        "../../../../shared/lib/swaps-utils": 3979,
        "../../../../shared/lib/transactions-controller-utils": 3982,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../../shared/modules/string-utils": 4002,
        "../../../../shared/modules/transaction.utils": 4004,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../components/ui/info-tooltip": 4665,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/optimism/fetchEstimatedL1Fee": 4805,
        "../../../hooks/experiences/useRamps": 4815,
        "../../../hooks/gasFeeInput/useGasFeeInputs": 4818,
        "../../../hooks/useEqualityCheck": 4834,
        "../../../hooks/useEthFiatAmount": 4835,
        "../../../hooks/usePrevious": 4845,
        "../../../hooks/useTokenTracker": 4859,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../confirm-approve/confirm-approve.util": 4882,
        "../countdown-timer": 5124,
        "../exchange-rate-display": 5132,
        "../select-quote-popover": 5158,
        "../swaps-footer": 5177,
        "../swaps.util": 5179,
        "./slippage-notification-modal": 5149,
        "./view-quote-price-difference": 5151,
        "@sentry/browser": 1982,
        "bignumber.js": 2283,
        classnames: 2414,
        lodash: 3312,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = z);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = Z(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = X(e("bignumber.js")),
                  l = e("lodash"),
                  i = X(e("classnames")),
                  u = e("@sentry/browser"),
                  c = X(e("prop-types")),
                  d = e("../../../contexts/i18n"),
                  p = X(e("../select-quote-popover")),
                  f = e("../../../hooks/useEthFiatAmount"),
                  m = e("../../../hooks/useEqualityCheck"),
                  g = e("../../../hooks/usePrevious"),
                  h = e("../../../hooks/gasFeeInput/useGasFeeInputs"),
                  _ = e("../../../contexts/metametrics"),
                  E = e("../../../ducks/swaps/swaps"),
                  w = e("../../../selectors"),
                  v = e("../../../ducks/metamask/metamask"),
                  y = e("../../../store/actions"),
                  T = e("../../../helpers/constants/routes"),
                  b = e("../../../../shared/constants/network"),
                  S = e("../../../../shared/modules/conversion.utils"),
                  k = e("../../confirm-approve/confirm-approve.util"),
                  C = e("../swaps.util"),
                  x = e("../../../hooks/useTokenTracker"),
                  O = e("../../../../shared/constants/swaps"),
                  I = e("../../../../shared/constants/gas"),
                  P = X(e("../countdown-timer")),
                  A = X(e("../swaps-footer")),
                  M = X(e("../../../components/ui/box")),
                  N = e("../../../helpers/constants/design-system"),
                  R = e("../../../components/component-library"),
                  F = e("../../../../shared/constants/metametrics"),
                  L = e("../../../../shared/modules/string-utils"),
                  D = e("../../../../shared/modules/transaction.utils"),
                  j = e("../../../../shared/lib/metamask-controller-utils"),
                  q = e("../../../../shared/lib/transactions-controller-utils"),
                  W = e("../../../../app/scripts/lib/util"),
                  U = e("../../../../shared/lib/swaps-utils"),
                  B = X(e("../../../helpers/utils/optimism/fetchEstimatedL1Fee")),
                  G = X(e("../exchange-rate-display")),
                  H = X(e("../../../components/ui/info-tooltip")),
                  V = X(e("../../../hooks/experiences/useRamps")),
                  $ = X(e("./view-quote-price-difference")),
                  Q = X(e("./slippage-notification-modal"));
                function X(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function Z(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (Z = function (e) {
                    return e ? a : t;
                  })(e);
                }
                let K;
                const Y = "https://community.metamask.io/t/what-is-gas-why-do-transactions-take-so-long/3172";
                function z({ setReceiveToAmount: e }) {
                  var t, a, c, X, Z, z;
                  const J = (0, s.useHistory)(),
                    ee = (0, r.useDispatch)(),
                    te = (0, n.useContext)(d.I18nContext),
                    ae = (0, n.useContext)(_.MetaMetricsContext),
                    [ne, re] = (0, n.useState)(!1),
                    [se, oe] = (0, n.useState)(!1),
                    [le] = (0, n.useState)(!1),
                    [ie, ue] = (0, n.useState)(null),
                    [ce, de] = (0, n.useState)(null),
                    [pe, fe] = (0, n.useState)(null),
                    [me] = (0, n.useState)(Date.now()),
                    { openBuyCryptoInPdapp: ge } = (0, V.default)(),
                    [he, _e] = (0, n.useState)(!1),
                    [Ee, we] = (0, n.useState)(!1),
                    ve = [I.GasRecommendations.high, I.GasRecommendations.medium],
                    ye = (0, r.useSelector)(E.getBackgroundSwapRouteState),
                    Te = (0, r.useSelector)(E.getQuotes, l.isEqual);
                  (0, n.useEffect)(() => {
                    Object.values(Te).length ? "awaiting" === ye && J.push(T.AWAITING_SWAP_ROUTE) : J.push(T.PREPARE_SWAP_ROUTE);
                  }, [J, Te, ye]);
                  const be = (0, r.useSelector)(E.getQuotesLastFetched),
                    Se = (0, g.usePrevious)(be),
                    ke = (0, r.useSelector)(E.getUsedSwapsGasPrice),
                    Ce = (0, r.useSelector)(E.getCustomSwapsGas),
                    xe = (0, r.useSelector)(E.getCustomMaxFeePerGas),
                    Oe = (0, r.useSelector)(E.getCustomMaxPriorityFeePerGas),
                    Ie = (0, r.useSelector)(E.getSwapsUserFeeLevel),
                    Pe = (0, r.useSelector)(w.getTokenExchangeRates, l.isEqual),
                    Ae = (0, m.useEqualityCheck)(Pe),
                    { balance: Me } = (0, r.useSelector)(w.getSelectedAccount, r.shallowEqual),
                    Ne = (0, r.useSelector)(w.conversionRateSelector),
                    Re = (0, r.useSelector)(w.getUSDConversionRate),
                    Fe = (0, r.useSelector)(w.getIsMultiLayerFeeNetwork),
                    Le = (0, r.useSelector)(w.getCurrentCurrency),
                    De = (0, r.useSelector)(v.getTokens, l.isEqual),
                    je = (0, r.useSelector)(w.checkNetworkAndAccountSupports1559),
                    qe = (0, r.useSelector)(E.getBalanceError),
                    We = (0, r.useSelector)(E.getFetchParams, l.isEqual),
                    Ue = (0, r.useSelector)(E.getApproveTxParams, r.shallowEqual),
                    Be = (0, r.useSelector)(E.getSelectedQuote, l.isEqual),
                    Ge = (0, r.useSelector)(E.getTopQuote, l.isEqual),
                    He = Be || Ge,
                    Ve = (null == He || null === (t = He.trade) || void 0 === t ? void 0 : t.value) ?? "0x0",
                    $e = (0, r.useSelector)(w.getSwapsDefaultToken, l.isEqual),
                    Qe = (0, r.useSelector)(w.getCurrentChainId),
                    Xe = (0, r.useSelector)(v.getNativeCurrency),
                    Ze = (0, r.useSelector)(E.getReviewSwapClickedTimestamp),
                    Ke = (0, r.useSelector)(E.getSmartTransactionsOptInStatus),
                    Ye = (0, r.useSelector)(E.getSmartTransactionsEnabled),
                    ze = (0, r.useSelector)(E.getSwapsSTXLoading),
                    Je = (0, r.useSelector)(E.getCurrentSmartTransactionsError),
                    et = (0, r.useSelector)(E.getSmartTransactionsError),
                    tt = (0, r.useSelector)(E.getCurrentSmartTransactionsEnabled),
                    at = (0, r.useSelector)(E.getSmartTransactionFees, l.isEqual),
                    nt = (0, r.useSelector)(E.getSwapsNetworkConfig, r.shallowEqual),
                    rt = He.trade,
                    st = tt && Ke,
                    [ot] = (0, n.useState)(() => {
                      const e = Number(null == We ? void 0 : We.slippage);
                      return e > 0 && e <= 1 ? O.SLIPPAGE_LOW_ERROR : e >= 5 && e <= O.MAX_ALLOWED_SLIPPAGE ? O.SLIPPAGE_HIGH_ERROR : "";
                    });
                  let lt;
                  je && (lt = (0, h.useGasFeeInputs)(I.GasRecommendations.high, { userFeeLevel: Ie || I.GasRecommendations.high }));
                  const it = null == We ? void 0 : We.sourceToken,
                    ut = {
                      reg_tx_fee_in_usd: undefined,
                      reg_tx_fee_in_eth: undefined,
                      reg_tx_max_fee_in_usd: undefined,
                      reg_tx_max_fee_in_eth: undefined,
                      stx_fee_in_usd: undefined,
                      stx_fee_in_eth: undefined,
                      stx_max_fee_in_usd: undefined,
                      stx_max_fee_in_eth: undefined
                    },
                    ct =
                      (null == He ? void 0 : He.gasEstimateWithRefund) ||
                      `0x${(0, S.decimalToHex)((null == He ? void 0 : He.averageGas) || 0)}`,
                    dt = (null == He ? void 0 : He.gasEstimate) || "0x0",
                    pt = new o.default(dt, 16)
                      .times((null == He ? void 0 : He.gasMultiplier) || E.FALLBACK_GAS_MULTIPLIER, 10)
                      .round(0)
                      .toString(16),
                    ft = null != He && He.gasEstimate ? pt : `0x${(0, S.decimalToHex)((null == He ? void 0 : He.maxGas) || 0)}`,
                    mt = Ce || ft;
                  let gt, ht, _t;
                  if (je) {
                    const {
                      maxFeePerGas: e,
                      maxPriorityFeePerGas: t,
                      gasFeeEstimates: { estimatedBaseFee: a = "0" }
                    } = lt;
                    (gt = xe || (0, S.decGWEIToHexWEI)(e)),
                      (ht = Oe || (0, S.decGWEIToHexWEI)(t)),
                      (_t = (0, S.addHexes)((0, S.decGWEIToHexWEI)(a), ht));
                  }
                  let Et = (0, q.calcGasTotal)(mt, gt || ke);
                  null !== ce && (Et = (0, S.sumHexes)(Et || "0x0", ce || "0x0"));
                  const { tokensWithBalances: wt } = (0, x.useTokenTracker)({ tokens: De, includeFailedTokens: !0 }),
                    vt = it === $e.address ? $e : wt.find(({ address: e }) => (0, L.isEqualCaseInsensitive)(e, it)),
                    yt = vt || He.sourceTokenInfo,
                    Tt = (null == wt ? void 0 : wt.length) && (0, q.calcTokenAmount)(yt.balance || "0x0", yt.decimals).toFixed(9),
                    bt = wt && vt === undefined,
                    St = (0, D.parseStandardTokenTransactionData)(null == Ue ? void 0 : Ue.data),
                    kt = St && (0, j.getTokenValueParam)(St),
                    Ct = kt && (null == yt ? void 0 : yt.decimals) !== undefined && (0, q.calcTokenAmount)(kt, yt.decimals).toFixed(9),
                    xt = null == Ue ? void 0 : Ue.gas,
                    Ot = (0, n.useMemo)(
                      () =>
                        (0, C.quotesToRenderableData)({
                          quotes: Te,
                          gasPrice: je ? _t : ke,
                          conversionRate: Ne,
                          currentCurrency: Le,
                          approveGas: xt,
                          tokenConversionRates: Ae,
                          chainId: Qe,
                          smartTransactionEstimatedGas: Ye && Ke && (null == at ? void 0 : at.tradeTxFees),
                          nativeCurrencySymbol: Xe,
                          multiLayerL1ApprovalFeeTotal: pe
                        }),
                      [Te, ke, _t, je, Ne, Le, xt, Ae, Qe, null == at ? void 0 : at.tradeTxFees, Xe, Ye, Ke, pe]
                    ),
                    It = Ot.find((e) => e.aggId === He.aggregator),
                    {
                      destinationTokenDecimals: Pt,
                      destinationTokenSymbol: At,
                      destinationTokenValue: Mt,
                      sourceTokenDecimals: Nt,
                      sourceTokenSymbol: Rt,
                      sourceTokenValue: Ft
                    } = It;
                  let {
                    feeInFiat: Lt,
                    feeInEth: Dt,
                    rawEthFee: jt,
                    feeInUsd: qt
                  } = (0, C.getRenderableNetworkFeesForQuote)({
                    tradeGas: ct,
                    approveGas: xt,
                    gasPrice: je ? _t : ke,
                    currentCurrency: Le,
                    conversionRate: Ne,
                    USDConversionRate: Re,
                    tradeValue: Ve,
                    sourceSymbol: Rt,
                    sourceAmount: He.sourceAmount,
                    chainId: Qe,
                    nativeCurrencySymbol: Xe,
                    multiLayerL1FeeTotal: ce
                  });
                  (ut.reg_tx_fee_in_usd = Number(qt)), (ut.reg_tx_fee_in_eth = Number(jt));
                  const Wt = (0, C.getRenderableNetworkFeesForQuote)({
                    tradeGas: mt,
                    approveGas: xt,
                    gasPrice: gt || ke,
                    currentCurrency: Le,
                    conversionRate: Ne,
                    USDConversionRate: Re,
                    tradeValue: Ve,
                    sourceSymbol: Rt,
                    sourceAmount: He.sourceAmount,
                    chainId: Qe,
                    nativeCurrencySymbol: Xe,
                    multiLayerL1FeeTotal: ce
                  });
                  let { feeInFiat: Ut, feeInEth: Bt, rawEthFee: Gt, feeInUsd: Ht } = Wt;
                  if (
                    ((ut.reg_tx_max_fee_in_usd = Number(Ht)), (ut.reg_tx_max_fee_in_eth = Number(Gt)), st && null != at && at.tradeTxFees)
                  ) {
                    var Vt;
                    const e =
                        (null == at ? void 0 : at.tradeTxFees.feeEstimate) +
                        ((null == at || null === (Vt = at.approvalTxFees) || void 0 === Vt ? void 0 : Vt.feeEstimate) || 0),
                      t = e * nt.stxMaxFeeMultiplier;
                    ({
                      feeInFiat: Lt,
                      feeInEth: Dt,
                      rawEthFee: jt,
                      feeInUsd: qt
                    } = (0, C.getFeeForSmartTransaction)({
                      chainId: Qe,
                      currentCurrency: Le,
                      conversionRate: Ne,
                      USDConversionRate: Re,
                      nativeCurrencySymbol: Xe,
                      feeInWeiDec: e
                    })),
                      (ut.stx_fee_in_usd = Number(qt)),
                      (ut.stx_fee_in_eth = Number(jt)),
                      (ut.estimated_gas = null == at ? void 0 : at.tradeTxFees.gasLimit),
                      ({
                        feeInFiat: Ut,
                        feeInEth: Bt,
                        rawEthFee: Gt,
                        feeInUsd: Ht
                      } = (0, C.getFeeForSmartTransaction)({
                        chainId: Qe,
                        currentCurrency: Le,
                        conversionRate: Ne,
                        USDConversionRate: Re,
                        nativeCurrencySymbol: Xe,
                        feeInWeiDec: t
                      })),
                      (ut.stx_max_fee_in_usd = Number(Ht)),
                      (ut.stx_max_fee_in_eth = Number(Gt));
                  }
                  const $t = new o.default(He.sourceAmount),
                    Qt = new o.default(He.trade.value || 0, 10).plus(new o.default(Et, 16)),
                    Xt = ((null == wt ? void 0 : wt.length) || qe) && $t.gt(new o.default(yt.balance || "0x0")),
                    Zt = Qt.gt(new o.default(Me || "0x0")),
                    Kt = Xt
                      ? (0, q.toPrecisionWithoutTrailingZeros)((0, q.calcTokenAmount)($t, yt.decimals).minus(Tt).toString(10), 6)
                      : null,
                    Yt = Zt
                      ? (0, q.toPrecisionWithoutTrailingZeros)(Qt.minus(Me, 16).div("1000000000000000000", 10).toString(10), 6)
                      : null;
                  let zt;
                  st && null != et && et.balanceNeededWei && (zt = (0, S.decWEIToDecETH)(et.balanceNeededWei - et.currentBalanceWei));
                  const Jt = (0, g.usePrevious)(zt),
                    ea = (0, r.useSelector)(E.getDestinationTokenInfo, l.isEqual);
                  (0, n.useEffect)(() => {
                    st
                      ? Xt
                        ? ee((0, E.setBalanceError)(!0))
                        : qe && !Xt && ee((0, E.setBalanceError)(!1))
                      : Xt || Zt
                      ? ee((0, E.setBalanceError)(!0))
                      : !qe || Xt || Zt || ee((0, E.setBalanceError)(!1));
                  }, [Xt, Zt, ee, st, qe]),
                    (0, n.useEffect)(() => {
                      !ie && Ct && ue(Ct);
                    }, [ie, Ct]);
                  const ta = (qe || Kt || (!st && Yt) || (st && zt)) && !le,
                    aa = (0, r.useSelector)(w.isHardwareWallet),
                    na = (0, r.useSelector)(w.getHardwareWalletType),
                    ra = Object.values(Te).length,
                    sa = (0, n.useRef)(),
                    oa = (0, n.useMemo)(
                      () => ({
                        token_from: Rt,
                        token_from_amount: Ft,
                        token_to: At,
                        token_to_amount: Mt,
                        request_type: null == We ? void 0 : We.balanceError,
                        slippage: null == We ? void 0 : We.slippage,
                        custom_slippage: 2 !== (null == We ? void 0 : We.slippage),
                        response_time: null == We ? void 0 : We.responseTime,
                        best_quote_source: null == Ge ? void 0 : Ge.aggregator,
                        available_quotes: ra,
                        is_hardware_wallet: aa,
                        hardware_wallet_type: na,
                        stx_enabled: Ye,
                        current_stx_enabled: tt,
                        stx_user_opt_in: Ke
                      }),
                      [
                        Rt,
                        Ft,
                        At,
                        Mt,
                        null == We ? void 0 : We.balanceError,
                        null == We ? void 0 : We.slippage,
                        null == We ? void 0 : We.responseTime,
                        null == Ge ? void 0 : Ge.aggregator,
                        ra,
                        aa,
                        na,
                        Ye,
                        tt,
                        Ke
                      ]
                    ),
                    la = (0, n.useCallback)(() => {
                      ae({
                        event: "Best Quote Reviewed",
                        category: F.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: { ...oa, network_fees: Lt }
                      });
                    }, [ae, oa, Lt]),
                    ia = (0, n.useCallback)(() => {
                      ae({
                        event: "Review Quote Component Loaded",
                        category: F.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: { ...oa, response_time: me - Ze }
                      });
                    }, [ae, oa, me, Ze]);
                  (0, n.useEffect)(() => {
                    !sa.current &&
                      [Rt, Ft, At, Mt, We, Ge, ra, Lt].every((e) => null !== e && e !== undefined) &&
                      ((sa.current = !0), la());
                  }, [We, Ge, ra, Lt, At, Mt, Rt, Ft, la]),
                    (0, n.useEffect)(() => {
                      if (((st && Jt) || !st) && be === Se) return;
                      let e;
                      if (st && zt) e = zt;
                      else {
                        if (st || !Yt) return;
                        e = Yt;
                      }
                      ae({
                        event: F.MetaMetricsEventName.SwapError,
                        category: F.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: {
                          ...oa,
                          error_type: F.MetaMetricsEventErrorType.InsufficientGas,
                          additional_balance_needed: e
                        }
                      });
                    }, [be, Se, zt, st, ae, Jt, Yt, oa]);
                  const ua = He.fee,
                    ca = () => {
                      ae({
                        event: "Edit Spend Limit Opened",
                        category: F.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: { ...oa, custom_spend_limit_set: ie === Ct, custom_spend_limit_amount: ie === Ct ? null : Ct }
                      }),
                        ee(
                          (0, y.showModal)({
                            name: "EDIT_APPROVAL_PERMISSION",
                            decimals: yt.decimals,
                            origin: "MetaMask",
                            setCustomAmount: (e) => {
                              const t = "" === e ? ie : e,
                                a = (0, k.getCustomTxParamsData)(Ue.data, { customPermissionAmount: t, decimals: yt.decimals });
                              null != t && t.length && Ue.data !== a && ee((0, y.setCustomApproveTxData)(a));
                            },
                            tokenAmount: ie,
                            customTokenAmount: ie === Ct ? null : Ct,
                            tokenBalance: Tt,
                            tokenSymbol: yt.symbol,
                            requiredMinimum: (0, q.calcTokenAmount)(He.sourceAmount, yt.decimals)
                          })
                        );
                    },
                    da = Boolean(zt || Yt),
                    pa = bt
                      ? te("swapTokenBalanceUnavailable", [Rt])
                      : te("swapApproveNeedMoreTokens", [
                          n.default.createElement("span", { key: "swapApproveNeedMoreTokens-1" }, Kt || zt || Yt),
                          Kt && Rt !== $e.symbol ? Rt : $e.symbol
                        ]),
                    fa = null == He || null === (a = He.priceSlippage) || void 0 === a ? void 0 : a.bucket,
                    ma = (0, g.usePrevious)(fa);
                  (0, n.useEffect)(() => {
                    he && ma === I.GasRecommendations.medium && fa === I.GasRecommendations.high && _e(!1);
                  }, [fa, he, ma]);
                  let ga = null;
                  const ha = (0, f.useEthFiatAmount)(
                      (null == He || null === (c = He.priceSlippage) || void 0 === c ? void 0 : c.sourceAmountInETH) || 0,
                      { showFiat: !0 }
                    ),
                    _a = (0, f.useEthFiatAmount)(
                      (null == He || null === (X = He.priceSlippage) || void 0 === X ? void 0 : X.destinationAmountInETH) || 0,
                      { showFiat: !0 }
                    ),
                    Ea = !ha || !_a || Boolean(null == He || null === (Z = He.priceSlippage) || void 0 === Z ? void 0 : Z.calculationError);
                  let wa = 0;
                  null != He &&
                    null !== (z = He.priceSlippage) &&
                    void 0 !== z &&
                    z.ratio &&
                    (wa = parseFloat(new o.default(He.priceSlippage.ratio, 10).minus(1, 10).times(100, 10).toFixed(2), 10));
                  const va = (0, g.usePrevious)(wa),
                    ya = !bt && !ta && He && (ve.includes(fa) || Ea);
                  ya &&
                    (ga = n.default.createElement($.default, {
                      usedQuote: He,
                      sourceTokenValue: Ft,
                      destinationTokenValue: Mt,
                      priceSlippageFromSource: ha,
                      priceSlippageFromDestination: _a,
                      priceDifferencePercentage: wa,
                      priceSlippageUnknownFiatValue: Ea,
                      onAcknowledgementClick: () => {
                        _e(!0);
                      },
                      acknowledged: he
                    }));
                  const Ta = ta || ya,
                    ba = Boolean(
                      ne ||
                        qe ||
                        bt ||
                        (ya && !he) ||
                        (je && _t === undefined) ||
                        (!je && (null === ke || ke === undefined)) ||
                        (tt && (Je || et)) ||
                        (tt && Ke && !(null != at && at.tradeTxFees))
                    );
                  (0, n.useEffect)(() => {
                    ya && he && be !== Se && wa !== va && _e(!1);
                  }, [he, Se, be, ya, wa, va]),
                    (0, n.useEffect)(() => {
                      if (st && !Xt) {
                        const e = { from: rt.from, to: rt.to, value: rt.value, data: rt.data, gas: rt.gas, chainId: Qe };
                        (K = setInterval(() => {
                          ze ||
                            ee(
                              (0, E.fetchSwapsSmartTransactionFees)({
                                unsignedTransaction: e,
                                approveTxParams: Ue,
                                fallbackOnNotEnoughFunds: !1
                              })
                            );
                        }, nt.stxGetTransactionsRefreshTime)),
                          ee(
                            (0, E.fetchSwapsSmartTransactionFees)({
                              unsignedTransaction: e,
                              approveTxParams: Ue,
                              fallbackOnNotEnoughFunds: !1
                            })
                          );
                      } else K && clearInterval(K);
                      return () => clearInterval(K);
                    }, [ee, st, rt.data, rt.from, rt.value, rt.gas, rt.to, Qe, nt.stxGetTransactionsRefreshTime, Xt]),
                    (0, n.useEffect)(() => {
                      ee((0, y.setSwapsQuotesPollingLimitEnabled)(!0)), Ze && ia();
                    }, [ee, ia, Ze]),
                    (0, n.useEffect)(() => {
                      !tt && Je && ne && re(!1);
                    }, [tt, Je, ne]),
                    (0, n.useEffect)(() => {
                      if (!Fe || null == He || !He.multiLayerL1TradeFeeTotal) return;
                      (async () => {
                        try {
                          let e = "0x0";
                          Ue &&
                            ((e = await (0, B.default)({
                              txParams: { ...Ue, gasPrice: (0, W.addHexPrefix)(Ue.gasPrice), value: "0x0" },
                              chainId: Qe
                            })),
                            fe(e));
                          const t = (0, S.sumHexes)(He.multiLayerL1TradeFeeTotal, e);
                          de(t);
                        } catch (e) {
                          (0, u.captureException)(e), de(null), fe(null);
                        }
                      })();
                    }, [rt, Ue, Fe, Qe, He]);
                  const Sa = (0, U.calcTokenValue)(Mt, Pt),
                    ka = (0, q.calcTokenAmount)(Sa, Pt),
                    Ca = (0, C.formatSwapsValueForDisplay)(ka),
                    xa = Ca.match(/\d+/gu).join("").length;
                  let Oa = Ca;
                  xa > 20 && (Oa = `${Ca.slice(0, 20)}...`),
                    (0, n.useEffect)(() => {
                      e(Oa);
                    }, [Oa, e]);
                  const Ia = !Ue || (qe && !le),
                    Pa = n.default.createElement(
                      "span",
                      { key: "fee-card-approve-symbol", className: "fee-card__bold" },
                      te("enableToken", [Rt])
                    ),
                    Aa = ({ acknowledgedSlippage: e = !1 }) => {
                      !ot || e
                        ? (re(!0),
                          qe
                            ? ea.symbol === $e.symbol
                              ? J.push(T.DEFAULT_ROUTE)
                              : J.push(`${T.ASSET_ROUTE}/${ea.address}`)
                            : st && null != at && at.tradeTxFees
                            ? ee(
                                (0, E.signAndSendSwapsSmartTransaction)({
                                  unsignedTransaction: rt,
                                  trackEvent: ae,
                                  history: J,
                                  additionalTrackingParams: ut
                                })
                              )
                            : ee((0, E.signAndSendTransactions)(J, ae, ut)))
                        : we(!0);
                    };
                  return n.default.createElement(
                    "div",
                    { className: "review-quote" },
                    n.default.createElement(
                      "div",
                      { className: "review-quote__content" },
                      n.default.createElement(Q.default, {
                        isOpen: Ee,
                        setSlippageNotificationModalOpened: we,
                        slippageErrorKey: ot,
                        onSwapSubmit: Aa,
                        currentSlippage: null == We ? void 0 : We.slippage
                      }),
                      se &&
                        n.default.createElement(p.default, {
                          quoteDataRows: Ot,
                          onClose: () => oe(!1),
                          onSubmit: (e) => ee((0, E.swapsQuoteSelected)(e)),
                          swapToSymbol: At,
                          initialAggId: He.aggregator,
                          onQuoteDetailsIsOpened: () => {
                            ae({
                              event: "Quote Details Opened",
                              category: F.MetaMetricsEventCategory.Swaps,
                              sensitiveProperties: {
                                ...oa,
                                other_quote_selected: (null == He ? void 0 : He.aggregator) !== (null == Ge ? void 0 : Ge.aggregator),
                                other_quote_selected_source:
                                  (null == He ? void 0 : He.aggregator) === (null == Ge ? void 0 : Ge.aggregator)
                                    ? null
                                    : null == He
                                    ? void 0
                                    : He.aggregator
                              }
                            });
                          },
                          hideEstimatedGasFee: Ye && Ke
                        }),
                      Ta &&
                        n.default.createElement(
                          n.default.Fragment,
                          null,
                          ga,
                          (ta || bt) &&
                            n.default.createElement(R.BannerAlert, {
                              title: te("notEnoughBalance"),
                              titleProps: { "data-testid": "swaps-banner-title" },
                              severity: N.Severity.Info,
                              description: pa,
                              descriptionProps: { "data-testid": "mm-banner-alert-notification-text" },
                              actionButtonLabel: da ? te("buyMoreAsset", [Xe]) : undefined,
                              actionButtonOnClick: da ? () => ge() : undefined,
                              marginTop: 2
                            })
                        ),
                      n.default.createElement(
                        "div",
                        { className: "review-quote__countdown-timer-container" },
                        n.default.createElement(P.default, { timeStarted: be, warningTime: "0:10", labelKey: "swapNewQuoteIn" })
                      ),
                      n.default.createElement(
                        M.default,
                        {
                          marginTop: 1,
                          marginBottom: 0,
                          display: N.DISPLAY.FLEX,
                          flexDirection: N.FlexDirection.Column,
                          className: "review-quote__overview"
                        },
                        n.default.createElement(
                          M.default,
                          { display: N.DISPLAY.FLEX, justifyContent: N.JustifyContent.spaceBetween, alignItems: N.AlignItems.center },
                          n.default.createElement(
                            R.Text,
                            { variant: N.TextVariant.bodyMd, marginRight: 1, color: N.TextColor.textAlternative },
                            te("quoteRate")
                          ),
                          n.default.createElement(G.default, {
                            primaryTokenValue: (0, U.calcTokenValue)(Ft, Nt),
                            primaryTokenDecimals: Nt,
                            primaryTokenSymbol: Rt,
                            secondaryTokenValue: Sa,
                            secondaryTokenDecimals: Pt,
                            secondaryTokenSymbol: At,
                            boldSymbols: !1,
                            className: "main-quote-summary__exchange-rate-display",
                            showIconForSwappingTokens: !1
                          })
                        ),
                        n.default.createElement(
                          M.default,
                          { display: N.DISPLAY.FLEX, justifyContent: N.JustifyContent.spaceBetween, alignItems: N.AlignItems.stretch },
                          n.default.createElement(
                            M.default,
                            { display: N.DISPLAY.FLEX, alignItems: N.AlignItems.center, width: N.FRACTIONS.SIX_TWELFTHS },
                            n.default.createElement(
                              R.Text,
                              { variant: N.TextVariant.bodyMd, as: "h6", color: N.TextColor.textAlternative, marginRight: 1 },
                              te("transactionDetailGasHeading")
                            ),
                            n.default.createElement(H.default, {
                              position: "left",
                              contentText: n.default.createElement(
                                n.default.Fragment,
                                null,
                                n.default.createElement(
                                  "p",
                                  { className: "fee-card__info-tooltip-paragraph" },
                                  te("swapGasFeesSummary", [
                                    (() => {
                                      switch (Qe) {
                                        case b.CHAIN_IDS.MAINNET:
                                          return te("networkNameEthereum");
                                        case b.CHAIN_IDS.BSC:
                                          return te("networkNameBSC");
                                        case b.CHAIN_IDS.POLYGON:
                                          return te("networkNamePolygon");
                                        case b.CHAIN_IDS.LOCALHOST:
                                          return te("networkNameTestnet");
                                        case b.CHAIN_IDS.GOERLI:
                                          return te("networkNameGoerli");
                                        case b.CHAIN_IDS.AVALANCHE:
                                          return te("networkNameAvalanche");
                                        case b.CHAIN_IDS.OPTIMISM:
                                          return te("networkNameOpMainnet");
                                        case b.CHAIN_IDS.ARBITRUM:
                                          return te("networkNameArbitrum");
                                        case b.CHAIN_IDS.ZKSYNC_ERA:
                                          return te("networkNameZkSyncEra");
                                        case b.CHAIN_IDS.LINEA_MAINNET:
                                          return te("networkNameLinea");
                                        default:
                                          throw new Error("This network is not supported for token swaps");
                                      }
                                    })()
                                  ])
                                ),
                                n.default.createElement("p", { className: "fee-card__info-tooltip-paragraph" }, te("swapGasFeesDetails")),
                                n.default.createElement(
                                  "p",
                                  { className: "fee-card__info-tooltip-paragraph" },
                                  n.default.createElement(
                                    "a",
                                    {
                                      className: "fee-card__link",
                                      onClick: () => {
                                        ae({ event: 'Clicked "Gas Fees: Learn More" Link', category: F.MetaMetricsEventCategory.Swaps }),
                                          global.platform.openTab({ url: Y });
                                      },
                                      target: "_blank",
                                      rel: "noopener noreferrer"
                                    },
                                    te("swapGasFeesLearnMore")
                                  )
                                )
                              )
                            })
                          ),
                          n.default.createElement(
                            M.default,
                            { display: N.DISPLAY.FLEX, alignItems: N.AlignItems.flexEnd, width: N.FRACTIONS.SIX_TWELFTHS },
                            n.default.createElement(
                              R.Text,
                              {
                                variant: N.TextVariant.bodyMd,
                                as: "h6",
                                color: N.TextColor.textAlternative,
                                width: N.FRACTIONS.EIGHT_TWELFTHS,
                                textAlign: N.TEXT_ALIGN.RIGHT,
                                paddingRight: 1
                              },
                              Dt
                            ),
                            n.default.createElement(
                              R.Text,
                              {
                                variant: N.TextVariant.bodyMdBold,
                                as: "h6",
                                color: N.TextColor.textAlternative,
                                "data-testid": "review-quote-gas-fee-in-fiat",
                                width: N.FRACTIONS.FOUR_TWELFTHS,
                                textAlign: N.TEXT_ALIGN.RIGHT
                              },
                              ` ${Lt}`
                            )
                          )
                        ),
                        (Ut || Bt) &&
                          n.default.createElement(
                            M.default,
                            { display: N.DISPLAY.FLEX },
                            n.default.createElement(M.default, { display: N.DISPLAY.FLEX, width: N.FRACTIONS.SIX_TWELFTHS }),
                            n.default.createElement(
                              M.default,
                              { display: N.DISPLAY.FLEX, justifyContent: N.JustifyContent.flexEnd, width: N.FRACTIONS.SIX_TWELFTHS },
                              n.default.createElement(
                                R.Text,
                                {
                                  variant: N.TextVariant.bodySm,
                                  color: N.TextColor.textAlternative,
                                  width: N.FRACTIONS.EIGHT_TWELFTHS,
                                  paddingRight: 1,
                                  textAlign: N.TEXT_ALIGN.RIGHT
                                },
                                `${te("maxFee")}: `
                              ),
                              n.default.createElement(
                                R.Text,
                                {
                                  variant: N.TextVariant.bodySm,
                                  color: N.TextColor.textAlternative,
                                  width: N.FRACTIONS.FOUR_TWELFTHS,
                                  textAlign: N.TEXT_ALIGN.RIGHT
                                },
                                Ut || Bt
                              )
                            )
                          ),
                        !Ia &&
                          n.default.createElement(
                            M.default,
                            { display: N.DISPLAY.FLEX, justifyContent: N.JustifyContent.spaceBetween },
                            n.default.createElement(
                              R.Text,
                              { variant: N.TextVariant.bodyMd, as: "h6", color: N.TextColor.textAlternative, marginRight: 1 },
                              te("swapEnableTokenForSwapping", [Pa])
                            ),
                            n.default.createElement(
                              R.Text,
                              { variant: N.TextVariant.bodyMd },
                              n.default.createElement(
                                R.ButtonLink,
                                { onClick: () => ca(), size: N.Size.inherit, className: "review-quote__edit-limit" },
                                te("swapEditLimit")
                              )
                            )
                          ),
                        n.default.createElement(
                          M.default,
                          {
                            display: N.DISPLAY.FLEX,
                            marginTop: 3,
                            justifyContent: N.JustifyContent.center,
                            alignItems: N.AlignItems.center
                          },
                          n.default.createElement(
                            R.Text,
                            { variant: N.TextVariant.bodySm, color: N.TextColor.textDefault },
                            te("swapIncludesMetaMaskFeeViewAllQuotes", [
                              ua,
                              n.default.createElement(
                                R.ButtonLink,
                                {
                                  key: "view-all-quotes",
                                  "data-testid": "review-quote-view-all-quotes",
                                  onClick: () => {
                                    ae({
                                      event: "All Available Quotes Opened",
                                      category: F.MetaMetricsEventCategory.Swaps,
                                      sensitiveProperties: {
                                        ...oa,
                                        other_quote_selected:
                                          (null == He ? void 0 : He.aggregator) !== (null == Ge ? void 0 : Ge.aggregator),
                                        other_quote_selected_source:
                                          (null == He ? void 0 : He.aggregator) === (null == Ge ? void 0 : Ge.aggregator)
                                            ? null
                                            : null == He
                                            ? void 0
                                            : He.aggregator
                                      }
                                    }),
                                      oe(!0);
                                  },
                                  size: N.Size.inherit
                                },
                                te("viewAllQuotes")
                              )
                            ])
                          )
                        )
                      )
                    ),
                    n.default.createElement(A.default, {
                      onSubmit: Aa,
                      submitText: te(st && ze ? "preparingSwap" : "swap"),
                      hideCancel: !0,
                      disabled: ba,
                      className: (0, i.default)("review-quote__footer", { "review-quote__thin-swaps-footer": Ta }),
                      showTopBorder: !0,
                      showTermsOfService: !0
                    })
                  );
                }
                z.propTypes = { setReceiveToAmount: c.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/prepare-swap-page/review-quote.js" }
    ],
    [
      5149,
      {
        "../../../../shared/constants/swaps": 3970,
        "../../../components/component-library": 4453,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../swaps-banner-alert/swaps-banner-alert": 5176,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function ({
                    isOpen: e,
                    slippageErrorKey: t,
                    setSlippageNotificationModalOpened: a,
                    onSwapSubmit: n,
                    currentSlippage: c
                  }) {
                    const d = (0, r.useContext)(s.I18nContext),
                      [p, f] = (0, r.useState)(!1),
                      m = d(p ? "preparingSwap" : "swapAnyway");
                    return r.default.createElement(
                      l.Modal,
                      {
                        onClose: () => a(!1),
                        isOpen: e,
                        isClosedOnOutsideClick: !0,
                        isClosedOnEscapeKey: !0,
                        className: "mm-modal__custom-scrollbar"
                      },
                      r.default.createElement(l.ModalOverlay, null),
                      r.default.createElement(
                        l.ModalContent,
                        null,
                        r.default.createElement(
                          l.ModalHeader,
                          { onClose: () => a(!1) },
                          t === i.SLIPPAGE_HIGH_ERROR ? d("swapHighSlippage") : t === i.SLIPPAGE_LOW_ERROR ? d("swapLowSlippage") : ""
                        ),
                        r.default.createElement(
                          l.Box,
                          {
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Column,
                            justifyContent: o.JustifyContent.spaceBetween,
                            alignItems: o.AlignItems.stretch,
                            className: "high-slippage__content",
                            marginTop: 7
                          },
                          r.default.createElement(u.default, { swapsErrorKey: t, showTransactionSettingsLink: !0, currentSlippage: c }),
                          r.default.createElement(
                            l.Box,
                            { marginTop: 5 },
                            r.default.createElement(
                              l.ButtonPrimary,
                              {
                                onClick: () => {
                                  f(!0), n({ acknowledgedSlippage: !0 });
                                },
                                block: !0,
                                "data-testid": "high-slippage-continue-anyway",
                                disabled: p
                              },
                              m
                            )
                          )
                        )
                      )
                    );
                  });
                var n,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = c(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = e("../../../contexts/i18n"),
                  o = e("../../../helpers/constants/design-system"),
                  l = e("../../../components/component-library"),
                  i = e("../../../../shared/constants/swaps"),
                  u = (n = e("../swaps-banner-alert/swaps-banner-alert")) && n.__esModule ? n : { default: n };
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (c = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/prepare-swap-page/slippage-notification-modal.tsx" }
    ],
    [
      5150,
      {
        "../../../../shared/constants/swaps": 3970,
        "../../../components/component-library": 4453,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function ({ onStartSwapping: e, onManageStxInSettings: t, isOpen: a }) {
                    const n = (0, s.useI18nContext)();
                    return r.default.createElement(
                      l.Modal,
                      {
                        isOpen: a,
                        onClose: e,
                        isClosedOnOutsideClick: !1,
                        isClosedOnEscapeKey: !1,
                        className: "mm-modal__custom-scrollbar"
                      },
                      r.default.createElement(l.ModalOverlay, null),
                      r.default.createElement(
                        l.ModalContent,
                        null,
                        r.default.createElement(
                          l.ModalHeader,
                          { alignItems: o.AlignItems.center, justifyContent: o.JustifyContent.center },
                          n("smartSwapsAreHere")
                        ),
                        r.default.createElement(
                          l.Box,
                          { display: o.Display.Flex, flexDirection: o.FlexDirection.Column, gap: 4, marginTop: 4 },
                          r.default.createElement(
                            l.Box,
                            { display: o.Display.Flex, flexDirection: o.FlexDirection.Column },
                            r.default.createElement("img", {
                              src: "./images/logo/metamask-smart-transactions.png",
                              alt: n("swapSwapSwitch")
                            })
                          ),
                          r.default.createElement(l.Text, null, n("smartSwapsDescription")),
                          r.default.createElement(
                            l.Text,
                            { as: "ul", marginTop: 3, marginBottom: 3, style: { listStyle: "inside" } },
                            r.default.createElement("li", { key: "stxBenefit1" }, n("stxBenefit1")),
                            r.default.createElement("li", { key: "stxBenefit2" }, n("stxBenefit2")),
                            r.default.createElement("li", { key: "stxBenefit3" }, n("stxBenefit3")),
                            r.default.createElement(
                              "li",
                              { key: "stxBenefit4" },
                              n("stxBenefit4"),
                              r.default.createElement(l.Text, { as: "span", fontWeight: o.FontWeight.Normal }, " *")
                            )
                          ),
                          r.default.createElement(
                            l.Text,
                            { color: o.TextColor.textAlternative },
                            n("smartSwapsDescription2", [
                              r.default.createElement(
                                l.ButtonLink,
                                {
                                  size: l.ButtonLinkSize.Inherit,
                                  href: i.SMART_SWAPS_FAQ_AND_RISK_DISCLOSURES_URL,
                                  externalLink: !0,
                                  display: o.Display.Inline,
                                  key: "smartSwapsDescription2"
                                },
                                n("faqAndRiskDisclosures")
                              )
                            ])
                          ),
                          r.default.createElement(
                            l.Button,
                            { variant: l.ButtonVariant.Primary, onClick: e, width: o.BlockSize.Full },
                            n("enableSmartSwaps")
                          ),
                          r.default.createElement(
                            l.Button,
                            { type: "link", variant: l.ButtonVariant.Link, onClick: t, width: o.BlockSize.Full },
                            n("manageInSettings")
                          )
                        )
                      )
                    );
                  });
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n },
                  s = e("../../../hooks/useI18nContext"),
                  o = e("../../../helpers/constants/design-system"),
                  l = e("../../../components/component-library"),
                  i = e("../../../../shared/constants/swaps");
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/prepare-swap-page/smart-transactions-popover.tsx" }
    ],
    [
      5151,
      {
        "../../../../shared/constants/gas": 3957,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = p);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = d(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = c(e("prop-types")),
                  s = e("../../../contexts/i18n"),
                  o = c(e("../../../components/ui/box")),
                  l = e("../../../helpers/constants/design-system"),
                  i = e("../../../../shared/constants/gas"),
                  u = e("../../../components/component-library");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (d = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function p(e) {
                  const {
                      usedQuote: t,
                      sourceTokenValue: a,
                      destinationTokenValue: r,
                      onAcknowledgementClick: c,
                      acknowledged: d,
                      priceSlippageFromSource: p,
                      priceSlippageFromDestination: f,
                      priceDifferencePercentage: m,
                      priceSlippageUnknownFiatValue: g
                    } = e,
                    h = (0, n.useContext)(s.I18nContext);
                  let _ = h("swapPriceUnavailableTitle"),
                    E = h("swapPriceUnavailableDescription"),
                    w = i.GasRecommendations.high;
                  g ||
                    ((_ = h("swapPriceDifferenceTitle", [m])),
                    (E = h("swapPriceDifference", [a, t.sourceTokenInfo.symbol, p, r, t.destinationTokenInfo.symbol, f])),
                    (w = t.priceSlippage.bucket));
                  const v = w === i.GasRecommendations.high ? l.SEVERITIES.DANGER : l.SEVERITIES.WARNING;
                  return n.default.createElement(
                    o.default,
                    { display: l.DISPLAY.FLEX, marginTop: 2 },
                    n.default.createElement(
                      u.BannerAlert,
                      {
                        title: _,
                        titleProps: { "data-testid": "swaps-banner-title" },
                        severity: v,
                        width: l.BLOCK_SIZES.FULL,
                        "data-testid": "mm-banner-alert"
                      },
                      n.default.createElement(
                        o.default,
                        null,
                        n.default.createElement(
                          u.Text,
                          { variant: l.TextVariant.bodyMd, as: "h6", "data-testid": "mm-banner-alert-notification-text" },
                          E
                        ),
                        !d &&
                          n.default.createElement(
                            u.ButtonLink,
                            {
                              size: u.ButtonLinkSize.Inherit,
                              textProps: { variant: l.TextVariant.bodyMd, alignItems: l.AlignItems.flexStart },
                              onClick: c
                            },
                            h("swapAnyway")
                          )
                      )
                    )
                  );
                }
                p.propTypes = {
                  usedQuote: r.default.object,
                  sourceTokenValue: r.default.string,
                  destinationTokenValue: r.default.string,
                  onAcknowledgementClick: r.default.func,
                  acknowledged: r.default.bool,
                  priceSlippageFromSource: r.default.string,
                  priceSlippageFromDestination: r.default.string,
                  priceDifferencePercentage: r.default.number,
                  priceSlippageUnknownFiatValue: r.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/prepare-swap-page/view-quote-price-difference.js" }
    ],
    [
      5152,
      { "./searchable-item-list": 5157 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./searchable-item-list")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/searchable-item-list/index.js" }
    ],
    [
      5153,
      { "./item-list.component": 5154 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./item-list.component")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/searchable-item-list/item-list/index.js" }
    ],
    [
      5154,
      {
        "../../../../../shared/constants/metametrics": 3962,
        "../../../../../shared/constants/swaps": 3970,
        "../../../../components/ui/actionable-message/actionable-message": 4603,
        "../../../../components/ui/button": 4611,
        "../../../../components/ui/identicon": 4664,
        "../../../../components/ui/url-icon": 4745,
        "../../../../contexts/i18n": 4748,
        "../../../../contexts/metametrics": 4749,
        "../../../../helpers/utils/util": 4812,
        "../../../../selectors": 5197,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = w);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = E(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = _(e("prop-types")),
                  o = _(e("classnames")),
                  l = _(e("../../../../components/ui/identicon")),
                  i = _(e("../../../../components/ui/url-icon")),
                  u = _(e("../../../../components/ui/button")),
                  c = _(e("../../../../components/ui/actionable-message/actionable-message")),
                  d = e("../../../../contexts/i18n"),
                  p = e("../../../../selectors"),
                  f = e("../../../../../shared/constants/metametrics"),
                  m = e("../../../../../shared/constants/swaps"),
                  g = e("../../../../helpers/utils/util"),
                  h = e("../../../../contexts/metametrics");
                function _(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (E = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function w({
                  results: e = [],
                  onClickItem: t,
                  onOpenImportTokenModalClick: a,
                  Placeholder: s,
                  listTitle: _,
                  maxListItems: E = 6,
                  searchQuery: w = "",
                  containerRef: v,
                  hideRightLabels: y,
                  hideItemIf: T,
                  listContainerClassName: b
                }) {
                  const S = (0, n.useContext)(d.I18nContext),
                    k = (0, r.useSelector)(p.getCurrentChainId),
                    C =
                      (0, r.useSelector)(p.getRpcPrefsForCurrentProvider).blockExplorerUrl ??
                      m.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[k] ??
                      null,
                    x = (0, r.useSelector)(p.getUseCurrencyRateCheck),
                    O = (0, g.getURLHostName)(C),
                    I = (0, n.useContext)(h.MetaMetricsContext),
                    P = 1 === e.length && e[0].notImported,
                    A = s ? n.default.createElement(s, { searchQuery: w }) : null;
                  return 0 === e.length
                    ? A
                    : n.default.createElement(
                        "div",
                        { className: "searchable-item-list" },
                        _ ? n.default.createElement("div", { className: "searchable-item-list__title" }, _) : null,
                        n.default.createElement(
                          "div",
                          {
                            className: (0, o.default)("searchable-item-list__list-container", b),
                            ref: v,
                            "data-testid": "searchable-item-list-list-container"
                          },
                          e.slice(0, E).map((e, r) => {
                            if (null != T && T(e)) return null;
                            const s = e.balance > 0;
                            if (e.blocked && !s && !w) return null;
                            const c = () => {
                                e.blocked || (e.notImported ? a(e) : null == t || t(e));
                              },
                              {
                                iconUrl: d,
                                identiconAddress: p,
                                selected: f,
                                blocked: m,
                                primaryLabel: g,
                                secondaryLabel: h,
                                rightPrimaryLabel: _,
                                rightSecondaryLabel: E,
                                IconComponent: v
                              } = e;
                            return n.default.createElement(
                              "div",
                              {
                                tabIndex: "0",
                                className: (0, o.default)("searchable-item-list__item", {
                                  "searchable-item-list__item--selected": f,
                                  "searchable-item-list__item--disabled": m
                                }),
                                "data-testid": "searchable-item-list__item",
                                onClick: c,
                                onKeyUp: (e) => "Enter" === e.key && c(),
                                key: `searchable-item-list-item-${r}`,
                                title: m ? S("swapTokenNotAvailable") : null
                              },
                              d || g ? n.default.createElement(i.default, { url: d, name: g }) : null,
                              d || g || !p
                                ? null
                                : n.default.createElement(
                                    "div",
                                    { className: "searchable-item-list__identicon" },
                                    n.default.createElement(l.default, { address: p, diameter: 24 })
                                  ),
                              v ? n.default.createElement(v, null) : null,
                              n.default.createElement(
                                "div",
                                { className: "searchable-item-list__labels" },
                                n.default.createElement(
                                  "div",
                                  { className: "searchable-item-list__item-labels" },
                                  g
                                    ? n.default.createElement(
                                        "span",
                                        {
                                          className: "searchable-item-list__primary-label",
                                          "data-testid": "searchable-item-list-primary-label"
                                        },
                                        g
                                      )
                                    : null,
                                  h ? n.default.createElement("span", { className: "searchable-item-list__secondary-label" }, h) : null
                                ),
                                y || (!_ && !E)
                                  ? null
                                  : n.default.createElement(
                                      "div",
                                      { className: "searchable-item-list__right-labels" },
                                      _
                                        ? n.default.createElement("span", { className: "searchable-item-list__right-primary-label" }, _)
                                        : null,
                                      E && x
                                        ? n.default.createElement("span", { className: "searchable-item-list__right-secondary-label" }, E)
                                        : null
                                    )
                              ),
                              e.notImported &&
                                n.default.createElement(
                                  u.default,
                                  { type: "primary", onClick: c, "data-testid": "searchable-item-list-import-button" },
                                  S("import")
                                )
                            );
                          }),
                          !P &&
                            C &&
                            n.default.createElement(
                              "div",
                              {
                                tabIndex: "0",
                                className: "searchable-item-list__item searchable-item-list__item--add-token",
                                key: "searchable-item-list-item-last"
                              },
                              n.default.createElement(c.default, {
                                message: S("addTokenByContractAddress", [
                                  n.default.createElement(
                                    "a",
                                    {
                                      key: "searchable-item-list__etherscan-link",
                                      onClick: () => {
                                        I({
                                          event: "Clicked Block Explorer Link",
                                          category: f.MetaMetricsEventCategory.Swaps,
                                          properties: {
                                            link_type: "Token Tracker",
                                            action: "Verify Contract Address",
                                            block_explorer_domain: O
                                          }
                                        }),
                                          global.platform.openTab({ url: C });
                                      },
                                      target: "_blank",
                                      rel: "noopener noreferrer"
                                    },
                                    O
                                  )
                                ])
                              })
                            )
                        )
                      );
                }
                w.propTypes = {
                  results: s.default.arrayOf(
                    s.default.shape({
                      iconUrl: s.default.string,
                      selected: s.default.bool,
                      blocked: s.default.bool,
                      primaryLabel: s.default.string,
                      secondaryLabel: s.default.string,
                      rightPrimaryLabel: s.default.string,
                      rightSecondaryLabel: s.default.string
                    })
                  ),
                  onClickItem: s.default.func,
                  onOpenImportTokenModalClick: s.default.func,
                  Placeholder: s.default.func,
                  listTitle: s.default.string,
                  maxListItems: s.default.number,
                  searchQuery: s.default.string,
                  containerRef: s.default.shape({ current: s.default.instanceOf(window.Element) }),
                  hideRightLabels: s.default.bool,
                  hideItemIf: s.default.func,
                  listContainerClassName: s.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/searchable-item-list/item-list/item-list.component.js" }
    ],
    [
      5155,
      { "./list-item-search.component": 5156 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./list-item-search.component")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/searchable-item-list/list-item-search/index.js" }
    ],
    [
      5156,
      {
        "../../../../../shared/modules/hexstring-utils": 3993,
        "../../../../components/ui/icon/search-icon": 4658,
        "../../../../components/ui/text-field": 4725,
        "../../../../hooks/usePrevious": 4845,
        "../../../../selectors/selectors": 5200,
        "../../swaps.util": 5179,
        "@material-ui/core/InputAdornment": 677,
        "fuse.js": 2821,
        loglevel: 3322,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = w);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = h(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = g(e("prop-types")),
                  o = g(e("fuse.js")),
                  l = g(e("loglevel")),
                  i = g(e("@material-ui/core/InputAdornment")),
                  u = g(e("../../../../components/ui/text-field")),
                  c = e("../../../../hooks/usePrevious"),
                  d = e("../../../../../shared/modules/hexstring-utils"),
                  p = e("../../swaps.util"),
                  f = e("../../../../selectors/selectors"),
                  m = g(e("../../../../components/ui/icon/search-icon"));
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (h = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const _ = () =>
                  n.default.createElement(
                    i.default,
                    { position: "start", style: { marginRight: "12px" } },
                    n.default.createElement(m.default, { size: 20, color: "var(--color-icon-muted)" })
                  );
                let E;
                function w({
                  onSearch: e,
                  error: t,
                  listToSearch: a = [],
                  fuseSearchKeys: s,
                  searchPlaceholderText: i,
                  defaultToAll: m,
                  shouldSearchForImports: g,
                  searchQuery: h,
                  setSearchQuery: w
                }) {
                  const v = (0, n.useRef)(),
                    y = (0, r.useSelector)(f.getCurrentChainId),
                    T = async (t) => {
                      w(t),
                        E && clearTimeout(E),
                        (E = setTimeout(async () => {
                          E = null;
                          const n = t.trim(),
                            r = (0, d.isValidHexAddress)(n),
                            s = v.current.search(t),
                            o = m && "" === t ? a : s;
                          g && 0 === o.length && r
                            ? await (async (t) => {
                                try {
                                  const a = await (0, p.fetchToken)(t, y);
                                  if (a)
                                    return (
                                      (a.primaryLabel = a.symbol),
                                      (a.secondaryLabel = a.name),
                                      (a.notImported = !0),
                                      void e({ searchQuery: t, results: [a] })
                                    );
                                } catch (e) {
                                  l.default.error("Token not found, show 0 results.", e);
                                }
                                e({ searchQuery: t, results: [] });
                              })(n)
                            : e({ searchQuery: t, results: o });
                        }, 350));
                    };
                  (0, n.useEffect)(() => () => clearTimeout(E), []),
                    (0, n.useEffect)(() => {
                      v.current ||
                        (v.current = new o.default(a, {
                          shouldSort: !0,
                          threshold: 0.45,
                          location: 0,
                          distance: 100,
                          maxPatternLength: 32,
                          minMatchCharLength: 1,
                          keys: s
                        }));
                    }, [s, a]);
                  const b = (0, c.usePrevious)(a ?? []);
                  return (
                    (0, n.useEffect)(() => {
                      if (v.current && h && b !== a) {
                        v.current.setCollection(a);
                        const t = v.current.search(h);
                        e({ searchQuery: h, results: t });
                      }
                    }, [a, h, e, b]),
                    n.default.createElement(u.default, {
                      "data-testid": "search-list-items",
                      className: "searchable-item-list__search",
                      placeholder: i,
                      type: "text",
                      value: h,
                      onChange: (e) => T(e.target.value),
                      error: t,
                      fullWidth: !0,
                      startAdornment: _(),
                      autoComplete: "off",
                      autoFocus: !0
                    })
                  );
                }
                w.propTypes = {
                  onSearch: s.default.func,
                  error: s.default.string,
                  listToSearch: s.default.array.isRequired,
                  fuseSearchKeys: s.default.arrayOf(s.default.object).isRequired,
                  searchPlaceholderText: s.default.string,
                  defaultToAll: s.default.bool,
                  shouldSearchForImports: s.default.bool,
                  searchQuery: s.default.string,
                  setSearchQuery: s.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/searchable-item-list/list-item-search/list-item-search.component.js" }
    ],
    [
      5157,
      { "./item-list": 5153, "./list-item-search": 5155, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = u);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = i(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = l(e("prop-types")),
                  s = l(e("./item-list")),
                  o = l(e("./list-item-search"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (i = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function u({
                  className: e,
                  defaultToAll: t,
                  fuseSearchKeys: a,
                  itemSelectorError: r,
                  itemsToSearch: l = [],
                  listTitle: i,
                  maxListItems: u,
                  onClickItem: c,
                  onOpenImportTokenModalClick: d,
                  Placeholder: p,
                  searchPlaceholderText: f,
                  hideRightLabels: m,
                  hideItemIf: g,
                  listContainerClassName: h,
                  shouldSearchForImports: _,
                  searchQuery: E,
                  setSearchQuery: w
                }) {
                  const v = (0, n.useRef)(),
                    y = (0, n.useMemo)(() => (t ? l : []), [t, l]),
                    [T, b] = (0, n.useState)(y);
                  return (
                    (0, n.useEffect)(() => {
                      E || b(y);
                    }, [y.length, E]),
                    n.default.createElement(
                      "div",
                      { className: e },
                      n.default.createElement(o.default, {
                        listToSearch: l,
                        fuseSearchKeys: a,
                        onSearch: ({ searchQuery: e = "", results: t = [] }) => {
                          w(e), b(t);
                        },
                        error: r,
                        searchPlaceholderText: f,
                        defaultToAll: t,
                        shouldSearchForImports: _,
                        searchQuery: E,
                        setSearchQuery: w
                      }),
                      n.default.createElement(s.default, {
                        searchQuery: E,
                        results: T,
                        onClickItem: c,
                        onOpenImportTokenModalClick: d,
                        Placeholder: p,
                        listTitle: i,
                        maxListItems: u,
                        containerRef: v,
                        hideRightLabels: m,
                        hideItemIf: g,
                        listContainerClassName: h
                      })
                    )
                  );
                }
                u.propTypes = {
                  itemSelectorError: r.default.string,
                  itemsToSearch: r.default.array,
                  onClickItem: r.default.func,
                  onOpenImportTokenModalClick: r.default.func,
                  Placeholder: r.default.func,
                  className: r.default.string,
                  searchPlaceholderText: r.default.string,
                  fuseSearchKeys: r.default.arrayOf(r.default.shape({ name: r.default.string, weight: r.default.number })),
                  listTitle: r.default.string,
                  defaultToAll: r.default.bool,
                  maxListItems: r.default.number,
                  hideRightLabels: r.default.bool,
                  hideItemIf: r.default.func,
                  listContainerClassName: r.default.string,
                  shouldSearchForImports: r.default.bool,
                  searchQuery: r.default.string,
                  setSearchQuery: r.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/searchable-item-list/searchable-item-list.js" }
    ],
    [
      5158,
      { "./select-quote-popover": 5162 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./select-quote-popover")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/select-quote-popover/index.js" }
    ],
    [
      5159,
      { "./quote-details": 5160 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./quote-details")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/select-quote-popover/quote-details/index.js" }
    ],
    [
      5160,
      {
        "../../../../components/ui/info-tooltip": 4665,
        "../../../../contexts/i18n": 4748,
        "../../../../selectors": 5197,
        "../../exchange-rate-display": 5132,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = d(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = c(e("prop-types")),
                  o = e("../../../../contexts/i18n"),
                  l = c(e("../../../../components/ui/info-tooltip")),
                  i = c(e("../../exchange-rate-display")),
                  u = e("../../../../selectors");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (d = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const p = ({
                  slippage: e,
                  sourceTokenValue: t,
                  sourceTokenSymbol: a,
                  destinationTokenValue: s,
                  destinationTokenSymbol: c,
                  liquiditySourceKey: d,
                  minimumAmountReceived: p,
                  feeInEth: f,
                  networkFees: m,
                  metaMaskFee: g,
                  hideEstimatedGasFee: h
                }) => {
                  const _ = (0, n.useContext)(o.I18nContext),
                    E = (0, r.useSelector)(u.getUseCurrencyRateCheck);
                  return n.default.createElement(
                    "div",
                    { className: "quote-details" },
                    n.default.createElement(
                      "div",
                      { className: "quote-details__row" },
                      n.default.createElement("div", { className: "quote-details__detail-header" }, _("swapRate")),
                      n.default.createElement(
                        "div",
                        { className: "quote-details__detail-content" },
                        n.default.createElement(i.default, {
                          primaryTokenValue: t,
                          primaryTokenDecimals: 1,
                          primaryTokenSymbol: a,
                          secondaryTokenValue: s,
                          secondaryTokenDecimals: 1,
                          secondaryTokenSymbol: c
                        })
                      )
                    ),
                    n.default.createElement(
                      "div",
                      { className: "quote-details__row" },
                      n.default.createElement(
                        "div",
                        { className: "quote-details__detail-header" },
                        _("swapMaxSlippage"),
                        n.default.createElement(l.default, { position: "bottom", contentText: _("swapSlippageTooltip") })
                      ),
                      n.default.createElement("div", { className: "quote-details__detail-content" }, `${e}%`)
                    ),
                    n.default.createElement(
                      "div",
                      { className: "quote-details__row" },
                      n.default.createElement(
                        "div",
                        { className: "quote-details__detail-header" },
                        _("swapAmountReceived"),
                        n.default.createElement(l.default, { position: "bottom", contentText: _("swapAmountReceivedInfo") })
                      ),
                      n.default.createElement(
                        "div",
                        { className: "quote-details__detail-content" },
                        n.default.createElement("span", null, p),
                        n.default.createElement("span", { className: "quote-details__bold" }, ` ${c}`)
                      )
                    ),
                    !h &&
                      n.default.createElement(
                        "div",
                        { className: "quote-details__row" },
                        n.default.createElement(
                          "div",
                          { className: "quote-details__detail-header" },
                          _("swapEstimatedNetworkFees"),
                          n.default.createElement(l.default, { position: "bottom", contentText: _("swapEstimatedNetworkFeesInfo") })
                        ),
                        n.default.createElement(
                          "div",
                          { className: "quote-details__detail-content" },
                          n.default.createElement("span", null, f),
                          n.default.createElement("span", { className: "quote-details__light-grey" }, E && ` (${m})`)
                        )
                      ),
                    n.default.createElement(
                      "div",
                      { className: "quote-details__row" },
                      n.default.createElement(
                        "div",
                        { className: "quote-details__detail-header" },
                        _("swapSource"),
                        n.default.createElement(l.default, { position: "bottom", contentText: _("swapLiquiditySourceInfo") })
                      ),
                      n.default.createElement("div", { className: "quote-details__detail-content" }, _(d))
                    ),
                    n.default.createElement(
                      "div",
                      { className: "quote-details__row quote-details__row--high" },
                      n.default.createElement(
                        "div",
                        { className: "quote-details__detail-header" },
                        n.default.createElement("img", {
                          src: "./images/logo/metamask-fox.svg",
                          className: "quote-details__metafox-logo",
                          alt: ""
                        }),
                        _("swapMetaMaskFee")
                      ),
                      n.default.createElement("div", { className: "quote-details__detail-content" }, _("swapMetaMaskFeeDescription", [g]))
                    )
                  );
                };
                p.propTypes = {
                  slippage: s.default.number.isRequired,
                  sourceTokenValue: s.default.string.isRequired,
                  sourceTokenSymbol: s.default.string.isRequired,
                  destinationTokenValue: s.default.string.isRequired,
                  destinationTokenSymbol: s.default.string.isRequired,
                  liquiditySourceKey: s.default.string.isRequired,
                  minimumAmountReceived: s.default.string.isRequired,
                  feeInEth: s.default.string.isRequired,
                  networkFees: s.default.string.isRequired,
                  metaMaskFee: s.default.number.isRequired,
                  hideEstimatedGasFee: s.default.bool
                };
                a.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/select-quote-popover/quote-details/quote-details.js" }
    ],
    [
      5161,
      { "prop-types": 3450 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.QUOTE_DATA_ROWS_PROPTYPES_SHAPE = void 0);
                var n,
                  r = (n = e("prop-types")) && n.__esModule ? n : { default: n };
                a.QUOTE_DATA_ROWS_PROPTYPES_SHAPE = r.default.shape({
                  aggId: r.default.string.isRequired,
                  amountReceiving: r.default.string.isRequired,
                  destinationTokenDecimals: r.default.number.isRequired,
                  destinationTokenSymbol: r.default.string.isRequired,
                  destinationTokenValue: r.default.string.isRequired,
                  isBestQuote: r.default.bool,
                  networkFees: r.default.string.isRequired,
                  quoteSource: r.default.string.isRequired,
                  rawNetworkFees: r.default.string.isRequired,
                  slippage: r.default.number.isRequired,
                  sourceTokenDecimals: r.default.number.isRequired,
                  sourceTokenSymbol: r.default.string.isRequired,
                  sourceTokenValue: r.default.string.isRequired
                });
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/select-quote-popover/select-quote-popover-constants.js" }
    ],
    [
      5162,
      {
        "../../../components/ui/button": 4611,
        "../../../components/ui/popover": 4699,
        "../../../contexts/i18n": 4748,
        "./quote-details": 5159,
        "./select-quote-popover-constants": 5161,
        "./sort-list": 5163,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = p(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = d(e("prop-types")),
                  s = e("../../../contexts/i18n"),
                  o = d(e("../../../components/ui/popover")),
                  l = d(e("../../../components/ui/button")),
                  i = d(e("./quote-details")),
                  u = d(e("./sort-list")),
                  c = e("./select-quote-popover-constants");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (p = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function f() {
                  return (
                    (f = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                          }
                          return e;
                        }),
                    f.apply(this, arguments)
                  );
                }
                const m = ({
                  quoteDataRows: e = [],
                  onClose: t = null,
                  onSubmit: a = null,
                  swapToSymbol: r,
                  initialAggId: c,
                  onQuoteDetailsIsOpened: d,
                  hideEstimatedGasFee: p
                }) => {
                  const m = (0, n.useContext)(s.I18nContext),
                    [g, h] = (0, n.useState)(1),
                    [_, E] = (0, n.useState)(null),
                    [w, v] = (0, n.useState)(c),
                    [y, T] = (0, n.useState)("sortList"),
                    [b, S] = (0, n.useState)(null),
                    k = (0, n.useCallback)(() => {
                      a(w), t();
                    }, [w, t, a]),
                    C = (0, n.useCallback)(() => {
                      S(null), T("sortList");
                    }, []),
                    x = (0, n.useCallback)((e) => v(e), [v]),
                    O = (0, n.useCallback)(
                      (t) => {
                        const a = e.find((e) => e.aggId === t);
                        T("quoteDetails"), d(), S(a);
                      },
                      [e, d]
                    ),
                    I = (0, n.useCallback)(
                      () => n.default.createElement("div", { className: "select-quote-popover__popover-bg", onClick: t }),
                      [t]
                    ),
                    P = n.default.createElement(
                      n.default.Fragment,
                      null,
                      n.default.createElement(
                        l.default,
                        { type: "secondary", className: "page-container__footer-button select-quote-popover__button", onClick: t },
                        m("close")
                      ),
                      n.default.createElement(
                        l.default,
                        { type: "primary", className: "page-container__footer-button select-quote-popover__button", onClick: k },
                        m("swapSelect")
                      )
                    );
                  return n.default.createElement(
                    "div",
                    { className: "select-quote-popover" },
                    n.default.createElement(
                      o.default,
                      {
                        title: m("quoteDetails" === y ? "swapSelectAQuote" : "swapQuoteDetails"),
                        subtitle: "sortList" === y ? m("swapSelectQuotePopoverDescription") : null,
                        onClose: t,
                        CustomBackground: I,
                        className: "select-quote-popover__popover-wrap",
                        footerClassName: "swaps__footer",
                        footer: "quoteDetails" === y ? null : P,
                        onBack: "quoteDetails" === y ? C : null
                      },
                      "sortList" === y &&
                        n.default.createElement(u.default, {
                          quoteDataRows: e,
                          selectedAggId: w,
                          onSelect: x,
                          onCaretClick: O,
                          swapToSymbol: r,
                          sortDirection: g,
                          setSortDirection: h,
                          sortColumn: _,
                          setSortColumn: E,
                          hideEstimatedGasFee: p
                        }),
                      "quoteDetails" === y && b && n.default.createElement(i.default, f({}, b, { hideEstimatedGasFee: p }))
                    )
                  );
                };
                m.propTypes = {
                  onClose: r.default.func,
                  onSubmit: r.default.func,
                  swapToSymbol: r.default.string,
                  quoteDataRows: r.default.arrayOf(c.QUOTE_DATA_ROWS_PROPTYPES_SHAPE),
                  initialAggId: r.default.string,
                  onQuoteDetailsIsOpened: r.default.func,
                  hideEstimatedGasFee: r.default.bool.isRequired
                };
                a.default = m;
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/select-quote-popover/select-quote-popover.js" }
    ],
    [
      5163,
      { "./sort-list": 5164 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./sort-list")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/select-quote-popover/sort-list/index.js" }
    ],
    [
      5164,
      {
        "../../../../components/ui/icon/sun-check-icon.component": 4659,
        "../../../../components/ui/info-tooltip": 4665,
        "../../../../contexts/i18n": 4748,
        "../../../../selectors": 5197,
        "../select-quote-popover-constants": 5161,
        "bignumber.js": 2283,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = h);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = m(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = f(e("prop-types")),
                  o = f(e("classnames")),
                  l = f(e("bignumber.js")),
                  i = f(e("../../../../components/ui/icon/sun-check-icon.component")),
                  u = e("../../../../contexts/i18n"),
                  c = e("../select-quote-popover-constants"),
                  d = f(e("../../../../components/ui/info-tooltip")),
                  p = e("../../../../selectors");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (m = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const g = () =>
                  n.default.createElement(
                    "svg",
                    { width: "6", height: "9", viewBox: "0 0 6 9", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    n.default.createElement("path", {
                      d: "M0.7948 4.96973C0.365112 4.96973 0.150269 5.47754 0.462769 5.77051L2.78699 8.09473C2.96277 8.29004 3.25574 8.29004 3.45105 8.09473L5.77527 5.77051C6.06824 5.47754 5.85339 4.96973 5.44324 4.96973H0.7948ZM5.77527 2.91895L3.45105 0.594727C3.25574 0.418945 2.96277 0.418945 2.78699 0.594727L0.462769 2.91895C0.150269 3.23145 0.365112 3.71973 0.7948 3.71973H5.44324C5.85339 3.71973 6.06824 3.23145 5.77527 2.91895Z",
                      fill: "var(--color-primary-default)"
                    })
                  );
                function h({
                  quoteDataRows: e,
                  selectedAggId: t,
                  onSelect: a,
                  onCaretClick: s,
                  swapToSymbol: c,
                  sortDirection: f,
                  setSortDirection: m,
                  sortColumn: h = null,
                  setSortColumn: _,
                  hideEstimatedGasFee: E
                }) {
                  const w = (0, n.useContext)(u.I18nContext),
                    [v, y] = (0, n.useState)(!1),
                    T = (0, r.useSelector)(p.getUseCurrencyRateCheck),
                    b = (e) => {
                      e === h ? m(-1 * f) : _(e);
                    },
                    S = (0, n.useMemo)(
                      () =>
                        [...e].sort((e, t) => {
                          if (null === h && e.isBestQuote) return -1;
                          if (null === h && t.isBestQuote) return 1;
                          if (null === h) {
                            const a = new l.default(e.destinationTokenValue).toString(16),
                              n = new l.default(t.destinationTokenValue).toString(16);
                            return a[a.length - 1] < n[n.length - 1] ? -1 : 1;
                          }
                          return "quoteSource" === h ? (e[h] > t[h] ? -1 * f : f) : new l.default(e[h]).gt(t[h]) ? -1 * f : f;
                        }),
                      [e, h, f]
                    ),
                    k = S.findIndex(({ aggId: e }) => t === e);
                  return n.default.createElement(
                    "div",
                    { className: "select-quote-popover__sort-list" },
                    n.default.createElement(
                      "div",
                      { className: "select-quote-popover__column-headers" },
                      n.default.createElement(
                        "div",
                        {
                          className: "select-quote-popover__column-header select-quote-popover__receiving",
                          "data-testid": "select-quote-popover__receiving",
                          onClick: () => b("destinationTokenValue")
                        },
                        n.default.createElement("span", { className: "select-quote-popover__receiving-symbol" }, c),
                        n.default.createElement(
                          "div",
                          { className: "select-quote-popover__receiving-label" },
                          n.default.createElement("span", null, w("swapReceiving")),
                          n.default.createElement(d.default, { position: "bottom", contentText: w("swapReceivingInfoTooltip") }),
                          n.default.createElement(g, null)
                        )
                      ),
                      n.default.createElement(
                        "div",
                        {
                          className:
                            "select-quote-popover__column-header select-quote-popover__network-fees select-quote-popover__network-fees-header",
                          "data-testid": "select-quote-popover__network-fees-header",
                          onClick: () => b("rawNetworkFees")
                        },
                        !E &&
                          T &&
                          n.default.createElement(
                            n.default.Fragment,
                            null,
                            n.default.createElement("span", null, w("swapEstimatedNetworkFees")),
                            n.default.createElement(d.default, { position: "bottom", contentText: w("swapEstimatedNetworkFeesInfo") }),
                            n.default.createElement(g, null)
                          )
                      ),
                      n.default.createElement(
                        "div",
                        {
                          className: "select-quote-popover__column-header select-quote-popover__quote-source",
                          "data-testid": "select-quote-popover__quote-source",
                          onClick: () => b("quoteSource")
                        },
                        w("swapQuoteSource"),
                        n.default.createElement(
                          "div",
                          { className: "select-quote-popover__quote-source-toggle" },
                          n.default.createElement(g, null)
                        )
                      )
                    ),
                    S.map(({ destinationTokenValue: e, networkFees: t, isBestQuote: r, quoteSource: l, aggId: u }, c) =>
                      n.default.createElement(
                        "div",
                        {
                          className: (0, o.default)("select-quote-popover__row", {
                            "select-quote-popover__row--selected": k === c,
                            "select-quote-popover__row--no-hover": v
                          }),
                          onClick: () => a(u),
                          key: `select-quote-popover-row-${c}`,
                          "data-testid": `select-quote-popover-row-${c}`
                        },
                        n.default.createElement(
                          "div",
                          { className: "select-quote-popover__receiving" },
                          n.default.createElement(
                            "div",
                            { className: "select-quote-popover__receiving-value" },
                            r && n.default.createElement(i.default, { reverseColors: k !== c }),
                            n.default.createElement("div", { className: "select-quote-popover__receiving-value-text", title: e }, e)
                          ),
                          "RFQ" === l &&
                            n.default.createElement("span", { className: "select-quote-popover__zero-slippage" }, w("swapZeroSlippage"))
                        ),
                        n.default.createElement("div", { className: "select-quote-popover__network-fees" }, !E && T && t),
                        n.default.createElement(
                          "div",
                          { className: "select-quote-popover__quote-source" },
                          n.default.createElement(
                            "div",
                            {
                              className: (0, o.default)("select-quote-popover__quote-source-label", {
                                "select-quote-popover__quote-source-label--green": "AGG" === l,
                                "select-quote-popover__quote-source-label--orange": "RFQ" === l,
                                "select-quote-popover__quote-source-label--blue": "DEX" === l
                              })
                            },
                            l
                          )
                        ),
                        n.default.createElement(
                          "div",
                          {
                            className: "select-quote-popover__caret-right",
                            "data-testid": `select-quote-popover__caret-right-${c}`,
                            onClick: (e) => {
                              e.stopPropagation(), s(u);
                            },
                            onMouseEnter: () => y(!0),
                            onMouseLeave: () => y(!1)
                          },
                          n.default.createElement("i", { className: "fa fa-angle-up" })
                        )
                      )
                    )
                  );
                }
                h.propTypes = {
                  selectedAggId: s.default.string.isRequired,
                  onSelect: s.default.func.isRequired,
                  onCaretClick: s.default.func.isRequired,
                  swapToSymbol: s.default.string.isRequired,
                  quoteDataRows: s.default.arrayOf(c.QUOTE_DATA_ROWS_PROPTYPES_SHAPE).isRequired,
                  sortDirection: s.default.number.isRequired,
                  setSortDirection: s.default.func.isRequired,
                  sortColumn: s.default.string,
                  setSortColumn: s.default.func.isRequired,
                  hideEstimatedGasFee: s.default.bool.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/select-quote-popover/sort-list/sort-list.js" }
    ],
    [
      5165,
      {
        "../../../components/component-library": 4453,
        "../../../components/ui/url-icon": 4745,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = p);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = d(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = c(e("prop-types")),
                  s = c(e("classnames")),
                  o = e("../../../components/component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  i = c(e("../../../components/ui/url-icon")),
                  u = e("../../../contexts/i18n");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (d = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function p({ onClick: e, onClose: t, selectedToken: a, testId: r }) {
                  const c = (0, n.useContext)(u.I18nContext),
                    d = (null == a ? void 0 : a.iconUrl) && (null == a ? void 0 : a.symbol);
                  return n.default.createElement(
                    "div",
                    {
                      className: (0, s.default)(
                        "dropdown-search-list",
                        "dropdown-search-list__selector-closed-container",
                        "dropdown-input-pair__selector--closed"
                      ),
                      "data-testid": "dropdown-search-list",
                      tabIndex: "0",
                      onClick: e,
                      onKeyUp: (a) => {
                        "Escape" === a.key ? t() : "Enter" === a.key && e(a);
                      }
                    },
                    n.default.createElement(
                      "div",
                      { className: "dropdown-search-list__selector-closed" },
                      d &&
                        n.default.createElement(i.default, {
                          url: a.iconUrl,
                          className: "dropdown-search-list__selector-closed-icon",
                          name: null == a ? void 0 : a.symbol
                        }),
                      n.default.createElement(
                        "div",
                        { className: (0, s.default)("dropdown-search-list__labels", { "dropdown-search-list__labels--with-icon": d }) },
                        n.default.createElement(
                          "div",
                          { className: "dropdown-search-list__item-labels" },
                          n.default.createElement(
                            "span",
                            {
                              "data-testid": r,
                              className: (0, s.default)("dropdown-search-list__closed-primary-label", {
                                "dropdown-search-list__select-default": !(null != a && a.symbol)
                              })
                            },
                            (null == a ? void 0 : a.symbol) || c("swapSelectAToken")
                          )
                        )
                      )
                    ),
                    n.default.createElement(o.Icon, {
                      name: o.IconName.ArrowDown,
                      size: o.IconSize.Xs,
                      marginRight: 3,
                      color: l.IconColor.iconAlternative
                    })
                  );
                }
                p.propTypes = {
                  onClick: r.default.func.isRequired,
                  onClose: r.default.func.isRequired,
                  selectedToken: r.default.object.isRequired,
                  testId: r.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/selected-token/selected-token.js" }
    ],
    [
      5166,
      { "./slippage-buttons": 5167 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./slippage-buttons")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/slippage-buttons/index.js" }
    ],
    [
      5167,
      {
        "../../../../shared/constants/swaps": 3970,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../components/ui/button": 4611,
        "../../../components/ui/button-group": 4609,
        "../../../components/ui/info-tooltip": 4665,
        "../../../components/ui/toggle-button": 4729,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../swaps.util": 5179,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = E);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = _(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = h(e("prop-types")),
                  s = h(e("classnames")),
                  o = e("../../../contexts/i18n"),
                  l = h(e("../../../components/ui/button-group")),
                  i = h(e("../../../components/ui/button")),
                  u = h(e("../../../components/ui/info-tooltip")),
                  c = h(e("../../../components/ui/toggle-button")),
                  d = h(e("../../../components/ui/box")),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../swaps.util"),
                  m = e("../../../../shared/constants/swaps"),
                  g = e("../../../components/component-library");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function _(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (_ = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function E({
                  onSelect: e,
                  maxAllowedSlippage: t,
                  currentSlippage: a,
                  smartTransactionsEnabled: r,
                  smartTransactionsOptInStatus: h,
                  setSmartTransactionsOptInStatus: _,
                  currentSmartTransactionsError: E,
                  isDirectWrappingEnabled: w
                }) {
                  const v = (0, n.useContext)(o.I18nContext),
                    [y, T] = (0, n.useState)(() => ("number" != typeof a || Object.values(m.Slippage).includes(a) ? "" : a.toString())),
                    [b, S] = (0, n.useState)(!1),
                    [k, C] = (0, n.useState)(() =>
                      a === m.Slippage.high ? 1 : a === m.Slippage.default ? 0 : "number" == typeof a ? 2 : 0
                    ),
                    [x, O] = (0, n.useState)(() => a !== m.Slippage.default),
                    [I, P] = (0, n.useState)(null);
                  let A = "";
                  y &&
                    (Number(y) < 0
                      ? (A = v("swapSlippageNegative"))
                      : Number(y) > 0 && Number(y) <= 1
                      ? (A = v("swapLowSlippageError"))
                      : Number(y) >= 5 && Number(y) <= t
                      ? (A = v("swapHighSlippageWarning"))
                      : Number(y) > t && (A = v("swapsExcessiveSlippageWarning")));
                  const M = y || v("swapCustom");
                  return (
                    (0, n.useEffect)(() => {
                      I && b && window.document.activeElement !== I && I.focus();
                    }, [I, b]),
                    n.default.createElement(
                      "div",
                      { className: "slippage-buttons" },
                      n.default.createElement(
                        "button",
                        {
                          onClick: () => O(!x),
                          className: (0, s.default)("slippage-buttons__header", { "slippage-buttons__header--open": x })
                        },
                        n.default.createElement("div", { className: "slippage-buttons__header-text" }, v("swapsAdvancedOptions")),
                        x
                          ? n.default.createElement("i", { className: "fa fa-angle-up" })
                          : n.default.createElement("i", { className: "fa fa-angle-down" })
                      ),
                      n.default.createElement(
                        "div",
                        { className: "slippage-buttons__content" },
                        x &&
                          n.default.createElement(
                            n.default.Fragment,
                            null,
                            !w &&
                              n.default.createElement(
                                "div",
                                { className: "slippage-buttons__dropdown-content" },
                                n.default.createElement(
                                  "div",
                                  { className: "slippage-buttons__buttons-prefix" },
                                  n.default.createElement("div", { className: "slippage-buttons__prefix-text" }, v("swapsMaxSlippage")),
                                  n.default.createElement(u.default, { position: "top", contentText: v("swapSlippageTooltip") })
                                ),
                                n.default.createElement(
                                  l.default,
                                  {
                                    defaultActiveButtonIndex: 2 !== k || y ? k : 1,
                                    variant: "radiogroup",
                                    newActiveButtonIndex: k,
                                    className: (0, s.default)("button-group", "slippage-buttons__button-group")
                                  },
                                  n.default.createElement(
                                    i.default,
                                    {
                                      onClick: () => {
                                        T(""), S(!1), C(0), e(m.Slippage.default);
                                      }
                                    },
                                    v("swapSlippagePercent", [m.Slippage.default])
                                  ),
                                  n.default.createElement(
                                    i.default,
                                    {
                                      onClick: () => {
                                        T(""), S(!1), C(1), e(m.Slippage.high);
                                      }
                                    },
                                    v("swapSlippagePercent", [m.Slippage.high])
                                  ),
                                  n.default.createElement(
                                    i.default,
                                    {
                                      className: (0, s.default)("slippage-buttons__button-group-custom-button", {
                                        "radio-button--danger": A
                                      }),
                                      onClick: () => {
                                        C(2), S(!0);
                                      }
                                    },
                                    b
                                      ? n.default.createElement(
                                          "div",
                                          {
                                            className: (0, s.default)("slippage-buttons__custom-input", {
                                              "slippage-buttons__custom-input--danger": A
                                            })
                                          },
                                          n.default.createElement("input", {
                                            "data-testid": "slippage-buttons__custom-slippage",
                                            onChange: (t) => {
                                              const { value: a } = t.target;
                                              !isNaN(Number(a)) && (T(a), e(Number(a)));
                                            },
                                            type: "text",
                                            maxLength: "4",
                                            ref: P,
                                            onBlur: () => {
                                              S(!1);
                                            },
                                            value: y || ""
                                          })
                                        )
                                      : M,
                                    (y || b) && n.default.createElement("div", { className: "slippage-buttons__percentage-suffix" }, "%")
                                  )
                                )
                              ),
                            r &&
                              n.default.createElement(
                                d.default,
                                { marginTop: 2, display: p.Display.Flex },
                                n.default.createElement(
                                  d.default,
                                  { display: p.Display.Flex, alignItems: p.AlignItems.center, paddingRight: 3 },
                                  n.default.createElement(
                                    g.Text,
                                    { variant: p.TextVariant.bodySm, as: "h6", paddingRight: 2, fontWeight: p.FontWeight.Bold },
                                    v("smartSwaps")
                                  ),
                                  E
                                    ? n.default.createElement(u.default, {
                                        position: "top",
                                        contentText: (0, f.getTranslatedStxErrorMessage)(E, v)
                                      })
                                    : n.default.createElement(u.default, {
                                        position: "top",
                                        contentText: v("smartSwapsTooltip", [
                                          n.default.createElement(
                                            g.ButtonLink,
                                            {
                                              key: "smart-swaps-faq-and-risk-disclosures",
                                              size: g.ButtonLinkSize.Inherit,
                                              href: m.SMART_SWAPS_FAQ_AND_RISK_DISCLOSURES_URL,
                                              externalLink: !0,
                                              display: p.Display.Inline
                                            },
                                            v("faqAndRiskDisclosures")
                                          )
                                        ])
                                      })
                                ),
                                n.default.createElement(c.default, {
                                  value: h,
                                  onToggle: (e) => {
                                    _(!e, e);
                                  },
                                  offLabel: v("off"),
                                  onLabel: v("on"),
                                  disabled: Boolean(E)
                                })
                              )
                          ),
                        A && n.default.createElement("div", { className: "slippage-buttons__error-text" }, A)
                      )
                    )
                  );
                }
                E.propTypes = {
                  onSelect: r.default.func.isRequired,
                  maxAllowedSlippage: r.default.number.isRequired,
                  currentSlippage: r.default.number,
                  smartTransactionsEnabled: r.default.bool.isRequired,
                  smartTransactionsOptInStatus: r.default.bool,
                  setSmartTransactionsOptInStatus: r.default.func,
                  currentSmartTransactionsError: r.default.string,
                  isDirectWrappingEnabled: r.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/slippage-buttons/slippage-buttons.js" }
    ],
    [
      5168,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "15", height: "13", viewBox: "0 0 15 13", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("path", {
                        d: "M14.4946 6.14779C14.4863 5.93594 14.3991 5.69108 14.2539 5.53666L9.51334 0.49958C9.1921 0.21091 8.57613 0.0917437 8.21709 0.425509C7.86344 0.754237 7.87396 1.39178 8.22627 1.72181L11.5595 5.25889L1.1618 5.25889C0.670919 5.25889 0.272949 5.65687 0.272949 6.14779C0.272949 6.6387 0.670919 7.03668 1.1618 7.03668L11.5595 7.03668L8.22627 10.5738C7.92297 10.8776 7.86691 11.5376 8.21709 11.8701C8.56718 12.2025 9.20529 12.0963 9.51334 11.796L14.2539 6.75891C14.4161 6.58653 14.4952 6.38428 14.4946 6.14779Z",
                        fill: "#D6D9DC"
                      })
                    );
                  });
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/smart-transaction-status/arrow-icon.js" }
    ],
    [
      5169,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "41", height: "39", viewBox: "0 0 41 39", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("path", {
                        d: "M34.5805 6.55143C36.1394 8.11033 37.3994 9.91222 38.3237 11.8681C38.7066 12.6782 39.0318 13.5148 39.2968 14.3714L39.3242 14.4606C39.4816 14.9785 39.6171 15.5037 39.73 16.0347C40.6511 20.3654 40.0335 24.9029 37.9511 28.8509C35.6001 33.308 31.5749 36.6487 26.7609 38.138C24.3773 38.8754 21.8717 39.1361 19.3873 38.9052C16.9029 38.6743 14.4883 37.9563 12.2813 36.7922C10.2608 35.7264 8.52045 34.3588 7.08333 32.7636C5.61245 31.1448 4.43054 29.2824 3.59178 27.2574C3.32329 26.6092 2.89685 25.2767 2.89685 25.2767H6.89583C7.68667 27.4068 8.96033 29.362 10.6288 30.9609L10.6318 30.96C11.5096 31.8005 12.501 32.5516 13.595 33.1786C15.8742 34.483 18.4736 35.1864 21.1455 35.1864C25.1768 35.1864 29.0429 33.585 31.8935 30.7345C34.744 27.8839 36.3455 24.0177 36.3455 19.9865C36.3455 18.7267 36.1891 17.483 35.8871 16.2814C35.8206 16.017 35.7471 15.7546 35.6666 15.4945C34.4752 11.6432 31.8027 8.42306 28.237 6.54231C24.6713 4.66156 20.5045 4.27429 16.6533 5.46571C12.8837 6.63189 9.71868 9.21706 7.82253 12.6699L12.8961 15.307L3.28331 18.3447L0.245605 8.73191L4.45005 10.9171C6.81537 6.56278 10.7905 3.30177 15.5303 1.83546C17.3658 1.26761 19.2587 0.986653 21.1455 0.986694C26.1846 0.986694 31.0173 2.98824 34.5805 6.55143Z",
                        fill: "var(--color-primary-default)"
                      }),
                      r.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18.1252 22.1036L14.7107 18.689L12.0926 21.3257L18.1252 27.3584L30.2322 15.2515L27.614 12.6148L18.1252 22.1036Z",
                        fill: "var(--color-primary-default)"
                      })
                    );
                  });
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/smart-transaction-status/canceled-icon.js" }
    ],
    [
      5170,
      { "./smart-transaction-status": 5172 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./smart-transaction-status")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/smart-transaction-status/index.js" }
    ],
    [
      5171,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "41", height: "39", viewBox: "0 0 41 39", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("path", {
                        d: "M34.6806 6.55143C36.2395 8.11033 37.4995 9.91222 38.4238 11.8681C38.8067 12.6782 39.1319 13.5148 39.3969 14.3714L39.4243 14.4606C39.5817 14.9785 39.7172 15.5037 39.8301 16.0347C40.7512 20.3654 40.1336 24.9029 38.0512 28.8509C35.7002 33.308 31.675 36.6487 26.861 38.138C24.4773 38.8754 21.9718 39.1361 19.4874 38.9052C17.003 38.6743 14.5884 37.9563 12.3814 36.7922C10.3609 35.7264 8.62055 34.3588 7.18343 32.7636C5.71254 31.1448 4.53064 29.2824 3.69188 27.2574C3.42339 26.6092 2.99695 25.2767 2.99695 25.2767H6.99592C7.78677 27.4068 9.06042 29.362 10.7289 30.9609L10.7319 30.96C11.6097 31.8005 12.6011 32.5516 13.6951 33.1786C15.9743 34.483 18.5737 35.1864 21.2456 35.1864C25.2769 35.1864 29.143 33.585 31.9936 30.7345C34.8441 27.8839 36.4456 24.0177 36.4456 19.9865C36.4456 18.7267 36.2892 17.483 35.9872 16.2814C35.9207 16.017 35.8471 15.7546 35.7667 15.4945C34.5753 11.6432 31.9028 8.42306 28.3371 6.54231C24.7714 4.66156 20.6046 4.27429 16.7534 5.46571C12.9838 6.63189 9.81878 9.21706 7.92263 12.6699L12.9962 15.307L3.3834 18.3447L0.345703 8.73191L4.55015 10.9171C6.91547 6.56278 10.8906 3.30177 15.6304 1.83546C17.4659 1.26761 19.3588 0.986653 21.2456 0.986694C26.2847 0.986694 31.1174 2.98824 34.6806 6.55143Z",
                        fill: "#D73A49"
                      }),
                      r.default.createElement("path", {
                        d: "M18.5849 19.9869L15.1454 23.4264L17.9845 26.2655L21.424 22.826L24.8635 26.2655L27.7026 23.4264L24.2631 19.9869L27.7026 16.5473L24.8635 13.7082L21.424 17.1478L17.9845 13.7082L15.1454 16.5473L18.5849 19.9869Z",
                        fill: "#D73A49"
                      })
                    );
                  });
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/smart-transaction-status/reverted-icon.js" }
    ],
    [
      5172,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/swaps": 3970,
        "../../../../shared/constants/transaction": 3974,
        "../../../../shared/lib/transactions-controller-utils": 3982,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../components/ui/url-icon": 4745,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../create-new-swap": 5126,
        "../swaps-footer": 5177,
        "../swaps.util": 5179,
        "../view-on-block-explorer": 5181,
        "./arrow-icon": 5168,
        "./canceled-icon": 5169,
        "./reverted-icon": 5171,
        "./success-icon": 5173,
        "./timer-icon": 5174,
        "./unknown-icon": 5175,
        "@metamask/etherscan-link": 1255,
        lodash: 3312,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    var e, t, a, M, N, R, F, L, D;
                    const [j, q] = (0, n.useState)(!1),
                      W = (0, n.useContext)(i.I18nContext),
                      U = (0, s.useHistory)(),
                      B = (0, r.useDispatch)(),
                      G = (0, r.useSelector)(u.getFetchParams, l.isEqual) || {},
                      { destinationTokenInfo: H = {}, sourceTokenInfo: V = {} } = (null == G ? void 0 : G.metaData) || {},
                      $ = (0, r.useSelector)(c.isHardwareWallet),
                      Q = (0, r.useSelector)(c.getHardwareWalletType),
                      X = (0, r.useSelector)(u.getSelectedQuote, l.isEqual),
                      Z = (0, r.useSelector)(u.getTopQuote, l.isEqual),
                      K = X || Z,
                      Y = (0, r.useSelector)(u.getCurrentSmartTransactions, l.isEqual),
                      z = (0, r.useSelector)(u.getSmartTransactionsOptInStatus),
                      J = (0, r.useSelector)(c.getCurrentChainId),
                      ee = (0, r.useSelector)(c.getRpcPrefsForCurrentProvider, r.shallowEqual),
                      te = (0, r.useSelector)(u.getSwapsNetworkConfig, r.shallowEqual),
                      ae = (0, r.useSelector)(u.getSmartTransactionsEnabled),
                      ne = (0, r.useSelector)(u.getCurrentSmartTransactionsEnabled),
                      re = ee.blockExplorerUrl ?? d.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[J] ?? null;
                    let se,
                      oe,
                      le = w.SmartTransactionStatus.pending,
                      ie = {};
                    if (Y && Y.length > 0) {
                      var ue, ce, de;
                      (ie = Y[Y.length - 1]),
                        (se = null === (ue = ie) || void 0 === ue ? void 0 : ue.uuid),
                        (le = (null === (ce = ie) || void 0 === ce ? void 0 : ce.status) || w.SmartTransactionStatus.pending),
                        (oe =
                          null === (de = ie) || void 0 === de || null === (de = de.statusMetadata) || void 0 === de
                            ? void 0
                            : de.cancellationFeeWei);
                    }
                    const [pe, fe] = (0, n.useState)(te.stxStatusDeadline),
                      me = {
                        needs_two_confirmations: !0,
                        token_from: V.symbol ?? (null === (e = ie) || void 0 === e ? void 0 : e.sourceTokenSymbol),
                        token_from_amount:
                          (null == G ? void 0 : G.value) ?? (null === (t = ie) || void 0 === t ? void 0 : t.swapTokenValue),
                        token_to: H.symbol ?? (null === (a = ie) || void 0 === a ? void 0 : a.destinationTokenSymbol),
                        request_type: null != G && G.balanceError ? "Quote" : "Order",
                        slippage: null == G ? void 0 : G.slippage,
                        custom_slippage: 2 === (null == G ? void 0 : G.slippage),
                        is_hardware_wallet: $,
                        hardware_wallet_type: Q,
                        stx_enabled: ae,
                        current_stx_enabled: ne,
                        stx_user_opt_in: z
                      };
                    let ge;
                    var he;
                    null != K &&
                      K.destinationAmount &&
                      (ge = (0, k.calcTokenAmount)(
                        null == K ? void 0 : K.destinationAmount,
                        H.decimals ?? (null === (he = ie) || void 0 === he ? void 0 : he.destinationTokenDecimals)
                      ).toPrecision(8));
                    const _e = (0, n.useContext)(T.MetaMetricsContext),
                      Ee = le === w.SmartTransactionStatus.pending,
                      we = Ee || le === w.SmartTransactionStatus.success,
                      ve = null === (M = ie) || void 0 === M || null === (M = M.statusMetadata) || void 0 === M ? void 0 : M.minedHash;
                    (0, n.useEffect)(() => {
                      _e({ event: "STX Status Page Loaded", category: E.MetaMetricsEventCategory.Swaps, sensitiveProperties: me });
                    }, []),
                      (0, n.useEffect)(() => {
                        let e;
                        if (Ee && se) {
                          const t = () => {
                            const t = Math.round((Date.now() - ie.time) / 1e3);
                            if (t > te.stxStatusDeadline) return fe(0), void clearInterval(e);
                            fe(te.stxStatusDeadline - t);
                          };
                          (e = setInterval(t, 1e3)), t();
                        }
                        return () => clearInterval(e);
                      }, [B, Ee, se, ie.time, te.stxStatusDeadline]),
                      (0, n.useEffect)(() => {
                        B((0, _.setBackgroundSwapRouteState)("smartTransactionStatus")),
                          setTimeout(() => {
                            B((0, _.stopPollingForQuotes)());
                          }, 1e3);
                      }, [B]);
                    let ye,
                      Te,
                      be,
                      Se,
                      ke = W("stxPendingPrivatelySubmittingSwap");
                    Ee && (j ? (ke = W("stxTryingToCancel")) : oe > 0 && (ke = W("stxPendingPubliclySubmittingSwap")));
                    if (le === w.SmartTransactionStatus.success) {
                      var Ce, xe;
                      if (((ke = W("stxSuccess")), H.symbol || (null !== (Ce = ie) && void 0 !== Ce && Ce.destinationTokenSymbol)))
                        ye = W("stxSuccessDescription", [
                          H.symbol ?? (null === (xe = ie) || void 0 === xe ? void 0 : xe.destinationTokenSymbol)
                        ]);
                      be = n.default.createElement(C.default, null);
                    } else
                      "cancelled_user_cancelled" === le ||
                      (null === (N = ie) || void 0 === N || null === (N = N.statusMetadata) || void 0 === N ? void 0 : N.minedTx) ===
                        w.SmartTransactionStatus.cancelled
                        ? ((ke = W("stxUserCancelled")),
                          (ye = W("stxUserCancelledDescription")),
                          (be = n.default.createElement(O.default, null)))
                        : le.startsWith("cancelled") || le.includes("deadline_missed")
                        ? ((ke = W("stxCancelled")),
                          (ye = W("stxCancelledDescription")),
                          (Te = W("stxCancelledSubDescription")),
                          (be = n.default.createElement(O.default, null)))
                        : "unknown" === le
                        ? ((ke = W("stxUnknown")), (ye = W("stxUnknownDescription")), (be = n.default.createElement(I.default, null)))
                        : "reverted" === le &&
                          ((ke = W("stxFailure")),
                          (ye = W("stxFailureDescription", [
                            n.default.createElement(
                              "a",
                              {
                                className: "smart-transaction-status__support-link",
                                key: "smart-transaction-status-support-link",
                                href: "https://support.metamask.io",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              },
                              W("customerSupport")
                            )
                          ])),
                          (be = n.default.createElement(x.default, null)));
                    ve && se && (Se = (0, o.getBlockExplorerLink)({ hash: ve, chainId: J }, { blockExplorerUrl: re }));
                    const Oe = ie.cancellable && !j,
                      Ie = () =>
                        n.default.createElement(
                          m.default,
                          { marginBottom: 0 },
                          n.default.createElement(
                            "a",
                            {
                              className: "smart-transaction-status__cancel-swap-link",
                              href: "#",
                              onClick: (e) => {
                                null == e || e.preventDefault(),
                                  q(!0),
                                  _e({ event: "Cancel STX", category: E.MetaMetricsEventCategory.Swaps, sensitiveProperties: me }),
                                  B((0, u.cancelSwapsSmartTransaction)(se));
                              }
                            },
                            W("attemptToCancelSwapForFree")
                          )
                        );
                    return n.default.createElement(
                      "div",
                      { className: "smart-transaction-status" },
                      n.default.createElement(
                        m.default,
                        {
                          paddingLeft: 8,
                          paddingRight: 8,
                          height: h.BLOCK_SIZES.FULL,
                          justifyContent: h.JustifyContent.flexStart,
                          display: h.DISPLAY.FLEX,
                          className: "smart-transaction-status__content"
                        },
                        n.default.createElement(
                          m.default,
                          {
                            marginTop: 10,
                            marginBottom: 0,
                            display: h.DISPLAY.FLEX,
                            justifyContent: h.JustifyContent.center,
                            alignItems: h.AlignItems.center
                          },
                          n.default.createElement(
                            f.Text,
                            { color: h.TextColor.textAlternative, variant: h.TextVariant.bodySm, as: "h6" },
                            `${(null == G ? void 0 : G.value) && Number(G.value).toFixed(5)} `
                          ),
                          n.default.createElement(
                            f.Text,
                            {
                              color: h.TextColor.textAlternative,
                              variant: h.TextVariant.bodySmBold,
                              as: "h6",
                              marginLeft: 1,
                              marginRight: 2
                            },
                            V.symbol ?? (null === (R = ie) || void 0 === R ? void 0 : R.sourceTokenSymbol)
                          ),
                          V.iconUrl
                            ? n.default.createElement(g.default, {
                                url: V.iconUrl,
                                className: "main-quote-summary__icon",
                                name: V.symbol ?? (null === (F = ie) || void 0 === F ? void 0 : F.destinationTokenSymbol),
                                fallbackClassName: "main-quote-summary__icon-fallback"
                              })
                            : null,
                          n.default.createElement(
                            m.default,
                            { display: h.DISPLAY.BLOCK, marginLeft: 2, marginRight: 2 },
                            n.default.createElement(P.default, null)
                          ),
                          H.iconUrl
                            ? n.default.createElement(g.default, {
                                url: H.iconUrl,
                                className: "main-quote-summary__icon",
                                name: H.symbol ?? (null === (L = ie) || void 0 === L ? void 0 : L.destinationTokenSymbol),
                                fallbackClassName: "main-quote-summary__icon-fallback"
                              })
                            : null,
                          n.default.createElement(
                            f.Text,
                            { color: h.TextColor.textAlternative, variant: h.TextVariant.bodySm, as: "h6", marginLeft: 2 },
                            `~${ge && Number(ge).toFixed(5)} `
                          ),
                          n.default.createElement(
                            f.Text,
                            { color: h.TextColor.textAlternative, variant: h.TextVariant.bodySmBold, as: "h6", marginLeft: 1 },
                            H.symbol ?? (null === (D = ie) || void 0 === D ? void 0 : D.destinationTokenSymbol)
                          )
                        ),
                        n.default.createElement(m.default, {
                          marginTop: 3,
                          className: "smart-transaction-status__background-animation smart-transaction-status__background-animation--top"
                        }),
                        be && n.default.createElement(m.default, { marginTop: 3, marginBottom: 2 }, be),
                        Ee &&
                          n.default.createElement(
                            m.default,
                            {
                              marginTop: 7,
                              marginBottom: 1,
                              display: h.DISPLAY.FLEX,
                              justifyContent: h.JustifyContent.center,
                              alignItems: h.AlignItems.center
                            },
                            n.default.createElement(A.default, null),
                            n.default.createElement(
                              f.Text,
                              { color: h.TextColor.textAlternative, variant: h.TextVariant.bodySm, as: "h6", marginLeft: 1 },
                              `${W("stxSwapCompleteIn")} `
                            ),
                            n.default.createElement(
                              f.Text,
                              {
                                color: h.TextColor.textAlternative,
                                variant: h.TextVariant.bodySmBold,
                                as: "h6",
                                marginLeft: 1,
                                className: "smart-transaction-status__remaining-time"
                              },
                              (0, y.showRemainingTimeInMinAndSec)(pe)
                            )
                          ),
                        n.default.createElement(
                          f.Text,
                          { color: h.TextColor.textDefault, variant: h.TextVariant.headingSm, as: "h4", fontWeight: h.FontWeight.Bold },
                          ke
                        ),
                        Ee &&
                          n.default.createElement(
                            "div",
                            { className: "smart-transaction-status__loading-bar-container" },
                            n.default.createElement("div", {
                              className: "smart-transaction-status__loading-bar",
                              style: { width: (100 / te.stxStatusDeadline) * (te.stxStatusDeadline - pe) + "%" }
                            })
                          ),
                        ye &&
                          n.default.createElement(
                            f.Text,
                            { variant: h.TextVariant.bodySm, as: "h6", marginTop: Se && 1, color: h.TextColor.textAlternative },
                            ye
                          ),
                        Se && n.default.createElement(S.default, { blockExplorerUrl: Se, sensitiveTrackingProperties: me }),
                        n.default.createElement(m.default, {
                          marginTop: 3,
                          className: "smart-transaction-status__background-animation smart-transaction-status__background-animation--bottom"
                        }),
                        Te &&
                          n.default.createElement(
                            f.Text,
                            { variant: h.TextVariant.bodySm, as: "h6", marginTop: 8, color: h.TextColor.textAlternative },
                            Te
                          )
                      ),
                      Oe && se && Ee && n.default.createElement(Ie, null),
                      le === w.SmartTransactionStatus.success
                        ? n.default.createElement(b.default, { sensitiveTrackingProperties: me })
                        : null,
                      n.default.createElement(v.default, {
                        onSubmit: async () => {
                          we ? (await B((0, u.prepareToLeaveSwaps)()), U.push(p.DEFAULT_ROUTE)) : U.push(p.BUILD_QUOTE_ROUTE);
                        },
                        onCancel: async () => {
                          await B((0, u.prepareToLeaveSwaps)()), U.push(p.DEFAULT_ROUTE);
                        },
                        submitText: W(we ? "close" : "tryAgain"),
                        hideCancel: we,
                        cancelText: W("close"),
                        className: "smart-transaction-status__swaps-footer"
                      })
                    );
                  });
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = N(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = e("@metamask/etherscan-link"),
                  l = e("lodash"),
                  i = e("../../../contexts/i18n"),
                  u = e("../../../ducks/swaps/swaps"),
                  c = e("../../../selectors"),
                  d = e("../../../../shared/constants/swaps"),
                  p = e("../../../helpers/constants/routes"),
                  f = e("../../../components/component-library"),
                  m = M(e("../../../components/ui/box")),
                  g = M(e("../../../components/ui/url-icon")),
                  h = e("../../../helpers/constants/design-system"),
                  _ = e("../../../store/actions"),
                  E = e("../../../../shared/constants/metametrics"),
                  w = e("../../../../shared/constants/transaction"),
                  v = M(e("../swaps-footer")),
                  y = e("../swaps.util"),
                  T = e("../../../contexts/metametrics"),
                  b = M(e("../create-new-swap")),
                  S = M(e("../view-on-block-explorer")),
                  k = e("../../../../shared/lib/transactions-controller-utils"),
                  C = M(e("./success-icon")),
                  x = M(e("./reverted-icon")),
                  O = M(e("./canceled-icon")),
                  I = M(e("./unknown-icon")),
                  P = M(e("./arrow-icon")),
                  A = M(e("./timer-icon"));
                function M(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function N(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (N = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/smart-transaction-status/smart-transaction-status.js" }
    ],
    [
      5173,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "39", height: "39", viewBox: "0 0 39 39", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("path", {
                        d: "M34.5457 19.8983C34.5457 23.9296 32.9443 27.7958 30.0937 30.6463C27.2432 33.4969 23.377 35.0983 19.3457 35.0983C15.3144 35.0983 11.4482 33.4969 8.59768 30.6463C5.74713 27.7958 4.1457 23.9296 4.1457 19.8983C4.1457 15.867 5.74713 12.0008 8.59768 9.15029C11.4482 6.29974 15.3144 4.69832 19.3457 4.69832C20.7897 4.69832 22.1957 4.90732 23.5257 5.28732L26.5087 2.30432C24.3047 1.39232 21.8917 0.898315 19.3457 0.898315C16.8506 0.898315 14.3799 1.38977 12.0747 2.3446C9.76953 3.29944 7.67499 4.69897 5.91067 6.46329C2.34748 10.0265 0.345703 14.8592 0.345703 19.8983C0.345703 24.9374 2.34748 29.7702 5.91067 33.3333C7.67499 35.0977 9.76953 36.4972 12.0747 37.452C14.3799 38.4069 16.8506 38.8983 19.3457 38.8983C24.3848 38.8983 29.2175 36.8965 32.7807 33.3333C36.3439 29.7702 38.3457 24.9374 38.3457 19.8983H34.5457ZM11.5747 16.2503L8.8957 18.9483L17.4457 27.4983L36.4457 8.49832L33.7667 5.80032L17.4457 22.1213L11.5747 16.2503Z",
                        fill: "#28A745"
                      })
                    );
                  });
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/smart-transaction-status/success-icon.js" }
    ],
    [
      5174,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "15", height: "14", viewBox: "0 0 15 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("path", {
                        d: "M7.36621 0.0810547C3.62012 0.0810547 0.584961 3.11621 0.584961 6.8623C0.584961 10.6084 3.62012 13.6436 7.36621 13.6436C11.1123 13.6436 14.1475 10.6084 14.1475 6.8623C14.1475 3.11621 11.1123 0.0810547 7.36621 0.0810547ZM7.36621 12.3311C4.33105 12.3311 1.89746 9.89746 1.89746 6.8623C1.89746 3.85449 4.33105 1.39355 7.36621 1.39355C10.374 1.39355 12.835 3.85449 12.835 6.8623C12.835 9.89746 10.374 12.3311 7.36621 12.3311ZM9.03418 9.4873C9.19824 9.59668 9.38965 9.56934 9.49902 9.40527L10.0186 8.72168C10.1279 8.55762 10.1006 8.36621 9.93652 8.25684L8.13184 6.91699V3.03418C8.13184 2.87012 7.96777 2.70605 7.80371 2.70605H6.92871C6.7373 2.70605 6.60059 2.87012 6.60059 3.03418V7.5459C6.60059 7.62793 6.62793 7.7373 6.70996 7.79199L9.03418 9.4873Z",
                        fill: "var(--color-primary-default)"
                      })
                    );
                  });
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/smart-transaction-status/timer-icon.js" }
    ],
    [
      5175,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "39", height: "39", viewBox: "0 0 39 39", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("circle", {
                        cx: "19.1533",
                        cy: "19.2715",
                        r: "17.1",
                        stroke: "var(--color-primary-default)",
                        strokeWidth: "3.8"
                      }),
                      r.default.createElement("path", {
                        d: "M16.712 21.5034C16.712 20.7834 16.88 20.1834 17.216 19.7034C17.568 19.2074 18.08 18.7274 18.752 18.2634C19.008 18.0874 19.264 17.9274 19.52 17.7834C19.776 17.6394 20 17.4874 20.192 17.3274C20.4 17.1514 20.56 16.9674 20.672 16.7754C20.8 16.5674 20.864 16.3194 20.864 16.0314C20.864 15.5354 20.688 15.1594 20.336 14.9034C20 14.6474 19.592 14.5194 19.112 14.5194C18.616 14.5194 18.16 14.6794 17.744 14.9994C17.344 15.3034 17.144 15.7674 17.144 16.3914H13.52C13.52 15.6394 13.664 14.9354 13.952 14.2794C14.24 13.6074 14.632 13.0314 15.128 12.5514C15.64 12.0554 16.232 11.6634 16.904 11.3754C17.592 11.0874 18.328 10.9434 19.112 10.9434C19.896 10.9434 20.616 11.0794 21.272 11.3514C21.944 11.6234 22.512 11.9834 22.976 12.4314C23.456 12.8794 23.824 13.3994 24.08 13.9914C24.352 14.5674 24.488 15.1754 24.488 15.8154C24.488 16.2314 24.456 16.6234 24.392 16.9914C24.344 17.3594 24.24 17.7114 24.08 18.0474C23.936 18.3834 23.728 18.7114 23.456 19.0314C23.184 19.3514 22.84 19.6634 22.424 19.9674C21.784 20.4474 21.272 20.8234 20.888 21.0954C20.52 21.3674 20.336 21.6474 20.336 21.9354V21.9594H16.712V21.5034ZM18.512 28.4634C18.16 28.4634 17.824 28.3994 17.504 28.2714C17.2 28.1274 16.928 27.9434 16.688 27.7194C16.464 27.4794 16.28 27.2074 16.136 26.9034C16.008 26.5834 15.944 26.2474 15.944 25.8954C15.944 25.5434 16.008 25.2154 16.136 24.9114C16.28 24.5914 16.464 24.3194 16.688 24.0954C16.928 23.8554 17.2 23.6714 17.504 23.5434C17.824 23.3994 18.16 23.3274 18.512 23.3274C18.864 23.3274 19.192 23.3994 19.496 23.5434C19.816 23.6714 20.088 23.8554 20.312 24.0954C20.552 24.3194 20.736 24.5914 20.864 24.9114C21.008 25.2154 21.08 25.5434 21.08 25.8954C21.08 26.2474 21.008 26.5834 20.864 26.9034C20.736 27.2074 20.552 27.4794 20.312 27.7194C20.088 27.9434 19.816 28.1274 19.496 28.2714C19.192 28.3994 18.864 28.4634 18.512 28.4634Z",
                        fill: "var(--color-primary-default)"
                      })
                    );
                  });
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/smart-transaction-status/unknown-icon.js" }
    ],
    [
      5176,
      {
        "../../../../shared/constants/swaps": 3970,
        "../../../components/component-library": 4453,
        "../../../components/component-library/banner-alert": 4415,
        "../../../components/ui/box": 4607,
        "../../../contexts/i18n": 4748,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/design-system": 4771,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = g);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = m(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = f(e("prop-types")),
                  o = e("../../../contexts/i18n"),
                  l = e("../../../components/component-library/banner-alert"),
                  i = f(e("../../../components/ui/box")),
                  u = e("../../../helpers/constants/design-system"),
                  c = e("../../../components/component-library"),
                  d = e("../../../../shared/constants/swaps"),
                  p = e("../../../ducks/swaps/swaps");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (m = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function g({ swapsErrorKey: e, showTransactionSettingsLink: t, currentSlippage: a }) {
                  const s = (0, n.useContext)(o.I18nContext),
                    f = (0, r.useDispatch)();
                  let m,
                    g,
                    h = u.SEVERITIES.DANGER;
                  const _ = n.default.createElement(
                    c.Text,
                    { variant: u.TextVariant.bodyMd },
                    n.default.createElement(
                      c.ButtonLink,
                      {
                        onClick: (e) => {
                          e.preventDefault(), f((0, p.setTransactionSettingsOpened)(!0));
                        },
                        size: c.ButtonLinkSize.Inherit
                      },
                      s("swapAdjustSlippage")
                    )
                  );
                  switch (e) {
                    case d.SLIPPAGE_VERY_HIGH_ERROR:
                      (m = s("swapSlippageOverLimitTitle")),
                        (g = n.default.createElement(
                          i.default,
                          null,
                          n.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, as: "h6" },
                            s("swapSlippageOverLimitDescription")
                          ),
                          _
                        ));
                      break;
                    case d.SLIPPAGE_HIGH_ERROR:
                      (h = u.SEVERITIES.WARNING),
                        (m = s("swapSlippageHighTitle")),
                        (g = n.default.createElement(
                          i.default,
                          null,
                          n.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, as: "h6" },
                            s("swapSlippageHighDescription", [a])
                          ),
                          t && _
                        ));
                      break;
                    case d.SLIPPAGE_LOW_ERROR:
                      (h = u.SEVERITIES.WARNING),
                        (m = s("swapSlippageLowTitle")),
                        (g = n.default.createElement(
                          i.default,
                          null,
                          n.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, as: "h6" },
                            s("swapSlippageLowDescription", [a])
                          ),
                          t && _
                        ));
                      break;
                    case d.SLIPPAGE_NEGATIVE_ERROR:
                      (m = s("swapSlippageNegativeTitle")),
                        (g = n.default.createElement(
                          i.default,
                          null,
                          n.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, as: "h6" },
                            s("swapSlippageNegativeDescription")
                          ),
                          _
                        ));
                      break;
                    case d.QUOTES_NOT_AVAILABLE_ERROR:
                      (m = s("swapQuotesNotAvailableErrorTitle")),
                        (g = n.default.createElement(
                          i.default,
                          null,
                          n.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, as: "h6" },
                            s("swapQuotesNotAvailableDescription")
                          ),
                          n.default.createElement(
                            c.ButtonLink,
                            {
                              size: c.ButtonLinkSize.Inherit,
                              textProps: { variant: u.TextVariant.bodyMd, alignItems: u.AlignItems.flexStart },
                              as: "a",
                              href: "https://support.metamask.io/hc/en-us/articles/4405093054363-User-Guide-Swaps",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            },
                            s("swapLearnMore")
                          )
                        ));
                      break;
                    case d.ERROR_FETCHING_QUOTES:
                      (m = s("swapFetchingQuotesErrorTitle")),
                        (g = n.default.createElement(
                          c.Text,
                          { variant: u.TextVariant.bodyMd, as: "h6" },
                          s("swapFetchingQuotesErrorDescription")
                        ));
                      break;
                    case d.CONTRACT_DATA_DISABLED_ERROR:
                      (m = s("swapContractDataDisabledErrorTitle")),
                        (g = n.default.createElement(
                          c.Text,
                          { variant: u.TextVariant.bodyMd, as: "h6" },
                          s("swapContractDataDisabledErrorDescription")
                        ));
                      break;
                    case d.QUOTES_EXPIRED_ERROR:
                      (m = s("swapQuotesExpiredErrorTitle")),
                        (g = n.default.createElement(
                          c.Text,
                          { variant: u.TextVariant.bodyMd, as: "h6" },
                          s("swapQuotesExpiredErrorDescription")
                        ));
                      break;
                    case d.OFFLINE_FOR_MAINTENANCE:
                      (m = s("offlineForMaintenance")),
                        (g = n.default.createElement(
                          c.Text,
                          { variant: u.TextVariant.bodyMd, as: "h6" },
                          s("metamaskSwapsOfflineDescription")
                        ));
                      break;
                    case d.SWAP_FAILED_ERROR:
                      m = s("swapFailedErrorTitle");
                  }
                  return n.default.createElement(
                    l.BannerAlert,
                    { severity: h, title: m, titleProps: { "data-testid": "swaps-banner-title" } },
                    g
                  );
                }
                g.propTypes = {
                  swapsErrorKey: s.default.string,
                  showTransactionSettingsLink: s.default.bool,
                  currentSlippage: s.default.number
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/swaps-banner-alert/swaps-banner-alert.js" }
    ],
    [
      5177,
      { "./swaps-footer": 5178 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./swaps-footer")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/swaps-footer/index.js" }
    ],
    [
      5178,
      {
        "../../../components/ui/page-container/page-container-footer": 4694,
        "../../../contexts/i18n": 4748,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = c);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = u(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = i(e("prop-types")),
                  s = i(e("classnames")),
                  o = e("../../../contexts/i18n"),
                  l = i(e("../../../components/ui/page-container/page-container-footer"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (u = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function c({
                  onCancel: e,
                  hideCancel: t,
                  onSubmit: a,
                  submitText: r,
                  disabled: i,
                  showTermsOfService: u,
                  showTopBorder: c,
                  className: d = "",
                  cancelText: p
                }) {
                  const f = (0, n.useContext)(o.I18nContext);
                  return n.default.createElement(
                    "div",
                    { className: "swaps-footer" },
                    n.default.createElement(
                      "div",
                      { className: (0, s.default)("swaps-footer__buttons", d, { "swaps-footer__buttons--border": c }) },
                      n.default.createElement(l.default, {
                        onCancel: e,
                        hideCancel: t,
                        cancelText: p || f("back"),
                        onSubmit: a,
                        submitText: r,
                        footerClassName: (0, s.default)("swaps-footer__custom-page-container-footer-class", d),
                        footerButtonClassName: (0, s.default)("swaps-footer__custom-page-container-footer-button-class", {
                          "swaps-footer__custom-page-container-footer-button-class--single": t
                        }),
                        disabled: i
                      })
                    ),
                    u &&
                      n.default.createElement(
                        "div",
                        {
                          className: "swaps-footer__bottom-text",
                          onClick: () => global.platform.openTab({ url: "https://metamask.io/terms.html" })
                        },
                        f("termsOfService")
                      )
                  );
                }
                c.propTypes = {
                  onCancel: r.default.func,
                  hideCancel: r.default.bool,
                  onSubmit: r.default.func,
                  submitText: r.default.string,
                  disabled: r.default.bool,
                  showTermsOfService: r.default.bool,
                  showTopBorder: r.default.bool,
                  className: r.default.string,
                  cancelText: r.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/swaps-footer/swaps-footer.js" }
    ],
    [
      5179,
      {
        "../../../shared/constants/common": 3955,
        "../../../shared/constants/network": 3963,
        "../../../shared/constants/swaps": 3970,
        "../../../shared/lib/fetch-with-cache": 3976,
        "../../../shared/lib/swaps-utils": 3979,
        "../../../shared/lib/transactions-controller-utils": 3982,
        "../../../shared/modules/conversion.utils": 3988,
        "../../../shared/modules/hexstring-utils": 3993,
        "../../../shared/modules/swaps.utils": 4003,
        "../../helpers/utils/confirm-tx.util": 4794,
        "bignumber.js": 2283
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.countDecimals = a.StxErrorTypes = void 0),
                  (a.fetchAggregatorMetadata = async function (e) {
                    const t = (0, p.getBaseApi)("aggregatorMetadata", e),
                      a = await (0, u.default)({
                        url: t,
                        fetchOptions: { method: "GET", headers: _ },
                        cacheOptions: { cacheRefreshTime: g },
                        functionName: "fetchAggregatorMetadata"
                      }),
                      n = {};
                    for (const e in a) (0, p.validateData)(v, a[e], t) && (n[e] = a[e]);
                    return n;
                  }),
                  (a.fetchSwapsFeatureFlags = async function () {
                    const e = s.SWAPS_API_V2_BASE_URL;
                    return await (0, u.default)({
                      url: `${e}/featureFlags`,
                      fetchOptions: { method: "GET", headers: _ },
                      cacheOptions: { cacheRefreshTime: 6e5 },
                      functionName: "fetchSwapsFeatureFlags"
                    });
                  }),
                  (a.fetchSwapsGasPrices = async function (e) {
                    const t = (0, p.getBaseApi)("gasPrices", e),
                      a = await (0, u.default)({
                        url: t,
                        fetchOptions: { method: "GET", headers: _ },
                        cacheOptions: { cacheRefreshTime: 3e4 },
                        functionName: "fetchSwapsGasPrices"
                      });
                    if (!(0, p.validateData)(T, a, t)) throw new Error(`${t} response is invalid`);
                    const { SafeGasPrice: n, ProposeGasPrice: r, FastGasPrice: s } = a;
                    return { safeLow: n, average: r, fast: s };
                  }),
                  (a.fetchToken = async function (e, t) {
                    const a = (0, p.getBaseApi)("token", t);
                    return await (0, u.default)({
                      url: `${a}?address=${e}`,
                      fetchOptions: { method: "GET", headers: _ },
                      cacheOptions: { cacheRefreshTime: g },
                      functionName: "fetchToken"
                    });
                  }),
                  (a.fetchTokenPrice = async function (e) {
                    var t;
                    const a = `contract_addresses=${e}&vs_currencies=eth`,
                      n = await (0, u.default)({
                        url: `https://api.coingecko.com/api/v3/simple/token_price/ethereum?${a}`,
                        fetchOptions: { method: "GET", headers: { "X-Requested-With": "metamask.dec.jan.2024" } },
                        cacheOptions: { cacheRefreshTime: 6e4 },
                        functionName: "fetchTokenPrice"
                      });
                    return null == n || null === (t = n[e]) || void 0 === t ? void 0 : t.eth;
                  }),
                  (a.fetchTokens = async function (e) {
                    const t = (0, p.getBaseApi)("tokens", e),
                      a = await (0, u.default)({
                        url: t,
                        fetchOptions: { method: "GET", headers: _ },
                        cacheOptions: { cacheRefreshTime: g },
                        functionName: "fetchTokens"
                      });
                    return [
                      s.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[e] || null,
                      ...a.filter(
                        (a) =>
                          (0, p.validateData)(E, a, t, false) &&
                          !((0, o.isSwapsDefaultTokenSymbol)(a.symbol, e) || (0, o.isSwapsDefaultTokenAddress)(a.address, e))
                      )
                    ];
                  }),
                  (a.fetchTopAssets = async function (e) {
                    const t = (0, p.getBaseApi)("topAssets", e),
                      a =
                        (await (0, u.default)({
                          url: t,
                          functionName: "fetchTopAssets",
                          fetchOptions: { method: "GET", headers: _ },
                          cacheOptions: { cacheRefreshTime: g }
                        })) || [];
                    return a.reduce((e, a, n) => ((0, p.validateData)(w, a, t) ? { ...e, [a.address]: { index: String(n) } } : e), {});
                  }),
                  (a.formatSwapsValueForDisplay = k),
                  (a.getNetworkNameByChainId = a.getFeeForSmartTransaction = a.getClassNameForCharLength = void 0),
                  (a.getRenderableNetworkFeesForQuote = S),
                  (a.parseSmartTransactionsError =
                    a.isContractAddressValid =
                    a.getTranslatedStxErrorMessage =
                    a.getSwapsLivenessForNetwork =
                      void 0),
                  (a.quotesToRenderableData = function ({
                    quotes: e,
                    gasPrice: t,
                    conversionRate: a,
                    currentCurrency: n,
                    approveGas: s,
                    tokenConversionRates: l,
                    chainId: i,
                    smartTransactionEstimatedGas: u,
                    nativeCurrencySymbol: c,
                    multiLayerL1ApprovalFeeTotal: p
                  }) {
                    return Object.values(e).map((e) => {
                      const {
                        destinationAmount: m = 0,
                        sourceAmount: g = 0,
                        sourceTokenInfo: h,
                        destinationTokenInfo: _,
                        slippage: E,
                        aggType: w,
                        aggregator: v,
                        gasEstimateWithRefund: y,
                        averageGas: T,
                        fee: C,
                        trade: x,
                        multiLayerL1TradeFeeTotal: O
                      } = e;
                      let I = null;
                      null !== O && null !== p ? (I = (0, f.sumHexes)(O || "0x0", p || "0x0")) : null !== O && (I = O);
                      const P = (0, d.calcTokenAmount)(g, h.decimals).toString(10),
                        A = (0, d.calcTokenAmount)(m, _.decimals).toPrecision(8);
                      let M = null,
                        N = null,
                        R = null,
                        F = null;
                      ({
                        feeInFiat: M,
                        feeInEth: N,
                        rawNetworkFees: R,
                        rawEthFee: F
                      } = S({
                        tradeGas: y || (0, f.decimalToHex)(T || 8e5),
                        approveGas: s,
                        gasPrice: t,
                        currentCurrency: n,
                        conversionRate: a,
                        tradeValue: x.value,
                        sourceSymbol: h.symbol,
                        sourceAmount: g,
                        chainId: i,
                        multiLayerL1FeeTotal: I
                      })),
                        u &&
                          ({ feeInFiat: M, feeInEth: N } = b({
                            chainId: i,
                            currentCurrency: n,
                            conversionRate: a,
                            nativeCurrencySymbol: c,
                            feeInWeiDec: u.feeEstimate
                          }));
                      const L = new r.BigNumber(100 - E).div(100),
                        D = new r.BigNumber(A).times(L).toFixed(6),
                        j = l[_.address],
                        q = (0, o.isSwapsDefaultTokenSymbol)(_.symbol, i)
                          ? (0, d.calcTokenAmount)(m, _.decimals).minus(F, 10)
                          : new r.BigNumber(j || 0, 10).times((0, d.calcTokenAmount)(m, _.decimals), 10).minus(F, 10);
                      let W,
                        U = E;
                      return (
                        "AGG" === w
                          ? (W = "swapAggregator")
                          : "RFQ" === w
                          ? ((W = "swapRequestForQuotation"), (U = 0))
                          : (W = "DEX" === w ? "swapDecentralizedExchange" : "CONTRACT" === w ? "swapDirectContract" : "swapUnknown"),
                        {
                          aggId: v,
                          amountReceiving: `${A} ${_.symbol}`,
                          destinationTokenDecimals: _.decimals,
                          destinationTokenSymbol: _.symbol,
                          destinationTokenValue: k(A),
                          destinationIconUrl: _.iconUrl,
                          isBestQuote: e.isBestQuote,
                          liquiditySourceKey: W,
                          feeInEth: N,
                          detailedNetworkFees: `${N} (${M})`,
                          networkFees: M,
                          quoteSource: w,
                          rawNetworkFees: R,
                          slippage: U,
                          sourceTokenDecimals: h.decimals,
                          sourceTokenSymbol: h.symbol,
                          sourceTokenValue: P,
                          sourceTokenIconUrl: h.iconUrl,
                          ethValueOfTrade: q,
                          minimumAmountReceived: D,
                          metaMaskFee: C
                        }
                      );
                    });
                  }),
                  (a.showRemainingTimeInMinAndSec = void 0);
                var n,
                  r = e("bignumber.js"),
                  s = e("../../../shared/constants/swaps"),
                  o = e("../../../shared/modules/swaps.utils"),
                  l = e("../../../shared/constants/network"),
                  i = e("../../helpers/utils/confirm-tx.util"),
                  u = (n = e("../../../shared/lib/fetch-with-cache")) && n.__esModule ? n : { default: n },
                  c = e("../../../shared/modules/hexstring-utils"),
                  d = e("../../../shared/lib/transactions-controller-utils"),
                  p = e("../../../shared/lib/swaps-utils"),
                  f = e("../../../shared/modules/conversion.utils"),
                  m = e("../../../shared/constants/common");
                const g = 3e5,
                  h = "usd",
                  _ = { "X-Client-Id": s.SWAPS_CLIENT_ID },
                  E = [
                    { property: "address", type: "string", validator: (e) => (0, c.isValidHexAddress)(e, { allowNonPrefixed: !1 }) },
                    { property: "symbol", type: "string", validator: (e) => (0, p.truthyString)(e) && e.length <= 12 },
                    { property: "decimals", type: "string|number", validator: (e) => Number(e) >= 0 && Number(e) <= 36 }
                  ],
                  w = E.slice(0, 2),
                  v = [
                    { property: "color", type: "string", validator: (e) => Boolean(e.match(/^#[A-Fa-f0-9]+$/u)) },
                    { property: "title", type: "string", validator: p.truthyString },
                    { property: "icon", type: "string", validator: (e) => Boolean(e.match(/^data:image/u)) }
                  ],
                  y = (e) => !isNaN(e) && e.match(/^[.0-9]+$/u) && !isNaN(parseFloat(e)),
                  T = [
                    { property: "SafeGasPrice", type: "string", validator: y },
                    { property: "ProposeGasPrice", type: "string", validator: y },
                    { property: "FastGasPrice", type: "string", validator: y }
                  ];
                const b = ({
                  chainId: e,
                  currentCurrency: t,
                  conversionRate: a,
                  USDConversionRate: n,
                  nativeCurrencySymbol: r,
                  feeInWeiDec: o
                }) => {
                  var l;
                  const u = (0, f.decimalToHex)(o),
                    c = (0, f.getValueFromWeiHex)({ value: u, toDenomination: m.EtherDenomination.ETH, numberOfDecimals: 5 }),
                    d = (0, f.getValueFromWeiHex)({ value: u, toCurrency: t, conversionRate: a, numberOfDecimals: 2 });
                  let p;
                  p = t === h ? d : (0, f.getValueFromWeiHex)({ value: u, toCurrency: h, conversionRate: n, numberOfDecimals: 2 });
                  return {
                    feeInUsd: p,
                    feeInFiat: (0, i.formatCurrency)(d, t),
                    feeInEth: `${c} ${r || (null === (l = s.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[e]) || void 0 === l ? void 0 : l.symbol)}`,
                    rawEthFee: c
                  };
                };
                function S({
                  tradeGas: e,
                  approveGas: t,
                  gasPrice: a,
                  currentCurrency: n,
                  conversionRate: l,
                  USDConversionRate: u,
                  tradeValue: c,
                  sourceSymbol: p,
                  sourceAmount: g,
                  chainId: _,
                  nativeCurrencySymbol: E,
                  multiLayerL1FeeTotal: w
                }) {
                  const v = new r.BigNumber(e || "0x0", 16).plus(t || "0x0", 16).toString(16);
                  let y = (0, d.calcGasTotal)(v, a);
                  null !== w && (y = (0, f.sumHexes)(y || "0x0", w || "0x0"));
                  const T = new r.BigNumber(c, 16).minus((0, o.isSwapsDefaultTokenSymbol)(p, _) ? g : 0, 10).toString(16),
                    b = new r.BigNumber(y, 16).plus(T, 16).toString(16),
                    S = (0, f.getValueFromWeiHex)({ value: b, toDenomination: m.EtherDenomination.ETH, numberOfDecimals: 5 }),
                    k = (0, f.getValueFromWeiHex)({ value: b, toCurrency: n, conversionRate: l, numberOfDecimals: 2 }),
                    C = (0, i.formatCurrency)(k, n);
                  let x;
                  x = n === h ? k : (0, f.getValueFromWeiHex)({ value: b, toCurrency: h, conversionRate: u, numberOfDecimals: 2 });
                  return {
                    rawNetworkFees: k,
                    feeInUsd: x,
                    rawEthFee: S,
                    feeInFiat: C,
                    feeInEth: `${S} ${E || s.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[_].symbol}`,
                    nonGasFee: T
                  };
                }
                function k(e) {
                  let t;
                  return (
                    (t = "string" == typeof e && e.includes("...") ? e : (0, d.toPrecisionWithoutTrailingZeros)(e, 12)),
                    t.match(/e[+-]/u) && (t = new r.BigNumber(t).toFixed()),
                    t
                  );
                }
                a.getFeeForSmartTransaction = b;
                a.getClassNameForCharLength = (e, t) => {
                  let a;
                  return (a = !e || e.length <= 10 ? "lg" : e.length > 10 && e.length <= 13 ? "md" : "sm"), `${t}--${a}`;
                };
                a.isContractAddressValid = (e, t) =>
                  !(!e || !s.ALLOWED_CONTRACT_ADDRESSES[t]) &&
                  s.ALLOWED_CONTRACT_ADDRESSES[t].some((t) => e.toLowerCase() === t.toLowerCase());
                const C = (e) => {
                  switch (e) {
                    case l.CHAIN_IDS.MAINNET:
                      return s.ETHEREUM;
                    case l.CHAIN_IDS.BSC:
                      return s.BSC;
                    case l.CHAIN_IDS.POLYGON:
                      return s.POLYGON;
                    case l.CHAIN_IDS.GOERLI:
                      return s.GOERLI;
                    case l.CHAIN_IDS.AVALANCHE:
                      return s.AVALANCHE;
                    case l.CHAIN_IDS.OPTIMISM:
                      return s.OPTIMISM;
                    case l.CHAIN_IDS.ARBITRUM:
                      return s.ARBITRUM;
                    case l.CHAIN_IDS.ZKSYNC_ERA:
                      return s.ZKSYNC_ERA;
                    case l.CHAIN_IDS.LINEA_MAINNET:
                      return s.LINEA;
                    default:
                      return "";
                  }
                };
                a.getNetworkNameByChainId = C;
                a.getSwapsLivenessForNetwork = (e, t = {}) => {
                  const a = C(e);
                  if ([l.CHAIN_IDS.LOCALHOST, l.CHAIN_IDS.GOERLI].includes(e)) return { swapsFeatureIsLive: !0 };
                  if (!t[a]) return { swapsFeatureIsLive: !1 };
                  return t[a].extensionActive ? { swapsFeatureIsLive: !0 } : { swapsFeatureIsLive: t[a].fallbackToV1 };
                };
                a.countDecimals = (e) => {
                  var t;
                  return (e && Math.floor(e) !== e && (null === (t = e.toString().split(".")[1]) || void 0 === t ? void 0 : t.length)) || 0;
                };
                a.showRemainingTimeInMinAndSec = (e) => {
                  if (!Number.isInteger(e)) return "0:00";
                  return `${Math.floor(e / 60)}:${(e % 60).toString().padStart(2, "0")}`;
                };
                let x = (a.StxErrorTypes = (function (e) {
                  return (
                    (e.unavailable = "unavailable"), (e.notEnoughFunds = "not_enough_funds"), (e.regularTxPending = "regular_tx_pending"), e
                  );
                })({}));
                a.getTranslatedStxErrorMessage = (e, t) => {
                  switch (e) {
                    case x.unavailable:
                    case x.regularTxPending:
                      return t("smartSwapsErrorUnavailable");
                    case x.notEnoughFunds:
                      return t("smartSwapsErrorNotEnoughFunds");
                    default:
                      return t("smartSwapsErrorUnavailable");
                  }
                };
                a.parseSmartTransactionsError = (e) => {
                  const t = e.slice(12);
                  return JSON.parse(t.trim());
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/swaps.util.ts" }
    ],
    [
      5180,
      {
        "../../../../shared/constants/swaps": 3970,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../components/ui/button": 4611,
        "../../../components/ui/button-group": 4609,
        "../../../components/ui/info-tooltip": 4665,
        "../../../components/ui/toggle-button": 4729,
        "../../../components/ui/typography": 4740,
        "../../../contexts/i18n": 4748,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/design-system": 4771,
        "../../../store/actions": 5204,
        "../swaps.util": 5179,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = T);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = y(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = v(e("prop-types")),
                  o = v(e("classnames")),
                  l = e("../../../contexts/i18n"),
                  i = v(e("../../../components/ui/button-group")),
                  u = v(e("../../../components/ui/button")),
                  c = v(e("../../../components/ui/info-tooltip")),
                  d = v(e("../../../components/ui/toggle-button")),
                  p = v(e("../../../components/ui/box")),
                  f = v(e("../../../components/ui/typography")),
                  m = e("../../../helpers/constants/design-system"),
                  g = e("../swaps.util"),
                  h = e("../../../../shared/constants/swaps"),
                  _ = e("../../../components/component-library"),
                  E = e("../../../store/actions"),
                  w = e("../../../ducks/swaps/swaps");
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (y = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function T({
                  onSelect: e,
                  onModalClose: t,
                  maxAllowedSlippage: a,
                  currentSlippage: s,
                  smartTransactionsEnabled: v,
                  smartTransactionsOptInStatus: y,
                  setSmartTransactionsOptInStatus: T,
                  currentSmartTransactionsError: b,
                  isDirectWrappingEnabled: S
                }) {
                  const k = (0, n.useContext)(l.I18nContext),
                    C = (0, r.useDispatch)(),
                    x = (0, r.useSelector)(w.getSwapsErrorKey),
                    [O, I] = (0, n.useState)(() => ("number" != typeof s || Object.values(h.Slippage).includes(s) ? "" : s.toString())),
                    [P, A] = (0, n.useState)(!1),
                    [M, N] = (0, n.useState)(() =>
                      s === h.Slippage.high ? 1 : s === h.Slippage.default ? 0 : "number" == typeof s ? 2 : 0
                    ),
                    [R, F] = (0, n.useState)(null),
                    [L, D] = (0, n.useState)(s),
                    [j, q] = (0, n.useState)(y),
                    W = L !== s || j !== y;
                  let U = "",
                    B = "",
                    G = m.SEVERITIES.INFO;
                  O &&
                    (Number(O) < 0
                      ? ((G = m.SEVERITIES.DANGER),
                        (U = k("swapSlippageNegativeDescription")),
                        (B = k("swapSlippageNegativeTitle")),
                        C((0, E.setSwapsErrorKey)(h.SLIPPAGE_NEGATIVE_ERROR)))
                      : Number(O) > 0 && Number(O) <= 1
                      ? ((G = m.SEVERITIES.WARNING), (U = k("swapSlippageLowDescription", [L])), (B = k("swapSlippageLowTitle")))
                      : Number(O) >= 5 && Number(O) <= a
                      ? ((G = m.SEVERITIES.WARNING), (U = k("swapSlippageHighDescription", [L])), (B = k("swapSlippageHighTitle")))
                      : Number(O) > a
                      ? ((G = m.SEVERITIES.DANGER),
                        (U = k("swapSlippageOverLimitDescription")),
                        (B = k("swapSlippageOverLimitTitle")),
                        C((0, E.setSwapsErrorKey)(h.SLIPPAGE_VERY_HIGH_ERROR)))
                      : 0 === Number(O)
                      ? ((G = m.SEVERITIES.INFO), (U = k("swapSlippageZeroDescription")), (B = k("swapSlippageZeroTitle")))
                      : x && C((0, E.setSwapsErrorKey)("")));
                  const H = G === m.SEVERITIES.DANGER,
                    V = O || k("swapCustom");
                  return (
                    (0, n.useEffect)(() => {
                      R && P && window.document.activeElement !== R && R.focus();
                    }, [R, P]),
                    (0, n.useEffect)(() => {
                      2 !== M && C((0, E.setSwapsErrorKey)(""));
                    }, [C, M]),
                    (0, n.useEffect)(() => {
                      j === undefined && q(y);
                    }, [y, j]),
                    n.default.createElement(
                      _.Modal,
                      {
                        onClose: t,
                        isOpen: !0,
                        isClosedOnOutsideClick: !1,
                        isClosedOnEscapeKey: !0,
                        className: "mm-modal__custom-scrollbar"
                      },
                      n.default.createElement(_.ModalOverlay, null),
                      n.default.createElement(
                        _.ModalContent,
                        null,
                        n.default.createElement(_.ModalHeader, { onClose: t }, k("transactionSettings")),
                        n.default.createElement(
                          p.default,
                          {
                            display: m.DISPLAY.FLEX,
                            flexDirection: m.FlexDirection.Column,
                            justifyContent: m.JustifyContent.spaceBetween,
                            alignItems: m.AlignItems.stretch,
                            className: "transaction-settings__content"
                          },
                          n.default.createElement(
                            p.default,
                            { marginTop: 7, marginBottom: 5 },
                            n.default.createElement(
                              n.default.Fragment,
                              null,
                              v &&
                                n.default.createElement(
                                  p.default,
                                  { marginTop: 2, marginBottom: 6, display: m.DISPLAY.FLEX, justifyContent: m.JustifyContent.spaceBetween },
                                  n.default.createElement(
                                    p.default,
                                    { display: m.DISPLAY.FLEX, alignItems: m.AlignItems.center, paddingRight: 3 },
                                    n.default.createElement(
                                      f.default,
                                      { variant: m.TypographyVariant.H6, boxProps: { paddingRight: 2 } },
                                      k("smartSwaps")
                                    ),
                                    b
                                      ? n.default.createElement(c.default, {
                                          position: "top",
                                          iconFillColor: "var(--color-icon-muted)",
                                          contentText: (0, g.getTranslatedStxErrorMessage)(b, k)
                                        })
                                      : n.default.createElement(c.default, {
                                          position: "top",
                                          contentText: k("smartSwapsTooltip", [
                                            n.default.createElement(
                                              _.ButtonLink,
                                              {
                                                key: "smart-swaps-faq-and-risk-disclosures",
                                                size: _.ButtonLinkSize.Inherit,
                                                href: h.SMART_SWAPS_FAQ_AND_RISK_DISCLOSURES_URL,
                                                externalLink: !0,
                                                display: m.Display.Inline
                                              },
                                              k("faqAndRiskDisclosures")
                                            )
                                          ]),
                                          iconFillColor: "var(--color-icon-muted)"
                                        })
                                  ),
                                  n.default.createElement(d.default, {
                                    value: j,
                                    onToggle: (e) => {
                                      q(!e, e);
                                    },
                                    offLabel: k("off"),
                                    onLabel: k("on"),
                                    disabled: Boolean(b)
                                  })
                                ),
                              !S &&
                                n.default.createElement(
                                  n.default.Fragment,
                                  null,
                                  n.default.createElement(
                                    p.default,
                                    { display: m.DISPLAY.FLEX, alignItems: m.AlignItems.center },
                                    n.default.createElement(
                                      f.default,
                                      { variant: m.TypographyVariant.H6, boxProps: { paddingRight: 2 } },
                                      k("swapsMaxSlippage")
                                    ),
                                    b
                                      ? n.default.createElement(c.default, {
                                          position: "top",
                                          iconFillColor: "var(--color-icon-muted)",
                                          contentText: (0, g.getTranslatedStxErrorMessage)(b, k)
                                        })
                                      : n.default.createElement(c.default, {
                                          position: "top",
                                          iconFillColor: "var(--color-icon-muted)",
                                          contentText: k("swapSlippageTooltip")
                                        })
                                  ),
                                  n.default.createElement(
                                    p.default,
                                    { display: m.DISPLAY.FLEX },
                                    n.default.createElement(
                                      i.default,
                                      {
                                        defaultActiveButtonIndex: 2 !== M || O ? M : 1,
                                        variant: "radiogroup",
                                        newActiveButtonIndex: M,
                                        className: (0, o.default)("button-group", "transaction-settings__button-group")
                                      },
                                      n.default.createElement(
                                        u.default,
                                        {
                                          onClick: () => {
                                            I(""), A(!1), N(0), D(h.Slippage.default);
                                          }
                                        },
                                        k("swapSlippagePercent", [h.Slippage.default])
                                      ),
                                      n.default.createElement(
                                        u.default,
                                        {
                                          onClick: () => {
                                            I(""), A(!1), N(1), D(h.Slippage.high);
                                          }
                                        },
                                        k("swapSlippagePercent", [h.Slippage.high])
                                      ),
                                      n.default.createElement(
                                        u.default,
                                        {
                                          className: (0, o.default)("transaction-settings__button-group-custom-button", {
                                            "radio-button--danger": H
                                          }),
                                          onClick: () => {
                                            N(2), A(!0);
                                          }
                                        },
                                        P
                                          ? n.default.createElement(
                                              "div",
                                              {
                                                className: (0, o.default)("transaction-settings__custom-input", {
                                                  "transaction-settings__custom-input--danger": H
                                                })
                                              },
                                              n.default.createElement("input", {
                                                "data-testid": "transaction-settings-custom-slippage",
                                                onChange: (e) => {
                                                  const { value: t } = e.target;
                                                  !isNaN(Number(t)) && (I(t), D(Number(t)));
                                                },
                                                type: "text",
                                                maxLength: "4",
                                                ref: F,
                                                onBlur: () => {
                                                  A(!1);
                                                },
                                                onKeyDown: (e) => {
                                                  "Enter" === e.key && A(!1);
                                                },
                                                value: O || ""
                                              })
                                            )
                                          : V,
                                        (O || P) &&
                                          n.default.createElement("div", { className: "transaction-settings__percentage-suffix" }, "%")
                                      )
                                    )
                                  )
                                )
                            ),
                            U &&
                              n.default.createElement(
                                p.default,
                                { marginTop: 5 },
                                n.default.createElement(
                                  _.BannerAlert,
                                  { severity: G, title: B, titleProps: { "data-testid": "swaps-banner-title" } },
                                  n.default.createElement(
                                    f.default,
                                    { variant: m.TypographyVariant.H6, testId: "mm-banner-alert-notification-text" },
                                    U
                                  )
                                )
                              )
                          ),
                          n.default.createElement(
                            p.default,
                            { marginTop: 5 },
                            n.default.createElement(
                              _.ButtonPrimary,
                              {
                                onClick: () => {
                                  L !== s && e(L), j !== y && T(j), t();
                                },
                                block: !0,
                                disabled: !W,
                                "data-testid": "update-transaction-settings-button"
                              },
                              k("update")
                            )
                          )
                        )
                      )
                    )
                  );
                }
                T.propTypes = {
                  onSelect: s.default.func.isRequired,
                  onModalClose: s.default.func.isRequired,
                  maxAllowedSlippage: s.default.number.isRequired,
                  currentSlippage: s.default.number,
                  smartTransactionsEnabled: s.default.bool.isRequired,
                  smartTransactionsOptInStatus: s.default.bool,
                  setSmartTransactionsOptInStatus: s.default.func,
                  currentSmartTransactionsError: s.default.string,
                  isDirectWrappingEnabled: s.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/transaction-settings/transaction-settings.js" }
    ],
    [
      5181,
      { "./view-on-block-explorer": 5182 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./view-on-block-explorer")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/view-on-block-explorer/index.js" }
    ],
    [
      5182,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/ui/box": 4607,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/utils/util": 4812,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = p);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = d(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = c(e("prop-types")),
                  s = c(e("../../../components/ui/box")),
                  o = e("../../../contexts/i18n"),
                  l = e("../../../helpers/utils/util"),
                  i = e("../../../contexts/metametrics"),
                  u = e("../../../../shared/constants/metametrics");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (d = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function p({ blockExplorerUrl: e, sensitiveTrackingProperties: t }) {
                  const a = (0, n.useContext)(o.I18nContext),
                    r = (0, n.useContext)(i.MetaMetricsContext),
                    c = (0, l.getURLHostName)(e);
                  return n.default.createElement(
                    s.default,
                    { marginTop: 6, className: "view-on-block-explorer" },
                    n.default.createElement(
                      "button",
                      {
                        onClick: () => {
                          r({
                            event: u.MetaMetricsEventName.ExternalLinkClicked,
                            category: u.MetaMetricsEventCategory.Swaps,
                            sensitiveProperties: t,
                            properties: {
                              link_type: u.MetaMetricsEventLinkType.TransactionBlockExplorer,
                              location: "Swap Transaction",
                              url_domain: c
                            }
                          }),
                            global.platform.openTab({ url: e });
                        }
                      },
                      a("viewOnCustomBlockExplorer", [a("blockExplorerSwapAction"), c])
                    )
                  );
                }
                p.propTypes = { blockExplorerUrl: r.default.string.isRequired, sensitiveTrackingProperties: r.default.object.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/view-on-block-explorer/view-on-block-explorer.js" }
    ],
    [
      5183,
      { "./view-quote": 5185 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./view-quote")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/view-quote/index.js" }
    ],
    [
      5184,
      {
        "../../../../shared/constants/gas": 3957,
        "../../../components/component-library": 4453,
        "../../../components/ui/actionable-message/actionable-message": 4603,
        "../../../components/ui/box": 4607,
        "../../../components/ui/tooltip": 4736,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = g);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = m(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = f(e("prop-types")),
                  s = f(e("classnames")),
                  o = e("../../../contexts/i18n"),
                  l = f(e("../../../components/ui/actionable-message/actionable-message")),
                  i = f(e("../../../components/ui/tooltip")),
                  u = f(e("../../../components/ui/box")),
                  c = e("../../../helpers/constants/design-system"),
                  d = e("../../../../shared/constants/gas"),
                  p = e("../../../components/component-library");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (m = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function g(e) {
                  const {
                      usedQuote: t,
                      sourceTokenValue: a,
                      destinationTokenValue: r,
                      onAcknowledgementClick: f,
                      acknowledged: m,
                      priceSlippageFromSource: g,
                      priceSlippageFromDestination: h,
                      priceDifferencePercentage: _,
                      priceSlippageUnknownFiatValue: E
                    } = e,
                    w = (0, n.useContext)(o.I18nContext);
                  let v = "",
                    y = "",
                    T = "",
                    b = "";
                  return (
                    E
                      ? ((v = w("swapPriceUnavailableTitle")),
                        (y = w("swapPriceUnavailableDescription")),
                        (T = d.GasRecommendations.high),
                        (b = w("tooltipApproveButton")))
                      : ((v = w("swapPriceDifferenceTitle", [_])),
                        (y = w("swapPriceDifference", [a, t.sourceTokenInfo.symbol, g, r, t.destinationTokenInfo.symbol, h])),
                        (T = t.priceSlippage.bucket),
                        (b = w("tooltipApproveButton"))),
                    n.default.createElement(
                      "div",
                      { className: (0, s.default)("view-quote__price-difference-warning-wrapper", T) },
                      n.default.createElement(l.default, {
                        message: n.default.createElement(
                          "div",
                          { className: "view-quote__price-difference-warning-contents" },
                          n.default.createElement(
                            "div",
                            { className: "view-quote__price-difference-warning-contents-text" },
                            n.default.createElement(
                              u.default,
                              { display: c.DISPLAY.FLEX, justifyContent: c.JustifyContent.spaceBetween, paddingBottom: 2 },
                              n.default.createElement("div", { className: "view-quote__price-difference-warning-contents-title" }, v),
                              n.default.createElement(
                                i.default,
                                { position: "bottom", title: w("swapPriceImpactTooltip") },
                                n.default.createElement(p.Icon, { name: p.IconName.Info })
                              )
                            ),
                            y,
                            !m &&
                              n.default.createElement(
                                "div",
                                { className: "view-quote__price-difference-warning-contents-actions" },
                                n.default.createElement(
                                  "button",
                                  {
                                    onClick: () => {
                                      f();
                                    }
                                  },
                                  b
                                )
                              )
                          )
                        )
                      })
                    )
                  );
                }
                g.propTypes = {
                  usedQuote: r.default.object,
                  sourceTokenValue: r.default.string,
                  destinationTokenValue: r.default.string,
                  onAcknowledgementClick: r.default.func,
                  acknowledged: r.default.bool,
                  priceSlippageFromSource: r.default.string,
                  priceSlippageFromDestination: r.default.string,
                  priceDifferencePercentage: r.default.number,
                  priceSlippageUnknownFiatValue: r.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/view-quote/view-quote-price-difference.js" }
    ],
    [
      5185,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/gas": 3957,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/swaps": 3970,
        "../../../../shared/lib/metamask-controller-utils": 3977,
        "../../../../shared/lib/swaps-utils": 3979,
        "../../../../shared/lib/transactions-controller-utils": 3982,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../../shared/modules/string-utils": 4002,
        "../../../../shared/modules/transaction.utils": 4004,
        "../../../components/ui/actionable-message/actionable-message": 4603,
        "../../../components/ui/box": 4607,
        "../../../components/ui/pulse-loader": 4701,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/optimism/fetchEstimatedL1Fee": 4805,
        "../../../hooks/gasFeeInput/useGasFeeInputs": 4818,
        "../../../hooks/useEqualityCheck": 4834,
        "../../../hooks/useEthFiatAmount": 4835,
        "../../../hooks/usePrevious": 4845,
        "../../../hooks/useTokenTracker": 4859,
        "../../../selectors": 5197,
        "../../../store/actionConstants": 5203,
        "../../../store/actions": 5204,
        "../../confirm-approve/confirm-approve.util": 4882,
        "../countdown-timer": 5124,
        "../fee-card": 5134,
        "../main-quote-summary": 5142,
        "../select-quote-popover": 5158,
        "../swaps-footer": 5177,
        "../swaps.util": 5179,
        "./view-quote-price-difference": 5184,
        "@sentry/browser": 1982,
        "bignumber.js": 2283,
        classnames: 2414,
        lodash: 3312,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    var e, t, a, V, $, X;
                    const Z = (0, s.useHistory)(),
                      K = (0, r.useDispatch)(),
                      Y = (0, n.useContext)(c.I18nContext),
                      z = (0, n.useContext)(h.MetaMetricsContext),
                      [J, ee] = (0, n.useState)(!1),
                      [te, ae] = (0, n.useState)(!1),
                      [ne, re] = (0, n.useState)(!1),
                      [se, oe] = (0, n.useState)(!1),
                      [le, ie] = (0, n.useState)(null),
                      [ue, ce] = (0, n.useState)(null),
                      [de, pe] = (0, n.useState)(null),
                      [fe] = (0, n.useState)(Date.now()),
                      [me, ge] = (0, n.useState)(!1),
                      he = [P.GasRecommendations.high, P.GasRecommendations.medium],
                      _e = (0, r.useSelector)(E.getBackgroundSwapRouteState),
                      Ee = (0, r.useSelector)(E.getQuotes, l.isEqual);
                    (0, n.useEffect)(() => {
                      Object.values(Ee).length ? "awaiting" === _e && Z.push(b.AWAITING_SWAP_ROUTE) : Z.push(b.BUILD_QUOTE_ROUTE);
                    }, [Z, Ee, _e]);
                    const we = (0, r.useSelector)(E.getQuotesLastFetched),
                      ve = (0, r.useSelector)(E.getUsedSwapsGasPrice),
                      ye = (0, r.useSelector)(E.getCustomSwapsGas),
                      Te = (0, r.useSelector)(E.getCustomMaxFeePerGas),
                      be = (0, r.useSelector)(E.getCustomMaxPriorityFeePerGas),
                      Se = (0, r.useSelector)(E.getSwapsUserFeeLevel),
                      ke = (0, r.useSelector)(w.getTokenExchangeRates, l.isEqual),
                      Ce = (0, f.useEqualityCheck)(ke),
                      { balance: xe } = (0, r.useSelector)(w.getSelectedAccount, r.shallowEqual),
                      Oe = (0, r.useSelector)(w.conversionRateSelector),
                      Ie = (0, r.useSelector)(w.getUSDConversionRate),
                      Pe = (0, r.useSelector)(w.getIsMultiLayerFeeNetwork),
                      Ae = (0, r.useSelector)(w.getCurrentCurrency),
                      Me = (0, r.useSelector)(v.getTokens, l.isEqual),
                      Ne = (0, r.useSelector)(w.checkNetworkAndAccountSupports1559),
                      Re = (0, r.useSelector)(E.getBalanceError),
                      Fe = (0, r.useSelector)(E.getFetchParams, l.isEqual),
                      Le = (0, r.useSelector)(E.getApproveTxParams, r.shallowEqual),
                      De = (0, r.useSelector)(E.getSelectedQuote, l.isEqual),
                      je = (0, r.useSelector)(E.getTopQuote, l.isEqual),
                      qe = De || je,
                      We = (null == qe || null === (e = qe.trade) || void 0 === e ? void 0 : e.value) ?? "0x0",
                      Ue = (0, r.useSelector)(E.getSwapsQuoteRefreshTime),
                      Be = (0, r.useSelector)(w.getSwapsDefaultToken, l.isEqual),
                      Ge = (0, r.useSelector)(w.getCurrentChainId),
                      He = (0, r.useSelector)(v.getNativeCurrency),
                      Ve = (0, r.useSelector)(E.getReviewSwapClickedTimestamp),
                      $e = (0, r.useSelector)(E.getSmartTransactionsOptInStatus),
                      Qe = (0, r.useSelector)(E.getSmartTransactionsEnabled),
                      Xe = (0, r.useSelector)(E.getSwapsSTXLoading),
                      Ze = (0, r.useSelector)(E.getCurrentSmartTransactionsError),
                      Ke = (0, r.useSelector)(E.getSmartTransactionsError),
                      Ye = (0, r.useSelector)(E.getSmartTransactionFees, l.isEqual),
                      ze = (0, r.useSelector)(E.getCurrentSmartTransactionsEnabled),
                      Je = (0, r.useSelector)(E.getSwapsNetworkConfig, r.shallowEqual),
                      et = qe.trade,
                      tt = ze && $e;
                    let at;
                    Ne && (at = (0, g.useGasFeeInputs)(P.GasRecommendations.high, { userFeeLevel: Se || P.GasRecommendations.high }));
                    const nt = null == Fe ? void 0 : Fe.sourceToken,
                      rt = {
                        reg_tx_fee_in_usd: undefined,
                        reg_tx_fee_in_eth: undefined,
                        reg_tx_max_fee_in_usd: undefined,
                        reg_tx_max_fee_in_eth: undefined,
                        stx_fee_in_usd: undefined,
                        stx_fee_in_eth: undefined,
                        stx_max_fee_in_usd: undefined,
                        stx_max_fee_in_eth: undefined
                      },
                      st =
                        (null == qe ? void 0 : qe.gasEstimateWithRefund) ||
                        `0x${(0, G.decimalToHex)((null == qe ? void 0 : qe.averageGas) || 0)}`,
                      ot = (null == qe ? void 0 : qe.gasEstimate) || "0x0",
                      lt = new o.default(ot, 16)
                        .times((null == qe ? void 0 : qe.gasMultiplier) || E.FALLBACK_GAS_MULTIPLIER, 10)
                        .round(0)
                        .toString(16),
                      it = null != qe && qe.gasEstimate ? lt : `0x${(0, G.decimalToHex)((null == qe ? void 0 : qe.maxGas) || 0)}`,
                      ut = ye || it;
                    let ct, dt, pt;
                    if (Ne) {
                      const {
                        maxFeePerGas: e,
                        maxPriorityFeePerGas: t,
                        gasFeeEstimates: { estimatedBaseFee: a = "0" }
                      } = at;
                      (ct = Te || (0, G.decGWEIToHexWEI)(e)),
                        (dt = be || (0, G.decGWEIToHexWEI)(t)),
                        (pt = (0, G.addHexes)((0, G.decGWEIToHexWEI)(a), dt));
                    }
                    let ft = (0, q.calcGasTotal)(ut, ct || ve);
                    null !== ue && (ft = (0, G.sumHexes)(ft || "0x0", ue || "0x0"));
                    const { tokensWithBalances: mt } = (0, O.useTokenTracker)({ tokens: Me, includeFailedTokens: !0 }),
                      gt = nt === Be.address ? Be : mt.find(({ address: e }) => (0, L.isEqualCaseInsensitive)(e, nt)),
                      ht = gt || qe.sourceTokenInfo,
                      _t = (null == mt ? void 0 : mt.length) && (0, q.calcTokenAmount)(ht.balance || "0x0", ht.decimals).toFixed(9),
                      Et = mt && gt === undefined,
                      wt = (0, D.parseStandardTokenTransactionData)(null == Le ? void 0 : Le.data),
                      vt = wt && (0, j.getTokenValueParam)(wt),
                      yt = vt && (null == ht ? void 0 : ht.decimals) !== undefined && (0, q.calcTokenAmount)(vt, ht.decimals).toFixed(9),
                      Tt = null == Le ? void 0 : Le.gas,
                      bt = (0, n.useMemo)(
                        () =>
                          (0, x.quotesToRenderableData)({
                            quotes: Ee,
                            gasPrice: Ne ? pt : ve,
                            conversionRate: Oe,
                            currentCurrency: Ae,
                            approveGas: Tt,
                            tokenConversionRates: Ce,
                            chainId: Ge,
                            smartTransactionEstimatedGas: Qe && $e && (null == Ye ? void 0 : Ye.tradeTxFees),
                            nativeCurrencySymbol: He,
                            multiLayerL1ApprovalFeeTotal: de
                          }),
                        [Ee, ve, pt, Ne, Oe, Ae, Tt, Ce, Ge, null == Ye ? void 0 : Ye.tradeTxFees, He, Qe, $e, de]
                      ),
                      St = bt.find((e) => e.aggId === qe.aggregator),
                      {
                        destinationTokenDecimals: kt,
                        destinationTokenSymbol: Ct,
                        destinationTokenValue: xt,
                        destinationIconUrl: Ot,
                        sourceTokenDecimals: It,
                        sourceTokenSymbol: Pt,
                        sourceTokenValue: At,
                        sourceTokenIconUrl: Mt
                      } = St;
                    let {
                      feeInFiat: Nt,
                      feeInEth: Rt,
                      rawEthFee: Ft,
                      feeInUsd: Lt
                    } = (0, x.getRenderableNetworkFeesForQuote)({
                      tradeGas: st,
                      approveGas: Tt,
                      gasPrice: Ne ? pt : ve,
                      currentCurrency: Ae,
                      conversionRate: Oe,
                      USDConversionRate: Ie,
                      tradeValue: We,
                      sourceSymbol: Pt,
                      sourceAmount: qe.sourceAmount,
                      chainId: Ge,
                      nativeCurrencySymbol: He,
                      multiLayerL1FeeTotal: ue
                    });
                    (rt.reg_tx_fee_in_usd = Number(Lt)), (rt.reg_tx_fee_in_eth = Number(Ft));
                    const Dt = (0, x.getRenderableNetworkFeesForQuote)({
                      tradeGas: ut,
                      approveGas: Tt,
                      gasPrice: ct || ve,
                      currentCurrency: Ae,
                      conversionRate: Oe,
                      USDConversionRate: Ie,
                      tradeValue: We,
                      sourceSymbol: Pt,
                      sourceAmount: qe.sourceAmount,
                      chainId: Ge,
                      nativeCurrencySymbol: He,
                      multiLayerL1FeeTotal: ue
                    });
                    let { feeInFiat: jt, feeInEth: qt, rawEthFee: Wt, feeInUsd: Ut } = Dt;
                    if (
                      ((rt.reg_tx_max_fee_in_usd = Number(Ut)),
                      (rt.reg_tx_max_fee_in_eth = Number(Wt)),
                      ze && $e && null != Ye && Ye.tradeTxFees)
                    ) {
                      var Bt;
                      const e =
                          (null == Ye ? void 0 : Ye.tradeTxFees.feeEstimate) +
                          ((null == Ye || null === (Bt = Ye.approvalTxFees) || void 0 === Bt ? void 0 : Bt.feeEstimate) || 0),
                        t = e * Je.stxMaxFeeMultiplier;
                      ({
                        feeInFiat: Nt,
                        feeInEth: Rt,
                        rawEthFee: Ft,
                        feeInUsd: Lt
                      } = (0, x.getFeeForSmartTransaction)({
                        chainId: Ge,
                        currentCurrency: Ae,
                        conversionRate: Oe,
                        USDConversionRate: Ie,
                        nativeCurrencySymbol: He,
                        feeInWeiDec: e
                      })),
                        (rt.stx_fee_in_usd = Number(Lt)),
                        (rt.stx_fee_in_eth = Number(Ft)),
                        (rt.estimated_gas = null == Ye ? void 0 : Ye.tradeTxFees.gasLimit),
                        ({
                          feeInFiat: jt,
                          feeInEth: qt,
                          rawEthFee: Wt,
                          feeInUsd: Ut
                        } = (0, x.getFeeForSmartTransaction)({
                          chainId: Ge,
                          currentCurrency: Ae,
                          conversionRate: Oe,
                          USDConversionRate: Ie,
                          nativeCurrencySymbol: He,
                          feeInWeiDec: t
                        })),
                        (rt.stx_max_fee_in_usd = Number(Ut)),
                        (rt.stx_max_fee_in_eth = Number(Wt));
                    }
                    const Gt = new o.default(qe.sourceAmount),
                      Ht = new o.default(qe.trade.value || 0, 10).plus(new o.default(ft, 16)),
                      Vt = ((null == mt ? void 0 : mt.length) || Re) && Gt.gt(new o.default(ht.balance || "0x0")),
                      $t = Ht.gt(new o.default(xe || "0x0")),
                      Qt = Vt
                        ? (0, q.toPrecisionWithoutTrailingZeros)((0, q.calcTokenAmount)(Gt, ht.decimals).minus(_t).toString(10), 6)
                        : null,
                      Xt = $t
                        ? (0, q.toPrecisionWithoutTrailingZeros)(Ht.minus(xe, 16).div("1000000000000000000", 10).toString(10), 6)
                        : null;
                    let Zt;
                    tt && null != Ke && Ke.balanceNeededWei && (Zt = (0, G.decWEIToDecETH)(Ke.balanceNeededWei - Ke.currentBalanceWei));
                    const Kt = (0, r.useSelector)(E.getDestinationTokenInfo, l.isEqual);
                    (0, n.useEffect)(() => {
                      tt
                        ? Vt
                          ? K((0, E.setBalanceError)(!0))
                          : Re && !Vt && K((0, E.setBalanceError)(!1))
                        : Vt || $t
                        ? K((0, E.setBalanceError)(!0))
                        : !Re || Vt || $t || K((0, E.setBalanceError)(!1));
                    }, [Vt, $t, Re, K, tt]),
                      (0, n.useEffect)(() => {
                        const e = Date.now() - we;
                        e > Ue && !J
                          ? (ee(!0), K((0, y.safeRefetchQuotes)()))
                          : e > Ue && (K((0, y.setSwapsErrorKey)(I.QUOTES_EXPIRED_ERROR)), Z.push(b.SWAPS_ERROR_ROUTE));
                      }, [we, J, K, Z, Ue]),
                      (0, n.useEffect)(() => {
                        !le && yt && ie(yt);
                      }, [le, yt]);
                    const Yt = (!ze || !$e) && Xt,
                      zt = tt && Zt,
                      Jt = (Re || Qt || Yt || zt) && !se,
                      ea = (0, r.useSelector)(w.isHardwareWallet),
                      ta = (0, r.useSelector)(w.getHardwareWalletType),
                      aa = Object.values(Ee).length,
                      na = (0, n.useRef)(),
                      ra = (0, n.useMemo)(
                        () => ({
                          token_from: Pt,
                          token_from_amount: At,
                          token_to: Ct,
                          token_to_amount: xt,
                          request_type: null == Fe ? void 0 : Fe.balanceError,
                          slippage: null == Fe ? void 0 : Fe.slippage,
                          custom_slippage: 2 !== (null == Fe ? void 0 : Fe.slippage),
                          response_time: null == Fe ? void 0 : Fe.responseTime,
                          best_quote_source: null == je ? void 0 : je.aggregator,
                          available_quotes: aa,
                          is_hardware_wallet: ea,
                          hardware_wallet_type: ta,
                          stx_enabled: Qe,
                          current_stx_enabled: ze,
                          stx_user_opt_in: $e
                        }),
                        [
                          Pt,
                          At,
                          Ct,
                          xt,
                          null == Fe ? void 0 : Fe.balanceError,
                          null == Fe ? void 0 : Fe.slippage,
                          null == Fe ? void 0 : Fe.responseTime,
                          null == je ? void 0 : je.aggregator,
                          aa,
                          ea,
                          ta,
                          Qe,
                          ze,
                          $e
                        ]
                      ),
                      sa = () => {
                        z({
                          event: "Edit Spend Limit Opened",
                          category: F.MetaMetricsEventCategory.Swaps,
                          sensitiveProperties: {
                            ...ra,
                            custom_spend_limit_set: le === yt,
                            custom_spend_limit_amount: le === yt ? null : yt
                          }
                        });
                      },
                      oa = (0, n.useCallback)(() => {
                        z({
                          event: "Best Quote Reviewed",
                          category: F.MetaMetricsEventCategory.Swaps,
                          sensitiveProperties: { ...ra, network_fees: Nt }
                        });
                      }, [z, ra, Nt]),
                      la = (0, n.useCallback)(() => {
                        z({
                          event: "View Quote Page Loaded",
                          category: F.MetaMetricsEventCategory.Swaps,
                          sensitiveProperties: { ...ra, response_time: fe - Ve }
                        });
                      }, [z, ra, fe, Ve]);
                    (0, n.useEffect)(() => {
                      !na.current &&
                        [Pt, At, Ct, xt, Fe, je, aa, Nt].every((e) => null !== e && e !== undefined) &&
                        ((na.current = !0), oa());
                    }, [Fe, je, aa, Nt, Ct, xt, Pt, At, oa]);
                    const ia = qe.fee,
                      ua = Et
                        ? Y("swapTokenBalanceUnavailable", [Pt])
                        : Y("swapApproveNeedMoreTokens", [
                            n.default.createElement(
                              "span",
                              { key: "swapApproveNeedMoreTokens-1", className: "view-quote__bold" },
                              Qt || Zt || Xt
                            ),
                            Qt && Pt !== Be.symbol ? Pt : Be.symbol
                          ]),
                      ca = null == qe || null === (t = qe.priceSlippage) || void 0 === t ? void 0 : t.bucket,
                      da = (0, m.usePrevious)(ca);
                    (0, n.useEffect)(() => {
                      me && da === P.GasRecommendations.medium && ca === P.GasRecommendations.high && ge(!1);
                    }, [ca, me, da]);
                    let pa = null;
                    const fa = (0, p.useEthFiatAmount)(
                        (null == qe || null === (a = qe.priceSlippage) || void 0 === a ? void 0 : a.sourceAmountInETH) || 0,
                        { showFiat: !0 }
                      ),
                      ma = (0, p.useEthFiatAmount)(
                        (null == qe || null === (V = qe.priceSlippage) || void 0 === V ? void 0 : V.destinationAmountInETH) || 0,
                        { showFiat: !0 }
                      ),
                      ga =
                        !fa || !ma || Boolean(null == qe || null === ($ = qe.priceSlippage) || void 0 === $ ? void 0 : $.calculationError);
                    let ha = 0;
                    null != qe &&
                      null !== (X = qe.priceSlippage) &&
                      void 0 !== X &&
                      X.ratio &&
                      (ha = parseFloat(new o.default(qe.priceSlippage.ratio, 10).minus(1, 10).times(100, 10).toFixed(2), 10));
                    const _a = !Et && !Jt && qe && (he.includes(ca) || ga);
                    _a &&
                      (pa = n.default.createElement(H.default, {
                        usedQuote: qe,
                        sourceTokenValue: At,
                        destinationTokenValue: xt,
                        priceSlippageFromSource: fa,
                        priceSlippageFromDestination: ma,
                        priceDifferencePercentage: ha,
                        priceSlippageUnknownFiatValue: ga,
                        onAcknowledgementClick: () => {
                          ge(!0);
                        },
                        acknowledged: me
                      }));
                    const Ea = _a && !me,
                      wa = Jt || _a,
                      va = Boolean(
                        te ||
                          Re ||
                          Et ||
                          Ea ||
                          (Ne && pt === undefined) ||
                          (!Ne && (null === ve || ve === undefined)) ||
                          (ze && (Ze || Ke)) ||
                          (ze && $e && !(null != Ye && Ye.tradeTxFees))
                      );
                    return (
                      (0, n.useEffect)(() => {
                        if (ze && $e && !Vt) {
                          const e = { from: et.from, to: et.to, value: et.value, data: et.data, gas: et.gas, chainId: Ge };
                          (Q = setInterval(() => {
                            Xe ||
                              K(
                                (0, E.fetchSwapsSmartTransactionFees)({
                                  unsignedTransaction: e,
                                  approveTxParams: Le,
                                  fallbackOnNotEnoughFunds: !1
                                })
                              );
                          }, Je.stxGetTransactionsRefreshTime)),
                            K(
                              (0, E.fetchSwapsSmartTransactionFees)({
                                unsignedTransaction: e,
                                approveTxParams: Le,
                                fallbackOnNotEnoughFunds: !1
                              })
                            );
                        } else Q && clearInterval(Q);
                        return () => clearInterval(Q);
                      }, [K, ze, $e, et.data, et.from, et.value, et.gas, et.to, Ge, Je.stxGetTransactionsRefreshTime, Vt]),
                      (0, n.useEffect)(() => {
                        K((0, y.setSwapsQuotesPollingLimitEnabled)(!0)), Ve && la();
                      }, [K, la, Ve]),
                      (0, n.useEffect)(() => {
                        !ze && Ze && te && ae(!1);
                      }, [ze, Ze, te]),
                      (0, n.useEffect)(() => {
                        if (!Pe || null == qe || !qe.multiLayerL1TradeFeeTotal) return;
                        (async () => {
                          try {
                            let e = "0x0";
                            Le &&
                              ((e = await (0, B.default)(Ge, {
                                txParams: { ...Le, gasPrice: (0, W.addHexPrefix)(Le.gasPrice), value: "0x0" }
                              })),
                              pe(e));
                            const t = (0, G.sumHexes)(qe.multiLayerL1TradeFeeTotal, e);
                            ce(t);
                          } catch (e) {
                            (0, u.captureException)(e), ce(null), pe(null);
                          }
                        })();
                      }, [et, Le, Pe, Ge, qe]),
                      (0, n.useEffect)(() => {
                        tt && K({ type: T.SET_SMART_TRANSACTIONS_ERROR, payload: null });
                      }, [tt, K]),
                      n.default.createElement(
                        "div",
                        { className: "view-quote" },
                        n.default.createElement(
                          "div",
                          { className: (0, i.default)("view-quote__content", { "view-quote__content_modal": Ea }) },
                          ne &&
                            n.default.createElement(d.default, {
                              quoteDataRows: bt,
                              onClose: () => re(!1),
                              onSubmit: (e) => K((0, E.swapsQuoteSelected)(e)),
                              swapToSymbol: Ct,
                              initialAggId: qe.aggregator,
                              onQuoteDetailsIsOpened: () => {
                                z({
                                  event: "Quote Details Opened",
                                  category: F.MetaMetricsEventCategory.Swaps,
                                  sensitiveProperties: {
                                    ...ra,
                                    other_quote_selected: (null == qe ? void 0 : qe.aggregator) !== (null == je ? void 0 : je.aggregator),
                                    other_quote_selected_source:
                                      (null == qe ? void 0 : qe.aggregator) === (null == je ? void 0 : je.aggregator)
                                        ? null
                                        : null == qe
                                        ? void 0
                                        : qe.aggregator
                                  }
                                });
                              },
                              hideEstimatedGasFee: Qe && $e
                            }),
                          n.default.createElement(
                            "div",
                            { className: (0, i.default)("view-quote__warning-wrapper", { "view-quote__warning-wrapper--thin": !wa }) },
                            pa,
                            (Jt || Et) && n.default.createElement(C.default, { message: ua, onClose: () => oe(!0) })
                          ),
                          n.default.createElement(
                            "div",
                            { className: "view-quote__countdown-timer-container" },
                            n.default.createElement(A.default, { timeStarted: we, warningTime: "0:10", labelKey: "swapNewQuoteIn" })
                          ),
                          n.default.createElement(S.default, {
                            sourceValue: (0, U.calcTokenValue)(At, It),
                            sourceDecimals: It,
                            sourceSymbol: Pt,
                            destinationValue: (0, U.calcTokenValue)(xt, kt),
                            destinationDecimals: kt,
                            destinationSymbol: Ct,
                            sourceIconUrl: Mt,
                            destinationIconUrl: Ot
                          }),
                          ze &&
                            $e &&
                            !(null != Ye && Ye.tradeTxFees) &&
                            !Jt &&
                            n.default.createElement(
                              R.default,
                              { marginTop: 0, marginBottom: 10 },
                              n.default.createElement(N.default, null)
                            ),
                          (!ze || !$e || (null == Ye ? void 0 : Ye.tradeTxFees)) &&
                            n.default.createElement(
                              "div",
                              {
                                className: (0, i.default)("view-quote__fee-card-container", {
                                  "view-quote__fee-card-container--three-rows": Le && (!Re || se)
                                })
                              },
                              n.default.createElement(_.default, {
                                primaryFee: { fee: Rt, maxFee: qt },
                                secondaryFee: { fee: Nt, maxFee: jt },
                                hideTokenApprovalRow: !Le || (Re && !se),
                                tokenApprovalSourceTokenSymbol: Pt,
                                onTokenApprovalClick: () => {
                                  sa(),
                                    K(
                                      (0, y.showModal)({
                                        name: "EDIT_APPROVAL_PERMISSION",
                                        decimals: ht.decimals,
                                        origin: "MetaMask",
                                        setCustomAmount: (e) => {
                                          const t = "" === e ? le : e,
                                            a = (0, k.getCustomTxParamsData)(Le.data, { customPermissionAmount: t, decimals: ht.decimals });
                                          null != t && t.length && Le.data !== a && K((0, y.setCustomApproveTxData)(a));
                                        },
                                        tokenAmount: le,
                                        customTokenAmount: le === yt ? null : yt,
                                        tokenBalance: _t,
                                        tokenSymbol: ht.symbol,
                                        requiredMinimum: (0, q.calcTokenAmount)(qe.sourceAmount, ht.decimals)
                                      })
                                    );
                                },
                                metaMaskFee: String(ia),
                                numberOfQuotes: Object.values(Ee).length,
                                onQuotesClick: () => {
                                  z({
                                    event: "All Available Quotes Opened",
                                    category: F.MetaMetricsEventCategory.Swaps,
                                    sensitiveProperties: {
                                      ...ra,
                                      other_quote_selected: (null == qe ? void 0 : qe.aggregator) !== (null == je ? void 0 : je.aggregator),
                                      other_quote_selected_source:
                                        (null == qe ? void 0 : qe.aggregator) === (null == je ? void 0 : je.aggregator)
                                          ? null
                                          : null == qe
                                          ? void 0
                                          : qe.aggregator
                                    }
                                  }),
                                    re(!0);
                                },
                                chainId: Ge,
                                maxPriorityFeePerGasDecGWEI: (0, G.hexWEIToDecGWEI)(dt),
                                maxFeePerGasDecGWEI: (0, G.hexWEIToDecGWEI)(ct)
                              })
                            )
                        ),
                        n.default.createElement(M.default, {
                          onSubmit: () => {
                            ae(!0),
                              Re
                                ? Kt.symbol === Be.symbol
                                  ? Z.push(b.DEFAULT_ROUTE)
                                  : Z.push(`${b.ASSET_ROUTE}/${Kt.address}`)
                                : ze && $e && null != Ye && Ye.tradeTxFees
                                ? K(
                                    (0, E.signAndSendSwapsSmartTransaction)({
                                      unsignedTransaction: et,
                                      trackEvent: z,
                                      history: Z,
                                      additionalTrackingParams: rt
                                    })
                                  )
                                : K((0, E.signAndSendTransactions)(Z, z, rt));
                          },
                          submitText: Y(ze && $e && Xe ? "preparingSwap" : "swap"),
                          hideCancel: !0,
                          disabled: va,
                          className: wa ? "view-quote__thin-swaps-footer" : "",
                          showTopBorder: !0
                        })
                      )
                    );
                  });
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = $(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = V(e("bignumber.js")),
                  l = e("lodash"),
                  i = V(e("classnames")),
                  u = e("@sentry/browser"),
                  c = e("../../../contexts/i18n"),
                  d = V(e("../select-quote-popover")),
                  p = e("../../../hooks/useEthFiatAmount"),
                  f = e("../../../hooks/useEqualityCheck"),
                  m = e("../../../hooks/usePrevious"),
                  g = e("../../../hooks/gasFeeInput/useGasFeeInputs"),
                  h = e("../../../contexts/metametrics"),
                  _ = V(e("../fee-card")),
                  E = e("../../../ducks/swaps/swaps"),
                  w = e("../../../selectors"),
                  v = e("../../../ducks/metamask/metamask"),
                  y = e("../../../store/actions"),
                  T = e("../../../store/actionConstants"),
                  b = e("../../../helpers/constants/routes"),
                  S = V(e("../main-quote-summary")),
                  k = e("../../confirm-approve/confirm-approve.util"),
                  C = V(e("../../../components/ui/actionable-message/actionable-message")),
                  x = e("../swaps.util"),
                  O = e("../../../hooks/useTokenTracker"),
                  I = e("../../../../shared/constants/swaps"),
                  P = e("../../../../shared/constants/gas"),
                  A = V(e("../countdown-timer")),
                  M = V(e("../swaps-footer")),
                  N = V(e("../../../components/ui/pulse-loader")),
                  R = V(e("../../../components/ui/box")),
                  F = e("../../../../shared/constants/metametrics"),
                  L = e("../../../../shared/modules/string-utils"),
                  D = e("../../../../shared/modules/transaction.utils"),
                  j = e("../../../../shared/lib/metamask-controller-utils"),
                  q = e("../../../../shared/lib/transactions-controller-utils"),
                  W = e("../../../../app/scripts/lib/util"),
                  U = e("../../../../shared/lib/swaps-utils"),
                  B = V(e("../../../helpers/utils/optimism/fetchEstimatedL1Fee")),
                  G = e("../../../../shared/modules/conversion.utils"),
                  H = V(e("./view-quote-price-difference"));
                function V(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function $(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return ($ = function (e) {
                    return e ? a : t;
                  })(e);
                }
                let Q;
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/view-quote/view-quote.js" }
    ],
    [
      5186,
      {
        "../../../shared/constants/network": 3963,
        "../../../shared/constants/tokens": 3973,
        "../../../shared/lib/transactions-controller-utils": 3982,
        "../../../shared/modules/security-provider.utils": 4e3,
        "../../components/app/approve-content-card/approve-content-card": 4040,
        "../../components/app/confirm-page-container": 4068,
        "../../components/app/confirm-page-container/confirm-page-container-content": 4062,
        "../../components/app/custom-nonce": 4102,
        "../../components/app/custom-spending-cap/custom-spending-cap": 4104,
        "../../components/app/ledger-instruction-field/ledger-instruction-field": 4149,
        "../../components/app/modals/contract-details-modal/contract-details-modal": 4172,
        "../../components/app/network-account-balance-header/network-account-balance-header": 4211,
        "../../components/app/security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert": 4252,
        "../../components/app/security-provider-banner-message/security-provider-banner-message": 4255,
        "../../components/component-library": 4453,
        "../../components/ui/box/box": 4606,
        "../../components/ui/button": 4611,
        "../../components/ui/contract-token-values/contract-token-values": 4625,
        "../../components/ui/dialog": 4631,
        "../../components/ui/page-container": 4692,
        "../../components/ui/review-spending-cap/review-spending-cap": 4705,
        "../../components/ui/simulation-error-message": 4711,
        "../../components/ui/url-icon/url-icon": 4746,
        "../../contexts/gasFee": 4747,
        "../../contexts/i18n": 4748,
        "../../ducks/app/app": 4755,
        "../../ducks/confirm-transaction/confirm-transaction.duck": 4756,
        "../../ducks/history/history": 4760,
        "../../helpers/constants/design-system": 4771,
        "../../helpers/utils/util": 4812,
        "../../hooks/useSimulationFailureWarning": 4853,
        "../../selectors": 5197,
        "../../store/actions": 5204,
        "../confirm-approve/confirm-approve.util": 4882,
        "bignumber.js": 2283,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = V);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = G(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = B(e("prop-types")),
                  l = B(e("bignumber.js")),
                  i = B(e("../../components/ui/box/box")),
                  u = B(e("../../components/app/network-account-balance-header/network-account-balance-header")),
                  c = B(e("../../components/ui/url-icon/url-icon")),
                  d = e("../../helpers/constants/design-system"),
                  p = e("../../contexts/i18n"),
                  f = B(e("../../components/ui/contract-token-values/contract-token-values")),
                  m = B(e("../../components/ui/button")),
                  g = B(e("../../components/ui/review-spending-cap/review-spending-cap")),
                  h = e("../../components/ui/page-container"),
                  _ = B(e("../../components/app/modals/contract-details-modal/contract-details-modal")),
                  E = e("../../selectors"),
                  w = e("../../../shared/constants/network"),
                  v = e("../../store/actions"),
                  y = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                  T = e("../../ducks/history/history"),
                  b = B(e("../../components/app/approve-content-card/approve-content-card")),
                  S = B(e("../../components/app/custom-spending-cap/custom-spending-cap")),
                  k = B(e("../../components/ui/dialog")),
                  C = e("../../contexts/gasFee"),
                  x = e("../confirm-approve/confirm-approve.util"),
                  O = e("../../ducks/app/app"),
                  I = e("../../helpers/utils/util"),
                  P = e("../../../shared/lib/transactions-controller-utils"),
                  A = e("../../../shared/constants/tokens"),
                  M = e("../../../shared/modules/security-provider.utils"),
                  N = B(e("../../components/app/security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert")),
                  R = e("../../components/app/confirm-page-container"),
                  F = e("../../hooks/useSimulationFailureWarning"),
                  L = B(e("../../components/ui/simulation-error-message")),
                  D = B(e("../../components/app/ledger-instruction-field/ledger-instruction-field")),
                  j = B(e("../../components/app/security-provider-banner-message/security-provider-banner-message")),
                  q = e("../../components/component-library"),
                  W = e("../../components/app/confirm-page-container/confirm-page-container-content"),
                  U = B(e("../../components/app/custom-nonce"));
                function B(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function G(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (G = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const H = ["portfolio.metamask.io"];
                function V({
                  origin: e,
                  siteImage: t,
                  showCustomizeGasModal: a,
                  useNonceField: o,
                  currentCurrency: B,
                  nativeCurrency: G,
                  ethTransactionTotal: V,
                  fiatTransactionTotal: $,
                  hexTransactionTotal: Q,
                  hexMinimumTransactionFee: X,
                  txData: Z,
                  isMultiLayerFeeNetwork: K,
                  supportsEIP1559: Y,
                  userAddress: z,
                  tokenAddress: J,
                  data: ee,
                  isSetApproveForAll: te,
                  isApprovalOrRejection: ae,
                  decimals: ne,
                  dappProposedTokenAmount: re,
                  currentTokenBalance: se,
                  toAddress: oe,
                  tokenSymbol: le,
                  fromAddressIsLedger: ie,
                  warning: ue
                }) {
                  const ce = (0, n.useContext)(p.I18nContext),
                    de = (0, r.useDispatch)(),
                    pe = (0, s.useHistory)(),
                    fe = (0, r.useSelector)(T.getMostRecentOverviewPage),
                    { hostname: me } = new URL(e),
                    ge = H.includes(me),
                    he = (0, r.useSelector)(E.getCustomTokenAmount),
                    [_e, Ee] = (0, n.useState)(he),
                    [we, ve] = (0, n.useState)(!1),
                    [ye, Te] = (0, n.useState)(!1),
                    [be, Se] = (0, n.useState)(!1),
                    [ke, Ce] = (0, n.useState)("0" !== re && !ge),
                    [xe, Oe] = (0, n.useState)(""),
                    [Ie, Pe] = (0, n.useState)(!1),
                    Ae = (0, F.useSimulationFailureWarning)(Ie),
                    Me = (0, r.useSelector)((e) => (0, E.getTargetAccountWithSendEtherInfo)(e, z)),
                    Ne = (0, r.useSelector)(E.getNetworkIdentifier),
                    Re = (0, r.useSelector)(E.getRpcPrefsForCurrentProvider),
                    Fe = (0, r.useSelector)(E.getUnapprovedTxCount),
                    Le = (0, r.useSelector)(E.getUnapprovedTransactions),
                    De = (0, r.useSelector)(E.getUseCurrencyRateCheck),
                    je = (0, r.useSelector)(E.getNextSuggestedNonce),
                    qe = (0, r.useSelector)(E.getCustomNonceValue);
                  (0, n.useEffect)(() => {
                    (_e && "" !== _e) || !re || Ee(re);
                  }, []);
                  const We = (e) => e.replace(/,/gu, ".");
                  let Ue = A.NUM_W_OPT_DECIMAL_COMMA_OR_DOT_REGEX.test(_e) ? We(_e).toString() : "0";
                  const Be = (0, P.calcTokenAmount)(A.MAX_TOKEN_ALLOWANCE_AMOUNT, ne);
                  if (_e.length > 1 && Number(_e)) {
                    new l.default(_e).greaterThan(Be) && (Ue = 0);
                  }
                  const Ge = Ue ? (0, x.getCustomTxParamsData)(ee, { customPermissionAmount: Ue, decimals: ne }) : null;
                  let He = { ...Z };
                  Ge && (He = { ...He, txParams: { ...He.txParams, data: Ge } });
                  const Ve = (0, r.useSelector)((e) => (0, E.transactionFeeSelector)(e, He)),
                    $e = (0, r.useSelector)((e) => (0, E.getKnownMethodData)(e, ee)),
                    { balanceError: Qe } = (0, C.useGasFeeContext)(),
                    Xe = ke && ("" === _e || "" !== xe),
                    Ze = !ke && Qe,
                    Ke = w.NETWORK_TO_NAME_MAP[He.chainId] || Ne,
                    Ye = () => {
                      const { name: e } = $e;
                      var t;
                      Ve.gasEstimationObject.baseFeePerGas && (He.estimatedBaseFee = Ve.gasEstimationObject.baseFeePerGas),
                        e && (He.contractMethodName = e),
                        re && ((He.dappProposedTokenAmount = re), (He.originalApprovalAmount = re)),
                        _e
                          ? ((He.customTokenAmount = _e), (He.finalApprovalAmount = _e))
                          : re !== undefined && (He.finalApprovalAmount = re),
                        se && (He.currentTokenBalance = se),
                        de((0, v.updateCustomNonce)("")),
                        de((0, v.updateAndApproveTx)(((t = He), qe ? { ...t, customNonceValue: qe } : t))).then(() => {
                          de((0, y.clearConfirmTransaction)()), pe.push(fe);
                        });
                    },
                    ze = () => {
                      Se(!1), Ce(!0);
                    },
                    Je = () => {
                      de((0, v.getNextNonce)());
                    };
                  (0, n.useEffect)(() => {
                    Je();
                  }, [de]);
                  const et = (e) => {
                      de((0, v.updateCustomNonce)(e));
                    },
                    tt = "" === _e,
                    at = n.default.createElement(
                      i.default,
                      { marginTop: 4, key: J },
                      n.default.createElement(f.default, { tokenName: le, address: J, chainId: He.chainId, rpcPrefs: Re })
                    );
                  return n.default.createElement(
                    i.default,
                    { className: "token-allowance-container page-container" },
                    n.default.createElement(i.default, null, n.default.createElement(R.ConfirmPageContainerNavigation, null)),
                    n.default.createElement(
                      i.default,
                      {
                        paddingLeft: 4,
                        paddingRight: 4,
                        alignItems: d.AlignItems.center,
                        display: d.DISPLAY.FLEX,
                        flexDirection: d.FLEX_DIRECTION.ROW,
                        justifyContent: d.JustifyContent.spaceBetween
                      },
                      n.default.createElement(
                        i.default,
                        null,
                        !ke &&
                          n.default.createElement(
                            m.default,
                            { type: "inline", onClick: () => ze() },
                            n.default.createElement(
                              q.Text,
                              { variant: d.TextVariant.bodySm, as: "h6", color: d.TextColor.textMuted, fontWeight: d.FontWeight.Bold },
                              "<",
                              " ",
                              ce("back")
                            )
                          )
                      ),
                      n.default.createElement(
                        i.default,
                        { textAlign: d.TextAlign.End },
                        n.default.createElement(
                          q.Text,
                          { variant: d.TextVariant.bodySm, as: "h6", color: d.TextColor.textMuted, fontWeight: d.FontWeight.Bold },
                          ke ? 1 : 2,
                          " ",
                          ce("ofTextNofM"),
                          " 2"
                        )
                      )
                    ),
                    n.default.createElement(u.default, {
                      networkName: Ke,
                      accountName: Me.name,
                      accountBalance: se,
                      tokenName: le,
                      accountAddress: z,
                      chainId: He.chainId
                    }),
                    n.default.createElement(N.default, { securityAlertResponse: null == Z ? void 0 : Z.securityAlertResponse, margin: 4 }),
                    (0, M.isSuspiciousResponse)(null == Z ? void 0 : Z.securityProviderResponse) &&
                      n.default.createElement(j.default, { securityProviderResponse: Z.securityProviderResponse }),
                    ue &&
                      n.default.createElement(
                        i.default,
                        { className: "token-allowance-container__custom-nonce-warning" },
                        n.default.createElement(W.ConfirmPageContainerWarning, { warning: ue })
                      ),
                    n.default.createElement(
                      i.default,
                      { display: d.DISPLAY.FLEX, flexDirection: d.FLEX_DIRECTION.ROW, justifyContent: d.JustifyContent.center },
                      n.default.createElement(
                        i.default,
                        {
                          display: d.DISPLAY.FLEX,
                          alignItems: d.AlignItems.center,
                          marginTop: 6,
                          marginRight: 12,
                          marginBottom: 8,
                          marginLeft: 12,
                          paddingTop: 2,
                          paddingRight: 4,
                          paddingBottom: 2,
                          paddingLeft: 2,
                          borderColor: d.Color.borderMuted,
                          borderStyle: d.BorderStyle.solid,
                          borderWidth: 1,
                          className: "token-allowance-container__icon-display-content"
                        },
                        n.default.createElement(c.default, {
                          className: "token-allowance-container__icon-display-content__siteimage-identicon",
                          fallbackClassName: "token-allowance-container__icon-display-content__siteimage-identicon",
                          name: e,
                          url: t
                        }),
                        n.default.createElement(
                          q.Text,
                          { variant: d.TextVariant.bodySm, as: "h6", color: d.TextColor.textAlternative, marginLeft: 1 },
                          e
                        )
                      )
                    ),
                    n.default.createElement(
                      i.default,
                      { marginLeft: 4, marginRight: 4 },
                      n.default.createElement(
                        q.Text,
                        { variant: d.TextVariant.headingMd, align: d.TextAlign.Center },
                        ke
                          ? ce("spendingCapRequest", [at])
                          : n.default.createElement(
                              i.default,
                              null,
                              ce("0" === _e || tt ? "revokeSpendingCap" : "spendingCapRequest", [at])
                            )
                      )
                    ),
                    n.default.createElement(
                      i.default,
                      {
                        marginTop: 1,
                        display: d.DISPLAY.FLEX,
                        flexDirection: d.FLEX_DIRECTION.ROW,
                        justifyContent: d.JustifyContent.center
                      },
                      n.default.createElement(
                        m.default,
                        { type: "link", onClick: () => ve(!0), className: "token-allowance-container__verify-link" },
                        n.default.createElement(
                          q.Text,
                          { variant: d.TextVariant.bodySm, as: "h6", color: d.Color.primaryDefault },
                          ce("verifyContractDetails")
                        )
                      )
                    ),
                    n.default.createElement(
                      i.default,
                      { margin: [4, 4, 3, 4] },
                      ke
                        ? n.default.createElement(S.default, {
                            txParams: null == Z ? void 0 : Z.txParams,
                            tokenName: le,
                            currentTokenBalance: se,
                            dappProposedValue: re,
                            siteOrigin: e,
                            passTheErrorText: (e) => Oe(e),
                            decimals: ne,
                            setInputChangeInProgress: Te,
                            customSpendingCap: _e,
                            setCustomSpendingCap: Ee
                          })
                        : n.default.createElement(g.default, {
                            tokenName: le,
                            currentTokenBalance: se,
                            tokenValue: isNaN(parseFloat(_e)) ? re : We(_e),
                            onEdit: () => ze()
                          })
                    ),
                    !ke &&
                      Qe &&
                      n.default.createElement(k.default, { type: "error", className: "send__error-dialog" }, ce("insufficientFundsForGas")),
                    !ke &&
                      n.default.createElement(
                        i.default,
                        { className: "token-allowance-container__card-wrapper" },
                        Ae &&
                          n.default.createElement(
                            i.default,
                            { paddingTop: 0, paddingRight: 4, paddingBottom: 4, paddingLeft: 4 },
                            n.default.createElement(L.default, {
                              userAcknowledgedGasMissing: Ie,
                              setUserAcknowledgedGasMissing: () => Pe(!0)
                            })
                          ),
                        n.default.createElement(b.default, {
                          symbol: n.default.createElement(q.Icon, { name: q.IconName.Tag }),
                          title: ce("transactionFee"),
                          showEdit: !0,
                          showAdvanceGasFeeOptions: !0,
                          onEditClick: a,
                          renderTransactionDetailsContent: !0,
                          noBorder: o || !be,
                          supportsEIP1559: Y,
                          isMultiLayerFeeNetwork: K,
                          ethTransactionTotal: V,
                          nativeCurrency: G,
                          fullTxData: He,
                          userAcknowledgedGasMissing: Ie,
                          renderSimulationFailureWarning: Ae,
                          hexTransactionTotal: Q,
                          hexMinimumTransactionFee: X,
                          fiatTransactionTotal: $,
                          currentCurrency: B,
                          useCurrencyRateCheck: De
                        })
                      ),
                    o &&
                      n.default.createElement(
                        i.default,
                        { marginTop: 4, marginRight: 4, marginLeft: 4 },
                        n.default.createElement(U.default, {
                          nextNonce: je,
                          customNonceValue: qe,
                          showCustomizeNonceModal: () =>
                            ((e, t, a, n, r) => {
                              de(
                                (0, v.showModal)({
                                  name: "CUSTOMIZE_NONCE",
                                  useNonceField: e,
                                  nextNonce: t,
                                  customNonceValue: a,
                                  updateCustomNonce: n,
                                  getNextNonce: r
                                })
                              );
                            })(o, je, qe, et, Je)
                        })
                      ),
                    n.default.createElement(
                      i.default,
                      { display: d.DISPLAY.FLEX, flexDirection: d.FLEX_DIRECTION.ROW, justifyContent: d.JustifyContent.center },
                      n.default.createElement(
                        m.default,
                        { type: "link", onClick: () => Se(!be), className: "token-allowance-container__view-details" },
                        n.default.createElement(
                          q.Text,
                          { variant: d.TextVariant.bodySm, as: "h6", color: d.TextColor.primaryDefault, marginRight: 1 },
                          ce("viewDetails")
                        ),
                        be
                          ? n.default.createElement("i", { className: "fa fa-sm fa-angle-up" })
                          : n.default.createElement("i", { className: "fa fa-sm fa-angle-down" })
                      )
                    ),
                    be
                      ? n.default.createElement(
                          i.default,
                          {
                            display: d.DISPLAY.FLEX,
                            flexDirection: d.FLEX_DIRECTION.COLUMN,
                            alignItems: d.AlignItems.center,
                            className: "token-allowance-container__full-tx-content"
                          },
                          n.default.createElement(
                            i.default,
                            { className: "token-allowance-container__data" },
                            n.default.createElement(b.default, {
                              symbol: n.default.createElement("i", { className: "fa fa-file" }),
                              title: ce("data"),
                              renderDataContent: !0,
                              noBorder: !0,
                              supportsEIP1559: Y,
                              isSetApproveForAll: te,
                              fullTxData: He,
                              userAcknowledgedGasMissing: Ie,
                              renderSimulationFailureWarning: Ae,
                              isApprovalOrRejection: ae,
                              data: Ge || ee,
                              useCurrencyRateCheck: De,
                              hexMinimumTransactionFee: X
                            })
                          )
                        )
                      : null,
                    !ke &&
                      ie &&
                      n.default.createElement(
                        i.default,
                        { paddingLeft: 2, paddingRight: 2 },
                        n.default.createElement(D.default, { showDataInstruction: !0 })
                      ),
                    n.default.createElement(
                      h.PageContainerFooter,
                      {
                        cancelText: ce("reject"),
                        submitText: ce(ke ? "next" : "approveButtonText"),
                        onCancel: () => (
                          de((0, v.updateCustomNonce)("")),
                          de((0, O.setCustomTokenAmount)("")),
                          void de((0, v.cancelTx)(He)).then(() => {
                            de((0, y.clearConfirmTransaction)()), pe.push(fe);
                          })
                        ),
                        onSubmit: () => (ke ? (Se(!1), void Ce(!1)) : Ye()),
                        disabled: ye || Xe || Ze
                      },
                      Fe > 1 &&
                        n.default.createElement(
                          m.default,
                          {
                            type: "link",
                            onClick: (e) => {
                              e.preventDefault(),
                                de(
                                  (0, v.showModal)({
                                    name: "REJECT_TRANSACTIONS",
                                    unapprovedTxCount: Fe,
                                    onSubmit: async () => {
                                      await de((0, v.cancelTxs)((0, I.valuesFor)(Le))), de((0, y.clearConfirmTransaction)()), pe.push(fe);
                                    }
                                  })
                                );
                            }
                          },
                          ce("rejectTxsN", [Fe])
                        )
                    ),
                    we &&
                      n.default.createElement(_.default, {
                        tokenName: le,
                        onClose: () => ve(!1),
                        tokenAddress: J,
                        toAddress: oe,
                        chainId: He.chainId,
                        rpcPrefs: Re
                      })
                  );
                }
                V.propTypes = {
                  origin: o.default.string,
                  siteImage: o.default.string,
                  showCustomizeGasModal: o.default.func,
                  useNonceField: o.default.bool,
                  currentCurrency: o.default.string,
                  nativeCurrency: o.default.string,
                  ethTransactionTotal: o.default.string,
                  fiatTransactionTotal: o.default.string,
                  hexTransactionTotal: o.default.string,
                  hexMinimumTransactionFee: o.default.string,
                  txData: o.default.object,
                  isMultiLayerFeeNetwork: o.default.bool,
                  supportsEIP1559: o.default.bool,
                  userAddress: o.default.string,
                  tokenAddress: o.default.string,
                  data: o.default.string,
                  isSetApproveForAll: o.default.bool,
                  isApprovalOrRejection: o.default.bool,
                  decimals: o.default.string,
                  dappProposedTokenAmount: o.default.string,
                  currentTokenBalance: o.default.string,
                  toAddress: o.default.string,
                  tokenSymbol: o.default.string,
                  fromAddressIsLedger: o.default.bool,
                  warning: o.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/token-allowance/token-allowance.js" }
    ],
    [
      5187,
      { "./token-details-page": 5188 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./token-details-page")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/token-details/index.js" }
    ],
    [
      5188,
      {
        "../../../shared/constants/network": 3963,
        "../../../shared/modules/string-utils": 4002,
        "../../components/component-library": 4453,
        "../../components/ui/box": 4607,
        "../../components/ui/button": 4611,
        "../../components/ui/identicon": 4664,
        "../../components/ui/tooltip": 4736,
        "../../contexts/i18n": 4748,
        "../../ducks/metamask/metamask": 4763,
        "../../helpers/constants/design-system": 4771,
        "../../helpers/constants/routes": 4776,
        "../../hooks/useCopyToClipboard": 4830,
        "../../hooks/useTokenFiatAmount": 4858,
        "../../hooks/useTokenTracker": 4859,
        "../../selectors": 5197,
        "../../store/actions": 5204,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    var e, t;
                    const a = (0, r.useDispatch)(),
                      T = (0, s.useHistory)(),
                      b = (0, n.useContext)(c.I18nContext),
                      S = (0, r.useSelector)(o.getTokens),
                      k = (0, r.useSelector)(l.getTokenList),
                      { address: C } = (0, s.useParams)(),
                      x = k[C.toLowerCase()],
                      O = null == x || null === (e = x.aggregators) || void 0 === e ? void 0 : e.join(", "),
                      I = S.find(({ address: e }) => (0, v.isEqualCaseInsensitive)(e, C)),
                      { tokensWithBalances: P } = (0, d.useTokenTracker)({ tokens: I ? [I] : [] }),
                      A = null === (t = P[0]) || void 0 === t ? void 0 : t.string,
                      M = (0, p.useTokenFiatAmount)(null == I ? void 0 : I.address, A, null == I ? void 0 : I.symbol),
                      { nickname: N, type: R } = (0, r.useSelector)(o.getProviderConfig),
                      [F, L] = (0, i.useCopyToClipboard)();
                    if (!I) return n.default.createElement(s.Redirect, { to: { pathname: g.DEFAULT_ROUTE } });
                    return n.default.createElement(
                      E.default,
                      { className: "page-container token-details" },
                      n.default.createElement(
                        E.default,
                        { marginLeft: 5, marginRight: 6 },
                        n.default.createElement(
                          y.Text,
                          {
                            fontWeight: w.FontWeight.Bold,
                            margin: 0,
                            marginTop: 4,
                            variant: w.TextVariant.bodySm,
                            as: "h6",
                            color: w.TextColor.textDefault,
                            className: "token-details__title"
                          },
                          b("tokenDetails"),
                          n.default.createElement(_.default, {
                            type: "link",
                            onClick: () => T.push(`${g.ASSET_ROUTE}/${I.address}`),
                            className: "token-details__closeButton"
                          })
                        ),
                        n.default.createElement(
                          E.default,
                          { display: w.DISPLAY.FLEX, marginTop: 4 },
                          n.default.createElement(
                            y.Text,
                            {
                              align: w.TextAlign.Center,
                              fontWeight: w.FontWeight.Bold,
                              margin: 0,
                              marginRight: 5,
                              variant: w.TextVariant.headingSm,
                              as: "h4",
                              color: w.TextColor.textDefault,
                              className: "token-details__token-value"
                            },
                            A || ""
                          ),
                          n.default.createElement(
                            E.default,
                            { marginTop: 1 },
                            n.default.createElement(u.default, { diameter: 32, address: I.address, image: x ? x.iconUrl : I.image })
                          )
                        ),
                        n.default.createElement(
                          y.Text,
                          { margin: 0, marginTop: 4, variant: w.TextVariant.bodySm, as: "h6", color: w.TextColor.textAlternative },
                          M || ""
                        ),
                        n.default.createElement(
                          y.Text,
                          {
                            margin: 0,
                            marginTop: 6,
                            variant: w.TextVariant.bodyXs,
                            as: "h6",
                            color: w.TextColor.textAlternative,
                            fontWeight: w.FontWeight.Bold
                          },
                          b("tokenContractAddress")
                        ),
                        n.default.createElement(
                          E.default,
                          { display: w.DISPLAY.FLEX },
                          n.default.createElement(
                            y.Text,
                            {
                              variant: w.TextVariant.bodySm,
                              as: "h6",
                              margin: 0,
                              marginTop: 2,
                              color: w.TextColor.textDefault,
                              overflowWrap: w.OverflowWrap.BreakWord,
                              className: "token-details__token-address"
                            },
                            I.address
                          ),
                          n.default.createElement(
                            h.default,
                            {
                              position: "bottom",
                              title: b(F ? "copiedExclamation" : "copyToClipboard"),
                              containerClassName: "token-details__copy-icon"
                            },
                            n.default.createElement(y.ButtonIcon, {
                              ariaLabel: "copy",
                              name: F ? y.IconName.CopySuccess : y.IconName.Copy,
                              className: "token-details__copyIcon",
                              onClick: () => L(I.address),
                              color: w.IconColor.primaryDefault,
                              size: y.ButtonIconSize.Sm
                            })
                          )
                        ),
                        n.default.createElement(
                          y.Text,
                          {
                            variant: w.TextVariant.bodyXs,
                            as: "h6",
                            margin: 0,
                            marginTop: 4,
                            color: w.TextColor.textAlternative,
                            fontWeight: w.FontWeight.Bold
                          },
                          b("tokenDecimalTitle")
                        ),
                        n.default.createElement(
                          y.Text,
                          { variant: w.TextVariant.bodySm, as: "h6", margin: 0, marginTop: 1, color: w.TextColor.textDefault },
                          I.decimals
                        ),
                        n.default.createElement(
                          y.Text,
                          {
                            variant: w.TextVariant.bodyXs,
                            as: "h6",
                            margin: 0,
                            marginTop: 4,
                            color: w.TextColor.textAlternative,
                            fontWeight: w.FontWeight.Bold
                          },
                          b("network")
                        ),
                        n.default.createElement(
                          y.Text,
                          { variant: w.TextVariant.bodySm, as: "h6", margin: 1, marginTop: 0, color: w.TextColor.textDefault },
                          R === m.NETWORK_TYPES.RPC ? N ?? b("privateNetwork") : b(R)
                        ),
                        O &&
                          n.default.createElement(
                            n.default.Fragment,
                            null,
                            n.default.createElement(
                              y.Text,
                              {
                                variant: w.TextVariant.bodyXs,
                                as: "h6",
                                margin: 0,
                                marginTop: 4,
                                color: w.TextColor.textAlternative,
                                fontWeight: w.FontWeight.Bold
                              },
                              b("tokenList")
                            ),
                            n.default.createElement(
                              y.Text,
                              { variant: w.TextVariant.bodySm, as: "h6", margin: 0, marginTop: 1, color: w.TextColor.textDefault },
                              `${O}.`
                            )
                          ),
                        n.default.createElement(
                          _.default,
                          {
                            type: "secondary",
                            className: "token-details__hide-token-button",
                            onClick: () => {
                              a((0, f.showModal)({ name: "HIDE_TOKEN_CONFIRMATION", token: I, history: T }));
                            }
                          },
                          n.default.createElement(
                            y.Text,
                            { variant: w.TextVariant.bodySm, as: "h6", color: w.TextColor.primaryDefault },
                            b("hideToken")
                          )
                        )
                      )
                    );
                  });
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = b(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = e("../../ducks/metamask/metamask"),
                  l = e("../../selectors"),
                  i = e("../../hooks/useCopyToClipboard"),
                  u = T(e("../../components/ui/identicon")),
                  c = e("../../contexts/i18n"),
                  d = e("../../hooks/useTokenTracker"),
                  p = e("../../hooks/useTokenFiatAmount"),
                  f = e("../../store/actions"),
                  m = e("../../../shared/constants/network"),
                  g = e("../../helpers/constants/routes"),
                  h = T(e("../../components/ui/tooltip")),
                  _ = T(e("../../components/ui/button")),
                  E = T(e("../../components/ui/box")),
                  w = e("../../helpers/constants/design-system"),
                  v = e("../../../shared/modules/string-utils"),
                  y = e("../../components/component-library");
                function T(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (b = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/token-details/token-details-page.js" }
    ],
    [
      5189,
      { "./unlock-page.container": 5191 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = (n = e("./unlock-page.container")) && n.__esModule ? n : { default: n };
                a.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/pages/unlock-page/index.js" }
    ],
    [
      5190,
      {
        "../../../shared/constants/metametrics": 3962,
        "../../../shared/lib/ui-utils": 3983,
        "../../components/ui/button": 4611,
        "../../components/ui/mascot": 4679,
        "../../components/ui/text-field": 4725,
        "../../helpers/constants/routes": 4776,
        "../../helpers/utils/build-types": 4792,
        "./unlock-page.util": 5192,
        events: 2745,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = e("events"),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = g(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : (n[s] = e[s]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = m(e("prop-types")),
                  o = m(e("../../components/ui/button")),
                  l = m(e("../../components/ui/text-field")),
                  i = m(e("../../components/ui/mascot")),
                  u = e("../../helpers/constants/routes"),
                  c = e("../../../shared/constants/metametrics"),
                  d = e("../../../shared/lib/ui-utils"),
                  p = e("../../helpers/utils/build-types"),
                  f = e("./unlock-page.util");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (g = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function h(e, t, a) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (a !== undefined) {
                          var n = a.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = a),
                    e
                  );
                }
                class _ extends r.Component {
                  constructor(...e) {
                    super(...e),
                      h(this, "state", { password: "", error: null }),
                      h(this, "submitting", !1),
                      h(this, "failed_attempts", 0),
                      h(this, "animationEventEmitter", new n.EventEmitter()),
                      h(this, "handleSubmit", async (e) => {
                        e.preventDefault(), e.stopPropagation();
                        const { password: t } = this.state,
                          { onSubmit: a, forceUpdateMetamaskState: n } = this.props;
                        if ("" !== t && !this.submitting) {
                          this.setState({ error: null }), (this.submitting = !0);
                          try {
                            await a(t),
                              this.context.trackEvent(
                                {
                                  category: c.MetaMetricsEventCategory.Navigation,
                                  event: c.MetaMetricsEventName.AppUnlocked,
                                  properties: { failed_attempts: this.failed_attempts }
                                },
                                { isNewVisit: !0 }
                              );
                          } catch ({ message: e }) {
                            (this.failed_attempts += 1),
                              "Incorrect password" === e &&
                                (await n(),
                                this.context.trackEvent({
                                  category: c.MetaMetricsEventCategory.Navigation,
                                  event: c.MetaMetricsEventName.AppUnlockedFailed,
                                  properties: { reason: "incorrect_password", failed_attempts: this.failed_attempts }
                                })),
                              this.setState({ error: e }),
                              (this.submitting = !1);
                          }
                        }
                      });
                  }
                  UNSAFE_componentWillMount() {
                    const { isUnlocked: e, history: t } = this.props;
                    e && t.push(u.DEFAULT_ROUTE);
                  }
                  handleInputChange({ target: e }) {
                    if ((this.setState({ password: e.value, error: null }), e.getBoundingClientRect)) {
                      const t = e,
                        a = t.getBoundingClientRect(),
                        n = (0, f.getCaretCoordinates)(t, t.selectionEnd);
                      this.animationEventEmitter.emit("point", { x: a.left + n.left - t.scrollLeft, y: a.top + n.top - t.scrollTop });
                    }
                  }
                  renderSubmitButton() {
                    return r.default.createElement(
                      o.default,
                      {
                        type: "submit",
                        "data-testid": "unlock-submit",
                        style: {
                          backgroundColor: "var(--color-primary-default)",
                          color: "var(--color-primary-inverse)",
                          marginTop: "20px",
                          height: "60px",
                          fontWeight: "400",
                          boxShadow: "none",
                          borderRadius: "100px"
                        },
                        disabled: !this.state.password,
                        variant: "contained",
                        size: "large",
                        onClick: this.handleSubmit
                      },
                      this.context.t("unlock")
                    );
                  }
                  render() {
                    const { password: e, error: t } = this.state,
                      { t: a } = this.context,
                      { onRestore: n } = this.props;
                    let s = a("appNameMmi");
                    return (
                      (s = a("needHelpLinkText")),
                      r.default.createElement(
                        "div",
                        { className: "unlock-page__container" },
                        r.default.createElement(
                          "div",
                          { className: "unlock-page", "data-testid": "unlock-page" },
                          r.default.createElement(
                            "div",
                            { className: "unlock-page__mascot-container" },
                            r.default.createElement(i.default, {
                              animationEventEmitter: this.animationEventEmitter,
                              width: "120",
                              height: "120"
                            }),
                            (0, p.isBeta)()
                              ? r.default.createElement("div", { className: "unlock-page__mascot-container__beta" }, a("beta"))
                              : null
                          ),
                          r.default.createElement("h1", { className: "unlock-page__title" }, a("welcomeBack")),
                          r.default.createElement("div", null, a("unlockMessage")),
                          r.default.createElement(
                            "form",
                            { className: "unlock-page__form", onSubmit: this.handleSubmit },
                            r.default.createElement(l.default, {
                              id: "password",
                              "data-testid": "unlock-password",
                              label: a("password"),
                              type: "password",
                              value: e,
                              onChange: (e) => this.handleInputChange(e),
                              error: t,
                              autoFocus: !0,
                              autoComplete: "current-password",
                              theme: "material",
                              fullWidth: !0
                            })
                          ),
                          this.renderSubmitButton(),
                          r.default.createElement(
                            "div",
                            { className: "unlock-page__links" },
                            r.default.createElement(
                              o.default,
                              { type: "link", key: "import-account", className: "unlock-page__link", onClick: () => n() },
                              a("forgotPassword")
                            )
                          ),
                          r.default.createElement(
                            "div",
                            { className: "unlock-page__support" },
                            a("needHelp", [
                              r.default.createElement(
                                "a",
                                {
                                  href: d.SUPPORT_LINK,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  key: "need-help-link",
                                  onClick: () => {
                                    this.context.trackEvent(
                                      {
                                        category: c.MetaMetricsEventCategory.Navigation,
                                        event: c.MetaMetricsEventName.SupportLinkClicked,
                                        properties: { url: d.SUPPORT_LINK }
                                      },
                                      { contextPropsIntoEventProperties: [c.MetaMetricsContextProp.PageTitle] }
                                    );
                                  }
                                },
                                s
                              )
                            ])
                          )
                        )
                      )
                    );
                  }
                }
                (a.default = _),
                  h(_, "contextTypes", { trackEvent: s.default.func, t: s.default.func }),
                  h(_, "propTypes", {
                    history: s.default.object.isRequired,
                    isUnlocked: s.default.bool,
                    onRestore: s.default.func,
                    onSubmit: s.default.func,
                    forceUpdateMetamaskState: s.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/unlock-page/unlock-page.component.js" }
    ],
    [
      5191,
      {
        "../../../app/scripts/lib/util": 82,
        "../../../shared/constants/app": 3953,
        "../../helpers/constants/routes": 4776,
        "../../store/actions": 5204,
        "./unlock-page.component": 5190,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = e("redux"),
                  l = e("../../../app/scripts/lib/util"),
                  i = e("../../../shared/constants/app"),
                  u = e("../../helpers/constants/routes"),
                  c = e("../../store/actions"),
                  d = (n = e("./unlock-page.component")) && n.__esModule ? n : { default: n };
                a.default = (0, o.compose)(
                  s.withRouter,
                  (0, r.connect)(
                    (e) => {
                      const {
                        metamask: { isUnlocked: t }
                      } = e;
                      return { isUnlocked: t };
                    },
                    (e) => ({
                      tryUnlockMetamask: (t) => e((0, c.tryUnlockMetamask)(t)),
                      markPasswordForgotten: () => e((0, c.markPasswordForgotten)()),
                      forceUpdateMetamaskState: () => (0, c.forceUpdateMetamaskState)(e)
                    }),
                    (e, t, a) => {
                      const { markPasswordForgotten: n, tryUnlockMetamask: r, ...s } = t,
                        { history: o, onSubmit: c, ...d } = a;
                      return {
                        ...e,
                        ...s,
                        ...d,
                        onRestore: async () => {
                          await n(),
                            o.push(u.RESTORE_VAULT_ROUTE),
                            (0, l.getEnvironmentType)() === i.ENVIRONMENT_TYPE_POPUP &&
                              global.platform.openExtensionInBrowser(u.RESTORE_VAULT_ROUTE);
                        },
                        onSubmit:
                          c ||
                          (async (e) => {
                            await r(e), o.push(u.DEFAULT_ROUTE);
                          }),
                        history: o
                      };
                    }
                  )
                )(d.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/unlock-page/unlock-page.container.js" }
    ],
    [
      5192,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getCaretCoordinates = function (e, t) {
                    const a = document.createElement("div");
                    (a.id = "password-mirror-div"), document.body.appendChild(a);
                    const n = window.getComputedStyle(e);
                    a.textContent = new Array(t + 1).join("•");
                    const r = document.createElement("span");
                    (r.textContent = "•"), a.appendChild(r);
                    const s = { top: r.offsetTop + parseInt(n.borderTopWidth, 10), left: r.offsetLeft + parseInt(n.borderLeftWidth, 10) };
                    return document.body.removeChild(a), s;
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/unlock-page/unlock-page.util.js" }
    ],
    [
      5193,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getApprovalFlows = function (e) {
                    return e.metamask.approvalFlows;
                  }),
                  (a.getApprovalRequestsByType = void 0),
                  (a.hasPendingApprovals = function (e, t, a) {
                    const n = Object.values(e.metamask.pendingApprovals).filter(({ type: e }) => e === t);
                    if (a) return n.some(a);
                    return n.length > 0;
                  });
                a.getApprovalRequestsByType = (e, t, a) => {
                  const n = Object.values(e.metamask.pendingApprovals).filter(({ type: e }) => e === t);
                  return a ? n.filter(a) : n;
                };
              };
            };
      },
      { package: "$root$", file: "ui/selectors/approvals.ts" }
    ],
    [
      5194,
      {
        ".": 5197,
        "../../shared/constants/gas": 3957,
        "../../shared/lib/transactions-controller-utils": 3982,
        "../../shared/modules/conversion.utils": 3988,
        "../../shared/modules/gas.utils": 3992,
        "../../shared/modules/string-utils": 4002,
        "../ducks/metamask/metamask": 4763,
        "../helpers/utils/confirm-tx.util": 4794,
        "../helpers/utils/tx-helper": 4811,
        "./custom-gas": 5195,
        "./selectors": 5200,
        "@metamask/transaction-controller": 1835,
        reselect: 3729
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.use4ByteResolutionSelector =
                    a.unconfirmedTransactionsListSelector =
                    a.unconfirmedTransactionsHashSelector =
                    a.unconfirmedMessagesHashSelector =
                    a.txDataSelector =
                    a.transactionFeeSelector =
                    a.tokenAddressSelector =
                    a.sendTokenTokenAmountAndToAddressSelector =
                    a.currentCurrencySelector =
                    a.conversionRateSelector =
                    a.contractExchangeRateSelector =
                      void 0);
                var n,
                  r = e("reselect"),
                  s = e("@metamask/transaction-controller"),
                  o = (n = e("../helpers/utils/tx-helper")) && n.__esModule ? n : { default: n },
                  l = e("../helpers/utils/confirm-tx.util"),
                  i = e("../ducks/metamask/metamask"),
                  u = e("../../shared/constants/gas"),
                  c = e("../../shared/modules/gas.utils"),
                  d = e("../../shared/modules/string-utils"),
                  p = e("../../shared/lib/transactions-controller-utils"),
                  f = e("../../shared/modules/conversion.utils"),
                  m = e("./custom-gas"),
                  g = e("./selectors"),
                  h = e(".");
                const _ = (e) => (0, h.getUnapprovedTransactions)(e),
                  E = (e) => e.metamask.unapprovedMsgs,
                  w = (e) => e.metamask.unapprovedPersonalMsgs,
                  v = (e) => e.metamask.unapprovedDecryptMsgs,
                  y = (e) => e.metamask.unapprovedEncryptionPublicKeyMsgs,
                  T = (e) => e.metamask.unapprovedTypedMessages;
                (a.unconfirmedTransactionsListSelector = (0, r.createSelector)(
                  _,
                  E,
                  w,
                  v,
                  y,
                  T,
                  g.getCurrentChainId,
                  (e = {}, t = {}, a = {}, n = {}, r = {}, s = {}, l) => (0, o.default)(e, t, a, n, r, s, l) || []
                )),
                  (a.unconfirmedTransactionsHashSelector = (0, r.createSelector)(
                    _,
                    E,
                    w,
                    v,
                    y,
                    T,
                    g.getCurrentChainId,
                    (e = {}, t = {}, a = {}, n = {}, r = {}, s = {}, o) => ({
                      ...Object.keys(e).reduce((t, a) => {
                        const n = { ...t };
                        return e[a].chainId === o && (n[a] = e[a]), n;
                      }, {}),
                      ...t,
                      ...a,
                      ...n,
                      ...r,
                      ...s
                    })
                  )),
                  (a.unconfirmedMessagesHashSelector = (0, r.createSelector)(E, w, v, y, T, (e = {}, t = {}, a = {}, n = {}, r = {}) => ({
                    ...e,
                    ...t,
                    ...a,
                    ...n,
                    ...r
                  })));
                a.use4ByteResolutionSelector = (e) => e.metamask.use4ByteResolution;
                const b = (e) => e.metamask.currentCurrency;
                a.currentCurrencySelector = b;
                const S = (e) => {
                  var t;
                  return null === (t = e.metamask.currencyRates[(0, i.getProviderConfig)(e).ticker]) || void 0 === t
                    ? void 0
                    : t.conversionRate;
                };
                a.conversionRateSelector = S;
                const k = (e) => e.confirmTransaction.txData;
                a.txDataSelector = k;
                const C = (0, r.createSelector)(
                    (e) => e.confirmTransaction.tokenProps,
                    (e) => e && e.decimals
                  ),
                  x = (0, r.createSelector)(
                    (e) => e.confirmTransaction.tokenData,
                    (e) => (e && e.args) || []
                  ),
                  O = (0, r.createSelector)(k, (e) => (e && e.txParams) || {}),
                  I = (a.tokenAddressSelector = (0, r.createSelector)(O, (e) => e && e.to));
                (a.sendTokenTokenAmountAndToAddressSelector = (0, r.createSelector)(x, C, (e, t) => {
                  let a = "",
                    n = "0";
                  if (e && e.length) {
                    a = e._to;
                    let r = e._value.toString();
                    t && (r = (0, p.calcTokenAmount)(r, t).toFixed()), (n = (0, l.roundExponential)(r));
                  }
                  return { toAddress: a, tokenAmount: n };
                })),
                  (a.contractExchangeRateSelector = (0, r.createSelector)(
                    (e) => e.metamask.contractExchangeRates,
                    I,
                    (e, t) => e[Object.keys(e).find((e) => (0, d.isEqualCaseInsensitive)(e, t))]
                  ));
                a.transactionFeeSelector = function (e, t) {
                  var a, n, r, o;
                  const d = b(e),
                    p = S(e),
                    g = (0, i.getNativeCurrency)(e),
                    _ = (0, i.getGasFeeEstimates)(e) || {},
                    E = (0, i.getGasEstimateType)(e),
                    w = (0, h.checkNetworkAndAccountSupports1559)(e),
                    v = { gasLimit: (null === (a = t.txParams) || void 0 === a ? void 0 : a.gas) ?? "0x0" };
                  if (w) {
                    var y;
                    const { gasPrice: e = "0" } = _,
                      a = _[t.userFeeLevel] || {};
                    if ((null === (y = t.txParams) || void 0 === y ? void 0 : y.type) === s.TransactionEnvelopeType.legacy) {
                      var T;
                      v.gasPrice = (null === (T = t.txParams) || void 0 === T ? void 0 : T.gasPrice) ?? (0, f.decGWEIToHexWEI)(e);
                    } else {
                      var k, C, x, O;
                      const { suggestedMaxPriorityFeePerGas: n, suggestedMaxFeePerGas: r } = a;
                      (v.maxFeePerGas =
                        null === (k = t.txParams) || void 0 === k || !k.maxFeePerGas || (t.userFeeLevel !== u.CUSTOM_GAS_ESTIMATE && r)
                          ? (0, f.decGWEIToHexWEI)(r || e)
                          : null === (C = t.txParams) || void 0 === C
                          ? void 0
                          : C.maxFeePerGas),
                        (v.maxPriorityFeePerGas =
                          null === (x = t.txParams) ||
                          void 0 === x ||
                          !x.maxPriorityFeePerGas ||
                          (t.userFeeLevel !== u.CUSTOM_GAS_ESTIMATE && n)
                            ? (n && (0, f.decGWEIToHexWEI)(n)) || v.maxFeePerGas
                            : null === (O = t.txParams) || void 0 === O
                            ? void 0
                            : O.maxPriorityFeePerGas),
                        (v.baseFeePerGas = (0, f.decGWEIToHexWEI)(_.estimatedBaseFee));
                    }
                  } else
                    switch (E) {
                      case u.GasEstimateTypes.none:
                        v.gasPrice = (null === (n = t.txParams) || void 0 === n ? void 0 : n.gasPrice) ?? "0x0";
                        break;
                      case u.GasEstimateTypes.ethGasPrice:
                        v.gasPrice =
                          (null === (r = t.txParams) || void 0 === r ? void 0 : r.gasPrice) ?? (0, f.decGWEIToHexWEI)(_.gasPrice);
                        break;
                      case u.GasEstimateTypes.legacy:
                        v.gasPrice =
                          (null === (o = t.txParams) || void 0 === o ? void 0 : o.gasPrice) ?? (0, m.getAveragePriceEstimateInHexWEI)(e);
                      case u.GasEstimateTypes.feeMarket:
                    }
                  const { txParams: { value: I = "0x0" } = {} } = t,
                    P = (0, f.getValueFromWeiHex)({ value: I, fromCurrency: g, toCurrency: d, conversionRate: p, numberOfDecimals: 2 }),
                    A = (0, f.getValueFromWeiHex)({ value: I, fromCurrency: g, toCurrency: g, conversionRate: p, numberOfDecimals: 6 }),
                    M = (0, c.getMinimumGasTotalInHexWei)(v),
                    N = (0, c.getMaximumGasTotalInHexWei)(v),
                    R = (0, l.getTransactionFee)({ value: M, fromCurrency: g, toCurrency: d, numberOfDecimals: 2, conversionRate: p }),
                    F = (0, l.getTransactionFee)({ value: N, fromCurrency: g, toCurrency: d, numberOfDecimals: 2, conversionRate: p }),
                    L = (0, l.getTransactionFee)({ value: M, fromCurrency: g, toCurrency: g, numberOfDecimals: 6, conversionRate: p });
                  return {
                    hexTransactionAmount: I,
                    fiatTransactionAmount: P,
                    ethTransactionAmount: A,
                    hexMinimumTransactionFee: M,
                    fiatMinimumTransactionFee: R,
                    hexMaximumTransactionFee: N,
                    fiatMaximumTransactionFee: F,
                    ethTransactionFee: L,
                    fiatTransactionTotal: (0, l.addFiat)(R, P),
                    ethTransactionTotal: (0, l.addEth)(L, A),
                    hexTransactionTotal: (0, f.sumHexes)(I, M),
                    gasEstimationObject: v
                  };
                };
              };
            };
      },
      { package: "$root$", file: "ui/selectors/confirm-transaction.js" }
    ],
    [
      5195,
      {
        ".": 5197,
        "../../app/scripts/lib/util": 82,
        "../../shared/constants/common": 3955,
        "../../shared/constants/gas": 3957,
        "../../shared/lib/transactions-controller-utils": 3982,
        "../../shared/modules/Numeric": 3984,
        "../../shared/modules/conversion.utils": 3988,
        "../ducks/metamask/metamask": 4763,
        "../ducks/send": 4765,
        "../helpers/utils/confirm-tx.util": 4794,
        "../helpers/utils/formatters": 4796
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.basicPriceEstimateToETHTotal = E),
                  (a.getAverageEstimate = h),
                  (a.getAveragePriceEstimateInHexWEI = function (e) {
                    return v(h(e));
                  }),
                  (a.getBasicGasEstimateLoadingStatus = function (e) {
                    return !1 === y(e);
                  }),
                  (a.getCustomGasLimit = function (e) {
                    return e.gas.customData.limit;
                  }),
                  (a.getCustomGasPrice = m),
                  (a.getDefaultActiveButtonIndex = function (e, t, a) {
                    return e.map(({ priceInHexWei: e }) => e).lastIndexOf((0, n.addHexPrefix)(t || a));
                  }),
                  (a.getFastPriceEstimate = _),
                  (a.getFastPriceEstimateInHexWEI = function (e) {
                    return v(_(e) || "0x0");
                  }),
                  (a.getGasPriceInHexWei = v),
                  (a.getIsCustomNetworkGasPriceFetched = function (e) {
                    return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.ethGasPrice && !(0, f.getIsMainnet)(e);
                  }),
                  (a.getIsEthGasPriceFetched = function (e) {
                    return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.ethGasPrice && (0, f.getIsMainnet)(e);
                  }),
                  (a.getIsGasEstimatesFetched = y),
                  (a.getNoGasPriceFetched = function (e) {
                    return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.none;
                  }),
                  (a.getRenderableConvertedCurrencyFee = function (e, t, a, n) {
                    const o = E(new d.Numeric(e, 10).toBase(16).toString(), t),
                      l = (0, r.decEthToConvertedCurrency)(o, a, n);
                    return (0, s.formatCurrency)(l, a);
                  }),
                  (a.getRenderableEthFee = function (e, t, a = 9, n = "ETH") {
                    const r = E(new d.Numeric(e, 10).toBase(16).toString(), t, a);
                    return (0, o.formatETHFee)(r, n);
                  }),
                  (a.getSafeLowEstimate = g),
                  (a.isCustomPriceExcessive = function (e, t = !1) {
                    const a = t ? (0, l.getGasPrice)(e) : m(e),
                      n = _(e);
                    if (!a || !n) return !1;
                    return new d.Numeric(a, 16, p.EtherDenomination.WEI)
                      .toDenomination(p.EtherDenomination.GWEI)
                      .greaterThan(Math.floor(1.5 * n), 10);
                  }),
                  (a.isCustomPriceSafe = function (e) {
                    const t = g(e),
                      a = m(e);
                    if (!a) return !0;
                    if (!t) return !1;
                    return new d.Numeric(a, 16, p.EtherDenomination.WEI).toDenomination(p.EtherDenomination.GWEI).greaterThan(t, 10);
                  }),
                  (a.isCustomPriceSafeForCustomNetwork = function (e) {
                    const t = h(e),
                      a = m(e);
                    if (!a) return !0;
                    if (!t) return !1;
                    return new d.Numeric(a, 16, p.EtherDenomination.WEI).toDenomination(p.EtherDenomination.GWEI).greaterThan(t, 10);
                  }),
                  (a.priceEstimateToWei = w);
                var n = e("../../app/scripts/lib/util"),
                  r = e("../../shared/modules/conversion.utils"),
                  s = e("../helpers/utils/confirm-tx.util"),
                  o = e("../helpers/utils/formatters"),
                  l = e("../ducks/send"),
                  i = e("../../shared/constants/gas"),
                  u = e("../ducks/metamask/metamask"),
                  c = e("../../shared/lib/transactions-controller-utils"),
                  d = e("../../shared/modules/Numeric"),
                  p = e("../../shared/constants/common"),
                  f = e(".");
                function m(e) {
                  return e.gas.customData.price;
                }
                function g(e) {
                  const t = (0, u.getGasFeeEstimates)(e);
                  return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.legacy ? (null == t ? void 0 : t.low) : null;
                }
                function h(e) {
                  const t = (0, u.getGasFeeEstimates)(e);
                  return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.legacy ? (null == t ? void 0 : t.medium) : null;
                }
                function _(e) {
                  const t = (0, u.getGasFeeEstimates)(e);
                  return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.legacy ? (null == t ? void 0 : t.high) : null;
                }
                function E(e, t, a = 9) {
                  return new d.Numeric((0, c.calcGasTotal)(t, e), 16, p.EtherDenomination.GWEI).round(a).toBase(10).toString();
                }
                function w(e) {
                  return new d.Numeric(e, 16, p.EtherDenomination.GWEI).toDenomination(p.EtherDenomination.WEI).round(9).toString();
                }
                function v(e) {
                  const t = new d.Numeric(e, 10).toBase(16).toString();
                  return (0, n.addHexPrefix)(w(t));
                }
                function y(e) {
                  const t = (0, u.getGasEstimateType)(e);
                  return !(0, u.isEIP1559Network)(e) && t !== i.GasEstimateTypes.none;
                }
              };
            };
      },
      { package: "$root$", file: "ui/selectors/custom-gas.js" }
    ],
    [
      5196,
      { "../helpers/constants/routes": 4776 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getFirstTimeFlowType = void 0),
                  (a.getFirstTimeFlowTypeRoute = function (e) {
                    const { firstTimeFlowType: t } = e.metamask;
                    let a;
                    a =
                      "create" === t
                        ? n.ONBOARDING_CREATE_PASSWORD_ROUTE
                        : "import" === t
                        ? n.ONBOARDING_IMPORT_WITH_SRP_ROUTE
                        : n.DEFAULT_ROUTE;
                    return a;
                  }),
                  (a.getOnboardingInitiator = void 0);
                var n = e("../helpers/constants/routes");
                a.getFirstTimeFlowType = (e) => e.metamask.firstTimeFlowType;
                a.getOnboardingInitiator = (e) => {
                  const { onboardingTabs: t } = e.metamask;
                  if (!t || 1 !== Object.keys(t).length) return null;
                  const a = Object.keys(t)[0];
                  return { location: a, tabId: t[a] };
                };
              };
            };
      },
      { package: "$root$", file: "ui/selectors/first-time-flow.js" }
    ],
    [
      5197,
      {
        "./approvals": 5193,
        "./confirm-transaction": 5194,
        "./custom-gas": 5195,
        "./first-time-flow": 5196,
        "./metametrics": 5198,
        "./permissions": 5199,
        "./selectors": 5200,
        "./transactions": 5201
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 });
                var n = e("./confirm-transaction");
                Object.keys(n).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === n[e]) ||
                      Object.defineProperty(a, e, {
                        enumerable: !0,
                        get: function () {
                          return n[e];
                        }
                      }));
                });
                var r = e("./custom-gas");
                Object.keys(r).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === r[e]) ||
                      Object.defineProperty(a, e, {
                        enumerable: !0,
                        get: function () {
                          return r[e];
                        }
                      }));
                });
                var s = e("./first-time-flow");
                Object.keys(s).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === s[e]) ||
                      Object.defineProperty(a, e, {
                        enumerable: !0,
                        get: function () {
                          return s[e];
                        }
                      }));
                });
                var o = e("./metametrics");
                Object.keys(o).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === o[e]) ||
                      Object.defineProperty(a, e, {
                        enumerable: !0,
                        get: function () {
                          return o[e];
                        }
                      }));
                });
                var l = e("./permissions");
                Object.keys(l).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === l[e]) ||
                      Object.defineProperty(a, e, {
                        enumerable: !0,
                        get: function () {
                          return l[e];
                        }
                      }));
                });
                var i = e("./selectors");
                Object.keys(i).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === i[e]) ||
                      Object.defineProperty(a, e, {
                        enumerable: !0,
                        get: function () {
                          return i[e];
                        }
                      }));
                });
                var u = e("./transactions");
                Object.keys(u).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === u[e]) ||
                      Object.defineProperty(a, e, {
                        enumerable: !0,
                        get: function () {
                          return u[e];
                        }
                      }));
                });
                var c = e("./approvals");
                Object.keys(c).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === c[e]) ||
                      Object.defineProperty(a, e, {
                        enumerable: !0,
                        get: function () {
                          return c[e];
                        }
                      }));
                });
              };
            };
      },
      { package: "$root$", file: "ui/selectors/index.js" }
    ],
    [
      5198,
      { reselect: 3729 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.selectMatchingFragment = a.selectFragments = a.selectFragmentBySuccessEvent = a.selectFragmentById = void 0);
                var n = e("reselect");
                const r = (e) => e.metamask.fragments;
                a.selectFragments = r;
                const s = (a.selectFragmentBySuccessEvent = (0, n.createSelector)(
                    r,
                    (e, t) => t,
                    (e, t) => (t.persist ? Object.values(e).find((e) => e.successEvent === t.successEvent) : undefined)
                  )),
                  o = (a.selectFragmentById = (0, n.createSelector)(
                    r,
                    (e, t) => t,
                    (e, t) => (t && null != e && e[t] ? e[t] : undefined)
                  ));
                a.selectMatchingFragment = (0, n.createSelector)(
                  (e, t) => s(e, t.fragmentOptions),
                  (e, t) => o(e, t.existingId),
                  (e, t) => t ?? e
                );
              };
            };
      },
      { package: "$root$", file: "ui/selectors/metametrics.js" }
    ],
    [
      5199,
      {
        ".": 5197,
        "../../shared/constants/permissions": 3964,
        "./approvals": 5193,
        "./util": 5202,
        "@metamask/controller-utils": 1056,
        "@metamask/snaps-rpc-methods": 1692
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.activeTabHasPermissions = function (e) {
                    var t;
                    const { activeTab: a, metamask: n } = e,
                      { subjects: r = {} } = n;
                    return Boolean(Object.keys((null === (t = r[a.origin]) || void 0 === t ? void 0 : t.permissions) || {}).length > 0);
                  }),
                  (a.getAccountToConnectToActiveTab = function (e) {
                    const t = (0, i.getSelectedAddress)(e),
                      a = d(e),
                      {
                        metamask: { identities: n }
                      } = e,
                      r = Object.keys(n).length;
                    if (a.length && a.length !== r && -1 === a.findIndex((e) => e === t)) return n[t];
                    return undefined;
                  }),
                  (a.getAddressConnectedSubjectMap = function (e) {
                    const t = (0, i.getSubjectMetadata)(e),
                      a = p(e),
                      n = {};
                    return (
                      Object.keys(a).forEach((e) => {
                        const { iconUrl: r, name: s } = t[e] || {};
                        a[e].forEach((t) => {
                          const a = s || e;
                          n[t] = n[t] ? { ...n[t], [e]: { iconUrl: r, name: a } } : { [e]: { iconUrl: r, name: a } };
                        });
                      }),
                      n
                    );
                  }),
                  (a.getConnectedSubjectsForAllAddresses = function (e) {
                    const t = u(e),
                      a = (0, i.getSubjectMetadata)(e),
                      n = {};
                    return (
                      Object.entries(t).forEach(([e, t]) => {
                        f(t).forEach((t) => {
                          n[t] || (n[t] = []), n[t].push(a[e] || {});
                        });
                      }),
                      n
                    );
                  }),
                  (a.getConnectedSubjectsForSelectedAddress = function (e) {
                    const { selectedAddress: t } = e.metamask,
                      a = u(e),
                      n = (0, i.getSubjectMetadata)(e),
                      r = [];
                    return (
                      Object.entries(a).forEach(([e, a]) => {
                        if (!f(a).includes(t)) return;
                        const { extensionId: s, name: o, iconUrl: l } = n[e] || {};
                        r.push({ extensionId: s, origin: e, name: o, iconUrl: l });
                      }),
                      r
                    );
                  }),
                  (a.getFirstPermissionRequest = function (e) {
                    const t = _(e);
                    return t && t[0] ? t[0] : null;
                  }),
                  (a.getFirstSnapInstallOrUpdateRequest = function (e) {
                    var t;
                    return (null === (t = h(e)) || void 0 === t ? void 0 : t[0]) ?? null;
                  }),
                  (a.getLastConnectedInfo = function (e) {
                    const { permissionHistory: t = {} } = e.metamask;
                    return Object.keys(t).reduce(
                      (e, a) => (t[a].eth_accounts && (e[a] = JSON.parse(JSON.stringify(t[a].eth_accounts))), e),
                      {}
                    );
                  }),
                  (a.getOrderedConnectedAccountsForActiveTab = function (e) {
                    var t;
                    const {
                        activeTab: a,
                        metamask: { permissionHistory: n }
                      } = e,
                      r = null === (t = n[a.origin]) || void 0 === t || null === (t = t.eth_accounts) || void 0 === t ? void 0 : t.accounts,
                      s = (0, i.getMetaMaskAccountsOrdered)(e),
                      o = d(e);
                    return s
                      .filter((e) => o.includes(e.address))
                      .map((e) => ({ ...e, lastActive: null == r ? void 0 : r[e.address] }))
                      .sort(({ lastSelected: e }, { lastSelected: t }) =>
                        e === t ? 0 : e === undefined ? 1 : t === undefined ? -1 : t - e
                      );
                  }),
                  (a.getPermissionSubjects = u),
                  (a.getPermissionSubjectsDeepEqual = void 0),
                  (a.getPermissions = function (e, t) {
                    var a;
                    return null === (a = u(e)[t]) || void 0 === a ? void 0 : a.permissions;
                  }),
                  (a.getPermissionsForActiveTab = function (e) {
                    var t;
                    const { activeTab: a, metamask: n } = e,
                      { subjects: r = {} } = n,
                      s = (null === (t = r[a.origin]) || void 0 === t ? void 0 : t.permissions) ?? {};
                    return Object.keys(s).map((e) => ({ key: e, value: s[e] }));
                  }),
                  (a.getPermissionsRequests = _),
                  (a.getPermittedAccounts = c),
                  (a.getPermittedAccountsByOrigin = p),
                  (a.getPermittedAccountsForCurrentTab = d),
                  (a.getRequestState = function (e, t) {
                    var a;
                    return null === (a = e.metamask.pendingApprovals[t]) || void 0 === a ? void 0 : a.requestState;
                  }),
                  (a.getRequestType = function (e, t) {
                    var a;
                    return null === (a = e.metamask.pendingApprovals[t]) || void 0 === a ? void 0 : a.type;
                  }),
                  (a.getSnapInstallOrUpdateRequests = h),
                  (a.getSubjectMetadataDeepEqual = void 0),
                  (a.getSubjectsWithPermission = function (e, t) {
                    const a = u(e),
                      n = [];
                    return (
                      Object.entries(a).forEach(([a, { permissions: r }]) => {
                        if (r[t]) {
                          const { extensionId: t, name: r, iconUrl: s } = (0, i.getTargetSubjectMetadata)(e, a) || {};
                          n.push({ extensionId: t, origin: a, name: r, iconUrl: s });
                        }
                      }),
                      n
                    );
                  }),
                  (a.getSubjectsWithSnapPermission = function (e, t) {
                    const a = u(e);
                    return Object.entries(a)
                      .filter(([e, { permissions: a }]) => {
                        var n;
                        return null === (n = a[r.WALLET_SNAP_PERMISSION_KEY]) || void 0 === n ? void 0 : n.caveats[0].value[t];
                      })
                      .map(([t, a]) => {
                        const { extensionId: n, name: r, iconUrl: s } = (0, i.getTargetSubjectMetadata)(e, t) || {};
                        return { extensionId: n, origin: t, name: r, iconUrl: s };
                      });
                  });
                var n = e("@metamask/controller-utils"),
                  r = e("@metamask/snaps-rpc-methods"),
                  s = e("../../shared/constants/permissions"),
                  o = e("./approvals"),
                  l = e("./util"),
                  i = e(".");
                (a.getPermissionSubjectsDeepEqual = (0, l.createDeepEqualSelector)(
                  (e) => e.metamask.subjects || {},
                  (e) => e
                )),
                  (a.getSubjectMetadataDeepEqual = (0, l.createDeepEqualSelector)(
                    (e) => e.metamask.subjectMetadata,
                    (e) => e
                  ));
                function u(e) {
                  return e.metamask.subjects || {};
                }
                function c(e, t) {
                  return g(
                    m(
                      (function (e, t) {
                        var a;
                        return t && (null === (a = e.metamask.subjects) || void 0 === a ? void 0 : a[t]);
                      })(e, t)
                    )
                  );
                }
                function d(e) {
                  return c(e, (0, i.getOriginOfCurrentTab)(e));
                }
                function p(e) {
                  const t = u(e);
                  return Object.keys(t).reduce((e, a) => {
                    const n = f(t[a]);
                    return n.length > 0 && (e[a] = n), e;
                  }, {});
                }
                function f(e) {
                  return g(m(e));
                }
                function m(e = {}) {
                  var t;
                  return (null === (t = e.permissions) || void 0 === t ? void 0 : t.eth_accounts) || {};
                }
                function g(e) {
                  const t = (function (e = {}) {
                    return Array.isArray(e.caveats) && e.caveats.find((e) => e.type === s.CaveatTypes.restrictReturnedAccounts);
                  })(e);
                  return t && Array.isArray(t.value) ? t.value : [];
                }
                function h(e) {
                  return Object.values(e.metamask.pendingApprovals)
                    .filter(({ type: e }) => "wallet_installSnap" === e || "wallet_updateSnap" === e || "wallet_installSnapResult" === e)
                    .map(({ requestData: e }) => e);
                }
                function _(e) {
                  var t;
                  return null === (t = (0, o.getApprovalRequestsByType)(e, n.ApprovalType.WalletRequestPermissions)) || void 0 === t
                    ? void 0
                    : t.map(({ requestData: e }) => e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/selectors/permissions.js" }
    ]
  ],
  [],
  {}
);
