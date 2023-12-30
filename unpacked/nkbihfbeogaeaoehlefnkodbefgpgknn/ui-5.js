LavaPack.loadBundle(
  [
    [
      4535,
      {
        "../../../helpers/constants/connected-sites": 4770,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../../ui/tooltip": 4736,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ConnectedSiteMenu = void 0);
                var o = f(e("react")),
                  r = f(e("prop-types")),
                  a = f(e("classnames")),
                  i = e("react-redux"),
                  l = e("../../../helpers/constants/connected-sites"),
                  s = e("../../../helpers/constants/design-system"),
                  c = e("../../component-library"),
                  u = e("../../../selectors"),
                  d = f(e("../../ui/tooltip")),
                  p = e("../../../hooks/useI18nContext");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const m = ({ className: e, globalMenuColor: t, status: n, text: r, onClick: f }) => {
                  const m = (0, p.useI18nContext)(),
                    h = (0, i.useSelector)(u.getSelectedIdentity),
                    g = n === l.STATUS_CONNECTED_TO_ANOTHER_ACCOUNT || n === l.STATUS_CONNECTED_TO_SNAP;
                  return o.default.createElement(
                    c.Box,
                    {
                      className: (0, a.default)("multichain-connected-site-menu", e),
                      "data-testid": "connection-menu",
                      as: "button",
                      onClick: f,
                      display: s.Display.Flex,
                      alignItems: s.AlignItems.center,
                      justifyContent: s.JustifyContent.center,
                      backgroundColor: s.BackgroundColor.backgroundDefault
                    },
                    o.default.createElement(
                      d.default,
                      {
                        title: n === l.STATUS_NOT_CONNECTED ? m("statusNotConnectedAccount") : `${null == h ? void 0 : h.name} ${r}`,
                        "data-testid": "multichain-connected-site-menu__tooltip",
                        position: "bottom"
                      },
                      o.default.createElement(
                        c.BadgeWrapper,
                        {
                          positionObj: g ? { bottom: 4, right: -1, zIndex: 1 } : { bottom: 2, right: -4, zIndex: 1 },
                          badge: o.default.createElement(c.Box, {
                            backgroundColor: t,
                            className: (0, a.default)("multichain-connected-site-menu__badge", { "not-connected": g }),
                            borderRadius: s.BorderRadius.full,
                            borderColor: g ? s.BorderColor.successDefault : s.BackgroundColor.backgroundDefault,
                            borderWidth: g ? 2 : 3
                          })
                        },
                        o.default.createElement(c.Icon, { name: c.IconName.Global, size: c.IconSize.Sm, color: s.IconColor.iconDefault })
                      )
                    )
                  );
                };
                (n.ConnectedSiteMenu = m),
                  (m.propTypes = {
                    className: r.default.string,
                    globalMenuColor: r.default.string.isRequired,
                    status: r.default.string.isRequired,
                    text: r.default.string,
                    onClick: r.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/connected-site-menu/connected-site-menu.js" }
    ],
    [
      4536,
      { "./connected-site-menu": 4535 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ConnectedSiteMenu", {
                    enumerable: !0,
                    get: function () {
                      return o.ConnectedSiteMenu;
                    }
                  });
                var o = e("./connected-site-menu");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/connected-site-menu/index.js" }
    ],
    [
      4537,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/history/history": 4760,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/accounts": 4791,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.CreateAccount = void 0);
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = (o = e("prop-types")) && o.__esModule ? o : { default: o },
                  i = e("react-redux"),
                  l = e("react-router-dom"),
                  s = e("../../component-library"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../helpers/utils/accounts"),
                  d = e("../../../selectors"),
                  p = e("../../../store/actions"),
                  f = e("../../../ducks/history/history"),
                  m = e("../../../../shared/constants/metametrics"),
                  h = e("../../../contexts/metametrics"),
                  g = e("../../../helpers/constants/design-system");
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (y = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const b = ({ onActionComplete: e }) => {
                  const t = (0, c.useI18nContext)(),
                    n = (0, i.useDispatch)(),
                    o = (0, l.useHistory)(),
                    a = (0, r.useContext)(h.MetaMetricsContext),
                    y = (0, i.useSelector)(d.getMetaMaskAccountsOrdered),
                    b = (0, i.useSelector)(d.getMetaMaskIdentities),
                    v = (0, i.useSelector)(f.getMostRecentOverviewPage),
                    k = t("newAccountNumberName", [Object.keys(b).length + 1]),
                    [_, C] = (0, r.useState)(""),
                    w = _.trim(),
                    { isValidAccountName: T, errorMessage: x } = (0, u.getAccountNameErrorMessage)(y, { t: t }, w || k, k),
                    E = async (t) => {
                      t.preventDefault();
                      try {
                        await (async (e) => {
                          const t = await n((0, p.addNewAccount)());
                          e && n((0, p.setAccountLabel)(t, e));
                        })(w || k),
                          e(!0),
                          a({
                            category: m.MetaMetricsEventCategory.Accounts,
                            event: m.MetaMetricsEventName.AccountAdded,
                            properties: { account_type: m.MetaMetricsEventAccountType.Default, location: "Home" }
                          }),
                          o.push(v);
                      } catch (e) {
                        a({
                          category: m.MetaMetricsEventCategory.Accounts,
                          event: m.MetaMetricsEventName.AccountAddFailed,
                          properties: { account_type: m.MetaMetricsEventAccountType.Default, error: e.message }
                        });
                      }
                    };
                  return r.default.createElement(
                    s.Box,
                    { as: "form", onSubmit: E },
                    r.default.createElement(s.FormTextField, {
                      autoFocus: !0,
                      label: t("accountName"),
                      placeholder: k,
                      onChange: (e) => C(e.target.value),
                      helpText: x,
                      error: !T,
                      onKeyPress: (e) => {
                        "Enter" === e.key && E(e);
                      }
                    }),
                    r.default.createElement(
                      s.Box,
                      { display: g.Display.Flex, marginTop: 6, gap: 2 },
                      r.default.createElement(s.ButtonSecondary, { onClick: () => e(), block: !0 }, t("cancel")),
                      r.default.createElement(s.ButtonPrimary, { type: "submit", disabled: !T, block: !0 }, t("create"))
                    )
                  );
                };
                (n.CreateAccount = b), (b.propTypes = { onActionComplete: a.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/create-account/create-account.js" }
    ],
    [
      4538,
      { "./create-account": 4537 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "CreateAccount", {
                    enumerable: !0,
                    get: function () {
                      return o.CreateAccount;
                    }
                  });
                var o = e("./create-account");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/create-account/index.js" }
    ],
    [
      4539,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.DetectedTokensBanner = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = e("react-redux"),
                  a = p(e("prop-types")),
                  i = p(e("classnames")),
                  l = e("../../../hooks/useI18nContext"),
                  s = e("../../../selectors"),
                  c = e("../../../contexts/metametrics"),
                  u = e("../../../../shared/constants/metametrics"),
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
                function m() {
                  return (
                    (m = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    m.apply(this, arguments)
                  );
                }
                const h = ({ className: e, actionButtonOnClick: t, ...n }) => {
                  const a = (0, l.useI18nContext)(),
                    p = (0, o.useContext)(c.MetaMetricsContext),
                    f = (0, r.useSelector)(s.getDetectedTokensInCurrentNetwork),
                    h = f.map(({ address: e, symbol: t }) => `${t} - ${e}`),
                    g = (0, r.useSelector)(s.getCurrentChainId);
                  return o.default.createElement(
                    d.BannerAlert,
                    m(
                      {
                        className: (0, i.default)("multichain-detected-token-banner", e),
                        actionButtonLabel: a("importTokensCamelCase"),
                        actionButtonOnClick: () => {
                          t(),
                            p({
                              event: u.MetaMetricsEventName.TokenImportClicked,
                              category: u.MetaMetricsEventCategory.Wallet,
                              properties: { source_connection_method: u.MetaMetricsTokenEventSource.Detected, tokens: h, chain_id: g }
                            });
                        },
                        "data-testid": "detected-token-banner"
                      },
                      n
                    ),
                    1 === f.length ? a("numberOfNewTokensDetectedSingular") : a("numberOfNewTokensDetectedPlural", [f.length])
                  );
                };
                (n.DetectedTokensBanner = h),
                  (h.propTypes = { actionButtonOnClick: a.default.func.isRequired, className: a.default.string });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/detected-token-banner/detected-token-banner.js" }
    ],
    [
      4540,
      { "./detected-token-banner": 4539 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "DetectedTokensBanner", {
                    enumerable: !0,
                    get: function () {
                      return o.DetectedTokensBanner;
                    }
                  });
                var o = e("./detected-token-banner");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/detected-token-banner/index.js" }
    ],
    [
      4541,
      {
        "..": 4555,
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/lib/ui-utils": 3983,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/menu": 4681,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.GlobalMenu = void 0);
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = _(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = (o = e("prop-types")) && o.__esModule ? o : { default: o },
                  i = e("react-router-dom"),
                  l = e("react-redux"),
                  s = e("../../../helpers/constants/routes"),
                  c = e("../../../store/actions"),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../component-library"),
                  p = e("../../ui/menu"),
                  f = e("../../../../app/scripts/lib/util"),
                  m = e("../../../../shared/constants/app"),
                  h = e("../../../../shared/lib/ui-utils"),
                  g = e("../../../contexts/metametrics"),
                  y = e("../../../../shared/constants/metametrics"),
                  b = e("../../../selectors"),
                  v = e("../../../helpers/constants/design-system"),
                  k = e("..");
                function _(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (_ = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const C = "Global Menu",
                  w = ({ closeMenu: e, anchorElement: t }) => {
                    const n = (0, u.useI18nContext)(),
                      o = (0, l.useDispatch)(),
                      a = (0, r.useContext)(g.MetaMetricsContext),
                      _ = (0, i.useHistory)(),
                      w = (0, l.useSelector)(b.getSelectedAddress),
                      T = (0, l.useSelector)(b.getUnapprovedTransactions),
                      x = (0, l.useSelector)(b.getNotifySnaps),
                      E = Object.keys(T).length > 0,
                      O = (0, l.useSelector)(b.getUnreadNotificationsCount),
                      M = (0, l.useSelector)(b.getAnySnapUpdateAvailable);
                    let j = n("support"),
                      P = h.SUPPORT_LINK;
                    return r.default.createElement(
                      p.Menu,
                      { anchorElement: t, onHide: e },
                      r.default.createElement(k.AccountDetailsMenuItem, { metricsLocation: C, closeMenu: e, address: w }),
                      r.default.createElement(k.ViewExplorerMenuItem, { metricsLocation: C, closeMenu: e, address: w }),
                      r.default.createElement(d.Box, {
                        borderColor: v.BorderColor.borderMuted,
                        width: v.BlockSize.Full,
                        style: { height: "1px", borderBottomWidth: 0 }
                      }),
                      r.default.createElement(
                        p.MenuItem,
                        {
                          iconName: d.IconName.Connect,
                          disabled: E,
                          onClick: () => {
                            _.push(s.CONNECTED_ROUTE),
                              a({
                                event: y.MetaMetricsEventName.NavConnectedSitesOpened,
                                category: y.MetaMetricsEventCategory.Navigation,
                                properties: { location: C }
                              }),
                              e();
                          },
                          "data-testid": "global-menu-connected-sites"
                        },
                        n("connectedSites")
                      ),
                      (0, f.getEnvironmentType)() === m.ENVIRONMENT_TYPE_FULLSCREEN
                        ? null
                        : r.default.createElement(
                            p.MenuItem,
                            {
                              iconName: d.IconName.Expand,
                              onClick: () => {
                                global.platform.openExtensionInBrowser(),
                                  a({
                                    event: y.MetaMetricsEventName.AppWindowExpanded,
                                    category: y.MetaMetricsEventCategory.Navigation,
                                    properties: { location: C }
                                  }),
                                  e();
                              },
                              "data-testid": "global-menu-expand"
                            },
                            n("expandView")
                          ),
                      x.length
                        ? r.default.createElement(
                            r.default.Fragment,
                            null,
                            r.default.createElement(
                              p.MenuItem,
                              {
                                iconName: d.IconName.Notification,
                                onClick: () => {
                                  e(), _.push(s.NOTIFICATIONS_ROUTE);
                                }
                              },
                              n("notifications"),
                              O > 0 &&
                                r.default.createElement(
                                  d.Text,
                                  {
                                    as: "span",
                                    display: v.Display.InlineBlock,
                                    justifyContent: v.JustifyContent.center,
                                    alignItems: v.AlignItems.center,
                                    backgroundColor: v.BackgroundColor.primaryDefault,
                                    color: v.TextColor.primaryInverse,
                                    padding: [0, 1, 0, 1],
                                    variant: v.TextVariant.bodyXs,
                                    textAlign: v.TextAlign.Center,
                                    "data-testid": "global-menu-notification-count",
                                    style: { borderRadius: "16px", minWidth: "24px" },
                                    marginInlineStart: 2
                                  },
                                  O > 99 ? "99+" : O
                                )
                            )
                          )
                        : null,
                      r.default.createElement(
                        p.MenuItem,
                        {
                          iconName: d.IconName.Snaps,
                          onClick: () => {
                            _.push(s.SNAPS_ROUTE), e();
                          },
                          showInfoDot: M
                        },
                        n("snaps")
                      ),
                      r.default.createElement(
                        p.MenuItem,
                        {
                          iconName: d.IconName.MessageQuestion,
                          onClick: () => {
                            global.platform.openTab({ url: P }),
                              a(
                                {
                                  category: y.MetaMetricsEventCategory.Home,
                                  event: y.MetaMetricsEventName.SupportLinkClicked,
                                  properties: { url: P, location: C }
                                },
                                { contextPropsIntoEventProperties: [y.MetaMetricsContextProp.PageTitle] }
                              ),
                              e();
                          },
                          "data-testid": "global-menu-support"
                        },
                        j
                      ),
                      r.default.createElement(
                        p.MenuItem,
                        {
                          iconName: d.IconName.Setting,
                          disabled: E,
                          onClick: () => {
                            _.push(s.SETTINGS_ROUTE),
                              a({
                                category: y.MetaMetricsEventCategory.Navigation,
                                event: y.MetaMetricsEventName.NavSettingsOpened,
                                properties: { location: C }
                              }),
                              e();
                          },
                          "data-testid": "global-menu-settings"
                        },
                        n("settings")
                      ),
                      r.default.createElement(
                        p.MenuItem,
                        {
                          iconName: d.IconName.Lock,
                          onClick: () => {
                            o((0, c.lockMetamask)()),
                              _.push(s.DEFAULT_ROUTE),
                              a({
                                category: y.MetaMetricsEventCategory.Navigation,
                                event: y.MetaMetricsEventName.AppLocked,
                                properties: { location: C }
                              }),
                              e();
                          },
                          "data-testid": "global-menu-lock"
                        },
                        n("lockMetaMask")
                      )
                    );
                  };
                (n.GlobalMenu = w),
                  (w.propTypes = { anchorElement: a.default.instanceOf(window.Element), closeMenu: a.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/global-menu/global-menu.js" }
    ],
    [
      4542,
      { "./global-menu": 4541 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "GlobalMenu", {
                    enumerable: !0,
                    get: function () {
                      return o.GlobalMenu;
                    }
                  });
                var o = e("./global-menu");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/global-menu/index.js" }
    ],
    [
      4543,
      {
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var o = d(e("prop-types")),
                  r = d(e("react")),
                  a = e("react-redux"),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = e("../../../hooks/useI18nContext"),
                  c = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("../../../store/actions"));
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p({ importAccountFunc: e, isPrimaryDisabled: t, onActionComplete: n }) {
                  const o = (0, s.useI18nContext)(),
                    u = (0, a.useDispatch)();
                  return r.default.createElement(
                    i.Box,
                    { display: l.Display.Flex, gap: 4 },
                    r.default.createElement(
                      i.ButtonSecondary,
                      {
                        onClick: () => {
                          u(c.hideWarning()), n();
                        },
                        size: i.ButtonSecondarySize.Lg,
                        block: !0
                      },
                      o("cancel")
                    ),
                    r.default.createElement(
                      i.ButtonPrimary,
                      {
                        onClick: async () => {
                          try {
                            (await e()) && n(!0);
                          } catch (e) {}
                        },
                        disabled: t,
                        size: i.ButtonSecondarySize.Lg,
                        "data-testid": "import-account-confirm-button",
                        block: !0
                      },
                      o("import")
                    )
                  );
                }
                p.propTypes = {
                  importAccountFunc: o.default.func.isRequired,
                  isPrimaryDisabled: o.default.bool.isRequired,
                  onActionComplete: o.default.func.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-account/bottom-buttons.js" }
    ],
    [
      4544,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/zendesk-url": 4781,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/dropdown": 4636,
        "./json": 4546,
        "./private-key": 4547,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ImportAccount = void 0);
                var o = b(e("react")),
                  r = g(e("prop-types")),
                  a = e("react-redux"),
                  i = e("../../../../shared/constants/metametrics"),
                  l = e("../../component-library"),
                  s = g(e("../../ui/dropdown")),
                  c = e("../../../contexts/metametrics"),
                  u = e("../../../helpers/constants/design-system"),
                  d = g(e("../../../helpers/constants/zendesk-url")),
                  p = e("../../../hooks/useI18nContext"),
                  f = b(e("../../../store/actions")),
                  m = g(e("./json")),
                  h = g(e("./private-key"));
                function g(e) {
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
                function b(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = y(t);
                  if (n && n.has(e)) return n.get(e);
                  var o = { __proto__: null },
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                      var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                      i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                    }
                  return (o.default = e), n && n.set(e, o), o;
                }
                const v = ({ onActionComplete: e }) => {
                  const t = (0, p.useI18nContext)(),
                    n = (0, a.useDispatch)(),
                    r = (0, o.useContext)(c.MetaMetricsContext),
                    g = [t("privateKey"), t("jsonFile")],
                    [y, b] = (0, o.useState)(g[0]);
                  async function v(r, a) {
                    const i = (function (e) {
                      if ("json" === e)
                        return o.default.createElement(
                          o.default.Fragment,
                          null,
                          o.default.createElement(
                            l.Text,
                            { width: u.BlockSize.ThreeFourths, fontWeight: u.FontWeight.Bold },
                            t("importAccountJsonLoading1")
                          ),
                          o.default.createElement(
                            l.Text,
                            { width: u.BlockSize.ThreeFourths, fontWeight: u.FontWeight.Bold },
                            t("importAccountJsonLoading2")
                          )
                        );
                      return "";
                    })(r);
                    try {
                      const { selectedAddress: o } = await n(f.importNewAccount(r, a, i));
                      if (!o) return n(f.displayWarning(t("importAccountError"))), !1;
                      k(r, !0), n(f.hideWarning()), e(!0);
                    } catch (e) {
                      return (
                        k(r, e.message),
                        (s = e.message) && !s.startsWith("t(") ? n(f.displayWarning(s)) : n(f.displayWarning(t(s.slice(3, -2)))),
                        !1
                      );
                    }
                    var s;
                    return !0;
                  }
                  function k(e, t) {
                    const n =
                        "Private Key" === e ? i.MetaMetricsEventAccountImportType.PrivateKey : i.MetaMetricsEventAccountImportType.Json,
                      o = t ? i.MetaMetricsEventName.AccountAdded : i.MetaMetricsEventName.AccountAddFailed;
                    r({
                      category: i.MetaMetricsEventCategory.Accounts,
                      event: o,
                      properties: { account_type: i.MetaMetricsEventAccountType.Imported, account_import_type: n }
                    });
                  }
                  return o.default.createElement(
                    o.default.Fragment,
                    null,
                    o.default.createElement(
                      l.Text,
                      { variant: u.TextVariant.bodySm, marginTop: 2 },
                      t("importAccountMsg"),
                      " ",
                      o.default.createElement(
                        l.ButtonLink,
                        { size: u.Size.inherit, href: d.default.IMPORTED_ACCOUNTS, target: "_blank", rel: "noopener noreferrer" },
                        t("here")
                      )
                    ),
                    o.default.createElement(
                      l.Box,
                      { paddingTop: 4, paddingBottom: 8 },
                      o.default.createElement(
                        l.Label,
                        { width: u.BlockSize.Full, marginBottom: 4, justifyContent: u.JustifyContent.spaceBetween },
                        t("selectType"),
                        o.default.createElement(s.default, {
                          options: g.map((e) => ({ value: e })),
                          selectedOption: y,
                          onChange: (e) => {
                            n(f.hideWarning()), b(e);
                          }
                        })
                      ),
                      y === g[0]
                        ? o.default.createElement(h.default, { importAccountFunc: v, onActionComplete: e })
                        : o.default.createElement(m.default, { importAccountFunc: v, onActionComplete: e })
                    )
                  );
                };
                (n.ImportAccount = v), (v.propTypes = { onActionComplete: r.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-account/import-account.js" }
    ],
    [
      4545,
      { "./import-account": 4544 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ImportAccount", {
                    enumerable: !0,
                    get: function () {
                      return o.ImportAccount;
                    }
                  });
                var o = e("./import-account");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-account/index.js" }
    ],
    [
      4546,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/zendesk-url": 4781,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "./bottom-buttons": 4543,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-simple-file-input": 3685
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = h);
                var o = m(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = e("react-redux"),
                  i = m(e("react-simple-file-input")),
                  l = e("../../component-library"),
                  s = e("../../../helpers/constants/design-system"),
                  c = m(e("../../../helpers/constants/zendesk-url")),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../../store/actions"),
                  p = m(e("./bottom-buttons"));
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (f = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h({ importAccountFunc: e, onActionComplete: t }) {
                  const n = (0, u.useI18nContext)(),
                    o = (0, a.useSelector)((e) => e.appState.warning),
                    [f, m] = (0, r.useState)(""),
                    [h, g] = (0, r.useState)(""),
                    y = "" === h;
                  function b() {
                    y ? (0, d.displayWarning)(n("needImportFile")) : e("json", [h, f]);
                  }
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      l.Text,
                      { variant: s.TextVariant.bodyMd, textAlign: s.TextAlign.Center },
                      n("usedByClients"),
                      r.default.createElement(
                        l.ButtonLink,
                        { size: s.Size.inherit, href: c.default.IMPORTED_ACCOUNTS, target: "_blank", rel: "noopener noreferrer" },
                        n("fileImportFail")
                      )
                    ),
                    r.default.createElement(i.default, {
                      id: "file-input",
                      "data-testid": "file-input",
                      readAs: "text",
                      onLoad: (e) => g(e.target.result),
                      style: { padding: "20px 0px 12px 15%", fontSize: "16px", display: "flex", justifyContent: "center", width: "100%" }
                    }),
                    r.default.createElement(l.FormTextField, {
                      id: "json-password-box",
                      size: l.TEXT_FIELD_SIZES.LARGE,
                      autoFocus: !0,
                      type: l.TEXT_FIELD_TYPES.PASSWORD,
                      helpText: o,
                      error: !0,
                      placeholder: n("enterOptionalPassword"),
                      value: f,
                      onChange: (e) => {
                        m(e.target.value);
                      },
                      inputProps: {
                        onKeyPress: function (e) {
                          y || "Enter" !== e.key || (e.preventDefault(), b());
                        }
                      },
                      marginBottom: 4
                    }),
                    r.default.createElement(p.default, { importAccountFunc: b, isPrimaryDisabled: y, onActionComplete: t })
                  );
                }
                h.propTypes = { importAccountFunc: o.default.func.isRequired, onActionComplete: o.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-account/json.js" }
    ],
    [
      4547,
      {
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "./bottom-buttons": 4543,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = d);
                var o = u(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = e("react-redux"),
                  i = e("../../component-library"),
                  l = e("../../../hooks/useI18nContext"),
                  s = u(e("./bottom-buttons"));
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d({ importAccountFunc: e, onActionComplete: t }) {
                  const n = (0, l.useI18nContext)(),
                    [o, c] = (0, r.useState)(""),
                    u = (0, a.useSelector)((e) => e.appState.warning);
                  function d() {
                    e("privateKey", [o]);
                  }
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(i.FormTextField, {
                      id: "private-key-box",
                      size: i.TEXT_FIELD_SIZES.LARGE,
                      autoFocus: !0,
                      type: i.TEXT_FIELD_TYPES.PASSWORD,
                      helpText: u,
                      error: !0,
                      label: n("pastePrivateKey"),
                      value: o,
                      onChange: (e) => c(e.target.value),
                      inputProps: {
                        onKeyPress: function (e) {
                          "" !== o && "Enter" === e.key && (e.preventDefault(), d());
                        }
                      },
                      marginBottom: 4
                    }),
                    r.default.createElement(s.default, { importAccountFunc: d, isPrimaryDisabled: "" === o, onActionComplete: t })
                  );
                }
                d.propTypes = { importAccountFunc: o.default.func.isRequired, onActionComplete: o.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-account/private-key.js" }
    ],
    [
      4548,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/transaction": 3974,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../hooks/useNftsCollections": 4842,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../app/nfts-detection-notice-import-nfts/nfts-detection-notice-import-nfts": 4218,
        "../../component-library": 4453,
        "../../ui/tooltip": 4736,
        "@metamask/controller-utils": 1056,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ImportNftsModal = void 0);
                var o = e("@metamask/controller-utils"),
                  r = w(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = C(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  i = e("react-redux"),
                  l = e("react-router-dom"),
                  s = e("../../../../shared/constants/metametrics"),
                  c = e("../../../../shared/constants/transaction"),
                  u = e("../../../contexts/metametrics"),
                  d = e("../../../ducks/metamask/metamask"),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../helpers/constants/routes"),
                  m = e("../../../hooks/useI18nContext"),
                  h = e("../../../selectors"),
                  g = e("../../../store/actions"),
                  y = w(e("../../app/nfts-detection-notice-import-nfts/nfts-detection-notice-import-nfts")),
                  b = e("../../component-library"),
                  v = w(e("../../ui/tooltip")),
                  k = e("../../../hooks/useNftsCollections"),
                  _ = e("../../../helpers/utils/util");
                function C(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (C = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function w(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const T = ({ onClose: e }) => {
                  const t = (0, m.useI18nContext)(),
                    n = (0, l.useHistory)(),
                    r = (0, i.useDispatch)(),
                    C = (0, i.useSelector)(h.getOpenSeaEnabled),
                    w = (0, i.useSelector)(h.getIsMainnet),
                    T = (0, i.useSelector)(d.getNftsDropdownState),
                    x = (0, i.useSelector)(h.getSelectedAddress),
                    E = (0, i.useSelector)(h.getCurrentChainId),
                    { tokenAddress: O, tokenId: M, ignoreErc20Token: j } = (0, i.useSelector)((e) => e.appState.importNftsModal),
                    P = (0, k.useNftsCollections)(),
                    [N, I] = (0, a.useState)(O ?? ""),
                    [S, A] = (0, a.useState)(M ?? ""),
                    [D, B] = (0, a.useState)(!0),
                    [$, R] = (0, a.useState)(!1),
                    L = (0, a.useContext)(u.MetaMetricsContext),
                    [F, V] = (0, a.useState)(null),
                    [z, W] = (0, a.useState)(null);
                  return a.default.createElement(
                    b.Modal,
                    {
                      isOpen: !0,
                      onClose: () => {
                        e();
                      },
                      className: "import-nfts-modal"
                    },
                    a.default.createElement(b.ModalOverlay, null),
                    a.default.createElement(
                      b.ModalContent,
                      null,
                      a.default.createElement(
                        b.ModalHeader,
                        {
                          onClose: () => {
                            e();
                          }
                        },
                        t("importNFT")
                      ),
                      a.default.createElement(
                        b.Box,
                        null,
                        w && !C
                          ? a.default.createElement(b.Box, { marginTop: 6 }, a.default.createElement(y.default, { onActionButtonClick: e }))
                          : null,
                        $ &&
                          a.default.createElement(
                            b.Box,
                            { marginTop: 6 },
                            a.default.createElement(
                              b.BannerAlert,
                              {
                                severity: p.Severity.Danger,
                                onClose: () => R(!1),
                                closeButtonProps: { "data-testid": "add-nft-error-close" }
                              },
                              t("nftAddFailedMessage")
                            )
                          ),
                        a.default.createElement(
                          b.Box,
                          { display: p.Display.Flex, flexDirection: p.FlexDirection.Column, gap: 6, marginTop: 6, marginBottom: 6 },
                          a.default.createElement(
                            b.Box,
                            null,
                            a.default.createElement(
                              b.Box,
                              { display: p.Display.Flex, justifyContent: p.JustifyContent.spaceBetween, alignItems: p.AlignItems.flexEnd },
                              a.default.createElement(
                                b.Box,
                                { display: p.Display.Flex, alignItems: p.AlignItems.center },
                                a.default.createElement(b.Label, { htmlFor: "address" }, t("address")),
                                a.default.createElement(
                                  v.default,
                                  { title: t("importNFTAddressToolTip"), position: "bottom" },
                                  a.default.createElement(b.Icon, {
                                    name: b.IconName.Info,
                                    size: b.IconSize.Sm,
                                    marginLeft: 1,
                                    color: p.IconColor.iconAlternative
                                  })
                                )
                              )
                            ),
                            a.default.createElement(b.FormTextField, {
                              autoFocus: !0,
                              dataTestId: "address",
                              id: "address",
                              placeholder: "0x...",
                              value: N,
                              onChange: (e) => {
                                var n;
                                (n = e.target.value),
                                  V(null),
                                  n && !(0, o.isValidHexAddress)(n) && V(t("invalidAddress")),
                                  B(!(0, o.isValidHexAddress)(n) || !S),
                                  I(n),
                                  R(!1);
                              },
                              helpText: F,
                              error: Boolean(F)
                            })
                          ),
                          a.default.createElement(
                            b.Box,
                            null,
                            a.default.createElement(
                              b.Box,
                              { display: p.Display.Flex, justifyContent: p.JustifyContent.spaceBetween, alignItems: p.AlignItems.flexEnd },
                              a.default.createElement(
                                b.Box,
                                { display: p.Display.Flex, alignItems: p.AlignItems.center },
                                a.default.createElement(b.Label, { htmlFor: "token-id" }, t("tokenId")),
                                a.default.createElement(
                                  v.default,
                                  { title: t("importNFTTokenIdToolTip"), position: "bottom" },
                                  a.default.createElement(b.Icon, {
                                    name: b.IconName.Info,
                                    size: b.IconSize.Sm,
                                    marginLeft: 1,
                                    color: p.IconColor.iconAlternative
                                  })
                                )
                              )
                            ),
                            a.default.createElement(b.FormTextField, {
                              dataTestId: "token-id",
                              id: "token-id",
                              placeholder: t("nftTokenIdPlaceholder"),
                              value: S,
                              onChange: (e) => {
                                ((e) => {
                                  W(null);
                                  const n = (0, _.checkTokenIdExists)(N, e, P.collections);
                                  n && W(t("nftAlreadyAdded")), B(!(0, o.isValidHexAddress)(N) || !e || isNaN(Number(e)) || n), A(e);
                                })(e.target.value),
                                  R(!1);
                              },
                              helpText: z,
                              error: z
                            })
                          )
                        )
                      ),
                      a.default.createElement(
                        b.Box,
                        {
                          display: p.Display.Flex,
                          flexDirection: p.FlexDirection.Row,
                          justifyContent: p.JustifyContent.spaceBetween,
                          gap: 4,
                          paddingTop: 4,
                          paddingBottom: 4
                        },
                        a.default.createElement(
                          b.ButtonSecondary,
                          { size: b.ButtonSecondarySize.Lg, onClick: () => e(), block: !0, className: "import-nfts-modal__cancel-button" },
                          t("cancel")
                        ),
                        a.default.createElement(
                          b.ButtonPrimary,
                          {
                            size: p.Size.LG,
                            onClick: () =>
                              (async () => {
                                try {
                                  var t;
                                  await r((0, g.addNftVerifyOwnership)(N, S));
                                  const e = {
                                    ...T,
                                    [x]: {
                                      ...(null == T ? void 0 : T[x]),
                                      [E]: { ...(null == T || null === (t = T[x]) || void 0 === t ? void 0 : t[E]), [N]: !0 }
                                    }
                                  };
                                  r((0, g.updateNftDropDownState)(e));
                                } catch (e) {
                                  const { message: t } = e;
                                  return r((0, g.setNewNftAddedMessage)(t)), void R(!0);
                                }
                                j && N && (await r((0, g.ignoreTokens)({ tokensToIgnore: N, dontShowLoadingIndicator: !0 }))),
                                  r((0, g.setNewNftAddedMessage)("success"));
                                const o = await (0, g.getTokenStandardAndDetails)(N, null, S.toString());
                                L({
                                  event: s.MetaMetricsEventName.TokenAdded,
                                  category: "Wallet",
                                  sensitiveProperties: {
                                    token_contract_address: N,
                                    token_symbol: null == o ? void 0 : o.symbol,
                                    tokenId: S.toString(),
                                    asset_type: c.AssetType.NFT,
                                    token_standard: null == o ? void 0 : o.standard,
                                    source_connection_method: s.MetaMetricsTokenEventSource.Custom
                                  }
                                }),
                                  n.push(f.DEFAULT_ROUTE),
                                  e();
                              })(),
                            disabled: D,
                            block: !0,
                            "data-testid": "import-nfts-modal-import-button"
                          },
                          t("import")
                        )
                      )
                    )
                  );
                };
                (n.ImportNftsModal = T), (T.propTypes = { onClose: r.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-nfts-modal/import-nfts-modal.js" }
    ],
    [
      4549,
      { "./import-nfts-modal": 4548 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ImportNftsModal", {
                    enumerable: !0,
                    get: function () {
                      return o.ImportNftsModal;
                    }
                  });
                var o = e("./import-nfts-modal");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-nfts-modal/index.js" }
    ],
    [
      455,
      { "@ethersproject/bytes": 430, "@ethersproject/sha2": 487 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.pbkdf2 = void 0);
                var o = e("@ethersproject/bytes"),
                  r = e("@ethersproject/sha2");
                n.pbkdf2 = function (e, t, n, a, i) {
                  var l;
                  (e = (0, o.arrayify)(e)), (t = (0, o.arrayify)(t));
                  var s,
                    c,
                    u = 1,
                    d = new Uint8Array(a),
                    p = new Uint8Array(t.length + 4);
                  p.set(t);
                  for (var f = 1; f <= u; f++) {
                    (p[t.length] = (f >> 24) & 255),
                      (p[t.length + 1] = (f >> 16) & 255),
                      (p[t.length + 2] = (f >> 8) & 255),
                      (p[t.length + 3] = 255 & f);
                    var m = (0, o.arrayify)((0, r.computeHmac)(i, e, p));
                    l || ((l = m.length), (c = new Uint8Array(l)), (s = a - ((u = Math.ceil(a / l)) - 1) * l)), c.set(m);
                    for (var h = 1; h < n; h++) {
                      m = (0, o.arrayify)((0, r.computeHmac)(i, e, m));
                      for (var g = 0; g < l; g++) c[g] ^= m[g];
                    }
                    var y = (f - 1) * l,
                      b = f === u ? s : l;
                    d.set((0, o.arrayify)(c).slice(0, b), y);
                  }
                  return (0, o.hexlify)(d);
                };
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/pbkdf2", file: "node_modules/@ethersproject/pbkdf2/lib/browser-pbkdf2.js" }
    ],
    [
      4550,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        classnames: 2414,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ImportTokenLink = void 0);
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = e("react-redux"),
                  i = (o = e("classnames")) && o.__esModule ? o : { default: o },
                  l = e("../../component-library"),
                  s = e("../../../helpers/constants/design-system"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../store/actions"),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../../shared/constants/metametrics"),
                  f = e("../../../selectors");
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (m = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function h() {
                  return (
                    (h = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    h.apply(this, arguments)
                  );
                }
                n.ImportTokenLink = ({ className: e = "", ...t }) => {
                  const n = (0, r.useContext)(d.MetaMetricsContext),
                    o = (0, c.useI18nContext)(),
                    m = (0, a.useDispatch)(),
                    g = (0, a.useSelector)(f.getIsTokenDetectionSupported),
                    y = (0, a.useSelector)(f.getIsTokenDetectionInactiveOnMainnet),
                    b = g || y || Boolean(!1);
                  return r.default.createElement(
                    l.Box,
                    h({ className: (0, i.default)("multichain-import-token-link", e) }, t),
                    r.default.createElement(
                      l.Box,
                      { display: s.Display.Flex, alignItems: s.AlignItems.center },
                      r.default.createElement(
                        l.ButtonLink,
                        {
                          size: l.ButtonLinkSize.Md,
                          "data-testid": "import-token-button",
                          startIconName: l.IconName.Add,
                          onClick: () => {
                            m((0, u.showImportTokensModal)()),
                              n(
                                {
                                  event: p.MetaMetricsEventName.TokenImportButtonClicked,
                                  category: p.MetaMetricsEventCategory.Navigation,
                                  properties: { location: "Home" }
                                },
                                {}
                              );
                          }
                        },
                        b
                          ? o("importTokensCamelCase")
                          : o("importTokensCamelCase").charAt(0).toUpperCase() + o("importTokensCamelCase").slice(1)
                      )
                    ),
                    r.default.createElement(
                      l.Box,
                      { display: s.Display.Flex, alignItems: s.AlignItems.center, paddingTop: 2 },
                      r.default.createElement(
                        l.ButtonLink,
                        {
                          size: l.ButtonLinkSize.Md,
                          startIconName: l.IconName.Refresh,
                          "data-testid": "refresh-list-button",
                          onClick: () => m((0, u.detectNewTokens)())
                        },
                        o("refreshList")
                      )
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-token-link/import-token-link.tsx" }
    ],
    [
      4551,
      { "./import-token-link": 4550 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ImportTokenLink", {
                    enumerable: !0,
                    get: function () {
                      return o.ImportTokenLink;
                    }
                  });
                var o = e("./import-token-link");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-token-link/index.ts" }
    ],
    [
      4552,
      {
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../../ui/identicon": 4664,
        "../../ui/token-balance/token-balance": 4732,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ImportTokensModalConfirm = void 0);
                var o = p(e("react")),
                  r = e("react-redux"),
                  a = p(e("prop-types")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = p(e("../../ui/token-balance/token-balance")),
                  c = p(e("../../ui/identicon")),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../../ducks/metamask/metamask");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const f = ({ onBackClick: e, onImportClick: t }) => {
                  const n = (0, u.useI18nContext)(),
                    a = (0, r.useSelector)(d.getPendingTokens);
                  return o.default.createElement(
                    i.Box,
                    { paddingTop: 4, paddingBottom: 4 },
                    o.default.createElement(i.Text, { textAlign: l.TextAlign.Center }, n("likeToImportTokens")),
                    o.default.createElement(
                      i.Box,
                      { marginTop: 4, marginBottom: 4 },
                      o.default.createElement(
                        i.Box,
                        { display: l.Display.Flex },
                        o.default.createElement(
                          i.Text,
                          { variant: l.TextVariant.bodySm, className: "import-tokens-modal__token-name" },
                          n("token")
                        ),
                        o.default.createElement(
                          i.Text,
                          { variant: l.TextVariant.bodySm, className: "import-tokens-modal__token-balance" },
                          n("balance")
                        )
                      ),
                      o.default.createElement(
                        i.Box,
                        { display: l.Display.Flex, className: "import-tokens-modal__confirm-token-list" },
                        Object.entries(a).map(([e, t]) => {
                          const { name: n, symbol: r } = t;
                          return o.default.createElement(
                            i.Box,
                            { key: e, marginBottom: 4, display: l.Display.Flex, className: "import-tokens-modal__confirm-token-list-item" },
                            o.default.createElement(
                              i.Box,
                              {
                                display: l.Display.Flex,
                                alignItems: l.AlignItems.center,
                                className: "import-tokens-modal__confirm-token-list-item-wrapper"
                              },
                              o.default.createElement(c.default, { diameter: 36, address: e }),
                              o.default.createElement(
                                i.Box,
                                { marginInlineStart: 4, className: "import-tokens-modal__confirm-token-list-item-wrapper__text" },
                                o.default.createElement(i.Text, { ellipsis: !0 }, n),
                                o.default.createElement(i.Text, { variant: l.TextVariant.bodySm, color: l.TextColor.textAlternative }, r)
                              )
                            ),
                            o.default.createElement(
                              i.Box,
                              { className: "import-tokens-modal__token-balance", alignItems: l.AlignItems.flexStart },
                              o.default.createElement(s.default, { token: t })
                            )
                          );
                        })
                      ),
                      o.default.createElement(
                        i.Box,
                        { display: l.Display.Flex, gap: 2, marginTop: 4 },
                        o.default.createElement(i.ButtonSecondary, { size: l.Size.LG, onClick: e, block: !0 }, n("back")),
                        o.default.createElement(
                          i.ButtonPrimary,
                          { size: l.Size.LG, onClick: t, block: !0, "data-testid": "import-tokens-modal-import-button" },
                          n("import")
                        )
                      )
                    )
                  );
                };
                (n.ImportTokensModalConfirm = f),
                  (f.propTypes = { onBackClick: a.default.func.isRequired, onImportClick: a.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-tokens-modal/import-tokens-modal-confirm.js" }
    ],
    [
      4553,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/tokens": 3973,
        "../../../../shared/constants/transaction": 3974,
        "../../../../shared/modules/hexstring-utils": 3993,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/constants/zendesk-url": 4781,
        "../../../helpers/utils/token-util": 4809,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../app/import-token/token-list": 4139,
        "../../app/import-token/token-search": 4144,
        "../../component-library": 4453,
        "../../ui/tabs": 4719,
        "./import-tokens-modal-confirm": 4552,
        "@metamask/etherscan-link/dist/token-tracker-link": 1258,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ImportTokensModal = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = j(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = e("react-redux"),
                  a = e("react-router-dom"),
                  i = M(e("prop-types")),
                  l = e("@metamask/etherscan-link/dist/token-tracker-link"),
                  s = e("../../ui/tabs"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../selectors"),
                  d = e("../../../store/actions"),
                  p = e("../../component-library"),
                  f = M(e("../../app/import-token/token-search")),
                  m = M(e("../../app/import-token/token-list")),
                  h = e("../../../helpers/constants/design-system"),
                  g = e("../../../helpers/constants/routes"),
                  y = M(e("../../../helpers/constants/zendesk-url")),
                  b = e("../../../../shared/modules/hexstring-utils"),
                  v = e("../../../../app/scripts/lib/util"),
                  k = e("../../../../shared/constants/tokens"),
                  _ = e("../../../../shared/constants/transaction"),
                  C = e("../../../helpers/utils/util"),
                  w = e("../../../helpers/utils/token-util"),
                  T = e("../../../contexts/metametrics"),
                  x = e("../../../ducks/metamask/metamask"),
                  E = e("../../../../shared/constants/metametrics"),
                  O = e("./import-tokens-modal-confirm");
                function M(e) {
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
                const P = ({ onClose: e }) => {
                  const t = (0, c.useI18nContext)(),
                    n = (0, a.useHistory)(),
                    i = (0, r.useDispatch)(),
                    [M, j] = (0, o.useState)(""),
                    [P, N] = (0, o.useState)(null),
                    [I, S] = (0, o.useState)({}),
                    [A, D] = (0, o.useState)([]),
                    B = (0, r.useSelector)(u.getIsTokenDetectionSupported),
                    $ = (0, r.useSelector)(u.getIsTokenDetectionInactiveOnMainnet),
                    R = B || $ || Boolean(!1),
                    L = (0, r.useSelector)(u.getTokenList),
                    F = (0, r.useSelector)(({ metamask: e }) => e.useTokenDetection),
                    V = (0, r.useSelector)(u.getTokenDetectionSupportNetworkByChainId),
                    z = (0, r.useSelector)(u.getIstokenDetectionInactiveOnNonMainnetSupportedNetwork),
                    W = (0, r.useSelector)(u.getIsDynamicTokenListAvailable),
                    H = (0, r.useSelector)(u.getSelectedAddress),
                    U = (0, r.useSelector)(u.getIsMainnet),
                    q = (0, r.useSelector)(u.getMetaMaskIdentities),
                    K = (0, r.useSelector)((e) => e.metamask.tokens),
                    Z = (0, r.useSelector)(u.getRpcPrefsForCurrentProvider),
                    [G, J] = (0, o.useState)(""),
                    [Y, X] = (0, o.useState)(null),
                    [Q, ee] = (0, o.useState)(null),
                    [te, ne] = (0, o.useState)(!1),
                    [oe, re] = (0, o.useState)(!1),
                    [ae, ie] = (0, o.useState)(null),
                    [le, se] = (0, o.useState)(""),
                    [ce, ue] = (0, o.useState)(null),
                    [de, pe] = (0, o.useState)(0),
                    [fe, me] = (0, o.useState)(null),
                    [he, ge] = (0, o.useState)(_.TokenStandard.none),
                    [ye, be] = (0, o.useState)(!1),
                    ve = (0, r.useSelector)(u.getCurrentChainId),
                    ke = (0, l.getTokenTrackerLink)(G, ve, null, null, {
                      blockExplorerUrl: (null == Z ? void 0 : Z.blockExplorerUrl) ?? null
                    }),
                    _e = null != Z && Z.blockExplorerUrl ? (0, C.getURLHostName)(ke) : t("etherscan"),
                    Ce = (0, o.useRef)((0, w.tokenInfoGetter)()),
                    we = (0, o.useContext)(T.MetaMetricsContext),
                    Te = (0, r.useSelector)(x.getPendingTokens),
                    xe = (0, r.useSelector)(u.getSelectedNetworkClientId),
                    Ee = (0, o.useCallback)(async () => {
                      var e;
                      const t = Object.values(Te);
                      await i((0, d.addImportedTokens)(t, xe));
                      const o = null == t || null === (e = t[0].address) || void 0 === e ? void 0 : e.toLowerCase();
                      t.forEach((e) => {
                        we({
                          event: E.MetaMetricsEventName.TokenAdded,
                          category: E.MetaMetricsEventCategory.Wallet,
                          sensitiveProperties: {
                            token_symbol: e.symbol,
                            token_contract_address: e.address,
                            token_decimal_precision: e.decimals,
                            unlisted: e.unlisted,
                            source_connection_method: e.isCustom
                              ? E.MetaMetricsTokenEventSource.Custom
                              : E.MetaMetricsTokenEventSource.List,
                            token_standard: _.TokenStandard.ERC20,
                            asset_type: _.AssetType.token
                          }
                        });
                      }),
                        i((0, d.clearPendingTokens)()),
                        o && n.push(`${g.ASSET_ROUTE}/${o}`);
                    }, [i, n, Te, we]);
                  (0, o.useEffect)(() => {
                    const e = Object.keys(Te);
                    if (0 === e.length) return;
                    let t = {},
                      n = {};
                    e.forEach((e) => {
                      const o = Te[e],
                        { isCustom: r } = o;
                      r ? (n = { ...o }) : (t = { ...I, [e]: { ...o } });
                    }),
                      S(t),
                      J(n.address),
                      se(n.symbol),
                      pe(n.decimals);
                  }, [Te]);
                  const Oe = (e) => {
                      const n = e.trim(),
                        o = n.length;
                      let r = null;
                      (o <= 0 || o >= 12) && (r = t("symbolBetweenZeroTwelve")), se(n), ue(r);
                    },
                    Me = (e) => {
                      let n,
                        o = null;
                      e
                        ? ((n = Number(e.trim())), (o = e < 0 || e > 36 ? t("decimalsMustZerotoTen") : null))
                        : ((n = ""), (o = t("tokenDecimalFetchFailed"))),
                        pe(n),
                        me(o);
                    },
                    je = () => P || Y || ce || fe || Q,
                    Pe = () => G || Object.keys(I).length > 0,
                    Ne = async (n) => {
                      const r = n.trim();
                      J(r), X(null), ee(null), ne(!1), re(!1), ie(null);
                      const a = (0, b.isValidHexAddress)(r, { allowNonPrefixed: !1 }),
                        l = (0, v.addHexPrefix)(r).toLowerCase(),
                        s = Object.keys(k.STATIC_MAINNET_TOKEN_LIST).some((e) => e.toLowerCase() === r.toLowerCase());
                      let c;
                      if (a)
                        try {
                          ({ standard: c } = await (0, d.getTokenStandardAndDetails)(l, H, null));
                        } catch (e) {}
                      const u = 0 === r.length || "0x0000000000000000000000000000000000000000" === r;
                      switch (!0) {
                        case !a && !u:
                          X(t("invalidAddress")), se(""), pe(0), ue(null), me(null);
                          break;
                        case c === _.TokenStandard.ERC1155 || c === _.TokenStandard.ERC721:
                          ee(
                            t("nftAddressError", [
                              o.default.createElement(
                                p.ButtonLink,
                                {
                                  className: "import-tokens-modal__nft-address-error-link",
                                  onClick: () => {
                                    i((0, d.showImportNftsModal)({ tokenAddress: r })), e();
                                  },
                                  color: h.TextColor.primaryDefault,
                                  key: "nftAddressError"
                                },
                                t("importNFTPage")
                              )
                            ])
                          );
                          break;
                        case s && !U:
                          ie(t("mainnetToken")), se(""), pe(0), ue(null), me(null);
                          break;
                        case Boolean(q[l]):
                          X(t("personalAddressDetected"));
                          break;
                        case (0, C.checkExistingAddresses)(r, K):
                          X(t("tokenAlreadyAdded"));
                          break;
                        default:
                          u ||
                            ((async (e) => {
                              const { symbol: t = "", decimals: n } = await Ce.current(e, L);
                              ne(Boolean(t)), re(Boolean(n)), Oe(t || ""), Me(n);
                            })(r),
                            c && ge(c));
                      }
                    },
                    Ie = "confirm" === M;
                  return o.default.createElement(
                    p.Modal,
                    {
                      isOpen: !0,
                      onClose: () => {
                        i((0, d.clearPendingTokens)()), e();
                      },
                      className: "import-tokens-modal"
                    },
                    o.default.createElement(p.ModalOverlay, null),
                    o.default.createElement(
                      p.ModalContent,
                      null,
                      o.default.createElement(
                        p.ModalHeader,
                        {
                          onBack: Ie ? () => j("") : null,
                          onClose: () => {
                            i((0, d.clearPendingTokens)()), e();
                          }
                        },
                        t("importTokensCamelCase")
                      ),
                      o.default.createElement(
                        p.Box,
                        { marginTop: 6 },
                        Ie
                          ? o.default.createElement(O.ImportTokensModalConfirm, {
                              onBackClick: () => {
                                i((0, d.clearPendingTokens)()), j("");
                              },
                              onImportClick: async () => {
                                await Ee(), e();
                              }
                            })
                          : o.default.createElement(
                              o.default.Fragment,
                              null,
                              o.default.createElement(
                                s.Tabs,
                                { t: t },
                                R
                                  ? o.default.createElement(
                                      s.Tab,
                                      { tabKey: "search", name: t("search") },
                                      o.default.createElement(
                                        p.Box,
                                        { paddingTop: 4, paddingBottom: 4 },
                                        F
                                          ? null
                                          : o.default.createElement(
                                              p.BannerAlert,
                                              { severity: h.Severity.Info, marginBottom: 4 },
                                              o.default.createElement(
                                                p.Text,
                                                null,
                                                t("enhancedTokenDetectionAlertMessage", [
                                                  V,
                                                  o.default.createElement(
                                                    p.ButtonLink,
                                                    {
                                                      key: "token-detection-announcement",
                                                      className: "import-tokens-modal__autodetect",
                                                      onClick: () => {
                                                        n.push(`${g.SECURITY_ROUTE}#auto-detect-tokens`), e();
                                                      }
                                                    },
                                                    t("enableFromSettings")
                                                  )
                                                ])
                                              )
                                            ),
                                        o.default.createElement(f.default, {
                                          onSearch: ({ results: e = [] }) => D(e),
                                          error: P,
                                          tokenList: L
                                        }),
                                        o.default.createElement(
                                          p.Box,
                                          { marginTop: 4, className: "import-tokens-modal__search-list" },
                                          o.default.createElement(m.default, {
                                            results: A,
                                            selectedTokens: I,
                                            onToggleToken: (e) =>
                                              ((e) => {
                                                const { address: t } = e,
                                                  n = { ...I };
                                                t in n ? delete n[t] : (n[t] = e), S(n), N(null);
                                              })(e)
                                          })
                                        )
                                      )
                                    )
                                  : null,
                                o.default.createElement(
                                  s.Tab,
                                  { tabKey: "customToken", name: t("customToken") },
                                  o.default.createElement(
                                    p.Box,
                                    { paddingTop: 4, paddingBottom: 4, className: "import-tokens-modal__custom-token-form" },
                                    z
                                      ? o.default.createElement(
                                          p.BannerAlert,
                                          { severity: h.Severity.Warning },
                                          t("customTokenWarningInTokenDetectionNetworkWithTDOFF", [
                                            o.default.createElement(
                                              p.ButtonLink,
                                              {
                                                key: "import-token-security-risk",
                                                rel: "noopener noreferrer",
                                                target: "_blank",
                                                href: y.default.TOKEN_SAFETY_PRACTICES
                                              },
                                              t("tokenScamSecurityRisk")
                                            ),
                                            o.default.createElement(
                                              p.ButtonLink,
                                              {
                                                type: "link",
                                                key: "import-token-token-detection-announcement",
                                                onClick: () => {
                                                  n.push(`${g.SECURITY_ROUTE}#auto-detect-tokens`), e();
                                                }
                                              },
                                              t("inYourSettings")
                                            )
                                          ])
                                        )
                                      : o.default.createElement(
                                          p.BannerAlert,
                                          { severity: W ? h.Severity.Warning : h.Severity.Info },
                                          t(
                                            W
                                              ? "customTokenWarningInTokenDetectionNetwork"
                                              : "customTokenWarningInNonTokenDetectionNetwork",
                                            [
                                              o.default.createElement(
                                                p.ButtonLink,
                                                {
                                                  key: "import-token-fake-token-warning",
                                                  rel: "noopener noreferrer",
                                                  target: "_blank",
                                                  href: y.default.TOKEN_SAFETY_PRACTICES
                                                },
                                                t("learnScamRisk")
                                              )
                                            ]
                                          )
                                        ),
                                    o.default.createElement(p.FormTextField, {
                                      label: t("tokenContractAddress"),
                                      value: G,
                                      onChange: (e) => Ne(e.target.value),
                                      helpText: Y || ae || Q,
                                      error: Y || ae || Q,
                                      autoFocus: !0,
                                      marginTop: 6,
                                      inputProps: { "data-testid": "import-tokens-modal-custom-address" }
                                    }),
                                    o.default.createElement(p.FormTextField, {
                                      label: o.default.createElement(
                                        o.default.Fragment,
                                        null,
                                        t("tokenSymbol"),
                                        te &&
                                          !ye &&
                                          o.default.createElement(
                                            p.ButtonLink,
                                            {
                                              onClick: () => be(!0),
                                              textAlign: h.TextAlign.End,
                                              paddingInlineEnd: 1,
                                              paddingInlineStart: 1,
                                              color: h.TextColor.primaryDefault
                                            },
                                            t("edit")
                                          )
                                      ),
                                      value: le,
                                      onChange: (e) => Oe(e.target.value),
                                      helpText: ce,
                                      error: ce,
                                      disabled: te && !ye,
                                      marginTop: 6,
                                      inputProps: { "data-testid": "import-tokens-modal-custom-symbol" }
                                    }),
                                    o.default.createElement(p.FormTextField, {
                                      label: t("decimal"),
                                      type: "number",
                                      value: de,
                                      onChange: (e) => Me(e.target.value),
                                      helpText: fe,
                                      error: fe,
                                      disabled: oe,
                                      min: 0,
                                      max: 36,
                                      marginTop: 6,
                                      inputProps: { "data-testid": "import-tokens-modal-custom-decimals" }
                                    }),
                                    "" === de &&
                                      o.default.createElement(
                                        p.BannerAlert,
                                        { severity: h.Severity.Warning },
                                        o.default.createElement(p.Text, { fontWeight: h.FontWeight.Bold }, t("tokenDecimalFetchFailed")),
                                        t("verifyThisTokenDecimalOn", [
                                          o.default.createElement(
                                            p.ButtonLink,
                                            {
                                              key: "import-token-verify-token-decimal",
                                              rel: "noopener noreferrer",
                                              target: "_blank",
                                              href: ke
                                            },
                                            _e
                                          )
                                        ])
                                      )
                                  )
                                )
                              ),
                              o.default.createElement(
                                p.Box,
                                { paddingTop: 6, paddingBottom: 6 },
                                o.default.createElement(
                                  p.ButtonPrimary,
                                  {
                                    onClick: () =>
                                      (() => {
                                        if (je()) return;
                                        if (!Pe()) return void N(t("mustSelectOne"));
                                        const e = Object.keys(L),
                                          n = G ? { address: G, symbol: le, decimals: de, standard: he } : null;
                                        i((0, d.setPendingTokens)({ customToken: n, selectedTokens: I, tokenAddressList: e })),
                                          j("confirm");
                                      })(),
                                    size: h.Size.LG,
                                    disabled: Boolean(je()) || !Pe(),
                                    block: !0
                                  },
                                  t("next")
                                )
                              )
                            )
                      )
                    )
                  );
                };
                (n.ImportTokensModal = P), (P.propTypes = { onClose: i.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-tokens-modal/import-tokens-modal.js" }
    ],
    [
      4554,
      { "./import-tokens-modal": 4553 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ImportTokensModal", {
                    enumerable: !0,
                    get: function () {
                      return o.ImportTokensModal;
                    }
                  });
                var o = e("./import-tokens-modal");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-tokens-modal/index.js" }
    ],
    [
      4555,
      {
        "./account-details": 4505,
        "./account-list-item": 4509,
        "./account-list-item-menu": 4507,
        "./account-list-menu": 4511,
        "./account-picker": 4513,
        "./activity-list-item": 4515,
        "./address-copy-button": 4517,
        "./address-list-item": 4519,
        "./app-footer": 4522,
        "./app-header": 4524,
        "./asset-list-conversion-button": 4526,
        "./asset-picker-amount": 4529,
        "./avatar-group": 4532,
        "./balance-overview": 4534,
        "./connected-site-menu": 4536,
        "./create-account": 4538,
        "./detected-token-banner": 4540,
        "./global-menu": 4542,
        "./import-account": 4545,
        "./import-nfts-modal": 4549,
        "./import-token-link": 4551,
        "./import-tokens-modal": 4554,
        "./menu-items": 4557,
        "./network-list-item": 4559,
        "./network-list-menu": 4561,
        "./product-tour-popover": 4590,
        "./select-action-modal": 4596,
        "./select-action-modal-item": 4594,
        "./token-list-item": 4598
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AccountDetails", {
                    enumerable: !0,
                    get: function () {
                      return k.AccountDetails;
                    }
                  }),
                  Object.defineProperty(n, "AccountDetailsMenuItem", {
                    enumerable: !0,
                    get: function () {
                      return T.AccountDetailsMenuItem;
                    }
                  }),
                  Object.defineProperty(n, "AccountListItem", {
                    enumerable: !0,
                    get: function () {
                      return o.AccountListItem;
                    }
                  }),
                  Object.defineProperty(n, "AccountListItemMenu", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountListItemMenu;
                    }
                  }),
                  Object.defineProperty(n, "AccountListMenu", {
                    enumerable: !0,
                    get: function () {
                      return a.AccountListMenu;
                    }
                  }),
                  Object.defineProperty(n, "AccountPicker", {
                    enumerable: !0,
                    get: function () {
                      return i.AccountPicker;
                    }
                  }),
                  Object.defineProperty(n, "ActivityListItem", {
                    enumerable: !0,
                    get: function () {
                      return l.ActivityListItem;
                    }
                  }),
                  Object.defineProperty(n, "AddressCopyButton", {
                    enumerable: !0,
                    get: function () {
                      return h.AddressCopyButton;
                    }
                  }),
                  Object.defineProperty(n, "AddressListItem", {
                    enumerable: !0,
                    get: function () {
                      return N.AddressListItem;
                    }
                  }),
                  Object.defineProperty(n, "AppFooter", {
                    enumerable: !0,
                    get: function () {
                      return c.AppFooter;
                    }
                  }),
                  Object.defineProperty(n, "AppHeader", {
                    enumerable: !0,
                    get: function () {
                      return s.AppHeader;
                    }
                  }),
                  Object.defineProperty(n, "AssetListConversionButton", {
                    enumerable: !0,
                    get: function () {
                      return M.AssetListConversionButton;
                    }
                  }),
                  Object.defineProperty(n, "AssetPickerAmount", {
                    enumerable: !0,
                    get: function () {
                      return P.AssetPickerAmount;
                    }
                  }),
                  Object.defineProperty(n, "AvatarGroup", {
                    enumerable: !0,
                    get: function () {
                      return j.AvatarGroup;
                    }
                  }),
                  Object.defineProperty(n, "BalanceOverview", {
                    enumerable: !0,
                    get: function () {
                      return u.BalanceOverview;
                    }
                  }),
                  Object.defineProperty(n, "ConnectedSiteMenu", {
                    enumerable: !0,
                    get: function () {
                      return g.ConnectedSiteMenu;
                    }
                  }),
                  Object.defineProperty(n, "CreateAccount", {
                    enumerable: !0,
                    get: function () {
                      return _.CreateAccount;
                    }
                  }),
                  Object.defineProperty(n, "DetectedTokensBanner", {
                    enumerable: !0,
                    get: function () {
                      return d.DetectedTokensBanner;
                    }
                  }),
                  Object.defineProperty(n, "GlobalMenu", {
                    enumerable: !0,
                    get: function () {
                      return p.GlobalMenu;
                    }
                  }),
                  Object.defineProperty(n, "ImportAccount", {
                    enumerable: !0,
                    get: function () {
                      return C.ImportAccount;
                    }
                  }),
                  Object.defineProperty(n, "ImportNftsModal", {
                    enumerable: !0,
                    get: function () {
                      return w.ImportNftsModal;
                    }
                  }),
                  Object.defineProperty(n, "ImportTokenLink", {
                    enumerable: !0,
                    get: function () {
                      return f.ImportTokenLink;
                    }
                  }),
                  Object.defineProperty(n, "ImportTokensModal", {
                    enumerable: !0,
                    get: function () {
                      return x.ImportTokensModal;
                    }
                  }),
                  Object.defineProperty(n, "NetworkListItem", {
                    enumerable: !0,
                    get: function () {
                      return y.NetworkListItem;
                    }
                  }),
                  Object.defineProperty(n, "NetworkListMenu", {
                    enumerable: !0,
                    get: function () {
                      return b.NetworkListMenu;
                    }
                  }),
                  Object.defineProperty(n, "ProductTour", {
                    enumerable: !0,
                    get: function () {
                      return v.ProductTour;
                    }
                  }),
                  Object.defineProperty(n, "SelectActionModal", {
                    enumerable: !0,
                    get: function () {
                      return E.SelectActionModal;
                    }
                  }),
                  Object.defineProperty(n, "SelectActionModalItem", {
                    enumerable: !0,
                    get: function () {
                      return O.SelectActionModalItem;
                    }
                  }),
                  Object.defineProperty(n, "TokenListItem", {
                    enumerable: !0,
                    get: function () {
                      return m.TokenListItem;
                    }
                  }),
                  Object.defineProperty(n, "ViewExplorerMenuItem", {
                    enumerable: !0,
                    get: function () {
                      return T.ViewExplorerMenuItem;
                    }
                  });
                var o = e("./account-list-item"),
                  r = e("./account-list-item-menu"),
                  a = e("./account-list-menu"),
                  i = e("./account-picker"),
                  l = e("./activity-list-item"),
                  s = e("./app-header"),
                  c = e("./app-footer"),
                  u = e("./balance-overview"),
                  d = e("./detected-token-banner"),
                  p = e("./global-menu"),
                  f = e("./import-token-link"),
                  m = e("./token-list-item"),
                  h = e("./address-copy-button"),
                  g = e("./connected-site-menu"),
                  y = e("./network-list-item"),
                  b = e("./network-list-menu"),
                  v = e("./product-tour-popover"),
                  k = e("./account-details"),
                  _ = e("./create-account"),
                  C = e("./import-account"),
                  w = e("./import-nfts-modal"),
                  T = e("./menu-items"),
                  x = e("./import-tokens-modal"),
                  E = e("./select-action-modal"),
                  O = e("./select-action-modal-item"),
                  M = e("./asset-list-conversion-button"),
                  j = e("./avatar-group"),
                  P = e("./asset-picker-amount"),
                  N = e("./address-list-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/index.js" }
    ],
    [
      4556,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/menu": 4681,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountDetailsMenuItem = void 0);
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = (o = e("prop-types")) && o.__esModule ? o : { default: o },
                  i = e("react-redux"),
                  l = e("../../../store/actions"),
                  s = e("../../ui/menu"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../contexts/metametrics"),
                  d = e("../../../../shared/constants/metametrics"),
                  p = e("../../component-library");
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (f = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const m = ({ metricsLocation: e, closeMenu: t, address: n, textProps: o }) => {
                  const a = (0, c.useI18nContext)(),
                    f = (0, i.useDispatch)(),
                    m = (0, r.useContext)(u.MetaMetricsContext),
                    h = a("accountDetails");
                  return r.default.createElement(
                    s.MenuItem,
                    {
                      onClick: () => {
                        f((0, l.setAccountDetailsAddress)(n)),
                          m({
                            event: d.MetaMetricsEventName.NavAccountDetailsOpened,
                            category: d.MetaMetricsEventCategory.Navigation,
                            properties: { location: e }
                          }),
                          null == t || t();
                      },
                      iconName: p.IconName.ScanBarcode,
                      "data-testid": "account-list-menu-details"
                    },
                    o ? r.default.createElement(p.Text, o, h) : h
                  );
                };
                (n.AccountDetailsMenuItem = m),
                  (m.propTypes = {
                    metricsLocation: a.default.string.isRequired,
                    closeMenu: a.default.func,
                    address: a.default.string.isRequired,
                    textProps: a.default.object
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/menu-items/account-details-menu-item.js" }
    ],
    [
      4557,
      { "./account-details-menu-item": 4556, "./view-explorer-menu-item": 4558 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AccountDetailsMenuItem", {
                    enumerable: !0,
                    get: function () {
                      return o.AccountDetailsMenuItem;
                    }
                  }),
                  Object.defineProperty(n, "ViewExplorerMenuItem", {
                    enumerable: !0,
                    get: function () {
                      return r.ViewExplorerMenuItem;
                    }
                  });
                var o = e("./account-details-menu-item"),
                  r = e("./view-explorer-menu-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/menu-items/index.js" }
    ],
    [
      4558,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../../ui/menu": 4681,
        "@metamask/controller-utils": 1056,
        "@metamask/etherscan-link": 1255,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ViewExplorerMenuItem = void 0);
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = (o = e("prop-types")) && o.__esModule ? o : { default: o },
                  i = e("react-redux"),
                  l = e("react-router-dom"),
                  s = e("@metamask/controller-utils"),
                  c = e("@metamask/etherscan-link"),
                  u = e("../../ui/menu"),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../contexts/metametrics"),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../component-library"),
                  h = e("../../../selectors"),
                  g = e("../../../helpers/utils/util"),
                  y = e("../../../helpers/constants/routes");
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const v = ({ metricsLocation: e, closeMenu: t, textProps: n, address: o }) => {
                  const a = (0, d.useI18nContext)(),
                    b = (0, r.useContext)(p.MetaMetricsContext),
                    v = (0, l.useHistory)(),
                    k = (0, i.useSelector)(h.getCurrentChainId),
                    _ = (0, i.useSelector)(h.getRpcPrefsForCurrentProvider),
                    C = (0, c.getAccountLink)((0, s.toChecksumHexAddress)(o), k, _),
                    { blockExplorerUrl: w } = _,
                    T = (0, g.getURLHostName)(w),
                    x = (0, i.useSelector)(h.getBlockExplorerLinkText),
                    E = a("viewOnExplorer");
                  return r.default.createElement(
                    u.MenuItem,
                    {
                      onClick: () => {
                        "addBlockExplorer" === x.firstPart
                          ? v.push(`${y.NETWORKS_ROUTE}#blockExplorerUrl`)
                          : (b({
                              event: f.MetaMetricsEventName.ExternalLinkClicked,
                              category: f.MetaMetricsEventCategory.Navigation,
                              properties: {
                                link_type: f.MetaMetricsEventLinkType.AccountTracker,
                                location: e,
                                url_domain: (0, g.getURLHostName)(C)
                              }
                            }),
                            global.platform.openTab({ url: C }),
                            t()),
                          b({
                            event: f.MetaMetricsEventName.BlockExplorerLinkClicked,
                            category: f.MetaMetricsEventCategory.Accounts,
                            properties: { location: e, chain_id: k }
                          }),
                          null == t || t();
                      },
                      subtitle: T || null,
                      iconName: m.IconName.Export,
                      "data-testid": "account-list-menu-open-explorer"
                    },
                    n ? r.default.createElement(m.Text, n, E) : E
                  );
                };
                (n.ViewExplorerMenuItem = v),
                  (v.propTypes = {
                    metricsLocation: a.default.string.isRequired,
                    closeMenu: a.default.func,
                    address: a.default.string.isRequired,
                    textProps: a.default.object
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/menu-items/view-explorer-menu-item.js" }
    ],
    [
      4559,
      { "./network-list-item": 4560 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "NetworkListItem", {
                    enumerable: !0,
                    get: function () {
                      return o.NetworkListItem;
                    }
                  });
                var o = e("./network-list-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/network-list-item/index.js" }
    ],
    [
      456,
      { "./pbkdf2": 455 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.pbkdf2 = void 0);
                var o = e("./pbkdf2");
                Object.defineProperty(n, "pbkdf2", {
                  enumerable: !0,
                  get: function () {
                    return o.pbkdf2;
                  }
                });
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/pbkdf2", file: "node_modules/@ethersproject/pbkdf2/lib/index.js" }
    ],
    [
      4560,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/accounts": 4791,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../../ui/tooltip/tooltip": 4737,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.NetworkListItem = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = d(e("classnames")),
                  a = d(e("prop-types")),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../component-library"),
                  s = e("../../../hooks/useI18nContext"),
                  c = e("../../../helpers/utils/accounts"),
                  u = d(e("../../ui/tooltip/tooltip"));
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
                const f = ({ name: e, iconSrc: t, selected: n = !1, focus: a = !0, onClick: d, onDeleteClick: p }) => {
                  const f = (0, s.useI18nContext)(),
                    m = (0, o.useRef)();
                  return (
                    (0, o.useEffect)(() => {
                      m.current && a && m.current.focus();
                    }, [m, a]),
                    o.default.createElement(
                      l.Box,
                      {
                        onClick: d,
                        padding: 4,
                        gap: 2,
                        backgroundColor: n ? i.Color.primaryMuted : i.Color.transparent,
                        className: (0, r.default)("multichain-network-list-item", { "multichain-network-list-item--selected": n }),
                        display: i.Display.Flex,
                        alignItems: i.AlignItems.center,
                        justifyContent: i.JustifyContent.spaceBetween,
                        width: i.BlockSize.Full
                      },
                      n &&
                        o.default.createElement(l.Box, {
                          className: "multichain-network-list-item__selected-indicator",
                          borderRadius: i.BorderRadius.pill,
                          backgroundColor: i.Color.primaryDefault
                        }),
                      o.default.createElement(l.AvatarNetwork, { backgroundColor: (0, c.getAvatarNetworkColor)(e), name: e, src: t }),
                      o.default.createElement(
                        l.Box,
                        { className: "multichain-network-list-item__network-name" },
                        o.default.createElement(
                          l.Text,
                          {
                            ref: m,
                            as: "button",
                            onClick: (e) => {
                              e.stopPropagation(), d();
                            },
                            color: i.TextColor.textDefault,
                            backgroundColor: i.BackgroundColor.transparent,
                            ellipsis: !0
                          },
                          e.length > 20
                            ? o.default.createElement(
                                u.default,
                                { title: e, position: "bottom", wrapperClassName: "multichain-network-list-item__tooltip" },
                                e
                              )
                            : e
                        )
                      ),
                      p
                        ? o.default.createElement(l.ButtonIcon, {
                            className: "multichain-network-list-item__delete",
                            color: i.IconColor.errorDefault,
                            iconName: l.IconName.Trash,
                            ariaLabel: f("deleteNetwork"),
                            size: i.Size.SM,
                            onClick: (e) => {
                              e.stopPropagation(), p();
                            }
                          })
                        : null
                    )
                  );
                };
                (n.NetworkListItem = f),
                  (f.propTypes = {
                    name: a.default.string.isRequired,
                    iconSrc: a.default.string,
                    selected: a.default.bool,
                    onClick: a.default.func.isRequired,
                    onDeleteClick: a.default.func,
                    focus: a.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/network-list-item/network-list-item.js" }
    ],
    [
      4561,
      { "./network-list-menu": 4562 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "NetworkListMenu", {
                    enumerable: !0,
                    get: function () {
                      return o.NetworkListMenu;
                    }
                  });
                var o = e("./network-list-menu");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/network-list-menu/index.js" }
    ],
    [
      4562,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/network": 3963,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/toggle-button": 4729,
        "../network-list-item": 4559,
        "fuse.js": 2821,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.NetworkListMenu = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = w(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = C(e("prop-types")),
                  a = e("react-redux"),
                  i = e("react-router-dom"),
                  l = C(e("fuse.js")),
                  s = e("../../../hooks/useI18nContext"),
                  c = e("../network-list-item"),
                  u = e("../../../store/actions"),
                  d = e("../../../../shared/constants/network"),
                  p = e("../../../selectors"),
                  f = C(e("../../ui/toggle-button")),
                  m = e("../../../helpers/constants/design-system"),
                  h = e("../../component-library"),
                  g = e("../../../helpers/constants/routes"),
                  y = e("../../../../app/scripts/lib/util"),
                  b = e("../../../../shared/constants/app"),
                  v = e("../../../contexts/metametrics"),
                  k = e("../../../../shared/constants/metametrics"),
                  _ = e("../../../ducks/metamask/metamask");
                function C(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function w(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (w = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const T = ({ onClose: e }) => {
                  const t = (0, s.useI18nContext)(),
                    n = (0, a.useSelector)(p.getNonTestNetworks),
                    r = (0, a.useSelector)(p.getTestNetworks),
                    C = (0, a.useSelector)(p.getShowTestNetworks),
                    w = (0, a.useSelector)(p.getCurrentChainId),
                    T = (0, a.useDispatch)(),
                    x = (0, i.useHistory)(),
                    E = (0, o.useContext)(v.MetaMetricsContext),
                    O = (0, a.useSelector)(p.getCurrentNetwork),
                    M = d.TEST_CHAINS.includes(w),
                    j = (0, y.getEnvironmentType)() === b.ENVIRONMENT_TYPE_FULLSCREEN,
                    P = (0, a.useSelector)(_.getCompletedOnboarding),
                    N = (0, a.useSelector)(_.isLineaMainnetNetworkReleased),
                    I = (0, a.useSelector)(_.getIsUnlocked),
                    S = n.length > 3;
                  (0, o.useEffect)(() => {
                    M && T((0, u.setShowTestNetworks)(M));
                  }, [T, M]);
                  const [A, D] = (0, o.useState)("");
                  let B = [...n];
                  const $ = "" !== A;
                  if ($) {
                    const e = new l.default(B, {
                      threshold: 0.2,
                      location: 0,
                      distance: 100,
                      maxPatternLength: 32,
                      minMatchCharLength: 1,
                      shouldSort: !0,
                      keys: ["nickname", "chainId", "ticker"]
                    });
                    e.setCollection(B);
                    const t = e.search(A);
                    B = B.filter((e) => t.includes(e));
                  }
                  const R = (e) =>
                    e.map((e) => {
                      var t;
                      if (!N && "linea-mainnet" === e.providerType) return null;
                      const n = O.id === e.id,
                        r = I && !n && e.removable;
                      return o.default.createElement(c.NetworkListItem, {
                        name: e.nickname,
                        iconSrc: null == e || null === (t = e.rpcPrefs) || void 0 === t ? void 0 : t.imageUrl,
                        key: e.id,
                        selected: n,
                        focus: n && !S,
                        onClick: () => {
                          T((0, u.toggleNetworkMenu)()),
                            e.providerType ? T((0, u.setProviderType)(e.providerType)) : T((0, u.setActiveNetwork)(e.id)),
                            E({
                              event: k.MetaMetricsEventName.NavNetworkSwitched,
                              category: k.MetaMetricsEventCategory.Network,
                              properties: { location: "Network Menu", chain_id: w, from_network: w, to_network: e.chainId }
                            });
                        },
                        onDeleteClick: r
                          ? () => {
                              T((0, u.toggleNetworkMenu)()),
                                T((0, u.showModal)({ name: "CONFIRM_DELETE_NETWORK", target: e.id, onConfirm: () => undefined }));
                            }
                          : null
                      });
                    });
                  return o.default.createElement(
                    h.Modal,
                    { isOpen: !0, onClose: e },
                    o.default.createElement(h.ModalOverlay, null),
                    o.default.createElement(
                      h.ModalContent,
                      {
                        className: "multichain-network-list-menu-content-wrapper",
                        modalDialogProps: {
                          className: "multichain-network-list-menu-content-wrapper__dialog",
                          display: m.Display.Flex,
                          flexDirection: m.FlexDirection.Column,
                          padding: 0
                        }
                      },
                      o.default.createElement(
                        h.ModalHeader,
                        { paddingTop: 4, paddingRight: 4, paddingBottom: 6, onClose: e },
                        t("networkMenuHeading")
                      ),
                      o.default.createElement(
                        o.default.Fragment,
                        null,
                        S
                          ? o.default.createElement(
                              h.Box,
                              { paddingLeft: 4, paddingRight: 4, paddingBottom: 4, paddingTop: 0 },
                              o.default.createElement(h.TextFieldSearch, {
                                size: m.Size.SM,
                                width: m.BlockSize.Full,
                                placeholder: t("search"),
                                value: A,
                                onChange: (e) => D(e.target.value),
                                clearButtonOnClick: () => D(""),
                                clearButtonProps: { size: m.Size.SM },
                                inputProps: { autoFocus: !0 }
                              })
                            )
                          : null,
                        o.default.createElement(
                          h.Box,
                          { className: "multichain-network-list-menu" },
                          0 === B.length && $
                            ? o.default.createElement(
                                h.Text,
                                {
                                  paddingLeft: 4,
                                  paddingRight: 4,
                                  color: m.TextColor.textMuted,
                                  "data-testid": "multichain-network-menu-popover-no-results"
                                },
                                t("noNetworksFound")
                              )
                            : R(B)
                        ),
                        o.default.createElement(
                          h.Box,
                          { padding: 4, display: m.Display.Flex, justifyContent: m.JustifyContent.spaceBetween },
                          o.default.createElement(h.Text, null, t("showTestnetNetworks")),
                          o.default.createElement(f.default, {
                            value: C,
                            disabled: M || !I,
                            onToggle: (e) => {
                              const t = !e;
                              T((0, u.setShowTestNetworks)(t)),
                                t &&
                                  E({ event: k.MetaMetricsEventName.TestNetworksDisplayed, category: k.MetaMetricsEventCategory.Network });
                            }
                          })
                        ),
                        C || M ? o.default.createElement(h.Box, { className: "multichain-network-list-menu" }, R(r)) : null,
                        o.default.createElement(
                          h.Box,
                          { padding: 4 },
                          o.default.createElement(
                            h.ButtonSecondary,
                            {
                              size: h.ButtonSecondarySize.Lg,
                              disabled: !I,
                              block: !0,
                              onClick: () => {
                                j
                                  ? P
                                    ? x.push(g.ADD_POPULAR_CUSTOM_NETWORK)
                                    : T((0, u.showModal)({ name: "ONBOARDING_ADD_NETWORK" }))
                                  : global.platform.openExtensionInBrowser(g.ADD_POPULAR_CUSTOM_NETWORK),
                                  T((0, u.toggleNetworkMenu)()),
                                  E({ event: k.MetaMetricsEventName.AddNetworkButtonClick, category: k.MetaMetricsEventCategory.Network });
                              }
                            },
                            t("addNetwork")
                          )
                        )
                      )
                    )
                  );
                };
                (n.NetworkListMenu = T), (T.propTypes = { onClose: r.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/network-list-menu/network-list-menu.js" }
    ],
    [
      4563,
      { "./nft-item": 4564 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "NftItem", {
                    enumerable: !0,
                    get: function () {
                      return o.NftItem;
                    }
                  });
                var o = e("./nft-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/nft-item/index.js" }
    ],
    [
      4564,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../selectors": 5197,
        "../../app/nft-default-image/nft-default-image": 4214,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.NftItem = void 0);
                var o = d(e("react")),
                  r = d(e("prop-types")),
                  a = d(e("classnames")),
                  i = e("react-redux"),
                  l = d(e("../../app/nft-default-image/nft-default-image")),
                  s = e("../../component-library"),
                  c = e("../../../helpers/constants/design-system"),
                  u = e("../../../selectors");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({
                  alt: e,
                  name: t,
                  src: n,
                  networkName: r,
                  networkSrc: d,
                  tokenId: p,
                  onClick: f,
                  clickable: m,
                  isIpfsURL: h
                }) => {
                  const g = (0, i.useSelector)(u.getTestNetworkBackgroundColor),
                    y = (0, i.useSelector)(u.getIpfsGateway),
                    b = (0, i.useSelector)(u.getOpenSeaEnabled),
                    v =
                      (y && h && n) || (b && n && !h)
                        ? o.default.createElement(s.Box, {
                            className: "nft-item__item nft-item__item-image",
                            "data-testid": "nft-image",
                            as: "img",
                            src: n,
                            alt: e,
                            display: c.Display.Block,
                            justifyContent: c.JustifyContent.center
                          })
                        : o.default.createElement(l.default, {
                            className: "nft-item__default-image",
                            "data-testid": "nft-default-image",
                            name: t,
                            tokenId: p,
                            clickable: m && h
                          });
                  return o.default.createElement(
                    s.Box,
                    { className: "nft-item__container", "data-testid": "nft-item", as: "button", onClick: f },
                    o.default.createElement(
                      s.BadgeWrapper,
                      {
                        className: (0, a.default)("nft-item__badge-wrapper", { "nft-item__badge-wrapper__clickable": m }),
                        anchorElementShape: s.BadgeWrapperAnchorElementShape.circular,
                        positionObj: { top: -4, right: -4 },
                        display: c.Display.Block,
                        badge: o.default.createElement(s.AvatarNetwork, {
                          className: "nft-item__network-badge",
                          backgroundColor: g,
                          "data-testid": "nft-network-badge",
                          size: s.AvatarNetworkSize.Sm,
                          name: r,
                          src: d,
                          borderWidth: 2,
                          borderColor: c.BackgroundColor.backgroundDefault
                        })
                      },
                      v
                    )
                  );
                };
                (n.NftItem = p),
                  (p.propTypes = {
                    src: r.default.string,
                    alt: r.default.string.isRequired,
                    name: r.default.string.isRequired,
                    networkName: r.default.string.isRequired,
                    networkSrc: r.default.string.isRequired,
                    tokenId: r.default.string.isRequired,
                    onClick: r.default.func,
                    clickable: r.default.bool,
                    isIpfsURL: r.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/nft-item/nft-item.js" }
    ],
    [
      4565,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/constants/routes": 4776,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
        "../../../ui/tabs": 4719,
        "../page": 4576,
        "./connection-list-item": 4566,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AllConnections = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = e("react-router-dom"),
                  a = e("react-redux"),
                  i = e("../page"),
                  l = e("../../../component-library"),
                  s = e("../../../../hooks/useI18nContext"),
                  c = e("../../../../helpers/constants/design-system"),
                  u = e("../../../../helpers/constants/routes"),
                  d = e("../../../../selectors"),
                  p = e("../../../ui/tabs"),
                  f = e("./connection-list-item");
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (m = function (e) {
                    return e ? n : t;
                  })(e);
                }
                n.AllConnections = () => {
                  const e = (0, s.useI18nContext)(),
                    t = (0, r.useHistory)();
                  let n = 0;
                  const m = (0, a.useSelector)(d.getConnectedSubjectsForAllAddresses),
                    h = (0, a.useSelector)(d.getAllConnectedAccounts),
                    g = (0, a.useSelector)(d.getSnapsList),
                    y = (0, o.useMemo)(() => {
                      const e = {};
                      return (
                        h.forEach((t) => {
                          m[t].forEach((n) => {
                            e[n.origin] || (e[n.origin] = { ...n, addresses: [] }), e[n.origin].addresses.push(t);
                          });
                        }),
                        e
                      );
                    }, [h, m]),
                    b = (0, o.useMemo)(() => {
                      const e = {};
                      return (
                        Object.keys(y).forEach((t) => {
                          const o = y[t],
                            { name: r, iconUrl: a, origin: i, subjectType: l, extensionId: s, addresses: c } = o;
                          e[r] || ((e[r] = { name: r, iconUrl: a, origin: i, subjectType: l, extensionId: s, addresses: [] }), (n += 1)),
                            e[r].addresses.push(...c);
                        }),
                        e
                      );
                    }, [y]),
                    v = (0, o.useMemo)(() => {
                      const e = {};
                      return (
                        Object.keys(g).forEach((t) => {
                          const o = g[t],
                            { id: r, name: a, packageName: i, iconUrl: l, subjectType: s } = o;
                          e[a] || ((e[a] = { id: r, name: a, iconUrl: l, packageName: i, subjectType: s }), (n += 1));
                        }),
                        e
                      );
                    }, [g]),
                    k = (0, o.useMemo)(() => n > 5 && Object.keys(b).length > 0 && Object.keys(v).length > 0, [n, b, v]),
                    _ = (0, o.useCallback)((e) => {
                      console.log("connection clicked: ", e);
                    }, []),
                    C = (e) =>
                      Object.entries(e).map(([e, t]) =>
                        o.default.createElement(f.ConnectionListItem, {
                          "data-testid": "connection-list-item",
                          key: e,
                          connection: t,
                          onClick: () => _(t)
                        })
                      );
                  return o.default.createElement(
                    i.Page,
                    {
                      "data-testid": "all-connections",
                      header: o.default.createElement(
                        i.Header,
                        {
                          backgroundColor: c.BackgroundColor.backgroundDefault,
                          startAccessory: o.default.createElement(l.ButtonIcon, {
                            ariaLabel: e("back"),
                            iconName: l.IconName.ArrowLeft,
                            className: "connections-header__start-accessory",
                            color: c.Color.iconDefault,
                            onClick: () => t.push(u.DEFAULT_ROUTE),
                            size: l.ButtonIconSize.Sm
                          })
                        },
                        o.default.createElement(
                          l.Text,
                          { as: "span", variant: c.TextVariant.headingMd, textAlign: c.TextAlign.Center },
                          e("allConnections")
                        )
                      )
                    },
                    k
                      ? o.default.createElement(
                          p.Tabs,
                          { tabsClassName: "all-connections__tabs" },
                          o.default.createElement(
                            p.Tab,
                            { "data-testid": "all-connections-sites-tab", name: e("sites"), tabKey: "sites" },
                            C(b)
                          ),
                          o.default.createElement(
                            p.Tab,
                            { "data-testid": "all-connections-snaps-tab", name: e("snaps"), tabKey: "snaps" },
                            C(v)
                          )
                        )
                      : o.default.createElement(
                          o.default.Fragment,
                          null,
                          Object.keys(b).length > 0 &&
                            o.default.createElement(
                              o.default.Fragment,
                              null,
                              o.default.createElement(
                                l.Text,
                                {
                                  "data-testid": "sites-connections",
                                  backgroundColor: c.BackgroundColor.backgroundDefault,
                                  variant: c.TextVariant.bodyLgMedium,
                                  textAlign: c.TextAlign.Center,
                                  padding: 4
                                },
                                e("siteConnections")
                              ),
                              C(b)
                            ),
                          Object.keys(v).length > 0 &&
                            o.default.createElement(
                              o.default.Fragment,
                              null,
                              o.default.createElement(
                                l.Text,
                                {
                                  "data-testid": "snaps-connections",
                                  variant: c.TextVariant.bodyLgMedium,
                                  backgroundColor: c.BackgroundColor.backgroundDefault,
                                  textAlign: c.TextAlign.Center,
                                  padding: 4
                                },
                                e("snapConnections")
                              ),
                              C(v)
                            )
                        ),
                    0 === n
                      ? o.default.createElement(
                          l.Text,
                          {
                            "data-testid": "no-connections",
                            variant: c.TextVariant.bodyLgMedium,
                            backgroundColor: c.BackgroundColor.backgroundDefault,
                            textAlign: c.TextAlign.Center,
                            padding: 4
                          },
                          "No Connected Sites or Snaps"
                        )
                      : null
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/all-connections/all-connections.js" }
    ],
    [
      4566,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/useI18nContext": 4837,
        "../../../app/snaps/snap-avatar/snap-avatar": 4294,
        "../../../component-library": 4453,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ConnectionListItem = void 0);
                var o = d(e("react")),
                  r = d(e("prop-types")),
                  a = e("@metamask/permission-controller"),
                  i = e("../../../../helpers/constants/design-system"),
                  l = e("../../../../hooks/useI18nContext"),
                  s = e("../../../component-library"),
                  c = e("../../../../helpers/utils/util"),
                  u = d(e("../../../app/snaps/snap-avatar/snap-avatar"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({ connection: e, onClick: t }) => {
                  var n, r;
                  const d = (0, l.useI18nContext)(),
                    p = e.subjectType === a.SubjectType.Snap;
                  return o.default.createElement(
                    s.Box,
                    {
                      as: "button",
                      display: i.Display.Flex,
                      flexDirection: i.FlexDirection.Row,
                      alignItems: i.AlignItems.baseline,
                      width: i.BlockSize.Full,
                      backgroundColor: i.BackgroundColor.backgroundDefault,
                      onClick: t,
                      padding: 4,
                      gap: 4
                    },
                    p
                      ? o.default.createElement(u.default, {
                          snapId: e.id,
                          badgeSize: s.IconSize.Xs,
                          avatarSize: s.IconSize.Md,
                          borderWidth: 0
                        })
                      : o.default.createElement(
                          s.BadgeWrapper,
                          {
                            badge: o.default.createElement(s.Icon, {
                              name: s.IconName.Global,
                              color: i.IconColor.iconDefault,
                              size: s.IconSize.Xs,
                              borderColor: i.BackgroundColor.backgroundDefault
                            })
                          },
                          o.default.createElement(s.AvatarFavicon, { src: e.iconUrl })
                        ),
                    o.default.createElement(
                      s.Box,
                      {
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column,
                        width: i.BlockSize.FiveTwelfths,
                        style: { flexGrow: "1" }
                      },
                      o.default.createElement(
                        s.Text,
                        { variant: i.TextVariant.bodyLgMedium, textAlign: i.TextAlign.Left, ellipsis: !0 },
                        e.name
                      ),
                      o.default.createElement(
                        s.Text,
                        {
                          display: i.Display.Flex,
                          alignItems: i.AlignItems.flexStart,
                          color: i.TextColor.textAlternative,
                          variant: i.TextVariant.bodyMd
                        },
                        p ? e.packageName : (0, c.getURLHost)(e.origin)
                      )
                    ),
                    o.default.createElement(
                      s.Box,
                      {
                        display: i.Display.Flex,
                        justifyContent: i.JustifyContent.flexEnd,
                        alignItems: i.AlignItems.center,
                        style: { flex: "1" },
                        gap: 2
                      },
                      !p &&
                        o.default.createElement(
                          s.Text,
                          { width: i.BlockSize.Max, color: i.TextColor.textAlternative, variant: i.TextVariant.bodyMd },
                          null === (n = e.addresses) || void 0 === n ? void 0 : n.length,
                          " ",
                          (null === (r = e.addresses) || void 0 === r ? void 0 : r.length) > 1
                            ? d("connectedaccounts")
                            : d("connectedaccount")
                        ),
                      o.default.createElement(s.Icon, {
                        display: i.Display.Flex,
                        name: s.IconName.ArrowRight,
                        color: i.IconColor.iconDefault,
                        size: s.IconSize.Sm,
                        backgroundColor: i.BackgroundColor.backgroundDefault
                      })
                    )
                  );
                };
                (n.ConnectionListItem = p), (p.propTypes = { connection: r.default.object.isRequired, onClick: r.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/all-connections/connection-list-item.js" }
    ],
    [
      4567,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Connections = void 0);
                var o,
                  r = (o = e("react")) && o.__esModule ? o : { default: o };
                n.Connections = () => r.default.createElement("div", null);
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/connections/connections.js" }
    ],
    [
      4568,
      { "./connections": 4567 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Connections", {
                    enumerable: !0,
                    get: function () {
                      return o.Connections;
                    }
                  });
                var o = e("./connections");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/connections/index.js" }
    ],
    [
      4569,
      { "./all-connections/all-connections": 4565, "./connections": 4568 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AllConnections", {
                    enumerable: !0,
                    get: function () {
                      return r.AllConnections;
                    }
                  }),
                  Object.defineProperty(n, "Connections", {
                    enumerable: !0,
                    get: function () {
                      return o.Connections;
                    }
                  });
                var o = e("./connections"),
                  r = e("./all-connections/all-connections");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/index.js" }
    ],
    [
      4570,
      {
        "../../../../../../helpers/constants/design-system": 4771,
        "../../../../../component-library": 4453,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Content = void 0);
                var o = l(e("react")),
                  r = l(e("classnames")),
                  a = e("../../../../../component-library"),
                  i = e("../../../../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s() {
                  return (
                    (s = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                n.Content = ({ children: e, className: t = "", ...n }) =>
                  o.default.createElement(
                    a.Box,
                    s(
                      {
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column,
                        width: i.BlockSize.Full,
                        padding: 4,
                        height: i.BlockSize.Full,
                        className: (0, r.default)("multichain-page-content", t)
                      },
                      n
                    ),
                    e
                  );
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/content/content.tsx" }
    ],
    [
      4571,
      { "./content": 4570 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Content", {
                    enumerable: !0,
                    get: function () {
                      return o.Content;
                    }
                  });
                var o = e("./content");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/content/index.ts" }
    ],
    [
      4572,
      {
        "../../../../../../helpers/constants/design-system": 4771,
        "../../../../../component-library": 4453,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Footer = void 0);
                var o = l(e("react")),
                  r = l(e("classnames")),
                  a = e("../../../../../component-library"),
                  i = e("../../../../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s() {
                  return (
                    (s = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                n.Footer = ({ children: e, className: t = "", ...n }) =>
                  o.default.createElement(
                    a.Box,
                    s(
                      {
                        padding: 4,
                        display: i.Display.Flex,
                        width: i.BlockSize.Full,
                        gap: 4,
                        className: (0, r.default)("multichain-page-footer", t)
                      },
                      n
                    ),
                    e
                  );
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/footer/footer.tsx" }
    ],
    [
      4573,
      { "./footer": 4572 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Footer", {
                    enumerable: !0,
                    get: function () {
                      return o.Footer;
                    }
                  });
                var o = e("./footer");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/footer/index.ts" }
    ],
    [
      4574,
      {
        "../../../../../../helpers/constants/design-system": 4771,
        "../../../../../component-library": 4453,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Header = void 0);
                var o = l(e("react")),
                  r = l(e("classnames")),
                  a = e("../../../../../component-library"),
                  i = e("../../../../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s() {
                  return (
                    (s = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                n.Header = ({ children: e, endAccessory: t = null, startAccessory: n = null, className: l = "", ...c }) =>
                  o.default.createElement(
                    a.HeaderBase,
                    s(
                      {
                        padding: 4,
                        width: i.BlockSize.Full,
                        className: (0, r.default)("multichain-page-header", l),
                        startAccessory: n,
                        endAccessory: t
                      },
                      c
                    ),
                    o.default.createElement(
                      a.Text,
                      {
                        display: i.Display.Block,
                        variant: i.TextVariant.bodyMdBold,
                        textAlign: i.TextAlign.Center,
                        paddingInlineStart: 8,
                        paddingInlineEnd: 8,
                        ellipsis: !0
                      },
                      e
                    )
                  );
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/header/header.tsx" }
    ],
    [
      4575,
      { "./header": 4574 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Header", {
                    enumerable: !0,
                    get: function () {
                      return o.Header;
                    }
                  });
                var o = e("./header");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/header/index.ts" }
    ],
    [
      4576,
      { "./components/content": 4571, "./components/footer": 4573, "./components/header": 4575, "./page": 4577 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Content", {
                    enumerable: !0,
                    get: function () {
                      return a.Content;
                    }
                  }),
                  Object.defineProperty(n, "Footer", {
                    enumerable: !0,
                    get: function () {
                      return i.Footer;
                    }
                  }),
                  Object.defineProperty(n, "Header", {
                    enumerable: !0,
                    get: function () {
                      return r.Header;
                    }
                  }),
                  Object.defineProperty(n, "Page", {
                    enumerable: !0,
                    get: function () {
                      return o.Page;
                    }
                  });
                var o = e("./page"),
                  r = e("./components/header"),
                  a = e("./components/content"),
                  i = e("./components/footer");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/index.ts" }
    ],
    [
      4577,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../component-library": 4453,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Page = void 0);
                var o = s(e("react")),
                  r = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("../../../component-library"),
                  l = e("../../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                const u = ({ children: e, className: t = "", ...n }) =>
                  o.default.createElement(
                    i.Box,
                    {
                      width: l.BlockSize.Full,
                      height: l.BlockSize.Full,
                      display: l.Display.Flex,
                      flexDirection: l.FlexDirection.Row,
                      justifyContent: l.JustifyContent.center,
                      backgroundColor: l.BackgroundColor.backgroundAlternative,
                      className: "multichain-page"
                    },
                    o.default.createElement(
                      i.Box,
                      c(
                        {
                          width: l.BlockSize.Full,
                          height: l.BlockSize.Full,
                          display: l.Display.Flex,
                          flexDirection: l.FlexDirection.Column,
                          backgroundColor: l.BackgroundColor.backgroundDefault,
                          className: (0, a.default)("multichain-page__inner-container", t)
                        },
                        n
                      ),
                      e
                    )
                  );
                (n.Page = u), (u.propTypes = { className: r.default.string, children: r.default.node });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/page.tsx" }
    ],
    [
      4578,
      {
        ".": 4582,
        "../../..": 4555,
        "../../../../../contexts/i18n": 4748,
        "../../../../../helpers/constants/design-system": 4771,
        "../../../../../selectors": 5197,
        "../../../../component-library": 4453,
        "../../../account-picker": 4513,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SendPageAccountPicker = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = e("react-redux"),
                  a = e("../../../../../selectors"),
                  i = e("../../../../component-library"),
                  l = e("../../../account-picker"),
                  s = e("../../../../../helpers/constants/design-system"),
                  c = e("../../../../../contexts/i18n"),
                  u = e("../../.."),
                  d = e(".");
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                n.SendPageAccountPicker = () => {
                  const e = (0, o.useContext)(c.I18nContext),
                    t = (0, r.useSelector)(a.getSelectedIdentity),
                    [n, p] = (0, o.useState)(!1);
                  return o.default.createElement(
                    d.SendPageRow,
                    null,
                    o.default.createElement(i.Label, { paddingBottom: 2 }, e("from")),
                    o.default.createElement(l.AccountPicker, {
                      className: "multichain-send-page__account-picker",
                      address: t.address,
                      name: t.name,
                      onClick: () => p(!0),
                      showAddress: !0,
                      borderColor: s.BorderColor.borderDefault,
                      borderWidth: 1,
                      paddingTop: 4,
                      paddingBottom: 4,
                      block: !0,
                      justifyContent: s.JustifyContent.flexStart,
                      addressProps: { display: s.Display.Flex, textAlign: s.TextAlign.Start },
                      labelProps: { style: { flexGrow: 1, textAlign: "start" }, paddingInlineStart: 2 },
                      textProps: { display: s.Display.Flex, width: s.BlockSize.Full },
                      width: s.BlockSize.Full
                    }),
                    n
                      ? o.default.createElement(u.AccountListMenu, {
                          accountListItemProps: { showOptions: !1 },
                          showAccountCreation: !1,
                          onClose: () => p(!1)
                        })
                      : null
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/account-picker.tsx" }
    ],
    [
      4579,
      {
        ".": 4582,
        "../../../../../contexts/i18n": 4748,
        "../../../../../ducks/send": 4765,
        "../../../../../helpers/constants/design-system": 4771,
        "../../../../../helpers/constants/routes": 4776,
        "../../../../../selectors": 5197,
        "../../../../app/contact-list": 4095,
        "../../../../component-library": 4453,
        "fuse.js": 2821,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SendPageAddressBook = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = e("react-redux"),
                  a = m(e("fuse.js")),
                  i = e("../../../../component-library"),
                  l = e("../../../../../contexts/i18n"),
                  s = m(e("../../../../app/contact-list")),
                  c = e("../../../../../selectors"),
                  u = e("../../../../../ducks/send"),
                  d = e("../../../../../helpers/constants/design-system"),
                  p = e("../../../../../helpers/constants/routes"),
                  f = e(".");
                function m(e) {
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
                n.SendPageAddressBook = () => {
                  const e = (0, o.useContext)(l.I18nContext),
                    t = (0, r.useDispatch)(),
                    n = (0, r.useSelector)(c.getAddressBook),
                    m = n.filter(({ name: e }) => Boolean(e)),
                    h = [...(0, r.useSelector)(c.getCurrentNetworkTransactions)].reverse(),
                    g = n
                      .filter(({ name: e }) => !e)
                      .map((e) => {
                        const t = h.find((t) => t.txParams.to === e.address.toLowerCase());
                        return { ...e, timestamp: null == t ? void 0 : t.time };
                      }),
                    y = (0, r.useSelector)(u.getRecipientUserInput),
                    b = new a.default(m, {
                      shouldSort: !0,
                      threshold: 0.45,
                      location: 0,
                      distance: 100,
                      maxPatternLength: 32,
                      minMatchCharLength: 1,
                      keys: [
                        { name: "name", weight: 0.5 },
                        { name: "address", weight: 0.5 }
                      ]
                    }),
                    v = new a.default(g, {
                      shouldSort: !0,
                      threshold: 0.45,
                      location: 0,
                      distance: 100,
                      maxPatternLength: 32,
                      minMatchCharLength: 1,
                      keys: [{ name: "address", weight: 0.5 }]
                    });
                  return o.default.createElement(
                    f.SendPageRow,
                    null,
                    n.length
                      ? o.default.createElement(
                          o.default.Fragment,
                          null,
                          o.default.createElement(s.default, {
                            addressBook: n,
                            searchForContacts: () => (y ? (b.setCollection(m), b.search(y)) : m),
                            searchForRecents: () => (y ? (v.setCollection(g), v.search(y)) : g),
                            selectRecipient: (e = "", n = "") => {
                              ((e = "", n = "", o = "user input") => {
                                t((0, u.addHistoryEntry)(`sendFlow - User clicked recipient from ${o}. address: ${e}, nickname ${n}`)),
                                  t((0, u.updateRecipient)({ address: e, nickname: n })),
                                  t((0, u.updateRecipientUserInput)(e));
                              })(e, n, (n ? "contact" : "recent") + " list");
                            }
                          })
                        )
                      : o.default.createElement(
                          i.Box,
                          { padding: 6, textAlign: d.TextAlign.Center },
                          o.default.createElement(i.Text, { marginBottom: 4, fontWeight: d.FontWeight.Bold }, e("sendNoContactsTitle")),
                          o.default.createElement(
                            i.Text,
                            { color: d.TextColor.textAlternative },
                            e("sendNoContactsDescription", [
                              o.default.createElement(
                                i.Text,
                                { as: "a", href: `#${p.CONTACT_LIST_ROUTE}`, color: d.TextColor.primaryDefault },
                                e("sendNoContactsConversionText")
                              )
                            ])
                          )
                        )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/address-book.tsx" }
    ],
    [
      4580,
      {
        ".": 4582,
        "../../..": 4555,
        "../../../../../../shared/constants/transaction": 3974,
        "../../../../../../shared/modules/conversion.utils": 3988,
        "../../../../../ducks/gas/gas.duck": 4759,
        "../../../../../ducks/metamask/metamask": 4763,
        "../../../../../ducks/send": 4765,
        "../../../../app/advanced-gas-inputs": 4031,
        "../../../../app/confirm-gas-display": 4052,
        "../../../../component-library": 4453,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SendPageContent = void 0);
                var o = h(e("react")),
                  r = e("react-redux"),
                  a = e("../../../../component-library"),
                  i = e("../../../../../ducks/metamask/metamask"),
                  l = e("../../../../../ducks/send"),
                  s = h(e("../../../../app/advanced-gas-inputs")),
                  c = e("../../../../app/confirm-gas-display"),
                  u = e("../../../../../../shared/constants/transaction"),
                  d = e("../../../../../../shared/modules/conversion.utils"),
                  p = e("../../../../../ducks/gas/gas.duck"),
                  f = e("../../.."),
                  m = e(".");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.SendPageContent = () => {
                  const e = (0, r.useSelector)(i.getSendHexDataFeatureFlagState),
                    t = (0, r.useSelector)(l.getSendAsset),
                    n = e && t && t.type !== u.AssetType.token && t.type !== u.AssetType.NFT,
                    h = (0, r.useDispatch)(),
                    g = (0, r.useSelector)(l.getGasPrice),
                    y = (0, r.useSelector)(l.getGasLimit),
                    b = (0, r.useSelector)(l.getMinimumGasLimitForSend),
                    v = (0, d.hexToDecimal)(b),
                    k = (0, r.useSelector)(l.getGasInputMode),
                    _ = (0, r.useSelector)(l.getIsBalanceInsufficient),
                    C = (e) => {
                      h(C(e)), h((0, p.setCustomGasPrice)(e));
                    },
                    w = (e) => {
                      h(w(e)), h((0, p.setCustomGasLimit)(e));
                    };
                  return o.default.createElement(
                    a.Box,
                    null,
                    o.default.createElement(m.SendPageRow, null, o.default.createElement(f.AssetPickerAmount, null)),
                    n ? o.default.createElement(m.SendHexData, null) : null,
                    k === l.GAS_INPUT_MODES.INLINE
                      ? o.default.createElement(
                          m.SendPageRow,
                          null,
                          o.default.createElement(s.default, {
                            updateCustomGasPrice: C,
                            updateCustomGasLimit: w,
                            customGasPrice: g,
                            customGasLimit: y,
                            insufficientBalance: _,
                            minimumGasLimit: v,
                            customPriceIsSafe: !0,
                            isSpeedUp: !1
                          })
                        )
                      : null,
                    o.default.createElement(m.SendPageRow, null, o.default.createElement(c.ConfirmGasDisplay, null))
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/content.tsx" }
    ],
    [
      4581,
      {
        ".": 4582,
        "../../../../../ducks/send": 4765,
        "../../../../../hooks/useI18nContext": 4837,
        "../../../../component-library": 4453,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SendHexData = void 0);
                var o,
                  r = (o = e("react")) && o.__esModule ? o : { default: o },
                  a = e("react-redux"),
                  i = e("../../../../../hooks/useI18nContext"),
                  l = e("../../../../component-library"),
                  s = e("../../../../../ducks/send"),
                  c = e(".");
                n.SendHexData = () => {
                  const e = (0, i.useI18nContext)(),
                    t = (0, a.useDispatch)(),
                    n = (0, a.useSelector)(s.getSendHexData);
                  return r.default.createElement(
                    c.SendPageRow,
                    null,
                    r.default.createElement(l.Label, null, e("hexData")),
                    r.default.createElement("textarea", {
                      onInput: (e) => {
                        const n = e.target.value.replace(/\n/gu, "") || null;
                        t((0, s.updateSendHexData)(n ?? ""));
                      },
                      placeholder: e("optional"),
                      defaultValue: n || "",
                      style: {
                        padding: "8px 16px",
                        borderRadius: "8px",
                        background: "var(--color-background-default)",
                        borderColor: "var(--color-border-default)",
                        color: "var(--color-text-default)"
                      }
                    })
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/hex.tsx" }
    ],
    [
      4582,
      {
        "./account-picker": 4578,
        "./address-book": 4579,
        "./content": 4580,
        "./hex": 4581,
        "./network-picker": 4583,
        "./recipient": 4585,
        "./recipient-input": 4584,
        "./send-page-row": 4586,
        "./your-accounts": 4587
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SendHexData", {
                    enumerable: !0,
                    get: function () {
                      return d.SendHexData;
                    }
                  }),
                  Object.defineProperty(n, "SendPageAccountPicker", {
                    enumerable: !0,
                    get: function () {
                      return r.SendPageAccountPicker;
                    }
                  }),
                  Object.defineProperty(n, "SendPageAddressBook", {
                    enumerable: !0,
                    get: function () {
                      return s.SendPageAddressBook;
                    }
                  }),
                  Object.defineProperty(n, "SendPageContent", {
                    enumerable: !0,
                    get: function () {
                      return u.SendPageContent;
                    }
                  }),
                  Object.defineProperty(n, "SendPageNetworkPicker", {
                    enumerable: !0,
                    get: function () {
                      return a.SendPageNetworkPicker;
                    }
                  }),
                  Object.defineProperty(n, "SendPageRecipient", {
                    enumerable: !0,
                    get: function () {
                      return c.SendPageRecipient;
                    }
                  }),
                  Object.defineProperty(n, "SendPageRecipientInput", {
                    enumerable: !0,
                    get: function () {
                      return l.SendPageRecipientInput;
                    }
                  }),
                  Object.defineProperty(n, "SendPageRow", {
                    enumerable: !0,
                    get: function () {
                      return o.SendPageRow;
                    }
                  }),
                  Object.defineProperty(n, "SendPageYourAccount", {
                    enumerable: !0,
                    get: function () {
                      return i.SendPageYourAccount;
                    }
                  });
                var o = e("./send-page-row"),
                  r = e("./account-picker"),
                  a = e("./network-picker"),
                  i = e("./your-accounts"),
                  l = e("./recipient-input"),
                  s = e("./address-book"),
                  c = e("./recipient"),
                  u = e("./content"),
                  d = e("./hex");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/index.ts" }
    ],
    [
      4583,
      {
        ".": 4582,
        "../../../../../selectors": 5197,
        "../../../../../store/actions": 5204,
        "../../../../component-library": 4453,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SendPageNetworkPicker = void 0);
                var o,
                  r = (o = e("react")) && o.__esModule ? o : { default: o },
                  a = e("react-redux"),
                  i = e("../../../../../selectors"),
                  l = e("../../../../../store/actions"),
                  s = e("../../../../component-library"),
                  c = e(".");
                n.SendPageNetworkPicker = () => {
                  var e;
                  const t = (0, a.useSelector)(i.getCurrentNetwork),
                    n = (0, a.useDispatch)();
                  return r.default.createElement(
                    c.SendPageRow,
                    null,
                    r.default.createElement(s.PickerNetwork, {
                      label: null == t ? void 0 : t.nickname,
                      src: null == t || null === (e = t.rpcPrefs) || void 0 === e ? void 0 : e.imageUrl,
                      onClick: () => n((0, l.toggleNetworkMenu)()),
                      "data-testid": "send-page-network-picker"
                    })
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/network-picker.tsx" }
    ],
    [
      4584,
      {
        ".": 4582,
        "../../../../../../shared/constants/metametrics": 3962,
        "../../../../../contexts/i18n": 4748,
        "../../../../../contexts/metametrics": 4749,
        "../../../../../ducks/send": 4765,
        "../../../../../pages/send/send-content/add-recipient/domain-input": 5017,
        "../../../../../store/actions": 5204,
        "../../../../component-library": 4453,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SendPageRecipientInput = void 0);
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = e("react-redux"),
                  i = e("../../../../component-library"),
                  l = (o = e("../../../../../pages/send/send-content/add-recipient/domain-input")) && o.__esModule ? o : { default: o },
                  s = e("../../../../../contexts/i18n"),
                  c = e("../../../../../ducks/send"),
                  u = e("../../../../../store/actions"),
                  d = e("../../../../../contexts/metametrics"),
                  p = e("../../../../../../shared/constants/metametrics"),
                  f = e(".");
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (m = function (e) {
                    return e ? n : t;
                  })(e);
                }
                n.SendPageRecipientInput = () => {
                  const e = (0, r.useContext)(s.I18nContext),
                    t = (0, a.useDispatch)(),
                    n = (0, r.useContext)(d.MetaMetricsContext),
                    o = (0, a.useSelector)(c.getRecipient),
                    m = (0, a.useSelector)(c.getRecipientUserInput),
                    h = (0, a.useSelector)(c.getIsUsingMyAccountForRecipientSearch);
                  return r.default.createElement(
                    f.SendPageRow,
                    null,
                    r.default.createElement(i.Label, { paddingBottom: 2 }, e("to")),
                    r.default.createElement(l.default, {
                      userInput: m,
                      onChange: (e) => t((0, c.updateRecipientUserInput)(e)),
                      onValidAddressTyped: async (e) => {
                        t((0, c.addHistoryEntry)(`sendFlow - Valid address typed ${e}`)),
                          await t((0, c.updateRecipientUserInput)(e)),
                          t((0, c.updateRecipient)({ address: e, nickname: "" }));
                      },
                      internalSearch: h,
                      selectedAddress: o.address,
                      selectedName: o.nickname,
                      onPaste: (e) => {
                        t((0, c.addHistoryEntry)(`sendFlow - User pasted ${e} into address field`));
                      },
                      onReset: () => t((0, c.resetRecipientInput)()),
                      scanQrCode: () => {
                        n({
                          event: "Used QR scanner",
                          category: p.MetaMetricsEventCategory.Transactions,
                          properties: { action: "Edit Screen", legacy_event: !0 }
                        }),
                          t((0, u.showQrScanner)());
                      }
                    })
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/recipient-input.tsx" }
    ],
    [
      4585,
      {
        ".": 4582,
        "../../../../../contexts/i18n": 4748,
        "../../../../../ducks/domains": 4757,
        "../../../../../ducks/send": 4765,
        "../../../../../selectors": 5197,
        "../../../../component-library": 4453,
        "../../../../ui/confusable": 4624,
        "../../../../ui/tabs": 4719,
        "../../../address-list-item": 4519,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SendPageRecipient = void 0);
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = e("react-redux"),
                  i = e("../../../../../contexts/i18n"),
                  l = e("../../../../../ducks/send"),
                  s = e("../../../../../ducks/domains"),
                  c = e("../../../../component-library"),
                  u = e("../../../../../selectors"),
                  d = (o = e("../../../../ui/confusable")) && o.__esModule ? o : { default: o },
                  p = e("../../../../ui/tabs"),
                  f = e("../../../address-list-item"),
                  m = e(".");
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const g = "contacts",
                  y = "accounts",
                  b = (e, t, n, o) =>
                    r.default.createElement(f.AddressListItem, {
                      address: e,
                      label: r.default.createElement(d.default, { input: t }),
                      onClick: () => {
                        o((0, l.addHistoryEntry)(`sendFlow - User clicked recipient from ${n}. address: ${e}, nickname ${t}`)),
                          o((0, l.updateRecipient)({ address: e, nickname: t })),
                          o((0, l.updateRecipientUserInput)(e));
                      }
                    });
                n.SendPageRecipient = () => {
                  const e = (0, r.useContext)(i.I18nContext),
                    t = (0, a.useDispatch)(),
                    n = (0, a.useSelector)(l.getRecipient),
                    o = (0, a.useSelector)(l.getRecipientUserInput),
                    d = (0, a.useSelector)(s.getDomainResolution),
                    f = (0, a.useSelector)(s.getDomainError),
                    h = (0, a.useSelector)(s.getDomainWarning);
                  let v = "";
                  const k = (0, a.useSelector)((e) => (0, u.getAddressBookEntry)(e, d));
                  d && null != k && k.name && (v = k.name);
                  const _ = f || (n.error && "required" !== n.error),
                    C = !_ && (h || n.warning);
                  let w;
                  return (
                    (w = n.address
                      ? b(n.address, n.nickname, "validated user input", t)
                      : d && !n.error
                      ? b(d, v ?? o, "ENS resolution", t)
                      : r.default.createElement(
                          p.Tabs,
                          { defaultActiveTabKey: o ? g : y },
                          r.default.createElement(
                            p.Tab,
                            { tabKey: y, name: e("yourAccounts") },
                            r.default.createElement(m.SendPageYourAccount, null)
                          ),
                          r.default.createElement(
                            p.Tab,
                            { tabKey: g, name: e("contacts") },
                            r.default.createElement(m.SendPageAddressBook, null)
                          )
                        )),
                    r.default.createElement(
                      r.default.Fragment,
                      null,
                      _
                        ? r.default.createElement(
                            m.SendPageRow,
                            null,
                            r.default.createElement(c.BannerAlert, { severity: c.BannerAlertSeverity.Danger }, e(f ?? n.error))
                          )
                        : null,
                      C
                        ? r.default.createElement(
                            m.SendPageRow,
                            null,
                            r.default.createElement(c.BannerAlert, { severity: c.BannerAlertSeverity.Warning }, e(h ?? n.warning))
                          )
                        : null,
                      r.default.createElement(c.Box, { className: "multichain-send-page__recipient" }, w)
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/recipient.tsx" }
    ],
    [
      4586,
      { "../../../../../helpers/constants/design-system": 4771, "../../../../component-library": 4453, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SendPageRow = void 0);
                var o,
                  r = (o = e("react")) && o.__esModule ? o : { default: o },
                  a = e("../../../../component-library"),
                  i = e("../../../../../helpers/constants/design-system");
                n.SendPageRow = ({ children: e }) =>
                  r.default.createElement(a.Box, { display: i.Display.Flex, paddingBottom: 6, flexDirection: i.FlexDirection.Column }, e);
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/send-page-row.tsx" }
    ],
    [
      4587,
      {
        ".": 4582,
        "../../..": 4555,
        "../../../../../ducks/send": 4765,
        "../../../../../selectors": 5197,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SendPageYourAccount = void 0);
                var o,
                  r = (o = e("react")) && o.__esModule ? o : { default: o },
                  a = e("react-redux"),
                  i = e("../../../../../selectors"),
                  l = e("../../.."),
                  s = e("../../../../../ducks/send"),
                  c = e(".");
                n.SendPageYourAccount = () => {
                  const e = (0, a.useDispatch)(),
                    t = (0, a.useSelector)(i.getMetaMaskAccountsOrdered);
                  return r.default.createElement(
                    c.SendPageRow,
                    null,
                    t.map((t) =>
                      r.default.createElement(l.AccountListItem, {
                        identity: t,
                        key: t.address,
                        onClick: () => {
                          e(
                            (0, s.addHistoryEntry)(
                              `sendFlow - User clicked recipient from my accounts. address: ${t.address}, nickname ${t.name}`
                            )
                          ),
                            e((0, s.updateRecipient)({ address: t.address, nickname: t.name })),
                            e((0, s.updateRecipientUserInput)(t.address));
                        }
                      })
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/your-accounts.tsx" }
    ],
    [
      4588,
      { "./send": 4589 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SendPage", {
                    enumerable: !0,
                    get: function () {
                      return o.SendPage;
                    }
                  });
                var o = e("./send");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/index.js" }
    ],
    [
      4589,
      {
        "../../../../../shared/constants/metametrics": 3962,
        "../../../../../shared/constants/transaction": 3974,
        "../../../../contexts/i18n": 4748,
        "../../../../contexts/metametrics": 4749,
        "../../../../ducks/history/history": 4760,
        "../../../../ducks/send": 4765,
        "../../../../helpers/constants/routes": 4776,
        "../../../../pages/send/send.constants": 5046,
        "../../../../store/actions": 5204,
        "../../../component-library": 4453,
        "../page": 4576,
        "./components": 4582,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SendPage = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = e("react-redux"),
                  a = e("react-router-dom"),
                  i = e("../../../../contexts/i18n"),
                  l = e("../../../component-library"),
                  s = e("../page"),
                  c = e("../../../../ducks/send"),
                  u = e("../../../../../shared/constants/transaction"),
                  d = e("../../../../contexts/metametrics"),
                  p = e("../../../../pages/send/send.constants"),
                  f = e("../../../../store/actions"),
                  m = e("../../../../helpers/constants/routes"),
                  h = e("../../../../../shared/constants/metametrics"),
                  g = e("../../../../ducks/history/history"),
                  y = e("./components");
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                n.SendPage = () => {
                  const e = (0, o.useContext)(i.I18nContext),
                    t = (0, r.useDispatch)(),
                    n = (0, o.useRef)(!1),
                    b = (0, r.useSelector)(c.getDraftTransactionExists),
                    v = (0, r.useSelector)(c.getDraftTransactionID),
                    k = (0, r.useSelector)(g.getMostRecentOverviewPage),
                    _ = (0, r.useSelector)(c.getSendStage),
                    C = (0, a.useHistory)(),
                    w = (0, a.useLocation)(),
                    T = (0, o.useContext)(d.MetaMetricsContext),
                    x = (0, o.useCallback)(() => {
                      t((0, c.resetSendState)());
                    }, [t]);
                  (0, o.useEffect)(() => {
                    !1 === b && !1 === n.current && ((n.current = !0), t((0, c.startNewDraftTransaction)({ type: u.AssetType.native })));
                  }, [b, t]),
                    (0, o.useEffect)(() => {
                      window.addEventListener("beforeunload", x);
                    }, [x]),
                    (0, o.useEffect)(() => {
                      if ("?scan=true" === w.search) {
                        t((0, f.showQrScanner)());
                        const [e] = window.location.href.split("?");
                        window.history.pushState({}, null, `${e}`), (window.location.hash = "#send");
                      }
                    }, [w, t]),
                    (0, o.useEffect)(
                      () => () => {
                        t((0, c.resetSendState)()), window.removeEventListener("beforeunload", x);
                      },
                      [t, x]
                    );
                  const E = () => {
                      v && t((0, f.cancelTx)({ id: v })), t((0, c.resetSendState)());
                      const e = _ === c.SEND_STAGES.EDIT ? m.DEFAULT_ROUTE : k;
                      C.push(e);
                    },
                    O = (0, r.useSelector)(c.getSendErrors),
                    M = (0, r.useSelector)(c.isSendFormInvalid) && O.gasFee !== p.INSUFFICIENT_FUNDS_ERROR;
                  return o.default.createElement(
                    s.Page,
                    { className: "multichain-send-page" },
                    o.default.createElement(
                      s.Header,
                      {
                        startAccessory: o.default.createElement(l.ButtonIcon, {
                          size: l.ButtonIconSize.Sm,
                          ariaLabel: e("back"),
                          iconName: l.IconName.ArrowLeft,
                          onClick: E
                        })
                      },
                      e("sendAToken")
                    ),
                    o.default.createElement(
                      s.Content,
                      null,
                      o.default.createElement(y.SendPageNetworkPicker, null),
                      o.default.createElement(y.SendPageAccountPicker, null),
                      o.default.createElement(y.SendPageRecipientInput, null),
                      b && [c.SEND_STAGES.EDIT, c.SEND_STAGES.DRAFT].includes(_)
                        ? o.default.createElement(y.SendPageContent, null)
                        : o.default.createElement(y.SendPageRecipient, null)
                    ),
                    o.default.createElement(
                      s.Footer,
                      null,
                      o.default.createElement(
                        l.ButtonSecondary,
                        { onClick: E, size: l.ButtonSecondarySize.Lg, block: !0 },
                        _ === c.SEND_STAGES.EDIT ? e("reject") : e("cancel")
                      ),
                      o.default.createElement(
                        l.ButtonPrimary,
                        {
                          onClick: async (e) => {
                            e.preventDefault(),
                              await t((0, c.signTransaction)()),
                              T({
                                category: h.MetaMetricsEventCategory.Transactions,
                                event: "Complete",
                                properties: { action: "Edit Screen", legacy_event: !0 }
                              }),
                              C.push(m.CONFIRM_TRANSACTION_ROUTE);
                          },
                          size: l.ButtonPrimarySize.Lg,
                          disabled: M,
                          block: !0
                        },
                        e("continue")
                      )
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/send.js" }
    ],
    [
      4590,
      { "./product-tour-popover": 4591 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ProductTour", {
                    enumerable: !0,
                    get: function () {
                      return o.ProductTour;
                    }
                  });
                var o = e("./product-tour-popover");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/product-tour-popover/index.js" }
    ],
    [
      4591,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../../ui/menu": 4681,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ProductTour = void 0);
                var o = u(e("react")),
                  r = u(e("classnames")),
                  a = u(e("prop-types")),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../component-library"),
                  s = e("../../../hooks/useI18nContext"),
                  c = e("../../ui/menu");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                const p = ({
                  className: e,
                  prevIcon: t,
                  title: n,
                  description: a,
                  currentStep: u,
                  totalSteps: p,
                  positionObj: f = "5%",
                  closeMenu: m,
                  anchorElement: h,
                  onClick: g,
                  prevClick: y,
                  productTourDirection: b,
                  ...v
                }) => {
                  const k = (0, s.useI18nContext)();
                  return o.default.createElement(
                    c.Menu,
                    d(
                      {
                        className: (0, r.default)("multichain-product-tour-menu", { "multichain-product-tour-menu--rtl": "rtl" === b }, e),
                        anchorElement: h,
                        onHide: m,
                        "data-testid": "multichain-product-tour-menu-popover"
                      },
                      v
                    ),
                    o.default.createElement(
                      l.Box,
                      {
                        className: "multichain-product-tour-menu__container",
                        backgroundColor: i.BackgroundColor.infoDefault,
                        borderRadius: i.BorderRadius.LG,
                        padding: 4
                      },
                      o.default.createElement(l.Box, {
                        borderWidth: 1,
                        className: "multichain-product-tour-menu__arrow",
                        display: i.Display.Flex,
                        justifyContent: i.JustifyContent.center,
                        alignItems: i.AlignItems.center,
                        style: { right: f }
                      }),
                      o.default.createElement(
                        l.Box,
                        { display: i.Display.Flex, alignItems: i.AlignItems.center, className: "multichain-product-tour-menu__header" },
                        t
                          ? o.default.createElement(l.ButtonIcon, {
                              iconName: l.IconName.ArrowLeft,
                              size: i.Size.SM,
                              color: i.IconColor.infoInverse,
                              onClick: y,
                              className: "multichain-product-tour-menu__previous-icon",
                              "data-testid": "multichain-product-tour-menu-popover-prevIcon"
                            })
                          : null,
                        o.default.createElement(
                          l.Text,
                          {
                            textAlign: i.TextAlign.Center,
                            variant: i.TextVariant.headingSm,
                            width: i.BlockSize.Full,
                            color: i.TextColor.infoInverse
                          },
                          n
                        )
                      ),
                      o.default.createElement(
                        l.Text,
                        { paddingBottom: 2, paddingTop: 2, color: i.TextColor.infoInverse, variant: i.TextVariant.bodyMd },
                        a
                      ),
                      o.default.createElement(
                        l.Box,
                        { display: i.Display.Flex, alignItems: i.AlignItems.center, justifyContent: i.JustifyContent.spaceBetween },
                        o.default.createElement(
                          l.Text,
                          { paddingBottom: 2, paddingTop: 2, color: i.TextColor.infoInverse, variant: i.TextVariant.bodyMd },
                          u,
                          "/",
                          p
                        ),
                        o.default.createElement(
                          l.ButtonBase,
                          {
                            backgroundColor: i.BackgroundColor.primaryInverse,
                            color: i.TextColor.primaryDefault,
                            className: "multichain-product-tour-menu__button",
                            onClick: g
                          },
                          k("recoveryPhraseReminderConfirm")
                        )
                      )
                    )
                  );
                };
                (n.ProductTour = p),
                  (p.propTypes = {
                    anchorElement: a.default.instanceOf(window.Element),
                    closeMenu: a.default.func.isRequired,
                    className: a.default.string,
                    prevIcon: a.default.bool,
                    title: a.default.string,
                    description: a.default.string,
                    currentStep: a.default.string,
                    totalSteps: a.default.string,
                    positionObj: a.default.string,
                    onClick: a.default.func,
                    prevClick: a.default.func,
                    productTourDirection: a.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/product-tour-popover/product-tour-popover.js" }
    ],
    [
      4592,
      { "./receive-modal": 4593 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ReceiveModal", {
                    enumerable: !0,
                    get: function () {
                      return o.ReceiveModal;
                    }
                  });
                var o = e("./receive-modal");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/receive-modal/index.js" }
    ],
    [
      4593,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../../ui/qr-code": 4703,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ReceiveModal = void 0);
                var o = d(e("react")),
                  r = e("react-redux"),
                  a = d(e("prop-types")),
                  i = e("../../component-library"),
                  l = d(e("../../ui/qr-code")),
                  s = e("../../../hooks/useI18nContext"),
                  c = e("../../../selectors"),
                  u = e("../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({ address: e, onClose: t }) => {
                  const n = (0, s.useI18nContext)(),
                    a = (0, r.useSelector)(c.getUseBlockie),
                    d = (0, r.useSelector)(c.getMetaMaskAccountsOrdered),
                    { name: p } = d.find((t) => t.address === e);
                  return o.default.createElement(
                    i.Modal,
                    { isOpen: !0, onClose: t },
                    o.default.createElement(i.ModalOverlay, null),
                    o.default.createElement(
                      i.ModalContent,
                      null,
                      o.default.createElement(i.ModalHeader, { marginBottom: 4, onClose: t }, n("receive")),
                      o.default.createElement(
                        i.Box,
                        { display: u.Display.Flex, width: u.BlockSize.Full, justifyContent: u.JustifyContent.center },
                        o.default.createElement(i.AvatarAccount, {
                          variant: a ? i.AvatarAccountVariant.Blockies : i.AvatarAccountVariant.Jazzicon,
                          address: e,
                          size: i.AvatarAccountSize.Lg
                        })
                      ),
                      o.default.createElement(
                        i.Text,
                        { marginTop: 4, variant: u.TextVariant.bodyLgMedium, textAlign: u.TextAlign.Center },
                        p
                      ),
                      o.default.createElement(
                        i.Box,
                        { display: u.Display.Flex, alignItems: u.AlignItems.center, flexDirection: u.FlexDirection.Column },
                        o.default.createElement(l.default, { Qr: { data: e } })
                      )
                    )
                  );
                };
                (n.ReceiveModal = p), (p.propTypes = { address: a.default.string.isRequired, onClose: a.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/receive-modal/receive-modal.js" }
    ],
    [
      4594,
      { "./select-action-modal-item": 4595 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SelectActionModalItem", {
                    enumerable: !0,
                    get: function () {
                      return o.SelectActionModalItem;
                    }
                  });
                var o = e("./select-action-modal-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/select-action-modal-item/index.js" }
    ],
    [
      4595,
      { "../../../helpers/constants/design-system": 4771, "../../component-library": 4453, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SelectActionModalItem = void 0);
                var o = l(e("react")),
                  r = l(e("prop-types")),
                  a = e("../../../helpers/constants/design-system"),
                  i = e("../../component-library");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s() {
                  return (
                    (s = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                const c = ({ actionIcon: e, onClick: t, showIcon: n, primaryText: r, secondaryText: l, disabled: c, ...u }) =>
                  c
                    ? null
                    : o.default.createElement(
                        i.Box,
                        s(
                          {
                            padding: 4,
                            gap: 4,
                            display: a.Display.Flex,
                            flexDirection: a.FlexDirection.Row,
                            as: "button",
                            backgroundColor: a.BackgroundColor.transparent,
                            onClick: (e) => {
                              e.preventDefault(), t();
                            },
                            className: "select-action-modal-item",
                            "data-testid": "select-action-modal-item",
                            width: a.BlockSize.Full
                          },
                          u
                        ),
                        o.default.createElement(
                          i.Box,
                          null,
                          o.default.createElement(i.AvatarIcon, {
                            iconName: e,
                            color: a.IconColor.primaryInverse,
                            backgroundColor: a.BackgroundColor.primaryDefault,
                            size: i.AvatarIconSize.Md,
                            className: "select-action-modal-item__avatar"
                          })
                        ),
                        o.default.createElement(
                          i.Box,
                          { display: a.Display.Flex, flexDirection: a.FlexDirection.Column },
                          o.default.createElement(
                            i.Box,
                            { display: a.Display.Flex, flexDirection: a.FlexDirection.Row, gap: 2, alignItems: a.AlignItems.center },
                            o.default.createElement(i.Text, { variant: a.TextVariant.bodyLgMedium, textAlign: a.TextAlign.Left }, r),
                            n &&
                              o.default.createElement(i.Icon, {
                                name: i.IconName.Export,
                                size: i.IconSize.Xs,
                                color: a.IconColor.iconAlternative
                              })
                          ),
                          o.default.createElement(i.Text, { variant: a.TextVariant.bodyMd, textAlign: a.TextAlign.Left }, l)
                        )
                      );
                (n.SelectActionModalItem = c),
                  (c.propTypes = {
                    showIcon: r.default.bool,
                    onClick: r.default.func.isRequired,
                    actionIcon: r.default.string.isRequired,
                    primaryText: r.default.string.isRequired,
                    secondaryText: r.default.string.isRequired,
                    disabled: r.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/select-action-modal-item/select-action-modal-item.js" }
    ],
    [
      4596,
      { "./select-action-modal": 4597 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SelectActionModal", {
                    enumerable: !0,
                    get: function () {
                      return o.SelectActionModal;
                    }
                  });
                var o = e("./select-action-modal");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/select-action-modal/index.js" }
    ],
    [
      4597,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/network": 3963,
        "../../../../shared/constants/transaction": 3974,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/send": 4765,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/hardware": 4798,
        "../../../helpers/utils/portfolio": 4807,
        "../../../hooks/experiences/useRamps": 4815,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../select-action-modal-item": 4594,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SelectActionModal = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = C(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = _(e("prop-types")),
                  a = e("react-redux"),
                  i = e("react-router-dom"),
                  l = e("../../component-library"),
                  s = e("../select-action-modal-item"),
                  c = _(e("../../../hooks/experiences/useRamps")),
                  u = e("../../../helpers/utils/portfolio"),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../../shared/constants/metametrics"),
                  f = e("../../../selectors"),
                  m = e("../../../helpers/constants/routes"),
                  h = e("../../../ducks/send"),
                  g = e("../../../contexts/i18n"),
                  y = e("../../../../shared/constants/transaction"),
                  b = e("../../../ducks/swaps/swaps"),
                  v = e("../../../helpers/utils/hardware"),
                  k = e("../../../../shared/constants/network");
                function _(e) {
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
                const w = ({ onClose: e }) => {
                  const t = (0, a.useDispatch)(),
                    n = (0, o.useContext)(g.I18nContext),
                    r = (0, o.useContext)(d.MetaMetricsContext),
                    _ = (0, i.useHistory)(),
                    C = (0, a.useSelector)(f.getCurrentChainId),
                    w = (0, a.useSelector)(f.getIsSwapsChain),
                    T = (0, i.useLocation)(),
                    { openBuyCryptoInPdapp: x } = (0, c.default)(),
                    E = (0, a.useSelector)(f.getSwapsDefaultToken),
                    O = (0, a.useSelector)(f.getCurrentKeyring),
                    M = (0, v.isHardwareKeyring)(null == O ? void 0 : O.type),
                    j = (0, a.useSelector)(f.getIsBridgeChain),
                    P = (0, a.useSelector)(f.getMetaMetricsId),
                    N = (0, a.useSelector)(f.getIsBuyableChain);
                  return o.default.createElement(
                    l.Modal,
                    { isOpen: !0, onClose: e, className: "select-action-modal", "data-testid": "select-action-modal" },
                    o.default.createElement(l.ModalOverlay, null),
                    o.default.createElement(
                      l.ModalContent,
                      { modalDialogProps: { paddingLeft: 0, paddingRight: 0 } },
                      o.default.createElement(l.ModalHeader, { onClose: e, paddingRight: 4 }, n("selectAnAction")),
                      o.default.createElement(
                        l.Box,
                        { className: "select-action-modal__container", marginTop: 6 },
                        o.default.createElement(s.SelectActionModalItem, {
                          actionIcon: l.IconName.PlusMinus,
                          showIcon: !0,
                          primaryText: n("buyAndSell"),
                          secondaryText: n("buyAndSellDescription"),
                          disabled: !N,
                          tooltipTitle: n("buyAndSellDisabled"),
                          onClick: () => {
                            x(),
                              r({
                                event: p.MetaMetricsEventName.NavBuyButtonClicked,
                                category: p.MetaMetricsEventCategory.Navigation,
                                properties: { location: "Home", text: "Buy", chain_id: C, token_symbol: E }
                              }),
                              e();
                          }
                        }),
                        o.default.createElement(s.SelectActionModalItem, {
                          actionIcon: l.IconName.SwapHorizontal,
                          primaryText: n("swap"),
                          secondaryText: n("swapDescription"),
                          disabled: !w,
                          tooltipTitle: n("swapDisabled"),
                          onClick: () => {
                            w &&
                              (r({
                                event: p.MetaMetricsEventName.NavSwapButtonClicked,
                                category: p.MetaMetricsEventCategory.Swaps,
                                properties: {
                                  token_symbol: k.CURRENCY_SYMBOLS.ETH,
                                  location: p.MetaMetricsSwapsEventSource.MainView,
                                  text: "Swap",
                                  chain_id: C
                                }
                              }),
                              t((0, b.setSwapsFromToken)(E)),
                              M ? global.platform.openExtensionInBrowser(m.BUILD_QUOTE_ROUTE) : _.push(m.BUILD_QUOTE_ROUTE)),
                              e();
                          },
                          "data-testid": "select-action-modal-item-swap"
                        }),
                        o.default.createElement(s.SelectActionModalItem, {
                          actionIcon: l.IconName.Arrow2UpRight,
                          primaryText: n("send"),
                          secondaryText: n("sendDescription"),
                          onClick: async () => {
                            r({
                              event: p.MetaMetricsEventName.NavSendButtonClicked,
                              category: p.MetaMetricsEventCategory.Navigation,
                              properties: { token_symbol: k.CURRENCY_SYMBOLS.ETH, location: "Home", text: "Send", chain_id: C }
                            }),
                              await t((0, h.startNewDraftTransaction)({ type: y.AssetType.native })),
                              _.push(m.SEND_ROUTE),
                              e();
                          },
                          "data-testid": "select-action-modal-item-send"
                        }),
                        o.default.createElement(s.SelectActionModalItem, {
                          actionIcon: l.IconName.Arrow2UpRight,
                          showIcon: !0,
                          primaryText: n("bridge"),
                          secondaryText: n("bridgeDescription"),
                          disabled: !j,
                          tooltipTitle: n("bridgeDisabled"),
                          onClick: () => {
                            if (j) {
                              const e = (0, u.getPortfolioUrl)("bridge", "ext_bridge_button", P);
                              global.platform.openTab({ url: `${e}${T.pathname.includes("asset") ? "&token=native" : ""}` }),
                                r({
                                  category: p.MetaMetricsEventCategory.Navigation,
                                  event: p.MetaMetricsEventName.BridgeLinkClicked,
                                  properties: { location: "Home", text: "Bridge", chain_id: C, token_symbol: k.CURRENCY_SYMBOLS.ETH }
                                });
                            }
                            e();
                          }
                        })
                      )
                    )
                  );
                };
                (n.SelectActionModal = w), (w.propTypes = { onClose: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/select-action-modal/select-action-modal.js" }
    ],
    [
      4598,
      { "./token-list-item": 4599 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "TokenListItem", {
                    enumerable: !0,
                    get: function () {
                      return o.TokenListItem;
                    }
                  });
                var o = e("./token-list-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/token-list-item/index.js" }
    ],
    [
      4599,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/network": 3963,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/tooltip": 4736,
        classnames: 2414,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.TokenListItem = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = C(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = _(e("prop-types")),
                  a = e("react-redux"),
                  i = e("react-router-dom"),
                  l = _(e("classnames")),
                  s = e("../../../helpers/constants/design-system"),
                  c = e("../../component-library"),
                  u = e("../../../selectors"),
                  d = _(e("../../ui/tooltip")),
                  p = e("../../../hooks/useI18nContext"),
                  f = e("../../../contexts/metametrics"),
                  m = e("../../../../shared/constants/metametrics"),
                  h = e("../../../../shared/constants/network"),
                  g = e("../../../helpers/constants/routes"),
                  y = e("../../../store/actions"),
                  b = e("../../../../shared/constants/app"),
                  v = e("../../../../app/scripts/lib/util"),
                  k = e("../../../ducks/metamask/metamask");
                function _(e) {
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
                const w = ({
                  className: e,
                  onClick: t,
                  tokenSymbol: n,
                  tokenImage: r,
                  primary: _,
                  secondary: C,
                  title: w,
                  isOriginalTokenSymbol: T,
                  isNativeCurrency: x = !1
                }) => {
                  var E;
                  const O = (0, p.useI18nContext)(),
                    M = (0, a.useSelector)(u.getNativeCurrencyImage),
                    j = (0, o.useContext)(f.MetaMetricsContext),
                    P = (0, a.useSelector)(u.getCurrentChainId),
                    N = x && !T,
                    I = (0, a.useDispatch)(),
                    [S, A] = (0, o.useState)(!1),
                    D = (0, v.getEnvironmentType)(),
                    B = (0, a.useSelector)(k.getProviderConfig),
                    $ = D === b.ENVIRONMENT_TYPE_FULLSCREEN,
                    R = (0, i.useHistory)(),
                    L = w === h.CURRENCY_SYMBOLS.ETH && T ? O("networkNameEthereum") : w,
                    F = (0, a.useSelector)(u.getCurrentNetwork),
                    V = (0, a.useSelector)(u.getTestNetworkBackgroundColor);
                  return o.default.createElement(
                    c.Box,
                    {
                      className: (0, l.default)("multichain-token-list-item", e),
                      display: s.Display.Flex,
                      flexDirection: s.FlexDirection.Column,
                      gap: 4,
                      "data-testid": "multichain-token-list-item"
                    },
                    o.default.createElement(
                      c.Box,
                      {
                        className: "multichain-token-list-item__container-cell",
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Row,
                        padding: 4,
                        as: "a",
                        "data-testid": "multichain-token-list-button",
                        href: "#",
                        onClick: (e) => {
                          e.preventDefault(),
                            S ||
                              (t(),
                              j({
                                category: m.MetaMetricsEventCategory.Tokens,
                                event: m.MetaMetricsEventName.TokenDetailsOpened,
                                properties: { location: "Home", chain_id: P, token_symbol: n }
                              }));
                        }
                      },
                      o.default.createElement(
                        c.BadgeWrapper,
                        {
                          badge: o.default.createElement(c.AvatarNetwork, {
                            size: c.AvatarNetworkSize.Xs,
                            name: null == F ? void 0 : F.nickname,
                            src: null == F || null === (E = F.rpcPrefs) || void 0 === E ? void 0 : E.imageUrl,
                            backgroundColor: V,
                            borderColor: M ? s.BorderColor.borderMuted : s.BorderColor.borderDefault
                          }),
                          marginRight: 3
                        },
                        o.default.createElement(c.AvatarToken, {
                          name: n,
                          src: r,
                          showHalo: !0,
                          borderColor: r ? s.BorderColor.transparent : s.BorderColor.borderDefault
                        })
                      ),
                      o.default.createElement(
                        c.Box,
                        {
                          className: "multichain-token-list-item__container-cell--text-container",
                          display: s.Display.Flex,
                          flexDirection: s.FlexDirection.Column,
                          width: s.BlockSize.Full,
                          style: { flexGrow: 1, overflow: "hidden" }
                        },
                        o.default.createElement(
                          c.Box,
                          { display: s.Display.Flex, justifyContent: s.JustifyContent.spaceBetween, gap: 1 },
                          o.default.createElement(
                            c.Box,
                            { width: s.BlockSize.OneThird },
                            (null == w ? void 0 : w.length) > 12
                              ? o.default.createElement(
                                  d.default,
                                  {
                                    position: "bottom",
                                    interactive: !0,
                                    html: w,
                                    tooltipInnerClassName: "multichain-token-list-item__tooltip"
                                  },
                                  o.default.createElement(
                                    c.Text,
                                    { fontWeight: s.FontWeight.Medium, variant: s.TextVariant.bodyMd, ellipsis: !0 },
                                    L
                                  )
                                )
                              : o.default.createElement(
                                  c.Text,
                                  { fontWeight: s.FontWeight.Medium, variant: s.TextVariant.bodyMd, ellipsis: !0 },
                                  L
                                )
                          ),
                          N
                            ? o.default.createElement(c.ButtonIcon, {
                                iconName: c.IconName.Danger,
                                onClick: (e) => {
                                  e.preventDefault(), e.stopPropagation(), A(!0);
                                },
                                color: s.IconColor.errorDefault,
                                size: c.IconSize.Lg,
                                backgroundColor: s.BackgroundColor.transparent
                              })
                            : o.default.createElement(
                                c.Text,
                                {
                                  fontWeight: s.FontWeight.Medium,
                                  variant: s.TextVariant.bodyMd,
                                  width: s.BlockSize.TwoThirds,
                                  textAlign: s.TextAlign.End,
                                  "data-testid": "multichain-token-list-item-secondary-value"
                                },
                                C
                              )
                        ),
                        o.default.createElement(
                          c.Text,
                          { color: s.TextColor.textAlternative, "data-testid": "multichain-token-list-item-value" },
                          _,
                          " ",
                          n,
                          " "
                        )
                      )
                    ),
                    S
                      ? o.default.createElement(
                          c.Modal,
                          { isOpen: !0 },
                          o.default.createElement(c.ModalOverlay, null),
                          o.default.createElement(
                            c.ModalContent,
                            null,
                            o.default.createElement(c.ModalHeader, { onClose: () => A(!1) }, O("nativeTokenScamWarningTitle")),
                            o.default.createElement(c.Box, { marginTop: 4, marginBottom: 4 }, O("nativeTokenScamWarningDescription", [n])),
                            o.default.createElement(
                              c.Box,
                              null,
                              o.default.createElement(
                                c.ButtonSecondary,
                                {
                                  onClick: () => {
                                    I((0, y.setSelectedNetworkConfigurationId)(B.id)),
                                      $ ? R.push(g.NETWORKS_ROUTE) : global.platform.openExtensionInBrowser(g.NETWORKS_ROUTE);
                                  },
                                  block: !0
                                },
                                O("nativeTokenScamWarningConversion")
                              )
                            )
                          )
                        )
                      : null
                  );
                };
                (n.TokenListItem = w),
                  (w.propTypes = {
                    className: r.default.string,
                    onClick: r.default.func,
                    tokenSymbol: r.default.string,
                    title: r.default.string,
                    tokenImage: r.default.string,
                    primary: r.default.string,
                    secondary: r.default.string,
                    isOriginalTokenSymbol: r.default.bool,
                    isNativeCurrency: r.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/token-list-item/token-list-item.js" }
    ],
    [
      4600,
      {
        "../../../helpers/constants/common": 4769,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../app/user-preferenced-currency-display": 4378,
        "../../component-library": 4453,
        "../check-box": 4617,
        "../identicon": 4664,
        "../tooltip": 4736,
        classnames: 2414,
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
                var o = y(e("react")),
                  r = h(e("prop-types")),
                  a = h(e("classnames")),
                  i = e("lodash"),
                  l = e("../../../hooks/useI18nContext"),
                  s = y(e("../check-box")),
                  c = h(e("../identicon")),
                  u = h(e("../../app/user-preferenced-currency-display")),
                  d = e("../../../helpers/constants/common"),
                  p = h(e("../tooltip")),
                  f = e("../../component-library"),
                  m = e("../../../helpers/constants/design-system");
                function h(e) {
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
                function y(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = g(t);
                  if (n && n.has(e)) return n.get(e);
                  var o = { __proto__: null },
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                      var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                      i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                    }
                  return (o.default = e), n && n.set(e, o), o;
                }
                const b = ({
                  selectNewAccountViaModal: e,
                  accounts: t,
                  addressLastConnectedMap: n,
                  selectedAccounts: r,
                  nativeCurrency: i,
                  allAreSelected: h,
                  deselectAll: g,
                  selectAll: y,
                  handleAccountClick: b
                }) => {
                  const v = (0, l.useI18nContext)(),
                    k = (0, o.useRef)(null);
                  (0, o.useLayoutEffect)(() => {
                    var e;
                    null === (e = k.current) || void 0 === e || e.scrollIntoView({ behavior: "smooth" });
                  }, [r]);
                  const _ = () => {
                      let n;
                      return (
                        (n = h() ? s.CHECKED : 0 === r.size ? s.UNCHECKED : s.INDETERMINATE),
                        o.default.createElement(
                          "div",
                          {
                            className: (0, a.default)({
                              "choose-account-list__header--one-item": 1 === t.length,
                              "choose-account-list__header--multiple-items": t.length > 1
                            })
                          },
                          t.length > 1
                            ? o.default.createElement(
                                "div",
                                { className: "choose-account-list__select-all" },
                                o.default.createElement(s.default, {
                                  className: "choose-account-list__header-check-box",
                                  checked: n,
                                  onClick: () => (h() ? g() : y())
                                }),
                                o.default.createElement("div", { className: "choose-account-list__text-grey" }, v("selectAll")),
                                o.default.createElement(
                                  p.default,
                                  {
                                    position: "bottom",
                                    html: o.default.createElement("div", { style: { width: 200, padding: 4 } }, v("selectingAllWillAllow"))
                                  },
                                  o.default.createElement(f.Icon, {
                                    name: f.IconName.Info,
                                    color: m.IconColor.iconMuted,
                                    className: "info-circle",
                                    marginInlineStart: 2
                                  })
                                )
                              )
                            : null,
                          o.default.createElement(
                            "div",
                            { className: "choose-account-list__text-blue", onClick: () => e(b) },
                            v("newAccount")
                          )
                        )
                      );
                    },
                    C = () =>
                      o.default.createElement(
                        "div",
                        { className: "choose-account-list__wrapper" },
                        o.default.createElement(
                          "div",
                          { className: "choose-account-list__list" },
                          t.map((e, t) => {
                            const { address: a, addressLabel: l, balance: h } = e,
                              g = r.has(a);
                            return o.default.createElement(
                              "div",
                              {
                                key: `choose-account-list-${t}`,
                                onClick: () => b(a),
                                className: "choose-account-list__account",
                                ref: g ? k : null
                              },
                              o.default.createElement(
                                "div",
                                { className: "choose-account-list__account-info-wrapper" },
                                o.default.createElement(s.default, { className: "choose-account-list__list-check-box", checked: g }),
                                o.default.createElement(c.default, { diameter: 34, address: a }),
                                o.default.createElement(
                                  "div",
                                  { className: "choose-account-list__account__info" },
                                  o.default.createElement("div", { className: "choose-account-list__account__label" }, l),
                                  o.default.createElement(u.default, {
                                    className: "choose-account-list__account__balance",
                                    type: d.PRIMARY,
                                    value: h,
                                    style: { color: "var(--color-text-alternative)" },
                                    suffix: i
                                  })
                                )
                              ),
                              n[a]
                                ? o.default.createElement(
                                    p.default,
                                    { title: `${v("lastConnected")} ${n[a]}` },
                                    o.default.createElement(f.Icon, {
                                      name: f.IconName.Info,
                                      color: m.IconColor.iconMuted,
                                      className: "info-circle",
                                      marginInlineStart: 2
                                    })
                                  )
                                : null
                            );
                          })
                        )
                      );
                  return o.default.createElement(
                    "div",
                    { className: "choose-account-list" },
                    o.default.createElement(_, null),
                    o.default.createElement(C, null)
                  );
                };
                b.propTypes = {
                  accounts: r.default.arrayOf(
                    r.default.shape({
                      address: r.default.string,
                      addressLabel: r.default.string,
                      lastConnectedDate: r.default.string,
                      balance: r.default.string
                    })
                  ).isRequired,
                  selectNewAccountViaModal: r.default.func.isRequired,
                  addressLastConnectedMap: r.default.object,
                  nativeCurrency: r.default.string.isRequired,
                  selectedAccounts: r.default.object.isRequired,
                  allAreSelected: r.default.func.isRequired,
                  deselectAll: r.default.func.isRequired,
                  selectAll: r.default.func.isRequired,
                  handleAccountClick: r.default.func.isRequired
                };
                n.default = (0, o.memo)(b, (e, t) => (0, i.isEqual)(e.selectedAccounts, t.selectedAccounts));
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/account-list/account-list.js" }
    ],
    [
      4601,
      { "./account-list": 4600 },
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
                var o,
                  r = (o = e("./account-list")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/account-list/index.js" }
    ],
    [
      4602,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../icon/info-icon.component": 4656,
        "../tooltip": 4736,
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
                var o = d(e("react")),
                  r = e("react-redux"),
                  a = d(e("prop-types")),
                  i = d(e("../tooltip")),
                  l = e("../../../selectors"),
                  s = d(e("../icon/info-icon.component")),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p({ address: e }) {
                  const t = (0, r.useSelector)(l.getSelectedAccount),
                    n = (0, c.useI18nContext)();
                  return t.address === e
                    ? null
                    : o.default.createElement(
                        i.default,
                        {
                          position: "bottom",
                          html: o.default.createElement("p", null, n("notCurrentAccount")),
                          wrapperClassName: "account-mismatch-warning__tooltip-wrapper",
                          containerClassName: "account-mismatch-warning__tooltip-container"
                        },
                        o.default.createElement(
                          "div",
                          {
                            className: "account-mismatch-warning__tooltip-container-icon",
                            "data-testid": "account-mismatch-warning-tooltip"
                          },
                          o.default.createElement(s.default, { severity: u.Severity.Warning })
                        )
                      );
                }
                p.propTypes = { address: a.default.string.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/account-mismatch-warning/account-mismatch-warning.component.js" }
    ],
    [
      4603,
      { "../info-tooltip": 4665, "../info-tooltip/info-tooltip-icon": 4666, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p), (n.typeHash = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = s(e("../info-tooltip")),
                  l = s(e("../info-tooltip/info-tooltip-icon"));
                function s(e) {
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
                const u = "actionable-message--with-right-button",
                  d = (n.typeHash = {
                    warning: "actionable-message--warning",
                    danger: "actionable-message--danger",
                    success: "actionable-message--success",
                    default: ""
                  });
                function p({
                  message: e = "",
                  primaryAction: t = null,
                  primaryActionV2: n = null,
                  secondaryAction: r = null,
                  className: s = "",
                  infoTooltipText: c = "",
                  withRightButton: p = !1,
                  type: f = "default",
                  useIcon: m = !1,
                  icon: h,
                  iconFillColor: g = "",
                  roundedButtons: y,
                  dataTestId: b,
                  autoHideTime: v = 0,
                  onAutoHide: k
                }) {
                  const [_, C] = (0, o.useState)(!0);
                  (0, o.useEffect)(
                    function () {
                      if (0 === v) return undefined;
                      const e = setTimeout(() => {
                        null == k || k(), C(!1);
                      }, v);
                      return function () {
                        clearTimeout(e);
                      };
                    },
                    [v, k]
                  );
                  const w = (0, a.default)("actionable-message", d[f], p ? u : null, s, { "actionable-message--with-icon": m }),
                    T = (t && !r) || (r && !t);
                  return _
                    ? o.default.createElement(
                        "div",
                        { className: w, "data-testid": b },
                        m ? h || o.default.createElement(l.default, { fillColor: g }) : null,
                        c &&
                          o.default.createElement(i.default, {
                            position: "left",
                            contentText: c,
                            wrapperClassName: "actionable-message__info-tooltip-wrapper"
                          }),
                        o.default.createElement("div", { className: "actionable-message__message" }, e),
                        n && o.default.createElement("button", { className: "actionable-message__action-v2", onClick: n.onClick }, n.label),
                        (t || r) &&
                          o.default.createElement(
                            "div",
                            { className: (0, a.default)("actionable-message__actions", { "actionable-message__actions--single": T }) },
                            t &&
                              o.default.createElement(
                                "button",
                                {
                                  className: (0, a.default)(
                                    "actionable-message__action",
                                    "actionable-message__action--primary",
                                    `actionable-message__action-${f}`,
                                    { "actionable-message__action--rounded": y }
                                  ),
                                  onClick: t.onClick
                                },
                                t.label
                              ),
                            r &&
                              o.default.createElement(
                                "button",
                                {
                                  className: (0, a.default)(
                                    "actionable-message__action",
                                    "actionable-message__action--secondary",
                                    `actionable-message__action-${f}`,
                                    { "actionable-message__action--rounded": y }
                                  ),
                                  onClick: r.onClick
                                },
                                r.label
                              )
                          )
                      )
                    : null;
                }
                p.propTypes = {
                  message: r.default.node.isRequired,
                  primaryAction: r.default.shape({ label: r.default.string, onClick: r.default.func }),
                  primaryActionV2: r.default.shape({ label: r.default.string, onClick: r.default.func }),
                  secondaryAction: r.default.shape({ label: r.default.string, onClick: r.default.func }),
                  className: r.default.string,
                  type: r.default.oneOf(Object.keys(d)),
                  withRightButton: r.default.bool,
                  infoTooltipText: r.default.string,
                  useIcon: r.default.bool,
                  icon: r.default.node,
                  iconFillColor: r.default.string,
                  roundedButtons: r.default.bool,
                  dataTestId: r.default.string,
                  autoHideTime: r.default.number,
                  onAutoHide: r.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/actionable-message/actionable-message.js" }
    ],
    [
      4604,
      { "./actionable-message": 4603 },
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
                var o,
                  r = (o = e("./actionable-message")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/actionable-message/index.js" }
    ],
    [
      4605,
      { "../../../../shared/constants/time": 3972, "../../../hooks/usePrevious": 4845, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = c(e("classnames")),
                  r = c(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  i = e("../../../hooks/usePrevious"),
                  l = e("../../../../shared/constants/time");
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (s = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  const [t, n] = (0, a.useState)(!1),
                    [r, s] = (0, a.useState)(""),
                    c = (0, i.usePrevious)(e.visible);
                  return (
                    (0, a.useEffect)(() => {
                      !c && e.visible
                        ? (e.msg, s("visible"), n(!0))
                        : c &&
                          !e.visible &&
                          (s("hidden"),
                          setTimeout((e) => {
                            n(!1);
                          }, 500 * l.MILLISECOND));
                    }, [c, e.msg, e.visible]),
                    t
                      ? a.default.createElement(
                          "div",
                          { className: (0, o.default)("global-alert", r) },
                          a.default.createElement("a", { className: "msg" }, e.msg)
                        )
                      : null
                  );
                }
                u.propTypes = { visible: r.default.bool.isRequired, msg: r.default.string };
                n.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/alert/index.js" }
    ],
    [
      4606,
      { "../../../helpers/constants/design-system": 4771, classnames: 2414, lodash: 3312, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default =
                    n.ValidTextColors =
                    n.ValidIconColors =
                    n.ValidBorderColors =
                    n.ValidBackgroundColor =
                    n.MultipleTextColors =
                    n.MultipleSizesAndAuto =
                    n.MultipleSizes =
                    n.MultipleJustifyContents =
                    n.MultipleBorderColors =
                    n.MultipleBlockSizes =
                    n.MultipleBackgroundColor =
                    n.MultipleAlignItems =
                      void 0);
                var o = s(e("react")),
                  r = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("lodash"),
                  l = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                const u = "box",
                  d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                  p = r.default.oneOf(d),
                  f = r.default.oneOf(Object.values(l.BlockSize)),
                  m = r.default.oneOf([...d, "auto"]),
                  h = (n.ValidBackgroundColor = r.default.oneOf(Object.values(l.BackgroundColor))),
                  g = (n.ValidBorderColors = r.default.oneOf(Object.values(l.BorderColor))),
                  y = (n.ValidTextColors = r.default.oneOf(Object.values(l.TextColor))),
                  b = (n.ValidIconColors = r.default.oneOf(Object.values(l.IconColor))),
                  v = r.default.oneOf(Object.values(l.AlignItems)),
                  k = r.default.oneOf(Object.values(l.JustifyContent)),
                  _ = r.default.arrayOf(p),
                  C = (n.MultipleSizes = r.default.oneOfType([p, _])),
                  w = r.default.arrayOf(f),
                  T = (n.MultipleBlockSizes = r.default.oneOfType([f, w])),
                  x = r.default.arrayOf(m),
                  E = (n.MultipleSizesAndAuto = r.default.oneOfType([m, x])),
                  O = r.default.arrayOf(g),
                  M = (n.MultipleBorderColors = r.default.oneOfType([g, O])),
                  j = r.default.arrayOf(h),
                  P = (n.MultipleBackgroundColor = r.default.oneOfType([h, j])),
                  N = r.default.arrayOf(y),
                  I = r.default.arrayOf(b),
                  S = (n.MultipleTextColors = r.default.oneOfType([y, N, b, I])),
                  A = r.default.arrayOf(v),
                  D = (n.MultipleAlignItems = r.default.oneOfType([v, A])),
                  B = r.default.arrayOf(k),
                  $ = (n.MultipleJustifyContents = r.default.oneOfType([k, B]));
                function R(e, t) {
                  return (
                    "number" == typeof t ||
                    (("margin" === e ||
                      "margin-top" === e ||
                      "margin-right" === e ||
                      "margin-bottom" === e ||
                      "margin-left" === e ||
                      "margin-inline" === e ||
                      "margin-inline-start" === e ||
                      "margin-inline-end" === e) &&
                      "auto" === t)
                  );
                }
                function L(e, t) {
                  return "string" == typeof e && "string" == typeof t;
                }
                const F = (0, i.memoize)(
                    (e, t, n) => {
                      if (!t) return null;
                      const o = {},
                        r = Array.isArray(t) && 1 === t.length ? t[0] : undefined,
                        a = ((!Array.isArray(t) && "string" == typeof t) || "number" == typeof t ? t : undefined) || r;
                      if (a || 0 === a) o[`${u}--${e}-${a}`] = n(e, a);
                      else
                        switch (t.length) {
                          case 4:
                            (o[`${u}--${e}-${t[0]}`] = t[0] && n(e, t[0])),
                              (o[`${u}--${l.BREAKPOINTS[1]}:${e}-${t[1]}`] = t[1] && n(e, t[1])),
                              (o[`${u}--${l.BREAKPOINTS[2]}:${e}-${t[2]}`] = t[2] && n(e, t[2])),
                              (o[`${u}--${l.BREAKPOINTS[3]}:${e}-${t[3]}`] = t[3] && n(e, t[3]));
                            break;
                          case 3:
                            (o[`${u}--${e}-${t[0]}`] = t[0] && n(e, t[0])),
                              (o[`${u}--${l.BREAKPOINTS[1]}:${e}-${t[1]}`] = t[1] && n(e, t[1])),
                              (o[`${u}--${l.BREAKPOINTS[2]}:${e}-${t[2]}`] = t[2] && n(e, t[2]));
                            break;
                          case 2:
                            (o[`${u}--${e}-${t[0]}`] = t[0] && n(e, t[0])),
                              (o[`${u}--${l.BREAKPOINTS[1]}:${e}-${t[1]}`] = t[1] && n(e, t[1]));
                            break;
                          default:
                            console.log(`Invalid array prop length: ${t.length}`);
                        }
                      return o;
                    },
                    (e, t) => `${e}${t}`
                  ),
                  V = o.default.forwardRef(function (
                    {
                      padding: e,
                      paddingTop: t,
                      paddingRight: n,
                      paddingBottom: r,
                      paddingLeft: i,
                      paddingInline: s,
                      paddingInlineStart: d,
                      paddingInlineEnd: p,
                      margin: f,
                      marginTop: m,
                      marginRight: h,
                      marginBottom: g,
                      marginLeft: y,
                      marginInline: b,
                      marginInlineStart: v,
                      marginInlineEnd: k,
                      borderColor: _,
                      borderWidth: C,
                      borderRadius: w,
                      borderStyle: T,
                      alignItems: x,
                      justifyContent: E,
                      textAlign: O,
                      flexDirection: M = l.FlexDirection.Row,
                      flexWrap: j,
                      gap: P,
                      display: N,
                      width: I,
                      height: S,
                      children: A,
                      className: D,
                      backgroundColor: B,
                      color: $,
                      ariaLabel: V,
                      as: z = "div",
                      ...W
                    },
                    H
                  ) {
                    const U = (0, a.default)(
                      u,
                      D,
                      f && F("margin", f, R),
                      m && F("margin-top", m, R),
                      h && F("margin-right", h, R),
                      g && F("margin-bottom", g, R),
                      y && F("margin-left", y, R),
                      b && F("margin-inline", b, R),
                      v && F("margin-inline-start", v, R),
                      k && F("margin-inline-end", k, R),
                      e && F("padding", e, R),
                      t && F("padding-top", t, R),
                      n && F("padding-right", n, R),
                      r && F("padding-bottom", r, R),
                      i && F("padding-left", i, R),
                      s && F("padding-inline", s, R),
                      d && F("padding-inline-start", d, R),
                      p && F("padding-inline-end", p, R),
                      N && F("display", N, L),
                      P && F("gap", P, R),
                      M && F("flex-direction", M, L),
                      j && F("flex-wrap", j, L),
                      E && F("justify-content", E, L),
                      x && F("align-items", x, L),
                      O && F("text-align", O, L),
                      I && F("width", I, L),
                      S && F("height", S, L),
                      $ && F("color", $, L),
                      B && F("background-color", B, L),
                      w && F("rounded", w, L),
                      T && F("border-style", T, L),
                      _ && F("border-color", _, L),
                      C && F("border-width", C, R),
                      {
                        "box--border-style-solid": !T && (Boolean(C) || Boolean(_)),
                        "box--border-width-1": !C && Boolean(_),
                        "box--display-flex": !N && (Boolean(E) || Boolean(x))
                      }
                    );
                    if ("function" == typeof A) return A(U);
                    const q = z,
                      K = {};
                    return (
                      "function" == typeof q.type ? (K.ariaLabel = V) : (K["aria-label"] = V),
                      W["aria-label"] && (K["aria-label"] = W["aria-label"]),
                      o.default.createElement(q, c({ className: U, ref: H }, W, K), A)
                    );
                  });
                V.propTypes = {
                  children: r.default.oneOfType([r.default.node, r.default.func]),
                  flexDirection: r.default.oneOfType([
                    r.default.oneOf(Object.values(l.FlexDirection)),
                    r.default.arrayOf(r.default.oneOf(Object.values(l.FlexDirection)))
                  ]),
                  flexWrap: r.default.oneOfType([
                    r.default.oneOf(Object.values(l.FlexWrap)),
                    r.default.arrayOf(r.default.oneOf(Object.values(l.FlexWrap)))
                  ]),
                  gap: C,
                  margin: E,
                  marginTop: E,
                  marginBottom: E,
                  marginRight: E,
                  marginLeft: E,
                  marginInline: E,
                  marginInlineStart: E,
                  marginInlineEnd: E,
                  padding: C,
                  paddingTop: C,
                  paddingBottom: C,
                  paddingRight: C,
                  paddingLeft: C,
                  paddingInline: C,
                  paddingInlineStart: C,
                  paddingInlineEnd: C,
                  borderColor: M,
                  borderWidth: r.default.oneOfType([r.default.number, r.default.arrayOf(r.default.number)]),
                  borderRadius: r.default.oneOfType([
                    r.default.oneOf(Object.values(l.BorderRadius)),
                    r.default.arrayOf(r.default.oneOf(Object.values(l.BorderRadius)))
                  ]),
                  borderStyle: r.default.oneOfType([
                    r.default.oneOf(Object.values(l.BorderStyle)),
                    r.default.arrayOf(r.default.oneOf(Object.values(l.BorderStyle)))
                  ]),
                  alignItems: D,
                  justifyContent: $,
                  textAlign: r.default.oneOfType([
                    r.default.oneOf(Object.values(l.TextAlign)),
                    r.default.arrayOf(r.default.oneOf(Object.values(l.TextAlign)))
                  ]),
                  display: r.default.oneOfType([
                    r.default.oneOf(Object.values(l.Display)),
                    r.default.arrayOf(r.default.oneOf(Object.values(l.Display)))
                  ]),
                  width: T,
                  height: T,
                  backgroundColor: P,
                  className: r.default.string,
                  style: r.default.object,
                  as: r.default.string,
                  color: S,
                  ariaLabel: r.default.string,
                  "aria-label": r.default.string
                };
                n.default = V;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/box/box.js" }
    ],
    [
      4607,
      { "./box": 4606 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "MultipleSizes", {
                    enumerable: !0,
                    get: function () {
                      return o.MultipleSizes;
                    }
                  }),
                  Object.defineProperty(n, "MultipleSizesAndAuto", {
                    enumerable: !0,
                    get: function () {
                      return o.MultipleSizesAndAuto;
                    }
                  }),
                  Object.defineProperty(n, "ValidBackgroundColor", {
                    enumerable: !0,
                    get: function () {
                      return o.ValidBackgroundColor;
                    }
                  }),
                  Object.defineProperty(n, "ValidBorderColors", {
                    enumerable: !0,
                    get: function () {
                      return o.ValidBorderColors;
                    }
                  }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return o.default;
                    }
                  });
                var o = (function (e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = r(t);
                  if (n && n.has(e)) return n.get(e);
                  var o = { __proto__: null },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                      var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                      l && (l.get || l.set) ? Object.defineProperty(o, i, l) : (o[i] = e[i]);
                    }
                  return (o.default = e), n && n.set(e, o), o;
                })(e("./box"));
                function r(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (r = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/box/index.js" }
    ],
    [
      4608,
      { classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
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
                function s(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
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
                class c extends o.PureComponent {
                  constructor(...e) {
                    super(...e),
                      s(this, "state", {
                        activeButtonIndex: this.props.noButtonActiveByDefault ? null : this.props.defaultActiveButtonIndex
                      });
                  }
                  componentDidUpdate(e, t) {
                    "number" == typeof this.props.newActiveButtonIndex &&
                      t.activeButtonIndex !== this.props.newActiveButtonIndex &&
                      this.setState({ activeButtonIndex: this.props.newActiveButtonIndex });
                  }
                  handleButtonClick(e) {
                    this.setState({ activeButtonIndex: e });
                  }
                  renderButtons() {
                    const { children: e, disabled: t, variant: n } = this.props;
                    return o.default.Children.map(
                      e,
                      (e, r) =>
                        e &&
                        o.default.createElement(
                          "button",
                          {
                            role: "radiogroup" === n ? "radio" : undefined,
                            "aria-checked": r === this.state.activeButtonIndex,
                            className: (0, a.default)("button-group__button", e.props.className, {
                              "radio-button": "radiogroup" === n,
                              "button-group__button--active": r === this.state.activeButtonIndex,
                              "radio-button--active": "radiogroup" === n && r === this.state.activeButtonIndex
                            }),
                            "data-testid": `button-group__button${r}`,
                            onClick: () => {
                              var t, n;
                              this.handleButtonClick(r), null === (t = (n = e.props).onClick) || void 0 === t || t.call(n);
                            },
                            disabled: t || e.props.disabled,
                            key: r
                          },
                          e.props.children
                        )
                    );
                  }
                  render() {
                    const { className: e, style: t, variant: n } = this.props;
                    return o.default.createElement(
                      "div",
                      {
                        className: (0, a.default)(e, { "radio-button-group": "radiogroup" === n }),
                        role: "radiogroup" === n ? "radiogroup" : undefined,
                        style: t
                      },
                      this.renderButtons()
                    );
                  }
                }
                (n.default = c),
                  s(c, "propTypes", {
                    defaultActiveButtonIndex: r.default.number,
                    noButtonActiveByDefault: r.default.bool,
                    disabled: r.default.bool,
                    children: r.default.array,
                    className: r.default.string,
                    style: r.default.object,
                    newActiveButtonIndex: r.default.number,
                    variant: r.default.oneOf(["radiogroup", "default"])
                  }),
                  s(c, "defaultProps", { className: "button-group", defaultActiveButtonIndex: 0, variant: "default" });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/button-group/button-group.component.js" }
    ],
    [
      4609,
      { "./button-group.component": 4608 },
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
                var o,
                  r = (o = e("./button-group.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/button-group/index.js" }
    ],
    [
      4610,
      { classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = i(e("react")),
                  r = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l() {
                  return (
                    (l = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                const s = "btn-default",
                  c = {
                    default: s,
                    primary: "btn-primary",
                    secondary: "btn-secondary",
                    warning: "btn-warning",
                    danger: "btn-danger",
                    "danger-primary": "btn-danger-primary",
                    link: "btn-link",
                    inline: "btn--inline",
                    raised: "btn-raised"
                  },
                  u = ({ type: e, submit: t = !1, large: n, children: r, icon: i, className: u, rounded: d = !0, ...p }) => {
                    const f = d && "link" !== e && "inline" !== e;
                    let m = "button";
                    return (
                      "link" === e ? (m = "a") : t && (p.type = "submit"),
                      "link" === e &&
                        "function" == typeof p.onClick &&
                        (p.onKeyUp ??
                          (p.onKeyUp = (e) => {
                            "Enter" === e.key && p.onClick();
                          }),
                        p.role ?? (p.role = "button"),
                        p.tabIndex ?? (p.tabIndex = 0)),
                      o.default.createElement(
                        m,
                        l({ className: (0, a.default)("button", f && "btn--rounded", c[e] || s, n && "btn--large", u) }, p),
                        i ? o.default.createElement("span", { className: "button__icon" }, i) : null,
                        r
                      )
                    );
                  };
                u.propTypes = {
                  type: r.default.string,
                  submit: r.default.bool,
                  large: r.default.bool,
                  className: r.default.string,
                  children: r.default.node,
                  icon: r.default.node,
                  rounded: r.default.bool
                };
                n.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/button/button.component.js" }
    ],
    [
      4611,
      { "./button.component": 4610 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = (o = e("./button.component")) && o.__esModule ? o : { default: o };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/button/index.js" }
    ],
    [
      4612,
      {
        "../../../../shared/constants/time": 3972,
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../icon/info-icon-inverted.component": 4655,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = u(e("prop-types")),
                  a = u(e("classnames")),
                  i = u(e("../icon/info-icon-inverted.component")),
                  l = e("../../../helpers/constants/design-system"),
                  s = e("../../../../shared/constants/time"),
                  c = e("../../component-library");
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
                function p({ severity: e, children: t, dismiss: n, isFirst: r, isLast: u, isMultiple: d }) {
                  const [p, f] = (0, o.useState)(!1),
                    m = (0, a.default)("callout", `callout--${e}`, {
                      "callout--dismissed": !0 === p,
                      "callout--multiple": !0 === d,
                      "callout--dismissible": Boolean(n),
                      "callout--first": !0 === r || !0 !== d,
                      "callout--last": !0 === u || !0 !== d
                    });
                  return (
                    (0, o.useEffect)(() => {
                      p &&
                        setTimeout(() => {
                          n();
                        }, 500 * s.MILLISECOND);
                    }, [p, n]),
                    o.default.createElement(
                      "div",
                      { className: m },
                      o.default.createElement(i.default, { severity: e }),
                      o.default.createElement(c.Text, { color: l.TextColor.textDefault, className: "callout__content" }, t),
                      n &&
                        o.default.createElement(c.ButtonIcon, {
                          iconName: c.IconName.Close,
                          size: c.IconSize.Sm,
                          className: "callout__close-button",
                          onClick: () => {
                            f(!0);
                          },
                          onKeyUp: (e) => {
                            "Enter" === e.key && f(!0);
                          }
                        })
                    )
                  );
                }
                p.propTypes = {
                  severity: r.default.oneOf(Object.values(l.Severity)).isRequired,
                  children: r.default.node.isRequired,
                  dismiss: r.default.func,
                  isFirst: r.default.bool,
                  isLast: r.default.bool,
                  isMultiple: r.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/callout/callout.js" }
    ],
    [
      4613,
      { "./callout": 4612 },
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
                var o,
                  r = (o = e("./callout")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/callout/index.js" }
    ],
    [
      4614,
      { "../../../helpers/constants/design-system": 4771, "../box": 4607, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = l(e("react")),
                  r = l(e("prop-types")),
                  a = l(e("../box")),
                  i = e("../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s() {
                  return (
                    (s = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                const c = ({ border: e = !0, backgroundColor: t = i.BackgroundColor.backgroundDefault, children: n, ...r }) =>
                  o.default.createElement(
                    a.default,
                    s(
                      {
                        borderColor: e ? i.BorderColor.borderMuted : null,
                        borderRadius: e ? i.BorderRadius.MD : null,
                        borderStyle: e ? i.BorderStyle.solid : null,
                        backgroundColor: t,
                        padding: 4
                      },
                      r
                    ),
                    n
                  );
                c.propTypes = {
                  border: r.default.bool,
                  backgroundColor: r.default.oneOf(Object.values(i.BackgroundColor)),
                  ...a.default.propTypes
                };
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/card/card.js" }
    ],
    [
      4615,
      { "./card": 4614 },
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
                var o,
                  r = (o = e("./card")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/card/index.js" }
    ],
    [
      4616,
      { classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.UNCHECKED = n.INDETERMINATE = n.CHECKED = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
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
                const s = { CHECKED: "CHECKED", INDETERMINATE: "INDETERMINATE", UNCHECKED: "UNCHECKED" },
                  { CHECKED: c, INDETERMINATE: u, UNCHECKED: d } = s;
                (n.UNCHECKED = d), (n.INDETERMINATE = u), (n.CHECKED = c);
                const p = ({ className: e, disabled: t, id: n, onClick: r, checked: i, title: l, dataTestId: c }) => {
                  "boolean" == typeof i && (i = i ? s.CHECKED : s.UNCHECKED);
                  const u = (0, o.useRef)(null);
                  return (
                    (0, o.useLayoutEffect)(() => {
                      u.current.indeterminate = i === s.INDETERMINATE;
                    }, [i]),
                    o.default.createElement("input", {
                      checked: i === s.CHECKED,
                      className: (0, a.default)("check-box", e, {
                        "far fa-square": i === s.UNCHECKED,
                        "fa fa-check-square check-box__checked": i === s.CHECKED,
                        "fa fa-minus-square check-box__indeterminate": i === s.INDETERMINATE
                      }),
                      disabled: t,
                      id: n,
                      onClick: r
                        ? (e) => {
                            e.preventDefault(), r();
                          }
                        : null,
                      readOnly: !0,
                      ref: u,
                      title: l,
                      "data-testid": c,
                      type: "checkbox"
                    })
                  );
                };
                (p.propTypes = {
                  className: r.default.string,
                  disabled: r.default.bool,
                  id: r.default.string,
                  onClick: r.default.func,
                  checked: r.default.oneOf([...Object.keys(s), !0, !1]).isRequired,
                  title: r.default.string,
                  dataTestId: r.default.string
                }),
                  (p.defaultProps = { className: undefined, disabled: !1, id: undefined });
                n.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/check-box/check-box.component.js" }
    ],
    [
      4617,
      { "./check-box.component": 4616 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "CHECKED", {
                    enumerable: !0,
                    get: function () {
                      return o.CHECKED;
                    }
                  }),
                  Object.defineProperty(n, "INDETERMINATE", {
                    enumerable: !0,
                    get: function () {
                      return o.INDETERMINATE;
                    }
                  }),
                  Object.defineProperty(n, "UNCHECKED", {
                    enumerable: !0,
                    get: function () {
                      return o.UNCHECKED;
                    }
                  }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return o.default;
                    }
                  });
                var o = (function (e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = r(t);
                  if (n && n.has(e)) return n.get(e);
                  var o = { __proto__: null },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                      var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                      l && (l.get || l.set) ? Object.defineProperty(o, i, l) : (o[i] = e[i]);
                    }
                  return (o.default = e), n && n.set(e, o), o;
                })(e("./check-box.component"));
                function r(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (r = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/check-box/index.js" }
    ],
    [
      4618,
      { ".": 4620, "../../../helpers/constants/design-system": 4771, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ChipWithInput = c);
                var o = s(e("react")),
                  r = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  l = s(e("."));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c({ dataTestId: e, className: t, borderColor: n = i.BorderColor.borderDefault, inputValue: r, setInputValue: s }) {
                  return o.default.createElement(
                    l.default,
                    { className: (0, a.default)(t, "chip--with-input"), borderColor: n },
                    s &&
                      o.default.createElement("input", {
                        "data-testid": e,
                        type: "text",
                        className: "chip__input",
                        onChange: (e) => {
                          s(e.target.value);
                        },
                        value: r
                      })
                  );
                }
                c.propTypes = {
                  dataTestId: r.default.string,
                  borderColor: r.default.oneOf(Object.values(i.BorderColor)),
                  className: r.default.string,
                  inputValue: r.default.string,
                  setInputValue: r.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/chip/chip-with-input.js" }
    ],
    [
      4619,
      {
        "../../../helpers/constants/design-system": 4771,
        "../typography": 4740,
        "../url-icon": 4745,
        classnames: 2414,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var o = u(e("react")),
                  r = u(e("prop-types")),
                  a = u(e("classnames")),
                  i = e("lodash"),
                  l = u(e("../typography")),
                  s = u(e("../url-icon")),
                  c = e("../../../helpers/constants/design-system");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                function p({
                  dataTestId: e,
                  className: t,
                  children: n,
                  borderColor: r = c.BorderColor.borderDefault,
                  backgroundColor: i,
                  label: u,
                  labelProps: p = {},
                  leftIcon: f,
                  leftIconUrl: m = "",
                  rightIcon: h,
                  onClick: g,
                  maxContent: y = !0,
                  displayInlineBlock: b = !1
                }) {
                  const v = "function" == typeof g;
                  return o.default.createElement(
                    "div",
                    {
                      "data-testid": e,
                      onClick: g,
                      onKeyPress: (e) => {
                        "Enter" === e.key && g && g(e);
                      },
                      className: (0, a.default)(t, "chip", {
                        "chip--with-left-icon": Boolean(f),
                        "chip--with-right-icon": Boolean(h),
                        [`chip--border-color-${r}`]: !0,
                        [`chip--background-color-${i}`]: !0,
                        "chip--max-content": y,
                        "chip--display-inline-block": b
                      }),
                      role: v ? "button" : undefined,
                      tabIndex: v ? 0 : undefined
                    },
                    f && !m ? o.default.createElement("div", { className: "chip__left-icon" }, f) : null,
                    m ? o.default.createElement(s.default, { className: "chip__left-url-icon", url: m }) : null,
                    n ??
                      o.default.createElement(
                        l.default,
                        d({ className: "chip__label", variant: c.TypographyVariant.H6, as: "span", color: c.TextColor.textAlternative }, p),
                        u
                      ),
                    h ? o.default.createElement("div", { className: "chip__right-icon" }, h) : null
                  );
                }
                p.propTypes = {
                  dataTestId: r.default.string,
                  borderColor: r.default.oneOf(Object.values(c.BorderColor)),
                  backgroundColor: r.default.oneOf(Object.values(c.BackgroundColor)),
                  label: r.default.string,
                  labelProps: r.default.shape({ ...(0, i.omit)(c.TypographyVariant.propTypes, ["children", "className"]) }),
                  children: r.default.node,
                  leftIcon: r.default.node,
                  rightIcon: r.default.node,
                  className: r.default.string,
                  onClick: r.default.func,
                  maxContent: r.default.bool,
                  leftIconUrl: r.default.string,
                  displayInlineBlock: r.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/chip/chip.js" }
    ],
    [
      4620,
      { "./chip": 4619 },
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
                var o,
                  r = (o = e("./chip")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/chip/index.js" }
    ],
    [
      4621,
      { "../../../helpers/constants/design-system": 4771, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = s);
                var o = l(e("react")),
                  r = l(e("classnames")),
                  a = l(e("prop-types")),
                  i = e("../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s({ size: e = i.Size.SM, type: t = "outlined", color: n = i.Color.iconMuted, borderColor: a, iconClassName: l }) {
                  const s = (0, r.default)("color-indicator", {
                    "color-indicator--filled": "filled" === t || Boolean(l),
                    "color-indicator--partial-filled": "partial-filled" === t,
                    [`color-indicator--border-color-${a}`]: Boolean(a),
                    [`color-indicator--color-${n}`]: !0,
                    [`color-indicator--size-${e}`]: !0
                  });
                  return o.default.createElement(
                    "div",
                    { className: s, "data-testid": `color-icon-${n}` },
                    l
                      ? o.default.createElement("i", { className: (0, r.default)("color-indicator__icon", l) })
                      : o.default.createElement("span", { className: "color-indicator__inner-circle" })
                  );
                }
                (s.TYPES = { FILLED: "filled", PARTIAL: "partial-filled", OUTLINE: "outline" }),
                  (s.propTypes = {
                    color: a.default.oneOf(Object.values(i.Color)),
                    borderColor: a.default.oneOf(Object.values(i.BorderColor)),
                    size: a.default.oneOf(Object.values(i.Size)),
                    iconClassName: a.default.string,
                    type: a.default.oneOf(Object.values(s.TYPES))
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/color-indicator/color-indicator.js" }
    ],
    [
      4622,
      { "./color-indicator": 4621 },
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
                var o,
                  r = (o = e("./color-indicator")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/color-indicator/index.js" }
    ],
    [
      4623,
      { "../../../hooks/useI18nContext": 4837, "../tooltip": 4736, "prop-types": 3450, react: 3690, "unicode-confusables": 3867 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = s(e("prop-types")),
                  a = e("unicode-confusables"),
                  i = s(e("../tooltip")),
                  l = e("../../../hooks/useI18nContext");
                function s(e) {
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
                const u = ({ input: e }) => {
                  const t = (0, l.useI18nContext)();
                  return (0, o.useMemo)(() => (0, a.confusables)(e), [e]).map(({ point: e, similarTo: n }, r) => {
                    const a = "" === n;
                    return n === undefined
                      ? e
                      : o.default.createElement(
                          i.default,
                          {
                            key: r.toString(),
                            tag: "span",
                            position: "top",
                            title: a ? t("confusableZeroWidthUnicode") : t("confusableUnicode", [e, n])
                          },
                          o.default.createElement("span", { className: "confusable__point" }, a ? "?" : e)
                        );
                  });
                };
                u.propTypes = { input: r.default.string.isRequired };
                n.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/confusable/confusable.component.js" }
    ],
    [
      4624,
      { "./confusable.component": 4623 },
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
                var o,
                  r = (o = e("./confusable.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/confusable/index.js" }
    ],
    [
      4625,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useCopyToClipboard": 4830,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../box/box": 4606,
        "../identicon": 4664,
        "../tooltip/tooltip": 4737,
        "../typography/typography": 4741,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = h);
                var o = m(e("react")),
                  r = m(e("prop-types")),
                  a = e("@metamask/etherscan-link"),
                  i = m(e("../box/box")),
                  l = m(e("../tooltip/tooltip")),
                  s = e("../../../hooks/useI18nContext"),
                  c = m(e("../identicon")),
                  u = m(e("../typography/typography")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../hooks/useCopyToClipboard"),
                  f = e("../../component-library");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h({ address: e, tokenName: t, chainId: n, rpcPrefs: r }) {
                  const m = (0, s.useI18nContext)(),
                    [h, g] = (0, p.useCopyToClipboard)();
                  return o.default.createElement(
                    i.default,
                    {
                      className: "contract-token-values",
                      display: d.DISPLAY.FLEX,
                      alignItems: d.AlignItems.center,
                      justifyContent: d.JustifyContent.center,
                      gap: 2
                    },
                    o.default.createElement(c.default, { address: e, diameter: 24 }),
                    o.default.createElement(
                      u.default,
                      {
                        variant: d.TypographyVariant.H2,
                        fontWeight: d.FONT_WEIGHT.BOLD,
                        color: d.TextColor.textAlternative,
                        marginTop: 0,
                        marginBottom: 0
                      },
                      t
                    ),
                    o.default.createElement(
                      l.default,
                      { position: "top", title: m(h ? "copiedExclamation" : "copyToClipboard") },
                      o.default.createElement(f.ButtonIcon, {
                        iconName: h ? f.IconName.CopySuccess : f.IconName.Copy,
                        color: d.Color.iconMuted,
                        onClick: () => g(e),
                        ariaLabel: m(h ? "copiedExclamation" : "copyToClipboard")
                      })
                    ),
                    o.default.createElement(
                      l.default,
                      { position: "top", title: m("openInBlockExplorer") },
                      o.default.createElement(f.ButtonIcon, {
                        display: d.DISPLAY.FLEX,
                        iconName: f.IconName.Export,
                        color: d.Color.iconMuted,
                        onClick: () => {
                          const t = (0, a.getAccountLink)(
                            e,
                            n,
                            { blockExplorerUrl: (null == r ? void 0 : r.blockExplorerUrl) ?? null },
                            null
                          );
                          global.platform.openTab({ url: t });
                        },
                        ariaLabel: m("openInBlockExplorer")
                      })
                    )
                  );
                }
                h.propTypes = {
                  address: r.default.string,
                  tokenName: r.default.string,
                  chainId: r.default.string,
                  rpcPrefs: r.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/contract-token-values/contract-token-values.js" }
    ],
    [
      4626,
      {
        "../../../../shared/constants/common": 3955,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useCurrencyDisplay": 4831,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var o = u(e("react")),
                  r = u(e("prop-types")),
                  a = u(e("classnames")),
                  i = e("../../../hooks/useCurrencyDisplay"),
                  l = e("../../../../shared/constants/common"),
                  s = e("../../component-library"),
                  c = e("../../../helpers/constants/design-system");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                function p({
                  value: e,
                  displayValue: t,
                  "data-testid": n,
                  style: r,
                  className: l,
                  prefix: u,
                  prefixComponent: p,
                  hideLabel: f,
                  hideTitle: m,
                  numberOfDecimals: h,
                  denomination: g,
                  currency: y,
                  suffix: b,
                  prefixComponentWrapperProps: v = {},
                  textProps: k = {},
                  suffixProps: _ = {},
                  ...C
                }) {
                  const [w, T] = (0, i.useCurrencyDisplay)(e, {
                    displayValue: t,
                    prefix: u,
                    numberOfDecimals: h,
                    hideLabel: f,
                    denomination: g,
                    currency: y,
                    suffix: b
                  });
                  return o.default.createElement(
                    s.Box,
                    d(
                      {
                        className: (0, a.default)("currency-display-component", l),
                        "data-testid": n,
                        style: r,
                        title: (!m && w) || null,
                        display: c.Display.Flex,
                        alignItems: c.AlignItems.center,
                        flexWrap: c.FlexWrap.Wrap
                      },
                      C
                    ),
                    p
                      ? o.default.createElement(
                          s.Box,
                          d({ className: "currency-display-component__prefix", marginInlineEnd: 1, variant: c.TextVariant.inherit }, v),
                          p
                        )
                      : null,
                    o.default.createElement(
                      s.Text,
                      d({ as: "span", className: "currency-display-component__text", ellipsis: !0, variant: c.TextVariant.inherit }, k),
                      T.prefix,
                      T.value
                    ),
                    T.suffix
                      ? o.default.createElement(
                          s.Text,
                          d(
                            {
                              as: "span",
                              className: "currency-display-component__suffix",
                              marginInlineStart: 1,
                              variant: c.TextVariant.inherit
                            },
                            _
                          ),
                          T.suffix
                        )
                      : null
                  );
                }
                p.propTypes = {
                  className: r.default.string,
                  currency: r.default.string,
                  "data-testid": r.default.string,
                  denomination: r.default.oneOf([l.EtherDenomination.GWEI, l.EtherDenomination.ETH]),
                  displayValue: r.default.string,
                  hideLabel: r.default.bool,
                  hideTitle: r.default.bool,
                  numberOfDecimals: r.default.oneOfType([r.default.string, r.default.number]),
                  prefix: r.default.string,
                  prefixComponent: r.default.node,
                  style: r.default.object,
                  suffix: r.default.oneOfType([r.default.string, r.default.bool]),
                  value: r.default.string,
                  prefixComponentWrapperProps: r.default.object,
                  textProps: r.default.object,
                  suffixProps: r.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/currency-display/currency-display.component.js" }
    ],
    [
      4627,
      { "./currency-display.component": 4626 },
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
                var o,
                  r = (o = e("./currency-display.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/currency-display/index.js" }
    ],
    [
      4628,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../tooltip": 4736,
        "../typography": 4740,
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
                var o = u(e("react")),
                  r = u(e("prop-types")),
                  a = e("lodash"),
                  i = u(e("../typography")),
                  l = e("../../../helpers/constants/design-system"),
                  s = u(e("../tooltip")),
                  c = e("../../component-library");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                const p = { [l.Size.XS]: 0, [l.Size.SM]: 2, [l.Size.MD]: 4, [l.Size.LG]: 6, [l.Size.XL]: 8 };
                function f({
                  dictionary: e,
                  termTypography: t = {},
                  definitionTypography: n = {},
                  tooltips: r = {},
                  warnings: a = {},
                  gapSize: u = l.Size.SM
                }) {
                  return o.default.createElement(
                    "dl",
                    { className: "definition-list" },
                    Object.entries(e).map(([e, f]) =>
                      o.default.createElement(
                        o.default.Fragment,
                        { key: `definition-for-${e}` },
                        o.default.createElement(
                          i.default,
                          d({ variant: l.TypographyVariant.H6, fontWeight: l.FONT_WEIGHT.BOLD }, t, {
                            boxProps: { marginTop: 0, marginBottom: 1 },
                            className: "definition-list__term",
                            as: "dt"
                          }),
                          e,
                          r[e] &&
                            o.default.createElement(
                              s.default,
                              { title: r[e], position: "top", containerClassName: "definition-list__tooltip-wrapper" },
                              o.default.createElement(c.Icon, {
                                name: c.IconName.Info,
                                size: c.IconSize.Sm,
                                marginLeft: 1,
                                color: l.IconColor.iconDefault
                              })
                            )
                        ),
                        o.default.createElement(
                          i.default,
                          d({ variant: l.TypographyVariant.H6, color: l.TextColor.textAlternative }, n, {
                            boxProps: { marginTop: 0, marginBottom: p[u] },
                            className: "definition-list__definition",
                            overflowWrap: l.OVERFLOW_WRAP.BREAK_WORD,
                            as: "dd"
                          }),
                          f
                        ),
                        a[e] && o.default.createElement(c.Text, { variant: l.TextVariant.bodySm, color: l.TextColor.warningDefault }, a[e])
                      )
                    )
                  );
                }
                f.propTypes = {
                  gapSize: r.default.oneOf(Object.values(l.Size)),
                  dictionary: r.default.objectOf(r.default.oneOfType([r.default.string, r.default.number])),
                  tooltips: r.default.objectOf(r.default.string),
                  warnings: r.default.objectOf(r.default.string),
                  termTypography: r.default.shape({ ...(0, a.omit)(l.TypographyVariant.propTypes, ["tag", "className", "boxProps"]) }),
                  definitionTypography: r.default.shape({ ...(0, a.omit)(l.TypographyVariant.propTypes, ["tag", "className", "boxProps"]) })
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/definition-list/definition-list.js" }
    ],
    [
      4629,
      { "./definition-list": 4628 },
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
                var o,
                  r = (o = e("./definition-list")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/definition-list/index.js" }
    ],
    [
      4630,
      {
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../component-library": 4453,
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
                  (n.default = function () {
                    const e = (0, r.useSelector)(l.getCurrentChainId),
                      [t, n] = (0, o.useState)(!1),
                      u = (0, r.useSelector)(s.getCompletedOnboarding),
                      d = (0, a.useI18nContext)();
                    return (
                      (0, o.useEffect)(() => {
                        n(!(!u || ("0x3" !== e && "0x2a" !== e && "0x4" !== e)));
                      }, [e, u]),
                      t &&
                        o.default.createElement(c.BannerAlert, {
                          severity: i.Severity.Warning,
                          className: "deprecated-test-networks",
                          description: d("deprecatedTestNetworksMsg"),
                          onClose: () => n(!1),
                          margin: 2,
                          actionButtonLabel: d("deprecatedTestNetworksLink"),
                          actionButtonProps: {
                            className: "deprecated-test-networks__content__inline-link",
                            href: "https://blog.ethereum.org/2022/06/21/testnet-deprecation/",
                            variant: c.BUTTON_VARIANT.LINK,
                            externalLink: !0
                          }
                        })
                    );
                  });
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = e("react-redux"),
                  a = e("../../../hooks/useI18nContext"),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../../selectors"),
                  s = e("../../../ducks/metamask/metamask"),
                  c = e("../../component-library");
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/deprecated-test-networks/deprecated-test-networks.js" }
    ],
    [
      4631,
      { classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = l);
                var o = i(e("react")),
                  r = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e) {
                  const { children: t, type: n, className: r, onClick: i } = e;
                  return o.default.createElement(
                    "div",
                    {
                      className: (0, a.default)("dialog", r, {
                        "dialog--message": "message" === n,
                        "dialog--error": "error" === n,
                        "dialog--warning": "warning" === n
                      }),
                      "data-testid": "dialog-message",
                      onClick: i
                    },
                    t
                  );
                }
                l.propTypes = {
                  className: r.default.string,
                  children: r.default.node,
                  type: r.default.oneOf(["message", "error", "warning"]),
                  onClick: r.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/dialog/index.js" }
    ],
    [
      4632,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.DisclosureVariant = void 0);
                n.DisclosureVariant = (function (e) {
                  return (e.Default = "default"), (e.Arrow = "arrow"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/disclosure/disclosure.constants.ts" }
    ],
    [
      4633,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "./disclosure.constants": 4632,
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
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = c(e("prop-types")),
                  a = c(e("classnames")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = e("./disclosure.constants");
                function c(e) {
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
                const d = ({ children: e, title: t, size: n, variant: r }) => {
                  const c = (0, o.useRef)(null),
                    [u, d] = (0, o.useState)(!1);
                  return (
                    (0, o.useEffect)(() => {
                      u && c && c.current && c.current.scrollIntoView({ behavior: "smooth" });
                    }, [u]),
                    o.default.createElement(
                      "div",
                      { className: "disclosure", onClick: () => d((e) => !e) },
                      t
                        ? o.default.createElement(
                            "details",
                            null,
                            ((e, t, n) => {
                              if (e === s.DisclosureVariant.Arrow) {
                                const e = "small" === n ? l.TextVariant.bodySm : l.TextVariant.bodyMd;
                                return o.default.createElement(
                                  "summary",
                                  { className: "disclosure__summary is-arrow" },
                                  o.default.createElement(i.Text, { color: l.Color.primaryDefault, variant: e }, t),
                                  o.default.createElement(i.Icon, {
                                    className: "disclosure__summary--icon",
                                    color: l.Color.primaryDefault,
                                    name: i.IconName.ArrowUp,
                                    size: i.IconSize.Sm,
                                    marginInlineStart: 2
                                  })
                                );
                              }
                              return o.default.createElement(
                                "summary",
                                { className: "disclosure__summary" },
                                o.default.createElement(i.Icon, {
                                  className: "disclosure__summary--icon",
                                  name: i.IconName.Add,
                                  size: i.IconSize.Sm,
                                  marginInlineEnd: 2
                                }),
                                t
                              );
                            })(r, t),
                            o.default.createElement("div", { className: (0, a.default)("disclosure__content", n) }, e),
                            o.default.createElement("div", { ref: c, className: "disclosure__footer" })
                          )
                        : e
                    )
                  );
                };
                (d.propTypes = {
                  children: r.default.node.isRequired,
                  size: r.default.string,
                  title: r.default.string,
                  variant: r.default.string
                }),
                  (d.defaultProps = { size: "normal", title: null, variant: s.DisclosureVariant.Default });
                n.default = d;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/disclosure/disclosure.js" }
    ],
    [
      4634,
      { "./disclosure": 4633 },
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
                var o,
                  r = (o = e("./disclosure")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/disclosure/index.js" }
    ],
    [
      4635,
      { "../../component-library": 4453, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = l(e("prop-types")),
                  a = l(e("classnames")),
                  i = e("../../component-library");
                function l(e) {
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
                const c = ({
                  className: e,
                  disabled: t = !1,
                  onChange: n,
                  options: r,
                  selectedOption: l = "",
                  style: s,
                  title: c,
                  "data-testid": u
                }) => {
                  const d = (0, o.useCallback)(
                    (e) => {
                      e.preventDefault(), e.stopPropagation(), n(e.target.value);
                    },
                    [n]
                  );
                  return o.default.createElement(
                    "div",
                    { className: (0, a.default)("dropdown", e) },
                    o.default.createElement(
                      "select",
                      { className: "dropdown__select", "data-testid": u, disabled: t, title: c, onChange: d, style: s, value: l },
                      r.map((e) => o.default.createElement("option", { key: e.value, value: e.value }, e.name || e.value))
                    ),
                    o.default.createElement(i.Icon, {
                      name: i.IconName.ArrowDown,
                      size: i.IconSize.Sm,
                      className: "dropdown__icon-caret-down"
                    })
                  );
                };
                c.propTypes = {
                  className: r.default.string,
                  disabled: r.default.bool,
                  title: r.default.string,
                  onChange: r.default.func.isRequired,
                  options: r.default.arrayOf(r.default.exact({ name: r.default.string, value: r.default.string.isRequired })).isRequired,
                  selectedOption: r.default.string,
                  style: r.default.object,
                  "data-testid": r.default.string
                };
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/dropdown/dropdown.js" }
    ],
    [
      4636,
      { "./dropdown": 4635 },
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
                var o,
                  r = (o = e("./dropdown")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/dropdown/index.js" }
    ],
    [
      4637,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/accounts": 4791,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = c(e("classnames")),
                  a = c(e("prop-types")),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../../helpers/utils/accounts"),
                  s = e("../../component-library");
                function c(e) {
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
                function d(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
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
                class p extends o.Component {
                  constructor(...e) {
                    super(...e), d(this, "state", { isEditing: !1, value: this.props.defaultValue || "" });
                  }
                  async handleSubmit(e) {
                    e && (await this.props.onSubmit(this.state.value.trim()), this.setState({ isEditing: !1 }));
                  }
                  renderEditing() {
                    const { isValidAccountName: e, errorMessage: t } = (0, l.getAccountNameErrorMessage)(
                      this.props.accounts,
                      this.context,
                      this.state.value,
                      this.props.defaultValue
                    );
                    return o.default.createElement(
                      s.Box,
                      { className: (0, r.default)("editable-label", this.props.className), display: i.Display.Flex, gap: 3 },
                      o.default.createElement(s.FormTextField, {
                        required: !0,
                        value: this.state.value,
                        onKeyPress: (t) => {
                          "Enter" === t.key && this.handleSubmit(e);
                        },
                        onChange: (e) => {
                          this.setState({ value: e.target.value });
                        },
                        "data-testid": "editable-input",
                        error: !e,
                        helpText: t,
                        autoFocus: !0,
                        placeholder: this.context.t("accountName")
                      }),
                      o.default.createElement(s.ButtonIcon, { iconName: s.IconName.Check, onClick: () => this.handleSubmit(e) })
                    );
                  }
                  renderReadonly() {
                    return o.default.createElement(
                      s.Box,
                      { display: i.Display.Flex, alignItems: i.AlignItems.center, gap: 3 },
                      o.default.createElement(
                        s.Text,
                        { variant: i.TextVariant.bodyLgMedium, style: { wordBreak: "break-word" } },
                        this.state.value
                      ),
                      o.default.createElement(s.ButtonIcon, {
                        iconName: s.IconName.Edit,
                        ariaLabel: this.context.t("edit"),
                        "data-testid": "editable-label-button",
                        onClick: () => this.setState({ isEditing: !0 }),
                        color: i.Color.iconDefault
                      })
                    );
                  }
                  render() {
                    return this.state.isEditing ? this.renderEditing() : this.renderReadonly();
                  }
                }
                (n.default = p),
                  d(p, "propTypes", {
                    onSubmit: a.default.func.isRequired,
                    defaultValue: a.default.string,
                    className: a.default.string,
                    accounts: a.default.array
                  }),
                  d(p, "contextTypes", { t: a.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/editable-label/editable-label.js" }
    ],
    [
      4638,
      { "../../../helpers/constants/design-system": 4771, "../../component-library": 4453, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = l(e("react")),
                  r = l(e("prop-types")),
                  a = e("../../component-library"),
                  i = e("../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const s = (e, t) => {
                  const { errorMessage: n, errorKey: r } = e,
                    l = r ? t.t(r) : n;
                  return o.default.createElement(
                    "div",
                    { className: "error-message" },
                    o.default.createElement(a.Icon, {
                      className: "error-message__icon",
                      name: a.IconName.Warning,
                      size: a.IconSize.Sm,
                      color: i.IconColor.errorDefault,
                      marginRight: 2
                    }),
                    o.default.createElement("div", { className: "error-message__text" }, l)
                  );
                };
                (s.propTypes = { errorMessage: r.default.string, errorKey: r.default.string }), (s.contextTypes = { t: r.default.func });
                n.default = s;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/error-message/error-message.component.js" }
    ],
    [
      4639,
      { "./error-message.component": 4638 },
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
                var o,
                  r = (o = e("./error-message.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/error-message/index.js" }
    ],
    [
      4640,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useCopyToClipboard": 4830,
        "../../../hooks/useI18nContext": 4837,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = c(e("react")),
                  r = c(e("prop-types")),
                  a = e("../../../hooks/useI18nContext"),
                  i = e("../../../hooks/useCopyToClipboard"),
                  l = e("../../../helpers/constants/design-system"),
                  s = e("../../component-library");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u({ text: e = "", onClickCopy: t = null }) {
                  const n = (0, a.useI18nContext)(),
                    [r, c] = (0, i.useCopyToClipboard)(6e4);
                  return o.default.createElement(
                    s.Box,
                    {
                      display: l.Display.Flex,
                      justifyContent: l.JustifyContent.center,
                      flexDirection: l.FlexDirection.Column,
                      alignItems: l.AlignItems.center,
                      borderColor: l.BorderColor.borderDefault,
                      borderRadius: l.BorderRadius.MD,
                      padding: 4,
                      gap: 4
                    },
                    o.default.createElement(
                      s.Text,
                      {
                        display: l.Display.Flex,
                        justifyContent: l.JustifyContent.center,
                        className: "notranslate",
                        variant: l.TextVariant.bodyLgMedium,
                        "data-testid": "srp_text"
                      },
                      e
                    ),
                    o.default.createElement(
                      s.ButtonSecondary,
                      {
                        className: "export-text-container__button",
                        block: !0,
                        onClick: () => {
                          t && t(), c(e);
                        }
                      },
                      n(r ? "copiedExclamation" : "copyToClipboard")
                    )
                  );
                }
                u.propTypes = { text: r.default.string, onClickCopy: r.default.func };
                n.default = o.default.memo(u);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/export-text-container/export-text-container.component.js" }
    ],
    [
      4641,
      { "./export-text-container.component": 4640 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = (o = e("./export-text-container.component")) && o.__esModule ? o : { default: o };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/export-text-container/index.js" }
    ],
    [
      4642,
      {
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function ({
                    maxDropdownHeight: e,
                    noOptionsText: t,
                    onChange: n,
                    onOptionClick: o,
                    options: c,
                    placeholder: u,
                    value: p
                  }) {
                    const [f, m] = (0, r.useState)(!1),
                      h = (0, r.useRef)(),
                      [g, y] = (0, r.useState)(0),
                      b = (0, r.useRef)(null),
                      v = (0, r.useContext)(l.I18nContext);
                    (0, r.useEffect)(() => {
                      var e;
                      y(null === (e = h.current) || void 0 === e ? void 0 : e.offsetWidth);
                    });
                    const k = (0, r.useCallback)(
                        (e) => {
                          var t;
                          "form-combo-field__option" !==
                            (null == e || null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.className) && m(!1);
                        },
                        [m]
                      ),
                      _ = (0, r.useCallback)(
                        (e) => {
                          null == n || n(e.target.value);
                        },
                        [n]
                      ),
                      C = (0, r.useCallback)(
                        (e) => {
                          var t;
                          m(!1),
                            e && (_({ target: { value: e.primaryLabel } }), null == o || o(e)),
                            null === (t = b.current) || void 0 === t || t.focus();
                        },
                        [m, _]
                      ),
                      w = (0, r.useCallback)(() => {
                        var e;
                        _({ target: { value: "" } }), null === (e = b.current) || void 0 === e || e.focus();
                      }, [_]);
                    return r.default.createElement(
                      "div",
                      { className: "form-combo-field", ref: h },
                      r.default.createElement(
                        "div",
                        {
                          onClick: () => {
                            m(!0);
                          }
                        },
                        r.default.createElement(i.FormTextField, {
                          autoFocus: !0,
                          inputRef: b,
                          placeholder: u,
                          onBlur: k,
                          onKeyUp: (e) => {
                            "Enter" === e.key && k();
                          },
                          value: p,
                          onChange: _,
                          className: (0, a.default)({ "form-combo-field__value": !0, "form-combo-field__value-dropdown-visible": f }),
                          endAccessory: r.default.createElement(i.ButtonIcon, {
                            display: s.Display.Flex,
                            iconName: i.IconName.Close,
                            size: i.ButtonIconSize.Sm,
                            onClick: () => w(),
                            color: s.IconColor.iconMuted,
                            ariaLabel: v("clear")
                          })
                        })
                      ),
                      f && r.default.createElement(d, { maxDropdownHeight: e, noOptionsText: t, onOptionClick: C, options: c, width: g })
                    );
                  });
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = (o = e("classnames")) && o.__esModule ? o : { default: o },
                  i = e("../../component-library"),
                  l = e("../../../contexts/i18n"),
                  s = e("../../../helpers/constants/design-system");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u({ option: e, onClick: t }) {
                  const n = (0, r.useCallback)(
                      (n) => {
                        n.preventDefault(), n.stopPropagation(), n.nativeEvent.stopImmediatePropagation(), t(e);
                      },
                      [t, e]
                    ),
                    { primaryLabel: o, secondaryLabel: a } = e;
                  return r.default.createElement(
                    "div",
                    { tabIndex: 0, className: "form-combo-field__option", onClick: n },
                    r.default.createElement("span", { className: "form-combo-field__option-primary" }, o),
                    a ? r.default.createElement("span", { className: "form-combo-field__option-secondary" }, a) : null
                  );
                }
                function d({ maxDropdownHeight: e, noOptionsText: t, onOptionClick: n, options: o, width: i }) {
                  const s = (0, r.useContext)(l.I18nContext),
                    c = (0, r.useRef)(),
                    d = e ?? 179,
                    [p, f] = (0, r.useState)(0);
                  return (
                    (0, r.useEffect)(() => {
                      var e;
                      f((null === (e = c.current) || void 0 === e ? void 0 : e.scrollHeight) ?? 0);
                    }),
                    r.default.createElement(
                      "div",
                      {
                        ref: c,
                        style: { width: i, maxHeight: d },
                        className: (0, a.default)({ "form-combo-field__dropdown": !0, "form-combo-field__dropdown__scroll": p > d })
                      },
                      0 === o.length &&
                        r.default.createElement(u, { option: { primaryLabel: t ?? s("comboNoOptions") }, onClick: () => n(undefined) }),
                      o.map((e, t) =>
                        r.default.createElement(u, {
                          key: t,
                          option: e,
                          onClick: () => {
                            n(e);
                          }
                        })
                      )
                    )
                  );
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/form-combo-field/form-combo-field.tsx" }
    ],
    [
      4643,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../info-tooltip/info-tooltip": 4667,
        "../numeric-input/numeric-input.component": 4691,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var o = u(e("react")),
                  r = u(e("prop-types")),
                  a = u(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  l = u(e("../numeric-input/numeric-input.component")),
                  s = u(e("../info-tooltip/info-tooltip")),
                  c = e("../../component-library");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                function p({
                  dataTestId: e,
                  titleText: t = "",
                  TitleTextCustomComponent: n,
                  titleUnit: r = "",
                  TitleUnitCustomComponent: u,
                  tooltipText: p = "",
                  TooltipCustomComponent: f,
                  titleDetail: m = "",
                  titleDetailWrapperProps: h,
                  titleHeadingWrapperProps: g,
                  error: y,
                  onChange: b = undefined,
                  value: v = 0,
                  numeric: k,
                  detailText: _ = "",
                  autoFocus: C = !1,
                  password: w = !1,
                  allowDecimals: T = !1,
                  disabled: x = !1,
                  placeholder: E,
                  warning: O,
                  warningProps: M,
                  passwordStrength: j,
                  passwordStrengthText: P,
                  id: N,
                  inputProps: I,
                  wrappingLabelProps: S,
                  inputRef: A
                }) {
                  return o.default.createElement(
                    "div",
                    { className: (0, a.default)("form-field", { "form-field__row--error": y }) },
                    o.default.createElement(
                      c.Box,
                      d({ as: "label" }, S),
                      o.default.createElement(
                        "div",
                        { className: "form-field__heading" },
                        o.default.createElement(
                          c.Box,
                          d({ className: "form-field__heading-title", display: i.Display.Flex, alignItems: i.AlignItems.baseline }, g),
                          n ||
                            (t &&
                              o.default.createElement(
                                c.Text,
                                { as: "h6", variant: i.TextVariant.bodySmBold, display: i.Display.InlineBlock },
                                t
                              )),
                          u ||
                            (r &&
                              o.default.createElement(
                                c.Text,
                                {
                                  as: "h6",
                                  variant: i.TextVariant.bodySm,
                                  color: i.TextColor.textAlternative,
                                  display: i.Display.InlineBlock
                                },
                                r
                              )),
                          f || (p && o.default.createElement(s.default, { position: "top", contentText: p }))
                        ),
                        m &&
                          o.default.createElement(
                            c.Box,
                            d({ className: "form-field__heading-detail", textAlign: i.TextAlign.End, marginRight: 2 }, h),
                            m
                          )
                      ),
                      k
                        ? o.default.createElement(l.default, {
                            error: y,
                            onChange: b,
                            value: v,
                            detailText: _,
                            autoFocus: C,
                            allowDecimals: T,
                            disabled: x,
                            dataTestId: e,
                            placeholder: E,
                            id: N,
                            inputRef: A
                          })
                        : o.default.createElement(
                            "input",
                            d(
                              {
                                className: (0, a.default)("form-field__input", {
                                  "form-field__input--error": y,
                                  "form-field__input--warning": O
                                }),
                                onChange: (e) => b(e.target.value),
                                value: v,
                                type: w ? "password" : "text",
                                autoFocus: C,
                                disabled: x,
                                "data-testid": e,
                                placeholder: E,
                                id: N,
                                ref: A
                              },
                              I
                            )
                          ),
                      y &&
                        o.default.createElement(
                          c.Text,
                          { color: i.TextColor.errorDefault, variant: i.TextVariant.bodySm, as: "h6", className: "form-field__error" },
                          y
                        ),
                      O &&
                        o.default.createElement(
                          c.Text,
                          d(
                            {
                              color: i.TextColor.textAlternative,
                              variant: i.TextVariant.bodySm,
                              as: "h6",
                              className: "form-field__warning"
                            },
                            M
                          ),
                          O
                        ),
                      j &&
                        o.default.createElement(
                          c.Text,
                          {
                            color: i.TextColor.textDefault,
                            variant: i.TextVariant.bodySm,
                            as: "h6",
                            className: "form-field__password-strength"
                          },
                          j
                        ),
                      P &&
                        o.default.createElement(
                          c.Text,
                          {
                            color: i.TextColor.textAlternative,
                            variant: i.TextVariant.bodyXs,
                            as: "h6",
                            className: "form-field__password-strength-text"
                          },
                          P
                        )
                    )
                  );
                }
                p.propTypes = {
                  dataTestId: r.default.string,
                  titleText: r.default.oneOfType([r.default.string, r.default.node]),
                  TitleTextCustomComponent: r.default.node,
                  titleUnit: r.default.string,
                  TitleUnitCustomComponent: r.default.node,
                  tooltipText: r.default.oneOfType([r.default.string, r.default.node]),
                  TooltipCustomComponent: r.default.node,
                  titleDetail: r.default.oneOfType([r.default.string, r.default.node]),
                  titleDetailWrapperProps: r.default.shape({ ...c.Box.propTypes }),
                  titleHeadingWrapperProps: r.default.shape({ ...c.Box.propTypes }),
                  error: r.default.string,
                  warning: r.default.string,
                  warningProps: r.default.shape({ ...c.Text.propTypes }),
                  onChange: r.default.func,
                  value: r.default.oneOfType([r.default.number, r.default.string]),
                  detailText: r.default.string,
                  autoFocus: r.default.bool,
                  numeric: r.default.bool,
                  password: r.default.bool,
                  allowDecimals: r.default.bool,
                  disabled: r.default.bool,
                  placeholder: r.default.string,
                  passwordStrength: r.default.oneOfType([r.default.string, r.default.node]),
                  passwordStrengthText: r.default.string,
                  id: r.default.string,
                  inputProps: r.default.object,
                  wrappingLabelProps: r.default.object,
                  inputRef: r.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/form-field/form-field.js" }
    ],
    [
      4644,
      { "./form-field": 4643 },
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
                var o,
                  r = (o = e("./form-field")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/form-field/index.js" }
    ],
    [
      4645,
      { "../../../../shared/modules/conversion.utils": 3988, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = (o = e("prop-types")) && o.__esModule ? o : { default: o },
                  i = e("../../../../shared/modules/conversion.utils");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                class s extends r.PureComponent {
                  render() {
                    const { className: e, value: t } = this.props,
                      n = (0, i.hexToDecimal)(t);
                    return r.default.createElement("div", { className: e }, n);
                  }
                }
                (n.default = s),
                  (function (e, t, n) {
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = n);
                  })(s, "propTypes", { className: a.default.string, value: a.default.string });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/hex-to-decimal/hex-to-decimal.component.js" }
    ],
    [
      4646,
      { "./hex-to-decimal.component": 4645 },
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
                var o,
                  r = (o = e("./hex-to-decimal.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/hex-to-decimal/index.js" }
    ],
    [
      4647,
      { classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = l);
                var o = i(e("react")),
                  r = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l({ children: e, size: t, className: n }) {
                  const r = { height: `${t}px`, width: `${t}px` };
                  return o.default.createElement("div", { className: (0, a.default)("icon-border", n), style: r }, e);
                }
                l.propTypes = { className: r.default.string, children: r.default.node.isRequired, size: r.default.number.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-border/icon-border.js" }
    ],
    [
      4648,
      { "./icon-border": 4647 },
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
                var o,
                  r = (o = e("./icon-border")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-border/index.js" }
    ],
    [
      4649,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../tooltip/tooltip": 4737,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = d);
                var o = c(e("react")),
                  r = c(e("prop-types")),
                  a = c(e("classnames")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = c(e("../tooltip/tooltip"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = (e) => e;
                function d({ onClick: e, Icon: t, disabled: n, label: r, tooltipRender: c, className: d, ...p }) {
                  const f = c ?? u;
                  return o.default.createElement(
                    "button",
                    {
                      className: (0, a.default)("icon-button", d, { "icon-button--disabled": n }),
                      "data-testid": p["data-testid"] ?? undefined,
                      onClick: e,
                      disabled: n
                    },
                    f(
                      o.default.createElement(
                        o.default.Fragment,
                        null,
                        o.default.createElement("div", { className: "icon-button__circle" }, t),
                        r.length > 10
                          ? o.default.createElement(
                              s.default,
                              { title: r, position: "bottom" },
                              o.default.createElement(
                                i.Text,
                                { className: "icon-button__label-large", ellipsis: !0, variant: l.TextVariant.bodySm },
                                r
                              )
                            )
                          : o.default.createElement(
                              i.Text,
                              { className: "icon-button__label", ellipsis: !0, variant: l.TextVariant.bodySm },
                              r
                            )
                      )
                    )
                  );
                }
                d.propTypes = {
                  onClick: r.default.func.isRequired,
                  Icon: r.default.object.isRequired,
                  disabled: r.default.bool,
                  label: r.default.string.isRequired,
                  tooltipRender: r.default.func,
                  className: r.default.string,
                  "data-testid": r.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-button/icon-button.js" }
    ],
    [
      4650,
      { "./icon-button": 4649 },
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
                var o,
                  r = (o = e("./icon-button")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-button/index.js" }
    ],
    [
      4651,
      { classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
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
                function s() {
                  return (
                    (s = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                const c = ({ name: e = "", icon: t = null, size: n, className: r, fallbackClassName: i, wrapperClassName: l, ...c }) => {
                  const [u, d] = (0, o.useState)(!1),
                    p = n ? { height: `${n}px`, width: `${n}px` } : {};
                  return o.default.createElement(
                    "div",
                    { className: (0, a.default)(l) },
                    !u && t
                      ? o.default.createElement(
                          "img",
                          s(
                            {
                              onError: () => {
                                d(!0);
                              },
                              src: t,
                              style: p,
                              className: r,
                              alt: e || "icon"
                            },
                            c
                          )
                        )
                      : o.default.createElement(
                          "span",
                          { className: (0, a.default)("icon-with-fallback__fallback", i) },
                          (null == e ? void 0 : e.charAt(0).toUpperCase()) || ""
                        )
                  );
                };
                c.propTypes = {
                  icon: r.default.string,
                  name: r.default.string,
                  size: r.default.number,
                  className: r.default.string,
                  wrapperClassName: r.default.string,
                  fallbackClassName: r.default.string
                };
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-with-fallback/icon-with-fallback.component.js" }
    ],
    [
      4652,
      { "./icon-with-fallback.component": 4651 },
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
                var o,
                  r = (o = e("./icon-with-fallback.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-with-fallback/index.js" }
    ],
    [
      4653,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = a(e("react")),
                  r = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ size: e = 24, color: t = "currentColor", ariaLabel: n, className: r }) =>
                  o.default.createElement(
                    "svg",
                    {
                      width: e,
                      height: e,
                      fill: t,
                      className: r,
                      "aria-label": n,
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 640 512"
                    },
                    o.default.createElement("path", {
                      d: "M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"
                    })
                  );
                i.propTypes = { size: r.default.number, color: r.default.string, className: r.default.string, ariaLabel: r.default.string };
                n.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/icon-eye-slash.js" }
    ],
    [
      4654,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = a(e("react")),
                  r = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ size: e = 24, color: t = "currentColor", ariaLabel: n, className: r }) =>
                  o.default.createElement(
                    "svg",
                    {
                      width: e,
                      height: e,
                      fill: t,
                      className: r,
                      "aria-label": n,
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 576 512"
                    },
                    o.default.createElement("path", {
                      d: "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
                    })
                  );
                i.propTypes = { size: r.default.number, color: r.default.string, className: r.default.string, ariaLabel: r.default.string };
                n.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/icon-eye.js" }
    ],
    [
      4655,
      { "../../../helpers/constants/design-system": 4771, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = s);
                var o = l(e("react")),
                  r = l(e("classnames")),
                  a = l(e("prop-types")),
                  i = e("../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s({ severity: e }) {
                  const t = (0, r.default)("info-icon", {
                    "info-icon--success": e === i.SEVERITIES.SUCCESS,
                    "info-icon--warning": e === i.SEVERITIES.WARNING,
                    "info-icon--danger": e === i.SEVERITIES.DANGER,
                    "info-icon--info": e === i.SEVERITIES.INFO
                  });
                  return o.default.createElement(
                    "svg",
                    { className: t, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    o.default.createElement("path", {
                      d: "M15.75 8C15.75 3.75 12.25 0.25 8 0.25C3.71875 0.25 0.25 3.75 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.25 15.75 15.75 12.2812 15.75 8ZM8 9.5625C8.78125 9.5625 9.4375 10.2188 9.4375 11C9.4375 11.8125 8.78125 12.4375 8 12.4375C7.1875 12.4375 6.5625 11.8125 6.5625 11C6.5625 10.2188 7.1875 9.5625 8 9.5625ZM6.625 4.40625C6.59375 4.1875 6.78125 4 7 4H8.96875C9.1875 4 9.375 4.1875 9.34375 4.40625L9.125 8.65625C9.09375 8.875 8.9375 9 8.75 9H7.21875C7.03125 9 6.875 8.875 6.84375 8.65625L6.625 4.40625Z"
                    })
                  );
                }
                s.propTypes = { severity: a.default.oneOf(Object.values(i.SEVERITIES)) };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/info-icon-inverted.component.js" }
    ],
    [
      4656,
      { "../../../helpers/constants/design-system": 4771, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = s);
                var o = l(e("react")),
                  r = l(e("classnames")),
                  a = l(e("prop-types")),
                  i = e("../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s({ severity: e }) {
                  const t = (0, r.default)("info-icon", {
                    "info-icon--success": e === i.SEVERITIES.SUCCESS,
                    "info-icon--warning": e === i.SEVERITIES.WARNING,
                    "info-icon--danger": e === i.SEVERITIES.DANGER,
                    "info-icon--info": e === i.SEVERITIES.INFO
                  });
                  return o.default.createElement(
                    "svg",
                    { className: t, width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
                    o.default.createElement("path", {
                      d: "M7.2 5.6H8.8V4H7.2V5.6ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM8 0C6.94943 0 5.90914 0.206926 4.93853 0.608964C3.96793 1.011 3.08601 1.60028 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM7.2 12H8.8V7.2H7.2V12Z"
                    })
                  );
                }
                s.propTypes = { severity: a.default.oneOf(Object.values(i.SEVERITIES)) };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/info-icon.component.js" }
    ],
    [
      4657,
      { classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = i(e("react")),
                  r = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const l = ({ className: e, size: t }) =>
                  o.default.createElement(
                    "svg",
                    {
                      className: (0, a.default)("preloader__icon", e),
                      width: t,
                      height: t,
                      viewBox: "0 0 16 16",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    o.default.createElement("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M8 13.7143C4.84409 13.7143 2.28571 11.1559 2.28571 8C2.28571 4.84409 4.84409 2.28571 8 2.28571C11.1559 2.28571 13.7143 4.84409 13.7143 8C13.7143 11.1559 11.1559 13.7143 8 13.7143ZM8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z",
                      fill: "#C1DAEC"
                    }),
                    o.default.createElement(
                      "mask",
                      { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "16", height: "16" },
                      o.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8 13.7143C4.84409 13.7143 2.28571 11.1559 2.28571 8C2.28571 4.84409 4.84409 2.28571 8 2.28571C11.1559 2.28571 13.7143 4.84409 13.7143 8C13.7143 11.1559 11.1559 13.7143 8 13.7143ZM8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z",
                        fill: "#037DD6"
                      })
                    ),
                    o.default.createElement(
                      "g",
                      { mask: "url(#mask0)" },
                      o.default.createElement("path", { d: "M6.85718 17.9999V11.4285V8.28564H-4.85711V17.9999H6.85718Z", fill: "#037DD6" })
                    )
                  );
                (l.defaultProps = { className: undefined }),
                  (l.propTypes = { className: r.default.string, size: r.default.number.isRequired });
                n.default = l;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/preloader/preloader-icon.component.js" }
    ],
    [
      4658,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = a(e("react")),
                  r = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ size: e = 24, color: t = "currentColor", ariaLabel: n, className: r }) =>
                  o.default.createElement(
                    "svg",
                    {
                      width: e,
                      height: e,
                      fill: t,
                      className: r,
                      "aria-label": n,
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 512 512"
                    },
                    o.default.createElement("path", {
                      d: "m235 427c-51 0-100-21-136-57-36-36-56-84-56-135 0-26 5-51 14-74 10-23 24-44 42-62 18-18 39-32 62-42 23-9 48-14 74-14 25 0 50 5 73 14 23 10 45 24 62 42 18 18 32 39 42 62 10 23 15 48 15 74 0 43-15 86-42 119l78 79c2 2 4 4 5 7 1 2 1 5 1 8 0 3 0 6-1 8-1 3-3 5-5 7-2 2-4 4-7 5-2 1-5 1-8 1-3 0-6 0-8-1-3-1-5-3-7-5l-79-78c-33 27-76 42-119 42z m0-43c82 0 149-67 149-149 0-83-67-150-149-150-83 0-150 67-150 150 0 82 67 149 150 149z"
                    })
                  );
                i.propTypes = { size: r.default.number, color: r.default.string, className: r.default.string, ariaLabel: r.default.string };
                n.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/search-icon.js" }
    ],
    [
      4659,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = i);
                var o = a(e("react")),
                  r = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i({ reverseColors: e }) {
                  const t = e ? "var(--color-primary-default)" : "var(--color-primary-inverse)",
                    n = e ? "var(--color-primary-inverse)" : "var(--color-primary-default)";
                  return o.default.createElement(
                    "svg",
                    { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    o.default.createElement("path", {
                      d: "M13.2148 9.05384C13.432 8.40203 14.8878 7.92403 14.8878 7.20703C14.8878 6.49003 13.432 6.01204 13.2148 5.36022C12.9975 4.68668 13.8883 3.44823 13.4755 2.88332C13.0627 2.31842 11.607 2.77469 11.0421 2.3836C10.4771 1.97078 10.4771 0.449879 9.80361 0.232608C9.15179 0.0153358 8.26098 1.25378 7.54398 1.25378C6.82698 1.25378 5.91444 0.0153358 5.28435 0.232608C4.61081 0.449879 4.61081 1.99251 4.04591 2.3836C3.481 2.79641 2.02528 2.31842 1.61246 2.88332C1.19965 3.44823 2.09046 4.68668 1.87319 5.36022C1.65592 6.01204 0.200195 6.49003 0.200195 7.20703C0.200195 7.92403 1.65592 8.40203 1.87319 9.05384C2.09046 9.72738 1.19965 10.9658 1.61246 11.5307C2.02528 12.0956 3.481 11.6394 4.04591 12.0305C4.61081 12.4433 4.61081 13.9642 5.28435 14.1815C5.93617 14.3987 6.82698 13.1603 7.54398 13.1603C8.26098 13.1603 9.17352 14.3987 9.80361 14.1815C10.4771 13.9642 10.4771 12.4216 11.0421 12.0305C11.607 11.6176 13.0627 12.0956 13.4755 11.5307C13.8883 10.9658 12.9975 9.70566 13.2148 9.05384Z",
                      fill: t
                    }),
                    o.default.createElement("path", {
                      d: "M6.42285 10.084L4.13965 7.81445C4.07585 7.75065 4.04395 7.66862 4.04395 7.56836C4.04395 7.4681 4.07585 7.38607 4.13965 7.32227L4.64551 6.83008C4.70931 6.75716 4.78678 6.7207 4.87793 6.7207C4.97819 6.7207 5.06478 6.75716 5.1377 6.83008L6.66895 8.36133L9.9502 5.08008C10.0231 5.00716 10.1051 4.9707 10.1963 4.9707C10.2965 4.9707 10.3786 5.00716 10.4424 5.08008L10.9482 5.57227C11.012 5.63607 11.0439 5.7181 11.0439 5.81836C11.0439 5.91862 11.012 6.00065 10.9482 6.06445L6.91504 10.084C6.85124 10.1569 6.76921 10.1934 6.66895 10.1934C6.56868 10.1934 6.48665 10.1569 6.42285 10.084Z",
                      fill: n
                    })
                  );
                }
                i.propTypes = { reverseColors: r.default.bool };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/sun-check-icon.component.js" }
    ],
    [
      4660,
      { blo: 2330, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = i(e("react")),
                  r = i(e("prop-types")),
                  a = e("blo");
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const l = ({ address: e, diameter: t, alt: n = "", borderRadius: r }) =>
                  o.default.createElement("img", { src: (0, a.blo)(e), height: t, width: t, style: { borderRadius: r }, alt: n });
                l.propTypes = {
                  address: r.default.string.isRequired,
                  diameter: r.default.number.isRequired,
                  alt: r.default.string,
                  borderRadius: r.default.string
                };
                n.default = l;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/identicon/blockieIdenticon/blockieIdenticon.component.js" }
    ],
    [
      4661,
      { "./blockieIdenticon.component": 4660 },
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
                var o,
                  r = (o = e("./blockieIdenticon.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/identicon/blockieIdenticon/index.js" }
    ],
    [
      4662,
      {
        "../../../helpers/utils/util": 4812,
        "../jazzicon": 4668,
        "./blockieIdenticon": 4661,
        classnames: 2414,
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
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = u(e("prop-types")),
                  a = u(e("classnames")),
                  i = e("lodash"),
                  l = u(e("../jazzicon")),
                  s = e("../../../helpers/utils/util"),
                  c = u(e("./blockieIdenticon"));
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
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
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
                const f = (e) => ({ height: e, width: e, borderRadius: e / 2 });
                class m extends o.Component {
                  constructor(...e) {
                    super(...e), p(this, "state", { imageLoadingError: !1 });
                  }
                  renderImage() {
                    const { className: e, diameter: t, alt: n, imageBorder: r, ipfsGateway: i } = this.props;
                    let { image: l } = this.props;
                    return (
                      Array.isArray(l) && l.length && (l = l[0]),
                      "string" == typeof l && l.toLowerCase().startsWith("ipfs://") && (l = (0, s.getAssetImageURL)(l, i)),
                      o.default.createElement("img", {
                        className: (0, a.default)("identicon", e, { "identicon__image-border": r }),
                        src: l,
                        style: f(t),
                        alt: n,
                        onError: () => {
                          this.setState({ imageLoadingError: !0 });
                        }
                      })
                    );
                  }
                  renderJazzicon() {
                    const { address: e, className: t, diameter: n, alt: r, tokenList: i } = this.props;
                    return o.default.createElement(l.default, {
                      address: e,
                      diameter: n,
                      className: (0, a.default)("identicon", t),
                      style: f(n),
                      alt: r,
                      tokenList: i
                    });
                  }
                  renderBlockie() {
                    const { address: e, className: t, diameter: n, alt: r } = this.props;
                    return o.default.createElement(
                      "div",
                      { className: (0, a.default)("identicon", t), style: f(n) },
                      o.default.createElement(c.default, { address: e, diameter: n, alt: r })
                    );
                  }
                  renderBlockieOrJazzIcon() {
                    const { useBlockie: e } = this.props;
                    return e ? this.renderBlockie() : this.renderJazzicon();
                  }
                  shouldComponentUpdate(e, t) {
                    return !(0, i.isEqual)(e, this.props) || !(0, i.isEqual)(t, this.state);
                  }
                  render() {
                    const { address: e, image: t, addBorder: n, diameter: r, tokenList: i } = this.props,
                      { imageLoadingError: l } = this.state,
                      s = r + 8;
                    return l
                      ? this.renderBlockieOrJazzIcon()
                      : t
                      ? this.renderImage()
                      : e
                      ? null !== (c = i[e.toLowerCase()]) && void 0 !== c && c.iconUrl
                        ? this.renderJazzicon()
                        : o.default.createElement(
                            "div",
                            { className: (0, a.default)({ "identicon__address-wrapper": n }), style: n ? f(s) : null },
                            this.renderBlockieOrJazzIcon()
                          )
                      : o.default.createElement("div", { style: f(r), className: "identicon__image-border" });
                    var c;
                  }
                }
                (n.default = m),
                  p(m, "propTypes", {
                    addBorder: r.default.bool,
                    address: r.default.string,
                    className: r.default.string,
                    diameter: r.default.number,
                    image: r.default.oneOfType([r.default.string, r.default.array]),
                    useBlockie: r.default.bool,
                    alt: r.default.string,
                    imageBorder: r.default.bool,
                    tokenList: r.default.object,
                    ipfsGateway: r.default.string
                  }),
                  p(m, "defaultProps", {
                    addBorder: !1,
                    address: undefined,
                    className: undefined,
                    diameter: 46,
                    image: undefined,
                    useBlockie: !1,
                    alt: "",
                    tokenList: {}
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/identicon/identicon.component.js" }
    ],
    [
      4663,
      { "../../../selectors": 5197, "./identicon.component": 4662, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = e("react-redux"),
                  a = e("../../../selectors"),
                  i = (o = e("./identicon.component")) && o.__esModule ? o : { default: o };
                n.default = (0, r.connect)((e) => {
                  const {
                    metamask: { useBlockie: t, ipfsGateway: n }
                  } = e;
                  return { useBlockie: t, tokenList: (0, a.getTokenList)(e), ipfsGateway: n };
                })(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/identicon/identicon.container.js" }
    ],
    [
      4664,
      { "./identicon.container": 4663 },
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
                var o,
                  r = (o = e("./identicon.container")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/identicon/index.js" }
    ],
    [
      4665,
      { "./info-tooltip": 4667 },
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
                var o,
                  r = (o = e("./info-tooltip")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/info-tooltip/index.js" }
    ],
    [
      4666,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = i);
                var o = a(e("react")),
                  r = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i({ fillColor: e = "var(--color-icon-default)" }) {
                  return o.default.createElement(
                    "svg",
                    { viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" },
                    o.default.createElement("path", {
                      d: "M5 0C2.2 0 0 2.2 0 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.2-.7-.6.3-.8.7-.8zm.7 6H4.3V4.3h1.5V8z",
                      fill: e
                    })
                  );
                }
                i.propTypes = { fillColor: r.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/info-tooltip/info-tooltip-icon.js" }
    ],
    [
      4667,
      { "../tooltip": 4736, "./info-tooltip-icon": 4666, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = u);
                var o = s(e("react")),
                  r = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = s(e("../tooltip")),
                  l = s(e("./info-tooltip-icon"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = {
                  top: "info-tooltip__top-tooltip-arrow",
                  bottom: "info-tooltip__bottom-tooltip-arrow",
                  left: "info-tooltip__left-tooltip-arrow",
                  right: "info-tooltip__right-tooltip-arrow"
                };
                function u({
                  contentText: e = "",
                  position: t = "",
                  containerClassName: n,
                  wrapperClassName: r,
                  iconFillColor: s = "var(--color-icon-alternative)"
                }) {
                  return o.default.createElement(
                    "div",
                    { className: "info-tooltip", "data-testid": "info-tooltip" },
                    o.default.createElement(
                      i.default,
                      {
                        interactive: !0,
                        position: t,
                        containerClassName: (0, a.default)("info-tooltip__tooltip-container", n),
                        wrapperClassName: r,
                        tooltipInnerClassName: "info-tooltip__tooltip-content",
                        tooltipArrowClassName: c[t],
                        html: e,
                        theme: "tippy-tooltip-info"
                      },
                      o.default.createElement(l.default, { fillColor: s })
                    )
                  );
                }
                u.propTypes = {
                  contentText: r.default.node,
                  position: r.default.oneOf(["top", "left", "bottom", "right"]),
                  containerClassName: r.default.string,
                  wrapperClassName: r.default.string,
                  iconFillColor: r.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/info-tooltip/info-tooltip.js" }
    ],
    [
      4668,
      { "./jazzicon.component": 4669 },
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
                var o,
                  r = (o = e("./jazzicon.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/jazzicon/index.js" }
    ],
    [
      4669,
      { "../../../helpers/utils/icon-factory": 4800, "@metamask/jazzicon": 1295, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = i(e("prop-types")),
                  a = i(e("@metamask/jazzicon"));
                function i(e) {
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
                const s = (0, i(e("../../../helpers/utils/icon-factory")).default)(a.default);
                function c({ address: e, className: t, diameter: n = 46, style: r, tokenList: a = {} }) {
                  const i = (0, o.useRef)();
                  return (
                    (0, o.useEffect)(() => {
                      const t = i.current,
                        o = s.iconForAddress(e, n, a[null == e ? void 0 : e.toLowerCase()]);
                      return (
                        null == t || t.appendChild(o),
                        () => {
                          for (; t.firstChild; ) t.firstChild.remove();
                        }
                      );
                    }, [e, n, a]),
                    o.default.createElement("div", { ref: i, className: t, style: r })
                  );
                }
                c.propTypes = {
                  address: r.default.string.isRequired,
                  className: r.default.string,
                  diameter: r.default.number,
                  style: r.default.object,
                  tokenList: r.default.object
                };
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/jazzicon/jazzicon.component.js" }
    ],
    [
      4670,
      {
        "../../../ducks/app/app": 4755,
        "../../../helpers/utils/gas": 4797,
        "../../../hooks/useShouldAnimateGasEstimations": 4851,
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
                var o = e("react-redux"),
                  r = u(e("classnames")),
                  a = u(e("prop-types")),
                  i = u(e("react")),
                  l = e("../../../helpers/utils/gas"),
                  s = e("../../../ducks/app/app"),
                  c = e("../../../hooks/useShouldAnimateGasEstimations");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const d = "loading-heartbeat--active";
                function p({ estimateUsed: e, backgroundColor: t = "var(--color-background-default)" }) {
                  (0, c.useShouldAnimateGasEstimations)();
                  const n = (0, o.useSelector)(s.getGasLoadingAnimationIsShowing);
                  return e && !(0, l.isMetamaskSuggestedGasEstimate)(e)
                    ? null
                    : i.default.createElement("div", {
                        className: (0, r.default)("loading-heartbeat", { [d]: n }),
                        onClick: (e) => {
                          e.preventDefault(), e.stopPropagation();
                        },
                        style: { backgroundColor: t }
                      });
                }
                p.propTypes = { backgroundColor: a.default.string, estimateUsed: a.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/loading-heartbeat/index.js" }
    ],
    [
      4671,
      { "./loading-indicator": 4672 },
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
                var o,
                  r = (o = e("./loading-indicator")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/loading-indicator/index.js" }
    ],
    [
      4672,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = i);
                var o = a(e("react")),
                  r = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i({ alt: e, title: t, isLoading: n, children: r = null }) {
                  return n
                    ? o.default.createElement(
                        "span",
                        { className: "loading-indicator" },
                        o.default.createElement("img", {
                          className: "loading-indicator__spinner",
                          alt: e,
                          title: t,
                          src: "images/loading.svg"
                        })
                      )
                    : r;
                }
                i.propTypes = {
                  isLoading: r.default.bool.isRequired,
                  alt: r.default.string.isRequired,
                  title: r.default.string.isRequired,
                  children: r.default.node
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/loading-indicator/loading-indicator.js" }
    ],
    [
      4673,
      { "./loading-screen.component": 4674 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = (o = e("./loading-screen.component")) && o.__esModule ? o : { default: o };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/loading-screen/index.js" }
    ],
    [
      4674,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../spinner": 4717,
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
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = s(e("prop-types")),
                  a = s(e("../spinner")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system");
                function s(e) {
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
                const u = ({ header: e, loadingMessage: t, showLoadingSpinner: n = !0 }) =>
                  o.default.createElement(
                    i.Box,
                    { className: "loading-overlay" },
                    e,
                    o.default.createElement(
                      i.Box,
                      { className: "loading-overlay__container", marginBottom: 3 },
                      n &&
                        o.default.createElement(a.default, { color: "var(--color-warning-default)", className: "loading-overlay__spinner" })
                    ),
                    o.default.createElement(
                      i.Box,
                      {
                        display: l.Display.Flex,
                        flexDirection: l.FlexDirection.Row,
                        justifyContent: l.JustifyContent.center,
                        alignItems: l.AlignItems.center
                      },
                      t ? ((0, o.isValidElement)(t) ? t : o.default.createElement("span", { style: { textAlign: "center" } }, t)) : null
                    )
                  );
                u.propTypes = {
                  header: r.default.element,
                  loadingMessage: r.default.oneOfType([r.default.string, r.default.element]),
                  showLoadingSpinner: r.default.bool
                };
                n.default = o.default.memo(u);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/loading-screen/loading-screen.component.js" }
    ],
    [
      4675,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = a(e("react")),
                  r = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ width: e = "100%", color: t = "var(--color-text-default)", className: n, ariaLabel: r }) =>
                  o.default.createElement(
                    "svg",
                    { width: e, fill: t, className: n, "aria-label": r, viewBox: "0 0 2546 491", xmlns: "http://www.w3.org/2000/svg" },
                    o.default.createElement("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M2460 15V30H2488H2516V140V250H2531H2546V125V0H2503H2460V15ZM1861 116.038C1796.99 123.881 1741.39 163.865 1712.97 222.5C1680.8 288.855 1690.83 365.835 1739.17 423.5C1778.97 470.987 1839.99 496.383 1898.79 489.935C1937.49 485.692 1976.26 467.949 2005.03 441.315L2010.98 435.803L1997.36 421.444L1983.74 407.085L1974.62 415.109C1953.06 434.078 1931.7 444.965 1904.88 450.669C1893.48 453.093 1867.95 453.103 1855.82 450.689C1837.26 446.995 1819.5 439.522 1802.54 428.264C1790.63 420.354 1773.3 403.429 1764.69 391.295C1752.74 374.459 1743.39 352.909 1738.81 331.648C1735.63 316.902 1735.66 289.005 1738.87 274C1751.85 213.28 1797.55 166.907 1855.82 155.311C1867.95 152.897 1893.48 152.907 1904.88 155.331C1931.7 161.035 1953.06 171.922 1974.62 190.891L1983.74 198.915L1997.38 184.534L2011.02 170.153L2003.26 163.053C1977.39 139.393 1945.42 123.844 1909.5 117.465C1898.75 115.555 1871.49 114.753 1861 116.038ZM0 303V485H120H240V465.5V446H140.5H41V283.5V121H20.5H0V303ZM407.496 297.75C364.676 394.963 328.599 476.871 327.325 479.769L325.009 485.038L347.632 484.769L370.256 484.5L386.106 448.5C394.823 428.7 403.087 410.135 404.469 407.245L406.983 401.99L508.152 402.245L609.321 402.5L627.41 443.719L645.5 484.938L668.135 484.969L690.769 485L655.85 405.75C636.645 362.163 600.584 280.269 575.716 223.763L530.5 121.027L507.925 121.013L485.35 121L407.496 297.75ZM749 140.5V160H810H871V322.5V485H891.5H912V322.5V160H973H1034V140.5V121H891.5H749V140.5ZM1133 140.5V160H1194H1255V322.5V485H1275.5H1296V322.5V160H1357H1418V140.5V121H1275.5H1133V140.5ZM1534 303V485H1554.5H1575V303V121H1554.5H1534V303ZM2120 303V485H2250.5H2381V465.5V446H2271.5H2162V382.5V319H2260.5H2359V299.5V280H2260.5H2162V220V160H2271.5H2381V140.5V121H2250.5H2120V303ZM550.073 267.125C572.858 318.894 591.65 361.644 591.833 362.125C592.022 362.621 555.677 363 507.976 363C428.21 363 423.821 362.908 424.447 361.25C426.983 354.537 507.62 173.036 508.073 173.02C508.388 173.009 527.288 215.356 550.073 267.125Z"
                    })
                  );
                i.propTypes = {
                  width: r.default.string,
                  color: r.default.string,
                  className: r.default.string,
                  ariaLabel: r.default.string
                };
                n.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/logo/logo-lattice.js" }
    ],
    [
      4676,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = a(e("react")),
                  r = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ width: e = "100%", color: t = "var(--color-text-default)", className: n, ariaLabel: r }) =>
                  o.default.createElement(
                    "svg",
                    {
                      width: e,
                      fill: t,
                      className: n,
                      "aria-label": r,
                      viewBox: "0 0 2000.58 669.35",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    o.default.createElement("path", {
                      d: "m1711.35 627.2v42.14h289.22v-190.05h-42.14v147.91zm0-627.2v42.14h247.08v147.92h42.14v-190.06zm-149.15 326v-97.92h66.11c32.23 0 43.8 10.74 43.8 40.08v17.35c0 30.16-11.16 40.49-43.8 40.49zm104.94 17.35c30.16-7.85 51.23-35.95 51.23-69.41 0-21.07-8.26-40.08-23.96-55.37-19.83-19.01-46.28-28.51-80.57-28.51h-92.96v289.22h41.32v-115.27h61.98c31.81 0 44.62 13.22 44.62 46.28v69h42.14v-62.39c0-45.45-10.74-62.8-43.8-67.76zm-347.88 9.5h127.26v-38.01h-127.26v-86.77h139.65v-38.01h-181.8v289.22h188v-38.01h-145.85zm-138.42 15.29v19.83c0 41.73-15.29 55.37-53.71 55.37h-9.09c-38.43 0-57.02-12.4-57.02-69.83v-77.68c0-57.84 19.42-69.83 57.84-69.83h8.26c37.6 0 49.58 14.05 49.99 52.89h45.45c-4.13-57.02-42.14-92.96-99.16-92.96-27.68 0-50.82 8.68-68.17 25.2-26.03 24.38-40.49 65.7-40.49 123.54 0 55.78 12.4 97.1 38.01 122.71 17.35 16.94 41.32 26.03 64.87 26.03 24.79 0 47.52-9.92 59.08-31.4h5.78v27.27h38.01v-149.15h-111.97v38.01zm-364.41-140.07h45.04c42.56 0 65.7 10.74 65.7 68.59v76.02c0 57.84-23.14 68.59-65.7 68.59h-45.04zm48.75 251.22c78.92 0 108.25-59.91 108.25-144.61 0-85.94-31.4-144.61-109.08-144.61h-89.25v289.22zm-289.63-126.44h127.26v-38.01h-127.26v-86.77h139.65v-38.01h-181.8v289.22h188v-38.01h-145.85zm-243.77-162.79h-42.14v289.22h190.06v-38.01h-147.92zm-331.78 289.23v190.06h289.22v-42.15h-247.08v-147.91zm0-479.29v190.06h42.14v-147.92h247.08v-42.14z"
                    })
                  );
                i.propTypes = {
                  width: r.default.string,
                  color: r.default.string,
                  className: r.default.string,
                  ariaLabel: r.default.string
                };
                n.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/logo/logo-ledger.js" }
    ],
    [
      4677,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = a(e("react")),
                  r = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ width: e = "100%", color: t = "var(--color-text-default)", className: n, ariaLabel: r }) =>
                  o.default.createElement(
                    "svg",
                    { width: e, fill: t, className: n, "aria-label": r, viewBox: "0 0 107 24", xmlns: "http://www.w3.org/2000/svg" },
                    o.default.createElement("path", {
                      d: "M1.3333 8H6.6667C7.403 8 8 7.403 8 6.6667V1.3333C8 0.597002 7.403 0 6.6667 0H1.3333C0.597 0 0 0.597002 0 1.3333V6.6667C0 7.403 0.597 8 1.3333 8ZM2.6667 2.6667H5.3333V5.3333H2.6667V2.6667ZM0.6667 13.3333H2C2.3682 13.3333 2.6667 13.0349 2.6667 12.6667V11.3333C2.6667 10.9651 2.3682 10.6667 2 10.6667H0.6667C0.2985 10.6667 0 10.9651 0 11.3333V12.6667C0 13.0349 0.2985 13.3333 0.6667 13.3333ZM6.6667 16H1.3333C0.597 16 0 16.597 0 17.3333V22.6667C0 23.403 0.597 24 1.3333 24H6.6667C7.403 24 8 23.403 8 22.6667V17.3333C8 16.597 7.403 16 6.6667 16ZM5.3333 21.3333H2.6667V18.6667H5.3333V21.3333ZM19.3333 24H23.3333C23.7015 24 24 23.7015 24 23.3333V19.3333C24 18.9651 23.7015 18.6667 23.3333 18.6667H22C21.6318 18.6667 21.3333 18.9651 21.3333 19.3333V21.3333H18.6667V23.3333C18.6667 23.7015 18.9651 24 19.3333 24ZM22.6667 0H17.3333C16.597 0 16 0.597002 16 1.3333V6.6667C16 7.403 16.597 8 17.3333 8H22.6667C23.403 8 24 7.403 24 6.6667V1.3333C24 0.597002 23.403 0 22.6667 0ZM21.3333 5.3333H18.6667V2.6667H21.3333V5.3333ZM6 10.6667C5.6318 10.6667 5.3333 10.9651 5.3333 11.3333V12.6667C5.3333 13.0349 5.6318 13.3333 6 13.3333H10.6667V10.6667H6ZM10.6667 15.3333C10.6667 15.7015 10.9651 16 11.3333 16H13.3333V18C13.3333 18.3682 13.6318 18.6667 14 18.6667H16V13.3333H10.6667V15.3333ZM10.6667 22V23.3333C10.6667 23.7015 10.9651 24 11.3333 24H15.3333C15.7015 24 16 23.7015 16 23.3333V21.3333H11.3333C10.9651 21.3333 10.6667 21.6318 10.6667 22ZM23.3333 10.6667H16.6667C16.2985 10.6667 16 10.9651 16 11.3333V13.3333H18.6667V15.3333C18.6667 15.7015 18.9651 16 19.3333 16H20.6667C21.0349 16 21.3333 15.7015 21.3333 15.3333V13.3333H23.3333C23.7015 13.3333 24 13.0349 24 12.6667V11.3333C24 10.9651 23.7015 10.6667 23.3333 10.6667ZM18.6667 21.3333V18.6667H16V21.3333H18.6667ZM11.3333 5.3333H12.6667C13.0349 5.3333 13.3333 5.0349 13.3333 4.6667V0.666698C13.3333 0.298498 13.0349 0 12.6667 0H11.3333C10.9651 0 10.6667 0.298498 10.6667 0.666698V4.6667C10.6667 5.0349 10.9651 5.3333 11.3333 5.3333ZM13.3333 10V8.6667C13.3333 8.2985 13.0349 8 12.6667 8H11.3333C10.9651 8 10.6667 8.2985 10.6667 8.6667V10.6667H12.6667C13.0349 10.6667 13.3333 10.3682 13.3333 10Z"
                    }),
                    o.default.createElement("path", {
                      d: "M38.592 18.192C37.7707 18.192 37.0027 18.0427 36.288 17.744C35.584 17.4347 34.9653 17.0187 34.432 16.496C33.8987 15.9627 33.4773 15.3387 33.168 14.624C32.8693 13.9093 32.72 13.1413 32.72 12.32C32.72 11.4987 32.8693 10.7307 33.168 10.016C33.4773 9.3013 33.8987 8.6827 34.432 8.16C34.9653 7.6267 35.584 7.2107 36.288 6.912C37.0027 6.6027 37.7707 6.448 38.592 6.448C39.4133 6.448 40.1813 6.6027 40.896 6.912C41.6107 7.2107 42.2293 7.6267 42.752 8.16C43.2853 8.6827 43.7013 9.3013 44 10.016C44.3093 10.7307 44.464 11.4987 44.464 12.32C44.464 13.0347 44.3467 13.7067 44.112 14.336C43.888 14.9653 43.5733 15.536 43.168 16.048L45.28 18H43.248L42.16 17.008C41.6693 17.3813 41.12 17.6747 40.512 17.888C39.904 18.0907 39.264 18.192 38.592 18.192ZM38.592 16.784C39.5413 16.784 40.3787 16.528 41.104 16.016L39.296 14.336L40.208 13.312L42.08 15.056C42.3573 14.6827 42.576 14.2667 42.736 13.808C42.896 13.3387 42.976 12.8427 42.976 12.32C42.976 11.7013 42.864 11.12 42.64 10.576C42.416 10.032 42.1067 9.5573 41.712 9.152C41.328 8.7467 40.864 8.432 40.32 8.208C39.7867 7.9733 39.2107 7.856 38.592 7.856C37.9733 7.856 37.3973 7.9733 36.864 8.208C36.3307 8.432 35.8667 8.7467 35.472 9.152C35.088 9.5573 34.784 10.032 34.56 10.576C34.336 11.12 34.224 11.7013 34.224 12.32C34.224 12.9493 34.336 13.536 34.56 14.08C34.784 14.6133 35.088 15.0827 35.472 15.488C35.8667 15.8933 36.3307 16.2133 36.864 16.448C37.3973 16.672 37.9733 16.784 38.592 16.784ZM46.9259 6.64H50.7979C51.3205 6.64 51.7899 6.7147 52.2059 6.864C52.6325 7.0133 52.9899 7.2267 53.2779 7.504C53.5765 7.7813 53.8005 8.112 53.9499 8.496C54.1099 8.88 54.1899 9.3067 54.1899 9.776C54.1899 10.608 53.9392 11.2907 53.4379 11.824C52.9472 12.3573 52.2592 12.688 51.3739 12.816L55.7579 18H53.8859L49.5179 12.832H48.4139V18H46.9259V6.64ZM50.6219 11.504C51.2725 11.504 51.7792 11.36 52.1419 11.072C52.5152 10.784 52.7019 10.352 52.7019 9.776C52.7019 9.2 52.5152 8.7627 52.1419 8.464C51.7792 8.1653 51.2725 8.016 50.6219 8.016H48.4139V11.504H50.6219ZM55.8681 12.832H59.948V14.208H55.8681V12.832ZM66.488 18.16C65.88 18.16 65.325 18.0267 64.824 17.76C64.323 17.4827 63.939 17.152 63.672 16.768V18H62.296V6H63.672V11.232C63.939 10.848 64.323 10.5227 64.824 10.256C65.325 9.9787 65.88 9.84 66.488 9.84C67.043 9.84 67.56 9.952 68.04 10.176C68.52 10.3893 68.936 10.688 69.288 11.072C69.64 11.4453 69.912 11.8827 70.104 12.384C70.307 12.8853 70.408 13.424 70.408 14C70.408 14.576 70.307 15.1147 70.104 15.616C69.912 16.1173 69.64 16.56 69.288 16.944C68.936 17.3173 68.52 17.616 68.04 17.84C67.56 18.0533 67.043 18.16 66.488 18.16ZM66.28 16.896C66.685 16.896 67.053 16.8213 67.384 16.672C67.715 16.5227 67.997 16.32 68.232 16.064C68.477 15.7973 68.664 15.488 68.792 15.136C68.931 14.784 69 14.4053 69 14C69 13.5947 68.931 13.216 68.792 12.864C68.664 12.512 68.477 12.208 68.232 11.952C67.997 11.6853 67.715 11.4773 67.384 11.328C67.053 11.1787 66.685 11.104 66.28 11.104C65.875 11.104 65.507 11.1787 65.176 11.328C64.845 11.4773 64.557 11.6853 64.312 11.952C64.077 12.208 63.891 12.512 63.752 12.864C63.624 13.216 63.56 13.5947 63.56 14C63.56 14.4053 63.624 14.784 63.752 15.136C63.891 15.488 64.077 15.7973 64.312 16.064C64.557 16.32 64.845 16.5227 65.176 16.672C65.507 16.8213 65.875 16.896 66.28 16.896ZM75.67 18.16C75.105 18.16 74.582 18.0533 74.102 17.84C73.633 17.616 73.222 17.3173 72.87 16.944C72.518 16.56 72.241 16.1173 72.038 15.616C71.846 15.1147 71.75 14.576 71.75 14C71.75 13.424 71.846 12.8853 72.038 12.384C72.241 11.8827 72.518 11.4453 72.87 11.072C73.222 10.688 73.633 10.3893 74.102 10.176C74.582 9.952 75.105 9.84 75.67 9.84C76.278 9.84 76.833 9.9787 77.334 10.256C77.835 10.5227 78.219 10.848 78.486 11.232V10H79.862V18H78.486V16.768C78.219 17.152 77.835 17.4827 77.334 17.76C76.833 18.0267 76.278 18.16 75.67 18.16ZM75.878 16.896C76.283 16.896 76.651 16.8213 76.982 16.672C77.313 16.5227 77.595 16.32 77.83 16.064C78.075 15.7973 78.262 15.488 78.39 15.136C78.529 14.784 78.598 14.4053 78.598 14C78.598 13.5947 78.529 13.216 78.39 12.864C78.262 12.512 78.075 12.208 77.83 11.952C77.595 11.6853 77.313 11.4773 76.982 11.328C76.651 11.1787 76.283 11.104 75.878 11.104C75.473 11.104 75.099 11.1787 74.758 11.328C74.427 11.4773 74.139 11.6853 73.894 11.952C73.659 12.208 73.473 12.512 73.334 12.864C73.206 13.216 73.142 13.5947 73.142 14C73.142 14.4053 73.206 14.784 73.334 15.136C73.473 15.488 73.659 15.7973 73.894 16.064C74.139 16.32 74.427 16.5227 74.758 16.672C75.099 16.8213 75.473 16.896 75.878 16.896ZM85.028 18.16C84.602 18.16 84.196 18.1067 83.812 18C83.428 17.8933 83.092 17.7387 82.804 17.536C82.516 17.3227 82.282 17.0613 82.1 16.752C81.919 16.4427 81.812 16.0853 81.78 15.68H83.188C83.231 15.9253 83.311 16.1333 83.428 16.304C83.556 16.464 83.706 16.5973 83.876 16.704C84.047 16.8107 84.228 16.8853 84.42 16.928C84.623 16.9707 84.831 16.992 85.044 16.992C85.482 16.992 85.844 16.9067 86.132 16.736C86.431 16.5547 86.58 16.288 86.58 15.936C86.58 15.616 86.479 15.3547 86.276 15.152C86.074 14.9493 85.732 14.784 85.252 14.656L84.1 14.352C83.407 14.1707 82.89 13.8773 82.548 13.472C82.207 13.0667 82.036 12.576 82.036 12C82.036 11.6693 82.106 11.3707 82.244 11.104C82.383 10.8373 82.575 10.6133 82.82 10.432C83.066 10.24 83.354 10.096 83.684 10C84.026 9.8933 84.399 9.84 84.804 9.84C85.231 9.84 85.615 9.8987 85.956 10.016C86.298 10.1333 86.591 10.2987 86.836 10.512C87.092 10.7147 87.295 10.9547 87.444 11.232C87.594 11.5093 87.684 11.808 87.716 12.128H86.34C86.234 11.776 86.042 11.4987 85.764 11.296C85.498 11.0933 85.178 10.992 84.804 10.992C84.42 10.992 84.095 11.0827 83.828 11.264C83.562 11.4347 83.428 11.6747 83.428 11.984C83.428 12.2827 83.524 12.5227 83.716 12.704C83.908 12.8747 84.218 13.0187 84.644 13.136L85.924 13.472C86.596 13.6427 87.103 13.9307 87.444 14.336C87.796 14.7307 87.972 15.232 87.972 15.84C87.972 16.2347 87.898 16.5813 87.748 16.88C87.599 17.168 87.391 17.408 87.124 17.6C86.858 17.792 86.543 17.9307 86.18 18.016C85.828 18.112 85.444 18.16 85.028 18.16ZM93.329 18.16C92.742 18.16 92.204 18.0587 91.713 17.856C91.222 17.6427 90.796 17.3493 90.433 16.976C90.081 16.6027 89.804 16.1653 89.601 15.664C89.398 15.152 89.297 14.5973 89.297 14C89.297 13.4133 89.388 12.8693 89.569 12.368C89.761 11.856 90.033 11.4133 90.385 11.04C90.737 10.6667 91.164 10.3733 91.665 10.16C92.166 9.9467 92.732 9.84 93.361 9.84C93.99 9.84 94.55 9.9627 95.041 10.208C95.542 10.4427 95.958 10.768 96.289 11.184C96.63 11.5893 96.876 12.0693 97.025 12.624C97.185 13.168 97.244 13.7493 97.201 14.368H90.689C90.7 14.7307 90.774 15.0667 90.913 15.376C91.062 15.6853 91.254 15.9573 91.489 16.192C91.724 16.416 92.001 16.592 92.321 16.72C92.641 16.848 92.982 16.912 93.345 16.912C93.846 16.912 94.294 16.8107 94.689 16.608C95.094 16.3947 95.42 16.048 95.665 15.568H97.073C96.977 15.92 96.822 16.256 96.609 16.576C96.396 16.8853 96.129 17.1573 95.809 17.392C95.5 17.6267 95.137 17.8133 94.721 17.952C94.305 18.0907 93.841 18.16 93.329 18.16ZM93.313 11.056C93.025 11.056 92.742 11.0987 92.465 11.184C92.188 11.2693 91.932 11.4027 91.697 11.584C91.473 11.7653 91.276 11.9947 91.105 12.272C90.934 12.5493 90.817 12.8853 90.753 13.28H95.745C95.617 12.5333 95.329 11.9787 94.881 11.616C94.433 11.2427 93.91 11.056 93.313 11.056ZM102.483 18.16C101.917 18.16 101.395 18.0533 100.915 17.84C100.445 17.616 100.035 17.3173 99.683 16.944C99.331 16.56 99.053 16.1173 98.851 15.616C98.659 15.1147 98.563 14.576 98.563 14C98.563 13.424 98.659 12.8853 98.851 12.384C99.053 11.8827 99.331 11.4453 99.683 11.072C100.035 10.688 100.445 10.3893 100.915 10.176C101.395 9.952 101.917 9.84 102.483 9.84C103.091 9.84 103.645 9.9787 104.147 10.256C104.648 10.5227 105.032 10.848 105.299 11.232V6H106.675V18H105.299V16.768C105.032 17.152 104.648 17.4827 104.147 17.76C103.645 18.0267 103.091 18.16 102.483 18.16ZM102.691 16.896C103.096 16.896 103.464 16.8213 103.795 16.672C104.125 16.5227 104.408 16.32 104.643 16.064C104.888 15.7973 105.075 15.488 105.203 15.136C105.341 14.784 105.411 14.4053 105.411 14C105.411 13.5947 105.341 13.216 105.203 12.864C105.075 12.512 104.888 12.208 104.643 11.952C104.408 11.6853 104.125 11.4773 103.795 11.328C103.464 11.1787 103.096 11.104 102.691 11.104C102.285 11.104 101.912 11.1787 101.571 11.328C101.24 11.4773 100.952 11.6853 100.707 11.952C100.472 12.208 100.285 12.512 100.147 12.864C100.019 13.216 99.955 13.5947 99.955 14C99.955 14.4053 100.019 14.784 100.147 15.136C100.285 15.488 100.472 15.7973 100.707 16.064C100.952 16.32 101.24 16.5227 101.571 16.672C101.912 16.8213 102.285 16.896 102.691 16.896Z"
                    })
                  );
                i.propTypes = {
                  width: r.default.string,
                  color: r.default.string,
                  className: r.default.string,
                  ariaLabel: r.default.string
                };
                n.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/logo/logo-qr-based.js" }
    ],
    [
      4678,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = a(e("react")),
                  r = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ width: e = "100%", color: t = "var(--color-text-default)", className: n, ariaLabel: r }) =>
                  o.default.createElement(
                    "svg",
                    { width: e, fill: t, className: n, "aria-label": r, viewBox: "0 0 2568 723", xmlns: "http://www.w3.org/2000/svg" },
                    o.default.createElement("path", {
                      d: "M249 0C149.9 0 69.7 80.2 69.7 179.3V246.5C34.9 252.8 0 261.2 0 272.1V622.8C0 622.8 0 632.5 10.9 637.1C50.4 653.1 205.8 708.1 241.5 720.7C246.1 722.4 247.4 722.4 248.6 722.4C250.3 722.4 251.1 722.4 255.7 720.7C291.4 708.1 447.2 653.1 486.7 637.1C496.8 632.9 497.2 623.2 497.2 623.2V272.1C497.2 261.2 462.8 252.4 427.9 246.5V179.3C428.4 80.2 347.7 0 249 0ZM249 85.7C307.4 85.7 342.7 121 342.7 179.4V237.8C277.2 233.2 221.3 233.2 155.4 237.8V179.4C155.4 120.9 190.7 85.7 249 85.7V85.7ZM248.6 323.8C330.1 323.8 398.5 330.1 398.5 341.4V560.2C398.5 563.6 398.1 564 395.1 565.2C392.2 566.5 256.1 615.6 256.1 615.6C256.1 615.6 250.6 617.3 249 617.3C247.3 617.3 241.9 615.2 241.9 615.2C241.9 615.2 105.8 566.1 102.9 564.8C100 563.5 99.5 563.1 99.5 559.8V341C98.7 329.7 167.1 323.8 248.6 323.8V323.8ZM728.466 563.183V323.577H640.919V237.655H913.881V323.577H827.195V563.183H728.466ZM1135.04 563.183L1090.12 460.823H1054.38V563.183H955.647V237.655H1129.4C1205.67 237.655 1246.58 288.215 1246.58 349.191C1246.58 405.389 1214.08 435.113 1187.99 447.92L1246.96 563.088H1135.04V563.183ZM1146.7 349.191C1146.7 331.51 1131.03 323.864 1114.59 323.864H1054.38V375.283H1114.59C1131.03 374.901 1146.7 367.255 1146.7 349.191ZM1298.38 563.183V237.655H1545.25V323.577H1396.73V355.69H1541.62V441.612H1396.73V477.357H1545.25V563.183H1298.38ZM1596.57 563.566V485.29L1720.63 323.96H1596.57V238.037H1850.61V315.549L1726.17 477.739H1854.24V563.661L1596.57 563.566ZM1878.33 400.993C1878.33 301.021 1955.84 232.398 2056.58 232.398C2156.93 232.398 2234.82 300.639 2234.82 400.993C2234.82 500.964 2157.31 569.205 2056.58 569.205C1955.84 569.205 1878.33 500.965 1878.33 400.993V400.993ZM2134.47 400.993C2134.47 355.595 2103.6 319.467 2056.19 319.467C2008.79 319.467 1977.92 355.595 1977.92 400.993C1977.92 446.391 2008.79 482.518 2056.19 482.518C2103.98 482.518 2134.47 446.391 2134.47 400.993H2134.47ZM2455.51 563.566L2410.59 461.205H2374.84V563.565H2276.11V238.038H2449.87C2526.14 238.038 2567.04 288.598 2567.04 349.574C2567.04 405.772 2534.55 435.496 2508.46 448.304L2567.43 563.471H2455.51V563.566ZM2467.55 349.191C2467.55 331.51 2451.87 323.864 2435.44 323.864H2375.22V375.283H2435.44C2451.97 374.901 2467.55 367.255 2467.55 349.191Z"
                    })
                  );
                i.propTypes = {
                  width: r.default.string,
                  color: r.default.string,
                  className: r.default.string,
                  ariaLabel: r.default.string
                };
                n.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/logo/logo-trezor.js" }
    ],
    [
      4679,
      { "./mascot.component": 4680 },
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
                var o,
                  r = (o = e("./mascot.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/mascot/index.js" }
    ],
    [
      4680,
      { "../../../helpers/utils/build-types": 4792, "@metamask/logo": 1380, lodash: 3312, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = c(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = c(e("@metamask/logo")),
                  i = e("lodash"),
                  l = e("../../../helpers/utils/build-types");
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (s = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
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
                  constructor(e) {
                    super(e);
                    const { width: t, height: n, followMouse: o } = e;
                    (this.logo = (0, a.default)({
                      followMouse: o,
                      pxNotRatio: !0,
                      width: t,
                      height: n,
                      meshJson: (0, l.getBuildSpecificAsset)("foxMeshJson")
                    })),
                      (this.mascotContainer = (0, r.createRef)()),
                      (this.refollowMouse = (0, i.debounce)(this.logo.setFollowMouse.bind(this.logo, !0), 1e3)),
                      (this.unfollowMouse = this.logo.setFollowMouse.bind(this.logo, !1));
                  }
                  handleAnimationEvents() {
                    this.animations ||
                      ((this.animations = this.props.animationEventEmitter),
                      this.animations.on("point", this.lookAt.bind(this)),
                      this.animations.on("setFollowMouse", this.logo.setFollowMouse.bind(this.logo)));
                  }
                  lookAt(e) {
                    this.unfollowMouse(), this.logo.lookAtAndRender(e), this.refollowMouse();
                  }
                  componentDidMount() {
                    this.mascotContainer.current.appendChild(this.logo.container),
                      (this.directionTargetMap = (({ top: e, left: t, height: n, width: o }) => {
                        const r = t + o / 2,
                          a = e + n / 2;
                        return {
                          up: { x: r, y: e - n },
                          down: { x: r, y: e + 2 * n },
                          left: { x: t - o, y: a },
                          right: { x: t + 2 * o, y: a },
                          middle: { x: r, y: a }
                        };
                      })(this.mascotContainer.current.getBoundingClientRect()));
                    const { lookAtTarget: e, lookAtDirection: t } = this.props;
                    null != e && e.x && null != e && e.y
                      ? this.logo.lookAtAndRender(e)
                      : t && this.logo.lookAtAndRender(this.directionTargetMap[t]);
                  }
                  componentDidUpdate(e) {
                    const { lookAtTarget: t = {}, lookAtDirection: n = null, followMouse: o } = e,
                      { lookAtTarget: r = {}, followMouse: a, lookAtDirection: i } = this.props;
                    i && n !== i
                      ? this.logo.lookAtAndRender(this.directionTargetMap[i])
                      : ((null == r ? void 0 : r.x) === (null == t ? void 0 : t.x) &&
                          (null == r ? void 0 : r.y) === (null == t ? void 0 : t.y)) ||
                        this.logo.lookAtAndRender(r),
                      o !== a && (this.unfollowMouse(), a && this.refollowMouse());
                  }
                  componentWillUnmount() {
                    (this.animations = this.props.animationEventEmitter),
                      this.animations.removeAllListeners(),
                      this.logo.container.remove(),
                      this.logo.stopAnimation();
                  }
                  render() {
                    return (
                      this.handleAnimationEvents(), r.default.createElement("div", { ref: this.mascotContainer, style: { zIndex: 0 } })
                    );
                  }
                }
                (n.default = d),
                  u(d, "propTypes", {
                    animationEventEmitter: o.default.object.isRequired,
                    width: o.default.string,
                    height: o.default.string,
                    followMouse: o.default.bool,
                    lookAtTarget: o.default.object,
                    lookAtDirection: o.default.oneOf(["up", "down", "left", "right", "middle"])
                  }),
                  u(d, "defaultProps", { width: "200", height: "200", followMouse: !0, lookAtTarget: {}, lookAtDirection: null });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/mascot/mascot.component.js" }
    ],
    [
      4681,
      { "./menu": 4683, "./menu-item": 4682 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Menu", {
                    enumerable: !0,
                    get: function () {
                      return o.default;
                    }
                  }),
                  Object.defineProperty(n, "MenuItem", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var o = a(e("./menu")),
                  r = a(e("./menu-item"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/menu/index.js" }
    ],
    [
      4682,
      {
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = s(e("react")),
                  r = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = o.default.forwardRef(
                  (
                    { children: e, className: t, "data-testid": n, iconName: r, onClick: s, subtitle: c, disabled: u = !1, showInfoDot: d },
                    p
                  ) =>
                    o.default.createElement(
                      "button",
                      { className: (0, a.default)("menu-item", t), "data-testid": n, onClick: s, ref: p, disabled: u },
                      r &&
                        d &&
                        o.default.createElement(
                          i.BadgeWrapper,
                          {
                            anchorElementShape: i.BadgeWrapperAnchorElementShape.circular,
                            display: l.Display.Block,
                            position: i.BadgeWrapperPosition.topRight,
                            positionObj: { top: -6, right: 4 },
                            badge: o.default.createElement(i.Icon, {
                              name: i.IconName.FullCircle,
                              size: i.IconSize.Xs,
                              color: l.IconColor.primaryDefault,
                              style: { "--size": "10px" }
                            })
                          },
                          o.default.createElement(i.Icon, { name: r, size: i.IconSize.Sm, marginRight: 2 })
                        ),
                      r && !d && o.default.createElement(i.Icon, { name: r, size: i.IconSize.Sm, marginRight: 2 }),
                      o.default.createElement(
                        "div",
                        null,
                        o.default.createElement("div", null, e),
                        c ? o.default.createElement(i.Text, { variant: l.TextVariant.bodyXs }, c) : null
                      )
                    )
                );
                (c.propTypes = {
                  children: r.default.node.isRequired,
                  className: r.default.string,
                  "data-testid": r.default.string,
                  iconName: r.default.string,
                  onClick: r.default.func,
                  subtitle: r.default.node,
                  disabled: r.default.bool,
                  showInfoDot: r.default.bool
                }),
                  (c.displayName = "MenuItem");
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/menu/menu-item.js" }
    ],
    [
      4683,
      { classnames: 2414, "prop-types": 3450, react: 3690, "react-dom": 3532, "react-popper": 3638 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = c(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = e("react-dom"),
                  i = e("react-popper"),
                  l = c(e("classnames"));
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (s = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                const d = ({ anchorElement: e, children: t, className: n, "data-testid": o, onHide: s, popperOptions: c }) => {
                  const [d, p] = (0, r.useState)(null),
                    f = (0, r.useRef)(document.getElementById("popover-content")),
                    { attributes: m, styles: h } = (0, i.usePopper)(e, d, c);
                  return (0, a.createPortal)(
                    r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement("div", { className: "menu__background", "data-testid": o, onClick: s }),
                      r.default.createElement(
                        "div",
                        u({ className: (0, l.default)("menu__container", n), "data-testid": n, ref: p, style: h.popper }, m.popper),
                        t
                      )
                    ),
                    f.current
                  );
                };
                (d.propTypes = {
                  anchorElement: o.default.instanceOf(window.Element),
                  children: o.default.node.isRequired,
                  className: o.default.string,
                  onHide: o.default.func.isRequired,
                  popperOptions: o.default.object,
                  dataTestId: o.default.string
                }),
                  (d.defaultProps = { anchorElement: undefined, className: undefined, popperOptions: undefined });
                n.default = d;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/menu/menu.js" }
    ],
    [
      4684,
      { "../../../../shared/constants/preferences": 3965, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = d);
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = (o = e("prop-types")) && o.__esModule ? o : { default: o },
                  i = e("../../../../shared/constants/preferences");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const s = 162,
                  c = 30,
                  u = "var(--color-text-default)";
                function d({ theme: e, className: t }) {
                  const [n, o] = (0, r.useState)(() => (e === undefined ? document.documentElement.getAttribute("data-theme") : e));
                  (0, r.useEffect)(() => {
                    e !== undefined && o(e);
                  }, [e]);
                  return r.default.createElement(
                    "svg",
                    { height: c, viewBox: "0 0 1311 242", width: s, xmlns: "http://www.w3.org/2000/svg", className: t },
                    r.default.createElement(
                      "g",
                      { fill: "none" },
                      r.default.createElement(
                        "g",
                        { fill: u, transform: "translate(361 61)" },
                        r.default.createElement("path", {
                          d: "m796.7 60.9c-6.8-4.5-14.3-7.7-21.4-11.7-4.6-2.6-9.5-4.9-13.5-8.2-6.8-5.6-5.4-16.6 1.7-21.4 10.2-6.8 27.1-3 28.9 10.9 0 .3.3.5.6.5h15.4c.4 0 .7-.3.6-.7-.8-9.6-4.5-17.6-11.3-22.7-6.5-4.9-13.9-7.5-21.8-7.5-40.7 0-44.4 43.1-22.5 56.7 2.5 1.6 24 12.4 31.6 17.1s10 13.3 6.7 20.1c-3 6.2-10.8 10.5-18.6 10-8.5-.5-15.1-5.1-17.4-12.3-.4-1.3-.6-3.8-.6-4.9 0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6 0 12.1 3 18.8 11.2 24.9 7.7 5.8 16.1 8.2 24.8 8.2 22.8 0 34.6-12.9 37-26.3 2.1-13.1-1.8-24.9-13.5-32.7z"
                        }),
                        r.default.createElement("path", {
                          d: "m71.6 2.3h-7.4-8.1c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-8.1-7.4-10c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z"
                        }),
                        r.default.createElement("path", {
                          d: "m541 2.3c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-25.4c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z"
                        }),
                        r.default.createElement("path", {
                          d: "m325.6 2.3h-31.1-16.7-31.1c-.3 0-.6.3-.6.6v14.4c0 .3.3.6.6.6h30.5v100.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-100.4h30.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.2-.6-.6-.6z"
                        }),
                        r.default.createElement("path", {
                          d: "m424.1 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.4.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z"
                        }),
                        r.default.createElement("path", {
                          d: "m683.3 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.3.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z"
                        }),
                        r.default.createElement("path", {
                          d: "m149.8 101.8v-35.8c0-.3.3-.6.6-.6h44.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-44.5c-.3 0-.6-.3-.6-.6v-30.6c0-.3.3-.6.6-.6h50.6c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-51.2-17.3c-.3 0-.6.3-.6.6v15 31.9 15.6 37 15.8c0 .3.3.6.6.6h17.3 53.3c.3 0 .6-.3.6-.6v-15.2c0-.3-.3-.6-.6-.6h-52.8c-.3-.1-.5-.3-.5-.7z"
                        }),
                        r.default.createElement("path", {
                          d: "m949.3 117.9-57.8-59.7c-.2-.2-.2-.6 0-.8l52-54c.4-.4.1-1-.4-1h-21.3c-.2 0-.3.1-.4.2l-44.1 45.8c-.4.4-1 .1-1-.4v-45c0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-50.8c0-.5.7-.8 1-.4l50 51.6c.1.1.3.2.4.2h21.3c.4-.1.7-.8.3-1.1z"
                        })
                      ),
                      r.default.createElement(
                        "g",
                        { strokeLinecap: "round", strokeLinejoin: "round", transform: "translate(1 1)" },
                        r.default.createElement("path", { d: "m246.1.2-101.1 75 18.8-44.2z", fill: "#e17726", stroke: "#e17726" }),
                        r.default.createElement(
                          "g",
                          { fill: "#e27625", stroke: "#e27625", transform: "translate(2)" },
                          r.default.createElement("path", { d: "m10.9.2 100.2 75.7-17.9-44.9z" }),
                          r.default.createElement("path", { d: "m207.7 174.1-26.9 41.2 57.6 15.9 16.5-56.2z" }),
                          r.default.createElement("path", { d: "m.2 175 16.4 56.2 57.5-15.9-26.8-41.2z" }),
                          r.default.createElement("path", { d: "m71 104.5-16 24.2 57 2.6-1.9-61.5z" }),
                          r.default.createElement("path", { d: "m184 104.5-39.7-35.4-1.3 62.2 57-2.6z" }),
                          r.default.createElement("path", { d: "m74.1 215.3 34.5-16.7-29.7-23.2z" }),
                          r.default.createElement("path", { d: "m146.4 198.6 34.4 16.7-4.7-39.9z" })
                        ),
                        r.default.createElement(
                          "g",
                          { fill: "#d5bfb2", stroke: "#d5bfb2", transform: "translate(76 198)" },
                          r.default.createElement("path", { d: "m106.8 17.3-34.4-16.7 2.8 22.4-.3 9.5z" }),
                          r.default.createElement("path", { d: "m.1 17.3 32 15.2-.2-9.5 2.7-22.4z" })
                        ),
                        r.default.createElement("path", { d: "m108.7 160.6-28.6-8.4 20.2-9.3z", fill: "#233447", stroke: "#233447" }),
                        r.default.createElement("path", { d: "m150.3 160.6 8.4-17.7 20.3 9.3z", fill: "#233447", stroke: "#233447" }),
                        r.default.createElement(
                          "g",
                          { fill: "#cc6228", stroke: "#cc6228", transform: "translate(49 128)" },
                          r.default.createElement("path", { d: "m27.1 87.3 5-41.2-31.8.9z" }),
                          r.default.createElement("path", { d: "m128.9 46.1 4.9 41.2 26.9-40.3z" }),
                          r.default.createElement("path", { d: "m153 .7-57 2.6 5.3 29.3 8.4-17.7 20.3 9.3z" }),
                          r.default.createElement("path", { d: "m31.1 24.2 20.2-9.3 8.4 17.7 5.3-29.3-57-2.6z" })
                        ),
                        r.default.createElement(
                          "g",
                          { fill: "#e27525", stroke: "#e27525", transform: "translate(57 128)" },
                          r.default.createElement("path", { d: "m0 .7 23.9 46.7-.8-23.2z" }),
                          r.default.createElement("path", { d: "m122 24.2-.9 23.2 23.9-46.7z" }),
                          r.default.createElement("path", { d: "m57 3.3-5.3 29.3 6.7 34.6 1.5-45.6z" }),
                          r.default.createElement("path", { d: "m88 3.3-2.8 18.2 1.4 45.7 6.7-34.6z" })
                        ),
                        r.default.createElement("path", {
                          d: "m150.3 160.6-6.7 34.6 4.8 3.4 29.7-23.2.9-23.2z",
                          fill: "#f5841f",
                          stroke: "#f5841f"
                        }),
                        r.default.createElement("path", {
                          d: "m80.1 152.2.8 23.2 29.7 23.2 4.8-3.4-6.7-34.6z",
                          fill: "#f5841f",
                          stroke: "#f5841f"
                        }),
                        r.default.createElement("path", {
                          d: "m150.9 230.5.3-9.5-2.6-2.2h-38.2l-2.5 2.2.2 9.5-32-15.2 11.2 9.2 22.7 15.7h38.9l22.8-15.7 11.1-9.2z",
                          fill: "#c0ac9d",
                          stroke: "#c0ac9d"
                        }),
                        r.default.createElement("path", {
                          d: "m148.4 198.6-4.8-3.4h-28.2l-4.8 3.4-2.7 22.4 2.5-2.2h38.2l2.6 2.2z",
                          fill: "#161616",
                          stroke: "#161616"
                        }),
                        r.default.createElement(
                          "g",
                          { fill: "#763e1a", stroke: "#763e1a" },
                          r.default.createElement("path", {
                            d: "m250.4 80.1 8.5-41.4-12.8-38.5-97.7 72.5 37.6 31.8 53.1 15.5 11.7-13.7-5.1-3.7 8.1-7.4-6.2-4.8 8.1-6.2z"
                          }),
                          r.default.createElement("path", {
                            d: "m.1 38.7 8.6 41.4-5.5 4.1 8.2 6.2-6.2 4.8 8.1 7.4-5.1 3.7 11.7 13.7 53.1-15.5 37.6-31.8-97.7-72.5z"
                          })
                        ),
                        r.default.createElement(
                          "g",
                          { fill: "#f5841f", stroke: "#f5841f" },
                          r.default.createElement("path", { d: "m239.1 120-53.1-15.5 16 24.2-23.9 46.7 31.6-.4h47.2z" }),
                          r.default.createElement("path", { d: "m73 104.5-53.1 15.5-17.7 55h47.1l31.6.4-23.9-46.7z" }),
                          r.default.createElement("path", {
                            d: "m145 131.3 3.4-58.6 15.4-41.7h-68.6l15.4 41.7 3.4 58.6 1.3 18.4.1 45.5h28.2l.1-45.5z"
                          })
                        )
                      )
                    )
                  );
                }
                d.propTypes = {
                  theme: a.default.oneOf([i.ThemeType.light, i.ThemeType.dark, i.ThemeType.os]),
                  className: a.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/metafox-logo/horizontal-logo.js" }
    ],
    [
      4685,
      { "./metafox-logo.component": 4686 },
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
                var o,
                  r = (o = e("./metafox-logo.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/metafox-logo/index.js" }
    ],
    [
      4686,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "./horizontal-logo": 4684,
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
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = c(e("prop-types")),
                  a = c(e("classnames")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = c(e("./horizontal-logo"));
                function c(e) {
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
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                function p(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
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
                class f extends o.PureComponent {
                  render() {
                    const { onClick: e, unsetIconHeight: t, isOnboarding: n } = this.props,
                      r = t ? {} : { height: 42, width: 42 };
                    r.src = "./images/logo/metamask-fox.svg";
                    return o.default.createElement(
                      i.Box,
                      {
                        as: "button",
                        onClick: e,
                        className: (0, a.default)({
                          "app-header__logo-container": !n,
                          "onboarding-app-header__logo-container": n,
                          "app-header__logo-container--clickable": Boolean(e)
                        }),
                        backgroundColor: l.BackgroundColor.transparent,
                        "data-testid": "app-header-logo"
                      },
                      o.default.createElement(s.default, {
                        className: (0, a.default)({
                          "app-header__metafox-logo--horizontal": !n,
                          "onboarding-app-header__metafox-logo--horizontal": n
                        })
                      }),
                      o.default.createElement(
                        "img",
                        d({}, r, {
                          src: "./images/logo/metamask-fox.svg",
                          className: (0, a.default)({
                            "app-header__metafox-logo--icon": !n,
                            "onboarding-app-header__metafox-logo--icon": n
                          }),
                          alt: ""
                        })
                      )
                    );
                  }
                }
                (n.default = f),
                  p(f, "propTypes", { onClick: r.default.func, unsetIconHeight: r.default.bool, isOnboarding: r.default.bool }),
                  p(f, "defaultProps", { onClick: undefined });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/metafox-logo/metafox-logo.component.js" }
    ],
    [
      4687,
      {
        "../../../../shared/constants/tokens": 3973,
        "../../../../shared/lib/fetch-with-cache": 3976,
        "../../../contexts/i18n": 4748,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../button": 4611,
        "../popover": 4699,
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
                    var e;
                    const t = (0, o.useContext)(s.I18nContext),
                      n = (0, a.useHistory)(),
                      [y, b] = (0, o.useState)(!1),
                      [v, k] = (0, o.useState)(!0),
                      [_, C] = (0, o.useState)(!0),
                      w = (0, r.useSelector)(p.getUseTokenDetection),
                      T = (0, r.useSelector)(c.getProviderConfig),
                      x = (0, r.useSelector)(p.getCurrentNetwork),
                      E = () => {
                        k(!1), (0, f.setFirstTimeUsedNetwork)(T.chainId);
                      },
                      O = (0, o.useCallback)(async () => {
                        try {
                          const e = await (0, l.default)({
                              url: `${i.TOKEN_API_METASWAP_CODEFI_URL}${T.chainId}`,
                              functionName: "getIsTokenDetectionSupported"
                            }),
                            t = !(null != e && e.error);
                          b(t), C(!1);
                        } catch {
                          b(!1), C(!1);
                        }
                      }, [T.chainId]);
                    return (
                      (0, o.useEffect)(() => {
                        O();
                      }, []),
                      !_ &&
                        v &&
                        o.default.createElement(
                          g.default,
                          {
                            onClose: E,
                            className: "new-network-info__wrapper",
                            footer: o.default.createElement(h.default, { type: "primary", onClick: E }, t("recoveryPhraseReminderConfirm"))
                          },
                          o.default.createElement(
                            m.Box,
                            { "data-testid": "new-network-info__wrapper", display: u.Display.Flex, flexDirection: u.FlexDirection.Column },
                            o.default.createElement(
                              m.Text,
                              {
                                variant: u.TextVariant.headingSm,
                                as: "h4",
                                color: u.Color.textDefault,
                                fontWeight: u.FontWeight.Bold,
                                align: u.TextAlign.Center
                              },
                              t("switchedTo")
                            ),
                            o.default.createElement(m.PickerNetwork, {
                              label: null == x ? void 0 : x.nickname,
                              src: null == x || null === (e = x.rpcPrefs) || void 0 === e ? void 0 : e.imageUrl,
                              marginLeft: "auto",
                              marginRight: "auto",
                              marginTop: 4,
                              marginBottom: 4,
                              iconProps: { display: "none" },
                              as: "div"
                            }),
                            o.default.createElement(
                              m.Text,
                              {
                                variant: u.TextVariant.bodySmBold,
                                as: "h6",
                                color: u.Color.textDefault,
                                align: u.TextAlign.Center,
                                margin: [8, 0, 0, 0]
                              },
                              t("thingsToKeep")
                            ),
                            o.default.createElement(
                              m.Box,
                              { marginRight: 4, marginLeft: 5, marginTop: 6 },
                              T.ticker &&
                                o.default.createElement(
                                  m.Box,
                                  {
                                    display: u.Display.Flex,
                                    alignItems: u.AlignItems.center,
                                    marginBottom: 2,
                                    paddingBottom: 2,
                                    className: "new-network-info__bullet-paragraph",
                                    "data-testid": "new-network-info__bullet-paragraph"
                                  },
                                  o.default.createElement(m.Box, { marginRight: 4, color: u.Color.textDefault }, "•"),
                                  o.default.createElement(
                                    m.Text,
                                    {
                                      variant: u.TextVariant.bodySm,
                                      as: "h6",
                                      color: u.Color.textDefault,
                                      display: u.Display.InlineBlock,
                                      key: "nativeTokenInfo"
                                    },
                                    t("nativeToken", [
                                      o.default.createElement(
                                        m.Text,
                                        { variant: u.TextVariant.bodySmBold, as: "h6", display: u.Display.InlineBlock, key: "ticker" },
                                        T.ticker
                                      )
                                    ])
                                  )
                                ),
                              o.default.createElement(
                                m.Box,
                                {
                                  display: u.Display.Flex,
                                  alignItems: u.AlignItems.center,
                                  marginBottom: 2,
                                  paddingBottom: 2,
                                  className: w && y ? null : "new-network-info__bullet-paragraph"
                                },
                                o.default.createElement(m.Box, { marginRight: 4, color: u.Color.textDefault }, "•"),
                                o.default.createElement(
                                  m.Text,
                                  {
                                    variant: u.TextVariant.bodySm,
                                    as: "h6",
                                    color: u.Color.textDefault,
                                    display: u.Display.InlineBlock,
                                    className: "new-network-info__bullet-paragraph__text"
                                  },
                                  t("attemptSendingAssets"),
                                  " ",
                                  o.default.createElement(
                                    "a",
                                    {
                                      href: "https://metamask.zendesk.com/hc/en-us/articles/4404424659995",
                                      target: "_blank",
                                      rel: "noreferrer"
                                    },
                                    o.default.createElement(
                                      m.Text,
                                      {
                                        variant: u.TextVariant.bodySm,
                                        as: "h6",
                                        color: u.Color.infoDefault,
                                        display: u.Display.InlineBlock
                                      },
                                      t("learnMoreUpperCase")
                                    )
                                  )
                                )
                              ),
                              w && y
                                ? null
                                : o.default.createElement(
                                    m.Box,
                                    {
                                      display: u.Display.Flex,
                                      alignItems: u.AlignItems.center,
                                      marginBottom: 2,
                                      paddingBottom: 2,
                                      "data-testid": "new-network-info__add-token-manually"
                                    },
                                    o.default.createElement(m.Box, { marginRight: 4, color: u.Color.textDefault }, "•"),
                                    o.default.createElement(
                                      m.Box,
                                      null,
                                      o.default.createElement(
                                        m.Text,
                                        {
                                          variant: u.TextVariant.bodySm,
                                          as: "h6",
                                          color: u.Color.textDefault,
                                          className: "new-network-info__token-show-up"
                                        },
                                        t("tokenShowUp"),
                                        " ",
                                        o.default.createElement(
                                          h.default,
                                          {
                                            type: "link",
                                            onClick: () => {
                                              n.push(d.IMPORT_TOKEN_ROUTE), k(!1), (0, f.setFirstTimeUsedNetwork)(T.chainId);
                                            },
                                            className: "new-network-info__button"
                                          },
                                          o.default.createElement(
                                            m.Text,
                                            {
                                              variant: u.TextVariant.bodySm,
                                              as: "h6",
                                              color: u.Color.infoDefault,
                                              className: "new-network-info__manually-add-tokens"
                                            },
                                            t("clickToManuallyAdd")
                                          )
                                        )
                                      )
                                    )
                                  )
                            )
                          )
                        )
                    );
                  });
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = e("react-redux"),
                  a = e("react-router-dom"),
                  i = e("../../../../shared/constants/tokens"),
                  l = y(e("../../../../shared/lib/fetch-with-cache")),
                  s = e("../../../contexts/i18n"),
                  c = e("../../../ducks/metamask/metamask"),
                  u = e("../../../helpers/constants/design-system"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../selectors"),
                  f = e("../../../store/actions"),
                  m = e("../../component-library"),
                  h = y(e("../button")),
                  g = y(e("../popover"));
                function y(e) {
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
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/new-network-info/new-network-info.js" }
    ],
    [
      4688,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useNftsCollections": 4842,
        "../../../selectors": 5197,
        "../box": 4607,
        "../identicon": 4664,
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
                var o = d(e("react")),
                  r = d(e("prop-types")),
                  a = e("react-redux"),
                  i = d(e("../box")),
                  l = e("../../../helpers/constants/design-system"),
                  s = d(e("../identicon")),
                  c = e("../../../selectors"),
                  u = e("../../../hooks/useNftsCollections");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p({ assetName: e, tokenAddress: t }) {
                  var n;
                  const { collections: r } = (0, u.useNftsCollections)(),
                    d = null === (n = (0, a.useSelector)(c.getTokenList)[t.toLowerCase()]) || void 0 === n ? void 0 : n.iconUrl;
                  return o.default.createElement(
                    i.default,
                    null,
                    (() => {
                      var t;
                      const n = Object.values(r).find(({ collectionName: t }) => t === e);
                      return (null != n && n.collectionImage) || d
                        ? o.default.createElement(s.default, { diameter: 24, image: (null == n ? void 0 : n.collectionImage) || d })
                        : o.default.createElement(
                            i.default,
                            { color: l.Color.overlayInverse, textAlign: l.TextAlign.Center, className: "collection-image-alt" },
                            (null == e || null === (t = e[0]) || void 0 === t ? void 0 : t.toUpperCase()) ?? null
                          );
                    })()
                  );
                }
                p.propTypes = { assetName: r.default.string, tokenAddress: r.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/nft-collection-image/nft-collection-image.js" }
    ],
    [
      4689,
      { "./nickname-popover.component": 4690 },
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
                var o,
                  r = (o = e("./nickname-popover.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/nickname-popover/index.js" }
    ],
    [
      4690,
      {
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useCopyToClipboard": 4830,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../button": 4611,
        "../identicon": 4664,
        "../popover": 4699,
        "../tooltip": 4736,
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
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = e("react-redux"),
                  a = y(e("prop-types")),
                  i = e("react-router-dom"),
                  l = e("../../../contexts/i18n"),
                  s = y(e("../tooltip")),
                  c = y(e("../popover")),
                  u = y(e("../button")),
                  d = y(e("../identicon")),
                  p = e("../../../helpers/utils/util"),
                  f = e("../../../hooks/useCopyToClipboard"),
                  m = e("../../../selectors"),
                  h = e("../../../helpers/constants/routes"),
                  g = e("../../component-library");
                function y(e) {
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
                const v = ({ address: e, nickname: t, onClose: n = null, onAdd: a = null, explorerLink: y }) => {
                  var b;
                  const v = (0, o.useContext)(l.I18nContext),
                    k = (0, i.useHistory)(),
                    _ = (0, o.useCallback)(() => {
                      a();
                    }, [a]),
                    [C, w] = (0, f.useCopyToClipboard)(),
                    T = (0, r.useSelector)(m.getTokenList),
                    x = (0, r.useSelector)(m.getBlockExplorerLinkText);
                  return o.default.createElement(
                    "div",
                    { className: "nickname-popover" },
                    o.default.createElement(
                      c.default,
                      { onClose: n, className: "nickname-popover__popover-wrap" },
                      o.default.createElement(d.default, {
                        address: e,
                        diameter: 36,
                        className: "nickname-popover__identicon",
                        image: null === (b = T[e.toLowerCase()]) || void 0 === b ? void 0 : b.iconUrl
                      }),
                      o.default.createElement("div", { className: "nickname-popover__address" }, t || (0, p.shortenAddress)(e)),
                      o.default.createElement(
                        "div",
                        { className: "nickname-popover__public-address" },
                        o.default.createElement("div", { className: "nickname-popover__public-address__constant" }, e),
                        o.default.createElement(
                          s.default,
                          { position: "bottom", title: v(C ? "copiedExclamation" : "copyToClipboard") },
                          o.default.createElement(g.ButtonIcon, {
                            iconName: C ? g.IconName.CopySuccess : g.IconName.Copy,
                            size: g.IconSize.Sm,
                            onClick: () => w(e)
                          })
                        )
                      ),
                      o.default.createElement(
                        "div",
                        { className: "nickname-popover__view-on-block-explorer" },
                        o.default.createElement(
                          u.default,
                          {
                            type: "link",
                            className: "nickname-popover__etherscan-link",
                            onClick:
                              "addBlockExplorer" === x.firstPart
                                ? () => {
                                    k.push(`${h.NETWORKS_ROUTE}#blockExplorerUrl`);
                                  }
                                : () => {
                                    global.platform.openTab({ url: y });
                                  },
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: "addBlockExplorer" === x.firstPart ? v("addBlockExplorer") : v("etherscanView")
                          },
                          "addBlockExplorer" === x.firstPart ? v("addBlockExplorer") : v("viewOnBlockExplorer")
                        )
                      ),
                      o.default.createElement(
                        u.default,
                        { type: "primary", className: "nickname-popover__footer-button", onClick: _ },
                        v(t ? "editANickname" : "addANickname")
                      )
                    )
                  );
                };
                v.propTypes = {
                  address: a.default.string,
                  nickname: a.default.string,
                  onClose: a.default.func,
                  onAdd: a.default.func,
                  explorerLink: a.default.string
                };
                n.default = v;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/nickname-popover/nickname-popover.component.js" }
    ],
    [
      4691,
      {
        "../../../../shared/constants/tokens": 3973,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = u);
                var o = c(e("react")),
                  r = c(e("classnames")),
                  a = c(e("prop-types")),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../../../shared/constants/tokens"),
                  s = e("../../component-library");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u({
                  detailText: e = "",
                  value: t = 0,
                  onChange: n,
                  error: a = "",
                  autoFocus: c = !1,
                  allowDecimals: u = !0,
                  disabled: d = !1,
                  dataTestId: p,
                  placeholder: f,
                  id: m,
                  name: h,
                  inputRef: g
                }) {
                  return o.default.createElement(
                    "div",
                    { className: (0, r.default)("numeric-input", { "numeric-input--error": a }) },
                    o.default.createElement("input", {
                      type: "number",
                      value: t,
                      onKeyDown: (e) => {
                        u || "." !== e.key || e.preventDefault();
                      },
                      onChange: (e) => {
                        var t;
                        const o = e.target.value,
                          r = l.DECIMAL_REGEX.exec(o);
                        (null == r || null === (t = r[1]) || void 0 === t ? void 0 : t.length) >= 15 ||
                          null == n ||
                          n(parseFloat(o || 0, 10));
                      },
                      min: "0",
                      autoFocus: c,
                      disabled: d,
                      "data-testid": p,
                      placeholder: f,
                      id: m,
                      name: h,
                      ref: g
                    }),
                    e &&
                      o.default.createElement(s.Text, { color: i.TextColor.textAlternative, variant: i.TextVariant.bodySm, as: "span" }, e)
                  );
                }
                u.propTypes = {
                  value: a.default.oneOfType([a.default.number, a.default.string]),
                  detailText: a.default.string,
                  onChange: a.default.func,
                  error: a.default.string,
                  autoFocus: a.default.bool,
                  allowDecimals: a.default.bool,
                  disabled: a.default.bool,
                  dataTestId: a.default.string,
                  placeholder: a.default.string,
                  name: a.default.string,
                  id: a.default.string,
                  inputRef: a.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/numeric-input/numeric-input.component.js" }
    ],
    [
      4692,
      { "./page-container-footer": 4694, "./page-container-header": 4696, "./page-container.component": 4698 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "PageContainerFooter", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  }),
                  Object.defineProperty(n, "PageContainerHeader", {
                    enumerable: !0,
                    get: function () {
                      return o.default;
                    }
                  }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var o = i(e("./page-container-header")),
                  r = i(e("./page-container-footer")),
                  a = i(e("./page-container.component"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/index.js" }
    ],
    [
      4693,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(o, a, l) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = (o = e("prop-types")) && o.__esModule ? o : { default: o };
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
                    return e ? n : t;
                  })(e);
                }
                class l extends r.Component {
                  render() {
                    return r.default.createElement("div", { className: "page-container__content" }, this.props.children);
                  }
                }
                (n.default = l),
                  (function (e, t, n) {
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = n);
                  })(l, "propTypes", { children: a.default.node.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container-content.component.js" }
    ],
    [
      4694,
      { "./page-container-footer.component": 4695 },
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
                var o,
                  r = (o = e("./page-container-footer.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container-footer/index.js" }
    ],
    [
      4695,
      { "../../button": 4611, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = l(e("prop-types")),
                  a = l(e("classnames")),
                  i = l(e("../../button"));
                function l(e) {
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
                function c(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
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
                class u extends o.Component {
                  render() {
                    const {
                      children: e,
                      onCancel: t,
                      cancelText: n,
                      onSubmit: r,
                      submitText: l,
                      disabled: s,
                      submitButtonType: c,
                      hideCancel: u,
                      cancelButtonType: d,
                      buttonSizeLarge: p = !1,
                      footerClassName: f,
                      footerButtonClassName: m
                    } = this.props;
                    return o.default.createElement(
                      "div",
                      { className: (0, a.default)("page-container__footer", f) },
                      o.default.createElement(
                        "footer",
                        null,
                        !u &&
                          o.default.createElement(
                            i.default,
                            {
                              type: d || "secondary",
                              large: p,
                              className: (0, a.default)("page-container__footer-button", "page-container__footer-button__cancel", m),
                              onClick: (e) => t(e),
                              "data-testid": "page-container-footer-cancel"
                            },
                            n || this.context.t("cancel")
                          ),
                        o.default.createElement(
                          i.default,
                          {
                            type: c || "primary",
                            large: p,
                            className: (0, a.default)("page-container__footer-button", m),
                            disabled: s,
                            onClick: (e) => r(e),
                            "data-testid": "page-container-footer-next"
                          },
                          l || this.context.t("next")
                        )
                      ),
                      e && o.default.createElement("div", { className: "page-container__footer-secondary" }, e)
                    );
                  }
                }
                (n.default = u),
                  c(u, "propTypes", {
                    children: r.default.node,
                    onCancel: r.default.func,
                    cancelText: r.default.string,
                    cancelButtonType: r.default.string,
                    onSubmit: r.default.func,
                    submitText: r.default.string,
                    disabled: r.default.bool,
                    submitButtonType: r.default.string,
                    hideCancel: r.default.bool,
                    buttonSizeLarge: r.default.bool,
                    footerClassName: r.default.string,
                    footerButtonClassName: r.default.string
                  }),
                  c(u, "contextTypes", { t: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container-footer/page-container-footer.component.js" }
    ],
    [
      4696,
      { "./page-container-header.component": 4697 },
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
                var o,
                  r = (o = e("./page-container-header.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container-header/index.js" }
    ],
    [
      4697,
      { "../../button": 4611, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r,
                  a,
                  i = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  l = u(e("prop-types")),
                  s = u(e("classnames")),
                  c = u(e("../../button"));
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
                class p extends i.Component {
                  renderTabs() {
                    const { tabs: e } = this.props;
                    return e ? i.default.createElement("ul", { className: "page-container__tabs" }, e) : null;
                  }
                  renderCloseAction() {
                    const { hideClose: e, onClose: t, headerCloseText: n } = this.props;
                    return e
                      ? null
                      : n
                      ? t &&
                        i.default.createElement(
                          c.default,
                          { type: "link", className: "page-container__header-close-text", onClick: () => t() },
                          n
                        )
                      : t &&
                        i.default.createElement("button", {
                          className: "page-container__header-close",
                          onClick: () => t(),
                          "aria-label": "close"
                        });
                  }
                  renderHeaderRow() {
                    const { showBackButton: e, onBackButtonClick: t, backButtonStyles: n, backButtonString: o } = this.props;
                    return (
                      e &&
                      i.default.createElement(
                        "div",
                        { className: "page-container__header-row" },
                        i.default.createElement("span", { className: "page-container__back-button", onClick: t, style: n }, o || "Back")
                      )
                    );
                  }
                  render() {
                    const { title: e, subtitle: t, tabs: n, className: o, hideClose: r } = this.props;
                    return i.default.createElement(
                      "div",
                      {
                        className: (0, s.default)("page-container__header", o, { "page-container__header--no-padding-bottom": Boolean(n) }),
                        "data-testid": "page-container__header"
                      },
                      this.renderHeaderRow(),
                      e &&
                        i.default.createElement(
                          "div",
                          { className: (0, s.default)("page-container__title", { "page-container__title--no-margin-right": r }) },
                          e
                        ),
                      t ? i.default.createElement("div", { className: "page-container__subtitle" }, t) : null,
                      this.renderCloseAction(),
                      this.renderTabs()
                    );
                  }
                }
                (n.default = p),
                  (o = p),
                  (r = "propTypes"),
                  (a = {
                    title: l.default.string,
                    subtitle: l.default.string,
                    onClose: l.default.func,
                    showBackButton: l.default.bool,
                    onBackButtonClick: l.default.func,
                    backButtonStyles: l.default.object,
                    backButtonString: l.default.string,
                    tabs: l.default.node,
                    headerCloseText: l.default.string,
                    className: l.default.string,
                    hideClose: l.default.bool
                  }),
                  (r = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (n !== undefined) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : String(t);
                  })(r)) in o
                    ? Object.defineProperty(o, r, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                    : (o[r] = a);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container-header/page-container-header.component.js" }
    ],
    [
      4698,
      { "./page-container-footer": 4694, "./page-container-header": 4696, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = l(e("prop-types")),
                  a = l(e("./page-container-header")),
                  i = l(e("./page-container-footer"));
                function l(e) {
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
                function c(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
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
                class u extends o.PureComponent {
                  constructor(...e) {
                    super(...e), c(this, "state", { activeTabIndex: this.props.defaultActiveTabIndex || 0 });
                  }
                  handleTabClick(e) {
                    this.setState({ activeTabIndex: e });
                  }
                  renderTabs() {
                    const { tabsComponent: e } = this.props;
                    if (!e) return null;
                    const t = o.default.Children.count(e.props.children);
                    return o.default.Children.map(
                      e.props.children,
                      (e, n) =>
                        e &&
                        o.default.cloneElement(e, {
                          onClick: (e) => this.handleTabClick(e),
                          tabIndex: n,
                          isActive: t > 1 && n === this.state.activeTabIndex,
                          key: n,
                          className: "page-container__tab"
                        })
                    );
                  }
                  renderActiveTabContent() {
                    const { tabsComponent: e } = this.props;
                    let { children: t } = e.props;
                    t = t.filter(Boolean);
                    const { activeTabIndex: n } = this.state;
                    return (t[n] || t[0]).props.children;
                  }
                  renderContent() {
                    const { contentComponent: e, tabsComponent: t } = this.props;
                    return e || (t ? this.renderActiveTabContent() : null);
                  }
                  render() {
                    const {
                      title: e,
                      subtitle: t,
                      onClose: n,
                      showBackButton: r,
                      onBackButtonClick: l,
                      backButtonStyles: s,
                      backButtonString: c,
                      onCancel: u,
                      cancelText: d,
                      onSubmit: p,
                      submitText: f,
                      disabled: m,
                      headerCloseText: h,
                      hideCancel: g
                    } = this.props;
                    return o.default.createElement(
                      "div",
                      { className: "page-container" },
                      o.default.createElement(a.default, {
                        title: e,
                        subtitle: t,
                        onClose: n,
                        showBackButton: r,
                        onBackButtonClick: l,
                        backButtonStyles: s,
                        backButtonString: c,
                        tabs: this.renderTabs(),
                        headerCloseText: h
                      }),
                      o.default.createElement(
                        "div",
                        { className: "page-container__bottom" },
                        o.default.createElement("div", { className: "page-container__content" }, this.renderContent()),
                        o.default.createElement(i.default, {
                          onCancel: u,
                          cancelText: d,
                          hideCancel: g,
                          onSubmit: p,
                          submitText: f,
                          disabled: m
                        })
                      )
                    );
                  }
                }
                (n.default = u),
                  c(u, "contextTypes", { t: r.default.func }),
                  c(u, "propTypes", {
                    backButtonString: r.default.string,
                    backButtonStyles: r.default.object,
                    headerCloseText: r.default.string,
                    onBackButtonClick: r.default.func,
                    onClose: r.default.func,
                    showBackButton: r.default.bool,
                    subtitle: r.default.string,
                    title: r.default.string.isRequired,
                    defaultActiveTabIndex: r.default.number,
                    tabsComponent: r.default.node,
                    contentComponent: r.default.node,
                    cancelText: r.default.string,
                    disabled: r.default.bool,
                    hideCancel: r.default.bool,
                    onCancel: r.default.func,
                    onSubmit: r.default.func,
                    submitText: r.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container.component.js" }
    ],
    [
      4699,
      { "./popover.component": 4700 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = (o = e("./popover.component")) && o.__esModule ? o : { default: o };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/popover/index.js" }
    ],
    [
      4700,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../box": 4607,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690,
        "react-dom": 3532
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = d(e("react-dom")),
                  a = d(e("prop-types")),
                  i = d(e("classnames")),
                  l = e("../../../hooks/useI18nContext"),
                  s = d(e("../box")),
                  c = e("../../../helpers/constants/design-system"),
                  u = e("../../component-library");
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
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
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
                function m() {
                  return (
                    (m = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    m.apply(this, arguments)
                  );
                }
                const h = {
                    padding: [6, 4, 4],
                    display: "flex",
                    flexDirection: c.FLEX_DIRECTION.COLUMN,
                    backgroundColor: c.BackgroundColor.backgroundDefault,
                    borderRadius: "xl"
                  },
                  g = {
                    display: "flex",
                    flexDirection: c.FLEX_DIRECTION.COLUMN,
                    justifyContent: c.JustifyContent.flexStart,
                    alignItems: c.AlignItems.stretch,
                    borderRadius: "xl"
                  },
                  y = { display: "flex", justifyContent: c.JustifyContent.spaceBetween, padding: [4, 6, 6] },
                  b = ({
                    title: e,
                    subtitle: t = "",
                    children: n,
                    footer: r,
                    footerClassName: a,
                    onBack: d,
                    onClose: p,
                    onScroll: f,
                    className: b,
                    contentClassName: v,
                    showArrow: k,
                    CustomBackground: _,
                    popoverRef: C,
                    showScrollDown: w,
                    onScrollDownButtonClick: T,
                    centerTitle: x,
                    headerProps: E = h,
                    contentProps: O = g,
                    footerProps: M = y
                  }) => {
                    const j = (0, l.useI18nContext)(),
                      P = e || d || t || p,
                      N = () =>
                        o.default.createElement(
                          s.default,
                          m({}, h, E, { className: "popover-header" }),
                          o.default.createElement(
                            s.default,
                            {
                              display: c.DISPLAY.FLEX,
                              alignItems: c.AlignItems.center,
                              justifyContent: x ? null : c.JustifyContent.spaceBetween,
                              className: (0, i.default)("popover-header__title", { "popover-header__title--center": x }),
                              marginBottom: 2
                            },
                            d
                              ? o.default.createElement(u.ButtonIcon, {
                                  iconName: u.IconName.ArrowLeft,
                                  ariaLabel: j("back"),
                                  onClick: d,
                                  color: c.Color.iconDefault,
                                  size: c.Size.SM
                                })
                              : null,
                            o.default.createElement(
                              u.Text,
                              {
                                textAlign: x ? c.TextAlign.Center : c.TextAlign.Start,
                                ellipsis: !0,
                                variant: c.TextVariant.headingSm,
                                as: "h2",
                                width: c.BLOCK_SIZES.FULL
                              },
                              e
                            ),
                            p
                              ? o.default.createElement(u.ButtonIcon, {
                                  iconName: u.IconName.Close,
                                  ariaLabel: j("close"),
                                  "data-testid": "popover-close",
                                  onClick: p,
                                  size: c.Size.SM
                                })
                              : null
                          ),
                          t ? o.default.createElement(u.Text, { variant: c.TextVariant.bodySm }, t) : null
                        );
                    return o.default.createElement(
                      "div",
                      { className: "popover-container" },
                      _
                        ? o.default.createElement(_, { onClose: p })
                        : o.default.createElement("div", { className: "popover-bg", onClick: p }),
                      o.default.createElement(
                        "section",
                        { className: (0, i.default)("popover-wrap", b), ref: C },
                        k ? o.default.createElement("div", { className: "popover-arrow" }) : null,
                        P && o.default.createElement(N, null),
                        n
                          ? o.default.createElement(s.default, m({ className: (0, i.default)("popover-content", v), onScroll: f }, g, O), n)
                          : null,
                        w
                          ? o.default.createElement(
                              s.default,
                              {
                                display: c.DISPLAY.FLEX,
                                alignItems: c.AlignItems.center,
                                justifyContent: c.JustifyContent.center,
                                borderColor: c.BorderColor.borderDefault,
                                backgroundColor: c.BackgroundColor.backgroundDefault,
                                color: c.Color.iconDefault,
                                onClick: T,
                                className: "popover-scroll-button",
                                style: { bottom: r ? "140px" : "12px" },
                                "data-testid": "popover-scroll-button"
                              },
                              o.default.createElement(u.Icon, {
                                name: u.IconName.ArrowDown,
                                color: c.IconColor.primaryDefault,
                                size: u.IconSize.Md,
                                "aria-label": j("scrollDown")
                              })
                            )
                          : null,
                        r ? o.default.createElement(s.default, m({ className: (0, i.default)("popover-footer", a) }, y, M), r) : null
                      )
                    );
                  };
                b.propTypes = {
                  title: a.default.node,
                  subtitle: a.default.string,
                  children: a.default.node,
                  footer: a.default.node,
                  footerClassName: a.default.string,
                  onBack: a.default.func,
                  onClose: a.default.func,
                  onScroll: a.default.func,
                  CustomBackground: a.default.func,
                  contentClassName: a.default.string,
                  className: a.default.string,
                  showArrow: a.default.bool,
                  popoverRef: a.default.shape({ current: a.default.instanceOf(window.Element) }),
                  showScrollDown: a.default.bool,
                  onScrollDownButtonClick: a.default.func,
                  centerTitle: a.default.bool,
                  headerProps: a.default.shape({ ...s.default.propTypes }),
                  contentProps: a.default.shape({ ...s.default.propTypes }),
                  footerProps: a.default.shape({ ...s.default.propTypes })
                };
                class v extends o.PureComponent {
                  constructor(...e) {
                    super(...e),
                      f(this, "rootNode", document.getElementById("popover-content")),
                      f(this, "instanceNode", document.createElement("div"));
                  }
                  componentDidMount() {
                    this.rootNode && this.rootNode.appendChild(this.instanceNode);
                  }
                  componentWillUnmount() {
                    this.rootNode && this.rootNode.removeChild(this.instanceNode);
                  }
                  render() {
                    const e = o.default.createElement(b, this.props);
                    return this.rootNode ? r.default.createPortal(e, this.instanceNode) : e;
                  }
                }
                (n.default = v), f(v, "propTypes", b.propTypes);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/popover/popover.component.js" }
    ],
    [
      4701,
      { "./pulse-loader": 4702 },
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
                var o,
                  r = (o = e("./pulse-loader")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/pulse-loader/index.js" }
    ],
    [
      4702,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    return r.default.createElement(
                      "div",
                      { className: "pulse-loader", "data-testid": "pulse-loader" },
                      r.default.createElement("div", { className: "pulse-loader__loading-dot-one" }),
                      r.default.createElement("div", { className: "pulse-loader__loading-dot-two" }),
                      r.default.createElement("div", { className: "pulse-loader__loading-dot-three" })
                    );
                  });
                var o,
                  r = (o = e("react")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/pulse-loader/pulse-loader.js" }
    ],
    [
      4703,
      { "./qr-code": 4704 },
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
                var o,
                  r = (o = e("./qr-code")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/qr-code/index.js" }
    ],
    [
      4704,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/modules/hexstring-utils": 3993,
        "../../../contexts/metametrics": 4749,
        "../../multichain/address-copy-button": 4517,
        "../box/box": 4606,
        "ethereumjs-util": 2693,
        "prop-types": 3450,
        "qrcode-generator": 3519,
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
                var o = m(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = m(e("qrcode-generator")),
                  i = e("react-redux"),
                  l = e("ethereumjs-util"),
                  s = e("../../../../shared/modules/hexstring-utils"),
                  c = e("../../multichain/address-copy-button"),
                  u = m(e("../box/box")),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../../shared/constants/metametrics");
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (f = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = (0, i.connect)(function (e) {
                  const { buyView: t, warning: n } = e.appState;
                  return { buyView: t, warning: n };
                })(h);
                function h({ Qr: e, warning: t }) {
                  const n = (0, r.useContext)(d.MetaMetricsContext),
                    { message: o, data: i } = e,
                    f = `${(0, l.isHexPrefixed)(i) ? "ethereum:" : ""}${(0, s.toChecksumHexAddress)(i)}`,
                    m = (0, a.default)(4, "M");
                  m.addData(f), m.make();
                  const h = o ? r.default.createElement("div", { className: "qr-code__header" }, o) : null;
                  return r.default.createElement(
                    "div",
                    { className: "qr-code" },
                    Array.isArray(o)
                      ? r.default.createElement(
                          "div",
                          { className: "qr-code__message-container" },
                          o.map((e, t) => r.default.createElement("div", { className: "qr_code__message", key: t }, e))
                        )
                      : h,
                    t ? r.default.createElement("span", { className: "qr-code__error" }, t) : null,
                    r.default.createElement("div", {
                      className: "qr-code__wrapper",
                      dangerouslySetInnerHTML: { __html: m.createTableTag(5, 24) }
                    }),
                    r.default.createElement(
                      u.default,
                      { marginBottom: 6 },
                      r.default.createElement(c.AddressCopyButton, {
                        wrap: !0,
                        address: i,
                        onClick: () => {
                          n({
                            category: p.MetaMetricsEventCategory.Accounts,
                            event: p.MetaMetricsEventName.PublicAddressCopied,
                            properties: { location: "Account Details Modal" }
                          });
                        }
                      })
                    )
                  );
                }
                h.propTypes = {
                  warning: o.default.node,
                  Qr: o.default.shape({
                    message: o.default.oneOfType([o.default.arrayOf(o.default.node), o.default.node]),
                    data: o.default.string.isRequired
                  }).isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/qr-code/qr-code.js" }
    ],
    [
      4705,
      {
        "../../../../shared/modules/Numeric": 3984,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../tooltip": 4736,
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
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = u(e("prop-types")),
                  a = e("../../../contexts/i18n"),
                  i = u(e("../tooltip")),
                  l = e("../../component-library"),
                  s = e("../../../helpers/constants/design-system"),
                  c = e("../../../../shared/modules/Numeric");
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
                function p({ tokenName: e, currentTokenBalance: t, tokenValue: n, onEdit: r }) {
                  const u = (0, o.useContext)(a.I18nContext),
                    d = new c.Numeric(Number(n), 10).greaterThan(Number(t), 10);
                  return o.default.createElement(
                    l.Box,
                    {
                      className: "review-spending-cap",
                      borderRadius: s.Size.SM,
                      paddingTop: 4,
                      paddingRight: 4,
                      paddingLeft: 4,
                      display: s.Display.Flex,
                      alignItems: s.AlignItems.flexStart,
                      flexDirection: s.FlexDirection.Column,
                      backgroundColor: s.BackgroundColor.backgroundAlternative,
                      gap: 1
                    },
                    o.default.createElement(
                      l.Box,
                      {
                        flexDirection: s.FlexDirection.Row,
                        display: s.Display.Flex,
                        alignItems: s.AlignItems.center,
                        className: "review-spending-cap__heading"
                      },
                      o.default.createElement(
                        l.Box,
                        { flexDirection: s.FlexDirection.Row, className: "review-spending-cap__heading-title" },
                        o.default.createElement(
                          l.Text,
                          { variant: s.TextVariant.bodySmBold, as: "h6", display: s.Display.InlineBlock },
                          u("dappRequestedSpendingCap")
                        ),
                        o.default.createElement(
                          l.Box,
                          { marginLeft: 2, display: s.Display.InlineBlock },
                          o.default.createElement(
                            i.default,
                            {
                              interactive: !0,
                              position: "top",
                              html: o.default.createElement(
                                l.Text,
                                {
                                  variant: s.TextVariant.bodySmBold,
                                  as: "h6",
                                  color: s.TextColor.textAlternative,
                                  className: "review-spending-cap__heading-title__tooltip"
                                },
                                d &&
                                  u("warningTooltipText", [
                                    o.default.createElement(
                                      l.Text,
                                      { key: "tooltip-text", variant: s.TextVariant.bodySmBold, as: "h6", color: s.TextColor.errorDefault },
                                      o.default.createElement(l.Icon, { name: l.IconName.Warning, style: { verticalAlign: "middle" } }),
                                      u("beCareful")
                                    )
                                  ]),
                                0 === Number(n) && u("revokeSpendingCapTooltipText")
                              )
                            },
                            d &&
                              o.default.createElement(l.Icon, {
                                className: "review-spending-cap__heading-title__tooltip__warning-icon",
                                name: l.IconName.Danger,
                                color: s.IconColor.errorDefault,
                                size: l.IconSize.Sm,
                                style: { verticalAlign: "middle" }
                              }),
                            0 === Number(n) &&
                              o.default.createElement(l.Icon, {
                                className: "review-spending-cap__heading-title__tooltip__question-icon",
                                name: l.IconName.Question,
                                color: s.IconColor.iconDefault
                              })
                          )
                        )
                      ),
                      o.default.createElement(
                        l.Box,
                        { className: "review-spending-cap__heading-detail", textAlign: s.TextAlign.End },
                        o.default.createElement(
                          l.ButtonLink,
                          {
                            size: s.Size.auto,
                            onClick: (e) => {
                              e.preventDefault(), r();
                            }
                          },
                          u("edit")
                        )
                      )
                    ),
                    o.default.createElement(
                      l.Box,
                      { className: "review-spending-cap__value" },
                      o.default.createElement(
                        l.Text,
                        {
                          color: d ? s.TextColor.errorDefault : s.TextColor.textDefault,
                          variant: s.TextVariant.bodySmBold,
                          as: "h6",
                          marginBottom: 3
                        },
                        n,
                        " ",
                        e
                      )
                    )
                  );
                }
                p.propTypes = {
                  tokenName: r.default.string,
                  currentTokenBalance: r.default.string,
                  tokenValue: r.default.string,
                  onEdit: r.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/review-spending-cap/review-spending-cap.js" }
    ],
    [
      4706,
      { "./sender-to-recipient.component": 4707 },
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
                var o,
                  r = (o = e("./sender-to-recipient.component")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/sender-to-recipient/index.js" }
    ],
    [
      4707,
      {
        "../../../../shared/constants/copy": 3956,
        "../../../../shared/modules/hexstring-utils": 3993,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../app/modals/nickname-popovers": 4192,
        "../../component-library": 4453,
        "../account-mismatch-warning/account-mismatch-warning.component": 4602,
        "../identicon": 4664,
        "../tooltip": 4736,
        "./sender-to-recipient.constants": 4708,
        classnames: 2414,
        "copy-to-clipboard": 2428,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.RecipientWithAddress = _), (n.default = w);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = y(e("prop-types")),
                  a = y(e("classnames")),
                  i = y(e("copy-to-clipboard")),
                  l = y(e("../tooltip")),
                  s = y(e("../identicon")),
                  c = e("../../../helpers/utils/util"),
                  u = y(e("../account-mismatch-warning/account-mismatch-warning.component")),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../../shared/modules/hexstring-utils"),
                  f = e("../../../../shared/constants/copy"),
                  m = y(e("../../app/modals/nickname-popovers")),
                  h = e("../../component-library"),
                  g = e("./sender-to-recipient.constants");
                function y(e) {
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
                const v = {
                  [g.DEFAULT_VARIANT]: "sender-to-recipient--default",
                  [g.CARDS_VARIANT]: "sender-to-recipient--cards",
                  [g.FLAT_VARIANT]: "sender-to-recipient--flat"
                };
                function k({
                  addressOnly: e,
                  checksummedSenderAddress: t,
                  senderName: n,
                  onSenderClick: r,
                  senderAddress: m,
                  warnUserOnAccountMismatch: h
                }) {
                  const g = (0, d.useI18nContext)(),
                    [y, b] = (0, o.useState)(!1);
                  let v = o.default.createElement("p", null, g("copiedExclamation"));
                  return (
                    y ||
                      (v = e
                        ? o.default.createElement("p", null, g("copyAddress"))
                        : o.default.createElement(
                            "p",
                            null,
                            (0, c.shortenAddress)(t),
                            o.default.createElement("br", null),
                            g("copyAddress")
                          )),
                    o.default.createElement(
                      "div",
                      {
                        className: (0, a.default)("sender-to-recipient__party sender-to-recipient__party--sender"),
                        onClick: () => {
                          b(!0), (0, i.default)(t, f.COPY_OPTIONS), r && r();
                        }
                      },
                      o.default.createElement(
                        "div",
                        { className: "sender-to-recipient__sender-icon" },
                        o.default.createElement(s.default, { address: (0, p.toChecksumHexAddress)(m), diameter: 24 })
                      ),
                      o.default.createElement(
                        l.default,
                        {
                          position: "bottom",
                          html: v,
                          wrapperClassName: "sender-to-recipient__tooltip-wrapper",
                          containerClassName: "sender-to-recipient__tooltip-container",
                          onHidden: () => b(!1)
                        },
                        o.default.createElement(
                          "div",
                          { className: "sender-to-recipient__name" },
                          e ? o.default.createElement("span", null, `${n || (0, c.shortenAddress)(t)}`) : n
                        )
                      ),
                      h && o.default.createElement(u.default, { address: m })
                    )
                  );
                }
                function _({
                  checksummedRecipientAddress: e,
                  onRecipientClick: t,
                  addressOnly: n,
                  recipientNickname: r,
                  recipientEns: a,
                  recipientName: u,
                  recipientMetadataName: p,
                  recipientIsOwnedAccount: h
                }) {
                  const g = (0, d.useI18nContext)(),
                    [y, b] = (0, o.useState)(!1),
                    [v, k] = (0, o.useState)(!1);
                  let _ = o.default.createElement("p", null, g("copiedExclamation"));
                  return (
                    v ||
                      (_ = n
                        ? o.default.createElement("p", null, g("copyAddress"))
                        : o.default.createElement(
                            "p",
                            null,
                            (0, c.shortenAddress)(e),
                            o.default.createElement("br", null),
                            g("copyAddress")
                          )),
                    o.default.createElement(
                      o.default.Fragment,
                      null,
                      o.default.createElement(
                        "div",
                        {
                          className:
                            "sender-to-recipient__party sender-to-recipient__party--recipient sender-to-recipient__party--recipient-with-address",
                          onClick: () => {
                            h ? (k(!0), (0, i.default)(e, f.COPY_OPTIONS)) : (b(!0), t && t());
                          }
                        },
                        o.default.createElement(
                          "div",
                          { className: "sender-to-recipient__sender-icon" },
                          o.default.createElement(s.default, { address: e, diameter: 24 })
                        ),
                        o.default.createElement(
                          l.default,
                          {
                            position: "bottom",
                            disabled: !u,
                            html: _,
                            wrapperClassName: "sender-to-recipient__tooltip-wrapper",
                            containerClassName: "sender-to-recipient__tooltip-container",
                            onHidden: () => k(!1)
                          },
                          o.default.createElement(
                            "div",
                            { className: "sender-to-recipient__name", "data-testid": "sender-to-recipient__name" },
                            n
                              ? u || r || p || a || (0, c.shortenAddress)(e)
                              : u || r || p || a || (0, c.shortenAddress)(e) || g("newContract")
                          )
                        )
                      ),
                      y ? o.default.createElement(m.default, { onClose: () => b(!1), address: e }) : null
                    )
                  );
                }
                function C({ variant: e }) {
                  return e === g.DEFAULT_VARIANT
                    ? o.default.createElement(
                        "div",
                        { className: "sender-to-recipient__arrow-container" },
                        o.default.createElement(
                          "div",
                          { className: "sender-to-recipient__arrow-circle" },
                          o.default.createElement("i", { className: "fa fa-arrow-right sender-to-recipient__arrow-circle__icon" })
                        )
                      )
                    : o.default.createElement(
                        "div",
                        { className: "sender-to-recipient__arrow-container" },
                        o.default.createElement(h.Icon, { name: h.IconName.ArrowRight })
                      );
                }
                function w({
                  senderAddress: e,
                  addressOnly: t,
                  senderName: n,
                  recipientNickname: r,
                  recipientName: i,
                  recipientMetadataName: l,
                  recipientEns: s,
                  onRecipientClick: c,
                  onSenderClick: u,
                  recipientAddress: f,
                  variant: m,
                  warnUserOnAccountMismatch: h,
                  recipientIsOwnedAccount: g
                }) {
                  const y = (0, d.useI18nContext)(),
                    b = (0, p.toChecksumHexAddress)(e),
                    w = (0, p.toChecksumHexAddress)(f);
                  return o.default.createElement(
                    "div",
                    { className: (0, a.default)("sender-to-recipient", v[m]), "data-testid": "sender-to-recipient" },
                    o.default.createElement(k, {
                      checksummedSenderAddress: b,
                      addressOnly: t,
                      senderName: n,
                      onSenderClick: u,
                      senderAddress: e,
                      warnUserOnAccountMismatch: h
                    }),
                    o.default.createElement(C, { variant: m }),
                    f
                      ? o.default.createElement(_, {
                          checksummedRecipientAddress: w,
                          onRecipientClick: c,
                          addressOnly: t,
                          recipientNickname: r,
                          recipientEns: s,
                          recipientName: i,
                          recipientMetadataName: l,
                          recipientIsOwnedAccount: g
                        })
                      : o.default.createElement(
                          "div",
                          { className: "sender-to-recipient__party sender-to-recipient__party--recipient" },
                          o.default.createElement("i", { className: "fa fa-file-text-o" }),
                          o.default.createElement("div", { className: "sender-to-recipient__name" }, y("newContract"))
                        )
                  );
                }
                (k.propTypes = {
                  senderName: r.default.string,
                  checksummedSenderAddress: r.default.string,
                  addressOnly: r.default.bool,
                  senderAddress: r.default.string,
                  onSenderClick: r.default.func,
                  warnUserOnAccountMismatch: r.default.bool
                }),
                  (_.propTypes = {
                    checksummedRecipientAddress: r.default.string,
                    recipientName: r.default.string,
                    recipientMetadataName: r.default.string,
                    recipientEns: r.default.string,
                    recipientNickname: r.default.string,
                    addressOnly: r.default.bool,
                    onRecipientClick: r.default.func,
                    recipientIsOwnedAccount: r.default.bool
                  }),
                  (C.propTypes = { variant: r.default.oneOf([g.DEFAULT_VARIANT, g.CARDS_VARIANT, g.FLAT_VARIANT]) }),
                  (w.defaultProps = { variant: g.DEFAULT_VARIANT, warnUserOnAccountMismatch: !0 }),
                  (w.propTypes = {
                    senderName: r.default.string,
                    senderAddress: r.default.string,
                    recipientName: r.default.string,
                    recipientMetadataName: r.default.string,
                    recipientEns: r.default.string,
                    recipientAddress: r.default.string,
                    recipientNickname: r.default.string,
                    variant: r.default.oneOf([g.DEFAULT_VARIANT, g.CARDS_VARIANT, g.FLAT_VARIANT]),
                    addressOnly: r.default.bool,
                    onRecipientClick: r.default.func,
                    onSenderClick: r.default.func,
                    warnUserOnAccountMismatch: r.default.bool,
                    recipientIsOwnedAccount: r.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/sender-to-recipient/sender-to-recipient.component.js" }
    ],
    [
      4708,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.FLAT_VARIANT = n.DEFAULT_VARIANT = n.CARDS_VARIANT = void 0);
                (n.DEFAULT_VARIANT = "DEFAULT_VARIANT"), (n.CARDS_VARIANT = "CARDS_VARIANT"), (n.FLAT_VARIANT = "FLAT_VARIANT");
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/sender-to-recipient/sender-to-recipient.constants.js" }
    ],
    [
      4709,
      { "./show-hide-toggle": 4710 },
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
                var o,
                  r = (o = e("./show-hide-toggle")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/show-hide-toggle/index.js" }
    ],
    [
      4710,
      { "../icon/icon-eye": 4654, "../icon/icon-eye-slash": 4653, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = s(e("react")),
                  r = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = s(e("../icon/icon-eye")),
                  l = s(e("../icon/icon-eye-slash"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = ({
                  id: e,
                  shown: t,
                  onChange: n,
                  ariaLabelHidden: r,
                  ariaLabelShown: s,
                  className: c,
                  "data-testid": u,
                  disabled: d,
                  title: p
                }) =>
                  o.default.createElement(
                    "div",
                    { className: (0, a.default)("show-hide-toggle", c) },
                    o.default.createElement("input", {
                      className: "show-hide-toggle__input",
                      id: e,
                      type: "checkbox",
                      checked: t,
                      onChange: n,
                      "data-testid": u,
                      disabled: d
                    }),
                    o.default.createElement(
                      "label",
                      { htmlFor: e, className: "show-hide-toggle__label", title: p },
                      t
                        ? o.default.createElement(i.default, { ariaLabel: s, className: "show-hide-toggle__icon" })
                        : o.default.createElement(l.default, { ariaLabel: r, className: "show-hide-toggle__icon" })
                    )
                  );
                c.propTypes = {
                  id: r.default.string.isRequired,
                  shown: r.default.bool.isRequired,
                  onChange: r.default.func.isRequired,
                  ariaLabelHidden: r.default.string.isRequired,
                  ariaLabelShown: r.default.string.isRequired,
                  className: r.default.string,
                  "data-testid": r.default.string,
                  disabled: r.default.bool,
                  title: r.default.string
                };
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/show-hide-toggle/show-hide-toggle.js" }
    ],
    [
      4711,
      { "./simulation-error-message": 4712 },
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
                var o,
                  r = (o = e("./simulation-error-message")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/simulation-error-message/index.js" }
    ],
    [
      4712,
      {
        "../../../../.storybook/i18n": 1,
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var o,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  a = (o = e("prop-types")) && o.__esModule ? o : { default: o },
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = e("../../../../.storybook/i18n"),
                  c = e("../../../../shared/constants/metametrics"),
                  u = e("../../../contexts/metametrics");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function p({ userAcknowledgedGasMissing: e = !1, setUserAcknowledgedGasMissing: t }) {
                  const n = (0, r.useContext)(s.I18nContext),
                    o = (0, r.useContext)(u.MetaMetricsContext);
                  return (
                    (0, r.useEffect)(() => {
                      o({
                        category: c.MetaMetricsEventCategory.Transactions,
                        event: c.MetaMetricsEventName.SimulationFails,
                        properties: { ui_customizations: [c.MetaMetricsEventUiCustomization.GasEstimationFailed] }
                      });
                    }, []),
                    !0 === e
                      ? r.default.createElement(i.BannerAlert, { severity: l.SEVERITIES.DANGER }, n("simulationErrorMessageV2"))
                      : r.default.createElement(
                          i.BannerAlert,
                          { severity: l.SEVERITIES.DANGER, actionButtonLabel: n("proceedWithTransaction"), actionButtonOnClick: t },
                          n("simulationErrorMessageV2")
                        )
                  );
                }
                p.propTypes = { userAcknowledgedGasMissing: a.default.bool, setUserAcknowledgedGasMissing: a.default.func };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/simulation-error-message/simulation-error-message.js" }
    ],
    [
      4713,
      { "./site-icon": 4714 },
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
                var o,
                  r = (o = e("./site-icon")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/site-icon/index.js" }
    ],
    [
      4714,
      { "../icon-border": 4648, "../icon-with-fallback": 4652, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = s);
                var o = l(e("react")),
                  r = l(e("prop-types")),
                  a = l(e("../icon-border")),
                  i = l(e("../icon-with-fallback"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s({ icon: e = null, name: t = "", size: n, className: r }) {
                  const l = Math.floor(0.75 * n);
                  return o.default.createElement(
                    a.default,
                    { size: n, className: r },
                    o.default.createElement(i.default, { icon: e, name: t, size: l })
                  );
                }
                s.propTypes = {
                  className: r.default.string,
                  icon: r.default.string,
                  name: r.default.string,
                  size: r.default.number.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/site-icon/site-icon.js" }
    ],
    [
      4715,
      { "./site-origin": 4716 },
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
                var o,
                  r = (o = e("./site-origin")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/site-origin/index.js" }
    ],
    [
      4716,
      {
        "../../../helpers/constants/design-system": 4771,
        "../chip": 4620,
        "../icon-with-fallback": 4652,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = u);
                var o = c(e("react")),
                  r = c(e("prop-types")),
                  a = c(e("classnames")),
                  i = c(e("../chip")),
                  l = c(e("../icon-with-fallback")),
                  s = e("../../../helpers/constants/design-system");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u({ siteOrigin: e, iconSrc: t, iconName: n, chip: r, className: c, title: u, leftIcon: d, rightIcon: p }) {
                  return o.default.createElement(
                    "div",
                    { className: (0, a.default)("site-origin", c), title: u },
                    r
                      ? o.default.createElement(i.default, {
                          borderColor: s.BorderColor.borderMuted,
                          label: e,
                          maxContent: !1,
                          leftIcon: d || o.default.createElement(l.default, { icon: t, name: n, size: 24 }),
                          rightIcon: p
                        })
                      : o.default.createElement("bdi", { dir: "ltr" }, e)
                  );
                }
                u.propTypes = {
                  siteOrigin: r.default.string.isRequired,
                  iconName: r.default.string,
                  iconSrc: r.default.string,
                  className: r.default.string,
                  title: r.default.string,
                  chip: r.default.bool,
                  leftIcon: r.default.node,
                  rightIcon: r.default.node
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/site-origin/site-origin.js" }
    ],
    [
      4717,
      { "./spinner.component": 4718 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = (o = e("./spinner.component")) && o.__esModule ? o : { default: o };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/spinner/index.js" }
    ],
    [
      4718,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = a(e("react")),
                  r = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ className: e = "", color: t = "var(--color-text-default)" }) =>
                  o.default.createElement(
                    "div",
                    { className: `spinner ${e}` },
                    o.default.createElement(
                      "svg",
                      {
                        className: "lds-spinner",
                        width: "100%",
                        height: "100%",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 100 100",
                        preserveAspectRatio: "xMidYMid",
                        style: { background: "none" }
                      },
                      o.default.createElement(
                        "g",
                        { transform: "rotate(0 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.9166666666666666s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      o.default.createElement(
                        "g",
                        { transform: "rotate(30 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.8333333333333334s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      o.default.createElement(
                        "g",
                        { transform: "rotate(60 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.75s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      o.default.createElement(
                        "g",
                        { transform: "rotate(90 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.6666666666666666s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      o.default.createElement(
                        "g",
                        { transform: "rotate(120 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.5833333333333334s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      o.default.createElement(
                        "g",
                        { transform: "rotate(150 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.5s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      o.default.createElement(
                        "g",
                        { transform: "rotate(180 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.4166666666666667s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      o.default.createElement(
                        "g",
                        { transform: "rotate(210 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.3333333333333333s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      o.default.createElement(
                        "g",
                        { transform: "rotate(240 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.25s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      o.default.createElement(
                        "g",
                        { transform: "rotate(270 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.16666666666666666s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      o.default.createElement(
                        "g",
                        { transform: "rotate(300 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.08333333333333333s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      o.default.createElement(
                        "g",
                        { transform: "rotate(330 50 50)" },
                        o.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          o.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "0s",
                            repeatCount: "indefinite"
                          })
                        )
                      )
                    )
                  );
                i.propTypes = { className: r.default.string, color: r.default.string };
                n.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/spinner/spinner.component.js" }
    ],
    [
      4719,
      { "./tab": 4722, "./tabs.component": 4724 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Tab", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  }),
                  Object.defineProperty(n, "Tabs", {
                    enumerable: !0,
                    get: function () {
                      return o.default;
                    }
                  });
                var o = a(e("./tabs.component")),
                  r = a(e("./tab"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tabs/index.js" }
    ],
    [
      4720,
      {
        "../../../../../helpers/constants/design-system": 4771,
        "../../../../component-library": 4453,
        "../../../dropdown": 4636,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.DropdownTab = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = c(e("prop-types")),
                  a = c(e("classnames")),
                  i = e("../../../../../helpers/constants/design-system"),
                  l = e("../../../../component-library"),
                  s = c(e("../../../dropdown"));
                function c(e) {
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
                const d = ({
                  activeClassName: e,
                  className: t,
                  "data-testid": n,
                  isActive: r,
                  onClick: c,
                  onChange: u,
                  tabIndex: d,
                  options: p,
                  selectedOption: f
                }) => {
                  var m;
                  const [h, g] = (0, o.useState)(!1),
                    y = (0, o.useRef)(null),
                    b = (0, o.useCallback)(
                      (e) => {
                        u(e);
                      },
                      [u]
                    ),
                    v = null === (m = p.find((e) => e.value === f)) || void 0 === m ? void 0 : m.name;
                  return (
                    (0, o.useEffect)(() => {
                      function e(e) {
                        y.current && !y.current.contains(e.target) && h && g(!1);
                      }
                      return (
                        document.addEventListener("mousedown", e),
                        () => {
                          document.removeEventListener("mousedown", e);
                        }
                      );
                    }, [y, h]),
                    o.default.createElement(
                      l.Box,
                      {
                        as: "li",
                        className: (0, a.default)("tab", t, "transaction-insight-dropdown-wrapper", { "tab--active": r, [e]: e && r }),
                        "data-testid": n,
                        onClick: (e) => {
                          e.preventDefault(), c(d);
                        },
                        dataTestId: n,
                        flexDirection: i.FlexDirection.Row,
                        flexWrap: i.FlexWrap.NoWrap,
                        height: i.BlockSize.Full,
                        style: { cursor: "pointer", position: "relative", overflow: "visible" },
                        title: v
                      },
                      o.default.createElement(s.default, {
                        className: "transaction-insight-dropdown",
                        onChange: (e) => b(e),
                        options: p,
                        selectedOption: f,
                        title: "Transaction Insights",
                        style: { pointerEvents: r ? "auto" : "none" }
                      })
                    )
                  );
                };
                (n.DropdownTab = d),
                  (d.propTypes = {
                    activeClassName: r.default.string,
                    className: r.default.string,
                    "data-testid": r.default.string,
                    isActive: r.default.bool,
                    options: r.default.arrayOf(r.default.exact({ name: r.default.string, value: r.default.string.isRequired })).isRequired,
                    selectedOption: r.default.string,
                    onChange: r.default.func,
                    onClick: r.default.func,
                    tabIndex: r.default.number
                  }),
                  (d.defaultProps = {
                    activeClassName: undefined,
                    className: undefined,
                    onChange: undefined,
                    onClick: undefined,
                    selectedOption: undefined
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tabs/snaps/dropdown-tab/dropdown-tab.js" }
    ],
    [
      4721,
      { "./dropdown-tab": 4720 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = e("./dropdown-tab");
                n.default = o.DropdownTab;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tabs/snaps/dropdown-tab/index.js" }
    ],
    [
      4722,
      { "./tab.component": 4723 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = (o = e("./tab.component")) && o.__esModule ? o : { default: o };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tabs/tab/index.js" }
    ],
    [
      4723,
      { "../../../../helpers/constants/design-system": 4771, "../../box": 4607, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = s(e("react")),
                  r = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("../../../../helpers/constants/design-system"),
                  l = s(e("../../box"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = (e) => {
                  const {
                    activeClassName: t,
                    className: n,
                    "data-testid": r,
                    isActive: s,
                    name: c,
                    onClick: u,
                    tabIndex: d,
                    tabKey: p
                  } = e;
                  return o.default.createElement(
                    l.default,
                    {
                      as: "li",
                      className: (0, a.default)("tab", n, { "tab--active": s, [t]: t && s }),
                      "data-testid": r,
                      onClick: (e) => {
                        e.preventDefault(), u(d);
                      },
                      key: p
                    },
                    o.default.createElement(
                      l.default,
                      { as: "button", padding: 2, textAlign: i.TextAlign.Center, display: i.DISPLAY.BLOCK, width: i.BLOCK_SIZES.FULL },
                      c
                    )
                  );
                };
                (c.propTypes = {
                  activeClassName: r.default.string,
                  className: r.default.string,
                  "data-testid": r.default.string,
                  isActive: r.default.bool,
                  name: r.default.string.isRequired,
                  tabKey: r.default.string.isRequired,
                  onClick: r.default.func,
                  tabIndex: r.default.number
                }),
                  (c.defaultProps = { activeClassName: undefined, className: undefined, onClick: undefined, "data-testid": undefined });
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tabs/tab/tab.component.js" }
    ],
    [
      4724,
      { "../../../helpers/constants/design-system": 4771, "../box": 4607, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = s(e("../box")),
                  l = e("../../../helpers/constants/design-system");
                function s(e) {
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
                const u = ({ defaultActiveTabKey: e, onTabClick: t, children: n, tabsClassName: r, subHeader: s }) => {
                  const c = () => o.default.Children.toArray(n).filter(Boolean),
                    [u, d] = (0, o.useState)(() => {
                      return Math.max(((t = e), c().findIndex((e) => (null == e ? void 0 : e.props.tabKey) === t)), 0);
                      var t;
                    });
                  return o.default.createElement(
                    i.default,
                    { className: "tabs" },
                    o.default.createElement(
                      i.default,
                      {
                        as: "ul",
                        display: l.DISPLAY.FLEX,
                        justifyContent: l.JustifyContent.flexStart,
                        backgroundColor: l.BackgroundColor.backgroundDefault,
                        className: (0, a.default)("tabs__list", r),
                        gap: 1
                      },
                      (() => {
                        const e = o.default.Children.count(c());
                        return o.default.Children.map(c(), (n, r) => {
                          const a = null == n ? void 0 : n.props.tabKey;
                          return (
                            n &&
                            o.default.cloneElement(n, {
                              onClick: (e) =>
                                ((e, n) => {
                                  e !== u && (d(e), null == t || t(n));
                                })(e, a),
                              tabIndex: r,
                              isActive: e > 1 && r === u
                            })
                          );
                        });
                      })()
                    ),
                    s,
                    o.default.createElement(
                      i.default,
                      { className: "tabs__content" },
                      (() => {
                        const e = c();
                        if ((Array.isArray(e) && !e[u]) || (!Array.isArray(e) && 0 !== u))
                          throw new Error(`Tab at index '${u}' does not exist`);
                        return e[u] ? e[u].props.children : e.props.children;
                      })()
                    )
                  );
                };
                n.default = u;
                u.propTypes = {
                  defaultActiveTabKey: r.default.string,
                  onTabClick: r.default.func,
                  children: r.default.node.isRequired,
                  tabsClassName: r.default.string,
                  subHeader: r.default.node
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tabs/tabs.component.js" }
    ],
    [
      4725,
      { "./text-field.component": 4726 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = (o = e("./text-field.component")) && o.__esModule ? o : { default: o };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/text-field/index.js" }
    ],
    [
      4726,
      { "@material-ui/core/TextField": 802, "@material-ui/core/styles": 875, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = l(e("react")),
                  r = l(e("prop-types")),
                  a = e("@material-ui/core/styles"),
                  i = l(e("@material-ui/core/TextField"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s() {
                  return (
                    (s = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                const c = { transform: "none", transition: "none", position: "initial", color: "var(--color-text-default)" },
                  u = {
                    materialLabel: {
                      "&$materialFocused": { color: "var(--color-text-alternative)" },
                      "&$materialError": { color: "var(--color-text-alternative)" },
                      fontWeight: "400",
                      color: "var(--color-text-alternative)"
                    },
                    materialFocused: {},
                    materialUnderline: {
                      "&:before": { borderBottom: "1px solid var(--color-text-default) !important" },
                      "&:after": { borderBottom: "2px solid var(--color-primary-default)" }
                    },
                    materialError: {},
                    materialWhitePaddedRoot: { color: "var(--color-text-alternative)" },
                    materialWhitePaddedInput: { padding: "8px", "&::placeholder": { color: "var(--color-text-alternative)" } },
                    materialWhitePaddedFocused: { color: "var(--color-background-default)" },
                    materialWhitePaddedUnderline: { "&:after": { borderBottom: "2px solid var(--color-background-default)" } },
                    formLabel: {
                      "&$formLabelFocused": { color: "var(--color-text-alternative)" },
                      "&$materialError": { color: "var(--color-text-alternative)" }
                    },
                    formLabelFocused: {},
                    inputFocused: {},
                    inputRoot: {
                      "label + &": { marginTop: "9px" },
                      backgroundColor: "var(--color-background-default)",
                      border: "1px solid var(--color-border-default)",
                      color: "var(--color-text-default)",
                      height: "48px",
                      borderRadius: "6px",
                      padding: "0 16px",
                      display: "flex",
                      alignItems: "center",
                      "&$inputFocused": { border: "1px solid var(--color-primary-default)" }
                    },
                    largeInputLabel: { ...c, fontSize: "1rem" },
                    inputLabel: { ...c, fontSize: ".75rem" },
                    inputMultiline: { lineHeight: "initial !important" }
                  },
                  d = {
                    material: ({
                      dir: e,
                      classes: { materialLabel: t, materialFocused: n, materialError: o, materialUnderline: r },
                      startAdornment: a,
                      endAdornment: i,
                      min: l,
                      max: s,
                      autoComplete: c
                    }) => ({
                      InputLabelProps: { classes: { root: t, focused: n, error: o } },
                      InputProps: {
                        startAdornment: a,
                        endAdornment: i,
                        classes: { underline: r },
                        inputProps: { dir: e, min: l, max: s, autoComplete: c }
                      }
                    }),
                    bordered: ({
                      dir: e,
                      classes: {
                        formLabel: t,
                        formLabelFocused: n,
                        materialError: o,
                        largeInputLabel: r,
                        inputLabel: a,
                        inputRoot: i,
                        input: l,
                        inputFocused: s
                      },
                      largeLabel: c,
                      startAdornment: u,
                      endAdornment: d,
                      min: p,
                      max: f,
                      autoComplete: m
                    }) => ({
                      InputLabelProps: { shrink: !0, className: c ? r : a, classes: { root: t, focused: n, error: o } },
                      InputProps: {
                        startAdornment: u,
                        endAdornment: d,
                        disableUnderline: !0,
                        classes: { root: i, input: l, focused: s },
                        inputProps: { dir: e, min: p, max: f, autoComplete: m }
                      }
                    }),
                    "material-white-padded": ({
                      dir: e,
                      classes: {
                        materialWhitePaddedRoot: t,
                        materialWhitePaddedFocused: n,
                        materialWhitePaddedInput: o,
                        materialWhitePaddedUnderline: r
                      },
                      startAdornment: a,
                      endAdornment: i,
                      min: l,
                      max: s,
                      autoComplete: c
                    }) => ({
                      InputProps: {
                        startAdornment: a,
                        endAdornment: i,
                        classes: { root: t, focused: n, input: o, underline: r },
                        inputProps: { dir: e, min: l, max: s, autoComplete: c }
                      }
                    })
                  },
                  p = ({
                    "data-testid": e,
                    error: t,
                    classes: n,
                    theme: r,
                    startAdornment: a,
                    endAdornment: l,
                    largeLabel: c,
                    dir: u,
                    min: p,
                    max: f,
                    autoComplete: m,
                    onPaste: h,
                    ...g
                  }) => {
                    const y = d[r]({
                      classes: n,
                      startAdornment: a,
                      endAdornment: l,
                      largeLabel: c,
                      dir: u,
                      min: p,
                      max: f,
                      autoComplete: m
                    });
                    return (
                      (h || e) &&
                        (y.InputProps || (y.InputProps = {}),
                        y.InputProps.inputProps || (y.InputProps.inputProps = {}),
                        (y.InputProps.inputProps.onPaste = h),
                        (y.InputProps.inputProps["data-testid"] = e)),
                      o.default.createElement(i.default, s({ error: Boolean(t), helperText: t }, y, g))
                    );
                  };
                (p.defaultProps = { error: null, dir: "auto", theme: "bordered" }),
                  (p.propTypes = {
                    "data-testid": r.default.string,
                    error: r.default.oneOfType([r.default.string, r.default.element]),
                    classes: r.default.object,
                    dir: r.default.string,
                    theme: r.default.oneOf(["bordered", "material", "material-white-padded"]),
                    startAdornment: r.default.element,
                    endAdornment: r.default.element,
                    largeLabel: r.default.bool,
                    min: r.default.number,
                    max: r.default.number,
                    autoComplete: r.default.string,
                    onPaste: r.default.func
                  });
                n.default = (0, a.withStyles)(u)(p);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/text-field/text-field.component.js" }
    ],
    [
      4727,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.RESIZE = void 0);
                n.RESIZE = {
                  NONE: "none",
                  BOTH: "both",
                  HORIZONTAL: "horizontal",
                  VERTICAL: "vertical",
                  INITIAL: "initial",
                  INHERIT: "inherit"
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/textarea/textarea.constants.js" }
    ],
    [
      4728,
      {
        "../../../helpers/constants/design-system": 4771,
        "../box": 4607,
        "./textarea.constants": 4727,
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
                var o = c(e("react")),
                  r = c(e("prop-types")),
                  a = c(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  l = c(e("../box")),
                  s = e("./textarea.constants");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                const d = ({
                  className: e,
                  value: t,
                  onChange: n,
                  resize: r = s.RESIZE.BOTH,
                  scrollable: c = !1,
                  height: d,
                  boxProps: p,
                  ...f
                }) => {
                  const m = (0, a.default)("textarea", e, `textarea--resize-${r}`, {
                    "textarea--scrollable": c,
                    "textarea--not-scrollable": !c
                  });
                  return o.default.createElement(
                    l.default,
                    u(
                      {
                        backgroundColor: i.BackgroundColor.backgroundDefault,
                        borderColor: i.BorderColor.borderDefault,
                        borderRadius: i.Size.SM,
                        borderStyle: i.BorderStyle.solid,
                        padding: 4,
                        width: i.BlockSize.Full
                      },
                      p
                    ),
                    (e) =>
                      o.default.createElement(
                        "textarea",
                        u({ required: !0, style: { height: d }, className: (0, a.default)(e, m), value: t, onChange: n }, f)
                      )
                  );
                };
                d.propTypes = {
                  height: r.default.oneOfType([r.default.string, r.default.number]),
                  className: r.default.string,
                  value: r.default.string,
                  onChange: r.default.func,
                  resize: r.default.oneOf(Object.values(s.RESIZE)),
                  scrollable: r.default.bool,
                  boxProps: r.default.shape({ ...l.default.propTypes })
                };
                n.default = d;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/textarea/textarea.js" }
    ],
    [
      4729,
      { "./toggle-button.component": 4730 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = (o = e("./toggle-button.component")) && o.__esModule ? o : { default: o };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/toggle-button/index.js" }
    ],
    [
      4730,
      { classnames: 2414, "prop-types": 3450, react: 3690, "react-toggle-button": 3687 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = l(e("react")),
                  r = l(e("prop-types")),
                  a = l(e("react-toggle-button")),
                  i = l(e("classnames"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const s = {
                    width: "40px",
                    height: "24px",
                    padding: "0px",
                    borderRadius: "26px",
                    border: "2px solid var(--color-primary-default)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  c = { ...s, border: "2px solid var(--color-border-default)" },
                  u = {
                    width: "18px",
                    height: "18px",
                    display: "flex",
                    boxShadow: "none",
                    alignSelf: "center",
                    borderRadius: "50%",
                    position: "relative"
                  },
                  d = {
                    activeThumb: { base: "#037DD6" },
                    inactiveThumb: { base: "#6A737D" },
                    active: { base: "#F2F4F6", hover: "#F2F4F6" },
                    inactive: { base: "#F2F4F6", hover: "#F2F4F6" }
                  },
                  p = (e) => {
                    const { value: t, onToggle: n, offLabel: r, onLabel: l, disabled: p, className: f, dataTestId: m } = e,
                      h = t ? "on" : "off";
                    return o.default.createElement(
                      "label",
                      {
                        tabIndex: "0",
                        onKeyDown: (e) => {
                          "Enter" === e.key && n(t);
                        },
                        className: (0, i.default)("toggle-button", `toggle-button--${h}`, { "toggle-button--disabled": p }, f)
                      },
                      o.default.createElement(a.default, {
                        value: t,
                        onToggle: p ? undefined : n,
                        activeLabel: "",
                        inactiveLabel: "",
                        trackStyle: t ? s : c,
                        thumbStyle: u,
                        thumbAnimateRange: [3, 18],
                        colors: d,
                        passThroughInputProps: { "data-testid": m }
                      }),
                      o.default.createElement(
                        "div",
                        { className: "toggle-button__status" },
                        o.default.createElement("span", { className: "toggle-button__label-off" }, r),
                        o.default.createElement("span", { className: "toggle-button__label-on" }, l)
                      )
                    );
                  };
                p.propTypes = {
                  value: r.default.bool,
                  onToggle: r.default.func,
                  offLabel: r.default.string,
                  onLabel: r.default.string,
                  disabled: r.default.bool,
                  className: r.default.string,
                  dataTestId: r.default.string
                };
                n.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/toggle-button/toggle-button.component.js" }
    ],
    [
      4731,
      { "./token-balance": 4732 },
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
                var o,
                  r = (o = e("./token-balance")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/token-balance/index.js" }
    ],
    [
      4732,
      { "../../../hooks/useTokenTracker": 4859, "../currency-display": 4627, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = c);
                var o = l(e("react")),
                  r = l(e("prop-types")),
                  a = l(e("../currency-display")),
                  i = e("../../../hooks/useTokenTracker");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s() {
                  return (
                    (s = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                function c({ className: e, token: t, ...n }) {
                  const { tokensWithBalances: r } = (0, i.useTokenTracker)({ tokens: [t] }),
                    { string: l, symbol: c } = r[0] || {};
                  return o.default.createElement(a.default, s({ className: e, displayValue: l || "", suffix: c || "" }, n));
                }
                (c.propTypes = {
                  className: r.default.string,
                  token: r.default.shape({ address: r.default.string.isRequired, decimals: r.default.number, symbol: r.default.string })
                    .isRequired
                }),
                  (c.defaultProps = { className: undefined });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/token-balance/token-balance.js" }
    ],
    [
      4733,
      { "./token-input.container": 4735 },
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
                var o,
                  r = (o = e("./token-input.container")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/token-input/index.js" }
    ],
    [
      4734,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/common": 3955,
        "../../../../shared/modules/Numeric": 3984,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../../shared/modules/string-utils": 4002,
        "../currency-display": 4627,
        "../unit-input": 4742,
        "bignumber.js": 2283,
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
                var o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  r = f(e("prop-types")),
                  a = f(e("bignumber.js")),
                  i = f(e("../unit-input")),
                  l = f(e("../currency-display")),
                  s = e("../../../../shared/modules/conversion.utils"),
                  c = e("../../../../app/scripts/lib/util"),
                  u = e("../../../../shared/modules/string-utils"),
                  d = e("../../../../shared/modules/Numeric"),
                  p = e("../../../../shared/constants/common");
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
                function h() {
                  return (
                    (h = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                        }),
                    h.apply(this, arguments)
                  );
                }
                function g(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
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
                class y extends o.PureComponent {
                  constructor(e) {
                    super(e),
                      g(this, "handleChange", (e, t = !1) => {
                        const { token: { decimals: n } = {}, onChange: o } = this.props;
                        let r = e;
                        n && e && t && (r = new a.default(e, 10).toFixed(n));
                        const i = new d.Numeric(r || 0, 10)
                          .times(Math.pow(10, Number(n || 0)), 10)
                          .toBase(16)
                          .toString();
                        this.setState({ hexValue: i, decimalValue: e }), o(i);
                      }),
                      g(this, "handleBlur", (e) => {
                        this.handleChange(e, !0);
                      });
                    const { value: t } = e,
                      n = t ? this.getValue(e) : 0;
                    this.state = { decimalValue: n, hexValue: t };
                  }
                  componentDidUpdate(e) {
                    const { value: t } = e,
                      { value: n } = this.props,
                      { hexValue: o } = this.state;
                    if (t !== n && n !== o) {
                      const e = this.getValue(this.props);
                      this.setState({ hexValue: n, decimalValue: e });
                    }
                  }
                  getValue(e) {
                    const { value: t, token: { decimals: n, symbol: o } = {} } = e,
                      r = Math.pow(10, Number(n || 0)),
                      a = new d.Numeric((0, c.addHexPrefix)(t), 16)
                        .toBase(10)
                        .applyConversionRate(o ? r : 1, !0)
                        .toString();
                    return Number(a) ? a : "";
                  }
                  renderConversionComponent() {
                    const {
                        tokenExchangeRates: e,
                        showFiat: t,
                        currentCurrency: n,
                        hideConversion: r,
                        token: a,
                        tokens: i,
                        nativeCurrency: c
                      } = this.props,
                      { decimalValue: d } = this.state,
                      f = i.find(({ address: e }) => (0, u.isEqualCaseInsensitive)(e, a.address)),
                      m = (null == e ? void 0 : e[null == f ? void 0 : f.address]) ?? 0;
                    let h, g;
                    if (r)
                      return o.default.createElement(
                        "div",
                        { className: "currency-input__conversion-component" },
                        this.context.t("noConversionRateAvailable")
                      );
                    t ? ((h = n), (g = 2)) : ((h = c), (g = 6));
                    const y = d * m || 0,
                      b = (0, s.getWeiHexFromDecimalValue)({
                        value: y,
                        fromCurrency: p.EtherDenomination.ETH,
                        fromDenomination: p.EtherDenomination.ETH
                      });
                    return m
                      ? o.default.createElement(l.default, {
                          className: "currency-input__conversion-component",
                          currency: h,
                          value: b,
                          numberOfDecimals: g
                        })
                      : o.default.createElement(
                          "div",
                          { className: "currency-input__conversion-component" },
                          this.context.t("noConversionRateAvailable")
                        );
                  }
                  render() {
                    const { token: e, ...t } = this.props,
                      { decimalValue: n } = this.state;
                    return o.default.createElement(
                      i.default,
                      h({}, t, { suffix: e.symbol, onChange: this.handleChange, onBlur: this.handleBlur, value: n }),
                      this.renderConversionComponent()
                    );
                  }
                }
                (n.default = y),
                  g(y, "contextTypes", { t: r.default.func }),
                  g(y, "propTypes", {
                    dataTestId: r.default.string,
                    currentCurrency: r.default.string,
                    onChange: r.default.func,
                    value: r.default.string,
                    showFiat: r.default.bool,
                    hideConversion: r.default.bool,
                    token: r.default.shape({ address: r.default.string.isRequired, decimals: r.default.number, symbol: r.default.string })
                      .isRequired,
                    tokenExchangeRates: r.default.object,
                    nativeCurrency: r.default.string,
                    tokens: r.default.array.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/token-input/token-input.component.js" }
    ],
    [
      4735,
      {
        "../../../ducks/metamask/metamask": 4763,
        "../../../selectors": 5197,
        "./token-input.component": 4734,
        "prop-types": 3450,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o = e("react-redux"),
                  r = s(e("prop-types")),
                  a = e("../../../selectors"),
                  i = e("../../../ducks/metamask/metamask"),
                  l = s(e("./token-input.component"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = (0, o.connect)((e) => {
                  const {
                    metamask: { currentCurrency: t, tokens: n }
                  } = e;
                  return {
                    currentCurrency: t,
                    tokenExchangeRates: (0, a.getTokenExchangeRates)(e),
                    hideConversion: !(0, a.getShouldShowFiat)(e),
                    nativeCurrency: (0, i.getNativeCurrency)(e),
                    tokens: n
                  };
                })(l.default);
                c.propTypes = {
                  token: r.default.shape({ address: r.default.string.isRequired, decimals: r.default.number, symbol: r.default.string })
                    .isRequired
                };
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/token-input/token-input.container.js" }
    ],
    [
      4736,
      { "./tooltip": 4737 },
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
                var o,
                  r = (o = e("./tooltip")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tooltip/index.js" }
    ],
    [
      4737,
      { "prop-types": 3450, react: 3690, "react-tippy": 3686 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var o,
                  r = (o = e("prop-types")) && o.__esModule ? o : { default: o },
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var o = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(o, a, i) : (o[a] = e[a]);
                      }
                    return (o.default = e), n && n.set(e, o), o;
                  })(e("react")),
                  i = e("react-tippy");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
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
                          var o = n.call(e, t || "default");
                          if ("object" != typeof o) return o;
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
                  render() {
                    const {
                      arrow: e,
                      children: t,
                      containerClassName: n,
                      disabled: o,
                      position: r,
                      html: l,
                      interactive: s,
                      size: c,
                      title: u,
                      trigger: d,
                      onHidden: p,
                      offset: f,
                      open: m,
                      wrapperClassName: h,
                      style: g,
                      theme: y,
                      tabIndex: b,
                      tag: v
                    } = this.props;
                    return u || l
                      ? a.default.createElement(
                          v,
                          { className: h },
                          a.default.createElement(
                            i.Tooltip,
                            {
                              arrow: e,
                              className: n,
                              disabled: o,
                              hideOnClick: !1,
                              html: l,
                              interactive: s,
                              onHidden: p,
                              position: r,
                              size: c,
                              offset: f,
                              style: g,
                              title: o ? "" : u,
                              trigger: d,
                              open: m,
                              theme: `tippy-tooltip--mm-custom ${y}`,
                              tabIndex: b || 0,
                              tag: v
                            },
                            t
                          )
                        )
                      : a.default.createElement("div", { className: h }, t);
                  }
                }
                (n.default = c),
                  s(c, "defaultProps", {
                    arrow: !0,
                    children: null,
                    containerClassName: "",
                    html: null,
                    interactive: undefined,
                    onHidden: null,
                    position: "left",
                    offset: 0,
                    open: undefined,
                    size: "small",
                    title: null,
                    trigger: "mouseenter focus",
                    wrapperClassName: undefined,
                    theme: "",
                    tag: "div"
                  }),
                  s(c, "propTypes", {
                    arrow: r.default.bool,
                    children: r.default.node,
                    containerClassName: r.default.string,
                    disabled: r.default.bool,
                    html: r.default.node,
                    interactive: r.default.bool,
                    offset: r.default.number,
                    onHidden: r.default.func,
                    open: r.default.bool,
                    position: r.default.oneOf(["top", "right", "bottom", "left"]),
                    size: r.default.oneOf(["small", "regular", "big"]),
                    title: r.default.string,
                    trigger: r.default.any,
                    wrapperClassName: r.default.string,
                    style: r.default.object,
                    theme: r.default.string,
                    tabIndex: r.default.number,
                    tag: r.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tooltip/tooltip.js" }
    ],
    [
      4738,
      { "./truncated-definition-list": 4739 },
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
                var o,
                  r = (o = e("./truncated-definition-list")) && o.__esModule ? o : { default: o };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/truncated-definition-list/index.js" }
    ]
  ],
  [],
  {}
);
