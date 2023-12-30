LavaPack.loadBundle(
  [
    [
      5644,
      {
        "../../../shared/constants/gas": 4753,
        "../../../shared/constants/transaction": 4770,
        "../../../shared/lib/transactions-controller-utils": 4778,
        "../../../shared/modules/contract-utils": 4783,
        "../../../shared/modules/transaction.utils": 4799,
        "../../components/app/advanced-gas-fee-popover": 4823,
        "../../components/app/edit-gas-fee-popover": 4915,
        "../../components/app/edit-gas-popover/edit-gas-popover.component": 4921,
        "../../components/ui/loading-screen": 5439,
        "../../contexts/gasFee": 5513,
        "../../contexts/transaction-modal": 5516,
        "../../ducks/metamask/metamask": 5529,
        "../../helpers/utils/token-util": 5575,
        "../../hooks/useApproveTransaction": 5593,
        "../../hooks/useSimulationFailureWarning": 5616,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "../confirm-contract-interaction": 5648,
        "../confirm-transaction-base": 5667,
        "../token-allowance/token-allowance": 5947,
        "./confirm-approve-content": 5643,
        "./confirm-approve.util": 5645,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = M);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = O(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = N(e("prop-types")),
                  o = e("react-redux"),
                  s = N(e("../confirm-transaction-base")),
                  i = e("../../../shared/constants/gas"),
                  c = e("../../store/actions"),
                  l = e("../../helpers/utils/token-util"),
                  u = e("../../../shared/modules/contract-utils"),
                  d = e("../../contexts/gasFee"),
                  p = e("../../contexts/transaction-modal"),
                  f = e("../../ducks/metamask/metamask"),
                  m = N(e("../confirm-contract-interaction")),
                  g = e("../../selectors"),
                  h = e("../../hooks/useApproveTransaction"),
                  y = e("../../hooks/useSimulationFailureWarning"),
                  A = N(e("../../components/app/advanced-gas-fee-popover")),
                  E = N(e("../../components/app/edit-gas-fee-popover")),
                  v = N(e("../../components/app/edit-gas-popover/edit-gas-popover.component")),
                  T = N(e("../../components/ui/loading-screen")),
                  b = e("../../../shared/modules/transaction.utils"),
                  w = e("../../../shared/constants/transaction"),
                  k = e("../../../shared/lib/transactions-controller-utils"),
                  C = N(e("../token-allowance/token-allowance")),
                  x = e("./confirm-approve.util"),
                  P = N(e("./confirm-approve-content"));
                function N(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function O(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (O = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const S = (e) => (t) => (0, f.isAddressLedger)(t, e);
                function M({
                  assetStandard: e,
                  assetName: t,
                  userBalance: n,
                  tokenSymbol: r,
                  decimals: N,
                  tokenImage: O,
                  tokenAmount: M,
                  tokenId: R,
                  userAddress: I,
                  toAddress: D,
                  tokenAddress: B,
                  transaction: j,
                  ethTransactionTotal: L,
                  fiatTransactionTotal: F,
                  hexTransactionTotal: H,
                  hexMinimumTransactionFee: U,
                  isSetApproveForAll: Q
                }) {
                  const G = (0, o.useDispatch)(),
                    { txParams: { data: W } = {} } = j,
                    K = (0, o.useSelector)(g.getCurrentCurrency),
                    Y = (0, o.useSelector)(f.getNativeCurrency),
                    z = (0, o.useSelector)(g.getSubjectMetadata),
                    q = (0, o.useSelector)(g.getUseNonceField),
                    Z = (0, o.useSelector)(g.getNextSuggestedNonce),
                    J = (0, o.useSelector)(g.getCustomNonceValue),
                    V = (0, o.useSelector)(g.getCurrentChainId),
                    X = (0, o.useSelector)(g.getRpcPrefsForCurrentProvider),
                    _ = (0, o.useSelector)(g.getIsMultiLayerFeeNetwork),
                    $ = (0, o.useSelector)(g.checkNetworkAndAccountSupports1559),
                    ee = (0, o.useSelector)(S(I)),
                    te = (0, o.useSelector)(g.getUseCurrencyRateCheck),
                    { useNativeCurrencyAsPrimaryCurrency: ne } = (0, o.useSelector)(g.getPreferences),
                    [ae, re] = (0, a.useState)(""),
                    [oe, se] = (0, a.useState)(""),
                    [ie, ce] = (0, a.useState)(!1),
                    [le, ue] = (0, a.useState)(!1),
                    de = $,
                    pe = (0, a.useRef)(M),
                    { approveTransaction: fe, showCustomizeGasPopover: me, closeCustomizeGasPopover: ge } = (0, h.useApproveTransaction)(),
                    he = (0, y.useSimulationFailureWarning)(le);
                  (0, a.useEffect)(() => {
                    ae && pe.current !== M && re(M), (pe.current = M);
                  }, [ae, M]);
                  const ye = (0, a.useRef)(Z),
                    Ae = (0, a.useRef)(J);
                  (0, a.useEffect)(() => {
                    (ye.current === Z && Ae.current === J) || se(null !== Z && J > Z ? `Nonce is higher than suggested nonce of ${Z}` : ""),
                      (Ae.current = J),
                      (ye.current = Z);
                  }, [J, Z]);
                  const Ee = (0, a.useCallback)(async () => {
                    const { isContractAddress: e } = await (0, u.readAddressAsContract)(global.eth, D);
                    ce(e);
                  }, [ce, D]);
                  (0, a.useEffect)(() => {
                    Ee();
                  }, [Ee]);
                  const { origin: ve } = j,
                    Te = ve || "",
                    { iconUrl: be = "" } = z[ve] || {};
                  let we;
                  (e !== w.TokenStandard.ERC721 && e !== w.TokenStandard.ERC1155) || (we = t);
                  const ke = n ? (0, k.calcTokenAmount)(n, N).toString(10) : "",
                    Ce = ae ? (0, x.getCustomTxParamsData)(W, { customPermissionAmount: ae, decimals: N }) : null,
                    xe = (0, b.parseStandardTokenTransactionData)(W),
                    Pe = (0, l.getTokenApprovedParam)(xe);
                  if (r === undefined && t === undefined) return a.default.createElement(T.default, null);
                  if (e === undefined) return a.default.createElement(m.default, null);
                  return e === w.TokenStandard.ERC20
                    ? a.default.createElement(
                        d.GasFeeContextProvider,
                        { transaction: j },
                        a.default.createElement(
                          p.TransactionModalContextProvider,
                          null,
                          a.default.createElement(C.default, {
                            origin: Te,
                            siteImage: be,
                            showCustomizeGasModal: fe,
                            useNonceField: q,
                            currentCurrency: K,
                            nativeCurrency: Y,
                            ethTransactionTotal: L,
                            fiatTransactionTotal: F,
                            hexTransactionTotal: H,
                            hexMinimumTransactionFee: U,
                            txData: j,
                            isMultiLayerFeeNetwork: _,
                            supportsEIP1559: de,
                            userAddress: I,
                            tokenAddress: B,
                            data: W,
                            isSetApproveForAll: Q,
                            isApprovalOrRejection: Pe,
                            dappProposedTokenAmount: M,
                            currentTokenBalance: ke,
                            toAddress: D,
                            tokenSymbol: r,
                            decimals: N,
                            fromAddressIsLedger: ee,
                            warning: oe
                          }),
                          me &&
                            !de &&
                            a.default.createElement(v.default, { onClose: ge, mode: i.EditGasModes.modifyInPlace, transaction: j }),
                          de &&
                            a.default.createElement(
                              a.default.Fragment,
                              null,
                              a.default.createElement(E.default, null),
                              a.default.createElement(A.default, null)
                            )
                        )
                      )
                    : a.default.createElement(
                        d.GasFeeContextProvider,
                        { transaction: j },
                        a.default.createElement(s.default, {
                          toAddress: D,
                          identiconAddress: D,
                          showAccountInHeader: !0,
                          title: we,
                          tokenAddress: B,
                          customTokenAmount: String(ae),
                          dappProposedTokenAmount: M,
                          currentTokenBalance: ke,
                          isApprovalOrRejection: Pe,
                          contentComponent: a.default.createElement(
                            p.TransactionModalContextProvider,
                            null,
                            a.default.createElement(P.default, {
                              userAddress: I,
                              isSetApproveForAll: Q,
                              isApprovalOrRejection: Pe,
                              siteImage: be,
                              origin: Te,
                              tokenSymbol: r,
                              tokenImage: O,
                              tokenId: R,
                              assetName: t,
                              assetStandard: e,
                              tokenAddress: B,
                              showCustomizeGasModal: fe,
                              data: Ce || W,
                              toAddress: D,
                              currentCurrency: K,
                              nativeCurrency: Y,
                              ethTransactionTotal: L,
                              fiatTransactionTotal: F,
                              hexTransactionTotal: H,
                              hexMinimumTransactionFee: U,
                              useNonceField: q,
                              nextNonce: Z,
                              customNonceValue: J,
                              userAcknowledgedGasMissing: le,
                              setUserAcknowledgedGasMissing: ue,
                              renderSimulationFailureWarning: he,
                              updateCustomNonce: (e) => {
                                G((0, c.updateCustomNonce)(e));
                              },
                              getNextNonce: () => G((0, c.getNextNonce)()),
                              showCustomizeNonceModal: ({
                                useNonceField: e,
                                nextNonce: t,
                                customNonceValue: n,
                                updateCustomNonce: a,
                                getNextNonce: r
                              }) =>
                                G(
                                  (0, c.showModal)({
                                    name: "CUSTOMIZE_NONCE",
                                    useNonceField: e,
                                    nextNonce: t,
                                    customNonceValue: n,
                                    updateCustomNonce: a,
                                    getNextNonce: r
                                  })
                                ),
                              warning: oe,
                              txData: j,
                              fromAddressIsLedger: ee,
                              chainId: V,
                              rpcPrefs: X,
                              isContract: ie,
                              isMultiLayerFeeNetwork: _,
                              supportsEIP1559: de,
                              useCurrencyRateCheck: te,
                              useNativeCurrencyAsPrimaryCurrency: ne
                            }),
                            me &&
                              !de &&
                              a.default.createElement(v.default, { onClose: ge, mode: i.EditGasModes.modifyInPlace, transaction: j }),
                            de &&
                              a.default.createElement(
                                a.default.Fragment,
                                null,
                                a.default.createElement(E.default, null),
                                a.default.createElement(A.default, null)
                              )
                          ),
                          hideSenderToRecipient: !0,
                          customTxParamsData: Ce,
                          assetStandard: e,
                          displayAccountBalanceHeader: !0
                        })
                      );
                }
                M.propTypes = {
                  assetStandard: r.default.string,
                  assetName: r.default.string,
                  tokenAddress: r.default.string,
                  userBalance: r.default.string,
                  tokenSymbol: r.default.string,
                  decimals: r.default.string,
                  tokenImage: r.default.string,
                  tokenAmount: r.default.string,
                  tokenId: r.default.string,
                  userAddress: r.default.string,
                  toAddress: r.default.string,
                  transaction: r.default.shape({
                    origin: r.default.string,
                    txParams: r.default.shape({ data: r.default.string, to: r.default.string, from: r.default.string })
                  }),
                  ethTransactionTotal: r.default.string,
                  fiatTransactionTotal: r.default.string,
                  hexTransactionTotal: r.default.string,
                  hexMinimumTransactionFee: r.default.string,
                  isSetApproveForAll: r.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-approve/confirm-approve.js" }
    ],
    [
      5645,
      {
        "../../../shared/constants/transaction": 4770,
        "../../../shared/lib/swaps-utils": 4775,
        "../../../shared/modules/conversion.utils": 4784,
        "../../../shared/modules/transaction.utils": 4799,
        "../../helpers/utils/token-util": 5575
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.getCustomTxParamsData = function (e, { customPermissionAmount: t, decimals: n }) {
                    const c = (0, o.parseStandardTokenTransactionData)(e);
                    if (!c) throw new Error("Invalid data");
                    if (c.name !== r.TransactionType.tokenMethodApprove)
                      throw new Error(`Invalid data; should be 'approve' method, but instead is '${c.name}'`);
                    let l = (0, s.getTokenAddressParam)(c);
                    l.startsWith("0x") && (l = l.substring(2));
                    const [u, d] = e.split(l);
                    if (!u || !d) throw new Error("Invalid data");
                    if (64 !== d.length) throw new Error("Invalid token value; should be exactly 64 hex digits long (u256)");
                    let p = (0, i.decimalToHex)((0, a.calcTokenValue)(t, n));
                    if (p.length > 64) throw new Error("Custom value is larger than u256");
                    p = p.padStart(d.length, "0");
                    return `${u}${l}${p}`;
                  });
                var a = e("../../../shared/lib/swaps-utils"),
                  r = e("../../../shared/constants/transaction"),
                  o = e("../../../shared/modules/transaction.utils"),
                  s = e("../../helpers/utils/token-util"),
                  i = e("../../../shared/modules/conversion.utils");
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-approve/confirm-approve.util.js" }
    ],
    [
      5646,
      { "./confirm-approve": 5644 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirm-approve")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-approve/index.js" }
    ],
    [
      5647,
      {
        "../../../shared/constants/transaction": 4770,
        "../../ducks/confirm-transaction/confirm-transaction.duck": 5522,
        "../../ducks/send": 5531,
        "../../helpers/constants/routes": 5542,
        "../confirm-transaction-base": 5667,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, r.useDispatch)(),
                      t = (0, o.useHistory)(),
                      n = (n) => {
                        (async ({ txData: t }) => {
                          const { id: n } = t;
                          await e((0, c.editExistingTransaction)(u.AssetType.native, n.toString())), e((0, l.clearConfirmTransaction)());
                        })(n).then(() => {
                          t.push(i.SEND_ROUTE);
                        });
                      };
                    return a.default.createElement(s.default, { actionKey: "confirm", onEdit: (e) => n(e) });
                  });
                var a = d(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = d(e("../confirm-transaction-base")),
                  i = e("../../helpers/constants/routes"),
                  c = e("../../ducks/send"),
                  l = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                  u = e("../../../shared/constants/transaction");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-contract-interaction/confirm-contract-interaction.js" }
    ],
    [
      5648,
      { "./confirm-contract-interaction": 5647 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirm-contract-interaction")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-contract-interaction/index.js" }
    ],
    [
      5649,
      {
        "../../../shared/constants/common": 4751,
        "../../../shared/constants/copy": 4752,
        "../../../shared/constants/metametrics": 4758,
        "../../../shared/constants/time": 4768,
        "../../../shared/modules/Numeric": 4780,
        "../../../shared/modules/conversion.utils": 4784,
        "../../components/app/account-list-item": 4803,
        "../../components/component-library": 5242,
        "../../components/ui/identicon": 5430,
        "../../components/ui/page-container": 5458,
        "../../components/ui/tooltip": 5502,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/utils/confirm-tx.util": 5560,
        classnames: 2952,
        "copy-to-clipboard": 3004,
        loglevel: 4083,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = T(e("prop-types")),
                  o = T(e("copy-to-clipboard")),
                  s = T(e("classnames")),
                  i = T(e("loglevel")),
                  c = T(e("../../components/app/account-list-item")),
                  l = T(e("../../components/ui/identicon")),
                  u = T(e("../../components/ui/tooltip")),
                  d = e("../../components/ui/page-container"),
                  p = e("../../../shared/constants/metametrics"),
                  f = e("../../../shared/constants/time"),
                  m = e("../../../shared/modules/Numeric"),
                  g = e("../../../shared/constants/common"),
                  h = e("../../components/component-library"),
                  y = e("../../helpers/constants/design-system"),
                  A = e("../../helpers/utils/confirm-tx.util"),
                  E = e("../../../shared/modules/conversion.utils"),
                  v = e("../../../shared/constants/copy");
                function T(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function w(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class k extends a.Component {
                  constructor(...e) {
                    super(...e),
                      w(this, "state", { copyToClipboardPressed: !1, hasCopied: !1 }),
                      w(this, "copyMessage", () => {
                        (0, o.default)(this.state.rawMessage, v.COPY_OPTIONS),
                          this.context.trackEvent({
                            category: p.MetaMetricsEventCategory.Messages,
                            event: "Copy",
                            properties: { action: "Decrypt Message Copy", legacy_event: !0 }
                          }),
                          this.setState({ hasCopied: !0 }),
                          setTimeout(() => this.setState({ hasCopied: !1 }), 3 * f.SECOND);
                      }),
                      w(this, "renderHeader", () =>
                        a.default.createElement(
                          "div",
                          { className: "request-decrypt-message__header" },
                          a.default.createElement("div", { className: "request-decrypt-message__header-background" }),
                          a.default.createElement(
                            "div",
                            { className: "request-decrypt-message__header__text" },
                            this.context.t("decryptRequest")
                          ),
                          a.default.createElement(
                            "div",
                            { className: "request-decrypt-message__header__tip-container" },
                            a.default.createElement("div", { className: "request-decrypt-message__header__tip" })
                          )
                        )
                      ),
                      w(this, "renderAccount", () => {
                        const { fromAccount: e } = this.props,
                          { t: t } = this.context;
                        return a.default.createElement(
                          "div",
                          { className: "request-decrypt-message__account" },
                          a.default.createElement("div", { className: "request-decrypt-message__account-text" }, `${t("account")}:`),
                          a.default.createElement(
                            "div",
                            { className: "request-decrypt-message__account-item" },
                            a.default.createElement(c.default, { account: e })
                          )
                        );
                      }),
                      w(this, "renderBalance", () => {
                        const {
                            conversionRate: e,
                            nativeCurrency: t,
                            currentCurrency: n,
                            fromAccount: { balance: r }
                          } = this.props,
                          { t: o } = this.context,
                          s = e
                            ? (0, A.formatCurrency)(
                                (0, E.getValueFromWeiHex)({
                                  value: r,
                                  fromCurrency: t,
                                  toCurrency: n,
                                  conversionRate: e,
                                  numberOfDecimals: 6,
                                  toDenomination: g.EtherDenomination.ETH
                                }),
                                n
                              )
                            : new m.Numeric(r, 16, g.EtherDenomination.WEI)
                                .toDenomination(g.EtherDenomination.ETH)
                                .round(6)
                                .toBase(10)
                                .toString();
                        return a.default.createElement(
                          "div",
                          { className: "request-decrypt-message__balance" },
                          a.default.createElement("div", { className: "request-decrypt-message__balance-text" }, `${o("balance")}:`),
                          a.default.createElement(
                            "div",
                            { className: "request-decrypt-message__balance-value" },
                            `${s} ${e ? (null == n ? void 0 : n.toUpperCase()) : t}`
                          )
                        );
                      }),
                      w(this, "renderRequestIcon", () => {
                        const { requesterAddress: e } = this.props;
                        return a.default.createElement(
                          "div",
                          { className: "request-decrypt-message__request-icon" },
                          a.default.createElement(l.default, { diameter: 40, address: e })
                        );
                      }),
                      w(this, "renderAccountInfo", () =>
                        a.default.createElement(
                          "div",
                          { className: "request-decrypt-message__account-info" },
                          this.renderAccount(),
                          this.renderRequestIcon(),
                          this.renderBalance()
                        )
                      ),
                      w(this, "renderBody", () => {
                        const { decryptMessageInline: e, subjectMetadata: t, txData: n } = this.props,
                          { t: r } = this.context,
                          o = t[n.msgParams.origin],
                          i = (null == o ? void 0 : o.name) || n.msgParams.origin,
                          c = r("decryptMessageNotice", [n.msgParams.origin]),
                          {
                            hasCopied: l,
                            hasDecrypted: d,
                            hasError: p,
                            rawMessage: f,
                            errorMessage: m,
                            copyToClipboardPressed: g
                          } = this.state;
                        return a.default.createElement(
                          "div",
                          { className: "request-decrypt-message__body" },
                          this.renderAccountInfo(),
                          a.default.createElement(
                            "div",
                            { className: "request-decrypt-message__visual" },
                            a.default.createElement(
                              "section",
                              null,
                              null != o && o.iconUrl
                                ? a.default.createElement("img", {
                                    className: "request-decrypt-message__visual-identicon",
                                    src: o.iconUrl,
                                    alt: ""
                                  })
                                : a.default.createElement(
                                    "i",
                                    { className: "request-decrypt-message__visual-identicon--default" },
                                    i.charAt(0).toUpperCase()
                                  ),
                              a.default.createElement("div", { className: "request-decrypt-message__notice" }, c)
                            )
                          ),
                          a.default.createElement(
                            "div",
                            { className: "request-decrypt-message__message" },
                            a.default.createElement(
                              "div",
                              { className: "request-decrypt-message__message-text" },
                              d || p ? f : n.msgParams.data,
                              p ? m : ""
                            ),
                            a.default.createElement("div", {
                              className: (0, s.default)("request-decrypt-message__message-cover", {
                                "request-decrypt-message__message-lock--pressed": d || p
                              })
                            }),
                            a.default.createElement(
                              "div",
                              {
                                className: (0, s.default)("request-decrypt-message__message-lock", {
                                  "request-decrypt-message__message-lock--pressed": d || p
                                }),
                                onClick: (t) => {
                                  e(n, t).then((e) => {
                                    e.error
                                      ? this.setState({ hasError: !0, errorMessage: this.context.t("decryptInlineError", [e.error]) })
                                      : this.setState({ hasDecrypted: !0, rawMessage: e.rawSig });
                                  });
                                }
                              },
                              a.default.createElement(
                                "div",
                                { className: "request-decrypt-message__message-lock__container" },
                                a.default.createElement("i", {
                                  className: "fa fa-lock fa-lg request-decrypt-message__message-lock__container__icon"
                                }),
                                a.default.createElement(
                                  "div",
                                  { className: "request-decrypt-message__message-lock__container__text" },
                                  r("decryptMetamask")
                                )
                              )
                            )
                          ),
                          d
                            ? a.default.createElement(
                                "div",
                                {
                                  className: (0, s.default)({
                                    "request-decrypt-message__message-copy": !0,
                                    "request-decrypt-message__message-copy--pressed": g
                                  }),
                                  onClick: () => this.copyMessage(),
                                  onMouseDown: () => this.setState({ copyToClipboardPressed: !0 }),
                                  onMouseUp: () => this.setState({ copyToClipboardPressed: !1 })
                                },
                                a.default.createElement(
                                  u.default,
                                  {
                                    position: "bottom",
                                    title: r(l ? "copiedExclamation" : "copyToClipboard"),
                                    wrapperClassName: "request-decrypt-message__message-copy-tooltip",
                                    style: { display: "flex", alignItems: "center" }
                                  },
                                  a.default.createElement(
                                    "div",
                                    { className: "request-decrypt-message__message-copy-text" },
                                    r("decryptCopy")
                                  ),
                                  a.default.createElement(h.Icon, {
                                    name: l ? h.IconName.CopySuccess : h.IconName.Copy,
                                    color: y.IconColor.primaryDefault
                                  })
                                )
                              )
                            : a.default.createElement("div", null)
                        );
                      }),
                      w(this, "renderFooter", () => {
                        const {
                            cancelDecryptMessage: e,
                            clearConfirmTransaction: t,
                            decryptMessage: n,
                            history: r,
                            mostRecentOverviewPage: o,
                            txData: s
                          } = this.props,
                          { trackEvent: i, t: c } = this.context;
                        return a.default.createElement(d.PageContainerFooter, {
                          cancelText: c("cancel"),
                          submitText: c("decrypt"),
                          onCancel: async (n) => {
                            await e(s, n),
                              i({
                                category: p.MetaMetricsEventCategory.Messages,
                                event: "Cancel",
                                properties: { action: "Decrypt Message Request", legacy_event: !0 }
                              }),
                              t(),
                              r.push(o);
                          },
                          onSubmit: async (e) => {
                            await n(s, e),
                              i({
                                category: p.MetaMetricsEventCategory.Messages,
                                event: "Confirm",
                                properties: { action: "Decrypt Message Request", legacy_event: !0 }
                              }),
                              t(),
                              r.push(o);
                          }
                        });
                      }),
                      w(this, "render", () =>
                        this.props.txData
                          ? a.default.createElement(
                              "div",
                              { className: "request-decrypt-message__container" },
                              this.renderHeader(),
                              this.renderBody(),
                              this.renderFooter()
                            )
                          : (i.default.warn("ConfirmDecryptMessage Page: Missing txData prop."), null)
                      );
                  }
                }
                (n.default = k),
                  w(k, "contextTypes", { t: r.default.func.isRequired, trackEvent: r.default.func.isRequired }),
                  w(k, "propTypes", {
                    fromAccount: r.default.shape({
                      address: r.default.string.isRequired,
                      balance: r.default.string,
                      name: r.default.string
                    }).isRequired,
                    clearConfirmTransaction: r.default.func.isRequired,
                    cancelDecryptMessage: r.default.func.isRequired,
                    decryptMessage: r.default.func.isRequired,
                    decryptMessageInline: r.default.func.isRequired,
                    history: r.default.object.isRequired,
                    mostRecentOverviewPage: r.default.string.isRequired,
                    requesterAddress: r.default.string,
                    txData: r.default.object,
                    subjectMetadata: r.default.object,
                    nativeCurrency: r.default.string.isRequired,
                    currentCurrency: r.default.string.isRequired,
                    conversionRate: r.default.number
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-decrypt-message/confirm-decrypt-message.component.js" }
    ],
    [
      5650,
      {
        "../../ducks/confirm-transaction/confirm-transaction.duck": 5522,
        "../../ducks/history/history": 5526,
        "../../ducks/metamask/metamask": 5529,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "./confirm-decrypt-message.component": 5649,
        lodash: 4071,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  o = e("redux"),
                  s = e("react-router-dom"),
                  i = e("lodash"),
                  c = e("../../store/actions"),
                  l = e("../../selectors"),
                  u = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                  d = e("../../ducks/history/history"),
                  p = e("../../ducks/metamask/metamask"),
                  f = (a = e("./confirm-decrypt-message.component")) && a.__esModule ? a : { default: a };
                n.default = (0, o.compose)(
                  s.withRouter,
                  (0, r.connect)(
                    function (e) {
                      var t;
                      const {
                          metamask: { subjectMetadata: n = {} }
                        } = e,
                        { useNativeCurrencyAsPrimaryCurrency: a } = (0, l.getPreferences)(e),
                        r = (0, l.unconfirmedTransactionsListSelector)(e),
                        o = (0, i.cloneDeep)(r[0]);
                      return {
                        txData: o,
                        subjectMetadata: n,
                        fromAccount: (0, l.getTargetAccountWithSendEtherInfo)(
                          e,
                          null == o || null === (t = o.msgParams) || void 0 === t ? void 0 : t.from
                        ),
                        requester: null,
                        requesterAddress: null,
                        conversionRate: a ? null : (0, l.conversionRateSelector)(e),
                        mostRecentOverviewPage: (0, d.getMostRecentOverviewPage)(e),
                        nativeCurrency: (0, p.getNativeCurrency)(e),
                        currentCurrency: (0, l.getCurrentCurrency)(e)
                      };
                    },
                    function (e) {
                      return {
                        goHome: () => e((0, c.goHome)()),
                        clearConfirmTransaction: () => e((0, u.clearConfirmTransaction)()),
                        decryptMessage: (t, n) => {
                          const a = t.msgParams;
                          return (a.metamaskId = t.id), n.stopPropagation(n), e((0, c.decryptMsg)(a));
                        },
                        cancelDecryptMessage: (t, n) => (n.stopPropagation(n), e((0, c.cancelDecryptMsg)(t))),
                        decryptMessageInline: (t, n) => {
                          const a = t.msgParams;
                          return (a.metamaskId = t.id), n.stopPropagation(n), e((0, c.decryptMsgInline)(a));
                        }
                      };
                    }
                  )
                )(f.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-decrypt-message/confirm-decrypt-message.container.js" }
    ],
    [
      5651,
      { "./confirm-decrypt-message.container": 5650 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirm-decrypt-message.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-decrypt-message/index.js" }
    ],
    [
      5652,
      {
        "../../../shared/modules/buffer-utils": 4782,
        "../../components/component-library": 5242,
        "../../components/ui/box": 5373,
        "../../helpers/constants/design-system": 5537,
        "../confirm-transaction-base": 5667,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = u(e("prop-types")),
                  o = u(e("../confirm-transaction-base")),
                  s = e("../../../shared/modules/buffer-utils"),
                  i = u(e("../../components/ui/box")),
                  c = e("../../components/component-library"),
                  l = e("../../helpers/constants/design-system");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function p(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class f extends a.Component {
                  renderData() {
                    const { t: e } = this.context,
                      { txData: { origin: t, txParams: { data: n } = {} } = {} } = this.props;
                    return a.default.createElement(
                      i.default,
                      { color: l.Color.textAlternative, padding: 4 },
                      a.default.createElement(
                        i.default,
                        { backgroundColor: l.Color.backgroundAlternative, padding: 4, variant: l.TextVariant.bodySm },
                        a.default.createElement(
                          i.default,
                          { display: l.DISPLAY.FLEX },
                          a.default.createElement(
                            c.Text,
                            {
                              backgroundColor: l.Color.backgroundAlternative,
                              marginBottom: 1,
                              paddingRight: 4,
                              variant: l.TextVariant.bodySmBold
                            },
                            `${e("origin")}:`
                          ),
                          a.default.createElement(c.Text, { overflowWrap: l.OVERFLOW_WRAP.BREAK_WORD, variant: l.TextVariant.bodySm }, t)
                        ),
                        a.default.createElement(
                          i.default,
                          { display: l.DISPLAY.FLEX },
                          a.default.createElement(
                            c.Text,
                            { backgroundColor: l.Color.backgroundAlternative, paddingRight: 4, variant: l.TextVariant.bodySmBold },
                            `${e("bytes")}:`
                          ),
                          a.default.createElement(c.Text, { variant: l.TextVariant.bodySm }, (0, s.toBuffer)(n).length)
                        )
                      ),
                      a.default.createElement(
                        c.Text,
                        {
                          as: "h3",
                          paddingBottom: 3,
                          paddingTop: 2,
                          textTransform: l.TEXT_TRANSFORM.UPPERCASE,
                          variant: l.TextVariant.bodySm
                        },
                        `${e("hexData")}:`
                      ),
                      a.default.createElement(
                        c.Text,
                        {
                          backgroundColor: l.Color.backgroundAlternative,
                          overflowWrap: l.OVERFLOW_WRAP.BREAK_WORD,
                          padding: 4,
                          variant: l.TextVariant.bodySm
                        },
                        n
                      )
                    );
                  }
                  render() {
                    return a.default.createElement(o.default, { actionKey: "contractDeployment", dataComponent: this.renderData() });
                  }
                }
                (n.default = f), p(f, "contextTypes", { t: r.default.func }), p(f, "propTypes", { txData: r.default.object });
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-deploy-contract/confirm-deploy-contract.component.js" }
    ],
    [
      5653,
      { "./confirm-deploy-contract.component": 5652, "react-redux": 4440 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  o = (a = e("./confirm-deploy-contract.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)((e) => {
                  const { confirmTransaction: { txData: t } = {} } = e;
                  return { txData: t };
                })(o.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-deploy-contract/confirm-deploy-contract.container.js" }
    ],
    [
      5654,
      { "./confirm-deploy-contract.container": 5653 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirm-deploy-contract.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-deploy-contract/index.js" }
    ],
    [
      5655,
      {
        "../../../shared/constants/common": 4751,
        "../../../shared/constants/metametrics": 4758,
        "../../../shared/modules/Numeric": 4780,
        "../../../shared/modules/conversion.utils": 4784,
        "../../components/app/account-list-item": 4803,
        "../../components/ui/identicon": 5430,
        "../../components/ui/page-container": 5458,
        "../../components/ui/site-origin": 5481,
        "../../helpers/utils/confirm-tx.util": 5560,
        loglevel: 4083,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = g(e("prop-types")),
                  o = g(e("loglevel")),
                  s = g(e("../../components/app/account-list-item")),
                  i = g(e("../../components/ui/identicon")),
                  c = e("../../components/ui/page-container"),
                  l = e("../../../shared/constants/metametrics"),
                  u = g(e("../../components/ui/site-origin")),
                  d = e("../../../shared/modules/Numeric"),
                  p = e("../../../shared/constants/common"),
                  f = e("../../helpers/utils/confirm-tx.util"),
                  m = e("../../../shared/modules/conversion.utils");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function y(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class A extends a.Component {
                  constructor(...e) {
                    super(...e),
                      y(this, "renderHeader", () =>
                        a.default.createElement(
                          "div",
                          { className: "request-encryption-public-key__header" },
                          a.default.createElement("div", { className: "request-encryption-public-key__header-background" }),
                          a.default.createElement(
                            "div",
                            { className: "request-encryption-public-key__header__text" },
                            this.context.t("encryptionPublicKeyRequest")
                          ),
                          a.default.createElement(
                            "div",
                            { className: "request-encryption-public-key__header__tip-container" },
                            a.default.createElement("div", { className: "request-encryption-public-key__header__tip" })
                          )
                        )
                      ),
                      y(this, "renderAccount", () => {
                        const { fromAccount: e } = this.props,
                          { t: t } = this.context;
                        return a.default.createElement(
                          "div",
                          { className: "request-encryption-public-key__account" },
                          a.default.createElement("div", { className: "request-encryption-public-key__account-text" }, `${t("account")}:`),
                          a.default.createElement(
                            "div",
                            { className: "request-encryption-public-key__account-item" },
                            a.default.createElement(s.default, { account: e })
                          )
                        );
                      }),
                      y(this, "renderBalance", () => {
                        const {
                            conversionRate: e,
                            nativeCurrency: t,
                            currentCurrency: n,
                            fromAccount: { balance: r }
                          } = this.props,
                          { t: o } = this.context,
                          s = e
                            ? (0, f.formatCurrency)(
                                (0, m.getValueFromWeiHex)({
                                  value: r,
                                  fromCurrency: t,
                                  toCurrency: n,
                                  conversionRate: e,
                                  numberOfDecimals: 6,
                                  toDenomination: p.EtherDenomination.ETH
                                }),
                                n
                              )
                            : new d.Numeric(r, 16, p.EtherDenomination.WEI)
                                .toDenomination(p.EtherDenomination.ETH)
                                .round(6)
                                .toBase(10)
                                .toString();
                        return a.default.createElement(
                          "div",
                          { className: "request-encryption-public-key__balance" },
                          a.default.createElement("div", { className: "request-encryption-public-key__balance-text" }, `${o("balance")}:`),
                          a.default.createElement(
                            "div",
                            { className: "request-encryption-public-key__balance-value" },
                            `${s} ${e ? (null == n ? void 0 : n.toUpperCase()) : t}`
                          )
                        );
                      }),
                      y(this, "renderRequestIcon", () => {
                        const { requesterAddress: e } = this.props;
                        return a.default.createElement(
                          "div",
                          { className: "request-encryption-public-key__request-icon" },
                          a.default.createElement(i.default, { diameter: 40, address: e })
                        );
                      }),
                      y(this, "renderAccountInfo", () =>
                        a.default.createElement(
                          "div",
                          { className: "request-encryption-public-key__account-info" },
                          this.renderAccount(),
                          this.renderRequestIcon(),
                          this.renderBalance()
                        )
                      ),
                      y(this, "renderBody", () => {
                        const { subjectMetadata: e, txData: t } = this.props,
                          { t: n } = this.context,
                          r = e[t.origin],
                          o = n("encryptionPublicKeyNotice", [a.default.createElement(u.default, { siteOrigin: t.origin, key: t.origin })]),
                          s = (null == r ? void 0 : r.hostname) || t.origin;
                        return a.default.createElement(
                          "div",
                          { className: "request-encryption-public-key__body" },
                          this.renderAccountInfo(),
                          a.default.createElement(
                            "div",
                            { className: "request-encryption-public-key__visual" },
                            a.default.createElement(
                              "section",
                              null,
                              null != r && r.iconUrl
                                ? a.default.createElement("img", {
                                    className: "request-encryption-public-key__visual-identicon",
                                    src: r.iconUrl,
                                    alt: ""
                                  })
                                : a.default.createElement(
                                    "i",
                                    { className: "request-encryption-public-key__visual-identicon--default" },
                                    s.charAt(0).toUpperCase()
                                  ),
                              a.default.createElement("div", { className: "request-encryption-public-key__notice" }, o)
                            )
                          )
                        );
                      }),
                      y(this, "renderFooter", () => {
                        const {
                            cancelEncryptionPublicKey: e,
                            clearConfirmTransaction: t,
                            encryptionPublicKey: n,
                            history: r,
                            mostRecentOverviewPage: o,
                            txData: s
                          } = this.props,
                          { t: i, trackEvent: u } = this.context;
                        return a.default.createElement(c.PageContainerFooter, {
                          cancelText: i("cancel"),
                          submitText: i("provide"),
                          onCancel: async (n) => {
                            await e(s, n),
                              u({
                                category: l.MetaMetricsEventCategory.Messages,
                                event: "Cancel",
                                properties: { action: "Encryption public key Request", legacy_event: !0 }
                              }),
                              t(),
                              r.push(o);
                          },
                          onSubmit: async (e) => {
                            await n(s, e),
                              this.context.trackEvent({
                                category: l.MetaMetricsEventCategory.Messages,
                                event: "Confirm",
                                properties: { action: "Encryption public key Request", legacy_event: !0 }
                              }),
                              t(),
                              r.push(o);
                          }
                        });
                      }),
                      y(this, "render", () =>
                        this.props.txData
                          ? a.default.createElement(
                              "div",
                              { className: "request-encryption-public-key__container" },
                              this.renderHeader(),
                              this.renderBody(),
                              this.renderFooter()
                            )
                          : (o.default.warn("ConfirmEncryptionPublicKey Page: Missing txData prop."), null)
                      );
                  }
                }
                (n.default = A),
                  y(A, "contextTypes", { t: r.default.func.isRequired, trackEvent: r.default.func.isRequired }),
                  y(A, "propTypes", {
                    fromAccount: r.default.shape({
                      address: r.default.string.isRequired,
                      balance: r.default.string,
                      name: r.default.string
                    }).isRequired,
                    clearConfirmTransaction: r.default.func.isRequired,
                    cancelEncryptionPublicKey: r.default.func.isRequired,
                    encryptionPublicKey: r.default.func.isRequired,
                    history: r.default.object.isRequired,
                    requesterAddress: r.default.string,
                    txData: r.default.object,
                    subjectMetadata: r.default.object,
                    mostRecentOverviewPage: r.default.string.isRequired,
                    nativeCurrency: r.default.string.isRequired,
                    currentCurrency: r.default.string.isRequired,
                    conversionRate: r.default.number
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-encryption-public-key/confirm-encryption-public-key.component.js" }
    ],
    [
      5656,
      {
        "../../ducks/confirm-transaction/confirm-transaction.duck": 5522,
        "../../ducks/history/history": 5526,
        "../../ducks/metamask/metamask": 5529,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "./confirm-encryption-public-key.component": 5655,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  o = e("redux"),
                  s = e("react-router-dom"),
                  i = e("../../store/actions"),
                  c = e("../../selectors"),
                  l = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                  u = e("../../ducks/history/history"),
                  d = e("../../ducks/metamask/metamask"),
                  p = (a = e("./confirm-encryption-public-key.component")) && a.__esModule ? a : { default: a };
                n.default = (0, o.compose)(
                  s.withRouter,
                  (0, r.connect)(
                    function (e) {
                      const {
                          metamask: { subjectMetadata: t = {} }
                        } = e,
                        { useNativeCurrencyAsPrimaryCurrency: n } = (0, c.getPreferences)(e),
                        a = (0, c.unconfirmedTransactionsListSelector)(e)[0];
                      return {
                        txData: a,
                        subjectMetadata: t,
                        fromAccount: (0, c.getTargetAccountWithSendEtherInfo)(e, null == a ? void 0 : a.msgParams),
                        requester: null,
                        requesterAddress: null,
                        conversionRate: n ? null : (0, c.conversionRateSelector)(e),
                        mostRecentOverviewPage: (0, u.getMostRecentOverviewPage)(e),
                        nativeCurrency: (0, d.getNativeCurrency)(e),
                        currentCurrency: (0, c.getCurrentCurrency)(e)
                      };
                    },
                    function (e) {
                      return {
                        goHome: () => e((0, i.goHome)()),
                        clearConfirmTransaction: () => e((0, l.clearConfirmTransaction)()),
                        encryptionPublicKey: (t, n) => {
                          const a = { data: t.msgParams, metamaskId: t.id };
                          return n.stopPropagation(), e((0, i.encryptionPublicKeyMsg)(a));
                        },
                        cancelEncryptionPublicKey: (t, n) => (n.stopPropagation(), e((0, i.cancelEncryptionPublicKeyMsg)(t)))
                      };
                    }
                  )
                )(p.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-encryption-public-key/confirm-encryption-public-key.container.js" }
    ],
    [
      5657,
      { "./confirm-encryption-public-key.container": 5656 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirm-encryption-public-key.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-encryption-public-key/index.js" }
    ],
    [
      5658,
      {
        "../../../shared/constants/transaction": 4770,
        "../../ducks/confirm-transaction/confirm-transaction.duck": 5522,
        "../../ducks/send": 5531,
        "../../helpers/constants/routes": 5542,
        "../confirm-transaction-base": 5667,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = d(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = e("../../../shared/constants/transaction"),
                  i = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                  c = e("../../ducks/send"),
                  l = e("../../helpers/constants/routes"),
                  u = d(e("../confirm-transaction-base"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = () => {
                  const e = (0, r.useDispatch)(),
                    t = (0, o.useHistory)(),
                    n = ({ txData: n }) => {
                      (async (t) => {
                        const { id: n } = t;
                        await e((0, c.editExistingTransaction)(s.AssetType.native, n.toString())), e((0, i.clearConfirmTransaction)());
                      })(n).then(() => {
                        t.push(l.SEND_ROUTE);
                      });
                    };
                  return a.default.createElement(u.default, { actionKey: "confirm", onEdit: (e) => n(e) });
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-send-ether/confirm-send-ether.js" }
    ],
    [
      5659,
      { "./confirm-send-ether": 5658 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirm-send-ether")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-send-ether/index.js" }
    ],
    [
      5660,
      {
        "../../../shared/constants/transaction": 4770,
        "../../ducks/confirm-transaction/confirm-transaction.duck": 5522,
        "../../ducks/metamask/metamask": 5529,
        "../../ducks/send": 5531,
        "../../helpers/constants/routes": 5542,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "../confirm-token-transaction-base/confirm-token-transaction-base": 5663,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = h);
                var a = g(e("react")),
                  r = g(e("prop-types")),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = g(e("../confirm-token-transaction-base/confirm-token-transaction-base")),
                  c = e("../../helpers/constants/routes"),
                  l = e("../../ducks/send"),
                  u = e("../../selectors"),
                  d = e("../../ducks/metamask/metamask"),
                  p = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                  f = e("../../store/actions"),
                  m = e("../../../shared/constants/transaction");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h({
                  assetStandard: e,
                  toAddress: t,
                  tokenAddress: n,
                  assetName: r,
                  tokenSymbol: g,
                  tokenAmount: h,
                  tokenId: y,
                  transaction: A,
                  image: E,
                  ethTransactionTotal: v,
                  fiatTransactionTotal: T,
                  hexMaximumTransactionFee: b
                }) {
                  const w = (0, o.useDispatch)(),
                    k = (0, s.useHistory)(),
                    C = (0, o.useSelector)(d.getConversionRate),
                    x = (0, o.useSelector)(d.getNativeCurrency),
                    P = (0, o.useSelector)(u.getCurrentCurrency),
                    N = (0, o.useSelector)(u.contractExchangeRateSelector);
                  let O, S;
                  return (
                    e === m.TokenStandard.ERC721 ? ((O = r), (S = `#${y}`)) : e === m.TokenStandard.ERC20 && (O = `${h} ${g}`),
                    a.default.createElement(i.default, {
                      onEdit: (e) => {
                        (async ({ txData: e }) => {
                          const { id: t } = e;
                          await w((0, l.editExistingTransaction)(m.AssetType.token, t.toString())),
                            w((0, p.clearConfirmTransaction)()),
                            w((0, f.showSendTokenPage)());
                        })(e).then(() => {
                          k.push(c.SEND_ROUTE);
                        });
                      },
                      conversionRate: C,
                      currentCurrency: P,
                      nativeCurrency: x,
                      contractExchangeRate: N,
                      title: O,
                      subtitle: S,
                      assetStandard: e,
                      assetName: r,
                      tokenSymbol: g,
                      tokenAmount: h,
                      tokenId: y,
                      transaction: A,
                      image: E,
                      toAddress: t,
                      tokenAddress: n,
                      ethTransactionTotal: v,
                      fiatTransactionTotal: T,
                      hexMaximumTransactionFee: b
                    })
                  );
                }
                h.propTypes = {
                  tokenAmount: r.default.string,
                  assetStandard: r.default.string,
                  assetName: r.default.string,
                  tokenSymbol: r.default.string,
                  image: r.default.string,
                  tokenId: r.default.string,
                  toAddress: r.default.string,
                  tokenAddress: r.default.string,
                  transaction: r.default.shape({
                    origin: r.default.string,
                    txParams: r.default.shape({ data: r.default.string, to: r.default.string, from: r.default.string })
                  }),
                  ethTransactionTotal: r.default.string,
                  fiatTransactionTotal: r.default.string,
                  hexMaximumTransactionFee: r.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-send-token/confirm-send-token.js" }
    ],
    [
      5661,
      { "./confirm-send-token": 5660 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirm-send-token")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-send-token/index.js" }
    ],
    [
      5662,
      {
        "../../../shared/constants/app": 4749,
        "../../../shared/constants/transaction": 4770,
        "../../components/app/signature-request": 5064,
        "../../components/app/signature-request-original": 5051,
        "../../components/app/signature-request-siwe": 5056,
        "../../components/ui/loading-screen": 5439,
        "../../ducks/metamask/metamask": 5529,
        "../../ducks/send": 5531,
        "../../helpers/utils/tx-helper": 5577,
        "../../hooks/useRouting": 5610,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "@metamask/permission-controller": 1667,
        lodash: 4071,
        loglevel: 4083,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = k(e("prop-types")),
                  r = w(e("react")),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = k(e("loglevel")),
                  c = e("lodash"),
                  l = e("@metamask/permission-controller"),
                  u = w(e("../../store/actions")),
                  d = k(e("../../helpers/utils/tx-helper")),
                  p = k(e("../../components/app/signature-request")),
                  f = k(e("../../components/app/signature-request-siwe")),
                  m = k(e("../../components/app/signature-request-original")),
                  g = k(e("../../components/ui/loading-screen")),
                  h = e("../../hooks/useRouting"),
                  y = e("../../selectors"),
                  A = e("../../../shared/constants/app"),
                  E = e("../../../shared/constants/transaction"),
                  v = e("../../ducks/send"),
                  T = e("../../ducks/metamask/metamask");
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function w(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = b(t);
                  if (n && n.has(e)) return n.get(e);
                  var a = { __proto__: null },
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                      var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                      s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                    }
                  return (a.default = e), n && n.set(e, a), a;
                }
                function k(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const C = ({ match: e }) => {
                  const t = (0, o.useDispatch)(),
                    { navigateToMostRecentOverviewPage: n } = (0, h.useRouting)(),
                    a = (0, o.useSelector)(y.getTotalUnapprovedSignatureRequestCount),
                    b = (0, o.useSelector)(v.getSendTo),
                    {
                      identities: w,
                      currentCurrency: k,
                      unapprovedMsgs: C,
                      unapprovedPersonalMsgs: x,
                      unapprovedTypedMessages: P,
                      blockGasLimit: N
                    } = (0, o.useSelector)((e) => e.metamask),
                    O = (0, o.useSelector)(y.getUnapprovedTransactions),
                    S = (0, o.useSelector)(y.getCurrentNetworkTransactions),
                    { chainId: M } = (0, o.useSelector)(T.getProviderConfig),
                    { txId: R } = (0, o.useSelector)((e) => e.appState),
                    [I, D] = (0, r.useState)(),
                    B = (0, s.useHistory)();
                  (0, r.useEffect)(() => {
                    0 !== (0, d.default)(O || {}, {}, {}, {}, {}, {}, M).length || b || 0 !== a || n();
                  }, [M, n, b, a, O]),
                    (0, r.useEffect)(() => {
                      if (!I) return void D({ index: R, unapprovedTxs: O });
                      let r;
                      const { params: { id: o } = {} } = e;
                      if (o) r = S.find(({ id: e }) => `${e}` === o);
                      else {
                        const { index: e, unapprovedTxs: t } = I,
                          n = (0, d.default)(t, {}, {}, {}, {}, {}, M)[e] || {};
                        r = S.find(({ id: e }) => e === n.id) || {};
                      }
                      const s = (0, d.default)(O || {}, {}, {}, {}, {}, {}, M);
                      r && r.status === E.TransactionStatus.dropped
                        ? t(u.showModal({ name: "TRANSACTION_CONFIRMED", onSubmit: () => n() }))
                        : (0 !== s.length || b || 0 !== a || n(), D({ index: R, unapprovedTxs: O }));
                    }, []);
                  const j = (0, r.useCallback)(() => {
                      const { params: { id: t } = {} } = e,
                        n = (0, d.default)(O || {}, C, x, {}, {}, P, M);
                      i.default.info(`rendering a combined ${n.length} unconf msgs & txs`);
                      const a = t ? n.find(({ id: e }) => `${e}` === t) : n[R];
                      return (0, c.cloneDeep)(a);
                    }, [M, R, e, C, x, O, P]),
                    L = (0, r.useMemo)(() => j() || {}, [j]),
                    F = (0, o.useSelector)((e) => {
                      var t;
                      return (0, y.getTargetSubjectMetadata)(e, null === (t = L.msgParams) || void 0 === t ? void 0 : t.origin);
                    });
                  if (!L.msgParams) return r.default.createElement(g.default, null);
                  const H = ((e, t) => {
                    const {
                      type: n,
                      msgParams: { version: a, siwe: r }
                    } = e;
                    return n !== A.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA || ("V3" !== a && "V4" !== a)
                      ? null != r && r.isSIWEMessage && t !== l.SubjectType.Snap
                        ? f.default
                        : m.default
                      : p.default;
                  })(L, F);
                  return r.default.createElement(H, {
                    history: B,
                    txData: L,
                    key: L.id,
                    identities: w,
                    currentCurrency: k,
                    blockGasLimit: N
                  });
                };
                C.propTypes = { match: a.default.shape({ params: a.default.shape({ id: a.default.string }) }) };
                n.default = (0, s.withRouter)(C);
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-signature-request/index.js" }
    ],
    [
      5663,
      {
        "../../../shared/constants/common": 4751,
        "../../../shared/constants/network": 4759,
        "../../../shared/constants/transaction": 4770,
        "../../../shared/modules/conversion.utils": 4784,
        "../../components/app/user-preferenced-currency-display": 5167,
        "../../contexts/i18n": 5514,
        "../../ducks/metamask/metamask": 5529,
        "../../helpers/constants/common": 5535,
        "../../helpers/utils/confirm-tx.util": 5560,
        "../../selectors": 5958,
        "../confirm-transaction-base": 5667,
        "@metamask/etherscan-link": 1370,
        "bignumber.js": 2804,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = T);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = E(e("prop-types")),
                  o = E(e("bignumber.js")),
                  s = e("react-redux"),
                  i = e("@metamask/etherscan-link"),
                  c = e("../../contexts/i18n"),
                  l = E(e("../confirm-transaction-base")),
                  u = E(e("../../components/app/user-preferenced-currency-display")),
                  d = e("../../helpers/utils/confirm-tx.util"),
                  p = e("../../helpers/constants/common"),
                  f = e("../../selectors"),
                  m = e("../../ducks/metamask/metamask"),
                  g = e("../../../shared/constants/transaction"),
                  h = e("../../../shared/modules/conversion.utils"),
                  y = e("../../../shared/constants/common"),
                  A = e("../../../shared/constants/network");
                function E(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (v = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function T({
                  image: e = "",
                  assetName: t,
                  toAddress: n,
                  tokenAddress: r,
                  tokenAmount: E = "0",
                  tokenSymbol: v,
                  tokenId: T,
                  assetStandard: b,
                  onEdit: w,
                  ethTransactionTotal: k,
                  fiatTransactionTotal: C,
                  hexMaximumTransactionFee: x
                }) {
                  const P = (0, a.useContext)(c.I18nContext),
                    N = (0, s.useSelector)(f.contractExchangeRateSelector),
                    O = (0, s.useSelector)(m.getNativeCurrency),
                    S = (0, s.useSelector)(f.getCurrentCurrency),
                    M = (0, s.useSelector)(m.getConversionRate),
                    R = (0, s.useSelector)(f.getRpcPrefsForCurrentProvider),
                    I = (0, s.useSelector)(f.getCurrentChainId),
                    D = (0, s.useSelector)(f.getSelectedAddress),
                    B = (0, s.useSelector)(m.getNftContracts),
                    j = Number((0, h.hexWEIToDecETH)(x)),
                    L = (e) => {
                      const t =
                          (null == R ? void 0 : R.blockExplorerUrl) ||
                          [...A.TEST_CHAINS, A.CHAIN_IDS.MAINNET, A.CHAIN_IDS.LINEA_MAINNET].includes(I),
                        n = B.find((e) => e.address.toLowerCase() === r.toLowerCase()),
                        o = v || (null == n ? void 0 : n.name) || P("unknownCollection");
                      if ("text" === e) return o;
                      if (t) {
                        const e = (0, i.getTokenTrackerLink)(r, I, null, D, {
                          blockExplorerUrl: (null == R ? void 0 : R.blockExplorerUrl) ?? null
                        });
                        return a.default.createElement(
                          a.default.Fragment,
                          null,
                          a.default.createElement(
                            "a",
                            {
                              href: e,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              title: r,
                              className: "confirm-approve-content__approval-asset-link"
                            },
                            o
                          )
                        );
                      }
                      return a.default.createElement(
                        a.default.Fragment,
                        null,
                        a.default.createElement("span", { className: "confirm-approve-content__approval-asset-title", title: r }, o)
                      );
                    },
                    F = e;
                  let H, U, Q;
                  b === g.TokenStandard.ERC721 || b === g.TokenStandard.ERC1155
                    ? ((H = t || L()), (U = `#${T}`), (Q = t || `${L("text")} #${T}`))
                    : b === g.TokenStandard.ERC20 && ((H = `${E} ${v}`), (Q = `${E} ${v}`));
                  const G = (0, a.useMemo)(() => {
                      if ("0" === E || !N) return "0";
                      const e = new o.default(E).times(new o.default(N ? String(N) : 0)).toFixed();
                      return (0, h.getWeiHexFromDecimalValue)({
                        value: e,
                        fromCurrency: y.EtherDenomination.ETH,
                        fromDenomination: y.EtherDenomination.ETH
                      });
                    }, [E, N]),
                    W = (0, a.useMemo)(() => {
                      if (void 0 === N) return (0, d.formatCurrency)(C, S);
                      const e = (0, d.convertTokenToFiat)({ value: E, toCurrency: S, conversionRate: M, contractExchangeRate: N }),
                        t = (0, d.addFiat)(e, C),
                        n = (0, d.roundExponential)(t);
                      return (0, d.formatCurrency)(n, S);
                    }, [S, M, N, C, E]);
                  return a.default.createElement(l.default, {
                    assetStandard: b,
                    toAddress: n,
                    image: F,
                    onEdit: w,
                    tokenAddress: r,
                    title: H,
                    subtitleComponent:
                      N === undefined && U === undefined
                        ? a.default.createElement("span", null, P("noConversionRateAvailable"))
                        : U
                        ? a.default.createElement("span", null, U)
                        : a.default.createElement(u.default, { value: G, type: p.PRIMARY, showEthLogo: !0, hideLabel: !0 }),
                    primaryTotalTextOverride: `${Q} + ${k} ${O}`,
                    primaryTotalTextOverrideMaxAmount: `${Q} + ${j} ${O}`,
                    secondaryTotalTextOverride: W,
                    tokenSymbol: v
                  });
                }
                T.propTypes = {
                  image: r.default.string,
                  assetName: r.default.string,
                  toAddress: r.default.string,
                  tokenAddress: r.default.string,
                  tokenAmount: r.default.string,
                  tokenSymbol: r.default.string,
                  tokenId: r.default.string,
                  assetStandard: r.default.string,
                  onEdit: r.default.func,
                  ethTransactionTotal: r.default.string,
                  fiatTransactionTotal: r.default.string,
                  hexMaximumTransactionFee: r.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-token-transaction-base/confirm-token-transaction-base.js" }
    ],
    [
      5664,
      { "./confirm-token-transaction-base": 5663 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirm-token-transaction-base")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-token-transaction-base/index.js" }
    ],
    [
      5665,
      {
        "../../../shared/constants/keyring": 4755,
        "../../../shared/constants/metametrics": 4758,
        "../../../shared/constants/network": 4759,
        "../../../shared/constants/transaction": 4770,
        "../../../shared/modules/conversion.utils": 4784,
        "../../../shared/modules/updateTxData": 4800,
        "../../components/app/confirm-data": 4845,
        "../../components/app/confirm-gas-display": 4850,
        "../../components/app/confirm-hexdata": 4852,
        "../../components/app/confirm-page-container": 4866,
        "../../components/app/confirm-subtitle": 4869,
        "../../components/app/confirm-title": 4871,
        "../../components/app/ledger-instruction-field": 4941,
        "../../components/app/transaction-alerts": 5135,
        "../../components/app/transaction-detail-item/transaction-detail-item.component": 5153,
        "../../components/app/transaction-detail/transaction-detail.component": 5155,
        "../../components/app/user-preferenced-currency-display": 5167,
        "../../components/ui/loading-heartbeat": 5436,
        "../../components/ui/simulation-error-message": 5477,
        "../../components/ui/text-field": 5491,
        "../../contexts/transaction-modal": 5516,
        "../../helpers/constants/common": 5535,
        "../../helpers/constants/error-keys": 5538,
        "../../helpers/constants/routes": 5542,
        "../../helpers/utils/hardware": 5564,
        "../../helpers/utils/metrics": 5568,
        "../../helpers/utils/transactions.util": 5576,
        "../../store/actions": 5965,
        "../send/send.constants": 5809,
        "../send/send.utils": 5811,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = j(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = B(e("prop-types")),
                  o = B(e("../../components/app/confirm-page-container")),
                  s = e("../send/send.utils"),
                  i = e("../../helpers/constants/routes"),
                  c = e("../../helpers/constants/error-keys"),
                  l = B(e("../../components/app/user-preferenced-currency-display")),
                  u = e("../../helpers/constants/common"),
                  d = B(e("../../components/ui/text-field")),
                  p = B(e("../../components/ui/simulation-error-message")),
                  f = e("../../../shared/constants/metametrics"),
                  m = e("../../../shared/constants/transaction"),
                  g = e("../../helpers/utils/metrics"),
                  h = e("../../helpers/utils/transactions.util"),
                  y = e("../../contexts/transaction-modal"),
                  A = B(e("../../components/app/transaction-detail/transaction-detail.component")),
                  E = B(e("../../components/app/transaction-detail-item/transaction-detail-item.component")),
                  v = B(e("../../components/ui/loading-heartbeat")),
                  T = B(e("../../components/app/ledger-instruction-field")),
                  b = e("../../store/actions"),
                  w = e("../send/send.constants"),
                  k = e("../../../shared/constants/network"),
                  C = e("../../../shared/modules/conversion.utils"),
                  x = B(e("../../components/app/transaction-alerts")),
                  P = e("../../components/app/confirm-hexdata"),
                  N = e("../../components/app/confirm-data"),
                  O = e("../../components/app/confirm-title"),
                  S = e("../../components/app/confirm-subtitle"),
                  M = e("../../components/app/confirm-gas-display"),
                  R = B(e("../../../shared/modules/updateTxData")),
                  I = e("../../../shared/constants/keyring"),
                  D = e("../../helpers/utils/hardware");
                function B(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function j(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (j = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function L(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class F extends a.Component {
                  constructor(...e) {
                    super(...e),
                      L(this, "state", {
                        submitting: !1,
                        submitError: null,
                        submitWarning: "",
                        ethGasPriceWarning: "",
                        editingGas: !1,
                        userAcknowledgedGasMissing: !1,
                        showWarningModal: !1
                      }),
                      L(this, "_beforeUnloadForGasPolling", () => {
                        (this._isMounted = !1),
                          this.state.pollingToken &&
                            ((0, b.disconnectGasFeeEstimatePoller)(this.state.pollingToken),
                            (0, b.removePollingTokenFromAppState)(this.state.pollingToken));
                      }),
                      L(this, "_removeBeforeUnload", () => {
                        window.removeEventListener("beforeunload", this._beforeUnloadForGasPolling);
                      }),
                      L(this, "supportsEIP1559", this.props.supportsEIP1559 && !(0, h.isLegacyTransaction)(this.props.txData));
                  }
                  componentDidUpdate(e) {
                    const {
                        transactionStatus: t,
                        showTransactionConfirmedModal: n,
                        history: a,
                        clearConfirmTransaction: r,
                        nextNonce: o,
                        customNonceValue: s,
                        toAddress: l,
                        tryReverseResolveAddress: u,
                        isEthGasPrice: d,
                        setDefaultHomeActiveTabName: p
                      } = this.props,
                      { customNonceValue: f, nextNonce: g, toAddress: h, transactionStatus: y, isEthGasPrice: A } = e,
                      E = t !== y,
                      v = t === m.TransactionStatus.dropped || t === m.TransactionStatus.confirmed;
                    (o === g && s === f) ||
                      (null !== o && s > o
                        ? this.setState({ submitWarning: this.context.t("nextNonceWarning", [o]) })
                        : this.setState({ submitWarning: "" })),
                      E &&
                        v &&
                        n({
                          onSubmit: () => {
                            r(),
                              p("activity").then(() => {
                                a.push(i.DEFAULT_ROUTE);
                              });
                          }
                        }),
                      l && l !== h && u(l),
                      d !== A &&
                        (d
                          ? this.setState({ ethGasPriceWarning: this.context.t(c.ETH_GAS_PRICE_FETCH_WARNING_KEY) })
                          : this.setState({ ethGasPriceWarning: "" }));
                  }
                  getErrorKey() {
                    const {
                      balance: e,
                      conversionRate: t,
                      hexMaximumTransactionFee: n,
                      txData: { txParams: { value: a } = {} } = {},
                      customGas: r,
                      noGasPrice: o,
                      gasFeeIsCustom: i
                    } = this.props;
                    return e && !(0, s.isBalanceSufficient)({ amount: a, gasTotal: n || "0x0", balance: e, conversionRate: t })
                      ? { valid: !1, errorKey: c.INSUFFICIENT_FUNDS_ERROR_KEY }
                      : (0, C.hexToDecimal)(r.gasLimit) < Number(w.MIN_GAS_LIMIT_DEC)
                      ? { valid: !1, errorKey: c.GAS_LIMIT_TOO_LOW_ERROR_KEY }
                      : o && !i
                      ? { valid: !1, errorKey: c.GAS_PRICE_FETCH_FAILURE_ERROR_KEY }
                      : { valid: !0 };
                  }
                  handleEditGas() {
                    const {
                      actionKey: e,
                      txData: { origin: t },
                      methodData: n = {}
                    } = this.props;
                    this.context.trackEvent({
                      category: f.MetaMetricsEventCategory.Transactions,
                      event: 'User clicks "Edit" on gas',
                      properties: {
                        action: "Confirm Screen",
                        legacy_event: !0,
                        recipientKnown: null,
                        functionType: e || (0, g.getMethodName)(n.name) || m.TransactionType.contractInteraction,
                        origin: t
                      }
                    }),
                      this.setState({ editingGas: !0 });
                  }
                  handleCloseEditGas() {
                    this.setState({ editingGas: !1 });
                  }
                  setUserAcknowledgedGasMissing() {
                    this.setState({ userAcknowledgedGasMissing: !0 });
                  }
                  renderDetails() {
                    var e, t;
                    const {
                        primaryTotalTextOverride: n,
                        secondaryTotalTextOverride: r,
                        hexMaximumTransactionFee: o,
                        hexTransactionTotal: s,
                        useNonceField: i,
                        customNonceValue: c,
                        updateCustomNonce: f,
                        nextNonce: m,
                        getNextNonce: g,
                        txData: h,
                        useNativeCurrencyAsPrimaryCurrency: y,
                        primaryTotalTextOverrideMaxAmount: b,
                        showLedgerSteps: w,
                        isMultiLayerFeeNetwork: P,
                        nativeCurrency: N,
                        isBuyableChain: O,
                        useCurrencyRateCheck: S,
                        tokenSymbol: R
                      } = this.props,
                      { t: I } = this.context,
                      { userAcknowledgedGasMissing: D } = this.state,
                      { valid: B } = this.getErrorKey(),
                      j = Boolean(h.simulationFails) && !D,
                      L = k.NETWORK_TO_NAME_MAP[h.chainId],
                      F = i
                        ? a.default.createElement(
                            "div",
                            null,
                            a.default.createElement(
                              "div",
                              { className: "confirm-detail-row" },
                              a.default.createElement("div", { className: "confirm-detail-row__label" }, I("nonceFieldHeading")),
                              a.default.createElement(
                                "div",
                                { className: "custom-nonce-input" },
                                a.default.createElement(d.default, {
                                  type: "number",
                                  min: 0,
                                  placeholder: "number" == typeof m ? m.toString() : null,
                                  onChange: ({ target: { value: e } }) => {
                                    !e.length || Number(e) < 0 ? f("") : f(String(Math.floor(e))), g();
                                  },
                                  fullWidth: !0,
                                  margin: "dense",
                                  value: c || ""
                                })
                              )
                            )
                          )
                        : null;
                    return a.default.createElement(
                      "div",
                      { className: "confirm-page-container-content__details" },
                      a.default.createElement(x.default, {
                        txData: h,
                        setUserAcknowledgedGasMissing: () => this.setUserAcknowledgedGasMissing(),
                        userAcknowledgedGasMissing: D,
                        nativeCurrency: N,
                        networkName: L,
                        type: h.type,
                        isBuyableChain: O,
                        tokenSymbol: R
                      }),
                      a.default.createElement(A.default, {
                        disabled: !D && !B,
                        userAcknowledgedGasMissing: D,
                        onEdit: j ? null : () => this.handleEditGas(),
                        rows: [
                          j &&
                            (() =>
                              a.default.createElement(
                                "div",
                                {
                                  className: "confirm-page-container-content__error-container",
                                  key: "confirm-transaction-base_simulation-error-container"
                                },
                                a.default.createElement(p.default, {
                                  userAcknowledgedGasMissing: D,
                                  setUserAcknowledgedGasMissing: () => this.setUserAcknowledgedGasMissing()
                                })
                              ))(),
                          !j &&
                            a.default.createElement(M.ConfirmGasDisplay, {
                              key: "confirm-transaction-base_confirm-gas-display",
                              userAcknowledgedGasMissing: D
                            }),
                          !P &&
                            a.default.createElement(E.default, {
                              key: "confirm-transaction-base-total-item",
                              detailTitle: I("total"),
                              detailText:
                                S &&
                                (() => {
                                  var e;
                                  return n === undefined && r === undefined
                                    ? a.default.createElement(
                                        "div",
                                        { className: "confirm-page-container-content__total-value" },
                                        a.default.createElement(v.default, {
                                          estimateUsed: null === (e = this.props.txData) || void 0 === e ? void 0 : e.userFeeLevel
                                        }),
                                        a.default.createElement(l.default, {
                                          type: u.SECONDARY,
                                          key: "total-detail-text",
                                          value: s,
                                          hideLabel: Boolean(y)
                                        })
                                      )
                                    : y
                                    ? r
                                    : n;
                                })(),
                              detailTotal: (() => {
                                var e;
                                return n === undefined && r === undefined
                                  ? a.default.createElement(
                                      "div",
                                      { className: "confirm-page-container-content__total-value" },
                                      a.default.createElement(v.default, {
                                        estimateUsed: null === (e = this.props.txData) || void 0 === e ? void 0 : e.userFeeLevel
                                      }),
                                      a.default.createElement(l.default, {
                                        type: u.PRIMARY,
                                        key: "total-detail-value",
                                        value: s,
                                        hideLabel: !y
                                      })
                                    )
                                  : y
                                  ? n
                                  : r;
                              })(),
                              subTitle: I("transactionDetailGasTotalSubtitle"),
                              subText: a.default.createElement(
                                "div",
                                { className: "confirm-page-container-content__total-amount" },
                                a.default.createElement(v.default, {
                                  estimateUsed: null === (e = this.props.txData) || void 0 === e ? void 0 : e.userFeeLevel
                                }),
                                a.default.createElement("strong", { key: "editGasSubTextAmountLabel" }, I("editGasSubTextAmountLabel")),
                                " ",
                                b === undefined && r === undefined
                                  ? a.default.createElement(l.default, {
                                      type: u.PRIMARY,
                                      key: "total-max-amount",
                                      value: (0, C.addHexes)(h.txParams.value, o),
                                      hideLabel: !y
                                    })
                                  : y
                                  ? b
                                  : r
                              )
                            })
                        ]
                      }),
                      F,
                      w
                        ? a.default.createElement(T.default, {
                            showDataInstruction: Boolean(null === (t = h.txParams) || void 0 === t ? void 0 : t.data)
                          })
                        : null
                    );
                  }
                  renderData() {
                    const { txData: e, dataComponent: t } = this.props,
                      {
                        txParams: { data: n }
                      } = e;
                    return n ? a.default.createElement(N.ConfirmData, { txData: e, dataComponent: t }) : null;
                  }
                  renderDataHex() {
                    const { txData: e, dataHexComponent: t } = this.props,
                      {
                        txParams: { data: n, to: r }
                      } = e;
                    return n && r ? a.default.createElement(P.ConfirmHexData, { txData: e, dataHexComponent: t }) : null;
                  }
                  handleEdit() {
                    const {
                      txData: e,
                      tokenData: t,
                      tokenProps: n,
                      onEdit: a,
                      actionKey: r,
                      txData: { origin: o },
                      methodData: s = {}
                    } = this.props;
                    this.context.trackEvent({
                      category: f.MetaMetricsEventCategory.Transactions,
                      event: "Edit Transaction",
                      properties: {
                        action: "Confirm Screen",
                        legacy_event: !0,
                        recipientKnown: null,
                        functionType: r || (0, g.getMethodName)(s.name) || m.TransactionType.contractInteraction,
                        origin: o
                      }
                    }),
                      a({ txData: e, tokenData: t, tokenProps: n });
                  }
                  handleCancelAll() {
                    const {
                      cancelAllTransactions: e,
                      clearConfirmTransaction: t,
                      history: n,
                      mostRecentOverviewPage: a,
                      showRejectTransactionsConfirmationModal: r,
                      unapprovedTxCount: o
                    } = this.props;
                    r({
                      unapprovedTxCount: o,
                      onSubmit: async () => {
                        this._removeBeforeUnload(), await e(), t(), n.push(a);
                      }
                    });
                  }
                  async handleCancel() {
                    const { txData: e, cancelTransaction: t, history: n, mostRecentOverviewPage: a, updateCustomNonce: r } = this.props;
                    this._removeBeforeUnload(), r(""), await t(e), n.push(a);
                  }
                  handleSubmit() {
                    const { submitting: e } = this.state;
                    e || (this.props.isMainBetaFlask ? this.handleMainSubmit() : this.handleMMISubmit());
                  }
                  handleMainSubmit() {
                    const {
                      sendTransaction: e,
                      txData: t,
                      history: n,
                      mostRecentOverviewPage: a,
                      updateCustomNonce: r,
                      methodData: o,
                      maxFeePerGas: s,
                      customTokenAmount: i,
                      dappProposedTokenAmount: c,
                      currentTokenBalance: l,
                      maxPriorityFeePerGas: u,
                      baseFeePerGas: d,
                      addToAddressBookIfNew: p,
                      toAccounts: f,
                      toAddress: m,
                      keyringForAccount: g
                    } = this.props;
                    let h;
                    if ((null == g ? void 0 : g.type) === I.KeyringType.snap) h = this.context.t("loadingScreenSnapMessage");
                    else
                      h = (0, D.isHardwareKeyring)(null == g ? void 0 : g.type)
                        ? this.context.t("loadingScreenHardwareWalletMessage")
                        : null;
                    (0, R.default)({
                      txData: t,
                      maxFeePerGas: s,
                      customTokenAmount: i,
                      dappProposedTokenAmount: c,
                      currentTokenBalance: l,
                      maxPriorityFeePerGas: u,
                      baseFeePerGas: d,
                      addToAddressBookIfNew: p,
                      toAccounts: f,
                      toAddress: m,
                      name: o.name
                    }),
                      this.setState({ submitting: !0, submitError: null }, () => {
                        this._removeBeforeUnload(),
                          e(t, !1, h)
                            .then(() => {
                              this._isMounted &&
                                this.setState({ submitting: !1 }, () => {
                                  n.push(a), r("");
                                });
                            })
                            .catch((e) => {
                              this._isMounted && (this.setState({ submitting: !1, submitError: e.message }), r(""));
                            });
                      });
                  }
                  handleMMISubmit() {
                    const {
                        sendTransaction: e,
                        txData: t,
                        history: n,
                        mostRecentOverviewPage: a,
                        updateCustomNonce: r,
                        unapprovedTxCount: o,
                        accountType: s,
                        isNotification: i,
                        setWaitForConfirmDeepLinkDialog: c,
                        showTransactionsFailedModal: l,
                        fromAddress: u,
                        isNoteToTraderSupported: d,
                        methodData: p,
                        maxFeePerGas: f,
                        customTokenAmount: m,
                        dappProposedTokenAmount: g,
                        currentTokenBalance: h,
                        maxPriorityFeePerGas: y,
                        baseFeePerGas: A,
                        addToAddressBookIfNew: E,
                        toAccounts: v,
                        toAddress: T,
                        showCustodianDeepLink: b,
                        clearConfirmTransaction: w
                      } = this.props,
                      { noteText: k } = this.state;
                    "custody" === s && ((t.custodyStatus = "created"), d && (t.metadata = { note: k })),
                      (0, R.default)({
                        txData: t,
                        maxFeePerGas: f,
                        customTokenAmount: m,
                        dappProposedTokenAmount: g,
                        currentTokenBalance: h,
                        maxPriorityFeePerGas: y,
                        baseFeePerGas: A,
                        addToAddressBookIfNew: E,
                        toAccounts: v,
                        toAddress: T,
                        name: p.name
                      }),
                      this.setState({ submitting: !0, submitError: null }, () => {
                        this._removeBeforeUnload(),
                          t.custodyStatus && c(!0),
                          e(t)
                            .then(() => {
                              if (t.custodyStatus)
                                b({
                                  fromAddress: u,
                                  closeNotification: i && 1 === o,
                                  txId: t.id,
                                  onDeepLinkFetched: () => {
                                    this.context.trackEvent({ category: "MMI", event: "Show deeplink for transaction" });
                                  },
                                  onDeepLinkShown: () => {
                                    w(),
                                      this._isMounted &&
                                        this.setState({ submitting: !1 }, () => {
                                          n.push(a), r("");
                                        });
                                  }
                                });
                              else {
                                if (!this._isMounted) return;
                                this.setState({ submitting: !1 }, () => {
                                  n.push(a), r("");
                                });
                              }
                            })
                            .catch((e) => {
                              this._isMounted && (l(e.message, i), this.setState({ submitting: !1, submitError: e.message }), c(!0), r(""));
                            });
                      });
                  }
                  handleSetApprovalForAll() {
                    this.setState({ showWarningModal: !0 });
                  }
                  renderTitleComponent() {
                    const { title: e, hexTransactionAmount: t, txData: n } = this.props;
                    return a.default.createElement(O.ConfirmTitle, { title: e, hexTransactionAmount: t, txData: n });
                  }
                  renderSubtitleComponent() {
                    const { assetStandard: e, subtitleComponent: t, hexTransactionAmount: n, txData: r } = this.props;
                    return a.default.createElement(S.ConfirmSubTitle, {
                      hexTransactionAmount: n,
                      subtitleComponent: t,
                      txData: r,
                      assetStandard: e
                    });
                  }
                  componentDidMount() {
                    this._isMounted = !0;
                    const { toAddress: e, txData: { origin: t } = {}, getNextNonce: n, tryReverseResolveAddress: a } = this.props,
                      { trackEvent: r } = this.context;
                    r({
                      category: f.MetaMetricsEventCategory.Transactions,
                      event: "Confirm: Started",
                      properties: { action: "Confirm Screen", legacy_event: !0, origin: t }
                    }),
                      n(),
                      e && a(e),
                      (0, b.getGasFeeEstimatesAndStartPolling)().then((e) => {
                        this._isMounted
                          ? ((0, b.addPollingTokenToAppState)(e), this.setState({ pollingToken: e }))
                          : ((0, b.disconnectGasFeeEstimatePoller)(e), (0, b.removePollingTokenFromAppState)(this.state.pollingToken));
                      }),
                      window.addEventListener("beforeunload", this._beforeUnloadForGasPolling);
                  }
                  componentWillUnmount() {
                    this._beforeUnloadForGasPolling(), this._removeBeforeUnload(), this.props.clearConfirmTransaction();
                  }
                  render() {
                    const { t: e } = this.context,
                      {
                        fromName: t,
                        fromAddress: n,
                        toName: r,
                        toAddress: s,
                        toEns: i,
                        toNickname: c,
                        methodData: l,
                        tokenAddress: u,
                        contentComponent: d,
                        onEdit: p,
                        nonce: f,
                        customNonceValue: A,
                        unapprovedTxCount: E,
                        type: v,
                        hideSenderToRecipient: T,
                        showAccountInHeader: b,
                        txData: w,
                        gasIsLoading: k,
                        gasFeeIsCustom: C,
                        nativeCurrency: x,
                        hardwareWalletRequiresConnection: P,
                        image: N,
                        isApprovalOrRejection: O,
                        assetStandard: S,
                        displayAccountBalanceHeader: M,
                        title: R
                      } = this.props,
                      {
                        submitting: I,
                        submitError: D,
                        submitWarning: B,
                        ethGasPriceWarning: j,
                        editingGas: L,
                        userAcknowledgedGasMissing: F,
                        showWarningModal: H
                      } = this.state,
                      { name: U } = l,
                      { valid: Q, errorKey: G } = this.getErrorKey(),
                      W = Boolean(w.simulationFails),
                      K = W && !F,
                      Y = w.type === m.TransactionType.tokenMethodSetApprovalForAll || w.type === m.TransactionType.tokenMethodApprove,
                      z = w.type === m.TransactionType.contractInteraction,
                      q = (Y || z) && "metamask" !== w.origin;
                    let Z;
                    return (
                      q && (Z = (0, g.getMethodName)(U)),
                      Z || (Z = v ? (0, h.getTransactionTypeTitle)(e, v, x) : e("contractInteraction")),
                      a.default.createElement(
                        y.TransactionModalContextProvider,
                        null,
                        a.default.createElement(o.default, {
                          fromName: t,
                          fromAddress: n,
                          showAccountInHeader: b,
                          toName: r,
                          toAddress: s,
                          toEns: i,
                          toNickname: c,
                          showEdit: !q && Boolean(p),
                          action: Z,
                          image: N,
                          title: R,
                          titleComponent: this.renderTitleComponent(),
                          subtitleComponent: this.renderSubtitleComponent(),
                          detailsComponent: this.renderDetails(),
                          dataComponent: this.renderData(Z),
                          dataHexComponent: this.renderDataHex(Z),
                          contentComponent: d,
                          nonce: A || f,
                          unapprovedTxCount: E,
                          tokenAddress: u,
                          errorMessage: D,
                          errorKey: G,
                          hasSimulationError: W,
                          warning: B,
                          disabled: K || !Q || I || P || (k && !C),
                          onEdit: () => this.handleEdit(),
                          onCancelAll: () => this.handleCancelAll(),
                          onCancel: () => this.handleCancel(),
                          onSubmit: () => this.handleSubmit(),
                          onSetApprovalForAll: () => this.handleSetApprovalForAll(),
                          showWarningModal: H,
                          hideSenderToRecipient: T,
                          origin: w.origin,
                          ethGasPriceWarning: j,
                          editingGas: L,
                          handleCloseEditGas: () => this.handleCloseEditGas(),
                          currentTransaction: w,
                          supportsEIP1559: this.supportsEIP1559,
                          nativeCurrency: x,
                          isApprovalOrRejection: O,
                          assetStandard: S,
                          txData: w,
                          displayAccountBalanceHeader: M
                        })
                      )
                    );
                  }
                }
                (n.default = F),
                  L(F, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                  L(F, "propTypes", {
                    history: r.default.object,
                    balance: r.default.string,
                    cancelTransaction: r.default.func,
                    cancelAllTransactions: r.default.func,
                    clearConfirmTransaction: r.default.func,
                    conversionRate: r.default.number,
                    fromAddress: r.default.string,
                    fromName: r.default.string,
                    hexTransactionAmount: r.default.string,
                    hexMaximumTransactionFee: r.default.string,
                    hexTransactionTotal: r.default.string,
                    methodData: r.default.object,
                    nonce: r.default.string,
                    useNonceField: r.default.bool,
                    customNonceValue: r.default.string,
                    updateCustomNonce: r.default.func,
                    sendTransaction: r.default.func,
                    showTransactionConfirmedModal: r.default.func,
                    showRejectTransactionsConfirmationModal: r.default.func,
                    toAccounts: r.default.array,
                    toAddress: r.default.string,
                    tokenData: r.default.object,
                    tokenProps: r.default.object,
                    toName: r.default.string,
                    toEns: r.default.string,
                    toNickname: r.default.string,
                    transactionStatus: r.default.string,
                    txData: r.default.object,
                    unapprovedTxCount: r.default.number,
                    customGas: r.default.object,
                    addToAddressBookIfNew: r.default.func,
                    keyringForAccount: r.default.object,
                    actionKey: r.default.string,
                    contentComponent: r.default.node,
                    dataComponent: r.default.node,
                    dataHexComponent: r.default.node,
                    tokenAddress: r.default.string,
                    customTokenAmount: r.default.string,
                    dappProposedTokenAmount: r.default.string,
                    currentTokenBalance: r.default.string,
                    onEdit: r.default.func,
                    subtitleComponent: r.default.node,
                    title: r.default.string,
                    image: r.default.string,
                    type: r.default.string,
                    getNextNonce: r.default.func,
                    nextNonce: r.default.number,
                    tryReverseResolveAddress: r.default.func.isRequired,
                    hideSenderToRecipient: r.default.bool,
                    showAccountInHeader: r.default.bool,
                    mostRecentOverviewPage: r.default.string.isRequired,
                    isEthGasPrice: r.default.bool,
                    noGasPrice: r.default.bool,
                    setDefaultHomeActiveTabName: r.default.func,
                    primaryTotalTextOverride: r.default.string,
                    secondaryTotalTextOverride: r.default.string,
                    gasIsLoading: r.default.bool,
                    primaryTotalTextOverrideMaxAmount: r.default.string,
                    useNativeCurrencyAsPrimaryCurrency: r.default.bool,
                    maxFeePerGas: r.default.string,
                    maxPriorityFeePerGas: r.default.string,
                    baseFeePerGas: r.default.string,
                    gasFeeIsCustom: r.default.bool,
                    showLedgerSteps: r.default.bool.isRequired,
                    nativeCurrency: r.default.string,
                    supportsEIP1559: r.default.bool,
                    hardwareWalletRequiresConnection: r.default.bool,
                    isMultiLayerFeeNetwork: r.default.bool,
                    isBuyableChain: r.default.bool,
                    isApprovalOrRejection: r.default.bool,
                    assetStandard: r.default.string,
                    useCurrencyRateCheck: r.default.bool,
                    isNotification: r.default.bool,
                    accountType: r.default.string,
                    setWaitForConfirmDeepLinkDialog: r.default.func,
                    showTransactionsFailedModal: r.default.func,
                    showCustodianDeepLink: r.default.func,
                    isNoteToTraderSupported: r.default.bool,
                    isMainBetaFlask: r.default.bool,
                    displayAccountBalanceHeader: r.default.bool,
                    tokenSymbol: r.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-transaction-base/confirm-transaction-base.component.js" }
    ],
    [
      5666,
      {
        "../../../app/scripts/lib/util": 91,
        "../../../shared/constants/gas": 4753,
        "../../../shared/constants/transaction": 4770,
        "../../../shared/lib/transactions-controller-utils": 4778,
        "../../../shared/modules/hexstring-utils": 4788,
        "../../../shared/modules/transaction.utils": 4799,
        "../../ducks/app/app": 5521,
        "../../ducks/confirm-transaction/confirm-transaction.duck": 5522,
        "../../ducks/history/history": 5526,
        "../../ducks/metamask/metamask": 5529,
        "../../helpers/utils/token-util": 5575,
        "../../helpers/utils/transactions.util": 5576,
        "../../helpers/utils/util": 5578,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "../send/send.utils": 5811,
        "./confirm-transaction-base.component": 5665,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.mapDispatchToProps = n.default = void 0);
                var a,
                  r = e("react-redux"),
                  o = e("redux"),
                  s = e("react-router-dom"),
                  i = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                  c = e("../../store/actions"),
                  l = e("../send/send.utils"),
                  u = e("../../helpers/utils/util"),
                  d = e("../../selectors"),
                  p = e("../../ducks/history/history"),
                  f = e("../../ducks/metamask/metamask"),
                  m = e("../../../app/scripts/lib/util"),
                  g = e("../../../shared/modules/transaction.utils"),
                  h = e("../../../shared/modules/hexstring-utils"),
                  y = e("../../ducks/app/app"),
                  A = e("../../helpers/utils/transactions.util"),
                  E = e("../../../shared/constants/gas"),
                  v = e("../../../shared/constants/transaction"),
                  T = e("../../helpers/utils/token-util"),
                  b = e("../../../shared/lib/transactions-controller-utils"),
                  w = (a = e("./confirm-transaction-base.component")) && a.__esModule ? a : { default: a };
                let k = "";
                const C = (e) => ({
                  tryReverseResolveAddress: (t) => e((0, c.tryReverseResolveAddress)(t)),
                  updateCustomNonce: (t) => {
                    (k = t), e((0, c.updateCustomNonce)(t));
                  },
                  clearConfirmTransaction: () => e((0, i.clearConfirmTransaction)()),
                  showTransactionConfirmedModal: ({ onSubmit: t }) => e((0, c.showModal)({ name: "TRANSACTION_CONFIRMED", onSubmit: t })),
                  showRejectTransactionsConfirmationModal: ({ onSubmit: t, unapprovedTxCount: n }) =>
                    e((0, c.showModal)({ name: "REJECT_TRANSACTIONS", onSubmit: t, unapprovedTxCount: n })),
                  cancelTransaction: ({ id: t }) => e((0, c.cancelTx)({ id: t })),
                  cancelAllTransactions: (t) => e((0, c.cancelTxs)(t)),
                  sendTransaction: (t, n, a) => e((0, c.updateAndApproveTx)(((e) => (k ? { ...e, customNonceValue: k } : e))(t), n, a)),
                  getNextNonce: () => e((0, c.getNextNonce)()),
                  setDefaultHomeActiveTabName: (t) => e((0, c.setDefaultHomeActiveTabName)(t)),
                  updateTransactionGasFees: (t) => {
                    e((0, f.updateGasFees)({ ...t, expectHexWei: !0 }));
                  },
                  addToAddressBookIfNew: (t, n, a = "") => {
                    const r = (0, m.addHexPrefix)(t);
                    (function (e, t) {
                      const n = t.toLowerCase();
                      return !e.some(({ address: e }) => e.toLowerCase() === n);
                    })(n, r) && e((0, c.addToAddressBook)(r, a));
                  }
                });
                n.mapDispatchToProps = C;
                n.default = (0, o.compose)(
                  s.withRouter,
                  (0, r.connect)(
                    (e, t) => {
                      var n, a;
                      const {
                          toAddress: r,
                          customTxParamsData: o,
                          match: { params: s = {} }
                        } = t,
                        { id: i } = s,
                        c = (0, d.getIsMainnet)(e),
                        m = (0, f.getIsGasEstimatesLoading)(e),
                        w = (0, y.getGasLoadingAnimationIsShowing)(e),
                        C = (0, d.getIsBuyableChain)(e),
                        { confirmTransaction: x, metamask: P } = e,
                        { conversionRate: N, identities: O, addressBook: S, nextNonce: M } = P,
                        R = (0, d.getUnapprovedTransactions)(e),
                        { chainId: I } = (0, f.getProviderConfig)(e),
                        { tokenData: D, txData: B, tokenProps: j, nonce: L } = x,
                        { txParams: F = {}, id: H, type: U } = B,
                        Q = H || i,
                        G = (0, d.getUnapprovedTransaction)(e, Q),
                        { from: W, to: K, gasPrice: Y, gas: z, value: q, data: Z } = (G && G.txParams) || F,
                        J = (0, d.getMetaMaskAccounts)(e),
                        V = (0, g.parseStandardTokenTransactionData)(Z),
                        X = (0, T.getTokenAddressParam)(V),
                        { balance: _ } = J[W],
                        { name: $ } = O[W],
                        ee = (0, f.findKeyringForAddress)(e, W),
                        te = U === v.TransactionType.simpleSend || !(0, h.isEmptyHexString)(q) ? K : r || X || K,
                        ne = (0, f.getSendToAccounts)(e),
                        ae = (0, d.getTokenList)(e),
                        re =
                          (null === (n = O[te]) || void 0 === n ? void 0 : n.name) ||
                          (null === (a = ae[null == te ? void 0 : te.toLowerCase()]) || void 0 === a ? void 0 : a.name) ||
                          (0, u.shortenAddress)((0, h.toChecksumHexAddress)(te)),
                        oe = (0, h.toChecksumHexAddress)(te),
                        se = S && S[I] && S[I][oe],
                        ie = (0, d.getEnsResolutionByAddress)(e, oe),
                        ce = se ? se.name : "",
                        le = G ? G.status : "",
                        ue = (0, d.checkNetworkAndAccountSupports1559)(e) && !(0, A.isLegacyTransaction)(F),
                        {
                          hexTransactionAmount: de,
                          hexMaximumTransactionFee: pe,
                          hexTransactionTotal: fe,
                          gasEstimationObject: me
                        } = (0, d.transactionFeeSelector)(e, G),
                        ge = Object.keys(R)
                          .filter((e) => R[e].chainId === I)
                          .reduce((e, t) => ({ ...e, [t]: R[t] }), {}),
                        he = (0, u.valuesFor)(ge).length,
                        ye = !(0, l.isBalanceSufficient)({ amount: q, gasTotal: (0, b.calcGasTotal)(z, Y), balance: _, conversionRate: N }),
                        Ae = (0, d.getKnownMethodData)(e, Z) || {},
                        Ee = (0, d.getFullTxData)(e, Q, v.TransactionStatus.unapproved, o);
                      k = (0, d.getCustomNonceValue)(e);
                      const ve = (0, d.getIsEthGasPriceFetched)(e),
                        Te = !ue && (0, d.getNoGasPriceFetched)(e),
                        { useNativeCurrencyAsPrimaryCurrency: be } = (0, d.getPreferences)(e),
                        we = Ee.userFeeLevel === E.CUSTOM_GAS_ESTIMATE || (0, g.txParamsAreDappSuggested)(Ee),
                        ke = (0, f.isAddressLedger)(e, W),
                        Ce = (0, f.getNativeCurrency)(e),
                        xe = (0, d.doesAddressRequireLedgerHidConnection)(e, W),
                        Pe = (0, d.getIsMultiLayerFeeNetwork)(e);
                      return {
                        balance: _,
                        fromAddress: W,
                        fromName: $,
                        toAccounts: ne,
                        toAddress: te,
                        toEns: ie,
                        toName: re,
                        toNickname: ce,
                        hexTransactionAmount: de,
                        hexMaximumTransactionFee: pe,
                        hexTransactionTotal: fe,
                        txData: Ee,
                        tokenData: D,
                        methodData: Ae,
                        tokenProps: j,
                        conversionRate: N,
                        transactionStatus: le,
                        nonce: L,
                        unapprovedTxs: R,
                        unapprovedTxCount: he,
                        customGas: { gasLimit: z, gasPrice: Y },
                        advancedInlineGasShown: (0, d.getAdvancedInlineGasShown)(e),
                        useNonceField: (0, d.getUseNonceField)(e),
                        customNonceValue: k,
                        insufficientBalance: ye,
                        hideFiatConversion: !(0, d.getShouldShowFiat)(e),
                        type: U,
                        nextNonce: M,
                        mostRecentOverviewPage: (0, p.getMostRecentOverviewPage)(e),
                        isMainnet: c,
                        isEthGasPrice: ve,
                        noGasPrice: Te,
                        supportsEIP1559: ue,
                        gasIsLoading: m || w,
                        useNativeCurrencyAsPrimaryCurrency: be,
                        maxFeePerGas: me.maxFeePerGas,
                        maxPriorityFeePerGas: me.maxPriorityFeePerGas,
                        baseFeePerGas: me.baseFeePerGas,
                        gasFeeIsCustom: we,
                        showLedgerSteps: ke,
                        nativeCurrency: Ce,
                        hardwareWalletRequiresConnection: xe,
                        isMultiLayerFeeNetwork: Pe,
                        chainId: I,
                        isBuyableChain: C,
                        useCurrencyRateCheck: (0, d.getUseCurrencyRateCheck)(e),
                        keyringForAccount: ee
                      };
                    },
                    C,
                    (e, t, n) => {
                      const { txData: a, unapprovedTxs: r } = e,
                        { cancelAllTransactions: o, updateTransactionGasFees: s, ...i } = t;
                      let c = n.isMainBetaFlask || !1;
                      return (
                        n.isMainBetaFlask === undefined && (c = !0),
                        {
                          ...e,
                          ...i,
                          ...n,
                          cancelAllTransactions: () => o((0, u.valuesFor)(r)),
                          updateGasAndCalculate: ({ gasLimit: e, gasPrice: t }) => {
                            s({ gasLimit: e, gasPrice: t, transaction: a });
                          },
                          isMainBetaFlask: c
                        }
                      );
                    }
                  )
                )(w.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-transaction-base/confirm-transaction-base.container.js" }
    ],
    [
      5667,
      { "./confirm-transaction-base.container": 5666 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirm-transaction-base.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-transaction-base/index.js" }
    ],
    [
      5668,
      {
        "../../../shared/constants/app": 4749,
        "../../../shared/constants/transaction": 4770,
        "../../components/ui/loading-screen": 5439,
        "../../helpers/constants/routes": 5542,
        "prop-types": 4219,
        react: 4475,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r,
                  o,
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  i = f(e("prop-types")),
                  c = e("react-router-dom"),
                  l = f(e("../../components/ui/loading-screen")),
                  u = e("../../helpers/constants/routes"),
                  d = e("../../../shared/constants/app"),
                  p = e("../../../shared/constants/transaction");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (m = function (e) {
                    return e ? n : t;
                  })(e);
                }
                class g extends s.Component {
                  redirectToTransaction() {
                    const { txData: e } = this.props,
                      { id: t, txParams: { data: n } = {}, type: a } = e;
                    if (a === p.TransactionType.deployContract) {
                      const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_DEPLOY_CONTRACT_PATH}`;
                      return s.default.createElement(c.Redirect, { to: { pathname: e } });
                    }
                    if (a === p.TransactionType.simpleSend) {
                      const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_SEND_ETHER_PATH}`;
                      return s.default.createElement(c.Redirect, { to: { pathname: e } });
                    }
                    if (n)
                      switch (a) {
                        case p.TransactionType.tokenMethodTransfer: {
                          const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_SEND_TOKEN_PATH}`;
                          return s.default.createElement(c.Redirect, { to: { pathname: e } });
                        }
                        case p.TransactionType.tokenMethodApprove: {
                          const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_APPROVE_PATH}`;
                          return s.default.createElement(c.Redirect, { to: { pathname: e } });
                        }
                        case p.TransactionType.tokenMethodSetApprovalForAll: {
                          const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_SET_APPROVAL_FOR_ALL_PATH}`;
                          return s.default.createElement(c.Redirect, { to: { pathname: e } });
                        }
                        case p.TransactionType.tokenMethodTransferFrom: {
                          const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_TRANSFER_FROM_PATH}`;
                          return s.default.createElement(c.Redirect, { to: { pathname: e } });
                        }
                        case p.TransactionType.tokenMethodSafeTransferFrom: {
                          const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_SAFE_TRANSFER_FROM_PATH}`;
                          return s.default.createElement(c.Redirect, { to: { pathname: e } });
                        }
                        default: {
                          const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_TOKEN_METHOD_PATH}`;
                          return s.default.createElement(c.Redirect, { to: { pathname: e } });
                        }
                      }
                    const r = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_SEND_ETHER_PATH}`;
                    return s.default.createElement(c.Redirect, { to: { pathname: r } });
                  }
                  render() {
                    const { txData: e } = this.props;
                    if (e.txParams) return this.redirectToTransaction();
                    if (e.msgParams) {
                      let t = `${u.CONFIRM_TRANSACTION_ROUTE}/${e.id}${u.SIGNATURE_REQUEST_PATH}`;
                      return (
                        e.type === d.MESSAGE_TYPE.ETH_DECRYPT
                          ? (t = `${u.CONFIRM_TRANSACTION_ROUTE}/${e.id}${u.DECRYPT_MESSAGE_REQUEST_PATH}`)
                          : e.type === d.MESSAGE_TYPE.ETH_GET_ENCRYPTION_PUBLIC_KEY &&
                            (t = `${u.CONFIRM_TRANSACTION_ROUTE}/${e.id}${u.ENCRYPTION_PUBLIC_KEY_REQUEST_PATH}`),
                        s.default.createElement(c.Redirect, { to: { pathname: t } })
                      );
                    }
                    return s.default.createElement(l.default, null);
                  }
                }
                (n.default = g),
                  (a = g),
                  (r = "propTypes"),
                  (o = { txData: i.default.object }),
                  (r = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (n !== undefined) {
                        var a = n.call(e, t || "default");
                        if ("object" != typeof a) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : String(t);
                  })(r)) in a
                    ? Object.defineProperty(a, r, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                    : (a[r] = o);
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-transaction-switch/confirm-transaction-switch.component.js" }
    ],
    [
      5669,
      {
        "../../helpers/constants/routes": 5542,
        "../../selectors": 5958,
        "./confirm-transaction-switch.component": 5668,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  o = e("../../selectors"),
                  s = e("../../helpers/constants/routes"),
                  i = (a = e("./confirm-transaction-switch.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)((e, t) => {
                  const n = (0, o.getUnapprovedTransactions)(e),
                    {
                      match: { params: a = {}, url: r }
                    } = t,
                    i = `${s.CONFIRM_TRANSACTION_ROUTE}/`,
                    c = r.includes(i) ? r.split(i)[1] : null,
                    { id: l } = a,
                    u = l || c,
                    d = (0, o.unconfirmedTransactionsListSelector)(e);
                  return { txData: d.length ? n[u] || d[0] : {} };
                })(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-transaction-switch/confirm-transaction-switch.container.js" }
    ],
    [
      5670,
      { "./confirm-transaction-switch.container": 5669 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (a = e("./confirm-transaction-switch.container")) && a.__esModule ? a : { default: a };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-transaction-switch/index.js" }
    ],
    [
      5671,
      {
        "../../../shared/constants/transaction": 4770,
        "../../ducks/confirm-transaction/confirm-transaction.duck": 5522,
        "../../ducks/send": 5531,
        "../../helpers/constants/routes": 5542,
        "../../hooks/useAssetDetails": 5594,
        "../../selectors": 5958,
        "../confirm-approve": 5646,
        "../confirm-send-token": 5661,
        "../confirm-token-transaction-base": 5664,
        "../confirm-transaction-switch": 5670,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = A);
                var a = y(e("react")),
                  r = y(e("prop-types")),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../helpers/constants/routes"),
                  c = e("../../selectors"),
                  l = y(e("../confirm-approve")),
                  u = y(e("../confirm-send-token")),
                  d = y(e("../confirm-token-transaction-base")),
                  p = y(e("../confirm-transaction-switch")),
                  f = e("../../ducks/send"),
                  m = e("../../../shared/constants/transaction"),
                  g = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                  h = e("../../hooks/useAssetDetails");
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function A({ transaction: e }) {
                  const { txParams: { data: t, to: n, from: r } = {} } = e,
                    y = (0, o.useDispatch)(),
                    A = (0, s.useHistory)(),
                    {
                      assetStandard: E,
                      assetName: v,
                      userBalance: T,
                      tokenSymbol: b,
                      decimals: w,
                      tokenImage: k,
                      tokenAmount: C,
                      tokenId: x,
                      toAddress: P
                    } = (0, h.useAssetDetails)(n, r, t),
                    {
                      ethTransactionTotal: N,
                      fiatTransactionTotal: O,
                      hexTransactionTotal: S,
                      hexMaximumTransactionFee: M,
                      hexMinimumTransactionFee: R
                    } = (0, o.useSelector)((t) => (0, c.transactionFeeSelector)(t, e));
                  return a.default.createElement(
                    s.Switch,
                    null,
                    a.default.createElement(s.Route, {
                      exact: !0,
                      path: `${i.CONFIRM_TRANSACTION_ROUTE}/:id?${i.CONFIRM_APPROVE_PATH}`,
                      render: () =>
                        a.default.createElement(l.default, {
                          assetStandard: E,
                          assetName: v,
                          userBalance: T,
                          tokenSymbol: b,
                          decimals: w,
                          tokenImage: k,
                          tokenAmount: C,
                          tokenId: x,
                          userAddress: r,
                          tokenAddress: n,
                          toAddress: P,
                          transaction: e,
                          ethTransactionTotal: N,
                          fiatTransactionTotal: O,
                          hexTransactionTotal: S,
                          hexMinimumTransactionFee: R
                        })
                    }),
                    a.default.createElement(s.Route, {
                      exact: !0,
                      path: `${i.CONFIRM_TRANSACTION_ROUTE}/:id?${i.CONFIRM_SET_APPROVAL_FOR_ALL_PATH}`,
                      render: () =>
                        a.default.createElement(l.default, {
                          isSetApproveForAll: !0,
                          assetStandard: E,
                          assetName: v,
                          userBalance: T,
                          tokenSymbol: b,
                          decimals: w,
                          tokenImage: k,
                          tokenAmount: C,
                          tokenId: x,
                          userAddress: r,
                          tokenAddress: n,
                          toAddress: P,
                          transaction: e,
                          ethTransactionTotal: N,
                          fiatTransactionTotal: O,
                          hexTransactionTotal: S,
                          hexMinimumTransactionFee: R
                        })
                    }),
                    a.default.createElement(s.Route, {
                      exact: !0,
                      path: `${i.CONFIRM_TRANSACTION_ROUTE}/:id?${i.CONFIRM_TRANSFER_FROM_PATH}`,
                      render: () =>
                        a.default.createElement(d.default, {
                          assetStandard: E,
                          assetName: v,
                          userBalance: T,
                          tokenSymbol: b,
                          decimals: w,
                          image: k,
                          tokenAddress: n,
                          onEdit: async ({ txData: e }) => {
                            const { id: t } = e;
                            await y((0, f.editExistingTransaction)(m.AssetType.NFT, t.toString())),
                              y((0, g.clearConfirmTransaction)()),
                              A.push(i.SEND_ROUTE);
                          },
                          toAddress: P,
                          tokenAmount: C,
                          tokenId: x,
                          userAddress: r,
                          transaction: e,
                          ethTransactionTotal: N,
                          fiatTransactionTotal: O,
                          hexMaximumTransactionFee: M
                        })
                    }),
                    a.default.createElement(s.Route, {
                      exact: !0,
                      path: `${i.CONFIRM_TRANSACTION_ROUTE}/:id?${i.CONFIRM_SAFE_TRANSFER_FROM_PATH}`,
                      render: () =>
                        a.default.createElement(d.default, {
                          assetStandard: E,
                          assetName: v,
                          userBalance: T,
                          tokenSymbol: b,
                          decimals: w,
                          image: k,
                          tokenAddress: n,
                          toAddress: P,
                          tokenAmount: C,
                          tokenId: x,
                          userAddress: r,
                          transaction: e,
                          ethTransactionTotal: N,
                          fiatTransactionTotal: O,
                          hexMaximumTransactionFee: M
                        })
                    }),
                    a.default.createElement(s.Route, {
                      exact: !0,
                      path: `${i.CONFIRM_TRANSACTION_ROUTE}/:id?${i.CONFIRM_SEND_TOKEN_PATH}`,
                      render: () =>
                        a.default.createElement(u.default, {
                          assetStandard: E,
                          assetName: v,
                          tokenSymbol: b,
                          image: k,
                          tokenAddress: n,
                          toAddress: P,
                          tokenAmount: C,
                          tokenId: x,
                          transaction: e,
                          ethTransactionTotal: N,
                          fiatTransactionTotal: O,
                          hexMaximumTransactionFee: M
                        })
                    }),
                    a.default.createElement(s.Route, { path: "*", component: p.default })
                  );
                }
                A.propTypes = {
                  transaction: r.default.shape({
                    origin: r.default.string,
                    txParams: r.default.shape({ data: r.default.string, to: r.default.string, from: r.default.string })
                  })
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-transaction/confirm-token-transaction-switch.js" }
    ],
    [
      5672,
      {
        "../../../shared/constants/app": 4749,
        "../../components/ui/loading-screen": 5439,
        "../../ducks/confirm-transaction/confirm-transaction.duck": 5522,
        "../../ducks/history/history": 5526,
        "../../ducks/send": 5531,
        "../../helpers/constants/routes": 5542,
        "../../helpers/utils/transactions.util": 5576,
        "../../hooks/usePrevious": 5608,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "../confirm-contract-interaction": 5648,
        "../confirm-decrypt-message": 5651,
        "../confirm-deploy-contract": 5654,
        "../confirm-encryption-public-key": 5657,
        "../confirm-send-ether": 5659,
        "../confirm-signature-request": 5662,
        "../confirm-transaction-switch": 5670,
        "./confirm-token-transaction-switch": 5671,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = C(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = k(e("../../components/ui/loading-screen")),
                  i = k(e("../confirm-contract-interaction")),
                  c = k(e("../confirm-deploy-contract")),
                  l = k(e("../confirm-decrypt-message")),
                  u = k(e("../confirm-encryption-public-key")),
                  d = k(e("../confirm-send-ether")),
                  p = k(e("../confirm-transaction-switch")),
                  f = e("../../../shared/constants/app"),
                  m = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                  g = e("../../ducks/history/history"),
                  h = e("../../ducks/send"),
                  y = e("../../helpers/constants/routes"),
                  A = e("../../helpers/utils/transactions.util"),
                  E = e("../../hooks/usePrevious"),
                  v = e("../../selectors"),
                  T = e("../../store/actions"),
                  b = k(e("../confirm-signature-request")),
                  w = k(e("./confirm-token-transaction-switch"));
                function k(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function C(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (C = function (e) {
                    return e ? n : t;
                  })(e);
                }
                n.default = () => {
                  const e = (0, r.useDispatch)(),
                    t = (0, o.useHistory)(),
                    { id: n } = (0, o.useParams)(),
                    [k, C] = (0, a.useState)(!1),
                    [x, P] = (0, a.useState)(),
                    N = (0, r.useSelector)(g.getMostRecentOverviewPage),
                    O = (0, r.useSelector)(h.getSendTo),
                    S = (0, r.useSelector)(v.unconfirmedTransactionsListSelector),
                    M = (0, r.useSelector)(v.unconfirmedTransactionsHashSelector),
                    R = S.length || 0,
                    I = (0, a.useCallback)(() => (R ? M[n] || S[0] : {}), [n, R, M, S]),
                    [D, B] = (0, a.useState)(I),
                    j = (0, r.useSelector)(v.use4ByteResolutionSelector);
                  (0, a.useEffect)(() => {
                    const t = I();
                    B(t), null != t && t.id && e((0, m.setTransactionToConfirm)(t.id));
                  }, [e, I, n, R, M, S]);
                  const { id: L, type: F } = D,
                    H = L,
                    U = (0, A.isTokenMethodAction)(F),
                    Q = H && (!n || n === H),
                    G = (0, E.usePrevious)(n),
                    W = (0, E.usePrevious)(H),
                    K = (0, a.useCallback)(() => {
                      C(!1), x && ((0, T.disconnectGasFeeEstimatePoller)(x), (0, T.removePollingTokenFromAppState)(x));
                    }, [x]);
                  return (
                    (0, a.useEffect)(() => {
                      if (
                        (C(!0),
                        (0, T.getGasFeeEstimatesAndStartPolling)().then((e) => {
                          k
                            ? (P(e), (0, T.addPollingTokenToAppState)(e))
                            : ((0, T.disconnectGasFeeEstimatePoller)(e), (0, T.removePollingTokenFromAppState)(e));
                        }),
                        window.addEventListener("beforeunload", K),
                        R || O)
                      ) {
                        const { txParams: { data: t } = {}, origin: a } = D;
                        a !== f.ORIGIN_METAMASK && e((0, T.getContractMethodData)(t, j));
                        const r = H || n;
                        r && e((0, m.setTransactionToConfirm)(r));
                      } else t.replace(N);
                      return () => {
                        K(), window.removeEventListener("beforeunload", K);
                      };
                    }, []),
                    (0, a.useEffect)(() => {
                      if (n && H && G !== n) {
                        const { txData: { txParams: { data: t } = {}, origin: a } = {} } = D;
                        e((0, m.clearConfirmTransaction)()),
                          e((0, m.setTransactionToConfirm)(n)),
                          a !== f.ORIGIN_METAMASK && e((0, T.getContractMethodData)(t, j));
                      } else
                        !W || H || R
                          ? W && H && W !== H && n !== H && t.replace(N)
                          : e((0, T.setDefaultHomeActiveTabName)("activity")).then(() => {
                              t.replace(y.DEFAULT_ROUTE);
                            });
                    }, [e, t, N, n, G, W, R, D, H, j]),
                    U && Q
                      ? a.default.createElement(w.default, { transaction: D })
                      : Q
                      ? a.default.createElement(
                          o.Switch,
                          null,
                          a.default.createElement(o.Route, {
                            exact: !0,
                            path: `${y.CONFIRM_TRANSACTION_ROUTE}/:id?${y.CONFIRM_DEPLOY_CONTRACT_PATH}`,
                            component: c.default
                          }),
                          a.default.createElement(o.Route, {
                            exact: !0,
                            path: `${y.CONFIRM_TRANSACTION_ROUTE}/:id?${y.CONFIRM_SEND_ETHER_PATH}`,
                            component: d.default
                          }),
                          a.default.createElement(o.Route, {
                            exact: !0,
                            path: `${y.CONFIRM_TRANSACTION_ROUTE}/:id?${y.CONFIRM_TOKEN_METHOD_PATH}`,
                            component: i.default
                          }),
                          a.default.createElement(o.Route, {
                            exact: !0,
                            path: `${y.CONFIRM_TRANSACTION_ROUTE}/:id?${y.SIGNATURE_REQUEST_PATH}`,
                            component: b.default
                          }),
                          a.default.createElement(o.Route, {
                            exact: !0,
                            path: `${y.CONFIRM_TRANSACTION_ROUTE}/:id?${y.DECRYPT_MESSAGE_REQUEST_PATH}`,
                            component: l.default
                          }),
                          a.default.createElement(o.Route, {
                            exact: !0,
                            path: `${y.CONFIRM_TRANSACTION_ROUTE}/:id?${y.ENCRYPTION_PUBLIC_KEY_REQUEST_PATH}`,
                            component: u.default
                          }),
                          a.default.createElement(o.Route, { path: "*", component: p.default })
                        )
                      : a.default.createElement(s.default, null)
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-transaction/confirm-transaction.component.js" }
    ],
    [
      5673,
      { "./confirm-transaction.component": 5672 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (a = e("./confirm-transaction.component")) && a.__esModule ? a : { default: a };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-transaction/index.js" }
    ],
    [
      5674,
      { "../../../../components/ui/button": 5377, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = c);
                var a = i(e("react")),
                  r = i(e("prop-types")),
                  o = i(e("classnames")),
                  s = i(e("../../../../components/ui/button"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c({
                  onSubmit: e,
                  onCancel: t,
                  submitText: n,
                  cancelText: r,
                  loadingText: i,
                  alerts: c,
                  loading: l,
                  submitAlerts: u,
                  actionsStyle: d,
                  style: p
                }) {
                  return a.default.createElement(
                    "div",
                    { className: "confirmation-footer", style: p },
                    c,
                    u,
                    a.default.createElement(
                      "div",
                      { className: "confirmation-footer__actions", style: d },
                      t
                        ? a.default.createElement(
                            s.default,
                            { "data-testid": "confirmation-cancel-button", type: "secondary", onClick: t },
                            r
                          )
                        : null,
                      e && n
                        ? a.default.createElement(
                            s.default,
                            {
                              "data-testid": "confirmation-submit-button",
                              disabled: Boolean(l),
                              type: "primary",
                              onClick: e,
                              className: (0, o.default)({ centered: !t })
                            },
                            l ? i : n
                          )
                        : null
                    )
                  );
                }
                c.propTypes = {
                  alerts: r.default.node,
                  onCancel: r.default.func,
                  cancelText: r.default.string,
                  onSubmit: r.default.func.isRequired,
                  submitText: r.default.string.isRequired,
                  loadingText: r.default.string,
                  loading: r.default.bool,
                  submitAlerts: r.default.node,
                  style: r.default.object,
                  actionsStyle: r.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/components/confirmation-footer/confirmation-footer.js" }
    ],
    [
      5675,
      { "./confirmation-footer": 5674 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirmation-footer")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/components/confirmation-footer/index.js" }
    ],
    [
      5676,
      {
        "../../../../../shared/constants/network": 4759,
        "../../../../components/ui/box": 5373,
        "../../../../components/ui/site-icon": 5479,
        "../../../../components/ui/typography/typography": 5507,
        "../../../../ducks/metamask/metamask": 5529,
        "../../../../helpers/constants/design-system": 5537,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = f);
                var a = p(e("react")),
                  r = p(e("prop-types")),
                  o = e("react-redux"),
                  s = p(e("../../../../components/ui/box")),
                  i = p(e("../../../../components/ui/site-icon")),
                  c = p(e("../../../../components/ui/typography/typography")),
                  l = e("../../../../helpers/constants/design-system"),
                  u = e("../../../../../shared/constants/network"),
                  d = e("../../../../ducks/metamask/metamask");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f({ newNetwork: e }) {
                  const { chainId: t, nickname: n, type: r } = (0, o.useSelector)(d.getProviderConfig);
                  return a.default.createElement(
                    s.default,
                    {
                      className: "confirmation-network-switch",
                      display: l.Display.Flex,
                      height: l.BlockSize.Full,
                      justifyContent: l.JustifyContent.center,
                      marginTop: 8
                    },
                    a.default.createElement(
                      s.default,
                      { className: "confirmation-network-switch__icon", display: l.Display.Block },
                      t in u.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP
                        ? a.default.createElement(i.default, { icon: u.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[t], name: n, size: 64 })
                        : a.default.createElement(
                            "div",
                            { className: "confirmation-network-switch__unknown-icon" },
                            a.default.createElement("i", { className: "fa fa-question fa-2x" })
                          ),
                      a.default.createElement(
                        c.default,
                        {
                          color: l.TextColor.textDefault,
                          variant: l.TypographyVariant.H6,
                          fontWeight: l.FontWeight.Normal,
                          align: l.TextAlign.Center,
                          boxProps: { display: l.Display.Flex, justifyContent: l.JustifyContent.center }
                        },
                        n || u.NETWORK_TO_NAME_MAP[r]
                      )
                    ),
                    a.default.createElement(
                      s.default,
                      {
                        className: "confirmation-network-switch__center-icon",
                        display: l.Display.Flex,
                        alignItems: l.AlignItems.center,
                        justifyContent: l.JustifyContent.center
                      },
                      a.default.createElement("i", { className: "fa fa-angle-right fa-lg confirmation-network-switch__check" }),
                      a.default.createElement("div", { className: "confirmation-network-switch__dashed-line" })
                    ),
                    a.default.createElement(
                      s.default,
                      { className: "confirmation-network-switch__icon", display: l.Display.Block },
                      e.chainId in u.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP
                        ? a.default.createElement(i.default, {
                            icon: u.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[e.chainId],
                            name: e.nickname,
                            size: 64
                          })
                        : a.default.createElement(
                            "div",
                            { className: "confirmation-network-switch__unknown-icon" },
                            a.default.createElement("i", { className: "fa fa-question fa-2x" })
                          ),
                      a.default.createElement(
                        c.default,
                        {
                          color: l.TextColor.textDefault,
                          variant: l.TypographyVariant.H6,
                          fontWeight: l.FontWeight.Normal,
                          align: l.TextAlign.Center,
                          boxProps: { display: l.Display.Flex, justifyContent: l.JustifyContent.center }
                        },
                        e.nickname
                      )
                    )
                  );
                }
                f.propTypes = {
                  newNetwork: r.default.shape({ chainId: r.default.string.isRequired, nickname: r.default.string.isRequired })
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/components/confirmation-network-switch/confirmation-network-switch.js" }
    ],
    [
      5677,
      { "./confirmation-network-switch": 5676 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirmation-network-switch")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/components/confirmation-network-switch/index.js" }
    ],
    [
      5678,
      {
        "../../../shared/constants/app": 4749,
        "../../components/app/confirmation-warning-modal": 4873,
        "../../components/app/metamask-template-renderer": 4946,
        "../../components/app/network-display/network-display": 5006,
        "../../components/app/snaps/snap-authorship-header": 5080,
        "../../components/component-library": 5242,
        "../../components/ui/box": 5373,
        "../../components/ui/callout": 5379,
        "../../components/ui/loading-screen": 5439,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/constants/routes": 5542,
        "../../helpers/utils/util": 5578,
        "../../hooks/useI18nContext": 5602,
        "../../selectors": 5958,
        "./components/confirmation-footer": 5675,
        "./templates": 5683,
        "@metamask/controller-utils": 1124,
        immer: 3834,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = O);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = P(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = x(e("prop-types")),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("lodash"),
                  c = e("immer"),
                  l = e("@metamask/controller-utils"),
                  u = x(e("../../components/ui/box")),
                  d = x(e("../../components/app/metamask-template-renderer")),
                  p = x(e("../../components/app/confirmation-warning-modal")),
                  f = e("../../helpers/constants/routes"),
                  m = e("../../helpers/constants/design-system"),
                  g = e("../../hooks/useI18nContext"),
                  h = e("../../selectors"),
                  y = x(e("../../components/app/network-display/network-display")),
                  A = x(e("../../components/ui/callout")),
                  E = e("../../components/component-library"),
                  v = x(e("../../components/ui/loading-screen")),
                  T = x(e("../../components/app/snaps/snap-authorship-header")),
                  b = e("../../helpers/utils/util"),
                  w = e("../../../shared/constants/app"),
                  k = x(e("./components/confirmation-footer")),
                  C = e("./templates");
                function x(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function P(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (P = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const N = (0, c.produce)((e, t) => {
                  var n;
                  switch (t.type) {
                    case "dismiss":
                      null != e &&
                        null !== (n = e[t.confirmationId]) &&
                        void 0 !== n &&
                        n[t.alertId] &&
                        (e[t.confirmationId][t.alertId].dismissed = !0);
                      break;
                    case "set":
                      e[t.confirmationId] || (e[t.confirmationId] = {}),
                        t.alerts.forEach((n) => {
                          e[t.confirmationId][n.id] = { ...n, dismissed: !1 };
                        });
                      break;
                    default:
                      throw new Error("You must provide a type when dispatching an action for alertState");
                  }
                });
                function O({ redirectToHomeOnZeroConfirmations: e = !0 }) {
                  const t = (0, g.useI18nContext)(),
                    n = (0, o.useDispatch)(),
                    r = (0, s.useHistory)(),
                    c = (0, o.useSelector)(h.getUnapprovedTemplatedConfirmations, i.isEqual),
                    x = (0, o.useSelector)(h.getUnapprovedTxCount),
                    P = (0, o.useSelector)(h.getApprovalFlows, i.isEqual),
                    O = (0, o.useSelector)(h.getTotalUnapprovedCount),
                    S = (0, o.useSelector)(h.useSafeChainsListValidationSelector),
                    [M, R] = (0, a.useState)(null),
                    [I, D] = (0, a.useState)(0),
                    B = c[I],
                    [j, L] = (function (e, { unapprovedTxsCount: t, useSafeChainsListValidation: n } = {}) {
                      const [r, o] = (0, a.useReducer)(N, {});
                      return (
                        (0, a.useEffect)(() => {
                          let a = !0;
                          return (
                            e &&
                              (0, C.getTemplateAlerts)(e, { unapprovedTxsCount: t, useSafeChainsListValidation: n }).then((t) => {
                                a && t.length > 0 && o({ type: "set", confirmationId: e.id, alerts: t });
                              }),
                            () => {
                              a = !1;
                            }
                          );
                        }, [e, t]),
                        [
                          r,
                          (0, a.useCallback)(
                            (t) => {
                              o({ type: "dismiss", confirmationId: e.id, alertId: t });
                            },
                            [e]
                          )
                        ]
                      );
                    })(B, { unapprovedTxsCount: x, useSafeChainsListValidation: S }),
                    [F] = (function (e) {
                      const [t, n] = (0, a.useState)({});
                      return (
                        (0, a.useEffect)(() => {
                          let t = !0;
                          return (
                            e &&
                              (0, C.getTemplateState)(e).then((a) => {
                                t && Object.values(a).length > 0 && n((t) => ({ ...t, [e.id]: a }));
                              }),
                            () => {
                              t = !1;
                            }
                          );
                        }, [e]),
                        [t]
                      );
                    })(B),
                    [H, U] = (0, a.useState)(!1),
                    [Q, G] = (0, a.useState)({}),
                    W = (e, t) => {
                      G((n) => ({ ...n, [e]: t }));
                    },
                    [K, Y] = (0, a.useState)(!1),
                    [z, q] = (0, a.useState)(),
                    [Z, J] = (0, a.useState)([]),
                    V = (0, o.useSelector)((e) => (0, h.getTargetSubjectMetadata)(e, null == B ? void 0 : B.origin)),
                    X = [l.ApprovalType.SnapDialogAlert, l.ApprovalType.SnapDialogConfirmation, l.ApprovalType.SnapDialogPrompt];
                  X.push(...Object.values(w.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES));
                  const _ = X.includes(null == B ? void 0 : B.type),
                    $ = _ && V && (0, b.getSnapName)(null == B ? void 0 : B.origin, V),
                    ee = [l.ApprovalType.SnapDialogPrompt],
                    te = (0, a.useMemo)(
                      () => (B ? (0, C.getTemplateValues)({ snapName: _ && $, ...B }, t, n, r, W) : {}),
                      [B, t, n, r, _, $]
                    );
                  if (
                    ((0, a.useEffect)(() => {
                      0 !== c.length || (0 !== P.length && 0 === O) || !e
                        ? c.length && c.length <= I && D(c.length - 1)
                        : r.push(f.DEFAULT_ROUTE);
                    }, [c, P, O, r, I, e]),
                    (0, a.useEffect)(() => {
                      const e = P[P.length - 1];
                      R((null == e ? void 0 : e.loadingText) ?? null);
                    }, [P]),
                    !B)
                  )
                    return P.length > 0 ? a.default.createElement(v.default, { loadingMessage: M }) : null;
                  const ne = (e) => {
                    (null == e ? void 0 : e.length) > 0 ? (q(te.submitText), J(e), Y(!0)) : Y(!1);
                  };
                  return a.default.createElement(
                    "div",
                    { className: "confirmation-page" },
                    c.length > 1 &&
                      a.default.createElement(
                        "div",
                        { className: "confirmation-page__navigation" },
                        a.default.createElement("p", null, t("xOfYPending", [I + 1, c.length])),
                        I > 0 &&
                          a.default.createElement(
                            "button",
                            { className: "confirmation-page__navigation-button", onClick: () => D(I - 1) },
                            a.default.createElement(E.Icon, { name: E.IconName.ArrowLeft })
                          ),
                        a.default.createElement(
                          "button",
                          { className: "confirmation-page__navigation-button", disabled: I + 1 === c.length, onClick: () => D(I + 1) },
                          a.default.createElement(E.Icon, { name: E.IconName.ArrowRight })
                        )
                      ),
                    a.default.createElement(
                      "div",
                      { className: "confirmation-page__content" },
                      te.networkDisplay
                        ? a.default.createElement(
                            u.default,
                            { justifyContent: "center", marginTop: 2 },
                            a.default.createElement(y.default, { indicatorSize: m.Size.XS, labelProps: { color: m.TextColor.textDefault } })
                          )
                        : null,
                      _ && a.default.createElement(T.default, { snapId: null == B ? void 0 : B.origin }),
                      a.default.createElement(d.default, { sections: te.content }),
                      H &&
                        a.default.createElement(p.default, {
                          onSubmit: async () => {
                            const e = await te.onSubmit();
                            await ne(e), U(!1);
                          },
                          onCancel: te.onCancel
                        })
                    ),
                    a.default.createElement(k.default, {
                      alerts:
                        j[B.id] &&
                        Object.values(j[B.id])
                          .filter((e) => !1 === e.dismissed)
                          .map((e, t, n) =>
                            a.default.createElement(
                              A.default,
                              {
                                key: e.id,
                                severity: e.severity,
                                dismiss: () => L(e.id),
                                isFirst: 0 === t,
                                isLast: t === n.length - 1,
                                isMultiple: n.length > 1
                              },
                              a.default.createElement(d.default, { sections: e.content })
                            )
                          ),
                      style: _ ? { boxShadow: "var(--shadow-size-lg) var(--color-shadow-default)" } : {},
                      actionsStyle: _ ? { borderTop: 0 } : {},
                      onSubmit: async () => {
                        var e, t;
                        if ((Y(!0), null !== (e = F[B.id]) && void 0 !== e && e.useWarningModal)) U(!0);
                        else {
                          const e = ((t = B.type), ee.includes(t) ? ((e) => Q[e] ?? "")(B.type) : null),
                            n = await te.onSubmit(e);
                          ne(n);
                        }
                      },
                      onCancel: te.onCancel,
                      submitText: te.submitText,
                      cancelText: te.cancelText,
                      loadingText: z || te.loadingText,
                      loading: K,
                      submitAlerts: Z.map((e, t) =>
                        a.default.createElement(
                          A.default,
                          { key: e.id, severity: e.severity, isFirst: 0 === t },
                          a.default.createElement(d.default, { sections: e.content })
                        )
                      )
                    })
                  );
                }
                O.propTypes = { redirectToHomeOnZeroConfirmations: r.default.bool };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/confirmation.js" }
    ],
    [
      5679,
      { "./confirmation": 5678 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./confirmation")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/index.js" }
    ],
    [
      5680,
      {
        "../../../../shared/constants/network": 4759,
        "../../../../shared/lib/fetch-with-cache": 4772,
        "../../../../shared/modules/rpc.utils": 4794,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/constants/zendesk-url": 5547,
        "eth-rpc-errors": 3226,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = e("eth-rpc-errors"),
                  r = d(e("react")),
                  o = e("../../../../shared/constants/network"),
                  s = e("../../../helpers/constants/design-system"),
                  i = e("../../../helpers/constants/routes"),
                  c = d(e("../../../helpers/constants/zendesk-url")),
                  l = d(e("../../../../shared/lib/fetch-with-cache")),
                  u = e("../../../../shared/modules/rpc.utils");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = {
                    id: "UNRECOGNIZED_CHAIN",
                    severity: s.Severity.Warning,
                    content: {
                      element: "span",
                      children: { element: "MetaMaskTranslation", props: { translationKey: "unrecognizedChain" } }
                    }
                  },
                  f = {
                    id: "MISMATCHED_CHAIN_RECOMMENDATION",
                    severity: s.Severity.Warning,
                    content: {
                      element: "span",
                      children: {
                        element: "MetaMaskTranslation",
                        props: {
                          translationKey: "mismatchedChainRecommendation",
                          variables: [
                            {
                              element: "a",
                              key: "mismatchedChainLink",
                              props: { href: c.default.VERIFY_CUSTOM_NETWORK, target: "__blank", tabIndex: 0 },
                              children: { element: "MetaMaskTranslation", props: { translationKey: "mismatchedChainLinkText" } }
                            }
                          ]
                        }
                      }
                    }
                  },
                  m = {
                    id: "MISMATCHED_NETWORK_NAME",
                    severity: s.Severity.Warning,
                    content: {
                      element: "span",
                      children: { element: "MetaMaskTranslation", props: { translationKey: "mismatchedNetworkName" } }
                    }
                  },
                  g = {
                    id: "MISMATCHED_NETWORK_SYMBOL",
                    severity: s.Severity.Danger,
                    content: {
                      element: "span",
                      children: { element: "MetaMaskTranslation", props: { translationKey: "mismatchedNetworkSymbol" } }
                    }
                  },
                  h = {
                    id: "MISMATCHED_NETWORK_RPC",
                    severity: s.Severity.Danger,
                    content: {
                      element: "span",
                      children: { element: "MetaMaskTranslation", props: { translationKey: "mismatchedRpcUrl" } }
                    }
                  },
                  y = {
                    id: "MISMATCHED_NETWORK_RPC_CHAIN_ID",
                    severity: s.Severity.Danger,
                    content: {
                      element: "span",
                      children: { element: "MetaMaskTranslation", props: { translationKey: "mismatchedRpcChainId" } }
                    }
                  },
                  A = {
                    id: "ERROR_CONNECTING_TO_RPC",
                    severity: s.Severity.Danger,
                    content: {
                      element: "span",
                      children: { element: "MetaMaskTranslation", props: { translationKey: "errorWhileConnectingToRPC" } }
                    }
                  };
                const E = {
                  getAlerts: async function (e, t) {
                    const n = [];
                    let a = [];
                    t.useSafeChainsListValidation &&
                      (a = await (0, l.default)({ url: "https://chainid.network/chains.json", functionName: "getSafeChainsList" }));
                    const r = a.find((t) => t.chainId === parseInt(e.requestData.chainId, 16));
                    if ("metamask" === e.origin && Boolean(r)) return [];
                    if (r) {
                      var o;
                      r.name.toLowerCase() !== e.requestData.chainName.toLowerCase() && n.push(m),
                        (null === (o = r.nativeCurrency) || void 0 === o ? void 0 : o.symbol) !== e.requestData.ticker && n.push(g);
                      const { origin: t } = new URL(e.requestData.rpcUrl);
                      r.rpc.map((e) => new URL(e).origin).includes(t) || n.push(h);
                    }
                    return !r && t.useSafeChainsListValidation && n.push(p), n.length && n.push(f), n;
                  },
                  getValues: function (e, t, n, l) {
                    var d;
                    const p = "metamask" === e.origin,
                      f = e.requestData.rpcUrl;
                    return {
                      content: [
                        {
                          hide: !p,
                          element: "Box",
                          key: "network-box",
                          props: {
                            textAlign: s.TextAlign.Center,
                            display: s.Display.Flex,
                            justifyContent: s.JustifyContent.center,
                            marginTop: 4,
                            marginBottom: 2
                          },
                          children: [
                            {
                              element: "Chip",
                              key: "network-chip",
                              props: {
                                label: e.requestData.chainName,
                                backgroundColor: s.BackgroundColor.backgroundAlternative,
                                leftIconUrl: e.requestData.imageUrl
                              }
                            }
                          ]
                        },
                        {
                          element: "Typography",
                          key: "title",
                          children: t(p ? "wantToAddThisNetwork" : "addEthereumChainConfirmationTitle"),
                          props: { variant: s.TypographyVariant.H3, align: "center", fontWeight: "bold", boxProps: { margin: [0, 0, 4] } }
                        },
                        {
                          element: "Typography",
                          key: "description",
                          children: t("addEthereumChainConfirmationDescription"),
                          props: { variant: s.TypographyVariant.H7, align: "center", boxProps: { margin: p ? [0, 8, 4] : [0, 0, 4] } }
                        },
                        {
                          element: "Typography",
                          key: "only-add-networks-you-trust",
                          children: [
                            {
                              element: "b",
                              key: "bolded-text",
                              props: { style: { display: p && "-webkit-box" } },
                              children: [
                                `${t("addEthereumChainConfirmationRisks")} `,
                                {
                                  hide: !p,
                                  element: "Tooltip",
                                  key: "tooltip-info",
                                  props: {
                                    position: "bottom",
                                    interactive: !0,
                                    trigger: "mouseenter",
                                    html: r.default.createElement(
                                      "div",
                                      { style: { width: "180px", margin: "16px", textAlign: "left" } },
                                      t("someNetworksMayPoseSecurity"),
                                      " ",
                                      r.default.createElement(
                                        "a",
                                        {
                                          key: "zendesk_page_link",
                                          href: c.default.UNKNOWN_NETWORK,
                                          rel: "noreferrer",
                                          target: "_blank",
                                          style: { color: "var(--color-primary-default)" }
                                        },
                                        t("learnMoreUpperCase")
                                      )
                                    )
                                  },
                                  children: [
                                    {
                                      element: "i",
                                      key: "info-circle",
                                      props: {
                                        className: "fas fa-info-circle",
                                        style: { marginLeft: "4px", color: "var(--color-icon-default)" }
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              element: "MetaMaskTranslation",
                              key: "learn-about-risks",
                              props: {
                                translationKey: "addEthereumChainConfirmationRisksLearnMore",
                                variables: [
                                  {
                                    element: "a",
                                    children: t("addEthereumChainConfirmationRisksLearnMoreLink"),
                                    key: "addEthereumChainConfirmationRisksLearnMoreLink",
                                    props: { href: c.default.USER_GUIDE_CUSTOM_NETWORKS, target: "__blank" }
                                  }
                                ]
                              }
                            }
                          ],
                          props: {
                            variant: s.TypographyVariant.H7,
                            boxProps: {
                              margin: p ? [0, 8] : 0,
                              display: s.Display.Flex,
                              flexDirection: s.FlexDirection.Column,
                              alignItems: s.AlignItems.center
                            }
                          }
                        },
                        {
                          element: "TruncatedDefinitionList",
                          key: "network-details",
                          props: {
                            title: t("networkDetails"),
                            tooltips: {
                              [t("networkName")]: t("networkNameDefinition"),
                              [t("networkURL")]: t("networkURLDefinition"),
                              [t("chainId")]: t("chainIdDefinition"),
                              [t("currencySymbol")]: t("currencySymbolDefinition"),
                              [t("blockExplorerUrl")]: t("blockExplorerUrlDefinition")
                            },
                            dictionary: {
                              [t("networkName")]: e.requestData.chainName,
                              [t("networkURL")]:
                                null !== (d = e.requestData.rpcUrl) && void 0 !== d && d.includes(`/v3/${o.infuraProjectId}`)
                                  ? e.requestData.rpcUrl.replace(`/v3/${o.infuraProjectId}`, "")
                                  : e.requestData.rpcUrl,
                              [t("chainId")]: parseInt(e.requestData.chainId, 16),
                              [t("currencySymbol")]: e.requestData.ticker,
                              [t("blockExplorerUrl")]: e.requestData.rpcPrefs.blockExplorerUrl
                            },
                            prefaceKeys: [t("networkName"), t("networkURL"), t("chainId"), t("currencySymbol")]
                          }
                        }
                      ],
                      cancelText: t("cancel"),
                      submitText: t("approveButtonText"),
                      loadingText: t("addingCustomNetwork"),
                      onSubmit: async () => {
                        let t;
                        try {
                          t = await (0, u.jsonRpcRequest)(f, "eth_chainId");
                        } catch (e) {
                          return console.error(`Request for method 'eth_chainId on ${f} failed`), [A];
                        }
                        if (e.requestData.chainId !== t) return console.error(`Chain ID returned by RPC URL ${f} does not match ${t}`), [y];
                        if ((await n.resolvePendingApproval(e.id, e.requestData), p)) {
                          const t = await n.upsertNetworkConfiguration(
                            { ...e.requestData, nickname: e.requestData.chainName },
                            { setActive: !1, source: e.requestData.source }
                          );
                          await n.setNewNetworkAdded({ networkConfigurationId: t, nickname: e.requestData.chainName }),
                            l.push(i.DEFAULT_ROUTE);
                        }
                        return [];
                      },
                      onCancel: () => n.rejectPendingApproval(e.id, a.ethErrors.provider.userRejectedRequest().serialize()),
                      networkDisplay: !p
                    };
                  },
                  getState: function (e) {
                    return 1 === parseInt(e.requestData.chainId, 16) ? { useWarningModal: !0 } : {};
                  }
                };
                n.default = E;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/templates/add-ethereum-chain.js" }
    ],
    [
      5681,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                const a = {
                  getValues: function (e, t, n, a) {
                    const { origin: r, snapName: o } = e;
                    return {
                      content: [{ element: "CreateSnapAccount", key: "create-snap-account", props: { snapId: r, snapName: o } }],
                      cancelText: t("cancel"),
                      submitText: t("create"),
                      onSubmit: () => n.resolvePendingApproval(e.id, !0),
                      onCancel: () => n.resolvePendingApproval(e.id, !1)
                    };
                  }
                };
                n.default = a;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/templates/create-snap-account.js" }
    ],
    [
      5682,
      { "../../../components/component-library": 5242, "../../../helpers/constants/design-system": 5537, "../util": 5691 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = e("../../../components/component-library"),
                  r = e("../../../helpers/constants/design-system"),
                  o = e("../util");
                const s = {
                  getValues: function (e, t, n, s) {
                    return {
                      content: [
                        ...((0, o.processHeader)(e.requestData.header) ?? []),
                        {
                          key: "container",
                          element: "Box",
                          props: {
                            flexDirection: r.FlexDirection.Column,
                            alignItems: r.AlignItems.center,
                            height: r.BlockSize.Full,
                            padding: 4
                          },
                          children: [
                            {
                              key: "content",
                              element: "Box",
                              props: {
                                flexDirection: r.FlexDirection.Column,
                                alignItems: r.AlignItems.center,
                                justifyContent: r.JustifyContent.center,
                                height: r.BlockSize.Full,
                                paddingTop: 2,
                                paddingBottom: 2
                              },
                              children: [
                                {
                                  key: "icon",
                                  element: "AvatarIcon",
                                  props: {
                                    iconName: a.IconName.Warning,
                                    size: a.IconSize.Xl,
                                    iconProps: { size: a.IconSize.Xl },
                                    color: r.IconColor.errorDefault,
                                    backgroundColor: r.BackgroundColor.errorMuted
                                  },
                                  children: "Icon"
                                },
                                {
                                  key: "heading",
                                  element: "Typography",
                                  props: { variant: r.TypographyVariant.H3, fontWeight: r.FontWeight.Bold, paddingBottom: 2 },
                                  children: t("resultPageError")
                                },
                                {
                                  key: "message",
                                  element: "Box",
                                  props: { alignItems: r.AlignItems.center, textAlign: r.TextAlign.Center, gap: 1 },
                                  children: (0, o.processError)(e.requestData.error, t("resultPageErrorDefaultMessage"))
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      submitText: t("ok"),
                      onSubmit: () => n.resolvePendingApproval(e.id, e.requestData),
                      networkDisplay: !1
                    };
                  }
                };
                n.default = s;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/templates/error.js" }
    ],
    [
      5683,
      {
        "../../../../shared/constants/app": 4749,
        "../../../store/actions": 5965,
        "./add-ethereum-chain": 5680,
        "./create-snap-account": 5681,
        "./error": 5682,
        "./remove-snap-account": 5684,
        "./snap-account-redirect": 5685,
        "./snaps/snap-alert/snap-alert": 5686,
        "./snaps/snap-confirmation/snap-confirmation": 5687,
        "./snaps/snap-prompt/snap-prompt": 5688,
        "./success": 5689,
        "./switch-ethereum-chain": 5690,
        "@metamask/controller-utils": 1124,
        lodash: 4071
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.TEMPLATED_CONFIRMATION_APPROVAL_TYPES = void 0),
                  (n.getTemplateAlerts = async function (e, t) {
                    var n;
                    const a = null === (n = A[e.type]) || void 0 === n ? void 0 : n.getAlerts,
                      r = a ? await a(e, t) : [];
                    if (!Array.isArray(r)) throw new Error(`Template alerts must be an array, received: ${r}`);
                    if (r.some((e) => (null == e ? void 0 : e.id) === undefined))
                      throw new Error(`Template alert entries must be objects with an id key. Received: ${r}`);
                    return r;
                  }),
                  (n.getTemplateState = async function (e) {
                    var t;
                    const n = (null === (t = A[e.type]) || void 0 === t ? void 0 : t.getState) ?? v,
                      a = await n(e);
                    if ("object" != typeof a || Array.isArray(a)) throw new Error(`Template state must be an object, received: ${a}`);
                    if (null === a || a === undefined) return {};
                    return a;
                  }),
                  (n.getTemplateValues = function (e, t, n, r, s) {
                    var i;
                    const c = null === (i = A[e.type]) || void 0 === i ? void 0 : i.getValues;
                    if (!c) throw new Error(`MESSAGE_TYPE: '${e.type}' is not specified in approval templates`);
                    const l = (function (e) {
                        return {
                          rejectPendingApproval: (...t) => e((0, o.rejectPendingApproval)(...t)),
                          resolvePendingApproval: (...t) => e((0, o.resolvePendingApproval)(...t)),
                          upsertNetworkConfiguration: (...t) => e((0, o.upsertNetworkConfiguration)(...t)),
                          setNewNetworkAdded: (...t) => e((0, o.setNewNetworkAdded)(...t))
                        };
                      })(n),
                      u = c(e, t, l, r, s),
                      d = (0, a.omit)(u, E),
                      p = (0, a.pick)(u, E);
                    if (d.length > 0)
                      throw new Error(
                        `Received extraneous keys from ${
                          e.type
                        }.getValues. These keys are not passed to the confirmation page: ${Object.keys(d)}`
                      );
                    return p;
                  });
                var a = e("lodash"),
                  r = e("@metamask/controller-utils"),
                  o = e("../../../store/actions"),
                  s = e("../../../../shared/constants/app"),
                  i = y(e("./create-snap-account")),
                  c = y(e("./remove-snap-account")),
                  l = y(e("./snap-account-redirect")),
                  u = y(e("./add-ethereum-chain")),
                  d = y(e("./switch-ethereum-chain")),
                  p = y(e("./success")),
                  f = y(e("./error")),
                  m = y(e("./snaps/snap-alert/snap-alert")),
                  g = y(e("./snaps/snap-confirmation/snap-confirmation")),
                  h = y(e("./snaps/snap-prompt/snap-prompt"));
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const A = {
                    [r.ApprovalType.AddEthereumChain]: u.default,
                    [r.ApprovalType.SwitchEthereumChain]: d.default,
                    [r.ApprovalType.ResultSuccess]: p.default,
                    [r.ApprovalType.ResultError]: f.default,
                    [r.ApprovalType.SnapDialogAlert]: m.default,
                    [r.ApprovalType.SnapDialogConfirmation]: g.default,
                    [r.ApprovalType.SnapDialogPrompt]: h.default,
                    [s.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.confirmAccountCreation]: i.default,
                    [s.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.confirmAccountRemoval]: c.default,
                    [s.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.showSnapAccountRedirect]: l.default
                  },
                  E =
                    ((n.TEMPLATED_CONFIRMATION_APPROVAL_TYPES = Object.keys(A)),
                    ["cancelText", "content", "onCancel", "onSubmit", "networkDisplay", "submitText", "loadingText"]);
                async function v() {
                  return {};
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/templates/index.js" }
    ],
    [
      5684,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                const a = {
                  getValues: function (e, t, n, a) {
                    const { origin: r, snapName: o } = e,
                      { publicAddress: s } = e.requestData;
                    return {
                      content: [
                        { element: "RemoveSnapAccount", key: "remove-snap-account", props: { snapId: r, snapName: o, publicAddress: s } }
                      ],
                      cancelText: t("cancel"),
                      submitText: t("remove"),
                      onSubmit: () => n.resolvePendingApproval(e.id, !0),
                      onCancel: () => n.resolvePendingApproval(e.id, !1)
                    };
                  }
                };
                n.default = a;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/templates/remove-snap-account.js" }
    ],
    [
      5685,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                const a = {
                  getValues: function (e, t, n, a) {
                    const { snapName: r } = e,
                      { url: o, message: s, isBlockedUrl: i } = e.requestData;
                    return {
                      content: [
                        {
                          element: "SnapAccountRedirect",
                          key: "snap-account-redirect",
                          props: { url: o, message: s, snapName: r, isBlockedUrl: i }
                        }
                      ],
                      cancelText: t("close"),
                      onCancel: () => n.resolvePendingApproval(e.id, !1),
                      ...(o !== undefined && null !== o && o.length > 0 && !1 === i
                        ? { submitText: t("goToSite"), onSubmit: () => n.resolvePendingApproval(e.id, !0) }
                        : {})
                    };
                  }
                };
                n.default = a;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/templates/snap-account-redirect.js" }
    ],
    [
      5686,
      { "../../../../../components/app/snaps/snap-ui-renderer": 5103, "../../../../../helpers/constants/snaps": 5545 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = e("../../../../../components/app/snaps/snap-ui-renderer"),
                  r = e("../../../../../helpers/constants/snaps");
                const o = {
                  getValues: function (e, t, n) {
                    const {
                      snapName: o,
                      requestData: { content: s }
                    } = e;
                    return {
                      content: [
                        {
                          element: "Box",
                          key: "snap-dialog-content-wrapper",
                          props: { marginTop: 4, marginLeft: 4, marginRight: 4 },
                          children: {
                            element: "SnapDelineator",
                            key: "snap-delineator",
                            props: { type: r.DelineatorType.Content, snapName: o },
                            children: (0, a.mapToTemplate)(s, { value: 0 })
                          }
                        }
                      ],
                      submitText: t("ok").toUpperCase(),
                      onSubmit: () => n.resolvePendingApproval(e.id, null)
                    };
                  }
                };
                n.default = o;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/templates/snaps/snap-alert/snap-alert.js" }
    ],
    [
      5687,
      { "../../../../../components/app/snaps/snap-ui-renderer": 5103, "../../../../../helpers/constants/snaps": 5545 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = e("../../../../../components/app/snaps/snap-ui-renderer"),
                  r = e("../../../../../helpers/constants/snaps");
                const o = {
                  getValues: function (e, t, n) {
                    const {
                      snapName: o,
                      requestData: { content: s }
                    } = e;
                    return {
                      content: [
                        {
                          element: "Box",
                          key: "snap-dialog-content-wrapper",
                          props: { marginTop: 4, marginLeft: 4, marginRight: 4 },
                          children: {
                            element: "SnapDelineator",
                            key: "snap-delineator",
                            props: { type: r.DelineatorType.Content, snapName: o },
                            children: (0, a.mapToTemplate)(s, { value: 0 })
                          }
                        }
                      ],
                      cancelText: t("reject"),
                      submitText: t("approveButtonText"),
                      onSubmit: () => n.resolvePendingApproval(e.id, !0),
                      onCancel: () => n.resolvePendingApproval(e.id, !1)
                    };
                  }
                };
                n.default = o;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/templates/snaps/snap-confirmation/snap-confirmation.js" }
    ],
    [
      5688,
      {
        "../../../../../../shared/constants/app": 4749,
        "../../../../../components/app/snaps/snap-ui-renderer": 5103,
        "../../../../../helpers/constants/snaps": 5545
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = e("../../../../../components/app/snaps/snap-ui-renderer"),
                  r = e("../../../../../../shared/constants/app"),
                  o = e("../../../../../helpers/constants/snaps");
                const s = {
                  getValues: function (e, t, n, s, i) {
                    const {
                      snapName: c,
                      requestData: { content: l, placeholder: u }
                    } = e;
                    return {
                      content: [
                        {
                          element: "Box",
                          key: "snap-dialog-content-wrapper",
                          props: { marginTop: 4, marginLeft: 4, marginRight: 4 },
                          children: {
                            element: "SnapDelineator",
                            key: "snap-delineator",
                            props: { type: o.DelineatorType.Content, snapName: c },
                            children: [
                              (0, a.mapToTemplate)(l, { value: 0 }),
                              {
                                element: "div",
                                key: "snap-prompt-container",
                                children: {
                                  element: "TextField",
                                  key: "snap-prompt-input",
                                  props: {
                                    className: "snap-prompt-input",
                                    placeholder: u,
                                    max: 300,
                                    onChange: (e) => {
                                      const t = e.target.value ?? "";
                                      i(r.MESSAGE_TYPE.SNAP_DIALOG_PROMPT, t);
                                    },
                                    theme: "bordered"
                                  }
                                },
                                props: { className: "snap-prompt" }
                              }
                            ]
                          }
                        }
                      ],
                      cancelText: t("cancel"),
                      submitText: t("submit"),
                      onSubmit: (t) => n.resolvePendingApproval(e.id, t),
                      onCancel: () => n.resolvePendingApproval(e.id, null)
                    };
                  }
                };
                n.default = s;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/templates/snaps/snap-prompt/snap-prompt.js" }
    ],
    [
      5689,
      { "../../../components/component-library": 5242, "../../../helpers/constants/design-system": 5537, "../util": 5691 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = e("../../../components/component-library"),
                  r = e("../../../helpers/constants/design-system"),
                  o = e("../util");
                const s = {
                  getValues: function (e, t, n, s) {
                    return {
                      content: [
                        ...((0, o.processHeader)(e.requestData.header) ?? []),
                        {
                          key: "container",
                          element: "Box",
                          props: {
                            flexDirection: r.FlexDirection.Column,
                            alignItems: r.AlignItems.center,
                            height: r.BlockSize.Full,
                            padding: 4
                          },
                          children: [
                            {
                              key: "content",
                              element: "Box",
                              props: {
                                flexDirection: r.FlexDirection.Column,
                                alignItems: r.AlignItems.center,
                                justifyContent: r.JustifyContent.center,
                                height: r.BlockSize.Full,
                                paddingTop: 2,
                                paddingBottom: 2
                              },
                              children: [
                                {
                                  key: "icon",
                                  element: "AvatarIcon",
                                  props: {
                                    iconName: a.IconName.Confirmation,
                                    size: a.IconSize.Xl,
                                    iconProps: { size: a.IconSize.Xl },
                                    color: r.IconColor.successDefault,
                                    backgroundColor: r.BackgroundColor.successMuted
                                  },
                                  children: "Icon"
                                },
                                {
                                  key: "heading",
                                  element: "Typography",
                                  props: { variant: r.TypographyVariant.H3, fontWeight: r.FontWeight.Bold, paddingBottom: 2 },
                                  children: t("resultPageSuccess")
                                },
                                {
                                  key: "message",
                                  element: "Box",
                                  props: { alignItems: r.AlignItems.center, textAlign: r.TextAlign.Center, gap: 1 },
                                  children: (0, o.processString)(e.requestData.message, t("resultPageSuccessDefaultMessage"))
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      submitText: t("ok"),
                      onSubmit: () => n.resolvePendingApproval(e.id, e.requestData),
                      networkDisplay: !1
                    };
                  }
                };
                n.default = s;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/templates/success.js" }
    ],
    [
      5690,
      { "../../../helpers/constants/design-system": 5537, "eth-rpc-errors": 3226 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = e("eth-rpc-errors"),
                  r = e("../../../helpers/constants/design-system");
                const o = {
                  id: "PENDING_TX_DROP_NOTICE",
                  severity: r.SEVERITIES.WARNING,
                  content: {
                    element: "span",
                    children: { element: "MetaMaskTranslation", props: { translationKey: "switchingNetworksCancelsPendingConfirmations" } }
                  }
                };
                const s = {
                  getAlerts: async function (e, t) {
                    const n = [];
                    return t.unapprovedTxsCount > 0 && n.push(o), n;
                  },
                  getValues: function (e, t, n) {
                    return {
                      content: [
                        {
                          element: "Typography",
                          key: "title",
                          children: t("switchEthereumChainConfirmationTitle"),
                          props: {
                            variant: r.TypographyVariant.H3,
                            align: "center",
                            fontWeight: "normal",
                            boxProps: { margin: [0, 0, 2], padding: [0, 4, 0, 4] }
                          }
                        },
                        {
                          element: "Typography",
                          key: "description",
                          children: t("switchEthereumChainConfirmationDescription"),
                          props: {
                            variant: r.TypographyVariant.H7,
                            color: r.TextColor.textAlternative,
                            align: "center",
                            boxProps: { padding: [0, 4, 0, 4] }
                          }
                        },
                        {
                          element: "Box",
                          key: "status-box",
                          props: { justifyContent: r.JustifyContent.center },
                          children: {
                            element: "ConfirmationNetworkSwitch",
                            key: "network-being-switched",
                            props: { newNetwork: { chainId: e.requestData.chainId, nickname: e.requestData.nickname } }
                          }
                        }
                      ],
                      cancelText: t("cancel"),
                      submitText: t("switchNetwork"),
                      onSubmit: () => n.resolvePendingApproval(e.id, e.requestData),
                      onCancel: () => n.rejectPendingApproval(e.id, a.ethErrors.provider.userRejectedRequest().serialize()),
                      networkDisplay: !0
                    };
                  }
                };
                n.default = s;
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/templates/switch-ethereum-chain.js" }
    ],
    [
      5691,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                function a(e) {
                  return e === undefined
                    ? undefined
                    : "string" == typeof e
                    ? e
                    : Array.isArray(e)
                    ? e.map(a)
                    : { key: e.key, element: e.name, props: e.properties, children: a(e.children) };
                }
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.processError = function (e, t) {
                    const n = a(e) || t;
                    if ("string" != typeof n) return n;
                    return { key: "error", element: "ActionableMessage", props: { type: "danger", message: n } };
                  }),
                  (n.processHeader = function (e) {
                    return a(e);
                  }),
                  (n.processString = function (e, t) {
                    const n = a(e) || t;
                    if ("string" != typeof n) return n;
                    return (
                      (r = n),
                      (function (e, t, n) {
                        let a = 0,
                          r = 0;
                        const o = Array.from(e.matchAll(t)),
                          s = [];
                        for (const t of o) {
                          const o = e.substring(a, t.index);
                          o.length && s.push(o);
                          const i = n(t[1], r);
                          s.push(i), (a = t.index + t[0].length), (r += 1);
                        }
                        const i = e.substring(a);
                        return i.length && s.push(i), s;
                      })(r, /\*\*(.+?)\*\*/gu, (e, t) => ({ key: `bold-${t}`, element: "b", children: e }))
                    );
                    var r;
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirmation/util.ts" }
    ],
    [
      5692,
      {
        "../../components/app/connected-accounts-list": 4879,
        "../../components/app/connected-accounts-permissions": 4881,
        "../../components/app/connected-sites-list/connected-snaps": 4883,
        "../../components/component-library": 5242,
        "../../components/ui/popover": 5465,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/utils/util": 5578,
        "../../hooks/useI18nContext": 5602,
        "@metamask/snaps-utils": 2034,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = g);
                var a = m(e("prop-types")),
                  r = m(e("react")),
                  o = e("@metamask/snaps-utils"),
                  s = m(e("../../components/ui/popover")),
                  i = m(e("../../components/app/connected-accounts-list")),
                  c = m(e("../../components/app/connected-accounts-permissions")),
                  l = e("../../helpers/utils/util"),
                  u = e("../../hooks/useI18nContext"),
                  d = m(e("../../components/app/connected-sites-list/connected-snaps")),
                  p = e("../../helpers/constants/design-system"),
                  f = e("../../components/component-library");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g({
                  accountToConnect: e = null,
                  activeTabOrigin: t,
                  isActiveTabExtension: n,
                  connectAccount: a,
                  connectedAccounts: m,
                  history: g,
                  mostRecentOverviewPage: h,
                  permissions: y = undefined,
                  selectedAddress: A,
                  removePermittedAccount: E,
                  setSelectedAddress: v,
                  subjectMetadata: T,
                  originOfActiveTab: b,
                  permissionSubjects: w
                }) {
                  var k, C, x;
                  const P = (0, u.useI18nContext)(),
                    N = T[b],
                    O =
                      (null === (k = w[b]) || void 0 === k ? void 0 : k.origin) === (null == N ? void 0 : N.origin) &&
                      (null === (C = w[b]) || void 0 === C ? void 0 : C.permissions[o.WALLET_SNAP_PERMISSION_KEY]),
                    S =
                      O &&
                      Object.keys(
                        null === (x = w[b]) ||
                          void 0 === x ||
                          null === (x = x.permissions) ||
                          void 0 === x ||
                          null === (x = x.wallet_snap) ||
                          void 0 === x ||
                          null === (x = x.caveats[0]) ||
                          void 0 === x
                          ? void 0
                          : x.value
                      ),
                    M = O && (null == S ? void 0 : S.map((e) => T[e])),
                    R = m.length > 0 ? P("connectedAccountsDescriptionPlural", [m.length]) : P("connectedAccountsDescriptionSingular");
                  let I;
                  return (
                    (I =
                      m.length && !O
                        ? R
                        : O && !m.length
                        ? P("connectedSnapAndNoAccountDescription")
                        : m && O
                        ? null
                        : P("connectedAccountsEmptyDescription")),
                    r.default.createElement(
                      s.default,
                      {
                        title: n ? P("currentExtension") : (0, l.getURLHost)(t),
                        headerProps: { paddingLeft: 4, paddingRight: 4 },
                        subtitle: I,
                        onClose: () => g.push(h),
                        footerClassName: "connected-accounts__footer",
                        ConnectedAccountsPermissions: {},
                        footer: m.length > 0 && r.default.createElement(c.default, { permissions: y })
                      },
                      r.default.createElement(
                        f.Box,
                        null,
                        m.length > 0
                          ? r.default.createElement(
                              f.Box,
                              { marginLeft: 4 },
                              r.default.createElement(
                                f.Text,
                                { variant: p.TextVariant.bodyMdMedium, color: p.TextColor.textAlternative },
                                P("accountsConnected"),
                                " (",
                                m.length,
                                ")"
                              )
                            )
                          : null,
                        r.default.createElement(i.default, {
                          accountToConnect: e,
                          connectAccount: a,
                          connectedAccounts: m,
                          selectedAddress: A,
                          removePermittedAccount: E,
                          setSelectedAddress: v,
                          shouldRenderListOptions: !0
                        })
                      ),
                      O &&
                        M.length > 0 &&
                        r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(
                            f.Box,
                            { marginLeft: 4 },
                            r.default.createElement(
                              f.Text,
                              { variant: p.TextVariant.bodyMdMedium, color: p.TextColor.textAlternative },
                              P("snapsConnected"),
                              " (",
                              S.length,
                              ")"
                            )
                          ),
                          r.default.createElement(d.default, { connectedSubjects: M })
                        )
                    )
                  );
                }
                g.propTypes = {
                  accountToConnect: a.default.object,
                  activeTabOrigin: a.default.string.isRequired,
                  connectAccount: a.default.func.isRequired,
                  connectedAccounts: a.default.array.isRequired,
                  mostRecentOverviewPage: a.default.string.isRequired,
                  permissions: a.default.array,
                  isActiveTabExtension: a.default.bool.isRequired,
                  selectedAddress: a.default.string.isRequired,
                  removePermittedAccount: a.default.func.isRequired,
                  setSelectedAddress: a.default.func.isRequired,
                  history: a.default.object.isRequired,
                  subjectMetadata: a.default.arrayOf(a.default.object).isRequired,
                  originOfActiveTab: a.default.string,
                  permissionSubjects: a.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/connected-accounts/connected-accounts.component.js" }
    ],
    [
      5693,
      {
        "../../ducks/history/history": 5526,
        "../../helpers/utils/util": 5578,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "./connected-accounts.component": 5692,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  o = e("../../selectors"),
                  s = e("../../helpers/utils/util"),
                  i = e("../../store/actions"),
                  c = e("../../ducks/history/history"),
                  l = (a = e("./connected-accounts.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)(
                  (e) => {
                    const { activeTab: t } = e,
                      n = (0, o.getAccountToConnectToActiveTab)(e),
                      a = (0, o.getOrderedConnectedAccountsForActiveTab)(e),
                      r = (0, o.getPermissionsForActiveTab)(e),
                      i = (0, o.getSelectedAddress)(e),
                      l = (0, o.getSubjectMetadata)(e),
                      u = (0, o.getOriginOfCurrentTab)(e),
                      d = (0, o.getPermissionSubjects)(e);
                    return {
                      accountToConnect: n,
                      isActiveTabExtension: (0, s.isExtensionUrl)(t),
                      activeTabOrigin: t.origin,
                      connectedAccounts: a,
                      mostRecentOverviewPage: (0, c.getMostRecentOverviewPage)(e),
                      permissions: r,
                      selectedAddress: i,
                      subjectMetadata: l,
                      originOfActiveTab: u,
                      permissionSubjects: d
                    };
                  },
                  (e) => ({
                    addPermittedAccount: (t, n) => e((0, i.addPermittedAccount)(t, n)),
                    removePermittedAccount: (t, n) => e((0, i.removePermittedAccount)(t, n)),
                    setSelectedAddress: (t) => e((0, i.setSelectedAddress)(t))
                  }),
                  (e, t, n) => {
                    const { activeTabOrigin: a } = e;
                    return {
                      ...n,
                      ...e,
                      ...t,
                      connectAccount: (e) => t.addPermittedAccount(a, e),
                      removePermittedAccount: (e) => t.removePermittedAccount(a, e)
                    };
                  }
                )(l.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/connected-accounts/connected-accounts.container.js" }
    ],
    [
      5694,
      { "./connected-accounts.container": 5693 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./connected-accounts.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/connected-accounts/index.js" }
    ],
    [
      5695,
      {
        "../../components/app/connected-sites-list": 4884,
        "../../components/ui/button": 5377,
        "../../components/ui/popover/popover.component": 5466,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = l(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  o = l(e("../../components/app/connected-sites-list")),
                  s = l(e("../../components/ui/popover/popover.component")),
                  i = l(e("../../components/ui/button"));
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class d extends r.Component {
                  constructor(...e) {
                    super(...e),
                      u(this, "state", { sitePendingDisconnect: null }),
                      u(this, "setPendingDisconnect", (e) => {
                        this.setState({ sitePendingDisconnect: { subjectKey: e } });
                      }),
                      u(this, "clearPendingDisconnect", () => {
                        this.setState({ sitePendingDisconnect: null });
                      }),
                      u(this, "disconnectAccount", () => {
                        const { disconnectAccount: e } = this.props,
                          { sitePendingDisconnect: t } = this.state;
                        e(t.subjectKey), this.clearPendingDisconnect();
                      }),
                      u(this, "disconnectAllAccounts", () => {
                        const { disconnectAllAccounts: e } = this.props,
                          { sitePendingDisconnect: t } = this.state;
                        e(t.subjectKey), this.clearPendingDisconnect();
                      });
                  }
                  componentDidMount() {
                    const { getOpenMetamaskTabsIds: e } = this.props;
                    e();
                  }
                  renderConnectedSitesList() {
                    return r.default.createElement(o.default, {
                      connectedSubjects: this.props.connectedSubjects,
                      onDisconnect: this.setPendingDisconnect
                    });
                  }
                  renderConnectedSitesPopover() {
                    const {
                        accountLabel: e,
                        closePopover: t,
                        connectedSubjects: n,
                        tabToConnect: a,
                        requestAccountsPermission: o
                      } = this.props,
                      { t: i } = this.context;
                    return r.default.createElement(
                      s.default,
                      {
                        className: "connected-sites",
                        title: i("connectedSites"),
                        subtitle: n.length ? i("connectedSitesDescription", [e]) : i("connectedSitesEmptyDescription", [e]),
                        onClose: t,
                        footer: a
                          ? r.default.createElement("a", { className: "connected-sites__text-button", onClick: o }, i("connectManually"))
                          : null,
                        footerClassName: "connected-sites__add-site-manually"
                      },
                      this.renderConnectedSitesList()
                    );
                  }
                  renderDisconnectPopover() {
                    const { closePopover: e, permittedAccountsByOrigin: t } = this.props,
                      { t: n } = this.context,
                      {
                        sitePendingDisconnect: { subjectKey: a }
                      } = this.state,
                      o = t[a].length;
                    return r.default.createElement(s.default, {
                      className: "connected-sites",
                      title: n("disconnectPrompt", [a]),
                      subtitle: n("disconnectAllAccountsConfirmationDescription"),
                      onClose: e,
                      footer: r.default.createElement(
                        r.default.Fragment,
                        null,
                        r.default.createElement(
                          "div",
                          { className: "connected-sites__footer-row" },
                          r.default.createElement(i.default, { type: "secondary", onClick: this.clearPendingDisconnect }, n("cancel")),
                          r.default.createElement(i.default, { type: "primary", onClick: this.disconnectAccount }, n("disconnect"))
                        ),
                        o > 1
                          ? r.default.createElement(
                              "div",
                              { className: "connected-sites__footer-row" },
                              r.default.createElement(
                                "a",
                                { className: "connected-sites__text-button", onClick: this.disconnectAllAccounts },
                                n("disconnectAllAccounts")
                              )
                            )
                          : null
                      ),
                      footerClassName: "connected-sites__confirmation"
                    });
                  }
                  render() {
                    const { sitePendingDisconnect: e } = this.state;
                    return e ? this.renderDisconnectPopover() : this.renderConnectedSitesPopover();
                  }
                }
                (n.default = d),
                  u(d, "contextTypes", { t: a.default.func }),
                  u(d, "defaultProps", { tabToConnect: null }),
                  u(d, "propTypes", {
                    accountLabel: a.default.string.isRequired,
                    closePopover: a.default.func.isRequired,
                    connectedSubjects: a.default.arrayOf(a.default.object).isRequired,
                    disconnectAllAccounts: a.default.func.isRequired,
                    disconnectAccount: a.default.func.isRequired,
                    getOpenMetamaskTabsIds: a.default.func.isRequired,
                    permittedAccountsByOrigin: a.default.objectOf(a.default.arrayOf(a.default.string)).isRequired,
                    tabToConnect: a.default.object,
                    requestAccountsPermission: a.default.func.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/connected-sites/connected-sites.component.js" }
    ],
    [
      5696,
      {
        "../../ducks/history/history": 5526,
        "../../helpers/constants/routes": 5542,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "./connected-sites.component": 5695,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  o = e("../../store/actions"),
                  s = e("../../selectors"),
                  i = e("../../helpers/constants/routes"),
                  c = e("../../ducks/history/history"),
                  l = (a = e("./connected-sites.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)(
                  (e) => {
                    var t;
                    const { openMetaMaskTabs: n } = e.appState,
                      { id: a } = e.activeTab,
                      r = (0, s.getConnectedSubjectsForSelectedAddress)(e),
                      o = (0, s.getOriginOfCurrentTab)(e),
                      i = (0, s.getPermittedAccountsByOrigin)(e),
                      l = (0, s.getSelectedAddress)(e),
                      u = !(null !== (t = i[o]) && void 0 !== t && t.length);
                    let d;
                    return (
                      o && u && !n[a] && (d = { origin: o }),
                      {
                        accountLabel: (0, s.getCurrentAccountWithSendEtherInfo)(e).name,
                        connectedSubjects: r,
                        subjects: (0, s.getPermissionSubjects)(e),
                        mostRecentOverviewPage: (0, c.getMostRecentOverviewPage)(e),
                        permittedAccountsByOrigin: i,
                        selectedAddress: l,
                        tabToConnect: d
                      }
                    );
                  },
                  (e) => ({
                    getOpenMetamaskTabsIds: () => e((0, o.getOpenMetamaskTabsIds)()),
                    disconnectAccount: (t, n) => {
                      e((0, o.removePermittedAccount)(t, n));
                    },
                    disconnectAllAccounts: (t, n) => {
                      const a = Object.values(n.permissions).map(({ parentCapability: e }) => e);
                      e((0, o.removePermissionsFor)({ [t]: a }));
                    },
                    requestAccountsPermissionWithId: (t) => e((0, o.requestAccountsPermissionWithId)(t))
                  }),
                  (e, t, n) => {
                    const { connectedSubjects: a, subjects: r, mostRecentOverviewPage: o, selectedAddress: s, tabToConnect: c } = e,
                      { disconnectAccount: l, disconnectAllAccounts: u, requestAccountsPermissionWithId: d } = t,
                      { history: p } = n,
                      f = () => p.push(o);
                    return {
                      ...n,
                      ...e,
                      ...t,
                      closePopover: f,
                      disconnectAccount: (e) => {
                        l(e, s), 1 === a.length && f();
                      },
                      disconnectAllAccounts: (e) => {
                        u(e, r[e]), 1 === a.length && f();
                      },
                      requestAccountsPermission: async () => {
                        const e = await d(c.origin);
                        p.push(`${i.CONNECT_ROUTE}/${e}`);
                      }
                    };
                  }
                )(l.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/connected-sites/connected-sites.container.js" }
    ],
    [
      5697,
      { "./connected-sites.container": 5696 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./connected-sites.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/connected-sites/index.js" }
    ],
    [
      5698,
      {
        "../../../../shared/constants/hardware-wallets": 4754,
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/ui/button": 5377,
        "../../../components/ui/check-box": 5383,
        "../../../components/ui/dropdown": 5402,
        "../../../helpers/utils/util": 5578,
        "@metamask/etherscan-link": 1370,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = f(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  o = e("@metamask/etherscan-link"),
                  s = f(e("../../../components/ui/button")),
                  i = f(e("../../../components/ui/check-box")),
                  c = f(e("../../../components/ui/dropdown")),
                  l = e("../../../helpers/utils/util"),
                  u = e("../../../../shared/constants/hardware-wallets"),
                  d = e("../../../../shared/constants/metametrics");
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class g extends r.Component {
                  constructor(...e) {
                    super(...e),
                      m(this, "state", { pathValue: null }),
                      m(this, "goToNextPage", () => {
                        5 === this.props.accounts.length
                          ? this.props.getPage(this.props.device, 1, this.props.selectedPath)
                          : this.props.onAccountRestriction();
                      }),
                      m(this, "goToPreviousPage", () => {
                        this.props.getPage(this.props.device, -1, this.props.selectedPath);
                      });
                  }
                  setPath(e) {
                    this.setState({ pathValue: e });
                  }
                  isFirstPage() {
                    var e;
                    return 0 === (null === (e = this.props.accounts[0]) || void 0 === e ? void 0 : e.index);
                  }
                  renderHdPathSelector() {
                    const { device: e, selectedPath: t, hdPaths: n, onPathChange: a } = this.props,
                      { pathValue: o } = this.state;
                    return r.default.createElement(
                      "div",
                      null,
                      r.default.createElement("h3", { className: "hw-connect__hdPath__title" }, this.context.t("selectHdPath")),
                      r.default.createElement("p", { className: "hw-connect__msg" }, this.context.t("selectPathHelp")),
                      r.default.createElement(
                        "div",
                        { className: "hw-connect__hdPath" },
                        r.default.createElement(c.default, {
                          className: "hw-connect__hdPath__select",
                          options: n[e.toLowerCase()],
                          selectedOption: o || t,
                          onChange: (e) => {
                            this.setPath(e), a(e);
                          }
                        })
                      )
                    );
                  }
                  capitalizeDevice(e) {
                    return e.slice(0, 1).toUpperCase() + e.slice(1);
                  }
                  renderHeader() {
                    const { device: e } = this.props,
                      t = [u.HardwareDeviceNames.ledger, u.HardwareDeviceNames.lattice, u.HardwareDeviceNames.trezor].includes(
                        e.toLowerCase()
                      );
                    return r.default.createElement(
                      "div",
                      { className: "hw-connect" },
                      r.default.createElement("h3", { className: "hw-connect__unlock-title" }, this.context.t("selectAnAccount")),
                      t ? this.renderHdPathSelector() : null,
                      r.default.createElement("h3", { className: "hw-connect__hdPath__title" }, this.context.t("selectAnAccount"))
                    );
                  }
                  renderAccounts() {
                    const { accounts: e, connectedAccounts: t, rpcPrefs: n, chainId: a } = this.props;
                    return r.default.createElement(
                      "div",
                      { className: "hw-account-list" },
                      e.map((e, s) => {
                        const c = t.includes(e.address.toLowerCase()),
                          u = e.index,
                          p = this.props.selectedAccounts.includes(e.index) || c;
                        return r.default.createElement(
                          "div",
                          {
                            className: "hw-account-list__item",
                            key: e.address,
                            "data-testid": "hw-account-list__item",
                            title: c ? this.context.t("selectAnAccountAlreadyConnected") : ""
                          },
                          r.default.createElement(
                            "div",
                            { className: "hw-account-list__item__checkbox" },
                            r.default.createElement(i.default, {
                              id: `address-${s}`,
                              checked: p,
                              disabled: c,
                              onClick: () => {
                                this.props.onAccountChange(u);
                              }
                            }),
                            r.default.createElement(
                              "label",
                              { className: "hw-account-list__item__label", htmlFor: `address-${s}` },
                              r.default.createElement("span", { className: "hw-account-list__item__index" }, e.index + 1),
                              `${e.address.slice(0, 4)}...${e.address.slice(-4)}`,
                              r.default.createElement("span", { className: "hw-account-list__item__balance" }, `${e.balance}`)
                            )
                          ),
                          r.default.createElement(
                            "a",
                            {
                              className: "hw-account-list__item__link",
                              onClick: () => {
                                const t = (0, o.getAccountLink)(e.address, a, n);
                                this.context.trackEvent({
                                  category: d.MetaMetricsEventCategory.Accounts,
                                  event: "Clicked Block Explorer Link",
                                  properties: {
                                    actions: "Hardware Connect",
                                    link_type: "Account Tracker",
                                    block_explorer_domain: (0, l.getURLHostName)(t)
                                  }
                                }),
                                  global.platform.openTab({ url: t });
                              },
                              target: "_blank",
                              rel: "noopener noreferrer",
                              title: this.context.t("etherscanView")
                            },
                            r.default.createElement("i", { className: "fa fa-share-square", style: { color: "var(--color-icon-default)" } })
                          )
                        );
                      })
                    );
                  }
                  renderPagination() {
                    return r.default.createElement(
                      "div",
                      { className: "hw-list-pagination" },
                      r.default.createElement(
                        "button",
                        {
                          className: "hw-list-pagination__button",
                          disabled: this.isFirstPage(),
                          onClick: this.goToPreviousPage,
                          "data-testid": "hw-list-pagination__prev-button"
                        },
                        `< ${this.context.t("prev")}`
                      ),
                      r.default.createElement(
                        "button",
                        { className: "hw-list-pagination__button", onClick: this.goToNextPage },
                        `${this.context.t("next")} >`
                      )
                    );
                  }
                  renderButtons() {
                    const e = 0 === this.props.selectedAccounts.length;
                    return (
                      e && ({}.disabled = !0),
                      r.default.createElement(
                        "div",
                        { className: "new-external-account-form__buttons" },
                        r.default.createElement(
                          s.default,
                          {
                            type: "secondary",
                            large: !0,
                            className: "new-external-account-form__button",
                            onClick: this.props.onCancel.bind(this)
                          },
                          this.context.t("cancel")
                        ),
                        r.default.createElement(
                          s.default,
                          {
                            type: "primary",
                            large: !0,
                            className: "new-external-account-form__button unlock",
                            disabled: e,
                            onClick: this.props.onUnlockAccounts.bind(this, this.props.device, this.props.selectedPath)
                          },
                          this.context.t("unlock")
                        )
                      )
                    );
                  }
                  renderForgetDevice() {
                    return r.default.createElement(
                      "div",
                      { className: "hw-forget-device-container" },
                      r.default.createElement(
                        "a",
                        { onClick: this.props.onForgetDevice.bind(this, this.props.device) },
                        this.context.t("forgetDevice")
                      )
                    );
                  }
                  render() {
                    return r.default.createElement(
                      "div",
                      { className: "new-external-account-form account-list" },
                      this.renderHeader(),
                      this.renderAccounts(),
                      this.renderPagination(),
                      this.renderButtons(),
                      this.renderForgetDevice()
                    );
                  }
                }
                (g.propTypes = {
                  onPathChange: a.default.func.isRequired,
                  selectedPath: a.default.string.isRequired,
                  device: a.default.string.isRequired,
                  accounts: a.default.array.isRequired,
                  connectedAccounts: a.default.array.isRequired,
                  onAccountChange: a.default.func.isRequired,
                  onForgetDevice: a.default.func.isRequired,
                  getPage: a.default.func.isRequired,
                  chainId: a.default.string,
                  rpcPrefs: a.default.object,
                  selectedAccounts: a.default.array.isRequired,
                  onUnlockAccounts: a.default.func,
                  onCancel: a.default.func,
                  onAccountRestriction: a.default.func,
                  hdPaths: a.default.object.isRequired
                }),
                  (g.contextTypes = { t: a.default.func, trackEvent: a.default.func });
                n.default = g;
              };
            };
      },
      { package: "$root$", file: "ui/pages/create-account/connect-hardware/account-list.js" }
    ],
    [
      5699,
      {
        "../../../../shared/constants/hardware-wallets": 4754,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/time": 4768,
        "../../../components/component-library": 5242,
        "../../../ducks/history/history": 5526,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/zendesk-url": 5547,
        "../../../helpers/utils/util": 5578,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "./account-list": 5698,
        "./select-hardware": 5700,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = n.TREZOR_HD_PATHS = n.LEDGER_HD_PATHS = n.LATTICE_HD_PATHS = void 0);
                var a = v(e("react")),
                  r = A(e("prop-types")),
                  o = e("react-redux"),
                  s = v(e("../../../store/actions")),
                  i = e("../../../selectors"),
                  c = e("../../../helpers/utils/util"),
                  l = e("../../../ducks/history/history"),
                  u = e("../../../../shared/constants/metametrics"),
                  d = e("../../../../shared/constants/time"),
                  p = e("../../../../shared/constants/hardware-wallets"),
                  f = e("../../../components/component-library"),
                  m = A(e("../../../helpers/constants/zendesk-url")),
                  g = e("../../../helpers/constants/design-system"),
                  h = A(e("./select-hardware")),
                  y = A(e("./account-list"));
                function A(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function v(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = E(t);
                  if (n && n.has(e)) return n.get(e);
                  var a = { __proto__: null },
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                      var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                      s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                    }
                  return (a.default = e), n && n.set(e, a), a;
                }
                function T(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                const b = "U2F",
                  w = "m/44'/60'/0'",
                  k = "m/44'/60'/0'/0",
                  C = "m/44'/60'/0'/0/x",
                  x = "m/44'/60'/x'/0/0",
                  P = "m/44'/60'/0'/x",
                  N = {
                    ledger: (n.LEDGER_HD_PATHS = [
                      { name: "Ledger Live", value: "m/44'/60'/0'/0/0" },
                      { name: "Legacy (MEW / MyCrypto)", value: w },
                      { name: "BIP44 Standard (e.g. MetaMask, Trezor)", value: k }
                    ]),
                    lattice: (n.LATTICE_HD_PATHS = [
                      { name: `Standard (${C})`, value: C },
                      { name: `Ledger Live (${x})`, value: x },
                      { name: `Ledger Legacy (${P})`, value: P }
                    ]),
                    trezor: (n.TREZOR_HD_PATHS = [
                      { name: "BIP44 Standard (e.g. MetaMask, Trezor)", value: k },
                      { name: "Legacy (Ledger / MEW / MyCrypto)", value: w },
                      { name: "Trezor Testnets", value: "m/44'/1'/0'/0" }
                    ])
                  };
                class O extends a.Component {
                  constructor(...e) {
                    super(...e),
                      T(this, "state", {
                        error: null,
                        selectedAccounts: [],
                        accounts: [],
                        browserSupported: !0,
                        unlocked: !1,
                        device: null,
                        isFirefox: !1
                      }),
                      T(this, "connectToHardwareWallet", (e) => {
                        this.setState({ device: e }), this.state.accounts.length || this.getPage(e, 0, this.props.defaultHdPaths[e]);
                      }),
                      T(this, "onPathChange", (e) => {
                        this.props.setHardwareWalletDefaultHdPath({ device: this.state.device, path: e }),
                          this.setState({ selectedAccounts: [] }),
                          this.getPage(this.state.device, 0, e);
                      }),
                      T(this, "onAccountChange", (e) => {
                        let { selectedAccounts: t } = this.state;
                        t.includes(e) ? (t = t.filter((t) => e !== t)) : t.push(e), this.setState({ selectedAccounts: t, error: null });
                      }),
                      T(this, "onAccountRestriction", () => {
                        this.setState({ error: this.context.t("ledgerAccountRestriction") });
                      }),
                      T(this, "getPage", (e, t, n) => {
                        this.props
                          .connectHardware(e, t, n, this.context.t)
                          .then((t) => {
                            if (t.length) {
                              0 !== this.state.accounts.length || this.state.unlocked || this.showTemporaryAlert();
                              const n = t.map((e) => {
                                var t;
                                const n = e.address.toLowerCase(),
                                  a = (null === (t = this.props.accounts[n]) || void 0 === t ? void 0 : t.balance) || null;
                                return (e.balance = a ? (0, c.formatBalance)(a, 6) : "..."), e;
                              });
                              this.setState({ accounts: n, unlocked: !0, device: e, error: null });
                            }
                          })
                          .catch((e) => {
                            const t = "string" == typeof e ? e : e.message;
                            "Window blocked" === t
                              ? this.setState({ browserSupported: !1, error: null })
                              : t.includes(b)
                              ? this.setState({ error: b })
                              : "LEDGER_LOCKED" === t || "LEDGER_WRONG_APP" === t
                              ? this.setState({ error: this.context.t("ledgerLocked") })
                              : t.includes("timeout")
                              ? this.setState({ error: this.context.t("ledgerTimeout") })
                              : t.toLowerCase().includes("KeystoneError#pubkey_account.no_expected_account".toLowerCase())
                              ? this.setState({ error: this.context.t("QRHardwarePubkeyAccountOutOfRange") })
                              : "Window closed" !== t &&
                                "Popup closed" !== t &&
                                !1 === t.toLowerCase().includes("KeystoneError#sync_cancel".toLowerCase()) &&
                                this.setState({ error: t });
                          });
                      }),
                      T(this, "onForgetDevice", (e) => {
                        this.props
                          .forgetDevice(e)
                          .then((e) => {
                            this.setState({ error: null, selectedAccounts: [], accounts: [], unlocked: !1 });
                          })
                          .catch((e) => {
                            this.setState({ error: e.message });
                          });
                      }),
                      T(this, "onUnlockAccounts", (e, t) => {
                        const { history: n, mostRecentOverviewPage: a, unlockHardwareWalletAccounts: r } = this.props,
                          { selectedAccounts: o } = this.state;
                        0 === o.length && this.setState({ error: this.context.t("accountSelectionRequired") });
                        const s = w === t ? this.context.t("hardwareWalletLegacyDescription") : "";
                        return r(o, e, t || null, s)
                          .then((t) => {
                            this.context.trackEvent({
                              category: u.MetaMetricsEventCategory.Accounts,
                              event: u.MetaMetricsEventName.AccountAdded,
                              properties: { account_type: u.MetaMetricsEventAccountType.Hardware, account_hardware_type: e }
                            }),
                              n.push(a);
                          })
                          .catch((t) => {
                            this.context.trackEvent({
                              category: u.MetaMetricsEventCategory.Accounts,
                              event: u.MetaMetricsEventName.AccountAddFailed,
                              properties: {
                                account_type: u.MetaMetricsEventAccountType.Hardware,
                                account_hardware_type: e,
                                error: t.message
                              }
                            }),
                              this.setState({ error: t.message });
                          });
                      }),
                      T(this, "onCancel", () => {
                        const { history: e, mostRecentOverviewPage: t } = this.props;
                        e.push(t);
                      });
                  }
                  UNSAFE_componentWillReceiveProps(e) {
                    const { accounts: t } = e,
                      n = this.state.accounts.map((e) => {
                        var n;
                        const a = e.address.toLowerCase(),
                          r = (null === (n = t[a]) || void 0 === n ? void 0 : n.balance) || null;
                        return (e.balance = r ? (0, c.formatBalance)(r, 6) : "..."), e;
                      });
                    this.setState({ accounts: n });
                  }
                  componentDidMount() {
                    this.checkIfUnlocked();
                    const e = window.navigator.userAgent;
                    /Firefox/u.test(e) && this.setState({ isFirefox: !0 });
                  }
                  async checkIfUnlocked() {
                    for (const e of [p.HardwareDeviceNames.trezor, p.HardwareDeviceNames.ledger, p.HardwareDeviceNames.lattice]) {
                      const t = this.props.defaultHdPaths[e];
                      (await this.props.checkHardwareStatus(e, t)) && (this.setState({ unlocked: !0 }), this.getPage(e, 0, t));
                    }
                  }
                  showTemporaryAlert() {
                    this.props.showAlert(this.context.t("hardwareWalletConnected")),
                      setTimeout((e) => {
                        this.props.hideAlert();
                      }, 5 * d.SECOND);
                  }
                  renderError() {
                    return this.state.error === b
                      ? "ledger" === this.state.device && this.state.isFirefox
                        ? a.default.createElement(
                            a.default.Fragment,
                            null,
                            a.default.createElement(
                              f.Text,
                              { color: g.TextColor.warningDefault, margin: [5, 5, 2] },
                              this.context.t("troubleConnectingToLedgerU2FOnFirefox", [
                                a.default.createElement(
                                  f.Button,
                                  {
                                    variant: f.BUTTON_VARIANT.LINK,
                                    href: m.default.HARDWARE_CONNECTION,
                                    size: f.BUTTON_SIZES.INHERIT,
                                    key: "u2f-error-1",
                                    as: "a",
                                    block: !1,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  },
                                  this.context.t("troubleConnectingToLedgerU2FOnFirefox2")
                                )
                              ])
                            ),
                            a.default.createElement(
                              f.Text,
                              { color: g.TextColor.warningDefault, margin: [5, 5, 2] },
                              this.context.t("troubleConnectingToLedgerU2FOnFirefoxLedgerSolution", [
                                a.default.createElement(
                                  f.Button,
                                  {
                                    variant: f.BUTTON_VARIANT.LINK,
                                    href: m.default.LEDGER_FIREFOX_U2F_GUIDE,
                                    size: f.BUTTON_SIZES.INHERIT,
                                    key: "u2f-error-1",
                                    as: "a",
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  },
                                  this.context.t("troubleConnectingToLedgerU2FOnFirefoxLedgerSolution2")
                                )
                              ])
                            )
                          )
                        : a.default.createElement(
                            f.Text,
                            { color: g.TextColor.warningDefault, margin: [5, 5, 2] },
                            this.context.t("troubleConnectingToWallet", [
                              this.state.device,
                              a.default.createElement(
                                f.Button,
                                { variant: f.BUTTON_VARIANT.LINK, href: m.default.HARDWARE_CONNECTION, key: "u2f-error-1" },
                                this.context.t("walletConnectionGuide")
                              )
                            ])
                          )
                      : this.state.error
                      ? a.default.createElement("span", { className: "hw-connect__error" }, this.state.error)
                      : null;
                  }
                  renderContent() {
                    return this.state.accounts.length
                      ? a.default.createElement(y.default, {
                          onPathChange: this.onPathChange,
                          selectedPath: this.props.defaultHdPaths[this.state.device],
                          device: this.state.device,
                          accounts: this.state.accounts,
                          connectedAccounts: this.props.connectedAccounts,
                          selectedAccounts: this.state.selectedAccounts,
                          onAccountChange: this.onAccountChange,
                          chainId: this.props.chainId,
                          rpcPrefs: this.props.rpcPrefs,
                          getPage: this.getPage,
                          onUnlockAccounts: this.onUnlockAccounts,
                          onForgetDevice: this.onForgetDevice,
                          onCancel: this.onCancel,
                          onAccountRestriction: this.onAccountRestriction,
                          hdPaths: N
                        })
                      : a.default.createElement(h.default, {
                          connectToHardwareWallet: this.connectToHardwareWallet,
                          browserSupported: this.state.browserSupported,
                          ledgerTransportType: this.props.ledgerTransportType,
                          onCancel: this.onCancel
                        });
                  }
                  render() {
                    return a.default.createElement(a.default.Fragment, null, this.renderError(), this.renderContent());
                  }
                }
                T(O, "contextTypes", { t: r.default.func }),
                  (O.propTypes = {
                    connectHardware: r.default.func,
                    checkHardwareStatus: r.default.func,
                    forgetDevice: r.default.func,
                    showAlert: r.default.func,
                    hideAlert: r.default.func,
                    unlockHardwareWalletAccounts: r.default.func,
                    setHardwareWalletDefaultHdPath: r.default.func,
                    history: r.default.object,
                    chainId: r.default.string,
                    rpcPrefs: r.default.object,
                    accounts: r.default.object,
                    connectedAccounts: r.default.array.isRequired,
                    defaultHdPaths: r.default.object,
                    mostRecentOverviewPage: r.default.string.isRequired,
                    ledgerTransportType: r.default.oneOf(Object.values(p.LedgerTransportTypes))
                  });
                O.contextTypes = { t: r.default.func, trackEvent: r.default.func };
                n.default = (0, o.connect)(
                  (e) => ({
                    chainId: (0, i.getCurrentChainId)(e),
                    rpcPrefs: (0, i.getRpcPrefsForCurrentProvider)(e),
                    accounts: (0, i.getMetaMaskAccounts)(e),
                    connectedAccounts: (0, i.getMetaMaskAccountsConnected)(e),
                    defaultHdPaths: e.appState.defaultHdPaths,
                    mostRecentOverviewPage: (0, l.getMostRecentOverviewPage)(e),
                    ledgerTransportType: e.metamask.ledgerTransportType
                  }),
                  (e) => ({
                    setHardwareWalletDefaultHdPath: ({ device: t, path: n }) => e(s.setHardwareWalletDefaultHdPath({ device: t, path: n })),
                    connectHardware: (t, n, a, r) => e(s.connectHardware(t, n, a, r)),
                    checkHardwareStatus: (t, n) => e(s.checkHardwareStatus(t, n)),
                    forgetDevice: (t) => e(s.forgetDevice(t)),
                    unlockHardwareWalletAccounts: (t, n, a, r) => e(s.unlockHardwareWalletAccounts(t, n, a, r)),
                    showAlert: (t) => e(s.showAlert(t)),
                    hideAlert: () => e(s.hideAlert())
                  })
                )(O);
              };
            };
      },
      { package: "$root$", file: "ui/pages/create-account/connect-hardware/index.js" }
    ],
    [
      5700,
      {
        "../../../../shared/constants/hardware-wallets": 4754,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/modules/mv3.utils": 4790,
        "../../../components/component-library": 5242,
        "../../../components/ui/logo/logo-lattice": 5441,
        "../../../components/ui/logo/logo-ledger": 5442,
        "../../../components/ui/logo/logo-qr-based": 5443,
        "../../../components/ui/logo/logo-trezor": 5444,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/zendesk-url": 5547,
        "../../../helpers/utils/window": 5580,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = A(e("classnames")),
                  r = A(e("prop-types")),
                  o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  s = e("../../../components/component-library"),
                  i = A(e("../../../components/ui/logo/logo-ledger")),
                  c = A(e("../../../components/ui/logo/logo-qr-based")),
                  l = A(e("../../../components/ui/logo/logo-trezor")),
                  u = A(e("../../../components/ui/logo/logo-lattice")),
                  d = e("../../../../shared/constants/hardware-wallets"),
                  p = A(e("../../../helpers/constants/zendesk-url")),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../../../shared/modules/mv3.utils"),
                  g = e("../../../helpers/utils/window"),
                  h = e("../../../helpers/constants/design-system");
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (y = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function A(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E() {
                  return (
                    (E = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                          }
                          return e;
                        }),
                    E.apply(this, arguments)
                  );
                }
                function v(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class T extends o.Component {
                  constructor(...e) {
                    super(...e),
                      v(this, "state", { selectedDevice: null }),
                      v(
                        this,
                        "connect",
                        () => (this.state.selectedDevice && this.props.connectToHardwareWallet(this.state.selectedDevice), null)
                      );
                  }
                  shouldShowConnectButton() {
                    return !m.isManifestV3 || !1;
                  }
                  renderConnectToTrezorButton() {
                    return o.default.createElement(
                      "button",
                      {
                        className: (0, a.default)("hw-connect__btn", {
                          selected: this.state.selectedDevice === d.HardwareDeviceNames.trezor
                        }),
                        onClick: (e) => this.setState({ selectedDevice: d.HardwareDeviceNames.trezor })
                      },
                      o.default.createElement(l.default, { className: "hw-connect__btn__img", ariaLabel: "Trezor" })
                    );
                  }
                  renderConnectToLatticeButton() {
                    return o.default.createElement(
                      "button",
                      {
                        className: (0, a.default)("hw-connect__btn", {
                          selected: this.state.selectedDevice === d.HardwareDeviceNames.lattice
                        }),
                        onClick: (e) => this.setState({ selectedDevice: d.HardwareDeviceNames.lattice })
                      },
                      o.default.createElement(u.default, { className: "hw-connect__btn__img", ariaLabel: "Lattice" })
                    );
                  }
                  renderConnectToLedgerButton() {
                    return o.default.createElement(
                      "button",
                      {
                        className: (0, a.default)("hw-connect__btn", {
                          selected: this.state.selectedDevice === d.HardwareDeviceNames.ledger
                        }),
                        onClick: (e) => this.setState({ selectedDevice: d.HardwareDeviceNames.ledger })
                      },
                      o.default.createElement(i.default, { className: "hw-connect__btn__img", ariaLabel: "Ledger" })
                    );
                  }
                  renderConnectToQRButton() {
                    return o.default.createElement(
                      "button",
                      {
                        className: (0, a.default)("hw-connect__btn", { selected: this.state.selectedDevice === d.HardwareDeviceNames.qr }),
                        onClick: (e) => this.setState({ selectedDevice: d.HardwareDeviceNames.qr })
                      },
                      o.default.createElement(c.default, { className: "hw-connect__btn__img", ariaLabel: "QRCode" })
                    );
                  }
                  renderButtons() {
                    return o.default.createElement(
                      o.default.Fragment,
                      null,
                      o.default.createElement(
                        "div",
                        { className: "hw-connect__btn-wrapper" },
                        this.shouldShowConnectButton() && this.renderConnectToLedgerButton(),
                        this.shouldShowConnectButton() && this.renderConnectToTrezorButton()
                      ),
                      o.default.createElement(
                        "div",
                        { className: "hw-connect__btn-wrapper", style: { margin: "10px 0 0 0" } },
                        this.shouldShowConnectButton() && this.renderConnectToLatticeButton(),
                        this.renderConnectToQRButton()
                      )
                    );
                  }
                  renderContinueButton() {
                    return o.default.createElement(
                      s.Button,
                      {
                        variant: s.BUTTON_VARIANT.PRIMARY,
                        size: s.BUTTON_SIZES.LG,
                        className: "hw-connect__connect-btn",
                        onClick: this.connect,
                        disabled: !this.state.selectedDevice
                      },
                      this.context.t("continue")
                    );
                  }
                  renderFooter() {
                    return o.default.createElement(
                      s.Text,
                      {
                        color: h.TextColor.textAlternative,
                        variant: h.TextVariant.bodySm,
                        textAlign: h.TextAlign.Center,
                        as: "h6",
                        marginTop: 4,
                        className: "new-external-account-form footer"
                      },
                      this.context.t("hardwareWalletsInfo")
                    );
                  }
                  renderUnsupportedBrowser() {
                    return o.default.createElement(
                      s.Box,
                      {
                        display: h.Display.Flex,
                        flexDirection: h.FlexDirection.Column,
                        justifyContent: h.JustifyContent.center,
                        alignItems: h.AlignItems.center,
                        className: "new-external-account-form unsupported-browser"
                      },
                      o.default.createElement(
                        s.Box,
                        {
                          className: "hw-connect",
                          display: h.Display.Flex,
                          flexDirection: h.FlexDirection.Column,
                          alignItems: h.AlignItems.center
                        },
                        o.default.createElement(
                          s.Text,
                          {
                            className: "hw-connect__title",
                            variant: h.TextVariant.headingMd,
                            as: "h3",
                            fontWeight: h.FontWeight.Bold,
                            marginTop: 6,
                            marginBottom: 3
                          },
                          this.context.t("browserNotSupported")
                        ),
                        o.default.createElement(
                          s.Text,
                          { className: "hw-connect__msg", variant: h.TextVariant.bodyMd, as: "h5", marginTop: 3, marginBottom: 5 },
                          this.context.t("chromeRequiredForHardwareWallets")
                        )
                      ),
                      o.default.createElement(
                        s.Button,
                        {
                          variant: s.BUTTON_VARIANT.PRIMARY,
                          size: s.BUTTON_SIZES.LG,
                          onClick: () => global.platform.openTab({ url: "https://google.com/chrome" })
                        },
                        this.context.t("downloadGoogleChrome")
                      )
                    );
                  }
                  renderHeader() {
                    return o.default.createElement(
                      s.Box,
                      {
                        className: "hw-connect__header",
                        display: h.Display.Flex,
                        flexDirection: h.FlexDirection.Column,
                        alignItems: h.AlignItems.center
                      },
                      o.default.createElement(
                        s.Box,
                        {
                          display: h.Display.Flex,
                          flexDirection: h.FlexDirection.Row,
                          justifyContent: h.JustifyContent.center,
                          alignItems: h.AlignItems.center,
                          className: "hw-connect__header__title-wrapper",
                          marginTop: 6
                        },
                        o.default.createElement(
                          s.Text,
                          { variant: h.TextVariant.headingMd, as: "h3", fontWeight: h.FontWeight.Bold, marginLeft: "auto" },
                          this.context.t("hardwareWallets")
                        ),
                        o.default.createElement(s.ButtonIcon, {
                          iconName: s.IconName.Close,
                          ariaLabel: this.context.t("close"),
                          onClick: this.props.onCancel,
                          size: s.ButtonIconSize.Sm,
                          marginLeft: "auto",
                          "data-testid": "hardware-connect-close-btn"
                        })
                      ),
                      o.default.createElement(
                        s.Text,
                        { className: "hw-connect__header__msg", variant: h.TextVariant.bodyMd, as: "h5", marginTop: 5, marginBottom: 3 },
                        this.context.t("hardwareWalletsMsg")
                      )
                    );
                  }
                  renderTutorialSteps() {
                    switch (this.state.selectedDevice) {
                      case d.HardwareDeviceNames.ledger:
                        return this.renderLedgerTutorialSteps();
                      case d.HardwareDeviceNames.trezor:
                        return this.renderTrezorTutorialSteps();
                      case d.HardwareDeviceNames.lattice:
                        return this.renderLatticeTutorialSteps();
                      case d.HardwareDeviceNames.qr:
                        return this.renderQRHardwareWalletSteps();
                      default:
                        return "";
                    }
                  }
                  renderLedgerTutorialSteps() {
                    const e = [];
                    return (
                      this.props.ledgerTransportType === d.LedgerTransportTypes.live &&
                        e.push({
                          renderButtons: !1,
                          title: this.context.t("step1LedgerWallet"),
                          message: this.context.t("step1LedgerWalletMsg", [
                            o.default.createElement(
                              "a",
                              {
                                className: "hw-connect__msg-link",
                                href: "https://www.ledger.com/ledger-live",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                key: "ledger-live-app-link"
                              },
                              this.context.t("ledgerLiveApp")
                            )
                          ])
                        }),
                      e.push({
                        renderButtons: !0,
                        asset: "plug-in-wallet",
                        dimensions: { width: "225px", height: "75px" },
                        title: this.context.t("step2LedgerWallet"),
                        message: this.context.t("step2LedgerWalletMsg", [
                          o.default.createElement(
                            "a",
                            {
                              className: "hw-connect__msg-link",
                              href: p.default.HARDWARE_CONNECTION,
                              rel: "noopener noreferrer",
                              target: "_blank",
                              key: "ledger-support-link"
                            },
                            this.context.t("hardwareWalletSupportLinkConversion")
                          )
                        ])
                      }),
                      o.default.createElement(
                        "div",
                        { className: "hw-tutorial" },
                        e.map((e, t) =>
                          o.default.createElement(
                            s.Box,
                            {
                              display: h.Display.Flex,
                              flexDirection: h.FlexDirection.Column,
                              alignItems: h.AlignItems.center,
                              className: "hw-connect",
                              key: t
                            },
                            o.default.createElement("h3", { className: "hw-connect__title" }, e.title),
                            e.renderButtons
                              ? o.default.createElement(
                                  s.Box,
                                  {
                                    display: h.Display.Flex,
                                    flexDirection: h.FlexDirection.Row,
                                    justifyContent: h.JustifyContent.center,
                                    marginBottom: 2
                                  },
                                  o.default.createElement(
                                    s.Button,
                                    {
                                      className: "hw-connect__external-btn-first",
                                      variant: s.BUTTON_VARIANT.SECONDARY,
                                      onClick: () => {
                                        this.context.trackEvent({
                                          category: f.MetaMetricsEventCategory.Navigation,
                                          event: "Clicked Ledger Buy Now"
                                        }),
                                          (0, g.openWindow)(d.HardwareAffiliateLinks.ledger);
                                      }
                                    },
                                    this.context.t("buyNow")
                                  ),
                                  o.default.createElement(
                                    s.Button,
                                    {
                                      className: "hw-connect__external-btn",
                                      variant: s.BUTTON_VARIANT.SECONDARY,
                                      onClick: () => {
                                        this.context.trackEvent({
                                          category: f.MetaMetricsEventCategory.Navigation,
                                          event: "Clicked Ledger Tutorial"
                                        }),
                                          (0, g.openWindow)(d.HardwareAffiliateTutorialLinks.ledger);
                                      }
                                    },
                                    this.context.t("tutorial")
                                  )
                                )
                              : null,
                            o.default.createElement("p", { className: "hw-connect__msg" }, e.message),
                            e.asset &&
                              o.default.createElement(
                                "img",
                                E({ className: "hw-connect__step-asset", src: `images/${e.asset}.svg` }, e.dimensions, { alt: "" })
                              )
                          )
                        )
                      )
                    );
                  }
                  renderLatticeTutorialSteps() {
                    const e = [
                      {
                        asset: "connect-lattice",
                        dimensions: { width: "225px", height: "75px" },
                        title: this.context.t("step1LatticeWallet"),
                        message: this.context.t("step1LatticeWalletMsg", [
                          o.default.createElement(
                            "a",
                            {
                              className: "hw-connect__msg-link",
                              href: p.default.HARDWARE_CONNECTION,
                              rel: "noopener noreferrer",
                              target: "_blank",
                              key: "lattice-setup-link"
                            },
                            this.context.t("hardwareWalletSupportLinkConversion")
                          )
                        ])
                      }
                    ];
                    return o.default.createElement(
                      "div",
                      { className: "hw-tutorial" },
                      e.map((e, t) =>
                        o.default.createElement(
                          s.Box,
                          {
                            display: h.Display.Flex,
                            flexDirection: h.FlexDirection.Column,
                            alignItems: h.AlignItems.center,
                            className: "hw-connect",
                            key: t
                          },
                          o.default.createElement("h3", { className: "hw-connect__title" }, e.title),
                          o.default.createElement(
                            s.Box,
                            {
                              display: h.Display.Flex,
                              flexDirection: h.FlexDirection.Row,
                              justifyContent: h.JustifyContent.center,
                              marginBottom: 2
                            },
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn-first",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked GridPlus Buy Now"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateLinks.gridplus);
                                }
                              },
                              this.context.t("buyNow")
                            ),
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked GidPlus Tutorial"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateTutorialLinks.gridplus);
                                }
                              },
                              this.context.t("tutorial")
                            )
                          ),
                          o.default.createElement("p", { className: "hw-connect__msg" }, e.message),
                          e.asset &&
                            o.default.createElement(
                              "img",
                              E({ className: "hw-connect__step-asset", src: `images/${e.asset}.svg` }, e.dimensions, { alt: "" })
                            )
                        )
                      )
                    );
                  }
                  renderTrezorTutorialSteps() {
                    const e = [
                      {
                        asset: "plug-in-wallet",
                        dimensions: { width: "225px", height: "75px" },
                        title: this.context.t("step1TrezorWallet"),
                        message: this.context.t("step1TrezorWalletMsg", [
                          o.default.createElement(
                            "a",
                            {
                              className: "hw-connect__msg-link",
                              href: p.default.HARDWARE_CONNECTION,
                              rel: "noopener noreferrer",
                              target: "_blank",
                              key: "trezor-support-link"
                            },
                            this.context.t("hardwareWalletSupportLinkConversion")
                          )
                        ])
                      }
                    ];
                    return o.default.createElement(
                      "div",
                      { className: "hw-tutorial" },
                      e.map((e, t) =>
                        o.default.createElement(
                          s.Box,
                          {
                            display: h.Display.Flex,
                            flexDirection: h.FlexDirection.Column,
                            alignItems: h.AlignItems.center,
                            className: "hw-connect",
                            key: t
                          },
                          o.default.createElement("h3", { className: "hw-connect__title" }, e.title),
                          o.default.createElement(
                            s.Box,
                            {
                              display: h.Display.Flex,
                              flexDirection: h.FlexDirection.Row,
                              justifyContent: h.JustifyContent.center,
                              marginBottom: 2
                            },
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn-first",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked Trezor Buy Now"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateLinks.trezor);
                                }
                              },
                              this.context.t("buyNow")
                            ),
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked Trezor Tutorial"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateTutorialLinks.trezor);
                                }
                              },
                              this.context.t("tutorial")
                            )
                          ),
                          o.default.createElement("p", { className: "hw-connect__msg" }, e.message),
                          e.asset &&
                            o.default.createElement(
                              "img",
                              E({ className: "hw-connect__step-asset", src: `images/${e.asset}.svg` }, e.dimensions, { alt: "" })
                            )
                        )
                      )
                    );
                  }
                  renderQRHardwareWalletSteps() {
                    const e = [];
                    return (
                      e.push(
                        {
                          title: this.context.t("QRHardwareWalletSteps1Title"),
                          message: this.context.t("QRHardwareWalletSteps1Description")
                        },
                        {
                          message: o.default.createElement(
                            o.default.Fragment,
                            null,
                            o.default.createElement("p", { className: "hw-connect__QR-subtitle" }, this.context.t("keystone")),
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn-first",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked Keystone Learn More"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateLinks.keystone);
                                }
                              },
                              this.context.t("learnMoreKeystone")
                            ),
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked Keystone Tutorial"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateTutorialLinks.keystone);
                                }
                              },
                              this.context.t("tutorial")
                            )
                          )
                        },
                        {
                          message: o.default.createElement(
                            o.default.Fragment,
                            null,
                            o.default.createElement("p", { className: "hw-connect__QR-subtitle" }, this.context.t("airgapVault")),
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn-first",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked AirGap Vault Buy Now"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateLinks.airgap);
                                }
                              },
                              this.context.t("downloadNow")
                            ),
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked AirGap Vault Tutorial"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateTutorialLinks.airgap);
                                }
                              },
                              this.context.t("tutorial")
                            )
                          )
                        },
                        {
                          message: o.default.createElement(
                            o.default.Fragment,
                            null,
                            o.default.createElement("p", { className: "hw-connect__QR-subtitle" }, this.context.t("coolWallet")),
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn-first",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked CoolWallet Buy Now"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateLinks.coolwallet);
                                }
                              },
                              this.context.t("buyNow")
                            ),
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked CoolWallet Tutorial"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateTutorialLinks.coolwallet);
                                }
                              },
                              this.context.t("tutorial")
                            )
                          )
                        },
                        {
                          message: o.default.createElement(
                            o.default.Fragment,
                            null,
                            o.default.createElement("p", { className: "hw-connect__QR-subtitle" }, this.context.t("dcent")),
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn-first",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked DCent Buy Now"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateLinks.dcent);
                                }
                              },
                              this.context.t("buyNow")
                            ),
                            o.default.createElement(
                              s.Button,
                              {
                                className: "hw-connect__external-btn",
                                variant: s.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Navigation,
                                    event: "Clicked DCent Tutorial"
                                  }),
                                    (0, g.openWindow)(d.HardwareAffiliateTutorialLinks.dcent);
                                }
                              },
                              this.context.t("tutorial")
                            )
                          )
                        },
                        { message: this.context.t("QRHardwareWalletSteps2Description") },
                        { asset: "qrcode-wallet-demo", dimensions: { width: "225px", height: "75px" } }
                      ),
                      o.default.createElement(
                        "div",
                        { className: "hw-tutorial" },
                        e.map((e, t) =>
                          o.default.createElement(
                            "div",
                            { className: "hw-connect", key: t },
                            e.title && o.default.createElement("h3", { className: "hw-connect__title" }, e.title),
                            o.default.createElement("div", { className: "hw-connect__msg" }, e.message),
                            e.asset &&
                              o.default.createElement(
                                "img",
                                E({ className: "hw-connect__step-asset", src: `images/${e.asset}.svg` }, e.dimensions, { alt: "" })
                              )
                          )
                        )
                      )
                    );
                  }
                  renderConnectScreen() {
                    return o.default.createElement(
                      s.Box,
                      {
                        className: "new-external-account-form",
                        display: h.Display.Flex,
                        flexDirection: h.FlexDirection.Column,
                        alignItems: h.AlignItems.center,
                        justifyContent: h.JustifyContent.center
                      },
                      this.renderHeader(),
                      this.renderButtons(),
                      this.state.selectedDevice ? this.renderTutorialSteps() : null,
                      this.renderContinueButton(),
                      this.renderFooter()
                    );
                  }
                  render() {
                    return this.props.browserSupported ? this.renderConnectScreen() : this.renderUnsupportedBrowser();
                  }
                }
                (n.default = T),
                  v(T, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                  v(T, "propTypes", {
                    onCancel: r.default.func.isRequired,
                    connectToHardwareWallet: r.default.func.isRequired,
                    browserSupported: r.default.bool.isRequired,
                    ledgerTransportType: r.default.oneOf(Object.values(d.LedgerTransportTypes))
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/create-account/connect-hardware/select-hardware.js" }
    ],
    [
      5701,
      {
        "../../components/component-library": 5242,
        "../../helpers/constants/routes": 5542,
        "./connect-hardware": 5699,
        react: 4475,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    return a.default.createElement(
                      o.Box,
                      { className: "new-account-wrapper" },
                      a.default.createElement(
                        r.Switch,
                        null,
                        a.default.createElement(r.Route, { exact: !0, path: s.CONNECT_HARDWARE_ROUTE, component: i.default })
                      )
                    );
                  });
                var a = c(e("react")),
                  r = e("react-router-dom"),
                  o = e("../../components/component-library"),
                  s = e("../../helpers/constants/routes"),
                  i = c(e("./connect-hardware"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/create-account/create-account.component.js" }
    ],
    [
      5702,
      {
        "../../../components/app/snaps/snap-avatar": 5082,
        "../../../components/component-library": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = c(e("react")),
                  r = e("../../../components/component-library"),
                  o = e("../../../helpers/constants/design-system"),
                  s = c(e("../../../components/app/snaps/snap-avatar")),
                  i = e("../../../hooks/useI18nContext");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = ({ snapName: e, snapId: t }) => {
                  const n = (0, i.useI18nContext)();
                  return a.default.createElement(
                    r.Box,
                    { display: o.Display.Flex, flexDirection: o.FlexDirection.Column, justifyContent: o.JustifyContent.spaceBetween },
                    a.default.createElement(
                      r.Box,
                      { display: o.Display.Flex, flexDirection: o.FlexDirection.Column, alignItems: o.AlignItems.center },
                      a.default.createElement(
                        r.Box,
                        { paddingBottom: 2 },
                        a.default.createElement(s.default, {
                          snapId: t,
                          badgeSize: r.IconSize.Md,
                          avatarSize: r.IconSize.Xl,
                          borderWidth: 3
                        })
                      ),
                      a.default.createElement(
                        r.Text,
                        {
                          "data-testid": "create-snap-account-content-title",
                          textAlign: o.TextAlign.Center,
                          variant: o.TextVariant.headingLg
                        },
                        n("createSnapAccountTitle")
                      ),
                      a.default.createElement(
                        r.Text,
                        {
                          variant: o.TextVariant.bodyMd,
                          textAlign: o.TextAlign.Center,
                          padding: [0, 4],
                          overflowWrap: o.OverflowWrap.Anywhere,
                          "data-testid": "create-snap-account-content-description"
                        },
                        n("createSnapAccountDescription", [e])
                      )
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/create-snap-account/components/create-snap-account-content.tsx" }
    ],
    [
      5703,
      { "./create-snap-account-content": 5702 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "CreateSnapAccountContent", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./create-snap-account-content")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/create-snap-account/components/index.ts" }
    ],
    [
      5704,
      { "../../components/component-library": 5242, "../../helpers/constants/design-system": 5537, "./components": 5703, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a },
                  o = e("../../components/component-library"),
                  s = e("../../helpers/constants/design-system"),
                  i = e("./components");
                n.default = ({ snapId: e, snapName: t }) =>
                  r.default.createElement(
                    o.Box,
                    {
                      className: "create-snap-account-page",
                      height: s.BlockSize.Full,
                      width: s.BlockSize.Full,
                      backgroundColor: s.BackgroundColor.backgroundDefault,
                      borderStyle: s.BorderStyle.none,
                      flexDirection: s.FlexDirection.Column,
                      alignItems: s.AlignItems.center,
                      paddingBottom: 2,
                      paddingTop: 2
                    },
                    r.default.createElement(
                      o.Box,
                      {
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Column,
                        alignItems: s.AlignItems.center,
                        justifyContent: s.JustifyContent.center,
                        height: s.BlockSize.Full
                      },
                      r.default.createElement(i.CreateSnapAccountContent, { snapName: t, snapId: e })
                    )
                  );
              };
            };
      },
      { package: "$root$", file: "ui/pages/create-snap-account/create-snap-account.tsx" }
    ],
    [
      5705,
      { "./create-snap-account": 5704 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "CreateSnapAccount", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./create-snap-account")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/create-snap-account/index.ts" }
    ],
    [
      5706,
      {
        "../../../app/scripts/lib/util": 91,
        "../../../shared/constants/app": 4749,
        "../../../shared/constants/metametrics": 4758,
        "../../helpers/constants/common": 5535,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  o = (a = e("prop-types")) && a.__esModule ? a : { default: a },
                  s = e("../../../app/scripts/lib/util"),
                  i = e("../../../shared/constants/app"),
                  c = e("../../helpers/constants/common"),
                  l = e("../../../shared/constants/metametrics");
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class p extends r.PureComponent {
                  renderErrorDetail(e) {
                    return r.default.createElement("li", null, r.default.createElement("p", null, e));
                  }
                  renderErrorStack(e, t) {
                    return r.default.createElement(
                      "li",
                      null,
                      r.default.createElement("span", null, e),
                      r.default.createElement("pre", { className: "error-page__stack" }, t)
                    );
                  }
                  render() {
                    const { error: e } = this.props,
                      { t: t } = this.context,
                      n = (0, s.getEnvironmentType)() === i.ENVIRONMENT_TYPE_POPUP,
                      a = r.default.createElement(
                        "a",
                        {
                          target: "_blank",
                          key: "metamaskSupportLink",
                          rel: "noopener noreferrer",
                          href: c.SUPPORT_REQUEST_LINK,
                          onClick: () => {
                            this.context.trackEvent(
                              {
                                category: l.MetaMetricsEventCategory.Error,
                                event: l.MetaMetricsEventName.SupportLinkClicked,
                                properties: { url: c.SUPPORT_REQUEST_LINK }
                              },
                              { contextPropsIntoEventProperties: [l.MetaMetricsContextProp.PageTitle] }
                            );
                          }
                        },
                        r.default.createElement("span", { className: "error-page__link-text" }, this.context.t("here"))
                      ),
                      o = t(n ? "errorPagePopupMessage" : "errorPageMessage", [a]);
                    return r.default.createElement(
                      "section",
                      { className: "error-page" },
                      r.default.createElement("h1", { className: "error-page__header" }, t("errorPageTitle")),
                      r.default.createElement("h2", { className: "error-page__subheader" }, o),
                      r.default.createElement(
                        "section",
                        { className: "error-page__details" },
                        r.default.createElement(
                          "details",
                          null,
                          r.default.createElement("summary", null, t("errorDetails")),
                          r.default.createElement(
                            "ul",
                            null,
                            e.message ? this.renderErrorDetail(t("errorMessage", [e.message])) : null,
                            e.code ? this.renderErrorDetail(t("errorCode", [e.code])) : null,
                            e.name ? this.renderErrorDetail(t("errorName", [e.name])) : null,
                            e.stack ? this.renderErrorStack(t("errorStack"), e.stack) : null
                          )
                        )
                      )
                    );
                  }
                }
                d(p, "contextTypes", { t: o.default.func.isRequired, trackEvent: o.default.func }),
                  d(p, "propTypes", { error: o.default.object.isRequired });
                n.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/pages/error/error.component.js" }
    ],
    [
      5707,
      { "./error.component": 5706 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./error.component")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/error/index.js" }
    ],
    [
      5708,
      {
        "../../../shared/constants/metametrics": 4758,
        "../../../shared/constants/time": 4768,
        "../../../shared/lib/ui-utils": 4779,
        "../../components/app/asset-list": 4837,
        "../../components/app/home-notification": 4931,
        "../../components/app/multiple-notifications": 4998,
        "../../components/app/nfts-tab": 5015,
        "../../components/app/recovery-phrase-reminder": 5041,
        "../../components/app/terms-of-use-popup": 5120,
        "../../components/app/transaction-list": 5164,
        "../../components/app/wallet-overview": 5176,
        "../../components/app/whats-new-popup": 5179,
        "../../components/component-library": 5242,
        "../../components/ui/actionable-message/actionable-message": 5369,
        "../../components/ui/button": 5377,
        "../../components/ui/popover": 5465,
        "../../components/ui/tabs": 5485,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/constants/routes": 5542,
        "../../helpers/constants/zendesk-url": 5547,
        "../connected-accounts": 5694,
        "../connected-sites": 5697,
        "prop-types": 4219,
        react: 4475,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = O(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = N(e("prop-types")),
                  o = e("react-router-dom"),
                  s = e("../../../shared/constants/metametrics"),
                  i = N(e("../../components/app/asset-list")),
                  c = N(e("../../components/app/nfts-tab")),
                  l = N(e("../../components/app/terms-of-use-popup")),
                  u = N(e("../../components/app/recovery-phrase-reminder")),
                  d = N(e("../../components/app/whats-new-popup")),
                  p = N(e("../../components/app/home-notification")),
                  f = N(e("../../components/app/multiple-notifications")),
                  m = N(e("../../components/app/transaction-list")),
                  g = N(e("../../components/ui/popover")),
                  h = N(e("../../components/ui/button")),
                  y = N(e("../connected-sites")),
                  A = N(e("../connected-accounts")),
                  E = e("../../components/ui/tabs"),
                  v = e("../../components/app/wallet-overview"),
                  T = N(e("../../components/ui/actionable-message/actionable-message")),
                  b = e("../../helpers/constants/design-system"),
                  w = e("../../../shared/constants/time"),
                  k = e("../../components/component-library"),
                  C = e("../../helpers/constants/routes"),
                  x = N(e("../../helpers/constants/zendesk-url")),
                  P = e("../../../shared/lib/ui-utils");
                function N(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function O(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (O = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function S(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                function M({ isNotification: e, totalUnapprovedCount: t, hasApprovalFlows: n, isSigningQRHardwareTransaction: a }) {
                  return e && 0 === t && !n && !a;
                }
                class R extends a.PureComponent {
                  constructor(e) {
                    var t;
                    super(e),
                      S(this, "state", { canShowBlockageNotification: !0, notificationClosing: !1, redirecting: !1 }),
                      S(this, "onRecoveryPhraseReminderClose", () => {
                        const { setRecoveryPhraseReminderHasBeenShown: e, setRecoveryPhraseReminderLastShown: t } = this.props;
                        e(!0), t(new Date().getTime());
                      }),
                      S(this, "onAcceptTermsOfUse", () => {
                        const { setTermsOfUseLastAgreed: e } = this.props;
                        e(new Date().getTime()),
                          this.context.trackEvent({
                            category: s.MetaMetricsEventCategory.Onboarding,
                            event: s.MetaMetricsEventName.TermsOfUseAccepted,
                            properties: { location: "Terms Of Use Popover" }
                          });
                      }),
                      S(this, "onSupportLinkClick", () => {
                        this.context.trackEvent(
                          {
                            category: s.MetaMetricsEventCategory.Home,
                            event: s.MetaMetricsEventName.SupportLinkClicked,
                            properties: { url: P.SUPPORT_LINK }
                          },
                          { contextPropsIntoEventProperties: [s.MetaMetricsContextProp.PageTitle] }
                        );
                      }),
                      S(this, "onOutdatedBrowserWarningClose", () => {
                        const { setOutdatedBrowserWarningLastShown: e } = this.props;
                        e(new Date().getTime());
                      }),
                      S(this, "renderPopover", () => {
                        const { setConnectedStatusPopoverHasBeenShown: e } = this.props,
                          { t: t } = this.context;
                        return a.default.createElement(
                          g.default,
                          {
                            title: t("whatsThis"),
                            onClose: e,
                            className: "home__connected-status-popover",
                            showArrow: !0,
                            CustomBackground: ({ onClose: e }) =>
                              a.default.createElement(
                                "div",
                                { className: "home__connected-status-popover-bg-container", onClick: e },
                                a.default.createElement("div", { className: "home__connected-status-popover-bg" })
                              ),
                            footer: a.default.createElement(
                              a.default.Fragment,
                              null,
                              a.default.createElement(
                                "a",
                                { href: x.default.USER_GUIDE_DAPPS, target: "_blank", rel: "noopener noreferrer" },
                                t("learnMoreUpperCase")
                              ),
                              a.default.createElement(h.default, { type: "primary", onClick: e }, t("dismiss"))
                            )
                          },
                          a.default.createElement(
                            "main",
                            { className: "home__connect-status-text" },
                            a.default.createElement("div", null, t("metaMaskConnectStatusParagraphOne")),
                            a.default.createElement("div", null, t("metaMaskConnectStatusParagraphTwo")),
                            a.default.createElement("div", null, t("metaMaskConnectStatusParagraphThree"))
                          )
                        );
                      });
                    const {
                        closeNotificationPopup: n,
                        firstPermissionsRequestId: r,
                        haveSwapsQuotes: o,
                        isNotification: i,
                        showAwaitingSwapScreen: c,
                        hasWatchTokenPendingApprovals: l,
                        hasWatchNftPendingApprovals: u,
                        swapsFetchParams: d,
                        hasTransactionPendingApprovals: p,
                        location: f
                      } = this.props,
                      m = Boolean(null == f || null === (t = f.state) || void 0 === t ? void 0 : t.stayOnHomePage);
                    M(e)
                      ? ((this.state.notificationClosing = !0), n())
                      : (r || p || l || u || (!i && !m && (c || o || d))) && (this.state.redirecting = !0);
                  }
                  checkStatusAndNavigate() {
                    var e;
                    const {
                        firstPermissionsRequestId: t,
                        history: n,
                        isNotification: a,
                        hasTransactionPendingApprovals: r,
                        hasWatchTokenPendingApprovals: o,
                        hasWatchNftPendingApprovals: s,
                        haveSwapsQuotes: i,
                        showAwaitingSwapScreen: c,
                        swapsFetchParams: l,
                        location: u,
                        pendingConfirmations: d,
                        hasApprovalFlows: p
                      } = this.props,
                      f = Boolean(null == u || null === (e = u.state) || void 0 === e ? void 0 : e.stayOnHomePage),
                      m = !a && !f;
                    m && c
                      ? n.push(C.AWAITING_SWAP_ROUTE)
                      : m && i
                      ? n.push(C.VIEW_QUOTE_ROUTE)
                      : m && l
                      ? n.push(C.BUILD_QUOTE_ROUTE)
                      : t
                      ? n.push(`${C.CONNECT_ROUTE}/${t}`)
                      : r
                      ? n.push(C.CONFIRM_TRANSACTION_ROUTE)
                      : o
                      ? n.push(C.CONFIRM_ADD_SUGGESTED_TOKEN_ROUTE)
                      : s
                      ? n.push(C.CONFIRM_ADD_SUGGESTED_NFT_ROUTE)
                      : (d.length > 0 || p) && n.push(C.CONFIRMATION_V_NEXT_ROUTE);
                  }
                  componentDidMount() {
                    this.checkStatusAndNavigate();
                  }
                  static getDerivedStateFromProps(e) {
                    return M(e) ? { notificationClosing: !0 } : null;
                  }
                  componentDidUpdate(e, t) {
                    const { closeNotificationPopup: n, isNotification: a } = this.props,
                      { notificationClosing: r } = this.state;
                    r && !t.notificationClosing ? n() : a && this.checkStatusAndNavigate();
                  }
                  renderNotifications() {
                    const { t: e } = this.context,
                      {
                        history: t,
                        shouldShowSeedPhraseReminder: n,
                        isPopup: r,
                        shouldShowWeb3ShimUsageNotification: o,
                        setWeb3ShimUsageAlertDismissed: s,
                        originOfCurrentTab: i,
                        disableWeb3ShimUsageAlert: c,
                        infuraBlocked: l,
                        showOutdatedBrowserWarning: u,
                        newNftAddedMessage: d,
                        setNewNftAddedMessage: m,
                        newNetworkAddedName: y,
                        removeNftMessage: A,
                        setRemoveNftMessage: E,
                        newTokensImported: v,
                        setNewTokensImported: P,
                        newNetworkAddedConfigurationId: N,
                        clearNewNetworkAdded: O,
                        setActiveNetwork: S
                      } = this.props,
                      M = () => {
                        m(""), E("");
                      },
                      R = 5 * w.SECOND;
                    return a.default.createElement(
                      f.default,
                      null,
                      "success" === d
                        ? a.default.createElement(T.default, {
                            type: "success",
                            className: "home__new-network-notification",
                            autoHideTime: R,
                            onAutoHide: M,
                            message: a.default.createElement(
                              k.Box,
                              { display: b.Display.InlineFlex },
                              a.default.createElement("i", { className: "fa fa-check-circle home__new-nft-notification-icon" }),
                              a.default.createElement(k.Text, { variant: b.TextVariant.bodySm, as: "h6" }, e("newNftAddedMessage")),
                              a.default.createElement(k.ButtonIcon, {
                                iconName: k.IconName.Close,
                                size: k.ButtonIconSize.Sm,
                                ariaLabel: e("close"),
                                onClick: M
                              })
                            )
                          })
                        : null,
                      "success" === A
                        ? a.default.createElement(T.default, {
                            type: "danger",
                            className: "home__new-network-notification",
                            autoHideTime: R,
                            onAutoHide: M,
                            message: a.default.createElement(
                              k.Box,
                              { display: b.Display.InlineFlex },
                              a.default.createElement("i", { className: "fa fa-check-circle home__new-nft-notification-icon" }),
                              a.default.createElement(k.Text, { variant: b.TextVariant.bodySm, as: "h6" }, e("removeNftMessage")),
                              a.default.createElement(k.ButtonIcon, {
                                iconName: k.IconName.Close,
                                size: k.ButtonIconSize.Sm,
                                ariaLabel: e("close"),
                                onClick: M
                              })
                            )
                          })
                        : null,
                      y
                        ? a.default.createElement(T.default, {
                            type: "success",
                            className: "home__new-network-notification",
                            message: a.default.createElement(
                              k.Box,
                              { display: b.Display.InlineFlex },
                              a.default.createElement("i", { className: "fa fa-check-circle home__new-network-notification-icon" }),
                              a.default.createElement(k.Text, { variant: b.TextVariant.bodySm, as: "h6" }, e("newNetworkAdded", [y])),
                              a.default.createElement(k.ButtonIcon, {
                                iconName: k.IconName.Close,
                                size: k.ButtonIconSize.Sm,
                                ariaLabel: e("close"),
                                onClick: () => O(),
                                className: "home__new-network-notification-close"
                              })
                            )
                          })
                        : null,
                      v
                        ? a.default.createElement(T.default, {
                            type: "success",
                            className: "home__new-tokens-imported-notification",
                            message: a.default.createElement(
                              k.Box,
                              { display: b.Display.InlineFlex },
                              a.default.createElement("i", { className: "fa fa-check-circle home__new-tokens-imported-notification-icon" }),
                              a.default.createElement(
                                k.Box,
                                null,
                                a.default.createElement(
                                  k.Text,
                                  {
                                    className: "home__new-tokens-imported-notification-title",
                                    variant: b.TextVariant.bodySmBold,
                                    as: "h6"
                                  },
                                  e("newTokensImportedTitle")
                                ),
                                a.default.createElement(
                                  k.Text,
                                  { className: "home__new-tokens-imported-notification-message", variant: b.TextVariant.bodySm, as: "h6" },
                                  e("newTokensImportedMessage", [v])
                                )
                              ),
                              a.default.createElement(k.ButtonIcon, {
                                iconName: k.IconName.Close,
                                size: k.ButtonIconSize.Sm,
                                ariaLabel: e("close"),
                                onClick: () => P(""),
                                className: "home__new-tokens-imported-notification-close"
                              })
                            )
                          })
                        : null,
                      o
                        ? a.default.createElement(p.default, {
                            descriptionText: e("web3ShimUsageNotification", [
                              a.default.createElement(
                                "span",
                                {
                                  key: "web3ShimUsageNotificationLink",
                                  className: "home-notification__text-link",
                                  onClick: () => global.platform.openTab({ url: x.default.LEGACY_WEB3 })
                                },
                                e("here")
                              )
                            ]),
                            ignoreText: e("dismiss"),
                            onIgnore: (e) => {
                              s(i), e && c();
                            },
                            checkboxText: e("dontShowThisAgain"),
                            checkboxTooltipText: e("canToggleInSettings"),
                            key: "home-web3ShimUsageNotification"
                          })
                        : null,
                      n
                        ? a.default.createElement(p.default, {
                            descriptionText: e("backupApprovalNotice"),
                            acceptText: e("backupNow"),
                            onAccept: () => {
                              const e = `${C.ONBOARDING_SECURE_YOUR_WALLET_ROUTE}/?isFromReminder=true`;
                              r ? global.platform.openExtensionInBrowser(e) : t.push(e);
                            },
                            infoText: e("backupApprovalInfo"),
                            key: "home-backupApprovalNotice"
                          })
                        : null,
                      l && this.state.canShowBlockageNotification
                        ? a.default.createElement(p.default, {
                            descriptionText: e("infuraBlockedNotification", [
                              a.default.createElement(
                                "span",
                                {
                                  key: "infuraBlockedNotificationLink",
                                  className: "home-notification__text-link",
                                  onClick: () => global.platform.openTab({ url: x.default.INFURA_BLOCKAGE })
                                },
                                e("here")
                              )
                            ]),
                            ignoreText: e("dismiss"),
                            onIgnore: () => {
                              this.setState({ canShowBlockageNotification: !1 });
                            },
                            key: "home-infuraBlockedNotification"
                          })
                        : null,
                      u
                        ? a.default.createElement(p.default, {
                            descriptionText: e("outdatedBrowserNotification"),
                            acceptText: e("gotIt"),
                            onAccept: this.onOutdatedBrowserWarningClose,
                            key: "home-outdatedBrowserNotification"
                          })
                        : null,
                      N &&
                        a.default.createElement(
                          g.default,
                          { className: "home__new-network-added", onClose: () => O() },
                          a.default.createElement("i", { className: "fa fa-check-circle fa-2x home__new-network-added__check-circle" }),
                          a.default.createElement(
                            k.Text,
                            {
                              variant: b.TextVariant.headingSm,
                              as: "h4",
                              marginTop: 5,
                              marginRight: 9,
                              marginLeft: 9,
                              marginBottom: 0,
                              fontWeight: b.FontWeight.Bold
                            },
                            e("networkAddedSuccessfully")
                          ),
                          a.default.createElement(
                            k.Box,
                            { marginTop: 8, marginRight: 8, marginLeft: 8, marginBottom: 5 },
                            a.default.createElement(
                              h.default,
                              {
                                type: "primary",
                                className: "home__new-network-added__switch-to-button",
                                onClick: () => {
                                  S(N), O();
                                }
                              },
                              a.default.createElement(
                                k.Text,
                                { variant: b.TextVariant.bodySm, as: "h6", color: b.TextColor.primaryInverse },
                                e("switchToNetwork", [y])
                              )
                            ),
                            a.default.createElement(
                              h.default,
                              { type: "secondary", onClick: () => O() },
                              a.default.createElement(
                                k.Text,
                                { variant: b.TextVariant.bodySm, as: "h6", color: b.TextColor.primaryDefault },
                                e("dismiss")
                              )
                            )
                          )
                        )
                    );
                  }
                  render() {
                    const { t: e } = this.context,
                      {
                        defaultHomeActiveTabName: t,
                        onTabClick: n,
                        forgottenPassword: r,
                        history: p,
                        connectedStatusPopoverHasBeenShown: f,
                        isPopup: g,
                        seedPhraseBackedUp: h,
                        showRecoveryPhraseReminder: T,
                        showTermsOfUsePopup: w,
                        showWhatsNewPopup: x,
                        hideWhatsNewPopup: N,
                        completedOnboarding: O,
                        onboardedInThisUISession: S,
                        announcementsToShow: M,
                        firstTimeFlowType: R,
                        newNetworkAddedConfigurationId: I
                      } = this.props;
                    if (r) return a.default.createElement(o.Redirect, { to: { pathname: C.RESTORE_VAULT_ROUTE } });
                    if (this.state.notificationClosing || this.state.redirecting) return null;
                    const D = O && (!S || "import" === R) && M && x && !I,
                      B = O && !S && w;
                    return a.default.createElement(
                      "div",
                      { className: "main-container" },
                      a.default.createElement(o.Route, { path: C.CONNECTED_ROUTE, component: y.default, exact: !0 }),
                      a.default.createElement(o.Route, { path: C.CONNECTED_ACCOUNTS_ROUTE, component: A.default, exact: !0 }),
                      a.default.createElement(
                        "div",
                        { className: "home__container" },
                        D ? a.default.createElement(d.default, { onClose: N }) : null,
                        !D && T
                          ? a.default.createElement(u.default, { hasBackedUp: h, onConfirm: this.onRecoveryPhraseReminderClose })
                          : null,
                        B ? a.default.createElement(l.default, { onAccept: this.onAcceptTermsOfUse }) : null,
                        g && !f ? this.renderPopover() : null,
                        a.default.createElement(
                          "div",
                          { className: "home__main-view" },
                          a.default.createElement(
                            "div",
                            { className: "home__balance-wrapper" },
                            a.default.createElement(v.EthOverview, { showAddress: !0 })
                          ),
                          a.default.createElement(
                            k.Box,
                            { style: { flexGrow: "1" }, paddingTop: 0 },
                            a.default.createElement(
                              E.Tabs,
                              {
                                t: this.context.t,
                                defaultActiveTabKey: t,
                                onTabClick: (e) => {
                                  let t;
                                  switch ((n(e), e)) {
                                    case "nfts":
                                      t = s.MetaMetricsEventName.NftScreenOpened;
                                      break;
                                    case "activity":
                                      t = s.MetaMetricsEventName.ActivityScreenOpened;
                                      break;
                                    default:
                                      t = s.MetaMetricsEventName.TokenScreenOpened;
                                  }
                                  this.context.trackEvent({ category: s.MetaMetricsEventCategory.Home, event: t });
                                },
                                tabsClassName: "home__tabs"
                              },
                              a.default.createElement(
                                E.Tab,
                                {
                                  activeClassName: "home__tab--active",
                                  className: "home__tab",
                                  "data-testid": "home__asset-tab",
                                  name: this.context.t("tokens"),
                                  tabKey: "tokens"
                                },
                                a.default.createElement(
                                  k.Box,
                                  { marginTop: 2 },
                                  a.default.createElement(i.default, { onClickAsset: (e) => p.push(`${C.ASSET_ROUTE}/${e}`) }),
                                  a.default.createElement(
                                    k.ButtonLink,
                                    {
                                      size: b.Size.MD,
                                      startIconName: k.IconName.MessageQuestion,
                                      "data-testid": "need-help-link",
                                      href: P.SUPPORT_LINK,
                                      display: b.Display.Flex,
                                      justifyContent: b.JustifyContent.flexStart,
                                      paddingLeft: 4,
                                      marginBottom: 4,
                                      onClick: this.onSupportLinkClick,
                                      externalLink: !0
                                    },
                                    e("needHelpLinkText")
                                  )
                                )
                              ),
                              a.default.createElement(
                                E.Tab,
                                {
                                  activeClassName: "home__tab--active",
                                  className: "home__tab",
                                  "data-testid": "home__nfts-tab",
                                  name: this.context.t("nfts"),
                                  tabKey: "nfts"
                                },
                                a.default.createElement(c.default, null),
                                a.default.createElement(
                                  k.ButtonLink,
                                  {
                                    size: b.Size.MD,
                                    startIconName: k.IconName.MessageQuestion,
                                    "data-testid": "need-help-link",
                                    href: P.SUPPORT_LINK,
                                    display: b.Display.Flex,
                                    justifyContent: b.JustifyContent.flexStart,
                                    paddingLeft: 4,
                                    marginBottom: 4,
                                    onClick: this.onSupportLinkClick,
                                    externalLink: !0
                                  },
                                  e("needHelpLinkText")
                                )
                              ),
                              a.default.createElement(
                                E.Tab,
                                {
                                  activeClassName: "home__tab--active",
                                  className: "home__tab",
                                  "data-testid": "home__activity-tab",
                                  name: e("activity"),
                                  tabKey: "activity"
                                },
                                a.default.createElement(m.default, null),
                                a.default.createElement(
                                  k.ButtonLink,
                                  {
                                    size: b.Size.MD,
                                    startIconName: k.IconName.MessageQuestion,
                                    "data-testid": "need-help-link",
                                    href: P.SUPPORT_LINK,
                                    display: b.Display.Flex,
                                    justifyContent: b.JustifyContent.center,
                                    marginBottom: 4,
                                    marginTop: 4,
                                    onClick: this.onSupportLinkClick,
                                    externalLink: !0
                                  },
                                  e("needHelpLinkText")
                                )
                              )
                            )
                          )
                        ),
                        this.renderNotifications()
                      )
                    );
                  }
                }
                (n.default = R),
                  S(R, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                  S(R, "propTypes", {
                    history: r.default.object,
                    forgottenPassword: r.default.bool,
                    hasTransactionPendingApprovals: r.default.bool.isRequired,
                    hasWatchTokenPendingApprovals: r.default.bool,
                    hasWatchNftPendingApprovals: r.default.bool,
                    setConnectedStatusPopoverHasBeenShown: r.default.func,
                    shouldShowSeedPhraseReminder: r.default.bool.isRequired,
                    isPopup: r.default.bool,
                    connectedStatusPopoverHasBeenShown: r.default.bool,
                    showRecoveryPhraseReminder: r.default.bool.isRequired,
                    showTermsOfUsePopup: r.default.bool.isRequired,
                    seedPhraseBackedUp: (e) => {
                      if (null !== e.seedPhraseBackedUp && "boolean" != typeof e.seedPhraseBackedUp)
                        throw new Error(`seedPhraseBackedUp is required to be null or boolean. Received ${e.seedPhraseBackedUp}`);
                    },
                    firstTimeFlowType: r.default.string,
                    completedOnboarding: r.default.bool,
                    showWhatsNewPopup: r.default.bool.isRequired,
                    hideWhatsNewPopup: r.default.func.isRequired,
                    announcementsToShow: r.default.bool.isRequired,
                    onboardedInThisUISession: r.default.bool,
                    newNetworkAddedConfigurationId: r.default.string,
                    isNotification: r.default.bool.isRequired,
                    firstPermissionsRequestId: r.default.string,
                    totalUnapprovedCount: r.default.number.isRequired,
                    defaultHomeActiveTabName: r.default.string,
                    onTabClick: r.default.func.isRequired,
                    haveSwapsQuotes: r.default.bool.isRequired,
                    showAwaitingSwapScreen: r.default.bool.isRequired,
                    swapsFetchParams: r.default.object,
                    location: r.default.object,
                    shouldShowWeb3ShimUsageNotification: r.default.bool.isRequired,
                    setWeb3ShimUsageAlertDismissed: r.default.func.isRequired,
                    originOfCurrentTab: r.default.string,
                    disableWeb3ShimUsageAlert: r.default.func.isRequired,
                    pendingConfirmations: r.default.arrayOf(r.default.object).isRequired,
                    hasApprovalFlows: r.default.bool.isRequired,
                    infuraBlocked: r.default.bool.isRequired,
                    setRecoveryPhraseReminderHasBeenShown: r.default.func.isRequired,
                    setRecoveryPhraseReminderLastShown: r.default.func.isRequired,
                    setTermsOfUseLastAgreed: r.default.func.isRequired,
                    showOutdatedBrowserWarning: r.default.bool.isRequired,
                    setOutdatedBrowserWarningLastShown: r.default.func.isRequired,
                    newNetworkAddedName: r.default.string,
                    isSigningQRHardwareTransaction: r.default.bool.isRequired,
                    newNftAddedMessage: r.default.string,
                    setNewNftAddedMessage: r.default.func.isRequired,
                    removeNftMessage: r.default.string,
                    setRemoveNftMessage: r.default.func.isRequired,
                    closeNotificationPopup: r.default.func.isRequired,
                    newTokensImported: r.default.string,
                    setNewTokensImported: r.default.func.isRequired,
                    clearNewNetworkAdded: r.default.func,
                    setActiveNetwork: r.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/home/home.component.js" }
    ],
    [
      5709,
      {
        "../../../app/scripts/lib/util": 91,
        "../../../shared/constants/alerts": 4748,
        "../../../shared/constants/app": 4749,
        "../../ducks/app/app": 5521,
        "../../ducks/metamask/metamask": 5529,
        "../../ducks/swaps/swaps": 5533,
        "../../helpers/utils/util": 5578,
        "../../selectors": 5958,
        "../../selectors/transactions": 5962,
        "../../store/actions": 5965,
        "./home.component": 5708,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("redux"),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../selectors"),
                  c = e("../../store/actions"),
                  l = e("../../ducks/app/app"),
                  u = e("../../ducks/metamask/metamask"),
                  d = e("../../ducks/swaps/swaps"),
                  p = e("../../../app/scripts/lib/util"),
                  f = e("../../helpers/utils/util"),
                  m = e("../../../shared/constants/app"),
                  g = e("../../../shared/constants/alerts"),
                  h = e("../../selectors/transactions"),
                  y = (a = e("./home.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.compose)(
                  s.withRouter,
                  (0, o.connect)(
                    (e) => {
                      var t, n;
                      const { metamask: a, appState: r } = e,
                        {
                          seedPhraseBackedUp: o,
                          selectedAddress: s,
                          connectedStatusPopoverHasBeenShown: c,
                          defaultHomeActiveTabName: l,
                          swapsState: y,
                          firstTimeFlowType: A,
                          completedOnboarding: E
                        } = a,
                        { forgottenPassword: v } = a,
                        T = (0, i.getTotalUnapprovedCount)(e),
                        b = (0, d.getSwapsFeatureIsLive)(e),
                        w = (0, i.getUnapprovedTemplatedConfirmations)(e),
                        k = (0, p.getEnvironmentType)(),
                        C = k === m.ENVIRONMENT_TYPE_POPUP,
                        x = k === m.ENVIRONMENT_TYPE_NOTIFICATION;
                      let P, N;
                      var O;
                      ((P = (0, i.getFirstPermissionRequest)(e)),
                      (N = (null === (t = P) || void 0 === t ? void 0 : t.metadata.id) || null),
                      P) ||
                        ((P = (0, i.getFirstSnapInstallOrUpdateRequest)(e)),
                        (N = (null === (O = P) || void 0 === O ? void 0 : O.metadata.id) || null));
                      const S = (0, i.getOriginOfCurrentTab)(e),
                        M =
                          C &&
                          (0, u.getWeb3ShimUsageAlertEnabledness)(e) &&
                          (0, i.activeTabHasPermissions)(e) &&
                          (0, i.getWeb3ShimUsageStateForOrigin)(e, S) === g.Web3ShimUsageAlertStates.recorded,
                        R = (0, i.hasUnsignedQRHardwareTransaction)(e) || (0, i.hasUnsignedQRHardwareMessage)(e);
                      return {
                        forgottenPassword: v,
                        hasWatchTokenPendingApprovals: (0, i.getSuggestedTokens)(e).length > 0,
                        hasWatchNftPendingApprovals: (0, i.getSuggestedNfts)(e).length > 0,
                        swapsEnabled: b,
                        hasTransactionPendingApprovals: (0, h.hasTransactionPendingApprovals)(e),
                        shouldShowSeedPhraseReminder: (0, i.getShouldShowSeedPhraseReminder)(e),
                        isPopup: C,
                        isNotification: x,
                        selectedAddress: s,
                        firstPermissionsRequestId: N,
                        totalUnapprovedCount: T,
                        hasApprovalFlows: (null === (n = (0, i.getApprovalFlows)(e)) || void 0 === n ? void 0 : n.length) > 0,
                        connectedStatusPopoverHasBeenShown: c,
                        defaultHomeActiveTabName: l,
                        firstTimeFlowType: A,
                        completedOnboarding: E,
                        haveSwapsQuotes: Boolean(Object.values(y.quotes || {}).length),
                        swapsFetchParams: y.fetchParams,
                        showAwaitingSwapScreen: "awaiting" === y.routeState,
                        isMainnet: (0, i.getIsMainnet)(e),
                        originOfCurrentTab: S,
                        shouldShowWeb3ShimUsageNotification: M,
                        pendingConfirmations: w,
                        infuraBlocked: (0, i.getInfuraBlocked)(e),
                        announcementsToShow: (0, i.getSortedAnnouncementsToShow)(e).length > 0,
                        showWhatsNewPopup: (0, i.getShowWhatsNewPopup)(e),
                        showRecoveryPhraseReminder: (0, i.getShowRecoveryPhraseReminder)(e),
                        showTermsOfUsePopup: (0, i.getShowTermsOfUse)(e),
                        showOutdatedBrowserWarning: (0, f.getIsBrowserDeprecated)() && (0, i.getShowOutdatedBrowserWarning)(e),
                        seedPhraseBackedUp: o,
                        newNetworkAddedName: (0, i.getNewNetworkAdded)(e),
                        isSigningQRHardwareTransaction: R,
                        newNftAddedMessage: (0, i.getNewNftAddedMessage)(e),
                        removeNftMessage: (0, i.getRemoveNftMessage)(e),
                        newTokensImported: (0, i.getNewTokensImported)(e),
                        newNetworkAddedConfigurationId: r.newNetworkAddedConfigurationId,
                        onboardedInThisUISession: r.onboardedInThisUISession
                      };
                    },
                    (e) => ({
                      closeNotificationPopup: () => (0, c.closeNotificationPopup)(),
                      setConnectedStatusPopoverHasBeenShown: () => e((0, c.setConnectedStatusPopoverHasBeenShown)()),
                      onTabClick: (t) => e((0, c.setDefaultHomeActiveTabName)(t)),
                      setWeb3ShimUsageAlertDismissed: (e) => (0, c.setWeb3ShimUsageAlertDismissed)(e),
                      disableWeb3ShimUsageAlert: () => (0, c.setAlertEnabledness)(g.AlertTypes.web3ShimUsage, !1),
                      hideWhatsNewPopup: () => e((0, l.hideWhatsNewPopup)()),
                      setRecoveryPhraseReminderHasBeenShown: () => e((0, c.setRecoveryPhraseReminderHasBeenShown)()),
                      setRecoveryPhraseReminderLastShown: (t) => e((0, c.setRecoveryPhraseReminderLastShown)(t)),
                      setTermsOfUseLastAgreed: (t) => {
                        e((0, c.setTermsOfUseLastAgreed)(t));
                      },
                      setOutdatedBrowserWarningLastShown: (t) => {
                        e((0, c.setOutdatedBrowserWarningLastShown)(t));
                      },
                      setNewNftAddedMessage: (t) => {
                        e((0, c.setRemoveNftMessage)("")), e((0, c.setNewNftAddedMessage)(t));
                      },
                      setRemoveNftMessage: (t) => {
                        e((0, c.setNewNftAddedMessage)("")), e((0, c.setRemoveNftMessage)(t));
                      },
                      setNewTokensImported: (t) => {
                        e((0, c.setNewTokensImported)(t));
                      },
                      clearNewNetworkAdded: () => {
                        e((0, c.setNewNetworkAdded)({}));
                      },
                      setActiveNetwork: (t) => {
                        e((0, c.setActiveNetwork)(t));
                      }
                    })
                  )
                )(y.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/home/home.container.js" }
    ],
    [
      5710,
      { "./home.container": 5709 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./home.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/home/index.js" }
    ],
    [
      5711,
      {
        "../contexts/i18n": 5514,
        "../contexts/metametrics": 5515,
        "./error": 5707,
        "./routes": 5770,
        "@sentry/browser": 2179,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = m(e("react")),
                  r = p(e("prop-types")),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = m(e("@sentry/browser")),
                  c = e("../contexts/i18n"),
                  l = e("../contexts/metametrics"),
                  u = p(e("./error")),
                  d = p(e("./routes"));
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (f = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function m(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = f(t);
                  if (n && n.has(e)) return n.get(e);
                  var a = { __proto__: null },
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                      var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                      s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                    }
                  return (a.default = e), n && n.set(e, a), a;
                }
                function g(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class h extends a.PureComponent {
                  constructor(...e) {
                    super(...e), g(this, "state", {});
                  }
                  static getDerivedStateFromError(e) {
                    return { error: e };
                  }
                  componentDidCatch(e) {
                    i.captureException(e);
                  }
                  render() {
                    const { error: e, errorId: t } = this.state,
                      { store: n } = this.props;
                    return e
                      ? a.default.createElement(
                          o.Provider,
                          { store: n },
                          a.default.createElement(
                            c.I18nProvider,
                            null,
                            a.default.createElement(
                              c.LegacyI18nProvider,
                              null,
                              a.default.createElement(u.default, { error: e, errorId: t })
                            )
                          )
                        )
                      : a.default.createElement(
                          o.Provider,
                          { store: n },
                          a.default.createElement(
                            s.HashRouter,
                            { hashType: "noslash" },
                            a.default.createElement(
                              l.MetaMetricsProvider,
                              null,
                              a.default.createElement(
                                l.LegacyMetaMetricsProvider,
                                null,
                                a.default.createElement(
                                  c.I18nProvider,
                                  null,
                                  a.default.createElement(c.LegacyI18nProvider, null, a.default.createElement(d.default, null))
                                )
                              )
                            )
                          )
                        );
                  }
                }
                h.propTypes = { store: r.default.object };
                n.default = h;
              };
            };
      },
      { package: "$root$", file: "ui/pages/index.js" }
    ],
    [
      5712,
      {
        "../../../shared/constants/metametrics": 4758,
        "../../components/app/create-new-vault": 4891,
        "../../components/ui/box": 5373,
        "../../components/ui/button": 5377,
        "../../components/ui/typography": 5506,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/constants/routes": 5542,
        "../../helpers/constants/zendesk-url": 5547,
        "../../store/actions": 5965,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = g(e("prop-types")),
                  o = e("react-redux"),
                  s = e("../../store/actions"),
                  i = e("../../helpers/constants/routes"),
                  c = g(e("../../components/app/create-new-vault")),
                  l = g(e("../../components/ui/button")),
                  u = g(e("../../components/ui/box")),
                  d = g(e("../../components/ui/typography")),
                  p = g(e("../../helpers/constants/zendesk-url")),
                  f = e("../../helpers/constants/design-system"),
                  m = e("../../../shared/constants/metametrics");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function y(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class A extends a.Component {
                  constructor(...e) {
                    super(...e),
                      y(this, "handleImport", async (e, t) => {
                        const { createNewVaultAndRestore: n, leaveImportSeedScreenState: a, history: r } = this.props;
                        a(),
                          await n(e, t),
                          this.context.trackEvent({
                            category: m.MetaMetricsEventCategory.Retention,
                            event: "onboardingRestoredVault",
                            properties: { action: "userEntersSeedPhrase", legacy_event: !0 }
                          }),
                          r.push(i.DEFAULT_ROUTE);
                      });
                  }
                  render() {
                    const { t: e } = this.context,
                      { isLoading: t } = this.props;
                    return a.default.createElement(
                      u.default,
                      { className: "first-view-main-wrapper" },
                      a.default.createElement(
                        u.default,
                        { className: "first-view-main" },
                        a.default.createElement(
                          u.default,
                          { className: "import-account" },
                          a.default.createElement(
                            "a",
                            {
                              className: "import-account__back-button",
                              onClick: (e) => {
                                e.preventDefault(), this.props.leaveImportSeedScreenState(), this.props.history.push(i.DEFAULT_ROUTE);
                              },
                              href: "#"
                            },
                            `< ${e("back")}`
                          ),
                          a.default.createElement(
                            d.default,
                            { variant: f.TypographyVariant.H1, color: f.TextColor.textDefault },
                            e("resetWallet")
                          ),
                          a.default.createElement(d.default, { color: f.TextColor.textDefault }, e("resetWalletSubHeader")),
                          a.default.createElement(
                            d.default,
                            { color: f.TextColor.textDefault, marginTop: 4, marginBottom: 4 },
                            e("resetWalletUsingSRP", [
                              a.default.createElement(
                                l.default,
                                {
                                  type: "link",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  href: p.default.ADD_MISSING_ACCOUNTS,
                                  key: "import-account-secretphase",
                                  className: "import-account__link"
                                },
                                e("reAddAccounts")
                              ),
                              a.default.createElement(
                                l.default,
                                {
                                  type: "link",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  href: p.default.IMPORT_ACCOUNTS,
                                  key: "import-account-reimport-accounts",
                                  className: "import-account__link"
                                },
                                e("reAdded")
                              ),
                              a.default.createElement(
                                l.default,
                                {
                                  type: "link",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  href: p.default.ADD_CUSTOM_TOKENS,
                                  key: "import-account-readd-tokens",
                                  className: "import-account__link"
                                },
                                e("reAdded")
                              )
                            ])
                          ),
                          a.default.createElement(
                            d.default,
                            { color: f.TextColor.textDefault, margin: 0, marginBottom: 4 },
                            e("resetWalletWarning")
                          ),
                          a.default.createElement(c.default, { disabled: t, onSubmit: this.handleImport, submitText: e("restore") })
                        )
                      )
                    );
                  }
                }
                y(A, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                  y(A, "propTypes", {
                    createNewVaultAndRestore: r.default.func.isRequired,
                    leaveImportSeedScreenState: r.default.func,
                    history: r.default.object,
                    isLoading: r.default.bool
                  });
                n.default = (0, o.connect)(
                  ({ appState: { isLoading: e } }) => ({ isLoading: e }),
                  (e) => ({
                    leaveImportSeedScreenState: () => {
                      e((0, s.unMarkPasswordForgotten)());
                    },
                    createNewVaultAndRestore: (t, n) => e((0, s.createNewVaultAndRestore)(t, n))
                  })
                )(A);
              };
            };
      },
      { package: "$root$", file: "ui/pages/keychains/restore-vault.js" }
    ],
    [
      5713,
      {
        "../../../shared/constants/metametrics": 4758,
        "../../components/app/modals/hold-to-reveal-modal/hold-to-reveal-modal": 4977,
        "../../components/component-library": 5242,
        "../../components/ui/box": 5373,
        "../../components/ui/export-text-container": 5407,
        "../../components/ui/tabs": 5485,
        "../../contexts/metametrics": 5515,
        "../../ducks/history/history": 5526,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/constants/zendesk-url": 5547,
        "../../hooks/useI18nContext": 5602,
        "../../store/actions": 5965,
        "qrcode-generator": 4304,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, s.useHistory)(),
                      t = (0, o.useDispatch)(),
                      n = (0, y.useI18nContext)(),
                      E = (0, r.useContext)(f.MetaMetricsContext),
                      [v, w] = (0, r.useState)(T),
                      [k, C] = (0, r.useState)(""),
                      [x, P] = (0, r.useState)(null),
                      [N, O] = (0, r.useState)(!1),
                      [S, M] = (0, r.useState)(null),
                      R = (0, o.useSelector)(m.getMostRecentOverviewPage),
                      [I, D] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                      const e = document.getElementById("password-box");
                      e && e.focus();
                    }, []);
                    const B = () => {
                        const e = (0, a.default)(0, "L");
                        return e.addData(x), e.make(), e;
                      },
                      j = (e) => {
                        e.preventDefault(),
                          P(null),
                          O(!1),
                          M(null),
                          t((0, A.requestRevealSeedWords)(k))
                            .then((e) => {
                              E({
                                category: i.MetaMetricsEventCategory.Keys,
                                event: i.MetaMetricsEventName.KeyExportRevealed,
                                properties: { key_type: i.MetaMetricsEventKeyType.Srp }
                              }),
                                P(e),
                                D(!0);
                            })
                            .catch((e) => {
                              E({
                                category: i.MetaMetricsEventCategory.Keys,
                                event: i.MetaMetricsEventName.KeyExportFailed,
                                properties: { key_type: i.MetaMetricsEventKeyType.Srp, reason: e.message }
                              }),
                                M(e.message);
                            });
                      };
                    return r.default.createElement(
                      u.default,
                      { className: "page-container", paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 4, gap: 4 },
                      r.default.createElement(l.Text, { variant: g.TextVariant.headingLg }, n("secretRecoveryPhrase")),
                      r.default.createElement(
                        l.Text,
                        { variant: g.TextVariant.bodyMd },
                        n("revealSeedWordsDescription1", [
                          r.default.createElement(
                            l.Button,
                            {
                              key: "srp-learn-srp",
                              variant: l.BUTTON_VARIANT.LINK,
                              size: l.BUTTON_SIZES.INHERIT,
                              as: "a",
                              href: h.default.SECRET_RECOVERY_PHRASE,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            },
                            n("revealSeedWordsSRPName")
                          ),
                          r.default.createElement(
                            l.Text,
                            { key: "reveal-seed-word-part-3", variant: g.TextVariant.bodyMdBold, as: "strong" },
                            n("revealSeedWordsDescription3")
                          )
                        ])
                      ),
                      r.default.createElement(
                        l.Text,
                        { variant: g.TextVariant.bodyMd },
                        n("revealSeedWordsDescription2", [
                          r.default.createElement(
                            l.Button,
                            {
                              key: "srp-learn-more-non-custodial",
                              variant: l.BUTTON_VARIANT.LINK,
                              size: l.BUTTON_SIZES.INHERIT,
                              as: "a",
                              href: h.default.NON_CUSTODIAL_WALLET,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            },
                            n("revealSeedWordsNonCustodialWallet")
                          )
                        ])
                      ),
                      r.default.createElement(
                        l.BannerAlert,
                        { severity: g.Severity.Danger },
                        r.default.createElement(
                          l.Text,
                          { variant: g.TextVariant.bodyMd },
                          n("revealSeedWordsWarning", [
                            r.default.createElement(
                              l.Text,
                              { key: "reveal-seed-words-warning-2", variant: g.TextVariant.bodyMdBold, as: "strong" },
                              n("revealSeedWordsWarning2")
                            )
                          ])
                        )
                      ),
                      v !== T && N
                        ? (E({
                            category: i.MetaMetricsEventCategory.Keys,
                            event: i.MetaMetricsEventName.SrpViewSrpText,
                            properties: { key_type: i.MetaMetricsEventKeyType.Srp }
                          }),
                          r.default.createElement(
                            "div",
                            null,
                            r.default.createElement(
                              p.Tabs,
                              {
                                defaultActiveTabName: n("revealSeedWordsText"),
                                onTabClick: (e) => {
                                  "text-seed" === e
                                    ? E({
                                        category: i.MetaMetricsEventCategory.Keys,
                                        event: i.MetaMetricsEventName.SrpViewSrpText,
                                        properties: { key_type: i.MetaMetricsEventKeyType.Srp }
                                      })
                                    : "qr-srp" === e &&
                                      E({
                                        category: i.MetaMetricsEventCategory.Keys,
                                        event: i.MetaMetricsEventName.SrpViewsSrpQR,
                                        properties: { key_type: i.MetaMetricsEventKeyType.Srp }
                                      });
                                }
                              },
                              r.default.createElement(
                                p.Tab,
                                {
                                  name: n("revealSeedWordsText"),
                                  className: "reveal-seed__tab",
                                  activeClassName: "reveal-seed__active-tab",
                                  tabKey: "text-seed"
                                },
                                r.default.createElement(l.Label, { marginTop: 4 }, n("yourPrivateSeedPhrase")),
                                r.default.createElement(d.default, {
                                  text: x,
                                  onClickCopy: () => {
                                    E({
                                      category: i.MetaMetricsEventCategory.Keys,
                                      event: i.MetaMetricsEventName.KeyExportCopied,
                                      properties: { key_type: i.MetaMetricsEventKeyType.Srp, copy_method: "clipboard" }
                                    }),
                                      E({
                                        category: i.MetaMetricsEventCategory.Keys,
                                        event: i.MetaMetricsEventName.SrpCopiedToClipboard,
                                        properties: { key_type: i.MetaMetricsEventKeyType.Srp, copy_method: "clipboard" }
                                      });
                                  }
                                })
                              ),
                              r.default.createElement(
                                p.Tab,
                                {
                                  name: n("revealSeedWordsQR"),
                                  className: "reveal-seed__tab",
                                  activeClassName: "reveal-seed__active-tab",
                                  tabKey: "qr-srp"
                                },
                                r.default.createElement(
                                  u.default,
                                  {
                                    display: g.Display.Flex,
                                    justifyContent: g.JustifyContent.center,
                                    alignItems: g.AlignItems.center,
                                    paddingTop: 4,
                                    "data-testid": "qr-srp"
                                  },
                                  r.default.createElement("div", { dangerouslySetInnerHTML: { __html: B().createTableTag(5, 15) } })
                                )
                              )
                            )
                          ))
                        : r.default.createElement(
                            "form",
                            { onSubmit: j },
                            r.default.createElement(l.Label, { htmlFor: "password-box" }, n("enterPasswordContinue")),
                            r.default.createElement(l.TextField, {
                              inputProps: { "data-testid": "input-password" },
                              type: l.TEXT_FIELD_TYPES.PASSWORD,
                              placeholder: n("makeSureNoOneWatching"),
                              id: "password-box",
                              size: l.TEXT_FIELD_SIZES.LG,
                              value: k,
                              onChange: (e) => C(e.target.value),
                              error: Boolean(S),
                              width: g.BlockSize.Full
                            }),
                            S && r.default.createElement(l.HelpText, { severity: l.HelpTextSeverity.Danger }, S)
                          ),
                      v !== T && N
                        ? r.default.createElement(
                            u.default,
                            { marginTop: "auto" },
                            r.default.createElement(
                              l.Button,
                              {
                                variant: l.BUTTON_VARIANT.SECONDARY,
                                width: g.BlockSize.Full,
                                size: g.Size.LG,
                                onClick: () => {
                                  E({
                                    category: i.MetaMetricsEventCategory.Keys,
                                    event: i.MetaMetricsEventName.SrpRevealCloseClicked,
                                    properties: { key_type: i.MetaMetricsEventKeyType.Srp }
                                  }),
                                    e.push(R);
                                }
                              },
                              n("close")
                            )
                          )
                        : r.default.createElement(
                            u.default,
                            { display: g.Display.Flex, marginTop: "auto", gap: 4 },
                            r.default.createElement(
                              l.Button,
                              {
                                width: g.BlockSize.Full,
                                size: g.Size.LG,
                                variant: l.BUTTON_VARIANT.SECONDARY,
                                onClick: () => {
                                  E({
                                    category: i.MetaMetricsEventCategory.Keys,
                                    event: i.MetaMetricsEventName.KeyExportCanceled,
                                    properties: { key_type: i.MetaMetricsEventKeyType.Srp }
                                  }),
                                    E({
                                      category: i.MetaMetricsEventCategory.Keys,
                                      event: i.MetaMetricsEventName.SrpRevealCancelled,
                                      properties: { key_type: i.MetaMetricsEventKeyType.Srp }
                                    }),
                                    e.push(R);
                                }
                              },
                              n("cancel")
                            ),
                            r.default.createElement(
                              l.Button,
                              {
                                width: g.BlockSize.Full,
                                size: g.Size.LG,
                                onClick: (e) => {
                                  E({
                                    category: i.MetaMetricsEventCategory.Keys,
                                    event: i.MetaMetricsEventName.KeyExportRequested,
                                    properties: { key_type: i.MetaMetricsEventKeyType.Srp }
                                  }),
                                    E({
                                      category: i.MetaMetricsEventCategory.Keys,
                                      event: i.MetaMetricsEventName.SrpRevealNextClicked,
                                      properties: { key_type: i.MetaMetricsEventKeyType.Srp }
                                    }),
                                    j(e);
                                },
                                disabled: "" === k
                              },
                              n("next")
                            )
                          ),
                      r.default.createElement(c.default, {
                        isOpen: I,
                        onClose: () => {
                          E({
                            category: i.MetaMetricsEventCategory.Keys,
                            event: i.MetaMetricsEventName.SrpHoldToRevealCloseClicked,
                            properties: { key_type: i.MetaMetricsEventKeyType.Srp }
                          }),
                            D(!1);
                        },
                        onLongPressed: () => {
                          O(!0), D(!1), w(b);
                        },
                        holdToRevealType: "SRP"
                      })
                    );
                  });
                var a = v(e("qrcode-generator")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../../shared/constants/metametrics"),
                  c = v(e("../../components/app/modals/hold-to-reveal-modal/hold-to-reveal-modal")),
                  l = e("../../components/component-library"),
                  u = v(e("../../components/ui/box")),
                  d = v(e("../../components/ui/export-text-container")),
                  p = e("../../components/ui/tabs"),
                  f = e("../../contexts/metametrics"),
                  m = e("../../ducks/history/history"),
                  g = e("../../helpers/constants/design-system"),
                  h = v(e("../../helpers/constants/zendesk-url")),
                  y = e("../../hooks/useI18nContext"),
                  A = e("../../store/actions");
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const T = "PASSWORD_PROMPT_SCREEN",
                  b = "REVEAL_SEED_SCREEN";
              };
            };
      },
      { package: "$root$", file: "ui/pages/keychains/reveal-seed.js" }
    ],
    [
      5714,
      {
        "../../../components/component-library": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function ({ onClose: e, isOpen: t }) {
                    const n = (0, i.useI18nContext)();
                    return r.default.createElement(
                      o.Modal,
                      { isOpen: t, onClose: e },
                      r.default.createElement(o.ModalOverlay, null),
                      r.default.createElement(
                        o.ModalContent,
                        null,
                        r.default.createElement(o.ModalHeader, { onClose: e, margin: [4, 4, 4, 4] }, n("addAccountSnapModalHeader")),
                        r.default.createElement(
                          o.Box,
                          {
                            display: s.Display.Flex,
                            padding: [4, 4, 4, 4],
                            flexDirection: s.FlexDirection.Column,
                            justifyContent: s.JustifyContent.center,
                            alignItems: s.AlignItems.center
                          },
                          r.default.createElement(
                            o.Box,
                            { marginBottom: 4 },
                            r.default.createElement("img", { src: "/images/add-snaps-image.svg" })
                          ),
                          r.default.createElement(
                            o.Text,
                            { variant: s.TextVariant.bodyLgMedium, textAlign: s.TextAlign.Center, marginBottom: 4 },
                            n("addSnapAccountModalDescription")
                          ),
                          r.default.createElement(
                            o.Button,
                            {
                              variant: o.ButtonVariant.Primary,
                              block: !0,
                              className: "get-started_button",
                              "data-testid": "get-started-button",
                              onClick: () => {
                                e();
                              }
                            },
                            n("getStarted")
                          )
                        )
                      )
                    );
                  });
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a },
                  o = e("../../../components/component-library"),
                  s = e("../../../helpers/constants/design-system"),
                  i = e("../../../hooks/useI18nContext");
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/add-snap-account-modal/add-snap-account-modal.tsx" }
    ],
    [
      5715,
      { "./add-snap-account-modal": 5714 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./add-snap-account-modal")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/add-snap-account-modal/index.ts" }
    ],
    [
      5716,
      {
        "../../components/component-library": 5242,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/constants/routes": 5542,
        "./new-snap-account-page": 5718,
        "./snap-account-detail-page": 5722,
        react: 4475,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    return a.default.createElement(
                      i.Box,
                      {
                        display: s.Display.Flex,
                        justifyContent: s.JustifyContent.center,
                        backgroundColor: s.BackgroundColor.backgroundDefault,
                        marginLeft: 10,
                        marginRight: 10
                      },
                      a.default.createElement(
                        r.Switch,
                        null,
                        a.default.createElement(
                          a.default.Fragment,
                          null,
                          a.default.createElement(r.Route, {
                            exact: !0,
                            path: `${o.ADD_SNAP_ACCOUNT_ROUTE}/:snapId`,
                            component: l.default
                          }),
                          a.default.createElement(r.Route, { exact: !0, path: o.ADD_SNAP_ACCOUNT_ROUTE, component: c.default })
                        )
                      )
                    );
                  });
                var a = u(e("react")),
                  r = e("react-router-dom"),
                  o = e("../../helpers/constants/routes"),
                  s = e("../../helpers/constants/design-system"),
                  i = e("../../components/component-library"),
                  c = u(e("./new-snap-account-page")),
                  l = u(e("./snap-account-detail-page"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/add-snap-account.tsx" }
    ],
    [
      5717,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.METAMASK_DEVELOPER = n.FEEDBACK_FORM = void 0);
                (n.METAMASK_DEVELOPER = "metamask"), (n.FEEDBACK_FORM = "https://feedback.metamask.io");
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/constants.ts" }
    ],
    [
      5718,
      { "./new-snap-account-page": 5719 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./new-snap-account-page")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/new-snap-account-page/index.ts" }
    ],
    [
      5719,
      {
        "../../../../shared/lib/ui-utils": 4779,
        "../../../components/component-library": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../add-snap-account-modal": 5715,
        "../constants": 5717,
        "../snap-card/snap-card": 5725,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460,
        semver: 4561
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, l.useI18nContext)(),
                      t = (0, o.useHistory)(),
                      [n, h] = (0, a.useState)(!0),
                      y = (0, r.useSelector)(u.getSnaps),
                      E = (0, r.useSelector)(u.getSnapRegistry, r.shallowEqual);
                    (0, a.useEffect)(() => {
                      (0, d.updateSnapRegistry)().catch((e) => console.log(`Failed to fetch snap list: ${e}`));
                    }, []);
                    const v = (0, r.useSelector)(u.getsnapsAddSnapAccountModalDismissed),
                      T = [
                        {
                          title: e("snapAccountLegalDisclaimerThirdPartySubtitle"),
                          description: e("snapAccountLegalDisclaimerThirdPartyDescription", [
                            a.default.createElement(
                              i.ButtonLink,
                              { href: g.CONSENSYS_TERMS_OF_USE, variant: c.TextVariant.bodyXs, externalLink: !0 },
                              e("snapAccountLegalDisclaimerTermsOfUseLink")
                            )
                          ])
                        },
                        {
                          title: e("snapAccountLegalDisclaimerPrivacySubtitle"),
                          description: e("snapAccountLegalDisclaimerPrivacyDescription")
                        },
                        {
                          title: e("snapAccountLegalDisclaimerExperimentalBetaSubtitle"),
                          description: e("snapAccountLegalDisclaimerExperimentalBetaDescription")
                        }
                      ];
                    return a.default.createElement(
                      i.Box,
                      { className: "snap-account-page", display: c.Display.Flex, flexDirection: c.FlexDirection.Column },
                      a.default.createElement(p.default, {
                        onClose: async () => {
                          await (async () => {
                            h(!1), await (0, d.setSnapsAddSnapAccountModalDismissed)();
                          })();
                        },
                        isOpen: n && !v
                      }),
                      a.default.createElement(
                        i.Box,
                        {
                          display: c.Display.Flex,
                          flexDirection: c.FlexDirection.Column,
                          alignItems: c.AlignItems.center,
                          justifyContent: c.JustifyContent.center,
                          marginTop: 11,
                          marginBottom: 11
                        },
                        a.default.createElement(
                          i.Text,
                          { variant: c.TextVariant.headingLg },
                          e("snapCreateAccountTitle", [
                            a.default.createElement(
                              i.Text,
                              { variant: c.TextVariant.headingLg, as: "span", className: "snap-account-color-text", key: "snap-title-2" },
                              e("snapCreateAccountTitle2")
                            )
                          ])
                        ),
                        a.default.createElement(
                          i.Text,
                          {
                            className: "snap-account-subtitle",
                            variant: c.TextVariant.bodyMd,
                            color: c.TextColor.textAlternative,
                            textAlign: c.TextAlign.Center
                          },
                          e("snapCreateAccountSubtitle")
                        )
                      ),
                      a.default.createElement(
                        i.Box,
                        {
                          display: c.Display.Grid,
                          flexWrap: c.FlexWrap.Wrap,
                          gap: 4,
                          padding: [0, 10, 0, 10],
                          className: "snap-account-cards",
                          marginBottom: "auto"
                        },
                        Object.values(E).map((e, n) => {
                          const r = Object.values(y).find((t) => t.id === e.snapId),
                            o = Boolean(r),
                            i = Boolean((null == r ? void 0 : r.version) && s.default.gt(e.version, r.version));
                          return a.default.createElement(
                            f.default,
                            A({}, e, {
                              key: n,
                              isInstalled: o,
                              updateAvailable: i,
                              onClickFunc: () => {
                                t.push(`/add-snap-account/${e.id}`);
                              }
                            })
                          );
                        })
                      ),
                      a.default.createElement(
                        i.Box,
                        { className: "snap-account-footer" },
                        a.default.createElement(
                          i.Box,
                          { className: "legal-disclaimer" },
                          a.default.createElement(
                            i.Text,
                            {
                              variant: c.TextVariant.bodyXsMedium,
                              color: c.TextColor.textAlternative,
                              textAlign: c.TextAlign.Left,
                              fontWeight: c.FontWeight.Bold
                            },
                            e("snapAccountLegalDisclaimerTitle").toUpperCase()
                          ),
                          a.default.createElement(
                            a.default.Fragment,
                            null,
                            T.map((e, t) =>
                              a.default.createElement(
                                i.Box,
                                { id: `legal-disclaimer-element-${t}`, className: "legal-disclaimer-element" },
                                a.default.createElement(
                                  i.Text,
                                  {
                                    variant: c.TextVariant.bodyXsMedium,
                                    color: c.TextColor.textAlternative,
                                    textAlign: c.TextAlign.Left,
                                    fontWeight: c.FontWeight.Bold
                                  },
                                  e.title
                                ),
                                a.default.createElement(
                                  i.Text,
                                  { variant: c.TextVariant.bodyXs, color: c.TextColor.textAlternative, textAlign: c.TextAlign.Left },
                                  e.description
                                )
                              )
                            )
                          )
                        ),
                        a.default.createElement(
                          i.ButtonLink,
                          {
                            className: "feedback-link",
                            size: i.ButtonLinkSize.Sm,
                            "data-testid": "snap-account-link",
                            href: m.FEEDBACK_FORM,
                            display: c.Display.Flex,
                            paddingLeft: 4,
                            marginBottom: 4,
                            textAlign: c.TextAlign.Center,
                            externalLink: !0
                          },
                          e("accountSnapsFeedback")
                        )
                      )
                    );
                  });
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = h(e("semver")),
                  i = e("../../../components/component-library"),
                  c = e("../../../helpers/constants/design-system"),
                  l = e("../../../hooks/useI18nContext"),
                  u = e("../../../selectors"),
                  d = e("../../../store/actions"),
                  p = h(e("../add-snap-account-modal")),
                  f = h(e("../snap-card/snap-card")),
                  m = e("../constants"),
                  g = e("../../../../shared/lib/ui-utils");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (y = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function A() {
                  return (
                    (A = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                          }
                          return e;
                        }),
                    A.apply(this, arguments)
                  );
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/new-snap-account-page/new-snap-account-page.tsx" }
    ],
    [
      5720,
      { "../../../components/component-library": 5242, "../../../helpers/constants/design-system": 5537, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a },
                  o = e("../../../components/component-library"),
                  s = e("../../../helpers/constants/design-system");
                n.default = ({ title: e, children: t }) =>
                  r.default.createElement(
                    o.Box,
                    { flexDirection: s.FlexDirection.Column, marginBottom: 4 },
                    r.default.createElement(
                      o.Text,
                      { variant: s.TextVariant.bodySmBold, overflowWrap: s.OverflowWrap.BreakWord, marginBottom: 1 },
                      e
                    ),
                    t
                  );
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/snap-account-detail-page/detail.tsx" }
    ],
    [
      5721,
      {
        "../../../components/app/configure-snap-popup/configure-snap-popup": 4842,
        "../../../components/component-library": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../constants": 5717,
        "./snap-detail-tag": 5724,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SnapDetailHeader = void 0);
                var a,
                  r = p(e("react")),
                  o = p(e("../../../components/app/configure-snap-popup/configure-snap-popup")),
                  s = e("../../../components/component-library"),
                  i = e("../../../helpers/constants/design-system"),
                  c = e("../../../hooks/useI18nContext"),
                  l = e("../constants"),
                  u = (a = e("./snap-detail-tag")) && a.__esModule ? a : { default: a };
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function p(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = d(t);
                  if (n && n.has(e)) return n.get(e);
                  var a = { __proto__: null },
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                      var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                      s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                    }
                  return (a.default = e), n && n.set(e, a), a;
                }
                n.SnapDetailHeader = ({
                  updateAvailable: e,
                  snapTitle: t,
                  isInstalled: n,
                  iconUrl: a,
                  developer: d,
                  auditUrls: p,
                  website: f
                }) => {
                  const m = (0, c.useI18nContext)(),
                    [g, h] = (0, r.useState)(!1),
                    [y, A] = (0, r.useState)(o.ConfigureSnapPopupType.INSTALL);
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      s.Box,
                      { marginBottom: 5 },
                      r.default.createElement(
                        s.Box,
                        { display: i.Display.Flex, flexDirection: i.FlexDirection.Row, alignItems: i.AlignItems.center, marginBottom: 4 },
                        r.default.createElement(
                          s.Button,
                          { variant: s.ButtonVariant.Link, marginRight: 4, onClick: () => history.back() },
                          m("snapDetailsCreateASnapAccount")
                        ),
                        r.default.createElement(s.Icon, { name: s.IconName.ArrowRight, marginRight: 4 }),
                        r.default.createElement(s.Text, null, t)
                      ),
                      r.default.createElement(
                        s.Box,
                        { display: i.Display.Flex, justifyContent: i.JustifyContent.spaceBetween },
                        r.default.createElement(
                          s.Box,
                          { display: i.Display.Flex, flexDirection: i.FlexDirection.Row, alignItems: i.AlignItems.center },
                          r.default.createElement(s.Text, { variant: i.TextVariant.headingLg, marginRight: 1 }, t),
                          n &&
                            r.default.createElement(s.Tag, {
                              label: m("snapDetailsInstalled"),
                              labelProps: { color: i.TextColor.textAlternative }
                            })
                        ),
                        r.default.createElement(
                          s.Box,
                          null,
                          n &&
                            e &&
                            r.default.createElement(
                              s.Button,
                              {
                                variant: s.ButtonVariant.Secondary,
                                marginRight: 1,
                                onClick: () => {
                                  A(o.ConfigureSnapPopupType.INSTALL), h(!0);
                                }
                              },
                              m("snapUpdateAvailable")
                            ),
                          n &&
                            r.default.createElement(
                              s.Button,
                              {
                                variant: s.ButtonVariant.Primary,
                                onClick: () => {
                                  A(o.ConfigureSnapPopupType.CONFIGURE), h(!0);
                                }
                              },
                              m("snapConfigure")
                            ),
                          !n &&
                            r.default.createElement(
                              s.Button,
                              {
                                variant: s.ButtonVariant.Primary,
                                onClick: () => {
                                  A(o.ConfigureSnapPopupType.INSTALL), h(!0);
                                }
                              },
                              m("snapInstall")
                            )
                        )
                      ),
                      r.default.createElement(
                        s.Box,
                        { display: i.Display.Flex, flexDirection: i.FlexDirection.Row, alignItems: i.AlignItems.center },
                        r.default.createElement(
                          s.Box,
                          {
                            display: i.Display.Flex,
                            justifyContent: i.JustifyContent.center,
                            alignItems: i.AlignItems.center,
                            style: { borderRadius: "50%", height: "32px", width: "32px" },
                            borderWidth: 1,
                            borderColor: i.BorderColor.borderMuted,
                            padding: [2, 2, 2, 2],
                            marginRight: 1
                          },
                          r.default.createElement("img", { src: a, className: "snap-detail-icon" })
                        ),
                        d.toLowerCase() === l.METAMASK_DEVELOPER &&
                          r.default.createElement(u.default, { icon: s.IconName.Star }, m("snapCreatedByMetaMask")),
                        p.length > 0 && r.default.createElement(u.default, { icon: s.IconName.Star }, m("snapIsAudited"))
                      )
                    ),
                    r.default.createElement(o.default, { type: y, isOpen: g, onClose: () => h(!1), link: f })
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/snap-account-detail-page/header.tsx" }
    ],
    [
      5722,
      { "./snap-account-detail-page": 5723 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./snap-account-detail-page")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/snap-account-detail-page/index.ts" }
    ],
    [
      5723,
      {
        "../../../components/component-library": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "./detail": 5720,
        "./header": 5721,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460,
        semver: 4561
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, u.useI18nContext)(),
                      t = (0, o.useHistory)(),
                      { snapId: n } = (0, o.useParams)(),
                      g = (0, r.useSelector)(d.getSnaps),
                      y = (0, r.useSelector)(d.getSnapRegistry),
                      A = Object.values(y).find((e) => e.id === n);
                    if (!A) return t.push(l.ADD_SNAP_ACCOUNT_ROUTE), null;
                    const E = Boolean(g[A.snapId]),
                      v = E && s.default.gt(A.version, g[A.snapId].version);
                    return a.default.createElement(
                      i.Box,
                      {
                        display: c.Display.Flex,
                        flexDirection: c.FlexDirection.Column,
                        padding: [10, 10, 10, 10],
                        className: "snap-details-page"
                      },
                      a.default.createElement(m.SnapDetailHeader, h({}, A, { updateAvailable: v, isInstalled: E })),
                      a.default.createElement(
                        i.Box,
                        { display: c.Display.Flex },
                        a.default.createElement(
                          i.Box,
                          { width: c.BlockSize.FourFifths, display: c.Display.Flex, flexDirection: c.FlexDirection.Column },
                          a.default.createElement(
                            i.Text,
                            { variant: c.TextVariant.bodyMdBold, marginBottom: 2, color: c.TextColor.textAlternative },
                            A.snapSlug
                          ),
                          a.default.createElement(
                            i.Text,
                            { variant: c.TextVariant.bodyMd, color: c.TextColor.textAlternative },
                            A.snapDescription
                          )
                        ),
                        a.default.createElement(
                          i.Box,
                          { width: c.BlockSize.OneFifth, display: c.Display.Flex, flexDirection: c.FlexDirection.Column, paddingLeft: 4 },
                          a.default.createElement(
                            f.default,
                            { title: e("snapDetailTags") },
                            A.tags.map((e, t) =>
                              a.default.createElement(i.Tag, {
                                label: e,
                                labelProps: { color: c.TextColor.textAlternative },
                                className: "",
                                key: `tag-${t}`,
                                marginRight: 1
                              })
                            )
                          ),
                          a.default.createElement(
                            f.default,
                            { title: e("snapDetailDeveloper") },
                            a.default.createElement(
                              i.Text,
                              { variant: c.TextVariant.bodyMd, overflowWrap: c.OverflowWrap.BreakWord },
                              A.developer
                            )
                          ),
                          a.default.createElement(
                            f.default,
                            { title: e("snapDetailWebsite") },
                            a.default.createElement(
                              i.Button,
                              { variant: i.ButtonVariant.Link, overflowWrap: c.OverflowWrap.Anywhere, href: A.website, externalLink: !0 },
                              A.website
                            )
                          ),
                          a.default.createElement(
                            f.default,
                            { title: e("snapDetailAudits") },
                            A.auditUrls.map((e, t) =>
                              a.default.createElement(
                                i.Button,
                                {
                                  key: `audit-link-${t}`,
                                  variant: i.ButtonVariant.Link,
                                  overflowWrap: c.OverflowWrap.Anywhere,
                                  href: e,
                                  externalLink: !0
                                },
                                e
                              )
                            )
                          ),
                          a.default.createElement(
                            f.default,
                            { title: e("snapDetailVersion") },
                            a.default.createElement(i.Text, { variant: c.TextVariant.bodyMd }, A.version)
                          ),
                          a.default.createElement(
                            f.default,
                            { title: e("snapDetailLastUpdated") },
                            a.default.createElement(i.Text, { variant: c.TextVariant.bodyMd }, A.lastUpdated)
                          ),
                          E &&
                            a.default.createElement(
                              i.Box,
                              null,
                              a.default.createElement(
                                i.Button,
                                { variant: i.ButtonVariant.Link, onClick: () => t.push((0, p.getSnapRoute)(A.snapId)) },
                                e("snapDetailManageSnap")
                              )
                            )
                        )
                      )
                    );
                  });
                var a = g(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = g(e("semver")),
                  i = e("../../../components/component-library"),
                  c = e("../../../helpers/constants/design-system"),
                  l = e("../../../helpers/constants/routes"),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../../selectors"),
                  p = e("../../../helpers/utils/util"),
                  f = g(e("./detail")),
                  m = e("./header");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h() {
                  return (
                    (h = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                          }
                          return e;
                        }),
                    h.apply(this, arguments)
                  );
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/snap-account-detail-page/snap-account-detail-page.tsx" }
    ],
    [
      5724,
      { "../../../components/component-library": 5242, "../../../helpers/constants/design-system": 5537, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a },
                  o = e("../../../components/component-library"),
                  s = e("../../../helpers/constants/design-system");
                const i = ({ icon: e, children: t }) =>
                  r.default.createElement(
                    o.Box,
                    {
                      className: "mm-tag",
                      backgroundColor: s.BackgroundColor.infoMuted,
                      borderColor: s.BorderColor.infoMuted,
                      borderWidth: 1,
                      justifyContent: s.JustifyContent.center,
                      alignItems: s.AlignItems.center,
                      paddingLeft: 1,
                      paddingRight: 1,
                      marginRight: 1,
                      borderRadius: s.BorderRadius.pill,
                      display: s.Display.Flex
                    },
                    r.default.createElement(o.Icon, { name: e, color: s.IconColor.infoDefault }),
                    " ",
                    r.default.createElement(o.Text, { color: s.TextColor.infoDefault, variant: s.TextVariant.bodySm }, t)
                  );
                n.default = r.default.memo(i);
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/snap-account-detail-page/snap-detail-tag.tsx" }
    ],
    [
      5725,
      {
        "../../../components/app/configure-snap-popup": 4843,
        "../../../components/component-library": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        react: 4475,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function ({
                    iconUrl: e,
                    snapTitle: t,
                    snapSlug: n,
                    isInstalled: l,
                    updateAvailable: u,
                    website: d,
                    id: p,
                    onClickFunc: f
                  }) {
                    const m = (0, c.useI18nContext)(),
                      g = (0, r.useHistory)(),
                      [h, y] = (0, a.useState)(!1);
                    return a.default.createElement(
                      s.Box,
                      {
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column,
                        backgroundColor: i.BackgroundColor.backgroundDefault,
                        borderColor: i.BorderColor.borderMuted,
                        borderRadius: i.BorderRadius.SM,
                        borderWidth: 1,
                        padding: [4, 4, 4, 4],
                        "data-testid": "key-management-snap",
                        onClick: () => {
                          g.push(`/add-snap-account/${p}`);
                        }
                      },
                      a.default.createElement(
                        s.Box,
                        {
                          display: i.Display.Flex,
                          justifyContent: i.JustifyContent.spaceBetween,
                          alignItems: i.AlignItems.center,
                          marginBottom: 2
                        },
                        a.default.createElement(
                          s.Box,
                          {
                            display: i.Display.Flex,
                            justifyContent: i.JustifyContent.center,
                            alignItems: i.AlignItems.center,
                            style: { borderRadius: "50%", height: "32px", width: "32px", backgroundColor: i.BackgroundColor.infoDefault },
                            borderWidth: 1,
                            borderColor: i.BorderColor.borderMuted,
                            padding: [2, 2, 2, 2],
                            marginRight: 1
                          },
                          e
                            ? a.default.createElement("img", { src: e, className: "snap-detail-icon" })
                            : a.default.createElement(
                                s.Box,
                                {
                                  className: "snap-detail-icon",
                                  display: i.Display.Flex,
                                  justifyContent: i.JustifyContent.center,
                                  alignItems: i.AlignItems.center
                                },
                                a.default.createElement(s.Text, null, t ? t[0] : "?")
                              )
                        ),
                        l
                          ? a.default.createElement(
                              s.Button,
                              {
                                className: "configure-button",
                                "data-testid": "configure-snap-button",
                                variant: s.ButtonVariant.Secondary,
                                onClick: () => y(!0)
                              },
                              m("snapConfigure"),
                              a.default.createElement(s.Icon, {
                                as: "span",
                                marginLeft: 2,
                                name: s.IconName.Arrow2UpRight,
                                style: { verticalAlign: "middle" }
                              })
                            )
                          : a.default.createElement(
                              s.Button,
                              {
                                "data-testid": "install-snap-button",
                                variant: s.ButtonVariant.Secondary,
                                onClick: () => {
                                  g.push(`/add-snap-account/${p}`);
                                }
                              },
                              m("install")
                            )
                      ),
                      a.default.createElement(
                        s.Text,
                        { variant: i.TextVariant.bodySm, color: i.TextColor.textAlternative, marginBottom: 2 },
                        t
                      ),
                      a.default.createElement(s.Text, { variant: i.TextVariant.headingMd, marginBottom: "auto" }, n),
                      a.default.createElement(
                        s.Box,
                        {
                          display: i.Display.Flex,
                          flexDirection: i.FlexDirection.Row,
                          justifyContent: i.JustifyContent.spaceBetween,
                          alignItems: i.AlignItems.center,
                          marginTop: 2
                        },
                        u && a.default.createElement(s.Text, { color: i.TextColor.textAlternative }, m("snapUpdateAvailable")),
                        a.default.createElement(s.Icon, {
                          "data-testid": "to-snap-detail",
                          name: s.IconName.Arrow2Right,
                          color: i.IconColor.iconAlternative,
                          size: s.IconSize.Xs,
                          onClick: f,
                          marginLeft: "auto"
                        })
                      ),
                      a.default.createElement(o.default, {
                        isOpen: h,
                        type: o.ConfigureSnapPopupType.CONFIGURE,
                        onClose: () => y(!1),
                        link: d
                      })
                    );
                  });
                var a = u(e("react")),
                  r = e("react-router-dom"),
                  o = u(e("../../../components/app/configure-snap-popup")),
                  s = e("../../../components/component-library"),
                  i = e("../../../helpers/constants/design-system"),
                  c = e("../../../hooks/useI18nContext");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = l(t);
                  if (n && n.has(e)) return n.get(e);
                  var a = { __proto__: null },
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                      var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                      s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                    }
                  return (a.default = e), n && n.set(e, a), a;
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/keyring-snaps/snap-card/snap-card.tsx" }
    ],
    [
      5726,
      { "./lock.container": 5728 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./lock.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/lock/index.js" }
    ],
    [
      5727,
      { "../../components/ui/loading-screen": 5439, "../../helpers/constants/routes": 5542, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r,
                  o,
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  i = u(e("prop-types")),
                  c = u(e("../../components/ui/loading-screen")),
                  l = e("../../helpers/constants/routes");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                class p extends s.PureComponent {
                  componentDidMount() {
                    const { lockMetamask: e, isUnlocked: t, history: n } = this.props;
                    t ? e().then(() => n.push(l.DEFAULT_ROUTE)) : n.replace(l.DEFAULT_ROUTE);
                  }
                  render() {
                    return s.default.createElement(c.default, null);
                  }
                }
                (n.default = p),
                  (a = p),
                  (r = "propTypes"),
                  (o = { history: i.default.object, isUnlocked: i.default.bool, lockMetamask: i.default.func }),
                  (r = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (n !== undefined) {
                        var a = n.call(e, t || "default");
                        if ("object" != typeof a) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : String(t);
                  })(r)) in a
                    ? Object.defineProperty(a, r, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                    : (a[r] = o);
              };
            };
      },
      { package: "$root$", file: "ui/pages/lock/lock.component.js" }
    ],
    [
      5728,
      { "../../store/actions": 5965, "./lock.component": 5727, "react-redux": 4440, "react-router-dom": 4460, redux: 4505 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("redux"),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../store/actions"),
                  c = (a = e("./lock.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.compose)(
                  s.withRouter,
                  (0, o.connect)(
                    (e) => {
                      const {
                        metamask: { isUnlocked: t }
                      } = e;
                      return { isUnlocked: t };
                    },
                    (e) => ({ lockMetamask: () => e((0, i.lockMetamask)()) })
                  )
                )(c.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/lock/lock.container.js" }
    ],
    [
      5729,
      { "./notifications": 5730 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./notifications")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/notifications/index.js" }
    ],
    [
      5730,
      {
        "../../components/component-library": 5242,
        "../../components/ui/button": 5377,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/constants/routes": 5542,
        "../../helpers/utils/util": 5578,
        "../../hooks/useI18nContext": 5602,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        classnames: 2952,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.NotificationItem = A),
                  (n.default = function () {
                    const e = (0, i.useHistory)(),
                      t = (0, s.useDispatch)(),
                      n = (0, f.useI18nContext)(),
                      r = (0, s.useSelector)(l.getNotifications),
                      c = (0, s.useSelector)(l.getUnreadNotifications),
                      h = (e) => {
                        e.readDate || t((0, d.markNotificationsAsRead)([e.id]));
                      };
                    return (
                      (0, a.useEffect)(() => () => t((0, d.deleteExpiredNotifications)()), [t]),
                      a.default.createElement(
                        "div",
                        { className: "main-container notifications" },
                        a.default.createElement(
                          "div",
                          { className: "notifications__header" },
                          a.default.createElement(
                            "div",
                            { className: "notifications__header__title-container" },
                            a.default.createElement(m.ButtonIcon, {
                              iconName: m.IconName.ArrowLeft,
                              size: m.ButtonIconSize.Lg,
                              color: g.Color.textDefault,
                              onClick: () => e.push(u.DEFAULT_ROUTE)
                            }),
                            a.default.createElement(
                              "div",
                              { className: "notifications__header__title-container__title" },
                              n("notificationsHeader")
                            )
                          ),
                          a.default.createElement(
                            p.default,
                            {
                              type: "secondary",
                              className: "notifications__header_button",
                              onClick: () => {
                                const e = c.map(({ id: e }) => e);
                                t((0, d.markNotificationsAsRead)(e));
                              },
                              disabled: 0 === c.length
                            },
                            n("notificationsMarkAllAsRead")
                          )
                        ),
                        a.default.createElement(
                          "div",
                          { className: (0, o.default)("notifications__container", 0 === r.length && "empty") },
                          r.length > 0
                            ? r.map((e, t) => a.default.createElement(A, { notification: e, key: t, onItemClick: h }))
                            : a.default.createElement("div", { className: "notifications__container__text" }, n("notificationsEmptyText"))
                        )
                      )
                    );
                  });
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = h(e("prop-types")),
                  o = h(e("classnames")),
                  s = e("react-redux"),
                  i = e("react-router-dom"),
                  c = e("../../helpers/utils/util"),
                  l = e("../../selectors"),
                  u = e("../../helpers/constants/routes"),
                  d = e("../../store/actions"),
                  p = h(e("../../components/ui/button")),
                  f = e("../../hooks/useI18nContext"),
                  m = e("../../components/component-library"),
                  g = e("../../helpers/constants/design-system");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (y = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function A({ notification: e, onItemClick: t }) {
                  const { message: n, origin: r, createdDate: u, readDate: d } = e,
                    m = (0, i.useHistory)(),
                    g = (0, f.useI18nContext)(),
                    h = (0, s.useSelector)((e) => (0, l.getTargetSubjectMetadata)(e, r)),
                    y = (0, c.getSnapName)(r, h);
                  return a.default.createElement(
                    "div",
                    { className: "notifications__item", onClick: () => t(e) },
                    a.default.createElement("div", { className: (0, o.default)("notifications__item__unread-dot", !d && "unread") }),
                    a.default.createElement(
                      "div",
                      { className: "notifications__item__details" },
                      a.default.createElement("p", { className: "notifications__item__details__message" }, n),
                      a.default.createElement(
                        "p",
                        { className: "notifications__item__details__infos" },
                        g("notificationsInfos", [
                          (0, c.formatDate)(u, "LLLL d',' yyyy 'at' t"),
                          a.default.createElement(
                            p.default,
                            {
                              type: "inline",
                              onClick: (e) => {
                                e.stopPropagation(), m.push((0, c.getSnapRoute)(r));
                              },
                              key: "button"
                            },
                            y
                          )
                        ])
                      )
                    )
                  );
                }
                A.propTypes = {
                  notification: r.default.exact({
                    id: r.default.string.isRequired,
                    message: r.default.string.isRequired,
                    origin: r.default.string.isRequired,
                    createdDate: r.default.number.isRequired,
                    readDate: r.default.number
                  }),
                  onItemClick: r.default.func.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/notifications/notifications.js" }
    ],
    [
      5731,
      {
        "../../../components/ui/box/box": 5372,
        "../../../components/ui/typography/typography": 5507,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../../store/actions": 5965,
        "../../settings/networks-tab/networks-form/networks-form": 5839,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, r.useDispatch)(),
                      t = (0, o.useI18nContext)(),
                      n = () => e((0, s.hideModal)({ name: "ONBOARDING_ADD_NETWORK" }));
                    return a.default.createElement(
                      a.default.Fragment,
                      null,
                      a.default.createElement(
                        c.default,
                        { paddingTop: 4 },
                        a.default.createElement(
                          i.default,
                          { variant: l.TypographyVariant.H4, align: l.TEXT_ALIGN.CENTER, fontWeight: l.FONT_WEIGHT.BOLD },
                          t("onboardingMetametricsModalTitle")
                        )
                      ),
                      a.default.createElement(u.default, {
                        addNewNetwork: !0,
                        restrictHeight: !0,
                        networksToRender: [],
                        cancelCallback: n,
                        submitCallback: n
                      })
                    );
                  });
                var a = d(e("react")),
                  r = e("react-redux"),
                  o = e("../../../hooks/useI18nContext"),
                  s = e("../../../store/actions"),
                  i = d(e("../../../components/ui/typography/typography")),
                  c = d(e("../../../components/ui/box/box")),
                  l = e("../../../helpers/constants/design-system"),
                  u = d(e("../../settings/networks-tab/networks-form/networks-form"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/add-network-modal/index.js" }
    ],
    [
      5732,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/app/step-progress-bar": 5116,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../components/ui/button": 5377,
        "../../../components/ui/check-box": 5383,
        "../../../components/ui/form-field": 5410,
        "../../../components/ui/typography": 5506,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/common": 5535,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/onboarding": 5541,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/constants/zendesk-url": 5547,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        buffer: 2913,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460,
        zxcvbn: 4743
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                (function (t) {
                  (function () {
                    Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = x);
                    var a = (function (e, t) {
                        if (!t && e && e.__esModule) return e;
                        if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                        var n = C(t);
                        if (n && n.has(e)) return n.get(e);
                        var a = { __proto__: null },
                          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                          }
                        return (a.default = e), n && n.set(e, a), a;
                      })(e("react")),
                      r = k(e("prop-types")),
                      o = e("react-router-dom"),
                      s = k(e("zxcvbn")),
                      i = e("react-redux"),
                      c = e("../../../hooks/useI18nContext"),
                      l = k(e("../../../components/ui/button")),
                      u = k(e("../../../components/ui/typography")),
                      d = e("../../../helpers/constants/design-system"),
                      p = e("../../../helpers/constants/routes"),
                      f = k(e("../../../components/ui/form-field")),
                      m = k(e("../../../components/ui/box")),
                      g = k(e("../../../components/ui/check-box")),
                      h = e("../../../components/app/step-progress-bar"),
                      y = e("../../../helpers/constants/common"),
                      A = k(e("../../../helpers/constants/zendesk-url")),
                      E = e("../../../selectors"),
                      v = e("../../../helpers/constants/onboarding"),
                      T = e("../../../contexts/metametrics"),
                      b = e("../../../../shared/constants/metametrics"),
                      w = e("../../../components/component-library");
                    function k(e) {
                      return e && e.__esModule ? e : { default: e };
                    }
                    function C(e) {
                      if ("function" != typeof WeakMap) return null;
                      var t = new WeakMap(),
                        n = new WeakMap();
                      return (C = function (e) {
                        return e ? n : t;
                      })(e);
                    }
                    function x({ createNewAccount: e, importWithRecoveryPhrase: n, secretRecoveryPhrase: r }) {
                      const k = (0, c.useI18nContext)(),
                        [C, x] = (0, a.useState)(""),
                        [P, N] = (0, a.useState)(""),
                        [O, S] = (0, a.useState)(""),
                        [M, R] = (0, a.useState)(""),
                        [I, D] = (0, a.useState)(""),
                        [B, j] = (0, a.useState)(""),
                        [L, F] = (0, a.useState)(!1),
                        [H, U] = (0, a.useState)(!1),
                        Q = (0, o.useHistory)(),
                        G = (0, i.useSelector)(E.getFirstTimeFlowType),
                        W = (0, a.useContext)(T.MetaMetricsContext),
                        K = (0, i.useSelector)(E.getCurrentKeyring),
                        Y = (0, i.useSelector)((e) => e.metamask.participateInMetaMetrics),
                        z = (0, i.useSelector)(E.getMetaMetricsId),
                        q = t.from(z ?? "").toString("base64"),
                        Z = `https://start.metamask.io/${new URLSearchParams({ mmi: q, env: "production" })}`;
                      (0, a.useEffect)(() => {
                        K &&
                          (G === v.FIRST_TIME_FLOW_TYPES.IMPORT
                            ? Q.replace(p.ONBOARDING_COMPLETION_ROUTE)
                            : Q.replace(p.ONBOARDING_SECURE_YOUR_WALLET_ROUTE));
                      }, [K, Q, G]);
                      const J = (0, a.useMemo)(
                          () => !(!P || !C || P !== C) && !(P.length < y.PASSWORD_MIN_LENGTH) && !O && !B,
                          [P, C, O, B]
                        ),
                        V = async (t) => {
                          if ((null == t || t.preventDefault(), J))
                            if (
                              (W({
                                category: b.MetaMetricsEventCategory.Onboarding,
                                event: b.MetaMetricsEventName.OnboardingWalletCreationAttempted
                              }),
                              r && G === v.FIRST_TIME_FLOW_TYPES.IMPORT)
                            )
                              await n(P, r), Q.push(p.ONBOARDING_COMPLETION_ROUTE);
                            else
                              try {
                                e && (await e(P)), Q.push(p.ONBOARDING_SECURE_YOUR_WALLET_ROUTE);
                              } catch (e) {
                                S(e.message);
                              }
                        },
                        X = a.default.createElement(
                          "a",
                          {
                            onClick: (e) => e.stopPropagation(),
                            key: "create-password__link-text",
                            href: A.default.PASSWORD_AND_SRP_ARTICLE,
                            target: "_blank",
                            rel: "noopener noreferrer"
                          },
                          a.default.createElement("span", { className: "create-password__link-text" }, k("learnMoreUpperCase"))
                        );
                      return a.default.createElement(
                        "div",
                        { className: "create-password__wrapper", "data-testid": "create-password" },
                        r && G === v.FIRST_TIME_FLOW_TYPES.IMPORT
                          ? a.default.createElement(h.TwoStepProgressBar, { stage: h.twoStepStages.PASSWORD_CREATE, marginBottom: 4 })
                          : a.default.createElement(h.ThreeStepProgressBar, { stage: h.threeStepStages.PASSWORD_CREATE, marginBottom: 4 }),
                        a.default.createElement(
                          u.default,
                          { variant: d.TypographyVariant.H2, fontWeight: d.FONT_WEIGHT.BOLD },
                          k("createPassword")
                        ),
                        a.default.createElement(
                          u.default,
                          { variant: d.TypographyVariant.H4, align: d.TEXT_ALIGN.CENTER },
                          k("passwordSetupDetails")
                        ),
                        a.default.createElement(
                          m.default,
                          { justifyContent: d.JustifyContent.center, marginTop: 3 },
                          a.default.createElement(
                            "form",
                            { className: "create-password__form", onSubmit: V },
                            a.default.createElement(f.default, {
                              dataTestId: "create-password-new",
                              autoFocus: !0,
                              passwordStrength: M,
                              passwordStrengthText: I,
                              onChange: (e) => {
                                const t = e.length && e.length < y.PASSWORD_MIN_LENGTH,
                                  { score: n } = (0, s.default)(e),
                                  r = ((e, t) =>
                                    e
                                      ? {
                                          className: "create-password__weak",
                                          dataTestId: "short-password-error",
                                          text: k("passwordNotLongEnough"),
                                          description: ""
                                        }
                                      : t >= 4
                                      ? {
                                          className: "create-password__strong",
                                          dataTestId: "strong-password",
                                          text: k("strong"),
                                          description: ""
                                        }
                                      : 3 === t
                                      ? {
                                          className: "create-password__average",
                                          dataTestId: "average-password",
                                          text: k("average"),
                                          description: k("passwordStrengthDescription")
                                        }
                                      : {
                                          className: "create-password__weak",
                                          dataTestId: "weak-password",
                                          text: k("weak"),
                                          description: k("passwordStrengthDescription")
                                        })(t, n),
                                  o = k("passwordStrength", [
                                    a.default.createElement("span", { key: n, "data-testid": r.dataTestId, className: r.className }, r.text)
                                  ]),
                                  i = C && e !== C ? k("passwordsDontMatch") : "";
                                N(e), R(o), D(r.description), j(i);
                              },
                              password: !H,
                              titleText: k("newPassword"),
                              value: P,
                              titleDetail: a.default.createElement(
                                u.default,
                                { variant: d.TypographyVariant.H7 },
                                a.default.createElement(
                                  "a",
                                  {
                                    href: "",
                                    "data-testid": "show-password",
                                    className: "create-password__form--password-button",
                                    onClick: (e) => {
                                      e.preventDefault(), U(!H);
                                    }
                                  },
                                  k(H ? "hide" : "show")
                                )
                              )
                            }),
                            a.default.createElement(f.default, {
                              dataTestId: "create-password-confirm",
                              marginTop: 3,
                              onChange: (e) => {
                                const t = P === e ? "" : k("passwordsDontMatch");
                                x(e), j(t);
                              },
                              password: !H,
                              error: B,
                              titleText: k("confirmPassword"),
                              value: C,
                              titleDetail:
                                J &&
                                a.default.createElement(
                                  "div",
                                  { className: "create-password__form--checkmark" },
                                  a.default.createElement(w.Icon, { name: w.IconName.Check })
                                )
                            }),
                            a.default.createElement(
                              m.default,
                              {
                                alignItems: d.AlignItems.center,
                                justifyContent: d.JustifyContent.spaceBetween,
                                marginTop: 4,
                                marginBottom: 4
                              },
                              a.default.createElement(
                                "label",
                                { className: "create-password__form__terms-label" },
                                a.default.createElement(g.default, {
                                  dataTestId: "create-password-terms",
                                  onClick: () => F(!L),
                                  checked: L
                                }),
                                a.default.createElement(
                                  u.default,
                                  { variant: d.TypographyVariant.H5, boxProps: { marginLeft: 3 } },
                                  k("passwordTermsWarning", [X])
                                )
                              )
                            ),
                            a.default.createElement(
                              l.default,
                              {
                                "data-testid":
                                  r && G === v.FIRST_TIME_FLOW_TYPES.IMPORT ? "create-password-import" : "create-password-wallet",
                                type: "primary",
                                large: !0,
                                className: "create-password__form--submit-button",
                                disabled: !J || !L,
                                onClick: V
                              },
                              r && G === v.FIRST_TIME_FLOW_TYPES.IMPORT ? k("importMyWallet") : k("createNewWallet")
                            )
                          )
                        ),
                        Y
                          ? a.default.createElement("iframe", {
                              src: Z,
                              className: "create-password__analytics-iframe",
                              "data-testid": "create-password-iframe"
                            })
                          : null
                      );
                    }
                    x.propTypes = {
                      createNewAccount: r.default.func,
                      importWithRecoveryPhrase: r.default.func,
                      secretRecoveryPhrase: r.default.string
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/create-password/create-password.js" }
    ],
    [
      5733,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/ui/box": 5373,
        "../../../components/ui/button": 5377,
        "../../../components/ui/typography": 5506,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/build-types": 5558,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, r.useHistory)(),
                      t = (0, u.useI18nContext)(),
                      n = (0, a.useContext)(g.MetaMetricsContext),
                      h = (0, o.useSelector)(f.getFirstTimeFlowType);
                    return a.default.createElement(
                      "div",
                      { className: "creation-successful", "data-testid": "creation-successful" },
                      a.default.createElement(
                        s.default,
                        { textAlign: l.TEXT_ALIGN.CENTER },
                        a.default.createElement("img", { src: "./images/tada.png" }),
                        a.default.createElement(
                          i.default,
                          { variant: l.TypographyVariant.H2, fontWeight: l.FONT_WEIGHT.BOLD, margin: 6 },
                          t("walletCreationSuccessTitle")
                        ),
                        a.default.createElement(i.default, { variant: l.TypographyVariant.H4 }, t("walletCreationSuccessDetail"))
                      ),
                      a.default.createElement(
                        i.default,
                        { variant: l.TypographyVariant.H4, boxProps: { align: l.AlignItems.flexStart }, marginLeft: 12 },
                        t("remember")
                      ),
                      a.default.createElement(
                        "ul",
                        null,
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(
                            i.default,
                            { variant: l.TypographyVariant.H4 },
                            (0, p.isBeta)() ? t("betaWalletCreationSuccessReminder1") : t("walletCreationSuccessReminder1")
                          )
                        ),
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(
                            i.default,
                            { variant: l.TypographyVariant.H4 },
                            (0, p.isBeta)() ? t("betaWalletCreationSuccessReminder2") : t("walletCreationSuccessReminder2")
                          )
                        ),
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(
                            i.default,
                            { variant: l.TypographyVariant.H4 },
                            t("walletCreationSuccessReminder3", [
                              a.default.createElement(
                                "span",
                                { key: "creation-successful__bold", className: "creation-successful__bold" },
                                t("walletCreationSuccessReminder3BoldSection")
                              )
                            ])
                          )
                        ),
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(
                            c.default,
                            {
                              href: "https://community.metamask.io/t/what-is-a-secret-recovery-phrase-and-how-to-keep-your-crypto-wallet-secure/3440",
                              target: "_blank",
                              type: "link",
                              rel: "noopener noreferrer"
                            },
                            t("learnMoreUpperCase")
                          )
                        )
                      ),
                      a.default.createElement(
                        s.default,
                        { marginTop: 6, className: "creation-successful__actions" },
                        a.default.createElement(
                          c.default,
                          { type: "link", onClick: () => e.push(d.ONBOARDING_PRIVACY_SETTINGS_ROUTE) },
                          t("advancedConfiguration")
                        ),
                        a.default.createElement(
                          c.default,
                          {
                            "data-testid": "onboarding-complete-done",
                            type: "primary",
                            large: !0,
                            rounded: !0,
                            onClick: () => {
                              n({
                                category: m.MetaMetricsEventCategory.Onboarding,
                                event: m.MetaMetricsEventName.OnboardingWalletCreationComplete,
                                properties: { method: h }
                              }),
                                e.push(d.ONBOARDING_PIN_EXTENSION_ROUTE);
                            }
                          },
                          t("gotIt")
                        )
                      )
                    );
                  });
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-router-dom"),
                  o = e("react-redux"),
                  s = h(e("../../../components/ui/box")),
                  i = h(e("../../../components/ui/typography")),
                  c = h(e("../../../components/ui/button")),
                  l = e("../../../helpers/constants/design-system"),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../helpers/utils/build-types"),
                  f = e("../../../selectors"),
                  m = e("../../../../shared/constants/metametrics"),
                  g = e("../../../contexts/metametrics");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (y = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/creation-successful/creation-successful.js" }
    ],
    [
      5734,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/app/srp-input": 5108,
        "../../../components/app/step-progress-bar": 5116,
        "../../../components/ui/box": 5373,
        "../../../components/ui/button": 5377,
        "../../../components/ui/typography": 5506,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/constants/zendesk-url": 5547,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = T);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-router-dom"),
                  o = e("react-redux"),
                  s = E(e("prop-types")),
                  i = e("../../../components/app/step-progress-bar"),
                  c = E(e("../../../components/ui/box")),
                  l = E(e("../../../components/ui/button")),
                  u = E(e("../../../components/ui/typography")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../helpers/constants/routes"),
                  f = e("../../../hooks/useI18nContext"),
                  m = E(e("../../../helpers/constants/zendesk-url")),
                  g = E(e("../../../components/app/srp-input")),
                  h = e("../../../selectors"),
                  y = e("../../../contexts/metametrics"),
                  A = e("../../../../shared/constants/metametrics");
                function E(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (v = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function T({ submitSecretRecoveryPhrase: e }) {
                  const [t, n] = (0, a.useState)(""),
                    s = (0, r.useHistory)(),
                    E = (0, f.useI18nContext)(),
                    v = (0, o.useSelector)(h.getCurrentKeyring);
                  (0, a.useEffect)(() => {
                    v && s.replace(p.ONBOARDING_CREATE_PASSWORD_ROUTE);
                  }, [v, s]);
                  const T = (0, a.useContext)(y.MetaMetricsContext);
                  return a.default.createElement(
                    "div",
                    { className: "import-srp", "data-testid": "import-srp" },
                    a.default.createElement(i.TwoStepProgressBar, { stage: i.twoStepStages.RECOVERY_PHRASE_CONFIRM, marginBottom: 4 }),
                    a.default.createElement(
                      "div",
                      { className: "import-srp__header" },
                      a.default.createElement(
                        u.default,
                        { variant: d.TypographyVariant.H2, fontWeight: d.FONT_WEIGHT.BOLD },
                        E("accessYourWalletWithSRP")
                      )
                    ),
                    a.default.createElement(
                      "div",
                      { className: "import-srp__description" },
                      a.default.createElement(
                        u.default,
                        { variant: d.TypographyVariant.H4 },
                        E("accessYourWalletWithSRPDescription", [
                          a.default.createElement(
                            "a",
                            {
                              key: "learnMore",
                              type: "link",
                              href: m.default.SECRET_RECOVERY_PHRASE,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            },
                            E("learnMoreUpperCase")
                          )
                        ])
                      )
                    ),
                    a.default.createElement(
                      "div",
                      { className: "import-srp__actions" },
                      a.default.createElement(
                        c.default,
                        { textAlign: d.TEXT_ALIGN.LEFT },
                        a.default.createElement(g.default, { onChange: n, srpText: E("typeYourSRP") }),
                        a.default.createElement(
                          l.default,
                          {
                            className: "import-srp__confirm-button",
                            type: "primary",
                            "data-testid": "import-srp-confirm",
                            large: !0,
                            onClick: () => {
                              e(t),
                                T({
                                  category: A.MetaMetricsEventCategory.Onboarding,
                                  event: A.MetaMetricsEventName.OnboardingWalletSecurityPhraseConfirmed
                                }),
                                s.replace(p.ONBOARDING_CREATE_PASSWORD_ROUTE);
                            },
                            disabled: !t.trim()
                          },
                          E("confirmRecoveryPhrase")
                        )
                      )
                    )
                  );
                }
                T.propTypes = { submitSecretRecoveryPhrase: s.default.func };
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/import-srp/import-srp.js" }
    ],
    [
      5735,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/component-library": 5242,
        "../../../components/ui/box/box": 5372,
        "../../../components/ui/button": 5377,
        "../../../components/ui/typography/typography": 5507,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, l.useI18nContext)(),
                      t = (0, r.useDispatch)(),
                      n = (0, o.useHistory)(),
                      h = (0, r.useSelector)(d.getFirstTimeFlowTypeRoute),
                      y = (0, r.useSelector)(d.getFirstTimeFlowType),
                      A = (0, a.useContext)(f.MetaMetricsContext);
                    return a.default.createElement(
                      "div",
                      { className: "onboarding-metametrics", "data-testid": "onboarding-metametrics" },
                      a.default.createElement(
                        s.default,
                        { variant: i.TypographyVariant.H2, align: i.TEXT_ALIGN.CENTER, fontWeight: i.FONT_WEIGHT.BOLD },
                        e("onboardingMetametricsTitle")
                      ),
                      a.default.createElement(
                        s.default,
                        { className: "onboarding-metametrics__desc", align: i.TEXT_ALIGN.CENTER },
                        e("onboardingMetametricsDescription")
                      ),
                      a.default.createElement(
                        s.default,
                        { className: "onboarding-metametrics__desc", align: i.TEXT_ALIGN.CENTER },
                        e("onboardingMetametricsDescription2")
                      ),
                      a.default.createElement(
                        "ul",
                        null,
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(m.Icon, {
                            name: m.IconName.Check,
                            color: i.IconColor.successDefault,
                            marginInlineEnd: 3
                          }),
                          e("onboardingMetametricsAllowOptOut")
                        ),
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(m.Icon, {
                            name: m.IconName.Check,
                            color: i.IconColor.successDefault,
                            marginInlineEnd: 3
                          }),
                          e("onboardingMetametricsSendAnonymize")
                        ),
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(
                            g.default,
                            null,
                            a.default.createElement(m.Icon, {
                              marginInlineEnd: 2,
                              name: m.IconName.Close,
                              size: m.IconSize.Sm,
                              color: i.IconColor.errorDefault
                            }),
                            e("onboardingMetametricsNeverCollect", [
                              a.default.createElement(
                                s.default,
                                { variant: i.TypographyVariant.span, key: "never", fontWeight: i.FONT_WEIGHT.BOLD, marginTop: 0 },
                                e("onboardingMetametricsNeverEmphasis")
                              )
                            ])
                          )
                        ),
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(
                            g.default,
                            null,
                            a.default.createElement(m.Icon, {
                              marginInlineEnd: 2,
                              name: m.IconName.Close,
                              size: m.IconSize.Sm,
                              color: i.IconColor.errorDefault
                            }),
                            e("onboardingMetametricsNeverCollectIP", [
                              a.default.createElement(
                                s.default,
                                { variant: i.TypographyVariant.span, key: "never-collect", fontWeight: i.FONT_WEIGHT.BOLD },
                                e("onboardingMetametricsNeverEmphasis")
                              )
                            ])
                          )
                        ),
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(
                            g.default,
                            null,
                            a.default.createElement(m.Icon, {
                              marginInlineEnd: 2,
                              name: m.IconName.Close,
                              size: m.IconSize.Sm,
                              color: i.IconColor.errorDefault
                            }),
                            e("onboardingMetametricsNeverSellData", [
                              a.default.createElement(
                                s.default,
                                { variant: i.TypographyVariant.span, key: "never-sell", fontWeight: i.FONT_WEIGHT.BOLD },
                                e("onboardingMetametricsNeverEmphasis")
                              )
                            ])
                          ),
                          " "
                        )
                      ),
                      a.default.createElement(
                        s.default,
                        {
                          color: i.TextColor.textAlternative,
                          align: i.TEXT_ALIGN.CENTER,
                          variant: i.TypographyVariant.H6,
                          className: "onboarding-metametrics__terms"
                        },
                        e("onboardingMetametricsDataTerms")
                      ),
                      a.default.createElement(
                        s.default,
                        {
                          color: i.TextColor.textAlternative,
                          align: i.TEXT_ALIGN.CENTER,
                          variant: i.TypographyVariant.H6,
                          className: "onboarding-metametrics__terms"
                        },
                        e("onboardingMetametricsInfuraTerms", [
                          a.default.createElement(
                            "a",
                            {
                              href: "https://consensys.net/blog/news/consensys-data-retention-update/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              key: "retention-link"
                            },
                            e("onboardingMetametricsInfuraTermsPolicyLink")
                          ),
                          a.default.createElement(
                            "a",
                            { href: "https://metamask.io/privacy.html", target: "_blank", rel: "noopener noreferrer", key: "privacy-link" },
                            e("onboardingMetametricsInfuraTermsPolicy")
                          )
                        ])
                      ),
                      a.default.createElement(
                        "div",
                        { className: "onboarding-metametrics__buttons" },
                        a.default.createElement(
                          c.default,
                          {
                            "data-testid": "metametrics-i-agree",
                            type: "primary",
                            large: !0,
                            onClick: async () => {
                              const [, e] = await t((0, u.setParticipateInMetaMetrics)(!0));
                              try {
                                A(
                                  {
                                    category: p.MetaMetricsEventCategory.Onboarding,
                                    event: p.MetaMetricsEventName.WalletSetupStarted,
                                    properties: {
                                      account_type:
                                        "create" === y ? p.MetaMetricsEventAccountType.Default : p.MetaMetricsEventAccountType.Imported
                                    }
                                  },
                                  { isOptIn: !0, metaMetricsId: e, flushImmediately: !0 }
                                );
                              } finally {
                                n.push(h);
                              }
                            }
                          },
                          e("onboardingMetametricsAgree")
                        ),
                        a.default.createElement(
                          c.default,
                          {
                            "data-testid": "metametrics-no-thanks",
                            type: "secondary",
                            large: !0,
                            onClick: async () => {
                              await t((0, u.setParticipateInMetaMetrics)(!1)), n.push(h);
                            }
                          },
                          e("onboardingMetametricsDisagree")
                        )
                      )
                    );
                  });
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  s = h(e("../../../components/ui/typography/typography")),
                  i = e("../../../helpers/constants/design-system"),
                  c = h(e("../../../components/ui/button")),
                  l = e("../../../hooks/useI18nContext"),
                  u = e("../../../store/actions"),
                  d = e("../../../selectors"),
                  p = e("../../../../shared/constants/metametrics"),
                  f = e("../../../contexts/metametrics"),
                  m = e("../../../components/component-library"),
                  g = h(e("../../../components/ui/box/box"));
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (y = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/metametrics/metametrics.js" }
    ],
    [
      5736,
      {
        "../../../../app/_locales/index.json": 3,
        "../../../components/ui/dropdown": 5402,
        "../../../components/ui/metafox-logo": 5451,
        "../../../ducks/locale/locale": 5528,
        "../../../store/actions": 5965,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, r.useDispatch)(),
                      t = (0, r.useSelector)(i.getCurrentLocale),
                      n = l.default.map((e) => ({ name: e.name, value: e.code }));
                    return a.default.createElement(
                      "div",
                      { className: "onboarding-app-header" },
                      a.default.createElement(
                        "div",
                        { className: "onboarding-app-header__contents" },
                        a.default.createElement(o.default, { unsetIconHeight: !0, isOnboarding: !0 }),
                        a.default.createElement(s.default, {
                          id: "select-locale",
                          options: n,
                          selectedOption: t,
                          onChange: async (t) => e((0, c.updateCurrentLocale)(t))
                        })
                      )
                    );
                  });
                var a = u(e("react")),
                  r = e("react-redux"),
                  o = u(e("../../../components/ui/metafox-logo")),
                  s = u(e("../../../components/ui/dropdown")),
                  i = e("../../../ducks/locale/locale"),
                  c = e("../../../store/actions"),
                  l = u(e("../../../../app/_locales/index.json"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/onboarding-app-header/onboarding-app-header.js" }
    ],
    [
      5737,
      {
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/routes": 5542,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, o.useSelector)(c.getCompletedOnboarding),
                      t = (0, o.useSelector)(c.getIsInitialized),
                      n = (0, o.useSelector)(c.getSeedPhraseBackedUp),
                      a = (0, o.useSelector)(c.getIsUnlocked);
                    if (e) return r.default.createElement(s.Redirect, { to: { pathname: i.DEFAULT_ROUTE } });
                    if (null !== n) return r.default.createElement(s.Redirect, { to: { pathname: i.ONBOARDING_COMPLETION_ROUTE } });
                    if (a) return r.default.createElement(s.Redirect, { to: { pathname: i.LOCK_ROUTE } });
                    if (!t) {
                      let e;
                      return (e = r.default.createElement(s.Redirect, { to: { pathname: i.ONBOARDING_WELCOME_ROUTE } })), e;
                    }
                    return r.default.createElement(s.Redirect, { to: { pathname: i.ONBOARDING_UNLOCK_ROUTE } });
                  });
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a },
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../../helpers/constants/routes"),
                  c = e("../../../ducks/metamask/metamask");
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/onboarding-flow-switch/onboarding-flow-switch.js" }
    ],
    [
      5738,
      {
        "../../../shared/constants/metametrics": 4758,
        "../../components/ui/button": 5377,
        "../../contexts/metametrics": 5515,
        "../../ducks/metamask/metamask": 5529,
        "../../helpers/constants/routes": 5542,
        "../../hooks/useI18nContext": 5602,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "../unlock-page": 5950,
        "./create-password/create-password": 5732,
        "./creation-successful/creation-successful": 5733,
        "./import-srp/import-srp": 5734,
        "./metametrics/metametrics": 5735,
        "./onboarding-flow-switch/onboarding-flow-switch": 5737,
        "./pin-extension/pin-extension": 5740,
        "./privacy-settings/privacy-settings": 5741,
        "./recovery-phrase/confirm-recovery-phrase": 5743,
        "./recovery-phrase/review-recovery-phrase": 5745,
        "./secure-your-wallet/secure-your-wallet": 5746,
        "./welcome/welcome": 5748,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const [e, t] = (0, a.useState)(""),
                      n = (0, o.useDispatch)(),
                      { pathName: x, search: P } = (0, r.useLocation)(),
                      S = (0, r.useHistory)(),
                      M = (0, f.useI18nContext)(),
                      R = (0, o.useSelector)(c.getCompletedOnboarding),
                      I = (0, o.useSelector)(u.getFirstTimeFlowTypeRoute),
                      D = new URLSearchParams(P).get("isFromReminder"),
                      B = (0, a.useContext)(d.MetaMetricsContext);
                    (0, a.useEffect)(() => {
                      R && !D && S.push(i.DEFAULT_ROUTE);
                    }, [S, R, D]),
                      (0, a.useEffect)(() => {
                        (async () => {
                          if (R && !e) {
                            const e = await (0, l.verifySeedPhrase)();
                            e && t(e);
                          }
                        })();
                      }, [R, e]);
                    const j = async (e) => {
                        const a = await n((0, l.createNewVaultAndGetSeedPhrase)(e));
                        t(a);
                      },
                      L = async (e) => {
                        const a = await n((0, l.unlockAndGetSeedPhrase)(e));
                        t(a), S.push(I);
                      },
                      F = async (e, t) => await n((0, l.createNewVaultAndRestore)(e, t));
                    return a.default.createElement(
                      "div",
                      { className: "onboarding-flow" },
                      a.default.createElement(
                        "div",
                        { className: "onboarding-flow__wrapper" },
                        a.default.createElement(
                          r.Switch,
                          null,
                          a.default.createElement(r.Route, {
                            path: i.ONBOARDING_CREATE_PASSWORD_ROUTE,
                            render: (t) =>
                              a.default.createElement(
                                h.default,
                                N({}, t, { createNewAccount: j, importWithRecoveryPhrase: F, secretRecoveryPhrase: e })
                              )
                          }),
                          a.default.createElement(r.Route, { path: i.ONBOARDING_SECURE_YOUR_WALLET_ROUTE, component: A.default }),
                          a.default.createElement(r.Route, {
                            path: i.ONBOARDING_REVIEW_SRP_ROUTE,
                            render: () => a.default.createElement(y.default, { secretRecoveryPhrase: e })
                          }),
                          a.default.createElement(r.Route, {
                            path: i.ONBOARDING_CONFIRM_SRP_ROUTE,
                            render: () => a.default.createElement(E.default, { secretRecoveryPhrase: e })
                          }),
                          a.default.createElement(r.Route, {
                            path: i.ONBOARDING_IMPORT_WITH_SRP_ROUTE,
                            render: (e) => a.default.createElement(w.default, N({}, e, { submitSecretRecoveryPhrase: t }))
                          }),
                          a.default.createElement(r.Route, {
                            path: i.ONBOARDING_UNLOCK_ROUTE,
                            render: (e) => a.default.createElement(s.default, N({}, e, { onSubmit: L }))
                          }),
                          a.default.createElement(r.Route, { path: i.ONBOARDING_PRIVACY_SETTINGS_ROUTE, component: v.default }),
                          a.default.createElement(r.Route, { path: i.ONBOARDING_COMPLETION_ROUTE, component: T.default }),
                          a.default.createElement(r.Route, { path: i.ONBOARDING_WELCOME_ROUTE, component: b.default }),
                          a.default.createElement(r.Route, { path: i.ONBOARDING_PIN_EXTENSION_ROUTE, component: k.default }),
                          a.default.createElement(r.Route, { path: i.ONBOARDING_METAMETRICS, component: C.default }),
                          a.default.createElement(r.Route, { exact: !0, path: "*", component: g.default })
                        )
                      ),
                      x === i.ONBOARDING_COMPLETION_ROUTE &&
                        a.default.createElement(
                          p.default,
                          {
                            className: "onboarding-flow__twitter-button",
                            type: "link",
                            href: O,
                            onClick: () => {
                              B({
                                category: m.MetaMetricsEventCategory.Onboarding,
                                event: m.MetaMetricsEventName.OnboardingTwitterClick,
                                properties: {
                                  text: M("followUsOnTwitter"),
                                  location: m.MetaMetricsEventName.OnboardingWalletCreationComplete,
                                  url: O
                                }
                              });
                            },
                            target: "_blank"
                          },
                          a.default.createElement("span", null, M("followUsOnTwitter")),
                          a.default.createElement("i", { className: "fab fa-twitter onboarding-flow__twitter-button__icon" })
                        )
                    );
                  });
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = P(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-router-dom"),
                  o = e("react-redux"),
                  s = x(e("../unlock-page")),
                  i = e("../../helpers/constants/routes"),
                  c = e("../../ducks/metamask/metamask"),
                  l = e("../../store/actions"),
                  u = e("../../selectors"),
                  d = e("../../contexts/metametrics"),
                  p = x(e("../../components/ui/button")),
                  f = e("../../hooks/useI18nContext"),
                  m = e("../../../shared/constants/metametrics"),
                  g = x(e("./onboarding-flow-switch/onboarding-flow-switch")),
                  h = x(e("./create-password/create-password")),
                  y = x(e("./recovery-phrase/review-recovery-phrase")),
                  A = x(e("./secure-your-wallet/secure-your-wallet")),
                  E = x(e("./recovery-phrase/confirm-recovery-phrase")),
                  v = x(e("./privacy-settings/privacy-settings")),
                  T = x(e("./creation-successful/creation-successful")),
                  b = x(e("./welcome/welcome")),
                  w = x(e("./import-srp/import-srp")),
                  k = x(e("./pin-extension/pin-extension")),
                  C = x(e("./metametrics/metametrics"));
                function x(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function P(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (P = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function N() {
                  return (
                    (N = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                          }
                          return e;
                        }),
                    N.apply(this, arguments)
                  );
                }
                const O = "https://twitter.com/MetaMask";
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/onboarding-flow.js" }
    ],
    [
      5739,
      { "../../../hooks/useI18nContext": 5602, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, o.useI18nContext)();
                    return r.default.createElement(
                      "svg",
                      {
                        width: "100%",
                        height: "320",
                        viewBox: "0 0 799 320",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                      },
                      r.default.createElement(
                        "g",
                        { filter: "url(#filter0_d_2133:17259)" },
                        r.default.createElement("rect", { x: "31", y: "71", width: "270", height: "148", rx: "8", fill: "url(#pattern0)" })
                      ),
                      r.default.createElement("circle", { cx: "54.5", cy: "24.5", r: "24.5", fill: "url(#paint0_linear_2133:17259)" }),
                      r.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Euclid Circular A",
                          fontSize: "29",
                          fontWeight: "bold",
                          letterSpacing: "0em"
                        },
                        r.default.createElement("tspan", { x: "48.9917", y: "35.114" }, e("onboardingPinExtensionStep1"))
                      ),
                      r.default.createElement(
                        "text",
                        {
                          fill: "var(--color-text-default)",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Euclid Circular B",
                          fontSize: "18",
                          letterSpacing: "0em"
                        },
                        r.default.createElement("tspan", { x: "95", y: "31.088" }, e("onboardingPinExtensionChrome"))
                      ),
                      r.default.createElement("circle", { cx: "522.5", cy: "102.5", r: "24.5", fill: "url(#paint1_linear_2133:17259)" }),
                      r.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Euclid Circular A",
                          fontSize: "29",
                          fontWeight: "bold",
                          letterSpacing: "0em"
                        },
                        r.default.createElement("tspan", { x: "514.131", y: "113.114" }, e("onboardingPinExtensionStep2"))
                      ),
                      r.default.createElement(
                        "text",
                        {
                          fill: "var(--color-text-default)",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Euclid Circular B",
                          fontSize: "18",
                          letterSpacing: "0em"
                        },
                        r.default.createElement("tspan", { x: "563", y: "109.088" }, e("onboardingPinExtensionLabel"))
                      ),
                      r.default.createElement("path", {
                        d: "M301 137H373.953C388.865 137 400.953 149.088 400.953 164V190C400.953 204.912 413.042 217 427.953 217H498",
                        stroke: "#037DD6",
                        strokeWidth: "2"
                      }),
                      r.default.createElement(
                        "g",
                        { filter: "url(#filter1_d_2133:17259)" },
                        r.default.createElement("rect", { x: "498", y: "149", width: "270", height: "136", rx: "8", fill: "#292A2D" })
                      ),
                      r.default.createElement(
                        "g",
                        { filter: "url(#filter2_d_2133:17259)" },
                        r.default.createElement("ellipse", { cx: "703.613", cy: "266.5", rx: "30.6134", ry: "30.5", fill: "white" }),
                        r.default.createElement("path", {
                          d: "M703.613 298C721.069 298 735.227 283.9 735.227 266.5C735.227 249.1 721.069 235 703.613 235C686.157 235 672 249.1 672 266.5C672 283.9 686.157 298 703.613 298Z",
                          stroke: "white",
                          strokeWidth: "2"
                        })
                      ),
                      r.default.createElement(
                        "mask",
                        {
                          id: "mask0_2133:17259",
                          style: { maskType: "alpha" },
                          maskUnits: "userSpaceOnUse",
                          x: "673",
                          y: "236",
                          width: "62",
                          height: "61"
                        },
                        r.default.createElement("path", {
                          d: "M703.614 296C719.961 296 733.22 282.796 733.22 266.5C733.22 250.204 719.961 237 703.614 237C687.266 237 674.008 250.204 674.008 266.5C674.008 282.796 687.266 296 703.614 296Z",
                          fill: "white",
                          stroke: "white",
                          strokeWidth: "2"
                        })
                      ),
                      r.default.createElement(
                        "g",
                        { mask: "url(#mask0_2133:17259)" },
                        r.default.createElement("rect", { x: "646.903", y: "221", width: "121.45", height: "106", fill: "url(#pattern1)" })
                      ),
                      r.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Open Sans",
                          fontSize: "12",
                          fontWeight: "600",
                          letterSpacing: "0px"
                        },
                        r.default.createElement("tspan", { x: "514", y: "180.155" }, e("onboardingPinExtensionBillboardTitle"))
                      ),
                      r.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Open Sans",
                          fontSize: "10",
                          fontWeight: "bold",
                          letterSpacing: "-0.4px"
                        },
                        r.default.createElement("tspan", { x: "514", y: "205.879" }, e("onboardingPinExtensionBillboardAccess"))
                      ),
                      r.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Open Sans",
                          fontSize: "9",
                          fontWeight: "bold",
                          letterSpacing: "0px"
                        },
                        r.default.createElement("tspan", { x: "540.146", y: "262.991" }, e("appName"))
                      ),
                      r.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Open Sans",
                          fontSize: "10",
                          letterSpacing: "-0.3px"
                        },
                        r.default.createElement("tspan", { x: "514", y: "223.379" }, e("onboardingPinExtensionBillboardDescription")),
                        r.default.createElement("tspan", { x: "514", y: "238.379" }, e("onboardingPinExtensionBillboardDescription2"))
                      ),
                      r.default.createElement("path", {
                        d: "M744.188 177.988L746.888 175.313C747.038 175.163 747.038 174.888 746.888 174.738L746.263 174.113C746.113 173.962 745.838 173.962 745.688 174.113L743.013 176.813L740.313 174.113C740.163 173.962 739.888 173.962 739.738 174.113L739.113 174.738C738.962 174.888 738.962 175.163 739.113 175.313L741.813 177.988L739.113 180.688C738.962 180.838 738.962 181.113 739.113 181.263L739.738 181.888C739.888 182.038 740.163 182.038 740.313 181.888L743.013 179.188L745.688 181.888C745.838 182.038 746.113 182.038 746.263 181.888L746.888 181.263C747.038 181.113 747.038 180.838 746.888 180.688L744.188 177.988Z",
                        fill: "#BBC0C5"
                      }),
                      r.default.createElement("path", {
                        d: "M742 257.875C741.367 257.875 740.875 258.391 740.875 259C740.875 259.633 741.367 260.125 742 260.125C742.609 260.125 743.125 259.633 743.125 259C743.125 258.391 742.609 257.875 742 257.875ZM740.875 255.438C740.875 256.07 741.367 256.562 742 256.562C742.609 256.562 743.125 256.07 743.125 255.438C743.125 254.828 742.609 254.312 742 254.312C741.367 254.312 740.875 254.828 740.875 255.438ZM740.875 262.562C740.875 263.195 741.367 263.688 742 263.688C742.609 263.688 743.125 263.195 743.125 262.562C743.125 261.953 742.609 261.438 742 261.438C741.367 261.438 740.875 261.953 740.875 262.562Z",
                        fill: "#BBC0C5"
                      }),
                      r.default.createElement("path", {
                        d: "M527.496 254L522.36 257.75L523.315 255.54L527.496 254Z",
                        fill: "#E17726",
                        stroke: "#E17726",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M515.651 254L520.741 257.785L519.832 255.54L515.651 254Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M525.647 262.695L524.28 264.755L527.206 265.55L528.044 262.74L525.647 262.695Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M515.107 262.74L515.94 265.55L518.861 264.755L517.5 262.695L515.107 262.74Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M518.704 259.215L517.892 260.425L520.787 260.555L520.69 257.48L518.704 259.215Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M524.443 259.215L522.426 257.445L522.36 260.555L525.256 260.425L524.443 259.215Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M518.861 264.755L520.614 263.92L519.105 262.76L518.861 264.755Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M522.534 263.92L524.282 264.755L524.043 262.76L522.534 263.92Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M524.28 264.755L522.532 263.92L522.674 265.04L522.659 265.515L524.28 264.755Z",
                        fill: "#D5BFB2",
                        stroke: "#D5BFB2",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M518.86 264.755L520.486 265.515L520.476 265.04L520.613 263.92L518.86 264.755Z",
                        fill: "#D5BFB2",
                        stroke: "#D5BFB2",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M520.516 262.02L519.063 261.6L520.09 261.135L520.516 262.02Z",
                        fill: "#233447",
                        stroke: "#233447",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M522.63 262.02L523.057 261.135L524.088 261.6L522.63 262.02Z",
                        fill: "#233447",
                        stroke: "#233447",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M518.86 264.755L519.114 262.695L517.499 262.74L518.86 264.755Z",
                        fill: "#CC6228",
                        stroke: "#CC6228",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M524.03 262.695L524.279 264.755L525.646 262.74L524.03 262.695Z",
                        fill: "#CC6228",
                        stroke: "#CC6228",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M525.256 260.425L522.36 260.555L522.63 262.02L523.056 261.135L524.087 261.6L525.256 260.425Z",
                        fill: "#CC6228",
                        stroke: "#CC6228",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M519.063 261.6L520.089 261.135L520.516 262.02L520.785 260.555L517.89 260.425L519.063 261.6Z",
                        fill: "#CC6228",
                        stroke: "#CC6228",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M517.89 260.425L519.104 262.76L519.063 261.6L517.89 260.425Z",
                        fill: "#E27525",
                        stroke: "#E27525",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M524.088 261.6L524.042 262.76L525.256 260.425L524.088 261.6Z",
                        fill: "#E27525",
                        stroke: "#E27525",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M520.786 260.555L520.517 262.02L520.857 263.75L520.933 261.47L520.786 260.555Z",
                        fill: "#E27525",
                        stroke: "#E27525",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M522.36 260.555L522.218 261.465L522.289 263.75L522.629 262.02L522.36 260.555Z",
                        fill: "#E27525",
                        stroke: "#E27525",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M522.629 262.02L522.289 263.75L522.533 263.92L524.041 262.76L524.087 261.6L522.629 262.02Z",
                        fill: "#F5841F",
                        stroke: "#F5841F",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M519.063 261.6L519.104 262.76L520.613 263.92L520.857 263.75L520.516 262.02L519.063 261.6Z",
                        fill: "#F5841F",
                        stroke: "#F5841F",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M522.66 265.515L522.675 265.04L522.543 264.93H520.603L520.476 265.04L520.486 265.515L518.86 264.755L519.429 265.215L520.582 266H522.558L523.716 265.215L524.28 264.755L522.66 265.515Z",
                        fill: "#C0AC9D",
                        stroke: "#C0AC9D",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M522.533 263.92L522.289 263.75H520.857L520.613 263.92L520.476 265.04L520.603 264.93H522.543L522.675 265.04L522.533 263.92Z",
                        fill: "#161616",
                        stroke: "#161616",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M527.714 257.995L528.146 255.925L527.496 254L522.533 257.625L524.443 259.215L527.14 259.99L527.735 259.305L527.476 259.12L527.887 258.75L527.572 258.51L527.984 258.2L527.714 257.995Z",
                        fill: "#763E1A",
                        stroke: "#763E1A",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M515 255.925L515.437 257.995L515.157 258.2L515.574 258.51L515.259 258.75L515.67 259.12L515.411 259.305L516.006 259.99L518.703 259.215L520.613 257.625L515.65 254L515 255.925Z",
                        fill: "#763E1A",
                        stroke: "#763E1A",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M527.14 259.99L524.443 259.215L525.256 260.425L524.042 262.76L525.647 262.74H528.045L527.14 259.99Z",
                        fill: "#F5841F",
                        stroke: "#F5841F",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M518.703 259.215L516.006 259.99L515.106 262.74H517.499L519.104 262.76L517.89 260.425L518.703 259.215Z",
                        fill: "#F5841F",
                        stroke: "#F5841F",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement("path", {
                        d: "M522.361 260.555L522.533 257.625L523.316 255.54H519.831L520.613 257.625L520.786 260.555L520.852 261.475L520.857 263.75H522.29L522.295 261.475L522.361 260.555Z",
                        fill: "#F5841F",
                        stroke: "#F5841F",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      r.default.createElement(
                        "defs",
                        null,
                        r.default.createElement(
                          "filter",
                          {
                            id: "filter0_d_2133:17259",
                            x: "0",
                            y: "44",
                            width: "332",
                            height: "210",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB"
                          },
                          r.default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                          r.default.createElement("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                          }),
                          r.default.createElement("feMorphology", {
                            radius: "6",
                            operator: "dilate",
                            in: "SourceAlpha",
                            result: "effect1_dropShadow_2133:17259"
                          }),
                          r.default.createElement("feOffset", { dy: "4" }),
                          r.default.createElement("feGaussianBlur", { stdDeviation: "12.5" }),
                          r.default.createElement("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                          }),
                          r.default.createElement("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_2133:17259"
                          }),
                          r.default.createElement("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_2133:17259",
                            result: "shape"
                          })
                        ),
                        r.default.createElement(
                          "pattern",
                          { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                          r.default.createElement("use", {
                            xlinkHref: "#image0_2133:17259",
                            transform: "translate(0 -0.0770822) scale(0.00170068 0.00310259)"
                          })
                        ),
                        r.default.createElement(
                          "filter",
                          {
                            id: "filter1_d_2133:17259",
                            x: "467",
                            y: "122",
                            width: "332",
                            height: "198",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB"
                          },
                          r.default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                          r.default.createElement("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                          }),
                          r.default.createElement("feMorphology", {
                            radius: "6",
                            operator: "dilate",
                            in: "SourceAlpha",
                            result: "effect1_dropShadow_2133:17259"
                          }),
                          r.default.createElement("feOffset", { dy: "4" }),
                          r.default.createElement("feGaussianBlur", { stdDeviation: "12.5" }),
                          r.default.createElement("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                          }),
                          r.default.createElement("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_2133:17259"
                          }),
                          r.default.createElement("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_2133:17259",
                            result: "shape"
                          })
                        ),
                        r.default.createElement(
                          "filter",
                          {
                            id: "filter2_d_2133:17259",
                            x: "666",
                            y: "229",
                            width: "75.2266",
                            height: "75",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB"
                          },
                          r.default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                          r.default.createElement("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                          }),
                          r.default.createElement("feOffset", null),
                          r.default.createElement("feGaussianBlur", { stdDeviation: "2.5" }),
                          r.default.createElement("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0.26 0"
                          }),
                          r.default.createElement("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_2133:17259"
                          }),
                          r.default.createElement("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_2133:17259",
                            result: "shape"
                          })
                        ),
                        r.default.createElement(
                          "pattern",
                          { id: "pattern1", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                          r.default.createElement("use", {
                            xlinkHref: "#image1_2133:17259",
                            transform: "translate(0 -0.000404155) scale(0.00301205 0.00345106)"
                          })
                        ),
                        r.default.createElement(
                          "linearGradient",
                          {
                            id: "paint0_linear_2133:17259",
                            x1: "30",
                            y1: "20.1898",
                            x2: "79.0003",
                            y2: "20.3",
                            gradientUnits: "userSpaceOnUse"
                          },
                          r.default.createElement("stop", { stopColor: "#037DD6" }),
                          r.default.createElement("stop", { offset: "1", stopColor: "#1098FC" })
                        ),
                        r.default.createElement(
                          "linearGradient",
                          {
                            id: "paint1_linear_2133:17259",
                            x1: "498",
                            y1: "98.1898",
                            x2: "547",
                            y2: "98.3",
                            gradientUnits: "userSpaceOnUse"
                          },
                          r.default.createElement("stop", { stopColor: "#037DD6" }),
                          r.default.createElement("stop", { offset: "1", stopColor: "#1098FC" })
                        ),
                        r.default.createElement("image", {
                          id: "image0_2133:17259",
                          width: "588",
                          height: "372",
                          xlinkHref:
                            "data:image/png;base64,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"
                        }),
                        r.default.createElement("image", {
                          id: "image1_2133:17259",
                          width: "332",
                          height: "290",
                          xlinkHref:
                            "data:image/png;base64,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"
                        })
                      )
                    );
                  });
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a },
                  o = e("../../../hooks/useI18nContext");
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/pin-extension/pin-billboard.js" }
    ],
    [
      5740,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/component-library": 5242,
        "../../../components/ui/button": 5377,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/onboarding": 5541,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "./pin-billboard": 5739,
        react: 4475,
        "react-redux": 4440,
        "react-responsive-carousel": 4455,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, c.useI18nContext)(),
                      t = (0, r.useHistory)(),
                      [n, A] = (0, a.useState)(0),
                      E = (0, o.useDispatch)(),
                      v = (0, a.useContext)(f.MetaMetricsContext),
                      T = (0, o.useSelector)(g.getFirstTimeFlowType);
                    return a.default.createElement(
                      "div",
                      { className: "onboarding-pin-extension", "data-testid": "onboarding-pin-extension" },
                      a.default.createElement(
                        a.default.Fragment,
                        null,
                        a.default.createElement(
                          p.Text,
                          { variant: u.TextVariant.headingLg, as: "h2", align: u.TextAlign.Center, fontWeight: u.FontWeight.Bold },
                          e("onboardingPinExtensionTitle")
                        ),
                        a.default.createElement(
                          s.Carousel,
                          { selectedItem: n, showThumbs: !1, showStatus: !1, showArrows: !1, onChange: (e) => A(e) },
                          a.default.createElement(
                            "div",
                            null,
                            a.default.createElement(p.Text, { align: u.TextAlign.Center }, e("onboardingPinExtensionDescription")),
                            a.default.createElement(
                              "div",
                              { className: "onboarding-pin-extension__diagram" },
                              a.default.createElement(y.default, null)
                            )
                          ),
                          a.default.createElement(
                            "div",
                            null,
                            a.default.createElement(p.Text, { align: u.TextAlign.Center }, e("onboardingPinExtensionDescription2")),
                            a.default.createElement(p.Text, { align: u.TextAlign.Center }, e("onboardingPinExtensionDescription3")),
                            a.default.createElement("img", {
                              src: "/images/onboarding-pin-browser.svg",
                              width: "799",
                              height: "320",
                              alt: ""
                            })
                          )
                        ),
                        a.default.createElement(
                          "div",
                          { className: "onboarding-pin-extension__buttons" },
                          a.default.createElement(
                            l.default,
                            {
                              "data-testid": 0 === n ? "pin-extension-next" : "pin-extension-done",
                              type: "primary",
                              onClick: async () => {
                                0 === n
                                  ? A(1)
                                  : (await E((0, i.setCompletedOnboarding)()),
                                    v({
                                      category: h.MetaMetricsEventCategory.Onboarding,
                                      event: h.MetaMetricsEventName.OnboardingWalletSetupComplete,
                                      properties: {
                                        wallet_setup_type: T === m.FIRST_TIME_FLOW_TYPES.IMPORT ? "import" : "new",
                                        new_wallet: T === m.FIRST_TIME_FLOW_TYPES.CREATE
                                      }
                                    }),
                                    t.push(d.DEFAULT_ROUTE));
                              }
                            },
                            e(0 === n ? "next" : "done")
                          )
                        )
                      )
                    );
                  });
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-router-dom"),
                  o = e("react-redux"),
                  s = e("react-responsive-carousel"),
                  i = e("../../../store/actions"),
                  c = e("../../../hooks/useI18nContext"),
                  l = A(e("../../../components/ui/button")),
                  u = e("../../../helpers/constants/design-system"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../components/component-library"),
                  f = e("../../../contexts/metametrics"),
                  m = e("../../../helpers/constants/onboarding"),
                  g = e("../../../selectors"),
                  h = e("../../../../shared/constants/metametrics"),
                  y = A(e("./pin-billboard"));
                function A(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/pin-extension/pin-extension.js" }
    ],
    [
      5741,
      {
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/lib/ui-utils": 4779,
        "../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle": 4939,
        "../../../components/component-library": 5242,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "./setting": 5742,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    var e;
                    const t = (0, m.useI18nContext)(),
                      n = (0, o.useDispatch)(),
                      a = (0, s.useHistory)(),
                      E = (0, o.useSelector)((e) => e.metamask),
                      {
                        incomingTransactionsPreferences: v,
                        usePhishDetect: T,
                        use4ByteResolution: b,
                        useTokenDetection: w,
                        useCurrencyRateCheck: k,
                        useMultiAccountBalanceChecker: C,
                        ipfsGateway: x,
                        useAddressBarEnsResolution: P
                      } = E,
                      [N, O] = (0, r.useState)(T),
                      [S, M] = (0, r.useState)(b),
                      [R, I] = (0, r.useState)(w),
                      [D, B] = (0, r.useState)(k),
                      [j, L] = (0, r.useState)(C),
                      [F, H] = (0, r.useState)(x),
                      [U, Q] = (0, r.useState)(null),
                      [G, W] = (0, r.useState)(P),
                      K = (0, r.useContext)(d.MetaMetricsContext),
                      Y = (0, o.useSelector)(g.getCurrentNetwork),
                      z = (0, o.useSelector)(g.getAllNetworks);
                    return r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(
                        "div",
                        { className: "privacy-settings", "data-testid": "privacy-settings" },
                        r.default.createElement(
                          "div",
                          { className: "privacy-settings__header" },
                          r.default.createElement(u.Text, { variant: p.TextVariant.headingLg, as: "h2" }, t("advancedConfiguration")),
                          r.default.createElement(
                            u.Text,
                            { variant: p.TextVariant.headingSm, as: "h4" },
                            t("setAdvancedPrivacySettingsDetails")
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "privacy-settings__settings", "data-testid": "privacy-settings-settings" },
                          r.default.createElement(y.default, {
                            allNetworks: z,
                            setIncomingTransactionsPreferences: (e, t) => n((0, h.setIncomingTransactionsPreferences)(e, t)),
                            incomingTransactionsPreferences: v
                          }),
                          r.default.createElement(A.Setting, {
                            value: N,
                            setValue: O,
                            title: t("usePhishingDetection"),
                            description: t("onboardingUsePhishingDetectionDescription", [
                              r.default.createElement(
                                "a",
                                { href: "https://www.jsdelivr.com", target: "_blank", rel: "noreferrer", key: "jsDeliver" },
                                t("jsDeliver")
                              ),
                              r.default.createElement(
                                "a",
                                {
                                  href: "https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-com",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  key: "privacyMsg"
                                },
                                t("privacyMsg")
                              )
                            ])
                          }),
                          r.default.createElement(A.Setting, {
                            value: S,
                            setValue: M,
                            title: t("use4ByteResolution"),
                            description: t("use4ByteResolutionDescription")
                          }),
                          r.default.createElement(A.Setting, {
                            value: R,
                            setValue: I,
                            title: t("turnOnTokenDetection"),
                            description: t("useTokenDetectionPrivacyDesc")
                          }),
                          r.default.createElement(A.Setting, {
                            value: j,
                            setValue: L,
                            title: t("useMultiAccountBalanceChecker"),
                            description: t("useMultiAccountBalanceCheckerSettingDescription")
                          }),
                          r.default.createElement(A.Setting, {
                            title: t("onboardingAdvancedPrivacyNetworkTitle"),
                            showToggle: !1,
                            description: r.default.createElement(
                              r.default.Fragment,
                              null,
                              t("onboardingAdvancedPrivacyNetworkDescription", [
                                r.default.createElement(
                                  "a",
                                  {
                                    href: "https://consensys.net/privacy-policy/",
                                    key: "link",
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  },
                                  t("privacyMsg")
                                )
                              ]),
                              r.default.createElement(
                                u.Box,
                                { paddingTop: 2 },
                                Y
                                  ? r.default.createElement(
                                      "div",
                                      { className: "privacy-settings__network" },
                                      r.default.createElement(
                                        r.default.Fragment,
                                        null,
                                        r.default.createElement(u.PickerNetwork, {
                                          label: null == Y ? void 0 : Y.nickname,
                                          src: null == Y || null === (e = Y.rpcPrefs) || void 0 === e ? void 0 : e.imageUrl,
                                          onClick: () => n((0, h.toggleNetworkMenu)())
                                        })
                                      )
                                    )
                                  : r.default.createElement(
                                      u.ButtonSecondary,
                                      {
                                        size: u.ButtonSecondarySize.Lg,
                                        onClick: (e) => {
                                          e.preventDefault(), n((0, h.showModal)({ name: "ONBOARDING_ADD_NETWORK" }));
                                        }
                                      },
                                      t("onboardingAdvancedPrivacyNetworkButton")
                                    )
                              )
                            )
                          }),
                          r.default.createElement(A.Setting, {
                            title: t("onboardingAdvancedPrivacyIPFSTitle"),
                            showToggle: !1,
                            description: r.default.createElement(
                              r.default.Fragment,
                              null,
                              t("onboardingAdvancedPrivacyIPFSDescription"),
                              r.default.createElement(
                                u.Box,
                                { paddingTop: 2 },
                                r.default.createElement(u.TextField, {
                                  value: F,
                                  style: { width: "100%" },
                                  inputProps: { "data-testid": "ipfs-input" },
                                  onChange: (e) => {
                                    ((e) => {
                                      H(e);
                                      try {
                                        const { host: t } = new URL((0, i.addUrlProtocolPrefix)(e));
                                        if (!t || "gateway.ipfs.io" === t) throw new Error();
                                        Q(null);
                                      } catch (e) {
                                        Q(t("onboardingAdvancedPrivacyIPFSInvalid"));
                                      }
                                    })(e.target.value);
                                  }
                                }),
                                F
                                  ? r.default.createElement(
                                      u.Text,
                                      { variant: p.TextVariant.bodySm, color: U ? p.TextColor.errorDefault : p.TextColor.successDefault },
                                      U || t("onboardingAdvancedPrivacyIPFSValid")
                                    )
                                  : null
                              )
                            )
                          }),
                          r.default.createElement(A.Setting, {
                            value: G,
                            setValue: W,
                            title: t("ensDomainsSettingTitle"),
                            description: r.default.createElement(
                              r.default.Fragment,
                              null,
                              r.default.createElement(
                                u.Text,
                                { variant: p.TextVariant.inherit },
                                t("ensDomainsSettingDescriptionIntroduction")
                              ),
                              r.default.createElement(
                                u.Box,
                                { as: "ul", marginTop: 4, marginBottom: 4, paddingInlineStart: 4, style: { listStyleType: "circle" } },
                                r.default.createElement(
                                  u.Text,
                                  { variant: p.TextVariant.inherit, as: "li" },
                                  t("ensDomainsSettingDescriptionPart1")
                                ),
                                r.default.createElement(
                                  u.Text,
                                  { variant: p.TextVariant.inherit, as: "li" },
                                  t("ensDomainsSettingDescriptionPart2")
                                )
                              ),
                              r.default.createElement(
                                u.Text,
                                { variant: p.TextVariant.inherit },
                                t("ensDomainsSettingDescriptionOutroduction")
                              )
                            )
                          }),
                          r.default.createElement(A.Setting, {
                            value: D,
                            setValue: B,
                            title: t("currencyRateCheckToggle"),
                            description: t("currencyRateCheckToggleDescription", [
                              r.default.createElement(
                                "a",
                                { key: "coingecko_link", href: l.COINGECKO_LINK, rel: "noreferrer", target: "_blank" },
                                t("coingecko")
                              ),
                              r.default.createElement(
                                "a",
                                { key: "cryptocompare_link", href: l.CRYPTOCOMPARE_LINK, rel: "noreferrer", target: "_blank" },
                                t("cryptoCompare")
                              ),
                              r.default.createElement(
                                "a",
                                { key: "privacy_policy_link", href: l.PRIVACY_POLICY_LINK, rel: "noreferrer", target: "_blank" },
                                t("privacyMsg")
                              )
                            ])
                          }),
                          r.default.createElement(
                            u.ButtonPrimary,
                            {
                              size: u.ButtonPrimarySize.Lg,
                              onClick: () => {
                                if (
                                  (n((0, h.setUsePhishDetect)(N)),
                                  n((0, h.setUse4ByteResolution)(S)),
                                  n((0, h.setUseTokenDetection)(R)),
                                  n((0, h.setUseMultiAccountBalanceChecker)(j)),
                                  n((0, h.setUseCurrencyRateCheck)(D)),
                                  n((0, h.setCompletedOnboarding)()),
                                  n((0, h.setUseAddressBarEnsResolution)(G)),
                                  F && !U)
                                ) {
                                  const { host: e } = new URL((0, i.addUrlProtocolPrefix)(F));
                                  n((0, h.setIpfsGateway)(e));
                                }
                                K({
                                  category: c.MetaMetricsEventCategory.Onboarding,
                                  event: c.MetaMetricsEventName.OnboardingWalletAdvancedSettings,
                                  properties: { show_incoming_tx: v, use_phising_detection: N, turnon_token_detection: R }
                                }),
                                  a.push(f.ONBOARDING_PIN_EXTENSION_ROUTE);
                              },
                              block: !0,
                              marginTop: 6
                            },
                            t("done")
                          )
                        )
                      )
                    );
                  });
                var a,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../../../app/scripts/lib/util"),
                  c = e("../../../../shared/constants/metametrics"),
                  l = e("../../../../shared/lib/ui-utils"),
                  u = e("../../../components/component-library"),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../helpers/constants/routes"),
                  m = e("../../../hooks/useI18nContext"),
                  g = e("../../../selectors"),
                  h = e("../../../store/actions"),
                  y =
                    (a = e("../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle")) && a.__esModule
                      ? a
                      : { default: a },
                  A = e("./setting");
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/privacy-settings/privacy-settings.js" }
    ],
    [
      5742,
      {
        "../../../components/component-library": 5242,
        "../../../components/ui/toggle-button": 5495,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Setting = void 0);
                var a = l(e("react")),
                  r = l(e("prop-types")),
                  o = e("../../../components/component-library"),
                  s = l(e("../../../components/ui/toggle-button")),
                  i = e("../../../helpers/constants/design-system"),
                  c = e("../../../hooks/useI18nContext");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ value: e, setValue: t, title: n, description: r, showToggle: l = !0 }) => {
                  const u = (0, c.useI18nContext)();
                  return a.default.createElement(
                    o.Box,
                    {
                      display: i.Display.Flex,
                      justifyContent: i.JustifyContent.spaceBetween,
                      alignItems: i.AlignItems.center,
                      marginTop: 3,
                      marginBottom: 3,
                      className: "privacy-settings__setting__wrapper"
                    },
                    a.default.createElement(
                      "div",
                      { className: "privacy-settings__setting" },
                      a.default.createElement(o.Text, { variant: i.TextVariant.bodyMdMedium }, n),
                      a.default.createElement(o.Text, { variant: i.TextVariant.bodySm, as: "div" }, r)
                    ),
                    l
                      ? a.default.createElement(
                          "div",
                          { className: "privacy-settings__setting__toggle" },
                          a.default.createElement(s.default, { value: e, onToggle: (e) => t(!e), offLabel: u("off"), onLabel: u("on") })
                        )
                      : null
                  );
                };
                (n.Setting = u),
                  (u.propTypes = {
                    value: r.default.bool,
                    setValue: r.default.func,
                    title: r.default.string,
                    description: r.default.oneOfType([r.default.object, r.default.string]),
                    showToggle: r.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/privacy-settings/setting.js" }
    ],
    [
      5743,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/app/step-progress-bar": 5116,
        "../../../components/ui/box": 5373,
        "../../../components/ui/button": 5377,
        "../../../components/ui/typography": 5506,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useI18nContext": 5602,
        "../../../store/actions": 5965,
        "./recovery-phrase-chips": 5744,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = T);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-router-dom"),
                  o = e("react-redux"),
                  s = e("lodash"),
                  i = E(e("prop-types")),
                  c = E(e("../../../components/ui/box")),
                  l = E(e("../../../components/ui/button")),
                  u = E(e("../../../components/ui/typography")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../components/app/step-progress-bar"),
                  f = e("../../../helpers/constants/routes"),
                  m = e("../../../hooks/useI18nContext"),
                  g = e("../../../store/actions"),
                  h = e("../../../contexts/metametrics"),
                  y = e("../../../../shared/constants/metametrics"),
                  A = E(e("./recovery-phrase-chips"));
                function E(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (v = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function T({ secretRecoveryPhrase: e = "" }) {
                  const t = (0, r.useHistory)(),
                    n = (0, m.useI18nContext)(),
                    i = (0, o.useDispatch)(),
                    E = e.split(" "),
                    v = [2, 3, 7],
                    [T, b] = (0, a.useState)(!1),
                    w = (0, a.useContext)(h.MetaMetricsContext),
                    [k, C] = (0, a.useState)(
                      (() => {
                        const e = { ...E };
                        return (
                          v.forEach((t) => {
                            e[t] = "";
                          }),
                          e
                        );
                      })()
                    ),
                    x = (0, a.useMemo)(
                      () =>
                        (0, s.debounce)((t) => {
                          b(Object.values(t).join(" ") === e);
                        }, 500),
                      [b, e]
                    );
                  return a.default.createElement(
                    "div",
                    { className: "recovery-phrase__confirm", "data-testid": "confirm-recovery-phrase" },
                    a.default.createElement(p.ThreeStepProgressBar, { stage: p.threeStepStages.RECOVERY_PHRASE_CONFIRM, marginBottom: 4 }),
                    a.default.createElement(
                      c.default,
                      { justifyContent: d.JustifyContent.center, textAlign: d.TEXT_ALIGN.CENTER, marginBottom: 4 },
                      a.default.createElement(
                        u.default,
                        { variant: d.TypographyVariant.H2, fontWeight: d.FONT_WEIGHT.BOLD },
                        n("seedPhraseConfirm")
                      )
                    ),
                    a.default.createElement(
                      c.default,
                      { justifyContent: d.JustifyContent.center, textAlign: d.TEXT_ALIGN.CENTER, marginBottom: 4 },
                      a.default.createElement(u.default, { variant: d.TypographyVariant.H4 }, n("seedPhraseEnterMissingWords"))
                    ),
                    a.default.createElement(A.default, {
                      secretRecoveryPhrase: E,
                      confirmPhase: !0,
                      setInputValue: (e) => {
                        C(e), x(e);
                      },
                      inputValue: k,
                      indicesToCheck: v
                    }),
                    a.default.createElement(
                      "div",
                      { className: "recovery-phrase__footer__confirm" },
                      a.default.createElement(
                        l.default,
                        {
                          "data-testid": "recovery-phrase-confirm",
                          type: "primary",
                          large: !0,
                          className: "recovery-phrase__footer__confirm--button",
                          onClick: async () => {
                            await i((0, g.setSeedPhraseBackedUp)(!0)),
                              w({
                                category: y.MetaMetricsEventCategory.Onboarding,
                                event: y.MetaMetricsEventName.OnboardingWalletSecurityPhraseConfirmed
                              }),
                              t.push(f.ONBOARDING_COMPLETION_ROUTE);
                          },
                          disabled: !T
                        },
                        n("confirm")
                      )
                    )
                  );
                }
                T.propTypes = { secretRecoveryPhrase: i.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/recovery-phrase/confirm-recovery-phrase.js" }
    ],
    [
      5744,
      {
        "../../../components/ui/box": 5373,
        "../../../components/ui/chip": 5386,
        "../../../components/ui/chip/chip-with-input": 5384,
        "../../../components/ui/typography": 5506,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = f);
                var a = p(e("react")),
                  r = p(e("classnames")),
                  o = p(e("prop-types")),
                  s = p(e("../../../components/ui/chip")),
                  i = p(e("../../../components/ui/box")),
                  c = p(e("../../../components/ui/typography")),
                  l = e("../../../components/ui/chip/chip-with-input"),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../../helpers/constants/design-system");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f({
                  secretRecoveryPhrase: e,
                  phraseRevealed: t,
                  confirmPhase: n,
                  setInputValue: o,
                  inputValue: p,
                  indicesToCheck: f,
                  hiddenPhrase: m
                }) {
                  const g = (0, u.useI18nContext)(),
                    h = !1 === t;
                  return a.default.createElement(
                    i.default,
                    {
                      borderColor: d.BorderColor.borderMuted,
                      borderStyle: d.BorderStyle.solid,
                      padding: 4,
                      borderWidth: 1,
                      borderRadius: d.Size.MD,
                      display: d.DISPLAY.GRID,
                      marginBottom: 4,
                      className: "recovery-phrase__secret"
                    },
                    a.default.createElement(
                      "div",
                      {
                        "data-testid": "recovery-phrase-chips",
                        className: (0, r.default)("recovery-phrase__chips", { "recovery-phrase__chips--hidden": h })
                      },
                      e.map((e, t) =>
                        n && f && f.includes(t)
                          ? a.default.createElement(
                              "div",
                              { className: "recovery-phrase__chip-item", key: t },
                              a.default.createElement("div", { className: "recovery-phrase__chip-item__number" }, `${t + 1}.`),
                              a.default.createElement(l.ChipWithInput, {
                                dataTestId: `recovery-phrase-input-${t}`,
                                borderColor: d.BorderColor.primaryDefault,
                                className: "recovery-phrase__chip--with-input",
                                inputValue: p[t],
                                setInputValue: (e) => {
                                  o({ ...p, [t]: e });
                                }
                              })
                            )
                          : a.default.createElement(
                              "div",
                              { className: "recovery-phrase__chip-item", key: t },
                              a.default.createElement("div", { className: "recovery-phrase__chip-item__number" }, `${t + 1}.`),
                              a.default.createElement(
                                s.default,
                                {
                                  dataTestId: `recovery-phrase-chip-${t}`,
                                  className: "recovery-phrase__chip",
                                  borderColor: d.BorderColor.borderDefault
                                },
                                e
                              )
                            )
                      )
                    ),
                    h &&
                      a.default.createElement(
                        "div",
                        { className: "recovery-phrase__secret-blocker" },
                        !m &&
                          a.default.createElement(
                            a.default.Fragment,
                            null,
                            a.default.createElement("i", { className: "far fa-eye", color: "white" }),
                            a.default.createElement(
                              c.default,
                              {
                                variant: d.TypographyVariant.H6,
                                color: d.Color.overlayInverse,
                                className: "recovery-phrase__secret-blocker--text"
                              },
                              g("makeSureNoOneWatching")
                            )
                          )
                      )
                  );
                }
                f.propTypes = {
                  secretRecoveryPhrase: o.default.array,
                  phraseRevealed: o.default.bool,
                  confirmPhase: o.default.bool,
                  setInputValue: o.default.func,
                  inputValue: o.default.object,
                  indicesToCheck: o.default.array,
                  hiddenPhrase: o.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/recovery-phrase/recovery-phrase-chips.js" }
    ]
  ],
  [],
  {}
);
