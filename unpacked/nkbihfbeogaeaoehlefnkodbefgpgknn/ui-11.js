LavaPack.loadBundle(
  [
    [
      5890,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/swaps": 4766,
        "../../../components/component-library": 5242,
        "../../../components/ui/actionable-message/actionable-message": 5369,
        "../../../components/ui/pulse-loader": 5467,
        "../../../components/ui/url-icon": 5511,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/utils/util": 5578,
        "../../../selectors/selectors": 5961,
        "../import-token": 5897,
        "../searchable-item-list": 5913,
        classnames: 2952,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = C);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = y(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = v(e("prop-types")),
                  s = v(e("classnames")),
                  l = e("lodash"),
                  i = e("../../../contexts/i18n"),
                  u = v(e("../searchable-item-list")),
                  c = v(e("../../../components/ui/pulse-loader")),
                  d = v(e("../../../components/ui/url-icon")),
                  p = e("../../../components/component-library"),
                  m = v(e("../../../components/ui/actionable-message/actionable-message")),
                  f = v(e("../import-token")),
                  g = e("../../../selectors/selectors"),
                  E = e("../../../../shared/constants/swaps"),
                  _ = e("../../../helpers/utils/util"),
                  h = e("../../../ducks/swaps/swaps"),
                  T = e("../../../contexts/metametrics"),
                  S = e("../../../../shared/constants/metametrics");
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
                function C({
                  searchListClassName: e,
                  itemsToSearch: t,
                  selectPlaceHolderText: a,
                  fuseSearchKeys: o,
                  defaultToAll: v,
                  maxListItems: y,
                  onSelect: C,
                  startingItem: w,
                  onOpen: k,
                  onClose: I,
                  className: A = "",
                  externallySelectedItem: O,
                  selectorClosedClassName: N,
                  loading: x,
                  hideRightLabels: P,
                  hideItemIf: R,
                  listContainerClassName: M,
                  shouldSearchForImports: D
                }) {
                  const L = (0, n.useContext)(i.I18nContext),
                    [F, j] = (0, n.useState)(!1),
                    [U, W] = (0, n.useState)(!1),
                    [q, G] = (0, n.useState)(w),
                    [B, H] = (0, n.useState)(null),
                    [V, $] = (0, n.useState)(""),
                    K = (0, r.useSelector)(g.isHardwareWallet),
                    Q = (0, r.useSelector)(g.getHardwareWalletType),
                    Y = (0, r.useSelector)(g.getCurrentChainId),
                    X = (0, r.useSelector)(g.getRpcPrefsForCurrentProvider),
                    Z = (0, r.useSelector)(h.getSmartTransactionsOptInStatus),
                    z = (0, r.useSelector)(h.getSmartTransactionsEnabled),
                    J = (0, r.useSelector)(h.getCurrentSmartTransactionsEnabled),
                    ee = (0, n.useContext)(T.MetaMetricsContext),
                    te = (0, n.useCallback)(() => {
                      j(!1), null == I || I();
                    }, [I]),
                    ae = (0, n.useCallback)(
                      (e) => {
                        null == C || C(e), G(e), te();
                      },
                      [C, te]
                    ),
                    ne = (0, n.useCallback)(() => {
                      F || (j(!0), null == k || k());
                    }, [F, k]),
                    re = (0, n.useRef)();
                  (0, n.useEffect)(() => {
                    re.current = O;
                  });
                  const oe = re.current;
                  (0, n.useEffect)(() => {
                    O && !(0, l.isEqual)(O, q) ? G(O) : oe && !O && G(null);
                  }, [O, q, oe]);
                  const se = X.blockExplorerUrl ?? E.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[Y] ?? null,
                    le = (0, _.getURLHostName)(se),
                    ie = {
                      onImportTokenCloseClick: () => {
                        W(!1), te();
                      },
                      onImportTokenClick: () => {
                        ee({
                          event: "Token Imported",
                          category: S.MetaMetricsEventCategory.Swaps,
                          sensitiveProperties: {
                            symbol: null == B ? void 0 : B.symbol,
                            address: null == B ? void 0 : B.address,
                            chain_id: Y,
                            is_hardware_wallet: K,
                            hardware_wallet_type: Q,
                            stx_enabled: z,
                            current_stx_enabled: J,
                            stx_user_opt_in: Z
                          }
                        }),
                          null == C || C(B),
                          G(B),
                          H(null),
                          te();
                      },
                      setIsImportTokenModalOpen: W,
                      tokenForImport: B
                    };
                  return n.default.createElement(
                    "div",
                    {
                      className: (0, s.default)("dropdown-search-list", A),
                      "data-testid": "dropdown-search-list",
                      onClick: ne,
                      onKeyUp: (e) => {
                        "Escape" === e.key ? te() : "Enter" === e.key && ne(e);
                      },
                      tabIndex: "0"
                    },
                    B && U && n.default.createElement(f.default, b({ isOpen: !0 }, ie)),
                    !F &&
                      n.default.createElement(
                        "div",
                        { className: (0, s.default)("dropdown-search-list__selector-closed-container", N) },
                        n.default.createElement(
                          "div",
                          { className: "dropdown-search-list__selector-closed" },
                          (null == q ? void 0 : q.iconUrl) &&
                            n.default.createElement(d.default, {
                              url: q.iconUrl,
                              className: "dropdown-search-list__selector-closed-icon",
                              name: null == q ? void 0 : q.symbol
                            }),
                          !(null != q && q.iconUrl) &&
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
                                  className: (0, s.default)("dropdown-search-list__closed-primary-label", {
                                    "dropdown-search-list__select-default": !(null != q && q.symbol)
                                  })
                                },
                                (null == q ? void 0 : q.symbol) || a
                              )
                            )
                          )
                        ),
                        n.default.createElement(p.Icon, { name: p.IconName.ArrowDown, size: p.IconSize.Xs, marginRight: 3 })
                      ),
                    F &&
                      n.default.createElement(
                        n.default.Fragment,
                        null,
                        n.default.createElement(u.default, {
                          itemsToSearch: x ? [] : t,
                          Placeholder: () =>
                            x
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
                                  se &&
                                    n.default.createElement(
                                      "div",
                                      {
                                        tabIndex: "0",
                                        className: "searchable-item-list__item searchable-item-list__item--add-token",
                                        key: "searchable-item-list-item-last"
                                      },
                                      n.default.createElement(m.default, {
                                        message: L("addTokenByContractAddress", [
                                          n.default.createElement(
                                            "a",
                                            {
                                              key: "dropdown-search-list__etherscan-link",
                                              onClick: () => {
                                                ee({
                                                  event: "Clicked Block Explorer Link",
                                                  category: S.MetaMetricsEventCategory.Swaps,
                                                  properties: {
                                                    link_type: "Token Tracker",
                                                    action: "Verify Contract Address",
                                                    block_explorer_domain: le
                                                  }
                                                }),
                                                  global.platform.openTab({ url: se });
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
                          fuseSearchKeys: o,
                          defaultToAll: v,
                          onClickItem: ae,
                          onOpenImportTokenModalClick: (e) => {
                            H(e), W(!0);
                          },
                          maxListItems: y,
                          className: (0, s.default)("dropdown-search-list__token-container", e, { "dropdown-search-list--open": F }),
                          hideRightLabels: P,
                          hideItemIf: R,
                          listContainerClassName: M,
                          shouldSearchForImports: D,
                          searchQuery: V,
                          setSearchQuery: $
                        }),
                        n.default.createElement("div", {
                          className: "dropdown-search-list__close-area",
                          "data-testid": "dropdown-search-list__close-area",
                          onClick: (e) => {
                            e.stopPropagation(), j(!1), null == I || I();
                          }
                        })
                      )
                  );
                }
                C.propTypes = {
                  itemsToSearch: o.default.array,
                  onSelect: o.default.func,
                  searchListClassName: o.default.string,
                  fuseSearchKeys: o.default.arrayOf(o.default.shape({ name: o.default.string, weight: o.default.number })),
                  defaultToAll: o.default.bool,
                  maxListItems: o.default.number,
                  startingItem: o.default.object,
                  onOpen: o.default.func,
                  onClose: o.default.func,
                  className: o.default.string,
                  externallySelectedItem: o.default.object,
                  loading: o.default.bool,
                  selectPlaceHolderText: o.default.string,
                  selectorClosedClassName: o.default.string,
                  hideRightLabels: o.default.bool,
                  hideItemIf: o.default.func,
                  listContainerClassName: o.default.string,
                  shouldSearchForImports: o.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/dropdown-search-list/dropdown-search-list.js" }
    ],
    [
      5891,
      { "./dropdown-search-list": 5890 },
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
      5892,
      {
        "../../../../shared/lib/transactions-controller-utils": 4778,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "../swaps.util": 5940,
        "bignumber.js": 2804,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
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
                    var a = f(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = m(e("prop-types")),
                  o = m(e("bignumber.js")),
                  s = m(e("classnames")),
                  l = e("../swaps.util"),
                  i = e("../../../../shared/lib/transactions-controller-utils"),
                  u = m(e("../../../components/ui/box")),
                  c = e("../../../helpers/constants/design-system"),
                  d = e("../../../components/component-library"),
                  p = e("../../../contexts/i18n");
                function m(e) {
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
                function g({
                  primaryTokenValue: e,
                  primaryTokenDecimals: t = 18,
                  primaryTokenSymbol: a,
                  secondaryTokenValue: r,
                  secondaryTokenDecimals: m = 18,
                  secondaryTokenSymbol: f,
                  boldSymbols: g = !0,
                  showIconForSwappingTokens: E = !0,
                  className: _,
                  onQuotesClick: h
                }) {
                  const [T, S] = (0, n.useState)(!0),
                    v = (0, n.useContext)(p.I18nContext),
                    y = (0, i.calcTokenAmount)(e, t),
                    b = (0, i.calcTokenAmount)(r, m),
                    C = new o.default(b).div(y).round(9).toString(10),
                    w = new o.default(y).div(b).round(9).toString(10),
                    k = T ? a : f,
                    I = T ? f : a,
                    A = T ? C : w;
                  let O,
                    N = "=";
                  new o.default(A, 10).lt("0.00000001", 10)
                    ? ((O = "0.000000001"), (N = "<"))
                    : (O = new o.default(A, 10).lt("0.000001", 10) ? A : (0, l.formatSwapsValueForDisplay)(A));
                  const x = h ? "exchange-rate-display__quote-rate" : "exchange-rate-display__quote-rate--no-link",
                    P = h ? c.TextColor.primaryDefault : c.TextColor.textDefault;
                  return n.default.createElement(
                    "div",
                    { className: (0, s.default)("exchange-rate-display", _) },
                    n.default.createElement(
                      u.default,
                      {
                        display: c.DISPLAY.FLEX,
                        justifyContent: c.JustifyContent.center,
                        alignItems: c.AlignItems.center,
                        onClick: h,
                        color: P,
                        className: x,
                        "data-testid": "exchange-rate-display-quote-rate"
                      },
                      n.default.createElement("span", null, "1"),
                      n.default.createElement(
                        "span",
                        {
                          className: (0, s.default)({ "exchange-rate-display__bold": g }),
                          "data-testid": "exchange-rate-display-base-symbol"
                        },
                        k
                      ),
                      n.default.createElement("span", null, N),
                      n.default.createElement("span", null, O),
                      n.default.createElement("span", { className: (0, s.default)({ "exchange-rate-display__bold": g }) }, I)
                    ),
                    E &&
                      n.default.createElement(d.Icon, {
                        name: d.IconName.SwapHorizontal,
                        onClick: () => {
                          S(!T);
                        },
                        color: c.IconColor.iconAlternative,
                        style: { cursor: "pointer" },
                        title: v("switch"),
                        "data-testid": "exchange-rate-display-switch"
                      })
                  );
                }
                g.propTypes = {
                  primaryTokenValue: r.default.oneOfType([r.default.string, r.default.instanceOf(o.default)]).isRequired,
                  primaryTokenDecimals: r.default.oneOfType([r.default.string, r.default.number]),
                  primaryTokenSymbol: r.default.string.isRequired,
                  secondaryTokenValue: r.default.oneOfType([r.default.string, r.default.instanceOf(o.default)]).isRequired,
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
      5893,
      { "./exchange-rate-display": 5892 },
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
      5894,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/network": 4759,
        "../../../components/app/transaction-detail-item/transaction-detail-item.component": 5153,
        "../../../components/app/transaction-detail/transaction-detail.component": 5155,
        "../../../components/component-library": 5242,
        "../../../components/ui/info-tooltip": 5431,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../selectors": 5958,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
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
                    var a = _(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = E(e("prop-types")),
                  s = e("../../../contexts/i18n"),
                  l = E(e("../../../components/ui/info-tooltip")),
                  i = e("../../../../shared/constants/network"),
                  u = E(e("../../../components/app/transaction-detail/transaction-detail.component")),
                  c = E(e("../../../components/app/transaction-detail-item/transaction-detail-item.component")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../contexts/metametrics"),
                  m = e("../../../../shared/constants/metametrics"),
                  f = e("../../../selectors"),
                  g = e("../../../components/component-library");
                function E(e) {
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
                const h = "https://community.metamask.io/t/what-is-gas-why-do-transactions-take-so-long/3172";
                function T({
                  primaryFee: e,
                  secondaryFee: t,
                  hideTokenApprovalRow: a,
                  tokenApprovalSourceTokenSymbol: o,
                  onTokenApprovalClick: E,
                  metaMaskFee: _,
                  numberOfQuotes: T,
                  onQuotesClick: S,
                  chainId: v
                }) {
                  const y = (0, n.useContext)(s.I18nContext),
                    b = (0, r.useSelector)(f.getUseCurrencyRateCheck),
                    C = (0, n.useContext)(p.MetaMetricsContext),
                    w = n.default.createElement(
                      "span",
                      { key: "fee-card-approve-symbol", className: "fee-card__bold" },
                      y("enableToken", [o])
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
                              y("transactionDetailGasHeading"),
                              n.default.createElement(l.default, {
                                position: "top",
                                contentText: n.default.createElement(
                                  n.default.Fragment,
                                  null,
                                  n.default.createElement(
                                    "p",
                                    { className: "fee-card__info-tooltip-paragraph" },
                                    y("swapGasFeesSummary", [
                                      (() => {
                                        switch (v) {
                                          case i.CHAIN_IDS.MAINNET:
                                            return y("networkNameEthereum");
                                          case i.CHAIN_IDS.BSC:
                                            return y("networkNameBSC");
                                          case i.CHAIN_IDS.POLYGON:
                                            return y("networkNamePolygon");
                                          case i.CHAIN_IDS.LOCALHOST:
                                            return y("networkNameTestnet");
                                          case i.CHAIN_IDS.GOERLI:
                                            return y("networkNameGoerli");
                                          case i.CHAIN_IDS.AVALANCHE:
                                            return y("networkNameAvalanche");
                                          case i.CHAIN_IDS.OPTIMISM:
                                            return y("networkNameOpMainnet");
                                          case i.CHAIN_IDS.ARBITRUM:
                                            return y("networkNameArbitrum");
                                          case i.CHAIN_IDS.ZKSYNC_ERA:
                                            return y("networkNameZkSyncEra");
                                          case i.CHAIN_IDS.LINEA_MAINNET:
                                            return y("networkNameLinea");
                                          default:
                                            throw new Error("This network is not supported for token swaps");
                                        }
                                      })()
                                    ])
                                  ),
                                  n.default.createElement("p", { className: "fee-card__info-tooltip-paragraph" }, y("swapGasFeesDetails")),
                                  n.default.createElement(
                                    "p",
                                    { className: "fee-card__info-tooltip-paragraph" },
                                    n.default.createElement(
                                      "a",
                                      {
                                        className: "fee-card__link",
                                        onClick: () => {
                                          C({ event: 'Clicked "Gas Fees: Learn More" Link', category: m.MetaMetricsEventCategory.Swaps }),
                                            global.platform.openTab({ url: h });
                                        },
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                      },
                                      y("swapGasFeesLearnMore")
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
                                  y("maxFee")
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
                              y("swapEnableTokenForSwapping", [w]),
                              n.default.createElement(l.default, {
                                position: "top",
                                contentText: y("swapEnableDescription", [o]),
                                containerClassName: "fee-card__info-tooltip-container"
                              })
                            )
                          ),
                          n.default.createElement("div", { className: "fee-card__link", onClick: () => E() }, y("swapEditLimit"))
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
                            T > 1 &&
                              n.default.createElement(
                                "span",
                                { onClick: S, className: "fee-card__quote-link-text" },
                                y("swapNQuotesWithDot", [T])
                              ),
                            y("swapIncludesMMFee", [_]),
                            n.default.createElement(l.default, {
                              position: "top",
                              contentText: y("swapMetaMaskFeeDescription", [_]),
                              wrapperClassName: "fee-card__info-tooltip-container"
                            })
                          )
                        )
                      )
                    )
                  );
                }
                T.propTypes = {
                  primaryFee: o.default.shape({ fee: o.default.string.isRequired, maxFee: o.default.string.isRequired }).isRequired,
                  secondaryFee: o.default.shape({ fee: o.default.string.isRequired, maxFee: o.default.string.isRequired }),
                  hideTokenApprovalRow: o.default.bool.isRequired,
                  tokenApprovalSourceTokenSymbol: o.default.string,
                  onTokenApprovalClick: o.default.func,
                  metaMaskFee: o.default.string.isRequired,
                  onQuotesClick: o.default.func.isRequired,
                  numberOfQuotes: o.default.number.isRequired,
                  chainId: o.default.string.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/fee-card/fee-card.js" }
    ],
    [
      5895,
      { "./fee-card": 5894 },
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
      5896,
      {
        "../../../components/component-library": 5242,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "prop-types": 4219,
        react: 4475
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = (n = e("prop-types")) && n.__esModule ? n : { default: n },
                  s = e("../../../contexts/i18n"),
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
                  isOpen: o
                }) {
                  const u = (0, r.useContext)(s.I18nContext);
                  return r.default.createElement(
                    i.Modal,
                    { isOpen: o, onClose: () => a(!1) },
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
                  onImportTokenCloseClick: o.default.func,
                  onImportTokenClick: o.default.func,
                  setIsImportTokenModalOpen: o.default.func,
                  tokenForImport: o.default.object,
                  isOpen: o.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/import-token/import-token.js" }
    ],
    [
      5897,
      { "./import-token": 5896 },
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
      5898,
      {
        "../../../shared/constants/metametrics": 4758,
        "../../../shared/constants/swaps": 4766,
        "../../../shared/constants/transaction": 4770,
        "../../../shared/lib/transactions-controller-utils": 4778,
        "../../components/component-library": 5242,
        "../../components/ui/box": 5373,
        "../../contexts/i18n": 5514,
        "../../contexts/metametrics": 5515,
        "../../ducks/swaps/swaps": 5533,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/constants/routes": 5542,
        "../../helpers/higher-order-components/feature-toggled-route": 5551,
        "../../hooks/useGasFeeEstimates": 5601,
        "../../selectors": 5958,
        "../../selectors/selectors": 5961,
        "../../store/actions": 5965,
        "./awaiting-signatures": 5875,
        "./awaiting-swap": 5878,
        "./build-quote": 5883,
        "./loading-swaps-quotes": 5901,
        "./notification-page/notification-page": 5906,
        "./prepare-swap-page/prepare-swap-page": 5907,
        "./smart-transaction-status": 5931,
        "./swaps.util": 5940,
        "./view-quote": 5944,
        classnames: 2952,
        lodash: 4071,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    var e, t, a, R;
                    const M = (0, n.useContext)(i.I18nContext),
                      D = (0, o.useHistory)(),
                      L = (0, r.useDispatch)(),
                      F = (0, n.useContext)(T.MetaMetricsContext),
                      { pathname: j } = (0, o.useLocation)(),
                      U = j === p.AWAITING_SWAP_ROUTE,
                      W = j === p.AWAITING_SIGNATURES_ROUTE,
                      q = j === p.SWAPS_ERROR_ROUTE,
                      G = j === p.LOADING_QUOTES_ROUTE,
                      B = j === p.SMART_TRANSACTION_STATUS_ROUTE,
                      H = j === p.VIEW_QUOTE_ROUTE,
                      V = j === p.PREPARE_SWAP_ROUTE,
                      [$, K] = (0, n.useState)(!1),
                      Q = (0, r.useSelector)(c.getFetchParams, s.isEqual),
                      { destinationTokenInfo: Y = {} } = (null == Q ? void 0 : Q.metaData) || {},
                      X = (0, r.useSelector)(c.getBackgroundSwapRouteState),
                      Z = (0, r.useSelector)(u.getSelectedAccount, r.shallowEqual),
                      z = (0, r.useSelector)(c.getQuotes, s.isEqual),
                      J = (0, r.useSelector)(c.getLatestAddedTokenTo, s.isEqual),
                      ee = (0, r.useSelector)(d.getCurrentNetworkTransactions, r.shallowEqual),
                      te = (0, r.useSelector)(c.getTradeTxId),
                      ae = (0, r.useSelector)(c.getApproveTxId),
                      ne = (0, r.useSelector)(c.getAggregatorMetadata, r.shallowEqual),
                      re = (0, r.useSelector)(c.getFetchingQuotes);
                    let oe = (0, r.useSelector)(c.getSwapsErrorKey);
                    const se = (0, r.useSelector)(c.getSwapsFeatureIsLive),
                      le = (0, r.useSelector)(u.getCurrentChainId),
                      ie = (0, r.useSelector)(u.getIsSwapsChain),
                      ue = (0, r.useSelector)(d.checkNetworkAndAccountSupports1559),
                      ce = (0, r.useSelector)(u.getTokenList, s.isEqual),
                      de = (0, s.shuffle)(Object.values(ce)),
                      pe = (0, r.useSelector)(c.getReviewSwapClickedTimestamp),
                      me = (0, r.useSelector)(c.getPendingSmartTransactions),
                      fe = Boolean(pe),
                      ge = (0, r.useSelector)(c.getSmartTransactionsOptInStatus),
                      Ee = (0, r.useSelector)(c.getSmartTransactionsEnabled),
                      _e = (0, r.useSelector)(c.getCurrentSmartTransactionsEnabled),
                      he = (0, r.useSelector)(c.getSwapRedesignEnabled),
                      Te = (0, r.useSelector)(c.getCurrentSmartTransactionsError);
                    (0, n.useEffect)(() => {
                      ie ||
                        (async () => {
                          await L((0, c.prepareToLeaveSwaps)()), D.push(p.DEFAULT_ROUTE);
                        })();
                    }, [ie, L, D]),
                      (0, g.useGasFeeEstimates)();
                    const { balance: Se, address: ve } = Z,
                      ye = ae && ee.find(({ id: e }) => ae === e),
                      be = te && ee.find(({ id: e }) => te === e),
                      Ce =
                        (null == be ? void 0 : be.txReceipt) &&
                        (0, S.getSwapsTokensReceivedFromTxMeta)(
                          null == Y ? void 0 : Y.symbol,
                          be,
                          null == Y ? void 0 : Y.address,
                          ve,
                          null == Y ? void 0 : Y.decimals,
                          ye,
                          le
                        ),
                      we = (null == be ? void 0 : be.status) === h.TransactionStatus.confirmed,
                      ke =
                        (null == ye ? void 0 : ye.status) === h.TransactionStatus.failed ||
                        "0x0" === (null == ye || null === (e = ye.txReceipt) || void 0 === e ? void 0 : e.status),
                      Ie =
                        (null == be ? void 0 : be.status) === h.TransactionStatus.failed ||
                        "0x0" === (null == be || null === (t = be.txReceipt) || void 0 === t ? void 0 : t.status),
                      Ae = ke || Ie;
                    Ae && oe !== m.CONTRACT_DATA_DISABLED_ERROR && (oe = m.SWAP_FAILED_ERROR);
                    const Oe = (0, n.useRef)();
                    (0, n.useEffect)(() => {
                      Oe.current = () => {
                        !J || (U && !Ae) || L((0, f.ignoreTokens)({ tokensToIgnore: J, dontShowLoadingIndicator: !0 }));
                      };
                    }, [Ae, L, J, Y, Q, U]),
                      (0, n.useEffect)(
                        () => () => {
                          Oe.current();
                        },
                        []
                      ),
                      (0, n.useEffect)(
                        () =>
                          ie
                            ? ((0, C.fetchTokens)(le)
                                .then((e) => {
                                  L((0, f.setSwapsTokens)(e));
                                })
                                .catch((e) => console.error(e)),
                              (0, C.fetchTopAssets)(le).then((e) => {
                                L((0, c.setTopAssets)(e));
                              }),
                              (0, C.fetchAggregatorMetadata)(le).then((e) => {
                                L((0, c.setAggregatorMetadata)(e));
                              }),
                              ue || L((0, c.fetchAndSetSwapsGasPriceInfo)(le)),
                              () => {
                                L((0, c.prepareToLeaveSwaps)());
                              })
                            : undefined,
                        [L, le, ue, ie]
                      );
                    const Ne = (0, r.useSelector)(u.isHardwareWallet),
                      xe = (0, r.useSelector)(u.getHardwareWalletType),
                      Pe = (0, n.useRef)();
                    (0, n.useEffect)(() => {
                      Pe.current = () => {
                        var e, t;
                        F({
                          event: "Exited Swaps",
                          category: _.MetaMetricsEventCategory.Swaps,
                          sensitiveProperties: {
                            token_from: null == Q || null === (e = Q.sourceTokenInfo) || void 0 === e ? void 0 : e.symbol,
                            token_from_amount: null == Q ? void 0 : Q.value,
                            request_type: null == Q ? void 0 : Q.balanceError,
                            token_to: null == Q || null === (t = Q.destinationTokenInfo) || void 0 === t ? void 0 : t.symbol,
                            slippage: null == Q ? void 0 : Q.slippage,
                            custom_slippage: 2 !== (null == Q ? void 0 : Q.slippage),
                            current_screen: j.match(/\/swaps\/(.+)/u)[1],
                            is_hardware_wallet: Ne,
                            hardware_wallet_type: xe,
                            stx_enabled: Ee,
                            current_stx_enabled: _e,
                            stx_user_opt_in: ge
                          }
                        });
                      };
                    }),
                      (0, n.useEffect)(
                        () => (
                          (async () => {
                            await L((0, c.fetchSwapsLivenessAndFeatureFlags)());
                          })(),
                          () => {
                            Pe.current();
                          }
                        ),
                        [L]
                      ),
                      (0, n.useEffect)(() => {
                        oe && !q && fe && D.push(p.SWAPS_ERROR_ROUTE);
                      }, [D, oe, q, fe]);
                    const Re = (0, n.useRef)();
                    (0, n.useEffect)(() => {
                      const e = () => (Oe.current(), G && L((0, c.prepareToLeaveSwaps)()), null);
                      return (
                        G && !Re.current && ((Re.current = !0), window.addEventListener("beforeunload", e)),
                        () => window.removeEventListener("beforeunload", e)
                      );
                    }, [L, G]);
                    const Me = (0, n.useCallback)(() => {
                      var e, t;
                      F({
                        event: "Error Smart Transactions",
                        category: _.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: {
                          token_from: null == Q || null === (e = Q.sourceTokenInfo) || void 0 === e ? void 0 : e.symbol,
                          token_from_amount: null == Q ? void 0 : Q.value,
                          request_type: null == Q ? void 0 : Q.balanceError,
                          token_to: null == Q || null === (t = Q.destinationTokenInfo) || void 0 === t ? void 0 : t.symbol,
                          slippage: null == Q ? void 0 : Q.slippage,
                          custom_slippage: 2 !== (null == Q ? void 0 : Q.slippage),
                          current_screen: j.match(/\/swaps\/(.+)/u)[1],
                          is_hardware_wallet: Ne,
                          hardware_wallet_type: xe,
                          stx_enabled: Ee,
                          current_stx_enabled: _e,
                          stx_user_opt_in: ge,
                          stx_error: Te
                        }
                      });
                    }, [
                      Te,
                      _e,
                      F,
                      null == Q ? void 0 : Q.balanceError,
                      null == Q || null === (a = Q.destinationTokenInfo) || void 0 === a ? void 0 : a.symbol,
                      null == Q ? void 0 : Q.slippage,
                      null == Q || null === (R = Q.sourceTokenInfo) || void 0 === R ? void 0 : R.symbol,
                      null == Q ? void 0 : Q.value,
                      xe,
                      Ne,
                      j,
                      Ee,
                      ge
                    ]);
                    if (
                      ((0, n.useEffect)(() => {
                        Te && !$ && (K(!0), Me());
                      }, [Te, Me, $]),
                      !ie)
                    )
                      return n.default.createElement(n.default.Fragment, null);
                    const De = async () => {
                      Oe.current(),
                        D.push({ pathname: p.DEFAULT_ROUTE, state: { stayOnHomePage: !0 } }),
                        L((0, c.clearSwapsState)()),
                        await L((0, f.resetBackgroundSwapsState)());
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
                          !he &&
                            n.default.createElement(
                              "div",
                              {
                                className: "swaps__header-edit",
                                onClick: async () => {
                                  await L((0, c.navigateBackToBuildQuote)(D));
                                }
                              },
                              H && M("edit")
                            ),
                          he &&
                            n.default.createElement(
                              y.default,
                              {
                                display: b.DISPLAY.FLEX,
                                justifyContent: b.JustifyContent.center,
                                marginLeft: 4,
                                width: b.FRACTIONS.ONE_TWELFTH,
                                tabIndex: "0",
                                onKeyUp: (e) => {
                                  "Enter" === e.key && De();
                                }
                              },
                              !U &&
                                !W &&
                                !B &&
                                n.default.createElement(v.Icon, {
                                  name: v.IconName.Arrow2Left,
                                  size: v.IconSize.Lg,
                                  color: b.IconColor.iconAlternative,
                                  onClick: De,
                                  style: { cursor: "pointer" },
                                  title: M("cancel")
                                })
                            ),
                          n.default.createElement("div", { className: "swaps__title" }, M("swap")),
                          !he &&
                            n.default.createElement(
                              "div",
                              {
                                className: "swaps__header-cancel",
                                onClick: async () => {
                                  Oe.current(),
                                    L((0, c.clearSwapsState)()),
                                    await L((0, f.resetBackgroundSwapsState)()),
                                    D.push(p.DEFAULT_ROUTE);
                                }
                              },
                              !U && !W && !B && M("cancel")
                            ),
                          he &&
                            n.default.createElement(
                              y.default,
                              {
                                display: b.DISPLAY.FLEX,
                                justifyContent: b.JustifyContent.center,
                                marginRight: 4,
                                width: b.FRACTIONS.ONE_TWELFTH,
                                tabIndex: "0",
                                onKeyUp: (e) => {
                                  "Enter" === e.key && L((0, c.setTransactionSettingsOpened)(!0));
                                }
                              },
                              V &&
                                n.default.createElement(v.Icon, {
                                  name: v.IconName.Setting,
                                  size: v.IconSize.Lg,
                                  color: b.IconColor.iconAlternative,
                                  onClick: () => {
                                    L((0, c.setTransactionSettingsOpened)(!0));
                                  },
                                  style: { cursor: "pointer" },
                                  title: M("transactionSettings")
                                })
                            )
                        ),
                        n.default.createElement(
                          "div",
                          { className: (0, l.default)("swaps__content", { "swaps__content--redesign-enabled": he }) },
                          n.default.createElement(
                            o.Switch,
                            null,
                            n.default.createElement(E.default, {
                              redirectRoute: p.SWAPS_MAINTENANCE_ROUTE,
                              flag: se,
                              path: p.BUILD_QUOTE_ROUTE,
                              exact: !0,
                              render: () =>
                                he
                                  ? n.default.createElement(o.Redirect, { to: { pathname: p.PREPARE_SWAP_ROUTE } })
                                  : be && !Ae
                                  ? n.default.createElement(o.Redirect, { to: { pathname: p.AWAITING_SWAP_ROUTE } })
                                  : be && X
                                  ? n.default.createElement(o.Redirect, { to: { pathname: p.SWAPS_ERROR_ROUTE } })
                                  : "loading" === X && ne
                                  ? n.default.createElement(o.Redirect, { to: { pathname: p.LOADING_QUOTES_ROUTE } })
                                  : n.default.createElement(O.default, {
                                      ethBalance: Se,
                                      selectedAccountAddress: ve,
                                      shuffledTokensList: de
                                    })
                            }),
                            n.default.createElement(E.default, {
                              redirectRoute: p.SWAPS_MAINTENANCE_ROUTE,
                              flag: se,
                              path: p.PREPARE_SWAP_ROUTE,
                              exact: !0,
                              render: () =>
                                he
                                  ? n.default.createElement(N.default, {
                                      ethBalance: Se,
                                      selectedAccountAddress: ve,
                                      shuffledTokensList: de
                                    })
                                  : n.default.createElement(o.Redirect, { to: { pathname: p.BUILD_QUOTE_ROUTE } })
                            }),
                            n.default.createElement(E.default, {
                              redirectRoute: p.SWAPS_MAINTENANCE_ROUTE,
                              flag: se,
                              path: p.VIEW_QUOTE_ROUTE,
                              exact: !0,
                              render: () =>
                                me.length > 0 && "smartTransactionStatus" === X
                                  ? n.default.createElement(o.Redirect, { to: { pathname: p.SMART_TRANSACTION_STATUS_ROUTE } })
                                  : he
                                  ? n.default.createElement(o.Redirect, { to: { pathname: p.PREPARE_SWAP_ROUTE } })
                                  : Object.values(z).length
                                  ? n.default.createElement(P.default, { numberOfQuotes: Object.values(z).length })
                                  : Q
                                  ? n.default.createElement(o.Redirect, { to: { pathname: p.SWAPS_ERROR_ROUTE } })
                                  : n.default.createElement(o.Redirect, { to: { pathname: p.BUILD_QUOTE_ROUTE } })
                            }),
                            n.default.createElement(o.Route, {
                              path: p.SWAPS_ERROR_ROUTE,
                              exact: !0,
                              render: () =>
                                oe
                                  ? n.default.createElement(I.default, {
                                      swapComplete: !1,
                                      errorKey: oe,
                                      txHash: null == be ? void 0 : be.hash,
                                      txId: null == be ? void 0 : be.id,
                                      submittedTime: null == be ? void 0 : be.submittedTime
                                    })
                                  : n.default.createElement(o.Redirect, { to: { pathname: p.BUILD_QUOTE_ROUTE } })
                            }),
                            n.default.createElement(o.Route, {
                              path: p.SWAPS_NOTIFICATION_ROUTE,
                              exact: !0,
                              render: () =>
                                oe
                                  ? n.default.createElement(x.default, { notificationKey: oe })
                                  : n.default.createElement(o.Redirect, { to: { pathname: p.PREPARE_SWAP_ROUTE } })
                            }),
                            n.default.createElement(E.default, {
                              redirectRoute: p.SWAPS_MAINTENANCE_ROUTE,
                              flag: se,
                              path: p.LOADING_QUOTES_ROUTE,
                              exact: !0,
                              render: () =>
                                ne
                                  ? n.default.createElement(A.default, {
                                      loadingComplete: !re && Boolean(Object.values(z).length),
                                      onDone: async () => {
                                        await L((0, f.setBackgroundSwapRouteState)("")),
                                          oe === m.ERROR_FETCHING_QUOTES || oe === m.QUOTES_NOT_AVAILABLE_ERROR
                                            ? (L((0, f.setSwapsErrorKey)(m.QUOTES_NOT_AVAILABLE_ERROR)), D.push(p.SWAPS_ERROR_ROUTE))
                                            : D.push(p.VIEW_QUOTE_ROUTE);
                                      },
                                      aggregatorMetadata: ne
                                    })
                                  : n.default.createElement(o.Redirect, { to: { pathname: p.BUILD_QUOTE_ROUTE } })
                            }),
                            n.default.createElement(o.Route, {
                              path: p.SWAPS_MAINTENANCE_ROUTE,
                              exact: !0,
                              render: () =>
                                !1 === se
                                  ? n.default.createElement(I.default, { errorKey: m.OFFLINE_FOR_MAINTENANCE })
                                  : n.default.createElement(o.Redirect, { to: { pathname: p.BUILD_QUOTE_ROUTE } })
                            }),
                            n.default.createElement(o.Route, {
                              path: p.AWAITING_SIGNATURES_ROUTE,
                              exact: !0,
                              render: () => n.default.createElement(w.default, null)
                            }),
                            n.default.createElement(o.Route, {
                              path: p.SMART_TRANSACTION_STATUS_ROUTE,
                              exact: !0,
                              render: () => n.default.createElement(k.default, { txId: null == be ? void 0 : be.id })
                            }),
                            n.default.createElement(o.Route, {
                              path: p.AWAITING_SWAP_ROUTE,
                              exact: !0,
                              render: () =>
                                "awaiting" === X || be
                                  ? n.default.createElement(I.default, {
                                      swapComplete: we,
                                      txHash: null == be ? void 0 : be.hash,
                                      tokensReceived: Ce,
                                      txId: null == be ? void 0 : be.id,
                                      submittingSwap: "awaiting" === X && !(ae || te)
                                    })
                                  : n.default.createElement(o.Redirect, { to: { pathname: p.DEFAULT_ROUTE } })
                            })
                          )
                        )
                      )
                    );
                  });
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = M(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = e("lodash"),
                  l = R(e("classnames")),
                  i = e("../../contexts/i18n"),
                  u = e("../../selectors/selectors"),
                  c = e("../../ducks/swaps/swaps"),
                  d = e("../../selectors"),
                  p = e("../../helpers/constants/routes"),
                  m = e("../../../shared/constants/swaps"),
                  f = e("../../store/actions"),
                  g = e("../../hooks/useGasFeeEstimates"),
                  E = R(e("../../helpers/higher-order-components/feature-toggled-route")),
                  _ = e("../../../shared/constants/metametrics"),
                  h = e("../../../shared/constants/transaction"),
                  T = e("../../contexts/metametrics"),
                  S = e("../../../shared/lib/transactions-controller-utils"),
                  v = e("../../components/component-library"),
                  y = R(e("../../components/ui/box")),
                  b = e("../../helpers/constants/design-system"),
                  C = e("./swaps.util"),
                  w = R(e("./awaiting-signatures")),
                  k = R(e("./smart-transaction-status")),
                  I = R(e("./awaiting-swap")),
                  A = R(e("./loading-swaps-quotes")),
                  O = R(e("./build-quote")),
                  N = R(e("./prepare-swap-page/prepare-swap-page")),
                  x = R(e("./notification-page/notification-page")),
                  P = R(e("./view-quote"));
                function R(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function M(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (M = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/index.js" }
    ],
    [
      5899,
      {
        "../../../../shared/modules/hexstring-utils": 4788,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "../../../selectors/selectors": 5961,
        "../searchable-item-list/item-list": 5914,
        "../swaps.util": 5940,
        lodash: 4071,
        loglevel: 4083,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
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
                    var a = _(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = E(e("prop-types")),
                  s = e("lodash"),
                  l = E(e("loglevel")),
                  i = E(e("../../../components/ui/box")),
                  u = e("../../../helpers/constants/design-system"),
                  c = e("../../../components/component-library"),
                  d = E(e("../searchable-item-list/item-list")),
                  p = e("../../../../shared/modules/hexstring-utils"),
                  m = e("../../../contexts/i18n"),
                  f = e("../swaps.util"),
                  g = e("../../../selectors/selectors");
                function E(e) {
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
                let h;
                function T({
                  itemsToSearch: e = [],
                  listTitle: t,
                  maxListItems: a,
                  onClickItem: o,
                  onOpenImportTokenModalClick: E,
                  shouldSearchForImports: _,
                  Placeholder: T,
                  hideRightLabels: S,
                  hideItemIf: v,
                  listContainerClassName: y,
                  searchQuery: b,
                  setSearchQuery: C
                }) {
                  const w = (0, n.useRef)(),
                    k = (0, n.useContext)(m.I18nContext),
                    [I, A] = (0, n.useState)(e),
                    O = (0, r.useSelector)(g.getCurrentChainId),
                    N = async (t) => {
                      C(t),
                        h && clearTimeout(h),
                        (h = setTimeout(async () => {
                          h = null;
                          const a = t.trim(),
                            n = a.toUpperCase(),
                            r = a.toLowerCase();
                          if (!a) return void A(e);
                          const o = (0, p.isValidHexAddress)(a);
                          let i = [];
                          if (o) {
                            const t = e.find((e) => e.address === r);
                            t && i.push(t);
                          } else
                            i = (0, s.filter)(e, function (e) {
                              return e.symbol.includes(n);
                            });
                          const u = "" === t ? e : i;
                          _ && 0 === u.length && o
                            ? await (async (e) => {
                                try {
                                  const t = await (0, f.fetchToken)(e, O);
                                  if (t) return (t.primaryLabel = t.symbol), (t.secondaryLabel = t.name), (t.notImported = !0), void A([t]);
                                } catch (e) {
                                  l.default.error("Token not found, show 0 results.", e);
                                }
                                A([]);
                              })(a)
                            : A(u);
                        }, 350));
                    };
                  (0, n.useEffect)(() => {
                    N(b);
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
                        onChange: (e) => N(e.target.value),
                        clearButtonOnClick: () => {
                          C("");
                        },
                        value: b,
                        placeholder: k("enterTokenNameOrAddress"),
                        inputProps: { marginRight: 0 },
                        className: "list-with-search__text-search",
                        autoFocus: !0,
                        tabIndex: "0"
                      })
                    ),
                    (null == I ? void 0 : I.length) > 0 &&
                      n.default.createElement(d.default, {
                        searchQuery: b,
                        results: I,
                        onClickItem: o,
                        onOpenImportTokenModalClick: E,
                        Placeholder: T,
                        listTitle: t,
                        maxListItems: a,
                        containerRef: w,
                        hideRightLabels: S,
                        hideItemIf: v,
                        listContainerClassName: y
                      }),
                    0 === (null == I ? void 0 : I.length) &&
                      n.default.createElement(
                        i.default,
                        {
                          marginTop: 1,
                          marginBottom: 5,
                          display: u.Display.Flex,
                          justifyContent: u.JustifyContent.center,
                          alignItems: u.AlignItems.center
                        },
                        n.default.createElement(c.Text, { variant: u.TextVariant.bodyMd, as: "h6" }, k("swapNoTokensAvailable", [b]))
                      )
                  );
                }
                T.propTypes = {
                  itemsToSearch: o.default.array,
                  onClickItem: o.default.func,
                  onOpenImportTokenModalClick: o.default.func,
                  Placeholder: o.default.func,
                  listTitle: o.default.string,
                  maxListItems: o.default.number,
                  hideRightLabels: o.default.bool,
                  shouldSearchForImports: o.default.bool,
                  hideItemIf: o.default.func,
                  listContainerClassName: o.default.string,
                  searchQuery: o.default.string,
                  setSearchQuery: o.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/list-with-search/list-with-search.js" }
    ],
    [
      590,
      { "./AccordionDetails": 589, "@babel/runtime/helpers/interopRequireDefault": 220 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var r = n(e("./AccordionDetails"));
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/AccordionDetails/index.js" }
    ],
    [
      5900,
      { react: 4475 },
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
      5901,
      { "./loading-swaps-quotes": 5902 },
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
      5902,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/ui/mascot": 5445,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/swaps/swaps": 5533,
        "../../../selectors/selectors": 5961,
        "../swaps-footer": 5938,
        "./background-animation": 5900,
        events: 3331,
        lodash: 4071,
        "lodash/isEqual": 4057,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = S);
                var n = T(e("events")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = h(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("react-redux"),
                  s = T(e("prop-types")),
                  l = e("lodash"),
                  i = e("react-router-dom"),
                  u = T(e("lodash/isEqual")),
                  c = e("../../../ducks/swaps/swaps"),
                  d = e("../../../selectors/selectors"),
                  p = e("../../../contexts/i18n"),
                  m = e("../../../contexts/metametrics"),
                  f = T(e("../../../components/ui/mascot")),
                  g = e("../../../../shared/constants/metametrics"),
                  E = T(e("../swaps-footer")),
                  _ = T(e("./background-animation"));
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (h = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function T(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function S({ aggregatorMetadata: e, loadingComplete: t, onDone: a }) {
                  var s, h;
                  const T = (0, r.useContext)(p.I18nContext),
                    S = (0, r.useContext)(m.MetaMetricsContext),
                    v = (0, o.useDispatch)(),
                    y = (0, i.useHistory)(),
                    b = (0, r.useRef)(new n.default()),
                    C = (0, o.useSelector)(c.getFetchParams, u.default),
                    w = (0, o.useSelector)(c.getQuotesFetchStartTime),
                    k = (0, o.useSelector)(d.isHardwareWallet),
                    I = (0, o.useSelector)(d.getHardwareWalletType),
                    A = (0, o.useSelector)(c.getSmartTransactionsOptInStatus),
                    O = (0, o.useSelector)(c.getSmartTransactionsEnabled),
                    N = (0, o.useSelector)(c.getCurrentSmartTransactionsEnabled),
                    x = {
                      event: "Quotes Request Cancelled",
                      category: g.MetaMetricsEventCategory.Swaps,
                      sensitiveProperties: {
                        token_from: null == C || null === (s = C.sourceTokenInfo) || void 0 === s ? void 0 : s.symbol,
                        token_from_amount: null == C ? void 0 : C.value,
                        request_type: null == C ? void 0 : C.balanceError,
                        token_to: null == C || null === (h = C.destinationTokenInfo) || void 0 === h ? void 0 : h.symbol,
                        slippage: null == C ? void 0 : C.slippage,
                        custom_slippage: 2 !== (null == C ? void 0 : C.slippage),
                        response_time: Date.now() - w,
                        is_hardware_wallet: k,
                        hardware_wallet_type: I,
                        stx_enabled: O,
                        current_stx_enabled: N,
                        stx_user_opt_in: A
                      }
                    },
                    [P] = (0, r.useState)(() => (0, l.shuffle)(Object.keys(e))),
                    R = P.length,
                    M = (0, r.useRef)(),
                    D = M.current,
                    [L, F] = (0, r.useState)(0),
                    [j, U] = (0, r.useState)(null);
                  return (
                    (0, r.useEffect)(() => {
                      let e;
                      e = t ? 20 : 500 + Math.floor(1500 * Math.random());
                      const n = setTimeout(() => {
                        L < R ? F(L + 1) : L === R && t && a();
                      }, e);
                      return function () {
                        clearTimeout(n);
                      };
                    }, [L, t, a, R]),
                    (0, r.useEffect)(() => {
                      if (D) {
                        const { top: e, left: t, width: a, height: n } = D.getBoundingClientRect();
                        U({ x: t + a / 2, y: e + n / 2 });
                      }
                    }, [D]),
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
                            r.default.createElement("span", null, T("swapFetchingQuoteNofN", [Math.min(L + 1, R), R]))
                          ),
                          r.default.createElement(
                            "div",
                            { className: "loading-swaps-quotes__quote-name-check" },
                            r.default.createElement("span", null, T("swapFetchingQuotes"))
                          ),
                          r.default.createElement(
                            "div",
                            { className: "loading-swaps-quotes__loading-bar-container" },
                            r.default.createElement("div", {
                              className: "loading-swaps-quotes__loading-bar",
                              style: { width: (100 / R) * L + "%" }
                            })
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "loading-swaps-quotes__animation" },
                          r.default.createElement(_.default, null),
                          r.default.createElement(
                            "div",
                            { className: "loading-swaps-quotes__mascot-container", ref: M },
                            r.default.createElement(f.default, {
                              animationEventEmitter: b.current,
                              width: "90",
                              height: "90",
                              lookAtTarget: j
                            })
                          )
                        )
                      ),
                      r.default.createElement(E.default, {
                        submitText: T("back"),
                        onSubmit: async () => {
                          S(x), await v((0, c.navigateBackToBuildQuote)(y));
                        },
                        hideCancel: !0
                      })
                    )
                  );
                }
                S.propTypes = {
                  loadingComplete: s.default.bool.isRequired,
                  onDone: s.default.func.isRequired,
                  aggregatorMetadata: s.default.objectOf(
                    s.default.shape({ title: s.default.string, color: s.default.string, icon: s.default.string })
                  )
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/loading-swaps-quotes/loading-swaps-quotes.js" }
    ],
    [
      5903,
      { "./main-quote-summary": 5904 },
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
      5904,
      {
        "../../../../shared/lib/transactions-controller-utils": 4778,
        "../../../components/ui/tooltip": 5502,
        "../../../components/ui/url-icon": 5511,
        "../exchange-rate-display": 5893,
        "../swaps.util": 5940,
        "bignumber.js": 2804,
        "prop-types": 4219,
        react: 4475
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
                  o = d(e("bignumber.js")),
                  s = d(e("../../../components/ui/tooltip")),
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
                  destinationValue: o,
                  destinationSymbol: d,
                  destinationDecimals: p,
                  destinationIconUrl: m
                }) {
                  const f = (0, c.toPrecisionWithoutTrailingZeros)((0, c.calcTokenAmount)(e, a).toString(10), 12),
                    g = (0, c.calcTokenAmount)(o, p),
                    E = (0, u.formatSwapsValueForDisplay)(g),
                    _ = E.match(/\d+/gu).join("").length,
                    [h, T] = (S = _) <= 9 ? [50, 48] : S <= 13 ? [40, 32] : [26, 15];
                  var S;
                  let v = E;
                  return (
                    _ > 20 && (v = `${E.slice(0, 20)}...`),
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
                              { className: "main-quote-summary__source-row-value", title: (0, u.formatSwapsValueForDisplay)(f) },
                              (0, u.formatSwapsValueForDisplay)(f)
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
                              url: m,
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
                              s.default,
                              { interactive: !0, position: "bottom", html: E, disabled: v === E },
                              n.default.createElement(
                                "span",
                                { className: "main-quote-summary__quote-large-number", style: { fontSize: h, lineHeight: `${T}px` } },
                                `${v}`
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
                            secondaryTokenValue: o,
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
                  sourceValue: r.default.oneOfType([r.default.string, r.default.instanceOf(o.default)]).isRequired,
                  sourceDecimals: r.default.oneOfType([r.default.string, r.default.number]),
                  sourceSymbol: r.default.string.isRequired,
                  destinationValue: r.default.oneOfType([r.default.string, r.default.instanceOf(o.default)]).isRequired,
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
      5905,
      { "../../../components/ui/mascot": 5445, events: 3331, react: 4475 },
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
                        r.default.createElement(o.default, { animationEventEmitter: e.current, width: "42", height: "42", followMouse: !1 })
                      )
                    );
                  });
                var n = l(e("events")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = s(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, o, l) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = l(e("../../../components/ui/mascot"));
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (s = function (e) {
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
      5906,
      {
        "../../../../shared/constants/swaps": 4766,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../store/actions": 5965,
        "../swaps-footer": 5938,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
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
                    var a = E(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = g(e("prop-types")),
                  l = e("../../../contexts/i18n"),
                  i = e("../../../store/actions"),
                  u = g(e("../../../components/ui/box")),
                  c = e("../../../helpers/constants/design-system"),
                  d = e("../../../components/component-library"),
                  p = e("../../../helpers/constants/routes"),
                  m = g(e("../swaps-footer")),
                  f = e("../../../../shared/constants/swaps");
                function g(e) {
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
                function _({ notificationKey: e }) {
                  const t = (0, n.useContext)(l.I18nContext),
                    a = (0, o.useHistory)(),
                    s = (0, r.useDispatch)();
                  let g = "",
                    E = "",
                    _ = "";
                  return (
                    e === f.QUOTES_EXPIRED_ERROR &&
                      ((g = t("swapAreYouStillThere")), (E = t("swapAreYouStillThereDescription")), (_ = t("swapShowLatestQuotes"))),
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
                        n.default.createElement(d.Text, { variant: c.TextVariant.bodyMd, as: "h6" }, E)
                      ),
                      n.default.createElement(m.default, {
                        onSubmit: async () => {
                          await s((0, i.setSwapsErrorKey)("")), a.push(p.PREPARE_SWAP_ROUTE);
                        },
                        submitText: _,
                        hideCancel: !0,
                        showTermsOfService: !0
                      })
                    )
                  );
                }
                _.propTypes = { notificationKey: s.default.oneOf([f.QUOTES_EXPIRED_ERROR]) };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/notification-page/notification-page.js" }
    ],
    [
      5907,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/swaps": 4766,
        "../../../../shared/lib/swaps-utils": 4775,
        "../../../../shared/lib/token-util.ts": 4777,
        "../../../../shared/lib/transactions-controller-utils": 4778,
        "../../../../shared/modules/conversion.utils": 4784,
        "../../../../shared/modules/string-utils": 4797,
        "../../../../shared/modules/swaps.utils": 4798,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useEqualityCheck": 5599,
        "../../../hooks/useEthFiatAmount": 5600,
        "../../../hooks/usePrevious": 5608,
        "../../../hooks/useTokenFiatAmount": 5621,
        "../../../hooks/useTokenTracker": 5622,
        "../../../hooks/useTokensToSearch": 5623,
        "../../../selectors": 5958,
        "../../../store/actionConstants": 5964,
        "../../../store/actions": 5965,
        "../import-token": 5897,
        "../list-with-search/list-with-search": 5899,
        "../selected-token/selected-token": 5926,
        "../swaps-banner-alert/swaps-banner-alert": 5937,
        "../swaps-footer": 5938,
        "../swaps.util": 5940,
        "../transaction-settings/transaction-settings": 5941,
        "./quotes-loading-animation": 5908,
        "./review-quote": 5909,
        "./smart-transactions-popover": 5911,
        "@metamask/etherscan-link": 1370,
        "bignumber.js": 2804,
        classnames: 2952,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = Z);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = Q(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = K(e("bignumber.js")),
                  o = K(e("prop-types")),
                  s = e("react-redux"),
                  l = e("lodash"),
                  i = e("react-router-dom"),
                  u = e("@metamask/etherscan-link"),
                  c = K(e("classnames")),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../hooks/useTokensToSearch"),
                  m = e("../../../hooks/useEqualityCheck"),
                  f = e("../../../contexts/i18n"),
                  g = e("../../../ducks/metamask/metamask"),
                  E = K(e("../../../components/ui/box")),
                  _ = e("../../../helpers/constants/design-system"),
                  h = e("../../../ducks/swaps/swaps"),
                  T = e("../../../selectors"),
                  S = e("../../../../shared/modules/conversion.utils"),
                  v = e("../../../helpers/utils/util"),
                  y = e("../../../hooks/usePrevious"),
                  b = e("../../../hooks/useTokenTracker"),
                  C = e("../../../hooks/useTokenFiatAmount"),
                  w = e("../../../hooks/useEthFiatAmount"),
                  k = e("../../../../shared/modules/swaps.utils"),
                  I = e("../../../../shared/constants/metametrics"),
                  A = e("../../../../shared/constants/swaps"),
                  O = e("../../../store/actions"),
                  N = e("../../../store/actionConstants"),
                  x = e("../swaps.util"),
                  P = e("../../../../shared/lib/token-util.ts"),
                  R = e("../../../../shared/modules/string-utils"),
                  M = e("../../../../shared/lib/transactions-controller-utils"),
                  D = e("../../../../shared/lib/swaps-utils"),
                  L = e("../../../components/component-library"),
                  F = e("../../../helpers/constants/routes"),
                  j = K(e("../import-token")),
                  U = K(e("../transaction-settings/transaction-settings")),
                  W = K(e("../swaps-banner-alert/swaps-banner-alert")),
                  q = K(e("../swaps-footer")),
                  G = K(e("../selected-token/selected-token")),
                  B = K(e("../list-with-search/list-with-search")),
                  H = K(e("./smart-transactions-popover")),
                  V = K(e("./quotes-loading-animation")),
                  $ = K(e("./review-quote"));
                function K(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function Q(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (Q = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function Y() {
                  return (
                    (Y = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                          }
                          return e;
                        }),
                    Y.apply(this, arguments)
                  );
                }
                let X;
                function Z({ ethBalance: e, selectedAccountAddress: t, shuffledTokensList: a }) {
                  const o = (0, n.useContext)(f.I18nContext),
                    K = (0, s.useDispatch)(),
                    Q = (0, i.useHistory)(),
                    Z = (0, n.useContext)(d.MetaMetricsContext),
                    [z, J] = (0, n.useState)(undefined),
                    [ee, te] = (0, n.useState)(!1),
                    [ae, ne] = (0, n.useState)(),
                    [re, oe] = (0, n.useState)(!1),
                    se = () => oe(!1),
                    [le, ie] = (0, n.useState)(!1),
                    ue = () => ie(!1),
                    [ce, de] = (0, n.useState)(!1),
                    [pe, me] = (0, n.useState)(null),
                    [fe, ge] = (0, n.useState)(""),
                    [Ee, _e] = (0, n.useState)(""),
                    [he, Te] = (0, n.useState)(0),
                    [Se, ve] = (0, n.useState)(!1),
                    [ye, be] = (0, n.useState)(!1),
                    Ce = (0, s.useSelector)(h.getIsFeatureFlagLoaded),
                    we = (0, s.useSelector)(h.getBalanceError),
                    ke = (0, s.useSelector)(h.getFetchParams, l.isEqual),
                    { sourceTokenInfo: Ie = {}, destinationTokenInfo: Ae = {} } = (null == ke ? void 0 : ke.metaData) || {},
                    Oe = (0, s.useSelector)(g.getTokens, l.isEqual),
                    Ne = (0, s.useSelector)(h.getTopAssets, l.isEqual),
                    xe = (0, s.useSelector)(h.getFromToken, l.isEqual),
                    Pe = (0, s.useSelector)(h.getFromTokenInputValue),
                    Re = (0, s.useSelector)(h.getFromTokenError),
                    Me = (0, s.useSelector)(h.getMaxSlippage),
                    De = (0, s.useSelector)(h.getToToken, l.isEqual) || Ae,
                    Le = (0, s.useSelector)(T.getSwapsDefaultToken, l.isEqual),
                    Fe = (0, s.useSelector)(T.getCurrentChainId),
                    je = (0, s.useSelector)(T.getRpcPrefsForCurrentProvider, s.shallowEqual),
                    Ue = (0, s.useSelector)(T.getTokenList, l.isEqual),
                    We = (0, s.useSelector)(h.getQuotes, l.isEqual),
                    qe = (0, s.useSelector)(h.getLatestAddedTokenTo, l.isEqual),
                    Ge = Object.keys(We).length,
                    Be = Ge > 0,
                    He = (0, s.useSelector)(h.getSwapsErrorKey),
                    Ve = (0, s.useSelector)(h.getAggregatorMetadata, s.shallowEqual),
                    $e = (0, s.useSelector)(h.getTransactionSettingsOpened, s.shallowEqual),
                    Ke = Ve ? Object.keys(Ve).length : 0,
                    Qe = (0, s.useSelector)(T.getTokenExchangeRates, l.isEqual),
                    Ye = (0, s.useSelector)(g.getConversionRate),
                    Xe = (0, s.useSelector)(T.isHardwareWallet),
                    Ze = (0, s.useSelector)(T.getHardwareWalletType),
                    ze = (0, s.useSelector)(h.getSmartTransactionsOptInStatus),
                    Je = (0, s.useSelector)(h.getSmartTransactionsEnabled),
                    et = (0, s.useSelector)(h.getCurrentSmartTransactionsEnabled),
                    tt = et && ze,
                    at = ze !== undefined,
                    nt = (0, s.useSelector)(h.getCurrentSmartTransactionsError),
                    rt = (0, s.useSelector)(T.getCurrentCurrency),
                    ot = (0, s.useSelector)(h.getFetchingQuotes),
                    st = !ot && Be,
                    lt = Je && !at,
                    it = (0, k.isSwapsDefaultTokenSymbol)(null == Ie ? void 0 : Ie.symbol, Fe) ? Le : Ie,
                    { tokensWithBalances: ut } = (0, b.useTokenTracker)({ tokens: Oe }),
                    ct = !(0, k.isSwapsDefaultTokenSymbol)(null == xe ? void 0 : xe.symbol, Fe) && null != xe && xe.balance ? [xe] : [],
                    dt = (0, l.uniqBy)([...ut, ...Oe, ...ct], "address"),
                    pt = (0, m.useEqualityCheck)(dt),
                    mt = (0, p.getRenderableTokenData)(xe || it, Qe, Ye, rt, Fe, Ue),
                    ft = (0, p.useTokensToSearch)({
                      usersTokens: pt,
                      topTokens: Ne,
                      shuffledTokensList: a,
                      tokenBucketPriority: A.TokenBucketPriority.owned
                    }),
                    gt = (0, p.useTokensToSearch)({
                      usersTokens: pt,
                      topTokens: Ne,
                      shuffledTokensList: a,
                      tokenBucketPriority: A.TokenBucketPriority.top
                    }),
                    Et = ft.find(({ address: e }) => (0, R.isEqualCaseInsensitive)(e, null == De ? void 0 : De.address)) || De,
                    _t = (null == Et ? void 0 : Et.address) && !(0, k.isSwapsDefaultTokenAddress)(null == Et ? void 0 : Et.address, Fe),
                    ht = Number((null == Et ? void 0 : Et.occurances) || (null == Et ? void 0 : Et.occurrences) || 0),
                    { address: Tt, symbol: St, string: vt, decimals: yt, balance: bt } = mt || {},
                    { address: Ct } = Et || {},
                    wt = bt && (0, M.calcTokenAmount)(bt, yt).toString(10),
                    kt = (0, y.usePrevious)(wt),
                    It = (0, C.useTokenFiatAmount)(Tt, Pe || 0, St, { showFiat: !0 }, !0),
                    At = (0, w.useEthFiatAmount)(Pe || 0, { showFiat: !0 }, !0),
                    Ot = (0, k.isSwapsDefaultTokenSymbol)(St, Fe) ? At : It,
                    Nt = (0, n.useCallback)(
                      (e, t) => {
                        K((0, h.setFromTokenInputValue)(e));
                        const a = new r.default(e || 0).gt(t || 0);
                        we !== a && K((0, h.setBalanceError)(a)),
                          K((0, h.setFromTokenError)(xe && (0, x.countDecimals)(e) > xe.decimals ? "tooManyDecimals" : null));
                      },
                      [K, xe, we]
                    );
                  (0, n.useEffect)(() => {
                    let e;
                    if (!Se) return void Te(0);
                    e = st ? 20 : 500 + Math.floor(1500 * Math.random());
                    const t = setTimeout(() => {
                      he < Ke
                        ? Te(he + 1)
                        : he === Ke &&
                          st &&
                          (async () => {
                            await K((0, O.setBackgroundSwapRouteState)("")),
                              ve(!1),
                              (He !== A.ERROR_FETCHING_QUOTES && He !== A.QUOTES_NOT_AVAILABLE_ERROR) ||
                                K((0, O.setSwapsErrorKey)(A.QUOTES_NOT_AVAILABLE_ERROR));
                          })();
                    }, e);
                    return function () {
                      clearTimeout(t);
                    };
                  }, [ot, he, st, Ge, K, Q, He, Ke, Se]);
                  const xt = (e) => {
                      null != e && e.address && !Ot && null !== z
                        ? (0, x.fetchTokenPrice)(e.address).then((e) => {
                            null !== e && e !== undefined && J(e);
                          })
                        : J(null),
                        null != e &&
                          e.address &&
                          !pt.find((t) => (0, R.isEqualCaseInsensitive)(t.address, e.address)) &&
                          (0, P.fetchTokenBalance)(e.address, t, global.ethereumProvider).then((t) => {
                            if (null != t && t.balance) {
                              const a = t.balance.toString(10),
                                n = (0, M.calcTokenAmount)(a, e.decimals);
                              K((0, h.setSwapsFromToken)({ ...e, string: n.toString(10), balance: a }));
                            }
                          }),
                        K((0, h.setSwapsFromToken)(e)),
                        Nt(Pe, e.string, e.decimals);
                    },
                    Pt = (0, u.getTokenTrackerLink)(Et.address, Fe, null, null, {
                      blockExplorerUrl: A.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[Fe] ?? null
                    }),
                    Rt = je.blockExplorerUrl ? (0, v.getURLHostName)(Pt) : o("etherscan"),
                    { address: Mt } = De || {},
                    Dt = (0, n.useCallback)(
                      (e) => {
                        qe && e.address !== Mt && K((0, O.ignoreTokens)({ tokensToIgnore: Mt, dontShowLoadingIndicator: !0 })),
                          K((0, h.setSwapToToken)(e)),
                          te(!1);
                      },
                      [K, qe, Mt]
                    ),
                    Lt = ut.find((e) => (0, R.isEqualCaseInsensitive)(e.address, null == xe ? void 0 : xe.address)),
                    Ft = (0, y.usePrevious)(Lt);
                  (0, n.useEffect)(() => {
                    const e = !(0, k.isSwapsDefaultTokenAddress)(null == Lt ? void 0 : Lt.address, Fe),
                      t = (0, R.isEqualCaseInsensitive)(null == Lt ? void 0 : Lt.address, null == Ft ? void 0 : Ft.address),
                      a = (null == Lt ? void 0 : Lt.balance) !== (null == Ft ? void 0 : Ft.balance);
                    e &&
                      t &&
                      a &&
                      K(
                        (0, h.setSwapsFromToken)({
                          ...xe,
                          balance: null == Lt ? void 0 : Lt.balance,
                          string: null == Lt ? void 0 : Lt.string
                        })
                      );
                  }, [K, Lt, Ft, xe, Fe]),
                    (0, n.useEffect)(() => {
                      (0, k.isSwapsDefaultTokenAddress)(null == xe ? void 0 : xe.address, Fe) &&
                        (null == xe ? void 0 : xe.balance) !== (0, S.hexToDecimal)(e) &&
                        K(
                          (0, h.setSwapsFromToken)({
                            ...xe,
                            balance: (0, S.hexToDecimal)(e),
                            string: (0, S.getValueFromWeiHex)({ value: e, numberOfDecimals: 4, toDenomination: "ETH" })
                          })
                        );
                    }, [K, xe, e, Fe]),
                    (0, n.useEffect)(() => {
                      (null != xe && xe.symbol) || (null != it && it.symbol) || K((0, h.setSwapsFromToken)(Le));
                    }, []),
                    (0, n.useEffect)(() => {
                      kt !== wt && Nt(Pe, wt);
                    }, [Nt, kt, Pe, wt]);
                  const jt = (0, n.useCallback)(() => {
                    Z({
                      event: "Prepare Swap Page Loaded",
                      category: I.MetaMetricsEventCategory.Swaps,
                      sensitiveProperties: {
                        is_hardware_wallet: Xe,
                        hardware_wallet_type: Ze,
                        stx_enabled: Je,
                        current_stx_enabled: et,
                        stx_user_opt_in: ze
                      }
                    });
                  }, [Z, Xe, Ze, Je, et, ze]);
                  (0, n.useEffect)(() => {
                    K((0, O.resetSwapsPostFetchState)()), K((0, h.setReviewSwapClickedTimestamp)()), jt();
                  }, [K, jt]);
                  const Ut = () =>
                      n.default.createElement(
                        "a",
                        {
                          className: "prepare-swap-page__token-etherscan-link",
                          key: "prepare-swap-page-etherscan-link",
                          onClick: () => {
                            Z({
                              event: I.MetaMetricsEventName.ExternalLinkClicked,
                              category: I.MetaMetricsEventCategory.Swaps,
                              properties: {
                                link_type: I.MetaMetricsEventLinkType.TokenTracker,
                                location: "Swaps Confirmation",
                                url_domain: (0, v.getURLHostName)(Pt)
                              }
                            }),
                              global.platform.openTab({ url: Pt });
                          },
                          target: "_blank",
                          rel: "noopener noreferrer"
                        },
                        Rt
                      ),
                    Wt = `${o("balance")}: ${vt || "0"}`,
                    qt = `${o("balance")}: ${(null == Et ? void 0 : Et.string) || "0"}`,
                    Gt = (0, D.shouldEnableDirectWrapping)(Fe, Tt, Et.address),
                    Bt =
                      Re ||
                      !Ce ||
                      !Number(Pe) ||
                      !(null != Et && Et.address) ||
                      !Tt ||
                      Number(Me) < 0 ||
                      Number(Me) > A.MAX_ALLOWED_SLIPPAGE ||
                      (_t && ht < 2 && !ee);
                  let Ht;
                  (0, n.useEffect)(() => {
                    K((0, O.clearSwapsQuotes)()), K((0, O.stopPollingForQuotes)());
                    return (
                      (X = setTimeout(() => {
                        (X = null),
                          Bt ||
                            (tt && ((0, O.clearSmartTransactionFees)(), K({ type: N.SET_SMART_TRANSACTIONS_ERROR, payload: null })),
                            (async () => {
                              ve(!0), await K((0, h.fetchQuotesAndSetQuoteState)(Q, Pe, Me, Z, !0));
                            })());
                      }, 1e3)),
                      () => clearTimeout(X)
                    );
                  }, [K, Q, Me, Z, Bt, Pe, Tt, Ct, ze, tt]),
                    (Ht =
                      He && He === A.QUOTES_NOT_AVAILABLE_ERROR
                        ? o("swapQuotesNotAvailableErrorTitle")
                        : Bt
                        ? null != Et && Et.address && Tt
                          ? o("swapEnterAmount")
                          : o("swapSelectToken")
                        : o("swapFetchingQuotes"));
                  const Vt = (0, n.useCallback)((e) => (0, R.isEqualCaseInsensitive)(e.address, Tt), [Tt]),
                    $t = (0, n.useCallback)(
                      (e) => (0, R.isEqualCaseInsensitive)(e.address, null == Et ? void 0 : Et.address),
                      [null == Et ? void 0 : Et.address]
                    ),
                    Kt = !He && !Bt && Be,
                    Qt = !He && !Bt && !Be,
                    Yt = !Re && we && St,
                    Xt = 1 === ht;
                  (0, n.useEffect)(() => {
                    He === A.QUOTES_EXPIRED_ERROR && Q.push(F.SWAPS_NOTIFICATION_ROUTE);
                  }, [He, Q]),
                    (0, n.useEffect)(() => {
                      Qt && ne("");
                    }, [Qt]);
                  const Zt = {
                    onImportTokenCloseClick: () => {
                      de(!1);
                    },
                    onImportTokenClick: () => {
                      Z({
                        event: "Token Imported",
                        category: I.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: {
                          symbol: null == pe ? void 0 : pe.symbol,
                          address: null == pe ? void 0 : pe.address,
                          chain_id: Fe,
                          is_hardware_wallet: Xe,
                          hardware_wallet_type: Ze,
                          stx_enabled: Je,
                          current_stx_enabled: et,
                          stx_user_opt_in: ze
                        }
                      }),
                        null == Dt || Dt(pe),
                        me(null);
                    },
                    setIsImportTokenModalOpen: de,
                    tokenForImport: pe
                  };
                  let zt, Jt, ea;
                  ae &&
                    !Bt &&
                    ((zt = (0, x.formatSwapsValueForDisplay)(ae)),
                    (Jt = (0, x.getClassNameForCharLength)(zt, "prepare-swap-page__receive-amount"))),
                    Pe && (ea = (0, x.getClassNameForCharLength)(Pe, "prepare-swap-page__from-token-amount"));
                  const ta = St && !(0, k.isSwapsDefaultTokenSymbol)(St, Fe) && bt > 0;
                  return n.default.createElement(
                    "div",
                    { className: "prepare-swap-page" },
                    n.default.createElement(
                      "div",
                      { className: "prepare-swap-page__content" },
                      pe && ce && n.default.createElement(j.default, Y({ isOpen: !0 }, Zt)),
                      n.default.createElement(
                        L.Modal,
                        {
                          onClose: se,
                          isOpen: re,
                          isClosedOnOutsideClick: !0,
                          isClosedOnEscapeKey: !0,
                          className: "mm-modal__custom-scrollbar"
                        },
                        n.default.createElement(L.ModalOverlay, null),
                        n.default.createElement(
                          L.ModalContent,
                          null,
                          n.default.createElement(L.ModalHeader, { onClose: se }, o("swapSwapTo")),
                          n.default.createElement(
                            E.default,
                            { paddingTop: 10, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, display: _.DISPLAY.FLEX },
                            n.default.createElement(B.default, {
                              selectedItem: Et,
                              itemsToSearch: gt,
                              onClickItem: (e) => {
                                null == Dt || Dt(e), se();
                              },
                              maxListItems: 30,
                              searchQuery: Ee,
                              setSearchQuery: _e,
                              hideItemIf: Vt,
                              shouldSearchForImports: !0,
                              onOpenImportTokenModalClick: (e) => {
                                me(e), de(!0), se(), _e("");
                              }
                            })
                          )
                        )
                      ),
                      n.default.createElement(
                        L.Modal,
                        {
                          onClose: ue,
                          isOpen: le,
                          isClosedOnOutsideClick: !0,
                          isClosedOnEscapeKey: !0,
                          className: "mm-modal__custom-scrollbar"
                        },
                        n.default.createElement(L.ModalOverlay, null),
                        n.default.createElement(
                          L.ModalContent,
                          null,
                          n.default.createElement(L.ModalHeader, { onClose: ue }, o("swapSwapFrom")),
                          n.default.createElement(
                            E.default,
                            { paddingTop: 10, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, display: _.DISPLAY.FLEX },
                            n.default.createElement(B.default, {
                              selectedItem: mt,
                              itemsToSearch: ft,
                              onClickItem: (e) => {
                                null == xt || xt(e), ue();
                              },
                              maxListItems: 30,
                              searchQuery: fe,
                              setSearchQuery: ge,
                              hideItemIf: $t
                            })
                          )
                        )
                      ),
                      n.default.createElement(H.default, {
                        onEnableSmartTransactionsClick: () => (0, O.setSmartTransactionsOptInStatus)(!0, ze),
                        onCloseSmartTransactionsOptInPopover: (e) => {
                          null == e || e.preventDefault(), (0, O.setSmartTransactionsOptInStatus)(!1, ze);
                        },
                        isOpen: lt
                      }),
                      n.default.createElement(
                        "div",
                        { className: "prepare-swap-page__swap-from-content" },
                        n.default.createElement(
                          E.default,
                          { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.spaceBetween, alignItems: _.AlignItems.center },
                          n.default.createElement(G.default, {
                            onClick: () => ie(!0),
                            onClose: ue,
                            selectedToken: mt,
                            testId: "prepare-swap-page-swap-from"
                          }),
                          n.default.createElement(
                            E.default,
                            { display: _.DISPLAY.FLEX, alignItems: _.AlignItems.center },
                            n.default.createElement(L.TextField, {
                              className: (0, c.default)("prepare-swap-page__from-token-amount", { [ea]: ea }),
                              size: _.Size.SM,
                              placeholder: "0",
                              onChange: (e) => {
                                e.stopPropagation();
                                const t = "." === e.target.value ? "0." : e.target.value;
                                "" === t || /^(\.\d+|\d+(\.\d+)?|\d+\.)$/u.test(t) ? Nt(t, wt) : Nt(Pe || "", wt);
                              },
                              value: Pe,
                              truncate: !1,
                              testId: "prepare-swap-page-from-token-amount"
                            })
                          )
                        ),
                        n.default.createElement(
                          E.default,
                          { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.spaceBetween, alignItems: _.AlignItems.stretch },
                          n.default.createElement(
                            "div",
                            { className: "prepare-swap-page__balance-message" },
                            St && Wt,
                            ta &&
                              n.default.createElement(
                                "div",
                                {
                                  className: "prepare-swap-page__max-balance",
                                  "data-testid": "prepare-swap-page-max-balance",
                                  onClick: () => Nt(wt || "0", wt)
                                },
                                o("max")
                              )
                          ),
                          Pe &&
                            Ot &&
                            n.default.createElement(
                              E.default,
                              { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.flexEnd, alignItems: _.AlignItems.flexEnd },
                              n.default.createElement(L.Text, { variant: _.TextVariant.bodySm, color: _.TextColor.textAlternative }, Ot)
                            )
                        ),
                        Yt &&
                          n.default.createElement(
                            E.default,
                            { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.flexStart },
                            n.default.createElement(
                              L.Text,
                              { variant: _.TextVariant.bodySmBold, color: _.TextColor.textAlternative, marginTop: 0 },
                              o("swapsNotEnoughToken", [St])
                            )
                          ),
                        Re &&
                          n.default.createElement(
                            E.default,
                            { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.flexStart },
                            n.default.createElement(
                              L.Text,
                              { variant: _.TextVariant.bodySmBold, color: _.TextColor.textAlternative, marginTop: 0 },
                              o("swapTooManyDecimalsError", [St, yt])
                            )
                          ),
                        n.default.createElement(
                          E.default,
                          { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.center },
                          n.default.createElement(
                            "div",
                            {
                              className: (0, c.default)("prepare-swap-page__switch-tokens", {
                                "prepare-swap-page__switch-tokens--rotate": ye,
                                "prepare-swap-page__switch-tokens--disabled": Qt
                              }),
                              "data-testid": "prepare-swap-page-switch-tokens",
                              onClick: () => {
                                Qt || (Dt(mt), xt(Et), be(!ye));
                              },
                              title: o("swapSwapSwitch")
                            },
                            n.default.createElement(L.Icon, { name: L.IconName.Arrow2Down, size: L.IconSize.Lg })
                          )
                        )
                      ),
                      n.default.createElement(
                        "div",
                        { className: "prepare-swap-page__swap-to-content" },
                        n.default.createElement(
                          E.default,
                          { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.spaceBetween, alignItems: _.AlignItems.center },
                          n.default.createElement(G.default, {
                            onClick: () => oe(!0),
                            onClose: se,
                            selectedToken: Et,
                            testId: "prepare-swap-page-swap-to"
                          }),
                          n.default.createElement(
                            E.default,
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
                                className: (0, c.default)("prepare-swap-page__receive-amount", { [Jt]: Jt })
                              },
                              zt
                            )
                          )
                        ),
                        n.default.createElement(
                          E.default,
                          { display: _.DISPLAY.FLEX, justifyContent: _.JustifyContent.spaceBetween, alignItems: _.AlignItems.stretch },
                          n.default.createElement(
                            "div",
                            { className: "prepare-swap-page__balance-message" },
                            (null == Et ? void 0 : Et.string) && qt
                          )
                        )
                      ),
                      !Kt &&
                        _t &&
                        ht < 2 &&
                        n.default.createElement(
                          E.default,
                          { display: _.DISPLAY.FLEX, marginTop: 2 },
                          n.default.createElement(
                            L.BannerAlert,
                            {
                              severity: Xt ? _.SEVERITIES.WARNING : _.SEVERITIES.DANGER,
                              title: o(Xt ? "swapTokenVerifiedOn1SourceTitle" : "swapTokenAddedManuallyTitle"),
                              titleProps: { "data-testid": "swaps-banner-title" },
                              width: _.BLOCK_SIZES.FULL
                            },
                            n.default.createElement(
                              E.default,
                              null,
                              n.default.createElement(
                                L.Text,
                                { variant: _.TextVariant.bodyMd, as: "h6", "data-testid": "mm-banner-alert-notification-text" },
                                Xt
                                  ? o("swapTokenVerifiedOn1SourceDescription", [
                                      null == Et ? void 0 : Et.symbol,
                                      n.default.createElement(Ut, { key: "block-explorer-link" })
                                    ])
                                  : o("swapTokenAddedManuallyDescription", [n.default.createElement(Ut, { key: "block-explorer-link" })])
                              ),
                              !ee &&
                                n.default.createElement(
                                  L.ButtonLink,
                                  {
                                    size: L.ButtonLinkSize.Inherit,
                                    textProps: { variant: _.TextVariant.bodyMd, alignItems: _.AlignItems.flexStart },
                                    onClick: (e) => {
                                      e.preventDefault(), te(!0);
                                    }
                                  },
                                  o("swapContinueSwapping")
                                )
                            )
                          )
                        ),
                      He &&
                        n.default.createElement(
                          E.default,
                          { display: _.DISPLAY.FLEX, marginTop: 2 },
                          n.default.createElement(W.default, { swapsErrorKey: He, currentSlippage: Me })
                        ),
                      $e &&
                        (Je || (!Je && !Gt)) &&
                        n.default.createElement(U.default, {
                          onSelect: (e) => {
                            K((0, h.setMaxSlippage)(e));
                          },
                          maxAllowedSlippage: A.MAX_ALLOWED_SLIPPAGE,
                          currentSlippage: Me,
                          smartTransactionsEnabled: Je,
                          smartTransactionsOptInStatus: ze,
                          setSmartTransactionsOptInStatus: O.setSmartTransactionsOptInStatus,
                          currentSmartTransactionsError: nt,
                          isDirectWrappingEnabled: Gt,
                          onModalClose: () => {
                            K((0, h.setTransactionSettingsOpened)(!1));
                          }
                        }),
                      Qt && n.default.createElement(V.default, { quoteCount: he, numberOfAggregators: Ke }),
                      Kt && n.default.createElement($.default, { setReceiveToAmount: ne })
                    ),
                    !Be && n.default.createElement(q.default, { submitText: Ht, disabled: !0, hideCancel: !0, showTermsOfService: !0 })
                  );
                }
                Z.propTypes = {
                  ethBalance: o.default.string,
                  selectedAccountAddress: o.default.string,
                  shuffledTokensList: o.default.array
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/prepare-swap-page/prepare-swap-page.js" }
    ],
    [
      5908,
      {
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "../mascot-background-animation/mascot-background-animation": 5905,
        "prop-types": 4219,
        react: 4475
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = c(e("prop-types")),
                  o = e("../../../contexts/i18n"),
                  s = c(e("../../../components/ui/box")),
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
                    r = (0, n.useContext)(o.I18nContext);
                  return n.default.createElement(
                    s.default,
                    {
                      marginTop: 4,
                      display: l.DISPLAY.FLEX,
                      justifyContent: l.JustifyContent.center,
                      alignItems: l.AlignItems.center,
                      flexDirection: l.FLEX_DIRECTION.COLUMN
                    },
                    n.default.createElement(
                      s.default,
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
      5909,
      {
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/gas": 4753,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/network": 4759,
        "../../../../shared/constants/swaps": 4766,
        "../../../../shared/lib/metamask-controller-utils": 4773,
        "../../../../shared/lib/swaps-utils": 4775,
        "../../../../shared/lib/transactions-controller-utils": 4778,
        "../../../../shared/modules/conversion.utils": 4784,
        "../../../../shared/modules/string-utils": 4797,
        "../../../../shared/modules/transaction.utils": 4799,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../components/ui/info-tooltip": 5431,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/optimism/fetchEstimatedL1Fee": 5571,
        "../../../hooks/experiences/useRamps": 5581,
        "../../../hooks/gasFeeInput/useGasFeeInputs": 5584,
        "../../../hooks/useEqualityCheck": 5599,
        "../../../hooks/useEthFiatAmount": 5600,
        "../../../hooks/usePrevious": 5608,
        "../../../hooks/useTokenTracker": 5622,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../confirm-approve/confirm-approve.util": 5645,
        "../countdown-timer": 5885,
        "../exchange-rate-display": 5893,
        "../select-quote-popover": 5919,
        "../swaps-footer": 5938,
        "../swaps.util": 5940,
        "./slippage-notification-modal": 5910,
        "./view-quote-price-difference": 5912,
        "@sentry/browser": 2179,
        "bignumber.js": 2804,
        classnames: 2952,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
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
                    var a = Y(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = Q(e("bignumber.js")),
                  l = e("lodash"),
                  i = Q(e("classnames")),
                  u = e("@sentry/browser"),
                  c = Q(e("prop-types")),
                  d = e("../../../contexts/i18n"),
                  p = Q(e("../select-quote-popover")),
                  m = e("../../../hooks/useEthFiatAmount"),
                  f = e("../../../hooks/useEqualityCheck"),
                  g = e("../../../hooks/usePrevious"),
                  E = e("../../../hooks/gasFeeInput/useGasFeeInputs"),
                  _ = e("../../../contexts/metametrics"),
                  h = e("../../../ducks/swaps/swaps"),
                  T = e("../../../selectors"),
                  S = e("../../../ducks/metamask/metamask"),
                  v = e("../../../store/actions"),
                  y = e("../../../helpers/constants/routes"),
                  b = e("../../../../shared/constants/network"),
                  C = e("../../../../shared/modules/conversion.utils"),
                  w = e("../../confirm-approve/confirm-approve.util"),
                  k = e("../swaps.util"),
                  I = e("../../../hooks/useTokenTracker"),
                  A = e("../../../../shared/constants/swaps"),
                  O = e("../../../../shared/constants/gas"),
                  N = Q(e("../countdown-timer")),
                  x = Q(e("../swaps-footer")),
                  P = Q(e("../../../components/ui/box")),
                  R = e("../../../helpers/constants/design-system"),
                  M = e("../../../components/component-library"),
                  D = e("../../../../shared/constants/metametrics"),
                  L = e("../../../../shared/modules/string-utils"),
                  F = e("../../../../shared/modules/transaction.utils"),
                  j = e("../../../../shared/lib/metamask-controller-utils"),
                  U = e("../../../../shared/lib/transactions-controller-utils"),
                  W = e("../../../../app/scripts/lib/util"),
                  q = e("../../../../shared/lib/swaps-utils"),
                  G = Q(e("../../../helpers/utils/optimism/fetchEstimatedL1Fee")),
                  B = Q(e("../exchange-rate-display")),
                  H = Q(e("../../../components/ui/info-tooltip")),
                  V = Q(e("../../../hooks/experiences/useRamps")),
                  $ = Q(e("./view-quote-price-difference")),
                  K = Q(e("./slippage-notification-modal"));
                function Q(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function Y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (Y = function (e) {
                    return e ? a : t;
                  })(e);
                }
                let X;
                const Z = "https://community.metamask.io/t/what-is-gas-why-do-transactions-take-so-long/3172";
                function z({ setReceiveToAmount: e }) {
                  var t, a, c, Q, Y, z;
                  const J = (0, o.useHistory)(),
                    ee = (0, r.useDispatch)(),
                    te = (0, n.useContext)(d.I18nContext),
                    ae = (0, n.useContext)(_.MetaMetricsContext),
                    [ne, re] = (0, n.useState)(!1),
                    [oe, se] = (0, n.useState)(!1),
                    [le, ie] = (0, n.useState)(!1),
                    [ue] = (0, n.useState)(!1),
                    [ce, de] = (0, n.useState)(null),
                    [pe, me] = (0, n.useState)(null),
                    [fe, ge] = (0, n.useState)(null),
                    [Ee] = (0, n.useState)(Date.now()),
                    { openBuyCryptoInPdapp: _e } = (0, V.default)(),
                    [he, Te] = (0, n.useState)(!1),
                    [Se, ve] = (0, n.useState)(!1),
                    ye = [O.GasRecommendations.high, O.GasRecommendations.medium],
                    be = (0, r.useSelector)(h.getBackgroundSwapRouteState),
                    Ce = (0, r.useSelector)(h.getQuotes, l.isEqual);
                  (0, n.useEffect)(() => {
                    Object.values(Ce).length ? "awaiting" === be && J.push(y.AWAITING_SWAP_ROUTE) : J.push(y.PREPARE_SWAP_ROUTE);
                  }, [J, Ce, be]);
                  const we = (0, r.useSelector)(h.getQuotesLastFetched),
                    ke = (0, g.usePrevious)(we),
                    Ie = (0, r.useSelector)(h.getUsedSwapsGasPrice),
                    Ae = (0, r.useSelector)(h.getCustomSwapsGas),
                    Oe = (0, r.useSelector)(h.getCustomMaxFeePerGas),
                    Ne = (0, r.useSelector)(h.getCustomMaxPriorityFeePerGas),
                    xe = (0, r.useSelector)(h.getSwapsUserFeeLevel),
                    Pe = (0, r.useSelector)(T.getTokenExchangeRates, l.isEqual),
                    Re = (0, f.useEqualityCheck)(Pe),
                    { balance: Me } = (0, r.useSelector)(T.getSelectedAccount, r.shallowEqual),
                    De = (0, r.useSelector)(T.conversionRateSelector),
                    Le = (0, r.useSelector)(T.getUSDConversionRate),
                    Fe = (0, r.useSelector)(T.getIsMultiLayerFeeNetwork),
                    je = (0, r.useSelector)(T.getCurrentCurrency),
                    Ue = (0, r.useSelector)(S.getTokens, l.isEqual),
                    We = (0, r.useSelector)(T.checkNetworkAndAccountSupports1559),
                    qe = (0, r.useSelector)(h.getBalanceError),
                    Ge = (0, r.useSelector)(h.getFetchParams, l.isEqual),
                    Be = (0, r.useSelector)(h.getApproveTxParams, r.shallowEqual),
                    He = (0, r.useSelector)(h.getSelectedQuote, l.isEqual),
                    Ve = (0, r.useSelector)(h.getTopQuote, l.isEqual),
                    $e = He || Ve,
                    Ke = (null == $e || null === (t = $e.trade) || void 0 === t ? void 0 : t.value) ?? "0x0",
                    Qe = (0, r.useSelector)(h.getSwapsQuoteRefreshTime),
                    Ye = (0, r.useSelector)(T.getSwapsDefaultToken, l.isEqual),
                    Xe = (0, r.useSelector)(T.getCurrentChainId),
                    Ze = (0, r.useSelector)(S.getNativeCurrency),
                    ze = (0, r.useSelector)(h.getReviewSwapClickedTimestamp),
                    Je = (0, r.useSelector)(h.getSmartTransactionsOptInStatus),
                    et = (0, r.useSelector)(h.getSmartTransactionsEnabled),
                    tt = (0, r.useSelector)(h.getSwapsSTXLoading),
                    at = (0, r.useSelector)(h.getCurrentSmartTransactionsError),
                    nt = (0, r.useSelector)(h.getSmartTransactionsError),
                    rt = (0, r.useSelector)(h.getCurrentSmartTransactionsEnabled),
                    ot = (0, r.useSelector)(h.getSmartTransactionFees, l.isEqual),
                    st = (0, r.useSelector)(h.getSwapsNetworkConfig, r.shallowEqual),
                    lt = $e.trade,
                    it = rt && Je,
                    [ut] = (0, n.useState)(() => {
                      const e = Number(null == Ge ? void 0 : Ge.slippage);
                      return e > 0 && e <= 1 ? A.SLIPPAGE_LOW_ERROR : e >= 5 && e <= A.MAX_ALLOWED_SLIPPAGE ? A.SLIPPAGE_HIGH_ERROR : "";
                    });
                  let ct;
                  We && (ct = (0, E.useGasFeeInputs)(O.GasRecommendations.high, { userFeeLevel: xe || O.GasRecommendations.high }));
                  const dt = null == Ge ? void 0 : Ge.sourceToken,
                    pt = {
                      reg_tx_fee_in_usd: undefined,
                      reg_tx_fee_in_eth: undefined,
                      reg_tx_max_fee_in_usd: undefined,
                      reg_tx_max_fee_in_eth: undefined,
                      stx_fee_in_usd: undefined,
                      stx_fee_in_eth: undefined,
                      stx_max_fee_in_usd: undefined,
                      stx_max_fee_in_eth: undefined
                    },
                    mt =
                      (null == $e ? void 0 : $e.gasEstimateWithRefund) ||
                      `0x${(0, C.decimalToHex)((null == $e ? void 0 : $e.averageGas) || 0)}`,
                    ft = (null == $e ? void 0 : $e.gasEstimate) || "0x0",
                    gt = new s.default(ft, 16)
                      .times((null == $e ? void 0 : $e.gasMultiplier) || h.FALLBACK_GAS_MULTIPLIER, 10)
                      .round(0)
                      .toString(16),
                    Et = null != $e && $e.gasEstimate ? gt : `0x${(0, C.decimalToHex)((null == $e ? void 0 : $e.maxGas) || 0)}`,
                    _t = Ae || Et;
                  let ht, Tt, St;
                  if (We) {
                    const {
                      maxFeePerGas: e,
                      maxPriorityFeePerGas: t,
                      gasFeeEstimates: { estimatedBaseFee: a = "0" }
                    } = ct;
                    (ht = Oe || (0, C.decGWEIToHexWEI)(e)),
                      (Tt = Ne || (0, C.decGWEIToHexWEI)(t)),
                      (St = (0, C.addHexes)((0, C.decGWEIToHexWEI)(a), Tt));
                  }
                  let vt = (0, U.calcGasTotal)(_t, ht || Ie);
                  null !== pe && (vt = (0, C.sumHexes)(vt || "0x0", pe || "0x0"));
                  const { tokensWithBalances: yt } = (0, I.useTokenTracker)({ tokens: Ue, includeFailedTokens: !0 }),
                    bt = dt === Ye.address ? Ye : yt.find(({ address: e }) => (0, L.isEqualCaseInsensitive)(e, dt)),
                    Ct = bt || $e.sourceTokenInfo,
                    wt = (null == yt ? void 0 : yt.length) && (0, U.calcTokenAmount)(Ct.balance || "0x0", Ct.decimals).toFixed(9),
                    kt = yt && bt === undefined,
                    It = (0, F.parseStandardTokenTransactionData)(null == Be ? void 0 : Be.data),
                    At = It && (0, j.getTokenValueParam)(It),
                    Ot = At && (null == Ct ? void 0 : Ct.decimals) !== undefined && (0, U.calcTokenAmount)(At, Ct.decimals).toFixed(9),
                    Nt = null == Be ? void 0 : Be.gas,
                    xt = (0, n.useMemo)(
                      () =>
                        (0, k.quotesToRenderableData)({
                          quotes: Ce,
                          gasPrice: We ? St : Ie,
                          conversionRate: De,
                          currentCurrency: je,
                          approveGas: Nt,
                          tokenConversionRates: Re,
                          chainId: Xe,
                          smartTransactionEstimatedGas: et && Je && (null == ot ? void 0 : ot.tradeTxFees),
                          nativeCurrencySymbol: Ze,
                          multiLayerL1ApprovalFeeTotal: fe
                        }),
                      [Ce, Ie, St, We, De, je, Nt, Re, Xe, null == ot ? void 0 : ot.tradeTxFees, Ze, et, Je, fe]
                    ),
                    Pt = xt.find((e) => e.aggId === $e.aggregator),
                    {
                      destinationTokenDecimals: Rt,
                      destinationTokenSymbol: Mt,
                      destinationTokenValue: Dt,
                      sourceTokenDecimals: Lt,
                      sourceTokenSymbol: Ft,
                      sourceTokenValue: jt
                    } = Pt;
                  let {
                    feeInFiat: Ut,
                    feeInEth: Wt,
                    rawEthFee: qt,
                    feeInUsd: Gt
                  } = (0, k.getRenderableNetworkFeesForQuote)({
                    tradeGas: mt,
                    approveGas: Nt,
                    gasPrice: We ? St : Ie,
                    currentCurrency: je,
                    conversionRate: De,
                    USDConversionRate: Le,
                    tradeValue: Ke,
                    sourceSymbol: Ft,
                    sourceAmount: $e.sourceAmount,
                    chainId: Xe,
                    nativeCurrencySymbol: Ze,
                    multiLayerL1FeeTotal: pe
                  });
                  (pt.reg_tx_fee_in_usd = Number(Gt)), (pt.reg_tx_fee_in_eth = Number(qt));
                  const Bt = (0, k.getRenderableNetworkFeesForQuote)({
                    tradeGas: _t,
                    approveGas: Nt,
                    gasPrice: ht || Ie,
                    currentCurrency: je,
                    conversionRate: De,
                    USDConversionRate: Le,
                    tradeValue: Ke,
                    sourceSymbol: Ft,
                    sourceAmount: $e.sourceAmount,
                    chainId: Xe,
                    nativeCurrencySymbol: Ze,
                    multiLayerL1FeeTotal: pe
                  });
                  let { feeInFiat: Ht, feeInEth: Vt, rawEthFee: $t, feeInUsd: Kt } = Bt;
                  if (
                    ((pt.reg_tx_max_fee_in_usd = Number(Kt)), (pt.reg_tx_max_fee_in_eth = Number($t)), it && null != ot && ot.tradeTxFees)
                  ) {
                    var Qt;
                    const e =
                        (null == ot ? void 0 : ot.tradeTxFees.feeEstimate) +
                        ((null == ot || null === (Qt = ot.approvalTxFees) || void 0 === Qt ? void 0 : Qt.feeEstimate) || 0),
                      t = e * st.stxMaxFeeMultiplier;
                    ({
                      feeInFiat: Ut,
                      feeInEth: Wt,
                      rawEthFee: qt,
                      feeInUsd: Gt
                    } = (0, k.getFeeForSmartTransaction)({
                      chainId: Xe,
                      currentCurrency: je,
                      conversionRate: De,
                      USDConversionRate: Le,
                      nativeCurrencySymbol: Ze,
                      feeInWeiDec: e
                    })),
                      (pt.stx_fee_in_usd = Number(Gt)),
                      (pt.stx_fee_in_eth = Number(qt)),
                      (pt.estimated_gas = null == ot ? void 0 : ot.tradeTxFees.gasLimit),
                      ({
                        feeInFiat: Ht,
                        feeInEth: Vt,
                        rawEthFee: $t,
                        feeInUsd: Kt
                      } = (0, k.getFeeForSmartTransaction)({
                        chainId: Xe,
                        currentCurrency: je,
                        conversionRate: De,
                        USDConversionRate: Le,
                        nativeCurrencySymbol: Ze,
                        feeInWeiDec: t
                      })),
                      (pt.stx_max_fee_in_usd = Number(Kt)),
                      (pt.stx_max_fee_in_eth = Number($t));
                  }
                  const Yt = new s.default($e.sourceAmount),
                    Xt = new s.default($e.trade.value || 0, 10).plus(new s.default(vt, 16)),
                    Zt = ((null == yt ? void 0 : yt.length) || qe) && Yt.gt(new s.default(Ct.balance || "0x0")),
                    zt = Xt.gt(new s.default(Me || "0x0")),
                    Jt = Zt
                      ? (0, U.toPrecisionWithoutTrailingZeros)((0, U.calcTokenAmount)(Yt, Ct.decimals).minus(wt).toString(10), 6)
                      : null,
                    ea = zt
                      ? (0, U.toPrecisionWithoutTrailingZeros)(Xt.minus(Me, 16).div("1000000000000000000", 10).toString(10), 6)
                      : null;
                  let ta;
                  it && null != nt && nt.balanceNeededWei && (ta = (0, C.decWEIToDecETH)(nt.balanceNeededWei - nt.currentBalanceWei));
                  const aa = (0, g.usePrevious)(ta),
                    na = (0, r.useSelector)(h.getDestinationTokenInfo, l.isEqual);
                  (0, n.useEffect)(() => {
                    it
                      ? Zt
                        ? ee((0, h.setBalanceError)(!0))
                        : qe && !Zt && ee((0, h.setBalanceError)(!1))
                      : Zt || zt
                      ? ee((0, h.setBalanceError)(!0))
                      : !qe || Zt || zt || ee((0, h.setBalanceError)(!1));
                  }, [Zt, zt, ee, it, qe]),
                    (0, n.useEffect)(() => {
                      const e = Date.now() - we;
                      e > Qe && !ne
                        ? (re(!0), ee((0, v.safeRefetchQuotes)()))
                        : e > Qe && (ee((0, v.setSwapsErrorKey)(A.QUOTES_EXPIRED_ERROR)), J.push(y.SWAPS_NOTIFICATION_ROUTE));
                    }, [we, ne, ee, J, Qe]),
                    (0, n.useEffect)(() => {
                      !ce && Ot && de(Ot);
                    }, [ce, Ot]);
                  const ra = (qe || Jt || (!it && ea) || (it && ta)) && !ue,
                    oa = (0, r.useSelector)(T.isHardwareWallet),
                    sa = (0, r.useSelector)(T.getHardwareWalletType),
                    la = Object.values(Ce).length,
                    ia = (0, n.useRef)(),
                    ua = (0, n.useMemo)(
                      () => ({
                        token_from: Ft,
                        token_from_amount: jt,
                        token_to: Mt,
                        token_to_amount: Dt,
                        request_type: null == Ge ? void 0 : Ge.balanceError,
                        slippage: null == Ge ? void 0 : Ge.slippage,
                        custom_slippage: 2 !== (null == Ge ? void 0 : Ge.slippage),
                        response_time: null == Ge ? void 0 : Ge.responseTime,
                        best_quote_source: null == Ve ? void 0 : Ve.aggregator,
                        available_quotes: la,
                        is_hardware_wallet: oa,
                        hardware_wallet_type: sa,
                        stx_enabled: et,
                        current_stx_enabled: rt,
                        stx_user_opt_in: Je
                      }),
                      [
                        Ft,
                        jt,
                        Mt,
                        Dt,
                        null == Ge ? void 0 : Ge.balanceError,
                        null == Ge ? void 0 : Ge.slippage,
                        null == Ge ? void 0 : Ge.responseTime,
                        null == Ve ? void 0 : Ve.aggregator,
                        la,
                        oa,
                        sa,
                        et,
                        rt,
                        Je
                      ]
                    ),
                    ca = (0, n.useCallback)(() => {
                      ae({
                        event: "Best Quote Reviewed",
                        category: D.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: { ...ua, network_fees: Ut }
                      });
                    }, [ae, ua, Ut]),
                    da = (0, n.useCallback)(() => {
                      ae({
                        event: "Review Quote Component Loaded",
                        category: D.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: { ...ua, response_time: Ee - ze }
                      });
                    }, [ae, ua, Ee, ze]);
                  (0, n.useEffect)(() => {
                    !ia.current &&
                      [Ft, jt, Mt, Dt, Ge, Ve, la, Ut].every((e) => null !== e && e !== undefined) &&
                      ((ia.current = !0), ca());
                  }, [Ge, Ve, la, Ut, Mt, Dt, Ft, jt, ca]),
                    (0, n.useEffect)(() => {
                      if (((it && aa) || !it) && we === ke) return;
                      let e;
                      if (it && ta) e = ta;
                      else {
                        if (it || !ea) return;
                        e = ea;
                      }
                      ae({
                        event: D.MetaMetricsEventName.SwapError,
                        category: D.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: {
                          ...ua,
                          error_type: D.MetaMetricsEventErrorType.InsufficientGas,
                          additional_balance_needed: e
                        }
                      });
                    }, [we, ke, ta, it, ae, aa, ea, ua]);
                  const pa = $e.fee,
                    ma = () => {
                      ae({
                        event: "Edit Spend Limit Opened",
                        category: D.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: { ...ua, custom_spend_limit_set: ce === Ot, custom_spend_limit_amount: ce === Ot ? null : Ot }
                      }),
                        ee(
                          (0, v.showModal)({
                            name: "EDIT_APPROVAL_PERMISSION",
                            decimals: Ct.decimals,
                            origin: "MetaMask",
                            setCustomAmount: (e) => {
                              const t = "" === e ? ce : e,
                                a = (0, w.getCustomTxParamsData)(Be.data, { customPermissionAmount: t, decimals: Ct.decimals });
                              null != t && t.length && Be.data !== a && ee((0, v.setCustomApproveTxData)(a));
                            },
                            tokenAmount: ce,
                            customTokenAmount: ce === Ot ? null : Ot,
                            tokenBalance: wt,
                            tokenSymbol: Ct.symbol,
                            requiredMinimum: (0, U.calcTokenAmount)($e.sourceAmount, Ct.decimals)
                          })
                        );
                    },
                    fa = Boolean(ta || ea),
                    ga = kt
                      ? te("swapTokenBalanceUnavailable", [Ft])
                      : te("swapApproveNeedMoreTokens", [
                          n.default.createElement("span", { key: "swapApproveNeedMoreTokens-1" }, Jt || ta || ea),
                          Jt && Ft !== Ye.symbol ? Ft : Ye.symbol
                        ]),
                    Ea = null == $e || null === (a = $e.priceSlippage) || void 0 === a ? void 0 : a.bucket,
                    _a = (0, g.usePrevious)(Ea);
                  (0, n.useEffect)(() => {
                    he && _a === O.GasRecommendations.medium && Ea === O.GasRecommendations.high && Te(!1);
                  }, [Ea, he, _a]);
                  let ha = null;
                  const Ta = (0, m.useEthFiatAmount)(
                      (null == $e || null === (c = $e.priceSlippage) || void 0 === c ? void 0 : c.sourceAmountInETH) || 0,
                      { showFiat: !0 }
                    ),
                    Sa = (0, m.useEthFiatAmount)(
                      (null == $e || null === (Q = $e.priceSlippage) || void 0 === Q ? void 0 : Q.destinationAmountInETH) || 0,
                      { showFiat: !0 }
                    ),
                    va = !Ta || !Sa || Boolean(null == $e || null === (Y = $e.priceSlippage) || void 0 === Y ? void 0 : Y.calculationError);
                  let ya = 0;
                  null != $e &&
                    null !== (z = $e.priceSlippage) &&
                    void 0 !== z &&
                    z.ratio &&
                    (ya = parseFloat(new s.default($e.priceSlippage.ratio, 10).minus(1, 10).times(100, 10).toFixed(2), 10));
                  const ba = (0, g.usePrevious)(ya),
                    Ca = !kt && !ra && $e && (ye.includes(Ea) || va);
                  Ca &&
                    (ha = n.default.createElement($.default, {
                      usedQuote: $e,
                      sourceTokenValue: jt,
                      destinationTokenValue: Dt,
                      priceSlippageFromSource: Ta,
                      priceSlippageFromDestination: Sa,
                      priceDifferencePercentage: ya,
                      priceSlippageUnknownFiatValue: va,
                      onAcknowledgementClick: () => {
                        Te(!0);
                      },
                      acknowledged: he
                    }));
                  const wa = ra || Ca,
                    ka = Boolean(
                      oe ||
                        qe ||
                        kt ||
                        (Ca && !he) ||
                        (We && St === undefined) ||
                        (!We && (null === Ie || Ie === undefined)) ||
                        (rt && (at || nt)) ||
                        (rt && Je && !(null != ot && ot.tradeTxFees))
                    );
                  (0, n.useEffect)(() => {
                    Ca && he && we !== ke && ya !== ba && Te(!1);
                  }, [he, ke, we, Ca, ya, ba]),
                    (0, n.useEffect)(() => {
                      if (it && !Zt) {
                        const e = { from: lt.from, to: lt.to, value: lt.value, data: lt.data, gas: lt.gas, chainId: Xe };
                        (X = setInterval(() => {
                          tt ||
                            ee(
                              (0, h.fetchSwapsSmartTransactionFees)({
                                unsignedTransaction: e,
                                approveTxParams: Be,
                                fallbackOnNotEnoughFunds: !1
                              })
                            );
                        }, st.stxGetTransactionsRefreshTime)),
                          ee(
                            (0, h.fetchSwapsSmartTransactionFees)({
                              unsignedTransaction: e,
                              approveTxParams: Be,
                              fallbackOnNotEnoughFunds: !1
                            })
                          );
                      } else X && clearInterval(X);
                      return () => clearInterval(X);
                    }, [ee, it, lt.data, lt.from, lt.value, lt.gas, lt.to, Xe, st.stxGetTransactionsRefreshTime, Zt]),
                    (0, n.useEffect)(() => {
                      ee((0, v.setSwapsQuotesPollingLimitEnabled)(!0)), ze && da();
                    }, [ee, da, ze]),
                    (0, n.useEffect)(() => {
                      !rt && at && oe && se(!1);
                    }, [rt, at, oe]),
                    (0, n.useEffect)(() => {
                      if (!Fe || null == $e || !$e.multiLayerL1TradeFeeTotal) return;
                      (async () => {
                        try {
                          let e = "0x0";
                          Be &&
                            ((e = await (0, G.default)({
                              txParams: { ...Be, gasPrice: (0, W.addHexPrefix)(Be.gasPrice), value: "0x0" },
                              chainId: Xe
                            })),
                            ge(e));
                          const t = (0, C.sumHexes)($e.multiLayerL1TradeFeeTotal, e);
                          me(t);
                        } catch (e) {
                          (0, u.captureException)(e), me(null), ge(null);
                        }
                      })();
                    }, [lt, Be, Fe, Xe, $e]);
                  const Ia = (0, q.calcTokenValue)(Dt, Rt),
                    Aa = (0, U.calcTokenAmount)(Ia, Rt),
                    Oa = (0, k.formatSwapsValueForDisplay)(Aa),
                    Na = Oa.match(/\d+/gu).join("").length;
                  let xa = Oa;
                  Na > 20 && (xa = `${Oa.slice(0, 20)}...`),
                    (0, n.useEffect)(() => {
                      e(xa);
                    }, [xa, e]);
                  const Pa = !Be || (qe && !ue),
                    Ra = n.default.createElement(
                      "span",
                      { key: "fee-card-approve-symbol", className: "fee-card__bold" },
                      te("enableToken", [Ft])
                    ),
                    Ma = ({ acknowledgedSlippage: e = !1 }) => {
                      !ut || e
                        ? (se(!0),
                          qe
                            ? na.symbol === Ye.symbol
                              ? J.push(y.DEFAULT_ROUTE)
                              : J.push(`${y.ASSET_ROUTE}/${na.address}`)
                            : it && null != ot && ot.tradeTxFees
                            ? ee(
                                (0, h.signAndSendSwapsSmartTransaction)({
                                  unsignedTransaction: lt,
                                  trackEvent: ae,
                                  history: J,
                                  additionalTrackingParams: pt
                                })
                              )
                            : ee((0, h.signAndSendTransactions)(J, ae, pt)))
                        : ve(!0);
                    };
                  return n.default.createElement(
                    "div",
                    { className: "review-quote" },
                    n.default.createElement(
                      "div",
                      { className: "review-quote__content" },
                      n.default.createElement(K.default, {
                        isOpen: Se,
                        setSlippageNotificationModalOpened: ve,
                        slippageErrorKey: ut,
                        onSwapSubmit: Ma,
                        currentSlippage: null == Ge ? void 0 : Ge.slippage
                      }),
                      le &&
                        n.default.createElement(p.default, {
                          quoteDataRows: xt,
                          onClose: () => ie(!1),
                          onSubmit: (e) => ee((0, h.swapsQuoteSelected)(e)),
                          swapToSymbol: Mt,
                          initialAggId: $e.aggregator,
                          onQuoteDetailsIsOpened: () => {
                            ae({
                              event: "Quote Details Opened",
                              category: D.MetaMetricsEventCategory.Swaps,
                              sensitiveProperties: {
                                ...ua,
                                other_quote_selected: (null == $e ? void 0 : $e.aggregator) !== (null == Ve ? void 0 : Ve.aggregator),
                                other_quote_selected_source:
                                  (null == $e ? void 0 : $e.aggregator) === (null == Ve ? void 0 : Ve.aggregator)
                                    ? null
                                    : null == $e
                                    ? void 0
                                    : $e.aggregator
                              }
                            });
                          },
                          hideEstimatedGasFee: et && Je
                        }),
                      wa &&
                        n.default.createElement(
                          n.default.Fragment,
                          null,
                          ha,
                          (ra || kt) &&
                            n.default.createElement(M.BannerAlert, {
                              title: te("notEnoughBalance"),
                              titleProps: { "data-testid": "swaps-banner-title" },
                              severity: R.Severity.Info,
                              description: ga,
                              descriptionProps: { "data-testid": "mm-banner-alert-notification-text" },
                              actionButtonLabel: fa ? te("buyMoreAsset", [Ze]) : undefined,
                              actionButtonOnClick: fa ? () => _e() : undefined,
                              marginTop: 2
                            })
                        ),
                      n.default.createElement(
                        "div",
                        { className: "review-quote__countdown-timer-container" },
                        n.default.createElement(N.default, { timeStarted: we, warningTime: "0:10", labelKey: "swapNewQuoteIn" })
                      ),
                      n.default.createElement(
                        P.default,
                        {
                          marginTop: 1,
                          marginBottom: 0,
                          display: R.DISPLAY.FLEX,
                          flexDirection: R.FlexDirection.Column,
                          className: "review-quote__overview"
                        },
                        n.default.createElement(
                          P.default,
                          { display: R.DISPLAY.FLEX, justifyContent: R.JustifyContent.spaceBetween, alignItems: R.AlignItems.center },
                          n.default.createElement(
                            M.Text,
                            { variant: R.TextVariant.bodyMd, marginRight: 1, color: R.TextColor.textAlternative },
                            te("quoteRate")
                          ),
                          n.default.createElement(B.default, {
                            primaryTokenValue: (0, q.calcTokenValue)(jt, Lt),
                            primaryTokenDecimals: Lt,
                            primaryTokenSymbol: Ft,
                            secondaryTokenValue: Ia,
                            secondaryTokenDecimals: Rt,
                            secondaryTokenSymbol: Mt,
                            boldSymbols: !1,
                            className: "main-quote-summary__exchange-rate-display",
                            showIconForSwappingTokens: !1
                          })
                        ),
                        n.default.createElement(
                          P.default,
                          { display: R.DISPLAY.FLEX, justifyContent: R.JustifyContent.spaceBetween, alignItems: R.AlignItems.stretch },
                          n.default.createElement(
                            P.default,
                            { display: R.DISPLAY.FLEX, alignItems: R.AlignItems.center, width: R.FRACTIONS.SIX_TWELFTHS },
                            n.default.createElement(
                              M.Text,
                              { variant: R.TextVariant.bodyMd, as: "h6", color: R.TextColor.textAlternative, marginRight: 1 },
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
                                      switch (Xe) {
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
                                        ae({ event: 'Clicked "Gas Fees: Learn More" Link', category: D.MetaMetricsEventCategory.Swaps }),
                                          global.platform.openTab({ url: Z });
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
                            P.default,
                            { display: R.DISPLAY.FLEX, alignItems: R.AlignItems.flexEnd, width: R.FRACTIONS.SIX_TWELFTHS },
                            n.default.createElement(
                              M.Text,
                              {
                                variant: R.TextVariant.bodyMd,
                                as: "h6",
                                color: R.TextColor.textAlternative,
                                width: R.FRACTIONS.EIGHT_TWELFTHS,
                                textAlign: R.TEXT_ALIGN.RIGHT,
                                paddingRight: 1
                              },
                              Wt
                            ),
                            n.default.createElement(
                              M.Text,
                              {
                                variant: R.TextVariant.bodyMdBold,
                                as: "h6",
                                color: R.TextColor.textAlternative,
                                "data-testid": "review-quote-gas-fee-in-fiat",
                                width: R.FRACTIONS.FOUR_TWELFTHS,
                                textAlign: R.TEXT_ALIGN.RIGHT
                              },
                              ` ${Ut}`
                            )
                          )
                        ),
                        (Ht || Vt) &&
                          n.default.createElement(
                            P.default,
                            { display: R.DISPLAY.FLEX },
                            n.default.createElement(P.default, { display: R.DISPLAY.FLEX, width: R.FRACTIONS.SIX_TWELFTHS }),
                            n.default.createElement(
                              P.default,
                              { display: R.DISPLAY.FLEX, justifyContent: R.JustifyContent.flexEnd, width: R.FRACTIONS.SIX_TWELFTHS },
                              n.default.createElement(
                                M.Text,
                                {
                                  variant: R.TextVariant.bodySm,
                                  color: R.TextColor.textAlternative,
                                  width: R.FRACTIONS.EIGHT_TWELFTHS,
                                  paddingRight: 1,
                                  textAlign: R.TEXT_ALIGN.RIGHT
                                },
                                `${te("maxFee")}: `
                              ),
                              n.default.createElement(
                                M.Text,
                                {
                                  variant: R.TextVariant.bodySm,
                                  color: R.TextColor.textAlternative,
                                  width: R.FRACTIONS.FOUR_TWELFTHS,
                                  textAlign: R.TEXT_ALIGN.RIGHT
                                },
                                Ht || Vt
                              )
                            )
                          ),
                        !Pa &&
                          n.default.createElement(
                            P.default,
                            { display: R.DISPLAY.FLEX, justifyContent: R.JustifyContent.spaceBetween },
                            n.default.createElement(
                              M.Text,
                              { variant: R.TextVariant.bodyMd, as: "h6", color: R.TextColor.textAlternative, marginRight: 1 },
                              te("swapEnableTokenForSwapping", [Ra])
                            ),
                            n.default.createElement(
                              M.Text,
                              { variant: R.TextVariant.bodyMd },
                              n.default.createElement(
                                M.ButtonLink,
                                { onClick: () => ma(), size: R.Size.inherit, className: "review-quote__edit-limit" },
                                te("swapEditLimit")
                              )
                            )
                          ),
                        n.default.createElement(
                          P.default,
                          {
                            display: R.DISPLAY.FLEX,
                            marginTop: 3,
                            justifyContent: R.JustifyContent.center,
                            alignItems: R.AlignItems.center
                          },
                          n.default.createElement(
                            M.Text,
                            { variant: R.TextVariant.bodySm, color: R.TextColor.textDefault },
                            te("swapIncludesMetaMaskFeeViewAllQuotes", [
                              pa,
                              n.default.createElement(
                                M.ButtonLink,
                                {
                                  key: "view-all-quotes",
                                  "data-testid": "review-quote-view-all-quotes",
                                  onClick: () => {
                                    ae({
                                      event: "All Available Quotes Opened",
                                      category: D.MetaMetricsEventCategory.Swaps,
                                      sensitiveProperties: {
                                        ...ua,
                                        other_quote_selected:
                                          (null == $e ? void 0 : $e.aggregator) !== (null == Ve ? void 0 : Ve.aggregator),
                                        other_quote_selected_source:
                                          (null == $e ? void 0 : $e.aggregator) === (null == Ve ? void 0 : Ve.aggregator)
                                            ? null
                                            : null == $e
                                            ? void 0
                                            : $e.aggregator
                                      }
                                    }),
                                      ie(!0);
                                  },
                                  size: R.Size.inherit
                                },
                                te("viewAllQuotes")
                              )
                            ])
                          )
                        )
                      )
                    ),
                    n.default.createElement(x.default, {
                      onSubmit: Ma,
                      submitText: te(it && tt ? "preparingSwap" : "swap"),
                      hideCancel: !0,
                      disabled: ka,
                      className: (0, i.default)("review-quote__footer", { "review-quote__thin-swaps-footer": wa }),
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
      591,
      {
        "../Accordion/AccordionContext": 585,
        "../ButtonBase": 615,
        "../IconButton": 703,
        "../styles/withStyles": 913,
        "@babel/runtime/helpers/extends": 216,
        "@babel/runtime/helpers/interopRequireDefault": 220,
        "@babel/runtime/helpers/interopRequireWildcard": 221,
        "@babel/runtime/helpers/objectWithoutProperties": 227,
        clsx: 2954,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                  r = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                var o = r(e("@babel/runtime/helpers/extends")),
                  s = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                  l = n(e("react")),
                  i = (r(e("prop-types")), r(e("clsx"))),
                  u = r(e("../ButtonBase")),
                  c = r(e("../IconButton")),
                  d = r(e("../styles/withStyles")),
                  p = r(e("../Accordion/AccordionContext")),
                  m = function (e) {
                    var t = { duration: e.transitions.duration.shortest };
                    return {
                      root: {
                        display: "flex",
                        minHeight: 48,
                        transition: e.transitions.create(["min-height", "background-color"], t),
                        padding: e.spacing(0, 2),
                        "&:hover:not($disabled)": { cursor: "pointer" },
                        "&$expanded": { minHeight: 64 },
                        "&$focused": { backgroundColor: e.palette.action.focus },
                        "&$disabled": { opacity: e.palette.action.disabledOpacity }
                      },
                      expanded: {},
                      focused: {},
                      disabled: {},
                      content: {
                        display: "flex",
                        flexGrow: 1,
                        transition: e.transitions.create(["margin"], t),
                        margin: "12px 0",
                        "&$expanded": { margin: "20px 0" }
                      },
                      expandIcon: {
                        transform: "rotate(0deg)",
                        transition: e.transitions.create("transform", t),
                        "&:hover": { backgroundColor: "transparent" },
                        "&$expanded": { transform: "rotate(180deg)" }
                      }
                    };
                  };
                a.styles = m;
                var f = l.forwardRef(function (e, t) {
                    var a = e.children,
                      n = e.classes,
                      r = e.className,
                      d = e.expandIcon,
                      m = e.IconButtonProps,
                      f = e.onBlur,
                      g = e.onClick,
                      E = e.onFocusVisible,
                      _ = (0, s.default)(e, [
                        "children",
                        "classes",
                        "className",
                        "expandIcon",
                        "IconButtonProps",
                        "onBlur",
                        "onClick",
                        "onFocusVisible"
                      ]),
                      h = l.useState(!1),
                      T = h[0],
                      S = h[1],
                      v = l.useContext(p.default),
                      y = v.disabled,
                      b = void 0 !== y && y,
                      C = v.expanded,
                      w = v.toggle;
                    return l.createElement(
                      u.default,
                      (0, o.default)(
                        {
                          focusRipple: !1,
                          disableRipple: !0,
                          disabled: b,
                          component: "div",
                          "aria-expanded": C,
                          className: (0, i.default)(n.root, r, b && n.disabled, C && n.expanded, T && n.focused),
                          onFocusVisible: function (e) {
                            S(!0), E && E(e);
                          },
                          onBlur: function (e) {
                            S(!1), f && f(e);
                          },
                          onClick: function (e) {
                            w && w(e), g && g(e);
                          },
                          ref: t
                        },
                        _
                      ),
                      l.createElement("div", { className: (0, i.default)(n.content, C && n.expanded) }, a),
                      d &&
                        l.createElement(
                          c.default,
                          (0, o.default)(
                            {
                              className: (0, i.default)(n.expandIcon, C && n.expanded),
                              edge: "end",
                              component: "div",
                              tabIndex: null,
                              role: null,
                              "aria-hidden": !0
                            },
                            m
                          ),
                          d
                        )
                    );
                  }),
                  g = (0, d.default)(m, { name: "MuiAccordionSummary" })(f);
                a.default = g;
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/AccordionSummary/AccordionSummary.js" }
    ],
    [
      5910,
      {
        "../../../../shared/constants/swaps": 4766,
        "../../../components/component-library": 5242,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "../swaps-banner-alert/swaps-banner-alert": 5937,
        react: 4475
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
                    const d = (0, r.useContext)(o.I18nContext),
                      [p, m] = (0, r.useState)(!1),
                      f = d(p ? "preparingSwap" : "swapAnyway");
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
                            display: s.Display.Flex,
                            flexDirection: s.FlexDirection.Column,
                            justifyContent: s.JustifyContent.spaceBetween,
                            alignItems: s.AlignItems.stretch,
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
                                  m(!0), n({ acknowledgedSlippage: !0 });
                                },
                                block: !0,
                                "data-testid": "high-slippage-continue-anyway",
                                disabled: p
                              },
                              f
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("../../../contexts/i18n"),
                  s = e("../../../helpers/constants/design-system"),
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
      5911,
      {
        "../../../components/component-library": 5242,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function ({ onEnableSmartTransactionsClick: e, onCloseSmartTransactionsOptInPopover: t, isOpen: a }) {
                    const l = (0, n.useContext)(r.I18nContext);
                    return n.default.createElement(
                      s.Modal,
                      { isOpen: a, onClose: t },
                      n.default.createElement(s.ModalOverlay, null),
                      n.default.createElement(
                        s.ModalContent,
                        null,
                        n.default.createElement(s.ModalHeader, { onClose: t }, l("smartSwapsAreHere")),
                        n.default.createElement(
                          s.Box,
                          { display: o.Display.Flex, flexDirection: o.FlexDirection.Column, gap: 4, marginTop: 4 },
                          n.default.createElement(
                            s.Box,
                            { display: o.Display.Flex, flexDirection: o.FlexDirection.Column },
                            n.default.createElement("img", { src: "./images/logo/smart-transactions-header.png", alt: l("swapSwapSwitch") })
                          ),
                          n.default.createElement(s.Text, null, l("smartSwapsDescription")),
                          n.default.createElement(
                            s.Text,
                            { as: "ul", marginTop: 3, marginBottom: 3, style: { listStyle: "inside" } },
                            n.default.createElement("li", null, l("stxBenefit1")),
                            n.default.createElement("li", null, l("stxBenefit2")),
                            n.default.createElement("li", null, l("stxBenefit3")),
                            n.default.createElement(
                              "li",
                              null,
                              l("stxBenefit4"),
                              n.default.createElement(s.Text, { as: "span", fontWeight: o.FontWeight.Normal }, " *")
                            )
                          ),
                          n.default.createElement(
                            s.Text,
                            { color: o.TextColor.textAlternative },
                            l("smartSwapsSubDescription"),
                            " ",
                            n.default.createElement(
                              s.Text,
                              { as: "span", fontWeight: o.FontWeight.Bold, color: o.TextColor.textAlternative },
                              l("stxYouCanOptOut"),
                              " "
                            )
                          ),
                          n.default.createElement(
                            s.Button,
                            { variant: s.ButtonVariant.Primary, onClick: e, width: o.BlockSize.Full },
                            l("enableSmartSwaps")
                          ),
                          n.default.createElement(
                            s.Button,
                            { type: "link", variant: s.ButtonVariant.Link, onClick: t, width: o.BlockSize.Full },
                            l("noThanksVariant2")
                          )
                        )
                      )
                    );
                  });
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = l(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("../../../contexts/i18n"),
                  o = e("../../../helpers/constants/design-system"),
                  s = e("../../../components/component-library");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (l = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/prepare-swap-page/smart-transactions-popover.tsx" }
    ],
    [
      5912,
      {
        "../../../../shared/constants/gas": 4753,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "prop-types": 4219,
        react: 4475
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = c(e("prop-types")),
                  o = e("../../../contexts/i18n"),
                  s = c(e("../../../components/ui/box")),
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
                      priceSlippageFromDestination: m,
                      priceDifferencePercentage: f,
                      priceSlippageUnknownFiatValue: g
                    } = e,
                    E = (0, n.useContext)(o.I18nContext);
                  let _ = E("swapPriceUnavailableTitle"),
                    h = E("swapPriceUnavailableDescription"),
                    T = i.GasRecommendations.high;
                  g ||
                    ((_ = E("swapPriceDifferenceTitle", [f])),
                    (h = E("swapPriceDifference", [a, t.sourceTokenInfo.symbol, p, r, t.destinationTokenInfo.symbol, m])),
                    (T = t.priceSlippage.bucket));
                  const S = T === i.GasRecommendations.high ? l.SEVERITIES.DANGER : l.SEVERITIES.WARNING;
                  return n.default.createElement(
                    s.default,
                    { display: l.DISPLAY.FLEX, marginTop: 2 },
                    n.default.createElement(
                      u.BannerAlert,
                      {
                        title: _,
                        titleProps: { "data-testid": "swaps-banner-title" },
                        severity: S,
                        width: l.BLOCK_SIZES.FULL,
                        "data-testid": "mm-banner-alert"
                      },
                      n.default.createElement(
                        s.default,
                        null,
                        n.default.createElement(
                          u.Text,
                          { variant: l.TextVariant.bodyMd, as: "h6", "data-testid": "mm-banner-alert-notification-text" },
                          h
                        ),
                        !d &&
                          n.default.createElement(
                            u.ButtonLink,
                            {
                              size: u.ButtonLinkSize.Inherit,
                              textProps: { variant: l.TextVariant.bodyMd, alignItems: l.AlignItems.flexStart },
                              onClick: c
                            },
                            E("swapAnyway")
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
      5913,
      { "./searchable-item-list": 5918 },
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
      5914,
      { "./item-list.component": 5915 },
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
      5915,
      {
        "../../../../../shared/constants/metametrics": 4758,
        "../../../../../shared/constants/swaps": 4766,
        "../../../../components/ui/actionable-message/actionable-message": 5369,
        "../../../../components/ui/button": 5377,
        "../../../../components/ui/identicon": 5430,
        "../../../../components/ui/url-icon": 5511,
        "../../../../contexts/i18n": 5514,
        "../../../../contexts/metametrics": 5515,
        "../../../../helpers/utils/util": 5578,
        "../../../../selectors": 5958,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
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
                    var a = h(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = _(e("prop-types")),
                  s = _(e("classnames")),
                  l = _(e("../../../../components/ui/identicon")),
                  i = _(e("../../../../components/ui/url-icon")),
                  u = _(e("../../../../components/ui/button")),
                  c = _(e("../../../../components/ui/actionable-message/actionable-message")),
                  d = e("../../../../contexts/i18n"),
                  p = e("../../../../selectors"),
                  m = e("../../../../../shared/constants/metametrics"),
                  f = e("../../../../../shared/constants/swaps"),
                  g = e("../../../../helpers/utils/util"),
                  E = e("../../../../contexts/metametrics");
                function _(e) {
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
                function T({
                  results: e = [],
                  onClickItem: t,
                  onOpenImportTokenModalClick: a,
                  Placeholder: o,
                  listTitle: _,
                  maxListItems: h = 6,
                  searchQuery: T = "",
                  containerRef: S,
                  hideRightLabels: v,
                  hideItemIf: y,
                  listContainerClassName: b
                }) {
                  const C = (0, n.useContext)(d.I18nContext),
                    w = (0, r.useSelector)(p.getCurrentChainId),
                    k =
                      (0, r.useSelector)(p.getRpcPrefsForCurrentProvider).blockExplorerUrl ??
                      f.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[w] ??
                      null,
                    I = (0, r.useSelector)(p.getUseCurrencyRateCheck),
                    A = (0, g.getURLHostName)(k),
                    O = (0, n.useContext)(E.MetaMetricsContext),
                    N = 1 === e.length && e[0].notImported,
                    x = o ? n.default.createElement(o, { searchQuery: T }) : null;
                  return 0 === e.length
                    ? x
                    : n.default.createElement(
                        "div",
                        { className: "searchable-item-list" },
                        _ ? n.default.createElement("div", { className: "searchable-item-list__title" }, _) : null,
                        n.default.createElement(
                          "div",
                          {
                            className: (0, s.default)("searchable-item-list__list-container", b),
                            ref: S,
                            "data-testid": "searchable-item-list-list-container"
                          },
                          e.slice(0, h).map((e, r) => {
                            if (null != y && y(e)) return null;
                            const o = e.balance > 0;
                            if (e.blocked && !o && !T) return null;
                            const c = () => {
                                e.blocked || (e.notImported ? a(e) : null == t || t(e));
                              },
                              {
                                iconUrl: d,
                                identiconAddress: p,
                                selected: m,
                                blocked: f,
                                primaryLabel: g,
                                secondaryLabel: E,
                                rightPrimaryLabel: _,
                                rightSecondaryLabel: h,
                                IconComponent: S
                              } = e;
                            return n.default.createElement(
                              "div",
                              {
                                tabIndex: "0",
                                className: (0, s.default)("searchable-item-list__item", {
                                  "searchable-item-list__item--selected": m,
                                  "searchable-item-list__item--disabled": f
                                }),
                                "data-testid": "searchable-item-list__item",
                                onClick: c,
                                onKeyUp: (e) => "Enter" === e.key && c(),
                                key: `searchable-item-list-item-${r}`,
                                title: f ? C("swapTokenNotAvailable") : null
                              },
                              d || g ? n.default.createElement(i.default, { url: d, name: g }) : null,
                              d || g || !p
                                ? null
                                : n.default.createElement(
                                    "div",
                                    { className: "searchable-item-list__identicon" },
                                    n.default.createElement(l.default, { address: p, diameter: 24 })
                                  ),
                              S ? n.default.createElement(S, null) : null,
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
                                  E ? n.default.createElement("span", { className: "searchable-item-list__secondary-label" }, E) : null
                                ),
                                v || (!_ && !h)
                                  ? null
                                  : n.default.createElement(
                                      "div",
                                      { className: "searchable-item-list__right-labels" },
                                      _
                                        ? n.default.createElement("span", { className: "searchable-item-list__right-primary-label" }, _)
                                        : null,
                                      h && I
                                        ? n.default.createElement("span", { className: "searchable-item-list__right-secondary-label" }, h)
                                        : null
                                    )
                              ),
                              e.notImported &&
                                n.default.createElement(
                                  u.default,
                                  { type: "primary", onClick: c, "data-testid": "searchable-item-list-import-button" },
                                  C("import")
                                )
                            );
                          }),
                          !N &&
                            k &&
                            n.default.createElement(
                              "div",
                              {
                                tabIndex: "0",
                                className: "searchable-item-list__item searchable-item-list__item--add-token",
                                key: "searchable-item-list-item-last"
                              },
                              n.default.createElement(c.default, {
                                message: C("addTokenByContractAddress", [
                                  n.default.createElement(
                                    "a",
                                    {
                                      key: "searchable-item-list__etherscan-link",
                                      onClick: () => {
                                        O({
                                          event: "Clicked Block Explorer Link",
                                          category: m.MetaMetricsEventCategory.Swaps,
                                          properties: {
                                            link_type: "Token Tracker",
                                            action: "Verify Contract Address",
                                            block_explorer_domain: A
                                          }
                                        }),
                                          global.platform.openTab({ url: k });
                                      },
                                      target: "_blank",
                                      rel: "noopener noreferrer"
                                    },
                                    A
                                  )
                                ])
                              })
                            )
                        )
                      );
                }
                T.propTypes = {
                  results: o.default.arrayOf(
                    o.default.shape({
                      iconUrl: o.default.string,
                      selected: o.default.bool,
                      blocked: o.default.bool,
                      primaryLabel: o.default.string,
                      secondaryLabel: o.default.string,
                      rightPrimaryLabel: o.default.string,
                      rightSecondaryLabel: o.default.string
                    })
                  ),
                  onClickItem: o.default.func,
                  onOpenImportTokenModalClick: o.default.func,
                  Placeholder: o.default.func,
                  listTitle: o.default.string,
                  maxListItems: o.default.number,
                  searchQuery: o.default.string,
                  containerRef: o.default.shape({ current: o.default.instanceOf(window.Element) }),
                  hideRightLabels: o.default.bool,
                  hideItemIf: o.default.func,
                  listContainerClassName: o.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/searchable-item-list/item-list/item-list.component.js" }
    ],
    [
      5916,
      { "./list-item-search.component": 5917 },
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
      5917,
      {
        "../../../../../shared/modules/hexstring-utils": 4788,
        "../../../../components/ui/icon/search-icon": 5424,
        "../../../../components/ui/text-field": 5491,
        "../../../../hooks/usePrevious": 5608,
        "../../../../selectors/selectors": 5961,
        "../../swaps.util": 5940,
        "@material-ui/core/InputAdornment": 707,
        "fuse.js": 3582,
        loglevel: 4083,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
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
                    var a = E(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = g(e("prop-types")),
                  s = g(e("fuse.js")),
                  l = g(e("loglevel")),
                  i = g(e("@material-ui/core/InputAdornment")),
                  u = g(e("../../../../components/ui/text-field")),
                  c = e("../../../../hooks/usePrevious"),
                  d = e("../../../../../shared/modules/hexstring-utils"),
                  p = e("../../swaps.util"),
                  m = e("../../../../selectors/selectors"),
                  f = g(e("../../../../components/ui/icon/search-icon"));
                function g(e) {
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
                const _ = () =>
                  n.default.createElement(
                    i.default,
                    { position: "start", style: { marginRight: "12px" } },
                    n.default.createElement(f.default, { size: 20, color: "var(--color-icon-muted)" })
                  );
                let h;
                function T({
                  onSearch: e,
                  error: t,
                  listToSearch: a = [],
                  fuseSearchKeys: o,
                  searchPlaceholderText: i,
                  defaultToAll: f,
                  shouldSearchForImports: g,
                  searchQuery: E,
                  setSearchQuery: T
                }) {
                  const S = (0, n.useRef)(),
                    v = (0, r.useSelector)(m.getCurrentChainId),
                    y = async (t) => {
                      T(t),
                        h && clearTimeout(h),
                        (h = setTimeout(async () => {
                          h = null;
                          const n = t.trim(),
                            r = (0, d.isValidHexAddress)(n),
                            o = S.current.search(t),
                            s = f && "" === t ? a : o;
                          g && 0 === s.length && r
                            ? await (async (t) => {
                                try {
                                  const a = await (0, p.fetchToken)(t, v);
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
                            : e({ searchQuery: t, results: s });
                        }, 350));
                    };
                  (0, n.useEffect)(() => () => clearTimeout(h), []),
                    (0, n.useEffect)(() => {
                      S.current ||
                        (S.current = new s.default(a, {
                          shouldSort: !0,
                          threshold: 0.45,
                          location: 0,
                          distance: 100,
                          maxPatternLength: 32,
                          minMatchCharLength: 1,
                          keys: o
                        }));
                    }, [o, a]);
                  const b = (0, c.usePrevious)(a ?? []);
                  return (
                    (0, n.useEffect)(() => {
                      if (S.current && E && b !== a) {
                        S.current.setCollection(a);
                        const t = S.current.search(E);
                        e({ searchQuery: E, results: t });
                      }
                    }, [a, E, e, b]),
                    n.default.createElement(u.default, {
                      "data-testid": "search-list-items",
                      className: "searchable-item-list__search",
                      placeholder: i,
                      type: "text",
                      value: E,
                      onChange: (e) => y(e.target.value),
                      error: t,
                      fullWidth: !0,
                      startAdornment: _(),
                      autoComplete: "off",
                      autoFocus: !0
                    })
                  );
                }
                T.propTypes = {
                  onSearch: o.default.func,
                  error: o.default.string,
                  listToSearch: o.default.array.isRequired,
                  fuseSearchKeys: o.default.arrayOf(o.default.object).isRequired,
                  searchPlaceholderText: o.default.string,
                  defaultToAll: o.default.bool,
                  shouldSearchForImports: o.default.bool,
                  searchQuery: o.default.string,
                  setSearchQuery: o.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/searchable-item-list/list-item-search/list-item-search.component.js" }
    ],
    [
      5918,
      { "./item-list": 5914, "./list-item-search": 5916, "prop-types": 4219, react: 4475 },
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = l(e("prop-types")),
                  o = l(e("./item-list")),
                  s = l(e("./list-item-search"));
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
                  searchPlaceholderText: m,
                  hideRightLabels: f,
                  hideItemIf: g,
                  listContainerClassName: E,
                  shouldSearchForImports: _,
                  searchQuery: h,
                  setSearchQuery: T
                }) {
                  const S = (0, n.useRef)(),
                    v = (0, n.useMemo)(() => (t ? l : []), [t, l]),
                    [y, b] = (0, n.useState)(v);
                  return (
                    (0, n.useEffect)(() => {
                      h || b(v);
                    }, [v.length, h]),
                    n.default.createElement(
                      "div",
                      { className: e },
                      n.default.createElement(s.default, {
                        listToSearch: l,
                        fuseSearchKeys: a,
                        onSearch: ({ searchQuery: e = "", results: t = [] }) => {
                          T(e), b(t);
                        },
                        error: r,
                        searchPlaceholderText: m,
                        defaultToAll: t,
                        shouldSearchForImports: _,
                        searchQuery: h,
                        setSearchQuery: T
                      }),
                      n.default.createElement(o.default, {
                        searchQuery: h,
                        results: y,
                        onClickItem: c,
                        onOpenImportTokenModalClick: d,
                        Placeholder: p,
                        listTitle: i,
                        maxListItems: u,
                        containerRef: S,
                        hideRightLabels: f,
                        hideItemIf: g,
                        listContainerClassName: E
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
      5919,
      { "./select-quote-popover": 5923 },
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
      592,
      { "./AccordionSummary": 591, "@babel/runtime/helpers/interopRequireDefault": 220 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var r = n(e("./AccordionSummary"));
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/AccordionSummary/index.js" }
    ],
    [
      5920,
      { "./quote-details": 5921 },
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
      5921,
      {
        "../../../../components/ui/info-tooltip": 5431,
        "../../../../contexts/i18n": 5514,
        "../../../../selectors": 5958,
        "../../exchange-rate-display": 5893,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = c(e("prop-types")),
                  s = e("../../../../contexts/i18n"),
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
                  destinationTokenValue: o,
                  destinationTokenSymbol: c,
                  liquiditySourceKey: d,
                  minimumAmountReceived: p,
                  feeInEth: m,
                  networkFees: f,
                  metaMaskFee: g,
                  hideEstimatedGasFee: E
                }) => {
                  const _ = (0, n.useContext)(s.I18nContext),
                    h = (0, r.useSelector)(u.getUseCurrencyRateCheck);
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
                          secondaryTokenValue: o,
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
                    !E &&
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
                          n.default.createElement("span", null, m),
                          n.default.createElement("span", { className: "quote-details__light-grey" }, h && ` (${f})`)
                        )
                      ),
                    n.default.createElement(
                      "div",
                      { className: "quote-details__row" },
                      n.default.createElement(
                        "div",
                        { className: "quote-details__detail-header" },
                        _("swapSource"),
                        n.default.createElement(l.default, { position: "bottom", contentText: _("swapSourceInfo") })
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
                  slippage: o.default.number.isRequired,
                  sourceTokenValue: o.default.string.isRequired,
                  sourceTokenSymbol: o.default.string.isRequired,
                  destinationTokenValue: o.default.string.isRequired,
                  destinationTokenSymbol: o.default.string.isRequired,
                  liquiditySourceKey: o.default.string.isRequired,
                  minimumAmountReceived: o.default.string.isRequired,
                  feeInEth: o.default.string.isRequired,
                  networkFees: o.default.string.isRequired,
                  metaMaskFee: o.default.number.isRequired,
                  hideEstimatedGasFee: o.default.bool
                };
                a.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/select-quote-popover/quote-details/quote-details.js" }
    ],
    [
      5922,
      { "prop-types": 4219 },
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
      5923,
      {
        "../../../components/ui/button": 5377,
        "../../../components/ui/popover": 5465,
        "../../../contexts/i18n": 5514,
        "./quote-details": 5920,
        "./select-quote-popover-constants": 5922,
        "./sort-list": 5924,
        "prop-types": 4219,
        react: 4475
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = d(e("prop-types")),
                  o = e("../../../contexts/i18n"),
                  s = d(e("../../../components/ui/popover")),
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
                function m() {
                  return (
                    (m = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                          }
                          return e;
                        }),
                    m.apply(this, arguments)
                  );
                }
                const f = ({
                  quoteDataRows: e = [],
                  onClose: t = null,
                  onSubmit: a = null,
                  swapToSymbol: r,
                  initialAggId: c,
                  onQuoteDetailsIsOpened: d,
                  hideEstimatedGasFee: p
                }) => {
                  const f = (0, n.useContext)(o.I18nContext),
                    [g, E] = (0, n.useState)(1),
                    [_, h] = (0, n.useState)(null),
                    [T, S] = (0, n.useState)(c),
                    [v, y] = (0, n.useState)("sortList"),
                    [b, C] = (0, n.useState)(null),
                    w = (0, n.useCallback)(() => {
                      a(T), t();
                    }, [T, t, a]),
                    k = (0, n.useCallback)(() => {
                      C(null), y("sortList");
                    }, []),
                    I = (0, n.useCallback)((e) => S(e), [S]),
                    A = (0, n.useCallback)(
                      (t) => {
                        const a = e.find((e) => e.aggId === t);
                        y("quoteDetails"), d(), C(a);
                      },
                      [e, d]
                    ),
                    O = (0, n.useCallback)(
                      () => n.default.createElement("div", { className: "select-quote-popover__popover-bg", onClick: t }),
                      [t]
                    ),
                    N = n.default.createElement(
                      n.default.Fragment,
                      null,
                      n.default.createElement(
                        l.default,
                        { type: "secondary", className: "page-container__footer-button select-quote-popover__button", onClick: t },
                        f("close")
                      ),
                      n.default.createElement(
                        l.default,
                        { type: "primary", className: "page-container__footer-button select-quote-popover__button", onClick: w },
                        f("swapSelect")
                      )
                    );
                  return n.default.createElement(
                    "div",
                    { className: "select-quote-popover" },
                    n.default.createElement(
                      s.default,
                      {
                        title: f("quoteDetails" === v ? "swapSelectAQuote" : "swapQuoteDetails"),
                        subtitle: "sortList" === v ? f("swapSelectQuotePopoverDescription") : null,
                        onClose: t,
                        CustomBackground: O,
                        className: "select-quote-popover__popover-wrap",
                        footerClassName: "swaps__footer",
                        footer: "quoteDetails" === v ? null : N,
                        onBack: "quoteDetails" === v ? k : null
                      },
                      "sortList" === v &&
                        n.default.createElement(u.default, {
                          quoteDataRows: e,
                          selectedAggId: T,
                          onSelect: I,
                          onCaretClick: A,
                          swapToSymbol: r,
                          sortDirection: g,
                          setSortDirection: E,
                          sortColumn: _,
                          setSortColumn: h,
                          hideEstimatedGasFee: p
                        }),
                      "quoteDetails" === v && b && n.default.createElement(i.default, m({}, b, { hideEstimatedGasFee: p }))
                    )
                  );
                };
                f.propTypes = {
                  onClose: r.default.func,
                  onSubmit: r.default.func,
                  swapToSymbol: r.default.string,
                  quoteDataRows: r.default.arrayOf(c.QUOTE_DATA_ROWS_PROPTYPES_SHAPE),
                  initialAggId: r.default.string,
                  onQuoteDetailsIsOpened: r.default.func,
                  hideEstimatedGasFee: r.default.bool.isRequired
                };
                a.default = f;
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/select-quote-popover/select-quote-popover.js" }
    ],
    [
      5924,
      { "./sort-list": 5925 },
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
      5925,
      {
        "../../../../components/ui/icon/sun-check-icon.component": 5425,
        "../../../../components/ui/info-tooltip": 5431,
        "../../../../contexts/i18n": 5514,
        "../../../../selectors": 5958,
        "../select-quote-popover-constants": 5922,
        "bignumber.js": 2804,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
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
                    var a = f(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = m(e("prop-types")),
                  s = m(e("classnames")),
                  l = m(e("bignumber.js")),
                  i = m(e("../../../../components/ui/icon/sun-check-icon.component")),
                  u = e("../../../../contexts/i18n"),
                  c = e("../select-quote-popover-constants"),
                  d = m(e("../../../../components/ui/info-tooltip")),
                  p = e("../../../../selectors");
                function m(e) {
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
                const g = () =>
                  n.default.createElement(
                    "svg",
                    { width: "6", height: "9", viewBox: "0 0 6 9", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    n.default.createElement("path", {
                      d: "M0.7948 4.96973C0.365112 4.96973 0.150269 5.47754 0.462769 5.77051L2.78699 8.09473C2.96277 8.29004 3.25574 8.29004 3.45105 8.09473L5.77527 5.77051C6.06824 5.47754 5.85339 4.96973 5.44324 4.96973H0.7948ZM5.77527 2.91895L3.45105 0.594727C3.25574 0.418945 2.96277 0.418945 2.78699 0.594727L0.462769 2.91895C0.150269 3.23145 0.365112 3.71973 0.7948 3.71973H5.44324C5.85339 3.71973 6.06824 3.23145 5.77527 2.91895Z",
                      fill: "var(--color-primary-default)"
                    })
                  );
                function E({
                  quoteDataRows: e,
                  selectedAggId: t,
                  onSelect: a,
                  onCaretClick: o,
                  swapToSymbol: c,
                  sortDirection: m,
                  setSortDirection: f,
                  sortColumn: E = null,
                  setSortColumn: _,
                  hideEstimatedGasFee: h
                }) {
                  const T = (0, n.useContext)(u.I18nContext),
                    [S, v] = (0, n.useState)(!1),
                    y = (0, r.useSelector)(p.getUseCurrencyRateCheck),
                    b = (e) => {
                      e === E ? f(-1 * m) : _(e);
                    },
                    C = (0, n.useMemo)(
                      () =>
                        [...e].sort((e, t) => {
                          if (null === E && e.isBestQuote) return -1;
                          if (null === E && t.isBestQuote) return 1;
                          if (null === E) {
                            const a = new l.default(e.destinationTokenValue).toString(16),
                              n = new l.default(t.destinationTokenValue).toString(16);
                            return a[a.length - 1] < n[n.length - 1] ? -1 : 1;
                          }
                          return "quoteSource" === E ? (e[E] > t[E] ? -1 * m : m) : new l.default(e[E]).gt(t[E]) ? -1 * m : m;
                        }),
                      [e, E, m]
                    ),
                    w = C.findIndex(({ aggId: e }) => t === e);
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
                          n.default.createElement("span", null, T("swapReceiving")),
                          n.default.createElement(d.default, { position: "bottom", contentText: T("swapReceivingInfoTooltip") }),
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
                        !h &&
                          y &&
                          n.default.createElement(
                            n.default.Fragment,
                            null,
                            n.default.createElement("span", null, T("swapEstimatedNetworkFees")),
                            n.default.createElement(d.default, { position: "bottom", contentText: T("swapEstimatedNetworkFeesInfo") }),
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
                        T("swapQuoteSource"),
                        n.default.createElement(
                          "div",
                          { className: "select-quote-popover__quote-source-toggle" },
                          n.default.createElement(g, null)
                        )
                      )
                    ),
                    C.map(({ destinationTokenValue: e, networkFees: t, isBestQuote: r, quoteSource: l, aggId: u }, c) =>
                      n.default.createElement(
                        "div",
                        {
                          className: (0, s.default)("select-quote-popover__row", {
                            "select-quote-popover__row--selected": w === c,
                            "select-quote-popover__row--no-hover": S
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
                            r && n.default.createElement(i.default, { reverseColors: w !== c }),
                            n.default.createElement("div", { className: "select-quote-popover__receiving-value-text", title: e }, e)
                          ),
                          "RFQ" === l &&
                            n.default.createElement("span", { className: "select-quote-popover__zero-slippage" }, T("swapZeroSlippage"))
                        ),
                        n.default.createElement("div", { className: "select-quote-popover__network-fees" }, !h && y && t),
                        n.default.createElement(
                          "div",
                          { className: "select-quote-popover__quote-source" },
                          n.default.createElement(
                            "div",
                            {
                              className: (0, s.default)("select-quote-popover__quote-source-label", {
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
                              e.stopPropagation(), o(u);
                            },
                            onMouseEnter: () => v(!0),
                            onMouseLeave: () => v(!1)
                          },
                          n.default.createElement("i", { className: "fa fa-angle-up" })
                        )
                      )
                    )
                  );
                }
                E.propTypes = {
                  selectedAggId: o.default.string.isRequired,
                  onSelect: o.default.func.isRequired,
                  onCaretClick: o.default.func.isRequired,
                  swapToSymbol: o.default.string.isRequired,
                  quoteDataRows: o.default.arrayOf(c.QUOTE_DATA_ROWS_PROPTYPES_SHAPE).isRequired,
                  sortDirection: o.default.number.isRequired,
                  setSortDirection: o.default.func.isRequired,
                  sortColumn: o.default.string,
                  setSortColumn: o.default.func.isRequired,
                  hideEstimatedGasFee: o.default.bool.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/select-quote-popover/sort-list/sort-list.js" }
    ],
    [
      5926,
      {
        "../../../components/component-library": 5242,
        "../../../components/ui/url-icon": 5511,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = c(e("prop-types")),
                  o = c(e("classnames")),
                  s = e("../../../components/component-library"),
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
                      className: (0, o.default)(
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
                        { className: (0, o.default)("dropdown-search-list__labels", { "dropdown-search-list__labels--with-icon": d }) },
                        n.default.createElement(
                          "div",
                          { className: "dropdown-search-list__item-labels" },
                          n.default.createElement(
                            "span",
                            {
                              "data-testid": r,
                              className: (0, o.default)("dropdown-search-list__closed-primary-label", {
                                "dropdown-search-list__select-default": !(null != a && a.symbol)
                              })
                            },
                            (null == a ? void 0 : a.symbol) || c("swapSelectAToken")
                          )
                        )
                      )
                    ),
                    n.default.createElement(s.Icon, {
                      name: s.IconName.ArrowDown,
                      size: s.IconSize.Xs,
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
      5927,
      { "./slippage-buttons": 5928 },
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
      5928,
      {
        "../../../../shared/constants/swaps": 4766,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../components/ui/button": 5377,
        "../../../components/ui/button-group": 5375,
        "../../../components/ui/info-tooltip": 5431,
        "../../../components/ui/toggle-button": 5495,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "../swaps.util": 5940,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
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
                    var a = _(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = E(e("prop-types")),
                  o = E(e("classnames")),
                  s = e("../../../contexts/i18n"),
                  l = E(e("../../../components/ui/button-group")),
                  i = E(e("../../../components/ui/button")),
                  u = E(e("../../../components/ui/info-tooltip")),
                  c = E(e("../../../components/ui/toggle-button")),
                  d = E(e("../../../components/ui/box")),
                  p = e("../../../helpers/constants/design-system"),
                  m = e("../swaps.util"),
                  f = e("../../../../shared/constants/swaps"),
                  g = e("../../../components/component-library");
                function E(e) {
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
                function h({
                  onSelect: e,
                  maxAllowedSlippage: t,
                  currentSlippage: a,
                  smartTransactionsEnabled: r,
                  smartTransactionsOptInStatus: E,
                  setSmartTransactionsOptInStatus: _,
                  currentSmartTransactionsError: h,
                  isDirectWrappingEnabled: T
                }) {
                  const S = (0, n.useContext)(s.I18nContext),
                    [v, y] = (0, n.useState)(() => ("number" != typeof a || Object.values(f.Slippage).includes(a) ? "" : a.toString())),
                    [b, C] = (0, n.useState)(!1),
                    [w, k] = (0, n.useState)(() =>
                      a === f.Slippage.high ? 1 : a === f.Slippage.default ? 0 : "number" == typeof a ? 2 : 0
                    ),
                    [I, A] = (0, n.useState)(() => a !== f.Slippage.default),
                    [O, N] = (0, n.useState)(null);
                  let x = "";
                  v &&
                    (Number(v) < 0
                      ? (x = S("swapSlippageNegative"))
                      : Number(v) > 0 && Number(v) <= 1
                      ? (x = S("swapLowSlippageError"))
                      : Number(v) >= 5 && Number(v) <= t
                      ? (x = S("swapHighSlippageWarning"))
                      : Number(v) > t && (x = S("swapsExcessiveSlippageWarning")));
                  const P = v || S("swapCustom");
                  return (
                    (0, n.useEffect)(() => {
                      O && b && window.document.activeElement !== O && O.focus();
                    }, [O, b]),
                    n.default.createElement(
                      "div",
                      { className: "slippage-buttons" },
                      n.default.createElement(
                        "button",
                        {
                          onClick: () => A(!I),
                          className: (0, o.default)("slippage-buttons__header", { "slippage-buttons__header--open": I })
                        },
                        n.default.createElement("div", { className: "slippage-buttons__header-text" }, S("swapsAdvancedOptions")),
                        I
                          ? n.default.createElement("i", { className: "fa fa-angle-up" })
                          : n.default.createElement("i", { className: "fa fa-angle-down" })
                      ),
                      n.default.createElement(
                        "div",
                        { className: "slippage-buttons__content" },
                        I &&
                          n.default.createElement(
                            n.default.Fragment,
                            null,
                            !T &&
                              n.default.createElement(
                                "div",
                                { className: "slippage-buttons__dropdown-content" },
                                n.default.createElement(
                                  "div",
                                  { className: "slippage-buttons__buttons-prefix" },
                                  n.default.createElement("div", { className: "slippage-buttons__prefix-text" }, S("swapsMaxSlippage")),
                                  n.default.createElement(u.default, { position: "top", contentText: S("swapSlippageTooltip") })
                                ),
                                n.default.createElement(
                                  l.default,
                                  {
                                    defaultActiveButtonIndex: 2 !== w || v ? w : 1,
                                    variant: "radiogroup",
                                    newActiveButtonIndex: w,
                                    className: (0, o.default)("button-group", "slippage-buttons__button-group")
                                  },
                                  n.default.createElement(
                                    i.default,
                                    {
                                      onClick: () => {
                                        y(""), C(!1), k(0), e(f.Slippage.default);
                                      }
                                    },
                                    S("swapSlippagePercent", [f.Slippage.default])
                                  ),
                                  n.default.createElement(
                                    i.default,
                                    {
                                      onClick: () => {
                                        y(""), C(!1), k(1), e(f.Slippage.high);
                                      }
                                    },
                                    S("swapSlippagePercent", [f.Slippage.high])
                                  ),
                                  n.default.createElement(
                                    i.default,
                                    {
                                      className: (0, o.default)("slippage-buttons__button-group-custom-button", {
                                        "radio-button--danger": x
                                      }),
                                      onClick: () => {
                                        k(2), C(!0);
                                      }
                                    },
                                    b
                                      ? n.default.createElement(
                                          "div",
                                          {
                                            className: (0, o.default)("slippage-buttons__custom-input", {
                                              "slippage-buttons__custom-input--danger": x
                                            })
                                          },
                                          n.default.createElement("input", {
                                            "data-testid": "slippage-buttons__custom-slippage",
                                            onChange: (t) => {
                                              const { value: a } = t.target;
                                              !isNaN(Number(a)) && (y(a), e(Number(a)));
                                            },
                                            type: "text",
                                            maxLength: "4",
                                            ref: N,
                                            onBlur: () => {
                                              C(!1);
                                            },
                                            value: v || ""
                                          })
                                        )
                                      : P,
                                    (v || b) && n.default.createElement("div", { className: "slippage-buttons__percentage-suffix" }, "%")
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
                                    S("smartSwap")
                                  ),
                                  h
                                    ? n.default.createElement(u.default, {
                                        position: "top",
                                        contentText: (0, m.getTranslatedStxErrorMessage)(h, S)
                                      })
                                    : n.default.createElement(u.default, { position: "top", contentText: S("stxTooltip") })
                                ),
                                n.default.createElement(c.default, {
                                  value: E,
                                  onToggle: (e) => {
                                    _(!e, e);
                                  },
                                  offLabel: S("off"),
                                  onLabel: S("on"),
                                  disabled: Boolean(h)
                                })
                              )
                          ),
                        x && n.default.createElement("div", { className: "slippage-buttons__error-text" }, x)
                      )
                    )
                  );
                }
                h.propTypes = {
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
      5929,
      { react: 4475 },
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
      593,
      {
        "../Paper": 753,
        "../styles/withStyles": 913,
        "../utils/capitalize": 921,
        "@babel/runtime/helpers/extends": 216,
        "@babel/runtime/helpers/interopRequireDefault": 220,
        "@babel/runtime/helpers/interopRequireWildcard": 221,
        "@babel/runtime/helpers/objectWithoutProperties": 227,
        clsx: 2954,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                  r = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                var o = r(e("@babel/runtime/helpers/extends")),
                  s = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                  l = n(e("react")),
                  i = (r(e("prop-types")), r(e("clsx"))),
                  u = r(e("../styles/withStyles")),
                  c = r(e("../utils/capitalize")),
                  d = r(e("../Paper")),
                  p = function (e) {
                    var t = "light" === e.palette.type ? e.palette.grey[100] : e.palette.grey[900];
                    return {
                      root: {
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        boxSizing: "border-box",
                        zIndex: e.zIndex.appBar,
                        flexShrink: 0
                      },
                      positionFixed: { position: "fixed", top: 0, left: "auto", right: 0, "@media print": { position: "absolute" } },
                      positionAbsolute: { position: "absolute", top: 0, left: "auto", right: 0 },
                      positionSticky: { position: "sticky", top: 0, left: "auto", right: 0 },
                      positionStatic: { position: "static" },
                      positionRelative: { position: "relative" },
                      colorDefault: { backgroundColor: t, color: e.palette.getContrastText(t) },
                      colorPrimary: { backgroundColor: e.palette.primary.main, color: e.palette.primary.contrastText },
                      colorSecondary: { backgroundColor: e.palette.secondary.main, color: e.palette.secondary.contrastText },
                      colorInherit: { color: "inherit" },
                      colorTransparent: { backgroundColor: "transparent", color: "inherit" }
                    };
                  };
                a.styles = p;
                var m = l.forwardRef(function (e, t) {
                    var a = e.classes,
                      n = e.className,
                      r = e.color,
                      u = void 0 === r ? "primary" : r,
                      p = e.position,
                      m = void 0 === p ? "fixed" : p,
                      f = (0, s.default)(e, ["classes", "className", "color", "position"]);
                    return l.createElement(
                      d.default,
                      (0, o.default)(
                        {
                          square: !0,
                          component: "header",
                          elevation: 4,
                          className: (0, i.default)(
                            a.root,
                            a["position".concat((0, c.default)(m))],
                            a["color".concat((0, c.default)(u))],
                            n,
                            "fixed" === m && "mui-fixed"
                          ),
                          ref: t
                        },
                        f
                      )
                    );
                  }),
                  f = (0, u.default)(p, { name: "MuiAppBar" })(m);
                a.default = f;
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/AppBar/AppBar.js" }
    ],
    [
      5930,
      { react: 4475 },
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
      5931,
      { "./smart-transaction-status": 5933 },
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
      5932,
      { react: 4475 },
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
      5933,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/swaps": 4766,
        "../../../../shared/constants/transaction": 4770,
        "../../../../shared/lib/transactions-controller-utils": 4778,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../components/ui/url-icon": 5511,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../create-new-swap": 5887,
        "../swaps-footer": 5938,
        "../swaps.util": 5940,
        "../view-on-block-explorer": 5942,
        "./arrow-icon": 5929,
        "./canceled-icon": 5930,
        "./reverted-icon": 5932,
        "./success-icon": 5934,
        "./timer-icon": 5935,
        "./unknown-icon": 5936,
        "@metamask/etherscan-link": 1370,
        lodash: 4071,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    var e, t, a, R, M, D, L, F, j;
                    const [U, W] = (0, n.useState)(!1),
                      q = (0, n.useContext)(i.I18nContext),
                      G = (0, o.useHistory)(),
                      B = (0, r.useDispatch)(),
                      H = (0, r.useSelector)(u.getFetchParams, l.isEqual) || {},
                      { destinationTokenInfo: V = {}, sourceTokenInfo: $ = {} } = (null == H ? void 0 : H.metaData) || {},
                      K = (0, r.useSelector)(c.isHardwareWallet),
                      Q = (0, r.useSelector)(c.getHardwareWalletType),
                      Y = (0, r.useSelector)(u.getSelectedQuote, l.isEqual),
                      X = (0, r.useSelector)(u.getTopQuote, l.isEqual),
                      Z = Y || X,
                      z = (0, r.useSelector)(u.getCurrentSmartTransactions, l.isEqual),
                      J = (0, r.useSelector)(u.getSmartTransactionsOptInStatus),
                      ee = (0, r.useSelector)(c.getCurrentChainId),
                      te = (0, r.useSelector)(c.getRpcPrefsForCurrentProvider, r.shallowEqual),
                      ae = (0, r.useSelector)(u.getSwapsNetworkConfig, r.shallowEqual),
                      ne = (0, r.useSelector)(u.getSmartTransactionsEnabled),
                      re = (0, r.useSelector)(u.getCurrentSmartTransactionsEnabled),
                      oe = te.blockExplorerUrl ?? d.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[ee] ?? null,
                      se = (0, r.useSelector)(p.getNativeCurrency),
                      le = (0, r.useSelector)(c.conversionRateSelector),
                      ie = (0, r.useSelector)(c.getUSDConversionRate),
                      ue = (0, r.useSelector)(c.getCurrentCurrency);
                    let ce,
                      de,
                      pe = S.SmartTransactionStatus.pending,
                      me = {};
                    if (z && z.length > 0) {
                      var fe, ge, Ee;
                      (me = z[z.length - 1]),
                        (ce = null === (fe = me) || void 0 === fe ? void 0 : fe.uuid),
                        (pe = (null === (ge = me) || void 0 === ge ? void 0 : ge.status) || S.SmartTransactionStatus.pending),
                        (de =
                          null === (Ee = me) || void 0 === Ee || null === (Ee = Ee.statusMetadata) || void 0 === Ee
                            ? void 0
                            : Ee.cancellationFeeWei);
                    }
                    const [_e, he] = (0, n.useState)(ae.stxStatusDeadline),
                      Te = {
                        needs_two_confirmations: !0,
                        token_from: $.symbol ?? (null === (e = me) || void 0 === e ? void 0 : e.sourceTokenSymbol),
                        token_from_amount:
                          (null == H ? void 0 : H.value) ?? (null === (t = me) || void 0 === t ? void 0 : t.swapTokenValue),
                        token_to: V.symbol ?? (null === (a = me) || void 0 === a ? void 0 : a.destinationTokenSymbol),
                        request_type: null != H && H.balanceError ? "Quote" : "Order",
                        slippage: null == H ? void 0 : H.slippage,
                        custom_slippage: 2 === (null == H ? void 0 : H.slippage),
                        is_hardware_wallet: K,
                        hardware_wallet_type: Q,
                        stx_enabled: ne,
                        current_stx_enabled: re,
                        stx_user_opt_in: J
                      };
                    let Se;
                    var ve;
                    null != Z &&
                      Z.destinationAmount &&
                      (Se = (0, k.calcTokenAmount)(
                        null == Z ? void 0 : Z.destinationAmount,
                        V.decimals ?? (null === (ve = me) || void 0 === ve ? void 0 : ve.destinationTokenDecimals)
                      ).toPrecision(8));
                    const ye = (0, n.useContext)(b.MetaMetricsContext),
                      be = pe === S.SmartTransactionStatus.pending,
                      Ce = be || pe === S.SmartTransactionStatus.success,
                      we = null === (R = me) || void 0 === R || null === (R = R.statusMetadata) || void 0 === R ? void 0 : R.minedHash;
                    (0, n.useEffect)(() => {
                      ye({ event: "STX Status Page Loaded", category: T.MetaMetricsEventCategory.Swaps, sensitiveProperties: Te });
                    }, []),
                      (0, n.useEffect)(() => {
                        let e;
                        if (be && ce) {
                          const t = () => {
                            const t = Math.round((Date.now() - me.time) / 1e3);
                            if (t > ae.stxStatusDeadline) return he(0), void clearInterval(e);
                            he(ae.stxStatusDeadline - t);
                          };
                          (e = setInterval(t, 1e3)), t();
                        }
                        return () => clearInterval(e);
                      }, [B, be, ce, me.time, ae.stxStatusDeadline]),
                      (0, n.useEffect)(() => {
                        B((0, h.setBackgroundSwapRouteState)("smartTransactionStatus")),
                          setTimeout(() => {
                            B((0, h.stopPollingForQuotes)());
                          }, 1e3);
                      }, [B]);
                    let ke,
                      Ie,
                      Ae,
                      Oe,
                      Ne = q("stxPendingPrivatelySubmittingSwap");
                    be && (U ? (Ne = q("stxTryingToCancel")) : de > 0 && (Ne = q("stxPendingPubliclySubmittingSwap")));
                    if (pe === S.SmartTransactionStatus.success) {
                      var xe, Pe;
                      if (((Ne = q("stxSuccess")), V.symbol || (null !== (xe = me) && void 0 !== xe && xe.destinationTokenSymbol)))
                        ke = q("stxSuccessDescription", [
                          V.symbol ?? (null === (Pe = me) || void 0 === Pe ? void 0 : Pe.destinationTokenSymbol)
                        ]);
                      Ae = n.default.createElement(I.default, null);
                    } else
                      "cancelled_user_cancelled" === pe ||
                      (null === (M = me) || void 0 === M || null === (M = M.statusMetadata) || void 0 === M ? void 0 : M.minedTx) ===
                        S.SmartTransactionStatus.cancelled
                        ? ((Ne = q("stxUserCancelled")),
                          (ke = q("stxUserCancelledDescription")),
                          (Ae = n.default.createElement(O.default, null)))
                        : pe.startsWith("cancelled") || pe.includes("deadline_missed")
                        ? ((Ne = q("stxCancelled")),
                          (ke = q("stxCancelledDescription")),
                          (Ie = q("stxCancelledSubDescription")),
                          (Ae = n.default.createElement(O.default, null)))
                        : "unknown" === pe
                        ? ((Ne = q("stxUnknown")), (ke = q("stxUnknownDescription")), (Ae = n.default.createElement(N.default, null)))
                        : "reverted" === pe &&
                          ((Ne = q("stxFailure")),
                          (ke = q("stxFailureDescription", [
                            n.default.createElement(
                              "a",
                              {
                                className: "smart-transaction-status__support-link",
                                key: "smart-transaction-status-support-link",
                                href: "https://support.metamask.io",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              },
                              q("customerSupport")
                            )
                          ])),
                          (Ae = n.default.createElement(A.default, null)));
                    we && ce && (Oe = (0, s.getBlockExplorerLink)({ hash: we, chainId: ee }, { blockExplorerUrl: oe }));
                    const Re = me.cancellable && !U,
                      Me = () => {
                        const { feeInFiat: e } = (0, y.getFeeForSmartTransaction)({
                          chainId: ee,
                          currentCurrency: ue,
                          conversionRate: le,
                          USDConversionRate: ie,
                          nativeCurrencySymbol: se,
                          feeInWeiDec: de || 0
                        });
                        return n.default.createElement(
                          g.default,
                          { marginBottom: 0 },
                          n.default.createElement(
                            "a",
                            {
                              className: "smart-transaction-status__cancel-swap-link",
                              href: "#",
                              onClick: (e) => {
                                null == e || e.preventDefault(),
                                  W(!0),
                                  ye({ event: "Cancel STX", category: T.MetaMetricsEventCategory.Swaps, sensitiveProperties: Te }),
                                  B((0, u.cancelSwapsSmartTransaction)(ce));
                              }
                            },
                            q("attemptToCancelSwap", [e])
                          )
                        );
                      };
                    return n.default.createElement(
                      "div",
                      { className: "smart-transaction-status" },
                      n.default.createElement(
                        g.default,
                        {
                          paddingLeft: 8,
                          paddingRight: 8,
                          height: _.BLOCK_SIZES.FULL,
                          justifyContent: _.JustifyContent.flexStart,
                          display: _.DISPLAY.FLEX,
                          className: "smart-transaction-status__content"
                        },
                        n.default.createElement(
                          g.default,
                          {
                            marginTop: 10,
                            marginBottom: 0,
                            display: _.DISPLAY.FLEX,
                            justifyContent: _.JustifyContent.center,
                            alignItems: _.AlignItems.center
                          },
                          n.default.createElement(
                            f.Text,
                            { color: _.TextColor.textAlternative, variant: _.TextVariant.bodySm, as: "h6" },
                            `${(null == H ? void 0 : H.value) && Number(H.value).toFixed(5)} `
                          ),
                          n.default.createElement(
                            f.Text,
                            {
                              color: _.TextColor.textAlternative,
                              variant: _.TextVariant.bodySmBold,
                              as: "h6",
                              marginLeft: 1,
                              marginRight: 2
                            },
                            $.symbol ?? (null === (D = me) || void 0 === D ? void 0 : D.sourceTokenSymbol)
                          ),
                          $.iconUrl
                            ? n.default.createElement(E.default, {
                                url: $.iconUrl,
                                className: "main-quote-summary__icon",
                                name: $.symbol ?? (null === (L = me) || void 0 === L ? void 0 : L.destinationTokenSymbol),
                                fallbackClassName: "main-quote-summary__icon-fallback"
                              })
                            : null,
                          n.default.createElement(
                            g.default,
                            { display: _.DISPLAY.BLOCK, marginLeft: 2, marginRight: 2 },
                            n.default.createElement(x.default, null)
                          ),
                          V.iconUrl
                            ? n.default.createElement(E.default, {
                                url: V.iconUrl,
                                className: "main-quote-summary__icon",
                                name: V.symbol ?? (null === (F = me) || void 0 === F ? void 0 : F.destinationTokenSymbol),
                                fallbackClassName: "main-quote-summary__icon-fallback"
                              })
                            : null,
                          n.default.createElement(
                            f.Text,
                            { color: _.TextColor.textAlternative, variant: _.TextVariant.bodySm, as: "h6", marginLeft: 2 },
                            `~${Se && Number(Se).toFixed(5)} `
                          ),
                          n.default.createElement(
                            f.Text,
                            { color: _.TextColor.textAlternative, variant: _.TextVariant.bodySmBold, as: "h6", marginLeft: 1 },
                            V.symbol ?? (null === (j = me) || void 0 === j ? void 0 : j.destinationTokenSymbol)
                          )
                        ),
                        n.default.createElement(g.default, {
                          marginTop: 3,
                          className: "smart-transaction-status__background-animation smart-transaction-status__background-animation--top"
                        }),
                        Ae && n.default.createElement(g.default, { marginTop: 3, marginBottom: 2 }, Ae),
                        be &&
                          n.default.createElement(
                            g.default,
                            {
                              marginTop: 7,
                              marginBottom: 1,
                              display: _.DISPLAY.FLEX,
                              justifyContent: _.JustifyContent.center,
                              alignItems: _.AlignItems.center
                            },
                            n.default.createElement(P.default, null),
                            n.default.createElement(
                              f.Text,
                              { color: _.TextColor.textAlternative, variant: _.TextVariant.bodySm, as: "h6", marginLeft: 1 },
                              `${q("stxSwapCompleteIn")} `
                            ),
                            n.default.createElement(
                              f.Text,
                              {
                                color: _.TextColor.textAlternative,
                                variant: _.TextVariant.bodySmBold,
                                as: "h6",
                                marginLeft: 1,
                                className: "smart-transaction-status__remaining-time"
                              },
                              (0, y.showRemainingTimeInMinAndSec)(_e)
                            )
                          ),
                        n.default.createElement(
                          f.Text,
                          { color: _.TextColor.textDefault, variant: _.TextVariant.headingSm, as: "h4", fontWeight: _.FontWeight.Bold },
                          Ne
                        ),
                        be &&
                          n.default.createElement(
                            "div",
                            { className: "smart-transaction-status__loading-bar-container" },
                            n.default.createElement("div", {
                              className: "smart-transaction-status__loading-bar",
                              style: { width: (100 / ae.stxStatusDeadline) * (ae.stxStatusDeadline - _e) + "%" }
                            })
                          ),
                        ke &&
                          n.default.createElement(
                            f.Text,
                            { variant: _.TextVariant.bodySm, as: "h6", marginTop: Oe && 1, color: _.TextColor.textAlternative },
                            ke
                          ),
                        Oe && n.default.createElement(w.default, { blockExplorerUrl: Oe, sensitiveTrackingProperties: Te }),
                        n.default.createElement(g.default, {
                          marginTop: 3,
                          className: "smart-transaction-status__background-animation smart-transaction-status__background-animation--bottom"
                        }),
                        Ie &&
                          n.default.createElement(
                            f.Text,
                            { variant: _.TextVariant.bodySm, as: "h6", marginTop: 8, color: _.TextColor.textAlternative },
                            Ie
                          )
                      ),
                      Re && ce && be && n.default.createElement(Me, null),
                      pe === S.SmartTransactionStatus.success
                        ? n.default.createElement(C.default, { sensitiveTrackingProperties: Te })
                        : null,
                      n.default.createElement(v.default, {
                        onSubmit: async () => {
                          Ce ? (await B((0, u.prepareToLeaveSwaps)()), G.push(m.DEFAULT_ROUTE)) : G.push(m.BUILD_QUOTE_ROUTE);
                        },
                        onCancel: async () => {
                          await B((0, u.prepareToLeaveSwaps)()), G.push(m.DEFAULT_ROUTE);
                        },
                        submitText: q(Ce ? "close" : "tryAgain"),
                        hideCancel: Ce,
                        cancelText: q("close"),
                        className: "smart-transaction-status__swaps-footer"
                      })
                    );
                  });
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = M(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = e("@metamask/etherscan-link"),
                  l = e("lodash"),
                  i = e("../../../contexts/i18n"),
                  u = e("../../../ducks/swaps/swaps"),
                  c = e("../../../selectors"),
                  d = e("../../../../shared/constants/swaps"),
                  p = e("../../../ducks/metamask/metamask"),
                  m = e("../../../helpers/constants/routes"),
                  f = e("../../../components/component-library"),
                  g = R(e("../../../components/ui/box")),
                  E = R(e("../../../components/ui/url-icon")),
                  _ = e("../../../helpers/constants/design-system"),
                  h = e("../../../store/actions"),
                  T = e("../../../../shared/constants/metametrics"),
                  S = e("../../../../shared/constants/transaction"),
                  v = R(e("../swaps-footer")),
                  y = e("../swaps.util"),
                  b = e("../../../contexts/metametrics"),
                  C = R(e("../create-new-swap")),
                  w = R(e("../view-on-block-explorer")),
                  k = e("../../../../shared/lib/transactions-controller-utils"),
                  I = R(e("./success-icon")),
                  A = R(e("./reverted-icon")),
                  O = R(e("./canceled-icon")),
                  N = R(e("./unknown-icon")),
                  x = R(e("./arrow-icon")),
                  P = R(e("./timer-icon"));
                function R(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function M(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (M = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/smart-transaction-status/smart-transaction-status.js" }
    ],
    [
      5934,
      { react: 4475 },
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
      5935,
      { react: 4475 },
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
      5936,
      { react: 4475 },
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
      5937,
      {
        "../../../../shared/constants/swaps": 4766,
        "../../../components/component-library": 5242,
        "../../../components/component-library/banner-alert": 5204,
        "../../../components/ui/box": 5373,
        "../../../contexts/i18n": 5514,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/design-system": 5537,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
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
                    var a = f(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = m(e("prop-types")),
                  s = e("../../../contexts/i18n"),
                  l = e("../../../components/component-library/banner-alert"),
                  i = m(e("../../../components/ui/box")),
                  u = e("../../../helpers/constants/design-system"),
                  c = e("../../../components/component-library"),
                  d = e("../../../../shared/constants/swaps"),
                  p = e("../../../ducks/swaps/swaps");
                function m(e) {
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
                function g({ swapsErrorKey: e, showTransactionSettingsLink: t, currentSlippage: a }) {
                  const o = (0, n.useContext)(s.I18nContext),
                    m = (0, r.useDispatch)();
                  let f,
                    g,
                    E = u.SEVERITIES.DANGER;
                  const _ = n.default.createElement(
                    c.Text,
                    { variant: u.TextVariant.bodyMd },
                    n.default.createElement(
                      c.ButtonLink,
                      {
                        onClick: (e) => {
                          e.preventDefault(), m((0, p.setTransactionSettingsOpened)(!0));
                        },
                        size: c.ButtonLinkSize.Inherit
                      },
                      o("swapAdjustSlippage")
                    )
                  );
                  switch (e) {
                    case d.SLIPPAGE_VERY_HIGH_ERROR:
                      (f = o("swapSlippageOverLimitTitle")),
                        (g = n.default.createElement(
                          i.default,
                          null,
                          n.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, as: "h6" },
                            o("swapSlippageOverLimitDescription")
                          ),
                          _
                        ));
                      break;
                    case d.SLIPPAGE_HIGH_ERROR:
                      (E = u.SEVERITIES.WARNING),
                        (f = o("swapSlippageHighTitle")),
                        (g = n.default.createElement(
                          i.default,
                          null,
                          n.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, as: "h6" },
                            o("swapSlippageHighDescription", [a])
                          ),
                          t && _
                        ));
                      break;
                    case d.SLIPPAGE_LOW_ERROR:
                      (E = u.SEVERITIES.WARNING),
                        (f = o("swapSlippageLowTitle")),
                        (g = n.default.createElement(
                          i.default,
                          null,
                          n.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, as: "h6" },
                            o("swapSlippageLowDescription", [a])
                          ),
                          t && _
                        ));
                      break;
                    case d.SLIPPAGE_NEGATIVE_ERROR:
                      (f = o("swapSlippageNegativeTitle")),
                        (g = n.default.createElement(
                          i.default,
                          null,
                          n.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, as: "h6" },
                            o("swapSlippageNegativeDescription")
                          ),
                          _
                        ));
                      break;
                    case d.QUOTES_NOT_AVAILABLE_ERROR:
                      (f = o("swapQuotesNotAvailableErrorTitle")),
                        (g = n.default.createElement(
                          i.default,
                          null,
                          n.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, as: "h6" },
                            o("swapQuotesNotAvailableDescription")
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
                            o("swapLearnMore")
                          )
                        ));
                      break;
                    case d.ERROR_FETCHING_QUOTES:
                      (f = o("swapFetchingQuotesErrorTitle")),
                        (g = n.default.createElement(
                          c.Text,
                          { variant: u.TextVariant.bodyMd, as: "h6" },
                          o("swapFetchingQuotesErrorDescription")
                        ));
                      break;
                    case d.CONTRACT_DATA_DISABLED_ERROR:
                      (f = o("swapContractDataDisabledErrorTitle")),
                        (g = n.default.createElement(
                          c.Text,
                          { variant: u.TextVariant.bodyMd, as: "h6" },
                          o("swapContractDataDisabledErrorDescription")
                        ));
                      break;
                    case d.QUOTES_EXPIRED_ERROR:
                      (f = o("swapQuotesExpiredErrorTitle")),
                        (g = n.default.createElement(
                          c.Text,
                          { variant: u.TextVariant.bodyMd, as: "h6" },
                          o("swapQuotesExpiredErrorDescription")
                        ));
                      break;
                    case d.OFFLINE_FOR_MAINTENANCE:
                      (f = o("offlineForMaintenance")),
                        (g = n.default.createElement(
                          c.Text,
                          { variant: u.TextVariant.bodyMd, as: "h6" },
                          o("metamaskSwapsOfflineDescription")
                        ));
                      break;
                    case d.SWAP_FAILED_ERROR:
                      f = o("swapFailedErrorTitle");
                  }
                  return n.default.createElement(
                    l.BannerAlert,
                    { severity: E, title: f, titleProps: { "data-testid": "swaps-banner-title" } },
                    g
                  );
                }
                g.propTypes = {
                  swapsErrorKey: o.default.string,
                  showTransactionSettingsLink: o.default.bool,
                  currentSlippage: o.default.number
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/swaps-banner-alert/swaps-banner-alert.js" }
    ],
    [
      5938,
      { "./swaps-footer": 5939 },
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
      5939,
      {
        "../../../components/ui/page-container/page-container-footer": 5460,
        "../../../contexts/i18n": 5514,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = i(e("prop-types")),
                  o = i(e("classnames")),
                  s = e("../../../contexts/i18n"),
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
                  const m = (0, n.useContext)(s.I18nContext);
                  return n.default.createElement(
                    "div",
                    { className: "swaps-footer" },
                    n.default.createElement(
                      "div",
                      { className: (0, o.default)("swaps-footer__buttons", d, { "swaps-footer__buttons--border": c }) },
                      n.default.createElement(l.default, {
                        onCancel: e,
                        hideCancel: t,
                        cancelText: p || m("back"),
                        onSubmit: a,
                        submitText: r,
                        footerClassName: (0, o.default)("swaps-footer__custom-page-container-footer-class", d),
                        footerButtonClassName: (0, o.default)("swaps-footer__custom-page-container-footer-button-class", {
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
                        m("termsOfService")
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
      594,
      { "./AppBar": 593, "@babel/runtime/helpers/interopRequireDefault": 220 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var r = n(e("./AppBar"));
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/AppBar/index.js" }
    ],
    [
      5940,
      {
        "../../../shared/constants/common": 4751,
        "../../../shared/constants/network": 4759,
        "../../../shared/constants/swaps": 4766,
        "../../../shared/lib/fetch-with-cache": 4772,
        "../../../shared/lib/swaps-utils": 4775,
        "../../../shared/lib/transactions-controller-utils": 4778,
        "../../../shared/modules/conversion.utils": 4784,
        "../../../shared/modules/hexstring-utils": 4788,
        "../../../shared/modules/swaps.utils": 4798,
        "../../helpers/utils/confirm-tx.util": 5560,
        "bignumber.js": 2804
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
                    for (const e in a) (0, p.validateData)(S, a[e], t) && (n[e] = a[e]);
                    return n;
                  }),
                  (a.fetchSwapsFeatureFlags = async function () {
                    const e = o.SWAPS_API_V2_BASE_URL;
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
                    if (!(0, p.validateData)(y, a, t)) throw new Error(`${t} response is invalid`);
                    const { SafeGasPrice: n, ProposeGasPrice: r, FastGasPrice: o } = a;
                    return { safeLow: n, average: r, fast: o };
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
                        fetchOptions: { method: "GET" },
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
                      o.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[e] || null,
                      ...a.filter(
                        (a) =>
                          (0, p.validateData)(h, a, t, false) &&
                          !((0, s.isSwapsDefaultTokenSymbol)(a.symbol, e) || (0, s.isSwapsDefaultTokenAddress)(a.address, e))
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
                    return a.reduce((e, a, n) => ((0, p.validateData)(T, a, t) ? { ...e, [a.address]: { index: String(n) } } : e), {});
                  }),
                  (a.formatSwapsValueForDisplay = w),
                  (a.getNetworkNameByChainId = a.getFeeForSmartTransaction = a.getClassNameForCharLength = void 0),
                  (a.getRenderableNetworkFeesForQuote = C),
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
                    approveGas: o,
                    tokenConversionRates: l,
                    chainId: i,
                    smartTransactionEstimatedGas: u,
                    nativeCurrencySymbol: c,
                    multiLayerL1ApprovalFeeTotal: p
                  }) {
                    return Object.values(e).map((e) => {
                      const {
                        destinationAmount: f = 0,
                        sourceAmount: g = 0,
                        sourceTokenInfo: E,
                        destinationTokenInfo: _,
                        slippage: h,
                        aggType: T,
                        aggregator: S,
                        gasEstimateWithRefund: v,
                        averageGas: y,
                        fee: k,
                        trade: I,
                        multiLayerL1TradeFeeTotal: A
                      } = e;
                      let O = null;
                      null !== A && null !== p ? (O = (0, m.sumHexes)(A || "0x0", p || "0x0")) : null !== A && (O = A);
                      const N = (0, d.calcTokenAmount)(g, E.decimals).toString(10),
                        x = (0, d.calcTokenAmount)(f, _.decimals).toPrecision(8);
                      let P = null,
                        R = null,
                        M = null,
                        D = null;
                      ({
                        feeInFiat: P,
                        feeInEth: R,
                        rawNetworkFees: M,
                        rawEthFee: D
                      } = C({
                        tradeGas: v || (0, m.decimalToHex)(y || 8e5),
                        approveGas: o,
                        gasPrice: t,
                        currentCurrency: n,
                        conversionRate: a,
                        tradeValue: I.value,
                        sourceSymbol: E.symbol,
                        sourceAmount: g,
                        chainId: i,
                        multiLayerL1FeeTotal: O
                      })),
                        u &&
                          ({ feeInFiat: P, feeInEth: R } = b({
                            chainId: i,
                            currentCurrency: n,
                            conversionRate: a,
                            nativeCurrencySymbol: c,
                            feeInWeiDec: u.feeEstimate
                          }));
                      const L = new r.BigNumber(100 - h).div(100),
                        F = new r.BigNumber(x).times(L).toFixed(6),
                        j = l[_.address],
                        U = (0, s.isSwapsDefaultTokenSymbol)(_.symbol, i)
                          ? (0, d.calcTokenAmount)(f, _.decimals).minus(D, 10)
                          : new r.BigNumber(j || 0, 10).times((0, d.calcTokenAmount)(f, _.decimals), 10).minus(D, 10);
                      let W,
                        q = h;
                      return (
                        "AGG" === T
                          ? (W = "swapAggregator")
                          : "RFQ" === T
                          ? ((W = "swapRequestForQuotation"), (q = 0))
                          : (W = "DEX" === T ? "swapDecentralizedExchange" : "CONTRACT" === T ? "swapDirectContract" : "swapUnknown"),
                        {
                          aggId: S,
                          amountReceiving: `${x} ${_.symbol}`,
                          destinationTokenDecimals: _.decimals,
                          destinationTokenSymbol: _.symbol,
                          destinationTokenValue: w(x),
                          destinationIconUrl: _.iconUrl,
                          isBestQuote: e.isBestQuote,
                          liquiditySourceKey: W,
                          feeInEth: R,
                          detailedNetworkFees: `${R} (${P})`,
                          networkFees: P,
                          quoteSource: T,
                          rawNetworkFees: M,
                          slippage: q,
                          sourceTokenDecimals: E.decimals,
                          sourceTokenSymbol: E.symbol,
                          sourceTokenValue: N,
                          sourceTokenIconUrl: E.iconUrl,
                          ethValueOfTrade: U,
                          minimumAmountReceived: F,
                          metaMaskFee: k
                        }
                      );
                    });
                  }),
                  (a.showRemainingTimeInMinAndSec = void 0);
                var n,
                  r = e("bignumber.js"),
                  o = e("../../../shared/constants/swaps"),
                  s = e("../../../shared/modules/swaps.utils"),
                  l = e("../../../shared/constants/network"),
                  i = e("../../helpers/utils/confirm-tx.util"),
                  u = (n = e("../../../shared/lib/fetch-with-cache")) && n.__esModule ? n : { default: n },
                  c = e("../../../shared/modules/hexstring-utils"),
                  d = e("../../../shared/lib/transactions-controller-utils"),
                  p = e("../../../shared/lib/swaps-utils"),
                  m = e("../../../shared/modules/conversion.utils"),
                  f = e("../../../shared/constants/common");
                const g = 3e5,
                  E = "usd",
                  _ = { "X-Client-Id": o.SWAPS_CLIENT_ID },
                  h = [
                    { property: "address", type: "string", validator: (e) => (0, c.isValidHexAddress)(e, { allowNonPrefixed: !1 }) },
                    { property: "symbol", type: "string", validator: (e) => (0, p.truthyString)(e) && e.length <= 12 },
                    { property: "decimals", type: "string|number", validator: (e) => Number(e) >= 0 && Number(e) <= 36 }
                  ],
                  T = h.slice(0, 2),
                  S = [
                    { property: "color", type: "string", validator: (e) => Boolean(e.match(/^#[A-Fa-f0-9]+$/u)) },
                    { property: "title", type: "string", validator: p.truthyString },
                    { property: "icon", type: "string", validator: (e) => Boolean(e.match(/^data:image/u)) }
                  ],
                  v = (e) => !isNaN(e) && e.match(/^[.0-9]+$/u) && !isNaN(parseFloat(e)),
                  y = [
                    { property: "SafeGasPrice", type: "string", validator: v },
                    { property: "ProposeGasPrice", type: "string", validator: v },
                    { property: "FastGasPrice", type: "string", validator: v }
                  ];
                const b = ({
                  chainId: e,
                  currentCurrency: t,
                  conversionRate: a,
                  USDConversionRate: n,
                  nativeCurrencySymbol: r,
                  feeInWeiDec: s
                }) => {
                  var l;
                  const u = (0, m.decimalToHex)(s),
                    c = (0, m.getValueFromWeiHex)({ value: u, toDenomination: f.EtherDenomination.ETH, numberOfDecimals: 5 }),
                    d = (0, m.getValueFromWeiHex)({ value: u, toCurrency: t, conversionRate: a, numberOfDecimals: 2 });
                  let p;
                  p = t === E ? d : (0, m.getValueFromWeiHex)({ value: u, toCurrency: E, conversionRate: n, numberOfDecimals: 2 });
                  return {
                    feeInUsd: p,
                    feeInFiat: (0, i.formatCurrency)(d, t),
                    feeInEth: `${c} ${r || (null === (l = o.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[e]) || void 0 === l ? void 0 : l.symbol)}`,
                    rawEthFee: c
                  };
                };
                function C({
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
                  nativeCurrencySymbol: h,
                  multiLayerL1FeeTotal: T
                }) {
                  const S = new r.BigNumber(e || "0x0", 16).plus(t || "0x0", 16).toString(16);
                  let v = (0, d.calcGasTotal)(S, a);
                  null !== T && (v = (0, m.sumHexes)(v || "0x0", T || "0x0"));
                  const y = new r.BigNumber(c, 16).minus((0, s.isSwapsDefaultTokenSymbol)(p, _) ? g : 0, 10).toString(16),
                    b = new r.BigNumber(v, 16).plus(y, 16).toString(16),
                    C = (0, m.getValueFromWeiHex)({ value: b, toDenomination: f.EtherDenomination.ETH, numberOfDecimals: 5 }),
                    w = (0, m.getValueFromWeiHex)({ value: b, toCurrency: n, conversionRate: l, numberOfDecimals: 2 }),
                    k = (0, i.formatCurrency)(w, n);
                  let I;
                  I = n === E ? w : (0, m.getValueFromWeiHex)({ value: b, toCurrency: E, conversionRate: u, numberOfDecimals: 2 });
                  return {
                    rawNetworkFees: w,
                    feeInUsd: I,
                    rawEthFee: C,
                    feeInFiat: k,
                    feeInEth: `${C} ${h || o.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[_].symbol}`,
                    nonGasFee: y
                  };
                }
                function w(e) {
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
                  !(!e || !o.ALLOWED_CONTRACT_ADDRESSES[t]) &&
                  o.ALLOWED_CONTRACT_ADDRESSES[t].some((t) => e.toLowerCase() === t.toLowerCase());
                const k = (e) => {
                  switch (e) {
                    case l.CHAIN_IDS.MAINNET:
                      return o.ETHEREUM;
                    case l.CHAIN_IDS.BSC:
                      return o.BSC;
                    case l.CHAIN_IDS.POLYGON:
                      return o.POLYGON;
                    case l.CHAIN_IDS.GOERLI:
                      return o.GOERLI;
                    case l.CHAIN_IDS.AVALANCHE:
                      return o.AVALANCHE;
                    case l.CHAIN_IDS.OPTIMISM:
                      return o.OPTIMISM;
                    case l.CHAIN_IDS.ARBITRUM:
                      return o.ARBITRUM;
                    case l.CHAIN_IDS.ZKSYNC_ERA:
                      return o.ZKSYNC_ERA;
                    case l.CHAIN_IDS.LINEA_MAINNET:
                      return o.LINEA;
                    default:
                      return "";
                  }
                };
                a.getNetworkNameByChainId = k;
                a.getSwapsLivenessForNetwork = (e, t = {}) => {
                  const a = k(e);
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
                let I = (a.StxErrorTypes = (function (e) {
                  return (
                    (e.unavailable = "unavailable"), (e.notEnoughFunds = "not_enough_funds"), (e.regularTxPending = "regular_tx_pending"), e
                  );
                })({}));
                a.getTranslatedStxErrorMessage = (e, t) => {
                  switch (e) {
                    case I.unavailable:
                    case I.regularTxPending:
                      return t("smartSwapsErrorUnavailable");
                    case I.notEnoughFunds:
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
      5941,
      {
        "../../../../shared/constants/swaps": 4766,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../components/ui/button": 5377,
        "../../../components/ui/button-group": 5375,
        "../../../components/ui/info-tooltip": 5431,
        "../../../components/ui/toggle-button": 5495,
        "../../../components/ui/typography": 5506,
        "../../../contexts/i18n": 5514,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/design-system": 5537,
        "../../../store/actions": 5965,
        "../swaps.util": 5940,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = y);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = v(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = S(e("prop-types")),
                  s = S(e("classnames")),
                  l = e("../../../contexts/i18n"),
                  i = S(e("../../../components/ui/button-group")),
                  u = S(e("../../../components/ui/button")),
                  c = S(e("../../../components/ui/info-tooltip")),
                  d = S(e("../../../components/ui/toggle-button")),
                  p = S(e("../../../components/ui/box")),
                  m = S(e("../../../components/ui/typography")),
                  f = e("../../../helpers/constants/design-system"),
                  g = e("../swaps.util"),
                  E = e("../../../../shared/constants/swaps"),
                  _ = e("../../../components/component-library"),
                  h = e("../../../store/actions"),
                  T = e("../../../ducks/swaps/swaps");
                function S(e) {
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
                function y({
                  onSelect: e,
                  onModalClose: t,
                  maxAllowedSlippage: a,
                  currentSlippage: o,
                  smartTransactionsEnabled: S,
                  smartTransactionsOptInStatus: v,
                  setSmartTransactionsOptInStatus: y,
                  currentSmartTransactionsError: b,
                  isDirectWrappingEnabled: C
                }) {
                  const w = (0, n.useContext)(l.I18nContext),
                    k = (0, r.useDispatch)(),
                    I = (0, r.useSelector)(T.getSwapsErrorKey),
                    [A, O] = (0, n.useState)(() => ("number" != typeof o || Object.values(E.Slippage).includes(o) ? "" : o.toString())),
                    [N, x] = (0, n.useState)(!1),
                    [P, R] = (0, n.useState)(() =>
                      o === E.Slippage.high ? 1 : o === E.Slippage.default ? 0 : "number" == typeof o ? 2 : 0
                    ),
                    [M, D] = (0, n.useState)(null),
                    [L, F] = (0, n.useState)(o),
                    [j, U] = (0, n.useState)(v),
                    W = L !== o || j !== v;
                  let q = "",
                    G = "",
                    B = f.SEVERITIES.INFO;
                  A &&
                    (Number(A) < 0
                      ? ((B = f.SEVERITIES.DANGER),
                        (q = w("swapSlippageNegativeDescription")),
                        (G = w("swapSlippageNegativeTitle")),
                        k((0, h.setSwapsErrorKey)(E.SLIPPAGE_NEGATIVE_ERROR)))
                      : Number(A) > 0 && Number(A) <= 1
                      ? ((B = f.SEVERITIES.WARNING), (q = w("swapSlippageLowDescription", [L])), (G = w("swapSlippageLowTitle")))
                      : Number(A) >= 5 && Number(A) <= a
                      ? ((B = f.SEVERITIES.WARNING), (q = w("swapSlippageHighDescription", [L])), (G = w("swapSlippageHighTitle")))
                      : Number(A) > a
                      ? ((B = f.SEVERITIES.DANGER),
                        (q = w("swapSlippageOverLimitDescription")),
                        (G = w("swapSlippageOverLimitTitle")),
                        k((0, h.setSwapsErrorKey)(E.SLIPPAGE_VERY_HIGH_ERROR)))
                      : 0 === Number(A)
                      ? ((B = f.SEVERITIES.INFO), (q = w("swapSlippageZeroDescription")), (G = w("swapSlippageZeroTitle")))
                      : I && k((0, h.setSwapsErrorKey)("")));
                  const H = B === f.SEVERITIES.DANGER,
                    V = A || w("swapCustom");
                  return (
                    (0, n.useEffect)(() => {
                      M && N && window.document.activeElement !== M && M.focus();
                    }, [M, N]),
                    (0, n.useEffect)(() => {
                      2 !== P && k((0, h.setSwapsErrorKey)(""));
                    }, [k, P]),
                    n.default.createElement(
                      _.Modal,
                      {
                        onClose: t,
                        isOpen: !0,
                        isClosedOnOutsideClick: !0,
                        isClosedOnEscapeKey: !0,
                        className: "mm-modal__custom-scrollbar"
                      },
                      n.default.createElement(_.ModalOverlay, null),
                      n.default.createElement(
                        _.ModalContent,
                        null,
                        n.default.createElement(_.ModalHeader, { onClose: t }, w("transactionSettings")),
                        n.default.createElement(
                          p.default,
                          {
                            display: f.DISPLAY.FLEX,
                            flexDirection: f.FlexDirection.Column,
                            justifyContent: f.JustifyContent.spaceBetween,
                            alignItems: f.AlignItems.stretch,
                            className: "transaction-settings__content"
                          },
                          n.default.createElement(
                            p.default,
                            { marginTop: 7, marginBottom: 5 },
                            n.default.createElement(
                              n.default.Fragment,
                              null,
                              S &&
                                n.default.createElement(
                                  p.default,
                                  { marginTop: 2, marginBottom: 6, display: f.DISPLAY.FLEX, justifyContent: f.JustifyContent.spaceBetween },
                                  n.default.createElement(
                                    p.default,
                                    { display: f.DISPLAY.FLEX, alignItems: f.AlignItems.center, paddingRight: 3 },
                                    n.default.createElement(
                                      m.default,
                                      { variant: f.TypographyVariant.H6, boxProps: { paddingRight: 2 } },
                                      w("smartSwap")
                                    ),
                                    b
                                      ? n.default.createElement(c.default, {
                                          position: "top",
                                          iconFillColor: "var(--color-icon-muted)",
                                          contentText: (0, g.getTranslatedStxErrorMessage)(b, w)
                                        })
                                      : n.default.createElement(c.default, {
                                          position: "top",
                                          contentText: w("stxTooltip"),
                                          iconFillColor: "var(--color-icon-muted)"
                                        })
                                  ),
                                  n.default.createElement(d.default, {
                                    value: j,
                                    onToggle: (e) => {
                                      U(!e, e);
                                    },
                                    offLabel: w("off"),
                                    onLabel: w("on"),
                                    disabled: Boolean(b)
                                  })
                                ),
                              !C &&
                                n.default.createElement(
                                  n.default.Fragment,
                                  null,
                                  n.default.createElement(
                                    p.default,
                                    { display: f.DISPLAY.FLEX, alignItems: f.AlignItems.center },
                                    n.default.createElement(
                                      m.default,
                                      { variant: f.TypographyVariant.H6, boxProps: { paddingRight: 2 } },
                                      w("swapsMaxSlippage")
                                    ),
                                    b
                                      ? n.default.createElement(c.default, {
                                          position: "top",
                                          iconFillColor: "var(--color-icon-muted)",
                                          contentText: (0, g.getTranslatedStxErrorMessage)(b, w)
                                        })
                                      : n.default.createElement(c.default, {
                                          position: "top",
                                          iconFillColor: "var(--color-icon-muted)",
                                          contentText: w("swapSlippageTooltip")
                                        })
                                  ),
                                  n.default.createElement(
                                    p.default,
                                    { display: f.DISPLAY.FLEX },
                                    n.default.createElement(
                                      i.default,
                                      {
                                        defaultActiveButtonIndex: 2 !== P || A ? P : 1,
                                        variant: "radiogroup",
                                        newActiveButtonIndex: P,
                                        className: (0, s.default)("button-group", "transaction-settings__button-group")
                                      },
                                      n.default.createElement(
                                        u.default,
                                        {
                                          onClick: () => {
                                            O(""), x(!1), R(0), F(E.Slippage.default);
                                          }
                                        },
                                        w("swapSlippagePercent", [E.Slippage.default])
                                      ),
                                      n.default.createElement(
                                        u.default,
                                        {
                                          onClick: () => {
                                            O(""), x(!1), R(1), F(E.Slippage.high);
                                          }
                                        },
                                        w("swapSlippagePercent", [E.Slippage.high])
                                      ),
                                      n.default.createElement(
                                        u.default,
                                        {
                                          className: (0, s.default)("transaction-settings__button-group-custom-button", {
                                            "radio-button--danger": H
                                          }),
                                          onClick: () => {
                                            R(2), x(!0);
                                          }
                                        },
                                        N
                                          ? n.default.createElement(
                                              "div",
                                              {
                                                className: (0, s.default)("transaction-settings__custom-input", {
                                                  "transaction-settings__custom-input--danger": H
                                                })
                                              },
                                              n.default.createElement("input", {
                                                "data-testid": "transaction-settings-custom-slippage",
                                                onChange: (e) => {
                                                  const { value: t } = e.target;
                                                  !isNaN(Number(t)) && (O(t), F(Number(t)));
                                                },
                                                type: "text",
                                                maxLength: "4",
                                                ref: D,
                                                onBlur: () => {
                                                  x(!1);
                                                },
                                                onKeyDown: (e) => {
                                                  "Enter" === e.key && x(!1);
                                                },
                                                value: A || ""
                                              })
                                            )
                                          : V,
                                        (A || N) &&
                                          n.default.createElement("div", { className: "transaction-settings__percentage-suffix" }, "%")
                                      )
                                    )
                                  )
                                )
                            ),
                            q &&
                              n.default.createElement(
                                p.default,
                                { marginTop: 5 },
                                n.default.createElement(
                                  _.BannerAlert,
                                  { severity: B, title: G, titleProps: { "data-testid": "swaps-banner-title" } },
                                  n.default.createElement(
                                    m.default,
                                    { variant: f.TypographyVariant.H6, testId: "mm-banner-alert-notification-text" },
                                    q
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
                                  L !== o && e(L), j !== v && y(j), t();
                                },
                                block: !0,
                                disabled: !W,
                                "data-testid": "update-transaction-settings-button"
                              },
                              w("update")
                            )
                          )
                        )
                      )
                    )
                  );
                }
                y.propTypes = {
                  onSelect: o.default.func.isRequired,
                  onModalClose: o.default.func.isRequired,
                  maxAllowedSlippage: o.default.number.isRequired,
                  currentSlippage: o.default.number,
                  smartTransactionsEnabled: o.default.bool.isRequired,
                  smartTransactionsOptInStatus: o.default.bool,
                  setSmartTransactionsOptInStatus: o.default.func,
                  currentSmartTransactionsError: o.default.string,
                  isDirectWrappingEnabled: o.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/transaction-settings/transaction-settings.js" }
    ],
    [
      5942,
      { "./view-on-block-explorer": 5943 },
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
      5943,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/ui/box": 5373,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/utils/util": 5578,
        "prop-types": 4219,
        react: 4475
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = c(e("prop-types")),
                  o = c(e("../../../components/ui/box")),
                  s = e("../../../contexts/i18n"),
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
                  const a = (0, n.useContext)(s.I18nContext),
                    r = (0, n.useContext)(i.MetaMetricsContext),
                    c = (0, l.getURLHostName)(e);
                  return n.default.createElement(
                    o.default,
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
      5944,
      { "./view-quote": 5946 },
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
      5945,
      {
        "../../../../shared/constants/gas": 4753,
        "../../../components/component-library": 5242,
        "../../../components/ui/actionable-message/actionable-message": 5369,
        "../../../components/ui/box": 5373,
        "../../../components/ui/tooltip": 5502,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
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
                    var a = f(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = m(e("prop-types")),
                  o = m(e("classnames")),
                  s = e("../../../contexts/i18n"),
                  l = m(e("../../../components/ui/actionable-message/actionable-message")),
                  i = m(e("../../../components/ui/tooltip")),
                  u = m(e("../../../components/ui/box")),
                  c = e("../../../helpers/constants/design-system"),
                  d = e("../../../../shared/constants/gas"),
                  p = e("../../../components/component-library");
                function m(e) {
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
                function g(e) {
                  const {
                      usedQuote: t,
                      sourceTokenValue: a,
                      destinationTokenValue: r,
                      onAcknowledgementClick: m,
                      acknowledged: f,
                      priceSlippageFromSource: g,
                      priceSlippageFromDestination: E,
                      priceDifferencePercentage: _,
                      priceSlippageUnknownFiatValue: h
                    } = e,
                    T = (0, n.useContext)(s.I18nContext);
                  let S = "",
                    v = "",
                    y = "",
                    b = "";
                  return (
                    h
                      ? ((S = T("swapPriceUnavailableTitle")),
                        (v = T("swapPriceUnavailableDescription")),
                        (y = d.GasRecommendations.high),
                        (b = T("tooltipApproveButton")))
                      : ((S = T("swapPriceDifferenceTitle", [_])),
                        (v = T("swapPriceDifference", [a, t.sourceTokenInfo.symbol, g, r, t.destinationTokenInfo.symbol, E])),
                        (y = t.priceSlippage.bucket),
                        (b = T("tooltipApproveButton"))),
                    n.default.createElement(
                      "div",
                      { className: (0, o.default)("view-quote__price-difference-warning-wrapper", y) },
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
                              n.default.createElement("div", { className: "view-quote__price-difference-warning-contents-title" }, S),
                              n.default.createElement(
                                i.default,
                                { position: "bottom", title: T("swapPriceImpactTooltip") },
                                n.default.createElement(p.Icon, { name: p.IconName.Info })
                              )
                            ),
                            v,
                            !f &&
                              n.default.createElement(
                                "div",
                                { className: "view-quote__price-difference-warning-contents-actions" },
                                n.default.createElement(
                                  "button",
                                  {
                                    onClick: () => {
                                      m();
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
      5946,
      {
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/gas": 4753,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/swaps": 4766,
        "../../../../shared/lib/metamask-controller-utils": 4773,
        "../../../../shared/lib/swaps-utils": 4775,
        "../../../../shared/lib/transactions-controller-utils": 4778,
        "../../../../shared/modules/conversion.utils": 4784,
        "../../../../shared/modules/string-utils": 4797,
        "../../../../shared/modules/transaction.utils": 4799,
        "../../../components/ui/actionable-message/actionable-message": 5369,
        "../../../components/ui/box": 5373,
        "../../../components/ui/pulse-loader": 5467,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/optimism/fetchEstimatedL1Fee": 5571,
        "../../../hooks/gasFeeInput/useGasFeeInputs": 5584,
        "../../../hooks/useEqualityCheck": 5599,
        "../../../hooks/useEthFiatAmount": 5600,
        "../../../hooks/usePrevious": 5608,
        "../../../hooks/useTokenTracker": 5622,
        "../../../selectors": 5958,
        "../../../store/actionConstants": 5964,
        "../../../store/actions": 5965,
        "../../confirm-approve/confirm-approve.util": 5645,
        "../countdown-timer": 5885,
        "../fee-card": 5895,
        "../main-quote-summary": 5903,
        "../select-quote-popover": 5919,
        "../swaps-footer": 5938,
        "../swaps.util": 5940,
        "./view-quote-price-difference": 5945,
        "@sentry/browser": 2179,
        "bignumber.js": 2804,
        classnames: 2952,
        lodash: 4071,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    var e, t, a, V, $, Q;
                    const Y = (0, o.useHistory)(),
                      X = (0, r.useDispatch)(),
                      Z = (0, n.useContext)(c.I18nContext),
                      z = (0, n.useContext)(E.MetaMetricsContext),
                      [J, ee] = (0, n.useState)(!1),
                      [te, ae] = (0, n.useState)(!1),
                      [ne, re] = (0, n.useState)(!1),
                      [oe, se] = (0, n.useState)(!1),
                      [le, ie] = (0, n.useState)(null),
                      [ue, ce] = (0, n.useState)(null),
                      [de, pe] = (0, n.useState)(null),
                      [me] = (0, n.useState)(Date.now()),
                      [fe, ge] = (0, n.useState)(!1),
                      Ee = [N.GasRecommendations.high, N.GasRecommendations.medium],
                      _e = (0, r.useSelector)(h.getBackgroundSwapRouteState),
                      he = (0, r.useSelector)(h.getQuotes, l.isEqual);
                    (0, n.useEffect)(() => {
                      Object.values(he).length ? "awaiting" === _e && Y.push(b.AWAITING_SWAP_ROUTE) : Y.push(b.BUILD_QUOTE_ROUTE);
                    }, [Y, he, _e]);
                    const Te = (0, r.useSelector)(h.getQuotesLastFetched),
                      Se = (0, r.useSelector)(h.getUsedSwapsGasPrice),
                      ve = (0, r.useSelector)(h.getCustomSwapsGas),
                      ye = (0, r.useSelector)(h.getCustomMaxFeePerGas),
                      be = (0, r.useSelector)(h.getCustomMaxPriorityFeePerGas),
                      Ce = (0, r.useSelector)(h.getSwapsUserFeeLevel),
                      we = (0, r.useSelector)(T.getTokenExchangeRates, l.isEqual),
                      ke = (0, m.useEqualityCheck)(we),
                      { balance: Ie } = (0, r.useSelector)(T.getSelectedAccount, r.shallowEqual),
                      Ae = (0, r.useSelector)(T.conversionRateSelector),
                      Oe = (0, r.useSelector)(T.getUSDConversionRate),
                      Ne = (0, r.useSelector)(T.getIsMultiLayerFeeNetwork),
                      xe = (0, r.useSelector)(T.getCurrentCurrency),
                      Pe = (0, r.useSelector)(S.getTokens, l.isEqual),
                      Re = (0, r.useSelector)(T.checkNetworkAndAccountSupports1559),
                      Me = (0, r.useSelector)(h.getBalanceError),
                      De = (0, r.useSelector)(h.getFetchParams, l.isEqual),
                      Le = (0, r.useSelector)(h.getApproveTxParams, r.shallowEqual),
                      Fe = (0, r.useSelector)(h.getSelectedQuote, l.isEqual),
                      je = (0, r.useSelector)(h.getTopQuote, l.isEqual),
                      Ue = Fe || je,
                      We = (null == Ue || null === (e = Ue.trade) || void 0 === e ? void 0 : e.value) ?? "0x0",
                      qe = (0, r.useSelector)(h.getSwapsQuoteRefreshTime),
                      Ge = (0, r.useSelector)(T.getSwapsDefaultToken, l.isEqual),
                      Be = (0, r.useSelector)(T.getCurrentChainId),
                      He = (0, r.useSelector)(S.getNativeCurrency),
                      Ve = (0, r.useSelector)(h.getReviewSwapClickedTimestamp),
                      $e = (0, r.useSelector)(h.getSmartTransactionsOptInStatus),
                      Ke = (0, r.useSelector)(h.getSmartTransactionsEnabled),
                      Qe = (0, r.useSelector)(h.getSwapsSTXLoading),
                      Ye = (0, r.useSelector)(h.getCurrentSmartTransactionsError),
                      Xe = (0, r.useSelector)(h.getSmartTransactionsError),
                      Ze = (0, r.useSelector)(h.getSmartTransactionFees, l.isEqual),
                      ze = (0, r.useSelector)(h.getCurrentSmartTransactionsEnabled),
                      Je = (0, r.useSelector)(h.getSwapsNetworkConfig, r.shallowEqual),
                      et = Ue.trade,
                      tt = ze && $e;
                    let at;
                    Re && (at = (0, g.useGasFeeInputs)(N.GasRecommendations.high, { userFeeLevel: Ce || N.GasRecommendations.high }));
                    const nt = null == De ? void 0 : De.sourceToken,
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
                      ot =
                        (null == Ue ? void 0 : Ue.gasEstimateWithRefund) ||
                        `0x${(0, B.decimalToHex)((null == Ue ? void 0 : Ue.averageGas) || 0)}`,
                      st = (null == Ue ? void 0 : Ue.gasEstimate) || "0x0",
                      lt = new s.default(st, 16)
                        .times((null == Ue ? void 0 : Ue.gasMultiplier) || h.FALLBACK_GAS_MULTIPLIER, 10)
                        .round(0)
                        .toString(16),
                      it = null != Ue && Ue.gasEstimate ? lt : `0x${(0, B.decimalToHex)((null == Ue ? void 0 : Ue.maxGas) || 0)}`,
                      ut = ve || it;
                    let ct, dt, pt;
                    if (Re) {
                      const {
                        maxFeePerGas: e,
                        maxPriorityFeePerGas: t,
                        gasFeeEstimates: { estimatedBaseFee: a = "0" }
                      } = at;
                      (ct = ye || (0, B.decGWEIToHexWEI)(e)),
                        (dt = be || (0, B.decGWEIToHexWEI)(t)),
                        (pt = (0, B.addHexes)((0, B.decGWEIToHexWEI)(a), dt));
                    }
                    let mt = (0, U.calcGasTotal)(ut, ct || Se);
                    null !== ue && (mt = (0, B.sumHexes)(mt || "0x0", ue || "0x0"));
                    const { tokensWithBalances: ft } = (0, A.useTokenTracker)({ tokens: Pe, includeFailedTokens: !0 }),
                      gt = nt === Ge.address ? Ge : ft.find(({ address: e }) => (0, L.isEqualCaseInsensitive)(e, nt)),
                      Et = gt || Ue.sourceTokenInfo,
                      _t = (null == ft ? void 0 : ft.length) && (0, U.calcTokenAmount)(Et.balance || "0x0", Et.decimals).toFixed(9),
                      ht = ft && gt === undefined,
                      Tt = (0, F.parseStandardTokenTransactionData)(null == Le ? void 0 : Le.data),
                      St = Tt && (0, j.getTokenValueParam)(Tt),
                      vt = St && (null == Et ? void 0 : Et.decimals) !== undefined && (0, U.calcTokenAmount)(St, Et.decimals).toFixed(9),
                      yt = null == Le ? void 0 : Le.gas,
                      bt = (0, n.useMemo)(
                        () =>
                          (0, I.quotesToRenderableData)({
                            quotes: he,
                            gasPrice: Re ? pt : Se,
                            conversionRate: Ae,
                            currentCurrency: xe,
                            approveGas: yt,
                            tokenConversionRates: ke,
                            chainId: Be,
                            smartTransactionEstimatedGas: Ke && $e && (null == Ze ? void 0 : Ze.tradeTxFees),
                            nativeCurrencySymbol: He,
                            multiLayerL1ApprovalFeeTotal: de
                          }),
                        [he, Se, pt, Re, Ae, xe, yt, ke, Be, null == Ze ? void 0 : Ze.tradeTxFees, He, Ke, $e, de]
                      ),
                      Ct = bt.find((e) => e.aggId === Ue.aggregator),
                      {
                        destinationTokenDecimals: wt,
                        destinationTokenSymbol: kt,
                        destinationTokenValue: It,
                        destinationIconUrl: At,
                        sourceTokenDecimals: Ot,
                        sourceTokenSymbol: Nt,
                        sourceTokenValue: xt,
                        sourceTokenIconUrl: Pt
                      } = Ct;
                    let {
                      feeInFiat: Rt,
                      feeInEth: Mt,
                      rawEthFee: Dt,
                      feeInUsd: Lt
                    } = (0, I.getRenderableNetworkFeesForQuote)({
                      tradeGas: ot,
                      approveGas: yt,
                      gasPrice: Re ? pt : Se,
                      currentCurrency: xe,
                      conversionRate: Ae,
                      USDConversionRate: Oe,
                      tradeValue: We,
                      sourceSymbol: Nt,
                      sourceAmount: Ue.sourceAmount,
                      chainId: Be,
                      nativeCurrencySymbol: He,
                      multiLayerL1FeeTotal: ue
                    });
                    (rt.reg_tx_fee_in_usd = Number(Lt)), (rt.reg_tx_fee_in_eth = Number(Dt));
                    const Ft = (0, I.getRenderableNetworkFeesForQuote)({
                      tradeGas: ut,
                      approveGas: yt,
                      gasPrice: ct || Se,
                      currentCurrency: xe,
                      conversionRate: Ae,
                      USDConversionRate: Oe,
                      tradeValue: We,
                      sourceSymbol: Nt,
                      sourceAmount: Ue.sourceAmount,
                      chainId: Be,
                      nativeCurrencySymbol: He,
                      multiLayerL1FeeTotal: ue
                    });
                    let { feeInFiat: jt, feeInEth: Ut, rawEthFee: Wt, feeInUsd: qt } = Ft;
                    if (
                      ((rt.reg_tx_max_fee_in_usd = Number(qt)),
                      (rt.reg_tx_max_fee_in_eth = Number(Wt)),
                      ze && $e && null != Ze && Ze.tradeTxFees)
                    ) {
                      var Gt;
                      const e =
                          (null == Ze ? void 0 : Ze.tradeTxFees.feeEstimate) +
                          ((null == Ze || null === (Gt = Ze.approvalTxFees) || void 0 === Gt ? void 0 : Gt.feeEstimate) || 0),
                        t = e * Je.stxMaxFeeMultiplier;
                      ({
                        feeInFiat: Rt,
                        feeInEth: Mt,
                        rawEthFee: Dt,
                        feeInUsd: Lt
                      } = (0, I.getFeeForSmartTransaction)({
                        chainId: Be,
                        currentCurrency: xe,
                        conversionRate: Ae,
                        USDConversionRate: Oe,
                        nativeCurrencySymbol: He,
                        feeInWeiDec: e
                      })),
                        (rt.stx_fee_in_usd = Number(Lt)),
                        (rt.stx_fee_in_eth = Number(Dt)),
                        (rt.estimated_gas = null == Ze ? void 0 : Ze.tradeTxFees.gasLimit),
                        ({
                          feeInFiat: jt,
                          feeInEth: Ut,
                          rawEthFee: Wt,
                          feeInUsd: qt
                        } = (0, I.getFeeForSmartTransaction)({
                          chainId: Be,
                          currentCurrency: xe,
                          conversionRate: Ae,
                          USDConversionRate: Oe,
                          nativeCurrencySymbol: He,
                          feeInWeiDec: t
                        })),
                        (rt.stx_max_fee_in_usd = Number(qt)),
                        (rt.stx_max_fee_in_eth = Number(Wt));
                    }
                    const Bt = new s.default(Ue.sourceAmount),
                      Ht = new s.default(Ue.trade.value || 0, 10).plus(new s.default(mt, 16)),
                      Vt = ((null == ft ? void 0 : ft.length) || Me) && Bt.gt(new s.default(Et.balance || "0x0")),
                      $t = Ht.gt(new s.default(Ie || "0x0")),
                      Kt = Vt
                        ? (0, U.toPrecisionWithoutTrailingZeros)((0, U.calcTokenAmount)(Bt, Et.decimals).minus(_t).toString(10), 6)
                        : null,
                      Qt = $t
                        ? (0, U.toPrecisionWithoutTrailingZeros)(Ht.minus(Ie, 16).div("1000000000000000000", 10).toString(10), 6)
                        : null;
                    let Yt;
                    tt && null != Xe && Xe.balanceNeededWei && (Yt = (0, B.decWEIToDecETH)(Xe.balanceNeededWei - Xe.currentBalanceWei));
                    const Xt = (0, r.useSelector)(h.getDestinationTokenInfo, l.isEqual);
                    (0, n.useEffect)(() => {
                      tt
                        ? Vt
                          ? X((0, h.setBalanceError)(!0))
                          : Me && !Vt && X((0, h.setBalanceError)(!1))
                        : Vt || $t
                        ? X((0, h.setBalanceError)(!0))
                        : !Me || Vt || $t || X((0, h.setBalanceError)(!1));
                    }, [Vt, $t, Me, X, tt]),
                      (0, n.useEffect)(() => {
                        const e = Date.now() - Te;
                        e > qe && !J
                          ? (ee(!0), X((0, v.safeRefetchQuotes)()))
                          : e > qe && (X((0, v.setSwapsErrorKey)(O.QUOTES_EXPIRED_ERROR)), Y.push(b.SWAPS_ERROR_ROUTE));
                      }, [Te, J, X, Y, qe]),
                      (0, n.useEffect)(() => {
                        !le && vt && ie(vt);
                      }, [le, vt]);
                    const Zt = (!ze || !$e) && Qt,
                      zt = tt && Yt,
                      Jt = (Me || Kt || Zt || zt) && !oe,
                      ea = (0, r.useSelector)(T.isHardwareWallet),
                      ta = (0, r.useSelector)(T.getHardwareWalletType),
                      aa = Object.values(he).length,
                      na = (0, n.useRef)(),
                      ra = (0, n.useMemo)(
                        () => ({
                          token_from: Nt,
                          token_from_amount: xt,
                          token_to: kt,
                          token_to_amount: It,
                          request_type: null == De ? void 0 : De.balanceError,
                          slippage: null == De ? void 0 : De.slippage,
                          custom_slippage: 2 !== (null == De ? void 0 : De.slippage),
                          response_time: null == De ? void 0 : De.responseTime,
                          best_quote_source: null == je ? void 0 : je.aggregator,
                          available_quotes: aa,
                          is_hardware_wallet: ea,
                          hardware_wallet_type: ta,
                          stx_enabled: Ke,
                          current_stx_enabled: ze,
                          stx_user_opt_in: $e
                        }),
                        [
                          Nt,
                          xt,
                          kt,
                          It,
                          null == De ? void 0 : De.balanceError,
                          null == De ? void 0 : De.slippage,
                          null == De ? void 0 : De.responseTime,
                          null == je ? void 0 : je.aggregator,
                          aa,
                          ea,
                          ta,
                          Ke,
                          ze,
                          $e
                        ]
                      ),
                      oa = () => {
                        z({
                          event: "Edit Spend Limit Opened",
                          category: D.MetaMetricsEventCategory.Swaps,
                          sensitiveProperties: {
                            ...ra,
                            custom_spend_limit_set: le === vt,
                            custom_spend_limit_amount: le === vt ? null : vt
                          }
                        });
                      },
                      sa = (0, n.useCallback)(() => {
                        z({
                          event: "Best Quote Reviewed",
                          category: D.MetaMetricsEventCategory.Swaps,
                          sensitiveProperties: { ...ra, network_fees: Rt }
                        });
                      }, [z, ra, Rt]),
                      la = (0, n.useCallback)(() => {
                        z({
                          event: "View Quote Page Loaded",
                          category: D.MetaMetricsEventCategory.Swaps,
                          sensitiveProperties: { ...ra, response_time: me - Ve }
                        });
                      }, [z, ra, me, Ve]);
                    (0, n.useEffect)(() => {
                      !na.current &&
                        [Nt, xt, kt, It, De, je, aa, Rt].every((e) => null !== e && e !== undefined) &&
                        ((na.current = !0), sa());
                    }, [De, je, aa, Rt, kt, It, Nt, xt, sa]);
                    const ia = Ue.fee,
                      ua = ht
                        ? Z("swapTokenBalanceUnavailable", [Nt])
                        : Z("swapApproveNeedMoreTokens", [
                            n.default.createElement(
                              "span",
                              { key: "swapApproveNeedMoreTokens-1", className: "view-quote__bold" },
                              Kt || Yt || Qt
                            ),
                            Kt && Nt !== Ge.symbol ? Nt : Ge.symbol
                          ]),
                      ca = null == Ue || null === (t = Ue.priceSlippage) || void 0 === t ? void 0 : t.bucket,
                      da = (0, f.usePrevious)(ca);
                    (0, n.useEffect)(() => {
                      fe && da === N.GasRecommendations.medium && ca === N.GasRecommendations.high && ge(!1);
                    }, [ca, fe, da]);
                    let pa = null;
                    const ma = (0, p.useEthFiatAmount)(
                        (null == Ue || null === (a = Ue.priceSlippage) || void 0 === a ? void 0 : a.sourceAmountInETH) || 0,
                        { showFiat: !0 }
                      ),
                      fa = (0, p.useEthFiatAmount)(
                        (null == Ue || null === (V = Ue.priceSlippage) || void 0 === V ? void 0 : V.destinationAmountInETH) || 0,
                        { showFiat: !0 }
                      ),
                      ga =
                        !ma || !fa || Boolean(null == Ue || null === ($ = Ue.priceSlippage) || void 0 === $ ? void 0 : $.calculationError);
                    let Ea = 0;
                    null != Ue &&
                      null !== (Q = Ue.priceSlippage) &&
                      void 0 !== Q &&
                      Q.ratio &&
                      (Ea = parseFloat(new s.default(Ue.priceSlippage.ratio, 10).minus(1, 10).times(100, 10).toFixed(2), 10));
                    const _a = !ht && !Jt && Ue && (Ee.includes(ca) || ga);
                    _a &&
                      (pa = n.default.createElement(H.default, {
                        usedQuote: Ue,
                        sourceTokenValue: xt,
                        destinationTokenValue: It,
                        priceSlippageFromSource: ma,
                        priceSlippageFromDestination: fa,
                        priceDifferencePercentage: Ea,
                        priceSlippageUnknownFiatValue: ga,
                        onAcknowledgementClick: () => {
                          ge(!0);
                        },
                        acknowledged: fe
                      }));
                    const ha = _a && !fe,
                      Ta = Jt || _a,
                      Sa = Boolean(
                        te ||
                          Me ||
                          ht ||
                          ha ||
                          (Re && pt === undefined) ||
                          (!Re && (null === Se || Se === undefined)) ||
                          (ze && (Ye || Xe)) ||
                          (ze && $e && !(null != Ze && Ze.tradeTxFees))
                      );
                    return (
                      (0, n.useEffect)(() => {
                        if (ze && $e && !Vt) {
                          const e = { from: et.from, to: et.to, value: et.value, data: et.data, gas: et.gas, chainId: Be };
                          (K = setInterval(() => {
                            Qe ||
                              X(
                                (0, h.fetchSwapsSmartTransactionFees)({
                                  unsignedTransaction: e,
                                  approveTxParams: Le,
                                  fallbackOnNotEnoughFunds: !1
                                })
                              );
                          }, Je.stxGetTransactionsRefreshTime)),
                            X(
                              (0, h.fetchSwapsSmartTransactionFees)({
                                unsignedTransaction: e,
                                approveTxParams: Le,
                                fallbackOnNotEnoughFunds: !1
                              })
                            );
                        } else K && clearInterval(K);
                        return () => clearInterval(K);
                      }, [X, ze, $e, et.data, et.from, et.value, et.gas, et.to, Be, Je.stxGetTransactionsRefreshTime, Vt]),
                      (0, n.useEffect)(() => {
                        X((0, v.setSwapsQuotesPollingLimitEnabled)(!0)), Ve && la();
                      }, [X, la, Ve]),
                      (0, n.useEffect)(() => {
                        !ze && Ye && te && ae(!1);
                      }, [ze, Ye, te]),
                      (0, n.useEffect)(() => {
                        if (!Ne || null == Ue || !Ue.multiLayerL1TradeFeeTotal) return;
                        (async () => {
                          try {
                            let e = "0x0";
                            Le &&
                              ((e = await (0, G.default)(Be, {
                                txParams: { ...Le, gasPrice: (0, W.addHexPrefix)(Le.gasPrice), value: "0x0" }
                              })),
                              pe(e));
                            const t = (0, B.sumHexes)(Ue.multiLayerL1TradeFeeTotal, e);
                            ce(t);
                          } catch (e) {
                            (0, u.captureException)(e), ce(null), pe(null);
                          }
                        })();
                      }, [et, Le, Ne, Be, Ue]),
                      (0, n.useEffect)(() => {
                        tt && X({ type: y.SET_SMART_TRANSACTIONS_ERROR, payload: null });
                      }, [tt, X]),
                      n.default.createElement(
                        "div",
                        { className: "view-quote" },
                        n.default.createElement(
                          "div",
                          { className: (0, i.default)("view-quote__content", { "view-quote__content_modal": ha }) },
                          ne &&
                            n.default.createElement(d.default, {
                              quoteDataRows: bt,
                              onClose: () => re(!1),
                              onSubmit: (e) => X((0, h.swapsQuoteSelected)(e)),
                              swapToSymbol: kt,
                              initialAggId: Ue.aggregator,
                              onQuoteDetailsIsOpened: () => {
                                z({
                                  event: "Quote Details Opened",
                                  category: D.MetaMetricsEventCategory.Swaps,
                                  sensitiveProperties: {
                                    ...ra,
                                    other_quote_selected: (null == Ue ? void 0 : Ue.aggregator) !== (null == je ? void 0 : je.aggregator),
                                    other_quote_selected_source:
                                      (null == Ue ? void 0 : Ue.aggregator) === (null == je ? void 0 : je.aggregator)
                                        ? null
                                        : null == Ue
                                        ? void 0
                                        : Ue.aggregator
                                  }
                                });
                              },
                              hideEstimatedGasFee: Ke && $e
                            }),
                          n.default.createElement(
                            "div",
                            { className: (0, i.default)("view-quote__warning-wrapper", { "view-quote__warning-wrapper--thin": !Ta }) },
                            pa,
                            (Jt || ht) && n.default.createElement(k.default, { message: ua, onClose: () => se(!0) })
                          ),
                          n.default.createElement(
                            "div",
                            { className: "view-quote__countdown-timer-container" },
                            n.default.createElement(x.default, { timeStarted: Te, warningTime: "0:10", labelKey: "swapNewQuoteIn" })
                          ),
                          n.default.createElement(C.default, {
                            sourceValue: (0, q.calcTokenValue)(xt, Ot),
                            sourceDecimals: Ot,
                            sourceSymbol: Nt,
                            destinationValue: (0, q.calcTokenValue)(It, wt),
                            destinationDecimals: wt,
                            destinationSymbol: kt,
                            sourceIconUrl: Pt,
                            destinationIconUrl: At
                          }),
                          ze &&
                            $e &&
                            !(null != Ze && Ze.tradeTxFees) &&
                            !Jt &&
                            n.default.createElement(
                              M.default,
                              { marginTop: 0, marginBottom: 10 },
                              n.default.createElement(R.default, null)
                            ),
                          (!ze || !$e || (null == Ze ? void 0 : Ze.tradeTxFees)) &&
                            n.default.createElement(
                              "div",
                              {
                                className: (0, i.default)("view-quote__fee-card-container", {
                                  "view-quote__fee-card-container--three-rows": Le && (!Me || oe)
                                })
                              },
                              n.default.createElement(_.default, {
                                primaryFee: { fee: Mt, maxFee: Ut },
                                secondaryFee: { fee: Rt, maxFee: jt },
                                hideTokenApprovalRow: !Le || (Me && !oe),
                                tokenApprovalSourceTokenSymbol: Nt,
                                onTokenApprovalClick: () => {
                                  oa(),
                                    X(
                                      (0, v.showModal)({
                                        name: "EDIT_APPROVAL_PERMISSION",
                                        decimals: Et.decimals,
                                        origin: "MetaMask",
                                        setCustomAmount: (e) => {
                                          const t = "" === e ? le : e,
                                            a = (0, w.getCustomTxParamsData)(Le.data, { customPermissionAmount: t, decimals: Et.decimals });
                                          null != t && t.length && Le.data !== a && X((0, v.setCustomApproveTxData)(a));
                                        },
                                        tokenAmount: le,
                                        customTokenAmount: le === vt ? null : vt,
                                        tokenBalance: _t,
                                        tokenSymbol: Et.symbol,
                                        requiredMinimum: (0, U.calcTokenAmount)(Ue.sourceAmount, Et.decimals)
                                      })
                                    );
                                },
                                metaMaskFee: String(ia),
                                numberOfQuotes: Object.values(he).length,
                                onQuotesClick: () => {
                                  z({
                                    event: "All Available Quotes Opened",
                                    category: D.MetaMetricsEventCategory.Swaps,
                                    sensitiveProperties: {
                                      ...ra,
                                      other_quote_selected: (null == Ue ? void 0 : Ue.aggregator) !== (null == je ? void 0 : je.aggregator),
                                      other_quote_selected_source:
                                        (null == Ue ? void 0 : Ue.aggregator) === (null == je ? void 0 : je.aggregator)
                                          ? null
                                          : null == Ue
                                          ? void 0
                                          : Ue.aggregator
                                    }
                                  }),
                                    re(!0);
                                },
                                chainId: Be,
                                maxPriorityFeePerGasDecGWEI: (0, B.hexWEIToDecGWEI)(dt),
                                maxFeePerGasDecGWEI: (0, B.hexWEIToDecGWEI)(ct)
                              })
                            )
                        ),
                        n.default.createElement(P.default, {
                          onSubmit: () => {
                            ae(!0),
                              Me
                                ? Xt.symbol === Ge.symbol
                                  ? Y.push(b.DEFAULT_ROUTE)
                                  : Y.push(`${b.ASSET_ROUTE}/${Xt.address}`)
                                : ze && $e && null != Ze && Ze.tradeTxFees
                                ? X(
                                    (0, h.signAndSendSwapsSmartTransaction)({
                                      unsignedTransaction: et,
                                      trackEvent: z,
                                      history: Y,
                                      additionalTrackingParams: rt
                                    })
                                  )
                                : X((0, h.signAndSendTransactions)(Y, z, rt));
                          },
                          submitText: Z(ze && $e && Qe ? "preparingSwap" : "swap"),
                          hideCancel: !0,
                          disabled: Sa,
                          className: Ta ? "view-quote__thin-swaps-footer" : "",
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = V(e("bignumber.js")),
                  l = e("lodash"),
                  i = V(e("classnames")),
                  u = e("@sentry/browser"),
                  c = e("../../../contexts/i18n"),
                  d = V(e("../select-quote-popover")),
                  p = e("../../../hooks/useEthFiatAmount"),
                  m = e("../../../hooks/useEqualityCheck"),
                  f = e("../../../hooks/usePrevious"),
                  g = e("../../../hooks/gasFeeInput/useGasFeeInputs"),
                  E = e("../../../contexts/metametrics"),
                  _ = V(e("../fee-card")),
                  h = e("../../../ducks/swaps/swaps"),
                  T = e("../../../selectors"),
                  S = e("../../../ducks/metamask/metamask"),
                  v = e("../../../store/actions"),
                  y = e("../../../store/actionConstants"),
                  b = e("../../../helpers/constants/routes"),
                  C = V(e("../main-quote-summary")),
                  w = e("../../confirm-approve/confirm-approve.util"),
                  k = V(e("../../../components/ui/actionable-message/actionable-message")),
                  I = e("../swaps.util"),
                  A = e("../../../hooks/useTokenTracker"),
                  O = e("../../../../shared/constants/swaps"),
                  N = e("../../../../shared/constants/gas"),
                  x = V(e("../countdown-timer")),
                  P = V(e("../swaps-footer")),
                  R = V(e("../../../components/ui/pulse-loader")),
                  M = V(e("../../../components/ui/box")),
                  D = e("../../../../shared/constants/metametrics"),
                  L = e("../../../../shared/modules/string-utils"),
                  F = e("../../../../shared/modules/transaction.utils"),
                  j = e("../../../../shared/lib/metamask-controller-utils"),
                  U = e("../../../../shared/lib/transactions-controller-utils"),
                  W = e("../../../../app/scripts/lib/util"),
                  q = e("../../../../shared/lib/swaps-utils"),
                  G = V(e("../../../helpers/utils/optimism/fetchEstimatedL1Fee")),
                  B = e("../../../../shared/modules/conversion.utils"),
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
                let K;
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/view-quote/view-quote.js" }
    ],
    [
      5947,
      {
        "../../../shared/constants/network": 4759,
        "../../../shared/constants/tokens": 4769,
        "../../../shared/lib/transactions-controller-utils": 4778,
        "../../../shared/modules/security-provider.utils": 4795,
        "../../components/app/approve-content-card/approve-content-card": 4835,
        "../../components/app/confirm-page-container": 4866,
        "../../components/app/confirm-page-container/confirm-page-container-content": 4860,
        "../../components/app/custom-nonce": 4895,
        "../../components/app/custom-spending-cap/custom-spending-cap": 4897,
        "../../components/app/ledger-instruction-field/ledger-instruction-field": 4942,
        "../../components/app/modals/contract-details-modal/contract-details-modal": 4965,
        "../../components/app/network-account-balance-header/network-account-balance-header": 5004,
        "../../components/app/security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert": 5043,
        "../../components/app/security-provider-banner-message/security-provider-banner-message": 5046,
        "../../components/component-library": 5242,
        "../../components/ui/box/box": 5372,
        "../../components/ui/button": 5377,
        "../../components/ui/contract-token-values/contract-token-values": 5391,
        "../../components/ui/dialog": 5397,
        "../../components/ui/page-container": 5458,
        "../../components/ui/review-spending-cap/review-spending-cap": 5471,
        "../../components/ui/simulation-error-message": 5477,
        "../../components/ui/url-icon/url-icon": 5512,
        "../../contexts/gasFee": 5513,
        "../../contexts/i18n": 5514,
        "../../ducks/app/app": 5521,
        "../../ducks/confirm-transaction/confirm-transaction.duck": 5522,
        "../../ducks/history/history": 5526,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/utils/util": 5578,
        "../../hooks/useSimulationFailureWarning": 5616,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "../confirm-approve/confirm-approve.util": 5645,
        "bignumber.js": 2804,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = G(e("prop-types")),
                  l = G(e("bignumber.js")),
                  i = G(e("../../components/ui/box/box")),
                  u = G(e("../../components/app/network-account-balance-header/network-account-balance-header")),
                  c = G(e("../../components/ui/url-icon/url-icon")),
                  d = e("../../helpers/constants/design-system"),
                  p = e("../../contexts/i18n"),
                  m = G(e("../../components/ui/contract-token-values/contract-token-values")),
                  f = G(e("../../components/ui/button")),
                  g = G(e("../../components/ui/review-spending-cap/review-spending-cap")),
                  E = e("../../components/ui/page-container"),
                  _ = G(e("../../components/app/modals/contract-details-modal/contract-details-modal")),
                  h = e("../../selectors"),
                  T = e("../../../shared/constants/network"),
                  S = e("../../store/actions"),
                  v = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                  y = e("../../ducks/history/history"),
                  b = G(e("../../components/app/approve-content-card/approve-content-card")),
                  C = G(e("../../components/app/custom-spending-cap/custom-spending-cap")),
                  w = G(e("../../components/ui/dialog")),
                  k = e("../../contexts/gasFee"),
                  I = e("../confirm-approve/confirm-approve.util"),
                  A = e("../../ducks/app/app"),
                  O = e("../../helpers/utils/util"),
                  N = e("../../../shared/lib/transactions-controller-utils"),
                  x = e("../../../shared/constants/tokens"),
                  P = e("../../../shared/modules/security-provider.utils"),
                  R = G(e("../../components/app/security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert")),
                  M = e("../../components/app/confirm-page-container"),
                  D = e("../../hooks/useSimulationFailureWarning"),
                  L = G(e("../../components/ui/simulation-error-message")),
                  F = G(e("../../components/app/ledger-instruction-field/ledger-instruction-field")),
                  j = G(e("../../components/app/security-provider-banner-message/security-provider-banner-message")),
                  U = e("../../components/component-library"),
                  W = e("../../components/app/confirm-page-container/confirm-page-container-content"),
                  q = G(e("../../components/app/custom-nonce"));
                function G(e) {
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
                const H = ["portfolio.metamask.io"];
                function V({
                  origin: e,
                  siteImage: t,
                  showCustomizeGasModal: a,
                  useNonceField: s,
                  currentCurrency: G,
                  nativeCurrency: B,
                  ethTransactionTotal: V,
                  fiatTransactionTotal: $,
                  hexTransactionTotal: K,
                  hexMinimumTransactionFee: Q,
                  txData: Y,
                  isMultiLayerFeeNetwork: X,
                  supportsEIP1559: Z,
                  userAddress: z,
                  tokenAddress: J,
                  data: ee,
                  isSetApproveForAll: te,
                  isApprovalOrRejection: ae,
                  decimals: ne,
                  dappProposedTokenAmount: re,
                  currentTokenBalance: oe,
                  toAddress: se,
                  tokenSymbol: le,
                  fromAddressIsLedger: ie,
                  warning: ue
                }) {
                  const ce = (0, n.useContext)(p.I18nContext),
                    de = (0, r.useDispatch)(),
                    pe = (0, o.useHistory)(),
                    me = (0, r.useSelector)(y.getMostRecentOverviewPage),
                    { hostname: fe } = new URL(e),
                    ge = H.includes(fe),
                    Ee = (0, r.useSelector)(h.getCustomTokenAmount),
                    [_e, he] = (0, n.useState)(Ee),
                    [Te, Se] = (0, n.useState)(!1),
                    [ve, ye] = (0, n.useState)(!1),
                    [be, Ce] = (0, n.useState)(!1),
                    [we, ke] = (0, n.useState)("0" !== re && !ge),
                    [Ie, Ae] = (0, n.useState)(""),
                    [Oe, Ne] = (0, n.useState)(!1),
                    xe = (0, D.useSimulationFailureWarning)(Oe),
                    Pe = (0, r.useSelector)((e) => (0, h.getTargetAccountWithSendEtherInfo)(e, z)),
                    Re = (0, r.useSelector)(h.getNetworkIdentifier),
                    Me = (0, r.useSelector)(h.getRpcPrefsForCurrentProvider),
                    De = (0, r.useSelector)(h.getUnapprovedTxCount),
                    Le = (0, r.useSelector)(h.getUnapprovedTransactions),
                    Fe = (0, r.useSelector)(h.getUseCurrencyRateCheck),
                    je = (0, r.useSelector)(h.getNextSuggestedNonce),
                    Ue = (0, r.useSelector)(h.getCustomNonceValue);
                  (0, n.useEffect)(() => {
                    (_e && "" !== _e) || !re || he(re);
                  }, []);
                  const We = (e) => e.replace(/,/gu, ".");
                  let qe = x.NUM_W_OPT_DECIMAL_COMMA_OR_DOT_REGEX.test(_e) ? We(_e).toString() : "0";
                  const Ge = (0, N.calcTokenAmount)(x.MAX_TOKEN_ALLOWANCE_AMOUNT, ne);
                  if (_e.length > 1 && Number(_e)) {
                    new l.default(_e).greaterThan(Ge) && (qe = 0);
                  }
                  const Be = qe ? (0, I.getCustomTxParamsData)(ee, { customPermissionAmount: qe, decimals: ne }) : null;
                  let He = { ...Y };
                  Be && (He = { ...He, txParams: { ...He.txParams, data: Be } });
                  const Ve = (0, r.useSelector)((e) => (0, h.transactionFeeSelector)(e, He)),
                    $e = (0, r.useSelector)((e) => (0, h.getKnownMethodData)(e, ee)),
                    { balanceError: Ke } = (0, k.useGasFeeContext)(),
                    Qe = we && ("" === _e || "" !== Ie),
                    Ye = !we && Ke,
                    Xe = T.NETWORK_TO_NAME_MAP[He.chainId] || Re,
                    Ze = () => {
                      const { name: e } = $e;
                      var t;
                      Ve.gasEstimationObject.baseFeePerGas && (He.estimatedBaseFee = Ve.gasEstimationObject.baseFeePerGas),
                        e && (He.contractMethodName = e),
                        re && ((He.dappProposedTokenAmount = re), (He.originalApprovalAmount = re)),
                        _e
                          ? ((He.customTokenAmount = _e), (He.finalApprovalAmount = _e))
                          : re !== undefined && (He.finalApprovalAmount = re),
                        oe && (He.currentTokenBalance = oe),
                        de((0, S.updateCustomNonce)("")),
                        de((0, S.updateAndApproveTx)(((t = He), Ue ? { ...t, customNonceValue: Ue } : t))).then(() => {
                          de((0, v.clearConfirmTransaction)()), pe.push(me);
                        });
                    },
                    ze = () => {
                      Ce(!1), ke(!0);
                    },
                    Je = () => {
                      de((0, S.getNextNonce)());
                    };
                  (0, n.useEffect)(() => {
                    Je();
                  }, [de]);
                  const et = (e) => {
                      de((0, S.updateCustomNonce)(e));
                    },
                    tt = "" === _e,
                    at = n.default.createElement(
                      i.default,
                      { marginTop: 4, key: J },
                      n.default.createElement(m.default, { tokenName: le, address: J, chainId: He.chainId, rpcPrefs: Me })
                    );
                  return n.default.createElement(
                    i.default,
                    { className: "token-allowance-container page-container" },
                    n.default.createElement(i.default, null, n.default.createElement(M.ConfirmPageContainerNavigation, null)),
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
                        !we &&
                          n.default.createElement(
                            f.default,
                            { type: "inline", onClick: () => ze() },
                            n.default.createElement(
                              U.Text,
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
                          U.Text,
                          { variant: d.TextVariant.bodySm, as: "h6", color: d.TextColor.textMuted, fontWeight: d.FontWeight.Bold },
                          we ? 1 : 2,
                          " ",
                          ce("ofTextNofM"),
                          " 2"
                        )
                      )
                    ),
                    n.default.createElement(u.default, {
                      networkName: Xe,
                      accountName: Pe.name,
                      accountBalance: oe,
                      tokenName: le,
                      accountAddress: z,
                      chainId: He.chainId
                    }),
                    n.default.createElement(R.default, { securityAlertResponse: null == Y ? void 0 : Y.securityAlertResponse, margin: 4 }),
                    (0, P.isSuspiciousResponse)(null == Y ? void 0 : Y.securityProviderResponse) &&
                      n.default.createElement(j.default, { securityProviderResponse: Y.securityProviderResponse }),
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
                          U.Text,
                          { variant: d.TextVariant.bodySm, as: "h6", color: d.TextColor.textAlternative, marginLeft: 1 },
                          e
                        )
                      )
                    ),
                    n.default.createElement(
                      i.default,
                      { marginLeft: 4, marginRight: 4 },
                      n.default.createElement(
                        U.Text,
                        { variant: d.TextVariant.headingMd, align: d.TextAlign.Center },
                        we
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
                        f.default,
                        { type: "link", onClick: () => Se(!0), className: "token-allowance-container__verify-link" },
                        n.default.createElement(
                          U.Text,
                          { variant: d.TextVariant.bodySm, as: "h6", color: d.Color.primaryDefault },
                          ce("verifyContractDetails")
                        )
                      )
                    ),
                    n.default.createElement(
                      i.default,
                      { margin: [4, 4, 3, 4] },
                      we
                        ? n.default.createElement(C.default, {
                            txParams: null == Y ? void 0 : Y.txParams,
                            tokenName: le,
                            currentTokenBalance: oe,
                            dappProposedValue: re,
                            siteOrigin: e,
                            passTheErrorText: (e) => Ae(e),
                            decimals: ne,
                            setInputChangeInProgress: ye,
                            customSpendingCap: _e,
                            setCustomSpendingCap: he
                          })
                        : n.default.createElement(g.default, {
                            tokenName: le,
                            currentTokenBalance: oe,
                            tokenValue: isNaN(parseFloat(_e)) ? re : We(_e),
                            onEdit: () => ze()
                          })
                    ),
                    !we &&
                      Ke &&
                      n.default.createElement(w.default, { type: "error", className: "send__error-dialog" }, ce("insufficientFundsForGas")),
                    !we &&
                      n.default.createElement(
                        i.default,
                        { className: "token-allowance-container__card-wrapper" },
                        xe &&
                          n.default.createElement(
                            i.default,
                            { paddingTop: 0, paddingRight: 4, paddingBottom: 4, paddingLeft: 4 },
                            n.default.createElement(L.default, {
                              userAcknowledgedGasMissing: Oe,
                              setUserAcknowledgedGasMissing: () => Ne(!0)
                            })
                          ),
                        n.default.createElement(b.default, {
                          symbol: n.default.createElement(U.Icon, { name: U.IconName.Tag }),
                          title: ce("transactionFee"),
                          showEdit: !0,
                          showAdvanceGasFeeOptions: !0,
                          onEditClick: a,
                          renderTransactionDetailsContent: !0,
                          noBorder: s || !be,
                          supportsEIP1559: Z,
                          isMultiLayerFeeNetwork: X,
                          ethTransactionTotal: V,
                          nativeCurrency: B,
                          fullTxData: He,
                          userAcknowledgedGasMissing: Oe,
                          renderSimulationFailureWarning: xe,
                          hexTransactionTotal: K,
                          hexMinimumTransactionFee: Q,
                          fiatTransactionTotal: $,
                          currentCurrency: G,
                          useCurrencyRateCheck: Fe
                        })
                      ),
                    s &&
                      n.default.createElement(
                        i.default,
                        { marginTop: 4, marginRight: 4, marginLeft: 4 },
                        n.default.createElement(q.default, {
                          nextNonce: je,
                          customNonceValue: Ue,
                          showCustomizeNonceModal: () =>
                            ((e, t, a, n, r) => {
                              de(
                                (0, S.showModal)({
                                  name: "CUSTOMIZE_NONCE",
                                  useNonceField: e,
                                  nextNonce: t,
                                  customNonceValue: a,
                                  updateCustomNonce: n,
                                  getNextNonce: r
                                })
                              );
                            })(s, je, Ue, et, Je)
                        })
                      ),
                    n.default.createElement(
                      i.default,
                      { display: d.DISPLAY.FLEX, flexDirection: d.FLEX_DIRECTION.ROW, justifyContent: d.JustifyContent.center },
                      n.default.createElement(
                        f.default,
                        { type: "link", onClick: () => Ce(!be), className: "token-allowance-container__view-details" },
                        n.default.createElement(
                          U.Text,
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
                              supportsEIP1559: Z,
                              isSetApproveForAll: te,
                              fullTxData: He,
                              userAcknowledgedGasMissing: Oe,
                              renderSimulationFailureWarning: xe,
                              isApprovalOrRejection: ae,
                              data: Be || ee,
                              useCurrencyRateCheck: Fe,
                              hexMinimumTransactionFee: Q
                            })
                          )
                        )
                      : null,
                    !we &&
                      ie &&
                      n.default.createElement(
                        i.default,
                        { paddingLeft: 2, paddingRight: 2 },
                        n.default.createElement(F.default, { showDataInstruction: !0 })
                      ),
                    n.default.createElement(
                      E.PageContainerFooter,
                      {
                        cancelText: ce("reject"),
                        submitText: ce(we ? "next" : "approveButtonText"),
                        onCancel: () => (
                          de((0, S.updateCustomNonce)("")),
                          de((0, A.setCustomTokenAmount)("")),
                          void de((0, S.cancelTx)(He)).then(() => {
                            de((0, v.clearConfirmTransaction)()), pe.push(me);
                          })
                        ),
                        onSubmit: () => (we ? (Ce(!1), void ke(!1)) : Ze()),
                        disabled: ve || Qe || Ye
                      },
                      De > 1 &&
                        n.default.createElement(
                          f.default,
                          {
                            type: "link",
                            onClick: (e) => {
                              e.preventDefault(),
                                de(
                                  (0, S.showModal)({
                                    name: "REJECT_TRANSACTIONS",
                                    unapprovedTxCount: De,
                                    onSubmit: async () => {
                                      await de((0, S.cancelTxs)((0, O.valuesFor)(Le))), de((0, v.clearConfirmTransaction)()), pe.push(me);
                                    }
                                  })
                                );
                            }
                          },
                          ce("rejectTxsN", [De])
                        )
                    ),
                    Te &&
                      n.default.createElement(_.default, {
                        tokenName: le,
                        onClose: () => Se(!1),
                        tokenAddress: J,
                        toAddress: se,
                        chainId: He.chainId,
                        rpcPrefs: Me
                      })
                  );
                }
                V.propTypes = {
                  origin: s.default.string,
                  siteImage: s.default.string,
                  showCustomizeGasModal: s.default.func,
                  useNonceField: s.default.bool,
                  currentCurrency: s.default.string,
                  nativeCurrency: s.default.string,
                  ethTransactionTotal: s.default.string,
                  fiatTransactionTotal: s.default.string,
                  hexTransactionTotal: s.default.string,
                  hexMinimumTransactionFee: s.default.string,
                  txData: s.default.object,
                  isMultiLayerFeeNetwork: s.default.bool,
                  supportsEIP1559: s.default.bool,
                  userAddress: s.default.string,
                  tokenAddress: s.default.string,
                  data: s.default.string,
                  isSetApproveForAll: s.default.bool,
                  isApprovalOrRejection: s.default.bool,
                  decimals: s.default.string,
                  dappProposedTokenAmount: s.default.string,
                  currentTokenBalance: s.default.string,
                  toAddress: s.default.string,
                  tokenSymbol: s.default.string,
                  fromAddressIsLedger: s.default.bool,
                  warning: s.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/token-allowance/token-allowance.js" }
    ],
    [
      5948,
      { "./token-details-page": 5949 },
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
      5949,
      {
        "../../../shared/constants/network": 4759,
        "../../../shared/modules/string-utils": 4797,
        "../../components/component-library": 5242,
        "../../components/ui/box": 5373,
        "../../components/ui/button": 5377,
        "../../components/ui/identicon": 5430,
        "../../components/ui/tooltip": 5502,
        "../../contexts/i18n": 5514,
        "../../ducks/metamask/metamask": 5529,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/constants/routes": 5542,
        "../../hooks/useCopyToClipboard": 5595,
        "../../hooks/useTokenFiatAmount": 5621,
        "../../hooks/useTokenTracker": 5622,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
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
                      y = (0, o.useHistory)(),
                      b = (0, n.useContext)(c.I18nContext),
                      C = (0, r.useSelector)(s.getTokens),
                      w = (0, r.useSelector)(l.getTokenList),
                      { address: k } = (0, o.useParams)(),
                      I = w[k.toLowerCase()],
                      A = null == I || null === (e = I.aggregators) || void 0 === e ? void 0 : e.join(", "),
                      O = C.find(({ address: e }) => (0, S.isEqualCaseInsensitive)(e, k)),
                      { tokensWithBalances: N } = (0, d.useTokenTracker)({ tokens: O ? [O] : [] }),
                      x = null === (t = N[0]) || void 0 === t ? void 0 : t.string,
                      P = (0, p.useTokenFiatAmount)(null == O ? void 0 : O.address, x, null == O ? void 0 : O.symbol),
                      { nickname: R, type: M } = (0, r.useSelector)(s.getProviderConfig),
                      [D, L] = (0, i.useCopyToClipboard)();
                    if (!O) return n.default.createElement(o.Redirect, { to: { pathname: g.DEFAULT_ROUTE } });
                    return n.default.createElement(
                      h.default,
                      { className: "page-container token-details" },
                      n.default.createElement(
                        h.default,
                        { marginLeft: 5, marginRight: 6 },
                        n.default.createElement(
                          v.Text,
                          {
                            fontWeight: T.FontWeight.Bold,
                            margin: 0,
                            marginTop: 4,
                            variant: T.TextVariant.bodySm,
                            as: "h6",
                            color: T.TextColor.textDefault,
                            className: "token-details__title"
                          },
                          b("tokenDetails"),
                          n.default.createElement(_.default, {
                            type: "link",
                            onClick: () => y.push(`${g.ASSET_ROUTE}/${O.address}`),
                            className: "token-details__closeButton"
                          })
                        ),
                        n.default.createElement(
                          h.default,
                          { display: T.DISPLAY.FLEX, marginTop: 4 },
                          n.default.createElement(
                            v.Text,
                            {
                              align: T.TextAlign.Center,
                              fontWeight: T.FontWeight.Bold,
                              margin: 0,
                              marginRight: 5,
                              variant: T.TextVariant.headingSm,
                              as: "h4",
                              color: T.TextColor.textDefault,
                              className: "token-details__token-value"
                            },
                            x || ""
                          ),
                          n.default.createElement(
                            h.default,
                            { marginTop: 1 },
                            n.default.createElement(u.default, { diameter: 32, address: O.address, image: I ? I.iconUrl : O.image })
                          )
                        ),
                        n.default.createElement(
                          v.Text,
                          { margin: 0, marginTop: 4, variant: T.TextVariant.bodySm, as: "h6", color: T.TextColor.textAlternative },
                          P || ""
                        ),
                        n.default.createElement(
                          v.Text,
                          {
                            margin: 0,
                            marginTop: 6,
                            variant: T.TextVariant.bodyXs,
                            as: "h6",
                            color: T.TextColor.textAlternative,
                            fontWeight: T.FontWeight.Bold
                          },
                          b("tokenContractAddress")
                        ),
                        n.default.createElement(
                          h.default,
                          { display: T.DISPLAY.FLEX },
                          n.default.createElement(
                            v.Text,
                            {
                              variant: T.TextVariant.bodySm,
                              as: "h6",
                              margin: 0,
                              marginTop: 2,
                              color: T.TextColor.textDefault,
                              overflowWrap: T.OverflowWrap.BreakWord,
                              className: "token-details__token-address"
                            },
                            O.address
                          ),
                          n.default.createElement(
                            E.default,
                            {
                              position: "bottom",
                              title: b(D ? "copiedExclamation" : "copyToClipboard"),
                              containerClassName: "token-details__copy-icon"
                            },
                            n.default.createElement(v.ButtonIcon, {
                              ariaLabel: "copy",
                              name: D ? v.IconName.CopySuccess : v.IconName.Copy,
                              className: "token-details__copyIcon",
                              onClick: () => L(O.address),
                              color: T.IconColor.primaryDefault,
                              size: v.ButtonIconSize.Sm
                            })
                          )
                        ),
                        n.default.createElement(
                          v.Text,
                          {
                            variant: T.TextVariant.bodyXs,
                            as: "h6",
                            margin: 0,
                            marginTop: 4,
                            color: T.TextColor.textAlternative,
                            fontWeight: T.FontWeight.Bold
                          },
                          b("tokenDecimalTitle")
                        ),
                        n.default.createElement(
                          v.Text,
                          { variant: T.TextVariant.bodySm, as: "h6", margin: 0, marginTop: 1, color: T.TextColor.textDefault },
                          O.decimals
                        ),
                        n.default.createElement(
                          v.Text,
                          {
                            variant: T.TextVariant.bodyXs,
                            as: "h6",
                            margin: 0,
                            marginTop: 4,
                            color: T.TextColor.textAlternative,
                            fontWeight: T.FontWeight.Bold
                          },
                          b("network")
                        ),
                        n.default.createElement(
                          v.Text,
                          { variant: T.TextVariant.bodySm, as: "h6", margin: 1, marginTop: 0, color: T.TextColor.textDefault },
                          M === f.NETWORK_TYPES.RPC ? R ?? b("privateNetwork") : b(M)
                        ),
                        A &&
                          n.default.createElement(
                            n.default.Fragment,
                            null,
                            n.default.createElement(
                              v.Text,
                              {
                                variant: T.TextVariant.bodyXs,
                                as: "h6",
                                margin: 0,
                                marginTop: 4,
                                color: T.TextColor.textAlternative,
                                fontWeight: T.FontWeight.Bold
                              },
                              b("tokenList")
                            ),
                            n.default.createElement(
                              v.Text,
                              { variant: T.TextVariant.bodySm, as: "h6", margin: 0, marginTop: 1, color: T.TextColor.textDefault },
                              `${A}.`
                            )
                          ),
                        n.default.createElement(
                          _.default,
                          {
                            type: "secondary",
                            className: "token-details__hide-token-button",
                            onClick: () => {
                              a((0, m.showModal)({ name: "HIDE_TOKEN_CONFIRMATION", token: O, history: y }));
                            }
                          },
                          n.default.createElement(
                            v.Text,
                            { variant: T.TextVariant.bodySm, as: "h6", color: T.TextColor.primaryDefault },
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = e("../../ducks/metamask/metamask"),
                  l = e("../../selectors"),
                  i = e("../../hooks/useCopyToClipboard"),
                  u = y(e("../../components/ui/identicon")),
                  c = e("../../contexts/i18n"),
                  d = e("../../hooks/useTokenTracker"),
                  p = e("../../hooks/useTokenFiatAmount"),
                  m = e("../../store/actions"),
                  f = e("../../../shared/constants/network"),
                  g = e("../../helpers/constants/routes"),
                  E = y(e("../../components/ui/tooltip")),
                  _ = y(e("../../components/ui/button")),
                  h = y(e("../../components/ui/box")),
                  T = e("../../helpers/constants/design-system"),
                  S = e("../../../shared/modules/string-utils"),
                  v = e("../../components/component-library");
                function y(e) {
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
      595,
      {
        "../internal/svg-icons/Person": 879,
        "../styles/withStyles": 913,
        "@babel/runtime/helpers/extends": 216,
        "@babel/runtime/helpers/interopRequireDefault": 220,
        "@babel/runtime/helpers/interopRequireWildcard": 221,
        "@babel/runtime/helpers/objectWithoutProperties": 227,
        clsx: 2954,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                  r = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                var o = r(e("@babel/runtime/helpers/extends")),
                  s = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                  l = n(e("react")),
                  i = (r(e("prop-types")), r(e("clsx"))),
                  u = r(e("../styles/withStyles")),
                  c = r(e("../internal/svg-icons/Person")),
                  d = function (e) {
                    return {
                      root: {
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        width: 40,
                        height: 40,
                        fontFamily: e.typography.fontFamily,
                        fontSize: e.typography.pxToRem(20),
                        lineHeight: 1,
                        borderRadius: "50%",
                        overflow: "hidden",
                        userSelect: "none"
                      },
                      colorDefault: {
                        color: e.palette.background.default,
                        backgroundColor: "light" === e.palette.type ? e.palette.grey[400] : e.palette.grey[600]
                      },
                      circle: {},
                      rounded: { borderRadius: e.shape.borderRadius },
                      square: { borderRadius: 0 },
                      img: {
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                        objectFit: "cover",
                        color: "transparent",
                        textIndent: 1e4
                      },
                      fallback: { width: "75%", height: "75%" }
                    };
                  };
                a.styles = d;
                var p = l.forwardRef(function (e, t) {
                    var a = e.alt,
                      n = e.children,
                      r = e.classes,
                      u = e.className,
                      d = e.component,
                      p = void 0 === d ? "div" : d,
                      m = e.imgProps,
                      f = e.sizes,
                      g = e.src,
                      E = e.srcSet,
                      _ = e.variant,
                      h = void 0 === _ ? "circle" : _,
                      T = (0, s.default)(e, [
                        "alt",
                        "children",
                        "classes",
                        "className",
                        "component",
                        "imgProps",
                        "sizes",
                        "src",
                        "srcSet",
                        "variant"
                      ]),
                      S = null,
                      v = (function (e) {
                        var t = e.src,
                          a = e.srcSet,
                          n = l.useState(!1),
                          r = n[0],
                          o = n[1];
                        return (
                          l.useEffect(
                            function () {
                              if (!t && !a) return undefined;
                              o(!1);
                              var e = !0,
                                n = new Image();
                              return (
                                (n.src = t),
                                (n.srcSet = a),
                                (n.onload = function () {
                                  e && o("loaded");
                                }),
                                (n.onerror = function () {
                                  e && o("error");
                                }),
                                function () {
                                  e = !1;
                                }
                              );
                            },
                            [t, a]
                          ),
                          r
                        );
                      })({ src: g, srcSet: E }),
                      y = g || E,
                      b = y && "error" !== v;
                    return (
                      (S = b
                        ? l.createElement("img", (0, o.default)({ alt: a, src: g, srcSet: E, sizes: f, className: r.img }, m))
                        : null != n
                        ? n
                        : y && a
                        ? a[0]
                        : l.createElement(c.default, { className: r.fallback })),
                      l.createElement(
                        p,
                        (0, o.default)({ className: (0, i.default)(r.root, r.system, r[h], u, !b && r.colorDefault), ref: t }, T),
                        S
                      )
                    );
                  }),
                  m = (0, u.default)(d, { name: "MuiAvatar" })(p);
                a.default = m;
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/Avatar/Avatar.js" }
    ],
    [
      5950,
      { "./unlock-page.container": 5952 },
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
      5951,
      {
        "../../../shared/constants/metametrics": 4758,
        "../../../shared/lib/ui-utils": 4779,
        "../../components/ui/button": 5377,
        "../../components/ui/mascot": 5445,
        "../../components/ui/text-field": 5491,
        "../../helpers/constants/routes": 5542,
        "../../helpers/utils/build-types": 5558,
        "./unlock-page.util": 5953,
        events: 3331,
        "prop-types": 4219,
        react: 4475
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
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = f(e("prop-types")),
                  s = f(e("../../components/ui/button")),
                  l = f(e("../../components/ui/text-field")),
                  i = f(e("../../components/ui/mascot")),
                  u = e("../../helpers/constants/routes"),
                  c = e("../../../shared/constants/metametrics"),
                  d = e("../../../shared/lib/ui-utils"),
                  p = e("../../helpers/utils/build-types"),
                  m = e("./unlock-page.util");
                function f(e) {
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
                function E(e, t, a) {
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
                      E(this, "state", { password: "", error: null }),
                      E(this, "submitting", !1),
                      E(this, "failed_attempts", 0),
                      E(this, "animationEventEmitter", new n.EventEmitter()),
                      E(this, "handleSubmit", async (e) => {
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
                        n = (0, m.getCaretCoordinates)(t, t.selectionEnd);
                      this.animationEventEmitter.emit("point", { x: a.left + n.left - t.scrollLeft, y: a.top + n.top - t.scrollTop });
                    }
                  }
                  renderSubmitButton() {
                    return r.default.createElement(
                      s.default,
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
                    let o = a("appNameMmi");
                    return (
                      (o = a("needHelpLinkText")),
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
                              s.default,
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
                                o
                              )
                            ])
                          )
                        )
                      )
                    );
                  }
                }
                (a.default = _),
                  E(_, "contextTypes", { trackEvent: o.default.func, t: o.default.func }),
                  E(_, "propTypes", {
                    history: o.default.object.isRequired,
                    isUnlocked: o.default.bool,
                    onRestore: o.default.func,
                    onSubmit: o.default.func,
                    forceUpdateMetamaskState: o.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/unlock-page/unlock-page.component.js" }
    ],
    [
      5952,
      {
        "../../../app/scripts/lib/util": 91,
        "../../../shared/constants/app": 4749,
        "../../helpers/constants/routes": 5542,
        "../../store/actions": 5965,
        "./unlock-page.component": 5951,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
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
                  o = e("react-router-dom"),
                  s = e("redux"),
                  l = e("../../../app/scripts/lib/util"),
                  i = e("../../../shared/constants/app"),
                  u = e("../../helpers/constants/routes"),
                  c = e("../../store/actions"),
                  d = (n = e("./unlock-page.component")) && n.__esModule ? n : { default: n };
                a.default = (0, s.compose)(
                  o.withRouter,
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
                      const { markPasswordForgotten: n, tryUnlockMetamask: r, ...o } = t,
                        { history: s, onSubmit: c, ...d } = a;
                      return {
                        ...e,
                        ...o,
                        ...d,
                        onRestore: async () => {
                          await n(),
                            s.push(u.RESTORE_VAULT_ROUTE),
                            (0, l.getEnvironmentType)() === i.ENVIRONMENT_TYPE_POPUP &&
                              global.platform.openExtensionInBrowser(u.RESTORE_VAULT_ROUTE);
                        },
                        onSubmit:
                          c ||
                          (async (e) => {
                            await r(e), s.push(u.DEFAULT_ROUTE);
                          }),
                        history: s
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
      5953,
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
                    const o = { top: r.offsetTop + parseInt(n.borderTopWidth, 10), left: r.offsetLeft + parseInt(n.borderLeftWidth, 10) };
                    return document.body.removeChild(a), o;
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/unlock-page/unlock-page.util.js" }
    ],
    [
      5954,
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
      5955,
      {
        ".": 5958,
        "../../shared/constants/gas": 4753,
        "../../shared/constants/transaction": 4770,
        "../../shared/lib/transactions-controller-utils": 4778,
        "../../shared/modules/conversion.utils": 4784,
        "../../shared/modules/gas.utils": 4787,
        "../../shared/modules/string-utils": 4797,
        "../ducks/metamask/metamask": 5529,
        "../helpers/utils/confirm-tx.util": 5560,
        "../helpers/utils/tx-helper": 5577,
        "./custom-gas": 5956,
        "./selectors": 5961,
        reselect: 4514
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
                  o = (n = e("../helpers/utils/tx-helper")) && n.__esModule ? n : { default: n },
                  s = e("../helpers/utils/confirm-tx.util"),
                  l = e("../ducks/metamask/metamask"),
                  i = e("../../shared/constants/transaction"),
                  u = e("../../shared/constants/gas"),
                  c = e("../../shared/modules/gas.utils"),
                  d = e("../../shared/modules/string-utils"),
                  p = e("../../shared/lib/transactions-controller-utils"),
                  m = e("../../shared/modules/conversion.utils"),
                  f = e("./custom-gas"),
                  g = e("./selectors"),
                  E = e(".");
                const _ = (e) => (0, E.getUnapprovedTransactions)(e),
                  h = (e) => e.metamask.unapprovedMsgs,
                  T = (e) => e.metamask.unapprovedPersonalMsgs,
                  S = (e) => e.metamask.unapprovedDecryptMsgs,
                  v = (e) => e.metamask.unapprovedEncryptionPublicKeyMsgs,
                  y = (e) => e.metamask.unapprovedTypedMessages;
                (a.unconfirmedTransactionsListSelector = (0, r.createSelector)(
                  _,
                  h,
                  T,
                  S,
                  v,
                  y,
                  g.getCurrentChainId,
                  (e = {}, t = {}, a = {}, n = {}, r = {}, s = {}, l) => (0, o.default)(e, t, a, n, r, s, l) || []
                )),
                  (a.unconfirmedTransactionsHashSelector = (0, r.createSelector)(
                    _,
                    h,
                    T,
                    S,
                    v,
                    y,
                    g.getCurrentChainId,
                    (e = {}, t = {}, a = {}, n = {}, r = {}, o = {}, s) => ({
                      ...Object.keys(e).reduce((t, a) => {
                        const n = { ...t };
                        return e[a].chainId === s && (n[a] = e[a]), n;
                      }, {}),
                      ...t,
                      ...a,
                      ...n,
                      ...r,
                      ...o
                    })
                  )),
                  (a.unconfirmedMessagesHashSelector = (0, r.createSelector)(h, T, S, v, y, (e = {}, t = {}, a = {}, n = {}, r = {}) => ({
                    ...e,
                    ...t,
                    ...a,
                    ...n,
                    ...r
                  })));
                a.use4ByteResolutionSelector = (e) => e.metamask.use4ByteResolution;
                const b = (e) => e.metamask.currentCurrency;
                a.currentCurrencySelector = b;
                const C = (e) => e.metamask.conversionRate;
                a.conversionRateSelector = C;
                const w = (e) => e.confirmTransaction.txData;
                a.txDataSelector = w;
                const k = (0, r.createSelector)(
                    (e) => e.confirmTransaction.tokenProps,
                    (e) => e && e.decimals
                  ),
                  I = (0, r.createSelector)(
                    (e) => e.confirmTransaction.tokenData,
                    (e) => (e && e.args) || []
                  ),
                  A = (0, r.createSelector)(w, (e) => (e && e.txParams) || {}),
                  O = (a.tokenAddressSelector = (0, r.createSelector)(A, (e) => e && e.to));
                (a.sendTokenTokenAmountAndToAddressSelector = (0, r.createSelector)(I, k, (e, t) => {
                  let a = "",
                    n = "0";
                  if (e && e.length) {
                    a = e._to;
                    let r = e._value.toString();
                    t && (r = (0, p.calcTokenAmount)(r, t).toFixed()), (n = (0, s.roundExponential)(r));
                  }
                  return { toAddress: a, tokenAmount: n };
                })),
                  (a.contractExchangeRateSelector = (0, r.createSelector)(
                    (e) => e.metamask.contractExchangeRates,
                    O,
                    (e, t) => e[Object.keys(e).find((e) => (0, d.isEqualCaseInsensitive)(e, t))]
                  ));
                a.transactionFeeSelector = function (e, t) {
                  var a, n, r, o;
                  const d = b(e),
                    p = C(e),
                    g = (0, l.getNativeCurrency)(e),
                    _ = (0, l.getGasFeeEstimates)(e) || {},
                    h = (0, l.getGasEstimateType)(e),
                    T = (0, E.checkNetworkAndAccountSupports1559)(e),
                    S = { gasLimit: (null === (a = t.txParams) || void 0 === a ? void 0 : a.gas) ?? "0x0" };
                  if (T) {
                    var v;
                    const { gasPrice: e = "0" } = _,
                      a = _[t.userFeeLevel] || {};
                    if ((null === (v = t.txParams) || void 0 === v ? void 0 : v.type) === i.TransactionEnvelopeType.legacy) {
                      var y;
                      S.gasPrice = (null === (y = t.txParams) || void 0 === y ? void 0 : y.gasPrice) ?? (0, m.decGWEIToHexWEI)(e);
                    } else {
                      var w, k, I, A;
                      const { suggestedMaxPriorityFeePerGas: n, suggestedMaxFeePerGas: r } = a;
                      (S.maxFeePerGas =
                        null === (w = t.txParams) || void 0 === w || !w.maxFeePerGas || (t.userFeeLevel !== u.CUSTOM_GAS_ESTIMATE && r)
                          ? (0, m.decGWEIToHexWEI)(r || e)
                          : null === (k = t.txParams) || void 0 === k
                          ? void 0
                          : k.maxFeePerGas),
                        (S.maxPriorityFeePerGas =
                          null === (I = t.txParams) ||
                          void 0 === I ||
                          !I.maxPriorityFeePerGas ||
                          (t.userFeeLevel !== u.CUSTOM_GAS_ESTIMATE && n)
                            ? (n && (0, m.decGWEIToHexWEI)(n)) || S.maxFeePerGas
                            : null === (A = t.txParams) || void 0 === A
                            ? void 0
                            : A.maxPriorityFeePerGas),
                        (S.baseFeePerGas = (0, m.decGWEIToHexWEI)(_.estimatedBaseFee));
                    }
                  } else
                    switch (h) {
                      case u.GasEstimateTypes.none:
                        S.gasPrice = (null === (n = t.txParams) || void 0 === n ? void 0 : n.gasPrice) ?? "0x0";
                        break;
                      case u.GasEstimateTypes.ethGasPrice:
                        S.gasPrice =
                          (null === (r = t.txParams) || void 0 === r ? void 0 : r.gasPrice) ?? (0, m.decGWEIToHexWEI)(_.gasPrice);
                        break;
                      case u.GasEstimateTypes.legacy:
                        S.gasPrice =
                          (null === (o = t.txParams) || void 0 === o ? void 0 : o.gasPrice) ?? (0, f.getAveragePriceEstimateInHexWEI)(e);
                      case u.GasEstimateTypes.feeMarket:
                    }
                  const { txParams: { value: O = "0x0" } = {} } = t,
                    N = (0, m.getValueFromWeiHex)({ value: O, fromCurrency: g, toCurrency: d, conversionRate: p, numberOfDecimals: 2 }),
                    x = (0, m.getValueFromWeiHex)({ value: O, fromCurrency: g, toCurrency: g, conversionRate: p, numberOfDecimals: 6 }),
                    P = (0, c.getMinimumGasTotalInHexWei)(S),
                    R = (0, c.getMaximumGasTotalInHexWei)(S),
                    M = (0, s.getTransactionFee)({ value: P, fromCurrency: g, toCurrency: d, numberOfDecimals: 2, conversionRate: p }),
                    D = (0, s.getTransactionFee)({ value: R, fromCurrency: g, toCurrency: d, numberOfDecimals: 2, conversionRate: p }),
                    L = (0, s.getTransactionFee)({ value: P, fromCurrency: g, toCurrency: g, numberOfDecimals: 6, conversionRate: p });
                  return {
                    hexTransactionAmount: O,
                    fiatTransactionAmount: N,
                    ethTransactionAmount: x,
                    hexMinimumTransactionFee: P,
                    fiatMinimumTransactionFee: M,
                    hexMaximumTransactionFee: R,
                    fiatMaximumTransactionFee: D,
                    ethTransactionFee: L,
                    fiatTransactionTotal: (0, s.addFiat)(M, N),
                    ethTransactionTotal: (0, s.addEth)(L, x),
                    hexTransactionTotal: (0, m.sumHexes)(O, P),
                    gasEstimationObject: S
                  };
                };
              };
            };
      },
      { package: "$root$", file: "ui/selectors/confirm-transaction.js" }
    ],
    [
      5956,
      {
        ".": 5958,
        "../../app/scripts/lib/util": 91,
        "../../shared/constants/common": 4751,
        "../../shared/constants/gas": 4753,
        "../../shared/lib/transactions-controller-utils": 4778,
        "../../shared/modules/Numeric": 4780,
        "../../shared/modules/conversion.utils": 4784,
        "../ducks/metamask/metamask": 5529,
        "../ducks/send": 5531,
        "../helpers/utils/confirm-tx.util": 5560,
        "../helpers/utils/formatters": 5562
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.basicPriceEstimateToETHTotal = h),
                  (a.getAverageEstimate = E),
                  (a.getAveragePriceEstimateInHexWEI = function (e) {
                    return S(E(e));
                  }),
                  (a.getBasicGasEstimateLoadingStatus = function (e) {
                    return !1 === v(e);
                  }),
                  (a.getCustomGasLimit = function (e) {
                    return e.gas.customData.limit;
                  }),
                  (a.getCustomGasPrice = f),
                  (a.getDefaultActiveButtonIndex = function (e, t, a) {
                    return e.map(({ priceInHexWei: e }) => e).lastIndexOf((0, n.addHexPrefix)(t || a));
                  }),
                  (a.getFastPriceEstimate = _),
                  (a.getFastPriceEstimateInHexWEI = function (e) {
                    return S(_(e) || "0x0");
                  }),
                  (a.getGasPriceInHexWei = S),
                  (a.getIsCustomNetworkGasPriceFetched = function (e) {
                    return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.ethGasPrice && !(0, m.getIsMainnet)(e);
                  }),
                  (a.getIsEthGasPriceFetched = function (e) {
                    return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.ethGasPrice && (0, m.getIsMainnet)(e);
                  }),
                  (a.getIsGasEstimatesFetched = v),
                  (a.getNoGasPriceFetched = function (e) {
                    return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.none;
                  }),
                  (a.getRenderableConvertedCurrencyFee = function (e, t, a, n) {
                    const s = h(new d.Numeric(e, 10).toBase(16).toString(), t),
                      l = (0, r.decEthToConvertedCurrency)(s, a, n);
                    return (0, o.formatCurrency)(l, a);
                  }),
                  (a.getRenderableEthFee = function (e, t, a = 9, n = "ETH") {
                    const r = h(new d.Numeric(e, 10).toBase(16).toString(), t, a);
                    return (0, s.formatETHFee)(r, n);
                  }),
                  (a.getSafeLowEstimate = g),
                  (a.isCustomPriceExcessive = function (e, t = !1) {
                    const a = t ? (0, l.getGasPrice)(e) : f(e),
                      n = _(e);
                    if (!a || !n) return !1;
                    return new d.Numeric(a, 16, p.EtherDenomination.WEI)
                      .toDenomination(p.EtherDenomination.GWEI)
                      .greaterThan(Math.floor(1.5 * n), 10);
                  }),
                  (a.isCustomPriceSafe = function (e) {
                    const t = g(e),
                      a = f(e);
                    if (!a) return !0;
                    if (!t) return !1;
                    return new d.Numeric(a, 16, p.EtherDenomination.WEI).toDenomination(p.EtherDenomination.GWEI).greaterThan(t, 10);
                  }),
                  (a.isCustomPriceSafeForCustomNetwork = function (e) {
                    const t = E(e),
                      a = f(e);
                    if (!a) return !0;
                    if (!t) return !1;
                    return new d.Numeric(a, 16, p.EtherDenomination.WEI).toDenomination(p.EtherDenomination.GWEI).greaterThan(t, 10);
                  }),
                  (a.priceEstimateToWei = T);
                var n = e("../../app/scripts/lib/util"),
                  r = e("../../shared/modules/conversion.utils"),
                  o = e("../helpers/utils/confirm-tx.util"),
                  s = e("../helpers/utils/formatters"),
                  l = e("../ducks/send"),
                  i = e("../../shared/constants/gas"),
                  u = e("../ducks/metamask/metamask"),
                  c = e("../../shared/lib/transactions-controller-utils"),
                  d = e("../../shared/modules/Numeric"),
                  p = e("../../shared/constants/common"),
                  m = e(".");
                function f(e) {
                  return e.gas.customData.price;
                }
                function g(e) {
                  const t = (0, u.getGasFeeEstimates)(e);
                  return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.legacy ? (null == t ? void 0 : t.low) : null;
                }
                function E(e) {
                  const t = (0, u.getGasFeeEstimates)(e);
                  return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.legacy ? (null == t ? void 0 : t.medium) : null;
                }
                function _(e) {
                  const t = (0, u.getGasFeeEstimates)(e);
                  return (0, u.getGasEstimateType)(e) === i.GasEstimateTypes.legacy ? (null == t ? void 0 : t.high) : null;
                }
                function h(e, t, a = 9) {
                  return new d.Numeric((0, c.calcGasTotal)(t, e), 16, p.EtherDenomination.GWEI).round(a).toBase(10).toString();
                }
                function T(e) {
                  return new d.Numeric(e, 16, p.EtherDenomination.GWEI).toDenomination(p.EtherDenomination.WEI).round(9).toString();
                }
                function S(e) {
                  const t = new d.Numeric(e, 10).toBase(16).toString();
                  return (0, n.addHexPrefix)(T(t));
                }
                function v(e) {
                  const t = (0, u.getGasEstimateType)(e);
                  return !(0, u.isEIP1559Network)(e) && t !== i.GasEstimateTypes.none;
                }
              };
            };
      },
      { package: "$root$", file: "ui/selectors/custom-gas.js" }
    ],
    [
      5957,
      { "../helpers/constants/routes": 5542 },
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
      5958,
      {
        "./approvals": 5954,
        "./confirm-transaction": 5955,
        "./custom-gas": 5956,
        "./first-time-flow": 5957,
        "./metametrics": 5959,
        "./permissions": 5960,
        "./selectors": 5961,
        "./transactions": 5962
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
                var o = e("./first-time-flow");
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
                var s = e("./metametrics");
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
      5959,
      { reselect: 4514 },
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
                const o = (a.selectFragmentBySuccessEvent = (0, n.createSelector)(
                    r,
                    (e, t) => t,
                    (e, t) => (t.persist ? Object.values(e).find((e) => e.successEvent === t.successEvent) : undefined)
                  )),
                  s = (a.selectFragmentById = (0, n.createSelector)(
                    r,
                    (e, t) => t,
                    (e, t) => (t && null != e && e[t] ? e[t] : undefined)
                  ));
                a.selectMatchingFragment = (0, n.createSelector)(
                  (e, t) => o(e, t.fragmentOptions),
                  (e, t) => s(e, t.existingId),
                  (e, t) => t ?? e
                );
              };
            };
      },
      { package: "$root$", file: "ui/selectors/metametrics.js" }
    ],
    [
      596,
      { "./Avatar": 595, "@babel/runtime/helpers/interopRequireDefault": 220 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var r = n(e("./Avatar"));
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/Avatar/index.js" }
    ],
    [
      5960,
      {
        ".": 5958,
        "../../shared/constants/permissions": 4760,
        "./approvals": 5954,
        "@metamask/controller-utils": 1124,
        "@metamask/snaps-rpc-methods": 1953
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
                    const t = (0, l.getSelectedAddress)(e),
                      a = c(e),
                      {
                        metamask: { identities: n }
                      } = e,
                      r = Object.keys(n).length;
                    if (a.length && a.length !== r && -1 === a.findIndex((e) => e === t)) return n[t];
                    return undefined;
                  }),
                  (a.getAddressConnectedSubjectMap = function (e) {
                    const t = (0, l.getSubjectMetadata)(e),
                      a = d(e),
                      n = {};
                    return (
                      Object.keys(a).forEach((e) => {
                        const { iconUrl: r, name: o } = t[e] || {};
                        a[e].forEach((t) => {
                          const a = o || e;
                          n[t] = n[t] ? { ...n[t], [e]: { iconUrl: r, name: a } } : { [e]: { iconUrl: r, name: a } };
                        });
                      }),
                      n
                    );
                  }),
                  (a.getConnectedSubjectsForAllAddresses = function (e) {
                    const t = i(e),
                      a = (0, l.getSubjectMetadata)(e),
                      n = {};
                    return (
                      Object.entries(t).forEach(([e, t]) => {
                        p(t).forEach((t) => {
                          n[t] || (n[t] = []), n[t].push(a[e] || {});
                        });
                      }),
                      n
                    );
                  }),
                  (a.getConnectedSubjectsForSelectedAddress = function (e) {
                    const { selectedAddress: t } = e.metamask,
                      a = i(e),
                      n = (0, l.getSubjectMetadata)(e),
                      r = [];
                    return (
                      Object.entries(a).forEach(([e, a]) => {
                        if (!p(a).includes(t)) return;
                        const { extensionId: o, name: s, iconUrl: l } = n[e] || {};
                        r.push({ extensionId: o, origin: e, name: s, iconUrl: l });
                      }),
                      r
                    );
                  }),
                  (a.getFirstPermissionRequest = function (e) {
                    const t = E(e);
                    return t && t[0] ? t[0] : null;
                  }),
                  (a.getFirstSnapInstallOrUpdateRequest = function (e) {
                    var t;
                    return (null === (t = g(e)) || void 0 === t ? void 0 : t[0]) ?? null;
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
                      o = (0, l.getMetaMaskAccountsOrdered)(e),
                      s = c(e);
                    return o
                      .filter((e) => s.includes(e.address))
                      .map((e) => ({ ...e, lastActive: null == r ? void 0 : r[e.address] }))
                      .sort(({ lastSelected: e }, { lastSelected: t }) =>
                        e === t ? 0 : e === undefined ? 1 : t === undefined ? -1 : t - e
                      );
                  }),
                  (a.getPermissionSubjects = i),
                  (a.getPermissions = function (e, t) {
                    var a;
                    return null === (a = i(e)[t]) || void 0 === a ? void 0 : a.permissions;
                  }),
                  (a.getPermissionsForActiveTab = function (e) {
                    var t;
                    const { activeTab: a, metamask: n } = e,
                      { subjects: r = {} } = n,
                      o = (null === (t = r[a.origin]) || void 0 === t ? void 0 : t.permissions) ?? {};
                    return Object.keys(o).map((e) => ({ key: e, value: o[e] }));
                  }),
                  (a.getPermissionsRequests = E),
                  (a.getPermittedAccounts = u),
                  (a.getPermittedAccountsByOrigin = d),
                  (a.getPermittedAccountsForCurrentTab = c),
                  (a.getRequestState = function (e, t) {
                    var a;
                    return null === (a = e.metamask.pendingApprovals[t]) || void 0 === a ? void 0 : a.requestState;
                  }),
                  (a.getRequestType = function (e, t) {
                    var a;
                    return null === (a = e.metamask.pendingApprovals[t]) || void 0 === a ? void 0 : a.type;
                  }),
                  (a.getSnapInstallOrUpdateRequests = g),
                  (a.getSubjectsWithPermission = function (e, t) {
                    const a = i(e),
                      n = [];
                    return (
                      Object.entries(a).forEach(([a, { permissions: r }]) => {
                        if (r[t]) {
                          const { extensionId: t, name: r, iconUrl: o } = (0, l.getTargetSubjectMetadata)(e, a) || {};
                          n.push({ extensionId: t, origin: a, name: r, iconUrl: o });
                        }
                      }),
                      n
                    );
                  }),
                  (a.getSubjectsWithSnapPermission = function (e, t) {
                    const a = i(e);
                    return Object.entries(a)
                      .filter(([e, { permissions: a }]) => {
                        var n;
                        return null === (n = a[r.WALLET_SNAP_PERMISSION_KEY]) || void 0 === n ? void 0 : n.caveats[0].value[t];
                      })
                      .map(([t, a]) => {
                        const { extensionId: n, name: r, iconUrl: o } = (0, l.getTargetSubjectMetadata)(e, t) || {};
                        return { extensionId: n, origin: t, name: r, iconUrl: o };
                      });
                  });
                var n = e("@metamask/controller-utils"),
                  r = e("@metamask/snaps-rpc-methods"),
                  o = e("../../shared/constants/permissions"),
                  s = e("./approvals"),
                  l = e(".");
                function i(e) {
                  return e.metamask.subjects || {};
                }
                function u(e, t) {
                  return f(
                    m(
                      (function (e, t) {
                        var a;
                        return t && (null === (a = e.metamask.subjects) || void 0 === a ? void 0 : a[t]);
                      })(e, t)
                    )
                  );
                }
                function c(e) {
                  return u(e, (0, l.getOriginOfCurrentTab)(e));
                }
                function d(e) {
                  const t = i(e);
                  return Object.keys(t).reduce((e, a) => {
                    const n = p(t[a]);
                    return n.length > 0 && (e[a] = n), e;
                  }, {});
                }
                function p(e) {
                  return f(m(e));
                }
                function m(e = {}) {
                  var t;
                  return (null === (t = e.permissions) || void 0 === t ? void 0 : t.eth_accounts) || {};
                }
                function f(e) {
                  const t = (function (e = {}) {
                    return Array.isArray(e.caveats) && e.caveats.find((e) => e.type === o.CaveatTypes.restrictReturnedAccounts);
                  })(e);
                  return t && Array.isArray(t.value) ? t.value : [];
                }
                function g(e) {
                  return Object.values(e.metamask.pendingApprovals)
                    .filter(({ type: e }) => "wallet_installSnap" === e || "wallet_updateSnap" === e || "wallet_installSnapResult" === e)
                    .map(({ requestData: e }) => e);
                }
                function E(e) {
                  var t;
                  return null === (t = (0, s.getApprovalRequestsByType)(e, n.ApprovalType.WalletRequestPermissions)) || void 0 === t
                    ? void 0
                    : t.map(({ requestData: e }) => e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/selectors/permissions.js" }
    ],
    [
      5961,
      {
        "../../app/scripts/lib/util": 91,
        "../../shared/constants/app": 4749,
        "../../shared/constants/bridge": 4750,
        "../../shared/constants/hardware-wallets": 4754,
        "../../shared/constants/keyring": 4755,
        "../../shared/constants/labels": 4756,
        "../../shared/constants/network": 4759,
        "../../shared/constants/swaps": 4766,
        "../../shared/constants/terms": 4767,
        "../../shared/constants/time": 4768,
        "../../shared/constants/tokens": 4769,
        "../../shared/constants/transaction": 4770,
        "../../shared/modules/conversion.utils": 4784,
        "../../shared/modules/string-utils": 4797,
        "../../shared/notifications": 4801,
        "../ducks/app/app": 5521,
        "../ducks/metamask/metamask": 5529,
        "../helpers/constants/design-system": 5537,
        "../helpers/utils/util": 5578,
        "../pages/confirmation/templates": 5683,
        "./permissions": 5960,
        "./transactions": 5962,
        "./util": 5963,
        "@metamask/controller-utils": 1124,
        "@metamask/name-controller": 1596,
        "@metamask/permission-controller": 1667,
        lodash: 4071,
        reselect: 4514
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.accountsWithSendEtherInfoSelector = Y),
                  (a.checkNetworkAndAccountSupports1559 = function (e) {
                    return (0, v.isEIP1559Network)(e);
                  }),
                  (a.checkNetworkOrAccountNotSupports1559 = function (e) {
                    return (0, v.isNotEIP1559Network)(e);
                  }),
                  (a.doesAddressRequireLedgerHidConnection = function (e, t) {
                    const a = (0, v.isAddressLedger)(e, t),
                      n = (0, v.getLedgerTransportType)(e) === c.LedgerTransportTypes.webhid,
                      r = (0, y.getLedgerWebHidConnectedStatus)(e) !== c.WebHIDConnectedStatuses.connected,
                      o = (0, y.getLedgerTransportStatus)(e) !== c.HardwareTransportStates.verified;
                    return a && n && (r || o);
                  }),
                  (a.getAccountName = function (e, t) {
                    const a = Object.values(e).find((e) => (0, b.isEqualCaseInsensitive)(e.address, t));
                    return a && "" !== a.name ? a.name : "";
                  }),
                  (a.getAccountType = function (e) {
                    return D(R(e));
                  }),
                  (a.getAccountTypeForKeyring = D),
                  (a.getAccountsWithLabels = function (e) {
                    return H(e).map(({ address: e, name: t, balance: a }) => ({
                      address: e,
                      addressLabel: `${
                        t.length < m.TRUNCATED_NAME_CHAR_LIMIT ? t : `${t.slice(0, m.TRUNCATED_NAME_CHAR_LIMIT - 1)}...`
                      } (${(0, E.shortenAddress)(e)})`,
                      label: t,
                      balance: a
                    }));
                  }),
                  (a.getAddressBook = K),
                  (a.getAddressBookEntry = Q),
                  (a.getAddressBookEntryOrAccountName = function (e, t) {
                    const a = Q(e, t) || Object.values(e.metamask.identities).find((e) => (0, b.isEqualCaseInsensitive)(e.address, t));
                    return a && "" !== a.name ? a.name : t;
                  }),
                  (a.getAdvancedGasFeeValues = function (e) {
                    return e.metamask.advancedGasFee[P(e)];
                  }),
                  (a.getAdvancedInlineGasShown = function (e) {
                    return Boolean(e.metamask.featureFlags.advancedInlineGas);
                  }),
                  (a.getAllAccountsOnNetworkAreEmpty = function (e) {
                    const t = B(e) ?? {},
                      a = Object.values(t).every((e) => "0x0" === e || "0x00" === e),
                      n = 0 === U(e);
                    return a && n;
                  }),
                  (a.getAllEnabledNetworks = function (e) {
                    const t = Te(e),
                      a = Se(e);
                    return ne(e) ? a : t;
                  }),
                  (a.getAllNetworks = Se),
                  (a.getAllTokens = function (e) {
                    return e.metamask.allTokens;
                  }),
                  (a.getAppIsLoading = function (e) {
                    return e.appState.isLoading;
                  }),
                  (a.getBlockExplorerLinkText = function (e, t = !1) {
                    const a = Ie(e),
                      n = le(e);
                    let r = { firstPart: "addBlockExplorer", secondPart: "" };
                    n.blockExplorerUrl
                      ? (r = t
                          ? { firstPart: "blockExplorerView", secondPart: (0, E.getURLHostName)(n.blockExplorerUrl) }
                          : { firstPart: "viewinExplorer", secondPart: "blockExplorerAccountAction" })
                      : !1 === a &&
                        (r = t
                          ? { firstPart: "etherscanViewOn", secondPart: "" }
                          : { firstPart: "viewOnEtherscan", secondPart: "blockExplorerAccountAction" });
                    return r;
                  }),
                  (a.getCurrentAccountWithSendEtherInfo = X),
                  (a.getCurrentChainId = P),
                  (a.getCurrentCurrency = function (e) {
                    return e.metamask.currentCurrency;
                  }),
                  (a.getCurrentEthBalance = Z),
                  (a.getCurrentKeyring = R),
                  (a.getCurrentNetwork = function (e) {
                    const t = Se(e),
                      a = (0, v.getProviderConfig)(e),
                      n = "rpc" === a.type ? (e) => e.id === a.id : (e) => e.id === a.type;
                    return t.find(n);
                  }),
                  (a.getCurrentQRHardwareState = function (e) {
                    const { qrHardware: t } = e.metamask;
                    return t || {};
                  }),
                  (a.getCustomNonceValue = function (e) {
                    return String(e.metamask.customNonceValue);
                  }),
                  (a.getCustomTokenAmount = function (e) {
                    return e.appState.customTokenAmount;
                  }),
                  (a.getDetectedTokensInCurrentNetwork = function (e) {
                    var t;
                    const a = P(e),
                      n = F(e);
                    return null === (t = e.metamask.allDetectedTokens) || void 0 === t || null === (t = t[a]) || void 0 === t
                      ? void 0
                      : t[n];
                  }),
                  (a.getDisabledRpcMethodPreferences = function (e) {
                    return e.metamask.disabledRpcMethodPreferences;
                  }),
                  (a.getEnabledSnaps = void 0),
                  (a.getEnsResolutionByAddress = function (e, t) {
                    if (e.metamask.ensResolutionsByAddress[t]) return e.metamask.ensResolutionsByAddress[t];
                    const a = Q(e, t) || Object.values(e.metamask.identities).find((e) => (0, b.isEqualCaseInsensitive)(e.address, t));
                    return (null == a ? void 0 : a.name) || "";
                  }),
                  (a.getEthereumAddressNames = function (e) {
                    var t;
                    return (null === (t = e.metamask.names) || void 0 === t ? void 0 : t[l.NameType.ETHEREUM_ADDRESS]) || {};
                  }),
                  (a.getFeatureFlags = function (e) {
                    return e.metamask.featureFlags;
                  }),
                  (a.getFullTxData = void 0),
                  (a.getGasIsLoading = function (e) {
                    return e.appState.gasIsLoading;
                  }),
                  (a.getHardwareWalletType = function (e) {
                    const t = R(e);
                    return M(e) ? t.type : undefined;
                  }),
                  (a.getInfuraBlocked = function (e) {
                    return e.metamask.networksMetadata[x(e)].status === u.NetworkStatus.Blocked;
                  }),
                  (a.getInsightSnaps = void 0),
                  (a.getIpfsGateway = function (e) {
                    return e.metamask.ipfsGateway;
                  }),
                  (a.getIsAddSnapAccountEnabled = function (e) {
                    return e.metamask.addSnapAccountEnabled;
                  }),
                  (a.getIsBase = ye),
                  (a.getIsBridgeChain = function (e) {
                    const t = P(e);
                    return g.ALLOWED_BRIDGE_CHAIN_IDS.includes(t);
                  }),
                  (a.getIsBuyableChain = function (e) {
                    const t = P(e);
                    return Object.keys(u.BUYABLE_CHAINS_MAP).includes(t);
                  }),
                  (a.getIsCustomNetwork = Ie),
                  (a.getIsDynamicTokenListAvailable = we),
                  (a.getIsLineaMainnet = ee),
                  (a.getIsMainnet = J),
                  (a.getIsMultiLayerFeeNetwork = function (e) {
                    return Ce(e);
                  }),
                  (a.getIsNetworkUsed = function (e) {
                    const t = P(e),
                      { usedNetworks: a } = e.metamask;
                    return Boolean(a[t]);
                  }),
                  (a.getIsNonStandardEthChain = function (e) {
                    return !(J(e) || te(e));
                  }),
                  (a.getIsOpStack = Ce),
                  (a.getIsOpbnb = be),
                  (a.getIsOptimism = ve),
                  (a.getIsSecurityAlertsEnabled = function (e) {
                    return e.metamask.securityAlertsEnabled;
                  }),
                  (a.getIsSwapsChain = function (e) {
                    const t = P(e);
                    return f.ALLOWED_PROD_SWAPS_CHAIN_IDS.includes(t);
                  }),
                  (a.getIsTestnet = te),
                  (a.getIsTokenDetectionInactiveOnMainnet = ke),
                  (a.getIsTokenDetectionSupported = function (e) {
                    const t = ge(e),
                      a = we(e);
                    return t && a;
                  }),
                  (a.getIsTransactionSecurityCheckEnabled = function (e) {
                    return e.metamask.transactionSecurityCheckEnabled;
                  }),
                  (a.getIstokenDetectionInactiveOnNonMainnetSupportedNetwork = function (e) {
                    const t = ge(e),
                      a = J(e);
                    return we(e) && !t && !a;
                  }),
                  (a.getKeyringSnapAccounts = function (e) {
                    const t = q(e);
                    return Object.values(t).filter((t) => "Snap Keyring" === (0, v.findKeyringForAddress)(e, t.address).type);
                  }),
                  (a.getKeyringSnapRemovalResult = function (e) {
                    return e.appState.keyringRemovalSnapModal;
                  }),
                  (a.getKnownMethodData = function (e, t) {
                    if (!t) return null;
                    const a = (0, i.addHexPrefix)(t).slice(0, 10),
                      { knownMethodData: n, use4ByteResolution: r } = e.metamask;
                    return r && (null == n ? void 0 : n[a]);
                  }),
                  (a.getMemoizedMetadataContractName = a.getMemoizedMetaMaskIdentities = a.getMemoizedAddressBook = void 0),
                  (a.getMetaMaskAccountBalances = G),
                  (a.getMetaMaskAccountsOrdered = a.getMetaMaskAccountsConnected = a.getMetaMaskAccounts = void 0),
                  (a.getMetaMaskCachedBalances = B),
                  (a.getMetaMaskIdentities = q),
                  (a.getMetaMaskKeyrings = W),
                  (a.getMetaMetricsId = function (e) {
                    const { metaMetricsId: t } = e.metamask;
                    return t;
                  }),
                  (a.getMetadataContractName = function (e, t) {
                    const a = Ee(e),
                      n = Object.values(a).find((e) => (0, b.isEqualCaseInsensitive)(e.address, t));
                    return n && "" !== n.name ? n.name : "";
                  }),
                  (a.getNameSources = function (e) {
                    return e.metamask.nameSources || {};
                  }),
                  (a.getNames = function (e) {
                    return e.metamask.names || {};
                  }),
                  (a.getNativeCurrencyImage = function (e) {
                    var t;
                    const a = null === (t = (0, v.getNativeCurrency)(e)) || void 0 === t ? void 0 : t.toUpperCase();
                    return u.NATIVE_CURRENCY_TOKEN_IMAGE_MAP[a];
                  }),
                  (a.getNetworkConfigurations = _e),
                  (a.getNetworkIdentifier = function (e) {
                    const { type: t, nickname: a, rpcUrl: n } = (0, v.getProviderConfig)(e);
                    return a || n || t;
                  }),
                  (a.getNetworksTabSelectedNetworkConfigurationId = function (e) {
                    return e.appState.selectedNetworkConfigurationId;
                  }),
                  (a.getNewNetworkAdded = function (e) {
                    return e.appState.newNetworkAddedName;
                  }),
                  (a.getNewNftAddedMessage = function (e) {
                    return e.appState.newNftAddedMessage;
                  }),
                  (a.getNewTokensImported = function (e) {
                    return e.appState.newTokensImported;
                  }),
                  (a.getNextSuggestedNonce = function (e) {
                    return Number(e.metamask.nextNonce);
                  }),
                  (a.getNonTestNetworks = Te),
                  (a.getNotifications = me),
                  (a.getNotifySnaps = void 0),
                  (a.getNumberOfTokens = U),
                  (a.getOnboardedInThisUISession = function (e) {
                    return e.appState.onboardedInThisUISession;
                  }),
                  (a.getOpenSeaEnabled = function (e) {
                    return Boolean(e.metamask.openSeaEnabled);
                  }),
                  (a.getOriginOfCurrentTab = function (e) {
                    return e.activeTab.origin;
                  }),
                  (a.getPreferences = ae),
                  (a.getRemoveNftMessage = function (e) {
                    return e.appState.removeNftMessage;
                  }),
                  (a.getRpcPrefsForCurrentProvider = le),
                  (a.getSelectedAccount = $),
                  (a.getSelectedAccountCachedBalance = V),
                  (a.getSelectedAddress = F),
                  (a.getSelectedIdentity = j),
                  (a.getSelectedNetworkClientId = x),
                  (a.getShouldHideZeroBalanceTokens = function (e) {
                    const { hideZeroBalanceTokens: t } = ae(e);
                    return t;
                  }),
                  (a.getShouldShowFiat = function (e) {
                    const t = J(e),
                      a = ee(e),
                      n = Ie(e),
                      r = (0, v.getConversionRate)(e),
                      o = Ae(e),
                      { showFiatInTestnets: s } = ae(e);
                    return Boolean((t || a || n || s) && o && r);
                  }),
                  (a.getShouldShowSeedPhraseReminder = function (e) {
                    const { tokens: t, seedPhraseBackedUp: a, dismissSeedBackUpReminder: n } = e.metamask,
                      r = Z(e) ?? 0;
                    return !1 === a && (parseInt(r, 16) > 0 || t.length > 0) && !1 === n;
                  }),
                  (a.getShowBetaHeader = function (e) {
                    return e.metamask.showBetaHeader;
                  }),
                  (a.getShowOutdatedBrowserWarning = function (e) {
                    const { outdatedBrowserWarningLastShown: t } = e.metamask;
                    if (!t) return !0;
                    return new Date().getTime() - t >= 2 * T.DAY;
                  }),
                  (a.getShowProductTour = function (e) {
                    return e.metamask.showProductTour;
                  }),
                  (a.getShowRecoveryPhraseReminder = function (e) {
                    const { recoveryPhraseReminderLastShown: t, recoveryPhraseReminderHasBeenShown: a } = e.metamask,
                      n = new Date().getTime(),
                      r = a ? 90 * T.DAY : 2 * T.DAY;
                    return n - t >= r;
                  }),
                  (a.getShowTermsOfUse = function (e) {
                    const { termsOfUseLastAgreed: t } = e.metamask;
                    if (!t) return !0;
                    return new Date(t).getTime() < new Date(S.TERMS_OF_USE_LAST_UPDATED).getTime();
                  }),
                  (a.getShowTestNetworks = ne),
                  (a.getShowWhatsNewPopup = function (e) {
                    return e.appState.showWhatsNewPopup;
                  }),
                  (a.getSnap = void 0),
                  (a.getSnapRegistry = function (e) {
                    const { snapRegistryList: t } = e.metamask;
                    return t;
                  }),
                  (a.getSnapRegistryData = function (e, t) {
                    const a = e.metamask.database.verifiedSnaps;
                    return a ? a[t] : null;
                  }),
                  (a.getSnaps = de),
                  (a.getSnapsInstallPrivacyWarningShown = function (e) {
                    const { snapsInstallPrivacyWarningShown: t } = e.metamask;
                    if (t === undefined || null === t) return !1;
                    return t;
                  }),
                  (a.getSnapsList = function (e) {
                    const t = de(e);
                    return Object.entries(t).map(([t, a]) => {
                      const n = se(e, null == a ? void 0 : a.id);
                      return { key: t, id: a.id, packageName: (0, E.removeSnapIdPrefix)(a.id), name: (0, E.getSnapName)(a.id, n) };
                    });
                  }),
                  (a.getSortedAnnouncementsToShow = function (e) {
                    const t = Object.values(e.metamask.announcements),
                      a = (function (e) {
                        const t = R(e),
                          a = (null == t ? void 0 : t.type) === d.KeyringType.ledger,
                          n = window.navigator.hid !== undefined,
                          r = (0, v.getLedgerTransportType)(e) === c.LedgerTransportTypes.live,
                          o = window.navigator.userAgent.includes("Firefox");
                        return {
                          1: !1,
                          2: !1,
                          3: !1,
                          4: !1,
                          5: !1,
                          6: !1,
                          7: !1,
                          8: n && a && r,
                          9: !1,
                          10: !1,
                          11: !1,
                          12: !1,
                          13: !1,
                          14: !1,
                          15: !1,
                          16: !1,
                          17: !1,
                          18: !1,
                          19: !1,
                          20: a && o,
                          21: !1,
                          22: !1,
                          23: !0,
                          24: !0 === e.metamask.hadAdvancedGasFeesSetPriorToMigration92_3,
                          [I.NOTIFICATION_DROP_LEDGER_FIREFOX]: a && o,
                          [I.NOTIFICATION_OPEN_BETA_SNAPS]: !0,
                          [I.NOTIFICATION_BUY_SELL_BUTTON]: !0
                        };
                      })(e),
                      n = t.filter((e) => !e.isShown && a[e.id]);
                    return n.sort((e, t) => new Date(t.date) - new Date(e.date));
                  }),
                  (a.getSubjectMetadata = re),
                  (a.getSuggestedNfts = function (e) {
                    var t;
                    return (
                      (null === (t = z(e)) || void 0 === t
                        ? void 0
                        : t.filter(({ requestData: e, type: t }) => {
                            var a;
                            return (
                              t === r.ApprovalType.WatchAsset &&
                              (null == e || null === (a = e.asset) || void 0 === a ? void 0 : a.tokenId) !== undefined
                            );
                          })) || []
                    );
                  }),
                  (a.getSuggestedTokens = function (e) {
                    var t;
                    return (
                      (null === (t = z(e)) || void 0 === t
                        ? void 0
                        : t.filter(({ type: e, requestData: t }) => {
                            var a;
                            return (
                              e === r.ApprovalType.WatchAsset &&
                              (null == t || null === (a = t.asset) || void 0 === a ? void 0 : a.tokenId) === undefined
                            );
                          })) || []
                    );
                  }),
                  (a.getSwapsDefaultToken = function (e) {
                    const t = $(e),
                      a = null == t ? void 0 : t.balance,
                      n = P(e);
                    return {
                      ...f.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[n],
                      balance: (0, w.hexToDecimal)(a),
                      string: (0, w.getValueFromWeiHex)({ value: a, numberOfDecimals: 4, toDenomination: "ETH" })
                    };
                  }),
                  (a.getTargetAccount = function (e, t) {
                    return L(e)[t];
                  }),
                  (a.getTargetAccountWithSendEtherInfo = function (e, t) {
                    const a = Y(e);
                    return (0, E.getAccountByAddress)(a, t);
                  }),
                  (a.getTargetSubjectMetadata = se),
                  (a.getTestNetworkBackgroundColor = function (e) {
                    const t = e.metamask.providerConfig.ticker;
                    switch (!0) {
                      case null == t ? void 0 : t.includes(u.GOERLI_DISPLAY_NAME):
                        return k.BackgroundColor.goerli;
                      case null == t ? void 0 : t.includes(u.SEPOLIA_DISPLAY_NAME):
                        return k.BackgroundColor.sepolia;
                      default:
                        return undefined;
                    }
                  }),
                  (a.getTestNetworks = he),
                  (a.getTheme = function (e) {
                    return e.metamask.theme;
                  }),
                  (a.getTokenExchangeRates = a.getTokenDetectionSupportNetworkByChainId = void 0),
                  (a.getTokenList = Ee),
                  (a.getTotalUnapprovedCount = function (e) {
                    return e.metamask.pendingApprovalCount ?? 0;
                  }),
                  (a.getTotalUnapprovedMessagesCount = function (e) {
                    const {
                      unapprovedMsgCount: t = 0,
                      unapprovedPersonalMsgCount: a = 0,
                      unapprovedDecryptMsgCount: n = 0,
                      unapprovedEncryptionPublicKeyMsgCount: r = 0,
                      unapprovedTypedMessagesCount: o = 0
                    } = e.metamask;
                    return t + a + n + r + o;
                  }),
                  (a.getTotalUnapprovedSignatureRequestCount = function (e) {
                    const {
                      unapprovedMsgCount: t = 0,
                      unapprovedPersonalMsgCount: a = 0,
                      unapprovedTypedMessagesCount: n = 0
                    } = e.metamask;
                    return t + a + n;
                  }),
                  (a.getTxData = a.getTransaction = void 0),
                  (a.getUSDConversionRate = function (e) {
                    return e.metamask.usdConversionRate;
                  }),
                  (a.getUnapprovedConfirmations = z),
                  (a.getUnapprovedTemplatedConfirmations = function (e) {
                    return z(e).filter((e) => _.TEMPLATED_CONFIRMATION_APPROVAL_TYPES.includes(e.type));
                  }),
                  (a.getUnapprovedTransaction = void 0),
                  (a.getUnapprovedTxCount = function (e) {
                    const t = (0, A.getUnapprovedTransactions)(e);
                    return Object.keys(t).length;
                  }),
                  (a.getUnreadNotifications = fe),
                  (a.getUnreadNotificationsCount = void 0),
                  (a.getUseBlockie = function (e) {
                    return Boolean(e.metamask.useBlockie);
                  }),
                  (a.getUseCurrencyRateCheck = Ae),
                  (a.getUseNftDetection = function (e) {
                    return Boolean(e.metamask.useNftDetection);
                  }),
                  (a.getUseNonceField = function (e) {
                    return Boolean(e.metamask.useNonceField);
                  }),
                  (a.getUseTokenDetection = ge),
                  (a.getWeb3ShimUsageStateForOrigin = function (e, t) {
                    return e.metamask.web3ShimUsageOrigins[t];
                  }),
                  (a.getsnapsAddSnapAccountModalDismissed = function (e) {
                    const { snapsAddSnapAccountModalDismissed: t } = e.metamask;
                    return t;
                  }),
                  (a.hasUnsignedQRHardwareMessage = function (e) {
                    const { type: t, msgParams: a } = e.confirmTransaction.txData;
                    if (!t || !a) return !1;
                    const { from: n } = a,
                      { keyrings: r } = e.metamask,
                      o = r.find((e) => e.type === d.KeyringType.qr);
                    if (!o) return !1;
                    switch (t) {
                      case p.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA:
                      case p.MESSAGE_TYPE.ETH_SIGN:
                      case p.MESSAGE_TYPE.PERSONAL_SIGN:
                        return Boolean(o.accounts.find((e) => e.toLowerCase() === n.toLowerCase()));
                      default:
                        return !1;
                    }
                  }),
                  (a.hasUnsignedQRHardwareTransaction = function (e) {
                    const { txParams: t } = e.confirmTransaction.txData;
                    if (!t) return !1;
                    const { from: a } = t,
                      { keyrings: n } = e.metamask,
                      r = n.find((e) => e.type === d.KeyringType.qr);
                    if (!r) return !1;
                    return Boolean(r.accounts.find((e) => e.toLowerCase() === a.toLowerCase()));
                  }),
                  (a.isBalanceCached = function (e) {
                    var t;
                    const a = null === (t = G(e)[F(e)]) || void 0 === t ? void 0 : t.balance,
                      n = V(e);
                    return Boolean(!a && n);
                  }),
                  (a.isCurrentProviderCustom = function (e) {
                    const t = (0, v.getProviderConfig)(e);
                    return t.type === u.NETWORK_TYPES.RPC && !Object.values(u.CHAIN_IDS).includes(t.chainId);
                  }),
                  (a.isHardwareWallet = M),
                  (a.isNetworkLoading = function (e) {
                    const t = x(e);
                    return t && e.metamask.networksMetadata[t].status !== u.NetworkStatus.Available;
                  }),
                  (a.useSafeChainsListValidationSelector = void 0);
                var n = e("@metamask/permission-controller"),
                  r = e("@metamask/controller-utils"),
                  o = e("lodash"),
                  s = e("reselect"),
                  l = e("@metamask/name-controller"),
                  i = e("../../app/scripts/lib/util"),
                  u = e("../../shared/constants/network"),
                  c = e("../../shared/constants/hardware-wallets"),
                  d = e("../../shared/constants/keyring"),
                  p = e("../../shared/constants/app"),
                  m = e("../../shared/constants/labels"),
                  f = e("../../shared/constants/swaps"),
                  g = e("../../shared/constants/bridge"),
                  E = e("../helpers/utils/util"),
                  _ = e("../pages/confirmation/templates"),
                  h = e("../../shared/constants/tokens"),
                  T = e("../../shared/constants/time"),
                  S = e("../../shared/constants/terms"),
                  v = e("../ducks/metamask/metamask"),
                  y = e("../ducks/app/app"),
                  b = e("../../shared/modules/string-utils"),
                  C = e("../../shared/constants/transaction"),
                  w = e("../../shared/modules/conversion.utils"),
                  k = e("../helpers/constants/design-system"),
                  I = e("../../shared/notifications"),
                  A = e("./transactions"),
                  O = e("./permissions"),
                  N = e("./util");
                function x(e) {
                  return e.metamask.selectedNetworkClientId;
                }
                function P(e) {
                  const { chainId: t } = (0, v.getProviderConfig)(e);
                  return t;
                }
                function R(e) {
                  const t = j(e);
                  if (!t) return null;
                  return (0, v.findKeyringForAddress)(e, t.address);
                }
                function M(e) {
                  var t;
                  const a = R(e);
                  return Boolean(null == a || null === (t = a.type) || void 0 === t ? void 0 : t.includes("Hardware"));
                }
                function D(e) {
                  if (!e) return "";
                  const { type: t } = e;
                  switch (t) {
                    case d.KeyringType.trezor:
                    case d.KeyringType.ledger:
                    case d.KeyringType.lattice:
                    case d.KeyringType.qr:
                      return "hardware";
                    case d.KeyringType.imported:
                      return "imported";
                    default:
                      return "default";
                  }
                }
                const L = (a.getMetaMaskAccounts = (0, s.createSelector)(q, G, B, (e, t, a) =>
                  Object.keys(e).reduce((e, n) => {
                    let r = {};
                    return (
                      t[n] && (r = { ...r, ...t[n] }),
                      (null !== r.balance && r.balance !== undefined) || (r = { ...r, balance: a && a[n] }),
                      { ...e, [n]: r }
                    );
                  }, {})
                ));
                function F(e) {
                  return e.metamask.selectedAddress;
                }
                function j(e) {
                  const t = F(e),
                    { identities: a } = e.metamask;
                  return a[t];
                }
                function U(e) {
                  const { tokens: t } = e.metamask;
                  return t ? t.length : 0;
                }
                function W(e) {
                  return e.metamask.keyrings;
                }
                function q(e) {
                  return e.metamask.identities;
                }
                function G(e) {
                  return e.metamask.accounts;
                }
                function B(e) {
                  const t = P(e);
                  return e.metamask.cachedBalances[t];
                }
                const H = (a.getMetaMaskAccountsOrdered = (0, s.createSelector)(W, q, L, (e, t, a) =>
                  e
                    .reduce((e, t) => e.concat(t.accounts), [])
                    .filter((e) => Boolean(t[e]))
                    .map((e) => ({ ...t[e], ...a[e] }))
                ));
                a.getMetaMaskAccountsConnected = (0, s.createSelector)(H, (e) => e.map(({ address: e }) => e.toLowerCase()));
                function V(e) {
                  const t = B(e),
                    a = F(e);
                  return null == t ? void 0 : t[a];
                }
                function $(e) {
                  return L(e)[F(e)];
                }
                function K(e) {
                  const t = P(e);
                  return e.metamask.addressBook[t] ? Object.values(e.metamask.addressBook[t]) : [];
                }
                function Q(e, t) {
                  return K(e).find((e) => (0, b.isEqualCaseInsensitive)(e.address, t));
                }
                function Y(e) {
                  const t = L(e),
                    a = q(e);
                  return Object.entries(a).map(([e, a]) => ({ ...a, ...t[e] }));
                }
                function X(e) {
                  const t = F(e),
                    a = Y(e);
                  return (0, E.getAccountByAddress)(a, t);
                }
                function Z(e) {
                  var t;
                  return null === (t = X(e)) || void 0 === t ? void 0 : t.balance;
                }
                function z(e) {
                  const { pendingApprovals: t = {} } = e.metamask;
                  return Object.values(t);
                }
                function J(e) {
                  return P(e) === u.CHAIN_IDS.MAINNET;
                }
                function ee(e) {
                  return P(e) === u.CHAIN_IDS.LINEA_MAINNET;
                }
                function te(e) {
                  const t = P(e);
                  return u.TEST_CHAINS.includes(t);
                }
                function ae({ metamask: e }) {
                  return e.preferences;
                }
                function ne(e) {
                  const { showTestNetworks: t } = ae(e);
                  return Boolean(t);
                }
                function re(e) {
                  return e.metamask.subjectMetadata;
                }
                a.getTokenExchangeRates = (e) => e.metamask.contractExchangeRates;
                const oe = (0, o.memoize)((e) => `data:image/svg+xml;utf8,${encodeURIComponent(e)}`);
                function se(e, t) {
                  const a = re(e)[t];
                  if ((null == a ? void 0 : a.subjectType) === n.SubjectType.Snap) {
                    const { svgIcon: e, ...t } = a;
                    return { ...t, iconUrl: e ? oe(e) : null };
                  }
                  return a;
                }
                function le(e) {
                  const { rpcPrefs: t } = (0, v.getProviderConfig)(e);
                  return t || {};
                }
                (a.getMemoizedMetaMaskIdentities = (0, N.createDeepEqualSelector)(q, (e) => e)),
                  (a.getMemoizedAddressBook = (0, N.createDeepEqualSelector)(K, (e) => e)),
                  (a.getMemoizedMetadataContractName = (0, N.createDeepEqualSelector)(
                    Ee,
                    (e, t) => t,
                    (e, t) => {
                      const a = Object.values(e).find((e) => (0, b.isEqualCaseInsensitive)(e.address, t));
                      return a && "" !== a.name ? a.name : "";
                    }
                  ));
                const ie = (e) => e.confirmTransaction.txData;
                a.getTxData = ie;
                const ue = (a.getUnapprovedTransaction = (0, N.createDeepEqualSelector)(
                    (e) => (0, A.getUnapprovedTransactions)(e),
                    (e, t) => t,
                    (e, t) => Object.values(e).find(({ id: e }) => e === t) || {}
                  )),
                  ce = (a.getTransaction = (0, N.createDeepEqualSelector)(
                    (e) => (0, A.getCurrentNetworkTransactions)(e),
                    (e, t) => t,
                    (e, t) => Object.values(e).find(({ id: e }) => e === t) || {}
                  ));
                a.getFullTxData = (0, N.createDeepEqualSelector)(
                  ie,
                  (e, t, a) => (a === C.TransactionStatus.unapproved ? ue(e, t) : ce(e, t)),
                  (e, t, a, n) => n,
                  (e, t, a) => {
                    let n = { ...e, ...t };
                    return (
                      t && t.simulationFails && (n.simulationFails = { ...t.simulationFails }),
                      a && (n = { ...n, txParams: { ...n.txParams, data: a } }),
                      n
                    );
                  }
                );
                function de(e) {
                  return e.metamask.snaps;
                }
                a.getSnap = (0, N.createDeepEqualSelector)(
                  de,
                  (e, t) => t,
                  (e, t) => e[t]
                );
                const pe = (a.getEnabledSnaps = (0, N.createDeepEqualSelector)(de, (e) =>
                  Object.values(e).reduce((e, t) => (t.enabled && (e[t.id] = t), e), {})
                ));
                (a.getInsightSnaps = (0, N.createDeepEqualSelector)(pe, O.getPermissionSubjects, (e, t) =>
                  Object.values(e).filter(({ id: e }) => {
                    var a;
                    return null === (a = t[e]) || void 0 === a ? void 0 : a.permissions["endowment:transaction-insight"];
                  })
                )),
                  (a.getNotifySnaps = (0, N.createDeepEqualSelector)(pe, O.getPermissionSubjects, (e, t) =>
                    Object.values(e).filter(({ id: e }) => {
                      var a;
                      return null === (a = t[e]) || void 0 === a ? void 0 : a.permissions.snap_notify;
                    })
                  ));
                function me(e) {
                  return Object.values(e.metamask.notifications).sort((e, t) => new Date(t.createdDate) - new Date(e.createdDate));
                }
                function fe(e) {
                  return me(e).filter((e) => null === e.readDate);
                }
                a.getUnreadNotificationsCount = (0, s.createSelector)(fe, (e) => e.length);
                function ge(e) {
                  return Boolean(e.metamask.useTokenDetection);
                }
                function Ee(e) {
                  return ke(e) ? h.STATIC_MAINNET_TOKEN_LIST : e.metamask.tokenList;
                }
                function _e(e) {
                  return e.metamask.networkConfigurations;
                }
                function he(e) {
                  const t = _e(e) || {};
                  return [
                    {
                      chainId: u.CHAIN_IDS.GOERLI,
                      nickname: u.GOERLI_DISPLAY_NAME,
                      rpcUrl: u.CHAIN_ID_TO_RPC_URL_MAP[u.CHAIN_IDS.GOERLI],
                      providerType: u.NETWORK_TYPES.GOERLI,
                      ticker: u.TEST_NETWORK_TICKER_MAP[u.NETWORK_TYPES.GOERLI],
                      id: u.NETWORK_TYPES.GOERLI,
                      removable: !1
                    },
                    {
                      chainId: u.CHAIN_IDS.SEPOLIA,
                      nickname: u.SEPOLIA_DISPLAY_NAME,
                      rpcUrl: u.CHAIN_ID_TO_RPC_URL_MAP[u.CHAIN_IDS.SEPOLIA],
                      providerType: u.NETWORK_TYPES.SEPOLIA,
                      ticker: u.TEST_NETWORK_TICKER_MAP[u.NETWORK_TYPES.SEPOLIA],
                      id: u.NETWORK_TYPES.SEPOLIA,
                      removable: !1
                    },
                    {
                      chainId: u.CHAIN_IDS.LINEA_GOERLI,
                      nickname: u.LINEA_GOERLI_DISPLAY_NAME,
                      rpcUrl: u.CHAIN_ID_TO_RPC_URL_MAP[u.CHAIN_IDS.LINEA_GOERLI],
                      rpcPrefs: { imageUrl: u.LINEA_GOERLI_TOKEN_IMAGE_URL },
                      providerType: u.NETWORK_TYPES.LINEA_GOERLI,
                      ticker: u.TEST_NETWORK_TICKER_MAP[u.NETWORK_TYPES.LINEA_GOERLI],
                      id: u.NETWORK_TYPES.LINEA_GOERLI,
                      removable: !1
                    },
                    ...Object.values(t)
                      .filter(({ chainId: e }) => e === u.CHAIN_IDS.LOCALHOST)
                      .map((e) => ({ ...e, removable: !0 }))
                  ];
                }
                function Te(e) {
                  const t = _e(e) || {};
                  return [
                    {
                      chainId: u.CHAIN_IDS.MAINNET,
                      nickname: u.MAINNET_DISPLAY_NAME,
                      rpcUrl: u.CHAIN_ID_TO_RPC_URL_MAP[u.CHAIN_IDS.MAINNET],
                      rpcPrefs: { imageUrl: u.ETH_TOKEN_IMAGE_URL },
                      providerType: u.NETWORK_TYPES.MAINNET,
                      ticker: u.CURRENCY_SYMBOLS.ETH,
                      id: u.NETWORK_TYPES.MAINNET,
                      removable: !1
                    },
                    {
                      chainId: u.CHAIN_IDS.LINEA_MAINNET,
                      nickname: u.LINEA_MAINNET_DISPLAY_NAME,
                      rpcUrl: u.CHAIN_ID_TO_RPC_URL_MAP[u.CHAIN_IDS.LINEA_MAINNET],
                      rpcPrefs: { imageUrl: u.LINEA_MAINNET_TOKEN_IMAGE_URL },
                      providerType: u.NETWORK_TYPES.LINEA_MAINNET,
                      ticker: u.TEST_NETWORK_TICKER_MAP[u.NETWORK_TYPES.LINEA_MAINNET],
                      id: u.NETWORK_TYPES.LINEA_MAINNET,
                      removable: !1
                    },
                    ...Object.values(t)
                      .filter(({ chainId: e }) => ![u.CHAIN_IDS.LOCALHOST].includes(e))
                      .map((e) => {
                        var t;
                        return {
                          ...e,
                          rpcPrefs: {
                            ...e.rpcPrefs,
                            imageUrl:
                              (null == e || null === (t = e.rpcPrefs) || void 0 === t ? void 0 : t.imageUrl) ??
                              u.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[e.chainId]
                          },
                          removable: !0
                        };
                      })
                  ];
                }
                function Se(e) {
                  return [...Te(e), ...he(e)];
                }
                function ve(e) {
                  return P(e) === u.CHAIN_IDS.OPTIMISM || P(e) === u.CHAIN_IDS.OPTIMISM_TESTNET;
                }
                function ye(e) {
                  return P(e) === u.CHAIN_IDS.BASE || P(e) === u.CHAIN_IDS.BASE_TESTNET;
                }
                function be(e) {
                  return P(e) === u.CHAIN_IDS.OPBNB || P(e) === u.CHAIN_IDS.OPBNB_TESTNET;
                }
                function Ce(e) {
                  return ve(e) || ye(e) || be(e);
                }
                function we(e) {
                  const t = P(e);
                  return [
                    u.CHAIN_IDS.MAINNET,
                    u.CHAIN_IDS.BSC,
                    u.CHAIN_IDS.POLYGON,
                    u.CHAIN_IDS.AVALANCHE,
                    u.CHAIN_IDS.LINEA_GOERLI,
                    u.CHAIN_IDS.LINEA_MAINNET,
                    u.CHAIN_IDS.AURORA
                  ].includes(t);
                }
                function ke(e) {
                  const t = J(e);
                  return !ge(e) && t;
                }
                function Ie(e) {
                  const t = P(e);
                  return !u.CHAIN_ID_TO_RPC_URL_MAP[t];
                }
                a.getTokenDetectionSupportNetworkByChainId = (e) => {
                  switch (P(e)) {
                    case u.CHAIN_IDS.MAINNET:
                      return u.MAINNET_DISPLAY_NAME;
                    case u.CHAIN_IDS.BSC:
                      return u.BSC_DISPLAY_NAME;
                    case u.CHAIN_IDS.POLYGON:
                      return u.POLYGON_DISPLAY_NAME;
                    case u.CHAIN_IDS.AVALANCHE:
                      return u.AVALANCHE_DISPLAY_NAME;
                    case u.CHAIN_IDS.LINEA_GOERLI:
                      return u.LINEA_GOERLI_DISPLAY_NAME;
                    case u.CHAIN_IDS.LINEA_MAINNET:
                      return u.LINEA_MAINNET_DISPLAY_NAME;
                    case u.CHAIN_IDS.AURORA:
                      return u.AURORA_DISPLAY_NAME;
                    default:
                      return "";
                  }
                };
                function Ae(e) {
                  return Boolean(e.metamask.useCurrencyRateCheck);
                }
                a.useSafeChainsListValidationSelector = (e) => e.metamask.useSafeChainsListValidation;
              };
            };
      },
      { package: "$root$", file: "ui/selectors/selectors.js" }
    ],
    [
      5962,
      {
        "../../shared/constants/transaction": 4770,
        "../../shared/modules/conversion.utils": 4784,
        "../ducks/metamask/metamask": 5529,
        "../helpers/constants/transactions": 5546,
        "../helpers/utils/tx-helper": 5577,
        "./approvals": 5954,
        "./selectors": 5961,
        "./util": 5963,
        "@metamask/controller-utils": 1124,
        reselect: 4514
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getUnapprovedTransactions = a.getCurrentNetworkTransactions = void 0),
                  (a.hasTransactionPendingApprovals = function (e) {
                    return N(e) || x.some((t) => (0, p.hasPendingApprovals)(e, t));
                  }),
                  (a.unapprovedTypedMessagesSelector =
                    a.unapprovedPersonalMsgsSelector =
                    a.unapprovedMsgsSelector =
                    a.unapprovedMessagesSelector =
                    a.unapprovedEncryptionPublicKeyMsgsSelector =
                    a.unapprovedDecryptMsgsSelector =
                    a.transactionsSelector =
                    a.transactionSubSelector =
                    a.submittedPendingTransactionsSelector =
                    a.smartTransactionsListSelector =
                    a.selectedAddressTxListSelector =
                    a.nonceSortedTransactionsSelector =
                    a.nonceSortedPendingTransactionsSelector =
                    a.nonceSortedCompletedTransactionsSelector =
                    a.incomingTxListSelector =
                      void 0);
                var n,
                  r = e("@metamask/controller-utils"),
                  o = e("reselect"),
                  s = e("../helpers/constants/transactions"),
                  l = (n = e("../helpers/utils/tx-helper")) && n.__esModule ? n : { default: n },
                  i = e("../../shared/constants/transaction"),
                  u = e("../../shared/modules/conversion.utils"),
                  c = e("../ducks/metamask/metamask"),
                  d = e("./selectors"),
                  p = e("./approvals"),
                  m = e("./util");
                const f = [i.TransactionType.cancel, i.TransactionType.retry],
                  g = (e) => e.metamask.unapprovedMsgs;
                a.unapprovedMsgsSelector = g;
                const E = (a.getCurrentNetworkTransactions = (0, m.createDeepEqualSelector)(
                    (e) => {
                      const { transactions: t } = e.metamask ?? {};
                      if (null == t || !t.length) return [];
                      const { chainId: a } = (0, c.getProviderConfig)(e);
                      return t.filter((e) => e.chainId === a);
                    },
                    (e) => e
                  )),
                  _ = (a.getUnapprovedTransactions = (0, m.createDeepEqualSelector)(
                    (e) =>
                      E(e)
                        .filter((e) => e.status === i.TransactionStatus.unapproved)
                        .reduce((e, t) => ((e[t.id] = t), e), {}),
                    (e) => e
                  )),
                  h = (a.incomingTxListSelector = (0, m.createDeepEqualSelector)(
                    (e) => {
                      const { incomingTransactionsPreferences: t } = e.metamask;
                      if (!t) return [];
                      const a = E(e),
                        n = (0, d.getSelectedAddress)(e);
                      return a.filter((e) => e.type === i.TransactionType.incoming && e.txParams.to === n);
                    },
                    (e) => e
                  )),
                  T = (e) => e.metamask.unapprovedPersonalMsgs;
                a.unapprovedPersonalMsgsSelector = T;
                const S = (e) => e.metamask.unapprovedDecryptMsgs;
                a.unapprovedDecryptMsgsSelector = S;
                const v = (e) => e.metamask.unapprovedEncryptionPublicKeyMsgs;
                a.unapprovedEncryptionPublicKeyMsgsSelector = v;
                const y = (e) => e.metamask.unapprovedTypedMessages;
                a.unapprovedTypedMessagesSelector = y;
                const b = (e) => {
                  var t;
                  return null === (t = e.metamask.smartTransactionsState) ||
                    void 0 === t ||
                    null === (t = t.smartTransactions) ||
                    void 0 === t ||
                    null === (t = t[(0, d.getCurrentChainId)(e)]) ||
                    void 0 === t
                    ? void 0
                    : t
                        .filter((e) => !e.confirmed)
                        .map((e) => {
                          var t;
                          return {
                            ...e,
                            transactionType: i.TransactionType.smart,
                            status:
                              null !== (t = e.status) && void 0 !== t && t.startsWith("cancelled")
                                ? i.SmartTransactionStatus.cancelled
                                : e.status
                          };
                        });
                };
                a.smartTransactionsListSelector = b;
                const C = (a.selectedAddressTxListSelector = (0, o.createSelector)(d.getSelectedAddress, E, b, (e, t = [], a = []) =>
                    t.filter(({ txParams: t }) => t.from === e).concat(a)
                  )),
                  w = (a.unapprovedMessagesSelector = (0, o.createSelector)(
                    g,
                    T,
                    S,
                    v,
                    y,
                    d.getCurrentChainId,
                    (e = {}, t = {}, a = {}, n = {}, r = {}, o) => (0, l.default)({}, e, t, a, n, r, o) || []
                  )),
                  k = (a.transactionSubSelector = (0, o.createSelector)(w, h, (e = [], t = []) => e.concat(t))),
                  I = (a.transactionsSelector = (0, o.createSelector)(k, C, (e = [], t = []) =>
                    t.concat(e).sort((e, t) => t.time - e.time)
                  )),
                  A = (e, t) => {
                    const { primaryTransaction: { time: a } = {} } = t;
                    let n = e.length;
                    for (let t = 0; t < e.length; t++) {
                      const r = e[t],
                        { primaryTransaction: { time: o } = {} } = r;
                      if (o > a) {
                        n = t;
                        break;
                      }
                    }
                    e.splice(n, 0, t);
                  },
                  O = (a.nonceSortedTransactionsSelector = (0, o.createSelector)(I, (e = []) => {
                    const t = [],
                      a = [],
                      n = [],
                      r = {};
                    e.forEach((e) => {
                      const { txParams: { nonce: o } = {}, status: l, type: c, time: d, txReceipt: p } = e;
                      if (void 0 === o || c === i.TransactionType.incoming) {
                        const n = {
                          transactions: [e],
                          initialTransaction: e,
                          primaryTransaction: e,
                          hasRetried: !1,
                          hasCancelled: !1,
                          nonce: o
                        };
                        c === i.TransactionType.incoming ? a.push(n) : A(t, n);
                      } else if (o in r) {
                        var m, g;
                        const t = r[o];
                        ((e, t) => {
                          const { time: a } = t;
                          let n = e.length;
                          for (let t = 0; t < e.length; t++)
                            if (e[t].time > a) {
                              n = t;
                              break;
                            }
                          e.splice(n, 0, t);
                        })(t.transactions, e);
                        const { primaryTransaction: { time: a = 0 } = {}, initialTransaction: { time: n = 0 } = {} } = t,
                          u = {
                            isOnChainFailure: "0x0" === (null == p ? void 0 : p.status),
                            isEphemeral: l === i.TransactionStatus.failed && "0x0" !== (null == p ? void 0 : p.status),
                            isRetryOrCancel: f.includes(c),
                            occurredAfterPrimary: d > a,
                            hasPriorityStatus: l in s.PRIORITY_STATUS_HASH,
                            isConfirmed: l === i.TransactionStatus.confirmed,
                            occurredBeforeInitial: d < n,
                            isValidRetry:
                              c === i.TransactionType.retry && (l in s.PRIORITY_STATUS_HASH || l === i.TransactionStatus.dropped),
                            isValidCancel:
                              c === i.TransactionType.cancel && (l in s.PRIORITY_STATUS_HASH || l === i.TransactionStatus.dropped)
                          };
                        (u.eligibleForInitial = !u.isRetryOrCancel && !u.isEphemeral),
                          (u.shouldBePrimary = u.isConfirmed || u.isOnChainFailure);
                        const E = {
                            isEphemeral:
                              t.primaryTransaction.status === i.TransactionStatus.failed &&
                              "0x0" !==
                                (null === (m = t.primaryTransaction) || void 0 === m || null === (m = m.txReceipt) || void 0 === m
                                  ? void 0
                                  : m.status)
                          },
                          _ = {
                            isEphemeral:
                              t.initialTransaction.status === i.TransactionStatus.failed &&
                              "0x0" !== (null === (g = t.initialTransaction.txReceipt) || void 0 === g ? void 0 : g.status)
                          };
                        (u.shouldBePrimary || E.isEphemeral || (u.occurredAfterPrimary && u.hasPriorityStatus)) &&
                          (t.primaryTransaction = e),
                          ((u.occurredBeforeInitial && u.eligibleForInitial) || (_.isEphemeral && u.eligibleForInitial)) &&
                            (t.initialTransaction = e),
                          u.isValidRetry && (t.hasRetried = !0),
                          u.isValidCancel && (t.hasCancelled = !0);
                      } else
                        (r[o] = {
                          nonce: o,
                          transactions: [e],
                          initialTransaction: e,
                          primaryTransaction: e,
                          hasRetried:
                            e.type === i.TransactionType.retry &&
                            (e.status in s.PRIORITY_STATUS_HASH || e.status === i.TransactionStatus.dropped),
                          hasCancelled:
                            e.type === i.TransactionType.cancel &&
                            (e.status in s.PRIORITY_STATUS_HASH || e.status === i.TransactionStatus.dropped)
                        }),
                          ((e, t) => {
                            let a = e.length;
                            for (let n = 0; n < e.length; n++) {
                              const r = e[n];
                              if (Number((0, u.hexToDecimal)(r)) > Number((0, u.hexToDecimal)(t))) {
                                a = n;
                                break;
                              }
                            }
                            e.splice(a, 0, t);
                          })(n, o);
                    });
                    const o = n.map((e) => r[e]);
                    return (
                      ((e, t) => {
                        t.forEach((t) => {
                          A(e, t);
                        });
                      })(o, a),
                      t.concat(o).map((e) => {
                        var t;
                        if (f.includes(null === (t = e.initialTransaction) || void 0 === t ? void 0 : t.type)) {
                          const t = e.transactions.find((e) => !f.includes(e.type));
                          if (t) return { ...e, initialTransaction: t };
                        }
                        return e;
                      })
                    );
                  })),
                  N =
                    ((a.nonceSortedPendingTransactionsSelector = (0, o.createSelector)(O, (e = []) =>
                      e.filter(({ primaryTransaction: e }) => e.status in s.PENDING_STATUS_HASH)
                    )),
                    (a.nonceSortedCompletedTransactionsSelector = (0, o.createSelector)(O, (e = []) =>
                      e.filter(({ primaryTransaction: e }) => !(e.status in s.PENDING_STATUS_HASH)).reverse()
                    )),
                    (a.submittedPendingTransactionsSelector = (0, o.createSelector)(I, (e = []) =>
                      e.filter((e) => e.status === i.TransactionStatus.submitted)
                    )),
                    (e) => {
                      const t = _(e),
                        a = (0, p.getApprovalRequestsByType)(e, r.ApprovalType.Transaction),
                        n = (0, d.getCurrentChainId)(e);
                      return a.filter(({ id: e }) => t[e] && t[e].chainId === n).length > 0;
                    }),
                  x = [
                    r.ApprovalType.EthDecrypt,
                    r.ApprovalType.EthGetEncryptionPublicKey,
                    r.ApprovalType.EthSign,
                    r.ApprovalType.EthSignTypedData,
                    r.ApprovalType.PersonalSign
                  ];
              };
            };
      },
      { package: "$root$", file: "ui/selectors/transactions.js" }
    ],
    [
      5963,
      { lodash: 4071, reselect: 4514 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.createDeepEqualSelector = void 0);
                var n = e("lodash"),
                  r = e("reselect");
                a.createDeepEqualSelector = (0, r.createSelectorCreator)(r.defaultMemoize, n.isEqual);
              };
            };
      },
      { package: "$root$", file: "ui/selectors/util.js" }
    ],
    [
      5964,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.UPDATE_TRANSACTION_PARAMS =
                    a.UPDATE_METAMASK_STATE =
                    a.UPDATE_CUSTOM_NONCE =
                    a.UNLOCK_SUCCEEDED =
                    a.UNLOCK_IN_PROGRESS =
                    a.UNLOCK_FAILED =
                    a.TRANSACTION_ERROR =
                    a.TOGGLE_NETWORK_MENU =
                    a.TOGGLE_GAS_LOADING_ANIMATION =
                    a.TOGGLE_CURRENCY_INPUT_SWITCH =
                    a.TOGGLE_ACCOUNT_MENU =
                    a.SHOW_SEND_TOKEN_PAGE =
                    a.SHOW_PRIVATE_KEY =
                    a.SHOW_LOADING =
                    a.SHOW_KEYRING_SNAP_REMOVAL_RESULT =
                    a.SHOW_IPFS_MODAL_OPEN =
                    a.SHOW_IPFS_MODAL_CLOSE =
                    a.SHOW_CONF_TX_PAGE =
                    a.SHOW_ACCOUNTS_PAGE =
                    a.SET_WEBHID_CONNECTED_STATUS =
                    a.SET_SMART_TRANSACTIONS_ERROR =
                    a.SET_SELECTED_NETWORK_CONFIGURATION_ID =
                    a.SET_REQUEST_ACCOUNT_TABS =
                    a.SET_REMOVE_NFT_MESSAGE =
                    a.SET_PENDING_TOKENS =
                    a.SET_PARTICIPATE_IN_METAMETRICS =
                    a.SET_OPEN_METAMASK_TAB_IDS =
                    a.SET_NEXT_NONCE =
                    a.SET_NEW_TOKENS_IMPORTED =
                    a.SET_NEW_NFT_ADDED_MESSAGE =
                    a.SET_NEW_NETWORK_ADDED =
                    a.SET_LEDGER_TRANSPORT_STATUS =
                    a.SET_HARDWARE_WALLET_DEFAULT_HD_PATH =
                    a.SET_FIRST_TIME_FLOW_TYPE =
                    a.SET_CUSTOM_TOKEN_AMOUNT =
                    a.SET_CURRENT_LOCALE =
                    a.SET_ACCOUNT_LABEL =
                    a.SET_ACCOUNT_DETAILS_ADDRESS =
                    a.SELECT_ACTION_MODAL_OPEN =
                    a.SELECT_ACTION_MODAL_CLOSE =
                    a.SELECTED_ADDRESS_CHANGED =
                    a.SELECTED_ACCOUNT_CHANGED =
                    a.QR_CODE_DETECTED =
                    a.ONBOARDED_IN_THIS_UI_SESSION =
                    a.NETWORK_DROPDOWN_OPEN =
                    a.NETWORK_DROPDOWN_CLOSE =
                    a.MODAL_OPEN =
                    a.MODAL_CLOSE =
                    a.LOCK_METAMASK =
                    a.LOADING_METHOD_DATA_STARTED =
                    a.LOADING_METHOD_DATA_FINISHED =
                    a.IMPORT_TOKENS_POPOVER_OPEN =
                    a.IMPORT_TOKENS_POPOVER_CLOSE =
                    a.IMPORT_NFTS_MODAL_OPEN =
                    a.IMPORT_NFTS_MODAL_CLOSE =
                    a.HIDE_WHATS_NEW_POPUP =
                    a.HIDE_WARNING =
                    a.HIDE_LOADING =
                    a.HIDE_KEYRING_SNAP_REMOVAL_RESULT =
                    a.GO_HOME =
                    a.GAS_FEE_ESTIMATES_UPDATED =
                    a.DISPLAY_WARNING =
                    a.DISMISS_SMART_TRANSACTIONS_ERROR_MESSAGE =
                    a.COMPLETE_ONBOARDING =
                    a.COMPLETED_TX =
                    a.CLOSE_WELCOME_SCREEN =
                    a.CLEAR_PENDING_TOKENS =
                    a.CLEAR_ACCOUNT_DETAILS =
                    a.CHAIN_CHANGED =
                    a.CAPTURE_SINGLE_EXCEPTION =
                    a.ALERT_OPEN =
                    a.ALERT_CLOSE =
                    a.ADDRESS_BOOK_UPDATED =
                    a.ACCOUNT_CHANGED =
                      void 0);
                (a.GO_HOME = "GO_HOME"),
                  (a.MODAL_OPEN = "UI_MODAL_OPEN"),
                  (a.MODAL_CLOSE = "UI_MODAL_CLOSE"),
                  (a.ALERT_OPEN = "UI_ALERT_OPEN"),
                  (a.ALERT_CLOSE = "UI_ALERT_CLOSE"),
                  (a.QR_CODE_DETECTED = "UI_QR_CODE_DETECTED"),
                  (a.NETWORK_DROPDOWN_OPEN = "UI_NETWORK_DROPDOWN_OPEN"),
                  (a.NETWORK_DROPDOWN_CLOSE = "UI_NETWORK_DROPDOWN_CLOSE"),
                  (a.IMPORT_NFTS_MODAL_OPEN = "UI_IMPORT_NFTS_MODAL_OPEN"),
                  (a.IMPORT_NFTS_MODAL_CLOSE = "UI_IMPORT_NFTS_MODAL_CLOSE"),
                  (a.SHOW_IPFS_MODAL_OPEN = "UI_IPFS_MODAL_OPEN"),
                  (a.SHOW_IPFS_MODAL_CLOSE = "UI_IPFS_MODAL_CLOSE"),
                  (a.IMPORT_TOKENS_POPOVER_OPEN = "UI_IMPORT_TOKENS_POPOVER_OPEN"),
                  (a.IMPORT_TOKENS_POPOVER_CLOSE = "UI_IMPORT_TOKENS_POPOVER_CLOSE"),
                  (a.SELECT_ACTION_MODAL_OPEN = "UI_SELECT_ACTION_MODAL_OPEN"),
                  (a.SELECT_ACTION_MODAL_CLOSE = "UI_SELECT_ACTION_MODAL_CLOSE"),
                  (a.UPDATE_METAMASK_STATE = "UPDATE_METAMASK_STATE"),
                  (a.SELECTED_ADDRESS_CHANGED = "SELECTED_ADDRESS_CHANGED"),
                  (a.SELECTED_ACCOUNT_CHANGED = "SELECTED_ACCOUNT_CHANGED"),
                  (a.ACCOUNT_CHANGED = "ACCOUNT_CHANGED"),
                  (a.CHAIN_CHANGED = "CHAIN_CHANGED"),
                  (a.ADDRESS_BOOK_UPDATED = "ADDRESS_BOOK_UPDATED"),
                  (a.GAS_FEE_ESTIMATES_UPDATED = "GAS_FEE_ESTIMATES_UPDATED"),
                  (a.CLOSE_WELCOME_SCREEN = "CLOSE_WELCOME_SCREEN"),
                  (a.UNLOCK_IN_PROGRESS = "UNLOCK_IN_PROGRESS"),
                  (a.UNLOCK_FAILED = "UNLOCK_FAILED"),
                  (a.UNLOCK_SUCCEEDED = "UNLOCK_SUCCEEDED"),
                  (a.LOCK_METAMASK = "LOCK_METAMASK"),
                  (a.DISPLAY_WARNING = "DISPLAY_WARNING"),
                  (a.HIDE_WARNING = "HIDE_WARNING"),
                  (a.CAPTURE_SINGLE_EXCEPTION = "CAPTURE_SINGLE_EXCEPTION"),
                  (a.SHOW_ACCOUNTS_PAGE = "SHOW_ACCOUNTS_PAGE"),
                  (a.SHOW_CONF_TX_PAGE = "SHOW_CONF_TX_PAGE"),
                  (a.SHOW_SEND_TOKEN_PAGE = "SHOW_SEND_TOKEN_PAGE"),
                  (a.SHOW_PRIVATE_KEY = "SHOW_PRIVATE_KEY"),
                  (a.SET_ACCOUNT_LABEL = "SET_ACCOUNT_LABEL"),
                  (a.CLEAR_ACCOUNT_DETAILS = "CLEAR_ACCOUNT_DETAILS"),
                  (a.SET_ACCOUNT_DETAILS_ADDRESS = "SET_ACCOUNT_DETAILS_ADDRESS"),
                  (a.COMPLETED_TX = "COMPLETED_TX"),
                  (a.TRANSACTION_ERROR = "TRANSACTION_ERROR"),
                  (a.UPDATE_TRANSACTION_PARAMS = "UPDATE_TRANSACTION_PARAMS"),
                  (a.SET_NEXT_NONCE = "SET_NEXT_NONCE"),
                  (a.SET_HARDWARE_WALLET_DEFAULT_HD_PATH = "SET_HARDWARE_WALLET_DEFAULT_HD_PATH"),
                  (a.SHOW_LOADING = "SHOW_LOADING_INDICATION"),
                  (a.HIDE_LOADING = "HIDE_LOADING_INDICATION"),
                  (a.TOGGLE_ACCOUNT_MENU = "TOGGLE_ACCOUNT_MENU"),
                  (a.TOGGLE_NETWORK_MENU = "TOGGLE_NETWORK_MENU"),
                  (a.UPDATE_CUSTOM_NONCE = "UPDATE_CUSTOM_NONCE"),
                  (a.SET_PARTICIPATE_IN_METAMETRICS = "SET_PARTICIPATE_IN_METAMETRICS"),
                  (a.SET_CURRENT_LOCALE = "SET_CURRENT_LOCALE"),
                  (a.COMPLETE_ONBOARDING = "COMPLETE_ONBOARDING"),
                  (a.ONBOARDED_IN_THIS_UI_SESSION = "ONBOARDED_IN_THIS_UI_SESSION"),
                  (a.SET_WEBHID_CONNECTED_STATUS = "SET_WEBHID_CONNECTED_STATUS"),
                  (a.SET_LEDGER_TRANSPORT_STATUS = "SET_LEDGER_TRANSPORT_STATUS"),
                  (a.SET_PENDING_TOKENS = "SET_PENDING_TOKENS"),
                  (a.CLEAR_PENDING_TOKENS = "CLEAR_PENDING_TOKENS"),
                  (a.SET_FIRST_TIME_FLOW_TYPE = "SET_FIRST_TIME_FLOW_TYPE"),
                  (a.SET_SELECTED_NETWORK_CONFIGURATION_ID = "SET_SELECTED_NETWORK_CONFIGURATION_ID"),
                  (a.SET_NEW_NETWORK_ADDED = "SET_NEW_NETWORK_ADDED"),
                  (a.SET_NEW_NFT_ADDED_MESSAGE = "SET_NEW_NFT_ADDED_MESSAGE"),
                  (a.SET_REMOVE_NFT_MESSAGE = "SET_REMOVE_NFT_MESSAGE"),
                  (a.LOADING_METHOD_DATA_STARTED = "LOADING_METHOD_DATA_STARTED"),
                  (a.LOADING_METHOD_DATA_FINISHED = "LOADING_METHOD_DATA_FINISHED"),
                  (a.SET_REQUEST_ACCOUNT_TABS = "SET_REQUEST_ACCOUNT_TABS"),
                  (a.SET_OPEN_METAMASK_TAB_IDS = "SET_OPEN_METAMASK_TAB_IDS"),
                  (a.HIDE_WHATS_NEW_POPUP = "HIDE_WHATS_NEW_POPUP"),
                  (a.TOGGLE_GAS_LOADING_ANIMATION = "TOGGLE_GAS_LOADING_ANIMATION"),
                  (a.SET_SMART_TRANSACTIONS_ERROR = "SET_SMART_TRANSACTIONS_ERROR"),
                  (a.DISMISS_SMART_TRANSACTIONS_ERROR_MESSAGE = "DISMISS_SMART_TRANSACTIONS_ERROR_MESSAGE"),
                  (a.TOGGLE_CURRENCY_INPUT_SWITCH = "TOGGLE_CURRENCY_INPUT_SWITCH"),
                  (a.SET_NEW_TOKENS_IMPORTED = "SET_NEW_TOKENS_IMPORTED"),
                  (a.SET_CUSTOM_TOKEN_AMOUNT = "SET_CUSTOM_TOKEN_AMOUNT"),
                  (a.SHOW_KEYRING_SNAP_REMOVAL_RESULT = "SHOW_KEYRING_SNAP_REMOVAL_RESULT"),
                  (a.HIDE_KEYRING_SNAP_REMOVAL_RESULT = "HIDE_KEYRING_SNAP_REMOVAL_RESULT");
              };
            };
      },
      { package: "$root$", file: "ui/store/actionConstants.ts" }
    ]
  ],
  [],
  {}
);
