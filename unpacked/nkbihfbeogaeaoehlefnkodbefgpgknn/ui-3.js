LavaPack.loadBundle(
  [
    [
      4116,
      {
        "../../../../shared/constants/gas": 3957,
        "../../../contexts/gasFee": 4747,
        "../../../contexts/transaction-modal": 4750,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/error-keys": 4772,
        "../../../helpers/constants/zendesk-url": 4781,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../../ui/box": 4607,
        "../../ui/error-message": 4639,
        "../../ui/popover": 4699,
        "../app-loading-spinner": 4039,
        "./edit-gas-item": 4118,
        "./network-statistics": 4123,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = v(e("react")),
                  a = e("../../../../shared/constants/gas"),
                  o = e("../../../hooks/useI18nContext"),
                  i = e("../../../contexts/transaction-modal"),
                  s = v(e("../../ui/box")),
                  l = v(e("../../ui/error-message")),
                  u = v(e("../../ui/popover")),
                  c = e("../../../helpers/constants/design-system"),
                  d = e("../../../helpers/constants/error-keys"),
                  p = e("../../../contexts/gasFee"),
                  f = v(e("../app-loading-spinner")),
                  m = v(e("../../../helpers/constants/zendesk-url")),
                  g = e("../../component-library"),
                  h = v(e("./edit-gas-item")),
                  y = v(e("./network-statistics"));
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = () => {
                  const { balanceError: e, editGasMode: t } = (0, p.useGasFeeContext)(),
                    n = (0, o.useI18nContext)(),
                    { closeAllModals: v, closeModal: b, currentModal: _, openModalCount: w } = (0, i.useTransactionModalContext)();
                  if ("editGasFee" !== _) return null;
                  let k = "editGasFeeModalTitle";
                  return (
                    t === a.EditGasModes.cancel
                      ? (k = "editCancellationGasFeeModalTitle")
                      : t === a.EditGasModes.speedUp && (k = "editSpeedUpEditGasFeeModalTitle"),
                    r.default.createElement(
                      u.default,
                      { title: n(k), onBack: 1 === w ? undefined : () => b(["editGasFee"]), onClose: v, className: "edit-gas-fee-popover" },
                      r.default.createElement(
                        r.default.Fragment,
                        null,
                        r.default.createElement(f.default, null),
                        r.default.createElement(
                          "div",
                          { className: "edit-gas-fee-popover__wrapper" },
                          r.default.createElement(
                            "div",
                            { className: "edit-gas-fee-popover__content" },
                            r.default.createElement(
                              s.default,
                              null,
                              e && r.default.createElement(l.default, { errorKey: d.INSUFFICIENT_FUNDS_ERROR_KEY }),
                              r.default.createElement(
                                "div",
                                { className: "edit-gas-fee-popover__content__header" },
                                r.default.createElement(
                                  "span",
                                  { className: "edit-gas-fee-popover__content__header-option" },
                                  n("gasOption")
                                ),
                                r.default.createElement(
                                  "span",
                                  { className: "edit-gas-fee-popover__content__header-time" },
                                  t !== a.EditGasModes.swaps && n("time")
                                ),
                                r.default.createElement("span", { className: "edit-gas-fee-popover__content__header-max-fee" }, n("maxFee"))
                              ),
                              (t === a.EditGasModes.cancel || t === a.EditGasModes.speedUp) &&
                                r.default.createElement(h.default, { priorityLevel: a.PriorityLevels.tenPercentIncreased }),
                              t === a.EditGasModes.modifyInPlace &&
                                r.default.createElement(h.default, { priorityLevel: a.PriorityLevels.low }),
                              r.default.createElement(h.default, { priorityLevel: a.PriorityLevels.medium }),
                              r.default.createElement(h.default, { priorityLevel: a.PriorityLevels.high }),
                              r.default.createElement("div", { className: "edit-gas-fee-popover__content__separator" }),
                              t === a.EditGasModes.modifyInPlace &&
                                r.default.createElement(h.default, { priorityLevel: a.PriorityLevels.dAppSuggested }),
                              r.default.createElement(h.default, { priorityLevel: a.PriorityLevels.custom })
                            ),
                            r.default.createElement(
                              s.default,
                              null,
                              r.default.createElement(y.default, null),
                              r.default.createElement(
                                g.Text,
                                {
                                  className: "edit-gas-fee-popover__know-more",
                                  align: "center",
                                  color: c.TextColor.textAlternative,
                                  tag: c.TextVariant.bodyMd,
                                  variant: c.TextVariant.bodySm,
                                  as: "h6"
                                },
                                n("learnMoreAboutGas", [
                                  r.default.createElement(
                                    "a",
                                    { key: "learnMoreLink", target: "_blank", rel: "noopener noreferrer", href: m.default.USER_GUIDE_GAS },
                                    n("learnMore")
                                  )
                                ])
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/edit-gas-fee-popover.js" }
    ],
    [
      4117,
      {
        "../../../../../shared/constants/gas": 3957,
        "../../../../contexts/gasFee": 4747,
        "../../../../contexts/transaction-modal": 4750,
        "../../../../helpers/constants/common": 4769,
        "../../../../helpers/constants/gas": 4773,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../hooks/useTransactionEventFragment": 4862,
        "../../../ui/info-tooltip": 4665,
        "../../../ui/loading-heartbeat": 4670,
        "../../user-preferenced-currency-display": 4378,
        "../edit-gas-tooltip/edit-gas-tooltip": 4121,
        "./useGasItemFeeDetails": 4120,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = b(e("classnames")),
                  a = b(e("prop-types")),
                  o = b(e("react")),
                  i = e("../../../../../shared/constants/gas"),
                  s = e("../../../../helpers/constants/gas"),
                  l = e("../../../../helpers/constants/common"),
                  u = e("../../../../helpers/utils/util"),
                  c = e("../../../../contexts/gasFee"),
                  d = e("../../../../hooks/useI18nContext"),
                  p = e("../../../../hooks/useTransactionEventFragment"),
                  f = e("../../../../contexts/transaction-modal"),
                  m = b(e("../../../ui/info-tooltip")),
                  g = b(e("../../../ui/loading-heartbeat")),
                  h = b(e("../../user-preferenced-currency-display")),
                  y = b(e("../edit-gas-tooltip/edit-gas-tooltip")),
                  v = e("./useGasItemFeeDetails");
                function b(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const _ = ({ priorityLevel: e }) => {
                  const {
                      editGasMode: t,
                      estimateUsed: n,
                      gasLimit: a,
                      updateTransactionToTenPercentIncreasedGasFee: b,
                      updateTransactionUsingDAPPSuggestedValues: _,
                      updateTransactionUsingEstimate: w,
                      transaction: k
                    } = (0, c.useGasFeeContext)(),
                    { updateTransactionEventFragment: T } = (0, p.useTransactionEventFragment)(),
                    x = (0, d.useI18nContext)(),
                    { closeModal: E, openModal: C } = (0, f.useTransactionModalContext)(),
                    { dappSuggestedGasFees: M } = k,
                    {
                      estimateGreaterThanGasUse: P,
                      hexMaximumTransactionFee: O,
                      maxFeePerGas: S,
                      maxPriorityFeePerGas: j,
                      minWaitTime: N
                    } = (0, v.useGasItemFeeDetails)(e);
                  if (!(e !== i.PriorityLevels.dAppSuggested || (null != M && M.maxFeePerGas) || (null != M && M.gasPrice))) return null;
                  const { title: I, icon: D } = ((e, t) => {
                    let n = e,
                      r = e;
                    return (
                      e === i.PriorityLevels.dAppSuggested
                        ? (r = "dappSuggestedShortLabel")
                        : e === i.PriorityLevels.dappSuggestedHigh
                        ? (r = "dappSuggestedHighShortLabel")
                        : e === i.PriorityLevels.tenPercentIncreased
                        ? ((n = null), (r = "tenPercentIncreased"))
                        : e === i.PriorityLevels.high && t === i.EditGasModes.swaps && ((n = "swapSuggested"), (r = "swapSuggested")),
                      { title: r, icon: n }
                    );
                  })(e, t);
                  return o.default.createElement(
                    "button",
                    {
                      className: (0, r.default)("edit-gas-item", { "edit-gas-item--selected": e === n, "edit-gas-item--disabled": P }),
                      onClick: () => {
                        e === i.PriorityLevels.custom
                          ? (T({ properties: { gas_edit_attempted: "advanced" } }), C("advancedGasFee"))
                          : (T({ properties: { gas_edit_type: "basic" } }),
                            E(["editGasFee"]),
                            e === i.PriorityLevels.tenPercentIncreased ? b() : e === i.PriorityLevels.dAppSuggested ? _() : w(e));
                      },
                      "aria-label": e,
                      autoFocus: e === n,
                      disabled: P,
                      "data-testid": `edit-gas-fee-item-${e}`
                    },
                    o.default.createElement(
                      "span",
                      { className: "edit-gas-item__name" },
                      D &&
                        o.default.createElement(
                          "span",
                          { className: `edit-gas-item__icon edit-gas-item__icon-${e}` },
                          s.PRIORITY_LEVEL_ICON_MAP[D]
                        ),
                      x(I)
                    ),
                    o.default.createElement(
                      "span",
                      { className: `edit-gas-item__time-estimate edit-gas-item__time-estimate-${e}` },
                      t !== i.EditGasModes.swaps && (N ? (0, u.toHumanReadableTime)(x, N) : "--")
                    ),
                    o.default.createElement(
                      "span",
                      { className: `edit-gas-item__fee-estimate edit-gas-item__fee-estimate-${e}` },
                      O
                        ? o.default.createElement(
                            "div",
                            { className: "edit-gas-item__maxfee" },
                            o.default.createElement(g.default, {
                              backgroundColor: e === n ? "var(--color-background-alternative)" : "var(--color-background-default)",
                              estimateUsed: e
                            }),
                            o.default.createElement(h.default, { key: "editGasSubTextFeeAmount", type: l.PRIMARY, value: O })
                          )
                        : "--"
                    ),
                    o.default.createElement(
                      "span",
                      { className: "edit-gas-item__tooltip", "data-testid": "gas-tooltip" },
                      o.default.createElement(m.default, {
                        contentText: o.default.createElement(y.default, {
                          t: x,
                          priorityLevel: e,
                          maxFeePerGas: S,
                          maxPriorityFeePerGas: j,
                          editGasMode: t,
                          gasLimit: a,
                          transaction: k,
                          estimateGreaterThanGasUse: P
                        }),
                        position: "top"
                      })
                    )
                  );
                };
                _.propTypes = { priorityLevel: a.default.string };
                n.default = _;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/edit-gas-item/edit-gas-item.js" }
    ],
    [
      4118,
      { "./edit-gas-item": 4117 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./edit-gas-item")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/edit-gas-item/index.js" }
    ],
    [
      4119,
      {
        "../../../../../shared/constants/gas": 3957,
        "../../../../ducks/metamask/metamask": 4763,
        "../../../../store/actions": 5204,
        "bignumber.js": 2283,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.useCustomTimeEstimate = void 0);
                var r,
                  a = e("react"),
                  o = e("react-redux"),
                  i = (r = e("bignumber.js")) && r.__esModule ? r : { default: r },
                  s = e("../../../../../shared/constants/gas"),
                  l = e("../../../../ducks/metamask/metamask"),
                  u = e("../../../../store/actions");
                n.useCustomTimeEstimate = ({ gasFeeEstimates: e, maxFeePerGas: t, maxPriorityFeePerGas: n }) => {
                  const r = (0, o.useSelector)(l.getGasEstimateType),
                    c = (0, o.useSelector)(l.getIsGasEstimatesLoading),
                    [d, p] = (0, a.useState)(null),
                    f = c || r !== s.GasEstimateTypes.feeMarket || !n,
                    m = (null == e ? void 0 : e.low) && Number(n) < Number(e.low.suggestedMaxPriorityFeePerGas);
                  if (
                    ((0, a.useEffect)(() => {
                      !c &&
                        r === s.GasEstimateTypes.feeMarket &&
                        n &&
                        m &&
                        (0, u.getGasFeeTimeEstimate)(new i.default(n, 10).toString(10), new i.default(t, 10).toString(10)).then((e) => {
                          p(e);
                        });
                    }, [r, m, c, t, n, f]),
                    f)
                  )
                    return {};
                  const { low: g = {}, medium: h = {}, high: y = {} } = e;
                  let v = "";
                  return (
                    (v =
                      m && d && "unknown" !== d && "unknown" !== (null == d ? void 0 : d.upperTimeBound)
                        ? Number(null == d ? void 0 : d.upperTimeBound)
                        : Number(n) >= Number(h.suggestedMaxPriorityFeePerGas)
                        ? y.minWaitTimeEstimate
                        : g.maxWaitTimeEstimate),
                    { waitTimeEstimate: v }
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/edit-gas-item/useCustomTimeEstimate.js" }
    ],
    [
      4120,
      {
        "../../../../../shared/constants/gas": 3957,
        "../../../../../shared/modules/conversion.utils": 3988,
        "../../../../../shared/modules/gas.utils": 3992,
        "../../../../contexts/gasFee": 4747,
        "../../../../helpers/utils/gas": 4797,
        "../../../../selectors": 5197,
        "./useCustomTimeEstimate": 4119,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.useGasItemFeeDetails = void 0);
                var r = e("react"),
                  a = e("react-redux"),
                  o = e("../../../../../shared/constants/gas"),
                  i = e("../../../../../shared/modules/gas.utils"),
                  s = e("../../../../helpers/utils/gas"),
                  l = e("../../../../selectors"),
                  u = e("../../../../contexts/gasFee"),
                  c = e("../../../../../shared/modules/conversion.utils"),
                  d = e("./useCustomTimeEstimate");
                n.useGasItemFeeDetails = (e) => {
                  const {
                      editGasMode: t,
                      estimateUsed: n,
                      gasFeeEstimates: p,
                      gasLimit: f,
                      maxFeePerGas: m,
                      maxPriorityFeePerGas: g,
                      transaction: h
                    } = (0, u.useGasFeeContext)(),
                    [y, v] = (0, r.useState)(!1),
                    b = (0, a.useSelector)(l.getAdvancedGasFeeValues);
                  let _, w, k;
                  const { dappSuggestedGasFees: T } = h;
                  if (null != p && p[e]) (_ = p[e].suggestedMaxFeePerGas), (w = p[e].suggestedMaxPriorityFeePerGas);
                  else if (e === o.PriorityLevels.dAppSuggested && T)
                    (_ = (0, c.hexWEIToDecGWEI)(T.maxFeePerGas || T.gasPrice)), (w = (0, c.hexWEIToDecGWEI)(T.maxPriorityFeePerGas || _));
                  else if (e === o.PriorityLevels.custom)
                    n === o.PriorityLevels.custom
                      ? ((_ = m), (w = g))
                      : b && t !== o.EditGasModes.swaps && ((_ = b.maxBaseFee), (w = b.priorityFee));
                  else if (e === o.PriorityLevels.tenPercentIncreased && h.previousGas) {
                    var x, E;
                    (_ = (0, c.hexWEIToDecGWEI)(
                      (0, s.addTenPercentAndRound)(null === (x = h.previousGas) || void 0 === x ? void 0 : x.maxFeePerGas)
                    )),
                      (w = (0, c.hexWEIToDecGWEI)(
                        (0, s.addTenPercentAndRound)(null === (E = h.previousGas) || void 0 === E ? void 0 : E.maxPriorityFeePerGas)
                      ));
                  }
                  const { waitTimeEstimate: C } = (0, d.useCustomTimeEstimate)({
                    gasFeeEstimates: p,
                    maxFeePerGas: _,
                    maxPriorityFeePerGas: w
                  });
                  k = p[e]
                    ? e === o.PriorityLevels.high
                      ? null == p
                        ? void 0
                        : p.high.minWaitTimeEstimate
                      : null == p
                      ? void 0
                      : p.low.maxWaitTimeEstimate
                    : C;
                  const M = _
                    ? (0, i.getMaximumGasTotalInHexWei)({ gasLimit: (0, c.decimalToHex)(f), maxFeePerGas: (0, c.decGWEIToHexWEI)(_) })
                    : null;
                  return (
                    (0, r.useEffect)(() => {
                      if (
                        !(
                          (t !== o.EditGasModes.cancel && t !== o.EditGasModes.speedUp) ||
                          (e !== o.PriorityLevels.medium && e !== o.PriorityLevels.high)
                        )
                      ) {
                        const t = !(0, s.gasEstimateGreaterThanGasUsedPlusTenPercent)(h.previousGas || h.txParams, p, e);
                        v(t);
                      }
                    }, [t, p, e, h]),
                    { estimateGreaterThanGasUse: y, maxFeePerGas: _, maxPriorityFeePerGas: w, minWaitTime: k, hexMaximumTransactionFee: M }
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/edit-gas-item/useGasItemFeeDetails.js" }
    ],
    [
      4121,
      {
        "../../../../../shared/constants/gas": 3957,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/gas": 4797,
        "../../../../helpers/utils/util": 4812,
        "../../../component-library": 4453,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("../../../../../shared/constants/gas"),
                  s = e("../../../../helpers/constants/design-system"),
                  l = e("../../../../helpers/utils/gas"),
                  u = e("../../../../helpers/utils/util"),
                  c = e("../../../component-library");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const p = ({
                  editGasMode: e,
                  estimateGreaterThanGasUse: t,
                  gasLimit: n,
                  priorityLevel: r,
                  maxFeePerGas: o,
                  maxPriorityFeePerGas: d,
                  transaction: p,
                  t: f
                }) => {
                  const m = (0, a.useMemo)(() => {
                    switch (r) {
                      case i.PriorityLevels.low:
                        return f("lowGasSettingToolTipMessage", [
                          a.default.createElement("span", { key: r }, a.default.createElement("b", null, f("low")))
                        ]);
                      case i.PriorityLevels.medium:
                        return t
                          ? f("disabledGasOptionToolTipMessage", [
                              a.default.createElement("span", { key: `disabled-priority-level-${r}` }, f(r))
                            ])
                          : f("mediumGasSettingToolTipMessage", [
                              a.default.createElement("span", { key: r }, a.default.createElement("b", null, f("medium")))
                            ]);
                      case i.PriorityLevels.high:
                        return t
                          ? f("disabledGasOptionToolTipMessage", [
                              a.default.createElement("span", { key: `disabled-priority-level-${r}` }, f(r))
                            ])
                          : e === i.EditGasModes.swaps
                          ? f("swapSuggestedGasSettingToolTipMessage")
                          : f("highGasSettingToolTipMessage", [
                              a.default.createElement("span", { key: r }, a.default.createElement("b", null, f("high")))
                            ]);
                      case i.PriorityLevels.custom:
                        return f("customGasSettingToolTipMessage", [
                          a.default.createElement("span", { key: r }, a.default.createElement("b", null, f("custom")))
                        ]);
                      case i.PriorityLevels.dAppSuggested:
                        return null != p && p.origin
                          ? f("dappSuggestedGasSettingToolTipMessage", [
                              a.default.createElement("span", { key: null == p ? void 0 : p.origin }, null == p ? void 0 : p.origin)
                            ])
                          : null;
                      default:
                        return "";
                    }
                  }, [e, t, r, p, f]);
                  let g;
                  r === i.PriorityLevels.low
                    ? (g = f("curveLowGasEstimate"))
                    : r === i.PriorityLevels.medium
                    ? (g = f("curveMediumGasEstimate"))
                    : r === i.PriorityLevels.high && (g = f("curveHighGasEstimate"));
                  const h = (0, l.isMetamaskSuggestedGasEstimate)(r) && !(r === i.PriorityLevels.high && e === i.EditGasModes.swaps) && !t;
                  return a.default.createElement(
                    "div",
                    { className: "edit-gas-tooltip__container" },
                    h ? a.default.createElement("img", { alt: g, src: `./images/curve-${r}.svg` }) : null,
                    m &&
                      a.default.createElement(
                        "div",
                        { className: "edit-gas-tooltip__container__message" },
                        a.default.createElement(c.Text, { variant: s.TextVariant.bodySm, as: "h6" }, m)
                      ),
                    r === i.PriorityLevels.custom || t
                      ? null
                      : a.default.createElement(
                          "div",
                          { className: "edit-gas-tooltip__container__values" },
                          a.default.createElement(
                            "div",
                            null,
                            a.default.createElement(
                              c.Text,
                              {
                                variant: s.TextVariant.bodySm,
                                as: "h6",
                                fontWeight: s.FontWeight.Bold,
                                className: "edit-gas-tooltip__container__label"
                              },
                              f("maxBaseFee")
                            ),
                            o &&
                              a.default.createElement(
                                c.Text,
                                {
                                  variant: s.TextVariant.bodySm,
                                  as: "h6",
                                  color: s.TextColor.textAlternative,
                                  className: "edit-gas-tooltip__container__value"
                                },
                                (0, u.roundToDecimalPlacesRemovingExtraZeroes)(o, 4)
                              )
                          ),
                          a.default.createElement(
                            "div",
                            null,
                            a.default.createElement(
                              c.Text,
                              {
                                variant: s.TextVariant.bodySm,
                                as: "h6",
                                fontWeight: s.FontWeight.Bold,
                                className: "edit-gas-tooltip__container__label"
                              },
                              f("priorityFeeProperCase")
                            ),
                            d &&
                              a.default.createElement(
                                c.Text,
                                {
                                  variant: s.TextVariant.bodySm,
                                  as: "h6",
                                  color: s.TextColor.textAlternative,
                                  className: "edit-gas-tooltip__container__value"
                                },
                                (0, u.roundToDecimalPlacesRemovingExtraZeroes)(d, 4)
                              )
                          ),
                          a.default.createElement(
                            "div",
                            null,
                            a.default.createElement(
                              c.Text,
                              {
                                variant: s.TextVariant.bodySm,
                                as: "h6",
                                fontWeight: s.FontWeight.Bold,
                                className: "edit-gas-tooltip__container__label"
                              },
                              f("gasLimit")
                            ),
                            n &&
                              a.default.createElement(
                                c.Text,
                                {
                                  variant: s.TextVariant.bodySm,
                                  as: "h6",
                                  color: s.TextColor.textAlternative,
                                  className: "edit-gas-tooltip__container__value"
                                },
                                (0, u.roundToDecimalPlacesRemovingExtraZeroes)(n, 4)
                              )
                          )
                        )
                  );
                };
                p.propTypes = {
                  estimateGreaterThanGasUse: o.default.bool,
                  priorityLevel: o.default.string,
                  maxFeePerGas: o.default.oneOfType([o.default.number, o.default.string]),
                  maxPriorityFeePerGas: o.default.oneOfType([o.default.number, o.default.string]),
                  t: o.default.func,
                  editGasMode: o.default.string,
                  gasLimit: o.default.number,
                  transaction: o.default.object
                };
                n.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/edit-gas-tooltip/edit-gas-tooltip.js" }
    ],
    [
      4122,
      { "./edit-gas-fee-popover": 4116 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./edit-gas-fee-popover")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/index.js" }
    ],
    [
      4123,
      { "./network-statistics": 4124 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./network-statistics")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/network-statistics/index.js" }
    ],
    [
      4124,
      {
        "../../../../contexts/gasFee": 4747,
        "../../../../contexts/i18n": 4748,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/gas": 4797,
        "../../../../helpers/utils/util": 4812,
        "../../../component-library": 4453,
        "./status-slider": 4125,
        "./tooltips": 4127,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = e("../../../../helpers/constants/design-system"),
                  i = e("../../../../helpers/utils/util"),
                  s = e("../../../../helpers/utils/gas"),
                  l = e("../../../../contexts/i18n"),
                  u = e("../../../../contexts/gasFee"),
                  c = e("../../../component-library"),
                  d = e("./tooltips"),
                  p = (r = e("./status-slider")) && r.__esModule ? r : { default: r };
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (f = function (e) {
                    return e ? n : t;
                  })(e);
                }
                n.default = () => {
                  const e = (0, a.useContext)(l.I18nContext),
                    { gasFeeEstimates: t } = (0, u.useGasFeeContext)(),
                    n = (0, s.formatGasFeeOrFeeRange)(null == t ? void 0 : t.estimatedBaseFee, { precision: 0 }),
                    r = (0, s.formatGasFeeOrFeeRange)(null == t ? void 0 : t.latestPriorityFeeRange, { precision: [1, 0] }),
                    f = null == t ? void 0 : t.networkCongestion;
                  return a.default.createElement(
                    "div",
                    { className: "network-statistics" },
                    a.default.createElement(
                      c.Text,
                      {
                        color: o.TextColor.textAlternative,
                        fontWeight: o.FontWeight.Bold,
                        marginTop: 3,
                        marginBottom: 3,
                        variant: o.TextVariant.bodyXs,
                        as: "h6"
                      },
                      e("networkStatus")
                    ),
                    a.default.createElement(
                      "div",
                      { className: "network-statistics__info" },
                      (0, i.isNullish)(n)
                        ? null
                        : a.default.createElement(
                            "div",
                            { className: "network-statistics__field", "data-testid": "formatted-latest-base-fee" },
                            a.default.createElement(
                              d.BaseFeeTooltip,
                              null,
                              a.default.createElement("span", { className: "network-statistics__field-data" }, n),
                              a.default.createElement("span", { className: "network-statistics__field-label" }, e("baseFee"))
                            )
                          ),
                      (0, i.isNullish)(r)
                        ? null
                        : a.default.createElement(
                            "div",
                            { className: "network-statistics__field", "data-testid": "formatted-latest-priority-fee-range" },
                            a.default.createElement(
                              d.PriorityFeeTooltip,
                              null,
                              a.default.createElement("span", { className: "network-statistics__field-data" }, r),
                              a.default.createElement("span", { className: "network-statistics__field-label" }, e("priorityFee"))
                            )
                          ),
                      (0, i.isNullish)(f)
                        ? null
                        : a.default.createElement(
                            "div",
                            { className: "network-statistics__field" },
                            a.default.createElement(p.default, null)
                          )
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/network-statistics/network-statistics.js" }
    ],
    [
      4125,
      { "./status-slider": 4126 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./status-slider")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/network-statistics/status-slider/index.js" }
    ],
    [
      4126,
      {
        "../../../../../../shared/constants/gas": 3957,
        "../../../../../contexts/gasFee": 4747,
        "../../../../../hooks/useI18nContext": 4837,
        "../tooltips": 4127,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("../../../../../../shared/constants/gas"),
                  i = e("../../../../../contexts/gasFee"),
                  s = e("../../../../../hooks/useI18nContext"),
                  l = e("../tooltips");
                const u = [
                  "#037DD6",
                  "#1876C8",
                  "#2D70BA",
                  "#4369AB",
                  "#57629E",
                  "#6A5D92",
                  "#805683",
                  "#9A4D71",
                  "#B44561",
                  "#C54055",
                  "#D73A49"
                ];
                n.default = () => {
                  const e = (0, s.useI18nContext)(),
                    { gasFeeEstimates: t } = (0, i.useGasFeeContext)(),
                    n = ((e) => {
                      const t = e ?? 0.5,
                        n = Math.round(10 * t),
                        r = u[n],
                        a = 10 * n;
                      return t >= o.NetworkCongestionThresholds.busy
                        ? { statusLabel: "busy", tooltipLabel: "highLowercase", color: r, sliderTickValue: a }
                        : t >= o.NetworkCongestionThresholds.stable
                        ? { statusLabel: "stable", tooltipLabel: "stableLowercase", color: r, sliderTickValue: a }
                        : { statusLabel: "notBusy", tooltipLabel: "lowLowercase", color: r, sliderTickValue: a };
                    })(t.networkCongestion);
                  return a.default.createElement(
                    l.NetworkStabilityTooltip,
                    { color: n.color, tooltipLabel: n.tooltipLabel },
                    a.default.createElement(
                      "div",
                      { className: "status-slider" },
                      a.default.createElement(
                        "div",
                        { className: "status-slider__arrow-container" },
                        a.default.createElement(
                          "div",
                          {
                            className: "status-slider__arrow-border",
                            style: { marginLeft: `${n.sliderTickValue}%` },
                            "data-testid": "status-slider-arrow-border"
                          },
                          a.default.createElement("div", {
                            className: "status-slider__arrow",
                            style: { borderTopColor: n.color },
                            "data-testid": "status-slider-arrow"
                          })
                        )
                      ),
                      a.default.createElement("div", { className: "status-slider__line" }),
                      a.default.createElement(
                        "div",
                        { className: "status-slider__label", style: { color: n.color }, "data-testid": "status-slider-label" },
                        e(n.statusLabel)
                      )
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/network-statistics/status-slider/status-slider.js" }
    ],
    [
      4127,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../ui/box": 4607,
        "../../../ui/tooltip": 4736,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.PriorityFeeTooltip = n.NetworkStabilityTooltip = n.BaseFeeTooltip = void 0);
                var r = u(e("react")),
                  a = u(e("prop-types")),
                  o = e("../../../../hooks/useI18nContext"),
                  i = u(e("../../../ui/box")),
                  s = u(e("../../../ui/tooltip")),
                  l = e("../../../../helpers/constants/design-system");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = ({ children: e, html: t, title: n }) =>
                  r.default.createElement(
                    s.default,
                    { position: "top", html: t, title: n },
                    r.default.createElement(i.default, { display: l.DISPLAY.FLEX, flexDirection: l.FLEX_DIRECTION.COLUMN }, e)
                  );
                c.propTypes = { children: a.default.node.isRequired, html: a.default.node, title: a.default.string };
                const d = ({ children: e }) => {
                  const t = (0, o.useI18nContext)();
                  return r.default.createElement(
                    c,
                    {
                      html: t("networkStatusBaseFeeTooltip", [
                        r.default.createElement(
                          "strong",
                          { key: "base_fee_medium_estimate", className: "network-status__tooltip-label" },
                          t("medium")
                        ),
                        r.default.createElement(
                          "strong",
                          { key: "base_fee_high_estimate", className: "network-status__tooltip-label" },
                          t("high")
                        )
                      ])
                    },
                    e
                  );
                };
                (n.BaseFeeTooltip = d), (d.propTypes = { children: a.default.node.isRequired });
                const p = ({ children: e }) => {
                  const t = (0, o.useI18nContext)();
                  return r.default.createElement(c, { title: t("networkStatusPriorityFeeTooltip") }, e);
                };
                (n.PriorityFeeTooltip = p), (p.propTypes = { children: a.default.node.isRequired });
                const f = ({ children: e, color: t, tooltipLabel: n }) => {
                  const a = (0, o.useI18nContext)();
                  return r.default.createElement(
                    c,
                    {
                      html: a("networkStatusStabilityFeeTooltip", [
                        r.default.createElement(
                          "strong",
                          { key: "network-status__tooltip", className: "network-status__tooltip-label", style: { color: t } },
                          a(n)
                        )
                      ])
                    },
                    e
                  );
                };
                (n.NetworkStabilityTooltip = f),
                  (f.propTypes = {
                    children: a.default.node.isRequired,
                    color: a.default.string.isRequired,
                    tooltipLabel: a.default.string.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-fee-popover/network-statistics/tooltips.js" }
    ],
    [
      4128,
      {
        "../../../../shared/constants/gas": 3957,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../../shared/modules/transaction.utils": 4004,
        "../../../contexts/i18n": 4748,
        "../../../hooks/gasFeeInput/useGasFeeInputs": 4818,
        "../../../hooks/useIncrementedGasFees": 4838,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/loading-heartbeat": 4670,
        "../edit-gas-display": 4113,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = b);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = h(e("prop-types")),
                  o = e("react-redux"),
                  i = e("../../../hooks/gasFeeInput/useGasFeeInputs"),
                  s = e("../../../../shared/modules/transaction.utils"),
                  l = e("../../../../shared/constants/gas"),
                  u = e("../../component-library"),
                  c = h(e("../edit-gas-display")),
                  d = e("../../../contexts/i18n"),
                  p = e("../../../store/actions"),
                  f = h(e("../../ui/loading-heartbeat")),
                  m = e("../../../hooks/useIncrementedGasFees"),
                  g = e("../../../../shared/modules/conversion.utils");
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
                function v() {
                  return (
                    (v = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    v.apply(this, arguments)
                  );
                }
                function b({
                  popoverTitle: e = "",
                  confirmButtonText: t = "",
                  editGasDisplayProps: n = {},
                  transaction: a,
                  mode: h,
                  onClose: y,
                  minimumGasLimit: b = l.GAS_LIMITS.SIMPLE
                }) {
                  const _ = (0, r.useContext)(d.I18nContext),
                    w = (0, o.useDispatch)(),
                    [k, T] = (0, r.useState)(!1),
                    x = (0, g.hexToDecimal)(b),
                    E = (0, m.useIncrementedGasFees)(a);
                  let C = a;
                  (h !== l.EditGasModes.speedUp && h !== l.EditGasModes.cancel) ||
                    (C = { ...a, userFeeLevel: l.CUSTOM_GAS_ESTIMATE, txParams: { ...a.txParams, ...E } });
                  const {
                      estimatedMinimumNative: M,
                      gasPrice: P,
                      setGasPrice: O,
                      gasLimit: S,
                      setGasLimit: j,
                      properGasLimit: N,
                      estimateToUse: I,
                      hasGasErrors: D,
                      gasErrors: R,
                      onManualChange: A,
                      balanceError: B
                    } = (0, i.useGasFeeInputs)(l.GasRecommendations.medium, C, b, h),
                    F = I === l.CUSTOM_GAS_ESTIMATE || (0, s.txParamsAreDappSuggested)(C),
                    W = (0, r.useCallback)(() => {
                      y ? y() : w((0, p.hideModal)());
                    }, [y, w]),
                    $ = (0, r.useCallback)(async () => {
                      (C && h) || W();
                      const e = {
                          gas: (0, g.decimalToHex)(S),
                          gasLimit: (0, g.decimalToHex)(S),
                          estimateUsed: I,
                          gasPrice: (0, g.decGWEIToHexWEI)(P)
                        },
                        t = { ...C.txParams },
                        n = {
                          ...C,
                          userEditedGasLimit: S !== Number(a.originalGasEstimate),
                          userFeeLevel: I || l.CUSTOM_GAS_ESTIMATE,
                          txParams: { ...t, ...e }
                        };
                      switch (h) {
                        case l.EditGasModes.cancel:
                          w((0, p.createCancelTransaction)(C.id, e));
                          break;
                        case l.EditGasModes.speedUp:
                          w((0, p.createSpeedUpTransaction)(C.id, e));
                          break;
                        case l.EditGasModes.modifyInPlace:
                          (e.userEditedGasLimit = n.userEditedGasLimit),
                            (e.userFeeLevel = n.userFeeLevel),
                            w((0, p.showLoadingIndication)()),
                            await w((0, p.updateTransactionGasFees)(n.id, e)),
                            w((0, p.hideLoadingIndication)());
                      }
                      W();
                    }, [C, h, w, W, S, P, a.originalGasEstimate, I]);
                  let L = _("editGasTitle");
                  e
                    ? (L = e)
                    : h === l.EditGasModes.speedUp
                    ? (L = _("speedUpPopoverTitle"))
                    : h === l.EditGasModes.cancel && (L = _("cancelPopoverTitle"));
                  const q = t || _("save");
                  return r.default.createElement(
                    u.Modal,
                    { isOpen: !0, onClose: W },
                    r.default.createElement(u.ModalOverlay, null),
                    r.default.createElement(
                      u.ModalContent,
                      { autoFocus: !1, className: "edit-gas-popover" },
                      r.default.createElement(u.ModalHeader, { onClose: W, marginBottom: 4 }, L),
                      r.default.createElement(
                        "div",
                        { className: "edit-gas-popover__edit-gas-display" },
                        r.default.createElement(f.default, null),
                        r.default.createElement(
                          c.default,
                          v(
                            {
                              dappSuggestedGasFeeAcknowledged: k,
                              setDappSuggestedGasFeeAcknowledged: T,
                              estimatedMinimumNative: M,
                              gasPrice: P,
                              setGasPrice: O,
                              gasLimit: S,
                              setGasLimit: j,
                              properGasLimit: N,
                              mode: h,
                              transaction: C,
                              onManualChange: A,
                              minimumGasLimit: x,
                              balanceError: B,
                              txParamsHaveBeenCustomized: F,
                              gasErrors: R
                            },
                            n
                          )
                        )
                      ),
                      r.default.createElement(
                        u.Button,
                        {
                          block: !0,
                          variant: u.ButtonVariant.Primary,
                          size: u.ButtonSize.LG,
                          marginTop: 4,
                          onClick: $,
                          disabled: D || B || !F
                        },
                        q
                      )
                    )
                  );
                }
                b.propTypes = {
                  popoverTitle: a.default.string,
                  editGasDisplayProps: a.default.object,
                  confirmButtonText: a.default.string,
                  onClose: a.default.func,
                  transaction: a.default.object,
                  mode: a.default.oneOf(Object.values(l.EditGasModes)),
                  minimumGasLimit: a.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-popover/edit-gas-popover.component.js" }
    ],
    [
      4129,
      { "./edit-gas-popover.component": 4128 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./edit-gas-popover.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/edit-gas-popover/index.js" }
    ],
    [
      4130,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
        "../../../ui/box": 4607,
        "../../../ui/info-tooltip/info-tooltip": 4667,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = d(e("react")),
                  a = e("react-redux"),
                  o = e("../../../../helpers/constants/design-system"),
                  i = e("../../../../hooks/useI18nContext"),
                  s = e("../../../../selectors"),
                  l = d(e("../../../ui/box")),
                  u = d(e("../../../ui/info-tooltip/info-tooltip")),
                  c = e("../../../component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = () => {
                  const e = (0, i.useI18nContext)(),
                    t = (0, a.useSelector)(s.getIsMainnet);
                  return r.default.createElement(
                    l.default,
                    { display: "flex" },
                    r.default.createElement(l.default, { marginRight: 1 }, e("gas")),
                    r.default.createElement(
                      "span",
                      { className: "gas-details-item-title__estimate" },
                      "(",
                      e("transactionDetailGasInfoV2"),
                      ")"
                    ),
                    r.default.createElement(u.default, {
                      contentText: r.default.createElement(
                        r.default.Fragment,
                        null,
                        r.default.createElement(
                          c.Text,
                          { variant: o.TextVariant.bodySm, as: "h6" },
                          e("transactionDetailGasTooltipIntro", [t ? e("networkNameEthereum") : ""])
                        ),
                        r.default.createElement(
                          c.Text,
                          { variant: o.TextVariant.bodySm, as: "h6" },
                          e("transactionDetailGasTooltipExplanation")
                        ),
                        r.default.createElement(
                          c.Text,
                          { variant: o.TextVariant.bodySm, as: "h6" },
                          r.default.createElement(
                            "a",
                            {
                              href: "https://community.metamask.io/t/what-is-gas-why-do-transactions-take-so-long/3172",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            },
                            e("transactionDetailGasTooltipConversion")
                          )
                        )
                      ),
                      position: "bottom"
                    })
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/gas-details-item/gas-details-item-title/gas-details-item-title.js" }
    ],
    [
      4131,
      { "./gas-details-item-title": 4130 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./gas-details-item-title")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/gas-details-item/gas-details-item-title/index.js" }
    ],
    [
      4132,
      {
        "../../../../shared/constants/gas": 3957,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../contexts/gasFee": 4747,
        "../../../ducks/send": 4765,
        "../../../helpers/constants/common": 4769,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useDraftTransactionWithTxParams": 4833,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../ui/box": 4607,
        "../../ui/loading-heartbeat": 4670,
        "../gas-timing/gas-timing.component": 4134,
        "../transaction-detail-item/transaction-detail-item.component": 4364,
        "../user-preferenced-currency-display": 4378,
        "./gas-details-item-title": 4131,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = k(e("react")),
                  a = k(e("prop-types")),
                  o = k(e("classnames")),
                  i = e("react-redux"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../../helpers/constants/common"),
                  u = e("../../../selectors"),
                  c = e("../../../ducks/send"),
                  d = e("../../../contexts/gasFee"),
                  p = e("../../../hooks/useI18nContext"),
                  f = k(e("../../ui/box")),
                  m = k(e("../../ui/loading-heartbeat")),
                  g = k(e("../gas-timing/gas-timing.component")),
                  h = k(e("../transaction-detail-item/transaction-detail-item.component")),
                  y = k(e("../user-preferenced-currency-display")),
                  v = e("../../../../shared/modules/conversion.utils"),
                  b = e("../../../hooks/useDraftTransactionWithTxParams"),
                  _ = e("../../../../shared/constants/gas"),
                  w = k(e("./gas-details-item-title"));
                function k(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const T = ({ "data-testid": e, userAcknowledgedGasMissing: t = !1 }) => {
                  var n, a;
                  const k = (0, p.useI18nContext)(),
                    T = (0, i.useSelector)(c.getCurrentDraftTransaction),
                    x = (0, b.useDraftTransactionWithTxParams)(),
                    { hexMinimumTransactionFee: E, hexMaximumTransactionFee: C } = (0, i.useSelector)((e) =>
                      (0, u.transactionFeeSelector)(e, x)
                    ),
                    {
                      estimateUsed: M,
                      hasSimulationError: P,
                      maximumCostInHexWei: O,
                      minimumCostInHexWei: S,
                      maxPriorityFeePerGas: j,
                      maxFeePerGas: N
                    } = (0, d.useGasFeeContext)(),
                    { useNativeCurrencyAsPrimaryCurrency: I } = (0, i.useSelector)(u.getPreferences),
                    D = (0, i.useSelector)(u.getUseCurrencyRateCheck);
                  if (P && !t) return null;
                  const R = (
                      j ?? (0, v.hexWEIToDecGWEI)((null === (n = x.txParams) || void 0 === n ? void 0 : n.maxPriorityFeePerGas) ?? "0x0")
                    ).toString(),
                    A = (
                      N ?? (0, v.hexWEIToDecGWEI)((null === (a = x.txParams) || void 0 === a ? void 0 : a.maxFeePerGas) ?? "0x0")
                    ).toString();
                  return r.default.createElement(h.default, {
                    key: "gas-details-item",
                    "data-testid": e,
                    detailTitle: r.default.createElement(w.default, null),
                    detailTitleColor: s.TextColor.textDefault,
                    detailText:
                      D &&
                      0 === Object.keys(T).length &&
                      r.default.createElement(
                        "div",
                        { className: "gas-details-item__currency-container" },
                        r.default.createElement(m.default, { estimateUsed: M }),
                        r.default.createElement(y.default, { type: l.SECONDARY, value: S, hideLabel: Boolean(I) })
                      ),
                    detailTotal: r.default.createElement(
                      "div",
                      { className: "gas-details-item__currency-container" },
                      r.default.createElement(m.default, { estimateUsed: M }),
                      r.default.createElement(y.default, { type: l.PRIMARY, value: S || E, hideLabel: !I })
                    ),
                    subText: r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(
                        f.default,
                        {
                          key: "editGasSubTextFeeLabel",
                          display: "inline-flex",
                          className: (0, o.default)("gas-details-item__gasfee-label", {
                            "gas-details-item__gas-fee-warning": M === _.PriorityLevels.high || M === _.PriorityLevels.dappSuggestedHigh
                          })
                        },
                        r.default.createElement(m.default, { estimateUsed: M }),
                        r.default.createElement(
                          f.default,
                          { marginRight: 1 },
                          r.default.createElement(
                            "strong",
                            null,
                            (M === _.PriorityLevels.high || M === _.PriorityLevels.dappSuggestedHigh) && "⚠ ",
                            k("editGasSubTextFeeLabel")
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { key: "editGasSubTextFeeValue", className: "gas-details-item__currency-container" },
                          r.default.createElement(m.default, { estimateUsed: M }),
                          r.default.createElement(y.default, {
                            key: "editGasSubTextFeeAmount",
                            type: l.PRIMARY,
                            value: O || C,
                            hideLabel: !I
                          })
                        )
                      )
                    ),
                    subTitle: r.default.createElement(g.default, { maxPriorityFeePerGas: R, maxFeePerGas: A })
                  });
                };
                T.propTypes = { "data-testid": a.default.string, userAcknowledgedGasMissing: a.default.bool };
                n.default = T;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/gas-details-item/gas-details-item.js" }
    ],
    [
      4133,
      { "./gas-details-item": 4132 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./gas-details-item")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/gas-details-item/index.js" }
    ],
    [
      4134,
      {
        "../../../../shared/constants/gas": 3957,
        "../../../contexts/gasFee": 4747,
        "../../../contexts/i18n": 4748,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/gas": 4773,
        "../../../hooks/usePrevious": 4845,
        "../../../store/actions": 5204,
        "../../ui/typography/typography": 4741,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = _);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = y(e("prop-types")),
                  i = y(e("classnames")),
                  s = y(e("bignumber.js")),
                  l = e("../../../../shared/constants/gas"),
                  u = e("../../../hooks/usePrevious"),
                  c = e("../../../contexts/i18n"),
                  d = e("../../../contexts/gasFee"),
                  p = e("../../../ducks/metamask/metamask"),
                  f = y(e("../../ui/typography/typography")),
                  m = e("../../../helpers/constants/design-system"),
                  g = e("../../../store/actions"),
                  h = e("../../../helpers/constants/gas");
                function y(e) {
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
                const b = (e = 1, t) => {
                  const n = Math.ceil(e / 1e3);
                  return n <= 90 ? t("gasTimingSeconds", [n]) : t("gasTimingMinutes", [Math.ceil(n / 60)]);
                };
                function _({ maxFeePerGas: e = 0, maxPriorityFeePerGas: t = 0, gasWarnings: n }) {
                  const o = (0, a.useSelector)(p.getGasEstimateType),
                    y = (0, a.useSelector)(p.getGasFeeEstimates),
                    v = (0, a.useSelector)(p.getIsGasEstimatesLoading),
                    [_, w] = (0, r.useState)(null),
                    k = (0, r.useContext)(c.I18nContext),
                    { estimateUsed: T } = (0, d.useGasFeeContext)(),
                    x = (null == y ? void 0 : y.low) && Number(t) < Number(y.low.suggestedMaxPriorityFeePerGas),
                    E = (0, u.usePrevious)(e),
                    C = (0, u.usePrevious)(t),
                    M = (0, u.usePrevious)(x);
                  if (
                    ((0, r.useEffect)(() => {
                      const n = t,
                        r = e;
                      (x || (n && n !== C) || (r && r !== E)) &&
                        (0, g.getGasFeeTimeEstimate)(new s.default(n, 10).toString(10), new s.default(r, 10).toString(10)).then((a) => {
                          e === r && t === n && w(a);
                        }),
                        !1 !== x && !0 === M && w(null);
                    }, [t, e, x, E, C, M]),
                    (null == n ? void 0 : n.maxPriorityFee) === h.GAS_FORM_ERRORS.MAX_PRIORITY_FEE_TOO_LOW ||
                      (null == n ? void 0 : n.maxFee) === h.GAS_FORM_ERRORS.MAX_FEE_TOO_LOW)
                  )
                    return r.default.createElement(
                      f.default,
                      {
                        variant: m.TypographyVariant.H7,
                        fontWeight: m.FONT_WEIGHT.BOLD,
                        className: (0, i.default)("gas-timing", "gas-timing--negative")
                      },
                      k("editGasTooLow")
                    );
                  if (v || o !== l.GasEstimateTypes.feeMarket) return null;
                  const { low: P = {}, medium: O = {}, high: S = {} } = y;
                  let j = "",
                    N = "positive";
                  return (
                    Number(t) >= Number(O.suggestedMaxPriorityFeePerGas)
                      ? (j =
                          Number(t) < Number(S.suggestedMaxPriorityFeePerGas)
                            ? k("gasTimingPositive", [b(P.maxWaitTimeEstimate, k)])
                            : k("gasTimingVeryPositive", [b(S.minWaitTimeEstimate, k)]))
                      : ("low" === T && (N = "negative"),
                        x
                          ? _ && "unknown" !== _ && "unknown" !== (null == _ ? void 0 : _.upperTimeBound)
                            ? (j = k("gasTimingNegative", [b(Number(null == _ ? void 0 : _.upperTimeBound), k)]))
                            : ((j = k("editGasTooLow")), (N = "negative"))
                          : (j = k("gasTimingNegative", [b(P.maxWaitTimeEstimate, k)]))),
                    r.default.createElement(
                      f.default,
                      { variant: m.TypographyVariant.H7, className: (0, i.default)("gas-timing", { [`gas-timing--${N}`]: N }) },
                      j
                    )
                  );
                }
                _.propTypes = { maxPriorityFeePerGas: o.default.string, maxFeePerGas: o.default.string, gasWarnings: o.default.object };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/gas-timing/gas-timing.component.js" }
    ],
    [
      4135,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = g);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("classnames")),
                  i = e("../../../contexts/i18n"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../../contexts/metametrics"),
                  u = e("../../../../shared/constants/metametrics"),
                  c = e("../../component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const f = 14,
                  m = f - 1;
                function g({ buttonText: e, onLongPressed: t }) {
                  const n = (0, r.useContext)(i.I18nContext),
                    a = (0, r.useRef)(!1),
                    [d, p] = (0, r.useState)(!1),
                    [g, h] = (0, r.useState)(!1),
                    y = (0, r.useContext)(l.MetaMetricsContext),
                    v = (e) => {
                      e.stopPropagation();
                    },
                    b = () => {
                      a.current && p(!0);
                    },
                    _ = (0, r.useCallback)(
                      (e) => {
                        y({
                          category: u.MetaMetricsEventCategory.Keys,
                          event: u.MetaMetricsEventName.SrpHoldToRevealCompleted,
                          properties: { key_type: u.MetaMetricsEventKeyType.Srp }
                        }),
                          y({
                            category: u.MetaMetricsEventCategory.Keys,
                            event: u.MetaMetricsEventName.SrpRevealViewed,
                            properties: { key_type: u.MetaMetricsEventKeyType.Srp }
                          }),
                          t(),
                          h(!0),
                          v(e);
                      },
                      [t, y]
                    ),
                    w = () => {
                      p(!1), h(!1);
                    },
                    k = (0, r.useCallback)(
                      () =>
                        r.default.createElement(
                          c.Box,
                          {
                            className: (0, o.default)("hold-to-reveal-button__absolute-fill", {
                              "hold-to-reveal-button__absolute-fill": d,
                              "hold-to-reveal-button__main-icon-show": g
                            })
                          },
                          r.default.createElement(
                            c.Box,
                            { className: "hold-to-reveal-button__absolute-fill" },
                            r.default.createElement(
                              "svg",
                              { className: "hold-to-reveal-button__circle-svg" },
                              r.default.createElement("circle", {
                                className: "hold-to-reveal-button__circle-background",
                                cx: f,
                                cy: f,
                                r: m
                              })
                            )
                          ),
                          r.default.createElement(
                            c.Box,
                            { className: "hold-to-reveal-button__absolute-fill" },
                            r.default.createElement(
                              "svg",
                              { className: "hold-to-reveal-button__circle-svg" },
                              r.default.createElement("circle", {
                                "aria-label": n("holdToRevealLockedLabel"),
                                onTransitionEnd: b,
                                className: "hold-to-reveal-button__circle-foreground",
                                cx: f,
                                cy: f,
                                r: m
                              })
                            )
                          ),
                          r.default.createElement(
                            c.Box,
                            {
                              display: s.Display.Flex,
                              alignItems: s.AlignItems.center,
                              justifyContent: s.JustifyContent.center,
                              className: "hold-to-reveal-button__lock-icon-container"
                            },
                            r.default.createElement("img", {
                              src: "images/lock-icon.svg",
                              alt: n("padlock"),
                              className: "hold-to-reveal-button__lock-icon"
                            })
                          )
                        ),
                      [d, g, n]
                    ),
                    T = (0, r.useCallback)(
                      () =>
                        d
                          ? r.default.createElement(
                              "div",
                              {
                                className: (0, o.default)("hold-to-reveal-button__absolute-fill", {
                                  "hold-to-reveal-button__unlock-icon-hide": g
                                }),
                                onAnimationEnd: w
                              },
                              r.default.createElement(
                                "div",
                                {
                                  onAnimationEnd: v,
                                  className: "hold-to-reveal-button__absolute-fill hold-to-reveal-button__circle-static-outer-container"
                                },
                                r.default.createElement(
                                  "svg",
                                  { className: "hold-to-reveal-button__circle-svg" },
                                  r.default.createElement("circle", {
                                    className: "hold-to-reveal-button__circle-static-outer",
                                    cx: 14,
                                    cy: 14,
                                    r: 14
                                  })
                                )
                              ),
                              r.default.createElement(
                                "div",
                                {
                                  onAnimationEnd: v,
                                  className: "hold-to-reveal-button__absolute-fill hold-to-reveal-button__circle-static-inner-container"
                                },
                                r.default.createElement(
                                  "svg",
                                  { className: "hold-to-reveal-button__circle-svg" },
                                  r.default.createElement("circle", {
                                    className: "hold-to-reveal-button__circle-static-inner",
                                    cx: 14,
                                    cy: 14,
                                    r: 12
                                  })
                                )
                              ),
                              r.default.createElement(
                                "div",
                                {
                                  "aria-label": n("holdToRevealUnlockedLabel"),
                                  className: "hold-to-reveal-button__unlock-icon-container",
                                  onAnimationEnd: _
                                },
                                r.default.createElement("img", {
                                  src: "images/unlock-icon.svg",
                                  alt: n("padlock"),
                                  className: "hold-to-reveal-button__unlock-icon"
                                })
                              )
                            )
                          : null,
                      [d, g, _, n]
                    );
                  return r.default.createElement(
                    c.Button,
                    {
                      onPointerDown: () => {
                        (a.current = !0),
                          y({
                            category: u.MetaMetricsEventCategory.Keys,
                            event: u.MetaMetricsEventName.SrpHoldToRevealClickStarted,
                            properties: { key_type: u.MetaMetricsEventKeyType.Srp }
                          });
                      },
                      onPointerUp: () => {
                        a.current = !1;
                      },
                      className: "hold-to-reveal-button__button-hold",
                      textProps: { display: s.Display.Flex, alignItems: s.AlignItems.center }
                    },
                    r.default.createElement(c.Box, { className: "hold-to-reveal-button__icon-container", marginRight: 2 }, k(), T()),
                    e
                  );
                }
                g.propTypes = { buttonText: a.default.string.isRequired, onLongPressed: a.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/hold-to-reveal-button/hold-to-reveal-button.js" }
    ],
    [
      4136,
      { "./hold-to-reveal-button": 4135 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./hold-to-reveal-button")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/hold-to-reveal-button/index.js" }
    ],
    [
      4137,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../../ui/button": 4611,
        "../../ui/check-box": 4617,
        "../../ui/tooltip": 4736,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = d(e("classnames")),
                  o = d(e("prop-types")),
                  i = d(e("../../ui/button")),
                  s = d(e("../../ui/check-box")),
                  l = d(e("../../ui/tooltip")),
                  u = e("../../component-library"),
                  c = e("../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const f = ({
                  acceptText: e,
                  checkboxText: t,
                  checkboxTooltipText: n,
                  classNames: o = [],
                  descriptionText: d,
                  ignoreText: p,
                  infoText: f,
                  onAccept: m,
                  onIgnore: g
                }) => {
                  const [h, y] = (0, r.useState)(!1),
                    v =
                      t &&
                      r.default.createElement(s.default, {
                        id: "homeNotification_checkbox",
                        checked: h,
                        className: "home-notification__checkbox",
                        onClick: () => y((e) => !e)
                      });
                  return r.default.createElement(
                    "div",
                    { className: (0, a.default)("home-notification", ...o) },
                    r.default.createElement(
                      "div",
                      { className: "home-notification__content" },
                      r.default.createElement(
                        "div",
                        { className: "home-notification__content-container" },
                        r.default.createElement("div", { className: "home-notification__text" }, d)
                      ),
                      f
                        ? r.default.createElement(
                            l.default,
                            { position: "top", title: f, wrapperClassName: "home-notification__tooltip-wrapper" },
                            r.default.createElement(u.Icon, { name: u.IconName.Info, color: c.IconColor.iconDefault })
                          )
                        : null
                    ),
                    r.default.createElement(
                      "div",
                      { className: "home-notification__buttons" },
                      m && e
                        ? r.default.createElement(
                            i.default,
                            { type: "primary", className: "home-notification__accept-button", onClick: m },
                            e
                          )
                        : null,
                      g && p
                        ? r.default.createElement(
                            i.default,
                            { type: "secondary", className: "home-notification__ignore-button", onClick: () => g(h) },
                            p
                          )
                        : null,
                      t
                        ? r.default.createElement(
                            "div",
                            { className: "home-notification__checkbox-wrapper" },
                            n
                              ? r.default.createElement(
                                  l.default,
                                  { position: "top", title: n, wrapperClassName: "home-notification__checkbox-label-tooltip" },
                                  v
                                )
                              : v,
                            r.default.createElement(
                              "label",
                              { className: "home-notification__checkbox-label", htmlFor: "homeNotification_checkbox" },
                              t
                            )
                          )
                        : null
                    )
                  );
                };
                f.propTypes = {
                  acceptText: o.default.node,
                  checkboxText: o.default.node,
                  checkboxTooltipText: o.default.node,
                  classNames: o.default.array,
                  descriptionText: o.default.node.isRequired,
                  ignoreText: o.default.node,
                  infoText: o.default.node,
                  onAccept: o.default.func,
                  onIgnore: o.default.func
                };
                n.default = f;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/home-notification/home-notification.component.js" }
    ],
    [
      4138,
      { "./home-notification.component": 4137 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./home-notification.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/home-notification/index.js" }
    ],
    [
      4139,
      { "./token-list.container": 4143 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (r = e("./token-list.container")) && r.__esModule ? r : { default: r };
                n.default = a.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/import-token/token-list/index.js" }
    ],
    [
      4140,
      { "./token-list-placeholder.component": 4141 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (r = e("./token-list-placeholder.component")) && r.__esModule ? r : { default: r };
                n.default = a.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/import-token/token-list/token-list-placeholder/index.js" }
    ],
    [
      4141,
      {
        "../../../../../helpers/constants/design-system": 4771,
        "../../../../../helpers/constants/zendesk-url": 4781,
        "../../../../component-library": 4453,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a,
                  o,
                  i = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  s = d(e("prop-types")),
                  l = d(e("../../../../../helpers/constants/zendesk-url")),
                  u = e("../../../../component-library"),
                  c = e("../../../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                class f extends i.Component {
                  render() {
                    return i.default.createElement(
                      u.Box,
                      {
                        display: c.Display.Flex,
                        alignItems: c.AlignItems.center,
                        flexDirection: c.FlexDirection.Column,
                        textAlign: c.TextAlign.Center
                      },
                      i.default.createElement(u.Text, { color: c.TextColor.textAlternative }, this.context.t("addAcquiredTokens")),
                      i.default.createElement(
                        u.ButtonLink,
                        { href: l.default.ADD_CUSTOM_TOKENS, externalLink: !0 },
                        this.context.t("learnMoreUpperCase")
                      )
                    );
                  }
                }
                (n.default = f),
                  (r = f),
                  (a = "contextTypes"),
                  (o = { t: s.default.func }),
                  (a = (function (e) {
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
                  })(a)) in r
                    ? Object.defineProperty(r, a, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                    : (r[a] = o);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/import-token/token-list/token-list-placeholder/token-list-placeholder.component.js" }
    ],
    [
      4142,
      { "../../../../helpers/utils/util": 4812, "./token-list-placeholder": 4140, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("classnames")),
                  i = e("../../../../helpers/utils/util"),
                  s = l(e("./token-list-placeholder"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c(e, t, n) {
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
                class d extends r.Component {
                  render() {
                    const { results: e = [], selectedTokens: t = {}, onToggleToken: n, tokens: a = [] } = this.props;
                    return 0 === e.length
                      ? r.default.createElement(s.default, null)
                      : r.default.createElement(
                          "div",
                          { className: "token-list" },
                          r.default.createElement("div", { className: "token-list__title" }, this.context.t("searchResults")),
                          r.default.createElement(
                            "div",
                            { className: "token-list__tokens-container" },
                            Array(6)
                              .fill(undefined)
                              .map((s, l) => {
                                var u, c, d;
                                const { symbol: p, name: f, address: m } = e[l] || {},
                                  g = (0, i.checkExistingAddresses)(m, a),
                                  h = () => !g && n(e[l]);
                                return (
                                  Boolean((null === (u = e[l]) || void 0 === u ? void 0 : u.iconUrl) || p || f) &&
                                  r.default.createElement(
                                    "div",
                                    {
                                      className: (0, o.default)("token-list__token", {
                                        "token-list__token--selected": t[m],
                                        "token-list__token--disabled": g
                                      }),
                                      onClick: h,
                                      onKeyPress: (e) => "Enter" === e.key && h(),
                                      key: l,
                                      tabIndex: "0"
                                    },
                                    r.default.createElement("div", {
                                      className: "token-list__token-icon",
                                      style: {
                                        backgroundImage:
                                          (null === (c = e[l]) || void 0 === c ? void 0 : c.iconUrl) &&
                                          `url(${null === (d = e[l]) || void 0 === d ? void 0 : d.iconUrl})`
                                      }
                                    }),
                                    r.default.createElement(
                                      "div",
                                      { className: "token-list__token-data" },
                                      r.default.createElement("span", { className: "token-list__token-name" }, `${f} (${p})`)
                                    )
                                  )
                                );
                              })
                          )
                        );
                  }
                }
                (n.default = d),
                  c(d, "contextTypes", { t: a.default.func }),
                  c(d, "propTypes", {
                    tokens: a.default.array,
                    results: a.default.array,
                    selectedTokens: a.default.object,
                    onToggleToken: a.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/import-token/token-list/token-list.component.js" }
    ],
    [
      4143,
      { "./token-list.component": 4142, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = (r = e("./token-list.component")) && r.__esModule ? r : { default: r };
                n.default = (0, a.connect)((e) => {
                  const { tokens: t } = e.metamask;
                  return { tokens: t };
                })(o.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/import-token/token-list/token-list.container.js" }
    ],
    [
      4144,
      { "./token-search.component": 4145 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (r = e("./token-search.component")) && r.__esModule ? r : { default: r };
                n.default = a.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/import-token/token-search/index.js" }
    ],
    [
      4145,
      {
        "../../../../../shared/modules/string-utils": 4002,
        "../../../../helpers/constants/design-system": 4771,
        "../../../component-library": 4453,
        "fuse.js": 2821,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = u(e("prop-types")),
                  o = u(e("fuse.js")),
                  i = e("../../../../../shared/modules/string-utils"),
                  s = e("../../../component-library"),
                  l = e("../../../../helpers/constants/design-system");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
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
                class p extends r.Component {
                  constructor(e) {
                    super(e), d(this, "state", { searchQuery: "" });
                    const { tokenList: t } = this.props;
                    (this.tokenList = Object.values(t)),
                      (this.tokenSearchFuse = new o.default(this.tokenList, {
                        shouldSort: !0,
                        threshold: 0.45,
                        location: 0,
                        distance: 100,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,
                        keys: [
                          { name: "name", weight: 0.5 },
                          { name: "symbol", weight: 0.5 }
                        ]
                      }));
                  }
                  handleSearch(e) {
                    this.setState({ searchQuery: e });
                    const t = this.tokenSearchFuse.search(e),
                      n = [...this.tokenList.filter((t) => t.address && e && (0, i.isEqualCaseInsensitive)(t.address, e)), ...t];
                    this.props.onSearch({ searchQuery: e, results: n });
                  }
                  render() {
                    const { error: e } = this.props,
                      { searchQuery: t } = this.state;
                    return r.default.createElement(s.TextFieldSearch, {
                      placeholder: this.context.t("search"),
                      value: t,
                      onChange: (e) => this.handleSearch(e.target.value),
                      error: e,
                      autoFocus: !0,
                      autoComplete: !1,
                      width: l.BlockSize.Full
                    });
                  }
                }
                (n.default = p),
                  d(p, "contextTypes", { t: a.default.func }),
                  d(p, "defaultProps", { error: null }),
                  d(p, "propTypes", { onSearch: a.default.func, error: a.default.string, tokenList: a.default.object });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/import-token/token-search/token-search.component.js" }
    ],
    [
      4146,
      {
        "../../../../shared/constants/network": 3963,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "./network-toggle": 4147,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = c(e("prop-types")),
                  o = e("../../../contexts/i18n"),
                  i = e("../../component-library"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../../../shared/constants/network"),
                  u = c(e("./network-toggle"));
                function c(e) {
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
                const p = ({
                  wrapperRef: e,
                  incomingTransactionsPreferences: t,
                  allNetworks: n,
                  setIncomingTransactionsPreferences: a
                }) => {
                  const l = (0, r.useContext)(o.I18nContext),
                    [c, d] = (0, r.useState)(f(t, n));
                  (0, r.useEffect)(() => {
                    d(f(t, n));
                  }, [t, n]);
                  const p = (e, t) => {
                    a(e, t);
                  };
                  return r.default.createElement(
                    i.Box,
                    { ref: e, className: "mm-incoming-transaction-toggle" },
                    r.default.createElement(i.Text, { variant: s.TextVariant.bodyMd }, l("showIncomingTransactions")),
                    r.default.createElement(
                      i.Text,
                      { variant: s.TextVariant.bodySm, color: s.TextColor.textAlternative },
                      l("showIncomingTransactionsExplainer")
                    ),
                    Object.keys(c).map((e, t) =>
                      r.default.createElement(u.default, { key: t, chainId: e, networkPreferences: c[e], toggleSingleNetwork: p })
                    )
                  );
                };
                n.default = p;
                function f(e, t) {
                  const n = {};
                  return (
                    Object.keys(t).forEach((r) => {
                      var a;
                      const { chainId: o } = t[r];
                      n[o] = {
                        isShowIncomingTransactions: e[o],
                        isATestNetwork: l.TEST_CHAINS.includes(o),
                        label: t[r].nickname,
                        imageUrl: null === (a = t[r].rpcPrefs) || void 0 === a ? void 0 : a.imageUrl
                      };
                    }),
                    n
                  );
                }
                p.propTypes = {
                  wrapperRef: a.default.object,
                  incomingTransactionsPreferences: a.default.object.isRequired,
                  allNetworks: a.default.array.isRequired,
                  setIncomingTransactionsPreferences: a.default.func.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/incoming-trasaction-toggle/incoming-transaction-toggle.tsx" }
    ],
    [
      4147,
      {
        "../../../../shared/constants/network": 3963,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../../ui/toggle-button": 4729,
        "../../ui/tooltip": 4736,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = p(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = e("../../../../shared/constants/network"),
                  i = e("../../../contexts/i18n"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../component-library"),
                  u = p(e("../../ui/toggle-button")),
                  c = p(e("../../ui/tooltip"));
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const f = ({ networkPreferences: e, toggleSingleNetwork: t, chainId: n }) => {
                  var r;
                  const d = (0, a.useContext)(i.I18nContext),
                    { isShowIncomingTransactions: p } = e,
                    f = e.label,
                    m =
                      null === o.ETHERSCAN_SUPPORTED_NETWORKS || void 0 === o.ETHERSCAN_SUPPORTED_NETWORKS
                        ? void 0
                        : o.ETHERSCAN_SUPPORTED_NETWORKS[n],
                    g = null == m ? void 0 : m.domain,
                    h =
                      (null == g || null === (r = g.charAt(0)) || void 0 === r ? void 0 : r.toUpperCase()) +
                      (null == g ? void 0 : g.slice(1));
                  return a.default.createElement(
                    l.Box,
                    {
                      marginTop: 6,
                      marginBottom: 6,
                      display: s.Display.Flex,
                      flexDirection: s.FlexDirection.Row,
                      gap: 4,
                      justifyContent: s.JustifyContent.spaceBetween,
                      "data-testid": `network-toggle-${n}`,
                      className: "network-toggle-wrapper"
                    },
                    a.default.createElement(
                      l.Box,
                      {
                        backgroundColor: s.BackgroundColor.transparent,
                        display: s.Display.Flex,
                        alignItems: s.AlignItems.center,
                        width: s.BlockSize.Full,
                        gap: 4,
                        className: "network-toggle-wrapper__overflow-container"
                      },
                      a.default.createElement(l.AvatarNetwork, { size: l.AvatarNetworkSize.Sm, src: e.imageUrl, name: f }),
                      a.default.createElement(
                        l.Box,
                        {
                          display: s.Display.Flex,
                          flexDirection: s.FlexDirection.Column,
                          className: "network-toggle-wrapper__overflow-container"
                        },
                        f.length > 20
                          ? a.default.createElement(
                              c.default,
                              { position: "bottom" },
                              a.default.createElement(
                                l.Text,
                                {
                                  color: s.TextColor.textDefault,
                                  backgroundColor: s.BackgroundColor.transparent,
                                  variant: s.TextVariant.bodyMd,
                                  ellipsis: !0
                                },
                                f
                              )
                            )
                          : a.default.createElement(
                              l.Text,
                              {
                                color: s.TextColor.textDefault,
                                backgroundColor: s.BackgroundColor.transparent,
                                variant: s.TextVariant.bodyMd,
                                ellipsis: !0
                              },
                              f
                            ),
                        a.default.createElement(
                          l.Text,
                          {
                            color: s.TextColor.primaryDefault,
                            backgroundColor: s.BackgroundColor.transparent,
                            variant: s.TextVariant.bodySm,
                            ellipsis: !0
                          },
                          g &&
                            a.default.createElement(
                              "a",
                              { key: `network_${g}_link`, href: `https://${g}`, rel: "noreferrer", target: "_blank" },
                              h
                            )
                        )
                      )
                    ),
                    a.default.createElement(
                      l.Box,
                      { marginLeft: "auto" },
                      a.default.createElement(u.default, { value: p, onToggle: (e) => t(n, !e), offLabel: d("off"), onLabel: d("on") })
                    )
                  );
                };
                n.default = f;
                f.propTypes = {
                  chainId: r.default.string.isRequired,
                  networkPreferences: r.default.object.isRequired,
                  toggleSingleNetwork: r.default.func.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/incoming-trasaction-toggle/network-toggle.tsx" }
    ],
    [
      4148,
      { "./ledger-instruction-field": 4149 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./ledger-instruction-field")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/ledger-instruction-field/index.js" }
    ],
    [
      4149,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../../shared/constants/hardware-wallets": 3958,
        "../../../ducks/app/app": 4755,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = v);
                var r,
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  i = e("react-redux"),
                  s = e("../../../../app/scripts/lib/util"),
                  l = e("../../../../shared/constants/app"),
                  u = e("../../../../shared/constants/hardware-wallets"),
                  c = e("../../../ducks/app/app"),
                  d = e("../../../ducks/metamask/metamask"),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../hooks/useI18nContext"),
                  m = e("../../../store/actions"),
                  g = e("../../component-library");
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const y = (e, t = !0, n = p.TextColor.textDefault) => t && o.default.createElement(g.Text, { color: n, as: "h6" }, e);
                function v({ showDataInstruction: e }) {
                  const t = (0, f.useI18nContext)(),
                    n = (0, i.useDispatch)(),
                    r = (0, i.useSelector)(c.getLedgerWebHidConnectedStatus),
                    a = (0, i.useSelector)(d.getLedgerTransportType),
                    h = (0, i.useSelector)(c.getLedgerTransportStatus),
                    v = (0, s.getEnvironmentType)() === l.ENVIRONMENT_TYPE_FULLSCREEN;
                  (0, o.useEffect)(() => {
                    (async () => {
                      if (
                        a === u.LedgerTransportTypes.webhid &&
                        r === u.WebHIDConnectedStatuses.connected &&
                        h === u.HardwareTransportStates.none
                      )
                        try {
                          const e = await (0, m.attemptLedgerTransportCreation)();
                          n(
                            (0, c.setLedgerTransportStatus)(
                              e ? u.HardwareTransportStates.verified : u.HardwareTransportStates.unknownFailure
                            )
                          );
                        } catch (e) {
                          e.message.match("Failed to open the device")
                            ? n((0, c.setLedgerTransportStatus)(u.HardwareTransportStates.deviceOpenFailure))
                            : e.message.match("the device is already open")
                            ? n((0, c.setLedgerTransportStatus)(u.HardwareTransportStates.verified))
                            : n((0, c.setLedgerTransportStatus)(u.HardwareTransportStates.unknownFailure));
                        }
                    })(),
                      (async () => {
                        if (a === u.LedgerTransportTypes.webhid && r !== u.WebHIDConnectedStatuses.connected) {
                          var e;
                          const t = await (null === (e = window.navigator) || void 0 === e || null === (e = e.hid) || void 0 === e
                              ? void 0
                              : e.getDevices()),
                            r = null == t ? void 0 : t.some((e) => e.vendorId === Number(u.LEDGER_USB_VENDOR_ID));
                          n(
                            (0, c.setLedgerWebHidConnectedStatus)(
                              r ? u.WebHIDConnectedStatuses.connected : u.WebHIDConnectedStatuses.notConnected
                            )
                          );
                        }
                      })();
                  }, [n, a, r, h]),
                    (0, o.useEffect)(
                      () => () => {
                        n((0, c.setLedgerTransportStatus)(u.HardwareTransportStates.none));
                      },
                      [n]
                    );
                  const b = a === u.LedgerTransportTypes.webhid;
                  return o.default.createElement(
                    "div",
                    null,
                    o.default.createElement(
                      "div",
                      { className: "confirm-detail-row" },
                      o.default.createElement(
                        g.BannerAlert,
                        { severity: p.SEVERITIES.INFO },
                        o.default.createElement(
                          "div",
                          { className: "ledger-live-dialog" },
                          y(t("ledgerConnectionInstructionHeader")),
                          y(`• ${t("ledgerConnectionInstructionStepThree")}`),
                          y(`• ${t("ledgerConnectionInstructionStepFour")}`, e),
                          y(
                            o.default.createElement(
                              "span",
                              null,
                              o.default.createElement(
                                g.ButtonLink,
                                {
                                  textAlign: p.TextAlign.Left,
                                  onClick: async () => {
                                    v ? window.location.reload() : global.platform.openExtensionInBrowser(null, null, !0);
                                  }
                                },
                                t("ledgerConnectionInstructionCloseOtherApps")
                              )
                            ),
                            h === u.HardwareTransportStates.deviceOpenFailure
                          ),
                          y(
                            o.default.createElement(
                              "span",
                              null,
                              o.default.createElement(
                                g.ButtonLink,
                                {
                                  textAlign: p.TextAlign.Left,
                                  onClick: async () => {
                                    if (v) {
                                      const e = (
                                        await window.navigator.hid.requestDevice({ filters: [{ vendorId: u.LEDGER_USB_VENDOR_ID }] })
                                      ).some((e) => e.vendorId === Number(u.LEDGER_USB_VENDOR_ID));
                                      n(
                                        (0, c.setLedgerWebHidConnectedStatus)({
                                          webHidConnectedStatus: e
                                            ? u.WebHIDConnectedStatuses.connected
                                            : u.WebHIDConnectedStatuses.notConnected
                                        })
                                      );
                                    } else global.platform.openExtensionInBrowser(null, null, !0);
                                  }
                                },
                                t(v ? "clickToConnectLedgerViaWebHID" : "openFullScreenForLedgerWebHid")
                              )
                            ),
                            b && r === u.WebHIDConnectedStatuses.notConnected,
                            p.TextColor.warningDefault
                          )
                        )
                      )
                    )
                  );
                }
                v.propTypes = { showDataInstruction: a.default.bool };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/ledger-instruction-field/ledger-instruction-field.js" }
    ],
    [
      4150,
      { "./loading-network-screen.container": 4152 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./loading-network-screen.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/loading-network-screen/index.js" }
    ],
    [
      4151,
      {
        "../../../../shared/constants/network": 3963,
        "../../../../shared/constants/time": 3972,
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../../ui/box/box": 4606,
        "../../ui/loading-screen": 4673,
        "../../ui/popover/popover.component": 4700,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = p(e("prop-types")),
                  o = p(e("../../ui/loading-screen")),
                  i = e("../../../../shared/constants/time"),
                  s = e("../../../../shared/constants/network"),
                  l = p(e("../../ui/popover/popover.component")),
                  u = e("../../component-library"),
                  c = e("../../../helpers/constants/design-system"),
                  d = p(e("../../ui/box/box"));
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
                function m(e, t, n) {
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
                class g extends r.PureComponent {
                  constructor(...e) {
                    super(...e),
                      m(this, "state", { showErrorScreen: !1 }),
                      m(this, "componentDidMount", () => {
                        this.cancelCallTimeout = setTimeout(this.cancelCall, this.props.cancelTime || 15 * i.SECOND);
                      }),
                      m(this, "getConnectingLabel", function (e) {
                        if (e) return e;
                        const { providerConfig: t, providerId: n } = this.props,
                          r = t.type,
                          { t: a } = this.context;
                        switch (r) {
                          case s.NETWORK_TYPES.MAINNET:
                            return a("connectingToMainnet");
                          case s.NETWORK_TYPES.GOERLI:
                            return a("connectingToGoerli");
                          case s.NETWORK_TYPES.SEPOLIA:
                            return a("connectingToSepolia");
                          case s.NETWORK_TYPES.LINEA_GOERLI:
                            return a("connectingToLineaGoerli");
                          case s.NETWORK_TYPES.LINEA_MAINNET:
                            return a("connectingToLineaMainnet");
                          default:
                            return a("connectingTo", [n]);
                        }
                      }),
                      m(this, "renderConnectionFailureNotification", (e, t = !1) => {
                        const { showNetworkDropdown: n, setProviderArgs: a, setProviderType: o } = this.props;
                        return r.default.createElement(
                          l.default,
                          {
                            onClose: () => {
                              window.clearTimeout(this.cancelCallTimeout), this.setState({ showErrorScreen: !1 });
                            },
                            centerTitle: !0,
                            title: r.default.createElement(u.Icon, {
                              name: u.IconName.Danger,
                              size: u.IconSize.Xl,
                              color: c.IconColor.warningDefault
                            })
                          },
                          r.default.createElement(
                            u.Text,
                            { variant: c.TextVariant.bodyLgMedium, textAlign: c.TextAlign.Center, margin: [0, 4, 4, 4] },
                            e
                          ),
                          r.default.createElement(
                            d.default,
                            { display: c.DISPLAY.FLEX, padding: 4, gap: 2 },
                            r.default.createElement(
                              u.ButtonSecondary,
                              {
                                onClick: () => {
                                  window.clearTimeout(this.cancelCallTimeout), this.setState({ showErrorScreen: !1 }), n();
                                },
                                variant: c.TextVariant.bodySm,
                                block: !0
                              },
                              this.context.t("switchNetworks")
                            ),
                            t
                              ? r.default.createElement(
                                  u.ButtonPrimary,
                                  {
                                    onClick: () => {
                                      this.setState({ showErrorScreen: !1 }),
                                        o(...a),
                                        window.clearTimeout(this.cancelCallTimeout),
                                        (this.cancelCallTimeout = setTimeout(this.cancelCall, this.props.cancelTime || 15 * i.SECOND));
                                    },
                                    variant: c.TextVariant.bodySm,
                                    block: !0
                                  },
                                  this.context.t("tryAgain")
                                )
                              : null
                          )
                        );
                      }),
                      m(this, "renderDeprecatedRpcUrlWarning", () =>
                        this.renderConnectionFailureNotification(this.context.t("currentRpcUrlDeprecated"), !1)
                      ),
                      m(this, "renderErrorScreenContent", () => {
                        const { providerConfig: e } = this.props;
                        return this.renderConnectionFailureNotification(this.context.t("networkSwitchConnectionError", [e.nickname]), !0);
                      }),
                      m(this, "cancelCall", () => {
                        const { isNetworkLoading: e } = this.props;
                        e && this.setState({ showErrorScreen: !0 });
                      }),
                      m(this, "componentDidUpdate", (e) => {
                        const { providerConfig: t } = this.props,
                          { providerConfig: n } = e;
                        t.type !== n.type &&
                          (window.clearTimeout(this.cancelCallTimeout),
                          this.setState({ showErrorScreen: !1 }),
                          (this.cancelCallTimeout = setTimeout(this.cancelCall, this.props.cancelTime || 15 * i.SECOND)));
                      }),
                      m(this, "componentWillUnmount", () => {
                        window.clearTimeout(this.cancelCallTimeout);
                      });
                  }
                  render() {
                    const { rollbackToPreviousProvider: e, showDeprecatedRpcUrlWarning: t } = this.props;
                    let n;
                    return (
                      (n = this.state.showErrorScreen
                        ? this.renderErrorScreenContent()
                        : t
                        ? this.renderDeprecatedRpcUrlWarning()
                        : this.getConnectingLabel(this.props.loadingMessage)),
                      r.default.createElement(o.default, {
                        header: r.default.createElement("div", { className: "page-container__header-close", onClick: e }),
                        showLoadingSpinner: !this.state.showErrorScreen,
                        loadingMessage: n
                      })
                    );
                  }
                }
                (n.default = g),
                  m(g, "contextTypes", { t: a.default.func }),
                  m(g, "propTypes", {
                    loadingMessage: a.default.string,
                    cancelTime: a.default.number,
                    providerConfig: a.default.object,
                    providerId: a.default.oneOfType([a.default.string, a.default.number]),
                    showNetworkDropdown: a.default.func,
                    setProviderArgs: a.default.array,
                    setProviderType: a.default.func,
                    rollbackToPreviousProvider: a.default.func,
                    isNetworkLoading: a.default.bool,
                    showDeprecatedRpcUrlWarning: a.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/loading-network-screen/loading-network-screen.component.js" }
    ],
    [
      4152,
      {
        "../../../../shared/constants/network": 3963,
        "../../../ducks/metamask/metamask": 4763,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "./loading-network-screen.component": 4151,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../../shared/constants/network"),
                  i = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("../../../store/actions")),
                  s = e("../../../selectors"),
                  l = e("../../../ducks/metamask/metamask"),
                  u = (r = e("./loading-network-screen.component")) && r.__esModule ? r : { default: r };
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const d = ["0x3", "0x2a", "0x4"];
                n.default = (0, a.connect)(
                  (e) => {
                    const { loadingMessage: t } = e.appState,
                      n = (0, l.getProviderConfig)(e),
                      { rpcUrl: r, chainId: a, ticker: i, nickname: u, type: c } = n,
                      p = c === o.NETWORK_TYPES.RPC ? [r, a, i, u] : [c],
                      f = a,
                      m = d.includes(f),
                      g = r && new URL(r).host.endsWith(".infura.io"),
                      h = m && g;
                    let y = u;
                    if (y === undefined) {
                      const t = (0, s.getAllEnabledNetworks)(e).find((e) => e.chainId === a);
                      t && (y = t.nickname);
                    }
                    return {
                      isNetworkLoading: (0, s.isNetworkLoading)(e),
                      loadingMessage: t,
                      setProviderArgs: p,
                      providerConfig: { ...n, nickname: y },
                      providerId: (0, s.getNetworkIdentifier)(e),
                      showDeprecatedRpcUrlWarning: h
                    };
                  },
                  (e) => ({
                    setProviderType: (t) => {
                      e(i.setProviderType(t));
                    },
                    rollbackToPreviousProvider: () => e(i.rollbackToPreviousProvider()),
                    showNetworkDropdown: () => e(i.toggleNetworkMenu())
                  })
                )(u.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/loading-network-screen/loading-network-screen.container.js" }
    ],
    [
      4153,
      { "./metamask-template-renderer": 4154, "./section-shape": 4156 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SectionShape", {
                    enumerable: !0,
                    get: function () {
                      return o.SectionShape;
                    }
                  }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./metamask-template-renderer")) && r.__esModule ? r : { default: r },
                  o = e("./section-shape");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/metamask-template-renderer/index.js" }
    ],
    [
      4154,
      { "./safe-component-list": 4155, "./section-shape": 4156, lodash: 3312, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("lodash"),
                  o = e("./safe-component-list"),
                  i = e("./section-shape");
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (s = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l() {
                  return (
                    (l = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                function u(e) {
                  const { element: t } = e,
                    n = o.safeComponentList[t];
                  if (!n) throw new Error(`${t} is not in the safe component list for MetaMask template renderer`);
                  return n;
                }
                const c = ({ sections: e }) => {
                  if (!e) return null;
                  if ("string" == typeof e) return e;
                  if (e && "object" == typeof e && !Array.isArray(e)) {
                    const t = u(e);
                    return r.default.createElement(
                      t,
                      e.props,
                      "object" == typeof e.children ? r.default.createElement(c, { sections: e.children }) : null == e ? void 0 : e.children
                    );
                  }
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    e.reduce((e, t) => {
                      if (!0 === (null == t ? void 0 : t.hide)) return e;
                      if ("string" == typeof t) e.push(t);
                      else {
                        if (!t.key)
                          throw new Error(
                            "When using array syntax in MetaMask Template Language, you must specify a key for each child of the array"
                          );
                        if ("object" == typeof (null == t ? void 0 : t.children))
                          e.push(r.default.createElement(c, { sections: t, key: t.key }));
                        else {
                          const n = u(t);
                          e.push(r.default.createElement(n, l({ key: t.key }, t.props), null == t ? void 0 : t.children));
                        }
                      }
                      return e;
                    }, [])
                  );
                };
                c.propTypes = { sections: i.ValidChildren };
                n.default = (0, r.memo)(c, (e, t) => (0, a.isEqual)(e.sections, t.sections));
              };
            };
      },
      { package: "$root$", file: "ui/components/app/metamask-template-renderer/metamask-template-renderer.js" }
    ],
    [
      4155,
      {
        "../../../pages/confirmation/components/confirmation-network-switch": 4914,
        "../../../pages/create-snap-account": 4942,
        "../../../pages/remove-snap-account": 5005,
        "../../../pages/snap-account-redirect": 5104,
        "../../component-library": 4453,
        "../../ui/actionable-message/actionable-message": 4603,
        "../../ui/box": 4607,
        "../../ui/button": 4611,
        "../../ui/chip": 4620,
        "../../ui/definition-list": 4629,
        "../../ui/popover": 4699,
        "../../ui/spinner": 4717,
        "../../ui/text-field": 4725,
        "../../ui/textarea/textarea": 4728,
        "../../ui/tooltip/tooltip": 4737,
        "../../ui/truncated-definition-list": 4738,
        "../../ui/typography": 4740,
        "../../ui/url-icon": 4745,
        "../confirm/shared/info/row": 4076,
        "../metamask-translation": 4157,
        "../network-display": 4212,
        "../snaps/copyable": 4282,
        "../snaps/snap-authorship-header": 4291,
        "../snaps/snap-delineator": 4296,
        "../snaps/snap-ui-image": 4314,
        "../snaps/snap-ui-markdown": 4316
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.safeComponentList = void 0);
                var r = O(e("../../ui/button")),
                  a = O(e("../../ui/chip")),
                  o = O(e("../../ui/definition-list")),
                  i = O(e("../../ui/truncated-definition-list")),
                  s = O(e("../../ui/popover")),
                  l = O(e("../../ui/typography")),
                  u = O(e("../../ui/box")),
                  c = O(e("../metamask-translation")),
                  d = O(e("../network-display")),
                  p = O(e("../../ui/textarea/textarea")),
                  f = O(e("../../ui/text-field")),
                  m = O(e("../../../pages/confirmation/components/confirmation-network-switch")),
                  g = O(e("../../ui/url-icon")),
                  h = O(e("../../ui/tooltip/tooltip")),
                  y = e("../../component-library"),
                  v = O(e("../../ui/actionable-message/actionable-message")),
                  b = e("../snaps/snap-delineator"),
                  _ = e("../snaps/copyable"),
                  w = O(e("../../ui/spinner")),
                  k = e("../snaps/snap-ui-markdown"),
                  T = e("../snaps/snap-ui-image"),
                  x = e("../confirm/shared/info/row"),
                  E = e("../../../pages/create-snap-account"),
                  C = e("../../../pages/remove-snap-account"),
                  M = e("../../../pages/snap-account-redirect"),
                  P = O(e("../snaps/snap-authorship-header"));
                function O(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.safeComponentList = {
                  a: "a",
                  ActionableMessage: v.default,
                  AvatarIcon: y.AvatarIcon,
                  b: "b",
                  Box: u.default,
                  Button: r.default,
                  Chip: a.default,
                  ConfirmationNetworkSwitch: m.default,
                  DefinitionList: o.default,
                  div: "div",
                  i: "i",
                  MetaMaskTranslation: c.default,
                  NetworkDisplay: d.default,
                  p: "p",
                  Popover: s.default,
                  span: "span",
                  TextArea: p.default,
                  TextField: f.default,
                  Tooltip: h.default,
                  TruncatedDefinitionList: i.default,
                  Typography: l.default,
                  UrlIcon: g.default,
                  Copyable: _.Copyable,
                  SnapDelineator: b.SnapDelineator,
                  SnapUIMarkdown: k.SnapUIMarkdown,
                  SnapUIImage: T.SnapUIImage,
                  Spinner: w.default,
                  ConfirmInfoRow: x.ConfirmInfoRow,
                  ConfirmInfoRowAddress: x.ConfirmInfoRowAddress,
                  CreateSnapAccount: E.CreateSnapAccount,
                  RemoveSnapAccount: C.RemoveSnapAccount,
                  SnapAuthorshipHeader: P.default,
                  SnapAccountRedirect: M.SnapAccountRedirect
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/metamask-template-renderer/safe-component-list.js" }
    ],
    [
      4156,
      { "prop-types": 3450 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ValidChildren = n.SectionShape = void 0);
                var r,
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r };
                const o = (n.SectionShape = { props: a.default.object, element: a.default.string, key: a.default.string }),
                  i = (n.ValidChildren = a.default.oneOfType([
                    a.default.string,
                    a.default.shape(o),
                    a.default.arrayOf(a.default.oneOfType([a.default.shape(o), a.default.string]))
                  ]));
                o.children = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/metamask-template-renderer/section-shape.js" }
    ],
    [
      4157,
      { "./metamask-translation": 4158 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./metamask-translation")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/metamask-translation/index.js" }
    ],
    [
      4158,
      {
        "../../../hooks/useI18nContext": 4837,
        "../metamask-template-renderer": 4153,
        "../metamask-template-renderer/section-shape": 4156,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = u);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../../hooks/useI18nContext"),
                  i = l(e("../metamask-template-renderer")),
                  s = e("../metamask-template-renderer/section-shape");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u({ translationKey: e, variables: t }) {
                  return (0, o.useI18nContext)()(
                    e,
                    null == t
                      ? void 0
                      : t.map((t) => {
                          if ("object" == typeof t && !Array.isArray(t) && t.element) {
                            var n, a;
                            if (!t.key)
                              throw new Error(
                                `When using MetaMask Template Language in a MetaMaskTranslation variable, you must provide a key for the section regardless of syntax.\n            Section with element '${t.element}' for translationKey: '${e}' has no key property`
                              );
                            if (t.children && Array.isArray(t.children) && t.children.length > 2)
                              throw new Error("MetaMaskTranslation only renders templates with a single section and maximum two children");
                            if (
                              ((null === (n = t.children) || void 0 === n || null === (n = n[0]) || void 0 === n ? void 0 : n.children) !==
                                undefined &&
                                "string" != typeof t.children[0].children) ||
                              ((null === (a = t.children) || void 0 === a || null === (a = a[1]) || void 0 === a ? void 0 : a.children) !==
                                undefined &&
                                "string" != typeof t.children[1].children)
                            )
                              throw new Error("MetaMaskTranslation does not allow for component trees of non trivial depth");
                            return r.default.createElement(i.default, { key: `${e}-${t.key}`, sections: t });
                          }
                          return t;
                        })
                  );
                }
                u.propTypes = {
                  translationKey: a.default.string.isRequired,
                  variables: a.default.arrayOf(a.default.oneOfType([a.default.string, a.default.number, a.default.shape(s.SectionShape)]))
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/metamask-translation/metamask-translation.js" }
    ],
    [
      4159,
      { "./modal-content": 4160, "./modal.component": 4162 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ModalContent", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var r = o(e("./modal.component")),
                  a = o(e("./modal-content"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modal/index.js" }
    ],
    [
      4160,
      { "./modal-content.component": 4161 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./modal-content.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modal/modal-content/index.js" }
    ],
    [
      4161,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("prop-types")) && r.__esModule ? r : { default: r };
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
                    return e ? n : t;
                  })(e);
                }
                class s extends a.PureComponent {
                  render() {
                    const { title: e, description: t } = this.props;
                    return a.default.createElement(
                      "div",
                      { className: "modal-content" },
                      e ? a.default.createElement("div", { className: "modal-content__title" }, e) : null,
                      t && a.default.createElement("div", { className: "modal-content__description" }, t)
                    );
                  }
                }
                (n.default = s),
                  (function (e, t, n) {
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
                      : (e[t] = n);
                  })(s, "propTypes", { title: o.default.string, description: o.default.string });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modal/modal-content/modal-content.component.js" }
    ],
    [
      4162,
      { "../../ui/button": 4611, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = s(e("prop-types")),
                  o = s(e("classnames")),
                  i = s(e("../../ui/button"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u(e, t, n) {
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
                class c extends r.PureComponent {
                  render() {
                    const {
                      children: e,
                      headerText: t,
                      onClose: n,
                      onSubmit: a,
                      submitType: s,
                      submitText: l,
                      submitDisabled: u,
                      onCancel: c,
                      cancelType: d,
                      cancelText: p,
                      contentClass: f,
                      containerClass: m,
                      hideFooter: g
                    } = this.props;
                    return r.default.createElement(
                      "div",
                      { className: (0, o.default)("modal-container", m) },
                      t &&
                        r.default.createElement(
                          "div",
                          { className: "modal-container__header" },
                          r.default.createElement("div", { className: "modal-container__header-text" }, t),
                          r.default.createElement("div", {
                            className: "modal-container__header-close",
                            "data-testid": "modal-header-close",
                            onClick: n
                          })
                        ),
                      r.default.createElement("div", { className: (0, o.default)("modal-container__content", f) }, e),
                      g
                        ? null
                        : r.default.createElement(
                            "div",
                            { className: "modal-container__footer" },
                            c &&
                              r.default.createElement(i.default, { type: d, onClick: c, className: "modal-container__footer-button" }, p),
                            r.default.createElement(
                              i.default,
                              { type: s, onClick: a, disabled: u, className: "modal-container__footer-button" },
                              l
                            )
                          )
                    );
                  }
                }
                (n.default = c),
                  u(c, "propTypes", {
                    children: a.default.node,
                    contentClass: a.default.string,
                    containerClass: a.default.string,
                    headerText: a.default.string,
                    onClose: a.default.func,
                    onSubmit: a.default.func,
                    submitType: a.default.string,
                    submitText: a.default.string,
                    submitDisabled: a.default.bool,
                    hideFooter: a.default.bool,
                    onCancel: a.default.func,
                    cancelType: a.default.string,
                    cancelText: a.default.string
                  }),
                  u(c, "defaultProps", { submitType: "primary", cancelType: "secondary" });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modal/modal.component.js" }
    ],
    [
      4163,
      { "../../modal": 4159, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = l(e("react")),
                  o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = l(e("../../modal"));
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (s = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = s(t);
                  if (n && n.has(e)) return n.get(e);
                  var r = { __proto__: null },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                      var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                      i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                    }
                  return (r.default = e), n && n.set(e, r), r;
                }
                function u(e, t, n) {
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
                class c extends a.PureComponent {
                  constructor(...e) {
                    super(...e),
                      u(this, "handleDelete", async () => {
                        await this.props.removeNetworkConfiguration(this.props.target), this.props.onConfirm(), this.props.hideModal();
                      });
                  }
                  render() {
                    const { t: e } = this.context,
                      { networkNickname: t } = this.props;
                    return a.default.createElement(
                      i.default,
                      {
                        onSubmit: this.handleDelete,
                        onCancel: () => this.props.hideModal(),
                        submitText: e("delete"),
                        cancelText: e("cancel"),
                        submitType: "danger-primary"
                      },
                      a.default.createElement(i.ModalContent, { title: e("deleteNetworkTitle", [t]), description: e("deleteNetworkIntro") })
                    );
                  }
                }
                (n.default = c),
                  u(c, "propTypes", {
                    hideModal: o.default.func.isRequired,
                    removeNetworkConfiguration: o.default.func.isRequired,
                    onConfirm: o.default.func.isRequired,
                    target: o.default.string.isRequired,
                    networkNickname: o.default.string.isRequired
                  }),
                  u(c, "contextTypes", { t: o.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/confirm-delete-network/confirm-delete-network.component.js" }
    ],
    [
      4164,
      {
        "../../../../helpers/higher-order-components/with-modal-props": 4789,
        "../../../../selectors": 5197,
        "../../../../store/actions": 5204,
        "./confirm-delete-network.component": 4163,
        "react-redux": 3655,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = e("react-redux"),
                  a = e("redux"),
                  o = u(e("../../../../helpers/higher-order-components/with-modal-props")),
                  i = e("../../../../store/actions"),
                  s = e("../../../../selectors"),
                  l = u(e("./confirm-delete-network.component"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = (0, a.compose)(
                  o.default,
                  (0, r.connect)(
                    (e, t) => ({ networkNickname: (0, s.getNetworkConfigurations)(e)[t.target].nickname }),
                    (e) => ({ removeNetworkConfiguration: (t) => e((0, i.removeNetworkConfiguration)(t)) })
                  )
                )(l.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/confirm-delete-network/confirm-delete-network.container.js" }
    ],
    [
      4165,
      { "./confirm-delete-network.container": 4164 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./confirm-delete-network.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/confirm-delete-network/index.js" }
    ],
    [
      4166,
      {
        "../../../../../shared/constants/metametrics": 3962,
        "../../../../helpers/constants/zendesk-url": 4781,
        "../../../../helpers/utils/util": 4812,
        "../../../ui/identicon": 4664,
        "../../modal": 4159,
        "@metamask/etherscan-link": 1255,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = d(e("prop-types")),
                  o = e("@metamask/etherscan-link"),
                  i = d(e("../../modal")),
                  s = e("../../../../helpers/utils/util"),
                  l = d(e("../../../ui/identicon")),
                  u = e("../../../../../shared/constants/metametrics"),
                  c = d(e("../../../../helpers/constants/zendesk-url"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f(e, t, n) {
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
                class m extends r.Component {
                  constructor(...e) {
                    super(...e),
                      f(this, "handleRemove", () => {
                        this.props.removeAccount(this.props.identity.address).then(() => this.props.hideModal());
                      }),
                      f(this, "handleCancel", () => {
                        this.props.hideModal();
                      });
                  }
                  renderSelectedAccount() {
                    const { t: e } = this.context,
                      { identity: t, rpcPrefs: n, chainId: a } = this.props;
                    return r.default.createElement(
                      "div",
                      { className: "confirm-remove-account__account" },
                      r.default.createElement(
                        "div",
                        { className: "confirm-remove-account__account__identicon" },
                        r.default.createElement(l.default, { address: t.address, diameter: 32 })
                      ),
                      r.default.createElement(
                        "div",
                        { className: "confirm-remove-account__account__name" },
                        r.default.createElement("span", { className: "confirm-remove-account__account__label" }, e("name")),
                        r.default.createElement("span", { className: "account_value" }, t.name)
                      ),
                      r.default.createElement(
                        "div",
                        { className: "confirm-remove-account__account__address" },
                        r.default.createElement("span", { className: "confirm-remove-account__account__label" }, e("publicAddress")),
                        r.default.createElement("span", { className: "account_value" }, (0, s.addressSummary)(t.address, 4, 4))
                      ),
                      r.default.createElement(
                        "div",
                        { className: "confirm-remove-account__account__link" },
                        r.default.createElement(
                          "a",
                          {
                            onClick: () => {
                              const e = (0, o.getAccountLink)(t.address, a, n);
                              this.context.trackEvent({
                                category: u.MetaMetricsEventCategory.Accounts,
                                event: "Clicked Block Explorer Link",
                                properties: {
                                  link_type: "Account Tracker",
                                  action: "Remove Account",
                                  block_explorer_domain: (0, s.getURLHostName)(e)
                                }
                              }),
                                global.platform.openTab({ url: e });
                            },
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: e("etherscanView")
                          },
                          r.default.createElement("i", {
                            className: "fa fa-share-square",
                            style: { color: "var(--color-icon-muted)" },
                            title: e("etherscanView")
                          })
                        )
                      )
                    );
                  }
                  render() {
                    const { t: e } = this.context;
                    return r.default.createElement(
                      i.default,
                      {
                        headerText: `${e("removeAccount")}?`,
                        onClose: this.handleCancel,
                        onSubmit: this.handleRemove,
                        onCancel: this.handleCancel,
                        submitText: e("remove"),
                        cancelText: e("nevermind")
                      },
                      r.default.createElement(
                        "div",
                        null,
                        this.renderSelectedAccount(),
                        r.default.createElement(
                          "div",
                          { className: "confirm-remove-account__description" },
                          e("removeAccountDescription"),
                          r.default.createElement(
                            "a",
                            {
                              className: "confirm-remove-account__link",
                              rel: "noopener noreferrer",
                              target: "_blank",
                              href: c.default.IMPORTED_ACCOUNTS
                            },
                            e("learnMore")
                          )
                        )
                      )
                    );
                  }
                }
                (n.default = m),
                  f(m, "propTypes", {
                    hideModal: a.default.func.isRequired,
                    removeAccount: a.default.func.isRequired,
                    identity: a.default.object.isRequired,
                    chainId: a.default.string.isRequired,
                    rpcPrefs: a.default.object.isRequired
                  }),
                  f(m, "contextTypes", { t: a.default.func, trackEvent: a.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/confirm-remove-account/confirm-remove-account.component.js" }
    ],
    [
      4167,
      {
        "../../../../helpers/higher-order-components/with-modal-props": 4789,
        "../../../../selectors": 5197,
        "../../../../store/actions": 5204,
        "./confirm-remove-account.component": 4166,
        "react-redux": 3655,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = e("react-redux"),
                  a = e("redux"),
                  o = u(e("../../../../helpers/higher-order-components/with-modal-props")),
                  i = e("../../../../selectors"),
                  s = e("../../../../store/actions"),
                  l = u(e("./confirm-remove-account.component"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = (0, a.compose)(
                  o.default,
                  (0, r.connect)(
                    (e) => ({ chainId: (0, i.getCurrentChainId)(e), rpcPrefs: (0, i.getRpcPrefsForCurrentProvider)(e) }),
                    (e) => ({ removeAccount: (t) => e((0, s.removeAccount)(t)) })
                  )
                )(l.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/confirm-remove-account/confirm-remove-account.container.js" }
    ],
    [
      4168,
      { "./confirm-remove-account.container": 4167 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./confirm-remove-account.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/confirm-remove-account/index.js" }
    ],
    [
      4169,
      { "../../modal": 4159, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = l(e("react")),
                  o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = l(e("../../modal"));
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (s = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = s(t);
                  if (n && n.has(e)) return n.get(e);
                  var r = { __proto__: null },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                      var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                      i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                    }
                  return (r.default = e), n && n.set(e, r), r;
                }
                function u(e, t, n) {
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
                class c extends a.PureComponent {
                  constructor(...e) {
                    super(...e),
                      u(this, "handleReset", () => {
                        this.props.resetAccount().then(() => this.props.hideModal());
                      });
                  }
                  render() {
                    const { t: e } = this.context;
                    return a.default.createElement(
                      i.default,
                      {
                        onSubmit: this.handleReset,
                        onCancel: () => this.props.hideModal(),
                        submitText: e("clear"),
                        cancelText: e("nevermind"),
                        submitType: "danger-primary"
                      },
                      a.default.createElement(i.ModalContent, {
                        title: `${e("clearActivity")}?`,
                        description: e("clearActivityDescription")
                      })
                    );
                  }
                }
                (n.default = c),
                  u(c, "propTypes", { hideModal: o.default.func.isRequired, resetAccount: o.default.func.isRequired }),
                  u(c, "contextTypes", { t: o.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/confirm-reset-account/confirm-reset-account.component.js" }
    ],
    [
      4170,
      {
        "../../../../helpers/higher-order-components/with-modal-props": 4789,
        "../../../../store/actions": 5204,
        "./confirm-reset-account.component": 4169,
        "react-redux": 3655,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = e("react-redux"),
                  a = e("redux"),
                  o = l(e("../../../../helpers/higher-order-components/with-modal-props")),
                  i = e("../../../../store/actions"),
                  s = l(e("./confirm-reset-account.component"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = (0, a.compose)(
                  o.default,
                  (0, r.connect)(null, (e) => ({ resetAccount: () => e((0, i.resetAccount)()) }))
                )(s.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/confirm-reset-account/confirm-reset-account.container.js" }
    ],
    [
      4171,
      { "./confirm-reset-account.container": 4170 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./confirm-reset-account.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/confirm-reset-account/index.js" }
    ],
    [
      4172,
      {
        "../../../../../shared/constants/transaction": 3974,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useCopyToClipboard": 4830,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../hooks/usePetnamesEnabled": 4844,
        "../../../../pages/send/send.utils": 5048,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
        "../../../ui/box": 4607,
        "../../../ui/button/button.component": 4610,
        "../../../ui/identicon": 4664,
        "../../../ui/nft-collection-image/nft-collection-image": 4688,
        "../../../ui/popover": 4699,
        "../../../ui/tooltip/tooltip": 4737,
        "../../name/name": 4209,
        "@metamask/etherscan-link": 1255,
        "@metamask/name-controller": 1406,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = x);
                var r = T(e("react")),
                  a = T(e("prop-types")),
                  o = e("@metamask/etherscan-link"),
                  i = e("react-redux"),
                  s = e("@metamask/name-controller"),
                  l = T(e("../../../ui/box")),
                  u = T(e("../../../ui/button/button.component")),
                  c = T(e("../../../ui/tooltip/tooltip")),
                  d = e("../../../../hooks/useI18nContext"),
                  p = T(e("../../../ui/identicon")),
                  f = e("../../../../pages/send/send.utils"),
                  m = T(e("../../../ui/popover")),
                  g = e("../../../../helpers/constants/design-system"),
                  h = e("../../../../hooks/useCopyToClipboard"),
                  y = e("../../../../selectors"),
                  v = e("../../../../../shared/constants/transaction"),
                  b = T(e("../../../ui/nft-collection-image/nft-collection-image")),
                  _ = e("../../../component-library"),
                  w = T(e("../../name/name")),
                  k = e("../../../../hooks/usePetnamesEnabled");
                function T(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x({
                  onClose: e,
                  tokenName: t,
                  tokenAddress: n,
                  toAddress: a,
                  chainId: T,
                  rpcPrefs: x,
                  tokenId: E,
                  assetName: C,
                  assetStandard: M,
                  isContractRequestingSignature: P
                }) {
                  var O, S;
                  const j = (0, d.useI18nContext)(),
                    [N, I] = (0, h.useCopyToClipboard)(),
                    [D, R] = (0, h.useCopyToClipboard)(),
                    A = (0, k.usePetnamesEnabled)(),
                    B = (0, i.useSelector)((e) => ({ data: (0, y.getAddressBookEntry)(e, a) })),
                    F = M === v.TokenStandard.ERC721 || M === v.TokenStandard.ERC1155 || (C && E) || (t && E);
                  return r.default.createElement(
                    m.default,
                    { className: "contract-details-modal" },
                    r.default.createElement(
                      l.default,
                      { paddingTop: 6, paddingRight: 4, paddingBottom: 8, paddingLeft: 4, className: "contract-details-modal__content" },
                      r.default.createElement(
                        _.Text,
                        { fontWeight: g.FontWeight.Bold, variant: g.TextVariant.bodyMd, as: "h5", display: g.Display.Flex },
                        j("contractTitle")
                      ),
                      r.default.createElement(
                        _.Text,
                        {
                          variant: g.TextVariant.bodySm,
                          as: "h6",
                          display: g.Display.Flex,
                          color: g.TextColor.textAlternative,
                          marginTop: 2
                        },
                        j("contractDescription")
                      ),
                      !P &&
                        r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(
                            _.Text,
                            { variant: g.TextVariant.bodySm, as: "h6", display: g.Display.Flex, marginTop: 4, marginBottom: 2 },
                            j(F ? "contractNFT" : "contractToken")
                          ),
                          r.default.createElement(
                            l.default,
                            {
                              display: g.Display.Flex,
                              borderRadius: g.Size.SM,
                              borderStyle: g.BorderStyle.solid,
                              borderColor: g.BorderColor.borderDefault,
                              className: "contract-details-modal__content__contract"
                            },
                            F
                              ? r.default.createElement(
                                  l.default,
                                  { margin: 4 },
                                  r.default.createElement(b.default, { assetName: C, tokenAddress: n })
                                )
                              : r.default.createElement(p.default, {
                                  className: "contract-details-modal__content__contract__identicon",
                                  address: n,
                                  diameter: 24
                                }),
                            r.default.createElement(
                              l.default,
                              { "data-testid": "recipient" },
                              r.default.createElement(
                                _.Text,
                                { fontWeight: g.FontWeight.Bold, variant: g.TextVariant.bodyMd, as: "h5", marginTop: 4 },
                                t || (0, f.ellipsify)(n)
                              ),
                              t &&
                                r.default.createElement(
                                  _.Text,
                                  {
                                    variant: g.TextVariant.bodySm,
                                    as: "h6",
                                    display: g.Display.Flex,
                                    color: g.TextColor.textAlternative,
                                    marginBottom: 4
                                  },
                                  (0, f.ellipsify)(n)
                                )
                            ),
                            r.default.createElement(
                              l.default,
                              { alignItems: g.AlignItems.center, marginLeft: "auto", marginRight: 4, gap: 2 },
                              r.default.createElement(
                                c.default,
                                { position: "top", title: j(N ? "copiedExclamation" : "copyToClipboard") },
                                r.default.createElement(_.ButtonIcon, {
                                  display: g.Display.Flex,
                                  iconName: N ? _.IconName.CopySuccess : _.IconName.Copy,
                                  onClick: () => I(n),
                                  color: g.Color.iconMuted,
                                  ariaLabel: j(N ? "copiedExclamation" : "copyToClipboard")
                                })
                              ),
                              r.default.createElement(
                                c.default,
                                { position: "top", title: j("openInBlockExplorer") },
                                r.default.createElement(_.ButtonIcon, {
                                  display: g.Display.Flex,
                                  iconName: _.IconName.Export,
                                  color: g.Color.iconMuted,
                                  onClick: () => {
                                    const e = (0, o.getAccountLink)(
                                      n,
                                      T,
                                      { blockExplorerUrl: (null == x ? void 0 : x.blockExplorerUrl) ?? null },
                                      null
                                    );
                                    global.platform.openTab({ url: e });
                                  },
                                  ariaLabel: j("openInBlockExplorer")
                                })
                              )
                            )
                          )
                        ),
                      r.default.createElement(
                        _.Text,
                        { variant: g.TextVariant.bodySm, as: "h6", display: g.Display.Flex, marginTop: 4, marginBottom: 2 },
                        F && j("contractRequestingAccess"),
                        P && j("contractRequestingSignature"),
                        !F && !P && j("contractRequestingSpendingCap")
                      ),
                      r.default.createElement(
                        l.default,
                        {
                          display: g.Display.Flex,
                          borderRadius: g.Size.SM,
                          borderStyle: g.BorderStyle.solid,
                          borderColor: g.BorderColor.borderDefault,
                          alignItems: g.AlignItems.center,
                          className: "contract-details-modal__content__contract"
                        },
                        r.default.createElement(p.default, {
                          className: "contract-details-modal__content__contract__identicon",
                          diameter: 24,
                          address: a
                        }),
                        r.default.createElement(
                          l.default,
                          { "data-testid": "recipient" },
                          A
                            ? r.default.createElement(
                                _.Text,
                                { variant: g.TextVariant.bodyMd, as: "h5" },
                                r.default.createElement(w.default, { value: a, type: s.NameType.ETHEREUM_ADDRESS })
                              )
                            : r.default.createElement(
                                _.Text,
                                { fontWeight: g.FontWeight.Bold, variant: g.TextVariant.bodyMd, as: "h5" },
                                (null == B || null === (O = B.data) || void 0 === O ? void 0 : O.name) || (0, f.ellipsify)(a)
                              ),
                          !A &&
                            (null == B || null === (S = B.data) || void 0 === S ? void 0 : S.name) &&
                            r.default.createElement(
                              _.Text,
                              {
                                variant: g.TextVariant.bodySm,
                                as: "h6",
                                display: g.Display.Flex,
                                color: g.TextColor.textAlternative,
                                marginBottom: 4
                              },
                              (0, f.ellipsify)(a)
                            )
                        ),
                        r.default.createElement(
                          l.default,
                          { alignItems: g.AlignItems.center, marginLeft: "auto", marginRight: 4, gap: 2 },
                          r.default.createElement(
                            c.default,
                            { position: "top", title: j(D ? "copiedExclamation" : "copyToClipboard") },
                            r.default.createElement(_.ButtonIcon, {
                              display: g.Display.Flex,
                              iconName: D ? _.IconName.CopySuccess : _.IconName.Copy,
                              onClick: () => R(a),
                              color: g.Color.iconMuted,
                              ariaLabel: j(N ? "copiedExclamation" : "copyToClipboard")
                            })
                          ),
                          r.default.createElement(
                            c.default,
                            { position: "top", title: j("openInBlockExplorer") },
                            r.default.createElement(_.ButtonIcon, {
                              display: g.Display.Flex,
                              iconName: _.IconName.Export,
                              color: g.Color.iconMuted,
                              onClick: () => {
                                const e = (0, o.getAccountLink)(
                                  a,
                                  T,
                                  { blockExplorerUrl: (null == x ? void 0 : x.blockExplorerUrl) ?? null },
                                  null
                                );
                                global.platform.openTab({ url: e });
                              },
                              ariaLabel: j("openInBlockExplorer")
                            })
                          )
                        )
                      )
                    ),
                    r.default.createElement(
                      l.default,
                      { display: g.Display.Flex, paddingTop: 6, paddingRight: 4, paddingBottom: 6, paddingLeft: 4 },
                      r.default.createElement(u.default, { type: "primary", onClick: () => e() }, j("recoveryPhraseReminderConfirm"))
                    )
                  );
                }
                x.propTypes = {
                  onClose: a.default.func,
                  tokenName: a.default.string,
                  tokenAddress: a.default.string,
                  toAddress: a.default.string,
                  chainId: a.default.string,
                  rpcPrefs: a.default.object,
                  tokenId: a.default.string,
                  assetStandard: a.default.string,
                  assetName: a.default.string,
                  isContractRequestingSignature: a.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/contract-details-modal/contract-details-modal.js" }
    ],
    [
      4173,
      { "./contract-details-modal": 4172 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./contract-details-modal")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/contract-details-modal/index.js" }
    ],
    [
      4174,
      {
        "../../../../../shared/modules/string-utils": 4002,
        "../../../../ducks/metamask/metamask": 4763,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/constants/routes": 4776,
        "../../../../helpers/higher-order-components/with-modal-props": 4789,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../store/actions": 5204,
        "../../../ui/typography": 4740,
        "../../modal": 4159,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = h(e("react")),
                  a = h(e("prop-types")),
                  o = e("react-router-dom"),
                  i = e("react-redux"),
                  s = h(e("../../modal")),
                  l = h(e("../../../ui/typography")),
                  u = e("../../../../helpers/constants/design-system"),
                  c = h(e("../../../../helpers/higher-order-components/with-modal-props")),
                  d = e("../../../../hooks/useI18nContext"),
                  p = e("../../../../helpers/constants/routes"),
                  f = e("../../../../ducks/metamask/metamask"),
                  m = e("../../../../store/actions"),
                  g = e("../../../../../shared/modules/string-utils");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const y = ({ hideModal: e, tokenAddress: t }) => {
                  const n = (0, o.useHistory)(),
                    a = (0, d.useI18nContext)(),
                    c = (0, i.useDispatch)(),
                    h = (0, i.useSelector)(f.getNfts).find(({ address: e }) => (0, g.isEqualCaseInsensitive)(e, t));
                  return r.default.createElement(
                    s.default,
                    {
                      onSubmit: async () => {
                        if (h) {
                          await c((0, m.ignoreTokens)({ tokensToIgnore: t, dontShowLoadingIndicator: !0 }));
                          const { tokenId: e } = h;
                          n.push({ pathname: `${p.ASSET_ROUTE}/${t}/${e}` });
                        } else c((0, m.showImportNftsModal)({ tokenAddress: t, ignoreErc20Token: !0 }));
                        e();
                      },
                      submitText: a("yes"),
                      onCancel: () => e(),
                      cancelText: a("cancel")
                    },
                    r.default.createElement(
                      "div",
                      { className: "convert-token-to-nft-modal" },
                      r.default.createElement(
                        l.default,
                        { variant: u.TypographyVariant.H6, boxProps: { marginTop: 2 } },
                        a(h ? "convertTokenToNFTExistDescription" : "convertTokenToNFTDescription")
                      )
                    )
                  );
                };
                y.propTypes = { hideModal: a.default.func.isRequired, tokenAddress: a.default.string };
                n.default = (0, c.default)(y);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/convert-token-to-nft-modal/convert-token-to-nft-modal.js" }
    ],
    [
      4175,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/constants/zendesk-url": 4781,
        "../../../../helpers/higher-order-components/with-modal-props": 4789,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "../../../ui/text-field": 4725,
        "../../modal": 4159,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = p(e("prop-types")),
                  o = p(e("../../modal")),
                  i = p(e("../../../ui/text-field")),
                  s = e("../../../../helpers/constants/design-system"),
                  l = p(e("../../../../helpers/higher-order-components/with-modal-props")),
                  u = e("../../../../hooks/useI18nContext"),
                  c = p(e("../../../../helpers/constants/zendesk-url")),
                  d = e("../../../component-library");
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
                const m = ({ hideModal: e, customNonceValue: t, nextNonce: n, updateCustomNonce: a, getNextNonce: l }) => {
                  const [p, f] = (0, r.useState)(""),
                    m = (0, u.useI18nContext)();
                  return r.default.createElement(
                    o.default,
                    {
                      onSubmit: () => {
                        a("" === p ? t : p), l(), e();
                      },
                      submitText: m("save"),
                      onCancel: () => e(),
                      cancelText: m("cancel"),
                      contentClass: "customize-nonce-modal-content",
                      containerClass: "customize-nonce-modal-container"
                    },
                    r.default.createElement(
                      "div",
                      { className: "customize-nonce-modal" },
                      r.default.createElement(
                        "div",
                        { className: "customize-nonce-modal__main-header" },
                        r.default.createElement(
                          d.Text,
                          { className: "customize-nonce-modal__main-title", variant: s.TextVariant.headingSm, as: "h4" },
                          m("editNonceField")
                        ),
                        r.default.createElement(d.ButtonIcon, {
                          iconName: d.IconName.Close,
                          className: "customize-nonce-modal__close",
                          size: d.ButtonIconSize.Sm,
                          ariaLabel: m("close"),
                          onClick: e
                        })
                      ),
                      r.default.createElement(
                        d.Box,
                        { marginTop: 2, display: s.Display.InlineFlex, alignItems: s.AlignItems.center },
                        r.default.createElement(
                          d.Text,
                          { variant: s.TextVariant.bodyMd, as: "h6" },
                          m("editNonceMessage"),
                          r.default.createElement(
                            d.ButtonLink,
                            {
                              className: "customize-nonce-modal__link",
                              rel: "noopener noreferrer",
                              target: "_blank",
                              href: c.default.CUSTOMIZE_NONCE
                            },
                            m("learnMoreUpperCase")
                          )
                        )
                      ),
                      r.default.createElement(
                        d.Box,
                        { marginTop: 4 },
                        r.default.createElement(
                          d.Box,
                          { alignItems: s.AlignItems.center, display: s.Display.Flex },
                          r.default.createElement(
                            d.Text,
                            { variant: s.TextVariant.bodyMdBold, as: "h6", width: s.BlockSize.FiveSixths },
                            m("editNonceField")
                          ),
                          r.default.createElement(
                            d.Box,
                            { width: s.BlockSize.OneSixth },
                            r.default.createElement(
                              d.ButtonLink,
                              {
                                className: "customize-nonce-modal__reset",
                                "data-testid": "customize-nonce-reset",
                                onClick: () => {
                                  f(n);
                                }
                              },
                              m("reset")
                            )
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "customize-nonce-modal__input" },
                          r.default.createElement(i.default, {
                            type: "number",
                            "data-testid": "custom-nonce-input",
                            min: "0",
                            placeholder: t || ("number" == typeof n && n.toString()),
                            onChange: (e) => {
                              f(e.target.value);
                            },
                            fullWidth: !0,
                            margin: "dense",
                            value: p,
                            id: "custom-nonce-id"
                          })
                        )
                      )
                    )
                  );
                };
                m.propTypes = {
                  hideModal: a.default.func.isRequired,
                  customNonceValue: a.default.string,
                  nextNonce: a.default.number,
                  updateCustomNonce: a.default.func,
                  getNextNonce: a.default.func
                };
                n.default = (0, l.default)(m);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/customize-nonce/customize-nonce.component.js" }
    ],
    [
      4176,
      { "./customize-nonce.component": 4175 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./customize-nonce.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/customize-nonce/index.js" }
    ],
    [
      4177,
      {
        "../../../../../shared/lib/transactions-controller-utils": 3982,
        "../../../component-library": 4453,
        "../../../ui/identicon": 4664,
        "../../../ui/text-field": 4725,
        "../../modal": 4159,
        "bignumber.js": 2283,
        classnames: 2414,
        loglevel: 3322,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = f(e("prop-types")),
                  o = f(e("loglevel")),
                  i = f(e("classnames")),
                  s = f(e("bignumber.js")),
                  l = f(e("../../modal")),
                  u = f(e("../../../ui/identicon")),
                  c = f(e("../../../ui/text-field")),
                  d = e("../../../../../shared/lib/transactions-controller-utils"),
                  p = e("../../../component-library");
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
                function g(e, t, n) {
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
                const h = new s.default(2).pow(256).minus(1).toString(10);
                class y extends r.PureComponent {
                  constructor(...e) {
                    super(...e),
                      g(this, "state", {
                        customSpendLimit: this.props.customTokenAmount || "",
                        selectedOptionIsUnlimited: !this.props.customTokenAmount
                      });
                  }
                  renderModalContent(e) {
                    const { t: t } = this.context,
                      {
                        hideModal: n,
                        selectedIdentity: a,
                        tokenAmount: o,
                        tokenSymbol: l,
                        tokenBalance: f,
                        customTokenAmount: m,
                        origin: g
                      } = this.props,
                      { name: y, address: v } = a || {},
                      { selectedOptionIsUnlimited: b } = this.state;
                    return r.default.createElement(
                      "div",
                      { className: "edit-approval-permission" },
                      r.default.createElement(
                        "div",
                        { className: "edit-approval-permission__header" },
                        r.default.createElement("div", { className: "edit-approval-permission__title" }, t("editPermission")),
                        r.default.createElement(p.ButtonIcon, {
                          iconName: p.IconName.Close,
                          size: p.ButtonIconSize.Lg,
                          className: "edit-approval-permission__header__close",
                          onClick: n
                        })
                      ),
                      r.default.createElement(
                        "div",
                        { className: "edit-approval-permission__account-info" },
                        r.default.createElement(
                          "div",
                          { className: "edit-approval-permission__account-info__account" },
                          r.default.createElement(u.default, { address: v, diameter: 32 }),
                          r.default.createElement(
                            "div",
                            { className: "edit-approval-permission__name-and-balance-container" },
                            r.default.createElement("div", { className: "edit-approval-permission__account-info__name" }, y),
                            r.default.createElement("div", null, t("balance"))
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "edit-approval-permission__account-info__balance" },
                          `${(0, d.toPrecisionWithoutTrailingZeros)(f, 9)} ${l}`
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "edit-approval-permission__edit-section" },
                        r.default.createElement(
                          "div",
                          { className: "edit-approval-permission__edit-section__title" },
                          t("spendLimitPermission")
                        ),
                        r.default.createElement(
                          "div",
                          { className: "edit-approval-permission__edit-section__description" },
                          t("allowWithdrawAndSpend", [g])
                        ),
                        r.default.createElement(
                          "div",
                          { className: "edit-approval-permission__edit-section__option" },
                          r.default.createElement(
                            "div",
                            {
                              className: "edit-approval-permission__edit-section__radio-button",
                              onClick: () => this.setState({ selectedOptionIsUnlimited: !0 })
                            },
                            r.default.createElement("div", {
                              className: (0, i.default)({
                                "edit-approval-permission__edit-section__radio-button-outline": !b,
                                "edit-approval-permission__edit-section__radio-button-outline--selected": b
                              })
                            }),
                            r.default.createElement("div", { className: "edit-approval-permission__edit-section__radio-button-fill" }),
                            b && r.default.createElement("div", { className: "edit-approval-permission__edit-section__radio-button-dot" })
                          ),
                          r.default.createElement(
                            "div",
                            { className: "edit-approval-permission__edit-section__option-text" },
                            r.default.createElement(
                              "div",
                              {
                                className: (0, i.default)({
                                  "edit-approval-permission__edit-section__option-label": !b,
                                  "edit-approval-permission__edit-section__option-label--selected": b
                                })
                              },
                              new s.default(o).equals(new s.default(h)) ? t("unlimited") : t("proposedApprovalLimit")
                            ),
                            r.default.createElement(
                              "div",
                              { className: "edit-approval-permission__edit-section__option-description" },
                              t("spendLimitRequestedBy", [g])
                            ),
                            r.default.createElement(
                              "div",
                              { className: "edit-approval-permission__edit-section__option-value" },
                              `${Number(o)} ${l}`
                            )
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "edit-approval-permission__edit-section__option" },
                          r.default.createElement(
                            "div",
                            {
                              className: "edit-approval-permission__edit-section__radio-button",
                              onClick: () => this.setState({ selectedOptionIsUnlimited: !1 })
                            },
                            r.default.createElement("div", {
                              className: (0, i.default)({
                                "edit-approval-permission__edit-section__radio-button-outline": b,
                                "edit-approval-permission__edit-section__radio-button-outline--selected": !b
                              })
                            }),
                            r.default.createElement("div", { className: "edit-approval-permission__edit-section__radio-button-fill" }),
                            !b && r.default.createElement("div", { className: "edit-approval-permission__edit-section__radio-button-dot" })
                          ),
                          r.default.createElement(
                            "div",
                            { className: "edit-approval-permission__edit-section__option-text" },
                            r.default.createElement(
                              "div",
                              {
                                className: (0, i.default)({
                                  "edit-approval-permission__edit-section__option-label": b,
                                  "edit-approval-permission__edit-section__option-label--selected": !b
                                })
                              },
                              t("customSpendLimit")
                            ),
                            r.default.createElement(
                              "div",
                              { className: "edit-approval-permission__edit-section__option-description" },
                              t("enterMaxSpendLimit")
                            ),
                            r.default.createElement(
                              "div",
                              { className: "edit-approval-permission__edit-section__option-input" },
                              r.default.createElement(c.default, {
                                type: "number",
                                placeholder: `${Number(m || o)} ${l}`,
                                onChange: (e) => {
                                  this.setState({ customSpendLimit: e.target.value }),
                                    b && this.setState({ selectedOptionIsUnlimited: !1 });
                                },
                                fullWidth: !0,
                                margin: "dense",
                                value: this.state.customSpendLimit,
                                error: e
                              })
                            )
                          )
                        )
                      )
                    );
                  }
                  validateSpendLimit() {
                    const { t: e } = this.context,
                      { decimals: t, requiredMinimum: n } = this.props,
                      { selectedOptionIsUnlimited: r, customSpendLimit: a } = this.state;
                    if (r || !a) return undefined;
                    let i;
                    try {
                      i = new s.default(a);
                    } catch (t) {
                      return o.default.debug(`Error converting '${a}' to BigNumber:`, t), e("spendLimitInvalid");
                    }
                    if (i.isNegative()) return e("spendLimitInvalid");
                    const l = (0, d.calcTokenAmount)(h, t);
                    return i.greaterThan(l)
                      ? e("spendLimitTooLarge")
                      : n !== undefined && i.lessThan(n)
                      ? e("spendLimitInsufficient")
                      : undefined;
                  }
                  render() {
                    const { t: e } = this.context,
                      { setCustomAmount: t, hideModal: n, customTokenAmount: a } = this.props,
                      { selectedOptionIsUnlimited: o, customSpendLimit: i } = this.state,
                      s = this.validateSpendLimit(),
                      u = Boolean((i === a && !o) || s);
                    return r.default.createElement(
                      l.default,
                      {
                        onSubmit: () => {
                          t(o ? "" : i), n();
                        },
                        submitText: e("save"),
                        contentClass: "edit-approval-permission-modal-content",
                        containerClass: "edit-approval-permission-modal-container",
                        submitDisabled: u
                      },
                      this.renderModalContent(s)
                    );
                  }
                }
                (n.default = y),
                  g(y, "propTypes", {
                    decimals: a.default.number,
                    hideModal: a.default.func.isRequired,
                    selectedIdentity: a.default.object,
                    tokenAmount: a.default.string,
                    customTokenAmount: a.default.string,
                    tokenSymbol: a.default.string,
                    tokenBalance: a.default.string,
                    setCustomAmount: a.default.func,
                    origin: a.default.string.isRequired,
                    requiredMinimum: a.default.instanceOf(s.default)
                  }),
                  g(y, "contextTypes", { t: a.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/edit-approval-permission/edit-approval-permission.component.js" }
    ],
    [
      4178,
      {
        "../../../../helpers/higher-order-components/with-modal-props": 4789,
        "../../../../selectors": 5197,
        "./edit-approval-permission.component": 4177,
        "react-redux": 3655,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = e("react-redux"),
                  a = e("redux"),
                  o = l(e("../../../../helpers/higher-order-components/with-modal-props")),
                  i = e("../../../../selectors"),
                  s = l(e("./edit-approval-permission.component"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = (0, a.compose)(
                  o.default,
                  (0, r.connect)((e) => {
                    const t = e.appState.modal.modalState.props || {};
                    return { selectedIdentity: (0, i.getSelectedIdentity)(e), ...t };
                  })
                )(s.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/edit-approval-permission/edit-approval-permission.container.js" }
    ],
    [
      4179,
      { "./edit-approval-permission.container": 4178 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./edit-approval-permission.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/edit-approval-permission/index.js" }
    ],
    [
      4180,
      {
        "../../../../../shared/constants/metametrics": 3962,
        "../../../../contexts/metametrics": 4749,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/higher-order-components/with-modal-props": 4789,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../selectors": 5197,
        "../../../../store/actions": 5204,
        "../../../component-library": 4453,
        "../../../ui/box": 4607,
        "../../../ui/check-box": 4617,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = h(e("prop-types")),
                  o = e("react-redux"),
                  i = h(e("../../../../helpers/higher-order-components/with-modal-props")),
                  s = h(e("../../../ui/box")),
                  l = e("../../../component-library"),
                  u = e("../../../../helpers/constants/design-system"),
                  c = e("../../../../hooks/useI18nContext"),
                  d = h(e("../../../ui/check-box")),
                  p = e("../../../../store/actions"),
                  f = e("../../../../selectors"),
                  m = e("../../../../../shared/constants/metametrics"),
                  g = e("../../../../contexts/metametrics");
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
                const v = ({ hideModal: e }) => {
                  const [t, n] = (0, r.useState)(!1),
                    [a, i] = (0, r.useState)(!1),
                    [h, y] = (0, r.useState)(""),
                    v = (0, o.useSelector)(f.getDisabledRpcMethodPreferences),
                    b = (0, c.useI18nContext)(),
                    _ = (0, o.useDispatch)(),
                    w = (0, r.useContext)(g.MetaMetricsContext),
                    k = h === b("toggleEthSignModalFormValidation");
                  return r.default.createElement(
                    s.default,
                    {
                      className: "eth-sign-modal",
                      display: u.Display.Flex,
                      flexDirection: u.FlexDirection.Column,
                      justifyContent: u.JustifyContent.flexStart,
                      padding: 4
                    },
                    r.default.createElement(
                      s.default,
                      {
                        display: u.Display.Flex,
                        flexDirection: u.FlexDirection.Row,
                        marginBottom: 4,
                        justifyContent: u.JustifyContent.center
                      },
                      r.default.createElement(l.Icon, {
                        className: "eth-sign-modal__warning-icon",
                        name: l.IconName.Danger,
                        color: u.IconColor.errorDefault,
                        size: l.IconSize.Lg
                      }),
                      r.default.createElement(l.ButtonIcon, {
                        className: "eth-sign-modal__close",
                        iconName: l.IconName.Close,
                        size: u.Size.SM,
                        onClick: () => e(),
                        ariaLabel: b("close")
                      })
                    ),
                    r.default.createElement(
                      l.Text,
                      { variant: u.TextVariant.headingMd, textAlign: u.TextAlign.Center, marginBottom: 6 },
                      b("toggleEthSignModalTitle")
                    ),
                    r.default.createElement(
                      l.Text,
                      { variant: u.TextVariant.bodyMd },
                      b("toggleEthSignModalDescription"),
                      r.default.createElement(
                        l.ButtonLink,
                        { href: "https://support.metamask.io/hc/en-us/articles/14764161421467", externalLink: !0 },
                        b("learnMoreUpperCase")
                      )
                    ),
                    r.default.createElement(
                      l.BannerAlert,
                      { severity: u.Severity.Danger, marginTop: 6, marginBottom: 6 },
                      b("toggleEthSignModalBannerText"),
                      b("toggleEthSignModalBannerBoldText")
                    ),
                    a
                      ? r.default.createElement(l.FormTextField, {
                          id: "enter-eth-sign-text",
                          label: b("toggleEthSignModalFormLabel"),
                          error: h.length > 0 && !k,
                          helpText: h.length > 0 && !k && b("toggleEthSignModalFormError"),
                          onChange: (e) => y(e.target.value),
                          value: h,
                          onPaste: (e) => e.preventDefault()
                        })
                      : r.default.createElement(
                          s.default,
                          { flexDirection: u.FlexDirection.Row, alignItems: u.AlignItems.flexStart, gap: 2 },
                          r.default.createElement(d.default, {
                            id: "eth-sign__checkbox",
                            className: "eth-sign__checkbox",
                            dataTestId: "eth-sign__checkbox",
                            checked: t,
                            onClick: () => {
                              n(!t);
                            }
                          }),
                          r.default.createElement(
                            l.Label,
                            { htmlFor: "eth-sign__checkbox" },
                            r.default.createElement(l.Text, { variant: u.TextVariant.bodyMd, as: "span" }, b("toggleEthSignModalCheckBox"))
                          )
                        ),
                    r.default.createElement(
                      s.default,
                      {
                        display: u.Display.Flex,
                        flexDirection: u.FlexDirection.Row,
                        justifyContent: u.JustifyContent.spaceBetween,
                        gap: 4,
                        marginTop: 6
                      },
                      r.default.createElement(
                        l.ButtonSecondary,
                        { onClick: () => e(), size: l.ButtonSecondarySize.Lg, block: !0 },
                        b("cancel")
                      ),
                      a
                        ? r.default.createElement(
                            l.ButtonPrimary,
                            {
                              danger: !0,
                              block: !0,
                              disabled: !k,
                              onClick: () => {
                                _((0, p.setDisabledRpcMethodPreference)("eth_sign", !v.eth_sign)), e();
                              },
                              size: u.Size.LG
                            },
                            b("enableSnap")
                          )
                        : r.default.createElement(
                            l.ButtonPrimary,
                            {
                              block: !0,
                              disabled: !t,
                              size: u.Size.LG,
                              onClick: () => {
                                i(!0),
                                  w({
                                    category: m.MetaMetricsEventCategory.Settings,
                                    event: m.MetaMetricsEventName.OnboardingWalletAdvancedSettings,
                                    properties: { location: "Settings", enable_eth_sign: !0 }
                                  });
                              }
                            },
                            b("continue")
                          )
                    )
                  );
                };
                v.propTypes = { hideModal: a.default.func };
                n.default = (0, i.default)(v);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/eth-sign-modal/eth-sign-modal.js" }
    ],
    [
      4181,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("prop-types")) && r.__esModule ? r : { default: r };
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
                    return e ? n : t;
                  })(e);
                }
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
                let l,
                  u = 0;
                const c = (e) => {
                    const t = `anim_${++u}${Number(new Date())}`;
                    let n = `@keyframes ${t} {`;
                    return (
                      Object.keys(e).forEach((t) => {
                        (n += `${t} {`),
                          Object.keys(e[t]).forEach((r) => {
                            const a = `:${e[t][r]};`;
                            n += r + a;
                          }),
                          (n += "}");
                      }),
                      (n += "}"),
                      ((e) => {
                        l ||
                          ((l = document.createElement("style")),
                          document.getElementsByTagName("head")[0].appendChild(l),
                          (l = l.sheet || l.styleSheet)),
                          l.insertRule(e, (l.cssRules || l.rules).length);
                      })(n),
                      t
                    );
                  },
                  d = {
                    show: { animationDuration: "0.3s", animationTimingFunction: "ease-out" },
                    hide: { animationDuration: "0.3s", animationTimingFunction: "ease-out" },
                    showContentAnimation: c({ "0%": { opacity: 0 }, "100%": { opacity: 1 } }),
                    hideContentAnimation: c({ "0%": { opacity: 1 }, "100%": { opacity: 0 } }),
                    showBackdropAnimation: c({ "0%": { opacity: 0 }, "100%": { opacity: 0.9 } }),
                    hideBackdropAnimation: c({ "0%": { opacity: 0.9 }, "100%": { opacity: 0 } })
                  },
                  p = ["transitionend", "animationend"];
                class f extends a.Component {
                  constructor(...e) {
                    super(...e),
                      s(this, "content", null),
                      s(this, "state", { willHide: !0, hidden: !0 }),
                      s(this, "addTransitionListener", (e, t) => {
                        if (e) {
                          const n = function (r) {
                            (r && r.target !== e) ||
                              (((e, t) => {
                                0 !== p.length &&
                                  p.forEach(function (n) {
                                    !(function (e, t, n) {
                                      e.removeEventListener(t, n, !1);
                                    })(e, n, t);
                                  });
                              })(e, n),
                              t());
                          };
                          ((e, t) => {
                            0 !== p.length
                              ? p.forEach(function (n) {
                                  !(function (e, t, n) {
                                    e.addEventListener(t, n, !1);
                                  })(e, n, t);
                                })
                              : window.setTimeout(t, 0);
                          })(e, n);
                        }
                      }),
                      s(this, "handleBackdropClick", () => {
                        this.props.closeOnClick && this.hide();
                      }),
                      s(this, "hasHidden", () => this.state.hidden),
                      s(this, "leave", () => {
                        this.setState({ hidden: !0 }), this.props.onHide(this.state.hideSource);
                      }),
                      s(this, "enter", () => {
                        this.props.onShow();
                      }),
                      s(this, "show", () => {
                        this.state.hidden &&
                          (this.setState({ willHide: !1, hidden: !1 }),
                          setTimeout(
                            function () {
                              this.addTransitionListener(this.content, this.enter);
                            }.bind(this),
                            0
                          ));
                      }),
                      s(this, "hide", () => {
                        this.hasHidden() || this.setState({ willHide: !0 });
                      }),
                      s(this, "listenKeyboard", (e) => {
                        "function" == typeof this.props.keyboard ? this.props.keyboard(e) : this.closeOnEsc(e);
                      }),
                      s(this, "closeOnEsc", (e) => {
                        !this.props.keyboard || ("Escape" !== e.key && 27 !== e.keyCode) || this.hide();
                      }),
                      s(this, "UNSAFE_componentDidMount", () => {
                        window.addEventListener("keydown", this.listenKeyboard, !0);
                      }),
                      s(this, "UNSAFE_componentWillUnmount", () => {
                        window.removeEventListener("keydown", this.listenKeyboard, !0);
                      });
                  }
                  render() {
                    if (this.state.hidden) return null;
                    const { willHide: e } = this.state,
                      { modalStyle: t } = this.props,
                      n = {
                        animationName: e ? d.hideBackdropAnimation : d.showBackdropAnimation,
                        animationTimingFunction: (e ? d.hide : d.show).animationTimingFunction,
                        ...this.props.backdropStyle
                      },
                      r = {
                        animationDuration: (e ? d.hide : d.show).animationDuration,
                        animationName: e ? d.hideContentAnimation : d.showContentAnimation,
                        animationTimingFunction: (e ? d.hide : d.show).animationTimingFunction,
                        ...this.props.contentStyle
                      },
                      o = this.props.backdrop
                        ? a.default.createElement("div", {
                            className: "modal__backdrop",
                            style: n,
                            onClick: this.props.closeOnClick ? this.handleBackdropClick : null
                          })
                        : undefined;
                    return (
                      e && this.addTransitionListener(this.content, this.leave),
                      a.default.createElement(
                        "span",
                        null,
                        a.default.createElement(
                          "div",
                          { className: "modal", style: t },
                          a.default.createElement(
                            "div",
                            { className: "modal__content", ref: (e) => (this.content = e), tabIndex: "-1", style: r },
                            this.props.children
                          )
                        ),
                        o
                      )
                    );
                  }
                }
                s(f, "propTypes", {
                  backdrop: o.default.bool,
                  backdropStyle: o.default.object,
                  closeOnClick: o.default.bool,
                  contentStyle: o.default.object,
                  keyboard: o.default.bool,
                  modalStyle: o.default.object,
                  onShow: o.default.func,
                  onHide: o.default.func,
                  children: o.default.node
                }),
                  s(f, "defaultProps", {
                    onShow: () => undefined,
                    onHide: () => undefined,
                    keyboard: !0,
                    backdrop: !0,
                    closeOnClick: !0,
                    modalStyle: {},
                    backdropStyle: {},
                    contentStyle: {},
                    children: []
                  });
                n.default = f;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/fade-modal.js" }
    ],
    [
      4182,
      {
        "../../../../helpers/constants/routes": 4776,
        "../../../../store/actions": 5204,
        "../../../ui/button": 4611,
        "../../../ui/identicon": 4664,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = p(e("prop-types")),
                  a = d(e("react")),
                  o = e("react-redux"),
                  i = d(e("../../../../store/actions")),
                  s = p(e("../../../ui/identicon")),
                  l = p(e("../../../ui/button")),
                  u = e("../../../../helpers/constants/routes");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = c(t);
                  if (n && n.has(e)) return n.get(e);
                  var r = { __proto__: null },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                      var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                      i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                    }
                  return (r.default = e), n && n.set(e, r), r;
                }
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e, t, n) {
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
                class m extends a.Component {
                  constructor(...e) {
                    super(...e), f(this, "state", {});
                  }
                  render() {
                    const { token: e, hideToken: t, hideModal: n, history: r } = this.props,
                      { symbol: o, address: i, image: c } = e;
                    return a.default.createElement(
                      "div",
                      { className: "hide-token-confirmation" },
                      a.default.createElement(
                        "div",
                        { className: "hide-token-confirmation__container" },
                        a.default.createElement("div", { className: "hide-token-confirmation__title" }, this.context.t("hideTokenPrompt")),
                        a.default.createElement(s.default, {
                          className: "hide-token-confirmation__identicon",
                          diameter: 45,
                          address: i,
                          image: c
                        }),
                        a.default.createElement("div", { className: "hide-token-confirmation__symbol" }, o),
                        a.default.createElement("div", { className: "hide-token-confirmation__copy" }, this.context.t("readdToken")),
                        a.default.createElement(
                          "div",
                          { className: "hide-token-confirmation__buttons" },
                          a.default.createElement(
                            l.default,
                            {
                              type: "secondary",
                              className: "hide-token-confirmation__button",
                              "data-testid": "hide-token-confirmation__cancel",
                              onClick: () => n()
                            },
                            this.context.t("cancel")
                          ),
                          a.default.createElement(
                            l.default,
                            {
                              type: "primary",
                              className: "hide-token-confirmation__button",
                              "data-testid": "hide-token-confirmation__hide",
                              onClick: () => {
                                t(i), r.push(u.DEFAULT_ROUTE);
                              }
                            },
                            this.context.t("hide")
                          )
                        )
                      )
                    );
                  }
                }
                f(m, "contextTypes", { t: r.default.func }),
                  f(m, "propTypes", {
                    hideToken: r.default.func.isRequired,
                    hideModal: r.default.func.isRequired,
                    token: r.default.shape({ symbol: r.default.string, address: r.default.string, image: r.default.string }),
                    history: r.default.object
                  });
                n.default = (0, o.connect)(
                  function (e) {
                    return { token: e.appState.modal.modalState.props.token, history: e.appState.modal.modalState.props.history };
                  },
                  function (e) {
                    return {
                      hideModal: () => e(i.hideModal()),
                      hideToken: (t) => {
                        e(i.ignoreTokens({ tokensToIgnore: t })).then(() => {
                          e(i.hideModal());
                        });
                      }
                    };
                  }
                )(m);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/hide-token-confirmation-modal/hide-token-confirmation-modal.js" }
    ],
    [
      4183,
      { "./hide-token-confirmation-modal": 4182 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./hide-token-confirmation-modal")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/hide-token-confirmation-modal/index.js" }
    ],
    [
      4184,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/constants/zendesk-url": 4781,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "../../hold-to-reveal-button": 4136,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function ({ isOpen: e, onClose: t, onLongPressed: n, holdToRevealType: u }) {
                    const c = (0, i.useI18nContext)(),
                      d = "SRP" === u ? "holdToRevealSRPTitle" : "holdToRevealPrivateKeyTitle",
                      p = "SRP" === u ? "holdToRevealSRP" : "holdToRevealPrivateKey",
                      f = "SRP" === u ? "holdToRevealContent" : "holdToRevealContentPrivateKey",
                      m = `${f}1`,
                      g = `${f}2`;
                    c("holdToRevealContentPrivateKey1"),
                      c("holdToRevealContentPrivateKey2"),
                      c("holdToRevealContent1"),
                      c("holdToRevealContent2");
                    const h = () =>
                      r.default.createElement(
                        s.Box,
                        { display: a.Display.Flex, flexDirection: a.FlexDirection.Column, gap: 4, marginTop: 6, marginBottom: 6 },
                        r.default.createElement(
                          s.Text,
                          { variant: a.TextVariant.bodyMd },
                          c(m, [
                            r.default.createElement(
                              s.Text,
                              { key: "hold-to-reveal-2", variant: a.TextVariant.bodyMdBold, as: "span" },
                              c(g)
                            )
                          ])
                        ),
                        r.default.createElement(
                          s.Text,
                          { variant: a.TextVariant.bodyMdBold },
                          c("holdToRevealContent3", [
                            r.default.createElement(
                              s.Text,
                              { key: "hold-to-reveal-4", variant: a.TextVariant.bodyMd, as: "span", display: a.Display.Inline },
                              c("holdToRevealContent4")
                            ),
                            r.default.createElement(
                              s.Button,
                              {
                                key: "hold-to-reveal-5",
                                variant: s.ButtonVariant.Link,
                                size: s.ButtonSize.Inherit,
                                href: o.default.NON_CUSTODIAL_WALLET,
                                externalLink: !0
                              },
                              c("holdToRevealContent5")
                            )
                          ])
                        )
                      );
                    return r.default.createElement(
                      s.Modal,
                      { isOpen: e, onClose: t },
                      r.default.createElement(s.ModalOverlay, null),
                      r.default.createElement(
                        s.ModalContent,
                        null,
                        r.default.createElement(s.ModalHeader, { onClose: t }, c(d)),
                        r.default.createElement(
                          s.Box,
                          { display: a.Display.Flex, flexDirection: a.FlexDirection.Column },
                          r.default.createElement(h, null),
                          r.default.createElement(l.default, { buttonText: c(p), onLongPressed: n })
                        )
                      )
                    );
                  });
                var r = u(e("react")),
                  a = e("../../../../helpers/constants/design-system"),
                  o = u(e("../../../../helpers/constants/zendesk-url")),
                  i = e("../../../../hooks/useI18nContext"),
                  s = e("../../../component-library"),
                  l = u(e("../../hold-to-reveal-button"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/hold-to-reveal-modal/hold-to-reveal-modal.tsx" }
    ],
    [
      4185,
      { "./modal": 4188 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Modal", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./modal")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/index.js" }
    ],
    [
      4186,
      { "./keyring-snap-removal-result-modal": 4187 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./keyring-snap-removal-result-modal")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/keyring-snap-removal-modal/index.ts" }
    ],
    [
      4187,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("react-redux"),
                  i = e("../../../../helpers/constants/design-system"),
                  s = e("../../../component-library"),
                  l = e("../../../../hooks/useI18nContext"),
                  u = e("../../../../selectors");
                n.default = ({ isOpen: e, onClose: t }) => {
                  const n = (0, l.useI18nContext)(),
                    r = (0, o.useSelector)(u.getKeyringSnapRemovalResult);
                  return a.default.createElement(
                    a.default.Fragment,
                    null,
                    a.default.createElement(
                      s.Modal,
                      { isOpen: e, onClose: () => t() },
                      a.default.createElement(s.ModalOverlay, null),
                      a.default.createElement(
                        s.ModalContent,
                        { modalDialogProps: { display: i.Display.Flex, flexDirection: i.FlexDirection.Column, gap: 4 } },
                        a.default.createElement(s.ModalHeader, { onClose: t }, ""),
                        a.default.createElement(
                          s.Box,
                          {
                            display: i.Display.Flex,
                            flexDirection: i.FlexDirection.Column,
                            justifyContent: i.JustifyContent.center,
                            alignItems: i.AlignItems.center
                          },
                          a.default.createElement(s.Icon, {
                            name: "success" === r.result ? s.IconName.Confirmation : s.IconName.Danger,
                            color: "success" === r.result ? i.IconColor.successDefault : i.IconColor.errorDefault,
                            size: s.IconSize.Xl,
                            marginBottom: 4
                          }),
                          a.default.createElement(
                            s.Text,
                            { variant: i.TextVariant.bodyMdBold, textAlign: i.TextAlign.Center },
                            n("keyringSnapRemovalResult1", [
                              r.snapName,
                              "failed" === r.result ? n("keyringSnapRemovalResultNotSuccessful") : ""
                            ])
                          )
                        )
                      )
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/keyring-snap-removal-modal/keyring-snap-removal-result-modal.tsx" }
    ],
    [
      4188,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../helpers/utils/is-mobile-view": 4801,
        "../../../pages/onboarding-flow/add-network-modal": 4968,
        "../../../store/actions": 5204,
        "./confirm-delete-network": 4165,
        "./confirm-remove-account": 4168,
        "./confirm-reset-account": 4171,
        "./convert-token-to-nft-modal/convert-token-to-nft-modal": 4174,
        "./customize-nonce": 4176,
        "./edit-approval-permission": 4179,
        "./eth-sign-modal/eth-sign-modal": 4180,
        "./fade-modal": 4181,
        "./hide-token-confirmation-modal": 4183,
        "./new-account-modal": 4189,
        "./qr-scanner": 4194,
        "./reject-transactions": 4197,
        "./transaction-confirmed": 4200,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = C(e("prop-types")),
                  a = E(e("react")),
                  o = e("react-redux"),
                  i = e("../../../../app/scripts/lib/util"),
                  s = e("../../../../shared/constants/app"),
                  l = C(e("../../../helpers/utils/is-mobile-view")),
                  u = E(e("../../../store/actions")),
                  c = C(e("../../../pages/onboarding-flow/add-network-modal")),
                  d = C(e("./hide-token-confirmation-modal")),
                  p = C(e("./qr-scanner")),
                  f = C(e("./confirm-remove-account")),
                  m = C(e("./confirm-reset-account")),
                  g = C(e("./transaction-confirmed")),
                  h = C(e("./confirm-delete-network")),
                  y = C(e("./convert-token-to-nft-modal/convert-token-to-nft-modal")),
                  v = C(e("./customize-nonce")),
                  b = C(e("./edit-approval-permission")),
                  _ = C(e("./eth-sign-modal/eth-sign-modal")),
                  w = C(e("./fade-modal")),
                  k = C(e("./new-account-modal")),
                  T = C(e("./reject-transactions"));
                function x(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (x = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function E(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = x(t);
                  if (n && n.has(e)) return n.get(e);
                  var r = { __proto__: null },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                      var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                      i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                    }
                  return (r.default = e), n && n.set(e, r), r;
                }
                function C(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const M = {
                    transform: "translate3d(-50%, 0, 0px)",
                    border: "1px solid var(--color-border-default)",
                    borderRadius: "8px",
                    backgroundColor: "var(--color-background-default)",
                    boxShadow: "var(--shadow-size-sm) var(--color-shadow-default)"
                  },
                  P = { ...M, width: "344px", top: "15%" },
                  O = { ...M, width: "309px", top: "12.5%" },
                  S = {
                    ONBOARDING_ADD_NETWORK: {
                      contents: a.default.createElement(c.default, null),
                      mobileModalStyle: {
                        width: "95%",
                        boxShadow: "var(--shadow-size-xs) var(--color-shadow-default)",
                        borderRadius: "4px",
                        top: "10%",
                        transform: "none",
                        left: "0",
                        right: "0",
                        margin: "0 auto"
                      },
                      laptopModalStyle: {
                        width: "335px",
                        boxShadow: "var(--shadow-size-xs) var(--color-shadow-default)",
                        borderRadius: "4px",
                        top: "10%",
                        transform: "none",
                        left: "0",
                        right: "0",
                        margin: "0 auto"
                      },
                      contentStyle: { borderRadius: "4px" }
                    },
                    NEW_ACCOUNT: {
                      contents: a.default.createElement(k.default, null),
                      mobileModalStyle: {
                        width: "95%",
                        top: "10%",
                        boxShadow: "var(--shadow-size-xs) var(--color-shadow-default)",
                        transform: "none",
                        left: "0",
                        right: "0",
                        margin: "0 auto",
                        borderRadius: "10px"
                      },
                      laptopModalStyle: {
                        width: "375px",
                        top: "10%",
                        boxShadow: "var(--shadow-size-xs) var(--color-shadow-default)",
                        transform: "none",
                        left: "0",
                        right: "0",
                        margin: "0 auto",
                        borderRadius: "10px"
                      },
                      contentStyle: { borderRadius: "10px" }
                    },
                    HIDE_TOKEN_CONFIRMATION: {
                      contents: a.default.createElement(d.default, null),
                      mobileModalStyle: { width: "95%", top: (0, i.getEnvironmentType)() === s.ENVIRONMENT_TYPE_POPUP ? "52vh" : "36.5vh" },
                      laptopModalStyle: {
                        width: (0, i.getEnvironmentType)() === s.ENVIRONMENT_TYPE_POPUP ? "357px" : "449px",
                        top: "calc(33% + 45px)",
                        paddingLeft: (0, i.getEnvironmentType)() === s.ENVIRONMENT_TYPE_POPUP ? "16px" : null,
                        paddingRight: (0, i.getEnvironmentType)() === s.ENVIRONMENT_TYPE_POPUP ? "16px" : null
                      }
                    },
                    CONFIRM_RESET_ACCOUNT: {
                      contents: a.default.createElement(m.default, null),
                      mobileModalStyle: { ...O },
                      laptopModalStyle: { ...P },
                      contentStyle: { borderRadius: "8px" }
                    },
                    ETH_SIGN: {
                      contents: a.default.createElement(_.default, null),
                      mobileModalStyle: { ...O },
                      laptopModalStyle: { ...P },
                      contentStyle: { borderRadius: "8px" }
                    },
                    CONFIRM_REMOVE_ACCOUNT: {
                      contents: a.default.createElement(f.default, null),
                      mobileModalStyle: { ...O },
                      laptopModalStyle: { ...P },
                      contentStyle: { borderRadius: "8px" }
                    },
                    CONVERT_TOKEN_TO_NFT: {
                      contents: a.default.createElement(y.default, null),
                      mobileModalStyle: { ...O },
                      laptopModalStyle: { ...P },
                      contentStyle: { borderRadius: "8px" }
                    },
                    CONFIRM_DELETE_NETWORK: {
                      contents: a.default.createElement(h.default, null),
                      mobileModalStyle: { ...O },
                      laptopModalStyle: { ...P },
                      contentStyle: { borderRadius: "8px" }
                    },
                    EDIT_APPROVAL_PERMISSION: {
                      contents: a.default.createElement(b.default, null),
                      mobileModalStyle: {
                        width: "95vw",
                        height: "100vh",
                        top: "50px",
                        transform: "none",
                        left: "0",
                        right: "0",
                        margin: "0 auto"
                      },
                      laptopModalStyle: {
                        width: "auto",
                        height: "0px",
                        top: "80px",
                        left: "0px",
                        transform: "none",
                        margin: "0 auto",
                        position: "relative"
                      },
                      contentStyle: { borderRadius: "8px" }
                    },
                    TRANSACTION_CONFIRMED: {
                      disableBackdropClick: !0,
                      contents: a.default.createElement(g.default, null),
                      mobileModalStyle: { ...O },
                      laptopModalStyle: { ...P },
                      contentStyle: { borderRadius: "8px" }
                    },
                    QR_SCANNER: {
                      contents: a.default.createElement(p.default, null),
                      mobileModalStyle: { ...O },
                      laptopModalStyle: { ...P },
                      contentStyle: { borderRadius: "8px" }
                    },
                    REJECT_TRANSACTIONS: {
                      contents: a.default.createElement(T.default, null),
                      mobileModalStyle: { ...O },
                      laptopModalStyle: { ...P },
                      contentStyle: { borderRadius: "8px" }
                    },
                    CUSTOMIZE_NONCE: {
                      contents: a.default.createElement(v.default, null),
                      mobileModalStyle: { ...O },
                      laptopModalStyle: { ...P },
                      contentStyle: { borderRadius: "8px" }
                    },
                    DEFAULT: { contents: [], mobileModalStyle: {}, laptopModalStyle: {} }
                  },
                  j = { backgroundColor: "var(--color-overlay-default)" };
                class N extends a.Component {
                  hide() {
                    this.modalRef.hide();
                  }
                  show() {
                    this.modalRef.show();
                  }
                  UNSAFE_componentWillReceiveProps(e, t) {
                    e.active ? this.show() : this.props.active && this.hide();
                  }
                  render() {
                    const e = S[this.props.modalState.name || "DEFAULT"],
                      { contents: t, disableBackdropClick: n = !1 } = e,
                      r = e[(0, l.default)() ? "mobileModalStyle" : "laptopModalStyle"],
                      o = e.contentStyle || {};
                    return a.default.createElement(
                      w.default,
                      {
                        keyboard: !1,
                        onHide: () => {
                          e.onHide && e.onHide({ hideWarning: this.props.hideWarning }), this.props.hideModal(e.customOnHideOpts);
                        },
                        ref: (e) => {
                          this.modalRef = e;
                        },
                        modalStyle: r,
                        contentStyle: o,
                        backdropStyle: j,
                        closeOnClick: !n
                      },
                      t
                    );
                  }
                }
                var I, D, R;
                (I = N),
                  (D = "propTypes"),
                  (R = {
                    active: r.default.bool.isRequired,
                    hideModal: r.default.func.isRequired,
                    hideWarning: r.default.func.isRequired,
                    modalState: r.default.object.isRequired
                  }),
                  (D = (function (e) {
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
                  })(D)) in I
                    ? Object.defineProperty(I, D, { value: R, enumerable: !0, configurable: !0, writable: !0 })
                    : (I[D] = R);
                n.default = (0, o.connect)(
                  function (e) {
                    return { active: e.appState.modal.open, modalState: e.appState.modal.modalState };
                  },
                  function (e) {
                    return {
                      hideModal: (t) => {
                        e(u.hideModal()), t && t.action && e(t.action(...t.args));
                      },
                      hideWarning: () => {
                        e(u.hideWarning());
                      }
                    };
                  }
                )(N);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/modal.js" }
    ],
    [
      4189,
      { "./new-account-modal.container": 4191 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./new-account-modal.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/new-account-modal/index.js" }
    ],
    [
      4190,
      { "../../../component-library": 4453, "../../../ui/button/button.component": 4610, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = s(e("prop-types")),
                  o = s(e("../../../ui/button/button.component")),
                  i = e("../../../component-library");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u(e, t, n) {
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
                class c extends r.Component {
                  constructor(...e) {
                    super(...e),
                      u(this, "state", { alias: this.context.t("newAccountNumberName", [this.props.newAccountNumber]) }),
                      u(this, "onChange", (e) => {
                        this.setState({ alias: e.target.value });
                      }),
                      u(this, "onSubmit", () => {
                        this.props.onSave(this.state.alias).then(this.props.hideModal);
                      }),
                      u(this, "onKeyPress", (e) => {
                        "Enter" === e.key && this.state.alias && this.onSubmit();
                      });
                  }
                  render() {
                    const { t: e } = this.context;
                    return r.default.createElement(
                      "div",
                      { className: "new-account-modal" },
                      r.default.createElement(
                        "div",
                        { className: "new-account-modal__content" },
                        r.default.createElement(
                          "div",
                          { className: "new-account-modal__content__header" },
                          e("newAccount"),
                          r.default.createElement(i.ButtonIcon, {
                            className: "new-account-modal__content__header-close",
                            ariaLabel: e("close"),
                            onClick: this.props.hideModal,
                            iconName: i.IconName.Close
                          })
                        ),
                        r.default.createElement("div", { className: "new-account-modal__input-label" }, e("accountName")),
                        r.default.createElement("input", {
                          type: "text",
                          className: "new-account-modal__input",
                          onChange: this.onChange,
                          onKeyPress: this.onKeyPress,
                          value: this.state.alias,
                          autoFocus: !0
                        })
                      ),
                      r.default.createElement(
                        "div",
                        { className: "new-account-modal__footer" },
                        r.default.createElement(o.default, { type: "secondary", onClick: this.props.hideModal }, e("cancel")),
                        r.default.createElement(
                          o.default,
                          { type: "primary", onClick: this.onSubmit, disabled: !this.state.alias },
                          e("save")
                        )
                      )
                    );
                  }
                }
                (n.default = c),
                  u(c, "contextTypes", { t: a.default.func }),
                  u(c, "propTypes", {
                    hideModal: a.default.func.isRequired,
                    newAccountNumber: a.default.number.isRequired,
                    onSave: a.default.func.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/new-account-modal/new-account-modal.component.js" }
    ],
    [
      4191,
      { "../../../../store/actions": 5204, "./new-account-modal.component": 4190, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("../../../../store/actions")),
                  i = (r = e("./new-account-modal.component")) && r.__esModule ? r : { default: r };
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (s = function (e) {
                    return e ? n : t;
                  })(e);
                }
                n.default = (0, a.connect)(
                  function (e) {
                    return { ...(e.appState.modal.modalState.props || {}) };
                  },
                  function (e) {
                    return {
                      hideModal: () => e(o.hideModal()),
                      createAccount: (t) => e(o.addNewAccount()).then((n) => (t && e(o.setAccountLabel(n, t)), n))
                    };
                  },
                  function (e, t) {
                    const { onCreateNewAccount: n } = e,
                      { createAccount: r } = t;
                    return { ...e, ...t, onSave: (e) => r(e).then((e) => n(e)) };
                  }
                )(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/new-account-modal/new-account-modal.container.js" }
    ],
    [
      4192,
      { "./nickname-popovers.component": 4193 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./nickname-popovers.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/nickname-popovers/index.js" }
    ],
    [
      4193,
      {
        "../../../../selectors": 5197,
        "../../../../store/actions": 5204,
        "../../../ui/nickname-popover": 4689,
        "../../../ui/update-nickname-popover/update-nickname-popover": 4744,
        "@metamask/etherscan-link": 1255,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = d(e("prop-types")),
                  i = e("@metamask/etherscan-link"),
                  s = e("../../../../store/actions"),
                  l = e("../../../../selectors"),
                  u = d(e("../../../ui/nickname-popover")),
                  c = d(e("../../../ui/update-nickname-popover/update-nickname-popover"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const f = "SHOW_NICKNAME_POPOVER",
                  m = "ADD_NICKNAME_POPOVER",
                  g = ({ address: e, onClose: t }) => {
                    const n = (0, a.useDispatch)(),
                      [o, d] = (0, r.useState)(f),
                      p = (0, a.useSelector)(l.getAddressBook),
                      g = (0, a.useSelector)(l.getCurrentChainId),
                      h = p.find((t) => t.address === e),
                      y = null == h ? void 0 : h.name,
                      v = (0, a.useSelector)(l.getRpcPrefsForCurrentProvider),
                      b = (0, i.getAccountLink)(e, g, { blockExplorerUrl: (null == v ? void 0 : v.blockExplorerUrl) ?? null }, null);
                    return o === m
                      ? r.default.createElement(c.default, {
                          address: e,
                          nickname: y || null,
                          memo: (null == h ? void 0 : h.memo) || null,
                          onClose: () => d(f),
                          onAdd: (e, t, r) => n((0, s.addToAddressBook)(e, t, r))
                        })
                      : r.default.createElement(u.default, {
                          address: e,
                          nickname: y || null,
                          onClose: t,
                          onAdd: () => d(m),
                          explorerLink: b
                        });
                  };
                g.propTypes = { address: o.default.string, onClose: o.default.func };
                n.default = g;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/nickname-popovers/nickname-popovers.component.js" }
    ],
    [
      4194,
      { "./qr-scanner.container": 4196 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (r = e("./qr-scanner.container")) && r.__esModule ? r : { default: r };
                n.default = a.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/qr-scanner/index.js" }
    ],
    [
      4195,
      {
        "../../../../../app/scripts/lib/util": 82,
        "../../../../../shared/constants/app": 3953,
        "../../../../../shared/constants/time": 3972,
        "../../../../helpers/utils/util": 4812,
        "../../../../helpers/utils/webcam-utils": 4813,
        "../../../ui/page-container/page-container-footer/page-container-footer.component": 4695,
        "../../../ui/spinner": 4717,
        "@zxing/library": 2214,
        loglevel: 3322,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = m(e("prop-types")),
                  o = m(e("loglevel")),
                  i = e("@zxing/library"),
                  s = e("../../../../../app/scripts/lib/util"),
                  l = e("../../../../../shared/constants/app"),
                  u = e("../../../../../shared/constants/time"),
                  c = m(e("../../../ui/spinner")),
                  d = m(e("../../../../helpers/utils/webcam-utils")),
                  p = e("../../../../helpers/utils/util"),
                  f = m(e("../../../ui/page-container/page-container-footer/page-container-footer.component"));
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function h(e, t, n) {
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
                const y = "ACCESSING_CAMERA",
                  v = "NEED_TO_ALLOW_ACCESS",
                  b = "READY";
                class _ extends r.Component {
                  constructor(e) {
                    super(e),
                      h(this, "checkEnvironment", async () => {
                        try {
                          const { environmentReady: e } = await d.default.checkStatus();
                          if (!e && (0, s.getEnvironmentType)() !== l.ENVIRONMENT_TYPE_FULLSCREEN) {
                            const e = (0, p.getURL)(window.location.href),
                              t = null == e ? void 0 : e.hash,
                              n = t ? t.substring(1) : null;
                            global.platform.openExtensionInBrowser(n);
                          }
                        } catch (e) {
                          this.mounted && this.setState({ error: e });
                        }
                        this.initCamera();
                      }),
                      h(this, "checkPermissions", async () => {
                        try {
                          const { permissions: e } = await d.default.checkStatus();
                          if (e) {
                            if ((await new Promise((e) => setTimeout(e, 2 * u.SECOND)), !this.mounted)) return;
                            this.setState({ ready: b });
                          } else this.mounted && (this.permissionChecker = setTimeout(this.checkPermissions, u.SECOND));
                        } catch (e) {
                          this.mounted && this.setState({ error: e });
                        }
                      }),
                      h(this, "initCamera", async () => {
                        this.codeReader || (this.codeReader = new i.BrowserQRCodeReader());
                        try {
                          await this.codeReader.getVideoInputDevices(), this.checkPermissions();
                          const e = await this.codeReader.decodeFromInputVideoDevice(undefined, "video"),
                            t = this.parseContent(e.text);
                          if (!this.mounted) return;
                          "unknown" === t.type
                            ? this.setState({ error: new Error(this.context.t("unknownQrCode")) })
                            : (this.props.qrCodeDetected(t), this.stopAndClose());
                        } catch (e) {
                          if (!this.mounted) return;
                          "NotAllowedError" === e.name
                            ? (o.default.info(`Permission denied: '${e}'`), this.setState({ ready: v }))
                            : this.setState({ error: e });
                        }
                      }),
                      h(this, "stopAndClose", () => {
                        this.codeReader && this.teardownCodeReader(), this.props.hideModal();
                      }),
                      h(this, "tryAgain", () => {
                        clearTimeout(this.permissionChecker),
                          this.codeReader && this.teardownCodeReader(),
                          this.setState(this.getInitialState(), () => {
                            this.checkEnvironment();
                          });
                      }),
                      (this.state = this.getInitialState()),
                      (this.codeReader = null),
                      (this.permissionChecker = null),
                      (this.mounted = !1),
                      this.props.qrCodeDetected(null);
                  }
                  componentDidMount() {
                    (this.mounted = !0), this.checkEnvironment();
                  }
                  componentDidUpdate(e, t) {
                    const { ready: n } = this.state;
                    t.ready !== n && (n === b ? this.initCamera() : n === v && this.checkPermissions());
                  }
                  getInitialState() {
                    return { ready: y, error: null };
                  }
                  componentWillUnmount() {
                    (this.mounted = !1), clearTimeout(this.permissionChecker), this.teardownCodeReader();
                  }
                  teardownCodeReader() {
                    this.codeReader && (this.codeReader.reset(), this.codeReader.stop(), (this.codeReader = null));
                  }
                  parseContent(e) {
                    let t = "unknown",
                      n = {};
                    return (
                      e.split("ethereum:").length > 1
                        ? ((t = "address"), (n = { address: e.split("ethereum:")[1] }))
                        : "0x" === e.substring(0, 2).toLowerCase() && ((t = "address"), (n = { address: e })),
                      { type: t, values: n }
                    );
                  }
                  renderError() {
                    const { t: e } = this.context,
                      { error: t } = this.state;
                    let n, a;
                    return (
                      "NO_WEBCAM_FOUND" === t.type
                        ? ((n = e("noWebcamFoundTitle")), (a = e("noWebcamFound")))
                        : t.message === e("unknownQrCode")
                        ? (a = e("unknownQrCode"))
                        : ((n = e("generalCameraErrorTitle")), (a = e("generalCameraError"))),
                      r.default.createElement(
                        r.default.Fragment,
                        null,
                        r.default.createElement(
                          "div",
                          { className: "qr-scanner__image" },
                          r.default.createElement("img", { src: "images/webcam.svg", width: "70", height: "70", alt: "" })
                        ),
                        n ? r.default.createElement("div", { className: "qr-scanner__title" }, n) : null,
                        r.default.createElement("div", { className: "qr-scanner__error" }, a),
                        r.default.createElement(f.default, {
                          onCancel: this.stopAndClose,
                          onSubmit: this.tryAgain,
                          cancelText: e("cancel"),
                          submitText: e("tryAgain")
                        })
                      )
                    );
                  }
                  renderVideo() {
                    const { t: e } = this.context,
                      { ready: t } = this.state;
                    let n;
                    return (
                      t === y
                        ? (n = e("accessingYourCamera"))
                        : t === b
                        ? (n = e("scanInstructions"))
                        : t === v && (n = e("youNeedToAllowCameraAccess")),
                      r.default.createElement(
                        r.default.Fragment,
                        null,
                        r.default.createElement("div", { className: "qr-scanner__title" }, `${e("scanQrCode")}`),
                        r.default.createElement(
                          "div",
                          { className: "qr-scanner__content" },
                          r.default.createElement(
                            "div",
                            { className: "qr-scanner__content__video-wrapper" },
                            r.default.createElement("video", { id: "video", style: { display: t === b ? "block" : "none" } }),
                            t === b ? null : r.default.createElement(c.default, { color: "var(--color-warning-default)" })
                          )
                        ),
                        r.default.createElement("div", { className: "qr-scanner__status" }, n)
                      )
                    );
                  }
                  render() {
                    const { error: e } = this.state;
                    return r.default.createElement(
                      "div",
                      { className: "qr-scanner" },
                      r.default.createElement("div", { className: "qr-scanner__close", onClick: this.stopAndClose }),
                      e ? this.renderError() : this.renderVideo()
                    );
                  }
                }
                (n.default = _),
                  h(_, "propTypes", { hideModal: a.default.func.isRequired, qrCodeDetected: a.default.func.isRequired }),
                  h(_, "contextTypes", { t: a.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/qr-scanner/qr-scanner.component.js" }
    ],
    [
      4196,
      { "../../../../store/actions": 5204, "./qr-scanner.component": 4195, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../../store/actions"),
                  i = (r = e("./qr-scanner.component")) && r.__esModule ? r : { default: r };
                n.default = (0, a.connect)(null, (e) => ({
                  hideModal: () => e((0, o.hideModal)()),
                  qrCodeDetected: (t) => e((0, o.qrCodeDetected)(t))
                }))(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/qr-scanner/qr-scanner.container.js" }
    ],
    [
      4197,
      { "./reject-transactions.container": 4199 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./reject-transactions.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/reject-transactions/index.js" }
    ],
    [
      4198,
      { "../../modal": 4159, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = s(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = s(e("../../modal"));
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e, t, n) {
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
                class u extends a.PureComponent {
                  constructor(...e) {
                    super(...e),
                      l(this, "onSubmit", async () => {
                        const { onSubmit: e, hideModal: t } = this.props;
                        await e(), t();
                      });
                  }
                  render() {
                    const { t: e } = this.context,
                      { hideModal: t, unapprovedTxCount: n, isRequestType: r } = this.props;
                    return a.default.createElement(
                      o.default,
                      {
                        headerText: e(r ? "rejectRequestsN" : "rejectTxsN", [n]),
                        onClose: t,
                        onSubmit: this.onSubmit,
                        onCancel: t,
                        submitText: e("rejectAll"),
                        cancelText: e("cancel")
                      },
                      a.default.createElement(
                        "div",
                        null,
                        a.default.createElement(
                          "div",
                          { className: "reject-transactions__description" },
                          e(r ? "rejectRequestsDescription" : "rejectTxsDescription", [n])
                        )
                      )
                    );
                  }
                }
                (n.default = u),
                  l(u, "contextTypes", { t: r.default.func.isRequired }),
                  l(u, "propTypes", {
                    onSubmit: r.default.func.isRequired,
                    hideModal: r.default.func.isRequired,
                    unapprovedTxCount: r.default.number.isRequired,
                    isRequestType: r.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/reject-transactions/reject-transactions.component.js" }
    ],
    [
      4199,
      {
        "../../../../helpers/higher-order-components/with-modal-props": 4789,
        "./reject-transactions.component": 4198,
        "react-redux": 3655,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = e("react-redux"),
                  a = e("redux"),
                  o = s(e("../../../../helpers/higher-order-components/with-modal-props")),
                  i = s(e("./reject-transactions.component"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = (0, a.compose)(
                  o.default,
                  (0, r.connect)((e, t) => {
                    const { unapprovedTxCount: n } = t;
                    return { unapprovedTxCount: n };
                  })
                )(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/reject-transactions/reject-transactions.container.js" }
    ],
    [
      4200,
      { "./transaction-confirmed.container": 4202 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-confirmed.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/transaction-confirmed/index.js" }
    ],
    [
      4201,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../component-library": 4453,
        "../../modal": 4159,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("../../modal")),
                  i = e("../../../component-library"),
                  s = e("../../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c(e, t, n) {
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
                class d extends r.PureComponent {
                  constructor(...e) {
                    super(...e),
                      c(this, "handleSubmit", () => {
                        const { hideModal: e, onSubmit: t } = this.props;
                        e(), t && "function" == typeof t && t();
                      });
                  }
                  render() {
                    const { t: e } = this.context;
                    return r.default.createElement(
                      o.default,
                      { onSubmit: this.handleSubmit, submitText: e("ok") },
                      r.default.createElement(
                        "div",
                        { className: "transaction-confirmed__content" },
                        r.default.createElement(i.Icon, { name: i.IconName.Check, color: s.IconColor.successDefault, size: i.IconSize.Xl }),
                        r.default.createElement("div", { className: "transaction-confirmed__title" }, `${e("confirmed")}!`),
                        r.default.createElement(
                          "div",
                          { className: "transaction-confirmed__description" },
                          e("initialTransactionConfirmed")
                        )
                      )
                    );
                  }
                }
                (n.default = d),
                  c(d, "contextTypes", { t: a.default.func }),
                  c(d, "propTypes", { onSubmit: a.default.func, hideModal: a.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/transaction-confirmed/transaction-confirmed.component.js" }
    ],
    [
      4202,
      { "../../../../helpers/higher-order-components/with-modal-props": 4789, "./transaction-confirmed.component": 4201 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = o(e("../../../../helpers/higher-order-components/with-modal-props")),
                  a = o(e("./transaction-confirmed.component"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = (0, r.default)(a.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/modals/transaction-confirmed/transaction-confirmed.container.js" }
    ],
    [
      4203,
      { "./multi-layer-fee-message": 4204 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./multi-layer-fee-message")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/multilayer-fee-message/index.js" }
    ],
    [
      4204,
      {
        "../../../../shared/constants/common": 3955,
        "../../../../shared/modules/Numeric": 3984,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/common": 4769,
        "../../../helpers/utils/optimism/fetchEstimatedL1Fee": 4805,
        "../../../selectors": 5197,
        "../transaction-detail-item/transaction-detail-item.component": 4364,
        "../user-preferenced-currency-display": 4378,
        "@sentry/browser": 1982,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = v);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = h(e("prop-types")),
                  i = e("@sentry/browser"),
                  s = h(e("../transaction-detail-item/transaction-detail-item.component")),
                  l = h(e("../user-preferenced-currency-display")),
                  u = h(e("../../../helpers/utils/optimism/fetchEstimatedL1Fee")),
                  c = e("../../../helpers/constants/common"),
                  d = e("../../../contexts/i18n"),
                  p = e("../../../../shared/modules/conversion.utils"),
                  f = e("../../../../shared/constants/common"),
                  m = e("../../../../shared/modules/Numeric"),
                  g = e("../../../selectors");
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
                function v({ transaction: e, layer2fee: t, nativeCurrency: n, plainStyle: o }) {
                  var h;
                  const y = (0, r.useContext)(d.I18nContext),
                    [v, b] = (0, r.useState)(null),
                    _ = (0, a.useSelector)(g.getUseCurrencyRateCheck);
                  if (
                    ((0, r.useEffect)(() => {
                      if (null == e || !e.txParams) return;
                      (async () => {
                        try {
                          const t = await (0, u.default)(null == e ? void 0 : e.chainId, e);
                          b(t);
                        } catch (e) {
                          (0, i.captureException)(e), b(null);
                        }
                      })();
                    }, [e]),
                    null == e || !e.txParams)
                  )
                    return null;
                  let w = y("unknown"),
                    k = y("unknown");
                  if (null !== v) {
                    (w = `${new m.Numeric(v, 16, f.EtherDenomination.WEI).toDenomination(f.EtherDenomination.ETH).toFixed(12)} ${n}`),
                      (k = _ ? r.default.createElement(l.default, { type: c.SECONDARY, value: v, showFiat: !0, hideLabel: !0 }) : null);
                  }
                  const T = (0, p.sumHexes)(
                      t || "0x0",
                      v || "0x0",
                      (null == e || null === (h = e.txParams) || void 0 === h ? void 0 : h.value) || "0x0"
                    ),
                    x = `${new m.Numeric(T, 16, f.EtherDenomination.WEI).toDenomination(f.EtherDenomination.ETH).toFixed(12)} ${n}`,
                    E = _ ? r.default.createElement(l.default, { type: c.SECONDARY, value: T, showFiat: !0, hideLabel: !0 }) : null;
                  return r.default.createElement(
                    "div",
                    { className: "multi-layer-fee-message" },
                    r.default.createElement(s.default, {
                      key: "multi-layer-fee-message-total-item-gas-fee",
                      detailTitle: y("layer1Fees"),
                      detailTotal: w,
                      detailText: _ && k,
                      noBold: o,
                      flexWidthValues: o
                    }),
                    r.default.createElement(s.default, {
                      key: "multi-layer-fee-message-total-item-total",
                      detailTitle: y("total"),
                      detailTotal: x,
                      detailText: E,
                      subTitle: y("transactionDetailMultiLayerTotalSubtitle"),
                      noBold: o,
                      flexWidthValues: o
                    })
                  );
                }
                v.propTypes = {
                  transaction: o.default.object,
                  layer2fee: o.default.string,
                  nativeCurrency: o.default.string,
                  plainStyle: o.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/multilayer-fee-message/multi-layer-fee-message.js" }
    ],
    [
      4205,
      { "./multiple-notifications.component": 4206 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./multiple-notifications.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/multiple-notifications/index.js" }
    ],
    [
      4206,
      { classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = i(e("classnames")),
                  o = i(e("prop-types"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (s = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l(e, t, n) {
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
                class u extends r.PureComponent {
                  constructor(...e) {
                    super(...e), l(this, "state", { showAll: !1 });
                  }
                  render() {
                    const { showAll: e } = this.state,
                      { children: t, classNames: n } = this.props,
                      o = t.filter(Boolean);
                    return 0 === o.length
                      ? null
                      : r.default.createElement(
                          "div",
                          {
                            className: (0, a.default)(...n, {
                              "home-notification-wrapper--show-all": e,
                              "home-notification-wrapper--show-first": !e,
                              "home-notification-wrapper--multichain": Boolean("")
                            })
                          },
                          o,
                          r.default.createElement(
                            "div",
                            { className: "home-notification-wrapper__i-container", onClick: () => this.setState({ showAll: !e }) },
                            o.length > 1
                              ? r.default.createElement("i", { className: (0, a.default)("fa fa-sm fa-sort-amount", { flipped: !e }) })
                              : null
                          )
                        );
                  }
                }
                (n.default = u),
                  l(u, "defaultProps", { children: [], classNames: [] }),
                  l(u, "propTypes", { children: o.default.array, classNames: o.default.array });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/multiple-notifications/multiple-notifications.component.js" }
    ],
    [
      4207,
      { "../../../../../shared/constants/metametrics": 3962, "../../../../contexts/metametrics": 4749, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.usePetnamesMetrics = function ({
                    initialSources: e,
                    name: t,
                    proposedNameOptions: n,
                    savedName: i,
                    savedSourceId: s,
                    selectedSourceId: l,
                    type: u
                  }) {
                    const c = (0, r.useContext)(a.MetaMetricsContext),
                      d = (0, r.useCallback)(
                        (e, t = {}) => {
                          const r = [...new Set(n.map((e) => e.sourceId))],
                            a = { petname_category: u, suggested_names_sources: r, ...t };
                          c({ event: e, category: o.MetaMetricsEventCategory.Petnames, properties: a });
                        },
                        [c, u, n]
                      ),
                      p = (0, r.useCallback)(() => {
                        const e = l ?? null,
                          n = (null == i ? void 0 : i.length) && !(null != t && t.length),
                          r = (null == i ? void 0 : i.length) && (null == t ? void 0 : t.length) && t !== i,
                          a = !(null != i && i.length) && (null == t ? void 0 : t.length);
                        let u = null,
                          c = {};
                        n && ((u = o.MetaMetricsEventName.PetnameDeleted), (c = { petname_previous_source: s })),
                          r && ((u = o.MetaMetricsEventName.PetnameUpdated), (c = { petname_previous_source: s, petname_source: e })),
                          a && ((u = o.MetaMetricsEventName.PetnameCreated), (c = { petname_source: e })),
                          u && d(u, c);
                      }, [d, t, l, i, s]);
                    return {
                      trackPetnamesOpenEvent: (0, r.useCallback)(() => {
                        d(o.MetaMetricsEventName.PetnameModalOpened, {
                          has_petname: Boolean(null == i ? void 0 : i.length),
                          suggested_names_sources: e
                        });
                      }, [d, i, e]),
                      trackPetnamesSaveEvent: p
                    };
                  });
                var r = e("react"),
                  a = e("../../../../contexts/metametrics"),
                  o = e("../../../../../shared/constants/metametrics");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/name/name-details/metrics.ts" }
    ],
    [
      4208,
      {
        "../../../../contexts/i18n": 4748,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useCopyToClipboard": 4830,
        "../../../../hooks/useName": 4841,
        "../../../../selectors": 5197,
        "../../../../store/actions": 5204,
        "../../../component-library": 4453,
        "../../../ui/form-combo-field/form-combo-field": 4642,
        "../name": 4209,
        "./metrics": 4207,
        "@metamask/name-controller": 1406,
        "ethereumjs-util": 2693,
        lodash: 3312,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function ({ onClose: e, type: t, value: n }) {
                    const v = (0, o.useSelector)(p.getCurrentChainId),
                      { name: b, sourceId: w } = (0, g.useName)(n, t),
                      k = (0, o.useSelector)(p.getNameSources, i.isEqual),
                      [T, x] = (0, r.useState)(""),
                      [E, C] = (0, r.useState)(!1),
                      [M, P] = (0, r.useState)(),
                      [O, S] = (0, r.useState)(),
                      j = (0, o.useDispatch)(),
                      N = (0, r.useContext)(h.I18nContext),
                      I = Boolean(b),
                      D = (function (e, t) {
                        if (t === a.NameType.ETHEREUM_ADDRESS) return (0, s.toChecksumAddress)(e);
                        return e;
                      })(n, t),
                      { proposedNames: R, initialSources: A } = (function (e, t, n) {
                        const a = (0, o.useDispatch)(),
                          { proposedNames: i } = (0, g.useName)(e, t),
                          s = (0, r.useRef)(),
                          [l, u] = (0, r.useState)();
                        return (
                          (0, r.useEffect)(() => {
                            const r = () => {
                                s.current && clearInterval(s.current);
                              },
                              o = async () => {
                                const r = await a(
                                  (0, f.updateProposedNames)({ value: e, type: t, onlyUpdateAfterDelay: !0, variation: n })
                                );
                                l ||
                                  u(
                                    (function (e, t) {
                                      const n = Object.keys(e).filter((t) => {
                                          var n;
                                          return null === (n = e[t].proposedNames) || void 0 === n ? void 0 : n.length;
                                        }),
                                        r = Object.keys(t).filter((n) => {
                                          var r, a;
                                          return (
                                            !(null !== (r = e[n]) && void 0 !== r && r.proposedNames) &&
                                            (null === (a = t[n].proposedNames) || void 0 === a ? void 0 : a.length)
                                          );
                                        });
                                      return [...n, ...r].sort();
                                    })((null == r ? void 0 : r.results) ?? {}, i)
                                  );
                              };
                            return r(), o(), (s.current = setInterval(o, _)), r;
                          }, [e, t, n, a, l, u]),
                          { proposedNames: i, initialSources: l }
                        );
                      })(n, t, v),
                      [B, F] = (0, m.useCopyToClipboard)();
                    (0, r.useEffect)(() => {
                      x(b ?? ""), P(w ?? undefined), S(w ? b ?? undefined : undefined);
                    }, [b, w, x, P]);
                    const W = (0, r.useMemo)(
                        () =>
                          (function (e, t) {
                            const n = Object.keys(e),
                              r = n
                                .filter((t) => {
                                  var n;
                                  return null === (n = e[t]) || void 0 === n || null === (n = n.proposedNames) || void 0 === n
                                    ? void 0
                                    : n.length;
                                })
                                .map((n) => {
                                  var r;
                                  return ((null === (r = e[n]) || void 0 === r ? void 0 : r.proposedNames) ?? []).map((e) => {
                                    var r;
                                    return {
                                      primaryLabel: e,
                                      secondaryLabel: (null === (r = t[n]) || void 0 === r ? void 0 : r.label) ?? n,
                                      sourceId: n
                                    };
                                  });
                                })
                                .flat();
                            return r.sort((e, t) => e.secondaryLabel.toLowerCase().localeCompare(t.secondaryLabel.toLowerCase()));
                          })(R, k),
                        [R, k]
                      ),
                      { trackPetnamesOpenEvent: $, trackPetnamesSaveEvent: L } = (0, y.usePetnamesMetrics)({
                        initialSources: A,
                        name: T,
                        proposedNameOptions: W,
                        savedName: b,
                        savedSourceId: w,
                        selectedSourceId: M,
                        type: t
                      });
                    (0, r.useEffect)(() => {
                      A && !E && ($(), C(!0));
                    }, [A, E, $]);
                    const q = (0, r.useCallback)(async () => {
                        L(),
                          await j((0, f.setName)({ value: n, type: t, name: null != T && T.length ? T : null, sourceId: M, variation: v })),
                          e();
                      }, [T, M, e, L, v]),
                      G = (0, r.useCallback)(() => {
                        e();
                      }, [e]),
                      U = (0, r.useCallback)(
                        (e) => {
                          x(e), e !== O && (P(undefined), S(undefined));
                        },
                        [x, M]
                      ),
                      z = (0, r.useCallback)(
                        (e) => {
                          P(e.sourceId), S(e.primaryLabel);
                        },
                        [P, S]
                      ),
                      V = (0, r.useCallback)(() => {
                        F(D);
                      }, [F, D]);
                    return r.default.createElement(
                      l.Box,
                      null,
                      r.default.createElement(
                        l.Modal,
                        { isOpen: !0, onClose: G },
                        r.default.createElement(l.ModalOverlay, null),
                        r.default.createElement(
                          l.ModalContent,
                          null,
                          r.default.createElement(
                            l.ModalHeader,
                            { onClose: G, onBack: G },
                            N(I ? "nameModalTitleSaved" : "nameModalTitleNew")
                          ),
                          r.default.createElement(
                            "div",
                            { style: { textAlign: "center", marginBottom: 16, marginTop: 8 } },
                            r.default.createElement(c.default, {
                              value: n,
                              type: a.NameType.ETHEREUM_ADDRESS,
                              disableEdit: !0,
                              internal: !0
                            })
                          ),
                          r.default.createElement(
                            l.Text,
                            { marginBottom: 4, justifyContent: u.JustifyContent.spaceBetween },
                            N(I ? "nameInstructionsSaved" : "nameInstructionsNew")
                          ),
                          r.default.createElement("hr", { className: "name-details__line" }),
                          r.default.createElement(l.FormTextField, {
                            id: "address",
                            className: "name-details__address",
                            label: N("nameAddressLabel"),
                            value: D,
                            marginBottom: 4,
                            disabled: !0,
                            endAccessory: r.default.createElement(l.ButtonIcon, {
                              display: u.Display.Flex,
                              iconName: B ? l.IconName.CopySuccess : l.IconName.Copy,
                              size: l.ButtonIconSize.Sm,
                              onClick: V,
                              color: u.IconColor.iconMuted,
                              ariaLabel: N("copyAddress")
                            })
                          }),
                          r.default.createElement(
                            l.Label,
                            {
                              flexDirection: u.FlexDirection.Column,
                              alignItems: u.AlignItems.flexStart,
                              marginBottom: 2,
                              className: "name-details__display-name"
                            },
                            N("nameLabel"),
                            r.default.createElement(d.default, {
                              value: T,
                              options: W,
                              placeholder: N("nameSetPlaceholder"),
                              noOptionsText: N("nameNoProposedNames"),
                              onChange: U,
                              onOptionClick: z
                            })
                          ),
                          r.default.createElement("hr", { className: "name-details__line" }),
                          r.default.createElement(
                            l.Button,
                            {
                              variant: l.ButtonVariant.Primary,
                              startIconName: I ? undefined : l.IconName.Save,
                              width: u.BlockSize.Full,
                              onClick: q
                            },
                            N(I ? "ok" : "save")
                          )
                        )
                      )
                    );
                  });
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("@metamask/name-controller"),
                  o = e("react-redux"),
                  i = e("lodash"),
                  s = e("ethereumjs-util"),
                  l = e("../../../component-library"),
                  u = e("../../../../helpers/constants/design-system"),
                  c = v(e("../name")),
                  d = v(e("../../../ui/form-combo-field/form-combo-field")),
                  p = e("../../../../selectors"),
                  f = e("../../../../store/actions"),
                  m = e("../../../../hooks/useCopyToClipboard"),
                  g = e("../../../../hooks/useName"),
                  h = e("../../../../contexts/i18n"),
                  y = e("./metrics");
                function v(e) {
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
                const _ = 2e3;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/name/name-details/name-details.tsx" }
    ],
    [
      4209,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useName": 4841,
        "../../component-library": 4453,
        "./name-details/name-details": 4208,
        "@metamask/name-controller": 1406,
        classnames: 2414,
        "ethereumjs-util": 2693,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function ({ value: e, type: t, disableEdit: n, internal: f }) {
                    const [m, g] = (0, r.useState)(!1),
                      h = (0, r.useContext)(c.MetaMetricsContext),
                      { name: y } = (0, u.useName)(e, t);
                    (0, r.useEffect)(() => {
                      f ||
                        h({
                          event: d.MetaMetricsEventName.PetnameDisplayed,
                          category: d.MetaMetricsEventCategory.Petnames,
                          properties: { petname_category: t, has_petname: Boolean(null == y ? void 0 : y.length) }
                        });
                    }, []);
                    const v = (0, r.useCallback)(() => {
                        g(!0);
                      }, [g]),
                      b = (0, r.useCallback)(() => {
                        g(!1);
                      }, [g]),
                      _ = (function (e, t) {
                        if (t === a.NameType.ETHEREUM_ADDRESS) return (0, l.shortenAddress)((0, i.toChecksumAddress)(e));
                        return e;
                      })(e, t),
                      w = Boolean(y),
                      k = w ? s.IconName.Save : s.IconName.Warning;
                    return r.default.createElement(
                      "div",
                      null,
                      !n && m && r.default.createElement(p.default, { value: e, type: t, onClose: b }),
                      r.default.createElement(
                        "div",
                        { className: (0, o.default)({ name: !0, name__saved: w, name__missing: !w }), onClick: v },
                        r.default.createElement(s.Icon, { name: k, className: "name__icon", size: s.IconSize.Lg }),
                        !w && r.default.createElement("span", { className: "name__value" }, _),
                        w && r.default.createElement("span", { className: "name__name" }, y)
                      )
                    );
                  });
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("@metamask/name-controller"),
                  o = f(e("classnames")),
                  i = e("ethereumjs-util"),
                  s = e("../../component-library"),
                  l = e("../../../helpers/utils/util"),
                  u = e("../../../hooks/useName"),
                  c = e("../../../contexts/metametrics"),
                  d = e("../../../../shared/constants/metametrics"),
                  p = f(e("./name-details/name-details"));
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
              };
            };
      },
      { package: "$root$", file: "ui/components/app/name/name.tsx" }
    ],
    [
      4210,
      { "./network-account-balance-header": 4211 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./network-account-balance-header")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/network-account-balance-header/index.js" }
    ],
    [
      4211,
      {
        "../../../../shared/constants/network": 3963,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../../ui/box/box": 4606,
        "../../ui/icon-with-fallback": 4652,
        "../../ui/identicon": 4664,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = m);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = p(e("prop-types")),
                  o = p(e("../../ui/icon-with-fallback")),
                  i = p(e("../../ui/identicon")),
                  s = e("../../../helpers/constants/design-system"),
                  l = p(e("../../ui/box/box")),
                  u = e("../../../contexts/i18n"),
                  c = e("../../../../shared/constants/network"),
                  d = e("../../component-library");
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
                function m({ networkName: e, accountName: t, accountBalance: n, tokenName: a, accountAddress: p, chainId: f }) {
                  const m = (0, r.useContext)(u.I18nContext),
                    g = c.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[f],
                    h = g
                      ? "network-account-balance-header__network-account__ident-icon-ethereum"
                      : "network-account-balance-header__network-account__ident-icon-ethereum--gray";
                  return r.default.createElement(
                    l.default,
                    {
                      display: s.Display.Flex,
                      flexDirection: s.FlexDirection.Row,
                      padding: 4,
                      className: "network-account-balance-header",
                      alignItems: s.AlignItems.center,
                      justifyContent: s.JustifyContent.spaceBetween
                    },
                    r.default.createElement(
                      l.default,
                      { display: s.Display.Flex, flexDirection: s.FlexDirection.Row, alignItems: s.AlignItems.center, gap: 2 },
                      r.default.createElement(
                        l.default,
                        { display: s.Display.Flex, flexDirection: s.FlexDirection.Row, alignItems: s.AlignItems.center },
                        r.default.createElement(i.default, { address: p, diameter: 32 }),
                        r.default.createElement(o.default, { name: e, size: 16, icon: g, wrapperClassName: h })
                      ),
                      r.default.createElement(
                        l.default,
                        { display: s.Display.Flex, alignItems: s.AlignItems.flexStart, flexDirection: s.FlexDirection.Column },
                        r.default.createElement(d.Text, { variant: s.TextVariant.bodySm, as: "h6", color: s.TextColor.textAlternative }, e),
                        r.default.createElement(
                          d.Text,
                          { variant: s.TextVariant.bodySm, as: "h6", color: s.TextColor.textDefault, fontWeight: s.FontWeight.Bold },
                          t
                        )
                      )
                    ),
                    r.default.createElement(
                      l.default,
                      { display: s.Display.Flex, alignItems: s.AlignItems.flexEnd, flexDirection: s.FlexDirection.Column },
                      r.default.createElement(
                        d.Text,
                        { variant: s.TextVariant.bodySm, as: "h6", color: s.TextColor.textAlternative },
                        m("balance")
                      ),
                      r.default.createElement(
                        d.Text,
                        {
                          variant: s.TextVariant.bodySm,
                          as: "h6",
                          color: s.TextColor.textDefault,
                          fontWeight: s.FontWeight.Bold,
                          align: s.TextAlign.End
                        },
                        n,
                        " ",
                        a
                      )
                    )
                  );
                }
                m.propTypes = {
                  networkName: a.default.string,
                  accountName: a.default.string,
                  accountBalance: a.default.string,
                  tokenName: a.default.string,
                  accountAddress: a.default.string,
                  chainId: a.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/network-account-balance-header/network-account-balance-header.js" }
    ],
    [
      4212,
      { "./network-display": 4213 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./network-display")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/network-display/index.js" }
    ],
    [
      4213,
      {
        "../../../../shared/constants/network": 3963,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/i18n-helper": 4799,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../../ui/chip/chip": 4619,
        "../../ui/color-indicator": 4622,
        "../../ui/loading-indicator": 4671,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = v);
                var r = y(e("react")),
                  a = y(e("prop-types")),
                  o = y(e("classnames")),
                  i = e("react-redux"),
                  s = e("../../../../shared/constants/network"),
                  l = y(e("../../ui/loading-indicator")),
                  u = y(e("../../ui/color-indicator")),
                  c = e("../../../helpers/constants/design-system"),
                  d = y(e("../../ui/chip/chip")),
                  p = e("../../../hooks/useI18nContext"),
                  f = e("../../../selectors"),
                  m = e("../../component-library"),
                  g = e("../../../ducks/metamask/metamask"),
                  h = e("../../../helpers/utils/i18n-helper");
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v({ indicatorSize: e, disabled: t, labelProps: n, targetNetwork: a, onClick: y }) {
                  const v = (0, i.useSelector)(f.isNetworkLoading),
                    b = (0, i.useSelector)(g.getProviderConfig),
                    _ = (0, p.useI18nContext)(),
                    { nickname: w, type: k } = a ?? b;
                  return r.default.createElement(d.default, {
                    dataTestId: "network-display",
                    borderColor: y ? c.BorderColor.borderDefault : c.BorderColor.borderMuted,
                    onClick: y,
                    leftIcon: r.default.createElement(
                      l.default,
                      { alt: _("attemptingConnect"), title: _("attemptingConnect"), isLoading: v },
                      r.default.createElement(u.default, {
                        color: k === s.NETWORK_TYPES.RPC ? c.IconColor.iconMuted : k,
                        size: e,
                        type: u.default.TYPES.FILLED,
                        iconClassName: k === s.NETWORK_TYPES.RPC && e !== c.Size.XS ? "fa fa-question" : undefined
                      })
                    ),
                    rightIcon: y ? r.default.createElement(m.Icon, { name: m.IconName.ArrowDown, size: m.IconSize.Xs }) : null,
                    label: k === s.NETWORK_TYPES.RPC ? w ?? _("privateNetwork") : _((0, h.getNetworkLabelKey)(k)),
                    className: (0, o.default)("network-display", {
                      "network-display--disabled": t,
                      "network-display--clickable": "function" == typeof y
                    }),
                    labelProps: { variant: c.TypographyVariant.H7, ...n }
                  });
                }
                (v.propTypes = {
                  indicatorSize: a.default.oneOf(Object.values(c.Size)),
                  labelProps: d.default.propTypes.labelProps,
                  targetNetwork: a.default.shape({
                    type: a.default.oneOf([...Object.keys(s.BUILT_IN_NETWORKS), s.NETWORK_TYPES.RPC]),
                    nickname: a.default.string
                  }),
                  disabled: a.default.bool,
                  onClick: a.default.func
                }),
                  (v.defaultProps = { indicatorSize: c.Size.LG });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/network-display/network-display.js" }
    ],
    [
      4214,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var r = d(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("classnames")),
                  i = e("react-redux"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../../hooks/useI18nContext"),
                  u = e("../../component-library"),
                  c = e("../../../store/actions");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p({ className: e, clickable: t }) {
                  const n = (0, l.useI18nContext)(),
                    a = (0, i.useDispatch)();
                  return r.default.createElement(
                    u.Box,
                    {
                      tabIndex: 0,
                      "data-testid": "nft-default-image",
                      className: (0, o.default)(e, "nft-default", { "nft-default--clickable": t }),
                      display: s.Display.Flex,
                      alignItems: s.AlignItems.Center,
                      justifyContent: s.JustifyContent.Center,
                      borderRadius: s.BorderRadius.LG
                    },
                    t &&
                      r.default.createElement(
                        u.ButtonLink,
                        {
                          block: !0,
                          className: "nft-default__button",
                          onClick: (e) => {
                            e.stopPropagation(), a((0, c.showIpfsModal)());
                          }
                        },
                        n("show")
                      )
                  );
                }
                p.propTypes = { clickable: a.default.bool, className: a.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/nft-default-image/nft-default-image.js" }
    ],
    [
      4215,
      {
        "../../../../shared/constants/network": 3963,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ToggleIpfsModal = void 0);
                var r = d(e("react")),
                  a = d(e("prop-types")),
                  o = e("react-redux"),
                  i = e("../../component-library"),
                  s = e("../../../hooks/useI18nContext"),
                  l = e("../../../store/actions"),
                  u = e("../../../../shared/constants/network"),
                  c = e("../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({ onClose: e }) => {
                  const t = (0, s.useI18nContext)(),
                    n = (0, o.useDispatch)();
                  return r.default.createElement(
                    i.Modal,
                    { isOpen: !0, onClose: e, className: "toggle-ipfs-modal" },
                    r.default.createElement(i.ModalOverlay, null),
                    r.default.createElement(
                      i.ModalContent,
                      null,
                      r.default.createElement(i.ModalHeader, { onClose: e }, t("showNft")),
                      r.default.createElement(
                        i.Box,
                        { className: "toggle-ipfs-modal", marginTop: 6 },
                        r.default.createElement(
                          i.Text,
                          { variant: c.TextVariant.bodyMd, color: c.TextColor.textAlternative },
                          t("ipfsToggleModalDescriptionOne")
                        ),
                        r.default.createElement(
                          i.Text,
                          { variant: c.TextVariant.bodyMd, color: c.TextColor.textAlternative, marginTop: 6 },
                          t("ipfsToggleModalDescriptionTwo", [
                            r.default.createElement(
                              i.Text,
                              { variant: c.TextVariant.bodyMdBold, color: c.TextColor.textAlternative, as: "span", key: "span" },
                              t("ipfsToggleModalSettings"),
                              ","
                            )
                          ])
                        )
                      ),
                      r.default.createElement(
                        i.ButtonPrimary,
                        {
                          block: !0,
                          marginTop: 9,
                          onClick: () => {
                            n((0, l.setIpfsGateway)(u.IPFS_DEFAULT_GATEWAY_URL)), n((0, l.hideIpfsModal)());
                          },
                          size: c.Size.LG
                        },
                        t("confirm")
                      )
                    )
                  );
                };
                (n.ToggleIpfsModal = p), (p.propTypes = { onClose: a.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/nft-default-image/toggle-ipfs-modal.js" }
    ],
    [
      4216,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../../shared/constants/network": 3963,
        "../../../../shared/constants/transaction": 3974,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../../shared/modules/string-utils": 4002,
        "../../../ducks/metamask/metamask": 4763,
        "../../../ducks/send": 4765,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/nfts": 4803,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useCopyToClipboard": 4830,
        "../../../hooks/useI18nContext": 4837,
        "../../../hooks/usePrevious": 4845,
        "../../../pages/asset/components/asset-navigation": 4870,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../multichain/nft-item": 4563,
        "../../ui/box": 4607,
        "../../ui/button": 4611,
        "../../ui/info-tooltip": 4665,
        "../../ui/tooltip": 4736,
        "../nft-options/nft-options": 4217,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = R);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = D(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = I(e("prop-types")),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = e("lodash"),
                  l = I(e("../../ui/box")),
                  u = e("../../../helpers/constants/design-system"),
                  c = e("../../../hooks/useI18nContext"),
                  d = e("../../../helpers/utils/util"),
                  p = e("../../../helpers/utils/nfts"),
                  f = e("../../../selectors"),
                  m = I(e("../../../pages/asset/components/asset-navigation")),
                  g = e("../../../ducks/metamask/metamask"),
                  h = e("../../../helpers/constants/routes"),
                  y = e("../../../store/actions"),
                  v = e("../../../../shared/constants/network"),
                  b = e("../../../../app/scripts/lib/util"),
                  _ = e("../../../../shared/constants/app"),
                  w = I(e("../nft-options/nft-options")),
                  k = I(e("../../ui/button")),
                  T = e("../../../ducks/send"),
                  x = I(e("../../ui/info-tooltip")),
                  E = e("../../../hooks/usePrevious"),
                  C = e("../../../hooks/useCopyToClipboard"),
                  M = e("../../../../shared/modules/string-utils"),
                  P = e("../../../../shared/constants/transaction"),
                  O = e("../../component-library"),
                  S = I(e("../../ui/tooltip")),
                  j = e("../../../../shared/modules/conversion.utils"),
                  N = e("../../multichain/nft-item");
                function I(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function D(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (D = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function R({ nft: e }) {
                  var t, n;
                  const {
                      image: a,
                      imageOriginal: I,
                      name: D,
                      description: R,
                      address: A,
                      tokenId: B,
                      standard: F,
                      isCurrentlyOwned: W,
                      lastSale: $
                    } = e,
                    L = (0, c.useI18nContext)(),
                    q = (0, i.useHistory)(),
                    G = (0, o.useDispatch)(),
                    U = (0, o.useSelector)(f.getIpfsGateway),
                    z = (0, o.useSelector)(g.getNftContracts),
                    V = (0, o.useSelector)(f.getCurrentChainId),
                    H = (0, o.useSelector)(f.getCurrentNetwork),
                    [K, Y] = (0, C.useCopyToClipboard)(),
                    Q = null === (t = z.find(({ address: e }) => (0, M.isEqualCaseInsensitive)(e, A))) || void 0 === t ? void 0 : t.name,
                    J = (0, o.useSelector)((e) => (0, f.getSelectedIdentity)(e).name),
                    X = (0, p.getNftImageAlt)(e),
                    Z = I ?? a,
                    ee = (0, d.getAssetImageURL)(I ?? a, U),
                    te = null == Z ? void 0 : Z.startsWith("ipfs:"),
                    ne = null == a ? void 0 : a.startsWith("https:"),
                    re = (0, d.formatDate)(new Date(null == $ ? void 0 : $.event_timestamp).getTime(), "M/d/y"),
                    ae = (0, E.usePrevious)(e);
                  (0, r.useEffect)(() => {
                    (0, s.isEqual)(ae, e) || (0, y.checkAndUpdateSingleNftOwnershipStatus)(e);
                  }, [e, ae]);
                  const oe = (() => {
                      switch (V) {
                        case v.CHAIN_IDS.MAINNET:
                          return `https://opensea.io/assets/ethereum/${A}/${B}`;
                        case v.CHAIN_IDS.POLYGON:
                          return `https://opensea.io/assets/matic/${A}/${B}`;
                        case v.CHAIN_IDS.GOERLI:
                          return `https://testnets.opensea.io/assets/goerli/${A}/${B}`;
                        case v.CHAIN_IDS.SEPOLIA:
                          return `https://testnets.opensea.io/assets/sepolia/${A}/${B}`;
                        default:
                          return null;
                      }
                    })(),
                    ie = F !== P.TokenStandard.ERC721,
                    se = (0, b.getEnvironmentType)() === _.ENVIRONMENT_TYPE_POPUP,
                    le = async () => {
                      await G((0, T.startNewDraftTransaction)({ type: P.AssetType.NFT, details: e })), q.push(h.SEND_ROUTE);
                    },
                    ue = () =>
                      !1 === W
                        ? r.default.createElement("div", { style: { height: "30px" } })
                        : r.default.createElement(
                            l.default,
                            { display: u.Display.Flex, margin: se ? [4, 0] : null },
                            r.default.createElement(
                              k.default,
                              {
                                type: "primary",
                                onClick: le,
                                disabled: ie,
                                className: "nft-details__send-button",
                                "data-testid": "nft-send-button"
                              },
                              L("send")
                            ),
                            ie ? r.default.createElement(x.default, { position: "top", contentText: L("sendingDisabled") }) : null
                          );
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(m.default, {
                      accountName: J,
                      assetName: Q,
                      onBack: () => q.push(h.DEFAULT_ROUTE),
                      optionsButton: r.default.createElement(w.default, {
                        onViewOnOpensea: oe ? () => global.platform.openTab({ url: oe }) : null,
                        onRemove: () => {
                          G((0, y.removeAndIgnoreNft)(A, B)),
                            G((0, y.setNewNftAddedMessage)("")),
                            G((0, y.setRemoveNftMessage)("success")),
                            q.push(h.DEFAULT_ROUTE);
                        }
                      })
                    }),
                    r.default.createElement(
                      l.default,
                      { className: "nft-details" },
                      r.default.createElement(
                        l.default,
                        { className: "nft-details__top-section", gap: 6, flexDirection: u.FlexDirection.Column },
                        r.default.createElement(
                          l.default,
                          { className: "nft-details__nft-item" },
                          r.default.createElement(N.NftItem, {
                            nftImageURL: ee,
                            src: ne ? a : ee,
                            alt: a ? X : "",
                            name: D,
                            tokenId: B,
                            networkName: H.nickname,
                            networkSrc: null === (n = H.rpcPrefs) || void 0 === n ? void 0 : n.imageUrl,
                            isIpfsURL: te,
                            clickable: !0
                          })
                        ),
                        r.default.createElement(
                          l.default,
                          {
                            flexDirection: u.FlexDirection.Column,
                            className: "nft-details__info",
                            marginTop: 4,
                            justifyContent: u.JustifyContent.spaceBetween
                          },
                          r.default.createElement(
                            "div",
                            null,
                            r.default.createElement(
                              O.Text,
                              {
                                color: u.TextColor.textDefault,
                                variant: u.TextVariant.headingSm,
                                as: "h4",
                                fontWeight: u.FontWeight.Bold,
                                marginBottom: 2
                              },
                              D
                            ),
                            r.default.createElement(
                              O.Text,
                              {
                                color: u.TextColor.textMuted,
                                variant: u.TextVariant.bodyMd,
                                as: "h5",
                                marginBottom: 4,
                                overflowWrap: u.OverflowWrap.BreakWord
                              },
                              "#",
                              B
                            )
                          ),
                          R
                            ? r.default.createElement(
                                "div",
                                null,
                                r.default.createElement(
                                  O.Text,
                                  {
                                    color: u.TextColor.textDefault,
                                    variant: u.TextVariant.bodySmBold,
                                    as: "h6",
                                    marginBottom: 2,
                                    className: "nft-details__description"
                                  },
                                  L("description")
                                ),
                                r.default.createElement(
                                  O.Text,
                                  {
                                    color: u.TextColor.textAlternative,
                                    variant: u.TextVariant.bodySm,
                                    as: "h6",
                                    overflowWrap: u.OverflowWrap.BreakWord,
                                    marginBottom: 4
                                  },
                                  R
                                )
                              )
                            : null,
                          se ? null : ue()
                        )
                      ),
                      r.default.createElement(
                        l.default,
                        { marginBottom: 2 },
                        $
                          ? r.default.createElement(
                              r.default.Fragment,
                              null,
                              r.default.createElement(
                                l.default,
                                { display: u.Display.Flex, flexDirection: u.FlexDirection.Row },
                                r.default.createElement(
                                  O.Text,
                                  {
                                    color: u.TextColor.textDefault,
                                    variant: u.TextVariant.bodySmBold,
                                    as: "h6",
                                    marginBottom: 4,
                                    marginRight: 2,
                                    className: "nft-details__link-title"
                                  },
                                  L("lastSold")
                                ),
                                r.default.createElement(
                                  l.default,
                                  {
                                    display: u.Display.Flex,
                                    flexDirection: u.FlexDirection.Row,
                                    className: "nft-details__contract-wrapper"
                                  },
                                  r.default.createElement(
                                    O.Text,
                                    {
                                      color: u.TextColor.textAlternative,
                                      variant: u.TextVariant.bodySm,
                                      as: "h6",
                                      overflowWrap: u.OverflowWrap.BreakWord,
                                      marginBottom: 4
                                    },
                                    re
                                  )
                                )
                              ),
                              r.default.createElement(
                                l.default,
                                { display: u.Display.Flex, flexDirection: u.FlexDirection.Row },
                                r.default.createElement(
                                  O.Text,
                                  {
                                    color: u.TextColor.textDefault,
                                    variant: u.TextVariant.bodySmBold,
                                    as: "h6",
                                    marginBottom: 4,
                                    marginRight: 2,
                                    className: "nft-details__link-title"
                                  },
                                  L("lastPriceSold")
                                ),
                                r.default.createElement(
                                  l.default,
                                  {
                                    display: u.Display.Flex,
                                    flexDirection: u.FlexDirection.Row,
                                    className: "nft-details__contract-wrapper"
                                  },
                                  r.default.createElement(
                                    O.Text,
                                    {
                                      color: u.TextColor.textAlternative,
                                      variant: u.TextVariant.bodySm,
                                      as: "h6",
                                      overflowWrap: u.OverflowWrap.BreakWord,
                                      marginBottom: 4
                                    },
                                    `${Number((0, j.decWEIToDecETH)($.total_price))} ${$.payment_token.symbol}`
                                  )
                                )
                              )
                            )
                          : null,
                        r.default.createElement(
                          l.default,
                          { display: u.Display.Flex, flexDirection: u.FlexDirection.Row },
                          r.default.createElement(
                            O.Text,
                            {
                              color: u.TextColor.textDefault,
                              variant: u.TextVariant.bodySmBold,
                              as: "h6",
                              marginBottom: 4,
                              marginRight: 2,
                              className: "nft-details__link-title"
                            },
                            L("contractAddress")
                          ),
                          r.default.createElement(
                            l.default,
                            { display: u.Display.Flex, flexDirection: u.FlexDirection.Row, className: "nft-details__contract-wrapper" },
                            r.default.createElement(
                              O.Text,
                              {
                                color: u.TextColor.textAlternative,
                                variant: u.TextVariant.bodySm,
                                as: "h6",
                                overflowWrap: u.OverflowWrap.BreakWord,
                                marginBottom: 4
                              },
                              (0, d.shortenAddress)(A)
                            ),
                            r.default.createElement(
                              S.default,
                              {
                                wrapperClassName: "nft-details__tooltip-wrapper",
                                position: "bottom",
                                title: L(K ? "copiedExclamation" : "copyToClipboard")
                              },
                              r.default.createElement(O.ButtonIcon, {
                                ariaLabel: "copy",
                                color: u.IconColor.iconAlternative,
                                className: "nft-details__contract-copy-button",
                                "data-testid": "nft-address-copy",
                                onClick: () => {
                                  Y(A);
                                },
                                iconName: K ? O.IconName.CopySuccess : O.IconName.Copy
                              })
                            )
                          )
                        ),
                        se ? ue() : null,
                        r.default.createElement(
                          O.Text,
                          { color: u.TextColor.textAlternative, variant: u.TextVariant.bodySm, as: "h6" },
                          L("nftDisclaimer")
                        )
                      )
                    )
                  );
                }
                R.propTypes = {
                  nft: a.default.shape({
                    address: a.default.string.isRequired,
                    tokenId: a.default.string.isRequired,
                    isCurrentlyOwned: a.default.bool,
                    name: a.default.string,
                    description: a.default.string,
                    image: a.default.string,
                    standard: a.default.string,
                    imageThumbnail: a.default.string,
                    imagePreview: a.default.string,
                    imageOriginal: a.default.string,
                    creator: a.default.shape({ address: a.default.string, config: a.default.string, profile_img_url: a.default.string }),
                    lastSale: a.default.shape({
                      event_timestamp: a.default.string,
                      total_price: a.default.string,
                      payment_token: a.default.shape({ symbol: a.default.string })
                    })
                  })
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/nft-details/nft-details.js" }
    ],
    [
      4217,
      {
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../../ui/menu": 4681,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("../../../contexts/i18n"),
                  s = e("../../ui/menu"),
                  l = e("../../component-library"),
                  u = e("../../../helpers/constants/design-system");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const d = ({ onRemove: e, onViewOnOpensea: t }) => {
                  const n = (0, a.useContext)(i.I18nContext),
                    [r, o] = (0, a.useState)(!1),
                    c = (0, a.useRef)(!1);
                  return a.default.createElement(
                    "div",
                    { ref: c },
                    a.default.createElement(l.ButtonIcon, {
                      iconName: l.IconName.MoreVertical,
                      className: "nft-options__button",
                      "data-testid": "nft-options__button",
                      onClick: () => o(!0),
                      color: u.Color.textDefault,
                      size: l.ButtonIconSize.Sm,
                      ariaLabel: n("nftOptions")
                    }),
                    r
                      ? a.default.createElement(
                          s.Menu,
                          { "data-testid": "close-nft-options-menu", anchorElement: c.current, onHide: () => o(!1) },
                          t
                            ? a.default.createElement(
                                s.MenuItem,
                                {
                                  iconName: l.IconName.Export,
                                  "data-testid": "nft-options__view-on-opensea",
                                  onClick: () => {
                                    o(!1), t();
                                  }
                                },
                                n("viewOnOpensea")
                              )
                            : null,
                          a.default.createElement(
                            s.MenuItem,
                            {
                              iconName: l.IconName.Trash,
                              "data-testid": "nft-item-remove",
                              onClick: () => {
                                o(!1), e();
                              }
                            },
                            n("removeNFT")
                          )
                        )
                      : null
                  );
                };
                d.propTypes = { onRemove: o.default.func.isRequired, onViewOnOpensea: o.default.func };
                n.default = d;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/nft-options/nft-options.js" }
    ],
    [
      4218,
      {
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "prop-types": 3450,
        react: 3690,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = c);
                var r = u(e("react")),
                  a = u(e("prop-types")),
                  o = e("react-router-dom"),
                  i = e("../../component-library"),
                  s = e("../../../hooks/useI18nContext"),
                  l = e("../../../helpers/constants/routes");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c({ onActionButtonClick: e }) {
                  const t = (0, s.useI18nContext)(),
                    n = (0, o.useHistory)();
                  return r.default.createElement(
                    i.BannerAlert,
                    {
                      className: "nfts-detection-notice",
                      actionButtonLabel: t("selectEnableDisplayMediaPrivacyPreference"),
                      actionButtonOnClick: (t) => {
                        t.preventDefault(), n.push(`${l.SECURITY_ROUTE}#display-nft-media`), null == e || e();
                      }
                    },
                    t("newNFTDetectedInImportNFTsMsg", [
                      r.default.createElement(
                        "b",
                        { key: "new-nft-detected-in-import-nfts-message-strong-text" },
                        t("newNFTDetectedInImportNFTsMessageStrongText")
                      )
                    ])
                  );
                }
                c.propTypes = { onActionButtonClick: a.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/nfts-detection-notice-import-nfts/nfts-detection-notice-import-nfts.js" }
    ],
    [
      4219,
      {
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        react: 3690,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, s.useI18nContext)(),
                      t = (0, o.useHistory)();
                    return a.default.createElement(
                      i.BannerAlert,
                      {
                        className: "nfts-detection-notice",
                        title: e("newNFTsAutodetected"),
                        actionButtonLabel: e("selectNFTPrivacyPreference"),
                        actionButtonOnClick: (e) => {
                          e.preventDefault(), t.push(`${l.SECURITY_ROUTE}#autodetect-nfts`);
                        }
                      },
                      e("newNFTDetectedInNFTsTabMessage")
                    );
                  });
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("react-router-dom"),
                  i = e("../../component-library"),
                  s = e("../../../hooks/useI18nContext"),
                  l = e("../../../helpers/constants/routes");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/nfts-detection-notice-nfts-tab/nfts-detection-notice-nfts-tab.js" }
    ],
    [
      4220,
      { "./nfts-items": 4221 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./nfts-items")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/nfts-items/index.js" }
    ],
    [
      4221,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/nfts": 4803,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../hooks/usePrevious": 4845,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../multichain/nft-item": 4563,
        "../../ui/box": 4607,
        "../../ui/typography/typography": 4741,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = M);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = x(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = T(e("prop-types")),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = e("lodash"),
                  l = T(e("../../ui/box")),
                  u = T(e("../../ui/typography/typography")),
                  c = e("../../../helpers/constants/design-system"),
                  d = e("../../../../shared/constants/app"),
                  p = e("../../../../app/scripts/lib/util"),
                  f = e("../../../selectors"),
                  m = e("../../../helpers/constants/routes"),
                  g = e("../../../helpers/utils/util"),
                  h = e("../../../helpers/utils/nfts"),
                  y = e("../../../store/actions"),
                  v = e("../../../hooks/usePrevious"),
                  b = e("../../../ducks/metamask/metamask"),
                  _ = e("../../../hooks/useI18nContext"),
                  w = e("../../component-library"),
                  k = e("../../multichain/nft-item");
                function T(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (x = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const E = (0, p.getEnvironmentType)() === d.ENVIRONMENT_TYPE_POPUP ? c.BLOCK_SIZES.ONE_THIRD : c.BLOCK_SIZES.ONE_SIXTH,
                  C = "previouslyOwned";
                function M({ collections: e = {}, previouslyOwnedCollection: t = {} }) {
                  var n;
                  const a = (0, o.useDispatch)(),
                    d = Object.keys(e),
                    p = (0, o.useSelector)(b.getNftsDropdownState),
                    T = (0, v.usePrevious)(d),
                    x = (0, o.useSelector)(f.getSelectedAddress),
                    M = (0, o.useSelector)(f.getCurrentChainId),
                    P = (0, o.useSelector)(f.getCurrentNetwork),
                    O = (0, _.useI18nContext)(),
                    S = (0, o.useSelector)(f.getIpfsGateway),
                    j = (0, o.useSelector)(f.getOpenSeaEnabled);
                  (0, r.useEffect)(() => {
                    var e, t;
                    if (
                      M !== undefined &&
                      x !== undefined &&
                      !(0, s.isEqual)(T, d) &&
                      ((null == p || null === (e = p[x]) || void 0 === e ? void 0 : e[M]) === undefined ||
                        0 === Object.keys(null == p || null === (t = p[x]) || void 0 === t ? void 0 : t[M]).length)
                    ) {
                      const e = {};
                      d.forEach((t) => {
                        e[t] = !0;
                      });
                      const t = { ...p, [x]: { ...(null == p ? void 0 : p[x]), [M]: e } };
                      a((0, y.updateNftDropDownState)(t));
                    }
                  }, [d, T, p, x, M, a]);
                  const N = (0, i.useHistory)(),
                    I = ({ nfts: e, collectionName: t, collectionImage: n, key: o }) => {
                      var i;
                      if (!e.length) return null;
                      const s = null === (i = p[x]) || void 0 === i || null === (i = i[M]) || void 0 === i ? void 0 : i[o];
                      return r.default.createElement(
                        "div",
                        { className: "nfts-items__collection", key: `collection-${o}` },
                        r.default.createElement(
                          "button",
                          {
                            className: "nfts-items__collection-wrapper",
                            "data-testid": "collection-expander-button",
                            onClick: () => {
                              ((e, t) => {
                                const n = { ...p[x][M], [e]: !t },
                                  r = { ...p, [x]: { [M]: n } };
                                a((0, y.updateNftDropDownState)(r));
                              })(o, s);
                            }
                          },
                          r.default.createElement(
                            l.default,
                            {
                              marginBottom: 2,
                              display: c.DISPLAY.FLEX,
                              alignItems: c.AlignItems.center,
                              justifyContent: c.JustifyContent.spaceBetween,
                              className: "nfts-items__collection-accordion-title"
                            },
                            r.default.createElement(
                              l.default,
                              { alignItems: c.AlignItems.center, className: "nfts-items__collection-header" },
                              ((e, t) => {
                                var n, a, o;
                                return null != e && e.startsWith("ipfs") && !S
                                  ? r.default.createElement(
                                      "div",
                                      { className: "nfts-items__collection-image-alt" },
                                      (null == t || null === (a = t[0]) || void 0 === a ? void 0 : a.toUpperCase()) ?? null
                                    )
                                  : j || (null != e && e.startsWith("ipfs"))
                                  ? e
                                    ? r.default.createElement("img", {
                                        alt: t,
                                        src: (0, g.getAssetImageURL)(e, S),
                                        className: "nfts-items__collection-image"
                                      })
                                    : r.default.createElement(
                                        "div",
                                        { className: "nfts-items__collection-image-alt" },
                                        (null == t || null === (n = t[0]) || void 0 === n ? void 0 : n.toUpperCase()) ?? null
                                      )
                                  : r.default.createElement(
                                      "div",
                                      { className: "nfts-items__collection-image-alt" },
                                      (null == t || null === (o = t[0]) || void 0 === o ? void 0 : o.toUpperCase()) ?? null
                                    );
                              })(n, t),
                              r.default.createElement(
                                u.default,
                                { color: c.Color.textDefault, variant: c.TypographyVariant.H5, margin: 2 },
                                `${t ?? O("unknownCollection")} (${e.length})`
                              )
                            ),
                            r.default.createElement(
                              l.default,
                              { alignItems: c.AlignItems.flexEnd },
                              r.default.createElement(w.Icon, {
                                name: s ? w.IconName.ArrowDown : w.IconName.ArrowRight,
                                color: c.Color.iconDefault
                              })
                            )
                          )
                        ),
                        s
                          ? r.default.createElement(
                              l.default,
                              { display: c.DISPLAY.FLEX, flexWrap: c.FLEX_WRAP.WRAP, gap: 4 },
                              e.map((e, t) => {
                                var n;
                                const { image: a, address: o, tokenId: i, name: s, imageOriginal: u } = e,
                                  c = (0, g.getAssetImageURL)(u ?? a, S),
                                  d = (0, h.getNftImageAlt)(e),
                                  p = null == a ? void 0 : a.startsWith("https:"),
                                  f = null != u && u.startsWith("ipfs") ? c : a,
                                  y = u ?? a,
                                  v = null == y ? void 0 : y.startsWith("ipfs:");
                                return r.default.createElement(
                                  l.default,
                                  { "data-testid": "nft-wrapper", width: E, key: `nft-${t}`, className: "nfts-items__item-wrapper" },
                                  r.default.createElement(k.NftItem, {
                                    nftImageURL: f,
                                    alt: d,
                                    src: p ? a : c,
                                    name: s,
                                    tokenId: i,
                                    networkName: P.nickname,
                                    networkSrc: null === (n = P.rpcPrefs) || void 0 === n ? void 0 : n.imageUrl,
                                    onClick: () => N.push(`${m.ASSET_ROUTE}/${o}/${i}`),
                                    isIpfsURL: v,
                                    clickable: !0
                                  })
                                );
                              })
                            )
                          : null
                      );
                    };
                  return r.default.createElement(
                    "div",
                    { className: "nfts-items" },
                    r.default.createElement(
                      l.default,
                      { paddingTop: 6, paddingBottom: 6, paddingLeft: 4, paddingRight: 4, flexDirection: c.FLEX_DIRECTION.COLUMN },
                      r.default.createElement(
                        r.default.Fragment,
                        null,
                        d.map((t) => {
                          const { nfts: n, collectionName: r, collectionImage: a } = e[t];
                          return I({ nfts: n, collectionName: r, collectionImage: a, key: t, isPreviouslyOwnedCollection: !1 });
                        }),
                        I({
                          nfts: t.nfts,
                          collectionName: t.collectionName,
                          collectionImage: null === (n = t.nfts[0]) || void 0 === n ? void 0 : n.image,
                          isPreviouslyOwnedCollection: !0,
                          key: C
                        })
                      )
                    )
                  );
                }
                M.propTypes = {
                  previouslyOwnedCollection: a.default.shape({
                    nfts: a.default.arrayOf(
                      a.default.shape({
                        address: a.default.string.isRequired,
                        tokenId: a.default.string.isRequired,
                        name: a.default.string,
                        description: a.default.string,
                        image: a.default.string,
                        standard: a.default.string,
                        imageThumbnail: a.default.string,
                        imagePreview: a.default.string,
                        creator: a.default.shape({ address: a.default.string, config: a.default.string, profile_img_url: a.default.string })
                      })
                    ),
                    collectionName: a.default.string,
                    collectionImage: a.default.string
                  }),
                  collections: a.default.shape({
                    nfts: a.default.arrayOf(
                      a.default.shape({
                        address: a.default.string.isRequired,
                        tokenId: a.default.string.isRequired,
                        name: a.default.string,
                        description: a.default.string,
                        image: a.default.string,
                        standard: a.default.string,
                        imageThumbnail: a.default.string,
                        imagePreview: a.default.string,
                        creator: a.default.shape({ address: a.default.string, config: a.default.string, profile_img_url: a.default.string })
                      })
                    ),
                    collectionImage: a.default.string,
                    collectionName: a.default.string
                  })
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/nfts-items/nfts-items.js" }
    ],
    [
      4222,
      { "./nfts-tab": 4223 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./nfts-tab")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/nfts-tab/index.js" }
    ],
    [
      4223,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/constants/zendesk-url": 4781,
        "../../../hooks/useI18nContext": 4837,
        "../../../hooks/useNftsCollections": 4842,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../multichain": 4555,
        "../../multichain/asset-list-conversion-button/asset-list-conversion-button": 4525,
        "../nfts-detection-notice-nfts-tab/nfts-detection-notice-nfts-tab": 4219,
        "../nfts-items": 4220,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, a.useSelector)(d.getUseNftDetection),
                      t = (0, a.useSelector)(d.getIsMainnet),
                      n = (0, o.useHistory)(),
                      h = (0, u.useI18nContext)(),
                      y = (0, a.useDispatch)(),
                      { nftsLoading: v, collections: b, previouslyOwnedCollection: _ } = (0, c.useNftsCollections)(),
                      w = Object.keys(b).length > 0;
                    if (v) return r.default.createElement("div", { className: "nfts-tab__loading" }, h("loadingNFTs"));
                    return r.default.createElement(
                      f.Box,
                      { className: "nfts-tab" },
                      w > 0 || _.nfts.length > 0
                        ? r.default.createElement(g.default, { collections: b, previouslyOwnedCollection: _ })
                        : r.default.createElement(
                            r.default.Fragment,
                            null,
                            t && !e
                              ? r.default.createElement(
                                  f.Box,
                                  { paddingTop: 4, paddingInlineStart: 4, paddingInlineEnd: 4 },
                                  r.default.createElement(m.default, null)
                                )
                              : null,
                            null,
                            r.default.createElement(
                              f.Box,
                              {
                                padding: 12,
                                display: i.Display.Flex,
                                flexDirection: i.FlexDirection.Column,
                                alignItems: i.AlignItems.center,
                                justifyContent: i.JustifyContent.center
                              },
                              r.default.createElement(
                                f.Box,
                                { justifyContent: i.JustifyContent.center },
                                r.default.createElement("img", { src: "./images/no-nfts.svg" })
                              ),
                              r.default.createElement(
                                f.Box,
                                {
                                  marginTop: 4,
                                  marginBottom: 12,
                                  display: i.Display.Flex,
                                  justifyContent: i.JustifyContent.center,
                                  alignItems: i.AlignItems.center,
                                  flexDirection: i.FlexDirection.Column,
                                  className: "nfts-tab__link"
                                },
                                r.default.createElement(
                                  f.Text,
                                  { color: i.TextColor.textMuted, variant: i.TextVariant.headingSm, align: i.TextAlign.Center, as: "h4" },
                                  h("noNFTs")
                                ),
                                r.default.createElement(
                                  f.ButtonLink,
                                  { size: i.Size.MD, href: l.default.NFT_TOKENS, externalLink: !0 },
                                  h("learnMoreUpperCase")
                                )
                              )
                            )
                          ),
                      r.default.createElement(
                        f.Box,
                        {
                          className: "nfts-tab__buttons",
                          display: i.Display.Flex,
                          flexDirection: i.FlexDirection.Column,
                          alignItems: i.AlignItems.flexStart,
                          margin: 4,
                          gap: 2,
                          marginBottom: 2
                        },
                        r.default.createElement(
                          f.ButtonLink,
                          {
                            size: i.Size.MD,
                            "data-testid": "import-nft-button",
                            startIconName: f.IconName.Add,
                            onClick: () => {
                              y((0, p.showImportNftsModal)());
                            }
                          },
                          h("importNFT")
                        ),
                        !t && Object.keys(b).length < 1
                          ? null
                          : r.default.createElement(
                              r.default.Fragment,
                              null,
                              r.default.createElement(
                                f.Box,
                                { className: "nfts-tab__link", justifyContent: i.JustifyContent.flexEnd },
                                t && !e
                                  ? r.default.createElement(
                                      f.ButtonLink,
                                      {
                                        size: i.Size.MD,
                                        startIconName: f.IconName.Setting,
                                        "data-testid": "refresh-list-button",
                                        onClick: () => {
                                          n.push(s.SECURITY_ROUTE);
                                        }
                                      },
                                      h("enableAutoDetect")
                                    )
                                  : r.default.createElement(
                                      f.ButtonLink,
                                      {
                                        size: i.Size.MD,
                                        startIconName: f.IconName.Refresh,
                                        "data-testid": "refresh-list-button",
                                        onClick: () => {
                                          t && y((0, p.detectNfts)()), (0, p.checkAndUpdateAllNftsOwnershipStatus)();
                                        }
                                      },
                                      h("refreshList")
                                    )
                              )
                            )
                      )
                    );
                  });
                var r = h(e("react")),
                  a = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../helpers/constants/routes"),
                  l = h(e("../../../helpers/constants/zendesk-url")),
                  u = e("../../../hooks/useI18nContext"),
                  c = e("../../../hooks/useNftsCollections"),
                  d = e("../../../selectors"),
                  p = e("../../../store/actions"),
                  f = e("../../component-library"),
                  m = h(e("../nfts-detection-notice-nfts-tab/nfts-detection-notice-nfts-tab")),
                  g = h(e("../nfts-items"));
                e("../../multichain"), e("../../multichain/asset-list-conversion-button/asset-list-conversion-button");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/app/nfts-tab/nfts-tab.js" }
    ],
    [
      4224,
      { "./permission-cell": 4226 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./permission-cell")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permission-cell/index.js" }
    ],
    [
      4225,
      {
        "../../../../shared/constants/snaps/permissions": 3969,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/box": 4607,
        "../../ui/menu": 4681,
        "../../ui/popover/popover.component": 4700,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.PermissionCellOptions = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = m(e("prop-types")),
                  o = e("react-redux"),
                  i = m(e("../../ui/box")),
                  s = e("../../../hooks/useI18nContext"),
                  l = e("../../component-library"),
                  u = e("../../ui/menu"),
                  c = e("../../../helpers/constants/design-system"),
                  d = m(e("../../ui/popover/popover.component")),
                  p = e("../../../../shared/constants/snaps/permissions"),
                  f = e("../../../store/actions");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const h = ({ snapId: e, permissionName: t, description: n }) => {
                  const a = (0, s.useI18nContext)(),
                    m = (0, o.useDispatch)(),
                    g = (0, r.useRef)(!1),
                    [h, y] = (0, r.useState)(!1),
                    [v, b] = (0, r.useState)(!1),
                    _ = p.DynamicSnapPermissions.includes(t);
                  return r.default.createElement(
                    i.default,
                    { ref: g },
                    r.default.createElement(l.ButtonIcon, {
                      iconName: l.IconName.MoreVertical,
                      ariaLabel: a("options"),
                      onClick: () => {
                        y(!0);
                      },
                      "data-testid": t
                    }),
                    h &&
                      r.default.createElement(
                        u.Menu,
                        {
                          anchorElement: g.current,
                          onHide: () => {
                            y(!1);
                          }
                        },
                        r.default.createElement(
                          u.MenuItem,
                          {
                            onClick: () => {
                              y(!1), b(!0);
                            }
                          },
                          r.default.createElement(l.Text, { variant: c.TextVariant.bodySm, style: { whiteSpace: "nowrap" } }, a("details"))
                        ),
                        _ &&
                          r.default.createElement(
                            u.MenuItem,
                            {
                              onClick: () => {
                                y(!1), m((0, f.revokeDynamicSnapPermissions)(e, [t]));
                              }
                            },
                            r.default.createElement(
                              l.Text,
                              { variant: c.TextVariant.bodySm, color: c.TextColor.errorDefault, style: { whiteSpace: "nowrap" } },
                              a("revokePermission")
                            )
                          )
                      ),
                    v &&
                      r.default.createElement(
                        d.default,
                        {
                          title: a("details"),
                          onClose: () => {
                            y(!1), b(!1);
                          }
                        },
                        r.default.createElement(
                          i.default,
                          { marginLeft: 4, marginRight: 4, marginBottom: 4 },
                          r.default.createElement(l.Text, null, n)
                        )
                      )
                  );
                };
                (n.PermissionCellOptions = h),
                  (h.propTypes = {
                    snapId: a.default.string.isRequired,
                    permissionName: a.default.string.isRequired,
                    description: a.default.oneOfType([a.default.string, a.default.object])
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permission-cell/permission-cell-options.js" }
    ],
    [
      4226,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../../ui/box": 4607,
        "../../ui/tooltip": 4736,
        "./permission-cell-options": 4225,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = f(e("react")),
                  a = f(e("prop-types")),
                  o = f(e("classnames")),
                  i = f(e("../../ui/box")),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../component-library"),
                  u = e("../../../helpers/utils/util"),
                  c = e("../../../hooks/useI18nContext"),
                  d = f(e("../../ui/tooltip")),
                  p = e("./permission-cell-options");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const m = ({
                  snapId: e,
                  permissionName: t,
                  title: n,
                  description: a,
                  weight: f,
                  avatarIcon: m,
                  dateApproved: g,
                  revoked: h,
                  showOptions: y,
                  hideStatus: v
                }) => {
                  var b;
                  const _ = (0, c.useI18nContext)(),
                    w = l.IconName.Info;
                  let k = s.IconColor.iconMuted,
                    T = s.IconColor.primaryDefault,
                    x = s.Color.primaryMuted;
                  h || 1 !== f || ((T = s.IconColor.warningDefault), (x = s.Color.warningMuted), (k = s.IconColor.warningDefault)),
                    g && ((T = s.IconColor.iconMuted), (x = s.Color.backgroundAlternative)),
                    h && ((T = s.IconColor.iconMuted), (x = s.Color.backgroundAlternative));
                  let E = m;
                  return (
                    "string" != typeof m && null != m && null !== (b = m.props) && void 0 !== b && b.iconName && (E = m.props.iconName),
                    r.default.createElement(
                      i.default,
                      {
                        className: "permission-cell",
                        justifyContent: s.JustifyContent.center,
                        alignItems: s.AlignItems.flexStart,
                        marginLeft: 4,
                        marginRight: 4,
                        paddingTop: 2,
                        paddingBottom: 2
                      },
                      r.default.createElement(
                        i.default,
                        null,
                        "string" == typeof E
                          ? r.default.createElement(l.AvatarIcon, {
                              iconName: E,
                              size: l.AvatarIconSize.Md,
                              iconProps: { size: l.IconSize.Sm },
                              color: T,
                              backgroundColor: x
                            })
                          : E
                      ),
                      r.default.createElement(
                        i.default,
                        { width: "full", marginLeft: 4, marginRight: 4 },
                        r.default.createElement(
                          l.Text,
                          {
                            size: s.Size.MD,
                            variant: s.TextVariant.bodyMd,
                            className: (0, o.default)("permission-cell__title", { "permission-cell__title-revoked": h })
                          },
                          n
                        ),
                        !v &&
                          r.default.createElement(
                            l.Text,
                            { className: "permission-cell__status", variant: s.TextVariant.bodySm, color: s.TextColor.textAlternative },
                            !h && (g ? _("approvedOn", [(0, u.formatDate)(g, "yyyy-MM-dd")]) : _("permissionRequested")),
                            h ? _("permissionRevoked") : ""
                          )
                      ),
                      r.default.createElement(
                        i.default,
                        null,
                        y && e
                          ? r.default.createElement(p.PermissionCellOptions, { snapId: e, permissionName: t, description: a })
                          : r.default.createElement(
                              d.default,
                              {
                                html: r.default.createElement(
                                  l.Text,
                                  { variant: s.TextVariant.bodySm, color: s.TextColor.textAlternative },
                                  a
                                ),
                                position: "bottom"
                              },
                              r.default.createElement(l.Icon, { color: k, name: w, size: l.IconSize.Sm })
                            )
                      )
                    )
                  );
                };
                m.propTypes = {
                  snapId: a.default.string,
                  permissionName: a.default.oneOfType([a.default.string, a.default.element]).isRequired,
                  title: a.default.oneOfType([a.default.string.isRequired, a.default.object.isRequired]),
                  description: a.default.oneOfType([a.default.string, a.default.object]),
                  weight: a.default.number,
                  avatarIcon: a.default.any.isRequired,
                  dateApproved: a.default.number,
                  revoked: a.default.bool,
                  showOptions: a.default.bool,
                  hideStatus: a.default.bool
                };
                n.default = m;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permission-cell/permission-cell.js" }
    ],
    [
      4227,
      { "./permission-page-container-content": 4228, "./permission-page-container.container": 4231 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "PermissionPageContainerContent", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var r = o(e("./permission-page-container.container")),
                  a = o(e("./permission-page-container-content"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permission-page-container/index.js" }
    ],
    [
      4228,
      { "./permission-page-container-content.component": 4229 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./permission-page-container-content.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permission-page-container/permission-page-container-content/index.js" }
    ],
    [
      4229,
      {
        "../../../ui/tooltip": 4736,
        "../../permissions-connect-header": 4234,
        "../../permissions-connect-permission-list": 4236,
        "@metamask/permission-controller": 1491,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = c(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = e("@metamask/permission-controller"),
                  i = c(e("../../permissions-connect-header")),
                  s = c(e("../../../ui/tooltip")),
                  l = c(e("../../permissions-connect-permission-list"));
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e, t, n) {
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
                class p extends a.PureComponent {
                  renderRequestedPermissions() {
                    const { selectedPermissions: e, subjectMetadata: t } = this.props;
                    return a.default.createElement(
                      "div",
                      { className: "permission-approval-container__content__requested" },
                      a.default.createElement(l.default, { permissions: e, targetSubjectMetadata: t })
                    );
                  }
                  renderAccountTooltip(e) {
                    const { selectedIdentities: t } = this.props,
                      { t: n } = this.context;
                    return a.default.createElement(
                      s.default,
                      {
                        key: "all-account-connect-tooltip",
                        position: "bottom",
                        wrapperClassName: "permission-approval-container__bold-title-elements",
                        html: a.default.createElement(
                          "div",
                          { style: { display: "flex", flexDirection: "column" } },
                          t.slice(0, 6).map((e, t) => a.default.createElement("div", { key: `tooltip-identity-${t}` }, e.addressLabel)),
                          t.length > 6 ? n("plusXMore", [t.length - 6]) : null
                        )
                      },
                      e
                    );
                  }
                  getTitle() {
                    var e;
                    const { subjectMetadata: t, selectedIdentities: n, allIdentitiesSelected: r, selectedPermissions: a } = this.props,
                      { t: o } = this.context;
                    return t.extensionId
                      ? o("externalExtension", [t.extensionId])
                      : a.eth_accounts
                      ? r
                        ? o("connectToAll", [this.renderAccountTooltip(o("connectToAllAccounts"))])
                        : n.length > 1
                        ? o("connectToMultiple", [this.renderAccountTooltip(o("connectToMultipleNumberOfAccounts", [n.length]))])
                        : o("connectTo", [null === (e = n[0]) || void 0 === e ? void 0 : e.addressLabel])
                      : o("permissionRequestCapitalized");
                  }
                  getHeaderText() {
                    const { subjectMetadata: e } = this.props,
                      { t: t } = this.context;
                    return e.subjectType === o.SubjectType.Snap
                      ? t("allowThisSnapTo")
                      : e.extensionId
                      ? t("allowExternalExtensionTo", [e.extensionId])
                      : t("allowThisSiteTo");
                  }
                  render() {
                    const { subjectMetadata: e } = this.props,
                      t = this.getTitle(),
                      n = this.getHeaderText();
                    return a.default.createElement(
                      "div",
                      { className: "permission-approval-container__content" },
                      a.default.createElement(
                        "div",
                        { className: "permission-approval-container__content-container" },
                        a.default.createElement(i.default, {
                          iconUrl: e.iconUrl,
                          iconName: e.name,
                          headerTitle: t,
                          headerText: n,
                          siteOrigin: e.origin,
                          subjectType: e.subjectType
                        }),
                        a.default.createElement(
                          "section",
                          { className: "permission-approval-container__permissions-container" },
                          this.renderRequestedPermissions()
                        )
                      )
                    );
                  }
                }
                (n.default = p),
                  d(p, "propTypes", {
                    subjectMetadata: r.default.shape({
                      name: r.default.string.isRequired,
                      origin: r.default.string.isRequired,
                      subjectType: r.default.string.isRequired,
                      extensionId: r.default.string,
                      iconUrl: r.default.string
                    }),
                    selectedPermissions: r.default.object.isRequired,
                    selectedIdentities: r.default.array,
                    allIdentitiesSelected: r.default.bool
                  }),
                  d(p, "defaultProps", { selectedIdentities: [], allIdentitiesSelected: !1 }),
                  d(p, "contextTypes", { t: r.default.func });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/components/app/permission-page-container/permission-page-container-content/permission-page-container-content.component.js"
      }
    ],
    [
      4230,
      {
        ".": 4227,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/permissions": 3964,
        "../../../helpers/utils/util": 4812,
        "../../ui/page-container": 4692,
        "../permissions-connect-footer": 4232,
        "../snaps/snap-privacy-warning": 4310,
        "@metamask/permission-controller": 1491,
        "@metamask/snaps-rpc-methods": 1692,
        lodash: 3312,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = h(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = e("lodash"),
                  i = e("@metamask/snaps-rpc-methods"),
                  s = e("@metamask/permission-controller"),
                  l = e("../../../../shared/constants/metametrics"),
                  u = e("../../ui/page-container"),
                  c = h(e("../permissions-connect-footer")),
                  d = e("../../../../shared/constants/permissions"),
                  p = h(e("../snaps/snap-privacy-warning")),
                  f = e("../../../helpers/utils/util"),
                  m = e(".");
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function y(e, t, n) {
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
                class v extends a.Component {
                  constructor(...e) {
                    super(...e),
                      y(this, "state", { selectedPermissions: this.getRequestedMethodState(this.getRequestedMethodNames(this.props)) }),
                      y(this, "onCancel", () => {
                        const { request: e, rejectPermissionsRequest: t } = this.props;
                        t(e.metadata.id);
                      }),
                      y(this, "onSubmit", () => {
                        const { request: e, approvePermissionsRequest: t, rejectPermissionsRequest: n, selectedIdentities: r } = this.props,
                          a = { ...e, permissions: { ...e.permissions }, approvedAccounts: r.map((e) => e.address) };
                        Object.keys(this.state.selectedPermissions).forEach((e) => {
                          this.state.selectedPermissions[e] || delete a.permissions[e];
                        }),
                          Object.keys(a.permissions).length > 0 ? t(a) : n(a.metadata.id);
                      });
                  }
                  componentDidUpdate() {
                    const e = this.getRequestedMethodNames(this.props);
                    (0, o.isEqual)(Object.keys(this.state.selectedPermissions), e) ||
                      this.setState({ selectedPermissions: this.getRequestedMethodState(e) });
                  }
                  getRequestedMethodState(e) {
                    return e.reduce(
                      (e, t) => (t === d.RestrictedMethods.wallet_snap ? ((e[t] = this.getDedupedSnapPermissions()), e) : ((e[t] = !0), e)),
                      {}
                    );
                  }
                  getDedupedSnapPermissions() {
                    var e;
                    const { request: t, currentPermissions: n } = this.props,
                      r = (0, f.getDedupedSnaps)(t, n);
                    return {
                      ...((null == t || null === (e = t.permissions) || void 0 === e ? void 0 : e[i.WALLET_SNAP_PERMISSION_KEY]) || {}),
                      caveats: [{ type: i.SnapCaveatType.SnapIds, value: r.reduce((e, t) => ((e[t] = {}), e), {}) }]
                    };
                  }
                  showSnapsPrivacyWarning() {
                    this.setState({ isShowingSnapsPrivacyWarning: !0 });
                  }
                  getRequestedMethodNames(e) {
                    return Object.keys(e.request.permissions || {});
                  }
                  componentDidMount() {
                    this.context.trackEvent({
                      category: l.MetaMetricsEventCategory.Auth,
                      event: "Tab Opened",
                      properties: { action: "Connect", legacy_event: !0 }
                    }),
                      this.props.request.permissions[i.WALLET_SNAP_PERMISSION_KEY] &&
                        !1 === this.props.snapsInstallPrivacyWarningShown &&
                        this.showSnapsPrivacyWarning();
                  }
                  render() {
                    const { requestMetadata: e, targetSubjectMetadata: t, selectedIdentities: n, allIdentitiesSelected: r } = this.props,
                      o = (e) => {
                        this.setState({ isShowingSnapsPrivacyWarning: e });
                      },
                      i = () => {
                        o(!1), this.props.setSnapsInstallPrivacyWarningShownStatus(!0);
                      };
                    return a.default.createElement(
                      a.default.Fragment,
                      null,
                      a.default.createElement(
                        a.default.Fragment,
                        null,
                        this.state.isShowingSnapsPrivacyWarning &&
                          a.default.createElement(p.default, { onAccepted: () => i(), onCanceled: () => this.onCancel() })
                      ),
                      a.default.createElement(m.PermissionPageContainerContent, {
                        requestMetadata: e,
                        subjectMetadata: t,
                        selectedPermissions: this.state.selectedPermissions,
                        selectedIdentities: n,
                        allIdentitiesSelected: r
                      }),
                      a.default.createElement(
                        "div",
                        { className: "permission-approval-container__footers" },
                        (null == t ? void 0 : t.subjectType) !== s.SubjectType.Snap && a.default.createElement(c.default, null),
                        a.default.createElement(u.PageContainerFooter, {
                          cancelButtonType: "default",
                          onCancel: () => this.onCancel(),
                          cancelText: this.context.t("cancel"),
                          onSubmit: () => this.onSubmit(),
                          submitText: this.context.t("connect"),
                          buttonSizeLarge: !1
                        })
                      )
                    );
                  }
                }
                (n.default = v),
                  y(v, "propTypes", {
                    approvePermissionsRequest: r.default.func.isRequired,
                    rejectPermissionsRequest: r.default.func.isRequired,
                    selectedIdentities: r.default.array,
                    allIdentitiesSelected: r.default.bool,
                    currentPermissions: r.default.object,
                    snapsInstallPrivacyWarningShown: r.default.bool.isRequired,
                    setSnapsInstallPrivacyWarningShownStatus: r.default.func,
                    request: r.default.object,
                    requestMetadata: r.default.object,
                    targetSubjectMetadata: r.default.shape({
                      name: r.default.string,
                      origin: r.default.string.isRequired,
                      subjectType: r.default.string.isRequired,
                      extensionId: r.default.string,
                      iconUrl: r.default.string
                    })
                  }),
                  y(v, "defaultProps", {
                    request: {},
                    requestMetadata: {},
                    selectedIdentities: [],
                    allIdentitiesSelected: !1,
                    currentPermissions: {}
                  }),
                  y(v, "contextTypes", { t: r.default.func, trackEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permission-page-container/permission-page-container.component.js" }
    ],
    [
      4231,
      { "../../../selectors": 5197, "./permission-page-container.component": 4230, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../selectors"),
                  i = (r = e("./permission-page-container.component")) && r.__esModule ? r : { default: r };
                n.default = (0, a.connect)((e, t) => {
                  var n;
                  const { selectedIdentities: r } = t,
                    a = (0, o.getPermissions)(e, null === (n = t.request.metadata) || void 0 === n ? void 0 : n.origin),
                    i = (0, o.getMetaMaskIdentities)(e);
                  return { allIdentitiesSelected: Object.keys(r).length === Object.keys(i).length && r.length > 1, currentPermissions: a };
                })(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permission-page-container/permission-page-container.container.js" }
    ],
    [
      4232,
      { "./permissions-connect-footer.component": 4233 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./permissions-connect-footer.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permissions-connect-footer/index.js" }
    ],
    [
      4233,
      { "../../../helpers/constants/zendesk-url": 4781, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a,
                  o,
                  i = c(e("prop-types")),
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  l = c(e("../../../helpers/constants/zendesk-url"));
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                class d extends s.Component {
                  render() {
                    const { t: e } = this.context;
                    return s.default.createElement(
                      "div",
                      { className: "permissions-connect-footer" },
                      s.default.createElement(
                        "div",
                        { className: "permissions-connect-footer__text" },
                        s.default.createElement("div", null, e("onlyConnectTrust")),
                        s.default.createElement(
                          "div",
                          {
                            className: "permissions-connect-footer__text--link",
                            onClick: () => {
                              global.platform.openTab({ url: l.default.USER_GUIDE_DAPPS });
                            }
                          },
                          e("learnMoreUpperCase")
                        )
                      )
                    );
                  }
                }
                (n.default = d),
                  (r = d),
                  (a = "contextTypes"),
                  (o = { t: i.default.func }),
                  (a = (function (e) {
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
                  })(a)) in r
                    ? Object.defineProperty(r, a, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                    : (r[a] = o);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permissions-connect-footer/permissions-connect-footer.component.js" }
    ],
    [
      4234,
      { "./permissions-connect-header.component": 4235 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./permissions-connect-header.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permissions-connect-header/index.js" }
    ],
    [
      4235,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../ui/box": 4607,
        "../../ui/site-origin": 4715,
        "@metamask/permission-controller": 1491,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = d(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = d(e("classnames")),
                  i = e("@metamask/permission-controller"),
                  s = d(e("../../ui/site-origin")),
                  l = d(e("../../ui/box")),
                  u = e("../../../helpers/constants/design-system");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p() {
                  return (
                    (p = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    p.apply(this, arguments)
                  );
                }
                function f(e, t, n) {
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
                class m extends a.Component {
                  renderHeaderIcon() {
                    const { iconUrl: e, iconName: t, siteOrigin: n, leftIcon: r, rightIcon: o, subjectType: l } = this.props;
                    return l === i.SubjectType.Snap
                      ? null
                      : a.default.createElement(
                          "div",
                          { className: "permissions-connect-header__icon" },
                          a.default.createElement(s.default, {
                            chip: !0,
                            siteOrigin: n,
                            title: n,
                            iconSrc: e,
                            name: t,
                            leftIcon: r,
                            rightIcon: o
                          })
                        );
                  }
                  render() {
                    const { boxProps: e, className: t, headerTitle: n, headerText: r } = this.props;
                    return a.default.createElement(
                      l.default,
                      p(
                        {
                          className: (0, o.default)("permissions-connect-header", t),
                          flexDirection: u.FLEX_DIRECTION.COLUMN,
                          justifyContent: u.JustifyContent.center
                        },
                        e
                      ),
                      this.renderHeaderIcon(),
                      a.default.createElement("div", { className: "permissions-connect-header__title" }, n),
                      a.default.createElement("div", { className: "permissions-connect-header__subtitle" }, r)
                    );
                  }
                }
                (n.default = m),
                  f(m, "propTypes", {
                    className: r.default.string,
                    iconUrl: r.default.string,
                    iconName: r.default.string.isRequired,
                    siteOrigin: r.default.string.isRequired,
                    headerTitle: r.default.node,
                    boxProps: r.default.shape({ ...l.default.propTypes }),
                    headerText: r.default.string,
                    leftIcon: r.default.node,
                    rightIcon: r.default.node,
                    subjectType: r.default.string
                  }),
                  f(m, "defaultProps", { iconUrl: null, headerTitle: "", headerText: "", boxProps: {} });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permissions-connect-header/permissions-connect-header.component.js" }
    ],
    [
      4236,
      { "./permissions-connect-permission-list": 4237 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./permissions-connect-permission-list")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permissions-connect-permission-list/index.js" }
    ],
    [
      4237,
      { "../../../helpers/utils/permission": 4806, "../../../hooks/useI18nContext": 4837, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = u);
                var r = s(e("react")),
                  a = s(e("prop-types")),
                  o = e("../../../helpers/utils/permission"),
                  i = e("../../../hooks/useI18nContext");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e, t) {
                  const { label: n, leftIcon: a, permissionName: i } = e;
                  return r.default.createElement(
                    "div",
                    { className: "permission", key: `${i}-${t}` },
                    "string" == typeof a ? r.default.createElement("i", { className: a }) : a,
                    n,
                    (0, o.getRightIcon)(e)
                  );
                }
                function u({ permissions: e, targetSubjectMetadata: t }) {
                  const n = (0, i.useI18nContext)();
                  return r.default.createElement(
                    "div",
                    { className: "permissions-connect-permission-list" },
                    (0, o.getWeightedPermissions)(n, e, t).map(l)
                  );
                }
                u.propTypes = { permissions: a.default.object.isRequired, targetSubjectMetadata: a.default.object.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/permissions-connect-permission-list/permissions-connect-permission-list.js" }
    ],
    [
      4238,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../../shared/constants/time": 3972,
        "../../../helpers/utils/webcam-utils": 4813,
        "../../../hooks/useI18nContext": 4837,
        "../../ui/page-container/page-container-footer/page-container-footer.component": 4695,
        "./enhanced-reader": 4239,
        "@ngraveio/bc-ur": 1901,
        loglevel: 3322,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = m(e("loglevel")),
                  o = e("@ngraveio/bc-ur"),
                  i = m(e("prop-types")),
                  s = e("../../../../app/scripts/lib/util"),
                  l = e("../../../../shared/constants/app"),
                  u = m(e("../../../helpers/utils/webcam-utils")),
                  c = m(e("../../ui/page-container/page-container-footer/page-container-footer.component")),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../../shared/constants/time"),
                  f = m(e("./enhanced-reader"));
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const h = "ACCESSING_CAMERA",
                  y = "NEED_TO_ALLOW_ACCESS",
                  v = "READY",
                  b = ({ isReadingWallet: e, handleCancel: t, handleSuccess: n, setErrorTitle: i }) => {
                    const m = (0, d.useI18nContext)(),
                      [g, b] = (0, r.useState)(h),
                      [_, w] = (0, r.useState)(null),
                      [k, T] = (0, r.useState)(new o.URDecoder());
                    let x = null;
                    const E = (0, r.useRef)(!1),
                      C = async () => {
                        try {
                          const { environmentReady: e } = await u.default.checkStatus();
                          if (!e && (0, s.getEnvironmentType)() !== l.ENVIRONMENT_TYPE_FULLSCREEN) {
                            const e = new URL(window.location.href).hash,
                              t = e ? e.substring(1) : null;
                            global.platform.openExtensionInBrowser(t);
                          }
                        } catch (e) {
                          E.current && w(e);
                        }
                        return O();
                      },
                      M = async () => {
                        try {
                          const { permissions: e } = await u.default.checkStatus();
                          if (e) {
                            if ((await new Promise((e) => setTimeout(e, 2 * p.SECOND)), !E.current)) return;
                            b(v);
                          } else E.current && ((x = setTimeout(M, p.SECOND)), b(y));
                        } catch (e) {
                          E.current && w(e);
                        }
                      },
                      P = (t) => {
                        try {
                          if (!t) return;
                          if ((k.receivePart(t), k.isComplete())) {
                            const e = k.resultUR();
                            n(e).catch(w);
                          }
                        } catch (t) {
                          i(m(e ? "QRHardwareUnknownQRCodeTitle" : "QRHardwareInvalidTransactionTitle")), w(new Error(m("unknownQrCode")));
                        }
                      },
                      O = () => {
                        try {
                          M();
                        } catch (e) {
                          if (!E.current) return;
                          "NotAllowedError" === e.name ? (a.default.info(`Permission denied: '${e}'`), b(y)) : w(e);
                        }
                      };
                    (0, r.useEffect)(
                      () => (
                        (E.current = !0),
                        C(),
                        () => {
                          (E.current = !1), clearTimeout(x);
                        }
                      ),
                      []
                    ),
                      (0, r.useEffect)(() => {
                        g === v ? O() : g === y && M();
                      }, [g]);
                    const S = () => {
                      clearTimeout(x), b(h), w(null), T(new o.URDecoder()), C();
                    };
                    return r.default.createElement(
                      "div",
                      { className: "qr-scanner" },
                      _
                        ? (() => {
                            let n, a;
                            return (
                              "NO_WEBCAM_FOUND" === _.type
                                ? ((n = m("noWebcamFoundTitle")), (a = m("noWebcamFound")))
                                : _.message === m("unknownQrCode")
                                ? (a = m(e ? "QRHardwareUnknownWalletQRCode" : "unknownQrCode"))
                                : _.message === m("QRHardwareMismatchedSignId")
                                ? (a = m("QRHardwareMismatchedSignId"))
                                : ((n = m("generalCameraErrorTitle")), (a = m("generalCameraError"))),
                              r.default.createElement(
                                r.default.Fragment,
                                null,
                                r.default.createElement(
                                  "div",
                                  { className: "qr-scanner__image" },
                                  r.default.createElement("img", { src: "images/webcam.svg", width: "70", height: "70", alt: "" })
                                ),
                                n ? r.default.createElement("div", { className: "qr-scanner__title" }, n) : null,
                                r.default.createElement("div", { className: "qr-scanner__error" }, a),
                                r.default.createElement(c.default, {
                                  onCancel: () => {
                                    i(""), t();
                                  },
                                  onSubmit: () => {
                                    i(""), S();
                                  },
                                  cancelText: m("cancel"),
                                  submitText: m("tryAgain"),
                                  submitButtonType: "confirm"
                                })
                              )
                            );
                          })()
                        : (() => {
                            let e;
                            return (
                              g === h
                                ? (e = m("accessingYourCamera"))
                                : g === v
                                ? (e = m("QRHardwareScanInstructions"))
                                : g === y && (e = m("youNeedToAllowCameraAccess")),
                              r.default.createElement(
                                r.default.Fragment,
                                null,
                                r.default.createElement(
                                  "div",
                                  { className: "qr-scanner__content" },
                                  r.default.createElement(f.default, { handleScan: P })
                                ),
                                e && r.default.createElement("div", { className: "qr-scanner__status" }, e)
                              )
                            );
                          })()
                    );
                  };
                b.propTypes = {
                  isReadingWallet: i.default.bool.isRequired,
                  handleCancel: i.default.func.isRequired,
                  handleSuccess: i.default.func.isRequired,
                  setErrorTitle: i.default.func.isRequired
                };
                n.default = b;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/qr-hardware-popover/base-reader.js" }
    ],
    [
      4239,
      {
        "../../../../shared/constants/time": 3972,
        "../../ui/spinner": 4717,
        "@zxing/browser": 2203,
        "@zxing/library": 2214,
        loglevel: 3322,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("@zxing/library"),
                  o = e("@zxing/browser"),
                  i = c(e("loglevel")),
                  s = c(e("prop-types")),
                  l = e("../../../../shared/constants/time"),
                  u = c(e("../../ui/spinner"));
                function c(e) {
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
                const p = ({ handleScan: e }) => {
                  const [t, n] = (0, r.useState)(!1),
                    s = (0, r.useMemo)(() => {
                      const e = new Map();
                      return (
                        e.set(a.DecodeHintType.POSSIBLE_FORMATS, [a.BarcodeFormat.QR_CODE]),
                        new o.BrowserQRCodeReader(e, {
                          delayBetweenScanAttempts: 100 * l.MILLISECOND,
                          delayBetweenScanSuccess: 100 * l.MILLISECOND
                        })
                      );
                    }, []);
                  return (
                    (0, r.useEffect)(() => {
                      const t = document.getElementById("video"),
                        r = () => {
                          n(!0);
                        };
                      t.addEventListener("canplay", r);
                      const a = s.decodeFromVideoDevice(undefined, "video", (t) => {
                        t && e(t.getText());
                      });
                      return () => {
                        t.removeEventListener("canplay", r),
                          a
                            .then((e) => {
                              e && e.stop();
                            })
                            .catch(i.default.info);
                      };
                    }, []),
                    r.default.createElement(
                      "div",
                      { className: "qr-scanner__content__video-wrapper" },
                      r.default.createElement("video", {
                        id: "video",
                        style: { display: t ? "block" : "none", width: "100%", filter: "blur(4px)" }
                      }),
                      t ? null : r.default.createElement(u.default, { color: "var(--color-warning-default)" })
                    )
                  );
                };
                p.propTypes = { handleScan: s.default.func.isRequired };
                n.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/qr-hardware-popover/enhanced-reader.js" }
    ],
    [
      4240,
      { "./qr-hardware-popover": 4241 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (r = e("./qr-hardware-popover")) && r.__esModule ? r : { default: r };
                n.default = a.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/qr-hardware-popover/index.js" }
    ],
    [
      4241,
      {
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../ui/popover": 4699,
        "./qr-hardware-sign-request": 4242,
        "./qr-hardware-wallet-importer": 4246,
        "eth-rpc-errors": 2648,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = e("eth-rpc-errors"),
                  i = e("../../../selectors"),
                  s = p(e("../../ui/popover")),
                  l = e("../../../hooks/useI18nContext"),
                  u = e("../../../store/actions"),
                  c = p(e("./qr-hardware-wallet-importer")),
                  d = p(e("./qr-hardware-sign-request"));
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
                n.default = () => {
                  var e;
                  const t = (0, l.useI18nContext)(),
                    n = (0, a.useSelector)(i.getCurrentQRHardwareState),
                    { sync: p, sign: f } = n,
                    m = null == p ? void 0 : p.reading,
                    g = null == f ? void 0 : f.request,
                    h = m || g,
                    [y, v] = (0, r.useState)(""),
                    { txData: b } = (0, a.useSelector)((e) => e.confirmTransaction),
                    _ = (0, r.useMemo)(() => b, [null == f || null === (e = f.request) || void 0 === e ? void 0 : e.requestId]),
                    w = (0, a.useDispatch)(),
                    k = (0, r.useCallback)(() => w((0, u.cancelSyncQRHardware)()), [w]),
                    T = (0, r.useCallback)(() => {
                      w((0, u.rejectPendingApproval)(_.id, (0, o.serializeError)(o.ethErrors.provider.userRejectedRequest()))),
                        w((0, u.cancelTx)(_)),
                        w((0, u.cancelQRHardwareSignRequest)());
                    }, [w, _]),
                    x = (0, r.useMemo)(() => {
                      let e = "";
                      return (
                        g ? (e = t("QRHardwareSignRequestTitle")) : m && (e = t("QRHardwareWalletImporterTitle")), "" !== y && (e = y), e
                      );
                    }, [g, m, t, y]);
                  return h
                    ? r.default.createElement(
                        s.default,
                        { title: x, onClose: m ? k : T },
                        m && r.default.createElement(c.default, { handleCancel: k, setErrorTitle: v }),
                        g && r.default.createElement(d.default, { setErrorTitle: v, handleCancel: T, request: f.request })
                      )
                    : null;
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/qr-hardware-popover/qr-hardware-popover.js" }
    ],
    [
      4242,
      { "./qr-hardware-sign-request.component": 4244 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (r = e("./qr-hardware-sign-request.component")) && r.__esModule ? r : { default: r };
                n.default = a.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/qr-hardware-popover/qr-hardware-sign-request/index.js" }
    ],
    [
      4243,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "../../../ui/page-container": 4692,
        "@ngraveio/bc-ur": 1901,
        buffer: 2392,
        "prop-types": 3450,
        "qrcode.react": 3520,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                (function (t) {
                  (function () {
                    Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                    var r = (function (e, t) {
                        if (!t && e && e.__esModule) return e;
                        if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                        var n = p(t);
                        if (n && n.has(e)) return n.get(e);
                        var r = { __proto__: null },
                          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                          }
                        return (r.default = e), n && n.set(e, r), r;
                      })(e("react")),
                      a = d(e("qrcode.react")),
                      o = e("@ngraveio/bc-ur"),
                      i = d(e("prop-types")),
                      s = e("../../../../hooks/useI18nContext"),
                      l = e("../../../../helpers/constants/design-system"),
                      u = e("../../../ui/page-container"),
                      c = e("../../../component-library");
                    function d(e) {
                      return e && e.__esModule ? e : { default: e };
                    }
                    function p(e) {
                      if ("function" != typeof WeakMap) return null;
                      var t = new WeakMap(),
                        n = new WeakMap();
                      return (p = function (e) {
                        return e ? n : t;
                      })(e);
                    }
                    const f = ({ type: e, cbor: n, cancelQRHardwareSignRequest: i, toRead: d }) => {
                      const p = (0, s.useI18nContext)(),
                        f = (0, r.useMemo)(() => new o.UREncoder(new o.UR(t.from(n, "hex"), e), 400), [n, e]),
                        [m, g] = (0, r.useState)(f.nextPart());
                      return (
                        (0, r.useEffect)(() => {
                          const e = setInterval(() => {
                            g(f.nextPart());
                          }, 100);
                          return () => {
                            clearInterval(e);
                          };
                        }, [f]),
                        r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(
                            c.Box,
                            null,
                            r.default.createElement(c.Text, { align: l.TextAlign.Center }, p("QRHardwareSignRequestSubtitle"))
                          ),
                          r.default.createElement(
                            c.Box,
                            {
                              paddingTop: 4,
                              paddingBottom: 4,
                              display: l.Display.Flex,
                              alignItems: l.AlignItems.center,
                              flexDirection: l.FlexDirection.Column
                            },
                            r.default.createElement(
                              "div",
                              { style: { padding: 20, backgroundColor: "var(--qr-code-white-background)" } },
                              r.default.createElement(a.default, { value: m.toUpperCase(), size: 250 })
                            )
                          ),
                          r.default.createElement(
                            c.Box,
                            { paddingBottom: 4, paddingLeft: 4, paddingRight: 4 },
                            r.default.createElement(c.Text, { align: l.TextAlign.Center }, p("QRHardwareSignRequestDescription"))
                          ),
                          r.default.createElement(u.PageContainerFooter, {
                            onCancel: i,
                            onSubmit: d,
                            cancelText: p("QRHardwareSignRequestCancel"),
                            submitText: p("QRHardwareSignRequestGetSignature"),
                            submitButtonType: "confirm"
                          })
                        )
                      );
                    };
                    f.propTypes = {
                      type: i.default.string.isRequired,
                      cbor: i.default.string.isRequired,
                      cancelQRHardwareSignRequest: i.default.func.isRequired,
                      toRead: i.default.func.isRequired
                    };
                    n.default = f;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/qr-hardware-popover/qr-hardware-sign-request/player.js" }
    ],
    [
      4244,
      { "../../../../store/actions": 5204, "./player": 4243, "./reader": 4245, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../../../store/actions"),
                  i = l(e("./player")),
                  s = l(e("./reader"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const c = ({ request: e, handleCancel: t, setErrorTitle: n }) => {
                  const [a, l] = (0, r.useState)("play"),
                    u = (0, r.useCallback)(() => l("read"), []);
                  return "play" === a
                    ? (() => {
                        const { payload: n } = e;
                        return r.default.createElement(i.default, {
                          type: n.type,
                          cbor: n.cbor,
                          cancelQRHardwareSignRequest: t,
                          toRead: u
                        });
                      })()
                    : r.default.createElement(s.default, {
                        cancelQRHardwareSignRequest: t,
                        submitQRHardwareSignature: o.submitQRHardwareSignature,
                        requestId: e.requestId,
                        setErrorTitle: n
                      });
                };
                c.propTypes = {
                  request: a.default.object.isRequired,
                  handleCancel: a.default.func.isRequired,
                  setErrorTitle: a.default.func.isRequired
                };
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/qr-hardware-popover/qr-hardware-sign-request/qr-hardware-sign-request.component.js" }
    ],
    [
      4245,
      {
        "../../../../hooks/useI18nContext": 4837,
        "../base-reader": 4238,
        "@keystonehq/bc-ur-registry-eth": 520,
        "prop-types": 3450,
        react: 3690,
        uuid: 3902
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = c(e("react")),
                  a = e("@keystonehq/bc-ur-registry-eth"),
                  o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("uuid")),
                  i = c(e("prop-types")),
                  s = c(e("../base-reader")),
                  l = e("../../../../hooks/useI18nContext");
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const d = ({ submitQRHardwareSignature: e, cancelQRHardwareSignRequest: t, requestId: n, setErrorTitle: i }) => {
                  const u = (0, l.useI18nContext)();
                  return r.default.createElement(s.default, {
                    isReadingWallet: !1,
                    handleCancel: () => {
                      t();
                    },
                    handleSuccess: async (t) => {
                      if ("eth-signature" === t.type) {
                        const r = a.ETHSignature.fromCBOR(t.cbor).getRequestId(),
                          s = o.stringify(r);
                        if (s === n) return await e(s, t.cbor.toString("hex"));
                        throw (i(u("QRHardwareInvalidTransactionTitle")), new Error(u("QRHardwareMismatchedSignId")));
                      }
                      throw (i(u("QRHardwareInvalidTransactionTitle")), new Error(u("unknownQrCode")));
                    },
                    setErrorTitle: i
                  });
                };
                d.propTypes = {
                  submitQRHardwareSignature: i.default.func.isRequired,
                  cancelQRHardwareSignRequest: i.default.func.isRequired,
                  requestId: i.default.string.isRequired,
                  setErrorTitle: i.default.func.isRequired
                };
                n.default = d;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/qr-hardware-popover/qr-hardware-sign-request/reader.js" }
    ],
    [
      4246,
      { "./qr-hardware-wallet-importer.component": 4247 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (r = e("./qr-hardware-wallet-importer.component")) && r.__esModule ? r : { default: r };
                n.default = a.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/qr-hardware-popover/qr-hardware-wallet-importer/index.js" }
    ],
    [
      4247,
      {
        "../../../../hooks/useI18nContext": 4837,
        "../../../../store/actions": 5204,
        "../base-reader": 4238,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../../../store/actions"),
                  i = l(e("../base-reader")),
                  s = e("../../../../hooks/useI18nContext");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ handleCancel: e, setErrorTitle: t }) => {
                  const n = (0, s.useI18nContext)();
                  return r.default.createElement(i.default, {
                    isReadingWallet: !0,
                    handleCancel: e,
                    handleSuccess: async (e) => {
                      if ("crypto-hdkey" === e.type) return await (0, o.submitQRHardwareCryptoHDKey)(e.cbor.toString("hex"));
                      if ("crypto-account" === e.type) return await (0, o.submitQRHardwareCryptoAccount)(e.cbor.toString("hex"));
                      throw (t(n("QRHardwareUnknownQRCodeTitle")), new Error(n("unknownQrCode")));
                    },
                    setErrorTitle: t
                  });
                };
                u.propTypes = { handleCancel: a.default.func.isRequired, setErrorTitle: a.default.func.isRequired };
                n.default = u;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/components/app/qr-hardware-popover/qr-hardware-wallet-importer/qr-hardware-wallet-importer.component.js"
      }
    ],
    [
      4248,
      { "./recovery-phrase-reminder": 4249 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./recovery-phrase-reminder")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/recovery-phrase-reminder/index.js" }
    ],
    [
      4249,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../../ui/box": 4607,
        "../../ui/button": 4611,
        "../../ui/popover": 4699,
        "prop-types": 3450,
        react: 3690,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = m);
                var r = f(e("react")),
                  a = f(e("prop-types")),
                  o = e("react-router-dom"),
                  i = e("../../../hooks/useI18nContext"),
                  s = f(e("../../ui/box")),
                  l = f(e("../../ui/button")),
                  u = f(e("../../ui/popover")),
                  c = e("../../../helpers/constants/design-system"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../component-library");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m({ onConfirm: e, hasBackedUp: t }) {
                  const n = (0, i.useI18nContext)(),
                    a = (0, o.useHistory)();
                  return r.default.createElement(
                    u.default,
                    { centerTitle: !0, title: n("recoveryPhraseReminderTitle") },
                    r.default.createElement(
                      s.default,
                      { paddingRight: 4, paddingBottom: 6, paddingLeft: 4, className: "recovery-phrase-reminder" },
                      r.default.createElement(
                        p.Text,
                        { color: c.TextColor.textDefault, align: c.TextAlign.Center, variant: c.TextVariant.bodyMd, marginBottom: 4 },
                        n("recoveryPhraseReminderSubText")
                      ),
                      r.default.createElement(
                        s.default,
                        { marginTop: 4, marginBottom: 8 },
                        r.default.createElement(
                          "ul",
                          { className: "recovery-phrase-reminder__list" },
                          r.default.createElement(
                            p.Text,
                            { as: "li", color: c.TextColor.textDefault, fontWeight: c.FontWeight.Bold },
                            n("recoveryPhraseReminderItemOne")
                          ),
                          r.default.createElement(p.Text, { as: "li" }, n("recoveryPhraseReminderItemTwo")),
                          r.default.createElement(
                            p.Text,
                            { as: "li" },
                            t
                              ? n("recoveryPhraseReminderHasBackedUp")
                              : r.default.createElement(
                                  r.default.Fragment,
                                  null,
                                  n("recoveryPhraseReminderHasNotBackedUp"),
                                  r.default.createElement(
                                    s.default,
                                    { display: c.DISPLAY.INLINE_BLOCK, marginLeft: 1 },
                                    r.default.createElement(
                                      l.default,
                                      {
                                        type: "link",
                                        onClick: () => {
                                          a.push(d.ONBOARDING_UNLOCK_ROUTE);
                                        },
                                        style: { fontSize: "inherit", padding: 0 }
                                      },
                                      n("recoveryPhraseReminderBackupStart")
                                    )
                                  )
                                )
                          )
                        )
                      ),
                      r.default.createElement(
                        s.default,
                        { justifyContent: c.JustifyContent.center },
                        r.default.createElement(
                          s.default,
                          { width: c.BLOCK_SIZES.TWO_FIFTHS },
                          r.default.createElement(l.default, { type: "primary", onClick: e }, n("recoveryPhraseReminderConfirm"))
                        )
                      )
                    )
                  );
                }
                m.propTypes = { hasBackedUp: a.default.bool.isRequired, onConfirm: a.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/recovery-phrase-reminder/recovery-phrase-reminder.js" }
    ],
    [
      4250,
      { "./reveal-SRP-modal": 4251 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./reveal-SRP-modal")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/reveal-SRP-modal/index.js" }
    ],
    [
      4251,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = d);
                var r,
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../hooks/useI18nContext"),
                  l = e("../../../store/actions"),
                  u = e("../../component-library");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d({ setSecretRecoveryPhrase: e, onClose: t, isOpen: n }) {
                  const r = (0, s.useI18nContext)(),
                    [a, c] = (0, o.useState)(""),
                    d = (0, o.useCallback)(
                      async (t) => {
                        const n = await (0, l.getSeedPhrase)(t);
                        e(n);
                      },
                      [e]
                    );
                  return o.default.createElement(
                    u.Modal,
                    { isOpen: n, onClose: t },
                    o.default.createElement(u.ModalOverlay, null),
                    o.default.createElement(
                      u.ModalContent,
                      null,
                      o.default.createElement(u.ModalHeader, { onClose: t }, r("revealSeedWords")),
                      o.default.createElement(
                        u.Box,
                        { paddingLeft: 4, paddingRight: 4 },
                        o.default.createElement(
                          "form",
                          {
                            onSubmit: (e) => {
                              e.preventDefault(), d(a);
                            }
                          },
                          o.default.createElement(u.FormTextField, {
                            marginTop: 6,
                            id: "account-details-authenticate",
                            label: r("enterYourPassword"),
                            placeholder: r("password"),
                            onChange: (e) => c(e.target.value),
                            value: a,
                            variant: i.TextVariant.bodySm,
                            type: "password",
                            labelProps: { fontWeight: i.FontWeight.Medium },
                            autoFocus: !0
                          })
                        ),
                        o.default.createElement(
                          u.Box,
                          { display: i.Display.Flex, marginTop: 6, gap: 2 },
                          o.default.createElement(u.ButtonSecondary, { onClick: t, block: !0 }, r("cancel")),
                          o.default.createElement(u.ButtonPrimary, { onClick: () => d(a), disabled: "" === a, block: !0 }, r("confirm"))
                        )
                      )
                    )
                  );
                }
                d.propTypes = {
                  setSecretRecoveryPhrase: a.default.func.isRequired,
                  onClose: a.default.func.isRequired,
                  isOpen: a.default.bool.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/reveal-SRP-modal/reveal-SRP-modal.js" }
    ],
    [
      4252,
      {
        "../../../../../shared/constants/security-provider": 3966,
        "../../../../contexts/i18n": 4748,
        "../../../../helpers/constants/design-system": 4771,
        "../../../component-library": 4453,
        "../security-provider-banner-alert": 4253,
        "@sentry/browser": 1982,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = d(e("prop-types")),
                  o = e("@sentry/browser"),
                  i = e("../../../component-library"),
                  s = e("../../../../helpers/constants/design-system"),
                  l = e("../../../../contexts/i18n"),
                  u = e("../../../../../shared/constants/security-provider"),
                  c = d(e("../security-provider-banner-alert"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f() {
                  return (
                    (f = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    f.apply(this, arguments)
                  );
                }
                const m = Object.freeze({
                    [u.BlockaidReason.approvalFarming]: "blockaidDescriptionApproveFarming",
                    [u.BlockaidReason.permitFarming]: "blockaidDescriptionApproveFarming",
                    [u.BlockaidReason.setApprovalForAll]: "blockaidDescriptionApproveFarming",
                    [u.BlockaidReason.blurFarming]: "blockaidDescriptionBlurFarming",
                    [u.BlockaidReason.failed]: "blockaidDescriptionFailed",
                    [u.BlockaidReason.seaportFarming]: "blockaidDescriptionSeaportFarming",
                    [u.BlockaidReason.maliciousDomain]: "blockaidDescriptionMaliciousDomain",
                    [u.BlockaidReason.rawSignatureFarming]: "blockaidDescriptionMightLoseAssets",
                    [u.BlockaidReason.tradeOrderFarming]: "blockaidDescriptionMightLoseAssets",
                    [u.BlockaidReason.rawNativeTokenTransfer]: "blockaidDescriptionTransferFarming",
                    [u.BlockaidReason.transferFarming]: "blockaidDescriptionTransferFarming",
                    [u.BlockaidReason.transferFromFarming]: "blockaidDescriptionTransferFarming",
                    [u.BlockaidReason.other]: "blockaidDescriptionMightLoseAssets"
                  }),
                  g = Object.freeze({
                    [u.BlockaidReason.failed]: "blockaidTitleMayNotBeSafe",
                    [u.BlockaidReason.rawSignatureFarming]: "blockaidTitleSuspicious"
                  });
                function h({ securityAlertResponse: e, ...t }) {
                  const n = (0, r.useContext)(l.I18nContext);
                  if (!e) return null;
                  const { reason: a, result_type: d, features: p } = e;
                  if (d === u.BlockaidResultType.Benign) return null;
                  m[a] || (0, o.captureException)(`BlockaidBannerAlert: Unidentified reason '${a}'`);
                  const h = n(m[a] || "other"),
                    y =
                      null != p && p.length
                        ? r.default.createElement(
                            i.Text,
                            { as: "ul", overflowWrap: s.OverflowWrap.BreakWord },
                            p.map((e, t) => r.default.createElement("li", { key: `blockaid-detail-${t}` }, "• ", e))
                          )
                        : null,
                    v = d === u.BlockaidResultType.Failed,
                    b = d === u.BlockaidResultType.Malicious ? s.Severity.Danger : s.Severity.Warning,
                    _ = n(g[a] || "blockaidTitleDeceptive");
                  return r.default.createElement(
                    c.default,
                    f({ description: h, details: y, provider: v ? null : u.SecurityProvider.Blockaid, severity: b, title: _ }, t)
                  );
                }
                h.propTypes = { securityAlertResponse: a.default.object };
                n.default = h;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert.js" }
    ],
    [
      4253,
      {
        "../../../../shared/constants/security-provider": 3966,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/zendesk-url": 4781,
        "../../component-library": 4453,
        "../../ui/disclosure": 4634,
        "../../ui/disclosure/disclosure.constants": 4632,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = p(e("prop-types")),
                  o = e("../../component-library"),
                  i = p(e("../../ui/disclosure")),
                  s = e("../../ui/disclosure/disclosure.constants"),
                  l = e("../../../contexts/i18n"),
                  u = e("../../../helpers/constants/design-system"),
                  c = e("../../../../shared/constants/security-provider"),
                  d = p(e("../../../helpers/constants/zendesk-url"));
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
                function m() {
                  return (
                    (m = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    m.apply(this, arguments)
                  );
                }
                function g({ description: e, details: t, onClickSupportLink: n, provider: a, severity: p, title: f, ...g }) {
                  const h = (0, r.useContext)(l.I18nContext);
                  return r.default.createElement(
                    o.BannerAlert,
                    m({ "data-testid": "security-provider-banner-alert", title: f, severity: p }, g),
                    r.default.createElement(o.Text, { marginTop: 2 }, e),
                    t &&
                      r.default.createElement(
                        i.default,
                        { title: h("seeDetails"), variant: s.DisclosureVariant.Arrow },
                        t,
                        r.default.createElement(
                          o.Text,
                          { marginTop: 3, display: u.Display.Flex },
                          h("somethingDoesntLookRight", [
                            r.default.createElement(
                              o.ButtonLink,
                              {
                                key: `security-provider-button-supporturl-${a}`,
                                size: u.Size.inherit,
                                href: d.default.SUPPORT_URL,
                                externalLink: !0,
                                onClick: n
                              },
                              h("contactUs")
                            )
                          ])
                        )
                      ),
                    a &&
                      r.default.createElement(
                        o.Text,
                        {
                          marginTop: 3,
                          display: u.Display.Flex,
                          alignItems: u.AlignItems.center,
                          color: u.Color.textAlternative,
                          variant: u.TextVariant.bodySm
                        },
                        r.default.createElement(o.Icon, {
                          className: "disclosure__summary--icon",
                          color: u.IconColor.primaryDefault,
                          name: o.IconName.SecurityTick,
                          size: o.IconSize.Sm,
                          marginInlineEnd: 1
                        }),
                        h("securityProviderPoweredBy", [
                          r.default.createElement(
                            o.ButtonLink,
                            {
                              key: `security-provider-button-link-${a}`,
                              size: u.Size.inherit,
                              href: c.SECURITY_PROVIDER_CONFIG[a].url,
                              externalLink: !0
                            },
                            h(c.SECURITY_PROVIDER_CONFIG[a].tKeyName)
                          )
                        ])
                      )
                  );
                }
                g.propTypes = {
                  description: a.default.oneOfType([a.default.string, a.default.element]).isRequired,
                  severity: a.default.oneOf([u.Severity.Danger, u.Severity.Warning]).isRequired,
                  title: a.default.string.isRequired,
                  details: a.default.oneOfType([a.default.string, a.default.element]),
                  provider: a.default.oneOf(Object.values(c.SecurityProvider)),
                  onClickSupportLink: a.default.func
                };
                n.default = g;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/security-provider-banner-alert/security-provider-banner-alert.js" }
    ],
    [
      4254,
      { "./security-provider-banner-message": 4255 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./security-provider-banner-message")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/security-provider-banner-message/index.js" }
    ],
    [
      4255,
      {
        "../../../../.storybook/i18n": 1,
        "../../../../shared/constants/security-provider": 3966,
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = d);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../../shared/constants/security-provider"),
                  l = e("../../../../.storybook/i18n"),
                  u = e("../../component-library");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d({ securityProviderResponse: e }) {
                  const t = (0, a.useContext)(l.I18nContext);
                  let n, r, o;
                  return (
                    e.flagAsDangerous === s.SECURITY_PROVIDER_MESSAGE_SEVERITY.MALICIOUS
                      ? ((n = "" === e.reason_header ? t("requestFlaggedAsMaliciousFallbackCopyReasonTitle") : e.reason_header),
                        (r = "" === e.reason ? t("requestFlaggedAsMaliciousFallbackCopyReason") : e.reason),
                        (o = i.SEVERITIES.DANGER))
                      : e.flagAsDangerous === s.SECURITY_PROVIDER_MESSAGE_SEVERITY.NOT_SAFE
                      ? ((n = t("requestMayNotBeSafe")), (r = t("requestMayNotBeSafeError")), (o = i.SEVERITIES.WARNING))
                      : ((n = t("requestNotVerified")), (r = t("requestNotVerifiedError")), (o = i.SEVERITIES.WARNING)),
                    a.default.createElement(
                      u.BannerAlert,
                      { className: "security-provider-banner-message", marginTop: 4, marginRight: 4, marginLeft: 4, title: n, severity: o },
                      a.default.createElement(u.Text, { variant: i.TextVariant.bodySm, as: "h6" }, r),
                      a.default.createElement(
                        u.Text,
                        { variant: i.TextVariant.bodySm, as: "h6", color: i.Color.textAlternative },
                        t("securityAlert", [
                          a.default.createElement(
                            u.ButtonLink,
                            { key: "opensea_link", size: i.Size.inherit, href: "https://opensea.io/", target: "_blank" },
                            t("openSeaNew")
                          ),
                          a.default.createElement(
                            u.ButtonLink,
                            { key: "blockaid_link", size: i.Size.inherit, href: "https://blockaid.io/", target: "_blank" },
                            t("blockaid")
                          )
                        ])
                      )
                    )
                  );
                }
                d.propTypes = { securityProviderResponse: o.default.object };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/security-provider-banner-message/security-provider-banner-message.js" }
    ],
    [
      4256,
      { "./set-approval-for-all-warning": 4257 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./set-approval-for-all-warning")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/set-approval-for-all-warning/index.js" }
    ],
    [
      4257,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../../ui/box": 4607,
        "../../ui/identicon": 4664,
        "../../ui/popover": 4699,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = p(e("react")),
                  a = p(e("prop-types")),
                  o = e("../../../hooks/useI18nContext"),
                  i = p(e("../../ui/popover")),
                  s = p(e("../../ui/box")),
                  l = e("../../../helpers/constants/design-system"),
                  u = p(e("../../ui/identicon")),
                  c = e("../../../helpers/utils/util"),
                  d = e("../../component-library");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const f = ({ collectionName: e, senderAddress: t, name: n, total: a, isERC721: p, onSubmit: f, onCancel: m }) => {
                  const g = (0, o.useI18nContext)(),
                    h = r.default.createElement(
                      s.default,
                      {
                        display: l.DISPLAY.FLEX,
                        flexDirection: l.FLEX_DIRECTION.COLUMN,
                        justifyContent: l.JustifyContent.SPACE_BETWEEN,
                        className: "set-approval-for-all-warning__footer",
                        gap: 4
                      },
                      r.default.createElement(
                        d.Button,
                        {
                          className: "set-approval-for-all-warning__footer__approve-button",
                          variant: d.BUTTON_VARIANT.PRIMARY,
                          danger: !0,
                          onClick: f
                        },
                        g("approveButtonText")
                      ),
                      r.default.createElement(
                        d.Button,
                        {
                          className: "set-approval-for-all-warning__footer__cancel-button",
                          variant: d.BUTTON_VARIANT.SECONDARY,
                          onClick: m
                        },
                        g("reject")
                      )
                    );
                  return r.default.createElement(
                    i.default,
                    { className: "set-approval-for-all-warning__content", footer: h },
                    r.default.createElement(
                      s.default,
                      {
                        display: l.DISPLAY.FLEX,
                        flexDirection: l.FLEX_DIRECTION.ROW,
                        padding: 4,
                        className: "set-approval-for-all-warning__content__header"
                      },
                      r.default.createElement(d.Icon, {
                        name: d.IconName.Danger,
                        className: "set-approval-for-all-warning__content__header__warning-icon"
                      }),
                      r.default.createElement(d.Text, { variant: l.TextVariant.headingSm, as: "h4" }, g("yourNFTmayBeAtRisk"))
                    ),
                    r.default.createElement(
                      s.default,
                      {
                        display: l.DISPLAY.FLEX,
                        padding: 4,
                        justifyContent: l.JustifyContent.spaceBetween,
                        className: "set-approval-for-all-warning__content__account"
                      },
                      r.default.createElement(
                        s.default,
                        { display: l.DISPLAY.FLEX },
                        r.default.createElement(u.default, { address: t, diameter: 32 }),
                        r.default.createElement(
                          d.Text,
                          {
                            variant: l.TextVariant.bodyMd,
                            as: "h5",
                            marginLeft: 2,
                            className: "set-approval-for-all-warning__content__account-name"
                          },
                          r.default.createElement("strong", null, n),
                          " ",
                          ` (${(0, c.shortenAddress)(t)})`
                        )
                      ),
                      p && a && r.default.createElement(d.Text, null, `${g("total")}: ${a}`)
                    ),
                    r.default.createElement(
                      d.Text,
                      { margin: 4, marginTop: 4, marginBottom: 4, variant: l.TextVariant.bodySm, as: "h6" },
                      g("nftWarningContent", [
                        r.default.createElement("strong", { key: "non_custodial_bold" }, g("nftWarningContentBold", [e || ""])),
                        r.default.createElement("strong", { key: "non_custodial_grey" }, g("nftWarningContentGrey"))
                      ])
                    )
                  );
                };
                f.propTypes = {
                  collectionName: a.default.string,
                  senderAddress: a.default.string,
                  name: a.default.string,
                  total: a.default.string,
                  isERC721: a.default.bool,
                  onSubmit: a.default.func,
                  onCancel: a.default.func
                };
                n.default = f;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/set-approval-for-all-warning/set-approval-for-all-warning.js" }
    ],
    [
      4258,
      { "./signature-request-header": 4259 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./signature-request-header")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-header/index.js" }
    ],
    [
      4259,
      {
        "../../../../shared/constants/common": 3955,
        "../../../../shared/modules/Numeric": 3984,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/utils/confirm-tx.util": 4794,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../network-account-balance-header": 4210,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = g(e("react")),
                  a = g(e("prop-types")),
                  o = e("react-redux"),
                  i = e("../../../hooks/useI18nContext"),
                  s = e("../../../ducks/metamask/metamask"),
                  l = e("../../../selectors"),
                  u = e("../../../helpers/utils/confirm-tx.util"),
                  c = e("../../../helpers/utils/util"),
                  d = e("../../../../shared/constants/common"),
                  p = e("../../../../shared/modules/conversion.utils"),
                  f = e("../../../../shared/modules/Numeric"),
                  m = g(e("../network-account-balance-header"));
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const h = ({ txData: e }) => {
                  const t = (0, i.useI18nContext)(),
                    {
                      msgParams: { from: n }
                    } = e,
                    a = (0, o.useSelector)(l.accountsWithSendEtherInfoSelector),
                    g = (0, c.getAccountByAddress)(a, n),
                    h = (0, o.useSelector)(s.getNativeCurrency),
                    y = (0, o.useSelector)(l.getCurrentCurrency),
                    v = (0, o.useSelector)(l.getCurrentChainId),
                    b = (0, o.useSelector)(s.getProviderConfig),
                    _ = (0, c.getNetworkNameFromProviderType)(b.type),
                    { useNativeCurrencyAsPrimaryCurrency: w } = (0, o.useSelector)(l.getPreferences),
                    k = (0, o.useSelector)(l.conversionRateSelector),
                    T = w ? null : k,
                    x = "" === _ ? b.nickname || t("unknownNetwork") : t(_),
                    E = T
                      ? (0, u.formatCurrency)(
                          (0, p.getValueFromWeiHex)({
                            value: g.balance,
                            fromCurrency: h,
                            toCurrency: y,
                            conversionRate: T,
                            numberOfDecimals: 6,
                            toDenomination: d.EtherDenomination.ETH
                          }),
                          y
                        )
                      : new f.Numeric(g.balance, 16, d.EtherDenomination.WEI)
                          .toDenomination(d.EtherDenomination.ETH)
                          .round(6)
                          .toBase(10)
                          .toString();
                  return r.default.createElement(m.default, {
                    networkName: x,
                    accountName: g.name,
                    accountBalance: E,
                    tokenName: T ? (null == y ? void 0 : y.toUpperCase()) : h,
                    accountAddress: g.address,
                    chainId: v
                  });
                };
                h.propTypes = { txData: a.default.object.isRequired };
                n.default = h;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-header/signature-request-header.js" }
    ],
    [
      4260,
      { "./signature-request-original.container": 4264 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./signature-request-original.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-original/index.js" }
    ],
    [
      4261,
      { "./signature-request-original-warning": 4262 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./signature-request-original-warning")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-original/signature-request-original-warning/index.js" }
    ],
    [
      4262,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "../../../ui/identicon": 4664,
        "../../../ui/popover": 4699,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = d(e("react")),
                  a = d(e("prop-types")),
                  o = e("../../../../hooks/useI18nContext"),
                  i = d(e("../../../ui/popover")),
                  s = e("../../../../helpers/constants/design-system"),
                  l = d(e("../../../ui/identicon")),
                  u = e("../../../../helpers/utils/util"),
                  c = e("../../../component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({ senderAddress: e, name: t, onSubmit: n, onCancel: a }) => {
                  const d = (0, o.useI18nContext)();
                  return r.default.createElement(
                    i.default,
                    { className: "signature-request-warning__content" },
                    r.default.createElement(
                      c.Box,
                      {
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Row,
                        padding: 4,
                        className: "signature-request-warning__content__header"
                      },
                      r.default.createElement(c.Icon, {
                        name: c.IconName.Danger,
                        color: s.IconColor.errorDefault,
                        className: "signature-request-warning__content__header__warning-icon"
                      }),
                      r.default.createElement(
                        c.Text,
                        { variant: s.TextVariant.headingSm, fontWeight: s.FontWeight.Bold },
                        d("yourFundsMayBeAtRisk")
                      )
                    ),
                    r.default.createElement(
                      c.Box,
                      {
                        display: s.Display.Flex,
                        padding: 4,
                        justifyContent: s.JustifyContent.spaceBetween,
                        className: "signature-request-warning__content__account"
                      },
                      r.default.createElement(
                        c.Box,
                        { display: s.Display.Flex },
                        r.default.createElement(l.default, { address: e, diameter: 32 }),
                        r.default.createElement(
                          c.Text,
                          {
                            variant: s.TextVariant.bodyMd,
                            as: "h5",
                            marginLeft: 2,
                            className: "signature-request-warning__content__account-name"
                          },
                          r.default.createElement("b", null, t),
                          " ",
                          ` (${(0, u.shortenAddress)(e)})`
                        )
                      )
                    ),
                    r.default.createElement(
                      c.Text,
                      {
                        color: s.TextColor.textAlternative,
                        margin: 4,
                        marginTop: 4,
                        marginBottom: 4,
                        variant: s.TextVariant.bodySm,
                        as: "h6"
                      },
                      d("signatureRequestWarning", [
                        r.default.createElement(
                          "a",
                          {
                            href: "https://consensys.net/blog/metamask/the-seal-of-approval-know-what-youre-consenting-to-with-permissions-and-approvals-in-metamask/",
                            target: "_blank",
                            type: "link",
                            key: "non_custodial_link",
                            rel: "noopener noreferrer",
                            style: { color: "var(--color-primary-default)" }
                          },
                          d("learnMoreUpperCase")
                        )
                      ])
                    ),
                    r.default.createElement(
                      c.Box,
                      {
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Column,
                        justifyContent: s.JustifyContent.spaceBetween,
                        padding: 4,
                        className: "signature-request-warning__footer"
                      },
                      r.default.createElement(
                        c.Button,
                        {
                          className: "signature-request-warning__footer__sign-button",
                          type: "danger-primary",
                          "data-testid": "signature-warning-sign-button",
                          onClick: n
                        },
                        d("sign")
                      ),
                      r.default.createElement(
                        c.Button,
                        { className: "signature-request-warning__footer__reject-button", type: "secondary", onClick: a },
                        d("reject")
                      )
                    )
                  );
                };
                p.propTypes = {
                  senderAddress: a.default.string,
                  name: a.default.string,
                  onSubmit: a.default.func,
                  onCancel: a.default.func
                };
                n.default = p;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/components/app/signature-request-original/signature-request-original-warning/signature-request-original-warning.js"
      }
    ],
    [
      4263,
      {
        "../../../../shared/constants/app": 3953,
        "../../../../shared/modules/hexstring-utils": 3993,
        "../../../../shared/modules/security-provider.utils": 4e3,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/util": 4812,
        "../../component-library": 4453,
        "../../ui/page-container": 4692,
        "../../ui/site-origin": 4715,
        "../../ui/typography/typography": 4741,
        "../confirm-page-container/confirm-page-container-navigation": 4066,
        "../ledger-instruction-field": 4148,
        "../security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert": 4252,
        "../security-provider-banner-message/security-provider-banner-message": 4255,
        "../signature-request-header": 4258,
        "../snaps/snap-legacy-authorship-header": 4302,
        "./signature-request-original-warning": 4261,
        "@metamask/permission-controller": 1491,
        buffer: 2392,
        classnames: 2414,
        "eth-rpc-errors": 2648,
        "prop-types": 3450,
        react: 3690,
        "react-inspector": 3548
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                (function (t) {
                  (function () {
                    Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                    var r = (function (e, t) {
                        if (!t && e && e.__esModule) return e;
                        if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                        var n = C(t);
                        if (n && n.has(e)) return n.get(e);
                        var r = { __proto__: null },
                          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                          }
                        return (r.default = e), n && n.set(e, r), r;
                      })(e("react")),
                      a = E(e("prop-types")),
                      o = E(e("classnames")),
                      i = e("react-inspector"),
                      s = e("eth-rpc-errors"),
                      l = e("@metamask/permission-controller"),
                      u = E(e("../ledger-instruction-field")),
                      c = e("../../../../shared/constants/app"),
                      d = e("../../../helpers/utils/util"),
                      p = e("../../../../shared/modules/hexstring-utils"),
                      f = e("../../../../shared/modules/security-provider.utils"),
                      m = E(e("../../ui/site-origin")),
                      g = E(e("../../ui/typography/typography")),
                      h = e("../../ui/page-container"),
                      y = e("../../../helpers/constants/design-system"),
                      v = e("../../component-library"),
                      b = E(e("../security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert")),
                      _ = E(e("../confirm-page-container/confirm-page-container-navigation")),
                      w = E(e("../security-provider-banner-message/security-provider-banner-message")),
                      k = E(e("../signature-request-header")),
                      T = E(e("../snaps/snap-legacy-authorship-header")),
                      x = E(e("./signature-request-original-warning"));
                    function E(e) {
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
                    function M(e, t, n) {
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
                    class P extends r.Component {
                      constructor(...e) {
                        super(...e),
                          M(this, "state", { showSignatureRequestWarning: !1 }),
                          M(this, "msgHexToText", (e) => {
                            try {
                              const n = (0, p.stripHexPrefix)(e),
                                r = t.from(n, "hex");
                              return 32 === r.length ? e : r.toString("utf8");
                            } catch (t) {
                              return e;
                            }
                          }),
                          M(this, "renderTypedData", (e) => {
                            const { t: t } = this.context,
                              { domain: n, message: a } = JSON.parse(e);
                            return r.default.createElement(
                              "div",
                              { className: "request-signature__typed-container" },
                              n
                                ? r.default.createElement(
                                    "div",
                                    null,
                                    r.default.createElement("h1", null, t("domain")),
                                    r.default.createElement(i.ObjectInspector, { data: n, expandLevel: 1, name: "domain" })
                                  )
                                : "",
                              a
                                ? r.default.createElement(
                                    "div",
                                    null,
                                    r.default.createElement("h1", null, t("message")),
                                    r.default.createElement(i.ObjectInspector, { data: a, expandLevel: 1, name: "message" })
                                  )
                                : ""
                            );
                          }),
                          M(this, "renderBody", () => {
                            let e;
                            const t = `${this.context.t("youSign")}:`,
                              { txData: n, subjectMetadata: a } = this.props,
                              {
                                type: i,
                                msgParams: { data: s }
                              } = n;
                            i === c.MESSAGE_TYPE.PERSONAL_SIGN
                              ? (e = [{ name: this.context.t("message"), value: this.msgHexToText(s) }])
                              : i === c.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA
                              ? (e = s)
                              : i === c.MESSAGE_TYPE.ETH_SIGN && (e = [{ name: this.context.t("message"), value: s }]);
                            const u = n.msgParams.origin ? (null == a ? void 0 : a[n.msgParams.origin]) : null;
                            return r.default.createElement(
                              "div",
                              { className: "request-signature__body" },
                              r.default.createElement(b.default, {
                                securityAlertResponse: null == n ? void 0 : n.securityAlertResponse,
                                margin: 4
                              }),
                              (0, f.isSuspiciousResponse)(null == n ? void 0 : n.securityProviderResponse) &&
                                r.default.createElement(w.default, { securityProviderResponse: n.securityProviderResponse }),
                              r.default.createElement(
                                "div",
                                { className: "request-signature__origin" },
                                (null == u ? void 0 : u.subjectType) === l.SubjectType.Snap
                                  ? r.default.createElement(T.default, { snapId: u.origin, marginLeft: 4, marginRight: 4 })
                                  : r.default.createElement(m.default, {
                                      title: n.msgParams.origin,
                                      siteOrigin: n.msgParams.origin,
                                      iconSrc: null == u ? void 0 : u.iconUrl,
                                      iconName: (0, d.getURLHostName)(null == u ? void 0 : u.origin) || (null == u ? void 0 : u.origin),
                                      chip: !0
                                    })
                              ),
                              r.default.createElement(
                                g.default,
                                {
                                  className: "request-signature__content__title",
                                  variant: y.TypographyVariant.H3,
                                  fontWeight: y.FontWeight.Bold
                                },
                                this.context.t("sigRequest")
                              ),
                              r.default.createElement(
                                g.default,
                                {
                                  className: "request-signature__content__subtitle",
                                  variant: y.TypographyVariant.H7,
                                  color: y.TextColor.textAlternative,
                                  align: y.TextAlign.Center,
                                  margin: 12,
                                  marginTop: 3
                                },
                                this.context.t("signatureRequestGuidance")
                              ),
                              r.default.createElement("div", { className: (0, o.default)("request-signature__notice") }, t),
                              r.default.createElement(
                                "div",
                                { className: "request-signature__rows" },
                                e.map(
                                  ({ name: e, value: t }, n) => (
                                    "boolean" == typeof t && (t = t.toString()),
                                    r.default.createElement(
                                      "div",
                                      { className: "request-signature__row", key: `request-signature-row-${n}` },
                                      r.default.createElement(
                                        "div",
                                        { className: "request-signature__row-title" },
                                        (0, d.sanitizeString)(`${e}:`)
                                      ),
                                      r.default.createElement(
                                        "div",
                                        { className: "request-signature__row-value" },
                                        (0, d.sanitizeString)(t)
                                      )
                                    )
                                  )
                                )
                              )
                            );
                          }),
                          M(this, "onSubmit", async () => {
                            const {
                              resolvePendingApproval: e,
                              completedTx: t,
                              clearConfirmTransaction: n,
                              history: r,
                              mostRecentOverviewPage: a,
                              txData: o
                            } = this.props;
                            await e(o.id), t(o.id), n(), r.push(a);
                          }),
                          M(this, "onCancel", async () => {
                            const {
                              clearConfirmTransaction: e,
                              history: t,
                              mostRecentOverviewPage: n,
                              rejectPendingApproval: r,
                              txData: { id: a }
                            } = this.props;
                            await r(a, (0, s.serializeError)(s.ethErrors.provider.userRejectedRequest())), e(), t.push(n);
                          }),
                          M(this, "renderFooter", () => {
                            const {
                                clearConfirmTransaction: e,
                                history: t,
                                mostRecentOverviewPage: n,
                                txData: a,
                                hardwareWalletRequiresConnection: o,
                                rejectPendingApproval: i,
                                resolvePendingApproval: l
                              } = this.props,
                              { t: u } = this.context;
                            return r.default.createElement(h.PageContainerFooter, {
                              cancelText: u("reject"),
                              submitText: u("sign"),
                              onCancel: async () => {
                                await i(a.id, (0, s.serializeError)(s.ethErrors.provider.userRejectedRequest())), e(), t.push(n);
                              },
                              onSubmit: async () => {
                                a.type === c.MESSAGE_TYPE.ETH_SIGN
                                  ? this.setState({ showSignatureRequestWarning: !0 })
                                  : (await l(a.id), e(), t.push(n));
                              },
                              disabled: o
                            });
                          }),
                          M(this, "handleCancelAll", () => {
                            const {
                              clearConfirmTransaction: e,
                              history: t,
                              mostRecentOverviewPage: n,
                              showRejectTransactionsConfirmationModal: r,
                              messagesCount: a,
                              cancelAllApprovals: o
                            } = this.props;
                            r({
                              unapprovedTxCount: a,
                              onSubmit: async () => {
                                await o(), e(), t.push(n);
                              }
                            });
                          }),
                          M(this, "render", () => {
                            const {
                                messagesCount: e,
                                fromAccount: { address: t, name: n },
                                txData: a
                              } = this.props,
                              { showSignatureRequestWarning: o } = this.state,
                              { t: i } = this.context,
                              s = i("rejectRequestsN", [e]);
                            return r.default.createElement(
                              "div",
                              { className: "request-signature__container" },
                              r.default.createElement(
                                "div",
                                { className: "request-signature__navigation" },
                                r.default.createElement(_.default, null)
                              ),
                              r.default.createElement(
                                "div",
                                { className: "request-signature__account" },
                                r.default.createElement(k.default, { txData: a })
                              ),
                              this.renderBody(),
                              this.props.isLedgerWallet
                                ? r.default.createElement(
                                    "div",
                                    { className: "confirm-approve-content__ledger-instruction-wrapper" },
                                    r.default.createElement(u.default, { showDataInstruction: !0 })
                                  )
                                : null,
                              o &&
                                r.default.createElement(x.default, {
                                  senderAddress: t,
                                  name: n,
                                  onSubmit: async (e) => await this.onSubmit(e),
                                  onCancel: async (e) => await this.onCancel(e)
                                }),
                              this.renderFooter(),
                              e > 1
                                ? r.default.createElement(
                                    v.ButtonLink,
                                    {
                                      size: y.Size.inherit,
                                      className: "request-signature__container__reject",
                                      onClick: () => this.handleCancelAll()
                                    },
                                    s
                                  )
                                : null
                            );
                          });
                      }
                    }
                    (n.default = P),
                      M(P, "contextTypes", { t: a.default.func.isRequired, trackEvent: a.default.func }),
                      M(P, "propTypes", {
                        fromAccount: a.default.shape({ address: a.default.string.isRequired, name: a.default.string }).isRequired,
                        txData: a.default.object.isRequired,
                        subjectMetadata: a.default.object,
                        hardwareWalletRequiresConnection: a.default.bool,
                        isLedgerWallet: a.default.bool,
                        messagesCount: a.default.number,
                        showRejectTransactionsConfirmationModal: a.default.func.isRequired,
                        cancelAllApprovals: a.default.func.isRequired,
                        rejectPendingApproval: a.default.func.isRequired,
                        clearConfirmTransaction: a.default.func.isRequired,
                        history: a.default.object.isRequired,
                        mostRecentOverviewPage: a.default.string.isRequired,
                        resolvePendingApproval: a.default.func.isRequired,
                        completedTx: a.default.func.isRequired
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-original/signature-request-original.component.js" }
    ],
    [
      4264,
      {
        "../../../ducks/confirm-transaction/confirm-transaction.duck": 4756,
        "../../../ducks/history/history": 4760,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/utils/util": 4812,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "./signature-request-original.component": 4263,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("redux"),
                  i = e("react-router-dom"),
                  s = e("../../../store/actions"),
                  l = e("../../../selectors"),
                  u = e("../../../helpers/utils/util"),
                  c = e("../../../ducks/confirm-transaction/confirm-transaction.duck"),
                  d = e("../../../ducks/history/history"),
                  p = e("../../../ducks/metamask/metamask"),
                  f = (r = e("./signature-request-original.component")) && r.__esModule ? r : { default: r };
                let m = null;
                m = function (e) {
                  return {
                    goHome: () => e((0, s.goHome)()),
                    clearConfirmTransaction: () => e((0, c.clearConfirmTransaction)()),
                    showRejectTransactionsConfirmationModal: ({ onSubmit: t, unapprovedTxCount: n }) =>
                      e((0, s.showModal)({ name: "REJECT_TRANSACTIONS", onSubmit: t, unapprovedTxCount: n, isRequestType: !0 })),
                    completedTx: (t) => e((0, s.completedTx)(t)),
                    resolvePendingApproval: (t) => {
                      e((0, s.resolvePendingApproval)(t));
                    },
                    rejectPendingApproval: (t, n) => e((0, s.rejectPendingApproval)(t, n)),
                    cancelAllApprovals: (t) => {
                      e((0, s.rejectAllMessages)(t));
                    }
                  };
                };
                n.default = (0, o.compose)(
                  i.withRouter,
                  (0, a.connect)(
                    function (e, t) {
                      const {
                          msgParams: { from: n }
                        } = t.txData,
                        r = (0, l.doesAddressRequireLedgerHidConnection)(e, n),
                        a = (0, p.isAddressLedger)(e, n),
                        o = (0, l.unconfirmedMessagesHashSelector)(e),
                        i = (0, l.getTotalUnapprovedMessagesCount)(e);
                      return {
                        requester: null,
                        requesterAddress: null,
                        mostRecentOverviewPage: (0, d.getMostRecentOverviewPage)(e),
                        hardwareWalletRequiresConnection: r,
                        isLedgerWallet: a,
                        allAccounts: (0, l.accountsWithSendEtherInfoSelector)(e),
                        subjectMetadata: (0, l.getSubjectMetadata)(e),
                        messagesList: o,
                        messagesCount: i
                      };
                    },
                    m,
                    function (e, t, n) {
                      const { txData: r } = n,
                        { allAccounts: a, messagesList: o, ...i } = e,
                        {
                          msgParams: { from: s }
                        } = r,
                        l = (0, u.getAccountByAddress)(a, s),
                        { cancelAllApprovals: c } = t;
                      return { ...n, ...i, ...t, fromAccount: l, txData: r, cancelAllApprovals: () => c((0, u.valuesFor)(o)) };
                    }
                  )
                )(f.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-original/signature-request-original.container.js" }
    ],
    [
      4265,
      { "./signature-request-siwe": 4272 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./signature-request-siwe")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-siwe/index.js" }
    ],
    [
      4266,
      { "./signature-request-siwe-header": 4267 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./signature-request-siwe-header")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-siwe/signature-request-siwe-header/index.js" }
    ],
    [
      4267,
      {
        "../../../../contexts/i18n": 4748,
        "../../../ui/tooltip": 4736,
        "../../account-list-item": 4008,
        "../../permissions-connect-header": 4234,
        "../signature-request-siwe-icon": 4268,
        "../signature-request-siwe-tag": 4271,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = f);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("../../account-list-item")),
                  i = e("../../../../contexts/i18n"),
                  s = d(e("../../permissions-connect-header")),
                  l = d(e("../signature-request-siwe-icon")),
                  u = d(e("../signature-request-siwe-tag")),
                  c = d(e("../../../ui/tooltip"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f({ fromAccount: e, domain: t, isSIWEDomainValid: n, subjectMetadata: a }) {
                  const d = (0, r.useContext)(i.I18nContext);
                  return r.default.createElement(
                    "div",
                    { className: "signature-request-siwe-header" },
                    r.default.createElement(s.default, {
                      iconUrl: a.iconUrl,
                      iconName: a.name,
                      headerTitle: d("SIWESiteRequestTitle"),
                      headerText: d("SIWESiteRequestSubtitle"),
                      siteOrigin: t,
                      className: n ? "" : "bad-domain",
                      leftIcon:
                        !n &&
                        r.default.createElement(
                          c.default,
                          { position: "bottom", html: r.default.createElement("p", null, d("SIWEDomainWarningBody", [t])) },
                          r.default.createElement(l.default, null)
                        ),
                      rightIcon:
                        !n &&
                        r.default.createElement(
                          c.default,
                          { position: "bottom", html: r.default.createElement("p", null, d("SIWEDomainWarningBody", [t])) },
                          r.default.createElement(u.default, { text: d("SIWEDomainWarningLabel") })
                        )
                    }),
                    e &&
                      r.default.createElement(o.default, {
                        account: e,
                        hideDefaultMismatchWarning: !0,
                        className: "signature-request-siwe-header__account-list-item"
                      })
                  );
                }
                f.propTypes = {
                  fromAccount: a.default.object,
                  domain: a.default.string,
                  isSIWEDomainValid: a.default.bool,
                  subjectMetadata: a.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-siwe/signature-request-siwe-header/signature-request-siwe-header.js" }
    ],
    [
      4268,
      { "../../../../helpers/constants/design-system": 4771, "../../../component-library": 4453, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("../../../../helpers/constants/design-system"),
                  i = e("../../../component-library");
                n.default = () =>
                  a.default.createElement(
                    i.Box,
                    {
                      className: "signature-request-siwe-icon",
                      display: o.Display.InlineFlex,
                      alignItems: o.AlignItems.center,
                      backgroundColor: o.Color.errorDefault,
                      justifyContent: o.JustifyContent.center
                    },
                    a.default.createElement(i.Icon, { name: i.IconName.Danger, color: o.Color.errorInverse })
                  );
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-siwe/signature-request-siwe-icon/index.js" }
    ],
    [
      4269,
      { "./signature-request-siwe-message": 4270 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./signature-request-siwe-message")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-siwe/signature-request-siwe-message/index.js" }
    ],
    [
      4270,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../component-library": 4453,
        "../../../ui/box": 4607,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("../../../ui/box")),
                  i = e("../../../component-library"),
                  s = e("../../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ data: e }) =>
                  r.default.createElement(
                    o.default,
                    { className: "signature-request-siwe-message" },
                    r.default.createElement(
                      o.default,
                      { flexDirection: s.FLEX_DIRECTION.COLUMN },
                      e.map(({ label: e, value: t }, n) =>
                        r.default.createElement(
                          o.default,
                          { key: n.toString(), marginTop: 2, marginBottom: 2 },
                          r.default.createElement(
                            i.Text,
                            { as: "h4", variant: s.TextVariant.bodyLgMedium, marginTop: 2, marginBottom: 2 },
                            e
                          ),
                          r.default.createElement(
                            i.Text,
                            {
                              className: "signature-request-siwe-message__sub-text",
                              overflowWrap: s.OVERFLOW_WRAP.BREAK_WORD,
                              marginTop: 2,
                              marginBottom: 2
                            },
                            t
                          )
                        )
                      )
                    )
                  );
                u.propTypes = {
                  data: a.default.arrayOf(
                    a.default.shape({ label: a.default.string, value: a.default.oneOfType([a.default.string, a.default.number]) })
                  )
                };
                n.default = r.default.memo(u);
              };
            };
      },
      {
        package: "$root$",
        file: "ui/components/app/signature-request-siwe/signature-request-siwe-message/signature-request-siwe-message.js"
      }
    ],
    [
      4271,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../component-library": 4453,
        "../../../ui/box": 4607,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../../../helpers/constants/design-system"),
                  i = l(e("../../../ui/box")),
                  s = e("../../../component-library");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ text: e }) =>
                  r.default.createElement(
                    i.default,
                    {
                      className: "signature-request-siwe-tag",
                      marginRight: 1,
                      display: o.Display.InlineFlex,
                      alignItems: o.AlignItems.center,
                      backgroundColor: o.BackgroundColor.errorDefault,
                      borderRadius: o.Size.XL,
                      paddingLeft: 4,
                      paddingRight: 4
                    },
                    r.default.createElement(
                      s.Text,
                      { margin: 0, variant: o.TextVariant.bodySmBold, as: "h6", color: o.TextColor.errorInverse },
                      e
                    )
                  );
                n.default = u;
                u.propTypes = { text: a.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-siwe/signature-request-siwe-tag/index.js" }
    ],
    [
      4272,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/modules/security-provider.utils": 4e3,
        "../../../../shared/modules/siwe": 4001,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/confirm-transaction/confirm-transaction.duck": 4756,
        "../../../ducks/history/history": 4760,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/metrics": 4802,
        "../../../helpers/utils/util": 4812,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/button": 4611,
        "../../ui/check-box": 4617,
        "../../ui/page-container": 4692,
        "../../ui/popover": 4699,
        "../confirm-page-container/confirm-page-container-navigation": 4066,
        "../ledger-instruction-field": 4148,
        "../security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert": 4252,
        "../security-provider-banner-message/security-provider-banner-message": 4255,
        "../signature-request-header": 4258,
        "./signature-request-siwe-header": 4266,
        "./signature-request-siwe-message": 4269,
        "@metamask/controller-utils": 1056,
        "eth-rpc-errors": 2648,
        loglevel: 3322,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = B);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = A(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = R(e("prop-types")),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = R(e("loglevel")),
                  l = e("@metamask/controller-utils"),
                  u = e("eth-rpc-errors"),
                  c = e("../../component-library"),
                  d = R(e("../../ui/popover")),
                  p = R(e("../../ui/check-box")),
                  f = R(e("../../ui/button")),
                  m = e("../../../contexts/i18n"),
                  g = e("../../ui/page-container"),
                  h = e("../../../ducks/metamask/metamask"),
                  y = e("../../../selectors"),
                  v = e("../../../helpers/utils/util"),
                  b = e("../../../../shared/modules/security-provider.utils"),
                  _ = e("../../../../shared/modules/siwe"),
                  w = e("../../../ducks/confirm-transaction/confirm-transaction.duck"),
                  k = e("../../../helpers/constants/design-system"),
                  T = e("../../../store/actions"),
                  x = R(e("../security-provider-banner-message/security-provider-banner-message")),
                  E = R(e("../confirm-page-container/confirm-page-container-navigation")),
                  C = e("../../../ducks/history/history"),
                  M = R(e("../security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert")),
                  P = e("../../../helpers/utils/metrics"),
                  O = e("../../../contexts/metametrics"),
                  S = e("../../../../shared/constants/metametrics"),
                  j = R(e("../ledger-instruction-field")),
                  N = R(e("../signature-request-header")),
                  I = R(e("./signature-request-siwe-header")),
                  D = R(e("./signature-request-siwe-message"));
                function R(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function A(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (A = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function B({ txData: e }) {
                  const t = (0, o.useDispatch)(),
                    n = (0, i.useHistory)(),
                    a = (0, r.useContext)(m.I18nContext),
                    R = (0, o.useSelector)(y.accountsWithSendEtherInfoSelector),
                    A = (0, o.useSelector)(y.getSubjectMetadata),
                    B = (0, o.useSelector)(y.getTotalUnapprovedMessagesCount),
                    F = (0, o.useSelector)(y.unconfirmedMessagesHashSelector),
                    W = (0, o.useSelector)(C.getMostRecentOverviewPage),
                    $ = (0, r.useContext)(O.MetaMetricsContext);
                  (0, r.useEffect)(() => {
                    if (e.securityAlertResponse) {
                      const t = (0, P.getBlockaidMetricsParams)(e.securityAlertResponse);
                      $({
                        category: S.MetaMetricsEventCategory.Transactions,
                        event: S.MetaMetricsEventName.SignatureRequested,
                        properties: { action: "Sign Request", ...t }
                      });
                    }
                  }, []);
                  const {
                      msgParams: {
                        from: L,
                        origin: q,
                        siwe: { parsedMessage: G }
                      },
                      id: U
                    } = e,
                    z = (0, o.useSelector)((e) => (0, h.isAddressLedger)(e, L)),
                    V = (0, v.getAccountByAddress)(R, L),
                    H = A[q],
                    K = L.toLowerCase() === G.address.toLowerCase(),
                    Y = (0, l.isValidSIWEOrigin)(e.msgParams),
                    [Q, J] = (0, r.useState)(!1),
                    [X, Z] = (0, r.useState)(!1),
                    ee = (0, b.isSuspiciousResponse)(null == e ? void 0 : e.securityProviderResponse),
                    te = (0, r.useCallback)(async () => {
                      try {
                        await t((0, T.resolvePendingApproval)(U, null)), t((0, T.completedTx)(U));
                      } catch (e) {
                        s.default.error(e);
                      }
                    }, [U, t]),
                    ne = (0, r.useCallback)(async () => {
                      try {
                        await t((0, T.rejectPendingApproval)(U, (0, u.serializeError)(u.ethErrors.provider.userRejectedRequest())));
                      } catch (e) {
                        s.default.error(e);
                      }
                    }, [t, U]),
                    re = a("rejectRequestsN", [B]);
                  return r.default.createElement(
                    "div",
                    { className: "signature-request-siwe" },
                    r.default.createElement(
                      "div",
                      { className: "request-signature__navigation" },
                      r.default.createElement(E.default, null)
                    ),
                    r.default.createElement(N.default, { txData: e }),
                    r.default.createElement(M.default, { securityAlertResponse: null == e ? void 0 : e.securityAlertResponse, margin: 4 }),
                    ee && r.default.createElement(x.default, { securityProviderResponse: e.securityProviderResponse }),
                    r.default.createElement(I.default, { fromAccount: V, domain: q, isSIWEDomainValid: Y, subjectMetadata: H }),
                    r.default.createElement(D.default, { data: (0, _.formatMessageParams)(G, a) }),
                    !K &&
                      r.default.createElement(
                        c.BannerAlert,
                        { severity: k.SEVERITIES.WARNING, marginLeft: 4, marginRight: 4, marginBottom: 4 },
                        a("SIWEAddressInvalid", [G.address, V.address])
                      ),
                    z &&
                      r.default.createElement(
                        "div",
                        { className: "confirm-approve-content__ledger-instruction-wrapper" },
                        r.default.createElement(j.default, { showDataInstruction: !0 })
                      ),
                    !Y &&
                      r.default.createElement(
                        c.BannerAlert,
                        { severity: k.SEVERITIES.DANGER, marginLeft: 4, marginRight: 4, marginBottom: 4 },
                        r.default.createElement(c.Text, { variant: k.TextVariant.bodyMdBold }, a("SIWEDomainInvalidTitle")),
                        " ",
                        r.default.createElement(c.Text, null, a("SIWEDomainInvalidText"))
                      ),
                    r.default.createElement(g.PageContainerFooter, {
                      footerClassName: "signature-request-siwe__page-container-footer",
                      onCancel: ne,
                      onSubmit: Y ? te : () => J(!0),
                      cancelText: a("cancel"),
                      submitText: a("signin"),
                      submitButtonType: Y ? "primary" : "danger-primary"
                    }),
                    B > 1
                      ? r.default.createElement(
                          f.default,
                          {
                            type: "link",
                            className: "request-signature__container__reject",
                            onClick: (e) => {
                              e.preventDefault(),
                                (() => {
                                  const e = B;
                                  t(
                                    (0, T.showModal)({
                                      name: "REJECT_TRANSACTIONS",
                                      unapprovedTxCount: e,
                                      onSubmit: async () => {
                                        await t((0, T.rejectAllMessages)((0, v.valuesFor)(F))),
                                          t((0, w.clearConfirmTransaction)()),
                                          n.push(W);
                                      }
                                    })
                                  );
                                })();
                            }
                          },
                          re
                        )
                      : null,
                    Q &&
                      r.default.createElement(
                        d.default,
                        {
                          onClose: () => J(!1),
                          title: a("SIWEWarningTitle"),
                          subtitle: a("SIWEWarningSubtitle"),
                          className: "signature-request-siwe__warning-popover",
                          footerClassName: "signature-request-siwe__warning-popover__footer",
                          footer: r.default.createElement(g.PageContainerFooter, {
                            footerClassName: "signature-request-siwe__warning-popover__footer__warning-footer",
                            onCancel: () => J(!1),
                            cancelText: a("cancel"),
                            cancelButtonType: "default",
                            onSubmit: te,
                            submitText: a("confirm"),
                            submitButtonType: "danger-primary",
                            disabled: !X
                          })
                        },
                        r.default.createElement(
                          "div",
                          { className: "signature-request-siwe__warning-popover__checkbox-wrapper" },
                          r.default.createElement(p.default, {
                            id: "signature-request-siwe_domain-checkbox",
                            checked: X,
                            className: "signature-request-siwe__warning-popover__checkbox-wrapper__checkbox",
                            onClick: () => Z((e) => !e)
                          }),
                          r.default.createElement(
                            "label",
                            {
                              className: "signature-request-siwe__warning-popover__checkbox-wrapper__label",
                              htmlFor: "signature-request-siwe_domain-checkbox"
                            },
                            a("SIWEDomainWarningBody", [G.domain])
                          )
                        )
                      )
                  );
                }
                B.propTypes = { txData: a.default.object.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request-siwe/signature-request-siwe.js" }
    ],
    [
      4273,
      { "./signature-request": 4280 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./signature-request")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request/index.js" }
    ],
    [
      4274,
      { "./signature-request-data": 4275 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./signature-request-data")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request/signature-request-data/index.js" }
    ],
    [
      4275,
      {
        "../../../../../shared/modules/hexstring-utils": 3993,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/usePetnamesEnabled": 4844,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
        "../../name/name": 4209,
        "../../transaction-decoding/components/decoding/address": 4360,
        "@metamask/name-controller": 1406,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = e("lodash"),
                  i = h(e("prop-types")),
                  s = e("@metamask/name-controller"),
                  l = e("../../../../selectors"),
                  u = h(e("../../transaction-decoding/components/decoding/address")),
                  c = e("../../../../../shared/modules/hexstring-utils"),
                  d = e("../../../../helpers/constants/design-system"),
                  p = e("../../../../helpers/utils/util"),
                  f = e("../../../component-library"),
                  m = e("../../../../hooks/usePetnamesEnabled"),
                  g = h(e("../../name/name"));
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
                function v({ data: e }) {
                  const t = (0, a.useSelector)(l.getMemoizedMetaMaskIdentities),
                    n = (0, m.usePetnamesEnabled)();
                  return r.default.createElement(
                    f.Box,
                    { as: "ul", className: "signature-request-data__node" },
                    Object.entries(e).map(([e, { value: a, type: o }], i) =>
                      r.default.createElement(
                        f.Box,
                        {
                          as: "li",
                          className: "signature-request-data__node",
                          marginBottom: 2,
                          key: `${e}-${i}`,
                          paddingLeft: 2,
                          display: "object" != typeof a || null === a ? d.Display.Flex : null
                        },
                        r.default.createElement(
                          f.Text,
                          {
                            as: "div",
                            color: d.TextColor.textDefault,
                            marginLeft: 4,
                            fontWeight: "object" == typeof a ? d.FontWeight.Bold : d.FontWeight.Normal
                          },
                          (0, p.sanitizeString)(e.charAt(0).toUpperCase() + e.slice(1)),
                          ":",
                          " "
                        ),
                        "object" == typeof a && null !== a
                          ? r.default.createElement(v, { data: a })
                          : r.default.createElement(
                              f.Text,
                              {
                                as: "div",
                                color: d.TextColor.textDefault,
                                marginLeft: 4,
                                className: "signature-request-data__node__value"
                              },
                              "address" === o && (0, c.isValidHexAddress)(a, { mixedCaseUseChecksum: !0 })
                                ? r.default.createElement(
                                    f.Text,
                                    {
                                      variant: d.TextVariant.bodySm,
                                      as: "div",
                                      color: d.TextColor.infoDefault,
                                      className: "signature-request-data__node__value__address"
                                    },
                                    n
                                      ? r.default.createElement(g.default, { value: a, type: s.NameType.ETHEREUM_ADDRESS })
                                      : r.default.createElement(u.default, {
                                          addressOnly: !0,
                                          checksummedRecipientAddress: (0, c.toChecksumHexAddress)(a),
                                          recipientName: (0, l.getAccountName)(t, a)
                                        })
                                  )
                                : (0, p.sanitizeString)(`${a}`)
                            )
                      )
                    )
                  );
                }
                v.propTypes = { data: i.default.oneOfType([i.default.object, i.default.array]).isRequired };
                n.default = (0, r.memo)(v, (e, t) => (0, o.isEqual)(e.data, t.data));
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request/signature-request-data/signature-request-data.js" }
    ],
    [
      4276,
      { "./signature-request-footer.component": 4277 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./signature-request-footer.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request/signature-request-footer/index.js" }
    ],
    [
      4277,
      { "../../../ui/page-container": 4692, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("../../../ui/page-container");
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (s = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l(e, t, n) {
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
                class u extends a.PureComponent {
                  render() {
                    const { cancelAction: e, signAction: t, disabled: n = !1 } = this.props;
                    return a.default.createElement(i.PageContainerFooter, {
                      cancelText: this.context.t("reject"),
                      submitText: this.context.t("sign"),
                      onCancel: e,
                      onSubmit: t,
                      disabled: n
                    });
                  }
                }
                (n.default = u),
                  l(u, "propTypes", {
                    cancelAction: o.default.func.isRequired,
                    signAction: o.default.func.isRequired,
                    disabled: o.default.bool
                  }),
                  l(u, "contextTypes", { t: o.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request/signature-request-footer/signature-request-footer.component.js" }
    ],
    [
      4278,
      { "./signature-request-message": 4279 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./signature-request-message")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request/signature-request-message/index.js" }
    ],
    [
      4279,
      {
        "../../../../contexts/i18n": 4748,
        "../../../../helpers/constants/design-system": 4771,
        "../../../component-library": 4453,
        "../../../ui/box": 4607,
        "../signature-request-data": 4274,
        lodash: 3312,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = f);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = d(e("prop-types")),
                  o = e("lodash"),
                  i = e("../../../../contexts/i18n"),
                  s = d(e("../../../ui/box")),
                  l = e("../../../component-library"),
                  u = e("../../../../helpers/constants/design-system"),
                  c = d(e("../signature-request-data"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f({
                  data: e,
                  onMessageScrolled: t,
                  setMessageRootRef: n,
                  messageRootRef: a,
                  messageIsScrollable: d,
                  primaryType: p
                }) {
                  const f = (0, r.useContext)(i.I18nContext),
                    [m, g] = (0, r.useState)(!1);
                  return r.default.createElement(
                    s.default,
                    {
                      display: u.Display.Flex,
                      flexDirection: u.FlexDirection.Column,
                      onScroll: (0, o.debounce)(() => {
                        if (!a || m) return;
                        const { scrollTop: e, offsetHeight: n, scrollHeight: r } = a;
                        Math.round(e) + n >= r && (g(!0), t());
                      }, 25),
                      className: "signature-request-message"
                    },
                    d
                      ? r.default.createElement(
                          s.default,
                          {
                            display: u.Display.Flex,
                            alignItems: u.AlignItems.center,
                            justifyContent: u.JustifyContent.center,
                            borderColor: u.BorderColor.borderDefault,
                            backgroundColor: u.BackgroundColor.backgroundDefault,
                            color: u.Color.iconDefault,
                            onClick: () => {
                              g(!0), t(), null == a || a.scrollTo(0, null == a ? void 0 : a.scrollHeight);
                            },
                            className: "signature-request-message__scroll-button",
                            "data-testid": "signature-request-scroll-button"
                          },
                          r.default.createElement("i", { className: "fa fa-arrow-down", "aria-label": f("scrollDown") })
                        )
                      : null,
                    r.default.createElement(
                      s.default,
                      {
                        backgroundColor: u.BackgroundColor.backgroundDefault,
                        paddingBottom: 3,
                        paddingTop: 3,
                        paddingRight: 3,
                        margin: 2,
                        borderRadius: u.BorderRadius.XL,
                        borderColor: u.BorderColor.borderMuted,
                        className: "signature-request-message__root",
                        ref: n
                      },
                      r.default.createElement(l.Text, { fontWeight: u.FontWeight.Bold, color: u.TextColor.textDefault, marginLeft: 4 }, p),
                      r.default.createElement(c.default, { data: e.value })
                    )
                  );
                }
                f.propTypes = {
                  data: a.default.object.isRequired,
                  onMessageScrolled: a.default.func,
                  setMessageRootRef: a.default.func,
                  messageRootRef: a.default.object,
                  messageIsScrollable: a.default.bool,
                  primaryType: a.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request/signature-request-message/signature-request-message.js" }
    ],
    [
      4280,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/security-provider": 3966,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../hooks/useRejectTransactionModal": 4846,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../confirm-page-container": 4068,
        "../ledger-instruction-field": 4148,
        "../modals/contract-details-modal": 4173,
        "../security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert": 4252,
        "../security-provider-banner-message": 4254,
        "../signature-request-header/signature-request-header": 4259,
        "./signature-request-footer": 4276,
        "./signature-request-message": 4278,
        "eth-rpc-errors": 2648,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = P(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = M(e("prop-types")),
                  i = e("lodash"),
                  s = e("eth-rpc-errors"),
                  l = e("../../../store/actions"),
                  u = e("../../../selectors"),
                  c = e("../../../ducks/metamask/metamask"),
                  d = e("../../../helpers/utils/util"),
                  p = e("../../../hooks/useI18nContext"),
                  f = e("../../../hooks/useRejectTransactionModal"),
                  m = e("../confirm-page-container"),
                  g = M(e("../signature-request-header/signature-request-header")),
                  h = M(e("../security-provider-banner-message")),
                  y = M(e("../ledger-instruction-field")),
                  v = M(e("../modals/contract-details-modal")),
                  b = e("../../../contexts/metametrics"),
                  _ = e("../../../../shared/constants/metametrics"),
                  w = e("../../../../shared/constants/security-provider"),
                  k = e("../../../helpers/constants/design-system"),
                  T = e("../../component-library"),
                  x = M(e("../security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert")),
                  E = M(e("./signature-request-message")),
                  C = M(e("./signature-request-footer"));
                function M(e) {
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
                const O = ({ txData: e }) => {
                  var t, n;
                  const o = (0, r.useContext)(b.MetaMetricsContext),
                    M = (0, a.useDispatch)(),
                    P = (0, p.useI18nContext)(),
                    [O, S] = (0, r.useState)(!1),
                    [j, N] = (0, r.useState)(!1),
                    [I, D] = (0, r.useState)(null),
                    [R, A] = (0, r.useState)(!1),
                    {
                      id: B,
                      type: F,
                      msgParams: { from: W, data: $, origin: L, version: q }
                    } = e,
                    G = (0, a.useSelector)((e) => (0, u.doesAddressRequireLedgerHidConnection)(e, W)),
                    { chainId: U, rpcPrefs: z } = (0, a.useSelector)(c.getProviderConfig),
                    V = (0, a.useSelector)(u.getTotalUnapprovedMessagesCount),
                    H = (0, a.useSelector)(u.getSubjectMetadata),
                    K = (0, a.useSelector)((e) => (0, c.isAddressLedger)(e, W)),
                    { handleCancelAll: Y } = (0, f.useRejectTransactionModal)();
                  (0, r.useEffect)(() => {
                    A((null == I ? void 0 : I.scrollHeight) > (null == I ? void 0 : I.clientHeight));
                  }, [I]);
                  const Q = (null == H ? void 0 : H[L]) || null,
                    J = (0, i.memoize)((e) => {
                      const { message: t, domain: n = {}, primaryType: r, types: a } = JSON.parse(e);
                      return { sanitizedMessage: (0, d.sanitizeMessage)(t, r, a), domain: n, primaryType: r };
                    }),
                    X = (0, r.useCallback)(() => {
                      o({
                        category: _.MetaMetricsEventCategory.Transactions,
                        event: _.MetaMetricsEventName.ExternalLinkClicked,
                        properties: { action: "Sign Request", type: F, version: q, external_link_clicked: "security_alert_support_link" }
                      });
                    }, []),
                    {
                      sanitizedMessage: Z,
                      domain: { verifyingContract: ee },
                      primaryType: te
                    } = J($);
                  return r.default.createElement(
                    "div",
                    { className: "signature-request" },
                    r.default.createElement(m.ConfirmPageContainerNavigation, null),
                    r.default.createElement(
                      "div",
                      { className: "request-signature__account", "data-testid": "request-signature-account" },
                      r.default.createElement(g.default, { txData: e })
                    ),
                    r.default.createElement(
                      "div",
                      { className: "signature-request-content" },
                      r.default.createElement(x.default, {
                        securityAlertResponse: null == e ? void 0 : e.securityAlertResponse,
                        marginLeft: 4,
                        marginRight: 4,
                        marginBottom: 4,
                        onClickSupportLink: X
                      }),
                      ((null == e || null === (t = e.securityProviderResponse) || void 0 === t ? void 0 : t.flagAsDangerous) !==
                        undefined &&
                        (null == e || null === (n = e.securityProviderResponse) || void 0 === n ? void 0 : n.flagAsDangerous) !==
                          w.SECURITY_PROVIDER_MESSAGE_SEVERITY.NOT_MALICIOUS) ||
                        (null != e && e.securityProviderResponse && 0 === Object.keys(e.securityProviderResponse).length)
                        ? r.default.createElement(h.default, { securityProviderResponse: e.securityProviderResponse })
                        : null,
                      r.default.createElement(
                        "div",
                        { className: "signature-request__origin" },
                        r.default.createElement(T.TagUrl, {
                          label: L,
                          labelProps: { color: k.TextColor.textAlternative },
                          src: null == Q ? void 0 : Q.iconUrl
                        })
                      ),
                      r.default.createElement(
                        T.Text,
                        { className: "signature-request__content__title", variant: k.TextVariant.headingLg, marginTop: 4 },
                        P("sigRequest")
                      ),
                      r.default.createElement(
                        T.Text,
                        {
                          className: "request-signature__content__subtitle",
                          variant: k.TextVariant.bodySm,
                          color: k.TextColor.textAlternative,
                          textAlign: k.TextAlign.Center,
                          marginLeft: 12,
                          marginRight: 12,
                          marginTop: 4,
                          as: "h6"
                        },
                        P("signatureRequestGuidance")
                      ),
                      ee
                        ? r.default.createElement(
                            "div",
                            null,
                            r.default.createElement(
                              T.Button,
                              {
                                variant: T.ButtonVariant.Link,
                                onClick: () => N(!0),
                                className: "signature-request-content__verify-contract-details",
                                "data-testid": "verify-contract-details"
                              },
                              r.default.createElement(
                                T.Text,
                                { variant: k.TextVariant.bodySm, color: k.TextColor.primaryDefault, as: "h6" },
                                P("verifyContractDetails")
                              )
                            )
                          )
                        : null
                    ),
                    K
                      ? r.default.createElement(
                          "div",
                          { className: "confirm-approve-content__ledger-instruction-wrapper" },
                          r.default.createElement(y.default, { showDataInstruction: !0 })
                        )
                      : null,
                    r.default.createElement(E.default, {
                      data: Z,
                      onMessageScrolled: () => S(!0),
                      setMessageRootRef: D,
                      messageRootRef: I,
                      messageIsScrollable: R,
                      primaryType: te
                    }),
                    r.default.createElement(C.default, {
                      cancelAction: async () => {
                        await M((0, l.rejectPendingApproval)(B, (0, s.serializeError)(s.ethErrors.provider.userRejectedRequest()))),
                          o({
                            category: _.MetaMetricsEventCategory.Transactions,
                            event: "Cancel",
                            properties: { action: "Sign Request", legacy_event: !0, type: F, version: q }
                          });
                      },
                      signAction: async () => {
                        await M((0, l.resolvePendingApproval)(B)),
                          (0, l.completedTx)(B),
                          o({
                            category: _.MetaMetricsEventCategory.Transactions,
                            event: "Confirm",
                            properties: { action: "Sign Request", legacy_event: !0, type: F, version: q }
                          });
                      },
                      disabled: G || (R && !O)
                    }),
                    j &&
                      r.default.createElement(v.default, {
                        toAddress: ee,
                        chainId: U,
                        rpcPrefs: z,
                        onClose: () => N(!1),
                        isContractRequestingSignature: !0
                      }),
                    V > 1
                      ? r.default.createElement(
                          T.ButtonLink,
                          {
                            size: k.Size.inherit,
                            className: "signature-request__reject-all-button",
                            "data-testid": "signature-request-reject-all",
                            onClick: Y
                          },
                          P("rejectRequestsN", [V])
                        )
                      : null
                  );
                };
                O.propTypes = { txData: o.default.object };
                n.default = O;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/signature-request/signature-request.js" }
    ],
    [
      4281,
      {
        "../../../../../shared/constants/time": 3972,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useCopyToClipboard": 4830,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../hooks/useTimeout": 4855,
        "../../../component-library": 4453,
        "../../../ui/tooltip": 4736,
        "../show-more": 4287,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Copyable = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = m(e("prop-types")),
                  o = m(e("classnames")),
                  i = e("../../../../helpers/constants/design-system"),
                  s = e("../../../../hooks/useCopyToClipboard"),
                  l = e("../../../component-library"),
                  u = e("../../../../hooks/useI18nContext"),
                  c = m(e("../../../ui/tooltip")),
                  d = e("../show-more"),
                  p = e("../../../../../shared/constants/time"),
                  f = e("../../../../hooks/useTimeout");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const h = ({ text: e, sensitive: t = !1 }) => {
                  const n = (0, u.useI18nContext)(),
                    [, a] = (0, s.useCopyToClipboard)(),
                    [m, g] = (0, r.useState)(!t),
                    [h, y] = (0, r.useState)(!1),
                    v = (0, f.useTimeout)(() => y(!1), 3 * p.SECOND, !1),
                    b = (e) => {
                      e.stopPropagation(), g((e) => !e);
                    };
                  return r.default.createElement(
                    l.Box,
                    {
                      display: i.Display.Flex,
                      onClick:
                        t && !m
                          ? b
                          : (t) => {
                              t.stopPropagation(), a(e), y(!0), v();
                            },
                      className: (0, o.default)("copyable", { sensitive: t, clicked: h, visible: m }),
                      backgroundColor: m && t ? i.BackgroundColor.errorMuted : i.BackgroundColor.backgroundAlternative,
                      borderRadius: i.BorderRadius.LG,
                      padding: 2
                    },
                    t &&
                      r.default.createElement(
                        l.Box,
                        { marginRight: 2, className: "copyable__icon" },
                        r.default.createElement(
                          c.default,
                          {
                            wrapperClassName: "copyable__tooltip",
                            html: r.default.createElement(l.Text, null, n(m ? "hideSentitiveInfo" : "doNotShare")),
                            position: "bottom"
                          },
                          r.default.createElement(l.Icon, {
                            name: m ? l.IconName.EyeSlash : l.IconName.Eye,
                            onClick: b,
                            color: m && t ? i.Color.errorAlternative : i.IconColor.iconAlternative,
                            "data-testid": "reveal-icon"
                          })
                        )
                      ),
                    t &&
                      !m &&
                      r.default.createElement(
                        l.Text,
                        { color: i.Color.textAlternative, marginRight: 2, marginBottom: 0, overflowWrap: i.OverflowWrap.Anywhere },
                        n("revealSensitiveContent")
                      ),
                    m &&
                      r.default.createElement(
                        d.ShowMore,
                        {
                          marginRight: 2,
                          buttonBackground: m && t ? i.BackgroundColor.errorMuted : i.BackgroundColor.backgroundAlternative
                        },
                        r.default.createElement(
                          l.Text,
                          {
                            color: m && t ? i.Color.errorAlternative : i.TextColor.textAlternative,
                            marginBottom: 0,
                            overflowWrap: i.OverflowWrap.Anywhere
                          },
                          e
                        )
                      ),
                    m &&
                      r.default.createElement(l.Icon, {
                        className: "copyable__icon",
                        name: h ? l.IconName.CopySuccess : l.IconName.Copy,
                        color: m && t ? i.Color.errorAlternative : i.IconColor.iconAlternative,
                        marginLeft: "auto",
                        "data-testid": "copy-icon"
                      })
                  );
                };
                (n.Copyable = h), (h.propTypes = { text: a.default.string, sensitive: a.default.bool });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/copyable/copyable.js" }
    ],
    [
      4282,
      { "./copyable": 4281 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Copyable", {
                    enumerable: !0,
                    get: function () {
                      return r.Copyable;
                    }
                  });
                var r = e("./copyable");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/copyable/index.js" }
    ],
    [
      4283,
      { "../../../../helpers/constants/design-system": 4771, "../../../component-library": 4453, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = s(e("react")),
                  a = s(e("prop-types")),
                  o = e("../../../../helpers/constants/design-system"),
                  i = e("../../../component-library");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const l = ({ title: e, error: t, description: n, iconName: a }) =>
                  r.default.createElement(
                    i.Box,
                    {
                      display: o.Display.Flex,
                      flexDirection: o.FlexDirection.Column,
                      alignItems: o.AlignItems.center,
                      justifyContent: o.JustifyContent.center,
                      height: o.BlockSize.Full,
                      padding: 2
                    },
                    a &&
                      r.default.createElement(i.AvatarIcon, {
                        iconName: a,
                        size: i.AvatarIconSize.Xl,
                        color: o.IconColor.errorDefault,
                        backgroundColor: o.BackgroundColor.errorMuted,
                        marginBottom: 4
                      }),
                    r.default.createElement(i.Text, { variant: o.TextVariant.headingLg }, e),
                    n && r.default.createElement(i.Text, { textAlign: o.TextAlign.Center }, n),
                    t &&
                      r.default.createElement(
                        i.BannerAlert,
                        { marginTop: 4, startAccessory: null, severity: o.Severity.Danger },
                        r.default.createElement(i.Text, { variant: o.TextVariant.bodySm }, t)
                      )
                  );
                l.propTypes = {
                  title: a.default.node.isRequired,
                  error: a.default.string,
                  description: a.default.string,
                  iconName: a.default.string
                };
                n.default = l;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/install-error/install-error.js" }
    ],
    [
      4284,
      { "./keyring-snap-removal-warning": 4286 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./keyring-snap-removal-warning")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/keyring-snap-removal-warning/index.ts" }
    ],
    [
      4285,
      {
        "../../../../../shared/modules/hexstring-utils": 3993,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.KeyringAccountListItem = void 0);
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("../../../component-library"),
                  i = e("../../../../helpers/constants/design-system"),
                  s = e("../../../../../shared/modules/hexstring-utils"),
                  l = e("../../../../hooks/useI18nContext");
                n.KeyringAccountListItem = ({ account: e, snapUrl: t }) => {
                  const n = (0, l.useI18nContext)();
                  return a.default.createElement(
                    o.Box,
                    {
                      display: i.Display.Flex,
                      flexDirection: i.FlexDirection.Row,
                      justifyContent: i.JustifyContent.spaceBetween,
                      borderRadius: i.BorderRadius.MD,
                      borderColor: i.BorderColor.borderDefault,
                      padding: 3,
                      width: i.BlockSize.Full,
                      "data-testid": "keyring-account-list-item"
                    },
                    a.default.createElement(
                      o.Box,
                      { display: i.Display.Flex, flexDirection: i.FlexDirection.Column, width: i.BlockSize.TenTwelfths },
                      a.default.createElement(
                        o.Box,
                        { flexDirection: i.FlexDirection.Column, marginBottom: 2 },
                        a.default.createElement(o.Text, { color: i.TextColor.textMuted }, n("keyringAccountName")),
                        a.default.createElement(o.Text, null, e.name)
                      ),
                      a.default.createElement(
                        o.Box,
                        { flexDirection: i.FlexDirection.Column },
                        a.default.createElement(o.Text, { color: i.TextColor.textMuted }, n("keyringAccountPublicAddress")),
                        a.default.createElement(o.Text, { overflowWrap: i.OverflowWrap.Anywhere }, (0, s.toChecksumHexAddress)(e.address))
                      )
                    ),
                    a.default.createElement(
                      o.Box,
                      { display: i.Display.Flex, flexDirection: i.FlexDirection.Column, justifyContent: i.JustifyContent.center },
                      a.default.createElement(o.ButtonIcon, {
                        ariaLabel: "snap-url-export",
                        "data-testid": "keyring-account-link",
                        iconName: o.IconName.Export,
                        color: i.IconColor.primaryDefault,
                        onClick: () => {
                          global.platform.openTab({ url: t });
                        }
                      })
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/keyring-snap-removal-warning/keyring-account-list-item.tsx" }
    ],
    [
      4286,
      {
        "../../../../ducks/metamask/metamask": 4763,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "../../../component-library/text-field/deprecated": 4492,
        "../../../ui/info-tooltip": 4665,
        "./keyring-account-list-item": 4285,
        "@metamask/etherscan-link": 1255,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function ({ snap: e, keyringAccounts: t, onCancel: n, onClose: r, onSubmit: m, onBack: g, isOpen: h }) {
                    const y = (0, c.useI18nContext)(),
                      [v, b] = (0, a.useState)(!1),
                      [_, w] = (0, a.useState)(!1),
                      [k, T] = (0, a.useState)(""),
                      [x, E] = (0, a.useState)(!1),
                      { chainId: C } = (0, i.useSelector)(p.getProviderConfig);
                    (0, a.useEffect)(() => {
                      b(0 === t.length);
                    }, [t]);
                    return a.default.createElement(
                      a.default.Fragment,
                      null,
                      a.default.createElement(
                        s.Modal,
                        { isOpen: h, onClose: r },
                        a.default.createElement(s.ModalOverlay, null),
                        a.default.createElement(
                          s.ModalContent,
                          { modalDialogProps: { display: u.Display.Flex, flexDirection: u.FlexDirection.Column, gap: 4 } },
                          a.default.createElement(
                            s.ModalHeader,
                            {
                              onBack: () => {
                                v ? b(!1) : g();
                              },
                              onClose: () => {
                                b(!1), r();
                              }
                            },
                            y("removeSnap")
                          ),
                          !1 === v
                            ? a.default.createElement(
                                a.default.Fragment,
                                null,
                                a.default.createElement(
                                  s.BannerAlert,
                                  { severity: s.BannerAlertSeverity.Warning, className: "" },
                                  y("backupKeyringSnapReminder")
                                ),
                                a.default.createElement(
                                  s.Box,
                                  { display: u.Display.Flex, justifyContent: u.JustifyContent.spaceBetween },
                                  a.default.createElement(s.Text, null, y("removeKeyringSnap")),
                                  a.default.createElement(d.default, { contentText: y("removeKeyringSnapToolTip"), position: "top" })
                                ),
                                t.map((e, t) =>
                                  a.default.createElement(f.KeyringAccountListItem, {
                                    key: t,
                                    account: e,
                                    snapUrl: (0, o.getAccountLink)(e.address, C)
                                  })
                                )
                              )
                            : a.default.createElement(
                                a.default.Fragment,
                                null,
                                a.default.createElement(
                                  s.Box,
                                  { display: u.Display.Flex, flexDirection: u.FlexDirection.Column, marginTop: 6 },
                                  a.default.createElement(
                                    s.BannerAlert,
                                    { severity: s.BannerAlertSeverity.Warning, className: "", marginBottom: 4 },
                                    y("backupKeyringSnapReminder")
                                  ),
                                  a.default.createElement(
                                    s.Text,
                                    { marginBottom: 4 },
                                    y("keyringSnapRemoveConfirmation", [
                                      a.default.createElement(
                                        s.Text,
                                        { key: "keyringSnapRemoveConfirmation2", fontWeight: u.FontWeight.Bold, as: "span" },
                                        e.manifest.proposedName
                                      )
                                    ])
                                  ),
                                  a.default.createElement(l.TextField, {
                                    marginBottom: 4,
                                    value: k,
                                    onChange: (t) => {
                                      var n;
                                      T(t.target.value), w(((n = t.target.value), E(!1), n === e.manifest.proposedName || (E(!0), !1)));
                                    },
                                    error: x,
                                    inputProps: { "data-testid": "remove-snap-confirmation-input" },
                                    type: "text"
                                  })
                                )
                              ),
                          a.default.createElement(
                            s.Box,
                            { width: u.BlockSize.Full, display: u.Display.Flex, gap: 4 },
                            a.default.createElement(
                              s.Button,
                              { block: !0, variant: s.ButtonVariant.Secondary, size: s.ButtonSize.Lg, onClick: n },
                              y("cancel")
                            ),
                            a.default.createElement(
                              s.Button,
                              {
                                block: !0,
                                size: s.ButtonSize.Lg,
                                id: "popoverRemoveSnapButton",
                                danger: v,
                                disabled: v && !_,
                                onClick: async () => {
                                  v ? _ && m() : b(!0);
                                }
                              },
                              y(v ? "removeSnap" : "continue")
                            )
                          )
                        )
                      )
                    );
                  });
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = e("@metamask/etherscan-link"),
                  i = e("react-redux"),
                  s = e("../../../component-library"),
                  l = e("../../../component-library/text-field/deprecated"),
                  u = e("../../../../helpers/constants/design-system"),
                  c = e("../../../../hooks/useI18nContext"),
                  d = (r = e("../../../ui/info-tooltip")) && r.__esModule ? r : { default: r },
                  p = e("../../../../ducks/metamask/metamask"),
                  f = e("./keyring-account-list-item");
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (m = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/keyring-snap-removal-warning/keyring-snap-removal-warning.tsx" }
    ],
    [
      4287,
      { "./show-more": 4288 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ShowMore", {
                    enumerable: !0,
                    get: function () {
                      return r.ShowMore;
                    }
                  });
                var r = e("./show-more");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/show-more/index.js" }
    ],
    [
      4288,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/snaps/useIsOverflowing": 4824,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ShowMore = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = u(e("prop-types")),
                  o = u(e("../../../../hooks/snaps/useIsOverflowing")),
                  i = e("../../../component-library"),
                  s = e("../../../../helpers/constants/design-system"),
                  l = e("../../../../hooks/useI18nContext");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                const p = ({ children: e, ...t }) => {
                  const n = (0, l.useI18nContext)(),
                    { contentRef: a, isOverflowing: u } = (0, o.default)(),
                    [c, p] = (0, r.useState)(!1),
                    f = u && !c;
                  return r.default.createElement(
                    i.Box,
                    d(
                      {
                        className: "show-more",
                        style: { position: "relative", overflow: "hidden", maxHeight: c ? "none" : undefined },
                        ref: a
                      },
                      t
                    ),
                    e,
                    f &&
                      r.default.createElement(
                        i.Box,
                        {
                          style: {
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--color-${s.BackgroundColor.backgroundDefault}) 33%)`
                          }
                        },
                        r.default.createElement(
                          i.Button,
                          {
                            className: "show-more__button",
                            padding: 0,
                            paddingLeft: 8,
                            variant: i.ButtonVariant.Link,
                            onClick: (e) => {
                              e.stopPropagation(), p(!0);
                            }
                          },
                          r.default.createElement(i.Text, { color: s.TextColor.infoDefault }, n("more"))
                        )
                      )
                  );
                };
                (n.ShowMore = p), (p.propTypes = { children: a.default.node, buttonBackground: a.default.string });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/show-more/show-more.js" }
    ],
    [
      4289,
      { "./snap-authorship-expanded": 4290 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./snap-authorship-expanded")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-authorship-expanded/index.js" }
    ],
    [
      4290,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../hooks/useOriginMetadata": 4843,
        "../../../../selectors": 5197,
        "../../../../store/actions": 5204,
        "../../../component-library": 4453,
        "../../../ui/toggle-button": 4729,
        "../../../ui/tooltip/tooltip": 4737,
        "../snap-avatar": 4293,
        "../snap-version/snap-version": 4322,
        "@metamask/snaps-utils": 1795,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = e("@metamask/snaps-utils"),
                  a = _(e("classnames")),
                  o = _(e("prop-types")),
                  i = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  s = e("react-redux"),
                  l = e("../../../../helpers/constants/design-system"),
                  u = e("../../../../helpers/utils/util"),
                  c = e("../../../../hooks/useI18nContext"),
                  d = e("../../../../hooks/useOriginMetadata"),
                  p = e("../../../../selectors"),
                  f = e("../../../../store/actions"),
                  m = e("../../../component-library"),
                  g = _(e("../../../ui/toggle-button")),
                  h = _(e("../../../ui/tooltip/tooltip")),
                  y = _(e("../snap-avatar")),
                  v = _(e("../snap-version/snap-version"));
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function _(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const w = ({ snapId: e, className: t, snap: n }) => {
                  const o = (0, c.useI18nContext)(),
                    b = (0, s.useDispatch)(),
                    _ = e && (0, r.getSnapPrefix)(e),
                    w = e && (0, u.removeSnapIdPrefix)(e),
                    k = "npm:" === _,
                    T = null != n && n.version ? `/v/${null == n ? void 0 : n.version}` : "",
                    x = k ? `https://www.npmjs.com/package/${w}${T}` : w,
                    E = (0, s.useSelector)((t) => (0, p.getTargetSubjectMetadata)(t, e)),
                    C = (0, s.useSelector)((t) => (0, p.getSnapRegistryData)(t, e)),
                    { website: M = undefined } = (null == C ? void 0 : C.metadata) ?? {},
                    [P, O] = (0, i.useState)(null);
                  (0, i.useEffect)(() => {
                    M &&
                      (async () => {
                        (await (0, f.getPhishingResult)(M)).result || O(M);
                      })();
                  }, [M]);
                  const S = e && (0, u.getSnapName)(e, E),
                    j = (null == n ? void 0 : n.versionHistory) ?? [],
                    N = j.length ? j[j.length - 1] : undefined,
                    I = (0, d.useOriginMetadata)(null == N ? void 0 : N.origin);
                  return i.default.createElement(
                    m.Box,
                    {
                      className: (0, a.default)("snaps-authorship-expanded", t),
                      backgroundColor: l.BackgroundColor.backgroundDefault,
                      borderColor: l.BorderColor.borderDefault,
                      borderWidth: 1,
                      width: l.BlockSize.Full,
                      borderRadius: l.BorderRadius.LG
                    },
                    i.default.createElement(
                      m.Box,
                      {
                        alignItems: l.AlignItems.center,
                        display: l.Display.Flex,
                        width: l.BlockSize.Full,
                        paddingLeft: 4,
                        paddingRight: 4,
                        paddingTop: 3,
                        paddingBottom: 3
                      },
                      i.default.createElement(m.Box, null, i.default.createElement(y.default, { snapId: e })),
                      i.default.createElement(
                        m.Box,
                        {
                          marginLeft: 4,
                          marginRight: 0,
                          display: l.Display.Flex,
                          flexDirection: l.FlexDirection.Column,
                          style: { overflow: "hidden" }
                        },
                        i.default.createElement(m.Text, { ellipsis: !0, fontWeight: l.FontWeight.Medium }, S),
                        i.default.createElement(
                          m.Text,
                          { ellipsis: !0, variant: l.TextVariant.bodySm, color: l.TextColor.textAlternative },
                          w
                        )
                      )
                    ),
                    i.default.createElement(
                      m.Box,
                      {
                        display: l.Display.Flex,
                        flexDirection: l.FlexDirection.Row,
                        justifyContent: l.JustifyContent.spaceBetween,
                        paddingLeft: 4,
                        paddingTop: 4,
                        paddingBottom: 4,
                        borderColor: l.BorderColor.borderDefault,
                        width: l.BlockSize.Full,
                        style: { borderLeft: l.BorderStyle.none, borderRight: l.BorderStyle.none }
                      },
                      i.default.createElement(m.Text, { variant: l.TextVariant.bodyMd, fontWeight: l.FontWeight.Medium }, o("enabled")),
                      i.default.createElement(
                        m.Box,
                        { style: { maxWidth: "52px" } },
                        i.default.createElement(
                          h.default,
                          { interactive: !0, position: "left", html: o("snapsToggle") },
                          i.default.createElement(g.default, {
                            value: null == n ? void 0 : n.enabled,
                            onToggle: () => {
                              null != n && n.enabled
                                ? b((0, f.disableSnap)(null == n ? void 0 : n.id))
                                : b((0, f.enableSnap)(null == n ? void 0 : n.id));
                            }
                          })
                        )
                      )
                    ),
                    i.default.createElement(
                      m.Box,
                      { padding: 4, width: l.BlockSize.Full },
                      P &&
                        i.default.createElement(
                          m.Box,
                          {
                            display: l.Display.Flex,
                            flexDirection: l.FlexDirection.Row,
                            justifyContent: l.JustifyContent.spaceBetween,
                            width: l.BlockSize.Full,
                            marginBottom: 4
                          },
                          i.default.createElement(
                            m.Text,
                            { variant: l.TextVariant.bodyMd, fontWeight: l.FontWeight.Medium },
                            o("snapDetailWebsite")
                          ),
                          i.default.createElement(
                            m.Box,
                            {
                              paddingLeft: 8,
                              display: l.Display.Flex,
                              flexDirection: l.FlexDirection.Column,
                              alignItems: l.AlignItems.flexEnd
                            },
                            i.default.createElement(m.ButtonLink, { href: P, target: "_blank", overflowWrap: l.OverflowWrap.Anywhere }, P)
                          )
                        ),
                      I &&
                        N &&
                        i.default.createElement(
                          m.Box,
                          {
                            display: l.Display.Flex,
                            flexDirection: l.FlexDirection.Row,
                            justifyContent: l.JustifyContent.spaceBetween,
                            width: l.BlockSize.Full
                          },
                          i.default.createElement(
                            m.Text,
                            { variant: l.TextVariant.bodyMd, fontWeight: l.FontWeight.Medium },
                            o("installOrigin")
                          ),
                          i.default.createElement(
                            m.Box,
                            { display: l.Display.Flex, flexDirection: l.FlexDirection.Column, alignItems: l.AlignItems.flexEnd },
                            i.default.createElement(m.Text, null, I.host),
                            i.default.createElement(
                              m.Text,
                              { color: l.Color.textMuted },
                              o("installedOn", [(0, u.formatDate)(N.date, "dd MMM yyyy")])
                            )
                          )
                        ),
                      i.default.createElement(
                        m.Box,
                        {
                          display: l.Display.Flex,
                          flexDirection: l.FlexDirection.Row,
                          justifyContent: l.JustifyContent.spaceBetween,
                          alignItems: l.AlignItems.center,
                          marginTop: 4
                        },
                        i.default.createElement(m.Text, { variant: l.TextVariant.bodyMd, fontWeight: l.FontWeight.Medium }, o("version")),
                        i.default.createElement(v.default, { version: null == n ? void 0 : n.version, url: x })
                      )
                    )
                  );
                };
                w.propTypes = { snapId: o.default.string, className: o.default.string, snap: o.default.object };
                n.default = w;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-authorship-expanded/snap-authorship-expanded.js" }
    ],
    [
      4291,
      { "./snap-authorship-header": 4292 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./snap-authorship-header")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-authorship-header/index.js" }
    ],
    [
      4292,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
        "../snap-avatar": 4293,
        "../snap-version/snap-version": 4322,
        "@metamask/snaps-utils": 1795,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = m(e("react")),
                  a = m(e("prop-types")),
                  o = m(e("classnames")),
                  i = e("@metamask/snaps-utils"),
                  s = e("react-redux"),
                  l = e("../../../../helpers/constants/design-system"),
                  u = e("../../../../helpers/utils/util"),
                  c = e("../../../component-library"),
                  d = e("../../../../selectors"),
                  p = m(e("../snap-avatar")),
                  f = m(e("../snap-version/snap-version"));
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const g = ({ snapId: e, className: t, boxShadow: n = "var(--shadow-size-lg) var(--color-shadow-default)" }) => {
                  const a = e && (0, i.getSnapPrefix)(e),
                    m = e && (0, u.removeSnapIdPrefix)(e),
                    g = "npm:" === a,
                    h = (0, s.useSelector)((t) => (0, d.getTargetSubjectMetadata)(t, e)),
                    y = null != h && h.version ? `/v/${null == h ? void 0 : h.version}` : "",
                    v = g ? `https://www.npmjs.com/package/${m}${y}` : m,
                    b = e && (0, u.getSnapName)(e, h);
                  return r.default.createElement(
                    c.Box,
                    {
                      className: (0, o.default)("snaps-authorship-header", t),
                      backgroundColor: l.BackgroundColor.backgroundDefault,
                      width: l.BlockSize.Full,
                      alignItems: l.AlignItems.center,
                      display: l.Display.Flex,
                      padding: 4,
                      style: { boxShadow: n }
                    },
                    r.default.createElement(c.Box, null, r.default.createElement(p.default, { snapId: e })),
                    r.default.createElement(
                      c.Box,
                      {
                        marginLeft: 4,
                        marginRight: 4,
                        display: l.Display.Flex,
                        flexDirection: l.FlexDirection.Column,
                        style: { overflow: "hidden" }
                      },
                      r.default.createElement(c.Text, { ellipsis: !0, fontWeight: l.FontWeight.Medium }, b),
                      r.default.createElement(
                        c.Text,
                        { ellipsis: !0, variant: l.TextVariant.bodySm, color: l.TextColor.textAlternative },
                        m
                      )
                    ),
                    r.default.createElement(
                      c.Box,
                      { marginLeft: "auto" },
                      r.default.createElement(f.default, { version: null == h ? void 0 : h.version, url: v })
                    )
                  );
                };
                g.propTypes = { snapId: a.default.string, className: a.default.string, boxShadow: a.default.string };
                n.default = g;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-authorship-header/snap-authorship-header.js" }
    ],
    [
      4293,
      { "./snap-avatar": 4294 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./snap-avatar")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-avatar/index.js" }
    ],
    [
      4294,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = d(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("classnames")),
                  i = e("react-redux"),
                  s = e("../../../../helpers/constants/design-system"),
                  l = e("../../../../helpers/utils/util"),
                  u = e("../../../component-library"),
                  c = e("../../../../selectors");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({
                  snapId: e,
                  badgeSize: t = u.IconSize.Sm,
                  avatarSize: n = u.IconSize.Lg,
                  borderWidth: a = 2,
                  className: d
                }) => {
                  var p;
                  const f = (0, i.useSelector)((t) => (0, c.getTargetSubjectMetadata)(t, e)),
                    m = e && (0, l.getSnapName)(e, f),
                    g = null == f ? void 0 : f.iconUrl,
                    h = (null == m || null === (p = m.match(/[a-z0-9]/iu)) || void 0 === p ? void 0 : p[0]) ?? "?";
                  return r.default.createElement(
                    u.BadgeWrapper,
                    {
                      className: (0, o.default)("snap-avatar", d),
                      badge: r.default.createElement(u.AvatarIcon, {
                        iconName: u.IconName.Snaps,
                        size: t,
                        backgroundColor: s.IconColor.infoDefault,
                        borderColor: s.BackgroundColor.backgroundDefault,
                        borderWidth: a,
                        iconProps: { color: s.IconColor.infoInverse }
                      }),
                      position: u.BadgeWrapperPosition.bottomRight
                    },
                    g
                      ? r.default.createElement(u.AvatarFavicon, { size: n, src: g, name: m })
                      : r.default.createElement(
                          u.AvatarBase,
                          {
                            size: n,
                            display: s.Display.Flex,
                            alignItems: s.AlignItems.center,
                            justifyContent: s.JustifyContent.center,
                            color: s.TextColor.textAlternative,
                            style: { borderWidth: "0px" }
                          },
                          h
                        )
                  );
                };
                p.propTypes = {
                  snapId: a.default.string,
                  badgeSize: a.default.string,
                  avatarSize: a.default.string,
                  borderWidth: a.default.number,
                  className: a.default.string
                };
                n.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-avatar/snap-avatar.js" }
    ],
    [
      4295,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
        "../../../ui/box": 4607,
        "../../../ui/tooltip/tooltip": 4737,
        "../snap-avatar/snap-avatar": 4294,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = g);
                var r = m(e("react")),
                  a = m(e("prop-types")),
                  o = e("react-redux"),
                  i = m(e("../../../ui/box")),
                  s = e("../../../../helpers/constants/design-system"),
                  l = e("../../../../helpers/utils/util"),
                  u = e("../../../component-library"),
                  c = m(e("../../../ui/tooltip/tooltip")),
                  d = e("../../../../hooks/useI18nContext"),
                  p = m(e("../snap-avatar/snap-avatar")),
                  f = e("../../../../selectors");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g({ origin: e, snapId: t }) {
                  const n = (0, d.useI18nContext)(),
                    a = (0, o.useSelector)((e) => (0, f.getTargetSubjectMetadata)(e, t)),
                    m = (0, l.getSnapName)(t, a);
                  return r.default.createElement(
                    i.default,
                    { alignItems: s.AlignItems.center, paddingTop: 2, paddingBottom: 2, display: s.Display.Flex },
                    r.default.createElement(p.default, { snapId: t }),
                    r.default.createElement(
                      i.default,
                      { width: "full", marginLeft: 4, marginRight: 4 },
                      r.default.createElement(
                        u.Text,
                        null,
                        n("connectSnap", [
                          r.default.createElement(u.Text, { as: u.ValidTag.Span, key: "1", fontWeight: s.FontWeight.Bold }, m)
                        ])
                      )
                    ),
                    r.default.createElement(
                      i.default,
                      null,
                      r.default.createElement(
                        c.default,
                        {
                          html: r.default.createElement(
                            "div",
                            null,
                            n("snapConnectionWarning", [
                              r.default.createElement("b", { key: "0" }, e),
                              r.default.createElement("b", { key: "1" }, m)
                            ])
                          ),
                          position: "bottom"
                        },
                        r.default.createElement(u.Icon, { color: s.IconColor.iconMuted, name: u.IconName.Info, size: u.IconSize.Sm })
                      )
                    )
                  );
                }
                g.propTypes = { origin: a.default.string.isRequired, snapId: a.default.string.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-connect-cell/snap-connect-cell.js" }
    ],
    [
      4296,
      { "./snap-delineator": 4297 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SnapDelineator", {
                    enumerable: !0,
                    get: function () {
                      return r.SnapDelineator;
                    }
                  });
                var r = e("./snap-delineator");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-delineator/index.js" }
    ],
    [
      4297,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/constants/snaps": 4779,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "../../../ui/pulse-loader/pulse-loader": 4702,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SnapDelineator = void 0);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = e("../../../../hooks/useI18nContext"),
                  i = e("../../../../helpers/constants/design-system"),
                  s = e("../../../component-library"),
                  l = e("../../../../helpers/constants/snaps"),
                  u = c(e("../../../ui/pulse-loader/pulse-loader"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                const p = ({
                  snapName: e,
                  type: t = l.DelineatorType.default,
                  isLoading: n = !1,
                  isCollapsable: a = !1,
                  isCollapsed: c = !1,
                  children: p,
                  onClick: f,
                  boxProps: m
                }) => {
                  const g = (0, o.useI18nContext)(),
                    h = t === l.DelineatorType.Error || t === l.DelineatorType.Warning;
                  return r.default.createElement(
                    s.Box,
                    d(
                      {
                        className: "snap-delineator__wrapper",
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column,
                        borderStyle: i.BorderStyle.solid,
                        borderColor: i.BorderColor.borderDefault,
                        borderRadius: i.BorderRadius.LG,
                        backgroundColor: h ? i.BackgroundColor.errorMuted : i.BackgroundColor.backgroundDefault
                      },
                      m,
                      { style: { minHeight: n && "180px", ...(null == m ? void 0 : m.style) } }
                    ),
                    r.default.createElement(
                      s.Box,
                      {
                        className: "snap-delineator__header",
                        display: i.Display.Flex,
                        alignItems: i.AlignItems.center,
                        justifyContent: i.JustifyContent.spaceBetween,
                        padding: 1,
                        style: { borderBottomWidth: c ? 0 : 1 }
                      },
                      r.default.createElement(
                        s.Box,
                        { display: i.Display.Flex, alignItems: i.AlignItems.center },
                        r.default.createElement(s.AvatarIcon, {
                          iconName: s.IconName.Snaps,
                          size: s.AvatarIconSize.Xs,
                          backgroundColor: h ? i.IconColor.errorDefault : i.IconColor.infoDefault,
                          iconProps: { color: i.IconColor.infoInverse }
                        }),
                        r.default.createElement(
                          s.Text,
                          {
                            variant: i.TextVariant.bodySm,
                            color: h ? i.TextColor.textDefault : i.TextColor.textAlternative,
                            className: "snap-delineator__header__text",
                            marginLeft: 1,
                            marginTop: 0,
                            marginBottom: 0
                          },
                          g((0, l.getDelineatorTitle)(t), [e])
                        )
                      ),
                      a &&
                        r.default.createElement(s.Icon, {
                          name: c ? s.IconName.ArrowDown : s.IconName.ArrowUp,
                          size: s.IconSize.Sm,
                          color: i.IconColor.iconMuted,
                          className: "snap-delineator__expansion-icon",
                          onClick: f
                        })
                    ),
                    r.default.createElement(
                      s.Box,
                      {
                        className: "snap-delineator__content",
                        padding: 4,
                        display: a && c ? i.Display.None : i.Display.Flex,
                        flexDirection: i.FlexDirection.Column,
                        alignItems: n && i.AlignItems.center,
                        justifyContent: n && i.JustifyContent.center,
                        style: { flexGrow: n && "1" }
                      },
                      n ? r.default.createElement(u.default, null) : p
                    )
                  );
                };
                (n.SnapDelineator = p),
                  (p.propTypes = {
                    snapName: a.default.string,
                    type: a.default.string,
                    isCollapsable: a.default.bool,
                    isCollapsed: a.default.bool,
                    isLoading: a.default.bool,
                    onClick: a.default.func,
                    boxProps: a.default.object,
                    children: a.default.node
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-delineator/snap-delineator.js" }
    ],
    [
      4298,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/constants/snaps": 4779,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
        "../copyable": 4282,
        "../snap-delineator": 4296,
        "../snap-ui-renderer": 4318,
        "./useSnapHome": 4299,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SnapHomeRenderer = void 0);
                var r = h(e("react")),
                  a = h(e("prop-types")),
                  o = e("react-redux"),
                  i = e("../../../component-library"),
                  s = e("../snap-ui-renderer"),
                  l = e("../../../../selectors"),
                  u = e("../../../../helpers/utils/util"),
                  c = e("../snap-delineator"),
                  d = e("../../../../helpers/constants/snaps"),
                  p = e("../../../../helpers/constants/design-system"),
                  f = e("../copyable"),
                  m = e("../../../../hooks/useI18nContext"),
                  g = e("./useSnapHome");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const y = ({ snapId: e }) => {
                  const t = (0, m.useI18nContext)(),
                    n = (0, o.useSelector)((t) => (0, l.getTargetSubjectMetadata)(t, e)),
                    a = (0, u.getSnapName)(e, n),
                    { data: h, error: y, loading: v } = (0, g.useSnapHome)({ snapId: e }),
                    b = !v && !y && (null == h ? void 0 : h.content);
                  return r.default.createElement(
                    i.Box,
                    null,
                    y &&
                      r.default.createElement(
                        c.SnapDelineator,
                        { snapName: a, type: d.DelineatorType.Error },
                        r.default.createElement(
                          i.Text,
                          { variant: p.TextVariant.bodySm, marginBottom: 4 },
                          t("snapsUIError", [r.default.createElement("b", { key: "0" }, a)])
                        ),
                        r.default.createElement(f.Copyable, { text: y.message })
                      ),
                    (b || v) && r.default.createElement(s.SnapUIRenderer, { snapId: e, data: b, isLoading: v })
                  );
                };
                (n.SnapHomeRenderer = y), (y.propTypes = { snapId: a.default.string });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-home-page/snap-home-renderer.js" }
    ],
    [
      4299,
      { "../../../../store/actions": 5204, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.useSnapHome = function ({ snapId: e }) {
                    const [t, n] = (0, r.useState)(!0),
                      [o, i] = (0, r.useState)(undefined),
                      [s, l] = (0, r.useState)(undefined);
                    return (
                      (0, r.useEffect)(() => {
                        let t = !1;
                        return (
                          (async function () {
                            try {
                              l(undefined), n(!0);
                              const r = await (0, a.handleSnapRequest)({
                                snapId: e,
                                origin: "",
                                handler: "onHomePage",
                                request: { jsonrpc: "2.0", method: " " }
                              });
                              t || i(r);
                            } catch (e) {
                              t || l(e);
                            } finally {
                              t || n(!1);
                            }
                          })(),
                          () => (t = !0)
                        );
                      }, [e]),
                      { data: o, error: s, loading: t }
                    );
                  });
                var r = e("react"),
                  a = e("../../../../store/actions");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-home-page/useSnapHome.js" }
    ],
    [
      4300,
      { "./snap-install-warning": 4301 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./snap-install-warning")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-install-warning/index.js" }
    ],
    [
      4301,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "../../../ui/popover": 4699,
        "../../permission-cell": 4224,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = c(e("prop-types")),
                  o = e("../../../../hooks/useI18nContext"),
                  i = e("../../../../helpers/constants/design-system"),
                  s = c(e("../../../ui/popover")),
                  l = e("../../../component-library"),
                  u = c(e("../../permission-cell"));
                function c(e) {
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
                function p({ onCancel: e, onSubmit: t, warnings: n, snapName: a }) {
                  const c = (0, o.useI18nContext)(),
                    [d, p] = (0, r.useState)(!1),
                    f = () =>
                      r.default.createElement(
                        l.Box,
                        {
                          display: i.Display.Flex,
                          justifyContent: i.JustifyContent.center,
                          alignItems: i.AlignItems.center,
                          width: i.BlockSize.Full
                        },
                        r.default.createElement(
                          l.Button,
                          { type: "primary", disabled: !d, onClick: t, width: i.BlockSize.Full, size: l.ButtonSize.Lg },
                          c("confirm")
                        )
                      );
                  function m(e) {
                    if (1 === e.length)
                      return [
                        r.default.createElement(
                          l.Text,
                          { fontWeight: i.FontWeight.Medium, as: "span", key: "warningMessageSubject" },
                          e[0].warningMessageSubject
                        )
                      ];
                    if (2 === e.length) {
                      const t = e[0].warningMessageSubject,
                        n = e[1].warningMessageSubject;
                      return [
                        r.default.createElement(
                          l.Text,
                          { fontWeight: i.FontWeight.Medium, as: "span", key: "warningMessageSubject" },
                          c("andForTwoItems", [t, n])
                        )
                      ];
                    }
                    return e.map((t, n) =>
                      e.length - 1 === n
                        ? []
                        : e.length - 2 === n
                        ? [
                            r.default.createElement(
                              l.Text,
                              { fontWeight: i.FontWeight.Medium, as: "span", key: `${t.permissionName}_and_${n}` },
                              c("andForListItems", [t.warningMessageSubject, e[e.length - 1].warningMessageSubject])
                            )
                          ]
                        : [
                            r.default.createElement(
                              "span",
                              { key: `${t.permissionName}_${n}` },
                              r.default.createElement(
                                l.Text,
                                { fontWeight: i.FontWeight.Medium, as: "span" },
                                t.warningMessageSubject,
                                ", "
                              )
                            )
                          ]
                    );
                  }
                  const g = n.filter((e) => "snap_getBip32PublicKey" === e.permissionName),
                    h = n.filter((e) => "snap_getBip32Entropy" === e.permissionName || "snap_getBip44Entropy" === e.permissionName);
                  return r.default.createElement(
                    s.default,
                    {
                      className: "snap-install-warning",
                      footer: r.default.createElement(f, null),
                      headerProps: { padding: [4, 4, 0] },
                      contentProps: { paddingLeft: [4, 4], paddingRight: [4, 4], paddingTop: 0, paddingBottom: [4, 4] },
                      footerProps: { padding: [4, 4] },
                      onClose: e
                    },
                    r.default.createElement(
                      l.Box,
                      { display: i.Display.Flex, justifyContent: i.JustifyContent.center, marginBottom: 4 },
                      r.default.createElement(l.AvatarIcon, {
                        iconName: l.IconName.Danger,
                        backgroundColor: i.BackgroundColor.warningMuted,
                        color: i.IconColor.warningDefault,
                        size: l.AvatarIconSize.Xl
                      })
                    ),
                    r.default.createElement(
                      l.Text,
                      { paddingBottom: 4, textAlign: i.TextAlign.Center, variant: i.TextVariant.headingMd, as: "h2" },
                      c("snapInstallWarningHeading")
                    ),
                    r.default.createElement(
                      l.Text,
                      { paddingBottom: 4, textAlign: i.TextAlign.Left },
                      c("snapInstallWarningCheck", [
                        r.default.createElement(
                          l.Text,
                          { key: "snapNameInWarningDescription", fontWeight: i.FontWeight.Medium, as: "span" },
                          a
                        )
                      ])
                    ),
                    h.length > 0 &&
                      r.default.createElement(
                        l.Box,
                        { as: "span" },
                        r.default.createElement(u.default, {
                          permissionName: r.default.createElement(l.Text, null, c("snapInstallWarningPermissionNameForEntropy", [m(h)])),
                          title: r.default.createElement(l.Text, null, c("snapInstallWarningPermissionNameForEntropy", [m(h)])),
                          description: c("snapInstallWarningPermissionDescriptionForEntropy", [
                            r.default.createElement(
                              l.Text,
                              { color: i.TextColor.inherit, variant: i.TextVariant.inherit, fontWeight: i.FontWeight.Medium, key: "1" },
                              a
                            )
                          ]),
                          weight: 1,
                          avatarIcon: l.IconName.Key,
                          key: "snapInstallWarningPermissionCellKeyEntropy",
                          hideStatus: !0
                        })
                      ),
                    g.length > 0 &&
                      r.default.createElement(
                        l.Box,
                        { as: "span", marginTop: 4 },
                        r.default.createElement(u.default, {
                          permissionName: r.default.createElement(
                            l.Text,
                            null,
                            c("snapInstallWarningPermissionNameForViewPublicKey", [m(g)])
                          ),
                          title: r.default.createElement(l.Text, null, c("snapInstallWarningPermissionNameForViewPublicKey", [m(g)])),
                          description: c("snapInstallWarningPermissionDescriptionForBip32View", [
                            r.default.createElement(
                              l.Text,
                              { color: i.TextColor.inherit, variant: i.TextVariant.inherit, fontWeight: i.FontWeight.Medium, key: "1" },
                              a
                            )
                          ]),
                          weight: 1,
                          avatarIcon: l.IconName.Key,
                          key: "snapInstallWarningPermissionCellViewPublicKey",
                          hideStatus: !0
                        })
                      ),
                    r.default.createElement(
                      l.Box,
                      {
                        display: i.Display.Flex,
                        justifyContent: i.JustifyContent.flexStart,
                        alignItems: i.AlignItems.center,
                        marginTop: 4,
                        padding: 4,
                        borderRadius: i.BorderRadius.SM,
                        backgroundColor: d ? i.BackgroundColor.infoMuted : i.BackgroundColor.backgroundAlternative
                      },
                      r.default.createElement(l.Checkbox, {
                        isRequired: !0,
                        onChange: () => p((e) => !e),
                        isChecked: d,
                        label: r.default.createElement(
                          l.Text,
                          { as: "span" },
                          "Install",
                          " ",
                          r.default.createElement(l.Text, { as: "span", fontWeight: i.FontWeight.Medium }, a)
                        )
                      })
                    )
                  );
                }
                p.propTypes = {
                  onCancel: a.default.func,
                  onSubmit: a.default.func,
                  warnings: a.default.arrayOf({
                    id: a.default.string,
                    permissionName: a.default.string,
                    warningMessageSubject: a.default.oneOfType([a.default.string, a.default.element])
                  }),
                  snapName: a.default.string.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-install-warning/snap-install-warning.js" }
    ],
    [
      4302,
      { "./snap-legacy-authorship-header": 4303 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./snap-legacy-authorship-header")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-legacy-authorship-header/index.js" }
    ],
    [
      4303,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
        "../snap-avatar": 4293,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = p(e("react")),
                  a = p(e("prop-types")),
                  o = p(e("classnames")),
                  i = e("react-redux"),
                  s = e("../../../../helpers/constants/design-system"),
                  l = e("../../../../helpers/utils/util"),
                  u = e("../../../component-library"),
                  c = e("../../../../selectors"),
                  d = p(e("../snap-avatar"));
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const f = ({ snapId: e, className: t, marginLeft: n, marginRight: a }) => {
                  const p = e && (0, l.removeSnapIdPrefix)(e),
                    f = (0, i.useSelector)((t) => (0, c.getTargetSubjectMetadata)(t, e)),
                    m = e && (0, l.getSnapName)(e, f);
                  return r.default.createElement(
                    u.Box,
                    {
                      className: (0, o.default)("snap-legacy-authorship-header", t),
                      backgroundColor: s.BackgroundColor.backgroundDefault,
                      width: s.BlockSize.Full,
                      alignItems: s.AlignItems.center,
                      display: s.Display.Flex,
                      padding: 2,
                      borderColor: s.BorderColor.borderDefault,
                      borderRadius: s.BorderRadius.pill,
                      marginLeft: n,
                      marginRight: a
                    },
                    r.default.createElement(u.Box, null, r.default.createElement(d.default, { snapId: e })),
                    r.default.createElement(
                      u.Box,
                      {
                        marginLeft: 4,
                        marginRight: 4,
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Column,
                        style: { overflow: "hidden" }
                      },
                      r.default.createElement(u.Text, { ellipsis: !0, fontWeight: s.FontWeight.Medium }, m),
                      r.default.createElement(
                        u.Text,
                        { ellipsis: !0, variant: s.TextVariant.bodySm, color: s.TextColor.textAlternative },
                        p
                      )
                    )
                  );
                };
                f.propTypes = {
                  snapId: a.default.string,
                  className: a.default.string,
                  marginLeft: a.default.number,
                  marginRight: a.default.number
                };
                n.default = f;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-legacy-authorship-header/snap-legacy-authorship-header.js" }
    ],
    [
      4304,
      { "./snap-link-warning": 4305 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./snap-link-warning")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-link-warning/index.js" }
    ],
    [
      4305,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = u);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../../component-library"),
                  i = e("../../../../helpers/constants/design-system"),
                  s = e("../../../../hooks/useI18nContext");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u({ isOpen: e, onClose: t, url: n }) {
                  const a = (0, s.useI18nContext)(),
                    l = n && new URL(n),
                    u = l && n.split(l.host);
                  return r.default.createElement(
                    o.Modal,
                    { isOpen: e, onClose: t },
                    r.default.createElement(o.ModalOverlay, null),
                    r.default.createElement(
                      o.ModalContent,
                      { modalDialogProps: { display: i.Display.Flex, flexDirection: i.FlexDirection.Column, gap: 4 } },
                      r.default.createElement(
                        o.ModalHeader,
                        {
                          onClose: t,
                          childrenWrapperProps: {
                            display: i.Display.Flex,
                            flexDirection: i.FlexDirection.Column,
                            alignItems: i.AlignItems.center,
                            gap: 2
                          }
                        },
                        r.default.createElement(o.Icon, {
                          name: o.IconName.Danger,
                          color: i.IconColor.warningDefault,
                          size: o.AvatarIconSize.Xl
                        }),
                        r.default.createElement(o.Text, { variant: i.TextVariant.headingMd }, a("leaveMetaMask")),
                        r.default.createElement(o.Text, { textAlign: i.TextAlign.Center }, a("leaveMetaMaskDesc"))
                      ),
                      r.default.createElement(
                        o.ButtonLink,
                        { externalLink: !0, href: n, width: i.BlockSize.Full, textProps: { width: i.BlockSize.Full } },
                        r.default.createElement(
                          o.Box,
                          {
                            display: i.Display.Flex,
                            FlexDirection: i.FlexDirection.Row,
                            justifyContent: i.JustifyContent.spaceBetween,
                            alignItems: i.AlignItems.center,
                            backgroundColor: i.BackgroundColor.backgroundAlternative,
                            borderColor: i.BorderColor.borderDefault,
                            borderStyle: i.BorderStyle.solid,
                            borderRadius: i.BorderRadius.MD,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingRight: 4,
                            paddingLeft: 4,
                            width: i.BlockSize.Full
                          },
                          l &&
                            r.default.createElement(
                              o.Text,
                              { ellipsis: !0, style: { overflow: "hidden" }, color: i.TextColor.primaryDefault },
                              u[0],
                              r.default.createElement("b", null, l.host),
                              u[1]
                            ),
                          r.default.createElement(o.Icon, { name: o.IconName.Export, color: i.IconColor.iconAlternative, marginLeft: 2 })
                        )
                      ),
                      r.default.createElement(
                        o.Box,
                        { width: i.BlockSize.Full, display: i.Display.Flex, gap: 4 },
                        r.default.createElement(
                          o.Button,
                          { block: !0, variant: o.ButtonVariant.Secondary, size: o.ButtonSize.Lg, onClick: t },
                          a("back")
                        ),
                        r.default.createElement(
                          o.Button,
                          { block: !0, size: o.ButtonSize.Lg, "data-testid": "modalSnapLinkButton", href: n, externalLink: !0, onClick: t },
                          a("visitSite")
                        )
                      )
                    )
                  );
                }
                u.propTypes = { isOpen: a.default.bool, onClose: a.default.func, url: a.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-link-warning/snap-link-warning.js" }
    ],
    [
      4306,
      { "./snap-list-item": 4307 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./snap-list-item")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-list-item/index.js" }
    ],
    [
      4307,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../component-library": 4453,
        "../snap-avatar": 4293,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../../../helpers/constants/design-system"),
                  i = e("../../../component-library"),
                  s = l(e("../snap-avatar"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ name: e, packageName: t, onClick: n, snapId: a, showUpdateDot: l }) =>
                  r.default.createElement(
                    i.Box,
                    {
                      className: "snap-list-item",
                      "data-testid": a,
                      display: o.Display.Flex,
                      alignItems: o.AlignItems.center,
                      justifyContent: o.JustifyContent.spaceBetween,
                      width: o.BlockSize.Full,
                      padding: 4,
                      onClick: n
                    },
                    r.default.createElement(
                      i.Box,
                      {
                        className: "snap-list-item__inner-wrapper",
                        display: o.Display.Flex,
                        alignItems: o.AlignItems.center,
                        justifyContent: o.JustifyContent.flexStart,
                        width: o.BlockSize.Full
                      },
                      r.default.createElement(i.Box, null, r.default.createElement(s.default, { snapId: a })),
                      r.default.createElement(
                        i.Box,
                        { paddingLeft: 4, paddingRight: 4, width: o.BlockSize.Full },
                        r.default.createElement(
                          i.Text,
                          { className: "snap-list-item__title", color: o.Color.textDefault, variant: o.TextVariant.bodyMd },
                          e
                        ),
                        r.default.createElement(
                          i.Text,
                          { className: "snap-list-item__url", color: o.Color.textAlternative, variant: o.TextVariant.bodySm },
                          t
                        )
                      )
                    ),
                    l &&
                      r.default.createElement(
                        i.Box,
                        { display: o.Display.Flex },
                        r.default.createElement(i.Icon, {
                          name: i.IconName.FullCircle,
                          size: i.IconSize.Xs,
                          color: o.IconColor.primaryDefault
                        })
                      )
                  );
                u.propTypes = {
                  name: a.default.string,
                  packageName: a.default.string,
                  onClick: a.default.func,
                  snapId: a.default.string.isRequired,
                  showUpdateDot: a.default.bool
                };
                n.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-list-item/snap-list-item.js" }
    ],
    [
      4308,
      { "./snap-permissions-list": 4309 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./snap-permissions-list")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-permissions-list/index.js" }
    ],
    [
      4309,
      {
        "../../../../helpers/utils/permission": 4806,
        "../../../../hooks/useI18nContext": 4837,
        "../../../ui/box": 4607,
        "../../permission-cell": 4224,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = c);
                var r = u(e("react")),
                  a = u(e("prop-types")),
                  o = e("../../../../helpers/utils/permission"),
                  i = e("../../../../hooks/useI18nContext"),
                  s = u(e("../../permission-cell")),
                  l = u(e("../../../ui/box"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c({ snapId: e, permissions: t, targetSubjectMetadata: n, showOptions: a }) {
                  const u = (0, i.useI18nContext)();
                  return r.default.createElement(
                    l.default,
                    { paddingTop: 2, paddingBottom: 2, className: "snap-permissions-list" },
                    (0, o.getWeightedPermissions)(u, t, n).map((t, n) => {
                      var o;
                      return r.default.createElement(s.default, {
                        snapId: e,
                        permissionName: t.permissionName,
                        title: t.label,
                        description: t.description,
                        weight: t.weight,
                        avatarIcon: t.leftIcon,
                        dateApproved: null == t || null === (o = t.permissionValue) || void 0 === o ? void 0 : o.date,
                        key: `${t.permissionName}-${n}`,
                        showOptions: a
                      });
                    })
                  );
                }
                c.propTypes = {
                  snapId: a.default.string.isRequired,
                  permissions: a.default.object.isRequired,
                  targetSubjectMetadata: a.default.object.isRequired,
                  showOptions: a.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-permissions-list/snap-permissions-list.js" }
    ],
    [
      4310,
      { "./snap-privacy-warning": 4311 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./snap-privacy-warning")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-privacy-warning/index.js" }
    ],
    [
      4311,
      {
        "../../../../../shared/constants/terms": 3971,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../hooks/useScrollRequired": 4849,
        "../../../component-library": 4453,
        "../../../ui/popover": 4699,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var r = d(e("react")),
                  a = d(e("prop-types")),
                  o = e("../../../../hooks/useI18nContext"),
                  i = d(e("../../../ui/popover")),
                  s = e("../../../component-library"),
                  l = e("../../../../helpers/constants/design-system"),
                  u = e("../../../../hooks/useScrollRequired"),
                  c = e("../../../../../shared/constants/terms");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p({ onAccepted: e, onCanceled: t }) {
                  const n = (0, o.useI18nContext)(),
                    { isScrollable: a, isScrolledToBottom: d, scrollToBottom: p, ref: f, onScroll: m } = (0, u.useScrollRequired)();
                  return r.default.createElement(
                    i.default,
                    { className: "snap-privacy-warning" },
                    r.default.createElement(
                      s.Box,
                      null,
                      r.default.createElement(
                        s.Box,
                        { className: "snap-privacy-warning__header", paddingLeft: 4, paddingRight: 4 },
                        r.default.createElement(
                          s.Box,
                          {
                            marginTop: 4,
                            className: "snap-privacy-warning__header__info-icon",
                            display: l.Display.Flex,
                            justifyContent: l.JustifyContent.center,
                            alignItems: l.AlignItems.center
                          },
                          r.default.createElement(s.AvatarIcon, {
                            iconName: s.IconName.Info,
                            color: l.IconColor.infoDefault,
                            backgroundColor: l.BackgroundColor.primaryMuted,
                            size: s.AvatarIconSize.Md
                          })
                        ),
                        r.default.createElement(
                          s.Box,
                          {
                            className: "snap-privacy-warning__header__title",
                            marginTop: 4,
                            marginBottom: 4,
                            display: l.Display.Flex,
                            justifyContent: l.JustifyContent.center,
                            alignItems: l.AlignItems.center
                          },
                          r.default.createElement(
                            s.Text,
                            { variant: l.TextVariant.headingMd, fontWeight: l.FontWeight.Bold },
                            n("thirdPartySoftware")
                          )
                        )
                      ),
                      r.default.createElement(
                        s.Box,
                        { paddingLeft: 4, paddingRight: 4, className: "snap-privacy-warning__content", ref: f, onScroll: m },
                        r.default.createElement(
                          s.Box,
                          { className: "snap-privacy-warning__message" },
                          r.default.createElement(
                            s.Text,
                            { variant: l.TextVariant.bodyMd },
                            n("snapsPrivacyWarningFirstMessage", [
                              r.default.createElement(
                                s.ButtonLink,
                                {
                                  key: "privacyNoticeTermsOfUseLink",
                                  size: s.ButtonLinkSize.Inherit,
                                  href: c.TERMS_OF_USE_LINK,
                                  target: "_blank"
                                },
                                " ",
                                n("snapsTermsOfUse"),
                                " "
                              )
                            ])
                          ),
                          r.default.createElement(
                            s.Text,
                            { variant: l.TextVariant.bodyMd, paddingTop: 6 },
                            n("snapsPrivacyWarningSecondMessage")
                          ),
                          r.default.createElement(
                            s.Text,
                            { variant: l.TextVariant.bodyMd, fontWeight: l.FontWeight.Bold, paddingTop: 6 },
                            n("snapsPrivacyWarningThirdMessage")
                          )
                        ),
                        a && !d
                          ? r.default.createElement(s.AvatarIcon, {
                              className: "snap-privacy-warning__content__scroll-button",
                              "data-testid": "snap-privacy-warning-scroll",
                              iconName: s.IconName.Arrow2Down,
                              backgroundColor: l.BackgroundColor.infoDefault,
                              color: l.IconColor.primaryInverse,
                              onClick: p,
                              style: { cursor: "pointer" }
                            })
                          : null
                      ),
                      r.default.createElement(
                        s.Box,
                        { paddingLeft: 4, paddingRight: 4, paddingBottom: 4, className: "snap-privacy-warning__footer" },
                        r.default.createElement(
                          s.Box,
                          { className: "snap-privacy-warning__footer", marginTop: 6, display: l.Display.Flex },
                          r.default.createElement(
                            s.Button,
                            {
                              variant: s.BUTTON_VARIANT.SECONDARY,
                              size: s.BUTTON_SIZES.LG,
                              width: l.BlockSize.Full,
                              className: "snap-privacy-warning__cancel-button",
                              onClick: t,
                              marginRight: 2
                            },
                            n("cancel")
                          ),
                          r.default.createElement(
                            s.Button,
                            {
                              variant: s.BUTTON_VARIANT.PRIMARY,
                              size: s.BUTTON_SIZES.LG,
                              width: l.BlockSize.Full,
                              className: "snap-privacy-warning__ok-button",
                              onClick: e,
                              marginLeft: 2,
                              disabled: !d
                            },
                            n("accept")
                          )
                        )
                      )
                    )
                  );
                }
                p.propTypes = { onAccepted: a.default.func.isRequired, onCanceled: a.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-privacy-warning/snap-privacy-warning.js" }
    ],
    [
      4312,
      { "./snap-remove-warning": 4313 },
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
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./snap-remove-warning")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-remove-warning/index.js" }
    ],
    [
      4313,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = u);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../../../hooks/useI18nContext"),
                  i = e("../../../component-library"),
                  s = e("../../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u({ isOpen: e, onCancel: t, onSubmit: n, snapName: a }) {
                  const l = (0, o.useI18nContext)();
                  return r.default.createElement(
                    i.Modal,
                    { isOpen: e, onClose: t },
                    r.default.createElement(i.ModalOverlay, null),
                    r.default.createElement(
                      i.ModalContent,
                      { modalDialogProps: { display: s.Display.Flex, flexDirection: s.FlexDirection.Column, gap: 4 } },
                      r.default.createElement(i.ModalHeader, { onClose: t }, l("pleaseConfirm")),
                      r.default.createElement(i.Text, null, l("removeSnapConfirmation", [a])),
                      r.default.createElement(
                        i.Box,
                        { width: s.BlockSize.Full, display: s.Display.Flex, gap: 4 },
                        r.default.createElement(
                          i.Button,
                          { block: !0, variant: i.BUTTON_VARIANT.SECONDARY, size: i.BUTTON_SIZES.LG, onClick: t },
                          l("cancel")
                        ),
                        r.default.createElement(
                          i.Button,
                          { block: !0, size: i.BUTTON_SIZES.LG, id: "popoverRemoveSnapButton", danger: !0, onClick: n },
                          l("removeSnap")
                        )
                      )
                    )
                  );
                }
                u.propTypes = { onCancel: a.default.func, onSubmit: a.default.func, snapName: a.default.string, isOpen: a.default.bool };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-remove-warning/snap-remove-warning.js" }
    ],
    [
      4314,
      { "./snap-ui-image": 4315 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 });
                var r = e("./snap-ui-image");
                Object.keys(r).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in n && n[e] === r[e]) ||
                      Object.defineProperty(n, e, {
                        enumerable: !0,
                        get: function () {
                          return r[e];
                        }
                      }));
                });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-ui-image/index.ts" }
    ],
    [
      4315,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SnapUIImage = void 0);
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r };
                n.SnapUIImage = ({ value: e }) => {
                  const t = `data:image/svg+xml;utf8,${encodeURIComponent(e)}`;
                  return a.default.createElement("img", { src: t });
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-ui-image/snap-ui-image.tsx" }
    ],
    [
      4316,
      { "./snap-ui-markdown": 4317 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SnapUIMarkdown", {
                    enumerable: !0,
                    get: function () {
                      return r.SnapUIMarkdown;
                    }
                  });
                var r = e("./snap-ui-markdown");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-ui-markdown/index.js" }
    ],
    [
      4317,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../component-library": 4453,
        "../snap-link-warning": 4304,
        "prop-types": 3450,
        react: 3690,
        "react-markdown": 3632
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SnapUIMarkdown = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = u(e("prop-types")),
                  o = u(e("react-markdown")),
                  i = e("../../../../helpers/constants/design-system"),
                  s = e("../../../component-library"),
                  l = u(e("../snap-link-warning"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                const p = (e) =>
                    r.default.createElement(
                      s.Text,
                      d({}, e, {
                        variant: i.TextVariant.bodyMd,
                        className: "snap-ui-markdown__text",
                        overflowWrap: i.OverflowWrap.BreakWord,
                        color: i.TextColor.inherit
                      })
                    ),
                  f = ({ onClick: e, children: t, ...n }) =>
                    r.default.createElement(
                      s.ButtonLink,
                      d({}, n, {
                        onClick: e,
                        externalLink: !0,
                        size: s.ButtonLinkSize.Inherit,
                        endIconName: s.IconName.Export,
                        className: "snap-ui-markdown__link"
                      }),
                      t
                    ),
                  m = ({ children: e, markdown: t }) => {
                    const [n, a] = (0, r.useState)(undefined);
                    if (!1 === t) return r.default.createElement(p, null, e);
                    return r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(l.default, {
                        isOpen: Boolean(n),
                        onClose: () => {
                          a(undefined);
                        },
                        url: n
                      }),
                      r.default.createElement(
                        o.default,
                        {
                          allowedElements: ["p", "strong", "em", "a"],
                          components: {
                            p: p,
                            a: ({ children: e, href: t }) =>
                              r.default.createElement(
                                f,
                                {
                                  onClick: () => {
                                    a(t);
                                  }
                                },
                                e ?? t
                              )
                          }
                        },
                        e
                      )
                    );
                  };
                (n.SnapUIMarkdown = m),
                  (m.propTypes = { children: a.default.string, markdown: a.default.bool }),
                  (f.propTypes = { onClick: a.default.func, children: a.default.node });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-ui-markdown/snap-ui-markdown.js" }
    ],
    [
      4318,
      { "./snap-ui-renderer": 4319 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SnapUIRenderer", {
                    enumerable: !0,
                    get: function () {
                      return r.SnapUIRenderer;
                    }
                  }),
                  Object.defineProperty(n, "mapToTemplate", {
                    enumerable: !0,
                    get: function () {
                      return r.mapToTemplate;
                    }
                  });
                var r = e("./snap-ui-renderer");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-ui-renderer/index.js" }
    ]
  ],
  [],
  {}
);
